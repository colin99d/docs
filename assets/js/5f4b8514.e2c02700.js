"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39593],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=d(a),k=l,N=s["".concat(o,".").concat(k)]||s[k]||m[k]||r;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3177:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"brnn",description:"OpenBB SDK Function"},i="brnn",p={unversionedId:"functions/forecast/brnn",id:"functions/forecast/brnn",title:"brnn",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/forecast/brnn.md",sourceDirName:"functions/forecast",slug:"/functions/forecast/brnn",permalink:"/docs/sdk/functions/forecast/brnn",draft:!1,tags:[],version:"current",frontMatter:{title:"brnn",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"atr",permalink:"/docs/sdk/functions/forecast/atr"},next:{title:"clean",permalink:"/docs/sdk/functions/forecast/clean"}},o={},d=[{value:"forecast_brnn_model.get_brnn_data",id:"forecast_brnn_modelget_brnn_data",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"forecast_brnn_view.display_brnn_forecast",id:"forecast_brnn_viewdisplay_brnn_forecast",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"brnn"},"brnn"),(0,l.kt)("h2",{id:"forecast_brnn_modelget_brnn_data"},"forecast_brnn_model.get_brnn_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def brnn(data: Union[pd.Series, pd.DataFrame], target_column: str, n_predict: int, train_split: float, past_covariates: str, forecast_horizon: int, input_chunk_length: int, output_chunk_length: int, model_type: str, n_rnn_layers: int, dropout: float, batch_size: int, n_epochs: int, learning_rate: float, model_save_name: str, force_reset: bool, save_checkpoints: bool) -> None:\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/brnn_model.py#L21"},"Source Code")),(0,l.kt)("p",null,"Description: Performs Block RNN forecasting"),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Union","[pd.Series, pd.DataFrame]"),(0,l.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_column"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_predict"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Days to predict. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"train_split"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,l.kt)("td",{parentName:"tr",align:null},"0.85"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiple secondary columns to factor in when forecasting. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_horizon"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast horizon when performing historical forecasting. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14."),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_type"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Either a string specifying the RNN module type ("RNN", "LSTM" or "GRU"). Defaults to "LSTM".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_rnn_layers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of layers in the RNN module. Defaults to 1."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropout"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Fraction of neurons affected by Dropout. Defaults to 0.0."),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of time series (input and output sequences) used in each training pass. Defaults to 32."),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of epochs over which to train the model. Defaults to 100."),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to 1e-3."),(0,l.kt)("td",{parentName:"tr",align:null},"1e-3"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Name for model. Defaults to "brnn_model".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset (all checkpoints will be"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"discarded). Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to automatically save the untrained model and checkpoints from training. Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"list","[TimeSeries]"),(0,l.kt)("td",{parentName:"tr",align:null},"Adjusted Data series")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h1",{id:"view"},"VIEW"),(0,l.kt)("h1",{id:"brnn-1"},"brnn"),(0,l.kt)("h2",{id:"forecast_brnn_viewdisplay_brnn_forecast"},"forecast_brnn_view.display_brnn_forecast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def brnn(data: Union[pd.Series, pd.DataFrame], target_column: str, dataset_name: str, n_predict: int, past_covariates: str, train_split: float, forecast_horizon: int, input_chunk_length: int, output_chunk_length: int, model_type: str, n_rnn_layers: int, dropout: float, batch_size: int, n_epochs: int, learning_rate: float, model_save_name: str, force_reset: bool, save_checkpoints: bool, export: str, residuals: bool, forecast_only: bool, start_date: Union[datetime.datetime, NoneType], end_date: Union[datetime.datetime, NoneType], naive: bool, export_pred_raw: bool, external_axes: Union[List[axes], NoneType]) -> None:\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/brnn_view.py#L19"},"Source Code")),(0,l.kt)("p",null,"Description: Display BRNN forecast"),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Union","[pd.Series, pd.DataFrame]"),(0,l.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_column"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataset_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the ticker to be predicted"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_predict"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Days to predict. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"train_split"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,l.kt)("td",{parentName:"tr",align:null},"0.85"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiple secondary columns to factor in when forecasting. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_horizon"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast horizon when performing historical forecasting. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14."),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_type"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Either a string specifying the RNN module type ("RNN", "LSTM" or "GRU"). Defaults to "LSTM".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_rnn_layers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of layers in the RNN module. Defaults to 1."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropout"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Fraction of neurons affected by Dropout. Defaults to 0.0."),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of time series (input and output sequences) used in each training pass. Defaults to 32."),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of epochs over which to train the model. Defaults to 101."),(0,l.kt)("td",{parentName:"tr",align:null},"101"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to 1e-3."),(0,l.kt)("td",{parentName:"tr",align:null},"1e-3"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Name for model. Defaults to "brnn_model".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(all checkpoints will be discarded). Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to automatically save the untrained model and checkpoints from training."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"export"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"residuals"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show residuals for the model. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_only"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to only show dates in the forecasting range. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[datetime]"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting date to perform analysis, data before this is trimmed. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[datetime]"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending date to perform analysis, data after this is trimmed. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"naive"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the naive baseline. This just assumes the closing price will be the same"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"as the previous day's closing price. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.axes]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"External axes to plot on"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"None"),(0,l.kt)("h2",{id:"examples-1"},"Examples"))}m.isMDXComponent=!0}}]);