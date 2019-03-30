<?php

use App\Task;
use Carbon\Carbon;
use Faker\Generator as Faker;

// Remember to specify user_id when calling task factory.

$factory->define(App\Task::class, function (Faker $faker) {
    return [
        'description' => $faker->sentence,
        'start_time' => Carbon::now()->toDateTimeString(),
        'end_time' => Carbon::now()->toDateTimeString(),
    ];
});

$factory->state(App\Task::class, 'active', function(Faker $faker) {
    return [
        'end_time' => null,
    ];
});
