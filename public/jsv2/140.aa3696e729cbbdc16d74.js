(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[140],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Home/Splash.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Home/Splash.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    this.$store.commit("SPLASH", true);
    setTimeout(function () {
      _this.$refs.video_player.play();
    }, 1000);
  },
  name: "splash",
  data: function data() {
    return {
      imgs: [{
        src: "/img/halloween/halloween.jpeg",
        alt: "Halloween Dress Up Week"
      } // {
      //   src: "/img/camps/Spring/2022/hr/multi-skill.jpg",
      //   lazy: "/img/camps/Spring/2022/lr/multi-skill.jpg",
      //   alt: "Spring Break Multi Skills Camp",
      // },
      // {
      //   src: "/img/camps/Spring/2022/hr/performing-arts.jpg",
      //   lazy: "/img/camps/Spring/2022/lr/performing-arts.jpg",
      //   alt: "Spring Break Performing Arts Camp",
      // },
      // {
      //   src: "/img/camps/Spring/2022/hr/sports-camp.jpg",
      //   lazy: "/img/camps/Spring/2022/lr/sports-camp.jpg",
      //   alt: "Spring Break Sport Camp",
      // }
      ]
    };
  },
  methods: {
    close: function close() {
      // this.$refs.video_player.pause();
      // this.$refs.video_player.currentTime = 0
      this.$store.commit("SPLASH", false);
    },
    image_click: function image_click() {
      // const competitions = {text: 'Competition'}
      // this.$store.commit('compElite', competitions)
      // this.$store.commit('isCompElite', true)
      // this.$router.push("/camps/midterm/world-tour");
      this.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Home/Splash.vue?vue&type=template&id=16db1949&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Home/Splash.vue?vue&type=template&id=16db1949& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: _vm.$vuetify.breakpoint.xs ? 350 : 1350 },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.$store.state.splash,
        callback: function($$v) {
          _vm.$set(_vm.$store.state, "splash", $$v)
        },
        expression: "$store.state.splash"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { elevation: "12" } },
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                _vm._l(_vm.imgs, function(img, index) {
                  return _c(
                    "v-col",
                    { key: index, attrs: { cols: "12", md: "8" } },
                    [
                      _c("v-img", {
                        staticStyle: { cursor: "pointer" },
                        attrs: { src: img.src, alt: img.alt, contain: "" },
                        on: {
                          click: function($event) {
                            return _vm.image_click()
                          }
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
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "ma-0 pa-0" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "text-none",
                  attrs: { block: "", dark: "", color: "red", tile: "" },
                  on: { click: _vm.close }
                },
                [_vm._v("\n        Close\n      ")]
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

/***/ "./resources/js/components/Components/Home/Splash.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Components/Home/Splash.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Splash_vue_vue_type_template_id_16db1949___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Splash.vue?vue&type=template&id=16db1949& */ "./resources/js/components/Components/Home/Splash.vue?vue&type=template&id=16db1949&");
/* harmony import */ var _Splash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Splash.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Home/Splash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Splash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Splash_vue_vue_type_template_id_16db1949___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Splash_vue_vue_type_template_id_16db1949___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Home/Splash.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Home/Splash.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Components/Home/Splash.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Splash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Splash.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Home/Splash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Splash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Home/Splash.vue?vue&type=template&id=16db1949&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Components/Home/Splash.vue?vue&type=template&id=16db1949& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Splash_vue_vue_type_template_id_16db1949___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Splash.vue?vue&type=template&id=16db1949& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Home/Splash.vue?vue&type=template&id=16db1949&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Splash_vue_vue_type_template_id_16db1949___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Splash_vue_vue_type_template_id_16db1949___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);