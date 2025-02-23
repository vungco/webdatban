<?php

namespace App\Http\Controllers;

use App\Models\BookingTable;
use Illuminate\Http\Request;

class BookingTableController extends Controller
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
        $booking_table = BookingTable::create($request->all());
        
        return response()->json([
            "message" => "đã tạo hàng trung gian thành công",
            "data" => $booking_table,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(BookingTable $bookingTable)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookingTable $bookingTable)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BookingTable $bookingTable)
    {
        $bookingTable->update($request->all());

        return response()->json([
            "message" => "đã sửa hàng trung gian thành công",
            "data" => $bookingTable,
        ]); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($BookingID)
    {
        BookingTable::query()->delete(['BookingID' => $BookingID]);

        return response()->json([
            "message" => "đã xóa hàng trung gian thành công"
        ]); 
    }
}
