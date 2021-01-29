(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{giBA:function(t,s,e){"use strict";e.r(s);var a=e("L2JU");e("42FF");function i(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?i(Object(e),!0).forEach((function(s){r(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function r(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var c={data:function(){return{isLoading:!1}},computed:l(l(l({},Object(a.c)("config",["configs","vars"])),Object(a.c)("product",["product","isSupportValid"])),{},{hideUpdateLink:function(){return"appProductUpdate"===this.$route.name}}),mounted:function(){this.getInitialData()},methods:l(l({},Object(a.b)("product",{getProductDetails:"Get"})),{},{getInitialData:function(){var t=this;this.isLoading=!0,this.getProductDetails().then((function(){t.isLoading=!1})).catch((function(s){t.isLoading=!1,t.formErrors=formUtil.handleErrors(s)}))}})},o=e("KHd+"),d=Object(o.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("base-container",{attrs:{boxed:"","with-loader":"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Product Name")]),t._v(" "),e("h4",{staticClass:"font-weight-bold"},[t._v(t._s(t.product.name))])]),t._v(" "),e("hr",{staticClass:"my-2"}),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12 col-md-4"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Current Version")]),t._v(" "),e("p",[t._v(t._s(t.product.currentVersion))])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 text-md-center"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Latest Version")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t.product.latestVersion)+"\n                            "),t.product.currentVersion==t.product.latestVersion||t.hideUpdateLink?t._e():e("router-link",{staticClass:"badge badge-info badge-sm",attrs:{to:{name:"appProductUpdate"}}},[t._v("Update Available")]),t._v(" "),t.product.currentVersion===t.product.latestVersion?e("span",{staticClass:"badge badge-sm badge-success"},[t._v("Up-to-date")]):t._e()],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 text-md-right"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Latest Version Release")]),t._v(" "),e("p",[t._v(t._s(t._f("moment")(t.product.latestVersionRelease,t.vars.defaultDateFormat)))])])])]),t._v(" "),e("hr",{staticClass:"my-2"}),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Date of Purchase")]),t._v(" "),e("p",[t._v(t._s(t._f("moment")(t.product.dateOfPurchase,t.vars.defaultDateFormat)))])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 text-md-right"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Support Validity")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t._f("moment")(t.product.dateOfSupportExpiry,t.vars.defaultDateFormat))+" \n                            "),t.isSupportValid?e("span",{staticClass:"badge badge-sm badge-success"},[t._v("Supported")]):e("span",{staticClass:"badge badge-sm badge-danger"},[t._v("Expired")])])])])]),t._v(" "),e("hr",{staticClass:"my-2"}),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("License Type")]),t._v(" "),e("p",[t._v(t._s(t.product.licenseType))])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 text-md-right"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Registered Email ID")]),t._v(" "),e("p",[t._v(t._s(t.product.email))])])])]),t._v(" "),e("hr",{staticClass:"my-2"}),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12 col-md-4"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Purchase Code")]),t._v(" "),e("p",[t._v(t._s(t.product.purchaseCode))])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 text-md-center"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Access Code")]),t._v(" "),e("p",[t._v(t._s(t.product.accessCode))])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 text-md-right"},[e("div",{staticClass:"label-group"},[e("label",{staticClass:"text-muted"},[t._v("Checksum")]),t._v(" "),e("p",[t._v(t._s(t.product.checksum))])])])])])],1),t._v(" "),e("div",{staticClass:"col-12 col-md-6"},[e("router-view")],1)])}),[],!1,null,null,null);s.default=d.exports}}]);
//# sourceMappingURL=index.js.map?id=11de0e9964305aad5d0c