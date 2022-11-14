"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"features/stocks/options/hedge/pick/pick",id:"features/stocks/options/hedge/pick/pick",title:"pick",description:"Example",source:"@site/content/terminal/features/stocks/options/hedge/pick/pick.md",sourceDirName:"features/stocks/options/hedge/pick",slug:"/features/stocks/options/hedge/pick/",permalink:"/docs/terminal/features/stocks/options/hedge/pick/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/options/hedge/pick/pick.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"list",permalink:"/docs/terminal/features/stocks/options/hedge/list/"},next:{title:"rmv",permalink:"/docs/terminal/features/stocks/options/hedge/rmv/"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: long [-p PICK [PICK ...]] [-a AMOUNT] [-h]\n\nThis function plots option hedge diagrams\n\noptional arguments:\n  -p PICK [PICK ...], --pick PICK [PICK ...]\n                        Choose what you would like to pick (default: None)\n  -a AMOUNT, --amount AMOUNT\n                        Choose the amount invested (default: 1000)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 May 10, 09:21 (\ud83e\udd8b) /stocks/options/hedge/ $ pick 170 Short Call -a 500\n2022 May 10, 09:22 (\ud83e\udd8b) /stocks/options/hedge/ $ help\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500Stocks - Options - Hedge \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e      \n\u2502 Ticker:                                                                |\nAAPL                                                                     |\n\u2502 Expiry:                                                                | 2022-05-13          |                                                                         \n\u2502     pick          pick the underlying asset position   \n\u2502                                                                                  \n\u2502 Underlying Asset Position: Short Call 500 @ 170 \n\u2502  \n\u2502     list          show the available strike prices for calls and puts \n\u2502     add           add an option to the list of options  \n\u2502     rmv           remove an option from the list of options \n\u2502     sop           show selected options and neutral portfolio weights \n|\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500OpenBB Terminal \u2500\u256f\n")))}u.isMDXComponent=!0}}]);