(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"Q/Xa":function(t,e,i){"use strict";i.r(e);var s={name:"view-receipt",methods:{close:function(){this.$store.commit("RECEIPT",{}),this.$store.commit("RECEIPT_OPEN",!1)}}},l=i("KHd+"),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"1200"},on:{"click:outside":t.close},model:{value:t.$store.state.Orders.receipt_open,callback:function(e){t.$set(t.$store.state.Orders,"receipt_open",e)},expression:"$store.state.Orders.receipt_open"}},[i("v-card",[i("v-toolbar",{attrs:{color:"blue lighten-2",dark:"",flat:""}},[i("v-toolbar-title",[t._v("\n        Order #"+t._s(t.$store.state.Orders.receipt.transaction.id)+"\n      ")])],1),t._v(" "),i("v-card-text",[i("center",[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-title",[t._v("Item")]),t._v(" "),i("v-list-item-title",[t._v("Unit Price")]),t._v(" "),i("v-list-item-title",[t._v("Qty")]),t._v(" "),i("v-list-item-title",[t._v("Tax")]),t._v(" "),i("v-list-item-title",[t._v("Total")])],1),t._v(" "),i("v-divider"),t._v(" "),t._l(t.$store.state.Orders.receipt.Products,(function(e,s){return i("v-list-item",{key:s,attrs:{dense:""}},[i("v-list-item-title",[i("v-text-field",{attrs:{readonly:"",solo:"",flat:""},model:{value:e.item,callback:function(i){t.$set(e,"item",i)},expression:"item.item"}})],1),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.unit_price)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(e.quantity))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.tax)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.total)))])],1)})),t._v(" "),t._l(t.$store.state.Orders.receipt.Services,(function(e,s){return i("v-list-item",{key:s,attrs:{dense:""}},[i("v-list-item-title",[i("v-text-field",{attrs:{readonly:"",solo:"",flat:""},model:{value:e.item,callback:function(i){t.$set(e,"item",i)},expression:"item.item"}})],1),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.unit_price)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(e.quantity))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.tax)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.total)))])],1)})),t._v(" "),t._l(t.$store.state.Orders.receipt.Other_services,(function(e,s){return i("v-list-item",{key:s,attrs:{dense:""}},[i("v-list-item-title",[i("v-text-field",{attrs:{readonly:"",solo:"",flat:""},model:{value:e.item,callback:function(i){t.$set(e,"item",i)},expression:"item.item"}})],1),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.unit_price)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(e.quantity))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.tax)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.total)))])],1)})),t._v(" "),t._l(t.$store.state.Orders.receipt.Locations,(function(e,s){return i("v-list-item",{key:s,attrs:{dense:""}},[i("v-list-item-title",[i("v-text-field",{attrs:{readonly:"",solo:"",flat:""},model:{value:e.item,callback:function(i){t.$set(e,"item",i)},expression:"item.item"}})],1),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.unit_price)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(e.quantity))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.tax)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.total)))])],1)})),t._v(" "),t._l(t.$store.state.Orders.receipt.Trial,(function(e,s){return i("v-list-item",{key:s,attrs:{dense:""}},[i("v-list-item-title",[i("v-text-field",{attrs:{readonly:"",solo:"",flat:""},model:{value:e.item,callback:function(i){t.$set(e,"item",i)},expression:"item.item"}})],1),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.unit_price)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(e.quantity))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.tax)))]),t._v(" "),i("v-list-item-title",[t._v(t._s(t._f("currency")(e.total)))])],1)}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);