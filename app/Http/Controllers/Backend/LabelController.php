<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Label;
use App\Http\Requests\LabelRequest;

class LabelController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->ajax()) {
            $labels = Label::where('user_id', \Auth::id())->get();
            return response()->json(['labels' => $labels]);
        }
        return view('backend.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LabelRequest $request)
    {
        $input = $request->validated();
        $input['user_id'] = \Auth::id();

        $label = Label::create($input);
        return response()->json(['message' => 'success', 'label' => $label]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(LabelRequest $request, $id)
    {
        if (!$label = Label::find($id))
            return response()->json(['error' => 'Not Found'], 404);

        if ($label->user_id != \Auth::id())
            return response()->json(['error' => 'Not Authorized'], 401);

        $label->update($request->validated());
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
        if (!$label = Label::find($id))
            return response()->json(['error' => 'Not Found'], 404);

        if ($label->user_id != \Auth::id())
            return response()->json(['error' => 'Not Authorized'], 401);

        $label->delete();
        return response()->json(['message' => 'success']);
    }
}
