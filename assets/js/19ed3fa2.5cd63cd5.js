"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55317],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=m(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,l(l({ref:e},c),{},{components:r})):n.createElement(f,l({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},54146:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={title:"calmar",description:"OpenBB SDK Function"},l="calmar",i={unversionedId:"functions/portfolio/calmar",id:"functions/portfolio/calmar",title:"calmar",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/calmar.md",sourceDirName:"functions/portfolio",slug:"/functions/portfolio/calmar",permalink:"/sdk/functions/portfolio/calmar",draft:!1,tags:[],version:"current",frontMatter:{title:"calmar",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"walert",permalink:"/sdk/functions/keys/walert"},next:{title:"commonsense",permalink:"/sdk/functions/portfolio/commonsense"}},p={},m=[{value:"portfolio_model.get_calmar_ratio",id:"portfolio_modelget_calmar_ratio",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:m};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calmar"},"calmar"),(0,a.kt)("h2",{id:"portfolio_modelget_calmar_ratio"},"portfolio_model.get_calmar_ratio"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_model.py'",title:"'openbb_terminal/portfolio/portfolio_model.py'"},"def get_calmar_ratio(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: int) -> None:\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1257"},"Source Code")),(0,a.kt)("p",null,"Description: Get calmar ratio"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,a.kt)("td",{parentName:"tr",align:null},"Portfolio"),(0,a.kt)("td",{parentName:"tr",align:null},"Portfolio object with trades loaded"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"window"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Interval used for rolling values"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"DataFrame of calmar ratio of the benchmark and portfolio during different time periods")))),(0,a.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);