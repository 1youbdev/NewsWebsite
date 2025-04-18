<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Models\Article;

/*
|--------------------------------------------------------------------------
| Article API Routes
|--------------------------------------------------------------------------
|
| All Article related API endpoints in one place
|
*/

Route::prefix('articles')->group(function () {
    // Get all articles
    Route::get('/', function () {
        $articles = Article::with(['user', 'category'])->get();
        
        return response()->json([
            'success' => true,
            'data' => $articles
        ]);
    });

    // Create new article
    Route::post('/', function (Request $request) {
        $validator = Validator::make($request->all(), [
            'idUser' => 'required|exists:users,id',
            'idCategory' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->only(['idUser', 'idCategory', 'title', 'content']);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/articles');
            $data['image'] = Storage::url($imagePath);
        }

        $article = Article::create($data);

        return response()->json([
            'success' => true,
            'data' => $article,
            'message' => 'Article created successfully'
        ], 201);
    });

    // Get single article
    Route::get('/{id}', function ($id) {
        $article = Article::with(['user', 'category'])->find($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $article
        ]);
    });

    // Update article
    Route::put('/{id}', function (Request $request, $id) {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'idUser' => 'sometimes|exists:users,id',
            'idCategory' => 'sometimes|exists:categories,id',
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->only(['idUser', 'idCategory', 'title', 'content']);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($article->image) {
                $oldImagePath = str_replace('/storage', 'public', $article->image);
                Storage::delete($oldImagePath);
            }
            
            $imagePath = $request->file('image')->store('public/articles');
            $data['image'] = Storage::url($imagePath);
        }

        $article->update($data);

        return response()->json([
            'success' => true,
            'data' => $article,
            'message' => 'Article updated successfully'
        ]);
    });

    // Delete article
    Route::delete('/{id}', function ($id) {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        // Delete associated image if exists
        if ($article->image) {
            $imagePath = str_replace('/storage', 'public', $article->image);
            Storage::delete($imagePath);
        }

        $article->delete();

        return response()->json([
            'success' => true,
            'message' => 'Article deleted successfully'
        ]);
    });
});