(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{MH0N:function(t,o,e){"use strict";e.r(o);var r={name:"product-details",data:function(){return{option:{price:0,available:0,quantities:[],order_quantity:0}}},methods:{selected_option:function(t){t.max_qty>0?t.order_quantity=1:t.order_quantity=0,this.option=t},close:function(){this.$store.commit("PRODUCT",{}),this.$store.commit("PRODUCT_OPEN",!1)},add_cart:function(){var t=this,o=this.option.price,e=this.option.order_quantity,r=o/1.05,s=r*e,i=o*e,c=.05*s,a={notes:"",type:"Product",product_category:"Product",product_id:this.$store.state.Products.product.ProductID,product_image:this.$store.state.Products.product.image.image_name,product_limit:this.option.max_qty,product_name:this.$store.state.Products.product.ProductName,product_xero:this.$store.state.Products.product.Xero,product_quantity:this.option.max_qty,product_option:{cid:{id:0,name:""},selected_id:0,discount:0,discountPercent:0,id:this.option.product_id,option_name:this.option.item,price:o,price_excl:r,quantity:e,total_excl:s,total_incl:i,vat:c}},n=this.$store.state.Carts.carts.find((function(o){return o.product_id==t.$store.state.Products.product.ProductID&&o.product_option.id==t.option.product_id}));if(n){n.product_option.price_excl=r,n.product_option.quantity=e,n.product_option.total_excl=s,n.product_option.total_incl=i,n.product_option.vat=c,localStorage.setItem("traesdhes",JSON.stringify(this.$store.state.Carts.carts));d={snackbar:!0,vertical:!0,timeout:2e3,color:"blue lighten-2",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"".concat(this.$store.state.Products.product.ProductName," (").concat(this.option.item,") successfully updated your cart!")}}else{this.$store.commit("CARTS",a),localStorage.setItem("traesdhes",JSON.stringify(this.$store.state.Carts.carts));var d={snackbar:!0,vertical:!0,timeout:2e3,color:"blue lighten-2",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"".concat(this.$store.state.Products.product.ProductName," (").concat(this.option.item,") successfully added to your cart!")}}this.$store.commit("SNACKBAR",d),this.close()},quantities:function(t){for(var o=[],e=1;e<=t;e++)o.push(e);return o}}},s=e("KHd+"),i=Object(s.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-dialog",{attrs:{width:"1000",persistent:""},on:{"click:outside":t.close},model:{value:t.$store.state.Products.open,callback:function(o){t.$set(t.$store.state.Products,"open",o)},expression:"$store.state.Products.open"}},[e("v-card",[e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"8"}},[e("v-img",{attrs:{src:null!=t.$store.state.Products.product.image?"/img/products/"+t.$store.state.Products.product.image.image_name:""}}),t._v(" "),e("p",{staticClass:"title text-center mt-2"},[t._v("\n            "+t._s(t.$store.state.Products.product.ProductName)+"\n          ")]),t._v(" "),e("v-select",{attrs:{items:t.$store.state.Products.product.option_name,"item-text":"item",label:"Select Option","return-object":"",solo:""},on:{change:t.selected_option}}),t._v(" "),[e("p",[t._v("Price: "+t._s(t._f("currency")(t.option.price)))]),t._v(" "),e("p",[t._v("Available Stocks: "+t._s(t.option.max_qty))]),t._v(" "),e("v-select",{attrs:{label:"Select Quantity",items:t.quantities(t.option.max_qty),solo:""},model:{value:t.option.order_quantity,callback:function(o){t.$set(t.option,"order_quantity",o)},expression:"option.order_quantity"}})]],2),t._v(" "),e("v-col",{attrs:{cols:"10"}},[e("p",{staticClass:"font-weight-bold"},[t._v("Description:")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.$store.state.Products.product.Description)}})])],1)],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"text-none primary",attrs:{large:"",disabled:!(Object.keys(t.option).length>4)},on:{click:t.add_cart}},[e("v-icon",[t._v(" mdi-cart ")]),t._v("\n        Add to cart\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);o.default=i.exports}}]);