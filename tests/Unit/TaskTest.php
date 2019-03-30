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
        $user->tasks()->create();

        $task = $user->activeTask();

        $this->assertNotNull($task);
    }
}
