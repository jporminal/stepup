<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-card flat color="transparent">
          <v-card-text>
            <v-container>
              <v-row align="center" justify="space-around">
                <!-- <template> -->
                <v-col cols="12">
                  <h1 class="display-2">Competition &amp; Elite Training</h1>
                </v-col>
                <v-col cols="12">
                  <h2
                    class="body-2"
                    v-for="detail in details"
                    :key="detail"
                    v-html="detail"
                  />
                </v-col>
                <v-col
                  v-for="(category, i) in categories"
                  :key="i"
                  cols="12"
                  md="6"
                >
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      :elevation="hover ? 12 : 2"
                      :class="{ 'on-hover': hover }"
                      dark
                      @click="goCategory(category)"
                    >
                      <v-img
                        :src="category.path"
                        :alt="category.alt"
                        :height="
                          $vuetify.breakpoint.smAndDown ? '400px' : '400px'
                        "
                        class="d-flex align-center flex-wrap"
                      >
                        <h2 class="display-1" v-html="category.text"></h2>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-col>
                <!-- </template> -->
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
  name: "Elite-Training-Competitiion",
  data: () => ({
    category: false,
    compElite: {},
    details: [
      "In addition to our regular classes, The Academy offers additional training in the form of an “Elite training program”. This is an invitation only class for those students who show promising talent and dedication to their dance studies. During this class students will be pushed to improve on their flexibility, stamina, technique, performance skills and versatility. It is the perfect class for those who are wanting to take Dance & Performing Arts to the next level, those who wish to develop a solid foundation in their skills, and for those who wish to pursue a career in the industry. The Elite class is an additional class, and all students must still be attending their regular Ballet and Performing Arts classes.<br><br>",
      "Another exciting reason to join StepUp Academy, is our competition teams. Each year we create competition teams which travel both overseas and locally to compete against other dance schools. Previous overseas trips include Europe and USA. These teams are all done either by audition or by personal selection. All students are invited and welcome to try out when there are auditions. Being in any of the competition teams requires a lot of dedication, passion, and teamwork, and it is a privilege to be chosen. All students must be continuing with their regular Ballet and Performing Arts classes at StepUp Academy as well as attending competition training and any extra rehearsals. <br><br>",
      "<strong>IFDPA</strong> – Each year we hold open auditions to students aged 5 years and above, to give them the chance to secure a place in our competition team for Paris. This audition is open to all students new and existing and there is no limitation of the number of students who we choose to accept onto the team. The trip consists of competing in group dances, duets and solos, in the following categories – Ballet, Jazz, Modern Contemporary, Tap, Musical Theatre, Sing Starz, Hip Hop and Open Categories. Students also get to take part in the pre parade which goes around the Disney park, taking part in multiple workshops which are led by some of Disney’s choreographers as well as having our own dedicated 20minute show performing inside the park. This is truly a magical and memorable trip for everyone!  <br><br>",
      "<strong>World Dance Competition</strong> – This overseas competition is a closed event and not open to everyone. Selected students are chosen to compete here and there are a limited number of places. Selection is based on a variety of things, such as – a student’s technique, ability, flexibility, ability to pick up and retain choreography, their previous commitment and hard work towards their regular classes, how much of a team player they are, maturity and more. The event consists of competing in numerous categories across group, trio, duet and solo entries. There is a gala dinner/party which is linked to the awards from the competition. In addition to the competition, the students also get to have master classes taught by some of the industry’s top choreographers and performers. Students must be attending their regular dance classes as well as additional rehearsals for the competition.",
    ],
    categories: [
      {
        text: "Competition",
        details: [
          "Here at StepUp Academy, we offer students the chance to take their talents both overseas as well as locally and to take part in international dance competitions with dance schools from around the world. Some of our regular overseas trips and competitions include the IFDPA which is held in Disney Land Paris, and the World Dance Competition, which is held in Orlando, USA.",
          "<br><br>IFDPA – Each year we hold open auditions to students aged 5 years and above, to give them the chance to secure a place in our competition team for Paris. This audition is open to all students new and existing. The trip consists of competing in group dances, duets and solos, taking part in the pre parade which goes around the park, taking part in multiple workshops which are led by some of Disney’s choreographers as well as having our own dedicated 20minute show performing inside the park. Students must be attending their regular dance classes as well as additional rehearsals for the competition. ",
          "<br><br>World Dance Competition – This overseas competition is a closed event and not open to everyone. Selected students are chosen to compete here. Based on their technique, ability and how long they have been with the Academy and more. The event consists of competing in numerous categories across group, trio, duet and solo entries. There is a gala dinner/party which is linked to the awards from the competition. In addition to the competition, the students also get to have master classes taught by some of the industry’s top choreographers and performers. Students must be attending their regular dance classes as well as additional rehearsals for the competition.",
        ],
        path: "/img/competitions/competition.jpeg",
        alt: "StepUp Academy Competition",
      },

      {
        text: "Elite Training",
        details: [
          "The Academy offers an “Elite training program”. This is an invitation only class for those students who show promising talent and dedication to their dance studies. During this class students will be pushed to improve on their flexibility, stamina, technique, performance skills and versatility. The perfect class for those who are wanting to take Dance & Performing Arts to the next level. Those wish to develop a solid foundation in their skills, and for those who wish to pursue a career in the industry. The Elite class is an additional class, and all students must still be attending their regular classes.",
        ],
        path: "/img/competitions/elite.jpg",
        alt: "StepUp Academy Elite Training",
      },
    ],
  }),

  methods: {
    goCategory(item) {
      // console.log(item)
      this.$store.commit("COMP_ELITE", item);
      this.$store.commit("IS_COMP_ELITE", true);
    },
  },
};
</script>
