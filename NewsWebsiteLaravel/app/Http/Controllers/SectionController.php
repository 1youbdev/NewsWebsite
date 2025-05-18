<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SectionController extends Controller
{
    /**
     * Get articles formatted for the Section page
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            // Get latest article for the hero section
            $latestArticle = Article::with(['user', 'category'])
                ->latest()
                ->first();

            // Get the 3 featured articles for the main display (excluding the latest)
            $featuredArticles = Article::with(['user', 'category'])
                ->where('id', '!=', $latestArticle ? $latestArticle->id : 0)
                ->orderBy('created_at', 'desc')
                ->take(3)
                ->get()
                ->map(function ($article) {
                    return $this->formatArticle($article);
                });

            // Get categories with their latest articles
            $categories = Category::all();
            $categorizedArticles = [];

            foreach ($categories as $category) {
                $articles = Article::with(['user'])
                    ->where('idCategory', $category->id)
                    ->latest()
                    ->take(4)  // Get 4 latest articles per category
                    ->get()
                    ->map(function ($article) {
                        return $this->formatArticle($article);
                    });

                if ($articles->count() > 0) {
                    $categorizedArticles[] = [
                        'category' => $category->name,
                        'categoryId' => $category->id,
                        'articles' => $articles
                    ];
                }
            }

            return response()->json([
                'success' => true,
                'latestArticle' => $this->formatArticle($latestArticle),
                'featuredArticles' => $featuredArticles,
                'categorizedArticles' => $categorizedArticles
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load section data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Format an article for the frontend response
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
            'image' => $article->image ? Storage::url($article->image) : null,
            'file' => $article->file ? Storage::url($article->file) : null,
            'hasPdf' => !empty($article->file),
            'categoryId' => $article->idCategory,
            'categoryName' => $article->category ? $article->category->name : null,
            'created_at' => $article->created_at->format('Y-m-d H:i:s'),
            'formattedDate' => $article->created_at->diffForHumans(),
            'author' => $article->user ? $article->user->name : null
        ];
    }

    /**
     * Get articles by category
     *
     * @param int $categoryId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByCategory($categoryId)
    {
        try {
            $category = Category::find($categoryId);

            if (!$category) {
                return response()->json([
                    'success' => false,
                    'message' => 'Category not found'
                ], 404);
            }

            $articles = Article::with(['user', 'category'])
                ->where('idCategory', $categoryId)
                ->latest()
                ->paginate(10);  // Paginate for better performance

            $formattedArticles = $articles->map(function ($article) {
                return $this->formatArticle($article);
            });

            return response()->json([
                'success' => true,
                'category' => $category->name,
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
                'message' => 'Failed to load category articles',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get the latest article for the header section
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLatestArticle()
    {
        try {
            $latestArticle = Article::with(['user', 'category'])
                ->latest()
                ->first();

            return response()->json([
                'success' => true,
                'data' => $this->formatArticle($latestArticle)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load latest article',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
