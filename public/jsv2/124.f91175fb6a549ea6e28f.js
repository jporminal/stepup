(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Details.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Checkout/Details.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
  name: "checkout-details",
  data: function data() {
    return {
      countries: ["United Arab Emirates"],
      towns: ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al-Khaimah", "Sharjah", "Umm Al-Quwain"]
    };
  },
  methods: {
    bill: function bill() {
      this.$store.commit("CHECKOUT_BILLING", this.$store.state.Carts.billing);
    }
  },
  computed: {
    billing: function billing() {
      var billing = {
        mid: this.$store.state.Carts.parent.mid,
        first_name: this.$store.state.Carts.parent.motherfirstname,
        family_name: this.$store.state.Carts.parent.motherlastname,
        phone: this.$store.state.Carts.parent.motherhomenumber,
        email: this.$store.state.Carts.parent.motheremailaddress,
        country: "United Arab Emirates",
        town: "Dubai",
        street: "",
        apartment: "",
        notes: ""
      };
      this.$store.commit("CHECKOUT_BILLING", billing);
      return billing;
    },
    is_product: function is_product() {
      var camps = this.$store.state.Carts.carts.filter(function (cart) {
        return cart.type == "Product";
      });
      return camps.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Details.vue?vue&type=template&id=a629ef92&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Checkout/Details.vue?vue&type=template&id=a629ef92& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            { attrs: { color: "blue lighten-2", dark: "", flat: "" } },
            [_c("v-toolbar-title", [_vm._v(" Billing Address ")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              model: {
                value: _vm.$store.state.Carts.valid_details,
                callback: function($$v) {
                  _vm.$set(_vm.$store.state.Carts, "valid_details", $$v)
                },
                expression: "$store.state.Carts.valid_details"
              }
            },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "First name",
                              rules: [
                                function(v) {
                                  return !!v || "First name is required"
                                }
                              ],
                              "append-icon": "*"
                            },
                            on: { input: _vm.bill },
                            model: {
                              value: _vm.billing.first_name,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "first_name", $$v)
                              },
                              expression: "billing.first_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Family name",
                              rules: [
                                function(v) {
                                  return !!v || "Family name is required"
                                }
                              ],
                              "append-icon": "*"
                            },
                            on: { input: _vm.bill },
                            model: {
                              value: _vm.billing.family_name,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "family_name", $$v)
                              },
                              expression: "billing.family_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Phone",
                              rules: [
                                function(v) {
                                  return !!v || "Phone is required"
                                }
                              ],
                              "append-icon": "*"
                            },
                            on: { input: _vm.bill },
                            model: {
                              value: _vm.billing.phone,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "phone", _vm._n($$v))
                              },
                              expression: "billing.phone"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Email Address",
                              rules: [
                                function(v) {
                                  return !!v || "Email is Required"
                                },
                                function(v) {
                                  return (
                                    /.+@.+/.test(v) || "E-mail must be valid"
                                  )
                                }
                              ],
                              "append-icon": "*"
                            },
                            on: { input: _vm.bill },
                            model: {
                              value: _vm.billing.email,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "email", $$v)
                              },
                              expression: "billing.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-subheader", { staticClass: "title" }, [
                            _vm._v(" Address ")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-select", {
                            attrs: { items: _vm.countries, label: "Country" },
                            on: { change: _vm.bill },
                            model: {
                              value: _vm.billing.country,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "country", $$v)
                              },
                              expression: "billing.country"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-select", {
                            attrs: { items: _vm.towns, label: "Town" },
                            on: { change: _vm.bill },
                            model: {
                              value: _vm.billing.town,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "town", $$v)
                              },
                              expression: "billing.town"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Street",
                              rules: [
                                function(v) {
                                  return !!v || "Street is required"
                                }
                              ],
                              "append-icon": "*"
                            },
                            on: { input: _vm.bill },
                            model: {
                              value: _vm.billing.street,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "street", $$v)
                              },
                              expression: "billing.street"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Apartment, suite, unit, etc.",
                              hint: "(optional)",
                              "persistent-hint": ""
                            },
                            on: { input: _vm.bill },
                            model: {
                              value: _vm.billing.apartment,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "apartment", $$v)
                              },
                              expression: "billing.apartment"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              label: "Notes",
                              hint:
                                "(Please put your child(s) name here and class he/she will be attending/ Notes)",
                              "persistent-hint": ""
                            },
                            on: { input: _vm.bill },
                            model: {
                              value: _vm.billing.notes,
                              callback: function($$v) {
                                _vm.$set(_vm.billing, "notes", $$v)
                              },
                              expression: "billing.notes"
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

/***/ "./resources/js/components/Components/Checkout/Details.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Details.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_a629ef92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=a629ef92& */ "./resources/js/components/Components/Checkout/Details.vue?vue&type=template&id=a629ef92&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Checkout/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_a629ef92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_a629ef92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Checkout/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Checkout/Details.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Details.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Checkout/Details.vue?vue&type=template&id=a629ef92&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Details.vue?vue&type=template&id=a629ef92& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_a629ef92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=a629ef92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Details.vue?vue&type=template&id=a629ef92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_a629ef92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_a629ef92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);