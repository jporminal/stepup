(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{"Uf/q":function(t,e,s){"use strict";s.r(e);var r={name:"checkout-success",created:function(){this.init()},data:function(){return{is_finish:!1,message:"Please wait. You will receive you e-receipt in a few moment.",student:[]}},methods:{init:function(){var t=localStorage.getItem("last_id"),e=(JSON.parse(localStorage.getItem("camp_form")),this.$route.query.cart_id,{subtotal:this.subtotal,tax:this.tax,discount:this.discount,total:this.total});this.sua_receipt(t,this.$store.state.Carts.carts,this.$store.state.Carts.billing,e)},update_checkout:function(t){var e=this,s=localStorage.getItem("last_id"),r=(JSON.parse(localStorage.getItem("camp_form")),this.$route.query.cart_id),o={subtotal:this.subtotal,tax:this.tax,discount:this.discount,total:this.total};this.$store.dispatch("UPDATE_CHECKOUT",{last_id:s,total:o,cart_id:r,customer:this.$store.state.Carts.billing,products:this.$store.state.Carts.carts}).then((function(t){e.message="Thank you for your transaction.",e.is_finish=!0,e.$store.commit("CART_APPEND",[]),localStorage.removeItem("children"),localStorage.removeItem("traesdhes"),localStorage.removeItem("billing"),localStorage.removeItem("last_id"),localStorage.removeItem("parent"),localStorage.removeItem("camp_form")}))},sua_receipt:function(t,e,s,r){return this.update_checkout(this.student),this.student},onlyUnique:function(t,e,s){return s.indexOf(t)===e}},computed:{subtotal:function(){return this.$store.state.Carts.carts.reduce((function(t,e){return t+e.product_option.total_excl}),0)},tax:function(){return this.$store.state.Carts.carts.reduce((function(t,e){return t+e.product_option.vat}),0)},discount:function(){return this.$store.state.Carts.carts.reduce((function(t,e){return t+e.product_option.discount}),0)},total:function(){return this.$store.state.Carts.carts.reduce((function(t,e){return t+e.product_option.total_incl}),0)},is_camps:function(){return this.$store.state.Carts.carts.filter((function(t){return"Camps"==t.type})).length}}},o=s("KHd+"),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{attrs:{flat:""}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"display-2 text-center"},[t._v("Successful Payment")])]),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"body-2 text-center"},[t._v("\n            "+t._s(t.message)+"\n            "),t.is_finish?t._e():s("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}),t._v(" "),t.is_finish?s("v-icon",{attrs:{color:"green",large:""}},[t._v("mdi-check-bold")]):t._e()],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);