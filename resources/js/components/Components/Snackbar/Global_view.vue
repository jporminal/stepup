<template>
  <v-snackbar
    v-model="$store.state.Snackbars.snackbar.snackbar"
    :vertical="$store.state.Snackbars.snackbar.vertical"
    :timeout="$store.state.Snackbars.snackbar.timeout"
    :color="$store.state.Snackbars.snackbar.color"
    :dark="$store.state.Snackbars.snackbar.dark"
    :top="$store.state.Snackbars.snackbar.top"
    :bottom="$store.state.Snackbars.snackbar.bottom"
    :centered="$store.state.Snackbars.snackbar.centered"
    :left="$store.state.Snackbars.snackbar.left"
    :right="$store.state.Snackbars.snackbar.right"
  >
    {{ $store.state.Snackbars.snackbar.text }}
  </v-snackbar>
</template>
<script>
export default {
  name: "snackbar",

  data() {
    return {
      snackbar: {
        snackbar: false,
        vertical: true,
        timeout: 2000,
        color: "blue lighten-2",
        dark: true,
        top: true,
        bottom: false,
        centered: true,
        left: false,
        right: false,
        text: "",
      },
    };
  },

  methods: {
    close() {
      this.$store.commit("SNACKBAR", this.snackbar);
    },

    cart() {
      this.$router.push("/cart");
      this.close();
    },
  },
};
</script>
