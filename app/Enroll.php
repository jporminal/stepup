<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Enroll extends Model
{
    protected $table = 'enroll';

    protected $primaryKey = 'enrollid';

    public $timestamps = false;
}
