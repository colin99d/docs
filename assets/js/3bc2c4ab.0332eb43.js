"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=c,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),c=(n(67294),n(3905));const a={title:"exchanges",description:"OpenBB SDK Function"},o="exchanges",i={unversionedId:"functions/crypto/dd/exchanges",id:"functions/crypto/dd/exchanges",title:"exchanges",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/dd/exchanges.md",sourceDirName:"functions/crypto/dd",slug:"/functions/crypto/dd/exchanges",permalink:"/sdk/functions/crypto/dd/exchanges",draft:!1,tags:[],version:"current",frontMatter:{title:"exchanges",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"ex",permalink:"/sdk/functions/crypto/dd/ex"},next:{title:"fr",permalink:"/sdk/functions/crypto/dd/fr"}},l={},p=[{value:"openbb_terminal.cryptocurrency.due_diligence.ccxt_model.get_exchanges",id:"openbb_terminalcryptocurrencydue_diligenceccxt_modelget_exchanges",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"exchanges"},"exchanges"),(0,c.kt)("h2",{id:"openbb_terminalcryptocurrencydue_diligenceccxt_modelget_exchanges"},"openbb_terminal.cryptocurrency.due_diligence.ccxt_model.get_exchanges"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/due_diligence/ccxt_model.py'",title:"'openbb_terminal/cryptocurrency/due_diligence/ccxt_model.py'"},"def get_exchanges() -> List\n")),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/ccxt_model.py#L10"},"Source Code")),(0,c.kt)("p",null,"Description: Helper method to get all the exchanges supported by ccxt"),(0,c.kt)("h2",{id:"parameters"},"Parameters"),(0,c.kt)("p",null,"This function does not take any parameters."),(0,c.kt)("h2",{id:"returns"},"Returns"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,c.kt)("td",{parentName:"tr",align:null},"list of all the exchanges supported by ccxt")))),(0,c.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);