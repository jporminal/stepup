<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attendancenote extends Model
{
    protected $table = 'attendancenote';

    protected $fillable = ['scheduleid', 'attendancedate', 'notes'];

    protected $primaryKey = 'attendancenoteID';

    public $timestamps = false;
}
