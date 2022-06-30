<template>
  <v-dialog
    v-model="$store.state.Week_days.week_day_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar class="blue lighten-2" dark flat>
        <v-toolbar-title>
          Edit {{ $store.state.Week_days.week_day.weekname }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          label="Motor City"
          v-model.number="$store.state.Week_days.week_day.numberofweek"
          type="number"
        />
        <v-text-field
          label="Repton"
          v-model.number="$store.state.Week_days.week_day.upcoming"
          type="number"
        />
        <v-text-field
          label="DAMAC HILLS 2"
          v-model.number="$store.state.Week_days.week_day.akoya"
          type="number"
        />
        <v-text-field
          label="Arcadia"
          v-model.number="$store.state.Week_days.week_day.arcadia"
          type="number"
        />
        <v-text-field
          label="Others"
          v-model.number="$store.state.Week_days.week_day.other_time_slot"
          type="number"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none primary" @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "manage-weekday",

  methods: {
    save() {
      this.$store
        .dispatch("WEEK_DAY_SAVE", {
          form: this.$store.state.Week_days.week_day,
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
            text: "successfully save!",
          };
          this.$store.commit("SNACKBAR", snackbar);
          this.$store.dispatch("WEEK_DAYS");
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
            text: "something went wrong!",
          };
          this.$store.commit("SNACKBAR", snackbar);
        });
    },
    close() {
      this.$store.commit("WEEK_DAY", {});
      this.$store.commit("WEEK_DAY_OPEN", false);
    },
  },
};
</script>
