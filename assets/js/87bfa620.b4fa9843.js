"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"dwat",description:"OpenBB Terminal Function"},i="Econometrics",l={unversionedId:"features/econometrics/dwat",id:"features/econometrics/dwat",title:"dwat",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/econometrics/dwat.md",sourceDirName:"features/econometrics",slug:"/features/econometrics/dwat",permalink:"/terminal/features/econometrics/dwat",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/econometrics/dwat.md",tags:[],version:"current",frontMatter:{title:"dwat",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"desc",permalink:"/terminal/features/econometrics/desc"},next:{title:"export",permalink:"/terminal/features/econometrics/export"}},s={},c=[{value:"dwat",id:"dwat",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"econometrics"},"Econometrics"),(0,a.kt)("h2",{id:"dwat"},"dwat"),(0,a.kt)("h3",{id:"description"},"Description:"),(0,a.kt)("p",null,"Show autocorrelation tests from Durbin-Watson. Needs OLS to be run in advance with independent and dependent variables"),(0,a.kt)("h3",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: dwat [-p]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plot"),(0,a.kt)("td",{parentName:"tr",align:null},"Plot the residuals"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\n2022 Feb 24, 05:59 (\u2728) /econometrics/ $ ols -d adj_close-msft -i adj_close-aapl -i adj_close-googl -i adj_close-tsla\n                            OLS Regression Results                            \n==============================================================================\nDep. Variable:         adj_close_msft   R-squared:                       0.977\nModel:                            OLS   Adj. R-squared:                  0.977\nMethod:                 Least Squares   F-statistic:                 1.068e+04\nDate:                Thu, 24 Feb 2022   Prob (F-statistic):               0.00\nTime:                        12:00:01   Log-Likelihood:                -2830.6\nNo. Observations:                 759   AIC:                             5669.\nDf Residuals:                     755   BIC:                             5688.\nDf Model:                           3                                         \nCovariance Type:            nonrobust                                         \n===================================================================================\n                      coef    std err          t      P>|t|      [0.025      0.975]\n-----------------------------------------------------------------------------------\nIntercept          27.7984      2.166     12.832      0.000      23.546      32.051\nadj_close_aapl      0.8662      0.034     25.503      0.000       0.800       0.933\nadj_close_googl     0.0508      0.002     30.374      0.000       0.048       0.054\nadj_close_tsla     -0.0007      0.004     -0.181      0.856      -0.009       0.007\n==============================================================================\nOmnibus:                       41.445   Durbin-Watson:                   0.044\nProb(Omnibus):                  0.000   Jarque-Bera (JB):               47.398\nSkew:                           0.612   Prob(JB):                     5.10e-11\nKurtosis:                       2.995   Cond. No.                     1.16e+04\n==============================================================================\n\nNotes:\n[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n[2] The condition number is large, 1.16e+04. This might indicate that there are\nstrong multicollinearity or other numerical problems.\n\n2022 Feb 24, 06:00 (\u2728) /statistics/ $ dwat -p\nThe result 0.04 is outside the range 1.5 and 2.5 and therefore autocorrelation can be problematic.\nPlease consider lags of the dependent or independent variable.\n\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/155514788-caaa65a2-1f5f-41d0-8db2-06e682d5a53e.png",alt:"durbin_watson example"})))}p.isMDXComponent=!0}}]);