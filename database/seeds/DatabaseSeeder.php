<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         User::create([
             'first_name' => 'demo',
             'last_name' => 'user',
             'email' => 'demo@example.com',
             'password' => Hash::make('password'),
             'remember_token' => str_random(10),
         ]);

         $this->call(ColorsTableSeeder::class);

//        $this->call(FreshTasksSeeder::class);
    }
}
