(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{WK96:function(t,e,r){"use strict";r.r(e);var s={name:"uniform-main-view",methods:{channel:function(t){var e={filter:this.$store.state.Products.product_filter.filter,page:t,per_page:12};this.$store.commit("PRODUCT_FILTER",e),this.$store.dispatch("PRODUCTS",this.$store.state.Products.product_filter)},add_cart:function(t){this.$store.dispatch("VIEW_ITEM",t)}},computed:{products:function(){return this.$store.state.Products.products}}},a=r("KHd+"),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",loading:t.$store.state.Products.loading}},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),t.products.data.length>0?[r("v-container",{staticClass:"fill-height"},[r("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.products.data,(function(e,s){return r("v-col",{key:s,attrs:{cols:"12",lg:"3",md:"4"}},[r("v-card",{attrs:{height:"400"}},[r("v-img",{staticStyle:{cursor:"pointer"},attrs:{height:"250",src:null!=e.images?"/img/products/"+e.images.image_name:""},on:{click:function(r){return t.add_cart(e.id)}}}),t._v(" "),r("v-card-text",[r("p",{staticClass:"title"},[t._v(t._s(e.product))]),t._v(" "),r("v-btn",{staticClass:"text-none",attrs:{color:"green",text:"",absolute:"",right:""},on:{click:function(r){return t.add_cart(e.id)}}},[t._v("\n                Add to cart\n              ")])],1)],1)],1)})),1)],1),t._v(" "),r("div",{staticClass:"text-right"},[r("v-pagination",{attrs:{length:t.products.last_page,"total-visible":t.$vuetify.breakpoint.mdAndUp?10:5},on:{input:t.channel},model:{value:t.products.current_page,callback:function(e){t.$set(t.products,"current_page",e)},expression:"products.current_page"}})],1)]:r("v-container",[r("p",{staticClass:"text-center"},[t._v("Product(s) not found")])])],2)}),[],!1,null,null,null);e.default=n.exports}}]);