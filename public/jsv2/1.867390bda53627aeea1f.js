(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "product-details",
  data: function data() {
    return {
      option: {
        price: 0.0,
        available: 0,
        quantities: [],
        order_quantity: 0
      },
      price: {
        price: 0.0,
        quantity: 0
      }
    };
  },
  methods: {
    selected_option: function selected_option(e) {
      this.$store.commit('MOTOR_CITY_ADULT_CLASSES_SELECTED', e);
    },
    close: function close() {
      this.$store.commit("MOTOR_CITY_ADULT_CLASSES", []);
      this.$store.commit("MOTOR_CITY_ADULT_CLASSES_OPEN", false);
      this.$store.commit('MOTOR_CITIES_ADULT_CLASSES', false);
    },
    add_to_cart: function add_to_cart() {
      var _this = this;

      // console.log(this.$store.state.Motor_city.adult_selected)
      this.$store.dispatch('MOTOR_CITIES_ADULT', {
        class_ids: this.$store.state.Motor_city.adult_selected,
        is_unli: this.$store.state.Motor_city.adult_unli
      }).then(function (result) {
        // console.log(result.data)
        var prods = result.data;
        prods.forEach(function (product) {
          var quantity = 1;
          var price = Number(product.price);
          var price_excl = price / 1.05;
          var total_incl = quantity * price;
          var total_excl = total_incl / 1.05;
          var vat = total_excl * 0.05;
          var cart = {
            notes: "",
            type: "Motor City",
            product_category: "Service",
            product_id: product.classid,
            product_image: "adult-classes.jpg",
            product_limit: 1,
            product_name: product.item,
            product_xero: 230,
            product_quantity: quantity,
            product_option: {
              cid: {
                id: 0,
                name: ""
              },
              selected_id: 0,
              date_end: product.date_end,
              date_start: product.date_start,
              discount: 0.0,
              discountPercent: 0.0,
              id: product.product_id,
              option_name: product.item,
              price: price,
              price_excl: price_excl,
              quantity: quantity,
              total_excl: total_excl,
              total_incl: total_incl,
              vat: vat,
              week_id: product.week_id
            }
          };

          _this.$store.commit("CARTS", cart);
        });
        localStorage.setItem("traesdhes", JSON.stringify(_this.$store.state.Carts.carts));
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
          text: "Adult class(es) successfully added to your cart!"
        };

        _this.$store.commit("SNACKBAR", snackbar);

        _this.close();
      })["catch"](function (err) {
        console.log(err);
      }); // var cart = {
      //   notes: "",
      //   type: "Motor City",
      //   product_category: "Service",
      //   product_id: this.$store.state.Motor_city.product.classid,
      //   product_image: this.$store.state.Motor_city.product.image !== null ? this.$store.state.Motor_city.product.image.image_name : '',
      //   product_limit: this.option.max_limit,
      //   product_name: this.$store.state.Motor_city.product.classname,
      //   product_xero: this.$store.state.Motor_city.product.xero,
      //   product_quantity: this.option.max_qty,
      //   product_option: {
      //     cid: {
      //       id: 0,
      //       name: "",
      //     },
      //     selected_id: 0,
      //     date_end: this.option.date_end,
      //     date_start: this.option.date_start,
      //     discount: discount,
      //     discountPercent: discount_percent,
      //     id: this.option.product_id,
      //     option_name: this.option.item,
      //     price: price,
      //     price_excl: price_excl,
      //     quantity: quantity,
      //     total_excl: total_price_excl,
      //     total_incl: total_price,
      //     vat: total_tax,
      //     week_id: this.option.week_id,
      //   },
      // };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-text-field.v-text-field--enclosed[data-v-3613e826] {\n  margin: 0;\n  padding: 0;\n  width: 50%;\n}\n.v-input--selection-controls[data-v-3613e826] {\n  margin: 0px;\n  padding: 0px;\n  margin-top: -15px;\n  margin-bottom: -20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=template&id=3613e826&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=template&id=3613e826&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "1000", persistent: "" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.$store.state.Motor_city.adult_open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Motor_city, "adult_open", $$v)
        },
        expression: "$store.state.Motor_city.adult_open"
      }
    },
    [
      _c(
        "v-card",
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
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c("v-img", {
                        attrs: { src: "/img/products/adult-classes.jpg" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "10" } },
                    [
                      _c(
                        "v-row",
                        _vm._l(_vm.$store.state.Motor_city.adults, function(
                          item,
                          index
                        ) {
                          return _c(
                            "v-col",
                            { key: index, attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  value: item.schedule_id,
                                  label: "" + item.product
                                },
                                on: { change: _vm.selected_option },
                                model: {
                                  value:
                                    _vm.$store.state.Motor_city.adult_selected,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Motor_city,
                                      "adult_selected",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$store.state.Motor_city.adult_selected"
                                }
                              })
                            ],
                            1
                          )
                        }),
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
                  staticClass: "text-none primary",
                  attrs: {
                    disabled:
                      _vm.$store.state.Motor_city.adult_selected.length > 0
                        ? false
                        : true,
                    large: ""
                  },
                  on: { click: _vm.add_to_cart }
                },
                [_vm._v("\n            Add to Cart\n          ")]
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

/***/ "./resources/js/components/Components/Shops/Adult/Details.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Adult/Details.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_3613e826_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=3613e826&scoped=true& */ "./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=template&id=3613e826&scoped=true&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Details_vue_vue_type_style_index_0_id_3613e826_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true& */ "./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_3613e826_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_3613e826_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3613e826",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Shops/Adult/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_3613e826_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=style&index=0&id=3613e826&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_3613e826_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_3613e826_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_3613e826_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_3613e826_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_3613e826_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=template&id=3613e826&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=template&id=3613e826&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_3613e826_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=3613e826&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Shops/Adult/Details.vue?vue&type=template&id=3613e826&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_3613e826_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_3613e826_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);