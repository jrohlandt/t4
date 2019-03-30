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
        $this->withoutExceptionHandling();
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
    function can_get_tasks()
    {
        factory(Task::class, 20)->create(['user_id' => $this->user->id]);

        $response = $this->actingAs($this->user)->json('get', '/app/tasks', [], ['X-Requested-With' => 'XMLHttpRequest']);

        $response->assertStatus(200);
        $tasks = $response->decodeResponseJson()['tasks'];
        $this->assertEquals(20, count($tasks));
        $this->assertEquals($this->user->id, $tasks[0]['user_id']);
    }

    /** @test */
    function user_can_update_task()
    {
        $task = factory(Task::class)->create(['user_id' => $this->user->id]);

        $res = $this->actingAs($this->user)->json('put', 'app/tasks/'.$task->id, ['description' => 'fix list']);

        $res->assertStatus(200);
        $task = Task::where('user_id', $this->user->id)->first();
        $this->assertEquals('fix list', $task->description);
    }

    /** @test */
    public function users_cannot_access_each_others_tasks()
    {
        factory(Task::class)->create(['user_id' => $this->user->id]);
        $otherUser = factory(User::class)->create();

        $response = $this->actingAs($otherUser)->json('get', 'app/tasks', [], ['X-Requested-With' => 'XMLHttpRequest']);

        $response->assertStatus(200);
        $tasks = $response->decodeResponseJson()['tasks'];
        $this->assertEquals(0, count($tasks));

        $response = $this->actingAs($otherUser)->json('get', 'app/tasks/active');

        $response->assertStatus(200);
        $res = $response->decodeResponseJson();
        $this->assertNull($res['task']);
    }

    /** @test */
    public function users_cannot_update_each_others_tasks()
    {
        $thisUsersTask = factory(Task::class)
            ->create(['user_id' => $this->user->id, 'description' => 'original']);

        $otherUser = factory(User::class)->create();

        $res = $this->actingAs($otherUser)
            ->json('put', 'app/tasks/'.$thisUsersTask->id, ['description' => 'updated']);

        $res->assertStatus(403);
        $this->assertEquals(Task::find($thisUsersTask->id)->description, 'original');
    }

    /** @test */
    public function users_cannot_delete_each_others_tasks()
    {
        $thisUsersTask = factory(Task::class)
            ->create(['user_id' => $this->user->id, 'description' => 'original']);

        $otherUser = factory(User::class)->create();

        $res = $this->actingAs($otherUser)->json('delete', 'app/tasks/'.$thisUsersTask->id);

        $res->assertStatus(403);
        $this->assertEquals(Task::find($thisUsersTask->id)->description, 'original');
    }

}
