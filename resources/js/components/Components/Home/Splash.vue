<template>
  <v-dialog
    @click:outside="close"
    v-model="$store.state.splash"
    :width="$vuetify.breakpoint.xs ? 350 : 1350"
  >
    <v-card elevation="12" dark>
        <!-- width 1280 -->
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="6" md="6" v-for="(img, index) in imgs" :key="index">
            <v-img
              :src="img.src"
              :alt="img.alt"
              contain
              @click="image_click()"
              style="cursor: pointer"
            />
          </v-col>
          <!-- <v-col
            cols="12"
          >
            <video ref="video_player"  width="100%" height="100%" loop preload="true" autoplay playsinline controls>
                <source src="//stepup.ae/video/urabn-playground.mp4" type="video/mp4">
                <source type="video/webm" src="/video/urabn-playground.webm" />
            </video>
          </v-col> -->
        </v-row>
      </v-container>

      <v-card-text class="ma-0 pa-0">
        <v-btn
          block
          dark
          color="red"
          @click="close"
          class="text-none"
          tile
        >
          Close
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>

export default {

  created() {
     this.$store.commit("SPLASH", true);
    setTimeout(() => {
     this.$refs.video_player.play();
    }, 1000);
  },

  name: "splash",
  data() {
    return {
      imgs: [
        // {
        //   src: "/img/splash/teeny-classes-v2.jpeg",
        //   alt: "Teeny Classes",
        // },
        //  {
        //   src: "/img/splash/winter-sports-camp.jpeg",
        //   alt: "Winter Camp",
        // },
        {
          src: "/img/camps/Midterm/2023/halloween_2023.jpeg",
          lazy: "/img/camps/Midterm/2023/halloween_2023.jpeg",
          alt: "Summer Multi Skills Camp",
        },
        // {
        //   src: "/img/camps/summer/2023/performing-arts-camp-2023.jpeg",
        //   lazy: "/img/camps/Spring/2022/performing-arts-camp-2023.jpg",
        //   alt: "Summer Performing Arts Camp",
        // },
        // {
        //   src: "/img/camps/Spring/2022/hr/sports-camp.jpg",
        //   lazy: "/img/camps/Spring/2022/lr/sports-camp.jpg",
        //   alt: "Spring Break Sport Camp",
        // }
      ],
    };
  },
  methods: {
    close() {
      // this.$refs.video_player.pause();
      // this.$refs.video_player.currentTime = 0
      this.$store.commit("SPLASH", false);
    },

    image_click() {
      // const competitions = {text: 'Competition'}
      // this.$store.commit('compElite', competitions)
      // this.$store.commit('isCompElite', true)
      // this.$router.push("/camps/midterm/world-tour");
      this.close();
    },
  },
};
</script>
