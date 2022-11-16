"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90403],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>s});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=o.createContext({}),f=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=f(t.components);return o.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=f(r),s=n,d=m["".concat(p,".").concat(s)]||m[s]||u[s]||a;return r?o.createElement(d,i(i({ref:e},c),{},{components:r})):o.createElement(d,i({ref:e},c))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var f=2;f<a;f++)i[f]=r[f];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26324:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var o=r(87462),n=(r(67294),r(3905));const a={title:"profitfactor",description:"OpenBB SDK Function"},i="profitfactor",l={unversionedId:"functions/portfolio/metric/profitfactor",id:"functions/portfolio/metric/profitfactor",title:"profitfactor",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/metric/profitfactor.md",sourceDirName:"functions/portfolio/metric",slug:"/functions/portfolio/metric/profitfactor",permalink:"/sdk/functions/portfolio/metric/profitfactor",draft:!1,tags:[],version:"current",frontMatter:{title:"profitfactor",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"payoff",permalink:"/sdk/functions/portfolio/metric/payoff"},next:{title:"rsquare",permalink:"/sdk/functions/portfolio/metric/rsquare"}},p={},f=[{value:"openbb_terminal.portfolio.portfolio_model.get_profit_factor",id:"openbb_terminalportfolioportfolio_modelget_profit_factor",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:f};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"profitfactor"},"profitfactor"),(0,n.kt)("h2",{id:"openbb_terminalportfolioportfolio_modelget_profit_factor"},"openbb_terminal.portfolio.portfolio_model.get_profit_factor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_model.py'",title:"'openbb_terminal/portfolio/portfolio_model.py'"},"def get_profit_factor(portfolio_engine: portfolio_model.PortfolioEngine) -> None\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1501"},"Source Code")),(0,n.kt)("p",null,"Description: Gets profit factor"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,n.kt)("td",{parentName:"tr",align:null},"PortfolioEngine"),(0,n.kt)("td",{parentName:"tr",align:null},"PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.kt)("br",null),"Use ",(0,n.kt)("inlineCode",{parentName:"td"},"portfolio.load")," to create a PortfolioEngine."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"DataFrame of profit factor of the portfolio during different time periods")))),(0,n.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);