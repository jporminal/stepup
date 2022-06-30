import axios from 'axios'
import User from './Users'

export default {
    state: {
        xero_code: localStorage.getItem("xero-code") || null,
        xero_scope: localStorage.getItem("xero-scope") || null,
        xero_session_state: localStorage.getItem("xero-session_state") || null,
        xero_state: localStorage.getItem("xero-state") || null,
        xero_identity: null,
        xero_tenants: null,
        xero_token: null
    },

    mutations: {
        XERO_CODE: (state, payload) => {
            state.xero_code = payload
        },

        XERO_SCOPE: (state, payload) => {
            state.xero_scope = payload
        },

        XERO_SESSION_STATE: (state, payload) => {
            state.xero_session_state = payload
        },

        XERO_STATE: (state, payload) => {
            state.xero_state = payload
        },

        XERO_IDENTITY: (state, payload) => {
            state.xero_identity = payload
        },

        XERO_TENANTS: (state, payload) => {
            state.xero_tenants = payload
        },

        XERO_TOKEN: (state, payload) => {
            state.xero_token = payload
        }
    },

    actions: {
        XERO_LOGIN: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.get(`/api/XERO-LOGIN`)
                    .then((result) => {
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        },

        XERO_TOKEN: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.get(`/api/XERO-REQUEST-TOKEN/${payload.xero_code}/${payload.xero_state}`)
                    .then((result) => {
                        context.commit('XERO_TOKEN', result.data.token)
                        context.commit('XERO_IDENTITY', result.data.owner)
                        context.commit('XERO_TENANTS', result.data.tenant[0].tenantId)
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        },

        XERO_REF_TOKEN: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.post('/api/XERO-REFRESH-TOKEN', {
                        token: payload.token
                    })
                    .then((result) => {
                        context.commit('XERO_TOKEN', result.data)
                        res(result)
                    })
                    .catch((err) => {
                        rej(err)
                    })
            })
        },

        XERO_INVOICE: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.post('/api/XERO-LOAD-INVOICES', {
                        token: payload.token,
                        tenant_id: payload.tenant_id
                    })
                    .then((result) => {
                        context.commit('XERO_TOKEN', result.data.token)
                        res(result)
                    })
                    .catch((err) => {
                        rej(err)
                    })
            })
        },

        IMPORT_TO_XERO: (context, payload) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${User.state.token}`

            return new Promise((res, rej) => {
                axios.post('/api/XERO-IMPORT', {
                        token: payload.token,
                        tenant_id: payload.tenant_id,
                        xero: payload.xero
                    })
                    .then((result) => {
                        console.log(result)
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
}