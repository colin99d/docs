"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30856],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15475:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={title:"unu",description:"OpenBB SDK Function"},s="unu",u={unversionedId:"functions/stocks/options/unu",id:"functions/stocks/options/unu",title:"unu",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/stocks/options/unu.md",sourceDirName:"functions/stocks/options",slug:"/functions/stocks/options/unu",permalink:"/sdk/functions/stocks/options/unu",draft:!1,tags:[],version:"current",frontMatter:{title:"unu",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"screener_output",permalink:"/sdk/functions/stocks/options/screen/screener_output"},next:{title:"voi_yf",permalink:"/sdk/functions/stocks/options/voi_yf"}},p={},m=[{value:"openbb_terminal.stocks.options.fdscanner_model.unusual_options",id:"openbb_terminalstocksoptionsfdscanner_modelunusual_options",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"openbb_terminal.stocks.options.fdscanner_view.display_options",id:"openbb_terminalstocksoptionsfdscanner_viewdisplay_options",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],c={toc:m};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unu"},"unu"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",{id:"openbb_terminalstocksoptionsfdscanner_modelunusual_options"},"openbb_terminal.stocks.options.fdscanner_model.unusual_options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/stocks/options/fdscanner_model.py'",title:"'openbb_terminal/stocks/options/fdscanner_model.py'"},"def unusual_options(limit: int) -> Tuple\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/fdscanner_model.py#L19"},"Source Code")),(0,r.kt)("p",null,"Description: Get unusual option activity from fdscanner.com"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number to show"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple","[pd.DataFrame, pd.Timestamp]"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataframe containing options information, Timestamp indicated when data was updated from website")))),(0,r.kt)("h2",{id:"examples"},"Examples")),(0,r.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("h2",{id:"openbb_terminalstocksoptionsfdscanner_viewdisplay_options"},"openbb_terminal.stocks.options.fdscanner_view.display_options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/stocks/options/fdscanner_view.py'",title:"'openbb_terminal/stocks/options/fdscanner_view.py'"},"def display_options(limit: int, sortby: str, ascend: bool, calls_only: bool, puts_only: bool, export: str) -> None\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/fdscanner_view.py#L15"},"Source Code")),(0,r.kt)("p",null,"Description: Displays the unusual options table"),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of rows to show"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortby"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Data column to sort on"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ascend"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to sort in ascend order"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calls_only"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to only show calls"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"puts_only"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to show puts only"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"File type to export"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("h2",{id:"examples-1"},"Examples"))))}d.isMDXComponent=!0},85162:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:n,className:o}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(t){var e;const{lazy:n,block:o,defaultValue:c,values:d,groupId:k,className:b}=t,f=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??f.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),g=(0,i.l)(N,((t,e)=>t.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==y&&!N.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,s.U)(),[_,w]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=k){const t=v[k];null!=t&&t!==_&&N.some((e=>e.value===t))&&w(t)}const x=t=>{const e=t.currentTarget,n=O.indexOf(e),a=N[n].value;a!==_&&(T(e),w(a),null!=k&&h(k,String(a)))},E=t=>{var e;let n=null;switch(t.key){case"Enter":x(t);break;case"ArrowRight":{const e=O.indexOf(t.currentTarget)+1;n=O[e]??O[0];break}case"ArrowLeft":{const e=O.indexOf(t.currentTarget)-1;n=O[e]??O[O.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},N.map((t=>{let{value:e,label:n,attributes:o}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:t=>O.push(t),onKeyDown:E,onClick:x},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":_===e})}),n??e)}))),n?(0,r.cloneElement)(f.filter((t=>t.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==_})))))}function d(t){const e=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}}}]);