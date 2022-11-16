"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"features/etf/news/news",id:"features/etf/news/news",title:"news",description:"Prints latest news about ETF, including date, title and web link. [Source: News API]",source:"@site/content/terminal/features/etf/news/news.md",sourceDirName:"features/etf/news",slug:"/features/etf/news/",permalink:"/terminal/features/etf/news/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/etf/news/news.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/features/etf/load/"},next:{title:"overview",permalink:"/terminal/features/etf/overview/"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: news [-l LIMIT] [-d N_START_DATE] [-o] [-s SOURCES [SOURCES ...]] [-h]\n")),(0,a.kt)("p",null,"Prints latest news about ETF, including date, title and web link. ","[Source: News API]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -l LIMIT, --limit LIMIT\n                        Limit of latest news being printed.\n  -d N_START_DATE, --date N_START_DATE\n                        The starting date (format YYYY-MM-DD) to search articles from\n  -o, --oldest          Show oldest articles first\n  -s SOURCES [SOURCES ...], --sources SOURCES [SOURCES ...]\n                        Show news only from the sources specified (e.g bbc yahoo.com)\n  -h, --help            show this help message\n")),(0,a.kt)("p",null,"Sample output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"18 news articles for iShares+Russell+2000+ETF were found since 2022-01-11\n\n2022-01-18 18:38:25   First National Bank of South Miami Buys iShares Commodities Select Strategy ETF, Walmart Inc, ...\nhttps://finance.yahoo.com/news/first-national-bank-south-miami-183825873.html \n\n2022-01-18 16:53:20   Stock Market Sinks As Techs, Financials Slide; 3 Energy Stocks Top Buy Points\nhttps://www.investors.com/market-trend/stock-market-today/stock-market-slides-as-yields-keep-rising-3-stocks-in-energy-sector-top-buy-points/ \n\n2022-01-18 14:00:00   Vistra: Turning A Threat Into An Opportunity\nhttps://seekingalpha.com/article/4480026-vistra-turning-a-threat-into-an-opportunity \n\n2022-01-18 11:17:44   Dow Jones Futures Fall, Techs Dive As Treasury Yield Hits 2-Year High; Apple, Qualcomm Near Buy Points\nhttps://www.investors.com/market-trend/stock-market-today/dow-jones-futures-fall-techs-dive-treasury-yield-hits-2-year-high-apple-qualcomm-stock-near-buy-points/ \n\n2022-01-17 16:30:54   IYW: Technology Dashboard For January\nhttps://seekingalpha.com/article/4479986-iyw-technology-dashboard-for-january \n")))}p.isMDXComponent=!0}}]);