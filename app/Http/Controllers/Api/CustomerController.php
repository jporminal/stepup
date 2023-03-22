<?php

namespace App\Http\Controllers\Api;

use App\Child;
use App\Mother;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\CheckoutController;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    public $enroll;

    public function __construct(CheckoutController $enroll)
    {
        $this->enroll = $enroll;
    }

    public function get_student(Request $request)
    {
        return $this->students($request->per_page);
    }

    public function get_student_filter($search, Request $request)
    {
        return $this->student_filter($search, $request->per_page);
    }

    public function get_id(Request $request)
    {
        $firstname = $request->firstname;
        $lastname = $request->lastname;

        return $this->get_student_id($firstname, $lastname);
    }

    public function enroll_student(Request $request)
    {
        $schedules = $request->form;
        foreach ($schedules as $schedule) {
            $is_exist = $this->enroll->enroll_student($schedule);
            $this->enroll->save_attendance($schedule, $is_exist);
        }
    }

    public function get_parent_id(Request $request)
    {
        return $this->parent_id($request->email);
    }

    public function get_parent(Request $request)
    {
        return $this->parent($request->per_page);
    }

    public function get_parent_filter(Request $request)
    {
        return $this->parent_filter($request->filter, $request->per_page);
    }

    public function get_child($id)
    {
        return Child::where('mid', $id)->get();
    }

    private function students($per_page)
    {
    

        return Child::select(
            'children.cid',
            'children.firstname AS firstname',
            'children.lastname AS lastname',
            'children.dateofbirth AS dateofbirth',
            'children.nationality AS nationality',
            'mother.motherfirstname AS motherfirstname',
            'mother.motherlastname AS motherlastname',
            DB::raw('CONCAT(children.firstname, " ", children.lastname) AS fullname')
        )
            ->leftJoin('verifications', 'verifications.mid', '=', 'children.mid')
            ->leftJoin('mother', 'children.mid', '=', 'mother.mid')
            ->where('children.firstname', '<>', '')
            ->where('verifications.verificationStatus', 2)
            ->orderBy('fullname')
            ->distinct()
            ->paginate($per_page);
    }

    private function student_filter($filter, $per_page)
    {

     //  dd($filter);



        return Child::select(
            'children.cid',
            'children.firstname AS firstname',
            'children.lastname AS lastname',
            'children.dateofbirth AS dateofbirth',
            'children.nationality AS nationality',
            'mother.motherfirstname AS motherfirstname',
            'mother.motherlastname AS motherlastname',
            DB::raw('CONCAT(children.firstname, " ", children.lastname) AS fullname')
        )
            ->leftJoin('verifications', 'verifications.mid', '=', 'children.mid')
            ->leftJoin('mother', 'children.mid', '=', 'mother.mid')
            ->whereRaw("CONCAT(children.firstname, ' ', children.lastname) like '%{$filter}%'")
            //->where('children.firstname', 'LIKE', '%' . $filter . '%')
            //->where('children.lastname', 'LIKE', '%' . $filter . '%')
            ->where('children.firstname', '<>', '')
            ->where('verifications.verificationStatus', 2)
            ->orderBy('fullname')
           // ->distinct()
            ->paginate($per_page);
    }

    private function get_student_id($firstname, $lastname)
    {
        return Child::leftJoin('verifications', 'verifications.mid', '=', 'children.mid')
            ->where('children.firstname', 'LIKE', '%' . $firstname . '%')
            ->where('children.lastname', 'LIKE', '%' . $lastname . '%')
            ->where('verifications.verificationStatus', 2)
            ->first();
    }

    private function parent($per_page)
    {
        return Mother::select(
            'mother.motherfirstname AS first_name',
            'mother.motherlastname AS family_name',
            'mother.motherhomenumber AS contact',
            'mother.motheremailaddress AS email'
        )
            ->leftJoin('verifications', 'verifications.mid', '=', 'mother.mid')
            ->where('verifications.verificationStatus', 2)
            ->where('mother.motherfirstname', '<>', '')
            ->distinct()
            ->paginate($per_page);
    }

    private function parent_filter($filter, $per_page)
    {
        return Mother::select(
            'mother.motherfirstname AS first_name',
            'mother.motherlastname AS family_name',
            'mother.motherhomenumber AS contact',
            'mother.motheremailaddress AS email'
        )
            ->leftJoin('verifications', 'verifications.mid', '=', 'mother.mid')
            ->where('mother.motherfirstname', 'LIKE', '%' . $filter . '%')
            ->orWhere('mother.motherlastname', 'LIKE', '%' . $filter . '%')
            ->where('verifications.verificationStatus', 2)
            ->where('mother.motherfirstname', '<>', '')
            ->distinct()
            ->paginate($per_page);
    }

    private function parent_id($email)
    {
        return Mother::leftJoin('verifications', 'verifications.mid', '=', 'mother.mid')
            ->where('mother.motheremailaddress', 'LIKE', '%' . $email . '%')
            ->where('verifications.verificationStatus', 2)
            ->first();
    }
}
