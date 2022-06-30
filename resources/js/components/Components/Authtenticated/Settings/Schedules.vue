<template>
  <div>
    <snackbar />
    <manage_schedules />
  </div>
</template>
<script>
export default {
  name: "manage-schedules",

  components: {
    manage_schedules: () => import("./Schedules/View"),
    snackbar: () => import("../../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Schedules",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
