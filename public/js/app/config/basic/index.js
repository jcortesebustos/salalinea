(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3HR4":function(r,o,t){"use strict";var e=t("o0o1"),a=t.n(e),n=t("L2JU"),i=t("8BOd");t("i8R7");function s(r,o,t,e,a,n,i){try{var s=r[n](i),c=s.value}catch(r){return void t(r)}s.done?o(c):Promise.resolve(c).then(e,a)}function c(r,o){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),t.push.apply(t,e)}return t}function f(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){l(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(t,o))}))}return r}function l(r,o,t){return o in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}o.a={components:{},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,useUserPreference:!1,dataType:null,configType:""}},computed:f(f({},Object(n.c)("config",{configsWithPreference:"configs",configs:"configsOriginal",vars:"vars"})),{},{formHasErrors:function(){var r=!1;return this.formErrors.objForEach((function(o){r=""!==o||r})),r}}),methods:f(f(f(f(f({},Object(n.b)("config",["GetConfig"])),Object(n.b)("user",["GetUser"])),Object(n.b)("navigation",["Generate"])),Object(n.b)("common",["Custom"])),{},{findActualValue:function(r,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return o.find((function(o){return o[t]===r}))||null},submit:function(){var r=this,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.formData.hasOwnProperty("type")&&(this.formData.type=this.formData.type.snakeCase());var t=!0===o||this.useUserPreference?i.e:"module"===this.configType?i.d:i.c;"function"==typeof this.beforeSubmit&&this.beforeSubmit(),t(this.formData).then((function(t){(!0===o||r.useUserPreference?r.GetUser:r.GetConfig)().then((function(){r.$toasted.success(t.message,r.$toastConfig),r.initialFormData=_.cloneDeep(r.formData),r.isLoading=!1})).catch((function(o){r.isLoading=!1,r.formErrors=formUtil.handleErrors(o)})),"function"==typeof r.afterSubmit&&r.afterSubmit(),"function"==typeof r.afterSubmitSuccess&&r.afterSubmitSuccess()})).catch((function(o){r.isLoading=!1,r.formErrors=formUtil.handleErrors(o),"function"==typeof r.afterSubmit&&r.afterSubmit(),"function"==typeof r.afterSubmitError&&r.afterSubmitError()}))},reset:function(){var r=this;formUtil.confirmAction().then((function(o){o.value&&(r.formData=Object.assign({},r.formData,_.cloneDeep(r.initialFormData)))}))},unsavedCheck:function(r){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,r)},fillPreRequisite:function(r){var o=this;this.preRequisite.objForEach((function(t,e){o.preRequisite[e]=r.hasOwnProperty(e)?r[e]:t})),this.isLoading=!1},fillFormData:function(){var r=this;this.isLoading=!0;var o=this.useUserPreference?this.configsWithPreference:this.configs;this.formData.type&&o[this.formData.type]&&(this.formData=formUtil.assignValues(this.formData,o[this.formData.type])),this.formData.types&&Array.isArray(this.formData.types)&&this.formData.types.forEach((function(t){r.formData=formUtil.assignValues(r.formData,o[t])})),this.formData.override&&this.formData.objForEach((function(t,e){t&&_.isObject(t)?r.formData[e]=formUtil.assignValues(r.formData[e],o[e]):r.formData[e]=o[e]?o[e]:t})),"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.isLoading=!1},getInitialData:function(r){var o,t=this;return(o=a.a.mark((function o(){var e;return a.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.isLoading=!0,o.prev=1,o.next=4,i.b(Object.keys(t.preRequisite).join(","));case 4:return e=o.sent,t.fillPreRequisite(e),r&&t.$nextTick((function(){r()})),o.abrupt("return",e);case 10:throw o.prev=10,o.t0=o.catch(1),t.isLoading=!1,t.formErrors=formUtil.handleErrors(o.t0),o.t0;case 15:case"end":return o.stop()}}),o,null,[[1,10]])})),function(){var r=this,t=arguments;return new Promise((function(e,a){var n=o.apply(r,t);function i(r){s(n,e,a,i,c,"next",r)}function c(r){s(n,e,a,i,c,"throw",r)}i(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(r,o,t){this.unsavedCheck(t)}}},PTvL:function(r,o,t){"use strict";t.r(o);var e={extends:t("3HR4").a,data:function(){return{formData:{orgName:"",orgFoundationDate:"",orgTaxNumber:"",orgRunningBody:"",orgRecognitionNumber:"",orgRecognitionBody:"",orgAddressLine1:"",orgAddressLine2:"",orgCity:"",orgState:"",orgZipcode:"",orgCountry:"",orgPhone:"",orgFax:"",orgEmail:"",orgWebsite:"",appName:"",appDesc:"",appThemeColor:"",appBackgroundColor:"",appStartUrl:"",appScope:"",type:"basic"}}}},a=t("KHd+"),n=Object(a.a)(e,(function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("base-container",{attrs:{boxed:"","with-loader":"","is-loading":r.isLoading,"loader-color":r.vars.loaderColor}},[t("form",{on:{submit:function(o){return o.preventDefault(),r.submit(o)}}},[t("h5",{staticClass:"mb-4 pb-2 border-bottom"},[r._v(r._s(r.$t("config.basic.org_information")))]),r._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{"auto-focus":"",label:r.$t("config.basic.org_name"),type:"text",error:r.formErrors.orgName},on:{"update:error":function(o){return r.$set(r.formErrors,"orgName",o)}},model:{value:r.formData.orgName,callback:function(o){r.$set(r.formData,"orgName",o)},expression:"formData.orgName"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_foundation_date"),"addon-right-icon":"far fa-calendar-alt",type:"text",error:r.formErrors.orgFoundationDate,"is-wrapper":!0},on:{"update:error":function(o){return r.$set(r.formErrors,"orgFoundationDate",o)}},model:{value:r.formData.orgFoundationDate,callback:function(o){r.$set(r.formData,"orgFoundationDate",o)},expression:"formData.orgFoundationDate"}},[t("date-picker",{staticClass:"form-control datepicker",attrs:{config:r.vars.datepickerConfig},model:{value:r.formData.orgFoundationDate,callback:function(o){r.$set(r.formData,"orgFoundationDate",o)},expression:"formData.orgFoundationDate"}})],1)],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_tax_number"),type:"text",error:r.formErrors.orgTaxNumber},on:{"update:error":function(o){return r.$set(r.formErrors,"orgTaxNumber",o)}},model:{value:r.formData.orgTaxNumber,callback:function(o){r.$set(r.formData,"orgTaxNumber",o)},expression:"formData.orgTaxNumber"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_running_body"),type:"text",error:r.formErrors.orgRunningBody},on:{"update:error":function(o){return r.$set(r.formErrors,"orgRunningBody",o)}},model:{value:r.formData.orgRunningBody,callback:function(o){r.$set(r.formData,"orgRunningBody",o)},expression:"formData.orgRunningBody"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_recognition_body"),type:"text",error:r.formErrors.orgRecognitionBody},on:{"update:error":function(o){return r.$set(r.formErrors,"orgRecognitionBody",o)}},model:{value:r.formData.orgRecognitionBody,callback:function(o){r.$set(r.formData,"orgRecognitionBody",o)},expression:"formData.orgRecognitionBody"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_recognition_number"),type:"text",error:r.formErrors.orgRecognitionNumber},on:{"update:error":function(o){return r.$set(r.formErrors,"orgRecognitionNumber",o)}},model:{value:r.formData.orgRecognitionNumber,callback:function(o){r.$set(r.formData,"orgRecognitionNumber",o)},expression:"formData.orgRecognitionNumber"}})],1)]),r._v(" "),t("h5",{staticClass:"mb-4 mt-5 pb-2 border-bottom"},[r._v(r._s(r.$t("config.basic.app_information")))]),r._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.app_name"),type:"text",error:r.formErrors.appName},on:{"update:error":function(o){return r.$set(r.formErrors,"appName",o)}},model:{value:r.formData.appName,callback:function(o){r.$set(r.formData,"appName",o)},expression:"formData.appName"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.app_desc"),type:"text",error:r.formErrors.appDesc},on:{"update:error":function(o){return r.$set(r.formErrors,"appDesc",o)}},model:{value:r.formData.appDesc,callback:function(o){r.$set(r.formData,"appDesc",o)},expression:"formData.appDesc"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.app_theme_color"),type:"text",error:r.formErrors.appThemeColor},on:{"update:error":function(o){return r.$set(r.formErrors,"appThemeColor",o)}},model:{value:r.formData.appThemeColor,callback:function(o){r.$set(r.formData,"appThemeColor",o)},expression:"formData.appThemeColor"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.app_background_color"),type:"text",error:r.formErrors.appBackgroundColor},on:{"update:error":function(o){return r.$set(r.formErrors,"appBackgroundColor",o)}},model:{value:r.formData.appBackgroundColor,callback:function(o){r.$set(r.formData,"appBackgroundColor",o)},expression:"formData.appBackgroundColor"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.app_start_url"),type:"text",error:r.formErrors.appStartUrl},on:{"update:error":function(o){return r.$set(r.formErrors,"appStartUrl",o)}},model:{value:r.formData.appStartUrl,callback:function(o){r.$set(r.formData,"appStartUrl",o)},expression:"formData.appStartUrl"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-md-4 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.app_scope"),type:"text",error:r.formErrors.appScope},on:{"update:error":function(o){return r.$set(r.formErrors,"appScope",o)}},model:{value:r.formData.appScope,callback:function(o){r.$set(r.formData,"appScope",o)},expression:"formData.appScope"}})],1)]),r._v(" "),t("h5",{staticClass:"mb-4 mt-5 pb-2 border-bottom"},[r._v(r._s(r.$t("config.basic.contact_information")))]),r._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_address_line1"),type:"text",error:r.formErrors.orgAddressLine1},on:{"update:error":function(o){return r.$set(r.formErrors,"orgAddressLine1",o)}},model:{value:r.formData.orgAddressLine1,callback:function(o){r.$set(r.formData,"orgAddressLine1",o)},expression:"formData.orgAddressLine1"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-6 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_address_line2"),type:"text",error:r.formErrors.orgAddressLine2},on:{"update:error":function(o){return r.$set(r.formErrors,"orgAddressLine2",o)}},model:{value:r.formData.orgAddressLine2,callback:function(o){r.$set(r.formData,"orgAddressLine2",o)},expression:"formData.orgAddressLine2"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-3 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_city"),type:"text",error:r.formErrors.orgCity},on:{"update:error":function(o){return r.$set(r.formErrors,"orgCity",o)}},model:{value:r.formData.orgCity,callback:function(o){r.$set(r.formData,"orgCity",o)},expression:"formData.orgCity"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-3 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_state"),type:"text",error:r.formErrors.orgState},on:{"update:error":function(o){return r.$set(r.formErrors,"orgState",o)}},model:{value:r.formData.orgState,callback:function(o){r.$set(r.formData,"orgState",o)},expression:"formData.orgState"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-3 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_zipcode"),type:"text",error:r.formErrors.orgZipcode},on:{"update:error":function(o){return r.$set(r.formErrors,"orgZipcode",o)}},model:{value:r.formData.orgZipcode,callback:function(o){r.$set(r.formData,"orgZipcode",o)},expression:"formData.orgZipcode"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-3 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_country"),type:"text",error:r.formErrors.orgCountry},on:{"update:error":function(o){return r.$set(r.formErrors,"orgCountry",o)}},model:{value:r.formData.orgCountry,callback:function(o){r.$set(r.formData,"orgCountry",o)},expression:"formData.orgCountry"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-3 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_phone"),type:"text",error:r.formErrors.orgPhone},on:{"update:error":function(o){return r.$set(r.formErrors,"orgPhone",o)}},model:{value:r.formData.orgPhone,callback:function(o){r.$set(r.formData,"orgPhone",o)},expression:"formData.orgPhone"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-3 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_fax"),type:"text",error:r.formErrors.orgFax},on:{"update:error":function(o){return r.$set(r.formErrors,"orgFax",o)}},model:{value:r.formData.orgFax,callback:function(o){r.$set(r.formData,"orgFax",o)},expression:"formData.orgFax"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-3 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_email"),type:"text",error:r.formErrors.orgEmail},on:{"update:error":function(o){return r.$set(r.formErrors,"orgEmail",o)}},model:{value:r.formData.orgEmail,callback:function(o){r.$set(r.formData,"orgEmail",o)},expression:"formData.orgEmail"}})],1),r._v(" "),t("div",{staticClass:"col-12 col-sm-3 mb-4"},[t("base-input",{attrs:{label:r.$t("config.basic.org_website"),type:"text",error:r.formErrors.orgWebsite},on:{"update:error":function(o){return r.$set(r.formErrors,"orgWebsite",o)}},model:{value:r.formData.orgWebsite,callback:function(o){r.$set(r.formData,"orgWebsite",o)},expression:"formData.orgWebsite"}})],1)]),r._v(" "),t("div",{staticClass:"text-right mt-5"},[t("base-button",{attrs:{type:"button",design:"light"},on:{click:r.reset}},[r._v(r._s(r.$t("general.reset")))]),r._v(" "),t("base-button",{attrs:{type:"submit",design:"primary"}},[r._v(r._s(r.$t("general.save")))])],1)])])}),[],!1,null,null,null);o.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=c72c34e126f2e3d5cd7b