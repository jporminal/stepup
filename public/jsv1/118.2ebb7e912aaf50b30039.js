(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{ZyJV:function(t,e,s){"use strict";s.r(e);var a={name:"cart-process",data:function(){return{email:null,emailRules:[function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],valid:!1,filled_up_form:!1}},components:{my_sua_terms_condition:function(){return s.e(120).then(s.bind(null,"TRtd"))},my_form:function(){return s.e(117).then(s.bind(null,"ZG2K"))}},methods:{clearEmail:function(){},proceed:function(){var t=this;this.filled_up_form?this.$store.dispatch("FILTER_CART_PARENT_EMAIL",{email:this.email}).then((function(e){console.log(e),e.data?(t.$store.commit("PARENT",e.data.mom),t.$store.commit("CHILD",e.data.children),localStorage.setItem("parent",JSON.stringify(e.data.mom)),localStorage.setItem("children",JSON.stringify(e.data.children)),t.$router.push("/checkout"),t.close()):t.$store.commit("CART_ENROLLMENT_FORM",!0)})):this.$store.commit("CART_ENROLLMENT_FORM",!0)},close:function(){this.$store.commit("CART_PROCESS",!1)},sua_terms:function(){this.$store.commit("TERMS_OPEN",!0)}}},o=s("KHd+"),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"800"},on:{"click:outside":t.close},model:{value:t.$store.state.Carts.process,callback:function(e){t.$set(t.$store.state.Carts,"process",e)},expression:"$store.state.Carts.process"}},[s("v-card",[s("my_sua_terms_condition"),t._v(" "),s("my_form"),t._v(" "),s("v-toolbar",{attrs:{color:"blue lighten-2",dark:"",flat:""}},[s("v-row",[s("v-col",{staticClass:"d-flex justify-space-around"},[s("v-toolbar-title",[s("p",{staticClass:"title"},[t._v("SUA Terms & Conditions")])])],1)],1)],1),t._v(" "),s("v-card-text",[s("v-checkbox",{staticClass:"my-0",scopedSlots:t._u([{key:"label",fn:function(){return[s("div",[t._v("\n            Onsite Classes\n            "),s("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:t.sua_terms}},[t._v("\n              View Terms & Conditions\n            ")])],1)]},proxy:!0}]),model:{value:t.$store.state.Carts.sua_terms,callback:function(e){t.$set(t.$store.state.Carts,"sua_terms",e)},expression:"$store.state.Carts.sua_terms"}}),t._v(" "),s("v-divider"),t._v(" "),s("p",[t._v("Have you filled out our Online Enrollment form?")]),t._v(" "),s("v-radio-group",{attrs:{row:""},on:{change:t.clearEmail},model:{value:t.filled_up_form,callback:function(e){t.filled_up_form=e},expression:"filled_up_form"}},[s("v-radio",{attrs:{label:"No",value:!1}}),t._v(" "),s("v-radio",{attrs:{label:"Yes",value:!0}})],1),t._v(" "),t.filled_up_form?s("v-form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{label:"Enter Email Address","prepend-icon":"mdi-email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1):t._e()],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"text-none success",attrs:{disabled:t.filled_up_form&&!t.valid||!t.$store.state.Carts.sua_terms},on:{click:t.proceed}},[t._v("\n        Submit\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);