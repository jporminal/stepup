(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "update-profile-about",
  components: {
    TiptapVuetify: tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["TiptapVuetify"]
  },
  data: function data() {
    return {
      extensions: [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["History"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Blockquote"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Link"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Underline"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Strike"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Italic"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["ListItem"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["BulletList"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["OrderedList"], [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
        options: {
          levels: [1, 2, 3]
        }
      }], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Bold"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Code"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["HorizontalRule"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Paragraph"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["HardBreak"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Image"]]
    };
  },
  methods: {
    my_info: function my_info() {
      this.$store.commit("CURRENT_USER", this.$store.state.Users.current_user);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=template&id=6ddfb287&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=template&id=6ddfb287& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-card-title", [_vm._v("\n        About Information\n    ")]),
      _vm._v(" "),
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
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("tiptap-vuetify", {
                        attrs: { extensions: _vm.extensions },
                        on: { input: _vm.my_info },
                        model: {
                          value:
                            _vm.$store.state.Users.current_user.about
                              .meta_value,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Users.current_user.about,
                              "meta_value",
                              $$v
                            )
                          },
                          expression:
                            "\n                            $store.state.Users.current_user.about.meta_value\n                        "
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_Information_vue_vue_type_template_id_6ddfb287___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About_Information.vue?vue&type=template&id=6ddfb287& */ "./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=template&id=6ddfb287&");
/* harmony import */ var _About_Information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About_Information.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_Information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_Information_vue_vue_type_template_id_6ddfb287___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_Information_vue_vue_type_template_id_6ddfb287___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Accounts/About_Information.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_Information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./About_Information.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_Information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=template&id=6ddfb287&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=template&id=6ddfb287& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_Information_vue_vue_type_template_id_6ddfb287___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./About_Information.vue?vue&type=template&id=6ddfb287& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Accounts/About_Information.vue?vue&type=template&id=6ddfb287&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_Information_vue_vue_type_template_id_6ddfb287___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_Information_vue_vue_type_template_id_6ddfb287___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);