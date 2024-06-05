"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[569],{"./src/shared/ui/switcher/ToggleSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"shared/ToggleSwitch",component:__webpack_require__("./src/shared/ui/switcher/ToggleSwitch.tsx").Z,tags:["autodocs"]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/localization/resources.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>resource});var resource={en:{components:{header:{theme:"change theme",head:"head",language:"change language"},testLanguage:{text:"change language"}}},ru:{components:{header:{theme:"сменить тему",head:"шапка",language:"сменить язык",text:"сменить язык"},testLanguage:{text:"сменить язык"}}}}},"./src/shared/ui/switcher/ToggleSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>switcher_ToggleSwitch});var react=__webpack_require__("./node_modules/react/index.js"),LanguageContext=__webpack_require__("./src/app/context/LanguageContext.tsx"),resources=__webpack_require__("./src/app/localization/resources.ts"),ThemeContext=__webpack_require__("./src/app/context/ThemeContext.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),toggleSwitch=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/switcher/toggleSwitch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(toggleSwitch.Z,options);toggleSwitch.Z&&toggleSwitch.Z.locals&&toggleSwitch.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ToggleSwitch=function ToggleSwitch(){var language=(0,react.useContext)(LanguageContext.A).language,_useContext2=(0,react.useContext)(ThemeContext.N),setTheme=(_useContext2.theme,_useContext2.setTheme),_useState2=_slicedToArray((0,react.useState)(!1),2),isToggled=_useState2[0],setIsToggled=_useState2[1];return(0,react.useEffect)((function(){return setTheme(isToggled?"dark":"light")}),[isToggled]),(0,jsx_runtime.jsxs)("div",{className:"switcher",children:[(0,jsx_runtime.jsxs)("label",{className:"toggle-switch",children:[(0,jsx_runtime.jsx)("input",{id:"changeTheme",type:"checkbox",checked:isToggled,onChange:function onToggle(){setIsToggled((function(toggle){return!toggle}))}}),(0,jsx_runtime.jsx)("span",{className:"switch"})]}),(0,jsx_runtime.jsx)("label",{htmlFor:"changeTheme",children:resources.v[language].components.header.theme})]})};ToggleSwitch.displayName="ToggleSwitch";const switcher_ToggleSwitch=ToggleSwitch},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/switcher/toggleSwitch.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.toggle-switch{position:relative;display:inline-block;width:50px;height:25px}.toggle-switch input[type=checkbox]{display:none}.toggle-switch .switch{position:absolute;cursor:pointer;background-color:#ccc;border-radius:25px;top:0;right:0;bottom:0;left:0;transition:background-color .2s ease}.toggle-switch .switch::before{position:absolute;content:"";left:2px;top:2px;width:21px;height:21px;background-color:#aaa;border-radius:50%;transition:transform .3s ease}.toggle-switch input[type=checkbox]:checked+.switch::before{transform:translateX(25px);background-color:#69c}.toggle-switch input[type=checkbox]:checked+.switch{background-color:#369}.switcher{display:flex;flex-direction:column;align-items:center;justify-content:center}',"",{version:3,sources:["webpack://./src/shared/ui/switcher/toggleSwitch.scss"],names:[],mappings:"AAAA,eACI,iBAAA,CACA,oBAAA,CACA,UAAA,CACA,WAAA,CAEF,oCACE,YAAA,CAEF,uBACE,iBAAA,CACA,cAAA,CACA,qBAAA,CACA,kBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,oCAAA,CAEF,+BACE,iBAAA,CACA,UAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,6BAAA,CAEF,4DACE,0BAAA,CACA,qBAAA,CAEF,oDACE,qBAAA,CAEF,UACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['.toggle-switch {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 25px;\n  }\n  .toggle-switch input[type="checkbox"] {\n    display: none;\n  }\n  .toggle-switch .switch {\n    position: absolute;\n    cursor: pointer;\n    background-color: #ccc;\n    border-radius: 25px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    transition: background-color 0.2s ease;\n  }\n  .toggle-switch .switch::before {\n    position: absolute;\n    content: "";\n    left: 2px;\n    top: 2px;\n    width: 21px;\n    height: 21px;\n    background-color: #aaa;\n    border-radius: 50%;\n    transition: transform 0.3s ease;\n  }\n  .toggle-switch input[type="checkbox"]:checked + .switch::before {\n    transform: translateX(25px);\n    background-color: #6699cc;\n  }\n  .toggle-switch input[type="checkbox"]:checked + .switch {\n    background-color: #336699;\n  }\n  .switcher{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);