"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91012],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"herc",description:"OpenBB SDK Function"},l="herc",o={unversionedId:"functions/portfolio/po/herc",id:"functions/portfolio/po/herc",title:"herc",description:"OpenBB SDK Function",source:"@site/sdk/functions/portfolio/po/herc.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/herc",permalink:"/docs/sdk/functions/portfolio/po/herc",draft:!1,tags:[],version:"current",frontMatter:{title:"herc",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"hcp",permalink:"/docs/sdk/functions/portfolio/po/hcp"},next:{title:"hrp",permalink:"/docs/sdk/functions/portfolio/po/hrp"}},p={},m=[{value:"portfolio_optimization_optimizer_model.get_herc",id:"portfolio_optimization_optimizer_modelget_herc",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"portfolio_optimization_optimizer_view.display_herc",id:"portfolio_optimization_optimizer_viewdisplay_herc",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],s={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"herc"},"herc"),(0,r.kt)("h2",{id:"portfolio_optimization_optimizer_modelget_herc"},"portfolio_optimization_optimizer_model.get_herc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def herc(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, codependence: str, covariance: str, objective: str, risk_measure: str, risk_free_rate: float, risk_aversion: float, alpha: float, a_sim: int, beta: float, b_sim: int, linkage: str, k: int, max_k: int, bins_info: str, alpha_tail: float, leaf_order: bool, d_ewma: float, value: float) -> None:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L2473"},"Source Code")),(0,r.kt)("p",null,"Description: Builds a hierarchical risk parity portfolio"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weekday."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'D' for daily returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'W' for weekly returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'M' for monthly returns. | value | True |\n| maxnan | float | Max percentage of nan values accepted per asset to be included in\nreturns. | None | True |\n| threshold | float | Value used to replace outliers that are higher to threshold. | None | True |\n| method | str | Method used to fill nan values. Default value is 'time'. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__. | value | True |\n| codependence | str | The codependence or similarity matrix used to build the distance\nmetric and clusters. The default is 'pearson'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'pearson': pearson correlation matrix. Distance formula:\n.. math:: D",(0,r.kt)("em",{parentName:"p"},"{i,j} = \\sqrt{0.5(1-\\rho^{pearson}"),"{i,j})}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'spearman': spearman correlation matrix. Distance formula:\n.. math:: D",(0,r.kt)("em",{parentName:"p"},"{i,j} = \\sqrt{0.5(1-\\rho^{spearman}"),"{i,j})}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'abs",(0,r.kt)("em",{parentName:"p"},"pearson': absolute value pearson correlation matrix. Distance formula:\n.. math:: D"),"{i,j} = \\sqrt{(1-|\\rho^{pearson}_{i,j}|)}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'abs",(0,r.kt)("em",{parentName:"p"},"spearman': absolute value spearman correlation matrix. Distance formula:\n.. math:: D"),"{i,j} = \\sqrt{(1-|\\rho^{spearman}_{i,j}|)}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'distance': distance correlation matrix. Distance formula:\n.. math:: D",(0,r.kt)("em",{parentName:"p"},"{i,j} = \\sqrt{(1-\\rho^{distance}"),"{i,j})}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'mutual_info': mutual information matrix. Distance used is variation information matrix.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'tail': lower tail dependence index matrix. Dissimilarity formula:\n.. math:: D",(0,r.kt)("em",{parentName:"p"},"{i,j} = -\\log{\\lambda"),"{i,j}}. | is | True |\n| covariance | str | The method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'hist': use historical estimates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ledoit': use the Ledoit and Wolf Shrinkage method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'oas': use the Oracle Approximation Shrinkage method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'shrunk': use the basic Shrunk Covariance method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'gl': use the basic Graphical Lasso Covariance method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"p"},"c-jLogo"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"c-MLforAM"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"c-MLforAM"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"c-MLforAM"),". | is | True |\n| objective | str | Objective function used by the NCO model.\nThe default is 'MinRisk'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MinRisk': Minimize the selected risk measure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'Utility': Maximize the risk averse utility function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ERC': Equally risk contribution portfolio of the selected risk measure. | is | True |\n| risk_measure | str | The risk measure used to optimize the portfolio. If model is 'NCO',\nthe risk measures available depends on the objective function.\nThe default is 'MV'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MV': Variance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MAD': Mean Absolute Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MSV': Semi Standard Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'FLPM': First Lower Partial Moment (Omega Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'SLPM': Second Lower Partial Moment (Sortino Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'VaR': Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CVaR': Conditional Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'TG': Tail Gini.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EVaR': Entropic Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'WR': Worst Realization (Minimax).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'RG': Range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CVRG': CVaR range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'TGRG': Tail Gini range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ADD': Average Drawdown of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'DaR': Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'UCI': Ulcer Index of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ADD_Rel': Average Drawdown of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'DaR_Rel': Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'UCI_Rel': Ulcer Index of compounded cumulative returns. | is | True |\n| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns.\nUsed for 'FLPM' and 'SLPM'. The default is 0. | 0 | True |\n| risk_aversion | float | Risk aversion factor of the 'Utility' objective function.\nThe default is 1. | 1 | True |\n| alpha | float | Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.\nThe default is 0.05. | 0.05 | True |\n| a_sim | float | Number of CVaRs used to approximate Tail Gini of losses. The default is 100. | 100 | True |\n| beta | float | Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.\nThe default is None. | None | True |\n| b_sim | float | Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.\nThe default is None. | None | True |\n| linkage | str | Linkage method of hierarchical clustering. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>"),"__.\nThe default is 'single'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'single'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'complete'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'average'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'weighted'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'centroid'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'median'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ward'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'dbht': Direct Bubble Hierarchical Tree. | is | True |\n| k | int | Number of clusters. This value is took instead of the optimal number\nof clusters calculated with the two difference gap statistic.\nThe default is None. | None | True |\n| max_k | int | Max number of clusters used by the two difference gap statistic\nto find the optimal number of clusters. The default is 10. | 10 | True |\n| bins_info | str | Number of bins used to calculate variation of information. The default\nvalue is 'KN'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'KN': Knuth's choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'FD': Freedman\u2013Diaconis' choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'SC': Scotts' choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'HGR': Hacine-Gharbi and Ravier' choice method. | value | True |\n| alpha_tail | float | Significance level for lower tail dependence index. The default is 0.05. | 0.05 | True |\n| leaf_order | bool | Indicates if the cluster are ordered so that the distance between\nsuccessive leaves is minimal. The default is True. | True | True |\n| d | float | The smoothing factor of ewma methods.\nThe default is 0.94. | 0.94 | True |\n| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |\n| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | 0.0 | True |\n| table | bool | True if plot table weights, by default False | False | True |"))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h1",{id:"view"},"VIEW"),(0,r.kt)("h1",{id:"herc-1"},"herc"),(0,r.kt)("h2",{id:"portfolio_optimization_optimizer_viewdisplay_herc"},"portfolio_optimization_optimizer_view.display_herc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def herc(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, codependence: str, covariance: str, risk_measure: str, risk_free_rate: float, risk_aversion: float, alpha: float, a_sim: int, beta: float, b_sim: int, linkage: str, k: int, max_k: int, bins_info: str, alpha_tail: float, leaf_order: bool, d_ewma: float, value: float, table: bool) -> None:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L3112"},"Source Code")),(0,r.kt)("p",null,"Description: Builds a hierarchical equal risk contribution portfolio"),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weekday."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'D' for daily returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'W' for weekly returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'M' for monthly returns. | value | True |\n| maxnan | float | Max percentage of nan values accepted per asset to be included in\nreturns. | None | True |\n| threshold | float | Value used to replace outliers that are higher to threshold. | None | True |\n| method | str | Method used to fill nan values. Default value is 'time'. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__. | value | True |\n| model | str | The hierarchical cluster portfolio model used for optimize the\nportfolio. The default is 'HRP'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'HRP': Hierarchical Risk Parity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'HERC': Hierarchical Equal Risk Contribution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'NCO': Nested Clustered Optimization. | is | True |\n| codependence | str | The codependence or similarity matrix used to build the distance\nmetric and clusters. The default is 'pearson'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'pearson': pearson correlation matrix. Distance formula:\n.. math:: D",(0,r.kt)("em",{parentName:"p"},"{i,j} = \\sqrt{0.5(1-\\rho^{pearson}"),"{i,j})}.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'spearman': spearman correlation matrix. Distance formula:\n.. math:: D",(0,r.kt)("em",{parentName:"p"},"{i,j} = \\sqrt{0.5(1-\\rho^{spearman}"),"{i,j})}.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'abs",(0,r.kt)("em",{parentName:"p"},"pearson': absolute value pearson correlation matrix. Distance formula:\n.. math:: D"),"{i,j} = \\sqrt{(1-|\\rho^{pearson}_{i,j}|)}.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'abs",(0,r.kt)("em",{parentName:"p"},"spearman': absolute value spearman correlation matrix. Distance formula:\n.. math:: D"),"{i,j} = \\sqrt{(1-|\\rho^{spearman}_{i,j}|)}.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'distance': distance correlation matrix. Distance formula:\n.. math:: D",(0,r.kt)("em",{parentName:"p"},"{i,j} = \\sqrt{(1-\\rho^{distance}"),"{i,j})}.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'mutual_info': mutual information matrix. Distance used is variation information matrix.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'tail': lower tail dependence index matrix. Dissimilarity formula:\n.. math:: D",(0,r.kt)("em",{parentName:"p"},"{i,j} = -\\log{\\lambda"),"{i,j}}. | is | True |\n| covariance | str | The method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'hist': use historical estimates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ledoit': use the Ledoit and Wolf Shrinkage method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'oas': use the Oracle Approximation Shrinkage method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'shrunk': use the basic Shrunk Covariance method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'gl': use the basic Graphical Lasso Covariance method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"p"},"c-jLogo"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"c-MLforAM"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"c-MLforAM"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"c-MLforAM"),". | is | True |\n| risk_measure | str | The risk measure used to optimize the portfolio. If model is 'NCO',\nthe risk measures available depends on the objective function.\nThe default is 'MV'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MV': Variance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MAD': Mean Absolute Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MSV': Semi Standard Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'FLPM': First Lower Partial Moment (Omega Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'SLPM': Second Lower Partial Moment (Sortino Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'VaR': Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CVaR': Conditional Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'TG': Tail Gini.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EVaR': Entropic Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'WR': Worst Realization (Minimax).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'RG': Range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CVRG': CVaR range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'TGRG': Tail Gini range of returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ADD': Average Drawdown of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'DaR': Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'UCI': Ulcer Index of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ADD_Rel': Average Drawdown of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'DaR_Rel': Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'UCI_Rel': Ulcer Index of compounded cumulative returns. | is | True |\n| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns.\nUsed for 'FLPM' and 'SLPM'. The default is 0. | 0 | True |\n| risk_aversion | float | Risk aversion factor of the 'Utility' objective function.\nThe default is 1. | 1 | True |\n| alpha | float | Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.\nThe default is 0.05. | 0.05 | True |\n| a_sim | float | Number of CVaRs used to approximate Tail Gini of losses. The default is 100. | 100 | True |\n| beta | float | Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.\nThe default is None. | None | True |\n| b_sim | float | Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.\nThe default is None. | None | True |\n| linkage | str | Linkage method of hierarchical clustering. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>"),"__.\nThe default is 'single'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'single'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'complete'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'average'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'weighted'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'centroid'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'median'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ward'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'dbht': Direct Bubble Hierarchical Tree. | is | True |\n| k | int | Number of clusters. This value is took instead of the optimal number\nof clusters calculated with the two difference gap statistic.\nThe default is None. | None | True |\n| max_k | int | Max number of clusters used by the two difference gap statistic\nto find the optimal number of clusters. The default is 10. | 10 | True |\n| bins_info | str | Number of bins used to calculate variation of information. The default\nvalue is 'KN'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'KN': Knuth's choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'FD': Freedman\u2013Diaconis' choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'SC': Scotts' choice method. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'HGR': Hacine-Gharbi and Ravier' choice method. | value | True |\n| alpha_tail | float | Significance level for lower tail dependence index. The default is 0.05. | 0.05 | True |\n| leaf_order | bool | Indicates if the cluster are ordered so that the distance between\nsuccessive leaves is minimal. The default is True. | True | True |\n| d | float | The smoothing factor of ewma methods.\nThe default is 0.94. | 0.94 | True |\n| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |\n| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | 0.0 | True |\n| table | bool | True if plot table weights, by default False | False | True |"))),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"examples-1"},"Examples"))}u.isMDXComponent=!0}}]);