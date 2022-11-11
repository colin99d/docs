"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56807],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),i=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=i(n),f=o,h=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(h,l(l({ref:e},c),{},{components:n})):r.createElement(h,l({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42613:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},l=void 0,s={unversionedId:"features/stocks/options/chains_yf",id:"features/stocks/options/chains_yf",title:"chains_yf",description:".. role:: python(code)",source:"@site/sdk/features/stocks/options/chains_yf.md",sourceDirName:"features/stocks/options",slug:"/features/stocks/options/chains_yf",permalink:"/docs/sdk/features/stocks/options/chains_yf",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"chains",permalink:"/docs/sdk/features/stocks/options/chains"},next:{title:"closing",permalink:"/docs/sdk/features/stocks/options/closing"}},p={},i=[],c={toc:i};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nstocks.options.chains_yf(\nsymbol: str,\nexpiry: str,\nmin_sp: float = -1,\nmax_sp: float = -1,\ncalls: bool = True,\nputs: bool = True,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nGet full option chains with calculated greeks\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbol: str\nStock ticker symbol\nexpiry: str\nExpiration date for chain in format YYY-mm-dd\ncalls: bool\nFlag to get calls\nputs: bool\nFlag to get puts\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataFrame of option chain.  If both calls and puts"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nstocks.options.chains_yf(\nsymbol: str,\nexpiry: str,\nmin_sp: float = -1,\nmax_sp: float = -1,\ncalls_only: bool = False,\nputs_only: bool = False,\nexport: str = '',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nDisplay option chains for given ticker and expiration\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbol: str\nStock ticker symbol\nexpiry: str\nExpiration for option chain\nmin_sp: float\nMin strike\nmax_sp: float\nMax strike\ncalls_only: bool\nFlag to get calls only\nputs_only: bool\nFlag to get puts only\nexport: str\nFormat to export data\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);