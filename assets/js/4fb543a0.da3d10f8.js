"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(65488),o=r(85162);const i={title:"listorders",description:"OpenBB SDK Function"},s="listorders",u={unversionedId:"functions/forex/oanda/listorders",id:"functions/forex/oanda/listorders",title:"listorders",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/forex/oanda/listorders.md",sourceDirName:"functions/forex/oanda",slug:"/functions/forex/oanda/listorders",permalink:"/sdk/functions/forex/oanda/listorders",draft:!1,tags:[],version:"current",frontMatter:{title:"listorders",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/sdk/functions/forex/oanda/fwd"},next:{title:"openpositions",permalink:"/sdk/functions/forex/oanda/openpositions"}},d={},p=[{value:"forex_oanda_model.order_history_request",id:"forex_oanda_modelorder_history_request",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"forex_oanda_view.list_orders",id:"forex_oanda_viewlist_orders",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"listorders"},"listorders"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("h2",{id:"forex_oanda_modelorder_history_request"},"forex_oanda_model.order_history_request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/forex/oanda/oanda_model.py'",title:"'openbb_terminal/forex/oanda/oanda_model.py'"},"def order_history_request(order_state: str, order_count: int, accountID: str) -> None:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L225"},"Source Code")),(0,n.kt)("p",null,"Description: Request the orders list from Oanda."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order_state"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Filter orders by a specific state ("PENDING", "CANCELLED", etc.)'),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order_count"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit the number of orders to retrieve"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"accountID"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Oanda account ID, by default cfg.OANDA_ACCOUNT"),(0,n.kt)("td",{parentName:"tr",align:null},"cfg.OANDA_ACCOUNT"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"examples"},"Examples")),(0,n.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,n.kt)("h2",{id:"forex_oanda_viewlist_orders"},"forex_oanda_view.list_orders"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/decorators.py'",title:"'openbb_terminal/decorators.py'"},"def list_orders() -> None:\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L156"},"Source Code")),(0,n.kt)("p",null,"Description: List order history."),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"accountID"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Oanda user account ID"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order_state"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Filter orders by a specific state ("PENDING", "CANCELLED", etc.)'),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order_count"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit the number of orders to retrieve"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"examples-1"},"Examples"))))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),l=r(86010),o=r(72389),i=r(67392),s=r(7094),u=r(12466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:r,block:o,defaultValue:c,values:m,groupId:f,className:b}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=m??k.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),v=(0,i.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!N.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,s.U)(),[_,O]=(0,n.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=f){const e=h[f];null!=e&&e!==_&&N.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,r=x.indexOf(t),a=N[r].value;a!==_&&(w(t),O(a),null!=f&&y(f,String(a)))},D=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},N.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>x.push(e),onKeyDown:D,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===t})}),r??t)}))),r?(0,n.cloneElement)(k.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,o.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);