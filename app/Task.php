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

    protected $casts = [
        'user_id' => 'int',
    ];

    public function scopeActive(\Illuminate\Database\Eloquent\Builder $query)
    {
        return $query->where('end_time', null);
    }
}
