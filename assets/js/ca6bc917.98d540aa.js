"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44292],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),_=s,d=m["".concat(l,".").concat(_)]||m[_]||u[_]||i;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function _(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const i={title:"technical",description:"OpenBB Terminal Function"},o="Screener",a={unversionedId:"features/stocks/screener/technical",id:"features/stocks/screener/technical",title:"technical",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/screener/technical.md",sourceDirName:"features/stocks/screener",slug:"/features/stocks/screener/technical",permalink:"/terminal/features/stocks/screener/technical",draft:!1,tags:[],version:"current",frontMatter:{title:"technical",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/terminal/features/stocks/screener/set"},next:{title:"valuation",permalink:"/terminal/features/stocks/screener/valuation"}},l={},c=[{value:"technical",id:"technical",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"screener"},"Screener"),(0,s.kt)("h2",{id:"technical"},"technical"),(0,s.kt)("h3",{id:"description"},"Description:"),(0,s.kt)("p",null,"Prints technical data of the companies that meet the pre-set filtering."),(0,s.kt)("h3",{id:"usage"},"Usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"usage: technical [-p Desired preset.] [-l LIMIT] [-r] [-s SORT [SORT ...]]\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Optional"),(0,s.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"preset"),(0,s.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,s.kt)("td",{parentName:"tr",align:null},"top_gainers"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"5pct_above_low:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\5pct_above_low.ini,  analyst_strong_buy:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\analyst_strong_buy.ini,  break_out_stocks:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\break_out_stocks.ini,  buffett_like:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\buffett_like.ini,  bull_runs_over_10pct:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\bull_runs_over_10pct.ini,  channel_up_and_low_debt_and_sma_50and200:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\channel_up_and_low_debt_and_sma_50and200.ini,  cheap_bottom_dividend:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\cheap_bottom_dividend.ini,  cheap_dividend:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\cheap_dividend.ini,  cheap_oversold:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\cheap_oversold.ini,  continued_momentum_scan:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\continued_momentum_scan.ini,  death_cross:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\death_cross.ini,  golden_cross:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\golden_cross.ini,  golden_cross_penny:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\golden_cross_penny.ini,  growth_stocks:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\growth_stocks.ini,  heavy_inst_ins:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\heavy_inst_ins.ini,  high_vol_and_low_debt:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\high_vol_and_low_debt.ini,  modified_dreman:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\modified_dreman.ini,  modified_neff:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\modified_neff.ini,  news_scanner:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\news_scanner.ini,  oversold:  Oversold,  oversold_under_3dol:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\oversold_under_3dol.ini,  oversold_under_5dol:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\oversold_under_5dol.ini,  potential_reversals:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\potential_reversals.ini,  recent_growth_and_support:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\recent_growth_and_support.ini,  rosenwald:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\rosenwald.ini,  rosenwald_gtfo:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\rosenwald_gtfo.ini,  sexy_year:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\sexy_year.ini,  short_squeeze_scan:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\short_squeeze_scan.ini,  simplistic_momentum_scanner_under_7dol:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\simplistic_momentum_scanner_under_7dol.ini,  stocks_strong_support_levels:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\stocks_strong_support_levels.ini,  template:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\template.ini,  top_performers_all:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\top_performers_all.ini,  top_performers_healthcare:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\top_performers_healthcare.ini,  top_performers_tech:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\top_performers_tech.ini,  undervalue:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\undervalue.ini,  under_15dol_stocks:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\under_15dol_stocks.ini,  unusual_volume:  Unusual Volume,  value_stocks:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\value_stocks.ini,  weak_support_and_top_performers:  C:\\Users\\teh_coderer\\Documents\\GitHub\\OpenBBTerminalMine\\openbb_terminal\\stocks\\screener\\presets\\weak_support_and_top_performers.ini,  top_gainers:  Top Gainers,  top_losers:  Top Losers,  new_high:  New High,  new_low:  New Low,  most_volatile:  Most Volatile,  most_active:  Most Active,  overbought:  Overbought,  downgrades:  Downgrades,  upgrades:  Upgrades,  earnings_before:  Earnings Before,  earnings_after:  Earnings After,  recent_insider_buying:  Recent Insider Buying,  recent_insider_selling:  Recent Insider Selling,  major_news:  Major News,  horizontal_sr:  Horizontal S/R,  tl_resistance:  TL Resistance,  tl_support:  TL Support,  wedge_up:  Wedge Up,  wedge_down:  Wedge Down,  wedge:  Wedge,  triangle_ascending:  Triangle Ascending,  triangle_descending:  Triangle Descending,  channel_up:  Channel Up,  channel_down:  Channel Down,  channel:  Channel,  double_top:  Double Top,  double_bottom:  Double Bottom,  multiple_top:  Multiple Top,  multiple_bottom:  Multiple Bottom,  head_shoulders:  Head & Shoulders,  head_shoulders_inverse:  Head & Shoulders Inverse")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"limit"),(0,s.kt)("td",{parentName:"tr",align:null},"Limit of stocks to print"),(0,s.kt)("td",{parentName:"tr",align:null},"10"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"None")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"reverse"),(0,s.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,s.kt)("td",{parentName:"tr",align:null},"None"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"None")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"sort"),(0,s.kt)("td",{parentName:"tr",align:null},"Sort elements of the table."),(0,s.kt)("td",{parentName:"tr",align:null},"None"),(0,s.kt)("td",{parentName:"tr",align:null},"False"),(0,s.kt)("td",{parentName:"tr",align:null},"None")))))}u.isMDXComponent=!0}}]);