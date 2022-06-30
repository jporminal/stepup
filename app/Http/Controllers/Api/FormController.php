<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Child;
use App\Mother;
use App\Father;
use App\Medical;
use App\Address;
use App\User_meta;
use App\Verification;
use App\Nonpreciption;
use App\Password_reset;
use App\Emergencycontact;
use App\Enroll;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\SanitizeController;
use Illuminate\Support\Facades\Redis;
use App\Events\EventEnrollment;

class FormController extends Controller
{
    public $sanitize;
    public $user;
    public $profile;

    public function __construct(SanitizeController $sanitize, AuthController $user, ProfileController $profile)
    {
        $this->sanitize = $sanitize;
        $this->user = $user;
        $this->profile = $profile;
    }

    public function save_form(Request $request)
    {

        $address = $request->form['address'];
        $childrens = $request->form['children'];
        $person_1 = $request->form['emergency']['person_1'];
        $person_2 = $request->form['emergency']['person_2'];
        $father = $request->form['father'];
        $medical = $request->form['medical'];
        $mother = $request->form['mother'];
        $prescription = $request->form['prescription'];

        $mom = Mother::where('motheremailaddress', $mother['email'])->first();

        if (!$mom) {
            $mommy = $this->store_mother($mother);
            $this->store_father($father, $mommy->mid);
            $this->store_address($address, $mommy->mid);
            $this->store_emergency($person_1, $person_2, $mommy->mid);

            foreach ($childrens as $children) {
                if (!empty($children['first_name']) && !empty($children['family_name'])) {
                    $child = $this->store_child($children, $mommy->mid);
                    $this->store_medical($medical, $child->cid);
                    $this->store_prescription($prescription, $child->cid);
                }
            }

            $this->verify_customer($mommy->mid);

            $is_user = User::where('email', $mommy->motheremailaddress)->first();

            if (!$is_user) {
                $inay = $this->create_user($mother);
                $this->create_user_meta($mother, $address, $inay['id'], $mommy->mid);

                event(new EventEnrollment($request->form, $inay['password']));

                return ['mom' => $mommy, 'children' => $this->filter_child($mommy->mid), 'password' => $inay['password']];
            }
        } else {
            foreach ($childrens as $children) {
                $student = Child::where('mid', $mom->mid)
                    ->where('firstname', 'like', '%' . $children['first_name'] . '%')
                    ->where('lastname', 'like', '%' . $children['family_name'] . '%')
                    ->first();

                if (!$student) {
                    if (!empty($children['first_name']) && !empty($children['family_name'])) {
                        $stud = $this->store_child($children, $mom->mid);
                        $this->store_medical($medical, $stud->cid);
                        $this->store_prescription($prescription, $stud->cid);
                    }
                }
            }

            $is_user = User::where('email', $mom->motheremailaddress)->first();
            if (!$is_user) {
                $inay = $this->create_user($mother);
                $this->create_user_meta($mother, $address, $inay['id'], $mom->mid);

                event(new EventEnrollment($request->form, $inay['password']));

                return ['mom' => $mom, 'children' => $this->filter_child($mom->mid), 'password' => $inay['password']];
            }

            event(new EventEnrollment($request->form, ''));
            return ['mom' => $mom, 'children' => $this->filter_child($mom->mid), 'password' => ''];
        }
    }

    public function get_parent(Request $request)
    {
        if (auth('api')->user()->Role == 'User') {
            $id = User_meta::where(['user_id' => auth('api')->user()->id, 'meta_key' => '_parent_id'])->first();
            $data['mom'] = Mother::find($id->meta_value);
            $data['dad'] = Father::where('mid', $id->meta_value)->first();
            $data['children'] = Child::where('mid', $id->meta_value)->paginate($request->paginate);
            return $data;
        }
    }

    public function filter_child($mid)
    {
        return Child::select('cid AS id', 'firstname')
            ->leftJoin('verifications', 'verifications.mid', '=', 'children.mid')
            ->where([
                // 'verifications.verificationStatus' => 2,
                'children.mid' => $mid
            ])
            ->get();
    }

    public function filter_mother(Request $request)
    {
        $mother = Mother::where('motheremailaddress', $request->email)->first();
        if ($mother) {
            return ['mom' => $mother, 'children' => $this->filter_child($mother->mid)];
        }
        return;
    }

    public function get_child($id)
    {
        $data['child'] = Child::find($id);
        $data['prescription'] = Nonpreciption::where('mid', $id)->first();
        $data['medical'] = Medical::where('mid', $id)->first();

        return $data;
    }

    public function update_student(Request $request)
    {
        $child = $request->form['child'];
        $medical = $request->form['medical'];
        $prescription = $request->form['prescription'];

        $this->update_child($child);
        $this->update_medical($medical);
        $this->update_prescription($prescription);
    }


    public function send_token(Request $request)
    {
        $email = $request->email;
        $verification_code = $this->random_strings(6);

        $data = new Password_reset();
        $data->email = $email;
        $data->token = $verification_code;
        $data->save();

        return $verification_code;
    }

    public function add_new_student(Request $request)
    {
        $mid = $request->form['mid'];
        $child = $request->form['child'];
        $medical = $request->form['medical'];
        $prescription = $request->form['prescription'];
        if (!empty($child['first_name']) && !empty($child['family_name'])) {
            $cid = $this->store_child($child, $mid);
            $this->store_medical($medical, $cid->cid);
            $this->store_prescription($prescription, $cid->cid);
            return 'success';
        }
    }

    public function get_schedules($id)
    {

        $data['finished'] = $this->view_schedules(['Finished'], $id);
        $data['current'] = $this->view_schedules(['Foremarke', ''], $id);
        return response()->json($data, 200, [], JSON_NUMERIC_CHECK);
    }

    public function update_mother_details(Request $request)
    {
        $this->update_mother($request->form);
    }

    private function store_mother($form)
    {
        $data = new Mother();
        $data->motherfirstname = strtolower($this->sanitize->sanitize_string($form['first_name']));
        $data->motherlastname = strtolower($this->sanitize->sanitize_string($form['family_name']));
        $data->mothernationality = strtolower($this->sanitize->sanitize_string($form['nationality']));
        $data->motherhomenumber = $this->sanitize->sanitize_number($form['home_number']);
        $data->mothermobilenumber = $form['mobile_number'];
        $data->motherworknumber = $form['work_number'];
        $data->mothercompany = strtolower($this->sanitize->sanitize_string('company'));
        $data->motheremailaddress = strtolower($this->sanitize->sanitize_email($form['email']));
        $data->save();

        return $data;
    }

    private function store_father($form, $id)
    {
        $data = new Father();
        $data->mid = $id;
        $data->fatherfirstname = strtolower($this->sanitize->sanitize_string($form['first_name']));
        $data->fatherlastname = strtolower($this->sanitize->sanitize_string($form['family_name']));
        $data->fathernationality = strtolower($this->sanitize->sanitize_string($form['nationality']));
        $data->fatherhomenumber = $this->sanitize->sanitize_number($form['home_number']);
        $data->fathermobilenumber = $form['mobile_number'];
        $data->fatherworknumber = $form['work_number'];
        $data->fathercompany = strtolower($this->sanitize->sanitize_string('company'));
        $data->fatheremailaddress = strtolower($this->sanitize->sanitize_email($form['email']));
        $data->save();
    }

    public function store_child($form, $id)
    {
        $data = new Child();
        $data->mid = $id;
        $data->firstname = strtolower($this->sanitize->sanitize_string($form['first_name']));
        $data->lastname = strtolower($this->sanitize->sanitize_string($form['family_name']));
        $data->nationality = strtolower($this->sanitize->sanitize_string($form['nationality']));
        $data->gender = strtolower($this->sanitize->sanitize_string($form['gender']));
        $data->dateofbirth = $form['dob'];
        $data->save();

        return $data;
    }

    public function store_address($form, $id)
    {
        $data = new Address();
        $data->mid = $id;
        $data->buildingname = strtolower($this->sanitize->sanitize_string($form['development']));
        $data->street = strtolower($this->sanitize->sanitize_string($form['street']));
        $data->buildvillaapt = strtolower($this->sanitize->sanitize_string($form['building']));
        $data->nearestland = strtolower($this->sanitize->sanitize_string($form['landmark']));
        $data->pobox = strtolower($this->sanitize->sanitize_string($form['POBox']));
        $data->emirate = strtolower($this->sanitize->sanitize_string($form['emirate']));
        $data->correctaddress = $form['same'];
        $data->save();
    }

    public function store_medical($form, $cid)
    {
        $data = new Medical();
        $data->mid = $cid;
        $data->allergies = $form['allergies'];
        $data->textallergies = $this->sanitize->sanitize_string($form['textallergies']);
        $data->respiratory = $form['respiratory'];
        $data->textrespiratory = $this->sanitize->sanitize_string($form['textrespiratory']);
        $data->physical = $form['physical'];
        $data->textphysical = $this->sanitize->sanitize_string($form['textphysical']);
        $data->vision = $form['vision'];
        $data->textvision = $this->sanitize->sanitize_string($form['textvision']);
        $data->hearing = $form['hearing'];
        $data->texthearing = $this->sanitize->sanitize_string($form['texthearing']);
        $data->otherhealth = $form['otherhealth'];
        $data->textotherhealth = $this->sanitize->sanitize_string($form['textotherhealth']);
        $data->save();
    }

    public function change_password(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $verification = $request->verification;

        $verify = Password_reset::where(['email' => $email, 'token' => $verification])->first();

        if ($verify) {
            $user = $this->user->filter_parent_email($email);
            $this->profile->update_password($user->id, $password);
            return ['response' => 'You have successfully change your password!', 'status' => 200];
        } else {
            return ['response' => 'Verification code does not exist', 'status' => 401];
        }
    }

    private function store_prescription($form, $cid)
    {
        $data = new Nonpreciption();
        $data->mid = $cid;
        $data->antiseptic = $form['antiseptic'];
        $data->textantiseptic = $this->sanitize->sanitize_string($form['textantiseptic']);
        $data->plasters = $form['plasters'];
        $data->textplasters = $this->sanitize->sanitize_string($form['textplasters']);
        $data->insectbite = $form['insectbite'];
        $data->textinsectbite = $this->sanitize->sanitize_string($form['textinsectbite']);
        $data->firstaid = $form['firstaid'];
        $data->textfirstaid = $this->sanitize->sanitize_string($form['textfirstaid']);
        $data->calpol = $form['calpol'];
        $data->textcalpol = $this->sanitize->sanitize_string($form['textcalpol']);
        $data->ice = $form['ice'];
        $data->textice = $this->sanitize->sanitize_string($form['textice']);
        $data->save();
    }

    private function store_emergency($emergency_1, $emergency_2, $id)
    {
        $data = new Emergencycontact();
        $data->mid = $id;
        $data->onefirstname = $emergency_1['first_name'];
        $data->onelastname = $emergency_1['family_name'];
        $data->onemobilenumber = $emergency_1['contact_1'];
        $data->oneworknumber = $emergency_1['contact_2'];
        $data->onehomenumber = $emergency_1['contact_3'];
        $data->onerelation = $emergency_1['relation'];
        $data->twofirstname = $emergency_2['first_name'];
        $data->twolastname = $emergency_2['family_name'];
        $data->twomobilenumber = $emergency_2['contact_1'];
        $data->twoworknumber = $emergency_2['contact_2'];
        $data->twohomenumber = $emergency_2['contact_3'];
        $data->tworelation = $emergency_2['relation'];
        $data->save();
    }

    public function random_strings($length_of_string)
    {
        $str_result = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        return substr(
            str_shuffle($str_result),
            0,
            $length_of_string
        );
    }

    private function create_user($form)
    {
        $password = $this->random_strings(8);
        $firstname = strtolower($this->sanitize->sanitize_string($form['first_name']));
        $firstchar = $firstname[0];
        $data = new User();
        $data->first_name = strtolower($this->sanitize->sanitize_string($form['first_name']));
        $data->last_name = strtolower($this->sanitize->sanitize_string($form['family_name']));
        $data->username = $firstchar . strtolower($this->sanitize->sanitize_string($form['family_name'])) . $this->random_strings(5);
        $data->email = strtolower($this->sanitize->sanitize_email($form['email']));
        $data->Role = 'User';
        $data->password = Hash::make($password);
        $data->save();

        return ['id' => $data->id, 'password' => $password];
    }

    private function verify_customer($mid)
    {
        $data = new Verification();
        $data->mid = $mid;
        $data->verificationStatus = 2;
        $data->save();
    }

    private function create_user_meta($mother, $address, $id, $mid)
    {
        $user_meta = array(
            '_first_name' => strtolower($this->sanitize->sanitize_string($mother['first_name'])),
            '_last_name' => strtolower($this->sanitize->sanitize_string($mother['family_name'])),
            '_thumbnail' => 'default.png',
            '_about' => '',
            '_role' => 'User',
            '_status' => 1,
            '_contact' => '',
            '_email' => strtolower($this->sanitize->sanitize_email($mother['email'])),
            '_country' => 'United Arab Emirates',
            '_town' => $address['emirate'],
            '_street' => $address['street'],
            '_apartment' => '',
            '_parent_id' => $mid,
            '_secret' => ''
        );
        foreach ($user_meta as $key => $users) {
            $meta = new User_meta();
            $meta->user_id = $id;
            $meta->meta_key = $key;
            $meta->meta_value = $users;
            $meta->save();
        }
    }

    private function update_mother($data)
    {
        $file = Mother::find($data['mid']);
        $file->motherfirstname = strtolower($this->sanitize->sanitize_string($data['motherfirstname']));
        $file->motherlastname = strtolower($this->sanitize->sanitize_string($data['motherlastname']));
        $file->motherhomenumber = strtolower($this->sanitize->sanitize_string($data['motherhomenumber']));
        $file->mothernationality = strtolower($this->sanitize->sanitize_string($data['mothernationality']));
        $file->credit = strtolower($this->sanitize->sanitize_string($data['credit']));
        $file->save();
    }

    private function update_father($data)
    {
        $file = Father::find($data['id']);
        $file->fatherfirstname = strtolower($this->sanitize->sanitize_string($data['fatherfirstname']));
        $file->fatherlastname = strtolower($this->sanitize->sanitize_string($data['fatherlastname']));
        $file->fatherhomenumber = strtolower($this->sanitize->sanitize_string($data['fatherhomenumber']));
        $file->fathernationality = strtolower($this->sanitize->sanitize_string($data['fathernationality']));
        $file->save();
    }

    private function update_child($data)
    {
        $file = Child::find($data['cid']);
        $file->firstname = strtolower($this->sanitize->sanitize_string($data['firstname']));
        $file->lastname = strtolower($this->sanitize->sanitize_string($data['lastname']));
        $file->dateofbirth = strtolower($this->sanitize->sanitize_string($data['dateofbirth']));
        $file->nationality = strtolower($this->sanitize->sanitize_string($data['nationality']));
        $file->gender = $this->sanitize->sanitize_string($data['gender']);
        $file->save();
    }

    private function update_medical($data)
    {
        $file = Medical::find($data['id']);
        $file->allergies = $data['allergies'];
        $file->textallergies = $this->sanitize->sanitize_string($data['textallergies']);
        $file->respiratory = $data['respiratory'];
        $file->textrespiratory = $this->sanitize->sanitize_string($data['textrespiratory']);
        $file->physical = $data['physical'];
        $file->textphysical = $this->sanitize->sanitize_string($data['textphysical']);
        $file->vision = $data['vision'];
        $file->textvision = $this->sanitize->sanitize_string($data['textvision']);
        $file->hearing = $data['hearing'];
        $file->texthearing = $this->sanitize->sanitize_string($data['texthearing']);
        $file->otherhealth = $data['otherhealth'];
        $file->textotherhealth = $this->sanitize->sanitize_string($data['textotherhealth']);
        $file->save();
    }

    private function update_prescription($data)
    {
        $file = Nonpreciption::find($data['id']);
        $file->antiseptic = $data['antiseptic'];
        $file->textantiseptic = $this->sanitize->sanitize_string($data['textantiseptic']);
        $file->plasters = $data['plasters'];
        $file->textplasters = $this->sanitize->sanitize_string($data['textplasters']);
        $file->insectbite = $data['insectbite'];
        $file->textinsectbite = $this->sanitize->sanitize_string($data['textinsectbite']);
        $file->firstaid = $data['firstaid'];
        $file->textfirstaid = $this->sanitize->sanitize_string($data['textfirstaid']);
        $file->calpol = $data['calpol'];
        $file->textcalpol = $this->sanitize->sanitize_string($data['textcalpol']);
        $file->ice = $data['ice'];
        $file->textice = $this->sanitize->sanitize_string($data['textice']);
        $file->save();
    }

    public function view_schedules($status, $cid)
    {
        $data = Enroll::select(
            'enroll.enrollid AS id',
            'enroll.cid AS cid',
            'enroll.scheduleid AS scheduleid',
            'class.classname AS lesson',
            'venue.venuename AS location',
            'schedule.scheduletimestart AS start_time',
            'schedule.scheduletimeend AS start_end',
            'staff.staffname AS teacher',
            'dateranges.daterangename AS term',
            'weekdays.weekname AS day'
        )
            ->leftJoin('schedule', 'schedule.scheduleid', '=', 'enroll.scheduleid')
            ->leftJoin('dateranges', 'dateranges.drid', '=', 'schedule.drid')
            ->leftJoin('weekdays', 'weekdays.weekid', '=', 'schedule.weekid')
            ->leftJoin('class', 'class.classid', '=', 'schedule.classid')
            ->leftJoin('staff', 'staff.sid', '=', 'schedule.sid')
            ->leftJoin('venue', 'venue.vid', '=', 'schedule.vid')
            ->where('enroll.cid', $cid)
            ->whereIn('dateranges.daterangeclasses', $status)
            ->orderBy('dateranges.drid', 'desc')
            ->get();

        return $data;
    }
}
