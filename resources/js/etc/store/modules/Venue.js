import axios from "axios";
import User from "./Users";

export default {
    state: {
        venues: [],
        my_venues: {},
        my_venue: {},
        my_venue_open: false,
        my_venue_filter: {
            filter: null,
            page: 1,
            per_page: 10
        },
        loading: false
    },

    mutations: {
        VENUES: (state, payload) => {
            state.venues = payload;
        },

        MY_VENUES: (state, payload) => {
            state.my_venues = payload;
        },

        MY_VENUE: (state, payload) => {
            state.my_venue = payload;
        },

        MY_VENUE_OPEN: (state, payload) => {
            state.my_venue_open = payload;
        },

        MY_VENUE_FILTER: (state, payload) => {
            state.my_venue_filter = payload;
        },

        VENUE_LOADING: (state, payload) => {
            state.loading = payload
        }
    },

    actions: {
        VENUES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios.get("/api/VENUES").then(result => {
                context.commit("VENUES", result.data);
                context.commit("VENUE_LOADING", false);
            });
        },

        MY_VENUES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/GET-VENUES?page=${payload.page}`, {
                    params: {
                        per_page: payload.per_page
                    }
                })
                .then(result => {
                    context.commit("MY_VENUES", result.data);
                    context.commit("VENUE_LOADING", false);
                });
        },

        MY_VENUE_FILTER: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/GET-VENUES/${payload.filter}?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then(result => {
                    context.commit("MY_VENUES", result.data);
                    context.commit("VENUE_LOADING", false);
                });
        },

        SAVE_VENUE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/SAVE-VENUE", {
                        form: payload.form
                    })
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        }
    }
};