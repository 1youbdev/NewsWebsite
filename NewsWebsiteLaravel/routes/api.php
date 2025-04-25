<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Models\Article;
use App\Models\User;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Facades\URL;


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


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill(); // Marks email as verified
//     return response()->json(['message' => 'Email verified successfully']);
// })->middleware(['auth:sanctum', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $user = $request->user();

    if (!$user) {
        return response()->json(['message' => 'Unauthorized. Please log in.'], 401);
    }

    if ($user->hasVerifiedEmail()) {
        return response()->json(['message' => 'Already verified']);
    }

    $user->sendEmailVerificationNotification();

    return response()->json(['message' => 'Verification email sent']);
})->middleware(['auth:sanctum', 'throttle:6,1']);


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    
    // Protected routes can be added here
});

// Email verification route
// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill();
//     return response()->json(['message' => 'Email verified successfully']);
// })->middleware(['auth:sanctum', 'signed'])->name('verification.verify');
Route::get('/email/verify/{id}/{hash}', function ($id, $hash) {
    $user = User::findOrFail($id);

    if (! hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
        return response()->json(['message' => 'Invalid verification link.'], 403);
    }

    // Check if the user has already verified the email
    if ($user->hasVerifiedEmail()) {
        return response()->json(['message' => 'Email already verified.'], 200);
    }

    // Mark the email as verified
    $user->markEmailAsVerified();

    // Optionally, you can log them in after verification (if you want)
    auth()->login($user);

    return response()->json(['message' => 'Email successfully verified.']);
})->name('verification.verify')->middleware('signed');