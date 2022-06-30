import axios from 'axios'
import User from './Users'

export default {
    state: {
        orders: [],
        paginate: {
            page: 1,
            per_page: 10
        },
        receipt: {},
        receipt_open: false,
        order_loading: false,
        // is_credit: JSON.parse(localStorage.getItem("is_credit")) || false
    },

    mutations: {
        ORDERS: (state, payload) => {
            state.orders = payload
        },

        ORDER_PAGINATE: (state, payload) => {
            state.paginate = payload
        },

        RECEIPT: (state, payload) => {
            state.receipt = payload
        },

        RECEIPT_OPEN: (state, payload) => {
            state.receipt_open = payload
        },

        RECEIPT_LOADING: (state, payload) => {
            state.order_loading = payload
        },
    },

    actions: {
        ORDERS: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            axios.get(`/api/ORDERS?page=${payload.page}`, {
                    params: {
                        'per_page': payload.per_page
                    }
                })
                .then((result) => {
                    context.commit('ORDERS', result.data)
                    context.commit('RECEIPT_LOADING', false)
                }).catch((err) => {

                });
        },
        MY_ORDERS: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            axios.get(`/api/MY-ORDERS?page=${payload.page}`, {
                    params: {
                        'per_page': payload.per_page
                    }
                })
                .then((result) => {
                    context.commit('ORDERS', result.data)
                    context.commit('RECEIPT_LOADING', false)
                }).catch((err) => {

                });
        },

        RECEIPT: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`
            return new Promise((res, rej) => {
                axios.get(`/api/VIEW-ORDER/${payload}`)
                    .then((result) => {
                        context.commit('RECEIPT', result.data)
                        context.commit('RECEIPT_OPEN', true)
                        context.commit('RECEIPT_LOADING', false)
                        res(result)
                    })
                    .catch((err) => {
                        rej(err)
                    })
            })
        }
    }
}
