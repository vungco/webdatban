<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Feedback extends Model
{
    protected $table = "Feedbacks";
    protected $primaryKey = "FeedbackID";

    public function user(){
        return $this->BelongsTo(User::class);
    }
}
