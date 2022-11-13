"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47588],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),d=p(n),k=r,g=d["".concat(o,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48205:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Introduction to the Behavioural Analysis",keywords:["stocks","behaviour","analysis","ba","headlines","snews","wsb","watchlist","popular","spac","trending","stalking","bullbear","messages","inter","sentiment","Google","Twitter","Reddit","Stocktwits","SentimentInvestor","Cramer","Jim","mentions","regions","interest","queries","rise","trend","hist","jcrd","jctr"],date:"2022-05-23",type:"guides",status:"publish",excerpt:"An Introduction to the Behavioural Analysis menu, within the Stocks menu.",geekdocCollapseSection:!0},i=void 0,m={unversionedId:"guides/common/ba",id:"guides/common/ba",title:"Introduction to the Behavioural Analysis",description:"The Behavioural Analysis menu offers the user tools for gauging the overall public sentiment of a company online.",source:"@site/terminal/guides/common/ba.md",sourceDirName:"guides/common",slug:"/guides/common/ba",permalink:"/docs/terminal/guides/common/ba",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/guides/common/ba.md",tags:[],version:"current",frontMatter:{title:"Introduction to the Behavioural Analysis",keywords:["stocks","behaviour","analysis","ba","headlines","snews","wsb","watchlist","popular","spac","trending","stalking","bullbear","messages","inter","sentiment","Google","Twitter","Reddit","Stocktwits","SentimentInvestor","Cramer","Jim","mentions","regions","interest","queries","rise","trend","hist","jcrd","jctr"],date:"2022-05-23",type:"guides",status:"publish",excerpt:"An Introduction to the Behavioural Analysis menu, within the Stocks menu.",geekdocCollapseSection:!0},sidebar:"tutorialSidebar",previous:{title:"Common Menus",permalink:"/docs/terminal/common-features"},next:{title:"Introduction to the Quantitative Analysis Menu",permalink:"/docs/terminal/guides/common/qa"}},o={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Behavioural Analysis menu offers the user tools for gauging the overall public sentiment of a company online.\nThe complexity of the tools range from message board scrapers to deep learning algorithms for financial analysis and prediction.\nSentiment is particularly useful for momentum trading strategies, discovery, and general fundamental research.\nNavigate into the menu from the ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"Stocks")," menu by entering, ",(0,r.kt)("inlineCode",{parentName:"p"},"ba"),"; or, using absolute paths from anywhere in the Terminal: ",(0,r.kt)("inlineCode",{parentName:"p"},"/stocks/ba")),(0,r.kt)("img",{alt:"The Behavioural Analysis submenu",src:"https://user-images.githubusercontent.com/46355364/170242317-ae66ed0b-f2e8-4304-9231-ea833d01e0e2.png"}),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"The commands with text, representing ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/#structure-of-the-openbb-terminal",target:"_blank"},"commands"),",\ndo not require a ticker, faded commands will turn light blue when there is a ticker loaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ load gme\n\nLoading Daily GME stock with starting period 2019-05-20 for analysis.\n\nDatetime: 2022 May 23 12:13\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\nCompany:  GameStop Corporation\n\n(\ud83e\udd8b) /stocks/ba/ $ ?\n")),(0,r.kt)("img",{alt:"The Behavioural Analysis Menu with a loaded ticker",src:"https://user-images.githubusercontent.com/46355364/170242757-3e29f690-7d29-4fe2-9e14-889c43e3142e.png"}),(0,r.kt)("p",null,"Some data sources will require a valid API key, which can be obtained for free and then set using the Keys menu.\nTo use all the features in this menu, obtain free API keys from these providers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://finnhub.io/",target:"_blank"},"Finnhub"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://developer.twitter.com/",target:"_blank"},"Twitter"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://old.reddit.com/prefs/apps/",target:"_blank"},"Reddit"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://sentimentinvestor.com/",target:"_blank"},"Sentiment Investor"),(0,r.kt)("br",null))),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/#accessing-other-sources-of-data-via-api-keys",target:"_blank"},"Getting Started Guide"),"\nfor help setting API keys in the Terminal."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"As with every command, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," argument displays the help dialogue. Running the ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/headlines/",target:"_blank"},"headlines"),"\ncommand returns the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ headlines\n")),(0,r.kt)("img",{alt:"headlines",src:"https://user-images.githubusercontent.com/46355364/170244924-ffe6cd15-8d17-4690-bf44-d2b496dbc310.png"}),(0,r.kt)("p",null,"Alternatively, running the ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/snews/",target:"_blank"},"snews"),"\ncommand returns the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ snews\n")),(0,r.kt)("img",{alt:"headlines",src:"https://user-images.githubusercontent.com/46355364/170243359-9d1302f0-3394-4e05-8360-0e59a1cb6e54.png"}),(0,r.kt)("p",null,"The Reddit functions will return popular tickers and posts, or measure sentiment for a particular stock. An example\nwould be by looking at the threads that pop up on ",(0,r.kt)("a",{href:"https://www.reddit.com/r/wallstreetbets/",target:"_blank"},"/r/wallstreetbets"),",\nfamous for the ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/R/wallstreetbets",target:"_blank"},"GameStop short squeeze"),":"),(0,r.kt)("p",null,"(\ud83e\udd8b) /stocks/ba/ $ wsb"),(0,r.kt)("p",null,"2022-05-23 10:00:12 - Daily Discussion Thread for May 23, 2022\n",(0,r.kt)("a",{parentName:"p",href:"https://old.reddit.com/r/wallstreetbets/comments/uvwq8z/daily_discussion_thread_for_may_23_2022/"},"https://old.reddit.com/r/wallstreetbets/comments/uvwq8z/daily_discussion_thread_for_may_23_2022/")),(0,r.kt)("p",null,"Reddit Submission"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subreddit"),(0,r.kt)("th",{parentName:"tr",align:null},"Flair"),(0,r.kt)("th",{parentName:"tr",align:null},"Score"),(0,r.kt)("th",{parentName:"tr",align:null},"# Comments"),(0,r.kt)("th",{parentName:"tr",align:null},"Upvote %"),(0,r.kt)("th",{parentName:"tr",align:null},"Awards"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wallstreetbets"),(0,r.kt)("td",{parentName:"tr",align:null},"Daily Discussion"),(0,r.kt)("td",{parentName:"tr",align:null},"195"),(0,r.kt)("td",{parentName:"tr",align:null},"9168"),(0,r.kt)("td",{parentName:"tr",align:null},"88%"),(0,r.kt)("td",{parentName:"tr",align:null},"3 Silver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"2 Helpful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1 Wholesome")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1 Got the")))),(0,r.kt)("p",null,"2022-05-21 11:34:21 - Most Anticipated Earnings Releases for the week beginning May 23rd, 2022\n",(0,r.kt)("a",{parentName:"p",href:"https://old.reddit.com/r/wallstreetbets/comments/uul9fs/most_anticipated_earnings_releases_for_the_week/"},"https://old.reddit.com/r/wallstreetbets/comments/uul9fs/most_anticipated_earnings_releases_for_the_week/")),(0,r.kt)("p",null,"Reddit Submission"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subreddit"),(0,r.kt)("th",{parentName:"tr",align:null},"Flair"),(0,r.kt)("th",{parentName:"tr",align:null},"Score"),(0,r.kt)("th",{parentName:"tr",align:null},"# Comments"),(0,r.kt)("th",{parentName:"tr",align:null},"Upvote %"),(0,r.kt)("th",{parentName:"tr",align:null},"Awards"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wallstreetbets"),(0,r.kt)("td",{parentName:"tr",align:null},"Earnings Thread"),(0,r.kt)("td",{parentName:"tr",align:null},"960"),(0,r.kt)("td",{parentName:"tr",align:null},"1325"),(0,r.kt)("td",{parentName:"tr",align:null},"97%"),(0,r.kt)("td",{parentName:"tr",align:null},"1 Silver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5 Helpful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3 Wholesome")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1 Take My Energy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1 Sne")))),(0,r.kt)("p",null,"The Behavioural Analysis menu also has the ability to scan for sentiment on multiple platforms including Twitter and Google\nwith ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/sentiment/",target:"_blank"},"sentiment"),","),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/infer/",target:"_blank"},"infer"),"and ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/queries/",target:"_blank"},"queries"),". ```` (\ud83e\udd8b) /stocks/ba/ $ sentiment -c From 2022-05-23 retrieving 360 tweets (15 tweets/hour) From 2022-05-22 retrieving 360 tweets (15 tweets/hour) From 2022-05-21 retrieving 360 tweets (15 tweets/hour) From 2022-05-20 retrieving 360 tweets (15 tweets/hour) From 2022-05-19 retrieving 360 tweets (15 tweets/hour) From 2022-05-18 retrieving 360 tweets (15 tweets/hour) From 2022-05-17 retrieving 360 tweets (15 tweets/hour)",(0,r.kt)("p",null,"(\ud83e\udd8b) /stocks/ba/ $ infer\nFrom: 2022-05-23 18:21:12\nTo:   2022-05-23 18:30:36\n100 tweets were analyzed.\nFrequency of approx 1 tweet every 6 seconds.\nThe summed compound sentiment of GME is: 18.42\nThe average compound sentiment of GME is: 0.18\nOf the last 100 tweets, 41.00 % had a higher positive sentiment\nOf the last 100 tweets, 19.00 % had a higher negative sentiment"),(0,r.kt)("p",null,"(\ud83e\udd8b) /stocks/ba/ $ queries"),(0,r.kt)("p",null," Top GME's related queries"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"query"),(0,r.kt)("th",{parentName:"tr",align:null},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stock gme"),(0,r.kt)("td",{parentName:"tr",align:null},"100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amc"),(0,r.kt)("td",{parentName:"tr",align:null},"29%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amc stock"),(0,r.kt)("td",{parentName:"tr",align:null},"24%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gme price"),(0,r.kt)("td",{parentName:"tr",align:null},"23%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gme stock price"),(0,r.kt)("td",{parentName:"tr",align:null},"14%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gme share"),(0,r.kt)("td",{parentName:"tr",align:null},"7%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gme share price"),(0,r.kt)("td",{parentName:"tr",align:null},"6%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reddit"),(0,r.kt)("td",{parentName:"tr",align:null},"6%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gme reddit"),(0,r.kt)("td",{parentName:"tr",align:null},"6%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bb"),(0,r.kt)("td",{parentName:"tr",align:null},"5%")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'The <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/sentiment/" target="_blank">sentiment</a>\ncommand returns the following:\n\n<img alt="sentiment" src="https://user-images.githubusercontent.com/46355364/170243539-1ea3fc6a-d7ec-4991-a6bb-ed5879753328.png"></img>\n\nMore advanced techniques can also be applied by using tools from <a href="https://sentimentinvestor.com" target="_blank">Sentiment Investor</a>\nthat analyzes millions of messages to show the most talked about stocks by hour. This has the ability to show the\nmost trending tickers with <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/trend/" target="_blank">trend</a> and historical sentiment data with\n<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/hist/" target="_blank">hist</a>.\n\n')),(0,r.kt)("p",null,"(\ud83e\udd8b) /stocks/ba/ $ trend"),(0,r.kt)("p",null,"Most trending stocks at 2022-05-23 00:00"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TICKER"),(0,r.kt)("th",{parentName:"tr",align:null},"TOTAL"),(0,r.kt)("th",{parentName:"tr",align:null},"LIKES"),(0,r.kt)("th",{parentName:"tr",align:null},"RHI"),(0,r.kt)("th",{parentName:"tr",align:null},"AHI"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPY"),(0,r.kt)("td",{parentName:"tr",align:null},"89.00"),(0,r.kt)("td",{parentName:"tr",align:null},"43.00"),(0,r.kt)("td",{parentName:"tr",align:null},"1.22"),(0,r.kt)("td",{parentName:"tr",align:null},"1.26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AMC"),(0,r.kt)("td",{parentName:"tr",align:null},"80.00"),(0,r.kt)("td",{parentName:"tr",align:null},"155.00"),(0,r.kt)("td",{parentName:"tr",align:null},"1.07"),(0,r.kt)("td",{parentName:"tr",align:null},"1.18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TSLA"),(0,r.kt)("td",{parentName:"tr",align:null},"80.00"),(0,r.kt)("td",{parentName:"tr",align:null},"78.00"),(0,r.kt)("td",{parentName:"tr",align:null},"1.07"),(0,r.kt)("td",{parentName:"tr",align:null},"1.34")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BTC"),(0,r.kt)("td",{parentName:"tr",align:null},"62.00"),(0,r.kt)("td",{parentName:"tr",align:null},"74.00"),(0,r.kt)("td",{parentName:"tr",align:null},"1.14"),(0,r.kt)("td",{parentName:"tr",align:null},"1.09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NIO"),(0,r.kt)("td",{parentName:"tr",align:null},"50.00"),(0,r.kt)("td",{parentName:"tr",align:null},"14.00"),(0,r.kt)("td",{parentName:"tr",align:null},"1.17"),(0,r.kt)("td",{parentName:"tr",align:null},"1.15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AAPL"),(0,r.kt)("td",{parentName:"tr",align:null},"28.00"),(0,r.kt)("td",{parentName:"tr",align:null},"4.00"),(0,r.kt)("td",{parentName:"tr",align:null},"0.66"),(0,r.kt)("td",{parentName:"tr",align:null},"0.75")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AMD"),(0,r.kt)("td",{parentName:"tr",align:null},"26.00"),(0,r.kt)("td",{parentName:"tr",align:null},"59.00"),(0,r.kt)("td",{parentName:"tr",align:null},"0.57"),(0,r.kt)("td",{parentName:"tr",align:null},"0.61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NVAX"),(0,r.kt)("td",{parentName:"tr",align:null},"13.00"),(0,r.kt)("td",{parentName:"tr",align:null},"4.00"),(0,r.kt)("td",{parentName:"tr",align:null},"0.47"),(0,r.kt)("td",{parentName:"tr",align:null},"0.40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NVDA"),(0,r.kt)("td",{parentName:"tr",align:null},"12.00"),(0,r.kt)("td",{parentName:"tr",align:null},"11.00"),(0,r.kt)("td",{parentName:"tr",align:null},"0.45"),(0,r.kt)("td",{parentName:"tr",align:null},"0.47")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DIS"),(0,r.kt)("td",{parentName:"tr",align:null},"12.00"),(0,r.kt)("td",{parentName:"tr",align:null},"1.00"),(0,r.kt)("td",{parentName:"tr",align:null},"0.69"),(0,r.kt)("td",{parentName:"tr",align:null},"0.44")))),(0,r.kt)("p",null,"(\ud83e\udd8b) /stocks/ba/ $ hist -s 2022-05-01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n<a target="_blank" href="https://user-images.githubusercontent.com/46355364/170243719-fccf414b-3a89-4776-88de-e30f4eb34f89.png"><img alt="hist" src="https://user-images.githubusercontent.com/46355364/170243719-fccf414b-3a89-4776-88de-e30f4eb34f89.png"></a></img>\n\nInspired by the Twitter user, <a href="https://twitter.com/CramerTracker" target="_blank">@cramertracker</a>, the final\ntwo features follow (CNBC Talking Head) Jim Cramer stock recommendations as satire that rings true.\n\n')),(0,r.kt)("p",null,"(\ud83e\udd8b) /stocks/ba/ $ jcdr"),(0,r.kt)("p",null,"Jim Cramer Recommendations for 05/19"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Company"),(0,r.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,r.kt)("th",{parentName:"tr",align:null},"Price"),(0,r.kt)("th",{parentName:"tr",align:null},"LastPrice"),(0,r.kt)("th",{parentName:"tr",align:null},"Change (%)"),(0,r.kt)("th",{parentName:"tr",align:null},"Recommendation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Apple"),(0,r.kt)("td",{parentName:"tr",align:null},"AAPL"),(0,r.kt)("td",{parentName:"tr",align:null},"137.35"),(0,r.kt)("td",{parentName:"tr",align:null},"142.38"),(0,r.kt)("td",{parentName:"tr",align:null},"3.53"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AeroVironment"),(0,r.kt)("td",{parentName:"tr",align:null},"AVAV"),(0,r.kt)("td",{parentName:"tr",align:null},"85.35"),(0,r.kt)("td",{parentName:"tr",align:null},"85.49"),(0,r.kt)("td",{parentName:"tr",align:null},"0.16"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"BABA"),(0,r.kt)("td",{parentName:"tr",align:null},"87.69"),(0,r.kt)("td",{parentName:"tr",align:null},"87.04"),(0,r.kt)("td",{parentName:"tr",align:null},"-0.75"),(0,r.kt)("td",{parentName:"tr",align:null},"Sell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Constellation Energy"),(0,r.kt)("td",{parentName:"tr",align:null},"CEG"),(0,r.kt)("td",{parentName:"tr",align:null},"57.23"),(0,r.kt)("td",{parentName:"tr",align:null},"56.92"),(0,r.kt)("td",{parentName:"tr",align:null},"-0.54"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Costco"),(0,r.kt)("td",{parentName:"tr",align:null},"COST"),(0,r.kt)("td",{parentName:"tr",align:null},"422.93"),(0,r.kt)("td",{parentName:"tr",align:null},"427.93"),(0,r.kt)("td",{parentName:"tr",align:null},"1.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DraftKings"),(0,r.kt)("td",{parentName:"tr",align:null},"DKNG"),(0,r.kt)("td",{parentName:"tr",align:null},"14.15"),(0,r.kt)("td",{parentName:"tr",align:null},"13.89"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.87"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lockheed Martin"),(0,r.kt)("td",{parentName:"tr",align:null},"LMT"),(0,r.kt)("td",{parentName:"tr",align:null},"425.62"),(0,r.kt)("td",{parentName:"tr",align:null},"433.71"),(0,r.kt)("td",{parentName:"tr",align:null},"1.87"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cloudflare"),(0,r.kt)("td",{parentName:"tr",align:null},"NET"),(0,r.kt)("td",{parentName:"tr",align:null},"58.00"),(0,r.kt)("td",{parentName:"tr",align:null},"56.92"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.90"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Northrop Grumman"),(0,r.kt)("td",{parentName:"tr",align:null},"NOC"),(0,r.kt)("td",{parentName:"tr",align:null},"448.50"),(0,r.kt)("td",{parentName:"tr",align:null},"456.57"),(0,r.kt)("td",{parentName:"tr",align:null},"1.77"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NVIDIA"),(0,r.kt)("td",{parentName:"tr",align:null},"NVDA"),(0,r.kt)("td",{parentName:"tr",align:null},"171.24"),(0,r.kt)("td",{parentName:"tr",align:null},"168.29"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.75"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Palo Alto Networks"),(0,r.kt)("td",{parentName:"tr",align:null},"PANW"),(0,r.kt)("td",{parentName:"tr",align:null},"436.37"),(0,r.kt)("td",{parentName:"tr",align:null},"502.69"),(0,r.kt)("td",{parentName:"tr",align:null},"13.19"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PLBY Group"),(0,r.kt)("td",{parentName:"tr",align:null},"PLBY"),(0,r.kt)("td",{parentName:"tr",align:null},"9.06"),(0,r.kt)("td",{parentName:"tr",align:null},"9.26"),(0,r.kt)("td",{parentName:"tr",align:null},"2.16"),(0,r.kt)("td",{parentName:"tr",align:null},"Sell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raytheon Technologies"),(0,r.kt)("td",{parentName:"tr",align:null},"RTX"),(0,r.kt)("td",{parentName:"tr",align:null},"90.25"),(0,r.kt)("td",{parentName:"tr",align:null},"91.87"),(0,r.kt)("td",{parentName:"tr",align:null},"1.76"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SoFi Technologies"),(0,r.kt)("td",{parentName:"tr",align:null},"SOFI"),(0,r.kt)("td",{parentName:"tr",align:null},"7.75"),(0,r.kt)("td",{parentName:"tr",align:null},"7.30"),(0,r.kt)("td",{parentName:"tr",align:null},"-6.16"),(0,r.kt)("td",{parentName:"tr",align:null},"Buy")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a target="_blank" href="https://user-images.githubusercontent.com/46355364/170243863-f95dc515-c0d7-4ede-964d-f6ba41aec743.png"><img alt="Jim Cramer historical recommendations for $DKNG" src="https://user-images.githubusercontent.com/46355364/170243863-f95dc515-c0d7-4ede-964d-f6ba41aec743.png"></a></img>\n')))}s.isMDXComponent=!0}}]);