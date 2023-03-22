import axios from 'axios';

export default {
    state: {
        products: { data: [] },
        product: {},
        product_categories: [],
        product_filter: {
            filter: 0,
            page: 1,
            per_page: 12,
        },
        loading: true,
        open: false,
        adult_open: false,
        adults: [],
        adult_selected: [],
        adult_unli: false
    },

    mutations: {

        SVS_CITIES: (state, payload) => {
            state.products = payload
        },

        SVS: (state, payload) => {
            state.product = payload
        },

        SVS_ADULT_CLASSES: (state, payload) => {
            state.adults = payload
        },

        SVS_ADULT_CLASSES_SELECTED: (state, payload) => {
            state.adult_selected = payload
        },

        SVS_ADULT_CLASSES_OPEN: (state, payload) => {
            state.adult_open = payload
        },

        SVS_CITIES_ADULT_CLASSES: (state, payload) => {
            state.adult_unli = payload
        },

        SVS_FILTER: (state, payload) => {
            state.product_filter = payload
        },

        SVS_LOADING: (state, payload) => {
            state.loading = payload
        },

        SVS_CATEGORIES: (state, payload) => {
            state.product_categories = payload
        },

        SVS_OPEN: (state, payload) => {
            state.open = payload
        }
    },

    actions: {
        SVS_CITIES: (context, payload) => {
            axios.get(`/api/SVS?page=${payload.page}`, {
                    params: { per_page: payload.per_page, filter: payload.filter }
                })
                .then((result) => {
                    context.commit('SVS_LOADING', false)
                    context.commit('SVS_CITIES', result.data.products)
                    context.commit('SVS_CATEGORIES', result.data.categories)
                })
        },

        SVS_FILTER: (context, payload) => {
            axios.get(`/api/SVS-FILTER/${payload}`)
                .then((result) => {
                    // console.log(result.data)
                    context.commit('SVS_CITIES', result.data)
                })
        },

        SVS_VIEW_ITEM: (context, payload) => {
            axios.get(`/api/SVS/${payload}`)
                .then((result) => {
                    context.commit('SVS', result.data)
                    context.commit('SVS_OPEN', true)
                })

        },

        SVS_CITIES_ADULT_CLASSES: (context, payload) => {
            axios.post(`/api/SVS-ADULT-CLASSES`, {
                per_page: payload.per_page, 
                class_ids: payload.class_ids,
                is_unli: payload.is_unli
            })
                .then((result) => {
                    context.commit('SVS_ADULT_CLASSES_OPEN', true)
                    context.commit('SVS_ADULT_CLASSES', result.data)
                })

        },

        SVS_CITIES_ADULT: (context, payload) => {
            return new Promise((res, rej) => {
                axios.post('/api/SVS-ADULT', {
                    class_ids: payload.class_ids,
                    is_unli: payload.is_unli
                })
                .then((result) => {
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        }
    }
}