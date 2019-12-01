<?php

use Faker\Generator as Faker;

$factory->define(App\Label::class, function (Faker $faker) {
    return [
        'name' => 'development',
        'user_id' => 1,
    ];
});
