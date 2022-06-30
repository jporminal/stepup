<template>
  <div>
    <snackbar />
    <my_location />
  </div>
</template>
<script>
export default {
  name: "settings-locations",

  components: {
    my_location: () => import("./Locations/View"),
    snackbar: () => import("../../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Locations",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
