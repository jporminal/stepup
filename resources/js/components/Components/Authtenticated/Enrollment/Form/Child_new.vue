<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="First name"
              v-model="
                $store.state.Enrollments.enrollment_child.child.first_name
              "
              @input="text_input"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Family name"
              v-model="
                $store.state.Enrollments.enrollment_child.child.family_name
              "
              @input="text_input"
            />
          </v-col>
          <v-col cols="6">
            <v-select
              label="Gender"
              :items="gender"
              v-model="$store.state.Enrollments.enrollment_child.child.gender"
              @input="text_input"
            />
          </v-col>
          <v-col cols="6">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="$store.state.Enrollments.enrollment_child.child.dob"
                  label="Picker without buttons"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="$store.state.Enrollments.enrollment_child.child.dob"
                @input="menu = false"
                :max="new Date().toISOString().substr(0, 10)"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Nationality"
              v-model="
                $store.state.Enrollments.enrollment_child.child.nationality
              "
              @input="text_input"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "child-form",

  data() {
    return {
      menu: false,
      gender: ["Male", "Female"],
    };
  },

  methods: {
    text_input() {
      this.$store.commit(
        "ENROLLMENT_CHILD",
        this.$store.state.Enrollments.enrollment_child
      );
    },
  },
};
</script>
