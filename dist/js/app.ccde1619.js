(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-10b86dd9":"d8c34da1","chunk-2d0d7699":"c3173e62","chunk-2d21a3d2":"c590636a","chunk-52679956":"7dc1f553","chunk-53c8ec65":"a3f3c3e0","chunk-5f4ad635":"6183346d","chunk-72449522":"d38a35c2","chunk-c420df12":"bae3cd5d","chunk-cfa57870":"beb0a667"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-52679956":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-10b86dd9":"31d6cfe0","chunk-2d0d7699":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-52679956":"1d1c8876","chunk-53c8ec65":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-72449522":"31d6cfe0","chunk-c420df12":"31d6cfe0","chunk-cfa57870":"31d6cfe0"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-crm/dist/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("1dce"),o=n.n(a),c=n("8832"),i=n.n(c),s=n("58ca"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},l=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grey darken-1 empty-layout"},[n("router-view")],1)},f=[],p=n("b444"),h={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(p["a"][e.code]||"Что-то пошло не так...")}}},m=h,v=n("2877"),g=Object(v["a"])(m,d,f,!1,null,"09311626",null),b=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("Loader"):n("div",{staticClass:"app-main-layout"},[n("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),n("Sidebar",{key:e.locale,model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),n("main",{staticClass:"app-content",class:{full:!e.isOpen}},[n("div",{staticClass:"app-page"},[n("router-view")],1)]),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Создать новую запись",expression:"'Создать новую запись'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[n("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},y=[],k=(n("b64b"),n("96cf"),n("1da1")),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar orange lighten-1"},[n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"navbar-left"},[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[n("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),n("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),n("ul",{staticClass:"right hide-on-small-and-down"},[n("li",[n("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),n("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),n("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[n("li",[n("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[n("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v("Профиль ")])],1),n("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),n("li",[n("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти ")])])])])])])])},_=[],O=(n("b0c0"),{name:"navbar",data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?message=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=window.M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!0})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}}),C=O,j=Object(v["a"])(C,x,_,!1,null,"2daf10e2",null),R=j.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return n("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[n("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},M=[],U=(n("d3b7"),n("2f62")),$=n("59ca"),I=n.n($),N={actions:{login:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,o=t.email,c=t.password,n.prev=2,n.next=5,I.a.auth().signInWithEmailAndPassword(o,c);case 5:n.next=12;break;case 7:throw n.prev=7,n.t0=n["catch"](2),a("setError",n.t0),console.log(r),n.t0;case 12:case"end":return n.stop()}}),n,null,[[2,7]])})))()},register:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,o=t.email,c=t.password,i=t.name,n.prev=2,n.next=5,I.a.auth().createUserWithEmailAndPassword(o,c);case 5:return n.next=7,r("getUid");case 7:return s=n.sent,n.next=10,I.a.database().ref("/users/".concat(s,"/info")).set({bill:1e4,name:i});case 10:n.next=16;break;case 12:throw n.prev=12,n.t0=n["catch"](2),a("setError",n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()},getUid:function(){var e=I.a.auth().currentUser;return e?e.uid:null},logout:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,I.a.auth().signOut();case 3:n("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},P=n("5530"),S={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{updateInfo:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,o=e.getters,n.prev=1,n.next=4,r("getUid");case 4:return c=n.sent,i=Object(P["a"])(Object(P["a"])({},o.info),t),n.next=8,I.a.database().ref("users/".concat(c,"/info")).update(i);case 8:a("setInfo",i),n.next=15;break;case 11:throw n.prev=11,n.t0=n["catch"](1),a("setError",n.t0),n.t0;case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},fetchInfo:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.commit,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,I.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:o=t.sent.val(),r("setInfo",o),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),r("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},A=(n("d81d"),{actions:{fetchCategories:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,I.a.database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(P["a"])(Object(P["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchCategoriesById:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,n.next=4,a("getUid");case 4:return o=n.sent,n.next=7,I.a.database().ref("/users/".concat(o,"/categories")).child(t).once("value");case 7:if(n.t0=n.sent.val(),n.t0){n.next=10;break}n.t0={};case 10:return c=n.t0,n.abrupt("return",Object(P["a"])(Object(P["a"])({},c),{},{id:t}));case 14:throw n.prev=14,n.t1=n["catch"](1),r("setError",n.t1),n.t1;case 18:case"end":return n.stop()}}),n,null,[[1,14]])})))()},updateCategory:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=t.title,c=t.limit,i=t.id,n.prev=2,n.next=5,a("getUid");case 5:return s=n.sent,n.next=8,I.a.database().ref("/users/".concat(s,"/categories")).child(i).update({title:o,limit:c});case 8:n.next=14;break;case 10:throw n.prev=10,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))()},createCategory:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=t.title,c=t.limit,n.prev=2,n.next=5,a("getUid");case 5:return i=n.sent,n.next=8,I.a.database().ref("/users/".concat(i,"/categories")).push({title:o,limit:c});case 8:return s=n.sent,n.abrupt("return",{title:o,limit:c,id:s.key});case 12:throw n.prev=12,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()}}}),T={actions:{createRecord:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,n.prev=1,n.next=4,r("getUid");case 4:return o=n.sent,n.next=7,I.a.database().ref("/users/".concat(o,"/records")).push(t);case 7:return n.abrupt("return",n.sent);case 10:throw n.prev=10,n.t0=n["catch"](1),a("setError",n.t0),n.t0;case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},fetchRecords:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.commit,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,I.a.database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(P["a"])(Object(P["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchRecordsById:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,n.prev=1,n.next=4,r("getUid");case 4:return o=n.sent,n.next=7,I.a.database().ref("/users/".concat(o,"/records")).child(t).once("value");case 7:if(n.t0=n.sent.val(),n.t0){n.next=10;break}n.t0={};case 10:return c=n.t0,n.abrupt("return",Object(P["a"])(Object(P["a"])({},c),{},{id:t}));case 14:throw n.prev=14,n.t1=n["catch"](1),a("setError",n.t1),n.t1;case 18:case"end":return n.stop()}}),n,null,[[1,14]])})))()}}};r["a"].use(U["a"]);var B=new U["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},actions:{fetchCurrency:function(){return Object(k["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="b4b8f7877401fac1b810f401fe854d86",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()}},modules:{auth:N,info:S,category:A,record:T}}),D=n("7704"),L=n("edd4"),H={"ru-RU":D,"en-US":L};function J(e){var t=B.getters.info.locale||"ru-RU";return H[t][e]||"[Locolize error]: key ".concat(e," not found")}var z={props:["value"],data:function(){return{links:[{title:J("Menu_Bill"),url:"/",exact:!0},{title:J("Menu_History"),url:"/history"},{title:J("Menu_Planning"),url:"/planning"},{title:J("Menu_Record"),url:"/record"},{title:J("Menu_Categories"),url:"/categories"}]}}},F=z,W=Object(v["a"])(F,E,M,!1,null,"2132a990",null),q=W.exports,K={name:"main-layout",components:{Navbar:R,Sidebar:q},data:function(){return{isOpen:!0,loading:!0}},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale}},watch:{error:function(e){this.$error(p["a"][e.code]||"Что-то пошло не так...")}},mounted:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()}},V=K,Y=Object(v["a"])(V,w,y,!1,null,"7e69ff1c",null),G=Y.exports,Q={components:{EmptyLayout:b,MainLayout:G},computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}}},X=Q,Z=(n("5c0b"),Object(v["a"])(X,u,l,!1,null,null,null)),ee=Z.exports,te=(n("45fc"),n("8c4f"));r["a"].use(te["a"]);var ne=[{path:"/",name:"Home",meta:{layout:"main"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-5f4ad635").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return n.e("chunk-c420df12").then(n.bind(null,"73cf"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return n.e("chunk-10b86dd9").then(n.bind(null,"58c2"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return n.e("chunk-53c8ec65").then(n.bind(null,"43ef"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return n.e("chunk-52679956").then(n.bind(null,"c66d"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return n.e("chunk-72449522").then(n.bind(null,"6859"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return n.e("chunk-cfa57870").then(n.bind(null,"e4bb"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return n.e("chunk-2d0d7699").then(n.bind(null,"7769"))}}],re=new te["a"]({mode:"history",base:"/vue-crm/dist/",routes:ne});re.beforeEach((function(e,t,n){var r=I.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!r?n("/login?message=login"):n()}));var ae=re;n("caad"),n("2532");function oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n={};t.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),t.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit");var r=B.getters.info.locale||"ru-RU";return new Intl.DateTimeFormat(r,n).format(new Date(e))}var ce=n("5bb3"),ie={bind:function(e,t){var n=t.value;window.M.Tooltip.init(e,{html:n})},unbind:function(e){var t=window.M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},se={install:function(e){e.prototype.$message=function(e){window.M.toast({html:e})},e.prototype.$error=function(e){window.M.toast({html:"[Error]: ".concat(e)})}}},ue=(n("99af"),{install:function(e){e.prototype.$title=function(e){var t="Maksim CRM";return"".concat(J(e)," | ").concat(t)}}}),le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},de=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-loader"},[n("div",{staticClass:"preloader-wrapper active"},[n("div",{staticClass:"spinner-layer spinner-red-only"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])])])])}],fe={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},pe=fe,he=Object(v["a"])(pe,le,de,!1,null,"3cb1d7ec",null),me=he.exports,ve=n("9483");Object(ve["a"])("".concat("/vue-crm/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ge;n("4d5c"),n("ea7b"),n("66ce");r["a"].config.productionTip=!1,r["a"].filter("date",oe),r["a"].filter("currency",ce["a"]),r["a"].filter("localize",J),r["a"].use(o.a),r["a"].use(se),r["a"].use(ue),r["a"].use(s["a"]),r["a"].component("Paginate",i.a),r["a"].directive("tooltip",ie),r["a"].component("Loader",me),I.a.initializeApp({apiKey:"AIzaSyAs3ywA3EYJ7KN4aD_LYNJCg6TaHJjMWx4",authDomain:"vue-crm-a1159.firebaseapp.com",databaseURL:"https://vue-crm-a1159.firebaseio.com",projectId:"vue-crm-a1159",storageBucket:"vue-crm-a1159.appspot.com",messagingSenderId:"538181649179",appId:"1:538181649179:web:2296c98c69cbf8c08509be"}),I.a.auth().onAuthStateChanged((function(){ge||(ge=new r["a"]({router:ae,store:B,render:function(e){return e(ee)}}).$mount("#app"))}))},"5bb3":function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("rru-RU",{style:"currency",currency:t}).format(e)}n.d(t,"a",(function(){return r}))},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Name":"Имя","NameValidation":"Имя не дожно быть пустым","Refresh":"Обновить","Menu_Bill":"Счет","Menu_History":"История","Menu_Planning":"Планирование","Menu_Record":"Новая запись","Menu_Categories":"Категории"}')},"9c0c":function(e,t,n){},b444:function(e,t,n){"use strict";t["a"]={logout:"Вы вышли из системы",login:"Для начала войдите в систему","auth/user-not-found":"Пользователя с таким email не существует","auth/wrong-password":"Не верный пароль","auth/email-already-in-use":"Пользователь с таким email уже существует"}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Name":"Name","NameValidation":"The name must not be empty","Refresh":"Refresh","Menu_Bill":"Bill","Menu_History":"History","Menu_Planning":"Planning","Menu_Record":"Record","Menu_Categories":"Categories"}')}});
//# sourceMappingURL=app.ccde1619.js.map