<?php

namespace App\Http\Controllers\Api;

use App\Lesson;
use App\Product;
use App\Settings;
use App\Schedule;
use App\Service_price;
use App\Product_image;
use App\Product_option;
use App\Category_value;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ShopController extends Controller
{
    // product
    public function check_shop(Request $request)
    {
        $per_page = $request->per_page;
        $filter = $request->filter;

        $products = Product::select(
            'products.ProductID as id',
            'products.ProductName as product'
        )
            ->leftJoin('product_options', 'product_options.product_id', '=', 'products.ProductID')
            ->leftJoin('settings', 'settings.UnionID', '=', 'products.ProductID')
            ->whereNotIn('ProductID', [71, 72, 73, 74, 76, 79, 91, 92, 93, 94, 95, 96, 97, 100, 110, 111, 112, 113, 114, 115])
            ->orderBy('product')
            ->groupBy('products.ProductID', 'products.ProductName')
            ->havingRaw('SUM(product_options.quantity) > ?', [0]);

        if ($filter > 0) {
            $products->where('settings.Setting_value', $filter);
        }
        $product = $products->paginate($per_page);
        $product->getCollection()->transform(function ($prod) {
            $prod->images = Product_image::where(['category' => 'Product', 'product_id' => $prod->id])->first();
            return $prod;
        });

        return ['products' => $product, 'categories' => $this->categories('product')];
    }

    public function categories($type)
    {
        return Category_value::select('poscategories.CategoryName AS name', 'settings.Setting_value AS id')
            ->leftJoin('poscategories', 'poscategories.CategoryID', '=', 'settings.Setting_value')
            ->where('poscategories.type', $type)
            ->whereNotIn('poscategories.CategoryID', [23, 27, 31, 13, 12, 16, 48, 56, 47, 38, 54,42,43, 35,58])
            ->distinct('name', 'id')
            ->orderBy('name')
            ->get();
    }

    public function product_filter($id)
    {
        $products = Product::select(
            'products.ProductID as id',
            'products.ProductName as product'
        )
            ->leftJoin('settings', 'settings.UnionID', '=', 'products.ProductID')
            ->where('settings.Setting_value', $id)
            ->whereNotIn('products.ProductID', [71, 72, 73, 74, 76, 79, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97])
            ->orderBy('products.ProductName')
            ->paginate();
        $products->getCollection()->transform(function ($product) {
            $product->images = Product_image::where(['category' => 'Product', 'product_id' => $product->id])->first();
            return $product;
        });

        return $products;
    }

    public function item($id)
    {
        $data = Product::find($id);
        $data['category'] = 'Product';
        $data['option_name'] = Product_option::select(
            'id AS product_id',
            'option_name AS item',
            'quantity AS max_qty',
            'price',
            DB::raw('1 AS min_qty')
        )
            ->where('product_id', $id)
            ->where('quantity', '>', 0)
            ->get();
        $data['image'] = Product_image::where(['product_id' => $id, 'category' => 'Product'])->first();

        return response()->json($data, 200, [], JSON_NUMERIC_CHECK);
    }

    // services
    // motor city
    public function check_motor_city(Request $request)
    {
        $date_range = $this->date_range('_SHOP_MOTOR_CITY');
        $status = '';
        return ['products' => $this->check_services($request->per_page, $date_range, $status, $request->filter), 'categories' => $this->categories('service')];
        // status = Foremarke
    }

    public function motor_city_filter($id)
    {
        $date_range = $this->date_range('_SHOP_MOTOR_CITY');
        $status = '';
        return $this->service_filter($id, $date_range, $status);
    }

    public function motor_city($id)
    {
        $date_range = $this->date_range('_SHOP_MOTOR_CITY');
        $status = '';
        return $this->services($id, $date_range, $status);
    }
    
     // adult classes 09022021
     public function check_adult_motor_city(Request $request)
     {
         $date_range = $this->date_range('_SHOP_MOTOR_CITY');
         $status = '';
         return $this->check_service_adults($date_range, $status, $request->class_ids, $request->is_unli);

     }

     public function adult_motor_city(Request $request)
     {
         return $this->service_adult($request->class_ids, $request->is_unli);
     }

    // camps
    public function check_camp(Request $request)
    {
        $date_range = $this->date_range('_SHOP_CAMPS');
        $status = '';
        return $this->check_services($request->per_page, $date_range, $status, 0);
    }

    public function camp($id)
    {
        $date_range = $this->date_range('_SHOP_CAMPS');
        $status = '';
        return $this->other_offer($id, $date_range, $status);
    }

    //SVS
    public function check_svs(Request $request)
    {
        $date_range = $this->date_range('_SHOP_SVS');
        $status = '';
        return ['products' => $this->check_services($request->per_page, $date_range, $status, $request->filter), 'categories' => $this->categories('service')];
        // status = Foremarke
    }

    public function svs_filter($id)
    {
        $date_range = $this->date_range('_SHOP_SVS');
        $status = '';
        return $this->service_filter($id, $date_range, $status);
    }

    public function svs_city($id)
    {
        $date_range = $this->date_range('_SHOP_SVS');
        $status = '';
        return $this->services($id, $date_range, $status);
    }

    public function svs($id)
    {
        $date_range = $this->date_range('_SHOP_SVS');
        $status = '';
        return $this->services($id, $date_range, $status);
    }

    // Urdang
    public function check_urdang(Request $request)
    {
        $date_range = $this->date_range('_SHOP_URDANG');
        $status = '';
        return $this->check_services($request->per_page, $date_range, $status, 0);
    }

    public function urdang($id)
    {
        $date_range = $this->date_range('_SHOP_URDANG');
        $status = '';
        return $this->services($id, $date_range, $status, 'urdang');
    }

    // Foremarke
    public function check_foremarke(Request $request)
    {
        $date_range = $this->date_range('_SHOP_FOREMARKE');
        $status = 'Foremarke';
        return $this->check_services($request->per_page, $date_range, $status, 0);
    }

    public function foremarke($id)
    {
        $date_range = $this->date_range('_SHOP_FOREMARKE');
        $status = 'Foremarke';
        return $this->services($id, $date_range, $status, 'foremarke');
    }
    
    // Akoya
    public function check_akoya(Request $request)
    {
        $date_range = $this->date_range('_SHOP_AKOYA');
        $status = '';
        return $this->check_services($request->per_page, $date_range, $status, 0);
    }

    public function akoya($id)
    {
        $date_range = $this->date_range('_SHOP_AKOYA');
        $status = '';
        return $this->services($id, $date_range, $status, 'akoya');
    }

    // arcadia
    public function check_arcadia(Request $request)
    {
        $date_range = $this->date_range('_SHOP_ARCADIA');
        $status = '';
        return $this->check_services($request->per_page, $date_range, $status, 0);
    }

    public function arcadia($id)
    {
        $date_range = $this->date_range('_SHOP_ARCADIA');
        $status = '';
        return $this->services($id, $date_range, $status, 'arcadia');
    }
    
    private function check_services($per_page, $date_range, $status, $filter)
    {
        $services = Lesson::select(
            'class.classid AS id',
            'class.classname AS product'
        )
            ->leftJoin('schedule', 'schedule.classid', '=', 'class.classid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('settings', 'settings.UnionID', '=', 'class.classid')
            ->where([
                'dateranges.drid' => $date_range->Setting_value,
                'dateranges.daterangeclasses' => $status,
                'class.isVisible' => 1,
                'class.classTypes' => 'Child'
            ])
            ->whereNotIn('class.classid', [135, 136, 137, 138, 51, 360, 359])
            ->where('class.classname', 'not like',  "%company%")
            ->orderBy('product')
            ->distinct('class.classid', 'class.classname');

        if ($filter > 0) {
            $services->where('settings.Setting_value', $filter);
        }
        $service = $services->paginate($per_page);

        $service->getCollection()->transform(function ($service) {
            $service->images = Product_image::where(['category' => 'Service', 'product_id' => $service->id])->first();
            return $service;
        });

        return $service;
    }
    
    private function check_service_adults($date_range, $status, $class_ids, $unli) //09022021
    {
        return Schedule::select(
            'schedule.scheduleid AS schedule_id',
            'class.classid AS id',
            !$unli ? DB::raw('CONCAT(class.classname, " ", weekdays.weekname, " ", schedule.scheduletimestart, "-",schedule.scheduletimeend) AS product')
            : DB::raw('CONCAT(class.classname) AS product'),
            'class.xero AS xero',
            DB::raw('"Service" AS category'),
            'class.classTypes AS type',
            'class.classnotes AS description',
            'dateranges.daterangefrom AS date_start',
            'dateranges.daterangeto AS date_end',
            'weekdays.weekcount AS week_id'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->where([
                'dateranges.drid' => $date_range->Setting_value,
                'dateranges.daterangeclasses' => $status,
            ])
            ->orderBy('product', 'ASC')
            ->whereIn('class.classid', $class_ids)
            ->get();
        
    }

    private function service_filter($id, $date_range, $status)
    {
        $services = Lesson::select(
            'class.classid AS id',
            'class.classname AS product'
        )
            ->leftJoin('schedule', 'schedule.classid', '=', 'class.classid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('settings', 'settings.UnionID', '=', 'class.classid')
            ->where([
                'dateranges.drid' => $date_range->Setting_value,
                'dateranges.daterangeclasses' => $status,
                'class.isVisible' => 1,
                'settings.Setting_value' => $id
            ])
            ->whereNotIn('class.classid', [135, 136, 137, 138, 51])
            ->orderBy('product')
            ->distinct('class.classid', 'class.classname')
            ->paginate();
        $services->getCollection()->transform(function ($service) {
            $service->images = Product_image::where(['category' => 'Service', 'product_id' => $service->id])->first();
            return $service;
        });

        return $services;
    }

    private function services($id, $date_range, $status, $max_qty = 'motor_city')
    {
        // irish
        $singleQty = array(189, 190, 191, 372, 373, 374);
        $exam = array(101);
        $services = Lesson::find($id);
        $services['category'] = 'Service';
        if(in_array($id, $singleQty)) {
            $services['option_name'] = Schedule::select(
                'schedule.scheduleid AS product_id',
                DB::raw('CONCAT(dateranges.daterangename, "-", class.classname, "(", schedule.scheduletimestart, "-", schedule.scheduletimeend, ") ", staff.staffname , " - ", weekdays.weekname)  AS item'),
                DB::raw('1 AS max_qty'),
                DB::raw('schedule.schedulestudentlimit - COUNT(enroll.cid) AS max_limit'),
                'class.price AS price',
                'dateranges.daterangefrom AS date_start',
                'dateranges.daterangeto AS date_end',
                'weekdays.weekcount AS week_id',
                'weekdays.weekname AS day',
                DB::raw('CONCAT(venue.venuename,  " (", schedule.scheduletimestart, "-", schedule.scheduletimeend, ")" ) AS location'),
                'schedule.schedulenotes AS notes'
            )
                ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
                ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
                ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
                ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
                ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
                ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
                ->where([
                    'dateranges.daterangeclasses' => $status,
                    'dateranges.drid' => $date_range->Setting_value,
                    'class.classid' => $id,
                    'class.isVisible' => 1
                ])
                
                ->groupBy('weekdays.numberofweek', 'weekdays.upcoming', 'weekdays.akoya', 'weekdays.arcadia', 'schedule.scheduleid', 'dateranges.daterangename', 'class.classname', 'schedule.scheduletimestart', 'schedule.scheduletimeend', 'weekdays.weekname', 'schedule.schedulestudentlimit',  'class.price', 'dateranges.daterangefrom', 'dateranges.daterangeto', 'weekdays.weekcount', 'schedule.schedulenotes', 'venue.venuename', 'staff.staffname')
                ->get();
        } else if (in_array($id, $exam)) {
            $services['option_name'] = Schedule::select(
                'schedule.scheduleid AS product_id',
                DB::raw('CONCAT(dateranges.daterangename, "-", class.classname, "(", schedule.scheduletimestart, "-", schedule.scheduletimeend, ") ", staff.staffname , " - ", weekdays.weekname)  AS item'),
                DB::raw('SUM(weekdays.numberofweek - 5) AS max_qty'),
                DB::raw('schedule.schedulestudentlimit - COUNT(enroll.cid) AS max_limit'),
                'class.price AS price',
                'dateranges.daterangefrom AS date_start',
                'dateranges.daterangeto AS date_end',
                'weekdays.weekcount AS week_id',
                'weekdays.weekname AS day',
                DB::raw('CONCAT(venue.venuename,  " (", schedule.scheduletimestart, "-", schedule.scheduletimeend, ")" ) AS location'),
                'schedule.schedulenotes AS notes'
            )
                ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
                ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
                ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
                ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
                ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
                ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
                ->where([
                    'dateranges.daterangeclasses' => $status,
                    'dateranges.drid' => $date_range->Setting_value,
                    'class.classid' => $id,
                    'class.isVisible' => 1
                ])
                
                ->groupBy('weekdays.numberofweek', 'weekdays.upcoming', 'weekdays.akoya', 'weekdays.arcadia', 'schedule.scheduleid', 'dateranges.daterangename', 'class.classname', 'schedule.scheduletimestart', 'schedule.scheduletimeend', 'weekdays.weekname', 'schedule.schedulestudentlimit',  'class.price', 'dateranges.daterangefrom', 'dateranges.daterangeto', 'weekdays.weekcount', 'schedule.schedulenotes', 'venue.venuename', 'staff.staffname')
                ->get();
        } else {
            $services['option_name'] = Schedule::select(
                'schedule.scheduleid AS product_id',
                DB::raw('CONCAT(dateranges.daterangename, "-", class.classname, "(", schedule.scheduletimestart, "-", schedule.scheduletimeend, ") ", staff.staffname , " - ", weekdays.weekname)  AS item'),
                $max_qty == 'motor_city' ?  
                'weekdays.numberofweek AS max_qty' : 
                    ($max_qty == 'foremarke' ? 'weekdays.upcoming AS max_qty' : 
                        ($max_qty == 'akoya' ? 'weekdays.akoya AS max_qty' : 
                            ($max_qty == 'arcadia' ? 'weekdays.arcadia AS max_qty': 'weekdays.other_time_slot AS max_qty'))),
                DB::raw('schedule.schedulestudentlimit - COUNT(enroll.cid) AS max_limit'),
                'class.price AS price',
                'dateranges.daterangefrom AS date_start',
                'dateranges.daterangeto AS date_end',
                'weekdays.weekcount AS week_id',
                'weekdays.weekname AS day',
                DB::raw('CONCAT(venue.venuename,  " (", schedule.scheduletimestart, "-", schedule.scheduletimeend, ")" ) AS location'),
                'schedule.schedulenotes AS notes'
            )
                ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
                ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
                ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
                ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
                ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
                ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
                ->where([
                    'dateranges.daterangeclasses' => $status,
                    'dateranges.drid' => $date_range->Setting_value,
                    'class.classid' => $id,
                    'class.isVisible' => 1
                ])
                
                ->groupBy('weekdays.numberofweek', 'weekdays.upcoming', 'weekdays.akoya', 'weekdays.arcadia', 'schedule.scheduleid', 'dateranges.daterangename', 'class.classname', 'schedule.scheduletimestart', 'schedule.scheduletimeend', 'weekdays.weekname', 'schedule.schedulestudentlimit',  'class.price', 'dateranges.daterangefrom', 'dateranges.daterangeto', 'weekdays.weekcount', 'schedule.schedulenotes', 'venue.venuename', 'staff.staffname')
                ->get();
        }
        $services['service_price'] = Service_price::where('classid', $id)->where('quantity', '>', 0)->get();
        $services['image'] = Product_image::where(['category' => 'Service', 'product_id' => $id])->first();

        return $services;
    }

    private function date_range($value)
    {
        return Settings::where('Setting_key', $value)->first();
    }

    // camps, Urdang

    private function other_offer($id, $date_range, $status)
    {
        $services = Lesson::find($id);
        $services['category'] = 'Service';
        $services['option_name'] = Schedule::select(
            'schedule.scheduleid AS product_id',
            DB::raw('CONCAT(dateranges.daterangename, "-", class.classname,"s")  AS item'),
            'weekdays.numberofweek AS max_qty',
            DB::raw('schedule.schedulestudentlimit - COUNT(enroll.cid) AS max_limit'),
            'class.price AS price',
            'dateranges.daterangefrom AS date_start',
            'dateranges.daterangeto AS date_end',
            'weekdays.weekcount AS week_id',
            'weekdays.weekname AS day',
            DB::raw('CONCAT(venue.venuename,  " (", schedule.scheduletimestart, "-", schedule.scheduletimeend, ")" ) AS location'),
            'schedule.schedulenotes AS notes'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
            ->where([
                'dateranges.daterangeclasses' => $status,
                'dateranges.drid' => $date_range->Setting_value,
                'class.classid' => $id,
                'class.isVisible' => 1
            ])
            ->groupBy('weekdays.numberofweek', 'schedule.scheduleid', 'dateranges.daterangename', 'class.classname', 'schedule.scheduletimestart', 'schedule.scheduletimeend', 'weekdays.weekname', 'schedule.schedulestudentlimit',  'class.price', 'dateranges.daterangefrom', 'dateranges.daterangeto', 'weekdays.weekcount', 'schedule.schedulenotes', 'venue.venuename')
            ->get();
        $services['service_price'] = Service_price::where('classid', $id)->where('quantity', '>', 0)->get();
        $services['image'] = Product_image::where(['category' => 'Service', 'product_id' => $id])->first();

        return $services;
    }
    
    private function service_adult($schedule_id,  $is_unli) // 09022021
    {
        $services = Schedule::select(
                    'schedule.scheduleid AS product_id',
                    !$is_unli ? DB::raw('CONCAT(class.classname, " ", weekdays.weekname, " ", schedule.scheduletimestart, "-",schedule.scheduletimeend) AS item')
                    : DB::raw('CONCAT(class.classname) AS item'),
                    DB::raw('1 AS max_qty'),
                    DB::raw('schedule.schedulestudentlimit - COUNT(enroll.cid) AS max_limit'),
                    'class.price AS price',
                    'class.classid AS classid',
                    'dateranges.daterangefrom AS date_start',
                    'dateranges.daterangeto AS date_end',
                    'weekdays.weekcount AS week_id',
                    'weekdays.weekname AS day',
                    DB::raw('CONCAT(venue.venuename,  " (", schedule.scheduletimestart, "-", schedule.scheduletimeend, ")" ) AS location'),
                    'schedule.schedulenotes AS notes'
                )
                    ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
                    ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
                    ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
                    ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
                    ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
                    ->whereIn('schedule.scheduleid', $schedule_id)
                    ->groupBy('weekdays.numberofweek', 'weekdays.upcoming', 'weekdays.akoya', 'weekdays.arcadia', 'schedule.scheduleid', 'dateranges.daterangename', 'class.classname', 'schedule.scheduletimestart', 'schedule.scheduletimeend', 'weekdays.weekname', 'schedule.schedulestudentlimit',  'class.price', 'class.classid', 'dateranges.daterangefrom', 'dateranges.daterangeto', 'weekdays.weekcount', 'schedule.schedulenotes', 'venue.venuename')
                    ->get();
        return $services;
    }

    // upcoming
    private function upcoming_dates($id, $date_range, $status)
    {
        $services = Lesson::find($id);
        $services['category'] = 'Service';
        $services['option_name'] = Schedule::select(
            'schedule.scheduleid AS product_id',
            DB::raw('CONCAT(dateranges.daterangename, "-", class.classname, "(", schedule.scheduletimestart, "-", schedule.scheduletimeend, ") - ", weekdays.weekname)  AS item'),
            'weekdays.upcoming AS max_qty',
            DB::raw('schedule.schedulestudentlimit - COUNT(enroll.cid) AS max_limit'),
            'class.price AS price',
            'dateranges.daterangefrom AS date_start',
            'dateranges.daterangeto AS date_end',
            'weekdays.weekcount AS week_id',
            'weekdays.weekname AS day',
            DB::raw('CONCAT(venue.venuename,  " (", schedule.scheduletimestart, "-", schedule.scheduletimeend, ")" ) AS location'),
            'schedule.schedulenotes AS notes'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
            ->where([
                'dateranges.daterangeclasses' => $status,
                'dateranges.drid' => $date_range->Setting_value,
                'class.classid' => $id,
                'class.isVisible' => 1
            ])
            ->groupBy('weekdays.upcoming', 'schedule.scheduleid', 'dateranges.daterangename', 'class.classname', 'schedule.scheduletimestart', 'schedule.scheduletimeend', 'weekdays.weekname', 'schedule.schedulestudentlimit',  'class.price', 'dateranges.daterangefrom', 'dateranges.daterangeto', 'weekdays.weekcount', 'schedule.schedulenotes', 'venue.venuename')
            ->get();
        $services['service_price'] = Service_price::where('classid', $id)->where('quantity', '>', 0)->get();
        $services['image'] = Product_image::where(['category' => 'Service', 'product_id' => $id])->first();

        return $services;
    }

    // winter camps

    public function multi_camps(Request $request)
    {
        $class_ids = $request->class_ids;
         //summer
         //$ids = $class_ids == 'multi_skills' ? [660,661] : ($class_ids == 'performing_arts' ? [608] : [609]);
        //winter
        //$ids = $class_ids == 'multi_skills' ? [769,770,771,772,773,774,775,776,777,778] : ($class_ids == 'performing_arts' ? [772] : [769,770,771,772,773,774,775,776,777,778]);
        //midterm
        $ids = $class_ids == 'multi_skills' ? [820,821,822,823,824,825] : [];
        // $ids = $class_ids == 'dtrn' ? [437, 438] : ($class_ids == 'sw' ? [439, 440] : ($class_ids == 'rad' ? [444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454] : [443]));
        // $ids = [432, 433];
        return Schedule::select(
            'schedule.scheduleid AS schedule_id',
            'class.classid AS id',
            'class.classname AS product',
            'class.xero AS xero',
            DB::raw('"Service" AS category'),
            'class.classTypes AS type',
            'class.classnotes AS description',
            'dateranges.daterangefrom AS date_start',
            'dateranges.daterangeto AS date_end',
            'weekdays.weekcount AS week_id'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->where('dateranges.daterangeclasses', '<>', 'Finished')
            ->whereIn('class.classid', $ids)
            ->get();
    }

    public function multi_skill($id)
    {
        return DB::table('serviceprice')->where('classid', $id)->get();
    }

    public function workshop($id, Request $request)
    {
        //summer
        //$daily = $id == 660 ? [1139,1139] : ($id == 661 ? [1140, 1140] : ($id == 609 ? [1052, 1061] : ($id == 393 ? [946, 960] : [968, 982])));
        //winter
        
        //daily
        $daily = [];
        $weekly = [];
        $full = [];
        switch ($id) {
            case 769:
                $daily = [1489, 1502];
                $weekly = [1485, 1487];
                $full = 1488;
                break;
            case 770:
                $daily = [1507, 1520];
                $weekly = [1503, 1505];
                $full = 1506;
                break;
            case 771:
                $daily = [1521, 1534];
                $weekly = [1536, 1538];
                $full = 1535;
                break;
            case 772:
                $daily = [1539, 1552];
                $weekly = [1554, 1556];
                $full = 1553;
                break;
            case 773:
                $daily = [1557, 1570];
                $weekly = [1572, 1574];
                $full = 1571;
                break;
            case 774:
                $daily = [1575, 1588];
                $weekly = [1590, 1592];
                $full = 1589;
                break;
            case 775:
                $daily = [1593, 1606];
                $weekly = [1608, 1610];
                $full = 1607;
                break;
            case 776:
                $daily = [1611, 1624];
                $weekly = [1626, 1628];
                $full = 1625;
                break;
            case 777:
                $daily = [1629, 1642];
                $weekly = [1644, 1646];
                $full = 1643;
                break;
            case 778:
                $daily = [1647, 1660];
                $weekly = [1662, 1664];
                $full = 1661;
                break;
        }


        // $daily = $id == 769 ? [1489, 1502] :
        //  ($id == 770 ? [1507, 1520] :
        //   ($id == 771 ? [1521, 1534] : 
        //     ($id == 772 ? [1539, 1539] : 
        //         ($id == 773 ? [1539, 1552] : 
        //         ($id == 772 ? [1539, 1552] : [])));

        // $weekly = $id == 769 ? [1485, 1487] : 
        //     ($id == 770 ? [1503, 1505] : 
        //         ($id == 771 ? [1536, 1538] : 
        //             ($id == 772 ? [1554, 1556] : [])));

        // $full = $id == 769 ? 1488 : 
        //     ($id == 770 ? 1506 : 
        //         ($id == 771 ? 1535 : 
        //             ($id == 772 ? 1553 : 0)));

        switch ($request->stat) {
            case 'Fitness':
                    return $this->winter_workshop_daily($id, [887, 888]);
                    break;
            case 'Daily':
                    return $this->winter_workshop_daily($id, $daily);
                    break;
            case 'Weekly':
                    return $this->winter_workshop_daily($id, $weekly);
                    break;
            case 'Full Camp':
                return $this->winter_workshop_full_term($id, $full);
                break;
            default: break;
        }
    }

    public function workshop_selected(Request $request)
    {
        $ids = $request->ids;
        return DB::table('serviceprice')->whereIn('id', $ids)->get();
    }

    private function winter_workshop_daily($class_id, $ids)
    {
        return DB::table('serviceprice')->select("classid", "id", "price", "quantity", "serviceName", DB::raw("1 AS qty"))->where('quantity', '>', 0)->whereBetween('id', $ids)->where('classid', $class_id)->get();
    }
    private function winter_workshop_full_term($class_id, $id)
    {
        return DB::table('serviceprice')->select("classid", "id", "price", "quantity", "serviceName", DB::raw("1 AS qty"))->where('quantity', '>', 0)->where(['classid' => $class_id, 'id' => $id])->get();
    }

    public function multi_skill_prices($service_id, $price_id)
    {
        $data = Schedule::select(
            'schedule.scheduleid AS product_id',
            DB::raw('CONCAT(dateranges.daterangename, "-", class.classname,"s")  AS item'),
            'weekdays.numberofweek AS max_qty',
            'class.price AS price',
            'dateranges.daterangefrom AS date_start',
            'dateranges.daterangeto AS date_end',
            'weekdays.weekcount AS week_id',
            'weekdays.weekname AS day',
            DB::raw('CONCAT(venue.venuename,  " (", schedule.scheduletimestart, "-", schedule.scheduletimeend, ")" ) AS location'),
            DB::raw('"Service" AS category'),
            DB::raw('1 AS min_qty'),
            DB::raw('0 AS discount'),
            DB::raw('"" AS discountvalue'),
            'schedule.schedulenotes AS notes'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
            ->where('dateranges.daterangeclasses', '')
            ->where('class.isVisible', 1)
            ->where('class.classid', $service_id)
            ->first();
        $data['service_price'] = DB::table('serviceprice')->find($price_id);
        return json_encode($data);
    }
    
    public function check_quantity(Request $request)
    {
        // return $request->all();
        switch ($request->form['type']) {
            case 'Product':
                return $this->product_quantity($request->form['product_option']['id']);
                
            case 'Motor City':
                return $this->schedule_quantity($request->form['product_option']['id']);
            
            case 'Foremarke':
                return $this->schedule_quantity($request->form['product_option']['id']);
                
            case 'Akoya':
                return $this->schedule_quantity($request->form['product_option']['id']);
                
            case 'Camps':
                return $this->service_price_quantities($request->form['product_option']['option_id']);
                
            case 'Others':
                return $this->service_price_quantities($request->form['product_option']['option_id']);
                
            case 'Urdang':
                return $this->service_price_quantities($request->form['product_option']['option_id']);
                
        }
    }

    private function service_price_quantities($id)
    {
        return Service_price::select('quantity AS quantity')->where('id', $id)->first();
    }

    private function schedule_quantity($id)
    {
        return Schedule::select(DB::raw('schedule.schedulestudentlimit - COUNT(enroll.cid) AS quantity'))
            ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
            ->where('schedule.scheduleid', $id)
            ->groupBy('schedule.schedulestudentlimit')
            ->first();
    }

    private function product_quantity($id)
    {
        return Product_option::select('quantity AS quantity')->where('id', $id)->first();
    }
}
