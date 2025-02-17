<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BankingController extends Controller
{
    public function banking()
    {
        return response()->json([
            "message" => "đã xác nhận chuyển khoản thành công",
        ]);
    }
}
