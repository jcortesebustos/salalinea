(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{LF47:function(t,e,i){"use strict";var n=i("BcCH"),u=i("L2JU");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={data:function(){return{isLoading:!0,isFetching:!0,uuid:null,subUuid:null,entity:null,duplicate:!1,duplicateRoute:null,fallBackRoute:"appDashboard",initUrl:"",initSubUrl:null}},methods:a(a({},Object(u.b)("common",["Init","InitSub","Get"])),{},{getInitialData:function(){var t=this;this.isLoading=!0,this.Get(this.uuid).then((function(e){t.entity=e,t.isLoading=!1,t.isFetching=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),t.$router.push({name:t.fallBackRoute})}))}}),mounted:function(){this.$route.params.uuid&&(this.uuid=this.$route.params.uuid),this.$route.params.subUuid&&(this.subUuid=this.$route.params.subUuid),this.duplicateRoute&&this.$route.name===this.duplicateRoute&&(this.duplicate=!0),this.Init({url:this.initUrl}),this.initSubUrl&&this.InitSub({url:(this.subUuid?this.subUuid+"/":"")+this.initSubUrl}),this.getInitialData()},beforeRouteEnter:function(t,e,i){t.params.uuid?i():i({name:this.fallBackRoute})},beforeRouteLeave:function(t,e,i){n.a.$emit("ROUTE_LEAVING",i)}}},tDLN:function(t,e,i){"use strict";i.r(e);var n=i("Xldc"),u=i("LF47"),r={components:{CommonForm:n.a},extends:u.a,data:function(){return{initUrl:"site/pages",duplicateRoute:"appSitePageDuplicate",fallBackRoute:"appSitePageList"}}},a=i("KHd+"),o=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("common-form",{attrs:{"is-fetching":this.isFetching,"edit-data":this.entity,duplicate:this.duplicate}})}),[],!1,null,null,null);e.default=o.exports}}]);
//# sourceMappingURL=edit.js.map?id=e1f67fb9c0aba48c31c2