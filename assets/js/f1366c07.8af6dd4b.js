"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"coins_for_given_exchange",description:"OpenBB SDK Function"},i="coins_for_given_exchange",c={unversionedId:"functions/crypto/disc/coins_for_given_exchange",id:"functions/crypto/disc/coins_for_given_exchange",title:"coins_for_given_exchange",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/disc/coins_for_given_exchange.md",sourceDirName:"functions/crypto/disc",slug:"/functions/crypto/disc/coins_for_given_exchange",permalink:"/sdk/functions/crypto/disc/coins_for_given_exchange",draft:!1,tags:[],version:"current",frontMatter:{title:"coins_for_given_exchange",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"coins",permalink:"/sdk/functions/crypto/disc/coins"},next:{title:"cpsearch",permalink:"/sdk/functions/crypto/disc/cpsearch"}},l={},p=[{value:"openbb_terminal.cryptocurrency.discovery.pycoingecko_model.get_coins_for_given_exchange",id:"openbb_terminalcryptocurrencydiscoverypycoingecko_modelget_coins_for_given_exchange",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coins_for_given_exchange"},"coins_for_given_exchange"),(0,a.kt)("h2",{id:"openbb_terminalcryptocurrencydiscoverypycoingecko_modelget_coins_for_given_exchange"},"openbb_terminal.cryptocurrency.discovery.pycoingecko_model.get_coins_for_given_exchange"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py'",title:"'openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py'"},"def get_coins_for_given_exchange(exchange_id: str, page: int) -> dict\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py#L357"},"Source Code")),(0,a.kt)("p",null,"Description: Helper method to get all coins available on binance exchange ","[Source: CoinGecko]"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exchange_id"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"id of exchange"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"page"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"number of page. One page contains 100 records"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dict"),(0,a.kt)("td",{parentName:"tr",align:null},"dictionary with all trading pairs on binance")))),(0,a.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);