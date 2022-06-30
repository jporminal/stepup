<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <h1 class="text-center display-3">Our Partners and Third Parties</h1>
        <v-row justify="center">
          <v-col cols="10">
            <h1 class="title">{{ details }}</h1>
          </v-col>
        </v-row>
        <v-responsive max-width="80%" class="mx-auto">
          <transition-group
            tag="v-row"
            class="justify-center"
            name="fade-transition"
          >
            <v-col
              v-for="partner in partners"
              :key="partner.name"
              cols="12"
              md="4"
            >
              <v-hover>
                <template v-slot="{ hover }">
                  <v-card
                    class="overflow-hidden ma-auto"
                    :img="partner.image"
                    :alt="partner.name"
                    hover
                    :height="
                      $vuetify.breakpoint.xl
                        ? '380'
                        : $vuetify.breakpoint.lg
                        ? '250'
                        : $vuetify.breakpoint.md
                        ? '175'
                        : $vuetify.breakpoint.sm
                        ? '450'
                        : '210'
                    "
                    :href="partner.path"
                    target="_blank"
                  >
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute>
                        <v-icon large> mdi-magnify </v-icon>
                      </v-overlay>
                    </v-fade-transition>
                    <v-slide-y-reverse-transition>
                      <v-footer
                        v-if="hover"
                        absolute
                        class="justify-center text-center"
                        height="75"
                        color="#000"
                      >
                        <div
                          class="heading white--text"
                          v-html="partner.name"
                        ></div>
                      </v-footer>
                    </v-slide-y-reverse-transition>
                  </v-card>
                </template>
              </v-hover>
              <div
                v-if="!$vuetify.breakpoint.mdAndUp"
                class="heading text-center"
                v-html="partner.name"
              ></div>
            </v-col>
          </transition-group>
        </v-responsive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "partners-and-third-parties",
  data() {
    return {
      details:
        "Here at StepUp Academy, we collaborate with only the best in the industry. Have a look at our current partners we are teamed up with.",
      partners: [
        {
          name: "Fitness First",
          image: "img/thirdparties/Fitness-First.jpg",
          alt: "",
          path: "https://uae.fitnessfirstme.com/train-with-us/kids",
        },
        {
          name: "DU Gym",
          image: "img/thirdparties/DU-Gym.jpg",
          alt: "",
          path: "https://www.dugym.com/",
        },
        {
          name: "Emirates Golf Club",
          image: "img/thirdparties/Emirates-Golf-Club.jpg",
          alt: "",
          path: "https://www.dubaigolf.com/emirates-golf-club.aspx",
        },
        {
          name: "Foremarke School",
          image: "img/thirdparties/Foremarke-School.jpg",
          alt: "",
          path: "https://www.foremarkedubai.org/",
        },
        {
          name: "Littleland Nursery Dubai",
          image: "img/thirdparties/Little-Land-Nursery.jpg",
          alt: "",
          path: "https://www.littlelandnursery.com/",
        },
        {
          name: "Raffles Internation School(Nursery)",
          image: "img/thirdparties/Raffles-International-School.jpg",
          alt: "",
          path: "https://www.rafflesnurseries.com/",
        },
        {
          name: "SAFA Community School",
          image: "img/thirdparties/SAFA-Community-School.jpg",
          alt: "",
          path: "http://www.safacommunityschool.com/",
        },
        {
          name: "Safari Kid",
          image: "img/thirdparties/Safari-Kid.jpg",
          alt: "",
          path: "http://www.safarikidasia.com/",
        },
        {
          name: "Building Blocks Nursery",
          image: "img/thirdparties/Building-Blocks.jpg",
          alt: "",
          path: "https://building-blocks.ae/",
        },
        {
          name: "Arcadia Preparatory School",
          image: "img/thirdparties/Arcadia-Preparatory.jpg",
          alt: "",
          path: "https://arcadia.sch.ae",
        },
        {
          name: "Home Grown School",
          image: "img/thirdparties/Home-Grown.jpg",
          alt: "",
          path: "http://www.homegrownnursery.ae/",
        },
        {
          name: "Kinder Dance International",
          image: "img/thirdparties/Kinder-Dance.jpg",
          alt: "",
          path: "https://kinderdance.com/",
        },
        {
          name: "Royal Academy of Dance",
          image: "img/thirdparties/Royal-Academy-Dance.jpg",
          alt: "",
          path: "https://www.royalacademyofdance.org/",
        },
        {
          name: "International Dance Teachers Association",
          image: "img/thirdparties/IDTA.jpg",
          alt: "",
          path: "https://www.idta.co.uk",
        },
        {
          name: "Irish",
          image: "img/thirdparties/Irish.jpg",
          alt: "",
          path: "#",
        },
        {
          name: "Martial Arts",
          image: "img/thirdparties/Martial-Arts.jpg",
          alt: "",
          path: "#",
        },
        {
          name: "Baby Bloom",
          image: "img/thirdparties/Baby-Bloom.jpg",
          alt: "",
          path: "#",
        },
        {
          name: "MonViso",
          image: "img/thirdparties/Monvisio.jpg",
          alt: "",
          path: "https://www.monviso.com/",
        },
      ],
    };
  },
};
</script>
<style scoped>
.gallery-card {
  transform-origin: center center 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.fade-transition-leave,
.fade-transition-leave-active,
.fade-transition-leave-to {
  display: none;
}
</style>
