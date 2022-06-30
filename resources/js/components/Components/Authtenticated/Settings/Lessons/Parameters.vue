<template>
    <v-dialog
        v-model="$store.state.Lessons.lesson_parameter_open"
        width="800"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar color="blue lighten-2" dark flat>
                <v-toolbar-title>
                    Parameters {{ $store.state.Lessons.lesson.classname }}
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-col cols="12" md="9">
                            <v-text-field
                                label="Parameter Name"
                                v-model="form.parameters"
                                :rules="[v => !!v || 'Parameter is required']"
                                clearable
                                @click:clear="clear"
                            />
                        </v-col>
                        <v-col cols="12" md="3">
                            <div class="text-right">
                                <v-btn
                                    class="text-none primary"
                                    :disabled="!valid"
                                    @click="save"
                                    >Save</v-btn
                                >
                            </div>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
                <center>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                Name
                            </v-list-item-title>
                            <v-list-item-title></v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item
                            v-for="(item, index) in $store.state.Lessons
                                .lesson_parameters"
                            :key="index"
                        >
                            <v-list-item-title>
                                {{ item.parameters | toUpper }}
                            </v-list-item-title>
                            <v-list-item-title>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            @click="edit(item)"
                                            v-on="on"
                                            v-bind="attrs"
                                        >
                                            mdi-pencil
                                        </v-icon>
                                    </template>
                                    <span>
                                        Edit
                                    </span>
                                </v-tooltip>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            @click="del(item.id)"
                                            v-on="on"
                                            v-bind="attrs"
                                        >
                                            mdi-trash-can
                                        </v-icon>
                                    </template>
                                    <span>
                                        Delete
                                    </span>
                                </v-tooltip>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </center>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: "service-parameters",

    data() {
        return {
            valid: false,
            form: {
                class_id: this.$store.state.Lessons.lesson.classid,
                id: 0,
                parameters: null
            }
        };
    },

    methods: {
        save() {
            this.$store
                .dispatch("SAVE_LESSON_PARAMETER", {
                    form: this.form
                })
                .then(result => {
                    var data = {
                        class_id: this.$store.state.Lessons.lesson.classid,
                        id: 0,
                        parameters: null
                    };

                    this.form = data;

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
                        text: "Parameter successfully save!"
                    };
                    this.$store.commit("SNACKBAR", snackbar);
                    this.$store.dispatch(
                        "LESSON_PARAMETERS",
                        this.$store.state.Lessons.lesson.classid
                    );
                })
                .catch(err => {
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
                        text: "Something went wrong"
                    };
                    this.$store.commit("SNACKBAR", snackbar);
                });
        },

        edit(e) {
            this.form = e;
        },

        clear() {
            var form = {
                class_id: this.$store.state.Lessons.lesson.classid,
                id: 0,
                parameters: null
            };
            this.form = form;
        },

        del(e) {
            this.$store
                .dispatch("DELETE_LESSON_PARAMETER", {
                    id: e
                })
                .then(result => {
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
                        text: "Parameter successfully deleted!"
                    };
                    this.$store.commit("SNACKBAR", snackbar);
                    this.$store.dispatch(
                        "LESSON_PARAMETERS",
                        this.$store.state.Lessons.lesson.classid
                    );
                })
                .catch(err => {
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
                        text: "Something went wrong!"
                    };
                    this.$store.commit("SNACKBAR", snackbar);
                });
        },

        close() {
            this.$store.commit("LESSON_PARAMETERS", []);
            this.$store.commit("LESSON_PARAMETER_OPEN", false);
        }
    }
};
</script>
