<template>
  <div>
      <snackbar />
    <my_students />
  </div>
</template>
<script>
export default {
  name: "students",

  components: {
    my_students: () => import("./Students/View"),
    snackbar: () => import("../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Students",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
