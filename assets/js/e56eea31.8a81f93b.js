"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={},r=void 0,s={unversionedId:"features/stocks/options/binom/binom",id:"features/stocks/options/binom/binom",title:"binom",description:'Shows the value of an option using binomial option pricing. Can also show raw data and provide a graph with predicted underlying asset ending values. The binomial options model calculates how big an up step or down step in the next time period will likely be. Then it creates a tree doing this at each period. The end results of this is a tree with possible asset values at each "step". For our calculations we use a day as our "step" time period. We then take all of the expected values at the finishing date and use this to begin a tree of option values at each step. The ending results is the value of the option today.',source:"@site/content/terminal/features/stocks/options/binom/binom.md",sourceDirName:"features/stocks/options/binom",slug:"/features/stocks/options/binom/",permalink:"/terminal/features/stocks/options/binom/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/options/binom/binom.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"options",permalink:"/terminal/features/stocks/options/"},next:{title:"calc",permalink:"/terminal/features/stocks/options/calc/"}},p={},l=[],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: binom [-s STRIKE] [-p] [-e] [-x] [--plot] [-v VOLATILITY] [-h]\n")),(0,a.kt)("p",null,'Shows the value of an option using binomial option pricing. Can also show raw data and provide a graph with predicted underlying asset ending values. The binomial options model calculates how big an up step or down step in the next time period will likely be. Then it creates a tree doing this at each period. The end results of this is a tree with possible asset values at each "step". For our calculations we use a day as our "step" time period. We then take all of the expected values at the finishing date and use this to begin a tree of option values at each step. The ending results is the value of the option today.'),(0,a.kt)("p",null,"The up step is calculated by taking e to the power of volatility times the square root of the change in time during the step. This is the percentage we expect the stock to increase if there is an upward movement. The down step is the inverse of the up step. The probability of the up step is calculated by taking e to the power of the risk free rate minus the dividend yield. This is multiplied by the change in time for the step and then subtracted by the expected downward movement. This number is then divided by the up step subtracted by then down step. The probability of a downward step is just one minus the probability of an upward step."),(0,a.kt)("p",null,"Formulas:\nup_step = e ^ (volatility * (delta_t ^ (1 / 2)))\ndown_step = 1 / up_step"),(0,a.kt)("p",null,"prob_up = (e ^ ((risk_free - div_yield) * delta_t) - down_step) / (up_step - down_step)\nprob_down = 1 - prob_up"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -s STRIKE, --strike STRIKE\n                        Strike price for option shown (default: 0)\n  -p, --put             Value a put instead of a call (default: False)\n  -e, --european        Value a European option instead of an American one (default: False)\n  -x, --xlsx            Export an excel spreadsheet with binomial pricing data (default: False)\n  --plot                Plot expected ending values (default: False)\n  -v VOLATILITY, --volatility VOLATILITY\n                        Underlying asset annualized volatility. (None indicates that the historical volatility is being used) (default: None)\n   -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Feb 16, 08:40 (\u2728) /stocks/options/ $ binom -s 3100 -e --plot\n\nAMZN call at $3100.00 expiring on 2022-03-25 is worth $136.85\n\n2022 Feb 16, 08:41 (\u2728) /stocks/options/ $ binom -s 3500 -p --plot\n\nAMZN put at $3500.00 expiring on 2022-03-25 is worth $389.72\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154276789-b6786517-3bea-4aa7-9d2e-e6669dd82587.png",alt:"binom"})))}c.isMDXComponent=!0}}]);