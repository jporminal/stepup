<template>
  <v-card flat>
    <v-card-text>
      <p class="display-1 text-center"> {{$store.state.Date_ranges.store_setup.camp_lesson_text.value}} </p>
    </v-card-text>
    <v-card-text>
      <v-container>
        <v-row align="center" justify="center">
          <v-col v-for="(camp, index) in Camps" :key="index" cols="12" md="5">
            <v-card :to="camp.to">
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
          text: "Midterm Camp",
          image: "/img/camps/Midterm/2023/multi-skills-2023.jpeg",
          alt: "Midterm Camp",
          to: "midterm-camps",
        },
 
      ],
    };
  },
};
</script>
