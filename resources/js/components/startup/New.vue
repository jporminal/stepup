<template>
  <v-dialog v-model="dialog" width="600" persistent @click:outside="close">
    <template v-slot:activator="{ on }">
      <v-btn
        :dark="
          $route.name == 'Home' && !scroller && $vuetify.breakpoint.mdAndUp
        "
        class="text-none"
        text
        v-on="on"
      >
        Get Started
      </v-btn>
    </template>

    <v-form ref="form" v-model="valid" @submit.prevent="started">
      <v-card :loading="$store.state.Users.loading">
        <v-toolbar dense color="blue darken-2" dark>
          <v-toolbar-title>
            {{ title }}
          </v-toolbar-title>
        </v-toolbar>
        <!-- check email address if exist -->
        <v-card-text v-if="status == 'Next'">
          <v-text-field
            label="Email Address"
            v-model="register.email"
            :rules="[rules.validEmail]"
          />
        </v-card-text>
        <!-- email found and ready for login -->
        <v-card-text v-if="status == 'Login'">
          <v-alert v-show="errors" :value="true" color="error" class="mb-5">
            {{ errors }}
          </v-alert>
          <p>
            {{ register.email }}
            <v-btn @click="change_email" class="text-none" text>
              Change email address?
            </v-btn>
          </p>
          <v-text-field
            label="password"
            v-model="register.password"
            :rules="[rules.required]"
            :append-icon="passw ? 'mdi-eye' : 'mdi-eye-off'"
            :type="passw ? 'text' : 'password'"
            @click:append="passw = !passw"
          />
          <a href="/reset-password"> Reset Password </a>
        </v-card-text>
        <!-- email not found and register component is ready to fire -->
        <v-card-text v-if="status == 'Register'">
          <v-alert
            v-show="errorMessages"
            :value="true"
            color="error"
            v-for="error in errorMessages.errors"
            :key="error"
            class="mb-5"
          >
            {{ error[0] }}
          </v-alert>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="First Name"
                  v-model="register.first_name"
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Family Name"
                  v-model="register.family_name"
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Username"
                  v-model="register.username"
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Email"
                  v-model="register.email"
                  :rules="[rules.validEmail]"
                />
              </v-col>
              <v-col cols="12">
                <v-subheader class="headline"> Address </v-subheader>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :items="country"
                  label="Country"
                  v-model="register.country"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :items="$store.state.town"
                  label="Emirate"
                  v-model="register.town"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Street"
                  v-model="register.street"
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Password"
                  v-model="register.password"
                  :append-icon="passw ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="passw ? 'text' : 'password'"
                  @click:append="passw = !passw"
                  :rules="[rules.required, rules.min]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Confirm Password"
                  v-model="register.confirmPassword"
                  :append-icon="passw ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="passw ? 'text' : 'password'"
                  @click:append="passw = !passw"
                  :rules="[rules.required, rules.min]"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="primary text-none" type="submit" :disabled="!valid">
            {{ status }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
export default {
  name: "new-get-started",

  props: ["scroller"],

  data() {
    return {
      passw: false,
      dialog: false,
      tab: "signin",
      errorMessages: "",
      errors: "",
      valid: false,
      register: {
        first_name: "",
        family_name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "United Arab Emirates",
        town: "Dubai",
        street: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        validEmail: (v) => /.+@.+/.test(v) || "Email address must be valid",
        confirmPassword: (v) =>
          v === this.register.password || "Password not match",
      },
      country: ["United Arab Emirates"],
      status: "Next",
      title: "Check Email Address",
    };
  },

  methods: {
    close() {
      this.dialog = false;
      this.status = "Next";
      this.title = "Check Email Address";
    },

    change_email() {
      this.status = "Next";
    },

    started() {
      this.$store.commit("USER_LOADER", true);

      if (this.status == "Next") {
        this.Check_email();
      }

      if (this.status == "Login") {
        this.Login();
      }

      if (this.status == "Register") {
        this.Create_account();
      }
    },

    Check_email() {
      this.$store
        .dispatch("CHECK_EMAIL", {
          email: this.register.email,
        })
        .then((result) => {
          if (result.data) {
            this.status = "Login";
            this.title = "Login";
          } else {
            this.status = "Register";
            this.title = "Register";
          }
        })
        .catch((err) => {});
    },

    Login() {
      this.$store
        .dispatch("LOGIN", {
          email: this.register.email,
          password: this.register.password,
        })
        .then((result) => {
          this.$store.commit("USER_LOADER", false);
          this.$store.dispatch("CURRENT_USER");
          window.location.href = "/";
          this.close();
        })
        .catch((err) => {
          this.$store.commit("USER_LOADER", false);
          console.log(err.response.data)
          this.errors = err;
        });
    },

    Create_account() {
      this.$store
        .dispatch("REGISTER", {
          first_name: this.register.first_name,
          family_name: this.register.family_name,
          username: this.register.username,
          role: "User",
          email: this.register.email,
          password: this.register.password,
          country: this.register.country,
          town: this.register.town,
          street: this.register.street,
        })
        .then((result) => {
          setTimeout(() => {
            this.Login();
          }, 1000);
        })
        .catch((err) => {
          this.$store.commit("USER_LOADER", false);
          this.errorMessages = err;
        });
    },
  },
};
</script>
