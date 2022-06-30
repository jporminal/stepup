(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
  name: "attendance-view",
  components: {
    edit_schedule: function edit_schedule() {
      return __webpack_require__.e(/*! import() */ 96).then(__webpack_require__.bind(null, /*! ./Created */ "./resources/js/components/Components/Authtenticated/Settings/Schedules/Created.vue"));
    }
  },
  created: function created() {
    this.pagination();
    this.$store.dispatch("SETTING_DETAILS");
  },
  methods: {
    pagination: function pagination() {
      this.$store.commit('ATTENDANCE_LOADING', true);
      this.$store.dispatch("ENROLLMENT_SCHEDULE", this.$store.state.Enrollments.enrollment_schedule_filter);
    },
    add: function add() {
      var schedule = {
        scheduleid: 0,
        drid: 0,
        vid: 1,
        weekid: 1,
        scheduletimestart: "09:00",
        scheduletimeend: "10:00",
        sid: 1,
        schedulestudio: 1,
        classid: 1,
        schedulestudentlimit: 1,
        schedulenotes: ""
      };
      this.$store.commit("SCHEDULE", schedule);
      this.$store.commit("SCHEDULE_OPEN", true);
    },
    edit: function edit(e) {
      this.$store.dispatch("SCHEDULE", e);
    },
    del: function del(e) {
      var _this = this;

      this.$store.dispatch('SCHEDULE_DELETE', e).then(function (result) {
        var snackbar = {
          snackbar: true,
          vertical: false,
          timeout: 2000,
          color: "blue lighten-2",
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "Schedule successfully deleted!"
        };

        _this.$store.commit("SNACKBAR", snackbar);

        _this.pagination();
      })["catch"](function (err) {
        var snackbar = {
          snackbar: true,
          vertical: false,
          timeout: 2000,
          color: "red",
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "Error! Please reload the browser."
        };

        _this.$store.commit("SNACKBAR", snackbar);
      });
    },
    filter: function filter(e) {
      if (e.length > 2) {
        var filter = {
          filter: e,
          page: 1,
          per_page: 10
        };
        this.$store.commit("ENROLLMENT_SCHEDULE_FILTER", filter);
        this.$store.dispatch("ENROLLMENT_SCHEDULE_FILTER", this.$store.state.Enrollments.enrollment_schedule_filter);
      }

      if (e.length == 0) {
        var filter = {
          filter: null,
          page: this.$store.state.Enrollments.enrollment_schedule.current_page,
          per_page: this.$store.state.Enrollments.enrollment_schedule.per_page
        };
        this.$store.commit("ENROLLMENT_SCHEDULE_FILTER", filter);
        this.$store.dispatch("ENROLLMENT_SCHEDULE", this.$store.state.Enrollments.enrollment_schedule_filter);
      }
    },
    channel: function channel(e) {
      this.$store.commit('ATTENDANCE_LOADING', true);
      var filter = {
        filter: this.$store.state.Enrollments.enrollment_schedule_filter.filter,
        page: e,
        per_page: 10
      };
      this.$store.commit("ENROLLMENT_SCHEDULE_FILTER", filter);

      if (this.$store.state.Enrollments.enrollment_schedule_filter.filter) {
        this.$store.dispatch("ENROLLMENT_SCHEDULE_FILTER", this.$store.state.Enrollments.enrollment_schedule_filter);
      } else {
        this.$store.dispatch("ENROLLMENT_SCHEDULE", this.$store.state.Enrollments.enrollment_schedule_filter);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=template&id=7863b404&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=template&id=7863b404& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm.$store.state.Schedules.schedule_open ? _c("edit_schedule") : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            {
              staticClass: "white--text",
              attrs: { color: "blue lighten-2", flat: "" }
            },
            [
              _c("v-toolbar-title", [_vm._v(" Schedules ")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mt-6",
                attrs: { label: "Filter Schedule", solo: "" },
                on: { input: _vm.filter },
                model: {
                  value:
                    _vm.$store.state.Enrollments.enrollment_schedule_filter
                      .filter,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$store.state.Enrollments.enrollment_schedule_filter,
                      "filter",
                      $$v
                    )
                  },
                  expression:
                    "$store.state.Enrollments.enrollment_schedule_filter.filter"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              attrs: { loading: _vm.$store.state.Attendance.loading, flat: "" }
            },
            [
              _c(
                "center",
                [
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-avatar",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { width: "30%" }
                            },
                            [_c("p", [_vm._v("Term")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-avatar",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { width: "30%" }
                            },
                            [_vm._v("Lesson")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-avatar",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { width: "20%" }
                            },
                            [_vm._v("Day")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-avatar",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { width: "20%" }
                            },
                            [_vm._v("Time")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-avatar",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { width: "10%" }
                            },
                            [_vm._v("Teacher")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-avatar",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { width: "8%" }
                            },
                            [_vm._v("#studs")]
                          ),
                          _vm._v(" "),
                          _c("v-list-item-avatar", { attrs: { width: "17%" } })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(
                        _vm.$store.state.Enrollments.enrollment_schedule.data,
                        function(item, index) {
                          return _c(
                            "v-list-item",
                            { key: index },
                            [
                              _c(
                                "v-list-item-avatar",
                                {
                                  attrs: {
                                    tile: "",
                                    width: "30%",
                                    height: "60px"
                                  }
                                },
                                [_c("p", [_vm._v(_vm._s(item.term))])]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-avatar",
                                { attrs: { tile: "", width: "30%" } },
                                [_c("p", [_vm._v(_vm._s(item.lesson))])]
                              ),
                              _vm._v(" "),
                              _c("v-list-item-avatar", {
                                attrs: { tile: "", width: "20%" },
                                domProps: { innerHTML: _vm._s(item.day) }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-list-item-avatar",
                                { attrs: { tile: "", width: "20%" } },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.start_time) +
                                      " - " +
                                      _vm._s(item.end_time) +
                                      "\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-avatar",
                                { attrs: { tile: "", width: "10%" } },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.teacher) +
                                      "\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-avatar",
                                { attrs: { tile: "", width: "8%" } },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.total_students) +
                                      "\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-avatar",
                                { attrs: { tile: "", width: "17%" } },
                                [
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { bottom: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "v-icon",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.edit(
                                                              item.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      "v-icon",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _vm._v(
                                                      "\n                          mdi-pencil\n                      "
                                                    )
                                                  ]
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          " Edit " + _vm._s(item.lesson) + " "
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  item.total_students === 0
                                    ? _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  var attrs = ref.attrs
                                                  return [
                                                    _c(
                                                      "v-icon",
                                                      _vm._g(
                                                        _vm._b(
                                                          {
                                                            attrs: {
                                                              color: "red"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.del(
                                                                  item.id
                                                                )
                                                              }
                                                            }
                                                          },
                                                          "v-icon",
                                                          attrs,
                                                          false
                                                        ),
                                                        on
                                                      ),
                                                      [
                                                        _vm._v(
                                                          "\n                          mdi-trash-can\n                      "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [
                                            _vm._v(
                                              " Delete " +
                                                _vm._s(item.lesson) +
                                                " "
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }
                      )
                    ],
                    2
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
              _c(
                "v-btn",
                {
                  staticClass: "error",
                  attrs: { icon: "", outlined: "", dark: "", "x-large": "" },
                  on: { click: _vm.add }
                },
                [_c("v-icon", [_vm._v("mdi-plus")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-pagination", {
                attrs: {
                  length:
                    _vm.$store.state.Enrollments.enrollment_schedule.last_page,
                  "total-visible": _vm.$vuetify.breakpoint.mdAndUp ? 10 : 5
                },
                on: { input: _vm.channel },
                model: {
                  value:
                    _vm.$store.state.Enrollments.enrollment_schedule
                      .current_page,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$store.state.Enrollments.enrollment_schedule,
                      "current_page",
                      $$v
                    )
                  },
                  expression:
                    "$store.state.Enrollments.enrollment_schedule.current_page"
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_7863b404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=7863b404& */ "./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=template&id=7863b404&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_7863b404___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_7863b404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=template&id=7863b404&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=template&id=7863b404& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_7863b404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=7863b404& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Schedules/View.vue?vue&type=template&id=7863b404&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_7863b404___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_7863b404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);