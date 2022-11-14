"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),_=p(n),d=r,b=_["".concat(c,".").concat(d)]||_[d]||s[d]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=_;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},55456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"binance_available_quotes_for_each_coin",description:"OpenBB SDK Function"},i="binance_available_quotes_for_each_coin",l={unversionedId:"functions/crypto/dd/binance_available_quotes_for_each_coin",id:"functions/crypto/dd/binance_available_quotes_for_each_coin",title:"binance_available_quotes_for_each_coin",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/dd/binance_available_quotes_for_each_coin.md",sourceDirName:"functions/crypto/dd",slug:"/functions/crypto/dd/binance_available_quotes_for_each_coin",permalink:"/docs/sdk/functions/crypto/dd/binance_available_quotes_for_each_coin",draft:!1,tags:[],version:"current",frontMatter:{title:"binance_available_quotes_for_each_coin",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"basic_info",permalink:"/docs/sdk/functions/crypto/dd/basic_info"},next:{title:"book",permalink:"/docs/sdk/functions/crypto/dd/book"}},c={},p=[{value:"crypto_dd_binance_model.get_binance_available_quotes_for_each_coin",id:"crypto_dd_binance_modelget_binance_available_quotes_for_each_coin",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"binance_available_quotes_for_each_coin"},"binance_available_quotes_for_each_coin"),(0,r.kt)("h2",{id:"crypto_dd_binance_modelget_binance_available_quotes_for_each_coin"},"crypto_dd_binance_model.get_binance_available_quotes_for_each_coin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def binance_available_quotes_for_each_coi) -> dict:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L76"},"Source Code")),(0,r.kt)("p",null,"Description: Helper methods that for every coin available on Binance add all quote assets. ","[Source: Binance]"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"All quote assets for given coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{'ETH' : ","['BTC', 'USDT' ...]",", 'UNI' : ","['ETH', 'BTC','BUSD', ...]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"examples"},"Examples"))}s.isMDXComponent=!0}}]);