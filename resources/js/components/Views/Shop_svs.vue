<template>
  <v-container fluid>
    <snackbar />
    <product_details v-if="$store.state.Svs.open" />
    <v-row align="start" justify="start">
      <v-col cols="12">
        <h1 class="text-center">{{ $store.state.Date_ranges.store_setup.svs_lesson_text.value }}</h1>
      </v-col>

      <!-- <v-col
        cols="12"
      >
        <p class="text-h4 text-center"> Due to the current situation, not all classes are running as scheduled. Therefore please contact us directly for more information <a href="tel:044534360"> 04 4534360 </a> </p>
      </v-col> -->
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
    product_main: () => import("../Components/Shops/Svs/Main"),
    product_filter: () => import("../Components/Shops/Svs/Side"),
    product_details: () => import("../Components/Shops/Svs/Details"),
    snackbar: () => import("../Components/Snackbar/Global_view"),
  },

  created() {
    this.init();
    this.$store.dispatch('STORE_SETUP');
  },

  methods: {
    init() {
      this.$store.dispatch(
        "SVS_CITIES",
        this.$store.state.Svs.product_filter
      );
    },
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - South View School Schedules",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
