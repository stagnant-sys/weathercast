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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Montserrat', sans-serif; }\r\n\r\nbody {\r\n  margin: 0; }\r\n\r\nmain {\r\n  min-height: 85vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center; }\r\n\r\nheader {\r\n  width: 100%;\r\n  background-color: #232323;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 18px;\r\n  box-shadow: 5px 0 5px #4444447d; }\r\n  header .user-actions {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    gap: 16px; }\r\n    header .user-actions .metric-toggle {\r\n      color: #999999;\r\n      cursor: pointer; }\r\n    header .user-actions .imperial-toggle {\r\n      color: #999999;\r\n      cursor: pointer; }\r\n    header .user-actions .active {\r\n      color: #eb6e4b;\r\n      font-weight: 700; }\r\n    @media (min-width: 40rem) {\r\n      header .user-actions {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        gap: 16px; } }\r\n  header form {\r\n    display: flex;\r\n    gap: 8px;\r\n    align-items: center; }\r\n  header input[type=\"text\"] {\r\n    padding: 8px;\r\n    background-color: #ffffffe8;\r\n    border: none;\r\n    border-radius: 4px; }\r\n    @media (min-width: 40rem) {\r\n      header input[type=\"text\"] {\r\n        width: 300px; } }\r\n  header button {\r\n    font-size: 1rem;\r\n    padding: 7px;\r\n    background-color: #eb6e4b;\r\n    border-radius: 5px;\r\n    border: none; }\r\n    header button:hover {\r\n      background-color: #ffffff;\r\n      color: #eb6e4b;\r\n      outline: 2px solid #eb6e4b; }\r\n  @media (min-width: 40rem) {\r\n    header {\r\n      flex-direction: row; } }\r\n\r\nfooter {\r\n  padding: 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 8px;\r\n  width: 100%;\r\n  min-height: 5vh;\r\n  background-color: black;\r\n  color: white; }\r\n  @media (min-width: 40rem) {\r\n    footer {\r\n      flex-direction: row;\r\n      justify-content: space-around; } }\r\n  footer a {\r\n    text-decoration: none;\r\n    color: white; }\r\n    footer a:hover {\r\n      text-decoration: overline; }\r\n  footer .icon {\r\n    height: 1rem;\r\n    vertical-align: middle; }\r\n\r\n#website-logo {\r\n  font-family: 'Lobster', sans-serif;\r\n  font-size: 2rem; }\r\n\r\n#background {\r\n  position: fixed;\r\n  background-size: cover;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: -1; }\r\n\r\n.loading-screen {\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 2;\r\n  background-color: #9999997d;\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center; }\r\n  .loading-screen .loading-message {\r\n    font-size: 2rem;\r\n    color: #ffffff; }\r\n\r\n.data-container {\r\n  border: 1px solid #dddddd;\r\n  border-radius: 5px;\r\n  background-color: #fdfdfde2;\r\n  width: clamp(60%, 400px, 80%);\r\n  padding: 24px;\r\n  margin: 16px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  box-shadow: 4px 4px 4px #00000045; }\r\n  @media (min-width: 40rem) {\r\n    .data-container {\r\n      display: grid;\r\n      grid-template-areas: 'location main' 'quote details'; } }\r\n\r\n.data-block__location {\r\n  grid-area: location;\r\n  align-self: start; }\r\n  .data-block__location #location {\r\n    font-size: 3rem;\r\n    font-weight: 700; }\r\n\r\n.quote-block {\r\n  display: none;\r\n  grid-area: quote;\r\n  max-width: 350px;\r\n  font-size: 0.8rem;\r\n  color: #777777;\r\n  font-style: italic;\r\n  text-align: justify; }\r\n  @media (min-width: 40rem) {\r\n    .quote-block {\r\n      display: block; } }\r\n\r\n.data-block__main-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center; }\r\n  .data-block__main-info #temp {\r\n    grid-area: temp;\r\n    font-size: 2rem;\r\n    font-weight: 500; }\r\n  .data-block__main-info #weather {\r\n    grid-area: weather;\r\n    font-weight: 500; }\r\n    @media (min-width: 40rem) {\r\n      .data-block__main-info #weather {\r\n        align-self: start; } }\r\n  .data-block__main-info .icon-container {\r\n    grid-area: icon;\r\n    place-self: center center; }\r\n  @media (min-width: 40rem) {\r\n    .data-block__main-info {\r\n      grid-area: main;\r\n      display: grid;\r\n      grid-template-rows: 3rem 1fr;\r\n      grid-template-areas: 'temp icon' 'weather icon'; } }\r\n\r\n.data-block__details {\r\n  grid-area: details;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px; }\r\n  .data-block__details .data__title {\r\n    margin-bottom: 8px; }\r\n  @media (min-width: 40rem) {\r\n    .data-block__details {\r\n      flex-direction: row;\r\n      justify-content: space-between; } }\r\n\r\n.dot-spinner {\r\n  --uib-size: 2.8rem;\r\n  --uib-speed: .9s;\r\n  --uib-color: #183153;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: start;\r\n  -ms-flex-pack: start;\r\n  justify-content: flex-start;\r\n  height: var(--uib-size);\r\n  width: var(--uib-size); }\r\n\r\n.dot-spinner__dot {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: start;\r\n  -ms-flex-pack: start;\r\n  justify-content: flex-start;\r\n  height: 100%;\r\n  width: 100%; }\r\n\r\n.dot-spinner__dot::before {\r\n  content: '';\r\n  height: 20%;\r\n  width: 20%;\r\n  border-radius: 50%;\r\n  background-color: var(--uib-color);\r\n  -webkit-transform: scale(0);\r\n  -ms-transform: scale(0);\r\n  transform: scale(0);\r\n  opacity: 0.5;\r\n  -webkit-animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;\r\n  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;\r\n  -webkit-box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);\r\n  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3); }\r\n\r\n.dot-spinner__dot:nth-child(2) {\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg); }\r\n\r\n.dot-spinner__dot:nth-child(2)::before {\r\n  -webkit-animation-delay: calc(var(--uib-speed) * -0.875);\r\n  animation-delay: calc(var(--uib-speed) * -0.875); }\r\n\r\n.dot-spinner__dot:nth-child(3) {\r\n  -webkit-transform: rotate(90deg);\r\n  -ms-transform: rotate(90deg);\r\n  transform: rotate(90deg); }\r\n\r\n.dot-spinner__dot:nth-child(3)::before {\r\n  -webkit-animation-delay: calc(var(--uib-speed) * -0.75);\r\n  animation-delay: calc(var(--uib-speed) * -0.75); }\r\n\r\n.dot-spinner__dot:nth-child(4) {\r\n  -webkit-transform: rotate(135deg);\r\n  -ms-transform: rotate(135deg);\r\n  transform: rotate(135deg); }\r\n\r\n.dot-spinner__dot:nth-child(4)::before {\r\n  -webkit-animation-delay: calc(var(--uib-speed) * -0.625);\r\n  animation-delay: calc(var(--uib-speed) * -0.625); }\r\n\r\n.dot-spinner__dot:nth-child(5) {\r\n  -webkit-transform: rotate(180deg);\r\n  -ms-transform: rotate(180deg);\r\n  transform: rotate(180deg); }\r\n\r\n.dot-spinner__dot:nth-child(5)::before {\r\n  -webkit-animation-delay: calc(var(--uib-speed) * -0.5);\r\n  animation-delay: calc(var(--uib-speed) * -0.5); }\r\n\r\n.dot-spinner__dot:nth-child(6) {\r\n  -webkit-transform: rotate(225deg);\r\n  -ms-transform: rotate(225deg);\r\n  transform: rotate(225deg); }\r\n\r\n.dot-spinner__dot:nth-child(6)::before {\r\n  -webkit-animation-delay: calc(var(--uib-speed) * -0.375);\r\n  animation-delay: calc(var(--uib-speed) * -0.375); }\r\n\r\n.dot-spinner__dot:nth-child(7) {\r\n  -webkit-transform: rotate(270deg);\r\n  -ms-transform: rotate(270deg);\r\n  transform: rotate(270deg); }\r\n\r\n.dot-spinner__dot:nth-child(7)::before {\r\n  -webkit-animation-delay: calc(var(--uib-speed) * -0.25);\r\n  animation-delay: calc(var(--uib-speed) * -0.25); }\r\n\r\n.dot-spinner__dot:nth-child(8) {\r\n  -webkit-transform: rotate(315deg);\r\n  -ms-transform: rotate(315deg);\r\n  transform: rotate(315deg); }\r\n\r\n.dot-spinner__dot:nth-child(8)::before {\r\n  -webkit-animation-delay: calc(var(--uib-speed) * -0.125);\r\n  animation-delay: calc(var(--uib-speed) * -0.125); }\r\n\r\n@-webkit-keyframes pulse0112 {\r\n  0%,\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    opacity: 0.5; }\r\n  50% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    opacity: 1; } }\r\n@keyframes pulse0112 {\r\n  0%,\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    opacity: 0.5; }\r\n  50% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    opacity: 1; } }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
const CLOCK = document.getElementById('clock');

// INITIAL PAGE
async function LoadInitialPage(location) {
  await GetWeatherData(location, units);
  await (0,_populateDOM__WEBPACK_IMPORTED_MODULE_1__.PopulateDOM)(mainData, units);
}

LoadInitialPage('Genève');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGlCQUFpQixNQUFNLEtBQUssVUFBVSx1QkFBdUIsTUFBTSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksa0JBQWtCLE1BQU0sS0FBSyxxQkFBcUIsTUFBTSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sS0FBSyxzQkFBc0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksd0JBQXdCLE1BQU0sWUFBWSxXQUFXLFlBQVksZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0sS0FBSyxZQUFZLHdCQUF3QixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLE1BQU0sWUFBWSxhQUFhLGdCQUFnQixLQUFLLFlBQVksYUFBYSxxQkFBcUIsS0FBSyxNQUFNLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsc0JBQXNCLDhCQUE4QjtBQUN2clk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGO0FBQy9GO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxVQUFVO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsb0JBQW9CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3VCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFXO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFXO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLFNBQVMsU0FBUyxNQUFNLDJDQUEyQyxhQUFhO0FBQ3RLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQXVDO0FBQzlEO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsdUJBQXVCLHVDQUF1QztBQUM5RCw4QkFBOEIsYUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBVztBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL3NyYy9wb3B1bGF0ZURPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJjYXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyY2FzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7IH1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDg1dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDE4cHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggMCA1cHggIzQ0NDQ0NDdkOyB9XFxyXFxuICBoZWFkZXIgLnVzZXItYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNnB4OyB9XFxyXFxuICAgIGhlYWRlciAudXNlci1hY3Rpb25zIC5tZXRyaWMtdG9nZ2xlIHtcXHJcXG4gICAgICBjb2xvcjogIzk5OTk5OTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG4gICAgaGVhZGVyIC51c2VyLWFjdGlvbnMgLmltcGVyaWFsLXRvZ2dsZSB7XFxyXFxuICAgICAgY29sb3I6ICM5OTk5OTk7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuICAgIGhlYWRlciAudXNlci1hY3Rpb25zIC5hY3RpdmUge1xcclxcbiAgICAgIGNvbG9yOiAjZWI2ZTRiO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgICAgaGVhZGVyIC51c2VyLWFjdGlvbnMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiAxNnB4OyB9IH1cXHJcXG4gIGhlYWRlciBmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG4gIGhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZlODtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgICAgaGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7IH0gfVxcclxcbiAgaGVhZGVyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI2ZTRiO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTsgfVxcclxcbiAgICBoZWFkZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgIGNvbG9yOiAjZWI2ZTRiO1xcclxcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjZWI2ZTRiOyB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgaGVhZGVyIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9IH1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDV2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlOyB9XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXHJcXG4gICAgZm9vdGVyIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9IH1cXHJcXG4gIGZvb3RlciBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7IH1cXHJcXG4gICAgZm9vdGVyIGE6aG92ZXIge1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7IH1cXHJcXG4gIGZvb3RlciAuaWNvbiB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcclxcblxcclxcbiN3ZWJzaXRlLWxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTsgfVxcclxcblxcclxcbiNiYWNrZ3JvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IC0xOyB9XFxyXFxuXFxyXFxuLmxvYWRpbmctc2NyZWVuIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk3ZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG4gIC5sb2FkaW5nLXNjcmVlbiAubG9hZGluZy1tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjsgfVxcclxcblxcclxcbi5kYXRhLWNvbnRhaW5lciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZGUyO1xcclxcbiAgd2lkdGg6IGNsYW1wKDYwJSwgNDAwcHgsIDgwJSk7XFxyXFxuICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgbWFyZ2luOiAxNnB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMDAwNDU7IH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xcclxcbiAgICAuZGF0YS1jb250YWluZXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xvY2F0aW9uIG1haW4nICdxdW90ZSBkZXRhaWxzJzsgfSB9XFxyXFxuXFxyXFxuLmRhdGEtYmxvY2tfX2xvY2F0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogbG9jYXRpb247XFxyXFxuICBhbGlnbi1zZWxmOiBzdGFydDsgfVxcclxcbiAgLmRhdGEtYmxvY2tfX2xvY2F0aW9uICNsb2NhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcclxcblxcclxcbi5xdW90ZS1ibG9jayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZ3JpZC1hcmVhOiBxdW90ZTtcXHJcXG4gIG1heC13aWR0aDogMzUwcHg7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiAjNzc3Nzc3O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgIC5xdW90ZS1ibG9jayB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7IH0gfVxcclxcblxcclxcbi5kYXRhLWJsb2NrX19tYWluLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuICAuZGF0YS1ibG9ja19fbWFpbi1pbmZvICN0ZW1wIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0ZW1wO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXHJcXG4gIC5kYXRhLWJsb2NrX19tYWluLWluZm8gI3dlYXRoZXIge1xcclxcbiAgICBncmlkLWFyZWE6IHdlYXRoZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgICAgLmRhdGEtYmxvY2tfX21haW4taW5mbyAjd2VhdGhlciB7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDsgfSB9XFxyXFxuICAuZGF0YS1ibG9ja19fbWFpbi1pbmZvIC5pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGNlbnRlcjsgfVxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XFxyXFxuICAgIC5kYXRhLWJsb2NrX19tYWluLWluZm8ge1xcclxcbiAgICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxZnI7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RlbXAgaWNvbicgJ3dlYXRoZXIgaWNvbic7IH0gfVxcclxcblxcclxcbi5kYXRhLWJsb2NrX19kZXRhaWxzIHtcXHJcXG4gIGdyaWQtYXJlYTogZGV0YWlscztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4OyB9XFxyXFxuICAuZGF0YS1ibG9ja19fZGV0YWlscyAuZGF0YV9fdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xcclxcbiAgICAuZGF0YS1ibG9ja19fZGV0YWlscyB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH0gfVxcclxcblxcclxcbi5kb3Qtc3Bpbm5lciB7XFxyXFxuICAtLXVpYi1zaXplOiAyLjhyZW07XFxyXFxuICAtLXVpYi1zcGVlZDogLjlzO1xcclxcbiAgLS11aWItY29sb3I6ICMxODMxNTM7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcclxcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXVpYi1zaXplKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS11aWItc2l6ZSk7IH1cXHJcXG5cXHJcXG4uZG90LXNwaW5uZXJfX2RvdCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXHJcXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7IH1cXHJcXG5cXHJcXG4uZG90LXNwaW5uZXJfX2RvdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWliLWNvbG9yKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZTAxMTIgY2FsYyh2YXIoLS11aWItc3BlZWQpICogMS4xMTEpIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uOiBwdWxzZTAxMTIgY2FsYyh2YXIoLS11aWItc3BlZWQpICogMS4xMTEpIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDE4LCAzMSwgNTMsIDAuMyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDE4LCAzMSwgNTMsIDAuMyk7IH1cXHJcXG5cXHJcXG4uZG90LXNwaW5uZXJfX2RvdDpudGgtY2hpbGQoMikge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxyXFxuXFxyXFxuLmRvdC1zcGlubmVyX19kb3Q6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tdWliLXNwZWVkKSAqIC0wLjg3NSk7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tdWliLXNwZWVkKSAqIC0wLjg3NSk7IH1cXHJcXG5cXHJcXG4uZG90LXNwaW5uZXJfX2RvdDpudGgtY2hpbGQoMykge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XFxyXFxuXFxyXFxuLmRvdC1zcGlubmVyX19kb3Q6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tdWliLXNwZWVkKSAqIC0wLjc1KTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS11aWItc3BlZWQpICogLTAuNzUpOyB9XFxyXFxuXFxyXFxuLmRvdC1zcGlubmVyX19kb3Q6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsgfVxcclxcblxcclxcbi5kb3Qtc3Bpbm5lcl9fZG90Om50aC1jaGlsZCg0KTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXVpYi1zcGVlZCkgKiAtMC42MjUpO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXVpYi1zcGVlZCkgKiAtMC42MjUpOyB9XFxyXFxuXFxyXFxuLmRvdC1zcGlubmVyX19kb3Q6bnRoLWNoaWxkKDUpIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcclxcblxcclxcbi5kb3Qtc3Bpbm5lcl9fZG90Om50aC1jaGlsZCg1KTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXVpYi1zcGVlZCkgKiAtMC41KTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS11aWItc3BlZWQpICogLTAuNSk7IH1cXHJcXG5cXHJcXG4uZG90LXNwaW5uZXJfX2RvdDpudGgtY2hpbGQoNikge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpOyB9XFxyXFxuXFxyXFxuLmRvdC1zcGlubmVyX19kb3Q6bnRoLWNoaWxkKDYpOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tdWliLXNwZWVkKSAqIC0wLjM3NSk7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tdWliLXNwZWVkKSAqIC0wLjM3NSk7IH1cXHJcXG5cXHJcXG4uZG90LXNwaW5uZXJfX2RvdDpudGgtY2hpbGQoNykge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XFxyXFxuXFxyXFxuLmRvdC1zcGlubmVyX19kb3Q6bnRoLWNoaWxkKDcpOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tdWliLXNwZWVkKSAqIC0wLjI1KTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS11aWItc3BlZWQpICogLTAuMjUpOyB9XFxyXFxuXFxyXFxuLmRvdC1zcGlubmVyX19kb3Q6bnRoLWNoaWxkKDgpIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTsgfVxcclxcblxcclxcbi5kb3Qtc3Bpbm5lcl9fZG90Om50aC1jaGlsZCg4KTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXVpYi1zcGVlZCkgKiAtMC4xMjUpO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXVpYi1zcGVlZCkgKiAtMC4xMjUpOyB9XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlMDExMiB7XFxyXFxuICAwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTsgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICBvcGFjaXR5OiAxOyB9IH1cXHJcXG5Aa2V5ZnJhbWVzIHB1bHNlMDExMiB7XFxyXFxuICAwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTsgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICBvcGFjaXR5OiAxOyB9IH1cXHJcXG5cXHJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBh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O0VBQ3hCLHdCQUF3QixFQUFBOztBQUdsQztFQUNFLHVEQUF1RDtFQUMvQywrQ0FBK0MsRUFBQTs7QUFHekQ7RUFDRSxpQ0FBaUM7RUFDN0IsNkJBQTZCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUduQztFQUNFLHdEQUF3RDtFQUNoRCxnREFBZ0QsRUFBQTs7QUFHMUQ7RUFDRSxpQ0FBaUM7RUFDN0IsNkJBQTZCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUduQztFQUNFLHNEQUFzRDtFQUM5Qyw4Q0FBOEMsRUFBQTs7QUFHeEQ7RUFDRSxpQ0FBaUM7RUFDN0IsNkJBQTZCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUduQztFQUNFLHdEQUF3RDtFQUNoRCxnREFBZ0QsRUFBQTs7QUFHMUQ7RUFDRSxpQ0FBaUM7RUFDN0IsNkJBQTZCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUduQztFQUNFLHVEQUF1RDtFQUMvQywrQ0FBK0MsRUFBQTs7QUFHekQ7RUFDRSxpQ0FBaUM7RUFDN0IsNkJBQTZCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUduQztFQUNFLHdEQUF3RDtFQUNoRCxnREFBZ0QsRUFBQTs7QUFHMUQ7RUFDRTs7SUFFRSwyQkFBMkI7SUFDbkIsbUJBQW1CO0lBQzNCLFlBQVksRUFBQTtFQUdkO0lBQ0UsMkJBQTJCO0lBQ25CLG1CQUFtQjtJQUMzQixVQUFVLEVBQUEsRUFBQTtBQUlkO0VBQ0U7O0lBRUUsMkJBQTJCO0lBQ25CLG1CQUFtQjtJQUMzQixZQUFZLEVBQUE7RUFHZDtJQUNFLDJCQUEyQjtJQUNuQixtQkFBbUI7SUFDM0IsVUFBVSxFQUFBLEVBQUE7O0FDcEZkLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgTE9DQVRJT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcclxuY29uc3QgQ09VTlRSWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5Jyk7XHJcbmNvbnN0IENVUlJFTlRfVEVNUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJyk7XHJcbmNvbnN0IE1JTl9URU1QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbi10ZW1wJyk7XHJcbmNvbnN0IE1BWF9URU1QID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heC10ZW1wJyk7XHJcbmNvbnN0IEZFRUxTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzJyk7XHJcbmNvbnN0IFdFQVRIRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpO1xyXG5jb25zdCBXRUFUSEVSX0lDT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pY29uJyk7XHJcbmNvbnN0IEJBQ0tHUk9VTkQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZCcpO1xyXG5jb25zdCBQSE9UT19DUkVESVQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGhvdG8tY3JlZGl0Jyk7XHJcbmNvbnN0IFFVT1RFX0JMT0NLID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RlLWJsb2NrJyk7XHJcblxyXG5sZXQgcXVvdGVzID0gW1xyXG4gICdXZSBuZWVkIGNsZWFyIGRheXMgdG8gc2VlIHRoZSBob3Jpem9uczsgd2UgbmVlZCBmb2dneSBuaWdodHMgdG8gc2VlIGJleW9uZCB0aGUgaG9yaXpvbnMhIE1hbiBzb21ldGltZXMgY2FuIHRoaW5rIG11Y2ggZGVlcGVyIHdoZW4gaGUgc2VlcyBsZXNzISAtIE1laG1ldCBNdXJhdCBJbGRhbicsXHJcbiAgJ0FueW9uZSB3aG8gc2F5cyBzdW5zaGluZSBicmluZ3MgaGFwcGluZXNzIGhhcyBuZXZlciBkYW5jZWQgaW4gdGhlIHJhaW4uJyxcclxuICAnWW91ciB0aG91Z2h0cyBhbmQgeW91ciBwZXJjZXB0aW9uIG9mIHRoZSB3b3JsZCBpbmZsdWVuY2VzIGFsbCB0aGF0IHlvdSBkbywgYW5kIGFsbCB0aGF0IHlvdSBhcmUsIGFuZCBhbGwgdGhhdCB5b3UgY2FuIGJlLiBJZiB5b3Ugc2VlIHRoZSBzdW5zaGluZSwgZmVlbCB0aGUgc3Vuc2hpbmUgdGhlbiB5b3UgZmVlbCBnb29kLiBCdXQgaWYgeW91ciBmb2N1cyBpcyBvbmx5IG9uIHRoZSBjbG91ZHMgYW5kIHRoZSBkYXJrIHNreSB0aGVuIHlvdSBtYXkgZmluZCB5b3Vyc2VsZiBhIGJpdCBnbG9vbXkuIC0gQ2F0aGVyaW5lIFB1bHNpZmVyJyxcclxuICAnU3Vuc2hpbmUgaXMgZGVsaWNpb3VzLCByYWluIGlzIHJlZnJlc2hpbmcsIHdpbmQgYnJhY2VzIHVzIHVwLCBzbm93IGlzIGV4aGlsYXJhdGluZzsgdGhlcmUgaXMgcmVhbGx5IG5vIHN1Y2ggdGhpbmcgYXMgYmFkIHdlYXRoZXIsIG9ubHkgZGlmZmVyZW50IGtpbmRzIG9mIGdvb2Qgd2VhdGhlci4gLSBKb2huIFJ1c2tpbicsXHJcbiAgJ1doZXJldmVyIHlvdSBnbywgbm8gbWF0dGVyIHdoYXQgdGhlIHdlYXRoZXIsIGFsd2F5cyBicmluZyB5b3VyIG93biBzdW5zaGluZS4gLSBBbnRob255IEouIERcXCdBbmdlbG8nLFxyXG4gICdDbGltYXRlIGlzIHdoYXQgd2UgZXhwZWN0LCB3ZWF0aGVyIGlzIHdoYXQgd2UgZ2V0LiAtIE1hcmsgVHdhaW4nLFxyXG4gICdUaGVyZVxcJ3Mgbm8gc3VjaCB0aGluZyBhcyBiYWQgd2VhdGhlciwganVzdCBzb2Z0IHBlb3BsZS4gLSBCaWxsIEJvd2VybWFuJyxcclxuICAnU29tZXRpbWVzIEkgd2lzaCB0aGF0IEkgd2FzIHRoZSB3ZWF0aGVyLCB5b3VcXCdkIGJyaW5nIG1lIHVwIGluIGNvbnZlcnNhdGlvbiBmb3JldmVyLiBBbmQgd2hlbiBpdCByYWluZWQsIElcXCdkIGJlIHRoZSB0YWxrIG9mIHRoZSBkYXkuIC0gSm9obiBNYXllcicsXHJcbiAgJ0V2ZXJ5Ym9keSB0YWxrcyBhYm91dCB0aGUgd2VhdGhlciwgYnV0IG5vYm9keSBkb2VzIGFueXRoaW5nIGFib3V0IGl0LiAtIENoYXJsZXMgRHVkbGV5IFdhcm5lcicsXHJcbiAgJ1dobyBjYXJlcyBhYm91dCB0aGUgY2xvdWRzIHdoZW4gd2VcXCdyZSB0b2dldGhlcj8gSnVzdCBzaW5nIGEgc29uZyBhbmQgYnJpbmcgdGhlIHN1bm55IHdlYXRoZXIuIC0gRGFsZSBFdmFucycsXHJcbiAgJ1RoZSB3ZWF0aGVyIGFuZCBteSBtb29kIGhhdmUgbGl0dGxlIGNvbm5lY3Rpb24uIEkgaGF2ZSBteSBmb2dneSBhbmQgbXkgZmluZSBkYXlzIHdpdGhpbiBtZTsgbXkgcHJvc3Blcml0eSBvciBtaXNmb3J0dW5lIGhhcyBsaXR0bGUgdG8gZG8gd2l0aCB0aGUgbWF0dGVyLiAtIEJsYWlzZSBQYXNjYWwnLFxyXG4gICdJIGJyaWVmbHkgZGlkIHRoZXJhcHksIGJ1dCBhZnRlciBhIHdoaWxlLCBJIHJlYWxpc2VkIGl0IGlzIGp1c3QgbGlrZSBhIGZhcm1lciBjb21wbGFpbmluZyBhYm91dCB0aGUgd2VhdGhlci4gWW91IGNhblxcJ3QgZml4IHRoZSB3ZWF0aGVyIC0geW91IGp1c3QgaGF2ZSB0byBnZXQgb24gd2l0aCBpdC4gLSBEb3VnbGFzIEFkYW1zJyxcclxuICAnV2VhdGhlciBmb3JlY2FzdCBmb3IgSnVwaXRlclxcJ3MgU291dGggRXF1YXRvcmlhbCBCZWx0OiBjbG91ZHkgd2l0aCBhIGNoYW5jZSBvZiBhbW1vbmlhLiAtIEhlaWRpIEhhbW1lbCcsXHJcbiAgJ0RvblxcJ3Qga25vY2sgdGhlIHdlYXRoZXI7IG5pbmUtdGVudGhzIG9mIHRoZSBwZW9wbGUgY291bGRuXFwndCBzdGFydCBhIGNvbnZlcnNhdGlvbiBpZiBpdCBkaWRuXFwndCBjaGFuZ2Ugb25jZSBpbiBhIHdoaWxlLiAtIEtpbiBIdWJiYXJkJyxcclxuICAnWW91IGNhblxcJ3QgZ2V0IG1hZCBhdCB3ZWF0aGVyIGJlY2F1c2Ugd2VhdGhlclxcJ3Mgbm90IGFib3V0IHlvdS4gQXBwbHkgdGhhdCBsZXNzb24gdG8gbW9zdCBvdGhlciBhc3BlY3RzIG9mIGxpZmUuIC0gRG91Z2xhcyBDb3VwbGFuZCcsXHJcbiAgJ0luIHRoZSBTcHJpbmcsIEkgaGF2ZSBjb3VudGVkIDEzNiBkaWZmZXJlbnQga2luZHMgb2Ygd2VhdGhlciBpbnNpZGUgb2YgMjQgaG91cnMuIC0gTWFyayBUd2FpbidcclxuXTtcclxuXHJcbmNvbnN0IENhcGl0YWxpemVTdHJpbmcgPSAoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gUG9wdWxhdGVET00oZGF0YSwgdW5pdHMpIHtcclxuICBsZXQgdGVtcFVuaXQgPSB1bml0cyA9PT0gJ21ldHJpYycgPyAnQycgOiAnRic7IFxyXG4gIExPQ0FUSU9OLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbjtcclxuICBDT1VOVFJZLnRleHRDb250ZW50ID0gZGF0YS5jb3VudHJ5O1xyXG4gIENVUlJFTlRfVEVNUC50ZXh0Q29udGVudCA9IGRhdGEudGVtcCArICfCsCcgKyB0ZW1wVW5pdDtcclxuICBXRUFUSEVSLnRleHRDb250ZW50ID0gQ2FwaXRhbGl6ZVN0cmluZyhkYXRhLndlYXRoZXIpO1xyXG4gIEZFRUxTLnRleHRDb250ZW50ID0gZGF0YS5mZWVsICArICfCsCcgKyB0ZW1wVW5pdDtcclxuICBNSU5fVEVNUC50ZXh0Q29udGVudCA9IGRhdGEubWluVGVtcCAgKyAnwrAnICsgdGVtcFVuaXQ7XHJcbiAgTUFYX1RFTVAudGV4dENvbnRlbnQgPSBkYXRhLm1heFRlbXAgICsgJ8KwJyArIHRlbXBVbml0O1xyXG4gIFdFQVRIRVJfSUNPTi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDR4LnBuZ2A7XHJcbiAgbGV0IGJhY2tncm91bmRDb2xvcjtcclxuICBsZXQgYmFja2dyb3VuZEltYWdlUGF0aDtcclxuICBzd2l0Y2ggKGRhdGEud2VhdGhlclR5cGUpIHtcclxuICAgIGNhc2UgJ0NsZWFyJzpcclxuICAgICAgYmFja2dyb3VuZEltYWdlUGF0aCA9ICcuL2ltYWdlcy9jbGVhci5qcGcnO1xyXG4gICAgICBQSE9UT19DUkVESVQuaW5uZXJIVE1MID0gYFBpY3R1cmUgYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BhbmRyZWlsYXphcmV2XCI+QW5kcmVpIExhemFyZXY8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvWVhZYmtSTndia01cIj5VbnNwbGFzaDwvYT5gO1xyXG4gICAgICAvL2JhY2tncm91bmRDb2xvciA9ICcjZThmN2ZkJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdDbG91ZHMnOlxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2VQYXRoID0gJy4vaW1hZ2VzL2Nsb3Vkcy5qcGcnO1xyXG4gICAgICBQSE9UT19DUkVESVQuaW5uZXJIVE1MID0gYFBpY3R1cmUgYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Bhbmt1cjF2ZXJtYVwiPkFua3VyIFZlcm1hPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3ZYVV93SjdZbU5jXCI+VW5zcGxhc2g8L2E+YDtcclxuICAgICAgLy9iYWNrZ3JvdW5kQ29sb3IgPSAnI2RiZGZlMyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnU25vdyc6XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZVBhdGggPSAnLi9pbWFnZXMvc25vdy5qcGcnO1xyXG4gICAgICBQSE9UT19DUkVESVQuaW5uZXJIVE1MID0gYFBpY3R1cmUgYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Bqa25lcHBcIj5Kb25hdGhhbiBLbmVwcGVyPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzlHTU8wU3h5d19ZXCI+VW5zcGxhc2g8L2E+YDtcclxuICAgICAgLy9iYWNrZ3JvdW5kQ29sb3IgPSAnI2VmZWZlZic7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnU2FuZCc6XHJcbiAgICBjYXNlICdEdXN0JzpcclxuICAgICAgYmFja2dyb3VuZEltYWdlUGF0aCA9ICcuL2ltYWdlcy9kdXN0LmpwZyc7XHJcbiAgICAgIFBIT1RPX0NSRURJVC5pbm5lckhUTUwgPSBgUGljdHVyZSBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1lcmljXCI+TWVyacOnIERhxJ9sxLE8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvcFRUZmhhTGVvbVFcIj5VbnNwbGFzaDwvYT5gO1xyXG4gICAgICAvL2JhY2tncm91bmRDb2xvciA9ICcjZjZkN2IwJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2VQYXRoID0gJy4vaW1hZ2VzL3JhaW4uanBnJztcclxuICAgICAgUEhPVE9fQ1JFRElULmlubmVySFRNTCA9IGBQaWN0dXJlIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ac2ltZW9ubXVsbGVyXCI+U2ltZW9uIE11bGxlcjwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9JbzlWWUpvckx1Y1wiPlVuc3BsYXNoPC9hPmA7XHJcbiAgICAgIC8vYmFja2dyb3VuZENvbG9yID0gJyNkMmQ5ZGInO1xyXG4gIH1cclxuICBCQUNLR1JPVU5ELnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2VQYXRofSlgO1xyXG4gIGxldCByZG5OdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAocXVvdGVzLmxlbmd0aCAtIDEpKTtcclxuICBRVU9URV9CTE9DSy50ZXh0Q29udGVudCA9IHF1b3Rlc1tyZG5OdW1iZXJdO1xyXG59XHJcblxyXG5leHBvcnQgeyBQb3B1bGF0ZURPTSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBQb3B1bGF0ZURPTSB9IGZyb20gJy4vcG9wdWxhdGVET00nO1xyXG5cclxuLy8gR2xvYmFsIHZhcmlhYmxlc1xyXG5sZXQgdW5pdHMgPSAnbWV0cmljJztcclxubGV0IG1haW5EYXRhO1xyXG5sZXQgdXNlckxvY2F0aW9uID0gJ0dlbsOodmUnO1xyXG5jb25zdCBMT0FESU5HX1NDUkVFTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbicpO1xyXG5jb25zdCBGT1JNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJbnB1dEZvcm0nKTtcclxuY29uc3QgVVNFUl9MT0NBVElPTl9JTlBVVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTG9jYXRpb24nKTtcclxuY29uc3QgTUVUUklDX1RPR0dMRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXRyaWMtdG9nZ2xlJyk7XHJcbmNvbnN0IElNUEVSSUFMX1RPR0dMRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBlcmlhbC10b2dnbGUnKTtcclxuY29uc3QgQ0xPQ0sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvY2snKTtcclxuXHJcbi8vIElOSVRJQUwgUEFHRVxyXG5hc3luYyBmdW5jdGlvbiBMb2FkSW5pdGlhbFBhZ2UobG9jYXRpb24pIHtcclxuICBhd2FpdCBHZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdHMpO1xyXG4gIGF3YWl0IFBvcHVsYXRlRE9NKG1haW5EYXRhLCB1bml0cyk7XHJcbn1cclxuXHJcbkxvYWRJbml0aWFsUGFnZSgnR2Vuw6h2ZScpO1xyXG5cclxuLy8gVU5JVFMgVE9HR0xFIEJVVFRPTlNcclxuTUVUUklDX1RPR0dMRS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgdW5pdHMgPSAnbWV0cmljJztcclxuICBNRVRSSUNfVE9HR0xFLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIElNUEVSSUFMX1RPR0dMRS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBhd2FpdCBHZXRXZWF0aGVyRGF0YSh1c2VyTG9jYXRpb24sIHVuaXRzKTtcclxuICBhd2FpdCBQb3B1bGF0ZURPTShtYWluRGF0YSwgdW5pdHMpO1xyXG59KTtcclxuXHJcbklNUEVSSUFMX1RPR0dMRS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgdW5pdHMgPSAnaW1wZXJpYWwnO1xyXG4gIElNUEVSSUFMX1RPR0dMRS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBNRVRSSUNfVE9HR0xFLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGF3YWl0IEdldFdlYXRoZXJEYXRhKHVzZXJMb2NhdGlvbiwgdW5pdHMpO1xyXG4gIGF3YWl0IFBvcHVsYXRlRE9NKG1haW5EYXRhLCB1bml0cyk7XHJcbn0pO1xyXG5cclxuLy8gV0VBVEhFUiBEQVRBXHJcbi8vIEdldCB3ZWF0aGVyIGRhdGFzXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFdlYXRoZXJPYmplY3QobG9jYXRpb24sIHVuaXRzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mQVBQSUQ9NTYyNzUyNjUzMjFhNzJiZjg3ZTFmYTc1NjZhZDI4ZGRgLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHVzZXJMb2NhdGlvbiA9IGF3YWl0IGxvY2F0aW9uO1xyXG4gICAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRXJyb3InLCB7Y2F1c2U6IGVycm9yfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdG9yZSByZWxldmFudCB3ZWF0aGVyIGRhdGFzXHJcbmZ1bmN0aW9uIEdldE1haW5EYXRhKG9iaikge1xyXG4gIHRyeSAge1xyXG4gICAgbWFpbkRhdGEgPSB7XHJcbiAgICAgIGxvY2F0aW9uOiBvYmoubmFtZSxcclxuICAgICAgY291bnRyeTogb2JqLnN5cy5jb3VudHJ5LFxyXG4gICAgICB3ZWF0aGVyOiBvYmoud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgd2VhdGhlclR5cGU6IG9iai53ZWF0aGVyWzBdLm1haW4sXHJcbiAgICAgIHRlbXA6IE1hdGgucm91bmQob2JqLm1haW4udGVtcCksXHJcbiAgICAgIG1pblRlbXA6IE1hdGgucm91bmQob2JqLm1haW4udGVtcF9taW4pLFxyXG4gICAgICBtYXhUZW1wOiBNYXRoLnJvdW5kKG9iai5tYWluLnRlbXBfbWF4KSxcclxuICAgICAgZmVlbDogTWF0aC5yb3VuZChvYmoubWFpbi5mZWVsc19saWtlKSxcclxuICAgICAgaWNvbjogb2JqLndlYXRoZXJbMF0uaWNvbixcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRXJyb3InLCB7Y2F1c2U6IGVycm9yfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDaGFpbiB0aGUgdHdvIHByZXZpb3VzIGZ1bmN0aW9uc1xyXG5hc3luYyBmdW5jdGlvbiBHZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdHMpIHtcclxuICAvL2NvbnNvbGUubG9nKCdMb2FkaW5nLi4uJyk7XHJcbiAgTE9BRElOR19TQ1JFRU4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2JqZWN0ID0gYXdhaXQgR2V0V2VhdGhlck9iamVjdChsb2NhdGlvbiwgdW5pdHMpO1xyXG4gICAgYXdhaXQgR2V0TWFpbkRhdGEob2JqZWN0KTtcclxuICAgIGF3YWl0IGZ1bmN0aW9uICgpIHtMT0FESU5HX1NDUkVFTi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO30oKTtcclxuICAgIC8vY29uc29sZS5sb2cobWFpbkRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydCgnV2UgY291bGRcXCd0IGZpbmQgdGhpcyBjaXR5Li4uJyk7XHJcbiAgICBhd2FpdCBmdW5jdGlvbiAoKSB7TE9BRElOR19TQ1JFRU4uc3R5bGUuZGlzcGxheSA9ICdub25lJzt9KCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yJywge2NhdXNlOiBlcnJvcn0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR0VUIFVTRVIgSU5QVVQgVE8gR0VUIERBVEEgQU5EIFVQREFURSBESVNQTEFZXHJcbkZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdXNlckxvY2F0aW9uID0gVVNFUl9MT0NBVElPTl9JTlBVVC52YWx1ZTtcclxuICBhd2FpdCBHZXRXZWF0aGVyRGF0YSh1c2VyTG9jYXRpb24sIHVuaXRzKTtcclxuICBhd2FpdCBQb3B1bGF0ZURPTShtYWluRGF0YSwgdW5pdHMpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLy8gRGlzcGxheSBiYWNrZ3JvdW5kIGRlcGVuZGluZyBvbiB3ZWF0aGVyXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==