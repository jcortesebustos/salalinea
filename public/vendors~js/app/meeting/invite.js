(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{oXok:function(t,e,a){"use strict";a.d(e,"a",(function(){return lt}));var i=a("XuX8"),n=a.n(i),r=a("xjcK"),s=a("AFYn"),o=a("m/oX"),c=a("pyNs"),l=a("mS7b"),u=a("m3aq"),d=a("Iyau"),b=a("+nMp"),p=function(t){return"\\"+t},f=a("kGy3"),h=a("a3f1"),g=a("bAY6"),O=a("ex6f"),v=a("PCFI"),m=a("WPLV"),j=a("2C+6"),y=a("z3V6"),T=a("3ec0"),w=a("rUdO"),I=a("1SAT"),_=a("kO/s"),x=a("jBgq"),k=a("GUe+"),S=a("tC49"),C=Object(y.c)({ariaLive:Object(y.b)(c.r),forceShow:Object(y.b)(c.f,!1),id:Object(y.b)(c.r),role:Object(y.b)(c.r),state:Object(y.b)(c.f,null),tag:Object(y.b)(c.r,"div"),tooltip:Object(y.b)(c.f,!1)},r.h),P=n.a.extend({name:r.h,functional:!0,props:C,render:function(t,e){var a=e.props,i=e.data,n=e.children,r=a.tooltip,s=a.ariaLive,o=!0===a.forceShow||!1===a.state;return t(a.tag,Object(S.a)(i,{class:{"d-block":o,"invalid-feedback":!r,"invalid-tooltip":r},attrs:{id:a.id||null,role:a.role||null,"aria-live":s||null,"aria-atomic":s?"true":null}}),n)}});var A=Object(y.c)({id:Object(y.b)(c.r),inline:Object(y.b)(c.f,!1),tag:Object(y.b)(c.r,"small"),textVariant:Object(y.b)(c.r,"muted")},r.k),R=n.a.extend({name:r.k,functional:!0,props:A,render:function(t,e){var a,i,n,r=e.props,s=e.data,o=e.children;return t(r.tag,Object(S.a)(s,{class:(a={"form-text":!r.inline},i="text-".concat(r.textVariant),n=r.textVariant,i in a?Object.defineProperty(a,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[i]=n,a),attrs:{id:r.id}}),o)}}),D=a("Sjgb"),F=a("qlm0");function L(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function E(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?L(Object(a),!0).forEach((function(e){V(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function V(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var $=Object(j.i)(F.b,["event","routerTag"]);delete $.href.default,delete $.to.default;var B=Object(y.c)(Object(j.l)(E(E({},$),{},{pill:Object(y.b)(c.f,!1),tag:Object(y.b)(c.r,"span"),variant:Object(y.b)(c.r,"secondary")})),r.a),z=n.a.extend({name:r.a,functional:!0,props:B,render:function(t,e){var a=e.props,i=e.data,n=e.children,r=a.active,s=a.disabled,o=Object(D.d)(a),c=o?F.a:a.tag,l=a.variant||"secondary";return t(c,Object(S.a)(i,{staticClass:"badge",class:["badge-".concat(l),{"badge-pill":a.pill,active:r,disabled:s}],props:o?Object(y.d)($,a):{}}),n)}}),q=a("8p45");function J(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function H(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?J(Object(a),!0).forEach((function(e){X(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function X(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var K,M=Object(y.c)(Object(j.l)(H(H({},_.b),{},{disabled:Object(y.b)(c.f,!1),noRemove:Object(y.b)(c.f,!1),pill:Object(y.b)(c.f,!1),removeLabel:Object(y.b)(c.r,"Remove tag"),tag:Object(y.b)(c.r,"span"),title:Object(y.b)(c.r),variant:Object(y.b)(c.r,"secondary")})),r.i),U=n.a.extend({name:r.i,mixins:[_.a,x.a],props:M,methods:{onRemove:function(t){var e=t.type,a=t.keyCode;this.disabled||"click"!==e&&("keydown"!==e||a!==o.b)||this.$emit(s.z)}},render:function(t){var e=this.title,a=this.tag,i=this.variant,n=this.pill,r=this.disabled,s=this.safeId(),o=this.safeId("_taglabel_"),c=t();this.noRemove||r||(c=t(q.a,{staticClass:"b-form-tag-remove",props:{ariaLabel:this.removeLabel},attrs:{"aria-controls":s,"aria-describedby":o,"aria-keyshortcuts":"Delete"},on:{click:this.onRemove,keydown:this.onRemove}}));var l=t("span",{staticClass:"b-form-tag-content flex-grow-1 text-truncate",attrs:{id:o}},this.normalizeSlot()||e);return t(z,{staticClass:"b-form-tag d-inline-flex align-items-baseline mw-100",class:{disabled:r},props:{tag:a,variant:i,pill:n},attrs:{id:s,title:e||null,"aria-labelledby":o}},[l,c])}});function G(t){return function(t){if(Array.isArray(t))return W(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return W(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return W(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function Y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function N(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(a),!0).forEach((function(e){Q(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function Q(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var Z=Object(m.a)("value",{type:c.b,defaultValue:[]}),tt=Z.mixin,et=Z.props,at=Z.prop,it=Z.event,nt=["text","email","tel","url","number"],rt=[".b-form-tag","button","input","select"].join(" "),st=function(t){return Object(d.b)(t).map((function(t){return Object(b.f)(Object(b.e)(t))})).filter((function(t,e,a){return t.length>0&&a.indexOf(t)===e}))},ot=function(t){return Object(O.m)(t)?t:Object(O.d)(t)&&t.target.value||""},ct=Object(y.c)(Object(j.l)(N(N(N(N(N(N({},_.b),et),T.b),w.b),I.b),{},{addButtonText:Object(y.b)(c.r,"Add"),addButtonVariant:Object(y.b)(c.r,"outline-secondary"),addOnChange:Object(y.b)(c.f,!1),duplicateTagText:Object(y.b)(c.r,"Duplicate tag(s)"),ignoreInputFocusSelector:Object(y.b)(c.e,rt),inputAttrs:Object(y.b)(c.n,{}),inputClass:Object(y.b)(c.d),inputId:Object(y.b)(c.r),inputType:Object(y.b)(c.r,"text",(function(t){return Object(d.a)(nt,t)})),invalidTagText:Object(y.b)(c.r,"Invalid tag(s)"),limit:Object(y.b)(c.k),limitTagsText:Object(y.b)(c.r,"Tag limit reached"),noAddOnEnter:Object(y.b)(c.f,!1),noOuterFocus:Object(y.b)(c.f,!1),noTagRemove:Object(y.b)(c.f,!1),placeholder:Object(y.b)(c.r,"Add tag..."),removeOnDelete:Object(y.b)(c.f,!1),separator:Object(y.b)(c.e),tagClass:Object(y.b)(c.d),tagPills:Object(y.b)(c.f,!1),tagRemoveLabel:Object(y.b)(c.r,"Remove tag"),tagRemovedLabel:Object(y.b)(c.r,"Tag removed"),tagValidator:Object(y.b)(c.i),tagVariant:Object(y.b)(c.r,"secondary")})),r.j),lt=n.a.extend({name:r.j,mixins:[_.a,tt,T.a,w.a,I.a,x.a],props:ct,data:function(){return{hasFocus:!1,newTag:"",tags:[],removedTags:[],tagsState:{all:[],valid:[],invalid:[],duplicate:[]}}},computed:{computedInputId:function(){return this.inputId||this.safeId("__input__")},computedInputType:function(){return Object(d.a)(nt,this.inputType)?this.inputType:"text"},computedInputAttrs:function(){var t=this.disabled,e=this.form;return N(N({},this.inputAttrs),{},{id:this.computedInputId,value:this.newTag,disabled:t,form:e})},computedInputHandlers:function(){return{input:this.onInputInput,change:this.onInputChange,keydown:this.onInputKeydown,reset:this.reset}},computedSeparator:function(){return Object(d.b)(this.separator).filter(O.m).filter(g.a).join("")},computedSeparatorRegExp:function(){var t,e=this.computedSeparator;return e?new RegExp("[".concat((t=e,Object(b.a)(t).replace(l.m,"\\s")),"]+")):null},computedJoiner:function(){var t=this.computedSeparator.charAt(0);return" "!==t?"".concat(t," "):t},computeIgnoreInputFocusSelector:function(){return Object(d.b)(this.ignoreInputFocusSelector).filter(g.a).join(",").trim()},disableAddButton:function(){var t=this,e=Object(b.f)(this.newTag);return""===e||!this.splitTags(e).some((function(e){return!Object(d.a)(t.tags,e)&&t.validateTag(e)}))},duplicateTags:function(){return this.tagsState.duplicate},hasDuplicateTags:function(){return this.duplicateTags.length>0},invalidTags:function(){return this.tagsState.invalid},hasInvalidTags:function(){return this.invalidTags.length>0},isLimitReached:function(){var t=this.limit;return Object(O.g)(t)&&t>=0&&this.tags.length>=t}},watch:(K={},Q(K,at,(function(t){this.tags=st(t)})),Q(K,"tags",(function(t,e){Object(v.a)(t,this[at])||this.$emit(it,t),Object(v.a)(t,e)||(t=Object(d.b)(t).filter(g.a),e=Object(d.b)(e).filter(g.a),this.removedTags=e.filter((function(e){return!Object(d.a)(t,e)})))})),Q(K,"tagsState",(function(t,e){Object(v.a)(t,e)||this.$emit(s.M,t.valid,t.invalid,t.duplicate)})),K),created:function(){this.tags=st(this[at])},mounted:function(){var t=this,e=Object(f.e)("form",this.$el);e&&(Object(h.b)(e,"reset",this.reset,s.R),this.$on(s.S,(function(){Object(h.a)(e,"reset",t.reset,s.R)})))},methods:{addTag:function(t){if(t=Object(O.m)(t)?t:this.newTag,!this.disabled&&""!==Object(b.f)(t)&&!this.isLimitReached){var e=this.parseTags(t);if(e.valid.length>0||0===e.all.length)if(Object(f.v)(this.getInput(),"select"))this.newTag="";else{var a=[].concat(G(e.invalid),G(e.duplicate));this.newTag=e.all.filter((function(t){return Object(d.a)(a,t)})).join(this.computedJoiner).concat(a.length>0?this.computedJoiner.charAt(0):"")}e.valid.length>0&&(this.tags=Object(d.b)(this.tags,e.valid)),this.tagsState=e,this.focus()}},removeTag:function(t){var e=this;this.disabled||(this.tags=this.tags.filter((function(e){return e!==t})),this.$nextTick((function(){e.focus()})))},reset:function(){var t=this;this.newTag="",this.tags=[],this.$nextTick((function(){t.removedTags=[],t.tagsState={all:[],valid:[],invalid:[],duplicate:[]}}))},onInputInput:function(t){if(!(this.disabled||Object(O.d)(t)&&t.target.composing)){var e=ot(t),a=this.computedSeparatorRegExp;this.newTag!==e&&(this.newTag=e),e=Object(b.g)(e),a&&a.test(e.slice(-1))?this.addTag():this.tagsState=""===e?{all:[],valid:[],invalid:[],duplicate:[]}:this.parseTags(e)}},onInputChange:function(t){if(!this.disabled&&this.addOnChange){var e=ot(t);this.newTag!==e&&(this.newTag=e),this.addTag()}},onInputKeydown:function(t){if(!this.disabled&&Object(O.d)(t)){var e=t.keyCode,a=t.target.value||"";this.noAddOnEnter||e!==o.e?!this.removeOnDelete||e!==o.a&&e!==o.b||""!==a||(Object(h.f)(t,{propagation:!1}),this.tags=this.tags.slice(0,-1)):(Object(h.f)(t,{propagation:!1}),this.addTag())}},onClick:function(t){var e=this,a=this.computeIgnoreInputFocusSelector,i=t.target;this.disabled||Object(f.q)(i)||a&&Object(f.e)(a,i,!0)||this.$nextTick((function(){e.focus()}))},onFocusin:function(){this.hasFocus=!0},onFocusout:function(){this.hasFocus=!1},handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(f.B)((function(){t.autofocus&&!t.disabled&&t.focus()}))}))},focus:function(){this.disabled||Object(f.d)(this.getInput())},blur:function(){this.disabled||Object(f.c)(this.getInput())},splitTags:function(t){t=Object(b.e)(t);var e=this.computedSeparatorRegExp;return(e?t.split(e):[t]).map(b.f).filter(g.a)},parseTags:function(t){var e=this,a=this.splitTags(t),i={all:a,valid:[],invalid:[],duplicate:[]};return a.forEach((function(t){Object(d.a)(e.tags,t)||Object(d.a)(i.valid,t)?Object(d.a)(i.duplicate,t)||i.duplicate.push(t):e.validateTag(t)?i.valid.push(t):Object(d.a)(i.invalid,t)||i.invalid.push(t)})),i},validateTag:function(t){var e=this.tagValidator;return!Object(y.a)(e)||e(t)},getInput:function(){return Object(f.C)("#".concat((t=this.computedInputId,e=(t=Object(b.e)(t)).length,a=t.charCodeAt(0),t.split("").reduce((function(i,n,r){var s=t.charCodeAt(r);return 0===s?i+"�":127===s||s>=1&&s<=31||0===r&&s>=48&&s<=57||1===r&&s>=48&&s<=57&&45===a?i+p("".concat(s.toString(16)," ")):0===r&&45===s&&1===e?i+p(n):s>=128||45===s||95===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+n:i+p(n)}),""))),this.$el);var t,e,a},defaultRender:function(t){var e=t.addButtonText,a=t.addButtonVariant,i=t.addTag,n=t.disableAddButton,r=t.disabled,s=t.duplicateTagText,o=t.inputAttrs,c=t.inputClass,l=t.inputHandlers,d=t.inputType,p=t.invalidTagText,f=t.isDuplicate,h=t.isInvalid,O=t.isLimitReached,v=t.limitTagsText,m=t.noTagRemove,j=t.placeholder,y=t.removeTag,T=t.tagClass,w=t.tagPills,I=t.tagRemoveLabel,_=t.tagVariant,x=t.tags,S=this.$createElement,C=x.map((function(t){return t=Object(b.e)(t),S(U,{class:T,props:{disabled:r,noRemove:m,pill:w,removeLabel:I,tag:"li",title:t,variant:_},on:{remove:function(){return y(t)}},key:"tags_".concat(t)},t)})),A=p&&h?this.safeId("__invalid_feedback__"):null,D=s&&f?this.safeId("__duplicate_feedback__"):null,F=v&&O?this.safeId("__limit_feedback__"):null,L=[o["aria-describedby"],A,D,F].filter(g.a).join(" "),E=S("input",{staticClass:"b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",class:c,style:{outline:0,minWidth:"5rem"},attrs:N(N({},o),{},{"aria-describedby":L||null,type:d,placeholder:j||null}),domProps:{value:o.value},on:l,directives:[{name:"model",value:o.value}],ref:"input"}),V=S(k.a,{staticClass:"b-form-tags-button py-0",class:{invisible:n},style:{fontSize:"90%"},props:{disabled:n||O,variant:a},on:{click:function(){return i()}},ref:"button"},[this.normalizeSlot(u.a)||e]),$=this.safeId("__tag_list__"),B=S("li",{staticClass:"b-from-tags-field flex-grow-1",attrs:{role:"none","aria-live":"off","aria-controls":$},key:"tags_field"},[S("div",{staticClass:"d-flex",attrs:{role:"group"}},[E,V])]),z=S("ul",{staticClass:"b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",attrs:{id:$},key:"tags_list"},[C,B]),q=S();if(p||s||v){var J=this.computedJoiner,H=S();A&&(H=S(P,{props:{id:A,forceShow:!0},key:"tags_invalid_feedback"},[this.invalidTagText,": ",this.invalidTags.join(J)]));var X=S();D&&(X=S(R,{props:{id:D},key:"tags_duplicate_feedback"},[this.duplicateTagText,": ",this.duplicateTags.join(J)]));var K=S();F&&(K=S(R,{props:{id:F},key:"tags_limit_feedback"},[v])),q=S("div",{attrs:{"aria-live":"polite","aria-atomic":"true"},key:"tags_feedback"},[H,X,K])}return[z,q]}},render:function(t){var e=this.name,a=this.disabled,i=this.required,n=this.form,r=this.tags,s=this.computedInputId,o=this.hasFocus,c=this.noOuterFocus,l=N({tags:r.slice(),inputAttrs:this.computedInputAttrs,inputType:this.computedInputType,inputHandlers:this.computedInputHandlers,removeTag:this.removeTag,addTag:this.addTag,reset:this.reset,inputId:s,isInvalid:this.hasInvalidTags,invalidTags:this.invalidTags.slice(),isDuplicate:this.hasDuplicateTags,duplicateTags:this.duplicateTags.slice(),isLimitReached:this.isLimitReached,disableAddButton:this.disableAddButton},Object(j.j)(this.$props,["addButtonText","addButtonVariant","disabled","duplicateTagText","form","inputClass","invalidTagText","limit","limitTagsText","noTagRemove","placeholder","required","separator","size","state","tagClass","tagPills","tagRemoveLabel","tagVariant"])),d=this.normalizeSlot(u.d,l)||this.defaultRender(l),b=t("output",{staticClass:"sr-only",attrs:{id:this.safeId("__selected_tags__"),role:"status",for:s,"aria-live":o?"polite":"off","aria-atomic":"true","aria-relevant":"additions text"}},this.tags.join(", ")),p=t("div",{staticClass:"sr-only",attrs:{id:this.safeId("__removed_tags__"),role:"status","aria-live":o?"assertive":"off","aria-atomic":"true"}},this.removedTags.length>0?"(".concat(this.tagRemovedLabel,") ").concat(this.removedTags.join(", ")):""),f=t();if(e&&!a){var h=r.length>0;f=(h?r:[""]).map((function(a){return t("input",{class:{"sr-only":!h},attrs:{type:h?"hidden":"text",value:a,required:i,name:e,form:n},key:"tag_input_".concat(a)})}))}return t("div",{staticClass:"b-form-tags form-control h-auto",class:[{focus:o&&!c&&!a,disabled:a},this.sizeFormClass,this.stateClass],attrs:{id:this.safeId(),role:"group",tabindex:a||c?null:"-1","aria-describedby":this.safeId("__selected_tags__")},on:{click:this.onClick,focusin:this.onFocusin,focusout:this.onFocusout}},[b,p,d,f])}})}}]);
//# sourceMappingURL=invite.js.map?id=fe01fcf53f7863db3dec