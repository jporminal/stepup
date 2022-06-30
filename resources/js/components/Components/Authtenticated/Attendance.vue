<template>
  <div>
    <snackbar />
    <my_attendance />
  </div>
</template>
<script>
export default {
  name: "attendance",

  components: {
    my_attendance: () => import("./Attendance/Attendance/View"),
    snackbar: () => import("../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Attendance",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
