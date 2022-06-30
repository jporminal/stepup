<template>
  <div>
    <my_toolbar class="d-print-none" />
    <my_carousel />
    <template v-if="$route.name == 'Home'">
      <router-view />
    </template>
    <template v-else>
      <v-main>
        <router-view />
      </v-main>
    </template>
    <my_footer class="d-print-none" />
  </div>
</template>
<script>
export default {
  name: "skeleton",

  components: {
    my_toolbar: () => import("./Toolbar"),
    my_carousel: () => import("./Carousel"),
    my_footer: () => import("./Footer"),
  },
};
</script>
