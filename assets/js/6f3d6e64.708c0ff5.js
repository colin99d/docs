"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},c=void 0,i={unversionedId:"functions/crypto/load",id:"functions/crypto/load",title:"load",description:".. role:: python(code)",source:"@site/sdk/functions/crypto/load.md",sourceDirName:"functions/crypto",slug:"/functions/crypto/load",permalink:"/docs/sdk/functions/crypto/load",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"find",permalink:"/docs/sdk/functions/crypto/find"},next:{title:"collections",permalink:"/docs/sdk/functions/crypto/nft/collections"}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\ncrypto.load(\nsymbol: 'str',\nstart_date: 'datetime' = datetime.datetime(\n2019, 11, 6, 10, 18, 10, 442664, chart: bool = False,\n), interval: 'str' = '1440',\nexchange: 'str' = 'binance',\nvs_currency: 'str' = 'usdt',\nend_date: 'datetime' = datetime.datetime(\n2022, 11, 10, 10, 18, 10, 442664, chart: bool = False,\n), source: 'str' = 'CCXT',\nchart: bool = False,\n) -> 'pd.DataFrame'\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nLoad crypto currency to get data for\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbol: str\nCoin to get\nstart_date: datetime\nThe datetime to start at\ninterval: str\nThe interval between data points in minutes.\nChoose from: 1, 15, 30, 60, 240, 1440, 10080, 43200\nexchange: str:\nThe exchange to get data from.\nvs_currency: str\nQuote Currency (Defaults to usdt)\nend_date: datetime\nThe datetime to end at\nsource: str\nThe source of the data\nChoose from: CCXT, CoinGecko, YahooFinance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataframe consisting of price and volume data"))))}u.isMDXComponent=!0}}]);