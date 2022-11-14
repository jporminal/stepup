(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Camp/Camps.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Camp/Camps.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "camps",
  data: function data() {
    return {
      dialog: false,
      texts: ["Here at StepUp Academy, we offer multiple holiday camps, in order to cater for everyone aged 3.5 years upwards.<br><br>Being able to offer friends & families 1 location for everyone to enjoy the holidays, means less driving around and more convenience for parents and guardians.<br><br>", "In our Multi-Skills camps, students aged 3.5yrs upwards, are able to enjoy their day, packed with lots of activities, ranging from Arts & Crafts, Martial Arts, Dancing, Drama, Ball games, Team games and more… Perfect to keep those little busy bodies occupied and engaged, and importantly having fun and making new friends!<br><br>Performing Arts is the perfect camp for those with a passion for the Performing Arts, or for those who wish to try out multiple styles, such as Street Jazz, Ballet, Acro, Musical Theatre, Lyrical & Technical Jazz! No previous experience is necessary but is advised. This camp is for students aged 6 years and above.<br><br>", "Our Sports camp, is in collaboration with Urban Playground. This unique camp is designed for students aged 7 years upwards and for those who love to be active and playing sports! Students will take part in activities such as Cricket, 360 Ball, Touch Tennis, Pickle Ball, as well as fun tailor designed games and activities. Students will get to improve and practice their individual skills as well as work as part of a team. This is an outdoors camp.<br><br>All of our camps run throughout October half term, Winter break, February half term, Spring break and Summer holidays.<br><br>Each camp is based in the Apex Atrium, Motor City"],
      camps: [{
        title: "Spring Multi-Skills Camp",
        age: "3yrs - 11yrs",
        date: "27<sup>th</sup> March - 7<sup>th</sup> April 2022",
        src: "/img/camps/Spring/2022/hr/multi-skill.jpg",
        lazy: "/img/camps/Spring/2022/lr/multi-skill.jpg",
        alt: "Spring Break Multi Skills Camp",
        to: {
          name: 'MultiSkills'
        }
      }, {
        title: "Spring Performing Arts Camp",
        age: "7yrs - 15yrs",
        date: "27<sup>th</sup> March - 7<sup>th</sup> April 2022",
        src: "/img/camps/Spring/2022/hr/performing-arts.jpg",
        lazy: "/img/camps/Spring/2022/lr/performing-arts.jpg",
        alt: "Spring Break Performing Arts Camp",
        to: {
          name: 'PerformingArts'
        }
      }, {
        title: "Spring Sport Camp",
        age: "6yrs - 11yrs",
        date: "27<sup>th</sup> March - 7<sup>th</sup> April 2022",
        src: "/img/camps/Spring/2022/hr/sports-camp.jpg",
        lazy: "/img/camps/Spring/2022/lr/sports-camp.jpg",
        alt: "Spring Break Sport Camp",
        to: {
          name: 'Sports'
        }
      }],
      camp: {},
      hover: false
    };
  },
  methods: {
    openModal: function openModal(item) {
      this.dialog = true;
      this.camp = item;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Camp/Camps.vue?vue&type=template&id=b824ac7c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Camp/Camps.vue?vue&type=template&id=b824ac7c& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { attrs: { flat: "" } },
    [
      _c("v-card-text", [
        _c("h1", { staticClass: "mt-2 display-1 text-center" }, [
          _vm._v("Camps")
        ])
      ]),
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
                    _vm._l(_vm.texts, function(text) {
                      return _c("h2", {
                        key: text,
                        staticClass: "body-2 text-center",
                        domProps: { innerHTML: _vm._s(text) }
                      })
                    }),
                    0
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
        "v-card-text",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                _vm._l(_vm.camps, function(camp) {
                  return _c(
                    "v-col",
                    { key: camp.title, attrs: { cols: "12", md: "4" } },
                    [
                      _c("v-card", {
                        staticClass: "mx-auto",
                        attrs: {
                          img: camp.src,
                          alt: camp.alt,
                          elevation: _vm.hover ? 12 : 2,
                          width: _vm.$vuetify.breakpoint.mdAndUp
                            ? "500"
                            : "325",
                          height: _vm.$vuetify.breakpoint.mdAndUp
                            ? "500"
                            : "325"
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Camp/Camps.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Components/Camp/Camps.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Camps_vue_vue_type_template_id_b824ac7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camps.vue?vue&type=template&id=b824ac7c& */ "./resources/js/components/Components/Camp/Camps.vue?vue&type=template&id=b824ac7c&");
/* harmony import */ var _Camps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camps.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Camp/Camps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Camps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Camps_vue_vue_type_template_id_b824ac7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Camps_vue_vue_type_template_id_b824ac7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Camp/Camps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Camp/Camps.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Components/Camp/Camps.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Camps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Camp/Camps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Camp/Camps.vue?vue&type=template&id=b824ac7c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Components/Camp/Camps.vue?vue&type=template&id=b824ac7c& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_template_id_b824ac7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Camps.vue?vue&type=template&id=b824ac7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Camp/Camps.vue?vue&type=template&id=b824ac7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_template_id_b824ac7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_template_id_b824ac7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);