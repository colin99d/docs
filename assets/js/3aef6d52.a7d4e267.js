"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97872],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},i=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),m=c(a),f=r,h=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return a?n.createElement(h,l(l({ref:e},i),{},{components:a})):n.createElement(h,l({ref:e},i))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29282:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,s={unversionedId:"features/stocks/fa/av_cash",id:"features/stocks/fa/av_cash",title:"av_cash",description:".. role:: python(code)",source:"@site/terminal/features/stocks/fa/av_cash.md",sourceDirName:"features/stocks/fa",slug:"/features/stocks/fa/av_cash",permalink:"/docs/terminal/features/stocks/fa/av_cash",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/fa/av_cash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"av_balance",permalink:"/docs/terminal/features/stocks/fa/av_balance"},next:{title:"av_income",permalink:"/docs/terminal/features/stocks/fa/av_income"}},p={},c=[],i={toc:c};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,"To obtain charts, make sure to add :python:",(0,r.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\nstocks.fa.av_cash(\nsymbol: str,\nlimit: int = 5,\nquarterly: bool = False,\nratios: bool = False,\nplot: bool = False,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nGet cash flows for company\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  symbol : str\nStock ticker symbol\nlimit : int\nNumber of past to get\nquarterly : bool, optional\nFlag to get quarterly instead of annual, by default False\nratios: bool\nShows percentage change, by default False\nplot: bool\nIf the data shall be formatted ready to plot\nchart: bool\nFlag to display chart"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataframe of cash flow statements"))),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\nstocks.fa.av_cash(\nsymbol: str,\nlimit: int = 5,\nquarterly: bool = False,\nratios: bool = False,\nplot: list = None,\nexport: str = '',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nAlpha Vantage income statement\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  symbol : str\nFundamental analysis ticker symbol\nlimit: int\nNumber of past statements, by default 5\nquarterly: bool\nFlag to get quarterly instead of annual, by default False\nratios: bool\nShows percentage change, by default False\nplot: list\nList of row labels to plot\nexport: str\nFormat to export data\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);