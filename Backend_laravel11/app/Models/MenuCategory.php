<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuCategory extends Model
{
    public $timestamps = false;

    protected $primaryKey = "CategoryID";

    protected $fillable = [
        'CategoryName',
    ];

    public function menu_items(){
        return $this->hasMany(MenuItem::class);
    }
}
