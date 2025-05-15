<?php

/**
 * Modified DetailController.php - This will fix the image URL formatting issue
 */

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DetailController extends Controller
{
    /**
     * Get a specific article with full details
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            // Log the request for debugging
            Log::info("Fetching article with ID: {$id}");

            $article = Article::with(['user', 'category'])->findOrFail($id);

            // Log article found
            Log::info("Article found: {$article->title}");

            // Get comments for this article
            $comments = Comment::where('idArticle', $id)
                ->with('user')
                ->latest()
                ->get()
                ->map(function ($comment) {
                    return [
                        'id' => $comment->id,
                        'content' => $comment->content,
                        'user' => $comment->user ? $comment->user->name : 'Anonymous',
                        'created_at' => $comment->created_at->format('Y-m-d H:i:s'),
                        'formattedDate' => $comment->created_at->diffForHumans(),
                    ];
                });

            // Get similar articles from the same category
            $similarArticles = Article::where('idCategory', $article->idCategory)
                ->where('id', '!=', $article->id)
                ->latest()
                ->take(6)
                ->get()
                ->map(function ($article) {
                    return $this->formatArticle($article);
                });

            // Get trending articles (most viewed or recently published)
            $trendingArticles = Article::latest()
                ->take(4)
                ->get()
                ->map(function ($article) {
                    return $this->formatArticle($article);
                });

            // IMPORTANT CHANGE: Return the article directly under the response instead of nested
            return response()->json([
                'success' => true,
                'article' => [
                    'id' => $article->id,
                    'title' => $article->title,
                    'content' => $article->content,
                    // FIXED IMAGE URL - handle both full URLs and relative paths
                    'image' => $article->image
                        ? (strpos($article->image, 'http') === 0 ? $article->image : asset('storage/articles/' . basename($article->image)))
                        : null,
                    'categoryId' => $article->idCategory,
                    'categoryName' => $article->category ? $article->category->name : null,
                    'created_at' => $article->created_at->format('Y-m-d H:i:s'),
                    'formattedDate' => $article->created_at->diffForHumans(),
                    'author' => $article->user ? $article->user->name : null
                ],
                'comments' => $comments,
                'similarArticles' => $similarArticles,
                'trendingArticles' => $trendingArticles
            ]);
        } catch (\Exception $e) {
            // Log the error with more details
            Log::error("Error fetching article: {$e->getMessage()}");
            Log::error($e->getTraceAsString());

            return response()->json([
                'success' => false,
                'message' => 'Article not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Format an article for the frontend response - updated with better image handling
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
            // IMPROVED IMAGE URL HANDLING
            'image' => $article->image
                ? (strpos($article->image, 'http') === 0 ? $article->image : asset('storage/articles/' . basename($article->image)))
                : null,
            'categoryId' => $article->idCategory,
            'categoryName' => $article->category ? $article->category->name : null,
            'created_at' => $article->created_at->format('Y-m-d H:i:s'),
            'formattedDate' => $article->created_at->diffForHumans(),
            'author' => $article->user ? $article->user->name : null
        ];
    }
}
