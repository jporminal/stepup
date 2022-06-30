(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "staff-view",
  components: {
    my_staff: function my_staff() {
      return __webpack_require__.e(/*! import() */ 106).then(__webpack_require__.bind(null, /*! ./Staff */ "./resources/js/components/Components/Authtenticated/Staffs/Staff.vue"));
    }
  },
  data: function data() {
    return {
      options: {},
      headers: [{
        text: "Name",
        value: "name",
        align: "center",
        sortable: false
      }, {
        text: "Contact",
        value: "contact",
        align: "center",
        sortable: false
      }, {
        text: "Email",
        value: "email",
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
          filter: this.$store.state.Staffs.staff_filter.filter,
          page: e.page,
          per_page: e.itemsPerPage
        };
        this.$store.commit("STAFF_FILTER", filter);

        if (this.$store.state.Staffs.staff_filter.filter) {
          this.$store.dispatch("STAFF_FILTER", this.$store.state.Staffs.staff_filter);
        } else {
          this.pagination();
        }
      },
      deep: true
    }
  },
  methods: {
    filter: function filter(e) {
      if (e.length > 2) {
        var filter = {
          filter: e,
          page: this.$store.state.Staffs.staff_filter.page,
          per_page: this.$store.state.Staffs.staff_filter.per_page
        };
        this.$store.commit("STAFF_FILTER", filter);
        this.options = {
          page: 1,
          per_page: 10
        };
        this.$store.dispatch("STAFF_FILTER", this.$store.state.Staffs.staff_filter);
      }

      if (e.length == 0) {
        var _filter = {
          filter: null,
          page: this.$store.state.Staffs.staff_filter.page,
          per_page: this.$store.state.Staffs.staff_filter.per_page
        };
        this.$store.commit("STAFF_FILTER", _filter);
        this.pagination();
      }
    },
    add: function add() {
      var filter = {
        sid: 0,
        staffname: "",
        staffphone1: "",
        staffphone2: "",
        staffmobile: "",
        staffemail: ""
      };
      this.$store.commit("STAFF", filter);
      this.$store.commit("STAFF_OPEN", true);
    },
    edit: function edit(e) {
      this.$store.dispatch("STAFF", e);
    },
    pagination: function pagination() {
      this.$store.commit("STAFF_LOADING", true);
      this.$store.dispatch("STAFFS", this.$store.state.Staffs.staff_filter);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=template&id=95951f0a&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=template&id=95951f0a& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _vm.$store.state.Staffs.staff_open ? _c("my_staff") : _vm._e(),
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
              _c("v-toolbar-title", [_vm._v(" Staffs ")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mt-6",
                attrs: { label: "Filter staff", solo: "" },
                on: { input: _vm.filter }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              items: _vm.$store.state.Staffs.staffs.data,
              "server-items-length": _vm.$store.state.Staffs.staffs.total,
              loading: _vm.$store.state.Staffs.staffs.loading,
              options: _vm.options,
              "items-per-page": 10,
              "footer-props": {
                "items-per-page-options": [10, 15, 20, -1],
                "items-per-page-text": "Staff per page",
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
                key: "item.name",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm._f("toUpper")(item.staffname)) +
                        "\n      "
                    )
                  ]
                }
              },
              {
                key: "item.contact",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v("\n        " + _vm._s(item.staffphone1) + "\n      ")
                  ]
                }
              },
              {
                key: "item.email",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v("\n        " + _vm._s(item.staffemail) + "\n      ")
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
                                              return _vm.edit(item.sid)
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
                            " edit " +
                              _vm._s(_vm._f("toUpper")(item.staffname)) +
                              " "
                          )
                        ])
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "error",
              attrs: { absolute: "", bottom: "", left: "", icon: "", dark: "" },
              on: { click: _vm.add }
            },
            [_c("v-icon", [_vm._v(" mdi-plus ")])],
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

/***/ "./resources/js/components/Components/Authtenticated/Staffs/View.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Staffs/View.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_95951f0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=95951f0a& */ "./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=template&id=95951f0a&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_95951f0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_95951f0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Staffs/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=template&id=95951f0a&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=template&id=95951f0a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95951f0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=95951f0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Staffs/View.vue?vue&type=template&id=95951f0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95951f0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95951f0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);