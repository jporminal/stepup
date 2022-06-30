import axios from 'axios'
import User from './Users'

export default {
    state: {
        details: {},
        parents: {},
        parent_filter: {
            filter: null,
            page: 1,
            per_page: 10
        },
        parent_loading: false,
        parent_childs: [],
        parent_childs_open: false,
        parent_open: false,
    },

    mutations: {
        PARENTS: (state, payload) => {
            state.parents = payload
        },
        PARENT_DETAILS: (state, payload) => {
            state.details = payload
        },
        PARENT_FILTER: (state, payload) => {
            state.parent_filter = payload
        },
        PARENT_LOADING: (state, payload) => {
            state.parent_loading = payload
        },
        PARENT_CHILDS: (state, payload) => {
            state.parent_childs = payload
        },
        PARENT_CHILDS_OPEN: (state, payload) => {
            state.parent_childs_open = payload
        },
        PARENT_OPEN: (state, payload) => {
            state.parent_open = payload
        },
    },

    actions: {
        PARENTS: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            axios.get(`/api/PARENTS?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('PARENTS', result.data)
                    context.commit('PARENT_LOADING', false)
                })
        },
        PARENT_FILTER: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            axios.get(`/api/PARENTS/${payload.filter}?page=${payload.page}`, {
                    params: { per_page: payload.per_page, filter: payload.filter }
                })
                .then((result) => {
                    context.commit('PARENTS', result.data)
                    context.commit('PARENT_LOADING', false)
                })
        },

        GET_PARENT_ID: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            return new Promise((res, rej) => {
                axios.post('/api/GET-PARENT-ID', {
                        email: payload.email
                    })
                    .then((result) => {
                        context.commit('PARENT_DETAILS', result.data)
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        },

        GET_CHILD: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            axios.get(`/api/GET-CHILD/${payload}`)
                .then((result) => {
                    context.commit('PARENT_CHILDS', result.data)
                    context.commit('PARENT_CHILDS_OPEN', true)
                })
        },

        UPDATE_PARENT_DETAILS: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.post('/api/UPDATE-PARENT-DETAILS', {
                        form: payload.form
                    })
                    .then((result) => {
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
}