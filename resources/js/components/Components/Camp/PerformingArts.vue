<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-card flat color="transparent">
          <v-card-text>
            <v-container>
              <v-row align="center" justify="space-between">
                <v-col cols="12" md="5">
                  <v-img
                    :src="images.path"
                    :alt="images.alt"
                    class="mx-auto"
                    contain
                  ></v-img>
                </v-col>
                <v-col cols="12" md="7">
                  <h1 class="text-center display-1">{{ title }}</h1>
                  <h3
                    class="subtitle"
                    v-for="(word, i) in words"
                    :key="i"
                    v-html="word"
                  ></h3>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Performing-Arts",
  data: () => ({
    title: "Performing Arts Camp",
    words: [
      "Our Performing Arts Camp is for both students with a love and passion for Performing Arts, as well as those who wish to come along and have the chance to explore and try out different styles. Throughout the week they will get to participate in a wide variety of styles including Jazz, Lyrical Contemporary, Ballet, Cheerleading, Gymnastics, Musical Theatre, Hip Hop and Acro. The camp will provide a high standard of teaching across all styles. Students must come to the camp wearing dance or sportswear each day.",
    ],
    images: {
      path: "/img/camps/Performing-Arts.jpg",
      alt: "StepUp Academy Performing Arts",
    },
  }),
};
</script>
