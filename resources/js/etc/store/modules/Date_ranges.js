import axios from "axios";
import User from "./Users";

export default {
    state: {
        date_ranges: {},
        date_range: {},
        date_range_open: false,
        date_range_filter: {
            filter: null,
            page: 1,
            per_page: 10
        },
        loading: false,
        store_setup: {
            foremarke_lessons: { id: 0, value: 0 },
            motorcity_lessons: { id: 0, value: 0 },
            online_lessons: { id: 0, value: 0 },
            camp_lessons: { id: 0, value: 0 },
            akoya_lessons: { id: 0, value: 0 },
            arcadia_lessons: { id: 0, value: 0 },
            urdang_lessons: { id: 0, value: 0 },
            foremarke_lesson_text: { id: 0, value: '' },
            motorcity_lesson_text: { id: 0, value: '' },
            online_lesson_text: { id: 0, value: '' },
            camp_lesson_text: { id: 0, value: '' },
            akoya_lesson_text: { id: 0, value: '' },
            arcadia_lesson_text: { id: 0, value: '' },
            urdang_lesson_text: { id: 0, value: '' },
            motorcity_lesson_ebd: { id: 0, value: 0 },
            springsouk_lesson_ebd:  { id: 0, value: 0 },
        }
    },

    mutations: {
        DATE_RANGES: (state, payload) => {
            state.date_ranges = payload;
        },

        DATE_RANGE: (state, payload) => {
            state.date_range = payload;
        },

        DATE_RANGE_OPEN: (state, payload) => {
            state.date_range_open = payload;
        },

        DATE_RANGE_FILTER: (state, payload) => {
            state.date_range_filter = payload;
        },

        DATE_RANGE_LOADING: (state, payload) => {
            state.loading = payload
        },

        STORE_SETUP: (state, payload) => {
            state.store_setup = payload
        }
    },

    actions: {
        DATE_RANGES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/DATE-RANGES?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then(result => {
                    context.commit("DATE_RANGES", result.data);
                    context.commit("DATE_RANGE_LOADING", false);
                });
        },

        DATE_RANGE_FILTER: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/DATE-RANGE/${payload.filter}?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then(result => {
                    context.commit("DATE_RANGES", result.data);
                    context.commit("DATE_RANGE_LOADING", false);
                });
        },

        SAVE_DATE_RANGE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/SAVE-DATE-RANGE", {
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

        UPDATE_DATE_RANGE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .get(`/api/UPDATE-DATE-RANGE/${payload}`)
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        STORE_SETUP: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`;

            axios.get('/api/SHOP-SETUP')
                .then((result) => {
                    context.commit('STORE_SETUP', result.data)
                });
        },

        STORE_SETUP_UPDATE: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/SHOP-SETUP-UPDATE', {
                        form: payload.form
                    })
                    .then((result) => {
                        context.dispatch('STORE_SETUP')
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
};