(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "covid-19-terms",
  data: function data() {
    return {
      terms: [{
        text: "In consideration of being allowed to participate on behalf of <strong><i>StepUp Academy</i></strong>, Dubai’s Dance, Fitness & Performing Arts programs, related events and activities, the undersigned acknowledges, appreciates, and agrees that – ",
        lis: ["Participation includes possible exposure to and illness from infectious diseases including but not limited to MRSA, influenza, and COVID-19. While rules and personal discipline may reduce this risk, the risk of serious illness does exist", "I knowingly and freely assume all such risks, both known and un-known, even if arising from the negligence of the releasees or others, and assume full responsibility for my participation and/or my child’s participation", "I willingly agree to comply with the stated and customary terms & conditions for participation (as mentioned below) as protection against infectious diseases. If, however I observe any unusual or significant hazard during my/my child’s presence or participation, I shall remove myself/my child and bring it to the attention of StepUp Academy immediately", "I, for myself and on behalf of my immediate family members, assigns, personal representatives and next of kin, hereby release and hold harmless StepUp Academy, their office staff, their teachers, their owners and other participants, with respect to any and all illness or death, whether arising from the negligence of releasees or otherwise, to the fullest extent permitted by law"]
      }, {
        text: "<br><br>I also agree to the following –",
        lis: ["Mine/my child’s temperature shall be taken before each class/entering StepUp Academy and if it shows as 37.5 or higher, we will not be permitted entry ", "We must sanitize our hands before entering", "All personal belongings must be kept outside the studio, only water bottles and dance shoes are permitted", "Masks must always be worn, including before and after class, when arriving and when leaving", "Masks may be removed during class by the students and teacher, should the teacher feel it is safer to do so, whilst taking part in the physical activity, and I am aware this may happen", "If I/my children/people living in our household show any signs/symptoms of illness, that we will not come to StepUp Academy ", "If anyone with-in our household, or anyone we have been in contact with contracts an illness/virus, that we will inform StepUp Academy, and will not come to the school for a period of 14 days", "To follow all updated regulations as per the government regarding quarantine periods, testing requirements etc… and understand that StepUp Academy cannot list the requirements specifically, due to them being updated and amended", "Should StepUp Academy for whatever reason not be able to continue classes in the studio, that no refunds or credit will be given for the fees paid, and instead online live classes will be conducted as a substitute ", "All terms & conditions and safety procedures are all subject to change with immediate effect and no warning"]
      }]
    };
  },
  methods: {
    close: function close() {
      this.$store.commit("COVID_OPEN", false);
      this.$store.commit("COVID", true);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=template&id=67d1ebdc&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=template&id=67d1ebdc& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "1200px", persistent: "" },
      model: {
        value: _vm.$store.state.Enrollments.covid_open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Enrollments, "covid_open", $$v)
        },
        expression: "$store.state.Enrollments.covid_open"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-subtitle", [
            _c("h1", { staticClass: "display-1 text-center" }, [
              _vm._v(
                "\n        ASSUMPTION OF RISK / WAIVER OF LIABILITY / INDEMNIFICATION AGREEMENT\n      "
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _vm._l(_vm.terms, function(term) {
                return [
                  _c("div", { key: term.text }, [
                    _c("p", { domProps: { innerHTML: _vm._s(term.text) } }),
                    _vm._v(" "),
                    _c(
                      "ol",
                      _vm._l(term.lis, function(li, index) {
                        return _c("li", {
                          key: index,
                          domProps: { innerHTML: _vm._s(li) }
                        })
                      }),
                      0
                    )
                  ])
                ]
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(
                  "\n        I HAVE READ THIS RELEASE OF LIABILITY AND ASSUMPTION OF RISK,\n        AGREEMENT. I FULLY understand ITS’ TERMS AND understand THAT I HAVE\n        GIVEN UP SUBSTANCIAL RIGHTS BY SIGNING IT, AND SIGN IT FREELY AND\n        VOLUNTARILY WITHOUT INDUCEMENT.\n      "
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "text-none success", on: { click: _vm.close } },
                [_vm._v("\n        Agree and Close\n      ")]
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

/***/ "./resources/js/components/Components/Form/Enrollment/tcs_covid.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Components/Form/Enrollment/tcs_covid.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tcs_covid_vue_vue_type_template_id_67d1ebdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tcs_covid.vue?vue&type=template&id=67d1ebdc& */ "./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=template&id=67d1ebdc&");
/* harmony import */ var _tcs_covid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tcs_covid.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tcs_covid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tcs_covid_vue_vue_type_template_id_67d1ebdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tcs_covid_vue_vue_type_template_id_67d1ebdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Form/Enrollment/tcs_covid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_covid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./tcs_covid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_covid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=template&id=67d1ebdc&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=template&id=67d1ebdc& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_covid_vue_vue_type_template_id_67d1ebdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./tcs_covid.vue?vue&type=template&id=67d1ebdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Form/Enrollment/tcs_covid.vue?vue&type=template&id=67d1ebdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_covid_vue_vue_type_template_id_67d1ebdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_covid_vue_vue_type_template_id_67d1ebdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);