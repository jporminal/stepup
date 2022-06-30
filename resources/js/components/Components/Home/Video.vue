<template>
    <v-lazy v-model="isActive" :option="{threshold: .5}" transition="fade-transition">
        <!-- <section class="VideoBg">
            <video-bg :sources="video" :muted="false" >
                <v-sheet color="rgba(255, 255, 255, 0.3)" class="d-flex align-center flex-wrap" height="100%">
                        <v-row align="center" justify="center">
                            <v-col cols="12" xs="12" md="8">
                                    <h1 class="myFont white--text text-center" >StepUp Academy</h1><br>
                                    <h2 :class=" $vuetify.breakpoint.lgAndUp ? 'body-2 white--text text-none text-center' : 'smallVideoFont text-none white--text text-center'" v-html="content"></h2>

                            </v-col>
                        </v-row>

                </v-sheet>
            </video-bg>
        </section> -->
        <v-card color="black">
            <!-- <v-container fluid> -->
                <v-row align="center" no-gutters>
                    <v-col cols="12" md="7">
                        <!-- <section class="VideoBg">
                            <video-bg :sources="video" ></video-bg>
                        </section> -->
                        <video  width="100%" height="750" loop preload="false" autoplay muted playsinline>
                            <source src="//stepup.ae/video/timelapse.mp4" type="video/mp4">
                            <source type="video/webm" src="/video/timelapse.webm" />
                        </video>
                    </v-col>
                    <v-col cols="12" md="5">
                            <v-container>
                                <h1 class="myFont white--text text-center" >StepUp Academy</h1><br>
                                <h2 :class=" $vuetify.breakpoint.lgAndUp ? 'body-2 white--text text-none text-center' : 'smallVideoFont text-none white--text text-center'" v-html="content"></h2>
                            </v-container>

                    </v-col>
                </v-row>
            <!-- </v-container> -->
        </v-card>
    </v-lazy>
</template>


<script>
  export default {
      name: 'Video-About',
      data() {
          return {
              isActive: false,
              video: ['https://stepup.ae/video/timelapse.mp4'],
              content: 'Established in 2011, StepUp Academy has become one of Dubai’s leading Ballet & Performing Arts schools.<br><br>Offering classes from 15 months old, through to adults. The Academy offers a high-quality service with experienced and fully qualified instructors from around the globe. Classes are available in a wide variety of genres, meaning there is something for everyone. Beginners through to advanced level, competition teams which travel overseas to compete, as well as additional training for those wanting to pursue a future in the industry.<br><br>StepUp Academy are also the only school in the UAE with the license and rights to run Kinder Dance classes, which come from the US. They have 6 expertise classes which are specially designed around the development of a child, using a combination of Dance, Gymnastics and Fitness based activities (Kinder Dance With Me, Tots Ballet, Gym, Kinder Dance, Kids Yoga and Motion)<br><br>In addition to regular classes, the academy provides a Multi-Skills camp and Performing Arts camp throughout all school holidays and are available from 4 years upwards. Groups are arranged based on age.<br><br>Teaching across several locations in Dubai, including popular residential areas such as Motor City, The Lakes, Emirates Hills, The Springs, The Meadows, Arabian Ranches 2, Emirates Golf Club, Jumeirah Village Triangle, Palm Jumeirah, Jumeirah, Meydan, Jumeirah Beach Residence and Satwa, contact us today to find out more about what’s on offer near you!'
          }
      }
  }
</script>

<style>
  .VideoBg {
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    max-height: 550px;
  }
  .VideoBg video-bg {
    position: relative;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
  }
  h1.myFont {
      font-family: Tahoma,Verdana,Segoe,sans-serif !important;
      font-size: 2.125rem!important;
      line-height: 2.5rem;
      letter-spacing: .0073529412em!important;
  }
  .smallVideoFont {
      font-size: 9px;
  }
  @media screen and (min-width: 1000px ) and (max-width: 1400px) {
      .smallVideoFont {
        font-size: 13px;
    }
  }
</style>

