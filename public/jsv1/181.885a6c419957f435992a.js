(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{m0cf:function(e,t,s){"use strict";s.r(t);var i={name:"authenticaed",data:function(){return{items:[{title:"Schedules",icon:"mdi-calendar",path:"/sams-schedule",access:["Admin","Reception","Manager","Accounts","Teacher","Kups","PA"],isGroups:!1},{title:"Customer",icon:"mdi-account-group",path:"#",access:["Admin","Reception","Manager","PA"],isGroups:!0,groups:[{title:"Students",icon:"",path:"/sams-students",access:["Admin","Manager","Reception","PA"],isdivide:!1},{title:"Parents",icon:"",path:"/sams-parents",access:["Admin","Manager","Reception","PA"],isdivide:!1}]},{title:"Staffs",icon:"mdi-account-network",path:"/sams-staff",access:["Admin","Reception","Manager"],isGroups:!1},{title:"Attendance",icon:"mdi-notebook-multiple",path:"/sams-attendance",access:["Admin","Reception","Manager","Teacher","PA"],isGroups:!1},{title:"Download Attendance",icon:"mdi-notebook-outline",path:"/sams-attendance-download",access:["Admin","Reception","Manager","PA"],isGroups:!1},{title:"Email Parents",icon:"mdi-email",path:"/sams-send-email",access:["Admin","Reception","Manager"],isGroups:!1},{title:"Reports",icon:"mdi-file-eye",path:"#",access:["Admin","Manager","Kups","Teacher","PA","Reception"],isGroups:!0,groups:[{title:"Class Information",icon:"",path:"/sams-reports-class-infomation",access:["Admin","Manager","Kups","Teacher","PA","Reception"],isdivide:!1},{title:"Number of Students",icon:"",path:"/sams-reports-number-of-students",access:["Admin","Manager","Kups","PA","Reception"],isdivide:!1},{title:"Payment by Schedules",icon:"",path:"/sams-reports-payment-by-schedules",access:["Admin","Manager","Kups","PA","Reception"],isdivide:!1},{title:"Payment by Lesson",icon:"",path:"/sams-reports-payment-by-lesson",access:["Admin","Manager","Kups","PA"],isdivide:!1},{title:"Product Sales",icon:"",path:"/sams-reports-payment-by-product-sales",access:["Admin","Manager","Kups","PA"],isdivide:!1},{title:"Product Reports",icon:"",path:"/sams-product-reports",access:["Admin","Manager","Kups","PA"],isdivide:!1},{title:"Service Reports",icon:"",path:"/sams-service-reports",access:["Admin","Manager","Kups","PA"],isdivide:!1},{title:"Location Reports",icon:"",path:"/sams-location-reports",access:["Admin","Manager","Kups","PA"],isdivide:!1},{title:"Other Services Reports",icon:"",path:"/sams-other-services-reports",access:["Admin","Manager","Kups","PA"],isdivide:!1}]},{title:"Receipts",icon:"mdi-receipt",path:"/sams-receipts",access:["Admin","Reception","Manager"],isGroups:!1},{title:"Settings",icon:"mdi-cog",path:"#",access:["Admin","Reception","Manager","PA"],isGroups:!0,groups:[{title:"Schedules",icon:"",path:"/sams-schedules",access:["Admin","Manager","Reception","PA"],isdivide:!1},{title:"Lessons",icon:"",path:"/sams-lessons",access:["Admin","Manager","Reception","PA"],isdivide:!1},{title:"Locations",icon:"",path:"/sams-locations",access:["Admin","Manager","Reception","PA"],isdivide:!1},{title:"Date Ranges",icon:"",path:"/sams-date-ranges",access:["Admin","Manager","Reception","PA"],isdivide:!1},{title:"Weekdays",icon:"",path:"/sams-week-days",access:["Admin","Manager","Reception","PA"],isdivide:!1},{title:"Store Setup",icon:"",path:"/sams-store-setup",access:["Admin"],isdivide:!1},{title:"Xero",icon:"",path:"/sams-xero",access:["Admin"],isdivide:!1}]},{title:"Logout",icon:"mdi-logout",path:"/logout",access:["Admin","Reception","Manager","Accounts","Teacher","Kups","PA"],isGroups:!1}]}},methods:{in_array:function(e,t){for(var s=!1,i=0;i<t.length;i++){if(t[i]==e){s=!0;break}}return s}}},a=s("KHd+"),n=Object(a.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"d-print-none",attrs:{cols:"12",md:"3"}},[s("v-card",{staticClass:"mx-auto",attrs:{height:"100%",flat:""}},[s("v-navigation-drawer",{attrs:{permanent:""}},[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[e._v("\n                My Account\n              ")])],1)],1),e._v(" "),s("v-divider"),e._v(" "),s("v-list",{attrs:{dense:"",nav:""}},[e._l(e.items,(function(t){return[e.in_array(e.$store.state.Users.current_user.Role,t.access)?[t.isGroups?s("v-list-group",{key:t.title,attrs:{"no-action":"","prepend-icon":t.icon},scopedSlots:e._u([{key:"activator",fn:function(){return[s("v-list-item",[s("v-list-item-title",[e._v("\n                        "+e._s(t.title)+"\n                      ")])],1)]},proxy:!0}],null,!0)},[e._v(" "),e._l(t.groups,(function(t,i){return[e.in_array(e.$store.state.Users.current_user.Role,t.access)?[s("v-list-item",{key:i,attrs:{to:t.path}},[s("v-list-item-title",[e._v("\n                          "+e._s(t.title)+"\n                        ")]),e._v(" "),s("v-list-item-action",[s("v-icon",[e._v("\n                            "+e._s(t.icon)+"\n                          ")])],1)],1)]:e._e(),e._v(" "),t.isdivide?s("v-divider",{key:t.title}):e._e()]}))],2):s("v-list-item",{key:t.title,attrs:{to:t.path}},[s("v-list-item-action",[s("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(t.title))])],1)],1)]:e._e()]}))],2)],1)],1)],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"8"}},[s("router-view")],1)],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);