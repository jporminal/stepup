<template>
    <v-dialog
        v-model="$store.state.Lessons.lesson_price_open"
        width="800"
        @click:outside="close"
    >
        <v-card>
            <service_price v-if="$store.state.Lessons.lesson_price_item_open" />
            <v-toolbar class="blue lighten-2" dark flat>
                <v-toolbar-title>
                    Prices for {{ $store.state.Lessons.lesson.classname }}
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <center>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                Name
                            </v-list-item-title>
                            <v-list-item-title>
                                Price
                            </v-list-item-title>
                            <v-list-item-title> </v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item
                            v-for="(item, index) in $store.state.Lessons
                                .lesson_prices"
                            :key="index"
                        >
                            <v-list-item-title>
                                {{ item.serviceName }}
                            </v-list-item-title>
                            <v-list-item-title>
                                {{ item.price | currency }}
                            </v-list-item-title>
                            <v-list-item-title>
                                <v-icon @click="edit(item)">
                                    mdi-pencil
                                </v-icon>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </center>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn class="error" icon dark @click="add">
                    <v-icon>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: "service-prices",

    components: {
        service_price: () => import("./Price_item")
    },

    methods: {
        add() {
            var add = {
                classid: this.$store.state.Lessons.lesson.classid,
                id: 0,
                price: 0.0,
                quantity: 0,
                serviceName: "Regular",
                duplicate: 1
            };
            this.$store.commit("LESSON_PRICE", add);
            this.$store.commit("LESSON_PRICE_ITEM_OPEN", true);
        },

        edit(e) {
            this.$store.commit("LESSON_PRICE", e);
            this.$store.commit("LESSON_PRICE_ITEM_OPEN", true);
        },

        close() {
            this.$store.commit("LESSON_PRICES", []);
            this.$store.commit("LESSON", {});
            this.$store.commit("LESSON_PRICE_OPEN", false);
        }
    }
};
</script>
