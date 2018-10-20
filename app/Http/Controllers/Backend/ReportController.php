<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Task;
use App\Http\Requests\LabelRequest;

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

            return response()->json(['data' => $data]);
        }
        return view('backend.index');
    }
}
