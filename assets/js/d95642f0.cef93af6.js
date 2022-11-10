"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?o.createElement(d,l(l({ref:t},c),{},{components:r})):o.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},l=void 0,i={unversionedId:"features/portfolio/sortino",id:"features/portfolio/sortino",title:"sortino",description:".. role:: python(code)",source:"@site/sdk/features/portfolio/sortino.md",sourceDirName:"features/portfolio",slug:"/features/portfolio/sortino",permalink:"/docs/sdk/features/portfolio/sortino",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"skew",permalink:"/docs/sdk/features/portfolio/skew"},next:{title:"summary",permalink:"/docs/sdk/features/portfolio/summary"}},p={},s=[],c={toc:s};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,n.kt)("p",null,"{{< highlight python >}}\nportfolio.sortino(\nportfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel,\nrisk_free_rate: float = 0,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>\nClass method that retrieves sortino ratio for portfolio and benchmark selected\n</p>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("p",{parentName:"li"},"  portfolio: Portfolio\nPortfolio object with trades loaded\nrisk_free_rate: float\nRisk free rate value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataFrame with sortino ratio for portfolio and benchmark for different periods"))))}f.isMDXComponent=!0}}]);