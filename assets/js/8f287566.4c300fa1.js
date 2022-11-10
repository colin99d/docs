"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17272],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),y=s(r),m=a,f=y["".concat(p,".").concat(m)]||y[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},84103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,c={unversionedId:"features/crypto/chart",id:"features/crypto/chart",title:"chart",description:".. role:: python(code)",source:"@site/terminal/features/crypto/chart.md",sourceDirName:"features/crypto",slug:"/features/crypto/chart",permalink:"/docs/terminal/features/crypto/chart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/chart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"candles",permalink:"/docs/terminal/features/crypto/candles"},next:{title:"active",permalink:"/docs/terminal/features/crypto/dd/active"}},p={},s=[],i={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.chart(\nprices_df: 'pd.DataFrame',\nto_symbol: 'str' = '',\nfrom_symbol: 'str' = '',\nsource: 'str' = '',\nexchange: 'str' = '',\ninterval: 'str' = '',\nexternal_axes: 'list","[plt.Axes]"," | None' = None, yscale: 'str' = 'linear',\nchart: bool = False,\n) -> 'None'\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nLoad data for Technical Analysis\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},'  prices_df: pd.DataFrame\nCryptocurrency\nto_symbol: str\nCoin (only used for chart title), by default ""\nfrom_symbol: str\nCurrency (only used for chart title), by default ""\nyscale: str\nScale for y axis of plot Either linear or log\nchart: bool\nFlag to display chart'))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.chart(\nprices_df: 'pd.DataFrame',\nto_symbol: 'str' = '',\nfrom_symbol: 'str' = '',\nsource: 'str' = '',\nexchange: 'str' = '',\ninterval: 'str' = '',\nexternal_axes: 'list","[plt.Axes]"," | None' = None, yscale: 'str' = 'linear',\nchart: bool = False,\n) -> 'None'\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nLoad data for Technical Analysis\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},'  prices_df: pd.DataFrame\nCryptocurrency\nto_symbol: str\nCoin (only used for chart title), by default ""\nfrom_symbol: str\nCurrency (only used for chart title), by default ""\nyscale: str\nScale for y axis of plot Either linear or log\nchart: bool\nFlag to display chart'))))}u.isMDXComponent=!0}}]);