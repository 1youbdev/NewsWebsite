<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    const ROLE_ADMIN = 'admin';
    const ROLE_AUTHOR = 'auteur';
    const ROLE_USER = 'utilisateur';

    protected $fillable = [
        'name', 'email', 'password', 'role', 'phoneNumber','username'
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Relationships
    public function comments() {
        return $this->hasMany(Comment::class, 'idUser');
    }

    public function articles() {
        return $this->hasMany(Article::class, 'idUser');
    }

    public function subscription() {
        return $this->hasOne(Subscription::class, 'idUser');
    }

    // Helper methods
    public function isAdmin(): bool {
        return $this->role === self::ROLE_ADMIN;
    }

    public function isAuthor(): bool {
        return $this->role === self::ROLE_AUTHOR;
    }

    public function isRegularUser(): bool {
        return $this->role === self::ROLE_USER;
    }
public function sendEmailVerificationNotification()
{
    $this->notify(new \App\Notifications\CustomVerifyEmail);
}
public function categories()
{
  return $this->belongsToMany(Category::class, 'user_categories');
}
}