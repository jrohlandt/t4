<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Task;
use App\Project;
use Carbon\Carbon;

class ReportController extends Controller
{
    public function index()
    {
        return view('backend.index');
    }

    public function stats(Request $request)
    {
        // dd(request()->get('action'));
        switch($request->get("action")) {
            case "past-two-weeks":
                return $this->pastTwoWeeks();
            default:
                dd('nothing');
        }
    }

    private function pastTwoWeeks()
    {
        $from = Carbon::now()->subWeeks(2);
        $to = Carbon::now();
        
        $tasks = Task::where('user_id', \Auth::id())
            ->whereNotNull('start_time')
            ->whereNotNull('end_time')
            ->whereBetween('created_at', [$from, $to])
            ->orderBy('created_at', 'asc')
            // ->take(100)
            ->get();

        if ($tasks->isEmpty()) {
            return response()->json(['message' => 'No tasks.']);
        }

        $durations = [];
        foreach ($tasks as $task) {

            if (empty($task->project_id))
                continue;

            $start = Carbon::parse($task->start_time);
            $end = Carbon::parse($task->end_time);
            $diff = $start->diffInSeconds($end);

            $dateKey = $start->format('Y-m-d');
            if (!isset($durations[$task->project_id][$dateKey])) {
                $durations[$task->project_id][$dateKey] = $diff;
            } else {
                $durations[$task->project_id][$dateKey] = $durations[$task->project_id][$dateKey] + $diff;
            }
        }
            

        $data = [];
        $dateKeys = [];
        for ($i = 1; $i <= 14; $i++) {
            $dateKeys[] = Carbon::now()->subDays(14)->addDays($i)->format('Y-m-d');
            $data['labels'][] = Carbon::now()->subDays(14)->addDays($i)->format('d M');

        }

        foreach ($durations as $projectId => $duration) {
            foreach($dateKeys as $dateKey) {
                if (!isset($durations[$projectId][$dateKey])) {
                    $durations[$projectId][$dateKey] = 0;
                }
            }

            $project = Project::where('id', $projectId)->with('color')->first();
            $dataSet = (object) [
                'label' => $project->name,
                'fillColor' => 'rgba(0, 0, 0, 0)',
                'strokeColor' => "hsl({$project->color->value})",
                'pointColor' => "hsl({$project->color->value})",
                'pointStrokeColor' => '#fff',
                'pointHighlightFill' => '#fff',
                'pointHighlightStroke' => 'rgba(220,220,220,1)',
                'data' => [],
            ];

            ksort($durations[$projectId]);
            foreach($durations[$projectId] as $duration) {
                $dataSet->data[] = $duration / 3600;
            }

            $data['datasets'][] = $dataSet;
        }
        
        return response()->json(['data' => $data]);
    }
}