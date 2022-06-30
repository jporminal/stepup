<template>
  <div>
    <snackbar />
    <my_date_ranges />
  </div>
</template>
<script>
export default {
  name: "date-ranges",

  components: {
    my_date_ranges: () => import("./Date_ranges/View"),
    snackbar: () => import("../../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Date Ranges",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
