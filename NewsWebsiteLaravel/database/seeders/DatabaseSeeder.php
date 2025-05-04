<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // Insert users
        DB::table('users')->insert([
            ['name' => 'Amal', 'email' => 'amal@example.com', 'role' => 'admin', 'phoneNumber' => '123456789', 'password' => Hash::make('password')],
            ['name' => 'John Doe', 'email' => 'john@example.com', 'role' => 'auteur', 'phoneNumber' => NULL, 'password' => Hash::make('password')],
            ['name' => 'Jane Doe', 'email' => 'jane@example.com', 'role' => 'utilisateur', 'phoneNumber' => NULL, 'password' => Hash::make('password')],
        ]);

        // Insert categories
        DB::table('categories')->insert([
            ['name' => 'Politics'],
            ['name' => 'Society'],
            ['name' => 'Economy'],
            ['name' => 'MENA'],
            ['name' => 'International'],
            ['name' => 'Media'],
            ['name' => 'Culture'],
            ['name' => 'Sports'],
        ]);

        // Insert articles
        DB::table('articles')->insert([
            ['title' => 'Tech Advancements in 2025', 'content' => 'A deep dive into new innovations.', 'image' => NULL],
            ['title' => 'Global Economy Trends', 'content' => 'Analyzing major financial shifts.', 'image' => NULL],
        ]);

        // Insert comments
        DB::table('comments')->insert([
            ['idUser' => 1, 'idArticle' => 1, 'text' => 'Great article, very informative!'],
            ['idUser' => 2, 'idArticle' => 2, 'text' => 'Interesting perspective on the economy!'],
        ]);
    }
}
