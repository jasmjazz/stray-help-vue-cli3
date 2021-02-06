(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b324f6"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.clickPage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return a.preventDefault(),t.clickPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.clickPage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],o={name:"Pagination",props:["pages"],methods:{clickPage:function(t){this.$emit("changePage",t)}}},r=o,c=a("2877"),n=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=n.exports},5864:function(t,e,a){},"8cdc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.openModal(!0)}}},[t._v("建立糧食")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[a("a",{staticClass:"icon",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.delModal(e)}}},[a("i",{staticClass:"fas fa-trash",staticStyle:{"font-size":"25px"}})])]),a("td",[a("h5",[0===e.category?a("span",{staticClass:"badge badge-dark"},[t._v("\n              主食\n            ")]):1===e.category?a("span",{staticClass:"badge badge-info"},[t._v("\n              副食\n            ")]):a("span",{staticClass:"badge badge-warning"},[t._v("\n              副食\n            ")])])]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.description))]),e.price?a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]):a("td"),a("td"),a("td",[e.is_enabled?a("h5",[a("span",{staticClass:"badge badge-success"},[t._v("是")])]):a("h5",[a("span",{staticClass:"badge badge-primary"},[t._v("否")])])]),a("td",[a("a",{staticClass:"icon",on:{click:function(a){return a.preventDefault(),t.openModal(!1,e)}}},[a("i",{staticClass:"far fa-edit",staticStyle:{"font-size":"25px"}})])])])})),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{changePage:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"updateModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.isNew?a("span",[t._v("新增糧食")]):a("span",[t._v("修改糧食")])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("請上傳圖片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("品名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入糧食名稱"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempProduct,"category",e.target.multiple?a:a[0])},t.select]}},[a("option",{domProps:{value:0}},[t._v("主食")]),a("option",{domProps:{value:1}},[t._v("副食")]),a("option",{domProps:{value:2}},[t._v("零食")])])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("價格")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入糧食價格"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"unit"}},[t._v("單位")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{disabled:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempProduct,"unit",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:0}},[t._v("包")]),a("option",{domProps:{value:1}},[t._v("罐")]),a("option",{domProps:{value:2}},[t._v("袋")])])])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入糧食描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("成分")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入糧食成分"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group",staticStyle:{"margin-top":"25px"}},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,i=s.checked?1:0;if(Array.isArray(a)){var o=null,r=t._i(a,o);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([o])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                    是否啟用\n                  ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",staticStyle:{opacity:"0.6"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.updateProduct(e)}}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品？\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteProduct}},[t._v("確認刪除")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"6%"}}),a("th",{attrs:{width:"8%"}},[t._v("分類")]),a("th",{attrs:{width:"14%"}},[t._v("品名")]),a("th",{attrs:{width:"42%"}},[t._v("糧食描述")]),a("th",{attrs:{width:"10%"}},[t._v("價格")]),a("th",{attrs:{width:"3%"}}),a("th",{attrs:{width:"8%"}},[t._v("啟用")]),a("th",{attrs:{width:"10%"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除糧食（刪除後將無法恢復）")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),r=a("1157"),c=a.n(r),n=a("1799");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"Feed",data:function(){return{products:[],tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},pagination:{}}},components:{Pagination:n["a"]},methods:{select:function(){var t=this;switch(t.tempProduct.category){case 0:t.tempProduct.unit=0;break;case 1:t.tempProduct.unit=1;break;default:t.tempProduct.unit=2;break}},getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("jasmjazz","/admin/products?page=").concat(t);e.isLoading=!0,e.$http.get(a).then((function(t){e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination}))},openModal:function(t,e){t?(this.tempProduct={},this.$set(this.tempProduct,"category",0),this.$set(this.tempProduct,"unit",0),this.isNew=!0):(this.tempProduct=d({},e),this.isNew=!1),c()("#updateModal").modal("show")},uploadFile:function(){var t=this,e=t.$refs.files.files[0],a=new FormData;a.append("file-to-upload",e);var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("jasmjazz","/admin/upload");t.status.fileUploading=!0,t.$http.post(s,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.success?(t.status.fileUploading=!1,t.$set(t.tempProduct,"imageUrl",e.data.imageUrl)):(t.status.fileUploading=!1,t.$bus.$emit("message: push",e.data.message,"danger"),t.$refs.files.value="")}))},updateProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("jasmjazz","/admin/product"),a="post";t.isNew||(e="".concat("https://vue-course-api.hexschool.io","/api/").concat("jasmjazz","/admin/product/").concat(t.tempProduct.id),a="put"),t.$http[a](e,{data:t.tempProduct}).then((function(e){e.data.success?(c()("#updateModal").modal("hide"),t.$bus.$emit("message: push",e.data.message),t.getProducts(),t.isLoading=!1):(c()("#updateModal").modal("hide"),t.$bus.$emit("message: push",e.data.message,"danger"),t.getProducts(),t.isLoading=!1)}))},delModal:function(t){this.tempProduct=d({},t),c()("#deleteModal").modal("show")},deleteProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("jasmjazz","/admin/product/").concat(t.tempProduct.id);t.$http.delete(e).then((function(e){e.data.success,c()("#deleteModal").modal("hide"),t.getProducts()}))}},created:function(){this.getProducts()}},p=u,m=(a("dd30"),a("2877")),v=Object(m["a"])(p,s,i,!1,null,"78747dd6",null);e["default"]=v.exports},dd30:function(t,e,a){"use strict";a("5864")}}]);
//# sourceMappingURL=chunk-42b324f6.8da55455.js.map