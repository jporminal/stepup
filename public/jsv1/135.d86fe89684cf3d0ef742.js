(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{V1zA:function(t,e,n){"use strict";n.r(e);var r={name:"trial-form",components:{terms:function(){return n.e(9).then(n.bind(null,"Acsr"))},cov:function(){return n.e(8).then(n.bind(null,"RnF9"))}},data:function(){return{valid:!1,loading:!1,item_combos:["Yes","No"],genders:["Male","Female"]}},methods:{input_text:function(){this.$store.commit("ENROLLMENT",this.$store.state.Enrollments.enrollment)},save:function(){var t=this;this.loading=!0,this.$store.dispatch("ENROLLMENT",{form:this.$store.state.Enrollments.enrollment}).then((function(e){t.$store.commit("SNACKBAR",{snackbar:!0,vertical:!0,timeout:2e3,color:"blue lighten-2",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"Thank you for using our online enrollment"}),setTimeout((function(){window.location.reload()}),1e4)})).catch((function(e){t.$store.commit("SNACKBAR",{snackbar:!0,vertical:!1,timeout:2e3,color:"red",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"Sorry, We have encounter network error. Please try to reload your browser. Thank you :)"})}))},terms_condition:function(){this.$store.commit("TERMS_CONDITIONS_OPEN",!0)},covid:function(){this.$store.commit("COVID_OPEN",!0)},send_mail_to_parent:function(t){Email.send({SecureToken:"29491cb9-4953-44f4-ac2e-8292c80452c8",To:this.$store.state.Enrollments.enrollment.mother.email,From:"info@stepup.ae",Subject:"Trial Form",Body:'\n                    <div style="margin: 0; padding: 0;">\n                        <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">\n                            <tr>\n                                <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">\n                                    <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />\n                                    <h1 style="color:#000">StepUp Academy</h1>\n                                    <h3>Trial Form</h3>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">\n                                    <br><br>\n                                    Dear '.concat(this.$store.state.Enrollments.enrollment.mother.first_name,",\n                                    <br><br>\n                                    ").concat(t?"Thank you for using our online enrollment form. We have create your login credentials on our website. Please use your registered email address and your new password ".concat(t):"Thank you for enrolling your child at StepUp Academy!",'\n                                </td>\n                            </tr>\n                            <tr>\n                                <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">\n                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">\n                                        <tr>\n                                            <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">\n                                                &copy; StepUp Academy<br/>\n                                                <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;">\n                                                <font color="#000">info@stepup.ae</font></a>\n                                            </td>\n                                            <td align="right">\n                                                <table border="0" cellpadding="0" cellspacing="0">\n                                                    <tr>\n                                                        <td>\n                                                            <a href="https://www.instagram.com/step_up_academy/" target="_blank">\n                                                                <img src="https://stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" />\n                                                            </a>\n                                                        </td>\n                                                        <td>\n                                                            <a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank">\n                                                                <img src="https://stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" />\n                                                            </a>\n                                                        </td>\n                                                    </tr>\n                                                </table>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                    ')})},send_mail_to_reception:function(){var t=this;this.$store.state.Enrollments.enrollment.children.forEach((function(e){e.first_name&&Email.send({SecureToken:"29491cb9-4953-44f4-ac2e-8292c80452c8",To:"info@stepup.ae",From:t.$store.state.Enrollments.enrollment.mother.email,Bcc:"xero@stepup.ae",Subject:"Trial Form - ".concat(e.first_name," ").concat(e.family_name),Body:'\n                        <div style="margin: 0; padding: 0;">\n                            <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">\n                                <tr>\n                                    <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">\n                                        <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />\n                                        <h1 style="color:#000">StepUp Academy</h1>\n                                        <h3>Trial Form</h3>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">\n                                        <h4 align="center"> Children Information</h4>\n                                        <table border="1" cellpadding="0" cellspacing="0" width="100%" >\n                                            <tr>\n                                                <td width="20%">Name</td>\n                                                <td> '.concat(e.first_name," ").concat(e.family_name," </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Date of Birth</td>\n                                                <td> ").concat(e.dob," </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Gender</td>\n                                                <td> ").concat(e.gender,' </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td bgcolor="#fff" style="padding: 0px 30px 0px 30px;">\n                                        <h4 align="center"> Parent Information</h4>\n                                        <h5>Mother Info</h5>\n                                        <table border="1" cellpadding="0" cellspacing="0" width="100%" >\n                                            <tr>\n                                                <td width="20%">Name</td>\n                                                <td> ').concat(t.$store.state.Enrollments.enrollment.mother.first_name," ").concat(t.$store.state.Enrollments.enrollment.mother.family_name," </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Email Address</td>\n                                                <td> ").concat(t.$store.state.Enrollments.enrollment.mother.email," </td>\n                                                <td>Home Number</td>\n                                                <td> ").concat(t.$store.state.Enrollments.enrollment.mother.home_number,' </td>\n                                            </tr>\n                                        </table>\n                                        <h5>Father Info</h5>\n                                        <table border="1" cellpadding="0" cellspacing="0" width="100%" >\n                                            <tr>\n                                                <td width="20%">Name</td>\n                                                <td> ').concat(t.$store.state.Enrollments.enrollment.father.first_name," ").concat(t.$store.state.Enrollments.enrollment.father.family_name," </td>\n                                            </tr>\n                                            <tr>\n                                                <td>Email Address</td>\n                                                <td> ").concat(t.$store.state.Enrollments.enrollment.father.email," </td>\n                                                <td>Home Number</td>\n                                                <td> ").concat(t.$store.state.Enrollments.enrollment.father.home_number,' </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td bgcolor="#fff" style="padding: 0px 30px 0px 30px;">\n                                        <table border="1" cellpadding="0" cellspacing="0" width="100%" >\n                                            <tr>\n                                                <td width="20%">Medical History</td>\n                                                <td> ').concat(e.medical_history,'</td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">\n                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">\n                                            <tr>\n                                                <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">\n                                                    &copy; StepUp Academy<br/>\n                                                    <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;">\n                                                    <font color="#000">info@stepup.ae</font></a>\n                                                </td>\n                                                <td align="right">\n                                                    <table border="0" cellpadding="0" cellspacing="0">\n                                                        <tr>\n                                                            <td>\n                                                                <a href="https://www.instagram.com/step_up_academy/" target="_blank">\n                                                                    <img src="https://stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" />\n                                                                </a>\n                                                            </td>\n                                                            <td>\n                                                                <a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank">\n                                                                    <img src="https://stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" />\n                                                                </a>\n                                                            </td>\n                                                        </tr>\n                                                    </table>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                        ')})}))}}},l=n("KHd+"),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"blue lighten-2",dark:"",flat:""}},[n("v-row",[n("v-col",{staticClass:"d-flex justify-space-around"},[n("v-toolbar-title",[n("p",{staticClass:"title"},[t._v("TRIAL FORM")])])],1)],1)],1),t._v(" "),n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._l(t.$store.state.Enrollments.enrollment.children,(function(e,r){return[n("div",{key:r},[n("v-subheader",{staticClass:"title"},[t._v("\n                Child's Details\n            ")]),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"First Name",rules:[function(t){return!!t||"First name is required"}],"append-icon":"*"},on:{input:t.input_text},model:{value:e.first_name,callback:function(n){t.$set(e,"first_name",n)},expression:"item.first_name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"Family Name",rules:[function(t){return!!t||"Family name is required"}],"append-icon":"*"},on:{input:t.input_text},model:{value:e.family_name,callback:function(n){t.$set(e,"family_name",n)},expression:"item.family_name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-select",{attrs:{label:"Gender",items:t.genders},on:{input:t.input_text},model:{value:e.gender,callback:function(n){t.$set(e,"gender",n)},expression:"item.gender"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,o=r.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Date of Birth","prepend-icon":"mdi-event",readonly:"","append-icon":"*"},model:{value:e.dob,callback:function(n){t.$set(e,"dob",n)},expression:"item.dob"}},"v-text-field",o,!1),l))]}}],null,!0),model:{value:e.dob_open,callback:function(n){t.$set(e,"dob_open",n)},expression:"item.dob_open"}},[t._v(" "),n("v-date-picker",{attrs:{max:(new Date).toISOString().substr(0,10)},on:{input:function(t){e.dob_open=!1}},model:{value:e.dob,callback:function(n){t.$set(e,"dob",n)},expression:"item.dob"}})],1)],1)],1),t._v(" "),n("v-subheader",{staticClass:"title"},[t._v("\n              Any medical condition?\n            ")]),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-combobox",{attrs:{items:t.item_combos},model:{value:e.medical_status,callback:function(n){t.$set(e,"medical_status",n)},expression:"item.medical_status"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"details",disabled:"No"==e.medical_status},model:{value:e.medical_history,callback:function(n){t.$set(e,"medical_history",n)},expression:"item.medical_history"}})],1)],1)],1)]})),t._v(" "),n("v-subheader",{staticClass:"title"},[t._v(" Mum's Details ")]),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"First Name",rules:[function(t){return!!t||"Mum's first name is required"}],"append-icon":"*"},model:{value:t.$store.state.Enrollments.enrollment.mother.first_name,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment.mother,"first_name",e)},expression:"\n                $store.state.Enrollments.enrollment.mother.first_name\n              "}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"Family Name",rules:[function(t){return!!t||"Mum's family name is required"}],"append-icon":"*"},model:{value:t.$store.state.Enrollments.enrollment.mother.family_name,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment.mother,"family_name",e)},expression:"\n                $store.state.Enrollments.enrollment.mother.family_name\n              "}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"Email Address",rules:[function(t){return/.+@.+/.test(t)||"Incorrect email address"}],"append-icon":"*"},model:{value:t.$store.state.Enrollments.enrollment.mother.email,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment.mother,"email",e)},expression:"$store.state.Enrollments.enrollment.mother.email"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"Contact Number",type:"number",rules:[function(t){return!!t||"Contact Number is required"},function(t){return t.length>9||"Number must not less than 10 digits"},function(t){return t.length<11||"Number must not more than 10 digits"}],hint:"05XXXXXXXX","persistent-hint":"","append-icon":"*"},model:{value:t.$store.state.Enrollments.enrollment.mother.home_number,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment.mother,"home_number",e)},expression:"\n                $store.state.Enrollments.enrollment.mother.home_number\n              "}})],1)],1),t._v(" "),n("v-subheader",{staticClass:"title"},[t._v(" Dad's Details ")]),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"First Name",rules:[function(t){return!!t||"Dad's first name is required"}],"append-icon":"*"},model:{value:t.$store.state.Enrollments.enrollment.father.first_name,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment.father,"first_name",e)},expression:"\n                $store.state.Enrollments.enrollment.father.first_name\n              "}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"Family Name",rules:[function(t){return!!t||"Dad's first name is required"}],"append-icon":"*"},model:{value:t.$store.state.Enrollments.enrollment.father.family_name,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment.father,"family_name",e)},expression:"\n                $store.state.Enrollments.enrollment.father.family_name\n              "}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"Email Address",rules:[function(t){return/.+@.+/.test(t)||"Incorrect email address"}],"append-icon":"*"},model:{value:t.$store.state.Enrollments.enrollment.father.email,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment.father,"email",e)},expression:"$store.state.Enrollments.enrollment.father.email"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{label:"Contact Number",type:"number",rules:[function(t){return!!t||"Contact Number is required"},function(t){return t.length>9||"Number must not less than 10 digits"},function(t){return t.length<11||"Number must not more than 10 digits"}],hint:"05XXXXXXXX","persistent-hint":"","append-icon":"*"},model:{value:t.$store.state.Enrollments.enrollment.father.home_number,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment.father,"home_number",e)},expression:"\n                $store.state.Enrollments.enrollment.father.home_number\n              "}})],1)],1)],2),t._v(" "),n("v-card-text",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("\n            I agree to fulfil the obligations set forth to StepUp Academy\n            and will ensure all school terms in which I/my child attends are\n            accounted for\n          ")]),t._v(" "),n("v-checkbox",{staticClass:"my-0",scopedSlots:t._u([{key:"label",fn:function(){return[n("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:t.terms_condition}},[t._v("\n                Terms & Conditions\n              ")])]},proxy:!0}]),model:{value:t.$store.state.Enrollments.terms_condition,callback:function(e){t.$set(t.$store.state.Enrollments,"terms_condition",e)},expression:"$store.state.Enrollments.terms_condition"}}),t._v(" "),n("v-checkbox",{staticClass:"my-0",scopedSlots:t._u([{key:"label",fn:function(){return[n("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:t.covid}},[t._v("\n                Covid-19\n              ")])]},proxy:!0}]),model:{value:t.$store.state.Enrollments.covid,callback:function(e){t.$set(t.$store.state.Enrollments,"covid",e)},expression:"$store.state.Enrollments.covid"}})],1)],1)],1)],1),t._v(" "),n("terms"),t._v(" "),n("cov"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"success",attrs:{disabled:!t.valid||!t.$store.state.Enrollments.terms_condition||!t.$store.state.Enrollments.covid,loading:t.loading},on:{click:t.save}},[t._v("\n        Send Form\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);