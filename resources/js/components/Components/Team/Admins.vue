<template>
    <div class="slant-card-others-container">
        <div class="slant-card-others">
            <div class="slant-card-others-inner">
                <v-lazy v-model="isActive" :option="{threshold: .5}" transition="fade-transition">
                    <v-card color="#f8f8f8" flat>
                        <v-card-text>
                            <h1 class="text-center display-3"> Our Admins </h1>
                        </v-card-text>
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
    </div>
</template>
<script>
export default {
    name: 'teachers',
    data() {
        return {
            isActive: false,
            adminStaffs: [
                {name: 'MARLO<br>GRAPHIC DESIGNER', position: 'GRAPHIC DESIGNER', image: '/img/headshots/marlo.jpg'},
                {name: 'VINCENT<br>WEB DEVELOPER', position: 'WEB DEVELOPER', image: '/img/headshots/Vinz.jpg'},
                {name: 'JOEL<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Joel.jpg'},
                {name: 'GERMAINE<br>FRONT OF HOUSE', position: 'FRONT OF HOUSE', image: '/img/headshots/Germaine.jpg'},
                {name: 'SAKSHI<br>SALES AND MARKETING', position: 'SALES AND MARKETING', image: '/img/headshots/Sakshi.jpg'},
                {name: 'ALICE<br>PERSONAL ASSISTANT', position: 'PA', image: '/img/headshots/Alice.jpg'},
                {name: 'RICHELLE<br>OFFICE GIRL AND ASSISTANT', position: 'OFFICE GIRL AND ASSISTANT', image: '/img/headshots/Richelle.jpg'}
            ]
        }
    },
}
</script>

