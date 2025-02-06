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
        Schema::create('booking_tables', function (Blueprint $table) {
            $table->unsignedInteger('BookingID');
            $table->foreign('BookingID')->references('BookingID')->on('table_bookings')->onDelete('cascade');
            $table->unsignedInteger('TableID');
            $table->foreign('TableID')->references('TableID')->on('tables')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_tables');
    }
};
