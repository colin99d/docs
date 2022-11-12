"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(r),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,s={unversionedId:"functions/crypto/disc/cpsearch",id:"functions/crypto/disc/cpsearch",title:"cpsearch",description:".. role:: python(code)",source:"@site/sdk/functions/crypto/disc/cpsearch.md",sourceDirName:"functions/crypto/disc",slug:"/functions/crypto/disc/cpsearch",permalink:"/docs/sdk/functions/crypto/disc/cpsearch",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"coins_for_given_exchange",permalink:"/docs/sdk/functions/crypto/disc/coins_for_given_exchange"},next:{title:"gainers",permalink:"/docs/sdk/functions/crypto/disc/gainers"}},p={},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.disc.cpsearch(\nquery: str,\ncategory: Optional","[Any]"," = None,\nmodifier: Optional","[Any]"," = None,\nsortby: str = 'id',\nascend: bool = True,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nSearch CoinPaprika. [Source: CoinPaprika]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  query:  str\nphrase for search\ncategory:  Optional","[Any]","\none or more categories (comma separated) to search.\nAvailable options: currencies|exchanges|icos|people|tags\nDefault: currencies,exchanges,icos,people,tags\nmodifier: Optional","[Any]","\nset modifier for search results. Available options: symbol_search -\nsearch only by symbol (works for currencies only)\nsortby: str\nKey to sort data. The table can be sorted by every of its columns. Refer to\nAPI documentation (see ",(0,a.kt)("a",{parentName:"p",href:"https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get"},"https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get"),")\nascend: bool\nFlag to sort data descending\nchart: bool\nFlag to display chart"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  pandas.DataFrame\nSearch Results\nColumns: Metric, Value"))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.disc.cpsearch(\nquery: str,\ncategory: str = 'all',\nlimit: int = 10,\nsortby: str = 'id',\nascend: bool = True,\nexport: str = '',\nchart: bool = False,\n) -> None\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nSearch over CoinPaprika. [Source: CoinPaprika]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  query: str\nSearch query\ncategory: str\nCategories to search: currencies|exchanges|icos|people|tags|all. Default: all\nlimit: int\nNumber of records to display\nsortby: str\nKey to sort data. The table can be sorted by every of its columns. Refer to\nAPI documentation (see ",(0,a.kt)("a",{parentName:"p",href:"https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get"},"https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get"),")\nascend: bool\nFlag to sort data descending\nexport : str\nExport dataframe data to csv,json,xlsx file\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);