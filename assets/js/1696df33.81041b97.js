"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,c={unversionedId:"features/common/qa/om/om",id:"features/common/qa/om/om",title:"om",description:"Provides omega ratio of the selected stock.",source:"@site/content/terminal/features/common/qa/om/om.md",sourceDirName:"features/common/qa/om",slug:"/features/common/qa/om/",permalink:"/docs/terminal/features/common/qa/om/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/common/qa/om/om.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"normality",permalink:"/docs/terminal/features/common/qa/normality/"},next:{title:"pick",permalink:"/docs/terminal/features/common/qa/pick/"}},s={},l=[],m={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: om [-s START] [-e END] [-h]\n")),(0,o.kt)("p",null,"Provides omega ratio of the selected stock."),(0,o.kt)("p",null,"The omega ratio is the probability weighted ratio of gains versus losses for a threshold return. This is in practice\ndone by getting the sum of the returns above the threshold return and of the returns below it and then calculating the\nratio between these sums. For more, read: ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Omega_ratio"},"https://en.wikipedia.org/wiki/Omega_ratio")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -s START, --start START\n                        Start of the omega ratio threshold (default: 0)\n  -e END, --end END     End of the omega ratio threshold (default: 1.5)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75195383/163530147-557ad48b-c6ec-43d3-8d33-6ad4f02a6cfb.png",alt:"image"})))}u.isMDXComponent=!0}}]);