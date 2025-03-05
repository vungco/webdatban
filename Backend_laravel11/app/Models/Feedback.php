<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $table = 'feedbacks'; // Đặt tên bảng chính xác
    public $timestamps = false;

    protected $primaryKey = "FeedbackID";

    protected $fillable = [
        'UserID',
        'Content',
        'CreateAt',
    ];

    public function user(){
        return $this->belongsTo(User::class,'UserID','id');
    }

}
