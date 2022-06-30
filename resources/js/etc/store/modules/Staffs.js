import axios from 'axios'
import User from './Users'

export default {
    state: {
        staffs: {},
        staff: {},
        staff_open: false,
        staff_filter: {
            filter: null,
            page: 1,
            per_page: 10
        },
        loading: false
    },

    mutations: {
        STAFFS: (state, payload) => {
            state.staffs = payload
        },
        STAFF: (state, payload) => {
            state.staff = payload
        },
        STAFF_OPEN: (state, payload) => {
            state.staff_open = payload
        },
        STAFF_LOADING: (state, payload) => {
            state.loading = payload
        },
        STAFF_FILTER: (state, payload) => {
            state.staff_filter = payload
        }
    },

    actions: {
        STAFFS: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            axios.get(`/api/STAFFS?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('STAFF_LOADING', false)
                    context.commit('STAFFS', result.data)
                })
        },
        STAFF: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            axios.get(`/api/STAFF/${payload}`)
                .then((result) => {
                    context.commit('STAFF_OPEN', true)
                    context.commit('STAFF', result.data)
                })
        },
        STAFF_FILTER: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            axios.get(`/api/STAFFS/${payload.filter}?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('STAFF_LOADING', false)
                    context.commit('STAFFS', result.data)
                })
        },

        STAFF_SAVE: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            return new Promise((res, rej) => {
                axios.post('/api/STAFFS', {
                        form: payload.form
                    })
                    .then((result) => {
                        context.dispatch('STAFFS', context.state.staff_filter)
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
}