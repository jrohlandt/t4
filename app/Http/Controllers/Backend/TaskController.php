<?php

declare(strict_types=1);

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Task;
use App\Http\Requests\TaskRequest;

class TaskController extends Controller
{
    private $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $from = Carbon::now()->subWeek();
            $to = Carbon::now();
            
            $tasks = Task::where('user_id', \Auth::id())
                ->whereNotNull('start_time')
                ->whereNotNull('end_time')
                ->whereBetween('created_at', [$from, $to])
                ->orderBy('created_at', 'desc')
                ->take(100)
                ->get();

            return response()->json(['tasks' => $tasks]);
        }
        return view('backend.index');
    }

    // Get Active Task
    public function active()
    {
        // Fetch only the last task.
        $task = Task::where('user_id', \Auth::id())->orderByDesc('id')->firstOrFail();

        // Then check if the task is still active (has a end_time or not).
        // If it has no end_time then the task is still active.
        if (empty($task->end_time))
            return response()->json(['message' => 'success', 'task' => $task]);

        return response()->json(['message' => 'No active task']);
    }

    // Store
    public function store(TaskRequest $request) : JsonResponse
    {
        $input = $request->validated();
        $input['user_id'] = \Auth::id();

        $task = $this->task->create($input);
        return response()->json(['message' => 'success', 'task' => $task]);
    }

    // Update
    public function update(TaskRequest $request, int $id) : JsonResponse
    {
        $task = $this->task->findOrFail($id);
        $task->update($request->validated());
        return response()->json(['message' => 'success']);
    }

    // Destroy
    public function destroy(int $id): JsonResponse
    {
        $task = Task::findOrFail($id);

        $this->authorize('delete', $task);

        $task->delete();
        return response()->json(['message' => 'success']);
    }
}
