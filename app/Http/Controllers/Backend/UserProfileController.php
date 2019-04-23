<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class UserProfileController extends Controller
{
    public function loggedInProfile(Request $request)
    {
        if ($request->ajax()) {
            return response()->json(['profile' => Auth::User()]);
        }

        return view('backend.index');
    }
}
