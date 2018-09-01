<?php

use Illuminate\Database\Seeder;
use \App\Color;

class ColorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $colors = [
            [
                'name' => 'green', 
                'value' => '171, 47%, 52%', 
                'order' => 1
            ],
            [
                'name' => 'red', 
                'value' => '359, 100%, 62%', 
                'order' => 2
            ],
            [
                'name' => 'yellow', 
                'value' => '40, 92%, 58%', 
                'order' => 3
            ],
            [
                'name' => 'blue', 
                'value' => '201, 97%, 36%', 
                'order' => 4
            ],
            [
                'name' => 'orange', 
                'value' => '13, 97%, 55%', 
                'order' => 5
            ],
            [
                'name' => 'pink', 
                'value' => '351, 76%, 68%', 
                'order' => 6
            ],
            [
                'name' => 'purple', 
                'value' => '307, 21%, 48%', 
                'order' => 7
            ],
            [
                'name' => 'turquoise', 
                'value' => '187, 52%, 65%', 
                'order' => 8
            ],
            [
                'name' => 'grey', 
                'value' => '240, 6%, 67%', 
                'order' => 9
            ],
        ];

        Color::insert($colors);
    }
}
