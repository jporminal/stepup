<template>
  <div>
    <my_payment_by_lesson_filter />

    <my_payment_by_lesson_view />
  </div>
</template>
<script>
export default {
  name: "payment-by-lesson",

  components: {
    my_payment_by_lesson_filter: () => import("./Payment_by_lesson/Filter"),
    my_payment_by_lesson_view: () => import("./Payment_by_lesson/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Payment by Lesson Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
