<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function recentTasks()
    {
        return $this->tasks()->recent()->orderBy('start_time', 'desc')->take(100)->get();
    }

    public function activeTask(): ?Task
    {
        $task = $this->tasks()->orderBy('id', 'desc')->first();

        if (!is_null($task) && is_null($task->end_time)) {
            return $task;
        }
        return null;
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function labels()
    {
        return $this->hasMany(Label::class);
    }
}
