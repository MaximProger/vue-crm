(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[t._v("Счет")]),r("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:t.refresh}},[r("i",{staticClass:"material-icons"},[t._v("refresh")])])]),t.loading?r("Loader"):r("div",{staticClass:"row"},[r("HomeBill",{attrs:{rates:t.currency.rates}}),r("HomeCurrency",{attrs:{rates:t.currency.rates,date:t.currency.date}})],1)],1)},a=[],s=(r("96cf"),r("1da1")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col s12 m6 l4"},[r("div",{staticClass:"card light-blue bill-card"},[r("div",{staticClass:"card-content white-text"},[r("span",{staticClass:"card-title"},[t._v("Счет в валюте")]),t._l(t.currencies,(function(e){return r("p",{key:e,staticClass:"currency-line"},[r("span",[t._v(t._s(t._f("currency")(t.getCurrency(e),e)))])])}))],2)])])},i=[],l={props:["rates"],data:function(){return{currencies:["RUB","USD","EUR"]}},computed:{base:function(){return this.$store.getters.info.bill/(this.rates["RUB"]/this.rates["EUR"])}},methods:{getCurrency:function(t){return Math.floor(this.base*this.rates[t])}}},u=l,o=r("2877"),d=Object(o["a"])(u,c,i,!1,null,"e2ac931e",null),f=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col s12 m6 l8"},[r("div",{staticClass:"card orange darken-3 bill-card"},[r("div",{staticClass:"card-content white-text"},[t._m(0),r("table",[t._m(1),r("tbody",t._l(t.currencies,(function(e){return r("tr",{key:e},[r("td",[t._v(t._s(e))]),r("td",[t._v(t._s(t.rates[e].toFixed(3)))]),r("td",[t._v(t._s(t._f("date")(t.date,"date")))])])})),0)])])])])},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("span",{staticClass:"card-title"},[t._v("Курс валют")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Валюта")]),r("th",[t._v("Курс")]),r("th",[t._v("Дата")])])])}],_={props:["rates","date"],data:function(){return{currencies:["RUB","USD","EUR"]}}},m=_,p=Object(o["a"])(m,h,v,!1,null,"4c8f9662",null),b=p.exports,C={name:"Home",components:{HomeBill:f,HomeCurrency:b},data:function(){return{loading:!0,currency:null}},methods:{refresh:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("fetchCurrency");case 3:t.currency=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchCurrency");case 2:t.currency=e.sent,t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}},w=C,y=Object(o["a"])(w,n,a,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.c590636a.js.map