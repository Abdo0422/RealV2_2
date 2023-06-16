<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function redirectToProvider() {
        return Socialite::driver('google')->redirect();
    }

    public function HandleCallBack() {
        try {
            $user = Socialite::driver('google')->user();
        }
        catch(\Exception $e) {
            return redirect('/login');
        }
        
        
    
        
            $newUser = User::updateOrCreate([
                'name' => $user->name,
            ],
            
                [
                'name' => $user->name,
                'email' => $user->email,
                'google_id' => $user->id,  
                'remember_token' => $user->token,
                'address' => '', // Provide an empty string as the initial value for the address field
                
            ]);
            Auth::login($newUser,true);
            
        
        return redirect()->to('/');

     }
}