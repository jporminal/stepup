require("./bootstrap");

import vuetify from "./vuetify";
import store from "./store";
import router from "./router";
import accounting from "accounting-js";
import Upper from "./etc/filters";
import moment from "moment";
import { print } from './etc/other/print'
import { excel } from './etc/other/excel'
import { get_age } from './etc/other/get_age'
import VueMeta from 'vue-meta'

window.Vue = require("vue");

Vue.filter("currency", function(money) {
    return accounting.formatMoney(money, { symbol: "AED", format: "%v %s" });
});

Vue.filter("date", function(value) {
    return moment(value).format("dddd, MMMM Do YYYY");
});

Vue.filter("date_attendance", function(value) {
    return moment(value).format("MM-DD");
});

Vue.prototype.$print = print;
Vue.prototype.$excel = excel;
Vue.prototype.$age = get_age;

Vue.use(VueMeta)

Vue.component("main-home", require("./components/Skeleton.vue").default);

new Vue({
    el: "#app",
    vuetify,
    store,
    router,
    Upper,
    created() {
        this.CURRENT_USER();
    },
    methods: {
        CURRENT_USER() {
            if (store.state.Users.token) {
                store.dispatch("CURRENT_USER");
            }
        }
    }
});