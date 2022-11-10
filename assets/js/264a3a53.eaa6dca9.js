"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,y=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,p={unversionedId:"features/crypto/dd/mcapdom",id:"features/crypto/dd/mcapdom",title:"mcapdom",description:".. role:: python(code)",source:"@site/terminal/features/crypto/dd/mcapdom.md",sourceDirName:"features/crypto/dd",slug:"/features/crypto/dd/mcapdom",permalink:"/docs/terminal/features/crypto/dd/mcapdom",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/dd/mcapdom.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"links",permalink:"/docs/terminal/features/crypto/dd/links"},next:{title:"mkt",permalink:"/docs/terminal/features/crypto/dd/mkt"}},i={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.dd.mcapdom(\nsymbol: str,\ninterval: str = '1d',\nstart_date: str = '2021-11-10',\nend_date: str = '2022-11-10',\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nReturns market dominance of a coin over time\n[Source: https://messari.io/]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  symbol : str\nCrypto symbol to check market cap dominance\ninterval : str\nInterval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w)\nstart_date : int\nInitial date like string (e.g., 2021-10-01)\nend_date : int\nEnd date like string (e.g., 2021-10-01)\nchart: bool\nFlag to display chart"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  pd.DataFrame\nmarket dominance percentage over time"))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.dd.mcapdom(\nsymbol: str,\nstart_date: str = '2021-11-10',\nend_date: str = '2022-11-10',\ninterval: str = '1d',\nexport: str = '',\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n) -> None\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nDisplay market dominance of a coin over time\n[Source: https://messari.io/]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  symbol : str\nCrypto symbol to check market cap dominance\nstart_date : int\nInitial date like string (e.g., 2021-10-01)\nend_date : int\nEnd date like string (e.g., 2021-10-01)\ninterval : str\nInterval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w)\nexport : str\nExport dataframe data to csv,json,xlsx file\nexternal_axes : Optional[List","[plt.Axes]","], optional\nExternal axes (1 axis is expected in the list), by default None\nchart: bool\nFlag to display chart"))))}m.isMDXComponent=!0}}]);