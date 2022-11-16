"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=i(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||s;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const s={},o=void 0,c={unversionedId:"features/stocks/sia/cps/cps",id:"features/stocks/sia/cps/cps",title:"cps",description:"Companies per sector in the selected country.",source:"@site/content/terminal/features/stocks/sia/cps/cps.md",sourceDirName:"features/stocks/sia/cps",slug:"/features/stocks/sia/cps/",permalink:"/terminal/features/stocks/sia/cps/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/sia/cps/cps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cpis",permalink:"/terminal/features/stocks/sia/cpis/"},next:{title:"exchange",permalink:"/terminal/features/stocks/sia/exchange/"}},p={},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: cps [-M MAX_SECTORS_TO_DISPLAY] [-m MIN_PCT_TO_DISPLAY_SECTOR] [-r] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,a.kt)("p",null,"Companies per sector in the selected country."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -M MAX_SECTORS_TO_DISPLAY, --max MAX_SECTORS_TO_DISPLAY\n                        Maximum number of sectors to display (default: 15)\n  -m MIN_PCT_TO_DISPLAY_SECTOR, --min MIN_PCT_TO_DISPLAY_SECTOR\n                        Minimum percentage to display sector (default: 0.015)\n  -r, --raw             Output all raw data (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/153896194-512699a7-ce52-4cbd-869e-89397bc96dc4.png",alt:"CPS"})))}u.isMDXComponent=!0}}]);