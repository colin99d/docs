"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17214],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>_});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),_=s,d=m["".concat(l,".").concat(_)]||m[_]||u[_]||o;return n?t.createElement(d,i(i({ref:r},p),{},{components:n})):t.createElement(d,i({ref:r},p))}));function _(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96694:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(87462),s=(n(67294),n(3905));const o={title:"overview",description:"OpenBB Terminal Function"},i="Screener",a={unversionedId:"features/stocks/screener/overview",id:"features/stocks/screener/overview",title:"overview",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/screener/overview.md",sourceDirName:"features/stocks/screener",slug:"/features/stocks/screener/overview",permalink:"/terminal/features/stocks/screener/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/screener/overview.md",tags:[],version:"current",frontMatter:{title:"overview",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/terminal/features/stocks/screener/historical"},next:{title:"ownership",permalink:"/terminal/features/stocks/screener/ownership"}},l={},c=[{value:"overview",id:"overview",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"screener"},"Screener"),(0,s.kt)("h2",{id:"overview"},"overview"),(0,s.kt)("h3",{id:"description"},"Description:"),(0,s.kt)("p",null,"Prints overview data of the companies that meet the pre-set filtering."),(0,s.kt)("h3",{id:"usage"},"Usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"usage: overview [-p Desired preset.] [-l LIMIT] [-r] [-s SORT [SORT ...]]\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Optional"),(0,s.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"preset"),(0,s.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,s.kt)("td",{parentName:"tr",align:null},"top_gainers"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"5pct_above_low:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\5pct_above_low.ini,  analyst_strong_buy:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\analyst_strong_buy.ini,  break_out_stocks:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\break_out_stocks.ini,  buffett_like:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\buffett_like.ini,  bull_runs_over_10pct:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\bull_runs_over_10pct.ini,  channel_up_and_low_debt_and_sma_50and200:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\channel_up_and_low_debt_and_sma_50and200.ini,  cheap_bottom_dividend:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\cheap_bottom_dividend.ini,  cheap_dividend:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\cheap_dividend.ini,  cheap_oversold:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\cheap_oversold.ini,  continued_momentum_scan:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\continued_momentum_scan.ini,  death_cross:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\death_cross.ini,  golden_cross:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\golden_cross.ini,  golden_cross_penny:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\golden_cross_penny.ini,  growth_stocks:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\growth_stocks.ini,  heavy_inst_ins:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\heavy_inst_ins.ini,  high_vol_and_low_debt:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\high_vol_and_low_debt.ini,  modified_dreman:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\modified_dreman.ini,  modified_neff:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\modified_neff.ini,  news_scanner:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\news_scanner.ini,  oversold:  Oversold,  oversold_under_3dol:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\oversold_under_3dol.ini,  oversold_under_5dol:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\oversold_under_5dol.ini,  potential_reversals:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\potential_reversals.ini,  recent_growth_and_support:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\recent_growth_and_support.ini,  rosenwald:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\rosenwald.ini,  rosenwald_gtfo:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\rosenwald_gtfo.ini,  sexy_year:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\sexy_year.ini,  short_squeeze_scan:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\short_squeeze_scan.ini,  simplistic_momentum_scanner_under_7dol:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\simplistic_momentum_scanner_under_7dol.ini,  stocks_strong_support_levels:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\stocks_strong_support_levels.ini,  template:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\template.ini,  top_performers_all:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\top_performers_all.ini,  top_performers_healthcare:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\top_performers_healthcare.ini,  top_performers_tech:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\top_performers_tech.ini,  undervalue:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\undervalue.ini,  under_15dol_stocks:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\under_15dol_stocks.ini,  unusual_volume:  Unusual Volume,  value_stocks:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\value_stocks.ini,  weak_support_and_top_performers:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\weak_support_and_top_performers.ini,  top_gainers:  Top Gainers,  top_losers:  Top Losers,  new_high:  New High,  new_low:  New Low,  most_volatile:  Most Volatile,  most_active:  Most Active,  overbought:  Overbought,  downgrades:  Downgrades,  upgrades:  Upgrades,  earnings_before:  Earnings Before,  earnings_after:  Earnings After,  recent_insider_buying:  Recent Insider Buying,  recent_insider_selling:  Recent Insider Selling,  major_news:  Major News,  horizontal_sr:  Horizontal S/R,  tl_resistance:  TL Resistance,  tl_support:  TL Support,  wedge_up:  Wedge Up,  wedge_down:  Wedge Down,  wedge:  Wedge,  triangle_ascending:  Triangle Ascending,  triangle_descending:  Triangle Descending,  channel_up:  Channel Up,  channel_down:  Channel Down,  channel:  Channel,  double_top:  Double Top,  double_bottom:  Double Bottom,  multiple_top:  Multiple Top,  multiple_bottom:  Multiple Bottom,  head_shoulders:  Head & Shoulders,  head_shoulders_inverse:  Head & Shoulders Inverse")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"limit"),(0,s.kt)("td",{parentName:"tr",align:null},"Limit of stocks to print"),(0,s.kt)("td",{parentName:"tr",align:null},"10"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"None")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"reverse"),(0,s.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,s.kt)("td",{parentName:"tr",align:null},"None"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"None")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"sort"),(0,s.kt)("td",{parentName:"tr",align:null},"Sort elements of the table."),(0,s.kt)("td",{parentName:"tr",align:null},"None"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"None")))))}u.isMDXComponent=!0}}]);