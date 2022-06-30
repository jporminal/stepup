<template>
  <div>
    <v-container>
      <v-row align="start" justify="start">
        <v-col cols="12" md="7">
          <my_billing_details />
        </v-col>
        <v-col cols="12" md="5">
          <my_summary />
          <my_payment />
          <my_checkout />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "checkout",

  components: {
    my_billing_details: () => import("../Components/Checkout/Details"),
    my_summary: () => import("../Components/Checkout/Summary"),
    my_payment: () => import("../Components/Checkout/Payment"),
    my_checkout: () => import("../Components/Checkout/Checkout"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Checkout",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
