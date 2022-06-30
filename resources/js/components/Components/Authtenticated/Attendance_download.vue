<template>
  <div>
    <my_attendance_filter />
    <my_attendance_view />
  </div>
</template>
<script>
export default {
  name: "attendance",

  components: {
    my_attendance_filter: () => import("./Attendance/Download/Filter"),
    my_attendance_view: () => import("./Attendance/Download/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Download Attendance",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
