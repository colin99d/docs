"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9011],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,p={unversionedId:"features/common/ta/vwap",id:"features/common/ta/vwap",title:"vwap",description:".. role:: python(code)",source:"@site/terminal/features/common/ta/vwap.md",sourceDirName:"features/common/ta",slug:"/features/common/ta/vwap",permalink:"/docs/terminal/features/common/ta/vwap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/common/ta/vwap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stoch",permalink:"/docs/terminal/features/common/ta/stoch"},next:{title:"wma",permalink:"/docs/terminal/features/common/ta/wma"}},i={},s=[],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,"To obtain charts, make sure to add :python:",(0,r.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\ncommon.ta.vwap(\ndata: pandas.core.series.Series,\noffset: int = 0,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nGets volume weighted average price (VWAP)\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  data: pd.DataFrame\nDataframe of dates and prices\noffset: int\nLength of offset\nchart: bool\nFlag to display chart"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  df_vwap: pd.DataFrame\nDataframe with VWAP data"))),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\ncommon.ta.vwap(\ndata: pandas.core.frame.DataFrame,\nsymbol: str = '',\nstart_date: str = None,\nend_date: str = None,\noffset: int = 0,\ninterval: str = '',\nexport: str = '',\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nPlots VWMA technical indicator\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  data : pd.DataFrame\nDataframe of OHLC prices\nsymbol : str\nTicker\noffset : int\nOffset variable\nstart_date: datetime\nStart date to get data from with\nend_date: datetime\nEnd date to get data from with\ninterval : str\nInterval of data\nexport : str\nFormat to export data\nexternal_axes : Optional[List","[plt.Axes]","], optional\nExternal axes (3 axes are expected in the list), by default None\nchart: bool\nFlag to display chart"))))}m.isMDXComponent=!0}}]);