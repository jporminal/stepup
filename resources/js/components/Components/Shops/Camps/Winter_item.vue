<template>
  <v-card flat>
    <v-card-text>
      <h1 class="text-center font-weight-bold black--text">{{$store.state.Date_ranges.store_setup.camp_lesson_text.value}}</h1>
    </v-card-text>
    <v-card-text>
      <v-container>
        <v-row align="center" justify="center">
          <v-col v-for="(camp, index) in Camps" :key="index" cols="12" md="5">
            <v-card flat :to="camp.to">
              <v-img :src="camp.image" :alt="camp.alt" contain />
              <v-card-text>
                <p class="title text-center">{{ camp.text }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "winter-camps",

  created() {
    this.$store.dispatch('STORE_SETUP');
  },

  data() {
    return {
      Camps: [
        {
          text: "Multi-Skills",
          image: "/img/camps/winter/2022/winter-camp.jpeg",
          alt: "Winter multi-skills camps",
          to: "/camps/winter/multi-skills",
        },
        // {
        //   text: "Performing Arts",
        //   image: "/img/camps/winter/2021/performing-arts.jpg",
        //   alt: "Performing Arts",
        //   to: "/camps/winter/performing-arts",
        // },
        {
          text: "Sports Winter Camp",
          image: "/img/camps/winter/2022/winter-sports-camp.jpeg",
          alt: "Sports Winter Camp",
          to: "",
        },
      ],
    };
  },
};
</script>
