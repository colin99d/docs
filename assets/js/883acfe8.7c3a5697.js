"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},o=void 0,i={unversionedId:"features/stocks/disc/trending/trending",id:"features/stocks/disc/trending/trending",title:"trending",description:"Trending news articles from Seeking Alpha.",source:"@site/content/terminal/features/stocks/disc/trending/trending.md",sourceDirName:"features/stocks/disc/trending",slug:"/features/stocks/disc/trending/",permalink:"/terminal/features/stocks/disc/trending/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/disc/trending/trending.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rtat",permalink:"/terminal/features/stocks/disc/rtat/"},next:{title:"ugs",permalink:"/terminal/features/stocks/disc/ugs/"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: trending [-i N_ID] [-l LIMIT] [-d S_DATE] [-h] [--export {csv,json,xlsx}]\n")),(0,a.kt)("p",null,"Trending news articles from ",(0,a.kt)("a",{parentName:"p",href:"https://seekingalpha.com/market-news/trending"},"Seeking Alpha"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -i N_ID, --id N_ID    article ID (default: -1)\n  -l LIMIT, --limit LIMIT\n                        limit of articles being printed (default: 5)\n  -d S_DATE, --date S_DATE\n                        starting date of articles (default: 2022-02-16)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Feb 16, 04:13 (\u2728) /stocks/disc/ $ trending -i 10\n2010-03-21 08:33:21   Deutsche Bank's Marc Greenberg can't justify the BUD deal. But he says Bud Light Lime is the...\nhttps://seekingalpha.com/news/10\n\n Deutsche Bank's Marc Greenberg can't justify the BUD deal. But he says Bud Light Lime is the beer to beat.\n2022 Feb 16, 04:13 (\u2728) /stocks/disc/ $ trending -l 10\n2022-02-16 02:00:18 - 3800145 - Shopify Q4 Earnings Preview: What to Expect\nhttps://seekingalpha.com/news/3800145-shopify-q4-earnings-preview-what-to-expect\n\n2022-02-15 16:20:21 - 3800395 - Upstart stock soars after Q4 earnings beat, strong guidance, stock buyback\nhttps://seekingalpha.com/news/3800395-upstart-stock-soars-after-q4-earnings-beat-strong-guidance-stock-buyback\n\n2022-02-15 11:31:14 - 3800203 - Greenview Capital takes stakes in Alibaba, Amazon\nhttps://seekingalpha.com/news/3800203-greenview-capital-takes-stakes-in-alibaba-amazon\n\n2022-02-15 16:38:11 - 3800438 - Roblox shares plunge as metaverse company misses Wall Street's expectations\nhttps://seekingalpha.com/news/3800438-roblox-shares-plunge-as-metaverse-company-misses-wall-streets-expectations\n\n2022-02-15 12:39:57 - 3800257 - Sunshine Biopharma announces pricing of $8M public offering, uplisting\nhttps://seekingalpha.com/news/3800257-sunshine-biopharma-announces-pricing-of-8m-public-offering-uplisting\n\n2022-02-15 14:06:05 - 3800296 - Cathie Wood\u2019s ARKK a bubble? Let\u2019s look at history\nhttps://seekingalpha.com/news/3800296-is-cathie-woods-arkk-a-bubble-lets-look-at-history\n\n2022-02-16 01:38:34 - 3800525 - Flex LNG Non-GAAP EPS of $1.18, revenue of $114.6M beats by $4.38M\nhttps://seekingalpha.com/news/3800525-flex-lng-non-gaap-eps-of-118-revenue-of-1146m-beats-by-438m\n\n2022-02-15 19:04:21 - 3800509 - ViacomCBS earnings call: A flood of content feeding transformation to Paramount\nhttps://seekingalpha.com/news/3800509-viacomcbs-earnings-call-a-flood-of-content-feeding-transformation-to-paramount\n\n2022-02-16 02:09:27 - 3800529 - Golden Ocean raises dividend by ~6% to $0.90/share\nhttps://seekingalpha.com/news/3800529-golden-ocean-raises-dividend-by-6-to-090share\n\n2022-02-15 17:35:20 - 3800169 - Matterport Q4 2021 Earnings Preview\nhttps://seekingalpha.com/news/3800169-matterport-q4-2021-earnings-preview\n")))}u.isMDXComponent=!0}}]);