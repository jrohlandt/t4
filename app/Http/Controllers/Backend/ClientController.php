<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Client;
use App\Http\Requests\ClientRequest;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->ajax()) {

            $clients = Client::where('user_id', \Auth::id())->get();
            return response()->json(['clients' => $clients]);
        }
        return view('backend.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClientRequest $request)
    {
        $input = $request->validated();
        $input['user_id'] = \Auth::id();

        $client = Client::create($input);
        return response()->json(['message' => 'success', 'client' => $client]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ClientRequest $request, $id)
    {
        if (!$client = Client::find($id))
            return response()->json(['error' => 'Not Found'], 404);

        if ($client->user_id != \Auth::id())
            return response()->json(['error' => 'Not Authorized'], 401);

        $client->update($request->validated());
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
        if (!$client = Client::find($id))
            return response()->json(['error' => 'Not Found'], 404);

        if ($client->user_id != \Auth::id())
            return response()->json(['error' => 'Not Authorized'], 401);

        $client->delete();
        return response()->json(['message' => 'success']);
    }
}
