(function(t){function e(e){for(var s,r,o=e[0],c=e[1],u=e[2],l=0,m=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"126d09fb"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,a[1](u)}n[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0223":function(t,e,a){"use strict";var s=a("e24e"),n=a.n(s);n.a},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"0ab0":function(t,e,a){"use strict";var s=a("2b99"),n=a.n(s);n.a},"2a17":function(t,e,a){"use strict";var s=a("9575"),n=a.n(s);n.a},"2b99":function(t,e,a){},"304d":function(t,e,a){},"3b6f":function(t,e,a){"use strict";var s=a("4084"),n=a.n(s);n.a},4084:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("umaru-nav",{staticClass:"nav-global",on:{"call-auth":t.callAuth}}),a("div",{staticClass:"main"},[a("router-view")],1),a("umaru-footer"),a("umaru-drawer",{attrs:{"is-show":t.isAuthShow},on:{"close-drawer":t.closeDrawer},scopedSlots:t._u([{key:"drawerinner",fn:function(){return[a("div",{staticClass:"authboard-mask",on:{click:t.closeDrawer}}),a("div",{staticClass:"authboard"},[a("form",[a("div",{staticClass:"authboard-close-btn",on:{click:t.closeDrawer}},[a("font-awesome-icon",{attrs:{icon:"times",size:"lg"}})],1),a("div",{staticClass:"auth-title"},[t._v(t._s(t.authTitle))]),"reg"===t.auth.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.name,expression:"auth.name"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.auth.name},on:{input:function(e){e.target.composing||t.$set(t.auth,"name",e.target.value)}}}):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.mail,expression:"auth.mail"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.auth.mail},on:{input:function(e){e.target.composing||t.$set(t.auth,"mail",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.passwd,expression:"auth.passwd"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.auth.passwd},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.authSubmit(e)},input:function(e){e.target.composing||t.$set(t.auth,"passwd",e.target.value)}}}),"reg"===t.auth.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.passwdconfirm,expression:"auth.passwdconfirm"}],attrs:{type:"password",placeholder:"确认密码"},domProps:{value:t.auth.passwdconfirm},on:{input:function(e){e.target.composing||t.$set(t.auth,"passwdconfirm",e.target.value)}}}):t._e(),a("div",{staticClass:"auth-row"},["login"===t.auth.type?a("a",{attrs:{href:""}},[t._v("忘记密码？")]):t._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.auth.message,expression:"auth.message"}],staticClass:"message-error"},[t._v("\n            "+t._s(t.auth.message)+"\n          ")]),a("div",{staticClass:"mdui-spinner"}),a("button",{staticClass:"auth-submit",class:{disabled:t.isLoading,"mdui-spinner":t.isLoading},attrs:{type:"button",disabled:t.isLoading},on:{click:t.authSubmit}},[t._v("确认")])])])]},proxy:!0}])}),a("div",{staticClass:"message-box"},t._l(t.components.message,(function(e,s){return a("umaru-message",{key:e.content+t.requestId+s,attrs:{content:e.content}})})),1)],1)},i=[],r=(a("7f7f"),a("2f62")),o=a("8c4f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"nav-local",class:{"nav-paddingtop":t.systemConfig.showSlide}},[a("div",{staticClass:"container"},[a("div",{staticClass:"scroll-screen"},[t.systemConfig.showSlide?a("umr-slider",{staticClass:"flex justify-center align-end",attrs:{screenType:"slide",sliderItems:t.sliderItems}}):t._e()],1),t.systemConfig.showRecommand?a("div",{staticClass:"plates flex justify-center"},t._l(t.plateLinks,(function(e){return a("a",{key:e.id,attrs:{href:e.href}},[t._v(t._s(e.content))])})),0):t._e()])]),a("div",{staticClass:"main"},[t.systemConfig.showRecommand?a("div",{staticClass:"recommend"},[a("div",{staticClass:"container space-between pure-g"},t._l(t.cardRec,(function(e){return a("umr-card",{key:e.id,staticClass:"pure-u-11-24 umr-card-lg",attrs:{href:e.href}},[a("div",{staticClass:"umr-card-main",attrs:{slot:"umr-card-main"},slot:"umr-card-main"},[a("img",{attrs:{src:e.src,alt:""}})]),a("div",{staticClass:"umr-card-bottom",attrs:{slot:"umr-card-bottom"},slot:"umr-card-bottom"},[a("h2",[t._v(t._s(e.title))])])])})),1)]):t._e(),a("div",{staticClass:"cardgroups"},[a("div",{staticClass:"container"},[a("div",{staticClass:"pure-g"},[a("div",{staticClass:"pure-u-1 pure-u-sm-18-24"},[a("div",{staticClass:"cats"},t._l(t.catgoryButtons,(function(e){return a("a",{key:e.id,staticClass:"btn-ellipse",class:{isActive:t.catgory.currentType===e.id},attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.catTypeSwitch(e.id)}}},[t._v(t._s(e.content))])})),0),a("div",{staticClass:"cards pure-g"},[a("div",{staticClass:"pure-u-1"},["timeline"===t.catgory.currentType?a("div",{staticClass:"cats"},t._l(t.catgory.timeline.day,(function(e,s){return a("a",{key:s,staticClass:"btn-ellipse",class:{isActive:t.catgory.timeline.whichDay===s},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.daySwitch(s)}}},[t._v(t._s(e.date))])})),0):t._e(),a("div",{staticClass:"pure-g flex space-between"},[t._l(t.cardItems,(function(e){return a("umr-card",{key:e.id,staticClass:"umr-card-sm pure-u-11-24 pure-u-sm-5-24",attrs:{href:"javascript:void(0)"},nativeOn:{click:function(a){return t.routerPush(!1,"/video/"+e.id+"/ep/1")}}},[a("div",{staticClass:"umr-card-main",attrs:{slot:"umr-card-main"},slot:"umr-card-main"},[a("div",{staticClass:"card-cover",style:{backgroundImage:"url("+e.cover+")"}})]),a("div",{staticClass:"umr-card-bottom",attrs:{slot:"umr-card-bottom"},slot:"umr-card-bottom"},[a("div",{staticClass:"umr-card-sm-title"},[t._v(t._s(e.name))]),a("div",{staticClass:"umr-card-sm-states"},[a("span",[a("font-awesome-icon",{staticClass:"card-ico",attrs:{icon:"heart"}}),t._v("\n                          "+t._s(e.collection)+"\n                        ")],1),a("span",[a("font-awesome-icon",{staticClass:"card-ico",attrs:{icon:"comment"}}),t._v("\n                          "+t._s(e.danmaku)+"\n                        ")],1),a("span",[a("font-awesome-icon",{staticClass:"card-ico",attrs:{icon:"video"}}),t._v("\n                          "+t._s(e.watch)+"\n                        ")],1)])])])})),a("div",{staticClass:"flex-fix-3"}),a("div",{staticClass:"flex-fix-4"})],2),"timeline"!==t.catgory.currentType?a("umr-pagination",{attrs:{"current-page":t.videoGroup.currentPage,"last-page":t.videoGroup.lastPage},on:{"set-currentpage":t.setCurrentpage}}):t._e()],1)])]),a("div",{staticClass:"pure-u-1 pure-u-sm-6-24 toolbar-container"},[a("div",{staticClass:"toolbar"},[t._v("最近更新")]),a("div",{staticClass:"pure-u-1"},t._l(t.toollbarItems,(function(e,s){return a("umr-card",{key:e.name+e.id,staticClass:"toolbar-items",attrs:{href:"javascript:void(0)"},nativeOn:{click:function(a){return t.routerPush(!1,"/video/"+e.id+"/ep/"+e.episodes)}}},[a("div",{staticClass:"pure-g",attrs:{slot:"umr-card-bottom"},slot:"umr-card-bottom"},[a("span",{staticClass:"tag tag-black pure-u-2-24"},[t._v(t._s(s+1))]),a("span",{staticClass:"pure-u-22-24 toolbar-title"},[t._v("\n                    "+t._s(e.name)+"\n                    "),a("span",{staticClass:"toolbar-sub"},[t._v("更新至"+t._s(e.episodes)+"集")])])])])})),1)])])])])])])},u=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"umr-slider"},[a("div",{staticClass:"umr-slider-screen"},["fade"===t.screenType?a("div",{staticClass:"umr-slider-pic"},t._l(t.imgs,(function(t){return a("a",{key:t.id,class:{fade:t.isFade},attrs:{href:t.href}},[a("img",{attrs:{src:t.src,alt:"imgs"}})])})),0):"slide"===t.screenType?a("div",{staticClass:"umr-slider-pic",class:{hasTransition:t.enableTransition},style:{transform:"translateX("+t.position+"%)"}},[a("a",{staticStyle:{transform:"translateX(-100%)"},attrs:{href:t.imgs[t.lastIndex].href}},[a("img",{attrs:{src:t.imgs[t.lastIndex].src,alt:""}})]),t._l(t.imgs,(function(t,e){return a("a",{key:t.id,ref:"pics",refInFor:!0,class:{transform:t.transformX,"transform-leave":t.transformXleave},style:{transform:"translateX("+100*e+"%)"},attrs:{href:t.href}},[a("img",{attrs:{src:t.src,alt:"imgs"}})])})),a("a",{style:{transform:"translateX("+100*t.imgs.length+"%)"},attrs:{href:t.imgs[0].href}},[a("img",{attrs:{src:t.imgs[0].src,alt:""}})])],2):t._e()]),a("div",{staticClass:"umr-slider-controllers"})])},d=[],m=(a("b54a"),{props:["screenType","sliderItems"],data:function(){return{currentIndex:0,position:0,enableTransition:!0,interval:"",tk:0}},computed:{lastIndex:function(){return this.imgs.length-1},imgs:function(){if(this.sliderItems[0]){for(var t=[],e=0;e<=this.sliderItems.length-1;e++){console.log(e);var a={id:"",isFade:!1,transformX:!1,transformXleave:!1};0===e&&(a.isFade=!1),a.src=this.sliderItems[e].image,a.href=this.sliderItems[e].link,a.id="SLIDER_"+(e+1),t.push(a)}return t}return[{id:"",src:"",href:"#",isFade:!0,transformX:!1,transformXleave:!1}]}},methods:{setTimer:function(t){var e=this;this.interval=setTimeout((function(){e[t](e.interval)}),2e3)},bootSlider:function(){switch(this.screenType){case"fade":this.setTimer("fade");break;case"slide":this.setTimer("slide"),this.listenVisibilityState(this.interval);break;case"antiSlide":this.setTimer("antiSlide"),this.listenVisibilityState(this.interval);break}},listenVisibilityState:function(t){var e=this;function a(){if("hidden"===document.visibilityState&&(clearTimeout(t),this.enableTransition=!1),"visible"===document.visibilityState){console.log(t),clearTimeout(t);var s=new Promise((function(t,s){document.removeEventListener("visibilitychange",a,!1),e.position=0,e.currentIndex=0,t("eventremoved")}));s.then((function(t){console.log(t),e.bootSlider()}))}}document.addEventListener("visibilitychange",a,!1)},fade:function(t){clearTimeout(t),this.imgs[this.currentIndex].isFade=!0,this.currentIndex+1==this.imgs.length?(this.imgs[0].isFade=!1,this.currentIndex=0):(this.imgs[this.currentIndex+1].isFade=!1,this.currentIndex+=1),this.setTimer("fade")},slide:function(t){var e=this;clearTimeout(t),this.currentIndex+=1,this.enableTransition=!0,requestAnimationFrame((function(){e.position=-100*e.currentIndex})),setTimeout((function(){e.position==-100*e.imgs.length&&(e.currentIndex=0,e.enableTransition=!1,e.position=0),e.setTimer("slide")}),1e3)},antiSlide:function(t){var e=this;clearTimeout(t),this.currentIndex-=1,this.enableTransition=!0,requestAnimationFrame((function(){e.position=-100*e.currentIndex})),setTimeout((function(){100==e.position&&(e.currentIndex=e.imgs.length-1,e.enableTransition=!1,e.position=-100*(e.imgs.length-1)),e.setTimer("antiSlide")}),1e3)}},created:function(){},mounted:function(){this.bootSlider()}}),h=m,p=(a("b511"),a("2877")),f=Object(p["a"])(h,l,d,!1,null,null,null),v=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"umr-card"},[t._t("umr-card-main"),t._t("umr-card-bottom"),t._t("umr-card-lr")],2)},b=[],C={},y=C,w=(a("0ab0"),Object(p["a"])(y,g,b,!1,null,null,null)),_=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"umr-pagination"},[a("button",{on:{click:function(e){return t.$emit("set-currentpage",t.currentPage-1)}}},[a("font-awesome-icon",{attrs:{icon:"angle-left"}})],1),a("button",{class:{"umr-pagination-btnactive":1===t.currentPage},on:{click:function(e){return t.$emit("set-currentpage",1)}}},[t._v("1")]),t.lastPage>9&&t.currentPage>=8?a("button",[t._v("···")]):t._e(),t._l(t.btnList,(function(e){return a("button",{directives:[{name:"show",rawName:"v-show",value:t.lastPage>2,expression:"lastPage > 2"}],key:e,class:{"umr-pagination-btnactive":t.currentPage===t.btnNum+e-4},on:{click:function(a){return t.$emit("set-currentpage",t.btnNum+e-4)}}},[t._v(t._s(t.btnNum+e-4))])})),t.lastPage>9&&(t.currentPage<=8||t.currentPage<=t.lastPage-7)?a("button",[t._v("···")]):t._e(),t.lastPage>1?a("button",{class:{"umr-pagination-btnactive":t.currentPage===t.lastPage},on:{click:function(e){return t.$emit("set-currentpage",t.lastPage)}}},[t._v(t._s(t.lastPage))]):t._e(),a("button",{on:{click:function(e){return t.$emit("set-currentpage",t.currentPage+1)}}},[a("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)],2)},S=[],x={props:["currentPage","lastPage"],computed:{btnList:function(){return this.lastPage<9&&this.lastPage>=3?this.lastPage-2:this.lastPage<3?0:7},btnNum:function(){return this.currentPage<8?5:this.currentPage>=8&&this.currentPage<=this.lastPage-7?this.currentPage:this.lastPage-4}},methods:{}},P=x,E=(a("6ccd"),Object(p["a"])(P,k,S,!1,null,null,null)),T=E.exports,A=(a("8e6e"),a("ac6a"),a("456d"),a("bd86"));s["a"].use(r["a"]);var O=new r["a"].Store({state:{testContent:"One",baseUrl:"https://api.xldm.me",systemConfig:{showSlide:!0,showRecommand:!1},requestId:0,components:{message:[]},user:{name:"",email:""}},mutations:{SET_USER:function(t,e){t.user.email=e.email,t.user.name=e.name},ADD_MESSAGE:function(t,e){t.components.message.push(e)},REMOVE_MESSAGE:function(t){t.components.message.shift()},REQUEST_COUNT:function(t){t.requestId+=1}},actions:{CALL_MESSAGE:function(t,e){var a=t.commit;t.state;a("ADD_MESSAGE",e),window.setTimeout((function(){a("REMOVE_MESSAGE")}),2e3)}}});function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?j(Object(a),!0).forEach((function(e){Object(A["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={store:O,computed:Object(r["d"])({baseUrl:"baseUrl",systemConfig:"systemConfig",user:"user",requestId:"requestId",components:"components"}),methods:I({},Object(r["c"])({setUser:"SET_USER",countMessage:"COUNT_MESSAGE",requestCount:"REQUEST_COUNT"}),{},Object(r["b"])({callMessage:"CALL_MESSAGE"}),{reqCount:function(){this.requestCount()}})},L={methods:{routerPush:function(t,e){window.console.log(e),t?window.open(e):this.$router.push("".concat(e))}}},M=a("bc3a"),$=a.n(M),U={name:"home",mixins:[D,L],components:{"umr-slider":v,"umr-card":_,"umr-pagination":T},computed:{cardItems:function(){switch(this.catgory.currentType){case"allanime":return this.catgory.allAnime;case"timeline":return this.catgory.timeline.data[this.catgory.timeline.whichDay]}}},data:function(){return{videoGroup:{currentPage:1,lastPage:1},cardRec:[{id:"CARD_REC01",src:a("9f0f"),href:"",title:"关于我转生变成史莱姆的这档事14"},{id:"CARD_REC02",src:a("9f0f"),href:"",title:"关于我转生变成史莱姆的这档事14"},{id:"CARD_REC03",src:a("9f0f"),href:"",title:"关于我转生变成史莱姆的这档事14"},{id:"CARD_REC04",src:a("9f0f"),href:"",title:"关于我转生变成史莱姆的这档事14"}],plateLinks:[{id:"BTN_PLATE01",href:"",content:"热门"},{id:"BTN_PLATE02",href:"",content:"最新"},{id:"BTN_PLATE03",href:"",content:"连载"},{id:"BTN_PLATE04",href:"",content:"完结"}],catgoryButtons:[{id:"allanime",content:"番剧索引"},{id:"timeline",content:"新番时间表"}],catgory:{currentType:"allanime",allAnime:[],timeline:{whichDay:"1",day:{7:{date:"周日"},1:{date:"周一"},2:{date:"周二"},3:{date:"周三"},4:{date:"周四"},5:{date:"周五"},6:{date:"周六"}},data:[]}},toollbarItems:[],sliderItems:[]}},methods:{setCurrentpage:function(t){var e=this,a=this.videoGroup.lastPage;t>this.videoGroup.lastPage?t=a:t<1&&(t=1),this.videoGroup.currentPage=t,$.a.get("".concat(this.baseUrl,"/animes?page=").concat(t,"&paginate=16")).then((function(t){console.log(t.data),e.videoGroup.lastPage=t.data.last_page,e.catgory.allAnime=t.data.data}))},catTypeSwitch:function(t){this.catgory.currentType=t},daySwitch:function(t){this.catgory.timeline.whichDay=t}},mounted:function(){var t=this;$.a.get("".concat(this.baseUrl,"/animes?page=1&paginate=16")).then((function(e){console.log(e.data),t.videoGroup.currentPage=e.data.current_page,t.videoGroup.lastPage=e.data.last_page,t.catgory.allAnime=e.data.data})),$.a.get("".concat(this.baseUrl,"/animes/recently-updated")).then((function(e){console.log(e.data),t.toollbarItems=e.data})),$.a.get("".concat(this.baseUrl,"/animes/timeline")).then((function(e){console.log(e.data),t.catgory.timeline.data=e.data})),$.a.get("".concat(this.baseUrl,"/carousel/index")).then((function(e){t.sliderItems=e.data}))}},G=U,N=(a("cccb"),Object(p["a"])(G,c,u,!1,null,null,null)),R=N.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video"},[a("div",{staticClass:"container pure-g"},[a("div",{staticClass:"pure-u-1 pure-u-md-18-24"},[a("div",{ref:"player",staticClass:"player"}),a("div",{staticClass:"danmaku"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.curDanmaku,expression:"curDanmaku"}],attrs:{type:"text",placeholder:"输入弹幕"},domProps:{value:t.curDanmaku},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createDanmaku(e)},input:function(e){e.target.composing||(t.curDanmaku=e.target.value)}}})]),a("div",{staticClass:"video-plugin-sm"},[a("div",{staticClass:"video-epgroup"},[a("div",{staticClass:"group-title"},[t._v("分集列表")]),a("div",{staticClass:"btn-group"},[t._l(t.epBtnGroup,(function(e,s){return a("button",{key:e.id,class:{active:!0===e.isActive},on:{click:function(e){return t.selectEp(s+1)}}},[t._v(t._s(s+1))])})),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"})],2)])]),a("div",{staticClass:"video-source"},[a("umr-card",[a("div",{staticClass:"umr-card-lr",attrs:{slot:"umr-card-lr"},slot:"umr-card-lr"},[a("div",{staticClass:"umr-card-lr-cover",style:{backgroundImage:t.coverUrl}}),a("div",{staticClass:"umr-card-lr-main"},[a("div",{staticClass:"title"},[t._v(t._s(t.resource.name))]),a("div",{staticClass:"key"},[a("span",{staticClass:"tag tag-black"},[t._v("播出时间:")]),t._v("\n                "+t._s(t.resource.release_time)+"\n              ")]),a("div",{staticClass:"key"},[a("span",{staticClass:"tag tag-black"},[t._v("简介:")]),t._v("\n                "+t._s(t.resource.introduction)+"\n              ")])])])])],1)]),a("div",{staticClass:"pure-u-1 pure-u-md-6-24"},[a("div",{staticClass:"video-plugin"},[a("div",{staticClass:"video-epgroup"},[a("div",{staticClass:"group-title"},[t._v("分集列表")]),a("div",{staticClass:"btn-group"},[t._l(t.epBtnGroup,(function(e,s){return a("button",{key:e.id,class:{active:!0===e.isActive},on:{click:function(e){return t.selectEp(s+1)}}},[t._v(t._s(s+1))])})),a("span",{staticClass:"fix"}),a("span",{staticClass:"fix"})],2)])])])])])},q=[],F=a("ba56"),X=a.n(F),V=a("f7a5"),J=a.n(V);window.Hls=X.a;var Q={mixins:[D],props:{msg:String},components:{"umr-card":_},computed:{coverUrl:function(){return"url(".concat(this.resource.cover,")")}},data:function(){return{resource:{},epBtnGroup:[],currentEp:0,videoResourceIndex:0,videoPlayer:{},curDanmaku:""}},methods:{selectEp:function(t){var e=this;this.$router.push("/episode/".concat(this.$route.params.id,"/ep/").concat(t)),this.activeBtn(t),$.a.get("".concat(this.baseUrl,"/animes/episode/").concat(this.resource.episode[t-1].id,"/resource")).then((function(t){console.log(t.data),e.videoPlayer=new J.a({container:e.$refs.player,screenshot:!0,video:{url:t.data[e.videoResourceIndex].resource}})}))},activeBtn:function(t){0!==this.currentEp&&(this.epBtnGroup[this.currentEp-1].isActive=!1),this.epBtnGroup[t-1].isActive=!0,this.currentEp=t},setBtnGroup:function(t){for(var e=[],a=0;a<t.episodes;a++){var s={id:t.episode[a].id,isActive:!1};e.push(s)}this.epBtnGroup=e,console.log(t)},createDanmaku:function(){this.videoPlayer.danmaku.send({text:this.curDanmaku,color:"#fff",type:"right"},(function(){console.log("ok")}),{withCredentials:!0}),this.curDanmaku=""}},created:function(){var t=this,e=this.$route.params.id,a=this.$route.params.episode;$.a.get("".concat(this.baseUrl,"/animes/").concat(e,"/info?withEpisode")).then((function(s){t.resource=s.data,console.log(s.data),t.setBtnGroup(s.data),t.activeBtn(a),$.a.get("".concat(t.baseUrl,"/animes/episode/").concat(s.data.episode[a-1].id,"/resource")).then((function(a){console.log(a.data);t.$route.params.episode;t.videoPlayer=new J.a({container:t.$refs.player,screenshot:!0,video:{url:a.data[t.videoResourceIndex].resource,type:"hls"},danmaku:{id:e,api:"".concat(t.baseUrl,"/animes/episode/danmaku/")}})}))}))}},z=Q,H=(a("3b6f"),Object(p["a"])(z,B,q,!1,null,"9645be78",null)),K=H.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"catgory"},[a("div",{staticClass:"container pure-g"},[t._l(t.catList,(function(e,s){return a("div",{key:s,staticClass:"catbar pure-u-1"},[a("span",{staticClass:"title"},[t._v(t._s(t.catbarName(s)))]),"season"===s?a("input",{attrs:{type:"number",name:"",id:"year",value:"2019"}}):t._e(),a("button",{class:{active:t.btn.isAll[s]},on:{click:function(e){t.setCat(t.catAll(s),s,!0,!0)}}},[t._v("全部")]),t._l(e,(function(e){return a("button",{key:e.name+e.id,class:{active:t.btn.catSet[s].has(e.id)&&!t.btn.isAll[s]},on:{click:function(a){return t.setCat(e.id,s,!0,!1,e.id)}}},[t._v(t._s(e.name))])}))],2)})),a("div",{staticClass:"animelist pure-g pure-u-1"},[a("umr-pagination",{attrs:{"current-page":t.currentPage,"last-page":t.lastPage},on:{"set-currentpage":t.setCurrentpage}}),t._l(t.animeList,(function(e){return a("umr-card",{key:e.id,attrs:{href:"javascript:void(0)"},nativeOn:{click:function(a){return t.routerPush(!1,"/video/"+e.id+"/ep/1")}}},[a("div",{staticClass:"umr-card-lr",attrs:{slot:"umr-card-lr"},slot:"umr-card-lr"},[a("div",{staticClass:"umr-card-lr-cover",style:{backgroundImage:"url("+e.cover+")"}}),a("div",{staticClass:"umr-card-lr-main"},[a("div",{staticClass:"title"},[t._v(t._s(e.name))]),a("div",{staticClass:"key"},[a("span",{staticClass:"tag tag-black"},[t._v("播出时间:")]),t._v("\n              "+t._s(e.release_time)+"\n            ")]),a("div",{staticClass:"key"},[a("span",{staticClass:"tag tag-black"},[t._v("简介:")]),t._v("\n              "+t._s(e.introduction)+"\n            ")])])])])})),a("umr-pagination",{attrs:{"current-page":t.currentPage,"last-page":t.lastPage},on:{"set-currentpage":t.setCurrentpage}})],2)],2)])},Y=[],Z=a("75fc"),tt=(a("5df3"),a("4f7f"),{mixins:[D,L],components:{"umr-card":_,"umr-pagination":T},computed:{allSeason:function(){for(var t=[],e=this.catList.season,a=0;a<=e.length-1;a++)t.push(e[a].id);return t},allLocal:function(){for(var t=[],e=this.catList.local,a=0;a<=e.length-1;a++)t.push(e[a].id);return t},allStyle:function(){for(var t=[],e=this.catList.style,a=0;a<=e.length-1;a++)t.push(e[a].id);return t},allType:function(){for(var t=[],e=this.catList.type,a=0;a<=e.length-1;a++)t.push(e[a].id);return t}},data:function(){return{currentPage:1,lastPage:1,cat:{season:[],local:[],style:[],type:[]},tagId:"",catList:{season:[],local:[],style:[],type:[]},btn:{isAll:{season:!0,local:!0,style:!0,type:!0},catSet:{season:Set,local:Set,style:Set,type:Set}},animeList:[]}},methods:{catAll:function(t){switch(t){case"season":return this.allSeason;case"local":return this.allLocal;case"style":return this.allStyle;case"type":return this.allType}},catbarName:function(t){switch(t){case"season":return"时间";case"local":return"地区";case"style":return"风格";case"type":return"类型"}},setCat:function(t,e,a,s,n){this.btn.isAll[e]&&!s&&(this.cat[e]=[]);var i=new Set(this.cat[e]);if(i.has(n)?i.delete(n):i.add(t),"number"===typeof t)this.cat[e]=Object(Z["a"])(i),console.log(this.cat[e]);else{for(var r=0;r<=t.length-1;r++)i.add(t[r]);this.cat[e]=Object(Z["a"])(i)}!0===a&&(this.getTagId(),this.getAnimeList()),this.setCurrentpage(1),this.setActiveBtn(e,s,i)},getTagId:function(){var t=[];t=t.concat(this.cat["season"]).concat(this.cat["local"]).concat(this.cat["style"]).concat(this.cat["type"]),this.tagId=t.join(",")},getAnimeList:function(t){var e=this,a="".concat(this.baseUrl,"/animes/?paginate=20");t&&(a+="&page=".concat(t)),""!==this.tagId&&(a+="&tag=".concat(this.tagId)),$.a.get(a).then((function(t){e.animeList=t.data.data,e.lastPage=t.data.last_page}))},setCurrentpage:function(t){t>this.lastPage?t=this.lastPage:t<1&&(t=1),this.currentPage=t,this.getAnimeList(t)},setActiveBtn:function(t,e,a){this.btn.isAll[t]=!!e,this.btn.catSet[t]=a}},created:function(){var t=this;$.a.get("".concat(this.baseUrl,"/animes/tags")).then((function(e){console.log(e),t.catList.local=e.data.area,t.setCat(t.allLocal,"local",!1,!0),t.setCat(t.allType,"type",!0,!0)}))}}),et=tt,at=(a("764e"),Object(p["a"])(et,W,Y,!1,null,"13717dbc",null)),st=at.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("div",{staticClass:"container"},[a("div",{staticClass:"pure-g flex space-between"},[t._l(t.cardRec,(function(e){return a("Card",{key:e.id,staticClass:"umr-card-sm pure-u-5-24",attrs:{href:"javascript:void(0)"},nativeOn:{click:function(a){return t.routerPush(!1,"/video/"+e.id+"/ep/1")}}},[a("div",{staticClass:"umr-card-main",attrs:{slot:"umr-card-main"},slot:"umr-card-main"},[a("div",{staticClass:"card-cover",style:{backgroundImage:"url("+e.cover+")"}})]),a("div",{staticClass:"umr-card-bottom",attrs:{slot:"umr-card-bottom"},slot:"umr-card-bottom"},[a("div",{staticClass:"umr-card-sm-title"},[t._v(t._s(e.name))]),a("div",{staticClass:"umr-card-sm-states"},[a("span",[a("font-awesome-icon",{staticClass:"card-ico",attrs:{icon:"heart"}}),t._v("\n              "+t._s(e.collection)+"\n            ")],1),a("span",[a("font-awesome-icon",{staticClass:"card-ico",attrs:{icon:"comment"}}),t._v("\n              "+t._s(e.danmaku)+"\n            ")],1),a("span",[a("font-awesome-icon",{staticClass:"card-ico",attrs:{icon:"video"}}),t._v("\n              "+t._s(e.watch)+"\n            ")],1)])])])})),a("div",{staticClass:"flex-fix-3"}),a("div",{staticClass:"flex-fix-4"})],2)])])},it=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"title mdui-valign"},[a("h1",[t._v(t._s(t.title))])]),a("div",{staticClass:"mdui-container"},[t._t("default")],2)])},ot=[],ct={name:"ContentArea",props:["title"]},ut=ct,lt=(a("be29"),Object(p["a"])(ut,rt,ot,!1,null,"152c2957",null)),dt=lt.exports,mt={name:"Search",mixins:[D,L],components:{ContentArea:dt,Card:_},data:function(){return{keywords:this.$route.params.name,cardRec:[]}},methods:{queryData:function(t){var e=this;$.a.get("".concat(this.baseUrl,"/animes/search?name=").concat(t)).then((function(t){e.cardRec=t.data}))}},watch:{"$route.params.name":function(){this.queryData(this.$route.params.name)}},mounted:function(){this.queryData(this.$route.params.name)}},ht=mt,pt=(a("2a17"),Object(p["a"])(ht,nt,it,!1,null,"13120395",null)),ft=pt.exports;s["a"].use(o["a"]);var vt=new o["a"]({routes:[{path:"/",name:"home",component:R},{path:"/video/:id/ep/:episode",name:"video",component:K},{path:"/catgory/",name:"category",component:st},{path:"/search/:name",name:"search",component:ft},{path:"/search",name:"search",component:ft},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("div",{staticClass:"container pure-g"},[a("div",{staticClass:"links-guide pure-u-1-2"},t._l(t.guideMsg,(function(e){return a("a",{key:e.id,attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.routerPush(e.outside,e.href)}}},[t._v(t._s(e.content))])})),0),a("div",{staticClass:"links-user pure-u-1-2"},[a("div",{staticClass:"searchbar",class:{"searchbar-active":t.isSarchbarActive}},[a("div",{staticClass:"search"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],attrs:{id:"search",type:"search",placeholder:"搜索"},domProps:{value:t.keywords},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.keywords=e.target.value)}}})]),a("div",[a("i",{staticClass:"mdui-icon material-icons search-icon",on:{click:t.search}},[t._v("search")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isMaskShow,expression:"isMaskShow"}],staticClass:"globalmask",on:{click:t.closeSearchbar}}),a("div",{staticClass:"search-trigger",on:{click:t.showSearchbar}},[a("i",{staticClass:"mdui-icon material-icons search-icon"},[t._v("search")])]),""===t.user.email?a("div",{staticClass:"auth"},t._l(t.authMenu,(function(e){return a("a",{key:e.id,attrs:{href:e.href},on:{click:function(a){return t.callAuth(e.id)}}},[t._v(t._s(e.content))])})),0):t._e(),""!==t.user.email?a("div",{staticClass:"auth"},t._l(t.userMenu,(function(e){return a("a",{key:e.id,attrs:{href:e.href},on:{click:e.method}},[t._v(t._s(e.content))])})),0):t._e()])])])},bt=[],Ct={mixins:[D,L],created:function(){this.userMenu[0].content=this.user.name},data:function(){return{guideMsg:[{id:"NAV_G0",href:"/",content:"首页",outside:!1},{id:"NAV_G1",href:"#",content:"论坛",outside:!0},{id:"NAV_G2",href:"/catgory",content:"分类",outside:!1}],authMenu:[{id:"login",href:"javascript:void(0)",content:"登录"},{id:"reg",href:"javascript:void(0)",content:"注册"}],userMenu:[{id:"username",href:"javascript:void(0)",content:"",method:function(){window.console.log("待定")}},{id:"reg",href:"javascript:void(0)",content:"登出",method:this.logout}],keywords:null,isSarchbarActive:!1,isMaskShow:!1}},watch:{"user.name":function(t){this.userMenu[0].content=t}},methods:{callAuth:function(t){this.$emit("call-auth",t)},search:function(){null!=this.keywords&&(this.$router.push("/search/"+this.keywords),this.closeSearchbar(),this.keywords=null)},showSearchbar:function(){this.isSarchbarActive=!0,this.isMaskShow=!0},closeSearchbar:function(){this.isSarchbarActive=!1,this.isMaskShow=!1},logout:function(){var t=this;this.reqCount(),$()({method:"post",url:"".concat(this.baseUrl,"/logout"),withCredentials:!0}).then((function(e){window.console.log(e),t.setUser({email:""}),t.callMessage({content:"登出成功"})}))}}},yt=Ct,wt=(a("0223"),Object(p["a"])(yt,gt,bt,!1,null,"893ee780",null)),_t=wt.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},St=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"pure-g"},[a("div",{staticClass:"pure-u-2-3"},[a("div",{staticClass:"theme"},[a("span",[t._v("Theme:")]),t._v("\n          UmaruTv FrontEnd\n        ")]),a("div",{staticClass:"about"},[a("span",[t._v("Menu:")]),a("a",{attrs:{href:""}})])]),a("div",{staticClass:"pure-u-1-3"})]),a("div",{staticClass:"pure-g"},[a("div",{staticClass:"copyright pure-u-1"},[t._v("Copyright © 2019 UmaruTv developteam")])])])])}],xt={data:function(){return{}}},Pt=xt,Et=(a("760c"),Object(p["a"])(Pt,kt,St,!1,null,null,null)),Tt=Et.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isMaskShow,expression:"isMaskShow"}],staticClass:"globalmask",on:{click:t.closeDrawer}})]),a("transition",{attrs:{name:"cutin-right",mode:"out-in"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isDrawerShow,expression:"isDrawerShow"}],staticClass:"umr-drawer"},[a("div",{staticClass:"drawerinner"},[t._t("drawerinner")],2)])])],1)},Ot=[],jt={props:["isShow","clickClose"],data:function(){return{isMaskShow:!1,isDrawerShow:!1}},methods:{closeDrawer:function(){this.$emit("close-drawer")}},watch:{isShow:function(t){var e=this;window.setTimeout((function(){e.isDrawerShow=t}),50),this.isMaskShow=t}}},It=jt,Dt=(a("a9fd"),Object(p["a"])(It,At,Ot,!1,null,null,null)),Lt=Dt.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"umr-message"},[t._v(t._s(t.content))])},$t=[],Ut={props:["content"]},Gt=Ut,Nt=(a("9935"),Object(p["a"])(Gt,Mt,$t,!1,null,"2b09af6b",null)),Rt=Nt.exports,Bt={name:"app",router:vt,store:O,mixins:[D],computed:Object(r["d"])({testContent:"testContent",authTitle:function(){switch(this.auth.type){case"login":return"登录";case"reg":return"注册"}}}),data:function(){return{isAuthShow:!1,auth:{type:"login",passwd:"",mail:"",name:"",passwdconfirm:"",message:""},isLoading:!1}},components:{"umaru-nav":_t,"umaru-footer":Tt,"umaru-message":Rt,"umaru-drawer":Lt},watch:{"auth.type":function(){this.auth.passwd="",this.auth.mail="",this.auth.name="",this.auth.passwdconfirm=""}},created:function(){var t=this;$()({method:"get",url:"".concat(this.baseUrl,"/user/me"),withCredentials:!0}).then((function(e){console.log(e),t.setUser({email:e.data.email,name:e.data.name})})).catch((function(t){window.console.log(t.response)}))},methods:{callAuth:function(t){var e=this;window.console.log(t),window.setTimeout((function(){e.isAuthShow=!0}),50),this.auth.type=t},closeDrawer:function(){this.isAuthShow=!1,this.auth.message=""},authSubmit:function(){var t=this;switch(this.auth.type){case"login":this.isLoading=!0;var e={email:this.auth.mail,password:this.auth.passwd},a=new FormData;return a.append("email",e.email),a.append("password",e.password),this.reqCount(),void $.a.post("".concat(this.baseUrl,"/login"),a,{withCredentials:!0}).then((function(e){t.isLoading=!1;var a=e.data.data;t.setUser(a),t.callMessage({content:"登录成功"}),t.closeDrawer()})).catch((function(e){t.isLoading=!1,window.console.log(e.response),422===e.response.status&&(console.log(t.requestId),t.callMessage({content:"登录失败"}),t.getErrContent(e.response.data.errors))}));case"reg":var s={name:this.auth.name,email:this.auth.mail,password:this.auth.passwd,password_confirmation:this.auth.passwdconfirm},n=new FormData;return n.append("name",s.name),n.append("email",s.email),n.append("password",s.password),n.append("password_confirmation",s.password_confirmation),this.reqCount(),void $.a.post("".concat(this.baseUrl,"/register"),n,{withCredentials:!0}).then((function(e){var a={email:s.email};t.setUser(a),t.callMessage({content:"注册成功"}),t.closeDrawer()})).catch((function(e){window.console.log(e.response),422===e.response.status&&(t.callMessage({content:"注册失败"}),t.getErrContent(e.response.data.errors))}))}},showAuthMessage:function(t){this.auth.message=t},getErrContent:function(t){var e="";for(var a in t)e=e+t[a]+" ";this.showAuthMessage(e)}}},qt=Bt,Ft=(a("034f"),Object(p["a"])(qt,n,i,!1,null,null,null)),Xt=Ft.exports,Vt=a("ecee"),Jt=a("ad3d"),Qt=a("c074"),zt=[Qt["d"],Qt["c"],Qt["g"],Qt["e"],Qt["a"],Qt["b"],Qt["f"]];Vt["c"].add.apply(Vt["c"],zt),s["a"].component("font-awesome-icon",Jt["a"]);a("fd30"),a("8122"),a("eccb");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Xt)}}).$mount("#app")},"64a9":function(t,e,a){},"6ccd":function(t,e,a){"use strict";var s=a("e828"),n=a.n(s);n.a},"760c":function(t,e,a){"use strict";var s=a("b675"),n=a.n(s);n.a},"764e":function(t,e,a){"use strict";var s=a("9904"),n=a.n(s);n.a},8122:function(t,e,a){},"92ae":function(t,e,a){},9534:function(t,e,a){},9575:function(t,e,a){},9904:function(t,e,a){},9935:function(t,e,a){"use strict";var s=a("304d"),n=a.n(s);n.a},"9f0f":function(t,e,a){t.exports=a.p+"img/C1.5de8a7f3.jpg"},a9fd:function(t,e,a){"use strict";var s=a("e98f"),n=a.n(s);n.a},b511:function(t,e,a){"use strict";var s=a("92ae"),n=a.n(s);n.a},b675:function(t,e,a){},be29:function(t,e,a){"use strict";var s=a("9534"),n=a.n(s);n.a},cccb:function(t,e,a){"use strict";var s=a("d563"),n=a.n(s);n.a},d563:function(t,e,a){},e24e:function(t,e,a){},e828:function(t,e,a){},e98f:function(t,e,a){},fd30:function(t,e,a){}});
//# sourceMappingURL=app.4e8886d3.js.map