"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=p(n),k=s,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||a;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={title:"check_presets",description:"OpenBB SDK Function"},o="check_presets",c={unversionedId:"functions/stocks/options/screen/check_presets",id:"functions/stocks/options/screen/check_presets",title:"check_presets",description:"OpenBB SDK Function",source:"@site/sdk/functions/stocks/options/screen/check_presets.md",sourceDirName:"functions/stocks/options/screen",slug:"/functions/stocks/options/screen/check_presets",permalink:"/docs/sdk/functions/stocks/options/screen/check_presets",draft:!1,tags:[],version:"current",frontMatter:{title:"check_presets",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"process_chains",permalink:"/docs/sdk/functions/stocks/options/process_chains"},next:{title:"screener_output",permalink:"/docs/sdk/functions/stocks/options/screen/screener_output"}},l={},p=[{value:"stocks_options_screen_syncretism_model.check_presets",id:"stocks_options_screen_syncretism_modelcheck_presets",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],i={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"check_presets"},"check_presets"),(0,s.kt)("h2",{id:"stocks_options_screen_syncretism_modelcheck_presets"},"stocks_options_screen_syncretism_model.check_presets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def check_presets(preset_dict: dict) -> str:\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_model.py#L251"},"Source Code")),(0,s.kt)("p",null,"Description: Checks option screener preset values"),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"preset_dict"),(0,s.kt)("td",{parentName:"tr",align:null},"dict"),(0,s.kt)("td",{parentName:"tr",align:null},"Defined presets from configparser"),(0,s.kt)("td",{parentName:"tr",align:null},"None"),(0,s.kt)("td",{parentName:"tr",align:null},"False")))),(0,s.kt)("h2",{id:"returns"},"Returns"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"str"),(0,s.kt)("td",{parentName:"tr",align:null},"String of all errors accumulated")))),(0,s.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);