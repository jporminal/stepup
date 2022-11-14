(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
//
//
//
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
  name: "manage-lessons",
  components: {
    TiptapVuetify: tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["TiptapVuetify"]
  },
  data: function data() {
    return {
      valid: false,
      extensions: [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["History"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Blockquote"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Link"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Underline"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Strike"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Italic"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["ListItem"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["BulletList"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["OrderedList"], [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
        options: {
          levels: [1, 2, 3]
        }
      }], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Bold"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Code"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["HorizontalRule"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Paragraph"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["HardBreak"], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_0__["Image"]]
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$store.commit('LESSON_LOADING', true);
      this.$store.commit("LESSON", this.$store.state.Lessons.lesson);
      this.$store.dispatch("LESSON_SAVE", {
        form: this.$store.state.Lessons.lesson
      }).then(function (result) {
        var snackbar = {
          snackbar: true,
          vertical: false,
          timeout: 2000,
          color: "blue lighten-2",
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "Lesson successfully save!"
        };

        _this.$store.commit('LESSON_LOADING', false);

        _this.$store.commit("SNACKBAR", snackbar);

        _this.$store.dispatch("LESSONS", _this.$store.state.Lessons.lesson_filter);

        _this.close();
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
          text: "Something went wrong. Please reload your browser"
        };

        _this.$store.commit("SNACKBAR", snackbar);
      });
    },
    close: function close() {
      var filter = {
        filter: null,
        page: 1,
        per_page: 10
      };
      this.$store.commit("LESSON_FILTER", filter);
      this.$store.commit("LESSON", {});
      this.$store.commit("LESSON_OPEN", false);
    }
  },
  computed: {
    title: function title() {
      return this.$store.state.Lessons.lesson.classid > 0 ? "Edit " + this.$store.state.Lessons.lesson.classname : "New Lesson";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=template&id=67c6a11f&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=template&id=67c6a11f& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "800" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.$store.state.Lessons.lesson_open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Lessons, "lesson_open", $$v)
        },
        expression: "$store.state.Lessons.lesson_open"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "blue lighten-2", dark: "", flat: "" } },
            [
              _c("v-toolbar-title", [
                _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Lesson" },
                        model: {
                          value: _vm.$store.state.Lessons.lesson.classname,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Lessons.lesson,
                              "classname",
                              $$v
                            )
                          },
                          expression: "$store.state.Lessons.lesson.classname"
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
                        attrs: { label: "Price", type: "number" },
                        model: {
                          value: _vm.$store.state.Lessons.lesson.price,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Lessons.lesson,
                              "price",
                              _vm._n($$v)
                            )
                          },
                          expression: "$store.state.Lessons.lesson.price"
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
                        attrs: { label: "Xero", type: "number" },
                        model: {
                          value: _vm.$store.state.Lessons.lesson.xero,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Lessons.lesson,
                              "xero",
                              $$v
                            )
                          },
                          expression: "$store.state.Lessons.lesson.xero"
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
                      _c(
                        "v-card",
                        {
                          staticClass: "overflow-y-auto",
                          attrs: { height: "200" }
                        },
                        [
                          _c(
                            "v-card-text",
                            _vm._l(
                              _vm.$store.state.Lessons.lesson_categories,
                              function(item, index) {
                                return _c("v-checkbox", {
                                  key: index,
                                  attrs: { value: item.id, label: item.name },
                                  model: {
                                    value:
                                      _vm.$store.state.Lessons.lesson
                                        .categories,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.$store.state.Lessons.lesson,
                                        "categories",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "$store.state.Lessons.lesson.categories"
                                  }
                                })
                              }
                            ),
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
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-checkbox", {
                        attrs: { label: "is active" },
                        model: {
                          value: _vm.$store.state.Lessons.lesson.isVisible,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Lessons.lesson,
                              "isVisible",
                              $$v
                            )
                          },
                          expression: "$store.state.Lessons.lesson.isVisible"
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
                      _c("tiptap-vuetify", {
                        attrs: { extensions: _vm.extensions },
                        model: {
                          value: _vm.$store.state.Lessons.lesson.classnotes,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Lessons.lesson,
                              "classnotes",
                              $$v
                            )
                          },
                          expression: "$store.state.Lessons.lesson.classnotes"
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
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "text-none primary", on: { click: _vm.save } },
                [_vm._v("Save")]
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

/***/ "./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manage_vue_vue_type_template_id_67c6a11f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manage.vue?vue&type=template&id=67c6a11f& */ "./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=template&id=67c6a11f&");
/* harmony import */ var _Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manage.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Manage_vue_vue_type_template_id_67c6a11f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Manage_vue_vue_type_template_id_67c6a11f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=template&id=67c6a11f&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=template&id=67c6a11f& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_67c6a11f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage.vue?vue&type=template&id=67c6a11f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Lessons/Manage.vue?vue&type=template&id=67c6a11f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_67c6a11f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_67c6a11f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);