<template>
  <v-card class="d-print-none">
    <v-row>
      <v-col cols="12" md="5">
        <v-date-picker
          v-model="$store.state.Reports.teacher_report_filter.dates"
          range
          full-width
        ></v-date-picker>
      </v-col>
      <v-col cols="12" md="6">
        <v-card flat>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-h6 text-center">Dates: {{ date_title }}</div>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="$store.state.Schedules.setting_details.teachers"
                  item-text="staffname"
                  item-value="sid"
                  v-model="$store.state.Reports.teacher_report_filter.teacher_ids"
                  multiple
                  label="Select Teachers"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="text-none primary"
              :disabled="
                $store.state.Reports.product_report_filter.dates.length > 1
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
    this.$store.dispatch("SETTING_DETAILS");
  },

  methods: {
    filter() {
      this.$store.commit(
        "TEACHER_REPORT_FILTER",
        this.$store.state.Reports.teacher_report_filter
      );
      this.$store.dispatch("TEACHER_REPORTS", {
        dates: this.$store.state.Reports.teacher_report_filter.dates,
        teacher_ids: this.$store.state.Reports.teacher_report_filter.teacher_ids,
      });
    },
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.teacher_report_filter.dates.join(" ~ ");
    },
  },
};
</script>
