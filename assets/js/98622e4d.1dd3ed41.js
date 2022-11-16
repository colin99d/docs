"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47988],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>c});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(l),c=r,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||a;return l?n.createElement(f,o(o({ref:e},s),{},{components:l})):n.createElement(f,o({ref:e},s))}));function c(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,o=new Array(a);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<a;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},4412:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=l(87462),r=(l(67294),l(3905)),a=l(65488),o=l(85162);const i={title:"rvol",description:"OpenBB SDK Function"},p="rvol",u={unversionedId:"functions/portfolio/rvol",id:"functions/portfolio/rvol",title:"rvol",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/rvol.md",sourceDirName:"functions/portfolio",slug:"/functions/portfolio/rvol",permalink:"/sdk/functions/portfolio/rvol",draft:!1,tags:[],version:"current",frontMatter:{title:"rvol",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"rsort",permalink:"/sdk/functions/portfolio/rsort"},next:{title:"summary",permalink:"/sdk/functions/portfolio/summary"}},s={},m=[{value:"portfolio_model.get_rolling_volatility",id:"portfolio_modelget_rolling_volatility",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"portfolio_view.display_rolling_volatility",id:"portfolio_viewdisplay_rolling_volatility",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],d={toc:m};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rvol"},"rvol"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",{id:"portfolio_modelget_rolling_volatility"},"portfolio_model.get_rolling_volatility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_model.py'",title:"'openbb_terminal/portfolio/portfolio_model.py'"},"def get_rolling_volatility(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str) -> DataFrame:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1440"},"Source Code")),(0,r.kt)("p",null,"Description: Get rolling volatility"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio object with trades loaded"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"window"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Rolling window size to use"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"examples"},"Examples")),(0,r.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("h2",{id:"portfolio_viewdisplay_rolling_volatility"},"portfolio_view.display_rolling_volatility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_view.py'",title:"'openbb_terminal/portfolio/portfolio_view.py'"},"def display_rolling_volatility(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L787"},"Source Code")),(0,r.kt)("p",null,"Description: Display rolling volatility"),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,r.kt)("td",{parentName:"tr",align:null},"PortfolioModel"),(0,r.kt)("td",{parentName:"tr",align:null},"Portfolio object"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"interval for window to consider"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Export to file"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional axes to display plot on"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"examples-1"},"Examples"))))}c.isMDXComponent=!0},85162:(t,e,l)=>{l.d(e,{Z:()=>o});var n=l(67294),r=l(86010);const a="tabItem_Ymn6";function o(t){let{children:e,hidden:l,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:l},e)}},65488:(t,e,l)=>{l.d(e,{Z:()=>c});var n=l(87462),r=l(67294),a=l(86010),o=l(72389),i=l(67392),p=l(7094),u=l(12466);const s="tabList__CuJ",m="tabItem_LNqP";function d(t){var e;const{lazy:l,block:o,defaultValue:d,values:c,groupId:f,className:v}=t,k=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??k.map((t=>{let{props:{value:e,label:l,attributes:n}}=t;return{value:e,label:l,attributes:n}})),g=(0,i.l)(b,((t,e)=>t.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(e=k.find((t=>t.props.default)))?void 0:e.props.value)??k[0].props.value;if(null!==y&&!b.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:h}=(0,p.U)(),[_,w]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const t=N[f];null!=t&&t!==_&&b.some((e=>e.value===t))&&w(t)}const T=t=>{const e=t.currentTarget,l=O.indexOf(e),n=b[l].value;n!==_&&(x(e),w(n),null!=f&&h(f,String(n)))},E=t=>{var e;let l=null;switch(t.key){case"Enter":T(t);break;case"ArrowRight":{const e=O.indexOf(t.currentTarget)+1;l=O[e]??O[0];break}case"ArrowLeft":{const e=O.indexOf(t.currentTarget)-1;l=O[e]??O[O.length-1];break}}null==(e=l)||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},v)},b.map((t=>{let{value:e,label:l,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:t=>O.push(t),onKeyDown:E,onClick:T},o,{className:(0,a.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":_===e})}),l??e)}))),l?(0,r.cloneElement)(k.filter((t=>t.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==_})))))}function c(t){const e=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(e)},t))}}}]);