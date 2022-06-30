<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $table = 'class';

    public $timestamps = false;

    protected $casts = [
        'categories' => 'array'
    ];

    protected $primaryKey = 'classid';
}
