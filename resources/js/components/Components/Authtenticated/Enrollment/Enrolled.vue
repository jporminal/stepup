<template>
  <v-dialog
    v-model="$store.state.Enrollments.get_enrollment_open"
    width="1200"
    @click:outside="close"
  >
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon color="red" @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-card>
          <v-toolbar color="blue lighten-2" dark flat>
            <v-row>
              <v-col class="d-flex justify-space-around">
                <v-toolbar-title>
                  <p class="title">Current Schedule(s)</p>
                </v-toolbar-title>
              </v-col>
            </v-row>
          </v-toolbar>
          <v-card-text
            v-if="$store.state.Enrollments.get_enrollment.current.length > 0"
          >
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <center>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar tile width="40%">Lesson</v-list-item-avatar>
                    <v-list-item-avatar tile width="20%">Location</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">Day</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">Time</v-list-item-avatar>
                    <v-list-item-avatar tile width="20%">Teacher</v-list-item-avatar>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item
                    v-for="(item, index) in $store.state.Enrollments
                      .get_enrollment.current"
                    :key="index"
                  >
                    <v-list-item-avatar tile width="40%">{{ item.lesson }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="20%">{{ item.location }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">{{ item.day }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">{{ item.start_time }} - {{ item.start_end }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="20%">{{ item.teacher }}
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                            <v-icon small @click="remove(item)" v-on="on" v-bind="attrs" color="red">
                                mdi-close
                            </v-icon>
                            </template>
                            <span>
                            Remove Lesson
                            </span>
                        </v-tooltip>
                    </v-list-item-avatar>
                    <v-divider></v-divider>
                  </v-list-item>
                </v-list>
              </center>
            </template>
            <template v-else>
              <v-data-table
                :headers="header_current"
                :items="$store.state.Enrollments.get_enrollment.current"
              >
              </v-data-table>
            </template>
          </v-card-text>
          <v-card-text v-else>
            <p class="text-center title">Student not enrolled this term</p>
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-text
        v-if="$store.state.Enrollments.get_enrollment.finished.length > 0"
      >
        <v-card>
          <v-toolbar color="blue lighten-2" dark flat>
            <v-row>
              <v-col class="d-flex justify-space-around">
                <v-toolbar-title>
                  <p class="title">Previous Schedule(s)</p>
                </v-toolbar-title>
              </v-col>
            </v-row>
          </v-toolbar>
          <v-card-text>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <center>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar tile width="40%">Term</v-list-item-avatar>
                    <v-list-item-avatar tile width="20%">Lesson</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">Location</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">Day</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">Time</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">Teacher</v-list-item-avatar>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item
                    v-for="(item, index) in $store.state.Enrollments
                      .get_enrollment.finished"
                    :key="index"
                  >
                    <v-list-item-avatar tile width="40%">{{ item.term }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="20%">{{ item.lesson }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">{{ item.location }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">{{ item.day }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">{{ item.start_time }} - {{ item.start_end }}</v-list-item-avatar>
                    <v-list-item-avatar tile width="10%">{{ item.teacher }}</v-list-item-avatar>
                    <v-divider></v-divider>
                  </v-list-item>
                </v-list>
              </center>
            </template>
            <template v-else>
              <v-data-table
                :headers="header_previous"
                :items="$store.state.Enrollments.get_enrollment.finished"
              >
              </v-data-table>
            </template>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "enroll",

  data() {
    return {
      header_current: [
        {
          text: "Lesson",
          value: "lesson",
          align: "center",
          sortable: false,
        },
        {
          text: "Location",
          value: "location",
          align: "center",
          sortable: false,
        },
        {
          text: "Day",
          value: "day",
          align: "center",
          sortable: false,
        },
        {
          text: "Start",
          value: "start_time",
          align: "center",
          sortable: false,
        },
        {
          text: "End",
          value: "start_end",
          align: "center",
          sortable: false,
        },
        {
          text: "Teacher",
          value: "teacher",
          align: "center",
          sortable: false,
        },
      ],
      header_previous: [
        {
          text: "Term",
          value: "term",
          align: "center",
          sortable: false,
        },
        {
          text: "Lesson",
          value: "lesson",
          align: "center",
          sortable: false,
        },
        {
          text: "Location",
          value: "location",
          align: "center",
          sortable: false,
        },
        {
          text: "Day",
          value: "day",
          align: "center",
          sortable: false,
        },
        {
          text: "Start",
          value: "start_time",
          align: "center",
          sortable: false,
        },
        {
          text: "End",
          value: "start_end",
          align: "center",
          sortable: false,
        },
        {
          text: "Teacher",
          value: "teacher",
          align: "center",
          sortable: false,
        },
      ],
    };
  },

  methods: {
    close() {
      this.$store.commit("GET_ENROLLMENT", {});
      this.$store.commit("GET_ENROLLMENT_OPEN", false);
    },

    remove(item) {
        this.$store.dispatch('REMOVE_STUDENT_LESSON', {
            item
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
            text:
              `${item.lesson} (${item.start_time} - ${item.start_end} successfullt remove!`,
          };
          this.$store.commit("SNACKBAR", snackbar);
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
            text:
              "Something went wrong. Please reload your browser or check your internet connection.",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    }
  },
};
</script>
