(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e6d3935"],{"0af7":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"desk-cart"},[s("div",{staticClass:"icon",on:{click:t.checkcart}},[t.sum>0?s("div",{staticClass:"num"},[s("span",[t._v(t._s(t.sum))])]):t._e(),s("i",{staticClass:"fas fa-shopping-cart cart"})])]),s("div",{staticClass:"mobile-cart"},[s("div",{staticClass:"icon"},[t.sum>0?s("div",{staticClass:"num"},[s("span",[t._v(t._s(t.sum))])]):t._e(),s("i",{staticClass:"fas fa-shopping-cart cart"})])]),s("div",{staticClass:"aside"},[s("div",{staticClass:"list-group"},[t._m(0),0===t.cart.length?s("div",[t._m(1)]):t._l(t.cart,(function(a){return s("div",{key:a.id,staticClass:"list-group-item"},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h6",{staticClass:"category"},[0===a.category?s("span",{staticClass:"badge badge-primary"},[t._v("主食")]):1===a.category?s("span",{staticClass:"badge badge-primary"},[t._v("副食")]):s("span",{staticClass:"badge badge-primary"},[t._v("零食")])]),s("small",[s("a",{staticClass:"icon",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.delCart(a.id)}}},[s("i",{staticClass:"fas fa-trash"})])])]),s("h5",[t._v(t._s(a.title))]),s("h6",[t._v("\n          "+t._s(a.qty)+" x NT"+t._s(t._f("currency")(a.price))+"\n        ")])])})),s("div",{staticClass:"d-flex w-100 justify-content-center"},[0===t.cart.length?s("router-link",{staticClass:"nav-link close-open",attrs:{to:{name:"Products"}}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("\n            去逛逛\n          ")])]):s("router-link",{staticClass:"nav-link close-open",attrs:{to:{name:"CheckCart"}}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("\n              付款去\n          ")])])],1)],2)]),0===t.cart.length?s("div",{staticClass:"modal fade desk-modal",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(2),t._m(3),s("div",{staticClass:"modal-footer"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Products"}}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              去逛逛\n            ")])])],1)])])]):s("div",{staticClass:"modal fade desk-modal",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(4),s("div",{staticClass:"modal-body"},[s("table",{staticClass:"table cart-table",staticStyle:{width:"100%"}},[t._m(5),s("tbody",t._l(t.cart,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[s("a",{staticClass:"icon",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.delCart(a.id)}}},[s("i",{staticClass:"fas fa-trash",staticStyle:{"font-size":"20px"}})])]),0===a.category?s("td",{staticClass:"align-middle s-no"},[t._m(6,!0)]):1===a.category?s("td",{staticClass:"align-middle s-no"},[t._m(7,!0)]):s("td",{staticClass:"align-middle s-no"},[t._m(8,!0)]),s("td",{staticClass:"align-middle"},[t._v("\n                  "+t._s(a.title)+"\n                ")]),s("td",{staticClass:"align-middle text-right"},[t._v("\n                  "+t._s(t._f("currency")(a.price))+"\n                ")]),s("td",{staticClass:"s-no"}),s("td",{staticClass:"align-middle",staticStyle:{"padding-left":"23px"}},[t._v("\n                  "+t._s(a.qty)+"\n                ")]),s("td",{staticClass:"align-middle text-right s-no"},[t._v("\n                  "+t._s(t._f("currency")(a.total))+"\n                ")])])})),0),s("tfoot",[s("tr",{staticStyle:{"font-weight":"bold"}},[s("td",{staticClass:"text-right s-no",attrs:{colspan:"6"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.money)))])])])])]),s("div",{staticClass:"modal-footer"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"CheckCart"}}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              付款去\n            ")])])],1)])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"list-group-item title"},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",[t._v("購物車")]),s("i",{staticClass:"fas fa-times close-open"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex w-100 justify-content-center"},[s("h6",{staticClass:"content"},[t._v("還沒有選購糧食哦")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n            購物車\n          ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-body text-center"},[s("h5",{staticStyle:{"font-weight":"bold"}},[t._v("還沒有選擇糧食哦！")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n            購物車\n          ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",{attrs:{width:"10%"}}),s("th",{staticClass:"s-no",attrs:{width:"15%"}},[t._v("種類")]),s("th",{attrs:{width:"20%"}},[t._v("品名")]),s("th",{attrs:{width:"12%"}},[t._v("價格")]),s("th",{staticClass:"s-no",attrs:{width:"9%"}}),s("th",{attrs:{width:"20%"}},[t._v("數量")]),s("th",{staticClass:"s-no",attrs:{width:"14%"}},[t._v("小計")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",[s("span",{staticClass:"badge badge-primary"},[t._v("主食")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",[s("span",{staticClass:"badge badge-primary"},[t._v("副食")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",[s("span",{staticClass:"badge badge-primary"},[t._v("零食")])])}],n=(s("ac6a"),s("1157")),r=s.n(n),c={name:"Cart",props:["sum"],data:function(){return{cart:[],money:0,length:0}},methods:{getCart:function(){var t=this;t.money=0,t.cart=JSON.parse(localStorage.getItem("cart"))||[],t.length=t.cart.length,this.$emit("update",this.length),t.cart.length>0&&t.cart.forEach((function(a){t.money+=a.total}))},checkcart:function(){var t=this;t.getCart(),r()("#cartModal").modal("show")},delCart:function(t){var a=this;a.cart.forEach((function(s,e){s.id===t&&a.cart.splice(e,1)})),a.$emit("sum",a.length),localStorage.setItem("cart",JSON.stringify(a.cart)),a.$bus.$emit("message: push","已刪除糧食"),a.getCart()}},created:function(){this.getCart()},mounted:function(){r()(".mobile-cart").click((function(t){t.preventDefault(),r()("body").toggleClass("open")})),r()(".close-open").click((function(t){t.preventDefault(),r()("body").removeClass("open")}))}},l=c,o=s("2877"),d=Object(o["a"])(l,e,i,!1,null,"0a9f9a2f",null);a["a"]=d.exports},"16ac":function(t,a,s){t.exports=s.p+"img/img15.39dca8f6.png"},"2ba9":function(t,a,s){},"4a2f":function(t,a,s){"use strict";s("dfbe")},"55c4":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"wrap"},[s("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(a){t.isLoading=a}}}),s("Alert"),t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-11"},[s("nav",{staticClass:"nav"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("router-link",{attrs:{to:{name:"Products"}}},[t._v("糧食列表")])],1),s("span",[t._v("/")]),s("a",{staticClass:"nav-link",staticStyle:{"font-weight":"bolder"},attrs:{href:"#"}},[t._v("詳細")])])]),s("div",{staticClass:"col-1"},[s("ul",{staticClass:"nav justify-content-end"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link"},[s("Cart",{attrs:{sum:t.sum},on:{update:t.updateSum}})],1)])])])]),s("div",{staticClass:"row product-card"},[s("div",{staticClass:"col-md-6 col-sm-12"},[s("div",{staticClass:"picture"},[s("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:t.product.imageUrl,alt:"糧食"}})])]),s("div",{staticClass:"col-md-6 col-sm-12"},[s("div",{staticClass:"card border-0"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"category"},[0===t.product.category?s("span",{staticClass:"badge badge-primary"},[t._v("主食")]):1===t.product.category?s("span",{staticClass:"badge badge-primary"},[t._v("副食")]):s("span",{staticClass:"badge badge-primary"},[t._v("零食")])]),s("h3",[t._v(t._s(t.product.title))]),s("p",[t._v("\n              成分｜ "+t._s(t.product.content)+"\n            ")]),s("p",[t._v("\n              "+t._s(t.product.description)+"\n            ")]),s("h4",{staticClass:"price float-right"},[t._v("\n              NT "+t._s(t._f("currency")(t.product.price))+" │\n              "),0===t.product.unit?s("span",[t._v("包")]):1===t.product.unit?s("span",[t._v("罐")]):s("span",[t._v("袋")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"form-control",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.num=a.target.multiple?s:s[0]}}},t._l(10,(function(a){return s("option",{key:a,domProps:{value:a}},[t._v("\n                "+t._s(a)+"\n              ")])})),0),s("div"),s("div",{staticClass:"float-right"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addCart(t.product,t.num)}}},[t.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                加入購物車\n              ")])])])]),s("p",{staticStyle:{"margin-top":"10px"}},[t._v("※同個糧食至多選10組哦")])])]),t._m(1),s("h4",{staticClass:"subtitle"},[t._v("同系列糧食")]),s("hr"),s("div",{staticClass:"row same-card"},t._l(t.getSame,(function(a){return s("div",{key:a.id,staticClass:"card-group col-lg-4 col-md-6"},[s("div",{staticClass:"card border-0",on:{click:function(s){return s.preventDefault(),t.takeSame(a.id)}}},[t._m(2,!0),s("div",{staticStyle:{height:"250px","background-size":"cover"},style:{backgroundImage:"url("+a.imageUrl+")"}}),s("div",{staticClass:"card-body"},[s("h6",[0===a.category?s("span",{staticClass:"badge badge-primary"},[t._v("主食")]):1===a.category?s("span",{staticClass:"badge badge-primary"},[t._v("副食")]):s("span",{staticClass:"badge badge-primary"},[t._v("零食")])]),s("h5",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(a.title))]),s("span",{staticClass:"float-right"},[t._v("\n                NT "+t._s(t._f("currency")(a.price))+"\n              ")])])])])])})),0)],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner"},[e("img",{staticClass:"img-fluid gray",attrs:{src:s("16ac"),alt:"流浪貓狗助糧平台"}}),e("div",{staticClass:"text-box"},[e("h1",[t._v("愛心糧食")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row info"},[s("div",{staticClass:"col"},[s("div",{staticClass:"title"},[s("h4",[s("span",[t._v("—— ")]),t._v("需要你的幫忙"),s("span",[t._v(" ——")])])]),s("p",[t._v("\n          「滴水之情，激起漣漪。」"),s("br"),t._v("\n          歲末寒冬之際，流浪貓狗園區依然為糧食奔波與追尋；\n          請與我們一起愛護浪浪家園，\n          部分園區因為配送問題，物資取得不容易，所以我們親自配送你的心意直達園區。\n          眼下發生的事情還有很多，你的愛心是對牠們大大的幫助。\n        ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tab"},[s("span",[t._v("急需")])])}],n=(s("8e6e"),s("456d"),s("ade3")),r=(s("ac6a"),s("56a6")),c=s("0af7");function l(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function o(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){Object(n["a"])(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}var d={name:"Detail",data:function(){return{isLoading:!1,loadingItem:!1,products:[],productId:"",product:[],num:1,cart:[],sum:0}},components:{Alert:r["a"],Cart:c["a"]},methods:{updateSum:function(t){this.sum=t},getAllProducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("jasmjazz","/products/all");t.$http.get(a).then((function(a){t.products=a.data.products.filter((function(t){return 1===t.is_enabled}))}))},getProduct:function(){var t=this;t.productId=t.$route.params.id;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("jasmjazz","/product/").concat(t.productId);t.isLoading=!0,t.$http.get(a).then((function(a){t.product=a.data.product,t.isLoading=!1}))},getCart:function(){var t=this;t.sum=t.cart.length,t.cart=JSON.parse(localStorage.getItem("cart"))||[]},addCart:function(t,a){var s=this,e=-1;if(s.getCart(),s.cart.length>0&&s.cart.forEach((function(a,s){a.id===t.id&&(e=s)})),-1===e){var i=parseInt(t.price*a,10);s.$set(t,"qty",a),s.$set(t,"total",i),s.cart.push(t),s.$bus.$emit("message: push","已加入購物車")}else{var n=o({},s.cart[e]);n.qty+a>10?s.$bus.$emit("message: push","同個糧食不得超過10組哦","danger"):(n.qty+=a,s.$bus.$emit("message: push","已加入購物車")),n.total=parseInt(t.price*n.qty,10),s.cart.splice(e,1),s.cart.push(n)}localStorage.setItem("cart",JSON.stringify(s.cart)),s.getCart()},takeSame:function(t){this.$router.push("/detail/".concat(t)),this.getProduct()}},computed:{getSame:function(){var t=this;return t.products.filter((function(a){return a.id!==t.productId&&a.category===t.product.category}))}},created:function(){this.getAllProducts(),this.getProduct(),this.getCart()}},u=d,m=(s("8257"),s("2877")),p=Object(m["a"])(u,e,i,!1,null,"3bc6ad37",null);a["default"]=p.exports},"56a6":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,e){return s("div",{key:e,staticClass:"alert",class:"alert-"+a.status},[s("span"),t._v(t._s(a.message)+"\n  ")])})),0)},i=[],n=(s("ac6a"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s}),this.removeMessageWithTiming(s)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(s,e){s.timestamp===t&&a.messages.splice(e,1)}))}),1400)}},created:function(){var t=this;t.$bus.$on("message: push",(function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";t.updateMessage(a,s)}))}}),r=n,c=(s("4a2f"),s("2877")),l=Object(c["a"])(r,e,i,!1,null,null,null);a["a"]=l.exports},8257:function(t,a,s){"use strict";s("2ba9")},dfbe:function(t,a,s){}}]);
//# sourceMappingURL=chunk-1e6d3935.816924ef.js.map