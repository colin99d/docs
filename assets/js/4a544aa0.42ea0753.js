"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,s={unversionedId:"functions/economy/macro",id:"functions/economy/macro",title:"macro",description:".. role:: python(code)",source:"@site/sdk/functions/economy/macro.md",sourceDirName:"functions/economy",slug:"/functions/economy/macro",permalink:"/docs/sdk/functions/economy/macro",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inf",permalink:"/docs/sdk/functions/economy/inf"},next:{title:"macro_countries",permalink:"/docs/sdk/functions/economy/macro_countries"}},c={},i=[],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\neconomy.macro(\nparameters: list = None,\ncountries: list = None,\ntransform: str = '',\nstart_date: str = '1900-01-01',\nend_date=datetime.date(\n2022, 11, 10, chart: bool = False,\n), symbol: str = '',\nchart: bool = False,\n) -> Tuple[Any, Dict[Any, Dict","[Any, Any]","], str]\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nThis functions groups the data queried from the EconDB database [Source: EconDB]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},'  parameters: list\nThe type of data you wish to download. Available parameters can be accessed through economy.macro_parameters().\ncountries : list\nThe selected country or countries. Available countries can be accessed through economy.macro_countries().\ntransform : str\nThe selected transform. Available transforms can be accessed through get_macro_transform().\nstart_date : str\nThe starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31.\nend_date : str\nThe end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05.\nsymbol : str\nIn what currency you wish to convert all values.\nchart: bool\nFlag to display chart'))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  pd.DataFrame\nA DataFrame with the requested macro data of all chosen countries\nDictionary\nA dictionary containing the units of each country's parameter (e.g. EUR)\nstr\nDenomination which can be Trillions, Billions, Millions, Thousands"))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\neconomy.macro(\nparameters: list = None,\ncountries: list = None,\ntransform: str = '',\nstart_date: str = '1900-01-01',\nend_date: str = '2022-11-10',\nsymbol: str = '',\nraw: bool = False,\nexternal_axes: Optional[List","[axes]","] = None,\nexport: str = '',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nShow the received macro data about a company [Source: EconDB]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  parameters: list\nThe type of data you wish to display. Available parameters can be accessed through get_macro_parameters().\ncountries : list\nThe selected country or countries. Available countries can be accessed through get_macro_countries().\ntransform : str\nselect data transformation from:\n'' - no transformation\n'TPOP' - total percentage change on period,\n'TOYA' - total percentage since 1 year ago,\n'TUSD' - level USD,\n'TPGP' - Percentage of GDP,\n'TNOR' - Start = 100\nstart_date : str\nThe starting date, format \"YEAR-MONTH-DAY\", i.e. 2010-12-31.\nend_date : str\nThe end date, format \"YEAR-MONTH-DAY\", i.e. 2020-06-05.\nsymbol : str\nIn what currency you wish to convert all values.\nraw : bool\nWhether to display the raw output.\nexternal_axes: Optional[List","[plt.axes]","]\nExternal axes to plot on\nexport : str\nExport data to csv,json,xlsx or png,jpg,pdf,svg file\nchart: bool\nFlag to display chart"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  Plots the Series."))))}u.isMDXComponent=!0}}]);