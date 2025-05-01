<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function toggle(Request $request)
    {
        $user = $request->user();
        $subscribed = $request->input('subscribed');

        // Update user's subscribed field
        $user->subscribed = $subscribed;
        $user->save();

        if ($subscribed) {
            // If subscribing, add to subscriptions table
            Subscription::updateOrCreate(
                ['idUser' => $user->id],
                ['email' => $user->email]
            );
        } else {
            // If unsubscribing, remove from subscriptions
            Subscription::where('idUser', $user->id)->delete();
        }

        return response()->json([
            'message' => 'Subscription updated successfully.',
            'subscribed' => $user->subscribed,
        ]);
    }
}
