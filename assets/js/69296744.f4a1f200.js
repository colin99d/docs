"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"metrics",description:"OpenBB Terminal Function"},o="Fundamental Analysis",l={unversionedId:"features/stocks/fa/metrics",id:"features/stocks/fa/metrics",title:"metrics",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/fa/metrics.md",sourceDirName:"features/stocks/fa",slug:"/features/stocks/fa/metrics",permalink:"/terminal/features/stocks/fa/metrics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/fa/metrics.md",tags:[],version:"current",frontMatter:{title:"metrics",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/features/stocks/fa/load"},next:{title:"mgmt",permalink:"/terminal/features/stocks/fa/mgmt"}},s={},c=[{value:"metrics",id:"metrics",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fundamental-analysis"},"Fundamental Analysis"),(0,n.kt)("h2",{id:"metrics"},"metrics"),(0,n.kt)("h3",{id:"description"},"Description:"),(0,n.kt)("p",null,"Prints a list of the key metrics of a company over time. This can be either quarterly or annually. This includes, among other things, Return on Equity (ROE), Working Capital, Current Ratio and Debt to Assets. The following fields are expected: Average inventory, Average payables, Average receivables, Book value per share, Capex per share, Capex to depreciation, Capex to operating cash flow, Capex to revenue, Cash per share, Current ratio, Days of inventory on hand, Days payables outstanding, Days sales outstanding, Debt to assets, Debt to equity, Dividend yield, Earnings yield, Enterprise value, Enterprise value over EBITDA, Ev to free cash flow, Ev to operating cash flow, Ev to sales, Free cash flow per share, Free cash flow yield, Graham net net, Graham number, Income quality, Intangibles to total assets, Interest debt per share, Inventory turnover, Market cap, Net current asset value, Net debt to EBITDA, Net income per share, Operating cash flow per share, Payables turnover, Payout ratio, Pb ratio, Pe ratio, Pfcf ratio, Pocf ratio, Price to sales ratio, Ptb ratio, Receivables turnover, Research and development to revenue, Return on tangible assets, Revenue per share, Roe, Roic, Sales general and administrative to revenue, Shareholders equity per share, Stock based compensation to revenue, Tangible book value per share, and Working capital. ","[Source: Financial Modeling Prep]"),(0,n.kt)("h3",{id:"usage"},"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"usage: metrics [-l LIMIT] [-q]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit of latest years/quarters."),(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"b_quarter"),(0,n.kt)("td",{parentName:"tr",align:null},"Quarter fundamental data flag."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))))}p.isMDXComponent=!0}}]);