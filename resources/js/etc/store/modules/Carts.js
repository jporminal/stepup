import axios from "axios";

export default {
    state: {
        carts: JSON.parse(localStorage.getItem("traesdhes")) || [],
        process: false,
        sua_terms: false,
        terms_open: false,
        enrollment_form: false,
        camps: false,
        parent: JSON.parse(localStorage.getItem("parent")) || {},
        child: JSON.parse(localStorage.getItem("children")) || {},
        valid: false,
        valid_details: false,
        sua_term: false,
        sua_terms_open: false,
        billing: JSON.parse(localStorage.getItem("billing")) || {}
    },

    mutations: {
        CARTS: (state, payload) => {
            state.carts.push(payload);
        },

        CART_APPEND: (state, payload) => {
            state.carts = payload;
        },

        CART_PROCESS: (state, payload) => {
            state.process = payload;
        },

        SUA_TEMRS: (state, payload) => {
            state.sua_terms = payload;
        },

        TERMS_OPEN: (state, payload) => {
            state.terms_open = payload;
        },

        CART_ENROLLMENT_FORM: (state, payload) => {
            state.enrollment_form = payload;
        },

        CART_CAMP_FORM: (state, payload) => {
            state.camps = payload;
        },

        PARENT: (state, payload) => {
            state.parent = payload;
        },

        CHILD: (state, payload) => {
            state.child = payload;
        },

        CHECKOUT_TERMS: (state, payload) => {
            state.sua_term = payload;
        },

        CHECKOUT_TERMS_OPEN: (state, payload) => {
            state.sua_terms_open = payload;
        },

        CHECKOUT_BILLING: (state, payload) => {
            state.billing = payload;
        }
    },

    actions: {
        FILTER_CART_PARENT_EMAIL: (context, payload) => {
            return new Promise((res, rej) => {
                axios
                    .post(`/api/FILTER-CART-EMAIL`, {
                        email: payload.email
                    })
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        CHECKOUT: (context, payload) => {
            return new Promise((res, rej) => {
                axios
                    .post("/api/CHECKOUT", {
                        customer: payload.customer,
                        products: payload.products,
                        total: payload.total
                    })
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        UPDATE_CHECKOUT: (context, payload) => {
            return new Promise((res, rej) => {
                axios
                    .post("/api/UPDATE-CHECKOUT", {
                        last_id: payload.last_id,
                        total: payload.total,
                        cart_id: payload.cart_id,
                        customer: payload.customer,
                        products: payload.products
                    })
                    .then(result => {
                        res(result.data);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        },

        CANCELLED_TRANSACTION: (context, payload) => {
            axios.get(`/api/CANCELLED-TRANSACTION/${payload}`);
        },

        CART_CHECK_QUANTITY: (context, payload) => {
            return new Promise((res, rej) => {
                axios.post('/api/CART-CHECK-QUANTITY', {
                        form: payload
                    })
                    .then((result) => {
                        res(result)
                    }).catch((err) => {
                        rej(err)
                    });
            })
        }
    }
};