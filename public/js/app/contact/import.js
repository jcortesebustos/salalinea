(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{BcCH:function(t,e,s){"use strict";var a=s("XuX8"),i=new(s.n(a).a);e.a=i},ICll:function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return r}));var a=s("5TL6");function i(t,e){return Object(a.a)({url:t.url,method:"post",data:t.data,upload:!0,config:{headers:{"Content-Type":"multipart/form-data"}},headers:{"Content-Type":"multipart/form-data; charset=utf-8; boundary="+Math.random().toString().substr(2)},onUploadProgress:e})}function n(t){return Object(a.a)({url:t.url,method:"delete",data:t.data})}function o(t,e,s){return Object(a.a)({url:t.url,method:"post",data:t.data,upload:!0,config:{headers:{"Content-Type":"multipart/form-data"}},headers:{"Content-Type":"multipart/form-data; charset=utf-8; boundary="+Math.random().toString().substr(2)},onUploadProgress:e,cancelToken:s})}function r(t){return Object(a.a)({url:t.url,method:"delete",data:t.data})}},OjY7:function(t,e,s){"use strict";var a=s("vDqi"),i=s.n(a),n=s("ICll"),o=s("L2JU"),r=s("7Cbv"),l=s("BcCH"),u=s("nFxi");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){f(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function f(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var p={name:"file-uploader",components:{},props:{data:{type:Array,default:function(){return[]}},additionalFormData:{type:Object,default:function(){return{}}},requestIdentifier:{type:String,default:Object(r.a)()},url:{type:String,default:"/uploads"},heading:{type:String,default:null},actionLabel:{type:String,default:"global.choose"},nameLabel:{type:String,default:"upload.file"},namesLabel:{type:String,default:"upload.files"},buttonWrapperClasses:{type:String,default:"justify-content-start"},headingClasses:{type:String,default:"mb-0"},buttonClasses:{type:String,default:""},buttonIcon:{type:String,default:"fas fa-upload"},buttonDesign:{type:String,default:"primary"},options:{type:Object,required:!0},autoUpload:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},hideButtonLabel:{type:Boolean,default:!1},hideFileList:{type:Boolean,default:!1},hideResetButton:{type:Boolean,default:!1},hideAfterUpload:{type:Boolean,default:!1},showSelectedFilesCount:{type:Boolean,default:!1}},data:function(){return{isLoading:!1,fileRemoved:!1,actionLabelUpdated:"",files:[],uploadedFiles:[],existingFiles:[],icons:u.b,mimeTypes:u.c}},computed:d(d({},Object(o.c)("config",["configs","vars"])),{},{computedActionLabel:function(){return this.existingFile?"global.change":this.actionLabel}}),watch:{data:function(t){this.existingFiles=t.map((function(t){return d(d({},t),{},{status:null})}))},"options.uuid":{deep:!0,handler:function(t,e){t&&t!==e&&this.reset()}}},methods:{getFileIcon:function(t){return this.icons[t]||"fa-file-alt"},getFileNameIcon:function(t){return this.icons[t]||"fa-file-alt"},generateFilesList:function(t){this.isLoading=!0;var e=null,s=this.$refs.filesInput.files;if(this.options.allowedExtensions&&(e=new RegExp("(."+this.options.allowedExtensions.join("|.")+")$")),this.options.maxNoOfFiles&&s.length+this.existingFiles.length>this.options.maxNoOfFiles)this.$toasted.error(this.$t("upload.max_file_limit_crossed",{number:this.options.maxNoOfFiles}),this.$toastConfig.error);else{for(var a=0;a<s.length;a++)e&&!e.test(s[a].name)?(this.isLoading=!1,this.$toasted.error(this.$t("global.file_not_supported",{attribute:s[a].name.split(".").pop()}),this.$toastConfig.error)):s[a].size>this.configs.system.postMaxSize?(this.isLoading=!1,this.$toasted.error(this.$t("global.file_too_large",{attribute:s[a].name}),this.$toastConfig.error)):this.files.push({uuid:Object(r.a)(),file:s[a],status:"waiting",progress:0});this.isLoading=!1,this.$emit("selected",this.files.length),this.autoUpload&&this.startUploading()}},startUploading:function(){var t=this;if(this.files.filter((function(t){return"waiting"===t.status})).length){var e=[],s=i.a.CancelToken;this.$emit("uploading",this.files.length);for(var a=function(a){var i=t.files[a];if(e[a]=function(t){i.progress=Math.round(100*t.loaded/t.total)},"waiting"===i.status){var o=new FormData;o.append("file",i.file),o.append("mime",i.file.type),o.append("token",t.options.token),o.append("module",t.options.module),o.append("request_uuid",t.requestIdentifier),o.append("first_attachment",0===a),o.append("last_attachment",a===t.files.length-1),t.additionalFormData.objForEach((function(t,e){t&&(_.isObject(t)?o.append(e.snakeCase(),JSON.stringify(t)):o.append(e.snakeCase(),t))})),i.status="uploading";var r=new s((function(t){i.cancel=t}));n.c({url:t.url,data:o},e[a],r).then((function(e){e.upload?t.uploadedFiles.push(e.upload):e.attachments&&t.uploadedFiles.push(e.attachments),i.uuid=e.upload?e.upload.uuid:e.uuid,i.status="justUploaded",delete i.cancel,setTimeout((function(){i.status="uploaded",t.hideAfterUpload&&t.files.splice(t.files.findIndex((function(t){return t.uuid===i.uuid})),1)}),2e3),t.$emit("updated",e),t.checkUploadStatus(e)})).catch((function(e){if(t.$emit("error",e),e.response&&e.response.data){var s=e.response.data||{},a=s.errors?formUtil.assignErrors(s.errors):{};i.error=a.message,t.$toasted.error(a.message,t.$toastConfig.error),i.status="error",setTimeout((function(){t.files.splice(t.files.findIndex((function(t){return t.uuid===i.uuid})),1)}),3e3),t.$emit("updated",e),t.checkUploadStatus()}else i.status="cancelled",setTimeout((function(){t.files.splice(t.files.findIndex((function(t){return t.uuid===i.uuid})),1)}),3e3)}))}},o=0;o<this.files.length;o++)a(o)}},removeFile:function(t,e){var s=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];formUtil.confirmAction().then((function(e){e.value&&(s.isLoading=!0,n.a({url:s.url+"/"+t.uuid,data:{token:s.options.token,module:s.options.module}}).then((function(e){t.status="removed",setTimeout((function(){a?s.existingFiles.splice(s.existingFiles.findIndex((function(e){return e.uuid===t.uuid})),1):s.files.splice(s.files.findIndex((function(e){return e.uuid===t.uuid})),1)}),3e3),s.isLoading=!1,s.$toasted.success(e.message,s.$toastConfig.success),s.$emit("selected",s.files.length),s.$emit("updated",e),s.checkUploadStatus()})).catch((function(e){var a=e.response.data||{},i=a.errors?formUtil.assignErrors(a.errors):{};s.$toasted.error(i.message,s.$toastConfig.error),t.error=i.message,t.status="removeError"})))}))},checkUploadStatus:function(t){for(var e=!0,s=0;s<this.files.length;s++)"justUploaded"!==this.files[s].status&&"uploaded"!==this.files[s].status&&(e=!1);e?this.$emit("uploaded",this.uploadedFiles):this.$emit("error")},reset:function(){this.isLoading=!1,this.fileRemoved=!1,this.actionLabelUpdated="",this.files=[],this.uploadedFiles=[];var t=this.$refs.filesInput;t.type="text",t.type="file",this.$emit("selected",this.files.length)},startUpload:function(){this.files.length?this.startUploading():this.$emit("noNeed")}},mounted:function(){l.a.$off("START_UPLOAD",this.startUpload),l.a.$on("START_UPLOAD",this.startUpload),l.a.$off("RESET_UPLOAD",this.reset),l.a.$on("RESET_UPLOAD",this.reset),this.existingFiles=this.data.map((function(t){return d(d({},t),{},{status:null})}))},filters:{decimal:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(t).toFixed(e)}},destroyed:function(){l.a.$off("START_UPLOAD",this.startUpload),l.a.$off("RESET_UPLOAD",this.reset)}},m=s("KHd+"),h=Object(m.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sm-uploader file-uploader"},[s("div",{staticClass:"file-uploader-form"},[s("div",{class:["file-selector d-flex",t.buttonWrapperClasses]},[t.heading?s("h5",{class:["title-desc",t.headingClasses]},[t._v("\n                "+t._s(t.heading)+"\n            ")]):t._e(),t._v(" "),s("label",{class:["btn","btn-"+t.buttonDesign,t.buttonClasses]},[s("input",{ref:"filesInput",staticClass:"selector-input",attrs:{name:"filesInput",type:"file",id:"filesInput",multiple:t.multiple},on:{change:t.generateFilesList}}),t._v(" "),s("span",{staticClass:"button-icon"},[s("i",{class:t.buttonIcon})]),t._v(" "),t.hideButtonLabel?t._e():s("span",{staticClass:"button-label"},[t._v(t._s(t.$t(t.computedActionLabel,{attribute:t.$t(t.namesLabel)})))]),t._v(" "),t.showSelectedFilesCount&&t.files.length?s("span",{staticClass:"button-label bracketed"},[t._v(t._s(t.files.length))]):t._e()]),t._v(" "),t.hideFileList&&!t.hideResetButton&&t.files.length?s("button",{class:["btn","btn-"+t.buttonDesign,t.buttonClasses],attrs:{type:"button"},on:{click:t.reset}},[t._m(0)]):t._e()])]),t._v(" "),t.existingFiles.length||t.files.length?s("div",{class:["files-list-wrapper",{"d-none":t.hideFileList}]},[s("ul",{staticClass:"files-list"},[t._l(t.existingFiles,(function(e,a){return s("li",{staticClass:"file-details-row"},[s("div",{staticClass:"file-icon"},[s("span",[s("i",{class:["far",t.getFileIcon(e.mime)]})])]),t._v(" "),s("div",{staticClass:"file-details"},[s("h6",[t._v(t._s(e.filename))]),t._v(" "),e.error?s("p",{staticClass:"text-danger"},[t._v("\n                        "+t._s(e.error)+"\n                    ")]):s("p",[s("span",[s("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.type")))]),t._v(": "+t._s(t.mimeTypes[e.mime]||e.mime||"Unknown"))]),t._v(" "),s("span",{staticClass:"ml-1"},[s("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.size")))]),t._v(": "+t._s(t._f("decimal")(e.size/1024,0))+" KB")])])]),t._v(" "),s("div",{class:["status-wrapper",{"actions-wrapper":!e.status||"removeError"===e.status}]},[s("transition",{staticClass:"transition-wrapper",attrs:{appear:"",tag:"div",name:"actions",mode:"out-in"}},["removed"===e.status?s("div",{staticClass:"status-removed-wrapper"},[s("label",{staticClass:"status-text text-danger"},[t._v("Removed!")]),t._v(" "),s("span",{staticClass:"status-icon text-danger"},[s("i",{staticClass:"fas fa-trash"})])]):e.status&&"removeError"!==e.status?t._e():s("div",{staticClass:"actions-buttons"},["removeError"===e.status?s("label",{staticClass:"status-text text-danger"},[t._v("Error!")]):t._e(),t._v(" "),"removeError"===e.status?s("span",{staticClass:"status-icon text-danger"},[s("i",{staticClass:"fas fa-exclamation-triangle"})]):t._e(),t._v(" "),s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"remove-btn",attrs:{type:"button",title:t.$t("global.remove",{attribute:t.$t(t.nameLabel)})},on:{click:function(s){return t.removeFile(e,a,!0)}}},[s("i",{staticClass:"fas fa-trash"})])])])],1)])})),t._v(" "),t._l(t.files,(function(e,a){return s("li",{staticClass:"file-details-row"},[s("div",{staticClass:"file-icon"},[s("span",[s("i",{class:["far",t.getFileIcon(e.file.type)]})])]),t._v(" "),s("div",{staticClass:"file-details"},[s("h6",[t._v(t._s(e.file.name))]),t._v(" "),e.error?s("p",{staticClass:"text-danger"},[t._v("\n                        "+t._s(e.error)+"\n                    ")]):s("p",[s("span",[s("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.type")))]),t._v(": "+t._s(t.mimeTypes[e.file.type]||"Unknown"))]),t._v(" "),s("span",{staticClass:"ml-1"},[s("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.size")))]),t._v(": "+t._s(t._f("decimal")(e.file.size/1024,0))+" KB")])])]),t._v(" "),s("div",{class:["status-wrapper",{"actions-wrapper":"uploaded"===e.status||"removeError"===e.status}]},[s("transition",{staticClass:"transition-wrapper",attrs:{appear:"",tag:"div",name:"actions",mode:"out-in"}},["uploading"===e.status?s("div",{staticClass:"status-uploading-wrapper"},[s("label",{staticClass:"status-action",on:{click:e.cancel}},[t._v(t._s(t.$t("general.cancel")))]),t._v(" "),s("progress-ring",{attrs:{value:e.progress,"stroke-color":t.vars.loaderColor}})],1):"justUploaded"===e.status?s("div",{staticClass:"status-uploaded-wrapper"},[s("label",{staticClass:"status-text text-success"},[t._v("Uploaded!")]),t._v(" "),s("span",{staticClass:"status-icon text-success"},[s("i",{staticClass:"fas fa-check"})])]):"cancelled"===e.status?s("div",{staticClass:"status-cancelled-wrapper"},[s("label",{staticClass:"status-text text-danger"},[t._v("Cancelled!")]),t._v(" "),s("span",{staticClass:"status-icon text-danger"},[s("i",{staticClass:"fas fa-times"})])]):"removed"===e.status?s("div",{staticClass:"status-removed-wrapper"},[s("label",{staticClass:"status-text text-danger"},[t._v("Removed!")]),t._v(" "),s("span",{staticClass:"status-icon text-danger"},[s("i",{staticClass:"fas fa-trash"})])]):"error"===e.status?s("div",{staticClass:"status-error-wrapper"},[s("label",{staticClass:"status-text text-danger"},[t._v("Error!")]),t._v(" "),s("span",{staticClass:"status-icon text-danger"},[s("i",{staticClass:"fas fa-exclamation-triangle"})])]):"uploaded"===e.status||"removeError"===e.status?s("div",{staticClass:"actions-buttons"},["removeError"===e.status?s("label",{staticClass:"status-text text-danger"},[t._v("Error!")]):t._e(),t._v(" "),"removeError"===e.status?s("span",{staticClass:"status-icon text-danger"},[s("i",{staticClass:"fas fa-exclamation-triangle"})]):"uploaded"===e.status?s("label",{staticClass:"status-text text-success"},[t._v("Uploaded!")]):t._e(),t._v(" "),s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"remove-btn",attrs:{type:"button",title:t.$t("global.remove",{attribute:t.$t(t.nameLabel)})},on:{click:function(s){return t.removeFile(e,a)}}},[s("i",{staticClass:"fas fa-trash"})])]):t._e()])],1)])}))],2)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"button-icon"},[e("i",{staticClass:"fas fa-times"})])}],!1,null,null,null);e.a=h.exports},rIuV:function(t,e,s){"use strict";s.r(e);var a=s("L2JU"),i=s("BcCH");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){r(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={components:{FileUploader:s("OjY7").a},data:function(){return{formData:{uuid:null,columns:[],updated:!1,uploaded:!1},formErrors:{},preRequisite:{items:[],options:[]},uploaderConfig:{allowedExtensions:["csv"],maxNoOfFiles:1},initialFormData:null,isLoading:!1}},computed:o({},Object(a.c)("config",["vars"])),methods:o(o({},Object(a.b)("common",["Store","Init"])),{},{submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;formUtil.confirmAction().then((function(e){e.value&&(t.isLoading=!0,t.Store(t.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),t.clear(),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},clear:function(){this.formData.uuid=null,this.preRequisite.items=[],this.preRequisite.options=[],this.formData.columns=[],this.formData.uploaded=!1,this.formData.updated=!1},handleFileUpload:function(t){if(t.uuid){this.formData.uuid=t.uuid,this.preRequisite.items=t.items,this.preRequisite.options=t.options;var e=t.items[0],s=Array.from(Object.keys(e),(function(t){return e[t]}));this.formData.columns=s.map((function(e,s){return{selected:t.options[s]}})),this.formData.uploaded=!0,this.formData.updated=!0}}}),mounted:function(){i.a.$off("ROUTE_LEAVING",this.unsavedCheck),i.a.$on("ROUTE_LEAVING",this.unsavedCheck),this.Init({url:"contacts/import/finish"})},destroyed:function(){i.a.$off("ROUTE_LEAVING",this.unsavedCheck)},beforeRouteLeave:function(t,e,s){i.a.$emit("ROUTE_LEAVING",s)}},u=s("KHd+"),c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t.formData.uploaded?s("div",{staticClass:"mt-3"},[s("h5",{staticClass:"pb-4"},[t._v(t._s(t.$t("general.choose_columns")))]),t._v(" "),s("div",{staticClass:"row"},t._l(t.formData.columns,(function(e,a){return s("div",{staticClass:"col-12 col-md-3 mb-5"},[s("base-select",{attrs:{options:t.preRequisite.options,label:t.$t("general.column",{number:a+1}),error:t.formErrors["column"+a],"allow-empty":!1,disabled:t.isLoading},on:{"update:error":function(e){return t.$set(t.formErrors,"column"+a,e)}},model:{value:e.selected,callback:function(s){t.$set(e,"selected",s)},expression:"column.selected"}}),t._v(" "),s("h6",{staticClass:"small text-muted px-2 font-weight-bold"},[t._v("\n                        "+t._s(t.$t("general.sample"))+":\n\n                        "),s("span",{staticClass:"text-muted px-2 comma-list"},[t._l(t.preRequisite.items,(function(e){return[e[a]?s("span",[t._v(t._s(e[a]))]):t._e()]}))],2)])],1)})),0),t._v(" "),s("div",{staticClass:"form-footer"},[s("div",{staticClass:"right-side"},[s("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("global.import",{attribute:t.$t("contact.contacts")})))])],1)])]):s("div",{staticClass:"py-5"},[s("file-uploader",{attrs:{"name-label":"upload.file",options:t.uploaderConfig,multiple:!1,url:"/contacts/import/start","button-classes":"justify-content-center"},on:{updated:t.handleFileUpload}})],1)])])}),[],!1,null,null,null);e.default=c.exports}}]);
//# sourceMappingURL=import.js.map?id=2fbc4d558f6bc6f6f506