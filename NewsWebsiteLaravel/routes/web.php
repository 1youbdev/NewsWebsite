<?php

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::get('/test-mail', function () {
//     Mail::raw('This is a test email sent via Brevo SMTP.', function ($message) {
//         $message->to('rizkiayoub0605@gmail.com') // put your email here to receive the test
//                 ->subject('Test Mail from Laravel');
//     });

//     return 'Test email sent!';
// });
Route::get('/password-reset/{token}', function ($token) {
    $email = request('email');
    // Redirect to your React frontend route (Vite or production URL)
    return redirect("http://localhost:5173/password-reset/{$token}?email={$email}");
})->name('password.reset');