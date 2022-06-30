<template>
  <v-container fluid>
    <snackbar />
    <product_details v-if="$store.state.Urdangs.open" />
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="text-center"> {{$store.state.Date_ranges.store_setup.urdang_lesson_text.value}} </h1>
      </v-col>
      <v-col cols="12" md="9">
        <product_main />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "shop-adults",

  components: {
    product_main: () => import("../Components/Shops/Adult/Main"),
    product_details: () => import("../Components/Shops/Adult/Details"),
    snackbar: () => import("../Components/Snackbar/Global_view"),
  },

  created() {
    this.init();
    this.$store.dispatch('STORE_SETUP');
  },

  methods: {
    init() {
      this.$store.dispatch("URDANGS", this.$store.state.Urdangs.product_filter);
    },
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Adult Classes",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
