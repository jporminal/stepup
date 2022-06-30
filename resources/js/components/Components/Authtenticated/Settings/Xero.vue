<template>
  <div>
    <snackbar />
    <manage_xero />
  </div>
</template>
<script>
export default {
  name: "xero-setup",

  components: {
    manage_xero: () => import("./Xero/Manage"),
    snackbar: () => import("../../Snackbar/Global_view"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Xero",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
