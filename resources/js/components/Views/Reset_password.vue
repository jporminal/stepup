<template>
  <v-card flat>
    <v-card-text>
      <p class="text-center text-h6">Reset Password</p>
    </v-card-text>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-alert v-show="alert.text" border="top" :color="alert.color" dark>
              {{ alert.text }}
            </v-alert>
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              label="Email Address"
              v-model="email"
              :rules="[email_rules]"
              clearable
              :disabled="is_exist ? true : false"
            />
          </v-col>
          <v-col cols="12" md="5" v-if="is_exist">
            <v-text-field
              label="Verification code"
              v-model="verification"
              :rules="[
                (v) => !!v || 'verification code is required',
                (v) =>
                  (v.length > 5 && v.length < 7) ||
                  'verification code is not valid',
              ]"
            />
          </v-col>
          <v-col cols="12" md="5" v-if="is_exist">
            <v-text-field
              label="Password"
              v-model="password"
              :rules="[(v) => !!v || 'Password is required']"
              :append-icon="passw ? 'mdi-eye' : 'mdi-eye-off'"
              :type="passw ? 'text' : 'password'"
              @click:append="passw = !passw"
            />
          </v-col>
          <v-col cols="12" md="5" v-if="is_exist">
            <v-text-field
              label="Confirm Password"
              v-model="confirm_password"
              :rules="[
                (v) => !!v || 'Confirm password is required',
                (v) =>
                  v == this.password ||
                  'Password and confirm password do not match',
              ]"
              :append-icon="passw ? 'mdi-eye' : 'mdi-eye-off'"
              :type="passw ? 'text' : 'password'"
              @click:append="passw = !passw"
            />
          </v-col>
          <v-col cols="12" md="10">
            <div class="text-right">
              <v-btn
                v-if="!is_exist"
                class="text-none primary"
                :disabled="!valid"
                @click="check_email"
                >Reset Password</v-btn
              >
              <v-btn
                v-if="is_exist"
                class="text-none primary"
                :disabled="!valid"
                @click="change_password"
                >Submit</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "reset-password",

  data() {
    return {
      passw: false,
      is_exist: false,
      valid: false,
      email: null,
      verification: "",
      password: "",
      confirm_password: "",
      email_rules: (v) => /.+@.+/.test(v) || "Email address must be valid",
      alert: {
        color: "",
        text: null,
      },
    };
  },

  methods: {
    change_password() {
      this.$store
        .dispatch("CHANGE_PASSWORD", {
          email: this.email,
          password: this.password,
          verification: this.verification,
        })
        .then((result) => {
          if (result.data.status == 200) {
            var alert = {
              color: "green lighten-2",
              text: result.data.response,
            };
            this.alert = alert;
          } else {
            var alert = {
              color: "red lighten-2",
              text: result.data.response,
            };
            this.alert = alert;
          }
        });
    },

    check_email() {
      this.$store
        .dispatch("CHECK_EMAIL", {
          email: this.email,
        })
        .then((result) => {
          if (result.data) {
            this.send_token(result.data);
          } else {
            var alert = {
              color: "red lighten-2",
              text: "Email address do not exist",
            };
            this.alert = alert;
            setTimeout(() => {
              var alert = {
                color: "",
                text: null,
              };
              this.alert = alert;
            }, 3000);
          }
        });
    },

    send_token(user) {
      this.$store
        .dispatch("SEND_TOKEN", {
          email: user.email,
        })
        .then((result) => {
          var alert = {
            color: "green lighten-2",
            text: "We sent a verification ID to your email!",
          };
          this.email_token(user, result.data);
          this.is_exist = true;
          this.alert = alert;
          setTimeout(() => {
            var alert = {
              color: "",
              text: null,
            };
            this.alert = alert;
          }, 3000);
        });
    },

    email_token(user, token) {
      Email.send({
        SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
        To: user.email,
        From: "info@stepup.ae",
        Bcc: "vincent@stepup.ae",
        Subject: `Reset Password`,
        Body: `<div style="margin: 0; padding: 0;">
            <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">
                <tr>
                    <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">
                        <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />
                        <h1 style="color:#000">
                            StepUp Academy
                        </h1>
                        <h3>
                            Reset Password
                        </h3>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">
                        <div align="left">
                        Dear <strong> ${user.first_name} ${user.last_name},</strong>
                        <br /><br />
                        Your password reset verification is ${token}
                        </div>
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
      });
    },
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Reset Password",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
