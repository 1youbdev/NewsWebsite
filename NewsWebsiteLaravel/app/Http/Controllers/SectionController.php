<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SectionController extends Controller
{
    /**
     * Get the homepage sections data with UTF-8 encoding fix
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            // Start with empty response structure in case of partial failures
            $response = [
                'success' => true,
                'latestArticle' => null,
                'featuredArticles' => [],
                'categorizedArticles' => []
            ];

            // Get latest article with more robust error handling
            try {
                $latestArticle = Article::with(['user', 'category'])
                    ->latest()
                    ->first();

                // Format latest article if exists
                $response['latestArticle'] = $latestArticle ? $this->safeFormatArticle($latestArticle) : null;
            } catch (\Exception $e) {
                Log::error("Error getting latest article: {$e->getMessage()}");
                // Continue with empty latestArticle
            }

            // Get featured articles with error handling
            try {
                $featuredArticles = Article::with(['user', 'category'])
                    ->when($response['latestArticle'], function ($query) use ($response) {
                        // Exclude the latest article from featured articles if it exists
                        return $query->where('id', '!=', $response['latestArticle']['id']);
                    })
                    ->orderBy('priority', 'desc')
                    ->orderBy('created_at', 'desc')
                    ->take(10)
                    ->get();

                $formattedFeatured = [];
                foreach ($featuredArticles as $article) {
                    try {
                        $formattedFeatured[] = $this->safeFormatArticle($article);
                    } catch (\Exception $e) {
                        Log::error("Error formatting featured article {$article->id}: {$e->getMessage()}");
                        // Skip this article but continue with others
                    }
                }

                $response['featuredArticles'] = $formattedFeatured;
            } catch (\Exception $e) {
                Log::error("Error getting featured articles: {$e->getMessage()}");
                // Continue with empty featuredArticles
            }

            // Get categorized articles with error handling
            try {
                $categories = Category::all();
                $categorizedArticles = [];

                foreach ($categories as $category) {
                    try {
                        $articles = Article::where('idCategory', $category->id)
                            ->with(['user', 'category'])
                            ->latest()
                            ->take(4)
                            ->get();

                        $formattedArticles = [];
                        foreach ($articles as $article) {
                            try {
                                $formattedArticles[] = $this->safeFormatArticle($article);
                            } catch (\Exception $e) {
                                Log::error("Error formatting article {$article->id} in category {$category->id}: {$e->getMessage()}");
                                // Skip this article but continue with others
                            }
                        }

                        if (count($formattedArticles) > 0) {
                            $categorizedArticles[] = [
                                'categoryId' => $category->id,
                                'category' => $this->sanitizeString($category->name),
                                'articles' => $formattedArticles
                            ];
                        }
                    } catch (\Exception $e) {
                        Log::error("Error processing category {$category->id}: {$e->getMessage()}");
                        // Skip this category but continue with others
                    }
                }

                $response['categorizedArticles'] = $categorizedArticles;
            } catch (\Exception $e) {
                Log::error("Error getting categorized articles: {$e->getMessage()}");
                // Continue with empty categorizedArticles
            }

            // Ensure all response data is properly sanitized
            $jsonResponse = json_encode($response, JSON_INVALID_UTF8_SUBSTITUTE | JSON_PARTIAL_OUTPUT_ON_ERROR);

            if ($jsonResponse === false) {
                Log::error("JSON encoding error: " . json_last_error_msg());
                throw new \Exception("Failed to encode response data");
            }

            return response($jsonResponse)
                ->header('Content-Type', 'application/json; charset=utf-8');
        } catch (\Exception $e) {
            Log::error("Critical error fetching section data: {$e->getMessage()}");
            Log::error($e->getTraceAsString());

            return response()->json([
                'success' => false,
                'message' => 'Failed to load section data',
                'error' => 'Internal server error'
            ], 500);
        }
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
            $category = Category::findOrFail($categoryId);

            $articles = Article::where('idCategory', $categoryId)
                ->with(['user', 'category'])
                ->latest()
                ->get();

            $safeArticles = [];
            foreach ($articles as $article) {
                try {
                    $safeArticles[] = $this->safeFormatArticle($article);
                } catch (\Exception $e) {
                    Log::error("Error formatting article {$article->id}: {$e->getMessage()}");
                    // Skip problematic articles
                }
            }

            $response = [
                'success' => true,
                'category' => $this->sanitizeString($category->name),
                'articles' => $safeArticles
            ];

            return response()->json($response, 200, [], JSON_INVALID_UTF8_SUBSTITUTE);
        } catch (\Exception $e) {
            Log::error("Error fetching category articles: {$e->getMessage()}");

            return response()->json([
                'success' => false,
                'message' => 'Failed to load category articles',
                'error' => 'Internal server error'
            ], 500);
        }
    }

    /**
     * Get the latest article
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLatestArticle()
    {
        try {
            $latestArticle = Article::with(['user', 'category'])
                ->latest()
                ->first();

            if (!$latestArticle) {
                return response()->json([
                    'success' => false,
                    'message' => 'No articles found'
                ], 404);
            }

            $safeArticle = $this->safeFormatArticle($latestArticle);

            return response()->json([
                'success' => true,
                'article' => $safeArticle
            ], 200, [], JSON_INVALID_UTF8_SUBSTITUTE);
        } catch (\Exception $e) {
            Log::error("Error fetching latest article: {$e->getMessage()}");

            return response()->json([
                'success' => false,
                'message' => 'Failed to load latest article',
                'error' => 'Internal server error'
            ], 500);
        }
    }

    /**
     * Format an article for the frontend response with enhanced safety
     *
     * @param Article $article
     * @return array
     */
    private function safeFormatArticle($article)
    {
        if (!$article) {
            return null;
        }

        try {
            return [
                'id' => $article->id,
                'title' => $this->sanitizeString($article->title),
                'content' => $this->sanitizeString($article->content),
                // Handle image URL properly
                'image' => $article->image
                    ? (strpos($article->image, 'http') === 0 ? $article->image : asset('storage/' . $article->image))
                    : null,
                'categoryId' => $article->idCategory,
                'categoryName' => $article->category ? $this->sanitizeString($article->category->name) : null,
                'created_at' => $article->created_at ? $article->created_at->format('Y-m-d H:i:s') : null,
                'formattedDate' => $article->created_at ? $article->created_at->diffForHumans() : null,
                'author' => $article->user ? $this->sanitizeString($article->user->name) : null
            ];
        } catch (\Exception $e) {
            Log::error("Error in safeFormatArticle for article {$article->id}: {$e->getMessage()}");
            throw $e; // Re-throw to be handled by the caller
        }
    }

    /**
     * Clean and sanitize a string for safe JSON encoding
     *
     * @param string|null $str
     * @return string|null
     */
    private function sanitizeString($str)
    {
        if ($str === null) {
            return null;
        }

        // Remove invalid UTF-8 sequences
        $str = mb_convert_encoding($str, 'UTF-8', 'UTF-8');

        // Replace common problematic characters
        $str = str_replace(
            ["\u{0000}", "\u{FFFD}", "\r\n", "\r"],
            ['', '', "\n", "\n"],
            $str
        );

        return $str;
    }
}
