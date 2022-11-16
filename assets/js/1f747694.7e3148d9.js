"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9340],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(d,l(l({ref:e},u),{},{components:r})):n.createElement(d,l({ref:e},u))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9400:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"kurtosis",description:"OpenBB SDK Function"},l="kurtosis",i={unversionedId:"functions/portfolio/metric/kurtosis",id:"functions/portfolio/metric/kurtosis",title:"kurtosis",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/metric/kurtosis.md",sourceDirName:"functions/portfolio/metric",slug:"/functions/portfolio/metric/kurtosis",permalink:"/sdk/functions/portfolio/metric/kurtosis",draft:!1,tags:[],version:"current",frontMatter:{title:"kurtosis",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"kelly",permalink:"/sdk/functions/portfolio/metric/kelly"},next:{title:"maxdrawdown",permalink:"/sdk/functions/portfolio/metric/maxdrawdown"}},p={},s=[{value:"portfolio_model.get_kurtosis",id:"portfolio_modelget_kurtosis",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s};function c(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kurtosis"},"kurtosis"),(0,o.kt)("h2",{id:"portfolio_modelget_kurtosis"},"portfolio_model.get_kurtosis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_model.py'",title:"'openbb_terminal/portfolio/portfolio_model.py'"},"def get_kurtosis(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel) -> DataFrame:\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L862"},"Source Code")),(0,o.kt)("p",null,"Description: Class method that retrieves kurtosis for portfolio and benchmark selected"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio object with trades loaded"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,o.kt)("td",{parentName:"tr",align:null},"DataFrame with kurtosis for portfolio and benchmark for different periods")))),(0,o.kt)("h2",{id:"examples"},"Examples"))}c.isMDXComponent=!0}}]);