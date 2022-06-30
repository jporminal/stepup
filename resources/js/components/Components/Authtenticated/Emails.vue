<template>
  <div><my_email_filter /> <my_email_view /></div>
</template>
<script>
export default {
  name: "email-parent",

  components: {
    my_email_filter: () => import("./Email/Filter"),
    my_email_view: () => import("./Email/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Email",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
