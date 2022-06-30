<?php

namespace App\Http\Controllers\Api;

use App\Staff;
use App\Lesson;
use App\Enroll;
use App\Schedule;
use App\Daterange;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function get_date_ranges()
    {
        return Daterange::select('drid AS id', 'daterangename AS name')->where('daterangeclasses', '<>', 'Finished')->get();
    }

    public function get_lessons($drid)
    {
        return Schedule::select(
            'schedule.classid AS id',
            'class.classname AS name'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->where('schedule.drid', $drid)
            ->distinct()
            ->get();
    }

    public function get_teachers($drid, $classid)
    {
        return Schedule::select(
            'schedule.sid AS id',
            'staff.staffname AS name'
        )
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->where(['schedule.drid' => $drid, 'schedule.classid' => $classid])
            ->distinct()
            ->get();
    }

    public function filter_email(Request $request)
    {
        $data = Enroll::select('mother.motheremailaddress')
            ->leftJoin('children', 'children.cid', '=', 'enroll.cid')
            ->leftJoin('mother', 'mother.mid', '=', 'children.mid')
            ->leftJoin('schedule', 'schedule.scheduleid', '=', 'enroll.scheduleid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->leftJoin('verifications', 'verifications.mid', '=', 'mother.mid')
            ->where('verifications.verificationStatus', 2);

        if ($request->form['date_range'] > 0) {
            $data->where('dateranges.drid', $request->form['date_range']);
        }

        if ($request->form['staff_id'] > 0) {
            $data->where('staff.sid', $request->form['staff_id']);
        }

        if ($request->form['class_id'] > 0) {
            $data->where('class.classid', $request->form['class_id']);
        }

        return $data->distinct()->pluck('mother.motheremailaddress');
    }
}
