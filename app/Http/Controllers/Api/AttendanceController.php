<?php

namespace App\Http\Controllers\Api;

use App\Attendance;
use App\Attendancenote;
use App\Enroll;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Api\ScheduleController;
use App\Http\Controllers\Api\CheckoutController;
use App\Schedule;

class AttendanceController extends Controller
{
    public $date_range;
    public $schedule;

    public function __construct(CheckoutController $date_range, ScheduleController $schedule)
    {
        $this->date_range = $date_range;
        $this->schedule = $schedule;
    }

    public function get_attendance_details(Request $request)
    {
        $items = $request->items;

        $date_ranges = $this->date_ranges($items['date_start'], $items['date_end'], $items['week_id']);
        $schedule = $this->schedule->schedule_details(($items['id']));

        return ['schedule' => $schedule, 'date_ranges' => $date_ranges];
    }

    public function manage_attendance(Request $request)
    {
        $schedule_id = $request->form['schedule_id'];
        $date = $request->form['date'];
        $students = $request->form['students'];
        $notes = $request->form['notes'];
        $this->attendance($schedule_id, $date, $students);
        $this->attendance_notes($schedule_id, $date, $notes);
    }

    public function get_students($schedule_id, $date)
    {

        $children =  Attendance::select('children.cid AS cid', DB::raw('CONCAT(children.firstname, " ", children.lastname) AS name'), 'attendance.attendancestatus AS status')
            ->leftJoin('children', 'children.cid', '=', 'attendance.cid')
            ->where([
                'scheduleid' => $schedule_id,
                'attendancedate' => $date
            ])->get();

        foreach ($children as $child) {
            if ($child->status == 1) {
                $child->status = 1;
            } else {
                $child->status = 0;
            }
        }

        $notes = Attendancenote::select('notes')->where(['scheduleid' => $schedule_id, 'attendancedate' => $date])->first();

        return ['children' => $children, 'notes' => $notes];
    }

    public function attendance_download($id)
    {
        $schedule = Schedule::select(
            'schedule.scheduleid AS id',
            'class.classname AS lesson',
            'staff.staffname AS teacher',
            DB::raw('CONCAT(weekdays.weekname, " - (", schedule.scheduletimestart, " - ", schedule.scheduletimeend, ")") AS day_time'),
            'weekdays.weekcount AS week_id',
            'dateranges.daterangefrom AS date_start',
            'dateranges.daterangeto AS date_end',
            'venue.venuename AS location'
        )
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->where('dateranges.daterangeclasses', '<>', 'Finished')
            ->where('staff.sid', $id);

        $data = $schedule->get()->transform(function ($schedule) {
            $schedule->students = Enroll::select(
                'enroll.cid AS id',
                DB::raw('CONCAT(children.firstname, " ", children.lastname) AS student'),
                DB::raw('CONCAT(mother.motherfirstname, " ", mother.motherlastname) AS parent'),
                'mother.motheremailaddress AS email',
                'class.classname AS lesson'
            )
                ->leftJoin('children', 'children.cid', '=', 'enroll.cid')
                ->leftJoin('mother', 'mother.mid', '=', 'children.mid')
                ->leftJoin('schedule', 'schedule.scheduleid', '=', 'enroll.scheduleid')
                ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
                ->where('enroll.scheduleid', $schedule->id)
                ->get()->transform(function ($student) use ($schedule) {
                    $student->attendance = Attendance::select('attendancedate', 'attendancestatus')->where(['cid' => $student->id, 'scheduleid' => $schedule->id])->distinct()->get();
                    return $student;
                });

            $schedule->dates = $this->date_ranges($schedule->date_start, $schedule->date_end, $schedule->week_id);

            return $schedule;
        });

        return $data;
    }

    private function attendance_notes($schedule_id, $date, $notes)
    {
        Attendancenote::updateOrCreate(
            ['scheduleid' => $schedule_id, 'attendancedate' => $date],
            ['notes' => $notes]
        );
    }

    private function date_ranges($date_start, $date_end, $week_id)
    {
        $dates = $this->date_range->dateRange($date_start, $date_end);

        $weeknames = array_filter((array) $dates, function ($date) use ($week_id) {
            return $date->format("N") === strval($week_id);
        });

        $attendance_dates = array();

        foreach ($weeknames as $date) {
            array_push($attendance_dates, $date->format("Y-m-d"));
        }

        return $attendance_dates;
    }

    private function attendance($schedule_id, $date, $students)
    {
        foreach ($students as $student) {
            Attendance::where([
                'scheduleid' => $schedule_id,
                'cid' => $student['cid'],
                'attendancedate' => $date
            ])->update([
                'attendancestatus' => $student['status'] ? 1 : 2,
                'attendancedetails' => 'Attended'
            ]);
        }
    }
}
