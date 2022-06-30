(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "filter-report",
  created: function created() {
    this.$store.dispatch("SETTING_DETAILS");
  },
  data: function data() {
    return {
      form: {
        dates: [],
        location: 0,
        lessons: [],
        teacher: 0,
        enrolled: 1
      }
    };
  },
  methods: {
    filter: function filter() {
      this.$store.commit("NUMBER_OF_STUDENT_FILTER", this.$store.state.Reports.number_of_students_filter);
      this.$store.dispatch("NUMBER_OF_STUDENTS", {
        form: this.$store.state.Reports.number_of_students_filter
      });
    }
  },
  computed: {
    date_title: function date_title() {
      return this.$store.state.Reports.number_of_students_filter.dates.join(" ~ ");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=template&id=7166adf2&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=template&id=7166adf2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "d-print-none" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "10" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("div", { staticClass: "text-h6 text-center" }, [
                              _vm._v(
                                "\n                Filtered Date: " +
                                  _vm._s(
                                    new Date().toISOString().substr(0, 10)
                                  ) +
                                  "\n              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items:
                                    _vm.$store.state.Schedules.setting_details
                                      .date_ranges,
                                  "item-text": "daterangename",
                                  "item-value": "drid",
                                  label: "Select Term"
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Reports
                                      .number_of_students_filter.term,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Reports
                                        .number_of_students_filter,
                                      "term",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$store.state.Reports.number_of_students_filter.term"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items:
                                    _vm.$store.state.Schedules.setting_details
                                      .lessons,
                                  "item-text": "classname",
                                  "item-value": "classid",
                                  multiple: "",
                                  label: "Select Lessons"
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Reports
                                      .number_of_students_filter.lessons,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Reports
                                        .number_of_students_filter,
                                      "lessons",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Reports.number_of_students_filter.lessons\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items:
                                    _vm.$store.state.Schedules.setting_details
                                      .teachers,
                                  "item-text": "staffname",
                                  "item-value": "sid",
                                  label: "Select Teacher"
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Reports
                                      .number_of_students_filter.teacher,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Reports
                                        .number_of_students_filter,
                                      "teacher",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Reports.number_of_students_filter.teacher\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-switch", {
                                attrs: { label: "Enrolled Student" },
                                model: {
                                  value:
                                    _vm.$store.state.Reports
                                      .number_of_students_filter.enrolled,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Reports
                                        .number_of_students_filter,
                                      "enrolled",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Reports.number_of_students_filter.enrolled\n                "
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "text-none primary",
                          attrs: {
                            disabled:
                              _vm.$store.state.Reports.number_of_students_filter
                                .term > 0
                                ? false
                                : true
                          },
                          on: { click: _vm.filter }
                        },
                        [_vm._v("Filter")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Filter_vue_vue_type_template_id_7166adf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter.vue?vue&type=template&id=7166adf2& */ "./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=template&id=7166adf2&");
/* harmony import */ var _Filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Filter_vue_vue_type_template_id_7166adf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Filter_vue_vue_type_template_id_7166adf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Filter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=template&id=7166adf2&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=template&id=7166adf2& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_template_id_7166adf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Filter.vue?vue&type=template&id=7166adf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Number_of_students/Filter.vue?vue&type=template&id=7166adf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_template_id_7166adf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filter_vue_vue_type_template_id_7166adf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);