<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;
    protected $fillable = ['email','idUser'];
    public function user(){
        return $this->belongsTo(User::class,'idUser');
    }
}
