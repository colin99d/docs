"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(d,c(c({ref:t},m),{},{components:r})):n.createElement(d,c({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},54354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,p={unversionedId:"features/economy/map/map",id:"features/economy/map/map",title:"map",description:"Performance index stocks map categorized by sectors and industries. Size represents market cap. Opens web-browser. [Source: Finviz]",source:"@site/content/terminal/features/economy/map/map.md",sourceDirName:"features/economy/map",slug:"/features/economy/map/",permalink:"/docs/terminal/features/economy/map/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/economy/map/map.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"macro",permalink:"/docs/terminal/features/economy/macro/"},next:{title:"options",permalink:"/docs/terminal/features/economy/options/"}},s={},i=[],m={toc:i};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: map [-p {1d,1w,1m,3m,6m,1y}] [-t {sp500,world,full,etf}] [-h]\n")),(0,o.kt)("p",null,"Performance index stocks map categorized by sectors and industries. Size represents market cap. Opens web-browser. ","[Source: Finviz]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -p {1d,1w,1m,3m,6m,1y}, --period {1d,1w,1m,3m,6m,1y}\n                        Performance period. (default: 1d)\n  -t {sp500,world,full,etf}, --type {sp500,world,full,etf}\n                        Map filter type. (default: sp500)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154042399-ede7eb15-de7f-4de7-8541-3700ad2a97a0.png",alt:"map"})))}l.isMDXComponent=!0}}]);