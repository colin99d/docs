"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63085],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),i=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},s=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,p(p({ref:e},s),{},{components:r})):n.createElement(f,p({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60756:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={},p=void 0,l={unversionedId:"features/crypto/disc/top_nfts",id:"features/crypto/disc/top_nfts",title:"top_nfts",description:".. role:: python(code)",source:"@site/terminal/features/crypto/disc/top_nfts.md",sourceDirName:"features/crypto/disc",slug:"/features/crypto/disc/top_nfts",permalink:"/docs/terminal/features/crypto/disc/top_nfts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/disc/top_nfts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"top_games",permalink:"/docs/terminal/features/crypto/disc/top_games"},next:{title:"trending",permalink:"/docs/terminal/features/crypto/disc/trending"}},c={},i=[],s={toc:i};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.disc.top_nfts(\nsortby: str = '',\nlimit: int = 10,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nGet top nft collections [Source: https://dappradar.com/]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  sortby: str\nKey by which to sort data\nchart: bool\nFlag to display chart"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  pd.DataFrame\nNFTs Columns: Name, Protocols, Floor Price ","[$]",", Avg Price ","[$]",", Market Cap ","[$]",", Volume ","[$]"))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\ncrypto.disc.top_nfts(\nlimit: int = 10,\nsortby: str = '',\nexport: str = '',\nchart: bool = False,\n) -> None\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nDisplays top nft collections [Source: https://dappradar.com/]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  limit: int\nNumber of records to display\nsortby: str\nKey by which to sort data\nexport : str\nExport dataframe data to csv,json,xlsx file\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);