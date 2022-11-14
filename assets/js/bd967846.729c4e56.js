"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},s=void 0,o={unversionedId:"features/stocks/disc/fds/fds",id:"features/stocks/disc/fds/fds",title:"fds",description:"Display a selection of Equities based on country, sector, industry, name and/or description filtered by market cap.",source:"@site/content/terminal/features/stocks/disc/fds/fds.md",sourceDirName:"features/stocks/disc/fds",slug:"/features/stocks/disc/fds/",permalink:"/docs/terminal/features/stocks/disc/fds/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/disc/fds/fds.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"divcal",permalink:"/docs/terminal/features/stocks/disc/divcal/"},next:{title:"fipo",permalink:"/docs/terminal/features/stocks/disc/fipo/"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: fds [-c --country COUNTRY [COUNTRY ...]] [-s --sector SECTOR [SECTOR ...]]\n        [-i --industry INDUSTRY [INDUSTRY ...]] [-n --name NAME [NAME ...]]\n        [-m --marketcap MARKETCAP {Small, Mid, Large}] [-d --description DESCRIPTION [DESCRIPTION ...]\n        [-ie --include_exchanges] [-a --amount AMOUNT] [-o --options {countries,sectors,industries}] [-h]\n")),(0,a.kt)("p",null,"Display a selection of Equities based on country, sector, industry, name and/or description filtered by market cap.\nIf no arguments are given, return the equities with the highest market cap."),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JerBouma/FinanceDatabase"},"https://github.com/JerBouma/FinanceDatabase")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-c --country: Specify the Equities selection based on a country"),(0,a.kt)("li",{parentName:"ul"},"-s --sector: Specify the Equities selection based on a sector"),(0,a.kt)("li",{parentName:"ul"},"-i --industry: Specify the Equities selection based on an industry"),(0,a.kt)("li",{parentName:"ul"},"-n --name: Specify the Equities selection based on the name"),(0,a.kt)("li",{parentName:"ul"},"-d --description: Specify the Equities selection based on the description (not shown in table)"),(0,a.kt)("li",{parentName:"ul"},"-m --marketcap: Specify the Equities selection based on Market Cap"),(0,a.kt)("li",{parentName:"ul"},"-ie --include_exchanges: If used, you also obtain Equities from different exchanges (a lot of data)"),(0,a.kt)("li",{parentName:"ul"},"-a --amount: Enter the number of Equities you wish to see in the Tabulate window"),(0,a.kt)("li",{parentName:"ul"},"-o --options: Obtain the available options for country, sector and industry")),(0,a.kt)("img",{width:"1400",alt:"Feature Screeshot - fds",src:"https://user-images.githubusercontent.com/85772166/140450303-ab41459b-2c8c-4115-9a44-226c120e8e67.png"}))}p.isMDXComponent=!0}}]);