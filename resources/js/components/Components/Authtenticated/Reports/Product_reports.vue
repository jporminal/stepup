<template>
  <div>
    <my_product_report_filter />
    <my_product_report_view />
  </div>
</template>
<script>
export default {
  name: "product-reports",

  components: {
    my_product_report_filter: () => import("./Product_reports/Filter"),
    my_product_report_view: () => import("./Product_reports/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s -Product Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
