<?php

namespace App\Http\Controllers\Api;

use App\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function all_products()
    {
        return Product::select(
            'products.ProductID as id',
            'products.ProductName as product'
        )
            ->whereNotIn('ProductID', [71, 72, 73, 74, 76, 79, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97])
            ->orderBy('product')
            ->get();
    }
}
