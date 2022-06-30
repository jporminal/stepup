<template>
  <div>
    <v-dialog
      v-model="$store.state.Carts.enrollment_form"
      width="1000"
      @click:outside="close"
    >
      <v-card>
        <v-toolbar color="blue lighten-2" dark flat>
          <v-row>
            <v-col class="d-flex justify-space-around">
              <v-toolbar-title>
                <p class="title">Enrollment Form</p>
              </v-toolbar-title>
            </v-col>
          </v-row>
        </v-toolbar>
        <my_enrollment_form />
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "cart-enrollment-form",

  methods: {
    close() {
      this.$store.commit("CART_ENROLLMENT_FORM", false);
    },
  },

  components: {
    my_enrollment_form: () => import("../../../Views/EnrollmentForm"),
  },
};
</script>
