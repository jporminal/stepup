(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "view-receipt",
  methods: {
    close: function close() {
      this.$store.commit("RECEIPT", {});
      this.$store.commit("RECEIPT_OPEN", false);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=template&id=2f0788a4&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=template&id=2f0788a4& ***!
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
    "v-dialog",
    {
      attrs: { width: "1200" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.$store.state.Orders.receipt_open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Orders, "receipt_open", $$v)
        },
        expression: "$store.state.Orders.receipt_open"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "blue lighten-2", dark: "", flat: "" } },
            [
              _c("v-toolbar-title", [
                _vm._v(
                  "\n        Order #" +
                    _vm._s(_vm.$store.state.Orders.receipt.transaction.id) +
                    "\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "center",
                [
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-title", [_vm._v("Item")]),
                          _vm._v(" "),
                          _c("v-list-item-title", [_vm._v("Unit Price")]),
                          _vm._v(" "),
                          _c("v-list-item-title", [_vm._v("Qty")]),
                          _vm._v(" "),
                          _c("v-list-item-title", [_vm._v("Tax")]),
                          _vm._v(" "),
                          _c("v-list-item-title", [_vm._v("Total")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _vm._l(_vm.$store.state.Orders.receipt.Products, function(
                        item,
                        index
                      ) {
                        return _c(
                          "v-list-item",
                          { key: index, attrs: { dense: "" } },
                          [
                            _c(
                              "v-list-item-title",
                              [
                                _c("v-text-field", {
                                  attrs: { readonly: "", solo: "", flat: "" },
                                  model: {
                                    value: item.item,
                                    callback: function($$v) {
                                      _vm.$set(item, "item", $$v)
                                    },
                                    expression: "item.item"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(
                                _vm._s(_vm._f("currency")(item.unit_price))
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(item.quantity))
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(_vm._f("currency")(item.tax)))
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(_vm._f("currency")(item.total)))
                            ])
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.$store.state.Orders.receipt.Services, function(
                        item,
                        index
                      ) {
                        return _c(
                          "v-list-item",
                          { key: index, attrs: { dense: "" } },
                          [
                            _c(
                              "v-list-item-title",
                              [
                                _c("v-text-field", {
                                  attrs: { readonly: "", solo: "", flat: "" },
                                  model: {
                                    value: item.item,
                                    callback: function($$v) {
                                      _vm.$set(item, "item", $$v)
                                    },
                                    expression: "item.item"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(
                                _vm._s(_vm._f("currency")(item.unit_price))
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(item.quantity))
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(_vm._f("currency")(item.tax)))
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(_vm._f("currency")(item.total)))
                            ])
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(
                        _vm.$store.state.Orders.receipt.Other_services,
                        function(item, index) {
                          return _c(
                            "v-list-item",
                            { key: index, attrs: { dense: "" } },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c("v-text-field", {
                                    attrs: { readonly: "", solo: "", flat: "" },
                                    model: {
                                      value: item.item,
                                      callback: function($$v) {
                                        _vm.$set(item, "item", $$v)
                                      },
                                      expression: "item.item"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(_vm._f("currency")(item.unit_price))
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(item.quantity))
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm._f("currency")(item.tax)))
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm._f("currency")(item.total)))
                              ])
                            ],
                            1
                          )
                        }
                      ),
                      _vm._v(" "),
                      _vm._l(
                        _vm.$store.state.Orders.receipt.Locations,
                        function(item, index) {
                          return _c(
                            "v-list-item",
                            { key: index, attrs: { dense: "" } },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c("v-text-field", {
                                    attrs: { readonly: "", solo: "", flat: "" },
                                    model: {
                                      value: item.item,
                                      callback: function($$v) {
                                        _vm.$set(item, "item", $$v)
                                      },
                                      expression: "item.item"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(_vm._f("currency")(item.unit_price))
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(item.quantity))
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm._f("currency")(item.tax)))
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(_vm._f("currency")(item.total)))
                              ])
                            ],
                            1
                          )
                        }
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.$store.state.Orders.receipt.Trial, function(
                        item,
                        index
                      ) {
                        return _c(
                          "v-list-item",
                          { key: index, attrs: { dense: "" } },
                          [
                            _c(
                              "v-list-item-title",
                              [
                                _c("v-text-field", {
                                  attrs: { readonly: "", solo: "", flat: "" },
                                  model: {
                                    value: item.item,
                                    callback: function($$v) {
                                      _vm.$set(item, "item", $$v)
                                    },
                                    expression: "item.item"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(
                                _vm._s(_vm._f("currency")(item.unit_price))
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(item.quantity))
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(_vm._f("currency")(item.tax)))
                            ]),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(_vm._f("currency")(item.total)))
                            ])
                          ],
                          1
                        )
                      })
                    ],
                    2
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Orders/Receipt.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Orders/Receipt.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Receipt_vue_vue_type_template_id_2f0788a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receipt.vue?vue&type=template&id=2f0788a4& */ "./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=template&id=2f0788a4&");
/* harmony import */ var _Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receipt.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Receipt_vue_vue_type_template_id_2f0788a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Receipt_vue_vue_type_template_id_2f0788a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Orders/Receipt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=template&id=2f0788a4&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=template&id=2f0788a4& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_2f0788a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt.vue?vue&type=template&id=2f0788a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Orders/Receipt.vue?vue&type=template&id=2f0788a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_2f0788a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_2f0788a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);