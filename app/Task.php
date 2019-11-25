<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

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
        'start_time' => 'datetime:c', // c iso 8601
        'end_time' => 'datetime:c', // c iso 8601
    ];

    public function scopeRecent(Builder $query)
    {
        $from = Carbon::now()->subWeek();
        $to = Carbon::now();

        return $query
            ->whereNotNull('start_time')
            ->whereNotNull('end_time')
            ->whereBetween('created_at', [$from, $to]);
    }
}
