<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $table = 'products';

    public $timestamps = false;

    protected $casts = [
        'catids' => 'array'
    ];

    protected $primaryKey = 'ProductID';
}
