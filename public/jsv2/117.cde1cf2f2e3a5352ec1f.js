(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Cart/Summary.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Cart/Summary.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "cart-summary",
  components: {
    my_camps: function my_camps() {
      return __webpack_require__.e(/*! import() */ 114).then(__webpack_require__.bind(null, /*! ./Forms/Camps */ "./resources/js/components/Components/Cart/Forms/Camps.vue"));
    }
  },
  methods: {
    proceed_checkout: function proceed_checkout() {
      if (this.is_camps > 0) {
        this.check_quantity();
        this.$store.commit("CART_CAMP_FORM", true);
      } else {
        this.check_quantity();
        this.$store.commit("CART_PROCESS", true);
      }
    },
    check_quantity: function check_quantity() {
      var _this = this;

      var products = this.$store.state.Carts.carts.forEach(function (element) {
        // console.log(element)
        var product = _this.$store.dispatch('CART_CHECK_QUANTITY', element).then(function (result) {
          console.log(result.data);
          var product = result.data;

          switch (element.type) {
            case 'Product':
              if (product.quantity >= element.product_option.quantity) {
                return;
              } else {
                // this.title.push(`item remove - ${element.product_name} out of stock`)
                _this.remove(element);
              }

              break;

            case 'Camps':
              if (product.quantity >= element.product_option.quantity) {
                return;
              } else {
                // this.title.push(`item remove - ${element.product_name} out of space`)
                _this.remove(element);
              }

              break;

            case 'Others':
              if (product.quantity >= element.product_option.quantity) {
                return;
              } else {
                // this.title.push(`item remove - ${element.product_name} out of space`)
                _this.remove(element);
              }

              break;

            case 'Urdang':
              if (product.quantity >= element.product_option.quantity) {
                return;
              } else {
                // this.title.push(`item remove - ${element.product_name} out of space`)
                _this.remove(element);
              }

              break;

            case 'Motor City':
              if (product.quantity >= 1) {
                return;
              } else {
                // this.title.push(`item remove - ${element.product_name} out of space`)
                _this.remove(element);
              }

              break;

            case 'Foremarke':
              if (product.quantity >= 1) {
                return;
              } else {
                // this.title.push(`item remove - ${element.product_name} out of space`)
                _this.remove(element);
              }

              break;

            case 'Akoya':
              if (product.quantity >= 1) {
                return;
              } else {
                // this.title.push(`item remove - ${element.product_name} out of space`)
                _this.remove(element);
              }

              break;
          }
        });
      });
    },
    remove: function remove(item) {
      var index = this.$store.state.Carts.carts.indexOf(item);
      this.$store.state.Carts.carts.splice(index, 1);
      localStorage.setItem("traesdhes", JSON.stringify(this.$store.state.Carts.carts));
    }
  },
  computed: {
    subtotal: function subtotal() {
      return this.$store.state.Carts.carts.reduce(function (total, item) {
        return total + item.product_option.total_excl;
      }, 0);
    },
    tax: function tax() {
      return this.$store.state.Carts.carts.reduce(function (total, item) {
        return total + item.product_option.vat;
      }, 0);
    },
    total: function total() {
      return this.$store.state.Carts.carts.reduce(function (total, item) {
        return total + item.product_option.total_incl;
      }, 0);
    },
    discount: function discount() {
      return this.$store.state.Carts.carts.reduce(function (total, item) {
        return total + item.product_option.discount;
      }, 0);
    },
    is_camps: function is_camps() {
      var camps = this.$store.state.Carts.carts.filter(function (cart) {
        return cart.type == "Camps";
      });
      return camps.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Cart/Summary.vue?vue&type=template&id=6ad37575&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Cart/Summary.vue?vue&type=template&id=6ad37575& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
          _vm.$store.state.Carts.camps ? _c("my_camps") : _vm._e(),
          _vm._v(" "),
          _c(
            "v-toolbar",
            { attrs: { color: "blue lighten-2", dark: "" } },
            [
              _c("v-toolbar-title", { staticClass: "title" }, [
                _vm._v("Summary")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-list",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-list-item",
                    [
                      _c("v-list-item-title", { staticClass: "cart_summary" }, [
                        _vm._v("\n            Taxable\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-title", [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm._f("currency")(_vm.subtotal)) +
                            "\n          "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.discount > 0
                    ? _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "cart_summary" },
                            [_vm._v("\n            Discount\n          ")]
                          ),
                          _vm._v(" "),
                          _c("v-list-item-title", [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm._f("currency")(_vm.discount)) +
                                "\n          "
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c("v-list-item-title", { staticClass: "cart_summary" }, [
                        _vm._v(" Tax ")
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-title", [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm._f("currency")(_vm.tax)) +
                            "\n          "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c("v-list-item-title", { staticClass: "cart_summary" }, [
                        _vm._v(" Total ")
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-title", [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm._f("currency")(_vm.total)) +
                            "\n          "
                        )
                      ])
                    ],
                    1
                  )
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
              _c(
                "v-btn",
                {
                  staticClass: "text-none success",
                  attrs: {
                    disabled:
                      this.$store.state.Carts.carts.length > 0 ? false : true,
                    block: "",
                    large: ""
                  },
                  on: { click: _vm.proceed_checkout }
                },
                [_vm._v("\n        Proceed to checkout\n      ")]
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

/***/ "./resources/js/components/Components/Cart/Summary.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Components/Cart/Summary.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Summary_vue_vue_type_template_id_6ad37575___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=6ad37575& */ "./resources/js/components/Components/Cart/Summary.vue?vue&type=template&id=6ad37575&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Cart/Summary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Summary_vue_vue_type_template_id_6ad37575___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Summary_vue_vue_type_template_id_6ad37575___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Cart/Summary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Cart/Summary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Components/Cart/Summary.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Cart/Summary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Cart/Summary.vue?vue&type=template&id=6ad37575&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Components/Cart/Summary.vue?vue&type=template&id=6ad37575& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_6ad37575___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Summary.vue?vue&type=template&id=6ad37575& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Cart/Summary.vue?vue&type=template&id=6ad37575&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_6ad37575___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_6ad37575___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);