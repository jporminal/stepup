<template>
  <div>
    <snackbar />
    <manage_week_days />
  </div>
</template>
<script>
export default {
  name: "manage-week-days",

  components: {
    manage_week_days: () => import("./Week_days/View"),
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
