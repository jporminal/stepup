(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[134],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'photo-video-release-form',
  components: {
    snackbar: function snackbar() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../Components/Snackbar/Global_view */ "./resources/js/components/Components/Snackbar/Global_view.vue"));
    }
  },
  data: function data() {
    return {
      valid: false,
      loading: false,
      form: {
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date()).format('MMMM DD, YYYY'),
        student_name: null,
        parent_name: null,
        mobile: null,
        email: null
      }
    };
  },
  methods: {
    sending: function sending() {
      var _this = this;

      this.loading = true;
      Email.send({
        SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
        To: "info@stepup.ae",
        From: this.form.email,
        Subject: "PHOTO/VIDEO RELEASE FORM - ".concat(this.form.student_name),
        Body: "<div style=\"margin: 0; padding: 0;\">\n                <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"900\">\n                    <tr>\n                        <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                            <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                            <h1 style=\"color:#000\">\n                                StepUp Academy\n                            </h1>\n                            <h3>\n                                PHOTO/VIDEO RELEASE FORM\n                            </h3>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                            <h3>Date: <strong>".concat(this.form.date, "</strong></h3>\n                        <br><br>\n                         <h3>\n                         I, <span style=\"text-decoration: underline; font-weight: bold; color: red;\"> ").concat(this.form.parent_name, " </span>, parent/guardian of <span style=\"text-decoration: underline; font-weight: bold; color: red;\"> ").concat(this.form.student_name, " </span>. Give permission for my child to be photographed, videotaped, and or interviewed by representatives from and or employees of StepUp Academy for educational or public relation purposes. I authorize the use and reproduction by StepUp Academy or anyone authorized by StepUp Academy of any and all photographs and videos taken of my child, without compensation to me/my child. All these photographs/video recordings shall be the property, solely and completely, of StepUp Academy. I hereby release StepUp Academy and its agents and employees from all claims, demands, and liabilities whatsoever and waive any right to inspect or approve the finished photographs/videos, soundtrack, script or printed matter that may be used in conjunction with them.\n                         </h3>\n                         <br><br>\n\n                         <div style=\"text-decoration: overline;\">Signature of Parent/Guardian:</div>\n                         <br>\n                         Date: <u>").concat(this.form.date, "</u>\n                         <br>\n                         Name of Parent/Guardian: <u>").concat(this.form.parent_name, "</u>\n                         <br>\n                         Mobile Number: <u>").concat(this.form.mobile, "</u>\n                         <br>\n                         Email: <u>").concat(this.form.email, "</u>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                                <tr>\n                                    <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">&copy; StepUp Academy<br/> <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\"><font color=\"#000\">info@stepup.ae</font></a></td>\n                                    <td align=\"right\">\n                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                            <tr>\n                                                <td><a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                    <img src=\"https://enrollment.stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" /></a></td><td><a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\"><img src=\"https://enrollment.stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" /></a>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                </table>\n            </div>")
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
          text: "Thank you for filling up our form!"
        };

        _this.$store.commit("SNACKBAR", snackbar);

        var form = {
          date: moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date()).format('MMMM DD, YYYY'),
          student_name: null,
          parent_name: null,
          mobile: null,
          email: null
        };
        _this.form = form;

        _this.$refs.form.reset();

        _this.loading = false;
        _this.valid = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=template&id=cd765d18&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=template&id=cd765d18& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c("snackbar"),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { align: "start", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("v-card-text", [
                    _c(
                      "p",
                      { staticClass: "text-center text-h3 font-weight-bold" },
                      [
                        _vm._v(
                          "\n                        PHOTO/VIDEO RELEASE FORM\n                    "
                        )
                      ]
                    )
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
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function(v) {
                                  return !!v || "Student Name is required"
                                }
                              ]
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend",
                                fn: function() {
                                  return [
                                    _vm._v(
                                      "\n                                Student Name:\n                            "
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.form.student_name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "student_name", $$v)
                              },
                              expression: "form.student_name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function(v) {
                                  return !!v || "Parent Name is required"
                                }
                              ]
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend",
                                fn: function() {
                                  return [
                                    _vm._v(
                                      "\n                                Full Name of Parent/Guardian:\n                            "
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.form.parent_name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "parent_name", $$v)
                              },
                              expression: "form.parent_name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              type: "number",
                              rules: [
                                function(v) {
                                  return !!v || "Mobile is required"
                                }
                              ]
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend",
                                fn: function() {
                                  return [
                                    _vm._v(
                                      "\n                                Mobile Number:\n                            "
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.form.mobile,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "mobile", _vm._n($$v))
                              },
                              expression: "form.mobile"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [
                                function(v) {
                                  return !!v || "Email is required"
                                },
                                function(v) {
                                  return (
                                    /.+@.+/.test(v) || "E-mail must be valid"
                                  )
                                }
                              ]
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend",
                                fn: function() {
                                  return [
                                    _vm._v(
                                      "\n                                Email:\n                            "
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.form.email,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("p", { staticClass: "text-body-1" }, [
                      _vm._v("Date: "),
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(_vm.form.date))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-h6" }, [
                      _vm._v(" I, "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-bold text-decoration-underline red--text"
                        },
                        [_vm._v(" " + _vm._s(_vm.form.parent_name) + " ")]
                      ),
                      _vm._v(", parent/guardian of "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-weight-bold text-decoration-underline red--text"
                        },
                        [_vm._v(" " + _vm._s(_vm.form.student_name) + " ")]
                      ),
                      _vm._v(
                        ". Give permission for my child to be photographed, videotaped, and or interviewed by representatives from and or employees of StepUp Academy for educational or public relation purposes. I authorize the use and reproduction by StepUp Academy or anyone authorized by StepUp Academy of any and all photographs and videos taken of my child, without compensation to me/my child. All these photographs/video recordings shall be the property, solely and completely, of StepUp Academy. I hereby release StepUp Academy and its agents and employees from all claims, demands, and liabilities whatsoever and waive any right to inspect or approve the finished photographs/videos, soundtrack, script or printed matter that may be used in conjunction with them."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "text-none success",
                          attrs: { disabled: !_vm.valid, loading: _vm.loading },
                          on: { click: _vm.sending }
                        },
                        [
                          _vm._v(
                            "\n                        Submit\n                    "
                          )
                        ]
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

/***/ "./resources/js/components/Components/Form/others/photo_video_form.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Components/Form/others/photo_video_form.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _photo_video_form_vue_vue_type_template_id_cd765d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo_video_form.vue?vue&type=template&id=cd765d18& */ "./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=template&id=cd765d18&");
/* harmony import */ var _photo_video_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo_video_form.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _photo_video_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _photo_video_form_vue_vue_type_template_id_cd765d18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _photo_video_form_vue_vue_type_template_id_cd765d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Form/others/photo_video_form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_video_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./photo_video_form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_video_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=template&id=cd765d18&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=template&id=cd765d18& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_video_form_vue_vue_type_template_id_cd765d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./photo_video_form.vue?vue&type=template&id=cd765d18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/others/photo_video_form.vue?vue&type=template&id=cd765d18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_video_form_vue_vue_type_template_id_cd765d18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_video_form_vue_vue_type_template_id_cd765d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);