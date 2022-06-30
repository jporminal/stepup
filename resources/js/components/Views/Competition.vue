<template>
  <div>
    <my_category v-if="!$store.state.isCompElite" />
    <my_competitions
      v-if="
        $store.state.isCompElite && $store.state.compElite.text == 'Competition'
      "
    />
    <my_elites
      v-if="
        $store.state.isCompElite &&
        $store.state.compElite.text == 'Elite Training'
      "
    />
  </div>
</template>
<script>
export default {
  name: "competition-elite-training",

  components: {
    my_category: () => import("../Components/Competition/category"),
    my_competitions: () => import("../Components/Competition/Competition"),
    my_elites: () => import("../Components/Competition/Elite"),
  },

  data() {
    return {
      seo: {
        title: "StepUp Academy ",
        description:
          "The Academy offers additional training in the form of an “Elite training program”. This is an invitation only class for those students who show promising talent and dedication to their dance studies",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Competition & Elite Training",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.seo.description },
        {
          name: "keywords",
          content: "competition, training, competition and elite training,",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        {
          property: "og:url",
          content: this.seo.site + "competition-elite-training",
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
          content: this.seo.site + "competition-elite-training",
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
