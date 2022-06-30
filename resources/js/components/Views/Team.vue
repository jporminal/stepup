<template>
  <div>
    <!-- <my_staffs /> -->
    <my_teachers />
    <!-- <my_admins /> -->
  </div>
</template>
<script>
export default {
  name: "team",

  components: {
    my_staffs: () => import("../Components/Team/Staffs"),
    my_teachers: () => import("../Components/Team/Teachers"),
    my_admins: () => import("../Components/Team/Admins"),
  },

  data() {
    return {
      seo: {
        title: "Our StepUp Team",
        description:
          "All our teachers are fully qualified, enthusiastic, passionate and share 1 common love – “Teaching Ballet and Performing to you all”",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Fully Qualified Dance Teachers and Admin Staffs",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.seo.description },
        {
          name: "keywords",
          content: "stepup academy, dance school, dubai classes, ballet school",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        { property: "og:url", content: this.seo.site + "meet-the-team" },
        {
          property: "og:image",
          content: this.seo.site + "img/team/team.jpg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: this.seo.site + "meet-the-team" },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/team/team.jpg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/team/team.jpg",
        },
      ],
    };
  },
};
</script>
