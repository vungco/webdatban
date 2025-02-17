<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vouchers = Promotion::all(); // Lấy tất cả voucher

        return response()->json([
            "message" => "đã hiển thị mã giảm giá thành công",
            "data" => $vouchers,
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
        $promotion = Promotion::create($request->all());
        
        return response()->json([
            "message" => "đã tạo khuyến mãi thành công",
            "data" => $promotion,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Promotion $promotion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Promotion $promotion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Promotion $promotion)
    {
        $promotion->update($request->all());

        return response()->json([
            "message" => "đã sửa khuyến mãi thành công",
            "data" => $promotion,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Promotion $promotion)
    {
        $promotion->delete();

        return response()->json([
            "message" => "đã xóa khuyến mãi thành công"
        ]);
    }

    public function showValidVouchers()
{
    $currentDate = now(); // Lấy ngày hiện tại
    $vouchers = Promotion::where('StartDate', '<=', $currentDate)
                         ->where('EndDate', '>=', $currentDate)
                         ->get();

        return response()->json([
           "message" => "đã sửa khuyến mãi thành công",
           "data" => $vouchers,
        ]);
}

}
