"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"features/futures/historical/historical",id:"features/futures/historical/historical",title:"historical",description:"Display futures historical. [Source: YahooFinance]",source:"@site/content/terminal/features/futures/historical/historical.md",sourceDirName:"features/futures/historical",slug:"/features/futures/historical/",permalink:"/docs/terminal/features/futures/historical/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/futures/historical/historical.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"curve",permalink:"/docs/terminal/features/futures/curve/"},next:{title:"search",permalink:"/docs/terminal/features/futures/search/"}},u={},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: historical [-t TICKER] [-s START] [-e EXPIRY] [-h] [--export EXPORT] [--raw]\n")),(0,a.kt)("p",null,"Display futures historical. ","[Source: YahooFinance]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -t TICKER, --ticker TICKER\n                        Future ticker to display timeseries separated by comma when multiple, e.g.: BLK,QI (default: )\n  -s START, --start START\n                        Initial date. Default: 3 years ago (default: 2019-10-20 00:12:05.223144)\n  -e EXPIRY, --expiry EXPIRY\n                        Select future expiry date with format YYYY-MM (default: )\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n  --raw                 Flag to display raw data (default: False)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Oct 18, 19:16 (\ud83e\udd8b) /futures/ $ historical BLK\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/196562549-1251b0fd-ca36-4e0f-bca6-b6bfe473effa.png",alt:"blk"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Oct 18, 19:17 (\ud83e\udd8b) /futures/ $ historical BLK -e 2022-12\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/196562627-79f9ffa1-8582-457c-91e8-5c18d6d4304f.png",alt:"Figure_31"})))}p.isMDXComponent=!0}}]);