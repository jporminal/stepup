<template>
  <div>
    <my_class_information_filter />

    <my_class_information_view />
  </div>
</template>
<script>
export default {
  name: "class-information",

  components: {
    my_class_information_filter: () => import("./Class_information/Filter"),
    my_class_information_view: () => import("./Class_information/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Class Information Reports",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
