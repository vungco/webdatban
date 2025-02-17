<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    public $timestamps = false;

    protected $primaryKey = "PromotionID";

    protected $fillable = [
        'Title',
        'Description',
        'Discount',
        'StartDate',
        'EndDate',
    ];

    public function orders(){
        return $this->hasMany(Order::class);
    }
}
