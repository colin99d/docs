"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85690],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),p=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=p(n.components);return r.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,s(s({ref:e},c),{},{components:t})):r.createElement(d,s({ref:e},c))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1465:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},s=void 0,i={unversionedId:"features/stocks/options/payoff/list/list",id:"features/stocks/options/payoff/list/list",title:"list",description:"Lists available calls and puts.",source:"@site/content/terminal/features/stocks/options/payoff/list/list.md",sourceDirName:"features/stocks/options/payoff/list",slug:"/features/stocks/options/payoff/list/",permalink:"/terminal/features/stocks/options/payoff/list/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/options/payoff/list/list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"add",permalink:"/terminal/features/stocks/options/payoff/add/"},next:{title:"pick",permalink:"/terminal/features/stocks/options/payoff/pick/"}},l={},p=[],c={toc:p};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: list [-h]\n")),(0,o.kt)("p",null,"Lists available calls and puts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help  show this help message\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Feb 16, 09:31 (\u2728) /stocks/options/payoff/ $ list\n#       call    put\n0       600.0   200.0\n1       700.0   250.0\n2       720.0   300.0\n3       730.0   350.0\n4       740.0   400.0\n5       750.0   450.0\n6       760.0   500.0\n7       780.0   550.0\n8       800.0   600.0\n9       810.0   650.0\n10      820.0   700.0\n11      825.0   710.0\n12      830.0   720.0\n13      835.0   730.0\n14      840.0   740.0\n15      850.0   750.0\n16      855.0   755.0\n17      860.0   760.0\n18      865.0   765.0\n19      870.0   770.0\n20      875.0   775.0\n21      880.0   780.0\n22      885.0   785.0\n23      890.0   790.0\n24      895.0   795.0\n25      900.0   800.0\n26      905.0   805.0\n27      910.0   810.0\n28      915.0   815.0\n29      920.0   820.0\n30      925.0   825.0\n31      930.0   830.0\n32      935.0   835.0\n33      940.0   840.0\n34      945.0   845.0\n35      950.0   850.0\n36      955.0   855.0\n37      960.0   860.0\n38      965.0   865.0\n39      970.0   870.0\n40      975.0   875.0\n41      980.0   880.0\n42      985.0   885.0\n43      990.0   890.0\n44      995.0   895.0\n45      1000.0  900.0\n46      1005.0  905.0\n47      1010.0  910.0\n48      1015.0  915.0\n49      1020.0  920.0\n50      1025.0  925.0\n51      1030.0  930.0\n52      1035.0  935.0\n53      1040.0  940.0\n54      1045.0  945.0\n55      1050.0  950.0\n56      1055.0  955.0\n57      1060.0  960.0\n58      1065.0  965.0\n59      1070.0  970.0\n60      1075.0  975.0\n61      1080.0  980.0\n62      1090.0  985.0\n63      1100.0  990.0\n64      1110.0  995.0\n65      1120.0  1000.0\n66      1125.0  1010.0\n67      1130.0  1015.0\n68      1140.0  1020.0\n69      1150.0  1025.0\n70      1160.0  1030.0\n71      1170.0  1045.0\n72      1175.0  1050.0\n73      1180.0  1060.0\n74      1190.0  1065.0\n75      1200.0  1070.0\n76      1210.0  1080.0\n77      1220.0  1090.0\n78      1230.0  1100.0\n79      1250.0  1110.0\n80      1260.0  1140.0\n81      1270.0  1150.0\n82      1275.0  1160.0\n83      1280.0  1200.0\n84      1290.0\n85      1300.0\n86      1325.0\n87      1350.0\n88      1375.0\n89      1400.0\n90      1425.0\n91      1450.0\n92      1475.0\n93      1500.0\n94      1525.0\n95      1550.0\n96      1575.0\n97      1600.0\n98      1625.0\n99      1650.0\n100     1700.0\n101     1750.0\n")))}u.isMDXComponent=!0}}]);