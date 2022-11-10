"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"features/crypto/disc/losers",id:"features/crypto/disc/losers",title:"losers",description:".. role:: python(code)",source:"@site/terminal/features/crypto/disc/losers.md",sourceDirName:"features/crypto/disc",slug:"/features/crypto/disc/losers",permalink:"/docs/terminal/features/crypto/disc/losers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/disc/losers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gainers_or_losers",permalink:"/docs/terminal/features/crypto/disc/gainers_or_losers"},next:{title:"top_dapps",permalink:"/docs/terminal/features/crypto/disc/top_dapps"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\ncrypto.disc.losers(\ninterval: str = '1h',\nlimit: int = 50,\nsortby: str = 'market_cap_rank',\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nShows Largest Losers - coins which lose the most in given period. [Source: CoinGecko]\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  interval: str\nTime interval by which data is displayed. One from ","[1h, 24h, 7d, 14d, 30d, 60d, 1y]","\nlimit: int\nNumber of records to display\nsortby: str\nKey to sort data. The table can be sorted by every of its columns. Refer to\nAPI documentation (see /coins/markets in ",(0,o.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en/api/documentation"},"https://www.coingecko.com/en/api/documentation"),")\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  pd.DataFrame\nTop Losers  - coins which lost most in price in given period of time.\nColumns: Symbol, Name, Volume, Price, %Change_{interval}, Url"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\ncrypto.disc.losers(\ninterval: str = '1h',\nlimit: int = 20,\nexport: str = '',\nsortby: str = 'Market Cap Rank',\nchart: bool = False,\n) -> None\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nShows Largest Losers - coins which lost the most in given period of time. [Source: CoinGecko]\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  interval: str\nTime period by which data is displayed. One from ","[1h, 24h, 7d, 14d, 30d, 60d, 1y]","\nlimit: int\nNumber of records to display\nsortby: str\nKey to sort data. The table can be sorted by every of its columns. Refer to\nAPI documentation (see /coins/markets in ",(0,o.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en/api/documentation"},"https://www.coingecko.com/en/api/documentation"),")\nexport : str\nExport dataframe data to csv,json,xlsx file\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);