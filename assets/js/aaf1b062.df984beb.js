"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35334],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(n),b=o,g=m["".concat(i,".").concat(b)]||m[b]||u[b]||a;return n?r.createElement(g,l(l({ref:e},c),{},{components:n})):r.createElement(g,l({ref:e},c))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8192:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l=void 0,p={unversionedId:"features/stocks/gov/toplobbying",id:"features/stocks/gov/toplobbying",title:"toplobbying",description:".. role:: python(code)",source:"@site/terminal/features/stocks/gov/toplobbying.md",sourceDirName:"features/stocks/gov",slug:"/features/stocks/gov/toplobbying",permalink:"/docs/terminal/features/stocks/gov/toplobbying",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/gov/toplobbying.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topbuys",permalink:"/docs/terminal/features/stocks/gov/topbuys"},next:{title:"topsells",permalink:"/docs/terminal/features/stocks/gov/topsells"}},i={},s=[],c={toc:s};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nstocks.gov.toplobbying() -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nCorporate lobbying details\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataFrame of top corporate lobbying"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nstocks.gov.toplobbying(\nlimit: int = 10,\nraw: bool = False,\nexport: str = '',\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nTop lobbying tickers based on total spent\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  limit: int\nNumber of tickers to show\nraw: bool\nShow raw data\nexport:\nFormat to export data\nexternal_axes : Optional[List","[plt.Axes]","], optional\nExternal axes (1 axis is expected in the list), by default None\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);