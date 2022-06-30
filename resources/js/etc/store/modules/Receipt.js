import axios from "axios";
import User from "./Users";

export default {
    state: {
        receipts: [],
        receipt: {},
        receipt_loader: false,
        receipt_filter: {
            filter: null,
            page: 1,
            per_page: 25
        },
        receipt_update_status_open: false,
        receipt_open_viewer: false
    },

    mutations: {
        RECEIPTS: (state, payload) => {
            state.receipts = payload;
        },
        RECEIPT_ITEMS: (state, payload) => {
            state.receipt = payload;
        },
        RECEIPT_LOADER: (state, payload) => {
            state.receipt_loader = payload;
        },
        RECEIPT_FILTER: (state, payload) => {
            state.receipt_filter = payload;
        },
        RECEIPT_UPDATE_STATUS_OPEN: (state, payload) => {
            state.receipt_update_status_open = payload;
        },
        RECEIPT_OPEN_VIEWER: (state, payload) => {
            state.receipt_open_viewer = payload;
        }
    },

    actions: {
        RECEIPTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/RECEIPTS?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then(result => {
                    context.commit("RECEIPTS", result.data);
                    context.commit("RECEIPT_LOADER", false);
                })
                .catch(err => {});
        },

        RECEIPT_FILTER: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .get(`/api/RECEIPTS/${payload.filter}?page=${payload.page}`, {
                    params: { per_page: payload.per_page }
                })
                .then(result => {
                    context.commit("RECEIPTS", result.data);
                    context.commit("RECEIPT_LOADER", false);
                })
                .catch(err => {});
        },

        UPDATE_RECEIPT_STATUS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            return new Promise((res, rej) => {
                axios
                    .post("/api/UPDATE-RECEIPT-STATUS", {
                        receipt: payload.receipt
                    })
                    .then(result => {
                        res(result);
                    })
                    .catch(err => {
                        rej(err);
                    });
            });
        }
    }
};
