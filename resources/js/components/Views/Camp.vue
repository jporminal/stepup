<template>
  <div>
    <my_camps />
    <my_multi_skills />
    <my_performing_arts />
  </div>
</template>
<script>
export default {
  name: "Camp",

  components: {
    my_camps: () => import("../Components/Camp/Camps"),
    my_multi_skills: () => import("../Components/Camp/MultiSkill"),
    my_performing_arts: () => import("../Components/Camp/PerformingArts"),
  },

  data() {
    return {
      seo: {
        title: "StepUp Academy Camps",
        description:
          "At StepUp Academy, we offer 2 types of holiday camps to be able to cater something for everyone aged 4 years and above. This also means that we can offer 1 location where parents can drop siblings and friends to.",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Kids & Adults",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.seo.description },
        { name: "keywords", content: "camps, multi skills, performing arts" },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        { property: "og:url", content: this.seo.site + "camps" },
        {
          property: "og:image",
          content: this.seo.site + "img/camps/Multi-skills.jpg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: this.seo.site + "camps" },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/camps/Multi-skills.jpg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/camps/Multi-skills.jpg",
        },
      ],
    };
  },
};
</script>
