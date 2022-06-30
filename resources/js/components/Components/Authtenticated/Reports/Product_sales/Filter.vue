<template>
  <v-card class="d-print-none">
    <v-row>
      <v-col cols="12" md="5">
        <v-date-picker
          v-model="$store.state.Reports.product_sale_filter.dates"
          range
          full-width
        ></v-date-picker>
      </v-col>
      <v-col cols="12" md="6">
        <v-card flat>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-h6 text-center">Date: {{ date_title }}</div>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="$store.state.Products.my_products"
                  item-text="product"
                  item-value="id"
                  v-model="$store.state.Reports.product_sale_filter.products"
                  multiple
                  label="Select Product"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="text-none primary"
              :disabled="
                $store.state.Reports.product_sale_filter.dates.length > 1
                  ? false
                  : true
              "
              @click="filter"
              >Filter</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-card>
</template>
<script>
export default {
  name: "filter-report",

  created() {
    this.$store.dispatch("MY_PRODUCTS");
  },

  data() {
    return {
      form: {
        dates: [],
        location: 0,
        lessons: [],
        teacher: 0,
        enrolled: 1,
      },
    };
  },

  methods: {
    filter() {
      this.$store.commit(
        "PRODUCT_SALE_FILTER",
        this.$store.state.Reports.product_sale_filter
      );
      this.$store.dispatch("PRODUCT_SALES", {
        form: this.$store.state.Reports.product_sale_filter,
      });
    },
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.product_sale_filter.dates.join(" ~ ");
    },
  },
};
</script>
