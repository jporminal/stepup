<template>
  <div>
    <my_staff v-if="$store.state.Staffs.staff_open" />
    <v-card>
      <v-toolbar color="blue lighten-2" class="white--text" flat>
        <v-toolbar-title> Staffs </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field label="Filter staff" @input="filter" class="mt-6" solo />
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="$store.state.Staffs.staffs.data"
        :server-items-length="$store.state.Staffs.staffs.total"
        :loading="$store.state.Staffs.staffs.loading"
        :options.sync="options"
        :items-per-page="10"
        :footer-props="{
          'items-per-page-options': [10, 15, 20, -1],
          'items-per-page-text': 'Staff per page',
          'show-current-page': true,
        }"
        :mobile-breakpoint="200"
      >
        <template v-slot:item.name="{ item }">
          {{ item.staffname | toUpper }}
        </template>
        <template v-slot:item.contact="{ item }">
          {{ item.staffphone1 }}
        </template>
        <template v-slot:item.email="{ item }">
          {{ item.staffemail }}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon small @click="edit(item.sid)" v-on="on" v-bind="attrs">
                mdi-form-select
              </v-icon>
            </template>
            <span> edit {{ item.staffname | toUpper }} </span>
          </v-tooltip>
        </template>
      </v-data-table>
      <v-btn absolute bottom left icon class="error" dark @click="add">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "staff-view",

  components: {
    my_staff: () => import("./Staff"),
  },

  data() {
    return {
      options: {},
      headers: [
        {
          text: "Name",
          value: "name",
          align: "center",
          sortable: false,
        },
        {
          text: "Contact",
          value: "contact",
          align: "center",
          sortable: false,
        },
        {
          text: "Email",
          value: "email",
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
          filter: this.$store.state.Staffs.staff_filter.filter,
          page: e.page,
          per_page: e.itemsPerPage,
        };
        this.$store.commit("STAFF_FILTER", filter);
        if (this.$store.state.Staffs.staff_filter.filter) {
          this.$store.dispatch(
            "STAFF_FILTER",
            this.$store.state.Staffs.staff_filter
          );
        } else {
          this.pagination();
        }
      },
      deep: true,
    },
  },

  methods: {
    filter(e) {
      if (e.length > 2) {
        const filter = {
          filter: e,
          page: this.$store.state.Staffs.staff_filter.page,
          per_page: this.$store.state.Staffs.staff_filter.per_page,
        };
        this.$store.commit("STAFF_FILTER", filter);
        this.options = {
          page: 1,
          per_page: 10,
        };
        this.$store.dispatch(
          "STAFF_FILTER",
          this.$store.state.Staffs.staff_filter
        );
      }

      if (e.length == 0) {
        const filter = {
          filter: null,
          page: this.$store.state.Staffs.staff_filter.page,
          per_page: this.$store.state.Staffs.staff_filter.per_page,
        };
        this.$store.commit("STAFF_FILTER", filter);
        this.pagination();
      }
    },

    add() {
      var filter = {
        sid: 0,
        staffname: "",
        staffphone1: "",
        staffphone2: "",
        staffmobile: "",
        staffemail: "",
      };
      this.$store.commit("STAFF", filter);
      this.$store.commit("STAFF_OPEN", true);
    },

    edit(e) {
      this.$store.dispatch("STAFF", e);
    },
    pagination() {
      this.$store.commit("STAFF_LOADING", true);
      this.$store.dispatch("STAFFS", this.$store.state.Staffs.staff_filter);
    },
  },
};
</script>
