"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,i={unversionedId:"features/crypto/onchain/tv/tv",id:"features/crypto/onchain/tv/tv",title:"tv",description:"Display token volume on different Decentralized Exchanges [Source//graphql.bitquery.io/]",source:"@site/terminal/features/crypto/onchain/tv/tv.md",sourceDirName:"features/crypto/onchain/tv",slug:"/features/crypto/onchain/tv/",permalink:"/docs/terminal/features/crypto/onchain/tv/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/onchain/tv/tv.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ttcp",permalink:"/docs/terminal/features/crypto/onchain/ttcp/"},next:{title:"tvl",permalink:"/docs/terminal/features/crypto/onchain/tvl/"}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: volt [-c COIN] [-vs {ETH,USD,BTC,USDT}] [-l N]\n            [-s {exchange,coin,tradeAmount,trades}] [--descend] [-h]\n            [--export {csv,json,xlsx}]\n")),(0,o.kt)("p",null,"Display token volume on different Decentralized Exchanges ","[Source: https://graphql.bitquery.io/]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -c COIN, --coin COIN  ERC20 token symbol or address. (default: ETH)\n  -vs {ETH,USD,BTC,USDT}, --vs {ETH,USD,BTC,USDT}\n                        Currency of displayed trade amount. (default: USD)\n  -l N, --limit N     display N number records (default: 10)\n  -s {exchange,coin,tradeAmount,trades}, --sort {exchange,coin,tradeAmount,trades}\n                        Sort by given column. (default: trades)\n  --descend             Flag to sort in descending order (lowest first)\n                        (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n\n")))}p.isMDXComponent=!0}}]);