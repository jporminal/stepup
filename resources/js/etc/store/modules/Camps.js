import axios from 'axios';

export default {
    state: {
        products: [],
        product: {},
        product_filter: {
            page: 1,
            per_page: 12,
        },
        loading: true,
        open: false
    },

    mutations: {
        CAMPS: (state, payload) => {
            state.products = payload
        },

        CAMP: (state, payload) => {
            state.product = payload
        },

        CAMP_FILTER: (state, payload) => {
            state.product_filter = payload
        },

        CAMP_LOADING: (state, payload) => {
            state.loading = payload
        },

        CAMP_OPEN: (state, payload) => {
            state.open = payload
        }
    },

    actions: {
        CAMPS: (context, payload) => {
            axios.get(`/api/CAMPS?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('CAMP_LOADING', false)
                    context.commit('CAMPS', result.data)
                })
        },

        CAMP_VIEW_ITEM: (context, payload) => {
            axios.get(`/api/CAMP/${payload}`)
                .then((result) => {
                    context.commit('CAMP', result.data)
                    context.commit('CAMP_OPEN', true)
                })

        }
    }
}