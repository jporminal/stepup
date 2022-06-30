<template>
  <div>
    <my_determination />
  </div>
</template>
<script>
export default {
  name: "people-with-determination",

  components: {
    my_determination: () => import("../Components/Determination/View"),
  },

  data() {
    return {
      seo: {
        title: "People of Determination ",
        description:
          "Dance Syndrome gets to attend several performances throughout the year, and previous events include being part of the F.A.M.E show yearly since 2017, dancing in front of the Burj Khalifa, taking part in the end of year school show, taking part in the IFDPA dance competition in Paris",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Dance Syndrome",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.seo.description },
        {
          name: "keywords",
          content:
            "dance, acro, ballet, burlesque, dance fit, lyrical contemporary, dance syndrome, jazz, tap",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        {
          property: "og:url",
          content: this.seo.site + "people-of-determination",
        },
        {
          property: "og:image",
          content: this.seo.site + "img/determinations/class-exams.jpeg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: this.seo.site + "people-of-determination",
        },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/determinations/class-exams.jpeg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/determinations/class-exams.jpeg",
        },
      ],
    };
  },
};
</script>
