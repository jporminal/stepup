<template>
  <div>
    <my_number_of_student_filter />

    <my_number_of_student_view />
  </div>
</template>
<script>
export default {
  name: "number-of-students",

  components: {
    my_number_of_student_filter: () => import("./Number_of_students/Filter"),
    my_number_of_student_view: () => import("./Number_of_students/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Number of Students Report",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
