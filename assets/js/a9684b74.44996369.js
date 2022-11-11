"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,c={unversionedId:"features/crypto/dd/oi/oi",id:"features/crypto/dd/oi/oi",title:"oi",description:"Display the open interest per exchange for a certain cryptocurrency. [Source//coinglass.github.io/API-Reference/]",source:"@site/terminal/features/crypto/dd/oi/oi.md",sourceDirName:"features/crypto/dd/oi",slug:"/features/crypto/dd/oi/",permalink:"/docs/terminal/features/crypto/dd/oi/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/dd/oi/oi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ob",permalink:"/docs/terminal/features/crypto/dd/ob/"},next:{title:"pi",permalink:"/docs/terminal/features/crypto/dd/pi/"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: oi [-i {0, 1, 2, 4}]\n            [--export {csv,json,xlsx}] [-h]\n")),(0,o.kt)("p",null,"Display the open interest per exchange for a certain cryptocurrency. ","[Source: https://coinglass.github.io/API-Reference/]","\nCrypto must be loaded (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"load btc"),") before running this feature."),(0,o.kt)("p",null,"The total Bitcoin futures open interest across cryptocurrency exchanges, where open interest is calculated as the estimated notional value of all open futures positions, or the aggregate dollar value of outstanding contract specified BTC deliverables. Includes the largest exchanges with trustworthy reporting of exchange volume metrics."),(0,o.kt)("p",null,"Interval:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ALL: 0"),(0,o.kt)("li",{parentName:"ul"},"1H: 2"),(0,o.kt)("li",{parentName:"ul"},"4H: 1"),(0,o.kt)("li",{parentName:"ul"},"12H: 4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -i INTERV --interval INTERV   Interval frequency (default: 0)\n  --export {csv,json,xlsx}      Export dataframe data to csv,json,xlsx file (default: )\n  -h, --help                    show this help message (default: False)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154086745-17c2b33a-e1bf-40b1-8ac8-3422fe081e96.png",alt:"oi"})))}u.isMDXComponent=!0}}]);