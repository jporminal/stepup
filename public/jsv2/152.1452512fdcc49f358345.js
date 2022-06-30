(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[152],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "uniform-main-view",
  methods: {
    channel: function channel(e) {
      var filter = {
        filter: this.$store.state.Motor_city.product_filter.filter,
        page: e,
        per_page: 12
      };
      this.$store.commit("MOTOR_CITY_FILTER", filter);
      this.$store.dispatch("MOTOR_CITIES", this.$store.state.Motor_city.product_filter);
    },
    add_cart: function add_cart(e) {
      this.$store.dispatch("MOTOR_CITY_VIEW_ITEM", e);
    }
  },
  computed: {
    products: function products() {
      return this.$store.state.Motor_city.products;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=template&id=68640d98&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=template&id=68640d98& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { attrs: { flat: "", loading: _vm.$store.state.Motor_city.loading } },
    [
      _c(
        "template",
        { slot: "progress" },
        [
          _c("v-progress-linear", {
            attrs: { color: "deep-purple", height: "10", indeterminate: "" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.products.data.length > 0
        ? [
            _c(
              "v-container",
              { staticClass: "fill-height" },
              [
                _c(
                  "v-row",
                  { attrs: { align: "center", justify: "center" } },
                  _vm._l(_vm.products.data, function(product, index) {
                    return _c(
                      "v-col",
                      { key: index, attrs: { cols: "12", lg: "3", md: "4" } },
                      [
                        _c(
                          "v-card",
                          { attrs: { height: "400" } },
                          [
                            _c("v-img", {
                              staticStyle: { cursor: "pointer" },
                              attrs: {
                                height: "250",
                                src:
                                  product.images != null
                                    ? "/img/products/" +
                                      product.images.image_name
                                    : ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.add_cart(product.id)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              [
                                _c("p", { staticClass: "title" }, [
                                  _vm._v(_vm._s(product.product))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "text-none",
                                    attrs: {
                                      color: "green",
                                      text: "",
                                      absolute: "",
                                      right: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.add_cart(product.id)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Add to cart\n              "
                                    )
                                  ]
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
                  }),
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-right" },
              [
                _c("v-pagination", {
                  attrs: {
                    length: _vm.products.last_page,
                    "total-visible": _vm.$vuetify.breakpoint.mdAndUp ? 10 : 5
                  },
                  on: { input: _vm.channel },
                  model: {
                    value: _vm.products.current_page,
                    callback: function($$v) {
                      _vm.$set(_vm.products, "current_page", $$v)
                    },
                    expression: "products.current_page"
                  }
                })
              ],
              1
            )
          ]
        : _c("v-container", [
            _c("p", { staticClass: "text-center" }, [
              _vm._v("No available schedule at this moment")
            ])
          ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Shops/MotorCity/Main.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Components/Shops/MotorCity/Main.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_68640d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=68640d98& */ "./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=template&id=68640d98&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_68640d98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_68640d98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Shops/MotorCity/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=template&id=68640d98&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=template&id=68640d98& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_68640d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=68640d98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/MotorCity/Main.vue?vue&type=template&id=68640d98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_68640d98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_68640d98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);