(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"vB7+":function(t,e,s){"use strict";s.r(e);var a=s("g+26"),r=s("BcCH"),o=s("oXok"),n={extends:a.a,components:{BFormTags:o.a},data:function(){return{formData:{uuid:null,segments:[],contacts:[],emails:[]},preRequisite:{segments:[],contacts:[]},formLabels:{segments:$t("contact.segment.segments"),contacts:$t("contact.contacts"),emails:$t("contact.emails")},initUrl:"meetings",initSubUrl:"invitees"}},mounted:function(){this.getInitialData()},beforeRouteLeave:function(t,e,s){r.a.$emit("ROUTE_LEAVING",s)}},i=s("KHd+"),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor,id:"printable"}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("base-select",{staticClass:"mb-3",attrs:{options:t.preRequisite.segments,label:t.formLabels.segments,error:t.formErrors.segments,multiple:"","close-on-select":!1,"allow-empty":!0},on:{"update:error":function(e){return t.$set(t.formErrors,"segments",e)}},model:{value:t.formData.segments,callback:function(e){t.$set(t.formData,"segments",e)},expression:"formData.segments"}}),t._v(" "),s("base-select",{staticClass:"mb-3",attrs:{options:t.preRequisite.contacts,label:t.formLabels.contacts,error:t.formErrors.contacts,multiple:"","close-on-select":!1,"allow-empty":!0},on:{"update:error":function(e){return t.$set(t.formErrors,"contacts",e)}},model:{value:t.formData.contacts,callback:function(e){t.$set(t.formData,"contacts",e)},expression:"formData.contacts"}}),t._v(" "),s("multiselect-wrapper",{attrs:{label:t.formLabels.emails,value:t.formData.emails,error:t.formErrors.emails},on:{"update:error":function(e){return t.$set(t.formErrors,"emails",e)}}},[s("b-form-tags",{staticClass:"input-group-material mb-4",attrs:{"input-id":"tags-email",placeholder:t.formLabels.emails,"input-type":"email","tag-variant":"light"},model:{value:t.formData.emails,callback:function(e){t.$set(t.formData,"emails",e)},expression:"formData.emails"}})],1),t._v(" "),s("div",{staticClass:"form-footer mt-5"},[s("div",{staticClass:"left-side"},[s("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[s("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))])],1),t._v(" "),s("div",{staticClass:"right-side"},[s("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),s("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("global.save",{attribute:t.$t("meeting.invitee.invitees")})))])],1)])],1)])}),[],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=invite.js.map?id=5132c803bea64deba7e9