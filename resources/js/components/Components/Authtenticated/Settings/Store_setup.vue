<template>
  <div>
    <snackbar />
    <manage_week_days />
  </div>
</template>
<script>
export default {
  name: "store_setup",

  components: {
    manage_week_days: () => import("./Store_setup/Manage"),
    snackbar: () => import("../../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Weekdays",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
