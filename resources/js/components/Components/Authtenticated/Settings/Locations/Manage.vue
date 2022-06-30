<template>
  <v-dialog
    v-model="$store.state.Venues.my_venue_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Location"
                v-model="$store.state.Venues.my_venue.venuename"
                :rules="[(v) => !!v || 'required']"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Address"
                v-model="$store.state.Venues.my_venue.venueaddress"
                :rules="[(v) => !!v || 'required']"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Contact 1"
                v-model.number="$store.state.Venues.my_venue.venuecontact"
                type="number"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Contact 2"
                v-model.number="$store.state.Venues.my_venue.venuecontact1"
                type="number"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Email 1"
                v-model="$store.state.Venues.my_venue.venueemail1"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Email 2"
                v-model="$store.state.Venues.my_venue.venueemail2"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Xero"
                v-model="$store.state.Venues.my_venue.Xero"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none primary" :disabled="!valid" @click="save"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "manage-location",

  data() {
    return {
      valid: false,
    };
  },

  methods: {
    save() {
      this.$store
        .dispatch("SAVE_VENUE", {
          form: this.$store.state.Venues.my_venue,
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
            text: "Location successfully save!",
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.$store.dispatch(
            "MY_VENUES",
            this.$store.state.Venues.my_venue_filter
          );
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
            text: "Something went wrong!",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },
    close() {
      var filter = {
        filter: null,
        page: 1,
        per_page: 10,
      };
      this.$store.commit("MY_VENUE_FILTER", filter);
      this.$store.commit("MY_VENUE", {});
      this.$store.commit("MY_VENUE_OPEN", false);
    },
  },

  computed: {
    title() {
      return this.$store.state.Venues.my_venue.vid > 0
        ? "Edit" + this.$store.state.Venues.my_venue.venuename
        : "New Location";
    },
  },
};
</script>
