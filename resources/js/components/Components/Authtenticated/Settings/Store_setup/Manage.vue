<template>
    <div>
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete
                            :items="$store.state.Schedules.setting_details.date_ranges"
                            item-text="daterangename"
                            item-value="drid"
                            v-model="$store.state.Date_ranges.store_setup.online_lessons.value"
                            label="Online Store"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            label="Online Store Title"
                            v-model="$store.state.Date_ranges.store_setup.online_lesson_text.value"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete
                            :items="$store.state.Schedules.setting_details.date_ranges"
                            item-text="daterangename"
                            item-value="drid"
                            v-model="$store.state.Date_ranges.store_setup.motorcity_lessons.value"
                            label="Motorcity Store"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-text-field
                            label="Motor City Store Title"
                            v-model="$store.state.Date_ranges.store_setup.motorcity_lesson_text.value"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="1"
                    >
                        <v-checkbox
                            label="EBD"
                            v-model="$store.state.Date_ranges.store_setup.motorcity_lesson_ebd.value"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete
                            :items="$store.state.Schedules.setting_details.date_ranges"
                            item-text="daterangename"
                            item-value="drid"
                            v-model="$store.state.Date_ranges.store_setup.foremarke_lessons.value"
                            label="Foremarke Store"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            label="Foremarke Store Title"
                            v-model="$store.state.Date_ranges.store_setup.foremarke_lesson_text.value"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete
                            :items="$store.state.Schedules.setting_details.date_ranges"
                            item-text="daterangename"
                            item-value="drid"
                            v-model="$store.state.Date_ranges.store_setup.camp_lessons.value"
                            label="Camps Store"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            label="Camps Store Title"
                            v-model="$store.state.Date_ranges.store_setup.camp_lesson_text.value"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete
                            :items="$store.state.Schedules.setting_details.date_ranges"
                            item-text="daterangename"
                            item-value="drid"
                            v-model="$store.state.Date_ranges.store_setup.akoya_lessons.value"
                            label="Akoya Store"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            label="Akoya Store Title"
                            v-model="$store.state.Date_ranges.store_setup.akoya_lesson_text.value"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete
                            :items="$store.state.Schedules.setting_details.date_ranges"
                            item-text="daterangename"
                            item-value="drid"
                            v-model="$store.state.Date_ranges.store_setup.arcadia_lessons.value"
                            label="Arcadia Store"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            label="Arcadia Store Title"
                            v-model="$store.state.Date_ranges.store_setup.arcadia_lesson_text.value"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-autocomplete
                            :items="$store.state.Schedules.setting_details.date_ranges"
                            item-text="daterangename"
                            item-value="drid"
                            v-model="$store.state.Date_ranges.store_setup.urdang_lessons.value"
                            label="Urdang Store"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            label="Urdang Store Title"
                            v-model="$store.state.Date_ranges.store_setup.urdang_lesson_text.value"
                        />
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    class="success text-none"
                    @click="save"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    created() {
        this.store_setup()
    },

    methods: {
        store_setup() {
            this.$store.dispatch('STORE_SETUP');
            this.$store.dispatch("SETTING_DETAILS");
        },

        save() {
            this.$store.dispatch('STORE_SETUP_UPDATE', {
                form: this.$store.state.Date_ranges.store_setup
            })
            .then((result) => {
                var snackbar = {
                    snackbar: true,
                    vertical: false,
                    timeout: 2000,
                    color: "blue lighten-2",
                    dark: true,
                    top: true,
                    bottom: false,
                    centered: true,
                    left: false,
                    right: false,
                    text: "successfully save!",
                };
                this.$store.commit("SNACKBAR", snackbar);
            }).catch((err) => {
                var snackbar = {
                    snackbar: true,
                    vertical: false,
                    timeout: 2000,
                    color: "red",
                    dark: true,
                    top: true,
                    bottom: false,
                    centered: true,
                    left: false,
                    right: false,
                    text: "something went wrong",
                };
                this.$store.commit("SNACKBAR", snackbar);
            });
        }
    }
}
</script>
