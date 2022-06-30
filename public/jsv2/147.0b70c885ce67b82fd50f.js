(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "product-details",
  data: function data() {
    return {
      option: {
        price: 0.0,
        available: 0,
        quantities: [],
        order_quantity: 0
      },
      price: {
        price: 0.0,
        quantity: 0
      }
    };
  },
  methods: {
    selected_option: function selected_option(e) {
      this.option = e;
    },
    selected_price: function selected_price(e) {
      e.quantity > 0 ? this.option.order_quantity = 1 : this.option.order_quantity = 0;
      this.price = e;
    },
    close: function close() {
      this.$store.commit("CAMP", {});
      this.$store.commit("CAMP_OPEN", false);
    },
    add_cart: function add_cart() {
      var _this = this;

      var price = this.price.price;
      var quantity = this.option.order_quantity;
      var vat = 5;
      var tax = vat / 100;
      var price_excl = price / (tax + 1);
      var total_price_excl = price_excl * quantity;
      var total_price = price * quantity;
      var total_tax = total_price_excl * tax;
      var discount_percent = 0;
      var discount = 0;
      var cart = {
        notes: "",
        type: "Camps",
        product_category: "Service",
        product_id: this.$store.state.Camps.product.classid,
        product_image: this.$store.state.Camps.product.image.image_name,
        product_limit: this.option.max_limit,
        product_name: this.$store.state.Camps.product.classname,
        product_xero: this.$store.state.Camps.product.xero,
        product_quantity: this.price.quantity,
        product_option: {
          cid: {
            id: 0,
            name: ""
          },
          date_end: this.option.date_end,
          date_start: this.option.date_start,
          discount: discount,
          discountPercent: discount_percent,
          id: this.option.product_id,
          option_id: this.price.id,
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
        return product.product_id == _this.$store.state.Camps.product.ProductID && product.product_option.id == _this.option.product_id;
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
        text: "".concat(this.$store.state.Camps.product.ProductName, " (").concat(this.option.item, ") successfully added to your cart!")
      };
      this.$store.commit("SNACKBAR", snackbar);
      this.close();
    },
    quantities: function quantities(e) {
      var qty = [];

      for (var i = 1; i <= e; i++) {
        qty.push(i);
      }

      return qty;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=template&id=a8a60776&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=template&id=a8a60776& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        value: _vm.$store.state.Camps.open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Camps, "open", $$v)
        },
        expression: "$store.state.Camps.open"
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
                            "https://dies.stepup.ae/public/img/products/" +
                            _vm.$store.state.Camps.product.image.image_name
                        }
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "title text-center mt-2" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$store.state.Camps.product.ProductName) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.$store.state.Camps.product.option_name,
                          "item-text": "item",
                          label: "Select Option",
                          "return-object": "",
                          solo: ""
                        },
                        on: { change: _vm.selected_option }
                      }),
                      _vm._v(" "),
                      (Object.keys(_vm.option).length > 4
                      ? true
                      : false)
                        ? _c("v-select", {
                            attrs: {
                              items:
                                _vm.$store.state.Camps.product.service_price,
                              "item-text": "serviceName",
                              label: "Select Option",
                              "return-object": "",
                              solo: ""
                            },
                            on: { change: _vm.selected_price }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Price: " +
                            _vm._s(_vm._f("currency")(_vm.price.price))
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("Available: " + _vm._s(_vm.price.quantity))
                      ])
                    ],
                    1
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
                          _vm.$store.state.Camps.product.classnotes
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
          (Object.keys(_vm.option).length > 4
          ? true
          : false)
            ? _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "text-none primary",
                      attrs: {
                        large: "",
                        disabled:
                          Object.keys(_vm.price).length > 2 ? false : true
                      },
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
            : _vm._e()
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

/***/ "./resources/js/components/Components/Shops/Camps/Details.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Camps/Details.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_a8a60776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=a8a60776& */ "./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=template&id=a8a60776&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_a8a60776___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_a8a60776___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Shops/Camps/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=template&id=a8a60776&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=template&id=a8a60776& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_a8a60776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=a8a60776& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Camps/Details.vue?vue&type=template&id=a8a60776&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_a8a60776___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_a8a60776___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);