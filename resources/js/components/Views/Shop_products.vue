<template>
  <v-container fluid>
    <snackbar />
    <product_details v-if="$store.state.Products.open" />
    <v-row align="start" justify="start">
      <v-col cols="12">
        <h1 class="text-center">Uniforms</h1>
      </v-col>
      <v-col cols="12" md="3"> <product_filter /> </v-col>
      <v-col cols="12" md="9">
        <product_main />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "shop-products",

  components: {
    product_main: () => import("../Components/Shops/Uniforms/Main"),
    product_filter: () => import("../Components/Shops/Uniforms/Side"),
    product_details: () => import("../Components/Shops/Uniforms/Details"),
    snackbar: () => import("../Components/Snackbar/Global_view"),
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.$store.dispatch(
        "PRODUCTS",
        this.$store.state.Products.product_filter
      );
    },
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Shop Products",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
