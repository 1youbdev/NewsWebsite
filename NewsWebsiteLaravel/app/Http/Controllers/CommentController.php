<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    // List of bad words to filter out
    private $badWords = [
        'shit',
        'fuck',
        'slut',
        'whore',
        'damn',
        'bastard',
        'idiot',
        'moron',
        'asshole',
        'douche',
        'stupid',
        'dumb',
        'racist',
        'hate',
        'disgusting',
        'jerk',
        'cunt',
        'twat',
        'scum',
        'filthy',
        'trash',
        'worthless',
        'loser',
        'pig',
        'freak',
        'ugly',
        'dirtbag',
        'creep',
        'scumbag',
        'hate speech'
    ];

    /**
     * Store a newly created comment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            // Check if user is authenticated
            if (!Auth::check()) {
                return response()->json([
                    'success' => false,
                    'message' => 'You must be logged in to comment'
                ], 401);
            }

            // Validate incoming request
            $validator = Validator::make($request->all(), [
                'articleId' => 'required|exists:articles,id',
                'text' => 'required|string|max:1000|min:2',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            // Check for bad words
            $text = $request->text;
            if ($this->containsBadWords($text)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Your comment contains inappropriate language.'
                ], 422);
            }

            // Create and save the comment
            $comment = new Comment();
            $comment->idArticle = $request->articleId;
            $comment->idUser = Auth::id();
            $comment->text = $text;
            $comment->save();

            // Get the user's name for the response
            $userName = Auth::user()->name;

            // Return the new comment with user details
            return response()->json([
                'success' => true,
                'message' => 'Comment added successfully',
                'comment' => [
                    'id' => $comment->id,
                    'text' => $comment->text,
                    'user' => $userName,
                    'created_at' => $comment->created_at->format('Y-m-d H:i:s'),
                    'formattedDate' => $comment->created_at->diffForHumans(),
                ]
            ], 201);
        } catch (\Exception $e) {
            Log::error("Error adding comment: {$e->getMessage()}");
            return response()->json([
                'success' => false,
                'message' => 'Failed to add comment',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Check if the comment contains bad words
     *
     * @param  string  $text
     * @return bool
     */
    private function containsBadWords($text)
    {
        // Convert to lowercase for case-insensitive matching
        $lowercaseText = strtolower($text);

        foreach ($this->badWords as $word) {
            // Use word boundary check to match whole words only
            if (preg_match('/\b' . preg_quote($word, '/') . '\b/i', $lowercaseText)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Remove a comment (only for admins or comment owner)
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $comment = Comment::findOrFail($id);

            // Check if user can delete this comment
            if (Auth::id() !== $comment->idUser && Auth::user()->role !== 'admin') {
                return response()->json([
                    'success' => false,
                    'message' => 'Unauthorized to delete this comment'
                ], 403);
            }

            $comment->delete();

            return response()->json([
                'success' => true,
                'message' => 'Comment deleted successfully'
            ]);
        } catch (\Exception $e) {
            Log::error("Error deleting comment: {$e->getMessage()}");
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete comment',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all comments for an article
     *
     * @param  int  $articleId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getArticleComments($articleId)
    {
        try {
            $comments = Comment::where('idArticle', $articleId)
                ->join('users', 'comments.idUser', '=', 'users.id')
                ->select('comments.*', 'users.name as user')
                ->orderBy('comments.created_at', 'desc')
                ->get()
                ->map(function ($comment) {
                    return [
                        'id' => $comment->id,
                        'text' => $comment->text,
                        'user' => $comment->user,
                        'created_at' => $comment->created_at->format('Y-m-d H:i:s'),
                        'formattedDate' => $comment->created_at->diffForHumans(),
                    ];
                });

            return response()->json([
                'success' => true,
                'comments' => $comments
            ]);
        } catch (\Exception $e) {
            Log::error("Error fetching comments: {$e->getMessage()}");
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch comments',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
