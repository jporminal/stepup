(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "receipts",
  components: {
    my_update_status: function my_update_status() {
      return __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! ./Update_status */ "./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue"));
    },
    my_receipt: function my_receipt() {
      return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./Receipt */ "./resources/js/components/Components/Authtenticated/Receipts/Receipt.vue"));
    }
  },
  data: function data() {
    return {
      options: {},
      headers: [{
        text: "Order#",
        value: "id",
        align: "center",
        sortable: false
      }, {
        text: "Customer",
        value: "customer",
        align: "center",
        sortable: false
      }, {
        text: "Exclusive of VAT",
        value: "taxable",
        align: "center",
        sortable: false
      }, {
        text: "VAT 5%",
        value: "vat",
        align: "center",
        sortable: false
      }, {
        text: "Total",
        value: "total",
        align: "center",
        sortable: false
      }, {
        text: "Notes",
        value: "notes",
        align: "center",
        sortable: false
      }, {
        text: "Status",
        value: "status",
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
          filter: this.$store.state.Receipts.receipt_filter.filter,
          page: e.page,
          per_page: e.itemsPerPage
        };
        this.$store.commit("RECEIPT_FILTER", filter);

        if (this.$store.state.Receipts.receipt_filter.filter) {
          this.$store.dispatch("RECEIPT_FILTER", this.$store.state.Receipts.receipt_filter);
        } else {
          this.pagination();
        }
      },
      deep: true
    }
  },
  methods: {
    receipt: function receipt(e) {
      this.$store.dispatch("RECEIPT", e);
      this.$store.commit("RECEIPT_OPEN_VIEWER", true);
    },
    import_to_xero: function import_to_xero(e) {
      var _this = this;

      this.$store.dispatch("RECEIPT", e).then(function (result) {
        _this.$store.dispatch('IMPORT_TO_XERO', {
          token: _this.$store.state.Xero.xero_token,
          tenant_id: _this.$store.state.Xero.xero_tenants,
          xero: result.data
        }).then(function (result) {
          var snackbar = {
            snackbar: true,
            vertical: false,
            timeout: 2000,
            color: "blue ligten-2",
            dark: true,
            top: true,
            bottom: false,
            centered: true,
            left: false,
            right: false,
            text: "Successfully imported"
          };

          _this.$store.commit("SNACKBAR", snackbar);

          _this.pagination();
        })["catch"](function (err) {
          console.log(err);
        });
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
          text: "Xero token already expired bro!"
        };

        _this.$store.commit("SNACKBAR", snackbar);
      });
    },
    update_receipt: function update_receipt(e) {
      this.$store.commit("RECEIPT_ITEMS", e);
      this.$store.commit("RECEIPT_UPDATE_STATUS_OPEN", true);
    },
    pagination: function pagination() {
      this.$store.commit("RECEIPT_LOADER", true);
      this.$store.dispatch("RECEIPTS", this.$store.state.Receipts.receipt_filter);
    },
    filter_receipts: function filter_receipts(e) {
      if (e.length > 0) {
        var filter = {
          filter: e,
          page: this.$store.state.Receipts.receipt_filter.page,
          per_page: this.$store.state.Receipts.receipt_filter.per_page
        };
        this.$store.commit("RECEIPT_FILTER", filter);
        this.options = {
          page: 1,
          per_page: 10
        };
        this.$store.dispatch("RECEIPT_FILTER", this.$store.state.Receipts.receipt_filter);
      }

      if (e.length == 0) {
        var _filter = {
          filter: null,
          page: this.$store.state.Receipts.receipt_filter.page,
          per_page: this.$store.state.Receipts.receipt_filter.per_page
        };
        this.$store.commit("RECEIPT_FILTER", _filter);
        this.pagination();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=template&id=55b19d5a&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=template&id=55b19d5a& ***!
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
    "v-card",
    [
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.$store.state.Receipts.receipts.data,
          "server-items-length": _vm.$store.state.Receipts.receipts.total,
          loading: _vm.$store.state.Receipts.receipt_loader,
          options: _vm.options,
          "items-per-page": 25,
          "footer-props": {
            "items-per-page-options": [25, 35, 50],
            "items-per-page-text": "Receipts per page",
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
            key: "item.taxable",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " + _vm._s(_vm._f("currency")(item.excl)) + "\n    "
                )
              ]
            }
          },
          {
            key: "item.vat",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " + _vm._s(_vm._f("currency")(item.vat)) + "\n    "
                )
              ]
            }
          },
          {
            key: "item.total",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm._f("currency")(item.amount_incl)) +
                    "\n    "
                )
              ]
            }
          },
          {
            key: "item.status",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "p",
                  {
                    class:
                      item.status == "completed"
                        ? "success white--text"
                        : item.status == "cancelled"
                        ? "error white--text"
                        : "primary white--text",
                    attrs: { dark: "" }
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm._f("toUpper")(item.status)) +
                        "\n      "
                    )
                  ]
                )
              ]
            }
          },
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { color: "blue lighten-2 white--text", flat: "" } },
                  [
                    _c("v-toolbar-title", [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.$route.name == "receipts" ? "Receipts" : "Xero"
                          ) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticClass: "mt-6",
                      attrs: { label: "Receipt Number", solo: "" },
                      on: { input: _vm.filter_receipts }
                    })
                  ],
                  1
                )
              ]
            },
            proxy: true
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
                                          return _vm.update_receipt(item)
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
                                    "\n            mdi-file-document-edit-outline\n          "
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
                        " Update status of receipt# " + _vm._s(item.id) + " "
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
                                          return _vm.receipt(item.id)
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
                                    "\n            mdi-receipt\n          "
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
                      _vm._v(" View receipt# " + _vm._s(item.id) + " ")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm.$route.name == "xero" && item.xero == null
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
                                          attrs: { small: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.import_to_xero(item.id)
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
                                        "\n            mdi-file-import\n          "
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
                          _vm._v(" Import to Xero " + _vm._s(item.id) + " ")
                        ])
                      ]
                    )
                  : _vm._e()
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _vm.$store.state.Receipts.receipt_update_status_open
        ? _c("my_update_status")
        : _vm._e(),
      _vm._v(" "),
      _vm.$store.state.Receipts.receipt_open_viewer
        ? _c("my_receipt")
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/View.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/View.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_55b19d5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=55b19d5a& */ "./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=template&id=55b19d5a&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_55b19d5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_55b19d5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Receipts/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=template&id=55b19d5a&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=template&id=55b19d5a& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_55b19d5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=55b19d5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/View.vue?vue&type=template&id=55b19d5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_55b19d5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_55b19d5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);