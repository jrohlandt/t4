<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'name',
        'user_id',
    ];

    public function project()
    {
        return $this->hasMany('App\Project');
    }
}
