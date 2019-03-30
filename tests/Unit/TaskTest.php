<?php

namespace Tests\Unit;

use App\Task;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_get_active_task()
    {
        $user = factory(User::class)->create();
        factory(Task::class)->state('active')->create(['user_id' => $user->id]);

        $task = Task::active()->where('user_id', $user->id)->first();

        $this->assertNotNull($task);
    }
}
