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
        URDANGS: (state, payload) => {
            state.products = payload
        },

        URDANG: (state, payload) => {
            state.product = payload
        },

        URDANG_FILTER: (state, payload) => {
            state.product_filter = payload
        },

        URDANG_LOADING: (state, payload) => {
            state.loading = payload
        },

        URDANG_OPEN: (state, payload) => {
            state.open = payload
        }
    },

    actions: {
        URDANGS: (context, payload) => {
            axios.get(`/api/URDANGS?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then((result) => {
                    context.commit('URDANG_LOADING', false)
                    context.commit('URDANGS', result.data)
                })
        },

        URDANG_VIEW_ITEM: (context, payload) => {
            axios.get(`/api/URDANG/${payload}`)
                .then((result) => {
                    context.commit('URDANG', result.data)
                    context.commit('URDANG_OPEN', true)
                })

        }
    }
}