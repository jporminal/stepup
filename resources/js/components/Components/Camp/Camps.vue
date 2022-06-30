<template>
  <v-card flat>
    <v-card-text>
      <h1 class="mt-2 display-1 text-center">Camps</h1>
    </v-card-text>

    <v-card-text>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <h2
              class="body-2 text-center"
              v-for="text in texts"
              :key="text"
              v-html="text"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-text>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" v-for="camp in camps" :key="camp.title">
            
              <v-card
                :img="camp.src"
                :alt="camp.alt"
                :elevation="hover ? 12 : 2"
                class="mx-auto"
                :width="
                  $vuetify.breakpoint.mdAndUp
                    ? '500': '325'"
                :height="
                  $vuetify.breakpoint.mdAndUp
                    ? '500' : '325'
                "
              ></v-card>
              <!-- <v-card
                flat
                :to="camp.to"
                :img="camp.path"
                :alt="camp.alt"
                :height="
                  $vuetify.breakpoint.lg
                    ? '560'
                    : $vuetify.breakpoint.xl
                    ? '900'
                    : $vuetify.breakpoint.md
                    ? '400'
                    : $vuetify.breakpoint.sm
                    ? '1080'
                    : '450'
                "
              ></v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "camps",
  data: () => ({
    dialog: false,
    texts: [
      "Here at StepUp Academy, we offer multiple holiday camps, in order to cater for everyone aged 3.5 years upwards.<br><br>Being able to offer friends & families 1 location for everyone to enjoy the holidays, means less driving around and more convenience for parents and guardians.<br><br>",
      "In our Multi-Skills camps, students aged 3.5yrs upwards, are able to enjoy their day, packed with lots of activities, ranging from Arts & Crafts, Martial Arts, Dancing, Drama, Ball games, Team games and more… Perfect to keep those little busy bodies occupied and engaged, and importantly having fun and making new friends!<br><br>Performing Arts is the perfect camp for those with a passion for the Performing Arts, or for those who wish to try out multiple styles, such as Street Jazz, Ballet, Acro, Musical Theatre, Lyrical & Technical Jazz! No previous experience is necessary but is advised. This camp is for students aged 6 years and above.<br><br>",
      "Our Sports camp, is in collaboration with Urban Playground. This unique camp is designed for students aged 7 years upwards and for those who love to be active and playing sports! Students will take part in activities such as Cricket, 360 Ball, Touch Tennis, Pickle Ball, as well as fun tailor designed games and activities. Students will get to improve and practice their individual skills as well as work as part of a team. This is an outdoors camp.<br><br>All of our camps run throughout October half term, Winter break, February half term, Spring break and Summer holidays.<br><br>Each camp is based in the Apex Atrium, Motor City",
    ],

    camps: [
      {
        title: "Spring Multi-Skills Camp",
        age: "3yrs - 11yrs",
        date: "27<sup>th</sup> March - 7<sup>th</sup> April 2022",
        src: "/img/camps/Spring/2022/hr/multi-skill.jpg",
        lazy: "/img/camps/Spring/2022/lr/multi-skill.jpg",
        alt: "Spring Break Multi Skills Camp",
        to: {name: 'MultiSkills'},
      },
      {
        title: "Spring Performing Arts Camp",
        age: "7yrs - 15yrs",
        date: "27<sup>th</sup> March - 7<sup>th</sup> April 2022",
        src: "/img/camps/Spring/2022/hr/performing-arts.jpg",
        lazy: "/img/camps/Spring/2022/lr/performing-arts.jpg",
        alt: "Spring Break Performing Arts Camp",
        to: {name: 'PerformingArts'},
      },
      {
        title: "Spring Sport Camp",
        age: "6yrs - 11yrs",
        date: "27<sup>th</sup> March - 7<sup>th</sup> April 2022",
        src: "/img/camps/Spring/2022/hr/sports-camp.jpg",
        lazy: "/img/camps/Spring/2022/lr/sports-camp.jpg",
        alt: "Spring Break Sport Camp",
        to: {name: 'Sports'},
      },
      
    ],
    camp: {},
    hover: false
  }),
  methods: {
    openModal(item) {
      this.dialog = true;
      this.camp = item;
    },
  },
};
</script>
