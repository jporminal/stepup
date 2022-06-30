<template>
    <v-card>
        <v-card-title>
            Basic Information
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row align="center">
                    <v-col cols="12" md="6">
                        <v-text-field
                            label="First Name"
                            v-model="
                                $store.state.Users.current_user.firstname
                                    .meta_value
                            "
                            @input="my_info"
                        />
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field
                            label="Family Name"
                            v-model="
                                $store.state.Users.current_user.lastname
                                    .meta_value
                            "
                            @input="my_info"
                        />
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field
                            label="Email Address"
                            v-model="
                                $store.state.Users.current_user.email.meta_value
                            "
                            disabled
                        />
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field
                            label="Contact Number"
                            v-model="
                                $store.state.Users.current_user.contact
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
    name: "update-profile-basic-information",

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
