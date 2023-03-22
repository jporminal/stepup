<template>
  <v-dialog
    width="1000px"
    v-model="$store.state.Carts.camps"
    persistent
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-row>
          <v-col class="d-flex justify-space-around">
            <v-toolbar-title>
              <p class="title">REGISTRATION FORM</p>
            </v-toolbar-title>
          </v-col>
        </v-row>
      </v-toolbar>
      <p class="text-h6 text-center mt-2">
        Spring Camp <br />
        (March 27 to April 7)
      </p>
      <!-- <p class="text-h6 text-center mt-2">
        Winter Wonderland Multi-Skills Camp <br />
        (13<sup>th</sup>– 30<sup>th</sup> December 2020)
      </p> -->

      <v-form ref="form" v-model="valid">
        <v-card flat>
          <v-card-text>
            <template
              v-for="(item, index) in $store.state.Enrollments.enrollment
                .children"
            >
              <div :key="index">
                <v-subheader class="title">
                  Student {{ index + 1 }} Details
                </v-subheader>
                <v-row align="center" justify="center">
                  <v-col cols="12" md="5">
                    <v-text-field
                      label="First Name"
                      v-model="item.first_name"
                      :rules="[rules.required]"
                    />
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-text-field
                      label="Family Name"
                      v-model="item.family_name"
                      :rules="[rules.required]"
                    />
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-text-field
                      label="Age"
                      :value="item.dob == null ? 0 : $age(item.dob)"
                      readonly
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
                          :rules="[(v) => !!v || 'Date of birth is required']"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="item.dob"
                        @input="item.dob_open = false"
                        @change="get_age"
                        :max="min_date"
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
                      :rules="[rules.required]"
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
            <div class="text-right">
              <v-btn class="text-none success" @click="add"> Add Child</v-btn>
            </div>
            <v-subheader class="title"> Mum's Details </v-subheader>
            <v-row align="center" justify="center">
              <v-col cols="12" md="5">
                <v-text-field
                  label="First Name"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.first_name
                  "
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Family Name"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.family_name
                  "
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Email Address"
                  v-model="$store.state.Enrollments.enrollment.mother.email"
                  :rules="[rules.email]"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Contact Number"
                  v-model="
                    $store.state.Enrollments.enrollment.mother.home_number
                  "
                  :rules="[rules.required]"
                  type="number"
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
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Family Name"
                  v-model="
                    $store.state.Enrollments.enrollment.father.family_name
                  "
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Email Address"
                  v-model="$store.state.Enrollments.enrollment.father.email"
                  :rules="[rules.email]"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Contact Number"
                  v-model="
                    $store.state.Enrollments.enrollment.father.home_number
                  "
                  :rules="[rules.required]"
                  type="number"
                />
              </v-col>
            </v-row>
            <v-subheader class="title"> Emergency Contact </v-subheader>
            <v-row align="center" justify="center">
              <v-col cols="12" md="5">
                <v-text-field
                  label="First Name"
                  v-model="
                    $store.state.Enrollments.enrollment.emergency.person_1
                      .first_name
                  "
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Family Name"
                  v-model="
                    $store.state.Enrollments.enrollment.emergency.person_1
                      .family_name
                  "
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Contact Number"
                  v-model="
                    $store.state.Enrollments.enrollment.emergency.person_1
                      .contact_1
                  "
                  type="number"
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="Relationship"
                  v-model="
                    $store.state.Enrollments.enrollment.emergency.person_1
                      .relation
                  "
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- <v-card-text>
          <v-data-table :headers="headers" :items="items" hide-default-footer />
          <br />
          <br />
          <div v-html="tcs_camps"></div>
        </v-card-text> -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="success" :disabled="!valid" @click="save">
            I Agree
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "terms-and-conditions-products",

  data() {
    return {
      min_date: new Date().toJSON().slice(0, 10),
      rules: {
        required: (v) => !!v || "required field",
        email: (v) => /.+@.+/.test(v) || "E-mail must be valid",
      },
      valid: false,
      item_combos: ["Yes", "No"],
      medications: "Yes",
      details: "",
      open: false,
      headers: [
        { text: "TIMINGS", value: "timings" },
        { text: "DAILY", value: "daily" },
        { text: "FULL CAMP", value: "full" },
      ],
      tcs_camps: `

            <center>
            <h3><u>TERMS & CONDITIONS</u></h3>
            I waive that any program such as Winter workshops/ Multi-Skills Camp and its affiliated programs which involve movement and motion can result in physical injury. I permit my child to participate in the above-mentioned selected program and StepUp Academy, its owners, employees, instructors and staff from all liability for injury to my child from his/her participation in this program. Furthermore, I agree to allow StepUp Academy to use the name and likeness in photographs and/or video of my child for advertising and promotional purposes without compensation and without prior notification.
            <br><br>
            I am aware that there are live CCTV recordings going on, however they are not available to view unless there is a situation which occurs, where the CCTV will be reviewed. Showing of the CCTV footage to myself will only be possible should I go through the correct authorities.
            </center>`,
    };
  },

  created() {
    var form = {
      location: "Motor City",
      children: [
        {
          first_name: null,
          family_name: null,
          nationality: null,
          age: 0,
          gender: "Female",
          dob: null,
          dob_open: false,
          medical_status: true,
          medical_history: null,
        },
      ],
      mother: {
        first_name: null,
        family_name: null,
        nationality: null,
        home_number: null,
        mobile_number: null,
        work_number: null,
        company: null,
        email: null,
      },
      father: {
        first_name: null,
        family_name: null,
        nationality: null,
        home_number: null,
        mobile_number: null,
        work_number: null,
        company: null,
        email: null,
      },
      address: {
        development: null,
        street: null,
        building: null,
        landmark: null,
        POBox: null,
        emirate: null,
        same: true,
      },
      medical: {
        allergies: false,
        textallergies: null,
        respiratory: false,
        textrespiratory: null,
        physical: false,
        textphysical: null,
        vision: false,
        textvision: null,
        hearing: false,
        texthearing: null,
        otherhealth: false,
        textotherhealth: null,
      },
      prescription: {
        antiseptic: true,
        textantiseptic: null,
        plasters: true,
        textplasters: null,
        insectbite: true,
        textinsectbite: null,
        firstaid: true,
        textfirstaid: null,
        calpol: true,
        textcalpol: null,
        ice: true,
        textice: null,
      },
      emergency: {
        person_1: {
          first_name: null,
          family_name: null,
          contact_1: null,
          contact_2: null,
          contact_3: null,
          relation: null,
        },
        person_2: {
          first_name: null,
          family_name: null,
          contact_1: null,
          contact_2: null,
          contact_3: null,
          relation: null,
        },
      },
    };
    this.$store.commit("ENROLLMENT", form);
  },

  methods: {
    add() {
      var form = {
        first_name: null,
        family_name: null,
        nationality: null,
        age: 0,
        gender: "Female",
        dob: null,
        dob_open: false,
        medical_status: true,
        medical_history: null,
      };
      this.$store.state.Enrollments.enrollment.children.push(form);
      this.$store.commit(
        "ENROLLMENT",
        this.$store.state.Enrollments.enrollment
      );
    },
    save() {
      this.$store
        .dispatch("ENROLLMENT", {
          form: this.$store.state.Enrollments.enrollment,
        })
        .then((result) => {
          this.$store.commit("PARENT", result.data.mom);
          this.$store.commit("CHILD", result.data.children);
          localStorage.setItem("parent", JSON.stringify(result.data.mom));
          localStorage.setItem(
            "children",
            JSON.stringify(result.data.children)
          );
          localStorage.setItem(
            "camp_form",
            JSON.stringify(this.$store.state.Enrollments.enrollment)
          );

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
            text: "Thank you for using our online camps form",
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.$store.commit("ENROLLMENT", {});
          this.$store.commit("CART_CAMP_FORM", false);
          this.$router.push("/checkout");
        });
    },
    close() {
      this.$store.commit("CART_CAMP_FORM", false);
      this.$store.commit("ENROLLMENT", {});
    },
    get_age(e) {
      let currentDate = new Date();
      let birthDate = new Date(e);
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      this.$store.state.Enrollments.enrollment.children.age = age;
    },
  },
  computed: {
    enrollment() {
      var child = {
        child: {
          dateofbirth: new Date().toJSON().slice(0, 10),
          age: 0,
          firstname: "",
          lastname: "",
          gender: "",
          nationality: "",
          is_medicine: "Yes",
          medical_details: "",
        },
      };

      return Object.assign(this.$store.state.EnrollmentForm, child);
    },

    cart() {
      return this.$store.state.cart;
    },

    grand_total() {
      return this.cart.reduce((total, product) => {
        return total + Number(product.product_option.total_incl);
      }, 0);
    },
  },
};
</script>
