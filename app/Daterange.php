<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Daterange extends Model
{
    protected $table = 'dateranges';

    protected $primaryKey = 'drid';

    public $timestamps = false;
}
