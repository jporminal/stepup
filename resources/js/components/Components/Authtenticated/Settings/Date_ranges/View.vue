<template>
  <div>
    <manage_date_range v-if="$store.state.Date_ranges.date_range_open" />
    <v-card>
      <v-toolbar color="blue lighten-2" class="white--text" flat>
        <v-toolbar-title> Terms </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          @input="filter"
          label="Filter Term"
          class="mt-6"
          solo
          v-model="$store.state.Date_ranges.date_range_filter.filter"
        />
      </v-toolbar>
      <v-card
        :loading="$store.state.Date_ranges.loading"
        flat
      >
          <center>
            <v-list>
            <v-list-item>
                <v-list-item-title class="font-weight-bold"
                ><p>term</p></v-list-item-title
                >
                <v-list-item-title class="font-weight-bold"
                >Dates</v-list-item-title
                >
                <v-list-item-title class="font-weight-bold"
                >Status</v-list-item-title
                >
                <v-list-item-title></v-list-item-title>
            </v-list-item>
            <v-list-item
                v-for="(item, index) in $store.state.Date_ranges.date_ranges.data"
                :key="index"
            >
                <v-list-item-title>
                <p>{{ item.daterangename }}</p>
                </v-list-item-title>
                <v-list-item-title>
                {{ item.daterangefrom }} - {{ item.daterangeto }}
                </v-list-item-title>
                <v-list-item-title>
                {{ item.daterangeclasses }}
                </v-list-item-title>
                <v-list-item-title>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                    <v-icon @click="edit(item)" v-on="on" v-bind="attrs">
                        mdi-pencil
                    </v-icon>
                    </template>
                    <span> Edit {{ item.daterangename }} </span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                    <v-icon @click="end(item)" v-on="on" v-bind="attrs">
                        mdi-calendar-remove
                    </v-icon>
                    </template>
                    <span> End {{ item.daterangename }} </span>
                </v-tooltip>
                </v-list-item-title>
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
          v-model="$store.state.Date_ranges.date_ranges.current_page"
          :length="$store.state.Date_ranges.date_ranges.last_page"
          :total-visible="$vuetify.breakpoint.mdAndUp ? 10 : 5"
        ></v-pagination>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "date-ranges-view",

  components: {
    manage_date_range: () => import("./Manage"),
  },

  created() {
    this.pagination();
    this.$store.dispatch("SETTING_DETAILS");
  },

  methods: {
    pagination() {
        this.$store.commit("DATE_RANGE_LOADING", true);
      this.$store.dispatch(
        "DATE_RANGES",
        this.$store.state.Date_ranges.date_range_filter
      );
    },
    add() {
      var schedule = {
        drid: 0,
        daterangename: "",
        daterangefrom: new Date().toISOString().substr(0, 10),
        daterangeto: new Date().toISOString().substr(0, 10),
        daterangeclasses: "",
      };
      this.$store.commit("DATE_RANGE", schedule);
      this.$store.commit("DATE_RANGE_OPEN", true);
    },

    edit(e) {
      this.$store.commit("DATE_RANGE", e);
      this.$store.commit("DATE_RANGE_OPEN", true);
    },

    end(e) {
      confirm(`Are you sure you want to end ${e.daterangename}?`) &&
        this.end_term(e.drid);
    },

    end_term(e) {
      this.$store
        .dispatch("UPDATE_DATE_RANGE", e)
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
            text: "Term successfully end!",
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.pagination();
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
            text: "Wow! Please reload the browser",
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
        this.$store.commit("DATE_RANGE_FILTER", filter);
        this.$store.dispatch(
          "DATE_RANGE_FILTER",
          this.$store.state.Date_ranges.date_range_filter
        );
      }

      if (e.length == 0) {
        var filter = {
          filter: null,
          page: this.$store.state.Date_ranges.date_ranges.current_page,
          per_page: this.$store.state.Date_ranges.date_ranges.per_page,
        };
        this.$store.commit("DATE_RANGE_FILTER", filter);
        this.$store.dispatch(
          "DATE_RANGES",
          this.$store.state.Date_ranges.date_range_filter
        );
      }
    },

    channel(e) {
        this.$store.commit("DATE_RANGE_LOADING", true);
      var filter = {
        filter: this.$store.state.Date_ranges.date_range_filter.filter,
        page: e,
        per_page: 10,
      };
      this.$store.commit("DATE_RANGE_FILTER", filter);
      if (this.$store.state.Date_ranges.date_range_filter.filter) {
        this.$store.dispatch(
          "DATE_RANGE_FILTER",
          this.$store.state.Date_ranges.date_range_filter
        );
      } else {
        this.$store.dispatch(
          "DATE_RANGES",
          this.$store.state.Date_ranges.date_range_filter
        );
      }
    },
  },
};
</script>
