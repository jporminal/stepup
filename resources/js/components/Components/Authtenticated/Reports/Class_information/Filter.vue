<template>
  <v-card class="d-print-none">
    <v-row>
      <v-col cols="12" md="5">
        <v-date-picker
          v-model="$store.state.Reports.class_information_filter.dates"
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
                  :items="$store.state.Schedules.setting_details.date_ranges"
                  item-text="daterangename"
                  item-value="drid"
                  v-model="$store.state.Reports.class_information_filter.term"
                  label="Select Term"
                />
              </v-col>
              <!-- <v-col cols="12">
                <v-autocomplete
                  :items="$store.state.Schedules.setting_details.locations"
                  item-text="venuename"
                  item-value="vid"
                  v-model="
                    $store.state.Reports.class_information_filter.location
                  "
                  label="Select Location"
                />
              </v-col> -->
              <v-col cols="12">
                <v-autocomplete
                  :items="$store.state.Schedules.setting_details.lessons"
                  item-text="classname"
                  item-value="classid"
                  v-model="
                    $store.state.Reports.class_information_filter.lessons
                  "
                  multiple
                  label="Select Lessons"
                />
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="$store.state.Schedules.setting_details.teachers"
                  item-text="staffname"
                  item-value="sid"
                  v-model="
                    $store.state.Reports.class_information_filter.teacher
                  "
                  label="Select Teacher"
                />
              </v-col>
              <v-col cols="12">
                <v-switch
                  v-model="
                    $store.state.Reports.class_information_filter.enrolled
                  "
                  label="Enrolled Student"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="text-none primary"
              :disabled="
                $store.state.Reports.class_information_filter.dates.length > 1
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
        "CLASS_INFORMATION_FILTER",
        this.$store.state.Reports.class_information_filter
      );
      this.$store.dispatch("CLASS_INFORMATION", {
        form: this.$store.state.Reports.class_information_filter,
      });
    },
  },

  computed: {
    date_title() {
      return this.$store.state.Reports.class_information_filter.dates.join(
        " ~ "
      );
    },
  },
};
</script>
