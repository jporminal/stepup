(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"om3+":function(e,s,t){"use strict";t.r(s);var n=t("ksP6"),o=t.n(n),a=(t("Hj/Q"),{name:"image-upload",components:{vueDropzone:o.a},data:function(){return{dropzoneOptions:{url:"/api/STORE-MULTIPLE-IMAGES",thumbnailWidth:150,headers:{"X-CSRF-TOKEN":document.head.querySelector("[name=csrf-token]").content}}}},methods:{sendingEvent:function(e,s,t){var n=this.$store.state.Lessons.lesson_upload_image?this.$store.state.Lessons.lesson.classid:"",o=this.$store.state.Lessons.lesson_upload_image?"Service":"Product";t.append("product_id",n),t.append("type",o)},paginate:function(){var e=this.$store.state.Lessons.lesson_upload_image?this.$store.state.Lessons.lesson.classid:"";this.$store.dispatch("LESSON_IMAGES",e)}}}),i=t("KHd+"),r=Object(i.a)(a,(function(){var e=this.$createElement,s=this._self._c||e;return s("v-container",[s("v-row",{attrs:{align:"center",justify:"center","fill-height":""}},[s("v-col",{attrs:{cols:"8"}},[s("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:this.dropzoneOptions},on:{"vdropzone-sending":this.sendingEvent,"vdropzone-success":this.paginate}})],1)],1)],1)}),[],!1,null,null,null);s.default=r.exports}}]);