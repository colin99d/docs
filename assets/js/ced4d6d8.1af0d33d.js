"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"profile",description:"OpenBB Terminal Function"},i="Fundamental Analysis",l={unversionedId:"features/stocks/fa/profile",id:"features/stocks/fa/profile",title:"profile",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/fa/profile.md",sourceDirName:"features/stocks/fa",slug:"/features/stocks/fa/profile",permalink:"/terminal/features/stocks/fa/profile",draft:!1,tags:[],version:"current",frontMatter:{title:"profile",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/terminal/features/stocks/fa/overview"},next:{title:"quote",permalink:"/terminal/features/stocks/fa/quote"}},c={},s=[{value:"profile",id:"profile",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fundamental-analysis"},"Fundamental Analysis"),(0,o.kt)("h2",{id:"profile"},"profile"),(0,o.kt)("h3",{id:"description"},"Description:"),(0,o.kt)("p",null,"Prints information about, among other things, the industry, sector exchange and company description. The following fields are expected: Address, Beta, Ceo, Changes, Cik, City Company name, Country, Currency, Cusip, Dcf, Dcf diff, Default image, Description, Exchange, Exchange short name, Full time employees, Image, Industry, Ipo date, Isin, Last div, Mkt cap, Phone, Price, Range, Sector, State, Symbol, Vol avg, Website, Zip. ","[Source: Financial Modeling Prep]"),(0,o.kt)("h3",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"usage: profile\n")))}u.isMDXComponent=!0}}]);