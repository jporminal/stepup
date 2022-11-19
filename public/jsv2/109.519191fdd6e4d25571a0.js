(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add-edit-staff",
  methods: {
    save: function save() {
      var _this = this;

      this.$store.dispatch("STAFF_SAVE", {
        form: this.$store.state.Staffs.staff
      }).then(function (result) {
        _this.close();
      });
    },
    close: function close() {
      this.$store.commit("STAFF", {});
      this.$store.commit("STAFF_OPEN", false);
    }
  },
  computed: {
    title: function title() {
      return this.$store.state.Staffs.staff.id > 0 ? "Edit ".concat(this.$store.state.Staffs.staff.staffname) : "New";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=template&id=849d410c&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=template&id=849d410c& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        value: _vm.$store.state.Staffs.staff_open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Staffs, "staff_open", $$v)
        },
        expression: "$store.state.Staffs.staff_open"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "blue lighten-2", dark: "", flat: "" } },
            [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]
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
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Name" },
                        model: {
                          value: _vm.$store.state.Staffs.staff.staffname,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Staffs.staff,
                              "staffname",
                              $$v
                            )
                          },
                          expression: "$store.state.Staffs.staff.staffname"
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
                        attrs: { label: "Contact Number 1" },
                        model: {
                          value: _vm.$store.state.Staffs.staff.staffphone1,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Staffs.staff,
                              "staffphone1",
                              $$v
                            )
                          },
                          expression: "$store.state.Staffs.staff.staffphone1"
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
                        attrs: { label: "Contact Number 2" },
                        model: {
                          value: _vm.$store.state.Staffs.staff.staffphone2,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Staffs.staff,
                              "staffphone2",
                              $$v
                            )
                          },
                          expression: "$store.state.Staffs.staff.staffphone2"
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
                        attrs: { label: "Contact Number 3" },
                        model: {
                          value: _vm.$store.state.Staffs.staff.staffmobile,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Staffs.staff,
                              "staffmobile",
                              $$v
                            )
                          },
                          expression: "$store.state.Staffs.staff.staffmobile"
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
                        attrs: { label: "Email" },
                        model: {
                          value: _vm.$store.state.Staffs.staff.staffemail,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.Staffs.staff,
                              "staffemail",
                              $$v
                            )
                          },
                          expression: "$store.state.Staffs.staff.staffemail"
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
                [_vm._v(" Save ")]
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

/***/ "./resources/js/components/Components/Authtenticated/Staffs/Staff.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Staffs/Staff.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Staff_vue_vue_type_template_id_849d410c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Staff.vue?vue&type=template&id=849d410c& */ "./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=template&id=849d410c&");
/* harmony import */ var _Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Staff.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Staff_vue_vue_type_template_id_849d410c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Staff_vue_vue_type_template_id_849d410c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Staffs/Staff.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Staff.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Staff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=template&id=849d410c&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=template&id=849d410c& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Staff_vue_vue_type_template_id_849d410c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Staff.vue?vue&type=template&id=849d410c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Staffs/Staff.vue?vue&type=template&id=849d410c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Staff_vue_vue_type_template_id_849d410c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Staff_vue_vue_type_template_id_849d410c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);