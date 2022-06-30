<template>
  <div>
    <my_location_report_filter />
    <my_location_report_view />
  </div>
</template>
<script>
export default {
  name: "location-reports",

  components: {
    my_location_report_filter: () => import("./Location_reports/Filter"),
    my_location_report_view: () => import("./Location_reports/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Location Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
