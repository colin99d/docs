"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||s;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={},a=void 0,i={unversionedId:"features/common/qa/kurtosis/kurtosis",id:"features/common/qa/kurtosis/kurtosis",title:"kurtosis",description:'Kurtosis is a measure of the "tailedness" of the probability distribution of a real-valued random variable. Like skewness, kurtosis describes the shape of a probability distribution and there are different ways of quantifying it for a theoretical distribution and corresponding ways of estimating it from a sample from a population. Different measures of kurtosis may have different interpretations.',source:"@site/content/terminal/features/common/qa/kurtosis/kurtosis.md",sourceDirName:"features/common/qa/kurtosis",slug:"/features/common/qa/kurtosis/",permalink:"/terminal/features/common/qa/kurtosis/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/common/qa/kurtosis/kurtosis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hist",permalink:"/terminal/features/common/qa/hist/"},next:{title:"line",permalink:"/terminal/features/common/qa/line/"}},u={},l=[],c={toc:l};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"usage: kurtosis [-l N_LENGTH] [--export {csv,json,xlsx}] [-h]\n")),(0,o.kt)("p",null,'Kurtosis is a measure of the "tailedness" of the probability distribution of a real-valued random variable. Like skewness, kurtosis describes the shape of a probability distribution and there are different ways of quantifying it for a theoretical distribution and corresponding ways of estimating it from a sample from a population. Different measures of kurtosis may have different interpretations.'),(0,o.kt)("p",null,"For research on this topic, visit: ",(0,o.kt)("a",{parentName:"p",href:"https://www.styleadvisor.com/resources/statfacts/kurtosis"},"https://www.styleadvisor.com/resources/statfacts/kurtosis")),(0,o.kt)("p",null,"Kurtosis identifies where the volatility risk came from in a distribution of returns. Kurtosis improves one\u2019s understanding of volatility risk."),(0,o.kt)("p",null,"Kurtosis is also known as the fourth moment of the distribution, used in conjunction with mean, standard deviation, and skewness to understand the shape of a distribution of returns. In its base case, kurtosis has a neutral value of 3.0. The calculation is frequently modified by the second term in the equation below, which scales kurtosis so that the baseline, neutral value is 0.0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -l N_LENGTH, --length N_LENGTH\n                        length (default: 14)\n  --export {csv,json,xlsx}\n                        Export dataframe data to csv,json,xlsx file (default: )\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154307174-68671146-9551-4c2f-a179-db1d4b20b992.png",alt:"kurtosis"})))}f.isMDXComponent=!0}}]);