"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},53453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"features/portfolio/po/plot/plot",id:"features/portfolio/po/plot/plot",title:"plot",description:"Plot selected charts for portfolios",source:"@site/content/terminal/features/portfolio/po/plot/plot.md",sourceDirName:"features/portfolio/po/plot",slug:"/features/portfolio/po/plot/",permalink:"/terminal/features/portfolio/po/plot/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/portfolio/po/plot/plot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/terminal/features/portfolio/po/params/set/"},next:{title:"property",permalink:"/terminal/features/portfolio/po/property/"}},s={},p=[],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: plot [-pf PORTFOLIOS] [-ct CATEGORIES] [-p HISTORIC_PERIOD]\n            [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN]\n            [-th THRESHOLD_VALUE] [-mt NAN_FILL_METHOD]\n            [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}]\n            [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-pi] [-hi] [-dd] [-rc]\n            [-he] [-h]\n")),(0,a.kt)("p",null,"Plot selected charts for portfolios"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -pf PORTFOLIOS, --portfolios PORTFOLIOS\n                        Selected portfolios that will be plotted (default: [])\n  -ct CATEGORIES, --categories CATEGORIES\n                        Show selected categories (default: [])\n  -p HISTORIC_PERIOD, --period HISTORIC_PERIOD\n                        Period to get yfinance data from. Possible frequency\n                        strings are: 'd': means days, for example '252d' means\n                        252 days 'w': means weeks, for example '52w' means 52\n                        weeks 'mo': means months, for example '12mo' means 12\n                        months 'y': means years, for example '1y' means 1 year\n                        'ytd': downloads data from beginning of year to today\n                        'max': downloads all data available for each asset\n                        (default: 3y)\n  -s START_PERIOD, --start START_PERIOD\n                        Start date to get yfinance data from. Must be in\n                        'YYYY-MM-DD' format (default: )\n  -e END_PERIOD, --end END_PERIOD\n                        End date to get yfinance data from. Must be in 'YYYY-\n                        MM-DD' format (default: )\n  -lr, --log-returns    If use logarithmic or arithmetic returns to calculate\n                        returns (default: False)\n  --freq {d,w,m}\n                        Frequency used to calculate returns. Possible values\n                        are: 'd': for daily returns 'w': for weekly returns\n                        'm': for monthly returns (default: d)\n  -mn MAX_NAN, --maxnan MAX_NAN\n                        Max percentage of nan values accepted per asset to be\n                        considered in the optimization process (default: 0.05)\n  -th THRESHOLD_VALUE, --threshold THRESHOLD_VALUE\n                        Value used to replace outliers that are higher to\n                        threshold in absolute value (default: 0.3)\n  -mt NAN_FILL_METHOD, --method NAN_FILL_METHOD\n                        Method used to fill nan values in time series, by\n                        default time. Possible values are: 'linear': linear\n                        interpolation 'time': linear interpolation based on\n                        time index 'nearest': use nearest value to replace nan\n                        values 'zero': spline of zeroth order 'slinear':\n                        spline of first order 'quadratic': spline of second\n                        order 'cubic': spline of third order 'barycentric':\n                        builds a polynomial that pass for all points (default:\n                        time)\n  -rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}, --risk-measure {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}\n                        Risk measure used to optimize the portfolio. Possible\n                        values are: 'MV' : Variance 'MAD' : Mean Absolute\n                        Deviation 'MSV' : Semi Variance (Variance of negative\n                        returns) 'FLPM' : First Lower Partial Moment 'SLPM' :\n                        Second Lower Partial Moment 'CVaR' : Conditional Value\n                        at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst\n                        Realization 'ADD' : Average Drawdown of uncompounded\n                        returns 'UCI' : Ulcer Index of uncompounded returns\n                        'CDaR' : Conditional Drawdown at Risk of uncompounded\n                        returns 'EDaR' : Entropic Drawdown at Risk of\n                        uncompounded returns 'MDD' : Maximum Drawdown of\n                        uncompounded returns (default: MV)\n  -r RISK_FREE, --risk-free-rate RISK_FREE\n                        Risk-free rate of borrowing/lending. The period of the\n                        risk-free rate must be annual (default: 0.00329)\n  -a SIGNIFICANCE_LEVEL, --alpha SIGNIFICANCE_LEVEL\n                        Significance level of CVaR, EVaR, CDaR and EDaR\n                        (default: 0.05)\n  -pi, --pie            Display a pie chart for weights (default: False)\n  -hi, --hist           Display a histogram with risk measures (default:\n                        False)\n  -dd, --drawdown       Display a drawdown chart with risk measures (default:\n                        False)\n  -rc, --rc-chart       Display a risk contribution chart for assets (default:\n                        False)\n  -he, --heat           Display a heatmap of correlation matrix with\n                        dendrogram (default: False)\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Apr 26, 02:19 (\ud83e\udd8b) /portfolio/po/ $ plot -pf maxsharpe_0 -pi -hi -dd -rc -he\n")))}d.isMDXComponent=!0}}]);