<?php

namespace App\Http\Controllers\Api;

use File;
use Carbon\Carbon;
use App\Product_image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        // return $request->all();
        $this->validate($request, [
            'file' => 'required|mimes:jpeg,jpg,png'
        ]);

        $path = 'img/products';
        $name = str_replace(' ', '-', pathinfo($request->file->getClientOriginalName(), PATHINFO_FILENAME));
        $fullname = $name . '-' . time() . '.' . $request->file->getClientOriginalExtension();


        $this->image_move($request->file, $path . '/' . $fullname, 510, 300);
        $this->save_image($request->product_id, $request->type, $fullname);
    }


    public function folder_name($n)
    {
        $today = Carbon::now()->format($n);
        return $today;
    }

    public function create_directory($path, $mode = 0777, $recursive = false, $force = false)
    {
        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0777, true, true);
        }
    }

    public function image_move($value, $path, $width, $height)
    {

        \Image::make($value)->resize($width, $height)->save($path);
    }

    private function save_image($product_id, $category, $image_name)
    {
        $data = new Product_image();
        $data->product_id = $product_id;
        $data->category = $category;
        $data->image_name = $image_name;
        $data->save();
    }
}
