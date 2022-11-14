(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "student-view",
  components: {
    my_edit: function my_edit() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../Enrollment/Edit */ "./resources/js/components/Components/Authtenticated/Enrollment/Edit.vue"));
    },
    my_enrollment: function my_enrollment() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../Enrollment/Enrolled */ "./resources/js/components/Components/Authtenticated/Enrollment/Enrolled.vue"));
    },
    my_schedules: function my_schedules() {
      return __webpack_require__.e(/*! import() */ 112).then(__webpack_require__.bind(null, /*! ./Schedules */ "./resources/js/components/Components/Authtenticated/Students/Schedules.vue"));
    }
  },
  data: function data() {
    return {
      options: {},
      headers: [{
        text: "First Name",
        value: "firstname",
        align: "center",
        sortable: false
      }, {
        text: "Family Name",
        value: "lastname",
        align: "center",
        sortable: false
      }, {
        text: "Date of Birth",
        value: "dob",
        align: "center",
        sortable: false
      }, {
        text: "Age",
        value: "age",
        align: "center",
        sortable: false
      }, {
        text: "Nationality",
        value: "nationality",
        align: "center",
        sortable: false
      }, {
        text: "",
        value: "actions",
        align: "center",
        sortable: false
      }]
    };
  },
  created: function created() {
    this.pagination();
  },
  watch: {
    options: {
      handler: function handler(e) {
        var filter = {
          filter: this.$store.state.Students.student_filter.filter,
          page: e.page,
          per_page: e.itemsPerPage
        };
        this.$store.commit("STUDENT_FILTER", filter);

        if (this.$store.state.Students.student_filter.filter) {
          this.$store.dispatch("STUDENT_FILTER", this.$store.state.Students.student_filter);
        } else {
          this.pagination();
        }
      },
      deep: true
    }
  },
  methods: {
    editItem: function editItem(e) {
      var _this = this;

      this.$store.dispatch("GET_STUDENT_ID", {
        firstname: e.firstname,
        lastname: e.lastname
      }).then(function (result) {
        _this.$store.dispatch("ENROLLMENT_CHILD", result.data.cid).then(function (res) {
          _this.$store.commit("ENROLLMENT_CHILD_EDIT", true);
        })["catch"](function (err) {});
      });
    },
    enroll: function enroll(e) {
      var _this2 = this;

      this.$store.commit('ENROLLMENT_LOADER', true);
      this.$store.dispatch("GET_STUDENT_ID", {
        firstname: e.firstname,
        lastname: e.lastname
      }).then(function (result) {
        _this2.$store.dispatch("ENROLLMENT_SCHEDULE", _this2.$store.state.Enrollments.enrollment_schedule_filter);

        _this2.$store.commit("ENROLLMENT_SCHEDULE_OPEN", true);
      });
    },
    view_enrollment: function view_enrollment(e) {
      var _this3 = this;

      this.$store.dispatch("GET_STUDENT_ID", {
        firstname: e.firstname,
        lastname: e.lastname
      }).then(function (result) {
        _this3.$store.dispatch("GET_ENROLLMENT", result.data.cid);
      });
    },
    pagination: function pagination() {
      this.$store.commit("STUDENT_LOADING", true);
      this.$store.dispatch("STUDENTS", this.$store.state.Students.student_filter);
    },
    filter_student: function filter_student(e) {
      if (e.length > 2) {
        var filter = {
          filter: e,
          page: this.$store.state.Students.student_filter.page,
          per_page: this.$store.state.Students.student_filter.per_page
        };
        this.$store.commit("STUDENT_FILTER", filter);
        this.options = {
          page: 1,
          per_page: 10
        };
        this.$store.dispatch("STUDENT_FILTER", this.$store.state.Students.student_filter);
      }

      if (e.length == 0) {
        var _filter = {
          filter: null,
          page: this.$store.state.Students.student_filter.page,
          per_page: this.$store.state.Students.student_filter.per_page
        };
        this.$store.commit("STUDENT_FILTER", _filter);
        this.pagination();
      }
    },
    get_age: function get_age(e) {
      var currentDate = new Date();
      var birthDate = new Date(e);
      var difference = currentDate - birthDate;
      var age = Math.floor(difference / 31557600000);
      return age;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=template&id=037d5996&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=template&id=037d5996& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
              _c("v-toolbar-title", [_vm._v(" Students ")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mt-6",
                attrs: { label: "Filter student", solo: "" },
                on: { input: _vm.filter_student }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              items: _vm.$store.state.Students.students.data,
              "server-items-length": _vm.$store.state.Students.students.total,
              loading: _vm.$store.state.Students.loading,
              options: _vm.options,
              "items-per-page": 10,
              "footer-props": {
                "items-per-page-options": [10, 15, 20, -1],
                "items-per-page-text": "Students per page",
                "show-current-page": true
              },
              "mobile-breakpoint": 200
            },
            on: {
              "update:options": function($event) {
                _vm.options = $event
              }
            },
            scopedSlots: _vm._u([
              {
                key: "item.firstname",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("p", [_vm._v(_vm._s(_vm._f("toUpper")(item.firstname)))])
                  ]
                }
              },
              {
                key: "item.lastname",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("p", [_vm._v(_vm._s(_vm._f("toUpper")(item.lastname)))])
                  ]
                }
              },
              {
                key: "item.dob",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("p", [_vm._v(_vm._s(_vm._f("date")(item.dateofbirth)))])
                  ]
                }
              },
              {
                key: "item.nationality",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("p", [
                      _vm._v(_vm._s(_vm._f("toUpper")(item.nationality)))
                    ])
                  ]
                }
              },
              {
                key: "item.age",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("p", [_vm._v(_vm._s(_vm.get_age(item.dateofbirth)))])
                  ]
                }
              },
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
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
                                return [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      {
                                        staticClass: "mr-2",
                                        attrs: { small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editItem(item)
                                          }
                                        }
                                      },
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n              mdi-pencil\n            "
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
                            "\n            Edit " +
                              _vm._s(_vm._f("toUpper")(item.firstname)) +
                              " " +
                              _vm._s(_vm._f("toUpper")(item.lastname)) +
                              "\n          "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
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
                                          attrs: { small: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.view_enrollment(item)
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
                                        "\n              mdi-notebook-check\n            "
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
                            "\n            View schedule of " +
                              _vm._s(_vm._f("toUpper")(item.firstname)) +
                              "\n            " +
                              _vm._s(_vm._f("toUpper")(item.lastname)) +
                              "\n          "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
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
                                          attrs: { small: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.enroll(item)
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
                                        "\n              mdi-form-select\n            "
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
                            "\n            Enroll " +
                              _vm._s(_vm._f("toUpper")(item.firstname)) +
                              "\n            " +
                              _vm._s(_vm._f("toUpper")(item.lastname)) +
                              "\n          "
                          )
                        ])
                      ]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.$store.state.Enrollments.enrollment_child_edit
        ? _c("my_edit")
        : _vm._e(),
      _vm._v(" "),
      _vm.$store.state.Enrollments.get_enrollment_open
        ? _c("my_enrollment")
        : _vm._e(),
      _vm._v(" "),
      _vm.$store.state.Enrollments.enrollment_schedule_open
        ? _c("my_schedules")
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Students/View.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Students/View.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_037d5996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=037d5996& */ "./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=template&id=037d5996&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_037d5996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_037d5996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Students/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=template&id=037d5996&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=template&id=037d5996& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_037d5996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=037d5996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Students/View.vue?vue&type=template&id=037d5996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_037d5996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_037d5996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);