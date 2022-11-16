"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,i={unversionedId:"features/crypto/dd/change/change",id:"features/crypto/dd/change/change",title:"change",description:"Display 30d change of the supply held in exchange wallets. [Source//glassnode.org]",source:"@site/content/terminal/features/crypto/dd/change/change.md",sourceDirName:"features/crypto/dd/change",slug:"/features/crypto/dd/change/",permalink:"/terminal/features/crypto/dd/change/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/crypto/dd/change/change.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bc",permalink:"/terminal/features/crypto/dd/bc/"},next:{title:"desc",permalink:"/terminal/features/crypto/dd/desc/"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: change   [-e EXCHANGE]\n                [-s INITIAL_DATE]\n                [-u END_DATE]\n                [-i {1h, 24h, 10m, 1w, 1month}]\n                [--export {csv,json,xlsx}] [-h]\n")),(0,a.kt)("p",null,"Display 30d change of the supply held in exchange wallets. ","[Source: https://glassnode.org]"),(0,a.kt)("p",null,"Supported assets: BTC, ETH, LTC, AAVE, ABT, AMPL, ANT, ARMOR, BADGER, BAL, BAND, BAT, BIX, BNT, BOND, BRD, BUSD, BZRX, CELR, CHSB, CND, COMP, CREAM, CRO, CRV, CVC, CVP, DAI, DDX, DENT, DGX, DHT, DMG, DODO, DOUGH, DRGN, ELF, ENG, ENJ, EURS, FET, FTT, FUN, GNO, GUSD, HEGIC, HOT, HPT, HT, HUSD, INDEX, KCS, LAMB, LBA, LDO, LEO, LINK, LOOM, LRC, MANA, MATIC, MCB, MCO, MFT, MIR, MKR, MLN, MTA, MTL, MX, NDX, NEXO, NFTX, NMR, Nsure, OCEAN, OKB, OMG, PAX, PAY, PERP, PICKLE, PNK, PNT, POLY, POWR, PPT, QASH, QKC, QNT, RDN, REN, REP, RLC, ROOK, RPL, RSR, SAI, SAN, SNT, SNX, STAKE, STORJ, sUSD, SUSHI, TEL, TOP, UBT, UMA, UNI, USDC, USDK, USDT, UTK, VERI, WaBi, WAX, WBTC, WETH, wNMX, WTC, YAM, YFI, ZRX"),(0,a.kt)("p",null,"Supported exchanges: aggregated, binance, bittrex, coinex, gate.io, gemini, huobi, kucoin, poloniex, bibox, bigone, bitfinex, hitbtc, kraken, okex, bithumb, zb.com, cobinhood, bitmex, bitstamp, coinbase, coincheck, luno"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -a EXCHANGE                   Exchange to check (default: aggregated)\n  -s DATE --since DATE          Start date (default: 3 years before, e.g., 2018-10-22)\n  -u DATE --until DATE          End date (default: 2 years before, e.g., 2019-10-22)\n  -i INTERV --interval INTERV   Interval frequency (default: 24h)\n  --export {csv,json,xlsx}      Export dataframe data to csv,json,xlsx file (default: )\n  -h, --help                    show this help message (default: False)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154060004-c5367c72-d25b-48da-a316-35d8d6e5208e.png",alt:"change"})))}u.isMDXComponent=!0}}]);