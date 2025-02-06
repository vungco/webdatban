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
        Schema::create('menu_items', function (Blueprint $table) {
            $table->increments('MenuItemID');
            $table->unsignedInteger('CategoryID');
            $table->foreign('CategoryID')->references('CategoryID')->on('menu_categories')->onDelete('cascade');
            $table->string('Name');
            $table->text('Description');
            $table->double('Price');
            $table->string('ImageURL');
            $table->string('Status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};
