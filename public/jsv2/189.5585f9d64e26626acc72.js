(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[189],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Testimonial.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Testimonial.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "parents-testimonial",
  components: {
    my_testimonial: function my_testimonial() {
      return __webpack_require__.e(/*! import() */ 160).then(__webpack_require__.bind(null, /*! ../Components/Testimonial/Testimonials */ "./resources/js/components/Components/Testimonial/Testimonials.vue"));
    }
  },
  data: function data() {
    return {
      seo: {
        title: "StepUp Academy",
        description: "Have a look at some of our customers experiences and feedback. Call Us +971 55 855 2797 or email us at info@stepup.ae",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/"
      }
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Parent's Testimonials",
      htmlAttrs: {
        lang: "en"
      },
      meta: [{
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        name: "description",
        content: this.seo.description
      }, {
        name: "keywords",
        content: "dance, dance classes, dubai classes, ballet, dubai dance school, ballet dance in dubai"
      }, // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: this.seo.title
      }, {
        property: "og:site_name",
        content: this.seo.site_name
      }, // The list of types is available here: http://ogp.me/#types
      {
        property: "og:type",
        content: "article"
      }, // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: this.seo.site + "parents-testimonial"
      }, {
        property: "og:image",
        content: this.seo.site + "img/landing/testimonials.jpg"
      }, // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: this.seo.description
      }, // Twitter card
      {
        name: "twitter:card",
        content: "summary"
      }, {
        name: "twitter:site",
        content: this.seo.site + "parents-testimonial"
      }, {
        name: "twitter:title",
        content: this.seo.title
      }, {
        name: "twitter:description",
        content: this.seo.description
      }, // Your twitter handle, if you have one.
      {
        name: "twitter:creator",
        content: "@vmbcarabbacan"
      }, {
        name: "twitter:image:src",
        content: this.seo.site + "img/landing/testimonials.jpg"
      }, // Google / Schema.org markup:
      {
        itemprop: "name",
        content: this.seo.title
      }, {
        itemprop: "description",
        content: this.seo.description
      }, {
        itemprop: "image",
        content: this.seo.site + "img/landing/testimonials.jpg"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Testimonial.vue?vue&type=template&id=76ee7c83&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Testimonial.vue?vue&type=template&id=76ee7c83& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("my_testimonial")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Views/Testimonial.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Views/Testimonial.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Testimonial_vue_vue_type_template_id_76ee7c83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonial.vue?vue&type=template&id=76ee7c83& */ "./resources/js/components/Views/Testimonial.vue?vue&type=template&id=76ee7c83&");
/* harmony import */ var _Testimonial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonial.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/Testimonial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Testimonial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Testimonial_vue_vue_type_template_id_76ee7c83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Testimonial_vue_vue_type_template_id_76ee7c83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/Testimonial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/Testimonial.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Views/Testimonial.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Testimonial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/Testimonial.vue?vue&type=template&id=76ee7c83&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Views/Testimonial.vue?vue&type=template&id=76ee7c83& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_template_id_76ee7c83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonial.vue?vue&type=template&id=76ee7c83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Testimonial.vue?vue&type=template&id=76ee7c83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_template_id_76ee7c83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_template_id_76ee7c83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);