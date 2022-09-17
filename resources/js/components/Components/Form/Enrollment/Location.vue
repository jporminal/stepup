<template>
  <v-card :flat="$vuetify.breakpoint.mdAndUp ? true : false" class="mt-5">
    <v-card-title v-if="$vuetify.breakpoint.smAndDown">
      Select Location
    </v-card-title>
    <v-card-text>
      <v-select
        label="Select Location"
        :items="locations"
        v-model="$store.state.Enrollments.enrollment.location"
        @change="selected_location"
        solo
      >
      </v-select>
    </v-card-text>
    <v-card-actions v-if="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>
      <v-btn @click="step(2)" class="text-none primary">
        <v-icon> mdi-menu-right </v-icon>
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "location-form",

  data() {
    return {
      locations: [
        "Motor City",
        "Fitness First - Lakes",
        // "Fitness First - Arabian Ranches",
        // "Arcadia Preparatory School",
        "Repton Al Barsha School",
        "SAFA Community School",
        "Springs Souk",
        "South View School",
        // "DAMAC Hills",
        "Victory Heights Primary School"
      ],
    };
  },

  methods: {
    step(e) {
      this.$store.commit("STEPS", e);
    },
    selected_location() {
      this.$store.commit(
        "ENROLLMENT",
        this.$store.state.Enrollments.enrollment
      );
    },
  },
};
</script>
