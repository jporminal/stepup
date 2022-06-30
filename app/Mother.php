<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mother extends Model
{
    protected $table = 'mother';

    protected $primaryKey = 'mid';

    public $timestamps = false;
}
