(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{lzK1:function(t,e,r){"use strict";r.r(e);var a={name:"payment-by-schedules",methods:{print:function(){window.print()},excel:function(){this.$excel("excel","Product Reports ".concat(this.date_title))}},computed:{date_title:function(){return this.$store.state.Reports.product_report_filter.dates.join(" ~ ")},total_price:function(){return this.$store.state.Reports.product_reports.reduce((function(t,e){return t+Number(e.price)}),0)},total_qty:function(){return this.$store.state.Reports.product_reports.reduce((function(t,e){return t+Number(e.quantity)}),0)},total_discount:function(){return this.$store.state.Reports.product_reports.reduce((function(t,e){return t+Number(e.discount)}),0)},total_vat:function(){return this.$store.state.Reports.product_reports.reduce((function(t,e){return t+Number(e.vat)}),0)},total_taxable:function(){return this.$store.state.Reports.product_reports.reduce((function(t,e){return t+Number(e.taxable)}),0)}}},i=r("KHd+"),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$store.state.Reports.product_reports.length>0?r("v-card",{attrs:{flat:""}},[r("v-card-actions",{staticClass:"d-print-none"},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-none",attrs:{small:""},on:{click:t.excel}},[r("v-icon",[t._v("mdi-microsoft-excel")]),t._v(" Excel")],1),t._v(" "),r("v-btn",{staticClass:"text-none",attrs:{small:""},on:{click:t.print}},[r("v-icon",[t._v("mdi-printer")]),t._v(" Print")],1)],1),t._v(" "),r("v-card-text",[r("div",{staticClass:"text-center"},[r("v-avatar",{attrs:{tile:"",size:"250"}},[r("img",{attrs:{src:"/img/logoStepUp.png"}})])],1),t._v(" "),r("p",{staticClass:"text-h5 font-weight-bold text-center"},[t._v("Product Reports")]),t._v(" "),r("div",{staticClass:"text-h6 font-weight-bold text-center"},[t._v("\n      Date: "+t._s(t.date_title)+"\n    ")])]),t._v(" "),t._l(t.$store.state.Reports.product_reports,(function(e,a){return r("v-card-text",{key:a},[r("p",{staticClass:"text-center text-h5"},[t._v(t._s(e.name))]),t._v(" "),r("div",[r("v-list",{attrs:{shaped:""}},[r("v-list-item",[r("v-list-item-avatar",{attrs:{width:"20%"}},[t._v(" Item ")]),t._v(" "),r("v-list-item-avatar",{attrs:{width:"20%"}},[t._v(" Quantity ")]),t._v(" "),r("v-list-item-avatar",{attrs:{width:"15%"}},[t._v(" Taxable ")]),t._v(" "),r("v-list-item-avatar",{attrs:{width:"15%"}},[t._v(" Discount ")]),t._v(" "),r("v-list-item-avatar",{attrs:{width:"15%"}},[t._v(" VAT 5% ")]),t._v(" "),r("v-list-item-avatar",{attrs:{width:"15%"}},[t._v(" Total ")])],1),t._v(" "),r("v-divider"),t._v(" "),t._l(e.items,(function(e,a){return[r("div",{key:a+200},[r("v-list-item",[r("v-list-item-avatar",{attrs:{tile:"",width:"20%"}},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"20%"}},[t._v("\n                "+t._s(e.quantity)+"\n              ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n                "+t._s(t._f("currency")(e.taxable))+"\n              ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n                "+t._s(t._f("currency")(e.discount))+"\n              ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n                "+t._s(t._f("currency")(e.vat))+"\n              ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n                "+t._s(t._f("currency")(e.price))+"\n              ")])],1),t._v(" "),r("v-divider")],1)]})),t._v(" "),r("v-list-item",[r("v-list-item-avatar",{attrs:{tile:"",width:"20%"}}),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"20%"}},[t._v("\n            "+t._s(e.quantity)+"\n          ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n            "+t._s(t._f("currency")(e.taxable))+"\n          ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n            "+t._s(t._f("currency")(e.discount))+"\n          ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n            "+t._s(t._f("currency")(e.vat))+"\n          ")]),t._v(" "),r("v-list-item-avatar",{attrs:{tile:"",width:"15%"}},[t._v("\n            "+t._s(t._f("currency")(e.price))+"\n          ")])],1)],2)],1)])})),t._v(" "),r("v-card-text",[r("table",{staticStyle:{width:"100%",border:"1px solid black","border-collapse":"collapse"}},[r("tr",[r("th",{staticStyle:{border:"1px solid black"}},[t._v("Quantity")]),t._v(" "),r("th",{staticStyle:{border:"1px solid black"}},[t._v("Grand Taxable")]),t._v(" "),r("th",{staticStyle:{border:"1px solid black"}},[t._v("Grand Discount")]),t._v(" "),r("th",{staticStyle:{border:"1px solid black"}},[t._v("Grand VAT 5%")]),t._v(" "),r("th",{staticStyle:{border:"1px solid black"}},[t._v("Grand Total")])]),t._v(" "),r("tr",[r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n          "+t._s(t.total_qty)+"\n        ")]),t._v(" "),r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n          "+t._s(t._f("currency")(t.total_taxable))+"\n        ")]),t._v(" "),r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n          "+t._s(t._f("currency")(t.total_discount))+"\n        ")]),t._v(" "),r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n          "+t._s(t._f("currency")(t.total_vat))+"\n        ")]),t._v(" "),r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n          "+t._s(t._f("currency")(t.total_price))+"\n        ")])])])]),t._v(" "),r("v-card-text",{staticClass:"d-none"},[r("div",{attrs:{id:"excel"}},[r("table",[r("tr",[r("th",[t._v("Products")]),t._v(" "),r("th",[t._v("Item")]),t._v(" "),r("th",[t._v("Quantity")]),t._v(" "),r("th",[t._v("Taxable")]),t._v(" "),r("th",[t._v("Discount")]),t._v(" "),r("th",[t._v("VAT 5%")]),t._v(" "),r("th",[t._v("Total")])])]),t._v(" "),t._l(t.$store.state.Reports.product_reports,(function(e,a){return r("table",{key:a},[t._l(e.items,(function(a,i){return r("tr",{key:i+400},[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(a.name))]),t._v(" "),r("td",[t._v(t._s(a.quantity))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(a.taxable)))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(a.discount)))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(a.vat)))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(a.price)))])])})),t._v(" "),r("tr",[r("td"),t._v(" "),r("td"),t._v(" "),r("td",[t._v(t._s(e.quantity))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(e.taxable)))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(e.discount)))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(e.vat)))]),t._v(" "),r("td",[t._v(t._s(t._f("currency")(e.price)))])])],2)})),t._v(" "),r("table",{staticStyle:{width:"100%",border:"1px solid black","border-collapse":"collapse"}},[r("tr",[r("th",{staticStyle:{border:"1px solid black"}},[t._v("Quantity")]),t._v(" "),r("th",{staticStyle:{border:"1px solid black"}},[t._v("Grand Taxable")]),t._v(" "),r("th",{staticStyle:{border:"1px solid black"}},[t._v("Grand Discount")]),t._v(" "),r("th",{staticStyle:{border:"1px solid black"}},[t._v("Grand VAT 5%")]),t._v(" "),r("th",{staticStyle:{border:"1px solid black"}},[t._v("Grand Total")])]),t._v(" "),r("tr",[r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n            "+t._s(t.total_qty)+"\n          ")]),t._v(" "),r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n            "+t._s(t._f("currency")(t.total_taxable))+"\n          ")]),t._v(" "),r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n            "+t._s(t._f("currency")(t.total_discount))+"\n          ")]),t._v(" "),r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n            "+t._s(t._f("currency")(t.total_vat))+"\n          ")]),t._v(" "),r("td",{staticStyle:{border:"1px solid black","text-align":"center"}},[t._v("\n            "+t._s(t._f("currency")(t.total_price))+"\n          ")])])])],2)]),t._v(" "),r("div",{staticStyle:{"page-break-after":"always"}})],2):t._e()}),[],!1,null,null,null);e.default=s.exports}}]);