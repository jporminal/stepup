(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{rpYI:function(t,e,a){"use strict";a.r(e);var i={name:"payment-by-schedules",methods:{print:function(){window.print()},excel:function(){this.$excel("excel","Other Service Reports - ".concat(this.date_title))}},computed:{date_title:function(){return this.$store.state.Reports.other_service_report_filter.dates.join(" ~ ")},total_payment:function(){return this.$store.state.Reports.other_service_reports.other_services.reduce((function(t,e){return t+Number(e.total)}),0)}}},v=a("KHd+"),s=Object(v.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$store.state.Reports.other_service_reports.other_services.length>0?a("v-card",{attrs:{flat:""}},[a("v-card-actions",{staticClass:"d-print-none"},[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"text-none",attrs:{small:""},on:{click:t.excel}},[a("v-icon",[t._v("mdi-microsoft-excel")]),t._v(" Excel")],1),t._v(" "),a("v-btn",{staticClass:"text-none",attrs:{small:""},on:{click:t.print}},[a("v-icon",[t._v("mdi-printer")]),t._v(" Print")],1)],1),t._v(" "),a("v-card-text",[a("div",{staticClass:"text-center"},[a("v-avatar",{attrs:{tile:"",size:"250"}},[a("img",{attrs:{src:"/img/logoStepUp.png"}})])],1),t._v(" "),a("p",{staticClass:"text-h5 font-weight-bold text-center"},[t._v("Other Service Report")]),t._v(" "),a("div",{staticClass:"text-h6 font-weight-bold text-center"},[t._v("\n      Date: "+t._s(t.date_title)+"\n    ")])]),t._v(" "),a("v-card-text",[a("div",[a("v-list",{attrs:{shaped:""}},[a("v-list-item",[a("v-list-item-avatar",{attrs:{width:"5%"}},[t._v(" Invoice ")]),t._v(" "),a("v-list-item-avatar",{attrs:{width:"20%"}},[t._v(" Customer Name ")]),t._v(" "),a("v-list-item-avatar",{attrs:{width:"20%"}},[t._v(" Date ")]),t._v(" "),a("v-list-item-avatar",{attrs:{width:"10%"}},[t._v(" Payment ")]),t._v(" "),a("v-list-item-avatar",{attrs:{width:"25%"}},[t._v(" Title ")]),t._v(" "),a("v-list-item-avatar",{attrs:{width:"20%"}},[t._v(" Option ")]),t._v(" "),a("v-list-item-avatar",{attrs:{width:"10%"}},[t._v(" Total ")])],1),t._v(" "),a("v-divider"),t._v(" "),t._l(t.$store.state.Reports.other_service_reports.other_services,(function(e,i){return[a("div",{key:i},[a("v-list-item",[a("v-list-item-avatar",{attrs:{tile:"",width:"5%"}},[t._v("\n                "+t._s(e.sale_id)+"\n              ")]),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"20%"}},[t._v("\n                "+t._s(e.firstname)+" "+t._s(e.lastname)+"\n              ")]),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"20%"}},[t._v("\n                "+t._s(t._f("date")(e.created_at))+"\n              ")]),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"10%"}},[t._v("\n                "+t._s(e.payment_type)+"\n              ")]),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"25%"}},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"20%"}},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"10%"}},[t._v("\n                "+t._s(e.total)+"\n              ")])],1),t._v(" "),a("v-divider")],1)]})),t._v(" "),a("v-list-item",[a("v-list-item-avatar",{attrs:{tile:"",width:"5%"}}),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"5%"}}),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"5%"}}),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"5%"}}),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"5%"}}),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"5%"}}),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"15%"}}),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("Total")]),t._v(" "),a("v-list-item-avatar",{attrs:{tile:"",width:"40%"}},[a("p",{staticClass:"text-h5 font-weight-bold red--text"},[t._v("\n              "+t._s(t._f("currency")(t.total_payment))+"\n            ")])])],1)],2)],1),t._v(" "),a("div",{staticClass:"d-none",attrs:{id:"excel"}},[a("table",[a("tr",[a("th",[t._v("Invoice")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Payment Type")]),t._v(" "),a("th",[t._v("Title")]),t._v(" "),a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Total")])]),t._v(" "),t._l(t.$store.state.Reports.other_service_reports.other_services,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(e.sale_id))]),t._v(" "),a("td",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),t._v(" "),a("td",[t._v(t._s(t._f("date")(e.created_at)))]),t._v(" "),a("td",[t._v(t._s(e.payment_type))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.total))])])})),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Total")]),t._v(" "),a("td",[t._v(t._s(t._f("currency")(t.total_payment)))])])],2)])]),t._v(" "),a("div",{staticStyle:{"page-break-after":"always"}})],1):t._e()}),[],!1,null,null,null);e.default=s.exports}}]);