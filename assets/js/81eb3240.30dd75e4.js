"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,c={unversionedId:"features/crypto/defi/aterra/aterra",id:"features/crypto/defi/aterra/aterra",title:"aterra",description:"Displays the 30-day history of an asset in a certain terra address. [Source//terra.engineer/]",source:"@site/content/terminal/features/crypto/defi/aterra/aterra.md",sourceDirName:"features/crypto/defi/aterra",slug:"/features/crypto/defi/aterra/",permalink:"/terminal/features/crypto/defi/aterra/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/crypto/defi/aterra/aterra.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"anchor",permalink:"/terminal/features/crypto/defi/anchor/"},next:{title:"ayr",permalink:"/terminal/features/crypto/defi/ayr/"}},i={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: aterra [--asset {ust,luna,sdt}] [--address ADDRESS] [-h] [--export {csv,json,xlsx}]\n")),(0,n.kt)("p",null,"Displays the 30-day history of an asset in a certain terra address. ","[Source: https://terra.engineer/]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  --asset {ust,luna,sdt}\n                        Terra asset {ust,luna,sdt} Default: ust (default: ust)\n  --address ADDRESS     Terra address. Valid terra addresses start with 'terra' (default: None)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"2022 Feb 15, 06:00 (\u2728) /crypto/defi/ $ aterra --asset luna --address terra18vnrzlzm2c4xfsx382pj2xndqtt00rvhu24sqe\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154049081-7f2298ba-8a0e-4aaa-a5b1-5bc4f92af312.png",alt:"aterra"})))}u.isMDXComponent=!0}}]);