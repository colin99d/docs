"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return r?o.createElement(d,l(l({ref:t},f),{},{components:r})):o.createElement(d,l({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={},l=void 0,p={unversionedId:"features/portfolio/perf",id:"features/portfolio/perf",title:"perf",description:".. role:: python(code)",source:"@site/terminal/features/portfolio/perf.md",sourceDirName:"features/portfolio",slug:"/features/portfolio/perf",permalink:"/docs/terminal/features/portfolio/perf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/perf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"payoff",permalink:"/docs/terminal/features/portfolio/payoff"},next:{title:"blacklitterman",permalink:"/docs/terminal/features/portfolio/po/blacklitterman"}},i={},c=[],f={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,n.kt)("p",null,"{{< highlight python >}}\nportfolio.perf(\nportfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel,\nshow_all_trades: bool = False,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>\nGet portfolio performance vs the benchmark\n</p>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("p",{parentName:"li"},"  portfolio: Portfolio\nPortfolio object with trades loaded\nshow_all_trades: bool\nWhether to also show all trades made and their performance (default is False)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  pd.DataFrame"))))}s.isMDXComponent=!0}}]);