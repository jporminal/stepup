<template>
    <v-card class="mt-2">
        <v-card-title>
            About Information
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12">
                        <tiptap-vuetify
                            v-model="
                                $store.state.Users.current_user.about.meta_value
                            "
                            :extensions="extensions"
                            @input="my_info"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
import {
    TiptapVuetify,
    Heading,
    Bold,
    Italic,
    Strike,
    Underline,
    Code,
    Paragraph,
    BulletList,
    OrderedList,
    ListItem,
    Link,
    Blockquote,
    HardBreak,
    HorizontalRule,
    History,
    Image
} from "tiptap-vuetify";

export default {
    name: "update-profile-about",

    components: { TiptapVuetify },

    data: () => ({
        extensions: [
            History,
            Blockquote,
            Link,
            Underline,
            Strike,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            [
                Heading,
                {
                    options: {
                        levels: [1, 2, 3]
                    }
                }
            ],
            Bold,
            Code,
            HorizontalRule,
            Paragraph,
            HardBreak,
            Image
        ]
    }),

    methods: {
        my_info() {
            this.$store.commit(
                "CURRENT_USER",
                this.$store.state.Users.current_user
            );
        }
    }
};
</script>
