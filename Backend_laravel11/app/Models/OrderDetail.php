<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'OrderID',
        'MenuItemID',
        'Quantity',
        'Price',
    ];

    public function order(){
        return $this->BelongsTo(Order::class);
    }

    public function menu_item(){
        return $this->BelongsTo(MenuItem::class,'MenuItemID','MenuItemID');
    }
}
