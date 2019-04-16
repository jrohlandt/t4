<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserProfileTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_get_user_details()
    {
//        $this->withExceptionHandling();
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)->json('get', 'app/profile');

        $response->assertStatus(200);
        $response->assertJson([
            'user' => [
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
            ]
        ]);
    }

//    /** @test */
//    public function can_update_user_first_and_last_name()
//    {
//        $user = factory(User::class)->create();
//
//        $newFirstName = 'abcd';
//        $newLastName = 'efghij';
//        $response = $this->actingAs($user)->json('post', 'profile', ['first_name' => $newFirstName, 'last_name' => $newLastName]);
//
//        $response->assertStatus(200);
//        $response->assertJson(['first_name' => $newFirstName, 'last_name' => $newLastName]);
//    }
}
