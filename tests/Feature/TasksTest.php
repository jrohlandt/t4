<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TasksTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_create_a_task()
    {
//        $this->withoutExceptionHandling();
        $user = factory(User::class)->create();

        $data = [
            'description' => 'fixing component state issue',
        ];
        $response = $this->actingAs($user)->json('post', '/app/tasks', $data);

        $response
            ->assertStatus(200)
            ->assertJson(['message' => 'success']);

    }
}
