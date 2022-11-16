"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=n,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?o.createElement(m,l(l({ref:t},s),{},{components:r})):o.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={},l=void 0,i={unversionedId:"features/portfolio/po/load/load",id:"features/portfolio/po/load/load",title:"load",description:"Load file with stocks tickers and categories.",source:"@site/content/terminal/features/portfolio/po/load/load.md",sourceDirName:"features/portfolio/po/load",slug:"/features/portfolio/po/load/",permalink:"/terminal/features/portfolio/po/load/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/portfolio/po/load/load.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hrp",permalink:"/terminal/features/portfolio/po/hrp/"},next:{title:"maxdecorr",permalink:"/terminal/features/portfolio/po/maxdecorr/"}},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: load -f FILE [FILE ...] [-h]\n")),(0,n.kt)("p",null,"Load file with stocks tickers and categories."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"2022 Apr 26, 01:35 (\ud83e\udd8b) /portfolio/po/ $ load -f allocation.xlsx\n2022 Apr 26, 02:15 (\ud83e\udd8b) /portfolio/po/ $ show\n\nCurrent Portfolios: None\n\nCurrent Categories: ASSET_CLASS, SECTOR, INDUSTRY, COUNTRY, CURRENT_INVESTED_AMOUNT, CURRENCY\n")))}u.isMDXComponent=!0}}]);