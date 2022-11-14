(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[194],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/startup/New.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/startup/New.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "new-get-started",
  props: ["scroller"],
  data: function data() {
    var _this = this;

    return {
      passw: false,
      dialog: false,
      tab: "signin",
      errorMessages: "",
      errors: "",
      valid: false,
      register: {
        first_name: "",
        family_name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "United Arab Emirates",
        town: "Dubai",
        street: ""
      },
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        min: function min(v) {
          return v.length >= 8 || "Min 8 characters";
        },
        validEmail: function validEmail(v) {
          return /.+@.+/.test(v) || "Email address must be valid";
        },
        confirmPassword: function confirmPassword(v) {
          return v === _this.register.password || "Password not match";
        }
      },
      country: ["United Arab Emirates"],
      status: "Next",
      title: "Check Email Address"
    };
  },
  methods: {
    close: function close() {
      this.dialog = false;
      this.status = "Next";
      this.title = "Check Email Address";
    },
    change_email: function change_email() {
      this.status = "Next";
    },
    started: function started() {
      this.$store.commit("USER_LOADER", true);

      if (this.status == "Next") {
        this.Check_email();
      }

      if (this.status == "Login") {
        this.Login();
      }

      if (this.status == "Register") {
        this.Create_account();
      }
    },
    Check_email: function Check_email() {
      var _this2 = this;

      this.$store.dispatch("CHECK_EMAIL", {
        email: this.register.email
      }).then(function (result) {
        if (result.data) {
          _this2.status = "Login";
          _this2.title = "Login";
        } else {
          _this2.status = "Register";
          _this2.title = "Register";
        }
      })["catch"](function (err) {});
    },
    Login: function Login() {
      var _this3 = this;

      this.$store.dispatch("LOGIN", {
        email: this.register.email,
        password: this.register.password
      }).then(function (result) {
        _this3.$store.commit("USER_LOADER", false);

        _this3.$store.dispatch("CURRENT_USER");

        window.location.href = "/";

        _this3.close();
      })["catch"](function (err) {
        _this3.$store.commit("USER_LOADER", false);

        console.log(err.response.data);
        _this3.errors = err;
      });
    },
    Create_account: function Create_account() {
      var _this4 = this;

      this.$store.dispatch("REGISTER", {
        first_name: this.register.first_name,
        family_name: this.register.family_name,
        username: this.register.username,
        role: "User",
        email: this.register.email,
        password: this.register.password,
        country: this.register.country,
        town: this.register.town,
        street: this.register.street
      }).then(function (result) {
        setTimeout(function () {
          _this4.Login();
        }, 1000);
      })["catch"](function (err) {
        _this4.$store.commit("USER_LOADER", false);

        _this4.errorMessages = err;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/startup/New.vue?vue&type=template&id=f0f1321a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/startup/New.vue?vue&type=template&id=f0f1321a& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { width: "600", persistent: "" },
      on: { "click:outside": _vm.close },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            return [
              _c(
                "v-btn",
                _vm._g(
                  {
                    staticClass: "text-none",
                    attrs: {
                      dark:
                        _vm.$route.name == "Home" &&
                        !_vm.scroller &&
                        _vm.$vuetify.breakpoint.mdAndUp,
                      text: ""
                    }
                  },
                  on
                ),
                [_vm._v("\n      Get Started\n    ")]
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-form",
        {
          ref: "form",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.started($event)
            }
          },
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
            "v-card",
            { attrs: { loading: _vm.$store.state.Users.loading } },
            [
              _c(
                "v-toolbar",
                { attrs: { dense: "", color: "blue darken-2", dark: "" } },
                [
                  _c("v-toolbar-title", [
                    _vm._v("\n          " + _vm._s(_vm.title) + "\n        ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.status == "Next"
                ? _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Email Address",
                          rules: [_vm.rules.validEmail]
                        },
                        model: {
                          value: _vm.register.email,
                          callback: function($$v) {
                            _vm.$set(_vm.register, "email", $$v)
                          },
                          expression: "register.email"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.status == "Login"
                ? _c(
                    "v-card-text",
                    [
                      _c(
                        "v-alert",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors,
                              expression: "errors"
                            }
                          ],
                          staticClass: "mb-5",
                          attrs: { value: true, color: "error" }
                        },
                        [
                          _vm._v(
                            "\n          " + _vm._s(_vm.errors) + "\n        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.register.email) +
                              "\n          "
                          ),
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-none",
                              attrs: { text: "" },
                              on: { click: _vm.change_email }
                            },
                            [
                              _vm._v(
                                "\n            Change email address?\n          "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "password",
                          rules: [_vm.rules.required],
                          "append-icon": _vm.passw ? "mdi-eye" : "mdi-eye-off",
                          type: _vm.passw ? "text" : "password"
                        },
                        on: {
                          "click:append": function($event) {
                            _vm.passw = !_vm.passw
                          }
                        },
                        model: {
                          value: _vm.register.password,
                          callback: function($$v) {
                            _vm.$set(_vm.register, "password", $$v)
                          },
                          expression: "register.password"
                        }
                      }),
                      _vm._v(" "),
                      _c("a", { attrs: { href: "/reset-password" } }, [
                        _vm._v(" Reset Password ")
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.status == "Register"
                ? _c(
                    "v-card-text",
                    [
                      _vm._l(_vm.errorMessages.errors, function(error) {
                        return _c(
                          "v-alert",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errorMessages,
                                expression: "errorMessages"
                              }
                            ],
                            key: error,
                            staticClass: "mb-5",
                            attrs: { value: true, color: "error" }
                          },
                          [
                            _vm._v(
                              "\n          " + _vm._s(error[0]) + "\n        "
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "First Name",
                                      rules: [_vm.rules.required]
                                    },
                                    model: {
                                      value: _vm.register.first_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.register,
                                          "first_name",
                                          $$v
                                        )
                                      },
                                      expression: "register.first_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Family Name",
                                      rules: [_vm.rules.required]
                                    },
                                    model: {
                                      value: _vm.register.family_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.register,
                                          "family_name",
                                          $$v
                                        )
                                      },
                                      expression: "register.family_name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Username",
                                      rules: [_vm.rules.required]
                                    },
                                    model: {
                                      value: _vm.register.username,
                                      callback: function($$v) {
                                        _vm.$set(_vm.register, "username", $$v)
                                      },
                                      expression: "register.username"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Email",
                                      rules: [_vm.rules.validEmail]
                                    },
                                    model: {
                                      value: _vm.register.email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.register, "email", $$v)
                                      },
                                      expression: "register.email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-subheader",
                                    { staticClass: "headline" },
                                    [_vm._v(" Address ")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.country,
                                      label: "Country"
                                    },
                                    model: {
                                      value: _vm.register.country,
                                      callback: function($$v) {
                                        _vm.$set(_vm.register, "country", $$v)
                                      },
                                      expression: "register.country"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.$store.state.town,
                                      label: "Emirate"
                                    },
                                    model: {
                                      value: _vm.register.town,
                                      callback: function($$v) {
                                        _vm.$set(_vm.register, "town", $$v)
                                      },
                                      expression: "register.town"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Street",
                                      rules: [_vm.rules.required]
                                    },
                                    model: {
                                      value: _vm.register.street,
                                      callback: function($$v) {
                                        _vm.$set(_vm.register, "street", $$v)
                                      },
                                      expression: "register.street"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Password",
                                      "append-icon": _vm.passw
                                        ? "mdi-eye"
                                        : "mdi-eye-off",
                                      type: _vm.passw ? "text" : "password",
                                      rules: [_vm.rules.required, _vm.rules.min]
                                    },
                                    on: {
                                      "click:append": function($event) {
                                        _vm.passw = !_vm.passw
                                      }
                                    },
                                    model: {
                                      value: _vm.register.password,
                                      callback: function($$v) {
                                        _vm.$set(_vm.register, "password", $$v)
                                      },
                                      expression: "register.password"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Confirm Password",
                                      "append-icon": _vm.passw
                                        ? "mdi-eye"
                                        : "mdi-eye-off",
                                      type: _vm.passw ? "text" : "password",
                                      rules: [_vm.rules.required, _vm.rules.min]
                                    },
                                    on: {
                                      "click:append": function($event) {
                                        _vm.passw = !_vm.passw
                                      }
                                    },
                                    model: {
                                      value: _vm.register.confirmPassword,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.register,
                                          "confirmPassword",
                                          $$v
                                        )
                                      },
                                      expression: "register.confirmPassword"
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
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "primary text-none",
                      attrs: { type: "submit", disabled: !_vm.valid }
                    },
                    [_vm._v("\n          " + _vm._s(_vm.status) + "\n        ")]
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

/***/ "./resources/js/components/startup/New.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/startup/New.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_f0f1321a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=f0f1321a& */ "./resources/js/components/startup/New.vue?vue&type=template&id=f0f1321a&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/components/startup/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_f0f1321a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_f0f1321a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/startup/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/startup/New.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/startup/New.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/startup/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/startup/New.vue?vue&type=template&id=f0f1321a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/startup/New.vue?vue&type=template&id=f0f1321a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_f0f1321a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=f0f1321a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/startup/New.vue?vue&type=template&id=f0f1321a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_f0f1321a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_f0f1321a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);