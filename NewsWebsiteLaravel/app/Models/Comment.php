<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// class Comment extends Model
// {
//     use HasFactory;
//     protected $fillable = ['idUser','idArticle','text'];

//     public function user(){
//         return $this->belongsTo(User::class, 'idUser');
//     }
// }
class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['idUser', 'idArticle', 'text'];

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser');
    }

    public function article()
    {
        return $this->belongsTo(Article::class, 'idArticle'); // Match your DB column
    }
}
