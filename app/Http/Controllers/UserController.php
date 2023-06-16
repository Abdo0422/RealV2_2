<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function updateAddress(Request $request)
    {
        $user = $request->user(); // Get the authenticated user

        $user->address = $request->input('address'); // Update the address field

        $user->save(); // Save the changes

        return response()->json(['message' => 'Address updated successfully']);
    }
}
