(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ab6906e"],{"55f9":function(e,t,s){"use strict";s("ecc4")},"89a7":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrap"},[s("loading",{attrs:{active:e.isLoading,loader:"dots"},on:{"update:active":function(t){e.isLoading=t}}}),e._m(0),s("div",{staticClass:"form"},[s("div",{staticClass:"col"},[s("div",{staticClass:"card"},[e._m(1),s("div",{staticClass:"card-body"},[s("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[s("div",{staticClass:"my-2 row justify-content-center"},[s("form",{staticClass:"col-md-6",on:{submit:function(t){return t.preventDefault(),a(e.createOrder)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("捐助人姓名 *")]),s("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,r=t.classes;return[s("div",{class:r},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"}],staticClass:"form-control",attrs:{type:"text",id:"buyer-name",placeholder:"請輸入姓名"},domProps:{value:e.form.user.name},on:{input:function(t){t.target.composing||e.$set(e.form.user,"name",t.target.value)}}}),s("span",{staticClass:"text-danger"},[e._v(e._s(a[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("捐助人電話 *")]),s("ValidationProvider",{attrs:{rules:"required|phone"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,r=t.classes;return[s("div",{class:r},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"text",id:"usertel",placeholder:"請輸入電話號碼"},domProps:{value:e.form.user.tel},on:{input:function(t){t.target.composing||e.$set(e.form.user,"tel",t.target.value)}}}),s("span",{staticClass:"text-danger"},[e._v(e._s(a[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useremail"}},[e._v("Email *")]),s("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,r=t.classes;return[s("div",{class:r},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:e.form.user.email},on:{input:function(t){t.target.composing||e.$set(e.form.user,"email",t.target.value)}}}),s("span",{staticClass:"text-danger"},[e._v(e._s(a[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useraddress"}},[e._v("\n                  捐助人地址"),s("span",{staticStyle:{color:"green"}},[e._v("（如需園區簽收單，請務必填寫）")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:e.form.user.address},on:{input:function(t){t.target.composing||e.$set(e.form.user,"address",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"comment"}},[e._v("想說的話")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10",placeholder:"說說你的想法吧"},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}})]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("填寫完成")])])])])]}}])})],1)])])])],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row sop"},[s("div",{staticClass:"col-md-4 col-sm-12"},[s("div",{staticClass:"alert alert-dark",attrs:{role:"alert"}},[e._v("\n        1. 糧食明細\n        "),s("i",{staticClass:"fas fa-check-circle"})])]),s("div",{staticClass:"col-md-4 col-sm-12",staticStyle:{"font-weight":"bold"}},[s("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v("\n        2. 填寫資料\n      ")])]),s("div",{staticClass:"col-md-4 col-sm-12"},[s("div",{staticClass:"alert alert-dark",attrs:{role:"alert"}},[e._v("\n        3. 完成捐糧\n      ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center"},[s("h4",{staticClass:"title"},[s("i",{staticClass:"fas fa-paw"}),e._v("\n            捐助人資訊\n          ")])])}],o={name:"UserInfo",data:function(){return{isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{createOrder:function(){var e=this,t="".concat("https://vue-course-api.hexschool.io","/api/").concat("jasmjazz","/order"),s=e.form;e.isLoading=!0,e.$http.post(t,{data:s}).then((function(t){t.data.success?(e.isLoading=!1,e.$router.push("/ordercheck/".concat(t.data.orderId)),localStorage.removeItem("cart")):e.isLoading=!1}))}}},i=o,l=(s("55f9"),s("2877")),n=Object(l["a"])(i,a,r,!1,null,"173d4696",null);t["default"]=n.exports},ecc4:function(e,t,s){}}]);
//# sourceMappingURL=chunk-3ab6906e.c84a8623.js.map