(function(t){function a(a){for(var s,o,i=a[0],c=a[1],l=a[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(h.length)h.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/corona-virus-update/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1d87":function(t,a,e){"use strict";var s=e("6dca"),n=e.n(s);n.a},"29e7":function(t,a,e){},"421b":function(t,a,e){},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"4c21":function(t,a,e){"use strict";var s=e("c61d"),n=e.n(s);n.a},"4d28":function(t,a,e){"use strict";var s=e("29e7"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid px-0"},[e("NavBarComponent"),e("router-view"),e("source-component"),e("footer-component")],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" Corona Virus Update ")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("router-link",{staticClass:"nav-item",attrs:{to:{name:"global"},tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link"},[t._v("Global")])]),e("router-link",{staticClass:"nav-item",attrs:{to:{name:"region.bangladesh"},"active-class":"active",tag:"li"}},[e("a",{staticClass:"nav-link"},[t._v("Bangladesh")])])],1)])],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"NavBarComponent",mounted:function(){}},l=c,d=e("2877"),u=Object(d["a"])(l,o,i,!1,null,"445766fa",null),h=u.exports,f=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-dark"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"text-white py-2"},[t._v(" © 2020 "),e("a",{staticClass:"text-decoration-none text-white",attrs:{href:"https://github.com/shibbirweb",target:"_blank"}},[t._v("Shibbir Ahmed")]),t._v(". All rights reserved. ")])])])])])])}],b={name:"FooterComponent"},m=b,v=Object(d["a"])(m,f,p,!1,null,"c8f5c50e",null),C=v.exports,y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container my-2"},[e("h6",[t._v("Source:")]),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/NovelCOVID/API",target:"_blank"}},[t._v("API (https://github.com/NovelCOVID/API)")])])])])}],j={name:"SourceComponent"},_=j,S=Object(d["a"])(_,y,g,!1,null,"0f4da2d9",null),w=S.exports,x={name:"App",components:{SourceComponent:w,FooterComponent:C,NavBarComponent:h}},O=x,k=(e("5c0b"),Object(d["a"])(O,n,r,!1,null,null,null)),L=k.exports,D=(e("7db0"),e("4160"),e("a630"),e("d81d"),e("fb6a"),e("b64b"),e("3ca3"),e("159b"),e("8c4f")),T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"global-stats py-2"},[e("div",{staticClass:"container"},[e("GlobalStatsComponent")],1)]),e("div",{staticClass:"container"},[e("county-wise-stats-component")],1)])},W=[],N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 offset-md-2"},[e("div",{staticClass:"card",staticStyle:{"background-color":"rgba(255,255,255,0.86)"}},[e("div",{staticClass:"card-header text-center"},[t._v(" Global Statistics "),e("div",{staticClass:"small text-black"},[t._v(" Last Update: "+t._s(t.formatLastUpdate(t.globalStatistics.updated)||"Loading")+" ")])]),e("div",{staticClass:"card-body position-relative p-0"},[e("PreloaderComponent",{attrs:{show:t.preloader}}),e("div",{staticClass:"display-4 text-center"},[t._v(" Corona virus cases: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-info"},[t._v(" "+t._s(t.formatCount(t.globalStatistics.cases)||"Loading")+" ")]),e("div",{staticClass:"display-4 text-center"},[t._v(" Deaths: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-danger"},[t._v(" "+t._s(t.formatCount(t.globalStatistics.deaths)||"Loading")+" ")]),e("div",{staticClass:"display-4 text-center"},[t._v(" Recovered: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-success"},[t._v(" "+t._s(t.formatCount(t.globalStatistics.recovered)||"Loading")+" ")])],1)])])])},P=[],E=e("5530"),z=e("2f62"),$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.show?e("div",{staticClass:"PreloaderComponent",style:{backgroundColor:t.backgroundColor}},[e("div",{staticClass:"lds-ripple"},[e("div",{style:{borderColor:t.preloaderColor}}),e("div",{style:{borderColor:t.preloaderColor}})])]):t._e()},H=[],A={name:"PreloaderComponent",props:{show:{type:Boolean,default:!0},backgroundColor:{type:String,default:"rgba(97, 95, 95, 0.32)"},preloaderColor:{type:String,default:"#3bbdfb"}}},G=A,I=(e("8010"),Object(d["a"])(G,$,H,!1,null,"2866fe53",null)),B=I.exports,V={name:"GlobalStatsComponent",components:{PreloaderComponent:B},computed:Object(E["a"])({},Object(z["d"])(["globalStatistics"])),data:function(){return{preloader:!0}},methods:Object(E["a"])({},Object(z["b"])(["actionLoadGlobalStatistics"]),{showPreloader:function(){this.preloader=!0},hidePreloader:function(){this.preloader=!1},loadGlobalStatistics:function(){var t=this;this.showPreloader(),this.actionLoadGlobalStatistics().then((function(){t.hidePreloader()})).catch((function(){t.loadGlobalStatistics()}))},formatLastUpdate:function(t){return t?new Date(t).toLocaleString():null},formatCount:function(t){try{return t.toLocaleString()}catch(a){return null}}}),mounted:function(){this.loadGlobalStatistics()}},M=V,R=Object(d["a"])(M,N,P,!1,null,"41992acf",null),U=R.exports,F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card mt-2"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("h2",[t._v("Country wise status")]),e("div",{staticClass:"d-flex align-items-center"},[t._v(" View: "),e("font-awesome-icon",{class:["mx-1","pointer","list"===t.viewType?"text-black":"text-black-50"],attrs:{icon:"th-list",size:"2x",title:"List"},on:{click:function(a){t.viewType="list"}}}),e("font-awesome-icon",{class:["mx-1","pointer","grid"===t.viewType?"text-black":"text-black-50"],attrs:{icon:"th-large",size:"2x",title:"Grid"},on:{click:function(a){t.viewType="grid"}}})],1)])]),e("div",{staticClass:"card-body position-relative"},[e("keep-alive",[e(t.countryStatsViewType,{tag:"component"})],1)],1)])},J=[],q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"CountryStatsTableComponent"},[e("form",{staticClass:"form-inline float-right"},[e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.countryName,expression:"countryName"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Country Name","aria-label":"Country Name","aria-describedby":"search-icon"},domProps:{value:t.countryName},on:{input:function(a){a.target.composing||(t.countryName=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",attrs:{id:"search-icon"}},[e("font-awesome-icon",{attrs:{icon:"search",title:"List"}})],1)])])]),e("div",{staticClass:"table-responsive",staticStyle:{"max-height":"500px"}},[e("table",{staticClass:"table table-sm table-hover table-striped table-bordered"},[t._m(0),e("tbody",[t.preloader?e("tr",[e("td",{attrs:{colspan:"11"}},[e("spinner-component")],1)]):t._l(t.countryWiseData,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(s+1))]),e("td",[t._v(" "+t._s(a.country)+" ("+t._s(a.countryInfo.iso3)+") ")]),e("td",[t._v(t._s(a.cases))]),e("td",{class:[a.todayCases>0?"bg-info text-white":""]},[t._v(" "+t._s(a.todayCases>0?"+":"")+t._s(a.todayCases)+" ")]),e("td",[t._v(t._s(a.deaths))]),e("td",{class:[a.todayDeaths>0?"bg-danger text-white":""]},[t._v(" "+t._s(a.todayDeaths>0?"+":"")+t._s(a.todayDeaths)+" ")]),e("td",[t._v(t._s(a.recovered))]),e("td",[t._v(t._s(a.active))]),e("td",[t._v(t._s(a.critical))]),e("td",[t._v(t._s(a.casesPerOneMillion))])])}))],2)])])])},K=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticClass:"align-middle"},[e("th",{staticClass:"bg-white"},[t._v("Sl")]),e("th",{staticClass:"bg-white"},[t._v("Country")]),e("th",{staticClass:"bg-white"},[t._v("Cases")]),e("th",{staticClass:"bg-white"},[t._v("New Cases")]),e("th",{staticClass:"bg-white"},[t._v("Deaths")]),e("th",{staticClass:"bg-white"},[t._v("New Deaths")]),e("th",{staticClass:"bg-white"},[t._v("Recovered")]),e("th",{staticClass:"bg-white"},[t._v("Active")]),e("th",{staticClass:"bg-white"},[t._v("Critical")]),e("th",{staticClass:"bg-white",attrs:{title:"Cases Per Million"}},[t._v("Cases/Million")])])])}],Q=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],Y={name:"SpinnerComponent"},Z=Y,tt=Object(d["a"])(Z,Q,X,!1,null,"655ef416",null),at=tt.exports,et={name:"CountryStatsTableComponent",components:{SpinnerComponent:at},computed:Object(E["a"])({},Object(z["c"])(["getterSearchCountry"]),{countryWiseData:function(){return this.getterSearchCountry(this.countryName)}}),data:function(){return{countryName:"",preloader:!0}},methods:Object(E["a"])({},Object(z["b"])(["actionLoadCountryWiseStatistics"]),{loadCountryWiseStatistics:function(){var t=this;this.preloader=!0,this.actionLoadCountryWiseStatistics().then((function(){return t.preloader=!1})).catch((function(){return t.loadCountryWiseStatistics()}))}}),mounted:function(){this.loadCountryWiseStatistics()}},st=et,nt=(e("4d28"),Object(d["a"])(st,q,K,!1,null,"66c5580d",null)),rt=nt.exports,ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("preloader-component",{attrs:{show:t.preloader}}),e("div",{staticClass:"row row-cols-1 row-cols-md-3",staticStyle:{"min-height":"100px"}},t._l(t.countryWiseData,(function(t,a){return e("single-country-stats-component",{key:a,attrs:{data:t}})})),1)],1)},it=[],ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col mb-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top img-thumbnail",attrs:{src:t.data.countryInfo.flag,alt:t.data.country}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.data.country))]),e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"list-group-item px-0"},[t._v(" Cases: "),e("span",{staticClass:"text-primary font-weight-bold"},[t._v(t._s(t.data.cases))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Today Cases: "),e("span",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.data.todayCases))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Deaths: "),e("span",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.data.deaths))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Recovered: "),e("span",{staticClass:"text-success font-weight-bold"},[t._v(t._s(t.data.recovered))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Active: "),e("span",{staticClass:"text-black-50 font-weight-bold"},[t._v(t._s(t.data.active))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Critical: "),e("span",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.data.critical))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Cases Per One Million: "),e("span",{staticClass:"text-info font-weight-bold"},[t._v(t._s(t.data.casesPerOneMillion))])]),e("li",{staticClass:"list-group-item px-0"},[t._v(" Deaths Per One Million: "),e("span",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.data.deathsPerOneMillion))])])])])])])},lt=[],dt={name:"SingleCountryStatsComponent",props:{data:{type:Object}}},ut=dt,ht=Object(d["a"])(ut,ct,lt,!1,null,"7ff4bdff",null),ft=ht.exports,pt={name:"CountryStatsGridComponent",components:{PreloaderComponent:B,SingleCountryStatsComponent:ft},computed:Object(E["a"])({},Object(z["d"])(["countryWiseData"])),data:function(){return{preloader:!0}},methods:Object(E["a"])({},Object(z["b"])(["actionLoadCountryWiseStatistics"]),{loadCountryWiseStats:function(){var t=this;this.preloader=!0,this.actionLoadCountryWiseStatistics().then((function(){return t.preloader=!1})).catch((function(){return t.loadCountryWiseStats()}))}}),mounted:function(){this.loadCountryWiseStats()}},bt=pt,mt=Object(d["a"])(bt,ot,it,!1,null,"5ff43e90",null),vt=mt.exports,Ct=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("h3",{staticClass:"display-4"},[t._v("404 Not found")])])])}],gt={name:"NotFoundComponent"},jt=gt,_t=Object(d["a"])(jt,Ct,yt,!1,null,"1dd71630",null),St=_t.exports,wt={name:"CountyWiseStatsComponent",components:{CountryStatsGridComponent:vt,CountryStatsTableComponent:rt},computed:{countryStatsViewType:function(){return"list"===this.viewType?rt:"grid"===this.viewType?vt:St}},data:function(){return{viewType:"list"}}},xt=wt,Ot=(e("be06"),Object(d["a"])(xt,F,J,!1,null,"671665ad",null)),kt=Ot.exports,Lt={name:"Global",components:{CountyWiseStatsComponent:kt,GlobalStatsComponent:U}},Dt=Lt,Tt=(e("1d87"),Object(d["a"])(Dt,T,W,!1,null,"65866824",null)),Wt=Tt.exports,Nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"bangladesh-stats py-2"},[e("div",{staticClass:"container"},[e("bangladesh-stats-component")],1)]),e("div",{staticClass:"container mt-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("country-history-chart-component",{attrs:{country:"Bangladesh"}})],1)])])])},Pt=[],Et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 offset-md-2"},[e("div",{staticClass:"card",staticStyle:{"background-color":"rgba(255,255,255,0.86)"}},[e("div",{staticClass:"card-header text-center"},[t._v(" Bangladesh Statistics "),e("div",{staticClass:"small text-black"},[t._v(" Last Update: "),t._v(" "+t._s(t.formatLastUpdate(t.globalStatistics.updated)||"Loading")+" ")])]),e("div",{staticClass:"card-body position-relative p-0"},[e("preloader-component",{attrs:{show:t.preloader}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"display-4 text-center"},[t._v(" Total cases: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-primary"},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.cases)||"Loading")+" ")])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"display-4 text-center"},[t._v(" New cases: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-info"},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.todayCases)||"Loading")+" ")])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"display-4 text-center"},[t._v(" Deaths: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-danger"},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.deaths)||"Loading")+" ")])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"display-4 text-center"},[t._v(" New deaths: ")]),e("h2",{class:["display-4","font-weight-bolder","text-center",t.bangladeshStatistics.todayDeaths?"text-danger":"text-success"]},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.todayDeaths)||"Loading")+" ")])]),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"display-4 text-center"},[t._v(" Recovered: ")]),e("h2",{staticClass:"display-4 font-weight-bolder text-center text-success"},[t._v(" "+t._s(t.formatNumber(t.bangladeshStatistics.recovered)||"Loading")+" ")])])])],1)])])])},zt=[],$t={name:"BangladeshStatsComponent",components:{PreloaderComponent:B},computed:Object(E["a"])({},Object(z["d"])(["globalStatistics"]),{},Object(z["c"])(["getterBangladeshStatistics"]),{bangladeshStatistics:function(){return this.getterBangladeshStatistics||{}}}),data:function(){return{preloader:!0}},methods:Object(E["a"])({},Object(z["b"])(["actionLoadCountryWiseStatistics","actionLoadGlobalStatistics"]),{loadCountryWiseStats:function(){var t=this;this.preloader=!0,this.actionLoadCountryWiseStatistics().then((function(){return t.preloader=!1})).catch((function(){return t.loadCountryWiseStats()}))},loadDataForBangladeshStats:function(){var t=this;this.actionLoadGlobalStatistics().catch((function(){return t.loadDataForBangladeshStats()})),this.loadCountryWiseStats()},formatLastUpdate:function(t){return t?new Date(t).toLocaleString():null},formatNumber:function(t){try{return t.toLocaleString()}catch(a){return null}}}),mounted:function(){this.loadDataForBangladeshStats()}},Ht=$t,At=Object(d["a"])(Ht,Et,zt,!1,null,"b270be76",null),Gt=At.exports,It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header text-center"},[e("div",{staticClass:"d-md-flex justify-content-between align-items-center"},[e("div",[t._v("Last "+t._s(t.lastChosenDay)+" days history")]),e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",{staticClass:"form-inline"},[e("label",{staticClass:"col-form-label mr-1",attrs:{for:"choose-day"}},[t._v("See last ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.lastChosenDay,expression:"lastChosenDay"}],staticClass:"form-control-sm form-control",attrs:{id:"choose-day"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.lastChosenDay=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"60",selected:""}},[t._v("60 day")]),e("option",{attrs:{value:"30",selected:""}},[t._v("30 day")]),e("option",{attrs:{value:"15",selected:""}},[t._v("15 day")]),e("option",{attrs:{value:"10",selected:""}},[t._v("10 day")]),e("option",{attrs:{value:"5",selected:""}},[t._v("5 day")])])]),e("div",{staticClass:"form-inline"},[e("label",{staticClass:"col-form-label mx-1",attrs:{for:"view-type"}},[t._v("Chart Type ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.charType,expression:"charType"}],staticClass:"form-control-sm form-control",attrs:{id:"view-type"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.charType=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"line"}},[t._v("Line")]),e("option",{attrs:{value:"bar"}},[t._v("Bar")]),e("option",{attrs:{value:"radar"}},[t._v("Radar")]),e("option",{attrs:{value:"pie"}},[t._v("Pie")]),e("option",{attrs:{value:"doughnut"}},[t._v("Doughnut")]),e("option",{attrs:{value:"polarArea"}},[t._v("Polar Area")])])])])])]),e("div",{staticClass:"card-body"},[t.preloader?e("spinner-component"):e("chart-js-component",{attrs:{labels:t.chartLabels,"data-set":t.chartDataset,"chart-type":t.charType,"chart-title":t.country}})],1)])},Bt=[],Vt=(e("99af"),e("a434"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("canvas",{ref:"chartJS",attrs:{height:t.height,width:"width"}})}),Mt=[],Rt=(e("a9e3"),e("30ef")),Ut=e.n(Rt),Ft={name:"ChartJsComponent",props:{chartTitle:{type:String,default:""},labels:{type:Array,required:!0,default:function(){return[]}},dataSet:{type:Array,required:!0,default:function(){return[]}},height:{type:Number,default:100},width:{type:Number,default:400},chartType:{type:String,default:"bar"}},watch:{labels:{handler:"updateChartLabels"},dataSet:{handler:"updateChartDataset"}},data:function(){return{chartInstance:null}},methods:{updateChartLabels:function(t){var a=this.initializeChart();a.data.labels=t,a.update()},updateChartDataset:function(t){var a=this.initializeChart();a.data.datasets=t,a.update()},initializeChart:function(){null!=this.chartInstance&&this.chartInstance.destroy();var t=this.$refs.chartJS;return this.chartInstance=new Ut.a(t,{type:this.chartType,data:{labels:this.labels,datasets:this.dataSet},options:{title:{display:!0,text:this.chartTitle}}}),this.chartInstance}},mounted:function(){this.initializeChart()}},Jt=Ft,qt=Object(d["a"])(Jt,Vt,Mt,!1,null,null,null),Kt=qt.exports,Qt={name:"CountryHistoryChartComponent",components:{SpinnerComponent:at,ChartJsComponent:Kt},props:{country:{type:String,default:null}},computed:Object(E["a"])({},Object(z["c"])(["getterSpecificCountryHistory"]),{countryNameInSmallerCase:function(){return this.country.toLowerCase()},countryHistory:function(){return this.getterSpecificCountryHistory(this.countryNameInSmallerCase)}}),watch:{countryHistory:{handler:"prepareChartData",deep:!0},lastChosenDay:{handler:"updateChart"},charType:{handler:"updateChart"}},data:function(){return{preloader:!0,lastChosenDay:30,charType:"bar",chartLabels:[],chartDataset:[]}},methods:Object(E["a"])({},Object(z["b"])(["actionLoadSpecificCountryCoronaVirusHistory"]),{loadSpecificCountryCoronaVirusHistory:function(){var t=this;this.preloader=!0,this.actionLoadSpecificCountryCoronaVirusHistory({country:this.country}).then((function(a){try{var e=a.data.timeline.cases,s=0===Object.keys(e).length&&e.constructor===Object;s?t.loadSpecificCountryCoronaVirusHistory():t.preloader=!1}catch(n){t.loadSpecificCountryCoronaVirusHistory()}})).catch((function(){return t.loadSpecificCountryCoronaVirusHistory()}))},updateChart:function(){this.prepareChartData(this.countryHistory)},prepareChartData:function(t){if(void 0!==t){var a=[];for(var e in t.timeline.cases)a.push(e);var s=a.length-this.lastChosenDay;a.splice(0,s);var n=t.timeline.cases,r=[],o=[],i=[],c=0,l=0,d=0,u=0,h=!0;for(var f in n){var p=n[f];i.push(p-u),u=p,(h||"pie"===this.charType||"polarArea"===this.charType||"doughnut"===this.charType)&&(c=this.getRandomInt(170,220),l=this.getRandomInt(170,220),d=this.getRandomInt(170,220));var b="rgba(".concat(c,", ").concat(l,", ").concat(d,", .6)");r.push(b);var m="rgba(".concat(c,", ").concat(l,", ").concat(d,", 1)");o.push(m),h=!1}i.splice(0,s),r.splice(0,s),o.splice(0,s);var v={label:"Cases",data:i,backgroundColor:r,borderColor:o,borderWidth:1},C=t.timeline.deaths,y=[],g=[],j=[],_=0,S=!0;for(var w in C){var x=C[w];y.push(x-_),_=x,(S||"pie"===this.charType||"polarArea"===this.charType||"doughnut"===this.charType)&&(c=this.getRandomInt(10,140),l=this.getRandomInt(10,140),d=this.getRandomInt(10,140));var O="rgba(".concat(c,", ").concat(l,", ").concat(d,", .4)");g.push(O);var k="rgba(".concat(c,", ").concat(l,", ").concat(d,", 1)");j.push(k),S=!1}y.splice(0,s),g.splice(0,s),j.splice(0,s);var L={label:"Deaths",data:y,backgroundColor:g,borderColor:j,borderWidth:1},D=[v,L];this.chartLabels=a,this.chartDataset=D}else this.loadSpecificCountryCoronaVirusHistory()},getRandomInt:function(t,a){return t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t}}),mounted:function(){this.loadSpecificCountryCoronaVirusHistory()}},Xt=Qt,Yt=Object(d["a"])(Xt,It,Bt,!1,null,"7b2e0099",null),Zt=Yt.exports,ta={name:"Bangladesh",components:{CountryHistoryChartComponent:Zt,BangladeshStatsComponent:Gt}},aa=ta,ea=(e("4c21"),Object(d["a"])(aa,Nt,Pt,!1,null,"5aa73915",null)),sa=ea.exports;s["a"].use(D["a"]);var na=[{path:"/",name:"home",component:Wt,redirect:{name:"global"},meta:{title:"Corona Virus Update | Shibbir Ahmed"}},{path:"/global",name:"global",component:Wt,meta:{title:"Global Corona Virus Update | Shibbir Ahmed"}},{path:"/Bangladesh",name:"region.bangladesh",component:sa,meta:{title:"Bangladesh Corona Virus Update | Shibbir Ahmed"}}],ra=new D["a"]({base:"/corona-virus-update/",routes:na});ra.beforeEach((function(t,a,e){var s=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),n=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));a.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(s&&(document.title=s.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!n)return e();n.meta.metaTags.map((function(t){var a=document.createElement("meta");return Object.keys(t).forEach((function(e){a.setAttribute(e,t[e])})),a.setAttribute("data-vue-router-controlled",""),a})).forEach((function(t){return document.head.appendChild(t)})),e()}));var oa=ra,ia={globalStatistics:{},countryWiseData:[],countryWiseHistories:[]},ca=(e("4de4"),e("caad"),e("2532"),{getterSearchCountry:function(t){return function(a){return 0===a.length?t.countryWiseData:t.countryWiseData.filter((function(t){return t.country.toLowerCase().includes(a.toLowerCase())}))}},getterBangladeshStatistics:function(t){return t.countryWiseData.find((function(t){return"Bangladesh"===t.country}))},getterSpecificCountryHistory:function(t){return function(a){return t.countryWiseHistories.find((function(t){return t.country===a}))}}}),la={mutationLoadGlobalStatistics:function(t,a){t.globalStatistics=a},mutationLoadCountryWiseStatistics:function(t,a){t.countryWiseData=a},mutationLoadCountryWiseHistory:function(t,a){var e=null;t.countryWiseHistories.forEach((function(t,s){t.country===a.country&&(e=s)})),null!=e&&t.countryWiseHistories.splice(e,1),t.countryWiseHistories.push(a)}},da=(e("d3b7"),"https://corona.lmao.ninja/"),ua="https://corona.lmao.ninja/v2/",ha=e("bc3a"),fa=e.n(ha),pa={actionLoadGlobalStatistics:function(t){var a=t.commit;return new Promise((function(t,e){fa.a.get(da+"all").then((function(e){a("mutationLoadGlobalStatistics",e.data),t(e.data)})).catch((function(t){return e(t)}))}))},actionLoadCountryWiseStatistics:function(t){var a=t.commit;return new Promise((function(t,e){fa.a.get(da+"countries").then((function(e){a("mutationLoadCountryWiseStatistics",e.data),t(e.data)})).catch((function(t){return e(t)}))}))},actionLoadSpecificCountryCoronaVirusHistory:function(t,a){var e=t.commit,s=a.country;return new Promise((function(t,a){fa.a.get(ua+"historical/"+s).then((function(a){e("mutationLoadCountryWiseHistory",a.data),t(a)})).catch((function(t){return a(t)}))}))}};s["a"].use(z["a"]);var ba=new z["a"].Store({state:ia,getters:ca,mutations:la,actions:pa}),ma=(e("4989"),e("ecee")),va=e("c074"),Ca=e("ad3d");ma["c"].add(va["b"],va["c"],va["a"]),s["a"].component("font-awesome-icon",Ca["a"]),s["a"].config.productionTip=!1,new s["a"]({router:oa,store:ba,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),n=e.n(s);n.a},"6dca":function(t,a,e){},8010:function(t,a,e){"use strict";var s=e("fb4b"),n=e.n(s);n.a},"9c0c":function(t,a,e){},be06:function(t,a,e){"use strict";var s=e("421b"),n=e.n(s);n.a},c61d:function(t,a,e){},fb4b:function(t,a,e){}});
//# sourceMappingURL=app.fbd6339f.js.map