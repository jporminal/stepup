<template>
  <div>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-carousel
        v-if="$route.name == 'Home'"
        :height="
          $vuetify.breakpoint.mdAndDown
            ? '300'
            : $vuetify.breakpoint.lg
            ? '500'
            : '650'
        "
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item, i) in webs"
          :key="i"
          :src="item.src"
          :alt="item.text"
        >
        </v-carousel-item>
      </v-carousel>
    </template>
    <template v-else>
      <v-carousel
        v-if="$route.name == 'Home'"
        cycle
        interval="6000"
        :height="$vuetify.breakpoint.sm ? '800' : '380'"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in mobiles"
          :key="i"
          :src="item.srcset"
        >
        </v-carousel-item>
      </v-carousel>
    </template>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      webs: [

        {
          src: "/img/Carousel/STEPUP-CAROUSEL-1.jpg",
          text: "StepUp Academy Royal Academy of Dance Accredited Teacher",
        },
        // {
        //   src: "/img/Carousel/Akoya.jpg",
        //   text: "StepUp Academy Akoya New Location",
        // },
        {
          src: "/img/Carousel/STEPUP-CAROUSEL-2.jpg",
          text: "StepUp Academy World Dance Competition Leg kick",
        },
        {
          src: "/img/Carousel/STEPUP-CAROUSEL-3.jpg",
          text: "StepUp Academy Acro Elite",
        },
        {
          src: "/img/Carousel/STEPUP-CAROUSEL-4.jpg",
          text: "StepUp Academy International Dance Teachers Association",
        },
        {
          src: "/img/Carousel/STEPUP-CAROUSEL-5.jpg",
          text: "StepUp Academy Kinder Programs",
        },
        {
          src: "/img/Carousel/STEPUP-CAROUSEL-6.jpg",
          text: "StepUp Academy Street Jazz",
        },
      ],
      mobiles: [

        {
          srcset: "/img/Carousel/STEPUP-CAROUSEL-1-mobile.jpg",
          text: "StepUp Academy Royal Academy of Dance Accredited Teacher",
        },
        // {
        //   srcset: "/img/Carousel/akoya-mobile.jpeg",
        //   text: "StepUp Academy Akoya New Location",
        // },
        {
          srcset: "/img/Carousel/STEPUP-CAROUSEL-2-mobile.jpg",
          text: "StepUp Academy World Dance Competition Leg kick",
        },
        {
          srcset: "/img/Carousel/STEPUP-CAROUSEL-3-mobile.jpg",
          text: "StepUp Academy Acro Elite",
        },
        {
          srcset: "/img/Carousel/STEPUP-CAROUSEL-4-mobile.jpg",
          text: "StepUp Academy International Dance Teachers Association",
        },
        {
          srcset: "/img/Carousel/STEPUP-CAROUSEL-5-mobile.jpg",
          text: "StepUp Academy Kinder Programs",
        },
        {
          srcset: "/img/Carousel/STEPUP-CAROUSEL-6-mobile.jpg",
          text: "StepUp Academy Street Jazz",
        },
      ],
    };
  },
};
</script>
