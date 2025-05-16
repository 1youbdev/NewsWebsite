<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DictionaryController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Models\Article;
use App\Models\User;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Facades\URL;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/*
|--------------------------------------------------------------------------
| Article API Routes
|--------------------------------------------------------------------------
|
| All Article related API endpoints in one place
|
*/

// Use the ArticleController for all article routes
Route::prefix('articles')->group(function () {
    Route::get('/', [ArticleController::class, 'index']);
    Route::post('/', [ArticleController::class, 'store']);
    Route::get('/{id}', [ArticleController::class, 'show']);
    Route::put('/{id}', [ArticleController::class, 'update']);
    Route::delete('/{id}', [ArticleController::class, 'destroy']);
});

// Auth routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

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
});

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

Route::middleware('auth:sanctum')->post('/subscribe', [SubscriptionController::class, 'toggle']);
Route::middleware('auth:sanctum')->get('/profile', function (Request $request) {
    $user = $request->user();
    return response()->json([
        'user' => [
            'name' => $user->name,
            'email' => $user->email,
            'username' => $user->username,
            'phone' => $user->phoneNumber,
            'subscribed' => $user->subscription()->exists(), // or a boolean field if stored directly
        ]
    ]);
});

Route::middleware('auth:sanctum')->patch('/profile', function (Request $request) {
    $user = $request->user();

    // Validate incoming request data (e.g., name, email, etc.)
    $validated = $request->validate([
        'name' => 'sometimes|string|max:255',
        'email' => 'sometimes|email|max:255|unique:users,email,' . $user->id,
        'username' => 'sometimes|string|max:255|unique:users,username,' . $user->id,
        'phone' => 'sometimes|string|max:20',
    ]);

    // Update user's details
    $user->update($validated);

    return response()->json([
        'success' => true,
        'message' => 'Profile updated successfully',
        'user' => [
            'name' => $user->name,
            'email' => $user->email,
            'username' => $user->username,
            'phone' => $user->phoneNumber,
        ]
    ]);
});

Route::get('/test', function () {
    return response()->json(['message' => 'CORS OK']);
});

// Section routes
Route::get('/sections', [SectionController::class, 'index']);
Route::get('/sections/category/{categoryId}', [SectionController::class, 'getByCategory']);
Route::get('/sections/latest', [SectionController::class, 'getLatestArticle']);

// Article detail route - use controller
Route::get('/articles/{id}', [DetailController::class, 'show']);

// Comment routes
// Comment routes
Route::get('/articles/{id}/comments', [App\Http\Controllers\CommentController::class, 'getArticleComments']);

// Make sure you also have these routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/comments', [App\Http\Controllers\CommentController::class, 'store']);
    Route::delete('/comments/{id}', [App\Http\Controllers\CommentController::class, 'destroy']);
});
// The Laravel API routes remain the same
// In your routes/api.php file:

Route::get('/search', [App\Http\Controllers\SearchController::class, 'search']);

Route::prefix('dictionary')->group(function () {
    Route::get('/synonyms', [DictionaryController::class, 'getSynonyms']);
});
