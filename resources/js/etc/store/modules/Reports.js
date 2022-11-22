import axios from "axios";
import User from "./Users";

export default {
    state: {
        class_information: [],
        class_information_filter: {
            dates: [],
            lessons: [],
            teacher: 0,
            enrolled: 1,
            term: 0
        },
        number_of_students: [],
        number_of_students_filter: {
            lessons: [],
            teacher: 0,
            enrolled: 1,
            term: 0
        },
        payment_by_schedules: [],
        payment_by_schedule_filter: {
            dates: [],
            lessons: [],
            term: 0,
        },
        payment_by_lessons: [],
        payment_by_lesson_filter: {
            dates: [],
            lessons: [],
            term: 0
        },
        product_sales: [],
        product_sale_filter: {
            dates: [],
            products: []
        },
        product_reports: [],
        product_report_filter: {
            dates: [
                new Date().toISOString().substr(0, 10),
                new Date().toISOString().substr(0, 10)
            ],
            product_ids: []
        },
        service_reports: {
            services: [],
            locations: [],
            other_services: [],
            trials: []
        },
        other_service_reports: {
            services: [],
            locations: [],
            other_services: [],
            trials: []
        },
        teacher_reports: [],
        service_report_filter: {
            dates: [
                new Date().toISOString().substr(0, 10),
                new Date().toISOString().substr(0, 10)
            ],
            class_ids: []
        },
        other_service_report_filter: {
            dates: [
                new Date().toISOString().substr(0, 10),
                new Date().toISOString().substr(0, 10)
            ],
            class_ids: []
        },
        teacher_report_filter: {
            dates: [
                new Date().toISOString().substr(0, 10),
                new Date().toISOString().substr(0, 10)
            ],
            teacher_ids: []
        },
        location_reports: [],
        location_report_filter: {
            dates: [
                new Date().toISOString().substr(0, 10),
                new Date().toISOString().substr(0, 10)
            ]
        }
    },

    mutations: {
        CLASS_INFORMATION: (state, payload) => {
            state.class_information = payload;
        },
        CLASS_INFORMATION_FILTER: (state, payload) => {
            state.class_information_filter = payload;
        },
        NUMBER_OF_STUDENTS: (state, payload) => {
            state.number_of_students = payload;
        },
        NUMBER_OF_STUDENT_FILTER: (state, payload) => {
            state.number_of_students_filter = payload;
        },
        PAYMENT_BY_SCHEDULES: (state, payload) => {
            state.payment_by_schedules = payload;
        },
        PAYMENT_BY_SCHEDULE_FILTER: (state, payload) => {
            state.payment_by_schedule_filter = payload;
        },
        PAYMENT_BY_LESSONS: (state, payload) => {
            state.payment_by_lessons = payload;
        },
        PAYMENT_BY_LESSON_FILTER: (state, payload) => {
            state.payment_by_lesson_filter = payload;
        },
        PRODUCT_SALES: (state, payload) => {
            state.product_sales = payload;
        },
        PRODUCT_SALE_FILTER: (state, payload) => {
            state.product_sale_filter = payload;
        },
        PRODUCT_REPORTS: (state, payload) => {
            state.product_reports = payload;
        },
        PRODUCT_REPORT_FILTER: (state, payload) => {
            state.product_reports_filter = payload;
        },
        SERVICE_REPORTS: (state, payload) => {
            state.service_reports = payload;
        },
        OTHER_SERVICE_REPORTS: (state, payload) => {
            state.other_service_reports = payload;
        },
        TEACHER_REPORTS: (state, payload) => {
            state.teacher_reports = payload;
        },
        SERVICE_REPORT_FILTER: (state, payload) => {
            state.service_report_filter = payload;
        },
        OTHER_SERVICE_REPORT_FILTER: (state, payload) => {
            state.other_service_report_filter = payload;
        },
        LOCATION_REPORTS: (state, payload) => {
            state.location_reports = payload;
        },
        LOCATION_REPORT_FILTER: (state, payload) => {
            state.location_report_filter = payload;
        },
        TEACHER_REPORT_FILTER: (state, payload) => {
            state.teacher_report_filter = payload;
        },
    },

    actions: {
        CLASS_INFORMATION: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/CLASS-INFORMATION", {
                    form: payload.form
                })
                .then(result => {
                    context.commit("CLASS_INFORMATION", result.data);
                });
        },
        NUMBER_OF_STUDENTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/NUMBER-OF-STUDENTS", {
                    form: payload.form
                })
                .then(result => {
                    context.commit("NUMBER_OF_STUDENTS", result.data);
                });
        },
        PAYMENT_BY_SCHEDULES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/PAYMENT-BY-SCHEDULES", {
                    form: payload.form
                })
                .then(result => {
                    context.commit("PAYMENT_BY_SCHEDULES", result.data);
                });
        },
        PAYMENT_BY_LESSONS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;
 
            axios
                .post("/api/PAYMENT-BY-LESSONS", {
                    form: payload.form
                })
                .then(result => {
                    context.commit("PAYMENT_BY_LESSONS", result.data);
                });
        },
        PRODUCT_SALES: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/PRODUCT-SALES", {
                    form: payload.form
                })
                .then(result => {
                    context.commit("PRODUCT_SALES", result.data);
                });
        },

        PRODUCT_REPORTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/POS-PRODUCT-REPORT", {
                    dates: payload.dates,
                    product_ids: payload.product_ids
                })
                .then(result => {
                    context.commit("PRODUCT_REPORTS", result.data);
                });
        },

        SERVICE_REPORTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/POS-SERVICE-REPORT", {
                    dates: payload.dates,
                    class_ids: payload.class_ids
                })
                .then(result => {
                    context.commit("SERVICE_REPORTS", result.data);
                });
        },

        OTHER_SERVICE_REPORTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/POS-OTHER-SERVICE-REPORT", {
                    dates: payload.dates,
                    class_ids: payload.class_ids
                })
                .then(result => {
                    context.commit("OTHER_SERVICE_REPORTS", result.data);
                });
        },

        LOCATION_REPORTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/POS-LOCATION-REPORT", {
                    dates: payload.dates
                })
                .then(result => {
                    context.commit("LOCATION_REPORTS", result.data);
                });
        },
        TEACHER_REPORTS: (context, payload) => {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${User.state.token}`;

            axios
                .post("/api/POS-TEACHER-REPORT", {
                    dates: payload.dates,
                    teacher_ids: payload.teacher_ids
                })
                .then(result => {
                    context.commit("TEACHER_REPORTS", result.data);
                });
        },
    }
};
