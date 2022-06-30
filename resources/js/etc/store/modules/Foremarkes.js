import axios from 'axios';

export default {
    state: {
        products: {
            data: []
        },
        product: {},
        product_filter: {
            page: 1,
            per_page: 12,
        },
        loading: true,
        open: false
    },

    mutations: {
        FOREMARKES: (state, payload) => {
            state.products = payload
        },

        FOREMARKE: (state, payload) => {
            state.product = payload
        },

        FOREMARKE_FILTER: (state, payload) => {
            state.product_filter = payload
        },

        FOREMARKE_LOADING: (state, payload) => {
            state.loading = payload
        },

        FOREMARKE_OPEN: (state, payload) => {
            state.open = payload
        }
    },

    actions: {
        FOREMARKES: (context, payload) => {
            axios.get(`/api/FOREMARKES?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('FOREMARKE_LOADING', false)
                    context.commit('FOREMARKES', result.data)
                })
        },

        FOREMARKE_VIEW_ITEM: (context, payload) => {
            axios.get(`/api/FOREMARKE/${payload}`)
                .then((result) => {
                    context.commit('FOREMARKE', result.data)
                    context.commit('FOREMARKE_OPEN', true)
                })

        }
    }
}
