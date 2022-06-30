<template>
  <div>
    <snackbar />
    <my_parent />
  </div>
</template>
<script>
export default {
  name: "parent",

  components: {
    snackbar: () => import("../Snackbar/Global_view"),
    my_parent: () => import("./Parents/View.vue"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Parents",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
