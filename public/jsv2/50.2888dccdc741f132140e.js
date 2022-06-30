(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "parent-view",
  components: {
    my_childs: function my_childs() {
      return __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! ./Students */ "./resources/js/components/Components/Authtenticated/Parents/Students.vue"));
    },
    new_child: function new_child() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../Enrollment/Add */ "./resources/js/components/Components/Authtenticated/Enrollment/Add.vue"));
    },
    manage_parent: function manage_parent() {
      return __webpack_require__.e(/*! import() */ 48).then(__webpack_require__.bind(null, /*! ./Manage */ "./resources/js/components/Components/Authtenticated/Parents/Manage.vue"));
    }
  },
  data: function data() {
    return {
      options: {},
      headers: [{
        text: "Name",
        value: "name",
        align: "center",
        sortable: false
      }, {
        text: "Contact",
        value: "contact",
        align: "center",
        sortable: false
      }, {
        text: "Email",
        value: "email",
        align: "center",
        sortable: false
      }, {
        text: "",
        value: "actions",
        align: "center",
        sortable: false
      }]
    };
  },
  mounted: function mounted() {
    this.pagination();
  },
  watch: {
    options: {
      handler: function handler(e) {
        var filter = {
          filter: this.$store.state.Parents.parent_filter.filter,
          page: e.page,
          per_page: e.itemsPerPage
        };
        this.$store.commit("PARENT_FILTER", filter);

        if (this.$store.state.Parents.parent_filter.filter) {
          this.$store.dispatch("PARENT_FILTER", this.$store.state.Parents.parent_filter);
        } else {
          this.pagination();
        }
      },
      deep: true
    }
  },
  methods: {
    edit: function edit(e) {
      var _this = this;

      this.$store.dispatch("GET_PARENT_ID", {
        email: e.email
      }).then(function (result) {
        _this.$store.commit("PARENT_OPEN", true);
      });
    },
    students: function students(e) {
      var _this2 = this;

      this.$store.dispatch("GET_PARENT_ID", {
        email: e.email
      }).then(function (result) {
        _this2.$store.dispatch("GET_CHILD", result.data.mid);
      });
    },
    add: function add(e) {
      var _this3 = this;

      this.$store.dispatch("GET_PARENT_ID", {
        email: e.email
      }).then(function (result) {
        var form = {
          mid: result.data.mid,
          child: {
            first_name: null,
            family_name: null,
            gender: "Male",
            dob: new Date().toISOString().substr(0, 10),
            nationality: null
          },
          medical: {
            allergies: false,
            textallergies: null,
            respiratory: false,
            textrespiratory: null,
            physical: false,
            textphysical: null,
            vision: false,
            textvision: null,
            hearing: false,
            texthearing: null,
            otherhealth: false,
            textotherhealth: null
          },
          prescription: {
            antiseptic: true,
            textantiseptic: null,
            plasters: true,
            textplasters: null,
            insectbite: true,
            textinsectbite: null,
            firstaid: true,
            textfirstaid: null,
            calpol: true,
            textcalpol: null,
            ice: true,
            textice: null
          }
        };
        _this3.$store.commit("ENROLLMENT_CHILD", form), _this3.$store.commit("ENROLLMENT_CHILD_NEW", true);
      });
    },
    filter: function filter(e) {
      if (e.length > 2) {
        var filter = {
          filter: e,
          page: this.$store.state.Parents.parents.current_page,
          per_page: this.$store.state.Parents.parents.per_page
        };
        this.$store.commit("PARENT_FILTER", filter);
        this.options = {
          page: 1,
          per_page: 10
        };
        this.$store.commit("PARENT_LOADING", true);
        this.$store.dispatch("PARENT_FILTER", this.$store.state.Parents.parent_filter);
      }

      if (e.length == 0) {
        var filter = {
          filter: null,
          page: this.$store.state.Parents.parents.current_page,
          per_page: this.$store.state.Parents.parents.per_page
        };
        this.$store.commit("PARENT_FILTER", filter);
        this.pagination();
      }
    },
    pagination: function pagination() {
      this.$store.commit("PARENT_LOADING", true);
      this.$store.dispatch("PARENTS", this.$store.state.Parents.parent_filter);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=template&id=5570467e&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=template&id=5570467e& ***!
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
    "div",
    [
      _vm.$store.state.Parents.parent_childs_open ? _c("my_childs") : _vm._e(),
      _vm._v(" "),
      _vm.$store.state.Enrollments.enrollment_child_new
        ? _c("new_child")
        : _vm._e(),
      _vm._v(" "),
      _vm.$store.state.Parents.parent_open ? _c("manage_parent") : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "blue lighten-2 white--text", flat: "" } },
            [
              _c("v-toolbar-title", [_vm._v(" Parents ")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mt-6",
                attrs: { label: "Filter Parent", solo: "" },
                on: { input: _vm.filter }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              items: _vm.$store.state.Parents.parents.data,
              "server-items-length": _vm.$store.state.Parents.parents.total,
              loading: _vm.$store.state.Parents.parent_loading,
              options: _vm.options,
              "items-per-page": 10,
              "footer-props": {
                "items-per-page-options": [10, 15, 20, -1],
                "items-per-page-text": "Students per page",
                "show-current-page": true
              },
              "mobile-breakpoint": 200
            },
            on: {
              "update:options": function($event) {
                _vm.options = $event
              }
            },
            scopedSlots: _vm._u([
              {
                key: "item.name",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm._f("toUpper")(item.first_name)) +
                        " " +
                        _vm._s(_vm._f("toUpper")(item.family_name)) +
                        "\n      "
                    )
                  ]
                }
              },
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: { small: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.edit(item)
                                            }
                                          }
                                        },
                                        "v-icon",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n              mdi-pencil\n            "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [_vm._v(" "), _c("span", [_vm._v(" Edit ")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: { small: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.students(item)
                                            }
                                          }
                                        },
                                        "v-icon",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n              mdi-eye\n            "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [_vm._v(" "), _c("span", [_vm._v(" View Child ")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: { small: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.add(item)
                                            }
                                          }
                                        },
                                        "v-icon",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n              mdi-plus\n            "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [_vm._v(" "), _c("span", [_vm._v(" Add New Child ")])]
                    )
                  ]
                }
              }
            ])
          })
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

/***/ "./resources/js/components/Components/Authtenticated/Parents/View.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Parents/View.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_5570467e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=5570467e& */ "./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=template&id=5570467e&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_5570467e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_5570467e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Parents/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=template&id=5570467e&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=template&id=5570467e& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5570467e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=5570467e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Parents/View.vue?vue&type=template&id=5570467e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5570467e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5570467e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);