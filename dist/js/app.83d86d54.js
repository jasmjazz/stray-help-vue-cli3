(function(e){function n(n){for(var r,c,u=n[0],i=n[1],f=n[2],d=0,h=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(h.length)h.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-08ed8ad8":"51708057","chunk-0e43ecaf":"2dddb09c","chunk-1076a740":"ddbe6f73","chunk-1417698f":"f0a57736","chunk-151af99b":"dfb6ec27","chunk-296b835d":"09bf5d2e","chunk-2f2004c5":"99263298","chunk-68f11271":"626576ff","chunk-8bf99820":"c5d9d9dd","chunk-8f717300":"a794e2b3","chunk-e548e19e":"2c89b9d2","chunk-fc4f8bf4":"74008de8"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-08ed8ad8":1,"chunk-0e43ecaf":1,"chunk-1076a740":1,"chunk-1417698f":1,"chunk-151af99b":1,"chunk-296b835d":1,"chunk-2f2004c5":1,"chunk-68f11271":1,"chunk-8bf99820":1,"chunk-8f717300":1,"chunk-e548e19e":1,"chunk-fc4f8bf4":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-08ed8ad8":"4726dbc6","chunk-0e43ecaf":"db7223b6","chunk-1076a740":"13fe9f89","chunk-1417698f":"8aa5902f","chunk-151af99b":"1ab73138","chunk-296b835d":"7a55a1be","chunk-2f2004c5":"f3f97088","chunk-68f11271":"497dbc5e","chunk-8bf99820":"7974495b","chunk-8f717300":"f11627fd","chunk-e548e19e":"0c3225f0","chunk-fc4f8bf4":"2f7e402f"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var f=o[u],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===a))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){f=h[u],d=f.getAttribute("data-href");if(d===r||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],l.parentNode.removeChild(l),t(o)},l.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var h=new Error;f=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",h.name="ChunkLoadError",h.type=r,h.request=c,t[1](h)}a[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/stray-help-vue-cli3/dist/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var l=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("8e6e");var r=t("ade3"),c=(t("456d"),t("ac6a"),t("cadf"),t("551c"),t("f751"),t("097d"),t("2b0e")),a=t("bc3a"),o=t.n(a),u=t("2106"),i=t.n(u),f=t("9062"),d=t.n(f),h=(t("e40d"),t("4989"),t("1157")),l=t.n(h),s=t("7bb1"),p=t("4c93"),b=t("60d4"),m=t("a925"),k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},v=[],g={name:"App"},y=g,O=(t("5c0b"),t("2877")),j=Object(O["a"])(y,k,v,!1,null,null,null),w=j.exports,P=t("8c4f"),E=P["a"].prototype.push;P["a"].prototype.push=function(e){return E.call(this,e).catch((function(e){return e}))},c["a"].use(P["a"]);var A=[{path:"",component:function(){return t.e("chunk-68f11271").then(t.bind(null,"de8a"))},children:[{path:"/",name:"Home",component:function(){return t.e("chunk-8f717300").then(t.bind(null,"ec5a"))}},{path:"about",name:"About",component:function(){return t.e("chunk-0e43ecaf").then(t.bind(null,"9cbb"))}},{path:"products",name:"Products",component:function(){return t.e("chunk-151af99b").then(t.bind(null,"ed84"))}},{path:"detail/:id",name:"Detail",component:function(){return t.e("chunk-2f2004c5").then(t.bind(null,"55c4"))}},{path:"checkcart",name:"CheckCart",component:function(){return t.e("chunk-296b835d").then(t.bind(null,"9be3"))}},{path:"userinfo",name:"UserInfo",component:function(){return t.e("chunk-fc4f8bf4").then(t.bind(null,"89a7"))}},{path:"ordercheck/:orderId",name:"OrderCheck",component:function(){return t.e("chunk-1417698f").then(t.bind(null,"3934c"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-1076a740").then(t.bind(null,"a55b"))}},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-8bf99820").then(t.bind(null,"a92e"))},children:[{path:"feed",name:"Feed",component:function(){return t.e("chunk-08ed8ad8").then(t.bind(null,"8cdc"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return t.e("chunk-e548e19e").then(t.bind(null,"0d5f"))},meta:{requiresAuth:!0}}]},{path:"*",redirect:"/"}],C=new P["a"]({linkActiveClass:"active",routes:A,scrollBehavior:function(e,n,t){return t||{x:0,y:0}}}),S=C;c["a"].prototype.$bus=new c["a"];t("a481"),t("c5f6");var _=function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var r=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return r})))},x=function(e){var n=new Date(1e3*e);return n.toLocaleDateString(e)};function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){Object(r["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}c["a"].config.productionTip=!1,c["a"].use(i.a,o.a),o.a.defaults.withCredentials=!0,c["a"].use(m["a"]),window.$=l.a,c["a"].component("Loading",d.a),c["a"].component("ValidationObserver",s["a"]),c["a"].component("ValidationProvider",s["b"]),Object(s["e"])("zh_TW",b),c["a"].filter("currency",_),c["a"].filter("date",x),Object.keys(p).forEach((function(e){Object(s["d"])(e,p[e])})),Object(s["c"])({classes:{valid:"valid",invalid:"invalid"}}),Object(s["d"])("required",T(T({},p["required"]),{},{message:"此欄位不可為空"})),Object(s["d"])("email",T(T({},p["email"]),{},{message:"Email 格式不正確"})),Object(s["d"])("phone",{validate:function(e){var n=/^09[0-9]{8}$/;return n.test(e)},message:"請輸入正確號碼"});var L=new m["a"]({locale:"zhTW"});new c["a"]({router:S,i18n:L,render:function(e){return e(w)}}).$mount("#app"),S.beforeEach((function(e,n,t){if(e.meta.requiresAuth){var r="".concat("https://vue-course-api.hexschool.io","/api/user/check");o.a.post(r).then((function(e){e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";t("e332")},e332:function(e,n,t){}});
//# sourceMappingURL=app.83d86d54.js.map