<?php

namespace App\Http\Controllers\Api;

use DateTime;
use App\Sale;
use App\Enroll;
use App\Mother;
use DatePeriod;
use DateInterval;
use App\Sale_item;
use App\Attendance;
use App\Service_price;
use App\Product_option;
use App\Sale_item_service_price;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Events\EventReceipt;

class CheckoutController extends Controller
{
    public function checkout(Request $request)
    {
        $customer = $request->customer;
        $products = $request->products;
        $total = $request->total;

        $sale = $this->sale($customer, $total);
        $this->sale_item($customer, $products, $sale->id);

        return ['last_id' => $sale->id, 'telr' => $this->telr('STEPUP_DASDDKLAS' . $sale->id, $total['total'], $customer, $sale->id)];
    }

    public function update_checkout(Request $request)

    {
        // return $request->all();
        $last_id = $request->last_id;
        $customer = $request->customer;
        $cart_id = $request->cart_id;
        $products = $request->products;
        $total = $request->total;

        $this->update_sale($last_id, 'completed');
        foreach ($products as $product) {
            $this->process($product);
        }
        if ($total['discount'] > 0) {
            $this->update_credit($customer['mid'], $total['discount']);
        }
        event(new EventReceipt($request->products, $request->total, $request->last_id, $request->customer));
        // $this->update_telr($cart_id);
    }

    public function cancelled_transaction($id)
    {
        $this->update_sale($id, 'cancelled');
    }

    private function sale($customer, $total)
    {
        $data = new Sale();
        $data->user_id = 3;
        $data->customer_id = $customer['mid'];
        $data->payment_type = 'telr';
        $data->amount_excl = $total['subtotal'];
        $data->discount = $total['discount'];
        $data->vat = $total['tax'];
        $data->amount_incl = $total['total'];
        $data->notes = $customer['notes'];
        $data->Status = 'onprocess';
        $data->Category = 'All';
        $data->credit_card = $total['total'];
        $data->save();

        return $data;
    }

    private function sale_item($customer, $products, $sale_id)
    {
        foreach ($products as $product) {
            $data = new Sale_item();
            $data->user_id = 3;
            $data->sale_id = $sale_id;
            $data->item_id = $product['product_option']['id'];
            $data->student_id = $product['product_option']['cid']['id'];
            $data->price = $product['product_option']['price'];
            $data->quantity = $product['product_option']['quantity'];
            $data->discount = $product['product_option']['discount'];
            $data->VAT = $product['product_option']['vat'];
            $data->total_price = $product['product_option']['total_incl'];
            $data->notes = $customer['notes'];
            $data->isProduct = $product['product_category'] == 'Product' ? 1 : 0;
            $data->category = $product['product_category'];
            $data->save();

            if ($product['product_option']['selected_id'] > 0) {
                $this->service_prices($data->id, $product['product_option']['id'], $product['product_id'], $product['product_option']['selected_id']);
            }
        }
    }

    private function telr($id, $amount, $customer, $notes)
    {
        $telrManager = new \TelrGateway\TelrManager();

        $billingParams = [
            'first_name' => $customer['first_name'],
            'sur_name' => $customer['family_name'],
            'address_1' => $customer['street'],
            'address_2' => '',
            'city' => $customer['town'],
            'region' => $customer['country'],
            'zip' => '00000',
            'country' => 'AE',
            'email' => $customer['email'],
        ];

        return $telrManager->pay($id, $amount, $notes, $billingParams);
    }

    private function update_sale($id, $status)
    {
        $data = Sale::find($id);
        if( $data ){
            $data->Status = $status;
            $data->save();
        }

    }

    private function update_credit($mid, $total)
    {
        Mother::where('mid', $mid)->decrement('credit', $total);
    }

    private function process($product)
    {

        switch ($product['type']) {
            case 'Product':
                $quantity = $product['product_option']['quantity'];
                $product = Product_option::select('quantity')->where('id', $product['product_option']['id']);
                $product->decrement('quantity', $quantity);
                break;

            case 'Motor City':
                $is_exist = $this->enroll_student($product);
                $this->save_attendance($product, $is_exist);
                break;
            case 'Foremarke':
                $is_exist = $this->enroll_student($product);
                $this->save_attendance($product, $is_exist);
                break;
            case 'Akoya':
                $is_exist = $this->enroll_student($product);
                $this->save_attendance($product, $is_exist);
                break;
            case 'Camps':
                $this->service_price($product);
                $is_exist = $this->enroll_student($product);
                $this->save_attendance($product, $is_exist);
                break;
            case 'Fitness':
                $this->service_price($product);
                break;
            case 'Others':
                $this->service_price($product);
                $is_exist = $this->enroll_student($product);
                $this->save_attendance($product, $is_exist);
                break;
            case 'Urdang':
                $this->service_price($product);
                $is_exist = $this->enroll_student($product);
                $this->save_attendance($product, $is_exist);
                break;
            case 'SVS':
                $is_exist = $this->enroll_student($product);
                $this->save_attendance($product, $is_exist);
                break;
            case 'Arcadia':
                $is_exist = $this->enroll_student($product);
                $this->save_attendance($product, $is_exist);
                break;
        }
    }

    public function enroll_student($product)
    {
        $date_today = new DateTime();

        $is_exist = Enroll::where(['scheduleid' => $product['product_option']['id'], 'cid' => $product['product_option']['cid']['id']])->first();

        if (!$is_exist) {
            $data = new Enroll();
            $data->scheduleid = $product['product_option']['id'];
            $data->cid = $product['product_option']['cid']['id'];
            $data->enrollpermanent = 1;
            $data->enrollstartdate = $date_today;
            $data->status = 1;
            $data->save();
        }
        return $is_exist;
    }

    private function service_price($product)
    {
        $service = Service_price::where('id', $product['product_option']['option_id']);
        $service->decrement('quantity', $product['product_option']['quantity']);
    }

    public function save_attendance($product, $is_exist)
    {
        if (!$is_exist) {
            $dates = $this->dateRange($product['product_option']['date_start'], $product['product_option']['date_end']);

            $weeknames = array_filter((array) $dates, function ($date) use ($product) {
                return $date->format("N") === strval($product['product_option']['week_id']);
            });

            foreach ($weeknames as $date) {
                $weekname = $date->format("Y-m-d");
                $data = new Attendance();
                $data->scheduleid = $product['product_option']['id'];
                $data->cid = $product['product_option']['cid']['id'];
                $data->attendancedate = $weekname;
                $data->attendancedatetrial = '2001-01-01';
                $data->attendancestatus = 0;
                $data->attendancedetails = '';
                $data->holidays = 0;
                $data->save();
            }
        }
    }

    public function dateRange($begin, $end, $interval = null)
    {
        $begin = new DateTime($begin);
        $end = new DateTime($end);

        $end = $end->modify('+1 day');
        $interval = new DateInterval($interval ? $interval : 'P1D');

        return iterator_to_array(new DatePeriod($begin, $interval, $end));
    }

    private function service_prices($sale_item_id, $schedule_id, $class_id, $serviceprice_id)
    {
        $data = new Sale_item_service_price();
        $data->sale_item_id = $sale_item_id;
        $data->schedule_id = $schedule_id;
        $data->class_id = $class_id;
        $data->serviceprice_id = $serviceprice_id;
        $data->save();
    }

    private function update_telr($cart_id)
    {
        $telrManager = new \TelrGateway\TelrManager();
        $telrManager->handleTransactionResponse($cart_id);
    }
}
