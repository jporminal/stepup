<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <h1 class="display-3 text-center">Parent's Testimonials</h1>

        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="10">
              <h2 class="title">{{ details }}</h2>
            </v-col>
            <v-col
              cols="12"
              md="4"
              v-for="(testimonial, i) in testimonials"
              :key="i"
            >
              <v-card class="mt-12" color="grey lighten-4" height="450">
                <v-card-text class="pt-n12">
                  <v-btn
                    color="transparent"
                    class="white--text mt-n12"
                    fab
                    large
                    top
                  >
                    <v-avatar size="120">
                      <img
                        :src="testimonial.image.path"
                        :alt="testimonial.image.alt"
                      />
                    </v-avatar>
                  </v-btn>
                </v-card-text>
                <v-card-text class="mt-4">
                  <v-card
                    tile
                    flat
                    class="overflow-y-auto"
                    color="transparent"
                    height="360"
                  >
                    <v-card-text
                      v-for="content in testimonial.bodies"
                      :key="content"
                    >
                      <h3
                        class="font-italic font-weight-medium body-2 mb-2"
                        v-html="content"
                      />
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <h4 class="caption" style="color: red !important">
                        {{ testimonial.name }}
                      </h4>
                    </v-card-actions>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "partners-and-third-parties",
  data() {
    return {
      details:
        "Customer feedback is important to us, and is a vital tool needed in order to continue improving. Below is some feedback from our parents and students.",
      testimonials: [
        {
          color: "#5680E9",
          name: "Nynne Hesselsoe – Mother of Viktoria, 9years old",
          bodies: [
            "\"My daughter Viktoria, 9 years old, has attended Acro classes at StepUp Academy. Viktoria absolutely love it and it's her favorite time during a busy week. ",
            "Ms. Kaylee her teacher is amazing with the kids. She is helpful, understanding, very skilled and have the patience needed, for the students to improve fast and at the same time have fun. Viktoria has learned so much in such a short time.",
            "As a parent, I can highly recommend StepUp. The staff at the reception and the teachers, are always very helpful and always greet you with a smile.",
            'If Viktoria could decide, she would be having different classes at StepUp every day."',
          ],
          image: {
            path: "/img/testimonials/acro.jpg",
            alt: "StepUp Academy Silhouette Acro",
          },
        },
        {
          color: "#84CEEB",
          name: "Erika Smedley – Office Manager, Little Land Nursery",
          bodies: [
            '"We are very lucky to work with StepUp Academy and value the contribution that Dance and Gym bring to Little Land. The classes are fun and are an excellent way of developing a child’s co-ordination and flexibility, improving a child’s gross motor skills and rhythm, and increasing a child’s self-confidence and social skills.',
            'StepUp Academy has been running dance and gym classes in Little Land for the past 5 years. Miss Caitlin, who teaches the Combo Dance and Kinder Gym classes, is an energetic, friendly and engaging teacher. It is always a delight to have her in Little Land and we are looking forward to another exciting year with Step Up Academy."',
          ],
          image: {
            path: "/img/testimonials/ballet.jpg",
            alt: "StepUp Academy Silhouette Ballet",
          },
        },
        {
          color: "#8860D0",
          name: "Sheldene Scott – Mother of Hannah Scott, Aged 9years",
          bodies: [
            '"Dancing is a major part of Hannah’s life. She lives for her classes. She has been doing Tap and Modern at StepUp Academy since 2016 until present (2019) 3. She was Ms Emily’s first Primary Tap student when the school brought in the IDTA syllabus.',
            "Ms Emily is an excellent teacher whose enthusiasm and passion for dance is infectious. Hannah absolutely loves her Tap and Modern classes. The classes are always fun and engaging. They are focused and delivered in such a way that the girls retain what they are being taught.",
            'Hannah loves to share what she has been taught in her Tap and Modern classes with her friends. It is great to see how Hannah is developing as a dancer and as an individual"',
          ],
          image: {
            path: "/img/testimonials/ballet-2.jpg",
            alt: "StepUp Academy Silhouette Ballet",
          },
        },
        {
          color: "#5AB9EA",
          name: "Laila – Mother of Racha, Ages 14years",
          bodies: [
            '"My daughter has been going to ballet classes at StepUp Academy for the last five years.  She started at grade 3 and last year she completed her grade 7 and Intermediate Ballet RAD exams.  Both of us are very happy with StepUp, with the excellent level of teaching and with the warm and friendly atmosphere.',
            "The teachers, especially Miss Caitlin and Ms Vicky who teach my daughter, are very professional, highly qualified and teach the girls the discipline and technique of ballet while managing to keep it all light-hearted and fun.",
            ' I’m always impressed by their level of dedication and devotion to the students and how much work they are willing to put in so that each student reaches their potential and beyond.  I highly recommend StepUp Academy for any student of Ballet."',
          ],
          image: {
            path: "/img/testimonials/breakdance-and-hip-hop.jpg",
            alt: "StepUp Academy Silhouette Breakdance and Hip Hop",
          },
        },
        {
          color: "#5680E9",
          name: "Vikki Aitken – Mum of Tia, Emmie & Kaia Aitken",
          bodies: [
            '"My 3 daughters have attended ballet, cheerleading and street jazz classes at Step Up for 3 years now. They absolutely love the classes and the teachers/ staff are fantastic. These classes have helped with their confidence, ability and given them all the love of performing.',
            'From my youngest daughter who at 3 years old gets very excited to go to each class and constantly talks of her dance teacher; to my two older daughters who count the days to the next annual performance because they “love it so much.” I strongly recommend Step Up as being the best dance academy in Dubai."',
          ],
          image: {
            path: "/img/testimonials/latin-and-ballroom.jpg",
            alt: "StepUp Academy Silhouette Latin and Ballroom",
          },
        },
        {
          color: "#84CEEB",
          name: "Michela Rescia Iorini – Mum of Maria, Laura & Giulia Iorini",
          bodies: [
            '"My three girls have been taught by Ms. Vicky since their beginning in ballet. We followed her from the previous school to StepUp although this meant driving further from our home. Vicky’s passion and experience along with the great team of teachers and friendly environment makes it well worth the extra distance.',
            'Maria completed Grade 7 ballet, Laura grade 4 and Giulia Grade 2 with great results. They’ve also attended Musical Theatre and SUA classes and have truly enjoyed every lesson. My girls are extremely excited and happy every time they go to dance at Stepup Academy and as a parent I appreciate the professional teaching and the opportunities offered to my children. A 100% satisfaction feedback from us! Thank you Step Up!!"',
          ],
          image: {
            path: "/img/testimonials/lyrical-contemporary.jpg",
            alt: "StepUp Academy Silhouette Lyrical Contemporary",
          },
        },
        {
          color: "#8860D0",
          name: "Samantha Wolhuter – Mum of Hannah Wolhuter",
          bodies: [
            '"Our daughter Hannah has been at StepUp Academy for 3 years now. She started with Kinderdance where her self-confidence and her love for dancing just grew. She has now enrolled in the RAD Ballet Classes starting from Pre Primary into Primary and now into Grade 1. Each and every class she has enrolled in I have seen how the dance teachers take care in their approach with the students, to help build their confidence and to motivate and encourage them in a loving and caring manner.',
            "The teachers have a personnel connection with every child which is great as it shows your child is not just a number in a class room. We as parents are able to watch her lessons on the TV’s in the waiting area and share in her joy when she leaves class, where we can tell her, “yes we saw you, you were amazing” the joy in your child’s face when she knows you saw her and you able to share in her joy and excitement.",
            "Thank You StepUp for that! The team at StepUp Academy is really amazing from when you walk in the door there is always a friendly person with a smile to greet you, to all the dance teachers that are always smiling and bringing so much joy and growing the love Hannah has for dancing, thank you, she loves her classes. Last but not least to Ms Vicky who Manages the Academy, her door is always open and no matter how busy she is with lessons or arranging things she always has the time to smile, greet and chat before dancing off to the next class.",
            'Ms Vicky and her team go way beyond what any of us see, the long hours and nights when it comes to End of Year shows and Camps, the extra lessons when it comes to RAD Ballet exams. I would like to thank all the past, present and future teachers at StepUp for the positive impact you all have had and are going to have in our daughter’s life. To Ms Vicky thank you for everything you do and always remember you are appreciated!!"',
          ],
          image: {
            path: "/img/testimonials/street-jazz.jpg",
            alt: "StepUp Academy Silhouette Street Jazz",
          },
        },
        {
          color: "#5AB9EA",
          name: "Katherine Smith, – Mum of Julia Smith",
          bodies: [
            '"We have been with Step-Up Academy since 2014 where our daughter has attended both musical theatre and street jazz classes. She thoroughly enjoys the attentive tuition from the instructors as well as the elements of fun, enjoyment and team-work brought to each class. From a parent’s perspective, we have found the staff of Step-Up Academy professional, courteous and accomplished in their specific areas of expertise with a willingness to exceed our expectations.',
            'These factors coupled with the satisfaction we get from seeing the progress our daughter makes year-on-year speaks volumes for the way in which Step-Up Academy go about their business. We wouldn’t have any hesitation recommending Step-Up Academy to anyone considering enrolling their children in classes for dance or other forms of the arts."',
          ],
          image: {
            path: "/img/testimonials/tap.jpg",
            alt: "StepUp Academy Silhouette Tap",
          },
        },
        {
          color: "#5680E9",
          name: "Anonymous",
          bodies: [
            '"Finding Step up Academy in Motor City, has been one of the best parts of my daughter’s life in Dubai. Offering the full range of dance disciplines, what began as entry into a Year 4 ballet class, quickly moved into an opportunity to learn tap and modern dance through the direction of the wonderful Miss Emily.',
            "With the exceptional teaching of Miss Christina, movement through the RAD ballet grades on to the Inter-foundation course and pointe work, has meant Step up has been integral to my daughter’s chance to see what dancing is all about. At the heart of any successful organisation is a talented principal, and Miss Vicky who is always at the academy, has a pure and genuine interest in the growth and development of all her dancers.",
            'I feel very privileged to have found such a great dance school for my daughter. Not only are the four fully equipped dance studios perfect venues for young dancers to begin their journey into the world of dance, but the discipline, integral to dance, is instilled by all the teachers which is why this successful academy continues to grow from strength to strength."',
          ],
          image: {
            path: "/img/testimonials/technical-jazz.jpg",
            alt: "StepUp Academy Silhouette Technical Jazz",
          },
        },
      ],
    };
  },
};
</script>

