(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[178],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Sams.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Sams.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
        title: "Schedules",
        icon: "mdi-calendar",
        path: "/sams-schedule",
        access: ["Admin", "Reception", "Manager", "Accounts", "Teacher", "Kups", "PA"],
        isGroups: false
      }, {
        title: "Customer",
        icon: "mdi-account-group",
        path: "#",
        access: ["Admin", "Reception", "Manager", "PA"],
        isGroups: true,
        groups: [{
          title: "Students",
          icon: "",
          path: "/sams-students",
          access: ["Admin", "Manager", "Reception", "PA"],
          isdivide: false
        }, {
          title: "Parents",
          icon: "",
          path: "/sams-parents",
          access: ["Admin", "Manager", "Reception", "PA"],
          isdivide: false
        }]
      }, {
        title: "Staffs",
        icon: "mdi-account-network",
        path: "/sams-staff",
        access: ["Admin", "Reception", "Manager"],
        isGroups: false
      }, {
        title: "Attendance",
        icon: "mdi-notebook-multiple",
        path: "/sams-attendance",
        access: ["Admin", "Reception", "Manager", "Teacher", "PA"],
        isGroups: false
      }, {
        title: "Download Attendance",
        icon: "mdi-notebook-outline",
        path: "/sams-attendance-download",
        access: ["Admin", "Reception", "Manager", "PA"],
        isGroups: false
      }, {
        title: "Email Parents",
        icon: "mdi-email",
        path: "/sams-send-email",
        access: ["Admin", "Reception", "Manager"],
        isGroups: false
      }, {
        title: "Reports",
        icon: "mdi-file-eye",
        path: "#",
        access: ["Admin", "Manager", "Kups", "Teacher", "PA", "Reception"],
        isGroups: true,
        groups: [{
          title: "Class Information",
          icon: "",
          path: "/sams-reports-class-infomation",
          access: ["Admin", "Manager", "Kups", "Teacher", "PA", "Reception"],
          isdivide: false
        }, {
          title: "Number of Students",
          icon: "",
          path: "/sams-reports-number-of-students",
          access: ["Admin", "Manager", "Kups", "PA", "Reception"],
          isdivide: false
        }, {
          title: "Payment by Schedules",
          icon: "",
          path: "/sams-reports-payment-by-schedules",
          access: ["Admin", "Manager", "Kups", "PA", "Reception"],
          isdivide: false
        }, {
          title: "Payment by Lesson",
          icon: "",
          path: "/sams-reports-payment-by-lesson",
          access: ["Admin", "Manager", "Kups", "PA"],
          isdivide: false
        }, {
          title: "Product Sales",
          icon: "",
          path: "/sams-reports-payment-by-product-sales",
          access: ["Admin", "Manager", "Kups", "PA"],
          isdivide: false
        }, {
          title: "Product Reports",
          icon: "",
          path: "/sams-product-reports",
          access: ["Admin", "Manager", "Kups", "PA"],
          isdivide: false
        }, {
          title: "Service Reports",
          icon: "",
          path: "/sams-service-reports",
          access: ["Admin", "Manager", "Kups", "PA"],
          isdivide: false
        }, {
          title: "Location Reports",
          icon: "",
          path: "/sams-location-reports",
          access: ["Admin", "Manager", "Kups", "PA"],
          isdivide: false
        }, {
          title: "Other Services Reports",
          icon: "",
          path: "/sams-other-services-reports",
          access: ["Admin", "Manager", "Kups", "PA"],
          isdivide: false
        }]
      }, {
        title: "Receipts",
        icon: "mdi-receipt",
        path: "/sams-receipts",
        access: ["Admin", "Reception", "Manager"],
        isGroups: false
      }, {
        title: "Settings",
        icon: "mdi-cog",
        path: "#",
        access: ["Admin", "Reception", "Manager", "PA"],
        isGroups: true,
        groups: [{
          title: "Schedules",
          icon: "",
          path: "/sams-schedules",
          access: ["Admin", "Manager", "Reception", "PA"],
          isdivide: false
        }, {
          title: "Lessons",
          icon: "",
          path: "/sams-lessons",
          access: ["Admin", "Manager", "Reception", "PA"],
          isdivide: false
        }, {
          title: "Locations",
          icon: "",
          path: "/sams-locations",
          access: ["Admin", "Manager", "Reception", "PA"],
          isdivide: false
        }, {
          title: "Date Ranges",
          icon: "",
          path: "/sams-date-ranges",
          access: ["Admin", "Manager", "Reception", "PA"],
          isdivide: false
        }, {
          title: "Weekdays",
          icon: "",
          path: "/sams-week-days",
          access: ["Admin", "Manager", "Reception", "PA"],
          isdivide: false
        }, {
          title: "Store Setup",
          icon: "",
          path: "/sams-store-setup",
          access: ["Admin"],
          isdivide: false
        }, {
          title: "Xero",
          icon: "",
          path: "/sams-xero",
          access: ["Admin"],
          isdivide: false
        }]
      }, {
        title: "Logout",
        icon: "mdi-logout",
        path: "/logout",
        access: ["Admin", "Reception", "Manager", "Accounts", "Teacher", "Kups", "PA"],
        isGroups: false
      }]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Sams.vue?vue&type=template&id=2a4899c0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Sams.vue?vue&type=template&id=2a4899c0& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { staticClass: "d-print-none", attrs: { cols: "12", md: "3" } },
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { height: "100%", flat: "" } },
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
            { attrs: { cols: "12", md: "8" } },
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

/***/ "./resources/js/components/Views/Sams.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Views/Sams.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sams_vue_vue_type_template_id_2a4899c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sams.vue?vue&type=template&id=2a4899c0& */ "./resources/js/components/Views/Sams.vue?vue&type=template&id=2a4899c0&");
/* harmony import */ var _Sams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sams.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/Sams.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sams_vue_vue_type_template_id_2a4899c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sams_vue_vue_type_template_id_2a4899c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/Sams.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/Sams.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Views/Sams.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sams.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Sams.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/Sams.vue?vue&type=template&id=2a4899c0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Views/Sams.vue?vue&type=template&id=2a4899c0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sams_vue_vue_type_template_id_2a4899c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sams.vue?vue&type=template&id=2a4899c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Sams.vue?vue&type=template&id=2a4899c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sams_vue_vue_type_template_id_2a4899c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sams_vue_vue_type_template_id_2a4899c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);