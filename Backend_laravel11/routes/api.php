<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\BankingController;
use App\Http\Controllers\BookingTableController;
use App\Http\Controllers\MenuCategoryController;
use App\Http\Controllers\MenuItemController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\TableBookingController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Sanctum;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('feedbacks',FeedbackController::class);
    Route::apiResource('customers',CustomerController::class);
    Route::apiResource('promotions',PromotionController::class)->only('index');
    Route::apiResource('table_bookings',TableBookingController::class)->only('store','index');
    Route::apiResource('tables',TableController::class)->only('index');
    Route::apiResource('orders',OrderController::class)->only('index','store');
    Route::apiResource('order_details',OrderDetailController::class)->only('index','store');
    Route::apiResource('menu_categorys',MenuCategoryController::class)->only('index');
    Route::apiResource('menu_items',MenuItemController::class)->only('index');
    Route::apiResource('users',UserController::class)->only('show','update');
    Route::get('user/get_id',[UserController::class,'getUserId']);
    Route::get('user/get_customer',[CustomerController::class,'getBy_iduser']);
    Route::get('promotions/valid',[PromotionController::class,'showValidVouchers']);
    Route::get('check_banking',[BankingController::class,'banking']);

    Route::apiResource('booking_tables',BookingTableController::class)->only('store','index');

    

    Route::middleware('check.admin')->group(function () {
        Route::apiResource('promotions',PromotionController::class)->only('store','update','delete');
        Route::apiResource('table_bookings',TableBookingController::class)->only('update','delete');
        Route::apiResource('tables',TableController::class)->only('store','update','delete');
        Route::apiResource('orders',OrderController::class)->only('update','delete');
        Route::apiResource('menu_categorys',MenuCategoryController::class)->only('store','update','delete');
        Route::apiResource('menu_items',MenuItemController::class)->only('store','update','delete');
        Route::apiResource('users',UserController::class)->only('store','delete');
        Route::apiResource('booking_tables',BookingTableController::class)->only('update','delete');
        Route::apiResource('order_details',OrderDetailController::class)->only('update','delete');
    });

    Route::get('logout',[LogoutController::class,'logout']);
});
Route::post('login',[LoginController::class,'login']);
Route::get('login',[LoginController::class,'create'])->name('login');
Route::post('regester',[UserController::class,'store']);

