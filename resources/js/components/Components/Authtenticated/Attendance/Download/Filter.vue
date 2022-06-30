<template>
  <v-card>
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-autocomplete
            v-model="sid"
            label="Select Teacher"
            :items="$store.state.Schedules.setting_details.teachers"
            item-text="staffname"
            item-value="sid"
          >
            <template v-slot:append-outer>
              <v-btn
                class="text-none primary"
                @click="filter"
                :loading="$store.state.Attendance.attendance_loading"
              >
                <v-icon>mdi-magnify</v-icon> Filter</v-btn
              >
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "filter-download-attendance",

  created() {
    this.$store.dispatch("SETTING_DETAILS");
  },

  data() {
    return {
      sid: 0,
    };
  },

  methods: {
    filter() {
      this.$store.commit("ATTENDANCE_DOWNLOAD_LOADING", true);
      this.$store.dispatch("ATTENDANCE_DOWNLOAD", this.sid);
    },
  },
};
</script>
