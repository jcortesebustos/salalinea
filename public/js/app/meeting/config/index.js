(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{co8u:function(t,e,n){"use strict";n.r(e);var r=n("CUTp"),i=n("L2JU");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={components:{SubNavigationMenu:r.a},data:function(){return{isLoading:!0,navigation:[]}},computed:a(a({},Object(i.c)("config",["vars","uiConfigs"])),{},{baseRoute:function(){var t=this.$router.match({name:"appMeetingConfig"});return t?t.redirectedFrom?t.redirectedFrom:t.path:""}}),methods:a({},Object(i.b)("navigation",["GetNavigationForRoute"])),mounted:function(){var t=this;this.GetNavigationForRoute("appMeetingConfig").then((function(e){t.navigation=e,t.isLoading=!1}))}},u=n("KHd+"),p=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inner-sidebar-layout"},[e("div",{staticClass:"inner-sidebar"},[e("base-container",{staticClass:"p-0",attrs:{boxed:"","with-loader":"","is-loading":this.isLoading,"loader-color":this.vars.loaderColor}},[e("sub-navigation-menu",{attrs:{navigation:this.navigation,"base-route":this.baseRoute,menuLetterIcon:this.uiConfigs.navMenuLetterIcon}})],1)],1),this._v(" "),e("div",{staticClass:"inner-content-wrapper"},[e("transition",{attrs:{appear:"",name:"fade-transform",mode:"out-in"}},[e("router-view")],1)],1)])}),[],!1,null,"7b5f61e2",null);e.default=p.exports}}]);
//# sourceMappingURL=index.js.map?id=e9d74668ca229c94f0cc