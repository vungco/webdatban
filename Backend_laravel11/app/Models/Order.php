<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $primaryKey = "OrderID";

    protected $fillable = [
        'BookingID',
        'CustomerID',
        'OrderDate',
        'TotalAmount',
    ];

    public function promotion(){
        return $this->BelongsTo(Promotion::class);
    }

    public function customer(){
        return $this->BelongsTo(Customer::class);
    }

    public function table_booking(){
        return $this->BelongsTo(TableBooking::class);
    }

    public function order_details(){
        return $this->hasMany(OrderDetail::class);
    }
}
