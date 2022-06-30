<template>
  <div class="slant-card-others-container">
    <div class="slant-card-others">
      <div class="slant-card-others-inner">
        <v-card flat color="transparent">
          <v-card-text>
            <v-container>
              <v-row align="center" justify="space-between">
                <v-col cols="12" md="7">
                  <h1 class="text-center display-1">{{ title }}</h1>
                  <h3
                    class="subtitle"
                    v-for="(word, i) in words"
                    :key="i"
                    v-html="word"
                  ></h3>
                </v-col>
                <v-col cols="12" md="5">
                  <v-img
                    :src="images.path"
                    :alt="images.alt"
                    class="mx-auto"
                    contain
                  ></v-img>
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
  name: "Multi-Skills",
  data: () => ({
    title: "Multi-Skills Camp",
    words: [
      "Our Multi- Skills Camp offers something for everyone with everyday being packed full of fun activities. Throughout the week your child will get to take part in a variety of activities ranging from Arts and Crafts, Gardening, Science, Karate or Football, Cold Cooking, Team Games and Face Painting. As well as Dance, Drama and Musical Theatre. In addition to the mentioned activities, there is also a bouncy castle set up every Wednesday during camp, a best dressed competition, and other fun activities.<br><br>Throughout the camp the students will be preparing for an end of camp show, which will give all parents, friends, and family the chance to see what they have been working on! This is the highlight of the camp and the students always love dressing up to match the theme and being able to show off what they have achieved during camp.",
    ],
    images: {
      path: "/img/camps/Multi-skills.jpg",
      alt: "StepUp Academy Performing Arts",
    },
  }),
};
</script>
