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
        factory(Task::class, 2)->create(['user_id' => $user->id]);
        factory(Task::class)->state('active')->create(['user_id' => $user->id]);

        $task = $user->activeTask();

        $this->assertNotNull($task);
        $this->assertNull($task->end_time);
    }

    /** @test */
    public function confirm_there_is_no_active_task()
    {
        $user = factory(User::class)->create();
        factory(Task::class)->state('active')->create(['user_id' => $user->id]);
        factory(Task::class, 2)->create(['user_id' => $user->id]);

        $this->assertNull($user->activeTask());
    }
}
