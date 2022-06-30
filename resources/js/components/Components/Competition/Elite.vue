<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <h1 class="text-center display-1">
                <v-btn small text class="text-none" @click="goback">
                  <v-icon> mdi-arrow-left</v-icon> Go Back
                </v-btn>
                {{ compElite.text }}
              </h1>
            </v-col>
            <v-col cols="12">
              <h2
                class="text-center body-2"
                v-for="det in compElite.details"
                :key="det"
                v-html="det"
              ></h2>
            </v-col>
            <v-col cols="12">
              <v-img
                :src="compElite.path"
                :alt="compElite.alt"
                class="mx-auto"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "competition-training-elite",
  data: () => ({
    isOpen: false,
    open: {},
  }),
  methods: {
    goback() {
      this.$store.commit("COMP_ELITE", {});
      this.$store.commit("IS_COMP_ELITE", false);
    },
    openCategory(item) {
      // console.log(item)
      this.open = item;
      this.isOpen = true;
    },
  },
  computed: {
    compElite() {
      const elite = {
        text: "Elite Training",
        details: [
          "The Academy offers an “Elite training program”. This is an invitation only class for those students who show promising talent and dedication to their dance studies. During this class students will be pushed to improve on their flexibility, stamina, technique, performance skills and versatility. The perfect class for those who are wanting to take Dance & Performing Arts to the next level. Those wish to develop a solid foundation in their skills, and for those who wish to pursue a career in the industry. The Elite class is an additional class, and all students must still be attending their regular classes.",
        ],
        path: "/img/competitions/elite.jpg",
        alt: "StepUp Academy Elite Training",
      };
      return elite;
    },
  },
};
</script>
