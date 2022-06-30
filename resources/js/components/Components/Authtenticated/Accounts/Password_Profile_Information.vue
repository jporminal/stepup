<template>
    <v-card class="mt-2">
        <v-card-title>
            <i> leave empty if not changing </i>
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-form ref="form">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Password"
                                v-model="
                                    $store.state.Users.current_user.password
                                "
                                :append-icon="
                                    show_password ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                :type="show_password ? 'text' : 'password'"
                                @click:append="show_password = !show_password"
                                @input="my_info"
                            />
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-file-input
                                :rules="rules"
                                accept="image/png, image/jpeg, image/bmp"
                                label="Select your profile"
                                prepend-icon="mdi-camera"
                                :clearable="false"
                                @change="onImage"
                                :show-size="1000"
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn class="success text-none" @click="save">
                Save Profile
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name: "update-profile-password-profile",

    data: () => ({
        password: "",
        show_password: false,
        rules: [
            value =>
                !value ||
                value.size < 2000000 ||
                "Avatar size should be less than 2 MB!"
        ]
    }),

    methods: {
        save() {
            var form = {
                thumbnail: this.$store.state.Users.current_user.thumbnail,
                about: this.$store.state.Users.current_user.about,
                status: this.$store.state.Users.current_user.status,
                contact: this.$store.state.Users.current_user.contact,
                firstname: this.$store.state.Users.current_user.firstname,
                lastname: this.$store.state.Users.current_user.lastname,
                country: this.$store.state.Users.current_user.country,
                town: this.$store.state.Users.current_user.town,
                street: this.$store.state.Users.current_user.street,
                apartment: this.$store.state.Users.current_user.apartment
            };
            this.$store
                .dispatch("UPDATE_PROFILE", {
                    form,
                    password: this.$store.state.Users.current_user.password,
                    id: this.$store.state.Users.current_user.id
                })
                .then(result => {
                    var snackbar = {
                        snackbar: true,
                        vertical: true,
                        timeout: 2000,
                        color: "blue lighten-2",
                        dark: true,
                        top: true,
                        bottom: false,
                        centered: true,
                        left: false,
                        right: false,
                        text: `Profile successfully updated!`
                    };

                    this.$store.commit("SNACKBAR", snackbar);
                    this.$store.dispatch("CURRENT_USER");
                });
        },

        onImage(e) {
            // this.$store.commit("OPEN_AVATAR", true);
            const files = e;
            this.addImage(files);
        },

        addImage(file) {
            var filename = file.name;
            var res = filename.split(".");
            const img = new Image(),
                reader = new FileReader();
            reader.onload = e =>
                (this.$store.state.Users.current_user.thumbnail.meta_value =
                    e.target.result);
            this.$store.state.Users.current_user.thumbnail.name = filename;
            this.$store.state.Users.current_user.thumbnail.extension =
                res[res.length - 1];
            reader.readAsDataURL(file);

            this.$store.commit(
                "CURRENT_USER",
                this.$store.state.Users.current_user
            );
        },

        my_info() {
            this.$store.commit(
                "CURRENT_USER",
                this.$store.state.Users.current_user
            );
        }
    }
};
</script>
