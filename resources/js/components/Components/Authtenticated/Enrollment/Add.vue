<template>
  <v-dialog
    v-model="$store.state.Enrollments.enrollment_child_new"
    width="1200"
    @click:outside="close"
  >
    <v-card>
      <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
        <v-stepper v-model="$store.state.Enrollments.steps">
          <v-stepper-header>
            <v-stepper-step
              editable
              step="1"
              :complete="$store.state.Enrollments.steps > 1 ? true : false"
            >
              Child
            </v-stepper-step>
            <v-stepper-step
              editable
              step="2"
              :complete="$store.state.Enrollments.steps > 2 ? true : false"
            >
              Medical
            </v-stepper-step>
            <v-stepper-step
              editable
              step="3"
              :complete="
                $store.state.Enrollments.enrollment_steps > 3 ? true : false
              "
            >
              Non-prescription
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-content step="1">
            <my_child />
          </v-stepper-content>
          <v-stepper-content step="2">
            <my_medical />
          </v-stepper-content>
          <v-stepper-content step="3">
            <my_prescription />
          </v-stepper-content>
        </v-stepper>
      </v-card-text>
      <v-card-text v-else>
        <my_child />
        <my_medical />
        <my_prescription />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary text-none" @click="save"> Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "edit-child",

  components: {
    my_child: () => import("./Form/Child_new"),
    my_medical: () => import("./Form/Medical"),
    my_prescription: () => import("./Form/Prescription"),
  },

  methods: {
    save() {
      this.$store
        .dispatch("ENROLLMENT_SAVE_CHILD", {
          form: this.$store.state.Enrollments.enrollment_child,
        })
        .then((result) => {
          var snackbar = {
            snackbar: true,
            vertical: false,
            timeout: 2000,
            color: `${result.data == "success" ? "blue lighten-2" : "red"}`,
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: `${
              result.data == "success"
                ? "You have successfully save your child"
                : "First name and Family Name is required"
            }`,
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.close();
        })
        .catch((err) => {
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
              "Something went wrong. Please reload your browser or check your internet connection.",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },
    close() {
      this.$store.commit("ENROLLMENT_CHILD", {});
      this.$store.commit("ENROLLMENT_CHILD_NEW", false);
    },
  },
};
</script>
