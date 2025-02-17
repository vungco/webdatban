<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingTable extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'BookingID',
        'TableID',
    ];

    public function table_booking(){
        return $this->belongsTo(TableBooking::class);
    }

    public function table(){
        return $this->belongsTo(Table::class);
    }
}
