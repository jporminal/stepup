(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{VtkZ:function(t,e,s){"use strict";s.r(e);var a={name:"class-information-view",methods:{print:function(){window.print()},excel:function(){this.$excel("excel","Number of students")}},computed:{total_students:function(){return this.$store.state.Reports.number_of_students.reduce((function(t,e){return t+e.number_of_student}),0)}}},i=s("KHd+"),v=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$store.state.Reports.number_of_students.length>0?s("v-card",{attrs:{flat:""}},[s("v-card-actions",{staticClass:"d-print-none"},[s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"text-none",attrs:{small:""},on:{click:t.excel}},[s("v-icon",[t._v("mdi-microsoft-excel")]),t._v(" Excel")],1),t._v(" "),s("v-btn",{staticClass:"text-none",attrs:{small:""},on:{click:t.print}},[s("v-icon",[t._v("mdi-printer")]),t._v(" Print")],1)],1),t._v(" "),s("v-card-text",[s("div",{staticClass:"text-center"},[s("v-avatar",{attrs:{tile:"",size:"250"}},[s("img",{attrs:{src:"/img/logoStepUp.png"}})])],1),t._v(" "),s("p",{staticClass:"text-h5 font-weight-bold text-center"},[t._v("Number of Students")])]),t._v(" "),s("v-card-text",[s("div",[s("v-list",{attrs:{shaped:""}},[s("v-list-item",[s("v-list-item-avatar",{attrs:{width:"25%"}},[t._v(" Location ")]),t._v(" "),s("v-list-item-avatar",{attrs:{width:"25%"}},[t._v(" Lesson ")]),t._v(" "),s("v-list-item-avatar",{attrs:{width:"10%"}},[t._v(" Day ")]),t._v(" "),s("v-list-item-avatar",{attrs:{width:"15%"}},[t._v(" Time ")]),t._v(" "),s("v-list-item-avatar",{attrs:{width:"15%"}},[t._v(" Teacher ")]),t._v(" "),s("v-list-item-avatar",{attrs:{width:"10%"}},[t._v(" Total ")])],1),t._v(" "),s("v-divider"),t._v(" "),t._l(t.$store.state.Reports.number_of_students,(function(e,a){return[s("div",{key:a},[s("v-list-item",[s("v-list-item-avatar",{attrs:{tile:"",width:"25%"}},[t._v("\n                "+t._s(e.location)+"\n              ")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"25%"}},[t._v("\n                "+t._s(e.lesson)+"\n              ")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"10%"}},[t._v("\n                "+t._s(e.day)+"\n              ")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n                "+t._s(e.time)+"\n              ")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n                "+t._s(e.teacher)+"\n              ")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"10%"}},[t._v("\n                "+t._s(e.number_of_student)+"\n              ")])],1),t._v(" "),s("v-divider")],1)]})),t._v(" "),s("v-list-item",[s("v-list-item-avatar",{attrs:{tile:"",width:"25%"}}),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"25%"}}),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"10%"}}),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"15%"}}),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("Total")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"10%"}},[s("p",{staticClass:"text-h5 font-weight-bold red--text"},[t._v("\n              "+t._s(t.total_students)+"\n            ")])])],1)],2)],1),t._v(" "),s("div",{staticClass:"d-none",attrs:{id:"excel"}},[s("table",[s("tr",[s("th",[t._v("Location")]),t._v(" "),s("th",[t._v("Lesson")]),t._v(" "),s("th",[t._v("Day")]),t._v(" "),s("th",[t._v("Time")]),t._v(" "),s("th",[t._v("Teacher")]),t._v(" "),s("th",[t._v("Total")])]),t._v(" "),t._l(t.$store.state.Reports.number_of_students,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.location))]),t._v(" "),s("td",[t._v(t._s(e.lesson))]),t._v(" "),s("td",[t._v(t._s(e.day))]),t._v(" "),s("td",[t._v(t._s(e.time))]),t._v(" "),s("td",[t._v(t._s(e.teacher))]),t._v(" "),s("td",[t._v(t._s(e.number_of_student))])])})),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Total Students")]),t._v(" "),s("td",[s("p",{staticClass:"font-weight-bold red--text"},[t._v(t._s(t.total_students))])])])],2)])]),t._v(" "),s("div",{staticStyle:{"page-break-after":"always"}})],1):t._e()}),[],!1,null,null,null);e.default=v.exports}}]);