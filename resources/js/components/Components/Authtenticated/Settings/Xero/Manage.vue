<template>
    <div>
        <v-card>
            <v-toolbar color="blue lighten-2" class="white--text" flat>
                <v-toolbar-title> Xero </v-toolbar-title>
            </v-toolbar>

            <v-card-text>
                <v-btn class="success" @click="login">
                    login
                </v-btn>
                <v-btn class="success" @click="get_token">
                    Get Token
                </v-btn>
                <v-btn class="success" @click="refresh_token">
                    Refresh Token
                </v-btn>
                <v-btn class="success" @click="load_invoices">
                    Load Invoices
                </v-btn>

                <div class="mt-5 red--text" v-if="!$store.state.Xero.xero_token">No Xero Token. Login then press Get token.</div>



            </v-card-text>
            <v-card-text>
                <my_receipts />
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'xero-login',

    components: {
        my_receipts: () => import('../../Receipts/View')
    },

    data() {
        return {
            error: null
        }
    },

    created() {
        localStorage.setItem('xero-code', this.$route.query.code || null);

        this.$store.commit('XERO_CODE', this.$route.query.code)
    },

    methods: {
        login() {
            this.$store.dispatch('XERO_LOGIN')
            .then((result) => {
                window.location.href = result.data;
            })
        },

        refresh_token() {
            this.$store.dispatch('XERO_REF_TOKEN', {
                token: this.$store.state.Xero.xero_token
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
                    text: "You have refresh your token! Keep it up bro!",
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
                    text: err.response.data.message,
                };
                this.$store.commit("SNACKBAR", snackbar);
            });
        },

        get_token() {
            this.$store.dispatch('XERO_TOKEN', {
                xero_code: this.$store.state.Xero.xero_code,
                xero_state: this.$store.state.Xero.xero_state
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
                    text: "Yeah! I got the token!",
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
                    text: err.response.data.message,
                };
                this.$store.commit("SNACKBAR", snackbar);
            });
        },

        load_invoices() {
            this.$store.dispatch('XERO_INVOICE', {
                token: this.$store.state.Xero.xero_token,
                tenant_id: this.$store.state.Xero.xero_tenants
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
                    text: "Hey men!, look down all your invoices",
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
                    text: err.response.data,
                };
                this.$store.commit("SNACKBAR", snackbar);
            });
        }
    }
}
</script>
