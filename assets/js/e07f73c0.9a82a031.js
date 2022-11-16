"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"data",description:"OpenBB Terminal Function"},i="Fundamental Analysis",s={unversionedId:"features/stocks/fa/data",id:"features/stocks/fa/data",title:"data",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/fa/data.md",sourceDirName:"features/stocks/fa",slug:"/features/stocks/fa/data",permalink:"/terminal/features/stocks/fa/data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/fa/data.md",tags:[],version:"current",frontMatter:{title:"data",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"cash",permalink:"/terminal/features/stocks/fa/cash"},next:{title:"dcf",permalink:"/terminal/features/stocks/fa/dcf"}},c={},l=[{value:"data",id:"data",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fundamental-analysis"},"Fundamental Analysis"),(0,n.kt)("h2",{id:"data"},"data"),(0,n.kt)("h3",{id:"description"},"Description:"),(0,n.kt)("p",null,"Print several metrics about the company. The following fields are expected: Company, Sector, Industry, Country, Index, P/E, EPS (ttm), Insider Own, Shs Outstand, Perf Week, Market Cap, Forward P/E, EPS next Y, Insider Trans, Shs Float, Perf Month, Income, EPS next Q, Inst Own, Short Float, Perf Quarter, Sales, P/S, EPS this Y, Inst Trans, Short Ratio, Perf Half Y, Book/sh, P/B, ROA, Target Price, Perf Year, Cash/sh, P/C, ROE, 52W Range, Perf YTD, P/FCF, EPS past 5Y, ROI, 52W High, Beta, Quick Ratio, Sales past 5Y, Gross Margin, 52W Low, ATR, Employees, Current Ratio, Sales Q/Q, Operating Margin, RSI (14), Volatility, Optionable, Debt/Eq, EPS Q/Q, Profit Margin, Rel Volume, Prev Close, Shortable, LT Debt/Eq, Earnings, Payout, Avg Volume, Price, Recommendation, SMA20, SMA50, SMA200, Volume, Change. ","[Source: Finviz]"),(0,n.kt)("h3",{id:"usage"},"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"usage: data\n")))}p.isMDXComponent=!0}}]);