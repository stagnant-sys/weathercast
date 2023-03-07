/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Montserrat', sans-serif; }\r\n\r\nbody {\r\n  margin: 0; }\r\n\r\nmain {\r\n  height: 85vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center; }\r\n\r\nheader {\r\n  width: 100%;\r\n  background-color: #232323;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 18px; }\r\n  header .user-actions {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    gap: 16px; }\r\n    header .user-actions .metric-toggle {\r\n      color: #999999;\r\n      cursor: pointer; }\r\n    header .user-actions .imperial-toggle {\r\n      color: #999999;\r\n      cursor: pointer; }\r\n    header .user-actions .active {\r\n      color: #eb6e4b;\r\n      font-weight: 700; }\r\n    @media (min-width: 40rem) {\r\n      header .user-actions {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        gap: 16px; } }\r\n  header form {\r\n    display: flex;\r\n    gap: 8px;\r\n    align-items: center; }\r\n  header input[type=\"text\"] {\r\n    padding: 8px;\r\n    background-color: #ffffffe8;\r\n    border: none;\r\n    border-radius: 4px; }\r\n    @media (min-width: 40rem) {\r\n      header input[type=\"text\"] {\r\n        width: 300px; } }\r\n  header button {\r\n    font-size: 1rem;\r\n    padding: 7px;\r\n    background-color: #eb6e4b;\r\n    border-radius: 5px;\r\n    border: none; }\r\n    header button:hover {\r\n      background-color: #ffffff;\r\n      color: #eb6e4b;\r\n      outline: 2px solid #eb6e4b; }\r\n  @media (min-width: 40rem) {\r\n    header {\r\n      flex-direction: row; } }\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 5vh;\r\n  background-color: black;\r\n  color: white; }\r\n\r\n#website-logo {\r\n  font-family: 'Lobster', sans-serif;\r\n  font-size: 2rem; }\r\n\r\n#background {\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: -1; }\r\n\r\n.loading-screen {\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 2;\r\n  background-color: #9999997d;\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center; }\r\n\r\n.data-container {\r\n  border: 1px solid #dddddd;\r\n  border-radius: 5px;\r\n  background-color: #fdfdfd;\r\n  width: clamp(60%, 400px, 80%);\r\n  padding: 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  box-shadow: 4px 4px 4px #00000045; }\r\n  @media (min-width: 40rem) {\r\n    .data-container {\r\n      display: grid;\r\n      grid-template-areas: 'location main' 'location details'; } }\r\n\r\n.data-block__location {\r\n  grid-area: location;\r\n  align-self: start; }\r\n  .data-block__location #location {\r\n    font-size: 3rem;\r\n    font-weight: 700; }\r\n\r\n.data-block__main-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center; }\r\n  .data-block__main-info #temp {\r\n    grid-area: temp;\r\n    font-size: 2rem;\r\n    font-weight: 500; }\r\n  .data-block__main-info #weather {\r\n    grid-area: weather;\r\n    font-weight: 500;\r\n    align-self: start; }\r\n  .data-block__main-info .icon-container {\r\n    grid-area: icon;\r\n    place-self: center center; }\r\n  @media (min-width: 40rem) {\r\n    .data-block__main-info {\r\n      grid-area: main;\r\n      display: grid;\r\n      grid-template-rows: 3rem 1fr;\r\n      grid-template-areas: 'temp icon' 'weather icon'; } }\r\n\r\n.data-block__details {\r\n  grid-area: details;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px; }\r\n  .data-block__details .data__title {\r\n    margin-bottom: 8px; }\r\n  @media (min-width: 40rem) {\r\n    .data-block__details {\r\n      flex-direction: row;\r\n      justify-content: space-between; } }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,qCAAqC,EAAA;;AAIvC;EACE,SAAS,EAAA;;AAGX;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AAGrB;EACE,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa,EAAA;EAEb;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS,EAAA;IAET;MACE,cAAc;MACd,eAAe,EAAA;IAGjB;MACE,cAAc;MACd,eAAe,EAAA;IAGjB;MACE,cAAc;MACd,gBAAgB,EAAA;IAGlB;MArBF;QAsBI,aAAa;QACb,mBAAmB;QACnB,mBAAmB;QACnB,SAAS,EAAA,EAAA;EAIb;IACE,aAAa;IACb,QAAQ;IACR,mBAAmB,EAAA;EAGrB;IACE,YAAY;IACZ,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB,EAAA;IAElB;MANF;QAOI,YAAY,EAAA,EAAA;EAIhB;IACE,eAAe;IACf,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,YAAY,EAAA;IAEZ;MACE,yBAAyB;MACzB,cAAc;MACd,0BAA0B,EAAA;EAI9B;IAvEF;MAwEI,mBAAmB,EAAA,EAAA;;AAIvB;EACE,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,YAAY,EAAA;;AAGd;EACE,kCAAkC;EAClC,eAAe,EAAA;;AAGjB;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AAGrB;EACE,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;EAC7B,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,iCAAiC,EAAA;EAEjC;IAZF;MAaI,aAAa;MACb,uDACwC,EAAA,EAAA;;AAI5C;EACE,mBAAmB;EACnB,iBAAiB,EAAA;EAEjB;IACE,eAAe;IACf,gBAAgB,EAAA;;AAIpB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;EAEnB;IACE,eAAe;IACf,eAAe;IACf,gBAAgB,EAAA;EAGlB;IACE,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB,EAAA;EAGnB;IACE,eAAe;IACf,yBAAyB,EAAA;EAG3B;IAtBF;MAuBI,eAAe;MACf,aAAa;MACb,4BAA4B;MAC5B,+CACoC,EAAA,EAAA;;AAIxC;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS,EAAA;EAET;IACE,kBAAkB,EAAA;EAGpB;IAVF;MAWI,mBAAmB;MACnB,8BAA8B,EAAA,EAAA;;AC5ClC,oCAAoC","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/populateDOM.js":
/*!****************************!*\
  !*** ./src/populateDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopulateDOM": () => (/* binding */ PopulateDOM)
/* harmony export */ });
const LOCATION = document.getElementById('location');
const COUNTRY = document.getElementById('country');
const CURRENT_TEMP = document.getElementById('temp');
const MIN_TEMP = document.getElementById('min-temp');
const MAX_TEMP = document.getElementById('max-temp');
const FEELS = document.getElementById('feels');
const WEATHER = document.getElementById('weather');
const WEATHER_ICON = document.getElementById('weather-icon');
const BACKGROUND = document.getElementById('background');

const CapitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function PopulateDOM(data, units) {
  let tempUnit = units === 'metric' ? 'C' : 'F'; 
  LOCATION.textContent = data.location;
  COUNTRY.textContent = data.country;
  CURRENT_TEMP.textContent = data.temp + '°' + tempUnit;
  WEATHER.textContent = CapitalizeString(data.weather);
  FEELS.textContent = data.feel  + '°' + tempUnit;
  MIN_TEMP.textContent = data.minTemp  + '°' + tempUnit;
  MAX_TEMP.textContent = data.maxTemp  + '°' + tempUnit;
  WEATHER_ICON.src = `http://openweathermap.org/img/wn/${data.icon}@4x.png`;
  let backgroundColor;
  switch (data.weatherType) {
    case 'Clear':
      backgroundColor = '#e8f7fd';
      break;
    case 'Clouds':
      backgroundColor = '#dbdfe3';
      break;
    case 'Snow':
      backgroundColor = '#efefef';
      break;
    case 'Sand':
    case 'Dust':
      backgroundColor = '#f6d7b0';
      break;
    default:
      backgroundColor = '#d2d9db';
  }
  BACKGROUND.style.backgroundColor = backgroundColor;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _populateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateDOM */ "./src/populateDOM.js");



// Global variables
let units = 'metric';
let mainData;
let userLocation = 'Genève';
const LOADING_SCREEN = document.querySelector('.loading-screen');
const FORM = document.getElementById('userInputForm');
const USER_LOCATION = document.getElementById('userLocation');
const METRIC_TOGGLE = document.querySelector('.metric-toggle');
const IMPERIAL_TOGGLE = document.querySelector('.imperial-toggle');


// INITIAL PAGE
async function LoadInitialPage(location) {
  await GetWeatherData(location, units);
  await (0,_populateDOM__WEBPACK_IMPORTED_MODULE_1__.PopulateDOM)(mainData, units);
}

LoadInitialPage('Genève');

// LOADING SCREEN


// UNITS TOGGLE BUTTONS
METRIC_TOGGLE.addEventListener('click', async (e) => {
  units = 'metric';
  METRIC_TOGGLE.classList.add('active');
  IMPERIAL_TOGGLE.classList.remove('active');
  await GetWeatherData(userLocation, units);
  await (0,_populateDOM__WEBPACK_IMPORTED_MODULE_1__.PopulateDOM)(mainData, units);
});

IMPERIAL_TOGGLE.addEventListener('click', async (e) => {
  units = 'imperial';
  IMPERIAL_TOGGLE.classList.add('active');
  METRIC_TOGGLE.classList.remove('active');
  await GetWeatherData(userLocation, units);
  await (0,_populateDOM__WEBPACK_IMPORTED_MODULE_1__.PopulateDOM)(mainData, units);
});

// WEATHER DATA
// Get weather datas
async function GetWeatherObject(location, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=56275265321a72bf87e1fa7566ad28dd`, {mode: 'cors'});
    const weatherData = await response.json();
    userLocation = await location;
    //console.log(weatherData);
    return weatherData;
  } catch (error) {
    throw new Error('Error', {cause: error});
  }
}

// Store relevant weather datas
function GetMainData(obj) {
  try  {
    mainData = {
      location: obj.name,
      country: obj.sys.country,
      weather: obj.weather[0].description,
      weatherType: obj.weather[0].main,
      temp: Math.round(obj.main.temp),
      minTemp: Math.round(obj.main.temp_min),
      maxTemp: Math.round(obj.main.temp_max),
      feel: Math.round(obj.main.feels_like),
      icon: obj.weather[0].icon,
    };
  } catch (error) {
    throw new Error('Error', {cause: error});
  }
}

// Chain the two previous functions
async function GetWeatherData(location, units) {
  console.log('Loading...');
  LOADING_SCREEN.style.display = 'flex';
  try {
    const object = await GetWeatherObject(location, units);
    await GetMainData(object);
    await function () {LOADING_SCREEN.style.display = 'none';}();
    //console.log(mainData);
  } catch (error) {
    alert('We could\'t find this city...');
    await function () {LOADING_SCREEN.style.display = 'none';}();
    throw new Error('Error', {cause: error});
  }
}

// GET USER INPUT TO GET DATA AND UPDATE DISPLAY
FORM.addEventListener('submit', async (e) => {
  e.preventDefault();
  userLocation = USER_LOCATION.value;
  await GetWeatherData(userLocation, units);
  await (0,_populateDOM__WEBPACK_IMPORTED_MODULE_1__.PopulateDOM)(mainData, units);
});



// Display background depending on weather

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFXO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vc3JjL3BvcHVsYXRlRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDsgfVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxOHB4OyB9XFxyXFxuICBoZWFkZXIgLnVzZXItYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNnB4OyB9XFxyXFxuICAgIGhlYWRlciAudXNlci1hY3Rpb25zIC5tZXRyaWMtdG9nZ2xlIHtcXHJcXG4gICAgICBjb2xvcjogIzk5OTk5OTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG4gICAgaGVhZGVyIC51c2VyLWFjdGlvbnMgLmltcGVyaWFsLXRvZ2dsZSB7XFxyXFxuICAgICAgY29sb3I6ICM5OTk5OTk7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuICAgIGhlYWRlciAudXNlci1hY3Rpb25zIC5hY3RpdmUge1xcclxcbiAgICAgIGNvbG9yOiAjZWI2ZTRiO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgICAgaGVhZGVyIC51c2VyLWFjdGlvbnMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiAxNnB4OyB9IH1cXHJcXG4gIGhlYWRlciBmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG4gIGhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZlODtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgICAgaGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7IH0gfVxcclxcbiAgaGVhZGVyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI2ZTRiO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTsgfVxcclxcbiAgICBoZWFkZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGNvbG9yOiAjZWI2ZTRiO1xcclxcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjZWI2ZTRiOyB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgaGVhZGVyIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9IH1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlOyB9XFxyXFxuXFxyXFxuI3dlYnNpdGUtbG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAycmVtOyB9XFxyXFxuXFxyXFxuI2JhY2tncm91bmQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAtMTsgfVxcclxcblxcclxcbi5sb2FkaW5nLXNjcmVlbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5N2Q7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuXFxyXFxuLmRhdGEtY29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xcclxcbiAgd2lkdGg6IGNsYW1wKDYwJSwgNDAwcHgsIDgwJSk7XFxyXFxuICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDAwMDQ1OyB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgLmRhdGEtY29udGFpbmVyIHtcXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdsb2NhdGlvbiBtYWluJyAnbG9jYXRpb24gZGV0YWlscyc7IH0gfVxcclxcblxcclxcbi5kYXRhLWJsb2NrX19sb2NhdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcclxcbiAgYWxpZ24tc2VsZjogc3RhcnQ7IH1cXHJcXG4gIC5kYXRhLWJsb2NrX19sb2NhdGlvbiAjbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXHJcXG5cXHJcXG4uZGF0YS1ibG9ja19fbWFpbi1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcbiAgLmRhdGEtYmxvY2tfX21haW4taW5mbyAjdGVtcCB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGVtcDtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwOyB9XFxyXFxuICAuZGF0YS1ibG9ja19fbWFpbi1pbmZvICN3ZWF0aGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB3ZWF0aGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdGFydDsgfVxcclxcbiAgLmRhdGEtYmxvY2tfX21haW4taW5mbyAuaWNvbi1jb250YWluZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGljb247XFxyXFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBjZW50ZXI7IH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xcclxcbiAgICAuZGF0YS1ibG9ja19fbWFpbi1pbmZvIHtcXHJcXG4gICAgICBncmlkLWFyZWE6IG1haW47XFxyXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMWZyO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0ZW1wIGljb24nICd3ZWF0aGVyIGljb24nOyB9IH1cXHJcXG5cXHJcXG4uZGF0YS1ibG9ja19fZGV0YWlscyB7XFxyXFxuICBncmlkLWFyZWE6IGRldGFpbHM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDsgfVxcclxcbiAgLmRhdGEtYmxvY2tfX2RldGFpbHMgLmRhdGFfX3RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgLmRhdGEtYmxvY2tfX2RldGFpbHMge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9IH1cXHJcXG5cXHJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDLEVBQUE7O0FBSXZDO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhLEVBQUE7RUFFYjtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVMsRUFBQTtJQUVUO01BQ0UsY0FBYztNQUNkLGVBQWUsRUFBQTtJQUdqQjtNQUNFLGNBQWM7TUFDZCxlQUFlLEVBQUE7SUFHakI7TUFDRSxjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7SUFHbEI7TUFyQkY7UUFzQkksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsU0FBUyxFQUFBLEVBQUE7RUFJYjtJQUNFLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtJQUVsQjtNQU5GO1FBT0ksWUFBWSxFQUFBLEVBQUE7RUFJaEI7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0lBRVo7TUFDRSx5QkFBeUI7TUFDekIsY0FBYztNQUNkLDBCQUEwQixFQUFBO0VBSTlCO0lBdkVGO01Bd0VJLG1CQUFtQixFQUFBLEVBQUE7O0FBSXZCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUNBQWlDLEVBQUE7RUFFakM7SUFaRjtNQWFJLGFBQWE7TUFDYix1REFDd0MsRUFBQSxFQUFBOztBQUk1QztFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtFQUVqQjtJQUNFLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0VBRW5CO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxlQUFlO0lBQ2YseUJBQXlCLEVBQUE7RUFHM0I7SUF0QkY7TUF1QkksZUFBZTtNQUNmLGFBQWE7TUFDYiw0QkFBNEI7TUFDNUIsK0NBQ29DLEVBQUEsRUFBQTs7QUFJeEM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTLEVBQUE7RUFFVDtJQUNFLGtCQUFrQixFQUFBO0VBR3BCO0lBVkY7TUFXSSxtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUEsRUFBQTs7QUM1Q2xDLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgTE9DQVRJT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcclxuY29uc3QgQ09VTlRSWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5Jyk7XHJcbmNvbnN0IENVUlJFTlRfVEVNUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJyk7XHJcbmNvbnN0IE1JTl9URU1QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbi10ZW1wJyk7XHJcbmNvbnN0IE1BWF9URU1QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heC10ZW1wJyk7XHJcbmNvbnN0IEZFRUxTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzJyk7XHJcbmNvbnN0IFdFQVRIRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpO1xyXG5jb25zdCBXRUFUSEVSX0lDT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pY29uJyk7XHJcbmNvbnN0IEJBQ0tHUk9VTkQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZCcpO1xyXG5cclxuY29uc3QgQ2FwaXRhbGl6ZVN0cmluZyA9IChzdHIpID0+IHtcclxuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQb3B1bGF0ZURPTShkYXRhLCB1bml0cykge1xyXG4gIGxldCB0ZW1wVW5pdCA9IHVuaXRzID09PSAnbWV0cmljJyA/ICdDJyA6ICdGJzsgXHJcbiAgTE9DQVRJT04udGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uO1xyXG4gIENPVU5UUlkudGV4dENvbnRlbnQgPSBkYXRhLmNvdW50cnk7XHJcbiAgQ1VSUkVOVF9URU1QLnRleHRDb250ZW50ID0gZGF0YS50ZW1wICsgJ8KwJyArIHRlbXBVbml0O1xyXG4gIFdFQVRIRVIudGV4dENvbnRlbnQgPSBDYXBpdGFsaXplU3RyaW5nKGRhdGEud2VhdGhlcik7XHJcbiAgRkVFTFMudGV4dENvbnRlbnQgPSBkYXRhLmZlZWwgICsgJ8KwJyArIHRlbXBVbml0O1xyXG4gIE1JTl9URU1QLnRleHRDb250ZW50ID0gZGF0YS5taW5UZW1wICArICfCsCcgKyB0ZW1wVW5pdDtcclxuICBNQVhfVEVNUC50ZXh0Q29udGVudCA9IGRhdGEubWF4VGVtcCAgKyAnwrAnICsgdGVtcFVuaXQ7XHJcbiAgV0VBVEhFUl9JQ09OLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbn1ANHgucG5nYDtcclxuICBsZXQgYmFja2dyb3VuZENvbG9yO1xyXG4gIHN3aXRjaCAoZGF0YS53ZWF0aGVyVHlwZSkge1xyXG4gICAgY2FzZSAnQ2xlYXInOlxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSAnI2U4ZjdmZCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnQ2xvdWRzJzpcclxuICAgICAgYmFja2dyb3VuZENvbG9yID0gJyNkYmRmZTMnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ1Nub3cnOlxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSAnI2VmZWZlZic7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnU2FuZCc6XHJcbiAgICBjYXNlICdEdXN0JzpcclxuICAgICAgYmFja2dyb3VuZENvbG9yID0gJyNmNmQ3YjAnO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJhY2tncm91bmRDb2xvciA9ICcjZDJkOWRiJztcclxuICB9XHJcbiAgQkFDS0dST1VORC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBvcHVsYXRlRE9NIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IFBvcHVsYXRlRE9NIH0gZnJvbSAnLi9wb3B1bGF0ZURPTSc7XHJcblxyXG4vLyBHbG9iYWwgdmFyaWFibGVzXHJcbmxldCB1bml0cyA9ICdtZXRyaWMnO1xyXG5sZXQgbWFpbkRhdGE7XHJcbmxldCB1c2VyTG9jYXRpb24gPSAnR2Vuw6h2ZSc7XHJcbmNvbnN0IExPQURJTkdfU0NSRUVOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctc2NyZWVuJyk7XHJcbmNvbnN0IEZPUk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcklucHV0Rm9ybScpO1xyXG5jb25zdCBVU0VSX0xPQ0FUSU9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJMb2NhdGlvbicpO1xyXG5jb25zdCBNRVRSSUNfVE9HR0xFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1ldHJpYy10b2dnbGUnKTtcclxuY29uc3QgSU1QRVJJQUxfVE9HR0xFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcGVyaWFsLXRvZ2dsZScpO1xyXG5cclxuXHJcbi8vIElOSVRJQUwgUEFHRVxyXG5hc3luYyBmdW5jdGlvbiBMb2FkSW5pdGlhbFBhZ2UobG9jYXRpb24pIHtcclxuICBhd2FpdCBHZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdHMpO1xyXG4gIGF3YWl0IFBvcHVsYXRlRE9NKG1haW5EYXRhLCB1bml0cyk7XHJcbn1cclxuXHJcbkxvYWRJbml0aWFsUGFnZSgnR2Vuw6h2ZScpO1xyXG5cclxuLy8gTE9BRElORyBTQ1JFRU5cclxuXHJcblxyXG4vLyBVTklUUyBUT0dHTEUgQlVUVE9OU1xyXG5NRVRSSUNfVE9HR0xFLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICB1bml0cyA9ICdtZXRyaWMnO1xyXG4gIE1FVFJJQ19UT0dHTEUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgSU1QRVJJQUxfVE9HR0xFLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGF3YWl0IEdldFdlYXRoZXJEYXRhKHVzZXJMb2NhdGlvbiwgdW5pdHMpO1xyXG4gIGF3YWl0IFBvcHVsYXRlRE9NKG1haW5EYXRhLCB1bml0cyk7XHJcbn0pO1xyXG5cclxuSU1QRVJJQUxfVE9HR0xFLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICB1bml0cyA9ICdpbXBlcmlhbCc7XHJcbiAgSU1QRVJJQUxfVE9HR0xFLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIE1FVFJJQ19UT0dHTEUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgYXdhaXQgR2V0V2VhdGhlckRhdGEodXNlckxvY2F0aW9uLCB1bml0cyk7XHJcbiAgYXdhaXQgUG9wdWxhdGVET00obWFpbkRhdGEsIHVuaXRzKTtcclxufSk7XHJcblxyXG4vLyBXRUFUSEVSIERBVEFcclxuLy8gR2V0IHdlYXRoZXIgZGF0YXNcclxuYXN5bmMgZnVuY3Rpb24gR2V0V2VhdGhlck9iamVjdChsb2NhdGlvbiwgdW5pdHMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZBUFBJRD01NjI3NTI2NTMyMWE3MmJmODdlMWZhNzU2NmFkMjhkZGAsIHttb2RlOiAnY29ycyd9KTtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgdXNlckxvY2F0aW9uID0gYXdhaXQgbG9jYXRpb247XHJcbiAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcicsIHtjYXVzZTogZXJyb3J9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFN0b3JlIHJlbGV2YW50IHdlYXRoZXIgZGF0YXNcclxuZnVuY3Rpb24gR2V0TWFpbkRhdGEob2JqKSB7XHJcbiAgdHJ5ICB7XHJcbiAgICBtYWluRGF0YSA9IHtcclxuICAgICAgbG9jYXRpb246IG9iai5uYW1lLFxyXG4gICAgICBjb3VudHJ5OiBvYmouc3lzLmNvdW50cnksXHJcbiAgICAgIHdlYXRoZXI6IG9iai53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgICB3ZWF0aGVyVHlwZTogb2JqLndlYXRoZXJbMF0ubWFpbixcclxuICAgICAgdGVtcDogTWF0aC5yb3VuZChvYmoubWFpbi50ZW1wKSxcclxuICAgICAgbWluVGVtcDogTWF0aC5yb3VuZChvYmoubWFpbi50ZW1wX21pbiksXHJcbiAgICAgIG1heFRlbXA6IE1hdGgucm91bmQob2JqLm1haW4udGVtcF9tYXgpLFxyXG4gICAgICBmZWVsOiBNYXRoLnJvdW5kKG9iai5tYWluLmZlZWxzX2xpa2UpLFxyXG4gICAgICBpY29uOiBvYmoud2VhdGhlclswXS5pY29uLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcicsIHtjYXVzZTogZXJyb3J9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENoYWluIHRoZSB0d28gcHJldmlvdXMgZnVuY3Rpb25zXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0cykge1xyXG4gIGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJyk7XHJcbiAgTE9BRElOR19TQ1JFRU4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gYXdhaXQgR2V0V2VhdGhlck9iamVjdChsb2NhdGlvbiwgdW5pdHMpO1xyXG4gICAgYXdhaXQgR2V0TWFpbkRhdGEob2JqZWN0KTtcclxuICAgIGF3YWl0IGZ1bmN0aW9uICgpIHtMT0FESU5HX1NDUkVFTi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO30oKTtcclxuICAgIC8vY29uc29sZS5sb2cobWFpbkRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydCgnV2UgY291bGRcXCd0IGZpbmQgdGhpcyBjaXR5Li4uJyk7XHJcbiAgICBhd2FpdCBmdW5jdGlvbiAoKSB7TE9BRElOR19TQ1JFRU4uc3R5bGUuZGlzcGxheSA9ICdub25lJzt9KCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yJywge2NhdXNlOiBlcnJvcn0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR0VUIFVTRVIgSU5QVVQgVE8gR0VUIERBVEEgQU5EIFVQREFURSBESVNQTEFZXHJcbkZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdXNlckxvY2F0aW9uID0gVVNFUl9MT0NBVElPTi52YWx1ZTtcclxuICBhd2FpdCBHZXRXZWF0aGVyRGF0YSh1c2VyTG9jYXRpb24sIHVuaXRzKTtcclxuICBhd2FpdCBQb3B1bGF0ZURPTShtYWluRGF0YSwgdW5pdHMpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLy8gRGlzcGxheSBiYWNrZ3JvdW5kIGRlcGVuZGluZyBvbiB3ZWF0aGVyXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==