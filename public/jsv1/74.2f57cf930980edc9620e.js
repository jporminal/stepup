(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{XuuY:function(t,e,r){"use strict";r.r(e);var s={name:"filter-report",created:function(){this.$store.dispatch("MY_PRODUCTS")},methods:{filter:function(){this.$store.commit("PRODUCT_REPORT_FILTER",this.$store.state.Reports.product_report_filter),this.$store.dispatch("PRODUCT_REPORTS",{dates:this.$store.state.Reports.product_report_filter.dates,product_ids:this.$store.state.Reports.product_report_filter.product_ids})}},computed:{date_title:function(){return this.$store.state.Reports.product_report_filter.dates.join(" ~ ")}}},o=r("KHd+"),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"d-print-none"},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-date-picker",{attrs:{range:"","full-width":""},model:{value:t.$store.state.Reports.product_report_filter.dates,callback:function(e){t.$set(t.$store.state.Reports.product_report_filter,"dates",e)},expression:"$store.state.Reports.product_report_filter.dates"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"text-h6 text-center"},[t._v("Date: "+t._s(t.date_title))])]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-autocomplete",{attrs:{items:t.$store.state.Products.my_products,"item-text":"product","item-value":"id",multiple:"",label:"Select Product"},model:{value:t.$store.state.Reports.product_report_filter.product_ids,callback:function(e){t.$set(t.$store.state.Reports.product_report_filter,"product_ids",e)},expression:"\n                  $store.state.Reports.product_report_filter.product_ids\n                "}})],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-none primary",attrs:{disabled:!(t.$store.state.Reports.product_report_filter.dates.length>1)},on:{click:t.filter}},[t._v("Filter")])],1)],1)],1)],1),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=a.exports}}]);