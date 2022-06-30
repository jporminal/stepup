import Axios from "axios";

export default {
    state: {
        token: localStorage.getItem("ze-zle") || null,
        current_user: {
            thumbnail: {
                meta_value: ""
            }
        },
        loading: false
    },

    mutations: {
        TOKEN: (state, payload) => {
            state.token = payload;
        },

        CURRENT_USER: (state, payload) => {
            state.current_user = payload;
        },

        USER_LOADER: (state, payload) => {
            state.loading = payload;
        }
    },

    actions: {
        CURRENT_USER: (context, payload) => {
            Axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${context.state.token}`;

            Axios.get("/api/CURRENT-USER").then(result => {
                context.commit("CURRENT_USER", result.data);
            });
        },

        LOGIN: (context, payload) => {
            return new Promise((res, rej) => {
                Axios.post("/api/LOGIN", {
                        email: payload.email,
                        password: payload.password
                    })
                    .then(result => {
                        localStorage.setItem(
                            "ze-zle",
                            result.data.access_token
                        );
                        context.commit("TOKEN", result.data.access_token);
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        CHECK_EMAIL: (context, payload) => {
            return new Promise((res, rej) => {
                Axios.post("/api/CHECK-EMAIL", {
                        email: payload.email
                    })
                    .then(result => {
                        context.commit("USER_LOADER", false);
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        REGISTER: (context, payload) => {
            return new Promise((res, rej) => {
                Axios.post("/api/REGISTER", {
                        first_name: payload.first_name,
                        family_name: payload.family_name,
                        username: payload.username,
                        email: payload.email,
                        role: payload.role,
                        password: payload.password,
                        country: payload.country,
                        town: payload.town,
                        street: payload.street
                    })
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        DESTROY_TOKEN: (context, payload) => {
            Axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${context.state.token}`;
            return new Promise((res, rej) => {
                Axios.post("/api/LOGOUT")
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        UPDATE_PROFILE: (context, payload) => {
            Axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${context.state.token}`;
            Axios.post("/api/UPDATE-PROFILE", {
                    form: payload.form,
                    password: payload.password,
                    id: payload.id
                })
                .then(result => {
                    context.dispatch("CURRENT_USER");
                })
                .catch(err => {});
        },

        SEND_TOKEN: (context, payload) => {
            return new Promise((res, rej) => {
                Axios.post('/api/SEND-TOKEN', {
                        email: payload.email
                    })
                    .then((result) => {
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        },

        CHANGE_PASSWORD: (context, payload) => {
            return new Promise((res, rej) => {
                Axios.post('/api/CHANGE-PASSWORD', {
                        email: payload.email,
                        password: payload.password,
                        verification: payload.verification
                    })
                    .then((result) => {
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
};