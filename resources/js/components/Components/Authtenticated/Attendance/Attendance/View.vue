<template>
  <div>
    <manage_attendance v-if="$store.state.Attendance.attendance_open" />
    <v-card>
      <v-toolbar color="blue lighten-2" class="white--text" flat>
        <v-toolbar-title> Attendance </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          @input="filter"
          label="Filter Schedule"
          class="mt-6"
          solo
        />
      </v-toolbar>
      <v-card
        :loading="$store.state.Attendance.loading"
        flat
      >
          <v-list>
            <v-list-item three-line>
            <v-list-item-avatar tile width="30%" class="font-weight-bold">Term</v-list-item-avatar>
            <v-list-item-avatar tile width="20%" class="font-weight-bold"
                >Lesson</v-list-item-avatar
            >
            <v-list-item-avatar tile width="10%" class="font-weight-bold">Day</v-list-item-avatar>
            <v-list-item-avatar tile width="10%" class="font-weight-bold">Time</v-list-item-avatar>
            <v-list-item-avatar tile width="10%" class="font-weight-bold"
                >Teacher</v-list-item-avatar
            >
            <v-list-item-avatar tile width="10%" class="font-weight-bold">Number of students</v-list-item-avatar>
            <v-list-item-avatar tile width="15%"></v-list-item-avatar>
            </v-list-item>
            <v-list-item
            v-for="(item, index) in $store.state.Enrollments.enrollment_schedule
                .data"
            :key="index"
            >
            <v-list-item-avatar tile width="30%" height="60px" v-html="item.term" />
            <v-list-item-avatar tile width="20%" v-html="item.lesson" />
            <v-list-item-avatar tile width="10%" v-html="item.day" />
            <v-list-item-avatar tile width="10%">
                {{ item.start_time }} - {{ item.end_time }}
            </v-list-item-avatar>
            <v-list-item-avatar tile width="10%"> {{ item.teacher }} </v-list-item-avatar>
            <v-list-item-avatar tile width="10%"> {{ item.total_students }} </v-list-item-avatar>
            <v-list-item-avatar tile width="15%">
                <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon @click="view_attendance(item)" v-on="on" v-bind="attrs">
                    mdi-magnify
                    </v-icon>
                </template>
                <span> View attendance of {{ item.lesson }} </span>
                </v-tooltip>
                <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon @click="manage_grades(item)" v-on="on" v-bind="attrs">
                    mdi-book
                    </v-icon>
                </template>
                <span> Manage grades of students - {{ item.lesson }} </span>
                </v-tooltip>
            </v-list-item-avatar>
            </v-list-item>
        </v-list>
      </v-card>
      <v-card-actions>
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
    manage_attendance: () => import("./Manage"),
  },

  created() {
    this.pagination();
  },

  methods: {
    pagination() {
        this.$store.commit('ATTENDANCE_LOADING', true)
      this.$store.dispatch(
        "ENROLLMENT_SCHEDULE",
        this.$store.state.Enrollments.enrollment_schedule_filter
      );
    },
    view_attendance(e) {
      this.$store.dispatch("MANAGE_ATTENDANCE", {
        items: e,
      });
    },

    filter(e) {
      if (e.length > 2) {
        var filter = {
          filter: e,
          page: this.$store.state.Enrollments.enrollment_schedule.current_page,
          per_page: this.$store.state.Enrollments.enrollment_schedule.per_page,
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

    manage_grades(e) {
        console.log(e)
    }

  },
};
</script>
