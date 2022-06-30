<template>
    <v-app>
        <snackbar />
        <v-row
            align="start"
            justify="center"
        >
            <v-col
                cols="12"
                md="6"
            >
                <v-card
                    flat
                >
                    <!-- <v-toolbar
                        flat
                        dark
                        color="primary"
                    >
                        <v-toolbar-title>
                            Form
                        </v-toolbar-title>
                    </v-toolbar> -->

                    <v-card-text>
                        <p class="text-center text-h3 font-weight-bold">
                            PHOTO/VIDEO RELEASE FORM
                        </p>
                    </v-card-text>
                    <v-card-text>
                        <v-form
                            v-model="valid"
                            ref="form"
                        >
                            <v-text-field
                                v-model="form.student_name"
                                :rules="[v => !!v || 'Student Name is required']"
                            >
                                <template v-slot:prepend>
                                    Student Name:
                                </template>
                            </v-text-field>
                            <v-text-field
                                v-model="form.parent_name"
                                :rules="[v => !!v || 'Parent Name is required']"
                            >
                                <template v-slot:prepend>
                                    Full Name of Parent/Guardian:
                                </template>
                            </v-text-field>
                            <v-text-field
                                v-model.number="form.mobile"
                                type="number"
                                :rules="[v => !!v || 'Mobile is required']"
                            >
                                <template v-slot:prepend>
                                    Mobile Number:
                                </template>
                            </v-text-field>
                            <v-text-field
                                v-model="form.email"
                                :rules="[(v) => !!v || 'Email is required', (v) => /.+@.+/.test(v) || 'E-mail must be valid']"
                            >
                                <template v-slot:prepend>
                                    Email:
                                </template>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-text>
                        <p class="text-body-1">Date: <span class="font-weight-bold">{{ form.date }}</span></p>
                        <br><br>
                        <p class="text-h6"> I, <span class="font-weight-bold text-decoration-underline red--text"> {{ form.parent_name }} </span>, parent/guardian of <span class="font-weight-bold text-decoration-underline red--text"> {{ form.student_name }} </span>. Give permission for my child to be photographed, videotaped, and or interviewed by representatives from and or employees of StepUp Academy for educational or public relation purposes. I authorize the use and reproduction by StepUp Academy or anyone authorized by StepUp Academy of any and all photographs and videos taken of my child, without compensation to me/my child. All these photographs/video recordings shall be the property, solely and completely, of StepUp Academy. I hereby release StepUp Academy and its agents and employees from all claims, demands, and liabilities whatsoever and waive any right to inspect or approve the finished photographs/videos, soundtrack, script or printed matter that may be used in conjunction with them.</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="text-none success"
                            :disabled="!valid"
                            @click="sending"
                            :loading="loading"
                        >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import moment from 'moment'
export default {
    name: 'photo-video-release-form',

    components: {
        snackbar: () => import('../../../Components/Snackbar/Global_view')
    },

    data() {
        return {
            valid: false,
            loading: false,
            form: {
                date: moment(new Date()).format('MMMM DD, YYYY'),
                student_name: null,
                parent_name: null,
                mobile: null,
                email: null
            }
        }
    },

    methods: {
        sending() {
            this.loading = true
            Email.send({
            SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
            To: "info@stepup.ae",
            From: this.form.email,
            Subject: `PHOTO/VIDEO RELEASE FORM - ${this.form.student_name}`,
            Body: `<div style="margin: 0; padding: 0;">
                <table align="center" border="1" cellpadding="0" cellspacing="0" width="900">
                    <tr>
                        <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                            <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                            <h1 style="color:#000">
                                StepUp Academy
                            </h1>
                            <h3>
                                PHOTO/VIDEO RELEASE FORM
                            </h3>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">
                            <h3>Date: <strong>${this.form.date}</strong></h3>
                        <br><br>
                         <h3>
                         I, <span style="text-decoration: underline; font-weight: bold; color: red;"> ${this.form.parent_name} </span>, parent/guardian of <span style="text-decoration: underline; font-weight: bold; color: red;"> ${this.form.student_name} </span>. Give permission for my child to be photographed, videotaped, and or interviewed by representatives from and or employees of StepUp Academy for educational or public relation purposes. I authorize the use and reproduction by StepUp Academy or anyone authorized by StepUp Academy of any and all photographs and videos taken of my child, without compensation to me/my child. All these photographs/video recordings shall be the property, solely and completely, of StepUp Academy. I hereby release StepUp Academy and its agents and employees from all claims, demands, and liabilities whatsoever and waive any right to inspect or approve the finished photographs/videos, soundtrack, script or printed matter that may be used in conjunction with them.
                         </h3>
                         <br><br>

                         <div style="text-decoration: overline;">Signature of Parent/Guardian:</div>
                         <br>
                         Date: <u>${this.form.date}</u>
                         <br>
                         Name of Parent/Guardian: <u>${this.form.parent_name}</u>
                         <br>
                         Mobile Number: <u>${this.form.mobile}</u>
                         <br>
                         Email: <u>${this.form.email}</u>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">&copy; StepUp Academy<br/> <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;"><font color="#000">info@stepup.ae</font></a></td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td><a href="https://www.instagram.com/step_up_academy/" target="_blank">
                                                    <img src="https://enrollment.stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" /></a></td><td><a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank"><img src="https://enrollment.stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" /></a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>`,
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
            text: "Thank you for filling up our form!",
            };
            this.$store.commit("SNACKBAR", snackbar);
            var form = {
                date: moment(new Date()).format('MMMM DD, YYYY'),
                student_name: null,
                parent_name: null,
                mobile: null,
                email: null,
            }
            this.form = form
            this.$refs.form.reset()
            this.loading = false
            this.valid = false;

        });
        }
    }
}
</script>
