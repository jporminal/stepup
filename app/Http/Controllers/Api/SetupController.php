<?php

namespace App\Http\Controllers\Api;

use App\Staff;
use App\Venue;
use App\Lesson;
use App\Weekday;
use App\Settings;
use App\Daterange;
use App\Lesson_param;
use App\Service_price;
use App\Product_image;
use App\Category_value;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ShopController;
use App\Events\EventContactUs;

class SetupController extends Controller
{
    public $categories;

    public function __construct(ShopController $categories)
    {
        $this->categories = $categories;
    }

    public function venue()
    {
        return Venue::get();
    }

    public function save_venue(Request $request)
    {
        $this->store_venue($request->form);
    }

    public function get_venues(Request $request)
    {
        return $this->venues($request->per_page);
    }

    public function store_drid()
    {
        return response()->json([
            'online_lessons' => $this->setup_store('_SHOP_ONLINE'),
            'motorcity_lessons' => $this->setup_store('_SHOP_MOTOR_CITY'),
            'foremarke_lessons' => $this->setup_store('_SHOP_FOREMARKE'),
            'camp_lessons' => $this->setup_store('_SHOP_CAMPS'),
            'akoya_lessons' => $this->setup_store('_SHOP_AKOYA'),
            'arcadia_lessons' => $this->setup_store('_SHOP_ARCADIA'),
            'urdang_lessons' => $this->setup_store('_SHOP_URDANG'),
            'online_lesson_text' => $this->setup_store('_SHOP_ONLINE_TEXT'),
            'motorcity_lesson_text' => $this->setup_store('_SHOP_MOTOR_CITY_TEXT'),
            'foremarke_lesson_text' => $this->setup_store('_SHOP_FOREMARKE_TEXT'),
            'camp_lesson_text' => $this->setup_store('_SHOP_CAMP_TEXT'),
            'akoya_lesson_text' => $this->setup_store('_SHOP_AKOYA_TEXT'),
            'arcadia_lesson_text' => $this->setup_store('_SHOP_ARCADIA_TEXT'),
            'urdang_lesson_text' => $this->setup_store('_SHOP_URDANG_TEXT'),
            'motorcity_lesson_ebd' => $this->setup_store('_SHOP_MOTOR_CITY_EBD')
        ], 200, [], JSON_NUMERIC_CHECK);
    }

    public function get_filtered_venues($filter, Request $request)
    {
        return $this->filtered_venues($filter, $request->per_page);
    }

    public function store_shop_update(Request $request)
    {
        foreach ($request->form as $key => $value) {
            $data = Settings::find($value['id']);
            $data->Setting_value = $value['value'];
            $data->save();
        }
    }

    private function venues($per_page)
    {
        return Venue::paginate($per_page);
    }

    private function filtered_venues($filter, $per_page)
    {
        return Venue::where('venuename', 'LIKE', '%' . $filter . '%')->paginate($per_page);
    }

    private function store_venue($form)
    {
        if ($form['vid'] > 0) {
            $data = Venue::find($form['vid']);
            $data->venuename = $form['venuename'];
            $data->venueaddress = $form['venueaddress'];
            $data->venuecontact = $form['venuecontact'];
            $data->venuecontact1 = $form['venuecontact1'];
            $data->venueemail1 = $form['venueemail1'];
            $data->venueemail2 = $form['venueemail2'];
            $data->Xero = $form['Xero'];
            $data->save();
        } else {
            $data = new Venue();
            $data->venuename = $form['venuename'];
            $data->venueaddress = $form['venueaddress'];
            $data->venuecontact = $form['venuecontact'];
            $data->venuecontact1 = $form['venuecontact1'];
            $data->venueemail1 = $form['venueemail1'];
            $data->venueemail2 = $form['venueemail2'];
            $data->Xero = $form['Xero'];
            $data->save();
        }
    }

    // staff
    public function get_staffs(Request $request)
    {
        return $this->staffs($request->per_page);
    }

    public function get_staff_filter($filter, Request $request)
    {
        return $this->staff_filter($filter, $request->per_page);
    }

    public function store_staff(Request $request)
    {
        $this->save_staff($request->form);
    }

    public function get_staff($id)
    {
        return Staff::find($id);
    }

    private function staffs($per_page)
    {
        return Staff::paginate($per_page);
    }

    private function staff_filter($filter, $per_page)
    {
        return Staff::where('staffname', 'LIKE', '%' . $filter . '%')->paginate($per_page);
    }

    private function save_staff($form)
    {
        if ($form['sid'] > 0) {
            $data = Staff::find($form['sid']);
            $data->staffname = $form['staffname'];
            $data->staffphone1 = $form['staffphone1'];
            $data->staffphone2 = $form['staffphone2'];
            $data->staffmobile = $form['staffmobile'];
            $data->staffemail = $form['staffemail'];
            $data->save();
        } else {
            $data = new Staff();
            $data->staffname = $form['staffname'];
            $data->staffphone1 = $form['staffphone1'];
            $data->staffphone2 = $form['staffphone2'];
            $data->staffmobile = $form['staffmobile'];
            $data->staffemail = $form['staffemail'];
            $data->save();
        }
    }

    // lessons
    public function get_lessons(Request $request)
    {
        return Lesson::paginate($request->per_page);
    }

    public function get_filtered_lessons($filter, Request $request)
    {
        return Lesson::where('classname', 'LIKE', '%' . $filter . '%')->paginate($request->per_page);
    }

    public function get_filtered_lesson($id)
    {
        return Lesson::find($id);
    }

    public function service_categories()
    {
        return $this->categories->categories('service');
    }

    public function lesson_images($id)
    {
        return Product_image::where(['product_id' => $id, 'category' => 'Service'])->get();
    }

    public function delete_image(Request $request)
    {
        Product_image::find($request->id)->delete();
    }

    public function lesson_prices($id)
    {
        return Service_price::where('classid', $id)->get();
    }

    public function save_lesson_prices(Request $request)
    {
        if ($request->form['id'] > 0) {
            $data = Service_price::find($request->form['id']);
            $data->classid = $request->form['classid'];
            $data->serviceName = $request->form['serviceName'];
            $data->price = $request->form['price'];
            $data->quantity = $request->form['quantity'];
            $data->save();
        } else {
            $data = new Service_price();
            $data->classid = $request->form['classid'];
            $data->serviceName = $request->form['serviceName'];
            $data->price = $request->form['price'];
            $data->quantity = $request->form['quantity'];
            $data->save();
        }
    }

    public function lesson_parameters($id)
    {
        return Lesson_param::where('class_id', $id)->get();
    }

    public function save_lesson_parameter(Request $request)
    {
        if ($request->form['id'] > 0) {
            $data = Lesson_param::find($request->form['id']);
            $data->class_id = $request->form['class_id'];
            $data->parameters = $request->form['parameters'];
            $data->save();
        } else {
            $data = new Lesson_param();
            $data->class_id = $request->form['class_id'];
            $data->parameters = $request->form['parameters'];
            $data->save();
        }
    }

    public function delete_lesson_parameter(Request $request)
    {
        Lesson_param::where('id', $request->id)->delete();
    }

    public function save_lessons(Request $request)
    {
        if ($request->form['classid'] > 0) {
            $data = Lesson::find($request->form['classid']);
            $data->classname = $request->form['classname'];
            $data->price = $request->form['price'];
            $data->xero = $request->form['xero'];
            $data->classnotes = $request->form['classnotes'];
            $data->classTypes = $request->form['classTypes'];
            $data->isVisible = $request->form['isVisible'];
            $data->color = $request->form['color'];
            $data->categories = $request->form['categories'];
            $data->save();
            Category_value::where('UnionID', $request->form['classid'])->delete();
            $this->setting_categories($request->form['classid'], $request->form['categories'], 'Service_Category');
        } else {
            $data = new Lesson();
            $data->classname = $request->form['classname'];
            $data->price = $request->form['price'];
            $data->xero = $request->form['xero'];
            $data->classnotes = $request->form['classnotes'];
            $data->classTypes = $request->form['classTypes'];
            $data->isVisible = $request->form['isVisible'];
            $data->color = $request->form['color'];
            $data->categories = $request->form['categories'];
            $data->save();

            $this->setting_categories($data->classid, $request->form['categories'], 'Service_Category');
        }
    }

    private function setting_categories($id, $cat_ids, $type)
    {
        foreach ($cat_ids as $cat_id) {
            $data = new Category_value();
            $data->UnionID = $id;
            $data->Setting_key = $type;
            $data->Setting_value = $cat_id;
            $data->save();
        }
    }

    // date ranges

    public function date_ranges(Request $request)
    {
        return Daterange::orderBy('drid', 'desc')->paginate($request->per_page);
    }

    public function filter_date_range($filter, Request $request)
    {
        return Daterange::where('daterangename', 'LIKE', '%' . $filter . '%')->orderBy('drid', 'desc')->paginate($request->per_page);
    }

    public function save_date_range(Request $request)
    {
        if ($request->form['drid'] > 0) {
            $data = Daterange::find($request->form['drid']);
            $data->daterangename = $request->form['daterangename'];
            $data->daterangefrom = $request->form['daterangefrom'];
            $data->daterangeto = $request->form['daterangeto'];
            $data->daterangeclasses = $request->form['daterangeclasses'];
            $data->save();
        } else {
            $data = new Daterange();
            $data->daterangename = $request->form['daterangename'];
            $data->daterangefrom = $request->form['daterangefrom'];
            $data->daterangeto = $request->form['daterangeto'];
            $data->daterangeclasses = $request->form['daterangeclasses'];
            $data->save();
        }
    }

    public function update_date_range($id)
    {
        $data = Daterange::find($id);
        $data->daterangeclasses = 'Finished';
        $data->save();
    }

    // week days
    public function get_week_days()
    {
        return Weekday::get();
    }

    public function save_week_days(Request $request)
    {
        $data = Weekday::find($request->form['weekid']);
        $data->numberofweek = $request->form['numberofweek'];
        $data->upcoming = $request->form['upcoming'];
        $data->akoya = $request->form['akoya'];
        $data->arcadia = $request->form['arcadia'];
        $data->other_time_slot = $request->form['other_time_slot'];
        $data->save();
    }

    private function setup_store($key)
    {
        return Settings::select('SettingsID AS id', 'Setting_value AS value')->where('Setting_key', $key)->first();
    }

    public function contactus(Request $request)
    {
        event(new EventContactUs($request->contact));
    }
}
