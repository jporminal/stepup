(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "manage-attendance",
  data: function data() {
    return {
      selected_date: false,
      my_date: "",
      notes: ""
    };
  },
  methods: {
    seleceted_date: function seleceted_date(e) {
      this.selected_date = true;
      this.my_date = e;
      var items = {
        schedule_id: this.$store.state.Attendance.attendance_manage.schedule.details.id,
        date: e
      };
      this.$store.dispatch("ATTENDANCE_STUDENTS", items);
    },
    checkbox_change: function checkbox_change() {
      this.$store.commit("ATTENDANCE_MANAGE", this.$store.state.Attendance.attendance_manage);
    },
    save: function save() {
      var _this = this;

      this.$store.commit('ATTENDANCE_LOADING', true);
      var students = {
        schedule_id: this.$store.state.Attendance.attendance_manage.schedule.details.id,
        date: this.my_date,
        students: this.$store.state.Attendance.students.children,
        notes: this.$store.state.Attendance.students.notes ? this.$store.state.Attendance.students.notes.notes : this.notes
      };
      this.$store.commit("ATTENDED", students);
      this.$store.dispatch("ATTENDANCE", {
        form: this.$store.state.Attendance.attended
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
          text: "Attendance save!"
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
          text: "Something went wrong. Please reload your browser"
        };

        _this.$store.commit("SNACKBAR", snackbar);
      });
    },
    close: function close() {
      var student = {
        children: []
      };
      this.$store.commit('ATTENDANCE_LOADING', false);
      this.$store.commit("ATTENDANCE_STUDENTS", student);
      this.$store.commit("ATTENDED", {});
      this.$store.commit("ATTENDANCE_OPEN", false);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=template&id=57a7115b&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=template&id=57a7115b& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
        value: _vm.$store.state.Attendance.attendance_open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Attendance, "attendance_open", $$v)
        },
        expression: "$store.state.Attendance.attendance_open"
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
                _vm._v(
                  "\n        " +
                    _vm._s(
                      _vm.$store.state.Attendance.attendance_manage.schedule
                        .details.name
                    ) +
                    "\n      "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-select", {
                staticClass: "mt-4",
                attrs: {
                  items:
                    _vm.$store.state.Attendance.attendance_manage.date_ranges,
                  label: "Select Date",
                  solo: ""
                },
                on: { change: _vm.seleceted_date }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.selected_date
            ? _c("v-card-text", [
                _vm.$store.state.Attendance.students.children.length > 0
                  ? _c(
                      "div",
                      [
                        _c("p", [
                          _vm._v(
                            "Please check student(s) who attended the class."
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-list",
                          _vm._l(
                            _vm.$store.state.Attendance.students.children,
                            function(student, index) {
                              return _c(
                                "v-list-item",
                                { key: index },
                                [
                                  _c("v-checkbox", {
                                    attrs: { label: student.name },
                                    on: { change: _vm.checkbox_change },
                                    model: {
                                      value: student.status,
                                      callback: function($$v) {
                                        _vm.$set(student, "status", $$v)
                                      },
                                      expression: "student.status"
                                    }
                                  })
                                ],
                                1
                              )
                            }
                          ),
                          1
                        ),
                        _vm._v(" "),
                        _vm.$store.state.Attendance.students.notes
                          ? _c("v-textarea", {
                              attrs: { label: "Notes", solo: "" },
                              model: {
                                value:
                                  _vm.$store.state.Attendance.students.notes
                                    .notes,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.$store.state.Attendance.students.notes,
                                    "notes",
                                    $$v
                                  )
                                },
                                expression:
                                  "$store.state.Attendance.students.notes.notes"
                              }
                            })
                          : _c("v-textarea", {
                              attrs: { label: "Notes", solo: "" },
                              model: {
                                value: _vm.notes,
                                callback: function($$v) {
                                  _vm.notes = $$v
                                },
                                expression: "notes"
                              }
                            }),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "primary",
                            attrs: { absolute: "", bottom: "", right: "" },
                            on: { click: _vm.save }
                          },
                          [_vm._v("Save")]
                        )
                      ],
                      1
                    )
                  : _c("div", [
                      _c("p", { staticClass: "text-center" }, [
                        _vm._v("No enrolled student")
                      ])
                    ])
              ])
            : _c("v-card-text", [
                _c("p", { staticClass: "text-center" }, [
                  _vm._v("Select Date ↑")
                ])
              ])
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

/***/ "./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manage_vue_vue_type_template_id_57a7115b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manage.vue?vue&type=template&id=57a7115b& */ "./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=template&id=57a7115b&");
/* harmony import */ var _Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manage.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Manage_vue_vue_type_template_id_57a7115b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Manage_vue_vue_type_template_id_57a7115b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=template&id=57a7115b&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=template&id=57a7115b& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_57a7115b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage.vue?vue&type=template&id=57a7115b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Attendance/Attendance/Manage.vue?vue&type=template&id=57a7115b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_57a7115b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_57a7115b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);