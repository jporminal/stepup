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
              content: 'Established in 2011, StepUp Academy has become one of Dubai’s leading Ballet & Performing Arts Schools..<br><br>' +
                     'Offering classes from 6 weeks old, through to adults. The Academy offers a high-quality service with experienced and qualified instructors from around the globe. Classes are available in a wide variety of gernes, meaning there is something for everyone. Beginners through to advanced, competition teams which travel overseas to compete and additional training for those wanting to pursue a future in the industry. We also pride ourselves that we are also able to offer specialized and dedicated classes for people of determination.<br><br>' +
                     'In addition to our regular studio classes where we train over 700 students weekly, we also offer holiday camps, workshops with professionals from the industry, as well as taking part in many events, shows, exams and competitions, both locally and internationally.<br><br>' +
                     'StepUp Academy are re-occurring winners in various competitions overseas in locations such as USA & Paris and have a vast selection of trophies and awards and are also silver medalists for the Special Olympics in 2019!<br><br>' +
                     'If you are looking for a family oriented, professional Academy with high standards, which caters for everyone and anyone then StepUp Academy is the right place for you and your family.' 
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

