"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69360],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(t),f=a,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(y,s(s({ref:n},p),{},{components:t})):r.createElement(y,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={},s=void 0,l={unversionedId:"features/stocks/bt/ema/ema",id:"features/stocks/bt/ema/ema",title:"ema",description:"A simple investment strategy where stock is bought when Price > EMA(l)",source:"@site/content/terminal/features/stocks/bt/ema/ema.md",sourceDirName:"features/stocks/bt/ema",slug:"/features/stocks/bt/ema/",permalink:"/terminal/features/stocks/bt/ema/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/bt/ema/ema.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bt",permalink:"/terminal/features/stocks/bt/"},next:{title:"emacross",permalink:"/terminal/features/stocks/bt/emacross/"}},c={},i=[],p={toc:i};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: ema [-l LENGTH] [--spy] [--no_bench] [-h] [--export {csv,json,xlsx}]\n")),(0,a.kt)("p",null,"A simple investment strategy where stock is bought when Price > EMA(l)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -l LENGTH             EMA period to consider (default: 20)\n  --spy                 Flag to add spy hold comparison (default: False)\n  --no_bench            Flag to not show buy and hold comparison (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Feb 16, 09:59 (\u2728) /stocks/bt/ $ ema\n\nStat                 AboveEMA    MSFT Hold\n-------------------  ----------  -----------\nStart                2019-02-10  2019-02-10\nEnd                  2022-02-15  2022-02-15\nRisk-free rate       0.00%       0.00%\n\nTotal Return         53.12%      195.22%\nDaily Sharpe         0.83        1.33\nDaily Sortino        1.32        2.17\nCAGR                 15.18%      43.21%\nMax Drawdown         -18.91%     -28.04%\nCalmar Ratio         0.80        1.54\n\nMTD                  -7.29%      -3.38%\n3m                   -15.90%     -10.43%\n6m                   -6.26%      2.99%\nYTD                  -9.30%      -10.66%\n1Y                   0.12%       23.67%\n3Y (ann.)            15.26%      42.12%\n5Y (ann.)            -           -\n10Y (ann.)           -           -\nSince Incep. (ann.)  15.18%      43.21%\n\nDaily Sharpe         0.83        1.33\nDaily Sortino        1.32        2.17\nDaily Mean (ann.)    15.98%      40.51%\nDaily Vol (ann.)     19.35%      30.43%\nDaily Skew           0.05        -0.13\nDaily Kurt           5.04        10.90\nBest Day             7.44%       14.22%\nWorst Day            -6.19%      -14.74%\n\nMonthly Sharpe       0.77        1.77\nMonthly Sortino      1.71        4.66\nMonthly Mean (ann.)  16.49%      36.33%\nMonthly Vol (ann.)   21.45%      20.53%\nMonthly Skew         0.08        0.21\nMonthly Kurt         -1.20       -0.14\nBest Month           11.83%      17.63%\nWorst Month          -9.55%      -7.53%\n\nYearly Sharpe        0.62        0.83\nYearly Sortino       2.29        4.57\nYearly Mean          12.32%      28.12%\nYearly Vol           19.76%      33.95%\nYearly Skew          -0.98       -1.57\nYearly Kurt          -           -\nBest Year            29.43%      52.48%\nWorst Year           -9.30%      -10.66%\n\nAvg. Drawdown        -4.56%      -2.78%\nAvg. Drawdown Days   37.27       14.27\nAvg. Up Month        6.15%       5.77%\nAvg. Down Month      -4.59%      -4.11%\nWin Year %           66.67%      66.67%\nWin 12m %            92.31%      100.00%\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154291933-0243c1b1-29a9-4320-8efb-f589d3b7f220.png",alt:"ema"})))}u.isMDXComponent=!0}}]);