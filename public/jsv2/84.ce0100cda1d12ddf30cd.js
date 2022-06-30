(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "date-ranges-view",
  components: {
    manage_date_range: function manage_date_range() {
      return __webpack_require__.e(/*! import() */ 83).then(__webpack_require__.bind(null, /*! ./Manage */ "./resources/js/components/Components/Authtenticated/Settings/Date_ranges/Manage.vue"));
    }
  },
  created: function created() {
    this.pagination();
    this.$store.dispatch("SETTING_DETAILS");
  },
  methods: {
    pagination: function pagination() {
      this.$store.commit("DATE_RANGE_LOADING", true);
      this.$store.dispatch("DATE_RANGES", this.$store.state.Date_ranges.date_range_filter);
    },
    add: function add() {
      var schedule = {
        drid: 0,
        daterangename: "",
        daterangefrom: new Date().toISOString().substr(0, 10),
        daterangeto: new Date().toISOString().substr(0, 10),
        daterangeclasses: ""
      };
      this.$store.commit("DATE_RANGE", schedule);
      this.$store.commit("DATE_RANGE_OPEN", true);
    },
    edit: function edit(e) {
      this.$store.commit("DATE_RANGE", e);
      this.$store.commit("DATE_RANGE_OPEN", true);
    },
    end: function end(e) {
      confirm("Are you sure you want to end ".concat(e.daterangename, "?")) && this.end_term(e.drid);
    },
    end_term: function end_term(e) {
      var _this = this;

      this.$store.dispatch("UPDATE_DATE_RANGE", e).then(function (result) {
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
          text: "Term successfully end!"
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
          text: "Wow! Please reload the browser"
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
        this.$store.commit("DATE_RANGE_FILTER", filter);
        this.$store.dispatch("DATE_RANGE_FILTER", this.$store.state.Date_ranges.date_range_filter);
      }

      if (e.length == 0) {
        var filter = {
          filter: null,
          page: this.$store.state.Date_ranges.date_ranges.current_page,
          per_page: this.$store.state.Date_ranges.date_ranges.per_page
        };
        this.$store.commit("DATE_RANGE_FILTER", filter);
        this.$store.dispatch("DATE_RANGES", this.$store.state.Date_ranges.date_range_filter);
      }
    },
    channel: function channel(e) {
      this.$store.commit("DATE_RANGE_LOADING", true);
      var filter = {
        filter: this.$store.state.Date_ranges.date_range_filter.filter,
        page: e,
        per_page: 10
      };
      this.$store.commit("DATE_RANGE_FILTER", filter);

      if (this.$store.state.Date_ranges.date_range_filter.filter) {
        this.$store.dispatch("DATE_RANGE_FILTER", this.$store.state.Date_ranges.date_range_filter);
      } else {
        this.$store.dispatch("DATE_RANGES", this.$store.state.Date_ranges.date_range_filter);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=template&id=637569da&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=template&id=637569da& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      _vm.$store.state.Date_ranges.date_range_open
        ? _c("manage_date_range")
        : _vm._e(),
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
              _c("v-toolbar-title", [_vm._v(" Terms ")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mt-6",
                attrs: { label: "Filter Term", solo: "" },
                on: { input: _vm.filter },
                model: {
                  value: _vm.$store.state.Date_ranges.date_range_filter.filter,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$store.state.Date_ranges.date_range_filter,
                      "filter",
                      $$v
                    )
                  },
                  expression:
                    "$store.state.Date_ranges.date_range_filter.filter"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              attrs: { loading: _vm.$store.state.Date_ranges.loading, flat: "" }
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
                            "v-list-item-title",
                            { staticClass: "font-weight-bold" },
                            [_c("p", [_vm._v("term")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-title",
                            { staticClass: "font-weight-bold" },
                            [_vm._v("Dates")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-title",
                            { staticClass: "font-weight-bold" },
                            [_vm._v("Status")]
                          ),
                          _vm._v(" "),
                          _c("v-list-item-title")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(
                        _vm.$store.state.Date_ranges.date_ranges.data,
                        function(item, index) {
                          return _c(
                            "v-list-item",
                            { key: index },
                            [
                              _c("v-list-item-title", [
                                _c("p", [_vm._v(_vm._s(item.daterangename))])
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.daterangefrom) +
                                    " - " +
                                    _vm._s(item.daterangeto) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.daterangeclasses) +
                                    "\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-list-item-title",
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
                                                              item
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
                                                      "\n                      mdi-pencil\n                  "
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
                                          " Edit " +
                                            _vm._s(item.daterangename) +
                                            " "
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
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.end(item)
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
                                                      "\n                      mdi-calendar-remove\n                  "
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
                                          " End " +
                                            _vm._s(item.daterangename) +
                                            " "
                                        )
                                      ])
                                    ]
                                  )
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
                  length: _vm.$store.state.Date_ranges.date_ranges.last_page,
                  "total-visible": _vm.$vuetify.breakpoint.mdAndUp ? 10 : 5
                },
                on: { input: _vm.channel },
                model: {
                  value: _vm.$store.state.Date_ranges.date_ranges.current_page,
                  callback: function($$v) {
                    _vm.$set(
                      _vm.$store.state.Date_ranges.date_ranges,
                      "current_page",
                      $$v
                    )
                  },
                  expression:
                    "$store.state.Date_ranges.date_ranges.current_page"
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

/***/ "./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_637569da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=637569da& */ "./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=template&id=637569da&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_637569da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_637569da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=template&id=637569da&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=template&id=637569da& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_637569da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=637569da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Date_ranges/View.vue?vue&type=template&id=637569da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_637569da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_637569da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);