"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5577],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>p});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=c(n),p=r,k=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Introduction to Stocks",keywords:["stocks","fundamental","analysis","technical","analysis","analyst","equity","research"],excerpt:"The Introduction to Stocks explains how to use the menu and provides a brief description of its sub-menus"},i=void 0,l={unversionedId:"guides/stocks",id:"guides/stocks",title:"Introduction to Stocks",description:"The Stocks menu enables you to perform an evaluation of a particular company, a",source:"@site/content/terminal/guides/stocks.md",sourceDirName:"guides",slug:"/guides/stocks",permalink:"/terminal/guides/stocks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/guides/stocks.md",tags:[],version:"current",frontMatter:{title:"Introduction to Stocks",keywords:["stocks","fundamental","analysis","technical","analysis","analyst","equity","research"],excerpt:"The Introduction to Stocks explains how to use the menu and provides a brief description of its sub-menus"},sidebar:"tutorialSidebar",previous:{title:"Scripts & Routines",permalink:"/terminal/guides/scripts"},next:{title:"cases",permalink:"/terminal/features/alternative/covid/cases/"}},s={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Sub-menus available",id:"sub-menus-available",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Stocks menu enables you to perform an evaluation of a particular company, a\nsector or a market as whole by performing various techniques including\nfundamental, technical and behavioural analysis. It does so by handing you tools\nto (among other things) evaluate company news\n(",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/news/",target:"_blank"},"news"),"),\ndisplay historic quarterly results\n(",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/fundamental_analysis/income/",target:"_blank"},"income"),"),\ndetermine future cash flows\n(",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/fundamental_analysis/dcf/",target:"_blank"},"dcf"),"),\nshow analyst recommendations\n(",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/due_diligence/pt/",target:"_blank"},"pt"),"),\nevaluate an entire sector or industry\n(",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/sia/",target:"_blank"},"sia"),"),\nand show the historical prices, correlations and sentiment between similar\ncompanies\n(",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/comparison_analysis/hcorr/",target:"_blank"},"correlation"),")."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"The Stocks menu is called upon by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"stocks")," which opens the following\nmenu:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/169503852-e8ebe577-6e49-438a-b14a-606c9fb9a6de.png",alt:"Stocks Menu"})),(0,r.kt)("p",null,"You have the ability to"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/search/",target:"_blank"},"search"),"a stock based on a search criteria, country, sector or industry. An example:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 May 17, 08:45 (\ud83e\udd8b) /stocks/ $ search facebook\n                                                      Companies found on term facebook\n--------------------------------------------------------------------------------------------------------------------------------------------\n|           | Name                              | Country       | Sector                 | Industry                       | Exchange       |\n------------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB.BA     | Facebook, Inc.                    | United States | Communication Services | Internet Content & Information | Argentina      |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB.MI     | Facebook, Inc.                    | United States | Communication Services | Internet Content & Information | Italy          |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB.MX     | Facebook, Inc.                    | United States | Communication Services | Internet Content & Information | Mexico         |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB        | Facebook, Inc.                    | United States | Communication Services | Internet Content & Information | USA            |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB.SN     | Facebook, Inc.                    | United States |                        |                                | Chile          |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB.VI     | Facebook, Inc.                    | United States | Communication Services | Internet Content & Information | Austria        |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB2.L     | Leverage Shares 2x Facebook ETC A | None          | None                   | None                           | United-Kingdom |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB2A.DE   | Facebook, Inc.                    | United States | Communication Services | Internet Content & Information | Germany        |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB2A.F    | Facebook, Inc.                    | United States | Communication Services | Internet Content & Information | Germany        |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FB3.L     | Leverage Shares 3x Facebook ETC   | None          | None                   | None                           | United-Kingdom |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FBOK34.SA | Facebook, Inc.                    | United States | Communication Services | Internet Content & Information | Brazil         |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| FBS.L     | Leverage Shares -1x Facebook ETC  | None          | None                   | None                           | United-Kingdom |\n|-----------|-----------------------------------|---------------|------------------------|--------------------------------|----------------|\n| SFB.L     | Leverage Shares -1x Facebook ETC  | None          | None                   | None                           | United-Kingdom |\n--------------------------------------------------------------------------------------------------------------------------------------------\n")),(0,r.kt)("p",null,"This results in a selection of"),(0,r.kt)("a",{href:"https://www.investopedia.com/ask/answers/12/what-is-a-stock-ticker.asp",target:"_blank"},"stock tickers")," and their corresponding exchange. With this information, you can load in one of the stock tickers into the menu. This can be done with",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/load/",target:"_blank"},"load"),". See the following example:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 May 17, 08:46 (\ud83e\udd8b) /stocks/ $ load FB\n\nLoading Daily FB stock with starting period 2019-05-13 for analysis.\n\nDatetime: 2022 May 17 08:49\nTimezone: America/New_York\nCurrency: USD\nMarket:   OPEN\nCompany:  Meta Platforms, Inc.\n\n                                           FB Performance\n----------------------------------------------------------------------------------------------------\n| 1 Day | 1 Week | 1 Month | 1 Year   | YTD      | Volatility (1Y) | Volume (10D avg) | Last Price |\n--------|--------|---------|----------|----------|-----------------|------------------|------------|\n| 4.6 % | 1.95 % | -4.82 % | -36.59 % | -40.91 % | 38.04 %         | 39.8 M           | 200.04     |\n----------------------------------------------------------------------------------------------------\n")),(0,r.kt)("p",null,"To then view the stock chart, you can call"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/candle/",target:"_blank"},"candle"),"which shows a candle chart for the defined period:",(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/46355364/169503942-f3f05bbe-77f1-443e-945e-cafbe442bce8.png",alt:"Candle Chart Facebook",width:"800"}),(0,r.kt)("p",null,"By calling ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," the stocks menu re-appears. Here you can see that\nmultiple menus have turned blue. Because of loading a stock ticker, these menus\ncan now be used in combination with the chosen stock."),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/46355364/169503960-62a59aa2-1dbd-46f1-9ea0-095817d7da5d.png",alt:"Stocks Menu with Ticker",width:"800"}),(0,r.kt)("h2",{id:"sub-menus-available"},"Sub-menus available"),(0,r.kt)("p",null,"The Stock menu has an extensive list of available sub-menus ranging from\nfundamental analysis to sector analysis to advanced prediction techniques. To\nfind more information about each menu, click on one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"th",target:"_blank"},"Introduction to Trading Hours"),": discover exchanges that are currently open or closed for a specified ticker. Also find relevant information about each exchange."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"options",target:"_blank"},"Introduction to Options"),": look into available options, option spreads, open interest and binomial valuation models."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"disc",target:"_blank"},"Introduction to Stock Discovery"),": discover trending stocks based on return metrics, revenue and earnings growth, penny stocks and based on upcoming earnings release dates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"sia",target:"_blank"},"Introduction to Sector & Industry Analysis"),": analyse companies that reside in the same industry, sector and/or country and share a similar market cap to determine potential under- and out performance of each company."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"dps",target:"_blank"},"Introduction to Dark Pools"),": discover companies that have enormous shorting pressure, obtain information about dark pool positions and find out about shares that failed to deliver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"scr",target:"_blank"},"Introduction to Stock Screener"),": provides the ability to screen companies that share a similar characteristic, for example unusual volumes, overbought or that include analyst upgrades, and be able to compare valuations and performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"ins",target:"_blank"},"Introduction to Insider Trading"),": explains what large insiders, e.g. a CEO of a company, is buying the chosen company and insider trading activity for the chosen company."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"gov",target:"_blank"},"Introduction to Government"),": gives insights in what the House of Congress is trading and the corporate lobbying that is performed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/OpenBBTerminal/terminal/common/ba",target:"_blank"},"Introduction to Behavioural Analysis"),": gives the abilities to discover how different social media platforms view the chosen company and what is written about them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"ca",target:"_blank"},"Introduction to Comparison Analysis"),": have the ability to compare companies based on, among other things, correlation, financial statements, sentiment, valuations and performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"fa",target:"_blank"},"Introduction to Fundamental Analysis"),": look into the fundamentals of a chosen company including financial statements, SEC filings, investing scores, discounted cash flow analysis (DCF), sustainability scores and key ratios."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"dd",target:"_blank"},"Introduction to Due Diligence"),": explore analyst recommendations, ratings over time, price targets and quarterly and yearly earnings estimates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"bt",target:"_blank"},"Introduction to Strategy Backtesting"),": explore back testing strategies based on technical indicators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/OpenBBTerminal/terminal/common/ta",target:"_blank"},"Introduction to Technical Analysis"),": analysis the chosen company's historical data extensively with moving averages and momentum, trend, volatility and volume indicators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/OpenBBTerminal/terminal/common/qa",target:"_blank"},"Introduction to Quantitative Analysis"),": delve deeper in the historical data with quantitative methods including cumulative distribution function (CDF), (conditional) Value at Risk and rolling ratios."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/OpenBBTerminal/terminal/forecast/",target:"_blank"},"Introduction to Forecasting menu"),": apply advanced AI and Machine Learning models to form prediction of future stock prices including Recurrent Neural Network (RNN), Autoregressive Integrated Moving Average (ARIMA) and Monte Carlo forecasting.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"If we want to a look at the historical data and fundamentals of Microsoft, we\ncan do the following, starting from the ",(0,r.kt)("inlineCode",{parentName:"p"},"stocks")," menu:"),(0,r.kt)("p",null,"First, load in the ticker of Microsoft, this is ",(0,r.kt)("inlineCode",{parentName:"p"},"MSFT")," and can be found with the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/search/",target:"_blank"},"search"),"command:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 May 18, 05:32 (\ud83e\udd8b) /stocks/ $ search microsoft\n")),(0,r.kt)("p",{align:"center"},"Companies found on term microsoft"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Country"),(0,r.kt)("th",{parentName:"tr",align:null},"Sector"),(0,r.kt)("th",{parentName:"tr",align:null},"Industry"),(0,r.kt)("th",{parentName:"tr",align:null},"Exchange"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSF.BR"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"Belgium")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSF.DE"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"Germany")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSF.F"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"Germany")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSF2.L"),(0,r.kt)("td",{parentName:"tr",align:null},"Leverage Shares 2x Microsoft ETC A"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"United-Kingdom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSF3.L"),(0,r.kt)("td",{parentName:"tr",align:null},"Leverage Shares 3x Microsoft ETC"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"United-Kingdom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSFS.L"),(0,r.kt)("td",{parentName:"tr",align:null},"Leverage Shares -1x Microsoft ETC"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"United-Kingdom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSFT.BA"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"Argentina")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSFT.MX"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"Mexico")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSFT"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"USA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSFT.SN"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"Chile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSFT.VI"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"Austria")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MSFT34.SA"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Corporation"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Software - Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},"Brazil")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMSF.L"),(0,r.kt)("td",{parentName:"tr",align:null},"Leverage Shares -1x Microsoft ETC"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"United-Kingdom")))),(0,r.kt)("p",null,"Then, load in the historical data of the company by using the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/load/",target:"_blank"},"load"),". We also choose a different starting period by using `-s` as shown in the documentation:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 May 18, 05:43 (\ud83e\udd8b) /stocks/ $ load MSFT -s 2021-01-01\n\nLoading Daily MSFT stock with starting period 2021-01-01 for analysis.\n\nDatetime: 2022 May 18 05:43\nTimezone: America/New_York\nCurrency: USD\nMarket:   OPEN\nCompany:  Microsoft Corporation\n\n                                          MSFT Performance\n-----------------------------------------------------------------------------------------------------\n| 1 Day  | 1 Week  | 1 Month | 1 Year  | YTD      | Volatility (1Y) | Volume (10D avg) | Last Price |\n---------|---------|---------|---------|----------|-----------------|------------------|------------|\n| 2.18 % | -0.99 % | -4.88 % | 10.66 % | -20.13 % | 24.31 %         | 39.77 M          | 266.82     |\n-----------------------------------------------------------------------------------------------------\n")),(0,r.kt)("p",null,"We can now plot the corresponding stock chart with"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/candle/",target:"_blank"},"candle"),"which shows the company's historical data from 2021-01-01 until the current date. We are also adding in the 20 and 30 day",(0,r.kt)("a",{href:"https://www.investopedia.com/terms/m/movingaverage.asp",target:"_blank"},"moving averages (MA)"),".",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 May 18, 05:44 (\ud83e\udd8b) /stocks/ $ candle --ma 20,30\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/169504138-ca51c824-c2d1-428f-90b4-77b7b021718e.png",alt:"Candle Chart Microsoft with Moving Average"})),(0,r.kt)("p",null,"Now we can go ahead and enter the Fundamental Analysis menu by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"fa"),".\nPlease see ",(0,r.kt)("a",{href:"fundamental_analysis",target:"_blank"},"Introduction to\nFundamental Analysis")," for a more detailed guide on this menu. This will open\nthe following:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/169504216-17484f7d-9cc5-4a56-9c62-d79cde79e91d.png",alt:"Fundamental Analysis Menu"})),(0,r.kt)("p",null,"Within this menu, I am now able to present the quarterly income statements over\nthe last 3 years (or any other period) by using"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/fundamental_analysis/income/",target:"_blank"},"income"),".",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 May 18, 05:52 (\ud83e\udd8b) /stocks/fa/ $ income -q -l 12\n                                                                                  MSFT Income Statement\n\n|                            | 2019-06-30 | 2019-09-30 | 2019-12-31 | 2020-03-31 | 2020-06-30 | 2020-09-30 | 2020-12-31 | 2021-03-31 | 2021-06-30 | 2021-09-30 | 2021-12-31 | 2022-03-31 |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Reported Currency          | USD        | USD        | USD        | USD        | USD        | USD        | USD        | USD        | USD        | USD        | USD        | USD        |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Gross Profit               | 23.305 B   | 22.649 B   | 24.548 B   | 24.046 B   | 25.694 B   | 26.152 B   | 28.882 B   | 28.661 B   | 32.161 B   | 31.671 B   | 34.768 B   | 33.745 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Total Revenue              | 33.717 B   | 32.428 B   | 36.322 B   | 34.315 B   | 38.033 B   | 36.724 B   | 42.558 B   | 41.059 B   | 45.595 B   | 44.743 B   | 51.228 B   | 48.732 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Cost Of Revenue            | 17.199 B   | 16.363 B   | 18.986 B   | 17.650 B   | 20.161 B   | 16.941 B   | 20.907 B   | 20.070 B   | 22.025 B   | 20.145 B   | 24.433 B   | 23.481 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Costof Goods And Services  | 10.412 B   | 10.406 B   | 12.358 B   | 10.975 B   | 12.339 B   | 11.002 B   | 14.194 B   | 13.045 B   | 13.991 B   | 13.646 B   | 16.960 B   | 15.615 B   |\n| Sold                       |            |            |            |            |            |            |            |            |            |            |            |            |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Operating Income           | 12.405 B   | 12.686 B   | 13.891 B   | 12.975 B   | 13.407 B   | 15.876 B   | 17.897 B   | 17.048 B   | 19.095 B   | 20.238 B   | 22.247 B   | 20.364 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Selling General And        | 6.387 B    | 5.398 B    | 6.054 B    | 6.184 B    | 7.073 B    | 5.350 B    | 6.086 B    | 6.409 B    | 7.379 B    | 5.834 B    | 6.763 B    | 7.075 B    |\n| Administrative             |            |            |            |            |            |            |            |            |            |            |            |            |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Research And Development   | 4.513 B    | 4.565 B    | 4.603 B    | 4.887 B    | 5.214 B    | 4.926 B    | 4.899 B    | 5.204 B    | 5.687 B    | 5.599 B    | 5.758 B    | 6.306 B    |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Operating Expenses         | 11.300 B   | 10.522 B   | 11.231 B   | 11.562 B   | 13.036 B   | 10.865 B   | 11.612 B   | 12.229 B   | 13.721 B   | 12.098 B   | 13.231 B   | 14.172 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Investment Income Net      | 709 M      | 724 M      | 688 M      | 673 M      | 595 M      | 570 M      | 545 M      | 519 M      | 497 M      | 520 M      | 503 M      | 519 M      |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Net Interest Income        | -669 M     | -637 M     | -654 M     | -614 M     | -686 M     | -589 M     | -571 M     | -633 M     | -553 M     | -539 M     | -525 M     | -503 M     |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Interest Income            | 321 M      | -139 M     | 281 M      | -153 M     | None       | None       | 545 M      | 519 M      | 497 M      | 520 M      | 503 M      | 519 M      |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Interest Expense           | 669 M      | 637 M      | 654 M      | 614 M      | 686 M      | 589 M      | 571 M      | 633 M      | 553 M      | 539 M      | 525 M      | 503 M      |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Non Interest Income        | 33.717 B   | 33.065 B   | 36.976 B   | 34.929 B   | 38.033 B   | 37.313 B   | 43.129 B   | 41.692 B   | 46.148 B   | 45.282 B   | 51.753 B   | 49.235 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Other Non Operating Income | -121 M     | -18 M      | -19 M      | -3 M       | 0          | 0          | 70 M       | 6 M        | 22 M       | 6 M        | -4 M       | -11 M      |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Depreciation               | None       | None       | None       | None       | None       | None       | None       | None       | None       | None       | None       | None       |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Depreciation And           | 400 M      | 559 M      | 574 M      | 491 M      | 588 M      | 589 M      | 627 M      | 616 M      | 655 M      | 665 M      | 710 M      | 791 M      |\n| Amortization               |            |            |            |            |            |            |            |            |            |            |            |            |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Income Before Tax          | 12.596 B   | 12.686 B   | 14.085 B   | 12.843 B   | 13.422 B   | 16.124 B   | 18.337 B   | 17.236 B   | 19.405 B   | 20.524 B   | 22.515 B   | 20.190 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Income Tax Expense         | -591 M     | 2.008 B    | 2.436 B    | 2.091 B    | 2.220 B    | 2.231 B    | 2.874 B    | 1.779 B    | 2.947 B    | 19 M       | 3.750 B    | 3.462 B    |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Interest And Debt Expense  | 669 M      | 637 M      | 654 M      | 614 M      | 686 M      | 589 M      | 571 M      | 633 M      | 553 M      | 539 M      | 525 M      | 503 M      |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Net Income From Continuing | 12.405 B   | 10.678 B   | 11.649 B   | 10.752 B   | 13.407 B   | 13.893 B   | 15.463 B   | 15.457 B   | 16.458 B   | 20.505 B   | 18.765 B   | 16.728 B   |\n| Operations                 |            |            |            |            |            |            |            |            |            |            |            |            |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Comprehensive Income Net   | 14.112 B   | 10.957 B   | 11.455 B   | 13.683 B   | 11.712 B   | 13.807 B   | 15.720 B   | 13.552 B   | 16.818 B   | 19.966 B   | 17.919 B   | 13.815 B   |\n| Of Tax                     |            |            |            |            |            |            |            |            |            |            |            |            |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Ebit                       | 13.265 B   | 13.323 B   | 14.739 B   | 13.457 B   | 14.108 B   | 16.713 B   | 18.908 B   | 17.869 B   | 19.958 B   | 21.063 B   | 23.040 B   | 20.693 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Ebitda                     | 13.665 B   | 13.882 B   | 15.313 B   | 13.948 B   | 14.696 B   | 17.302 B   | 19.535 B   | 18.485 B   | 20.613 B   | 21.728 B   | 23.750 B   | 21.484 B   |\n|----------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|\n| Net Income                 | 13.187 B   | 10.678 B   | 11.649 B   | 10.752 B   | 11.202 B   | 13.893 B   | 15.463 B   | 15.457 B   | 16.458 B   | 20.505 B   | 18.765 B   | 16.728 B   |\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")))}u.isMDXComponent=!0}}]);