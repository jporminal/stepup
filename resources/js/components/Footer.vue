<template>
  <v-footer
    dark
    color="info lighten-1"
    padless
    :absolute="$route.name == 'Home' ? false : true"
    :app="$route.name == 'Home' ? false : true"
  >
    <v-card flat tile width="100%" color="transparent">
      <v-card-text>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="4">
              <h4 class="text-center font-weight-light">
                Mobile:
                <a href="tel:+971558552797" class="white--text"
                  >+971 55 855 2797</a
                >
              </h4>
            </v-col>
            <v-col cols="12" md="4">
              <h4 class="text-center font-weight-light">
                Telephone:
                <a href="tel:+97144534360" class="white--text"
                  >+971 4 453 4360</a
                >
              </h4>
            </v-col>
            <!-- <v-col cols="12" md="4">
                                <h4 class="text-center font-weight-light"> Email Address: <a href="mailto:info@stepup.ae" class="white--text"> info@stepup.ae</a> </h4>
                        </v-col> -->
            <v-col cols="12" md="4">
              <h4 class="text-center font-weight-light">
                StepUp Academy, 113 Apex Atrium, Motor City, Dubai, United Arab
                Emirates
              </h4>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="text-center blue">
        <v-container fluid>
          <v-row align="center" justify="space-around">
            <v-col cols="12" md="6">
              <strong class="title"
                >Get connected with us on StepUp Academy social
                networks!</strong
              >
              <br v-if="$vuetify.breakpoint.mdAndDown" />
              <v-btn
                icon
                v-for="social in socialmedias"
                :key="social.icon"
                x-large
                :href="social.path"
                target="_blank"
              >
                <v-icon> {{ social.icon }} </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" v-if="$vuetify.breakpoint.mdAndDown">
              <v-divider></v-divider>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                icon
                v-for="social in kinderdances"
                :key="social.icon"
                x-large
                :href="social.path"
                target="_blank"
              >
                <v-icon> {{ social.icon }} </v-icon>
              </v-btn>
              <br v-if="$vuetify.breakpoint.mdAndDown" />
              <strong class="title"
                >Get connected with us on Kinder Dance social networks!</strong
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "vbmc-footer",
  data() {
    return {
      socialmedias: [
        {
          icon: "mdi-facebook-box",
          path: "https://www.facebook.com/StepUpAcademyDubai/",
        },
        {
          icon: "mdi-instagram",
          path: "https://www.instagram.com/step_up_academy/",
        },
        {
          icon: "mdi-youtube",
          path: "https://www.youtube.com/channel/UCse7ozeeaGxD8BT7LnxXVFw",
        },
        // {icon: 'mdi-facebook-box', path: 'https://www.facebook.com/KinderDanceDubai/'},
        // {icon: 'mdi-instagram', path: 'https://www.instagram.com/kinderdance_dubai/'}
      ],
      kinderdances: [
        {
          icon: "mdi-facebook-box",
          path: "https://www.facebook.com/KinderDanceDubai/",
        },
        {
          icon: "mdi-instagram",
          path: "https://www.instagram.com/kinderdance_dubai",
        },
        // {icon: 'mdi-facebook-box', path: 'https://www.facebook.com/KinderDanceDubai/'},
        // {icon: 'mdi-instagram', path: 'https://www.instagram.com/kinderdance_dubai/'}
      ],
      footerImages: [
        {
          path: "/img/footer.jpg",
          alt: "StepUp Academy KinderDance International",
        },
        { path: "/img/IDTA.png", alt: "StepUp Academy IDTA" },
        { path: "/img/rad.jpg", alt: "StepUp Academy Royal Academy of Dance" },
      ],
    };
  },
};
</script>
