<?php

/**
 * Enhanced DetailController.php with comprehensive error handling and debugging
 */

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Exception;

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
            Log::info("DetailController: Fetching article with ID: {$id}");

            // Validate ID is numeric
            if (!is_numeric($id)) {
                Log::warning("DetailController: Invalid ID format: {$id}");
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid article ID format'
                ], 400);
            }

            // Check database connection
            try {
                \DB::connection()->getPdo();
                Log::info("DetailController: Database connection successful");
            } catch (Exception $e) {
                Log::error("DetailController: Database connection failed: " . $e->getMessage());
                return response()->json([
                    'success' => false,
                    'message' => 'Database connection error'
                ], 500);
            }

            // Find the article with relationships
            Log::info("DetailController: Attempting to find article with relationships");
            $article = Article::with(['user', 'category'])->find($id);

            // Check if article exists
            if (!$article) {
                Log::warning("DetailController: Article not found with ID: {$id}");
                return response()->json([
                    'success' => false,
                    'message' => 'Article not found'
                ], 404);
            }

            // Log article found
            Log::info("DetailController: Article found - ID: {$article->id}, Title: {$article->title}");

            // Get comments for this article with error handling
            $comments = collect([]);
            try {
                Log::info("DetailController: Fetching comments for article ID: {$id}");

                // Try different possible column names for article ID in comments table
                $commentsQuery = null;
                if (\Schema::hasColumn('comments', 'article_id')) {
                    $commentsQuery = Comment::where('article_id', $id)->with('user')->latest()->get();
                } elseif (\Schema::hasColumn('comments', 'idArticle')) {
                    $commentsQuery = Comment::where('idArticle', $id)->with('user')->latest()->get();
                } elseif (\Schema::hasColumn('comments', 'articleId')) {
                    $commentsQuery = Comment::where('articleId', $id)->with('user')->latest()->get();
                } else {
                    Log::warning("DetailController: No recognized article ID column found in comments table");
                    $commentsQuery = collect([]);
                }

                if ($commentsQuery && !$commentsQuery->isEmpty()) {
                    $comments = $commentsQuery->map(function ($comment) {
                        return [
                            'id' => $comment->id,
                            'content' => $comment->content ?? $comment->text ?? '',
                            'text' => $comment->content ?? $comment->text ?? '', // Frontend expects 'text' field
                            'user' => $comment->user ? $comment->user->name : 'Anonymous',
                            'created_at' => $comment->created_at ? $comment->created_at->format('Y-m-d H:i:s') : null,
                            'formattedDate' => $comment->created_at ? $comment->created_at->diffForHumans() : 'Unknown',
                        ];
                    });
                }
                Log::info("DetailController: Found " . $comments->count() . " comments");
            } catch (Exception $e) {
                Log::error("DetailController: Error fetching comments: " . $e->getMessage());
                // Continue with empty comments instead of failing
            }

            // Get similar articles from the same category with error handling
            $similarArticles = collect([]);
            try {
                if ($article->idCategory || $article->category_id) {
                    $categoryId = $article->idCategory ?? $article->category_id;
                    Log::info("DetailController: Fetching similar articles from category: {$categoryId}");
                    $similarQuery = Article::where(function ($query) use ($categoryId) {
                        $query->where('idCategory', $categoryId)
                            ->orWhere('category_id', $categoryId);
                    })
                        ->where('id', '!=', $article->id)
                        ->latest()
                        ->take(6)
                        ->get();

                    $similarArticles = $similarQuery->map(function ($similarArticle) {
                        return $this->formatArticle($similarArticle);
                    })->filter(); // Remove null values
                    Log::info("DetailController: Found " . $similarArticles->count() . " similar articles");
                }
            } catch (Exception $e) {
                Log::error("DetailController: Error fetching similar articles: " . $e->getMessage());
                // Continue with empty similar articles instead of failing
            }

            // Get trending articles (most viewed or recently published) with error handling
            $trendingArticles = collect([]);
            try {
                Log::info("DetailController: Fetching trending articles");
                $trendingQuery = Article::latest()
                    ->where('id', '!=', $article->id)
                    ->take(4)
                    ->get();

                $trendingArticles = $trendingQuery->map(function ($trendingArticle) {
                    return $this->formatArticle($trendingArticle);
                })->filter(); // Remove null values
                Log::info("DetailController: Found " . $trendingArticles->count() . " trending articles");
            } catch (Exception $e) {
                Log::error("DetailController: Error fetching trending articles: " . $e->getMessage());
                // Continue with empty trending articles instead of failing
            }

            // Format the main article with proper image URL handling
            $formattedArticle = [
                'id' => $article->id,
                'title' => $article->title ?? 'Untitled',
                'content' => $article->content ?? '',
                // Fixed image URL - handle both storage paths and full URLs
                'image' => $this->getImageUrl($article->image ?? null),
                'categoryId' => $article->idCategory ?? $article->category_id ?? null,
                'categoryName' => $article->category ? $article->category->name : null,
                'created_at' => $article->created_at ? $article->created_at->format('Y-m-d H:i:s') : null,
                'formattedDate' => $article->created_at ? $article->created_at->diffForHumans() : 'Unknown',
                'author' => $article->user ? $article->user->name : 'Anonymous'
            ];

            Log::info("DetailController: Successfully prepared response for article ID: {$id}");

            return response()->json([
                'success' => true,
                'article' => $formattedArticle,
                'comments' => $comments,
                'similarArticles' => $similarArticles,
                'trendingArticles' => $trendingArticles
            ], 200);
        } catch (Exception $e) {
            // Log the error with more details
            Log::error("DetailController: Critical error fetching article with ID {$id}");
            Log::error("DetailController: Error message: " . $e->getMessage());
            Log::error("DetailController: Error file: " . $e->getFile());
            Log::error("DetailController: Error line: " . $e->getLine());
            Log::error("DetailController: Stack trace: " . $e->getTraceAsString());

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while fetching the article',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error',
                'debug' => config('app.debug') ? [
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                    'trace' => $e->getTraceAsString()
                ] : null
            ], 500);
        }
    }

    /**
     * Format an article for the frontend response
     *
     * @param Article $article
     * @return array|null
     */
    private function formatArticle($article)
    {
        if (!$article) {
            return null;
        }

        try {
            return [
                'id' => $article->id,
                'title' => $article->title ?? 'Untitled',
                'content' => $article->content ?
                    (strlen($article->content) > 150 ? substr($article->content, 0, 150) . '...' : $article->content)
                    : '',
                'image' => $this->getImageUrl($article->image ?? null),
                'categoryId' => $article->idCategory ?? $article->category_id ?? null,
                'categoryName' => $article->category ? $article->category->name : null,
                'created_at' => $article->created_at ? $article->created_at->format('Y-m-d H:i:s') : null,
                'formattedDate' => $article->created_at ? $article->created_at->diffForHumans() : 'Unknown',
                'author' => $article->user ? $article->user->name : 'Anonymous'
            ];
        } catch (Exception $e) {
            Log::error("DetailController: Error formatting article {$article->id}: " . $e->getMessage());
            return null;
        }
    }

    /**
     * Get properly formatted image URL
     *
     * @param string|null $imagePath
     * @return string|null
     */
    private function getImageUrl($imagePath)
    {
        try {
            if (!$imagePath) {
                return null;
            }

            // If it's already a full URL, return as is
            if (filter_var($imagePath, FILTER_VALIDATE_URL)) {
                return $imagePath;
            }

            // If it starts with http but isn't a valid URL, still try to return it
            if (strpos($imagePath, 'http') === 0) {
                return $imagePath;
            }

            // If it's a storage path, convert to public URL
            if (strpos($imagePath, 'articles/') === 0) {
                return asset('storage/' . $imagePath);
            }

            // If it already starts with 'storage/', just add asset()
            if (strpos($imagePath, 'storage/') === 0) {
                return asset($imagePath);
            }

            // If it's just a filename, assume it's in the articles directory
            return asset('storage/articles/' . basename($imagePath));
        } catch (Exception $e) {
            Log::error("DetailController: Error processing image URL '{$imagePath}': " . $e->getMessage());
            return null;
        }
    }
}
