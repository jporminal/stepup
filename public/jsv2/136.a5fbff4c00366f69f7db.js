(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Trial/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Form/Trial/Form.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'trial-form',
  components: {
    terms: function terms() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../Enrollment/tcs_terms_condition */ "./resources/js/components/Components/Form/Enrollment/tcs_terms_condition.vue"));
    },
    cov: function cov() {
      return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../Enrollment/tcs_covid */ "./resources/js/components/Components/Form/Enrollment/tcs_covid.vue"));
    }
  },
  data: function data() {
    return {
      valid: false,
      loading: false,
      item_combos: ['Yes', 'No'],
      genders: ["Male", "Female"]
    };
  },
  methods: {
    input_text: function input_text() {
      this.$store.commit("ENROLLMENT", this.$store.state.Enrollments.enrollment);
    },
    save: function save() {
      var _this = this;

      this.loading = true;
      this.$store.dispatch('ENROLLMENT', {
        form: this.$store.state.Enrollments.enrollment
      }).then(function (result) {
        var snackbar = {
          snackbar: true,
          vertical: true,
          timeout: 2000,
          color: "blue lighten-2",
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "Thank you for using our online enrollment"
        }; // this.send_mail_to_parent(result.data.password);
        // this.send_mail_to_reception();

        _this.$store.commit("SNACKBAR", snackbar);

        setTimeout(function () {
          window.location.reload();
        }, 10000);
      })["catch"](function (err) {
        var snackbar = {
          snackbar: true,
          vertical: false,
          timeout: 2000,
          color: "red",
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "Sorry, We have encounter network error. Please try to reload your browser. Thank you :)"
        };

        _this.$store.commit("SNACKBAR", snackbar);
      });
    },
    terms_condition: function terms_condition() {
      this.$store.commit("TERMS_CONDITIONS_OPEN", true);
    },
    covid: function covid() {
      this.$store.commit("COVID_OPEN", true);
    },
    send_mail_to_parent: function send_mail_to_parent(password) {
      Email.send({
        SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
        To: this.$store.state.Enrollments.enrollment.mother.email,
        From: "info@stepup.ae",
        Subject: "Trial Form",
        Body: "\n                    <div style=\"margin: 0; padding: 0;\">\n                        <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\n                            <tr>\n                                <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                                    <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                                    <h1 style=\"color:#000\">StepUp Academy</h1>\n                                    <h3>Trial Form</h3>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                                    <br><br>\n                                    Dear ".concat(this.$store.state.Enrollments.enrollment.mother.first_name, ",\n                                    <br><br>\n                                    ").concat(password ? "Thank you for using our online enrollment form. We have create your login credentials on our website. Please use your registered email address and your new password ".concat(password) : "Thank you for enrolling your child at StepUp Academy!", "\n                                </td>\n                            </tr>\n                            <tr>\n                                <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                                        <tr>\n                                            <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">\n                                                &copy; StepUp Academy<br/>\n                                                <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\">\n                                                <font color=\"#000\">info@stepup.ae</font></a>\n                                            </td>\n                                            <td align=\"right\">\n                                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                                    <tr>\n                                                        <td>\n                                                            <a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                                <img src=\"https://stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                            </a>\n                                                        </td>\n                                                        <td>\n                                                            <a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\">\n                                                                <img src=\"https://stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                            </a>\n                                                        </td>\n                                                    </tr>\n                                                </table>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                    ")
      });
    },
    send_mail_to_reception: function send_mail_to_reception() {
      var _this2 = this;

      this.$store.state.Enrollments.enrollment.children.forEach(function (element) {
        if (element.first_name) {
          Email.send({
            SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
            To: "info@stepup.ae",
            From: _this2.$store.state.Enrollments.enrollment.mother.email,
            Bcc: "xero@stepup.ae",
            Subject: "Trial Form - ".concat(element.first_name, " ").concat(element.family_name),
            Body: "\n                        <div style=\"margin: 0; padding: 0;\">\n                            <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\n                                <tr>\n                                    <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                                        <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                                        <h1 style=\"color:#000\">StepUp Academy</h1>\n                                        <h3>Trial Form</h3>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                                        <h4 align=\"center\"> Children Information</h4>\n                                        <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n                                            <tr>\n                                                <td width=\"20%\">Name</td>\n                                                <td> ".concat(element.first_name, " ").concat(element.family_name, " </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Date of Birth</td>\n                                                <td> ").concat(element.dob, " </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Gender</td>\n                                                <td> ").concat(element.gender, " </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td bgcolor=\"#fff\" style=\"padding: 0px 30px 0px 30px;\">\n                                        <h4 align=\"center\"> Parent Information</h4>\n                                        <h5>Mother Info</h5>\n                                        <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n                                            <tr>\n                                                <td width=\"20%\">Name</td>\n                                                <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.first_name, " ").concat(_this2.$store.state.Enrollments.enrollment.mother.family_name, " </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Email Address</td>\n                                                <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.email, " </td>\n                                                <td>Home Number</td>\n                                                <td> ").concat(_this2.$store.state.Enrollments.enrollment.mother.home_number, " </td>\n                                            </tr>\n                                        </table>\n                                        <h5>Father Info</h5>\n                                        <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n                                            <tr>\n                                                <td width=\"20%\">Name</td>\n                                                <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.first_name, " ").concat(_this2.$store.state.Enrollments.enrollment.father.family_name, " </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Email Address</td>\n                                                <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.email, " </td>\n                                                <td>Home Number</td>\n                                                <td> ").concat(_this2.$store.state.Enrollments.enrollment.father.home_number, " </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td bgcolor=\"#fff\" style=\"padding: 0px 30px 0px 30px;\">\n                                        <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n                                            <tr>\n                                                <td width=\"20%\">Medical History</td>\n                                                <td> ").concat(element.medical_history, "</td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                                            <tr>\n                                                <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">\n                                                    &copy; StepUp Academy<br/>\n                                                    <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\">\n                                                    <font color=\"#000\">info@stepup.ae</font></a>\n                                                </td>\n                                                <td align=\"right\">\n                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                                        <tr>\n                                                            <td>\n                                                                <a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                                    <img src=\"https://stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                                </a>\n                                                            </td>\n                                                            <td>\n                                                                <a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\">\n                                                                    <img src=\"https://stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n                                                                </a>\n                                                            </td>\n                                                        </tr>\n                                                    </table>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                        ")
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Trial/Form.vue?vue&type=template&id=51ff3ecc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Form/Trial/Form.vue?vue&type=template&id=51ff3ecc& ***!
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
  return _c(
    "v-card",
    [
      _c(
        "v-toolbar",
        { attrs: { color: "blue lighten-2", dark: "", flat: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { staticClass: "d-flex justify-space-around" },
                [
                  _c("v-toolbar-title", [
                    _c("p", { staticClass: "title" }, [_vm._v("TRIAL FORM")])
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
            "v-card",
            { attrs: { flat: "" } },
            [
              _c(
                "v-card-text",
                [
                  _vm._l(
                    _vm.$store.state.Enrollments.enrollment.children,
                    function(item, index) {
                      return [
                        _c(
                          "div",
                          { key: index },
                          [
                            _c("v-subheader", { staticClass: "title" }, [
                              _vm._v(
                                "\n                Child's Details\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              { attrs: { align: "center", justify: "center" } },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", md: "5" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "First Name",
                                        rules: [
                                          function(v) {
                                            return (
                                              !!v || "First name is required"
                                            )
                                          }
                                        ],
                                        "append-icon": "*"
                                      },
                                      on: { input: _vm.input_text },
                                      model: {
                                        value: item.first_name,
                                        callback: function($$v) {
                                          _vm.$set(item, "first_name", $$v)
                                        },
                                        expression: "item.first_name"
                                      }
                                    })
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
                                        label: "Family Name",
                                        rules: [
                                          function(v) {
                                            return (
                                              !!v || "Family name is required"
                                            )
                                          }
                                        ],
                                        "append-icon": "*"
                                      },
                                      on: { input: _vm.input_text },
                                      model: {
                                        value: item.family_name,
                                        callback: function($$v) {
                                          _vm.$set(item, "family_name", $$v)
                                        },
                                        expression: "item.family_name"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", md: "5" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        label: "Gender",
                                        items: _vm.genders
                                      },
                                      on: { input: _vm.input_text },
                                      model: {
                                        value: item.gender,
                                        callback: function($$v) {
                                          _vm.$set(item, "gender", $$v)
                                        },
                                        expression: "item.gender"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", md: "5" } },
                                  [
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: {
                                          "close-on-content-click": false,
                                          "nudge-right": 40,
                                          transition: "scale-transition",
                                          "offset-y": "",
                                          "min-width": "290px"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                var attrs = ref.attrs
                                                return [
                                                  _c(
                                                    "v-text-field",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            label:
                                                              "Date of Birth",
                                                            "prepend-icon":
                                                              "mdi-event",
                                                            readonly: "",
                                                            "append-icon": "*"
                                                          },
                                                          model: {
                                                            value: item.dob,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "dob",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.dob"
                                                          }
                                                        },
                                                        "v-text-field",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    )
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        ),
                                        model: {
                                          value: item.dob_open,
                                          callback: function($$v) {
                                            _vm.$set(item, "dob_open", $$v)
                                          },
                                          expression: "item.dob_open"
                                        }
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("v-date-picker", {
                                          attrs: {
                                            max: new Date()
                                              .toISOString()
                                              .substr(0, 10)
                                          },
                                          on: {
                                            input: function($event) {
                                              item.dob_open = false
                                            }
                                          },
                                          model: {
                                            value: item.dob,
                                            callback: function($$v) {
                                              _vm.$set(item, "dob", $$v)
                                            },
                                            expression: "item.dob"
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
                            ),
                            _vm._v(" "),
                            _c("v-subheader", { staticClass: "title" }, [
                              _vm._v(
                                "\n              Any medical condition?\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              { attrs: { align: "center", justify: "center" } },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", md: "5" } },
                                  [
                                    _c("v-combobox", {
                                      attrs: { items: _vm.item_combos },
                                      model: {
                                        value: item.medical_status,
                                        callback: function($$v) {
                                          _vm.$set(item, "medical_status", $$v)
                                        },
                                        expression: "item.medical_status"
                                      }
                                    })
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
                                        label: "details",
                                        disabled: item.medical_status == "No"
                                      },
                                      model: {
                                        value: item.medical_history,
                                        callback: function($$v) {
                                          _vm.$set(item, "medical_history", $$v)
                                        },
                                        expression: "item.medical_history"
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
                      ]
                    }
                  ),
                  _vm._v(" "),
                  _c("v-subheader", { staticClass: "title" }, [
                    _vm._v(" Mum's Details ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "5" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "First Name",
                              rules: [
                                function(v) {
                                  return !!v || "Mum's first name is required"
                                }
                              ],
                              "append-icon": "*"
                            },
                            model: {
                              value:
                                _vm.$store.state.Enrollments.enrollment.mother
                                  .first_name,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments.enrollment
                                    .mother,
                                  "first_name",
                                  $$v
                                )
                              },
                              expression:
                                "\n                $store.state.Enrollments.enrollment.mother.first_name\n              "
                            }
                          })
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
                              label: "Family Name",
                              rules: [
                                function(v) {
                                  return !!v || "Mum's family name is required"
                                }
                              ],
                              "append-icon": "*"
                            },
                            model: {
                              value:
                                _vm.$store.state.Enrollments.enrollment.mother
                                  .family_name,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments.enrollment
                                    .mother,
                                  "family_name",
                                  $$v
                                )
                              },
                              expression:
                                "\n                $store.state.Enrollments.enrollment.mother.family_name\n              "
                            }
                          })
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
                              rules: [
                                function(v) {
                                  return (
                                    /.+@.+/.test(v) || "Incorrect email address"
                                  )
                                }
                              ],
                              "append-icon": "*"
                            },
                            model: {
                              value:
                                _vm.$store.state.Enrollments.enrollment.mother
                                  .email,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments.enrollment
                                    .mother,
                                  "email",
                                  $$v
                                )
                              },
                              expression:
                                "$store.state.Enrollments.enrollment.mother.email"
                            }
                          })
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
                              label: "Contact Number",
                              type: "number",
                              rules: [
                                function(v) {
                                  return !!v || "Contact Number is required"
                                },
                                function(v) {
                                  return (
                                    v.length > 9 ||
                                    "Number must not less than 10 digits"
                                  )
                                },
                                function(v) {
                                  return (
                                    v.length < 11 ||
                                    "Number must not more than 10 digits"
                                  )
                                }
                              ],
                              hint: "05XXXXXXXX",
                              "persistent-hint": "",
                              "append-icon": "*"
                            },
                            model: {
                              value:
                                _vm.$store.state.Enrollments.enrollment.mother
                                  .home_number,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments.enrollment
                                    .mother,
                                  "home_number",
                                  $$v
                                )
                              },
                              expression:
                                "\n                $store.state.Enrollments.enrollment.mother.home_number\n              "
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-subheader", { staticClass: "title" }, [
                    _vm._v(" Dad's Details ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "5" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "First Name",
                              rules: [
                                function(v) {
                                  return !!v || "Dad's first name is required"
                                }
                              ],
                              "append-icon": "*"
                            },
                            model: {
                              value:
                                _vm.$store.state.Enrollments.enrollment.father
                                  .first_name,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments.enrollment
                                    .father,
                                  "first_name",
                                  $$v
                                )
                              },
                              expression:
                                "\n                $store.state.Enrollments.enrollment.father.first_name\n              "
                            }
                          })
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
                              label: "Family Name",
                              rules: [
                                function(v) {
                                  return !!v || "Dad's first name is required"
                                }
                              ],
                              "append-icon": "*"
                            },
                            model: {
                              value:
                                _vm.$store.state.Enrollments.enrollment.father
                                  .family_name,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments.enrollment
                                    .father,
                                  "family_name",
                                  $$v
                                )
                              },
                              expression:
                                "\n                $store.state.Enrollments.enrollment.father.family_name\n              "
                            }
                          })
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
                              rules: [
                                function(v) {
                                  return (
                                    /.+@.+/.test(v) || "Incorrect email address"
                                  )
                                }
                              ],
                              "append-icon": "*"
                            },
                            model: {
                              value:
                                _vm.$store.state.Enrollments.enrollment.father
                                  .email,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments.enrollment
                                    .father,
                                  "email",
                                  $$v
                                )
                              },
                              expression:
                                "$store.state.Enrollments.enrollment.father.email"
                            }
                          })
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
                              label: "Contact Number",
                              type: "number",
                              rules: [
                                function(v) {
                                  return !!v || "Contact Number is required"
                                },
                                function(v) {
                                  return (
                                    v.length > 9 ||
                                    "Number must not less than 10 digits"
                                  )
                                },
                                function(v) {
                                  return (
                                    v.length < 11 ||
                                    "Number must not more than 10 digits"
                                  )
                                }
                              ],
                              hint: "05XXXXXXXX",
                              "persistent-hint": "",
                              "append-icon": "*"
                            },
                            model: {
                              value:
                                _vm.$store.state.Enrollments.enrollment.father
                                  .home_number,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments.enrollment
                                    .father,
                                  "home_number",
                                  $$v
                                )
                              },
                              expression:
                                "\n                $store.state.Enrollments.enrollment.father.home_number\n              "
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("h3", [
                            _vm._v(
                              "\n            I agree to fulfil the obligations set forth to StepUp Academy\n            and will ensure all school terms in which I/my child attends are\n            accounted for\n          "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            staticClass: "my-0",
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "text-none",
                                        attrs: { text: "" },
                                        on: { click: _vm.terms_condition }
                                      },
                                      [
                                        _vm._v(
                                          "\n                Terms & Conditions\n              "
                                        )
                                      ]
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value:
                                _vm.$store.state.Enrollments.terms_condition,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments,
                                  "terms_condition",
                                  $$v
                                )
                              },
                              expression:
                                "$store.state.Enrollments.terms_condition"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            staticClass: "my-0",
                            scopedSlots: _vm._u([
                              {
                                key: "label",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "text-none",
                                        attrs: { text: "" },
                                        on: { click: _vm.covid }
                                      },
                                      [
                                        _vm._v(
                                          "\n                Covid-19\n              "
                                        )
                                      ]
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.$store.state.Enrollments.covid,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$store.state.Enrollments,
                                  "covid",
                                  $$v
                                )
                              },
                              expression: "$store.state.Enrollments.covid"
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
          ),
          _vm._v(" "),
          _c("terms"),
          _vm._v(" "),
          _c("cov"),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "success",
                  attrs: {
                    disabled:
                      !_vm.valid ||
                      !_vm.$store.state.Enrollments.terms_condition ||
                      !_vm.$store.state.Enrollments.covid,
                    loading: _vm.loading
                  },
                  on: { click: _vm.save }
                },
                [_vm._v("\n        Send Form\n      ")]
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

/***/ "./resources/js/components/Components/Form/Trial/Form.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Components/Form/Trial/Form.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_51ff3ecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=51ff3ecc& */ "./resources/js/components/Components/Form/Trial/Form.vue?vue&type=template&id=51ff3ecc&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Form/Trial/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_51ff3ecc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_51ff3ecc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Form/Trial/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Form/Trial/Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Components/Form/Trial/Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Trial/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Form/Trial/Form.vue?vue&type=template&id=51ff3ecc&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Components/Form/Trial/Form.vue?vue&type=template&id=51ff3ecc& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_51ff3ecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=51ff3ecc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Trial/Form.vue?vue&type=template&id=51ff3ecc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_51ff3ecc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_51ff3ecc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);