!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s="mnd1")}({"2KUI":function(e,t,s){"use strict";try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}},"5tLK":function(e,t,s){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},Bxln:function(e,t,s){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},aqiC:function(e,t,s){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},jLCR:function(e,t,s){"use strict";try{self["workbox:cacheable-response:5.1.4"]&&_()}catch(e){}},mnd1:function(e,t,s){"use strict";s.r(t);function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var i,o,c={white:"#ffffff",whitish:"#fafbfd",blackish:"#131517",black:"#000000",gray100:"#f8f9fd",gray200:"#e9ecf1",gray300:"#dee2e9",gray400:"#ced4dd",gray500:"#adb5c0",gray600:"#6c7580",gray700:"#495060",gray800:"#343a43",gray900:"#212532",blue:"#5e72e4",indigo:"#581b98",purple:"#7a22a5",pink:"#f3a4b5",red:"#f5365c",redish:"#e00c51",orange:"#fb6340",yellow:"#ffd600",green:"#2dce89",teal:"#2bffc6",cyan:"#11cdef",primary:"#581b98","dark-primary":"#320f57","light-primary":"#7e27d9",secondary:"#e00c51","dark-secondary":"#970837",success:"#2dce89",info:"#11cdef",warning:"#fb6340",danger:"#f5365c",default:"#0a346d","gray-lightest":"#f8f9fd","gray-lighter":"#e9ecf1","gray-light":"#dee2e9",light:"#dee2e9","gray-chalk":"#ced4dd",gray:"#adb5c0",dark:"#6c7580","gray-dark":"#6c7580","gray-darker":"#495060","gray-charcoal":"#343a43","gray-darkest":"#212532"},h={wrap:!0,allowInput:!1,dateFormat:"Y-m-d",altInput:!0,altFormat:"F j, Y",locale:{firstDayOfWeek:1}},l=a(a({},h),{},{mode:"range"}),u=a(a({},h),{},{mode:"multiple"}),d="KodeMint",p="production",m="1.0.0",f={appName:d,appEnv:p,appVersion:m,localStorageKey:d+"_"+p,localStorageVersionKey:d+"_"+p+"_version",serviceWorkerKey:d+"_"+p,serviceWorkerVersion:"v1.7.0",defaultDateTimeFormat:"lll",defaultDateFormat:"ll",defaultTimeFormat:"LT",serverTimeFormat:"HH:mm:ss",serverDateFormat:"YYYY-MM-DD",serverDateTimeFormat:"YYYY-MM-DD HH:mm:ss",monthYearFormat:"MMM YYYY",datepickerConfig:h,timepickerConfig:{enableTime:!0,noCalendar:!0,altFormat:"h:i K",dateFormat:"H:i:S",time_24hr:!1,wrap:!0,allowInput:!1,altInput:!0},datepickerRangeConfig:l,datepickerMultipleConfig:u,datetimepickerConfig:{enableTime:!0,wrap:!0,allowInput:!1,altFormat:"F j, Y h:i K",dateFormat:"Y-m-d H:i:S",time_24hr:!1,altInput:!0,locale:{firstDayOfWeek:1}},monthpickerConfig:{wrap:!0,allowInput:!1,dateFormat:"Y-m",altInput:!0,altFormat:"F Y",locale:{firstDayOfWeek:1}},onMonthOrYearChange:function(e,t,s){s.setDate(new Date(s.currentYear,s.currentMonth),!0)},daymonthpickerConfig:{wrap:!0,allowInput:!1,dateFormat:"m-d",altInput:!0,altFormat:"F j",locale:{firstDayOfWeek:1}},momentToDatepicker:{"D-MM-YY":"j-m-y","D-MM-YYYY":"j-m-Y","DD-MM-YYYY":"d-m-Y","MM-DD-YYYY":"m-d-Y","YYYY-MM-DD":"Y-m-d","MMM D, YYYY":"M j, Y","MMMM D, YYYY":"F j, Y","dddd, MMM D, YYYY":"l, M j, Y","dddd, MMMM D, YYYY":"l, F j, Y","D MMM YYYY":"j M Y","D MMMM YYYY":"j F Y","dddd, D MMM YYYY":"l, j M Y","dddd, D MMMM YYYY":"l, j F Y"},momentToTimepicker:{"H:m":"H:i","H:m a":"H:i K","H:m A":"H:i K","H:mm":"H:i K","H:mm a":"H:i K","H:mm A":"H:i K","HH:mm":"H:i K","HH:mm a":"H:i K","HH:mm A":"H:i K","h:m":"h:i K","h:m a":"h:i K","h:m A":"h:i K","h:mm":"h:i K","h:mm a":"h:i K","h:mm A":"h:i K","hh:mm":"h:i K","hh:mm a":"h:i K","hh:mm A":"h:i K","H:m:ss":"H:i:S","H:m:ss a":"H:i:S K","H:m:ss A":"H:i:S K","H:mm:ss":"H:i:S K","H:mm:ss a":"H:i:S K","H:mm:ss A":"H:i:S K","HH:mm:ss":"H:i:S","HH:mm:ss a":"H:i:S K","HH:mm:ss A":"H:i:S K","h:m:ss":"h:i:S K","h:m:ss a":"h:i:S K","h:m:ss A":"h:i:S K","h:mm:ss":"h:i:S K","h:mm:ss a":"h:i:S K","h:mm:ss A":"h:i:S K","hh:mm:ss":"h:i:S K","hh:mm:ss a":"h:i:S K","hh:mm:ss A":"h:i:S K"},momentToMonthpicker:{"MMM YYYY":"M Y","MMMM YYYY":"F Y"},loaderColor:c.primary,colors:c,colorsForStatus:{activated:"success",PENDING_APPROVAL:"info",disapproved:"warning",pending_activation:"primary",banned:"dark",pending:"primary",approved:"success",allotted:"success",rejected:"danger",cancelled:"danger",unpaid:"danger",paid:"success",partially_paid:"warning",not_applicable:"dark",open:"info",closed:"success",partially_closed:"primary",missed:"dark","meeting-scheduled":"primary","meeting-cancelled":"danger","meeting-live":"success"},currencyIcons:{INR:"rupee-sign",USD:"dollar-sign"},keepAddingOptions:[{uuid:"clear_all",name:"clear_all"},{uuid:"clear_all_but_selected",name:"clear_all_but_selected"},{uuid:"clear_only_selected",name:"clear_only_selected"}],defaultCurrency:{description:"United States Dollar",name:"USD",symbol:"$",icon:"dollar-sign",position:"prefix",decimal:2,thousand:3,decimal_delimeter:".",thousand_delimeter:","},momentCalendarShortLocale:{lastDay:"Yesterday",sameDay:"LT",lastWeek:"ll",sameElse:"ll"}};"undefined"!=typeof window&&(i=window.location.hostname,o=(o=(i=i.replace("www.","").replace(/\./g,""))+"_"+d+"_"+p).toLowerCase(),f.appName=d=window.kmenv.name||d,f.appEnv=p=window.kmenv.env||p,f.appVersion=m=window.kmenv.version||m,f.localStorageKey=o,f.localStorageVersionKey=o+"_version",f.serviceWorkerKey=o);var g=f;s("Bxln");const w=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class y extends Error{constructor(e,t){super(w(e,t)),this.name=e,this.details=t}}const _=new Set;const v={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},b=e=>[v.prefix,e,v.suffix].filter(e=>e&&e.length>0).join("-"),x=e=>{(e=>{for(const t of Object.keys(v))e(t)})(t=>{"string"==typeof e[t]&&(v[t]=e[t])})},M=e=>e||b(v.precache),R=e=>e||b(v.runtime);const Y=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),q=(e,t)=>e.filter(e=>t in e),O=async({request:e,mode:t,plugins:s=[]})=>{const n=q(s,"cacheKeyWillBeUsed");let a=e;for(const e of n)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},K=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const r=await self.caches.open(e),i=await O({plugins:a,request:t,mode:"read"});let o=await r.match(i,n);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;o=await a.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:o,request:i})}return o},N=async({cacheName:e,request:t,response:s,event:n,plugins:a=[],matchOptions:r})=>{const i=await O({plugins:a,request:t,mode:"write"});if(!s)throw new y("cache-put-with-no-response",{url:Y(i.url)});const o=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(a=await n.call(t,{request:e,response:a,event:s}),!a)break}return r||(a=a&&200===a.status?a:void 0),a||null})({event:n,plugins:a,response:s,request:i});if(!o)return void 0;const c=await self.caches.open(e),h=q(a,"cacheDidUpdate"),l=h.length>0?await K({cacheName:e,matchOptions:r,request:i}):null;try{await c.put(i,o)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of _)await e()}(),e}for(const t of h)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:l,newResponse:o,request:i})},k=K;let S;function T(e){e.then(()=>{})}class E{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(i,o)=>{const c=i.objectStore(e),h=t?c.index(t):c,l=[],u=h.openCursor(s,n);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),a&&l.length>=a?o(l):e.continue()):o(l)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,a)=>{const r=this._db.transaction(e,t);r.onabort=()=>a(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,a)=>{const r=s.objectStore(t),i=r[e].apply(r,n);i.onsuccess=()=>a(i.result)})}close(){this._db&&(this._db.close(),this._db=null)}}E.prototype.OPEN_TIMEOUT=2e3;const U={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(U))for(const s of t)s in IDBObjectStore.prototype&&(E.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});const D=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=q(n,"fetchDidFail"),r=a.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,a=e.clone();e=await n.call(t,{request:a,event:s})}}catch(e){throw new y("plugin-error-request-will-fetch",{thrownError:e})}const i=e.clone();try{let a;a="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(a=await e.fetchDidSucceed.call(e,{event:s,request:i,response:a}));return a}catch(e){0;for(const t of a)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:r.clone(),request:i.clone()});throw e}};async function H(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,r=function(){if(void 0===S){const e=new Response("");if("body"in e)try{new Response(e.body),S=!0}catch(e){S=!1}S=!1}return S}()?s.body:await s.blob();return new Response(r,a)}s("xwD5");const C=[],L={get:()=>C,add(e){C.push(...e)}};function j(e){if(!e)throw new y("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new y("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),a=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:a.href}}class A{constructor(e){this._cacheName=M(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=j(s),a="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new y("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new y("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this._cacheName),r=await a.keys(),i=new Set(r.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const o=s.map(({cacheKey:s,url:n})=>{const a=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:r,event:e,integrity:a,plugins:t,url:n})});await Promise.all(o);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:n,plugins:a,integrity:r}){const i=new Request(t,{integrity:r,cache:s,credentials:"same-origin"});let o,c=await D({event:n,plugins:a,request:i});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:n,request:i,response:c}):c.status<400))throw new y("bad-precaching-response",{url:t,status:c.status});c.redirected&&(c=await H(c)),await N({event:n,plugins:a,response:c,request:e===t?i:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this._cacheName)).match(s)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new y("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new y("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let F;const P=()=>(F||(F=new A),F);const I=(e,t)=>{const s=P().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let W=!1;function B(e){W||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const a=M();self.addEventListener("fetch",r=>{const i=I(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return void 0;let o=self.caches.open(a).then(e=>e.match(i)).then(e=>e||fetch(i));r.respondWith(o)})})(e),W=!0)}function V(e){return P().matchPrecache(e)}const Q=e=>{const t=P(),s=L.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},$=e=>{const t=P();e.waitUntil(t.activate())};function G(e,t){!function(e){P().addToCacheList(e),e.length>0&&(self.addEventListener("install",Q),self.addEventListener("activate",$))}(e),B(t)}s("5tLK");const J=e=>e&&"object"==typeof e?e:{handle:e};class z{constructor(e,t,s="GET"){this.handler=J(t),this.match=e,this.method=s}}class X extends z{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class Z{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:n,route:a}=this.findMatchingRoute({url:s,request:e,event:t});let r=a&&a.handler;if(!r&&this._defaultHandler&&(r=this._defaultHandler),!r)return void 0;let i;try{i=r.handle({url:s,request:e,event:t,params:n})}catch(e){i=Promise.reject(e)}return i instanceof Promise&&this._catchHandler&&(i=i.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),i}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const a of n){let n;const r=a.match({url:e,request:t,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=J(e)}setCatchHandler(e){this._catchHandler=J(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new y("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new y("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let ee;const te=()=>(ee||(ee=new Z,ee.addFetchListener(),ee.addCacheListener()),ee);function se(e,t,s){let n;if("string"==typeof e){const a=new URL(e,location.href);0;n=new z(({url:e})=>e.href===a.href,t,s)}else if(e instanceof RegExp)n=new X(e,t,s);else if("function"==typeof e)n=new z(e,t,s);else{if(!(e instanceof z))throw new y("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return te().registerRoute(n),n}s("aqiC");class ne{constructor(e={}){this._cacheName=R(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let s,n=await k({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(n)0;else{0;try{n=await this._getFromNetwork(t,e)}catch(e){s=e}0}if(!n)throw new y("no-response",{url:t.url,error:s});return n}async _getFromNetwork(e,t){const s=await D({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=s.clone(),a=N({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(a)}catch(e){0}return s}}const ae={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class re{constructor(e={}){if(this._cacheName=R(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[ae,...e.plugins]}else this._plugins=[ae];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let a;if(this._networkTimeoutSeconds){const{id:r,promise:i}=this._getTimeoutPromise({request:t,event:e,logs:s});a=r,n.push(i)}const r=this._getNetworkPromise({timeoutId:a,request:t,event:e,logs:s});n.push(r);let i=await Promise.race(n);if(i||(i=await r),!i)throw new y("no-response",{url:t.url});return i}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let a,r;try{r=await D({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){a=e}if(e&&clearTimeout(e),a||!r)r=await this._respondFromCache({request:t,event:n});else{const e=r.clone(),s=N({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){0}}return r}_respondFromCache({event:e,request:t}){return k({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}class ie{constructor(e={}){if(this._cacheName=R(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[ae,...e.plugins]}else this._plugins=[ae];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const s=this._getFromNetwork({request:t,event:e});let n,a=await k({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(a){if(e)try{e.waitUntil(s)}catch(n){0}}else{0;try{a=await s}catch(e){n=e}}if(!a)throw new y("no-response",{url:t.url,error:n});return a}async _getFromNetwork({request:e,event:t}){const s=await D({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=N({cacheName:this._cacheName,request:e,response:s.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(n)}catch(e){0}return s}}s("2KUI");const oe=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class ce{constructor(e){this._cacheName=e,this._db=new E("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=oe(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",(s,n)=>{const a=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let i=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?r.push(s.value):i++),s.continue()}else n(r)}}),n=[];for(const e of s)await this._db.delete("cache-entries",e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+oe(e)}}class he{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new ce(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,T(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class le{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);T(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),_.add(t))}_getCacheExpiration(e){if(e===R())throw new y("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new he(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s("jLCR");class ue{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}class de{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new ue(e)}}var pe,me;self.addEventListener("install",()=>self.skipWaiting()),self.addEventListener("activate",()=>self.clients.claim()),pe={prefix:g.serviceWorkerKey.toLowerCase(),suffix:g.serviceWorkerVersion,precache:"precache",runtime:"runtime",googleAnalytics:"google-analytics"},x(pe),G([{url:"/offline.html",revision:null}]),G([]||[]),se((function(e){return"https://fonts.googleapis.com"===e.url.origin}),new ie({cacheName:"google-fonts-stylesheets"})),se((function(e){return"https://fonts.gstatic.com"===e.url.origin}),new ne({cacheName:"google-fonts-webfonts",plugins:[new de({statuses:[0,200]}),new le({maxAgeSeconds:31536e3,maxEntries:30})]})),se(new RegExp(".*/fonts/.*$"),new ne({cacheName:"fonts",plugins:[new de({statuses:[0,200]}),new le({maxAgeSeconds:31536e3,maxEntries:30})]})),se((function(e){return"image"===e.request.destination}),new ne({cacheName:"images",plugins:[new le({maxEntries:60,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),se((function(e){return"audio"===e.request.destination}),new ne({cacheName:"audio",plugins:[new le({maxEntries:50,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),se((function(e){var t=e.request;return"script"===t.destination||"style"===t.destination}),new ie({cacheName:"static-resources",plugins:[new le({maxEntries:50,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),se(new RegExp(".*/api/.*$"),new re({networkTimeoutSeconds:10,cacheName:"apis",plugins:[new le({maxEntries:50,maxAgeSeconds:600,purgeOnQuotaError:!0})]})),se(new RegExp(".*/app/.*$"),new re({networkTimeoutSeconds:10,cacheName:"pages",plugins:[new le({maxEntries:50,maxAgeSeconds:600,purgeOnQuotaError:!0})]})),me=function(e){switch(e.event.request.destination){case"document":var t=caches.match(V("/index.php"));return t||V("/offline.html");default:return Response.error()}},te().setCatchHandler(me);var fe=g.serviceWorkerKey+"-"+g.serviceWorkerVersion;self.addEventListener("message",(function(e){"GET_VERSION"===e.data.type&&e.ports[0].postMessage(fe)})),self.addEventListener("push",(function(e){if(self.Notification&&"granted"===self.Notification.permission){var t={};if(e.data){var s=(t=e.data.json()).title,n={body:t.body,vibrate:[100,50,100]};t.hasOwnProperty("vibrate")&&t.vibrate&&(n.vibrate=t.vibrate),t.hasOwnProperty("icon")&&t.icon&&(n.icon=t.icon),t.hasOwnProperty("image")&&t.image&&(n.image=t.image),t.hasOwnProperty("actions")&&t.actions&&(n.actions=t.actions),t.hasOwnProperty("data")&&t.data&&(n.data=t.data),e.waitUntil(self.registration.showNotification(s,n))}}})),self.addEventListener("notificationclick",(function(e){var t=e.notification;t.data.primaryKey;"close"===e.action||clients.openWindow(t.data.url),t.close()}))},xwD5:function(e,t,s){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}}});
//# sourceMappingURL=service-worker.js.map