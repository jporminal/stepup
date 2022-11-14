(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[180],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Reset_password.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Reset_password.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "reset-password",
  data: function data() {
    return {
      passw: false,
      is_exist: false,
      valid: false,
      email: null,
      verification: "",
      password: "",
      confirm_password: "",
      email_rules: function email_rules(v) {
        return /.+@.+/.test(v) || "Email address must be valid";
      },
      alert: {
        color: "",
        text: null
      }
    };
  },
  methods: {
    change_password: function change_password() {
      var _this = this;

      this.$store.dispatch("CHANGE_PASSWORD", {
        email: this.email,
        password: this.password,
        verification: this.verification
      }).then(function (result) {
        if (result.data.status == 200) {
          var alert = {
            color: "green lighten-2",
            text: result.data.response
          };
          _this.alert = alert;
        } else {
          var alert = {
            color: "red lighten-2",
            text: result.data.response
          };
          _this.alert = alert;
        }
      });
    },
    check_email: function check_email() {
      var _this2 = this;

      this.$store.dispatch("CHECK_EMAIL", {
        email: this.email
      }).then(function (result) {
        if (result.data) {
          _this2.send_token(result.data);
        } else {
          var alert = {
            color: "red lighten-2",
            text: "Email address do not exist"
          };
          _this2.alert = alert;
          setTimeout(function () {
            var alert = {
              color: "",
              text: null
            };
            _this2.alert = alert;
          }, 3000);
        }
      });
    },
    send_token: function send_token(user) {
      var _this3 = this;

      this.$store.dispatch("SEND_TOKEN", {
        email: user.email
      }).then(function (result) {
        var alert = {
          color: "green lighten-2",
          text: "We sent a verification ID to your email!"
        };

        _this3.email_token(user, result.data);

        _this3.is_exist = true;
        _this3.alert = alert;
        setTimeout(function () {
          var alert = {
            color: "",
            text: null
          };
          _this3.alert = alert;
        }, 3000);
      });
    },
    email_token: function email_token(user, token) {
      Email.send({
        SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
        To: user.email,
        From: "info@stepup.ae",
        Bcc: "vincent@stepup.ae",
        Subject: "Reset Password",
        Body: "<div style=\"margin: 0; padding: 0;\">\n            <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\n                <tr>\n                    <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                        <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                        <h1 style=\"color:#000\">\n                            StepUp Academy\n                        </h1>\n                        <h3>\n                            Reset Password\n                        </h3>\n                    </td>\n                </tr>\n                <tr>\n                    <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                        <div align=\"left\">\n                        Dear <strong> ".concat(user.first_name, " ").concat(user.last_name, ",</strong>\n                        <br /><br />\n                        Your password reset verification is ").concat(token, "\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                            <tr>\n                                <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">&copy; StepUp Academy<br/> <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\"><font color=\"#000\">info@stepup.ae</font></a></td>\n                                <td align=\"right\">\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                        <tr>\n                                            <td><a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                <img src=\"https://enrollment.stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" /></a></td><td><a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\"><img src=\"https://enrollment.stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" /></a>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </td>\n                            </tr>\n                        </table>\n                    </td>\n                </tr>\n            </table>\n        </div>")
      });
    }
  },
  metaInfo: function metaInfo() {
    return {
      title: "StepUp Academy",
      titleTemplate: "%s - Reset Password",
      htmlAttrs: {
        lang: "en"
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Reset_password.vue?vue&type=template&id=5c547c57&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/Reset_password.vue?vue&type=template&id=5c547c57& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { flat: "" } },
    [
      _c("v-card-text", [
        _c("p", { staticClass: "text-center text-h6" }, [
          _vm._v("Reset Password")
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            {
              ref: "form",
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "10" } },
                    [
                      _c(
                        "v-alert",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.alert.text,
                              expression: "alert.text"
                            }
                          ],
                          attrs: {
                            border: "top",
                            color: _vm.alert.color,
                            dark: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.alert.text) +
                              "\n          "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "5" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Email Address",
                          rules: [_vm.email_rules],
                          clearable: "",
                          disabled: _vm.is_exist ? true : false
                        },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.is_exist
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", md: "5" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Verification code",
                              rules: [
                                function(v) {
                                  return !!v || "verification code is required"
                                },
                                function(v) {
                                  return (
                                    (v.length > 5 && v.length < 7) ||
                                    "verification code is not valid"
                                  )
                                }
                              ]
                            },
                            model: {
                              value: _vm.verification,
                              callback: function($$v) {
                                _vm.verification = $$v
                              },
                              expression: "verification"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.is_exist
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", md: "5" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Password",
                              rules: [
                                function(v) {
                                  return !!v || "Password is required"
                                }
                              ],
                              "append-icon": _vm.passw
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              type: _vm.passw ? "text" : "password"
                            },
                            on: {
                              "click:append": function($event) {
                                _vm.passw = !_vm.passw
                              }
                            },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.is_exist
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", md: "5" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Confirm Password",
                              rules: [
                                function(v) {
                                  return !!v || "Confirm password is required"
                                },
                                function(v) {
                                  return (
                                    v == this$1.password ||
                                    "Password and confirm password do not match"
                                  )
                                }
                              ],
                              "append-icon": _vm.passw
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              type: _vm.passw ? "text" : "password"
                            },
                            on: {
                              "click:append": function($event) {
                                _vm.passw = !_vm.passw
                              }
                            },
                            model: {
                              value: _vm.confirm_password,
                              callback: function($$v) {
                                _vm.confirm_password = $$v
                              },
                              expression: "confirm_password"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "10" } }, [
                    _c(
                      "div",
                      { staticClass: "text-right" },
                      [
                        !_vm.is_exist
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "text-none primary",
                                attrs: { disabled: !_vm.valid },
                                on: { click: _vm.check_email }
                              },
                              [_vm._v("Reset Password")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.is_exist
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "text-none primary",
                                attrs: { disabled: !_vm.valid },
                                on: { click: _vm.change_password }
                              },
                              [_vm._v("Submit")]
                            )
                          : _vm._e()
                      ],
                      1
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Views/Reset_password.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Views/Reset_password.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reset_password_vue_vue_type_template_id_5c547c57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset_password.vue?vue&type=template&id=5c547c57& */ "./resources/js/components/Views/Reset_password.vue?vue&type=template&id=5c547c57&");
/* harmony import */ var _Reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reset_password.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/Reset_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reset_password_vue_vue_type_template_id_5c547c57___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reset_password_vue_vue_type_template_id_5c547c57___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/Reset_password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/Reset_password.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Views/Reset_password.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset_password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Reset_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/Reset_password.vue?vue&type=template&id=5c547c57&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Views/Reset_password.vue?vue&type=template&id=5c547c57& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_password_vue_vue_type_template_id_5c547c57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset_password.vue?vue&type=template&id=5c547c57& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/Reset_password.vue?vue&type=template&id=5c547c57&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_password_vue_vue_type_template_id_5c547c57___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_password_vue_vue_type_template_id_5c547c57___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);