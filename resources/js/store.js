import Vue from "vue";
import Vuex from "vuex";
import state from "./etc/store/state";
import mutations from "./etc/store/mutations";
import actions from "./etc/store/actions";
import Snackbars from "./etc/store/modules/Snackbars";
import Users from "./etc/store/modules/Users";
import Enrollments from "./etc/store/modules/Enrollment";
import Products from "./etc/store/modules/Products";
import Motor_city from "./etc/store/modules/Motor_city";
import Camps from "./etc/store/modules/Camps";
import Urdangs from "./etc/store/modules/Urdangs";
import Foremarkes from "./etc/store/modules/Foremarkes";
import Carts from "./etc/store/modules/Carts";
import Orders from "./etc/store/modules/Orders";
import Schedules from "./etc/store/modules/Schedules";
import Venues from "./etc/store/modules/Venue";
import Students from "./etc/store/modules/Students";
import Parents from "./etc/store/modules/Mother";
import Staffs from "./etc/store/modules/Staffs";
import Attendance from "./etc/store/modules/Attendance";
import Lessons from "./etc/store/modules/Lessons";
import Date_ranges from "./etc/store/modules/Date_ranges";
import Reports from "./etc/store/modules/Reports";
import Week_days from "./etc/store/modules/Week_days";
import Emails from "./etc/store/modules/Email";
import winter from "./etc/store/modules/Winter";
import Receipts from "./etc/store/modules/Receipt";
import Xero from "./etc/store/modules/Xero";
import Akoya from "./etc/store/modules/Akoya";
import Arcadia from "./etc/store/modules/Arcadia";
import Svs from "./etc/store/modules/Svs";

Vue.use(Vuex);

const opts = {
    modules: {
        Akoya,
        Arcadia,
        Snackbars,
        Users,
        Enrollments,
        Products,
        Motor_city,
        Camps,
        Urdangs,
        Foremarkes,
        Carts,
        Orders,
        Schedules,
        Venues,
        Students,
        Parents,
        Staffs,
        Attendance,
        Lessons,
        Date_ranges,
        Reports,
        Week_days,
        Emails,
        winter,
        Receipts,
        Xero,
        Svs
    },

    state,
    mutations,
    actions
};

export default new Vuex.Store(opts);