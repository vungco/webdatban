<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $feedbacks = Feedback::orderBy('CreateAt', 'desc')->with('user')->get();
        return response()->json([
            "message" => "hiển thị toàn bộ feedback của khách hàng thành công",
            "data" => $feedbacks
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
        $feeback = Feedback::create($request->all());
        
        return response()->json([
            "message" => "đã tạo phản hồi thành công",
            "data" => $feeback,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        $feedback->update($request->all());

        return response()->json([
            "message" => "đã sửa phản hồi thành công",
            "data" => $feedback,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        $feedback->delete();

        return response()->json([
            "message" => "đã xóa phản hồi thành công"
        ]);
    }
}
