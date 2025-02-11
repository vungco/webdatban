<?php

namespace App\Http\Controllers;

use App\Models\TableBooking;
use Illuminate\Http\Request;

class TableBookingController extends Controller
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
    public function update(Request $request, TableBooking $tableBooking)
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
}
