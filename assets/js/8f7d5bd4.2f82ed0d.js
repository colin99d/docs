"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,b=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={title:"positionbook",description:"OpenBB SDK Function"},p="positionbook",u={unversionedId:"functions/forex/oanda/positionbook",id:"functions/forex/oanda/positionbook",title:"positionbook",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/forex/oanda/positionbook.md",sourceDirName:"functions/forex/oanda",slug:"/functions/forex/oanda/positionbook",permalink:"/sdk/functions/forex/oanda/positionbook",draft:!1,tags:[],version:"current",frontMatter:{title:"positionbook",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"pending",permalink:"/sdk/functions/forex/oanda/pending"},next:{title:"price",permalink:"/sdk/functions/forex/oanda/price"}},s={},d=[{value:"forex_oanda_model.positionbook_plot_data_request",id:"forex_oanda_modelpositionbook_plot_data_request",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"forex_oanda_view.get_position_book",id:"forex_oanda_viewget_position_book",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"positionbook"},"positionbook"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",{id:"forex_oanda_modelpositionbook_plot_data_request"},"forex_oanda_model.positionbook_plot_data_request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/forex/oanda/oanda_model.py'",title:"'openbb_terminal/forex/oanda/oanda_model.py'"},"def positionbook_plot_data_request(instrument: Union[str, NoneType], accountID: str) -> None:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L182"},"Source Code")),(0,r.kt)("p",null,"Description: Request position book data for plotting."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instrument"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[str, None]"),(0,r.kt)("td",{parentName:"tr",align:null},"The loaded currency pair, by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accountID"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Oanda account ID, by default cfg.OANDA_ACCOUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"cfg.OANDA_ACCOUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Union","[pd.DataFrame, bool]"),(0,r.kt)("td",{parentName:"tr",align:null},"Position book data or False")))),(0,r.kt)("h2",{id:"examples"},"Examples")),(0,r.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("h2",{id:"forex_oanda_viewget_position_book"},"forex_oanda_view.get_position_book"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/decorators.py'",title:"'openbb_terminal/decorators.py'"},"def get_position_book() -> None:\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L118"},"Source Code")),(0,r.kt)("p",null,"Description: Plot a position book for an instrument if Oanda provides one."),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accountID"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Oanda user account ID"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instrument"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The loaded currency pair"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"examples-1"},"Examples"))))}c.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),p=n(7094),u=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:b,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,p.U)(),[_,x]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=h[b];null!=e&&e!==_&&N.some((t=>t.value===e))&&x(e)}const w=e=>{const t=e.currentTarget,n=O.indexOf(t),a=N[n].value;a!==_&&(T(t),x(a),null!=b&&y(b,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},N.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>O.push(e),onKeyDown:D,onClick:w},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":_===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);