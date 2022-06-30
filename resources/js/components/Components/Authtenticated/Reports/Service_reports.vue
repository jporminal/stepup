<template>
  <div>
    <my_service_report_filter />
    <my_service_report_view />
  </div>
</template>
<script>
export default {
  name: "service-reports",

  components: {
    my_service_report_filter: () => import("./Service_reports/Filter"),
    my_service_report_view: () => import("./Service_reports/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Service Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
