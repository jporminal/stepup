(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
function myFunction() {
  alert("You are about to print this document!");
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "payment-by-schedules",
  methods: {
    print: function print() {
      window.print();
    },
    excel: function excel() {
      this.$excel("excel", "Product Sales ".concat(this.date_title));
    }
  },
  computed: {
    date_title: function date_title() {
      return this.$store.state.Reports.product_sale_filter.dates.join(" ~ ");
    },
    total_price: function total_price() {
      return this.$store.state.Reports.product_sales.reduce(function (total, item) {
        return total + Number(item.price);
      }, 0);
    },
    total_discount: function total_discount() {
      return this.$store.state.Reports.product_sales.reduce(function (total, item) {
        return total + Number(item.discount);
      }, 0);
    },
    total_VAT: function total_VAT() {
      return this.$store.state.Reports.product_sales.reduce(function (total, item) {
        return total + Number(item.VAT);
      }, 0);
    },
    total_Taxable: function total_Taxable() {
      return this.$store.state.Reports.product_sales.reduce(function (total, item) {
        return total + Number(item.Taxable);
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=template&id=d32bf944&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=template&id=d32bf944& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.$store.state.Reports.product_sales.length > 0
    ? _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c(
            "v-card-actions",
            { staticClass: "d-print-none" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "text-none",
                  attrs: { small: "" },
                  on: { click: _vm.excel }
                },
                [
                  _c("v-icon", [_vm._v("mdi-microsoft-excel")]),
                  _vm._v(" Excel")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "text-none",
                  attrs: { small: "" },
                  on: { click: _vm.print }
                },
                [_c("v-icon", [_vm._v("mdi-printer")]), _vm._v(" Print")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c("v-avatar", { attrs: { tile: "", size: "250" } }, [
                  _c("img", { attrs: { src: "/img/logoStepUp.png" } })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "text-h5 font-weight-bold text-center" }, [
              _vm._v("Product Sales")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-h6 font-weight-bold text-center" }, [
              _vm._v("\n      Date: " + _vm._s(_vm.date_title) + "\n    ")
            ])
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "div",
              [
                _c(
                  "v-list",
                  { attrs: { shaped: "" } },
                  [
                    _c(
                      "v-list-item",
                      [
                        _c("v-list-item-avatar", { attrs: { width: "20%" } }, [
                          _vm._v(" Product ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "20%" } }, [
                          _vm._v(" Discount ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "20%" } }, [
                          _vm._v(" VAT ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "20%" } }, [
                          _vm._v(" Taxable ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "20%" } }, [
                          _vm._v(" Price ")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _vm._l(_vm.$store.state.Reports.product_sales, function(
                      item,
                      index
                    ) {
                      return [
                        _c(
                          "div",
                          { key: index },
                          [
                            _c(
                              "v-list-item",
                              [
                                _c(
                                  "v-list-item-avatar",
                                  { attrs: { tile: "", width: "20%" } },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(item.name) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-avatar",
                                  { attrs: { tile: "", width: "20%" } },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm._f("currency")(item.discount)
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-avatar",
                                  { attrs: { tile: "", width: "20%" } },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm._f("currency")(item.VAT)) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-avatar",
                                  { attrs: { tile: "", width: "20%" } },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm._f("currency")(item.Taxable)
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-avatar",
                                  { attrs: { tile: "", width: "20%" } },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm._f("currency")(item.price)) +
                                        "\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-divider")
                          ],
                          1
                        )
                      ]
                    }),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      [
                        _c("v-list-item-avatar", {
                          attrs: { tile: "", width: "20%" }
                        }),
                        _vm._v(" "),
                        _c(
                          "v-list-item-avatar",
                          { attrs: { tile: "", width: "20%" } },
                          [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-h6 font-weight-bold red--text"
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm._f("currency")(_vm.total_discount)
                                    ) +
                                    "\n            "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-avatar",
                          { attrs: { tile: "", width: "20%" } },
                          [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-h6 font-weight-bold red--text"
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm._f("currency")(_vm.total_VAT)) +
                                    "\n            "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-avatar",
                          { attrs: { tile: "", width: "20%" } },
                          [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-h6 font-weight-bold red--text"
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm._f("currency")(_vm.total_Taxable)
                                    ) +
                                    "\n            "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-avatar",
                          { attrs: { tile: "", width: "20%" } },
                          [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-h6 font-weight-bold red--text"
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm._f("currency")(_vm.total_price)
                                    ) +
                                    "\n            "
                                )
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-none", attrs: { id: "excel" } }, [
              _c(
                "table",
                [
                  _c("tr", [
                    _c("th", [_vm._v("Product")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Discount")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("VAT")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Taxable")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Price")])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.$store.state.Reports.product_sales, function(
                    item,
                    index
                  ) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("currency")(item.discount)))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm._f("currency")(item.VAT)))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("currency")(item.Taxable)))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm._f("currency")(item.price)))])
                    ])
                  }),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("currency")(_vm.total_discount)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("currency")(_vm.total_VAT)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("currency")(_vm.total_Taxable)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("currency")(_vm.total_price)))
                    ])
                  ])
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticStyle: { "page-break-after": "always" } })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_d32bf944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=d32bf944& */ "./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=template&id=d32bf944&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_d32bf944___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_d32bf944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=template&id=d32bf944&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=template&id=d32bf944& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_d32bf944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=d32bf944& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Product_sales/View.vue?vue&type=template&id=d32bf944&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_d32bf944___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_d32bf944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);