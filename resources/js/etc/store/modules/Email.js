import axios from "axios";
import User from "./Users";

export default {
    state: {
        date_ranges: [],
        lessons: [],
        teachers: [],
        email_filters: {
            date_range: 0,
            staff_id: 0,
            class_id: 0
        },
        email_filtered: [],
        loading: false
    },

    mutations: {
        EMAIL_DATE_RANGES: (state, payload) => {
            state.date_ranges = payload;
        },
        EMAIL_LESSONS: (state, payload) => {
            state.lessons = payload;
        },
        EMAIL_TEACHERS: (state, payload) => {
            state.teachers = payload;
        },
        EMAIL_FILTER: (state, payload) => {
            state.email_filters = payload;
        },
        EMAIL_FILTERED: (state, payload) => {
            state.email_filtered = payload;
        },
        EMAIL_LOADER: (state, payload) => {
            state.loading = payload;
        }
    },

    actions: {
        EMAIL_DATE_RANGES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios.get("/api/EMAIL-DATE-RANGES").then(result => {
                context.commit("EMAIL_DATE_RANGES", result.data);
            });
        },

        EMAIL_LESSONS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios.get(`/api/EMAIL-LESSONS/${payload}`).then(result => {
                context.commit("EMAIL_LESSONS", result.data);
            });
        },

        EMAIL_TEACHERS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/EMAIL-TEACHERS/${payload.drid}/${payload.class_id}`)
                .then(result => {
                    context.commit("EMAIL_TEACHERS", result.data);
                });
        },

        FILTER_EMAIL: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios
                .post("/api/EMAIL-FILTER", {
                    form: payload.form
                })
                .then(result => {
                    context.commit("EMAIL_FILTERED", result.data);
                    context.commit("EMAIL_LOADER", false);
                });
        }
    }
};
