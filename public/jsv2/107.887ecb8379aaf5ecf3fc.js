(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'xero-login',
  components: {
    my_receipts: function my_receipts() {
      return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../Receipts/View */ "./resources/js/components/Components/Authtenticated/Receipts/View.vue"));
    }
  },
  data: function data() {
    return {
      error: null
    };
  },
  created: function created() {
    localStorage.setItem('xero-code', this.$route.query.code || null);
    this.$store.commit('XERO_CODE', this.$route.query.code);
  },
  methods: {
    login: function login() {
      this.$store.dispatch('XERO_LOGIN').then(function (result) {
        window.location.href = result.data;
      });
    },
    refresh_token: function refresh_token() {
      var _this = this;

      this.$store.dispatch('XERO_REF_TOKEN', {
        token: this.$store.state.Xero.xero_token
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
          text: "You have refresh your token! Keep it up bro!"
        };

        _this.$store.commit("SNACKBAR", snackbar);
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
          text: err.response.data
        };

        _this.$store.commit("SNACKBAR", snackbar);
      });
    },
    get_token: function get_token() {
      var _this2 = this;

      this.$store.dispatch('XERO_TOKEN', {
        xero_code: this.$store.state.Xero.xero_code,
        xero_state: this.$store.state.Xero.xero_state
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
          text: "Yeah! I got the token!"
        };

        _this2.$store.commit("SNACKBAR", snackbar);
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
          text: err.response.data
        };

        _this2.$store.commit("SNACKBAR", snackbar);
      });
    },
    load_invoices: function load_invoices() {
      var _this3 = this;

      this.$store.dispatch('XERO_INVOICE', {
        token: this.$store.state.Xero.xero_token,
        tenant_id: this.$store.state.Xero.xero_tenants
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
          text: "Hey men!, look down all your invoices"
        };

        _this3.$store.commit("SNACKBAR", snackbar);
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
          text: err.response.data
        };

        _this3.$store.commit("SNACKBAR", snackbar);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=template&id=e73f8b18&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=template&id=e73f8b18& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            {
              staticClass: "white--text",
              attrs: { color: "blue lighten-2", flat: "" }
            },
            [_c("v-toolbar-title", [_vm._v(" Xero ")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-btn",
                { staticClass: "success", on: { click: _vm.login } },
                [_vm._v("\n                login\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "success", on: { click: _vm.get_token } },
                [_vm._v("\n                Get Token\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "success", on: { click: _vm.refresh_token } },
                [_vm._v("\n                Refresh Token\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "success", on: { click: _vm.load_invoices } },
                [_vm._v("\n                Load Invoices\n            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", [_c("my_receipts")], 1)
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

/***/ "./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manage_vue_vue_type_template_id_e73f8b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manage.vue?vue&type=template&id=e73f8b18& */ "./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=template&id=e73f8b18&");
/* harmony import */ var _Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manage.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Manage_vue_vue_type_template_id_e73f8b18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Manage_vue_vue_type_template_id_e73f8b18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=template&id=e73f8b18&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=template&id=e73f8b18& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_e73f8b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Manage.vue?vue&type=template&id=e73f8b18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Settings/Xero/Manage.vue?vue&type=template&id=e73f8b18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_e73f8b18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_template_id_e73f8b18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);