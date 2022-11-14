"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19001],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),c=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=c(r),k=n,d=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return r?a.createElement(d,o(o({ref:e},s),{},{components:r})):a.createElement(d,o({ref:e},s))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28184:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={title:"crypto_hacks",description:"OpenBB SDK Function"},o="crypto_hacks",p={unversionedId:"functions/crypto/ov/crypto_hacks",id:"functions/crypto/ov/crypto_hacks",title:"crypto_hacks",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/ov/crypto_hacks.md",sourceDirName:"functions/crypto/ov",slug:"/functions/crypto/ov/crypto_hacks",permalink:"/docs/sdk/functions/crypto/ov/crypto_hacks",draft:!1,tags:[],version:"current",frontMatter:{title:"crypto_hacks",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"crypto_hack_slugs",permalink:"/docs/sdk/functions/crypto/ov/crypto_hack_slugs"},next:{title:"ewf",permalink:"/docs/sdk/functions/crypto/ov/ewf"}},i={},c=[{value:"crypto_ov_rekt_model.get_crypto_hacks",id:"crypto_ov_rekt_modelget_crypto_hacks",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"crypto_ov_rekt_view.display_crypto_hacks",id:"crypto_ov_rekt_viewdisplay_crypto_hacks",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],s={toc:c};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crypto_hacks"},"crypto_hacks"),(0,n.kt)("h2",{id:"crypto_ov_rekt_modelget_crypto_hacks"},"crypto_ov_rekt_model.get_crypto_hacks"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def crypto_hacks(sortby: str, ascend: bool) -> DataFrame:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/rekt_model.py#L91"},"Source Code")),(0,n.kt)("p",null,"Description: Get major crypto-related hacks"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Key by which to sort data {Platform,Date,Amount ","[$]",",Audit,Slug,URL}"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ascend"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to sort data ascending"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Hacks with columns {Platform,Date,Amount ","[$]",",Audited,Slug,URL}")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h1",{id:"view"},"VIEW"),(0,n.kt)("h1",{id:"crypto_hacks-1"},"crypto_hacks"),(0,n.kt)("h2",{id:"crypto_ov_rekt_viewdisplay_crypto_hacks"},"crypto_ov_rekt_view.display_crypto_hacks"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def crypto_hacks(limit: int, sortby: str, ascend: bool, slug: str, export: str) -> None:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/rekt_view.py#L17"},"Source Code")),(0,n.kt)("p",null,"Description: Display list of major crypto-related hacks. If slug is passed"),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"slug"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Crypto hack slug to check (e.g., polynetwork-rekt)"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of hacks to search"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Key by which to sort data {Platform,Date,Amount ","[$]",",Audit,Slug,URL}"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ascend"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to sort data ascending"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"examples-1"},"Examples"))}u.isMDXComponent=!0}}]);