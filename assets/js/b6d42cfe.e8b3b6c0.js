"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59086],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,N=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const o={title:"maxsharpe",description:"OpenBB SDK Function"},p="maxsharpe",s={unversionedId:"functions/portfolio/po/maxsharpe",id:"functions/portfolio/po/maxsharpe",title:"maxsharpe",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/po/maxsharpe.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/maxsharpe",permalink:"/sdk/functions/portfolio/po/maxsharpe",draft:!1,tags:[],version:"current",frontMatter:{title:"maxsharpe",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"maxret",permalink:"/sdk/functions/portfolio/po/maxret"},next:{title:"maxutil",permalink:"/sdk/functions/portfolio/po/maxutil"}},u={},m=[{value:"portfolio_optimization_optimizer_model.get_max_sharpe",id:"portfolio_optimization_optimizer_modelget_max_sharpe",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"portfolio_optimization_optimizer_view.display_max_sharpe",id:"portfolio_optimization_optimizer_viewdisplay_max_sharpe",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],d={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maxsharpe"},"maxsharpe"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",{id:"portfolio_optimization_optimizer_modelget_max_sharpe"},"portfolio_optimization_optimizer_model.get_max_sharpe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py'",title:"'openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py'"},"def get_max_sharpe(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, risk_measure: str, risk_free_rate: float, risk_aversion: float, alpha: float, target_return: float, target_risk: float, mean: str, covariance: str, d_ewma: float, value: float, value_short: float) -> None:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L518"},"Source Code")),(0,r.kt)("p",null,"Description: Builds a maximal return/risk ratio portfolio"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weekday."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'D' for daily returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'W' for weekly returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'M' for monthly returns. | value | True |\n| maxnan | float | Max percentage of nan values accepted per asset to be included in\nreturns. | None | True |\n| threshold | float | Value used to replace outliers that are higher to threshold. | None | True |\n| method | str | Method used to fill nan values. Default value is 'time'. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__. | value | False |\n| risk_measure | str | The risk measure used to optimize the portfolio.\nThe default is 'MV'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MV': Standard Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MAD': Mean Absolute Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MSV': Semi Standard Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'FLPM': First Lower Partial Moment (Omega Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'SLPM': Second Lower Partial Moment (Sortino Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CVaR': Conditional Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EVaR': Entropic Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'WR': Worst Realization.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ADD': Average Drawdown of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'UCI': Ulcer Index of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MDD': Maximum Drawdown of uncompounded cumulative returns. | is | True |\n| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0. | 0 | True |\n| alpha | float | Significance level of CVaR, EVaR, CDaR and EDaR | None | True |\n| target_return | float | Constraint on minimum level of portfolio's return. | None | True |\n| target_risk | float | Constraint on maximum level of portfolio's risk. | None | True |\n| mean | str | The method used to estimate the expected returns.\nThe default value is 'hist'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'hist': use historical estimates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__. | value | True |\n| covariance | str | The method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'hist': use historical estimates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ledoit': use the Ledoit and Wolf Shrinkage method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'oas': use the Oracle Approximation Shrinkage method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'shrunk': use the basic Shrunk Covariance method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'gl': use the basic Graphical Lasso Covariance method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"p"},"a-jLogo"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"a-MLforAM"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"a-MLforAM"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"a-MLforAM"),". | is | True |\n| d_ewma | float | The smoothing factor of ewma methods.\nThe default is 0.94. | 0.94 | True |\n| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |\n| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | 0.0 | True |"))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary of portfolio weights and DataFrame of stock returns")))),(0,r.kt)("h2",{id:"examples"},"Examples")),(0,r.kt)(i.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("h2",{id:"portfolio_optimization_optimizer_viewdisplay_max_sharpe"},"portfolio_optimization_optimizer_view.display_max_sharpe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py'",title:"'openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py'"},"def display_max_sharpe(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, risk_measure: str, risk_free_rate: float, risk_aversion: float, alpha: float, target_return: float, target_risk: float, mean: str, covariance: str, d_ewma: float, value: float, value_short: float, table: bool) -> None:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L1032"},"Source Code")),(0,r.kt)("p",null,"Description: Builds a maximal return/risk ratio portfolio"),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weekday."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'D' for daily returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'W' for weekly returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'M' for monthly returns. | value | True |\n| maxnan | float | Max percentage of nan values accepted per asset to be included in\nreturns. | None | True |\n| threshold | float | Value used to replace outliers that are higher to threshold. | None | True |\n| method | str | Method used to fill nan values. Default value is 'time'. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__. | value | False |\n| risk_measure | str | The risk measure used to optimize the portfolio.\nThe default is 'MV'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MV': Standard Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MAD': Mean Absolute Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MSV': Semi Standard Deviation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'FLPM': First Lower Partial Moment (Omega Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'SLPM': Second Lower Partial Moment (Sortino Ratio).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CVaR': Conditional Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EVaR': Entropic Value at Risk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'WR': Worst Realization.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ADD': Average Drawdown of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'UCI': Ulcer Index of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'MDD': Maximum Drawdown of uncompounded cumulative returns. | is | True |\n| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0. | 0 | True |\n| risk_aversion | float | Risk aversion factor of the 'Utility' objective function.\nThe default is 1. | 1 | True |\n| alpha | float | Significance level of CVaR, EVaR, CDaR and EDaR | None | True |\n| target_return | float | Constraint on minimum level of portfolio's return. | None | True |\n| target_risk | float | Constraint on maximum level of portfolio's risk. | None | True |\n| mean | str | The method used to estimate the expected returns.\nThe default value is 'hist'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'hist': use historical estimates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__. | value | True |\n| covariance | str | The method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'hist': use historical estimates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"p"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),"__.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'ledoit': use the Ledoit and Wolf Shrinkage method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'oas': use the Oracle Approximation Shrinkage method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'shrunk': use the basic Shrunk Covariance method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'gl': use the basic Graphical Lasso Covariance method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"p"},"a-jLogo"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"a-MLforAM"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"a-MLforAM"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"a-MLforAM"),". | is | True |\n| d_ewma | float | The smoothing factor of ewma methods.\nThe default is 0.94. | 0.94 | True |\n| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |\n| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | 0.0 | True |\n| table | bool | True if plot table weights, by default False | False | True |"))),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"examples-1"},"Examples"))))}k.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),o=a(67392),p=a(7094),s=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:k,groupId:N,className:f}=e,c=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=k??c.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=c.find((e=>e.props.default)))?void 0:t.props.value)??c[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:_}=(0,p.U)(),[w,y]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=N){const e=b[N];null!=e&&e!==w&&h.some((t=>t.value===e))&&y(e)}const D=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==w&&(x(t),y(n),null!=N&&_(N,String(n)))},M=e=>{var t;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:M,onClick:D},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(c.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},c.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);