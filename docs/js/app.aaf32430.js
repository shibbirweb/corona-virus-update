(function(t){function a(a){for(var s,i,r=a[0],c=a[1],l=a[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,r=1;r<e.length;r++){var c=e[r];0!==n[c]&&(s=!1)}s&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},o=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/corona-virus-update/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var d=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"02cf":function(t,a,e){"use strict";var s=e("daac"),n=e.n(s);n.a},"1d87":function(t,a,e){"use strict";var s=e("6dca"),n=e.n(s);n.a},"421b":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid px-0"},[e("NavBarComponent"),e("router-view"),e("source-component"),e("footer-component")],1)},o=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" Corona Virus Update ")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("router-link",{staticClass:"nav-item",attrs:{to:{name:"global"},tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link"},[t._v("Global")])]),e("router-link",{staticClass:"nav-item",attrs:{to:{name:"region.bangladesh"},"active-class":"active",tag:"li"}},[e("a",{staticClass:"nav-link"},[t._v("Bangladesh")])])],1)])],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"NavBarComponent",mounted:function(){}},l=c,d=e("2877"),u=Object(d["a"])(l,i,r,!1,null,"445766fa",null),p=u.exports,v=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-dark"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"text-white py-2"},[t._v(" © 2020 "),e("a",{staticClass:"text-decoration-none text-white",attrs:{href:"https://github.com/shibbirweb",target:"_blank"}},[t._v("Shibbir Ahmed")]),t._v(". All rights reserved. ")])])])])])])}],m={name:"FooterComponent"},b=m,h=Object(d["a"])(b,v,f,!1,null,"c8f5c50e",null),C=h.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container my-2"},[e("h6",[t._v("Source:")]),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/NovelCOVID/API",target:"_blank"}},[t._v("API (https://github.com/NovelCOVID/API)")])])])])}],y={name:"SourceComponent"},S=y,x=Object(d["a"])(S,g,_,!1,null,"0f4da2d9",null),w=x.exports,O={name:"App",components:{SourceComponent:w,FooterComponent:C,NavBarComponent:p}},j=O,L=(e("5c0b"),Object(d["a"])(j,n,o,!1,null,null,null)),k=L.exports,P=(e("7db0"),e("4160"),e("a630"),e("d81d"),e("fb6a"),e("b64b"),e("3ca3"),e("159b"),e("8c4f")),W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"global-stats py-2"},[e("div",{staticClass:"container"},[e("GlobalStatsComponent")],1)]),e("div",{staticClass:"container"},[e("county-wise-stats-component")],1)])},D=[],N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 offset-md-2"},[e("div",{staticClass:"card",staticStyle:{"background-color":"rgba(255,255,255,0.86)"}},[e("div",{staticClass:"card-header text-center"},[t._v(" Global Statistics "),e("div",{staticClass:"small text-black"},[t._v(" Last Update: "+t._s(t.formatLastUpdate(t.globalStatistics.updated)||"Loading")+" ")])]),e("div",{staticClass:"card-body position-relative p-0"},[e("PreloaderComponent",{attrs:{show:t.preloader}}),e("div",{staticClass:"display-4 text-center"},[t._v(" Corona virus cases: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-info"},[t._v(" "+t._s(t.formatCount(t.globalStatistics.cases)||"Loading")+" ")]),e("div",{staticClass:"display-4 text-center"},[t._v(" Deaths: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-danger"},[t._v(" "+t._s(t.formatCount(t.globalStatistics.deaths)||"Loading")+" ")]),e("div",{staticClass:"display-4 text-center"},[t._v(" Recovered: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-success"},[t._v(" "+t._s(t.formatCount(t.globalStatistics.recovered)||"Loading")+" ")])],1)])])])},E=[],$=e("5530"),T=e("2f62"),G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.show?e("div",{staticClass:"PreloaderComponent",style:{backgroundColor:t.backgroundColor}},[e("div",{staticClass:"lds-ripple"},[e("div",{style:{borderColor:t.preloaderColor}}),e("div",{style:{borderColor:t.preloaderColor}})])]):t._e()},B=[],A={name:"PreloaderComponent",props:{show:{type:Boolean,default:!0},backgroundColor:{type:String,default:"rgba(97, 95, 95, 0.32)"},preloaderColor:{type:String,default:"#3bbdfb"}}},M=A,U=(e("8010"),Object(d["a"])(M,G,B,!1,null,"2866fe53",null)),V=U.exports,I={name:"GlobalStatsComponent",components:{PreloaderComponent:V},computed:Object($["a"])({},Object(T["d"])(["globalStatistics"])),data:function(){return{preloader:!0}},methods:Object($["a"])({},Object(T["b"])(["actionLoadGlobalStatistics"]),{showPreloader:function(){this.preloader=!0},hidePreloader:function(){this.preloader=!1},loadGlobalStatistics:function(){var t=this;this.showPreloader(),this.actionLoadGlobalStatistics().then((function(){t.hidePreloader()})).catch((function(){t.loadGlobalStatistics()}))},formatLastUpdate:function(t){return t?new Date(t).toLocaleString():null},formatCount:function(t){try{return t.toLocaleString()}catch(a){return null}}}),mounted:function(){this.loadGlobalStatistics()}},F=I,R=Object(d["a"])(F,N,E,!1,null,"41992acf",null),z=R.exports,J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card mt-2"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("h2",[t._v("Country wise status")]),e("div",{staticClass:"d-flex align-items-center"},[t._v(" View: "),e("font-awesome-icon",{class:["mx-1","pointer","list"===t.viewType?"text-black":"text-black-50"],attrs:{icon:"th-list",size:"2x",title:"List"},on:{click:function(a){t.viewType="list"}}}),e("font-awesome-icon",{class:["mx-1","pointer","grid"===t.viewType?"text-black":"text-black-50"],attrs:{icon:"th-large",size:"2x",title:"Grid"},on:{click:function(a){t.viewType="grid"}}})],1)])]),e("div",{staticClass:"card-body position-relative"},[e("keep-alive",[e(t.countryStatsViewType,{tag:"component"})],1)],1)])},q=[],H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"CountryStatsTableComponent"},[e("form",{staticClass:"form-inline float-right"},[e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.countryName,expression:"countryName"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Country Name","aria-label":"Country Name","aria-describedby":"search-icon"},domProps:{value:t.countryName},on:{input:function(a){a.target.composing||(t.countryName=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",attrs:{id:"search-icon"}},[e("font-awesome-icon",{attrs:{icon:"search",title:"List"}})],1)])])]),e("div",{staticClass:"table-responsive",staticStyle:{"max-height":"500px"}},[e("table",{staticClass:"table table-sm table-hover table-striped table-bordered"},[t._m(0),e("tbody",[t.preloader?e("tr",[e("td",{attrs:{colspan:"11"}},[e("spinner-component")],1)]):t._l(t.countryWiseData,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(s+1))]),e("td",[t._v(" "+t._s(a.country)+" ("+t._s(a.countryInfo.iso3)+") ")]),e("td",[t._v(t._s(a.cases))]),e("td",{class:[a.todayCases>0?"bg-info text-white":""]},[t._v(" "+t._s(a.todayCases>0?"+":"")+t._s(a.todayCases)+" ")]),e("td",[t._v(t._s(a.deaths))]),e("td",{class:[a.todayDeaths>0?"bg-danger text-white":""]},[t._v(" "+t._s(a.todayDeaths>0?"+":"")+t._s(a.todayDeaths)+" ")]),e("td",[t._v(t._s(a.recovered))]),e("td",[t._v(t._s(a.active))]),e("td",[t._v(t._s(a.critical))]),e("td",[t._v(t._s(a.casesPerOneMillion))])])}))],2)])])])},K=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticClass:"align-middle"},[e("th",{staticClass:"bg-white"},[t._v("Sl")]),e("th",{staticClass:"bg-white"},[t._v("Country")]),e("th",{staticClass:"bg-white"},[t._v("Cases")]),e("th",{staticClass:"bg-white"},[t._v("New Cases")]),e("th",{staticClass:"bg-white"},[t._v("Deaths")]),e("th",{staticClass:"bg-white"},[t._v("New Deaths")]),e("th",{staticClass:"bg-white"},[t._v("Recovered")]),e("th",{staticClass:"bg-white"},[t._v("Active")]),e("th",{staticClass:"bg-white"},[t._v("Critical")]),e("th",{staticClass:"bg-white",attrs:{title:"Cases Per Million"}},[t._v("Cases/Million")])])])}],Q=e("2004"),X=e.n(Q),Y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],tt={name:"SpinnerComponent"},at=tt,et=Object(d["a"])(at,Y,Z,!1,null,"655ef416",null),st=et.exports;s["a"].use(X.a);var nt={name:"CountryStatsTableComponent",components:{SpinnerComponent:st},computed:Object($["a"])({},Object(T["c"])(["getterSearchCountry"]),{countryWiseData:function(){return this.getterSearchCountry(this.countryName)}}),data:function(){return{countryName:"",preloader:!0}},methods:Object($["a"])({},Object(T["b"])(["actionLoadCountryWiseStatistics"]),{loadCountryWiseStatistics:function(){var t=this;this.preloader=!0,this.actionLoadCountryWiseStatistics().then((function(){return t.preloader=!1})).catch((function(){return t.loadCountryWiseStatistics()}))}}),mounted:function(){this.loadCountryWiseStatistics()}},ot=nt,it=(e("02cf"),Object(d["a"])(ot,H,K,!1,null,"94fba052",null)),rt=it.exports,ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("preloader-component",{attrs:{show:t.preloader}}),e("div",{staticClass:"row row-cols-1 row-cols-md-3",staticStyle:{"min-height":"100px"}},t._l(t.countryWiseData,(function(t,a){return e("single-country-stats-component",{key:a,attrs:{data:t}})})),1)],1)},lt=[],dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col mb-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top img-thumbnail",attrs:{src:t.data.countryInfo.flag,alt:t.data.country}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.data.country))]),e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"list-group-item px-0"},[t._v(" Cases: "),e("span",{staticClass:"text-primary font-weight-bold"},[t._v(t._s(t.data.cases))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Today Cases: "),e("span",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.data.todayCases))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Deaths: "),e("span",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.data.deaths))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Recovered: "),e("span",{staticClass:"text-success font-weight-bold"},[t._v(t._s(t.data.recovered))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Active: "),e("span",{staticClass:"text-black-50 font-weight-bold"},[t._v(t._s(t.data.active))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Critical: "),e("span",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.data.critical))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Cases Per One Million: "),e("span",{staticClass:"text-info font-weight-bold"},[t._v(t._s(t.data.casesPerOneMillion))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Deaths Per One Million: "),e("span",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.data.deathsPerOneMillion))])])])])])])},ut=[],pt={name:"SingleCountryStatsComponent",props:{data:{type:Object}}},vt=pt,ft=Object(d["a"])(vt,dt,ut,!1,null,"7ff4bdff",null),mt=ft.exports,bt={name:"CountryStatsGridComponent",components:{PreloaderComponent:V,SingleCountryStatsComponent:mt},computed:Object($["a"])({},Object(T["d"])(["countryWiseData"])),data:function(){return{preloader:!0}},methods:Object($["a"])({},Object(T["b"])(["actionLoadCountryWiseStatistics"]),{loadCountryWiseStats:function(){var t=this;this.preloader=!0,this.actionLoadCountryWiseStatistics().then((function(){return t.preloader=!1})).catch((function(){return t.loadCountryWiseStats()}))}}),mounted:function(){this.loadCountryWiseStats()}},ht=bt,Ct=Object(d["a"])(ht,ct,lt,!1,null,"5ff43e90",null),gt=Ct.exports,_t=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("h3",{staticClass:"display-4"},[t._v("404 Not found")])])])}],St={name:"NotFoundComponent"},xt=St,wt=Object(d["a"])(xt,_t,yt,!1,null,"1dd71630",null),Ot=wt.exports,jt={name:"CountyWiseStatsComponent",components:{CountryStatsGridComponent:gt,CountryStatsTableComponent:rt},computed:{countryStatsViewType:function(){return"list"===this.viewType?rt:"grid"===this.viewType?gt:Ot}},data:function(){return{viewType:"list"}}},Lt=jt,kt=(e("be06"),Object(d["a"])(Lt,J,q,!1,null,"671665ad",null)),Pt=kt.exports,Wt={name:"Global",components:{CountyWiseStatsComponent:Pt,GlobalStatsComponent:z}},Dt=Wt,Nt=(e("1d87"),Object(d["a"])(Dt,W,D,!1,null,"65866824",null)),Et=Nt.exports,$t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"bangladesh-stats py-2"},[e("div",{staticClass:"container"},[e("bangladesh-stats-component")],1)])])},Tt=[],Gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 offset-md-2"},[e("div",{staticClass:"card",staticStyle:{"background-color":"rgba(255,255,255,0.86)"}},[e("div",{staticClass:"card-header text-center"},[t._v(" Bangladesh Statistics "),e("div",{staticClass:"small text-black"},[t._v(" Last Update: "),t._v(" "+t._s(t.formatLastUpdate(t.globalStatistics.updated)||"Loading")+" ")])]),e("div",{staticClass:"card-body position-relative p-0"},[e("preloader-component",{attrs:{show:t.preloader}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"display-4 text-center"},[t._v(" Total cases: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-primary"},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.cases)||"Loading")+" ")])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"display-4 text-center"},[t._v(" New cases: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-info"},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.todayCases)||"Loading")+" ")])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"display-4 text-center"},[t._v(" Deaths: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-danger"},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.deaths)||"Loading")+" ")])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"display-4 text-center"},[t._v(" New deaths: ")]),e("h2",{class:["display-4","font-weight-bolder","text-center",t.bangladeshStatistics.todayDeaths?"text-danger":"text-success"]},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.todayDeaths)||"Loading")+" ")])]),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"display-4 text-center"},[t._v(" Recovered: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-success"},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.recovered)||"Loading")+" ")])])])],1)])])])},Bt=[],At={name:"BangladeshStatsComponent",components:{PreloaderComponent:V},computed:Object($["a"])({},Object(T["d"])(["globalStatistics"]),{},Object(T["c"])(["getterBangladeshStatistics"]),{bangladeshStatistics:function(){return this.getterBangladeshStatistics||{}}}),data:function(){return{preloader:!0}},methods:Object($["a"])({},Object(T["b"])(["actionLoadCountryWiseStatistics","actionLoadGlobalStatistics"]),{loadCountryWiseStats:function(){var t=this;this.preloader=!0,this.actionLoadCountryWiseStatistics().then((function(){return t.preloader=!1})).catch((function(){return t.loadCountryWiseStats()}))},loadDataForBangladeshStats:function(){var t=this;this.actionLoadGlobalStatistics().catch((function(){return t.loadDataForBangladeshStats()})),this.loadCountryWiseStats()},formatLastUpdate:function(t){return t?new Date(t).toLocaleString():null},formatNumber:function(t){try{return t.toLocaleString()}catch(a){return null}}}),mounted:function(){this.loadDataForBangladeshStats()}},Mt=At,Ut=Object(d["a"])(Mt,Gt,Bt,!1,null,"b270be76",null),Vt=Ut.exports,It={name:"Bangladesh",components:{BangladeshStatsComponent:Vt}},Ft=It,Rt=(e("ba28"),Object(d["a"])(Ft,$t,Tt,!1,null,"6fcdf83b",null)),zt=Rt.exports;s["a"].use(P["a"]);var Jt=[{path:"/",name:"home",component:Et,redirect:{name:"global"},meta:{title:"Corona Virus Update | Shibbir Ahmed"}},{path:"/global",name:"global",component:Et,meta:{title:"Global Corona Virus Update | Shibbir Ahmed"}},{path:"/Bangladesh",name:"region.bangladesh",component:zt,meta:{title:"Bangladesh Corona Virus Update | Shibbir Ahmed"}}],qt=new P["a"]({mode:"history",base:"/corona-virus-update/",routes:Jt});qt.beforeEach((function(t,a,e){var s=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),n=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));a.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(s&&(document.title=s.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!n)return e();n.meta.metaTags.map((function(t){var a=document.createElement("meta");return Object.keys(t).forEach((function(e){a.setAttribute(e,t[e])})),a.setAttribute("data-vue-router-controlled",""),a})).forEach((function(t){return document.head.appendChild(t)})),e()}));var Ht=qt,Kt={globalStatistics:{},countryWiseData:[]},Qt=(e("4de4"),e("caad"),e("2532"),{getterSearchCountry:function(t){return function(a){return 0===a.length?t.countryWiseData:t.countryWiseData.filter((function(t){return t.country.toLowerCase().includes(a.toLowerCase())}))}},getterBangladeshStatistics:function(t){return t.countryWiseData.find((function(t){return"Bangladesh"===t.country}))}}),Xt={mutationLoadGlobalStatistics:function(t,a){t.globalStatistics=a},mutationLoadCountryWiseStatistics:function(t,a){t.countryWiseData=a}},Yt=(e("d3b7"),"https://corona.lmao.ninja/"),Zt=e("bc3a"),ta=e.n(Zt),aa={actionLoadGlobalStatistics:function(t){var a=t.commit;return new Promise((function(t,e){ta.a.get(Yt+"all").then((function(e){a("mutationLoadGlobalStatistics",e.data),t(e.data)})).catch((function(t){return e(t)}))}))},actionLoadCountryWiseStatistics:function(t){var a=t.commit;return new Promise((function(t,e){ta.a.get(Yt+"countries").then((function(e){console.log(e.data),a("mutationLoadCountryWiseStatistics",e.data),t(e.data)})).catch((function(t){return e(t)}))}))}};s["a"].use(T["a"]);var ea=new T["a"].Store({state:Kt,getters:Qt,mutations:Xt,actions:aa}),sa=(e("4989"),e("ecee")),na=e("c074"),oa=e("ad3d");sa["c"].add(na["b"],na["c"],na["a"]),s["a"].component("font-awesome-icon",oa["a"]),s["a"].config.productionTip=!1,new s["a"]({router:Ht,store:ea,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),n=e.n(s);n.a},"6dca":function(t,a,e){},8010:function(t,a,e){"use strict";var s=e("fb4b"),n=e.n(s);n.a},"8bd8":function(t,a,e){},"9c0c":function(t,a,e){},ba28:function(t,a,e){"use strict";var s=e("8bd8"),n=e.n(s);n.a},be06:function(t,a,e){"use strict";var s=e("421b"),n=e.n(s);n.a},daac:function(t,a,e){},fb4b:function(t,a,e){}});
//# sourceMappingURL=app.aaf32430.js.map