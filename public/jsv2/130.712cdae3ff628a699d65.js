(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Competition/category.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Competition/category.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
  name: "Elite-Training-Competitiion",
  data: function data() {
    return {
      category: false,
      compElite: {},
      details: ["In addition to our regular classes, The Academy offers additional training in the form of an “Elite training program”. This is an invitation only class for those students who show promising talent and dedication to their dance studies. During this class students will be pushed to improve on their flexibility, stamina, technique, performance skills and versatility. It is the perfect class for those who are wanting to take Dance & Performing Arts to the next level, those who wish to develop a solid foundation in their skills, and for those who wish to pursue a career in the industry. The Elite class is an additional class, and all students must still be attending their regular Ballet and Performing Arts classes.<br><br>", "Another exciting reason to join StepUp Academy, is our competition teams. Each year we create competition teams which travel both overseas and locally to compete against other dance schools. Previous overseas trips include Europe and USA. These teams are all done either by audition or by personal selection. All students are invited and welcome to try out when there are auditions. Being in any of the competition teams requires a lot of dedication, passion, and teamwork, and it is a privilege to be chosen. All students must be continuing with their regular Ballet and Performing Arts classes at StepUp Academy as well as attending competition training and any extra rehearsals. <br><br>", "<strong>IFDPA</strong> – Each year we hold open auditions to students aged 5 years and above, to give them the chance to secure a place in our competition team for Paris. This audition is open to all students new and existing and there is no limitation of the number of students who we choose to accept onto the team. The trip consists of competing in group dances, duets and solos, in the following categories – Ballet, Jazz, Modern Contemporary, Tap, Musical Theatre, Sing Starz, Hip Hop and Open Categories. Students also get to take part in the pre parade which goes around the Disney park, taking part in multiple workshops which are led by some of Disney’s choreographers as well as having our own dedicated 20minute show performing inside the park. This is truly a magical and memorable trip for everyone!  <br><br>", "<strong>World Dance Competition</strong> – This overseas competition is a closed event and not open to everyone. Selected students are chosen to compete here and there are a limited number of places. Selection is based on a variety of things, such as – a student’s technique, ability, flexibility, ability to pick up and retain choreography, their previous commitment and hard work towards their regular classes, how much of a team player they are, maturity and more. The event consists of competing in numerous categories across group, trio, duet and solo entries. There is a gala dinner/party which is linked to the awards from the competition. In addition to the competition, the students also get to have master classes taught by some of the industry’s top choreographers and performers. Students must be attending their regular dance classes as well as additional rehearsals for the competition."],
      categories: [{
        text: "Competition",
        details: ["Here at StepUp Academy, we offer students the chance to take their talents both overseas as well as locally and to take part in international dance competitions with dance schools from around the world. Some of our regular overseas trips and competitions include the IFDPA which is held in Disney Land Paris, and the World Dance Competition, which is held in Orlando, USA.", "<br><br>IFDPA – Each year we hold open auditions to students aged 5 years and above, to give them the chance to secure a place in our competition team for Paris. This audition is open to all students new and existing. The trip consists of competing in group dances, duets and solos, taking part in the pre parade which goes around the park, taking part in multiple workshops which are led by some of Disney’s choreographers as well as having our own dedicated 20minute show performing inside the park. Students must be attending their regular dance classes as well as additional rehearsals for the competition. ", "<br><br>World Dance Competition – This overseas competition is a closed event and not open to everyone. Selected students are chosen to compete here. Based on their technique, ability and how long they have been with the Academy and more. The event consists of competing in numerous categories across group, trio, duet and solo entries. There is a gala dinner/party which is linked to the awards from the competition. In addition to the competition, the students also get to have master classes taught by some of the industry’s top choreographers and performers. Students must be attending their regular dance classes as well as additional rehearsals for the competition."],
        path: "/img/competitions/competition.jpeg",
        alt: "StepUp Academy Competition"
      }, {
        text: "Elite Training",
        details: ["The Academy offers an “Elite training program”. This is an invitation only class for those students who show promising talent and dedication to their dance studies. During this class students will be pushed to improve on their flexibility, stamina, technique, performance skills and versatility. The perfect class for those who are wanting to take Dance & Performing Arts to the next level. Those wish to develop a solid foundation in their skills, and for those who wish to pursue a career in the industry. The Elite class is an additional class, and all students must still be attending their regular classes."],
        path: "/img/competitions/elite.jpg",
        alt: "StepUp Academy Elite Training"
      }]
    };
  },
  methods: {
    goCategory: function goCategory(item) {
      // console.log(item)
      this.$store.commit("COMP_ELITE", item);
      this.$store.commit("IS_COMP_ELITE", true);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Competition/category.vue?vue&type=template&id=6644d7ac&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Competition/category.vue?vue&type=template&id=6644d7ac& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            "v-card",
            { attrs: { flat: "", color: "transparent" } },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "space-around" } },
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("h1", { staticClass: "display-2" }, [
                              _vm._v("Competition & Elite Training")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            _vm._l(_vm.details, function(detail) {
                              return _c("h2", {
                                key: detail,
                                staticClass: "body-2",
                                domProps: { innerHTML: _vm._s(detail) }
                              })
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.categories, function(category, i) {
                            return _c(
                              "v-col",
                              { key: i, attrs: { cols: "12", md: "6" } },
                              [
                                _c("v-hover", {
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var hover = ref.hover
                                          return [
                                            _c(
                                              "v-card",
                                              {
                                                class: { "on-hover": hover },
                                                attrs: {
                                                  elevation: hover ? 12 : 2,
                                                  dark: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.goCategory(
                                                      category
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-img",
                                                  {
                                                    staticClass:
                                                      "d-flex align-center flex-wrap",
                                                    attrs: {
                                                      src: category.path,
                                                      alt: category.alt,
                                                      height: _vm.$vuetify
                                                        .breakpoint.smAndDown
                                                        ? "400px"
                                                        : "400px"
                                                    }
                                                  },
                                                  [
                                                    _c("h2", {
                                                      staticClass: "display-1",
                                                      domProps: {
                                                        innerHTML: _vm._s(
                                                          category.text
                                                        )
                                                      }
                                                    })
                                                  ]
                                                )
                                              ],
                                              1
                                            )
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
                          })
                        ],
                        2
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

/***/ "./resources/js/components/Components/Competition/category.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Components/Competition/category.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_6644d7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=6644d7ac& */ "./resources/js/components/Components/Competition/category.vue?vue&type=template&id=6644d7ac&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Competition/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_6644d7ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_6644d7ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Competition/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Competition/category.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Components/Competition/category.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Competition/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Competition/category.vue?vue&type=template&id=6644d7ac&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Components/Competition/category.vue?vue&type=template&id=6644d7ac& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_6644d7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=6644d7ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Competition/category.vue?vue&type=template&id=6644d7ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_6644d7ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_6644d7ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);