(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{"9JW6":function(t,s,e){"use strict";e.r(s);var r={name:"cart-summary",components:{my_camps:function(){return e.e(116).then(e.bind(null,"/RHp"))}},methods:{proceed_checkout:function(){this.is_camps>0?(this.check_quantity(),this.$store.commit("CART_CAMP_FORM",!0)):(this.check_quantity(),this.$store.commit("CART_PROCESS",!0))},check_quantity:function(){var t=this;this.$store.state.Carts.carts.forEach((function(s){t.$store.dispatch("CART_CHECK_QUANTITY",s).then((function(e){console.log(e.data);var r=e.data;switch(s.type){case"Product":case"Camps":case"Others":case"Urdang":if(r.quantity>=s.product_option.quantity)return;t.remove(s);break;case"Motor City":case"Foremarke":case"Akoya":if(r.quantity>=1)return;t.remove(s)}}))}))},remove:function(t){var s=this.$store.state.Carts.carts.indexOf(t);this.$store.state.Carts.carts.splice(s,1),localStorage.setItem("traesdhes",JSON.stringify(this.$store.state.Carts.carts))}},computed:{subtotal:function(){return this.$store.state.Carts.carts.reduce((function(t,s){return t+s.product_option.total_excl}),0)},tax:function(){return this.$store.state.Carts.carts.reduce((function(t,s){return t+s.product_option.vat}),0)},total:function(){return this.$store.state.Carts.carts.reduce((function(t,s){return t+s.product_option.total_incl}),0)},discount:function(){return this.$store.state.Carts.carts.reduce((function(t,s){return t+s.product_option.discount}),0)},is_camps:function(){return this.$store.state.Carts.carts.filter((function(t){return"Camps"==t.type})).length}}},a=e("KHd+"),c=Object(a.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-card",[t.$store.state.Carts.camps?e("my_camps"):t._e(),t._v(" "),e("v-toolbar",{attrs:{color:"blue lighten-2",dark:""}},[e("v-toolbar-title",{staticClass:"title"},[t._v("Summary")])],1),t._v(" "),e("v-card-text",[e("v-list",{attrs:{flat:""}},[e("v-list-item",[e("v-list-item-title",{staticClass:"cart_summary"},[t._v("\n            Taxable\n          ")]),t._v(" "),e("v-list-item-title",[t._v("\n            "+t._s(t._f("currency")(t.subtotal))+"\n          ")])],1),t._v(" "),t.discount>0?e("v-list-item",[e("v-list-item-title",{staticClass:"cart_summary"},[t._v("\n            Discount\n          ")]),t._v(" "),e("v-list-item-title",[t._v("\n            "+t._s(t._f("currency")(t.discount))+"\n          ")])],1):t._e(),t._v(" "),e("v-list-item",[e("v-list-item-title",{staticClass:"cart_summary"},[t._v(" Tax ")]),t._v(" "),e("v-list-item-title",[t._v("\n            "+t._s(t._f("currency")(t.tax))+"\n          ")])],1),t._v(" "),e("v-list-item",[e("v-list-item-title",{staticClass:"cart_summary"},[t._v(" Total ")]),t._v(" "),e("v-list-item-title",[t._v("\n            "+t._s(t._f("currency")(t.total))+"\n          ")])],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{staticClass:"text-none success",attrs:{disabled:!(this.$store.state.Carts.carts.length>0),block:"",large:""},on:{click:t.proceed_checkout}},[t._v("\n        Proceed to checkout\n      ")])],1)],1)],1)}),[],!1,null,null,null);s.default=c.exports}}]);