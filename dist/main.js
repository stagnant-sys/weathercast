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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Montserrat', sans-serif; }\r\n\r\nbody {\r\n  margin: 0; }\r\n\r\nmain {\r\n  min-height: 85vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center; }\r\n\r\nheader {\r\n  width: 100%;\r\n  background-color: #232323;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 18px;\r\n  box-shadow: 5px 0 5px #4444447d; }\r\n  header .user-actions {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    gap: 16px; }\r\n    header .user-actions .metric-toggle {\r\n      color: #999999;\r\n      cursor: pointer; }\r\n    header .user-actions .imperial-toggle {\r\n      color: #999999;\r\n      cursor: pointer; }\r\n    header .user-actions .active {\r\n      color: #eb6e4b;\r\n      font-weight: 700; }\r\n    @media (min-width: 40rem) {\r\n      header .user-actions {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        gap: 16px; } }\r\n  header form {\r\n    display: flex;\r\n    gap: 8px;\r\n    align-items: center; }\r\n  header input[type=\"text\"] {\r\n    padding: 8px;\r\n    background-color: #ffffffe8;\r\n    border: none;\r\n    border-radius: 4px; }\r\n    @media (min-width: 40rem) {\r\n      header input[type=\"text\"] {\r\n        width: 300px; } }\r\n  header button {\r\n    font-size: 1rem;\r\n    padding: 7px;\r\n    background-color: #eb6e4b;\r\n    border-radius: 5px;\r\n    border: none; }\r\n    header button:hover {\r\n      background-color: #ffffff;\r\n      color: #eb6e4b;\r\n      outline: 2px solid #eb6e4b; }\r\n  @media (min-width: 40rem) {\r\n    header {\r\n      flex-direction: row; } }\r\n\r\nfooter {\r\n  padding: 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 8px;\r\n  width: 100%;\r\n  min-height: 5vh;\r\n  background-color: black;\r\n  color: white; }\r\n  @media (min-width: 40rem) {\r\n    footer {\r\n      flex-direction: row;\r\n      justify-content: space-around; } }\r\n  footer a {\r\n    text-decoration: none;\r\n    color: white; }\r\n    footer a:hover {\r\n      text-decoration: overline; }\r\n  footer .icon {\r\n    height: 1rem;\r\n    vertical-align: middle; }\r\n\r\n#website-logo {\r\n  font-family: 'Lobster', sans-serif;\r\n  font-size: 2rem; }\r\n\r\n#background {\r\n  position: fixed;\r\n  background-size: cover;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: -1; }\r\n\r\n.loading-screen {\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 2;\r\n  background-color: #9999997d;\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center; }\r\n  .loading-screen .loading-message {\r\n    font-size: 2rem;\r\n    color: #ffffff; }\r\n\r\n.data-container {\r\n  border: 1px solid #dddddd;\r\n  border-radius: 5px;\r\n  background-color: #fdfdfde2;\r\n  width: clamp(60%, 400px, 80%);\r\n  padding: 24px;\r\n  margin: 16px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  box-shadow: 4px 4px 4px #00000045; }\r\n  @media (min-width: 40rem) {\r\n    .data-container {\r\n      display: grid;\r\n      grid-template-areas: 'location main' 'quote details'; } }\r\n\r\n.data-block__location {\r\n  grid-area: location;\r\n  align-self: start; }\r\n  .data-block__location #location {\r\n    font-size: 3rem;\r\n    font-weight: 700; }\r\n\r\n.quote-block {\r\n  display: none;\r\n  grid-area: quote;\r\n  max-width: 350px;\r\n  font-size: 0.8rem;\r\n  color: #777777;\r\n  font-style: italic;\r\n  text-align: justify; }\r\n  @media (min-width: 40rem) {\r\n    .quote-block {\r\n      display: block; } }\r\n\r\n.data-block__main-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center; }\r\n  .data-block__main-info #temp {\r\n    grid-area: temp;\r\n    font-size: 2rem;\r\n    font-weight: 500; }\r\n  .data-block__main-info #weather {\r\n    grid-area: weather;\r\n    font-weight: 500; }\r\n    @media (min-width: 40rem) {\r\n      .data-block__main-info #weather {\r\n        align-self: start; } }\r\n  .data-block__main-info .icon-container {\r\n    grid-area: icon;\r\n    place-self: center center; }\r\n  @media (min-width: 40rem) {\r\n    .data-block__main-info {\r\n      grid-area: main;\r\n      display: grid;\r\n      grid-template-rows: 3rem 1fr;\r\n      grid-template-areas: 'temp icon' 'weather icon'; } }\r\n\r\n.data-block__details {\r\n  grid-area: details;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px; }\r\n  .data-block__details .data__title {\r\n    margin-bottom: 8px; }\r\n  @media (min-width: 40rem) {\r\n    .data-block__details {\r\n      flex-direction: row;\r\n      justify-content: space-between; } }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,qCAAqC,EAAA;;AAIvC;EACE,SAAS,EAAA;;AAGX;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AAGrB;EACE,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,+BAA+B,EAAA;EAE/B;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS,EAAA;IAET;MACE,cAAc;MACd,eAAe,EAAA;IAGjB;MACE,cAAc;MACd,eAAe,EAAA;IAGjB;MACE,cAAc;MACd,gBAAgB,EAAA;IAGlB;MArBF;QAsBI,aAAa;QACb,mBAAmB;QACnB,mBAAmB;QACnB,SAAS,EAAA,EAAA;EAIb;IACE,aAAa;IACb,QAAQ;IACR,mBAAmB,EAAA;EAGrB;IACE,YAAY;IACZ,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB,EAAA;IAElB;MANF;QAOI,YAAY,EAAA,EAAA;EAIhB;IACE,eAAe;IACf,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,YAAY,EAAA;IAEZ;MACE,yBAAyB;MACzB,cAAc;MACd,0BAA0B,EAAA;EAI9B;IAxEF;MAyEI,mBAAmB,EAAA,EAAA;;AAIvB;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,YAAY,EAAA;EAEZ;IAXF;MAYI,mBAAmB;MACnB,6BAA6B,EAAA,EAAA;EAI/B;IACE,qBAAqB;IACrB,YAAY,EAAA;IAEZ;MACE,yBAAyB,EAAA;EAI7B;IACE,YAAY;IACZ,sBAAsB,EAAA;;AAI1B;EACE,kCAAkC;EAClC,eAAe,EAAA;;AAGjB;EACE,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;EAEnB;IACE,eAAe;IACf,cAAc,EAAA;;AAIlB;EACE,yBAAyB;EACzB,kBAAkB;EAClB,2BAA2B;EAC3B,6BAA6B;EAC7B,aAAa;EACb,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,iCAAiC,EAAA;EAEjC;IAbF;MAcI,aAAa;MACb,oDACqC,EAAA,EAAA;;AAIzC;EACE,mBAAmB;EACnB,iBAAiB,EAAA;EAEjB;IACE,eAAe;IACf,gBAAgB,EAAA;;AAIpB;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mBAAmB,EAAA;EAEnB;IATF;MAUI,cAAc,EAAA,EAAA;;AAIlB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;EAEnB;IACE,eAAe;IACf,eAAe;IACf,gBAAgB,EAAA;EAGlB;IACE,kBAAkB;IAClB,gBAAgB,EAAA;IAEhB;MAJF;QAKE,iBAAiB,EAAA,EAAA;EAInB;IACE,eAAe;IACf,yBAAyB,EAAA;EAG3B;IAzBF;MA0BI,eAAe;MACf,aAAa;MACb,4BAA4B;MAC5B,+CACoC,EAAA,EAAA;;AAIxC;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS,EAAA;EAET;IACE,kBAAkB,EAAA;EAGpB;IAVF;MAWI,mBAAmB;MACnB,8BAA8B,EAAA,EAAA;;ACzDlC,oCAAoC","sourceRoot":""}]);
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
const PHOTO_CREDIT = document.querySelector('.photo-credit');
const QUOTE_BLOCK = document.querySelector('.quote-block');

let quotes = [
  'We need clear days to see the horizons; we need foggy nights to see beyond the horizons! Man sometimes can think much deeper when he sees less! - Mehmet Murat Ildan',
  'Anyone who says sunshine brings happiness has never danced in the rain.',
  'Your thoughts and your perception of the world influences all that you do, and all that you are, and all that you can be. If you see the sunshine, feel the sunshine then you feel good. But if your focus is only on the clouds and the dark sky then you may find yourself a bit gloomy. - Catherine Pulsifer',
  'Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather. - John Ruskin',
  'Wherever you go, no matter what the weather, always bring your own sunshine. - Anthony J. D\'Angelo',
  'Climate is what we expect, weather is what we get. - Mark Twain',
  'There\'s no such thing as bad weather, just soft people. - Bill Bowerman',
  'Sometimes I wish that I was the weather, you\'d bring me up in conversation forever. And when it rained, I\'d be the talk of the day. - John Mayer',
  'Everybody talks about the weather, but nobody does anything about it. - Charles Dudley Warner',
  'Who cares about the clouds when we\'re together? Just sing a song and bring the sunny weather. - Dale Evans',
  'The weather and my mood have little connection. I have my foggy and my fine days within me; my prosperity or misfortune has little to do with the matter. - Blaise Pascal',
  'I briefly did therapy, but after a while, I realised it is just like a farmer complaining about the weather. You can\'t fix the weather - you just have to get on with it. - Douglas Adams',
  'Weather forecast for Jupiter\'s South Equatorial Belt: cloudy with a chance of ammonia. - Heidi Hammel',
  'Don\'t knock the weather; nine-tenths of the people couldn\'t start a conversation if it didn\'t change once in a while. - Kin Hubbard',
  'You can\'t get mad at weather because weather\'s not about you. Apply that lesson to most other aspects of life. - Douglas Coupland',
  'In the Spring, I have counted 136 different kinds of weather inside of 24 hours. - Mark Twain'
];

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
  let backgroundImagePath;
  switch (data.weatherType) {
    case 'Clear':
      backgroundImagePath = './images/clear.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@andreilazarev">Andrei Lazarev</a> on <a href="https://unsplash.com/photos/YXYbkRNwbkM">Unsplash</a>`;
      //backgroundColor = '#e8f7fd';
      break;
    case 'Clouds':
      backgroundImagePath = './images/clouds.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@ankur1verma">Ankur Verma</a> on <a href="https://unsplash.com/photos/vXU_wJ7YmNc">Unsplash</a>`;
      //backgroundColor = '#dbdfe3';
      break;
    case 'Snow':
      backgroundImagePath = './images/snow.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@jknepp">Jonathan Knepper</a> on <a href="https://unsplash.com/photos/9GMO0Sxyw_Y">Unsplash</a>`;
      //backgroundColor = '#efefef';
      break;
    case 'Sand':
    case 'Dust':
      backgroundImagePath = './images/dust.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@meric">Meriç Dağlı</a> on <a href="https://unsplash.com/photos/pTTfhaLeomQ">Unsplash</a>`;
      //backgroundColor = '#f6d7b0';
      break;
    default:
      backgroundImagePath = './images/rain.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@simeonmuller">Simeon Muller</a> on <a href="https://unsplash.com/photos/Io9VYJorLuc">Unsplash</a>`;
      //backgroundColor = '#d2d9db';
  }
  BACKGROUND.style.backgroundImage = `url(${backgroundImagePath})`;
  let rdnNumber = Math.round(Math.random() * (quotes.length - 1));
  QUOTE_BLOCK.textContent = quotes[rdnNumber];
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
const USER_LOCATION_INPUT = document.getElementById('userLocation');
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
  //console.log('Loading...');
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
  userLocation = USER_LOCATION_INPUT.value;
  await GetWeatherData(userLocation, units);
  await (0,_populateDOM__WEBPACK_IMPORTED_MODULE_1__.PopulateDOM)(mainData, units);
});



// Display background depending on weather

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVc7QUFDbkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVc7QUFDbkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsU0FBUyxTQUFTLE1BQU0sMkNBQTJDLGFBQWE7QUFDdEs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiw4QkFBOEIsYUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7QUFDOUQ7QUFDQSxJQUFJO0FBQ0o7QUFDQSx1QkFBdUIsdUNBQXVDO0FBQzlELDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFXO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vc3JjL3BvcHVsYXRlRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDsgfVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWluLWhlaWdodDogODV2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMThweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCAwIDVweCAjNDQ0NDQ0N2Q7IH1cXHJcXG4gIGhlYWRlciAudXNlci1hY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7IH1cXHJcXG4gICAgaGVhZGVyIC51c2VyLWFjdGlvbnMgLm1ldHJpYy10b2dnbGUge1xcclxcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcbiAgICBoZWFkZXIgLnVzZXItYWN0aW9ucyAuaW1wZXJpYWwtdG9nZ2xlIHtcXHJcXG4gICAgICBjb2xvcjogIzk5OTk5OTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG4gICAgaGVhZGVyIC51c2VyLWFjdGlvbnMgLmFjdGl2ZSB7XFxyXFxuICAgICAgY29sb3I6ICNlYjZlNGI7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgICBoZWFkZXIgLnVzZXItYWN0aW9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDE2cHg7IH0gfVxcclxcbiAgaGVhZGVyIGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcbiAgaGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmU4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgICBoZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDsgfSB9XFxyXFxuICBoZWFkZXIgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjZlNGI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lOyB9XFxyXFxuICAgIGhlYWRlciBidXR0b246aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgICAgY29sb3I6ICNlYjZlNGI7XFxyXFxuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICNlYjZlNGI7IH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xcclxcbiAgICBoZWFkZXIge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH0gfVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogNXZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogd2hpdGU7IH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xcclxcbiAgICBmb290ZXIge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH0gfVxcclxcbiAgZm9vdGVyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcclxcbiAgICBmb290ZXIgYTpob3ZlciB7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTsgfVxcclxcbiAgZm9vdGVyIC5pY29uIHtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxyXFxuXFxyXFxuI3dlYnNpdGUtbG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAycmVtOyB9XFxyXFxuXFxyXFxuI2JhY2tncm91bmQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogLTE7IH1cXHJcXG5cXHJcXG4ubG9hZGluZy1zY3JlZW4ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTdkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcbiAgLmxvYWRpbmctc2NyZWVuIC5sb2FkaW5nLW1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmOyB9XFxyXFxuXFxyXFxuLmRhdGEtY29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkZTI7XFxyXFxuICB3aWR0aDogY2xhbXAoNjAlLCA0MDBweCwgODAlKTtcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICBtYXJnaW46IDE2cHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAwMDA0NTsgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgIC5kYXRhLWNvbnRhaW5lciB7XFxyXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnbG9jYXRpb24gbWFpbicgJ3F1b3RlIGRldGFpbHMnOyB9IH1cXHJcXG5cXHJcXG4uZGF0YS1ibG9ja19fbG9jYXRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXHJcXG4gIGFsaWduLXNlbGY6IHN0YXJ0OyB9XFxyXFxuICAuZGF0YS1ibG9ja19fbG9jYXRpb24gI2xvY2F0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwOyB9XFxyXFxuXFxyXFxuLnF1b3RlLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBncmlkLWFyZWE6IHF1b3RlO1xcclxcbiAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgY29sb3I6ICM3Nzc3Nzc7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgLnF1b3RlLWJsb2NrIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxyXFxuXFxyXFxuLmRhdGEtYmxvY2tfX21haW4taW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG4gIC5kYXRhLWJsb2NrX19tYWluLWluZm8gI3RlbXAge1xcclxcbiAgICBncmlkLWFyZWE6IHRlbXA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcclxcbiAgLmRhdGEtYmxvY2tfX21haW4taW5mbyAjd2VhdGhlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogd2VhdGhlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgICAuZGF0YS1ibG9ja19fbWFpbi1pbmZvICN3ZWF0aGVyIHtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0OyB9IH1cXHJcXG4gIC5kYXRhLWJsb2NrX19tYWluLWluZm8gLmljb24tY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBpY29uO1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyOyB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgLmRhdGEtYmxvY2tfX21haW4taW5mbyB7XFxyXFxuICAgICAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmcjtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGVtcCBpY29uJyAnd2VhdGhlciBpY29uJzsgfSB9XFxyXFxuXFxyXFxuLmRhdGEtYmxvY2tfX2RldGFpbHMge1xcclxcbiAgZ3JpZC1hcmVhOiBkZXRhaWxzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7IH1cXHJcXG4gIC5kYXRhLWJsb2NrX19kZXRhaWxzIC5kYXRhX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgIC5kYXRhLWJsb2NrX19kZXRhaWxzIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfSB9XFxyXFxuXFxyXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFDQUFxQyxFQUFBOztBQUl2QztFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNu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ZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IExPQ0FUSU9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XHJcbmNvbnN0IENPVU5UUlkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeScpO1xyXG5jb25zdCBDVVJSRU5UX1RFTVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xyXG5jb25zdCBNSU5fVEVNUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW4tdGVtcCcpO1xyXG5jb25zdCBNQVhfVEVNUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXgtdGVtcCcpO1xyXG5jb25zdCBGRUVMUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscycpO1xyXG5jb25zdCBXRUFUSEVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKTtcclxuY29uc3QgV0VBVEhFUl9JQ09OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItaWNvbicpO1xyXG5jb25zdCBCQUNLR1JPVU5EID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQnKTtcclxuY29uc3QgUEhPVE9fQ1JFRElUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvLWNyZWRpdCcpO1xyXG5jb25zdCBRVU9URV9CTE9DSyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdW90ZS1ibG9jaycpO1xyXG5cclxubGV0IHF1b3RlcyA9IFtcclxuICAnV2UgbmVlZCBjbGVhciBkYXlzIHRvIHNlZSB0aGUgaG9yaXpvbnM7IHdlIG5lZWQgZm9nZ3kgbmlnaHRzIHRvIHNlZSBiZXlvbmQgdGhlIGhvcml6b25zISBNYW4gc29tZXRpbWVzIGNhbiB0aGluayBtdWNoIGRlZXBlciB3aGVuIGhlIHNlZXMgbGVzcyEgLSBNZWhtZXQgTXVyYXQgSWxkYW4nLFxyXG4gICdBbnlvbmUgd2hvIHNheXMgc3Vuc2hpbmUgYnJpbmdzIGhhcHBpbmVzcyBoYXMgbmV2ZXIgZGFuY2VkIGluIHRoZSByYWluLicsXHJcbiAgJ1lvdXIgdGhvdWdodHMgYW5kIHlvdXIgcGVyY2VwdGlvbiBvZiB0aGUgd29ybGQgaW5mbHVlbmNlcyBhbGwgdGhhdCB5b3UgZG8sIGFuZCBhbGwgdGhhdCB5b3UgYXJlLCBhbmQgYWxsIHRoYXQgeW91IGNhbiBiZS4gSWYgeW91IHNlZSB0aGUgc3Vuc2hpbmUsIGZlZWwgdGhlIHN1bnNoaW5lIHRoZW4geW91IGZlZWwgZ29vZC4gQnV0IGlmIHlvdXIgZm9jdXMgaXMgb25seSBvbiB0aGUgY2xvdWRzIGFuZCB0aGUgZGFyayBza3kgdGhlbiB5b3UgbWF5IGZpbmQgeW91cnNlbGYgYSBiaXQgZ2xvb215LiAtIENhdGhlcmluZSBQdWxzaWZlcicsXHJcbiAgJ1N1bnNoaW5lIGlzIGRlbGljaW91cywgcmFpbiBpcyByZWZyZXNoaW5nLCB3aW5kIGJyYWNlcyB1cyB1cCwgc25vdyBpcyBleGhpbGFyYXRpbmc7IHRoZXJlIGlzIHJlYWxseSBubyBzdWNoIHRoaW5nIGFzIGJhZCB3ZWF0aGVyLCBvbmx5IGRpZmZlcmVudCBraW5kcyBvZiBnb29kIHdlYXRoZXIuIC0gSm9obiBSdXNraW4nLFxyXG4gICdXaGVyZXZlciB5b3UgZ28sIG5vIG1hdHRlciB3aGF0IHRoZSB3ZWF0aGVyLCBhbHdheXMgYnJpbmcgeW91ciBvd24gc3Vuc2hpbmUuIC0gQW50aG9ueSBKLiBEXFwnQW5nZWxvJyxcclxuICAnQ2xpbWF0ZSBpcyB3aGF0IHdlIGV4cGVjdCwgd2VhdGhlciBpcyB3aGF0IHdlIGdldC4gLSBNYXJrIFR3YWluJyxcclxuICAnVGhlcmVcXCdzIG5vIHN1Y2ggdGhpbmcgYXMgYmFkIHdlYXRoZXIsIGp1c3Qgc29mdCBwZW9wbGUuIC0gQmlsbCBCb3dlcm1hbicsXHJcbiAgJ1NvbWV0aW1lcyBJIHdpc2ggdGhhdCBJIHdhcyB0aGUgd2VhdGhlciwgeW91XFwnZCBicmluZyBtZSB1cCBpbiBjb252ZXJzYXRpb24gZm9yZXZlci4gQW5kIHdoZW4gaXQgcmFpbmVkLCBJXFwnZCBiZSB0aGUgdGFsayBvZiB0aGUgZGF5LiAtIEpvaG4gTWF5ZXInLFxyXG4gICdFdmVyeWJvZHkgdGFsa3MgYWJvdXQgdGhlIHdlYXRoZXIsIGJ1dCBub2JvZHkgZG9lcyBhbnl0aGluZyBhYm91dCBpdC4gLSBDaGFybGVzIER1ZGxleSBXYXJuZXInLFxyXG4gICdXaG8gY2FyZXMgYWJvdXQgdGhlIGNsb3VkcyB3aGVuIHdlXFwncmUgdG9nZXRoZXI/IEp1c3Qgc2luZyBhIHNvbmcgYW5kIGJyaW5nIHRoZSBzdW5ueSB3ZWF0aGVyLiAtIERhbGUgRXZhbnMnLFxyXG4gICdUaGUgd2VhdGhlciBhbmQgbXkgbW9vZCBoYXZlIGxpdHRsZSBjb25uZWN0aW9uLiBJIGhhdmUgbXkgZm9nZ3kgYW5kIG15IGZpbmUgZGF5cyB3aXRoaW4gbWU7IG15IHByb3NwZXJpdHkgb3IgbWlzZm9ydHVuZSBoYXMgbGl0dGxlIHRvIGRvIHdpdGggdGhlIG1hdHRlci4gLSBCbGFpc2UgUGFzY2FsJyxcclxuICAnSSBicmllZmx5IGRpZCB0aGVyYXB5LCBidXQgYWZ0ZXIgYSB3aGlsZSwgSSByZWFsaXNlZCBpdCBpcyBqdXN0IGxpa2UgYSBmYXJtZXIgY29tcGxhaW5pbmcgYWJvdXQgdGhlIHdlYXRoZXIuIFlvdSBjYW5cXCd0IGZpeCB0aGUgd2VhdGhlciAtIHlvdSBqdXN0IGhhdmUgdG8gZ2V0IG9uIHdpdGggaXQuIC0gRG91Z2xhcyBBZGFtcycsXHJcbiAgJ1dlYXRoZXIgZm9yZWNhc3QgZm9yIEp1cGl0ZXJcXCdzIFNvdXRoIEVxdWF0b3JpYWwgQmVsdDogY2xvdWR5IHdpdGggYSBjaGFuY2Ugb2YgYW1tb25pYS4gLSBIZWlkaSBIYW1tZWwnLFxyXG4gICdEb25cXCd0IGtub2NrIHRoZSB3ZWF0aGVyOyBuaW5lLXRlbnRocyBvZiB0aGUgcGVvcGxlIGNvdWxkblxcJ3Qgc3RhcnQgYSBjb252ZXJzYXRpb24gaWYgaXQgZGlkblxcJ3QgY2hhbmdlIG9uY2UgaW4gYSB3aGlsZS4gLSBLaW4gSHViYmFyZCcsXHJcbiAgJ1lvdSBjYW5cXCd0IGdldCBtYWQgYXQgd2VhdGhlciBiZWNhdXNlIHdlYXRoZXJcXCdzIG5vdCBhYm91dCB5b3UuIEFwcGx5IHRoYXQgbGVzc29uIHRvIG1vc3Qgb3RoZXIgYXNwZWN0cyBvZiBsaWZlLiAtIERvdWdsYXMgQ291cGxhbmQnLFxyXG4gICdJbiB0aGUgU3ByaW5nLCBJIGhhdmUgY291bnRlZCAxMzYgZGlmZmVyZW50IGtpbmRzIG9mIHdlYXRoZXIgaW5zaWRlIG9mIDI0IGhvdXJzLiAtIE1hcmsgVHdhaW4nXHJcbl07XHJcblxyXG5jb25zdCBDYXBpdGFsaXplU3RyaW5nID0gKHN0cikgPT4ge1xyXG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBvcHVsYXRlRE9NKGRhdGEsIHVuaXRzKSB7XHJcbiAgbGV0IHRlbXBVbml0ID0gdW5pdHMgPT09ICdtZXRyaWMnID8gJ0MnIDogJ0YnOyBcclxuICBMT0NBVElPTi50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb247XHJcbiAgQ09VTlRSWS50ZXh0Q29udGVudCA9IGRhdGEuY291bnRyeTtcclxuICBDVVJSRU5UX1RFTVAudGV4dENvbnRlbnQgPSBkYXRhLnRlbXAgKyAnwrAnICsgdGVtcFVuaXQ7XHJcbiAgV0VBVEhFUi50ZXh0Q29udGVudCA9IENhcGl0YWxpemVTdHJpbmcoZGF0YS53ZWF0aGVyKTtcclxuICBGRUVMUy50ZXh0Q29udGVudCA9IGRhdGEuZmVlbCAgKyAnwrAnICsgdGVtcFVuaXQ7XHJcbiAgTUlOX1RFTVAudGV4dENvbnRlbnQgPSBkYXRhLm1pblRlbXAgICsgJ8KwJyArIHRlbXBVbml0O1xyXG4gIE1BWF9URU1QLnRleHRDb250ZW50ID0gZGF0YS5tYXhUZW1wICArICfCsCcgKyB0ZW1wVW5pdDtcclxuICBXRUFUSEVSX0lDT04uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5pY29ufUA0eC5wbmdgO1xyXG4gIGxldCBiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgbGV0IGJhY2tncm91bmRJbWFnZVBhdGg7XHJcbiAgc3dpdGNoIChkYXRhLndlYXRoZXJUeXBlKSB7XHJcbiAgICBjYXNlICdDbGVhcic6XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZVBhdGggPSAnLi9pbWFnZXMvY2xlYXIuanBnJztcclxuICAgICAgUEhPVE9fQ1JFRElULmlubmVySFRNTCA9IGBQaWN0dXJlIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW5kcmVpbGF6YXJldlwiPkFuZHJlaSBMYXphcmV2PC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1lYWWJrUk53YmtNXCI+VW5zcGxhc2g8L2E+YDtcclxuICAgICAgLy9iYWNrZ3JvdW5kQ29sb3IgPSAnI2U4ZjdmZCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnQ2xvdWRzJzpcclxuICAgICAgYmFja2dyb3VuZEltYWdlUGF0aCA9ICcuL2ltYWdlcy9jbG91ZHMuanBnJztcclxuICAgICAgUEhPVE9fQ1JFRElULmlubmVySFRNTCA9IGBQaWN0dXJlIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW5rdXIxdmVybWFcIj5Bbmt1ciBWZXJtYTwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy92WFVfd0o3WW1OY1wiPlVuc3BsYXNoPC9hPmA7XHJcbiAgICAgIC8vYmFja2dyb3VuZENvbG9yID0gJyNkYmRmZTMnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ1Nub3cnOlxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2VQYXRoID0gJy4vaW1hZ2VzL3Nub3cuanBnJztcclxuICAgICAgUEhPVE9fQ1JFRElULmlubmVySFRNTCA9IGBQaWN0dXJlIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AamtuZXBwXCI+Sm9uYXRoYW4gS25lcHBlcjwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy85R01PMFN4eXdfWVwiPlVuc3BsYXNoPC9hPmA7XHJcbiAgICAgIC8vYmFja2dyb3VuZENvbG9yID0gJyNlZmVmZWYnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ1NhbmQnOlxyXG4gICAgY2FzZSAnRHVzdCc6XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZVBhdGggPSAnLi9pbWFnZXMvZHVzdC5qcGcnO1xyXG4gICAgICBQSE9UT19DUkVESVQuaW5uZXJIVE1MID0gYFBpY3R1cmUgYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BtZXJpY1wiPk1lcmnDpyBEYcSfbMSxPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3BUVGZoYUxlb21RXCI+VW5zcGxhc2g8L2E+YDtcclxuICAgICAgLy9iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y2ZDdiMCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYmFja2dyb3VuZEltYWdlUGF0aCA9ICcuL2ltYWdlcy9yYWluLmpwZyc7XHJcbiAgICAgIFBIT1RPX0NSRURJVC5pbm5lckhUTUwgPSBgUGljdHVyZSBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHNpbWVvbm11bGxlclwiPlNpbWVvbiBNdWxsZXI8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvSW85VllKb3JMdWNcIj5VbnNwbGFzaDwvYT5gO1xyXG4gICAgICAvL2JhY2tncm91bmRDb2xvciA9ICcjZDJkOWRiJztcclxuICB9XHJcbiAgQkFDS0dST1VORC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZEltYWdlUGF0aH0pYDtcclxuICBsZXQgcmRuTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHF1b3Rlcy5sZW5ndGggLSAxKSk7XHJcbiAgUVVPVEVfQkxPQ0sudGV4dENvbnRlbnQgPSBxdW90ZXNbcmRuTnVtYmVyXTtcclxufVxyXG5cclxuZXhwb3J0IHsgUG9wdWxhdGVET00gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgUG9wdWxhdGVET00gfSBmcm9tICcuL3BvcHVsYXRlRE9NJztcclxuXHJcbi8vIEdsb2JhbCB2YXJpYWJsZXNcclxubGV0IHVuaXRzID0gJ21ldHJpYyc7XHJcbmxldCBtYWluRGF0YTtcclxubGV0IHVzZXJMb2NhdGlvbiA9ICdHZW7DqHZlJztcclxuY29uc3QgTE9BRElOR19TQ1JFRU4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1zY3JlZW4nKTtcclxuY29uc3QgRk9STSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySW5wdXRGb3JtJyk7XHJcbmNvbnN0IFVTRVJfTE9DQVRJT05fSU5QVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckxvY2F0aW9uJyk7XHJcbmNvbnN0IE1FVFJJQ19UT0dHTEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWV0cmljLXRvZ2dsZScpO1xyXG5jb25zdCBJTVBFUklBTF9UT0dHTEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wZXJpYWwtdG9nZ2xlJyk7XHJcblxyXG5cclxuLy8gSU5JVElBTCBQQUdFXHJcbmFzeW5jIGZ1bmN0aW9uIExvYWRJbml0aWFsUGFnZShsb2NhdGlvbikge1xyXG4gIGF3YWl0IEdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0cyk7XHJcbiAgYXdhaXQgUG9wdWxhdGVET00obWFpbkRhdGEsIHVuaXRzKTtcclxufVxyXG5cclxuTG9hZEluaXRpYWxQYWdlKCdHZW7DqHZlJyk7XHJcblxyXG4vLyBMT0FESU5HIFNDUkVFTlxyXG5cclxuXHJcbi8vIFVOSVRTIFRPR0dMRSBCVVRUT05TXHJcbk1FVFJJQ19UT0dHTEUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gIHVuaXRzID0gJ21ldHJpYyc7XHJcbiAgTUVUUklDX1RPR0dMRS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBJTVBFUklBTF9UT0dHTEUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgYXdhaXQgR2V0V2VhdGhlckRhdGEodXNlckxvY2F0aW9uLCB1bml0cyk7XHJcbiAgYXdhaXQgUG9wdWxhdGVET00obWFpbkRhdGEsIHVuaXRzKTtcclxufSk7XHJcblxyXG5JTVBFUklBTF9UT0dHTEUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gIHVuaXRzID0gJ2ltcGVyaWFsJztcclxuICBJTVBFUklBTF9UT0dHTEUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgTUVUUklDX1RPR0dMRS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBhd2FpdCBHZXRXZWF0aGVyRGF0YSh1c2VyTG9jYXRpb24sIHVuaXRzKTtcclxuICBhd2FpdCBQb3B1bGF0ZURPTShtYWluRGF0YSwgdW5pdHMpO1xyXG59KTtcclxuXHJcbi8vIFdFQVRIRVIgREFUQVxyXG4vLyBHZXQgd2VhdGhlciBkYXRhc1xyXG5hc3luYyBmdW5jdGlvbiBHZXRXZWF0aGVyT2JqZWN0KGxvY2F0aW9uLCB1bml0cykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPSR7dW5pdHN9JkFQUElEPTU2Mjc1MjY1MzIxYTcyYmY4N2UxZmE3NTY2YWQyOGRkYCwge21vZGU6ICdjb3JzJ30pO1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB1c2VyTG9jYXRpb24gPSBhd2FpdCBsb2NhdGlvbjtcclxuICAgIC8vY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yJywge2NhdXNlOiBlcnJvcn0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU3RvcmUgcmVsZXZhbnQgd2VhdGhlciBkYXRhc1xyXG5mdW5jdGlvbiBHZXRNYWluRGF0YShvYmopIHtcclxuICB0cnkgIHtcclxuICAgIG1haW5EYXRhID0ge1xyXG4gICAgICBsb2NhdGlvbjogb2JqLm5hbWUsXHJcbiAgICAgIGNvdW50cnk6IG9iai5zeXMuY291bnRyeSxcclxuICAgICAgd2VhdGhlcjogb2JqLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgIHdlYXRoZXJUeXBlOiBvYmoud2VhdGhlclswXS5tYWluLFxyXG4gICAgICB0ZW1wOiBNYXRoLnJvdW5kKG9iai5tYWluLnRlbXApLFxyXG4gICAgICBtaW5UZW1wOiBNYXRoLnJvdW5kKG9iai5tYWluLnRlbXBfbWluKSxcclxuICAgICAgbWF4VGVtcDogTWF0aC5yb3VuZChvYmoubWFpbi50ZW1wX21heCksXHJcbiAgICAgIGZlZWw6IE1hdGgucm91bmQob2JqLm1haW4uZmVlbHNfbGlrZSksXHJcbiAgICAgIGljb246IG9iai53ZWF0aGVyWzBdLmljb24sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yJywge2NhdXNlOiBlcnJvcn0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2hhaW4gdGhlIHR3byBwcmV2aW91cyBmdW5jdGlvbnNcclxuYXN5bmMgZnVuY3Rpb24gR2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXRzKSB7XHJcbiAgLy9jb25zb2xlLmxvZygnTG9hZGluZy4uLicpO1xyXG4gIExPQURJTkdfU0NSRUVOLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9iamVjdCA9IGF3YWl0IEdldFdlYXRoZXJPYmplY3QobG9jYXRpb24sIHVuaXRzKTtcclxuICAgIGF3YWl0IEdldE1haW5EYXRhKG9iamVjdCk7XHJcbiAgICBhd2FpdCBmdW5jdGlvbiAoKSB7TE9BRElOR19TQ1JFRU4uc3R5bGUuZGlzcGxheSA9ICdub25lJzt9KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKG1haW5EYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoJ1dlIGNvdWxkXFwndCBmaW5kIHRoaXMgY2l0eS4uLicpO1xyXG4gICAgYXdhaXQgZnVuY3Rpb24gKCkge0xPQURJTkdfU0NSRUVOLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7fSgpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcicsIHtjYXVzZTogZXJyb3J9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdFVCBVU0VSIElOUFVUIFRPIEdFVCBEQVRBIEFORCBVUERBVEUgRElTUExBWVxyXG5GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHVzZXJMb2NhdGlvbiA9IFVTRVJfTE9DQVRJT05fSU5QVVQudmFsdWU7XHJcbiAgYXdhaXQgR2V0V2VhdGhlckRhdGEodXNlckxvY2F0aW9uLCB1bml0cyk7XHJcbiAgYXdhaXQgUG9wdWxhdGVET00obWFpbkRhdGEsIHVuaXRzKTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8vIERpc3BsYXkgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gd2VhdGhlclxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=