<template>
  <div>
    <section>
      <v-card flat dark color="#49a0d9">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-card-text
                class="display-2"
                style="font-family: 'Comic Sans MS' !important"
              >
                <div class="text-center">FAQs</div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </section>
    <section>
      <v-card flat>
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" md="2" v-for="nav in navs" :key="nav.name">
              <v-card dark :color="nav.color" :to="nav.path" class="ma-3">
                <v-card-text class="text-center">
                  <h1 class="body-1">{{ nav.name }}</h1>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </section>
    <section v-for="(content, i) in contents" :key="i" :id="content.name">
      <v-card :color="content.color">
        <template v-if="content.position == 'left'">
          <div class="slant-card-staff-container">
            <div class="slant-card-staff">
              <div class="slant-card-staff-inner">
                <v-container fluid>
                  <v-row row align-center justify-space-around>
                    <v-col cols="12" md="4">
                      <v-card-text
                        v-for="(my_img, k) in content.image"
                        :key="k"
                      >
                        <v-img
                          :src="my_img.path"
                          :alt="my_img.alt"
                          width="auto"
                          max-width="450"
                          contain
                        ></v-img>
                      </v-card-text>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-container>
                        <v-row align="center" justify="center">
                          <v-col
                            cols="12"
                            v-for="(title, j) in content.bodies"
                            :key="j"
                          >
                            <v-card-text class="headline">
                              <div class="text-xs-center">
                                {{ title.title }}
                              </div>
                            </v-card-text>
                            <v-card-text
                              class="body-2"
                              v-for="(body, l) in title.bodies"
                              :key="l"
                            >
                              <div class="text-xs-center">
                                {{ body.content }}
                              </div>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="slant-card-others-container">
            <div class="slant-card-others">
              <div class="slant-card-others-inner">
                <v-container fluid>
                  <v-row row align-center justify-space-around>
                    <v-col cols="12" md="6">
                      <v-container>
                        <v-row align="center" justify="center">
                          <v-col
                            cols="12"
                            v-for="(title, m) in content.bodies"
                            :key="m"
                          >
                            <v-card-text class="headline">
                              <div class="text-xs-center">
                                {{ title.title }}
                              </div>
                            </v-card-text>
                            <v-card-text
                              class="body-2"
                              v-for="(body, n) in title.bodies"
                              :key="n"
                            >
                              <div class="text-xs-center">
                                {{ body.content }}
                              </div>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-card-text
                        v-for="(my_img, o) in content.image"
                        :key="o"
                      >
                        <v-img
                          :src="my_img.path"
                          :alt="my_img.alt"
                          width="auto"
                          max-width="450"
                          contain
                        ></v-img>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </div>
        </template>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  name: "faqs",
  data() {
    return {
      navs: [
        {
          color: "#5AB9EA",
          name: "Decision Making",
          path: { path: "/faq", hash: "#decisionmaking" },
        },
        {
          color: "#5680E9",
          name: "Trial Class and Make Up",
          path: { path: "/faq", hash: "#trialclass" },
        },
        {
          color: "#8860D0",
          name: " Contact Teacher and Parents",
          path: { path: "/faq", hash: "#contactteacher" },
        },
        {
          color: "#8860D0",
          name: "Uniform",
          path: { path: "/faq", hash: "#uniform" },
        },
        {
          color: "#5680E9",
          name: "Performance",
          path: { path: "/faq", hash: "#performance" },
        },
        {
          color: "#5AB9EA",
          name: "Exams",
          path: { path: "/faq", hash: "#exams" },
        },
      ],
      contents: [
        {
          position: "left",
          image: [
            {
              path: "img/decision-making.jpg",
              alt: "StepUp Academy Decision making",
              key: "1",
            },
          ],
          bodies: [
            {
              title: "How do I decide which class is right for me or my child?",
              bodies: [
                {
                  content:
                    "We offer a great selection of Dance and Fitness classes to cater for all ages and abilities. We offer trial classes and afterwards our teachers will be happy to give you feedback, this will ensure we find a suitable class for you or your child. For more information see our “Schedule” section on the website, where you can view your preferred location and select the appropriate age group/level for your child.",
                },
              ],
            },
            {
              title: "Should my child take multiple classes a week?",
              bodies: [
                {
                  content:
                    "For all RAD ballet classes should you wish for your child to be eligible for the annual assessments and examinations they need to be coming to class a minimum of twice a week.  Like all new activities the more frequently you do them the quicker you see results, although it’s not mandatory it would be highly recommended!",
                },
              ],
            },
            {
              title:
                "If my child has danced before, can they move up to the higher group?",
              bodies: [
                {
                  content:
                    "We would always advise you to select the age appropriate class for you child, the teacher can assess your child’s ability and make recommendations/adjustments. We do not usually move younger children into the older age group classes, unless in exceptional circumstances.",
                },
              ],
            },
            {
              title: "What is the Elite class and can my child join?",
              bodies: [
                {
                  content:
                    "For the Elite class selected students are invited by their teachers, invitations to the class will be based on based on ability, commitment and performance.",
                },
              ],
            },
            {
              title: "Which classes are the most popular?",
              bodies: [
                {
                  content:
                    "All our classes are becoming more popular, however, please note each child is individual and we recommend a trial class to see what is right for your child. To check availability and secure your place please contact reception, by completing a registration form, accepting our T&C’s ad signing up to the term.",
                },
              ],
            },
            {
              title: "Can boys come to step up?",
              bodies: [{ content: "Yes of course the more the merrier!" }],
            },
          ],
          color: "#fff",
          name: "decisionmaking",
        },

        {
          position: "right",
          image: [
            {
              path: "img/Trial-Class-and-Make-Up-Class.jpg",
              alt: "StepUp Academy Trial Class And Makeup Class",
              key: "2",
            },
          ],
          bodies: [
            {
              title: "Do I have to pay for the trial session?",
              bodies: [
                {
                  content:
                    "We do not currently offer free trial sessions. Please speak to a member of our admin team for more details and prices.",
                },
              ],
            },
            {
              title:
                "Why can I not pay for the classes each week rather than pay for a full term?",
              bodies: [
                {
                  content:
                    "We do not offer a “pay as you go” facility for the children’s classes, we ask for you to sign up to the term, this secures your Childs place in the class each week. It’s also important for your child to attend regularly, most classes will follow a syllabus where new techniques and dance routines are learnt.  All students will develop confidence, social skills, co-ordination, performance skills, colibility, technique, rhythm as well as motor and gross skill development",
                },
                {
                  content:
                    "We have a set capacity for all classes which we need to ensure is accurate. Limiting the the number of students in each class means we are complying with Health and safety regulations for each different location. Adult classes can be purchased individually or check out the available packages we have on offer!",
                },
              ],
            },
            {
              title: "Should my child still attend class when not well?",
              bodies: [
                {
                  content:
                    "If your child is sick please let us know that they will not be coming to class, and we can arrange for them to attend another class when they are better. If the child is not contagious we always advise for the child to come and watch their class in order to not fall behind.",
                },
              ],
            },
            {
              title:
                "What is the procedure/policy with makeup classes? I missed a lesson can I make it up?",
              bodies: [
                {
                  content:
                    "If you know you are going to miss a lesson please let us know in advance, where possible we will try to arrange an alternative time/day.",
                },
              ],
            },
          ],
          color: "#f8f8f8",
          name: "trialclass",
        },

        {
          position: "left",
          image: [
            {
              path: "img/Contact-teacher-and-parents.jpg",
              alt: "StepUp Academy Teachers and Parents",
              key: "3",
            },
          ],
          bodies: [
            {
              title:
                "If I want to speak with a teacher how do I contact them as they are too busy and there is not enough time before or after a class?",
              bodies: [
                {
                  content:
                    "If you want to speak with your child’s teacher, we appreciate sometimes it will be difficult as their classes usually run back to back. If you have a quick question you may speak to your child’s teacher at the start of your child’s class. If you have any general questions our reception staff are always available to help, they can be contacted either by phone on +971 44 534 360 or +971 55 855 2797 and by Email info@stepup.ae.",
                },
                {
                  content:
                    "If your question is specifically for the dance teacher, we can arrange for them to call you back when they are not teaching. Please send your call back request through to info@stepup.ae and we will arrange this for you.",
                },
              ],
            },
            {
              title: "Do you offer private classes?",
              bodies: [
                {
                  content:
                    "Any requests for private lessons need to be submitted, please send your specific request through to info@stepup.ae and we will check teacher and studio availability.",
                },
              ],
            },
            {
              title: "Why do the class schedules sometimes change?",
              bodies: [
                {
                  content:
                    "We try to limit the changes made to the schedules, however if we do make any changes to timings we will notify you at the earliest point, by email and text message, (please ensure you update us on any changes to your personal details) We have many new and ongoing partnerships in different locations across Dubai all our schedules are available on our website www.stepup.ae",
                },
              ],
            },
            {
              title: "Why aren’t parents allowed in the room to watch?",
              bodies: [
                {
                  content:
                    "All teachers are experienced and will help support and encourage your child to quickly settle into class. We encourage student’s independence, this in turn enables your child to build relationships with fellow students and their teachers. When parents are present in the studio, student’s attention and performance will naturally differ to when it is just the teacher present, therefore the lesson outcomes are not easily achieved. There will be an opportunity at the end of each term when you will be invited into the class to watch what the students have been learning throughout the term. Due to Health and safety, our studios don’t have the capacity for parents.",
                },
              ],
            },
          ],
          color: "#fff",
          name: "contactteacher",
        },

        {
          position: "right",
          image: [
            {
              path: "img/uniform.jpg",
              alt: "StepUp Academy Uniform",
              key: "4",
            },
          ],
          bodies: [
            {
              title: "Why does hair need to be in a bun for ballet?",
              bodies: [
                {
                  content:
                    "We enforce a strict policy for ballet classes, ballet buns are part of the uniforms discipline and etiquette that comes with the class.",
                },
              ],
            },
            {
              title: "Why do I have to wear a set uniform?",
              bodies: [
                {
                  content:
                    "We enforce a strict set uniform policy for all our classes, this is because wearing a uniform with pride is part of the discipline and respect that comes with learning any dance or any other performing art. It will help students feel part of the team and show respect for not only their teacher, but also their fellow class mates.",
                },
              ],
            },
            {
              title: "How do I get the perfect bun?",
              bodies: [
                {
                  content:
                    "See tutorial on https://www.youtube.com/watch?v=qGlZNdl2pE4",
                },
              ],
            },
            {
              title: "How can I get the uniform?",
              bodies: [
                {
                  content:
                    "You can order your uniform via our website (online shop) or you can come into see us at our main office in Motor City, where our team would be happy to help you. For a list of uniforms please check out the “shop” on our website, you can arrange to collect your order, at our Motor City location or can request your child’s Teacher bring it to class. Dance teachers will also carry this information to class with them should need it. Should you have any questions regarding uniform please check with a member of the teaching or admin team.",
                },
              ],
            },
            {
              title: "My dance shoes are dirty how do I clean them?",
              bodies: [
                {
                  content:
                    "Always check the label for cleaning instructions, Pinterest and YouTube always have good tips too!",
                },
              ],
            },
          ],
          color: "#f8f8f8",
          name: "uniform",
        },

        {
          position: "left",
          image: [
            {
              path: "img/shows-events.jpg",
              alt: "StepUp Academy Performace nad Exam",
              key: "5",
            },
          ],
          bodies: [
            {
              title:
                "Will my child get the opportunity to perform at any events/shows?",
              bodies: [
                {
                  content:
                    "YES!!! Facebook and Instagram will also keep you up to date with what’s happening at StepUp Motor City and all our outside locations!",
                },
                {
                  content:
                    "We hold an annual end of year show, where all students from across the Academy are given the opportunity to participate. The show always has a set theme and is held in a professional theatre. with a set theme. The end of year shows falls towards the end of term 3, and dates vary due to Ramadan.",
                },
                {
                  content:
                    "Since March 2017 we have started to take StepUp Academy overseas to perform and take part in competitions. So far we have done 3 successful trips to compete in the IFDPA held in Disney Land Paris, as well as being given performance opportunities inside the park and being able to take part in workshops with Disney choreographers. StepUp Academy Dubai is the first school in the UAE to be invited to take part and to date we have brought back 36 trophies all of 1st, 2nd & 3rd place! In 2019 we travelled to the US to compete in the World Dance Competition, where students compete against dance schools from the US and also all around the globe. ",
                },
                {
                  content:
                    "We also get invited to events throughout the year, so there will always be opportunities for selected classes to perform",
                },
              ],
            },
          ],
          color: "#fff",
          name: "performance",
        },

        {
          position: "right",
          image: [
            {
              path: "img/Performance-and-exam.jpg",
              alt: "StepUp Academy Performace nad Exam",
              key: "5",
            },
            {
              path: "img/amorey-group-street.jpg",
              alt: "StepUp Academy Group Street Exam",
              key: "6",
            },
          ],
          bodies: [
            {
              title: "Will my child have the opportunity to sit an exam?",
              bodies: [
                {
                  content:
                    "Here at StepUp Academy we will support and encourage each individual’s progression throughout their chosen class. We also recognize that each student has different abilities.",
                },
                {
                  content:
                    "We have devised various ways of doing this, throughout the term our teachers will hold internal assessments to identify how the student is progressing usually this is done by the end of term 1.",
                },
                {
                  content:
                    "We will only put a student forward for the exam if we are confident that they have a good technique and can recall and understand the syllabus.",
                },
                {
                  content:
                    "Please note age restrictions apply for RAD Ballet Exams – Pre-Primary Age 5, Primary age 6 and Grade 1 age 7, age restrictions must be met by 1st January.",
                },
                {
                  content:
                    "RAD Ballet Exams – Held once a year, International examiners from London visit StepUp Academy, students receive a Certificate, report, medal and a graded mark.",
                },
                {
                  content:
                    "RAD Class Award – Held once a year, International examiners from London visit StepUp Academy, students receive a Certificate and medal.",
                },
                {
                  content:
                    "IDTA –  All students in the following classes will be given the chance to sit an examination with the International Dance Teachers Association (IDTA)",
                },
                { content: "Beginners Ballet" },
                { content: "Tap and Modern" },
                { content: "Gymnastics" },
                { content: "Musical theatre" },
                { content: "Adult Classes" },
                { content: "Stree Jazz" },
                {
                  content:
                    "For the examinations age restrictions apply and your child can either enter a full Graded examination or a Rosette/StarDance award. All exam entrants will receive certification, a medal and an examination report.",
                },
              ],
            },
          ],
          color: "#f8f8f8",
          name: "exams",
        },
      ],
    };
  },
};
</script>
