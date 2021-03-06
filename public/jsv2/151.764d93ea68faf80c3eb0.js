(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[151],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "product-details",
  data: function data() {
    return {
      option: {
        price: 0.0,
        available: 0,
        quantities: [],
        order_quantity: 0
      }
    };
  },
  methods: {
    in_array: function in_array(value, arr) {
      var status = false;

      for (var i = 0; i < arr.length; i++) {
        var name = arr[i];

        if (name == value) {
          status = true;
          break;
        }
      }

      return status;
    },
    selected_option: function selected_option(e) {
      e.max_qty > 0 ? e.order_quantity = 1 : e.order_quantity = 0;
      this.option = e;
    },
    close: function close() {
      this.$store.commit("MOTOR_CITY", {});
      this.$store.commit("MOTOR_CITY_OPEN", false);
    },
    ebd: function ebd(price) {
      return price - price * .1;
    },
    add_cart: function add_cart() {
      var _this = this;

      var price = this.option.price;
      var quantity = this.option.max_qty;
      var vat = 5;
      var tax = vat / 100;
      var price_excl = price / (tax + 1);
      var total_price_excl = price_excl * quantity;
      var total_price = price * quantity;
      var total_tax = total_price_excl * tax;
      var discount_percent = 0;
      var discount = 0;

      if (this.$store.state.Date_ranges.store_setup.motorcity_lesson_ebd.value && !this.in_array(this.option.product_id, [3777, 3838, 3881, 3778, 3839, 3882, 3950, 3951, 3952, 3953])) {
        discount = total_price - this.ebd(total_price);
        discount_percent = 10;
        total_price_excl = this.ebd(total_price_excl);
        total_price = this.ebd(total_price);
        total_tax = this.ebd(total_tax);
      }

      var cart = {
        notes: "",
        type: "Motor City",
        product_category: "Service",
        product_id: this.$store.state.Motor_city.product.classid,
        product_image: this.$store.state.Motor_city.product.image !== null ? this.$store.state.Motor_city.product.image.image_name : '',
        product_limit: this.option.max_limit,
        product_name: this.$store.state.Motor_city.product.classname,
        product_xero: this.$store.state.Motor_city.product.xero,
        product_quantity: this.option.max_qty,
        product_option: {
          cid: {
            id: 0,
            name: ""
          },
          selected_id: 0,
          date_end: this.option.date_end,
          date_start: this.option.date_start,
          discount: discount,
          discountPercent: discount_percent,
          id: this.option.product_id,
          option_name: this.option.item,
          price: price,
          price_excl: price_excl,
          quantity: quantity,
          total_excl: total_price_excl,
          total_incl: total_price,
          vat: total_tax,
          week_id: this.option.week_id
        }
      };
      var exist_item = this.$store.state.Carts.carts.find(function (product) {
        return product.product_id == _this.$store.state.Motor_city.product.ProductID && product.product_option.id == _this.option.product_id;
      });
      this.$store.commit("CARTS", cart);
      localStorage.setItem("traesdhes", JSON.stringify(this.$store.state.Carts.carts));
      var snackbar = {
        snackbar: true,
        vertical: true,
        timeout: 2000,
        color: "blue lighten-2",
        dark: true,
        top: true,
        bottom: false,
        centered: true,
        left: false,
        right: false,
        text: "".concat(this.$store.state.Motor_city.product.classname, " (").concat(this.option.item, ") successfully added to your cart!")
      };
      this.$store.commit("SNACKBAR", snackbar);
      this.close();
    },
    is_valid: function is_valid(e) {
      var valid = Object.keys(e).length > 4;

      if (valid) {
        e.max_limit > 0 ? valid = true : valid = false;
      }

      return valid;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=template&id=3e9a9e9a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=template&id=3e9a9e9a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "1000", persistent: "" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.$store.state.Motor_city.open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Motor_city, "open", $$v)
        },
        expression: "$store.state.Motor_city.open"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c("v-img", {
                        attrs: {
                          src:
                            _vm.$store.state.Motor_city.product.image !== null
                              ? "/img/products/" +
                                _vm.$store.state.Motor_city.product.image
                                  .image_name
                              : ""
                        }
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "title text-center mt-2" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$store.state.Motor_city.product.ProductName
                            ) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items:
                            _vm.$store.state.Motor_city.product.option_name,
                          "item-text": "item",
                          label: "Select Option",
                          "return-object": "",
                          solo: ""
                        },
                        on: { change: _vm.selected_option }
                      }),
                      _vm._v(" "),
                      Object.keys(_vm.option).length > 4
                        ? [
                            !_vm.$store.state.Date_ranges.store_setup
                              .motorcity_lesson_ebd.value ||
                            _vm.in_array(_vm.option.product_id, [
                              3777,
                              3838,
                              3881,
                              3778,
                              3839,
                              3882,
                              3950,
                              3951,
                              3952,
                              3953
                            ])
                              ? _c("p", [
                                  _vm._v(
                                    "Price: " +
                                      _vm._s(
                                        _vm._f("currency")(_vm.option.price)
                                      )
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$store.state.Date_ranges.store_setup
                              .motorcity_lesson_ebd.value &&
                            !_vm.in_array(_vm.option.product_id, [
                              3777,
                              3838,
                              3881,
                              3778,
                              3839,
                              3882,
                              3950,
                              3951,
                              3952,
                              3953
                            ])
                              ? _c("p", [
                                  _vm._v(
                                    "Price: " +
                                      _vm._s(
                                        _vm._f("currency")(
                                          _vm.ebd(_vm.option.price)
                                        )
                                      ) +
                                      " "
                                  ),
                                  _vm.option.price > 0
                                    ? _c(
                                        "sup",
                                        { staticStyle: { color: "red" } },
                                        [
                                          _c("del", [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.option.price
                                                  )
                                                ) +
                                                " "
                                            )
                                          ]),
                                          _vm._v(" 10% off EBD")
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Available: " +
                                  _vm._s(
                                    _vm.option.max_limit > 0
                                      ? _vm.option.max_limit
                                      : "FULL"
                                  )
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Number of weeks: " + _vm._s(_vm.option.max_qty)
                              )
                            ])
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "10" } }, [
                    _c("p", { staticClass: "font-weight-bold" }, [
                      _vm._v("Description:")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.$store.state.Motor_city.product.classnotes
                        )
                      }
                    })
                  ])
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
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "text-none primary",
                  attrs: { large: "", disabled: !_vm.is_valid(_vm.option) },
                  on: { click: _vm.add_cart }
                },
                [
                  _c("v-icon", [_vm._v(" mdi-cart ")]),
                  _vm._v("\n        Add to cart\n      ")
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

/***/ "./resources/js/components/Components/Shops/MotorCity/Details.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/MotorCity/Details.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_3e9a9e9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=3e9a9e9a& */ "./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=template&id=3e9a9e9a&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_3e9a9e9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_3e9a9e9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Shops/MotorCity/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=template&id=3e9a9e9a&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=template&id=3e9a9e9a& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_3e9a9e9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=3e9a9e9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/MotorCity/Details.vue?vue&type=template&id=3e9a9e9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_3e9a9e9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_3e9a9e9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);