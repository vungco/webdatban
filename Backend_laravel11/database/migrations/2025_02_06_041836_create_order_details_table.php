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
        Schema::create('order_details', function (Blueprint $table) {
            $table->unsignedInteger('OrderID');
            $table->foreign('OrderID')->references('OrderID')->on('orders')->onDelete('cascade');
            $table->unsignedInteger('MenuItemID');
            $table->foreign('MenuItemID')->references('MenuItemID')->on('menu_items')->onDelete('cascade');
            $table->integer('Quantity');
            $table->double('Price');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};
