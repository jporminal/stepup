<template>
  <div>
      <snackbar />
    <v-card :flat="$vuetify.breakpoint.mdAndUp ? true : false" class="mt-5">
      <v-card-title>
        <v-subheader>
          <p class="title">Mother Information</p>
        </v-subheader>
      </v-card-title>
      <v-form ref="form" v-model="valid">
        <v-card-text>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" md="6">
                <v-text-field
                  label="First Name"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.first_name
                  "
                  @input="input_text"
                  :rules="[(v) => !!v || 'First name is required']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Family Name"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.family_name
                  "
                  @input="input_text"
                  :rules="[(v) => !!v || 'Family name is required']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Nationality"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.nationality
                  "
                  @input="input_text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Mobile Number"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.home_number
                  "
                  @input="input_text"
                :rules="[v => !!v || 'Contact Number is required', v => v.length > 9 || 'Number must not less than 10 digits', v => v.length < 11 || 'Number must not more than 10 digits']"
                  append-icon="*"
                  type="number"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Home Number"
                  v-model.number="
                    $store.state.Enrollments.enrollment.mother.mobile_number
                  "
                  @input="input_text"
                  type="number"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Work Number"
                  v-model.number="
                    $store.state.Enrollments.enrollment.mother.work_number
                  "
                  @input="input_text"
                  type="number"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Company"
                  v-model="$store.state.Enrollments.enrollment.mother.company"
                  @input="input_text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Email Address"
                  v-model="$store.state.Enrollments.enrollment.mother.email"
                  @input="input_text"
                  :rules="[(v) => /.+@.+/.test(v) || 'Incorrect email address']"
                  append-icon="*"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-title>
          <v-subheader>
            <p class="title">Father Information</p>
          </v-subheader>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" md="6">
                <v-text-field
                  label="First Name"
                  v-model="
                    $store.state.Enrollments.enrollment.father.first_name
                  "
                  @input="input_text"
                  :rules="[(v) => !!v || 'First name is required']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Family Name"
                  v-model="
                    $store.state.Enrollments.enrollment.father.family_name
                  "
                  @input="input_text"
                  :rules="[(v) => !!v || 'Family name is required']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Nationality"
                  v-model="
                    $store.state.Enrollments.enrollment.father.nationality
                  "
                  @input="input_text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Mobile Number"
                  v-model="
                    $store.state.Enrollments.enrollment.father.home_number
                  "
                  :rules="[v => !!v || 'Contact Number is required', v => v.length > 9 || 'Number must not less than 10 digits', v => v.length < 11 || 'Number must not more than 10 digits']"
                  append-icon="*"
                  type="number"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Home Number"
                  v-model.number="
                    $store.state.Enrollments.enrollment.father.mobile_number
                  "
                  @input="input_text"
                  type="number"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Work Number"
                  v-model.number="
                    $store.state.Enrollments.enrollment.father.work_number
                  "
                  @input="input_text"
                  type="number"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Company"
                  v-model="$store.state.Enrollments.enrollment.father.company"
                  @input="input_text"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Email Address"
                  v-model="$store.state.Enrollments.enrollment.father.email"
                  @input="input_text"
                  :rules="[(v) => /.+@.+/.test(v) || 'Incorrect email address']"
                  append-icon="*"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-text>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <h3>
                I agree to fulfil the obligations set forth to StepUp Academy
                and will ensure all school terms in which I/my child attends are
                accounted for
              </h3>
              <v-checkbox
                v-model="$store.state.Enrollments.terms_condition"
                class="my-0"
              >
                <template v-slot:label>
                  <v-btn @click="terms_condition" text class="text-none">
                    Terms &amp; Conditions
                  </v-btn>
                </template>
              </v-checkbox>
              <v-checkbox v-model="$store.state.Enrollments.covid" class="my-0">
                <template v-slot:label>
                  <v-btn @click="covid" text class="text-none">
                    Covid-19
                  </v-btn>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <v-btn
          class="text-none primary"
          @click="step(2)"
          v-if="$vuetify.breakpoint.mdAndUp"
        >
          <v-icon> mdi-menu-left </v-icon>
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          class="text-none primary"
          @click="enroll"
          :loading="loading"
          :disabled="
            !valid ||
            !$store.state.Enrollments.terms_condition ||
            !$store.state.Enrollments.covid
          "
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
    <terms />
    <cov />
  </div>
</template>
<script>
export default {
  name: "parent",

  components: {
    terms: () => import("./tcs_terms_condition"),
    cov: () => import("./tcs_covid"),
      snackbar: () => import("../../Snackbar/Global_view.vue"),
  },

  data() {
    return {
      valid: false,
      loading: false,
      numb: 0
    };
  },

  methods: {
    enroll() {
        this.loading = true
      this.$store
        .dispatch("ENROLLMENT", {
          form: this.$store.state.Enrollments.enrollment,
        })
        .then((result) => {
          var form = {
            location: "Motor City",
            children: [
              {
                first_name: '',
                family_name: '',
                nationality: '',
                gender: "Female",
                dob: new Date().toISOString().substr(0, 10),
              },
            ],
            mother: {
              first_name: '',
              family_name: '',
              nationality: '',
              home_number: 0,
              mobile_number: 0,
              work_number: 0,
              company: '',
              email: '',
            },
            father: {
              first_name: '',
              family_name: '',
              nationality: '',
              home_number: 0,
              mobile_number: 0,
              work_number: 0,
              company: '',
              email: '',
            },
            address: {
              development: '',
              street: '',
              building: '',
              landmark: '',
              POBox: '',
              emirate: '',
              same: true,
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
              textotherhealth: '',
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
              textice: '',
            },
            emergency: {
              person_1: {
                first_name: '',
                family_name: '',
                contact_1: '',
                contact_2: '',
                contact_3: '',
                relation: '',
              },
              person_2: {
                first_name: '',
                family_name: '',
                contact_1: '',
                contact_2: '',
                contact_3: '',
                relation: '',
              },
            },
          };

          var snackbar = {
            snackbar: true,
            vertical: true,
            timeout: 5000,
            color: "greem lighten-2",
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: "Thank you for using our online enrollment. Please check your email for confirmation.",
          };

        //   this.send_mail_to_parent(result.data.password);
        //   this.send_mail_to_reception();
        //   this.send_mail_sua_terms();
        //   this.send_mail_covid();
          this.$store.commit("SNACKBAR", snackbar);

          this.$store.commit("TERMS_CONDITIONS", false);
          this.$store.commit("COVID", false);

          if (this.$store.state.Carts.enrollment_form) {
            this.$store.commit("CART_ENROLLMENT_FORM", false);
            this.$store.commit("CART_PROCESS", false);
            this.$store.commit("PARENT", result.data.mom);
            this.$store.commit("CHILD", result.data.children);
            localStorage.setItem("parent", JSON.stringify(result.data.mom));
            localStorage.setItem(
              "children",
              JSON.stringify(result.data.children)
            );
            this.loading = false
            this.$router.push("/checkout");
          } else {
              setTimeout(() => {
                  this.loading = false
                  this.$store.commit("ENROLLMENT", form);
                  window.location.reload()
              }, 6000);
          }
        })
        .catch((err) => {
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
            text:
              "Sorry, We have encounter network error. Please try to reload your browser. Thank you :)",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },
    terms_condition() {
      this.$store.commit("TERMS_CONDITIONS_OPEN", true);
    },
    covid() {
      this.$store.commit("COVID_OPEN", true);
    },
    step(e) {
      this.$store.commit("STEPS", e);
    },
    input_text() {
      this.$store.commit(
        "ENROLLMENT",
        this.$store.state.Enrollments.enrollment
      );
    },

    send_mail_to_parent(password) {
      Email.send({
        SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
        To: this.$store.state.Enrollments.enrollment.mother.email,
        From: "info@stepup.ae",
        Subject: `Enrollment Form`,
        Body: `
            <div style="margin: 0; padding: 0;">
                <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                        <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                            <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                            <h1 style="color:#000">StepUp Academy</h1>
                            <h3>Enrollment Form</h3>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">
                            <br><br>
                            Dear ${
                              this.$store.state.Enrollments.enrollment.mother
                                .first_name
                            },
                            <br><br>
                            ${
                              password
                                ? `Thank you for using our online enrollment form. We have create your login credentials on our website. Please use your registered email address and your new password ${password}`
                                : `Thank you for enrolling your child at StepUp Academy!`
                            }
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">
                                        &copy; StepUp Academy<br/>
                                        <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;">
                                        <font color="#000">info@stepup.ae</font></a>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td>
                                                    <a href="https://www.instagram.com/step_up_academy/" target="_blank">
                                                        <img src="https://stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank">
                                                        <img src="https://stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            `,
      });
    },

    send_mail_to_reception() {
      this.$store.state.Enrollments.enrollment.children.forEach((element) => {
        if(element.first_name) {
            Email.send({
            SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
            To: "info@stepup.ae",
            From: this.$store.state.Enrollments.enrollment.mother.email,
            Subject: `Enrollment Form - ${element.first_name} ${element.family_name}`,
            Body: `
                <div style="margin: 0; padding: 0;">
                    <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                        <tr>
                            <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                                <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                                <h1 style="color:#000">StepUp Academy</h1>
                                <h3>Enrollment Form</h3>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">
                                <h4 align="center"> Children Information</h4>
                                <table border="1" cellpadding="0" cellspacing="0" width="100%" >
                                    <tr>
                                        <td width="20%">Name</td>
                                        <td> ${element.first_name} ${element.family_name} </td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth</td>
                                        <td> ${element.dob} </td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td> ${element.gender} </td>
                                    </tr>
                                    <tr>
                                        <td>Nationality</td>
                                        <td> ${element.nationality} </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#fff" style="padding: 0px 30px 0px 30px;">
                                <h4 align="center"> Parent Information</h4>
                                <h5>Mother Info</h5>
                                <table border="1" cellpadding="0" cellspacing="0" width="100%" >
                                    <tr>
                                        <td width="20%">Name</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.mother.first_name} ${this.$store.state.Enrollments.enrollment.mother.family_name} </td>
                                    </tr>
                                    <tr>
                                        <td>Email Address</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.mother.email} </td>
                                        <td>Home Number</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.mother.home_number} </td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.mother.mobile_number} </td>
                                        <td>Work Number</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.mother.work_number} </td>
                                    </tr>
                                    <tr>
                                        <td>Company</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.mother.company} </td>
                                        <td>Nationality</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.mother.nationality} </td>
                                    </tr>
                                </table>
                                <h5>Father Info</h5>
                                <table border="1" cellpadding="0" cellspacing="0" width="100%" >
                                    <tr>
                                        <td width="20%">Name</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.father.first_name} ${this.$store.state.Enrollments.enrollment.father.family_name} </td>
                                    </tr>
                                    <tr>
                                        <td>Email Address</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.father.email} </td>
                                        <td>Home Number</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.father.home_number} </td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.father.mobile_number} </td>
                                        <td>Work Number</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.father.work_number} </td>
                                    </tr>
                                    <tr>
                                        <td>Company</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.father.company} </td>
                                        <td>Nationality</td>
                                        <td> ${this.$store.state.Enrollments.enrollment.father.nationality} </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#fff" style="padding: 0px 30px 0px 30px;">
                                <h4 align="center"> ${this.$store.state.Enrollments.enrollment.location} </h4>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">
                                            &copy; StepUp Academy<br/>
                                            <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;">
                                            <font color="#000">info@stepup.ae</font></a>
                                        </td>
                                        <td align="right">
                                            <table border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td>
                                                        <a href="https://www.instagram.com/step_up_academy/" target="_blank">
                                                            <img src="https://stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank">
                                                            <img src="https://stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
                `,
            });
        }
      });
    },

    send_mail_sua_terms() {
      this.$store.state.Enrollments.enrollment.children.forEach((element) => {
        if(element.first_name) {
            Email.send({
          SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
          To: "info@stepup.ae",
          From: this.$store.state.Enrollments.enrollment.mother.email,
          Subject: `Class Terms & Conditions - ${element.first_name} ${element.family_name}`,
          Body: `
            <div style="margin: 0; padding: 0;">
                <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                        <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                            <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                            <h1 style="color:#000">StepUp Academy</h1>
                            <h3>Class Terms & Conditions</h3>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">
                          <h4><u>Payment and Registration Policy</u></h4>
                                <ol>
                                    <li>A one-time registration fee of 150dhs is due at the time of registration for any class at StepUp Academy (SUA). The registration fee will become invalid if you are absent for more than 3 terms or longer.</li>
                                    <li>A maximum of 2 trial classes are allowed for all SUA classes, once 2 classes have been attended, registration for the remainder of the term is required. The price of trial class shall depend on the class. Classes are not on a pay-as-you go basis.</li>
                                    <li>Methods of payment accepted in our Motor City and Springs Souk branch are cash, card or cheques made payable to StepUp Academy. Bank transfer is available upon request. It is your responsibility to provide a copy of the transfer advice slip as we cannot trace payments. Payment methods accepted vary for external venues, please check with the centre accordingly.</li>
                                    <li>If fees are not settled before the class, then SUA reserves the right to exclude that student from the class. Fees are required before or on the first day of class. Any unpaid fees will result in non-participation until the fees are settled.</li>
                                    <li>In case of a dishonoured cheque, a bank fee of 100 AED for each returned cheque may apply after being assessed.</li>
                                    <li>Class space can only be guaranteed once the full fees and documentation have been completed and received.</li>
                                    <li>SUA management reserves the right to refuse re-admission into the school if there are any outstanding balances.</li>
                                    <li>It is the responsibility of the person filling out the registration form to provide a spell checked, current email address, correct contact numbers, and that they are updated with us if need be. Important information on classes, examinations and shows will be sent to this email account.</li>
                                    <li>SUA reserves the right to make changes and exceptions to the fees policy, at our discretion, at any time.</li>
                                </ol>


                                <h4><u>Refund Policy</u></h4>
                                <ol>
                                    <li>Class fees are non-refundable. Exceptions may be made if there is proof there is a valid medical reason as to why the student cannot attend the class. In this situation we can make an exception to freeze the account and have it transferred to the following term only. If this is the case, then the fees must be used by the end of the following term and cannot be carried over.</li>
                                    <li>Missed classes are non-refundable and cannot be carried over to a new term. If you inform us in advance that you are not able to make the class, we can allow a make up class to be taken. We will advise you which classes, days and times your child can attend for a make-up class, this may be in an alternate dance style. Make up lessons must be booked in advance through our reception team, for safety reasons you cannot just show up on the day. A maximum of 2 make up classes can be redeemed during a term. After 2 make-up classes, you forfeit your space in your chosen class and it will be offered to other students on the waiting list.</li>
                                    <li>Should classes be required to be cancelled for reasons beyond our control (for example a short notice private holiday announcement, changing of private holiday dates, closure of any of our locations, global pandemics, notification from any of the governments/ministry’s etc… and more) then students will be eligible to attend a make up lessons, our reception team will be in touch via email should this be the case. These classes will not be refunded.</li>
                                    <li>Any payments made towards school trips, annual shows, examinations, uniforms, events etc… are all non-refundable and un transferable.</li>
                                    <li>Any refunds which take place, will be after any VAT, Credit Charges have been deducted.</li>
                                    <li>Any fees paid for any examinations, end of year shows, events etc… are all non-refundable.</li>
                                </ol>


                                <h4><u>Photos, videos and CCTV</u></h4>
                                <ol>
                                    <li>On occasion, photos and videos may be taken within classes, performances or preparation for examinations of students. I consent that these photos or videos may be taken and used for social media, advertising or promotional purposes without prior notification or compensation to myself or my child. If you do not agree to the use of photography of your child or yourself, kindly email us to inform us on salesandmarketing@stepup.ae</li>
                                    <li>I am aware that there are CCTV cameras in all the studios, reception and waiting areas of SUA Motor City and Springs Souk branch. By signing this agreement, I acknowledge and consent to the use of CCTV within SUA of myself and my child.</li>
                                    <li>I understand that I am not able to and cannot request to see any CCTV footage. If there is a specific reason in which I want to view something, then I know I must go through the correct authorities and let them handle it.</li>
                                    <li>I am aware that for any annual showcases, photos and videos will be taken and available for option to purchase by parents.</li>
                                </ol>

                                <h4><u>Classes and Examinations</u></h4>
                                <ol>
                                    <li>I understand that I am not permitted to sit in and watch my child’s class, and that all parents must remain outside the studio/room until the class is finished and students are brought out. SUA will hold “Open Day” classes where parents can sit in and watch the duration of the class. Parents will be informed when these are taking place.</li>
                                    <li>I am aware that the correct uniform and footwear must be worn to attend the classes. Uniforms must be purchased and worn by the third class my child attends.</li>
                                    <li>I understand that I do not have the right to stipulate which level class I/my child should be in. All classes have either an age limit or they state that they are arranged by ability. This means the teacher decides which class you/your child is eligible for. The teacher’s decision is the final decision and management will support this.</li>
                                    <li>I am aware that to take part in any annual exams, recitals or shows throughout the year that I/my child must purchase the correct attire, otherwise I/my child shall not be able to take part under any circumstances. I also understand that I need to do the required sign up procedure within the time frames given by SUA and that such events will have additional costs involved.</li>
                                    <li>When examination decisions start to take place, I am aware that the only request I can make is that my child’s does not take part in it. The final decision is down to the teacher in charge and based on an assessment, if your child is not chosen to take the examination then there will be a valid reason which you can discuss with the teacher. However, the final choice is down to the teacher and management will support this.</li>
                                    <li>I am aware that sometimes teachers may arrive late due to un-foreseen situations. However, if a class needs to be cancelled due to this, StepUp Academy shall make sure all customers are compensated accordingly if need be.</li>
                                    <li>Classes are scheduled at a usual 30, 45 or 60 minute time slot. This timing also allows for a short period at the start and end of each class for registration to take place and for class handover management.</li>
                                    <li>Students must be picked up at the class end time, teachers are only responsible for students during the designated time slot of the class. Please call our reception team if you will be running late.</li>
                                    <li>I am aware that all the programmes come with a risk of injury due to the nature of the classes and waive all claims against StepUp Academy, Owners, Management, Teachers & Staff members.</li>
                                    <li>All fees for classes, events, shows, exams, stock items are non-refundable – please check the “Refund Policy”.</li>
                                </ol>


                                <h4><u>General</u></h4>
                                <ol>
                                    <li>StepUp Academy management reserves the right to add, modify and/or amend the terms & conditions from time to time at its absolute discretion.</li>
                                    <li>StepUp Academy follows a zero tolerance against abusive behaviour aimed at any of their staff members or customers. In such cases, StepUp Academy management shall hold the rights to decide if they stay members or are asked kindly to leave the centre.</li>
                                    <li>I am aware that the SUA reception staff are not responsible if my child leaves the SUA premises before or after class.</li>
                                    <li>I have read and accepted the terms & conditions laid down.</li>
                                </ol>
                        </td>
                    </tr>

                    <tr>
                        <td bgcolor="#fff" style="padding: 0px 30px 0px 30px;">
                            <table>
                                <tr>
                                    <td>Date: </td>
                                    <td> ${new Date()
                                      .toISOString()
                                      .substr(0, 10)} </td>
                                </tr>
                                <tr>
                                    <td>Parent Name: </td>
                                    <td> ${
                                      this.$store.state.Enrollments.enrollment
                                        .mother.first_name
                                    } ${
            this.$store.state.Enrollments.enrollment.mother.family_name
          } </td>
                                </tr>
                                <tr>
                                    <td> Child Name: </td>
                                    <td> ${element.first_name} ${
            element.family_name
          } </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">
                                        &copy; StepUp Academy<br/>
                                        <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;">
                                        <font color="#000">info@stepup.ae</font></a>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td>
                                                    <a href="https://www.instagram.com/step_up_academy/" target="_blank">
                                                        <img src="https://stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank">
                                                        <img src="https://stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            `,
        });
        }
      });
    },

    send_mail_covid() {
      this.$store.state.Enrollments.enrollment.children.forEach((element) => {
        if(element.first_name) {
            Email.send({
          SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
          To: "info@stepup.ae",
          From: this.$store.state.Enrollments.enrollment.mother.email,
          Subject: `ASSUMPTION OF RISK / WAIVER OF LIABILITY / INDEMNIFICATION AGREEMENT - ${element.first_name} ${element.family_name}`,
          Body: `
            <div style="margin: 0; padding: 0;">
                <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                        <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                            <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                            <h1 style="color:#000">StepUp Academy</h1>
                            <h3>ASSUMPTION OF RISK / WAIVER OF LIABILITY / INDEMNIFICATION AGREEMENT</h3>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">
                            <h5><u>Payment and Registration Policy</u></h5>
                            <ol>
                                <li>A one-time registration fee of 150dhs is due at the time of registration for any class at StepUp Academy (SUA). The registration fee will become invalid if you are absent for more than 3 terms or longer.</li>
                                <li>All trial classes must be paid for.</li>
                                <li>Methods of payment accepted in our MotorCity branch are cash, card, or cheques made payable to StepUp Academy. Bank transfer is available upon request. It is your responsibility to provide a copy of the transfer advice slip as we cannot trace payments. Payment methods accepted vary for external venues, please check with the centre accordingly.</li>
                                <li>If fees are not settled before the class, then SUA reserves the right to exclude that student from the class. Fees are required before or on the first day of class. Any unpaid fees will result in non-participation until the fees are settled.</li>
                                <li>In case of a dishonored cheque, a bank fee of 100 AED for each returned cheque may apply after being assessed.</li>
                                <li>Class space can only be guaranteed once the full fees and documentation have been completed and received.</li>
                                <li>SUA management reserves the right to refuse re-admission into the school if there are any outstanding balances.</li>
                                <li>It is the responsibility of the person filling out the registration form to provide a spell checked, current email address, correct contact numbers, and that they are updated with us if need be. Important information on classes, examinations, and shows will be sent to this email account.</li>
                                <li>SUA reserves the right to make changes and exceptions to the fees policy, at our discretion, at any time.</li>
                            </ol>

                            <h5><u>Refund Policy</u></h5>
                            <ol>
                                <li>Class fees are non-refundable. Exceptions may be made if there is proof there is a valid medical reason as to why the student cannot attend the class. In this situation, we can make an exception to freeze the account and have it transferred to the following term only. If this is the case, then the fees must be used by the end of the following term and cannot be carried over.</li>
                                <li>Missed classes are <strong><u>non-refundable</u></strong> and <strong><u>cannot be carried over to a new term.</u></strong> If you inform us in advance that you are not able to make the class, we can allow a make-up class to be taken. We will advise you which classes, days and times your child can attend for a make-up class, this may be in an alternate dance style. Make-up lessons must be booked in advance through our reception team, for safety reasons you cannot just show up on the day. A maximum of 2 make-up classes can be redeemed during a term. After 2 make-up classes, you forfeit your space in your chosen class and it will be offered to other students on the waiting list.</li>
                                <li>Should classes be required to be cancelled for reasons beyond our control (for example a short notice private holiday announcement, changing of private holiday dates, closure of any of our locations, global pandemics, notification from any of the governments/ministry’s etc… and more) then students will be eligible to attend a make-up lessons, our reception team will be in touch via email should this be the case. These classes will not be refunded.</li>
                                <li>Any payments made towards school trips, annual shows, examinations, uniforms, events etc… are all non-refundable and un transferable.</li>
                                <li>Any refunds which take place, will be after any VAT, Credit Charges have been deducted.</li>
                                <li>Any fees paid for any examinations, end of year shows, events etc… are all non-refundable. Credit notes will be given if any of the above must be postponed or cancelled due to reasons out of our control.</li>
                            </ol>

                            <h5><u>Photos, videos and CCTV</u></h5>
                            <ol>
                                <li>On occasion, photos and videos may be taken within classes, performances or preparation for examinations of students. I consent that these photos or videos may be taken and used for social media, advertising or promotional purposes without prior notification or compensation to myself or my child. If you do not agree to the use of photography of your child or yourself, kindly email us to inform us on <a href="mailto:salesandmarketing@stepup.ae">salesandmarketing@stepup.ae</a></li>
                                <li>I am aware that there are CCTV cameras in all the studios, reception and waiting areas of SUA MotorCity branch. By signing this agreement, I acknowledge and consent to the use of CCTV within SUA of myself and my child.</li>
                                <li>I understand that I am not able to and cannot request to see any CCTV footage. If there is a specific reason in which I want to view something, then I know I have to go through the correct authorities and let them handle it.</li>
                            </ol>

                            <h5><u>Classes and Examinations</u></h5>
                            <ol>
                                <li>I understand that I am not permitted to sit in and watch my child’s class, and that all parents must remain outside the studio/room until the class is finished and students are brought out. SUA will hold “Open Day” classes where parents can sit in and watch the duration of the class. Parents will be informed when these are taking place.</li>
                                <li>I am aware that the correct uniform and footwear <strong><u>must</u></strong> be worn to attend the classes. Uniforms must be purchased and worn by the third class my child attends.</li>
                                <li>I understand that I do not have the right to stipulate which level class I/my child should be in. All classes have either an age limit or they state that they are arranged by ability. This means the teacher decides which class you/your child is eligible for. The teacher’s decision is the final decision and management will support this.</li>
                                <li>I am aware that to take part in any annual exams, recitals or shows throughout the year that I/my child must purchase the correct attire, otherwise I/my child shall not be able to take part under any circumstances. I also understand that I need to do the required sign up procedure within the time frames given by SUA and that such events will have additional costs involved.</li>
                                <li>When examination decisions start to take place, I am aware that the only request I can make is that my child does not take part in it. The final decision is down to the teacher in charge and based on an assessment, if your child is not chosen to take the examination then there will be a valid reason which you can discuss with the teacher. However, the final choice is down to the teacher and management will support this.</li>
                                <li>We are aware that sometimes teachers may arrive late due to unforeseen situations. However, if a class needs to be cancelled due to this, StepUp Academy shall make sure all customers are compensated accordingly if need be.</li>
                                <li>Classes are scheduled at a usual 30, 45 or 60 minute time slot. This timing also allows for a short period at the start and end of each class for registration to take place and for class handover management.</li>
                                <li>Students must be picked up at the class end time, teachers are only responsible for students during the designated time slot of the class. Please call our reception team if you will be running late.</li>
                                <li>I am aware that all the programmes come with a risk of injury due to the nature of the classes and waive all claims against StepUp Academy, Owners, Management, Teachers & Staff members</li>
                                <li>All fees for classes, events, shows, exams, stock items are non-refundable – please check the <strong><u><i>“Refund Policy”</i></u></strong></li>
                            </ol>

                            <h5><u>General</u></h5>
                            <ol>
                                <li>StepUp Academy management reserves the right to add, modify and/or amend the terms & conditions from time to time at its absolute discretion.</li>
                                <li>StepUp Academy follows a zero-tolerance against abusive behaviour aimed at any of their staff members or customers. In such cases, StepUp Academy management shall hold the right to decide if they stay members or are asked kindly to leave the centre.</li>
                                <li>I am aware that the SUA reception staff are not responsible if my child leaves the SUA premises before or after class.</li>
                                <li>I have read and accepted the terms & conditions laid down.</li>
                            </ol>
                        </td>
                    </tr>

                    <tr>
                        <td bgcolor="#fff" style="padding: 0px 30px 0px 30px;">
                            <table>
                                <tr>
                                    <td>Full name of student:: </td>
                                    <td> ${element.first_name} ${
            element.family_name
          } </td>
                                </tr>
                                <tr>
                                    <td>Full name of parent/guardian: </td>
                                    <td> ${
                                      this.$store.state.Enrollments.enrollment
                                        .mother.first_name
                                    } ${
            this.$store.state.Enrollments.enrollment.mother.family_name
          } </td>
                                </tr>
                                <tr>
                                    <td>Contact Number of parent/guardian: </td>
                                    <td> ${
                                      this.$store.state.Enrollments.enrollment
                                        .mother.home_number
                                    } </td>
                                </tr>
                                <tr>
                                    <td>Email address of parent/guardian: </td>
                                    <td> ${
                                      this.$store.state.Enrollments.enrollment
                                        .mother.email
                                    } </td>
                                </tr>
                                <tr>
                                    <td>Date: </td>
                                    <td> ${new Date()
                                      .toISOString()
                                      .substr(0, 10)} </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">
                                        &copy; StepUp Academy<br/>
                                        <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;">
                                        <font color="#000">info@stepup.ae</font></a>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td>
                                                    <a href="https://www.instagram.com/step_up_academy/" target="_blank">
                                                        <img src="https://stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank">
                                                        <img src="https://stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            `,
        });
        }
      });
    },
  },
};
</script>


