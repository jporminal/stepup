(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{"/RHp":function(e,t,l){"use strict";l.r(t);var n={name:"terms-and-conditions-products",data:function(){return{min_date:(new Date).toJSON().slice(0,10),rules:{required:function(e){return!!e||"required field"},email:function(e){return/.+@.+/.test(e)||"E-mail must be valid"}},valid:!1,item_combos:["Yes","No"],medications:"Yes",details:"",open:!1,headers:[{text:"TIMINGS",value:"timings"},{text:"DAILY",value:"daily"},{text:"FULL CAMP",value:"full"}],tcs_camps:"\n\n            <center>\n            <h3><u>TERMS & CONDITIONS</u></h3>\n            I waive that any program such as Winter workshops/ Multi-Skills Camp and its affiliated programs which involve movement and motion can result in physical injury. I permit my child to participate in the above-mentioned selected program and StepUp Academy, its owners, employees, instructors and staff from all liability for injury to my child from his/her participation in this program. Furthermore, I agree to allow StepUp Academy to use the name and likeness in photographs and/or video of my child for advertising and promotional purposes without compensation and without prior notification.\n            <br><br>\n            I am aware that there are live CCTV recordings going on, however they are not available to view unless there is a situation which occurs, where the CCTV will be reviewed. Showing of the CCTV footage to myself will only be possible should I go through the correct authorities.\n            </center>"}},created:function(){this.$store.commit("ENROLLMENT",{location:"Motor City",children:[{first_name:null,family_name:null,nationality:null,age:0,gender:"Female",dob:null,dob_open:!1,medical_status:!0,medical_history:null}],mother:{first_name:null,family_name:null,nationality:null,home_number:null,mobile_number:null,work_number:null,company:null,email:null},father:{first_name:null,family_name:null,nationality:null,home_number:null,mobile_number:null,work_number:null,company:null,email:null},address:{development:null,street:null,building:null,landmark:null,POBox:null,emirate:null,same:!0},medical:{allergies:!1,textallergies:null,respiratory:!1,textrespiratory:null,physical:!1,textphysical:null,vision:!1,textvision:null,hearing:!1,texthearing:null,otherhealth:!1,textotherhealth:null},prescription:{antiseptic:!0,textantiseptic:null,plasters:!0,textplasters:null,insectbite:!0,textinsectbite:null,firstaid:!0,textfirstaid:null,calpol:!0,textcalpol:null,ice:!0,textice:null},emergency:{person_1:{first_name:null,family_name:null,contact_1:null,contact_2:null,contact_3:null,relation:null},person_2:{first_name:null,family_name:null,contact_1:null,contact_2:null,contact_3:null,relation:null}}})},methods:{add:function(){this.$store.state.Enrollments.enrollment.children.push({first_name:null,family_name:null,nationality:null,age:0,gender:"Female",dob:null,dob_open:!1,medical_status:!0,medical_history:null}),this.$store.commit("ENROLLMENT",this.$store.state.Enrollments.enrollment)},save:function(){var e=this;this.$store.dispatch("ENROLLMENT",{form:this.$store.state.Enrollments.enrollment}).then((function(t){e.$store.commit("PARENT",t.data.mom),e.$store.commit("CHILD",t.data.children),localStorage.setItem("parent",JSON.stringify(t.data.mom)),localStorage.setItem("children",JSON.stringify(t.data.children)),localStorage.setItem("camp_form",JSON.stringify(e.$store.state.Enrollments.enrollment));e.$store.commit("SNACKBAR",{snackbar:!0,vertical:!0,timeout:2e3,color:"blue lighten-2",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"Thank you for using our online camps form"}),e.$store.commit("ENROLLMENT",{}),e.$store.commit("CART_CAMP_FORM",!1),e.$router.push("/checkout")}))},close:function(){this.$store.commit("CART_CAMP_FORM",!1),this.$store.commit("ENROLLMENT",{})},get_age:function(e){var t=new Date-new Date(e),l=Math.floor(t/315576e5);this.$store.state.Enrollments.enrollment.children.age=l}},computed:{enrollment:function(){var e={child:{dateofbirth:(new Date).toJSON().slice(0,10),age:0,firstname:"",lastname:"",gender:"",nationality:"",is_medicine:"Yes",medical_details:""}};return Object.assign(this.$store.state.EnrollmentForm,e)},cart:function(){return this.$store.state.cart},grand_total:function(){return this.cart.reduce((function(e,t){return e+Number(t.product_option.total_incl)}),0)}}},r=l("KHd+"),s=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-dialog",{attrs:{width:"1000px",persistent:""},on:{"click:outside":e.close},model:{value:e.$store.state.Carts.camps,callback:function(t){e.$set(e.$store.state.Carts,"camps",t)},expression:"$store.state.Carts.camps"}},[l("v-card",[l("v-toolbar",{attrs:{color:"blue lighten-2",dark:"",flat:""}},[l("v-row",[l("v-col",{staticClass:"d-flex justify-space-around"},[l("v-toolbar-title",[l("p",{staticClass:"title"},[e._v("REGISTRATION FORM")])])],1)],1)],1),e._v(" "),l("p",{staticClass:"text-h6 text-center mt-2"},[e._v("\n      Summer Camp "),l("br"),e._v("\n      (11"),l("sup",[e._v("th")]),e._v(" July – 26"),l("sup",[e._v("th")]),e._v(" August 2022)\n    ")]),e._v(" "),l("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[l("v-card",{attrs:{flat:""}},[l("v-card-text",[e._l(e.$store.state.Enrollments.enrollment.children,(function(t,n){return[l("div",{key:n},[l("v-subheader",{staticClass:"title"},[e._v("\n                Student "+e._s(n+1)+" Details\n              ")]),e._v(" "),l("v-row",{attrs:{align:"center",justify:"center"}},[l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"First Name",rules:[e.rules.required]},model:{value:t.first_name,callback:function(l){e.$set(t,"first_name",l)},expression:"item.first_name"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Family Name",rules:[e.rules.required]},model:{value:t.family_name,callback:function(l){e.$set(t,"family_name",l)},expression:"item.family_name"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Age",value:null==t.dob?0:e.$age(t.dob),readonly:""}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,s=n.attrs;return[l("v-text-field",e._g(e._b({attrs:{label:"Date of Birth","prepend-icon":"mdi-event",readonly:"",rules:[function(e){return!!e||"Date of birth is required"}]},model:{value:t.dob,callback:function(l){e.$set(t,"dob",l)},expression:"item.dob"}},"v-text-field",s,!1),r))]}}],null,!0),model:{value:t.dob_open,callback:function(l){e.$set(t,"dob_open",l)},expression:"item.dob_open"}},[e._v(" "),l("v-date-picker",{attrs:{max:e.min_date},on:{input:function(e){t.dob_open=!1},change:e.get_age},model:{value:t.dob,callback:function(l){e.$set(t,"dob",l)},expression:"item.dob"}})],1)],1)],1),e._v(" "),l("v-subheader",{staticClass:"title"},[e._v("\n                Any medical condition?\n              ")]),e._v(" "),l("v-row",{attrs:{align:"center",justify:"center"}},[l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-combobox",{attrs:{items:e.item_combos,rules:[e.rules.required]},model:{value:t.medical_status,callback:function(l){e.$set(t,"medical_status",l)},expression:"item.medical_status"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"details",disabled:"No"==t.medical_status},model:{value:t.medical_history,callback:function(l){e.$set(t,"medical_history",l)},expression:"item.medical_history"}})],1)],1)],1)]})),e._v(" "),l("div",{staticClass:"text-right"},[l("v-btn",{staticClass:"text-none success",on:{click:e.add}},[e._v(" Add Child")])],1),e._v(" "),l("v-subheader",{staticClass:"title"},[e._v(" Mum's Details ")]),e._v(" "),l("v-row",{attrs:{align:"center",justify:"center"}},[l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"First Name",rules:[e.rules.required]},model:{value:e.$store.state.Enrollments.enrollment.mother.first_name,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.mother,"first_name",t)},expression:"\n                  $store.state.Enrollments.enrollment.mother.first_name\n                "}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Family Name",rules:[e.rules.required]},model:{value:e.$store.state.Enrollments.enrollment.mother.family_name,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.mother,"family_name",t)},expression:"\n                  $store.state.Enrollments.enrollment.mother.family_name\n                "}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Email Address",rules:[e.rules.email]},model:{value:e.$store.state.Enrollments.enrollment.mother.email,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.mother,"email",t)},expression:"$store.state.Enrollments.enrollment.mother.email"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Contact Number",rules:[e.rules.required],type:"number"},model:{value:e.$store.state.Enrollments.enrollment.mother.home_number,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.mother,"home_number",t)},expression:"\n                  $store.state.Enrollments.enrollment.mother.home_number\n                "}})],1)],1),e._v(" "),l("v-subheader",{staticClass:"title"},[e._v(" Dad's Details ")]),e._v(" "),l("v-row",{attrs:{align:"center",justify:"center"}},[l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"First Name",rules:[e.rules.required]},model:{value:e.$store.state.Enrollments.enrollment.father.first_name,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.father,"first_name",t)},expression:"\n                  $store.state.Enrollments.enrollment.father.first_name\n                "}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Family Name",rules:[e.rules.required]},model:{value:e.$store.state.Enrollments.enrollment.father.family_name,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.father,"family_name",t)},expression:"\n                  $store.state.Enrollments.enrollment.father.family_name\n                "}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Email Address",rules:[e.rules.email]},model:{value:e.$store.state.Enrollments.enrollment.father.email,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.father,"email",t)},expression:"$store.state.Enrollments.enrollment.father.email"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Contact Number",rules:[e.rules.required],type:"number"},model:{value:e.$store.state.Enrollments.enrollment.father.home_number,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.father,"home_number",t)},expression:"\n                  $store.state.Enrollments.enrollment.father.home_number\n                "}})],1)],1),e._v(" "),l("v-subheader",{staticClass:"title"},[e._v(" Emergency Contact ")]),e._v(" "),l("v-row",{attrs:{align:"center",justify:"center"}},[l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"First Name"},model:{value:e.$store.state.Enrollments.enrollment.emergency.person_1.first_name,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.emergency.person_1,"first_name",t)},expression:"\n                  $store.state.Enrollments.enrollment.emergency.person_1\n                    .first_name\n                "}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Family Name"},model:{value:e.$store.state.Enrollments.enrollment.emergency.person_1.family_name,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.emergency.person_1,"family_name",t)},expression:"\n                  $store.state.Enrollments.enrollment.emergency.person_1\n                    .family_name\n                "}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Contact Number",type:"number"},model:{value:e.$store.state.Enrollments.enrollment.emergency.person_1.contact_1,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.emergency.person_1,"contact_1",t)},expression:"\n                  $store.state.Enrollments.enrollment.emergency.person_1\n                    .contact_1\n                "}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"5"}},[l("v-text-field",{attrs:{label:"Relationship"},model:{value:e.$store.state.Enrollments.enrollment.emergency.person_1.relation,callback:function(t){e.$set(e.$store.state.Enrollments.enrollment.emergency.person_1,"relation",t)},expression:"\n                  $store.state.Enrollments.enrollment.emergency.person_1\n                    .relation\n                "}})],1)],1)],2)],1),e._v(" "),l("v-card-actions",[l("v-spacer"),e._v(" "),l("v-btn",{staticClass:"success",attrs:{disabled:!e.valid},on:{click:e.save}},[e._v("\n          I Agree\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);