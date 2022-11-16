"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"hcorr",description:"OpenBB Terminal Function"},o="Comparison Analysis",i={unversionedId:"features/stocks/ca/hcorr",id:"features/stocks/ca/hcorr",title:"hcorr",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/ca/hcorr.md",sourceDirName:"features/stocks/ca",slug:"/features/stocks/ca/hcorr",permalink:"/terminal/features/stocks/ca/hcorr",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/ca/hcorr.md",tags:[],version:"current",frontMatter:{title:"hcorr",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"get",permalink:"/terminal/features/stocks/ca/get"},next:{title:"historical",permalink:"/terminal/features/stocks/ca/historical"}},c={},s=[{value:"hcorr",id:"hcorr",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"comparison-analysis"},"Comparison Analysis"),(0,n.kt)("h2",{id:"hcorr"},"hcorr"),(0,n.kt)("h3",{id:"description"},"Description:"),(0,n.kt)("p",null,"Correlation heatmap based on historical price comparison between similar companies."),(0,n.kt)("h3",{id:"usage"},"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"usage: hcorr [-t {o,h,l,c,a,r}] [-s START] [--display-full-matrix]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type_candle"),(0,n.kt)("td",{parentName:"tr",align:null},"Candle data to use: o-open, h-high, l-low, c-close, a-adjusted close, r-returns."),(0,n.kt)("td",{parentName:"tr",align:null},"a"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"o, h, l, c, a, r")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the stock"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-11-15"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"display_full_matrix"),(0,n.kt)("td",{parentName:"tr",align:null},"Display all matrix values, rather than masking off half."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))))}u.isMDXComponent=!0}}]);