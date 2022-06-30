<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\User_meta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\SanitizeController;

class ProfileController extends Controller
{
    public $sanitize;
    public $image;

    public function __construct(SanitizeController $sanitize, ImageController $image)
    {
        $this->sanitize = $sanitize;
        $this->image = $image;
    }
    public function update_profile(Request $request)
    {

        $this->update_user($request->id, strtolower($this->sanitize->sanitize_string($request->form['firstname']['meta_value'])), strtolower($this->sanitize->sanitize_string($request->form['lastname']['meta_value'])));
        foreach ($request->form as $key => $value) {
            if ($key != 'thumbnail') {
                $this->update_user_meta($value['id'], $value['meta_value']);
            }

            if ($key == 'thumbnail') {
                $this->update_image($value['id'], $value['meta_value']);
            }
        }
        if (isset($request->password)) {
            $this->update_password($request->id, $request->password);
        }
    }

    private function update_image($id, $value)
    {
        $profile_link = User_meta::find($id);

        $photo = '';

        if ($profile_link->meta_value <> $value) {
            $year = $this->image->folder_name('y');
            $month = $this->image->folder_name('m');
            $day = $this->image->folder_name('d');
            $path = 'img/profile' . '/' . $year . '/' . $month . '/' . $day;

            $name = time() . '.' . explode('/', explode(':', substr($value, 0, strpos($value, ';')))[1])[1];
            $this->image->create_directory($path);
            $this->image->image_move($value, $path . '/' . $name, 450, 450);
            $photo = $path . '/' . $name;
        }

        $this->update_user_meta($id, $photo == '' ? $profile_link->meta_value : $photo);
    }

    private function update_user_meta($id, $value)
    {
        $data = User_meta::find($id);
        $data->meta_value = $value;
        $data->save();
    }

    private function update_user($id, $first_name, $family_name)
    {
        $data = User::find($id);
        $data->first_name = $first_name;
        $data->last_name = $family_name;
        $data->save();
    }

    public function update_password($id, $password)
    {
        $data = User::find($id);
        $data->password = Hash::make($password);
        $data->save();
    }
}
