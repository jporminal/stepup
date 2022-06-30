(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{yC5A:function(t,e,s){"use strict";s.r(e);var l={name:"attendance-view",components:{edit_schedule:function(){return s.e(98).then(s.bind(null,"V0sm"))}},created:function(){this.pagination(),this.$store.dispatch("SETTING_DETAILS")},methods:{pagination:function(){this.$store.commit("ATTENDANCE_LOADING",!0),this.$store.dispatch("ENROLLMENT_SCHEDULE",this.$store.state.Enrollments.enrollment_schedule_filter)},add:function(){this.$store.commit("SCHEDULE",{scheduleid:0,drid:0,vid:1,weekid:1,scheduletimestart:"09:00",scheduletimeend:"10:00",sid:1,schedulestudio:1,classid:1,schedulestudentlimit:1,schedulenotes:""}),this.$store.commit("SCHEDULE_OPEN",!0)},edit:function(t){this.$store.dispatch("SCHEDULE",t)},del:function(t){var e=this;this.$store.dispatch("SCHEDULE_DELETE",t).then((function(t){e.$store.commit("SNACKBAR",{snackbar:!0,vertical:!1,timeout:2e3,color:"blue lighten-2",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"Schedule successfully deleted!"}),e.pagination()})).catch((function(t){e.$store.commit("SNACKBAR",{snackbar:!0,vertical:!1,timeout:2e3,color:"red",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"Error! Please reload the browser."})}))},filter:function(t){if(t.length>2){e={filter:t,page:1,per_page:10};this.$store.commit("ENROLLMENT_SCHEDULE_FILTER",e),this.$store.dispatch("ENROLLMENT_SCHEDULE_FILTER",this.$store.state.Enrollments.enrollment_schedule_filter)}if(0==t.length){var e={filter:null,page:this.$store.state.Enrollments.enrollment_schedule.current_page,per_page:this.$store.state.Enrollments.enrollment_schedule.per_page};this.$store.commit("ENROLLMENT_SCHEDULE_FILTER",e),this.$store.dispatch("ENROLLMENT_SCHEDULE",this.$store.state.Enrollments.enrollment_schedule_filter)}},channel:function(t){this.$store.commit("ATTENDANCE_LOADING",!0);var e={filter:this.$store.state.Enrollments.enrollment_schedule_filter.filter,page:t,per_page:10};this.$store.commit("ENROLLMENT_SCHEDULE_FILTER",e),this.$store.state.Enrollments.enrollment_schedule_filter.filter?this.$store.dispatch("ENROLLMENT_SCHEDULE_FILTER",this.$store.state.Enrollments.enrollment_schedule_filter):this.$store.dispatch("ENROLLMENT_SCHEDULE",this.$store.state.Enrollments.enrollment_schedule_filter)}}},i=s("KHd+"),n=Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.$store.state.Schedules.schedule_open?s("edit_schedule"):t._e(),t._v(" "),s("v-card",[s("v-toolbar",{staticClass:"white--text",attrs:{color:"blue lighten-2",flat:""}},[s("v-toolbar-title",[t._v(" Schedules ")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-text-field",{staticClass:"mt-6",attrs:{label:"Filter Schedule",solo:""},on:{input:t.filter},model:{value:t.$store.state.Enrollments.enrollment_schedule_filter.filter,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment_schedule_filter,"filter",e)},expression:"$store.state.Enrollments.enrollment_schedule_filter.filter"}})],1),t._v(" "),s("v-card",{attrs:{loading:t.$store.state.Attendance.loading,flat:""}},[s("center",[s("v-list",[s("v-list-item",[s("v-list-item-avatar",{staticClass:"font-weight-bold",attrs:{width:"30%"}},[s("p",[t._v("Term")])]),t._v(" "),s("v-list-item-avatar",{staticClass:"font-weight-bold",attrs:{width:"30%"}},[t._v("Lesson")]),t._v(" "),s("v-list-item-avatar",{staticClass:"font-weight-bold",attrs:{width:"20%"}},[t._v("Day")]),t._v(" "),s("v-list-item-avatar",{staticClass:"font-weight-bold",attrs:{width:"20%"}},[t._v("Time")]),t._v(" "),s("v-list-item-avatar",{staticClass:"font-weight-bold",attrs:{width:"10%"}},[t._v("Teacher")]),t._v(" "),s("v-list-item-avatar",{staticClass:"font-weight-bold",attrs:{width:"8%"}},[t._v("#studs")]),t._v(" "),s("v-list-item-avatar",{attrs:{width:"17%"}})],1),t._v(" "),t._l(t.$store.state.Enrollments.enrollment_schedule.data,(function(e,l){return s("v-list-item",{key:l},[s("v-list-item-avatar",{attrs:{tile:"",width:"30%",height:"60px"}},[s("p",[t._v(t._s(e.term))])]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"30%"}},[s("p",[t._v(t._s(e.lesson))])]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"20%"},domProps:{innerHTML:t._s(e.day)}}),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"20%"}},[t._v("\n              "+t._s(e.start_time)+" - "+t._s(e.end_time)+"\n              ")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"10%"}},[t._v("\n              "+t._s(e.teacher)+"\n              ")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"8%"}},[t._v("\n              "+t._s(e.total_students)+"\n              ")]),t._v(" "),s("v-list-item-avatar",{attrs:{tile:"",width:"17%"}},[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(l){var i=l.on,n=l.attrs;return[s("v-icon",t._g(t._b({on:{click:function(s){return t.edit(e.id)}}},"v-icon",n,!1),i),[t._v("\n                          mdi-pencil\n                      ")])]}}],null,!0)},[t._v(" "),s("span",[t._v(" Edit "+t._s(e.lesson)+" ")])]),t._v(" "),0===e.total_students?s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(l){var i=l.on,n=l.attrs;return[s("v-icon",t._g(t._b({attrs:{color:"red"},on:{click:function(s){return t.del(e.id)}}},"v-icon",n,!1),i),[t._v("\n                          mdi-trash-can\n                      ")])]}}],null,!0)},[t._v(" "),s("span",[t._v(" Delete "+t._s(e.lesson)+" ")])]):t._e()],1)],1)}))],2)],1)],1),t._v(" "),s("v-card-actions",[s("v-btn",{staticClass:"error",attrs:{icon:"",outlined:"",dark:"","x-large":""},on:{click:t.add}},[s("v-icon",[t._v("mdi-plus")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-pagination",{attrs:{length:t.$store.state.Enrollments.enrollment_schedule.last_page,"total-visible":t.$vuetify.breakpoint.mdAndUp?10:5},on:{input:t.channel},model:{value:t.$store.state.Enrollments.enrollment_schedule.current_page,callback:function(e){t.$set(t.$store.state.Enrollments.enrollment_schedule,"current_page",e)},expression:"$store.state.Enrollments.enrollment_schedule.current_page"}})],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);