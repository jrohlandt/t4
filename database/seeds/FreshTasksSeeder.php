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
        $descriptions = [
            'Fix problem with user login.',
            'Style tasks list.',
            'Implement muted autoplay for mp4 video.',
            'PK ipn error',
            'Update ssl keys',
            'Add gdpr columns to plugin migrations',
            'Fix custom tld issue.',
            'Caching for campaing queries.',
            'Fix import contacts.'
        ];

        $projects = Project::all()->toArray();


        $tasks = [
            [
                'description' => $descriptions[rand(0, count($descriptions) - 1)],
                'user_id' => 1,
                'project_id' => $projects[rand(0, count($projects) - 1)]['id'],
                'start_time' => Carbon::now()->subDays(1),
                'end_time' => Carbon::now()->subDays(1)->addHours(1)->addMinutes(17),
                'created_at' => Carbon::now()->subDays(1),
                'updated_at' => Carbon::now()->subDays(1),
            ],
            [
                'description' => $descriptions[rand(0, count($descriptions) - 1)],
                'user_id' => 1,
                'project_id' => $projects[rand(0, count($projects) - 1)]['id'],
                'start_time' => Carbon::now()->subDays(1)->addHours(1)->addMinutes(19),
                'end_time' => Carbon::now()->subDays(1)->addHours(3)->addMinutes(5),
                'created_at' => Carbon::now()->subDays(1)->addHours(1)->addMinutes(19),
                'updated_at' => Carbon::now()->subDays(1)->addHours(1)->addMinutes(19),
            ],
            [
                'description' => $descriptions[rand(0, count($descriptions) - 1)],
                'user_id' => 1,
                'project_id' => $projects[rand(0, count($projects) - 1)]['id'],
                'start_time' => Carbon::now()->subDays(1)->subHours(3)->addMinutes(19),
                'end_time' => Carbon::now()->subDays(1)->subHours(1)->addMinutes(5),
                'created_at' => Carbon::now()->subDays(1)->subHours(3)->addMinutes(19),
                'updated_at' => Carbon::now()->subDays(1)->subHours(3)->addMinutes(19),
            ],
            [
                'description' => $descriptions[rand(0, count($descriptions) - 1)],
                'user_id' => 1,
                'project_id' => $projects[rand(0, count($projects) - 1)]['id'],
                'start_time' => Carbon::now()->subDays(2)->addHours(1)->addMinutes(19),
                'end_time' => Carbon::now()->subDays(2)->addHours(3)->addMinutes(5),
                'created_at' => Carbon::now()->subDays(2)->addHours(1)->addMinutes(19),
                'updated_at' => Carbon::now()->subDays(2)->addHours(1)->addMinutes(19),
            ],
            [
                'description' => $descriptions[rand(0, count($descriptions) - 1)],
                'user_id' => 1,
                'project_id' => $projects[rand(0, count($projects) - 1)]['id'],
                'start_time' => Carbon::now()->subDays(2)->subHours(3)->addMinutes(19),
                'end_time' => Carbon::now()->subDays(2)->subHours(1)->addMinutes(5),
                'created_at' => Carbon::now()->subDays(2)->subHours(3)->addMinutes(19),
                'updated_at' => Carbon::now()->subDays(2)->subHours(3)->addMinutes(19),
            ],
            
        ];

        Task::insert($tasks);
    }
}

