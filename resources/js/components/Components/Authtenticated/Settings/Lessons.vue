<template>
  <div>
    <snackbar />
    <manage_lessons />
  </div>
</template>
<script>
export default {
  name: "manage-lessons",

  components: {
    manage_lessons: () => import("./Lessons/View"),
    snackbar: () => import("../../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Lessons",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
