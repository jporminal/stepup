<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    protected $table = 'staff';

    public $timestamps = false;

    protected $primaryKey = 'sid';
}
