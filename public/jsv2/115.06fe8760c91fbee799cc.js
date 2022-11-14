(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"4w+s":function(t,e,n){"use strict";n.r(e);var s={name:"student-view",components:{my_edit:function(){return n.e(3).then(n.bind(null,"2vGS"))},my_enrollment:function(){return n.e(4).then(n.bind(null,"AUKY"))},my_schedules:function(){return n.e(114).then(n.bind(null,"9RBx"))}},data:function(){return{options:{},headers:[{text:"First Name",value:"firstname",align:"center",sortable:!1},{text:"Family Name",value:"lastname",align:"center",sortable:!1},{text:"Date of Birth",value:"dob",align:"center",sortable:!1},{text:"Age",value:"age",align:"center",sortable:!1},{text:"Nationality",value:"nationality",align:"center",sortable:!1},{text:"",value:"actions",align:"center",sortable:!1}]}},created:function(){this.pagination()},watch:{options:{handler:function(t){var e={filter:this.$store.state.Students.student_filter.filter,page:t.page,per_page:t.itemsPerPage};this.$store.commit("STUDENT_FILTER",e),this.$store.state.Students.student_filter.filter?this.$store.dispatch("STUDENT_FILTER",this.$store.state.Students.student_filter):this.pagination()},deep:!0}},methods:{editItem:function(t){var e=this;this.$store.dispatch("GET_STUDENT_ID",{firstname:t.firstname,lastname:t.lastname}).then((function(t){e.$store.dispatch("ENROLLMENT_CHILD",t.data.cid).then((function(t){e.$store.commit("ENROLLMENT_CHILD_EDIT",!0)})).catch((function(t){}))}))},enroll:function(t){var e=this;this.$store.commit("ENROLLMENT_LOADER",!0),this.$store.dispatch("GET_STUDENT_ID",{firstname:t.firstname,lastname:t.lastname}).then((function(t){e.$store.dispatch("ENROLLMENT_SCHEDULE",e.$store.state.Enrollments.enrollment_schedule_filter),e.$store.commit("ENROLLMENT_SCHEDULE_OPEN",!0)}))},view_enrollment:function(t){var e=this;this.$store.dispatch("GET_STUDENT_ID",{firstname:t.firstname,lastname:t.lastname}).then((function(t){e.$store.dispatch("GET_ENROLLMENT",t.data.cid)}))},pagination:function(){this.$store.commit("STUDENT_LOADING",!0),this.$store.dispatch("STUDENTS",this.$store.state.Students.student_filter)},filter_student:function(t){if(t.length>2){var e={filter:t,page:this.$store.state.Students.student_filter.page,per_page:this.$store.state.Students.student_filter.per_page};this.$store.commit("STUDENT_FILTER",e),this.options={page:1,per_page:10},this.$store.dispatch("STUDENT_FILTER",this.$store.state.Students.student_filter)}if(0==t.length){var n={filter:null,page:this.$store.state.Students.student_filter.page,per_page:this.$store.state.Students.student_filter.per_page};this.$store.commit("STUDENT_FILTER",n),this.pagination()}},get_age:function(t){var e=new Date-new Date(t);return Math.floor(e/315576e5)}}},i=n("KHd+"),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-toolbar",{staticClass:"white--text",attrs:{color:"blue lighten-2",flat:""}},[n("v-toolbar-title",[t._v(" Students ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"mt-6",attrs:{label:"Filter student",solo:""},on:{input:t.filter_student}})],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.$store.state.Students.students.data,"server-items-length":t.$store.state.Students.students.total,loading:t.$store.state.Students.loading,options:t.options,"items-per-page":10,"footer-props":{"items-per-page-options":[10,15,20,-1],"items-per-page-text":"Students per page","show-current-page":!0},"mobile-breakpoint":200},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.firstname",fn:function(e){var s=e.item;return[n("p",[t._v(t._s(t._f("toUpper")(s.firstname)))])]}},{key:"item.lastname",fn:function(e){var s=e.item;return[n("p",[t._v(t._s(t._f("toUpper")(s.lastname)))])]}},{key:"item.dob",fn:function(e){var s=e.item;return[n("p",[t._v(t._s(t._f("date")(s.dateofbirth)))])]}},{key:"item.nationality",fn:function(e){var s=e.item;return[n("p",[t._v(t._s(t._f("toUpper")(s.nationality)))])]}},{key:"item.age",fn:function(e){var s=e.item;return[n("p",[t._v(t._s(t.get_age(s.dateofbirth)))])]}},{key:"item.actions",fn:function(e){var s=e.item;return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-icon",t._g({staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(s)}}},i),[t._v("\n              mdi-pencil\n            ")])]}}],null,!0)},[t._v(" "),n("span",[t._v("\n            Edit "+t._s(t._f("toUpper")(s.firstname))+" "+t._s(t._f("toUpper")(s.lastname))+"\n          ")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(e){return t.view_enrollment(s)}}},"v-icon",a,!1),i),[t._v("\n              mdi-notebook-check\n            ")])]}}],null,!0)},[t._v(" "),n("span",[t._v("\n            View schedule of "+t._s(t._f("toUpper")(s.firstname))+"\n            "+t._s(t._f("toUpper")(s.lastname))+"\n          ")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(e){return t.enroll(s)}}},"v-icon",a,!1),i),[t._v("\n              mdi-form-select\n            ")])]}}],null,!0)},[t._v(" "),n("span",[t._v("\n            Enroll "+t._s(t._f("toUpper")(s.firstname))+"\n            "+t._s(t._f("toUpper")(s.lastname))+"\n          ")])])]}}])})],1),t._v(" "),t.$store.state.Enrollments.enrollment_child_edit?n("my_edit"):t._e(),t._v(" "),t.$store.state.Enrollments.get_enrollment_open?n("my_enrollment"):t._e(),t._v(" "),t.$store.state.Enrollments.enrollment_schedule_open?n("my_schedules"):t._e()],1)}),[],!1,null,null,null);e.default=a.exports}}]);