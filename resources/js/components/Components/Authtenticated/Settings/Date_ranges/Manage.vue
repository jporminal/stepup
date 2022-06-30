<template>
  <v-dialog
    v-model="$store.state.Date_ranges.date_range_open"
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
                label="Term"
                v-model="$store.state.Date_ranges.date_range.daterangename"
                :rules="[(v) => !!v || 'Term name is required']"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-menu
                v-model="date_from"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="$store.state.Date_ranges.date_range.daterangefrom"
                    label="Picker without buttons"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="$store.state.Date_ranges.date_range.daterangefrom"
                  @input="date_from = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="6">
              <v-menu
                v-model="date_to"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="$store.state.Date_ranges.date_range.daterangeto"
                    label="Picker without buttons"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="$store.state.Date_ranges.date_range.daterangeto"
                  @input="date_to = false"
                ></v-date-picker>
              </v-menu>
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
  name: "manage-date-range",

  data() {
    return {
      valid: false,
      date_from: false,
      date_to: false,
    };
  },

  methods: {
    save() {
      this.$store
        .dispatch("SAVE_DATE_RANGE", {
          form: this.$store.state.Date_ranges.date_range,
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
            text: "New term successfully save!",
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.$store.dispatch(
            "DATE_RANGES",
            this.$store.state.Date_ranges.date_range_filter
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
      this.$store.commit("DATE_RANGE_FILTER", filter);
      this.$store.commit("DATE_RANGE", {});
      this.$store.commit("DATE_RANGE_OPEN", false);
    },
  },

  computed: {
    title() {
      return this.$store.state.Date_ranges.date_range.drid > 0
        ? "Edit " + this.$store.state.Date_ranges.date_range.daterangename
        : "New Term";
    },
  },
};
</script>
