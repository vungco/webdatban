<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class checkAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Kiểm tra xem người dùng có phải là admin không
        $user = Auth::user();
        if ($user && $user->role !== 'admin') {
            // Nếu không phải admin, trả về lỗi
            return response()->json([
                "message" => "bạn không phải là admin nên không có quyền"
            ],403);
        }

        return $next($request);
    }
}
