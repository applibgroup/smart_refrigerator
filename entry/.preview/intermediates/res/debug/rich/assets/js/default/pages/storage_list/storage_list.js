/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.hml?entry":
/*!*****************************************************************************************************!*\
  !*** E:/git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.hml?entry ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./storage_list.hml */ "./lib/json.js!./lib/template.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./storage_list.css */ "./lib/json.js!./lib/style.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./storage_list.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.js")

$app_define$('@app-component/storage_list', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/storage_list',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.css":
/*!****************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!E:/git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".st-item": {
    "width": "80px"
  },
  ".st-item-image": {
    "width": "77.62px",
    "height": "77.62px"
  },
  ".st-item-name": {
    "textAlign": "center",
    "marginTop": "9.16px",
    "fontSize": "12px",
    "color": "#FFFFFF"
  },
  ".st-item-weight": {
    "textAlign": "center",
    "marginTop": "4.41px",
    "color": "#b1b9d8",
    "fontSize": "13px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.hml":
/*!*******************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!E:/git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.hml ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/storage_list/storage_list:1",
    "className": "st-item"
  },
  "type": "div",
  "classList": [
    "st-item"
  ],
  "style": {
    "flexDirection": "column",
    "marginLeft": "25px"
  },
  "children": [
    {
      "attr": {
        "debugLine": "pages/storage_list/storage_list:2",
        "className": "st-item-image",
        "src": function () {return this.st_item_image}
      },
      "type": "image",
      "classList": [
        "st-item-image"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/storage_list/storage_list:3",
        "className": "st-item-name",
        "value": function () {return this.st_item_name}
      },
      "type": "text",
      "classList": [
        "st-item-name"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/storage_list/storage_list:4",
        "className": "st-item-weight",
        "value": function () {return this.st_item_weight}
      },
      "type": "text",
      "classList": [
        "st-item-weight"
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!E:/git/smart_refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    st_item_image: "",
    st_item_name: "",
    st_item_weight: ""
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ })

/******/ });
//# sourceMappingURL=storage_list.js.map