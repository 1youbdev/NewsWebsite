<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'nullable|string|max:255',
            'username' => 'nullable|string|max:255',
            'PhoneNumber' => 'nullable|string|max:20',
            'categories' => 'nullable|array',
            'categories.*' => 'required|integer|exists:categories,id',
        ]);

        $user->update([
            'name' => $request->name,
            'username' => $request->username,
            'phone' => $request->PhoneNumber,
        ]);

        if ($request->has('categories')) {
            DB::table('user_categories')->where('idUser', $user->id)->delete();
        
            $inserts = collect($request->categories)->map(fn ($id) => [
                'idUser' => $user->id,
                'category_id' => $id,
                'created_at' => now(),
                'category_name' => DB::table('categories')->where('id', $id)->value('name'),
                'updated_at' => now(),
            ])->toArray();
        
            DB::table('user_categories')->insert($inserts);
        }

        return response()->json(['message' => 'Profile updated successfully']);
    }
}
