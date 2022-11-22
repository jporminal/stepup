<template>
  <div>
    <my_teacher_report_filter />
    <my_teacher_report_view />
  </div>
</template>
<script>
export default {
  name: "teacher-sales-reports",

  components: {
    my_teacher_report_filter: () => import("./Teacher_reports/Filter"),
    my_teacher_report_view: () => import("./Teacher_reports/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Teacher Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>

