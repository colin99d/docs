"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Introduction to the Technical Analysis Menu",keywords:["technical","analysis","ta","t/a","intraday","daily","indicators","signals","average","moving","exponential","rsi","fibonacci","retracement","bollinger","heltner","accumulation","distribution","obv","on-balance","volume","volatility","trend","momentum","overlap","crypto","stocks","funds","etf","etfs"],date:"2022-06-17",type:"guides",status:"publish",excerpt:"This guide introduces the Technical Analysis menu, which is common across many sections of the OpenBB Terminal.",geekdocCollapseSection:!0},o=void 0,s={unversionedId:"guides/common/ta",id:"guides/common/ta",title:"Introduction to the Technical Analysis Menu",description:"The Technical Analysis menu offers the user a suite of tools for analyzing the technical components of an asset's trading history. The menu can be found in most wings of the Terminal:",source:"@site/terminal/guides/common/ta.md",sourceDirName:"guides/common",slug:"/guides/common/ta",permalink:"/docs/terminal/guides/common/ta",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/guides/common/ta.md",tags:[],version:"current",frontMatter:{title:"Introduction to the Technical Analysis Menu",keywords:["technical","analysis","ta","t/a","intraday","daily","indicators","signals","average","moving","exponential","rsi","fibonacci","retracement","bollinger","heltner","accumulation","distribution","obv","on-balance","volume","volatility","trend","momentum","overlap","crypto","stocks","funds","etf","etfs"],date:"2022-06-17",type:"guides",status:"publish",excerpt:"This guide introduces the Technical Analysis menu, which is common across many sections of the OpenBB Terminal.",geekdocCollapseSection:!0},sidebar:"tutorialSidebar",previous:{title:"Introduction to the Quantitative Analysis Menu",permalink:"/docs/terminal/guides/common/qa"},next:{title:"Crypto",permalink:"/docs/terminal/guides/crypto"}},l={},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Technical Analysis menu offers the user a suite of tools for analyzing the technical components of an asset's trading history. The menu can be found in most wings of the Terminal:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/cryptocurrency/",target:"_blank"},"Crypto")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"Stocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/",target:"_blank"},"ETF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/forex/",target:"blank"},"ForEx"))),(0,i.kt)("p",null,"The commands are divided by categories that define their purpose for general-use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overlap - Moving averages"),(0,i.kt)("li",{parentName:"ul"},"Momentum - Oscillating signals"),(0,i.kt)("li",{parentName:"ul"},"Trend - Directional strength"),(0,i.kt)("li",{parentName:"ul"},"Volatility - Width of the price bands"),(0,i.kt)("li",{parentName:"ul"},"Volume - Singling out volume"),(0,i.kt)("li",{parentName:"ul"},"Custom - Fibonacci retracements")),(0,i.kt)("p",null,"All commands in this menu will rely on the interval and window chosen when ",(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/load/",target:"_blank"},"loading an asset for analysis"),". Refer to the directory tree on the left side of the page for information on individual commands. To get a better understanding of what these features are, and the formulas behind them, a number of sources should be consulted; but, a good starting point is ",(0,i.kt)("a",{href:"https://www.investopedia.com/terms/t/technicalanalysis.asp",target:"_blank"},"Investopedia"),"."),(0,i.kt)("h2",null,"How to use the Technical Analysis Menu"),(0,i.kt)("p",null,"To begin, enter the menu from one of the menus listed above by entering ",(0,i.kt)("inlineCode",{parentName:"p"},"ta"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499113-02648936-f8d1-40ca-8ba3-036fb4324666.png",alt:"The Technical Analysis menu, with BTC loaded"})),(0,i.kt)("p",null,"Choose a beginning and end date to see a volume-weighted average price chart of the loaded ticker. ",(0,i.kt)("inlineCode",{parentName:"p"},"vwap --start 2022-01-01 --end 2022-06-17")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499127-cc20f16c-dd68-4ce3-9d10-cd6ce762a346.png",alt:"BTC VWAP YTD"})),(0,i.kt)("p",null,"The Fibonacci retracements are drawn with ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Fibonacci_number",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"fib"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499173-5d3dbdb7-8147-459b-88d3-7caae9102aa5.png",alt:"SPY Fibonacci retracement from the recent lower high"})),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{href:"https://www.investopedia.com/terms/o/onbalancevolume.asp",target:"_blank"},"on-balance volume")," for the time-period loaded."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499183-42d246d9-0a0f-4c76-8c4e-de22ad2e396d.png",alt:"OBV for ARKK YTD"})),(0,i.kt)("p",null,"The help dialogue for any feature is printed by attaching ",(0,i.kt)("inlineCode",{parentName:"p"},"-h")," to the command."),(0,i.kt)("h2",null,"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"recom")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"summary")," are commands available only with a stock loaded as the asset. ",(0,i.kt)("inlineCode",{parentName:"p"},"summary")," is a text description of the technical conditions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ta/ $ summary\nMSFT price has changed 1.29% in the last 3 days and 1.09% yesterday.\nRSI is less than 30 and the indicator is pointing downwards.\nAsset is in the oversold area.\nMACD is in the Bearish area and the histogram is moving upwards.\nMSFT price is trading below the 200-day SMA line and the SMA is trending down.\nThe asset price is between the Middle and the Lower Bollinger Bands.\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"recom")," projects buy & sell signals for the short-term."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499195-9d4f8604-dec9-453f-815d-6c89f2b8b216.png",alt:"Recommendations from T/A"})),(0,i.kt)("p",null,"Bollinger Bands with a 1-minute resolution for AMZN - ",(0,i.kt)("inlineCode",{parentName:"p"},"bbands")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499209-ec7eb606-bc86-4cb3-8375-a24b2c235085.png",alt:"AMZN Bollinger Bands"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499232-63412ad9-e74c-4f44-a0f3-8722d98a27c6.png",alt:"AMZN Bollinger Bands"})),(0,i.kt)("p",null,"The Accumulation/Distribution line of AMZN - ",(0,i.kt)("inlineCode",{parentName:"p"},"ad")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/174499247-e63f8f57-a06a-446b-bca3-0fe89258fd4b.png",alt:"AMZN Accumulation/Distribution Line"})),(0,i.kt)("p",null,"To play a demonstration of this menu in the OpenBB Terminal run, ",(0,i.kt)("inlineCode",{parentName:"p"},"exe ta_demo.openbb"),", from the main menu."),(0,i.kt)("p",null,"Back to the ",(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"Introduction to Stocks"),"."))}m.isMDXComponent=!0}}]);