(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "parent",
  components: {
    terms: function terms() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./tcs_terms_condition */ "./resources/js/components/Components/Form/Enrollment/tcs_terms_condition.vue"));
    },
    cov: function cov() {
      return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./tcs_covid */ "./resources/js/components/Components/Form/Enrollment/tcs_covid.vue"));
    }
  },
  data: function data() {
    return {
      valid: false,
      loading: false,
      numb: 0
    };
  },
  methods: {
    enroll: function enroll() {
      var _this = this;

      this.loading = true;
      this.$store.dispatch("ENROLLMENT", {
        form: this.$store.state.Enrollments.enrollment
      }).then(function (result) {
        var form = {
          location: "Motor City",
          children: [{
            first_name: '',
            family_name: '',
            nationality: '',
            gender: "Female",
            dob: new Date().toISOString().substr(0, 10)
          }],
          mother: {
            first_name: '',
            family_name: '',
            nationality: '',
            home_number: 0,
            mobile_number: 0,
            work_number: 0,
            company: '',
            email: ''
          },
          father: {
            first_name: '',
            family_name: '',
            nationality: '',
            home_number: 0,
            mobile_number: 0,
            work_number: 0,
            company: '',
            email: ''
          },
          address: {
            development: '',
            street: '',
            building: '',
            landmark: '',
            POBox: '',
            emirate: '',
            same: true
          },
          medical: {
            allergies: false,
            textallergies: '',
            respiratory: false,
            textrespiratory: '',
            physical: false,
            textphysical: '',
            vision: false,
            textvision: '',
            hearing: false,
            texthearing: '',
            otherhealth: false,
            textotherhealth: ''
          },
          prescription: {
            antiseptic: true,
            textantiseptic: '',
            plasters: true,
            textplasters: '',
            insectbite: true,
            textinsectbite: '',
            firstaid: true,
            textfirstaid: '',
            calpol: true,
            textcalpol: '',
            ice: true,
            textice: ''
          },
          emergency: {
            person_1: {
              first_name: '',
              family_name: '',
              contact_1: '',
              contact_2: '',
              contact_3: '',
              relation: ''
            },
            person_2: {
              first_name: '',
              family_name: '',
              contact_1: '',
              contact_2: '',
              contact_3: '',
              relation: ''
            }
          }
        };
        var snackbar = {
          snackbar: true,
          vertical: true,
          timeout: 2000,
          color: "blue lighten-2",
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "Thank you for using our online enrollment"
        }; //   this.send_mail_to_parent(result.data.password);
        //   this.send_mail_to_reception();
        //   this.send_mail_sua_terms();
        //   this.send_mail_covid();

        _this.$store.commit("SNACKBAR", snackbar);

        _this.$store.commit("TERMS_CONDITIONS", false);

        _this.$store.commit("COVID", false);

        if (_this.$store.state.Carts.enrollment_form) {
          _this.$store.commit("CART_ENROLLMENT_FORM", false);

          _this.$store.commit("CART_PROCESS", false);

          _this.$store.commit("PARENT", result.data.mom);

          _this.$store.commit("CHILD", result.data.children);

          localStorage.setItem("parent", JSON.stringify(result.data.mom));
          localStorage.setItem("children", JSON.stringify(result.data.children));
          _this.loading = false;

          _this.$router.push("/checkout");
        } else {
          setTimeout(function () {
            _this.loading = false;

            _this.$store.commit("ENROLLMENT", form);

            window.location.reload();
          }, 10000);
        }
      })["catch"](function (err) {
        var snackbar = {
          snackbar: true,
          vertical: false,
          timeout: 2000,
          color: "red",
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "Sorry, We have encounter network error. Please try to reload your browser. Thank you :)"
        };

        _this.$store.commit("SNACKBAR", snackbar);
      });
    },
    terms_condition: function terms_condition() {
      this.$store.commit("TERMS_CONDITIONS_OPEN", true);
    },
    covid: function covid() {
      this.$store.commit("COVID_OPEN", true);
    },
    step: function step(e) {
      this.$store.commit("STEPS", e);
    },
    input_text: function input_text() {
      this.$store.commit("ENROLLMENT", this.$store.state.Enrollments.enrollment);
    },
    send_mail_to_parent: function send_mail_to_parent(password) {
      Email.send({
        SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
        To: this.$store.state.Enrollments.enrollment.mother.email,
        From: "info@stepup.ae",
        Subject: "Enrollment Form",
        Body: "\n            <div style=\"margin: 0; padding: 0;\">\n                <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\n                    <tr>\n                        <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                            <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                            <h1 style=\"color:#000\">StepUp Academy</h1>\n                            <h3>Enrollment Form</h3>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                            <br><br>\n                            Dear ".concat(this.$store.state.Enrollments.enrollment.mother.first_name, ",\n                            <br><br>\n                            ").concat(password ? "Thank you for using our online enrollment form. We have create your login credentials on our website. Please use your registered email address and your new password ".concat(password) : "Thank you for enrolling your child at StepUp Academy!", "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                                <tr>\n                                    <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">\n                                        &copy; StepUp Academy<br/>\n                                        <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\">\n                                        <font color=\"#000\">info@stepup.ae</font></a>\n                                    </td>\n                                    <td align=\"right\">\n                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                            <tr>\n                                                <td>\n                                                    <a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                        <img src=\"https://stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                    </a>\n                                                </td>\n                                                <td>\n                                                    <a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\">\n                                                        <img src=\"https://stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                    </a>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            ")
      });
    },
    send_mail_to_reception: function send_mail_to_reception() {
      var _this2 = this;

      this.$store.state.Enrollments.enrollment.children.forEach(function (element) {
        if (element.first_name) {
          Email.send({
            SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
            To: "info@stepup.ae",
            From: _this2.$store.state.Enrollments.enrollment.mother.email,
            Subject: "Enrollment Form - ".concat(element.first_name, " ").concat(element.family_name),
            Body: "\n                <div style=\"margin: 0; padding: 0;\">\n                    <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\n                        <tr>\n                            <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                                <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                                <h1 style=\"color:#000\">StepUp Academy</h1>\n                                <h3>Enrollment Form</h3>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                                <h4 align=\"center\"> Children Information</h4>\n                                <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n                                    <tr>\n                                        <td width=\"20%\">Name</td>\n                                        <td> ".concat(element.first_name, " ").concat(element.family_name, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Date of Birth</td>\n                                        <td> ").concat(element.dob, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Gender</td>\n                                        <td> ").concat(element.gender, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Nationality</td>\n                                        <td> ").concat(element.nationality, " </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td bgcolor=\"#fff\" style=\"padding: 0px 30px 0px 30px;\">\n                                <h4 align=\"center\"> Parent Information</h4>\n                                <h5>Mother Info</h5>\n                                <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n                                    <tr>\n                                        <td width=\"20%\">Name</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.first_name, " ").concat(_this2.$store.state.Enrollments.enrollment.mother.family_name, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Email Address</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.email, " </td>\n                                        <td>Home Number</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.home_number, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mobile Number</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.mobile_number, " </td>\n                                        <td>Work Number</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.work_number, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Company</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.company, " </td>\n                                        <td>Nationality</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.nationality, " </td>\n                                    </tr>\n                                </table>\n                                <h5>Father Info</h5>\n                                <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n                                    <tr>\n                                        <td width=\"20%\">Name</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.first_name, " ").concat(_this2.$store.state.Enrollments.enrollment.father.family_name, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Email Address</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.email, " </td>\n                                        <td>Home Number</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.home_number, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mobile Number</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.mobile_number, " </td>\n                                        <td>Work Number</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.work_number, " </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Company</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.company, " </td>\n                                        <td>Nationality</td>\n                                        <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.nationality, " </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td bgcolor=\"#fff\" style=\"padding: 0px 30px 0px 30px;\">\n                                <h4 align=\"center\"> ").concat(_this2.$store.state.Enrollments.enrollment.location, " </h4>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                                    <tr>\n                                        <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">\n                                            &copy; StepUp Academy<br/>\n                                            <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\">\n                                            <font color=\"#000\">info@stepup.ae</font></a>\n                                        </td>\n                                        <td align=\"right\">\n                                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                            <img src=\"https://stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                        </a>\n                                                    </td>\n                                                    <td>\n                                                        <a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\">\n                                                            <img src=\"https://stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                        </a>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n                ")
          });
        }
      });
    },
    send_mail_sua_terms: function send_mail_sua_terms() {
      var _this3 = this;

      this.$store.state.Enrollments.enrollment.children.forEach(function (element) {
        if (element.first_name) {
          Email.send({
            SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
            To: "info@stepup.ae",
            From: _this3.$store.state.Enrollments.enrollment.mother.email,
            Subject: "Class Terms & Conditions - ".concat(element.first_name, " ").concat(element.family_name),
            Body: "\n            <div style=\"margin: 0; padding: 0;\">\n                <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\n                    <tr>\n                        <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                            <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                            <h1 style=\"color:#000\">StepUp Academy</h1>\n                            <h3>Class Terms & Conditions</h3>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                            <h5><u>Payment and Registration Policy</u></h5>\n                            <ol>\n                                <li>A one-time registration fee of 150dhs is due at the time of registration for any class at StepUp Academy (SUA). The registration fee will become invalid if you are absent for more than 3 terms or longer.</li>\n                                <li>All trial classes must be paid for.</li>\n                                <li>Methods of payment accepted in our MotorCity branch are cash, card, or cheques made payable to StepUp Academy. Bank transfer is available upon request. It is your responsibility to provide a copy of the transfer advice slip as we cannot trace payments. Payment methods accepted vary for external venues, please check with the centre accordingly.</li>\n                                <li>If fees are not settled before the class, then SUA reserves the right to exclude that student from the class. Fees are required before or on the first day of class. Any unpaid fees will result in non-participation until the fees are settled.</li>\n                                <li>In case of a dishonored cheque, a bank fee of 100 AED for each returned cheque may apply after being assessed.</li>\n                                <li>Class space can only be guaranteed once the full fees and documentation have been completed and received.</li>\n                                <li>SUA management reserves the right to refuse re-admission into the school if there are any outstanding balances.</li>\n                                <li>It is the responsibility of the person filling out the registration form to provide a spell checked, current email address, correct contact numbers, and that they are updated with us if need be. Important information on classes, examinations, and shows will be sent to this email account.</li>\n                                <li>SUA reserves the right to make changes and exceptions to the fees policy, at our discretion, at any time.</li>\n                            </ol>\n\n                            <h5><u>Refund Policy</u></h5>\n                            <ol>\n                                <li>Class fees are non-refundable. Exceptions may be made if there is proof there is a valid medical reason as to why the student cannot attend the class. In this situation, we can make an exception to freeze the account and have it transferred to the following term only. If this is the case, then the fees must be used by the end of the following term and cannot be carried over.</li>\n                                <li>Missed classes are <strong><u>non-refundable</u></strong> and <strong><u>cannot be carried over to a new term.</u></strong> If you inform us in advance that you are not able to make the class, we can allow a make-up class to be taken. We will advise you which classes, days and times your child can attend for a make-up class, this may be in an alternate dance style. Make-up lessons must be booked in advance through our reception team, for safety reasons you cannot just show up on the day. A maximum of 2 make-up classes can be redeemed during a term. After 2 make-up classes, you forfeit your space in your chosen class and it will be offered to other students on the waiting list.</li>\n                                <li>Should classes be required to be cancelled for reasons beyond our control (for example a short notice private holiday announcement, changing of private holiday dates, closure of any of our locations, global pandemics, notification from any of the governments/ministry\u2019s etc\u2026 and more) then students will be eligible to attend a make-up lessons, our reception team will be in touch via email should this be the case. These classes will not be refunded.</li>\n                                <li>Any payments made towards school trips, annual shows, examinations, uniforms, events etc\u2026 are all non-refundable and un transferable.</li>\n                                <li>Any refunds which take place, will be after any VAT, Credit Charges have been deducted.</li>\n                                <li>Any fees paid for any examinations, end of year shows, events etc\u2026 are all non-refundable. Credit notes will be given if any of the above must be postponed or cancelled due to reasons out of our control.</li>\n                            </ol>\n\n                            <h5><u>Photos, videos and CCTV</u></h5>\n                            <ol>\n                                <li>On occasion, photos and videos may be taken within classes, performances or preparation for examinations of students. I consent that these photos or videos may be taken and used for social media, advertising or promotional purposes without prior notification or compensation to myself or my child. If you do not agree to the use of photography of your child or yourself, kindly email us to inform us on <a href=\"mailto:salesandmarketing@stepup.ae\">salesandmarketing@stepup.ae</a></li>\n                                <li>I am aware that there are CCTV cameras in all the studios, reception and waiting areas of SUA MotorCity branch. By signing this agreement, I acknowledge and consent to the use of CCTV within SUA of myself and my child.</li>\n                                <li>I understand that I am not able to and cannot request to see any CCTV footage. If there is a specific reason in which I want to view something, then I know I have to go through the correct authorities and let them handle it.</li>\n                            </ol>\n\n                            <h5><u>Classes and Examinations</u></h5>\n                            <ol>\n                                <li>I understand that I am not permitted to sit in and watch my child\u2019s class, and that all parents must remain outside the studio/room until the class is finished and students are brought out. SUA will hold \u201COpen Day\u201D classes where parents can sit in and watch the duration of the class. Parents will be informed when these are taking place.</li>\n                                <li>I am aware that the correct uniform and footwear <strong><u>must</u></strong> be worn to attend the classes. Uniforms must be purchased and worn by the third class my child attends.</li>\n                                <li>I understand that I do not have the right to stipulate which level class I/my child should be in. All classes have either an age limit or they state that they are arranged by ability. This means the teacher decides which class you/your child is eligible for. The teacher\u2019s decision is the final decision and management will support this.</li>\n                                <li>I am aware that to take part in any annual exams, recitals or shows throughout the year that I/my child must purchase the correct attire, otherwise I/my child shall not be able to take part under any circumstances. I also understand that I need to do the required sign up procedure within the time frames given by SUA and that such events will have additional costs involved.</li>\n                                <li>When examination decisions start to take place, I am aware that the only request I can make is that my child does not take part in it. The final decision is down to the teacher in charge and based on an assessment, if your child is not chosen to take the examination then there will be a valid reason which you can discuss with the teacher. However, the final choice is down to the teacher and management will support this.</li>\n                                <li>We are aware that sometimes teachers may arrive late due to unforeseen situations. However, if a class needs to be cancelled due to this, StepUp Academy shall make sure all customers are compensated accordingly if need be.</li>\n                                <li>Classes are scheduled at a usual 30, 45 or 60 minute time slot. This timing also allows for a short period at the start and end of each class for registration to take place and for class handover management.</li>\n                                <li>Students must be picked up at the class end time, teachers are only responsible for students during the designated time slot of the class. Please call our reception team if you will be running late.</li>\n                                <li>I am aware that all the programmes come with a risk of injury due to the nature of the classes and waive all claims against StepUp Academy, Owners, Management, Teachers & Staff members</li>\n                                <li>All fees for classes, events, shows, exams, stock items are non-refundable \u2013 please check the <strong><u><i>\u201CRefund Policy\u201D</i></u></strong></li>\n                            </ol>\n\n                            <h5><u>General</u></h5>\n                            <ol>\n                                <li>StepUp Academy management reserves the right to add, modify and/or amend the terms & conditions from time to time at its absolute discretion.</li>\n                                <li>StepUp Academy follows a zero-tolerance against abusive behaviour aimed at any of their staff members or customers. In such cases, StepUp Academy management shall hold the right to decide if they stay members or are asked kindly to leave the centre.</li>\n                                <li>I am aware that the SUA reception staff are not responsible if my child leaves the SUA premises before or after class.</li>\n                                <li>I have read and accepted the terms & conditions laid down.</li>\n                            </ol>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td bgcolor=\"#fff\" style=\"padding: 0px 30px 0px 30px;\">\n                            <table>\n                                <tr>\n                                    <td>Date: </td>\n                                    <td> ".concat(new Date().toISOString().substr(0, 10), " </td>\n                                </tr>\n                                <tr>\n                                    <td>Parent Name: </td>\n                                    <td> ").concat(_this3.$store.state.Enrollments.enrollment.mother.first_name, " ").concat(_this3.$store.state.Enrollments.enrollment.mother.family_name, " </td>\n                                </tr>\n                                <tr>\n                                    <td> Child Name: </td>\n                                    <td> ").concat(element.first_name, " ").concat(element.family_name, " </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                                <tr>\n                                    <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">\n                                        &copy; StepUp Academy<br/>\n                                        <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\">\n                                        <font color=\"#000\">info@stepup.ae</font></a>\n                                    </td>\n                                    <td align=\"right\">\n                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                            <tr>\n                                                <td>\n                                                    <a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                        <img src=\"https://stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                    </a>\n                                                </td>\n                                                <td>\n                                                    <a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\">\n                                                        <img src=\"https://stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                    </a>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            ")
          });
        }
      });
    },
    send_mail_covid: function send_mail_covid() {
      var _this4 = this;

      this.$store.state.Enrollments.enrollment.children.forEach(function (element) {
        if (element.first_name) {
          Email.send({
            SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
            To: "info@stepup.ae",
            From: _this4.$store.state.Enrollments.enrollment.mother.email,
            Subject: "ASSUMPTION OF RISK / WAIVER OF LIABILITY / INDEMNIFICATION AGREEMENT - ".concat(element.first_name, " ").concat(element.family_name),
            Body: "\n            <div style=\"margin: 0; padding: 0;\">\n                <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\n                    <tr>\n                        <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                            <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                            <h1 style=\"color:#000\">StepUp Academy</h1>\n                            <h3>ASSUMPTION OF RISK / WAIVER OF LIABILITY / INDEMNIFICATION AGREEMENT</h3>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                            <h5><u>Payment and Registration Policy</u></h5>\n                            <ol>\n                                <li>A one-time registration fee of 150dhs is due at the time of registration for any class at StepUp Academy (SUA). The registration fee will become invalid if you are absent for more than 3 terms or longer.</li>\n                                <li>All trial classes must be paid for.</li>\n                                <li>Methods of payment accepted in our MotorCity branch are cash, card, or cheques made payable to StepUp Academy. Bank transfer is available upon request. It is your responsibility to provide a copy of the transfer advice slip as we cannot trace payments. Payment methods accepted vary for external venues, please check with the centre accordingly.</li>\n                                <li>If fees are not settled before the class, then SUA reserves the right to exclude that student from the class. Fees are required before or on the first day of class. Any unpaid fees will result in non-participation until the fees are settled.</li>\n                                <li>In case of a dishonored cheque, a bank fee of 100 AED for each returned cheque may apply after being assessed.</li>\n                                <li>Class space can only be guaranteed once the full fees and documentation have been completed and received.</li>\n                                <li>SUA management reserves the right to refuse re-admission into the school if there are any outstanding balances.</li>\n                                <li>It is the responsibility of the person filling out the registration form to provide a spell checked, current email address, correct contact numbers, and that they are updated with us if need be. Important information on classes, examinations, and shows will be sent to this email account.</li>\n                                <li>SUA reserves the right to make changes and exceptions to the fees policy, at our discretion, at any time.</li>\n                            </ol>\n\n                            <h5><u>Refund Policy</u></h5>\n                            <ol>\n                                <li>Class fees are non-refundable. Exceptions may be made if there is proof there is a valid medical reason as to why the student cannot attend the class. In this situation, we can make an exception to freeze the account and have it transferred to the following term only. If this is the case, then the fees must be used by the end of the following term and cannot be carried over.</li>\n                                <li>Missed classes are <strong><u>non-refundable</u></strong> and <strong><u>cannot be carried over to a new term.</u></strong> If you inform us in advance that you are not able to make the class, we can allow a make-up class to be taken. We will advise you which classes, days and times your child can attend for a make-up class, this may be in an alternate dance style. Make-up lessons must be booked in advance through our reception team, for safety reasons you cannot just show up on the day. A maximum of 2 make-up classes can be redeemed during a term. After 2 make-up classes, you forfeit your space in your chosen class and it will be offered to other students on the waiting list.</li>\n                                <li>Should classes be required to be cancelled for reasons beyond our control (for example a short notice private holiday announcement, changing of private holiday dates, closure of any of our locations, global pandemics, notification from any of the governments/ministry\u2019s etc\u2026 and more) then students will be eligible to attend a make-up lessons, our reception team will be in touch via email should this be the case. These classes will not be refunded.</li>\n                                <li>Any payments made towards school trips, annual shows, examinations, uniforms, events etc\u2026 are all non-refundable and un transferable.</li>\n                                <li>Any refunds which take place, will be after any VAT, Credit Charges have been deducted.</li>\n                                <li>Any fees paid for any examinations, end of year shows, events etc\u2026 are all non-refundable. Credit notes will be given if any of the above must be postponed or cancelled due to reasons out of our control.</li>\n                            </ol>\n\n                            <h5><u>Photos, videos and CCTV</u></h5>\n                            <ol>\n                                <li>On occasion, photos and videos may be taken within classes, performances or preparation for examinations of students. I consent that these photos or videos may be taken and used for social media, advertising or promotional purposes without prior notification or compensation to myself or my child. If you do not agree to the use of photography of your child or yourself, kindly email us to inform us on <a href=\"mailto:salesandmarketing@stepup.ae\">salesandmarketing@stepup.ae</a></li>\n                                <li>I am aware that there are CCTV cameras in all the studios, reception and waiting areas of SUA MotorCity branch. By signing this agreement, I acknowledge and consent to the use of CCTV within SUA of myself and my child.</li>\n                                <li>I understand that I am not able to and cannot request to see any CCTV footage. If there is a specific reason in which I want to view something, then I know I have to go through the correct authorities and let them handle it.</li>\n                            </ol>\n\n                            <h5><u>Classes and Examinations</u></h5>\n                            <ol>\n                                <li>I understand that I am not permitted to sit in and watch my child\u2019s class, and that all parents must remain outside the studio/room until the class is finished and students are brought out. SUA will hold \u201COpen Day\u201D classes where parents can sit in and watch the duration of the class. Parents will be informed when these are taking place.</li>\n                                <li>I am aware that the correct uniform and footwear <strong><u>must</u></strong> be worn to attend the classes. Uniforms must be purchased and worn by the third class my child attends.</li>\n                                <li>I understand that I do not have the right to stipulate which level class I/my child should be in. All classes have either an age limit or they state that they are arranged by ability. This means the teacher decides which class you/your child is eligible for. The teacher\u2019s decision is the final decision and management will support this.</li>\n                                <li>I am aware that to take part in any annual exams, recitals or shows throughout the year that I/my child must purchase the correct attire, otherwise I/my child shall not be able to take part under any circumstances. I also understand that I need to do the required sign up procedure within the time frames given by SUA and that such events will have additional costs involved.</li>\n                                <li>When examination decisions start to take place, I am aware that the only request I can make is that my child does not take part in it. The final decision is down to the teacher in charge and based on an assessment, if your child is not chosen to take the examination then there will be a valid reason which you can discuss with the teacher. However, the final choice is down to the teacher and management will support this.</li>\n                                <li>We are aware that sometimes teachers may arrive late due to unforeseen situations. However, if a class needs to be cancelled due to this, StepUp Academy shall make sure all customers are compensated accordingly if need be.</li>\n                                <li>Classes are scheduled at a usual 30, 45 or 60 minute time slot. This timing also allows for a short period at the start and end of each class for registration to take place and for class handover management.</li>\n                                <li>Students must be picked up at the class end time, teachers are only responsible for students during the designated time slot of the class. Please call our reception team if you will be running late.</li>\n                                <li>I am aware that all the programmes come with a risk of injury due to the nature of the classes and waive all claims against StepUp Academy, Owners, Management, Teachers & Staff members</li>\n                                <li>All fees for classes, events, shows, exams, stock items are non-refundable \u2013 please check the <strong><u><i>\u201CRefund Policy\u201D</i></u></strong></li>\n                            </ol>\n\n                            <h5><u>General</u></h5>\n                            <ol>\n                                <li>StepUp Academy management reserves the right to add, modify and/or amend the terms & conditions from time to time at its absolute discretion.</li>\n                                <li>StepUp Academy follows a zero-tolerance against abusive behaviour aimed at any of their staff members or customers. In such cases, StepUp Academy management shall hold the right to decide if they stay members or are asked kindly to leave the centre.</li>\n                                <li>I am aware that the SUA reception staff are not responsible if my child leaves the SUA premises before or after class.</li>\n                                <li>I have read and accepted the terms & conditions laid down.</li>\n                            </ol>\n                        </td>\n                    </tr>\n\n                    <tr>\n                        <td bgcolor=\"#fff\" style=\"padding: 0px 30px 0px 30px;\">\n                            <table>\n                                <tr>\n                                    <td>Full name of student:: </td>\n                                    <td> ".concat(element.first_name, " ").concat(element.family_name, " </td>\n                                </tr>\n                                <tr>\n                                    <td>Full name of parent/guardian: </td>\n                                    <td> ").concat(_this4.$store.state.Enrollments.enrollment.mother.first_name, " ").concat(_this4.$store.state.Enrollments.enrollment.mother.family_name, " </td>\n                                </tr>\n                                <tr>\n                                    <td>Contact Number of parent/guardian: </td>\n                                    <td> ").concat(_this4.$store.state.Enrollments.enrollment.mother.home_number, " </td>\n                                </tr>\n                                <tr>\n                                    <td>Email address of parent/guardian: </td>\n                                    <td> ").concat(_this4.$store.state.Enrollments.enrollment.mother.email, " </td>\n                                </tr>\n                                <tr>\n                                    <td>Date: </td>\n                                    <td> ").concat(new Date().toISOString().substr(0, 10), " </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                                <tr>\n                                    <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">\n                                        &copy; StepUp Academy<br/>\n                                        <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\">\n                                        <font color=\"#000\">info@stepup.ae</font></a>\n                                    </td>\n                                    <td align=\"right\">\n                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                            <tr>\n                                                <td>\n                                                    <a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                        <img src=\"https://stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                    </a>\n                                                </td>\n                                                <td>\n                                                    <a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\">\n                                                        <img src=\"https://stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                    </a>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            ")
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=template&id=d7a0cb30&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=template&id=d7a0cb30& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        {
          staticClass: "mt-5",
          attrs: { flat: _vm.$vuetify.breakpoint.mdAndUp ? true : false }
        },
        [
          _c(
            "v-card-title",
            [
              _c("v-subheader", [
                _c("p", { staticClass: "title" }, [
                  _vm._v("Mother Information")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "First Name",
                                  rules: [
                                    function(v) {
                                      return !!v || "First name is required"
                                    }
                                  ],
                                  "append-icon": "*"
                                },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.first_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "first_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.first_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Family Name",
                                  rules: [
                                    function(v) {
                                      return !!v || "Family name is required"
                                    }
                                  ],
                                  "append-icon": "*"
                                },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.family_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "family_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.family_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Nationality" },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.nationality,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "nationality",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.nationality\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Mobile Number",
                                  rules: [
                                    function(v) {
                                      return !!v || "Contact Number is required"
                                    },
                                    function(v) {
                                      return (
                                        v.length > 9 ||
                                        "Number must not less than 10 digits"
                                      )
                                    },
                                    function(v) {
                                      return (
                                        v.length < 11 ||
                                        "Number must not more than 10 digits"
                                      )
                                    }
                                  ],
                                  "append-icon": "*",
                                  type: "number"
                                },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.home_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "home_number",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.home_number\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Home Number", type: "number" },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.mobile_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "mobile_number",
                                      _vm._n($$v)
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.mobile_number\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Work Number", type: "number" },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.work_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "work_number",
                                      _vm._n($$v)
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.work_number\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Company" },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.company,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "company",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$store.state.Enrollments.enrollment.mother.company"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email Address",
                                  rules: [
                                    function(v) {
                                      return (
                                        /.+@.+/.test(v) ||
                                        "Incorrect email address"
                                      )
                                    }
                                  ],
                                  "append-icon": "*"
                                },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.email,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "email",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$store.state.Enrollments.enrollment.mother.email"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-title",
                [
                  _c("v-subheader", [
                    _c("p", { staticClass: "title" }, [
                      _vm._v("Father Information")
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "First Name",
                                  rules: [
                                    function(v) {
                                      return !!v || "First name is required"
                                    }
                                  ],
                                  "append-icon": "*"
                                },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.first_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "first_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.first_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Family Name",
                                  rules: [
                                    function(v) {
                                      return !!v || "Family name is required"
                                    }
                                  ],
                                  "append-icon": "*"
                                },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.family_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "family_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.family_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Nationality" },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.nationality,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "nationality",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.nationality\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Mobile Number",
                                  rules: [
                                    function(v) {
                                      return !!v || "Contact Number is required"
                                    },
                                    function(v) {
                                      return (
                                        v.length > 9 ||
                                        "Number must not less than 10 digits"
                                      )
                                    },
                                    function(v) {
                                      return (
                                        v.length < 11 ||
                                        "Number must not more than 10 digits"
                                      )
                                    }
                                  ],
                                  "append-icon": "*",
                                  type: "number"
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.home_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "home_number",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.home_number\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Home Number", type: "number" },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.mobile_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "mobile_number",
                                      _vm._n($$v)
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.mobile_number\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Work Number", type: "number" },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.work_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "work_number",
                                      _vm._n($$v)
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.work_number\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Company" },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.company,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "company",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$store.state.Enrollments.enrollment.father.company"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email Address",
                                  rules: [
                                    function(v) {
                                      return (
                                        /.+@.+/.test(v) ||
                                        "Incorrect email address"
                                      )
                                    }
                                  ],
                                  "append-icon": "*"
                                },
                                on: { input: _vm.input_text },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.email,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "email",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$store.state.Enrollments.enrollment.father.email"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("h3", [
                            _vm._v(
                              "\n              I agree to fulfil the obligations set forth to StepUp Academy\n              and will ensure all school terms in which I/my child attends are\n              accounted for\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            staticClass: "my-0",
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "text-none",
                                        attrs: { text: "" },
                                        on: { click: _vm.terms_condition }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  Terms & Conditions\n                "
                                        )
                                      ]
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value:
                                _vm.$store.state.Enrollments.terms_condition,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments,
                                  "terms_condition",
                                  $$v
                                )
                              },
                              expression:
                                "$store.state.Enrollments.terms_condition"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            staticClass: "my-0",
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "text-none",
                                        attrs: { text: "" },
                                        on: { click: _vm.covid }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  Covid-19\n                "
                                        )
                                      ]
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.$store.state.Enrollments.covid,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments,
                                  "covid",
                                  $$v
                                )
                              },
                              expression: "$store.state.Enrollments.covid"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _vm.$vuetify.breakpoint.mdAndUp
                ? _c(
                    "v-btn",
                    {
                      staticClass: "text-none primary",
                      on: {
                        click: function($event) {
                          return _vm.step(2)
                        }
                      }
                    },
                    [
                      _c("v-icon", [_vm._v(" mdi-menu-left ")]),
                      _vm._v("\n        Back\n      ")
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "text-none primary",
                  attrs: {
                    loading: _vm.loading,
                    disabled:
                      !_vm.valid ||
                      !_vm.$store.state.Enrollments.terms_condition ||
                      !_vm.$store.state.Enrollments.covid
                  },
                  on: { click: _vm.enroll }
                },
                [_vm._v("\n        Submit\n      ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("terms"),
      _vm._v(" "),
      _c("cov")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Form/Enrollment/Parent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Components/Form/Enrollment/Parent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Parent_vue_vue_type_template_id_d7a0cb30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Parent.vue?vue&type=template&id=d7a0cb30& */ "./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=template&id=d7a0cb30&");
/* harmony import */ var _Parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Parent.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Parent_vue_vue_type_template_id_d7a0cb30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Parent_vue_vue_type_template_id_d7a0cb30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Form/Enrollment/Parent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Parent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Parent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=template&id=d7a0cb30&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=template&id=d7a0cb30& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Parent_vue_vue_type_template_id_d7a0cb30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Parent.vue?vue&type=template&id=d7a0cb30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Enrollment/Parent.vue?vue&type=template&id=d7a0cb30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Parent_vue_vue_type_template_id_d7a0cb30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Parent_vue_vue_type_template_id_d7a0cb30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);