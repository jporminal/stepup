<template>
  <v-dialog
    v-model="$store.state.Enrollments.enrollment_schedule_open"
    width="1500"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2 white--text" flat>
        <v-toolbar-title> Schedules </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field class="mt-6" @input="filter" label="Filter Lesson" solo>
        </v-text-field>
      </v-toolbar>
      <v-card
        :loading="$store.state.Enrollments.loading"
        flat
      >
        <v-card-text>
            <center>
            <v-list>
                <v-list-item>
                <v-list-item-avatar tile width="15%"></v-list-item-avatar>
                <v-list-item-avatar tile width="30%">Term</v-list-item-avatar>
                <v-list-item-avatar tile width="25%">Lesson</v-list-item-avatar>
                <v-list-item-avatar tile width="10%">Day</v-list-item-avatar>
                <v-list-item-avatar tile width="10%">Time</v-list-item-avatar>
                <v-list-item-avatar tile width="10%">Teacher</v-list-item-avatar>
                </v-list-item>
                <v-list-item
                v-for="(item, index) in $store.state.Enrollments
                    .enrollment_schedule.data"
                :key="index"
                >
                <v-list-item-avatar tile width="15%">
                    <v-checkbox
                    v-model="item.selected"
                    :label="`${item.id}`"
                    @change="selected(item)"
                    />
                </v-list-item-avatar>
                <v-list-item-avatar tile width="30%" height="60px" v-html="item.term"></v-list-item-avatar>
                <v-list-item-avatar tile width="25%" v-html="item.lesson"></v-list-item-avatar>
                <v-list-item-avatar tile width="10%"> {{ item.day }} </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                    {{ item.start_time }} - {{ item.end_time }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%" v-html="item.teacher"></v-list-item-avatar>
                </v-list-item>
            </v-list>
            </center>
        </v-card-text>
      </v-card>
      <v-card-actions>
        <div class="text-right">
          <v-pagination
            @input="channel"
            v-model="$store.state.Enrollments.enrollment_schedule.current_page"
            :length="$store.state.Enrollments.enrollment_schedule.last_page"
            :total-visible="$vuetify.breakpoint.mdAndUp ? 10 : 5"
          ></v-pagination>
        </div>
        <v-spacer></v-spacer>
        <v-btn class="primary text-none" @click="enroll"> Enroll</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "schedules",

  data() {
    return {
      schedules: [],
    };
  },

  methods: {
    selected(e) {
      var schedule = {
        product_option: {
          id: e.id,
          date_start: e.date_start,
          date_end: e.date_end,
          week_id: e.week_id,
          cid: {
            id: this.$store.state.Students.student.cid,
          },
        },
      };

      var index = this.schedules.findIndex(
        (item) => item.product_option.id == e.id
      );

      if (e.selected) {
        this.schedules.push(schedule);
      } else {
        this.schedules.splice(index, 1);
      }

      this.$store.commit("MY_ENROLLMENT", this.schedules);
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
        this.$store.commit('ENROLLMENT_LOADER', true)
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
    close() {
      this.$store.commit("MY_ENROLLMENT", {});
      this.$store.commit("ENROLLMENT_SCHEDULE", {});
      this.$store.commit("ENROLLMENT_SCHEDULE_OPEN", false);
    },
    enroll() {
      this.$store
        .dispatch("ENROLL_STUDENT_BY_ID", {
          form: this.$store.state.Enrollments.my_enrollment,
        })
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
            text: "You have successfully enroll the student",
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.close();
        })
        .catch((err) => {
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
            text:
              "Something went wrong. Please reload your browser or check your internet connection.",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },
  },
};
</script>
