<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password as PasswordRule;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\PasswordReset;

class AuthController extends Controller
{
    public function sendResetLinkEmail(Request $request)
{
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request->only('email')
    );

    return $status === Password::RESET_LINK_SENT
        ? response()->json(['message' => __($status)])
        : response()->json(['error' => __($status)], 400);
}
public function sendResetLinkToAuthenticatedUser(Request $request)
{
    $user = $request->user();

    $status = Password::sendResetLink([
        'email' => $user->email,
    ]);

    return $status === Password::RESET_LINK_SENT
        ? response()->json(['message' => __($status)])
        : response()->json(['error' => __($status)], 400);
}

public function resetPassword(Request $request)
{
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => ['required', 'confirmed', PasswordRule::min(8)],
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function ($user, $password) {
            $user->forceFill([
                'password' => Hash::make($password),
                'remember_token' => Str::random(60),
            ])->save();

            event(new PasswordReset($user));
        }
    );

    return $status === Password::PASSWORD_RESET
        ? response()->json(['message' => __($status)])
        : response()->json(['error' => __($status)], 400);
}

    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', PasswordRule::min(8)],
            'phoneNumber' => 'nullable|string|max:20',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => User::ROLE_USER,
            'phoneNumber' => $validated['phoneNumber'] ?? null,
        ]);

        // 🔔 Déclenche l’envoi du mail de vérification
        event(new Registered($user));

        return response()->json([
            'message' => 'User registered successfully. Please verify your email.',
            'user' => $user->only(['id', 'name', 'email', 'role']),
        ], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $user = Auth::user(); // Utiliser l'utilisateur authentifié via Auth

        if (!$user->hasVerifiedEmail()) {
            return response()->json([
                'message' => 'Please verify your email address first.'
            ], 403);
        }
        $redirectPath = '';
    if (is_null($user->email_verified_at)) {
        $redirectPath = '/verify-email'; // This is the React route
    } elseif ($user->role === 'admin') {
        $redirectPath = '/admin-dashboard';
    } elseif ($user->role === 'auteur') {
        $redirectPath = '/Add_article';
    } else {
        $redirectPath = '/Home';
    }

        return response()->json([
            'token' => $user->createToken('auth_token')->plainTextToken,
            'user' => $user->only(['id', 'name', 'email', 'role']),
            'message' => 'Login successful',
            'redirect'=>$redirectPath,
        ]);
        // redirect()->route('home');
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }

    public function me(Request $request)
    {
        return response()->json($request->user()->only(['id', 'name', 'email', 'role']));
    }
}
