<template>
  <div>
    <v-card>
      <snackbar />
      <v-container>
        <v-row>
          <v-col cols="12"> <my_view /> </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "enrollment",

  components: {
    my_view: () => import("./Enrollment/View"),
    snackbar: () => import("../Snackbar/Global_view"),
  },

  created() {
    this.$store.dispatch("PARENT", this.$store.state.Enrollments.paginate);
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Enrollment",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
