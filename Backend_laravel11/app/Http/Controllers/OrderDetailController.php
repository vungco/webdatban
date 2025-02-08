<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
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
        $orderDetail = OrderDetail::create($request->all());
        
        return response()->json([
            "message" => "đã tạo đơn hàng chi tiết thành công",
            "data" => $orderDetail,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderDetail $orderDetail)
    {
        $orderDetail->update($request->all());

        return response()->json([
            "message" => "đã sửa đơn hàng chi tiết thành công",
            "data" => $orderDetail,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderDetail $orderDetail)
    {
        $orderDetail->delete();

        return response()->json([
            "message" => "đã xóa đơn hàng chi tiết thành công"
        ]);
    }
}
