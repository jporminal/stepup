const Home = () =>
    import ("../../components/Views/Home.vue");
const Team = () =>
    import ("../../components/Views/Team.vue");
const Schedule = () =>
    import ("../../components/Views/Schedule.vue");
const Camp = () =>
    import ("../../components/Views/Camp.vue");
const Lesson = () =>
    import ("../../components/Views/Lesson.vue");
const Competition = () =>
    import ("../../components/Views/Competition.vue");
const Testimonial = () =>
    import ("../../components/Views/Testimonial.vue");
const Faq = () =>
    import ("../../components/Views/Faq.vue");
const Kinder = () =>
    import ("../../components/Views/Kinder.vue");
const Determination = () =>
    import ("../../components/Views/Determination.vue");
const News = () =>
    import ("../../components/Views/News.vue");
const Partners = () =>
    import ("../../components/Views/Partners.vue");
const Logout = () =>
    import ("../../components/Views/Logout.vue");
const EnrollmentForm = () =>
    import ("../../components/Views/EnrollmentForm.vue");
const TrialForm = () =>
    import ("../../components/Views/TrialForm.vue");
const Reset_password = () =>
    import ("../../components/Views/Reset_password.vue");
const Login = () =>
    import ("../../components/Views/Login.vue");

const Presenstation = () => import("../../components/Views/presentation.vue")

// shops
const Shop_products = () =>
    import ("../../components/Views/Shop_products.vue");
const Shop_motor_city = () =>
    import ("../../components/Views/Shop_motor_city.vue");
const Shop_urdangs = () =>
    import ("../../components/Views/Shop_urdang.vue");
const Shop_adult = () =>
    import ("../../components/Views/Shop_adult.vue");
const Shop_foremarkes = () =>
    import ("../../components/Views/Shop_foremarke.vue");
const Shop_akoyas = () =>
    import ("../../components/Views/Shop_akoya.vue");
const Shop_arcadia = () =>
    import ("../../components/Views/Shop_arcadia.vue");
    
const Shop_camps = () =>
    import ("../../components/Views/Shop_camps.vue");
    
const spring_camps_multi_skills = () =>
    import ("../../components/Components/Shops/Camps/Spring/Multi_skills.vue");
const spring_performing_arts_skills = () =>
    import ("../../components/Components/Shops/Camps/Spring/Performing_arts.vue");
const spring_sports_skills = () =>
    import ("../../components/Components/Shops/Camps/Spring/Sports.vue");

const summer_camps_multi_skills = () =>
    import ("../../components/Components/Shops/Camps/Summer/Summer_multi_skills.vue");
const summer_performing_arts_skills = () =>
    import ("../../components/Components/Shops/Camps/Summer/Summer_performing_arts.vue");
const summer_sports_skills = () =>
    import ("../../components/Components/Shops/Camps/Summer/Sport_summer_camp.vue");

// const Winter_camps_multi_skills = () =>
//     import ("../../components/Components/Shops/Camps/Winter/Winter_multi_skills.vue");
// const Winter_camps_performing_arts = () =>
//     import ("../../components/Components/Shops/Camps/Winter/Winter_performing_Arts.vue");
// const Sport_winter_camp = () =>
//     import ("../../components/Components/Shops/Camps/Winter/Sport_winter_camp.vue");
    
// const Midterm_Camp = () =>
//     import (
//         "../../components/Components/Shops/Camps/Midterm/Halloween_2021.vue"
//     );

const Sports_day = () =>
    import (
        "../../components/Components/Shops/Camps/Midterm/Family_fest.vue"
    );

const Cart = () =>
    import ("../../components/Views/Carts.vue");
const Checkout = () =>
    import ("../../components/Views/Checkout.vue");
const Order_completed = () =>
    import ("../../components/Components/Checkout/Success.vue");
const Order_cancelled = () =>
    import ("../../components/Components/Checkout/Cancelled.vue");

// authenticated
const Authenticated = () =>
    import ("../../components/Views/Authenticated.vue");
const Authenticated_my_account = () =>
    import ("../../components/Components/Authtenticated/Account.vue");
const Authenticated_enrollment = () =>
    import ("../../components/Components/Authtenticated/Enrollment");
const Authenticated_my_orders = () =>
    import ("../../components/Components/Authtenticated/Orders.vue");

// SAMS
const Authenticated_sams = () =>
    import ("../../components/Views/Sams.vue");
const Authenticated_schedule = () =>
    import ("../../components/Components/Authtenticated/Schedules.vue");
const Authenticated_students = () =>
    import ("../../components/Components/Authtenticated/Students.vue");
const Authenticated_parents = () =>
    import ("../../components/Components/Authtenticated/Parents.vue");
const Authenticated_staffs = () =>
    import ("../../components/Components/Authtenticated/Staffs.vue");
const Authenticated_attendance = () =>
    import ("../../components/Components/Authtenticated/Attendance.vue");
const Authenticated_attendance_download = () =>
    import (
        "../../components/Components/Authtenticated/Attendance_download.vue"
    );
const Authenticated_email = () =>
    import ("../../components/Components/Authtenticated/Emails.vue");
const Authenticated_receipts = () =>
    import ("../../components/Components/Authtenticated/Receipts.vue");
// settings
const Authenticated_settings_schedules = () =>
    import ("../../components/Components/Authtenticated/Settings/Schedules.vue");
const Authenticated_settings_lessons = () =>
    import ("../../components/Components/Authtenticated/Settings/Lessons.vue");
const Authenticated_settings_locations = () =>
    import ("../../components/Components/Authtenticated/Settings/Location.vue");
const Authenticated_settings_date_ranges = () =>
    import (
        "../../components/Components/Authtenticated/Settings/Date_ranges.vue"
    );
const Authenticated_settings_Store_setup = () =>
    import ("../../components/Components/Authtenticated/Settings/Store_setup.vue");
const Authenticated_settings_week_days = () =>
    import ("../../components/Components/Authtenticated/Settings/Week_days.vue");
const Authenticated_settings_xero = () =>
    import ("../../components/Components/Authtenticated/Settings/Xero.vue");
// reports
const Authenticated_reports_class_information = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Class_information.vue"
    );
const Authenticated_reports_number_of_students = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Number_of_students.vue"
    );
const Authenticated_reports_payment_by_schedules = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Payment_by_schedules.vue"
    );
const Authenticated_reports_payment_by_lesson = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Payment_by_lesson.vue"
    );
const Authenticated_reports_product_sales = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Product_sales.vue"
    );
const Authenticated_product_reports = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Product_reports.vue"
    );
const Authenticated_service_reports = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Service_reports.vue"
    );
const Authenticated_other_service_reports = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Other_service_reports.vue"
    );
const Authenticated_location_reports = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Location_reports.vue"
    );

const Authenticated_teacher_sales_reports = () =>
    import (
        "../../components/Components/Authtenticated/Reports/Teacher_Sales_reports.vue"
    );

const Photo_video_release_form = () =>
    import ('../../components/Components/Form/others/photo_video_form.vue')

export const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/photo-video-release-form",
        name: "photo-video-release-form",
        component: Photo_video_release_form
    },

    {
        path: "/Paris-2022",
        name: "presentationOfWordDance",
        component: Presenstation
    },

    {
        path: "/meet-the-team",
        name: "meet-the-team",
        component: Team
    },

    {
        path: "/reset-password",
        name: "reset-password",
        component: Reset_password
    },

    {
        path: "/schedules-locations",
        name: "schedules-locations",
        component: Schedule
    },

    {
        path: "/camps",
        name: "camps",
        component: Camp
    },

    {
        path: "/class-information",
        name: "class-information",
        component: Lesson
    },

    {
        path: "/competition-elite-training",
        name: "competition-elite-training",
        component: Competition
    },

    {
        path: "/parents-testimonial",
        name: "parents-testimonial",
        component: Testimonial
    },

    {
        path: "/faq",
        name: "faq",
        component: Faq
    },

    {
        path: "/kinder-program",
        name: "kinder-program",
        component: Kinder
    },

    {
        path: "/people-of-determination",
        name: "people-of-determination",
        component: Determination
    },

    {
        path: "/news",
        name: "news",
        component: News
    },

    {
        path: "/partners-and-third-parties",
        name: "partners-and-third-parties",
        component: Partners
    },

    {
        path: "/enrollment-form",
        name: "enrollment-form",
        component: EnrollmentForm
    },

    {
        path: "/trial-form",
        name: "trial-form",
        component: TrialForm
    },

    {
        path: "/shop-uniforms",
        name: "shop-uniforms",
        component: Shop_products
    },

    {
        path: "/shop-studio",
        name: "shop-studio",
        component: Shop_motor_city
    },

    {
        path: "/shop-camps",
        name: "shop-camps",
        component: Shop_camps
    },

    {
        path: "/shop-urdang",
        name: "shop-urdang",
        component: Shop_urdangs
    },

    {
        path: "/shop-adult-classes-motor-city",
        name: "shop-adult-classes",
        component: Shop_adult
    },

    {
        path: "/shop-repton-al-barsha",
        name: "shop-repton-al-barsha",
        component: Shop_foremarkes
    },

    {
        path: "/shop-spring-souq",
        name: "shop-damac-hills-2",
        component: Shop_akoyas
    },

    {
        path: "/shop-victory-heights-primary-school",
        name: "victory-heights-primary-school",
        component: Shop_arcadia
    },

    // {
    //     path: "/midterm-camps",
    //     name: "midterm-camps",
    //     component: Midterm_Camp
    // },

    {
        path: "/sports-day",
        name: "sports-day",
        component: Sports_day
    },

    {
        path: "/camps/spring/multi-skills",
        name: "MultiSkills",
        component: spring_camps_multi_skills
    },
    {
        path: "/camps/spring/performing-arts",
        name: "PerformingArts",
        component: spring_performing_arts_skills
    },
    {
        path: "/camps/spring/sports",
        name: "Sports",
        component: spring_sports_skills
    },

    {
        path: "/camps/summer/multi-skills",
        name: "SummerMultiSkills",
        component: summer_camps_multi_skills
    },
    {
        path: "/camps/summer/performing-arts",
        name: "SummerPerformingArts",
        component: summer_performing_arts_skills
    },
    {
        path: "/camps/summer/sports",
        name: "SummerSports",
        component: summer_sports_skills
    },

    // {
    //     path: "/camps/winter/multi-skills",
    //     name: "camps/winter/multi-skills",
    //     component: Winter_camps_multi_skills
    // },
    // {
    //     path: "/camps/winter/performing-arts",
    //     name: "camps/winter/performing-arts",
    //     component: Winter_camps_performing_arts
    // },
    // {
    //     path: "/camps/winter/sports-winter-camp",
    //     name: "sportsWinterCamp",
    //     component: Sport_winter_camp
    // },

    // {
    //     path: "/rad-classes",
    //     name: "rad-classes",
    //     component: Rad_classes
    // },

    // {
    //     path: "/private-lessons",
    //     name: "private-lessons",
    //     component: Prive_lessons
    // },

    // {
    //     path: "/spring-workshop",
    //     name: "spring-workshop",
    //     component: Spring_workshop
    // },

    {
        path: "/cart",
        name: "cart",
        component: Cart
    },

    {
        path: "/checkout",
        name: "checkout",
        component: Checkout
    },

    {
        path: "/success",
        name: "success",
        component: Order_completed
    },

    {
        path: "/transaction-cancelled",
        name: "transaction-cancelled",
        component: Order_cancelled
    },


    {
        path: "/dashboard",
        name: "dashboard",
        component: Authenticated,
        meta: {
            requiresAuth: true
        },
        children: [{
                path: "/my-account",
                component: Authenticated_my_account
            },
            {
                path: "/my-enrollment",
                component: Authenticated_enrollment
            },
            {
                path: "/my-order",
                component: Authenticated_my_orders
            }
        ]
    },

    {
        path: "/sams",
        name: "sams",
        component: Authenticated_sams,
        meta: {
            requiresAuth: true
        },
        children: [{
                path: "/sams-schedule",
                name: 'schedules',
                component: Authenticated_schedule
            },
            {
                path: "/sams-students",
                name: 'students',
                component: Authenticated_students
            },
            {
                path: "/sams-parents",
                name: 'parents',
                component: Authenticated_parents
            },
            {
                path: "/sams-staff",
                name: 'staffs',
                component: Authenticated_staffs
            },
            {
                path: "/sams-attendance",
                name: 'attendances',
                component: Authenticated_attendance
            },
            {
                path: "/sams-attendance-download",
                name: 'attendance-download',
                component: Authenticated_attendance_download
            },
            {
                path: "/sams-send-email",
                name: 'email',
                component: Authenticated_email
            },
            {
                path: "/sams-schedules",
                name: 'scheds',
                component: Authenticated_settings_schedules
            },
            {
                path: "/sams-lessons",
                name: 'lessons',
                component: Authenticated_settings_lessons
            },
            {
                path: "/sams-locations",
                name: 'locations',
                component: Authenticated_settings_locations
            },
            {
                path: "/sams-date-ranges",
                name: 'date-ranges',
                component: Authenticated_settings_date_ranges
            },
            {
                path: "/sams-store-setup",
                name: 'store-setup',
                component: Authenticated_settings_Store_setup
            },
            {
                path: "/sams-week-days",
                name: 'weeks',
                component: Authenticated_settings_week_days
            },
            {
                path: "/sams-xero",
                name: 'xero',
                component: Authenticated_settings_xero
            },
            {
                path: "/sams-reports-class-infomation",
                name: 'class-information-report',
                component: Authenticated_reports_class_information
            },
            {
                path: "/sams-reports-number-of-students",
                name: 'number-of-students',
                component: Authenticated_reports_number_of_students
            },
            {
                path: "/sams-reports-payment-by-schedules",
                name: 'payment-by-schedules',
                component: Authenticated_reports_payment_by_schedules
            },
            {
                path: "/sams-reports-payment-by-lesson",
                name: 'payment-by-lessons',
                component: Authenticated_reports_payment_by_lesson
            },
            {
                path: "/sams-reports-payment-by-product-sales",
                name: 'payment-by-product-sales',
                component: Authenticated_reports_product_sales
            },
            {
                path: "/sams-product-reports",
                name: 'product-reports',
                component: Authenticated_product_reports
            },
            {
                path: "/sams-service-reports",
                name: 'service-reports',
                component: Authenticated_service_reports
            },
            {
                path: "/sams-other-services-reports",
                name: 'other-service-reports',
                component: Authenticated_other_service_reports
            },
            {
                path: "/sams-location-reports",
                name: 'location-reports',
                component: Authenticated_location_reports
            },
            {
                path: "/sams-receipts",
                name: 'receipts',
                component: Authenticated_receipts
            },
            {
                path: "/sams-teacher-reports",
                name: 'teacher-sales-reports',
                component: Authenticated_teacher_sales_reports
            },
        ]
    },


    {
        path: "/login",
        name: "Login",
        meta: {
            requiresVisitor: true
        },
        component: Login
    },

    {
        path: "/logout",
        name: "logout",
        meta: {
            requiresAuth: true
        },
        component: Logout
    },
    {
        path: "*",
        component: Home
    }
];
