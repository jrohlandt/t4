<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name',
        'user_id',
        'client_id',
        'color_id',
    ];

    public function color()
    {
        return $this->belongsTo('\App\Color');
    }

    public function client()
    {
        return $this->belongsTo('App\Client');
    }
}
