<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\User_meta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\SanitizeController;

class AuthController extends Controller
{
    public $sanitize;

    public function __construct(SanitizeController $sanitize)
    {
        $this->sanitize = $sanitize;
    }

    public function index()
    {
        return view('welcome');
    }

    public function check_email(Request $request)
    {
        return $this->filter_parent_email($request->email);
    }

    public function filter_parent_email($email)
    {
        return User::where('email', $email)->first();
    }

    public function current_user()
    {
        $user = User::find(auth('api')->user()->id);
        $user['thumbnail'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_thumbnail'])->first();
        $user['about'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_about'])->first();
        $user['status'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_status'])->first();
        $user['contact'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_contact'])->first();
        $user['firstname'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_first_name'])->first();
        $user['lastname'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_last_name'])->first();
        $user['email'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_email'])->first();
        $user['country'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_country'])->first();
        $user['town'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_town'])->first();
        $user['street'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_street'])->first();
        $user['apartment'] = User_meta::where(['user_id' => $user->id, 'meta_key' => '_apartment'])->first();

        return response()->json($user, 200, [], JSON_NUMERIC_CHECK);
    }

    public function login(Request $request)
    {

        $validation = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if (auth()->attempt($validation)) {
            $access_token = auth()->user()->createToken('authToken')->accessToken;
            return response(['user' => auth()->user(), 'access_token' => $access_token]);
        } else {
            return response()->json('Invalid Credentials', 401);
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);

        $user = $this->store($request);
        $this->save_metas($request, $user->id);
    }


    public function logout()
    {
        $access_token = auth('api')->user()->token();
        $access_token->revoke();

        return response()->json('Logged out successfully', 200);
    }

    public function store($request)
    {
        $data = new User();
        $data->first_name = strtolower($this->sanitize->sanitize_string($request->first_name));
        $data->last_name = strtolower($this->sanitize->sanitize_string($request->family_name));
        $data->username = strtolower($this->sanitize->sanitize_string($request->username));
        $data->email = strtolower($this->sanitize->sanitize_email($request->email));
        $data->Role = $request->role;
        $data->password = Hash::make($request->password);
        $data->save();

        return $data;
    }

    public function save_metas($request, $user_id)
    {

        $user_meta = array(
            '_first_name' => strtolower($this->sanitize->sanitize_string($request->first_name)),
            '_last_name' => strtolower($this->sanitize->sanitize_string($request->family_name)),
            '_thumbnail' => 'img/profile/default.png',
            '_about' => '',
            '_role' => $request->role,
            '_status' => 1,
            '_contact' => '',
            '_email' => strtolower($this->sanitize->sanitize_email($request->email)),
            '_country' => strtolower($this->sanitize->sanitize_string($request->country)),
            '_town' => strtolower($this->sanitize->sanitize_string($request->town)),
            '_street' => strtolower($this->sanitize->sanitize_string($request->street)),
            '_apartment' => '',
            '_secret' => $request->password
        );

        foreach ($user_meta as $key => $user) {
            $meta = new User_meta();
            $meta->user_id = $user_id;
            $meta->meta_key = $key;
            $meta->meta_value = $user;
            $meta->save();
        }
    }
}
