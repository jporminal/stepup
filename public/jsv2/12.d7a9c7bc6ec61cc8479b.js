(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "receipt-view",
  data: function data() {
    return {
      email: null,
      loading: false
    };
  },
  methods: {
    print: function print() {
      var print = this.$refs.print.outerHTML;
      this.$print(print, 1);
    },
    close: function close() {
      this.$store.dispatch("RECEIPT", {});
      this.$store.commit("RECEIPT_OPEN_VIEWER", false);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-application p[data-v-677b9a7a] {\n  margin-bottom: 0px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=template&id=677b9a7a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=template&id=677b9a7a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "800" },
      on: { "Click:outside": _vm.close },
      model: {
        value: _vm.$store.state.Receipts.receipt_open_viewer,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Receipts, "receipt_open_viewer", $$v)
        },
        expression: "$store.state.Receipts.receipt_open_viewer"
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
                  "\n        Receipt# " +
                    _vm._s(_vm.$store.state.Orders.receipt.transaction.id) +
                    "\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", { ref: "print" }, [
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v("StepUp Academy")
            ]),
            _vm._v(" "),
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v("113 Apex Atrium Motor City, Dubai, UAE")
            ]),
            _vm._v(" "),
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v("04 453 4360")
            ]),
            _vm._v(" "),
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v("info@stepup.ae")
            ]),
            _vm._v(" "),
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v("https://stepup.ae")
            ]),
            _vm._v(" "),
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v("TRN: 1002540945100003")
            ]),
            _vm._v(" "),
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v("Tax Invoice")
            ]),
            _vm._v(" "),
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v(
                "\n        Invoice #: STEP-" +
                  _vm._s(_vm.$store.state.Orders.receipt.transaction.id) +
                  "\n      "
              )
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("p", { staticStyle: { "text-align": "center" } }, [
              _vm._v(
                "\n        Date Purchased:\n        " +
                  _vm._s(
                    _vm._f("date")(
                      _vm.$store.state.Orders.receipt.transaction.created_at
                    )
                  ) +
                  "\n      "
              )
            ]),
            _vm._v(" "),
            _c(
              "table",
              {
                staticStyle: {
                  width: "100%",
                  border: "1px solid black",
                  "border-collapse": "collapse"
                }
              },
              [
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "border-bottom": "1px solid black",
                        width: "50%"
                      }
                    },
                    [_vm._v("Product")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticStyle: { "border-bottom": "1px solid black" } },
                    [_vm._v("Rate Incl Vat")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticStyle: { "border-bottom": "1px solid black" } },
                    [_vm._v("Qty")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticStyle: { "border-bottom": "1px solid black" } },
                    [_vm._v("VAT")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticStyle: { "border-bottom": "1px solid black" } },
                    [_vm._v("Disc")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticStyle: { "border-bottom": "1px solid black" } },
                    [_vm._v("Total Incl Vat")]
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.$store.state.Orders.receipt.Products, function(
                  item,
                  index
                ) {
                  return _c("tr", { key: index }, [
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "left"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.item) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.unit_price) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.quantity) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.tax) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.discount) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.total) + "\n          "
                        )
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.$store.state.Orders.receipt.Services, function(
                  item,
                  index
                ) {
                  return _c("tr", { key: index + 100 }, [
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "left"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.item) +
                            "\n            " +
                            _vm._s(
                              item.service_price
                                ? item.service_price.serviceName
                                : ""
                            ) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.unit_price) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.quantity) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.tax) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.discount) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.total) + "\n          "
                        )
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.$store.state.Orders.receipt.Other_services, function(
                  item,
                  index
                ) {
                  return _c("tr", { key: index + 200 }, [
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "left"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.item) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.unit_price) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.quantity) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.tax) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.discount) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.total) + "\n          "
                        )
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.$store.state.Orders.receipt.Locations, function(
                  item,
                  index
                ) {
                  return _c("tr", { key: index + 300 }, [
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "left"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.item) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.unit_price) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.quantity) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.tax) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.discount) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.total) + "\n          "
                        )
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.$store.state.Orders.receipt.Trial, function(
                  item,
                  index
                ) {
                  return _c("tr", { key: index + 400 }, [
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "left"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.item) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.unit_price) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.quantity) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.tax) + "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.discount) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "text-align": "center"
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(item.total) + "\n          "
                        )
                      ]
                    )
                  ])
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("table", { staticStyle: { width: "100%" } }, [
              _c("tr", [
                _c("td", { staticStyle: { width: "60%" } }),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [_vm._v("Taxable:")]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm._f("currency")(
                          _vm.$store.state.Orders.receipt.transaction
                            .amount_excl
                        )
                      ) +
                      "\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.$store.state.Orders.receipt.transaction.discount > 0
                ? _c("tr", [
                    _c("td", { staticStyle: { width: "60%" } }),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Discount:")]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "text-align": "right" } }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm._f("currency")(
                              _vm.$store.state.Orders.receipt.transaction
                                .discount
                            )
                          ) +
                          "\n          "
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticStyle: { width: "60%" } }),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [_vm._v("Vat 5%:")]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm._f("currency")(
                          _vm.$store.state.Orders.receipt.transaction.vat
                        )
                      ) +
                      "\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticStyle: { width: "60%" } }),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [_vm._v("Total Incl Vat:")]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm._f("currency")(
                          _vm.$store.state.Orders.receipt.transaction
                            .amount_incl
                        )
                      ) +
                      "\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", { staticStyle: { width: "60%" } }),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [_vm._v("Paid:")]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.$store.state.Orders.receipt.transaction.payment_type
                      ) +
                      "\n          "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "text-none primary", on: { click: _vm.print } },
                [_c("v-icon", [_vm._v("mdi-printer")]), _vm._v(" Print")],
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

/***/ "./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Receipt_vue_vue_type_template_id_677b9a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receipt.vue?vue&type=template&id=677b9a7a&scoped=true& */ "./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=template&id=677b9a7a&scoped=true&");
/* harmony import */ var _Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receipt.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Receipt_vue_vue_type_style_index_0_id_677b9a7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true& */ "./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Receipt_vue_vue_type_template_id_677b9a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Receipt_vue_vue_type_template_id_677b9a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "677b9a7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Receipts/Receipt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_style_index_0_id_677b9a7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=style&index=0&id=677b9a7a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_style_index_0_id_677b9a7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_style_index_0_id_677b9a7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_style_index_0_id_677b9a7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_style_index_0_id_677b9a7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_style_index_0_id_677b9a7a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=template&id=677b9a7a&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=template&id=677b9a7a&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_677b9a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt.vue?vue&type=template&id=677b9a7a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue?vue&type=template&id=677b9a7a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_677b9a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_677b9a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);