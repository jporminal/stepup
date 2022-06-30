<template>
  <v-container fluid>
    <snackbar />
    <product_details v-if="$store.state.Akoya.open" />
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="text-center"> {{$store.state.Date_ranges.store_setup.akoya_lesson_text.value}} </h1>
      </v-col>
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
    product_main: () => import("../Components/Shops/Akoya/Main"),
    product_details: () => import("../Components/Shops/Akoya/Details"),
    snackbar: () => import("../Components/Snackbar/Global_view"),
  },

  created() {
    this.init();
    this.$store.dispatch('STORE_SETUP');
  },

  methods: {
    init() {
      this.$store.dispatch(
        "AKOYAS",
        this.$store.state.Akoya.product_filter
      );
    },
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Akoya School Schedules",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
