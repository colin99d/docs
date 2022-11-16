"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46317],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(a),k=n,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return a?r.createElement(c,o(o({ref:e},s),{},{components:a})):r.createElement(c,o({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70323:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={title:"property",description:"OpenBB SDK Function"},p="property",u={unversionedId:"functions/portfolio/po/property",id:"functions/portfolio/po/property",title:"property",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/po/property.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/property",permalink:"/sdk/functions/portfolio/po/property",draft:!1,tags:[],version:"current",frontMatter:{title:"property",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"plot",permalink:"/sdk/functions/portfolio/po/plot"},next:{title:"relriskparity",permalink:"/sdk/functions/portfolio/po/relriskparity"}},s={},m=[{value:"portfolio_optimization_optimizer_model.get_property_weights",id:"portfolio_optimization_optimizer_modelget_property_weights",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"portfolio_optimization_optimizer_view.display_property_weighting",id:"portfolio_optimization_optimizer_viewdisplay_property_weighting",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],d={toc:m};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"property"},"property"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("h2",{id:"portfolio_optimization_optimizer_modelget_property_weights"},"portfolio_optimization_optimizer_model.get_property_weights"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py'",title:"'openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py'"},"def get_property_weights(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, s_property: str, value: float) -> None:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L234"},"Source Code")),(0,n.kt)("p",null,"Description: Calculate portfolio weights based on selected property"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbols"),(0,n.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,n.kt)("td",{parentName:"tr",align:null},"List of portfolio stocks"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'interval to get stock data, by default "3mo"'),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"weekday."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is False"),(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"freq"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"values are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"'D' for daily returns."),(0,n.kt)("li",{parentName:"ul"},"'W' for weekly returns."),(0,n.kt)("li",{parentName:"ul"},"'M' for monthly returns. | value | True |\n| maxnan | float | Max percentage of nan values accepted per asset to be included in\nreturns. | None | False |\n| threshold | float | Value used to replace outliers that are higher to threshold. | None | False |\n| method | str | Method used to fill nan values. Default value is 'time'. For more information see ",(0,n.kt)("inlineCode",{parentName:"li"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__. | value | False |\n| s_property | str | Property to weight portfolio by | None | False |\n| value | float | Amount of money to allocate | None | True |")),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dict"),(0,n.kt)("td",{parentName:"tr",align:null},"Dictionary of portfolio weights or allocations")))),(0,n.kt)("h2",{id:"examples"},"Examples")),(0,n.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,n.kt)("h2",{id:"portfolio_optimization_optimizer_viewdisplay_property_weighting"},"portfolio_optimization_optimizer_view.display_property_weighting"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py'",title:"'openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py'"},"def display_property_weighting(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, s_property: str, risk_measure: Any, risk_free_rate: float, alpha: Any, value: float, table: bool) -> None:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L730"},"Source Code")),(0,n.kt)("p",null,"Description: Builds a portfolio weighted by selected property"),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbols"),(0,n.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,n.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"weekday."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is False"),(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"freq"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"values are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'D' for daily returns.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'W' for weekly returns.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'M' for monthly returns. | value | True |\n| maxnan | float | Max percentage of nan values accepted per asset to be included in\nreturns. | None | True |\n| threshold | float | Value used to replace outliers that are higher to threshold. | None | True |\n| method | str | Method used to fill nan values. Default value is 'time'. For more information see ",(0,n.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__. | value | False |\n| s_property | str | Property to get weighted portfolio of | None | False |\n| risk_measure | str | The risk measure used to compute indicators.\nThe default is 'MV'. Possible values are:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'MV': Standard Deviation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'MAD': Mean Absolute Deviation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'MSV': Semi Standard Deviation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'FLPM': First Lower Partial Moment (Omega Ratio).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'SLPM': Second Lower Partial Moment (Sortino Ratio).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'CVaR': Conditional Value at Risk.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'EVaR': Entropic Value at Risk.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'WR': Worst Realization.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'ADD': Average Drawdown of uncompounded cumulative returns.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'UCI': Ulcer Index of uncompounded cumulative returns.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"'MDD': Maximum Drawdown of uncompounded cumulative returns. | is | True |\n| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0. | 0 | True |\n| alpha | float | Significance level of CVaR, EVaR, CDaR and EDaR. | None | True |\n| value | float | Amount to allocate to portfolio, by default 1.0 | 1.0 | True |\n| table | bool | True if plot table weights, by default False | False | True |"))),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"examples-1"},"Examples"))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>k});var r=a(87462),n=a(67294),l=a(86010),o=a(72389),i=a(67392),p=a(7094),u=a(12466);const s="tabList__CuJ",m="tabItem_LNqP";function d(t){var e;const{lazy:a,block:o,defaultValue:d,values:k,groupId:c,className:f}=t,N=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=k??N.map((t=>{let{props:{value:e,label:a,attributes:r}}=t;return{value:e,label:a,attributes:r}})),y=(0,i.l)(g,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(e=N.find((t=>t.props.default)))?void 0:e.props.value)??N[0].props.value;if(null!==b&&!g.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=(0,p.U)(),[_,w]=(0,n.useState)(b),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=c){const t=h[c];null!=t&&t!==_&&g.some((e=>e.value===t))&&w(t)}const O=t=>{const e=t.currentTarget,a=D.indexOf(e),r=g[a].value;r!==_&&(T(e),w(r),null!=c&&v(c,String(r)))},E=t=>{var e;let a=null;switch(t.key){case"Enter":O(t);break;case"ArrowRight":{const e=D.indexOf(t.currentTarget)+1;a=D[e]??D[0];break}case"ArrowLeft":{const e=D.indexOf(t.currentTarget)-1;a=D[e]??D[D.length-1];break}}null==(e=a)||e.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},g.map((t=>{let{value:e,label:a,attributes:o}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:t=>D.push(t),onKeyDown:E,onClick:O},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":_===e})}),a??e)}))),a?(0,n.cloneElement)(N.filter((t=>t.props.value===_))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==_})))))}function k(t){const e=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(e)},t))}}}]);