"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(65488),i=r(85162);const o={title:"ayr",description:"OpenBB SDK Function"},s="ayr",p={unversionedId:"functions/crypto/defi/ayr",id:"functions/crypto/defi/ayr",title:"ayr",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/defi/ayr.md",sourceDirName:"functions/crypto/defi",slug:"/functions/crypto/defi/ayr",permalink:"/docs/sdk/functions/crypto/defi/ayr",draft:!1,tags:[],version:"current",frontMatter:{title:"ayr",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"aterra",permalink:"/docs/sdk/functions/crypto/defi/aterra"},next:{title:"dtvl",permalink:"/docs/sdk/functions/crypto/defi/dtvl"}},u={},c=[{value:"crypto_defi_terraengineer_model.get_anchor_yield_reserve",id:"crypto_defi_terraengineer_modelget_anchor_yield_reserve",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"crypto_defi_terraengineer_view.display_anchor_yield_reserve",id:"crypto_defi_terraengineer_viewdisplay_anchor_yield_reserve",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ayr"},"ayr"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("h2",{id:"crypto_defi_terraengineer_modelget_anchor_yield_reserve"},"crypto_defi_terraengineer_model.get_anchor_yield_reserve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/defi/terraengineer_model.py'",title:"'openbb_terminal/cryptocurrency/defi/terraengineer_model.py'"},"def get_anchor_yield_reserve() -> DataFrame:\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_model.py#L62"},"Source Code")),(0,a.kt)("p",null,"Description: Displays the 30-day history of the Anchor Yield Reserve."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"examples"},"Examples")),(0,a.kt)(i.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,a.kt)("h2",{id:"crypto_defi_terraengineer_viewdisplay_anchor_yield_reserve"},"crypto_defi_terraengineer_view.display_anchor_yield_reserve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/defi/terraengineer_view.py'",title:"'openbb_terminal/cryptocurrency/defi/terraengineer_view.py'"},"def display_anchor_yield_reserve(export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_view.py#L85"},"Source Code")),(0,a.kt)("p",null,"Description: Displays the 30-day history of the Anchor Yield Reserve."),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file, by default False"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"examples-1"},"Examples"))))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),l=r(86010),i=r(72389),o=r(67392),s=r(7094),p=r(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:i,defaultValue:d,values:m,groupId:y,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,o.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:_}=(0,s.U)(),[N,x]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=y){const e=k[y];null!=e&&e!==N&&b.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,r=O.indexOf(t),n=b[r].value;n!==N&&(w(t),x(n),null!=y&&_(y,String(n)))},E=e=>{var t;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);