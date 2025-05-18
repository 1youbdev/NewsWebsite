<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Search articles by title
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        try {
            $query = $request->input('query');

            if (empty($query)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Search query is required'
                ], 400);
            }

            // Search articles that contain the query string in the title
            $articles = Article::with(['user', 'category'])
                ->where('title', 'LIKE', '%' . $query . '%')
                ->latest()
                ->paginate(10);

            // Format the articles using the same format as SectionController
            $formattedArticles = $articles->map(function ($article) {
                return $this->formatArticle($article);
            });

            return response()->json([
                'success' => true,
                'data' => $formattedArticles,
                'pagination' => [
                    'total' => $articles->total(),
                    'per_page' => $articles->perPage(),
                    'current_page' => $articles->currentPage(),
                    'last_page' => $articles->lastPage()
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to search articles',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Format an article for the frontend response
     * This is copied from SectionController to maintain consistent formatting
     *
     * @param Article $article
     * @return array
     */
    private function formatArticle($article)
    {
        if (!$article) {
            return null;
        }

        return [
            'id' => $article->id,
            'title' => $article->title,
            'content' => substr($article->content, 0, 150) . (strlen($article->content) > 150 ? '...' : ''),
            'fullContent' => $article->content,
            'image' => $article->image ? \Illuminate\Support\Facades\Storage::url($article->image) : null,
            'file' => $article->file ? \Illuminate\Support\Facades\Storage::url($article->file) : null,
            'hasPdf' => !empty($article->file),
            'categoryId' => $article->idCategory,
            'categoryName' => $article->category ? $article->category->name : null,
            'created_at' => $article->created_at->format('Y-m-d H:i:s'),
            'formattedDate' => $article->created_at->diffForHumans(),
            'author' => $article->user ? $article->user->name : null
        ];
    }
}
