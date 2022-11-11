"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(d,l(l({ref:t},m),{},{components:r})):a.createElement(d,l({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"features/common/ta/atr/atr",id:"features/common/ta/atr/atr",title:"atr",description:"Averge True Range is used to measure volatility, especially volatility caused by gaps or limit moves.",source:"@site/terminal/features/common/ta/atr/atr.md",sourceDirName:"features/common/ta/atr",slug:"/features/common/ta/atr/",permalink:"/docs/terminal/features/common/ta/atr/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/common/ta/atr/atr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aroon",permalink:"/docs/terminal/features/common/ta/aroon/"},next:{title:"bbands",permalink:"/docs/terminal/features/common/ta/bbands/"}},s={},c=[],m={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: atr [-l N_LENGTH] [-m {ema,sma,wma,hma,zlma}] [-o N_OFFSET] [-h] [--export EXPORT]\n")),(0,n.kt)("p",null,"Averge True Range is used to measure volatility, especially volatility caused by gaps or limit moves."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  -l N_LENGTH, --length N_LENGTH\n                        Window length (default: 14)\n  -m {ema,sma,wma,hma,zlma}, --mamode {ema,sma,wma,hma,zlma}\n                        mamode (default: ema)\n  -o N_OFFSET, --offset N_OFFSET\n                        offset (default: 0)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n\n")))}u.isMDXComponent=!0}}]);