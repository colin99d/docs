"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85265],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,s(s({ref:e},p),{},{components:n})):r.createElement(d,s({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33038:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s=void 0,c={unversionedId:"features/stocks/sia/stocks_data",id:"features/stocks/sia/stocks_data",title:"stocks_data",description:".. role:: python(code)",source:"@site/terminal/features/stocks/sia/stocks_data.md",sourceDirName:"features/stocks/sia",slug:"/features/stocks/sia/stocks_data",permalink:"/docs/terminal/features/stocks/sia/stocks_data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/sia/stocks_data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sectors",permalink:"/docs/terminal/features/stocks/sia/sectors"},next:{title:"recom",permalink:"/docs/terminal/features/stocks/ta/recom"}},i={},l=[],p={toc:l};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\nstocks.sia.stocks_data(\nsymbols: List","[str]"," = None,\nfinance_key: str = 'ncf',\nstocks_data: dict = None,\nperiod: str = 'annual',\nsymbol: str = 'USD',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nGet stocks data based on a list of stocks and the finance key. The function searches for the\ncorrect financial statement automatically. [Source: StockAnalysis]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  symbols: list\nA list of tickers that will be used to collect data for.\nfinance_key: str\nThe finance key used to search within the SA_KEYS for the correct name of item\non the financial statement\nstocks_data : dict\nA dictionary that is empty on initialisation but filled once data is collected\nfor the first time.\nperiod : str\nWhether you want annually, quarterly or trailing financial statements.\nsymbol : str\nChoose in what currency you wish to convert each company's financial statement.\nDefault is USD (US Dollars).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  dict\nDictionary of filtered stocks data separated by financial statement"))))}u.isMDXComponent=!0}}]);