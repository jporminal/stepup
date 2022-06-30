(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "winter-camps",
  created: function created() {
    this.$store.dispatch('STORE_SETUP');
  },
  data: function data() {
    return {
      Camps: [{
        text: "Multi-Skills",
        image: "/img/camps/winter/2021/multi-skills.jpg",
        alt: "Winter multi-skills camps",
        to: "/camps/winter/multi-skills"
      }, {
        text: "Performing Arts",
        image: "/img/camps/winter/2021/performing-arts.jpg",
        alt: "Performing Arts",
        to: "/camps/winter/performing-arts"
      }, {
        text: "Sports Winter Camp",
        image: "/img/camps/winter/2021/sports-winter-camps.jpg",
        alt: "Sports Winter Camp",
        to: "/camps/winter/sports-winter-camp"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=template&id=43986f50&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=template&id=43986f50& ***!
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
    "v-card",
    { attrs: { flat: "" } },
    [
      _c("v-card-text", [
        _c("h1", { staticClass: "text-center font-weight-bold black--text" }, [
          _vm._v(
            _vm._s(
              _vm.$store.state.Date_ranges.store_setup.camp_lesson_text.value
            )
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                _vm._l(_vm.Camps, function(camp, index) {
                  return _c(
                    "v-col",
                    { key: index, attrs: { cols: "12", md: "5" } },
                    [
                      _c(
                        "v-card",
                        { attrs: { flat: "", to: camp.to } },
                        [
                          _c("v-img", {
                            attrs: {
                              src: camp.image,
                              alt: camp.alt,
                              contain: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c("p", { staticClass: "title text-center" }, [
                              _vm._v(_vm._s(camp.text))
                            ])
                          ])
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

/***/ "./resources/js/components/Components/Shops/Camps/Winter_item.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Camps/Winter_item.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Winter_item_vue_vue_type_template_id_43986f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Winter_item.vue?vue&type=template&id=43986f50& */ "./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=template&id=43986f50&");
/* harmony import */ var _Winter_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Winter_item.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Winter_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Winter_item_vue_vue_type_template_id_43986f50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Winter_item_vue_vue_type_template_id_43986f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Shops/Camps/Winter_item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winter_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Winter_item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Winter_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=template&id=43986f50&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=template&id=43986f50& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Winter_item_vue_vue_type_template_id_43986f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Winter_item.vue?vue&type=template&id=43986f50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Camps/Winter_item.vue?vue&type=template&id=43986f50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Winter_item_vue_vue_type_template_id_43986f50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Winter_item_vue_vue_type_template_id_43986f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);