"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,c={unversionedId:"features/crypto/onchain/ds/ds",id:"features/crypto/onchain/ds/ds",title:"ds",description:"Get daily transactions for certain symbols in ethereum blockchain",source:"@site/content/terminal/features/crypto/onchain/ds/ds.md",sourceDirName:"features/crypto/onchain/ds",slug:"/features/crypto/onchain/ds/",permalink:"/docs/terminal/features/crypto/onchain/ds/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/crypto/onchain/ds/ds.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"btcct",permalink:"/docs/terminal/features/crypto/onchain/btcct/"},next:{title:"dt",permalink:"/docs/terminal/features/crypto/onchain/dt/"}},i={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: ds [-p {uniswap-v3,uniswap-v2,sushiswap,curve}] [-h]\n          [--export EXPORT] [--raw] [-l LIMIT]\n")),(0,a.kt)("p",null,"Get daily transactions for certain symbols in ethereum blockchain\n","[Source: https://sdk.flipsidecrypto.xyz/shroomdk]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"options:\n  -p {uniswap-v3,uniswap-v2,sushiswap,curve}, --platform {uniswap-v3,uniswap-v2,sushiswap,curve}\n                        Ethereum platform to check fees/number of\n                        users over time (default: curve)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx and\n                        figure into png, jpg, pdf, svg (default: )\n  --raw                 Flag to display raw data (default: False)\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data.\n                        (default: 10)\n")))}l.isMDXComponent=!0}}]);