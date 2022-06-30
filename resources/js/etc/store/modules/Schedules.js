import axios from "axios";
import User from "./Users";

var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();

export default {
    state: {
        schedules: [],
        schedule: {},
        schedule_open: false,
        schedule_filter: {
            date_range: 0,
            start_date: new Date(y, m, 1),
            end_date: new Date(y, m + 1, 0)
        },
        date_ranges: [],
        schedule_details: {},
        schedule_detail_open: false,
        setting_details: {},
        other_settings: {},
    },

    mutations: {
        SCHEDULES: (state, payload) => {
            state.schedules = payload;
        },
        SCHEDULE: (state, payload) => {
            state.schedule = payload;
        },
        SCHEDULE_OPEN: (state, payload) => {
            state.schedule_open = payload;
        },
        SCHEDULE_FILTER: (state, payload) => {
            state.schedule_filter = payload;
        },
        SCHEDULE_DATE_RANGES: (state, payload) => {
            state.date_ranges = payload;
        },
        SCHEDULE_DETAILS: (state, payload) => {
            state.schedule_details = payload;
        },
        SCHEDULE_DETAIL_OPEN: (state, payload) => {
            state.schedule_detail_open = payload;
        },
        SETTING_DETAILS: (state, payload) => {
            state.setting_details = payload;
        },
        OTHER_SETTING_DETAILS: (state, payload) => {
            state.other_settings = payload;
        },
    },

    actions: {
        SCHEDULES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios
                .post("/api/SCHEDULE", {
                    start: payload.start,
                    end: payload.end,
                    date_range: payload.date_range
                })
                .then(result => {
                    context.commit("SCHEDULES", result.data);
                });
        },

        FILTER_DATERANGE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios.get(`/api/GET-DATERANGES/${payload}`).then(result => {
                context.commit("SCHEDULE_DATE_RANGES", result.data);
            });
        },

        SCHEDULE_DETAILS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios.get(`/api/SCHEDULE-DETAILS/${payload}`).then(result => {
                context.commit("SCHEDULE_DETAILS", result.data);
                context.commit("SCHEDULE_DETAIL_OPEN", true);
            });
        },

        SETTING_DETAILS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios.get("/api/SETTING-DETAILS").then(result => {
                context.commit("SETTING_DETAILS", result.data);
            });
        },

        OTHER_SETTING_DETAILS: (context) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios.get("/api/OTHER-SETTING-DETAILS").then(result => {
                context.commit("OTHER_SETTING_DETAILS", result.data);
            });
        },

        SCHEDULE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios.get(`/api/SCHEDULE/${payload}`).then(result => {
                context.commit("SCHEDULE_OPEN", true);
                context.commit("SCHEDULE", result.data);
            });
        },

        SAVE_SCHEDULE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/SAVE-SCHEDULE", {
                        form: payload.form
                    })
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        SCHEDULE_DELETE: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.get(`/api/DELETE-SCHEDULE/${payload}`)
                    .then((result) => {
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
};