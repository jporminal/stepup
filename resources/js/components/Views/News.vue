<template>
  <div>
    <my_news />
  </div>
</template>
<script>
export default {
  name: "news",

  components: {
    my_news: () => import("../Components/News/View"),
  },
  data() {
    return {
      seo: {
        title: "StepUp Academy",
        description:
          "Keep up to date on the current news, as well as being able to go back and look through all previous events. Call Us +971 55 855 2797 or email us at info@stepup.ae",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - News",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.seo.description },
        { name: "keywords", content: "performing arts, kinder news" },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        { property: "og:url", content: this.seo.site + "news" },
        {
          property: "og:image",
          content: this.seo.site + "img/Landing/Stepup-with-flags.jpeg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: this.seo.site + "news" },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/Landing/Stepup-with-flags.jpeg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/Landing/Stepup-with-flags.jpeg",
        },
      ],
    };
  },
};
</script>
