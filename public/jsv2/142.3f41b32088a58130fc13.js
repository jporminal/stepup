(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Lesson/Lessons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Lesson/Lessons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'lists-of-lessons',
  data: function data() {
    return {
      isActive: false,
      isOpen: false,
      lesson: {},
      buttons: [{
        color: '#5AB9EA',
        text: 'Enroll',
        to: 'shop'
      }, {
        color: '#8860D0',
        text: 'Contact Us',
        to: {
          path: '/',
          hash: 'contactus'
        }
      }],
      details: 'With such a wide variety of classes offered across numerous genres, click on the classes below to find out more information, to help you choose which class is best suited. We offer classes for beginners through to advanced levels, for ages 15months up to adults. Classes offered include Ballet, Street Jazz, Hip Hop, Breakdance, Lyrical Contemporary, Pointe, Acro, Gymnastics, Kinder Dance, Tots Ballet, Gym, Kinder Dance With Me, Musical Theatre, Tap & Modern, Elite, Rhythmic Gymnastics, Irish, Karate and more………..',
      lessons: [{
        name: 'Acro & Gymnastics',
        image: 'img/lessons/newest/acro-and-gymnastics.jpg',
        size: '12',
        alt: 'StepUp Academy Acro & Gymnastics',
        item: 39
      }, {
        name: 'Adult Classes',
        image: 'img/lessons/newest/adult-classes.jpg',
        size: '12',
        alt: 'StepUp Academy Adult Classes',
        item: 48
      }, {
        name: 'Ballet',
        image: 'img/lessons/newest/ballet.jpg',
        size: '12',
        alt: 'StepUp Academy Ballet',
        item: 34
      }, {
        name: 'Bloom Baby',
        image: 'img/lessons/newest/bloom-baby.jpg',
        size: '12',
        alt: 'StepUp Academy Bloom Baby',
        item: 34
      }, {
        name: 'Dance Syndrome',
        image: 'img/lessons/newest/dance-syndrome.jpg',
        size: '12',
        alt: 'StepUp Academy Dance Syndrome',
        item: 44
      }, {
        name: 'Elite & Competition Teams',
        image: 'img/lessons/newest/elite-and-competition-teams.jpg',
        size: '12',
        alt: 'StepUp Academy Elite and Competition Teams',
        item: 42
      }, {
        name: 'Irish',
        image: 'img/lessons/newest/irish.jpg',
        size: '12',
        alt: 'StepUp Academy Irish',
        item: 42
      }, {
        name: 'Kinder Dance',
        image: 'img/lessons/newest/kinder-dance.jpg',
        size: '12',
        alt: 'StepUp Academy Kinder Dance',
        item: 35
      }, {
        name: 'Kinder Gym',
        image: 'img/lessons/newest/kinder-gym.jpg',
        size: '12',
        alt: 'StepUp Academy Kinder Gym',
        item: 35
      }, {
        name: 'Kinder Tots',
        image: 'img/lessons/newest/kinder-tots.jpg',
        size: '12',
        alt: 'StepUp Academy Kinder Tots',
        item: 35
      }, {
        name: 'Lyrical Contemporary',
        image: 'img/lessons/newest/lyrical-contemporary.jpg',
        size: '12',
        alt: 'StepUp Academy Lyrical Contemporary',
        item: 41
      }, {
        name: 'Martial Arts',
        image: 'img/lessons/newest/martial-arts.jpg',
        size: '12',
        alt: 'StepUp Academy Musical Martial Arts',
        item: 45
      }, {
        name: 'Musical Theatre',
        image: 'img/lessons/newest/musical-theatre.jpg',
        size: '12',
        alt: 'StepUp Academy Musical Theatre',
        item: 45
      }, {
        name: 'Vocal Lessons',
        image: 'img/lessons/newest/vocal-lessons.jpg',
        size: '12',
        alt: 'StepUp Academy Vocal',
        item: 45
      }, {
        name: 'Pointe',
        image: 'img/lessons/newest/pointe.jpg',
        size: '12',
        alt: 'StepUp Academy Pointe',
        item: 45
      }, {
        name: 'Rhythmic Gymnastics',
        image: 'img/lessons/newest/rhythmic-gymnastics.jpg',
        size: '12',
        alt: 'StepUp Academy Rhythmic Gymnastics',
        item: 45
      }, {
        name: 'Street Jazz & Hip Hop',
        image: 'img/lessons/newest/street-jazz-and-hip-hop.jpg',
        size: '12',
        alt: 'StepUp Academy Street Jazz and Hip Hop',
        item: 36
      }, {
        name: 'Strengthening & Conditioning',
        image: 'img/lessons/newest/strengthening-and-conditioning.jpg',
        size: '12',
        alt: 'StepUp Academy Strenthening and Conditioning',
        item: 43
      }, {
        name: 'Tap & Modern',
        image: 'img/lessons/newest/tap-and-modern.jpg',
        size: '12',
        alt: 'StepUp Academy IDTA Tap and Modern',
        item: 37
      }, {
        name: 'Technical Jazz',
        image: 'img/lessons/newest/technical-jazz.jpg',
        size: '12',
        alt: 'StepUp Academy Technical Jazz',
        item: 49
      }, {
        name: 'Heels',
        image: 'img/lessons/newest/heels.jpg',
        size: '12',
        alt: 'StepUp Academy Heels',
        item: 37
      }, {
        name: 'StepUp Stage School',
        image: 'img/lessons/newest/stepup-stage-school.jpg',
        size: '12',
        alt: 'StepUp Academy Stage School',
        item: 49
      }]
    };
  },
  methods: {
    openDetails: function openDetails(lesson) {
      this.isOpen = true;
      this.lesson = lesson;
    },
    to_shop: function to_shop(item) {
      var filter = {
        search: '',
        paginate: 12,
        shopFilter: 'Current',
        shopCategories: item
      };
      this.$store.commit('shop_filter', filter);
      this.$router.push('/shop');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Lesson/Lessons.vue?vue&type=template&id=ce58abbc&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Lesson/Lessons.vue?vue&type=template&id=ce58abbc& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "slant-card-staff-container" }, [
    _c("div", { staticClass: "slant-card-staff" }, [
      _c(
        "div",
        { staticClass: "slant-card-staff-inner" },
        [
          _c(
            "v-container",
            { staticClass: "pa-4 text-center" },
            [
              _c(
                "v-row",
                {
                  staticClass: "fill-height",
                  attrs: { align: "center", justify: "center" }
                },
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _c("h1", { staticClass: "text-center display-3" }, [
                      _vm._v(" Class Information ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _c("h2", {
                      staticClass: "body-2",
                      domProps: { innerHTML: _vm._s(_vm.details) }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.lessons, function(lesson, i) {
                    return [
                      _c(
                        "v-col",
                        { key: i, attrs: { cols: "12", xl: "3", md: "4" } },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var hover = ref.hover
                                    return [
                                      _c("v-card", {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          elevation: hover ? 12 : 2,
                                          img: lesson.image,
                                          alt: lesson.alt,
                                          hover: "",
                                          height: _vm.$vuetify.breakpoint.xl
                                            ? "420px"
                                            : _vm.$vuetify.breakpoint.lg
                                            ? "380px"
                                            : _vm.$vuetify.breakpoint.md
                                            ? "280px"
                                            : _vm.$vuetify.breakpoint.sm
                                            ? "640px"
                                            : "338px"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openDetails(lesson)
                                          }
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      )
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { width: "870" },
                  model: {
                    value: _vm.isOpen,
                    callback: function($$v) {
                      _vm.isOpen = $$v
                    },
                    expression: "isOpen"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "mx-auto",
                          attrs: { src: _vm.lesson.image }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                absolute: "",
                                dark: "",
                                text: "",
                                top: "",
                                right: "",
                                color: "red"
                              },
                              on: {
                                click: function($event) {
                                  _vm.isOpen = false
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-close")])],
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
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Lesson/Lessons.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Components/Lesson/Lessons.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lessons_vue_vue_type_template_id_ce58abbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lessons.vue?vue&type=template&id=ce58abbc& */ "./resources/js/components/Components/Lesson/Lessons.vue?vue&type=template&id=ce58abbc&");
/* harmony import */ var _Lessons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lessons.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Lesson/Lessons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Lessons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lessons_vue_vue_type_template_id_ce58abbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Lessons_vue_vue_type_template_id_ce58abbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Lesson/Lessons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Lesson/Lessons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Components/Lesson/Lessons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lessons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Lessons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Lesson/Lessons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lessons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Lesson/Lessons.vue?vue&type=template&id=ce58abbc&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Components/Lesson/Lessons.vue?vue&type=template&id=ce58abbc& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lessons_vue_vue_type_template_id_ce58abbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Lessons.vue?vue&type=template&id=ce58abbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Lesson/Lessons.vue?vue&type=template&id=ce58abbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lessons_vue_vue_type_template_id_ce58abbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lessons_vue_vue_type_template_id_ce58abbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);