(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{ZIc6:function(t,e,i){"use strict";i.r(e);var o={name:"product-details",data:function(){return{option:{price:0,available:0,quantities:[],order_quantity:0},price:{price:0,quantity:0}}},methods:{selected_option:function(t){this.option=t},selected_price:function(t){t.quantity>0?this.option.order_quantity=1:this.option.order_quantity=0,this.price=t},close:function(){this.$store.commit("CAMP",{}),this.$store.commit("CAMP_OPEN",!1)},add_cart:function(){var t=this,e=this.price.price,i=this.option.order_quantity,o=e/1.05,s=o*i,r=e*i,a=.05*s,c={notes:"",type:"Camps",product_category:"Service",product_id:this.$store.state.Camps.product.classid,product_image:this.$store.state.Camps.product.image.image_name,product_limit:this.option.max_limit,product_name:this.$store.state.Camps.product.classname,product_xero:this.$store.state.Camps.product.xero,product_quantity:this.price.quantity,product_option:{cid:{id:0,name:""},date_end:this.option.date_end,date_start:this.option.date_start,discount:0,discountPercent:0,id:this.option.product_id,option_id:this.price.id,option_name:this.option.item,price:e,price_excl:o,quantity:i,total_excl:s,total_incl:r,vat:a,week_id:this.option.week_id}};this.$store.state.Carts.carts.find((function(e){return e.product_id==t.$store.state.Camps.product.ProductID&&e.product_option.id==t.option.product_id}));this.$store.commit("CARTS",c),localStorage.setItem("traesdhes",JSON.stringify(this.$store.state.Carts.carts));var n={snackbar:!0,vertical:!0,timeout:2e3,color:"blue lighten-2",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"".concat(this.$store.state.Camps.product.ProductName," (").concat(this.option.item,") successfully added to your cart!")};this.$store.commit("SNACKBAR",n),this.close()},quantities:function(t){for(var e=[],i=1;i<=t;i++)e.push(i);return e}}},s=i("KHd+"),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"1000",persistent:""},on:{"click:outside":t.close},model:{value:t.$store.state.Camps.open,callback:function(e){t.$set(t.$store.state.Camps,"open",e)},expression:"$store.state.Camps.open"}},[i("v-card",[i("v-container",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-img",{attrs:{src:"https://dies.stepup.ae/public/img/products/"+t.$store.state.Camps.product.image.image_name}}),t._v(" "),i("p",{staticClass:"title text-center mt-2"},[t._v("\n            "+t._s(t.$store.state.Camps.product.ProductName)+"\n          ")]),t._v(" "),i("v-select",{attrs:{items:t.$store.state.Camps.product.option_name,"item-text":"item",label:"Select Option","return-object":"",solo:""},on:{change:t.selected_option}}),t._v(" "),Object.keys(t.option).length>4?i("v-select",{attrs:{items:t.$store.state.Camps.product.service_price,"item-text":"serviceName",label:"Select Option","return-object":"",solo:""},on:{change:t.selected_price}}):t._e(),t._v(" "),i("p",[t._v("Price: "+t._s(t._f("currency")(t.price.price)))]),t._v(" "),i("p",[t._v("Available: "+t._s(t.price.quantity))])],1),t._v(" "),i("v-col",{attrs:{cols:"10"}},[i("p",{staticClass:"font-weight-bold"},[t._v("Description:")]),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.$store.state.Camps.product.classnotes)}})])],1)],1),t._v(" "),Object.keys(t.option).length>4?i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{staticClass:"text-none primary",attrs:{large:"",disabled:!(Object.keys(t.price).length>2)},on:{click:t.add_cart}},[i("v-icon",[t._v(" mdi-cart ")]),t._v("\n        Add to cart\n      ")],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);