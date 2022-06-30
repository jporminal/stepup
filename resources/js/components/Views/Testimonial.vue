<template>
  <div>
    <my_testimonial />
  </div>
</template>
<script>
export default {
  name: "parents-testimonial",

  components: {
    my_testimonial: () => import("../Components/Testimonial/Testimonials"),
  },

  data() {
    return {
      seo: {
        title: "StepUp Academy",
        description:
          "Have a look at some of our customers experiences and feedback. Call Us +971 55 855 2797 or email us at info@stepup.ae",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Parent's Testimonials",
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
            "dance, dance classes, dubai classes, ballet, dubai dance school, ballet dance in dubai",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        { property: "og:url", content: this.seo.site + "parents-testimonial" },
        {
          property: "og:image",
          content: this.seo.site + "img/landing/testimonials.jpg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: this.seo.site + "parents-testimonial",
        },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/landing/testimonials.jpg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/landing/testimonials.jpg",
        },
      ],
    };
  },
};
</script>
