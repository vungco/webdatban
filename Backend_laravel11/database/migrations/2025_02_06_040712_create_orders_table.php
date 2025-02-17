<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('OrderID');
            $table->unsignedInteger('BookingID');
            $table->foreign('BookingID')->references('BookingID')->on('table_bookings')->onDelete('cascade');
            $table->unsignedInteger('CustomerID');
            $table->foreign('CustomerID')->references('CustomerID')->on('customers')->onDelete('cascade');
            $table->unsignedInteger('PromotionID')->nullable();
            $table->foreign('PromotionID')->references('PromotionID')->on('promotions')->onDelete('set null');            
            $table->dateTime('OrderDate');
            $table->double('TotalAmount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
