"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={},l=void 0,s={unversionedId:"functions/econometrics/root",id:"functions/econometrics/root",title:"root",description:".. role:: python(code)",source:"@site/sdk/functions/econometrics/root.md",sourceDirName:"functions/econometrics",slug:"/functions/econometrics/root",permalink:"/docs/sdk/functions/econometrics/root",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"re",permalink:"/docs/sdk/functions/econometrics/re"},next:{title:"index",permalink:"/docs/sdk/functions/economy/"}},c={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\neconometrics.root(\ndata: pandas.core.series.Series,\nfuller_reg: str = 'c',\nkpss_reg: str = 'c',\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nCalculate test statistics for unit roots\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  data : pd.Series\nSeries or column of DataFrame of target variable\nfuller_reg : str\nType of regression of ADF test\nkpss_reg : str\nType of regression for KPSS test\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataframe with results of ADF test and KPSS test"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\neconometrics.root(\ndata: pandas.core.series.Series,\ndataset: str = '',\ncolumn: str = '',\nfuller_reg: str = 'c',\nkpss_reg: str = 'c',\nexport: str = '',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nDetermine the normality of a timeseries.\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  data : pd.Series\nSeries of target variable\ndataset: str\nName of the dataset\ncolumn: str\nName of the column\nfuller_reg : str\nType of regression of ADF test. Choose c, ct, ctt, or nc\nkpss_reg : str\nType of regression for KPSS test. Choose c or ct\nexport: str\nFormat to export data.\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);