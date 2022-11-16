"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84413],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(a),k=l,N=d["".concat(u,".").concat(k)]||d[k]||m[k]||r;return a?n.createElement(N,i(i({ref:e},p),{},{components:a})):n.createElement(N,i({ref:e},p))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18354:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),i=a(85162);const o={title:"nhits",description:"OpenBB SDK Function"},u="nhits",s={unversionedId:"functions/forecast/nhits",id:"functions/forecast/nhits",title:"nhits",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/forecast/nhits.md",sourceDirName:"functions/forecast",slug:"/functions/forecast/nhits",permalink:"/sdk/functions/forecast/nhits",draft:!1,tags:[],version:"current",frontMatter:{title:"nhits",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"nbeats",permalink:"/sdk/functions/forecast/nbeats"},next:{title:"plot",permalink:"/sdk/functions/forecast/plot"}},p={},m=[{value:"openbb_terminal.forecast.nhits_model.get_nhits_data",id:"openbb_terminalforecastnhits_modelget_nhits_data",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"openbb_terminal.forecast.nhits_view.display_nhits_forecast",id:"openbb_terminalforecastnhits_viewdisplay_nhits_forecast",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],d={toc:m};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nhits"},"nhits"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,l.kt)("h2",{id:"openbb_terminalforecastnhits_modelget_nhits_data"},"openbb_terminal.forecast.nhits_model.get_nhits_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/forecast/nhits_model.py'",title:"'openbb_terminal/forecast/nhits_model.py'"},"def get_nhits_data(data: Union[pd.Series, pd.DataFrame], target_column: str, n_predict: int, train_split: float, past_covariates: str, forecast_horizon: int, input_chunk_length: int, output_chunk_length: int, num_stacks: int, num_blocks: int, num_layers: int, layer_widths: int, pooling_kernel_sizes: Optional[Tuple[Tuple[int]]], n_freq_downsample: Optional[Tuple[Tuple[int]]], dropout: float, activation: str, max_pool_1d: bool, batch_size: int, n_epochs: int, learning_rate: float, model_save_name: str, force_reset: bool, save_checkpoints: bool) -> Tuple\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/nhits_model.py#L22"},"Source Code")),(0,l.kt)("p",null,"Description: Performs Nhits forecasting"),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Union","[pd.Series, pd.DataFrame]"),(0,l.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_column"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_predict"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Days to predict. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"train_split"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,l.kt)("td",{parentName:"tr",align:null},"0.85"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiple secondary columns to factor in when forecasting. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_horizon"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast horizon when performing historical forecasting. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14."),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_stacks"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of stacks that make up the whole model."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of blocks making up every stack."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_layers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of fully connected layers preceding the final forking layers in each block",(0,l.kt)("br",null),"of every stack."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layer_widths"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines the number of neurons that make up each fully connected layer in each",(0,l.kt)("br",null),"block of every stack. If a list is passed, it must have a length equal to num_stacks",(0,l.kt)("br",null),"and every entry in that list corresponds to the layer width of the corresponding stack.",(0,l.kt)("br",null),"If an integer is passed, every stack will have blocks with FC layers of the same width."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pooling_kernel_size"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[Tuple[Tuple","[int]","]]:"),(0,l.kt)("td",{parentName:"tr",align:null},"If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),",(0,l.kt)("br",null),"specifying the kernel size for each block in each stack used for the input pooling",(0,l.kt)("br",null),"layer. If left to None, some default values will be used based on input_chunk_length."),(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_freq_downsample"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[Tuple[Tuple","[int]","]]"),(0,l.kt)("td",{parentName:"tr",align:null},"If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),",(0,l.kt)("br",null),"specifying the downsampling factors before interpolation, for each block in each stack.",(0,l.kt)("br",null),"If left to None, some default values will be used based on output_chunk_length."),(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropout"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The dropout probability to be used in fully connected layers."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activation"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported activations: ","[\u2018ReLU\u2019,\u2019RReLU\u2019, \u2018PReLU\u2019, \u2018Softplus\u2019, \u2018Tanh\u2019, \u2018SELU\u2019, \u2018LeakyReLU\u2019, \u2018Sigmoid\u2019]"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_pool_1d"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Use max_pool_1d pooling. False uses AvgPool1d."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of time series (input and output sequences) used in each training pass. Defaults to 32."),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of epochs over which to train the model. Defaults to 100."),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to 1e-3."),(0,l.kt)("td",{parentName:"tr",align:null},"1e-3"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Name for model. Defaults to "brnn_model".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset (all checkpoints will be",(0,l.kt)("br",null),"discarded). Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to automatically save the untrained model and checkpoints from training. Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tuple[List","[TimeSeries]",", List","[TimeSeries]",", List","[TimeSeries]",", Optional","[float]",", type","[NHiTSModel]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Adjusted Data series,",(0,l.kt)("br",null),"Historical forecast by best RNN model,",(0,l.kt)("br",null),"list of Predictions,",(0,l.kt)("br",null),"Mean average precision error,",(0,l.kt)("br",null),"Best BRNN Model.")))),(0,l.kt)("h2",{id:"examples"},"Examples")),(0,l.kt)(i.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,l.kt)("h2",{id:"openbb_terminalforecastnhits_viewdisplay_nhits_forecast"},"openbb_terminal.forecast.nhits_view.display_nhits_forecast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/forecast/nhits_view.py'",title:"'openbb_terminal/forecast/nhits_view.py'"},"def display_nhits_forecast(data: Union[pd.Series, pd.DataFrame], target_column: str, dataset_name: str, n_predict: int, past_covariates: str, train_split: float, forecast_horizon: int, input_chunk_length: int, output_chunk_length: int, num_stacks: int, num_blocks: int, num_layers: int, layer_widths: int, pooling_kernel_sizes: Optional[Tuple[Tuple[int]]], n_freq_downsample: Optional[Tuple[Tuple[int]]], dropout: float, activation: str, max_pool_1d: bool, batch_size: int, n_epochs: int, learning_rate: float, model_save_name: str, force_reset: bool, save_checkpoints: bool, export: str, residuals: bool, forecast_only: bool, start_date: Optional[datetime.datetime], end_date: Optional[datetime.datetime], naive: bool, export_pred_raw: bool, external_axes: Optional[List[axes]]) -> None\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/nhits_view.py#L20"},"Source Code")),(0,l.kt)("p",null,"Description: Display Nhits forecast"),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Union","[pd.Series, pd.DataFrame]"),(0,l.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_column"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataset_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the ticker to be predicted"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_predict"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Days to predict. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"train_split"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,l.kt)("td",{parentName:"tr",align:null},"0.85"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiple secondary columns to factor in when forecasting. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_horizon"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast horizon when performing historical forecasting. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14."),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_stacks"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of stacks that make up the whole model."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of blocks making up every stack."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_layers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of fully connected layers preceding the final forking layers in each block",(0,l.kt)("br",null),"of every stack."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layer_widths"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines the number of neurons that make up each fully connected layer in each",(0,l.kt)("br",null),"block of every stack. If a list is passed, it must have a length equal to num_stacks",(0,l.kt)("br",null),"and every entry in that list corresponds to the layer width of the corresponding stack.",(0,l.kt)("br",null),"If an integer is passed, every stack will have blocks with FC layers of the same width."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pooling_kernel_size"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[Tuple[Tuple","[int]","]]"),(0,l.kt)("td",{parentName:"tr",align:null},"If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),",(0,l.kt)("br",null),"specifying the kernel size for each block in each stack used for the input pooling",(0,l.kt)("br",null),"layer. If left to None, some default values will be used based on input_chunk_length."),(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_freq_downsample"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[Tuple[Tuple","[int]","]]"),(0,l.kt)("td",{parentName:"tr",align:null},"If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),",(0,l.kt)("br",null),"specifying the downsampling factors before interpolation, for each block in each stack.",(0,l.kt)("br",null),"If left to None, some default values will be used based on output_chunk_length."),(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropout"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The dropout probability to be used in fully connected layers."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activation"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported activations: [","[\u2018ReLU\u2019,\u2019RReLU\u2019, \u2018PReLU\u2019, \u2018Softplus\u2019, \u2018Tanh\u2019, \u2018SELU\u2019, \u2018LeakyReLU\u2019, \u2018Sigmoid\u2019]"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_pool_1d"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Use max_pool_1d pooling. False uses AvgPool1d."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of time series (input and output sequences) used in each training pass. Defaults to 32."),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of epochs over which to train the model. Defaults to 100."),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to 1e-3."),(0,l.kt)("td",{parentName:"tr",align:null},"1e-3"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Name for model. Defaults to "brnn_model".'),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset",(0,l.kt)("br",null),"(all checkpoints will be discarded). Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to automatically save the untrained model and checkpoints from training.",(0,l.kt)("br",null),"Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"export"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"residuals"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show residuals for the model. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_only"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to only show dates in the forecasting range. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[datetime]"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting date to perform analysis, data before this is trimmed. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[datetime]"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending date to perform analysis, data after this is trimmed. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"naive"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the naive baseline. This just assumes the closing price will be the same",(0,l.kt)("br",null),"as the previous day's closing price. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.axes]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"External axes to plot on"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"This function does not return anything"),(0,l.kt)("h2",{id:"examples-1"},"Examples"))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),l=a(67294),r=a(86010),i=a(72389),o=a(67392),u=a(7094),s=a(12466);const p="tabList__CuJ",m="tabItem_LNqP";function d(t){var e;const{lazy:a,block:i,defaultValue:d,values:k,groupId:N,className:g}=t,c=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=k??c.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),f=(0,o.l)(h,((t,e)=>t.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(e=c.find((t=>t.props.default)))?void 0:e.props.value)??c[0].props.value;if(null!==b&&!h.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:y}=(0,u.U)(),[v,T]=(0,l.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:F}=(0,s.o5)();if(null!=N){const t=_[N];null!=t&&t!==v&&h.some((e=>e.value===t))&&T(t)}const D=t=>{const e=t.currentTarget,a=w.indexOf(e),n=h[a].value;n!==v&&(F(e),T(n),null!=N&&y(N,String(n)))},O=t=>{var e;let a=null;switch(t.key){case"Enter":D(t);break;case"ArrowRight":{const e=w.indexOf(t.currentTarget)+1;a=w[e]??w[0];break}case"ArrowLeft":{const e=w.indexOf(t.currentTarget)-1;a=w[e]??w[w.length-1];break}}null==(e=a)||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},h.map((t=>{let{value:e,label:a,attributes:i}=t;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:t=>w.push(t),onKeyDown:O,onClick:D},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":v===e})}),a??e)}))),a?(0,l.cloneElement)(c.filter((t=>t.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},c.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==v})))))}function k(t){const e=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(e)},t))}}}]);