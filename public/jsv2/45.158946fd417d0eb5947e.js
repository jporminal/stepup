(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "my-orders",
  components: {
    my_receipt: function my_receipt() {
      return __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! ./Receipt */ "./resources/js/components/Components/Authtenticated/Orders/Receipt.vue"));
    }
  },
  data: function data() {
    return {
      options: {},
      headers: [{
        text: "Order #",
        value: "id",
        align: "center",
        sortable: false
      }, {
        text: "Total",
        value: "amount",
        align: "center",
        sortable: false
      }, {
        text: "Date",
        value: "date",
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
  watch: {
    options: {
      handler: function handler(e) {
        var filter = {
          page: e.page,
          per_page: e.itemsPerPage
        };
        this.$store.commit("ORDER_PAGINATE", filter);
        this.pagination();
      },
      deep: true
    }
  },
  methods: {
    pagination: function pagination() {
      this.$store.dispatch("MY_ORDERS", this.$store.state.Orders.paginate);
    },
    view: function view(e) {
      this.$store.dispatch("RECEIPT", e);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=template&id=42d7d078&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=template&id=42d7d078& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      _vm.$store.state.Orders.receipt_open ? _c("my_receipt") : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "blue lighten-2", dark: "", flat: "" } },
            [_c("v-toolbar-title", [_vm._v(" My Order(s) ")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.$store.state.Orders.orders.data,
                  "server-items-length": _vm.$store.state.Orders.orders.total,
                  loading: _vm.$store.state.Orders.order_loading,
                  "items-per-page": 10,
                  options: _vm.options,
                  "footer-props": {
                    "items-per-page-options": [10, 15, 20],
                    "items-per-page-text": "Categories per page",
                    "show-current-page": true,
                    "show-first-last-page": true
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
                    key: "item.amount",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("p", [
                          _vm._v(_vm._s(_vm._f("currency")(item.amount_incl)))
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.date",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("span", [
                          _vm._v(
                            " " + _vm._s(_vm._f("date")(item.create_at)) + " "
                          )
                        ])
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
                                              attrs: { color: "blue" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.view(item.id)
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
                                            "\n                mdi-eye\n              "
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
                              _vm._v(" View Order #" + _vm._s(item.id) + " ")
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

/***/ "./resources/js/components/Components/Authtenticated/Orders/My_view.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Orders/My_view.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _My_view_vue_vue_type_template_id_42d7d078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./My_view.vue?vue&type=template&id=42d7d078& */ "./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=template&id=42d7d078&");
/* harmony import */ var _My_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./My_view.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _My_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _My_view_vue_vue_type_template_id_42d7d078___WEBPACK_IMPORTED_MODULE_0__["render"],
  _My_view_vue_vue_type_template_id_42d7d078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Orders/My_view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_My_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./My_view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_My_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=template&id=42d7d078&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=template&id=42d7d078& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_My_view_vue_vue_type_template_id_42d7d078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./My_view.vue?vue&type=template&id=42d7d078& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Orders/My_view.vue?vue&type=template&id=42d7d078&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_My_view_vue_vue_type_template_id_42d7d078___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_My_view_vue_vue_type_template_id_42d7d078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);