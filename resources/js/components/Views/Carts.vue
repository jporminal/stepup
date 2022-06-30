<template>
  <div>
    <v-container fluid>
      <v-row align="start" justify="start">
        <v-col cols="12" md="7">
          <my_items />
        </v-col>
        <v-col cols="12" md="5">
          <my_summary />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "carts",

  components: {
    my_items: () => import("../Components/Cart/Items"),
    my_summary: () => import("../Components/Cart/Summary"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Carts",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
