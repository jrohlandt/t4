<?php

namespace App\Http\Controllers\Backend;

use App\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->ajax()) {

            $projects = Project::where('user_id', \Auth::id())->get();
            return response()->json(['projects' => $projects]);
        }
        return view('backend.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectRequest $request)
    {
        $input = $request->validated();
        $input['user_id'] = \Auth::id();

        $project = Project::create($input);
        return response()->json(['message' => 'success', 'project' => $project]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProjectRequest $request, $id)
    {
        if (!$project = Project::find($id))
            return response()->json(['error' => 'Not Found'], 404);

        if ($project->user_id != \Auth::id())
            return response()->json(['error' => 'Not Authorized'], 401);

        $project->update($request->validated());
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
        if (!$project = Project::find($id))
            return response()->json(['error' => 'Not Found'], 404);

        if ($project->user_id != \Auth::id())
            return response()->json(['error' => 'Not Authorized'], 401);

        $project->delete();
        return response()->json(['message' => 'success']);
    }
}
