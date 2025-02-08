<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        // Validate input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Kiểm tra thông tin đăng nhập
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // Lấy thông tin người dùng đã đăng nhập
            $user = Auth::user();
            
            // Tạo token mới cho người dùng
            $token = $request->user()->createToken('YourAppName')->plainTextToken;
            
            return response()->json([
                'message' => 'Đăng nhập thành công',
                'token' => $token,
                'user' => $user
            ]);
        }

        return response()->json(['message' => 'Thông tin đăng nhập không chính xác'], 401);
    }

    public function create() {
        return response()->json([
            'message' => "vui lòng đăng nhập để sử dụng các tính năng bên trong"
        ],401);
    }
}
