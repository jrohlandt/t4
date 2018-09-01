<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Task;
use App\Http\Requests\StoreTask;
use App\Http\Requests\UpdateTask;
use Carbon\Carbon;


class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
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

    public function active() {

        // Fetch only the last task.
        $task = Task::orderByDesc('id')->first();

        // Then check if the task is still active (has a end_time or not).
        // If it has no end_time then the task is still active.
        if (empty($task->end_time))
            return response()->json(['message' => 'success', 'task' => $task]);

        return response()->json(['message' => 'No active task']);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTask $request)
    {
        $input = $request->validated();
        $input['user_id'] = \Auth::id();

        $task = Task::create($input);
        return response()->json(['message' => 'success', 'task' => $task]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTask $request, $id)
    {
        if (!$task = Task::find($id))
            return response()->json(['error' => 'Not Found'], 404);

        if ($task->user_id != \Auth::id())
            return response()->json(['error' => 'Not Authorized'], 401);

        $task->update($request->validated());
        return response()->json(['message' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$task = Task::find($id))
            return response()->json(['error' => 'Not Found'], 404);

        if ($task->user_id != \Auth::id())
            return response()->json(['error' => 'Not Authorized'], 401);

        $task->delete();
        return response()->json(['message' => 'success']);
    }
}
