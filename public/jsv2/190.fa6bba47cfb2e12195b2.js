(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[190],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/TrialForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/TrialForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "enrollment-form",
  components: {
    trial_form: function trial_form() {
      return __webpack_require__.e(/*! import() */ 133).then(__webpack_require__.bind(null, /*! ../Components/Form/Trial/Form */ "./resources/js/components/Components/Form/Trial/Form.vue"));
    }
  },
  created: function created() {
    var form = {
      location: "Motor City",
      children: [{
        first_name: '',
        family_name: '',
        nationality: '',
        gender: "Female",
        dob: '',
        dob_open: false,
        medical_status: 'Yes',
        medical_history: ''
      }],
      mother: {
        first_name: '',
        family_name: '',
        nationality: '',
        home_number: 0,
        mobile_number: 0,
        work_number: 0,
        company: '',
        email: ''
      },
      father: {
        first_name: '',
        family_name: '',
        nationality: '',
        home_number: 0,
        mobile_number: 0,
        work_number: 0,
        company: '',
        email: ''
      },
      address: {
        development: '',
        street: '',
        building: '',
        landmark: '',
        POBox: '',
        emirate: '',
        same: true
      },
      medical: {
        allergies: false,
        textallergies: '',
        respiratory: false,
        textrespiratory: '',
        physical: false,
        textphysical: '',
        vision: false,
        textvision: '',
        hearing: false,
        texthearing: '',
        otherhealth: false,
        textotherhealth: ''
      },
      prescription: {
        antiseptic: true,
        textantiseptic: '',
        plasters: true,
        textplasters: '',
        insectbite: true,
        textinsectbite: '',
        firstaid: true,
        textfirstaid: '',
        calpol: true,
        textcalpol: '',
        ice: true,
        textice: ''
      },
      emergency: {
        person_1: {
          first_name: '',
          family_name: '',
          contact_1: '',
          contact_2: '',
          contact_3: '',
          relation: ''
        },
        person_2: {
          first_name: '',
          family_name: '',
          contact_1: '',
          contact_2: '',
          contact_3: '',
          relation: ''
        }
      }
    };
    this.$store.commit("ENROLLMENT", form);
  },
  data: function data() {
    return {
      steps: 1,
      seo: {
        title: "StepUp Academy",
        description: "We offer a great selection of Dance and Fitness classes to cater for all ages and abilities. We offer trial classes and afterwards our teachers will be happy to give you feedback, this will ensure we find a suitable class for you or your child.s",
        site_name: "StepUp Academy",
        img: "",
        site: "https://stepup.ae/"
      }
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.seo.title,
      titleTemplate: "%s - Online Enrollment Form",
      htmlAttrs: {
        lang: "en"
      },
      meta: [{
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        name: "description",
        content: this.seo.description
      }, {
        name: "keywords",
        content: "StepUp Academy, Enrollment Form, Online Form"
      }, // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: this.seo.title
      }, {
        property: "og:site_name",
        content: this.seo.site_name
      }, // The list of types is available here: http://ogp.me/#types
      {
        property: "og:type",
        content: "article"
      }, // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: this.seo.site + "enrollment-form"
      }, {
        property: "og:image",
        content: this.seo.site + "img/logo.jpg"
      }, // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: this.seo.description
      }, // Twitter card
      {
        name: "twitter:card",
        content: "summary"
      }, {
        name: "twitter:site",
        content: this.seo.site + "enrollment-form"
      }, {
        name: "twitter:title",
        content: this.seo.title
      }, {
        name: "twitter:description",
        content: this.seo.description
      }, // Your twitter handle, if you have one.
      {
        name: "twitter:creator",
        content: "@vmbcarabbacan"
      }, {
        name: "twitter:image:src",
        content: this.seo.site + "img/logo.jpg"
      }, // Google / Schema.org markup:
      {
        itemprop: "name",
        content: this.seo.title
      }, {
        itemprop: "description",
        content: this.seo.description
      }, {
        itemprop: "image",
        content: this.seo.site + "img/logo.jpg"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/TrialForm.vue?vue&type=template&id=c4c2eb44&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Views/TrialForm.vue?vue&type=template&id=c4c2eb44& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "v-container",
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                {
                  attrs: { cols: _vm.$vuetify.breakpoint.mdAndUp ? "10" : "12" }
                },
                [_c("div", [_c("trial_form")], 1)]
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

/***/ "./resources/js/components/Views/TrialForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Views/TrialForm.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrialForm_vue_vue_type_template_id_c4c2eb44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrialForm.vue?vue&type=template&id=c4c2eb44& */ "./resources/js/components/Views/TrialForm.vue?vue&type=template&id=c4c2eb44&");
/* harmony import */ var _TrialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrialForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Views/TrialForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrialForm_vue_vue_type_template_id_c4c2eb44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrialForm_vue_vue_type_template_id_c4c2eb44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Views/TrialForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Views/TrialForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Views/TrialForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TrialForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/TrialForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Views/TrialForm.vue?vue&type=template&id=c4c2eb44&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Views/TrialForm.vue?vue&type=template&id=c4c2eb44& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrialForm_vue_vue_type_template_id_c4c2eb44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TrialForm.vue?vue&type=template&id=c4c2eb44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Views/TrialForm.vue?vue&type=template&id=c4c2eb44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrialForm_vue_vue_type_template_id_c4c2eb44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrialForm_vue_vue_type_template_id_c4c2eb44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);