<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'content', 'idUser', 'image', 'idCategory', 'file', 'priority'];
    public function user()
    {
        return $this->belongsTo(User::class, 'idUser');
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'idCategory');
    }
    public function comments()
    {
        return $this->hasMany(Comment::class, 'idArticle'); // Match your DB column
    }
}
