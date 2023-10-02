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
                                    <v-col v-for="admin in adminStaffs" :key="admin.name" cols="12" md="3">
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
                                            <h3 class="body-2" v-for="detail in tab.about" :key="detail.details + i" v-html="detail.details"></h3>
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
               

                //Caitlin
                { name: 'Ms. Caitlin<br>Manager', position: 'Manager', path: '/img/team/Caitlin.jpg', headshot: '/img/headshots/CaitlinDavies.jpg', color: '#e5e5e5',
                tabs: [
                    {name: 'Ms. Caitlin', path: 'caitlin',
                    about: [
                        {details: 'A professional dancer and teacher who has been dancing for over 23 years, Ms Caitlin’s dance training began at the age of 2 at the Debra McLaren School in the UK. At the age of 13 she began studying dance at the prestigious Centrepointe School in Manchester where she studied Ballet (RAD), Modern (ISTD) and Tap (ISTD) all up to Advanced 1 Level alongside Jazz, Contemporary and Musical Theatre.<br><br>', icon: ''},

                        {details: 'She decided to further her career after winning a place at Bird College in London in which she achieved a BA (Hons) in Dance and Theatre Performance where she studied many aspects of Dance and also the theoretical side to it.<br><br>', icon: ''},

                        {details: 'Caitlin went on to complete her 2 years study with the Royal Academy of Dance for her Certificate in Ballet Teaching Studies, gaining registered teacher status with the internationally recognised ballet awarding body. Before moving to Dubai to join the Step Up Team, she taught at established dance schools within the UK and also in Tenerife, Spain.<br><br>', icon: ''},
                    ], experience: ''},
                    {name: "Caitlin's dance experience includes", path: 'caitlin-achievement',
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
            


                //Laura Davies
                { name: 'Ms. Laura Davies<br>Headteacher and Head of RAD & Acrobatic Arts', position: 'Headteacher and Head of RAD & Acrobatic Arts', path: '/img/team/Laura.jpg', headshot: '/img/headshots/LauraDavies.jpg', color: '#fff',
                tabs: [
                    {name: 'Ms. Laura Davies', path: 'laura',
                    about: [
                        {details: 'Laura is from the United Kingdom. She began dancing when she was 3 years old where she studied all styles of dance, taking RAD ballet examinations and IDTA Tap and Modern Examinations.!<br><br>', icon: ''},
                        {details: 'At the age of 11, she joined Centrepointe Dance School in Manchester, continuing with examinations and participating in competitions. Laura joined the prestigious Bird College in September 2011, completing a three year diploma in Dance and Musical Theatre.<br><br>', icon: ''},
                        {details: ' Since graduating, Laura has danced professionally all over the world, choreographed for Sky Sports and many sports events, and also began teaching. Laura is delighted to have joined the team at Step Up and can’t wait to see what the future brings'}
                    ], experience: ''}
                ], sectionId: 'laura'},
                //Laura Dillon
                { 
                    name: 'Ms. Laura<br>Head of Commercial and Street Dance', 
                    position: 'Head of Commercial and Street Dance', 
                    path: '/img/headshots/LauraDillon.jpg',
                    headshot: '/img/headshots/LauraDillon.jpg', 
                    color: '#e5e5e5',
                    tabs: [
                        {
                            name: 'Ms. Laura', path: 'laura',
                            about: [
                                {details: 'Laura is a professional dancer and teacher from the UK and started dancing at a very young age. Her training began at her local dance school, Premier Studios before moving to Shelagh Elliott Clarke Performing Arts College in Liverpool, where she completed exams in ISTD and RAD Ballet, Tap, Modern and Street Jazz. Upon studying full time training at college, Laura continued her training in many styles of Dance, Drama and Singing. She then went on to complete further training at Edge Hill University where she choreographed and performed in a number of dance pieces, trained in Aerial skills alongside her Degree and began teaching regular Commercial, Jazz and Heels classes. She graduated with a Ba Hons Degree in Dance and Drama.<br><br>', icon: ''},
                                {details: 'Since graduating Laura has performed professionally in several touring contracts in the UK and abroad in Cyprus, Greece and Malta and continued to teach regular open dance and fitness classes to all ages between contracts. Laura moved to Dubai in Summer 2021 and began teaching Dance at StepUp Academy. She loves working with all her students, putting them through their IDTA Street Jazz exams and is enjoying choreographing for international competitions in Florida, Paris and New York and various events in Dubai such as Expo 2020. Laura is excited to continue her journey as a dance teacher at StepUp and proud to be part of the team.<br><br>', icon: ''},
                            ], 
                            experience: ''
                        },
                        {
                            name: "Laura’s achievements/experience", 
                            path: '',
                            about: [
                                  {details: 'Choreographer – Expo 2020 StepUp Academy Christmas and closing show <br>', icon: ''},
                                  {details: 'Dancer – 5 star hotels in Corfu, Greece <br>', icon: ''},
                                  {details: 'Dancer – 5 star hotels in Paphos, Cyprus<br>', icon: ''},
                                  {details: 'Production Dancer – Cirkella Circus in Malta <br>', icon: ''},
                                  {details: 'Dancer/Magicians Assistant – Charles Chipperfield Circus in the UK<br>', icon: ''},
                                  {details: 'Dancer – Alibi Productions touring tribute shows in the UK <br>', icon: ''},
                                  {details: 'Dance teacher – Edge Hill University Hill start company<br>', icon: ''},
                                  {details: 'Dance teaching visiting lecturer – Edge Hill University <br>', icon: ''},
                                  {details: 'Dance teacher – LdanceFitness <br>', icon: ''},
                            ], 
                            experience: ''
                        }
                    ], 
                    sectionId: 'Laura'
                },
                // Lucy
                { 
                    name: 'Ms. Lucy<br>Dance Teacher', 
                    position: 'Dance Teacher', 
                    path: '/img/headshots/Lucy.jpg', 
                    headshot: '/img/headshots/Lucy.jpg', 
                    color: '#fff',
                    tabs: [
                        {
                            name: 'Ms. Lucy', 
                            path: 'lucy',
                            about: [
                                {details: 'Miss Lucy, originally from Kent, UK, has been dancing since the age of 3.  She trained at Prima Stage School of Performing Arts, studying Ballet (IDTA), Street dance (IDTA), Contemporary dance, Acting (LAMDA), Ballroom and Latin (UKA) and Musical Theatre.  Miss Lucy has taught dance and performing arts for over 11 years and has put many children through their IDTA examinations with a 100% pass rate.<br><br>', icon: ''},
                                {details: 'Miss Lucy pursued her career by attending the University of East Anglia, where she graduated by with BA Honours Degree in Drama and English Literature.  During her time here she continued her dance training as a member of an advanced hip-hop team and performed and choreographed for shows around the UK, including at the Edinburgh Fringe Festival.  After graduating, she spent 2 years working professionally for Carnival Cruise Lines in both the USA and Australia. In-between contracts she continued to teach for multiple dance schools around Kent, before moving to India where she took on the role of a Pre-Primary School Teacher at OliveMount Global School.  Alongside this she continued to teach dance classes in India, as well as running hundreds of masterclasses and specialised workshops virtually for schools around the UK.<br><br>', icon: ''},
                                {details: 'Miss Lucy holds a full teaching license with the IDTA, having completed her Street Dance Associate Teaching Examination.  She is a qualified Level 1 Cheerleading Coach with the British Cheerleading Association and has undertaken training in All-Star Pom, Jazz and Lyrical dance with Building from the Ground Up.  She is a fully qualified AcroDance Pre-School Instructor, having completed training with Acrobatic Arts and has trained in stretch, body conditioning and flexibility with Love Flexibility.  Miss Lucy also holds a TEFL certification and has recently completed studying with The Skills Network for a Level 2 Understanding Autism Qualification.<br><br>', icon: ''},
                                {details: 'Miss Lucy is passionate about continuing her dance education and is currently studying to become a licensed Baby Massage Instructor with To Baby and Beyond and is furthering her knowledge of teaching toddler and pre-school dance classes by training with Once Upon a Ballet.  Miss Lucy made the move over to Dubai in 2022 and is hugely excited to continue her teaching career with StepUp Academy.<br><br>', icon: ''}
                            ], 
                            experience: ''
                        },
                    ], 
                    sectionId: 'Lucy'
                },

                //Alice
                { name: 'Ms. Alice', position: '', path: '/img/team/Alice.jpeg', headshot: '/img/team/Alice.jpeg', color: '#e5e5e5',
                tabs: [
                    {
                    name: 'Ms. Alice', path: 'alice',
                    about: [
                        {details: 'Alice is an award winning performer and established choreographer. She was scouted at age 14 as a gifted choreographer by John Moores University in Liverpool where she was chosen to teach classes, give workshops and train students competitively.  Alice has performed and competed across the UK in a variety of arenas, theatres and TV shows (ITVs Got to Dance).  She has choreographed theatrical productions, music videos as well as performing arts showcases and 100’s of competitive routines.<br><br>', icon: ''},
                        {details: "Alice has trained in Ballet, Tap, Street dance, Commercial, Contemporary, and Musical theatre since the age of 4. She has continued to refine her skills while attending Dolphin Dance Studios Performing Arts College of Liverpool, where she gained her IDTA (International Dance Teachers' Association) Teaching Qualification. Alice further expanded her expertise by pursuing a Master’s Degree in Dance Technique Pedagogy and Professional Practice, which she completed in 2018. Her specializations include Commercial, Contemporary, and Musical Theatre/Theatre Jazz. <br><br>", icon: ''},
                        {details: "Alice's influence has nurtured rising stars, with her protégés securing coveted placements in further education institutions and esteemed conservatories such as Urdang, Tring, Royal Ballet School, alongside earning scholarships to renowned institutions like the Joffrey School of Hip Hop and Royal Ballet Intensives. She has  managed multiple dance schools, choreographed musical theatre productions for schools, and honed students' skills over the past decade in the MENA region. <br><br>", icon: ''},
                        
                        {details: 'Alice has been  in Dubai since 2017 teaching students to an exceptionally high technical standard with numerous award winning entries to various dance competitions across the region.  <br><br>', icon: ''},
                        {details: "She has also taught across the  Level 6 Trinity diploma in dance and Musical Theatre BA programme.. <br><br>", icon: ''},
                    ],
                    experience: ''
                    }
                ], sectionId: 'Alice'},

                 //Annie
                { name: 'Ms. Annie', position: '', path: '/img/team/Annie.jpeg', headshot: '/img/team/Annie.jpeg', color: '#e5e5e5',
                tabs: [
                    {name: 'Ms. Annie', path: 'beth',
                    about: [
                        {details: 'Annie is fresh from the industry and we can’t wait for her to pass on her knowledge to our students. Annie will be teaching ISTD Tap & Modern, Lyrical, Musical Theatre, Commercial and Tech Jazz for us.<br><br>', icon: ''},
                        {details: 'Annie has recently graduated from Performers College in Essex, England with a BA(HONS) in musical theatre and dance. She has been dancing since she was 3 and has never looked back.<br><br>', icon: ''},
                        {details: 'While in her training she has danced with Becky Hill, Stefflon Don and ultra Natè at Wembley Stadium and has also featured as ensemble/ understudy Evil Queen in Sleeping Beauty in Chesterfield, England.  She was also selected to dance at Move It 2023 for choreographer Claudimar Neto’s Commercial piece “Midnights.”She was also Dance Captain for all 3 of her end of year shows working very closely with very current industry casting directors and choreographers (Claire Cassidy, Paul Saunders). She worked closely with both of these to choreograph and create the show. .<br><br>', icon: ''},
                        {details: 'Annie specialises in Tap, Modern, Commercial, Tech Jazz, Musical theatre, Acting, Singing, Ballet, Lyrical & Contemporary. She is ISTD trained up to Advanced 1 at Summerscales Performing Arts, then went on to Performers College for 3 years where she graduated in May  and can’t wait to start her new adventure teaching out here in Dubai! .<br><br>', icon: ''},
                        {details: 'She has been teaching musical theatre, singing and jazz since she was 16 and loves to teach the next generation, she cannot wait to join the Step Up academy and meet all of the lovely staff and students.<br><br>', icon: ''},

                    ], experience: ''},
                    {name: "", path: '',
                    about: [], experience: ''}
                ], sectionId: 'Annie'},

              
            ],

            adminStaffs: [
                // {name: 'VINCENT<br>WEB DEVELOPER', position: 'WEB DEVELOPER', image: '/img/headshots/Vinz.jpg'},
               
                {name: 'KRISHA<br>DIGITAL MARKETING', position: 'DIGITAL MARKETING', image: '/img/headshots/Krisha.jpg'},
                {name: 'ANJANA<br>PERSONAL ASSISTANT', position: 'PERSONAL ASSISTAN', image: '/img/headshots/Anjana.jpeg'},
                {name: 'JOEL<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Joel.jpg'},
                {name: 'MARY<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Mary.png'},
                {name: 'JENESSA<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Jenessa.jpeg'},
                {name: 'SUCHITHRA<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Suchithra.jpeg'},
                {name: 'LIEZEL<br>HOUSE KEEPING', position: 'PA', image: '/img/headshots/Liezel.jpg'},
                {name: 'JACQUILINE<br>HOUSE KEEPING', position: 'PA', image: '/img/headshots/Jacquiline.jpeg'},
            ]
        }
    },
    methods: {
        openDetails(teacher) {
            console.log(teacher);
            this.isOpen = true
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
