<template>
  <div>
    <my_product_sale_filter />
    <my_product_sale_view />
  </div>
</template>
<script>
export default {
  name: "product-sales",

  components: {
    my_product_sale_filter: () => import("./Product_sales/Filter"),
    my_product_sale_view: () => import("./Product_sales/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Product Sale Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
