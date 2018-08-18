<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'description',
        'project_id',
        'label_id',
        'user_id',
        'start_time',
        'end_time',
    ];
}
