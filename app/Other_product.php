<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Other_product extends Model
{
    protected $table = 'other_products';

    protected $primaryKey = 'ProductID';

    public $timestamps = false;
}
