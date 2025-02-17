<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    public $timestamps = false;

    protected $primaryKey = "TableID";

    protected $fillable = [
        'TableNumber',
        'Capacity',
        'Status',
    ];

    public function booking_tables(){
        return $this->hasMany(BookingTable::class);
    }
}
