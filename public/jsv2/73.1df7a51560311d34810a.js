(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "payment-by-schedules",
  methods: {
    print: function print() {
      window.print();
    },
    excel: function excel() {
      this.$excel("excel", "Payment By Schedules ".concat(this.date_title));
    }
  },
  computed: {
    date_title: function date_title() {
      return this.$store.state.Reports.payment_by_schedule_filter.dates.join(" ~ ");
    },
    total_payment: function total_payment() {
      return this.$store.state.Reports.payment_by_schedules.reduce(function (total, item) {
        return total + Number(item.total);
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=template&id=ced3661e&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=template&id=ced3661e& ***!
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
  return _vm.$store.state.Reports.payment_by_schedules.length > 0
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
              _vm._v("Payment By Schedules")
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
                        _c("v-list-item-avatar", { attrs: { width: "5%" } }, [
                          _vm._v(" Invoice ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "10%" } }, [
                          _vm._v(" Customer Name ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "10%" } }, [
                          _vm._v(" Date ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "10%" } }, [
                          _vm._v(" Payment ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "15%" } }, [
                          _vm._v(" Lesson ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "10%" } }, [
                          _vm._v(" Venue ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "10%" } }, [
                          _vm._v(" Day ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "15%" } }, [
                          _vm._v(" Time ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "15%" } }, [
                          _vm._v(" Teacher ")
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-avatar", { attrs: { width: "10%" } }, [
                          _vm._v(" Total ")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _vm._l(
                      _vm.$store.state.Reports.payment_by_schedules,
                      function(item, index) {
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
                                    { attrs: { tile: "", width: "5%" } },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(item.sale_id) +
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
                                        "\n                " +
                                          _vm._s(item.firstname) +
                                          " " +
                                          _vm._s(item.lastname) +
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
                                        "\n                " +
                                          _vm._s(
                                            _vm._f("date")(item.created_at)
                                          ) +
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
                                        "\n                " +
                                          _vm._s(item.payment_type) +
                                          "\n              "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-avatar",
                                    { attrs: { tile: "", width: "15%" } },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(item.lesson) +
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
                                        "\n                " +
                                          _vm._s(item.location) +
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
                                        "\n                " +
                                          _vm._s(item.day) +
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
                                        "\n                " +
                                          _vm._s(item.time) +
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
                                        "\n                " +
                                          _vm._s(item.teacher) +
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
                                        "\n                " +
                                          _vm._s(item.total) +
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
                      }
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      [
                        _c("v-list-item-avatar", {
                          attrs: { tile: "", width: "5%" }
                        }),
                        _vm._v(" "),
                        _c("v-list-item-avatar", {
                          attrs: { tile: "", width: "5%" }
                        }),
                        _vm._v(" "),
                        _c("v-list-item-avatar", {
                          attrs: { tile: "", width: "5%" }
                        }),
                        _vm._v(" "),
                        _c("v-list-item-avatar", {
                          attrs: { tile: "", width: "5%" }
                        }),
                        _vm._v(" "),
                        _c("v-list-item-avatar", {
                          attrs: { tile: "", width: "5%" }
                        }),
                        _vm._v(" "),
                        _c("v-list-item-avatar", {
                          attrs: { tile: "", width: "5%" }
                        }),
                        _vm._v(" "),
                        _c("v-list-item-avatar", {
                          attrs: { tile: "", width: "15%" }
                        }),
                        _vm._v(" "),
                        _c(
                          "v-list-item-avatar",
                          { attrs: { tile: "", width: "15%" } },
                          [_vm._v("Total")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-avatar",
                          { attrs: { tile: "", width: "40%" } },
                          [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-h5 font-weight-bold red--text"
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm._f("currency")(_vm.total_payment)
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
                    _c("th", [_vm._v("Invoice")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Date")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Payment Type")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Lesson")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Venue")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Day")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Time")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Teacher")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Total")])
                  ]),
                  _vm._v(" "),
                  _vm._l(
                    _vm.$store.state.Reports.payment_by_schedules,
                    function(item, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [_vm._v(_vm._s(item.sale_id))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(item.firstname) + " " + _vm._s(item.lastname)
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm._f("date")(item.created_at)))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.payment_type))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.lesson))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.location))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.day))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.time))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.teacher))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.total))])
                      ])
                    }
                  ),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("currency")(_vm.total_payment)))
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

/***/ "./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_ced3661e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=ced3661e& */ "./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=template&id=ced3661e&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_ced3661e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_ced3661e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=template&id=ced3661e&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=template&id=ced3661e& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_ced3661e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=ced3661e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Reports/Payment_by_schedules/View.vue?vue&type=template&id=ced3661e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_ced3661e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_ced3661e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);