<template>
  <div>
    <my_service_report_filter />
    <my_service_report_view />
  </div>
</template>
<script>
export default {
  name: "other-service-reports",

  components: {
    my_service_report_filter: () => import("./Other_services/Filter"),
    my_service_report_view: () => import("./Other_services/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Other Service Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
 