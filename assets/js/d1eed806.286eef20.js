"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39448],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=l,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),o=a(85162);const i={title:"es",description:"OpenBB SDK Function"},p="es",m={unversionedId:"functions/common/qa/es",id:"functions/common/qa/es",title:"es",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/common/qa/es.md",sourceDirName:"functions/common/qa",slug:"/functions/common/qa/es",permalink:"/sdk/functions/common/qa/es",draft:!1,tags:[],version:"current",frontMatter:{title:"es",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"decompose",permalink:"/sdk/functions/common/qa/decompose"},next:{title:"kurtosis",permalink:"/sdk/functions/common/qa/kurtosis"}},u={},s=[{value:"common_qa_model.get_es",id:"common_qa_modelget_es",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"common_qa_view.display_es",id:"common_qa_viewdisplay_es",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"es"},"es"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,l.kt)("h2",{id:"common_qa_modelget_es"},"common_qa_model.get_es"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/common/quantitative_analysis/qa_model.py'",title:"'openbb_terminal/common/quantitative_analysis/qa_model.py'"},"def get_es(data: pd.DataFrame, use_mean: bool, distribution: str, percentile: Union[float, int], portfolio: bool) -> DataFrame:\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L357"},"Source Code")),(0,l.kt)("p",null,"Description: Gets Expected Shortfall for specified stock dataframe."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,l.kt)("td",{parentName:"tr",align:null},"Data dataframe"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_mean"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If one should use the data mean for calculation"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distribution"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of distribution, options: laplace, student_t, normal"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"percentile"),(0,l.kt)("td",{parentName:"tr",align:null},"Union","[float,int]"),(0,l.kt)("td",{parentName:"tr",align:null},"VaR percentile"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If the data is a portfolio"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,l.kt)("td",{parentName:"tr",align:null},"DataFrame with Expected Shortfall per percentile")))),(0,l.kt)("h2",{id:"examples"},"Examples")),(0,l.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,l.kt)("h2",{id:"common_qa_viewdisplay_es"},"common_qa_view.display_es"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/common/quantitative_analysis/qa_view.py'",title:"'openbb_terminal/common/quantitative_analysis/qa_view.py'"},"def display_es(data: pd.DataFrame, symbol: str, use_mean: bool, distribution: str, percentile: float, portfolio: bool) -> None:\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1066"},"Source Code")),(0,l.kt)("p",null,"Description: Displays expected shortfall."),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,l.kt)("td",{parentName:"tr",align:null},"Data dataframe"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_mean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"if one should use the data mean return"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distribution"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"choose distribution to use: logistic, laplace, normal"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"percentile"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"es percentile"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If the data is a portfolio"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"None"),(0,l.kt)("h2",{id:"examples-1"},"Examples"))))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),i=a(67392),p=a(7094),m=a(12466);const u="tabList__CuJ",s="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:c,groupId:k,className:N}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,p.U)(),[_,O]=(0,l.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:D}=(0,m.o5)();if(null!=k){const e=v[k];null!=e&&e!==_&&g.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,a=w.indexOf(t),n=g[a].value;n!==_&&(D(t),O(n),null!=k&&h(k,String(n)))},q=e=>{var t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},N)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>w.push(e),onKeyDown:q,onClick:T},o,{className:(0,r.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":_===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function c(e){const t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);