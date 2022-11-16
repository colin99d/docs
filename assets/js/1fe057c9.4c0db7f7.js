"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20811],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),u=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),b=n,d=f["".concat(c,".").concat(b)]||f[b]||s[b]||i;return t?o.createElement(d,a(a({ref:r},p),{},{components:t})):o.createElement(d,a({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45572:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(87462),n=(t(67294),t(3905));const i={},a="Robinhood",l={unversionedId:"features/portfolio/bro/robinhood/robinhood",id:"features/portfolio/bro/robinhood/robinhood",title:"Robinhood",description:"Note the following environment variables must be set:",source:"@site/content/terminal/features/portfolio/bro/robinhood/robinhood.md",sourceDirName:"features/portfolio/bro/robinhood",slug:"/features/portfolio/bro/robinhood/",permalink:"/terminal/features/portfolio/bro/robinhood/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/portfolio/bro/robinhood/robinhood.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"update",permalink:"/terminal/features/portfolio/bro/degiro/update/"},next:{title:"history",permalink:"/terminal/features/portfolio/bro/robinhood/history/"}},c={},u=[],p={toc:u};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"robinhood"},"Robinhood"),(0,n.kt)("p",null,"Note the following environment variables must be set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"OPENBB_RH_USERNAME\nOPENBB_RH_PASSWORD\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"login")," function must be run first.  This may require 2FA depending on your account."))}s.isMDXComponent=!0}}]);