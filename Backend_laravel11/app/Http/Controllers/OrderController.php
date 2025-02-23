<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with('customer')->get();
        
        return response()->json([
            "message" => "đã hiển thị đơn hàng thành công",
            "data" => $orders,
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
    public function store(OrderRequest $request)
    {
        $order = Order::create($request->all());
        
        return response()->json([
            "message" => "đã tạo đơn hàng thành công",
            "data" => $order,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(OrderRequest $request, Order $order)
    {
        $order->update($request->all());

        return response()->json([
            "message" => "đã sửa đơn hàng thành công",
            "data" => $order,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json([
            "message" => "đã xóa đơn hàng thành công"
        ]);
    }

    public function getOrderDetailOfOrder(Order $order)
    {
        $order_details = $order->order_details()->with('menu_item')->get(); // Lấy danh sách các lượt đặt bàn

        if ($order_details->isNotEmpty()) {
            return response()->json([
                "message" => "Đã lấy các đơn hàng được đặt",
                "data" => $order_details, // Trả về danh sách đặt bàn thay vì customer
            ]);
        } else {
            return response()->json([
                "message" => "ko có đơn hang nào cả",
            ], 404);
        }
    }
}
