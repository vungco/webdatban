<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Models\TableBooking;
use Illuminate\Http\Request;

class TableBookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tableBookings = TableBooking::with('customer')->get();
        
        return response()->json([
            "message" => "hiển thị lượt đặt thành công",
            "data" => $tableBookings,
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
    public function store(BookingRequest $request)
    {
        $tableBooking = TableBooking::create($request->all());
        
        return response()->json([
            "message" => "đã tạo lượt đặt thành công",
            "data" => $tableBooking,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(TableBooking $tableBooking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TableBooking $tableBooking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BookingRequest $request, TableBooking $tableBooking)
    {
        $tableBooking->update($request->all());

        return response()->json([
            "message" => "đã sửa lượt đặt thành công",
            "data" => $tableBooking,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TableBooking $tableBooking)
    {
        $tableBooking->delete();

        return response()->json([
            "message" => "đã xóa lượt đặt thành công"
        ]);
    }
    
    public function getTableOfBooking(TableBooking $booking)
    {
        $tables = $booking->booking_tables()->with('table')->get(); // Lấy danh sách các lượt đặt bàn

        if ($tables->isNotEmpty()) {
            return response()->json([
                "message" => "Đã lấy các bàn được đặt",
                "data" => $tables, // Trả về danh sách đặt bàn thay vì customer
            ]);
        } else {
            return response()->json([
                "message" => "ko có bàn nào cả",
            ], 404);
        }
    }
    
    public function getOrderOfBooking(TableBooking $booking)
    {
        $tables = $booking->orders()->with('promotion')->get(); // Lấy danh sách các lượt đặt bàn

        if ($tables->isNotEmpty()) {
            return response()->json([
                "message" => "Đã lấy các đơn hàng được đặt",
                "data" => $tables, // Trả về danh sách đặt bàn thay vì customer
            ]);
        } else {
            return response()->json([
                "message" => "ko có đơn hang nào cả",
            ], 404);
        }
    }
}
