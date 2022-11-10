"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},l=void 0,i={unversionedId:"features/portfolio/po/maxdecorr",id:"features/portfolio/po/maxdecorr",title:"maxdecorr",description:".. role:: python(code)",source:"@site/terminal/features/portfolio/po/maxdecorr.md",sourceDirName:"features/portfolio/po",slug:"/features/portfolio/po/maxdecorr",permalink:"/docs/terminal/features/portfolio/po/maxdecorr",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/po/maxdecorr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"load_bl_views",permalink:"/docs/terminal/features/portfolio/po/load_bl_views"},next:{title:"maxdiv",permalink:"/docs/terminal/features/portfolio/po/maxdiv"}},s={},p=[],u={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.maxdecorr(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\ncovariance: str = 'hist',\nd_ewma: float = 0.94,\nvalue: float = 1.0,\nvalue_short: float = 0,\nchart: bool = False,\n) -> Tuple\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nBuilds a maximal decorrelation portfolio\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio stocks\ninterval : str, optional\ninterval to get stock data, by default \"3mo\"\nstart_date: str\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float\nValue used to replace outliers that are higher to threshold.\nmethod: str\nMethod used to fill nan values. Default value is 'time'. For more information see s",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\ncovariance: str, optional\nThe method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ledoit': use the Ledoit and Wolf Shrinkage method.\n  - 'oas': use the Oracle Approximation Shrinkage method.\n  - 'shrunk': use the basic Shrunk Covariance method.\n  - 'gl': use the basic Graphical Lasso Covariance method.\n  - 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.\n  - 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.\n  - 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.\n  - 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`.\n")),(0,o.kt)("p",{parentName:"li"},"  d_ewma: float, optional\nThe smoothing factor of ewma methods.\nThe default is 0.94.\nvalue : float, optional\nAmount of money to allocate. The default is 1.\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions. The default is 0.\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  Tuple\nDictionary of portfolio weights and DataFrame of stock returns"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.maxdecorr(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\ncovariance: str = 'hist',\nd_ewma: float = 0.94,\nvalue: float = 1.0,\nvalue_short: float = 0.0,\ntable: bool = False,\nchart: bool = False,\n) -> Dict\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nBuilds a maximal decorrelation portfolio\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio tickers\ninterval : str, optional\ninterval to look at returns from\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float, optional\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float, optional\nValue used to replace outliers that are higher to threshold.\nmethod: str\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\ncovariance: str, optional\nThe method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ledoit': use the Ledoit and Wolf Shrinkage method.\n  - 'oas': use the Oracle Approximation Shrinkage method.\n  - 'shrunk': use the basic Shrunk Covariance method.\n  - 'gl': use the basic Graphical Lasso Covariance method.\n  - 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.\n  - 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.\n  - 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.\n  - 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`.\n")),(0,o.kt)("p",{parentName:"li"},"  d_ewma: float, optional\nThe smoothing factor of ewma methods.\nThe default is 0.94.\nvalue : float, optional\nAmount to allocate to portfolio in long positions, by default 1.0\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions, by default 0.0\ntable: bool, optional\nTrue if plot table weights, by default False\nchart: bool\nFlag to display chart"))))}d.isMDXComponent=!0}}]);