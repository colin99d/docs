"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Introduction to the Stock Screener",keywords:["screen","screener","stock","stocks","historical","overview","valuation","financial","ownership","performance","technical","view","set","preset","presets","ini","scan","compare","tickers","metrics"],date:"2022-06-13",type:"guides",status:"publish",excerpt:"This guide introduces the Stock Screener, within the Stocks menu, briefly explains the features, and shows examples in context."},o=void 0,s={unversionedId:"features/stocks/scr/scr",id:"features/stocks/scr/scr",title:"Introduction to the Stock Screener",description:"The Stock Screener is a diverse tool for discovery. Screeners are typically",source:"@site/content/terminal/features/stocks/scr/scr.md",sourceDirName:"features/stocks/scr",slug:"/features/stocks/scr/",permalink:"/terminal/features/stocks/scr/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/scr/scr.md",tags:[],version:"current",frontMatter:{title:"Introduction to the Stock Screener",keywords:["screen","screener","stock","stocks","historical","overview","valuation","financial","ownership","performance","technical","view","set","preset","presets","ini","scan","compare","tickers","metrics"],date:"2022-06-13",type:"guides",status:"publish",excerpt:"This guide introduces the Stock Screener, within the Stocks menu, briefly explains the features, and shows examples in context."},sidebar:"tutorialSidebar",previous:{title:"zacks",permalink:"/terminal/features/stocks/res/zacks/"},next:{title:"financial",permalink:"/terminal/features/stocks/scr/financial/"}},c={},p=[{value:'Back to the <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/" target="_blank">Introduction Guide to the Stocks Menu</a>',id:"back-to-the-introduction-guide-to-the-stocks-menu",level:2}],l={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Stock Screener is a diverse tool for discovery. Screeners are typically\ndeployed in the preliminary phase of research; they provide creative methods for\nfinding individual companies meeting the criteria of the investment thesis.\nThere are categories of statistics to use as metrics to sort the criteria\ndefined in the preset file. The preset files are ",(0,i.kt)("inlineCode",{parentName:"p"},".ini")," files stored locally in\nthe application folder:\n",(0,i.kt)("inlineCode",{parentName:"p"},"~\\Applications\\OpenBB\\openbb_terminal\\stocks\\screener\\presets\\")," and they can be\nmodified in any text editor. Create custom presets and share them with the\nworld!"),(0,i.kt)("p",null,"Get to the Stock Screener from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stocks")," menu by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"scr")," and then\npressing ",(0,i.kt)("inlineCode",{parentName:"p"},"enter")),(0,i.kt)("img",{width:"1412",alt:"The Stock Screener submenu",src:"https://user-images.githubusercontent.com/85772166/173902919-2577b42a-f46a-4734-b153-9ccf498e3443.png"}),(0,i.kt)("h2",null,"How to use the Stock Screener"),(0,i.kt)("p",null,"The default preset is ",(0,i.kt)("inlineCode",{parentName:"p"},"top_gainers"),". Use the commands ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," to select\na new one. The file in the presets folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"template.ini"),", is a blank slate for\ncreating something fresh. Modify individual parameters within the different\npresets to get more precision from a starting point. To get started, simply\nchoose one of the categories to scour, like ",(0,i.kt)("inlineCode",{parentName:"p"},"technical"),"."),(0,i.kt)("img",{width:"1408",alt:"Unusual Volume preset and the Technical category",src:"https://user-images.githubusercontent.com/85772166/173902993-33ae5c4d-67bb-46ad-909f-ad376c16b5f9.png"}),(0,i.kt)("p",null,"The columns can be sorted with the optional argument ",(0,i.kt)("inlineCode",{parentName:"p"},"-s"),", and autocomplete will\npresent a list of choices."),(0,i.kt)("img",{width:"1132",alt:"Sorting results",src:"https://user-images.githubusercontent.com/85772166/173903096-0643a64f-4482-4de9-832b-d654af532a10.png"}),(0,i.kt)("p",null,"To see a description of each preset, use ",(0,i.kt)("inlineCode",{parentName:"p"},"view"),", and autocomplete will allow the\nuser to scroll presets with the arrow keys to ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," the choice."),(0,i.kt)("img",{width:"1412",alt:"Autocomplete with the set function",src:"https://user-images.githubusercontent.com/85772166/173903152-c59f37f7-9b90-47ee-8ad1-87bb5939caa0.png"}),(0,i.kt)("p",null,"Unexpected results can be obtained through combining presets with the category\nof screen."),(0,i.kt)("h2",null,"Examples"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"modified_dremin")," preset and the ",(0,i.kt)("inlineCode",{parentName:"p"},"financial")," category, then sorting\nfor return-on-investment."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/173903472-79988a7d-999e-454b-a7f9-96b071e3337a.png",alt:"modified_dremin preset with the financial category"})),(0,i.kt)("p",null,"Setting the preset to ",(0,i.kt)("inlineCode",{parentName:"p"},"short_squeeze_scan")," and scanning with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ownership"),"\ncategory."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/173903741-4823f6ac-91f0-4e57-9fa1-a465af43a4f9.png",alt:"Short squeeze scan and the ownership category"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set triangle_ascending"),", show ",(0,i.kt)("inlineCode",{parentName:"p"},"techincal")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"overview")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/173903827-15d6852e-90bf-4ea3-b008-47ce3c482380.png",alt:"triangle_ascending preset with technical and overview categories"})),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"exe stock_screener_demo.openbb")," from the main menu to play a\ndemonstration of the Stock Screener in the Terminal."),(0,i.kt)("h2",{id:"back-to-the-introduction-guide-to-the-stocks-menu"},"Back to the ",(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"Introduction Guide to the Stocks Menu")),(0,i.kt)("p",null,"title: Introduction to the Stock Screener keywords: ","['screen', 'screener',\n'stock', 'stocks', 'historical', 'overview', 'valuation', 'financial',\n'ownership', 'performance', 'technical', 'view', 'set', 'preset', 'presets',\n'ini', 'scan', 'compare', 'tickers', 'metrics']",' date: "2022-06-13" type: guides\nstatus: publish excerpt: "This guide introduces the Stock Screener, within the\nStocks menu, briefly explains the features, and shows examples in context."'),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The Stock Screener is a diverse tool for discovery. Screeners are typically\ndeployed in the preliminary phase of research; they provide creative methods for\nfinding individual companies meeting the criteria of the investment thesis.\nThere are categories of statistics to use as metrics to sort the criteria\ndefined in the preset file. The preset files are ",(0,i.kt)("inlineCode",{parentName:"p"},".ini")," files stored locally in\nthe application folder:\n",(0,i.kt)("inlineCode",{parentName:"p"},"~\\Applications\\OpenBB\\openbb_terminal\\stocks\\screener\\presets\\")," and they can be\nmodified in any text editor. Create custom presets and share them with the\nworld!"),(0,i.kt)("p",null,"Get to the Stock Screener from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stocks")," menu by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"scr")," and then\npressing ",(0,i.kt)("inlineCode",{parentName:"p"},"enter")),(0,i.kt)("img",{width:"1412",alt:"The Stock Screener submenu",src:"https://user-images.githubusercontent.com/85772166/173902919-2577b42a-f46a-4734-b153-9ccf498e3443.png"}),(0,i.kt)("h2",null,"How to use the Stock Screener"),(0,i.kt)("p",null,"The default preset is ",(0,i.kt)("inlineCode",{parentName:"p"},"top_gainers"),". Use the commands ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," to select\na new one. The file in the presets folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"template.ini"),", is a blank slate for\ncreating something fresh. Modify individual parameters within the different\npresets to get more precision from a starting point. To get started, simply\nchoose one of the categories to scour, like ",(0,i.kt)("inlineCode",{parentName:"p"},"technical"),"."),(0,i.kt)("img",{width:"1408",alt:"Unusual Volume preset and the Technical category",src:"https://user-images.githubusercontent.com/85772166/173902993-33ae5c4d-67bb-46ad-909f-ad376c16b5f9.png"}),(0,i.kt)("p",null,"The columns can be sorted with the optional argument ",(0,i.kt)("inlineCode",{parentName:"p"},"-s"),", and autocomplete will\npresent a list of choices."),(0,i.kt)("img",{width:"1132",alt:"Sorting results",src:"https://user-images.githubusercontent.com/85772166/173903096-0643a64f-4482-4de9-832b-d654af532a10.png"}),(0,i.kt)("p",null,"To see a description of each preset, use ",(0,i.kt)("inlineCode",{parentName:"p"},"view"),", and autocomplete will allow the\nuser to scroll presets with the arrow keys to ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," the choice."),(0,i.kt)("img",{width:"1412",alt:"Autocomplete with the set function",src:"https://user-images.githubusercontent.com/85772166/173903152-c59f37f7-9b90-47ee-8ad1-87bb5939caa0.png"}),(0,i.kt)("p",null,"Unexpected results can be obtained through combining presets with the category\nof screen."),(0,i.kt)("h2",null,"Examples"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"modified_dremin")," preset and the ",(0,i.kt)("inlineCode",{parentName:"p"},"financial")," category, then sorting\nfor return-on-investment."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/173903472-79988a7d-999e-454b-a7f9-96b071e3337a.png",alt:"modified_dremin preset with the financial category"})),(0,i.kt)("p",null,"Setting the preset to ",(0,i.kt)("inlineCode",{parentName:"p"},"short_squeeze_scan")," and scanning with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ownership"),"\ncategory."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/173903741-4823f6ac-91f0-4e57-9fa1-a465af43a4f9.png",alt:"Short squeeze scan and the ownership category"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set triangle_ascending"),", show ",(0,i.kt)("inlineCode",{parentName:"p"},"techincal")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"overview")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/173903827-15d6852e-90bf-4ea3-b008-47ce3c482380.png",alt:"triangle_ascending preset with technical and overview categories"})),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"exe stock_screener_demo.openbb")," from the main menu to play a\ndemonstration of the Stock Screener in the Terminal."),(0,i.kt)("p",null,"Back to the"),(0,i.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"Introduction Guide to the Stocks Menu"))}h.isMDXComponent=!0}}]);