"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,c=m["".concat(l,".").concat(f)]||m[f]||d[f]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"functions/portfolio/po/maxret",id:"functions/portfolio/po/maxret",title:"maxret",description:".. role:: python(code)",source:"@site/sdk/functions/portfolio/po/maxret.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/maxret",permalink:"/docs/sdk/functions/portfolio/po/maxret",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maxdiv",permalink:"/docs/sdk/functions/portfolio/po/maxdiv"},next:{title:"maxsharpe",permalink:"/docs/sdk/functions/portfolio/po/maxsharpe"}},l={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.maxret(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\nrisk_measure: str = 'MV',\nrisk_free_rate: float = 0,\nrisk_aversion: float = 1,\nalpha: float = 0.05,\ntarget_return: float = -1,\ntarget_risk: float = -1,\nmean: str = 'hist',\ncovariance: str = 'hist',\nd_ewma: float = 0.94,\nvalue: float = 1.0,\nvalue_short: float = 0.0,\nchart: bool = False,\n) -> Tuple\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nBuilds a maximal return/risk ratio portfolio\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio tickers\ninterval : str, optional\ninterval to look at returns from\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float, optional\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float, optional\nValue used to replace outliers that are higher to threshold.\nmethod: str\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\nrisk_measure: str, optional\nThe risk measure used to optimize the portfolio.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Standard Deviation.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'CVaR': Conditional Value at Risk.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization.\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.\nalpha: float, optional\nSignificance level of CVaR, EVaR, CDaR and EDaR\ntarget_return: float, optional\nConstraint on minimum level of portfolio's return.\ntarget_risk: float, optional\nConstraint on maximum level of portfolio's risk.\nmean: str, optional\nThe method used to estimate the expected returns.\nThe default value is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n")),(0,o.kt)("p",{parentName:"li"},"  covariance: str, optional\nThe method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ledoit': use the Ledoit and Wolf Shrinkage method.\n  - 'oas': use the Oracle Approximation Shrinkage method.\n  - 'shrunk': use the basic Shrunk Covariance method.\n  - 'gl': use the basic Graphical Lasso Covariance method.\n  - 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.\n  - 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.\n  - 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.\n  - 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`.\n")),(0,o.kt)("p",{parentName:"li"},"  d_ewma: float, optional\nThe smoothing factor of ewma methods.\nThe default is 0.94.\nvalue : float, optional\nAmount to allocate to portfolio in long positions, by default 1.0\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions, by default 0.0\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  Tuple\nDictionary of portfolio weights and DataFrame of stock returns"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.maxret(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\nrisk_measure: str = 'MV',\nrisk_free_rate: float = 0,\nrisk_aversion: float = 1,\nalpha: float = 0.05,\ntarget_return: float = -1,\ntarget_risk: float = -1,\nmean: str = 'hist',\ncovariance: str = 'hist',\nd_ewma: float = 0.94,\nvalue: float = 1.0,\nvalue_short: float = 0.0,\ntable: bool = False,\nchart: bool = False,\n) -> Dict\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nBuilds a maximal return portfolio\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio tickers\ninterval : str, optional\ninterval to look at returns from\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float, optional\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float, optional\nValue used to replace outliers that are higher to threshold.\nmethod: str\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\nrisk_measure: str, optional\nThe risk measure used to optimize the portfolio.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Standard Deviation.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'CVaR': Conditional Value at Risk.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization.\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.\nrisk_aversion: float, optional\nRisk aversion factor of the 'Utility' objective function.\nThe default is 1.\nalpha: float, optional\nSignificance level of CVaR, EVaR, CDaR and EDaR\ntarget_return: float, optional\nConstraint on minimum level of portfolio's return.\ntarget_risk: float, optional\nConstraint on maximum level of portfolio's risk.\nmean: str, optional\nThe method used to estimate the expected returns.\nThe default value is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n")),(0,o.kt)("p",{parentName:"li"},"  covariance: str, optional\nThe method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ledoit': use the Ledoit and Wolf Shrinkage method.\n  - 'oas': use the Oracle Approximation Shrinkage method.\n  - 'shrunk': use the basic Shrunk Covariance method.\n  - 'gl': use the basic Graphical Lasso Covariance method.\n  - 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.\n  - 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.\n  - 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.\n  - 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`.\n")),(0,o.kt)("p",{parentName:"li"},"  d_ewma: float, optional\nThe smoothing factor of ewma methods.\nThe default is 0.94.\nvalue : float, optional\nAmount to allocate to portfolio in long positions, by default 1.0\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions, by default 0.0\ntable: bool, optional\nTrue if plot table weights, by default False\nchart: bool\nFlag to display chart"))))}d.isMDXComponent=!0}}]);