<template>
  <v-dialog
    v-model="$store.state.Attendance.attendance_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title>
          {{ $store.state.Attendance.attendance_manage.schedule.details.name }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-select
          class="mt-4"
          :items="$store.state.Attendance.attendance_manage.date_ranges"
          label="Select Date"
          solo
          @change="seleceted_date"
        ></v-select>
      </v-card-text>
      <v-card-text v-if="selected_date">
        <div v-if="$store.state.Attendance.students.children.length > 0">
          <p>Please check student(s) who attended the class.</p>
          <v-list>
            <v-list-item
              v-for="(student, index) in $store.state.Attendance.students
                .children"
              :key="index"
            >
              <v-checkbox
                v-model="student.status"
                :label="student.name"
                @change="checkbox_change"
              >
              </v-checkbox>
            </v-list-item>
          </v-list>
          <v-textarea
            v-if="$store.state.Attendance.students.notes"
            label="Notes"
            v-model="$store.state.Attendance.students.notes.notes"
            solo
          />
          <v-textarea v-else label="Notes" v-model="notes" solo />
          <v-btn absolute bottom right class="primary" @click="save"
            >Save</v-btn
          >
        </div>
        <div v-else>
          <p class="text-center">No enrolled student</p>
        </div>
      </v-card-text>
      <v-card-text v-else>
        <p class="text-center">Select Date ↑</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "manage-attendance",

  data() {
    return {
      selected_date: false,
      my_date: "",
      notes: "",
    };
  },

  methods: {
    seleceted_date(e) {
      this.selected_date = true;
      this.my_date = e;
      var items = {
        schedule_id: this.$store.state.Attendance.attendance_manage.schedule
          .details.id,
        date: e,
      };
      this.$store.dispatch("ATTENDANCE_STUDENTS", items);
    },

    checkbox_change() {
      this.$store.commit(
        "ATTENDANCE_MANAGE",
        this.$store.state.Attendance.attendance_manage
      );
    },

    save() {
        this.$store.commit('ATTENDANCE_LOADING', true)
      var students = {
        schedule_id: this.$store.state.Attendance.attendance_manage.schedule
          .details.id,
        date: this.my_date,
        students: this.$store.state.Attendance.students.children,
        notes: this.$store.state.Attendance.students.notes
          ? this.$store.state.Attendance.students.notes.notes
          : this.notes,
      };
      this.$store.commit("ATTENDED", students);

      this.$store
        .dispatch("ATTENDANCE", {
          form: this.$store.state.Attendance.attended,
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
            text: "Attendance save!",
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
            text: "Something went wrong. Please reload your browser",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },

    close() {
      var student = {
        children: [],
      };
      this.$store.commit('ATTENDANCE_LOADING', false)
      this.$store.commit("ATTENDANCE_STUDENTS", student);
      this.$store.commit("ATTENDED", {});
      this.$store.commit("ATTENDANCE_OPEN", false);
    },
  },
};
</script>
