"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l=void 0,s={unversionedId:"features/crypto/ov/news",id:"features/crypto/ov/news",title:"news",description:".. role:: python(code)",source:"@site/terminal/features/crypto/ov/news.md",sourceDirName:"features/crypto/ov",slug:"/features/crypto/ov/news",permalink:"/docs/terminal/features/crypto/ov/news",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/ov/news.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"list_of_coins",permalink:"/docs/terminal/features/crypto/ov/list_of_coins"},next:{title:"platforms",permalink:"/docs/terminal/features/crypto/ov/platforms"}},i={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\ncrypto.ov.news(\nlimit: int = 60,\npost",(0,o.kt)("em",{parentName:"p"},"kind: str = 'news',\nfilter"),": Optional","[str]"," = None,\nregion: str = 'en',\nsource: Optional","[str]"," = None,\nsymbol: Optional","[str]"," = None,\nsortby: str = 'published_at',\nascend: bool = True,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nGet recent posts from CryptoPanic news aggregator platform. [Source: https://cryptopanic.com/]\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  limit: int\nnumber of news to fetch\npost_kind: str\nFilter by category of news. Available values: news or media.\nfilter","_",": Optional","[str]","\nFilter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol\nregion: str\nFilter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),\nes (Espa\xf1ol), fr (Fran\xe7ais), it (Italiano), pt (Portugu\xeas), ru (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)\nsortby: str\nKey to sort by.\nascend: bool\nSort in ascend order.\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataFrame with recent news from different sources filtered by provided parameters."))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\ncrypto.ov.news(\npost",(0,o.kt)("em",{parentName:"p"},"kind: str = 'news',\nregion: str = 'en',\nfilter"),": Optional","[str]"," = None,\nlimit: int = 25,\nsortby: str = 'published_at',\nascend: bool = False,\nlinks: bool = False,\nexport: str = '',\nchart: bool = False,\n) -> None\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nDisplay recent posts from CryptoPanic news aggregator platform.\n[Source: https://cryptopanic.com/]\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  limit: int\nnumber of news to display\npost_kind: str\nFilter by category of news. Available values: news or media.\nfilter","_",": Optional","[str]","\nFilter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol\nregion: str\nFilter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),\nes (Espa\xf1ol), fr (Fran\xe7ais), it (Italiano), pt (Portugu\xeas), ru (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)\nsortby: str\nKey to sort by.\nascend: bool\nSort in ascending order.\nlinks: bool\nShow urls for news\nexport : str\nExport dataframe data to csv,json,xlsx file\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);