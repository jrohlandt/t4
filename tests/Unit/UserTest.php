<?php

namespace Tests\Unit;

use App\Task;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_get_recent_tasks()
    {
        $user = factory(User::class)->create();
        factory(Task::class, 20)->create(['user_id' => $user->id]);

        $this->assertNotEmpty($user->recentTasks());
    }
}
