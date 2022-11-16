"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"features/stocks/dps/prom/prom",id:"features/stocks/dps/prom/prom",title:"prom",description:"Display and filter dark pool (ATS) data of tickers with growing trades activity outside of the NYSE/NASDAQ/AMEX/CBOE/ICE systems. Source//finra-markets.morningstar.com/MarketData/EquityOptions/default.jsp",source:"@site/content/terminal/features/stocks/dps/prom/prom.md",sourceDirName:"features/stocks/dps/prom",slug:"/features/stocks/dps/prom/",permalink:"/docs/terminal/features/stocks/dps/prom/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/dps/prom/prom.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pos",permalink:"/docs/terminal/features/stocks/dps/pos/"},next:{title:"psi",permalink:"/docs/terminal/features/stocks/dps/psi/"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: prom [-n N_NUM] [-l LIMIT] [-t {T1,T2,OTCE}] [-h] [--export {csv,json,xlsx}]\n")),(0,o.kt)("p",null,"Display and filter dark pool (ATS) data of tickers with growing trades activity outside of the NYSE/NASDAQ/AMEX/CBOE/ICE systems. Source: ",(0,o.kt)("a",{parentName:"p",href:"http://finra-markets.morningstar.com/MarketData/EquityOptions/default.jsp"},"http://finra-markets.morningstar.com/MarketData/EquityOptions/default.jsp")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -n N_NUM, --num N_NUM\n                        Number of tickers to filter from entire ATS data based on the sum of the total weekly shares quantity. (default: 1000)\n  -l LIMIT, --limit LIMIT\n                        Limit of most promising tickers to display. (default: 10)\n  -t {T1,T2,OTCE}, --tier {T1,T2,OTCE}\n                        Tier to process data from. (default: )\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154076323-2d031477-a70d-4065-b649-c8493fecdcbc.png",alt:"prom"})))}u.isMDXComponent=!0}}]);