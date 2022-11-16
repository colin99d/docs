"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"features/stocks/gov/lobbying/lobbying",id:"features/stocks/gov/lobbying/lobbying",title:"lobbying",description:"Lobbying details for the loaded company. [Source: www.quiverquant.com]",source:"@site/content/terminal/features/stocks/gov/lobbying/lobbying.md",sourceDirName:"features/stocks/gov/lobbying",slug:"/features/stocks/gov/lobbying/",permalink:"/terminal/features/stocks/gov/lobbying/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/gov/lobbying/lobbying.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lasttrades",permalink:"/terminal/features/stocks/gov/lasttrades/"},next:{title:"qtrcontracts",permalink:"/terminal/features/stocks/gov/qtrcontracts/"}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: lobbying [-l LIMIT] [-h]\n")),(0,a.kt)("p",null,"Lobbying details for the loaded company. ","[Source: www.quiverquant.com]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -l LIMIT, --limit LIMIT\n                        Limit of events to show (default: 10)\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Feb 16, 07:27 (\u2728) /stocks/gov/ $ lobbying\n2021-01-21: TESLA INC N/A\n\n2020-10-20: TESLA INC N/A\n\n2020-10-20: TESLA INC N/A\n\n2020-07-20: TESLA INC $70000\n        Discussions regarding Sec. 30D electric vehicle tax credit (S.1094/H.R.2256, the Driving America Forward Act) Sec. 30C alternative fuel infrastructure tax credit(S.3735, Securing America's Clean Fuel Infrastructure Act) Sec. 48 and 25D solar investment tax credit Storage tax credit (S.1142/H.R.2096,Energy Storage Tax Incentive and Deployment Act)\n\n2020-07-19: TESLA INC N/A\n\n2020-04-20: TESLA INC $140000\n        H.R.748/S.3548, Coronavirus Aid, Relief, and Economic Security Act\n\n2020-04-20: TESLA INC $30000\n        Issues related to the 30D EV tax credit, including the Driving America Forward Act, S. 1094 and H.R. 2256.\n\n2020-01-21: TESLA INC $150000\n        Discussions regarding Sec. 30D electric vehicle tax credit (S.1094/H.R.2256, the Driving America Forward Act) Sec. 30C alternative tax credit (H.R.3301, the Taxpayer Certainty and Disaster Tax Relief Act) Sec. 48 and 25D solar investment tax credits (H.R.3961/S.2289, Renewable Energy Extension Act) Storage tax credit (S.1142/H.R.2096,Energy Storage Tax Incentive and Deployment Act)  H.R.1865, Further Consolidated Appropriations Act, 2020\n\n2020-01-17: TESLA INC $30000\n        Issues related to the 30D EV tax credit, including the Driving America Forward Act, S. 1094 and H.R. 2256.\n\n2019-10-21: TESLA INC $150000\n        Discussions regarding electric vehicle manufacturing and sales policies,charging infrastructure and regulation (S.2302, America's Transportation and Infrastruction Act;H.R.2616/S.674, Clean Corridors Act) Issues impacting autonomous vehicles\n")))}p.isMDXComponent=!0}}]);