(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"q13+":function(t,e,r){"use strict";r.r(e);var a={name:"my-orders",components:{my_receipt:function(){return r.e(48).then(r.bind(null,"Q/Xa"))}},data:function(){return{options:{},headers:[{text:"Order #",value:"id",align:"center",sortable:!1},{text:"Total",value:"amount",align:"center",sortable:!1},{text:"Date",value:"date",align:"center",sortable:!1},{text:"",value:"actions",align:"center",sortable:!1}]}},watch:{options:{handler:function(t){var e={page:t.page,per_page:t.itemsPerPage};this.$store.commit("ORDER_PAGINATE",e),this.pagination()},deep:!0}},methods:{pagination:function(){this.$store.dispatch("MY_ORDERS",this.$store.state.Orders.paginate)},view:function(t){this.$store.dispatch("RECEIPT",t)}}},n=r("KHd+"),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$store.state.Orders.receipt_open?r("my_receipt"):t._e(),t._v(" "),r("v-card",[r("v-toolbar",{attrs:{color:"blue lighten-2",dark:"",flat:""}},[r("v-toolbar-title",[t._v(" My Order(s) ")])],1),t._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.$store.state.Orders.orders.data,"server-items-length":t.$store.state.Orders.orders.total,loading:t.$store.state.Orders.order_loading,"items-per-page":10,options:t.options,"footer-props":{"items-per-page-options":[10,15,20],"items-per-page-text":"Categories per page","show-current-page":!0,"show-first-last-page":!0},"mobile-breakpoint":200},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.amount",fn:function(e){var a=e.item;return[r("p",[t._v(t._s(t._f("currency")(a.amount_incl)))])]}},{key:"item.date",fn:function(e){var a=e.item;return[r("span",[t._v(" "+t._s(t._f("date")(a.create_at))+" ")])]}},{key:"item.actions",fn:function(e){var a=e.item;return[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({attrs:{color:"blue"},on:{click:function(e){return t.view(a.id)}}},"v-icon",o,!1),n),[t._v("\n                mdi-eye\n              ")])]}}],null,!0)},[t._v(" "),r("span",[t._v(" View Order #"+t._s(a.id)+" ")])])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);