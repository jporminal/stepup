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
        ARCADIAS: (state, payload) => {
            state.products = payload
        },

        ARCADIA: (state, payload) => {
            state.product = payload
        },

        ARCADIA_FILTER: (state, payload) => {
            state.product_filter = payload
        },

        ARCADIA_LOADING: (state, payload) => {
            state.loading = payload
        },

        ARCADIA_OPEN: (state, payload) => {
            state.open = payload
        }
    },

    actions: {
        ARCADIAS: (context, payload) => {
            axios.get(`/api/ARCADIAS?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('ARCADIA_LOADING', false)
                    context.commit('ARCADIAS', result.data)
                })
        },

        ARCADIA_VIEW_ITEM: (context, payload) => {
            axios.get(`/api/ARCADIA/${payload}`)
                .then((result) => {
                    context.commit('ARCADIA', result.data)
                    context.commit('ARCADIA_OPEN', true)
                })

        }
    }
}
