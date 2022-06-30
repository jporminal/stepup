import axios from "axios";
import User from "./Users";

export default {
    state: {
        students: [],
        student: {},
        student_filter: {
            filter: null,
            page: 1,
            per_page: 10
        },
        loading: false
    },

    mutations: {
        STUDENTS: (state, payload) => {
            state.students = payload;
        },
        STUDENT: (state, payload) => {
            state.student = payload;
        },
        STUDENT_FILTER: (state, payload) => {
            state.student_filter = payload;
        },
        STUDENT_LOADING: (state, payload) => {
            state.loading = payload;
        }
    },

    actions: {
        STUDENTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios
                .get(`/api/STUDENTS?page=${payload.page}`, {
                    params: {
                        per_page: payload.per_page,
                        filter: payload.filter
                    }
                })
                .then(result => {
                    context.commit("STUDENT_LOADING", false);
                    context.commit("STUDENTS", result.data);
                });
        },
        STUDENT_FILTER: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            axios
                .get(`/api/STUDENTS/${payload.filter}?page=${payload.page}`, {
                    params: {
                        per_page: payload.per_page
                    }
                })
                .then(result => {
                    context.commit("STUDENT_LOADING", false);
                    context.commit("STUDENTS", result.data);
                });
        },

        GET_STUDENT_ID: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
            return new Promise((res, rej) => {
                axios
                    .post("/api/GET-STUDENT-ID", {
                        firstname: payload.firstname,
                        lastname: payload.lastname
                    })
                    .then(result => {
                        context.commit('STUDENT', result.data)
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        }
    }
};