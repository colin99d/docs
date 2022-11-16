"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25811],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,h=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,c={unversionedId:"features/stocks/scr/historical/historical",id:"features/stocks/scr/historical/historical",title:"historical",description:"Historical price comparison between similar companies [Source: Yahoo Finance]",source:"@site/content/terminal/features/stocks/scr/historical/historical.md",sourceDirName:"features/stocks/scr/historical",slug:"/features/stocks/scr/historical/",permalink:"/terminal/features/stocks/scr/historical/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/scr/historical/historical.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"financial",permalink:"/terminal/features/stocks/scr/financial/"},next:{title:"overview",permalink:"/terminal/features/stocks/scr/overview/"}},i={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: historical [-l LIMIT] [-n] [-s START] [-t {o,h,l,c,a}] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,o.kt)("p",null,"Historical price comparison between similar companies ","[Source: Yahoo Finance]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -l LIMIT, --limit LIMIT\n                        Limit of the most shorted stocks to retrieve.\n  -n, --no-scale        Flag to not put all prices on same 0-1 scale\n  -s START, --start START\n                        The starting date (format YYYY-MM-DD) of the historical price to plot\n  -t {o,h,l,c,a}, --type {o,h,l,c,a}\n                        type of candles: o-open, h-high, l-low, c-close, a-adjusted close.\n  -h, --help            show this help message\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/153897343-65a26523-0fb1-4b92-8988-85eb84e92c33.png",alt:"historical"})))}u.isMDXComponent=!0}}]);