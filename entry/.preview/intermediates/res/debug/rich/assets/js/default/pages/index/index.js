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
/******/ 	return __webpack_require__(__webpack_require__.s = "C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/json.js!./lib/style.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\index\\index.css":
/*!*************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/index/index.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "width": "100%",
    "height": "100%"
  },
  ".status-bar": {
    "marginLeft": "561.66px",
    "marginTop": "40.111px",
    "color": "#F5F5DC"
  },
  ".wifi": {
    "alignItems": "center",
    "backgroundSize": "cover",
    "height": "17.04px",
    "width": "21.53px"
  },
  ".apps": {
    "marginLeft": "13.9px",
    "alignItems": "center",
    "backgroundSize": "cover",
    "height": "16.52px",
    "width": "16.52px"
  },
  ".lock": {
    "marginLeft": "12.69px",
    "alignItems": "center",
    "backgroundSize": "cover",
    "height": "16.74px",
    "width": "13.95px"
  },
  ".time": {
    "fontSize": "18px",
    "marginLeft": "13.05px"
  },
  ".user-name": {
    "marginTop": "33.85px",
    "marginLeft": "48px",
    "fontSize": "30px",
    "color": "#b1b9d8"
  },
  ".set1": {
    "marginLeft": "48px",
    "marginTop": "32.17px"
  },
  ".time-bg": {
    "flexDirection": "column",
    "backgroundSize": "cover",
    "height": "231.49px",
    "width": "231.49px"
  },
  ".location-icon": {
    "marginTop": "30px",
    "marginLeft": "30px",
    "height": "18px",
    "width": "13px"
  },
  ".location-city": {
    "marginTop": "30px",
    "left": "10px",
    "fontSize": "15px"
  },
  ".weather": {
    "marginTop": "30px",
    "width": "23.4px",
    "height": "20.83px"
  },
  ".time-txt": {
    "color": "#FFFFFF",
    "marginTop": "30px",
    "fontWeight": "bold",
    "width": "100%",
    "textAlign": "center"
  },
  ".day-date": {
    "fontSize": "15px",
    "marginTop": "10px",
    "color": "#b1b9d8",
    "width": "100%",
    "textAlign": "center"
  },
  ".temp-page": {
    "marginRight": "30px",
    "marginLeft": "30px",
    "top": "50px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "color": "#FFFFFF",
    "width": "300px"
  },
  ".temp": {
    "fontSize": "18px"
  },
  ".page": {
    "marginTop": "10px",
    "marginLeft": "3px",
    "width": "6.17px",
    "height": "6.17px"
  },
  ".music-bg": {
    "alignItems": "center",
    "backgroundSize": "cover",
    "marginTop": "10.745px",
    "marginLeft": "5.4325px",
    "height": "210px",
    "width": "210px"
  },
  ".dreams-bg": {
    "marginTop": "18.38px",
    "height": "98.49px",
    "width": "98.49px"
  },
  ".song-name": {
    "height": "17px",
    "width": "48px",
    "textAlign": "center",
    "fontSize": "15px",
    "marginTop": "6.59px"
  },
  ".song-genre": {
    "fontSize": "11px",
    "marginTop": "2.28px"
  },
  ".set1_sub": {
    "flexDirection": "row",
    "alignContent": "center"
  },
  ".shuffle": {
    "marginTop": "19.02px",
    "height": "12.52px",
    "width": "16.7px"
  },
  ".back": {
    "marginTop": "15.48px",
    "marginLeft": "23.92px",
    "height": "18.78px",
    "width": "18.78px"
  },
  ".play": {
    "marginTop": "16.52px",
    "marginLeft": "20.82px",
    "height": "16.7px",
    "width": "14.61px"
  },
  ".next": {
    "marginTop": "15.92px",
    "marginLeft": "20.82px",
    "height": "18.78px",
    "width": "18.78px"
  },
  ".range": {
    "marginTop": "16.96px",
    "marginLeft": "17.92px",
    "height": "16.7px",
    "width": "21.91px"
  },
  ".food-remaining": {
    "justifyContent": "space-between",
    "backgroundSize": "cover",
    "marginTop": "10.745px",
    "marginLeft": "16.1775px",
    "height": "210px",
    "width": "210px",
    "flexDirection": "column",
    "paddingBottom": "20px"
  },
  ".food-remain": {
    "color": "#b1b9d8",
    "marginTop": "17.56px",
    "marginLeft": "18.37px",
    "fontSize": "15px"
  },
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
    "marginLeft": "18.37px",
    "backgroundSize": "cover",
    "width": "172.72px",
    "height": "8.39px"
  },
  ".f-base": {
    "marginLeft": "18.37px",
    "backgroundSize": "cover",
    "width": "172.72px",
    "height": "8.39px"
  },
  ".m-base": {
    "marginLeft": "18.37px",
    "backgroundSize": "cover",
    "width": "172.72px",
    "height": "8.39px",
    "marginBottom": "17.59px"
  },
  ".storage-settings": {
    "marginLeft": "48px",
    "marginTop": "30.92px",
    "fontSize": "30px"
  },
  ".set2": {
    "marginTop": "25.72px",
    "marginLeft": "48.22px"
  },
  ".storage-tab": {
    "backgroundSize": "cover",
    "color": "#F5F5DC",
    "width": "441.04px",
    "height": "210px"
  },
  ".your-storage-markers": {
    "justifyContent": "space-between",
    "width": "392.5px",
    "marginLeft": "20.97px"
  },
  ".storage-txt-1": {
    "height": "30px",
    "marginTop": "17.87px",
    "fontSize": "18px"
  },
  ".view-icon": {
    "marginTop": "25.37px",
    "width": "20.34px",
    "height": "9.76px"
  },
  ".view-txt": {
    "marginTop": "20.87px",
    "marginLeft": "5.64px",
    "fontSize": "14px"
  },
  ".add-icon": {
    "marginTop": "25.37px",
    "marginLeft": "11.82px",
    "height": "9.76px",
    "width": "9.76px"
  },
  ".add-txt": {
    "marginTop": "21.52px",
    "marginLeft": "3.89px",
    "fontSize": "14px"
  },
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
  },
  ".help": {
    "backgroundSize": "cover",
    "marginLeft": "21.67px",
    "height": "210px",
    "width": "209.07px"
  },
  ".audio-assist1": {
    "marginTop": "18.67px",
    "marginLeft": "22.28px",
    "width": "150px",
    "fontSize": "20px"
  },
  ".mic": {
    "marginTop": "25.39px",
    "marginLeft": "84.78px",
    "width": "38.51px",
    "height": "52.76px"
  },
  ".audio-assist2": {
    "textAlign": "center",
    "marginTop": "13.96px",
    "width": "100%",
    "fontSize": "13px"
  },
  ".set3": {
    "marginLeft": "48.22px",
    "marginTop": "20.53px",
    "height": "160.45px",
    "width": "671.78px",
    "color": "#F5F5DC"
  },
  ".refri-door": {
    "flexDirection": "column",
    "backgroundSize": "cover",
    "height": "160.45px",
    "width": "160.45px"
  },
  ".refri-door-text": {
    "marginTop": "10px",
    "marginLeft": "12px",
    "fontSize": "19px",
    "width": "110px",
    "height": "60px"
  },
  ".refri-door-status": {
    "marginTop": "5px",
    "marginLeft": "12px",
    "fontSize": "12px"
  },
  ".refri-door-status-button": {
    "marginTop": "10px",
    "alignContent": "center",
    "marginLeft": "12px",
    "width": "100px",
    "height": "35px"
  },
  ".refri-door-status-button-txt": {
    "marginTop": "10px",
    "textAlign": "center",
    "fontSize": "15px",
    "width": "100%"
  },
  ".superfreeze": {
    "flexDirection": "column",
    "marginLeft": "9.99px",
    "backgroundSize": "cover",
    "height": "160.45px",
    "width": "160.45px"
  },
  ".superfreeze-toggle": {
    "marginLeft": "9.99px",
    "marginTop": "40px",
    "fontSize": "15px"
  },
  ".bottom-left-box": {
    "flexDirection": "column",
    "marginLeft": "9.99px",
    "backgroundSize": "cover",
    "height": "160.45px",
    "width": "160.45px"
  },
  ".bottom-left-box-toggle": {
    "marginLeft": "9.99px",
    "marginTop": "40px",
    "fontSize": "15px"
  },
  ".bottom-right-box": {
    "flexDirection": "column",
    "marginLeft": "9.99px",
    "backgroundSize": "cover",
    "height": "160.45px",
    "width": "160.45px"
  },
  ".bottom-right-box-toggle": {
    "marginLeft": "9.99px",
    "marginTop": "40px",
    "fontSize": "15px"
  },
  ".crisp-fresh": {
    "flexDirection": "column",
    "marginLeft": "9.99px",
    "backgroundSize": "cover",
    "height": "160.45px",
    "width": "160.45px"
  },
  ".crisp-fresh-toggle": {
    "marginLeft": "9.99px",
    "marginTop": "40px",
    "fontSize": "15px"
  },
  ".set4": {
    "marginTop": "35.62px",
    "marginLeft": "48px"
  },
  ".dinner-text": {
    "fontSize": "30px"
  },
  ".set5": {
    "justifyContent": "space-between",
    "marginTop": "16.05px",
    "marginLeft": "48px",
    "width": "671.88px"
  },
  ".basic-recepie": {
    "backgroundSize": "cover",
    "height": "217.34px",
    "width": "217.34px"
  },
  ".recp-img": {
    "marginTop": "22.45px",
    "marginLeft": "13.98px",
    "width": "99.68px",
    "height": "99.68px"
  },
  ".recp-img-fav": {
    "width": "22.31px",
    "height": "18.82px",
    "marginLeft": "59.85px",
    "marginTop": "25.03px"
  },
  ".recp-name": {
    "marginLeft": "20.93px",
    "marginTop": "16.25px",
    "fontSize": "20px"
  },
  ".clock": {
    "marginTop": "16.87px",
    "marginLeft": "20.54px",
    "width": "18px",
    "height": "18px"
  },
  ".recp-settings": {
    "justifyContent": "space-between",
    "marginTop": "16.87px",
    "marginRight": "20.54px",
    "marginLeft": "8.27px",
    "width": "150.88px"
  },
  ".recp-time": {
    "color": "#999999",
    "fontSize": "13px"
  },
  ".recp-type": {
    "color": "#999999",
    "fontSize": "13px"
  },
  ".set6": {
    "alignItems": "center",
    "backgroundSize": "cover",
    "marginTop": "14.69px",
    "marginLeft": "48px",
    "width": "672px",
    "height": "82.94px"
  },
  ".home-icon": {
    "marginLeft": "65.53px",
    "width": "33.07px",
    "height": "33.32px"
  },
  ".home-txt": {
    "marginTop": "6.99px",
    "marginLeft": "63px",
    "color": "#FFFFFF",
    "fontSize": "15px"
  },
  ".storage-icon": {
    "marginLeft": "128.79px",
    "width": "42.91px",
    "height": "33.32px"
  },
  ".storage-txt": {
    "marginLeft": "125px",
    "marginTop": "6.99px",
    "color": "#2e3650",
    "fontSize": "15px"
  },
  ".music-icon": {
    "marginLeft": "133px",
    "width": "27.63px",
    "height": "33.32px"
  },
  ".music-txt": {
    "marginLeft": "126px",
    "marginTop": "6.99px",
    "color": "#2e3650",
    "fontSize": "15px"
  },
  ".settings-icon": {
    "marginLeft": "123.97px",
    "width": "33.14px",
    "height": "33.32px"
  },
  ".settings-txt": {
    "marginLeft": "112px",
    "marginTop": "6.99px",
    "color": "#2e3650",
    "fontSize": "15px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\percent_bar\\percent_bar.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.css ***!
  \*************************************************************************************************************************************************/
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

/***/ "./lib/json.js!./lib/style.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\recipie_block\\recipie_block.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/recipie_block/recipie_block.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "width": "100%",
    "height": "100%"
  },
  ".basic-recepie": {
    "backgroundSize": "cover",
    "height": "217.34px",
    "width": "217.34px"
  },
  ".recp-img": {
    "marginTop": "22.45px",
    "marginLeft": "13.98px",
    "width": "99.68px",
    "height": "99.68px"
  },
  ".recp-img-fav": {
    "width": "22.31px",
    "height": "18.82px",
    "marginLeft": "59.85px",
    "marginTop": "25.03px"
  },
  ".recp-name": {
    "marginLeft": "20.93px",
    "marginTop": "16.25px",
    "fontSize": "20px"
  },
  ".clock": {
    "marginTop": "16.87px",
    "marginLeft": "20.54px",
    "width": "18px",
    "height": "18px"
  },
  ".recp-settings": {
    "justifyContent": "space-between",
    "marginTop": "16.87px",
    "marginRight": "20.54px",
    "marginLeft": "8.27px",
    "width": "150.88px"
  },
  ".recp-time": {
    "color": "#999999",
    "fontSize": "13px"
  },
  ".recp-type": {
    "color": "#999999",
    "fontSize": "13px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\storage_list\\storage_list.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.css ***!
  \***************************************************************************************************************************************************/
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

/***/ "./lib/json.js!./lib/template.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\index\\index.hml":
/*!****************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/index/index.hml ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:4",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "style": {
    "backgroundImage": function () {return this.bg}
  },
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:5",
        "className": "status-bar"
      },
      "type": "div",
      "classList": [
        "status-bar"
      ],
      "style": {
        "flexDirection": "row"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:6",
            "className": "wifi",
            "src": function () {return this.wifi}
          },
          "type": "image",
          "classList": [
            "wifi"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:7",
            "className": "apps",
            "src": function () {return this.apps}
          },
          "type": "image",
          "classList": [
            "apps"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:8",
            "className": "lock",
            "src": function () {return this.lock}
          },
          "type": "image",
          "classList": [
            "lock"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:9",
            "className": "time",
            "value": function () {return this.time}
          },
          "type": "text",
          "classList": [
            "time"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:12",
        "className": "user-name",
        "value": function () {return decodeURI('Hey%20') + (this.username)}
      },
      "type": "text",
      "classList": [
        "user-name"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:14",
        "className": "set1"
      },
      "type": "div",
      "classList": [
        "set1"
      ],
      "style": {
        "flexDirection": "row"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:15",
            "className": "time-bg"
          },
          "type": "div",
          "classList": [
            "time-bg"
          ],
          "style": {
            "backgroundImage": function () {return this.time_bg}
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:16"
              },
              "type": "div",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:17",
                    "className": "location-icon",
                    "src": function () {return this.location}
                  },
                  "type": "image",
                  "classList": [
                    "location-icon"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:18"
                  },
                  "type": "div",
                  "style": {
                    "width": "160px",
                    "justifyContent": "space-between"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:19",
                        "className": "location-city",
                        "value": function () {return this.loaction_city}
                      },
                      "type": "text",
                      "classList": [
                        "location-city"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:20",
                        "className": "weather",
                        "src": function () {return this.weather}
                      },
                      "type": "image",
                      "classList": [
                        "weather"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:23",
                "className": "time-txt",
                "value": function () {return this.time}
              },
              "type": "text",
              "classList": [
                "time-txt"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:24",
                "className": "day-date",
                "value": function () {return this.day_date}
              },
              "type": "text",
              "classList": [
                "day-date"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:25",
                "className": "temp-page"
              },
              "type": "div",
              "classList": [
                "temp-page"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:26",
                    "className": "temp",
                    "value": function () {return this.temp_red}
                  },
                  "type": "text",
                  "classList": [
                    "temp"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:27"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:28",
                        "className": "page",
                        "src": function () {return this.scroll_inactive}
                      },
                      "type": "image",
                      "classList": [
                        "page"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:29",
                        "className": "page",
                        "src": function () {return this.scroll_inactive}
                      },
                      "type": "image",
                      "classList": [
                        "page"
                      ],
                      "style": {
                        "imageFill": "#FFFFFF"
                      }
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:30",
                        "className": "page",
                        "src": function () {return this.scroll_inactive}
                      },
                      "type": "image",
                      "classList": [
                        "page"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:31",
                        "className": "page",
                        "src": function () {return this.scroll_inactive}
                      },
                      "type": "image",
                      "classList": [
                        "page"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:32",
                        "className": "page",
                        "src": function () {return this.scroll_inactive}
                      },
                      "type": "image",
                      "classList": [
                        "page"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:37",
            "className": "music-bg"
          },
          "type": "div",
          "classList": [
            "music-bg"
          ],
          "style": {
            "backgroundImage": function () {return this.music_bg},
            "flexDirection": "column"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:38",
                "className": "dreams-bg",
                "src": function () {return this.dreams_img}
              },
              "type": "image",
              "classList": [
                "dreams-bg"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:39",
                "className": "song-name",
                "value": function () {return this.song_name}
              },
              "type": "text",
              "classList": [
                "song-name"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:40",
                "className": "song-genre",
                "value": function () {return this.song_genre}
              },
              "type": "text",
              "classList": [
                "song-genre"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:41",
                "className": "set1_sub"
              },
              "type": "div",
              "classList": [
                "set1_sub"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:42",
                    "className": "shuffle",
                    "src": function () {return this.shuffle}
                  },
                  "type": "image",
                  "classList": [
                    "shuffle"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:43",
                    "className": "back",
                    "src": function () {return this.back}
                  },
                  "type": "image",
                  "classList": [
                    "back"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:44",
                    "className": "play",
                    "src": function () {return this.play}
                  },
                  "type": "image",
                  "classList": [
                    "play"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:45",
                    "className": "next",
                    "src": function () {return this.next}
                  },
                  "type": "image",
                  "classList": [
                    "next"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:46",
                    "className": "range",
                    "src": function () {return this.range}
                  },
                  "type": "image",
                  "classList": [
                    "range"
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:49",
            "className": "food-remaining"
          },
          "type": "div",
          "classList": [
            "food-remaining"
          ],
          "style": {
            "backgroundImage": function () {return this.music_bg}
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:50",
                "className": "food-remain",
                "value": function () {return this.food_remain}
              },
              "type": "text",
              "classList": [
                "food-remain"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:51",
                "product_name": "Vegetables",
                "product_percent": "72%",
                "percent_color": function () {return this.green_range}
              },
              "type": "percentage-bar"
            },
            {
              "attr": {
                "debugLine": "pages/index/index:53",
                "product_name": "Fruits",
                "product_percent": "50%",
                "percent_color": function () {return this.violet_range}
              },
              "type": "percentage-bar"
            },
            {
              "attr": {
                "debugLine": "pages/index/index:55",
                "product_name": "Meat",
                "product_percent": "20%",
                "percent_color": function () {return this.orange_range}
              },
              "type": "percentage-bar"
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:61",
        "className": "storage-settings",
        "value": function () {return this.storage_settings}
      },
      "type": "text",
      "classList": [
        "storage-settings"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:62",
        "className": "set2"
      },
      "type": "div",
      "classList": [
        "set2"
      ],
      "style": {
        "flexDirection": "row"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:63",
            "className": "storage-tab"
          },
          "type": "div",
          "classList": [
            "storage-tab"
          ],
          "style": {
            "backgroundImage": function () {return this.storage_bg},
            "flexDirection": "column"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:64",
                "className": "your-storage-markers"
              },
              "type": "div",
              "classList": [
                "your-storage-markers"
              ],
              "style": {
                "flexDirection": "row"
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:65",
                    "className": "storage-txt-1",
                    "value": function () {return this.your_storage}
                  },
                  "type": "text",
                  "classList": [
                    "storage-txt-1"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:66"
                  },
                  "type": "div",
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:67",
                        "className": "view-icon",
                        "src": function () {return this.view_icon}
                      },
                      "type": "image",
                      "classList": [
                        "view-icon"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:68",
                        "className": "view-txt",
                        "value": function () {return this.view_text}
                      },
                      "type": "text",
                      "classList": [
                        "view-txt"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:69",
                        "className": "add-icon",
                        "src": function () {return this.add_icon}
                      },
                      "type": "image",
                      "classList": [
                        "add-icon"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:70",
                        "className": "add-txt",
                        "value": function () {return this.add_text}
                      },
                      "type": "text",
                      "classList": [
                        "add-txt"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:73"
              },
              "type": "div",
              "style": {
                "flexDirection": "row",
                "marginTop": "30.35px"
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:74",
                    "id": "List"
                  },
                  "type": "list",
                  "id": "List",
                  "style": {
                    "flexDirection": "row",
                    "paddingRight": "15px"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:75",
                        "type": "common"
                      },
                      "type": "list-item",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:76",
                            "st_item_image": function () {return this.st_item_1},
                            "st_item_name": function () {return this.st_item_1_name},
                            "st_item_weight": function () {return this.st_item_1_weight}
                          },
                          "type": "storage-list"
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:78",
                            "st_item_image": function () {return this.st_item_2},
                            "st_item_name": function () {return this.st_item_2_name},
                            "st_item_weight": function () {return this.st_item_2_weight}
                          },
                          "type": "storage-list"
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:80",
                            "st_item_image": function () {return this.st_item_3},
                            "st_item_name": function () {return this.st_item_3_name},
                            "st_item_weight": function () {return this.st_item_3_weight}
                          },
                          "type": "storage-list"
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:82",
                            "st_item_image": function () {return this.st_item_4},
                            "st_item_name": function () {return this.st_item_4_name},
                            "st_item_weight": function () {return this.st_item_4_weight}
                          },
                          "type": "storage-list"
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:84",
                            "st_item_image": function () {return this.st_item_5},
                            "st_item_name": function () {return this.st_item_5_name},
                            "st_item_weight": function () {return this.st_item_5_weight}
                          },
                          "type": "storage-list"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:91",
            "className": "help"
          },
          "type": "div",
          "classList": [
            "help"
          ],
          "style": {
            "backgroundImage": function () {return this.tap_to_speak_bg},
            "flexDirection": "column"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:92",
                "className": "audio-assist1",
                "value": function () {return this.audio_assist1}
              },
              "type": "text",
              "classList": [
                "audio-assist1"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:93",
                "className": "mic",
                "src": function () {return this.microphone}
              },
              "type": "image",
              "classList": [
                "mic"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:94",
                "className": "audio-assist2",
                "value": function () {return this.audio_assist2}
              },
              "type": "text",
              "classList": [
                "audio-assist2"
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:98",
        "className": "set3"
      },
      "type": "div",
      "classList": [
        "set3"
      ],
      "style": {
        "flexDirection": "row"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:99",
            "id": "List"
          },
          "type": "list",
          "id": "List",
          "style": {
            "flexDirection": "row"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:100",
                "type": "common"
              },
              "type": "list-item",
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:101",
                    "className": "refri-door"
                  },
                  "type": "div",
                  "classList": [
                    "refri-door"
                  ],
                  "style": {
                    "backgroundImage": function () {return this.refrigerator_doors_bg},
                    "flexDirection": "column"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:102",
                        "className": "refri-door-text",
                        "value": function () {return this.door_text}
                      },
                      "type": "text",
                      "classList": [
                        "refri-door-text"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:103",
                        "className": "refri-door-status",
                        "value": function () {return this.door_status}
                      },
                      "type": "text",
                      "classList": [
                        "refri-door-status"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:104",
                        "className": "refri-door-status-button"
                      },
                      "type": "div",
                      "classList": [
                        "refri-door-status-button"
                      ],
                      "style": {
                        "backgroundImage": function () {return this.pink_button},
                        "backgroundSize": "cover"
                      },
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:105",
                            "className": "refri-door-status-button-txt",
                            "value": function () {return this.door_status_toggle}
                          },
                          "type": "text",
                          "classList": [
                            "refri-door-status-button-txt"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:108",
                    "className": "superfreeze"
                  },
                  "type": "div",
                  "classList": [
                    "superfreeze"
                  ],
                  "style": {
                    "backgroundImage": function () {return this.music_bg}
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:109",
                        "className": "refri-door-text",
                        "value": "Superfreeze"
                      },
                      "type": "text",
                      "classList": [
                        "refri-door-text"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:110"
                      },
                      "type": "div",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:111",
                            "className": "superfreeze-toggle",
                            "value": function () {return this.superfreeze_toggle_txt}
                          },
                          "type": "text",
                          "classList": [
                            "superfreeze-toggle"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:114",
                    "className": "bottom-left-box"
                  },
                  "type": "div",
                  "classList": [
                    "bottom-left-box"
                  ],
                  "style": {
                    "backgroundImage": function () {return this.music_bg}
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:115",
                        "className": "refri-door-text",
                        "value": "Bottom Box Left"
                      },
                      "type": "text",
                      "classList": [
                        "refri-door-text"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:116"
                      },
                      "type": "div",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:117",
                            "className": "bottom-left-box-toggle",
                            "value": function () {return this.bottom_box_left_toggle_text}
                          },
                          "type": "text",
                          "classList": [
                            "bottom-left-box-toggle"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:120",
                    "className": "bottom-right-box"
                  },
                  "type": "div",
                  "classList": [
                    "bottom-right-box"
                  ],
                  "style": {
                    "backgroundImage": function () {return this.music_bg}
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:121",
                        "className": "refri-door-text",
                        "value": "Bottom Box Right"
                      },
                      "type": "text",
                      "classList": [
                        "refri-door-text"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:122"
                      },
                      "type": "div",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:123",
                            "className": "bottom-right-box-toggle",
                            "value": function () {return this.bottom_box_right_toggle_text}
                          },
                          "type": "text",
                          "classList": [
                            "bottom-right-box-toggle"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:126",
                    "className": "crisp-fresh"
                  },
                  "type": "div",
                  "classList": [
                    "crisp-fresh"
                  ],
                  "style": {
                    "backgroundImage": function () {return this.music_bg}
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:127",
                        "className": "refri-door-text",
                        "value": "Crisp Fresh"
                      },
                      "type": "text",
                      "classList": [
                        "refri-door-text"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:128"
                      },
                      "type": "div",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:129",
                            "className": "crisp-fresh-toggle",
                            "value": function () {return this.crisp_fresh_text}
                          },
                          "type": "text",
                          "classList": [
                            "crisp-fresh-toggle"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:136",
        "className": "set4"
      },
      "type": "div",
      "classList": [
        "set4"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:137",
            "className": "{{dinner-text}}",
            "value": function () {return this.dinner_text}
          },
          "type": "text",
          "classList": function () {return [this.dinner-this.text]}
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:140",
        "className": "set5"
      },
      "type": "div",
      "classList": [
        "set5"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:141",
            "user_reaction": "true",
            "recp_name": "Vada",
            "recp_type": "Starters",
            "time_recp": "30mins",
            "recp_image": function () {return this.recp_1}
          },
          "type": "recipie-compnent"
        },
        {
          "attr": {
            "debugLine": "pages/index/index:143",
            "user_reaction": "false",
            "recp_name": "Meals",
            "recp_type": "Main Course",
            "time_recp": "45mins",
            "recp_image": function () {return this.recp_2}
          },
          "type": "recipie-compnent"
        },
        {
          "attr": {
            "debugLine": "pages/index/index:145",
            "user_reaction": "false",
            "recp_name": "Dosa",
            "recp_type": "Main Course",
            "time_recp": "15mins",
            "recp_image": function () {return this.recp_3}
          },
          "type": "recipie-compnent"
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:150",
        "className": "set6"
      },
      "type": "div",
      "classList": [
        "set6"
      ],
      "style": {
        "backgroundImage": function () {return this.bottom_tab_bg},
        "flexDirection": "row"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:151"
          },
          "type": "div",
          "style": {
            "flexDirection": "column"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:152",
                "className": "home-icon",
                "src": function () {return this.home_icon}
              },
              "type": "image",
              "classList": [
                "home-icon"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:153",
                "className": "home-txt",
                "value": function () {return this.home_txt}
              },
              "type": "text",
              "classList": [
                "home-txt"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:155"
          },
          "type": "div",
          "style": {
            "flexDirection": "column"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:156",
                "className": "storage-icon",
                "src": function () {return this.storage_icon}
              },
              "type": "image",
              "classList": [
                "storage-icon"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:157",
                "className": "storage-txt",
                "value": function () {return this.storage_txt}
              },
              "type": "text",
              "classList": [
                "storage-txt"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:159"
          },
          "type": "div",
          "style": {
            "flexDirection": "column"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:160",
                "className": "music-icon",
                "src": function () {return this.music_icon}
              },
              "type": "image",
              "classList": [
                "music-icon"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:161",
                "className": "music-txt",
                "value": function () {return this.music_txt}
              },
              "type": "text",
              "classList": [
                "music-txt"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:163"
          },
          "type": "div",
          "style": {
            "flexDirection": "column"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:164",
                "className": "settings-icon",
                "src": function () {return this.settings_icon}
              },
              "type": "image",
              "classList": [
                "settings-icon"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:165",
                "className": "settings-txt",
                "value": function () {return this.settings_txt}
              },
              "type": "text",
              "classList": [
                "settings-txt"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\percent_bar\\percent_bar.hml":
/*!****************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.hml ***!
  \****************************************************************************************************************************************************/
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

/***/ "./lib/json.js!./lib/template.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\recipie_block\\recipie_block.hml":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/recipie_block/recipie_block.hml ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/recipie_block/recipie_block:1",
    "className": "basic-recepie"
  },
  "type": "div",
  "classList": [
    "basic-recepie"
  ],
  "style": {
    "backgroundImage": function () {return this.recepie_bg},
    "flexDirection": "column"
  },
  "children": [
    {
      "attr": {
        "debugLine": "pages/recipie_block/recipie_block:2"
      },
      "type": "div",
      "style": {
        "flexDirection": "row"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/recipie_block/recipie_block:3",
            "className": "recp-img",
            "src": function () {return this.recp_image}
          },
          "type": "image",
          "classList": [
            "recp-img"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/recipie_block/recipie_block:4",
            "className": "recp-img-fav",
            "src": function () {return this.favourite_icon}
          },
          "type": "image",
          "classList": [
            "recp-img-fav"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/recipie_block/recipie_block:6",
        "className": "recp-name",
        "value": function () {return this.recp_name}
      },
      "type": "text",
      "classList": [
        "recp-name"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/recipie_block/recipie_block:7"
      },
      "type": "div",
      "style": {
        "flexDirection": "row"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/recipie_block/recipie_block:8",
            "className": "clock",
            "src": function () {return this.clock}
          },
          "type": "image",
          "classList": [
            "clock"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/recipie_block/recipie_block:9",
            "className": "recp-settings"
          },
          "type": "div",
          "classList": [
            "recp-settings"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/recipie_block/recipie_block:10",
                "className": "recp-time",
                "value": function () {return this.time_recp}
              },
              "type": "text",
              "classList": [
                "recp-time"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/recipie_block/recipie_block:11",
                "className": "recp-type",
                "value": function () {return this.recp_type}
              },
              "type": "text",
              "classList": [
                "recp-type"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\storage_list\\storage_list.hml":
/*!******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.hml ***!
  \******************************************************************************************************************************************************/
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

/***/ "./lib/loader.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\percent_bar\\percent_bar.hml?name=percentage-bar":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.hml?name=percentage-bar ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !./lib/json.js!./lib/template.js!./percent_bar.hml */ "./lib/json.js!./lib/template.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\percent_bar\\percent_bar.hml")
var $app_style$ = __webpack_require__(/*! !./lib/json.js!./lib/style.js!./percent_bar.css */ "./lib/json.js!./lib/style.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\percent_bar\\percent_bar.css")
var $app_script$ = __webpack_require__(/*! !./lib/script.js!./node_modules/babel-loader?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./percent_bar.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\percent_bar\\percent_bar.js")

$app_define$('@app-component/percentage-bar', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\recipie_block\\recipie_block.hml?name=recipie-compnent":
/*!**************************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/recipie_block/recipie_block.hml?name=recipie-compnent ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !./lib/json.js!./lib/template.js!./recipie_block.hml */ "./lib/json.js!./lib/template.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\recipie_block\\recipie_block.hml")
var $app_style$ = __webpack_require__(/*! !./lib/json.js!./lib/style.js!./recipie_block.css */ "./lib/json.js!./lib/style.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\recipie_block\\recipie_block.css")
var $app_script$ = __webpack_require__(/*! !./lib/script.js!./node_modules/babel-loader?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./recipie_block.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\recipie_block\\recipie_block.js")

$app_define$('@app-component/recipie-compnent', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\storage_list\\storage_list.hml?name=storage-list":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.hml?name=storage-list ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !./lib/json.js!./lib/template.js!./storage_list.hml */ "./lib/json.js!./lib/template.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\storage_list\\storage_list.hml")
var $app_style$ = __webpack_require__(/*! !./lib/json.js!./lib/style.js!./storage_list.css */ "./lib/json.js!./lib/style.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\storage_list\\storage_list.css")
var $app_script$ = __webpack_require__(/*! !./lib/script.js!./node_modules/babel-loader?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./storage_list.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\storage_list\\storage_list.js")

$app_define$('@app-component/storage-list', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\index\\index.js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/index/index.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    bg: "/common/images/bg.png",
    wifi: "/common/images/wifi.png",
    apps: "/common/images/apps.png",
    lock: "/common/images/lock.png",
    location: '/common/images/location.png',
    weather: '/common/images/weather.png',
    scroll_inactive: '/common/images/scroll_inactive.png',
    time_bg: "/common/images/time_bg.png",
    music_bg: "/common/images/music_bg.png",
    storage_bg: "/common/images/storage_bg.png",
    tap_to_speak_bg: "/common/images/tap_to_speak_bg.png",
    refrigerator_doors_bg: "/common/images/refrigerator_doors_bg.png",
    recepie_bg: "/common/images/recepie_bg.png",
    bottom_tab_bg: "/common/images/bottom_tab_bg.png",
    dreams_img: '/common/images/dreams_img.png',
    shuffle: '/common/images/shuffle.png',
    back: '/common/images/back.png',
    play: '/common/images/play.png',
    next: '/common/images/next.png',
    range: '/common/images/range.png',
    vegetables_range_white: '/common/images/vegetables_range_white.png',
    green_range: '/common/images/green_range.png',
    orange_range: '/common/images/orange_range.png',
    violet_range: '/common/images/violet_range.png',
    microphone: '/common/images/microphone.png',
    recp_1: '/common/images/vada.png',
    recp_2: '/common/images/meals.png',
    recp_3: '/common/images/dosa.png',
    clock: '/common/images/clock.png',
    favourite_active: '/common/images/favourite_active.png',
    favourite_inactive: '/common/images/favourite_inactive.png',
    home_icon: '/common/images/home.png',
    storage_icon: '/common/images/storage.png',
    music_icon: '/common/images/music.png',
    settings_icon: '/common/images/settings.png',
    view_icon: '/common/images/view_icon.png',
    add_icon: '/common/images/add_icon.png',
    st_item_1: '/common/images/chicken.png',
    st_item_2: '/common/images/vegetables.png',
    st_item_3: '/common/images/spinach.png',
    st_item_4: '/common/images/fruits.png',
    st_item_5: '/common/images/fruits.png',
    pink_button: '/common/images/pink_button.png',
    username: 'UserName',
    time: '10:00 PM',
    loaction_city: "Bangalore",
    day_date: "Wednesday, 17 Dec",
    temp_red: "30°",
    storage_settings: 'Storage Settings',
    dinner_text: 'Dinner Recepies for you',
    all_recp_text: 'All Recepies',
    song_name: 'Dreams',
    song_genre: 'Romantic',
    food_remain: 'Food Remaining',
    home_txt: "Home",
    storage_txt: "Storage",
    music_txt: "Music",
    settings_txt: "Settings",
    audio_assist1: "How can I help you?",
    audio_assist2: "Tap to Speak",
    your_storage: "Your Storage",
    view_text: "View",
    add_text: "Add",
    st_item_1_name: "Fresh Chicken",
    st_item_2_name: "Vegetables",
    st_item_3_name: "Spinach",
    st_item_4_name: "Fruits",
    st_item_5_name: "Milk",
    st_item_1_weight: "1kg",
    st_item_2_weight: "3kg",
    st_item_3_weight: "500g",
    st_item_4_weight: "3kg",
    st_item_5_weight: "2lts",
    door_text: "Refrigerator Doors",
    door_status: "Locked",
    door_status_toggle: "Unlock",
    superfreeze_toggle_txt: "Off",
    bottom_box_left_toggle_text: "Freeze",
    bottom_box_right_toggle_text: "Fresh",
    crisp_fresh_text: "Off"
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


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\percent_bar\\percent_bar.js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/percent_bar/percent_bar.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\recipie_block\\recipie_block.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/recipie_block/recipie_block.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    bg: "/common/images/bg.png",
    recepie_bg: "/common/images/recepie_bg.png",
    favourite_active: '/common/images/favourite_active.png',
    favourite_inactive: '/common/images/favourite_inactive.png',
    clock: '/common/images/clock.png'
  },
  props: {
    user_reaction: "",
    favourite_icon: "",
    recp_name: '',
    recp_type: '',
    time_recp: '',
    recp_image: ''
  },
  onInit: function onInit() {
    if (this.user_reaction == "true") {
      this.favourite_icon = this.favourite_active;
    } else if (this.user_reaction == "false") {
      this.favourite_icon = this.favourite_inactive;
    }
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


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\storage_list\\storage_list.js":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/storage_list/storage_list.js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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


/***/ }),

/***/ "C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry":
/*!**************************************************************************************************************!*\
  !*** C:/Users/sahil/DevEcoStudioProjects/refrigerator/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./lib/loader.js!../recipie_block/recipie_block.hml?name=recipie-compnent */ "./lib/loader.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\recipie_block\\recipie_block.hml?name=recipie-compnent")
__webpack_require__(/*! !./lib/loader.js!../storage_list/storage_list.hml?name=storage-list */ "./lib/loader.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\storage_list\\storage_list.hml?name=storage-list")
__webpack_require__(/*! !./lib/loader.js!../percent_bar/percent_bar.hml?name=percentage-bar */ "./lib/loader.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\percent_bar\\percent_bar.hml?name=percentage-bar")
var $app_template$ = __webpack_require__(/*! !./lib/json.js!./lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\index\\index.hml")
var $app_style$ = __webpack_require__(/*! !./lib/json.js!./lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\index\\index.css")
var $app_script$ = __webpack_require__(/*! !./lib/script.js!./node_modules/babel-loader?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\sahil\\DevEcoStudioProjects\\refrigerator\\entry\\src\\main\\js\\default\\pages\\index\\index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ })

/******/ });
//# sourceMappingURL=index.js.map