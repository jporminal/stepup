(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "terms-and-conditions-products",
  data: function data() {
    return {
      min_date: new Date().toJSON().slice(0, 10),
      rules: {
        required: function required(v) {
          return !!v || "required field";
        },
        email: function email(v) {
          return /.+@.+/.test(v) || "E-mail must be valid";
        }
      },
      valid: false,
      item_combos: ["Yes", "No"],
      medications: "Yes",
      details: "",
      open: false,
      headers: [{
        text: "TIMINGS",
        value: "timings"
      }, {
        text: "DAILY",
        value: "daily"
      }, {
        text: "FULL CAMP",
        value: "full"
      }],
      tcs_camps: "\n\n            <center>\n            <h3><u>TERMS & CONDITIONS</u></h3>\n            I waive that any program such as Winter workshops/ Multi-Skills Camp and its affiliated programs which involve movement and motion can result in physical injury. I permit my child to participate in the above-mentioned selected program and StepUp Academy, its owners, employees, instructors and staff from all liability for injury to my child from his/her participation in this program. Furthermore, I agree to allow StepUp Academy to use the name and likeness in photographs and/or video of my child for advertising and promotional purposes without compensation and without prior notification.\n            <br><br>\n            I am aware that there are live CCTV recordings going on, however they are not available to view unless there is a situation which occurs, where the CCTV will be reviewed. Showing of the CCTV footage to myself will only be possible should I go through the correct authorities.\n            </center>"
    };
  },
  created: function created() {
    var form = {
      location: "Motor City",
      children: [{
        first_name: null,
        family_name: null,
        nationality: null,
        age: 0,
        gender: "Female",
        dob: null,
        dob_open: false,
        medical_status: true,
        medical_history: null
      }],
      mother: {
        first_name: null,
        family_name: null,
        nationality: null,
        home_number: null,
        mobile_number: null,
        work_number: null,
        company: null,
        email: null
      },
      father: {
        first_name: null,
        family_name: null,
        nationality: null,
        home_number: null,
        mobile_number: null,
        work_number: null,
        company: null,
        email: null
      },
      address: {
        development: null,
        street: null,
        building: null,
        landmark: null,
        POBox: null,
        emirate: null,
        same: true
      },
      medical: {
        allergies: false,
        textallergies: null,
        respiratory: false,
        textrespiratory: null,
        physical: false,
        textphysical: null,
        vision: false,
        textvision: null,
        hearing: false,
        texthearing: null,
        otherhealth: false,
        textotherhealth: null
      },
      prescription: {
        antiseptic: true,
        textantiseptic: null,
        plasters: true,
        textplasters: null,
        insectbite: true,
        textinsectbite: null,
        firstaid: true,
        textfirstaid: null,
        calpol: true,
        textcalpol: null,
        ice: true,
        textice: null
      },
      emergency: {
        person_1: {
          first_name: null,
          family_name: null,
          contact_1: null,
          contact_2: null,
          contact_3: null,
          relation: null
        },
        person_2: {
          first_name: null,
          family_name: null,
          contact_1: null,
          contact_2: null,
          contact_3: null,
          relation: null
        }
      }
    };
    this.$store.commit("ENROLLMENT", form);
  },
  methods: {
    add: function add() {
      var form = {
        first_name: null,
        family_name: null,
        nationality: null,
        age: 0,
        gender: "Female",
        dob: null,
        dob_open: false,
        medical_status: true,
        medical_history: null
      };
      this.$store.state.Enrollments.enrollment.children.push(form);
      this.$store.commit("ENROLLMENT", this.$store.state.Enrollments.enrollment);
    },
    save: function save() {
      var _this = this;

      this.$store.dispatch("ENROLLMENT", {
        form: this.$store.state.Enrollments.enrollment
      }).then(function (result) {
        _this.$store.commit("PARENT", result.data.mom);

        _this.$store.commit("CHILD", result.data.children);

        localStorage.setItem("parent", JSON.stringify(result.data.mom));
        localStorage.setItem("children", JSON.stringify(result.data.children));
        localStorage.setItem("camp_form", JSON.stringify(_this.$store.state.Enrollments.enrollment));
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
          text: "Thank you for using our online camps form"
        };

        _this.$store.commit("SNACKBAR", snackbar);

        _this.$store.commit("ENROLLMENT", {});

        _this.$store.commit("CART_CAMP_FORM", false);

        _this.$router.push("/checkout");
      });
    },
    close: function close() {
      this.$store.commit("CART_CAMP_FORM", false);
      this.$store.commit("ENROLLMENT", {});
    },
    get_age: function get_age(e) {
      var currentDate = new Date();
      var birthDate = new Date(e);
      var difference = currentDate - birthDate;
      var age = Math.floor(difference / 31557600000);
      this.$store.state.Enrollments.enrollment.children.age = age;
    }
  },
  computed: {
    enrollment: function enrollment() {
      var child = {
        child: {
          dateofbirth: new Date().toJSON().slice(0, 10),
          age: 0,
          firstname: "",
          lastname: "",
          gender: "",
          nationality: "",
          is_medicine: "Yes",
          medical_details: ""
        }
      };
      return Object.assign(this.$store.state.EnrollmentForm, child);
    },
    cart: function cart() {
      return this.$store.state.cart;
    },
    grand_total: function grand_total() {
      return this.cart.reduce(function (total, product) {
        return total + Number(product.product_option.total_incl);
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=template&id=1e3ddc61&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=template&id=1e3ddc61& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "1000px", persistent: "" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.$store.state.Carts.camps,
        callback: function($$v) {
          _vm.$set(_vm.$store.state.Carts, "camps", $$v)
        },
        expression: "$store.state.Carts.camps"
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
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "d-flex justify-space-around" },
                    [
                      _c("v-toolbar-title", [
                        _c("p", { staticClass: "title" }, [
                          _vm._v("REGISTRATION FORM")
                        ])
                      ])
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
          _c("p", { staticClass: "text-h6 text-center mt-2" }, [
            _vm._v("\n      Spring Camp "),
            _c("br"),
            _vm._v("\n      (27"),
            _c("sup", [_vm._v("th")]),
            _vm._v(" March – 7"),
            _c("sup", [_vm._v("th")]),
            _vm._v(" April 2022)\n    ")
          ]),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-card-text",
                    [
                      _vm._l(
                        _vm.$store.state.Enrollments.enrollment.children,
                        function(item, index) {
                          return [
                            _c(
                              "div",
                              { key: index },
                              [
                                _c("v-subheader", { staticClass: "title" }, [
                                  _vm._v(
                                    "\n                Student " +
                                      _vm._s(index + 1) +
                                      " Details\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  {
                                    attrs: {
                                      align: "center",
                                      justify: "center"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "5" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "First Name",
                                            rules: [_vm.rules.required]
                                          },
                                          model: {
                                            value: item.first_name,
                                            callback: function($$v) {
                                              _vm.$set(item, "first_name", $$v)
                                            },
                                            expression: "item.first_name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "5" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Family Name",
                                            rules: [_vm.rules.required]
                                          },
                                          model: {
                                            value: item.family_name,
                                            callback: function($$v) {
                                              _vm.$set(item, "family_name", $$v)
                                            },
                                            expression: "item.family_name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "5" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Age",
                                            value:
                                              item.dob == null
                                                ? 0
                                                : _vm.$age(item.dob),
                                            readonly: ""
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "5" } },
                                      [
                                        _c(
                                          "v-menu",
                                          {
                                            attrs: {
                                              "close-on-content-click": false,
                                              "nudge-right": 40,
                                              transition: "scale-transition",
                                              "offset-y": "",
                                              "min-width": "290px"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    var attrs = ref.attrs
                                                    return [
                                                      _c(
                                                        "v-text-field",
                                                        _vm._g(
                                                          _vm._b(
                                                            {
                                                              attrs: {
                                                                label:
                                                                  "Date of Birth",
                                                                "prepend-icon":
                                                                  "mdi-event",
                                                                readonly: "",
                                                                rules: [
                                                                  function(v) {
                                                                    return (
                                                                      !!v ||
                                                                      "Date of birth is required"
                                                                    )
                                                                  }
                                                                ]
                                                              },
                                                              model: {
                                                                value: item.dob,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    item,
                                                                    "dob",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "item.dob"
                                                              }
                                                            },
                                                            "v-text-field",
                                                            attrs,
                                                            false
                                                          ),
                                                          on
                                                        )
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              true
                                            ),
                                            model: {
                                              value: item.dob_open,
                                              callback: function($$v) {
                                                _vm.$set(item, "dob_open", $$v)
                                              },
                                              expression: "item.dob_open"
                                            }
                                          },
                                          [
                                            _vm._v(" "),
                                            _c("v-date-picker", {
                                              attrs: { max: _vm.min_date },
                                              on: {
                                                input: function($event) {
                                                  item.dob_open = false
                                                },
                                                change: _vm.get_age
                                              },
                                              model: {
                                                value: item.dob,
                                                callback: function($$v) {
                                                  _vm.$set(item, "dob", $$v)
                                                },
                                                expression: "item.dob"
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
                                ),
                                _vm._v(" "),
                                _c("v-subheader", { staticClass: "title" }, [
                                  _vm._v(
                                    "\n                Any medical condition?\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  {
                                    attrs: {
                                      align: "center",
                                      justify: "center"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "5" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            items: _vm.item_combos,
                                            rules: [_vm.rules.required]
                                          },
                                          model: {
                                            value: item.medical_status,
                                            callback: function($$v) {
                                              _vm.$set(
                                                item,
                                                "medical_status",
                                                $$v
                                              )
                                            },
                                            expression: "item.medical_status"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "5" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "details",
                                            disabled:
                                              item.medical_status == "No"
                                          },
                                          model: {
                                            value: item.medical_history,
                                            callback: function($$v) {
                                              _vm.$set(
                                                item,
                                                "medical_history",
                                                $$v
                                              )
                                            },
                                            expression: "item.medical_history"
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
                          ]
                        }
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-right" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-none success",
                              on: { click: _vm.add }
                            },
                            [_vm._v(" Add Child")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-subheader", { staticClass: "title" }, [
                        _vm._v(" Mum's Details ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "First Name",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.first_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "first_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.first_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Family Name",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.family_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "family_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.family_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email Address",
                                  rules: [_vm.rules.email]
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.email,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "email",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$store.state.Enrollments.enrollment.mother.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Contact Number",
                                  rules: [_vm.rules.required],
                                  type: "number"
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .mother.home_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .mother,
                                      "home_number",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.mother.home_number\n                "
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-subheader", { staticClass: "title" }, [
                        _vm._v(" Dad's Details ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "First Name",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.first_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "first_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.first_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Family Name",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.family_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "family_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.family_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email Address",
                                  rules: [_vm.rules.email]
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.email,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "email",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "$store.state.Enrollments.enrollment.father.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Contact Number",
                                  rules: [_vm.rules.required],
                                  type: "number"
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .father.home_number,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .father,
                                      "home_number",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.father.home_number\n                "
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-subheader", { staticClass: "title" }, [
                        _vm._v(" Emergency Contact ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "First Name" },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .emergency.person_1.first_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .emergency.person_1,
                                      "first_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.emergency.person_1\n                    .first_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Family Name" },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .emergency.person_1.family_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .emergency.person_1,
                                      "family_name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.emergency.person_1\n                    .family_name\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Contact Number",
                                  type: "number"
                                },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .emergency.person_1.contact_1,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .emergency.person_1,
                                      "contact_1",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.emergency.person_1\n                    .contact_1\n                "
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Relationship" },
                                model: {
                                  value:
                                    _vm.$store.state.Enrollments.enrollment
                                      .emergency.person_1.relation,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.$store.state.Enrollments.enrollment
                                        .emergency.person_1,
                                      "relation",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "\n                  $store.state.Enrollments.enrollment.emergency.person_1\n                    .relation\n                "
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    2
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
                      staticClass: "success",
                      attrs: { disabled: !_vm.valid },
                      on: { click: _vm.save }
                    },
                    [_vm._v("\n          I Agree\n        ")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Components/Cart/Forms/Camps.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Components/Cart/Forms/Camps.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Camps_vue_vue_type_template_id_1e3ddc61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camps.vue?vue&type=template&id=1e3ddc61& */ "./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=template&id=1e3ddc61&");
/* harmony import */ var _Camps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camps.vue?vue&type=script&lang=js& */ "./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Camps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Camps_vue_vue_type_template_id_1e3ddc61___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Camps_vue_vue_type_template_id_1e3ddc61___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Components/Cart/Forms/Camps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Camps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=template&id=1e3ddc61&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=template&id=1e3ddc61& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_template_id_1e3ddc61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Camps.vue?vue&type=template&id=1e3ddc61& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Components/Cart/Forms/Camps.vue?vue&type=template&id=1e3ddc61&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_template_id_1e3ddc61___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Camps_vue_vue_type_template_id_1e3ddc61___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);