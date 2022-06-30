<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <h1 class="text-center display-1">
                <v-btn small text class="text-none" @click="goback">
                  <v-icon> mdi-arrow-left</v-icon> Go Back
                </v-btn>
                {{ compElite.text }}
              </h1>
            </v-col>
            <v-col cols="12">
              <v-row align="center" justify="center">
                <v-col
                  cols="12"
                  md="5"
                  v-for="(path, index) in compElite.paths"
                  :key="index"
                >
                  <v-img
                    :src="path"
                    alt="Stepup Academy 2020 Auditions"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <h2
                class="text-center body-2"
                v-for="det in compElite.details"
                :key="det"
                v-html="det"
              ></h2>
            </v-col>
            <v-col
              v-for="(category, i) in compElite.categories"
              :key="i"
              cols="12"
              md="4"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  dark
                  @click="openCategory(category)"
                >
                  <v-img
                    :src="category.image.path"
                    :alt="category.image.alt"
                    :height="$vuetify.breakpoint.smAndDown ? '400px' : '250px'"
                    class="d-flex align-center flex-wrap"
                  >
                    <h3
                      class="title"
                      color="white"
                      v-html="category.title"
                    ></h3>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
        <v-dialog v-model="isOpen" width="1200">
          <v-card>
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
            <v-card-text class="mt-2">
              <h1 class="text-center display-2">{{ open.title }}</h1>
            </v-card-text>
            <v-card-text>
              <v-container>
                <v-row align="start" justify="center">
                  <template v-for="(content, i) in open.contents">
                    <v-col cols="12" :md="content.size" :key="i">
                      <h2
                        class="body-2"
                        v-for="text in content.texts"
                        :key="text"
                        v-html="text"
                      ></h2>
                    </v-col>
                    <v-col cols="12" :md="content.size" :key="i + 100">
                      <template v-for="(img, i) in content.image">
                        <div :key="i + 200">
                          <v-img
                            v-if="img.path != ''"
                            :src="img.path"
                            :alt="img.alt"
                          >
                          </v-img>
                        </div>
                      </template>
                    </v-col>
                  </template>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "competition-training-elite",
  data: () => ({
    isOpen: false,
    open: {},
  }),
  methods: {
    goback() {
      this.$store.commit("COMP_ELITE", {});
      this.$store.commit("IS_COMP_ELITE", false);
    },
    openCategory(item) {
      // console.log(item)
      this.open = item;
      this.isOpen = true;
    },
  },
  computed: {
    compElite() {
      const competitions = {
        text: "Competition",
        details: [
          "Here at StepUp Academy, we offer students the chance to take their talents both overseas as well as locally and to take part in international dance competitions with dance schools from around the world. Some of our regular overseas trips and competitions include the IFDPA which is held in Disney Land Paris, and the World Dance Competition, which is held in Orlando, USA.",
          "<br><br>IFDPA – Each year we hold open auditions to students aged 5 years and above, to give them the chance to secure a place in our competition team for Paris. This audition is open to all students new and existing. The trip consists of competing in group dances, duets and solos, taking part in the pre parade which goes around the park, taking part in multiple workshops which are led by some of Disney’s choreographers as well as having our own dedicated 20minute show performing inside the park. Students must be attending their regular dance classes as well as additional rehearsals for the competition. ",
          "<br><br>World Dance Competition – This overseas competition is a closed event and not open to everyone. Selected students are chosen to compete here. Based on their technique, ability and how long they have been with the Academy and more. The event consists of competing in numerous categories across group, trio, duet and solo entries. There is a gala dinner/party which is linked to the awards from the competition. In addition to the competition, the students also get to have master classes taught by some of the industry’s top choreographers and performers. Students must be attending their regular dance classes as well as additional rehearsals for the competition.",
        ],
        paths: [],
        alt: "StepUp Academy Competition",
        categories: [
          {
            title: "IFDPA Paris 2020",
            image: {
              path: "/img/Landing/color.jpg",
              alt: "StepUp Academy Color",
            },
            contents: [
              {
                image: [{ path: "", alt: "" }],
                texts: [
                  "<center>Early March 2020 saw StepUp Academy return to the IFDPA, Disneyland Paris. This year we took a team of  32 students between ages 5-17 years. The students were very successful across many categories, see our amazing achievements below.</center><br><br>",
                  "<center>On top of the competition students took part in a showcase within the park, workshops with Disney choreographers and danced in the Disney parade around the park and famous Disney castle.</center><br><br>",
                  "<center>Even with a global pandemic approaching our students did not stop dancing. From training since September 2019 all of their efforts paid off and they without a doubt shone up on the Disney stage!</center>",
                ],
                size: "12",
              },
              {
                image: [
                  {
                    path: "img/competitions/IFDPA-4.jpg",
                    alt: "StepUp Academy IFDPA Paris 2020",
                  },
                ],
                texts: [],
                size: "12",
              },
              {
                image: [
                  {
                    path: "img/competitions/IFDPA-1.jpg",
                    alt: "StepUp Academy IFDPA Paris 2020",
                  },
                ],
                texts: [
                  "<center><h2>GROUP CHAMPIONSHIP </h2></center>",
                  "<center>All Age Open- 1<sup>st</sup> Place (“River Deep, Mountain High”)<br>Junior Ballet- 2<sup>nd</sup> Place (“Up”)<br>Primary Jazz- 1<sup>st</sup> Place (“When I’m Human”)<br>Junior Jazz- 2<sup>nd</sup> Place (“The Diner”)<br>Senior Ballet- 2<sup>nd</sup> Place (“Schindler List”)<br>Senior Jazz- 3<sup>rd</sup> Place (“Beautiful People”)<br>Primary Contemporary- 1<sup>st</sup> Place (Brave)<br>Junior Contemporary- 1<sup>st</sup> Place (Stranger Things)<br>Musical Theatre- 2<sup>nd</sup> Place (9 to 5)<br>Junior Hip Hop- 2<sup>nd</sup> Place<br>All Age Disney- Best Costume Characterisation (Stand Out)</center><br>",
                  "<center><h2>SOLO DANCE CHAMPIONSHIP</h2></center>",
                  "<center>Primary Solo Dance 3-8years - Yi Xin Zhou - 2<sup>nd</sup> Place<br>Senior Solo Dance 15years and over - Fleur Wharton - 2<sup>nd</sup> Place<br><br></center>",
                  "<center><h2>ROXITY CHAMPIONSHIP</h2></center>",
                  "<center>Junior Hip Hop - Haya Sabri - 2<sup>nd</sup> Place (Sushi)<br>Senior Hip Hop - Kate Duncan - 1<sup>st</sup> Place (Bad Girl)<br><br></center>",
                  "<center><h2>DUET CHAMPIONSHIP</h2></center>",
                  "<center>Senior Duo 13 years and over - Sarah & Johanna - 2<sup>nd</sup> Place (Hope you Dance) )<br>Junior Duo 11-13 years - Mattea & Nuria - 1<sup>st</sup> Place (Gift of a Friend)<br><br></center>",
                  "<center><h2>SING STARZ CHAMPIONSHIP</h2></center>",
                  "<center><b>Primary Solo Open</b><br>Siena Bachir - 3<sup>rd</sup> Place (Million Dreams)<br>Chloe Pollara - 2<sup>nd</sup> Place (The Boy Does Nothing)<br><br><b>Junior Solo Open</b><br>Liv Mahaini - 1<sup>st</sup> Place (Colour of the Wind)<br><br><b>Senior Solo Open</b><br>Sophia Conlon - 3<sup>rd</sup> Place (Out Here) </center>",
                ],
                size: "6",
              },
              {
                image: [
                  {
                    path: "img/competitions/IFDPA-2.jpg",
                    alt: "StepUp Academy IFDPA Paris 2020",
                  },
                  {
                    path: "img/competitions/IFDPA-3.jpg",
                    alt: "StepUp Academy IFDPA Paris 2020",
                  },
                ],
                texts: [],
                size: "12",
              },
            ],
          },

          {
            title: "IFDPA Paris 2019",
            image: {
              path: "/img/Landing/color.jpg",
              alt: "StepUp Academy Color",
            },
            contents: [
              {
                image: [{ path: "", alt: "" }],
                texts: [
                  "IFDPA, Disneyland Paris 2019, the year StepUp surpassed all previous achievements.<br><br>",
                  "In March 2019, we took a team of 36 dancers aged between 5-17 years old to compete yet again at the IFDPA competition, held in Paris. We entered categories such as Ballet, Jazz, Tap, Lyrical Contemporary, Hip Hop, Musical Theatre, Sing Starz, Disney themed categories as well as Solo and Duet categories. Bringing home, a record of 30 different awards!<br><br>",
                  "For the third year running StepUp Academy was also honoured to of been given a dedicated 20-minute showcase inside the park. Students were also lucky enough to of participated in Dance and musical Theatre workshops led by Disney performers and choreographers, as well performing in the exciting pre-parade around the park and famous Disney castle.",
                ],
                size: "12",
              },
              {
                image: [
                  {
                    path: "img/competitions/paris-1.jpg",
                    alt: "StepUp Academy IFDPA Paris 2019",
                  },
                  {
                    path: "img/competitions/paris-2.jpg",
                    alt: "StepUp Academy IFDPA Paris 2019",
                  },
                ],
                texts: [
                  "<h2>What an incredible trip! Check out the awards we won</h2><br>",
                  "<strong>2<sup>nd</sup></strong> – Harriett Morgan Senior Solo Open Dance",
                  "<strong>3<sup>rd</sup></strong> – Amorey Frongia Junior Solo Open Dance",
                  "<strong>2<sup>nd</sup></strong> – Daisy Sheate Primary Solo Open Dance<br><br>",

                  "<strong>1<sup>st</sup></strong> – Kiana Mueller Senior Hip Hop Solo",
                  "<strong>1<sup>st</sup></strong> – Lea Maria Mitri Junior Hip Hop Solo",
                  "<strong>2<sup>nd</sup></strong> – Alexis Engelbrecht Junior Hip Hop Solo",
                  "<strong>3<sup>rd</sup></strong> – Gia Andrea Junior Hip Hop Solo<br><br>",

                  "<strong>1<sup>st</sup></strong> – Lara Manuel Disney Sing Starz",
                  "<strong>2<sup>nd</sup></strong> – Sienna Thorn Junior Open Sing Starz",
                  "<strong>2<sup>nd</sup></strong> – Leela Lancely Senior Open Sing Starz <br><br>",

                  "<strong>1<sup>st</sup></strong> – Alexis and Lourdes Senior Duo Open Dance",
                  "<strong>3<sup>rd</sup></strong> – Kiana and Rianah Senior Duo Open Dance",
                  "<strong>1<sup>st</sup></strong> – Karisa and Amorey Junior Duo Open Dance",
                  "<strong>3<sup>rd</sup></strong> – Kaia and Alessandra Primary Duo Open Dance<br><br>",

                  "<strong>1<sup>st</sup></strong> – Senior Ballet",
                  "<strong>1<sup>st</sup></strong> – Junior Ballet",
                  "<strong>1<sup>st</sup></strong> – Senior Jazz",
                  "<strong>1<sup>st</sup></strong> – Junior group Jazz",
                  "<strong>1<sup>st</sup></strong> – Primary group Jazz",
                  "<strong>1<sup>st</sup></strong> – Junior Tap",
                  "<strong>1<sup>st</sup></strong> – Musical Theatre",
                  "<strong>1<sup>st</sup></strong> – Junior Hip Hop Crew",
                  "<strong>3<sup>rd</sup></strong> – Senior Lyrical Contemporary",
                  "<strong>1<sup>st</sup></strong> – Junior Lyrical Contemporary<br><br>",

                  "<strong>Best story telling</strong> – “StepUp Cheetah Girls” All Age Group Open Disney",
                  "<strong>Overall impression</strong> – Junior duo Disney Olivia Birks and Georgia Marshall",
                  "<strong>Best story telling</strong> – Junior duo Disney Ghaliya Wahby and Gia Andrea ",
                  "<strong>Best costume</strong> – Junior Duo Disney Isabella Coetzer and Danielle Poutawera",
                  "<strong>Best story telling</strong> – “Chilling like a Villain” Senior Group Disney ",
                  "<strong>Best musical interpretation</strong> – “Chilling like a Villain” Senior Group Disney <br><br>",
                ],
                size: "6",
              },
            ],
          },

          {
            title: "World Dance Competition US 2019",
            image: {
              path: "/img/Landing/color.jpg",
              alt: "StepUp Academy Color",
            },
            contents: [
              {
                image: [
                  {
                    path: "img/competitions/world-dance-usa.jpg",
                    alt: "StepUp Academy World Dance Competition",
                  },
                ],
                texts: [],
                size: "12",
              },
              {
                image: [{ path: "", alt: "" }],
                texts: [
                  "In June 2019, StepUp Academy were the first UAE based school to fly to the US to compete at the World Dance Competition, held in Orlando, Florida.<br><br>",
                  "Taking a team of 20 students, we entered 7 dances across categories such as Ballet, Jazz, Musical Theatre, Hip Hop and Lyrical Contemporary. Our students competed against 15 other studios from across Central and Southern America and gained High Silver and Gold’s for all dances entered. In addition, their Lyrical Contemporary dance, placed third overall across the entire Junior Category, winning a special award, a massive achievement. We were also thrilled to receive the Judges Award from Dancing with the Stars Emma Slater. To be given such recognition across the whole competition was beyond amazing!<br><br>",
                  "Whilst in Orlando, our students took part in pre parade performances in Disney’s Magic Kingdom and Epcot. All students also danced their hearts out in two different workshops. These workshops were led by Dancing with the Stars, Emma Slater & Sasha Farber and Dancer and Choreographer Geo Hubela.<br><br>",
                  "Our students were amazing representatives of StepUp and showed us all once again how their hard work, dedication and passion for dance pays off. <br><br>",
                ],
                size: "12",
              },
              {
                image: [
                  {
                    path: "img/competitions/usa-1.jpg",
                    alt: "StepUp Academy World Dance Competition 2019",
                  },
                ],
                texts: [
                  "<h2><center><u>The Awards</u></center></h2><br>",
                  "<center><strong><u>Golds</u></strong></center>",
                  "<ul><li>Lyrical Contemporary - Junior Intermediate (Footprints in the Sand)</li><li>Hip Hop - Junior Intermediate (The Delinquents)</li><li>Production Dance - Junior Intermediate (All around the world)</li></ul><br><br>",
                  "<center><strong><u>High Silvers</u></strong></center>",
                  "<ul><li>Ballet- Junior Intermediate (White Feather)</li><li>Musical Theatre- Junior Intermediate (Come Follow the Band)</li><li>Jazz- Junior Intermediate (Breathe)</li><li>Jazz- Petites Intermediate (Enough is Enough)</li></ul><br><br>",
                  "<strong>3<sup>rd</sup> Overall Junior Intermediate Category</strong> - Lyrical Contemporary - Footprints in the Sand<br><br>",
                  "<strong>Emma Slater Judges Award</strong> -Production Dance - All Around the Wolrd<br><br>",
                ],
                size: "6",
              },
              {
                image: [
                  {
                    path: "img/competitions/usa-2.jpg",
                    alt: "StepUp Academy World Dance Competition 2019",
                  },
                ],
                texts: [],
                size: "12",
              },
            ],
          },

          {
            title: "IFDPA Paris 2018",
            image: {
              path: "/img/Landing/color.jpg",
              alt: "StepUp Academy Color",
            },
            contents: [
              {
                image: [
                  {
                    path: "img/competitions/IFDPA-2018-cover.jpg",
                    alt: "StepUp Academy Compete at IFDPA Paris in 2018",
                  },
                ],
                texts: [],
                size: "12",
              },
              {
                image: [{ path: "", alt: "" }],
                texts: [
                  "In 2017 StepUp Academy became the first performing arts school in the UAE to give our students the magical opportunity to perform at Disneyland Paris For 2018, we successfully auditioned and were invited again to perform in the magic! We took a team of 20 students, aged 7-13 and returned with 6 TROPHIES!!!<br><br>",
                  "Not only did we take part in the showcase inside the park, but this year our girls were lucky enough to be able to take part in the pre-parade which travels around the park, and they also took part in an international competition, competing against other dance schools from around Europe! We have also shared a once-in-a-lifetime experience with all our dancers and the parents who came with us. Memories that will be treasured forever.",
                ],
                size: "12",
              },
              {
                image: [
                  {
                    path: "img/competitions/IFDPA-2018.jpg",
                    alt: "StepUp Academy Compete at IFDPA Paris in 2018",
                  },
                ],
                texts: [
                  "<h2>Here's what we won:</h2><br>",
                  "<strong>1<sup>st</sup> Place</strong> – “Walking on Sunshine” – All ages, The Dance Magics",
                  "<strong>2<sup>nd</sup> Place</strong> – “The Rest of my Life” – Senior 13yrs+, Jazz",
                  "<strong>2<sup>nd</sup> Place</strong> – “Work” – Senior 13yrs+, Open Dance",
                  "<strong>2<sup>nd</sup> Place</strong> – “Witch Doctor” – Tia & Emmie Aitken – Junior 8-12yrs, duo open dance",
                  "<strong>3<sup>rd</sup> Place</strong> – “Run this Show” – Rianah Dhamecha & Lourdes Mousa – Junior 8-12yrs, duo open dance",
                  "<strong>3<sup>rd</sup> Place</strong> – “Dancing in the Streets” – All ages, group open dance<br><br>",
                  "<strong>SUCH A HUGE ACHIEVEMENT</strong>, especially given that every group dance they did they competed in the category above them (due to age brackets) and were against older and more experienced competition groups! We couldn’t be any prouder of our girls, or more thankful to their supportive parents, without whom none of this would have been possible.",
                  "<ul><li><strong>MAIN SPONSOR</strong> Lammtara Arts Production – Thank you for sponsoring our full Tracksuit set, T-shirts, Shoes & Costume – lammtara@lammtarastudio.com</li><li>Chi Nail Spa – Thank you for sponsoring our Costume – Motor City, Detroit House Building, 04 457 2485 & JVT, Imperial Residence Building, 04 558 6168</li><li>To Infinity & Beyond – Thank you for sponsoring our personalised Hand-painted bags – 050 343 5208 & nancysafy@gmail.com</li></ul>",
                ],
                size: "6",
              },
            ],
          },

          {
            title: "Dubai Dance Olympics 2018",
            image: {
              path: "/img/Landing/color.jpg",
              alt: "StepUp Academy Color",
            },
            contents: [
              {
                image: [
                  {
                    path: "img/competitions/dubai-dance-olympics.jpg",
                    alt: "StepUp Academy Collage Dubai Dance Olympics 2018",
                  },
                ],
                texts: [
                  "November 2018, StepUp Academy took place in Dubai Dance Olympics. Schools from Dubai, Al Ain, Abu Dhabi and Russia took to the stage to compete against one another.<br>",
                  "<ul><li>Karisa & Amorey – 1<sup>st</sup> place in Acro duet</li><li>Tia & Emmie – 1<sup>st</sup> place in Jazz duet</li><li>Tip Toe – 1<sup>st</sup> place in Hip Hop Group </li><li>Lourdes & Rianah – 2<sup>nd</sup> place in Jazz duet</li><li>Adriana & Giulia – 2<sup>nd</sup> place in Lyrical duet</li><li>Blackbird – 2<sup>nd</sup> place in Pointe, Ballet Group</li><li>Avatar – 2<sup>nd</sup> place in Acro group</li></ul><br><br>",
                  "It was such a lovely experience to collaborate and dance with other dance schools from the UAE",
                ],
                size: "8",
              },
            ],
          },

          {
            title: "Short & Sweet Bollywood 2016",
            image: {
              path: "/img/Landing/color.jpg",
              alt: "StepUp Academy Color",
            },
            contents: [
              {
                image: [{ path: "", alt: "" }],
                texts: [
                  "In October 2016, we jumped out of our known territory and entered the Short & Sweet Bollywood competition! A style which was new to all of us! But we were eager for a challenge and to experience something new.<br><br>",
                  "We took along x3 entries to the competition (Intermediate Street Jazz, Combo and Elite). The competition was held over the weekend and had several rounds before the Gala finals.",
                ],
                size: "8",
              },
              {
                image: [
                  {
                    path: "img/competitions/bollywood.jpg",
                    alt: "StepUp Academy Collage Bollywood Competition",
                  },
                ],
                texts: [
                  "<strong>Each dance was marked based on x5 categories</strong><br>",
                  "<ol><li>Choreography</li><li>Creativity</li><li>Rhythm and Timing</li><li>Song and Suitability</li><li>Costumes</li></ol>",
                  "We were so happy when x2 of our entries made it through to the finals. We were against some extremely strong acts which were all based in Dubai, Sharjah and Abu Dhabi.<br><br>After the Gala finals, we came away with the People’s choice award! It was such a great experience and was so rewarding being able to introduce our students to another dance form and culture.",
                ],
                size: "6",
              },
            ],
          },
        ],
      };

      return competitions;
    },
  },
};
</script>
