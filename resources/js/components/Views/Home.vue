<template>
  <div>
    <snackbar />
    <splash />
    <offered />
    <about />
    <buttonMenu />
    <ContactUs id="contactus" />
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    snackbar: () => import("../Components/Snackbar/Global_view"),
    splash: () => import("../Components/Home/Splash"),
    offered: () => import("../Components/Home/Offered"),
    about: () => import("../Components/Home/Video"),
    buttonMenu: () => import("../Components/Home/ButtonMenus"),
    ContactUs: () => import("../Components/Home/ContactUs"),
  },

  data() {
    return {
      seo: {
        title: "Ballet Dance School",
        description:
          "StepUp Academy are also the only school in the UAE with the license and rights to run Kinder Dance classes, which come from the US. They have 6 expertise classes which are specially designed around the development of a child, using a combination of Dance, Gymnastics and Fitness based activities (Kinder Dance With Me, Tots Ballet, Gym, Kinder Dance, Kids Yoga and Motion",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/",
      },
    };
  },

  metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Acro|Kinder Dance|Performing Arts",
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
            "dance, dance classes, dubai classes, ballet, dubai dance school, ballet dance in dubai, kinder dance, kinder, hiphop, dance classes dubai, performing arts",
        },
        // OpenGraph data (Most widely used)
        { property: "og:title", content: this.seo.title },
        { property: "og:site_name", content: this.seo.site_name },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "article" },
        // Should the the same as your canonical link, see below.
        { property: "og:url", content: this.seo.site },
        {
          property: "og:image",
          content: this.seo.site + "img/disney/disney-2017-2.jpg",
        },
        // Often the same as your meta description, but not always.
        { property: "og:description", content: this.seo.description },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: this.seo.site },
        { name: "twitter:title", content: this.seo.title },
        { name: "twitter:description", content: this.seo.description },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@vmbcarabbacan" },
        {
          name: "twitter:image:src",
          content: this.seo.site + "img/disney/disney-2017-2.jpg",
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: this.seo.title },
        { itemprop: "description", content: this.seo.description },
        {
          itemprop: "image",
          content: this.seo.site + "img/disney/disney-2017-2.jpg",
        },
      ],
      script: [
        { src: "https://smtpjs.com/v3/smtp.js", async: true, defer: true },
      ],
    };
  },
};
</script>
