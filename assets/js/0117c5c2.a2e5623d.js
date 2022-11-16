"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"features/common/qa/so/so",id:"features/common/qa/so/so",title:"so",description:"Provides the sortino ratio of the selected stock.",source:"@site/content/terminal/features/common/qa/so/so.md",sourceDirName:"features/common/qa/so",slug:"/features/common/qa/so/",permalink:"/terminal/features/common/qa/so/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/common/qa/so/so.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"skew",permalink:"/terminal/features/common/qa/skew/"},next:{title:"spread",permalink:"/terminal/features/common/qa/spread/"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: so [-t TARGET_RETURN] [-a] [-w WINDOW] [-h]\n")),(0,o.kt)("p",null,"Provides the sortino ratio of the selected stock."),(0,o.kt)("p",null,"The sortino ratio is very similar to the sharpe ratio, but different in a crucial way. Sharpe ratio punishes the\nstandard deviation of positive return. The sortino ratio only punishes standard deviation of negative returns. For\nmore, read: ",(0,o.kt)("a",{parentName:"p",href:"http://www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf"},"http://www.redrockcapital.com/Sortino__A__Sharper__Ratio_Red_Rock_Capital.pdf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -t TARGET_RETURN, --target TARGET_RETURN\n                        Target return (default: 0)\n  -a, --adjusted        If one should adjust the sortino ratio inorder to make it comparable to the sharpe ratio\n                        (default: False)\n  -w WINDOW, --window WINDOW\n                        Rolling window length (default: 252)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/75195383/163530572-e527bc75-7ecd-44e3-b971-83b9a0662d0d.png",alt:"image"})))}u.isMDXComponent=!0}}]);