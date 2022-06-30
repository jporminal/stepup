<template>
  <div>
    <my_payment_by_schedules_filter />

    <my_payment_by_schedules_view />
  </div>
</template>
<script>
export default {
  name: "payment-by-schedules",

  components: {
    my_payment_by_schedules_filter: () =>
      import("./Payment_by_schedules/Filter"),
    my_payment_by_schedules_view: () => import("./Payment_by_schedules/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Payment by Schedule Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
