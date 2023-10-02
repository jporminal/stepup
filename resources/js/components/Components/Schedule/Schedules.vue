<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-container class="pa-4 text-center">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12">
              <h1 class="text-center display-2">
                Term 1 2023 - 2024 Schedules
              </h1>
            </v-col>
            <v-col cols="12">
              <h2
                class="body-2"
                v-for="detail in details"
                :key="detail"
                v-html="detail"
              />
            </v-col>

                    <!-- :height="
                      $vuetify.breakpoint.xl
                        ? '400' / 800
                        : $vuetify.breakpoint.lg
                        ? '255' / 550
                        : $vuetify.breakpoint.md
                        ? '200' / 400
                        : $vuetify.breakpoint.sm
                        ? '550px'
                        : '240px'
                    " -->
            <v-col cols="12">
                <h1 class="text-center ">
                  Motor City
                </h1>
            </v-col>


            <template v-for="(schedule, i) in schedules">
              <v-col :key="i" cols="12" md="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    hover
                    :img="getImagePath(schedule.path)"
                    :alt="schedule.alt"
                    :height="
                      $vuetify.breakpoint.xl
                        ? '400'
                        : $vuetify.breakpoint.lg
                        ? '255'
                        : $vuetify.breakpoint.md
                        ? '200'
                        : $vuetify.breakpoint.sm
                        ? '550px'
                        : '260px'
                    "
                    @click="openDialog(schedule)"
                  >
                    <v-card-title
                      v-if="schedule.isRamadan"
                      style="font-size: 14px;
                      float: right;
                      color: white;
                      padding: 6px;
                      background-color: #ff000096;">Ramadan Timings</v-card-title>
                  </v-card>
                </v-hover>
              </v-col>
            </template>

            <v-col cols="12">
                <h1 class="text-center ">
                  Springs Souk
                </h1>
            </v-col>

             <template v-for="(schedule, i) in springSouk">
              <v-col :key="i" cols="12" md="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    hover
                    :img="getImagePath(schedule.path)"
                    :alt="schedule.alt"
                    :height="
                      $vuetify.breakpoint.xl
                        ? '400'
                        : $vuetify.breakpoint.lg
                        ? '255'
                        : $vuetify.breakpoint.md
                        ? '200'
                        : $vuetify.breakpoint.sm
                        ? '550px'
                        : '260px'
                    "
                    @click="openDialog(schedule)"
                  >
                    <v-card-title
                      v-if="schedule.isRamadan"
                      style="font-size: 14px;
                      float: right;
                      color: white;
                      padding: 6px;
                      background-color: #ff000096;">Ramadan Timings</v-card-title>
                  </v-card>
                </v-hover>
              </v-col>
            </template>

            <v-col cols="12">
                <h1 class="text-center ">
                  Other Locations
                </h1>
                <span>South View School, SAFA Community School, Fitness First Lakes, Victory Heights Primary School, Repton Al Barsha</span>
            </v-col>

          <template v-for="(schedule, i) in otherLocations">
              <v-col :key="i" cols="12" md="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    hover
                    :img="getImagePath(schedule.path)"
                    :alt="schedule.alt"
                    :height="
                      $vuetify.breakpoint.xl
                        ? '400'
                        : $vuetify.breakpoint.lg
                        ? '255'
                        : $vuetify.breakpoint.md
                        ? '200'
                        : $vuetify.breakpoint.sm
                        ? '550px'
                        : '260px'
                    "
                    @click="openDialog(schedule)"
                  >

                  </v-card>
                </v-hover>
              </v-col>
            </template>

          </v-row>
          <v-dialog v-model="isOpen">
            <v-card>
              <v-img :src="getImagePath(schedule.path)" class="mx-auto">
                <v-btn
                  absolute
                  dark
                  text
                  top
                  right
                  color="red"
                  @click="isOpen = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-img>
            </v-card>
          </v-dialog>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "time-table",
  data() {
    return {
      isOpen: false,
      schedule: {},
      details: [
        "Motor City is our home base, and where StepUp Academy was established in 2011, here we have 6 fully equipped, purpose-built dance studios, Private singing room, our retail and uniform shop, and our full-time admin team. 2022 saw us open our new studios in Springs Souk, located on the 1st floor, here we have 2 fully equipped and purpose built studios which also open up into 1 large studio, reception area and a retail section for uniforms. <br><br>",
        "Click on your chosen location to see what classes we are offering near you! If there is a specific class you are interested in and it is not available at your chosen location, please do get in contact us to let us know."
        // "Motor City is our home base, and where StepUp Academy was established in 2011. Here we have 4 fully equipped, purpose-built dance studios, a stock room full of uniform and miscellaneous items, and our full-time reception team. <br><br>",
        // "We only collaborate with the best in the industry, and we are lucky enough to be partnered up with companies such as - Fitness First Middle East, Foremarke School, Arcadia Preparatory School, Safa Community School, Du Gym, Emirates Golf Club, Little Land Nursery and Montessori Centre, Safari Kids, Homegrown Nursery, Kinder Dance International, Raffles International Nurseries, Building Blocks Nursery, O Donnell Irish Dancing. <br><br>",
        // "Classes which we currently offer include - Ballet, Tap & Modern, Acro, Gymnastics, Street Jazz, Technical Jazz, Lyrical Contemporary, Pointe, Repertoire, Conditioning & Strengthening, Hip Hop, Musical Theatre, Singing, Dance Syndrome, Kinder Dance With Me, Kinder Tots, Kinder Dance, Kinder Gym, Kids Yoga, Bounce Dance Fit, Latin. In addition to these Dance and Performing Arts classes, we also offer Elite training and run competition teams. These are specialised classes and run on an invitation and audition basis. We make sure that we cater classes for everyone, and are pleased to be able to offer classes for beginners through to an advanced level, classes for enjoyment, as well as classes for those who wish to take their dancing to the next level and wanting to pursue a future in the industry. <br><br>",
        // "Click on your chosen location to see what classes we are offering near you! If there is a specific class you are interested in and it is not available at your chosen location, please get in contact us to let us know.",
      ],
      schedules: [
        {
          title: "Motorcity Schedule",
          path: "/img/schedules/08232023/motor-city-1.jpeg",
          lazy: "/img/schedules/08232023/motor-city-1.jpeg",
          alt: "StepUp Academy Motor City Schedules",
          isRamadan: false,
          id: "#",
        },
        {
          title: "Motorcity Schedule",
          path: "/img/schedules/08232023/motor-city-2.jpeg",
          lazy: "/img/schedules/08232023/motor-city-2.jpeg",
          alt: "StepUp Academy Motor City Schedules",
          isRamadan: false,
          id: "#",
        },
        {
          title: "Motorcity Schedule",
          path: "/img/schedules/08232023/motor-city-3.jpeg",
          lazy: "/img/schedules/08232023/motor-city-3.jpeg",
          alt: "StepUp Academy Motor City Schedules",
          isRamadan: false,
          id: "#",
        },
        {
          title: "Motorcity Schedule",
          path: "/img/schedules/08232023/motor-city-4.jpeg",
          lazy: "public/img/schedules/08232023/motor-city-4.jpeg",
          alt: " Academy Motor City Schedules",
          isRamadan: false,
          id: "#",
        },
      // {
      //     title: "Private Singing Lessons (Trinity)",
      //     path: "/img/schedules/08232022/private-singing-lesson.jpeg",
      //     lazy: "/img/schedules/08232022/private-singing-lesson.jpeg",
      //     alt: "Private Singing Lessons (Trinity)",
      //     id: "#",
      //   },
      ],
      springSouk:[
        {
          title: "Spring Souk Schedule",
          path: "/img/schedules/08232023/spring-souk-1.jpeg",
          lazy: "/img/schedules/08232023/spring-souk-1.jpeg",
          alt: "StepUp Academy Spring Souk Schedules",
          isRamadan: false,
          id: "#",
        },
        {
          title: "Spring Souk Adult Classes",
          path: "/img/schedules/08232023/spring-souk-2.jpeg",
          lazy: "/img/schedules/08232023/spring-souk-2.jpeg",
          alt: "StepUp Academy Spring Souk Schedules",
          isRamadan: false,
          id: "#",
        },
      ],
      otherLocations:[
            {
              title: "South View Schedule",
              path: "/img/schedules/08232023/svs.jpeg",
              lazy: "/img/schedules/08232023/svs.jpeg",
              alt: "StepUp Academy South View Schedules",
              id: "#",
            },
            {
              title: "SAFA Community School Schedule",
              path: "/img/schedules/08232023/safa.jpeg",
              lazy: "/img/schedules/08232023/safa.jpeg",
              alt: "SAFA Community School Schedules",
              id: "#",
            },
            // {
            //   title: "Fitness First Lakes Schedule",
            //   path: "/img/schedules/04242023/others/fitness-first.jpeg",
            //   lazy: "/img/schedules/04242023/others/fitness-first.jpeg",
            //   alt: "Fitness First Lakes Schedules",
            //   id: "#",
            // },
            //  {
            //   title: "Fitness First Meadows Schedule",
            //   path: "/img/schedules/04242023/others/fitness-first-meadows.jpeg",
            //   lazy: "/img/schedules/04242023/others/fitness-first-meadows.jpeg",
            //   alt: "Fitness First Meadows Schedules",
            //   id: "#",
            // },
            {
              title: "Victory Heights Primary School Schedule",
              path: "/img/schedules/08232023/vhps.jpeg",
              lazy: "/img/schedules/08232023/vhps.jpeg",
              alt: "Victory Heights Primary School Schedules",
              id: "#",
            },
            {
              title: "Repton AL Barsha Schedule",
              path: "/img/schedules/08232023/rab.jpeg",
              lazy: "/img/schedules/08232023/rab.jpeg",
              alt: "Repton AL Barsha Schedules",
              id: "#",
            },
      ]
    };
  },
  methods: {
    openDialog(schedule) {
      this.isOpen = true;
      this.schedule = schedule;
    },
  getImagePath(path){
      const today = new Date().toISOString().split('T')[0]; // gets the current date in 'YYYY-MM-DD' format
      return path + "?date=" + today;
  }
  },
};
</script>

