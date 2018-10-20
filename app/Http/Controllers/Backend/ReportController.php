<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Task;
use App\Project;
use Carbon\Carbon;

class ReportController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->ajax()) {
            $from = Carbon::now()->subWeeks(2);
            $to = Carbon::now();
            
            $tasks = Task::where('user_id', \Auth::id())
                ->whereNotNull('start_time')
                ->whereNotNull('end_time')
                ->whereBetween('created_at', [$from, $to])
                ->orderBy('created_at', 'desc')
                ->take(100)
                ->get();

            $data = [];
            // array with only project id and duration
            $durations = [];

            if ( ! $tasks->isEmpty() ) {
                foreach ($tasks as $task) {

                    if (empty($task->project_id))
                        continue;

                    $start = Carbon::parse($task->start_time);
                    $end = Carbon::parse($task->end_time);
                    $diff = $start->diffInSeconds($end);

                    if (!isset($durations[$task->project_id])) {
                        $durations[$task->project_id] = $diff;
                    } else {
                        $durations[$task->project_id] = $durations[$task->project_id] + $diff;
                    }

                    // if (!isset($durations[$task->project_id])) {
                    //     $durations[$task->project_id] = 1;
                    // } else {
                    //     $durations[$task->project_id] = $durations[$task->project_id] + 1;
                    // }
                }
            }
            arsort($durations);
            $p = Project::where('id', 17)->with('color')->first();
            // dd($durations,  $p);

            $data['projects'] = [];
            foreach ($durations as $projectId => $duration) {
                $project = Project::where('id', $projectId)->with('color')->first();
                $project->duration = $duration;
                $data['projects'][$projectId] = $project;
            } 
            
            return response()->json(['data' => $data]);
        }
        return view('backend.index');
    }
}
