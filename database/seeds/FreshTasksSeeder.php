<?php

// Seed the tasks table with some fresh tasks to work with.
// This seeder can be run multiple times.

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use \App\Task;
use \App\User;
use \App\Project;
use \App\Label;

class FreshTasksSeeder extends Seeder {

    public function run()
    {

        $tasks = [
            'description' => 'Fix problem with user login.',
            'user_id' => 1,
            'start_time' => Carbon::now()->subDays(1),
            'end_time' => Carbon::now()->subDays(1)->addHours(1)->addMinutes(17),
            'created_at' => Carbon::now()->subDays(1),
            'updated_at' => Carbon::now()->subDays(1),
        ];

        Task::insert($tasks);
    }
}

