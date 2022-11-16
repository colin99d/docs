"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52029],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},53610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const s={},a=void 0,o={unversionedId:"features/stocks/sia/industry/industry",id:"features/stocks/sia/industry/industry",title:"industry",description:"See existing industries, or set industry if arg specified",source:"@site/content/terminal/features/stocks/sia/industry/industry.md",sourceDirName:"features/stocks/sia/industry",slug:"/features/stocks/sia/industry/",permalink:"/docs/terminal/features/stocks/sia/industry/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/sia/industry/industry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"exchange",permalink:"/docs/terminal/features/stocks/sia/exchange/"},next:{title:"load",permalink:"/docs/terminal/features/stocks/sia/load/"}},c={},l=[],u={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"usage: industry [-n NAME [NAME ...]] [-h]\n")),(0,i.kt)("p",null,"See existing industries, or set industry if arg specified"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"optional arguments:\n  -n NAME [NAME ...], --name NAME [NAME ...]\n                        industry to select (default: None)\n  -h, --help            show this help message (default: False)\n")),(0,i.kt)("p",null,"Available Industries to select:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Aerospace & Defense\nAerospace Defense - Major Diversified\nAerospace Defense Products & Services\nAgricultural Chemicals\nAgricultural Inputs\nAir Delivery & Freight Services\nAirlines\nAirports & Air Services\nAluminum\nApparel Manufacturing\nApparel Retail\nApparel Stores\nAsset Management\nAuto & Truck Dealerships\nAuto Dealerships\nAuto Manufacturers\nAuto Manufacturers - Major\nAuto Parts\nBanks - Diversified\nBanks - Regional\nBeverages - Brewers\nBeverages - Non-Alcoholic\nBeverages - Soft Drinks\nBeverages - Wineries & Distilleries\nBeverages - Wineries & Distillers\nBiotechnology\nBroadcasting\nBroadcasting - TV\nBuilding Materials\nBuilding Products & Equipment\nBusiness Equipment\nBusiness Equipment & Supplies\nBusiness Services\nBusiness Software & Services\nCapital Markets\nChemicals\nChemicals - Major Diversified\nCigarettes\nClosed-End Fund - Equity\nCoking Coal\nCommunication Equipment\nComputer Based Systems\nComputer Hardware\nConfectioners\nConglomerates\nConsulting Services\nConsumer Electronics\nCopper\nCredit Services\nDepartment Stores\nDiagnostics & Research\nDiscount Stores\nDiscount, Variety Stores\nDiversified Computer Systems\nDiversified Electronics\nDiversified Investments\nDiversified Machinery\nDiversified Utilities\nDrug Manufacturers - General\nDrug Manufacturers - Major\nDrug Manufacturers - Other\nDrug Manufacturers - Specialty & Generic\nDrugs - Generic\nEducation & Training Services\nElectric Utilities\nElectrical Equipment & Parts\nElectronic Components\nElectronic Equipment\nElectronic Gaming & Multimedia\nElectronics & Computer Distribution\nElectronics Wholesale\nEngineering & Construction\nEntertainment\nEntertainment - Diversified\nFarm & Construction Machinery\nFarm & Heavy Construction Machinery\nFarm Products\nFinancial Conglomerates\nFinancial Data & Stock Exchanges\nFood - Major Diversified\nFood Distribution\nFood Wholesale\nFootwear & Accessories\nFurnishings, Fixtures & Appliances\nGambling\nGaming Activities\nGeneral Building Materials\nGeneral Contractors\nGold\nGrocery Stores\nHealth Care Plans\nHealth Information Services\nHealthcare Information Services\nHealthcare Plans\nHeavy Construction\nHome Furnishings & Fixtures\nHome Improvement Retail\nHospitals\nHousehold & Personal Products\nIndependent Oil & Gas\nIndustrial Distribution\nIndustrial Equipment Wholesale\nIndustrial Metals & Minerals\nInformation Technology Services\nInfrastructure Operations\nInsurance - Diversified\nInsurance - Life\nInsurance - Property & Casualty\nInsurance - Reinsurance\nInsurance - Specialty\nInsurance Brokers\nIntegrated Freight & Logistics\nInternet Content & Information\nInternet Information Providers\nInternet Retail\nInternet Service Providers\nInternet Software & Services\nInvestment Brokerage - National\nJewelry Stores\nLeisure\nLife Insurance\nLodging\nLong Distance Carriers\nLumber & Wood Production\nLumber, Wood Production\nLuxury Goods\nMachine Tools & Accessories\nMajor Airlines\nMajor Integrated Oil & Gas\nMarine Shipping\nMarketing Services\nMedical Appliances & Equipment\nMedical Care Facilities\nMedical Devices\nMedical Distribution\nMedical Instruments & Supplies\nMedical Laboratories & Research\nMetal Fabrication\nMoney Center Banks\nMortgage Finance\nMortgage Investment\nMultimedia & Graphics Software\nNetworking & Communication Devices\nNonmetallic Mineral Mining\nOil & Gas Drilling\nOil & Gas Drilling & Exploration\nOil & Gas E&P\nOil & Gas Equipment & Services\nOil & Gas Integrated\nOil & Gas Midstream\nOil & Gas Pipelines\nOil & Gas Refining & Marketing\nOther Industrial Metals & Mining\nOther Precious Metals & Mining\nPackaged Foods\nPackaging & Containers\nPaper & Paper Products\nPersonal Products\nPersonal Services\nPharmaceutical Retailers\nPollution & Treatment Controls\nPrinted Circuit Boards\nProcessed & Packaged Goods\nProperty & Casualty Insurance\nProperty Management\nPublishing\nPublishing - Newspapers\nREIT - Diversified\nREIT - Healthcare Facilities\nREIT - Hotel & Motel\nREIT - Industrial\nREIT - Mortgage\nREIT - Office\nREIT - Residential\nREIT - Retail\nREIT - Specialty\nRailroads\nReal Estate - Development\nReal Estate - Diversified\nReal Estate Development\nReal Estate Services\nRecreational Goods, Other\nRecreational Vehicles\nRegional - Mid-Atlantic Banks\nRental & Leasing Services\nResearch Services\nResidential Construction\nResorts & Casinos\nRestaurants\nRubber & Plastics\nScientific & Technical Instruments\nSecurity & Protection Services\nSecurity Software & Services\nSemiconductor - Broad Line\nSemiconductor Equipment & Materials\nSemiconductor- Memory Chips\nSemiconductors\nShell Companies\nShipping\nSilver\nSoftware - Application\nSoftware - Infrastructure\nSolar\nSpecialized Health Services\nSpecialty Business Services\nSpecialty Chemicals\nSpecialty Industrial Machinery\nSpecialty Retail\nSpecialty Retail, Other\nStaffing & Employment Services\nStaffing & Outsourcing Services\nSteel\nSteel & Iron\nTechnical & System Software\nTelecom Services\nTextile - Apparel Clothing\nTextile - Apparel Footwear & Accessories\nTextile Industrial\nTextile Manufacturing\nThermal Coal\nTobacco\nTobacco Products, Other\nTools & Accessories\nTravel Services\nTrucking\nTrucks & Other Vehicles\nUranium\nUtilities - Diversified\nUtilities - Independent Power Producers\nUtilities - Regulated Electric\nUtilities - Regulated Gas\nUtilities - Regulated Water\nUtilities - Renewable\nWaste Management\nWater Utilities\nWireless Communications\n")))}d.isMDXComponent=!0}}]);