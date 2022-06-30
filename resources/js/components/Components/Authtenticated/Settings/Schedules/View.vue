<template>
  <div>
    <edit_schedule v-if="$store.state.Schedules.schedule_open" />
    <v-card>
      <v-toolbar color="blue lighten-2" class="white--text" flat>
        <v-toolbar-title> Schedules </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          @input="filter"
          v-model="$store.state.Enrollments.enrollment_schedule_filter.filter"
          label="Filter Schedule"
          class="mt-6"
          solo
        />
      </v-toolbar>
      <v-card
        :loading="$store.state.Attendance.loading"
        flat
      >
        <center>
            <v-list>
            <v-list-item>
                <v-list-item-avatar width="30%" class="font-weight-bold"
                ><p>Term</p></v-list-item-avatar
                >
                <v-list-item-avatar width="30%" class="font-weight-bold"
                >Lesson</v-list-item-avatar
                >
                <v-list-item-avatar width="20%" class="font-weight-bold"
                >Day</v-list-item-avatar
                >
                <v-list-item-avatar width="20%" class="font-weight-bold"
                >Time</v-list-item-avatar
                >
                <v-list-item-avatar width="10%" class="font-weight-bold"
                >Teacher</v-list-item-avatar
                >
                <v-list-item-avatar width="8%" class="font-weight-bold"
                >#studs</v-list-item-avatar
                >
                <v-list-item-avatar width="17%"></v-list-item-avatar>
            </v-list-item>
            <v-list-item
                v-for="(item, index) in $store.state.Enrollments.enrollment_schedule
                .data"
                :key="index"
            >
                <v-list-item-avatar tile width="30%" height="60px">
                <p>{{ item.term }}</p>
                </v-list-item-avatar>
                <v-list-item-avatar tile width="30%">
                <p>{{ item.lesson }}</p>
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%" v-html="item.day" />
                <v-list-item-avatar tile width="20%">
                {{ item.start_time }} - {{ item.end_time }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                {{ item.teacher }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="8%">
                {{ item.total_students }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="17%">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                        <v-icon @click="edit(item.id)" v-on="on" v-bind="attrs">
                            mdi-pencil
                        </v-icon>
                        </template>
                        <span> Edit {{ item.lesson }} </span>
                    </v-tooltip>
                    <v-tooltip bottom v-if="item.total_students === 0">
                        <template v-slot:activator="{ on, attrs }">
                        <v-icon @click="del(item.id)" v-on="on" v-bind="attrs" color="red">
                            mdi-trash-can
                        </v-icon>
                        </template>
                        <span> Delete {{ item.lesson }} </span>
                    </v-tooltip>
                </v-list-item-avatar>
            </v-list-item>
            </v-list>
        </center>
      </v-card>
      <v-card-actions>
        <v-btn icon outlined class="error" dark x-large @click="add">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-pagination
          @input="channel"
          v-model="$store.state.Enrollments.enrollment_schedule.current_page"
          :length="$store.state.Enrollments.enrollment_schedule.last_page"
          :total-visible="$vuetify.breakpoint.mdAndUp ? 10 : 5"
        ></v-pagination>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "attendance-view",

  components: {
    edit_schedule: () => import("./Created"),
  },

  created() {
    this.pagination();
    this.$store.dispatch("SETTING_DETAILS");
  },

  methods: {
    pagination() {
        this.$store.commit('ATTENDANCE_LOADING', true)
      this.$store.dispatch(
        "ENROLLMENT_SCHEDULE",
        this.$store.state.Enrollments.enrollment_schedule_filter
      );
    },
    add() {
      var schedule = {
        scheduleid: 0,
        drid: 0,
        vid: 1,
        weekid: 1,
        scheduletimestart: "09:00",
        scheduletimeend: "10:00",
        sid: 1,
        schedulestudio: 1,
        classid: 1,
        schedulestudentlimit: 1,
        schedulenotes: "",
      };
      this.$store.commit("SCHEDULE", schedule);
      this.$store.commit("SCHEDULE_OPEN", true);
    },

    edit(e) {
      this.$store.dispatch("SCHEDULE", e);
    },

    del(e) {
        this.$store.dispatch('SCHEDULE_DELETE', e)
        .then((result) => {
            var snackbar = {
            snackbar: true,
            vertical: false,
            timeout: 2000,
            color: "blue lighten-2",
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: "Schedule successfully deleted!",
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.pagination()
        }).catch((err) => {
            var snackbar = {
            snackbar: true,
            vertical: false,
            timeout: 2000,
            color: "red",
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: "Error! Please reload the browser.",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },

    filter(e) {
      if (e.length > 2) {
        var filter = {
          filter: e,
          page: 1,
          per_page: 10,
        };
        this.$store.commit("ENROLLMENT_SCHEDULE_FILTER", filter);
        this.$store.dispatch(
          "ENROLLMENT_SCHEDULE_FILTER",
          this.$store.state.Enrollments.enrollment_schedule_filter
        );
      }

      if (e.length == 0) {
        var filter = {
          filter: null,
          page: this.$store.state.Enrollments.enrollment_schedule.current_page,
          per_page: this.$store.state.Enrollments.enrollment_schedule.per_page,
        };
        this.$store.commit("ENROLLMENT_SCHEDULE_FILTER", filter);
        this.$store.dispatch(
          "ENROLLMENT_SCHEDULE",
          this.$store.state.Enrollments.enrollment_schedule_filter
        );
      }
    },

    channel(e) {
        this.$store.commit('ATTENDANCE_LOADING', true)
      var filter = {
        filter: this.$store.state.Enrollments.enrollment_schedule_filter.filter,
        page: e,
        per_page: 10,
      };
      this.$store.commit("ENROLLMENT_SCHEDULE_FILTER", filter);
      if (this.$store.state.Enrollments.enrollment_schedule_filter.filter) {
        this.$store.dispatch(
          "ENROLLMENT_SCHEDULE_FILTER",
          this.$store.state.Enrollments.enrollment_schedule_filter
        );
      } else {
        this.$store.dispatch(
          "ENROLLMENT_SCHEDULE",
          this.$store.state.Enrollments.enrollment_schedule_filter
        );
      }
    },
  },
};
</script>
