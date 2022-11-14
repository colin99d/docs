"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"features/common/ba/redditsent/redditsent",id:"features/common/ba/redditsent/redditsent",title:"redditsent",description:"Determine general Reddit sentiment about a ticker. [Source: Reddit]",source:"@site/content/terminal/features/common/ba/redditsent/redditsent.md",sourceDirName:"features/common/ba/redditsent",slug:"/features/common/ba/redditsent/",permalink:"/docs/terminal/features/common/ba/redditsent/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/common/ba/redditsent/redditsent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"queries",permalink:"/docs/terminal/features/common/ba/queries/"},next:{title:"regions",permalink:"/docs/terminal/features/common/ba/regions/"}},c={},l=[],d={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"usage: redditsent [-s {relevance,hot,top,new,comments}] [-c COMPANY] [--subreddits SUBREDDITS] [-l LIMIT]\n                   [-t {hour,day,week,month,year,all}] [-f] [-g] [-h] [--export EXPORT]\n")),(0,o.kt)("p",null,"Determine general Reddit sentiment about a ticker. ","[Source: Reddit]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"optional arguments:\n  -s {relevance,hot,top,new,comments}, --sort {relevance,hot,top,new,comments}\n                        search sorting type\n  -c COMPANY, --company COMPANY\n                        explicit name of company to search for, will override ticker symbol\n  --subreddits SUBREDDITS\n                        comma-separated list of subreddits to search\n  -l LIMIT, --limit LIMIT\n                        how many posts to gather from each subreddit\n  -t {hour,day,week,month,year,all}, --time {hour,day,week,month,year,all}\n                        time period to get posts from -- all, year, month, week, or day; defaults to week\n  --full                enable comprehensive search\n  -g, --graphic         display graphic\n  -d, --display         Print table of sentiment values\n  -h, --help            show this help message\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"redditsent -c Google --subreddits tech,stocks --full\nSearching through subreddits for posts.\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 2/2 [00:01<00:00,  1.84it/s]\nAnalyzing each post...\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 10/10 [00:04<00:00,  2.07it/s]\nSentiment Analysis for Google is 0.7552\n")))}u.isMDXComponent=!0}}]);