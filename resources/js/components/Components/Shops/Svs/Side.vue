<template>
  <v-card>
    <v-toolbar color="blue lighten-2" dark>
      <v-toolbar-title> Select Filter </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-radio-group v-model="filter">
        <v-radio
          v-for="(category, index) in $store.state.Svs
            .product_categories"
          :key="index"
          @change="selected_filter(category.id)"
          :label="category.name"
          :value="category.id"
        ></v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "product-filter",

  data() {
    return {
      filter: null,
    };
  },

  methods: {
    selected_filter(e) {
        var filter = {
        filter: e,
        page: 1,
        per_page: 12,
      };
      this.$store.commit("SVS_FILTER", filter);
      this.$store.dispatch(
        "SVS_CITIES",
        this.$store.state.Svs.product_filter
      );
    },
  },
};
</script>
