<?php

namespace Tests\Feature;

use App\Task;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TasksTest extends TestCase
{
    use RefreshDatabase;

    private $user;
    protected function setUp()
    {
        parent::setUp();
        $this->user = factory(User::class)->create();
    }

    private function createTask($data) {
        return $this->actingAs($this->user)->json('post', '/app/tasks', $data);
    }

    /** @test */
    public function can_create_a_task()
    {
        $response = $this->actingAs($this->user)->json('post', '/app/tasks', ['description' => 'fixing component']);

        $response
            ->assertStatus(200)
            ->assertJson(['message' => 'success']);
    }

    /** @test */
    public function can_get_active_task()
    {
        factory(Task::class)->states(['active'])->create([
            'user_id' => $this->user->id,
            'description' =>  'my active task',
        ]);

        $response = $this->actingAs($this->user)->json('get', '/app/tasks/active');

        $response
            ->assertStatus(200)
            ->assertJson(['task' => [
                'user_id' => $this->user->id,
                'description' => 'my active task',
            ]]);
    }

    /** @test */
    public function can_get_tasks()
    {
        factory(Task::class, 20)->create(['user_id' => $this->user->id]);

        $response = $this->actingAs($this->user)->json('get', '/app/tasks', [], ['X-Requested-With' => 'XMLHttpRequest']);

        $response->assertStatus(200);
        $tasks = $response->decodeResponseJson()['tasks'];
        $this->assertEquals(20, count($tasks));
        $this->assertEquals($this->user->id, $tasks[0]['user_id']);
    }


}
