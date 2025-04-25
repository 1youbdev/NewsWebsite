
<?php
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use App\Models\User;

Route::get('/email/verify/{id}/{hash}', function (Request $request, $id, $hash) {
    $user = User::findOrFail($id);

    if (! hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
        return response()->json(['message' => 'Invalid verification link'], 403);
    }

    if ($user->hasVerifiedEmail()) {
        return redirect('http://localhost:5173/login'); // already verified
    }

    if ($user->markEmailAsVerified()) {
        event(new Verified($user));
    }

    return redirect('http://localhost:5173/verify-prompt?verified=1');
})->middleware(['web'])->name('verification.verify');
