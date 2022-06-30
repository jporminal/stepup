<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-container class="pa-4 text-center">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12">
              <h1 class="text-center display-2">
                Term 3 2021 - 2022 Schedules
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

            <template v-for="(schedule, i) in schedules">
              <v-col :key="i" cols="12" md="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    hover
                    :img="schedule.path"
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
              <v-img :src="schedule.path" class="mx-auto">
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
        "Motor City is our home base, and where StepUp Academy was established in 2011. Here we have 4 fully equipped, purpose-built dance studios, a stock room full of uniform and miscellaneous items, and our full-time reception team. <br><br>",
        "We only collaborate with the best in the industry, and we are lucky enough to be partnered up with companies such as - Fitness First Middle East, Foremarke School, Arcadia Preparatory School, Safa Community School, Du Gym, Emirates Golf Club, Little Land Nursery and Montessori Centre, Safari Kids, Homegrown Nursery, Kinder Dance International, Raffles International Nurseries, Building Blocks Nursery, O Donnell Irish Dancing. <br><br>",
        "Classes which we currently offer include - Ballet, Tap & Modern, Acro, Gymnastics, Street Jazz, Technical Jazz, Lyrical Contemporary, Pointe, Repertoire, Conditioning & Strengthening, Hip Hop, Musical Theatre, Singing, Dance Syndrome, Kinder Dance With Me, Kinder Tots, Kinder Dance, Kinder Gym, Kids Yoga, Bounce Dance Fit, Latin. In addition to these Dance and Performing Arts classes, we also offer Elite training and run competition teams. These are specialised classes and run on an invitation and audition basis. We make sure that we cater classes for everyone, and are pleased to be able to offer classes for beginners through to an advanced level, classes for enjoyment, as well as classes for those who wish to take their dancing to the next level and wanting to pursue a future in the industry. <br><br>",
        "Click on your chosen location to see what classes we are offering near you! If there is a specific class you are interested in and it is not available at your chosen location, please get in contact us to let us know.",
      ],
      schedules: [
        {
          title: "Motorcity Schedule",
          path: "/img/schedules/03312022/hr/Motor-city-ballet-singing.jpg",
          lazy: "/img/schedules/03312022/lr/Motor-city-ballet-singing.jpg",
          alt: "StepUp Academy Motor City Schedules",
          id: "#",
        },
        {
          title: "Motorcity Schedule",
          path: "/img/schedules/04292022/hr/Motor-city-others.jpg",
          lazy: "/img/schedules/04292022/lr/Motor-city-others.jpg",
          alt: "StepUp Academy Motor City Schedules",
          id: "#",
        },
        {
          title: "Motorcity Schedule Private Singing Lesson",
          path: "/img/schedules/03262022/hr/Motor-city-singing-lesson.jpg",
          lazy: "/img/schedules/03262022/lr/Motor-city-singing-lesson.jpg",
          alt: "StepUp Academy Motor City Schedules",
          id: "#",
        },
        {
          title: "Motorcity Schedule Adult",
          path: "/img/schedules/03262022/hr/Adult-classes.jpg",
          lazy: "/img/schedules/03262022/lr/Adult-classes.jpg",
          alt: "StepUp Academy Motor City Adult Schedules",
          id: "#",
        },
        {
          title: "Repton Al Barsha Schedule",
          path: "/img/schedules/03262022/hr/Repton-al-barsha.jpg",
          lazy: "/img/schedules/03262022/lr/Repton-al-barsha.jpg",
          alt: "StepUp Academy Repton Al Barsha Schedules",
          id: "#",
        },
        {
          title: "Damac Hills 2 Schedule",
          path: "/img/schedules/03262022/hr/Damac-hills-2.jpg",
          lazy: "/img/schedules/03262022/lr/Damac-hills-2.jpg",
          alt: "StepUp Academy Damac Hills 2 Schedules",
          id: "#",
        },
        {
          title: "Victory Heights Primary School",
          path: "/img/schedules/04262022/hr/victory-heights-primary-school.jpg",
          lazy: "/img/schedules/04262022/lr/victory-heights-primary-school.jpg",
          alt: "StepUp Academy Victory Heights Primary School",
          id: "#",
        },
        {
          title: "Lakes Schedule",
          path: "/img/schedules/03262022/hr/Lakes.jpg",
          lazy: "/img/schedules/03262022/lr/Lakes.jpg",
          alt: "StepUp Academy Fitness First Lakes Schedules",
          id: "#",
        },
        {
          title: "Arabian Ranches 2 Schedule",
          path: "/img/schedules/03262022/hr/Arabian-ranches.jpg",
          lazy: "/img/schedules/03262022/lr/Arabian-ranches.jpg",
          alt: "StepUp Academy Fitness First Arabian Ranches 2 Schedules",
          id: "#",
        },
        // {
        //   title: "Arcdia",
        //   path: "/img/schedules/03262022/hr/Arcadia.jpg",
        //   lazy: "/img/schedules/03262022/lr/Arcadia.jpg",
        //   alt: "StepUp Academy Arcdia",
        //   id: "#",
        // },
      ],
    };
  },
  methods: {
    openDialog(schedule) {
      this.isOpen = true;
      this.schedule = schedule;
    },
  },
};
</script>

