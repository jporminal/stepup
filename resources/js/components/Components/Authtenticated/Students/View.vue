<template>
  <div>
    <v-card>
      <v-toolbar color="blue lighten-2" class="white--text" flat>
        <v-toolbar-title> Students </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          class="mt-6"
          label="Filter student"
          @input="debouncedSearch"
          solo
        >
        </v-text-field>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="$store.state.Students.students.data"
        :server-items-length="$store.state.Students.students.total"
        :loading="$store.state.Students.loading"
        :options.sync="options"
        :items-per-page="10"
        :footer-props="{
          'items-per-page-options': [10, 15, 20, -1],
          'items-per-page-text': 'Students per page',
          'show-current-page': true,
        }"
        :mobile-breakpoint="200"
      >
        <template v-slot:item.cid="{ item }">
          <p>{{ item.cid}}</p>
        </template>

        <template v-slot:item.firstname="{ item }">
          <p>{{ item.firstname | toUpper }}</p>
        </template>
        <template v-slot:item.lastname="{ item }">
          <p>{{ item.lastname | toUpper }}</p>
        </template>
          <template v-slot:item.parentfullname="{ item }">
          <p>{{ item.motherfirstname}} {{ item.motherlastname}}</p>
        </template>
        <template v-slot:item.dob="{ item }">
          <p>{{ item.dateofbirth | date }}</p>
        </template>
        <template v-slot:item.nationality="{ item }">
          <p>{{ item.nationality | toUpper }}</p>
        </template>
        <template v-slot:item.age="{ item }">
          <p>{{ get_age(item.dateofbirth) }}</p>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon small v-on="on" class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
            </template>
            <span>
              Edit {{ item.firstname | toUpper }} {{ item.lastname | toUpper }}
            </span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                small
                @click="view_enrollment(item)"
                v-on="on"
                v-bind="attrs"
              >
                mdi-notebook-check
              </v-icon>
            </template>
            <span>
              View schedule of {{ item.firstname | toUpper }}
              {{ item.lastname | toUpper }}
            </span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon small @click="enroll(item)" v-on="on" v-bind="attrs">
                mdi-form-select
              </v-icon>
            </template>
            <span>
              Enroll {{ item.firstname | toUpper }}
              {{ item.lastname | toUpper }}
            </span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
    <my_edit v-if="$store.state.Enrollments.enrollment_child_edit" />
    <my_enrollment v-if="$store.state.Enrollments.get_enrollment_open" />
    <my_schedules v-if="$store.state.Enrollments.enrollment_schedule_open" />
  </div>
</template>
<script>
import debounce from 'lodash/debounce';
export default {
  name: "student-view",

  components: {
    my_edit: () => import("../Enrollment/Edit"),
    my_enrollment: () => import("../Enrollment/Enrolled"),
    my_schedules: () => import("./Schedules"),
  },

  data() {
    return {
      options: {},
      headers: [
        {
          text: "ID",
          value: "cid",
          align: "center",
          sortable: false,
        },

        {
          text: "First Name",
          value: "firstname",
          align: "center",
          sortable: false,
        },
        {
          text: "Family Name",
          value: "lastname",
          align: "center",
          sortable: false,
        },
             {
          text: "Parent",
          value: "parentfullname",
          align: "center",
          sortable: false,
        },
        {
          text: "Date of Birth",
          value: "dob",
          align: "center",
          sortable: false,
        },
        {
          text: "Age",
          value: "age",
          align: "center",
          sortable: false,
        },
        {
          text: "Nationality",
          value: "nationality",
          align: "center",
          sortable: false,
        },
        {
          text: "",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
    };
  },

  created() {
    this.pagination();
  },

  watch: {
    options: {
      handler(e) {
        const filter = {
          filter: this.$store.state.Students.student_filter.filter,
          page: e.page,
          per_page: e.itemsPerPage,
        };
        this.$store.commit("STUDENT_FILTER", filter);
        if (this.$store.state.Students.student_filter.filter) {
          this.$store.dispatch(
            "STUDENT_FILTER",
            this.$store.state.Students.student_filter
          );
        } else {
          this.pagination();
        }
      },
      deep: true,
    },

  },

  methods: {
    editItem(e) {
       this.$store
            .dispatch("ENROLLMENT_CHILD", e.cid)
            .then((res) => {
              this.$store.commit("ENROLLMENT_CHILD_EDIT", true);
            })
            .catch((err) => {});
      // this.$store
      //   .dispatch("GET_STUDENT_ID", {
      //     firstname: e.firstname,
      //     lastname: e.lastname,
      //   })
      //   .then((result) => {
      //     this.$store
      //       .dispatch("ENROLLMENT_CHILD", result.data.cid)
      //       .then((res) => {
      //         this.$store.commit("ENROLLMENT_CHILD_EDIT", true);
      //       })
      //       .catch((err) => {});
      //   });
    },

    enroll(e) {
        console.log(e);
        this.$store.commit('ENROLLMENT_LOADER', true)
      this.$store
        .dispatch("GET_STUDENT_ID", {
          firstname: e.firstname,
          lastname: e.lastname,
          cid: e.cid
        })
        .then((result) => {
          this.$store.dispatch(
            "ENROLLMENT_SCHEDULE",
            this.$store.state.Enrollments.enrollment_schedule_filter
          );
          this.$store.commit("ENROLLMENT_SCHEDULE_OPEN", true);
        });
    },

    view_enrollment(e) {
      this.$store.dispatch("GET_ENROLLMENT", e.cid);
      // this.$store
      //   .dispatch("GET_STUDENT_ID", {
      //     firstname: e.firstname,
      //     lastname: e.lastname,
      //   })
      //   .then((result) => {
      //     this.$store.dispatch("GET_ENROLLMENT", result.data.cid);
      //   });
    },

    pagination() {
      this.$store.commit("STUDENT_LOADING", true);
      this.$store.dispatch(
        "STUDENTS",
        this.$store.state.Students.student_filter
      );
    },

    filter_student(e) {
      if (e.length > 2) {
        const filter = {
          filter: e,
          page: this.$store.state.Students.student_filter.page,
          per_page: this.$store.state.Students.student_filter.per_page,
        };
        this.$store.commit("STUDENT_FILTER", filter);
        this.options = {
          page: 1,
          per_page: 10,
        };
        this.$store.commit("STUDENT_LOADING", true);
        this.$store.dispatch(
          "STUDENT_FILTER",
          this.$store.state.Students.student_filter
        );
      }

      if (e.length == 0) {
        const filter = {
          filter: null,
          page: this.$store.state.Students.student_filter.page,
          per_page: this.$store.state.Students.student_filter.per_page,
        };
        this.$store.commit("STUDENT_FILTER", filter);
        this.pagination();
      }
    },

    get_age(e) {
      let currentDate = new Date();
      let birthDate = new Date(e);
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age;
    },
    debouncedSearch: debounce(function(query) {
        this.filter_student(query);
    }, 1000)
  },
};
</script>
