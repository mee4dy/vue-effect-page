(function(e){function t(t){for(var a,s,c=t[0],r=t[1],l=t[2],i=0,u=[];i<c.length;i++)s=c[i],Object.prototype.hasOwnProperty.call(f,s)&&f[s]&&u.push(f[s][0]),f[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);p&&p(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,c=1;c<o.length;c++){var r=o[c];0!==f[r]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},f={app:0},n=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=r;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0f39":function(e,t,o){"use strict";o("93f7")},"37c7":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),f=o("8c4f"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("nav",[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),o("router-link",{attrs:{to:"/second-page"}},[e._v("Second Page")]),o("a",{attrs:{href:"javascript://"},on:{click:e.randomEffect}},[e._v("Random effect")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.defaultEffect,expression:"defaultEffect"}],on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.defaultEffect=t.target.multiple?o:o[0]},e.onChangeEffect]}},e._l(e.$effectPage.effects,(function(t,a){return o("option",{key:a,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0)],1),o("vue-effect-page",{attrs:{defaultEffect:e.defaultEffect}},[o("router-view")],1)],1)},s=[],c=(o("d3b7"),{name:"App",data:function(){return{defaultEffect:33}},methods:{generateRandom:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},randomEffect:function(){var e=this,t=this.generateRandom(1,67);this.$effectPage.setEffect("random-page",t),this.$router.push("/").finally((function(){e.$router.push("/random-page")}))},onChangeEffect:function(){var e=this;this.$effectPage.setEffect("second-page",this.defaultEffect),this.$router.push("/").finally((function(){e.$router.push("/second-page")}))}}}),r=c,l=(o("5c0b"),o("0c7c")),p=Object(l["a"])(r,n,s,!1,null,null,null),i=p.exports,u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"page"}},[o("h4",[e._v("MAIN PAGE")]),e.$effectPage.current?o("div",{attrs:{id:"current-effect-info"}},[o("div",[o("b",[e._v("NAME: ")]),e._v(" "),o("span",[e._v(e._s(e.$effectPage.current.name))])]),o("div",[o("b",[e._v("CODE: ")]),e._v(" "),o("span",[e._v(e._s(e.$effectPage.current.code))])])]):e._e()])},m=[],d=(o("9cc9"),{}),g=Object(l["a"])(d,u,m,!1,null,"95a4ab0a",null),C=g.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"page"}},[o("h4",[e._v("SECOND PAGE")]),e.$effectPage.current?o("div",{attrs:{id:"current-effect-info"}},[o("div",[o("b",[e._v("NAME: ")]),e._v(" "),o("span",[e._v(e._s(e.$effectPage.current.name))])]),o("div",[o("b",[e._v("CODE: ")]),e._v(" "),o("span",[e._v(e._s(e.$effectPage.current.code))])])]):e._e()])},h=[],b=(o("0f39"),{}),F=Object(l["a"])(b,v,h,!1,null,"b96dae76",null),_=F.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"page"}},[o("h4",[e._v("RANDOM EFFECT")]),e.$effectPage.current?o("div",{attrs:{id:"current-effect-info"}},[o("div",[o("b",[e._v("NAME: ")]),e._v(" "),o("span",[e._v(e._s(e.$effectPage.current.name))])]),o("div",[o("b",[e._v("CODE: ")]),e._v(" "),o("span",[e._v(e._s(e.$effectPage.current.code))])])]):e._e()])},P=[],E={data:function(){return{}}},y=E,O=(o("9a35"),Object(l["a"])(y,T,P,!1,null,"3a0f9853",null)),R=O.exports,w=(o("159b"),o("b64b"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vue-effect-container"},[o("div",{staticClass:"vue-effect-page",class:e.outClass?e.outClass:""},[o("router-view",{attrs:{name:"prev"}})],1),o("div",{staticClass:"vue-effect-page",class:e.inClass?e.inClass:""},[e._t("default")],2)])}),$=[],L=(o("7db0"),o("b0c0"),o("1276"),o("ac1f"),{name:"vue-effect-page",props:["defaultEffect"],data:function(){return{outClass:!1,inClass:"effect-page-current",nextPageClass:!1,currentPageClass:!1}},methods:{getEffectInOut:function(e){var t=null;return this.$effectPage.effects.forEach((function(o){o.id!==""+e&&o.code!==e||(t=o)})),t}},beforeCreate:function(){var e=this;this.$effectPage.setEffect=function(t,o){var a=e.$router.options.routes.find((function(e){return e.name===t}));a&&(a.effect=o)}},created:function(){var e=this;this.$router.beforeEach((function(t,o,a){var f=e.$router.options.routes.find((function(e){return e.name===t.name})),n=f&&f.effect?f.effect:e.defaultEffect;if(n){var s=e.getEffectInOut(n);s&&(e.outClass=s.outClass+" effect-page-current",e.inClass=s.inClass+" effect-page-current"),e.$set(e.$effectPage,"current",s)}t.matched[0].components.prev=o.matched[0].components.default,a()}))},mounted:function(){var e=this;"animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd".split(" ").forEach((function(t){var o=document.querySelectorAll(".vue-effect-page:last-of-type");o[0]&&o[0].addEventListener(t,(function(){e.outClass=!1,e.inClass=" effect-page-current"}))}))}}),B=L,M=(o("5dda"),Object(l["a"])(B,w,$,!1,null,null,null)),S=M.exports,I=[{id:"1",outClass:"effect-page-moveToLeft",inClass:"effect-page-moveFromRight",code:"move-to-left--from-right",name:"Move to left/ from right"},{id:"2",outClass:"effect-page-moveToRight",inClass:"effect-page-moveFromLeft",code:"move-to-right--from-left",name:"Move to right/ from left"},{id:"3",outClass:"effect-page-moveToTop",inClass:"effect-page-moveFromBottom",code:"move-to-top--from-bottom",name:"Move to top/ from bottom"},{id:"4",outClass:"effect-page-moveToBottom",inClass:"effect-page-moveFromTop",code:"move-to-bottom--from-top",name:"Move to bottom/ from top"},{id:"5",outClass:"effect-page-fade",inClass:"effect-page-moveFromRight effect-page-ontop",code:"fade---from-right",name:"Fade / from right"},{id:"6",outClass:"effect-page-fade",inClass:"effect-page-moveFromLeft effect-page-ontop",code:"fade---from-left",name:"Fade / from left"},{id:"7",outClass:"effect-page-fade",inClass:"effect-page-moveFromBottom effect-page-ontop",code:"fade---from-bottom",name:"Fade / from bottom"},{id:"8",outClass:"effect-page-fade",inClass:"effect-page-moveFromTop effect-page-ontop",code:"fade---from-top",name:"Fade / from top"},{id:"9",outClass:"effect-page-moveToLeftFade",inClass:"effect-page-moveFromRightFade",code:"fade-left---fade-right",name:"Fade left / Fade right"},{id:"10",outClass:"effect-page-moveToRightFade",inClass:"effect-page-moveFromLeftFade",code:"fade-right---fade-left",name:"Fade right / Fade left"},{id:"11",outClass:"effect-page-moveToTopFade",inClass:"effect-page-moveFromBottomFade",code:"fade-top---fade-bottom",name:"Fade top / Fade bottom"},{id:"12",outClass:"effect-page-moveToBottomFade",inClass:"effect-page-moveFromTopFade",code:"fade-bottom---fade-top",name:"Fade bottom / Fade top"},{id:"13",outClass:"effect-page-moveToLeftEasing effect-page-ontop",inClass:"effect-page-moveFromRight",code:"different-easing---from-right",name:"Different easing / from right"},{id:"14",outClass:"effect-page-moveToRightEasing effect-page-ontop",inClass:"effect-page-moveFromLeft",code:"different-easing---from-left",name:"Different easing / from left"},{id:"15",outClass:"effect-page-moveToTopEasing effect-page-ontop",inClass:"effect-page-moveFromBottom",code:"different-easing---from-bottom",name:"Different easing / from bottom"},{id:"16",outClass:"effect-page-moveToBottomEasing effect-page-ontop",inClass:"effect-page-moveFromTop",code:"different-easing---from-top",name:"Different easing / from top"},{id:"17",outClass:"effect-page-scaleDown",inClass:"effect-page-moveFromRight effect-page-ontop",code:"scale-down---from-right",name:"Scale down / from right"},{id:"18",outClass:"effect-page-scaleDown",inClass:"effect-page-moveFromLeft effect-page-ontop",code:"scale-down---from-left",name:"Scale down / from left"},{id:"19",outClass:"effect-page-scaleDown",inClass:"effect-page-moveFromBottom effect-page-ontop",code:"scale-down---from-bottom",name:"Scale down / from bottom"},{id:"20",outClass:"effect-page-scaleDown",inClass:"effect-page-moveFromTop effect-page-ontop",code:"scale-down---from-top",name:"Scale down / from top"},{id:"21",outClass:"effect-page-scaleDown",inClass:"effect-page-scaleUpDown effect-page-delay300",code:"scale-down---scale-down",name:"Scale down / scale down"},{id:"22",outClass:"effect-page-scaleDownUp",inClass:"effect-page-scaleUp effect-page-delay300",code:"scale-up---scale-up",name:"Scale up / scale up"},{id:"23",outClass:"effect-page-moveToLeft effect-page-ontop",inClass:"effect-page-scaleUp",code:"move-to-left---scale-up",name:"Move to left / scale up"},{id:"24",outClass:"effect-page-moveToRight effect-page-ontop",inClass:"effect-page-scaleUp",code:"move-to-right---scale-up",name:"Move to right / scale up"},{id:"25",outClass:"effect-page-moveToTop effect-page-ontop",inClass:"effect-page-scaleUp",code:"move-to-top---scale-up",name:"Move to top / scale up"},{id:"26",outClass:"effect-page-moveToBottom effect-page-ontop",inClass:"effect-page-scaleUp",code:"move-to-bottom---scale-up",name:"Move to bottom / scale up"},{id:"27",outClass:"effect-page-scaleDownCenter",inClass:"effect-page-scaleUpCenter effect-page-delay400",code:"scale-down---scale-up",name:"Scale down / scale up"},{id:"28",outClass:"effect-page-rotateRightSideFirst",inClass:"effect-page-moveFromRight effect-page-delay200 effect-page-ontop",code:"glue-left---from-right",name:"Glue left / from right"},{id:"29",outClass:"effect-page-rotateLeftSideFirst",inClass:"effect-page-moveFromLeft effect-page-delay200 effect-page-ontop",code:"glue-right---from-left",name:"Glue right / from left"},{id:"30",outClass:"effect-page-rotateTopSideFirst",inClass:"effect-page-moveFromTop effect-page-delay200 effect-page-ontop",code:"glue-bottom---from-top",name:"Glue bottom / from top"},{id:"31",outClass:"effect-page-rotateBottomSideFirst",inClass:"effect-page-moveFromBottom effect-page-delay200 effect-page-ontop",code:"glue-top---from-bottom",name:"Glue top / from bottom"},{id:"32",outClass:"effect-page-flipOutRight",inClass:"effect-page-flipInLeft effect-page-delay500",code:"flip-right",name:"Flip right"},{id:"33",outClass:"effect-page-flipOutLeft",inClass:"effect-page-flipInRight effect-page-delay500",code:"flip-left",name:"Flip left"},{id:"34",outClass:"effect-page-flipOutTop",inClass:"effect-page-flipInBottom effect-page-delay500",code:"flip-top",name:"Flip top"},{id:"35",outClass:"effect-page-flipOutBottom",inClass:"effect-page-flipInTop effect-page-delay500",code:"flip-bottom",name:"Flip bottom"},{id:"36",outClass:"effect-page-rotateFall effect-page-ontop",inClass:"effect-page-scaleUp",code:"fall",name:"Fall"},{id:"37",outClass:"effect-page-rotateOutNewspaper",inClass:"effect-page-rotateInNewspaper effect-page-delay500",code:"newspaper",name:"Newspaper"},{id:"38",outClass:"effect-page-rotatePushLeft",inClass:"effect-page-moveFromRight",code:"push-left---from-right",name:"Push left / from right"},{id:"39",outClass:"effect-page-rotatePushRight",inClass:"effect-page-moveFromLeft",code:"push-right---from-left",name:"Push right / from left"},{id:"40",outClass:"effect-page-rotatePushTop",inClass:"effect-page-moveFromBottom",code:"push-top---from-bottom",name:"Push top / from bottom"},{id:"41",outClass:"effect-page-rotatePushBottom",inClass:"effect-page-moveFromTop",code:"push-bottom---from-top",name:"Push bottom / from top"},{id:"42",outClass:"effect-page-rotatePushLeft",inClass:"effect-page-rotatePullRight effect-page-delay180",code:"push-left---pull-right",name:"Push left / pull right"},{id:"43",outClass:"effect-page-rotatePushRight",inClass:"effect-page-rotatePullLeft effect-page-delay180",code:"push-right---pull-left",name:"Push right / pull left"},{id:"44",outClass:"effect-page-rotatePushTop",inClass:"effect-page-rotatePullBottom effect-page-delay180",code:"push-top---pull-bottom",name:"Push top / pull bottom"},{id:"45",outClass:"effect-page-rotatePushBottom",inClass:"effect-page-rotatePullTop effect-page-delay180",code:"push-bottom---pull-top",name:"Push bottom / pull top"},{id:"46",outClass:"effect-page-rotateFoldLeft",inClass:"effect-page-moveFromRightFade",code:"fold-left---from-right",name:"Fold left / from right"},{id:"47",outClass:"effect-page-rotateFoldRight",inClass:"effect-page-moveFromLeftFade",code:"fold-right---from-left",name:"Fold right / from left"},{id:"48",outClass:"effect-page-rotateFoldTop",inClass:"effect-page-moveFromBottomFade",code:"fold-top---from-bottom",name:"Fold top / from bottom"},{id:"49",outClass:"effect-page-rotateFoldBottom",inClass:"effect-page-moveFromTopFade",code:"fold-bottom---from-top",name:"Fold bottom / from top"},{id:"50",outClass:"effect-page-moveToRightFade",inClass:"effect-page-rotateUnfoldLeft",code:"move-to-right---unfold-left",name:"Move to right / unfold left"},{id:"51",outClass:"effect-page-moveToLeftFade",inClass:"effect-page-rotateUnfoldRight",code:"move-to-left---unfold-right",name:"Move to left / unfold right"},{id:"52",outClass:"effect-page-moveToBottomFade",inClass:"effect-page-rotateUnfoldTop",code:"move-to-bottom---unfold-top",name:"Move to bottom / unfold top"},{id:"53",outClass:"effect-page-moveToTopFade",inClass:"effect-page-rotateUnfoldBottom",code:"move-to-top---unfold-bottom",name:"Move to top / unfold bottom"},{id:"54",outClass:"effect-page-rotateRoomLeftOut effect-page-ontop",inClass:"effect-page-rotateRoomLeftIn",code:"room-to-left",name:"Room to left"},{id:"55",outClass:"effect-page-rotateRoomRightOut effect-page-ontop",inClass:"effect-page-rotateRoomRightIn",code:"room-to-right",name:"Room to right"},{id:"56",outClass:"effect-page-rotateRoomTopOut effect-page-ontop",inClass:"effect-page-rotateRoomTopIn",code:"room-to-top",name:"Room to top"},{id:"57",outClass:"effect-page-rotateRoomBottomOut effect-page-ontop",inClass:"effect-page-rotateRoomBottomIn",code:"room-to-bottom",name:"Room to bottom"},{id:"58",outClass:"effect-page-rotateCubeLeftOut effect-page-ontop",inClass:"effect-page-rotateCubeLeftIn",code:"cube-to-left",name:"Cube to left"},{id:"59",outClass:"effect-page-rotateCubeRightOut effect-page-ontop",inClass:"effect-page-rotateCubeRightIn",code:"cube-to-right",name:"Cube to right"},{id:"60",outClass:"effect-page-rotateCubeTopOut effect-page-ontop",inClass:"effect-page-rotateCubeTopIn",code:"cube-to-top",name:"Cube to top"},{id:"61",outClass:"effect-page-rotateCubeBottomOut effect-page-ontop",inClass:"effect-page-rotateCubeBottomIn",code:"cube-to-bottom",name:"Cube to bottom"},{id:"62",outClass:"effect-page-rotateCarouselLeftOut effect-page-ontop",inClass:"effect-page-rotateCarouselLeftIn",code:"carousel-to-left",name:"Carousel to left"},{id:"63",outClass:"effect-page-rotateCarouselRightOut effect-page-ontop",inClass:"effect-page-rotateCarouselRightIn",code:"carousel-to-right",name:"Carousel to right"},{id:"64",outClass:"effect-page-rotateCarouselTopOut effect-page-ontop",inClass:"effect-page-rotateCarouselTopIn",code:"carousel-to-top",name:"Carousel to top"},{id:"65",outClass:"effect-page-rotateCarouselBottomOut effect-page-ontop",inClass:"effect-page-rotateCarouselBottomIn",code:"carousel-to-bottom",name:"Carousel to bottom"},{id:"66",outClass:"effect-page-rotateSidesOut",inClass:"effect-page-rotateSidesIn effect-page-delay200",code:"sides",name:"Sides"},{outClass:"effect-page-rotateSlideOut",inClass:"effect-page-rotateSlideIn",code:"slide",name:"Slide"}];a["a"].prototype.$effectPage={effects:I,current:null};var D={VueEffectPage:S};Object.keys(D).forEach((function(e){a["a"].component(e,D[e])}));var j=D;a["a"].config.productionTip=!1,a["a"].use(f["a"]),a["a"].use(j);var x=new f["a"]({mode:"history",base:"/vue-effect-page/",routes:[{path:"/",name:"home",component:C},{path:"/second-page",name:"second-page",component:_,effect:"5"},{path:"/random-page",name:"random-page",component:R}]});new a["a"]({el:"#app",render:function(e){return e(i)},router:x})},"5c0b":function(e,t,o){"use strict";o("37c7")},"5dda":function(e,t,o){"use strict";o("74ee")},"74ee":function(e,t,o){},"83f2":function(e,t,o){},"93f7":function(e,t,o){},"9a35":function(e,t,o){"use strict";o("f9d1")},"9cc9":function(e,t,o){"use strict";o("83f2")},f9d1:function(e,t,o){}});
//# sourceMappingURL=app.d54bdfa6.js.map