"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62566],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(d,p(p({ref:r},s),{},{components:t})):n.createElement(d,p({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5373:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={},p=void 0,l={unversionedId:"features/economy/perfmap",id:"features/economy/perfmap",title:"perfmap",description:".. role:: python(code)",source:"@site/terminal/features/economy/perfmap.md",sourceDirName:"features/economy",slug:"/features/economy/perfmap",permalink:"/docs/terminal/features/economy/perfmap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/economy/perfmap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/docs/terminal/features/economy/overview"},next:{title:"performance",permalink:"/docs/terminal/features/economy/performance"}},i={},c=[],s={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\neconomy.perfmap(\nperiod: str = '1d',\nmap_filter: str = 'sp500',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nOpens Finviz map website in a browser. [Source: Finviz]\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  period : str\nPerformance period. Available periods are 1d, 1w, 1m, 3m, 6m, 1y.\nscope : str\nMap filter. Available map filters are sp500, world, full, etf."))))}u.isMDXComponent=!0}}]);