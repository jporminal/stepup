<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Carts
Route::post('FILTER-CART-EMAIL', 'Api\\FormController@filter_mother');

// Auth Controller
Route::post('CHECK-EMAIL', 'Api\\AuthController@check_email');
Route::post('LOGIN', 'Api\\AuthController@login');
Route::post('REGISTER', 'Api\\AuthController@register');
Route::post('SEND-TOKEN', 'Api\\FormController@send_token');
Route::post('CHANGE-PASSWORD', 'Api\\FormController@change_password');

// Form Controller
Route::post('/ENROLLMENT', 'Api\\FormController@save_form');

// Shop Controller
Route::get('PRODUCTS', 'Api\\ShopController@check_shop');
Route::get('PRODUCT-FILTER/{id}', 'Api\\ShopController@product_filter');
Route::get('PRODUCT/{id}', 'Api\\ShopController@item');

Route::get('WINTER-CAMPS', 'Api\\ShopController@multi_camps');
Route::get('WINTER-MULTI-SKILLS/{id}', 'Api\\ShopController@multi_skill');
Route::get('WINTER-MULTI-SKILLS-OPTION/{service_id}/{price_id}', 'Api\\ShopController@multi_skill_prices');
Route::get('WINTER-WORKSHOPS/{id}', 'Api\\ShopController@workshop');
Route::post('MULTI-WORKSHOP', 'Api\\ShopController@workshop_selected');

// motor city
Route::get('MOTOR-CITY', 'Api\\ShopController@check_motor_city');
Route::get('MOTOR-CITY-FILTER/{id}', 'Api\\ShopController@motor_city_filter');
Route::get('MOTOR-CITY/{id}', 'Api\\ShopController@motor_city');

// adult classes 09022021
Route::post('MOTOR-CITY-ADULT-CLASSES', 'Api\\ShopController@check_adult_motor_city');
Route::post('MOTOR-CITY-ADULT', 'Api\\ShopController@adult_motor_city');

// camps
Route::get('CAMPS', 'Api\\ShopController@check_camp');
Route::get('CAMP/{id}', 'Api\\ShopController@camp');

// urdangs
Route::get('URDANGS', 'Api\\ShopController@check_urdang');
Route::get('URDANG/{id}', 'Api\\ShopController@urdang');

// foremarke
Route::get('FOREMARKES', 'Api\\ShopController@check_foremarke');
Route::get('FOREMARKE/{id}', 'Api\\ShopController@foremarke');

// akoya
Route::get('AKOYAS', 'Api\\ShopController@check_akoya');
Route::get('AKOYA/{id}', 'Api\\ShopController@akoya');

// arcadia
Route::get('ARCADIAS', 'Api\\ShopController@check_arcadia');
Route::get('ARCADIA/{id}', 'Api\\ShopController@arcadia');

// image controller
Route::post('STORE-MULTIPLE-IMAGES', 'Api\\ImageController@store');

// checkout
Route::post('CHECKOUT', 'Api\\CheckoutController@checkout');
Route::post('UPDATE-CHECKOUT', 'Api\\CheckoutController@update_checkout');
Route::post('CANCELLED-TRANSACTION/{id}', 'Api\\CheckoutController@cancelled_transaction');

// check cart quantity
Route::post('CART-CHECK-QUANTITY', 'Api\ShopController@check_quantity');

// Settings controller
Route::get('SHOP-SETUP', 'Api\\SetupController@store_drid');

Route::post('CONTACT-US', 'Api\\SetupController@contactus');

Route::middleware('auth:api')->group(function () {
    // Auth Controller
    Route::get('CURRENT-USER', 'Api\\AuthController@current_user');
    Route::post('LOGOUT', 'Api\\AuthController@logout');

    // Profile Controller
    Route::post('UPDATE-PROFILE', 'Api\\ProfileController@update_profile');

    // Form Controller
    Route::get('PARENT', 'Api\\FormController@get_parent');
    Route::get('CHILDREN/{id}', 'Api\\FormController@get_child');
    Route::post('UPDATE-CHILD', 'Api\\FormController@update_student');
    Route::post('SAVE-CHILD', 'Api\\FormController@add_new_student');
    Route::get('GET-ENROLLMENT/{id}', 'Api\\FormController@get_schedules');
    Route::post('UPDATE-PARENT-DETAILS', 'Api\\FormController@update_mother_details');

    // Report Controller
    Route::get('ORDERS', 'Api\\ReportController@get_orders');
    Route::get('MY-ORDERS', 'Api\\ReportController@get_my_orders');
    Route::get('VIEW-ORDER/{id}', 'Api\\ReportController@get_receipt');
    Route::post('CLASS-INFORMATION', 'Api\\ReportController@get_class_information');
    Route::post('NUMBER-OF-STUDENTS', 'Api\\ReportController@get_number_of_students');
    Route::post('PAYMENT-BY-SCHEDULES', 'Api\\ReportController@get_payment_by_schedules');
    Route::post('PAYMENT-BY-LESSONS', 'Api\\ReportController@get_payment_by_lessons');
    Route::post('PRODUCT-SALES', 'Api\\ReportController@get_product_sales');
    Route::get('RECEIPTS', 'Api\\ReportController@get_receipts');
    Route::get('RECEIPTS/{id}', 'Api\\ReportController@get_receipt_filters');
    Route::post('UPDATE-RECEIPT-STATUS', 'Api\\ReportController@update_receipt_status');
    Route::post('POS-PRODUCT-REPORT', 'Api\\ReportController@get_products');
    Route::post('POS-SERVICE-REPORT', 'Api\\ReportController@get_services');
    Route::post('POS-OTHER-SERVICE-REPORT', 'Api\\ReportController@get_toher_services');
    Route::post('POS-LOCATION-REPORT', 'Api\\ReportController@get_locations');

    // Schedule Controller
    Route::post('SCHEDULE', 'Api\\ScheduleController@get_schedule');
    Route::get('GET-DATERANGES/{id}', 'Api\\ScheduleController@get_date_range');
    Route::get('SCHEDULE-DETAILS/{id}', 'Api\\ScheduleController@get_schedule_details');
    Route::get('ENROLLMENT-SCHEDULE', 'Api\\ScheduleController@enrollment_schedule');
    Route::get('ENROLLMENT-SCHEDULES/{search}', 'Api\\ScheduleController@enrollment_schedule_filter');
    Route::get('SETTING-DETAILS', 'Api\\ScheduleController@setting_details');
    Route::get('OTHER-SETTING-DETAILS', 'Api\\ScheduleController@other_setting_details');
    Route::get('SCHEDULE/{id}', 'Api\\ScheduleController@view_schedule');
    Route::post('SAVE-SCHEDULE', 'Api\\ScheduleController@save_schedule');
    Route::get('DELETE-SCHEDULE/{id}', 'Api\\ScheduleController@delete_schedule');
    Route::post('REMOVE-STUDENT-LESSON', 'Api\\ScheduleController@delete_student_schedule');

    // Setup Controller
    Route::get('VENUES', 'Api\\SetupController@venue');
    Route::post('SAVE-VENUE', 'Api\\SetupController@save_venue');
    Route::get('GET-VENUES', 'Api\\SetupController@get_venues');
    Route::get('GET-VENUES/{search}', 'Api\\SetupController@get_filtered_venues');

    Route::get('STAFFS', 'Api\\SetupController@get_staffs');
    Route::get('STAFFS/{search}', 'Api\\SeMOTOR-CITY?tupController@get_staff_filter');
    Route::get('STAFF/{id}', 'Api\\SetupController@get_staff');
    Route::post('STAFFS', 'Api\\SetupController@store_staff');

    Route::get('LESSONS', 'Api\\SetupController@get_lessons');
    Route::get('LESSONS/{search}', 'Api\\SetupController@get_filtered_lessons');
    Route::get('LESSON/{id}', 'Api\\SetupController@get_filtered_lesson');
    Route::get('LESSON-CATEGORIES', 'Api\\SetupController@service_categories');
    Route::post('LESSON-SAVE', 'Api\\SetupController@save_lessons');
    Route::get('LESSON-IMAGES/{id}', 'Api\\SetupController@lesson_images');
    Route::post('DELETE-LESSON-IMAGES', 'Api\\SetupController@delete_image');
    Route::get('LESSON-PRICES/{id}', 'Api\\SetupController@lesson_prices');
    Route::post('SAVE-LESSON-PRICE', 'Api\\SetupController@save_lesson_prices');
    Route::get('LESSON-PARAMETERS/{id}', 'Api\\SetupController@lesson_parameters');
    Route::post('SAVE-LESSON-PARAMETER', 'Api\\SetupController@save_lesson_parameter');
    Route::post('DELETE-LESSON-PARAMETER', 'Api\\SetupController@delete_lesson_parameter');

    Route::get('DATE-RANGES', 'Api\\SetupController@date_ranges');
    Route::get('DATE-RANGE/{filter}', 'Api\\SetupController@filter_date_range');
    Route::post('SAVE-DATE-RANGE', 'Api\\SetupController@save_date_range');
    Route::get('UPDATE-DATE-RANGE/{id}', 'Api\\SetupController@update_date_range');

    Route::get('WEEK-DAYS', 'Api\\SetupController@get_week_days');
    Route::post('SAVE-WEEK-DAYS', 'Api\\SetupController@save_week_days');
    Route::post('SHOP-SETUP-UPDATE', 'Api\\SetupController@store_shop_update');

    // Customer Controller
    Route::get('STUDENTS', 'Api\\CustomerController@get_student');
    Route::get('STUDENTS/{search}', 'Api\\CustomerController@get_student_filter');
    Route::post('GET-STUDENT-ID', 'Api\\CustomerController@get_id');
    Route::post('ENROLL-STUDENT-BY-ID', 'Api\\CustomerController@enroll_student');
    Route::get('PARENTS', 'Api\\CustomerController@get_parent');
    Route::get('PARENTS/{search}', 'Api\\CustomerController@get_parent_filter');
    Route::post('GET-PARENT-ID', 'Api\\CustomerController@get_parent_id');
    Route::get('GET-CHILD/{id}', 'Api\\CustomerController@get_child');

    // Attendance Controller
    Route::post('MANAGE-ATTENDANCE', 'Api\\AttendanceController@get_attendance_details');
    Route::post('ATTENDANCE', 'Api\\AttendanceController@manage_attendance');
    Route::get('ATTENDANCE-STUDENTS/{schedule_id}/{date}', 'Api\\AttendanceController@get_students');
    Route::get('ATTENDANCE-DOWNLOAD/{id}', 'Api\\AttendanceController@attendance_download');

    // Product Controller
    Route::get('MY-PRODUCT-ALL', 'Api\\ProductController@all_products');

    // Email Controller
    Route::get('EMAIL-DATE-RANGES', 'Api\\EmailController@get_date_ranges');
    Route::get('EMAIL-LESSONS/{id}', 'Api\\EmailController@get_lessons');
    Route::get('EMAIL-TEACHERS/{drid}/{classid}', 'Api\\EmailController@get_teachers');
    Route::post('EMAIL-FILTER', 'Api\\EmailController@filter_email');

    // Xero Controller
    Route::get('XERO-LOGIN', 'Api\\XeroController@xero_login');
    Route::get('XERO-REQUEST-TOKEN/{code}/{state}', 'Api\\XeroController@xero_token');
    Route::post('XERO-REFRESH-TOKEN', 'Api\\XeroController@refresh_token');
    Route::post('XERO-LOAD-INVOICES', 'Api\\XeroController@xero_invoices');
    Route::post('XERO-IMPORT', 'Api\\XeroController@xero_import');
});
