<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600" persistent @click:outside="close">
      <template v-slot:activator="{ on }">
        <v-btn
          :dark="$route.name == 'Home' && !scroller"
          class="text-none"
          text
          v-on="on"
        >
          Get Started
        </v-btn>
      </template>

      <v-card :loading="$store.state.Users.loading">
        <v-tabs
          v-model="tab"
          color="blue lighten-4"
          slider-color="white"
          background-color="blue"
          fixed-tabs
        >
          <v-tabs-slider color="blue darken-4" />
          <v-tab href="#signin">
            <div class="white--text text-none">Sign in</div>
          </v-tab>
          <v-tab href="#register">
            <div class="white--text text-none">Register</div>
          </v-tab>
        </v-tabs>

        <v-card-text>
          <v-tabs-items v-model="tab">
            <!-- sign in -->
            <v-tab-item value="signin">
              <v-card flat>
                <v-form ref="form" @submit.prevent="login">
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-card-text>
                          <v-alert
                            v-show="errors"
                            :value="true"
                            color="error"
                            class="mb-5"
                          >
                            {{ errors }}
                          </v-alert>
                          <v-text-field
                            label="Email Address"
                            v-model="register.email"
                          />
                          <v-text-field
                            label="password"
                            v-model="register.password"
                            :append-icon="passw ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="passw ? 'text' : 'password'"
                            @click:append="passw = !passw"
                          />

                          <a href="/reset-password"> Reset Password </a>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                            class="danger text-none"
                            @click="close"
                            v-text="`Close`"
                          />
                          <v-spacer />
                          <v-btn
                            class="primary text-none"
                            type="submit"
                            @click="login"
                            v-text="`Signin`"
                          />
                        </v-card-actions>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card>
            </v-tab-item>
            <!-- register -->
            <v-tab-item value="register">
              <v-card flat>
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
                <v-form ref="form" v-model="valid">
                  <v-card-text>
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
                    <v-btn
                      class="danger text-none"
                      @click="close"
                      v-text="`Close`"
                    />
                    <v-spacer />
                    <v-btn
                      class="primary text-none"
                      :disabled="!valid"
                      @click="create_account"
                      v-text="`Register`"
                    />
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "login-register",

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
    };
  },

  methods: {
    close() {
      this.dialog = false;
    },

    login() {
      this.$store.commit("USER_LOADER", true);

      this.$store
        .dispatch("LOGIN", {
          email: this.register.email,
          password: this.register.password,
        })
        .then((result) => {
          this.$store.commit("USER_LOADER", false);
          this.$store.dispatch("CURRENT_USER");
          this.$router.push("/");
          this.close();
        })
        .catch((err) => {
          this.$store.commit("USER_LOADER", false);
          this.errors = err;
        });
    },

    create_account() {
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
          this.login();
        })
        .catch((err) => {
          this.$store.commit("USER_LOADER", false);
          this.errorMessages = err;
        });
    },
  },
};
</script>
