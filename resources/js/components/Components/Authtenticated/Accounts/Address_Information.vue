<template>
    <v-card class="mt-2">
        <v-card-title>
            Address Information
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" md="6">
                        <v-text-field
                            label="Street"
                            v-model="
                                $store.state.Users.current_user.street
                                    .meta_value
                            "
                            @input="my_info"
                        />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            label="City"
                            v-model="
                                $store.state.Users.current_user.town.meta_value
                            "
                            @input="my_info"
                        />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            label="Country"
                            v-model="
                                $store.state.Users.current_user.country
                                    .meta_value
                            "
                            @input="my_info"
                        />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            label="State"
                            v-model="
                                $store.state.Users.current_user.apartment
                                    .meta_value
                            "
                            @input="my_info"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: "update-profile-address",

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
