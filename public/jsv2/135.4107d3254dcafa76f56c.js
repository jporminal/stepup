(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Home/ContactUs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Home/ContactUs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "contact-form",
  data: function data() {
    return {
      currentItem: "tab-Contact",
      isActive: false,
      valid: true,
      contact_us: {
        name: "",
        email: "",
        contact: "",
        message: "",
        status: "inprogress",
        type: "tab-Contact"
      },
      items: ["Contact", "Complaint"],
      formRules: {
        name: [function (v) {
          return !!v || "Name is required";
        }],
        email: [function (v) {
          return !!v || "Email address is required";
        }, function (v) {
          return /.+@.+/.test(v) || "E-mail must be valid";
        }],
        contact: [function (v) {
          return !!v || "Contact is required";
        }],
        message: [function (v) {
          return !!v || "Message is required";
        }]
      }
    };
  },
  methods: {
    fresh: function fresh() {
      this.$refs.form.reset();
    },
    send: function send() {
      var _this = this;

      //   this.contactUS();
      this.$store.dispatch('CONTACT_US', {
        contact: this.contact_us
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
          text: "Thank you. We will contact you soon!"
        };

        _this.$store.commit("SNACKBAR", snackbar);

        _this.valid = false;

        _this.fresh();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Home/ContactUs.vue?vue&type=template&id=2f4d3328&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Home/ContactUs.vue?vue&type=template&id=2f4d3328& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                "v-container",
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", xs: "12", md: "5" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("h1", { staticClass: "display-1" }, [
                                  _vm._v("Contact Us")
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
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Name",
                                                  rules: _vm.formRules.name
                                                },
                                                model: {
                                                  value: _vm.contact_us.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.contact_us,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "contact_us.name"
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
                                                  label: "Email Address",
                                                  rules: _vm.formRules.email
                                                },
                                                model: {
                                                  value: _vm.contact_us.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.contact_us,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "contact_us.email"
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
                                                  type: "number",
                                                  label: "Contact Number",
                                                  rules: _vm.formRules.contact
                                                },
                                                model: {
                                                  value: _vm.contact_us.contact,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.contact_us,
                                                      "contact",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "contact_us.contact"
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
                                              _c("v-textarea", {
                                                attrs: {
                                                  label: "Message",
                                                  rules: _vm.formRules.message
                                                },
                                                model: {
                                                  value: _vm.contact_us.message,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.contact_us,
                                                      "message",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "contact_us.message"
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
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        disabled: !_vm.valid,
                                        color: "primary"
                                      },
                                      on: { click: _vm.send }
                                    },
                                    [
                                      _vm._v(
                                        "\n                    Send\n                  "
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", xs: "12", md: "5" } },
                        [
                          _c("div", { staticStyle: { color: "#525252" } }, [
                            _c("h1", { staticClass: "text-center display-1" }, [
                              _vm._v("Keep in Touch!")
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("h3", [_vm._v("Call Us")]),
                            _vm._v(" "),
                            _c("h4", { staticClass: "ml-5" }, [
                              _vm._v("\n                  Phone: "),
                              _c("a", { attrs: { href: "tel:+97144534360" } }, [
                                _vm._v(" +971 4 453 4360 ")
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v("\n                  Mobile: "),
                              _c(
                                "a",
                                { attrs: { href: "tel:+971558552797" } },
                                [_vm._v(" +971 55 855 2797 ")]
                              ),
                              _vm._v(" "),
                              _c("br")
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("h3", [_vm._v("Office Timings")]),
                            _vm._v(" "),
                            _c("h4", { staticClass: "ml-5" }, [
                              _vm._v(
                                "\n                  Monday - Saturday: 9:00am - 7:00pm"
                              ),
                              _c("br"),
                              _vm._v(
                                "\n                  Sunday: Closed\n                "
                              )
                            ])
                          ])
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Home/ContactUs.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Components/Home/ContactUs.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactUs_vue_vue_type_template_id_2f4d3328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=2f4d3328& */ "./resources/js/components/Components/Home/ContactUs.vue?vue&type=template&id=2f4d3328&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Home/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUs_vue_vue_type_template_id_2f4d3328___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactUs_vue_vue_type_template_id_2f4d3328___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Home/ContactUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Home/ContactUs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Components/Home/ContactUs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Home/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Home/ContactUs.vue?vue&type=template&id=2f4d3328&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Components/Home/ContactUs.vue?vue&type=template&id=2f4d3328& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_2f4d3328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=template&id=2f4d3328& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Home/ContactUs.vue?vue&type=template&id=2f4d3328&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_2f4d3328___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_2f4d3328___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);