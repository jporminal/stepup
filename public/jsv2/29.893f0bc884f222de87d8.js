(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Carousel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Carousel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Carousel",
  data: function data() {
    return {
      webs: [{
        src: "/img/Carousel/STEPUP-CAROUSEL-1.jpg",
        text: "StepUp Academy Royal Academy of Dance Accredited Teacher"
      }, // {
      //   src: "/img/Carousel/Akoya.jpg",
      //   text: "StepUp Academy Akoya New Location",
      // },
      {
        src: "/img/Carousel/STEPUP-CAROUSEL-2.jpg",
        text: "StepUp Academy World Dance Competition Leg kick"
      }, {
        src: "/img/Carousel/STEPUP-CAROUSEL-3.jpg",
        text: "StepUp Academy Acro Elite"
      }, {
        src: "/img/Carousel/STEPUP-CAROUSEL-4.jpg",
        text: "StepUp Academy International Dance Teachers Association"
      }, {
        src: "/img/Carousel/STEPUP-CAROUSEL-5.jpg",
        text: "StepUp Academy Kinder Programs"
      }, {
        src: "/img/Carousel/STEPUP-CAROUSEL-6.jpg",
        text: "StepUp Academy Street Jazz"
      }],
      mobiles: [{
        srcset: "/img/Carousel/STEPUP-CAROUSEL-1-mobile.jpg",
        text: "StepUp Academy Royal Academy of Dance Accredited Teacher"
      }, // {
      //   srcset: "/img/Carousel/akoya-mobile.jpeg",
      //   text: "StepUp Academy Akoya New Location",
      // },
      {
        srcset: "/img/Carousel/STEPUP-CAROUSEL-2-mobile.jpg",
        text: "StepUp Academy World Dance Competition Leg kick"
      }, {
        srcset: "/img/Carousel/STEPUP-CAROUSEL-3-mobile.jpg",
        text: "StepUp Academy Acro Elite"
      }, {
        srcset: "/img/Carousel/STEPUP-CAROUSEL-4-mobile.jpg",
        text: "StepUp Academy International Dance Teachers Association"
      }, {
        srcset: "/img/Carousel/STEPUP-CAROUSEL-5-mobile.jpg",
        text: "StepUp Academy Kinder Programs"
      }, {
        srcset: "/img/Carousel/STEPUP-CAROUSEL-6-mobile.jpg",
        text: "StepUp Academy Street Jazz"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _vm.$vuetify.breakpoint.mdAndUp
        ? [
            _vm.$route.name == "Home"
              ? _c(
                  "v-carousel",
                  {
                    attrs: {
                      height: _vm.$vuetify.breakpoint.mdAndDown
                        ? "300"
                        : _vm.$vuetify.breakpoint.lg
                        ? "500"
                        : "650",
                      "hide-delimiters": ""
                    }
                  },
                  _vm._l(_vm.webs, function(item, i) {
                    return _c("v-carousel-item", {
                      key: i,
                      attrs: { src: item.src, alt: item.text }
                    })
                  }),
                  1
                )
              : _vm._e()
          ]
        : [
            _vm.$route.name == "Home"
              ? _c(
                  "v-carousel",
                  {
                    attrs: {
                      cycle: "",
                      interval: "6000",
                      height: _vm.$vuetify.breakpoint.sm ? "800" : "380",
                      "hide-delimiter-background": "",
                      "show-arrows-on-hover": ""
                    }
                  },
                  _vm._l(_vm.mobiles, function(item, i) {
                    return _c("v-carousel-item", {
                      key: i,
                      attrs: { src: item.srcset }
                    })
                  }),
                  1
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Carousel.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Carousel.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=fe98726a& */ "./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Carousel.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Carousel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=fe98726a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);