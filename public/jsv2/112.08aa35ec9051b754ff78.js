(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{aBZ1:function(t,e,a){"use strict";a.r(e);var s={name:"staff-view",components:{my_staff:function(){return a.e(111).then(a.bind(null,"BGEk"))}},data:function(){return{options:{},headers:[{text:"Name",value:"name",align:"center",sortable:!1},{text:"Contact",value:"contact",align:"center",sortable:!1},{text:"Email",value:"email",align:"center",sortable:!1},{text:"",value:"actions",align:"center",sortable:!1}]}},created:function(){this.pagination()},watch:{options:{handler:function(t){var e={filter:this.$store.state.Staffs.staff_filter.filter,page:t.page,per_page:t.itemsPerPage};this.$store.commit("STAFF_FILTER",e),this.$store.state.Staffs.staff_filter.filter?this.$store.dispatch("STAFF_FILTER",this.$store.state.Staffs.staff_filter):this.pagination()},deep:!0}},methods:{filter:function(t){if(t.length>2){var e={filter:t,page:this.$store.state.Staffs.staff_filter.page,per_page:this.$store.state.Staffs.staff_filter.per_page};this.$store.commit("STAFF_FILTER",e),this.options={page:1,per_page:10},this.$store.dispatch("STAFF_FILTER",this.$store.state.Staffs.staff_filter)}if(0==t.length){var a={filter:null,page:this.$store.state.Staffs.staff_filter.page,per_page:this.$store.state.Staffs.staff_filter.per_page};this.$store.commit("STAFF_FILTER",a),this.pagination()}},add:function(){this.$store.commit("STAFF",{sid:0,staffname:"",staffphone1:"",staffphone2:"",staffmobile:"",staffemail:""}),this.$store.commit("STAFF_OPEN",!0)},edit:function(t){this.$store.dispatch("STAFF",t)},pagination:function(){this.$store.commit("STAFF_LOADING",!0),this.$store.dispatch("STAFFS",this.$store.state.Staffs.staff_filter)}}},i=a("KHd+"),f=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$store.state.Staffs.staff_open?a("my_staff"):t._e(),t._v(" "),a("v-card",[a("v-toolbar",{staticClass:"white--text",attrs:{color:"blue lighten-2",flat:""}},[a("v-toolbar-title",[t._v(" Staffs ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-text-field",{staticClass:"mt-6",attrs:{label:"Filter staff",solo:""},on:{input:t.filter}})],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.$store.state.Staffs.staffs.data,"server-items-length":t.$store.state.Staffs.staffs.total,loading:t.$store.state.Staffs.staffs.loading,options:t.options,"items-per-page":10,"footer-props":{"items-per-page-options":[10,15,20,-1],"items-per-page-text":"Staff per page","show-current-page":!0},"mobile-breakpoint":200},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.name",fn:function(e){var a=e.item;return[t._v("\n        "+t._s(t._f("toUpper")(a.staffname))+"\n      ")]}},{key:"item.contact",fn:function(e){var a=e.item;return[t._v("\n        "+t._s(a.staffphone1)+"\n      ")]}},{key:"item.email",fn:function(e){var a=e.item;return[t._v("\n        "+t._s(a.staffemail)+"\n      ")]}},{key:"item.actions",fn:function(e){var s=e.item;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,f=e.attrs;return[a("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(e){return t.edit(s.sid)}}},"v-icon",f,!1),i),[t._v("\n              mdi-form-select\n            ")])]}}],null,!0)},[t._v(" "),a("span",[t._v(" edit "+t._s(t._f("toUpper")(s.staffname))+" ")])])]}}])}),t._v(" "),a("v-btn",{staticClass:"error",attrs:{absolute:"",bottom:"",left:"",icon:"",dark:""},on:{click:t.add}},[a("v-icon",[t._v(" mdi-plus ")])],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports}}]);