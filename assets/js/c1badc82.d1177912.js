"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,f=c["".concat(d,".").concat(s)]||c[s]||p[s]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"load",description:"OpenBB Terminal Function"},i="Forex",o={unversionedId:"features/forex/load",id:"features/forex/load",title:"load",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/forex/load.md",sourceDirName:"features/forex",slug:"/features/forex/load",permalink:"/terminal/features/forex/load",draft:!1,tags:[],version:"current",frontMatter:{title:"load",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/features/forex/fwd"},next:{title:"calendar",permalink:"/terminal/features/forex/oanda/calendar"}},d={},m=[{value:"load",id:"load",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"forex"},"Forex"),(0,r.kt)("h2",{id:"load"},"load"),(0,r.kt)("h3",{id:"description"},"Description:"),(0,r.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,r.kt)("h3",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"usage: load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resolution"),(0,r.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,r.kt)("td",{parentName:"tr",align:null},"1day"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date of data."),(0,r.kt)("td",{parentName:"tr",align:null},"2021-11-16 12:46:00.527235"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))))}p.isMDXComponent=!0}}]);