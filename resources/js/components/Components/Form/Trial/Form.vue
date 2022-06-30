<template>
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-row>
          <v-col class="d-flex justify-space-around">
            <v-toolbar-title>
              <p class="title">TRIAL FORM</p>
            </v-toolbar-title>
          </v-col>
        </v-row>
      </v-toolbar>

      <v-form ref="form" v-model="valid">
        <v-card flat>
          <v-card-text>
            <template
              v-for="(item, index) in $store.state.Enrollments.enrollment
                .children"
            >
              <div :key="index">
                <v-subheader class="title">
                    Child's Details
                </v-subheader>
                <v-row align="center" justify="center">
                  <v-col cols="12" md="5">
                  <v-text-field
                    label="First Name"
                    v-model="item.first_name"
                    :rules="[(v) => !!v || 'First name is required']"
                    append-icon="*"
                    @input="input_text"
                  />
                </v-col>
                <v-col cols="12" md="5">
                  <v-text-field
                    label="Family Name"
                    v-model="item.family_name"
                    :rules="[(v) => !!v || 'Family name is required']"
                    append-icon="*"
                    @input="input_text"
                  />
                </v-col>
                 <v-col cols="12" md="5">
                    <v-select
                        label="Gender"
                        :items="genders"
                        v-model="item.gender"
                        @input="input_text"
                    />
                </v-col>
                  <v-col cols="12" md="5">
                    <v-menu
                      v-model="item.dob_open"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="item.dob"
                          label="Date of Birth"
                          prepend-icon="mdi-event"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          append-icon="*"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="item.dob"
                        @input="item.dob_open = false"
                        :max="new Date().toISOString().substr(0, 10)"
                      />
                    </v-menu>
                  </v-col>
                </v-row>
                <v-subheader class="title">
                  Any medical condition?
                </v-subheader>
                <v-row align="center" justify="center">
                  <v-col cols="12" md="5">
                    <v-combobox
                      :items="item_combos"
                      v-model="item.medical_status"
                    />
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-text-field
                      label="details"
                      v-model="item.medical_history"
                      :disabled="item.medical_status == 'No'"
                    />
                  </v-col>
                </v-row>
              </div>
            </template>
            <!-- <div class="text-right">
              <v-btn class="text-none success" @click="add"> Add Child</v-btn>
            </div> -->
            <v-subheader class="title"> Mum's Details </v-subheader>
            <v-row align="center" justify="center">
              <v-col cols="12" md="5">
                <v-text-field
                  label="First Name"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.first_name
                  "
                  :rules="[v => !!v || 'Mum\'s first name is required']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Family Name"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.family_name
                  "
                  :rules="[v => !!v || 'Mum\'s family name is required']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Email Address"
                  v-model="$store.state.Enrollments.enrollment.mother.email"
                  :rules="[(v) => /.+@.+/.test(v) || 'Incorrect email address']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Contact Number"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.home_number
                  "
                  type="number"
                  :rules="[v => !!v || 'Contact Number is required', v => v.length > 9 || 'Number must not less than 10 digits', v => v.length < 11 || 'Number must not more than 10 digits']"
                  hint="05XXXXXXXX"
                  persistent-hint
                  append-icon="*"
                />
              </v-col>
            </v-row>
            <v-subheader class="title"> Dad's Details </v-subheader>
            <v-row align="center" justify="center">
              <v-col cols="12" md="5">
                <v-text-field
                  label="First Name"
                  v-model="
                    $store.state.Enrollments.enrollment.father.first_name
                  "
                  :rules="[v => !!v || 'Dad\'s first name is required']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Family Name"
                  v-model="
                    $store.state.Enrollments.enrollment.father.family_name
                  "
                  :rules="[v => !!v || 'Dad\'s first name is required']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Email Address"
                  v-model="$store.state.Enrollments.enrollment.father.email"
                  :rules="[(v) => /.+@.+/.test(v) || 'Incorrect email address']"
                  append-icon="*"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Contact Number"
                  v-model="
                    $store.state.Enrollments.enrollment.father.home_number
                  "
                  type="number"
                  :rules="[v => !!v || 'Contact Number is required', v => v.length > 9 || 'Number must not less than 10 digits', v => v.length < 11 || 'Number must not more than 10 digits']"
                  hint="05XXXXXXXX"
                  persistent-hint
                  append-icon="*"
                />
              </v-col>
            </v-row>
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
        </v-card>
        <terms />
        <cov />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="success"
            :disabled="!valid ||
                !$store.state.Enrollments.terms_condition ||
                !$store.state.Enrollments.covid"
            @click="save"
            :loading="loading"
            >
            Send Form
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
</template>
<script>
export default {
    name: 'trial-form',

    components: {
        terms: () => import("../Enrollment/tcs_terms_condition"),
        cov: () => import("../Enrollment/tcs_covid"),
    },

    data() {
        return {
            valid: false,
            loading: false,
            item_combos: ['Yes', 'No'],
            genders: ["Male", "Female"],
        }
    },

    methods: {
        input_text() {
            this.$store.commit(
                "ENROLLMENT",
                this.$store.state.Enrollments.enrollment
            );
        },

        save() {
            this.loading = true
            this.$store.dispatch('ENROLLMENT', {
                form: this.$store.state.Enrollments.enrollment
            })
            .then((result) => {
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
                    text: "Thank you for using our online enrollment",
                };
                // this.send_mail_to_parent(result.data.password);
                // this.send_mail_to_reception();
                this.$store.commit("SNACKBAR", snackbar);
                setTimeout(() => {
                    window.location.reload()
                }, 10000);
            }).catch((err) => {
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

        send_mail_to_parent(password) {
            Email.send({
                SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
                To: this.$store.state.Enrollments.enrollment.mother.email,
                From: "info@stepup.ae",
                Subject: `Trial Form`,
                Body: `
                    <div style="margin: 0; padding: 0;">
                        <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                            <tr>
                                <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                                    <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                                    <h1 style="color:#000">StepUp Academy</h1>
                                    <h3>Trial Form</h3>
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
                    Bcc: "xero@stepup.ae",
                    Subject: `Trial Form - ${element.first_name} ${element.family_name}`,
                    Body: `
                        <div style="margin: 0; padding: 0;">
                            <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                                <tr>
                                    <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                                        <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                                        <h1 style="color:#000">StepUp Academy</h1>
                                        <h3>Trial Form</h3>
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
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#fff" style="padding: 0px 30px 0px 30px;">
                                        <table border="1" cellpadding="0" cellspacing="0" width="100%" >
                                            <tr>
                                                <td width="20%">Medical History</td>
                                                <td> ${element.medical_history}</td>
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
    }
}
</script>
