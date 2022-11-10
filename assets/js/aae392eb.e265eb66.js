"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1587],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,l(l({ref:e},u),{},{components:r})):n.createElement(f,l({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55727:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},l=void 0,i={unversionedId:"features/portfolio/dret",id:"features/portfolio/dret",title:"dret",description:".. role:: python(code)",source:"@site/terminal/features/portfolio/dret.md",sourceDirName:"features/portfolio",slug:"/features/portfolio/dret",permalink:"/docs/terminal/features/portfolio/dret",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/dret.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"distr",permalink:"/docs/terminal/features/portfolio/distr"},next:{title:"es",permalink:"/docs/terminal/features/portfolio/es"}},p={},s=[],u={toc:s};function c(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.dret(\nportfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel,\nwindow: str = 'all',\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nGet daily returns\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  portfolio: Portfolio\nPortfolio object with trades loaded\nwindow : str\ninterval to compare cumulative returns and benchmark\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  pd.DataFrame"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.dret(\nportfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel,\nwindow: str = 'all',\nraw: bool = False,\nlimit: int = 10,\nexport: str = '',\nexternal_axes: Optional","[matplotlib.axes._axes.Axes]"," = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nDisplay daily returns\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  portfolio: Portfolio\nPortfolio object with trades loaded\nwindow : str\ninterval to compare cumulative returns and benchmark\nraw : False\nDisplay raw data from cumulative return\nlimit : int\nLast daily returns to display\nexport : str\nExport certain type of data\nexternal_axes: plt.Axes\nOptional axes to display plot on\nchart: bool\nFlag to display chart"))))}c.isMDXComponent=!0}}]);