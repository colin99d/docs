"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"features/portfolio/po/nco",id:"features/portfolio/po/nco",title:"nco",description:".. role:: python(code)",source:"@site/sdk/features/portfolio/po/nco.md",sourceDirName:"features/portfolio/po",slug:"/features/portfolio/po/nco",permalink:"/docs/sdk/features/portfolio/po/nco",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"minrisk",permalink:"/docs/sdk/features/portfolio/po/minrisk"},next:{title:"plot",permalink:"/docs/sdk/features/portfolio/po/plot"}},l={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.nco(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\ncodependence: str = 'pearson',\ncovariance: str = 'hist',\nobjective: str = 'minrisk',\nrisk_measure: str = 'mv',\nrisk_free_rate: float = 0.0,\nrisk_aversion: float = 1.0,\nalpha: float = 0.05,\na_sim: int = 100,\nbeta: float = None,\nb_sim: int = None,\nlinkage: str = 'single',\nk: int = None,\nmax_k: int = 10,\nbins_info: str = 'KN',\nalpha_tail: float = 0.05,\nleaf_order: bool = True,\nd_ewma: float = 0.94,\nvalue: float = 1.0,\nchart: bool = False,\n) -> Tuple\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nBuilds a hierarchical risk parity portfolio\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio tickers\ninterval : str\ninterval to look at returns from\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float, optional\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float, optional\nValue used to replace outliers that are higher to threshold.\nmethod: str, optional\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\ncodependence: str, optional\nThe codependence or similarity matrix used to build the distance\nmetric and clusters. The default is 'pearson'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'pearson': pearson correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{0.5(1-\\rho^{pearson}_{i,j})}\n  - 'spearman': spearman correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{0.5(1-\\rho^{spearman}_{i,j})}\n  - 'abs_pearson': absolute value pearson correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{(1-|\\rho^{pearson}_{i,j}|)}\n  - 'abs_spearman': absolute value spearman correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{(1-|\\rho^{spearman}_{i,j}|)}\n  - 'distance': distance correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{(1-\\rho^{distance}_{i,j})}\n  - 'mutual_info': mutual information matrix. Distance used is variation information matrix.\n  - 'tail': lower tail dependence index matrix. Dissimilarity formula:\n      .. math:: D_{i,j} = -\\log{\\lambda_{i,j}}.\n")),(0,o.kt)("p",{parentName:"li"},"  covariance: str, optional\nThe method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ledoit': use the Ledoit and Wolf Shrinkage method.\n  - 'oas': use the Oracle Approximation Shrinkage method.\n  - 'shrunk': use the basic Shrunk Covariance method.\n  - 'gl': use the basic Graphical Lasso Covariance method.\n  - 'jlogo': use the j-LoGo Covariance method. For more information see: `c-jLogo`.\n  - 'fixed': denoise using fixed method. For more information see chapter 2 of `c-MLforAM`.\n  - 'spectral': denoise using spectral method. For more information see chapter 2 of `c-MLforAM`.\n  - 'shrink': denoise using shrink method. For more information see chapter 2 of `c-MLforAM`.\n")),(0,o.kt)("p",{parentName:"li"},"  objective: str, optional\nObjective function used by the NCO model.\nThe default is 'MinRisk'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MinRisk': Minimize the selected risk measure.\n  - 'Utility': Maximize the risk averse utility function.\n  - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.\n  - 'ERC': Equally risk contribution portfolio of the selected risk measure.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_measure: str, optional\nThe risk measure used to optimize the portfolio. If model is 'NCO',\nthe risk measures available depends on the objective function.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Variance.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'VaR': Value at Risk.\n  - 'CVaR': Conditional Value at Risk.\n  - 'TG': Tail Gini.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization (Minimax).\n  - 'RG': Range of returns.\n  - 'CVRG': CVaR range of returns.\n  - 'TGRG': Tail Gini range of returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'DaR': Drawdown at Risk of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).\n  - 'ADD_Rel': Average Drawdown of compounded cumulative returns.\n  - 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.\n  - 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.\n  - 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.\n  - 'UCI_Rel': Ulcer Index of compounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns.\nUsed for 'FLPM' and 'SLPM'. The default is 0.\nrisk_aversion: float, optional\nRisk aversion factor of the 'Utility' objective function.\nThe default is 1.\nalpha: float, optional\nSignificance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.\nThe default is 0.05.\na_sim: float, optional\nNumber of CVaRs used to approximate Tail Gini of losses. The default is 100.\nbeta: float, optional\nSignificance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.\nThe default is None.\nb_sim: float, optional\nNumber of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.\nThe default is None.\nlinkage: str, optional\nLinkage method of hierarchical clustering. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>"),"__.\nThe default is 'single'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'single'.\n  - 'complete'.\n  - 'average'.\n  - 'weighted'.\n  - 'centroid'.\n  - 'median'.\n  - 'ward'.\n  - 'dbht': Direct Bubble Hierarchical Tree.\n")),(0,o.kt)("p",{parentName:"li"},"  k: int, optional\nNumber of clusters. This value is took instead of the optimal number\nof clusters calculated with the two difference gap statistic.\nThe default is None.\nmax_k: int, optional\nMax number of clusters used by the two difference gap statistic\nto find the optimal number of clusters. The default is 10.\nbins_info: str, optional\nNumber of bins used to calculate variation of information. The default\nvalue is 'KN'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'KN': Knuth's choice method. For more information see `knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>`__.\n  - 'FD': Freedman\u2013Diaconis' choice method. For more information see `freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>`__.\n  - 'SC': Scotts' choice method. For more information see `scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>`__.\n  - 'HGR': Hacine-Gharbi and Ravier' choice method.\n")),(0,o.kt)("p",{parentName:"li"},"  alpha_tail: float, optional\nSignificance level for lower tail dependence index. The default is 0.05.\nleaf_order: bool, optional\nIndicates if the cluster are ordered so that the distance between\nsuccessive leaves is minimal. The default is True.\nd: float, optional\nThe smoothing factor of ewma methods.\nThe default is 0.94.\nvalue : float, optional\nAmount to allocate to portfolio in long positions, by default 1.0\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions, by default 0.0\ntable: bool, optional\nTrue if plot table weights, by default False\nchart: bool\nFlag to display chart"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.nco(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\ncodependence: str = 'pearson',\ncovariance: str = 'hist',\nobjective: str = 'MinRisk',\nrisk_measure: str = 'mv',\nrisk_free_rate: float = 0.0,\nrisk_aversion: float = 1.0,\nalpha: float = 0.05,\na_sim: int = 100,\nbeta: float = None,\nb_sim: int = None,\nlinkage: str = 'ward',\nk: int = None,\nmax_k: int = 10,\nbins_info: str = 'KN',\nalpha_tail: float = 0.05,\nleaf_order: bool = True,\nd_ewma: float = 0.94,\nvalue: float = 1.0,\ntable: bool = False,\nchart: bool = False,\n) -> Dict\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nBuilds a hierarchical equal risk contribution portfolio\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio tickers\ninterval : str\ninterval to look at returns from\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float, optional\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float, optional\nValue used to replace outliers that are higher to threshold.\nmethod: str, optional\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\nmodel: str, optional\nThe hierarchical cluster portfolio model used for optimize the\nportfolio. The default is 'HRP'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'HRP': Hierarchical Risk Parity.\n  - 'HERC': Hierarchical Equal Risk Contribution.\n  - 'NCO': Nested Clustered Optimization.\n")),(0,o.kt)("p",{parentName:"li"},"  codependence: str, optional\nThe codependence or similarity matrix used to build the distance\nmetric and clusters. The default is 'pearson'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'pearson': pearson correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{0.5(1-\\rho^{pearson}_{i,j})}.\n  - 'spearman': spearman correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{0.5(1-\\rho^{spearman}_{i,j})}.\n  - 'abs_pearson': absolute value pearson correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{(1-|\\rho^{pearson}_{i,j}|)}.\n  - 'abs_spearman': absolute value spearman correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{(1-|\\rho^{spearman}_{i,j}|)}.\n  - 'distance': distance correlation matrix. Distance formula:\n      .. math:: D_{i,j} = \\sqrt{(1-\\rho^{distance}_{i,j})}.\n  - 'mutual_info': mutual information matrix. Distance used is variation information matrix.\n  - 'tail': lower tail dependence index matrix. Dissimilarity formula:\n      .. math:: D_{i,j} = -\\log{\\lambda_{i,j}}.\n")),(0,o.kt)("p",{parentName:"li"},"  covariance: str, optional\nThe method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ledoit': use the Ledoit and Wolf Shrinkage method.\n  - 'oas': use the Oracle Approximation Shrinkage method.\n  - 'shrunk': use the basic Shrunk Covariance method.\n  - 'gl': use the basic Graphical Lasso Covariance method.\n  - 'jlogo': use the j-LoGo Covariance method. For more information see: `c-jLogo`.\n  - 'fixed': denoise using fixed method. For more information see chapter 2 of `c-MLforAM`.\n  - 'spectral': denoise using spectral method. For more information see chapter 2 of `c-MLforAM`.\n  - 'shrink': denoise using shrink method. For more information see chapter 2 of `c-MLforAM`.\n")),(0,o.kt)("p",{parentName:"li"},"  objective: str, optional\nObjective function used by the NCO model.\nThe default is 'MinRisk'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MinRisk': Minimize the selected risk measure.\n  - 'Utility': Maximize the risk averse utility function.\n  - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.\n  - 'ERC': Equally risk contribution portfolio of the selected risk measure.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_measure: str, optional\nThe risk measure used to optimize the portfolio. If model is 'NCO',\nthe risk measures available depends on the objective function.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Variance.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'VaR': Value at Risk.\n  - 'CVaR': Conditional Value at Risk.\n  - 'TG': Tail Gini.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization (Minimax).\n  - 'RG': Range of returns.\n  - 'CVRG': CVaR range of returns.\n  - 'TGRG': Tail Gini range of returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'DaR': Drawdown at Risk of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).\n  - 'ADD_Rel': Average Drawdown of compounded cumulative returns.\n  - 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.\n  - 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.\n  - 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.\n  - 'UCI_Rel': Ulcer Index of compounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns.\nUsed for 'FLPM' and 'SLPM'. The default is 0.\nrisk_aversion: float, optional\nRisk aversion factor of the 'Utility' objective function.\nThe default is 1.\nalpha: float, optional\nSignificance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.\nThe default is 0.05.\na_sim: float, optional\nNumber of CVaRs used to approximate Tail Gini of losses. The default is 100.\nbeta: float, optional\nSignificance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.\nThe default is None.\nb_sim: float, optional\nNumber of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.\nThe default is None.\nlinkage: str, optional\nLinkage method of hierarchical clustering. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>"),"__.\nThe default is 'single'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'single'.\n  - 'complete'.\n  - 'average'.\n  - 'weighted'.\n  - 'centroid'.\n  - 'median'.\n  - 'ward'.\n  - 'dbht': Direct Bubble Hierarchical Tree.\n")),(0,o.kt)("p",{parentName:"li"},"  k: int, optional\nNumber of clusters. This value is took instead of the optimal number\nof clusters calculated with the two difference gap statistic.\nThe default is None.\nmax_k: int, optional\nMax number of clusters used by the two difference gap statistic\nto find the optimal number of clusters. The default is 10.\nbins_info: str, optional\nNumber of bins used to calculate variation of information. The default\nvalue is 'KN'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'KN': Knuth's choice method. For more information see `knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>`__.\n  - 'FD': Freedman\u2013Diaconis' choice method. For more information see `freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>`__.\n  - 'SC': Scotts' choice method. For more information see `scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>`__.\n  - 'HGR': Hacine-Gharbi and Ravier' choice method.\n")),(0,o.kt)("p",{parentName:"li"},"  alpha_tail: float, optional\nSignificance level for lower tail dependence index. The default is 0.05.\nleaf_order: bool, optional\nIndicates if the cluster are ordered so that the distance between\nsuccessive leaves is minimal. The default is True.\nd: float, optional\nThe smoothing factor of ewma methods.\nThe default is 0.94.\nvalue : float, optional\nAmount to allocate to portfolio in long positions, by default 1.0\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions, by default 0.0\ntable: bool, optional\nTrue if plot table weights, by default False\nchart: bool\nFlag to display chart"))))}d.isMDXComponent=!0}}]);