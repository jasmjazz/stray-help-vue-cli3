(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ab7d66c"],{"40d7":function(t,s,a){"use strict";a("49d0")},"49d0":function(t,s,a){},a55b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box box6"},[a("div",{staticClass:"content"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[t._m(0),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),a("button",{staticClass:"btn btn-lg btn-block mt-5",attrs:{type:"submit"}},[t._v("Sign In")]),a("p",{staticClass:"mt-2"},[a("router-link",{staticClass:"back-home",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-arrow-circle-left",staticStyle:{"margin-right":"5px"}}),t._v("Home\n            ")])],1),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2021 Stray Help")])])])])])])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h4",{staticClass:"mb-4"},[a("i",{staticClass:"fas fa-paw",staticStyle:{"margin-right":"5px"}}),t._v("\n            Admin Login\n          ")])}],n={name:"Login",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t="".concat("https://vue-course-api.hexschool.io","/admin/signin"),s=this;this.$http.post(t,s.user).then((function(t){if(t.data.success){var a=t.data.token,e=t.data.expired;document.cookie="hexToken=".concat(a,"; expires=").concat(new Date(e),";"),s.$router.push("/admin/products")}}))}}},i=n,o=(a("40d7"),a("2877")),c=Object(o["a"])(i,e,r,!1,null,"21151b02",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3ab7d66c.d8a6177a.js.map