(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[164],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "vbmc-footer",
  data: function data() {
    return {
      socialmedias: [{
        icon: "mdi-facebook-box",
        path: "https://www.facebook.com/StepUpAcademyDubai/"
      }, {
        icon: "mdi-instagram",
        path: "https://www.instagram.com/step_up_academy/"
      }, {
        icon: "mdi-youtube",
        path: "https://www.youtube.com/channel/UCse7ozeeaGxD8BT7LnxXVFw"
      } // {icon: 'mdi-facebook-box', path: 'https://www.facebook.com/KinderDanceDubai/'},
      // {icon: 'mdi-instagram', path: 'https://www.instagram.com/kinderdance_dubai/'}
      ],
      kinderdances: [{
        icon: "mdi-facebook-box",
        path: "https://www.facebook.com/KinderDanceDubai/"
      }, {
        icon: "mdi-instagram",
        path: "https://www.instagram.com/kinderdance_dubai"
      } // {icon: 'mdi-facebook-box', path: 'https://www.facebook.com/KinderDanceDubai/'},
      // {icon: 'mdi-instagram', path: 'https://www.instagram.com/kinderdance_dubai/'}
      ],
      footerImages: [{
        path: "/img/footer.jpg",
        alt: "StepUp Academy KinderDance International"
      }, {
        path: "/img/IDTA.png",
        alt: "StepUp Academy IDTA"
      }, {
        path: "/img/rad.jpg",
        alt: "StepUp Academy Royal Academy of Dance"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "v-footer",
    {
      attrs: {
        dark: "",
        color: "info lighten-1",
        padless: "",
        absolute: _vm.$route.name == "Home" ? false : true,
        app: _vm.$route.name == "Home" ? false : true
      }
    },
    [
      _c(
        "v-card",
        { attrs: { flat: "", tile: "", width: "100%", color: "transparent" } },
        [
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                        _c(
                          "h4",
                          { staticClass: "text-center font-weight-light" },
                          [
                            _vm._v("\n              Mobile:\n              "),
                            _c(
                              "a",
                              {
                                staticClass: "white--text",
                                attrs: { href: "tel:+971558552797" }
                              },
                              [_vm._v("+971 55 855 2797")]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                        _c(
                          "h4",
                          { staticClass: "text-center font-weight-light" },
                          [
                            _vm._v(
                              "\n              Telephone:\n              "
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "white--text",
                                attrs: { href: "tel:+97144534360" }
                              },
                              [_vm._v("+971 4 453 4360")]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                        _c(
                          "h4",
                          { staticClass: "text-center font-weight-light" },
                          [
                            _vm._v(
                              "\n              StepUp Academy, 113 Apex Atrium, Motor City, Dubai, United Arab\n              Emirates\n            "
                            )
                          ]
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "text-center blue" },
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "space-around" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("strong", { staticClass: "title" }, [
                            _vm._v(
                              "Get connected with us on StepUp Academy social\n              networks!"
                            )
                          ]),
                          _vm._v(" "),
                          _vm.$vuetify.breakpoint.mdAndDown
                            ? _c("br")
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.socialmedias, function(social) {
                            return _c(
                              "v-btn",
                              {
                                key: social.icon,
                                attrs: {
                                  icon: "",
                                  "x-large": "",
                                  href: social.path,
                                  target: "_blank"
                                }
                              },
                              [
                                _c("v-icon", [
                                  _vm._v(" " + _vm._s(social.icon) + " ")
                                ])
                              ],
                              1
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.$vuetify.breakpoint.mdAndDown
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [_c("v-divider")],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _vm._l(_vm.kinderdances, function(social) {
                            return _c(
                              "v-btn",
                              {
                                key: social.icon,
                                attrs: {
                                  icon: "",
                                  "x-large": "",
                                  href: social.path,
                                  target: "_blank"
                                }
                              },
                              [
                                _c("v-icon", [
                                  _vm._v(" " + _vm._s(social.icon) + " ")
                                ])
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _vm.$vuetify.breakpoint.mdAndDown
                            ? _c("br")
                            : _vm._e(),
                          _vm._v(" "),
                          _c("strong", { staticClass: "title" }, [
                            _vm._v(
                              "Get connected with us on Kinder Dance social networks!"
                            )
                          ])
                        ],
                        2
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Footer.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=61a7c374& */ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=61a7c374& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);