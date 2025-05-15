<?php

namespace App\Http\Middleware;

use Closure;

class ClearLargeCookies
{
    public function handle($request, Closure $next)
    {
        foreach ($request->cookies as $key => $value) {
            if (strlen($value) > 4096) { // 4KB limit
                unset($_COOKIE[$key]);
                setcookie($key, '', time() - 3600, '/');
            }
        }

        return $next($request);
    }
}