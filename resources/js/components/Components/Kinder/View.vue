<template>
  <div class="slant-card-others-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-container class="pa-4 text-center">
          <v-row align="center" justify="center">
            <v-col cols="12">
              <h1 class="text-center subtitle-1 myFont" v-html="wording"></h1>
            </v-col>

            <template v-for="(schedule, i) in kinderDances">
              <v-col :key="i" cols="12" md="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    :img="schedule.logo"
                    hover
                    :height="
                      $vuetify.breakpoint.xl
                        ? '300'
                        : $vuetify.breakpoint.lg
                        ? '200'
                        : $vuetify.breakpoint.md
                        ? '160'
                        : $vuetify.breakpoint.sm
                        ? '400'
                        : '180'
                    "
                    @click="openDialog(schedule)"
                    class="d-flex align-end justify-center flex-wrap"
                  >
                  </v-card>
                </v-hover>
                <v-alert
                  border="left"
                  :color="schedule.color"
                  dark
                  class="title text-center white--text"
                  >{{ schedule.numbers }}</v-alert
                >
              </v-col>
            </template>
          </v-row>
        </v-container>
        <v-dialog v-model="isOpen" width="900" persistent>
          <v-card>
            <v-container>
              <v-row align="center" justify="center">
                <v-col cols="12">
                  <v-card-text>
                    <video id="myVideo" width="100%" autoplay>
                      <source :src="kinder.video" type="video/mp4" />
                    </video>
                  </v-card-text>
                </v-col>
                <v-col cols="12">
                  <v-card-text>
                    <h1 class="display-1 text-center">
                      {{ kinder.title }}
                    </h1>
                    <h3 class="caption text-center">
                      {{ kinder.numbers }}
                    </h3>
                  </v-card-text>
                  <v-card-text>
                    <h2
                      v-for="content in kinder.contents"
                      :key="content.text"
                      class="body-2 text-center"
                      v-html="content.text"
                    ></h2>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="close"> close </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Kinder-Pogram",

  data() {
    return {
      isOpen: false,
      kinder: {},

      wording:
        "Kinder Dance is a franchise directly from the US, and StepUp Academy is the only school in the UAE with the rights and license to run the specially designed programs. Programs are available from 15months upwards.<br><br>The Kinderdance programs focus on teaching to the “TOTAL CHILD” Each program blends cognitive, social and emotional development and physical and communication skills. Children learn the basics of ballet, tap, acrobatics, creative movement, floor gymnastics, gross motor skills, fitness and nutritional knowledge while learning colors, numbers, shapes, words, songs and age appropriate concepts.<br><br>Kinderdance® is concerned with the total development of the child, because children learn with their bodies as well as their minds. For young children, movement, music and dance can be natural tools for learning as well as expressing their feelings. All the experts tell us so. Piaget, Arnheim, Glasser, Cratty, Montessori the most influential child psychologists and educators of our era all agree that a planned developmental program in movement should be part of every child’s education. And since early childhood education is the foundation for higher education, how a young child learns to learn will have a lasting influence, not just in school, but later in life as well.",

      kinderDances: [
        {
          title: "Dance with Me",
          color: "#5680E9",
          logo: "/img/KinderDance/logos/dance-with-me.jpg",
          alt:
            "StepUp Academy is the only school in UAE licensed and rights to teach the Dance With Me under Kinder Programs",
          numbers: "15 - 24 months",
          id: "dance-with-me",
          video: "/video/Dance-With-Me.MP4",
          contents: [
            {
              text:
                "Little movers and their favourite adult are involved in a cute upbeat class filled with interactive songs and props that are just right for them! The class curriculum offers age appropriate exposure to developmental milestones through dance and sensory-motor activities while nurturing the bond between caregiver and child. Our teachers guide and dance along with caregivers as they participate and learn to facilitate the natural exploration and progression of motor development through play, laying the groundwork for academic success as the children grow. Children will have a smooth transition from “Dance With Me” into the two year old program, Tots, when they are ready!",
            },
          ],
        },

        {
          title: "Tots Ballet",
          color: "#5AB9EA",
          logo: "/img/KinderDance/logos/tots.jpg",
          alt:
            "StepUp Academy is the only school in UAE licensed and rights to teach the Tots under Kinder Programs",
          numbers: "2 years",
          id: "tots",
          video: "/video/Tots.MP4",
          contents: [
            {
              text:
                "Two year old children love to explore. Such freedom allows for a variety of physical activities. Our program allows a two year old’s natural curiosity to flourish in a multitude of ways with an emphasis on movement exploration. Young children enjoy a challenge, and when they are given the opportunity to test their abilities, it is both developmentally appropriate as well as safe. Tots is designed to develop gross motor skills, movement creativity, physical development, and body awareness while learning numbers, colours, shapes, and songs. Our trained dance teachers ensure a learning environment that is fun, safe, and full of care.",
            },
          ],
        },

        {
          title: "Gym",
          color: "#8860D0",
          logo: "/img/KinderDance/logos/gym.jpg",
          alt:
            "StepUp Academy is the only school in UAE licensed and rights to teach the Gym under Kinder Programs",
          numbers: "3 - 5 years",
          id: "gym",
          video: "/video/Gym.MP4",
          contents: [
            {
              text:
                "This program will enhance the physical, social, emotional, and cognitive development of the children while building their sense of self and others. Gym allows 3-5year old children to develop their social and gross motor skills through developmental floor gymnastics. Our Gym program is unique, it provides a complete educational experience. Not only do children enjoy physical fitness activities, they also learn shapes, numbers and colours in a fun an exciting atmosphere.",
            },
          ],
        },

        {
          title: "Kinder Dance",
          color: "#8860D0",
          logo: "/img/KinderDance/logos/combo-dance.jpg",
          alt:
            "StepUp Academy is the only school in UAE licensed and rights to teach the Kinder Dance under Kinder Programs",
          numbers: " 3 - 5 years",
          id: "Kinder-Dance",
          video: "/video/Combo.MP4",
          contents: [
            {
              text:
                "Kinder Dance for young children, ages 3-5, is a developmental dance, motor skill, music, and fitness program. Kinder Dance teaches the basics of Ballet, Tap, Acrobatics and Creative Movement while blending educational concepts. The program provides children with the potential to be creative, express themselves through movement, learn the foundations of ballet and tap, while building strong muscles, developing social skills, self-confidence and self-esteem. Our programs include educational concepts that are incorporated into each class that build upon their current stage of learning. Numbers, colours, shapes, creative thinking, imagery, language development, social skills, gross and fine motor skills, along with building a child’s sense of self to others are focused on throughout the progression of each program.",
            },
          ],
        },

        {
          title: "Motion",
          color: "#5AB9EA",
          logo: "/img/KinderDance/logos/motion.jpg",
          alt:
            "StepUp Academy is the only school in UAE licensed and rights to teach the Motion under Kinder Programs",
          numbers: "3 - 12 years",
          id: "motion",
          video: "/video/Motion.MP4",
          contents: [
            {
              text:
                "Motion is a developmentally designed Education through Motor Skills, Physical Development, Fitness, Nutrition, and Imagery program that prepares students’ minds and bodies for athletic and academic pursuits. Motion also strengthens communication and leadership abilities in boys and girls in a social and fun environment. The program focuses on the Mind/Body Connection while building self-confidence and self-esteem in young children.<br><br>",
            },
            {
              text:
                "Children ages 3-5, 6-8, and 9-12 will be strengthening multiple muscle groups including their core, back, arms, and legs. Participants will also have opportunities to increase their hand-eye and foot-eye coordination skills with the use of equipment, props and other tools. Leadership abilities grow through age appropriate activities and games designed to promote critical thinking, teamwork, and self-esteem. Participants will also learn about healthy foods and practices that can be easily implemented into daily life. The Motion program utilizes movement to increase a child’s ability to be successful in the passion they pursue such as sports, fitness, the arts, etc. The thrill of movement, exercise, and a healthy lifestyle should start when they are young. Motion hopes to instil that excitement in all our students.",
            },
          ],
        },

        {
          title: "Kids Yoga",
          color: "#5680E9",
          logo: "/img/KinderDance/logos/kids-yoga.jpg",
          alt:
            "StepUp Academy is the only school in UAE licensed and rights to teach the Kids Yoga under Kinder Programs",
          numbers: "3 - 12 years",
          id: "yoga",
          video: "/video/Yoga.MP4",
          contents: [
            {
              text:
                "Kids Yoga is a developmentally designed yoga practice using a playful and fun approach to maximize young children’s learning process. When participating in Kids Yoga, children learn life-long abilities that positively impact their lives as they increase self-regulation, which in turn, facilitates their well-being and positive social interactions.<br><br>",
            },
            {
              text:
                "In Kids Yoga, children learn the foundations of Kids Yoga through storytelling, creative imagery, music, songs, speech, and communication, use of props, and creative movement in a non-religious and non-spiritual manner. The program aims to build children’s self- confidence, self-esteem, and self-expression as they develop muscular strength and flexibility, balance, coordination, and mental focus. The practice of mindfulness and conscious breathing are incorporated to enhance the development of mind and body connection as we nurture the process of self-regulation, stress management, and relaxation.",
            },
          ],
        },
      ],
    };
  },

  methods: {
    openDialog(item) {
      this.kinder = item;
      this.isOpen = true;
    },
    close() {
      //   var vidClip = document.getElementById("myVideo");
      //   vidClip.pause();
      //   vidClip.currentTime = 0;
      window.location.reload();
      this.kinder = {};
      this.isOpen = false;
    },
  },
};
</script>
