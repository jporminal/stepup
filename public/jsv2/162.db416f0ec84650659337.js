(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[162],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Team/Admins.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Team/Admins.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'teachers',
  data: function data() {
    return {
      isActive: false,
      adminStaffs: [{
        name: 'MARLO<br>GRAPHIC DESIGNER',
        position: 'GRAPHIC DESIGNER',
        image: '/img/headshots/marlo.jpg'
      }, {
        name: 'VINCENT<br>WEB DEVELOPER',
        position: 'WEB DEVELOPER',
        image: '/img/headshots/Vinz.jpg'
      }, {
        name: 'JOEL<br>FRONT OF HOUSE',
        position: 'FRONT OF HOUSE',
        image: '/img/headshots/Joel.jpg'
      }, {
        name: 'GERMAINE<br>FRONT OF HOUSE',
        position: 'FRONT OF HOUSE',
        image: '/img/headshots/Germaine.jpg'
      }, {
        name: 'SAKSHI<br>SALES AND MARKETING',
        position: 'SALES AND MARKETING',
        image: '/img/headshots/Sakshi.jpg'
      }, {
        name: 'ALICE<br>PERSONAL ASSISTANT',
        position: 'PA',
        image: '/img/headshots/Alice.jpg'
      }, {
        name: 'RICHELLE<br>OFFICE GIRL AND ASSISTANT',
        position: 'OFFICE GIRL AND ASSISTANT',
        image: '/img/headshots/Richelle.jpg'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Team/Admins.vue?vue&type=template&id=70a9b728&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Team/Admins.vue?vue&type=template&id=70a9b728& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            "v-lazy",
            {
              attrs: {
                option: { threshold: 0.5 },
                transition: "fade-transition"
              },
              model: {
                value: _vm.isActive,
                callback: function($$v) {
                  _vm.isActive = $$v
                },
                expression: "isActive"
              }
            },
            [
              _c(
                "v-card",
                { attrs: { color: "#f8f8f8", flat: "" } },
                [
                  _c("v-card-text", [
                    _c("h1", { staticClass: "text-center display-3" }, [
                      _vm._v(" Our Admins ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-responsive",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "60%" }
                        },
                        [
                          _c(
                            "transition-group",
                            {
                              staticClass: "justify-center",
                              attrs: { tag: "v-row", name: "fade-transition" }
                            },
                            _vm._l(_vm.adminStaffs, function(admin) {
                              return _c(
                                "v-col",
                                {
                                  key: admin.name,
                                  attrs: { cols: "12", md: "4" }
                                },
                                [
                                  _c("v-hover", {
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var hover = ref.hover
                                            return [
                                              _c(
                                                "v-card",
                                                {
                                                  staticClass:
                                                    "overflow-hidden mx-auto",
                                                  attrs: {
                                                    img: admin.image,
                                                    alt: admin.name,
                                                    hover: "",
                                                    height: "300px"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-slide-y-reverse-transition",
                                                    [
                                                      hover
                                                        ? _c(
                                                            "v-footer",
                                                            {
                                                              staticClass:
                                                                "justify-center text-center",
                                                              attrs: {
                                                                absolute: "",
                                                                height: "75",
                                                                color: "#000"
                                                              }
                                                            },
                                                            [
                                                              _c("h3", {
                                                                staticClass:
                                                                  "heading white--text",
                                                                domProps: {
                                                                  innerHTML: _vm._s(
                                                                    admin.name
                                                                  )
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  }),
                                  _vm._v(" "),
                                  !_vm.$vuetify.breakpoint.mdAndUp
                                    ? _c("h3", {
                                        staticClass: "heading text-center",
                                        domProps: {
                                          innerHTML: _vm._s(admin.name)
                                        }
                                      })
                                    : _vm._e()
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

/***/ "./resources/js/components/Components/Team/Admins.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Components/Team/Admins.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admins_vue_vue_type_template_id_70a9b728___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admins.vue?vue&type=template&id=70a9b728& */ "./resources/js/components/Components/Team/Admins.vue?vue&type=template&id=70a9b728&");
/* harmony import */ var _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admins.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Team/Admins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admins_vue_vue_type_template_id_70a9b728___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admins_vue_vue_type_template_id_70a9b728___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Team/Admins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Team/Admins.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Components/Team/Admins.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Team/Admins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Team/Admins.vue?vue&type=template&id=70a9b728&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Components/Team/Admins.vue?vue&type=template&id=70a9b728& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_70a9b728___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=template&id=70a9b728& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Team/Admins.vue?vue&type=template&id=70a9b728&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_70a9b728___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_70a9b728___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);