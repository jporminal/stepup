(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Multi-Skills",
  data: function data() {
    return {
      title: "Multi-Skills Camp",
      words: ["Our Multi- Skills Camp offers something for everyone with everyday being packed full of fun activities. Throughout the week your child will get to take part in a variety of activities ranging from Arts and Crafts, Gardening, Science, Karate or Football, Cold Cooking, Team Games and Face Painting. As well as Dance, Drama and Musical Theatre. In addition to the mentioned activities, there is also a bouncy castle set up every Wednesday during camp, a best dressed competition, and other fun activities.<br><br>Throughout the camp the students will be preparing for an end of camp show, which will give all parents, friends, and family the chance to see what they have been working on! This is the highlight of the camp and the students always love dressing up to match the theme and being able to show off what they have achieved during camp."],
      images: {
        path: "/img/camps/Multi-skills.jpg",
        alt: "StepUp Academy Performing Arts"
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=template&id=3a901c18&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=template&id=3a901c18& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "slant-card-others-container" }, [
    _c("div", { staticClass: "slant-card-others" }, [
      _c(
        "div",
        { staticClass: "slant-card-others-inner" },
        [
          _c(
            "v-card",
            { attrs: { flat: "", color: "transparent" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        {
                          attrs: { align: "center", justify: "space-between" }
                        },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "7" } },
                            [
                              _c(
                                "h1",
                                { staticClass: "text-center display-1" },
                                [_vm._v(_vm._s(_vm.title))]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.words, function(word, i) {
                                return _c("h3", {
                                  key: i,
                                  staticClass: "subtitle",
                                  domProps: { innerHTML: _vm._s(word) }
                                })
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  src: _vm.images.path,
                                  alt: _vm.images.alt,
                                  contain: ""
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Camp/MultiSkill.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Components/Camp/MultiSkill.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiSkill_vue_vue_type_template_id_3a901c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiSkill.vue?vue&type=template&id=3a901c18& */ "./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=template&id=3a901c18&");
/* harmony import */ var _MultiSkill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiSkill.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultiSkill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiSkill_vue_vue_type_template_id_3a901c18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiSkill_vue_vue_type_template_id_3a901c18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Camp/MultiSkill.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSkill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiSkill.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSkill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=template&id=3a901c18&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=template&id=3a901c18& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSkill_vue_vue_type_template_id_3a901c18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiSkill.vue?vue&type=template&id=3a901c18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Camp/MultiSkill.vue?vue&type=template&id=3a901c18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSkill_vue_vue_type_template_id_3a901c18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSkill_vue_vue_type_template_id_3a901c18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);