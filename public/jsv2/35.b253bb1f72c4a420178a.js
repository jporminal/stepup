(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{AoIB:function(t,e,s){"use strict";s.r(e);var a={name:"manage-attendance",data:function(){return{selected_date:!1,my_date:"",notes:""}},methods:{seleceted_date:function(t){this.selected_date=!0,this.my_date=t;var e={schedule_id:this.$store.state.Attendance.attendance_manage.schedule.details.id,date:t};this.$store.dispatch("ATTENDANCE_STUDENTS",e)},checkbox_change:function(){this.$store.commit("ATTENDANCE_MANAGE",this.$store.state.Attendance.attendance_manage)},save:function(){var t=this;this.$store.commit("ATTENDANCE_LOADING",!0);var e={schedule_id:this.$store.state.Attendance.attendance_manage.schedule.details.id,date:this.my_date,students:this.$store.state.Attendance.students.children,notes:this.$store.state.Attendance.students.notes?this.$store.state.Attendance.students.notes.notes:this.notes};this.$store.commit("ATTENDED",e),this.$store.dispatch("ATTENDANCE",{form:this.$store.state.Attendance.attended}).then((function(e){t.$store.commit("SNACKBAR",{snackbar:!0,vertical:!1,timeout:2e3,color:"blue lighten-2",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"Attendance save!"}),t.close()})).catch((function(e){t.$store.commit("SNACKBAR",{snackbar:!0,vertical:!1,timeout:2e3,color:"red",dark:!0,top:!0,bottom:!1,centered:!0,left:!1,right:!1,text:"Something went wrong. Please reload your browser"})}))},close:function(){this.$store.commit("ATTENDANCE_LOADING",!1),this.$store.commit("ATTENDANCE_STUDENTS",{children:[]}),this.$store.commit("ATTENDED",{}),this.$store.commit("ATTENDANCE_OPEN",!1)}}},n=s("KHd+"),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"800"},on:{"click:outside":t.close},model:{value:t.$store.state.Attendance.attendance_open,callback:function(e){t.$set(t.$store.state.Attendance,"attendance_open",e)},expression:"$store.state.Attendance.attendance_open"}},[s("v-card",[s("v-toolbar",{attrs:{color:"blue lighten-2",dark:"",flat:""}},[s("v-toolbar-title",[t._v("\n        "+t._s(t.$store.state.Attendance.attendance_manage.schedule.details.name)+"\n      ")])],1),t._v(" "),s("v-card-text",[s("v-select",{staticClass:"mt-4",attrs:{items:t.$store.state.Attendance.attendance_manage.date_ranges,label:"Select Date",solo:""},on:{change:t.seleceted_date}})],1),t._v(" "),t.selected_date?s("v-card-text",[t.$store.state.Attendance.students.children.length>0?s("div",[s("p",[t._v("Please check student(s) who attended the class.")]),t._v(" "),s("v-list",t._l(t.$store.state.Attendance.students.children,(function(e,a){return s("v-list-item",{key:a},[s("v-checkbox",{attrs:{label:e.name},on:{change:t.checkbox_change},model:{value:e.status,callback:function(s){t.$set(e,"status",s)},expression:"student.status"}})],1)})),1),t._v(" "),t.$store.state.Attendance.students.notes?s("v-textarea",{attrs:{label:"Notes",solo:""},model:{value:t.$store.state.Attendance.students.notes.notes,callback:function(e){t.$set(t.$store.state.Attendance.students.notes,"notes",e)},expression:"$store.state.Attendance.students.notes.notes"}}):s("v-textarea",{attrs:{label:"Notes",solo:""},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}}),t._v(" "),s("v-btn",{staticClass:"primary",attrs:{absolute:"",bottom:"",right:""},on:{click:t.save}},[t._v("Save")])],1):s("div",[s("p",{staticClass:"text-center"},[t._v("No enrolled student")])])]):s("v-card-text",[s("p",{staticClass:"text-center"},[t._v("Select Date ↑")])])],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);