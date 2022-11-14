<?php

namespace App\Http\Controllers\Api;

use App\Sale;
use App\Enroll;
use App\Schedule;
use App\Sale_item;
use App\User_meta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Mother;
use App\Sale_item_service_price;

class ReportController extends Controller
{
    public function get_orders(Request $request)
    {
        return $this->sale($request->per_page);
    }

    public function get_my_orders(Request $request)
    {
        $mid = User_meta::where(['user_id' => auth('api')->user()->id, 'meta_key' => '_parent_id'])->first();
        return $this->sale($request->per_page, $mid->meta_value);
    }

    public function get_receipt($id)
    {
        return $this->receipt($id);
    }

    public function get_receipts(Request $request)
    {
        return $this->sale($request->per_page);
    }

    public function get_receipt_filters($id, Request $request)
    {
        return Sale::select(
            'sales.id AS id',
            'sales.amount_excl AS excl',
            'sales.discount AS discount',
            'sales.vat AS vat',
            'sales.amount_incl AS amount_incl',
            'sales.notes AS notes',
            'sales.Status AS status',
            DB::raw('CONCAT(mother.motherfirstname, " ", mother.motherlastname) AS customer')
        )
            ->leftJoin('mother', 'mother.mid', '=', 'sales.customer_id')
            ->where('sales.id', 'LIKE', '%' . $id . '%')
            ->orderBy('sales.id', 'desc')
            ->paginate($request->per_page);
    }

    public function update_receipt_status(Request $request)
    {
        $data = Sale::find($request->receipt['id']);
        $data->Status = $request->receipt['status'];
        $data->save();
    }

    public function get_products(Request $request)
    {
        $date = $request->dates;
        $date_from = $date[0] . ' 00:00:00';
        $date_to = $date[1] . ' 23:59:59';
        $product_ids = $request->product_ids;

        $data = Sale_item::select(
            'products.ProductID AS id',
            'products.ProductName AS name',
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM(sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('product_options', 'product_options.id', '=', 'sales_items.item_id')
            ->leftJoin('products', 'products.ProductID', '=', 'product_options.product_id')
            ->where('sales.Status', 'completed')
            ->where('sales_items.category', 'Product')
            ->groupBy(['id', 'name'])
            ->whereBetween('sales.created_at', [$date_from, $date_to]);

        if (count($product_ids) > 0) {
            $data->whereIn('products.ProductID', $product_ids);
        }

        $report = $data->get()->transform(function ($product) use ($date_from, $date_to) {
            $product->items = Sale_item::select(
                'product_options.id AS id',
                'product_options.option_name AS name',
                DB::raw('SUM(sales_items.quantity) AS quantity'),
                DB::raw('SUM(sales_items.discount) AS discount'),
                DB::raw('SUM(sales_items.VAT) AS vat'),
                DB::raw('SUM(sales_items.total_price - sales_items.VAT) AS taxable'),
                DB::raw('SUM(sales_items.total_price) AS price')
            )
                ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
                ->leftJoin('product_options', 'product_options.id', '=', 'sales_items.item_id')
                ->leftJoin('products', 'products.ProductID', '=', 'product_options.product_id')
                ->groupBy(['product_options.id', 'product_options.option_name'])
                ->where('sales.Status', 'completed')
                ->where('sales_items.category', 'Product')
                ->where('products.ProductID', $product->id)
                ->whereBetween('sales.created_at', array($date_from, $date_to))
                ->get();
            return $product;
        });

        return $report;
    }

    public function get_services(Request $request)
    {
        $date = $request->dates;
        $date_from = $date[0] . ' 00:00:00';
        $date_to = $date[1] . ' 23:59:59';
        $class_ids = $request->class_ids;

        $service = $this->sale_services($date_from, $date_to, $class_ids);
        $others = $this->other_services_report($date_from, $date_to, $class_ids);
        $merged = collect($service)->merge($others);

            // $data['services'] = $merged->toarray();
            $data['services'] = $service;

        return $data;
    }

    public function get_toher_services(Request $request)
    {
        $date = $request->dates;
        $date_from = $date[0] . ' 00:00:00';
        $date_to = $date[1] . ' 23:59:59';
        $class_ids = $request->class_ids;

            $data['other_services'] = $this->other_services_report($date_from, $date_to, $class_ids);

        return $data;
    }

    private function other_services_report($date_from, $date_to, $class_ids) {

        $data = Sale_item::select(
            'other_products.ProductName AS title',
            'other_product_option.option_name AS name',
            // DB::raw('CONCAT(other_products.ProductName, " ", other_product_option.option_name) AS name'),
            'mother.motherfirstname AS firstname',
            'mother.motherlastname AS lastname',
            'sales.payment_type AS payment_type',
            'sales_items.sale_id AS sale_id',
            'sales.created_at AS created_at',
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM( sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS total'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('other_product_option', 'other_product_option.id', '=', 'sales_items.item_id')
            ->leftJoin('other_products', 'other_products.ProductID', '=', 'other_product_option.product_id')
            ->leftJoin('mother', 'mother.mid', '=', 'sales.customer_id')
            ->where(['sales.Status' => 'completed', 'sales_items.category' => 'OtherService'])
            ->whereBetween('sales.created_at', [$date_from, $date_to]);

        if (count($class_ids) > 0) {
            $data->whereIn('other_products.ProductName', $class_ids);
        }

        return $data->orderBy('title')->groupBy('title', 'name', 'firstname', 'lastname', 'payment_type', 'sale_id', 'created_at')->get();
    }

    private function sale($per_page, $id = null)
    {
        if (empty($id)) {
            $data =
                Sale::select(
                    'sales.id AS id',
                    'sales.amount_excl AS excl',
                    'sales.discount AS discount',
                    'sales.vat AS vat',
                    'sales.amount_incl AS amount_incl',
                    'sales.notes AS notes',
                    'sales.Status AS status',
                    'sales.xero_invoiceID AS xero',
                    DB::raw('CONCAT(mother.motherfirstname, " ", mother.motherlastname, " (", mother.motheremailaddress, ")") AS customer')
                )
                ->leftJoin('mother', 'mother.mid', '=', 'sales.customer_id')
                ->orderBy('sales.id', 'desc')
                ->paginate($per_page);
        } else {
            $data = Sale::where(['customer_id' => $id, 'Status' => 'completed'])->orderBy('id', 'desc')->paginate($per_page);
        }
        return $data;
    }

    private function receipt($id)
    {
        $data['transaction'] = Sale::find($id);
       
        $data['Products'] = Sale_item::select(
            DB::raw('CONCAT(products.ProductName," ",product_options.option_name) AS item'),
            'sales_items.price AS unit_price',
            'sales_items.quantity AS quantity',
            'sales_items.discount AS discount',
            'sales_items.VAT AS tax',
            'sales_items.total_price AS total',
            'products.Xero AS xero'
        )
            ->leftJoin('product_options', 'product_options.id', '=', 'sales_items.item_id')
            ->leftJoin('products', 'products.ProductID', '=', 'product_options.product_id')
            ->where(['sales_items.sale_id' => $id, 'sales_items.category' => 'Product'])->get();

        $data['Services'] = Sale_item::select(
            'sales_items.id AS id',
            DB::raw('CONCAT(class.classname," - ",dateranges.daterangename, "(", schedule.scheduletimestart, "-", schedule.scheduletimeend, ") -", weekdays.weekname, " (", children.firstname , " ", children.lastname, ")") AS item'),
            'sales_items.price AS unit_price',
            'sales_items.quantity AS quantity',
            'sales_items.discount AS discount',
            'sales_items.VAT AS tax',
            'sales_items.total_price AS total',
            'class.xero AS xero'
        )
            ->leftJoin('schedule', 'schedule.scheduleid', '=', 'sales_items.item_id')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('children', 'children.cid', '=', 'sales_items.student_id')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->where(['sales_items.sale_id' => $id, 'sales_items.category' => 'Service'])->get()
            ->transform(function ($service) {
                $service->service_price = Sale_item_service_price::select('serviceprice.serviceName')
                    ->leftJoin('serviceprice', 'serviceprice.id', '=', 'sale_item_service_prices.serviceprice_id')
                    ->where('sale_item_id', $service->id)->first();
                return $service;
            });

        $data['Locations'] = Sale_item::select(
            'venue.venuename AS item',
            'sales_items.price AS unit_price',
            'sales_items.quantity AS quantity',
            'sales_items.discount AS discount',
            'sales_items.VAT AS tax',
            'sales_items.total_price AS total',
            'venue.Xero AS xero'
        )
            ->leftJoin('venue', 'venue.vid', '=', 'sales_items.item_id')
            ->where(['sales_items.sale_id' => $id, 'sales_items.category' => 'Location'])->get();

        $data['Other_services'] = Sale_item::select(
            DB::raw('CONCAT(other_products.ProductName, " ", other_product_option.option_name) AS item'),
            'sales_items.price AS unit_price',
            'sales_items.quantity AS quantity',
            'sales_items.discount AS discount',
            'sales_items.VAT AS tax',
            'sales_items.total_price AS total',
            'other_products.Xero AS xero'
        )
            ->leftJoin('other_product_option', 'other_product_option.id', '=', 'sales_items.item_id')
            ->leftJoin('other_products', 'other_products.ProductID', '=', 'other_product_option.product_id')
            ->where(['sales_items.sale_id' => $id, 'sales_items.category' => 'OtherService'])->get();

        $data['Trial'] = Sale_item::select(
            DB::raw('CONCAT("Trial - ", class.classname," - ",dateranges.daterangename, "(", schedule.scheduletimestart, "-", schedule.scheduletimeend, ") -", weekdays.weekname) AS item'),
            'sales_items.price AS unit_price',
            'sales_items.quantity AS quantity',
            'sales_items.discount AS discount',
            'sales_items.VAT AS tax',
            'sales_items.total_price AS total',
            'class.xero AS xero'
        )
            ->leftJoin('trial_class_options', 'trial_class_options.id', '=', 'sales_items.item_id')
            ->leftJoin('class', 'class.classid', '=', 'trial_class_options.ClassID')
            ->leftJoin('schedule', 'schedule.classid', '=', 'class.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->where(['sales_items.sale_id' => $id, 'sales_items.category' => 'Trial'])->get();
            $data['customer'] = Mother::find($data['transaction']->customer_id);
        return $data;
    }

    public function get_class_information(Request $request)
    {
        $dates = $request->form['dates'];
        // $location = $request->form['location'];
        $lessons = $request->form['lessons'];
        $teacher = $request->form['teacher'];
        $enrolled = $request->form['enrolled'];
        $term = $request->form['term'];

        return $this->class_information($dates, $enrolled, $teacher, $lessons, $term);
    }

    public function get_number_of_students(Request $request)
    {
        // $location = $request->form['location'];
        $lessons = $request->form['lessons'];
        $teacher = $request->form['teacher'];
        $enrolled = $request->form['enrolled'];
        $term = $request->form['term'];

        return $this->number_of_students($enrolled, $teacher, $lessons, $term);
    }

    public function get_payment_by_schedules(Request $request)
    {
        $dates = $request->form['dates'];
        $lessons = $request->form['lessons'];

        return $this->payment_by_schedules($dates, $lessons);
    }

    public function get_payment_by_lessons(Request $request)
    {
        $dates = $request->form['dates'];
        $lessons = $request->form['lessons'];
        $term = $request->form['term'];

        return $this->payment_by_lessons($dates, $lessons, $term);
    }

    public function get_product_sales(Request $request)
    {
        $dates = $request->form['dates'];
        $products = $request->form['products'];

        return $this->product_sales($dates, $products);
    }

    public function get_locations(Request $request)
    {
        $date = $request->dates;
        $date_from = $date[0] . ' 00:00:00';
        $date_to = $date[1] . ' 23:59:59';
       //return $this->motor_city($date_from, $date_to);

       //return $this->outside_location($date_from, $date_to);
  
        return $this->motor_city($date_from, $date_to)
        ->merge($this->outside_location($date_from, $date_to))
        ->merge($this->other_services($date_from, $date_to, true));
    }

    private function class_information($date, $enrolled, $teacher_id, $lesson_ids, $term)
    {
        $date_from = $date[0] . ' 00:00:00';
        $date_to = $date[1] . ' 23:59:59';
        $data = Enroll::select(
            'schedule.scheduleid AS id',
            'enroll.cid AS cid',
            DB::raw('CONCAT(children.firstname, " ", children.lastname) AS name'),
            'children.dateofbirth AS dob',
            'venue.venuename as location',
            'class.classname as lesson',
            'weekdays.weekname as day',
            DB::raw('CONCAT(schedule.scheduletimestart, " - ", schedule.scheduletimeend) AS time'),
            'staff.staffname AS teacher',
            DB::raw('CONCAT(mother.motherfirstname, " ", mother.motherlastname) AS mom'),
            'mother.motheremailaddress AS email',
            'mother.motherhomenumber AS mobile'
        )
            ->leftJoin('children', 'children.cid', '=', 'enroll.cid')
            ->leftJoin('schedule', 'schedule.scheduleid', '=', 'enroll.scheduleid')
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('mother', 'mother.mid', '=', 'children.mid')
            ->where('enroll.enrollpermanent', $enrolled)
            ->where('enroll.cid', '<>', 0)
            ->whereBetween('enroll.enrollstartdate', [$date_from, $date_to]);

        if ($teacher_id > 0) {
            $data->where('staff.sid', $teacher_id);
        }

        if ($term > 0) {
            $data->where('dateranges.drid', $term);
        }

        if (count($lesson_ids) > 0) {
            $data->whereIn('class.classid', $lesson_ids);
        }

        return $data->get();
    }

    private function number_of_students($enrolled, $teacher_id, $lesson_ids, $term)
    {

        $data = Schedule::select(
            'schedule.scheduleid AS id',
            'venue.venuename as location',
            'class.classname as lesson',
            'weekdays.weekname as day',
            DB::raw('CONCAT(schedule.scheduletimestart, " - ", schedule.scheduletimeend) AS time'),
            'staff.staffname AS teacher',
            DB::raw('COUNT(children.cid) as number_of_student')
        )
            ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
            ->leftJoin('children', 'children.cid', '=', 'enroll.cid')
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->where('enroll.enrollpermanent', $enrolled);
        // ->whereBetween('enroll.enrollstartdate', [$date_from, $date_to]);

        if ($teacher_id > 0) {
            $data->where('staff.sid', $teacher_id);
        }

        if ($term > 0) {
            $data->where('dateranges.drid', $term);
        }

        if (count($lesson_ids) > 0) {
            $data->whereIn('class.classid', $lesson_ids);
        }

        return $data->orderBy('lesson')->groupBy('id', 'location', 'lesson', 'day', 'teacher', 'schedule.scheduletimestart', 'schedule.scheduletimeend')->get();
    }

    private function payment_by_schedules($date, $lesson_ids)
    {
        $date_from = $date[0] . ' 00:00:00';
        $date_to = $date[1] . ' 23:59:59';

        $data = Sale_item::select(
            'venue.venuename AS location',
            'class.classname AS lesson',
            'weekdays.weekname AS day',
            DB::raw('CONCAT(schedule.scheduletimestart, " - ", schedule.scheduletimeend) AS time'),
            'staff.staffname AS teacher',
            'mother.motherfirstname AS firstname',
            'mother.motherlastname AS lastname',
            'sales.payment_type AS payment_type',
            'sales_items.sale_id AS sale_id',
            'sales.created_at AS created_at',
            DB::raw('SUM(sales_items.total_price) AS total')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('schedule', 'schedule.scheduleid', '=', 'sales_items.item_id')
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->leftJoin('mother', 'mother.mid', '=', 'sales.customer_id')
            ->where(['sales.Status' => 'completed', 'sales_items.category' => 'Service'])
            ->whereBetween('sales.created_at', [$date_from, $date_to]);

        if (count($lesson_ids) > 0) {
            $data->whereIn('class.classid', $lesson_ids);
        }

        return $data->orderBy('lesson')->groupBy('location', 'lesson', 'day', 'schedule.scheduletimestart', 'schedule.scheduletimeend', 'teacher', 'firstname', 'lastname', 'payment_type', 'sale_id', 'created_at')->get();
    }

    private function payment_by_lessons($date, $lesson_ids, $term)
    {
        $date_from = $date[0] . ' 00:00:00';
        $date_to = $date[1] . ' 23:59:59';

        $data = Sale_item::select(
            'class.classname AS lesson',
            'class.classid AS lesson_id',
            DB::raw('SUM(sales_items.total_price) AS total')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('schedule', 'schedule.scheduleid', '=', 'sales_items.item_id')
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->where(['sales.Status' => 'completed', 'sales_items.category' => 'Service'])
            ->whereBetween('sales.created_at', [$date_from, $date_to]);

        if (count($lesson_ids) > 0) {
            $data->whereIn('class.classid', $lesson_ids);
        }

        if($term > 0) {
            $data->where('dateranges.drid', $term);
        }

        return $data->orderBy('lesson')->groupBy('lesson', 'lesson_id')->get()->transform(function($data) use($date_from, $date_to, $term) {
            $date_range = '';
            if($term > 0) {
                $date_range = $term;
            }
            $data->trans = Sale_item::select('sales_items.sale_id AS tranNumber', 
                        'children.firstname AS firstName',
                        'children.lastname AS familyName',
                        'sales_items.discount AS discount',
                        'sales_items.VAT AS tax',
                        'sales_items.total_price AS total'
                        )
                        ->leftJoin('children', 'children.cid', '=', 'sales_items.student_id')
                        ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
                        ->leftJoin('schedule', 'schedule.scheduleid', '=', 'sales_items.item_id')
                        ->where([
                            'schedule.classid' => $data->lesson_id,
                            'sales.Status' => 'completed', 
                            'sales_items.category' => 'Service'
                        ])
                        ->whereBetween('sales.created_at', [$date_from, $date_to])
                        ->where('schedule.drid', 'LIKE', '%'.$date_range.'%')
                        ->get();
            return $data;
        });
    }

    private function product_sales($date, $products)
    {
        $date_from = $date[0] . ' 00:00:00';
        $date_to = $date[1] . ' 23:59:59';

        $data = Sale_item::select(
            'products.ProductID AS id',
            'products.ProductName AS name',
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS VAT'),
            DB::raw('SUM(sales_items.total_price - sales_items.VAT) AS Taxable'),
            DB::raw('SUM(sales_items.total_price) AS price'),
            'venue.venuename as location'
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('product_options', 'product_options.id', '=', 'sales_items.item_id')
            ->leftJoin('products', 'products.ProductID', '=', 'product_options.product_id')
            ->leftJoin('venue', 'sales.location_id', '=', 'venue.vid')
            ->where(['sales.Status' => 'completed', 'sales_items.category' => 'Product'])
            ->whereBetween('sales.created_at', [$date_from, $date_to])
            ->groupBy('id', 'name','location');

        if (count($products) > 0) {
            $data->whereIn('products.ProductID', $products);
        }

        return $data->get();
    }

    private function motor_city($date_from, $date_to)
    {
        $report = Sale_item::select(
            'venue.vid AS id',
            'venue.venuename AS name',
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM( sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('schedule', 'schedule.scheduleid', '=', 'sales_items.item_id')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->where([
                'sales.Status' => 'completed',
               // 'venue.venuename' => 'Springs Souk'
            ])
            ->whereIn('sales_items.category', ['Service', 'Trial'])
            ->groupBy(['id', 'name'])
            ->whereBetween('sales.created_at', [$date_from, $date_to])
            ->get();

        return $report;
    }



    private function sale_services($date_from, $date_to, $class_ids)
    {
        $data = Sale_item::select(
            'class.classname AS title',
            DB::raw('CONCAT(weekdays.weekname, " ( ", schedule.scheduletimestart, "-", schedule.scheduletimeend, " ) ") AS name'),
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM( sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('schedule', 'schedule.scheduleid', '=', 'sales_items.item_id')
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->groupBy(['class.classname', 'weekdays.weekname', 'schedule.scheduletimestart', 'schedule.scheduletimeend'])
            ->where([
                'sales.Status' => 'completed',
                'sales_items.category' => 'Service'
            ])
            ->whereBetween('sales.created_at', [$date_from, $date_to]);
            // ->whereIn('class.classid', $class_ids)
            if(count($class_ids) > 0) {
                $data->whereIn('class.classname', $class_ids);
            }
           $datas = $data->get();

        return $datas;
    }

    private function sale_locations($date_from, $date_to)
    {
        $report = Sale_item::select(
            'venue.venuename AS title',
            'venue.venuename AS name',
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM( sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('venue', 'venue.vid', '=', 'sales_items.item_id')
            ->groupBy(['title', 'name'])
            ->where([
                'sales.Status' => 'completed',
                'sales_items.category' => 'Location'
            ])
            ->whereBetween('sales.created_at', [$date_from, $date_to])
            ->get();
        return $report;
    }

    private function outside_location($date_from, $date_to)
    {
        $report = Sale_item::select(
            
            DB::raw("CONCAT(venue.vid,'0000') AS id"),
            DB::raw("CONCAT(venue.venuename,' - Outside Location') AS name"),
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM( sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('venue', 'venue.vid', '=', 'sales_items.item_id')
            ->where([
                'sales.Status' => 'completed',
                'sales_items.category' => 'Location'
            ])
            ->groupBy(['id', 'name'])
            ->whereBetween('sales.created_at', [$date_from, $date_to])
            ->get();

        return $report;
    }

    private function sale_other_services($date_from, $date_to, $class_ids)
    {
        $report = Sale_item::select(
            'other_products.ProductName AS title',
            'other_product_option.option_name AS name',
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM( sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('other_product_option', 'other_product_option.id', '=', 'sales_items.item_id')
            ->leftJoin('other_products', 'other_products.ProductID', '=', 'other_product_option.product_id')
            ->groupBy(['title', 'name'])
            ->where([
                'sales.Status' => 'completed',
                'sales_items.category' => 'OtherService'
            ])
            ->whereBetween('sales.created_at', [$date_from, $date_to])
            ->whereIn('other_products.ProductID', $class_ids)
            ->get();

        return $report;
    }

    private function other_services($date_from, $date_to, $location = false)
    {
        $report = Sale_item::select(
            $location ? DB::raw('9999 AS id') : 'other_products.ProductID AS id',
            $location ? DB::raw('"Motor City - Other services" AS name') : 'other_products.ProductName AS name',
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM( sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('other_product_option', 'other_product_option.id', '=', 'sales_items.item_id')
            ->leftJoin('other_products', 'other_products.ProductID', '=', 'other_product_option.product_id')
            ->where([
                'sales.Status' => 'completed',
                'sales_items.category' => 'OtherService'
            ])
            ->groupBy(['id', 'name'])
            ->whereBetween('sales.created_at', [$date_from, $date_to])
            ->get();

        return $report;
    }

    private function sale_trials($date_from, $date_to)
    {
        $report = Sale_item::select(
            'class.classname AS title',
            'class.classname AS name',
            DB::raw('SUM(sales_items.quantity) AS quantity'),
            DB::raw('SUM(sales_items.discount) AS discount'),
            DB::raw('SUM(sales_items.VAT) AS vat'),
            DB::raw('SUM( sales_items.total_price - sales_items.VAT) AS taxable'),
            DB::raw('SUM(sales_items.total_price) AS price')
        )
            ->leftJoin('sales', 'sales.id', '=', 'sales_items.sale_id')
            ->leftJoin('trial_class_options', 'trial_class_options.id', '=', 'sales_items.item_id')
            ->leftJoin('trial_classes', 'trial_classes.id', '=', 'trial_class_options.TrialID')
            ->leftJoin('class', 'class.classid', '=', 'trial_class_options.ClassID')
            ->groupBy(['title', 'name'])
            ->where([
                'sales.Status' => 'completed',
                'sales_items.category' => 'Trial'
            ])
            ->whereBetween('sales.created_at', [$date_from, $date_to])
            ->get();


        return $report;
    }
}
