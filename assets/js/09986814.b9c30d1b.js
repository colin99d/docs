"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),f=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=f(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=f(r),s=n,d=m["".concat(l,".").concat(s)]||m[s]||u[s]||a;return r?o.createElement(d,i(i({ref:t},c),{},{components:r})):o.createElement(d,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var f=2;f<a;f++)i[f]=r[f];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>f});var o=r(87462),n=(r(67294),r(3905));const a={title:"payoff",description:"OpenBB SDK Function"},i="payoff",p={unversionedId:"functions/portfolio/metric/payoff",id:"functions/portfolio/metric/payoff",title:"payoff",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/metric/payoff.md",sourceDirName:"functions/portfolio/metric",slug:"/functions/portfolio/metric/payoff",permalink:"/sdk/functions/portfolio/metric/payoff",draft:!1,tags:[],version:"current",frontMatter:{title:"payoff",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"maxdrawdown",permalink:"/sdk/functions/portfolio/metric/maxdrawdown"},next:{title:"profitfactor",permalink:"/sdk/functions/portfolio/metric/profitfactor"}},l={},f=[{value:"openbb_terminal.portfolio.portfolio_model.get_payoff_ratio",id:"openbb_terminalportfolioportfolio_modelget_payoff_ratio",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:f};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"payoff"},"payoff"),(0,n.kt)("h2",{id:"openbb_terminalportfolioportfolio_modelget_payoff_ratio"},"openbb_terminal.portfolio.portfolio_model.get_payoff_ratio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_model.py'",title:"'openbb_terminal/portfolio/portfolio_model.py'"},"def get_payoff_ratio(portfolio_engine: portfolio_model.PortfolioEngine) -> None\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1478"},"Source Code")),(0,n.kt)("p",null,"Description: Gets payoff ratio"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This function does not take any parameters."),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"DataFrame of payoff ratio of the portfolio during different time periods")))),(0,n.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);