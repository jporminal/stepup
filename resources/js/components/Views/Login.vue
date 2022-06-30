<template>
  <v-card flat>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card-text>
            <p class="text-center text-h6">Login</p>
          </v-card-text>
          <v-alert v-show="message" border="top" color="red lighten-2">
            {{ message }}
          </v-alert>
          <v-form ref="form" v-model="valid" @submit.prevent="login">
            <v-card-text>
              <v-text-field
                label="Email Address"
                v-model="form.email"
                :rules="[rules.validEmail]"
              />
              <v-text-field
                label="password"
                v-model="form.password"
                :rules="[rules.required]"
                :append-icon="passw ? 'mdi-eye' : 'mdi-eye-off'"
                :type="passw ? 'text' : 'password'"
                @click:append="passw = !passw"
              />
              <a href="/reset-password"> Reset Password </a>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="text-none primary" type="submit" :disabled="!valid">
                Login
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "login",

  data() {
    return {
      valid: false,
      passw: false,
      message: null,
      form: {
        email: null,
        password: null,
      },
      rules: {
        validEmail: (v) => /.+@.+/.test(v) || "Email address must be valid",
        required: (value) => !!value || "Required.",
      },
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          email: this.form.email,
          password: this.form.password,
        })
        .then((result) => {
          this.$store.commit("USER_LOADER", false);
          this.$store.dispatch("CURRENT_USER");
          window.location.href = "/";
          this.close();
        })
        .catch((err) => {
          this.$store.commit("USER_LOADER", false);
          this.message = "Email address and password does not match!";
          setTimeout(() => {
            this.message = null;
          }, 3000);
        });
    },
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Login",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
