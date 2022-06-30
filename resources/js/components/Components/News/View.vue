<template>
  <div class="slant-card-staff-container">
    <div class="slant-card-staff">
      <div class="slant-card-staff-inner">
        <v-container class="pa-4 text-center" v-if="!isMonth">
          <v-row align="center">
            <v-col cols="12">
              <h1 class="title">{{ details }}</h1>
            </v-col>
            <!-- <template> -->
            <v-col v-for="(menu, i) in news" :key="i" cols="12" md="3">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  @click="monthOK(menu)"
                  :dark="true"
                >
                  <v-img
                    :src="menu.path"
                    :alt="menu.alt"
                    height="200px"
                    class="d-flex align-center flex-wrap"
                  >
                    <p class="display-1" v-html="menu.month"></p>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <!-- </template> -->
          </v-row>
        </v-container>
        <!--
                        <v-card color="transparent" flat> -->
        <v-container class="pa-4 text-center" v-if="isMonth && !isYear">
          <v-row align="center" justify="center">
            <!-- <template> -->
            <v-col cols="12" md="3">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  @click="monthBack"
                  :dark="true"
                >
                  <v-btn
                    color="#5680E9"
                    :alt="months.alt"
                    height="225px"
                    width="100%"
                    class="d-flex align-center flex-wrap"
                  >
                    <p class="display-1">Back</p>
                  </v-btn>
                </v-card>
              </v-hover>
            </v-col>
            <v-col v-for="(month, i) in months.years" :key="i" cols="12" md="3">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  @click="yearOK(month)"
                  :dark="true"
                >
                  <v-img
                    :src="'/img/Landing/color.jpg'"
                    :alt="months.alt"
                    height="225px"
                    class="d-flex align-center flex-wrap"
                  >
                    <p class="display-1" v-html="month.year"></p>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <!-- </template> -->
          </v-row>
        </v-container>
        <!-- </v-card> -->

        <v-container class="pa-4 text-center" v-if="isYear">
          <v-row align="center" justify="center">
            <!-- <template> -->
            <v-col cols="12" md="3">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  @click="yearBack"
                  :dark="true"
                >
                  <v-btn
                    color="#5680E9"
                    :alt="months.alt"
                    height="225px"
                    width="100%"
                    class="d-flex align-center flex-wrap"
                  >
                    <p class="display-1">Back</p>
                  </v-btn>
                </v-card>
              </v-hover>
            </v-col>
            <v-col
              v-for="(year, i) in years.category"
              :key="i"
              cols="12"
              md="3"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  @click="openDialog(year)"
                  :dark="true"
                >
                  <v-img
                    :src="'/img/Landing/color.jpg'"
                    :alt="months.alt"
                    height="225px"
                    class="d-flex align-center flex-wrap"
                  >
                    <p class="display-1" v-html="year.text"></p>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <!-- </template> -->
          </v-row>
        </v-container>
      </div>
      <v-dialog v-model="isDialog" width="800">
        <v-card>
          <v-card-text v-for="(image, index) in dialogs.images" :key="index">
            <v-img :src="image.path" :alt="image.alt" class="mx-auto"></v-img>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="success text-none" @click="isDialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      isMonth: false,
      isYear: false,
      isDialog: false,
      months: {},
      years: {},
      dialogs: {},
      details:
        "To help you keep up to date with what has been going on at the Academy, please click below to see our monthly StepUp Academy and Kinder Dance Dubai newsletters.",
      news: [
        {
          isdark: false,
          month: "January",
          path: "/img/Landing/color.jpg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/January/Jan-1.jpg",
                      alt:
                        "StepUp Academy Dubai Dance Olympics | Winter Wonderland",
                    },
                    {
                      path: "/img/newsletters/2019/January/Jan-2.jpg",
                      alt: "StepUp Academy RAD Ballet Exam | IDTA Assessments",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: true,
          month: "February",
          path: "/img/Landing/kid-ballet.jpeg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/February/Feb-1.jpg",
                      alt: "StepUp Academy Midterm Camp",
                    },
                    {
                      path: "/img/newsletters/2019/February/Feb-2.jpg",
                      alt: "StepUp Academy SAFA School community Spring Fayre",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path:
                        "/img/newsletters/2019/February/Feb-Kindernews-1.jpg",
                      alt: "StepUp Academy February KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: false,
          month: "March",
          path: "/img/Landing/color.jpg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/March/March-1.jpg",
                      alt: "StepUp Academy Valentine Flash Mob",
                    },
                    {
                      path: "/img/newsletters/2019/March/March-2.jpg",
                      alt: "StepUp Academy Special Olympics 2019",
                    },
                    {
                      path: "/img/newsletters/2019/March/March-3.jpg",
                      alt: "StepUp Academy RAD Ballet Mock Exams",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path:
                        "/img/newsletters/2019/March/March-Kindernews-1.jpg",
                      alt: "StepUp Academy March KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: true,
          month: "April",
          path: "/img/Landing/vicky-ballet.jpeg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/April/April-1.jpg",
                      alt: "StepUp Academy RAD Ballet Spring Classes",
                    },
                    {
                      path: "/img/newsletters/2019/April/April-2.jpg",
                      alt:
                        "StepUp Academy Special Olympics 2019 | Zumba Classes",
                    },
                    {
                      path: "/img/newsletters/2019/April/April-3.jpg",
                      alt: "StepUp Academy Disneyland Paris 2019",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path:
                        "/img/newsletters/2019/April/April-Kindernews-1.jpg",
                      alt: "StepUp Academy April KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: true,
          month: "May",
          path: "/img/Landing/Stepup-with-flags.jpeg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/May/May-1.jpg",
                      alt: "StepUp Academy RAD Ballet Exams | IDTA Mock Exam",
                    },
                    {
                      path: "/img/newsletters/2019/May/May-2.jpg",
                      alt:
                        "StepUp Academy Acro Elite Team | UAE Teen Sports & Fitness",
                    },
                    {
                      path: "/img/newsletters/2019/May/May-3.jpg",
                      alt: "StepUp Academy Disneyland Paris 2019",
                    },
                    {
                      path: "/img/newsletters/2019/May/May-4.jpg",
                      alt: "StepUp Academy Disneyland Paris 2019",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path: "/img/newsletters/2019/May/May-Kindernews-1.jpg",
                      alt: "StepUp Academy May KinderNews",
                    },
                    {
                      path: "/img/newsletters/2019/May/May-Kindernews-2.jpg",
                      alt: "StepUp Academy May KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: false,
          month: "June",
          path: "/img/Landing/color.jpg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/June/June-1.jpg",
                      alt: "StepUp Academy End of year show",
                    },
                    {
                      path: "/img/newsletters/2019/June/June-2.jpg",
                      alt: "StepUp Academy Special Olympics Gala Dinner",
                    },
                    {
                      path: "/img/newsletters/2019/June/June-3.jpg",
                      alt: "StepUp Academy Teacher's Appreciation week",
                    },
                    {
                      path: "/img/newsletters/2019/June/June-4.jpg",
                      alt: "StepUp Academy Summer Camp",
                    },
                    {
                      path: "/img/newsletters/2019/June/June-5.jpg",
                      alt: "StepUp Academy Performing Arts",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path: "/img/newsletters/2019/June/June-Kindernews-1.jpg",
                      alt: "StepUp Academy June KinderNews",
                    },
                    {
                      path: "/img/newsletters/2019/June/June-Kindernews-2.jpg",
                      alt: "StepUp Academy June KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: true,
          month: "July",
          path: "/img/Landing/acro-jr.jpeg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/July/July-1.jpg",
                      alt: "StepUp Academy RAD Ballet & IDTA",
                    },
                    {
                      path: "/img/newsletters/2019/July/July-2.jpg",
                      alt: "StepUp Academy Kinder Annual Conference",
                    },
                    {
                      path: "/img/newsletters/2019/July/July-3.jpg",
                      alt: "StepUp Academy Year End Highlight",
                    },
                    {
                      path: "/img/newsletters/2019/July/July-4.jpg",
                      alt: "StepUp Academy World Dance Competition",
                    },
                    {
                      path: "/img/newsletters/2019/July/July-5.jpg",
                      alt: "StepUp Academy End of year show",
                    },
                    {
                      path: "/img/newsletters/2019/July/July-6.jpg",
                      alt: "StepUp Academy Sponsors",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path: "/img/newsletters/2019/July/July-Kindernews-1.jpg",
                      alt: "StepUp Academy July KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: false,
          month: "August",
          path: "/img/Landing/color.jpg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/August/Aug-1.jpg",
                      alt: "StepUp Academy Summer Competition",
                    },
                    {
                      path: "/img/newsletters/2019/August/Aug-2.jpg",
                      alt: "StepUp Academy Kinder Dance Conference",
                    },
                    {
                      path: "/img/newsletters/2019/August/Aug-3.jpg",
                      alt: "StepUp Academy Summer Camps",
                    },
                    {
                      path: "/img/newsletters/2019/August/Aug-4.jpg",
                      alt: "StepUp Academy Disneyland paris auditions",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path:
                        "/img/newsletters/2019/August/August-Kindernews.jpg",
                      alt: "StepUp Academy August KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: false,
          month: "September",
          path: "/img/Landing/color.jpg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/September/Sept-1.jpg",
                      alt: "StepUp Academy Irish Class",
                    },
                    {
                      path: "/img/newsletters/2019/September/Sept-2.jpg",
                      alt:
                        "StepUp Academy RAD Medals & Certificates | IDTA Certificates",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path:
                        "/img/newsletters/2019/September/Sept-Kindernews-1.jpg",
                      alt: "StepUp Academy September KinderNews",
                    },
                    {
                      path:
                        "/img/newsletters/2019/September/Sept-Kindernews-2.jpg",
                      alt: "StepUp Academy September KinderNews",
                    },
                    {
                      path:
                        "/img/newsletters/2019/September/Sept-Kindernews-3.jpg",
                      alt: "StepUp Academy September KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: true,
          month: "October",
          path: "/img/Landing/Acro.jpeg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/October/Oct-1.png",
                      alt: "StepUp Academy 2019 - 2020 Term 1",
                    },
                    {
                      path: "/img/newsletters/2019/October/Oct-2.png",
                      alt: "StepUp Academy Hip Hop and BreakDance classes",
                    },
                    {
                      path: "/img/newsletters/2019/October/Oct-3.png",
                      alt: "StepUp Academy Victoria Profile",
                    },
                    {
                      path: "/img/newsletters/2019/October/Oct-4.png",
                      alt: "StepUp Academy USA Competition movie night",
                    },
                  ],
                },
                {
                  text: "Kinder News",
                  images: [
                    {
                      path:
                        "/img/newsletters/2019/October/Oct-kindernews-1.jpg",
                      alt: "StepUp Academy October KinderNews",
                    },
                    {
                      path:
                        "/img/newsletters/2019/October/Oct-kindernews-2.jpg",
                      alt: "StepUp Academy October KinderNews",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          isdark: false,
          month: "November",
          path: "/img/Landing/color.jpg",
          years: [
            {
              year: "2019",
              category: [
                {
                  text: "Performing Arts",
                  images: [
                    {
                      path: "/img/newsletters/2019/November/Nov-1.jpg",
                      alt: "StepUp Academy Ballet Repertoire workshop",
                    },
                    {
                      path: "/img/newsletters/2019/November/Nov-2.jpg",
                      alt: "StepUp Academy FAME Event | Halloween Week",
                    },
                    {
                      path: "/img/newsletters/2019/November/Nov-3.jpg",
                      alt: "StepUp Academy 2020 IFDPA Paris Competition Team",
                    },
                    {
                      path: "/img/newsletters/2019/November/Nov-4.jpg",
                      alt: "StepUp Academy Halloween Camp",
                    },
                  ],
                },
                // {text: 'Kinder News', images: [
                //     {path: '', alt: ''}
                // ]},
              ],
            },
          ],
        },
        // {isdark: true, month: 'December', path: '/img/Landing/dance-competition.jpeg', years: [{ year: '2019', category: [
        //     {text: 'Performing Arts', images: [
        //         {path: '', alt: ''}
        //     ]},
        //     {text: 'Kinder News', images: [
        //         {path: '', alt: ''}
        //     ]},
        // ]
        // }]},
      ],
    };
  },
  methods: {
    monthOK(item) {
      this.months = item;
      this.isMonth = true;
    },
    monthBack() {
      this.months = {};
      this.isMonth = false;
    },

    yearOK(item) {
      this.years = item;
      this.isYear = true;
    },

    yearBack() {
      this.years = {};
      this.isYear = false;
    },

    openDialog(item) {
      this.dialogs = item;
      this.isDialog = true;
    },
  },
};
</script>
