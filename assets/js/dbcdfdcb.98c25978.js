"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"features/economy/eval/eval",id:"features/economy/eval/eval",title:"eval",description:"Create custom data column from loaded datasets. Can be mathematical expressions supported by pandas.eval() function.",source:"@site/content/terminal/features/economy/eval/eval.md",sourceDirName:"features/economy/eval",slug:"/features/economy/eval/",permalink:"/docs/terminal/features/economy/eval/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/economy/eval/eval.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"edebt",permalink:"/docs/terminal/features/economy/edebt/"},next:{title:"events",permalink:"/docs/terminal/features/economy/events/"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: eval [-q QUERY [QUERY ...]] [-h] [--export EXPORT]\n")),(0,a.kt)("p",null,"Create custom data column from loaded datasets. Can be mathematical expressions supported by pandas.eval() function.\nExample. If I have loaded ",(0,a.kt)("inlineCode",{parentName:"p"},"fred DGS2,DGS5")," and I want to create a new column that is the difference between these two,\nI can create a new column by doing ",(0,a.kt)("inlineCode",{parentName:"p"},"eval spread = DGS2 - DGS5"),"."),(0,a.kt)("p",null,"Notice that the command is case sensitive, i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"DGS2")," is not the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"dgs2"),"."),(0,a.kt)("p",null,"Note that for division, the / operator will cause issues, so one should do ",(0,a.kt)("inlineCode",{parentName:"p"},"*N**-1")," where N is the number you are dividing by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"options:\n  -q QUERY [QUERY ...], --query QUERY [QUERY ...]\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx (default: )\n")))}u.isMDXComponent=!0}}]);