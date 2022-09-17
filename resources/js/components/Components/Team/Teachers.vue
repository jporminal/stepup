<template>
    <div class="slant-card-staff-container">
        <div class="slant-card-staff">
            <div class="slant-card-staff-inner">
                <v-lazy v-model="isActive" :option="{threshold: .5}" transition="fade-transition">
                    <v-card color="#f8f8f8" flat>

                        <v-card-text>
                            <v-row justify="center">
                                <v-col cols="10">
                                    <h2 class="title text-left" v-for="detail in details" :key="detail" v-html="detail"  />
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-text class="text-center">
                            <h1 class="display-3"> We are 1 Team! </h1>
                        </v-card-text>

                            <v-card-text class="text-center">

                                <v-responsive max-width="60%" class="mx-auto">
                                    <transition-group tag="v-row" class="justify-center" name="fade-transition">
                                        <v-col v-for="head in heads" :key="head.sectionId" cols="12" md="3">
                                            <v-hover>
                                            <template v-slot="{ hover }">

                                                <v-card class="overflow-hidden mx-auto" :img="head.headshot" :alt="head.name" @click="openDetails(head)" hover height="300px">
                                                    
                                                    <v-slide-y-reverse-transition>
                                                        <v-footer v-if="hover" absolute class="justify-center text-center" height="75" color="#000">
                                                        <h3 class="heading white--text" v-html="head.name"></h3>
                                                        </v-footer>
                                                    </v-slide-y-reverse-transition>
                                                </v-card>
                                            </template>
                                            </v-hover>
                                            <h3 v-if="!$vuetify.breakpoint.mdAndUp" class="heading text-center" v-html="head.name"></h3>
                                        </v-col>
                                    </transition-group>
                                </v-responsive>


                                <v-responsive max-width="60%" class="mx-auto">
                                    <transition-group tag="v-row" class="justify-center" name="fade-transition">
                                        <v-col v-for="teacher in teachers" :key="teacher.sectionId" cols="12" md="4">
                                            <v-hover>
                                            <template v-slot="{ hover }">

                                                <v-card class="overflow-hidden mx-auto" :img="teacher.headshot" :alt="teacher.name" @click="openDetails(teacher)" hover height="300px">
                                                    
                                                    <v-slide-y-reverse-transition>
                                                        <v-footer v-if="hover" absolute class="justify-center text-center" height="75" color="#000">
                                                        <h3 class="heading white--text" v-html="teacher.name"></h3>
                                                        </v-footer>
                                                    </v-slide-y-reverse-transition>
                                                </v-card>
                                            </template>
                                            </v-hover>
                                            <h3 v-if="!$vuetify.breakpoint.mdAndUp" class="heading text-center" v-html="teacher.name"></h3>
                                        </v-col>
                                    </transition-group>
                                </v-responsive>

                            </v-card-text>
                        </v-card>
                    </v-lazy>

                    <v-lazy v-model="isActive" :option="{threshold: .5}" transition="fade-transition">
                    <v-card color="#f8f8f8" flat>
                        <v-card-text>
                            <v-responsive max-width="60%" class="mx-auto">
                                <transition-group tag="v-row" class="justify-center" name="fade-transition">
                                    <v-col v-for="admin in adminStaffs" :key="admin.name" cols="12" md="4">
                                        <v-hover>
                                        <template v-slot="{ hover }">

                                            <v-card class="overflow-hidden mx-auto" :img="admin.image" :alt="admin.name" hover height="300px">
                                                <!-- <v-fade-transition>
                                                    <v-overlay v-if="hover" absolute>
                                                    <v-icon large>
                                                        mdi-magnify
                                                    </v-icon>
                                                    </v-overlay>
                                                </v-fade-transition> -->
                                                <v-slide-y-reverse-transition>
                                                    <v-footer v-if="hover" absolute class="justify-center text-center" height="75" color="#000">
                                                    <h3 class="heading white--text" v-html="admin.name"></h3>
                                                    </v-footer>
                                                </v-slide-y-reverse-transition>
                                            </v-card>
                                        </template>
                                        </v-hover>
                                        <h3 v-if="!$vuetify.breakpoint.mdAndUp" class="heading text-center" v-html="admin.name"></h3>
                                    </v-col>
                                </transition-group>
                            </v-responsive>
                        </v-card-text>
                    </v-card>
                </v-lazy>

                </div>
            </div>

            <v-dialog v-model="isOpen" width="1020">
                <v-card>
                    <v-btn absolute dark text top right color="red" @click="isOpen = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    <v-card-text>
                        <v-container>
                            <v-row align="start" justify="center">
                                    <v-col cols="12" md="5">
                                        <v-img :src="teacher.path" :alt="teacher.position" contain></v-img>
                                    </v-col>
                                    <v-col cols="12" md="7">
                                        <template v-for="(tab, i) in teacher.tabs">
                                            <h1 class="headline" :key="tab.name" v-html="tab.name"></h1>
                                            <h2 class="subtitle-2" :key="tab.name + i" v-html="teacher.position"></h2>
                                            <br :key="tab.name + i + 230">
                                            <h3 class="body-2" v-for="detail in tab.about" :key="detail.details" v-html="detail.details"></h3>
                                        </template>
                                    </v-col>

                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="text-none" @click="isOpen = false" color="success"> close </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
    </div>
</template>
<script>
export default {
    name: 'teachers',
    data() {
        return {
            isActive: false,
            isOpen: false,
            teacher: {},
            details: [
                'Here at StepUp Academy, we offer only the best and this includes our amazing team of staff. <br><br>',
                'All our teachers are fully qualified, enthusiastic, passionate and share 1 common love – “Teaching Ballet and Performing to you all”. Between our teaching team, StepUp Academy can enter students for annual examinations with examining bodies such as <br><br>',
                '<ul><li>(RAD) - Royal Academy of Dance - Ballet</li> ' + 
                '<li>(IDTA) - International Dance Teachers Association (IDTA) – Tap & Modern, Musical Theatre, Dance Gymnastics and Street Jazz</li>' +  
                '<li>(ISTD) - Imperial Society of Teachers or Dancing – Tap & Modern</li>' +
                '<li>Acrobatic Arts – Acrobatics, Limbering and Tumbling</li>' +
                '<li>AcroDance Pre-School – Acrobatics</li>' +
                '<li>BCA (British Cheerleading Association ) – Cheerleading</li>' + 
                '<li>Trinity – Musical Theatre, Vocal, Singing, Performing Arts</li>' + 
                '<li>Kinder Dance International – Kinder Dance is a franchise directly from the US, and StepUp Academy is the only school in the UAE with the rights and license to run the specially designed programs</li>' +
                '</ul><br>',
                'Each teacher undergoes and intensive training week every August, as well as attending regular team training sessions at our studios. By doing this, it ensures high standards are being carried out across the board, resulting in you getting the best possible dance training, as well as us being able to bring any new and updated techniques straight into the dance studios.<br><br>',
                'Playing an equal role in making sure all your dance classes run smoothly and taking care of all the admin duties our wonderful reception and behind the scenes team. Making up this team is our front of house, IT department, Sales and Marketing, HR, accounts, and assistants.'
            ],
            heads: [
                // vicky
                { name: 'Ms. Vicky<br>Executive Director', position: 'Executive Director', path: '/img/team/Vicky.jpg', headshot: '/img/headshots/Vicky.jpg', color: '#fff',
                tabs: [
                    {name: 'Ms. Vicky', path: 'vicky',
                    about: [
                        {details: 'Vicky is originally from the UK and started dancing at the age of 6 in her local dance school Sidmouth Ballet School and East Devon Dance. She trained in RAD Ballet, ISTD Tap and Modern, Street Jazz, Cheerleading and was also lucky enough to attend workshops for Irish and Spanish. Vicky’s love and interests in teaching began at the age of 14 when she would go to the local dance classes to assist and watch.<br><br>', icon: ''},

                        {details: 'She successfully went onto do her RAD (Royal Academy of Dance) teachers training for 2 years, where she graduated in June 2010 with CBTS and gained her registered teacher status.<br><br>', icon: ''},

                        {details: 'Vicky moved to the UAE in September 2010 and started teaching full time straight away. Since teaching here she has put students through their RAD exams and has also choreographed for many shows.<br><br>', icon: ''}
                    ], experience: ''},
                    {name: "Some of Vicky's achievements / experience", path: 'vicky-achievement',
                    about: [
                        {details: 'Annual Triple Fantasy Dance shows – Manor Pavilion, UK', icon: 'mdi-human-handsdown'},
                        {details: 'Annual Multiplicity Dance shows – Manor Pavilion, UK', icon: 'mdi-human-handsdown'},
                        {details: 'Phantom of the Opera – Youth Theatre, UK', icon: 'mdi-human-handsdown'},
                        {details: 'Chance to Dance – Northcott Theatre, UK', icon: 'mdi-human-handsdown'},
                        {details: 'Assistant and dancing at Wayne Sleep workshop – Plymouth, UK', icon: 'mdi-human-handsdown'},
                        {details: 'Brian Rogers Performing Arts College summer courses – Surrey, UK', icon: 'mdi-human-handsdown'},
                        {details: 'Dance teacher at Sidmouth Ballet School & East Devon Dance – 2008-2010', icon: 'mdi-human-handsdown'},
                        {details: 'Opening dance act for Nicki Minaj show – Meydan, Dubai', icon: 'mdi-human-handsdown'},
                        {details: 'Dance act for New Year’s Eve (including acts such as Gorillaz, Snoop Dog, Faithless, September, Inna) – Meydan, Dubai', icon: 'mdi-human-handsdown'},
                        {details: 'Shadow performance for the shell Formula 1 annual gala dinner – Yas Island, Abu Dhabi', icon: 'mdi-human-handsdown'},
                        {details: 'Michel Ball sings the musicals concert – Yas Island, Abu Dhabi', icon: 'mdi-human-handsdown'},
                        {details: 'Dubai Racing World Cup, Pre world cup party – JBR Meydan, Dubai', icon: 'mdi-human-handsdown'},
                        {details: 'Diabetes walk – Yas Island, Abu Dhabi', icon: 'mdi-human-handsdown'},
                        {details: 'Dubai Mall 24hour all night long flash mob 2013 & 2014 – Dubai Mall', icon: 'mdi-human-handsdown'},
                        {details: 'Shadow performance for Dell – Dubai', icon: 'mdi-human-handsdown'},
                        {details: 'Nutella anniversary flashmob – Dubai Mall', icon: 'mdi-human-handsdown'},
                        {details: 'Human statue at Art Gallery – Dubai', icon: 'mdi-human-handsdown'},
                        {details: 'Dance teacher at an established school in Dubai 2010-2012', icon: 'mdi-human-handsdown'},
                        {details: 'Owner and teacher of Ms Vicky’s 2012-2014', icon: 'mdi-human-handsdown'}
                    ], experience: 'Vicky took on the role of Manager at Step Up Academy in July 2014, on top of her management duties she still continues to teach popular classes at the academy.'}
                ], sectionId: 'vicky'},

                //Caitlin
                { name: 'Ms. Caitlin<br>Head of Teacher & Head of Ballet', position: 'Head of Teacher & Head of Ballet', path: '/img/team/Caitlin.jpg', headshot: '/img/headshots/CaitlinDavies.jpg', color: '#e5e5e5',
                tabs: [
                    {name: 'Ms. Caitlin', path: 'caitlin',
                    about: [
                        {details: 'A professional dancer and teacher who has been dancing for over 23 years, Ms Caitlin’s dance training began at the age of 2 at the Debra McLaren School in the UK. At the age of 13 she began studying dance at the prestigious Centrepointe School in Manchester where she studied Ballet (RAD), Modern (ISTD) and Tap (ISTD) all up to Advanced 1 Level alongside Jazz, Contemporary and Musical Theatre.<br><br>', icon: ''},

                        {details: 'She decided to further her career after winning a place at Bird College in London in which she achieved a BA (Hons) in Dance and Theatre Performance where she studied many aspects of Dance and also the theoretical side to it.<br><br>', icon: ''},

                        {details: 'Caitlin went on to complete her 2 years study with the Royal Academy of Dance for her Certificate in Ballet Teaching Studies, gaining registered teacher status with the internationally recognised ballet awarding body. Before moving to Dubai to join the Step Up Team, she taught at established dance schools within the UK and also in Tenerife, Spain.<br><br>', icon: ''},
                    ], experience: ''},
                    {name: "Her profesional dance experience includes", path: 'caitlin-achievement',
                    about: [
                        {details: 'Fantine – Les Miserables – BYTES Company', icon: 'mdi-human-handsdown'},
                        {details: 'Lily – Annie – BYTES Company', icon: 'mdi-human-handsdown'},
                        {details: 'Main Dancer – King and I- BYTES Company', icon: 'mdi-human-handsdown'},
                        {details: 'Dancer/Ensemble – Curtains – Studio Theatre, Sidcup, London', icon: 'mdi-human-handsdown'},
                        {details: 'Dance/ Ensemble in Burlesque – Orchard Theatre, London', icon: 'mdi-human-handsdown'},
                        {details: 'Centrepointe Annual performances- Royal College of music, Manchester', icon: 'mdi-human-handsdown'},
                        {details: 'Finalist at the English Ballet Championships- UMIST, Manchester', icon: 'mdi-human-handsdown'},
                        {details: 'Teacher at established dance school in Tenerife, Spain- 2014', icon: 'mdi-human-handsdown'},
                        {details: 'Teacher at established dance school in Manchester- 2015', icon: 'mdi-human-handsdown'},
                        {details: 'Student teacher at established dance school in Manchester -2015', icon: 'mdi-human-handsdown'},

                    ], experience: 'Caitlin joined the Step Up team in September 2015, specialising in RAD Ballet, Tap, KinderDance and Lyrical classes. She looks forward to another successful year of examinations and show dances with her students old and new.'}
                ], sectionId: 'caitlin'},
            ],

            teachers: [              
            


                //Laura
                { name: 'Ms. Laura Davies<br>Head of IDTA', position: 'Head of IDTA', path: '/img/team/Laura.jpg', headshot: '/img/headshots/LauraDavies.jpg', color: '#fff',
                tabs: [
                    {name: 'Ms. Laura Davies', path: 'laura',
                    about: [
                        {details: 'Laura is from the United Kingdom. She began dancing when she was 3 years old where she studied all styles of dance, taking RAD ballet examinations and IDTA Tap and Modern Examinations. At the age of 11, she joined Centrepointe Dance School in Manchester, continuing with examinations and participating in competitions. Laura joined the prestigious Bird College in September 2011, completing a three year diploma in Dance and Musical Theatre. Since graduating, Laura has danced professionally all over the world, choreographed for Sky Sports and many sports events, and also began teaching. Laura is delighted to have joined the team at Step Up and can’t wait to see what the future brings!<br><br>', icon: ''},
                    ], experience: ''},
                    {name: "", path: '',
                    about: [
                        {details: '~~', icon: ''}
                    ], experience: ''}
                ], sectionId: 'laura'},

                //Olivia
                { name: 'Ms. Olivia<br>Vocal & Musical Theatre Teacher', position: 'Vocal & Musical Theatre Teacher', path: '/img/headshots/Olivia.jpg', headshot: '/img/headshots/Olivia.jpg', color: '#e5e5e5',
                tabs: [
                    {name: 'Ms. Olivia', path: 'olivia',
                    about: [
                        {details: '', icon: ''},

                        {details: '', icon: ''}
                    ], experience: ''},
                    {name: "", path: '',
                    about: [], experience: ''}
                ], sectionId: 'Olivia'},

                 //Beth
                { name: 'Ms. Beth<br>Dance Teacher', position: 'Dance Teacher', path: '/img/headshots/Beth.jpg', headshot: '/img/headshots/Beth.jpg', color: '#e5e5e5',
                tabs: [
                    {name: 'Ms. Beth', path: 'beth',
                    about: [
                        {details: '', icon: ''},

                        {details: '', icon: ''}
                    ], experience: ''},
                    {name: "", path: '',
                    about: [], experience: ''}
                ], sectionId: 'Beth'},


         

                //Laura Dillon
                { name: 'Ms. Laura<br>Dance Teacher', position: 'Dance Teacher', path: '/img/headshots/LauraDillon.jpg', headshot: '/img/headshots/LauraDillon.jpg', color: '#e5e5e5',
                tabs: [
                    {name: 'Ms. Laura', path: 'laura',
                    about: [
                        {details: '', icon: ''},

                        {details: '', icon: ''}
                    ], experience: ''},
                    {name: "", path: '',
                    about: [], experience: ''}
                ], sectionId: 'Laura'},
                       //Vitaliy
                { name: 'Mr. Vitaliy<br>Head of Boys Dept & Dance Teacher', position: 'Head of Boys Dept & Dance Teacher', path: '/img/headshots/Vitaliy.jpg', headshot: '/img/headshots/Vitaliy.jpg', color: '#fff',
                tabs: [
                    {name: 'Mr. Vitaliy', path: 'vitaliy',
                    about: [
                        {details: '', icon: ''},
                    ], experience: ''},
                    {name: "", path: '',
                    about: [
                        {details: '', icon: ''}
                    ], experience: ''}
                ], sectionId: 'vitaliy'},

              
            ],

            adminStaffs: [
                // {name: 'VINCENT<br>WEB DEVELOPER', position: 'WEB DEVELOPER', image: '/img/headshots/Vinz.jpg'},
               
                {name: 'KRISHA<br>DIGITAL MARKETING', position: 'DIGITAL MARKETING', image: '/img/headshots/Krisha.jpg'},
                {name: 'JOEL<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Joel.jpg'},
                {name: 'LIEZEL<br>HOUSE KEEPING', position: 'PA', image: '/img/headshots/Liezel.jpg'},
            ]
        }
    },
    methods: {
        openDetails(teacher) {
            this.isOpen = false
            this.teacher = teacher
        }
    }
}
</script>
<style scoped>
  .gallery-card {
    transform-origin: center center 0;
    transition: .3s cubic-bezier(.25,.8,.50,1);
  }

  .fade-transition-leave,
  .fade-transition-leave-active,
  .fade-transition-leave-to {
    display: none;
  }
</style>
