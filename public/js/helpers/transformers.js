(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{tkDv:function(n,t,e){"use strict";e.r(t),e.d(t,"objectWithName",(function(){return u})),e.d(t,"contact",(function(){return a})),e.d(t,"contactWithAlias",(function(){return i})),e.d(t,"contactWithAssociation",(function(){return f})),e.d(t,"employee",(function(){return d})),e.d(t,"employeeWithAlias",(function(){return s})),e.d(t,"getRegion",(function(){return m})),e.d(t,"percent",(function(){return l})),e.d(t,"date",(function(){return g})),e.d(t,"datetime",(function(){return y})),e.d(t,"truncateString",(function(){return p})),e.d(t,"limitWords",(function(){return v})),e.d(t,"badgeStatus",(function(){return b})),e.d(t,"badgeStatusYesNo",(function(){return h})),e.d(t,"badgeStatusLabel",(function(){return w})),e.d(t,"badgeStatusCompleted",(function(){return D})),e.d(t,"currency",(function(){return $})),e.d(t,"getCurrencyDescription",(function(){return S}));var r=e("g6NE"),c=e("V0LQ"),o=r.a.getters["config/vars"];function u(n){return n.name}function a(n){return n.name}function i(n){var t=n.name,e=n.alias;return"".concat(t," (").concat(e,")")}function f(n){var t=n.name,e=n.association;return"".concat(t," (").concat(e,")")}function d(n){return n.name}function s(n){var t=n.name,e=n.alias;return"".concat(t," (").concat(e,")")}function m(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t?t.city:"";return e=e?t.zipcode?"".concat(e," - ").concat(t.zipcode):e:"",e=t.state?e?"".concat(e,", ").concat(t.state):t.state:e,e=t.country?e?"".concat(e,", ").concat(t.country.name):t.country.name:e}function l(n){return"".concat(n," %")}function g(n){return moment(n,o.serverDateFormat).format(o.defaultDateFormat)}function y(n){return moment(n,o.serverDateTimeFormat).format(o.defaultDateTimeFormat)}function p(n,t){var e=t.max||30,r=n.length>e?t.suffix||"...":"";return n.slice(0,e)+r}function v(n,t){var e=n.split(" "),r=t.max||3,c=e.length>r?t.suffix||"...":"";return e.slice(0,r).join(" ")+c}function b(n){return n?"true":"false"}function h(n){return n?$t("general.yes"):$t("general.no")}function w(n,t){return n?$t("general.yes"):$t("general.no")}function D(n){return n?$t("utility.todo.completed"):$t("utility.todo.incomplete")}function $(n,t){var e=t&&t.currency?t.currency:o.defaultCurrency;return c.d.to(n,e,!0)}function S(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"".concat(t.currency.name," - ").concat(t.currency.description," (").concat(t.currency.symbol,")")}}}]);
//# sourceMappingURL=transformers.js.map?id=65bfe19be60bdcf6213d