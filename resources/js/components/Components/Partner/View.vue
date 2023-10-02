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

                        class="mx-auto pa-3"
                        max-width="400"
                    >
                        <v-img
                            v-if="partner.invertColor"
                            :style="{filter: ' invert(1) hue-rotate(180deg'}"
                            contain
                            height="200px"
                            :src="partner.image"
                        >
                        </v-img>
                        <v-img
                            v-else
                            contain
                            height="200px"
                            :src="partner.image"
                        >
                        </v-img>

                        <v-card-subtitle >
                            <a :href="partner.path" target="_blank">{{partner.name }}</a>

                        </v-card-subtitle>
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
          name: "Repton Al Barsha School",
            invertColor: true,
          image: "/img/thirdparties/repton-albarsha.png",
          alt: "",
          path: "https://www.reptonalbarsha.org/",
        },
          {
              name: "Victory Heights School",
              image: "/img/thirdparties/victory-heights.png",
              alt: "",
              path: "https://www.vhprimary.com",
          },
          {
              name: "SAFA Community School",
              image: "/img/thirdparties/SAFA-Community-School.jpg",
              alt: "",
              path: "http://www.safacommunityschool.com/",
          },
        {
          name: "South View School",
            invertColor: true,
          image: "/img/thirdparties/south-view-school.png",
          alt: "",
          path: "https://southviewschool.com/",
        },

        {
          name: "Proscenium",
          image: "/img/thirdparties/proscenium.svg",
          alt: "",
          path: "https://www.proscenium.ae",
        },
          {
              name: "Mini Athletics",
              image: "/img/thirdparties/mini-athletics.png",
              alt: "",
              path: "https://www.miniathletics.com",
          },
        {
          name: "Acrobatic Arts",
          image: "img/thirdparties/acrobatic-arts.png",
          alt: "",
          path: "https://www.acrobaticarts.com",
        },
        {
          name: "Imperial Society of Teachers of Dancing",
          image: "img/thirdparties/istd.png",
          alt: "",
          path: "https://www.istd.org/home/",
        },

        {
          name: "Building Blocks Nursery",
          image: "/img/thirdparties/Building-Blocks.jpg",
          alt: "",
          path: "https://building-blocks.ae/",
        },
        {
          name: "Royal Academy of Dance",
          image: "/img/thirdparties/Royal-Academy-Dance.jpg",
          alt: "",
          path: "https://www.royalacademyofdance.org/",
        },
        {
          name: "International Dance Teachers Association",
          image: "/img/thirdparties/IDTA.jpg",
          alt: "",
          path: "https://www.idta.co.uk",
        },
        {
          name: "Irish Dance",
          image: "/img/thirdparties/Irish.jpg",
          alt: "",
          path: "#",
        },
        {
          name: "Martial Arts",
          image: "/img/thirdparties/Martial-Arts.jpg",
          alt: "",
          path: "#",
        },
        {
          name: "Baby Bloom",
          image: "/img/thirdparties/Baby-Bloom.jpg",
          alt: "",
          path: "#",
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
