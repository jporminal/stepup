<template>
  <v-dialog
    v-model="$store.state.Carts.process"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <my_sua_terms_condition />
      <my_form />
      <v-toolbar color="blue lighten-2" dark flat>
        <v-row>
          <v-col class="d-flex justify-space-around">
            <v-toolbar-title>
              <p class="title">SUA Terms &amp; Conditions</p>
            </v-toolbar-title>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-card-text>
        <v-checkbox v-model="$store.state.Carts.sua_terms" class="my-0">
          <template v-slot:label>
            <div>
              Onsite Classes
              <v-btn @click="sua_terms" text class="text-none">
                View Terms &amp; Conditions
              </v-btn>
            </div>
          </template>
        </v-checkbox>
<!--          <v-divider></v-divider>-->
<!--          <p>Are you enrolling a new student?</p>-->
<!--          <v-radio-group v-model="new_student" row @change="clearEmail">-->
<!--              <v-radio label="No" :value="false"></v-radio>-->
<!--              <v-radio label="Yes" :value="true"></v-radio>-->
<!--          </v-radio-group>-->

        <v-divider></v-divider>
        <p>Have you filled out our Online Enrollment form?</p>
        <v-radio-group v-model="filled_up_form" row @change="clearEmail">
          <v-radio label="No" :value="false"></v-radio>
          <v-radio label="Yes" :value="true"></v-radio>
        </v-radio-group>
        <v-form v-model="valid" @submit.prevent="proceed" v-if="filled_up_form">
          <v-text-field
            label="Enter Email Address"
            v-model="email"
            prepend-icon="mdi-email"
            :rules="emailRules"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="text-none success"
          @click="proceed"
          :disabled="
            (filled_up_form && !valid) || !$store.state.Carts.sua_terms
          "
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "cart-process",

  data() {
    return {
      email: null,
      emailRules: [(v) => /.+@.+/.test(v) || "E-mail must be valid"],
      valid: false,
      filled_up_form: false,
        new_student:false
    };
  },

  components: {
    my_sua_terms_condition: () => import("./Terms/Sua"),
    my_form: () => import("./Forms/Enrollment"),
  },

  methods: {
    clearEmail() {},
    proceed() {
      if (this.filled_up_form) {
        this.$store
          .dispatch("FILTER_CART_PARENT_EMAIL", {
            email: this.email,
          })
          .then((result) => {
            console.log(result);
            if (result.data) {
              this.$store.commit("PARENT", result.data.mom);
              this.$store.commit("CHILD", result.data.children);
              localStorage.setItem("parent", JSON.stringify(result.data.mom));
              localStorage.setItem(
                "children",
                JSON.stringify(result.data.children)
              );
              this.$router.push("/checkout");
              this.close();
            } else {
              this.$store.commit("CART_ENROLLMENT_FORM", true);
            }
          });
      } else {
        this.$store.commit("CART_ENROLLMENT_FORM", true);
      }
    },
    close() {
      this.$store.commit("CART_PROCESS", false);
    },

    sua_terms() {
      this.$store.commit("TERMS_OPEN", true);
    },
  },
};
</script>
