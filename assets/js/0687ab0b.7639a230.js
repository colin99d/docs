"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,l={unversionedId:"features/stocks/candle/candle",id:"features/stocks/candle/candle",title:"candle",description:"Shows historic data for a stock",source:"@site/terminal/features/stocks/candle/candle.md",sourceDirName:"features/stocks/candle",slug:"/features/stocks/candle/",permalink:"/docs/terminal/features/stocks/candle/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/candle/candle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"volume",permalink:"/docs/terminal/features/stocks/ca/volume/"},next:{title:"codes",permalink:"/docs/terminal/features/stocks/codes/"}},c={},i=[],d={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: candle [-p] [--sort {AdjClose,Open,Close,High,Low,Volume,Returns,LogRet}] [-d] [--raw] [-t] [--ma MOV_AVG] [--log] [-h] [--export EXPORT] [-l LIMIT]\n")),(0,a.kt)("p",null,"Shows historic data for a stock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -p, --plotly          Flag to show interactive plotly chart (default: True)\n  --sort {AdjClose,Open,Close,High,Low,Volume,Returns,LogRet}\n                        Choose a column to sort by. Only works when raw data is displayed. (default: )\n  -d, --descending      Sort selected column descending. Only works when raw data is displayed. (default: True)\n  --raw                 Shows raw data instead of chart. If sort is set those are the top ones, otherwise we grab latest data to date (default: False)\n  -t, --trend           Flag to add high and low trends to candle (default: False)\n  --ma MOV_AVG          Add moving average in number of days to plot and separate by a comma. Value for ma (moving average) keyword needs to be greater than 1. (default: None)\n  --log                 Plot with y axis on log scale (default: False)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx (default: )\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data. (default: 20)\n")),(0,a.kt)("p",null,"For more information and examples, use 'about candle' to access the related guide."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154072214-f4b49833-157f-44a7-be2d-d558ffc6f945.png",alt:"candle"})))}u.isMDXComponent=!0}}]);