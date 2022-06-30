<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Child extends Model
{
    protected $table = 'children';

    protected $primaryKey = 'cid';

    public $timestamps = false;
}
