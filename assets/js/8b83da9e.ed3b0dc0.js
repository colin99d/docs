"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,s(s({ref:t},i),{},{components:r})):n.createElement(d,s({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,c={unversionedId:"features/stocks/ca/volume/volume",id:"features/stocks/ca/volume/volume",title:"volume",description:"Charts historical volume of the added tickers.",source:"@site/content/terminal/features/stocks/ca/volume/volume.md",sourceDirName:"features/stocks/ca/volume",slug:"/features/stocks/ca/volume/",permalink:"/terminal/features/stocks/ca/volume/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/ca/volume/volume.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"valuation",permalink:"/terminal/features/stocks/ca/valuation/"},next:{title:"candle",permalink:"/terminal/features/stocks/candle/"}},l={},u=[],i={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"usage: volume [-s] [--export {csv,json,xlsx}] [-h]\n")),(0,a.kt)("p",null,"Charts historical volume of the added tickers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -s, --scale           Flag to not put all prices on same 0-1 scale (default: False)\n  --export {csv,json,xlsx}\n                        Export dataframe data to csv,json,xlsx file (default: )\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154074657-72976b1a-fc27-4917-8d43-95f5b54da32e.png",alt:"volume"})))}p.isMDXComponent=!0}}]);