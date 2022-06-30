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

        MOTOR_CITIES: (state, payload) => {
            state.products = payload
        },

        MOTOR_CITY: (state, payload) => {
            state.product = payload
        },

        MOTOR_CITY_ADULT_CLASSES: (state, payload) => {
            state.adults = payload
        },

        MOTOR_CITY_ADULT_CLASSES_SELECTED: (state, payload) => {
            state.adult_selected = payload
        },

        MOTOR_CITY_ADULT_CLASSES_OPEN: (state, payload) => {
            state.adult_open = payload
        },

        MOTOR_CITIES_ADULT_CLASSES: (state, payload) => {
            state.adult_unli = payload
        },

        MOTOR_CITY_FILTER: (state, payload) => {
            state.product_filter = payload
        },

        MOTOR_CITY_LOADING: (state, payload) => {
            state.loading = payload
        },

        MOTOR_CITY_CATEGORIES: (state, payload) => {
            state.product_categories = payload
        },

        MOTOR_CITY_OPEN: (state, payload) => {
            state.open = payload
        }
    },

    actions: {
        MOTOR_CITIES: (context, payload) => {
            axios.get(`/api/MOTOR-CITY?page=${payload.page}`, {
                    params: { per_page: payload.per_page, filter: payload.filter }
                })
                .then((result) => {
                    context.commit('MOTOR_CITY_LOADING', false)
                    context.commit('MOTOR_CITIES', result.data.products)
                    context.commit('MOTOR_CITY_CATEGORIES', result.data.categories)
                })
        },

        MOTOR_CITY_FILTER: (context, payload) => {
            axios.get(`/api/MOTOR-CITY-FILTER/${payload}`)
                .then((result) => {
                    // console.log(result.data)
                    context.commit('MOTOR_CITIES', result.data)
                })
        },

        MOTOR_CITY_VIEW_ITEM: (context, payload) => {
            axios.get(`/api/MOTOR-CITY/${payload}`)
                .then((result) => {
                    context.commit('MOTOR_CITY', result.data)
                    context.commit('MOTOR_CITY_OPEN', true)
                })

        },

        MOTOR_CITIES_ADULT_CLASSES: (context, payload) => {
            axios.post(`/api/MOTOR-CITY-ADULT-CLASSES`, {
                per_page: payload.per_page, 
                class_ids: payload.class_ids,
                is_unli: payload.is_unli
            })
                .then((result) => {
                    context.commit('MOTOR_CITY_ADULT_CLASSES_OPEN', true)
                    context.commit('MOTOR_CITY_ADULT_CLASSES', result.data)
                })

        },

        MOTOR_CITIES_ADULT: (context, payload) => {
            return new Promise((res, rej) => {
                axios.post('/api/MOTOR-CITY-ADULT', {
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