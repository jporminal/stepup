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
                // vicky
                { name: 'Ms. Vicky<br>Executive Director', position: 'Executive Director', path: '/img/team/Vicky.jpg', headshot: '/img/headshots/Vicky.jpg', color: '#fff',
                tabs: [
                    {name: 'Ms. Vicky', path: 'vicky',
                    about: [
                        {details: 'Vicky is originally from the UK and started dancing at the age of 6 in her local dance school Sidmouth Ballet School and East Devon Dance. She trained in RAD Ballet, ISTD Tap and Modern, Street Jazz, Cheerleading and was also lucky enough to attend workshops for Irish and Spanish. Vicky’s love and interests in teaching began at the age of 14 when she would go to the local dance classes to assist and watch.<br><br>', icon: ''},

                        {details: 'She successfully went onto do her RAD (Royal Academy of Dance) teachers training for 2 years, where she graduated in June 2010 with CBTS and gained her registered teacher status.<br><br>', icon: ''},

                        {details: 'Vicky moved to the UAE in September 2010 and started teaching full time straight away. Since teaching here she has put students through their RAD exams and has also choreographed for many shows.<br><br>', icon: ''}
                    ], experience: ''},
                    {name: "Vicky's achievements / experience", path: 'vicky-achievement',
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
            


                //Laura
                { name: 'Ms. Laura Davies<br>Head of IDTA', position: 'Head of IDTA', path: '/img/team/Laura.jpg', headshot: '/img/headshots/LauraDavies.jpg', color: '#fff',
                tabs: [
                    {name: 'Ms. Laura Davies', path: 'laura',
                    about: [
                        {details: 'Laura is from the United Kingdom. She began dancing when she was 3 years old where she studied all styles of dance, taking RAD ballet examinations and IDTA Tap and Modern Examinations.!<br><br>', icon: ''},
                        {details: 'At the age of 11, she joined Centrepointe Dance School in Manchester, continuing with examinations and participating in competitions. Laura joined the prestigious Bird College in September 2011, completing a three year diploma in Dance and Musical Theatre.<br><br>', icon: ''},
                        {details: ' Since graduating, Laura has danced professionally all over the world, choreographed for Sky Sports and many sports events, and also began teaching. Laura is delighted to have joined the team at Step Up and can’t wait to see what the future brings'}
                    ], experience: ''}
                ], sectionId: 'laura'},

                //Olivia
                { name: 'Ms. Olivia<br>Vocal & Musical Theatre Teacher', position: 'Vocal & Musical Theatre Teacher', path: '/img/headshots/Olivia.jpg', headshot: '/img/headshots/Olivia.jpg', color: '#e5e5e5',
                tabs: [
                    {
                    name: 'Ms. Olivia', path: 'olivia',
                    about: [
                        {details: 'Olivia Cloud was born in Johannesburg, South Africa. Olivia is a 24 year old trained and qualified Singer, Songwriter, Actress, Dancer, Performer and Trinity London College Examination Facilitator and Educator.<br><br>', icon: ''},
                        {details: 'Olivia completed an intensive one year training course in Performing Arts and Musical Theatre at Stageworx School of Performing Arts in 2018, gaining her ATCL in Performance Arts and LTCL Diploma in Musical Theatre through Trinity Guildhall London College, both with Distinction. <br><br>', icon: ''},
                        {details: 'In 2014, Olivia was a contestant on Idols South Africa Season 10 and made it to the Top 16, Which kick started her career as a recording artist in South Africa, where she has now released two hit singles, “Shake” and “Run” which are available on all major platforms. <br><br>', icon: ''},
                        {details: 'In 2018, Olivia played ‘Rainbow Dash’ in the ‘My Little Pony’ live shows at Carnival City. She  also featured as a vocalist and dancer in ‘Born To Perform Shine’ at the Lyric Theatre. At the end of 2019, Olivia assisted Gemma Marinus (Director) with choreography and direction in the "Born To Perform" Production, a showcase of Youth Talent. <br><br>', icon: ''},
                        {details: "During her trip to London in 2019, Olivia attended various singing and acting workshops through City Lit London, and worked intensively on her dancing at 'Pineapple Studios'. Olivia then began teaching Musical Theatre at Stageworx Performing Arts School, primarily working with Students who were taking their Trinity London College Examinations. 90% of Olivia’s students received distinctions for their exams. <br><br>", icon: ''},
                        {details: 'At the end of 2019, Olivia was cast in Janice Honeyman’s 2019 Pantomime Spectacular “Jack And The Beanstalk” at the prestigious Joburg Theatre, as ensemble as well as understudy of the female Lead. <br><br>' , icon: ''},
                        {details: 'In early 2020, Olivia appeared in the National Children’s Theatre’s anti bullying traveling show, which toured to many schools in Johannesburg. Due to COVID 19, the Theatre industry has taken a major hit, so Olivia has decided to go back to teaching Singing and Musical Theatre and is currently living in Dubai, Running the Musical Theatre and Vocal Department at Step Up Academy, Providing professional Vocal Coaching and Musical Theatre lessons. Olivia is also involved in the directing, coordinating and choreographing of shows and events of the Musical Theatre Company at Step Up Academy. <br><br>' , icon: ''},
                        {details: 'Olivia is passionate about working with young, up-and-coming, passionate performers and helping them hone in their craft.” <br><br>' , icon: ''},
                    ],
                    experience: ''
                    }
                ], sectionId: 'Olivia'},

                 //Beth
                { name: 'Ms. Beth<br>Dance Teacher', position: '', path: '/img/headshots/Beth.jpg', headshot: '/img/headshots/Beth.jpg', color: '#e5e5e5',
                tabs: [
                    {name: 'Ms. Beth', path: 'beth',
                    about: [
                        {details: 'Beth hails from the United Kingdom originally but spent most of her childhood in Cape Town,South Africa. Here she trained in RAD Ballet and ISTD Modern Theatre and Tap. Returning to the UK for her professional training she attended the prestigious Hammond School where she gained a National Diploma in Professional Musical Theatre and Dance (accredited by Trinity College of London).<br><br>', icon: ''},
                        {details: 'Upon graduation Beth performed in a number of shows across the world including, Santa Claus the Musical in Singapore, The world famous Irish Dance Show - Spirit of the Dance touring in Canada and the United States. Beth also took up a residency in the Kings Castle Theatre in Branson, Missouri performing several shows in her time there such as the ballroom sensation, Puttin’ on the Ritz and New Jersey Nights.<br><br>', icon: ''},
                        {details: 'For the last 10 years Beth has traveled across all 7 continents working as Dance Captain and Show Company Manger onboard Cruise liners for companies such as P&O Cruises, Cunard Cruises and Holland America Line.<br><br>', icon: ''},
                        {details: 'Whilst not performing Beth has worked across the UK as a Freelance Dance Instructor coaching exam students in ISTD Modern and Tap and RAD Ballet - in addition to holding ‘industry workshops’ to aspiring young performers.<br><br>', icon: ''},
                        {details: 'In between all of her travel, performances and teaching , Beth has also additionally gained her teaching qualifications. She is a fully qualified Modern Theatre and Tap Teacher through the ISTD (Imperial Society of Teachers of Dancing). Additionally a fully qualified Ballet teacher through the IDTA and has gained Registered Teacher Status with RAD (Royal Academy of Dance). These qualifications ensure she is up to date and ready to enter Students in for annual examinations.<br><br>', icon: ''},
                        {details: 'Beth also teaches Yoga and Pilates having gained her Diploma for both subjects in 2019. Currently Beth is working towards her Qualification to teach PBT (Progressive Ballet Technique) in order to assist her RAD Ballet Students in their further training.<br><br>' , icon: ''},
                        {details: 'I am most definitely enjoying seeing the progress of my students at Step Up Academy and I love to dance alongside you all every week!.<br><br>' , icon: ''}
                    ], experience: ''},
                    {name: "", path: '',
                    about: [], experience: ''}
                ], sectionId: 'Beth'},
                //Laura Dillon
                { 
                    name: 'Ms. Laura<br>Dance Teacher', 
                    position: 'Dance Teacher', 
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
                //Vitaliy
                { 
                    name: 'Mr. Vitaliy<br>Head of Boys Dept & Dance Teacher', 
             
                    position: 'Head of Boys Dept & Dance Teacher', 
                    path: '/img/headshots/Vitaliy.jpg', 
                    headshot: '/img/headshots/Vitaliy.jpg', 
                    color: '#fff',
                    tabs: [
                        {
                            name: 'Mr. Vitaliy', 
                            path: '',
                            about: [
                                {details: 'Vitaliy gained his dance training in his home country at the National University of Culture in Kyiv, Ukraine. Here he gained a Masters Degree in Choreography and Contemporary Dance. Vitaliy trained using the world famous Russian Ballet VnanovA method which he still practices and teaches now.<br><br>', icon: ''},
                                {details: "Upon graduation Vitaliy went on to perform at the National Ukrainian Musical Theatre as a Dancer and Choreographer. Simultaneously Vitally was teaching at `The School of Arts' on the Crimean peninsula - here he was responsible for training students in Jazz, Ukrainian Folk Dancing, Contemporary and Choreography. In 2006 Vitaliy took his talents abroad and went on to perform in the Xua-Xia Theater, Zhen-Zhen, China in the innovative new concept show 'Elements.' <br><br>", icon: ''},
                                {details: 'For the last 12 years Vitaliy has been working for a number of Cruise Lines across the world including, Cunard Cruises, Celebrity Cruises and Holland America Line as a Dancer and Dance Captain. Where he performed as a soloist specialising in Contemporary, Jazz, Ballet and Commercial Dance.<br><br>', icon: ''},
                                {details: 'In 2020 Vitaliy returned to Kyiv and began teaching in several dance schools focusing on Contemporary dance and ballet. Vitaliy also taught in many fitness centres and gyms teaching classes such as Ballet Barre Fitness, Pilates, Interval Training and Dance Based Fitness Classes. <br><br>', icon: ''},
                                {details: 'Vitaliy is enjoying bringing his wealth, knowledge, culture and experience in the performing arts industry to all the students at Step Up Academy. <br><br>', icon: ''},
                            ],
                            experience: ''
                        },
                    ], 
                    sectionId: 'vitaliy'
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

              
            ],

            adminStaffs: [
                // {name: 'VINCENT<br>WEB DEVELOPER', position: 'WEB DEVELOPER', image: '/img/headshots/Vinz.jpg'},
               
                {name: 'KRISHA<br>DIGITAL MARKETING', position: 'DIGITAL MARKETING', image: '/img/headshots/Krisha.jpg'},
                {name: 'ANJANA<br>PERSONAL ASSISTANT', position: 'PERSONAL ASSISTAN', image: '/img/headshots/Anjana.jpeg'},
                {name: 'JOEL<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Joel.jpg'},
                {name: 'MARY<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Mary.png'},
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
