<template>
  <v-card class="d-print-none">
    <v-card-text>
      <v-date-picker
        v-model="$store.state.Reports.location_report_filter.dates"
        range
        full-width
      ></v-date-picker>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        class="text-none primary"
        :disabled="
          $store.state.Reports.location_report_filter.dates.length > 1
            ? false
            : true
        "
        @click="filter"
        >Filter</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "filter-report",

  methods: {
    filter() {
      this.$store.commit(
        "LOCATION_REPORT_FILTER",
        this.$store.state.Reports.location_report_filter
      );
      this.$store.dispatch("LOCATION_REPORTS", {
        dates: this.$store.state.Reports.location_report_filter.dates,
      });
    },
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.location_report_filter.dates.join(" ~ ");
    },
  },
};
</script>
