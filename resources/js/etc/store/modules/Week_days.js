import axios from 'axios'
import User from './Users'

export default {
    state: {
        week_days: [],
        week_day: {},
        week_day_open: false
    },

    mutations: {
        WEEK_DAYS: (state, payload) => {
            state.week_days = payload
        },
        WEEK_DAY: (state, payload) => {
            state.week_day = payload
        },
        WEEK_DAY_OPEN: (state, payload) => {
            state.week_day_open = payload
        }
    },

    actions: {
        WEEK_DAYS: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            axios.get('/api/WEEK-DAYS')
                .then((result) => {
                    context.commit('WEEK_DAYS', result.data)
                })
        },

        WEEK_DAY_SAVE: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.post('/api/SAVE-WEEK-DAYS', {
                        form: payload.form
                    })
                    .then((result) => {
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
}