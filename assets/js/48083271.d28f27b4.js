"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51546],{3905:(t,e,n)=>{n.d(e,{Zo:()=>f,kt:()=>s});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},f=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),u=m(n),s=o,d=u["".concat(p,".").concat(s)]||u[s]||c[s]||a;return n?r.createElement(d,i(i({ref:e},f),{},{components:n})):r.createElement(d,i({ref:e},f))}));function s(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20070:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={title:"information",description:"OpenBB SDK Function"},i="information",l={unversionedId:"functions/portfolio/metric/information",id:"functions/portfolio/metric/information",title:"information",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/metric/information.md",sourceDirName:"functions/portfolio/metric",slug:"/functions/portfolio/metric/information",permalink:"/sdk/functions/portfolio/metric/information",draft:!1,tags:[],version:"current",frontMatter:{title:"information",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"gaintopain",permalink:"/sdk/functions/portfolio/metric/gaintopain"},next:{title:"jensens",permalink:"/sdk/functions/portfolio/metric/jensens"}},p={},m=[{value:"portfolio_model.get_information_ratio",id:"portfolio_modelget_information_ratio",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],f={toc:m};function c(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"information"},"information"),(0,o.kt)("h2",{id:"portfolio_modelget_information_ratio"},"portfolio_model.get_information_ratio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_model.py'",title:"'openbb_terminal/portfolio/portfolio_model.py'"},"def get_information_ratio(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel) -> None:\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1147"},"Source Code")),(0,o.kt)("p",null,"Description: Get information ratio"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio object with trades loaded"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,o.kt)("td",{parentName:"tr",align:null},"DataFrame of the information ratio during different time periods")))),(0,o.kt)("h2",{id:"examples"},"Examples"))}c.isMDXComponent=!0}}]);