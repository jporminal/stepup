<template>
  <div>
    <my_schedules />
  </div>
</template>
<script>
export default {
  name: "schedules-locations",

  components: {
    my_schedules: () => import("../Components/Schedule/Schedules"),
  },

  data() {
    return {
      seo: {
        title: "StepUp Academy Schedules",
        description:
          "Motor City is our home base, and where StepUp Academy was established in 2011. Here we have 4 fully equipped, purpose-built dance studios, a stock room full of uniform and miscellaneous items, and our full-time reception team.",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Motor City, Lakes, Emirates Hills, Springs",
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
            "motor city, fitness first, arabian ranches, lakes, emirates golf club, raffles nurseries, foremarke",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        { property: "og:url", content: this.seo.site + "schedules-locations" },
        {
          property: "og:image",
          content: this.seo.site + "img/schedules/motor-city.jpg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: this.seo.site + "schedules-locations",
        },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/schedules/motor-city.jpg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/schedules/motor-city.jpg",
        },
      ],
    };
  },
};
</script>
