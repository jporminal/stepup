<template>
  <v-container fluid>
    <snackbar />
    <product_details v-if="$store.state.Camps.open" />
    <v-row align="center" justify="center">
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
    product_main: () => import("../Components/Shops/Camps/Summer_item"),
    product_details: () => import("../Components/Shops/Camps/Details"),
    snackbar: () => import("../Components/Snackbar/Global_view"),
  },

  created() {
    // this.init();
    this.$store.dispatch('STORE_SETUP');
  },

  methods: {
    init() {
      this.$store.dispatch("CAMPS", this.$store.state.Camps.product_filter);

    },
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Camps",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
