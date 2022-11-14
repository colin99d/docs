"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"features/portfolio/po/relriskparity/relriskparity",id:"features/portfolio/po/relriskparity/relriskparity",title:"relriskparity",description:"A relaxed risk parity optimization model controls the balance of risk parity violation against the total portfolio performance. Risk parity has been criticized as being overly conservative and it is improved by re-introducing the asset expected returns into the model and permitting the portfolio to violate the risk parity condition. The paper by Gambeta & Kwon (source) proposes the incorporation of an explicit target return goal with an intuitive target return approach into a second-order-cone model of a risk parity optimization. When the target return is greater than risk parity return, a violation to risk parity allocations occurs that is controlled using a computational construct to obtain near-risk parity portfolios to retain as much risk parity-like traits as possible. This model is used to demonstrate empirically that higher returns can be achieved than risk parity without the risk contributions deviating dramatically from the risk parity allocations. Furthermore, this study reveals that the relaxed risk parity model exhibits advantageous traits of robustness to expected returns, which should not deter the use of expected returns in risk parity model.",source:"@site/content/terminal/features/portfolio/po/relriskparity/relriskparity.md",sourceDirName:"features/portfolio/po/relriskparity",slug:"/features/portfolio/po/relriskparity/",permalink:"/docs/terminal/features/portfolio/po/relriskparity/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/portfolio/po/relriskparity/relriskparity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"property",permalink:"/docs/terminal/features/portfolio/po/property/"},next:{title:"riskparity",permalink:"/docs/terminal/features/portfolio/po/riskparity/"}},l={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: relriskparity [-p HISTORIC_PERIOD] [-s START_PERIOD] [-e END_PERIOD]\n                     [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE]\n                     [-mt NAN_FILL_METHOD] [-ve {A,B,C}]\n                     [-rc RISK_CONTRIBUTION] [-pf PENAL_FACTOR]\n                     [-tr TARGET_RETURN] [-de SMOOTHING_FACTOR_EWMA]\n                     [-v LONG_ALLOCATION] [--name NAME] [-h]\n")),(0,a.kt)("p",null,"A relaxed risk parity optimization model controls the balance of risk parity violation against the total portfolio performance. Risk parity has been criticized as being overly conservative and it is improved by re-introducing the asset expected returns into the model and permitting the portfolio to violate the risk parity condition. The paper by Gambeta & Kwon (",(0,a.kt)("a",{parentName:"p",href:"https://www.mdpi.com/1911-8074/13/10/237/htm"},"source"),") proposes the incorporation of an explicit target return goal with an intuitive target return approach into a second-order-cone model of a risk parity optimization. When the target return is greater than risk parity return, a violation to risk parity allocations occurs that is controlled using a computational construct to obtain near-risk parity portfolios to retain as much risk parity-like traits as possible. This model is used to demonstrate empirically that higher returns can be achieved than risk parity without the risk contributions deviating dramatically from the risk parity allocations. Furthermore, this study reveals that the relaxed risk parity model exhibits advantageous traits of robustness to expected returns, which should not deter the use of expected returns in risk parity model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -p HISTORIC_PERIOD, --period HISTORIC_PERIOD\n                        Period to get yfinance data from. Possible frequency\n                        strings are: 'd': means days, for example '252d' means\n                        252 days 'w': means weeks, for example '52w' means 52\n                        weeks 'mo': means months, for example '12mo' means 12\n                        months 'y': means years, for example '1y' means 1 year\n                        'ytd': downloads data from beginning of year to today\n                        'max': downloads all data available for each asset\n                        (default: 3y)\n  -s START_PERIOD, --start START_PERIOD\n                        Start date to get yfinance data from. Must be in\n                        'YYYY-MM-DD' format (default: )\n  -e END_PERIOD, --end END_PERIOD\n                        End date to get yfinance data from. Must be in 'YYYY-\n                        MM-DD' format (default: )\n  -lr, --log-returns    If use logarithmic or arithmetic returns to calculate\n                        returns (default: False)\n  --freq {d,w,m}\n                        Frequency used to calculate returns. Possible values\n                        are: 'd': for daily returns 'w': for weekly returns\n                        'm': for monthly returns (default: d)\n  -mn MAX_NAN, --maxnan MAX_NAN\n                        Max percentage of nan values accepted per asset to be\n                        considered in the optimization process (default: 0.05)\n  -th THRESHOLD_VALUE, --threshold THRESHOLD_VALUE\n                        Value used to replace outliers that are higher to\n                        threshold in absolute value (default: 0.3)\n  -mt NAN_FILL_METHOD, --method NAN_FILL_METHOD\n                        Method used to fill nan values in time series, by\n                        default time. Possible values are: 'linear': linear\n                        interpolation 'time': linear interpolation based on\n                        time index 'nearest': use nearest value to replace nan\n                        values 'zero': spline of zeroth order 'slinear':\n                        spline of first order 'quadratic': spline of second\n                        order 'cubic': spline of third order 'barycentric':\n                        builds a polynomial that pass for all points (default:\n                        time)\n  -ve {A,B,C}, --version {A,B,C}\n                        version of relaxed risk parity model: Possible values\n                        are: 'A': risk parity without regularization and\n                        penalization constraints 'B': with regularization\n                        constraint but without penalization constraint 'C':\n                        with regularization and penalization constraints\n                        (default: A)\n  -rc RISK_CONTRIBUTION, --risk-cont RISK_CONTRIBUTION\n                        Vector of risk contribution constraints (default:\n                        None)\n  -pf PENAL_FACTOR, --penal-factor PENAL_FACTOR\n                        The penalization factor of penalization constraints.\n                        Only used with version 'C'. (default: 1)\n  -tr TARGET_RETURN, --target-return TARGET_RETURN\n                        Constraint on minimum level of portfolio's return\n                        (default: -1)\n  -de SMOOTHING_FACTOR_EWMA, --d-ewma SMOOTHING_FACTOR_EWMA\n                        Smoothing factor for ewma estimators (default: 0.94)\n  -v LONG_ALLOCATION, --value LONG_ALLOCATION\n                        Amount to allocate to portfolio (default: 1)\n  --name NAME           Save portfolio with personalized or default name\n                        (default: RRP_0)\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Apr 05, 14:08 (\ud83e\udd8b) /portfolio/po/ $ relriskparity\n\n [3 Years] Relaxed risk parity portfolio based on least squares approach\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 13.42 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 16.51 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502 10.18 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502 12.83 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502 14.36 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 24.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502  8.68 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 28.99%\nAnnual (by \u221a252) volatility: 26.60%\nSharpe ratio: 1.0899\n")))}c.isMDXComponent=!0}}]);