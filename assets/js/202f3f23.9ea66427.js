"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(s,".").concat(c)]||d[c]||f[c]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},l=void 0,i={unversionedId:"features/portfolio/po/ef",id:"features/portfolio/po/ef",title:"ef",description:".. role:: python(code)",source:"@site/sdk/features/portfolio/po/ef.md",sourceDirName:"features/portfolio/po",slug:"/features/portfolio/po/ef",permalink:"/docs/sdk/features/portfolio/po/ef",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"blacklitterman",permalink:"/docs/sdk/features/portfolio/po/blacklitterman"},next:{title:"equal",permalink:"/docs/sdk/features/portfolio/po/equal"}},s={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.ef(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\nrisk_measure: str = 'MV',\nrisk_free_rate: float = 0,\nalpha: float = 0.05,\nvalue: float = 1.0,\nvalue_short: float = 0.0,\nn_portfolios: int = 100,\nseed: int = 123,\nchart: bool = False,\n) -> Tuple\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nGet efficient frontier\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio tickers\ninterval : str, optional\ninterval to look at returns from\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float, optional\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float, optional\nValue used to replace outliers that are higher to threshold.\nmethod: str\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\nrisk_measure: str, optional\nThe risk measure used to optimize the portfolio.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Standard Deviation.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'CVaR': Conditional Value at Risk.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization.\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.\nalpha: float, optional\nSignificance level of CVaR, EVaR, CDaR and EDaR\nThe default is 0.05.\nvalue : float, optional\nAmount to allocate to portfolio in long positions, by default 1.0\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions, by default 0.0\nn_portfolios: int, optional\n\"Number of portfolios to simulate. The default value is 100.\nseed: int, optional\nSeed used to generate random portfolios. The default value is 123.\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  Tuple\nParameters to create efficient frontier: frontier, mu, cov, stock_returns, weights, X1, Y1, port"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.ef(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\nrisk_measure: str = 'MV',\nrisk_free_rate: float = 0,\nalpha: float = 0.05,\nvalue: float = 1.0,\nvalue_short: float = 0.0,\nn_portfolios: int = 100,\nseed: int = 123,\ntangency: bool = False,\nplot_tickers: bool = True,\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nDisplay efficient frontier\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio tickers\ninterval : str, optional\ninterval to look at returns from\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float, optional\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float, optional\nValue used to replace outliers that are higher to threshold.\nmethod: str\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\nrisk_measure: str, optional\nThe risk measure used to optimize the portfolio.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Standard Deviation.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'CVaR': Conditional Value at Risk.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization.\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.\nalpha: float, optional\nSignificance level of CVaR, EVaR, CDaR and EDaR\nThe default is 0.05.\nvalue : float, optional\nAmount to allocate to portfolio in long positions, by default 1.0\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions, by default 0.0\nn_portfolios: int, optional\n\"Number of portfolios to simulate. The default value is 100.\nseed: int, optional\nSeed used to generate random portfolios. The default value is 123.\ntangency: bool, optional\nAdds the optimal line with the risk-free asset.\nexternal_axes: Optional[List","[plt.Axes]","]\nOptional axes to plot data on\nplot_tickers: bool\nWhether to plot the tickers for the assets\nchart: bool\nFlag to display chart"))))}f.isMDXComponent=!0}}]);