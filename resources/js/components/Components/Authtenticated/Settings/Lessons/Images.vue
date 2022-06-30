<template>
    <v-dialog
        v-model="$store.state.Lessons.lesson_upload_image"
        width="800"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar color="blue lighten-2" dark flat>
                <v-toolbar-title>
                    Image for {{ $store.state.Lessons.lesson.classname }}
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-list>
                    <center>
                        <v-list-item>
                            <v-list-item-title>
                                Image
                            </v-list-item-title>
                            <v-list-item-title> </v-list-item-title>
                        </v-list-item>
                        <v-list-item
                            v-for="(item, index) in $store.state.Lessons
                                .lesson_images"
                            :key="index"
                        >
                            <v-list-item-avatar tile size="150">
                                <v-img
                                    :src="`/img/products/${item.image_name}`"
                                ></v-img>
                            </v-list-item-avatar>
                            <v-list-item-title>
                                <v-icon color="red" @click="del(item)">
                                    mdi-trash-can
                                </v-icon>
                            </v-list-item-title>
                        </v-list-item>
                    </center>
                </v-list>
            </v-card-text>
            <v-card-text>
                <my_image />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: "image-save",

    components: {
        my_image: () => import("./Upload_images")
    },

    methods: {
        del(e) {
            this.$store
                .dispatch("DELETE_LESSON_IMAGES", {
                    id: e.id
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
                        text: "Image deleted"
                    };
                    this.reload_images();
                    this.$store.commit("SNACKBAR", snackbar);
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
                        text: "Something went wrong."
                    };
                    this.$store.commit("SNACKBAR", snackbar);
                });
        },

        reload_images() {
            if (this.$store.state.Lessons.lesson_upload_image) {
                this.$store.dispatch(
                    "LESSON_IMAGES",
                    this.$store.state.Lessons.lesson.classid
                );
            }
        },

        close() {
            this.$store.commit("LESSON_IMAGES", []);
            this.$store.commit("LESSON", {});
            this.$store.commit("LESSON_UPLOAD_IMAGE", false);
        }
    }
};
</script>
