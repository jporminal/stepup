<template>
    <v-container>
        <v-row align="center" justify="center" fill-height>
            <v-col cols="8">
                <vue-dropzone
                    ref="myVueDropzone"
                    id="dropzone"
                    :options="dropzoneOptions"
                    v-on:vdropzone-sending="sendingEvent"
                    v-on:vdropzone-success="paginate"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
    name: "image-upload",
    components: {
        vueDropzone: vue2Dropzone
    },
    data: function() {
        return {
            dropzoneOptions: {
                url: "/api/STORE-MULTIPLE-IMAGES",
                thumbnailWidth: 150,
                headers: {
                    "X-CSRF-TOKEN": document.head.querySelector(
                        "[name=csrf-token]"
                    ).content
                }
            }
        };
    },
    methods: {
        sendingEvent(file, xhr, formData) {
            var id = this.$store.state.Lessons.lesson_upload_image
                ? this.$store.state.Lessons.lesson.classid
                : "";
            var service = this.$store.state.Lessons.lesson_upload_image
                ? "Service"
                : "Product";
            formData.append("product_id", id);
            formData.append("type", service);
        },
        paginate() {
            var id = this.$store.state.Lessons.lesson_upload_image
                ? this.$store.state.Lessons.lesson.classid
                : "";
            this.$store.dispatch("LESSON_IMAGES", id);
        }
    }
};
</script>
