<template>
  <div>
    <my_partners />
  </div>
</template>
<script>
export default {
  name: "News",

  components: {
    my_partners: () => import("../Components/Partner/View"),
  },

  data() {
    return {
      seo: {
        title: "StepUp Academy",
        description:
          "Here at StepUp Academy, we collaborate up with only the best. Have a look at our current partners we are teamed up with.",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Partners",
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
            "fitness first, du gym, building blocks, arcadia, royal academy of dance, IDTA, irish",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        {
          property: "og:url",
          content: this.seo.site + "partners-and-third-parties",
        },
        {
          property: "og:image",
          content: this.seo.site + "img/logo.jpg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: this.seo.site + "partners-and-third-parties",
        },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/logo.jpg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/logo.jpg",
        },
      ],
    };
  },
};
</script>
