<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $primaryKey = "CustomerID";

    protected $fillable = [
        'UserID',
        'Fullname',
        'PhoneNumber',
        'Address',
    ];

    public function user(){
        return $this->hasOne(User::class);
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

    public function table_bookings(){
        return $this->hasMany(TableBooking::class);
    }
}
