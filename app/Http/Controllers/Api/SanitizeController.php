<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SanitizeController
{
    //

    public function sanitize_string($string) {
        return filter_var($string, FILTER_SANITIZE_STRING);
    }

    public function sanitize_email($string) {
        return filter_var($string, FILTER_SANITIZE_EMAIL);
    }

    public function sanitize_website($string) {
        return filter_var($string, FILTER_SANITIZE_URL);
    }

    public function sanitize_number($string) {
        return filter_var($string, FILTER_SANITIZE_NUMBER_INT);
    }

    public function sanitize_float($string) {
        return filter_var($string, FILTER_SANITIZE_NUMBER_FLOAT);
    }
}
