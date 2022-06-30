import axios from "axios";
import User from "./Users";
export default {
    state: {
        steps: 1,
        terms_condition: false,
        terms_condition_open: false,
        covid: false,
        covid_open: false,
        enrollment: {},
        parent: {},
        paginate: {
            page: 1,
            per_page: 10
        },
        enrollment_child: {},
        enrollment_child_edit: false,
        enrollment_child_new: false,
        enrollment_steps: 1,
        get_enrollment: {},
        get_enrollment_open: false,
        schedule_enrollment_filter: {
            page: 1,
            per_page: 10
        },
        enrollment_schedule: {},
        enrollment_schedule_open: false,
        enrollment_schedule_filter: {
            filter: null,
            page: 1,
            per_page: 10
        },
        my_enrollment: [],
        loading: false
    },

    mutations: {
        ENROLLMENT: (state, payload) => {
            state.enrollment = payload;
        },
        MY_ENROLLMENT: (state, payload) => {
            state.my_enrollment = payload;
        },
        TERMS_CONDITIONS: (state, payload) => {
            state.terms_condition = payload;
        },
        TERMS_CONDITIONS_OPEN: (state, payload) => {
            state.terms_condition_open = payload;
        },
        COVID: (state, payload) => {
            state.covid = payload;
        },
        COVID_OPEN: (state, payload) => {
            state.covid_open = payload;
        },
        STEPS: (state, payload) => {
            state.steps = payload;
        },
        PARENT: (state, payload) => {
            state.parent = payload;
        },
        ENROLLMENT_PAGINATE: (state, payload) => {
            state.paginate = payload;
        },

        ENROLLMENT_CHILD: (state, payload) => {
            state.enrollment_child = payload;
        },

        ENROLLMENT_CHILD_EDIT: (state, payload) => {
            state.enrollment_child_edit = payload;
        },

        ENROLLMENT_CHILD_NEW: (state, payload) => {
            state.enrollment_child_new = payload;
        },

        ENROLLMENT_STEPS: (state, payload) => {
            state.enrollment_steps = payload;
        },

        GET_ENROLLMENT: (state, payload) => {
            state.get_enrollment = payload;
        },

        GET_ENROLLMENT_OPEN: (state, payload) => {
            state.get_enrollment_open = payload;
        },

        SCHEDULE_ENROLLMENT_FILTER: (state, payload) => {
            state.schedule_enrollment_filter = payload;
        },

        ENROLLMENT_SCHEDULE: (state, payload) => {
            state.enrollment_schedule = payload;
        },

        ENROLLMENT_SCHEDULE_OPEN: (state, payload) => {
            state.enrollment_schedule_open = payload;
        },

        ENROLLMENT_SCHEDULE_FILTER: (state, payload) => {
            state.enrollment_schedule_filter = payload;
        },

        ENROLLMENT_LOADER: (state, payload) => {
            state.loading = payload
        }
    },

    actions: {
        ENROLLMENT: (context, payload) => {
            return new Promise((res, rej) => {
                axios
                    .post("/api/ENROLLMENT", {
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

        PARENT: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios
                .get(`/api/PARENT?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then(result => {
                    context.commit("PARENT", result.data);
                });
        },

        ENROLLMENT_CHILD: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            return new Promise((res, rej) => {
                axios
                    .get(`/api/CHILDREN/${payload}`)
                    .then(result => {
                        context.commit("ENROLLMENT_CHILD", result.data);
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        ENROLLMENT_UPDATE_CHILD: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            return new Promise((res, rej) => {
                axios
                    .post("/api/UPDATE-CHILD", {
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

        ENROLLMENT_SAVE_CHILD: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            return new Promise((res, rej) => {
                axios
                    .post("/api/SAVE-CHILD", {
                        form: payload.form
                    })
                    .then(result => {
                        context.dispatch("PARENT", context.state.paginate);
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        GET_ENROLLMENT: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios.get(`/api/GET-ENROLLMENT/${payload}`).then(result => {
                context.commit("GET_ENROLLMENT", result.data);
                context.commit("GET_ENROLLMENT_OPEN", true);
            });
        },

        ENROLLMENT_SCHEDULE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios.get(`/api/ENROLLMENT-SCHEDULE?page=${payload.page}`, {
                    params: {
                        per_page: payload.per_page
                    }
                })
                .then((result) => {
                    context.commit('ENROLLMENT_SCHEDULE', result.data)
                    context.commit('ATTENDANCE_LOADING', false)
                    context.commit('ENROLLMENT_LOADER', false)
                })
        },

        ENROLLMENT_SCHEDULE_FILTER: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios.get(`/api/ENROLLMENT-SCHEDULES/${payload.filter}?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('ENROLLMENT_SCHEDULE', result.data)
                    context.commit('ATTENDANCE_LOADING', false)
                    context.commit('ENROLLMENT_LOADER', false)
                })
        },

        ENROLL_STUDENT_BY_ID: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            return new Promise((res, rej) => {
                axios.post('/api/ENROLL-STUDENT-BY-ID', {
                        form: payload.form
                    })
                    .then((result) => {
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        },

        REMOVE_STUDENT_LESSON: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.post('/api/REMOVE-STUDENT-LESSON', {
                        form: payload.item
                    })
                    .then((result) => {
                        context.dispatch('GET_ENROLLMENT', payload.item.cid)
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
};