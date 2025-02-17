<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Feedback extends Model
{

    public $timestamps = false;
    protected $primaryKey = "FeedbackID";

    protected $fillable = [
        'UserID',
        'Content',
        'CreateAt',
    ];

    public function user(){
        return $this->BelongsTo(User::class);
    }
}
