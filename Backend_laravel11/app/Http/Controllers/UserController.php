<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('customer')->get();
        return response()->json([
            "message" => "Hiển thị tài khoản thành công",
            'data' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $data = $request->all();
    
    // Mã hóa password
    if (isset($data['password'])) {
        $data['password'] = bcrypt($data['password']);
    }

    $user = User::create($data);
    
    return response()->json([
        "message" => "đã tạo tài khoản thành công",
        "data" => $user,
    ]);
}


    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            "message" => "Hiển thị tài khoản thành công",
            'data' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        if ($request->filled('password_old')) {
            if (!Hash::check($request->password_old, $user->password)) {
                echo('ko đúng');
                return response()->json(['error' => 'Mật khẩu cũ không đúng'], 400);
            }
        }
    
        // Lấy dữ liệu cần cập nhật, loại bỏ password_old để tránh lưu vào DB
        $data = $request->except(['password_old']);
    
        // Nếu có password mới thì mã hóa
        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }
    
        // Cập nhật user
        $user->update($data);
    
        return response()->json([
            "message" => "Đã sửa tài khoản thành công",
            "data" => $user,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            "message" => "đã xóa tài khoản thành công"
        ]);
    }

    public function getUserId(Request $request)
    {
        $user_id = $request->user()->id;

        return response()->json([
            "message" => "đã lấy id tài khoản thành công",
            "data" => $user_id,
        ]);
    }
}
