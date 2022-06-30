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
        AKOYAS: (state, payload) => {
            state.products = payload
        },

        AKOYA: (state, payload) => {
            state.product = payload
        },

        AKOYA_FILTER: (state, payload) => {
            state.product_filter = payload
        },

        AKOYA_LOADING: (state, payload) => {
            state.loading = payload
        },

        AKOYA_OPEN: (state, payload) => {
            state.open = payload
        }
    },

    actions: {
        AKOYAS: (context, payload) => {
            axios.get(`/api/AKOYAS?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('AKOYA_LOADING', false)
                    context.commit('AKOYAS', result.data)
                })
        },

        AKOYA_VIEW_ITEM: (context, payload) => {
            axios.get(`/api/AKOYA/${payload}`)
                .then((result) => {
                    context.commit('AKOYA', result.data)
                    context.commit('AKOYA_OPEN', true)
                })

        }
    }
}
