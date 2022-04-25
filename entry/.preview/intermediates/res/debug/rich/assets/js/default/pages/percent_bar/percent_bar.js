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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.hml?entry":
/*!***************************************************************************************************!*\
  !*** E:/git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.hml?entry ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./percent_bar.hml */ "./lib/json.js!./lib/template.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./percent_bar.css */ "./lib/json.js!./lib/style.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./percent_bar.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.js")

$app_define$('@app-component/percent_bar', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/percent_bar',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.css":
/*!**************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!E:/git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".set1_sub2": {
    "justifyContent": "space-between",
    "marginLeft": "18.37px",
    "marginRight": "30px",
    "width": "172px"
  },
  ".txt1": {
    "color": "#FFFFFF",
    "fontSize": "13px"
  },
  ".v-base": {
    "marginTop": "10px",
    "marginLeft": "18.37px",
    "backgroundSize": "cover",
    "width": "172.72px",
    "height": "8.39px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.hml":
/*!*****************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!E:/git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.hml ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/percent_bar/percent_bar:1"
  },
  "type": "div",
  "style": {
    "flexDirection": "column"
  },
  "children": [
    {
      "attr": {
        "debugLine": "pages/percent_bar/percent_bar:2",
        "className": "set1_sub2"
      },
      "type": "div",
      "classList": [
        "set1_sub2"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/percent_bar/percent_bar:3",
            "className": "txt1",
            "value": function () {return this.product_name}
          },
          "type": "text",
          "classList": [
            "txt1"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/percent_bar/percent_bar:4",
            "className": "txt1",
            "value": function () {return this.product_percent}
          },
          "type": "text",
          "classList": [
            "txt1"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/percent_bar/percent_bar:6",
        "className": "v-base"
      },
      "type": "div",
      "classList": [
        "v-base"
      ],
      "style": {
        "backgroundImage": function () {return this.bg_bar}
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/percent_bar/percent_bar:7",
            "src": function () {return this.percent_color}
          },
          "type": "image",
          "style": {
            "width": function () {return this.product_percent}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!E:/git/smart_refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {},
  props: {
    product_name: "",
    product_percent: "",
    bg_bar: "",
    percent_color: ""
  },
  onInit: function onInit() {
    this.bg_bar = "/common/images/vegetables_range_white.png";
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
//# sourceMappingURL=percent_bar.js.map