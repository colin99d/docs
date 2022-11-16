"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=i(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,l={unversionedId:"features/crypto/defi/stvl/stvl",id:"features/crypto/defi/stvl/stvl",title:"stvl",description:"Displays historical values of the total sum of TVLs from all listed dApps. [Source//docs.llama.fi/api]",source:"@site/content/terminal/features/crypto/defi/stvl/stvl.md",sourceDirName:"features/crypto/defi/stvl",slug:"/features/crypto/defi/stvl/",permalink:"/terminal/features/crypto/defi/stvl/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/crypto/defi/stvl/stvl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stats",permalink:"/terminal/features/crypto/defi/stats/"},next:{title:"swaps",permalink:"/terminal/features/crypto/defi/swaps/"}},p={},i=[],c={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: stvl [-l LIMIT] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]]\n")),(0,a.kt)("p",null,"Displays historical values of the total sum of TVLs from all listed dApps. ","[Source: https://docs.llama.fi/api]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -l LIMIT, --limit LIMIT\n                        Number of records to display (default: 10)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154054369-2c9dd45c-26b6-4255-81f6-7e839169c786.png",alt:"stvl"})))}u.isMDXComponent=!0}}]);