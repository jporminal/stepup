(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{"46qT":function(t,e,s){"use strict";s.r(e);var r={name:"tool-bar",components:{getting_started:function(){return s.e(197).then(s.bind(null,"sLM1"))}},data:function(){return{drawer:null,is_scrolling:!1,count:0,items:[{to:{path:"/",hash:"#contactus"},text:"Contact Us",isDropdown:!1},{to:"/meet-the-team",text:"Meet The Team",isDropdown:!1},{to:"/camps",text:"Camps",isDropdown:!1},{to:"/#",text:"Schedules & Info",isDropdown:!0,submenus:[{to:"/schedules-locations",text:"Schedules",tohref:!1},{to:"/class-information",text:"Class Information",tohref:!1}]},{to:"#",text:"Forms",isDropdown:!0,submenus:[{to:"enrollment-form",text:"Enrollment Form",tohref:!0},{to:"trial-form",text:"Trial Form",tohref:!0}]},{to:"#",text:"Shop",isDropdown:!0,submenus:[{to:"/shop-uniforms",text:"Uniforms",tohref:!0},{to:"/shop-camps",text:"Summer Camps",tohref:!0}]}],authenticateds:[{title:"My Account",icon:"",path:"/my-account",access:["User","Admin","Reception","Manager","Accounts","Teacher","Kups","PA"]},{title:"SAMS",icon:"",path:"/sams-schedule",access:["Admin","Reception","Manager","Teacher","Kups","PA"]},{title:"Logout",icon:"fa-sign-in-alt",path:"/logout",access:["User","Admin","Reception","Manager","Accounts","Kups","Teacher","PA"]}],unauthenticateds:[{title:"Login",icon:"",path:"/login"},{title:"Register",icon:"",path:"/register"}]}},methods:{onScroll:function(){this.is_scrolling=(window.pageYOffset||document.documentElement.scrollTop||0)>20},go_back_home:function(){this.$router.push("/")},in_array:function(t,e){for(var s=!1,r=0;r<e.length;r++){if(e[r]==t){s=!0;break}}return s}}},n=s("KHd+"),o=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{app:"",extended:"","extension-height":"15",dark:"Home"==t.$route.name&&!t.is_scrolling,prominent:"Home"==t.$route.name&&!t.is_scrolling,"elevate-on-scroll":"",color:t.is_scrolling||"Home"!=t.$route.name?"grey lighten-4":"transparent"}},[[t.$vuetify.breakpoint.mdAndUp?s("v-img",{staticClass:"shrink ml-12 mt-5",staticStyle:{cursor:"pointer"},attrs:{"max-width":"Home"!=t.$route.name||t.is_scrolling?"5%":"10%",src:"img/logoStepUp.png"},on:{click:t.go_back_home}}):s("v-avatar",{staticClass:"ml-5",attrs:{color:"grey lighten-4",size:"80"},on:{click:t.go_back_home}},[s("img",{staticClass:"shrink",attrs:{src:"img/logoStepUp.png",alt:"Stepup Academy"}})])],t._v(" "),s("v-spacer"),t._v(" "),t.$vuetify.breakpoint.mdAndUp?[t._l(t.items,(function(e,r){return[s("div",{key:r},[e.isDropdown?s("v-menu",{attrs:{"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on;return[s("v-btn",t._g({staticClass:"text-capitalize subtitle-1 mx-1",attrs:{dark:"Home"==t.$route.name&&!t.is_scrolling,text:""}},n),[t._v("\n                "+t._s(e.text)+"\n              ")])]}}],null,!0)},[t._v(" "),s("v-list",[t._l(e.submenus,(function(e,r){return[s("div",{key:r},[e.tohref?t._e():s("v-list-item",{attrs:{to:e.to}},[s("v-list-item-title",[t._v("\n                      "+t._s(e.text)+"\n                    ")])],1),t._v(" "),e.tohref?s("v-list-item",{attrs:{href:e.to}},[s("v-list-item-title",[t._v("\n                      "+t._s(e.text)+"\n                    ")])],1):t._e()],1)]}))],2)],1):s("v-btn",{staticClass:"text-capitalize subtitle-1 mx-1",attrs:{dark:"Home"==t.$route.name&&!t.is_scrolling,text:"",to:e.to}},[t._v("\n            "+t._s(e.text)+"\n          ")])],1)]})),t._v(" "),t.$store.state.Users.token?t._e():s("getting_started",{attrs:{scroller:t.is_scrolling}}),t._v(" "),t.$store.state.Users.token?[s("v-menu",{attrs:{"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[s("v-btn",t._g({staticClass:"text-none",attrs:{dark:"Home"==t.$route.name&&!t.is_scrolling,text:""}},r),[t._v("\n              Welcome back\n              "+t._s(t.$store.state.Users.current_user.first_name)+"!\n            ")])]}}],null,!1,2115432800)},[t._v(" "),s("v-list",[t._l(t.authenticateds,(function(e){return[s("div",{key:e.title},[t.in_array(t.$store.state.Users.current_user.Role,e.access)?s("v-list-item",{attrs:{to:e.path}},[s("v-list-item-title",[t._v("\n                    "+t._s(e.title)+"\n                  ")])],1):t._e()],1)]}))],2)],1)]:t._e(),t._v(" "),s("v-btn",{staticClass:"mt-4",attrs:{text:"",to:"/cart"}},[s("v-badge",{attrs:{left:"",overlap:"",value:t.$store.state.Carts.carts.length},scopedSlots:t._u([{key:"badge",fn:function(){return[t.$store.state.Carts.carts.length>0?s("span",[t._v("\n              "+t._s(t.$store.state.Carts.carts.length)+"\n            ")]):t._e()]},proxy:!0}],null,!1,4023298495)},[t._v("\n          Cart\n          "),s("v-icon",{attrs:{large:"",color:"grey lighten-1"}},[t._v(" mdi-cart ")])],1)],1)]:[s("v-btn",{attrs:{to:"/cart",icon:""}},[t._v("\n        Cart\n        "),s("v-badge",{attrs:{left:"",overlap:"",value:t.$store.state.Carts.carts.length},scopedSlots:t._u([{key:"badge",fn:function(){return[t.$store.state.Carts.carts.length>0?s("span",[t._v("\n              "+t._s(t.$store.state.Carts.carts.length)+"\n            ")]):t._e()]},proxy:!0}])},[t._v(" "),s("v-icon",{attrs:{large:"",color:"grey lighten-1"}},[t._v(" mdi-cart ")])],1)],1),t._v(" "),s("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})]],2),t._v(" "),t.$vuetify.breakpoint.mdAndDown?s("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t.$store.state.Users.token?[s("v-list",{staticClass:"pa-1",attrs:{dense:""}},[s("v-list-item",[s("v-list-item-avatar",[s("img",{attrs:{src:"/"+t.$store.state.Users.current_user.thumbnail.meta_value}})]),t._v(" "),s("v-list-item-title",[t._v("\n            Welcome\n            "+t._s(t.$store.state.Users.current_user.first_name)+"\n          ")])],1)],1)]:t._e(),t._v(" "),s("v-list",{attrs:{color:"transparent",dense:""}},[t._l(t.items,(function(e,r){return[s("div",{key:r},[e.isDropdown?s("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[s("v-list-item-title",[t._v("\n                "+t._s(e.text)+"\n              ")])]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.submenus,(function(e,r){return[s("div",{key:r},[e.tohref?t._e():s("v-list-item",{attrs:{to:e.to}},[s("v-list-item-title",[t._v(t._s(e.text))])],1),t._v(" "),e.tohref?s("v-list-item",{attrs:{href:e.to}},[s("v-list-item-title",[t._v(t._s(e.text))])],1):t._e()],1)]}))],2):s("v-list-item",{on:{click:function(s){return t.goHome(e.to)}}},[s("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)]}))],2),t._v(" "),t.$store.state.Users.token?t._e():[s("getting_started")],t._v(" "),t.$store.state.Users.token?[s("v-list",{attrs:{dense:""}},[t._l(t.authenticateds,(function(e){return[s("div",{key:e.title},[t.in_array(t.$store.state.Users.current_user.Role,e.access)?s("v-list-item",{attrs:{to:e.path}},[s("v-list-item-title",[t._v(t._s(e.title))])],1):t._e()],1)]}))],2)]:t._e()],2):t._e()],1)}),[],!1,null,null,null);e.default=o.exports}}]);