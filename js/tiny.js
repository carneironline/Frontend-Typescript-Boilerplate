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
          var elToRemove = document.querySelectorAll('.protected-content');
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
    var Nothing = null;
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
          return window.subsegmentacaoPiano ? regrasTiny.nomeExperiencia + " - " + subsegmentacaoPiano : regrasTiny.nomeExperiencia;
        } else if (window.nomeExperiencia) {
          return window.subsegmentacaoPiano ? window.nomeExperiencia + " - " + subsegmentacaoPiano : window.nomeExperiencia;
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
          regrasTiny.fluxo = window.tpContext ? tpContext.toLowerCase() : '-';
          regrasTiny.nomeExperiencia = window.nomeExperiencia ? window.nomeExperiencia : '';
          Piano.metricas.setLimiteContagem(regrasTiny);
          if (expirou == false) GA.setEvents(Piano.metricas.identificarPassagemRegister(regrasTiny), Piano.metricas.montaRotuloGA());
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
        regrasTiny = meterData;
        Piano.metricas.executaAposPageview(false);
      },
      callbackMeterExpired: function callbackMeterExpired(meterData) {
        regrasTiny = meterData;
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
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvRkIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvR0EuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9QaWFuby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9Td2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvVGlueS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jcG50LXBheXdhbGwvUGF5d2FsbC1nYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jcG50LXBheXdhbGwvUGF5d2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkZiIiwiZGF0YSIsImRlYnVnIiwid2luZG93IiwidGlueUNwdCIsImRpc2FibGVkIiwiZmIiLCJoYXNQaXhlbCIsInBpeGVsIiwibmFtZSIsImlzRGVmaW5lZCIsImZicSIsIkdBIiwiZ2EiLCJQcm9kdWN0cyIsIlByb2R1Y3RzTW9kdWxlIiwiZGF0YUxheWVyIiwiaXNQcm9kdWN0VmFsb3IiLCJfZ2FxIiwiYWN0aW9uIiwibGFiZWwiLCJjYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiSGVscGVycyIsInByb3AiLCJjX25hbWUiLCJ2YWx1ZSIsImV4cGlyZWRheXMiLCJleGRhdGUiLCJEYXRlIiwiaG9zdG5hbWUiLCJsb2NhdGlvbiIsInNldERhdGUiLCJnZXREYXRlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJlc2NhcGUiLCJ0b1VUQ1N0cmluZyIsInNwbGl0IiwicmV2ZXJzZSIsIm1hdGNoIiwiUmVnRXhwIiwiY29va2llVGlueSIsInVuZXNjYXBlIiwidG9TdHJpbmciLCJQaWFubyIsImNvbnRlbnQiLCJzZXRFeHBlcmllbmNlIiwiZXhwZXJpZW5jZU5hbWUiLCJleHBlcmllbmNlIiwicmVncmFzVGlueSIsIm5vbWVFeHBlcmllbmNpYSIsInN1YnNlZ21lbnRhY2FvUGlhbm8iLCJzZXRDb29raWUiLCJ2YXJpYXZlaXMiLCJjb25zdGFudGUiLCJVVFAiLCJwcm9kdWN0TmFtZSIsIm5vbWVQcm9kdXRvUGlhbm8iLCJwcm9kdWN0c1NldHRpbmdzIiwiUHJvZHVjdCIsIk9iamVjdCIsImFzc2lnbiIsIlN3ZyIsIlNXRyIsInN3Z0VudGl0bGVtZW50cyIsInN3ZyIsImxvY2FsUHJvZHVjdFBpYW5vIiwiaGFzUHJvZHVjdEpTT04iLCJwcm9kdWN0SlNPTiIsImVsSGVhZCIsImhlYWQiLCJzZXRHbG9iYWxTV0ciLCJnbG9iYWwiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHJpbmciLCJ1dG1zUHJvcHMiLCJnbGJQYXl3YWxsIiwidXRtcyIsImZvckVhY2giLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJzZXQiLCJzdWJzY3JpYmUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0UHJvZHVjdHMiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJmaWx0ZXIiLCJwaWFub1Byb2R1Y3ROYW1lIiwib2JqIiwicHJvcHNUb1JlbW92ZSIsIm5ld09iaiIsImVsZW1lbnQiLCJnZXRQcm9kdWN0IiwicmVtb3ZlUHJvcGVydGllcyIsImtleXMiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwibWFya3VwVGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50RWxlbWVudCIsInNyYyIsInVybFByb2QiLCJ1cmxTdGciLCJpc1Byb2R1Y3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRNYXJrdXAiLCJzZXRTd2dTY3JpcHQiLCJzZXRBbGRlYmFyYW5TY3JpcHQiLCJ0ZXN0U1dHIiwiVGlueSIsImhhc1BheXdhbGwiLCJ0cCIsIlBheXdhbGxBbmFseXRpY3MiLCJzZXRHbG9iYWxUaW55Iiwic2V0R2xvYmFsIiwiaW5pdCIsImRlZmF1bHRTZXR0aW5ncyIsInRpbnkiLCJwYXl3YWxsIiwiYW1iaWVudGVVdGlsaXphZG9QaWFubyIsIlBheXdhbGxHQU1vZHVsZSIsIlBpYW5vTW9kdWxlIiwiR0FNb2R1bGUiLCJtZXRyaWNzIiwicGF5d2FsbFR5cGUiLCJfUGlhbm8iLCJzZXRFdmVudHMiLCJSVElFWCIsInJlc2V0VXRwIiwiZGF0YXNldCIsImdhUmVzZXR1dHAiLCJpbWFnZVRvcCIsImdhSW1hZ2VQb3NpdGlvbiIsImdhTGFiZWwiLCJldmVudCIsImV2ZW50b0dBQ2F0ZWdvcmlhIiwiZXZlbnRvR0FBY2FvIiwiZ2FBY3Rpb24iLCJldmVudG9HQVJvdHVsbyIsImV2ZW50b0dBVmFsb3IiLCJldmVudG9HQUludGVyYWNhbyIsInNldERhdGFsYXllciIsInR5cGVQYXl3YWxsIiwiUGF5d2FsbENwdCIsIlN3Z01vZHVsZSIsIkZCIiwiRmJNb2R1bGUiLCJkb21haW4iLCJzZXRUZW1wbGF0ZVNldHRpbmdzIiwiUGF5d2FsbCIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRlbXBsYXRlIiwiYXNzZXRzUGF0aCIsImRpc3BsYXkiLCJwcm9kdWN0Q2xhc3MiLCJ0aXRsZSIsInRhcmdldEJsYW5rIiwidG9wTW9iaSIsInRvcERlc2siLCJ0b3BMaW5rIiwibGVmdE1vYmkiLCJsZWZ0RGVzayIsImxlZnRMaW5rIiwicmlnaHRNb2JpIiwicmlnaHREZXNrIiwicmlnaHRMaW5rIiwiaGlkZUxvZ2luQXJlYSIsImxvZ2luVGV4dCIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGFnIiwiZ2V0VXJsTG9naW5SZWdpc3RlciIsImNsZWFyTG9naW5BcmVhIiwic2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzIiwiZWxCb2R5Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImVsQ3B0IiwicXVlcnlTZWxlY3RvciIsInNldEVsV3JhcHBlciIsInJlbW92ZSIsImVsVG9SZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsImJvZHlBZGp1c3QiLCJyZW1vdmVFbGVtZW50cyIsImluc2VydEFkamFjZW50SFRNTCIsImNzc01pbmlmaWVkIiwiYWN0aXZlVGVtcGxhdGVTZXR0aW5ncyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBheXdhbGxMb2FkIiwiZWxDcHRXcmFwIiwic2V0VGltZW91dCIsImVsQm9keUhlaWdodCIsImlubmVySGVpZ2h0IiwiZWxDcHRXcmFwSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3VycmVudFRvcCIsIk1hdGgiLCJhYnMiLCJ0b3BXaXRoRnVsbEVsZW1lbnQiLCJ0b3AiLCJvcGFjaXR5IiwiekluZGV4IiwiZXZ0V2hlZWwiLCJldnRUb3VjaCIsImFjdGl2ZUV2ZW50cyIsInNldFBpeGVsVHlwZSIsImNsaWNrVGFyZ2V0cyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiaXNMb2dpbiIsIkJvb2xlYW4iLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJpc1VybFN3ZyIsImluY2x1ZGVzIiwibm90QmxhbmsiLCJocmVmVGFyZ2V0IiwidHJpZ2dlciIsInNldFV0bXMiLCJocmVmIiwib3BlbiIsImJpbmQiLCJuZXd0b3AiLCJzdGVwIiwibXVsdGlwbGllciIsImRlbHRhWSIsImVsVG9wIiwidG91Y2hzdGFydFkiLCJ0b3VjaGVuZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblkiLCJkaWZmIiwidXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8iLCJ1cmkiLCJzdHIiLCJ1cmxSZXR1cm4iLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRDb2RpZ29Qcm9kdXRvIiwiZ2V0U2Vydmljb0lkIiwiZ2V0Tm9tZVByb2R1dG8iLCJkZWxheVRpbWVyIiwiY3JlYXRlVGVtcGxhdGUiLCJ0ZW1wbGF0ZVZhcnMiLCJUaW55TW9kdWxlIiwiTm90aGluZyIsInNldEdsb2JhbFZhcnMiLCJhY3RpdmVQYXl3YWxsIiwiYW1iaWVudGVzQWNlaXRvcyIsInN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvIiwic3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkIiwiR0NPTSIsIkFNQklFTlRFIiwiU0FWRV9TVUJTQ1JJUFRJT04iLCJDUkVBVEVEX0dMT0JPSUQiLCJHTE9CT0lEX01FU1NBR0UiLCJtZXRyaWNhcyIsIkVWRU5UT19TRU1fQUNBTyIsIkVSUk8iLCJrcnV4IiwiU0VHTUVOVEFDT0VTIiwiS1JVWExJR0FETyIsInV0aWwiLCJJUCIsIkRFQlVHIiwiaXNDb250ZXVkb0V4Y2x1c2l2byIsImNvbnRldWRvRXhjbHVzaXZvIiwiZ2V0QW1iaWVudGVQaWFubyIsImluZGV4T2YiLCJnZXRWYWxvclBhcmFtZXRyb05hVXJsIiwiZ2V0Q29va2llIiwiZ2V0VGlwb0NvbnRldWRvUGlhbm8iLCJ0aXBvQ29udGV1ZG9QaWFubyIsImV4ZWN1dG91UGFnZXZpZXciLCJzZXRFdmVudHNFcnJvciIsImlkIiwiaXNSZXZpc3RhIiwibm9tZVByb2R1dG8iLCJhdXRlbnRpY2FjYW8iLCJkZWZpbmVVc3VhcmlvUGlhbm8iLCJqYW5lbGFBbm9uaW1hIiwicmV0cnkiLCJpc0RvbmUiLCJuZXh0IiwiY3VycmVudF90cmlhbCIsIm1heF9yZXRyeSIsImlzX3RpbWVvdXQiLCJpc0lFMTBPckxhdGVyIiwidXNlcl9hZ2VudCIsInVhIiwiZXhlYyIsInBhcnNlSW50IiwiZGV0ZWN0UHJpdmF0ZU1vZGUiLCJpc19wcml2YXRlIiwid2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0iLCJURU1QT1JBUlkiLCJlIiwiaW5kZXhlZERCIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRiIiwicmVhZHlTdGF0ZSIsInJlc3VsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwidGVtIiwiZ2V0SXRlbSIsImxpZ2FkbyIsInBhcmFtZXRybyIsInZhbG9yUGFyYW1ldHJvIiwib2J0ZW1TZWdtZW50YWNhbyIsInNlZ21lbnRhY29lcyIsImkiLCJlbnZpYUV2ZW50b3NHQSIsIl9HQUFjYW8iLCJfR0FSb3R1bG8iLCJtb250YVJvdHVsb0dBIiwic2V0TGltaXRlQ29udGFnZW0iLCJfR0FMaW1pdGUiLCJfR0FDb250YWdlbSIsInZpZXdzIiwibWF4Vmlld3MiLCJpZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXIiLCJyZWdyYXMiLCJwYXNzYWdlbSIsImZsdXhvIiwiZXhlY3V0YUFwb3NQYWdldmlldyIsImV4cGlyb3UiLCJ0cENvbnRleHQiLCJzZXRhVmFyaWF2ZWlzIiwiaWRMb2dpbiIsInRpcG9Mb2dpbiIsImFzc2luYXR1cmFMb2dhZGEiLCJpZExvZ2luQXNzaW5hbnRlIiwidGlwb0xvZ2luQXNzaW5hbnRlIiwiYmFubmVyIiwibW9zdHJhckZvb3RlciIsInZlcnNhbyIsImFkaWNpb25hckNzcyIsIm1vbnRhVXJsU3RnIiwieG1sSHR0cFJlcXVlc3QiLCJnZXJhU2NyaXB0TmFQYWdpbmEiLCJtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyIiwibW9zdHJhckF2YXRhckhlYWRlciIsImJvdHRvbUZpeGVkIiwicGFyYW1zIiwiZ2xiQmFubmVyQm90dG9tIiwibW9zdHJhclNXRyIsImNzcyIsInNjcmlwdEpzIiwibW9zdHJhckhpZ2hsaWdodFNhbGUiLCJtb3N0cmFyU3Vic2NyaWJlQnV0dG9uVmFsb3IiLCJyZWdpc3RlciIsIm1vc3RyYXJCYXJyZWlyYSIsImhlbHBlciIsInJlZGlyZWNpb25hckJhcnJlaXJhIiwic2hvdyIsIndhcm4iLCJ0cmlnZ2VyQWR2ZXJ0aXNpbmciLCJlcnJvciIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNoZWNrUGF5d2FsbCIsImNoZWNrR2F0ZSIsImhhc0dhdGUiLCJoYXNQdWIiLCJyZWdpc3RlclBheXdhbGwiLCJ0aXBvIiwic3RhdHVzIiwiY29tdW5pY2FkbyIsIm1vc3RyYXJJbmZvcm1hY2FvIiwiYWRibG9jayIsIm1vc3RyYXJBZEJsb2NrIiwiZ2xiQWRibG9jayIsImJsb3F1ZWlvcyIsImxpYmVyYXJFc2MiLCJibG9xdWVpYVZpZXdNb2RlIiwicGFyY2Vpcm8iLCJtb3N0cmFGb290ZXJQYXJjZWlybyIsImluYWRpbXBsZW50ZSIsImdldExpbmtBc3NpbmF0dXJhIiwibGluayIsInJlbCIsInVybFNjcmlwdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3Bvc3RhIiwicmVzcG9uc2VUZXh0IiwiYXBwZW5kRGVTY3JpcHQiLCJhcHBlbmRDaGlsZCIsInN0YXR1c1RleHQiLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwic2V0UmVxdWVzdEhlYWRlciIsInJlc3BKc29uIiwicGFyc2UiLCJzaXR1YWNhb1BhZ2FtZW50byIsImZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc28iLCJnbGJpZCIsImNvZGlnb1Byb2R1dG8iLCJjb25maWd1cmFjYW8iLCJqc29uQ29uZmlndXJhY2FvVGlueVBhc3MiLCJ1cmxWZXJpZmljYUxlaXRvciIsInJlc3Bvc3RhRGVUZXJtb0RlVXNvIiwicmVzcG9zdGFEZU1vdGl2byIsIm1vdGl2byIsInRlbVRlcm1vRGVVc28iLCJpc0F1dG9yaXphZG8iLCJhdXRvcml6YWRvIiwiX2pzb25MZWl0b3IiLCJ1c3VhcmlvSWQiLCJidG9hIiwiZW5jb2RlVVJJIiwiZ29vZ2xlIiwic2hvd1NhdmVTdWJzY3JpcHRpb24iLCJzd2dTZXJ2aWNlIiwiU3dnU2VydmljZSIsInNhdmVHbG9ib1N1YnNjcmlwdGlvbiIsImlzQXV0aG9yaXplZCIsImdldEVudGl0bGVtZW50Rm9yU291cmNlIiwic3Vic2NyaXB0aW9uVG9rZW4iLCJpc1NwZWNpZmljR29vZ2xlVXNlciIsIm9HbG9ib0J1c2luZXNzIiwiT0dsb2JvQnVzaW5lc3MiLCJ2ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkIiwiZW50aXRsZW1lbnRzIiwicmVzcG9uc2UiLCJlbmFibGVzVGhpcyIsImlzTG9nYWRvQ2FkdW4iLCJ1dHAiLCJ2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8iLCJfbGVpdG9yIiwiZGVjb2RlVVJJIiwiYXRvYiIsInByb2R1dG8iLCJsb2dhZG8iLCJ1dWlkIiwidGVybW9EZVVzbyIsImlzU2VjdGlvbiIsInRlbVZhcmlhdmVpc09icmlnYXRvcmlhcyIsImV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsIiwiZ2V0V2luZG93TG9jYXRpb25TZWFyY2giLCJjaGF2ZXNDYW1wYW5oYSIsInZhbG9yZXNDYW1wYW5oYSIsImlkeFBhcmFtQ2FtcGFuaGEiLCJjaGF2ZUNhbXBhbmhhIiwicmVnZXgiLCJ2YWxvckNhbXBhbmhhIiwiam9pbiIsImNhbXBhbmhhIiwiaXNPcmlnZW1CdXNjYWRvciIsInJlZ2V4Um9ib3MiLCJlaFJvYm8iLCJ0ZW1QYXJhbWV0cm9OYVVybCIsInBhcmFtTmFtZSIsInBhcmFtZXRyb3MiLCJpc0RlYnVnIiwiaXNEb21pbmlvT0dsb2JvIiwiZ2V0V2luZG93TG9jYXRpb25IcmVmIiwiY2FsbGJhY2tNZXRlciIsIm1ldGVyRGF0YSIsImNhbGxiYWNrTWV0ZXJFeHBpcmVkIiwiY3NzUGF0aCIsImluc2VydEJlZm9yZSIsImxhc3RDaGlsZCIsInJldmlzdGFzIiwicmVjYXJyZWdhUGlhbm8iLCJ0aXBvQ29udGV1ZG8iLCJpc0V4Y2x1c2l2byIsImNvbnN0cnV0b3IiLCJpbml0VHAiLCJleGVjdXRlIiwiaXNWYWxvciIsImlkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMiLCJpZFNhbmRib3hUaW55cGFzcyIsInNldFNhbmRCb3giLCJjbGVhbl91cmwiLCJsb2FkUGlhbm9FeHBlcmllbmNlcyIsImEiLCJhc3luYyIsInVybFNhbmRib3hQaWFub1JldmlzdGFzIiwidXJsU2FuZGJveFBpYW5vIiwiYiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsInBpYW5vSW5pdCIsInN1YnNjcmlwdGlvbnMiLCJzZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlIiwiZW50aXRsZW1lbnRzUHJvbWlzZSIsInRpbnlJbml0Iiwic2V0UGlhbm8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzL3RpbnktYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZiIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mYiA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBmYnEgIT09ICd1bmRlZmluZWQnKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQaXhlbFR5cGUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNQaXhlbCA9ICh0eXBlb2YgdGhpcy5mYi5waXhlbC5uYW1lICE9PSAndW5kZWZpbmVkJykgPyB0aGlzLmZiLnBpeGVsLm5hbWUgOiBudWxsOyBcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQgJiYgaGFzUGl4ZWwpe1xyXG4gICAgICAgICAgICBmYnEoJ2luaXQnLCAnNDEwMjcwMDM5NTIwNjM0Jyk7XHJcbiAgICAgICAgICAgIGZicSgndHJhY2tTaW5nbGUnLCAnNDEwMjcwMDM5NTIwNjM0JywgdGhpcy5mYi5waXhlbC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0EgIHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhO1xyXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0R2xvYmFsVmFycygpIHtcclxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciAgfHwgW107IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IgJiYgdHlwZW9mIF9nYXEgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxICB8fCBbXTsgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50cyhhY3Rpb24sIGxhYmVsLCBjYXRlZ29yeSA9ICdQaWFubycpIHtcclxuXHJcblx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ2xvZy1nYS1ldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcclxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgLHRydWVdKTtcclxuXHRcdFxyXG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogY2F0ZWdvcnksICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0RXZlbnRzRXJyb3IoYWN0aW9uLCBsYWJlbCkge1xyXG5cdFx0aWYgKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IpXHJcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ1BpYW5vIEVycm8nLCBhY3Rpb24sIGxhYmVsLCAsdHJ1ZV0pO1xyXG5cclxuXHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubyBFcnJvJywgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xyXG5cdH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcclxuXHJcbiAgICBzdGF0aWMgaXNEZWZpbmVkKHByb3ApIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBwcm9wICE9PSAndW5kZWZpbmVkJykgPyB0cnVlOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Q29va2llKGNfbmFtZSwgdmFsdWUsIGV4cGlyZWRheXMgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGV4ZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmKCFob3N0bmFtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBleGRhdGUuc2V0RGF0ZShleGRhdGUuZ2V0RGF0ZSgpICsgZXhwaXJlZGF5cyk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY19uYW1lICsgXCI9XCIgK2VzY2FwZSh2YWx1ZSkgKyAoKGV4cGlyZWRheXMpID8gXCJcIiA6IFwiO2V4cGlyZXM9XCIgKyBleGRhdGUudG9VVENTdHJpbmcoKSlcclxuICAgICAgICArIFwiOyBwYXRoPS87XCIgKyBcImRvbWFpbj0uXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVsxXSArIFwiLlwiICsgaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClbMF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gKGRvY3VtZW50LmNvb2tpZSkgPyBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChuYW1lKyc9KFteO10rKScpKSA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb29raWVUaW55ID0gbWF0Y2ggPyB1bmVzY2FwZShtYXRjaFsxXS50b1N0cmluZygpKSA6IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRpbnk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpYW5vIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1ZzsgXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNldEV4cGVyaWVuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNEZWZpbmVkKCkge1xyXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cudGlueUNwdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vICE9PSAndW5kZWZpbmVkJykgeyBcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gd2luZG93LnRpbnlDcHQuUGlhbm87XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFeHBlcmllbmNlKCkgeyAgXHJcbiAgICAgICAgbGV0IGV4cGVyaWVuY2VOYW1lID0gJyc7ICAgXHJcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UgPSB7fTsgIFxyXG4gICAgICAgICBcclxuXHRcdGlmKHdpbmRvdy5yZWdyYXNUaW55ICYmIHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSlcclxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3JlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhfSAtICR7d2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm99YCA6IHJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cubm9tZUV4cGVyaWVuY2lhKSBcclxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3dpbmRvdy5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcclxuICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUgPSBleHBlcmllbmNlTmFtZTtcclxuXHR9XHJcblxyXG4gICAgcmVzZXRVdHAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQpXHJcbiAgICAgICAgICAgIEhlbHBlcnMuc2V0Q29va2llKHRoaXMuY29udGVudC52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsICcnLCAtMSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgIHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0TmFtZSA9ICh0eXBlb2Ygd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHbG9iYWwoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgUHJvZHVjdDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9kdWN0TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihwcm9kdWN0c1NldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBwcm9kdWN0c1NldHRpbmdzOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGlzUHJvZHVjdFZhbG9yKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9kdWN0TmFtZSAmJiB0aGlzLnByb2R1Y3ROYW1lID09PSAndmFsb3InKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3ZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB3aW5kb3cuU1dHID0gd2luZG93LlNXRyB8fCBbXTsgLy9UT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGlzIHZhcmlhYmxlIGV4aXN0c1xyXG4gICAgICAgIHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSB3aW5kb3cuc3dnRW50aXRsZW1lbnRzIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IChIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpID8gd2luZG93LnRpbnlDcHQuZGVidWcuc3dnIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhbFByb2R1Y3RQaWFubyA9ICh0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gbm9tZVByb2R1dG9QaWFubyA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWxIZWFkID0gZG9jdW1lbnQuaGVhZDsgXHJcblxyXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsU1dHKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHsgXHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSA/IHRydWUgOiBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2xvYmFsU1dHKCkge1xyXG4gICAgICAgIGlmKCFIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnID0ge1xyXG4gICAgICAgICAgICBnbG9iYWw6ICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykgPyBzd2cgOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVdG1zKCkgeyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgY29uc3QgdXRtc1Byb3BzID0gKHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgOiBudWxsOyBcclxuXHJcbiAgICAgICAgdXRtc1Byb3BzLmZvckVhY2goKGl0ZW0pID0+IHsgXHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgIHVybFBhcmFtcy5zZXQoYHV0bV8ke25hbWV9YCwgdmFsdWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZykgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAnc2V0VXRtcycpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCB1dG1zUHJvcHMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCBsb2NhdGlvbilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5pc0RlZmluZWQpIHx8ICF1dG1zUHJvcHMgKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbC5zdWJzY3JpYmUoJ2JyLmNvbS5pbmZvZ2xvYm8ub2dsb2JvLnN3Zy5nb29nbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0cygpIHtcclxuICAgICAgICBpZih0aGlzLmRlYnVnKVxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2goJy4uL2FwcC9tb2Nrcy9zd2cvcHJvZHVjdHMuanNvbicpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9wcm9kdWN0cy5qc29uJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0UHJvZHVjdCgpIHsgXHJcbiAgICAgICAgaWYoIXRoaXMubG9jYWxQcm9kdWN0UGlhbm8pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5waWFub1Byb2R1Y3ROYW1lID09PSB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vIClbMF07XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW1vdmVQcm9wZXJ0aWVzKG9iaikgeyBcclxuICAgICAgICBjb25zdCBwcm9wc1RvUmVtb3ZlID0gWydwcm9kdWN0TmFtZScsICdwaWFub1Byb2R1Y3ROYW1lJ107XHJcbiAgICAgICAgY29uc3QgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcclxuXHJcbiAgICAgICAgcHJvcHNUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgbmV3T2JqW2VsZW1lbnRdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG1hcmt1cFRlbXBsYXRlKCkgeyBcclxuICAgICAgICBjb25zdCBwcm9kdWN0SlNPTiA9ICBhd2FpdCB0aGlzLnJlbW92ZVByb3BlcnRpZXMoYXdhaXQgdGhpcy5nZXRQcm9kdWN0KCkpIHx8IG51bGw7IFxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBPYmplY3Qua2V5cyhwcm9kdWN0SlNPTikubGVuZ3RoID8gSlNPTi5zdHJpbmdpZnkocHJvZHVjdEpTT04pIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5kZWJ1ZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnbG9nLVNXRy1Qcm9kdWN0JzogcHJvZHVjdH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SlNPTiA9IGAkeyBwcm9kdWN0IH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRNYXJrdXAoKSB7IFxyXG4gICAgICAgIGF3YWl0IHRoaXMubWFya3VwVGVtcGxhdGUoKTtcclxuICAgICAgICBpZighdGhpcy5wcm9kdWN0SlNPTikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2FwcGxpY2F0aW9uL2xkK2pzb24nO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5wcm9kdWN0SlNPTjtcclxuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN3Z1NjcmlwdCgpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgZWxlbWVudC5zcmMgPSAnaHR0cHM6Ly9uZXdzLmdvb2dsZS5jb20vc3dnL2pzL3YxL3N3Zy5qcyc7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGRlYmFyYW5TY3JpcHQoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGNvbnN0IHVybFByb2QgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYzEwYWU4MTljNTY4NDYwYmI0ZWMxN2MwYThlYzUyNjcvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XHJcbiAgICAgICAgY29uc3QgdXJsU3RnID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2FkZGM1ZThmMzE2ZjQ4ZWE5MTgxYWYzNzE2MGIyMmI0L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNyYyA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/IHVybFByb2QgOiB1cmxTdGc7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0U1dHKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwOyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zd2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsID0gd2luZG93LnN3ZztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT09IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdUaGVyZSBpc25cXCd0IHdpbmRvdy5zd2cnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRNYXJrdXAoKTsgIFxyXG4gICAgICAgICBcclxuICAgICAgICBpZighdGhpcy5oYXNQcm9kdWN0SlNPTikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3dnU2NyaXB0KCk7IFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QWxkZWJhcmFuU2NyaXB0KCk7ICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy50ZXN0U1dHKCk7ICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55ICB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcclxuICAgICAgICB3aW5kb3cuaGFzUGF5d2FsbCA9IHdpbmRvdy5oYXNQYXl3YWxsIHx8IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy50cCA9IHdpbmRvdy50cCB8fCBbXTtcclxuICAgICAgICB3aW5kb3cuUGlhbm8gPSB3aW5kb3cuUGlhbm8gfHwge307XHJcbiAgICAgICAgd2luZG93LlBheXdhbGxBbmFseXRpY3MgPSB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyB8fCB7fTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldEdsb2JhbFRpbnkoKTtcclxuICAgICAgICB0aGlzLlByb2R1Y3RzLnNldEdsb2JhbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsb2JhbFRpbnkoKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWJ1Zzoge1xyXG4gICAgICAgICAgICAgICAgdGlueTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXl3YWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN3ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBnYTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNQcm9kdWN0aW9uOiAod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBkZWZhdWx0U2V0dGluZ3M7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQaWFubyhvYmopIHtcclxuICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFubyA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4uL0hlbHBlcnMnO1xyXG5pbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xyXG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi4vR0EnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbEdBTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcclxuICAgIHRoaXMuR0EgPSBuZXcgR0FNb2R1bGUoKTsgXHJcblxyXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWV0cmljcyA9IHtcclxuICAgICAgICBwYXl3YWxsOiB7fSwgXHJcbiAgICAgICAgZmI6IHtcclxuICAgICAgICAgICAgcGl4ZWw6IHt9XHJcbiAgICAgICAgfSBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYXl3YWxsVHlwZSgpO1xyXG4gIH1cclxuXHJcbiAgcGF5d2FsbExvYWQoKSB7IFxyXG4gICAgaWYoIXRoaXMuUGlhbm8uaXNEZWZpbmVkKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgY29uc3QgX1BpYW5vID0gdGhpcy5QaWFuby5jb250ZW50O1xyXG5cclxuICAgIHRoaXMuR0Euc2V0RXZlbnRzKCdFeGliaWNhbyBSZWdpc3RlcicsIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUpO1xyXG4gICAgSGVscGVycy5zZXRDb29raWUoX1BpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXIoZWxlbWVudCkgeyBcclxuICAgIGlmKHRoaXMuZGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXRVdHAgPSBlbGVtZW50LmRhdGFzZXQuZ2FSZXNldHV0cCB8fCBudWxsO1xyXG4gICAgY29uc3QgaW1hZ2VUb3AgPSBlbGVtZW50LmRhdGFzZXQuZ2FJbWFnZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgbGFiZWwgPSAoaW1hZ2VUb3AgPT09ICd0b3AnKSA/IGVsZW1lbnQuZGF0YXNldC5nYUxhYmVsICsgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgOiBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbDtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBldmVudDogJ0V2ZW50b0dBJyxcclxuICAgICAgZXZlbnRvR0FDYXRlZ29yaWE6IHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUsXHJcbiAgICAgIGV2ZW50b0dBQWNhbzogZWxlbWVudC5kYXRhc2V0LmdhQWN0aW9uIHx8IGFjdGlvbixcclxuICAgICAgZXZlbnRvR0FSb3R1bG86IGxhYmVsLFxyXG4gICAgICBldmVudG9HQVZhbG9yOiAwLFxyXG4gICAgICBldmVudG9HQUludGVyYWNhbzogZmFsc2UsXHJcbiAgICB9OyBcclxuXHJcbiAgICBpZiAocmVzZXRVdHApXHJcbiAgICAgICAgdGhpcy5QaWFuby5yZXNldFV0cCgpO1xyXG4gXHJcbiAgICB0aGlzLnNldERhdGFsYXllcihkYXRhKTtcclxuICB9XHJcblxyXG4gIHBheXdhbGxUeXBlKCkge1xyXG4gICAgY29uc3QgdHlwZSA9ICggKHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsICE9PSAndW5kZWZpbmVkJykgJiYgd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwpIFxyXG4gICAgICA/IHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsLnRvTG93ZXJDYXNlKCkgXHJcbiAgICAgIDogJ3BheXdhbGwnO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdyZWdpc3Rlcic6XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBjb211bSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQ2FkYXN0cmUtc2UnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdleGNsdXNpdm8nOlxyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgZXhjbHVzaXZvJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdMb2dpbkV4Y2x1c2l2byc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BheXdhbGwnOlxyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAncGF5d2FsbCc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3UGF5d2FsbEV4Y2x1c2l2byc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREYXRhbGF5ZXIoZGF0YSA9IHt9KSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgIGRhdGFMYXllci5wdXNoKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xyXG5pbXBvcnQgUGF5d2FsbEdBTW9kdWxlIGZyb20gJy4vUGF5d2FsbC1nYSc7XHJcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi4vU3dnJztcclxuaW1wb3J0IEZiTW9kdWxlIGZyb20gJy4uL0ZCJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheXdhbGxDcHQgIHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0dGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xyXG5cdHRoaXMuR0EgPSBuZXcgUGF5d2FsbEdBTW9kdWxlKCk7XHJcblx0dGhpcy5TV0cgPSBuZXcgU3dnTW9kdWxlKCk7XHJcblx0dGhpcy5GQiA9IG5ldyBGYk1vZHVsZSh0aGlzLkdBLm1ldHJpY3MuZmIpO1xyXG5cclxuXHR0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcclxuXHR0aGlzLmRvbWFpbiA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/ICdodHRwczovL2xvZ2luLmdsb2JvLmNvbS8nIDogJ2h0dHBzOi8vbG9naW4ucWEuZ2xvYm9pLmNvbS8nO1x0XHJcblx0dGhpcy5zZXRUZW1wbGF0ZVNldHRpbmdzKCgpID0+IHtcclxuXHRcdHRoaXMuaW5pdCgpOyBcclxuXHR9KTtcclxuXHJcblx0d2luZG93LlBheXdhbGxDcHQgPSB0aGlzO1xyXG5cclxuXHR3aW5kb3cudGlueUNwdC5QYXl3YWxsID0ge1xyXG5cdFx0ZG9tYWluOiB0aGlzLmRvbWFpbixcclxuXHRcdEdBOiB0aGlzLkdBLm1ldHJpY3MsXHJcblx0fTtcclxuICB9XHJcblxyXG4gIHNldFRlbXBsYXRlU2V0dGluZ3MoY2FsbGJhY2spIHtcclxuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xyXG5cdFx0XHR0ZW1wbGF0ZTogJ2RlZmF1bHQnLFxyXG5cdFx0XHRhc3NldHNQYXRoOiAnJyxcclxuXHRcdFx0ZGlzcGxheTogbnVsbCxcclxuXHRcdFx0cHJvZHVjdENsYXNzOiB0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgPyBgcGF5d2FsbC1jcHQtJHtub21lUHJvZHV0b1BpYW5vfWAgOiAncGF5d2FsbC1jcHQtb2dsb2JvJyxcclxuXHRcdFx0dGl0bGU6ICdFc3NlIGNvbnRlw7pkbyDDqSBvIHTDrXR1bG8uJyxcclxuXHRcdFx0dGFyZ2V0Qmxhbms6IHRydWUsXHJcblx0XHRcdHRvcE1vYmk6ICcnLFxyXG5cdFx0XHR0b3BEZXNrOiAnJyxcclxuXHRcdFx0dG9wTGluazogJycsXHJcblx0XHRcdGxlZnRNb2JpOiAnJyxcclxuXHRcdFx0bGVmdERlc2s6ICcnLFxyXG5cdFx0XHRsZWZ0TGluazogJycsXHJcblx0XHRcdHJpZ2h0TW9iaTogJycsXHJcblx0XHRcdHJpZ2h0RGVzazogJycsXHJcblx0XHRcdHJpZ2h0TGluazogJydcclxuXHRcdH07XHJcblxyXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5oaWRlTG9naW5BcmVhID0gZmFsc2U7XHJcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luVGV4dCA9ICdGYcOnYSBsb2dpbic7XHJcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luUHJlVGV4dCA9ICdKw6EgcG9zc3VpIGNhZGFzdHJvPyc7XHJcblx0XHRcclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsID0gKHdpbmRvdy5nbGJQYXl3YWxsKSA/ICBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZVNldHRpbmdzLCB3aW5kb3cuZ2xiUGF5d2FsbCkgOiB0ZW1wbGF0ZVNldHRpbmdzOyBcclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGFnID0gYCR7d2luZG93LmdsYlBheXdhbGwubG9naW5QcmVUZXh0fSA8YSBocmVmPVwiJHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoKX1cIiBkYXRhLWlzLWxvZ2luPVwidHJ1ZVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayAyIC0gRmHDp2EgbG9naW5cIiBkYXRhLWdhLXJlc2V0VXRwPVwiZmFsc2VcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiICR7d2luZG93LmdsYlBheXdhbGwudGFyZ2V0Qmxhbmt9IFwiPiR7d2luZG93LmdsYlBheXdhbGwubG9naW5UZXh0fTwvYT5gO1xyXG5cclxuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsLmhpZGVMb2dpbkFyZWEpXHJcblx0XHRcdHRoaXMuY2xlYXJMb2dpbkFyZWEoKTtcclxuXHJcblx0XHRpZih0aGlzLmRlYnVnICkgXHJcblx0XHRcdHRoaXMuc2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCk7XHJcblx0XHRcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhckxvZ2luQXJlYSgpIHtcclxuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsKSB7IFxyXG5cdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9ICcnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCkge1xyXG5cdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0b2JqLnRvcE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTAnO1xyXG5cdFx0b2JqLnRvcERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwNHgxMjgnO1xyXG5cdFx0b2JqLnRvcExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wxJztcclxuXHRcdG9iai5sZWZ0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XHJcblx0XHRvYmoubGVmdERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwMng1MTUnO1xyXG5cdFx0b2JqLmxlZnRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMic7XHJcblx0XHRvYmoucmlnaHRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcclxuXHRcdG9iai5yaWdodERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwMng1MTUnO1xyXG5cdFx0b2JqLnJpZ2h0TGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDMnO1xyXG5cclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmdsYlBheXdhbGwsIG9iaik7XHJcblx0fVxyXG4gXHJcbiAgYm9keUFkanVzdCgpIHtcclxuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnaGlkZGVuJywgJ2ltcG9ydGFudCcpO1xyXG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcsICdpbXBvcnRhbnQnKTtcclxuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCAnMTAwJScsICdpbXBvcnRhbnQnKTtcclxuICB9XHJcblxyXG4gIHNldEVsV3JhcHBlcigpIHtcclxuXHR0aGlzLmVsQ3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0Jyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFbGVtZW50cygpIHtcclxuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xyXG5cclxuXHRpZih0aGlzLmVsQ3B0KVxyXG5cdFx0dGhpcy5lbENwdC5yZW1vdmUoKTtcclxuXHJcblx0Y29uc3QgZWxUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm90ZWN0ZWQtY29udGVudCcpO1xyXG5cclxuXHRlbFRvUmVtb3ZlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0ICBlbGVtZW50LnJlbW92ZSgpO1xyXG5cdH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGVtcGxhdGUoKSB7XHJcblx0dGhpcy5lbEJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgdGhpcy5ib2R5QWRqdXN0KCk7XHJcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRzKCk7XHJcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmNzc01pbmlmaWVkKTsgXHJcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnRlbXBsYXRlKTsgXHJcblx0dGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHRcclxuICAgIFxyXG4gICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLkdBLnBheXdhbGxMb2FkKCk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCkge1xyXG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XHJcblx0dGhpcy5lbENwdFdyYXAgPSB0aGlzLmVsQ3B0LnF1ZXJ5U2VsZWN0b3IoJy5wYXl3YWxsLWNwdC13cmFwJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZWxCb2R5SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgNDtcclxuXHRcdGNvbnN0IGVsQ3B0V3JhcEhlaWdodCA9IHRoaXMuZWxDcHRXcmFwLm9mZnNldEhlaWdodDtcclxuICAgICAgICBjb25zdCBjdXJyZW50VG9wID0gKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykgXHJcbiAgICAgICAgPyBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKVxyXG4gICAgICAgIDogTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yICk7XHJcblx0XHRjb25zdCB0b3BXaXRoRnVsbEVsZW1lbnQgPSAoZWxCb2R5SGVpZ2h0IC0gZWxDcHRXcmFwSGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke2N1cnJlbnRUb3B9cHhgO1xyXG5cdFx0dGhpcy5lbENwdC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdHRoaXMuZWxDcHQuc3R5bGUuekluZGV4ID0gOTk5OTk5OTk5OTtcclxuXHJcblx0XHR0aGlzLmV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XHJcblx0XHR0aGlzLmV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XHJcblx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpO1xyXG5cclxuXHRcdHRoaXMuRkIuc2V0UGl4ZWxUeXBlKCk7XHJcblx0fSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVFdmVudHMoKSB7XHJcblx0Y29uc3QgY2xpY2tUYXJnZXRzID0gdGhpcy5lbENwdFdyYXAucXVlcnlTZWxlY3RvckFsbCgnYScpO1xyXG5cclxuXHRjbGlja1RhcmdldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHsgXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbiA9IEJvb2xlYW4oZWxlbWVudC5kYXRhc2V0LmlzTG9naW4pIHx8IGZhbHNlO1xyXG5cdFx0XHRjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGZhbHNlIDsgXHJcblx0XHRcdGNvbnN0IGlzVXJsU3dnID0gKHVybCkgPyB1cmwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnb2ZlcnRhc3dnJykgOiBmYWxzZTtcclxuXHRcdFx0Y29uc3Qgbm90QmxhbmsgPSBlbGVtZW50LmRhdGFzZXQuaHJlZlRhcmdldCB8fCB0cnVlOyBcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuR0EudHJpZ2dlcihlbGVtZW50KTsgXHJcblxyXG5cdFx0XHRpZighaXNMb2dpbiAmJiBpc1VybFN3ZylcclxuXHRcdFx0XHR0aGlzLlNXRy5zZXRVdG1zKCk7ICBcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmwgJiYgIWlzVXJsU3dnKSB7IFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RCbGFuayA/ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybCkgOiB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9KTtcclxuICB9XHJcblxyXG4gIGV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xyXG5cdGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdCd3aGVlbCcsXHJcblx0XHRmdW5jdGlvbihldnQpIHsgXHJcblx0XHQgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VG9wIC8gMTAwO1xyXG5cdFx0ICBjb25zdCBtdWx0aXBsaWVyID0gMjA7XHJcblxyXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA+PSAxKSB7XHJcblx0XHRcdGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gc3RlcCAqIG11bHRpcGxpZXI7IFxyXG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xyXG4gIFxyXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcblx0XHQgIH1cclxuICBcclxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPD0gLTEpIHtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgKyBzdGVwICogbXVsdGlwbGllcjtcclxuXHRcdFx0bmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xyXG4gIFxyXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcblx0XHQgIH1cclxuXHRcdH0uYmluZCh0aGlzKVxyXG5cdCAgKTtcclxuICB9XHJcblxyXG4gIGV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xyXG4gICAgbGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XHJcbiAgICBsZXQgdG91Y2hzdGFydFkgPSAwO1xyXG4gICAgbGV0IHRvdWNoZW5kWSA9IDA7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZ0KSB7IFxyXG4gICAgICAgIHRvdWNoc3RhcnRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldnQpIHsgXHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xyXG4gICAgICAgIHRvdWNoZW5kWSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xyXG5cclxuICAgICAgICBpZiAodG91Y2hlbmRZIDwgdG91Y2hzdGFydFkpIHsgXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyh0b3VjaHN0YXJ0WSkgLSBNYXRoLmFicyh0b3VjaGVuZFkpO1xyXG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCAtIGRpZmY7IFxyXG4gICAgICAgICAgICBuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvdWNoZW5kWSA+IHRvdWNoc3RhcnRZKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaGVuZFkgLSB0b3VjaHN0YXJ0WTtcclxuICAgICAgICAgICAgY29uc3QgZWxUb3AgPSBuZXd0b3AgKyBkaWZmOyBcclxuXHRcdCAgICBuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XHJcblxyXG5cdFx0ICAgIHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcclxuICAgICAgICB9XHJcblx0fS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XHJcblx0Y29uc3QgdXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gPSB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcgPyAnaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCcgOiAnaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCc7XHJcblx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcclxuXHRsZXQgc3RyID0gJyc7XHJcblx0bGV0IHVybFJldHVybiA9ICcnO1xyXG5cclxuXHRpZighdGhpcy5kZWJ1ZyAmJiB0aGlzLlBpYW5vLmlzRGVmaW5lZCkge1xyXG5cdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxyXG5cdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxyXG5cdFx0XHQrICcmc2VydmljZUlkPScgKyB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpXHJcblx0XHRcdCsgJyZhbWJpZW50ZVV0aWxpemFkbz0nICsgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm9cclxuXHRcdFx0KyAnJm5vbWVQcm9kdXRvPScgKyB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKClcclxuXHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxyXG5cdFx0KTtcclxuXHJcblx0XHRpZih0eXBlID09PSAncmVnaXN0ZXInKSB7XHJcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWNhZGFzdHJvLyR7dGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKX0/dXJsPSR7dXJsUmV0dXJufWA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1sb2dpbi8ke3RoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCl9P3VybD0ke3VybFJldHVybn1gO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0cjtcclxufVxyXG5cclxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xyXG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbDtcclxuICB9XHJcblxyXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXHJcblx0Y29uc3QgdGVtcGxhdGUgPSBgXHJcblx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQgJHt0aGlzLnRlbXBsYXRlVmFycy5wcm9kdWN0Q2xhc3N9XCI+IFxyXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWRcIj5cclxuXHRcdFx0JHt0aGlzLnRlbXBsYXRlVmFycy50aXRsZX1cclxuXHRcdDwvZGl2PlxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdG9wXCI+XHJcblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTGlua31cIiBkYXRhLWdhLWltYWdlLXBvc2l0aW9uPVwidG9wXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDEgLVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XHJcblx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BEZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgLz5cclxuXHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdDwvYT5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlciAke3dpbmRvdy5nbGJQYXl3YWxsLmhpZGVMb2dpbkFyZWEgPyAnaXMtaGlkZScgOiAnJ31cIj5cclxuXHRcdCAgXHQke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGFnfVxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX2xlZnRcIj5cclxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TGlua31cIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgNCAtIEJhbm5lciBvZmVydGEgZXNxdWVyZGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIC8+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fcmlnaHRcIj5cclxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodExpbmt9XCIgIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA1IC0gQmFubmVyIG9mZXJ0YSBkaXJlaXRhXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cclxuXHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCAgPC9kaXY+XHJcblx0ICBgO1xyXG5cclxuXHRyZXR1cm4gdGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgY3NzTWluaWZpZWQoKSB7XHJcblx0ICByZXR1cm4gYDxzdHlsZT5cclxuXHQgIC5wYXl3YWxsLWNwdHtvcGFjaXR5OjA7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMHZ3O292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Ym94LXNoYWRvdzowIDAgNzBweCAwIHJnYmEoMCwwLDAsLjUpO2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmfS5wYXl3YWxsLWNwdCwucGF5d2FsbC1jcHQgKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZX0ucGF5d2FsbC1jcHQgYXtmb250LXdlaWdodDo3MDA7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LnBheXdhbGwtY3B0IGE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0ucGF5d2FsbC1jcHQgLnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZCwucGF5d2FsbC1jcHQgYXtjb2xvcjojMDAwfS5wYXl3YWxsLWNwdC1vZ2xvYm8gLnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZCwucGF5d2FsbC1jcHQtb2dsb2JvIGF7Y29sb3I6IzMyNWU5NH0ucGF5d2FsbC1jcHQtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctYm90dG9tOjIwcHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5wYXl3YWxsLWNwdC13cmFwey1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1vcmllbnQ6aG9yaXpvbnRhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9fS5wYXl3YWxsLWNwdC13cmFwIGltZ3tkaXNwbGF5OmJsb2NrO21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvfS5wYXl3YWxsLWNwdC13cmFwX190b3B7cGFkZGluZy10b3A6MjBweH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFke3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMHB4IDAgMDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDB9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVye3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMHB4IDA7Y29sb3I6Izc2NzY3Njtmb250LXNpemU6MTZweH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXIuaXMtaGlkZXtwYWRkaW5nLWJvdHRvbTowfVxyXG5cdCAgPC9zdHlsZT5gO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHsgXHJcblx0ICBjb25zdCBkZWxheVRpbWVyID0gKHdpbmRvdy5nbGJQYXl3YWxsICYmIHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIpID8gd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lciAqIDEwMDAgOiAwO1xyXG5cclxuXHRzZXRUaW1lb3V0KCgpID0+e1xyXG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xyXG5cdH0sIGRlbGF5VGltZXIpO1xyXG4gIH1cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XHJcbmltcG9ydCBUaW55TW9kdWxlIGZyb20gJy4vVGlueSc7XHJcbmltcG9ydCBHQU1vZHVsZSBmcm9tICcuL0dBJztcclxuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuL1N3Zyc7XHJcbmltcG9ydCBQYXl3YWxsQ3B0IGZyb20gJy4vY3BudC1wYXl3YWxsL1BheXdhbGwnO1xyXG5cclxuY29uc3QgVGlueSA9IG5ldyBUaW55TW9kdWxlKCk7XHJcbmNvbnN0IEdBID0gbmV3IEdBTW9kdWxlKCk7XHJcbmNvbnN0IE5vdGhpbmcgPSBudWxsO1xyXG5cclxuR0Euc2V0R2xvYmFsVmFycygpO1xyXG5cclxuUGlhbm8uYWN0aXZlUGF5d2FsbCA9IHRydWU7XHJcblBpYW5vLnR5cGVQYXl3YWxsID0gbnVsbDtcclxuUGlhbm8udmFyaWF2ZWlzID0ge1xyXG5cdGFtYmllbnRlc0FjZWl0b3M6IFwiaW50LHFsdCxwcmRcIixcclxuXHRzdGF0dXNIdHRwT2J0ZXJBdXRvcml6YWNhb0FjZXNzbzogXCI0MDAsNDA0LDQwNiw1MDAsNTAyLDUwMyw1MDRcIixcclxuXHRzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBcIjQwMCw0MDQsNTAwLDUwMiw1MDMsNTA0XCIsXHJcblx0aXNDYWxsYmFja01ldHRlckV4cGlyZWQ6IGZhbHNlLFxyXG5cdGNvbnN0YW50ZToge1xyXG5cdFx0Y29va2llOiB7XHJcblx0XHRcdEdDT006ICdHTEJJRCcsXHJcblx0XHRcdFVUUDogJ191dHAnLFxyXG5cdFx0XHRSVElFWDogJ19ydGlleCcsXHJcblx0XHRcdEFNQklFTlRFOiAnYW1iaWVudGVQaWFubycsXHJcblx0XHRcdFNBVkVfU1VCU0NSSVBUSU9OOiAnc2F2ZVN1YnNjcmlwdGlvbkNvb2tpZScsXHJcblx0XHRcdENSRUFURURfR0xPQk9JRDogJ2NyZWF0ZWRHbG9ib0lkJyxcclxuXHRcdFx0R0xPQk9JRF9NRVNTQUdFOiAnZ2xvYm9JZE1lc3NhZ2UnXHJcblx0XHR9LFxyXG5cdFx0bWV0cmljYXM6IHtcclxuXHRcdFx0RVZFTlRPX1NFTV9BQ0FPOiAnc2VtIGFjYW8nLFxyXG5cdFx0XHRFUlJPOiAnRXJybydcclxuXHRcdH0sXHJcblx0XHRrcnV4OiB7XHJcblx0XHRcdFNFR01FTlRBQ09FUzogJ2t4Z2xvYm9fc2VncycsXHJcblx0XHRcdEtSVVhMSUdBRE86ICdrcnV4LWxpZ2FkbydcclxuXHRcdH0sXHJcblx0XHR1dGlsOiB7XHJcblx0XHRcdElQOiBcIjEyNy4wLjAuMVwiLFxyXG5cdFx0XHRBTUJJRU5URTogXCJhbWJpZW50ZS1kZXNlamFkb1wiLFxyXG5cdFx0XHRERUJVRzogXCJkZWJ1Zy1waWFub1wiXHJcblx0XHR9XHJcblx0fSxcclxuXHRpc0NvbnRldWRvRXhjbHVzaXZvOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHRnZXRBbWJpZW50ZVBpYW5vOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpKSA+IC0xKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSwgMSk7XHJcblx0XHRcdHJldHVybiBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKTtcclxuXHRcdH1cclxuXHRcdGlmIChQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSA9PSAnZmFsc2UnKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBcIlwiLCAtMSk7XHJcblx0XHR9XHJcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpKSB7XHJcblx0XHRcdHJldHVybiBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSk7XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2Yod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8pID4gLTEgPyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA6ICdwcmQnO1xyXG5cdH0sXHJcblx0Z2V0VGlwb0NvbnRldWRvUGlhbm86IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy50aXBvQ29udGV1ZG9QaWFubztcclxuXHR9LFxyXG5cdGV4ZWN1dG91UGFnZXZpZXc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5leGVjdXRvdVBhZ2V2aWV3ID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0Z2V0Tm9tZVByb2R1dG86IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cubm9tZVByb2R1dG9QaWFubyl7XHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiTm9tZSBkbyBwcm9kdXRvIG7Do28gZGVmaW5pZG8uXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vO1xyXG5cdH0sXHJcblx0Z2V0U2Vydmljb0lkOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBpZCA9ICcwMDAwJztcclxuXHJcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ29nbG9ibycgXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYmxvZ3MnIFxyXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2tvZ3V0J1xyXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2FjZXJ2bydcclxuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdqb3JuYWxkaWdpdGFsJyl7XHJcblx0XHRcdHJldHVybiBpZCA9ICczOTgxJztcclxuXHRcdH1cclxuXHRcdGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpICYmIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnbW9uZXQnKXsgXHJcblx0XHRcdHJldHVybiBpZCA9ICc2NjE4JztcclxuXHRcdH1lbHNlIGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpKXtcclxuXHRcdFx0cmV0dXJuIGlkID0gJzY2OTcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAndmFsb3InKXtcclxuICAgICAgICAgICAgcmV0dXJuIGlkID0gJzY2NjgnO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoaWQgPT09ICcwMDAwJylcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ1NlcnZpY2VJRCBuw6NvIGRlZmluaWRvLicsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgKyBcclxuXHRcdFx0XHQnIG5vbWVQcm9kdXRvOiAnICsgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgKTtcclxuXHJcblx0XHRyZXR1cm4gaWQ7XHJcblx0fSxcclxuXHRnZXRDb2RpZ29Qcm9kdXRvOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIG5vbWVQcm9kdXRvID0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCk7XHJcblx0XHRzd2l0Y2ggKG5vbWVQcm9kdXRvKXtcclxuXHRcdFx0Y2FzZSAnb2dsb2JvJzpcclxuXHRcdFx0Y2FzZSAnYmxvZ3MnOlxyXG5cdFx0XHRjYXNlICdrb2d1dCc6XHJcblx0XHRcdFx0cmV0dXJuICdPRzAzJztcclxuXHRcdFx0Y2FzZSAnYWNlcnZvJzpcclxuXHRcdFx0XHRyZXR1cm4gJ09HMDQnO1xyXG5cdFx0XHRjYXNlICdqb3JuYWxkaWdpdGFsJzpcclxuXHRcdFx0XHRyZXR1cm4gJ09HMDEnO1xyXG5cdFx0XHRjYXNlICdhdXRvLWVzcG9ydGUnOlxyXG5cdFx0XHRjYXNlICdlcG9jYSc6XHJcblx0XHRcdGNhc2UgJ3ZvZ3VlJzpcclxuXHRcdFx0Y2FzZSAnZ2xhbW91cic6XHJcblx0XHRcdGNhc2UgJ2Nhc2Etdm9ndWUnOlxyXG5cdFx0XHRjYXNlICdtYXJpZS1jbGFpcmUnOlxyXG5cdFx0XHRjYXNlICdnbG9iby1ydXJhbCc6XHJcblx0XHRcdGNhc2UgJ2dxJzpcclxuXHRcdFx0Y2FzZSAnbW9uZXQnOlxyXG5cdFx0XHRjYXNlICdjcmVzY2VyJzpcclxuXHRcdFx0Y2FzZSAnZ2FsaWxldSc6XHJcblx0XHRcdFx0cmV0dXJuIG5vbWVQcm9kdXRvO1xyXG5cdFx0XHRjYXNlICdjYXNhLWUtamFyZGltJzpcclxuXHRcdFx0XHRyZXR1cm4gJ2Nhc2EtamFyZGltJztcclxuXHRcdFx0Y2FzZSAncXVlbS1hY29udGVjZSc6XHJcblx0XHRcdFx0cmV0dXJuICdxdWVtJztcclxuXHRcdFx0Y2FzZSAndmFsb3InOlxyXG5cdFx0XHRcdHJldHVybiAndmFsb3JkaWdpdGFsJztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFvIG9idGVyIGPDs2RpZ28gZG8gcHJvZHV0b1wiLCBub21lUHJvZHV0byArIFwiIC0gXCIgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xyXG5cdFx0XHRcdHJldHVybiAnZXJyb3InO1xyXG5cdFx0fVxyXG5cdH1cdFxyXG59O1xyXG5cclxuUGlhbm8uamFuZWxhQW5vbmltYSA9IHtcclxuXHRyZXRyeSA6IGZ1bmN0aW9uKGlzRG9uZSwgbmV4dCkge1xyXG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xyXG5cdFx0dmFyIGlkID0gd2luZG93LnNldEludGVydmFsKFxyXG5cdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcclxuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChjdXJyZW50X3RyaWFsKysgPiBtYXhfcmV0cnkpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcclxuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdDEwXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0aXNJRTEwT3JMYXRlciA6IGZ1bmN0aW9uKHVzZXJfYWdlbnQpIHtcclxuXHRcdGxldCB1YSA9IHVzZXJfYWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xyXG5cdFx0XHJcblx0XHRpZiAodWEuaW5kZXhPZignbXNpZScpID09PSAwICYmIHVhLmluZGV4T2YoJ3RyaWRlbnQnKSA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAobWF0Y2ggJiYgcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSA+PSAxMCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGRldGVjdFByaXZhdGVNb2RlIDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdHZhciBpc19wcml2YXRlO1xyXG5cclxuXHRcdGlmICh3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0pIHtcclxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKFxyXG5cdFx0XHRcdHdpbmRvdy5URU1QT1JBUlksIDEsXHJcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5pbmRleGVkREIgJiYgL0ZpcmVmb3gvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcblx0XHRcdHZhciBkYjtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRkYiA9IHdpbmRvdy5pbmRleGVkREIub3BlbigndGVzdCcpO1xyXG5cdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBpc19wcml2YXRlID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFBpYW5vLmphbmVsYUFub25pbWEucmV0cnkoXHJcblx0XHRcdFx0XHRmdW5jdGlvbiBpc0RvbmUoKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkYi5yZWFkeVN0YXRlID09PSAnZG9uZScgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gbmV4dChpc190aW1lb3V0KSB7XHJcblx0XHRcdFx0XHRcdGlmICghaXNfdGltZW91dCkge1xyXG5cdFx0XHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBkYi5yZXN1bHQgPyBmYWxzZSA6IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKFBpYW5vLmphbmVsYUFub25pbWEuaXNJRTEwT3JMYXRlcih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmICghd2luZG93LmluZGV4ZWREQikge1xyXG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiAvU2FmYXJpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIDEpO1xyXG5cdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBpc19wcml2YXRlID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcclxuXHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3QnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdFBpYW5vLmphbmVsYUFub25pbWEucmV0cnkoXHJcblx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGlzX3ByaXZhdGUgIT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhpc19wcml2YXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5rcnV4ID0ge1xyXG5cdHRlbTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0bGlnYWRvOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETztcclxuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xyXG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICdmYWxzZScgJiYgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gIT0gXCJwcmRcIikge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJyB8fCB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PSBcInByZFwiKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgXCJcIiwgLTEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETykgPT0gXCJmYWxzZVwiKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblx0b2J0ZW1TZWdtZW50YWNhbzogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoUGlhbm8ua3J1eC50ZW0oKSAmJiBQaWFuby5rcnV4LmxpZ2FkbygpKSB7XHJcblx0XHRcdHZhciBzZWdtZW50YWNvZXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykuc3BsaXQoJywnKTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50YWNvZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIHNlZ21lbnRhY29lc1tpXSwgc2VnbWVudGFjb2VzW2ldXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbiBcclxuUGlhbm8ubWV0cmljYXMgPSB7XHJcblx0ZW52aWFFdmVudG9zR0E6IGZ1bmN0aW9uKF9HQUFjYW8sIF9HQVJvdHVsbykgeyAvL1RPRE86IGFycXVpdm8gdGlueXBhc3MuanMsIGluc2VyaWRvIHBlbGEgUGlhbm8sIHV0aWxpemEgZXNzYSBmdW7Dp8Ojb1xyXG5cdFx0Y29uc3QgaXNQcm9kdWN0VmFsb3IgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChpc1Byb2R1Y3RWYWxvcilcclxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8nLCBfR0FBY2FvLCBfR0FSb3R1bG8sICx0cnVlXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubycsICdldmVudG9HQUFjYW8nOiBfR0FBY2FvLCAnZXZlbnRvR0FSb3R1bG8nOl9HQVJvdHVsb30pO1xyXG5cdH0sXHJcblxyXG5cdG1vbnRhUm90dWxvR0E6IGZ1bmN0aW9uKCkgeyAvL1RPRE86IGF0IFBpYW5vIGFzIHNldEV4cGVyaWVuY2UoKSB8IENoZWNrIG9uIG9sZCB0aW55IGJlZm9yZSByZW1vdmVcclxuXHRcdGlmKHdpbmRvdy5yZWdyYXNUaW55ICYmIHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSkge1xyXG5cdFx0XHRyZXR1cm4gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyByZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyBzdWJzZWdtZW50YWNhb1BpYW5vIDogcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XHJcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyBzdWJzZWdtZW50YWNhb1BpYW5vIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBcIiBcIjtcclxuXHR9LFxyXG5cdHNldExpbWl0ZUNvbnRhZ2VtOiBmdW5jdGlvbihtZXRyaWNhcykge1xyXG5cdFx0X0dBTGltaXRlID0gXCItXCI7XHJcblx0XHRfR0FDb250YWdlbSA9IFwiLVwiO1xyXG5cdFx0aWYoIW1ldHJpY2FzKSByZXR1cm47XHJcblx0XHRfR0FDb250YWdlbSA9IFwiXCIgKyBtZXRyaWNhcy52aWV3cztcclxuXHRcdGlmIChfR0FDb250YWdlbS5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRfR0FDb250YWdlbSA9IFwiMFwiICsgX0dBQ29udGFnZW07XHJcblx0XHR9XHJcblx0XHRfR0FMaW1pdGUgPSBtZXRyaWNhcy5ub21lRXhwZXJpZW5jaWEgK1wiIDogXCIrIG1ldHJpY2FzLm1heFZpZXdzO1xyXG5cdH0sXHJcblx0aWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyOiBmdW5jdGlvbihyZWdyYXMpIHtcclxuXHRcdHZhciBwYXNzYWdlbSA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUubWV0cmljYXMuRVZFTlRPX1NFTV9BQ0FPO1xyXG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSB7XHJcblx0XHRcdHBhc3NhZ2VtID0gcmVncmFzLmZsdXhvLmluZGV4T2YoXCJoYXJkd2FsbFwiKSAhPSAtMSA/ICdyZWdpc3Rlci1oYXJkd2FsbC1wYXNzb3UnIDogJ3JlZ2lzdGVyLWNvbnRhZ2VtLXBhc3NvdSc7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcGFzc2FnZW07XHJcblx0fSxcclxuXHRleGVjdXRhQXBvc1BhZ2V2aWV3OiBmdW5jdGlvbihleHBpcm91KSB7XHJcblx0XHRpZiAoIVBpYW5vLnZhcmlhdmVpcy5leGVjdXRvdVBhZ2V2aWV3KCkpIHtcclxuXHRcdFx0cmVncmFzVGlueS5mbHV4byA9IHdpbmRvdy50cENvbnRleHQgPyB0cENvbnRleHQudG9Mb3dlckNhc2UoKSA6ICctJztcclxuXHRcdFx0cmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSB3aW5kb3cubm9tZUV4cGVyaWVuY2lhID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA6ICcnO1xyXG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRMaW1pdGVDb250YWdlbShyZWdyYXNUaW55KTtcclxuXHRcdFx0aWYgKGV4cGlyb3UgPT0gZmFsc2UpIEdBLnNldEV2ZW50cyhQaWFuby5tZXRyaWNhcy5pZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXIocmVncmFzVGlueSksIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRcdGV4ZWN1dG91UGFnZXZpZXcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2V0YVZhcmlhdmVpczogZnVuY3Rpb24oaWRMb2dpbiwgdGlwb0xvZ2luLCBhc3NpbmF0dXJhTG9nYWRhKXtcclxuXHRcdFBheXdhbGxBbmFseXRpY3MuaWRMb2dpbkFzc2luYW50ZSA9IGlkTG9naW47XHJcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy50aXBvTG9naW5Bc3NpbmFudGUgPSB0aXBvTG9naW47XHJcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy5hc3NpbmF0dXJhTG9nYWRhID0gYXNzaW5hdHVyYUxvZ2FkYTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuUGlhbm8uYmFubmVyID0ge1xyXG5cdG1vc3RyYXJGb290ZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZvLWJhbm5lci1mb290ZXIuanNcIik7XHJcblx0fSxcclxuXHRtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhckF2YXRhckhlYWRlcjogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYXZhdGFyLWhlYWRlci1waWFuby5qc1wiKTtcclxuXHR9LFxyXG5cdGJvdHRvbUZpeGVkOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xyXG5cdFx0d2luZG93LmdsYkJhbm5lckJvdHRvbSA9IHBhcmFtcztcclxuXHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3N0eWxlcy9iYW5uZXItYm90dG9tLWZpeGVkLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc2NyaXB0cy9iYW5uZXItYm90dG9tLWZpeGVkLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhclNXRzogZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBjc3MgPSBgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zdHlsZXMvc3R5bGUuY3NzJz5gO1xyXG5cdFx0Y29uc3Qgc2NyaXB0SnMgPSBgaHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zY3JpcHQvYW51bmNpby1zd2cuanNgO1xyXG5cclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKGNzcyk7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoc2NyaXB0SnMpO1xyXG5cdH0sXHJcblx0bW9zdHJhckhpZ2hsaWdodFNhbGU6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3NjcmlwdHMvaGlnaGxpZ2h0LXNhbGUuanNcIik7XHJcblx0fSxcclxuXHRtb3N0cmFyU3Vic2NyaWJlQnV0dG9uVmFsb3I6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3ZhbG9yLXN1YnNjcmliZS1idXR0b24vXCIrdmVyc2FvK1wiL3NjcmlwdHMvc3Vic2NyaWJlLWJ1dHRvbi5qc1wiKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuUGlhbm8ucmVnaXN0ZXIgPSB7XHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL25vdmEtdGVsYS1yZWdpc3Rlci5qc1wiKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5oZWxwZXIgPSB7XHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbigpIHtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzY1ZDE5MzBhMGJkYTQ3NmJhOGQzYzI1YzUzNzFlYzNmL3BpYW5vL2hlbHBlci9yZWdpc3Rlci5qc1wiKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5wYXl3YWxsID0ge1xyXG5cdHJlZGlyZWNpb25hckJhcnJlaXJhOiBmdW5jdGlvbih1cmwpIHtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkJhcnJlaXJhXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7fSwgMTAwMCk7XHJcblx0fSxcclxuXHRzaG93OiBmdW5jdGlvbih0eXBlUGF5d2FsbCA9IG51bGwpIHtcclxuXHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnBheXdhbGwpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kJywgJ1BpYW5vLnBheXdhbGwuc2hvdycpXHJcblxyXG5cdFx0UGlhbm8udHlwZVBheXdhbGwgPSB0eXBlUGF5d2FsbDtcclxuXHRcclxuXHRcdGlmKCFQaWFuby5hY3RpdmVQYXl3YWxsKSB7XHJcblx0XHRcdGNvbnNvbGUud2FybignUGF5d2FsbCAtIElzIG5vdCBhdmFpYWJsZScpXHJcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcclxuXHRcdH0gZWxzZSB7IFxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdG5ldyBQYXl3YWxsQ3B0KCk7XHJcblx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdQYXl3YWxsIC0gRXJyb3Igb24gbG9hZCcpXHJcblx0XHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7IFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8udHJpZ2dlckFkdmVydGlzaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjbGVhckZvckFkcycpXHJcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbn07XHJcblxyXG5QaWFuby5jaGVja1BheXdhbGwgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgY291bnQgPSAwO1xyXG5cdFxyXG5cdGNvbnN0IGNoZWNrR2F0ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdGxldCBoYXNHYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhcnJlaXJhLXJlZ2lzdGVyLXBheXdhbGwsIC5wYXl3YWxsLWNwdCcpO1xyXG5cdFx0bGV0IGhhc1B1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdWItcmV0YW5ndWxvLTEgaWZyYW1lLCAjcHViLXJldGFuZ3Vsby0yIGlmcmFtZSwgI3B1Yi1mdWxsYmFubmVyLTEgaWZyYW1lJyk7XHJcblxyXG5cdFx0aWYoY291bnQgPiAyKSB7XHJcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xyXG5cdFx0XHRQaWFuby5hY3RpdmVQYXl3YWxsID0gZmFsc2U7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoY2hlY2tHYXRlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggKCAoaGFzR2F0ZSAmJiBQaWFuby5hY3RpdmVQYXl3YWxsKSB8fCBoYXNQdWIpIHx8IGNvdW50ID4gOCkgXHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoY2hlY2tHYXRlKTtcclxuXHJcblx0XHRjb3VudCsrO1xyXG5cdH0sIDEwMDApO1xyXG59O1xyXG5cclxuUGlhbm8ucmVnaXN0ZXJQYXl3YWxsID0geyBcclxuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbyA9IG51bGwsIHRpcG8gPSBudWxsKSB7XHJcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHRpcG87XHJcblxyXG5cdFx0aWYoIVBpYW5vLmFjdGl2ZVBheXdhbGwgfHwgKCF2ZXJzYW8gfHwgIVBpYW5vLnR5cGVQYXl3YWxsKSApIHtcclxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7IFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFxyXG5cdFx0XHRcdFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvcmVnaXN0ZXItcGF5d2FsbC1waWFuby5qc1wiLCBcclxuXHRcdFx0XHRkYXRhID0+IHsgXHJcblx0XHRcdFx0XHRpZihkYXRhLnN0YXR1cyAhPT0gMjAwKSB7IFxyXG5cdFx0XHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXHJcblx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihQaWFuby50eXBlUGF5d2FsbCA9PT0gJ3JlZ2lzdGVyJyB8fCBQaWFuby50eXBlUGF5d2FsbCA9PT0gJ2V4Y2x1c2l2bycgKSB7XHJcblx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XHJcblx0XHRcdH0gZWxzZSB7XHRcdFx0XHJcblx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQmFycmVpcmFcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uY29tdW5pY2FkbyA9IHtcclxuXHRtb3N0cmFySW5mb3JtYWNhbzogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9jb211bmljYWNhby1waWFuby5qc1wiKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5hZGJsb2NrID0ge1xyXG5cdG1vc3RyYXJBZEJsb2NrOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xyXG5cclxuXHRcdHBhcmFtcy5hc3NldHNQYXRoID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L2A7XHJcblx0XHRcclxuXHRcdHdpbmRvdy5nbGJBZGJsb2NrID0gcGFyYW1zO1xyXG5cclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3NjcmlwdHMvYWRibG9jay1waWFuby5qc1wiKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5ibG9xdWVpb3MgPSB7XHJcblx0bGliZXJhckVzYzogZnVuY3Rpb24oKSB7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vbGliZXJhVGVjbGFkby5qc1wiKTtcclxuXHR9LFxyXG5cdGJsb3F1ZWlhVmlld01vZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9ibG9xdWVpby9ibG9xdWVpYVZpZXdtb2RlLmpzXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuUGlhbm8ucGFyY2Vpcm8gPSB7XHJcblx0bW9zdHJhRm9vdGVyUGFyY2Vpcm86IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGFyY2Vpcm9zLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8uanNcIik7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uaW5hZGltcGxlbnRlID0ge1xyXG5cdGdldExpbmtBc3NpbmF0dXJhOiBmdW5jdGlvbihsaW5rKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpbmsubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGxpbmtbaV0ucmVsID09ICdhc3NpbmF0dXJhJykgcmV0dXJuIGxpbmtbaV0uaHJlZjtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby54bWxIdHRwUmVxdWVzdCA9IHtcclxuXHRnZXJhU2NyaXB0TmFQYWdpbmE6IGZ1bmN0aW9uKHVybFNjcmlwdCwgY2FsbGJhY2spIHtcclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybFNjcmlwdCk7XHJcblx0XHR4aHIuc2VuZCgpO1xyXG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZih0aGlzLnJlYWR5U3RhdGUgPT09IDQpe1xyXG5cdFx0XHRcdGlmKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHR2YXIgYXBwZW5kRGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdFx0XHRcdGFwcGVuZERlU2NyaXB0LmlubmVySFRNTCA9IHJlc3Bvc3RhO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHBlbmREZVNjcmlwdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIG5hIGZ1bsOnw6NvIGdlcmFyIHNjcmlwdCBuYSBww6FnaW5hLicsICd1cmw6ICcgKyB1cmxTY3JpcHRcclxuXHRcdFx0XHRcdFx0KyAnIFN0YXR1c0Vycm86ICcgKyB0aGlzLnN0YXR1c1xyXG5cdFx0XHRcdFx0XHQrICcgU3RhY2s6ICcgKyB0aGlzLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoY2FsbGJhY2spXHJcblx0XHRcdFx0Y2FsbGJhY2soeGhyKTsgXHJcblx0XHR9O1x0XHJcblx0fSxcclxuXHRmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogZnVuY3Rpb24oaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIHtcclxuXHRcdFxyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUsIGZhbHNlKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0XHJcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcclxuXHRcdFx0aWYoeGhyLnN0YXR1cyA9PSAyMDApe1xyXG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XHJcblx0XHRcdFx0dmFyIHNpdHVhY2FvUGFnYW1lbnRvID0gcmVzcEpzb24uc2l0dWFjYW9QYWdhbWVudG8udG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwic2l0dWFjYW9QYWdhbWVudG9cIiwgc2l0dWFjYW9QYWdhbWVudG9dKTtcclxuXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9IDAgJiYgUGlhbm8udmFyaWF2ZWlzLnN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUuaW5kZXhPZih4aHIuc3RhdHVzKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCBcIlN0YXR1cyBEZXNjb25oZWNpZG9cIiArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvOiBmdW5jdGlvbihnbGJpZCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY29kaWdvUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCk7XHJcblx0XHRpZihjb2RpZ29Qcm9kdXRvID09ICdlcnJvcicpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1widG9rZW4tYXV0ZW50aWNhY2FvXCI6IGdsYmlkLCBcImlwVXN1YXJpb1wiOiBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuSVAsIFwiY29kaWdvUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvfSk7XHJcblxyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsVmVyaWZpY2FMZWl0b3IsIGZhbHNlKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0eGhyLnNlbmQoZGF0YSk7XHJcblx0XHRcclxuXHRcdGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcclxuXHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCl7XHJcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHR2YXIgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3Bvc3RhKTtcclxuXHRcdFx0XHR2YXIgcmVzcG9zdGFEZVRlcm1vRGVVc28gPSBmYWxzZSwgcmVzcG9zdGFEZU1vdGl2byA9ICcnLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9ICcnO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubW90aXZvICE9IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdHJlc3Bvc3RhRGVNb3Rpdm8gPSByZXNwSnNvbi5tb3Rpdm8udG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi50ZW1UZXJtb0RlVXNvICE9IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gcmVzcEpzb24udGVtVGVybW9EZVVzbztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5saW5rICE9IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gUGlhbm8uaW5hZGltcGxlbnRlLmdldExpbmtBc3NpbmF0dXJhKHJlc3BKc29uLmxpbmspO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgaXNBdXRvcml6YWRvID0gUGlhbm8uYXV0ZW50aWNhY2FvLmlzQXV0b3JpemFkbyhyZXNwb3N0YURlVGVybW9EZVVzbywgcmVzcG9zdGFEZU1vdGl2bywgcmVzcEpzb24uYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xyXG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8ocmVzcEpzb24uYXV0b3JpemFkbywgcmVzcG9zdGFEZU1vdGl2bywgaXNBdXRvcml6YWRvLCByZXNwb3N0YURlVGVybW9EZVVzbyk7XHJcblx0XHRcdFx0dmFyIF9qc29uTGVpdG9yID0ge1xyXG5cdFx0XHRcdFx0XHRcImF1dG9yaXphZG9cIiA6IHJlc3BKc29uLmF1dG9yaXphZG8sXHJcblx0XHRcdFx0XHRcdFwibW90aXZvXCI6IHJlc3Bvc3RhRGVNb3Rpdm8sXHJcblx0XHRcdFx0XHRcdFwibG9nYWRvXCI6IGlzQXV0b3JpemFkbyxcclxuXHRcdFx0XHRcdFx0XCJ0ZW1UZXJtb0RlVXNvXCI6IHJlc3Bvc3RhRGVUZXJtb0RlVXNvLFxyXG5cdFx0XHRcdFx0XHRcImdsYmlkXCI6IGdsYmlkLFxyXG5cdFx0XHRcdFx0XHRcInByb2R1dG9cIjogUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCksXHJcblx0XHRcdFx0XHRcdFwiY29kUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvLFxyXG5cdFx0XHRcdFx0XHRcInV1aWRcIjogcmVzcEpzb24udXN1YXJpb0lkXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdF9qc29uTGVpdG9yID0gYnRvYShlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkoX2pzb25MZWl0b3IpKSk7XHJcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBfanNvbkxlaXRvciwgMSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRpZihQaWFuby5nb29nbGUuc2hvd1NhdmVTdWJzY3JpcHRpb24ocmVzcEpzb24pKXtcclxuXHRcdFx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzd2dTZXJ2aWNlID0gbmV3IFN3Z1NlcnZpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRzd2dTZXJ2aWNlLnNhdmVHbG9ib1N1YnNjcmlwdGlvbihnbGJpZCk7XHJcblx0XHRcdFx0XHRcdH0gY2F0Y2goZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBhbyBjaGFtYXIgYSBmdW7Dp8OjbyBzaG93U2F2ZVN1YnNjcmlwdGlvbiBkbyBBbGRlYmFyYW4uJywgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1VSTDogJyArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEdMQklEOiAnICsgZ2xiaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgRXJybzogJyArIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihyZXNwSnNvbi5hdXRvcml6YWRvID09IHRydWUpe1xyXG5cdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhyZXNwSnNvbi51c3VhcmlvSWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQVBJIGRlIGF1dG9yaXphY2FvIGRlIGFjZXNzb1wiLCB4aHIuc3RhdHVzICsgXCIgLSBcIiArIGdsYmlkKTtcclxuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5nb29nbGUgPSB7XHJcbiAgaXNBdXRob3JpemVkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZihzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpKXtcclxuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpLnN1YnNjcmlwdGlvblRva2VuLCBcIkNvbnRhIEdvb2dsZVwiLCBcIk8gR2xvYm9cIik7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZihIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5DUkVBVEVEX0dMT0JPSUQpKXtcclxuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5DUkVBVEVEX0dMT0JPSUQpLCBcIkNvbnRhIEdvb2dsZVwiLCBcIkdvb2dsZVwiKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG4gIH0sXHJcblxyXG4gIGlzU3BlY2lmaWNHb29nbGVVc2VyOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChQaWFuby5nb29nbGUuaXNBdXRob3JpemVkKCkpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0cnl7XHJcblx0XHRcdHZhciBvR2xvYm9CdXNpbmVzcyA9IG5ldyBPR2xvYm9CdXNpbmVzcygpO1xyXG5cdFx0XHRvR2xvYm9CdXNpbmVzcy52ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkKHN3Z0VudGl0bGVtZW50cyk7XHJcblx0XHR9IGNhdGNoKGVycm9yKSB7XHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiRXJybyBhbyBleGVjdXRhciBvIEFsZGViYXJhblwiLCBcIkVycm9yOiBcIiArIGVycm9yICsgXCIgLSBFbnRpdGxlbWVudHM6IFwiICsgc3dnRW50aXRsZW1lbnRzLmVudGl0bGVtZW50c1swXS5zdWJzY3JpcHRpb25Ub2tlbik7XHJcblx0XHR9XHRcdFx0XHJcblx0fSxcclxuXHJcblx0c2hvd1NhdmVTdWJzY3JpcHRpb246IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdGlmKCFzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSAmJiByZXNwb25zZS5tb3Rpdm8gPT09XCJBVVRPUklaQURPXCIgJiYgIUhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuU0FWRV9TVUJTQ1JJUFRJT04pKXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxufTtcclxuXHJcblBpYW5vLmF1dGVudGljYWNhbyA9IHtcclxuXHRpc0xvZ2Fkb0NhZHVuOiBmdW5jdGlvbihnbGJpZCwgdXRwKSB7XHJcblx0XHRpZiAoIWdsYmlkKSB7XHJcblx0XHRcdGlmICh1dHApIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGdsYmlkICE9ICcnO1xyXG5cdH0sXHJcblx0dmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvOiBmdW5jdGlvbihnbGJpZCwgdXRwKSB7XHJcblx0XHRpZiAoUGlhbm8uYXV0ZW50aWNhY2FvLmlzTG9nYWRvQ2FkdW4oZ2xiaWQsIHV0cCkpIHtcclxuXHRcdFx0aWYgKHV0cCkge1xyXG5cdFx0XHRcdHZhciBfbGVpdG9yID0gSlNPTi5wYXJzZShkZWNvZGVVUkkoYXRvYih1dHApKSk7XHJcblx0XHRcdFx0aWYgKGdsYmlkID09IF9sZWl0b3IuZ2xiaWQgJiYgKHR5cGVvZiBfbGVpdG9yLnByb2R1dG8gPT0gXCJ1bmRlZmluZWRcIiB8fCBfbGVpdG9yLnByb2R1dG8gPT0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpKSB7XHJcblx0XHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKF9sZWl0b3IuYXV0b3JpemFkbywgX2xlaXRvci5tb3Rpdm8sIF9sZWl0b3IubG9nYWRvLCBfbGVpdG9yLnRlbVRlcm1vRGVVc28pO1xyXG5cdFx0XHRcdFx0aWYoX2xlaXRvci5hdXRvcml6YWRvKXtcclxuXHRcdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhfbGVpdG9yLnV1aWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvKGdsYmlkKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGlzQXV0b3JpemFkbzogZnVuY3Rpb24odGVybW9EZVVzbywgbW90aXZvLCBhdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xyXG5cdFx0aWYgKGF1dG9yaXphZG8gfHwgbW90aXZvID09IFwiaW5kaXNwb25pdmVsXCIgfHwgdGVybW9EZVVzbyAhPSBmYWxzZSkge1xyXG5cdFx0XHRpZiAoYXV0b3JpemFkbyAmJiBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkgUGlhbm8ueG1sSHR0cFJlcXVlc3QuZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUoaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0ZGVmaW5lVXN1YXJpb1BpYW5vOmZ1bmN0aW9uKGF1dG9yaXphZG8sIG1vdGl2bywgbG9nYWRvLCB0ZW1UZXJtb0RlVXNvKXtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhdXRvcml6YWRvXCIsIGF1dG9yaXphZG9dKTtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJtb3Rpdm9cIiwgbW90aXZvXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibG9nYWRvXCIsIGxvZ2Fkb10pO1xyXG5cdFx0aWYodGVtVGVybW9EZVVzbyAhPSBcIiBcIilcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInRlbVRlcm1vXCIsIHRlbVRlcm1vRGVVc29dKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby51dGlsID0ge1xyXG5cdGlzU2VjdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCkgPT0gXCJzZWN0aW9uXCIgPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHR0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIlZhcmlhdmVsIHRpcG9Db250ZXVkb1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhXCIsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIlZhcmlhdmVsIG5vbWVQcm9kdXRvUGlhbm8gbmFvIGVzdGEgZGVmaW5pZGFcIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cdGV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XHJcblx0XHR2YXIgY2hhdmVzQ2FtcGFuaGEgPSBbJ3V0bV9tZWRpdW0nLCd1dG1fc291cmNlJ107XHJcblx0XHR2YXIgdmFsb3Jlc0NhbXBhbmhhID0gW107XHJcblxyXG5cdFx0Zm9yICh2YXIgaWR4UGFyYW1DYW1wYW5oYSA9IDA7IGlkeFBhcmFtQ2FtcGFuaGEgPCBjaGF2ZXNDYW1wYW5oYS5sZW5ndGg7IGlkeFBhcmFtQ2FtcGFuaGErKykge1xyXG5cdFx0XHR2YXIgY2hhdmVDYW1wYW5oYSA9IGNoYXZlc0NhbXBhbmhhW2lkeFBhcmFtQ2FtcGFuaGFdO1xyXG5cdFx0XHRpZiAodXJsLmluZGV4T2YoY2hhdmVDYW1wYW5oYSArICc9JykgIT0gLTEpIHtcclxuXHRcdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiW1xcPygmKV1cIiArIGNoYXZlQ2FtcGFuaGEgKyBcIj0oW14mI10qKVwiKTtcclxuXHRcdFx0XHR2YXIgdmFsb3JDYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XHJcblx0XHRcdFx0aWYodmFsb3JDYW1wYW5oYSl7XHJcblx0XHRcdFx0XHR2YWxvcmVzQ2FtcGFuaGEucHVzaCh2YWxvckNhbXBhbmhhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh2YWxvcmVzQ2FtcGFuaGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidXRtXCIsIHZhbG9yZXNDYW1wYW5oYS5qb2luKFwiO1wiKV0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHVybC5pbmRleE9mKCd1dG1fY2FtcGFpZ249JykgIT0gLTEpIHtcclxuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcInV0bV9jYW1wYWlnbj0oXFxcXHcrKVwiKTtcclxuXHRcdFx0dmFyIGNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcclxuXHRcdFx0aWYoY2FtcGFuaGEpe1xyXG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjYW1wYW5oYVwiLCBjYW1wYW5oYV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRpc09yaWdlbUJ1c2NhZG9yOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdFx0dmFyIHJlZ2V4Um9ib3MgPSBuZXcgUmVnRXhwKFwiKGlhX2FyY2hpdmVyKXwoR29vZ2xlYm90KXwoTWVkaWFwYXJ0bmVycy1Hb29nbGUpfChBZHNCb3QtR29vZ2xlKXwobXNuYm90KXwoWWFob28hIFNsdXJwKXwoWnlCb3JnKXwoQXNrIEplZXZlcy9UZW9tYSl8KGJpbmdib3QpfChjWGVuc2Vib3QpXCIpO1xyXG5cdFx0dmFyIGVoUm9ibyA9IHJlZ2V4Um9ib3MudGVzdCh1c2VyQWdlbnQpO1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImJ1c2NhZG9yXCIsIGVoUm9ib10pO1xyXG5cdFx0cmV0dXJuIGVoUm9ibztcclxuXHR9LFxyXG5cdG1vbnRhVXJsU3RnOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpICE9ICdwcmQnID8gJy1zdGcnIDogJyc7XHJcblx0fSxcclxuXHR0ZW1QYXJhbWV0cm9OYVVybDogZnVuY3Rpb24ocGFyYW1OYW1lKSB7XHJcblx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcclxuXHRcdHJldHVybiBwYXJhbWV0cm9zLmluZGV4T2YocGFyYW1OYW1lKSAhPSAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdGdldFZhbG9yUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtZXRybykge1xyXG5cdFx0aWYgKFBpYW5vLnV0aWwudGVtUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKSkge1xyXG5cdFx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcclxuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBwYXJhbWV0cm8gKyBcIj0oW14mI10qKVwiKTtcclxuXHRcdFx0cmV0dXJuIHBhcmFtZXRyb3MubWF0Y2gocmVnZXgpWzFdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFwic2VtIHBhcmFtZXRyb1wiO1xyXG5cdH0sXHJcblx0aXNEZWJ1ZzogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHO1xyXG5cdFx0dmFyIHZhbG9yUGFyYW1ldHJvID0gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKHBhcmFtZXRybyk7XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgXCJcIiwgLTEpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHKSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGlzRG9taW5pb09HbG9ibzogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiOi8vKC4qPykvXCIpLCB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpO1xyXG5cdFx0aWYgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcIm9nbG9ib1wiKSA+IC0xIHx8ICh1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJnbG9ib2lcIikgPiAtMSAmJiB1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJlZGdcIikgPT0gLTEpKSB7XHJcblx0XHRcdHJldHVybiB1cmwubWF0Y2gocmVnZXgpWzFdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH0sXHJcblx0Y2FsbGJhY2tNZXRlcjogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XHJcblx0XHRyZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xyXG5cdFx0UGlhbm8ubWV0cmljYXMuZXhlY3V0YUFwb3NQYWdldmlldyhmYWxzZSk7XHJcblx0fSxcclxuXHRjYWxsYmFja01ldGVyRXhwaXJlZDogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XHJcblx0XHRyZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xyXG5cdFx0UGlhbm8udmFyaWF2ZWlzLmlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkID0gdHJ1ZTtcclxuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcodHJ1ZSk7XHJcblx0fSxcclxuXHRnZXRXaW5kb3dMb2NhdGlvblNlYXJjaDogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdH0sXHJcblx0Z2V0V2luZG93TG9jYXRpb25IcmVmOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH0sXHJcblx0YWRpY2lvbmFyQ3NzOiBmdW5jdGlvbihjc3NQYXRoKXtcclxuXHRcdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRlLmlubmVySFRNTCA9IGNzc1BhdGg7XHJcblx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlLCBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XHJcblx0fSxcclxuXHRpc1JldmlzdGE6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgcmV2aXN0YXMgPSBbXCJlcG9jYVwiLCBcImF1dG8tZXNwb3J0ZVwiLCBcInZvZ3VlXCIsIFwiZ2xhbW91clwiLCBcImNhc2Etdm9ndWVcIiwgXCJtYXJpZS1jbGFpcmVcIiwgXCJjYXNhLWUtamFyZGltXCIsIFwicXVlbS1hY29udGVjZVwiLCBcImdsb2JvLXJ1cmFsXCIsIFwiZ3FcIiwgXCJtb25ldFwiLCAnY3Jlc2NlcicsJ2dhbGlsZXUnXTtcclxuXHRcdGlmKHJldmlzdGFzLmluZGV4T2YoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpID4gLTEpXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRyZWNhcnJlZ2FQaWFubzogZnVuY3Rpb24gKHRpcG9Db250ZXVkbywgaXNFeGNsdXNpdm8sIG5vbWVQcm9kdXRvKSB7XHJcblx0XHR3aW5kb3cudGlwb0NvbnRldWRvUGlhbm8gPSB0aXBvQ29udGV1ZG87XHJcblx0XHR3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPSBpc0V4Y2x1c2l2bztcclxuXHRcdHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID0gbm9tZVByb2R1dG87XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdy5yZWdyYXNUaW55ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSBcIlwiO1xyXG5cdFx0fVxyXG5cdFx0UGlhbm8uY29uc3RydXRvci5pbml0VHAoKTtcclxuXHRcdHRwLmV4cGVyaWVuY2UuZXhlY3V0ZSgpO1xyXG5cdH0sXHJcblx0aXNWYWxvcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09IFwidmFsb3JcIilcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5jb25maWd1cmFjYW8gPSB7XHJcblx0anNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzOiB7XHJcblx0XHQnaW50Jzoge1xyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidkWHU3ZHZGS1JpJyxcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcclxuXHRcdFx0J3NldFNhbmRCb3gnOid0cnVlJyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1kWHU3ZHZGS1JpJyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxyXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcclxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vJyxcclxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xyXG5cdFx0fSxcclxuXHRcdCdxbHQnOntcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXHJcblx0XHRcdCdzZXRTYW5kQm94JzonZmFsc2UnLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXHJcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJytQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkrJy9hdXRvcml6YWNhby1hY2Vzc28nLFxyXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxyXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXHJcblx0XHR9LFxyXG5cdFx0J3ByZCc6e1xyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6JyxcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcclxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcclxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGkuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nK1BpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSsnL2F1dG9yaXphY2FvLWFjZXNzbycsXHJcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tLycsXHJcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5cclxuUGlhbm8uY29uc3RydXRvciA9IHtcclxuXHRpbml0VHA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiSW5pY2lvIEluaXRUcFwiKTtcclxuXHRcdHRwID0gd2luZG93W1widHBcIl0gfHwgW107XHJcblx0XHR0cC5wdXNoKFtcInNldFRhZ3NcIiwgW1BpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpXV0pO1xyXG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRBaWRcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5pZFNhbmRib3hUaW55cGFzc1JldmlzdGFzXSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRBaWRcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5pZFNhbmRib3hUaW55cGFzc10pO1xyXG5cdFx0fVxyXG5cdFx0dHAucHVzaChbXCJzZXRTYW5kYm94XCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uc2V0U2FuZEJveF0pO1xyXG5cdFx0dHAucHVzaChbXCJzZXREZWJ1Z1wiLCBQaWFuby51dGlsLmlzRGVidWcoKV0pO1xyXG5cdFx0dmFyIGNsZWFuX3VybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25IcmVmKCkuc3BsaXQoXCI/XCIpWzBdO1xyXG5cdFx0dHAucHVzaChbXCJzZXRQYWdlVVJMXCIsY2xlYW5fdXJsXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldFpvbmVcIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJub21lUHJvZHV0b1wiLCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKV0pO1xyXG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5kZXRlY3RQcml2YXRlTW9kZShmdW5jdGlvbiAoaXNfcHJpdmF0ZSkge1xyXG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYW5vbmltb1wiLCBpc19wcml2YXRlXSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoUGlhbm8udmFyaWF2ZWlzLmlzQ29udGV1ZG9FeGNsdXNpdm8oKSkge1xyXG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiY29udGV1ZG9FeGNsdXNpdm9cIiwgdHJ1ZV0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAodHlwZW9mIHN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkpIHtcclxuXHRcdFx0UGlhbm8uZ29vZ2xlLmlzU3BlY2lmaWNHb29nbGVVc2VyKHN3Z0VudGl0bGVtZW50cyk7XHJcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSxcIkFVVE9SSVpBRE9cIiwgdHJ1ZSwgXCJcIik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLnZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50byhIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5HQ09NKSwgSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFBpYW5vLmtydXgub2J0ZW1TZWdtZW50YWNhbygpO1xyXG5cclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJiYW5uZXJDb250YWRvckxpZ2Fkb1wiLCB0cnVlXSk7XHJcblx0XHRQaWFuby51dGlsLmlzT3JpZ2VtQnVzY2Fkb3IoKSB8fCBQaWFuby51dGlsLmV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsKCk7XHJcblx0XHR0cC5wdXNoKFtcImFkZEhhbmRsZXJcIiwgXCJtZXRlckFjdGl2ZVwiLCBQaWFuby51dGlsLmNhbGxiYWNrTWV0ZXJdKTtcclxuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyRXhwaXJlZFwiLCBQaWFuby51dGlsLmNhbGxiYWNrTWV0ZXJFeHBpcmVkXSk7XHJcblx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJGaW0gSW5pdFRwXCIpO1xyXG5cdH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRQaWFub0V4cGVyaWVuY2VzKCl7XHJcblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcclxuXHRcdGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kJywgJ2xvYWRQaWFub0V4cGVyaWVuY2VzJylcclxuXHJcblx0dmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdGEudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcblx0YS5hc3luYyA9IHRydWU7XHJcblx0aWYoUGlhbm8udXRpbC5pc1JldmlzdGEoKSB8fCBQaWFuby51dGlsLmlzVmFsb3IoKSkge1xyXG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFub1JldmlzdGFzO1x0XHJcblx0fSBlbHNlIHtcclxuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm87XHJcblx0fVxyXG5cdHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XHJcblx0Yi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBiKTtcclxuXHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJTY3JpcHQgYWRpY2lvbmFkb1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGlhbm9Jbml0KCkgeyBcclxuXHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy50aW55KVxyXG5cdFx0Y29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAncGlhbm9Jbml0JylcclxuXHJcbiAgICBpZiAod2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCkgeyBcclxuXHRcdHdpbmRvdy5TV0cucHVzaCgoc3Vic2NyaXB0aW9ucykgPT4ge1xyXG5cdFx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZy1zdWJzY3JpcHRpb25zJywgc3Vic2NyaXB0aW9ucylcclxuXHJcblx0XHRcdHN3ZyA9IHN1YnNjcmlwdGlvbnM7XHJcblxyXG5cdFx0XHRzdWJzY3JpcHRpb25zLnNldE9uRW50aXRsZW1lbnRzUmVzcG9uc2UoZW50aXRsZW1lbnRzUHJvbWlzZSA9PiB7XHJcblx0XHRcdFx0ZW50aXRsZW1lbnRzUHJvbWlzZS50aGVuKGVudGl0bGVtZW50cyA9PiB7IFxyXG5cdFx0XHRcdFx0d2luZG93LnN3Z0VudGl0bGVtZW50cyA9IGVudGl0bGVtZW50cztcclxuXHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gU1dHXCIsIFwiRW50aXRsZW1lbnRzIHJlY2ViaWRvc1wiKTtcclxuXHJcblx0XHRcdFx0XHRpZiAod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoUGlhbm8gIT09ICd1bmRlZmluZWQnKXtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xyXG5cdFx0XHRcdFx0XHRcdGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiUGlhbm8gbmFvIGZvaSBjYXJyZWdhZGEgY29ycmV0YW1lbnRlIVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBHQS5zZXRFdmVudHNFcnJvcihcIkVudGl0bGVtZW50cyBuw6NvIGNhcnJlZ2Fkb1wiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XHJcbiAgICAgICAgICAgIGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LnRpbnlDcHQuUGlhbm8uY2hlY2tQYXl3YWxsKCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRpbnlJbml0KCkge1xyXG5cdFRpbnkuc2V0UGlhbm8oUGlhbm8pOyBcclxuICAgIGNvbnN0IFN3ZyA9IG5ldyBTd2dNb2R1bGUoKTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IFN3Zy5pbml0KCk7XHJcblx0fVxyXG5cdGNhdGNoKGUpIHsgY29uc29sZS5lcnJvcihlKSB9XHJcblxyXG5cdHBpYW5vSW5pdCgpOyBcclxufTtcclxuXHJcbnRpbnlJbml0KCk7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9