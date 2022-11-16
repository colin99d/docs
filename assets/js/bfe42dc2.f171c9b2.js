"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),l=r(65488),o=r(85162);const i={title:"cgglobal",description:"OpenBB SDK Function"},c="cgglobal",p={unversionedId:"functions/crypto/ov/cgglobal",id:"functions/crypto/ov/cgglobal",title:"cgglobal",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/ov/cgglobal.md",sourceDirName:"functions/crypto/ov",slug:"/functions/crypto/ov/cgglobal",permalink:"/sdk/functions/crypto/ov/cgglobal",draft:!1,tags:[],version:"current",frontMatter:{title:"cgglobal",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"cgexrates",permalink:"/sdk/functions/crypto/ov/cgexrates"},next:{title:"cghm",permalink:"/sdk/functions/crypto/ov/cghm"}},u={},s=[{value:"openbb_terminal.cryptocurrency.overview.pycoingecko_model.get_global_markets_info",id:"openbb_terminalcryptocurrencyoverviewpycoingecko_modelget_global_markets_info",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"openbb_terminal.cryptocurrency.overview.pycoingecko_view.display_global_market_info",id:"openbb_terminalcryptocurrencyoverviewpycoingecko_viewdisplay_global_market_info",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cgglobal"},"cgglobal"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("h2",{id:"openbb_terminalcryptocurrencyoverviewpycoingecko_modelget_global_markets_info"},"openbb_terminal.cryptocurrency.overview.pycoingecko_model.get_global_markets_info"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/overview/pycoingecko_model.py'",title:"'openbb_terminal/cryptocurrency/overview/pycoingecko_model.py'"},"def get_global_markets_info() -> DataFrame\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L460"},"Source Code")),(0,a.kt)("p",null,"Description: Get global statistics about crypto markets from CoinGecko API like:"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Market_Cap, Volume, Market_Cap_Percentage")))),(0,a.kt)("h2",{id:"examples"},"Examples")),(0,a.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,a.kt)("h2",{id:"openbb_terminalcryptocurrencyoverviewpycoingecko_viewdisplay_global_market_info"},"openbb_terminal.cryptocurrency.overview.pycoingecko_view.display_global_market_info"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/overview/pycoingecko_view.py'",title:"'openbb_terminal/cryptocurrency/overview/pycoingecko_view.py'"},"def display_global_market_info(pie: bool, export: str) -> None\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L240"},"Source Code")),(0,a.kt)("p",null,"Description: Shows global statistics about crypto. ","[Source: CoinGecko]"),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pie"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to show a pie chart"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("h2",{id:"examples-1"},"Examples"))))}d.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),c=r(7094),p=r(12466);const u="tabList__CuJ",s="tabItem_LNqP";function m(e){var t;const{lazy:r,block:o,defaultValue:m,values:d,groupId:b,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:_}=(0,c.U)(),[N,w]=(0,a.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=b){const e=h[b];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,r=O.indexOf(t),n=g[r].value;n!==N&&(x(t),w(n),null!=b&&_(b,String(n)))},E=e=>{var t;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},y)},g.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}}}]);