(function(e){function n(n){for(var r,c,u=n[0],i=n[1],d=n[2],h=0,l=[];h<u.length;h++)c=u[h],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(l.length)l.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1886ac60":"0ce803a1","chunk-1dd1cf85":"346576b2","chunk-2eaf5445":"a12f1664","chunk-32553371":"58ebb305","chunk-3ab6906e":"c84a8623","chunk-3ab7d66c":"d8a6177a","chunk-4088f072":"d30ccf33","chunk-62acdb64":"0f5b07d5","chunk-62b149cb":"a6d752f9","chunk-7d53ec77":"789bc47f","chunk-7ea2070c":"f3f60cbc","chunk-bab7b254":"4d39edc6"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1886ac60":1,"chunk-1dd1cf85":1,"chunk-2eaf5445":1,"chunk-32553371":1,"chunk-3ab6906e":1,"chunk-3ab7d66c":1,"chunk-4088f072":1,"chunk-62acdb64":1,"chunk-62b149cb":1,"chunk-7d53ec77":1,"chunk-7ea2070c":1,"chunk-bab7b254":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1886ac60":"759a890d","chunk-1dd1cf85":"ffd88738","chunk-2eaf5445":"0e3e7e13","chunk-32553371":"91cf7c6b","chunk-3ab6906e":"171c0f27","chunk-3ab7d66c":"0fa724ef","chunk-4088f072":"de51885b","chunk-62acdb64":"43ae15cf","chunk-62b149cb":"908e06a4","chunk-7d53ec77":"d10daa4a","chunk-7ea2070c":"dfc37a21","chunk-bab7b254":"870b3238"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===r||h===a))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],h=d.getAttribute("data-href");if(h===r||h===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],f.parentNode.removeChild(f),t(o)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(e);var l=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,t[1](l)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/stray-help-vue-cli3/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("8e6e");var r=t("ade3"),c=(t("456d"),t("ac6a"),t("cadf"),t("551c"),t("f751"),t("097d"),t("2b0e")),a=t("bc3a"),o=t.n(a),u=t("2106"),i=t.n(u),d=t("9062"),h=t.n(d),l=(t("e40d"),t("4989"),t("1157")),f=t.n(l),p=t("7bb1"),s=t("4c93"),b=t("60d4"),m=t("a925"),k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},v=[],g={name:"App"},y=g,O=(t("5c0b"),t("2877")),j=Object(O["a"])(y,k,v,!1,null,null,null),w=j.exports,P=t("8c4f"),E=P["a"].prototype.push;P["a"].prototype.push=function(e){return E.call(this,e).catch((function(e){return e}))},c["a"].use(P["a"]);var _=new P["a"]({routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-32553371").then(t.bind(null,"bb51"))}},{path:"",component:function(){return t.e("chunk-7ea2070c").then(t.bind(null,"de8a"))},children:[{path:"about",name:"About",component:function(){return t.e("chunk-62acdb64").then(t.bind(null,"9cbb"))}},{path:"products",name:"Products",component:function(){return t.e("chunk-7d53ec77").then(t.bind(null,"ed84"))}},{path:"detail/:id",name:"Detail",component:function(){return t.e("chunk-62b149cb").then(t.bind(null,"55c4"))}},{path:"checkcart",name:"CheckCart",component:function(){return t.e("chunk-2eaf5445").then(t.bind(null,"9be3"))}},{path:"userinfo",name:"UserInfo",component:function(){return t.e("chunk-3ab6906e").then(t.bind(null,"89a7"))}},{path:"ordercheck/:orderId",name:"OrderCheck",component:function(){return t.e("chunk-1886ac60").then(t.bind(null,"3934c"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-3ab7d66c").then(t.bind(null,"a55b"))}},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-1dd1cf85").then(t.bind(null,"a92e"))},children:[{path:"feed",name:"Feed",component:function(){return t.e("chunk-bab7b254").then(t.bind(null,"8cdc"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return t.e("chunk-4088f072").then(t.bind(null,"0d5f"))},meta:{requiresAuth:!0}}]},{path:"*",redirect:"/login"}]});c["a"].prototype.$bus=new c["a"];t("a481"),t("c5f6");var A=function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var r=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return r})))},S=function(e){var n=new Date(1e3*e);return n.toLocaleDateString(e)};function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){Object(r["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}c["a"].config.productionTip=!1,c["a"].use(i.a,o.a),o.a.defaults.withCredentials=!0,c["a"].use(m["a"]),window.$=f.a,c["a"].component("Loading",h.a),c["a"].component("ValidationObserver",p["a"]),c["a"].component("ValidationProvider",p["b"]),Object(p["e"])("zh_TW",b),c["a"].filter("currency",A),c["a"].filter("date",S),Object.keys(s).forEach((function(e){Object(p["d"])(e,s[e])})),Object(p["c"])({classes:{valid:"valid",invalid:"invalid"}}),Object(p["d"])("required",T(T({},s["required"]),{},{message:"此欄位不可為空"})),Object(p["d"])("email",T(T({},s["email"]),{},{message:"Email 格式不正確"})),Object(p["d"])("phone",{validate:function(e){var n=/^09[0-9]{8}$/;return n.test(e)},message:"請輸入正確號碼"});var D=new m["a"]({locale:"zhTW"});new c["a"]({router:_,i18n:D,render:function(e){return e(w)}}).$mount("#app"),_.beforeEach((function(e,n,t){if(e.meta.requiresAuth){var r="".concat(Object({NODE_ENV:"production",VUE_APP_API:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOM:"jasmjazz",BASE_URL:"/stray-help-vue-cli3/"}).API_PATH,"/api/user/check");o.a.post(r).then((function(e){e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";t("e332")},e332:function(e,n,t){}});
//# sourceMappingURL=app.8cdda4e9.js.map