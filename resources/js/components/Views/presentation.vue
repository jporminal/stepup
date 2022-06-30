<template>
  <v-container>
      <v-row>
          <!-- <v-col
            cols="12"
          >
            <video  width="100%" height="750" loop preload="false" autoplay muted playsinline controls>
                <source src="//stepup.ae/video/world-dance.mp4" type="video/mp4">
                <source type="video/webm" src="/video/world-dance.webm" />
            </video>
          </v-col> -->
          <v-col
            cols="12"
            v-for="(image, index) in images"
            :key="index"
            :id="image.name"
          >
            <v-img
                :src="image.link"
                :lazy-src="image.link_lr"
                :alt="image.alt"
                :name="image.name"
            ></v-img>
          </v-col>
          <v-speed-dial
            v-model="fab"
            bottom
            right
            :direction="direction"
            :transition="transition"
            fixed
            fab
          >
            <template v-slot:activator>
              <v-btn
                v-model="fab"
                color="blue darken-2 text-none"
                dark
                fab
              >
                <v-icon v-if="fab">
                  mdi-close
                </v-icon>
                <v-icon v-else>
                  mdi-magnify
                </v-icon>
              </v-btn>
            </template>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              :small="$vuetify.breakpoint.mdAndUp"
              right
              v-for="button in buttons"
              :key="button.name"
              :to="button.path"
              class="text-none"
            >
              {{ button.name }}
            </v-btn>
          </v-speed-dial>
      </v-row>
  </v-container>
</template>
<script>
export default {
  name: "parisOfWordDance",

  data() {
    return {
      buttons: [
        {
          name: "Final Details",
          path: { path: "/USA-2022-Competition-Team", hash: "#section13" },
        },
        {
          name: "Rehearsals",
          path: { path: "/USA-2022-Competition-Team", hash: "#section12" },
        },
        {
          name: "Payments",
          path: { path: "/USA-2022-Competition-Team", hash: "#section11" },
        },
        {
          name: "Cancellation Policy",
          path: { path: "/USA-2022-Competition-Team", hash: "#section10" },
        },
        {
          name: "When Would I Need To Pay?",
          path: { path: "/USA-2022-Competition-Team", hash: "#section9" },
        },
        {
          name: "Costs Involved",
          path: { path: "/USA-2022-Competition-Team", hash: "#section8" },
        },
        {
          name: "Package Not Included",
          path: { path: "/USA-2022-Competition-Team", hash: "#section14" },
        },
        {
          name: "Expectation",
          path: { path: "/USA-2022-Competition-Team", hash: "#section5" },
        },
        {
          name: "Trip Entry - Parents",
          path: { path: "/USA-2022-Competition-Team", hash: "#section4" },
        },
        {
          name: "Trip Entry - Performers",
          path: { path: "/USA-2022-Competition-Team", hash: "#section3" },
        },
        {
          name: "World Dance",
          path: { path: "/USA-2022-Competition-Team", hash: "#section2" },
        },
        {
          name: "Competition Entry Prices",
          path: { path: "/USA-2022-Competition-Team", hash: "#section6" },
        },
        {
          name: "Trip Dates",
          path: { path: "/USA-2022-Competition-Team", hash: "#section1" },
        },
        
      ],
      fab: false,
      direction: 'top',
      transition: 'slide-y-reverse-transition',
        images: [
            {
                link: "/files/paris/hr/PARIS-01.jpg",
                link_lr: "/files/paris/lr/PARIS-01.jpg",
                name: "PARIS-01",
                alt: "StepUp Academy PARIS-01 paris",
                name: ''
            },
            {
                link: "/files/paris/hr/PARIS-02.jpg",
                link_lr: "/files/paris/lr/PARIS-02.jpg",
                name: "trip dates",
                alt: "StepUp Academy trip dates paris",
                name: 'section1'
            },
            {
                link: "/files/paris/hr/PARIS-03.jpg",
                link_lr: "/files/paris/lr/PARIS-03.jpg",
                name: "world dance",
                alt: "StepUp Academy world dance paris",
                name: 'section2'
            },
            {
                link: "/files/paris/hr/PARIS-04.jpg",
                link_lr: "/files/paris/lr/PARIS-04.jpg",
                name: "package price",
                alt: "StepUp Academy package price paris",
                name: 'section3'
            },
            {
                link: "/files/paris/hr/PARIS-05.jpg",
                link_lr: "/files/paris/lr/PARIS-05.jpg",
                name: "trip price",
                alt: "StepUp Academy trip price paris",
                name: ''
            },
            {
                link: "/files/paris/hr/PARIS-06.jpg",
                link_lr: "/files/paris/lr/PARIS-06.jpg",
                name: "unforgettable magical experience",
                alt: "StepUp Academy unforgettable magical experience paris",
                name: ''
            },
            {
                link: "/files/paris/hr/PARIS-07.jpg",
                link_lr: "/files/paris/lr/PARIS-07.jpg",
                name: "family friends",
                alt: "StepUp Academy family friends paris",
                name: 'section4'
            },
            {
                link: "/files/paris/hr/PARIS-08.jpg",
                link_lr: "/files/paris/lr/PARIS-08.jpg",
                name: "student needs",
                alt: "StepUp Academy student needs paris",
                name: 'section5'
            },
            {
                link: "/files/paris/hr/PARIS-09.jpg",
                link_lr: "/files/paris/lr/PARIS-09.jpg",
                name: "competition entry price",
                alt: "StepUp Academy competition entry price paris",
                name: 'section6'
            },
            {
                link: "/files/paris/hr/PARIS-10.jpg",
                link_lr: "/files/paris/lr/PARIS-10.jpg",
                name: "competition entry prices",
                alt: "StepUp Academy competition entry prices paris",
                name: 'section7'
            },
            {
                link: "/files/paris/hr/PARIS-11.jpg",
                link_lr: "/files/paris/lr/PARIS-11.jpg",
                name: "not include",
                alt: "StepUp Academy not include paris",
                name: 'section14'
            },
            {
                link: "/files/paris/hr/PARIS-12.jpg",
                link_lr: "/files/paris/lr/PARIS-12.jpg",
                name: "trip package competition routine",
                alt: "StepUp Academy trip package competition routine paris",
                name: 'section9'
            },
            {
                link: "/files/paris/hr/PARIS-13.jpg",
                link_lr: "/files/paris/lr/PARIS-13.jpg",
                name: "cancellation policy",
                alt: "StepUp Academy cancellation policy paris",
                name: 'section10'
            },
            {
                link: "/files/paris/hr/PARIS-14.jpg",
                link_lr: "/files/paris/lr/PARIS-14.jpg",
                name: "cost",
                alt: "StepUp Academy cost paris",
                name: 'section8'
            }
        ],

      seo: {
        title: "Stepup Academy",
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
      titleTemplate: "%s - Paris 2022",
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

<style>
  .v-speed-dial__list {
    align-items: end;
  }
</style>