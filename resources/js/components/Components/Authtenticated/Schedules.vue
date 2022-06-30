<template>
  <div>
    <my_schedule />
    <my_details v-if="$store.state.Schedules.schedule_detail_open" />
  </div>
</template>
<script>
export default {
  name: "schedules",

  components: {
    my_schedule: () => import("./Schedules/View"),
    my_details: () => import("./Schedules/Details"),
  },

  created() {
    this.$store.dispatch("VENUES");
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Schedules",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
