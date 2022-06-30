<template>
  <div>
    <my_staffs />
  </div>
</template>
<script>
export default {
  name: "staffs",

  components: {
    my_staffs: () => import("./Staffs/View"),
  },

  metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Staffs",
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
