<template>
    <div class="slant-card-staff-container">
        <div class="slant-card-staff">
            <div class="slant-card-staff-inner">
                <v-container>
                    <v-row align="center" justify="center">
                        <v-col cols="12">
                            <h1 class="text-center display-1"> {{ text.title }} </h1>
                        </v-col>
                        <v-col cols="12">
                            <h2 class="text-center body-2" v-for="body in text.bodies" :key="body" v-html="body"></h2>
                        </v-col>
                        <v-col v-for="(content, i) in text.contents" :key="i" cols="12" md="4">
                            <v-hover v-slot:default="{ hover }">
                                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" dark @click="opencontent(content)">
                                    <v-img :src="content.image.path" :alt="content.image.alt" :height="$vuetify.breakpoint.smAndDown ? '400px': '250px'" class="d-flex align-center flex-wrap">
                                        <h3 class="title" v-html="content.text"></h3>
                                    </v-img>
                                </v-card>

                            </v-hover>
                        </v-col>
                    </v-row>
                </v-container>
                <v-dialog v-model="isOpen" width="1200">
                    <v-card>
                        <v-btn absolute dark text top right color="red" @click="isOpen = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-card-text class="mt-2">
                            <h1 class="text-center display-2"> {{ open.text }} </h1>
                        </v-card-text>
                                    <v-card-text>
                            <v-container>
                                <v-row align="start" justify="center">
                                    <template v-for="(content, i) in open.contents">
                                            <v-col cols="12" :md="content.size" :key="i">
                                                <h2 class="body-2" v-for="text in content.texts" :key="text" v-html="text"> </h2>
                                            </v-col>
                                            <v-col cols="12" :md="content.size" :key="i + 100">
                                                <template v-for="(img, i) in content.image">
                                                    <div :key="i + 200" class="mt-2">
                                                        <v-img v-if="img.path != ''" :src="img.path" :alt="img.alt" contain> </v-img>
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
    name: 'people-of-determination',
    data: () => ({
        isOpen: false,
        open: {},
        text: {
            title: 'People of Determination',
            bodies: [
                'Here at StepUp Academy, we pride ourselves in being an all-inclusive Ballet and Performing Arts school and being able to offer classes tailored to everyone. As well as our classes which are open to all ages and abilities, we also have an exclusive class “Dance Syndrome” which is a tailored class for people of determination.<br><br>',
                'Dance Syndrome gets to attend several performances throughout the year, and previous events include being part of the F.A.M.E show yearly since 2017, dancing in front of the Burj Khalifa, taking part in the end of year school show, taking part in the IFDPA dance competition in Paris. To date one of the biggest achievements and most amazing experiences, was our team being chosen to represent the UAE in the 2019 Special Olympics, which was held in Abu Dhabi.<br><br>',
                'March 2019 was a very memorable year for us, as we were asked to represent the UAE in the Special Olympics Dance Sport Challenge! The Special Olympics is the world’s largest humanitarian sporting event and a global movement which focuses on the empowerment of People of Determination with intellectual disabilities through the power of sport.<br><br>',
                'This was such an amazing opportunity and privilege to be part of. All the girls showed hard work, dedication, and passion as they attended their weekly rehearsals in the lead up to the event to perfect their routines and moves! Watching them perform on stage was such a precious memory and one which stay forever.<br><br>',
                'Grace, Basima, Maya, Josie, Jamiela, Laila and Ruby, performed their hearts out, and made it through to the finals. Our team came away as SILVER medallists of the Special Olympics 2019! <br>Such a massive achievement.<br><br>',
                'All students who take part in this class, are given the option to take an annual examination with the IDTA syllabus. Successful passing of the exams means the students are awarded with a certificate, medal, and sash. This is such a rewarding part of taking the classes, and it becomes something they can build on and collect as they progress through each level.',
            ],
            contents: [
                {
                    text: 'F.A.M.E. 2017', image: {path: '/img/Landing/color.jpg', alt: 'StepUp Academy Color'}, contents:[
                    {
                        image: [{path: '/img/determinations/fame-2017.jpg', alt: 'StepUp Academy F.A.M.E. 2017'}],
                        texts: [],
                        size: "8"
                    }
                ]},
                {
                    text: 'F.A.M.E. 2018', image: {path: '/img/Landing/color.jpg', alt: 'StepUp Academy Color'}, contents:[
                    {
                        image: [{path: '/img/determinations/fame-2018.jpg', alt: 'StepUp Academy F.A.M.E. 2018'}],
                        texts: [],
                        size: "8"
                    }
                ]},
                {
                    text: 'F.A.M.E. 2019', image: {path: '/img/Landing/color.jpg', alt: 'StepUp Academy Color'}, contents:[
                    {
                        image: [{path: '/img/determinations/fame-2019.jpg', alt: 'StepUp Academy F.A.M.E. 2019'}],
                        texts: [],
                        size: "8"
                    }
                ]},
                {
                    text: 'Special Olympics 2019', image: {path: '/img/Landing/color.jpg', alt: 'StepUp Academy Color'}, contents:[
                    {
                        image: [{path: '/img/determinations/special-olympics.jpg', alt: 'StepUp Academy Special Olympics'}],
                        texts: [
                            'March 2019 was a very memorable year for us, as we were asked to represent the UAE in the Special Olympics Dance Sport Challenge! The Special Olympics is the world’s largest humanitarian sporting event and a global movement which focuses on the empowerment of People of Determination with intellectual disabilities through the power of sport.<br><br>',
                            'This was such an amazing opportunity and privilege to be part of. All the girls showed hard work, dedication and passion as they attended their weekly rehearsals in the lead up to the event to perfect their routines and moves! Watching them perform on stage was such a precious memory and one which stay forever.<br><br>',
                            'Grace, Basima, Maya, Josie, Jamiela, Laila and Ruby, performed their hearts out, and made it through to the finals. Our team came away as SILVER medallists of the Special Olympics 2019!<br><br>',
                            'Such a massive achievement.'
                        ],
                        size: "8"
                    }
                ]},
                {
                    text: 'Classes & Exams', image: {path: '/img/Landing/color.jpg', alt: 'StepUp Academy Color'}, contents:[
                    {
                        image: [
                            {path: '/img/determinations/class-exam.jpg', alt: 'StepUp Academy Class Exams'},
                            ],
                        texts: [
                            'Being part of the Dance Syndrome class, means that you also get several performance opportunities throughout the year, as well as the chance to take an official examination with the IDTA, and be invited to attend competitions overseas.<br><br>',
                            'Some of the classes previous opportunities include – StepUp Academy’s annual themed show, competing in the IFDPA in Disney Land Paris, performing at the F.A.M.E event each year, taking their IDTA Street Dance examinations, performing in front of the Burj Khalifa and being chosen to represent the UAE in the Special Olympics.'
                        ],
                        size: "5"
                    }
                ]},
            ]
        }
    }),
    methods: {
        opencontent(item) {
            this.open = item
            this.isOpen = true
        }
    }
}
</script>
