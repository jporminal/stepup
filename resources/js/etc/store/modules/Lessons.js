import axios from "axios";
import User from "./Users";

export default {
    state: {
        lessons: {},
        lesson: {},
        lesson_open: false,
        lesson_filter: {
            filter: null,
            page: 1,
            per_page: 10
        },
        lesson_categories: [],
        lesson_upload_image: false,
        lesson_images: [],
        lesson_prices: [],
        lesson_price: {},
        lesson_price_open: false,
        lesson_price_item_open: false,
        lesson_parameters: [],
        lesson_parameter_open: false,
        loading: false
    },

    mutations: {
        LESSONS: (state, payload) => {
            state.lessons = payload;
        },

        LESSON: (state, payload) => {
            state.lesson = payload;
        },

        LESSON_OPEN: (state, payload) => {
            state.lesson_open = payload;
        },

        LESSON_FILTER: (state, payload) => {
            state.lesson_filter = payload;
        },

        LESSON_CATEGORIES: (state, payload) => {
            state.lesson_categories = payload;
        },

        LESSON_IMAGES: (state, payload) => {
            state.lesson_images = payload;
        },

        LESSON_UPLOAD_IMAGE: (state, payload) => {
            state.lesson_upload_image = payload;
        },

        LESSON_PRICES: (state, payload) => {
            state.lesson_prices = payload;
        },

        LESSON_PRICE: (state, payload) => {
            state.lesson_price = payload;
        },

        LESSON_PRICE_ITEM_OPEN: (state, payload) => {
            state.lesson_price_item_open = payload;
        },

        LESSON_PRICE_OPEN: (state, payload) => {
            state.lesson_price_open = payload;
        },

        LESSON_PARAMETERS: (state, payload) => {
            state.lesson_parameters = payload;
        },

        LESSON_PARAMETER_OPEN: (state, payload) => {
            state.lesson_parameter_open = payload;
        },

        LESSON_LOADING: (state, payload) => {
            state.loading = payload
        }
    },

    actions: {
        LESSONS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/LESSONS?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then(result => {
                    context.commit("LESSONS", result.data);
                    context.commit('LESSON_LOADING', false)
                });
        },

        LESSON: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .get(`/api/LESSON/${payload}`)
                    .then(result => {
                        context.commit("LESSON", result.data);
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        LESSON_FILTER: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios
                .get(`/api/LESSONS/${payload.filter}?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then(result => {
                    context.commit("LESSONS", result.data);
                    context.commit('LESSON_LOADING', false)
                });
        },

        LESSON_CATEGORIES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios.get("/api/LESSON-CATEGORIES").then(result => {
                context.commit("LESSON_CATEGORIES", result.data);
            });
        },

        LESSON_SAVE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/LESSON-SAVE", {
                        form: payload.form
                    })
                    .then(result => {
                        res(result);
                        context.commit('LESSON_LOADING', false)
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        LESSON_IMAGES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/LESSON-IMAGES/${payload}`)
                .then(result => {
                    context.commit("LESSON_IMAGES", result.data);
                })
                .catch(err => {});
        },

        DELETE_LESSON_IMAGES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/DELETE-LESSON-IMAGES", {
                        id: payload.id
                    })
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        LESSON_PRICES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/LESSON-PRICES/${payload}`)
                .then(result => {
                    context.commit("LESSON_PRICES", result.data);
                })
                .catch(err => {});
        },

        SAVE_LESSON_PRICE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/SAVE-LESSON-PRICE", {
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

        LESSON_PARAMETERS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/LESSON-PARAMETERS/${payload}`)
                .then(result => {
                    context.commit("LESSON_PARAMETERS", result.data);
                })
                .catch(err => {});
        },

        SAVE_LESSON_PARAMETER: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/SAVE-LESSON-PARAMETER", {
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

        DELETE_LESSON_PARAMETER: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/DELETE-LESSON-PARAMETER", {
                        id: payload.id
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