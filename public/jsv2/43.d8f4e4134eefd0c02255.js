(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{f8A2:function(t,e,s){"use strict";s.r(e);var a=s("PzgC"),n={name:"email-view",components:{TiptapVuetify:a.p},data:function(){return{is_sending:!1,subject:null,body:"",count:0,success:!1,extensions:[a.g,a.a,a.k,a.r,a.o,a.j,a.l,a.c,a.m,[a.f,{options:{levels:[1,2,3]}}],a.b,a.d,a.h,a.n,a.e,a.i]}},watch:{count:function(){var t=this;this.count==this.$store.state.Emails.email_filtered.length&&(this.success=!0,this.remove(),this.subject=null,this.body="",setTimeout((function(){t.is_sending=!1,t.success=!1}),5e3))}},methods:{remove:function(){this.$store.commit("EMAIL_FILTERED",[])},send:function(){this.email_template(this.$store.state.Emails.email_filtered),this.is_sending=!0},email_template:function(t){for(var e=this,s=0;s<t.length;s++)Email.send({SecureToken:"29491cb9-4953-44f4-ac2e-8292c80452c8",To:t[s],From:"info@stepup.ae",Bcc:"vincent@stepup.ae",Subject:this.subject,Body:'<div style="margin: 0; padding: 0;">\n                    <table align="center" border="1" cellpadding="0" cellspacing="0" width="600">\n                        <tr>\n                            <td align="center" bgcolor="#fff" style="padding: 20px 0 0 0;">\n                                <img src="https://stepup.ae/img/logoStepUp.png" alt="StepUp Academy" width="130" height="100" style="display: block;" />\n                                <h1 style="color:#000">StepUp Academy</h1>\n                                <h3>StepUp Academy</h3>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td bgcolor="#fff" style="padding: 40px 30px 40px 30px;">\n                                '.concat(this.body,'\n                            </td>\n                        </tr>\n                        <tr>\n                            <td bgcolor="#49a0d9 " style="padding: 30px 30px 30px 30px;">\n                                <table border="0" cellpadding="0" cellspacing="0" width="100%">\n                                    <tr>\n                                        <td width="75%" style="color: #fff; font-family: Arial, sans-serif; font-size: 14px;">&copy; StepUp Academy<br/> <a href="mailto:info@stepup.ae" style="color: #fff; text-decoration: none;"><font color="#000">info@stepup.ae</font></a></td>\n                                        <td align="right">\n                                            <table border="0" cellpadding="0" cellspacing="0">\n                                                <tr>\n                                                    <td><a href="https://www.instagram.com/step_up_academy/" target="_blank">\n                                                        <img src="https://enrollment.stepup.ae/img/instagram.png" alt="Instagram" width="38" height="38" style="display: block;" border="0" /></a></td><td><a href="https://www.facebook.com/StepUp-Academy-208684865876848/" target="_blank"><img src="https://enrollment.stepup.ae/img/facebook.png" alt="Facebook" width="38" height="38" style="display: block;" border="0" /></a>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </td>\n                        </tr>\n                    </table>\n                </div>')}).then((function(t){e.count=s}))}}},l=s("KHd+"),i=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mt-2"},[s("v-card-text",[s("label",{attrs:{for:"email"}},[t._v("Email Address")]),t._v(" "),s("v-autocomplete",{staticClass:"overflow-y-auto",attrs:{items:t.$store.state.Emails.email_filtered,height:"100",id:"email",multiple:"","cache-items":"","allow-overflow":!1,flat:"",solo:"","disable-lookup":"",readonly:""},model:{value:t.$store.state.Emails.email_filtered,callback:function(e){t.$set(t.$store.state.Emails,"email_filtered",e)},expression:"$store.state.Emails.email_filtered"}}),t._v(" "),s("p",[t._v("Number of email(s) "+t._s(t.$store.state.Emails.email_filtered.length))]),t._v(" "),s("div",{staticClass:"text-right"},[s("v-btn",{staticClass:"text-none error",attrs:{small:""},on:{click:t.remove}},[t._v("Remove emails")])],1)],1),t._v(" "),t.is_sending?s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"10"}},[t.is_sending?s("v-progress-linear",{attrs:{value:t.count,height:"15","buffer-value":t.$store.state.Emails.email_filtered.length}}):t._e()],1),t._v(" "),s("v-col",{attrs:{cols:"12",md:"2"}},[t.success?s("v-card-text",[s("v-icon",{attrs:{color:"green","x-large":""}},[t._v(" mdi-check-bold ")])],1):t._e()],1)],1)],1):t._e(),t._v(" "),s("v-card-text",[s("v-text-field",{attrs:{label:"Subject"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}})],1),t._v(" "),s("v-card-text",[s("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"text-none primary",attrs:{loading:t.is_sending},on:{click:t.send}},[t._v("Send")])],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);