<template>
  <div>
    <my_view />
  </div>
</template>
<script>
export default {
  name: "my-orders",

  components: {
    my_view: () => import("./Orders/My_view"),
  },

  created() {
    this.$store.commit("RECEIPT_LOADING", true);
    this.$store.dispatch("MY_ORDERS", this.$store.state.Orders.paginate);
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Orders",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
