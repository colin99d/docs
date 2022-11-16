"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1486],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),i=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=i(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=i(t),d=n,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return t?a.createElement(m,s(s({ref:r},l),{},{components:t})):a.createElement(m,s({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2116:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const o={},s=void 0,c={unversionedId:"features/jupyter/dashboards/forecast/forecast",id:"features/jupyter/dashboards/forecast/forecast",title:"forecast",description:"Shows forecast dashboard",source:"@site/content/terminal/features/jupyter/dashboards/forecast/forecast.md",sourceDirName:"features/jupyter/dashboards/forecast",slug:"/features/jupyter/dashboards/forecast/",permalink:"/docs/terminal/features/jupyter/dashboards/forecast/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/jupyter/dashboards/forecast/forecast.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"correlations",permalink:"/docs/terminal/features/jupyter/dashboards/correlations/"},next:{title:"forecasting",permalink:"/docs/terminal/features/jupyter/dashboards/forecasting/"}},u={},i=[],l={toc:i};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: forecast [-j] [-n] [-d] [-h]\n")),(0,n.kt)("p",null,"Shows forecast dashboard"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  -j, --jupyter   Shows dashboard in jupyter-lab. (default: False)\n  -n, --no-input  Skips confirmation to run server. (default: False)\n  -d, --dark      Whether to show voila in dark mode (default: False)\n  -h, --help      show this help message (default: False)\n")))}p.isMDXComponent=!0}}]);