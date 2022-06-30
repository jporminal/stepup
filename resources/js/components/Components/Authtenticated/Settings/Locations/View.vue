<template>
  <div>
    <manage_venue v-if="$store.state.Venues.my_venue_open" />
    <v-card>
      <v-toolbar color="blue lighten-2" class="white--text" flat>
        <v-toolbar-title> Locations </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          @input="filter"
          v-model="$store.state.Venues.my_venue_filter.filter"
          label="Filter Location"
          class="mt-6"
          solo
        />
      </v-toolbar>
      <v-card
        :loading="$store.state.Venues.loading"
        flat
      >
          <center>
            <v-list>
            <v-list-item>
                <v-list-item-avatar width="20%" class="font-weight-bold"
                ><p>Location</p></v-list-item-avatar
                >
                <v-list-item-avatar width="20%" class="font-weight-bold"
                >Address</v-list-item-avatar
                >
                <v-list-item-avatar width="20%" class="font-weight-bold"
                >Contact</v-list-item-avatar
                >
                <v-list-item-avatar width="20%" class="font-weight-bold"
                >Email</v-list-item-avatar
                >
                <v-list-item-avatar width="10%" class="font-weight-bold"
                >Xero</v-list-item-avatar
                >
                <v-list-item-avatar width="10%"></v-list-item-avatar>
            </v-list-item>
            <v-list-item
                v-for="(item, index) in $store.state.Venues.my_venues.data"
                :key="index"
            >
                <v-list-item-avatar tile width="20%">
                <p>{{ item.venuename }}</p>
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                <p>{{ item.venueaddress }}</p>
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                {{ item.venuecontact }} / {{ item.venuecontact1 }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="20%">
                {{ item.venueemail1 }} / {{ item.venueemail2 }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                {{ item.Xero }}
                </v-list-item-avatar>
                <v-list-item-avatar tile width="10%">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                    <v-icon @click="edit(item)" v-on="on" v-bind="attrs">
                        mdi-pencil
                    </v-icon>
                    </template>
                    <span> Edit {{ item.lesson }} </span>
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
          v-model="$store.state.Venues.my_venues.current_page"
          :length="$store.state.Venues.my_venues.last_page"
          :total-visible="$vuetify.breakpoint.mdAndUp ? 10 : 5"
        ></v-pagination>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "location-view",

  components: {
    manage_venue: () => import("./Manage"),
  },

  created() {
    this.pagination();
    this.$store.dispatch("SETTING_DETAILS");
  },

  methods: {
    pagination() {
        this.$store.commit("VENUE_LOADING", true);
      this.$store.dispatch(
        "MY_VENUES",
        this.$store.state.Venues.my_venue_filter
      );
    },
    add() {
      var location = {
        vid: 0,
        venuename: "",
        venueemail2: "",
        venueemail1: "",
        venuecontact1: 0,
        venuecontact: 0,
        venueaddress: "",
        Xero: 230,
      };
      this.$store.commit("MY_VENUE", location);
      this.$store.commit("MY_VENUE_OPEN", true);
    },

    edit(e) {
      this.$store.commit("MY_VENUE", e);
      this.$store.commit("MY_VENUE_OPEN", true);
    },

    filter(e) {
      if (e.length > 2) {
        var filter = {
          filter: e,
          page: 1,
          per_page: 10,
        };
        this.$store.commit("MY_VENUE_FILTER", filter);
        this.$store.dispatch(
          "MY_VENUE_FILTER",
          this.$store.state.Venues.my_venue_filter
        );
      }

      if (e.length == 0) {
        var filter = {
          filter: null,
          page: this.$store.state.Venues.my_venues.current_page,
          per_page: this.$store.state.Venues.my_venues.per_page,
        };
        this.$store.commit("MY_VENUE_FILTER", filter);
        this.$store.dispatch(
          "MY_VENUES",
          this.$store.state.Venues.my_venue_filter
        );
      }
    },

    channel(e) {
        this.$store.commit("VENUE_LOADING", true);
      var filter = {
        filter: this.$store.state.Venues.my_venue_filter.filter,
        page: e,
        per_page: 10,
      };
      this.$store.commit("MY_VENUE_FILTER", filter);
      if (this.$store.state.Venues.my_venue_filter.filter) {
        this.$store.dispatch(
          "MY_VENUE_FILTER",
          this.$store.state.Venues.my_venue_filter
        );
      } else {
        this.$store.dispatch(
          "MY_VENUES",
          this.$store.state.Venues.my_venue_filter
        );
      }
    },
  },
};
</script>
