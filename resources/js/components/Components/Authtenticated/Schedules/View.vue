<template>
  <v-card>
    <v-row>
      <v-col>
        <v-sheet height="80">
          <v-spacer></v-spacer>
          <v-container>
            <v-row class="d-flex flex-row-reverse">
              <v-col cols="12" md="4">
                <v-select
                  v-model="$store.state.Schedules.schedule_filter.date_range"
                  :items="$store.state.Schedules.date_ranges"
                  label="Select Date Range"
                  @change="update_filter"
                ></v-select>
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="venue"
                  :items="$store.state.Venues.venues"
                  label="Select Venue"
                  @change="selected_venue"
                  item-value="vid"
                  item-text="venuename"
                ></v-select>
              </v-col>

              <v-col cols="12" md="2">
                <v-select v-model="type" :items="types" label="Mode">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
          </v-toolbar>
        </v-sheet>

        <v-sheet height="800">
          <v-calendar
            ref="calendar"
            color="primary"
            event-overlap-mode="column"
            event-overlap-threshold="60"
            :now="today"
            v-model="today"
            :events="events"
            :event-color="getEventColor"
            :interval-minutes="15"
            :first-interval="31"
            :interval-count="55"
            type="day"
            @change="updateRange"
            @click:event="showEvent"
          ></v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    today: new Date().toISOString().slice(0, 10),
    type: "month",
    types: ["month", "week", "day"],
    venue: 0,
  }),

  mounted() {
    this.$refs.calendar.checkChange();
  },

  methods: {
    showEvent(e) {
      this.$store.dispatch("SCHEDULE_DETAILS", e.event.schedule_id);
    },
    getEventColor(event) {
      return event.color;
    },

    selected_venue() {
      this.$store.dispatch("FILTER_DATERANGE", this.venue);
    },

    prev() {
      this.$refs.calendar.prev();
      setTimeout(() => {
        this.init();
      }, 500);
    },
    next() {
      this.$refs.calendar.next();
      setTimeout(() => {
        this.init();
      }, 500);
    },
    calType(e) {
      this.type = e;
    },
    init() {
      this.$store.dispatch("SCHEDULES", {
        start: this.$store.state.Schedules.schedule_filter.start_date,
        end: this.$store.state.Schedules.schedule_filter.end_date,
        date_range: this.$store.state.Schedules.schedule_filter.date_range,
      });
    },
    updateRange({ start, end }) {
      this.$store.state.Schedules.schedule_filter.start_date = start.date;
      this.$store.state.Schedules.schedule_filter.end_date = end.date;
      this.$store.commit(
        "SCHEDULE_FILTER",
        this.$store.state.Schedules.schedule_filter
      );
    },
    update_filter() {
      this.$store.commit(
        "SCHEDULE_FILTER",
        this.$store.state.Schedules.schedule_filter
      );

      this.init();
    },
  },

  computed: {
    events() {
      return this.$store.state.Schedules.schedules;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-calendar .v-event-timed {
  position: absolute;
  overflow: hidden;
  white-space: "break-spaces" !important;
  text-overflow: ellipsis;
  font-size: 10px;
  cursor: pointer;
  border-radius: 4px;
  pointer-events: all;
}
</style>
