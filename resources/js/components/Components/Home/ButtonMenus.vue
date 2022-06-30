<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-lazy
          v-model="isActive"
          :option="{ threshold: 0.5 }"
          transition="fade-transition"
        >
          <v-container>
            <v-row align="center" justify="center">
              <!-- <template> -->
              <v-col v-for="(menu, i) in menus" :key="i" cols="12" md="3">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    :to="menu.path"
                    :dark="true"
                    v-if="menu.isLink"
                  >
                    <v-img
                      :src="menu.img"
                      :alt="menu.alt"
                      :height="$vuetify.breakpoint.sm ? '400px' : '225px'"
                      class="d-flex align-center text-center"
                    >
                      <h3 class="display-1" v-html="menu.text"></h3>
                    </v-img>
                  </v-card>
                  <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    @click="calendar = true"
                    :dark="true"
                    v-else
                  >
                    <v-img
                      :src="menu.img"
                      :alt="menu.alt"
                      :height="$vuetify.breakpoint.sm ? '400px' : '225px'"
                      class="d-flex align-center text-center"
                    >
                      <h3 class="display-1" v-html="menu.text"></h3>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
              <!-- </template> -->
            </v-row>
          </v-container>
        </v-lazy>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Button-Menus",
  data() {
    return {
      isActive: false,
      menus: [
        {
          text: "Meet the Team",
          img: "/img/Landing/color.jpg",
          alt: "StepUp Academy Color Scheme",
          path: "meet-the-team",
          isDark: false,
          isLink: true,
        },
        {
          text: "Schedules<br>&<br>Locations",
          img: "/img/Landing/schedules-locations.jpg",
          alt: "StepUp Academy RAD Ballet Students",
          path: "schedules-locations",
          isDark: true,
          isLink: true,
        },
        {
          text: "Competition<br>&<br>Elite Training",
          img: "/img/Landing/color.jpg",
          alt: "StepUp Academy Color Scheme",
          path: "competition-elite-training",
          isDark: false,
          isLink: true,
        },
        {
          text: "Class<br>Information",
          img: "/img/Landing/class-information.jpg",
          alt: "StepUp Academy Lyrical Contemporary Students",
          path: "class-information",
          isDark: true,
          isLink: true,
        },
        {
          text: "Testimonials",
          img: "/img/Landing/testimonials.jpg",
          alt: "StepUp Academy Ballet Students",
          path: "parents-testimonial",
          isDark: true,
          isLink: true,
        },
        {
          text: "FAQs",
          img: "/img/Landing/color.jpg",
          alt: "StepUp Academy Color Scheme",
          path: "faq",
          isDark: false,
          isLink: true,
        },
        {
          text: "Kinder<br>Programs",
          img: "/img/Landing/kinder-programs.jpg",
          alt: "StepUp Academy Kinder Programs",
          path: "kinder-program",
          isDark: true,
          isLink: true,
        },
        {
          text: "People of Determination",
          img: "/img/Landing/color.jpg",
          alt: "StepUp Academy Lyrical Contemporary Students",
          path: "people-of-determination",
          isDark: false,
          isLink: true,
        },
        {
          text: "Camps",
          img: "/img/Landing/color.jpg",
          alt: "StepUp Academy Color Scheme",
          path: "camps",
          isDark: false,
          isLink: true,
        },
        {
          text: "Online Shop",
          img: "/img/Landing/shop.jpg",
          alt: "StepUp Academy Acro Students",
          path: "shop-uniforms",
          isDark: true,
          isLink: true,
        },
        {
          text: "Our Partners",
          img: "/img/Landing/color.jpg",
          alt: "StepUp Academy Color Scheme",
          path: "partners-and-third-parties",
          isDark: false,
          isLink: true,
        },
        {
          text: "News",
          img: "/img/Landing/white-three.jpg",
          alt: "StepUp Academy Color Scheme",
          path: "news",
          isDark: true,
          isLink: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.v-card.calendar {
  opacity: 1;
}
</style>
