(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap-vuetify */ "./node_modules/tiptap-vuetify/dist/bundle-esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "email-view",
  components: {
    TiptapVuetify: tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["TiptapVuetify"]
  },
  data: function data() {
    return {
      is_sending: false,
      subject: null,
      body: "",
      count: 0,
      success: false,
      extensions: [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["History"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Blockquote"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Link"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Underline"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Strike"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Italic"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["ListItem"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["BulletList"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["OrderedList"], [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
        options: {
          levels: [1, 2, 3]
        }
      }], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Bold"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Code"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["HorizontalRule"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Paragraph"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["HardBreak"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Image"]]
    };
  },
  watch: {
    count: function count() {
      var _this = this;

      if (this.count == this.$store.state.Emails.email_filtered.length) {
        this.success = true;
        this.remove();
        this.subject = null;
        this.body = "";
        setTimeout(function () {
          _this.is_sending = false;
          _this.success = false;
        }, 5000);
      }
    }
  },
  methods: {
    remove: function remove() {
      this.$store.commit("EMAIL_FILTERED", []);
    },
    send: function send() {
      this.email_template(this.$store.state.Emails.email_filtered);
      this.is_sending = true;
    },
    email_template: function email_template(emails) {
      var _this2 = this;

      for (var i = 0; i < emails.length; i++) {
        Email.send({
          SecureToken: "29491cb9-4953-44f4-ac2e-8292c80452c8",
          To: emails[i],
          From: "info@stepup.ae",
          Bcc: "vincent@stepup.ae",
          Subject: this.subject,
          Body: "<div style=\"margin: 0; padding: 0;\">\n                    <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\n                        <tr>\n                            <td align=\"center\" bgcolor=\"#fff\" style=\"padding: 20px 0 0 0;\">\n                                <img src=\"https://stepup.ae/img/logoStepUp.png\" alt=\"StepUp Academy\" width=\"130\" height=\"100\" style=\"display: block;\" />\n                                <h1 style=\"color:#000\">StepUp Academy</h1>\n                                <h3>StepUp Academy</h3>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td bgcolor=\"#fff\" style=\"padding: 40px 30px 40px 30px;\">\n                                ".concat(this.body, "\n                            </td>\n                        </tr>\n                        <tr>\n                            <td bgcolor=\"#49a0d9 \" style=\"padding: 30px 30px 30px 30px;\">\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                                    <tr>\n                                        <td width=\"75%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 14px;\">&copy; StepUp Academy<br/> <a href=\"mailto:info@stepup.ae\" style=\"color: #fff; text-decoration: none;\"><font color=\"#000\">info@stepup.ae</font></a></td>\n                                        <td align=\"right\">\n                                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                                                <tr>\n                                                    <td><a href=\"https://www.instagram.com/step_up_academy/\" target=\"_blank\">\n                                                        <img src=\"https://enrollment.stepup.ae/img/instagram.png\" alt=\"Instagram\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" /></a></td><td><a href=\"https://www.facebook.com/StepUp-Academy-208684865876848/\" target=\"_blank\"><img src=\"https://enrollment.stepup.ae/img/facebook.png\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" /></a>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                    </table>\n                </div>")
        }).then(function (result) {
          _this2.count = i;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=template&id=59e2a30e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=template&id=59e2a30e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-2" },
    [
      _c(
        "v-card-text",
        [
          _c("label", { attrs: { for: "email" } }, [_vm._v("Email Address")]),
          _vm._v(" "),
          _c("v-autocomplete", {
            staticClass: "overflow-y-auto",
            attrs: {
              items: _vm.$store.state.Emails.email_filtered,
              height: "100",
              id: "email",
              multiple: "",
              "cache-items": "",
              "allow-overflow": false,
              flat: "",
              solo: "",
              "disable-lookup": "",
              readonly: ""
            },
            model: {
              value: _vm.$store.state.Emails.email_filtered,
              callback: function($$v) {
                _vm.$set(_vm.$store.state.Emails, "email_filtered", $$v)
              },
              expression: "$store.state.Emails.email_filtered"
            }
          }),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Number of email(s) " +
                _vm._s(_vm.$store.state.Emails.email_filtered.length)
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-right" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "text-none error",
                  attrs: { small: "" },
                  on: { click: _vm.remove }
                },
                [_vm._v("Remove emails")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.is_sending
        ? _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "10" } },
                    [
                      _vm.is_sending
                        ? _c("v-progress-linear", {
                            attrs: {
                              value: _vm.count,
                              height: "15",
                              "buffer-value":
                                _vm.$store.state.Emails.email_filtered.length
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2" } },
                    [
                      _vm.success
                        ? _c(
                            "v-card-text",
                            [
                              _c(
                                "v-icon",
                                { attrs: { color: "green", "x-large": "" } },
                                [_vm._v(" mdi-check-bold ")]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-text-field", {
            attrs: { label: "Subject" },
            model: {
              value: _vm.subject,
              callback: function($$v) {
                _vm.subject = $$v
              },
              expression: "subject"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("tiptap-vuetify", {
            attrs: { extensions: _vm.extensions },
            model: {
              value: _vm.body,
              callback: function($$v) {
                _vm.body = $$v
              },
              expression: "body"
            }
          })
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
              staticClass: "text-none primary",
              attrs: { loading: _vm.is_sending },
              on: { click: _vm.send }
            },
            [_vm._v("Send")]
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

/***/ "./resources/js/components/Components/Authtenticated/Email/View.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Email/View.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_59e2a30e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=59e2a30e& */ "./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=template&id=59e2a30e&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_59e2a30e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_59e2a30e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Email/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=template&id=59e2a30e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=template&id=59e2a30e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_59e2a30e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=59e2a30e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Email/View.vue?vue&type=template&id=59e2a30e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_59e2a30e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_59e2a30e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);