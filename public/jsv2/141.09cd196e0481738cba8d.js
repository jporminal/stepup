(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{"k8P+":function(e,t,s){"use strict";s.r(t);var a={name:"lists-of-lessons",data:function(){return{isActive:!1,isOpen:!1,lesson:{},buttons:[{color:"#5AB9EA",text:"Enroll",to:"shop"},{color:"#8860D0",text:"Contact Us",to:{path:"/",hash:"contactus"}}],details:"With such a wide variety of classes offered across numerous genres, click on the classes below to find out more information, to help you choose which class is best suited. We offer classes for beginners through to advanced levels, for ages 15months up to adults. Classes offered include Ballet, Street Jazz, Hip Hop, Breakdance, Lyrical Contemporary, Pointe, Acro, Gymnastics, Kinder Dance, Tots Ballet, Gym, Kinder Dance With Me, Musical Theatre, Tap & Modern, Elite, Rhythmic Gymnastics, Irish, Karate and more………..",lessons:[{name:"Acro & Gymnastics",image:"img/lessons/newest/acro-and-gymnastics.jpg",size:"12",alt:"StepUp Academy Acro & Gymnastics",item:39},{name:"Adult Classes",image:"img/lessons/newest/adult-classes.jpg",size:"12",alt:"StepUp Academy Adult Classes",item:48},{name:"Ballet",image:"img/lessons/newest/ballet.jpg",size:"12",alt:"StepUp Academy Ballet",item:34},{name:"Bloom Baby",image:"img/lessons/newest/bloom-baby.jpg",size:"12",alt:"StepUp Academy Bloom Baby",item:34},{name:"Dance Syndrome",image:"img/lessons/newest/dance-syndrome.jpg",size:"12",alt:"StepUp Academy Dance Syndrome",item:44},{name:"Elite & Competition Teams",image:"img/lessons/newest/elite-and-competition-teams.jpg",size:"12",alt:"StepUp Academy Elite and Competition Teams",item:42},{name:"Irish",image:"img/lessons/newest/irish.jpg",size:"12",alt:"StepUp Academy Irish",item:42},{name:"Kinder Dance",image:"img/lessons/newest/kinder-dance.jpg",size:"12",alt:"StepUp Academy Kinder Dance",item:35},{name:"Kinder Gym",image:"img/lessons/newest/kinder-gym.jpg",size:"12",alt:"StepUp Academy Kinder Gym",item:35},{name:"Kinder Tots",image:"img/lessons/newest/kinder-tots.jpg",size:"12",alt:"StepUp Academy Kinder Tots",item:35},{name:"Lyrical Contemporary",image:"img/lessons/newest/lyrical-contemporary.jpg",size:"12",alt:"StepUp Academy Lyrical Contemporary",item:41},{name:"Martial Arts",image:"img/lessons/newest/martial-arts.jpg",size:"12",alt:"StepUp Academy Musical Martial Arts",item:45},{name:"Musical Theatre",image:"img/lessons/newest/musical-theatre.jpg",size:"12",alt:"StepUp Academy Musical Theatre",item:45},{name:"Vocal Lessons",image:"img/lessons/newest/vocal-lessons.jpg",size:"12",alt:"StepUp Academy Vocal",item:45},{name:"Pointe",image:"img/lessons/newest/pointe.jpg",size:"12",alt:"StepUp Academy Pointe",item:45},{name:"Rhythmic Gymnastics",image:"img/lessons/newest/rhythmic-gymnastics.jpg",size:"12",alt:"StepUp Academy Rhythmic Gymnastics",item:45},{name:"Street Jazz & Hip Hop",image:"img/lessons/newest/street-jazz-and-hip-hop.jpg",size:"12",alt:"StepUp Academy Street Jazz and Hip Hop",item:36},{name:"Strengthening & Conditioning",image:"img/lessons/newest/strengthening-and-conditioning.jpg",size:"12",alt:"StepUp Academy Strenthening and Conditioning",item:43},{name:"Tap & Modern",image:"img/lessons/newest/tap-and-modern.jpg",size:"12",alt:"StepUp Academy IDTA Tap and Modern",item:37},{name:"Technical Jazz",image:"img/lessons/newest/technical-jazz.jpg",size:"12",alt:"StepUp Academy Technical Jazz",item:49},{name:"Heels",image:"img/lessons/newest/heels.jpg",size:"12",alt:"StepUp Academy Heels",item:37},{name:"StepUp Stage School",image:"img/lessons/newest/stepup-stage-school.jpg",size:"12",alt:"StepUp Academy Stage School",item:49}]}},methods:{openDetails:function(e){this.isOpen=!0,this.lesson=e},to_shop:function(e){var t={search:"",paginate:12,shopFilter:"Current",shopCategories:e};this.$store.commit("shop_filter",t),this.$router.push("/shop")}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"slant-card-staff-container"},[s("div",{staticClass:"slant-card-staff"},[s("div",{staticClass:"slant-card-staff-inner"},[s("v-container",{staticClass:"pa-4 text-center"},[s("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-center display-3"},[e._v(" Class Information ")])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("h2",{staticClass:"body-2",domProps:{innerHTML:e._s(e.details)}})]),e._v(" "),e._l(e.lessons,(function(t,a){return[s("v-col",{key:a,attrs:{cols:"12",xl:"3",md:"4"}},[s("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var i=a.hover;return[s("v-card",{staticClass:"mx-auto",attrs:{elevation:i?12:2,img:t.image,alt:t.alt,hover:"",height:e.$vuetify.breakpoint.xl?"420px":e.$vuetify.breakpoint.lg?"380px":e.$vuetify.breakpoint.md?"280px":e.$vuetify.breakpoint.sm?"640px":"338px"},on:{click:function(s){return e.openDetails(t)}}})]}}],null,!0)})],1)]}))],2),e._v(" "),s("v-dialog",{attrs:{width:"870"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[s("v-card",[s("v-img",{staticClass:"mx-auto",attrs:{src:e.lesson.image}},[s("v-btn",{attrs:{absolute:"",dark:"",text:"",top:"",right:"",color:"red"},on:{click:function(t){e.isOpen=!1}}},[s("v-icon",[e._v("mdi-close")])],1)],1)],1)],1)],1)],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);