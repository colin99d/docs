"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"funot",description:"OpenBB Terminal Function"},i="Due Diligence",l={unversionedId:"features/crypto/dd/funot",id:"features/crypto/dd/funot",title:"funot",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/crypto/dd/funot.md",sourceDirName:"features/crypto/dd",slug:"/features/crypto/dd/funot",permalink:"/terminal/features/crypto/dd/funot",draft:!1,tags:[],version:"current",frontMatter:{title:"funot",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"fundrate",permalink:"/terminal/features/crypto/dd/fundrate"},next:{title:"gh",permalink:"/terminal/features/crypto/dd/gh"}},c={},p=[{value:"funot",id:"funot",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"due-diligence"},"Due Diligence"),(0,r.kt)("h2",{id:"funot"},"funot"),(0,r.kt)("h3",{id:"description"},"Description:"),(0,r.kt)("p",null,"Display fundamental metric over time ","[Source: Token Terminal]"),(0,r.kt)("h3",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"usage: funot [-m {twitter_followers,gmv_annualized,market_cap,take_rate,revenue,revenue_protocol,tvl,pe,pe_circulating,ps,ps_circulating}] -p\n             {0x,1inch,88mph,aave,abracadabra-money,alchemist,alchemix-finance,algorand,alpha-finance,arweave,autofarm,avalanche,axie-infinity,balancer,bancor,barnbridge,basket-dao,benqi,binance-smart-chain,bitcoin,cap,cardano,centrifuge,clipper,compound,convex-finance,cosmos,cryptex,curve,decentral-games,decred,dforce,dhedge,dodo,dogecoin,dydx,ellipsis-finance,elrond,enzyme-finance,erasure-protocol,ethereum,ethereum-name-service,euler,fantom,fei-protocol,filecoin,futureswap,gmx,goldfinch,harvest-finance,helium,hurricaneswap,idle-finance,index-cooperative,instadapp,integral-protocol,karura,keeperdao,keep-network,kusama,kyber,lido-finance,liquity,litecoin,livepeer,looksrare,loopring,maiar,makerdao,maple-finance,mcdex,metamask,mstable,near-protocol,nexus-mutual,nftx,notional-finance,opensea,optimism,osmosis,pancakeswap,pangolin,perpetual-protocol,piedao,pocket-network,polkadot,polygon,polymarket,pooltogether,powerpool,quickswap,rarible,rari-capital,reflexer,ren,ribbon-finance,rocket-pool,saddle-finance,set-protocol,solana,solend,spookyswap,stake-dao,stellar,sushiswap,synthetix,terra,tezos,the-graph,thorchain,tokemak,tokenlon,tornado-cash,trader-joe,uma,uniswap,unit-protocol,venus,vesper-finance,volmex,wakaswap,yearn-finance,yield-guild-games,yield-yak,zcash,zora}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metric"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose metric of interest"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"twitter_followers, gmv_annualized, market_cap, take_rate, revenue, revenue_protocol, tvl, pe, pe_circulating, ps, ps_circulating")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose project of interest"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"0x, 1inch, 88mph, aave, abracadabra-money, alchemist, alchemix-finance, algorand, alpha-finance, arweave, autofarm, avalanche, axie-infinity, balancer, bancor, barnbridge, basket-dao, benqi, binance-smart-chain, bitcoin, cap, cardano, centrifuge, clipper, compound, convex-finance, cosmos, cryptex, curve, decentral-games, decred, dforce, dhedge, dodo, dogecoin, dydx, ellipsis-finance, elrond, enzyme-finance, erasure-protocol, ethereum, ethereum-name-service, euler, fantom, fei-protocol, filecoin, futureswap, gmx, goldfinch, harvest-finance, helium, hurricaneswap, idle-finance, index-cooperative, instadapp, integral-protocol, karura, keeperdao, keep-network, kusama, kyber, lido-finance, liquity, litecoin, livepeer, looksrare, loopring, maiar, makerdao, maple-finance, mcdex, metamask, mstable, near-protocol, nexus-mutual, nftx, notional-finance, opensea, optimism, osmosis, pancakeswap, pangolin, perpetual-protocol, piedao, pocket-network, polkadot, polygon, polymarket, pooltogether, powerpool, quickswap, rarible, rari-capital, reflexer, ren, ribbon-finance, rocket-pool, saddle-finance, set-protocol, solana, solend, spookyswap, stake-dao, stellar, sushiswap, synthetix, terra, tezos, the-graph, thorchain, tokemak, tokenlon, tornado-cash, trader-joe, uma, uniswap, unit-protocol, venus, vesper-finance, volmex, wakaswap, yearn-finance, yield-guild-games, yield-yak, zcash, zora")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n2022 Aug 28, 19:08 (\ud83e\udd8b) /crypto/dd/ $ funot -m revenue -p solana\n\n")))}u.isMDXComponent=!0}}]);