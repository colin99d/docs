"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87736],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41244:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"option_expirations",description:"OpenBB SDK Function"},i="option_expirations",p={unversionedId:"functions/stocks/options/option_expirations",id:"functions/stocks/options/option_expirations",title:"option_expirations",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/stocks/options/option_expirations.md",sourceDirName:"functions/stocks/options",slug:"/functions/stocks/options/option_expirations",permalink:"/sdk/functions/stocks/options/option_expirations",draft:!1,tags:[],version:"current",frontMatter:{title:"option_expirations",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"option_chain",permalink:"/sdk/functions/stocks/options/option_chain"},next:{title:"pcr",permalink:"/sdk/functions/stocks/options/pcr"}},l={},s=[{value:"stocks_options_yfinance_model.option_expirations",id:"stocks_options_yfinance_modeloption_expirations",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"option_expirations"},"option_expirations"),(0,o.kt)("h2",{id:"stocks_options_yfinance_modeloption_expirations"},"stocks_options_yfinance_model.option_expirations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/stocks/options/yfinance_model.py'",title:"'openbb_terminal/stocks/options/yfinance_model.py'"},"def option_expirations(symbol: str) -> None:\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L137"},"Source Code")),(0,o.kt)("p",null,"Description: Get available expiration dates for given ticker"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"symbol"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Ticker symbol to get expirations for"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,o.kt)("td",{parentName:"tr",align:null},"List of of available expirations")))),(0,o.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);