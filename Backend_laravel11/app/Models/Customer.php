<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public $timestamps = false;

    protected $primaryKey = "CustomerID";

    protected $fillable = [
        'UserID',
        'FullName',
        'PhoneNumber',
        'Address',
    ];

    public function user(){
        return $this->belongsTo(User::class,'UserID','id');
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

    public function table_bookings(){
        return $this->hasMany(TableBooking::class,'CustomerID','CustomerID');
    }
}
