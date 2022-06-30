import axios from "axios";
import User from "./Users";

export default {
    state: {
        attendance_manage: [],
        attendance_open: false,
        attended: {},
        students: {
            children: []
        },
        attendance_download: [],
        attendance_loading: false,
        loading: false
    },

    mutations: {
        ATTENDED: (state, payload) => {
            state.attended = payload;
        },

        ATTENDANCE_MANAGE: (state, payload) => {
            state.attendance_manage = payload;
        },

        ATTENDANCE_OPEN: (state, payload) => {
            state.attendance_open = payload;
        },

        ATTENDANCE_STUDENTS: (state, payload) => {
            state.students = payload;
        },
        ATTENDANCE_DOWNLOAD: (state, payload) => {
            state.attendance_download = payload
        },
        ATTENDANCE_DOWNLOAD_LOADING: (state, payload) => {
            state.attendance_loading = payload
        },
        ATTENDANCE_LOADING: (state, payload) => {
            state.loading = payload
        }
    },

    actions: {
        MANAGE_ATTENDANCE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/MANAGE-ATTENDANCE", {
                    items: payload.items
                })
                .then(result => {
                    context.commit("ATTENDANCE_MANAGE", result.data);
                    context.commit("ATTENDANCE_OPEN", true);
                })
                .catch(err => {
                    console.log(e);
                });
        },

        ATTENDANCE_STUDENTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(
                    `/api/ATTENDANCE-STUDENTS/${payload.schedule_id}/${payload.date}`
                )
                .then(result => {
                    context.commit("ATTENDANCE_STUDENTS", result.data);
                });
        },

        ATTENDANCE: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/ATTENDANCE", {
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

        ATTENDANCE_DOWNLOAD: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            axios.get(`/api/ATTENDANCE-DOWNLOAD/${payload}`)
                .then((result) => {
                    context.commit('ATTENDANCE_DOWNLOAD', result.data)
                    context.commit('ATTENDANCE_DOWNLOAD_LOADING', false)
                })
        }
    }
};