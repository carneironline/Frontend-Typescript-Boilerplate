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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/scripts/FB.js":
/*!***************************!*\
  !*** ./app/scripts/FB.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fb; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Fb =
/*#__PURE__*/
function () {
  function Fb() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Fb);

    this.debug = window.tinyCpt.debug;
    this.disabled = false;
    this.fb = data;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Fb, [{
    key: "setPixelType",
    value: function setPixelType() {
      if (this.disabled) return;
      var hasPixel = typeof this.fb.pixel.name !== 'undefined' ? this.fb.pixel.name : null;

      if (this.isDefined && hasPixel) {
        fbq('init', '410270039520634');
        fbq('trackSingle', '410270039520634', this.fb.pixel.name);
      }
    }
  }, {
    key: "isDefined",
    get: function get() {
      return typeof fbq !== 'undefined' ? true : false;
    }
  }]);

  return Fb;
}();



/***/ }),

/***/ "./app/scripts/GA.js":
/*!***************************!*\
  !*** ./app/scripts/GA.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GA; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products */ "./app/scripts/Products.js");




var GA =
/*#__PURE__*/
function () {
  function GA() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GA);

    this.debug = window.tinyCpt.debug.ga;
    this.Products = new _Products__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GA, [{
    key: "setGlobalVars",
    value: function setGlobalVars() {
      window.dataLayer = window.dataLayer || [];
      if (this.Products.isProductValor && typeof _gaq === 'undefined') window._gaq = window._gaq || [];
    }
  }, {
    key: "setEvents",
    value: function setEvents(action, label) {
      var category = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Piano';
      if (window.tinyCpt.debug.ga) console.log('log-ga-event', category, action, label);
      if (this.Products.isProductValor) _gaq.push(['_trackEvent', category, action, label,, true]);
      dataLayer.push({
        'event': 'EventoGAPiano',
        'eventoGACategoria': category,
        'eventoGAAcao': action,
        'eventoGARotulo': label
      });
    }
  }, {
    key: "setEventsError",
    value: function setEventsError(action, label) {
      if (this.Products.isProductValor) _gaq.push(['_trackEvent', 'Piano Erro', action, label,, true]);
      dataLayer.push({
        'event': 'EventoGAPiano',
        'eventoGACategoria': 'Piano Erro',
        'eventoGAAcao': action,
        'eventoGARotulo': label
      });
    }
  }]);

  return GA;
}();



/***/ }),

/***/ "./app/scripts/Helpers.js":
/*!********************************!*\
  !*** ./app/scripts/Helpers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helpers; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Helpers);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Helpers, null, [{
    key: "isDefined",
    value: function isDefined(prop) {
      return typeof prop !== 'undefined' ? true : false;
    }
  }, {
    key: "setCookie",
    value: function setCookie(c_name, value) {
      var expiredays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var exdate = new Date();
      var hostname = location.hostname ? location.hostname : null;
      if (!hostname) return;
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie = c_name + "=" + escape(value) + (expiredays ? "" : ";expires=" + exdate.toUTCString()) + "; path=/;" + "domain=." + hostname.split('.').reverse()[1] + "." + hostname.split('.').reverse()[0];
    }
  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var match = document.cookie ? document.cookie.match(new RegExp(name + '=([^;]+)')) : false;
      var cookieTiny = match ? unescape(match[1].toString()) : "";
      return cookieTiny;
    }
  }]);

  return Helpers;
}();



/***/ }),

/***/ "./app/scripts/Piano.js":
/*!******************************!*\
  !*** ./app/scripts/Piano.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Piano; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Helpers */ "./app/scripts/Helpers.js");




var Piano =
/*#__PURE__*/
function () {
  function Piano() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Piano);

    this.debug = window.tinyCpt.debug;
    this.content = null;
    this.setExperience();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Piano, [{
    key: "setExperience",
    value: function setExperience() {
      var experienceName = '';
      window.Piano.experience = {};
      if (window.regrasTiny && window.regrasTiny.nomeExperiencia) experienceName = window.subsegmentacaoPiano ? "".concat(regrasTiny.nomeExperiencia, " - ").concat(window.subsegmentacaoPiano) : regrasTiny.nomeExperiencia;
      if (window.nomeExperiencia) experienceName = window.subsegmentacaoPiano ? "".concat(window.nomeExperiencia, " - ").concat(window.subsegmentacaoPiano) : window.nomeExperiencia;
      window.Piano.experience.name = experienceName;
    }
  }, {
    key: "resetUtp",
    value: function resetUtp() {
      if (this.isDefined) _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(this.content.variaveis.constante.cookie.UTP, '', -1);
    }
  }, {
    key: "isDefined",
    get: function get() {
      if (typeof window.tinyCpt !== 'undefined' && typeof window.tinyCpt.Piano !== 'undefined') {
        this.content = window.tinyCpt.Piano;
        return true;
      }

      return false;
    }
  }]);

  return Piano;
}();



/***/ }),

/***/ "./app/scripts/Products.js":
/*!*********************************!*\
  !*** ./app/scripts/Products.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Products =
/*#__PURE__*/
function () {
  function Products() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Products);

    this.productName = typeof window.nomeProdutoPiano !== 'undefined' ? window.nomeProdutoPiano : null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Products, [{
    key: "setGlobal",
    value: function setGlobal() {
      var productsSettings = {
        Product: {
          name: this.productName
        }
      };
      window.tinyCpt = window.tinyCpt ? Object.assign(productsSettings, window.tinyCpt) : productsSettings;
    }
  }, {
    key: "isProductValor",
    get: function get() {
      return this.productName && this.productName === 'valor' ? true : false;
    }
  }]);

  return Products;
}();



/***/ }),

/***/ "./app/scripts/Swg.js":
/*!****************************!*\
  !*** ./app/scripts/Swg.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swg; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Helpers */ "./app/scripts/Helpers.js");






var Swg =
/*#__PURE__*/
function () {
  function Swg() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Swg);

    window.SWG = window.SWG || []; //TODO: Understand why this variable exists

    window.swgEntitlements = window.swgEntitlements || null;
    this.debug = _Helpers__WEBPACK_IMPORTED_MODULE_4__["default"].isDefined(window.tinyCpt) ? window.tinyCpt.debug.swg : false;
    this.disabled = false;
    this.content = null;
    this.localProductPiano = typeof nomeProdutoPiano !== 'undefined' ? nomeProdutoPiano : null;
    this.hasProductJSON = false;
    this.productJSON = null;
    this.elHead = document.head;
    this.setGlobalSWG();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Swg, [{
    key: "setGlobalSWG",
    value: function setGlobalSWG() {
      if (!_Helpers__WEBPACK_IMPORTED_MODULE_4__["default"].isDefined(window.tinyCpt)) return;
      window.tinyCpt.Swg = {
        global: typeof swg !== 'undefined' ? swg : null
      };
    }
  }, {
    key: "setUtms",
    value: function setUtms() {
      var urlParams = new URLSearchParams(window.location.search.substring(1));
      var utmsProps = typeof window.glbPaywall.swg !== 'undefined' && typeof window.glbPaywall.swg.utms !== 'undefined' ? window.glbPaywall.swg.utms : null;
      utmsProps.forEach(function (item) {
        var name = item.name.toLowerCase();
        var value = item.value;
        urlParams.set("utm_".concat(name), value);
      });

      if (window.tinyCpt.debug.swg) {
        console.log('log-method', 'setUtms');
        console.log('log-method-setUtms', utmsProps);
        console.log('log-method-setUtms', location);
      }

      if (this.disabled || !this.isDefined || !utmsProps) return;
      window.tinyCpt.Swg.global.subscribe('br.com.infoglobo.oglobo.swg.google');
    }
  }, {
    key: "getProducts",
    value: function () {
      var _getProducts = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.debug) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return fetch('../app/mocks/swg/products.json').then(function (res) {
                  return res.json();
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
                _context.next = 6;
                return fetch('https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/swg/products.json').then(function (res) {
                  return res.json();
                });

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProducts() {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }, {
    key: "getProduct",
    value: function () {
      var _getProduct = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        var products, product;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.localProductPiano) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.getProducts();

              case 4:
                products = _context2.sent;
                product = products.filter(function (item) {
                  return item.pianoProductName === _this.localProductPiano;
                })[0];
                return _context2.abrupt("return", product || null);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getProduct() {
        return _getProduct.apply(this, arguments);
      }

      return getProduct;
    }()
  }, {
    key: "removeProperties",
    value: function () {
      var _removeProperties = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(obj) {
        var propsToRemove, newObj;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                propsToRemove = ['productName', 'pianoProductName'];
                newObj = Object.assign({}, obj);
                propsToRemove.forEach(function (element) {
                  delete newObj[element];
                });
                return _context3.abrupt("return", newObj);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function removeProperties(_x) {
        return _removeProperties.apply(this, arguments);
      }

      return removeProperties;
    }()
  }, {
    key: "markupTemplate",
    value: function () {
      var _markupTemplate = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var productJSON, product;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t1 = this;
                _context4.next = 3;
                return this.getProduct();

              case 3:
                _context4.t2 = _context4.sent;
                _context4.next = 6;
                return _context4.t1.removeProperties.call(_context4.t1, _context4.t2);

              case 6:
                _context4.t0 = _context4.sent;

                if (_context4.t0) {
                  _context4.next = 9;
                  break;
                }

                _context4.t0 = null;

              case 9:
                productJSON = _context4.t0;
                product = Object.keys(productJSON).length ? JSON.stringify(productJSON) : null;

                if (product) {
                  _context4.next = 15;
                  break;
                }

                return _context4.abrupt("return");

              case 15:
                this.hasProductJSON = true;
                if (this.debug) console.log({
                  'log-SWG-Product': product
                });
                this.productJSON = "".concat(product);

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function markupTemplate() {
        return _markupTemplate.apply(this, arguments);
      }

      return markupTemplate;
    }()
  }, {
    key: "setMarkup",
    value: function () {
      var _setMarkup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var element;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.markupTemplate();

              case 2:
                if (this.productJSON) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return");

              case 4:
                element = document.createElement('script');
                element.type = 'application/ld+json';
                element.innerHTML = this.productJSON;
                this.elHead.insertAdjacentElement('beforeend', element);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setMarkup() {
        return _setMarkup.apply(this, arguments);
      }

      return setMarkup;
    }()
  }, {
    key: "setSwgScript",
    value: function setSwgScript() {
      var element = document.createElement('script');
      element.src = 'https://news.google.com/swg/js/v1/swg.js';
      this.elHead.insertAdjacentElement('beforeend', element);
    }
  }, {
    key: "setAldebaranScript",
    value: function setAldebaranScript() {
      var element = document.createElement('script');
      var urlProd = 'https://s3.glbimg.com/v1/AUTH_c10ae819c568460bb4ec17c0a8ec5267/aldebaran/js/bundle.js';
      var urlStg = 'https://s3.glbimg.com/v1/AUTH_addc5e8f316f48ea9181af37160b22b4/aldebaran/js/bundle.js';
      element.src = window.tinyCpt.isProduction ? urlProd : urlStg;
      this.elHead.insertAdjacentElement('beforeend', element);
    }
  }, {
    key: "testSWG",
    value: function testSWG() {
      return new Promise(function (resolve, reject) {
        var count = 0;
        var interval = setInterval(function () {
          if (window.swg) {
            window.tinyCpt.Swg.global = window.swg;
            resolve(window.tinyCpt.Swg.global);
            clearInterval(interval);
          }

          if (count === 20) {
            reject('There isn\'t window.swg');
            clearInterval(interval);
          }

          count++;
        }, 100);
      });
    }
  }, {
    key: "init",
    value: function () {
      var _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.localProductPiano) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.next = 4;
                return this.setMarkup();

              case 4:
                if (this.hasProductJSON) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return");

              case 6:
                _context6.next = 8;
                return this.setSwgScript();

              case 8:
                _context6.next = 10;
                return this.setAldebaranScript();

              case 10:
                _context6.next = 12;
                return this.testSWG();

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "isDefined",
    get: function get() {
      return window.tinyCpt.Swg.global ? true : false;
    }
  }]);

  return Swg;
}();



/***/ }),

/***/ "./app/scripts/Tiny.js":
/*!*****************************!*\
  !*** ./app/scripts/Tiny.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tiny; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products */ "./app/scripts/Products.js");




var Tiny =
/*#__PURE__*/
function () {
  function Tiny() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tiny);

    this.Products = new _Products__WEBPACK_IMPORTED_MODULE_2__["default"]();
    window.hasPaywall = window.hasPaywall || false;
    window.tp = window.tp || [];
    window.Piano = window.Piano || {};
    window.PaywallAnalytics = window.PaywallAnalytics || {};
    this.setGlobalTiny();
    this.Products.setGlobal();
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tiny, [{
    key: "setGlobalTiny",
    value: function setGlobalTiny() {
      var defaultSettings = {
        debug: {
          tiny: false,
          paywall: false,
          swg: false,
          ga: false
        },
        isProduction: window.ambienteUtilizadoPiano === 'prd' ? true : false
      };
      window.tinyCpt = window.tinyCpt ? Object.assign(defaultSettings, window.tinyCpt) : defaultSettings;
    }
  }, {
    key: "setPiano",
    value: function setPiano(obj) {
      window.tinyCpt.Piano = obj;
    }
  }, {
    key: "init",
    value: function init() {}
  }]);

  return Tiny;
}();



/***/ }),

/***/ "./app/scripts/cpnt-paywall/Paywall-ga.js":
/*!************************************************!*\
  !*** ./app/scripts/cpnt-paywall/Paywall-ga.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaywallGAModule; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpers */ "./app/scripts/Helpers.js");
/* harmony import */ var _Piano__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Piano */ "./app/scripts/Piano.js");
/* harmony import */ var _GA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GA */ "./app/scripts/GA.js");






var PaywallGAModule =
/*#__PURE__*/
function () {
  function PaywallGAModule() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PaywallGAModule);

    this.Piano = new _Piano__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.GA = new _GA__WEBPACK_IMPORTED_MODULE_4__["default"]();
    window.dataLayer = window.dataLayer || [];
    this.debug = window.tinyCpt.debug.paywall;
    this.disabled = false;
    this.metrics = {
      paywall: {},
      fb: {
        pixel: {}
      }
    };
    this.paywallType();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PaywallGAModule, [{
    key: "paywallLoad",
    value: function paywallLoad() {
      if (!this.Piano.isDefined) return;
      var _Piano = this.Piano.content;
      this.GA.setEvents('Exibicao Register', window.Piano.experience.name);
      _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(_Piano.variaveis.constante.cookie.RTIEX, true, 1);
    }
  }, {
    key: "trigger",
    value: function trigger(element) {
      if (this.disabled) return;
      var resetUtp = element.dataset.gaResetutp || null;
      var imageTop = element.dataset.gaImagePosition;
      var label = imageTop === 'top' ? element.dataset.gaLabel + this.metrics.paywall.label : element.dataset.gaLabel;
      var data = {
        event: 'EventoGA',
        eventoGACategoria: this.metrics.paywall.name,
        eventoGAAcao: element.dataset.gaAction || action,
        eventoGARotulo: label,
        eventoGAValor: 0,
        eventoGAInteracao: false
      };
      if (resetUtp) this.Piano.resetUtp();
      this.setDatalayer(data);
    }
  }, {
    key: "paywallType",
    value: function paywallType() {
      var type = typeof window.tinyCpt.Piano !== 'undefined' && typeof window.tinyCpt.Piano.typePaywall !== 'undefined' && window.tinyCpt.Piano.typePaywall ? window.tinyCpt.Piano.typePaywall.toLowerCase() : 'paywall';

      switch (type) {
        case 'register':
          this.metrics.paywall.name = 'Register comum';
          this.metrics.paywall.label = 'Cadastre-se';
          this.metrics.fb.pixel.name = 'ViewRegisterWall';
          break;

        case 'exclusivo':
          this.metrics.paywall.name = 'Register exclusivo';
          this.metrics.paywall.label = 'Assine agora';
          this.metrics.fb.pixel.name = 'ViewLoginExclusivo';
          break;

        case 'paywall':
          this.metrics.paywall.name = 'paywall';
          this.metrics.paywall.label = 'Assine agora';
          this.metrics.fb.pixel.name = 'ViewPaywallExclusivo';
          break;
      }
    }
  }, {
    key: "setDatalayer",
    value: function setDatalayer() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Object.keys(data).length) {
        dataLayer.push(data);
      }
    }
  }]);

  return PaywallGAModule;
}();



/***/ }),

/***/ "./app/scripts/cpnt-paywall/Paywall.js":
/*!*********************************************!*\
  !*** ./app/scripts/cpnt-paywall/Paywall.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaywallCpt; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Piano__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Piano */ "./app/scripts/Piano.js");
/* harmony import */ var _Paywall_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paywall-ga */ "./app/scripts/cpnt-paywall/Paywall-ga.js");
/* harmony import */ var _Swg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Swg */ "./app/scripts/Swg.js");
/* harmony import */ var _FB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FB */ "./app/scripts/FB.js");







var PaywallCpt =
/*#__PURE__*/
function () {
  function PaywallCpt() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PaywallCpt);

    this.Piano = new _Piano__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.GA = new _Paywall_ga__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.SWG = new _Swg__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.FB = new _FB__WEBPACK_IMPORTED_MODULE_5__["default"](this.GA.metrics.fb);
    this.debug = window.tinyCpt.debug.paywall;
    this.domain = window.tinyCpt.isProduction ? 'https://login.globo.com/' : 'https://login.qa.globoi.com/';
    this.setTemplateSettings(function () {
      _this.init();
    });
    window.PaywallCpt = this;
    window.tinyCpt.Paywall = {
      domain: this.domain,
      GA: this.GA.metrics
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PaywallCpt, [{
    key: "setTemplateSettings",
    value: function setTemplateSettings(callback) {
      var templateSettings = {
        template: 'default',
        assetsPath: '',
        display: null,
        productClass: typeof nomeProdutoPiano !== 'undefined' ? "paywall-cpt-".concat(nomeProdutoPiano) : 'paywall-cpt-oglobo',
        title: 'Esse conteúdo é o título.',
        targetBlank: true,
        topMobi: '',
        topDesk: '',
        topLink: '',
        leftMobi: '',
        leftDesk: '',
        leftLink: '',
        rightMobi: '',
        rightDesk: '',
        rightLink: ''
      };
      templateSettings.hideLoginArea = false;
      templateSettings.loginText = 'Faça login';
      templateSettings.loginPreText = 'Já possui cadastro?';
      window.glbPaywall = window.glbPaywall ? Object.assign({}, templateSettings, window.glbPaywall) : templateSettings;
      window.glbPaywall.loginTag = "".concat(window.glbPaywall.loginPreText, " <a href=\"").concat(this.getUrlLoginRegister(), "\" data-is-login=\"true\" data-ga-action=\"Clique em link\" data-ga-label=\"Link 2 - Fa\xE7a login\" data-ga-resetUtp=\"false\" data-href-target=\" ").concat(window.glbPaywall.targetBlank, " \">").concat(window.glbPaywall.loginText, "</a>");
      if (window.glbPaywall.hideLoginArea) this.clearLoginArea();
      if (this.debug) this.setDebugTemplateSettings();
      callback();
    }
  }, {
    key: "clearLoginArea",
    value: function clearLoginArea() {
      if (window.glbPaywall) {
        window.glbPaywall.loginTag = '';
      }
    }
  }, {
    key: "setDebugTemplateSettings",
    value: function setDebugTemplateSettings() {
      var obj = {};
      obj.topMobi = 'https://via.placeholder.com/300x150';
      obj.topDesk = 'https://via.placeholder.com/804x128';
      obj.topLink = 'https://google.com?l1';
      obj.leftMobi = 'https://via.placeholder.com/300x500';
      obj.leftDesk = 'https://via.placeholder.com/402x515';
      obj.leftLink = 'https://google.com?l2';
      obj.rightMobi = 'https://via.placeholder.com/300x500';
      obj.rightDesk = 'https://via.placeholder.com/402x515';
      obj.rightLink = 'https://google.com?l3';
      window.glbPaywall = Object.assign({}, window.glbPaywall, obj);
    }
  }, {
    key: "bodyAdjust",
    value: function bodyAdjust() {
      this.elBody.style.setProperty('overflow', 'hidden', 'important');
      this.elBody.style.setProperty('position', 'fixed', 'important');
      this.elBody.style.setProperty('width', '100%', 'important');
    }
  }, {
    key: "setElWrapper",
    value: function setElWrapper() {
      this.elCpt = document.querySelector('.paywall-cpt');
    }
  }, {
    key: "removeElements",
    value: function removeElements() {
      this.setElWrapper();
      if (this.elCpt) this.elCpt.remove();
      var elToRemove = document.querySelectorAll('.protected-content, #infoarte-main-content');
      elToRemove.forEach(function (element) {
        element.remove();
      });
    }
  }, {
    key: "createTemplate",
    value: function createTemplate() {
      var _this2 = this;

      this.elBody = document.body;
      this.bodyAdjust();
      this.removeElements();
      this.elBody.insertAdjacentHTML('beforeend', this.cssMinified);
      this.elBody.insertAdjacentHTML('beforeend', this.template);
      this.activeTemplateSettings();

      if (window.matchMedia('(min-width: 1024px)').matches) {
        window.addEventListener('resize', function () {
          _this2.activeTemplateSettings();
        });
      }

      this.GA.paywallLoad();
    }
  }, {
    key: "activeTemplateSettings",
    value: function activeTemplateSettings() {
      var _this3 = this;

      this.setElWrapper();
      this.elCptWrap = this.elCpt.querySelector('.paywall-cpt-wrap');
      setTimeout(function () {
        var elBodyHeight = window.innerHeight + 4;
        var elCptWrapHeight = _this3.elCptWrap.offsetHeight;
        var currentTop = window.matchMedia('(min-width: 1024px)').matches ? Math.abs(elBodyHeight / 2) : Math.abs(elBodyHeight / 2);
        var topWithFullElement = elBodyHeight - elCptWrapHeight;
        _this3.elCpt.style.top = "".concat(currentTop, "px");
        _this3.elCpt.style.opacity = 1;
        _this3.elCpt.style.zIndex = 9999999999;

        _this3.evtWheel(currentTop, topWithFullElement);

        _this3.evtTouch(currentTop, topWithFullElement);

        _this3.activeEvents();

        _this3.FB.setPixelType();
      }, 1000);
    }
  }, {
    key: "activeEvents",
    value: function activeEvents() {
      var _this4 = this;

      var clickTargets = this.elCptWrap.querySelectorAll('a');
      clickTargets.forEach(function (element) {
        element.addEventListener('click', function (evt) {
          evt.preventDefault();
          var isLogin = Boolean(element.dataset.isLogin) || false;
          var url = element.getAttribute('href') || false;
          var isUrlSwg = url ? url.toLowerCase().includes('ofertaswg') : false;
          var notBlank = element.dataset.hrefTarget || true;
          this.GA.trigger(element);
          if (!isLogin && isUrlSwg) this.SWG.setUtms();

          if (url && !isUrlSwg) {
            setTimeout(function () {
              notBlank ? window.location.href = url : window.open(url);
            }, 300);
          }
        }.bind(_this4));
      });
    }
  }, {
    key: "evtWheel",
    value: function evtWheel(currentTop, topWithFullElement) {
      var newtop = currentTop;
      window.addEventListener('wheel', function (evt) {
        var step = currentTop / 100;
        var multiplier = 20;

        if (evt.deltaY >= 1) {
          var elTop = newtop - step * multiplier;
          newtop = elTop < topWithFullElement ? topWithFullElement : elTop;
          this.elCpt.style.top = "".concat(newtop, "px");
        }

        if (evt.deltaY <= -1) {
          var _elTop = newtop + step * multiplier;

          newtop = _elTop > currentTop ? currentTop : _elTop;
          this.elCpt.style.top = "".concat(newtop, "px");
        }
      }.bind(this));
    }
  }, {
    key: "evtTouch",
    value: function evtTouch(currentTop, topWithFullElement) {
      var newtop = currentTop;
      var touchstartY = 0;
      var touchendY = 0;
      window.addEventListener('touchstart', function (evt) {
        touchstartY = evt.changedTouches[0].screenY;
      });
      window.addEventListener('touchmove', function (evt) {
        var multiplier = 20;
        touchendY = evt.changedTouches[0].screenY;

        if (touchendY < touchstartY) {
          var diff = Math.abs(touchstartY) - Math.abs(touchendY);
          var elTop = newtop - diff;
          newtop = elTop < topWithFullElement ? topWithFullElement : elTop;
          this.elCpt.style.top = "".concat(newtop, "px");
        }

        if (touchendY > touchstartY) {
          var _diff = touchendY - touchstartY;

          var _elTop2 = newtop + _diff;

          newtop = _elTop2 > currentTop ? currentTop : _elTop2;
          this.elCpt.style.top = "".concat(newtop, "px");
        }
      }.bind(this));
    }
  }, {
    key: "getUrlLoginRegister",
    value: function getUrlLoginRegister() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var urlValidaUsuarioBarramento = window.ambienteUtilizadoPiano === 'prd' ? 'https://assinatura.oglobo.globo.com/ValidaUsuarioBarramento.html' : 'https://assinatura.globostg.globoi.com/ValidaUsuarioBarramento.html';
      var uri = location.href;
      var str = '';
      var urlReturn = '';

      if (!this.debug && this.Piano.isDefined) {
        urlReturn = encodeURIComponent(urlValidaUsuarioBarramento + '?codigoProduto=' + this.Piano.content.variaveis.getCodigoProduto() + '&serviceId=' + this.Piano.content.variaveis.getServicoId() + '&ambienteUtilizado=' + window.ambienteUtilizadoPiano + '&nomeProduto=' + this.Piano.content.variaveis.getNomeProduto() + '&urlRetorno=' + uri);

        if (type === 'register') {
          str = "".concat(this.domain, "cadastro/").concat(this.Piano.content.variaveis.getServicoId(), "?url=").concat(urlReturn);
        } else {
          str = "".concat(this.domain, "login/").concat(this.Piano.content.variaveis.getServicoId(), "?url=").concat(urlReturn);
        }
      }

      return str;
    }
  }, {
    key: "init",
    value: function init() {
      var _this5 = this;

      var delayTimer = window.glbPaywall && window.glbPaywall.delayTimer ? window.glbPaywall.delayTimer * 1000 : 0;
      setTimeout(function () {
        _this5.createTemplate();
      }, delayTimer);
    }
  }, {
    key: "templateVars",
    get: function get() {
      return window.glbPaywall;
    }
  }, {
    key: "template",
    get: function get() {
      var template = "\n\t  <div class=\"paywall-cpt ".concat(this.templateVars.productClass, "\"> \n\t\t<div class=\"paywall-cpt-wrap\">\n\t\t<div class=\"paywall-cpt-wrap__text-head\">\n\t\t\t").concat(this.templateVars.title, "\n\t\t</div>\n\t\t  <div class=\"paywall-cpt-wrap__top\">\n\t\t  \t<a href=\"").concat(this.templateVars.topLink, "\" data-ga-image-position=\"top\" data-ga-action=\"Clique em link\" data-ga-label=\"Link 1 -\" data-ga-resetUtp=\"true\" data-href-target=\"").concat(this.templateVars.targetBlank, "\">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.topMobi, "\" media=\"(max-width: 1023px)\">\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.topDesk, "\" media=\"(min-width: 1024px)\">\n\t\t\t\t\t<img src=\"").concat(this.templateVars.topMobi, "\" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t  <div class=\"paywall-cpt-wrap__text-center ").concat(window.glbPaywall.hideLoginArea ? 'is-hide' : '', "\">\n\t\t  \t").concat(this.templateVars.loginTag, "\n\t\t  </div>\n\t\t  <div class=\"paywall-cpt-wrap__left\">\n\t\t  \t<a href=\"").concat(this.templateVars.leftLink, "\" data-ga-action=\"Clique em link\" data-ga-label=\"Link 4 - Banner oferta esquerda\" data-ga-resetUtp=\"true\" data-href-target=\"").concat(this.templateVars.targetBlank, "\">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.leftMobi, "\" media=\"(max-width: 1023px)\">\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.leftDesk, "\" media=\"(min-width: 1024px)\">\n\t\t\t\t\t<img src=\"").concat(this.templateVars.leftMobi, "\" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t  <div class=\"paywall-cpt-wrap__right\">\n\t\t  \t<a href=\"").concat(this.templateVars.rightLink, "\"  data-ga-action=\"Clique em link\" data-ga-label=\"Link 5 - Banner oferta direita\" data-ga-resetUtp=\"true\" data-href-target=\"").concat(this.templateVars.targetBlank, "\">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.rightMobi, "\" media=\"(max-width: 1023px)\">\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.rightDesk, "\" media=\"(min-width: 1024px)\">\n\t\t\t\t\t<img src=\"").concat(this.templateVars.rightMobi, "\" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t  ");
      return template;
    }
  }, {
    key: "cssMinified",
    get: function get() {
      return "<style>\n\t  .paywall-cpt{opacity:0;position:fixed;bottom:0;left:0;width:100vw;overflow:hidden;background:#fff;-webkit-box-shadow:0 0 70px 0 rgba(0,0,0,.5);box-shadow:0 0 70px 0 rgba(0,0,0,.5);font-family:Arial,Helvetica,sans-serif}.paywall-cpt,.paywall-cpt *{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .2s ease;transition:all .2s ease}.paywall-cpt a{font-weight:700;text-decoration:none}.paywall-cpt a:hover{text-decoration:underline}.paywall-cpt .paywall-cpt-wrap__text-head,.paywall-cpt a{color:#000}.paywall-cpt-oglobo .paywall-cpt-wrap__text-head,.paywall-cpt-oglobo a{color:#325e94}.paywall-cpt-wrap{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:20px}@media screen and (min-width:1024px){.paywall-cpt-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.paywall-cpt-wrap img{display:block;max-width:100%;height:auto}.paywall-cpt-wrap__top{padding-top:20px}.paywall-cpt-wrap__text-head{width:100%;text-align:center;padding:20px 0 0;font-size:20px;font-weight:700}.paywall-cpt-wrap__text-center{width:100%;text-align:center;padding:20px 0;color:#767676;font-size:16px}.paywall-cpt-wrap__text-center.is-hide{padding-bottom:0}\n\t  </style>";
    }
  }]);

  return PaywallCpt;
}();



/***/ }),

/***/ "./app/scripts/index.js":
/*!******************************!*\
  !*** ./app/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Helpers */ "./app/scripts/Helpers.js");
/* harmony import */ var _Tiny__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tiny */ "./app/scripts/Tiny.js");
/* harmony import */ var _GA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GA */ "./app/scripts/GA.js");
/* harmony import */ var _Swg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Swg */ "./app/scripts/Swg.js");
/* harmony import */ var _cpnt_paywall_Paywall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cpnt-paywall/Paywall */ "./app/scripts/cpnt-paywall/Paywall.js");







var Tiny = new _Tiny__WEBPACK_IMPORTED_MODULE_3__["default"]();
var GA = new _GA__WEBPACK_IMPORTED_MODULE_4__["default"]();
GA.setGlobalVars();
Piano.activePaywall = true;
Piano.typePaywall = null;
Piano.variaveis = {
  ambientesAceitos: "int,qlt,prd",
  statusHttpObterAutorizacaoAcesso: "400,404,406,500,502,503,504",
  statusHttpObterAssinaturaInadimplente: "400,404,500,502,503,504",
  isCallbackMetterExpired: false,
  constante: {
    cookie: {
      GCOM: 'GLBID',
      UTP: '_utp',
      RTIEX: '_rtiex',
      AMBIENTE: 'ambientePiano',
      SAVE_SUBSCRIPTION: 'saveSubscriptionCookie',
      CREATED_GLOBOID: 'createdGloboId',
      GLOBOID_MESSAGE: 'globoIdMessage'
    },
    metricas: {
      EVENTO_SEM_ACAO: 'sem acao',
      ERRO: 'Erro'
    },
    krux: {
      SEGMENTACOES: 'kxglobo_segs',
      KRUXLIGADO: 'krux-ligado'
    },
    util: {
      IP: "127.0.0.1",
      AMBIENTE: "ambiente-desejado",
      DEBUG: "debug-piano"
    }
  },
  isConteudoExclusivo: function isConteudoExclusivo() {
    return window.conteudoExclusivo ? true : false;
  },
  getAmbientePiano: function getAmbientePiano() {
    if (Piano.variaveis.ambientesAceitos.indexOf(Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE)) > -1) {
      _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.AMBIENTE, Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE), 1);
      return Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE);
    }

    if (Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE) == 'false') {
      _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.AMBIENTE, "", -1);
    }

    if (_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.AMBIENTE)) {
      return _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.AMBIENTE);
    }

    ;
    return Piano.variaveis.ambientesAceitos.indexOf(window.ambienteUtilizadoPiano) > -1 ? window.ambienteUtilizadoPiano : 'prd';
  },
  getTipoConteudoPiano: function getTipoConteudoPiano() {
    return window.tipoConteudoPiano;
  },
  executouPageview: function executouPageview() {
    return window.executouPageview ? true : false;
  },
  getNomeProduto: function getNomeProduto() {
    if (!window.nomeProdutoPiano) {
      GA.setEventsError("Nome do produto não definido.", window.location.href);
      return;
    }

    return window.nomeProdutoPiano;
  },
  getServicoId: function getServicoId() {
    var id = '0000';

    if (Piano.variaveis.getNomeProduto() === 'oglobo' || Piano.variaveis.getNomeProduto() === 'blogs' || Piano.variaveis.getNomeProduto() === 'kogut' || Piano.variaveis.getNomeProduto() === 'acervo' || Piano.variaveis.getNomeProduto() === 'jornaldigital') {
      return id = '3981';
    }

    if (Piano.util.isRevista() && Piano.variaveis.getNomeProduto() === 'monet') {
      return id = '6618';
    } else if (Piano.util.isRevista()) {
      return id = '6697';
    }

    if (Piano.variaveis.getNomeProduto() === 'valor') {
      return id = '6668';
    }

    if (id === '0000') GA.setEventsError('ServiceID não definido.', document.location.href + ' nomeProduto: ' + Piano.variaveis.getNomeProduto());
    return id;
  },
  getCodigoProduto: function getCodigoProduto() {
    var nomeProduto = Piano.variaveis.getNomeProduto();

    switch (nomeProduto) {
      case 'oglobo':
      case 'blogs':
      case 'kogut':
        return 'OG03';

      case 'acervo':
        return 'OG04';

      case 'jornaldigital':
        return 'OG01';

      case 'auto-esporte':
      case 'epoca':
      case 'vogue':
      case 'glamour':
      case 'casa-vogue':
      case 'marie-claire':
      case 'globo-rural':
      case 'gq':
      case 'monet':
      case 'crescer':
      case 'galileu':
        return nomeProduto;

      case 'casa-e-jardim':
        return 'casa-jardim';

      case 'quem-acontece':
        return 'quem';

      case 'valor':
        return 'valordigital';

      default:
        GA.setEventsError("Ao obter código do produto", nomeProduto + " - " + document.location.href);
        Piano.autenticacao.defineUsuarioPiano(true, 'erro', true, " ");
        return 'error';
    }
  }
};
Piano.janelaAnonima = {
  retry: function retry(isDone, next) {
    var current_trial = 0,
        max_retry = 50,
        interval = 10,
        is_timeout = false;
    var id = window.setInterval(function () {
      if (isDone()) {
        window.clearInterval(id);
        next(is_timeout);
      }

      if (current_trial++ > max_retry) {
        window.clearInterval(id);
        is_timeout = true;
        next(is_timeout);
      }
    }, 10);
  },
  isIE10OrLater: function isIE10OrLater(user_agent) {
    var ua = user_agent.toLowerCase();
    var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);

    if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
      return false;
    }

    if (match && parseInt(match[1], 10) >= 10) {
      return true;
    }

    return false;
  },
  detectPrivateMode: function detectPrivateMode(callback) {
    var is_private;

    if (window.webkitRequestFileSystem) {
      window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
        is_private = false;
      }, function (e) {
        is_private = true;
      });
    } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
      var db;

      try {
        db = window.indexedDB.open('test');
      } catch (e) {
        is_private = true;
      }

      if (typeof is_private === 'undefined') {
        Piano.janelaAnonima.retry(function isDone() {
          return db.readyState === 'done' ? true : false;
        }, function next(is_timeout) {
          if (!is_timeout) {
            is_private = db.result ? false : true;
          }
        });
      }
    } else if (Piano.janelaAnonima.isIE10OrLater(window.navigator.userAgent)) {
      is_private = false;

      try {
        if (!window.indexedDB) {
          is_private = true;
        }
      } catch (e) {
        is_private = true;
      }
    } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
      try {
        window.localStorage.setItem('test', 1);
      } catch (e) {
        is_private = true;
      }

      if (typeof is_private === 'undefined') {
        is_private = false;
        window.localStorage.removeItem('test');
      }
    }

    Piano.janelaAnonima.retry(function isDone() {
      return typeof is_private !== 'undefined' ? true : false;
    }, function next(is_timeout) {
      callback(is_private);
    });
  }
};
Piano.krux = {
  tem: function tem() {
    return window.localStorage.getItem(Piano.variaveis.constante.krux.SEGMENTACOES) ? true : false;
  },
  ligado: function ligado() {
    var parametro = Piano.variaveis.constante.krux.KRUXLIGADO;
    var valorParametro = Piano.util.getValorParametroNaUrl(parametro);

    if (valorParametro == 'false' && window.ambienteUtilizadoPiano != "prd") {
      _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(parametro, valorParametro, 1);
      return false;
    }

    if (valorParametro == 'true' || window.ambienteUtilizadoPiano == "prd") {
      _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(parametro, "", -1);
      return true;
    }

    if (_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.krux.KRUXLIGADO) == "false") {
      return false;
    }

    return true;
  },
  obtemSegmentacao: function obtemSegmentacao() {
    if (Piano.krux.tem() && Piano.krux.ligado()) {
      var segmentacoes = window.localStorage.getItem(Piano.variaveis.constante.krux.SEGMENTACOES).split(',');

      for (var i = 0; i < segmentacoes.length; i++) {
        tp.push(["setCustomVariable", segmentacoes[i], segmentacoes[i]]);
      }
    }
  }
};
Piano.metricas = {
  enviaEventosGA: function enviaEventosGA(_GAAcao, _GARotulo) {
    //TODO: arquivo tinypass.js, inserido pela Piano, utiliza essa função
    var isProductValor = typeof window.nomeProdutoPiano !== 'undefined' && window.nomeProdutoPiano === 'valor' ? true : false;
    if (isProductValor) _gaq.push(['_trackEvent', 'Piano', _GAAcao, _GARotulo,, true]);else dataLayer.push({
      'event': 'EventoGAPiano',
      'eventoGACategoria': 'Piano',
      'eventoGAAcao': _GAAcao,
      'eventoGARotulo': _GARotulo
    });
  },
  montaRotuloGA: function montaRotuloGA() {
    //TODO: at Piano as setExperience() | Check on old tiny before remove
    if (window.regrasTiny && window.regrasTiny.nomeExperiencia) {
      return window.subsegmentacaoPiano ? window.regrasTiny.nomeExperiencia + " - " + window.subsegmentacaoPiano : window.regrasTiny.nomeExperiencia;
    } else if (window.nomeExperiencia) {
      return window.subsegmentacaoPiano ? window.nomeExperiencia + " - " + window.subsegmentacaoPiano : window.nomeExperiencia;
    }

    return " ";
  },
  setLimiteContagem: function setLimiteContagem(metricas) {
    _GALimite = "-";
    _GAContagem = "-";
    if (!metricas) return;
    _GAContagem = "" + metricas.views;

    if (_GAContagem.length == 1) {
      _GAContagem = "0" + _GAContagem;
    }

    _GALimite = metricas.nomeExperiencia + " : " + metricas.maxViews;
  },
  identificarPassagemRegister: function identificarPassagemRegister(regras) {
    var passagem = Piano.variaveis.constante.metricas.EVENTO_SEM_ACAO;

    if (_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.RTIEX)) {
      passagem = regras.fluxo.indexOf("hardwall") != -1 ? 'register-hardwall-passou' : 'register-contagem-passou';
      _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.RTIEX, "", -1);
    }

    return passagem;
  },
  executaAposPageview: function executaAposPageview(expirou) {
    if (!Piano.variaveis.executouPageview()) {
      window.regrasTiny.fluxo = window.tpContext ? tpContext.toLowerCase() : '-';
      window.regrasTiny.nomeExperiencia = window.nomeExperiencia ? window.nomeExperiencia : '';
      Piano.metricas.setLimiteContagem(window.regrasTiny);
      if (expirou == false) GA.setEvents(Piano.metricas.identificarPassagemRegister(window.regrasTiny), Piano.metricas.montaRotuloGA());
      executouPageview = true;
    }
  },
  setaVariaveis: function setaVariaveis(idLogin, tipoLogin, assinaturaLogada) {
    PaywallAnalytics.idLoginAssinante = idLogin;
    PaywallAnalytics.tipoLoginAssinante = tipoLogin;
    PaywallAnalytics.assinaturaLogada = assinaturaLogada;
  }
};
Piano.banner = {
  mostrarFooter: function mostrarFooter(versao) {
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/footer-piano/" + versao + "/styles/styles.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/footer-piano/" + versao + "/scripts/novo-banner-footer.js");
  },
  mostrarBotaoAssinaturaHeaderFooter: function mostrarBotaoAssinaturaHeaderFooter(versao) {
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/banner-header-footer-piano/" + versao + "/styles/styles.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/banner-header-footer-piano/" + versao + "/scripts/banner-header-footer-piano.js");
  },
  mostrarAvatarHeader: function mostrarAvatarHeader(versao) {
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/avatar-header-piano/" + versao + "/styles/styles.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/avatar-header-piano/" + versao + "/scripts/avatar-header-piano.js");
  },
  bottomFixed: function bottomFixed() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    window.glbBannerBottom = params;
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/banner-bottom-fixed/styles/banner-bottom-fixed.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/banner-bottom-fixed/scripts/banner-bottom-fixed.js");
  },
  mostrarSWG: function mostrarSWG() {
    var css = "<link rel='stylesheet' type='text/css' href='https://static".concat(Piano.util.montaUrlStg(), ".infoglobo.com.br/paywall/swg/v1/styles/style.css'>");
    var scriptJs = "https://static".concat(Piano.util.montaUrlStg(), ".infoglobo.com.br/paywall/swg/v1/script/anuncio-swg.js");
    Piano.util.adicionarCss(css);
    Piano.xmlHttpRequest.geraScriptNaPagina(scriptJs);
  },
  mostrarHighlightSale: function mostrarHighlightSale(versao) {
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/highlight-sale/" + versao + "/styles/styles.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/highlight-sale/" + versao + "/scripts/highlight-sale.js");
  },
  mostrarSubscribeButtonValor: function mostrarSubscribeButtonValor(versao) {
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/valor-subscribe-button/" + versao + "/scripts/subscribe-button.js");
  }
};
Piano.register = {
  mostrarBarreira: function mostrarBarreira(versao) {
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/register-piano/" + versao + "/styles/styles.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/register-piano/" + versao + "/scripts/nova-tela-register.js");
    _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
    GA.setEvents("Exibicao Register", Piano.metricas.montaRotuloGA());
    _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.RTIEX, true, 1);
  }
};
Piano.helper = {
  mostrarBarreira: function mostrarBarreira() {
    Piano.xmlHttpRequest.geraScriptNaPagina("https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/helper/register.js");
    _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
    GA.setEvents("Exibicao Register", Piano.metricas.montaRotuloGA());
    _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.RTIEX, true, 1);
  }
};
Piano.paywall = {
  redirecionarBarreira: function redirecionarBarreira(url) {
    GA.setEvents("Barreira", Piano.metricas.montaRotuloGA());
    _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
    setTimeout(function () {
      window.location.href = url;
    }, 1000);
  },
  show: function show() {
    var typePaywall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (window.tinyCpt.debug.paywall) console.log('log-method', 'Piano.paywall.show');
    Piano.typePaywall = typePaywall;

    if (!Piano.activePaywall) {
      console.warn('Paywall - Is not avaiable');
      Piano.triggerAdvertising();
    } else {
      try {
        new _cpnt_paywall_Paywall__WEBPACK_IMPORTED_MODULE_6__["default"]();
        window.hasPaywall = true;
      } catch (e) {
        console.error('Paywall - Error on load');
        Piano.triggerAdvertising();
      }
    }
  }
};

Piano.triggerAdvertising = function () {
  var event = new CustomEvent('clearForAds');
  document.dispatchEvent(event);
};

Piano.checkPaywall = function () {
  var count = 0;
  var checkGate = setInterval(function () {
    var hasGate = document.querySelector('.barreira-register-paywall, .paywall-cpt');
    var hasPub = document.querySelector('#pub-retangulo-1 iframe, #pub-retangulo-2 iframe, #pub-fullbanner-1 iframe');

    if (count > 2) {
      Piano.triggerAdvertising();
      Piano.activePaywall = false;
      clearInterval(checkGate);
    }

    if (hasGate && Piano.activePaywall || hasPub || count > 8) clearInterval(checkGate);
    count++;
  }, 1000);
};

Piano.registerPaywall = {
  mostrarBarreira: function mostrarBarreira() {
    var versao = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var tipo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    Piano.typePaywall = tipo;

    if (!Piano.activePaywall || !versao || !Piano.typePaywall) {
      Piano.triggerAdvertising();
    } else {
      Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/register-paywall-piano/" + versao + "/styles/styles.css'>");
      Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/register-paywall-piano/" + versao + "/scripts/register-paywall-piano.js", function (data) {
        if (data.status !== 200) {
          Piano.triggerAdvertising();
        } else {
          window.hasPaywall = true;
        }
      });

      if (Piano.typePaywall === 'register' || Piano.typePaywall === 'exclusivo') {
        GA.setEvents("Exibicao Register", Piano.metricas.montaRotuloGA());
        _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.RTIEX, true, 1);
      } else {
        GA.setEvents("Barreira", Piano.metricas.montaRotuloGA());
      }
    }
  }
};
Piano.comunicado = {
  mostrarInformacao: function mostrarInformacao(versao) {
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/comunicacao-piano/" + versao + "/styles/styles.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/comunicacao-piano/" + versao + "/scripts/comunicacao-piano.js");
  }
};
Piano.adblock = {
  mostrarAdBlock: function mostrarAdBlock() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    params.assetsPath = "https://static".concat(Piano.util.montaUrlStg(), ".infoglobo.com.br/paywall/adblock-piano/v4/");
    window.glbAdblock = params;
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/adblock-piano/v4/styles/styles.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/adblock-piano/v4/scripts/adblock-piano.js");
  }
};
Piano.bloqueios = {
  liberarEsc: function liberarEsc() {
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/bloqueio/liberaTeclado.js");
  },
  bloqueiaViewMode: function bloqueiaViewMode() {
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/bloqueio/bloqueiaViewmode.js");
  }
};
Piano.parceiro = {
  mostraFooterParceiro: function mostraFooterParceiro(versao) {
    Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/footer-parceiros-piano/" + versao + "/styles/styles.css'>");
    Piano.xmlHttpRequest.geraScriptNaPagina("https://static" + Piano.util.montaUrlStg() + ".infoglobo.com.br/paywall/footer-parceiros-piano/" + versao + "/scripts/footer-parceiros-piano.js");
  }
};
Piano.inadimplente = {
  getLinkAssinatura: function getLinkAssinatura(link) {
    for (var i = 0; i < link.length; i++) {
      if (link[i].rel == 'assinatura') return link[i].href;
    }

    return '';
  }
};
Piano.xmlHttpRequest = {
  geraScriptNaPagina: function geraScriptNaPagina(urlScript, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", urlScript);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          var resposta = xhr.responseText;
          var appendDeScript = document.createElement('script');
          appendDeScript.innerHTML = resposta;
          document.body.appendChild(appendDeScript);
        } else {
          GA.setEventsError('Erro na função gerar script na página.', 'url: ' + urlScript + ' StatusErro: ' + this.status + ' Stack: ' + this.statusText);
        }
      }

      if (callback) callback(xhr);
    };
  },
  fazRequisicaoBarramentoApiObterAssinaturaInadimplente: function fazRequisicaoBarramentoApiObterAssinaturaInadimplente(hrefAssinaturaInadimplente) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", hrefAssinaturaInadimplente, false);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var resposta = xhr.responseText;
        var respJson = JSON.parse(resposta);
        var situacaoPagamento = respJson.situacaoPagamento.toLowerCase();
        tp.push(["setCustomVariable", "situacaoPagamento", situacaoPagamento]);
      } else {
        if (xhr.status != 0 && Piano.variaveis.statusHttpObterAssinaturaInadimplente.indexOf(xhr.status) > -1) {
          GA.setEventsError("Api de inadimplente", xhr.status + " - " + hrefAssinaturaInadimplente);
        } else {
          GA.setEventsError("Api de inadimplente", "Status Desconhecido" + " - " + hrefAssinaturaInadimplente);
        }
      }
    }
  },
  fazRequisicaoBarramentoApiAutorizacaoAcesso: function fazRequisicaoBarramentoApiAutorizacaoAcesso(glbid) {
    var codigoProduto = Piano.variaveis.getCodigoProduto();

    if (codigoProduto == 'error') {
      return;
    }

    var data = JSON.stringify({
      "token-autenticacao": glbid,
      "ipUsuario": Piano.variaveis.constante.util.IP,
      "codigoProduto": codigoProduto
    });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlVerificaLeitor, false);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var resposta = xhr.responseText;
        var respJson = JSON.parse(resposta);
        var respostaDeTermoDeUso = false,
            respostaDeMotivo = '',
            hrefAssinaturaInadimplente = '';

        if (typeof respJson.motivo != "undefined") {
          respostaDeMotivo = respJson.motivo.toLowerCase();
        }

        if (typeof respJson.temTermoDeUso != "undefined") {
          respostaDeTermoDeUso = respJson.temTermoDeUso;
        }

        if (typeof respJson.link != "undefined") {
          hrefAssinaturaInadimplente = Piano.inadimplente.getLinkAssinatura(respJson.link);
        }

        var isAutorizado = Piano.autenticacao.isAutorizado(respostaDeTermoDeUso, respostaDeMotivo, respJson.autorizado, hrefAssinaturaInadimplente);
        Piano.autenticacao.defineUsuarioPiano(respJson.autorizado, respostaDeMotivo, isAutorizado, respostaDeTermoDeUso);
        var _jsonLeitor = {
          "autorizado": respJson.autorizado,
          "motivo": respostaDeMotivo,
          "logado": isAutorizado,
          "temTermoDeUso": respostaDeTermoDeUso,
          "glbid": glbid,
          "produto": Piano.variaveis.getNomeProduto(),
          "codProduto": codigoProduto,
          "uuid": respJson.usuarioId
        };
        _jsonLeitor = btoa(encodeURI(JSON.stringify(_jsonLeitor)));
        _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.UTP, _jsonLeitor, 1);

        if (typeof swg !== 'undefined') {
          if (Piano.google.showSaveSubscription(respJson)) {
            try {
              var swgService = new SwgService();
              swgService.saveGloboSubscription(glbid);
            } catch (error) {
              GA.setEventsError('Erro ao chamar a função showSaveSubscription do Aldebaran.', 'URL: ' + document.location.href + ' GLBID: ' + glbid + ' Erro: ' + error);
            }
          }
        }

        if (respJson.autorizado == true) {
          Piano.metricas.setaVariaveis(respJson.usuarioId, "Globo ID", "O Globo");
        }
      } else {
        GA.setEventsError("API de autorizacao de acesso", xhr.status + " - " + glbid);
        Piano.autenticacao.defineUsuarioPiano(true, 'erro', true, " ");
      }
    }
  }
};
Piano.google = {
  isAuthorized: function isAuthorized() {
    if (swgEntitlements.getEntitlementForSource("oglobo.globo.com")) {
      Piano.metricas.setaVariaveis(swgEntitlements.getEntitlementForSource("oglobo.globo.com").subscriptionToken, "Conta Google", "O Globo");
      return true;
    }

    if (_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.CREATED_GLOBOID)) {
      Piano.metricas.setaVariaveis(_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.CREATED_GLOBOID), "Conta Google", "Google");
      return true;
    }

    return false;
  },
  isSpecificGoogleUser: function isSpecificGoogleUser() {
    if (Piano.google.isAuthorized()) return;

    try {
      var oGloboBusiness = new OGloboBusiness();
      oGloboBusiness.verifyIfUserHasAccessOrDeferred(swgEntitlements);
    } catch (error) {
      GA.setEventsError("Erro ao executar o Aldebaran", "Error: " + error + " - Entitlements: " + swgEntitlements.entitlements[0].subscriptionToken);
    }
  },
  showSaveSubscription: function showSaveSubscription(response) {
    if (!swgEntitlements.enablesThis() && response.motivo === "AUTORIZADO" && !_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.SAVE_SUBSCRIPTION)) {
      return true;
    }

    return false;
  }
};
Piano.autenticacao = {
  isLogadoCadun: function isLogadoCadun(glbid, utp) {
    if (!glbid) {
      if (utp) _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
      if (_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.RTIEX)) _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.RTIEX, "", -1);
    }

    return glbid != '';
  },
  verificaUsuarioLogadoNoBarramento: function verificaUsuarioLogadoNoBarramento(glbid, utp) {
    if (Piano.autenticacao.isLogadoCadun(glbid, utp)) {
      if (utp) {
        var _leitor = JSON.parse(decodeURI(atob(utp)));

        if (glbid == _leitor.glbid && (typeof _leitor.produto == "undefined" || _leitor.produto == Piano.variaveis.getNomeProduto())) {
          Piano.autenticacao.defineUsuarioPiano(_leitor.autorizado, _leitor.motivo, _leitor.logado, _leitor.temTermoDeUso);

          if (_leitor.autorizado) {
            Piano.metricas.setaVariaveis(_leitor.uuid, "Globo ID", "O Globo");
          }

          return;
        }

        _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
      }

      Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso(glbid);
    }
  },
  isAutorizado: function isAutorizado(termoDeUso, motivo, autorizado, hrefAssinaturaInadimplente) {
    if (autorizado || motivo == "indisponivel" || termoDeUso != false) {
      if (autorizado && hrefAssinaturaInadimplente) Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente(hrefAssinaturaInadimplente);
      return true;
    }

    ;
    if (_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.RTIEX)) _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(Piano.variaveis.constante.cookie.RTIEX, "", -1);
    return false;
  },
  defineUsuarioPiano: function defineUsuarioPiano(autorizado, motivo, logado, temTermoDeUso) {
    tp.push(["setCustomVariable", "autorizado", autorizado]);
    tp.push(["setCustomVariable", "motivo", motivo]);
    tp.push(["setCustomVariable", "logado", logado]);
    if (temTermoDeUso != " ") tp.push(["setCustomVariable", "temTermo", temTermoDeUso]);
  }
};
Piano.util = {
  isSection: function isSection() {
    return Piano.variaveis.getTipoConteudoPiano() == "section" ? true : false;
  },
  temVariaveisObrigatorias: function temVariaveisObrigatorias() {
    if (typeof Piano.variaveis.getTipoConteudoPiano() == 'undefined') {
      GA.setEventsError("Variavel tipoConteudoPiano nao esta definida", document.location.href);
      return false;
    }

    ;

    if (typeof Piano.variaveis.getNomeProduto() == 'undefined') {
      GA.setEventsError("Variavel nomeProdutoPiano nao esta definida", document.location.href);
      return false;
    }

    ;
    return true;
  },
  extraiParametrosCampanhaDaUrl: function extraiParametrosCampanhaDaUrl() {
    var url = Piano.util.getWindowLocationSearch();
    var chavesCampanha = ['utm_medium', 'utm_source'];
    var valoresCampanha = [];

    for (var idxParamCampanha = 0; idxParamCampanha < chavesCampanha.length; idxParamCampanha++) {
      var chaveCampanha = chavesCampanha[idxParamCampanha];

      if (url.indexOf(chaveCampanha + '=') != -1) {
        var regex = new RegExp("[\?(&)]" + chaveCampanha + "=([^&#]*)");
        var valorCampanha = url.match(regex)[1];

        if (valorCampanha) {
          valoresCampanha.push(valorCampanha);
        }
      }
    }

    if (valoresCampanha.length > 0) {
      tp.push(["setCustomVariable", "utm", valoresCampanha.join(";")]);
    }

    if (url.indexOf('utm_campaign=') != -1) {
      var regex = new RegExp("utm_campaign=(\\w+)");
      var campanha = url.match(regex)[1];

      if (campanha) {
        tp.push(["setCustomVariable", "campanha", campanha]);
      }
    }
  },
  isOrigemBuscador: function isOrigemBuscador() {
    var userAgent = navigator.userAgent;
    var regexRobos = new RegExp("(ia_archiver)|(Googlebot)|(Mediapartners-Google)|(AdsBot-Google)|(msnbot)|(Yahoo! Slurp)|(ZyBorg)|(Ask Jeeves/Teoma)|(bingbot)|(cXensebot)");
    var ehRobo = regexRobos.test(userAgent);
    tp.push(["setCustomVariable", "buscador", ehRobo]);
    return ehRobo;
  },
  montaUrlStg: function montaUrlStg() {
    return Piano.variaveis.getAmbientePiano() != 'prd' ? '-stg' : '';
  },
  temParametroNaUrl: function temParametroNaUrl(paramName) {
    var parametros = Piano.util.getWindowLocationSearch();
    return parametros.indexOf(paramName) != -1 ? true : false;
  },
  getValorParametroNaUrl: function getValorParametroNaUrl(parametro) {
    if (Piano.util.temParametroNaUrl(parametro)) {
      var parametros = Piano.util.getWindowLocationSearch();
      var regex = new RegExp("[\?(&)]" + parametro + "=([^&#]*)");
      return parametros.match(regex)[1];
    }

    return "sem parametro";
  },
  isDebug: function isDebug() {
    var parametro = Piano.variaveis.constante.util.DEBUG;
    var valorParametro = Piano.util.getValorParametroNaUrl(parametro);

    if (valorParametro == 'true') {
      _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(parametro, valorParametro, 1);
      return true;
    }

    if (valorParametro == 'false') {
      _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].setCookie(parametro, "", -1);
      return false;
    }

    if (_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.util.DEBUG)) {
      return true;
    }

    return false;
  },
  isDominioOGlobo: function isDominioOGlobo() {
    var regex = new RegExp("://(.*?)/"),
        url = Piano.util.getWindowLocationHref();

    if (url.match(regex)[1].indexOf("oglobo") > -1 || url.match(regex)[1].indexOf("globoi") > -1 && url.match(regex)[1].indexOf("edg") == -1) {
      return url.match(regex)[1];
    }

    return '';
  },
  callbackMeter: function callbackMeter(meterData) {
    window.regrasTiny = meterData;
    Piano.metricas.executaAposPageview(false);
  },
  callbackMeterExpired: function callbackMeterExpired(meterData) {
    window.regrasTiny = meterData;
    Piano.variaveis.isCallbackMetterExpired = true;
    Piano.metricas.executaAposPageview(true);
  },
  getWindowLocationSearch: function getWindowLocationSearch() {
    return window.location.search;
  },
  getWindowLocationHref: function getWindowLocationHref() {
    return window.location.href;
  },
  adicionarCss: function adicionarCss(cssPath) {
    var e = document.createElement('div');
    e.innerHTML = cssPath;
    document.body.insertBefore(e, document.body.lastChild);
  },
  isRevista: function isRevista() {
    var revistas = ["epoca", "auto-esporte", "vogue", "glamour", "casa-vogue", "marie-claire", "casa-e-jardim", "quem-acontece", "globo-rural", "gq", "monet", 'crescer', 'galileu'];
    if (revistas.indexOf(Piano.variaveis.getNomeProduto()) > -1) return true;else return false;
  },
  recarregaPiano: function recarregaPiano(tipoConteudo, isExclusivo, nomeProduto) {
    window.tipoConteudoPiano = tipoConteudo;
    window.conteudoExclusivo = isExclusivo;
    window.nomeProdutoPiano = nomeProduto;

    if (typeof window.regrasTiny !== 'undefined') {
      window.regrasTiny.nomeExperiencia = "";
    }

    Piano.construtor.initTp();
    tp.experience.execute();
  },
  isValor: function isValor() {
    if (Piano.variaveis.getNomeProduto() === "valor") return true;else return false;
  }
};
Piano.configuracao = {
  jsonConfiguracaoTinyPass: {
    'int': {
      'idSandboxTinypass': 'dXu7dvFKRi',
      'idSandboxTinypassRevistas': 'VnaP3rYVKc',
      'setSandBox': 'true',
      'urlSandboxPiano': 'https://sandbox.tinypass.com/xbuilder/experience/load?aid=dXu7dvFKRi',
      'urlSandboxPianoRevistas': 'https://experience.tinypass.com/xbuilder/experience/load?aid=VnaP3rYVKc',
      'urlVerificaLeitor': 'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/' + Piano.variaveis.getServicoId() + '/autorizacao-acesso',
      'urlDominioPaywall': 'https://assinatura.globostg.globoi.com/',
      'urlDominioSiteOGlobo': '' + Piano.util.isDominioOGlobo() + '/'
    },
    'qlt': {
      'idSandboxTinypass': 'GTCopIDc5z',
      'idSandboxTinypassRevistas': 'VnaP3rYVKc',
      'setSandBox': 'false',
      'urlSandboxPiano': 'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
      'urlSandboxPianoRevistas': 'https://experience.tinypass.com/xbuilder/experience/load?aid=VnaP3rYVKc',
      'urlVerificaLeitor': 'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/' + Piano.variaveis.getServicoId() + '/autorizacao-acesso',
      'urlDominioPaywall': 'https://assinatura.globostg.globoi.com/',
      'urlDominioSiteOGlobo': '' + Piano.util.isDominioOGlobo() + '/'
    },
    'prd': {
      'idSandboxTinypass': 'GTCopIDc5z',
      'idSandboxTinypassRevistas': 'VnaP3rYVKc',
      'setSandBox': 'false',
      'urlSandboxPiano': 'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
      'urlSandboxPianoRevistas': 'https://experience.tinypass.com/xbuilder/experience/load?aid=VnaP3rYVKc',
      'urlVerificaLeitor': 'https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/' + Piano.variaveis.getServicoId() + '/autorizacao-acesso',
      'urlDominioPaywall': 'https://assinatura.oglobo.globo.com/',
      'urlDominioSiteOGlobo': '' + Piano.util.isDominioOGlobo() + '/'
    }
  }
};
Piano.construtor = {
  initTp: function initTp() {
    GA.setEvents("Carregamento Piano", "Inicio InitTp");
    tp = window["tp"] || [];
    tp.push(["setTags", [Piano.variaveis.getTipoConteudoPiano()]]);

    if (Piano.util.isRevista() || Piano.util.isValor()) {
      tp.push(["setAid", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].idSandboxTinypassRevistas]);
    } else {
      tp.push(["setAid", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].idSandboxTinypass]);
    }

    tp.push(["setSandbox", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].setSandBox]);
    tp.push(["setDebug", Piano.util.isDebug()]);
    var clean_url = Piano.util.getWindowLocationHref().split("?")[0];
    tp.push(["setPageURL", clean_url]);
    tp.push(["setZone", Piano.variaveis.getNomeProduto()]);
    tp.push(["setCustomVariable", "nomeProduto", Piano.variaveis.getNomeProduto()]);
    Piano.janelaAnonima.detectPrivateMode(function (is_private) {
      tp.push(["setCustomVariable", "anonimo", is_private]);
    });

    if (Piano.variaveis.isConteudoExclusivo()) {
      tp.push(["setCustomVariable", "conteudoExclusivo", true]);
    }

    if (typeof swg !== 'undefined' && swgEntitlements.enablesThis()) {
      Piano.google.isSpecificGoogleUser(swgEntitlements);
      Piano.autenticacao.defineUsuarioPiano(true, "AUTORIZADO", true, "");
    } else {
      Piano.autenticacao.verificaUsuarioLogadoNoBarramento(_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.GCOM), _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.UTP));
    }

    Piano.krux.obtemSegmentacao();
    tp.push(["setCustomVariable", "bannerContadorLigado", true]);
    Piano.util.isOrigemBuscador() || Piano.util.extraiParametrosCampanhaDaUrl();
    tp.push(["addHandler", "meterActive", Piano.util.callbackMeter]);
    tp.push(["addHandler", "meterExpired", Piano.util.callbackMeterExpired]);
    GA.setEvents("Carregamento Piano", "Fim InitTp");
  }
};

function loadPianoExperiences() {
  if (window.tinyCpt.debug.tiny) console.log('log-method', 'loadPianoExperiences');
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.async = true;

  if (Piano.util.isRevista() || Piano.util.isValor()) {
    a.src = Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlSandboxPianoRevistas;
  } else {
    a.src = Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlSandboxPiano;
  }

  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
  GA.setEvents("Carregamento Piano", "Script adicionado");
}

function pianoInit() {
  if (window.tinyCpt.debug.tiny) console.log('log-method', 'pianoInit');

  if (window.tinyCpt.Swg.global) {
    window.SWG.push(function (subscriptions) {
      if (window.tinyCpt.debug.swg) console.log('log-subscriptions', subscriptions);
      swg = subscriptions;
      subscriptions.setOnEntitlementsResponse(function (entitlementsPromise) {
        entitlementsPromise.then(function (entitlements) {
          window.swgEntitlements = entitlements;
          GA.setEvents("Carregamento SWG", "Entitlements recebidos");

          if (window.tinyCpt.Piano.util.temVariaveisObrigatorias()) {
            if (Piano !== 'undefined') {
              window.tinyCpt.Piano.construtor.initTp();
              loadPianoExperiences();
            } else {
              GA.setEventsError("Piano nao foi carregada corretamente!", document.location.href);
            }
          }
        });
      });
    });
  } else {
    GA.setEventsError("Entitlements não carregado", document.location.href);

    if (window.tinyCpt.Piano.util.temVariaveisObrigatorias()) {
      window.tinyCpt.Piano.construtor.initTp();
      loadPianoExperiences();
    }
  }

  window.tinyCpt.Piano.checkPaywall();
}

function tinyInit() {
  return _tinyInit.apply(this, arguments);
}

function _tinyInit() {
  _tinyInit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var Swg;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Tiny.setPiano(Piano);
            Swg = new _Swg__WEBPACK_IMPORTED_MODULE_5__["default"]();
            _context.prev = 2;
            _context.next = 5;
            return Swg.init();

          case 5:
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            console.error(_context.t0);

          case 10:
            pianoInit();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));
  return _tinyInit.apply(this, arguments);
}

;
tinyInit();

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvRkIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvR0EuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9QaWFuby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9Td2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvVGlueS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jcG50LXBheXdhbGwvUGF5d2FsbC1nYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jcG50LXBheXdhbGwvUGF5d2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkZiIiwiZGF0YSIsImRlYnVnIiwid2luZG93IiwidGlueUNwdCIsImRpc2FibGVkIiwiZmIiLCJoYXNQaXhlbCIsInBpeGVsIiwibmFtZSIsImlzRGVmaW5lZCIsImZicSIsIkdBIiwiZ2EiLCJQcm9kdWN0cyIsIlByb2R1Y3RzTW9kdWxlIiwiZGF0YUxheWVyIiwiaXNQcm9kdWN0VmFsb3IiLCJfZ2FxIiwiYWN0aW9uIiwibGFiZWwiLCJjYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiSGVscGVycyIsInByb3AiLCJjX25hbWUiLCJ2YWx1ZSIsImV4cGlyZWRheXMiLCJleGRhdGUiLCJEYXRlIiwiaG9zdG5hbWUiLCJsb2NhdGlvbiIsInNldERhdGUiLCJnZXREYXRlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJlc2NhcGUiLCJ0b1VUQ1N0cmluZyIsInNwbGl0IiwicmV2ZXJzZSIsIm1hdGNoIiwiUmVnRXhwIiwiY29va2llVGlueSIsInVuZXNjYXBlIiwidG9TdHJpbmciLCJQaWFubyIsImNvbnRlbnQiLCJzZXRFeHBlcmllbmNlIiwiZXhwZXJpZW5jZU5hbWUiLCJleHBlcmllbmNlIiwicmVncmFzVGlueSIsIm5vbWVFeHBlcmllbmNpYSIsInN1YnNlZ21lbnRhY2FvUGlhbm8iLCJzZXRDb29raWUiLCJ2YXJpYXZlaXMiLCJjb25zdGFudGUiLCJVVFAiLCJwcm9kdWN0TmFtZSIsIm5vbWVQcm9kdXRvUGlhbm8iLCJwcm9kdWN0c1NldHRpbmdzIiwiUHJvZHVjdCIsIk9iamVjdCIsImFzc2lnbiIsIlN3ZyIsIlNXRyIsInN3Z0VudGl0bGVtZW50cyIsInN3ZyIsImxvY2FsUHJvZHVjdFBpYW5vIiwiaGFzUHJvZHVjdEpTT04iLCJwcm9kdWN0SlNPTiIsImVsSGVhZCIsImhlYWQiLCJzZXRHbG9iYWxTV0ciLCJnbG9iYWwiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHJpbmciLCJ1dG1zUHJvcHMiLCJnbGJQYXl3YWxsIiwidXRtcyIsImZvckVhY2giLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJzZXQiLCJzdWJzY3JpYmUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0UHJvZHVjdHMiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJmaWx0ZXIiLCJwaWFub1Byb2R1Y3ROYW1lIiwib2JqIiwicHJvcHNUb1JlbW92ZSIsIm5ld09iaiIsImVsZW1lbnQiLCJnZXRQcm9kdWN0IiwicmVtb3ZlUHJvcGVydGllcyIsImtleXMiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwibWFya3VwVGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50RWxlbWVudCIsInNyYyIsInVybFByb2QiLCJ1cmxTdGciLCJpc1Byb2R1Y3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRNYXJrdXAiLCJzZXRTd2dTY3JpcHQiLCJzZXRBbGRlYmFyYW5TY3JpcHQiLCJ0ZXN0U1dHIiwiVGlueSIsImhhc1BheXdhbGwiLCJ0cCIsIlBheXdhbGxBbmFseXRpY3MiLCJzZXRHbG9iYWxUaW55Iiwic2V0R2xvYmFsIiwiaW5pdCIsImRlZmF1bHRTZXR0aW5ncyIsInRpbnkiLCJwYXl3YWxsIiwiYW1iaWVudGVVdGlsaXphZG9QaWFubyIsIlBheXdhbGxHQU1vZHVsZSIsIlBpYW5vTW9kdWxlIiwiR0FNb2R1bGUiLCJtZXRyaWNzIiwicGF5d2FsbFR5cGUiLCJfUGlhbm8iLCJzZXRFdmVudHMiLCJSVElFWCIsInJlc2V0VXRwIiwiZGF0YXNldCIsImdhUmVzZXR1dHAiLCJpbWFnZVRvcCIsImdhSW1hZ2VQb3NpdGlvbiIsImdhTGFiZWwiLCJldmVudCIsImV2ZW50b0dBQ2F0ZWdvcmlhIiwiZXZlbnRvR0FBY2FvIiwiZ2FBY3Rpb24iLCJldmVudG9HQVJvdHVsbyIsImV2ZW50b0dBVmFsb3IiLCJldmVudG9HQUludGVyYWNhbyIsInNldERhdGFsYXllciIsInR5cGVQYXl3YWxsIiwiUGF5d2FsbENwdCIsIlN3Z01vZHVsZSIsIkZCIiwiRmJNb2R1bGUiLCJkb21haW4iLCJzZXRUZW1wbGF0ZVNldHRpbmdzIiwiUGF5d2FsbCIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRlbXBsYXRlIiwiYXNzZXRzUGF0aCIsImRpc3BsYXkiLCJwcm9kdWN0Q2xhc3MiLCJ0aXRsZSIsInRhcmdldEJsYW5rIiwidG9wTW9iaSIsInRvcERlc2siLCJ0b3BMaW5rIiwibGVmdE1vYmkiLCJsZWZ0RGVzayIsImxlZnRMaW5rIiwicmlnaHRNb2JpIiwicmlnaHREZXNrIiwicmlnaHRMaW5rIiwiaGlkZUxvZ2luQXJlYSIsImxvZ2luVGV4dCIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGFnIiwiZ2V0VXJsTG9naW5SZWdpc3RlciIsImNsZWFyTG9naW5BcmVhIiwic2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzIiwiZWxCb2R5Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImVsQ3B0IiwicXVlcnlTZWxlY3RvciIsInNldEVsV3JhcHBlciIsInJlbW92ZSIsImVsVG9SZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsImJvZHlBZGp1c3QiLCJyZW1vdmVFbGVtZW50cyIsImluc2VydEFkamFjZW50SFRNTCIsImNzc01pbmlmaWVkIiwiYWN0aXZlVGVtcGxhdGVTZXR0aW5ncyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBheXdhbGxMb2FkIiwiZWxDcHRXcmFwIiwic2V0VGltZW91dCIsImVsQm9keUhlaWdodCIsImlubmVySGVpZ2h0IiwiZWxDcHRXcmFwSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3VycmVudFRvcCIsIk1hdGgiLCJhYnMiLCJ0b3BXaXRoRnVsbEVsZW1lbnQiLCJ0b3AiLCJvcGFjaXR5IiwiekluZGV4IiwiZXZ0V2hlZWwiLCJldnRUb3VjaCIsImFjdGl2ZUV2ZW50cyIsInNldFBpeGVsVHlwZSIsImNsaWNrVGFyZ2V0cyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiaXNMb2dpbiIsIkJvb2xlYW4iLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJpc1VybFN3ZyIsImluY2x1ZGVzIiwibm90QmxhbmsiLCJocmVmVGFyZ2V0IiwidHJpZ2dlciIsInNldFV0bXMiLCJocmVmIiwib3BlbiIsImJpbmQiLCJuZXd0b3AiLCJzdGVwIiwibXVsdGlwbGllciIsImRlbHRhWSIsImVsVG9wIiwidG91Y2hzdGFydFkiLCJ0b3VjaGVuZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblkiLCJkaWZmIiwidXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8iLCJ1cmkiLCJzdHIiLCJ1cmxSZXR1cm4iLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRDb2RpZ29Qcm9kdXRvIiwiZ2V0U2Vydmljb0lkIiwiZ2V0Tm9tZVByb2R1dG8iLCJkZWxheVRpbWVyIiwiY3JlYXRlVGVtcGxhdGUiLCJ0ZW1wbGF0ZVZhcnMiLCJUaW55TW9kdWxlIiwic2V0R2xvYmFsVmFycyIsImFjdGl2ZVBheXdhbGwiLCJhbWJpZW50ZXNBY2VpdG9zIiwic3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc28iLCJzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwiaXNDYWxsYmFja01ldHRlckV4cGlyZWQiLCJHQ09NIiwiQU1CSUVOVEUiLCJTQVZFX1NVQlNDUklQVElPTiIsIkNSRUFURURfR0xPQk9JRCIsIkdMT0JPSURfTUVTU0FHRSIsIm1ldHJpY2FzIiwiRVZFTlRPX1NFTV9BQ0FPIiwiRVJSTyIsImtydXgiLCJTRUdNRU5UQUNPRVMiLCJLUlVYTElHQURPIiwidXRpbCIsIklQIiwiREVCVUciLCJpc0NvbnRldWRvRXhjbHVzaXZvIiwiY29udGV1ZG9FeGNsdXNpdm8iLCJnZXRBbWJpZW50ZVBpYW5vIiwiaW5kZXhPZiIsImdldFZhbG9yUGFyYW1ldHJvTmFVcmwiLCJnZXRDb29raWUiLCJnZXRUaXBvQ29udGV1ZG9QaWFubyIsInRpcG9Db250ZXVkb1BpYW5vIiwiZXhlY3V0b3VQYWdldmlldyIsInNldEV2ZW50c0Vycm9yIiwiaWQiLCJpc1JldmlzdGEiLCJub21lUHJvZHV0byIsImF1dGVudGljYWNhbyIsImRlZmluZVVzdWFyaW9QaWFubyIsImphbmVsYUFub25pbWEiLCJyZXRyeSIsImlzRG9uZSIsIm5leHQiLCJjdXJyZW50X3RyaWFsIiwibWF4X3JldHJ5IiwiaXNfdGltZW91dCIsImlzSUUxME9yTGF0ZXIiLCJ1c2VyX2FnZW50IiwidWEiLCJleGVjIiwicGFyc2VJbnQiLCJkZXRlY3RQcml2YXRlTW9kZSIsImlzX3ByaXZhdGUiLCJ3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSIsIlRFTVBPUkFSWSIsImUiLCJpbmRleGVkREIiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGIiLCJyZWFkeVN0YXRlIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ0ZW0iLCJnZXRJdGVtIiwibGlnYWRvIiwicGFyYW1ldHJvIiwidmFsb3JQYXJhbWV0cm8iLCJvYnRlbVNlZ21lbnRhY2FvIiwic2VnbWVudGFjb2VzIiwiaSIsImVudmlhRXZlbnRvc0dBIiwiX0dBQWNhbyIsIl9HQVJvdHVsbyIsIm1vbnRhUm90dWxvR0EiLCJzZXRMaW1pdGVDb250YWdlbSIsIl9HQUxpbWl0ZSIsIl9HQUNvbnRhZ2VtIiwidmlld3MiLCJtYXhWaWV3cyIsImlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3RlciIsInJlZ3JhcyIsInBhc3NhZ2VtIiwiZmx1eG8iLCJleGVjdXRhQXBvc1BhZ2V2aWV3IiwiZXhwaXJvdSIsInRwQ29udGV4dCIsInNldGFWYXJpYXZlaXMiLCJpZExvZ2luIiwidGlwb0xvZ2luIiwiYXNzaW5hdHVyYUxvZ2FkYSIsImlkTG9naW5Bc3NpbmFudGUiLCJ0aXBvTG9naW5Bc3NpbmFudGUiLCJiYW5uZXIiLCJtb3N0cmFyRm9vdGVyIiwidmVyc2FvIiwiYWRpY2lvbmFyQ3NzIiwibW9udGFVcmxTdGciLCJ4bWxIdHRwUmVxdWVzdCIsImdlcmFTY3JpcHROYVBhZ2luYSIsIm1vc3RyYXJCb3Rhb0Fzc2luYXR1cmFIZWFkZXJGb290ZXIiLCJtb3N0cmFyQXZhdGFySGVhZGVyIiwiYm90dG9tRml4ZWQiLCJwYXJhbXMiLCJnbGJCYW5uZXJCb3R0b20iLCJtb3N0cmFyU1dHIiwiY3NzIiwic2NyaXB0SnMiLCJtb3N0cmFySGlnaGxpZ2h0U2FsZSIsIm1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvciIsInJlZ2lzdGVyIiwibW9zdHJhckJhcnJlaXJhIiwiaGVscGVyIiwicmVkaXJlY2lvbmFyQmFycmVpcmEiLCJzaG93Iiwid2FybiIsInRyaWdnZXJBZHZlcnRpc2luZyIsImVycm9yIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY2hlY2tQYXl3YWxsIiwiY2hlY2tHYXRlIiwiaGFzR2F0ZSIsImhhc1B1YiIsInJlZ2lzdGVyUGF5d2FsbCIsInRpcG8iLCJzdGF0dXMiLCJjb211bmljYWRvIiwibW9zdHJhckluZm9ybWFjYW8iLCJhZGJsb2NrIiwibW9zdHJhckFkQmxvY2siLCJnbGJBZGJsb2NrIiwiYmxvcXVlaW9zIiwibGliZXJhckVzYyIsImJsb3F1ZWlhVmlld01vZGUiLCJwYXJjZWlybyIsIm1vc3RyYUZvb3RlclBhcmNlaXJvIiwiaW5hZGltcGxlbnRlIiwiZ2V0TGlua0Fzc2luYXR1cmEiLCJsaW5rIiwicmVsIiwidXJsU2NyaXB0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9zdGEiLCJyZXNwb25zZVRleHQiLCJhcHBlbmREZVNjcmlwdCIsImFwcGVuZENoaWxkIiwic3RhdHVzVGV4dCIsImZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwiaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVzcEpzb24iLCJwYXJzZSIsInNpdHVhY2FvUGFnYW1lbnRvIiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbyIsImdsYmlkIiwiY29kaWdvUHJvZHV0byIsImNvbmZpZ3VyYWNhbyIsImpzb25Db25maWd1cmFjYW9UaW55UGFzcyIsInVybFZlcmlmaWNhTGVpdG9yIiwicmVzcG9zdGFEZVRlcm1vRGVVc28iLCJyZXNwb3N0YURlTW90aXZvIiwibW90aXZvIiwidGVtVGVybW9EZVVzbyIsImlzQXV0b3JpemFkbyIsImF1dG9yaXphZG8iLCJfanNvbkxlaXRvciIsInVzdWFyaW9JZCIsImJ0b2EiLCJlbmNvZGVVUkkiLCJnb29nbGUiLCJzaG93U2F2ZVN1YnNjcmlwdGlvbiIsInN3Z1NlcnZpY2UiLCJTd2dTZXJ2aWNlIiwic2F2ZUdsb2JvU3Vic2NyaXB0aW9uIiwiaXNBdXRob3JpemVkIiwiZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UiLCJzdWJzY3JpcHRpb25Ub2tlbiIsImlzU3BlY2lmaWNHb29nbGVVc2VyIiwib0dsb2JvQnVzaW5lc3MiLCJPR2xvYm9CdXNpbmVzcyIsInZlcmlmeUlmVXNlckhhc0FjY2Vzc09yRGVmZXJyZWQiLCJlbnRpdGxlbWVudHMiLCJyZXNwb25zZSIsImVuYWJsZXNUaGlzIiwiaXNMb2dhZG9DYWR1biIsInV0cCIsInZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50byIsIl9sZWl0b3IiLCJkZWNvZGVVUkkiLCJhdG9iIiwicHJvZHV0byIsImxvZ2FkbyIsInV1aWQiLCJ0ZXJtb0RlVXNvIiwiaXNTZWN0aW9uIiwidGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzIiwiZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmwiLCJnZXRXaW5kb3dMb2NhdGlvblNlYXJjaCIsImNoYXZlc0NhbXBhbmhhIiwidmFsb3Jlc0NhbXBhbmhhIiwiaWR4UGFyYW1DYW1wYW5oYSIsImNoYXZlQ2FtcGFuaGEiLCJyZWdleCIsInZhbG9yQ2FtcGFuaGEiLCJqb2luIiwiY2FtcGFuaGEiLCJpc09yaWdlbUJ1c2NhZG9yIiwicmVnZXhSb2JvcyIsImVoUm9ibyIsInRlbVBhcmFtZXRyb05hVXJsIiwicGFyYW1OYW1lIiwicGFyYW1ldHJvcyIsImlzRGVidWciLCJpc0RvbWluaW9PR2xvYm8iLCJnZXRXaW5kb3dMb2NhdGlvbkhyZWYiLCJjYWxsYmFja01ldGVyIiwibWV0ZXJEYXRhIiwiY2FsbGJhY2tNZXRlckV4cGlyZWQiLCJjc3NQYXRoIiwiaW5zZXJ0QmVmb3JlIiwibGFzdENoaWxkIiwicmV2aXN0YXMiLCJyZWNhcnJlZ2FQaWFubyIsInRpcG9Db250ZXVkbyIsImlzRXhjbHVzaXZvIiwiY29uc3RydXRvciIsImluaXRUcCIsImV4ZWN1dGUiLCJpc1ZhbG9yIiwiaWRTYW5kYm94VGlueXBhc3NSZXZpc3RhcyIsImlkU2FuZGJveFRpbnlwYXNzIiwic2V0U2FuZEJveCIsImNsZWFuX3VybCIsImxvYWRQaWFub0V4cGVyaWVuY2VzIiwiYSIsImFzeW5jIiwidXJsU2FuZGJveFBpYW5vUmV2aXN0YXMiLCJ1cmxTYW5kYm94UGlhbm8iLCJiIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwicGlhbm9Jbml0Iiwic3Vic2NyaXB0aW9ucyIsInNldE9uRW50aXRsZW1lbnRzUmVzcG9uc2UiLCJlbnRpdGxlbWVudHNQcm9taXNlIiwidGlueUluaXQiLCJzZXRQaWFubyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FB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ZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmIge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZiID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNEZWZpbmVkKCkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGZicSAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBpeGVsVHlwZSgpIHtcclxuICAgICAgICBpZih0aGlzLmRpc2FibGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1BpeGVsID0gKHR5cGVvZiB0aGlzLmZiLnBpeGVsLm5hbWUgIT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZmIucGl4ZWwubmFtZSA6IG51bGw7IFxyXG5cclxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZCAmJiBoYXNQaXhlbCl7XHJcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MTAyNzAwMzk1MjA2MzQnKTtcclxuICAgICAgICAgICAgZmJxKCd0cmFja1NpbmdsZScsICc0MTAyNzAwMzk1MjA2MzQnLCB0aGlzLmZiLnBpeGVsLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQSAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcuZ2E7XHJcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRHbG9iYWxWYXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyICB8fCBbXTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvciAmJiB0eXBlb2YgX2dhcSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgIHx8IFtdOyAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRzKGFjdGlvbiwgbGFiZWwsIGNhdGVnb3J5ID0gJ1BpYW5vJykge1xyXG5cclxuXHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnbG9nLWdhLWV2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxyXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCAsdHJ1ZV0pO1xyXG5cdFx0XHJcblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiBjYXRlZ29yeSwgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRFdmVudHNFcnJvcihhY3Rpb24sIGxhYmVsKSB7XHJcblx0XHRpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcclxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8gRXJybycsIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XHJcblxyXG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vIEVycm8nLCAnZXZlbnRvR0FBY2FvJzogYWN0aW9uLCAnZXZlbnRvR0FSb3R1bG8nOmxhYmVsfSk7XHJcblx0fVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xyXG5cclxuICAgIHN0YXRpYyBpc0RlZmluZWQocHJvcCkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHByb3AgIT09ICd1bmRlZmluZWQnKSA/IHRydWU6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb29raWUoY19uYW1lLCB2YWx1ZSwgZXhwaXJlZGF5cyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZXhkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSA/IGxvY2F0aW9uLmhvc3RuYW1lIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIWhvc3RuYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV4ZGF0ZS5zZXREYXRlKGV4ZGF0ZS5nZXREYXRlKCkgKyBleHBpcmVkYXlzKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArZXNjYXBlKHZhbHVlKSArICgoZXhwaXJlZGF5cykgPyBcIlwiIDogXCI7ZXhwaXJlcz1cIiArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKVxyXG4gICAgICAgICsgXCI7IHBhdGg9LztcIiArIFwiZG9tYWluPS5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzFdICsgXCIuXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSAoZG9jdW1lbnQuY29va2llKSA/IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKG5hbWUrJz0oW147XSspJykpIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvb2tpZVRpbnkgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzFdLnRvU3RyaW5nKCkpIDogXCJcIjtcclxuICAgICAgICByZXR1cm4gY29va2llVGlueTtcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwZXJpZW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0RlZmluZWQoKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy50aW55Q3B0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnKSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB3aW5kb3cudGlueUNwdC5QaWFubztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV4cGVyaWVuY2UoKSB7ICBcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSAnJzsgICBcclxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZSA9IHt9OyAgXHJcbiAgICAgICAgIFxyXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKVxyXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7cmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIFxyXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7d2luZG93Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xyXG4gICAgICAgXHJcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSA9IGV4cGVyaWVuY2VOYW1lO1xyXG5cdH1cclxuXHJcbiAgICByZXNldFV0cCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZClcclxuICAgICAgICAgICAgSGVscGVycy5zZXRDb29raWUodGhpcy5jb250ZW50LnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgJycsIC0xKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsb2JhbCgpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBQcm9kdWN0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3ROYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy50aW55Q3B0ID0gKHdpbmRvdy50aW55Q3B0KSA/ICBPYmplY3QuYXNzaWduKHByb2R1Y3RzU2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IHByb2R1Y3RzU2V0dGluZ3M7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgaXNQcm9kdWN0VmFsb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb2R1Y3ROYW1lICYmIHRoaXMucHJvZHVjdE5hbWUgPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dnIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHdpbmRvdy5TV0cgPSB3aW5kb3cuU1dHIHx8IFtdOyAvL1RPRE86IFVuZGVyc3RhbmQgd2h5IHRoaXMgdmFyaWFibGUgZXhpc3RzXHJcbiAgICAgICAgd2luZG93LnN3Z0VudGl0bGVtZW50cyA9IHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLmRlYnVnID0gKEhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgPyB3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vID0gKHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyBub21lUHJvZHV0b1BpYW5vIDogbnVsbDtcclxuICAgICAgICB0aGlzLmhhc1Byb2R1Y3RKU09OID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SlNPTiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQgPSBkb2N1bWVudC5oZWFkOyBcclxuXHJcbiAgICAgICAgdGhpcy5zZXRHbG9iYWxTV0coKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNEZWZpbmVkKCkgeyBcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpID8gdHJ1ZSA6IGZhbHNlOyBcclxuICAgIH1cclxuXHJcbiAgICBzZXRHbG9iYWxTV0coKSB7XHJcbiAgICAgICAgaWYoIUhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cgPSB7XHJcbiAgICAgICAgICAgIGdsb2JhbDogKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSA/IHN3ZyA6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFV0bXMoKSB7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICBjb25zdCB1dG1zUHJvcHMgPSAodHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3Zy51dG1zICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyA6IG51bGw7IFxyXG5cclxuICAgICAgICB1dG1zUHJvcHMuZm9yRWFjaCgoaXRlbSkgPT4geyBcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgdXJsUGFyYW1zLnNldChgdXRtXyR7bmFtZX1gLCB2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKSB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdzZXRVdG1zJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIHV0bXNQcm9wcylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIGxvY2F0aW9uKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmlzRGVmaW5lZCkgfHwgIXV0bXNQcm9wcyApIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsLnN1YnNjcmliZSgnYnIuY29tLmluZm9nbG9iby5vZ2xvYm8uc3dnLmdvb2dsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFByb2R1Y3RzKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZGVidWcpXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCgnLi4vYXBwL21vY2tzL3N3Zy9wcm9kdWN0cy5qc29uJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfN2IwYTZkZjQ5ODk1NDU5ZmJhZmU0OWE5NmZjYjViYmYvc3dnL3Byb2R1Y3RzLmpzb24nKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0KCkgeyBcclxuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgdGhpcy5nZXRQcm9kdWN0cygpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnBpYW5vUHJvZHVjdE5hbWUgPT09IHRoaXMubG9jYWxQcm9kdWN0UGlhbm8gKVswXTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbW92ZVByb3BlcnRpZXMob2JqKSB7IFxyXG4gICAgICAgIGNvbnN0IHByb3BzVG9SZW1vdmUgPSBbJ3Byb2R1Y3ROYW1lJywgJ3BpYW5vUHJvZHVjdE5hbWUnXTtcclxuICAgICAgICBjb25zdCBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xyXG5cclxuICAgICAgICBwcm9wc1RvUmVtb3ZlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBuZXdPYmpbZWxlbWVudF07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbWFya3VwVGVtcGxhdGUoKSB7IFxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RKU09OID0gIGF3YWl0IHRoaXMucmVtb3ZlUHJvcGVydGllcyhhd2FpdCB0aGlzLmdldFByb2R1Y3QoKSkgfHwgbnVsbDsgXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IE9iamVjdC5rZXlzKHByb2R1Y3RKU09OKS5sZW5ndGggPyBKU09OLnN0cmluZ2lmeShwcm9kdWN0SlNPTikgOiBudWxsO1xyXG5cclxuICAgICAgICBpZighcHJvZHVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmRlYnVnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeydsb2ctU1dHLVByb2R1Y3QnOiBwcm9kdWN0fSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gYCR7IHByb2R1Y3QgfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldE1hcmt1cCgpIHsgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5tYXJrdXBUZW1wbGF0ZSgpO1xyXG4gICAgICAgIGlmKCF0aGlzLnByb2R1Y3RKU09OKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBlbGVtZW50LnR5cGUgPSAnYXBwbGljYXRpb24vbGQranNvbic7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnByb2R1Y3RKU09OO1xyXG4gICAgICAgIHRoaXMuZWxIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3dnU2NyaXB0KCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBlbGVtZW50LnNyYyA9ICdodHRwczovL25ld3MuZ29vZ2xlLmNvbS9zd2cvanMvdjEvc3dnLmpzJztcclxuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFsZGViYXJhblNjcmlwdCgpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgY29uc3QgdXJsUHJvZCA9ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF9jMTBhZTgxOWM1Njg0NjBiYjRlYzE3YzBhOGVjNTI2Ny9hbGRlYmFyYW4vanMvYnVuZGxlLmpzJztcclxuICAgICAgICBjb25zdCB1cmxTdGcgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYWRkYzVlOGYzMTZmNDhlYTkxODFhZjM3MTYwYjIyYjQvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3JjID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gdXJsUHJvZCA6IHVybFN0ZztcclxuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3RTV0coKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnN3Zykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwgPSB3aW5kb3cuc3dnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUod2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ1RoZXJlIGlzblxcJ3Qgd2luZG93LnN3ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMubG9jYWxQcm9kdWN0UGlhbm8pIHJldHVybjtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldE1hcmt1cCgpOyAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLmhhc1Byb2R1Y3RKU09OKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTd2dTY3JpcHQoKTsgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRBbGRlYmFyYW5TY3JpcHQoKTsgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnRlc3RTV0coKTsgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbnkgIHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xyXG4gICAgICAgIHdpbmRvdy5oYXNQYXl3YWxsID0gd2luZG93Lmhhc1BheXdhbGwgfHwgZmFsc2U7XHJcbiAgICAgICAgd2luZG93LnRwID0gd2luZG93LnRwIHx8IFtdO1xyXG4gICAgICAgIHdpbmRvdy5QaWFubyA9IHdpbmRvdy5QaWFubyB8fCB7fTtcclxuICAgICAgICB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyA9IHdpbmRvdy5QYXl3YWxsQW5hbHl0aWNzIHx8IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsVGlueSgpO1xyXG4gICAgICAgIHRoaXMuUHJvZHVjdHMuc2V0R2xvYmFsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2xvYmFsVGlueSgpIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGRlYnVnOiB7XHJcbiAgICAgICAgICAgICAgICB0aW55OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBheXdhbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3dnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGdhOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc1Byb2R1Y3Rpb246ICh3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IGRlZmF1bHRTZXR0aW5nczsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFBpYW5vKG9iaikge1xyXG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vID0gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vSGVscGVycyc7XHJcbmltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XHJcbmltcG9ydCBHQU1vZHVsZSBmcm9tICcuLi9HQSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsR0FNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xyXG4gICAgdGhpcy5HQSA9IG5ldyBHQU1vZHVsZSgpOyBcclxuXHJcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXRyaWNzID0ge1xyXG4gICAgICAgIHBheXdhbGw6IHt9LCBcclxuICAgICAgICBmYjoge1xyXG4gICAgICAgICAgICBwaXhlbDoge31cclxuICAgICAgICB9IFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBheXdhbGxUeXBlKCk7XHJcbiAgfVxyXG5cclxuICBwYXl3YWxsTG9hZCgpIHsgXHJcbiAgICBpZighdGhpcy5QaWFuby5pc0RlZmluZWQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBfUGlhbm8gPSB0aGlzLlBpYW5vLmNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5HQS5zZXRFdmVudHMoJ0V4aWJpY2FvIFJlZ2lzdGVyJywgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSk7XHJcbiAgICBIZWxwZXJzLnNldENvb2tpZShfUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlcihlbGVtZW50KSB7IFxyXG4gICAgaWYodGhpcy5kaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNldFV0cCA9IGVsZW1lbnQuZGF0YXNldC5nYVJlc2V0dXRwIHx8IG51bGw7XHJcbiAgICBjb25zdCBpbWFnZVRvcCA9IGVsZW1lbnQuZGF0YXNldC5nYUltYWdlUG9zaXRpb247XHJcbiAgICBjb25zdCBsYWJlbCA9IChpbWFnZVRvcCA9PT0gJ3RvcCcpID8gZWxlbWVudC5kYXRhc2V0LmdhTGFiZWwgKyB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA6IGVsZW1lbnQuZGF0YXNldC5nYUxhYmVsO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV2ZW50OiAnRXZlbnRvR0EnLFxyXG4gICAgICBldmVudG9HQUNhdGVnb3JpYTogdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSxcclxuICAgICAgZXZlbnRvR0FBY2FvOiBlbGVtZW50LmRhdGFzZXQuZ2FBY3Rpb24gfHwgYWN0aW9uLFxyXG4gICAgICBldmVudG9HQVJvdHVsbzogbGFiZWwsXHJcbiAgICAgIGV2ZW50b0dBVmFsb3I6IDAsXHJcbiAgICAgIGV2ZW50b0dBSW50ZXJhY2FvOiBmYWxzZSxcclxuICAgIH07IFxyXG5cclxuICAgIGlmIChyZXNldFV0cClcclxuICAgICAgICB0aGlzLlBpYW5vLnJlc2V0VXRwKCk7XHJcbiBcclxuICAgIHRoaXMuc2V0RGF0YWxheWVyKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGF5d2FsbFR5cGUoKSB7XHJcbiAgICBjb25zdCB0eXBlID0gKCAodHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwgIT09ICd1bmRlZmluZWQnKSAmJiB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbCkgXHJcbiAgICAgID8gd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwudG9Mb3dlckNhc2UoKSBcclxuICAgICAgOiAncGF5d2FsbCc7XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ1JlZ2lzdGVyIGNvbXVtJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdDYWRhc3RyZS1zZSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1JlZ2lzdGVyV2FsbCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2V4Y2x1c2l2byc6XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBleGNsdXNpdm8nO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0Fzc2luZSBhZ29yYSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld0xvZ2luRXhjbHVzaXZvJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGF5d2FsbCc6XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdwYXl3YWxsJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdQYXl3YWxsRXhjbHVzaXZvJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERhdGFsYXllcihkYXRhID0ge30pIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgZGF0YUxheWVyLnB1c2goZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XHJcbmltcG9ydCBQYXl3YWxsR0FNb2R1bGUgZnJvbSAnLi9QYXl3YWxsLWdhJztcclxuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuLi9Td2cnO1xyXG5pbXBvcnQgRmJNb2R1bGUgZnJvbSAnLi4vRkInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbENwdCAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHR0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XHJcblx0dGhpcy5HQSA9IG5ldyBQYXl3YWxsR0FNb2R1bGUoKTtcclxuXHR0aGlzLlNXRyA9IG5ldyBTd2dNb2R1bGUoKTtcclxuXHR0aGlzLkZCID0gbmV3IEZiTW9kdWxlKHRoaXMuR0EubWV0cmljcy5mYik7XHJcblxyXG5cdHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xyXG5cdHRoaXMuZG9tYWluID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLyc7XHRcclxuXHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xyXG5cdFx0dGhpcy5pbml0KCk7IFxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuUGF5d2FsbENwdCA9IHRoaXM7XHJcblxyXG5cdHdpbmRvdy50aW55Q3B0LlBheXdhbGwgPSB7XHJcblx0XHRkb21haW46IHRoaXMuZG9tYWluLFxyXG5cdFx0R0E6IHRoaXMuR0EubWV0cmljcyxcclxuXHR9O1xyXG4gIH1cclxuXHJcbiAgc2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xyXG5cdFx0bGV0IHRlbXBsYXRlU2V0dGluZ3MgPSB7XHJcblx0XHRcdHRlbXBsYXRlOiAnZGVmYXVsdCcsXHJcblx0XHRcdGFzc2V0c1BhdGg6ICcnLFxyXG5cdFx0XHRkaXNwbGF5OiBudWxsLFxyXG5cdFx0XHRwcm9kdWN0Q2xhc3M6IHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyA/IGBwYXl3YWxsLWNwdC0ke25vbWVQcm9kdXRvUGlhbm99YCA6ICdwYXl3YWxsLWNwdC1vZ2xvYm8nLFxyXG5cdFx0XHR0aXRsZTogJ0Vzc2UgY29udGXDumRvIMOpIG8gdMOtdHVsby4nLFxyXG5cdFx0XHR0YXJnZXRCbGFuazogdHJ1ZSxcclxuXHRcdFx0dG9wTW9iaTogJycsXHJcblx0XHRcdHRvcERlc2s6ICcnLFxyXG5cdFx0XHR0b3BMaW5rOiAnJyxcclxuXHRcdFx0bGVmdE1vYmk6ICcnLFxyXG5cdFx0XHRsZWZ0RGVzazogJycsXHJcblx0XHRcdGxlZnRMaW5rOiAnJyxcclxuXHRcdFx0cmlnaHRNb2JpOiAnJyxcclxuXHRcdFx0cmlnaHREZXNrOiAnJyxcclxuXHRcdFx0cmlnaHRMaW5rOiAnJ1xyXG5cdFx0fTtcclxuXHJcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmhpZGVMb2dpbkFyZWEgPSBmYWxzZTtcclxuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5UZXh0ID0gJ0Zhw6dhIGxvZ2luJztcclxuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5QcmVUZXh0ID0gJ0rDoSBwb3NzdWkgY2FkYXN0cm8/JztcclxuXHRcdFxyXG5cdFx0d2luZG93LmdsYlBheXdhbGwgPSAod2luZG93LmdsYlBheXdhbGwpID8gIE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlU2V0dGluZ3MsIHdpbmRvdy5nbGJQYXl3YWxsKSA6IHRlbXBsYXRlU2V0dGluZ3M7IFxyXG5cdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSBgJHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblByZVRleHR9IDxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGRhdGEtaXMtbG9naW49XCJ0cnVlXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDIgLSBGYcOnYSBsb2dpblwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJmYWxzZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIgJHt3aW5kb3cuZ2xiUGF5d2FsbC50YXJnZXRCbGFua30gXCI+JHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRleHR9PC9hPmA7XHJcblxyXG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSlcclxuXHRcdFx0dGhpcy5jbGVhckxvZ2luQXJlYSgpO1xyXG5cclxuXHRcdGlmKHRoaXMuZGVidWcgKSBcclxuXHRcdFx0dGhpcy5zZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKTtcclxuXHRcdFxyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyTG9naW5BcmVhKCkge1xyXG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwpIHsgXHJcblx0XHRcdHdpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGFnID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKSB7XHJcblx0XHRsZXQgb2JqID0ge307XHJcblx0XHRvYmoudG9wTW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDE1MCc7XHJcblx0XHRvYmoudG9wRGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODA0eDEyOCc7XHJcblx0XHRvYmoudG9wTGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDEnO1xyXG5cdFx0b2JqLmxlZnRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcclxuXHRcdG9iai5sZWZ0RGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAyeDUxNSc7XHJcblx0XHRvYmoubGVmdExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wyJztcclxuXHRcdG9iai5yaWdodE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHg1MDAnO1xyXG5cdFx0b2JqLnJpZ2h0RGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAyeDUxNSc7XHJcblx0XHRvYmoucmlnaHRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMyc7XHJcblxyXG5cdFx0d2luZG93LmdsYlBheXdhbGwgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuZ2xiUGF5d2FsbCwgb2JqKTtcclxuXHR9XHJcbiBcclxuICBib2R5QWRqdXN0KCkge1xyXG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nLCAnaW1wb3J0YW50Jyk7XHJcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2ZpeGVkJywgJ2ltcG9ydGFudCcpO1xyXG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsICcxMDAlJywgJ2ltcG9ydGFudCcpO1xyXG4gIH1cclxuXHJcbiAgc2V0RWxXcmFwcGVyKCkge1xyXG5cdHRoaXMuZWxDcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQnKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUVsZW1lbnRzKCkge1xyXG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XHJcblxyXG5cdGlmKHRoaXMuZWxDcHQpXHJcblx0XHR0aGlzLmVsQ3B0LnJlbW92ZSgpO1xyXG5cclxuXHRjb25zdCBlbFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3RlY3RlZC1jb250ZW50LCAjaW5mb2FydGUtbWFpbi1jb250ZW50Jyk7XHJcblxyXG5cdGVsVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHQgIGVsZW1lbnQucmVtb3ZlKCk7XHJcblx0fSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUZW1wbGF0ZSgpIHtcclxuXHR0aGlzLmVsQm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICB0aGlzLmJvZHlBZGp1c3QoKTtcclxuICAgIHRoaXMucmVtb3ZlRWxlbWVudHMoKTtcclxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMuY3NzTWluaWZpZWQpOyBcclxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpOyBcclxuXHR0aGlzLmFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKTtcdFxyXG4gICAgXHJcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuR0EucGF5d2FsbExvYWQoKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKSB7XHJcblx0dGhpcy5zZXRFbFdyYXBwZXIoKTtcclxuXHR0aGlzLmVsQ3B0V3JhcCA9IHRoaXMuZWxDcHQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0LXdyYXAnKTtcclxuXHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRjb25zdCBlbEJvZHlIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyA0O1xyXG5cdFx0Y29uc3QgZWxDcHRXcmFwSGVpZ2h0ID0gdGhpcy5lbENwdFdyYXAub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3AgPSAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSBcclxuICAgICAgICA/IE1hdGguYWJzKCBlbEJvZHlIZWlnaHQvMiApXHJcbiAgICAgICAgOiBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKTtcclxuXHRcdGNvbnN0IHRvcFdpdGhGdWxsRWxlbWVudCA9IChlbEJvZHlIZWlnaHQgLSBlbENwdFdyYXBIZWlnaHQpO1xyXG5cclxuXHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7Y3VycmVudFRvcH1weGA7XHJcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0dGhpcy5lbENwdC5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTk5O1xyXG5cclxuXHRcdHRoaXMuZXZ0V2hlZWwoY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KTtcclxuXHRcdHRoaXMuZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KTtcclxuXHRcdHRoaXMuYWN0aXZlRXZlbnRzKCk7XHJcblxyXG5cdFx0dGhpcy5GQi5zZXRQaXhlbFR5cGUoKTtcclxuXHR9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUV2ZW50cygpIHtcclxuXHRjb25zdCBjbGlja1RhcmdldHMgPSB0aGlzLmVsQ3B0V3JhcC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XHJcblxyXG5cdGNsaWNrVGFyZ2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkgeyBcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luID0gQm9vbGVhbihlbGVtZW50LmRhdGFzZXQuaXNMb2dpbikgfHwgZmFsc2U7XHJcblx0XHRcdGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgZmFsc2UgOyBcclxuXHRcdFx0Y29uc3QgaXNVcmxTd2cgPSAodXJsKSA/IHVybC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdvZmVydGFzd2cnKSA6IGZhbHNlO1xyXG5cdFx0XHRjb25zdCBub3RCbGFuayA9IGVsZW1lbnQuZGF0YXNldC5ocmVmVGFyZ2V0IHx8IHRydWU7IFxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5HQS50cmlnZ2VyKGVsZW1lbnQpOyBcclxuXHJcblx0XHRcdGlmKCFpc0xvZ2luICYmIGlzVXJsU3dnKVxyXG5cdFx0XHRcdHRoaXMuU1dHLnNldFV0bXMoKTsgIFxyXG5cclxuICAgICAgICAgICAgaWYgKHVybCAmJiAhaXNVcmxTd2cpIHsgXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdEJsYW5rID8gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsKSA6IHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH0pO1xyXG4gIH1cclxuXHJcbiAgZXZ0V2hlZWwoY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KSB7XHJcblx0bGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J3doZWVsJyxcclxuXHRcdGZ1bmN0aW9uKGV2dCkgeyBcclxuXHRcdCAgY29uc3Qgc3RlcCA9IGN1cnJlbnRUb3AgLyAxMDA7XHJcblx0XHQgIGNvbnN0IG11bHRpcGxpZXIgPSAyMDtcclxuXHJcblx0XHQgIGlmIChldnQuZGVsdGFZID49IDEpIHtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgLSBzdGVwICogbXVsdGlwbGllcjsgXHJcblx0XHRcdG5ld3RvcCA9IGVsVG9wIDwgdG9wV2l0aEZ1bGxFbGVtZW50ID8gdG9wV2l0aEZ1bGxFbGVtZW50IDogZWxUb3A7XHJcbiAgXHJcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcclxuXHRcdCAgfVxyXG4gIFxyXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA8PSAtMSkge1xyXG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCArIHN0ZXAgKiBtdWx0aXBsaWVyO1xyXG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XHJcbiAgXHJcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcclxuXHRcdCAgfVxyXG5cdFx0fS5iaW5kKHRoaXMpXHJcblx0ICApO1xyXG4gIH1cclxuXHJcbiAgZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KSB7XHJcbiAgICBsZXQgbmV3dG9wID0gY3VycmVudFRvcDtcclxuICAgIGxldCB0b3VjaHN0YXJ0WSA9IDA7XHJcbiAgICBsZXQgdG91Y2hlbmRZID0gMDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldnQpIHsgXHJcbiAgICAgICAgdG91Y2hzdGFydFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2dCkgeyBcclxuICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0gMjA7XHJcbiAgICAgICAgdG91Y2hlbmRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XHJcblxyXG4gICAgICAgIGlmICh0b3VjaGVuZFkgPCB0b3VjaHN0YXJ0WSkgeyBcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRvdWNoc3RhcnRZKSAtIE1hdGguYWJzKHRvdWNoZW5kWSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gZGlmZjsgXHJcbiAgICAgICAgICAgIG5ld3RvcCA9IGVsVG9wIDwgdG9wV2l0aEZ1bGxFbGVtZW50ID8gdG9wV2l0aEZ1bGxFbGVtZW50IDogZWxUb3A7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG91Y2hlbmRZID4gdG91Y2hzdGFydFkpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRvdWNoZW5kWSAtIHRvdWNoc3RhcnRZO1xyXG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCArIGRpZmY7IFxyXG5cdFx0ICAgIG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcclxuXHJcblx0XHQgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xyXG4gICAgICAgIH1cclxuXHR9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXJsTG9naW5SZWdpc3Rlcih0eXBlID0gJycpIHtcclxuXHRjb25zdCB1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byA9IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09PSAncHJkJyA/ICdodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJyA6ICdodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJztcclxuXHRjb25zdCB1cmkgPSBsb2NhdGlvbi5ocmVmO1xyXG5cdGxldCBzdHIgPSAnJztcclxuXHRsZXQgdXJsUmV0dXJuID0gJyc7XHJcblxyXG5cdGlmKCF0aGlzLmRlYnVnICYmIHRoaXMuUGlhbm8uaXNEZWZpbmVkKSB7XHJcblx0XHR1cmxSZXR1cm4gPSBlbmNvZGVVUklDb21wb25lbnQoXHJcblx0XHRcdHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvICsgJz9jb2RpZ29Qcm9kdXRvPScgKyAgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCkgXHJcblx0XHRcdCsgJyZzZXJ2aWNlSWQ9JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKClcclxuXHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xyXG5cdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxyXG5cdFx0XHQrICcmdXJsUmV0b3Jubz0nICsgdXJpXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmKHR5cGUgPT09ICdyZWdpc3RlcicpIHtcclxuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59Y2FkYXN0cm8vJHt0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpfT91cmw9JHt1cmxSZXR1cm59YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7dGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKX0/dXJsPSR7dXJsUmV0dXJufWA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcblxyXG4gIGdldCB0ZW1wbGF0ZVZhcnMoKSB7XHJcblx0cmV0dXJuIHdpbmRvdy5nbGJQYXl3YWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBsYXRlKCkgeyBcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGBcclxuXHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdCAke3RoaXMudGVtcGxhdGVWYXJzLnByb2R1Y3RDbGFzc31cIj4gXHJcblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZFwiPlxyXG5cdFx0XHQke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfVxyXG5cdFx0PC9kaXY+XHJcblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190b3BcIj5cclxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BMaW5rfVwiIGRhdGEtZ2EtaW1hZ2UtcG9zaXRpb249XCJ0b3BcIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgMSAtXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cclxuXHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTW9iaX1cIiAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyICR7d2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSA/ICdpcy1oaWRlJyA6ICcnfVwiPlxyXG5cdFx0ICBcdCR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5UYWd9XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fbGVmdFwiPlxyXG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRMaW5rfVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA0IC0gQmFubmVyIG9mZXJ0YSBlc3F1ZXJkYVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XHJcblx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdE1vYml9XCIgLz5cclxuXHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdDwvYT5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19yaWdodFwiPlxyXG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TGlua31cIiAgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDUgLSBCYW5uZXIgb2ZlcnRhIGRpcmVpdGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIC8+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0ICA8L2Rpdj5cclxuXHQgIGA7XHJcblxyXG5cdHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcclxuXHQgIHJldHVybiBgPHN0eWxlPlxyXG5cdCAgLnBheXdhbGwtY3B0e29wYWNpdHk6MDtwb3NpdGlvbjpmaXhlZDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwdnc7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWZ9LnBheXdhbGwtY3B0LC5wYXl3YWxsLWNwdCAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfS5wYXl3YWxsLWNwdCBhe2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWRlY29yYXRpb246bm9uZX0ucGF5d2FsbC1jcHQgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wYXl3YWxsLWNwdCAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdCBhe2NvbG9yOiMwMDB9LnBheXdhbGwtY3B0LW9nbG9ibyAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdC1vZ2xvYm8gYXtjb2xvcjojMzI1ZTk0fS5wYXl3YWxsLWNwdC13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1ib3R0b206MjBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LnBheXdhbGwtY3B0LXdyYXB7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn19LnBheXdhbGwtY3B0LXdyYXAgaW1ne2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LnBheXdhbGwtY3B0LXdyYXBfX3RvcHtwYWRkaW5nLXRvcDoyMHB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWR7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMCAwO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXJ7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMDtjb2xvcjojNzY3Njc2O2ZvbnQtc2l6ZToxNnB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlci5pcy1oaWRle3BhZGRpbmctYm90dG9tOjB9XHJcblx0ICA8L3N0eWxlPmA7XHJcbiAgfVxyXG5cclxuICBpbml0KCkgeyBcclxuXHQgIGNvbnN0IGRlbGF5VGltZXIgPSAod2luZG93LmdsYlBheXdhbGwgJiYgd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lcikgPyB3aW5kb3cuZ2xiUGF5d2FsbC5kZWxheVRpbWVyICogMTAwMCA6IDA7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT57XHJcblx0XHR0aGlzLmNyZWF0ZVRlbXBsYXRlKCk7XHJcblx0fSwgZGVsYXlUaW1lcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcclxuaW1wb3J0IFRpbnlNb2R1bGUgZnJvbSAnLi9UaW55JztcclxuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4vR0EnO1xyXG5pbXBvcnQgU3dnTW9kdWxlIGZyb20gJy4vU3dnJztcclxuaW1wb3J0IFBheXdhbGxDcHQgZnJvbSAnLi9jcG50LXBheXdhbGwvUGF5d2FsbCc7XHJcblxyXG5jb25zdCBUaW55ID0gbmV3IFRpbnlNb2R1bGUoKTtcclxuY29uc3QgR0EgPSBuZXcgR0FNb2R1bGUoKTtcclxuXHJcbkdBLnNldEdsb2JhbFZhcnMoKTtcclxuXHJcblBpYW5vLmFjdGl2ZVBheXdhbGwgPSB0cnVlO1xyXG5QaWFuby50eXBlUGF5d2FsbCA9IG51bGw7XHJcblBpYW5vLnZhcmlhdmVpcyA9IHtcclxuXHRhbWJpZW50ZXNBY2VpdG9zOiBcImludCxxbHQscHJkXCIsXHJcblx0c3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc286IFwiNDAwLDQwNCw0MDYsNTAwLDUwMiw1MDMsNTA0XCIsXHJcblx0c3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogXCI0MDAsNDA0LDUwMCw1MDIsNTAzLDUwNFwiLFxyXG5cdGlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkOiBmYWxzZSxcclxuXHRjb25zdGFudGU6IHtcclxuXHRcdGNvb2tpZToge1xyXG5cdFx0XHRHQ09NOiAnR0xCSUQnLFxyXG5cdFx0XHRVVFA6ICdfdXRwJyxcclxuXHRcdFx0UlRJRVg6ICdfcnRpZXgnLFxyXG5cdFx0XHRBTUJJRU5URTogJ2FtYmllbnRlUGlhbm8nLFxyXG5cdFx0XHRTQVZFX1NVQlNDUklQVElPTjogJ3NhdmVTdWJzY3JpcHRpb25Db29raWUnLFxyXG5cdFx0XHRDUkVBVEVEX0dMT0JPSUQ6ICdjcmVhdGVkR2xvYm9JZCcsXHJcblx0XHRcdEdMT0JPSURfTUVTU0FHRTogJ2dsb2JvSWRNZXNzYWdlJ1xyXG5cdFx0fSxcclxuXHRcdG1ldHJpY2FzOiB7XHJcblx0XHRcdEVWRU5UT19TRU1fQUNBTzogJ3NlbSBhY2FvJyxcclxuXHRcdFx0RVJSTzogJ0Vycm8nXHJcblx0XHR9LFxyXG5cdFx0a3J1eDoge1xyXG5cdFx0XHRTRUdNRU5UQUNPRVM6ICdreGdsb2JvX3NlZ3MnLFxyXG5cdFx0XHRLUlVYTElHQURPOiAna3J1eC1saWdhZG8nXHJcblx0XHR9LFxyXG5cdFx0dXRpbDoge1xyXG5cdFx0XHRJUDogXCIxMjcuMC4wLjFcIixcclxuXHRcdFx0QU1CSUVOVEU6IFwiYW1iaWVudGUtZGVzZWphZG9cIixcclxuXHRcdFx0REVCVUc6IFwiZGVidWctcGlhbm9cIlxyXG5cdFx0fVxyXG5cdH0sXHJcblx0aXNDb250ZXVkb0V4Y2x1c2l2bzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmNvbnRldWRvRXhjbHVzaXZvID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0Z2V0QW1iaWVudGVQaWFubzogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoUGlhbm8udmFyaWF2ZWlzLmFtYmllbnRlc0FjZWl0b3MuaW5kZXhPZihQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSkgPiAtMSkge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSksIDEpO1xyXG5cdFx0XHRyZXR1cm4gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSk7XHJcblx0XHR9XHJcblx0XHRpZiAoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkgPT0gJ2ZhbHNlJykge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgXCJcIiwgLTEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKSkge1xyXG5cdFx0XHRyZXR1cm4gSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpO1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vKSA+IC0xID8gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gOiAncHJkJztcclxuXHR9LFxyXG5cdGdldFRpcG9Db250ZXVkb1BpYW5vOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cudGlwb0NvbnRldWRvUGlhbm87XHJcblx0fSxcclxuXHRleGVjdXRvdVBhZ2V2aWV3OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuZXhlY3V0b3VQYWdldmlldyA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdGdldE5vbWVQcm9kdXRvOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICghd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8pe1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIk5vbWUgZG8gcHJvZHV0byBuw6NvIGRlZmluaWRvLlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3aW5kb3cubm9tZVByb2R1dG9QaWFubztcclxuXHR9LFxyXG5cdGdldFNlcnZpY29JZDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaWQgPSAnMDAwMCc7XHJcblxyXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdvZ2xvYm8nIFxyXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2Jsb2dzJyBcclxuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdrb2d1dCdcclxuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdhY2Vydm8nXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnam9ybmFsZGlnaXRhbCcpe1xyXG5cdFx0XHRyZXR1cm4gaWQgPSAnMzk4MSc7XHJcblx0XHR9XHJcblx0XHRpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSAmJiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ21vbmV0Jyl7IFxyXG5cdFx0XHRyZXR1cm4gaWQgPSAnNjYxOCc7XHJcblx0XHR9ZWxzZSBpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSl7XHJcblx0XHRcdHJldHVybiBpZCA9ICc2Njk3JztcclxuXHRcdH1cclxuXHJcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3ZhbG9yJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBpZCA9ICc2NjY4JztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKGlkID09PSAnMDAwMCcpXHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdTZXJ2aWNlSUQgbsOjbyBkZWZpbmlkby4nLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmICsgXHJcblx0XHRcdFx0JyBub21lUHJvZHV0bzogJyArIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpICk7XHJcblxyXG5cdFx0cmV0dXJuIGlkO1xyXG5cdH0sXHJcblx0Z2V0Q29kaWdvUHJvZHV0bzogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBub21lUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpO1xyXG5cdFx0c3dpdGNoIChub21lUHJvZHV0byl7XHJcblx0XHRcdGNhc2UgJ29nbG9ibyc6XHJcblx0XHRcdGNhc2UgJ2Jsb2dzJzpcclxuXHRcdFx0Y2FzZSAna29ndXQnOlxyXG5cdFx0XHRcdHJldHVybiAnT0cwMyc7XHJcblx0XHRcdGNhc2UgJ2FjZXJ2byc6XHJcblx0XHRcdFx0cmV0dXJuICdPRzA0JztcclxuXHRcdFx0Y2FzZSAnam9ybmFsZGlnaXRhbCc6XHJcblx0XHRcdFx0cmV0dXJuICdPRzAxJztcclxuXHRcdFx0Y2FzZSAnYXV0by1lc3BvcnRlJzpcclxuXHRcdFx0Y2FzZSAnZXBvY2EnOlxyXG5cdFx0XHRjYXNlICd2b2d1ZSc6XHJcblx0XHRcdGNhc2UgJ2dsYW1vdXInOlxyXG5cdFx0XHRjYXNlICdjYXNhLXZvZ3VlJzpcclxuXHRcdFx0Y2FzZSAnbWFyaWUtY2xhaXJlJzpcclxuXHRcdFx0Y2FzZSAnZ2xvYm8tcnVyYWwnOlxyXG5cdFx0XHRjYXNlICdncSc6XHJcblx0XHRcdGNhc2UgJ21vbmV0JzpcclxuXHRcdFx0Y2FzZSAnY3Jlc2Nlcic6XHJcblx0XHRcdGNhc2UgJ2dhbGlsZXUnOlxyXG5cdFx0XHRcdHJldHVybiBub21lUHJvZHV0bztcclxuXHRcdFx0Y2FzZSAnY2FzYS1lLWphcmRpbSc6XHJcblx0XHRcdFx0cmV0dXJuICdjYXNhLWphcmRpbSc7XHJcblx0XHRcdGNhc2UgJ3F1ZW0tYWNvbnRlY2UnOlxyXG5cdFx0XHRcdHJldHVybiAncXVlbSc7XHJcblx0XHRcdGNhc2UgJ3ZhbG9yJzpcclxuXHRcdFx0XHRyZXR1cm4gJ3ZhbG9yZGlnaXRhbCc7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBbyBvYnRlciBjw7NkaWdvIGRvIHByb2R1dG9cIiwgbm9tZVByb2R1dG8gKyBcIiAtIFwiICsgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcclxuXHRcdFx0XHRyZXR1cm4gJ2Vycm9yJztcclxuXHRcdH1cclxuXHR9XHRcclxufTtcclxuXHJcblBpYW5vLmphbmVsYUFub25pbWEgPSB7XHJcblx0cmV0cnkgOiBmdW5jdGlvbihpc0RvbmUsIG5leHQpIHtcclxuXHRcdHZhciBjdXJyZW50X3RyaWFsID0gMCwgbWF4X3JldHJ5ID0gNTAsIGludGVydmFsID0gMTAsIGlzX3RpbWVvdXQgPSBmYWxzZTtcclxuXHRcdHZhciBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcclxuXHRcdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKGlzRG9uZSgpKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XHJcblx0XHRcdFx0XHRuZXh0KGlzX3RpbWVvdXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoY3VycmVudF90cmlhbCsrID4gbWF4X3JldHJ5KSB7XHJcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XHJcblx0XHRcdFx0XHRpc190aW1lb3V0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMFxyXG5cdFx0KTtcclxuXHR9LFxyXG5cdGlzSUUxME9yTGF0ZXIgOiBmdW5jdGlvbih1c2VyX2FnZW50KSB7XHJcblx0XHRsZXQgdWEgPSB1c2VyX2FnZW50LnRvTG93ZXJDYXNlKCk7XHJcblx0XHRsZXQgbWF0Y2ggPSAvKD86bXNpZXxydjopXFxzPyhbXFxkXFwuXSspLy5leGVjKHVhKTtcclxuXHRcdFxyXG5cdFx0aWYgKHVhLmluZGV4T2YoJ21zaWUnKSA9PT0gMCAmJiB1YS5pbmRleE9mKCd0cmlkZW50JykgPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG1hdGNoICYmIHBhcnNlSW50KG1hdGNoWzFdLCAxMCkgPj0gMTApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRkZXRlY3RQcml2YXRlTW9kZSA6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgaXNfcHJpdmF0ZTtcclxuXHJcblx0XHRpZiAod2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKSB7XHJcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbShcclxuXHRcdFx0XHR3aW5kb3cuVEVNUE9SQVJZLCAxLFxyXG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0fSBlbHNlIGlmICh3aW5kb3cuaW5kZXhlZERCICYmIC9GaXJlZm94Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG5cdFx0XHR2YXIgZGI7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0ZGIgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oJ3Rlc3QnKTtcclxuXHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLnJldHJ5KFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gaXNEb25lKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZGIucmVhZHlTdGF0ZSA9PT0gJ2RvbmUnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZ1bmN0aW9uIG5leHQoaXNfdGltZW91dCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWlzX3RpbWVvdXQpIHtcclxuXHRcdFx0XHRcdFx0XHRpc19wcml2YXRlID0gZGIucmVzdWx0ID8gZmFsc2UgOiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChQaWFuby5qYW5lbGFBbm9uaW1hLmlzSUUxME9yTGF0ZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcblx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRpZiAoIXdpbmRvdy5pbmRleGVkREIpIHtcclxuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UgJiYgL1NhZmFyaS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3QnLCAxKTtcclxuXHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XHJcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZXN0Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLnJldHJ5KFxyXG5cdFx0XHRmdW5jdGlvbiBpc0RvbmUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBpc19wcml2YXRlICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24gbmV4dChpc190aW1lb3V0KSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soaXNfcHJpdmF0ZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8ua3J1eCA9IHtcclxuXHR0ZW06IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKSA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdGxpZ2FkbzogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LktSVVhMSUdBRE87XHJcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcclxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnICYmIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vICE9IFwicHJkXCIpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCB2YWxvclBhcmFtZXRybywgMSk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScgfHwgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT0gXCJwcmRcIikge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LktSVVhMSUdBRE8pID09IFwiZmFsc2VcIikge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cdG9idGVtU2VnbWVudGFjYW86IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKFBpYW5vLmtydXgudGVtKCkgJiYgUGlhbm8ua3J1eC5saWdhZG8oKSkge1xyXG5cdFx0XHR2YXIgc2VnbWVudGFjb2VzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpLnNwbGl0KCcsJyk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudGFjb2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBzZWdtZW50YWNvZXNbaV0sIHNlZ21lbnRhY29lc1tpXV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8ubWV0cmljYXMgPSB7XHJcblx0ZW52aWFFdmVudG9zR0E6IGZ1bmN0aW9uKF9HQUFjYW8sIF9HQVJvdHVsbykgeyAvL1RPRE86IGFycXVpdm8gdGlueXBhc3MuanMsIGluc2VyaWRvIHBlbGEgUGlhbm8sIHV0aWxpemEgZXNzYSBmdW7Dp8Ojb1xyXG5cdFx0Y29uc3QgaXNQcm9kdWN0VmFsb3IgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChpc1Byb2R1Y3RWYWxvcilcclxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8nLCBfR0FBY2FvLCBfR0FSb3R1bG8sICx0cnVlXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubycsICdldmVudG9HQUFjYW8nOiBfR0FBY2FvLCAnZXZlbnRvR0FSb3R1bG8nOl9HQVJvdHVsb30pO1xyXG5cdH0sXHJcblxyXG5cdG1vbnRhUm90dWxvR0E6IGZ1bmN0aW9uKCkgeyAvL1RPRE86IGF0IFBpYW5vIGFzIHNldEV4cGVyaWVuY2UoKSB8IENoZWNrIG9uIG9sZCB0aW55IGJlZm9yZSByZW1vdmVcclxuXHRcdGlmKHdpbmRvdy5yZWdyYXNUaW55ICYmIHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSkge1xyXG5cdFx0XHRyZXR1cm4gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gOiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XHJcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5ub21lRXhwZXJpZW5jaWE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gXCIgXCI7XHJcblx0fSxcclxuXHRzZXRMaW1pdGVDb250YWdlbTogZnVuY3Rpb24obWV0cmljYXMpIHtcclxuXHRcdF9HQUxpbWl0ZSA9IFwiLVwiO1xyXG5cdFx0X0dBQ29udGFnZW0gPSBcIi1cIjtcclxuXHRcdGlmKCFtZXRyaWNhcykgcmV0dXJuO1xyXG5cdFx0X0dBQ29udGFnZW0gPSBcIlwiICsgbWV0cmljYXMudmlld3M7XHJcblx0XHRpZiAoX0dBQ29udGFnZW0ubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0X0dBQ29udGFnZW0gPSBcIjBcIiArIF9HQUNvbnRhZ2VtO1xyXG5cdFx0fVxyXG5cdFx0X0dBTGltaXRlID0gbWV0cmljYXMubm9tZUV4cGVyaWVuY2lhICtcIiA6IFwiKyBtZXRyaWNhcy5tYXhWaWV3cztcclxuXHR9LFxyXG5cdGlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3RlcjogZnVuY3Rpb24ocmVncmFzKSB7XHJcblx0XHR2YXIgcGFzc2FnZW0gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLm1ldHJpY2FzLkVWRU5UT19TRU1fQUNBTztcclxuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkge1xyXG5cdFx0XHRwYXNzYWdlbSA9IHJlZ3Jhcy5mbHV4by5pbmRleE9mKFwiaGFyZHdhbGxcIikgIT0gLTEgPyAncmVnaXN0ZXItaGFyZHdhbGwtcGFzc291JyA6ICdyZWdpc3Rlci1jb250YWdlbS1wYXNzb3UnO1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBhc3NhZ2VtO1xyXG5cdH0sXHJcblx0ZXhlY3V0YUFwb3NQYWdldmlldzogZnVuY3Rpb24oZXhwaXJvdSkge1xyXG5cdFx0aWYgKCFQaWFuby52YXJpYXZlaXMuZXhlY3V0b3VQYWdldmlldygpKSB7XHJcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55LmZsdXhvID0gd2luZG93LnRwQ29udGV4dCA/IHRwQ29udGV4dC50b0xvd2VyQ2FzZSgpIDogJy0nO1xyXG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSB3aW5kb3cubm9tZUV4cGVyaWVuY2lhID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA6ICcnO1xyXG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRMaW1pdGVDb250YWdlbSh3aW5kb3cucmVncmFzVGlueSk7XHJcblx0XHRcdGlmIChleHBpcm91ID09IGZhbHNlKSBHQS5zZXRFdmVudHMoUGlhbm8ubWV0cmljYXMuaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyKHdpbmRvdy5yZWdyYXNUaW55KSwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdFx0ZXhlY3V0b3VQYWdldmlldyA9IHRydWU7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzZXRhVmFyaWF2ZWlzOiBmdW5jdGlvbihpZExvZ2luLCB0aXBvTG9naW4sIGFzc2luYXR1cmFMb2dhZGEpe1xyXG5cdFx0UGF5d2FsbEFuYWx5dGljcy5pZExvZ2luQXNzaW5hbnRlID0gaWRMb2dpbjtcclxuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLnRpcG9Mb2dpbkFzc2luYW50ZSA9IHRpcG9Mb2dpbjtcclxuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLmFzc2luYXR1cmFMb2dhZGEgPSBhc3NpbmF0dXJhTG9nYWRhO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5QaWFuby5iYW5uZXIgPSB7XHJcblx0bW9zdHJhckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL25vdm8tYmFubmVyLWZvb3Rlci5qc1wiKTtcclxuXHR9LFxyXG5cdG1vc3RyYXJCb3Rhb0Fzc2luYXR1cmFIZWFkZXJGb290ZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8uanNcIik7XHJcblx0fSxcclxuXHRtb3N0cmFyQXZhdGFySGVhZGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYXZhdGFyLWhlYWRlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9hdmF0YXItaGVhZGVyLXBpYW5vLmpzXCIpO1xyXG5cdH0sXHJcblx0Ym90dG9tRml4ZWQ6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XHJcblx0XHR3aW5kb3cuZ2xiQmFubmVyQm90dG9tID0gcGFyYW1zO1xyXG5cclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc3R5bGVzL2Jhbm5lci1ib3R0b20tZml4ZWQuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWJvdHRvbS1maXhlZC9zY3JpcHRzL2Jhbm5lci1ib3R0b20tZml4ZWQuanNcIik7XHJcblx0fSxcclxuXHRtb3N0cmFyU1dHOiBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGNzcyA9IGA8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvc3dnL3YxL3N0eWxlcy9zdHlsZS5jc3MnPmA7XHJcblx0XHRjb25zdCBzY3JpcHRKcyA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvc3dnL3YxL3NjcmlwdC9hbnVuY2lvLXN3Zy5qc2A7XHJcblxyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoY3NzKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShzY3JpcHRKcyk7XHJcblx0fSxcclxuXHRtb3N0cmFySGlnaGxpZ2h0U2FsZTogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc2NyaXB0cy9oaWdobGlnaHQtc2FsZS5qc1wiKTtcclxuXHR9LFxyXG5cdG1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvcjogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvdmFsb3Itc3Vic2NyaWJlLWJ1dHRvbi9cIit2ZXJzYW8rXCIvc2NyaXB0cy9zdWJzY3JpYmUtYnV0dG9uLmpzXCIpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5QaWFuby5yZWdpc3RlciA9IHtcclxuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92YS10ZWxhLXJlZ2lzdGVyLmpzXCIpO1xyXG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XHJcblx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmhlbHBlciA9IHtcclxuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfNjVkMTkzMGEwYmRhNDc2YmE4ZDNjMjVjNTM3MWVjM2YvcGlhbm8vaGVscGVyL3JlZ2lzdGVyLmpzXCIpO1xyXG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XHJcblx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLnBheXdhbGwgPSB7XHJcblx0cmVkaXJlY2lvbmFyQmFycmVpcmE6IGZ1bmN0aW9uKHVybCkge1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiQmFycmVpcmFcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDt9LCAxMDAwKTtcclxuXHR9LFxyXG5cdHNob3c6IGZ1bmN0aW9uKHR5cGVQYXl3YWxsID0gbnVsbCkge1xyXG5cdFx0aWYod2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbClcclxuXHRcdFx0Y29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAnUGlhbm8ucGF5d2FsbC5zaG93JylcclxuXHJcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHR5cGVQYXl3YWxsO1xyXG5cdFxyXG5cdFx0aWYoIVBpYW5vLmFjdGl2ZVBheXdhbGwpIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKCdQYXl3YWxsIC0gSXMgbm90IGF2YWlhYmxlJylcclxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7IFxyXG5cdFx0fSBlbHNlIHsgXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bmV3IFBheXdhbGxDcHQoKTtcclxuXHRcdFx0XHR3aW5kb3cuaGFzUGF5d2FsbCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1BheXdhbGwgLSBFcnJvciBvbiBsb2FkJylcclxuXHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsZWFyRm9yQWRzJylcclxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxufTtcclxuXHJcblBpYW5vLmNoZWNrUGF5d2FsbCA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBjb3VudCA9IDA7XHJcblx0XHJcblx0Y29uc3QgY2hlY2tHYXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0bGV0IGhhc0dhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFycmVpcmEtcmVnaXN0ZXItcGF5d2FsbCwgLnBheXdhbGwtY3B0Jyk7XHJcblx0XHRsZXQgaGFzUHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B1Yi1yZXRhbmd1bG8tMSBpZnJhbWUsICNwdWItcmV0YW5ndWxvLTIgaWZyYW1lLCAjcHViLWZ1bGxiYW5uZXItMSBpZnJhbWUnKTtcclxuXHJcblx0XHRpZihjb3VudCA+IDIpIHtcclxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XHJcblx0XHRcdFBpYW5vLmFjdGl2ZVBheXdhbGwgPSBmYWxzZTtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChjaGVja0dhdGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCAoIChoYXNHYXRlICYmIFBpYW5vLmFjdGl2ZVBheXdhbGwpIHx8IGhhc1B1YikgfHwgY291bnQgPiA4KSBcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChjaGVja0dhdGUpO1xyXG5cclxuXHRcdGNvdW50Kys7XHJcblx0fSwgMTAwMCk7XHJcbn07XHJcblxyXG5QaWFuby5yZWdpc3RlclBheXdhbGwgPSB7IFxyXG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24odmVyc2FvID0gbnVsbCwgdGlwbyA9IG51bGwpIHtcclxuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdGlwbztcclxuXHJcblx0XHRpZighUGlhbm8uYWN0aXZlUGF5d2FsbCB8fCAoIXZlcnNhbyB8fCAhUGlhbm8udHlwZVBheXdhbGwpICkge1xyXG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXHJcblx0XHRcdFx0XCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vLmpzXCIsIFxyXG5cdFx0XHRcdGRhdGEgPT4geyBcclxuXHRcdFx0XHRcdGlmKGRhdGEuc3RhdHVzICE9PSAyMDApIHsgXHJcblx0XHRcdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcclxuXHRcdFx0XHRcdH0gXHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKFBpYW5vLnR5cGVQYXl3YWxsID09PSAncmVnaXN0ZXInIHx8IFBpYW5vLnR5cGVQYXl3YWxsID09PSAnZXhjbHVzaXZvJyApIHtcclxuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuXHRcdFx0fSBlbHNlIHtcdFx0XHRcclxuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5jb211bmljYWRvID0ge1xyXG5cdG1vc3RyYXJJbmZvcm1hY2FvOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2NvbXVuaWNhY2FvLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2NvbXVuaWNhY2FvLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2NvbXVuaWNhY2FvLXBpYW5vLmpzXCIpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmFkYmxvY2sgPSB7XHJcblx0bW9zdHJhckFkQmxvY2s6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XHJcblxyXG5cdFx0cGFyYW1zLmFzc2V0c1BhdGggPSBgaHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvYDtcclxuXHRcdFxyXG5cdFx0d2luZG93LmdsYkFkYmxvY2sgPSBwYXJhbXM7XHJcblxyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc2NyaXB0cy9hZGJsb2NrLXBpYW5vLmpzXCIpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmJsb3F1ZWlvcyA9IHtcclxuXHRsaWJlcmFyRXNjOiBmdW5jdGlvbigpIHtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9ibG9xdWVpby9saWJlcmFUZWNsYWRvLmpzXCIpO1xyXG5cdH0sXHJcblx0YmxvcXVlaWFWaWV3TW9kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgUGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jsb3F1ZWlvL2Jsb3F1ZWlhVmlld21vZGUuanNcIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5QaWFuby5wYXJjZWlybyA9IHtcclxuXHRtb3N0cmFGb290ZXJQYXJjZWlybzogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGFyY2Vpcm9zLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvZm9vdGVyLXBhcmNlaXJvcy1waWFuby5qc1wiKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5pbmFkaW1wbGVudGUgPSB7XHJcblx0Z2V0TGlua0Fzc2luYXR1cmE6IGZ1bmN0aW9uKGxpbmspIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluay5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAobGlua1tpXS5yZWwgPT0gJ2Fzc2luYXR1cmEnKSByZXR1cm4gbGlua1tpXS5ocmVmO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLnhtbEh0dHBSZXF1ZXN0ID0ge1xyXG5cdGdlcmFTY3JpcHROYVBhZ2luYTogZnVuY3Rpb24odXJsU2NyaXB0LCBjYWxsYmFjaykge1xyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsU2NyaXB0KTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCl7XHJcblx0XHRcdFx0aWYodGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdHZhciBhcHBlbmREZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdFx0XHRcdFx0YXBwZW5kRGVTY3JpcHQuaW5uZXJIVE1MID0gcmVzcG9zdGE7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcGVuZERlU2NyaXB0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ0Vycm8gbmEgZnVuw6fDo28gZ2VyYXIgc2NyaXB0IG5hIHDDoWdpbmEuJywgJ3VybDogJyArIHVybFNjcmlwdFxyXG5cdFx0XHRcdFx0XHQrICcgU3RhdHVzRXJybzogJyArIHRoaXMuc3RhdHVzXHJcblx0XHRcdFx0XHRcdCsgJyBTdGFjazogJyArIHRoaXMuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihjYWxsYmFjaylcclxuXHRcdFx0XHRjYWxsYmFjayh4aHIpOyBcclxuXHRcdH07XHRcclxuXHR9LFxyXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBmdW5jdGlvbihocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xyXG5cdFx0XHJcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSwgZmFsc2UpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0eGhyLnNlbmQoKTtcclxuXHRcclxuXHRcdGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xyXG5cdFx0XHRpZih4aHIuc3RhdHVzID09IDIwMCl7XHJcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHR2YXIgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3Bvc3RhKTtcclxuXHRcdFx0XHR2YXIgc2l0dWFjYW9QYWdhbWVudG8gPSByZXNwSnNvbi5zaXR1YWNhb1BhZ2FtZW50by50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJzaXR1YWNhb1BhZ2FtZW50b1wiLCBzaXR1YWNhb1BhZ2FtZW50b10pO1xyXG5cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgIT0gMCAmJiBQaWFuby52YXJpYXZlaXMuc3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZS5pbmRleE9mKHhoci5zdGF0dXMpID4gLTEpIHtcclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCB4aHIuc3RhdHVzICsgXCIgLSBcIiArIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIFwiU3RhdHVzIERlc2NvbmhlY2lkb1wiICsgXCIgLSBcIiArIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc286IGZ1bmN0aW9uKGdsYmlkKSB7XHJcblx0XHRcclxuXHRcdHZhciBjb2RpZ29Qcm9kdXRvID0gUGlhbm8udmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKTtcclxuXHRcdGlmKGNvZGlnb1Byb2R1dG8gPT0gJ2Vycm9yJykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ0b2tlbi1hdXRlbnRpY2FjYW9cIjogZ2xiaWQsIFwiaXBVc3VhcmlvXCI6IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5JUCwgXCJjb2RpZ29Qcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG99KTtcclxuXHJcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxWZXJpZmljYUxlaXRvciwgZmFsc2UpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHR4aHIuc2VuZChkYXRhKTtcclxuXHRcdFxyXG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xyXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKXtcclxuXHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xyXG5cdFx0XHRcdHZhciByZXNwb3N0YURlVGVybW9EZVVzbyA9IGZhbHNlLCByZXNwb3N0YURlTW90aXZvID0gJycsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gJyc7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5tb3Rpdm8gIT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdFx0cmVzcG9zdGFEZU1vdGl2byA9IHJlc3BKc29uLm1vdGl2by50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLnRlbVRlcm1vRGVVc28gIT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdFx0cmVzcG9zdGFEZVRlcm1vRGVVc28gPSByZXNwSnNvbi50ZW1UZXJtb0RlVXNvO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLmxpbmsgIT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdFx0aHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSBQaWFuby5pbmFkaW1wbGVudGUuZ2V0TGlua0Fzc2luYXR1cmEocmVzcEpzb24ubGluayk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBpc0F1dG9yaXphZG8gPSBQaWFuby5hdXRlbnRpY2FjYW8uaXNBdXRvcml6YWRvKHJlc3Bvc3RhRGVUZXJtb0RlVXNvLCByZXNwb3N0YURlTW90aXZvLCByZXNwSnNvbi5hdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhyZXNwSnNvbi5hdXRvcml6YWRvLCByZXNwb3N0YURlTW90aXZvLCBpc0F1dG9yaXphZG8sIHJlc3Bvc3RhRGVUZXJtb0RlVXNvKTtcclxuXHRcdFx0XHR2YXIgX2pzb25MZWl0b3IgPSB7XHJcblx0XHRcdFx0XHRcdFwiYXV0b3JpemFkb1wiIDogcmVzcEpzb24uYXV0b3JpemFkbyxcclxuXHRcdFx0XHRcdFx0XCJtb3Rpdm9cIjogcmVzcG9zdGFEZU1vdGl2byxcclxuXHRcdFx0XHRcdFx0XCJsb2dhZG9cIjogaXNBdXRvcml6YWRvLFxyXG5cdFx0XHRcdFx0XHRcInRlbVRlcm1vRGVVc29cIjogcmVzcG9zdGFEZVRlcm1vRGVVc28sXHJcblx0XHRcdFx0XHRcdFwiZ2xiaWRcIjogZ2xiaWQsXHJcblx0XHRcdFx0XHRcdFwicHJvZHV0b1wiOiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSxcclxuXHRcdFx0XHRcdFx0XCJjb2RQcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG8sXHJcblx0XHRcdFx0XHRcdFwidXVpZFwiOiByZXNwSnNvbi51c3VhcmlvSWRcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0X2pzb25MZWl0b3IgPSBidG9hKGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShfanNvbkxlaXRvcikpKTtcclxuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIF9qc29uTGVpdG9yLCAxKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodHlwZW9mIHN3ZyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdGlmKFBpYW5vLmdvb2dsZS5zaG93U2F2ZVN1YnNjcmlwdGlvbihyZXNwSnNvbikpe1xyXG5cdFx0XHRcdFx0XHR0cnl7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHN3Z1NlcnZpY2UgPSBuZXcgU3dnU2VydmljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHN3Z1NlcnZpY2Uuc2F2ZUdsb2JvU3Vic2NyaXB0aW9uKGdsYmlkKTtcclxuXHRcdFx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIGFvIGNoYW1hciBhIGZ1bsOnw6NvIHNob3dTYXZlU3Vic2NyaXB0aW9uIGRvIEFsZGViYXJhbi4nLCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnVVJMOiAnICsgZG9jdW1lbnQubG9jYXRpb24uaHJlZiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgR0xCSUQ6ICcgKyBnbGJpZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCsgJyBFcnJvOiAnICsgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHJlc3BKc29uLmF1dG9yaXphZG8gPT0gdHJ1ZSl7XHJcblx0XHRcdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKHJlc3BKc29uLnVzdWFyaW9JZCwgXCJHbG9ibyBJRFwiLCBcIk8gR2xvYm9cIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBUEkgZGUgYXV0b3JpemFjYW8gZGUgYWNlc3NvXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgZ2xiaWQpO1xyXG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSwgJ2Vycm8nLCB0cnVlLCBcIiBcIik7XHJcblx0XHRcdH1cdFxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmdvb2dsZSA9IHtcclxuICBpc0F1dGhvcml6ZWQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmKHN3Z0VudGl0bGVtZW50cy5nZXRFbnRpdGxlbWVudEZvclNvdXJjZShcIm9nbG9iby5nbG9iby5jb21cIikpe1xyXG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKHN3Z0VudGl0bGVtZW50cy5nZXRFbnRpdGxlbWVudEZvclNvdXJjZShcIm9nbG9iby5nbG9iby5jb21cIikuc3Vic2NyaXB0aW9uVG9rZW4sIFwiQ29udGEgR29vZ2xlXCIsIFwiTyBHbG9ib1wiKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCkpe1xyXG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCksIFwiQ29udGEgR29vZ2xlXCIsIFwiR29vZ2xlXCIpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgaXNTcGVjaWZpY0dvb2dsZVVzZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKFBpYW5vLmdvb2dsZS5pc0F1dGhvcml6ZWQoKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRyeXtcclxuXHRcdFx0dmFyIG9HbG9ib0J1c2luZXNzID0gbmV3IE9HbG9ib0J1c2luZXNzKCk7XHJcblx0XHRcdG9HbG9ib0J1c2luZXNzLnZlcmlmeUlmVXNlckhhc0FjY2Vzc09yRGVmZXJyZWQoc3dnRW50aXRsZW1lbnRzKTtcclxuXHRcdH0gY2F0Y2goZXJyb3IpIHtcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJFcnJvIGFvIGV4ZWN1dGFyIG8gQWxkZWJhcmFuXCIsIFwiRXJyb3I6IFwiICsgZXJyb3IgKyBcIiAtIEVudGl0bGVtZW50czogXCIgKyBzd2dFbnRpdGxlbWVudHMuZW50aXRsZW1lbnRzWzBdLnN1YnNjcmlwdGlvblRva2VuKTtcclxuXHRcdH1cdFx0XHRcclxuXHR9LFxyXG5cclxuXHRzaG93U2F2ZVN1YnNjcmlwdGlvbjogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0aWYoIXN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpICYmIHJlc3BvbnNlLm1vdGl2byA9PT1cIkFVVE9SSVpBRE9cIiAmJiAhSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5TQVZFX1NVQlNDUklQVElPTikpe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuUGlhbm8uYXV0ZW50aWNhY2FvID0ge1xyXG5cdGlzTG9nYWRvQ2FkdW46IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcclxuXHRcdGlmICghZ2xiaWQpIHtcclxuXHRcdFx0aWYgKHV0cCkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XHJcblx0XHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZ2xiaWQgIT0gJyc7XHJcblx0fSxcclxuXHR2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG86IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcclxuXHRcdGlmIChQaWFuby5hdXRlbnRpY2FjYW8uaXNMb2dhZG9DYWR1bihnbGJpZCwgdXRwKSkge1xyXG5cdFx0XHRpZiAodXRwKSB7XHJcblx0XHRcdFx0dmFyIF9sZWl0b3IgPSBKU09OLnBhcnNlKGRlY29kZVVSSShhdG9iKHV0cCkpKTtcclxuXHRcdFx0XHRpZiAoZ2xiaWQgPT0gX2xlaXRvci5nbGJpZCAmJiAodHlwZW9mIF9sZWl0b3IucHJvZHV0byA9PSBcInVuZGVmaW5lZFwiIHx8IF9sZWl0b3IucHJvZHV0byA9PSBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSkpIHtcclxuXHRcdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8oX2xlaXRvci5hdXRvcml6YWRvLCBfbGVpdG9yLm1vdGl2bywgX2xlaXRvci5sb2dhZG8sIF9sZWl0b3IudGVtVGVybW9EZVVzbyk7XHJcblx0XHRcdFx0XHRpZihfbGVpdG9yLmF1dG9yaXphZG8pe1xyXG5cdFx0XHRcdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKF9sZWl0b3IudXVpZCwgXCJHbG9ibyBJRFwiLCBcIk8gR2xvYm9cIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc28oZ2xiaWQpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aXNBdXRvcml6YWRvOiBmdW5jdGlvbih0ZXJtb0RlVXNvLCBtb3Rpdm8sIGF1dG9yaXphZG8sIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSB7XHJcblx0XHRpZiAoYXV0b3JpemFkbyB8fCBtb3Rpdm8gPT0gXCJpbmRpc3Bvbml2ZWxcIiB8fCB0ZXJtb0RlVXNvICE9IGZhbHNlKSB7XHJcblx0XHRcdGlmIChhdXRvcml6YWRvICYmIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSBQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZShocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRkZWZpbmVVc3VhcmlvUGlhbm86ZnVuY3Rpb24oYXV0b3JpemFkbywgbW90aXZvLCBsb2dhZG8sIHRlbVRlcm1vRGVVc28pe1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImF1dG9yaXphZG9cIiwgYXV0b3JpemFkb10pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm1vdGl2b1wiLCBtb3Rpdm9dKTtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJsb2dhZG9cIiwgbG9nYWRvXSk7XHJcblx0XHRpZih0ZW1UZXJtb0RlVXNvICE9IFwiIFwiKVxyXG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidGVtVGVybW9cIiwgdGVtVGVybW9EZVVzb10pO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLnV0aWwgPSB7XHJcblx0aXNTZWN0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PSBcInNlY3Rpb25cIiA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdHRlbVZhcmlhdmVpc09icmlnYXRvcmlhczogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiVmFyaWF2ZWwgdGlwb0NvbnRldWRvUGlhbm8gbmFvIGVzdGEgZGVmaW5pZGFcIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpZiAodHlwZW9mIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiVmFyaWF2ZWwgbm9tZVByb2R1dG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblx0ZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHVybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcclxuXHRcdHZhciBjaGF2ZXNDYW1wYW5oYSA9IFsndXRtX21lZGl1bScsJ3V0bV9zb3VyY2UnXTtcclxuXHRcdHZhciB2YWxvcmVzQ2FtcGFuaGEgPSBbXTtcclxuXHJcblx0XHRmb3IgKHZhciBpZHhQYXJhbUNhbXBhbmhhID0gMDsgaWR4UGFyYW1DYW1wYW5oYSA8IGNoYXZlc0NhbXBhbmhhLmxlbmd0aDsgaWR4UGFyYW1DYW1wYW5oYSsrKSB7XHJcblx0XHRcdHZhciBjaGF2ZUNhbXBhbmhhID0gY2hhdmVzQ2FtcGFuaGFbaWR4UGFyYW1DYW1wYW5oYV07XHJcblx0XHRcdGlmICh1cmwuaW5kZXhPZihjaGF2ZUNhbXBhbmhhICsgJz0nKSAhPSAtMSkge1xyXG5cdFx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFw/KCYpXVwiICsgY2hhdmVDYW1wYW5oYSArIFwiPShbXiYjXSopXCIpO1xyXG5cdFx0XHRcdHZhciB2YWxvckNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcclxuXHRcdFx0XHRpZih2YWxvckNhbXBhbmhhKXtcclxuXHRcdFx0XHRcdHZhbG9yZXNDYW1wYW5oYS5wdXNoKHZhbG9yQ2FtcGFuaGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbG9yZXNDYW1wYW5oYS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ1dG1cIiwgdmFsb3Jlc0NhbXBhbmhhLmpvaW4oXCI7XCIpXSk7XHJcblx0XHR9XHJcblx0XHRpZiAodXJsLmluZGV4T2YoJ3V0bV9jYW1wYWlnbj0nKSAhPSAtMSkge1xyXG5cdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwidXRtX2NhbXBhaWduPShcXFxcdyspXCIpO1xyXG5cdFx0XHR2YXIgY2FtcGFuaGEgPSB1cmwubWF0Y2gocmVnZXgpWzFdO1xyXG5cdFx0XHRpZihjYW1wYW5oYSl7XHJcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNhbXBhbmhhXCIsIGNhbXBhbmhhXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGlzT3JpZ2VtQnVzY2Fkb3I6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0XHR2YXIgcmVnZXhSb2JvcyA9IG5ldyBSZWdFeHAoXCIoaWFfYXJjaGl2ZXIpfChHb29nbGVib3QpfChNZWRpYXBhcnRuZXJzLUdvb2dsZSl8KEFkc0JvdC1Hb29nbGUpfChtc25ib3QpfChZYWhvbyEgU2x1cnApfChaeUJvcmcpfChBc2sgSmVldmVzL1Rlb21hKXwoYmluZ2JvdCl8KGNYZW5zZWJvdClcIik7XHJcblx0XHR2YXIgZWhSb2JvID0gcmVnZXhSb2Jvcy50ZXN0KHVzZXJBZ2VudCk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYnVzY2Fkb3JcIiwgZWhSb2JvXSk7XHJcblx0XHRyZXR1cm4gZWhSb2JvO1xyXG5cdH0sXHJcblx0bW9udGFVcmxTdGc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCkgIT0gJ3ByZCcgPyAnLXN0ZycgOiAnJztcclxuXHR9LFxyXG5cdHRlbVBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbU5hbWUpIHtcclxuXHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xyXG5cdFx0cmV0dXJuIHBhcmFtZXRyb3MuaW5kZXhPZihwYXJhbU5hbWUpICE9IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0Z2V0VmFsb3JQYXJhbWV0cm9OYVVybDogZnVuY3Rpb24ocGFyYW1ldHJvKSB7XHJcblx0XHRpZiAoUGlhbm8udXRpbC50ZW1QYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pKSB7XHJcblx0XHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xyXG5cdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiW1xcPygmKV1cIiArIHBhcmFtZXRybyArIFwiPShbXiYjXSopXCIpO1xyXG5cdFx0XHRyZXR1cm4gcGFyYW1ldHJvcy5tYXRjaChyZWdleClbMV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gXCJzZW0gcGFyYW1ldHJvXCI7XHJcblx0fSxcclxuXHRpc0RlYnVnOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuREVCVUc7XHJcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcclxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCB2YWxvclBhcmFtZXRybywgMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICdmYWxzZScpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCBcIlwiLCAtMSk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuREVCVUcpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0aXNEb21pbmlvT0dsb2JvOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCI6Ly8oLio/KS9cIiksIHVybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25IcmVmKCk7XHJcblx0XHRpZiAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwib2dsb2JvXCIpID4gLTEgfHwgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImdsb2JvaVwiKSA+IC0xICYmIHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImVkZ1wiKSA9PSAtMSkpIHtcclxuXHRcdFx0cmV0dXJuIHVybC5tYXRjaChyZWdleClbMV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fSxcclxuXHRjYWxsYmFja01ldGVyOiBmdW5jdGlvbihtZXRlckRhdGEpIHtcclxuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xyXG5cdFx0UGlhbm8ubWV0cmljYXMuZXhlY3V0YUFwb3NQYWdldmlldyhmYWxzZSk7XHJcblx0fSxcclxuXHRjYWxsYmFja01ldGVyRXhwaXJlZDogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XHJcblx0XHR3aW5kb3cucmVncmFzVGlueSA9IG1ldGVyRGF0YTtcclxuXHRcdFBpYW5vLnZhcmlhdmVpcy5pc0NhbGxiYWNrTWV0dGVyRXhwaXJlZCA9IHRydWU7XHJcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KHRydWUpO1xyXG5cdH0sXHJcblx0Z2V0V2luZG93TG9jYXRpb25TZWFyY2g6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHR9LFxyXG5cdGdldFdpbmRvd0xvY2F0aW9uSHJlZjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9LFxyXG5cdGFkaWNpb25hckNzczogZnVuY3Rpb24oY3NzUGF0aCl7XHJcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZS5pbm5lckhUTUwgPSBjc3NQYXRoO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZSwgZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xyXG5cdH0sXHJcblx0aXNSZXZpc3RhOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHJldmlzdGFzID0gW1wiZXBvY2FcIiwgXCJhdXRvLWVzcG9ydGVcIiwgXCJ2b2d1ZVwiLCBcImdsYW1vdXJcIiwgXCJjYXNhLXZvZ3VlXCIsIFwibWFyaWUtY2xhaXJlXCIsIFwiY2FzYS1lLWphcmRpbVwiLCBcInF1ZW0tYWNvbnRlY2VcIiwgXCJnbG9iby1ydXJhbFwiLCBcImdxXCIsIFwibW9uZXRcIiwgJ2NyZXNjZXInLCdnYWxpbGV1J107XHJcblx0XHRpZihyZXZpc3Rhcy5pbmRleE9mKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSA+IC0xKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0cmVjYXJyZWdhUGlhbm86IGZ1bmN0aW9uICh0aXBvQ29udGV1ZG8sIGlzRXhjbHVzaXZvLCBub21lUHJvZHV0bykge1xyXG5cdFx0d2luZG93LnRpcG9Db250ZXVkb1BpYW5vID0gdGlwb0NvbnRldWRvO1xyXG5cdFx0d2luZG93LmNvbnRldWRvRXhjbHVzaXZvID0gaXNFeGNsdXNpdm87XHJcblx0XHR3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9IG5vbWVQcm9kdXRvO1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cucmVncmFzVGlueSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gXCJcIjtcclxuXHRcdH1cclxuXHRcdFBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XHJcblx0XHR0cC5leHBlcmllbmNlLmV4ZWN1dGUoKTtcclxuXHR9LFxyXG5cdGlzVmFsb3I6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSBcInZhbG9yXCIpXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uY29uZmlndXJhY2FvID0ge1xyXG5cdGpzb25Db25maWd1cmFjYW9UaW55UGFzczoge1xyXG5cdFx0J2ludCc6IHtcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonZFh1N2R2RktSaScsXHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXHJcblx0XHRcdCdzZXRTYW5kQm94JzondHJ1ZScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL3NhbmRib3gudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9ZFh1N2R2RktSaScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcclxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGlxbHQtaWcuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nK1BpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSsnL2F1dG9yaXphY2FvLWFjZXNzbycsXHJcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXHJcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcclxuXHRcdH0sXHJcblx0XHQncWx0Jzp7XHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J0dUQ29wSURjNXonLFxyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxyXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1HVENvcElEYzV6JyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxyXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcclxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vJyxcclxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xyXG5cdFx0fSxcclxuXHRcdCdwcmQnOntcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXHJcblx0XHRcdCdzZXRTYW5kQm94JzonZmFsc2UnLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXHJcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJytQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkrJy9hdXRvcml6YWNhby1hY2Vzc28nLFxyXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS8nLFxyXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblBpYW5vLmNvbnN0cnV0b3IgPSB7XHJcblx0aW5pdFRwOiBmdW5jdGlvbigpIHtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBQaWFub1wiLCBcIkluaWNpbyBJbml0VHBcIik7XHJcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xyXG5cdFx0dHAucHVzaChbXCJzZXRUYWdzXCIsIFtQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKV1dKTtcclxuXHRcdGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpIHx8IFBpYW5vLnV0aWwuaXNWYWxvcigpKSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcclxuXHRcdH1cclxuXHRcdHRwLnB1c2goW1wic2V0U2FuZGJveFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnNldFNhbmRCb3hdKTtcclxuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcclxuXHRcdHZhciBjbGVhbl91cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpLnNwbGl0KFwiP1wiKVswXTtcclxuXHRcdHRwLnB1c2goW1wic2V0UGFnZVVSTFwiLGNsZWFuX3VybF0pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibm9tZVByb2R1dG9cIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcclxuXHRcdFBpYW5vLmphbmVsYUFub25pbWEuZGV0ZWN0UHJpdmF0ZU1vZGUoZnVuY3Rpb24gKGlzX3ByaXZhdGUpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNvbnRldWRvRXhjbHVzaXZvXCIsIHRydWVdKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnICYmIHN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpKSB7XHJcblx0XHRcdFBpYW5vLmdvb2dsZS5pc1NwZWNpZmljR29vZ2xlVXNlcihzd2dFbnRpdGxlbWVudHMpO1xyXG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsXCJBVVRPUklaQURPXCIsIHRydWUsIFwiXCIpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby52ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8oSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuR0NPTSksIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcclxuXHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYmFubmVyQ29udGFkb3JMaWdhZG9cIiwgdHJ1ZV0pO1xyXG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xyXG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJBY3RpdmVcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyXSk7XHJcblx0XHR0cC5wdXNoKFtcImFkZEhhbmRsZXJcIiwgXCJtZXRlckV4cGlyZWRcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyRXhwaXJlZF0pO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiRmltIEluaXRUcFwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkUGlhbm9FeHBlcmllbmNlcygpe1xyXG5cdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnRpbnkpXHJcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdsb2FkUGlhbm9FeHBlcmllbmNlcycpXHJcblxyXG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRhLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG5cdGEuYXN5bmMgPSB0cnVlO1xyXG5cdGlmKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcclxuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm9SZXZpc3RhcztcdFxyXG5cdH0gZWxzZSB7XHJcblx0XHRhLnNyYyA9IFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsU2FuZGJveFBpYW5vO1xyXG5cdH1cclxuXHR2YXIgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xyXG5cdGIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgYik7XHJcblx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiU2NyaXB0IGFkaWNpb25hZG9cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBpYW5vSW5pdCgpIHsgXHJcblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcclxuXHRcdGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kJywgJ3BpYW5vSW5pdCcpXHJcblxyXG4gICAgaWYgKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpIHsgXHJcblx0XHR3aW5kb3cuU1dHLnB1c2goKHN1YnNjcmlwdGlvbnMpID0+IHtcclxuXHRcdFx0aWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2ctc3Vic2NyaXB0aW9ucycsIHN1YnNjcmlwdGlvbnMpXHJcblxyXG5cdFx0XHRzd2cgPSBzdWJzY3JpcHRpb25zO1xyXG5cclxuXHRcdFx0c3Vic2NyaXB0aW9ucy5zZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlKGVudGl0bGVtZW50c1Byb21pc2UgPT4ge1xyXG5cdFx0XHRcdGVudGl0bGVtZW50c1Byb21pc2UudGhlbihlbnRpdGxlbWVudHMgPT4geyBcclxuXHRcdFx0XHRcdHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSBlbnRpdGxlbWVudHM7XHJcblxyXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFNXR1wiLCBcIkVudGl0bGVtZW50cyByZWNlYmlkb3NcIik7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHdpbmRvdy50aW55Q3B0LlBpYW5vLnV0aWwudGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzKCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKFBpYW5vICE9PSAndW5kZWZpbmVkJyl7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnRpbnlDcHQuUGlhbm8uY29uc3RydXRvci5pbml0VHAoKTtcclxuXHRcdFx0XHRcdFx0XHRsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIlBpYW5vIG5hbyBmb2kgY2FycmVnYWRhIGNvcnJldGFtZW50ZSFcIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgR0Euc2V0RXZlbnRzRXJyb3IoXCJFbnRpdGxlbWVudHMgbsOjbyBjYXJyZWdhZG9cIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xyXG4gICAgICAgICAgICBsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNoZWNrUGF5d2FsbCgpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB0aW55SW5pdCgpIHtcclxuXHRUaW55LnNldFBpYW5vKFBpYW5vKTsgXHJcbiAgICBjb25zdCBTd2cgPSBuZXcgU3dnTW9kdWxlKCk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBTd2cuaW5pdCgpO1xyXG5cdH1cclxuXHRjYXRjaChlKSB7IGNvbnNvbGUuZXJyb3IoZSkgfVxyXG5cclxuXHRwaWFub0luaXQoKTsgXHJcbn07XHJcblxyXG50aW55SW5pdCgpOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==