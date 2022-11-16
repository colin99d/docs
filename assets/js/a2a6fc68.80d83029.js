"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,l={unversionedId:"features/crypto/dd/balance/balance",id:"features/crypto/dd/balance/balance",title:"balance",description:"Display balance",source:"@site/content/terminal/features/crypto/dd/balance/balance.md",sourceDirName:"features/crypto/dd/balance",slug:"/features/crypto/dd/balance/",permalink:"/docs/terminal/features/crypto/dd/balance/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/crypto/dd/balance/balance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"atl",permalink:"/docs/terminal/features/crypto/dd/atl/"},next:{title:"basic",permalink:"/docs/terminal/features/crypto/dd/basic/"}},s={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: balance [--vs {USDT,TUSD,USDC,BUSD,NGN,RUB,TRY,EUR,IDRT,GBP,UAH,BIDR,AUD,DAI,BRL,VAI,USDP}] [--export {csv,json,xlsx}] [-h]\n")),(0,a.kt)("p",null,"Display balance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  --vs {USDT,TUSD,USDC,BUSD,NGN,RUB,TRY,EUR,IDRT,GBP,UAH,BIDR,AUD,DAI,BRL,VAI,USDP}\n                        Quote currency (what to view coin vs) (default: USDT)\n  --export {csv,json,xlsx}\n                        Export dataframe data to csv,json,xlsx file (default: )\n  -h, --help            show this help message (default: False)\n")))}u.isMDXComponent=!0}}]);