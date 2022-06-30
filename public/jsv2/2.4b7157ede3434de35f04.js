(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "edit-child",
  components: {
    my_child: function my_child() {
      return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./Form/Child_new */ "./resources/js/components/Components/Authtenticated/Enrollment/Form/Child_new.vue"));
    },
    my_medical: function my_medical() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./Form/Medical */ "./resources/js/components/Components/Authtenticated/Enrollment/Form/Medical.vue"));
    },
    my_prescription: function my_prescription() {
      return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./Form/Prescription */ "./resources/js/components/Components/Authtenticated/Enrollment/Form/Prescription.vue"));
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$store.dispatch("ENROLLMENT_SAVE_CHILD", {
        form: this.$store.state.Enrollments.enrollment_child
      }).then(function (result) {
        var snackbar = {
          snackbar: true,
          vertical: false,
          timeout: 2000,
          color: "".concat(result.data == "success" ? "blue lighten-2" : "red"),
          dark: true,
          top: true,
          bottom: false,
          centered: true,
          left: false,
          right: false,
          text: "".concat(result.data == "success" ? "You have successfully save your child" : "First name and Family Name is required")
        };

        _this.$store.commit("SNACKBAR", snackbar);

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
          text: "Something went wrong. Please reload your browser or check your internet connection."
        };

        _this.$store.commit("SNACKBAR", snackbar);
      });
    },
    close: function close() {
      this.$store.commit("ENROLLMENT_CHILD", {});
      this.$store.commit("ENROLLMENT_CHILD_NEW", false);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=template&id=5cbceeac&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=template&id=5cbceeac& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "1200" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.$store.state.Enrollments.enrollment_child_new,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Enrollments, "enrollment_child_new", $$v)
        },
        expression: "$store.state.Enrollments.enrollment_child_new"
      }
    },
    [
      _c(
        "v-card",
        [
          _vm.$vuetify.breakpoint.mdAndUp
            ? _c(
                "v-card-text",
                [
                  _c(
                    "v-stepper",
                    {
                      model: {
                        value: _vm.$store.state.Enrollments.steps,
                        callback: function($$v) {
                          _vm.$set(_vm.$store.state.Enrollments, "steps", $$v)
                        },
                        expression: "$store.state.Enrollments.steps"
                      }
                    },
                    [
                      _c(
                        "v-stepper-header",
                        [
                          _c(
                            "v-stepper-step",
                            {
                              attrs: {
                                editable: "",
                                step: "1",
                                complete:
                                  _vm.$store.state.Enrollments.steps > 1
                                    ? true
                                    : false
                              }
                            },
                            [_vm._v("\n            Child\n          ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-stepper-step",
                            {
                              attrs: {
                                editable: "",
                                step: "2",
                                complete:
                                  _vm.$store.state.Enrollments.steps > 2
                                    ? true
                                    : false
                              }
                            },
                            [_vm._v("\n            Medical\n          ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-stepper-step",
                            {
                              attrs: {
                                editable: "",
                                step: "3",
                                complete:
                                  _vm.$store.state.Enrollments
                                    .enrollment_steps > 3
                                    ? true
                                    : false
                              }
                            },
                            [
                              _vm._v(
                                "\n            Non-prescription\n          "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "1" } },
                        [_c("my_child")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "2" } },
                        [_c("my_medical")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "3" } },
                        [_c("my_prescription")],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _c(
                "v-card-text",
                [
                  _c("my_child"),
                  _vm._v(" "),
                  _c("my_medical"),
                  _vm._v(" "),
                  _c("my_prescription")
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
                { staticClass: "primary text-none", on: { click: _vm.save } },
                [_vm._v(" Save")]
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

/***/ "./resources/js/components/Components/Authtenticated/Enrollment/Add.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Enrollment/Add.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_5cbceeac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=5cbceeac& */ "./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=template&id=5cbceeac&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_5cbceeac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_5cbceeac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Enrollment/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=template&id=5cbceeac&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=template&id=5cbceeac& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5cbceeac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=5cbceeac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Enrollment/Add.vue?vue&type=template&id=5cbceeac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5cbceeac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_5cbceeac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);