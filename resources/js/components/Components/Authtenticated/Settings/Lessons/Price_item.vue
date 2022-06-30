<template>
    <v-dialog
        v-model="$store.state.Lessons.lesson_price_item_open"
        width="400"
        @click:outside="close"
    >
        <v-card>
            <v-toolbar class="blue lighten-2" dark flat>
                <v-toolbar-title>
                    {{ title }}
                </v-toolbar-title>
            </v-toolbar>

            <v-card-text>
                <v-text-field
                    label="Name"
                    v-model="$store.state.Lessons.lesson_price.serviceName"
                />
                <v-text-field
                    label="Price"
                    v-model.number="$store.state.Lessons.lesson_price.price"
                    type="number"
                />
                <v-text-field
                    label="Quantity"
                    v-model.number="$store.state.Lessons.lesson_price.quantity"
                    type="number"
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="primary text-none" @click="save">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: "service-price-item",

    methods: {
        save() {
            this.$store
                .dispatch("SAVE_LESSON_PRICE", {
                    form: this.$store.state.Lessons.lesson_price
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
                        text: "Price successfully save!"
                    };
                    this.$store.commit("SNACKBAR", snackbar);
                    this.$store.dispatch(
                        "LESSON_PRICES",
                        this.$store.state.Lessons.lesson_price.classid
                    );
                    this.close();
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
        close() {
            this.$store.commit("LESSON_PRICE", {});
            this.$store.commit("LESSON_PRICE_ITEM_OPEN", false);
        }
    },

    computed: {
        title() {
            return this.$store.state.Lessons.lesson_price.id > 0
                ? "Edit Price"
                : "New Price";
        }
    }
};
</script>
