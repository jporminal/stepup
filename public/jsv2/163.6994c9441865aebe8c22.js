(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Authenticated.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Authenticated.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "authenticaed",
  data: function data() {
    return {
      items: [{
        title: "Profile",
        icon: "mdi-account",
        path: "/my-account",
        access: ["User", "Admin", "Reception", "Manager", "Accounts", "Teacher", "Kups", "PA"],
        isGroups: false
      }, {
        title: "Enrollment",
        icon: "mdi-account",
        path: "/my-enrollment",
        access: ["User"],
        isGroups: false
      }, {
        title: "Order",
        icon: "mdi-package-variant-closed",
        path: "/my-order",
        access: ["User"],
        isGroups: false
      }, {
        title: "Logout",
        icon: "mdi-logout",
        path: "/logout",
        access: ["User", "Admin", "Reception", "Manager", "Accounts", "Teacher", "Kups", "PA"],
        isGroups: false
      }],
      right: null
    };
  },
  methods: {
    in_array: function in_array(value, arr) {
      var status = false;

      for (var i = 0; i < arr.length; i++) {
        var name = arr[i];

        if (name == value) {
          status = true;
          break;
        }
      }

      return status;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Authenticated.vue?vue&type=template&id=503bc113&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Authenticated.vue?vue&type=template&id=503bc113& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "2" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "mx-auto",
                  attrs: { height: "400", width: "256" }
                },
                [
                  _c(
                    "v-navigation-drawer",
                    { attrs: { permanent: "" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "v-list-item-title",
                                { staticClass: "title" },
                                [
                                  _vm._v(
                                    "\n                My Account\n              "
                                  )
                                ]
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
                        "v-list",
                        { attrs: { dense: "", nav: "" } },
                        [
                          _vm._l(_vm.items, function(item) {
                            return [
                              _vm.in_array(
                                _vm.$store.state.Users.current_user.Role,
                                item.access
                              )
                                ? [
                                    !item.isGroups
                                      ? _c(
                                          "v-list-item",
                                          {
                                            key: item.title,
                                            attrs: { to: item.path }
                                          },
                                          [
                                            _c(
                                              "v-list-item-action",
                                              [
                                                _c("v-icon", [
                                                  _vm._v(_vm._s(item.icon))
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(_vm._s(item.title))
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      : _c(
                                          "v-list-group",
                                          {
                                            key: item.title,
                                            attrs: {
                                              "no-action": "",
                                              "prepend-icon": item.icon
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function() {
                                                    return [
                                                      _c(
                                                        "v-list-item",
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
                                                              _vm._v(
                                                                "\n                        " +
                                                                  _vm._s(
                                                                    item.title
                                                                  ) +
                                                                  "\n                      "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  },
                                                  proxy: true
                                                }
                                              ],
                                              null,
                                              true
                                            )
                                          },
                                          [
                                            _vm._v(" "),
                                            _vm._l(item.groups, function(
                                              group,
                                              index
                                            ) {
                                              return [
                                                _vm.in_array(
                                                  _vm.$store.state.Users
                                                    .current_user.Role,
                                                  group.access
                                                )
                                                  ? [
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          key: index,
                                                          attrs: {
                                                            to: group.path
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
                                                              _vm._v(
                                                                "\n                          " +
                                                                  _vm._s(
                                                                    group.title
                                                                  ) +
                                                                  "\n                        "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-action",
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "\n                            " +
                                                                    _vm._s(
                                                                      group.icon
                                                                    ) +
                                                                    "\n                          "
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                group.isdivide
                                                  ? _c("v-divider", {
                                                      key: group.title
                                                    })
                                                  : _vm._e()
                                              ]
                                            })
                                          ],
                                          2
                                        )
                                  ]
                                : _vm._e()
                            ]
                          })
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "9" } },
            [_c("router-view")],
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

/***/ "./resources/js/components/Views/Authenticated.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Views/Authenticated.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Authenticated_vue_vue_type_template_id_503bc113___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authenticated.vue?vue&type=template&id=503bc113& */ "./resources/js/components/Views/Authenticated.vue?vue&type=template&id=503bc113&");
/* harmony import */ var _Authenticated_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authenticated.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/Authenticated.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Authenticated_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Authenticated_vue_vue_type_template_id_503bc113___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Authenticated_vue_vue_type_template_id_503bc113___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/Authenticated.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/Authenticated.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Views/Authenticated.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticated_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Authenticated.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Authenticated.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticated_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/Authenticated.vue?vue&type=template&id=503bc113&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Views/Authenticated.vue?vue&type=template&id=503bc113& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticated_vue_vue_type_template_id_503bc113___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Authenticated.vue?vue&type=template&id=503bc113& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Authenticated.vue?vue&type=template&id=503bc113&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticated_vue_vue_type_template_id_503bc113___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authenticated_vue_vue_type_template_id_503bc113___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);