(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Checkout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Checkout/Checkout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "checkout-button",
  data: function data() {
    return {
      loading: false
    };
  },
  components: {
    my_terms: function my_terms() {
      return __webpack_require__.e(/*! import() */ 127).then(__webpack_require__.bind(null, /*! ./Terms/tcs_terms_condition */ "./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue"));
    }
  },
  methods: {
    terms_condition: function terms_condition() {
      this.$store.commit("CHECKOUT_TERMS_OPEN", true);
    },
    go_to_telr: function go_to_telr() {
      var _this = this;

      this.loading = true;
      var total = {
        subtotal: this.subtotal,
        discount: this.discount,
        tax: this.tax,
        total: this.total
      };
      this.$store.dispatch("CHECKOUT", {
        customer: this.$store.state.Carts.billing,
        products: this.$store.state.Carts.carts,
        total: total
      }).then(function (result) {
        //   console.log(result.data);
        localStorage.setItem("traesdhes", JSON.stringify(_this.$store.state.Carts.carts));
        localStorage.setItem('is_credit', _this.$store.state.Carts.parent.credit);
        localStorage.setItem("last_id", result.data.last_id);
        localStorage.setItem("billing", JSON.stringify(_this.$store.state.Carts.billing)); // window.location.href = '/success';

        window.location.href = result.data.telr;
        _this.loading = false;
      })["catch"](function (err) {});
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
    discount: function discount() {
      return this.$store.state.Carts.carts.reduce(function (total, item) {
        return total + item.product_option.discount;
      }, 0);
    },
    total: function total() {
      return this.$store.state.Carts.carts.reduce(function (total, item) {
        return total + item.product_option.total_incl;
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Checkout.vue?vue&type=template&id=1573b7be&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Checkout/Checkout.vue?vue&type=template&id=1573b7be& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-2" },
    [
      _c("my_terms"),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-checkbox", {
            staticClass: "my-0",
            scopedSlots: _vm._u([
              {
                key: "label",
                fn: function() {
                  return [
                    _vm._v("\n        I've read and accept the\n        "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "text-none font-weight-bold",
                        attrs: { text: "" },
                        on: { click: _vm.terms_condition }
                      },
                      [_vm._v("\n          Terms & Conditions\n        ")]
                    )
                  ]
                },
                proxy: true
              }
            ]),
            model: {
              value: _vm.$store.state.Carts.sua_term,
              callback: function($$v) {
                _vm.$set(_vm.$store.state.Carts, "sua_term", $$v)
              },
              expression: "$store.state.Carts.sua_term"
            }
          })
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
              staticClass: "success text-none",
              attrs: {
                block: "",
                disabled:
                  !_vm.$store.state.Carts.valid ||
                  !_vm.$store.state.Carts.valid_details ||
                  _vm.$store.state.Carts.carts.length == 0 ||
                  !_vm.$store.state.Carts.sua_term,
                loading: _vm.loading
              },
              on: { click: _vm.go_to_telr }
            },
            [_vm._v("\n      Proceed to checkout\n    ")]
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

/***/ "./resources/js/components/Components/Checkout/Checkout.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Checkout.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_1573b7be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=1573b7be& */ "./resources/js/components/Components/Checkout/Checkout.vue?vue&type=template&id=1573b7be&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Checkout/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_1573b7be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_1573b7be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Checkout/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Checkout/Checkout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Checkout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Checkout/Checkout.vue?vue&type=template&id=1573b7be&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Checkout.vue?vue&type=template&id=1573b7be& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_1573b7be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=1573b7be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Checkout.vue?vue&type=template&id=1573b7be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_1573b7be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_1573b7be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);