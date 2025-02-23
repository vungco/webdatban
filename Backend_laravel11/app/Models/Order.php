<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $timestamps = false;

    protected $primaryKey = "OrderID";

    protected $fillable = [
        'BookingID',
        'CustomerID',
        'PromotionID',
        'OrderDate',
        'TotalAmount',
    ];

    public function promotion(){
        return $this->BelongsTo(Promotion::class,'PromotionID','PromotionID');
    }

    public function customer(){
        return $this->BelongsTo(Customer::class,'CustomerID','CustomerID');
    }

    public function table_booking(){
        return $this->BelongsTo(TableBooking::class);
    }

    public function order_details(){
        return $this->hasMany(OrderDetail::class,'OrderID','OrderID');
    }
}
