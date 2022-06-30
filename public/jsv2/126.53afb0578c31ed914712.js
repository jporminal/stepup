(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Competition/Elite.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Competition/Elite.vue?vue&type=script&lang=js& ***!
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
  name: "competition-training-elite",
  data: function data() {
    return {
      isOpen: false,
      open: {}
    };
  },
  methods: {
    goback: function goback() {
      this.$store.commit("COMP_ELITE", {});
      this.$store.commit("IS_COMP_ELITE", false);
    },
    openCategory: function openCategory(item) {
      // console.log(item)
      this.open = item;
      this.isOpen = true;
    }
  },
  computed: {
    compElite: function compElite() {
      var elite = {
        text: "Elite Training",
        details: ["The Academy offers an “Elite training program”. This is an invitation only class for those students who show promising talent and dedication to their dance studies. During this class students will be pushed to improve on their flexibility, stamina, technique, performance skills and versatility. The perfect class for those who are wanting to take Dance & Performing Arts to the next level. Those wish to develop a solid foundation in their skills, and for those who wish to pursue a career in the industry. The Elite class is an additional class, and all students must still be attending their regular classes."],
        path: "/img/competitions/elite.jpg",
        alt: "StepUp Academy Elite Training"
      };
      return elite;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Competition/Elite.vue?vue&type=template&id=1b087835&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Competition/Elite.vue?vue&type=template&id=1b087835& ***!
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
  return _c("div", { staticClass: "slant-card-staff-container" }, [
    _c("div", { staticClass: "slant-card-staff" }, [
      _c(
        "div",
        { staticClass: "slant-card-staff-inner" },
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _c(
                      "h1",
                      { staticClass: "text-center display-1" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "text-none",
                            attrs: { small: "", text: "" },
                            on: { click: _vm.goback }
                          },
                          [
                            _c("v-icon", [_vm._v(" mdi-arrow-left")]),
                            _vm._v(" Go Back\n              ")
                          ],
                          1
                        ),
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.compElite.text) +
                            "\n            "
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    _vm._l(_vm.compElite.details, function(det) {
                      return _c("h2", {
                        key: det,
                        staticClass: "text-center body-2",
                        domProps: { innerHTML: _vm._s(det) }
                      })
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-img", {
                        staticClass: "mx-auto",
                        attrs: {
                          src: _vm.compElite.path,
                          alt: _vm.compElite.alt
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Competition/Elite.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Components/Competition/Elite.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Elite_vue_vue_type_template_id_1b087835___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Elite.vue?vue&type=template&id=1b087835& */ "./resources/js/components/Components/Competition/Elite.vue?vue&type=template&id=1b087835&");
/* harmony import */ var _Elite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Elite.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Competition/Elite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Elite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Elite_vue_vue_type_template_id_1b087835___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Elite_vue_vue_type_template_id_1b087835___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Competition/Elite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Competition/Elite.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Components/Competition/Elite.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Elite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Elite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Competition/Elite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Elite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Competition/Elite.vue?vue&type=template&id=1b087835&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Components/Competition/Elite.vue?vue&type=template&id=1b087835& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Elite_vue_vue_type_template_id_1b087835___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Elite.vue?vue&type=template&id=1b087835& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Competition/Elite.vue?vue&type=template&id=1b087835&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Elite_vue_vue_type_template_id_1b087835___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Elite_vue_vue_type_template_id_1b087835___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);