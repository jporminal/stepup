import axios from "axios";

export default {
    state: {
        winter_camps: [],
        winter_multi_skill_prices: [],
        winter_multi_skill_price: {
            service_price: 0,
            prices: 0
        },
        winter_multi_skill_filter: {
            service_id: {
                id: 0,
                product: ""
            },
            prices: {
                id: 0,
                serviceName: ""
            }
        },

        winter_workshop_prices: {},
        winter_workshop_price: {
            service_price: 0,
            prices: 0
        },
        winter_workshop_filter: {
            stat: 'Daily',
            service_id: {
                id: 0,
                product: ""
            },
            selected: []
        },
        winter_workshop_selected: []

    },
    mutations: {
        WINTER_CAMPS: (state, payload) => {
            state.winter_camps = payload;
        },
        WINTER_MULTI_SKILL_PRICES: (state, payload) => {
            state.winter_multi_skill_prices = payload;
        },
        WINTER_MULTI_SKILL_PRICE: (state, payload) => {
            state.winter_multi_skill_price = payload;
        },
        WINTER_MULTI_SKILL_FILTER: (state, payload) => {
            state.winter_multi_skill_filter = payload;
        },

        WINTER_WORKSHOP_PRICES: (state, payload) => {
            state.winter_workshop_prices = payload
        },
        WINTER_WORKSHOP_PRICE: (state, payload) => {
            state.winter_workshop_price = payload;
        },
        WINTER_WORKSHOP_FILTER: (state, payload) => {
            state.winter_workshop_filter = payload;
        },
        WINTER_WORKSHOP_SELECTED: (state, payload) => {
            state.winter_workshop_selected = payload
        }
    },
    actions: {
        WINTER_CAMPS: (context, payload) => {
            axios
                .get("/api/WINTER-CAMPS", {
                    params: {
                        class_ids: payload.class_ids
                    }
                })
                .then(result => {
                    context.commit("WINTER_CAMPS", result.data);
                });
        },

        WINTER_MULTI_SKILL_FILTER: (context, payload) => {
            axios.get(`/api/WINTER-MULTI-SKILLS/${payload.id}`).then(result => {
                context.commit("WINTER_MULTI_SKILL_PRICES", result.data);
            });
        },

        WINTER_MULTI_SKILL_PRICE: (context, payload) => {
            axios
                .get(
                    `/api/WINTER-MULTI-SKILLS-OPTION/${payload.service_id.id}/${
                        payload.prices.id
                    }`
                )
                .then(result => {
                    context.commit("WINTER_MULTI_SKILL_PRICE", result.data);
                });
        },
 
        WINTER_WORKSHOP_FILTER: (context, payload) => {
            axios.get(`/api/WINTER-WORKSHOPS/${payload.service_id.id}`, {
                params: { stat: payload.stat }
            }).then((result) => {
                context.commit('WINTER_WORKSHOP_PRICES', result.data)
            })
        },

        WINTER_WORKSHOP_SELECTED: (context, payload) => {
            return new Promise((res, rej) => {
                axios.post('/api/MULTI-WORKSHOP', {
                        ids: payload.selected
                    })
                    .then((result) => {
                        context.commit('WINTER_WORKSHOP_SELECTED', result.data)
                        res(result)
                    })
                    .catch((err) => {
                        rej(err)
                    })
            })
        },

    }
};