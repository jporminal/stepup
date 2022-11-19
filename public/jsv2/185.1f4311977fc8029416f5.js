(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[185],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Shop_arcadia.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Shop_arcadia.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "shop-products",
  components: {
    product_main: function product_main() {
      return __webpack_require__.e(/*! import() */ 149).then(__webpack_require__.bind(null, /*! ../Components/Shops/Arcadia/Main */ "./resources/js/components/Components/Shops/Arcadia/Main.vue"));
    },
    product_details: function product_details() {
      return __webpack_require__.e(/*! import() */ 148).then(__webpack_require__.bind(null, /*! ../Components/Shops/Arcadia/Details */ "./resources/js/components/Components/Shops/Arcadia/Details.vue"));
    },
    snackbar: function snackbar() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../Components/Snackbar/Global_view */ "./resources/js/components/Components/Snackbar/Global_view.vue"));
    }
  },
  created: function created() {
    this.init();
    this.$store.dispatch('STORE_SETUP');
  },
  methods: {
    init: function init() {
      this.$store.dispatch("ARCADIAS", this.$store.state.Arcadia.product_filter);
    }
  },
  metaInfo: function metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Arcadia School Schedules",
      htmlAttrs: {
        lang: "en"
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Shop_arcadia.vue?vue&type=template&id=364cb260&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Shop_arcadia.vue?vue&type=template&id=364cb260& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c("snackbar"),
      _vm._v(" "),
      _vm.$store.state.Arcadia.open ? _c("product_details") : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c("v-col", { attrs: { cols: "12" } }, [
            _c("h1", { staticClass: "text-center" }, [
              _vm._v(
                " " +
                  _vm._s(
                    _vm.$store.state.Date_ranges.store_setup.arcadia_lesson_text
                      .value
                  ) +
                  " "
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "9" } },
            [_c("product_main")],
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

/***/ "./resources/js/components/Views/Shop_arcadia.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Views/Shop_arcadia.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shop_arcadia_vue_vue_type_template_id_364cb260___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop_arcadia.vue?vue&type=template&id=364cb260& */ "./resources/js/components/Views/Shop_arcadia.vue?vue&type=template&id=364cb260&");
/* harmony import */ var _Shop_arcadia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop_arcadia.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/Shop_arcadia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Shop_arcadia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Shop_arcadia_vue_vue_type_template_id_364cb260___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Shop_arcadia_vue_vue_type_template_id_364cb260___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/Shop_arcadia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/Shop_arcadia.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Views/Shop_arcadia.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_arcadia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Shop_arcadia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Shop_arcadia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_arcadia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/Shop_arcadia.vue?vue&type=template&id=364cb260&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Views/Shop_arcadia.vue?vue&type=template&id=364cb260& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_arcadia_vue_vue_type_template_id_364cb260___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Shop_arcadia.vue?vue&type=template&id=364cb260& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Shop_arcadia.vue?vue&type=template&id=364cb260&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_arcadia_vue_vue_type_template_id_364cb260___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_arcadia_vue_vue_type_template_id_364cb260___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);