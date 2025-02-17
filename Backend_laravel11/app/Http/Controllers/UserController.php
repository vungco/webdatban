<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $user->update($request->all());

        return response()->json([
            "message" => "đã sửa tài khoản thành công",
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
