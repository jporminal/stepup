(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "covid-19-terms",
  data: function data() {
    return {
      terms: [{
        text: "<strong><u>ONLINE CLASS CONDITIONS</u></strong>",
        lis: ["Access will only be given to those students who have fully paid for the term", "All fees made for online classes from the period April 2020 onwards, until classes resume inside the studio are all non-refundable and transferable", "You will be able to do a total of x1 make up class throughout the term should you miss a class. All make-up classes will only be able to be done on the last week of each month", "Any students wishing to do a trial in a different class, will only be able to during the last week of the month", "All classes will need to be signed up to through the website, and prices and qty cannot be adjusted or amended", "All payments will be done on a monthly basis and will charged pro rata until the end of the month", "Registrations will need to be done every month", "The online class will commence when the teacher starts the video. Please note there could be some delays, as classes will be run back to back, so we ask you to please be patient in this case", "To minimize the risk of disruption and distraction, all student’s camera’s will be muted by the teacher. If they have a question, they should just pause what they are doing and raise their hand. Then the teacher will then give them permission to un-mute", "The online classes will show best on a laptop or iPad, you can also do it through your TV (we advise you to have a play around before the online class starts)", "To make the teacher’s video image the main one, please go to the upper right-hand corner of their picture box and click the 3 dots. Scroll down to “pin video”. This will then make the teachers video the main one on your screen", "All students must be in their full correct uniform with their hair also done (the same as they would for their regular classes in the studio)", "Students must have some water close by to them, for when and if there is a water break", "Students will be doing their regular class work as well as learning new things and will also be doing their regular class stretching, they do, as well as any strengthening and conditioning work they do in class.", "Only students must be taking part in the class, there should be no siblings/parents/nannies etc…", "Parents should check and approve the space which the student shall be using prior to the online class commencing", "If you have any pets at home, please ensure they are not able to enter the area where the student is doing the online class", "There should be NO photos or videos taken by anyone other than the instructor if needed", "Students should remain silent throughout the class. If they have a question, then they can pause what they are doing and raise their hands (as they would in class). The teacher will instruct the class if there is to be a group discussion etc… If a student is being disruptive then they will be removed from the online class", "The online classes are not a time for parents to start asking the teacher questions, if you have any questions then please contact us through the contact page on our website www.stepup.ae", "StepUp Academy and all it’s teachers will not be held responsible should the student injure themselves whilst taking part in the online classes. Taking part in the online class is subject to your choice and risk", "For all younger students (2-4years old) we request that the parents stay with them and help them follow along and join in with them", "In case of any sound, picture or connection interruption, these things are totally out of our control, and therefore StepUp Academy and its teachers will not be responsible or delay the class etc... should this happen", "Classes with under 3 students registered may be cancelled, and you will be asked to transfer to a different day/time/teacher. This can happen with immediate effect, but parents will be contacted", "Please only join the online classes if you agree to the above. If you are joining our online video, then it means you agree to all points mentioned in this document"]
      }, {
        text: "<br><br><strong><u>COVID-19 HOME DELIVERY TERMS & CONDITIONS</u></strong>",
        lis: ["There will be free delivery on all orders which reach a minimum of 150.00 AED", "Orders which are under 150.00 AED will have an automatic 30.00 AED delivery charge applied at the checkout", "All orders will be prepared and bagged up every Thursday", "If you order on a Friday, then you will need to wait for the next delivery slot, which will be the following Saturday and not the next day", "All orders will be delivered every Saturday between 10:00am – 4:00pm. Delivery slots will be scheduled in advance to ensure someone is home to confirm receipt of the delivery", "Deliveries will require immediate confirmation that they have been received and the goods delivered match what you ordered online. This will need to be done via WhatsApp, so we request you all to save the number in your phones prior to delivery – 055 855 2797", "Deliveries will be dropped outside the front door and doorbell rang/door knocked. If the order is not retrieved, then the driver will return the order back to StepUp Academy, and it will be re-sent for delivery again the following weekend", "If the delivery address is an apartment, someone will need to come outside to the main entrance of the building to collect it. You will receive a call when they are outside", "The home delivery service is only with-in Dubai", "There is a strict no returns, no exchange, no refund, no credit notes for stock items during the COVID-19 period – Therefore please be sure on sizing when you are ordering"]
      }]
    };
  },
  methods: {
    close: function close() {
      this.$store.commit("CHECKOUT_TERMS_OPEN", false);
      this.$store.commit("CHECKOUT_TERMS", true);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=template&id=68f8e735&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=template&id=68f8e735& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
        value: _vm.$store.state.Carts.sua_terms_open,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Carts, "sua_terms_open", $$v)
        },
        expression: "$store.state.Carts.sua_terms_open"
      }
    },
    [
      _c(
        "v-card",
        [
          _vm._l(_vm.terms, function(term) {
            return [
              _c(
                "div",
                { key: term.text },
                [
                  _c("v-card-subtitle", [
                    _c("h1", {
                      staticClass: "display-1 text-center",
                      domProps: { innerHTML: _vm._s(term.text) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
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
                ],
                1
              )
            ]
          }),
          _vm._v(" "),
          _c("v-card-text", [
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v(
                "\n        I agree to fulfil the obligations set forth to StepUp Academy and will\n        ensure all school terms in which I/my child attends are accounted for\n        and term & conditions followed.\n      "
              )
            ])
          ]),
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
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tcs_terms_condition_vue_vue_type_template_id_68f8e735___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tcs_terms_condition.vue?vue&type=template&id=68f8e735& */ "./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=template&id=68f8e735&");
/* harmony import */ var _tcs_terms_condition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tcs_terms_condition.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tcs_terms_condition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tcs_terms_condition_vue_vue_type_template_id_68f8e735___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tcs_terms_condition_vue_vue_type_template_id_68f8e735___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_terms_condition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./tcs_terms_condition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_terms_condition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=template&id=68f8e735&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=template&id=68f8e735& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_terms_condition_vue_vue_type_template_id_68f8e735___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./tcs_terms_condition.vue?vue&type=template&id=68f8e735& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Checkout/Terms/tcs_terms_condition.vue?vue&type=template&id=68f8e735&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_terms_condition_vue_vue_type_template_id_68f8e735___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tcs_terms_condition_vue_vue_type_template_id_68f8e735___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);