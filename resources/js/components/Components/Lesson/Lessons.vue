
<template>
    <div class="slant-card-staff-container">
        <div class="slant-card-staff">
            <div class="slant-card-staff-inner">
                <v-container class="pa-4 text-center">
                    <v-row class="fill-height" align="center" justify="center">
                        <v-col cols="12">
                            <h1 class="text-center display-3"> Class Information </h1>
                        </v-col>
                        <v-col cols="12">
                            <h2 class="body-2" v-html="details" />
                        </v-col>

                        <template v-for="(lesson, i) in lessons">
                            <v-col
                                :key="i"
                                cols="12"
                                xl="3"
                                md="4"
                            >
                            <v-hover v-slot:default="{ hover }">
                                <v-card
                                    :elevation="hover ? 12 : 2"
                                    :img="lesson.image"
                                    :alt="lesson.alt"
                                    hover
                                    class="mx-auto"
                                    :height="$vuetify.breakpoint.xl ? '420px' : $vuetify.breakpoint.lg ? '380px' : $vuetify.breakpoint.md ? '280px' :  $vuetify.breakpoint.sm ? '640px' : '338px'"
                                    @click="openDetails(lesson)"
                                />
                            </v-hover>
                            </v-col>
                        </template>
                    </v-row>
                    <v-dialog v-model="isOpen" width="870">
                        <v-card>
                            <v-img :src="lesson.image" class="mx-auto">
                                <v-btn absolute dark text top right color="red" @click="isOpen = false">
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
    name: 'lists-of-lessons',
    data() {
        return {
            isActive: false,
            isOpen: false,
            lesson: {},
            buttons: [
                {color: '#5AB9EA', text: 'Enroll', to: 'shop'},
                {color: '#8860D0', text: 'Contact Us', to: {path: '/', hash: 'contactus'}}
            ],
            details: 'With such a wide variety of classes offered across numerous genres, click on the classes below to find out more information, to help you choose which class is best suited. We offer classes for beginners through to advanced levels, for ages 15months up to adults. Classes offered include Ballet, Street Jazz, Hip Hop, Breakdance, Lyrical Contemporary, Pointe, Acro, Gymnastics, Kinder Dance, Tots Ballet, Gym, Kinder Dance With Me, Musical Theatre, Tap & Modern, Elite, Rhythmic Gymnastics, Irish, Karate and more………..',
            lessons: [
                {name: 'Acro & Gymnastics', image: 'img/lessons/newest/acro-and-gymnastics.jpg', size: '12', alt: 'StepUp Academy Acro & Gymnastics', item: 39},
                {name: 'Adult Classes', image: 'img/lessons/newest/adult-classes.jpg', size: '12', alt: 'StepUp Academy Adult Classes', item: 48},
                {name: 'Ballet', image: 'img/lessons/newest/ballet.jpg', size: '12', alt: 'StepUp Academy Ballet', item: 34},
                {name: 'Bloom Baby', image: 'img/lessons/newest/bloom-baby.jpg', size: '12', alt: 'StepUp Academy Bloom Baby', item: 34},
                {name: 'Dance Syndrome', image: 'img/lessons/newest/dance-syndrome.jpg', size: '12', alt: 'StepUp Academy Dance Syndrome', item: 44},
                {name: 'Elite & Competition Teams', image: 'img/lessons/newest/elite-and-competition-teams.jpg', size: '12', alt: 'StepUp Academy Elite and Competition Teams', item: 42},
                {name: 'Irish', image: 'img/lessons/newest/irish.jpg', size: '12', alt: 'StepUp Academy Irish', item: 42},
                {name: 'Kinder Dance', image: 'img/lessons/newest/kinder-dance.jpg', size: '12', alt: 'StepUp Academy Kinder Dance', item: 35},
                {name: 'Kinder Gym', image: 'img/lessons/newest/kinder-gym.jpg', size: '12', alt: 'StepUp Academy Kinder Gym', item: 35},
                {name: 'Kinder Tots', image: 'img/lessons/newest/kinder-tots.jpg', size: '12', alt: 'StepUp Academy Kinder Tots', item: 35},
                {name: 'Lyrical Contemporary', image: 'img/lessons/newest/lyrical-contemporary.jpg', size: '12', alt: 'StepUp Academy Lyrical Contemporary', item: 41},
                {name: 'Martial Arts', image: 'img/lessons/newest/martial-arts.jpg', size: '12', alt: 'StepUp Academy Musical Martial Arts', item: 45},
                {name: 'Musical Theatre', image: 'img/lessons/newest/musical-theatre.jpg', size: '12', alt: 'StepUp Academy Musical Theatre', item: 45},
                {name: 'Vocal Lessons', image: 'img/lessons/newest/vocal-lessons.jpg', size: '12', alt: 'StepUp Academy Vocal', item: 45},
                {name: 'Pointe', image: 'img/lessons/newest/pointe.jpg', size: '12', alt: 'StepUp Academy Pointe', item: 45},
                {name: 'Rhythmic Gymnastics', image: 'img/lessons/newest/rhythmic-gymnastics.jpg', size: '12', alt: 'StepUp Academy Rhythmic Gymnastics', item: 45},
                {name: 'Street Jazz & Hip Hop', image: 'img/lessons/newest/street-jazz-and-hip-hop.jpg', size: '12', alt: 'StepUp Academy Street Jazz and Hip Hop', item: 36},
                {name: 'Strengthening & Conditioning', image: 'img/lessons/newest/strengthening-and-conditioning.jpg', size: '12', alt: 'StepUp Academy Strenthening and Conditioning', item: 43},
                {name: 'Tap & Modern', image: 'img/lessons/newest/tap-and-modern.jpg', size: '12', alt: 'StepUp Academy IDTA Tap and Modern', item: 37},
                {name: 'Technical Jazz', image: 'img/lessons/newest/technical-jazz.jpg', size: '12', alt: 'StepUp Academy Technical Jazz', item: 49},
                {name: 'Heels', image: 'img/lessons/newest/heels.jpg', size: '12', alt: 'StepUp Academy Heels', item: 37},
                {name: 'StepUp Stage School', image: 'img/lessons/newest/stepup-stage-school.jpg', size: '12', alt: 'StepUp Academy Stage School', item: 49},
            ]
        }
    },
    methods: {
        openDetails(lesson) {
            this.isOpen = true
            this.lesson = lesson
        },

        to_shop(item) {
            var filter = {
                search: '',
                paginate: 12,
                shopFilter: 'Current',
                shopCategories: item
            }
            this.$store.commit('shop_filter', filter)
            this.$router.push('/shop')
        }
    }
}
</script>
