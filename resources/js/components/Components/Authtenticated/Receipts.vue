<template>
  <div>
    <snackbar />
    <my_receipts />
  </div>
</template>
<script>
export default {
  name: "Receipts",

  components: {
    my_receipts: () => import("./Receipts/View.vue"),
    snackbar: () => import("../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Receipts",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
