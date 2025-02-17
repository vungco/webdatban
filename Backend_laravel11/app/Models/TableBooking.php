<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TableBooking extends Model
{
    public $timestamps = false;

    protected $primaryKey = "BookingID";

    protected $fillable = [
        'CustomerID',
        'BookingTime',
        'Status',
    ];

    public function customer(){
        return $this->BelongsTo(Customer::class);
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

    public function booking_tables(){
        return $this->hasMany(BookingTable::class);
    }
}
