<?php

namespace App\Http\Controllers;

use App\Models\Table;
use Illuminate\Http\Request;

class TableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tables = Table::orderBy('Status', 'asc')->get();

        return response()->json([
            "message" => "Hiển thị toàn bộ bàn thành công",
            "data" => $tables,
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
        $table = Table::create($request->all());
        
        return response()->json([
            "message" => "đã tạo bàn thành công",
            "data" => $table,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Table $table)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Table $table)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Table $table)
    {
        $table->update($request->all());

        return response()->json([
            "message" => "đã sửa bàn thành công",
            "data" => $table,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Table $table)
    {
        $table->delete();

        return response()->json([
            "message" => "đã xóa bàn thành công"
        ]);
    }
    
    public function SetStatus(Table $table)
    {
        $table->update(['Status'=>1]);

        return response()->json([
            "message" => "đã sửa trạng thái bàn thành công"
        ]);
    }

    public function ResetStatus()
    {
        Table::query()->update(['Status' => 0]);

        return response()->json([
            "message" => "đã reset trạng thái bàn thành công"
        ]);
    }
}
