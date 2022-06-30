(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{sLM1:function(e,t,s){"use strict";s.r(t);var r={name:"new-get-started",props:["scroller"],data:function(){var e=this;return{passw:!1,dialog:!1,tab:"signin",errorMessages:"",errors:"",valid:!1,register:{first_name:"",family_name:"",username:"",email:"",password:"",confirmPassword:"",country:"United Arab Emirates",town:"Dubai",street:""},rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},validEmail:function(e){return/.+@.+/.test(e)||"Email address must be valid"},confirmPassword:function(t){return t===e.register.password||"Password not match"}},country:["United Arab Emirates"],status:"Next",title:"Check Email Address"}},methods:{close:function(){this.dialog=!1,this.status="Next",this.title="Check Email Address"},change_email:function(){this.status="Next"},started:function(){this.$store.commit("USER_LOADER",!0),"Next"==this.status&&this.Check_email(),"Login"==this.status&&this.Login(),"Register"==this.status&&this.Create_account()},Check_email:function(){var e=this;this.$store.dispatch("CHECK_EMAIL",{email:this.register.email}).then((function(t){t.data?(e.status="Login",e.title="Login"):(e.status="Register",e.title="Register")})).catch((function(e){}))},Login:function(){var e=this;this.$store.dispatch("LOGIN",{email:this.register.email,password:this.register.password}).then((function(t){e.$store.commit("USER_LOADER",!1),e.$store.dispatch("CURRENT_USER"),window.location.href="/",e.close()})).catch((function(t){e.$store.commit("USER_LOADER",!1),console.log(t.response.data),e.errors=t}))},Create_account:function(){var e=this;this.$store.dispatch("REGISTER",{first_name:this.register.first_name,family_name:this.register.family_name,username:this.register.username,role:"User",email:this.register.email,password:this.register.password,country:this.register.country,town:this.register.town,street:this.register.street}).then((function(t){setTimeout((function(){e.Login()}),1e3)})).catch((function(t){e.$store.commit("USER_LOADER",!1),e.errorMessages=t}))}}},a=s("KHd+"),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{width:"600",persistent:""},on:{"click:outside":e.close},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[s("v-btn",e._g({staticClass:"text-none",attrs:{dark:"Home"==e.$route.name&&!e.scroller&&e.$vuetify.breakpoint.mdAndUp,text:""}},r),[e._v("\n      Get Started\n    ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),s("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.started(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-card",{attrs:{loading:e.$store.state.Users.loading}},[s("v-toolbar",{attrs:{dense:"",color:"blue darken-2",dark:""}},[s("v-toolbar-title",[e._v("\n          "+e._s(e.title)+"\n        ")])],1),e._v(" "),"Next"==e.status?s("v-card-text",[s("v-text-field",{attrs:{label:"Email Address",rules:[e.rules.validEmail]},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}})],1):e._e(),e._v(" "),"Login"==e.status?s("v-card-text",[s("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.errors,expression:"errors"}],staticClass:"mb-5",attrs:{value:!0,color:"error"}},[e._v("\n          "+e._s(e.errors)+"\n        ")]),e._v(" "),s("p",[e._v("\n          "+e._s(e.register.email)+"\n          "),s("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:e.change_email}},[e._v("\n            Change email address?\n          ")])],1),e._v(" "),s("v-text-field",{attrs:{label:"password",rules:[e.rules.required],"append-icon":e.passw?"mdi-eye":"mdi-eye-off",type:e.passw?"text":"password"},on:{"click:append":function(t){e.passw=!e.passw}},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}}),e._v(" "),s("a",{attrs:{href:"/reset-password"}},[e._v(" Reset Password ")])],1):e._e(),e._v(" "),"Register"==e.status?s("v-card-text",[e._l(e.errorMessages.errors,(function(t){return s("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.errorMessages,expression:"errorMessages"}],key:t,staticClass:"mb-5",attrs:{value:!0,color:"error"}},[e._v("\n          "+e._s(t[0])+"\n        ")])})),e._v(" "),s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"First Name",rules:[e.rules.required]},model:{value:e.register.first_name,callback:function(t){e.$set(e.register,"first_name",t)},expression:"register.first_name"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Family Name",rules:[e.rules.required]},model:{value:e.register.family_name,callback:function(t){e.$set(e.register,"family_name",t)},expression:"register.family_name"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Username",rules:[e.rules.required]},model:{value:e.register.username,callback:function(t){e.$set(e.register,"username",t)},expression:"register.username"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Email",rules:[e.rules.validEmail]},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-subheader",{staticClass:"headline"},[e._v(" Address ")])],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{items:e.country,label:"Country"},model:{value:e.register.country,callback:function(t){e.$set(e.register,"country",t)},expression:"register.country"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-select",{attrs:{items:e.$store.state.town,label:"Emirate"},model:{value:e.register.town,callback:function(t){e.$set(e.register,"town",t)},expression:"register.town"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Street",rules:[e.rules.required]},model:{value:e.register.street,callback:function(t){e.$set(e.register,"street",t)},expression:"register.street"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Password","append-icon":e.passw?"mdi-eye":"mdi-eye-off",type:e.passw?"text":"password",rules:[e.rules.required,e.rules.min]},on:{"click:append":function(t){e.passw=!e.passw}},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Confirm Password","append-icon":e.passw?"mdi-eye":"mdi-eye-off",type:e.passw?"text":"password",rules:[e.rules.required,e.rules.min]},on:{"click:append":function(t){e.passw=!e.passw}},model:{value:e.register.confirmPassword,callback:function(t){e.$set(e.register,"confirmPassword",t)},expression:"register.confirmPassword"}})],1)],1)],1)],2):e._e(),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{staticClass:"primary text-none",attrs:{type:"submit",disabled:!e.valid}},[e._v("\n          "+e._s(e.status)+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);