"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42315],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},i=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),m=c(n),f=r,h=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(h,l(l({ref:e},i),{},{components:n})):a.createElement(h,l({ref:e},i))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14346:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,s={unversionedId:"functions/stocks/fa/av_cash",id:"functions/stocks/fa/av_cash",title:"av_cash",description:".. role:: python(code)",source:"@site/sdk/functions/stocks/fa/av_cash.md",sourceDirName:"functions/stocks/fa",slug:"/functions/stocks/fa/av_cash",permalink:"/docs/sdk/functions/stocks/fa/av_cash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"av_balance",permalink:"/docs/sdk/functions/stocks/fa/av_balance"},next:{title:"av_income",permalink:"/docs/sdk/functions/stocks/fa/av_income"}},p={},c=[],i={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,"To obtain charts, make sure to add :python:",(0,r.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\nstocks.fa.av_cash(\nsymbol: str,\nlimit: int = 5,\nquarterly: bool = False,\nratios: bool = False,\nplot: bool = False,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nGet cash flows for company\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  symbol : str\nStock ticker symbol\nlimit : int\nNumber of past to get\nquarterly : bool, optional\nFlag to get quarterly instead of annual, by default False\nratios: bool\nShows percentage change, by default False\nplot: bool\nIf the data shall be formatted ready to plot\nchart: bool\nFlag to display chart"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataframe of cash flow statements"))),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\nstocks.fa.av_cash(\nsymbol: str,\nlimit: int = 5,\nquarterly: bool = False,\nratios: bool = False,\nplot: list = None,\nexport: str = '',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nAlpha Vantage income statement\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  symbol : str\nFundamental analysis ticker symbol\nlimit: int\nNumber of past statements, by default 5\nquarterly: bool\nFlag to get quarterly instead of annual, by default False\nratios: bool\nShows percentage change, by default False\nplot: list\nList of row labels to plot\nexport: str\nFormat to export data\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);