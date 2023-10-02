<?php

namespace App\Http\Controllers\Api;

use App\Venue;
use App\Staff;
use App\Lesson;
use App\Enroll;
use App\Weekday;
use App\Schedule;
use App\Daterange;
use App\User_meta;
use App\Attendance;
use App\Other_product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;


class ScheduleController extends Controller
{


    public function get_schedule(Request $request)
    {
        // return $request->filter;
        $start = $request->start . ' 00:00:00';
        $end = $request->end . ' 23:59:59';
        $drid = $request->date_range;
        return $this->schedule($start, $end, $drid);
    }

    public function get_date_range($id)
    {
        return $this->date_ranges($id);
    }

    public function get_schedule_details($id)
    {
        return $this->schedule_details($id);
    }

    public function enrollment_schedule(Request $request)
    {
        return $this->get_enrollment_schedule($request->per_page);
    }

    public function enrollment_schedule_filter($search, Request $request)
    {
        return $this->get_enrollment_schedule_filter($search, $request->per_page);
    }

    public function setting_details()
    {
        return $this->get_settings_details();
    }

    public function other_setting_details()
    {
        return $this->other_get_settings_details();
    }

    public function view_schedule($id)
    {
        return Schedule::find($id);
    }

    public function delete_schedule($id)
    {
        $this->view_schedule($id)->delete();
    }

    public function save_schedule(Request $request)
    {
        if ($request->form['scheduleid'] > 0) {
            $this->update_schedule($request->form);
        } else {
            $this->store_schedule($request->form);
        }
    }

    public function delete_student_schedule(Request $request)
    {
        $this->remove_student_enrollment($request->form['id']);
        $this->remove_student_attendance($request->form['scheduleid'], $request->form['cid']);
    }

    private function schedule($start, $end, $drid)
    {
        $datas = Schedule::select(
            'class.classname AS name',
            DB::raw('CONCAT(attendance.attendancedate, " ", schedule.scheduletimestart) AS start'),
            DB::raw('CONCAT(attendance.attendancedate, " ", schedule.scheduletimeend) AS end2'),
            'schedule.schedulestudio AS studio',
            'schedule.scheduleid AS schedule_id'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('attendance', 'attendance.scheduleid', '=', 'schedule.scheduleid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->where('schedule.drid', $drid)
            ->whereBetween('attendance.attendancedate', [$start, $end])
            ->distinct()
            ->get()->transform(function ($schedule) {
                switch ($schedule->studio) {
                    case 1:
                        $schedule->color = 'blue';
                    case 2:
                        $schedule->color = 'green';
                    case 3:
                        $schedule->color = 'orange';
                    case 4:
                        $schedule->color = 'red';
                }

                return $schedule;
            });


        return $datas;
    }

    private function date_ranges($id)
    {
        return Schedule::select('schedule.drid AS value', 'dateranges.daterangename AS text')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->where('schedule.vid', $id)
            ->orderBy('schedule.drid', 'desc')
            ->distinct()
            ->get();
    }

    public function schedule_details($id)
    {
        $data['details'] = Schedule::select(
            'schedule.scheduleid AS id',
            'class.classname AS name',
            'schedule.scheduletimestart AS start',
            'schedule.scheduletimeend AS end',
            'schedule.schedulestudentlimit AS limit'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->where('schedule.scheduleid', $id)
            ->first();
        $data['students'] = Enroll::select('enroll.cid', DB::raw('CONCAT(children.firstname, " ", children.lastname) AS name'))
            ->leftJoin('children', 'children.cid', '=', 'enroll.cid')
            ->where('enroll.scheduleid', $id)
            ->distinct()
            ->get();

        return $data;
    }

    private function get_enrollment_schedule($per_page)
    {
        $teacher = User_meta::select('meta_value AS id')->where(['meta_key' => '_teacher', 'user_id' => auth('api')->user()->id])->first();
        $schedule =  Schedule::select(
            'schedule.scheduleid AS id',
            'class.classname AS lesson',
            'staff.staffname AS teacher',
            'dateranges.daterangename AS term',
            'weekdays.weekname AS day',
            'venue.venuename AS location',
            'schedule.scheduletimestart AS start_time',
            'schedule.scheduletimeend AS end_time',
            'dateranges.daterangefrom AS date_start',
            'dateranges.daterangeto AS date_end',
            'weekdays.weekcount AS week_id',
            'schedule.scheduleduration AS duration',
            DB::raw('COUNT(enroll.cid) AS total_students'),
            DB::raw('false AS selected')
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
            ->where('dateranges.daterangeclasses', '<>', 'Finished')
            ->groupBy('id', 'lesson', 'teacher', 'term', 'day', 'location', 'start_time', 'end_time', 'date_start', 'date_end', 'week_id');


        if ($teacher) {
            $schedule->where('schedule.sid', $teacher->id);
        }

        return $schedule->paginate($per_page);
    }

    private function get_enrollment_schedule_filter($filter, $per_page)
    {
        $teacher = User_meta::select('meta_value AS id')->where(['meta_key' => '_teacher', 'user_id' => auth('api')->user()->id])->first();
        $schedule = Schedule::select(
            'schedule.scheduleid AS id',
            'class.classname AS lesson',
            'staff.staffname AS teacher',
            'dateranges.daterangename AS term',
            'weekdays.weekname AS day',
            'venue.venuename AS location',
            'schedule.scheduletimestart AS start_time',
            'schedule.scheduletimeend AS end_time',
            'dateranges.daterangefrom AS date_start',
            'dateranges.daterangeto AS date_end',
            'weekdays.weekcount AS week_id',
            'schedule.scheduleduration AS duration',
            DB::raw('COUNT(enroll.cid) AS total_students'),
            DB::raw('false AS selected')
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('enroll', 'enroll.scheduleid', '=', 'schedule.scheduleid')
            ->where('dateranges.daterangeclasses', '<>', 'Finished')
            ->where('class.classname', 'like', '%' . $filter . '%')
            ->groupBy('id', 'lesson', 'teacher', 'term', 'day', 'location', 'start_time', 'end_time', 'date_start', 'date_end', 'week_id');


        if ($teacher) {
            $schedule->where('schedule.sid', $teacher->id);
        }

        return $schedule->paginate($per_page);
    }

    private function get_settings_details()
    {
        $lessons = Lesson::select('classid AS classid', 'classname AS classname')->where('isVisible', 1)->whereNotIn('classid', [135, 136, 137, 138])->get();
        $others = Other_product::select('ProductID AS classid', 'ProductName AS classname')->get();
        $merged = collect($lessons)->merge($others);

        $data['date_ranges'] = Daterange::orderBy('drid', 'DESC')->take(25)->get();
        $data['locations'] = Venue::whereNotIn('vid', [20])->get();
        $data['teachers'] = Staff::get();
        $data['lessons'] = $merged->toarray();
        $data['weekdays'] = Weekday::get();

        return $data;
    }

    private function other_get_settings_details()
    {
        $data['date_ranges'] = Daterange::where('daterangeclasses', '<>', 'Finished')->get();
        $data['locations'] = Venue::whereNotIn('vid', [20])->get();
        $data['teachers'] = Staff::get();
        $data['lessons'] = Other_product::get();
        $data['weekdays'] = Weekday::get();

        return $data;
    }

    private function store_schedule($form)
    {
        $data = new Schedule();
        $data->drid = $form['drid'];
        $data->vid = $form['vid'];
        $data->weekid = $form['weekid'];
        $data->scheduletimestart = $form['scheduletimestart'];
        $data->scheduletimeend = $form['scheduletimeend'];
        $data->scheduleduration = $this->getDuration($form['scheduletimestart'], $form['scheduletimeend']) . ' min';
        $data->sid = $form['sid'];
        $data->schedulestudio = $form['schedulestudio'];
        $data->classid = $form['classid'];
        $data->schedulestudentlimit = $form['schedulestudentlimit'];
        $data->schedulenotes = $form['schedulenotes'];
        $data->save();
    }

    private function update_schedule($form)
    {
        $data = Schedule::find($form['scheduleid']);
        $data->drid = $form['drid'];
        $data->vid = $form['vid'];
        $data->weekid = $form['weekid'];
        $data->scheduletimestart = $form['scheduletimestart'];
        $data->scheduletimeend = $form['scheduletimeend'];
        $data->scheduleduration = $this->getDuration($form['scheduletimestart'], $form['scheduletimeend']) . ' min';
        $data->sid = $form['sid'];
        $data->schedulestudio = $form['schedulestudio'];
        $data->classid = $form['classid'];
        $data->schedulestudentlimit = $form['schedulestudentlimit'];
        $data->schedulenotes = $form['schedulenotes'];
        $data->save();
    }

    private function remove_student_enrollment($id)
    {
        Enroll::find($id)->delete();
    }

    private function remove_student_attendance($scheduleid, $cid)
    {
        Attendance::where(['scheduleid' => $scheduleid, 'cid' => $cid])->delete();
    }

    protected function getDuration($startTime, $endTime)
    {
        $start = strtotime($startTime);
        $end = strtotime($endTime);
        if ($end < $start) {
            $end += 86400;
        }
        return (($end - $start) / 3600) * 60;
    }
}
