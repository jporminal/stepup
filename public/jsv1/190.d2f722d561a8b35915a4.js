(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{"4Anz":function(t,n,e){"use strict";e.r(n);var s={name:"shop-products",components:{product_main:function(){return e.e(160).then(e.bind(null,"TqzB"))},product_details:function(){return e.e(159).then(e.bind(null,"mOsK"))},snackbar:function(){return e.e(0).then(e.bind(null,"oTZ6"))}},created:function(){this.init(),this.$store.dispatch("STORE_SETUP")},methods:{init:function(){this.$store.dispatch("URDANGS",this.$store.state.Urdangs.product_filter)}},metaInfo:function(){return{title:"StepUp Academy",titleTemplate:"%s - Shop Urdang",htmlAttrs:{lang:"en"}}}},r=e("KHd+"),a=Object(r.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{fluid:""}},[e("snackbar"),t._v(" "),t.$store.state.Urdangs.open?e("product_details"):t._e(),t._v(" "),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("h1",{staticClass:"text-center"},[t._v(" "+t._s(t.$store.state.Date_ranges.store_setup.urdang_lesson_text.value)+" ")])]),t._v(" "),e("v-col",{attrs:{cols:"12",md:"9"}},[e("product_main")],1)],1)],1)}),[],!1,null,null,null);n.default=a.exports}}]);