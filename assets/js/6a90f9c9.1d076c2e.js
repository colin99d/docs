"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27891],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(r),m=o,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,s(s({ref:e},p),{},{components:r})):n.createElement(k,s({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11648:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"sidtc",description:"OpenBB SDK Function"},s="sidtc",l={unversionedId:"functions/stocks/dps/sidtc",id:"functions/stocks/dps/sidtc",title:"sidtc",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/stocks/dps/sidtc.md",sourceDirName:"functions/stocks/dps",slug:"/functions/stocks/dps/sidtc",permalink:"/sdk/functions/stocks/dps/sidtc",draft:!1,tags:[],version:"current",frontMatter:{title:"sidtc",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"shorted",permalink:"/sdk/functions/stocks/dps/shorted"},next:{title:"spos",permalink:"/sdk/functions/stocks/dps/spos"}},i={},c=[{value:"openbb_terminal.stocks.dark_pool_shorts.stockgrid_model.get_short_interest_days_to_cover",id:"openbb_terminalstocksdark_pool_shortsstockgrid_modelget_short_interest_days_to_cover",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sidtc"},"sidtc"),(0,o.kt)("h2",{id:"openbb_terminalstocksdark_pool_shortsstockgrid_modelget_short_interest_days_to_cover"},"openbb_terminal.stocks.dark_pool_shorts.stockgrid_model.get_short_interest_days_to_cover"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py'",title:"'openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py'"},"def get_short_interest_days_to_cover(sortby: str) -> DataFrame\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py#L78"},"Source Code")),(0,o.kt)("p",null,"Description: Get short interest and days to cover. ","[Source: Stockgrid]"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sortby"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Field for which to sort by, where 'float': Float Short %%,",(0,o.kt)("br",null),"'dtc': Days to Cover, 'si': Short Interest"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,o.kt)("td",{parentName:"tr",align:null},"Short interest and days to cover data")))),(0,o.kt)("h2",{id:"examples"},"Examples"))}d.isMDXComponent=!0}}]);