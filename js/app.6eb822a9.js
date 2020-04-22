(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Covid19Stats")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"font-weight":"bold","font-size":"60px",color:"#777777"}},[t._v(" DỊCH BỆNH COVID-19 ")]),n("div",{staticStyle:{color:"#999999"}},[t._v(" Cập nhật lần cuối cùng vào lúc: "+t._s(t.lastUpdatedString)+" ")]),n("br"),n("br"),n("br"),n("div",{staticClass:"font-large"},[n("div",[t._v("Tổng số ca nhiễm đã xác nhận:")]),n("div",{staticStyle:{color:"#AAAAAA","font-weight":"bold"}},[t._v(" "+t._s(t.numberWithCommas(t.data.confirmed))+" ")]),n("br"),n("div",[t._v("Tổng số ca nhiễm đang nguy kịch:")]),n("div",{staticStyle:{color:"#FF0000","font-weight":"bold"}},[t._v(" "+t._s(t.numberWithCommas(t.data.critical))+" ")]),n("br"),n("div",[t._v("Tổng số ca nhiễm đã hồi phục:")]),n("div",{staticStyle:{color:"#8ACA2B","font-weight":"bold"}},[t._v(" "+t._s(t.numberWithCommas(t.data.recovered))+" ")]),n("br"),n("div",[t._v("Tổng số ca tử vong:")]),n("div",{staticStyle:{color:"#696969","font-weight":"bold"}},[t._v(" "+t._s(t.numberWithCommas(t.data.deaths))+" ")])]),n("br"),n("div",[n("button",{staticClass:"button round-button",attrs:{type:"button"},on:{click:t.fetchData}},[t._v("CẬP NHẬT")])])])},c=[],s=(n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf"),n("1da1")),l="https://covid-19-data.p.rapidapi.com",u={"x-rapidapi-host":"covid-19-data.p.rapidapi.com","x-rapidapi-key":"102816ce5cmsh4c94ef763829602p170083jsnf5119ba0397f"},d={name:"Covid19Stats",data:function(){return{data:{confirmed:0,critical:0,recovered:0,deaths:0},lastUpdatedString:"",refreshInterval:null}},mounted:function(){this.fetchData(),this.refreshInterval=setInterval(this.fetchData,9e5)},methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},fetchData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get(l+"/totals",{headers:u});case 2:n=e.sent,t.data=n.data[0],t.lastUpdatedString=(new Date).toLocaleString("vn");case 5:case"end":return e.stop()}}),e)})))()}},beforeDestroy:function(){clearInterval(this.refreshInterval)}},f=d,p=(n("99dc"),n("2877")),v=Object(p["a"])(f,i,c,!1,null,"9c81c098",null),h=v.exports,b={name:"App",components:{Covid19Stats:h}},g=b,m=(n("034f"),Object(p["a"])(g,o,a,!1,null,null,null)),y=m.exports,w=n("bc3a"),_=n.n(w),S=n("9483");Object(S["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].prototype.$axios=_.a,r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},"99dc":function(t,e,n){"use strict";var r=n("d163"),o=n.n(r);o.a},d163:function(t,e,n){}});
//# sourceMappingURL=app.6eb822a9.js.map