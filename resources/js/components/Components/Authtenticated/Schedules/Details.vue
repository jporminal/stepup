<template>
  <v-dialog
    v-model="$store.state.Schedules.schedule_detail_open"
    width="800"
    @click:outside="close"
  >
    <v-card>
      <v-toolbar color="blue lighten-2" dark flat>
        <v-toolbar-title>
          {{ $store.state.Schedules.schedule_details.details.name }} (
          {{ $store.state.Schedules.schedule_details.details.start }} -
          {{ $store.state.Schedules.schedule_details.details.end }} ) -
          {{
            $store.state.Schedules.schedule_details.students.length >
            $store.state.Schedules.schedule_details.details.limit
              ? "Full"
              : `${$store.state.Schedules.schedule_details.students.length}/${$store.state.Schedules.schedule_details.details.limit}`
          }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <template
          v-for="(item, index) in $store.state.Schedules.schedule_details
            .students"
        >
          <div :key="index">
            <p>{{ item.name }}</p>
          </div>
        </template>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "schedule-details",

  methods: {
    close() {
      this.$store.commit("SCHEDULE_DETAILS", {});
      this.$store.commit("SCHEDULE_DETAIL_OPEN", false);
    },
  },
};
</script>
