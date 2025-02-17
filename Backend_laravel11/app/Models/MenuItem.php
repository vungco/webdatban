<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    public $timestamps = false;

    protected $primaryKey = "MenuItemID";

    protected $fillable = [
        'CategoryID',
        'Name',
        'Description',
        'Price',
        'ImageURL',
        'Status',
    ];

    public function menu_category(){
        return $this->BelongsTo(MenuCategory::class);
    }

    public function order_details(){
        return $this->hasMany(OrderDetail::class);
    }
}
