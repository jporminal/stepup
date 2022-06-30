<template>
  <div>
    <v-card :flat="$vuetify.breakpoint.mdAndUp ? true : false" class="mt-5">
      <v-card-title v-if="$vuetify.breakpoint.smAndDown">
        Child Information
      </v-card-title>

      <v-card-text>
        <v-form v-model="valid" ref="form">
          <template
            v-for="(child, index) in $store.state.Enrollments.enrollment
              .children"
          >
            <div :key="index">
              <p class="text-h6">Child {{ index + 1 }}</p>
              <v-row align="center" justify="center">
                <v-col cols="12" md="6">
                  <v-text-field
                    label="First Name"
                    v-model="child.first_name"
                    @input="input_text"
                    :rules="[(v) => !!v || 'First name is required']"
                    append-icon="*"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Family Name"
                    v-model="child.family_name"
                    @input="input_text"
                    :rules="[(v) => !!v || 'Family name is required']"
                    append-icon="*"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    label="Gender"
                    :items="genders"
                    v-model="child.gender"
                    @input="input_text"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-menu
                    ref="dob"
                    v-model="child.dob_open"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="child.dob"
                        label="Date"
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        prepend-icon="mdi-calendar"
                        append-icon="*"
                        :rules="[(v) => !!v || 'Date of birth is required']"
                        v-bind="attrs"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="child.dob"
                      no-title
                      @change="input_text"
                      :max="new Date().toISOString().substr(0, 10)"
                      @input="child.dob_open = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </div>
          </template>
        </v-form>
        <div class="text-right">
          <v-btn class="text-none success" @click="add"> Add Child </v-btn>
        </div>
      </v-card-text>
      <v-card-actions v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn @click="step(1)" class="text-none primary">
          <v-icon> mdi-menu-left </v-icon>
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="step(3)" class="text-none primary" :disabled="!valid">
          <v-icon> mdi-menu-right </v-icon>
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Student-Information",

  data() {
    return {
      dob_open: false,
      valid: false,
      genders: ["Male", "Female"],
    };
  },

  methods: {
    step(e) {
      this.$store.commit("STEPS", e);
    },
    add() {
      var child = {
        first_name: null,
        family_name: null,
        nationality: null,
        gender: "Female",
        dob: null,
        dob_open: false,
      };
      this.$store.state.Enrollments.enrollment.children.push(child);
      this.$store.commit(
        "ENROLLMENT",
        this.$store.state.Enrollments.enrollment
      );
    },
    input_text() {
      this.$store.commit(
        "ENROLLMENT",
        this.$store.state.Enrollments.enrollment
      );
    },
  },
};
</script>
