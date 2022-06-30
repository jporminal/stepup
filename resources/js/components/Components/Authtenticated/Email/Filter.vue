<template>
  <v-card>
    <v-toolbar color="blue lighten-2" dark flat>
      <v-toolbar-title> Compose Email </v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-autocomplete
            :items="$store.state.Emails.date_ranges"
            item-value="id"
            item-text="name"
            label="Select Date Ranges"
            v-model="$store.state.Emails.email_filters.date_range"
            @change="date_range"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            :items="$store.state.Emails.lessons"
            item-value="id"
            item-text="name"
            label="Select Lesson"
            v-model="$store.state.Emails.email_filters.class_id"
            @change="class_id"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            :items="$store.state.Emails.teachers"
            item-value="id"
            item-text="name"
            label="Select Teacher"
            v-model="$store.state.Emails.email_filters.staff_id"
            @change="staff_id"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-btn
            class="text-none primary"
            large
            @click="filter"
            :loading="$store.state.Emails.loading"
            >Filter</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "email-view",

  created() {
    this.$store.dispatch("EMAIL_DATE_RANGES");
  },

  methods: {
    date_range(e) {
      this.$store.commit(
        "EMAIL_FILTER",
        this.$store.state.Emails.email_filters
      );
      this.$store.dispatch("EMAIL_LESSONS", e);
    },

    class_id(e) {
      this.$store.commit(
        "EMAIL_FILTER",
        this.$store.state.Emails.email_filters
      );
      var form = {
        drid: this.$store.state.Emails.email_filters.date_range,
        class_id: e,
      };
      this.$store.dispatch("EMAIL_TEACHERS", form);
    },

    staff_id() {
      this.$store.commit(
        "EMAIL_FILTER",
        this.$store.state.Emails.email_filters
      );
    },

    filter() {
      this.$store.commit("EMAIL_LOADER", true);
      this.$store.dispatch("FILTER_EMAIL", {
        form: this.$store.state.Emails.email_filters,
      });
    },
  },
};
</script>
