import axios from 'axios';
import User from './Users'

export default {
    state: {
        my_products: [],
        products: { data: [] },
        product: {},
        product_categories: [],
        product_filter: {
            filter: 0,
            page: 1,
            per_page: 12,
        },
        loading: true,
        open: false
    },

    mutations: {
        MY_PRODUCTS: (state, payload) => {
            state.my_products = payload
        },

        PRODUCTS: (state, payload) => {
            state.products = payload
        },

        PRODUCT: (state, payload) => {
            state.product = payload
        },

        PRODUCT_FILTER: (state, payload) => {
            state.product_filter = payload
        },

        PRODUCT_LOADING: (state, payload) => {
            state.loading = payload
        },

        PRODUCT_CATEGORIES: (state, payload) => {
            state.product_categories = payload
        },

        PRODUCT_OPEN: (state, payload) => {
            state.open = payload
        }
    },

    actions: {
        MY_PRODUCTS: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            axios.get('/api/MY-PRODUCT-ALL')
                .then((result) => {
                    context.commit('MY_PRODUCTS', result.data)
                })
        },

        PRODUCTS: (context, payload) => {
            axios.get(`/api/PRODUCTS?page=${payload.page}`, {
                    params: { per_page: payload.per_page, filter: payload.filter }
                })
                .then((result) => {
                    context.commit('PRODUCT_LOADING', false)
                    context.commit('PRODUCTS', result.data.products)
                    context.commit('PRODUCT_CATEGORIES', result.data.categories)
                })
        },

        PRODUCT_FILTER: (context, payload) => {
            axios.get(`/api/PRODUCT-FILTER/${payload}`)
                .then((result) => {
                    context.commit('PRODUCTS', result.data)
                })
        },

        VIEW_ITEM: (context, payload) => {
            axios.get(`/api/PRODUCT/${payload}`)
                .then((result) => {
                    context.commit('PRODUCT', result.data)
                    context.commit('PRODUCT_OPEN', true)
                })

        }
    }
}
