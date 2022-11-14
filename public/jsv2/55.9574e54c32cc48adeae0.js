(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  name: "receipt-status",
  data: function data() {
    return {
      statuses: [{
        text: "Onprocess",
        value: "onprocess"
      }, {
        text: "Cancelled",
        value: "cancelled"
      }, {
        text: "Completed",
        value: "completed"
      }]
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$store.dispatch("UPDATE_RECEIPT_STATUS", {
        receipt: this.$store.state.Receipts.receipt
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
          text: "Receipt#".concat(_this.$store.state.Receipts.receipt.id, " successfully updated")
        };

        _this.$store.commit("SNACKBAR", snackbar);

        _this.$store.commit("RECEIPT_LOADER", true);

        _this.$store.dispatch("RECEIPTS", _this.$store.state.Receipts.receipt_filter);

        _this.close();
      });
    },
    close: function close() {
      this.$store.commit("RECEIPT_ITEMS", {});
      this.$store.commit("RECEIPT_UPDATE_STATUS_OPEN", false);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=template&id=1093ce2c&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=template&id=1093ce2c& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "450" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.$store.state.Receipts.receipt_update_status_open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Receipts, "receipt_update_status_open", $$v)
        },
        expression: "$store.state.Receipts.receipt_update_status_open"
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
                  "\n        Receipt#" +
                    _vm._s(_vm.$store.state.Receipts.receipt.id) +
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
              _c("v-autocomplete", {
                attrs: { label: "Select Status", items: _vm.statuses },
                scopedSlots: _vm._u([
                  {
                    key: "append-outer",
                    fn: function() {
                      return [
                        _c(
                          "v-btn",
                          {
                            staticClass: "text-none primary",
                            on: { click: _vm.save }
                          },
                          [_vm._v(" Save")]
                        )
                      ]
                    },
                    proxy: true
                  }
                ]),
                model: {
                  value: _vm.$store.state.Receipts.receipt.status,
                  callback: function($$v) {
                    _vm.$set(_vm.$store.state.Receipts.receipt, "status", $$v)
                  },
                  expression: "$store.state.Receipts.receipt.status"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Update_status_vue_vue_type_template_id_1093ce2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Update_status.vue?vue&type=template&id=1093ce2c& */ "./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=template&id=1093ce2c&");
/* harmony import */ var _Update_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Update_status.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Update_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Update_status_vue_vue_type_template_id_1093ce2c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Update_status_vue_vue_type_template_id_1093ce2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Authtenticated/Receipts/Update_status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Update_status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=template&id=1093ce2c&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=template&id=1093ce2c& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_status_vue_vue_type_template_id_1093ce2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Update_status.vue?vue&type=template&id=1093ce2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Authtenticated/Receipts/Update_status.vue?vue&type=template&id=1093ce2c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_status_vue_vue_type_template_id_1093ce2c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_status_vue_vue_type_template_id_1093ce2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);