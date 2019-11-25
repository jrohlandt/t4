<?php

declare(strict_types=1);

namespace App\Http\Controllers\Backend;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
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
     * @param $request
     * @return \Illuminate\Http\JsonResponse or \Illuminate\View\View
     */
    public function index(Request $request)
    {
        if (!$request->ajax())
            return view('backend.index');

        return response()->json(['tasks' => Auth::user()->recentTasks()]);
    }

    // Get Active Task
    public function active(): JsonResponse
    {
        $task = auth()->user()->activeTask();
        if (is_null($task)) {
            return response()->json(['message' => 'No active task', 'task' => null]);
        }

        return response()->json(['message' => 'success', 'task' => $task]);
    }

    // Store
    public function store(TaskRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->filled('start_time') ) {
            // Don't use the time sent from the client.
            $data['start_time'] = Carbon::now();
        }

        $task = auth()->user()->tasks()->create($data);

        return response()->json(['message' => 'success', 'task' => $task]);
    }

    // Update
    public function update(TaskRequest $request, int $id): JsonResponse
    {
        $data = $request->validated();

        if ($request->filled('end_time') ) {
            // Don't use the time sent from the client.
            $data['end_time'] = Carbon::now();
        }

        auth()->user()->tasks()->findOrFail($id)->update($data);
        return response()->json(['message' => 'success']);
    }

    // Destroy
    public function destroy(int $id): JsonResponse
    {
        $task = auth()->user()->tasks()->findOrFail($id);
        $this->authorize('delete', $task);
        $task->delete();
        return response()->json(['message' => 'success']);
    }
}
