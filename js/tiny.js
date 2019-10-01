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

/***/ "./app/mocks/products/products-id.js":
/*!*******************************************!*\
  !*** ./app/mocks/products/products-id.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony default export */ __webpack_exports__["default"] = ({
    "epoca": {
      "cod_prod": "epoca",
      "id": 6612
    },
    "auto-esporte": {
      "cod_prod": "auto-esporte",
      "id": 6613
    },
    "vogue": {
      "cod_prod": "vogue",
      "id": 6614
    },
    "glamour": {
      "cod_prod": "glamour",
      "id": 6616
    },
    "casa-vogue": {
      "cod_prod": "casa-vogue",
      "id": 6610
    },
    "marie-claire": {
      "cod_prod": "marie-claire",
      "id": 6609
    },
    "casa-e-jardim": {
      "cod_prod": "casa-jardim",
      "id": 6697
    },
    "quem-acontece": {
      "cod_prod": "quem",
      "id": 6697
    },
    "epoca-negocios": {
      "cod_prod": "epoca-negocios",
      "id": 6697
    },
    "globo-rural": {
      "cod_prod": "globo-rural",
      "id": 6697
    },
    "pegn": {
      "cod_prod": "pequenas-empresas",
      "id": 6697
    },
    "galileu": {
      "cod_prod": "galileu",
      "id": 6697
    },
    "crescer": {
      "cod_prod": "crescer",
      "id": 6697
    },
    "gq": {
      "cod_prod": "gq",
      "id": 6697
    },
    "monet": {
      "cod_prod": "monet",
      "id": 6618
    },
    "oglobo": {
      "cod_prod": "OG03",
      "id": 3981
    },
    "blogs": {
      "cod_prod": "OG03",
      "id": 3981
    },
    "kogut": {
      "cod_prod": "OG03",
      "id": 3981
    },
    "acervo": {
      "cod_prod": "OG04",
      "id": 3981
    },
    "jornaldigital": {
      "cod_prod": "OG01",
      "id": 3981
    },
    "valor": {
      "cod_prod": "valordigital",
      "id": 6668
    }
  });
  
  /***/ }),
  
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
  /* harmony import */ var _mocks_products_products_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/products/products-id */ "./app/mocks/products/products-id.js");
  
  
  
  
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
            name: this.productName,
            id: this.productId
          }
        };
        window.tinyCpt = window.tinyCpt ? Object.assign(productsSettings, window.tinyCpt) : productsSettings;
      }
    }, {
      key: "isProductValor",
      get: function get() {
        return this.productName && this.productName === 'valor' ? true : false;
      }
    }, {
      key: "productId",
      get: function get() {
        return typeof _mocks_products_products_id__WEBPACK_IMPORTED_MODULE_2__["default"][this.productName] !== 'undefined' && typeof _mocks_products_products_id__WEBPACK_IMPORTED_MODULE_2__["default"][this.productName].id !== 'undefined' ? _mocks_products_products_id__WEBPACK_IMPORTED_MODULE_2__["default"][this.productName].id : null;
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
        var serviceId = window.tinyCpt.Product.id;
        var str = '';
        var urlReturn = '';
  
        if (!this.debug && this.Piano.isDefined) {
          urlReturn = encodeURIComponent(urlValidaUsuarioBarramento + '?codigoProduto=' + this.Piano.content.variaveis.getCodigoProduto() + '&serviceId=' + serviceId + '&ambienteUtilizado=' + window.ambienteUtilizadoPiano + '&nomeProduto=' + this.Piano.content.variaveis.getNomeProduto() + '&urlRetorno=' + uri);
  
          if (type === 'register') {
            str = "".concat(this.domain, "cadastro/").concat(serviceId, "?url=").concat(urlReturn);
          } else {
            str = "".concat(this.domain, "login/").concat(serviceId, "?url=").concat(urlReturn);
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
        'urlVerificaLeitor': 'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/' + window.tinyCpt.Product.id + '/autorizacao-acesso',
        'urlDominioPaywall': 'https://assinatura.globostg.globoi.com/',
        'urlDominioSiteOGlobo': '' + Piano.util.isDominioOGlobo() + '/'
      },
      'qlt': {
        'idSandboxTinypass': 'GTCopIDc5z',
        'idSandboxTinypassRevistas': 'VnaP3rYVKc',
        'setSandBox': 'false',
        'urlSandboxPiano': 'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
        'urlVerificaLeitor': 'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/' + window.tinyCpt.Product.id + '/autorizacao-acesso',
        'urlDominioPaywall': 'https://assinatura.globostg.globoi.com/',
        'urlDominioSiteOGlobo': '' + Piano.util.isDominioOGlobo() + '/'
      },
      'prd': {
        'idSandboxTinypass': 'GTCopIDc5z',
        'idSandboxTinypassRevistas': 'VnaP3rYVKc',
        'setSandBox': 'false',
        'urlSandboxPiano': 'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
        'urlVerificaLeitor': 'https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/' + window.tinyCpt.Product.id + '/autorizacao-acesso',
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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwtZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJGYiIsImRhdGEiLCJkZWJ1ZyIsIndpbmRvdyIsInRpbnlDcHQiLCJkaXNhYmxlZCIsImZiIiwiaGFzUGl4ZWwiLCJwaXhlbCIsIm5hbWUiLCJpc0RlZmluZWQiLCJmYnEiLCJHQSIsImdhIiwiUHJvZHVjdHMiLCJQcm9kdWN0c01vZHVsZSIsImRhdGFMYXllciIsImlzUHJvZHVjdFZhbG9yIiwiX2dhcSIsImFjdGlvbiIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkhlbHBlcnMiLCJwcm9wIiwiY19uYW1lIiwidmFsdWUiLCJleHBpcmVkYXlzIiwiZXhkYXRlIiwiRGF0ZSIsImhvc3RuYW1lIiwibG9jYXRpb24iLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRvY3VtZW50IiwiY29va2llIiwiZXNjYXBlIiwidG9VVENTdHJpbmciLCJzcGxpdCIsInJldmVyc2UiLCJtYXRjaCIsIlJlZ0V4cCIsImNvb2tpZVRpbnkiLCJ1bmVzY2FwZSIsInRvU3RyaW5nIiwiUGlhbm8iLCJjb250ZW50Iiwic2V0RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VOYW1lIiwiZXhwZXJpZW5jZSIsInJlZ3Jhc1RpbnkiLCJub21lRXhwZXJpZW5jaWEiLCJzdWJzZWdtZW50YWNhb1BpYW5vIiwic2V0Q29va2llIiwidmFyaWF2ZWlzIiwiY29uc3RhbnRlIiwiVVRQIiwicHJvZHVjdE5hbWUiLCJub21lUHJvZHV0b1BpYW5vIiwicHJvZHVjdHNTZXR0aW5ncyIsIlByb2R1Y3QiLCJpZCIsInByb2R1Y3RJZCIsIk9iamVjdCIsImFzc2lnbiIsInByb2R1Y3RzSWQiLCJTd2ciLCJTV0ciLCJzd2dFbnRpdGxlbWVudHMiLCJzd2ciLCJsb2NhbFByb2R1Y3RQaWFubyIsImhhc1Byb2R1Y3RKU09OIiwicHJvZHVjdEpTT04iLCJlbEhlYWQiLCJoZWFkIiwic2V0R2xvYmFsU1dHIiwiZ2xvYmFsIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyaW5nIiwidXRtc1Byb3BzIiwiZ2xiUGF5d2FsbCIsInV0bXMiLCJmb3JFYWNoIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwic2V0Iiwic3Vic2NyaWJlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldFByb2R1Y3RzIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZmlsdGVyIiwicGlhbm9Qcm9kdWN0TmFtZSIsIm9iaiIsInByb3BzVG9SZW1vdmUiLCJuZXdPYmoiLCJlbGVtZW50IiwiZ2V0UHJvZHVjdCIsInJlbW92ZVByb3BlcnRpZXMiLCJrZXlzIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcmt1cFRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lckhUTUwiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJzcmMiLCJ1cmxQcm9kIiwidXJsU3RnIiwiaXNQcm9kdWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0TWFya3VwIiwic2V0U3dnU2NyaXB0Iiwic2V0QWxkZWJhcmFuU2NyaXB0IiwidGVzdFNXRyIsIlRpbnkiLCJoYXNQYXl3YWxsIiwidHAiLCJQYXl3YWxsQW5hbHl0aWNzIiwic2V0R2xvYmFsVGlueSIsInNldEdsb2JhbCIsImluaXQiLCJkZWZhdWx0U2V0dGluZ3MiLCJ0aW55IiwicGF5d2FsbCIsImFtYmllbnRlVXRpbGl6YWRvUGlhbm8iLCJQYXl3YWxsR0FNb2R1bGUiLCJQaWFub01vZHVsZSIsIkdBTW9kdWxlIiwibWV0cmljcyIsInBheXdhbGxUeXBlIiwiX1BpYW5vIiwic2V0RXZlbnRzIiwiUlRJRVgiLCJyZXNldFV0cCIsImRhdGFzZXQiLCJnYVJlc2V0dXRwIiwiaW1hZ2VUb3AiLCJnYUltYWdlUG9zaXRpb24iLCJnYUxhYmVsIiwiZXZlbnQiLCJldmVudG9HQUNhdGVnb3JpYSIsImV2ZW50b0dBQWNhbyIsImdhQWN0aW9uIiwiZXZlbnRvR0FSb3R1bG8iLCJldmVudG9HQVZhbG9yIiwiZXZlbnRvR0FJbnRlcmFjYW8iLCJzZXREYXRhbGF5ZXIiLCJ0eXBlUGF5d2FsbCIsIlBheXdhbGxDcHQiLCJTd2dNb2R1bGUiLCJGQiIsIkZiTW9kdWxlIiwiZG9tYWluIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsIlBheXdhbGwiLCJjYWxsYmFjayIsInRlbXBsYXRlU2V0dGluZ3MiLCJ0ZW1wbGF0ZSIsImFzc2V0c1BhdGgiLCJkaXNwbGF5IiwicHJvZHVjdENsYXNzIiwidGl0bGUiLCJ0YXJnZXRCbGFuayIsInRvcE1vYmkiLCJ0b3BEZXNrIiwidG9wTGluayIsImxlZnRNb2JpIiwibGVmdERlc2siLCJsZWZ0TGluayIsInJpZ2h0TW9iaSIsInJpZ2h0RGVzayIsInJpZ2h0TGluayIsImhpZGVMb2dpbkFyZWEiLCJsb2dpblRleHQiLCJsb2dpblByZVRleHQiLCJsb2dpblRhZyIsImdldFVybExvZ2luUmVnaXN0ZXIiLCJjbGVhckxvZ2luQXJlYSIsInNldERlYnVnVGVtcGxhdGVTZXR0aW5ncyIsImVsQm9keSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJlbENwdCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRFbFdyYXBwZXIiLCJyZW1vdmUiLCJlbFRvUmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImJvZHkiLCJib2R5QWRqdXN0IiwicmVtb3ZlRWxlbWVudHMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjc3NNaW5pZmllZCIsImFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXl3YWxsTG9hZCIsImVsQ3B0V3JhcCIsInNldFRpbWVvdXQiLCJlbEJvZHlIZWlnaHQiLCJpbm5lckhlaWdodCIsImVsQ3B0V3JhcEhlaWdodCIsIm9mZnNldEhlaWdodCIsImN1cnJlbnRUb3AiLCJNYXRoIiwiYWJzIiwidG9wV2l0aEZ1bGxFbGVtZW50IiwidG9wIiwib3BhY2l0eSIsInpJbmRleCIsImV2dFdoZWVsIiwiZXZ0VG91Y2giLCJhY3RpdmVFdmVudHMiLCJzZXRQaXhlbFR5cGUiLCJjbGlja1RhcmdldHMiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzTG9naW4iLCJCb29sZWFuIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwiaXNVcmxTd2ciLCJpbmNsdWRlcyIsIm5vdEJsYW5rIiwiaHJlZlRhcmdldCIsInRyaWdnZXIiLCJzZXRVdG1zIiwiaHJlZiIsIm9wZW4iLCJiaW5kIiwibmV3dG9wIiwic3RlcCIsIm11bHRpcGxpZXIiLCJkZWx0YVkiLCJlbFRvcCIsInRvdWNoc3RhcnRZIiwidG91Y2hlbmRZIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5ZIiwiZGlmZiIsInVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvIiwidXJpIiwic2VydmljZUlkIiwic3RyIiwidXJsUmV0dXJuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0Q29kaWdvUHJvZHV0byIsImdldE5vbWVQcm9kdXRvIiwiZGVsYXlUaW1lciIsImNyZWF0ZVRlbXBsYXRlIiwidGVtcGxhdGVWYXJzIiwiVGlueU1vZHVsZSIsInNldEdsb2JhbFZhcnMiLCJhY3RpdmVQYXl3YWxsIiwiYW1iaWVudGVzQWNlaXRvcyIsInN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvIiwic3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkIiwiR0NPTSIsIkFNQklFTlRFIiwiU0FWRV9TVUJTQ1JJUFRJT04iLCJDUkVBVEVEX0dMT0JPSUQiLCJHTE9CT0lEX01FU1NBR0UiLCJtZXRyaWNhcyIsIkVWRU5UT19TRU1fQUNBTyIsIkVSUk8iLCJrcnV4IiwiU0VHTUVOVEFDT0VTIiwiS1JVWExJR0FETyIsInV0aWwiLCJJUCIsIkRFQlVHIiwiaXNDb250ZXVkb0V4Y2x1c2l2byIsImNvbnRldWRvRXhjbHVzaXZvIiwiZ2V0QW1iaWVudGVQaWFubyIsImluZGV4T2YiLCJnZXRWYWxvclBhcmFtZXRyb05hVXJsIiwiZ2V0Q29va2llIiwiZ2V0VGlwb0NvbnRldWRvUGlhbm8iLCJ0aXBvQ29udGV1ZG9QaWFubyIsImV4ZWN1dG91UGFnZXZpZXciLCJzZXRFdmVudHNFcnJvciIsIm5vbWVQcm9kdXRvIiwiYXV0ZW50aWNhY2FvIiwiZGVmaW5lVXN1YXJpb1BpYW5vIiwiamFuZWxhQW5vbmltYSIsInJldHJ5IiwiaXNEb25lIiwibmV4dCIsImN1cnJlbnRfdHJpYWwiLCJtYXhfcmV0cnkiLCJpc190aW1lb3V0IiwiaXNJRTEwT3JMYXRlciIsInVzZXJfYWdlbnQiLCJ1YSIsImV4ZWMiLCJwYXJzZUludCIsImRldGVjdFByaXZhdGVNb2RlIiwiaXNfcHJpdmF0ZSIsIndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtIiwiVEVNUE9SQVJZIiwiZSIsImluZGV4ZWREQiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYiIsInJlYWR5U3RhdGUiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInRlbSIsImdldEl0ZW0iLCJsaWdhZG8iLCJwYXJhbWV0cm8iLCJ2YWxvclBhcmFtZXRybyIsIm9idGVtU2VnbWVudGFjYW8iLCJzZWdtZW50YWNvZXMiLCJpIiwiZW52aWFFdmVudG9zR0EiLCJfR0FBY2FvIiwiX0dBUm90dWxvIiwibW9udGFSb3R1bG9HQSIsInNldExpbWl0ZUNvbnRhZ2VtIiwiX0dBTGltaXRlIiwiX0dBQ29udGFnZW0iLCJ2aWV3cyIsIm1heFZpZXdzIiwiaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyIiwicmVncmFzIiwicGFzc2FnZW0iLCJmbHV4byIsImV4ZWN1dGFBcG9zUGFnZXZpZXciLCJleHBpcm91IiwidHBDb250ZXh0Iiwic2V0YVZhcmlhdmVpcyIsImlkTG9naW4iLCJ0aXBvTG9naW4iLCJhc3NpbmF0dXJhTG9nYWRhIiwiaWRMb2dpbkFzc2luYW50ZSIsInRpcG9Mb2dpbkFzc2luYW50ZSIsImJhbm5lciIsIm1vc3RyYXJGb290ZXIiLCJ2ZXJzYW8iLCJhZGljaW9uYXJDc3MiLCJtb250YVVybFN0ZyIsInhtbEh0dHBSZXF1ZXN0IiwiZ2VyYVNjcmlwdE5hUGFnaW5hIiwibW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlciIsIm1vc3RyYXJBdmF0YXJIZWFkZXIiLCJib3R0b21GaXhlZCIsInBhcmFtcyIsImdsYkJhbm5lckJvdHRvbSIsIm1vc3RyYXJTV0ciLCJjc3MiLCJzY3JpcHRKcyIsIm1vc3RyYXJIaWdobGlnaHRTYWxlIiwibW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yIiwicmVnaXN0ZXIiLCJtb3N0cmFyQmFycmVpcmEiLCJoZWxwZXIiLCJyZWRpcmVjaW9uYXJCYXJyZWlyYSIsInNob3ciLCJ3YXJuIiwidHJpZ2dlckFkdmVydGlzaW5nIiwiZXJyb3IiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjaGVja1BheXdhbGwiLCJjaGVja0dhdGUiLCJoYXNHYXRlIiwiaGFzUHViIiwicmVnaXN0ZXJQYXl3YWxsIiwidGlwbyIsInN0YXR1cyIsImNvbXVuaWNhZG8iLCJtb3N0cmFySW5mb3JtYWNhbyIsImFkYmxvY2siLCJtb3N0cmFyQWRCbG9jayIsImdsYkFkYmxvY2siLCJibG9xdWVpb3MiLCJsaWJlcmFyRXNjIiwiYmxvcXVlaWFWaWV3TW9kZSIsInBhcmNlaXJvIiwibW9zdHJhRm9vdGVyUGFyY2Vpcm8iLCJpbmFkaW1wbGVudGUiLCJnZXRMaW5rQXNzaW5hdHVyYSIsImxpbmsiLCJyZWwiLCJ1cmxTY3JpcHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb3N0YSIsInJlc3BvbnNlVGV4dCIsImFwcGVuZERlU2NyaXB0IiwiYXBwZW5kQ2hpbGQiLCJzdGF0dXNUZXh0IiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXNwSnNvbiIsInBhcnNlIiwic2l0dWFjYW9QYWdhbWVudG8iLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvIiwiZ2xiaWQiLCJjb2RpZ29Qcm9kdXRvIiwiY29uZmlndXJhY2FvIiwianNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzIiwidXJsVmVyaWZpY2FMZWl0b3IiLCJyZXNwb3N0YURlVGVybW9EZVVzbyIsInJlc3Bvc3RhRGVNb3Rpdm8iLCJtb3Rpdm8iLCJ0ZW1UZXJtb0RlVXNvIiwiaXNBdXRvcml6YWRvIiwiYXV0b3JpemFkbyIsIl9qc29uTGVpdG9yIiwidXN1YXJpb0lkIiwiYnRvYSIsImVuY29kZVVSSSIsImdvb2dsZSIsInNob3dTYXZlU3Vic2NyaXB0aW9uIiwic3dnU2VydmljZSIsIlN3Z1NlcnZpY2UiLCJzYXZlR2xvYm9TdWJzY3JpcHRpb24iLCJpc0F1dGhvcml6ZWQiLCJnZXRFbnRpdGxlbWVudEZvclNvdXJjZSIsInN1YnNjcmlwdGlvblRva2VuIiwiaXNTcGVjaWZpY0dvb2dsZVVzZXIiLCJvR2xvYm9CdXNpbmVzcyIsIk9HbG9ib0J1c2luZXNzIiwidmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZCIsImVudGl0bGVtZW50cyIsInJlc3BvbnNlIiwiZW5hYmxlc1RoaXMiLCJpc0xvZ2Fkb0NhZHVuIiwidXRwIiwidmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvIiwiX2xlaXRvciIsImRlY29kZVVSSSIsImF0b2IiLCJwcm9kdXRvIiwibG9nYWRvIiwidXVpZCIsInRlcm1vRGVVc28iLCJpc1NlY3Rpb24iLCJ0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMiLCJleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCIsImdldFdpbmRvd0xvY2F0aW9uU2VhcmNoIiwiY2hhdmVzQ2FtcGFuaGEiLCJ2YWxvcmVzQ2FtcGFuaGEiLCJpZHhQYXJhbUNhbXBhbmhhIiwiY2hhdmVDYW1wYW5oYSIsInJlZ2V4IiwidmFsb3JDYW1wYW5oYSIsImpvaW4iLCJjYW1wYW5oYSIsImlzT3JpZ2VtQnVzY2Fkb3IiLCJyZWdleFJvYm9zIiwiZWhSb2JvIiwidGVtUGFyYW1ldHJvTmFVcmwiLCJwYXJhbU5hbWUiLCJwYXJhbWV0cm9zIiwiaXNEZWJ1ZyIsImlzRG9taW5pb09HbG9ibyIsImdldFdpbmRvd0xvY2F0aW9uSHJlZiIsImNhbGxiYWNrTWV0ZXIiLCJtZXRlckRhdGEiLCJjYWxsYmFja01ldGVyRXhwaXJlZCIsImNzc1BhdGgiLCJpbnNlcnRCZWZvcmUiLCJsYXN0Q2hpbGQiLCJpc1JldmlzdGEiLCJyZXZpc3RhcyIsInJlY2FycmVnYVBpYW5vIiwidGlwb0NvbnRldWRvIiwiaXNFeGNsdXNpdm8iLCJjb25zdHJ1dG9yIiwiaW5pdFRwIiwiZXhlY3V0ZSIsImlzVmFsb3IiLCJpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzIiwiaWRTYW5kYm94VGlueXBhc3MiLCJzZXRTYW5kQm94IiwiY2xlYW5fdXJsIiwibG9hZFBpYW5vRXhwZXJpZW5jZXMiLCJhIiwiYXN5bmMiLCJ1cmxTYW5kYm94UGlhbm9SZXZpc3RhcyIsInVybFNhbmRib3hQaWFubyIsImIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJwaWFub0luaXQiLCJzdWJzY3JpcHRpb25zIiwic2V0T25FbnRpdGxlbWVudHNSZXNwb25zZSIsImVudGl0bGVtZW50c1Byb21pc2UiLCJ0aW55SW5pdCIsInNldFBpYW5vIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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MEVBQXFCOzs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFD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IG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiZXBvY2FcIjoge1xyXG4gICAgXCJjb2RfcHJvZFwiOiBcImVwb2NhXCIsXHJcbiAgICBcImlkXCI6IDY2MTJcclxuICAgIH0sXHJcbiAgICBcImF1dG8tZXNwb3J0ZVwiOiB7XHJcbiAgICBcImNvZF9wcm9kXCI6IFwiYXV0by1lc3BvcnRlXCIsXHJcbiAgICBcImlkXCI6IDY2MTNcclxuICAgIH0sXHJcbiAgICBcInZvZ3VlXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJ2b2d1ZVwiLFxyXG4gICAgXCJpZFwiOiA2NjE0XHJcbiAgICB9LFxyXG4gICAgXCJnbGFtb3VyXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJnbGFtb3VyXCIsXHJcbiAgICBcImlkXCI6IDY2MTZcclxuICAgIH0sXHJcbiAgICBcImNhc2Etdm9ndWVcIjoge1xyXG4gICAgXCJjb2RfcHJvZFwiOiBcImNhc2Etdm9ndWVcIixcclxuICAgIFwiaWRcIjogNjYxMFxyXG4gICAgfSxcclxuICAgIFwibWFyaWUtY2xhaXJlXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJtYXJpZS1jbGFpcmVcIixcclxuICAgIFwiaWRcIjogNjYwOVxyXG4gICAgfSxcclxuICAgIFwiY2FzYS1lLWphcmRpbVwiOiB7XHJcbiAgICBcImNvZF9wcm9kXCI6IFwiY2FzYS1qYXJkaW1cIixcclxuICAgXCJpZFwiOiA2Njk3XHJcbiAgICB9LFxyXG4gICAgXCJxdWVtLWFjb250ZWNlXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJxdWVtXCIsXHJcbiAgICBcImlkXCI6IDY2OTdcclxuICAgIH0sXHJcbiAgICBcImVwb2NhLW5lZ29jaW9zXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJlcG9jYS1uZWdvY2lvc1wiLFxyXG4gICAgXCJpZFwiOiA2Njk3XHJcbiAgICB9LFxyXG4gICAgXCJnbG9iby1ydXJhbFwiOiB7XHJcbiAgICBcImNvZF9wcm9kXCI6IFwiZ2xvYm8tcnVyYWxcIixcclxuICAgIFwiaWRcIjogNjY5N1xyXG4gICAgfSxcclxuICAgIFwicGVnblwiOiB7XHJcbiAgICBcImNvZF9wcm9kXCI6IFwicGVxdWVuYXMtZW1wcmVzYXNcIixcclxuICAgIFwiaWRcIjogNjY5N1xyXG4gICAgfSxcclxuICAgIFwiZ2FsaWxldVwiOiB7XHJcbiAgICBcImNvZF9wcm9kXCI6IFwiZ2FsaWxldVwiLFxyXG4gICAgXCJpZFwiOiA2Njk3XHJcbiAgICB9LFxyXG4gICAgXCJjcmVzY2VyXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJjcmVzY2VyXCIsXHJcbiAgICBcImlkXCI6IDY2OTdcclxuICAgIH0sXHJcbiAgICBcImdxXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJncVwiLFxyXG4gICAgXCJpZFwiOiA2Njk3XHJcbiAgICB9LFxyXG4gICAgXCJtb25ldFwiOiB7XHJcbiAgICBcImNvZF9wcm9kXCI6IFwibW9uZXRcIixcclxuICAgIFwiaWRcIjogNjYxOFxyXG4gICAgfSxcclxuICAgIFwib2dsb2JvXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJPRzAzXCIsXHJcbiAgICBcImlkXCI6IDM5ODFcclxuICAgIH0sXHJcbiAgICBcImJsb2dzXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJPRzAzXCIsXHJcbiAgICBcImlkXCI6IDM5ODFcclxuICAgIH0sXHJcbiAgICBcImtvZ3V0XCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJPRzAzXCIsXHJcbiAgICBcImlkXCI6IDM5ODFcclxuICAgIH0sXHJcbiAgICBcImFjZXJ2b1wiOiB7XHJcbiAgICBcImNvZF9wcm9kXCI6IFwiT0cwNFwiLFxyXG4gICAgXCJpZFwiOiAzOTgxXHJcbiAgICB9LFxyXG4gICAgXCJqb3JuYWxkaWdpdGFsXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJPRzAxXCIsXHJcbiAgICBcImlkXCI6IDM5ODFcclxuICAgIH0sXHJcbiAgICBcInZhbG9yXCI6IHtcclxuICAgIFwiY29kX3Byb2RcIjogXCJ2YWxvcmRpZ2l0YWxcIixcclxuICAgIFwiaWRcIjogNjY2OFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmIge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZiID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNEZWZpbmVkKCkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGZicSAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBpeGVsVHlwZSgpIHtcclxuICAgICAgICBpZih0aGlzLmRpc2FibGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1BpeGVsID0gKHR5cGVvZiB0aGlzLmZiLnBpeGVsLm5hbWUgIT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZmIucGl4ZWwubmFtZSA6IG51bGw7IFxyXG5cclxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZCAmJiBoYXNQaXhlbCl7XHJcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MTAyNzAwMzk1MjA2MzQnKTtcclxuICAgICAgICAgICAgZmJxKCd0cmFja1NpbmdsZScsICc0MTAyNzAwMzk1MjA2MzQnLCB0aGlzLmZiLnBpeGVsLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQSAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcuZ2E7XHJcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRHbG9iYWxWYXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyICB8fCBbXTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvciAmJiB0eXBlb2YgX2dhcSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgIHx8IFtdOyAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRzKGFjdGlvbiwgbGFiZWwsIGNhdGVnb3J5ID0gJ1BpYW5vJykge1xyXG5cclxuXHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnbG9nLWdhLWV2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxyXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCAsdHJ1ZV0pO1xyXG5cdFx0XHJcblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiBjYXRlZ29yeSwgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRFdmVudHNFcnJvcihhY3Rpb24sIGxhYmVsKSB7XHJcblx0XHRpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcclxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8gRXJybycsIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XHJcblxyXG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vIEVycm8nLCAnZXZlbnRvR0FBY2FvJzogYWN0aW9uLCAnZXZlbnRvR0FSb3R1bG8nOmxhYmVsfSk7XHJcblx0fVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xyXG5cclxuICAgIHN0YXRpYyBpc0RlZmluZWQocHJvcCkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHByb3AgIT09ICd1bmRlZmluZWQnKSA/IHRydWU6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb29raWUoY19uYW1lLCB2YWx1ZSwgZXhwaXJlZGF5cyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZXhkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSA/IGxvY2F0aW9uLmhvc3RuYW1lIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIWhvc3RuYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV4ZGF0ZS5zZXREYXRlKGV4ZGF0ZS5nZXREYXRlKCkgKyBleHBpcmVkYXlzKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArZXNjYXBlKHZhbHVlKSArICgoZXhwaXJlZGF5cykgPyBcIlwiIDogXCI7ZXhwaXJlcz1cIiArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKVxyXG4gICAgICAgICsgXCI7IHBhdGg9LztcIiArIFwiZG9tYWluPS5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzFdICsgXCIuXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSAoZG9jdW1lbnQuY29va2llKSA/IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKG5hbWUrJz0oW147XSspJykpIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvb2tpZVRpbnkgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzFdLnRvU3RyaW5nKCkpIDogXCJcIjtcclxuICAgICAgICByZXR1cm4gY29va2llVGlueTtcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwZXJpZW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0RlZmluZWQoKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy50aW55Q3B0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnKSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB3aW5kb3cudGlueUNwdC5QaWFubztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV4cGVyaWVuY2UoKSB7ICBcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSAnJzsgICBcclxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZSA9IHt9OyAgXHJcbiAgICAgICAgIFxyXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKVxyXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7cmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIFxyXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7d2luZG93Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xyXG4gICAgICAgXHJcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSA9IGV4cGVyaWVuY2VOYW1lO1xyXG5cdH1cclxuXHJcbiAgICByZXNldFV0cCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZClcclxuICAgICAgICAgICAgSGVscGVycy5zZXRDb29raWUodGhpcy5jb250ZW50LnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgJycsIC0xKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjdHNJZCBmcm9tICcuLi9tb2Nrcy9wcm9kdWN0cy9wcm9kdWN0cy1pZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsb2JhbCgpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBQcm9kdWN0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvZHVjdElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy50aW55Q3B0ID0gKHdpbmRvdy50aW55Q3B0KSA/ICBPYmplY3QuYXNzaWduKHByb2R1Y3RzU2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IHByb2R1Y3RzU2V0dGluZ3M7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgaXNQcm9kdWN0VmFsb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb2R1Y3ROYW1lICYmIHRoaXMucHJvZHVjdE5hbWUgPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9kdWN0SWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICggKHR5cGVvZiBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdICE9PSAgJ3VuZGVmaW5lZCcpIFxyXG4gICAgICAgICYmICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCAhPT0gICd1bmRlZmluZWQnKSApXHJcbiAgICAgICAgPyBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkIDogbnVsbDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3ZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB3aW5kb3cuU1dHID0gd2luZG93LlNXRyB8fCBbXTsgLy9UT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGlzIHZhcmlhYmxlIGV4aXN0c1xyXG4gICAgICAgIHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSB3aW5kb3cuc3dnRW50aXRsZW1lbnRzIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IChIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpID8gd2luZG93LnRpbnlDcHQuZGVidWcuc3dnIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhbFByb2R1Y3RQaWFubyA9ICh0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gbm9tZVByb2R1dG9QaWFubyA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWxIZWFkID0gZG9jdW1lbnQuaGVhZDsgXHJcblxyXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsU1dHKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHsgXHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSA/IHRydWUgOiBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2xvYmFsU1dHKCkge1xyXG4gICAgICAgIGlmKCFIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnID0ge1xyXG4gICAgICAgICAgICBnbG9iYWw6ICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykgPyBzd2cgOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVdG1zKCkgeyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgY29uc3QgdXRtc1Byb3BzID0gKHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgOiBudWxsOyBcclxuXHJcbiAgICAgICAgdXRtc1Byb3BzLmZvckVhY2goKGl0ZW0pID0+IHsgXHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgIHVybFBhcmFtcy5zZXQoYHV0bV8ke25hbWV9YCwgdmFsdWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZykgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAnc2V0VXRtcycpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCB1dG1zUHJvcHMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCBsb2NhdGlvbilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5pc0RlZmluZWQpIHx8ICF1dG1zUHJvcHMgKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbC5zdWJzY3JpYmUoJ2JyLmNvbS5pbmZvZ2xvYm8ub2dsb2JvLnN3Zy5nb29nbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0cygpIHtcclxuICAgICAgICBpZih0aGlzLmRlYnVnKVxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2goJy4uL2FwcC9tb2Nrcy9zd2cvcHJvZHVjdHMuanNvbicpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9wcm9kdWN0cy5qc29uJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0UHJvZHVjdCgpIHsgXHJcbiAgICAgICAgaWYoIXRoaXMubG9jYWxQcm9kdWN0UGlhbm8pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5waWFub1Byb2R1Y3ROYW1lID09PSB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vIClbMF07XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW1vdmVQcm9wZXJ0aWVzKG9iaikgeyBcclxuICAgICAgICBjb25zdCBwcm9wc1RvUmVtb3ZlID0gWydwcm9kdWN0TmFtZScsICdwaWFub1Byb2R1Y3ROYW1lJ107XHJcbiAgICAgICAgY29uc3QgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcclxuXHJcbiAgICAgICAgcHJvcHNUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgbmV3T2JqW2VsZW1lbnRdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG1hcmt1cFRlbXBsYXRlKCkgeyBcclxuICAgICAgICBjb25zdCBwcm9kdWN0SlNPTiA9ICBhd2FpdCB0aGlzLnJlbW92ZVByb3BlcnRpZXMoYXdhaXQgdGhpcy5nZXRQcm9kdWN0KCkpIHx8IG51bGw7IFxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBPYmplY3Qua2V5cyhwcm9kdWN0SlNPTikubGVuZ3RoID8gSlNPTi5zdHJpbmdpZnkocHJvZHVjdEpTT04pIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5kZWJ1ZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnbG9nLVNXRy1Qcm9kdWN0JzogcHJvZHVjdH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SlNPTiA9IGAkeyBwcm9kdWN0IH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRNYXJrdXAoKSB7IFxyXG4gICAgICAgIGF3YWl0IHRoaXMubWFya3VwVGVtcGxhdGUoKTtcclxuICAgICAgICBpZighdGhpcy5wcm9kdWN0SlNPTikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2FwcGxpY2F0aW9uL2xkK2pzb24nO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5wcm9kdWN0SlNPTjtcclxuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN3Z1NjcmlwdCgpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgZWxlbWVudC5zcmMgPSAnaHR0cHM6Ly9uZXdzLmdvb2dsZS5jb20vc3dnL2pzL3YxL3N3Zy5qcyc7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGRlYmFyYW5TY3JpcHQoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGNvbnN0IHVybFByb2QgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYzEwYWU4MTljNTY4NDYwYmI0ZWMxN2MwYThlYzUyNjcvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XHJcbiAgICAgICAgY29uc3QgdXJsU3RnID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2FkZGM1ZThmMzE2ZjQ4ZWE5MTgxYWYzNzE2MGIyMmI0L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNyYyA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/IHVybFByb2QgOiB1cmxTdGc7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0U1dHKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwOyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zd2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsID0gd2luZG93LnN3ZztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT09IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdUaGVyZSBpc25cXCd0IHdpbmRvdy5zd2cnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRNYXJrdXAoKTsgIFxyXG4gICAgICAgICBcclxuICAgICAgICBpZighdGhpcy5oYXNQcm9kdWN0SlNPTikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3dnU2NyaXB0KCk7IFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QWxkZWJhcmFuU2NyaXB0KCk7ICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy50ZXN0U1dHKCk7ICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55ICB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcclxuICAgICAgICB3aW5kb3cuaGFzUGF5d2FsbCA9IHdpbmRvdy5oYXNQYXl3YWxsIHx8IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy50cCA9IHdpbmRvdy50cCB8fCBbXTtcclxuICAgICAgICB3aW5kb3cuUGlhbm8gPSB3aW5kb3cuUGlhbm8gfHwge307XHJcbiAgICAgICAgd2luZG93LlBheXdhbGxBbmFseXRpY3MgPSB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyB8fCB7fTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldEdsb2JhbFRpbnkoKTtcclxuICAgICAgICB0aGlzLlByb2R1Y3RzLnNldEdsb2JhbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsb2JhbFRpbnkoKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWJ1Zzoge1xyXG4gICAgICAgICAgICAgICAgdGlueTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXl3YWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN3ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBnYTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNQcm9kdWN0aW9uOiAod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBkZWZhdWx0U2V0dGluZ3M7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQaWFubyhvYmopIHtcclxuICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFubyA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4uL0hlbHBlcnMnO1xyXG5pbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xyXG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi4vR0EnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbEdBTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcclxuICAgIHRoaXMuR0EgPSBuZXcgR0FNb2R1bGUoKTsgXHJcblxyXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWV0cmljcyA9IHtcclxuICAgICAgICBwYXl3YWxsOiB7fSwgXHJcbiAgICAgICAgZmI6IHtcclxuICAgICAgICAgICAgcGl4ZWw6IHt9XHJcbiAgICAgICAgfSBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYXl3YWxsVHlwZSgpO1xyXG4gIH1cclxuXHJcbiAgcGF5d2FsbExvYWQoKSB7IFxyXG4gICAgaWYoIXRoaXMuUGlhbm8uaXNEZWZpbmVkKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgY29uc3QgX1BpYW5vID0gdGhpcy5QaWFuby5jb250ZW50O1xyXG5cclxuICAgIHRoaXMuR0Euc2V0RXZlbnRzKCdFeGliaWNhbyBSZWdpc3RlcicsIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUpO1xyXG4gICAgSGVscGVycy5zZXRDb29raWUoX1BpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXIoZWxlbWVudCkgeyBcclxuICAgIGlmKHRoaXMuZGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXRVdHAgPSBlbGVtZW50LmRhdGFzZXQuZ2FSZXNldHV0cCB8fCBudWxsO1xyXG4gICAgY29uc3QgaW1hZ2VUb3AgPSBlbGVtZW50LmRhdGFzZXQuZ2FJbWFnZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgbGFiZWwgPSAoaW1hZ2VUb3AgPT09ICd0b3AnKSA/IGVsZW1lbnQuZGF0YXNldC5nYUxhYmVsICsgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgOiBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbDtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBldmVudDogJ0V2ZW50b0dBJyxcclxuICAgICAgZXZlbnRvR0FDYXRlZ29yaWE6IHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUsXHJcbiAgICAgIGV2ZW50b0dBQWNhbzogZWxlbWVudC5kYXRhc2V0LmdhQWN0aW9uIHx8IGFjdGlvbixcclxuICAgICAgZXZlbnRvR0FSb3R1bG86IGxhYmVsLFxyXG4gICAgICBldmVudG9HQVZhbG9yOiAwLFxyXG4gICAgICBldmVudG9HQUludGVyYWNhbzogZmFsc2UsXHJcbiAgICB9OyBcclxuXHJcbiAgICBpZiAocmVzZXRVdHApXHJcbiAgICAgICAgdGhpcy5QaWFuby5yZXNldFV0cCgpO1xyXG4gXHJcbiAgICB0aGlzLnNldERhdGFsYXllcihkYXRhKTtcclxuICB9XHJcblxyXG4gIHBheXdhbGxUeXBlKCkge1xyXG4gICAgY29uc3QgdHlwZSA9ICggKHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsICE9PSAndW5kZWZpbmVkJykgJiYgd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwpIFxyXG4gICAgICA/IHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsLnRvTG93ZXJDYXNlKCkgXHJcbiAgICAgIDogJ3BheXdhbGwnO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdyZWdpc3Rlcic6XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBjb211bSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQ2FkYXN0cmUtc2UnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdleGNsdXNpdm8nOlxyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgZXhjbHVzaXZvJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdMb2dpbkV4Y2x1c2l2byc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BheXdhbGwnOlxyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAncGF5d2FsbCc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3UGF5d2FsbEV4Y2x1c2l2byc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREYXRhbGF5ZXIoZGF0YSA9IHt9KSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgIGRhdGFMYXllci5wdXNoKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xyXG5pbXBvcnQgUGF5d2FsbEdBTW9kdWxlIGZyb20gJy4vUGF5d2FsbC1nYSc7XHJcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi4vU3dnJztcclxuaW1wb3J0IEZiTW9kdWxlIGZyb20gJy4uL0ZCJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheXdhbGxDcHQgIHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0dGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xyXG5cdHRoaXMuR0EgPSBuZXcgUGF5d2FsbEdBTW9kdWxlKCk7XHJcblx0dGhpcy5TV0cgPSBuZXcgU3dnTW9kdWxlKCk7XHJcblx0dGhpcy5GQiA9IG5ldyBGYk1vZHVsZSh0aGlzLkdBLm1ldHJpY3MuZmIpO1xyXG5cclxuXHR0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcclxuXHR0aGlzLmRvbWFpbiA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/ICdodHRwczovL2xvZ2luLmdsb2JvLmNvbS8nIDogJ2h0dHBzOi8vbG9naW4ucWEuZ2xvYm9pLmNvbS8nO1x0XHJcblx0dGhpcy5zZXRUZW1wbGF0ZVNldHRpbmdzKCgpID0+IHtcclxuXHRcdHRoaXMuaW5pdCgpOyBcclxuXHR9KTtcclxuXHJcblx0d2luZG93LlBheXdhbGxDcHQgPSB0aGlzO1xyXG5cclxuXHR3aW5kb3cudGlueUNwdC5QYXl3YWxsID0ge1xyXG5cdFx0ZG9tYWluOiB0aGlzLmRvbWFpbixcclxuXHRcdEdBOiB0aGlzLkdBLm1ldHJpY3MsXHJcblx0fTtcclxuICB9XHJcblxyXG4gIHNldFRlbXBsYXRlU2V0dGluZ3MoY2FsbGJhY2spIHtcclxuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xyXG5cdFx0XHR0ZW1wbGF0ZTogJ2RlZmF1bHQnLFxyXG5cdFx0XHRhc3NldHNQYXRoOiAnJyxcclxuXHRcdFx0ZGlzcGxheTogbnVsbCxcclxuXHRcdFx0cHJvZHVjdENsYXNzOiB0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgPyBgcGF5d2FsbC1jcHQtJHtub21lUHJvZHV0b1BpYW5vfWAgOiAncGF5d2FsbC1jcHQtb2dsb2JvJyxcclxuXHRcdFx0dGl0bGU6ICdFc3NlIGNvbnRlw7pkbyDDqSBvIHTDrXR1bG8uJyxcclxuXHRcdFx0dGFyZ2V0Qmxhbms6IHRydWUsXHJcblx0XHRcdHRvcE1vYmk6ICcnLFxyXG5cdFx0XHR0b3BEZXNrOiAnJyxcclxuXHRcdFx0dG9wTGluazogJycsXHJcblx0XHRcdGxlZnRNb2JpOiAnJyxcclxuXHRcdFx0bGVmdERlc2s6ICcnLFxyXG5cdFx0XHRsZWZ0TGluazogJycsXHJcblx0XHRcdHJpZ2h0TW9iaTogJycsXHJcblx0XHRcdHJpZ2h0RGVzazogJycsXHJcblx0XHRcdHJpZ2h0TGluazogJydcclxuXHRcdH07XHJcblxyXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5oaWRlTG9naW5BcmVhID0gZmFsc2U7XHJcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luVGV4dCA9ICdGYcOnYSBsb2dpbic7XHJcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luUHJlVGV4dCA9ICdKw6EgcG9zc3VpIGNhZGFzdHJvPyc7XHJcblx0XHRcclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsID0gKHdpbmRvdy5nbGJQYXl3YWxsKSA/ICBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZVNldHRpbmdzLCB3aW5kb3cuZ2xiUGF5d2FsbCkgOiB0ZW1wbGF0ZVNldHRpbmdzOyBcclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGFnID0gYCR7d2luZG93LmdsYlBheXdhbGwubG9naW5QcmVUZXh0fSA8YSBocmVmPVwiJHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoKX1cIiBkYXRhLWlzLWxvZ2luPVwidHJ1ZVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayAyIC0gRmHDp2EgbG9naW5cIiBkYXRhLWdhLXJlc2V0VXRwPVwiZmFsc2VcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiICR7d2luZG93LmdsYlBheXdhbGwudGFyZ2V0Qmxhbmt9IFwiPiR7d2luZG93LmdsYlBheXdhbGwubG9naW5UZXh0fTwvYT5gO1xyXG5cclxuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsLmhpZGVMb2dpbkFyZWEpXHJcblx0XHRcdHRoaXMuY2xlYXJMb2dpbkFyZWEoKTtcclxuXHJcblx0XHRpZih0aGlzLmRlYnVnICkgXHJcblx0XHRcdHRoaXMuc2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCk7XHJcblx0XHRcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhckxvZ2luQXJlYSgpIHtcclxuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsKSB7IFxyXG5cdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9ICcnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCkge1xyXG5cdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0b2JqLnRvcE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTAnO1xyXG5cdFx0b2JqLnRvcERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwNHgxMjgnO1xyXG5cdFx0b2JqLnRvcExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wxJztcclxuXHRcdG9iai5sZWZ0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XHJcblx0XHRvYmoubGVmdERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwMng1MTUnO1xyXG5cdFx0b2JqLmxlZnRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMic7XHJcblx0XHRvYmoucmlnaHRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcclxuXHRcdG9iai5yaWdodERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwMng1MTUnO1xyXG5cdFx0b2JqLnJpZ2h0TGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDMnO1xyXG5cclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmdsYlBheXdhbGwsIG9iaik7XHJcblx0fVxyXG4gXHJcbiAgYm9keUFkanVzdCgpIHtcclxuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnaGlkZGVuJywgJ2ltcG9ydGFudCcpO1xyXG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcsICdpbXBvcnRhbnQnKTtcclxuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCAnMTAwJScsICdpbXBvcnRhbnQnKTtcclxuICB9XHJcblxyXG4gIHNldEVsV3JhcHBlcigpIHtcclxuXHR0aGlzLmVsQ3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0Jyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFbGVtZW50cygpIHtcclxuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xyXG5cclxuXHRpZih0aGlzLmVsQ3B0KVxyXG5cdFx0dGhpcy5lbENwdC5yZW1vdmUoKTtcclxuXHJcblx0Y29uc3QgZWxUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm90ZWN0ZWQtY29udGVudCcpO1xyXG5cclxuXHRlbFRvUmVtb3ZlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0ICBlbGVtZW50LnJlbW92ZSgpO1xyXG5cdH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGVtcGxhdGUoKSB7XHJcblx0dGhpcy5lbEJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgdGhpcy5ib2R5QWRqdXN0KCk7XHJcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRzKCk7XHJcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmNzc01pbmlmaWVkKTsgXHJcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnRlbXBsYXRlKTsgXHJcblx0dGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHRcclxuICAgIFxyXG4gICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLkdBLnBheXdhbGxMb2FkKCk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCkge1xyXG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XHJcblx0dGhpcy5lbENwdFdyYXAgPSB0aGlzLmVsQ3B0LnF1ZXJ5U2VsZWN0b3IoJy5wYXl3YWxsLWNwdC13cmFwJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZWxCb2R5SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgNDtcclxuXHRcdGNvbnN0IGVsQ3B0V3JhcEhlaWdodCA9IHRoaXMuZWxDcHRXcmFwLm9mZnNldEhlaWdodDtcclxuICAgICAgICBjb25zdCBjdXJyZW50VG9wID0gKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykgXHJcbiAgICAgICAgPyBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKVxyXG4gICAgICAgIDogTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yICk7XHJcblx0XHRjb25zdCB0b3BXaXRoRnVsbEVsZW1lbnQgPSAoZWxCb2R5SGVpZ2h0IC0gZWxDcHRXcmFwSGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke2N1cnJlbnRUb3B9cHhgO1xyXG5cdFx0dGhpcy5lbENwdC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdHRoaXMuZWxDcHQuc3R5bGUuekluZGV4ID0gOTk5OTk5OTk5OTtcclxuXHJcblx0XHR0aGlzLmV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XHJcblx0XHR0aGlzLmV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XHJcblx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpO1xyXG5cclxuXHRcdHRoaXMuRkIuc2V0UGl4ZWxUeXBlKCk7XHJcblx0fSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVFdmVudHMoKSB7XHJcblx0Y29uc3QgY2xpY2tUYXJnZXRzID0gdGhpcy5lbENwdFdyYXAucXVlcnlTZWxlY3RvckFsbCgnYScpO1xyXG5cclxuXHRjbGlja1RhcmdldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHsgXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbiA9IEJvb2xlYW4oZWxlbWVudC5kYXRhc2V0LmlzTG9naW4pIHx8IGZhbHNlO1xyXG5cdFx0XHRjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGZhbHNlIDsgXHJcblx0XHRcdGNvbnN0IGlzVXJsU3dnID0gKHVybCkgPyB1cmwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnb2ZlcnRhc3dnJykgOiBmYWxzZTtcclxuXHRcdFx0Y29uc3Qgbm90QmxhbmsgPSBlbGVtZW50LmRhdGFzZXQuaHJlZlRhcmdldCB8fCB0cnVlOyBcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuR0EudHJpZ2dlcihlbGVtZW50KTsgXHJcblxyXG5cdFx0XHRpZighaXNMb2dpbiAmJiBpc1VybFN3ZylcclxuXHRcdFx0XHR0aGlzLlNXRy5zZXRVdG1zKCk7ICBcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmwgJiYgIWlzVXJsU3dnKSB7IFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RCbGFuayA/ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybCkgOiB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9KTtcclxuICB9XHJcblxyXG4gIGV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xyXG5cdGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdCd3aGVlbCcsXHJcblx0XHRmdW5jdGlvbihldnQpIHsgXHJcblx0XHQgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VG9wIC8gMTAwO1xyXG5cdFx0ICBjb25zdCBtdWx0aXBsaWVyID0gMjA7XHJcblxyXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA+PSAxKSB7XHJcblx0XHRcdGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gc3RlcCAqIG11bHRpcGxpZXI7IFxyXG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xyXG4gIFxyXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcblx0XHQgIH1cclxuICBcclxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPD0gLTEpIHtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgKyBzdGVwICogbXVsdGlwbGllcjtcclxuXHRcdFx0bmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xyXG4gIFxyXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcblx0XHQgIH1cclxuXHRcdH0uYmluZCh0aGlzKVxyXG5cdCAgKTtcclxuICB9XHJcblxyXG4gIGV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xyXG4gICAgbGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XHJcbiAgICBsZXQgdG91Y2hzdGFydFkgPSAwO1xyXG4gICAgbGV0IHRvdWNoZW5kWSA9IDA7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZ0KSB7IFxyXG4gICAgICAgIHRvdWNoc3RhcnRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldnQpIHsgXHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xyXG4gICAgICAgIHRvdWNoZW5kWSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xyXG5cclxuICAgICAgICBpZiAodG91Y2hlbmRZIDwgdG91Y2hzdGFydFkpIHsgXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyh0b3VjaHN0YXJ0WSkgLSBNYXRoLmFicyh0b3VjaGVuZFkpO1xyXG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCAtIGRpZmY7IFxyXG4gICAgICAgICAgICBuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvdWNoZW5kWSA+IHRvdWNoc3RhcnRZKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaGVuZFkgLSB0b3VjaHN0YXJ0WTtcclxuICAgICAgICAgICAgY29uc3QgZWxUb3AgPSBuZXd0b3AgKyBkaWZmOyBcclxuXHRcdCAgICBuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XHJcblxyXG5cdFx0ICAgIHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcclxuICAgICAgICB9XHJcblx0fS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XHJcblx0Y29uc3QgdXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gPSB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcgPyAnaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCcgOiAnaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCc7XHJcblx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcclxuXHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5Qcm9kdWN0LmlkO1xyXG5cdGxldCBzdHIgPSAnJztcclxuXHRsZXQgdXJsUmV0dXJuID0gJyc7XHJcblxyXG5cdGlmKCF0aGlzLmRlYnVnICYmIHRoaXMuUGlhbm8uaXNEZWZpbmVkKSB7XHJcblx0XHR1cmxSZXR1cm4gPSBlbmNvZGVVUklDb21wb25lbnQoXHJcblx0XHRcdHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvICsgJz9jb2RpZ29Qcm9kdXRvPScgKyAgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCkgXHJcblx0XHRcdCsgJyZzZXJ2aWNlSWQ9JyArIHNlcnZpY2VJZFxyXG5cdFx0XHQrICcmYW1iaWVudGVVdGlsaXphZG89JyArIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vXHJcblx0XHRcdCsgJyZub21lUHJvZHV0bz0nICsgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXHJcblx0XHRcdCsgJyZ1cmxSZXRvcm5vPScgKyB1cmlcclxuXHRcdCk7XHJcblxyXG5cdFx0aWYodHlwZSA9PT0gJ3JlZ2lzdGVyJykge1xyXG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1jYWRhc3Ryby8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1sb2dpbi8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcblxyXG4gIGdldCB0ZW1wbGF0ZVZhcnMoKSB7XHJcblx0cmV0dXJuIHdpbmRvdy5nbGJQYXl3YWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBsYXRlKCkgeyBcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGBcclxuXHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdCAke3RoaXMudGVtcGxhdGVWYXJzLnByb2R1Y3RDbGFzc31cIj4gXHJcblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZFwiPlxyXG5cdFx0XHQke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfVxyXG5cdFx0PC9kaXY+XHJcblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190b3BcIj5cclxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BMaW5rfVwiIGRhdGEtZ2EtaW1hZ2UtcG9zaXRpb249XCJ0b3BcIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgMSAtXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cclxuXHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTW9iaX1cIiAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyICR7d2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSA/ICdpcy1oaWRlJyA6ICcnfVwiPlxyXG5cdFx0ICBcdCR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5UYWd9XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fbGVmdFwiPlxyXG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRMaW5rfVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA0IC0gQmFubmVyIG9mZXJ0YSBlc3F1ZXJkYVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XHJcblx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdE1vYml9XCIgLz5cclxuXHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdDwvYT5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19yaWdodFwiPlxyXG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TGlua31cIiAgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDUgLSBCYW5uZXIgb2ZlcnRhIGRpcmVpdGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIC8+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0ICA8L2Rpdj5cclxuXHQgIGA7XHJcblxyXG5cdHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcclxuXHQgIHJldHVybiBgPHN0eWxlPlxyXG5cdCAgLnBheXdhbGwtY3B0e29wYWNpdHk6MDtwb3NpdGlvbjpmaXhlZDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwdnc7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWZ9LnBheXdhbGwtY3B0LC5wYXl3YWxsLWNwdCAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfS5wYXl3YWxsLWNwdCBhe2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWRlY29yYXRpb246bm9uZX0ucGF5d2FsbC1jcHQgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wYXl3YWxsLWNwdCAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdCBhe2NvbG9yOiMwMDB9LnBheXdhbGwtY3B0LW9nbG9ibyAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdC1vZ2xvYm8gYXtjb2xvcjojMzI1ZTk0fS5wYXl3YWxsLWNwdC13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1ib3R0b206MjBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LnBheXdhbGwtY3B0LXdyYXB7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn19LnBheXdhbGwtY3B0LXdyYXAgaW1ne2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LnBheXdhbGwtY3B0LXdyYXBfX3RvcHtwYWRkaW5nLXRvcDoyMHB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWR7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMCAwO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXJ7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMDtjb2xvcjojNzY3Njc2O2ZvbnQtc2l6ZToxNnB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlci5pcy1oaWRle3BhZGRpbmctYm90dG9tOjB9XHJcblx0ICA8L3N0eWxlPmA7XHJcbiAgfVxyXG5cclxuICBpbml0KCkgeyBcclxuXHQgIGNvbnN0IGRlbGF5VGltZXIgPSAod2luZG93LmdsYlBheXdhbGwgJiYgd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lcikgPyB3aW5kb3cuZ2xiUGF5d2FsbC5kZWxheVRpbWVyICogMTAwMCA6IDA7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT57XHJcblx0XHR0aGlzLmNyZWF0ZVRlbXBsYXRlKCk7XHJcblx0fSwgZGVsYXlUaW1lcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcclxuaW1wb3J0IFRpbnlNb2R1bGUgZnJvbSAnLi9UaW55JztcclxuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4vR0EnO1xyXG5pbXBvcnQgU3dnTW9kdWxlIGZyb20gJy4vU3dnJztcclxuaW1wb3J0IFBheXdhbGxDcHQgZnJvbSAnLi9jcG50LXBheXdhbGwvUGF5d2FsbCc7XHJcblxyXG5jb25zdCBUaW55ID0gbmV3IFRpbnlNb2R1bGUoKTtcclxuY29uc3QgR0EgPSBuZXcgR0FNb2R1bGUoKTtcclxuXHJcbkdBLnNldEdsb2JhbFZhcnMoKTtcclxuXHJcblBpYW5vLmFjdGl2ZVBheXdhbGwgPSB0cnVlO1xyXG5QaWFuby50eXBlUGF5d2FsbCA9IG51bGw7XHJcblBpYW5vLnZhcmlhdmVpcyA9IHtcclxuXHRhbWJpZW50ZXNBY2VpdG9zOiBcImludCxxbHQscHJkXCIsXHJcblx0c3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc286IFwiNDAwLDQwNCw0MDYsNTAwLDUwMiw1MDMsNTA0XCIsXHJcblx0c3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogXCI0MDAsNDA0LDUwMCw1MDIsNTAzLDUwNFwiLFxyXG5cdGlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkOiBmYWxzZSxcclxuXHRjb25zdGFudGU6IHtcclxuXHRcdGNvb2tpZToge1xyXG5cdFx0XHRHQ09NOiAnR0xCSUQnLFxyXG5cdFx0XHRVVFA6ICdfdXRwJyxcclxuXHRcdFx0UlRJRVg6ICdfcnRpZXgnLFxyXG5cdFx0XHRBTUJJRU5URTogJ2FtYmllbnRlUGlhbm8nLFxyXG5cdFx0XHRTQVZFX1NVQlNDUklQVElPTjogJ3NhdmVTdWJzY3JpcHRpb25Db29raWUnLFxyXG5cdFx0XHRDUkVBVEVEX0dMT0JPSUQ6ICdjcmVhdGVkR2xvYm9JZCcsXHJcblx0XHRcdEdMT0JPSURfTUVTU0FHRTogJ2dsb2JvSWRNZXNzYWdlJ1xyXG5cdFx0fSxcclxuXHRcdG1ldHJpY2FzOiB7XHJcblx0XHRcdEVWRU5UT19TRU1fQUNBTzogJ3NlbSBhY2FvJyxcclxuXHRcdFx0RVJSTzogJ0Vycm8nXHJcblx0XHR9LFxyXG5cdFx0a3J1eDoge1xyXG5cdFx0XHRTRUdNRU5UQUNPRVM6ICdreGdsb2JvX3NlZ3MnLFxyXG5cdFx0XHRLUlVYTElHQURPOiAna3J1eC1saWdhZG8nXHJcblx0XHR9LFxyXG5cdFx0dXRpbDoge1xyXG5cdFx0XHRJUDogXCIxMjcuMC4wLjFcIixcclxuXHRcdFx0QU1CSUVOVEU6IFwiYW1iaWVudGUtZGVzZWphZG9cIixcclxuXHRcdFx0REVCVUc6IFwiZGVidWctcGlhbm9cIlxyXG5cdFx0fVxyXG5cdH0sXHJcblx0aXNDb250ZXVkb0V4Y2x1c2l2bzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmNvbnRldWRvRXhjbHVzaXZvID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0Z2V0QW1iaWVudGVQaWFubzogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoUGlhbm8udmFyaWF2ZWlzLmFtYmllbnRlc0FjZWl0b3MuaW5kZXhPZihQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSkgPiAtMSkge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSksIDEpO1xyXG5cdFx0XHRyZXR1cm4gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSk7XHJcblx0XHR9XHJcblx0XHRpZiAoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkgPT0gJ2ZhbHNlJykge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgXCJcIiwgLTEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKSkge1xyXG5cdFx0XHRyZXR1cm4gSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpO1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vKSA+IC0xID8gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gOiAncHJkJztcclxuXHR9LFxyXG5cdGdldFRpcG9Db250ZXVkb1BpYW5vOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cudGlwb0NvbnRldWRvUGlhbm87XHJcblx0fSxcclxuXHRleGVjdXRvdVBhZ2V2aWV3OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuZXhlY3V0b3VQYWdldmlldyA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdGdldE5vbWVQcm9kdXRvOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICghd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8pe1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIk5vbWUgZG8gcHJvZHV0byBuw6NvIGRlZmluaWRvLlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3aW5kb3cubm9tZVByb2R1dG9QaWFubztcclxuXHR9LFxyXG5cdGdldENvZGlnb1Byb2R1dG86IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgbm9tZVByb2R1dG8gPSBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKTtcclxuXHRcdHN3aXRjaCAobm9tZVByb2R1dG8pe1xyXG5cdFx0XHRjYXNlICdvZ2xvYm8nOlxyXG5cdFx0XHRjYXNlICdibG9ncyc6XHJcblx0XHRcdGNhc2UgJ2tvZ3V0JzpcclxuXHRcdFx0XHRyZXR1cm4gJ09HMDMnO1xyXG5cdFx0XHRjYXNlICdhY2Vydm8nOlxyXG5cdFx0XHRcdHJldHVybiAnT0cwNCc7XHJcblx0XHRcdGNhc2UgJ2pvcm5hbGRpZ2l0YWwnOlxyXG5cdFx0XHRcdHJldHVybiAnT0cwMSc7XHJcblx0XHRcdGNhc2UgJ2F1dG8tZXNwb3J0ZSc6XHJcblx0XHRcdGNhc2UgJ2Vwb2NhJzpcclxuXHRcdFx0Y2FzZSAndm9ndWUnOlxyXG5cdFx0XHRjYXNlICdnbGFtb3VyJzpcclxuXHRcdFx0Y2FzZSAnY2FzYS12b2d1ZSc6XHJcblx0XHRcdGNhc2UgJ21hcmllLWNsYWlyZSc6XHJcblx0XHRcdGNhc2UgJ2dsb2JvLXJ1cmFsJzpcclxuXHRcdFx0Y2FzZSAnZ3EnOlxyXG5cdFx0XHRjYXNlICdtb25ldCc6XHJcblx0XHRcdGNhc2UgJ2NyZXNjZXInOlxyXG5cdFx0XHRjYXNlICdnYWxpbGV1JzpcclxuXHRcdFx0XHRyZXR1cm4gbm9tZVByb2R1dG87XHJcblx0XHRcdGNhc2UgJ2Nhc2EtZS1qYXJkaW0nOlxyXG5cdFx0XHRcdHJldHVybiAnY2FzYS1qYXJkaW0nO1xyXG5cdFx0XHRjYXNlICdxdWVtLWFjb250ZWNlJzpcclxuXHRcdFx0XHRyZXR1cm4gJ3F1ZW0nO1xyXG5cdFx0XHRjYXNlICd2YWxvcic6XHJcblx0XHRcdFx0cmV0dXJuICd2YWxvcmRpZ2l0YWwnO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQW8gb2J0ZXIgY8OzZGlnbyBkbyBwcm9kdXRvXCIsIG5vbWVQcm9kdXRvICsgXCIgLSBcIiArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSwgJ2Vycm8nLCB0cnVlLCBcIiBcIik7XHJcblx0XHRcdFx0cmV0dXJuICdlcnJvcic7XHJcblx0XHR9XHJcblx0fVx0XHJcbn07XHJcblxyXG5QaWFuby5qYW5lbGFBbm9uaW1hID0ge1xyXG5cdHJldHJ5IDogZnVuY3Rpb24oaXNEb25lLCBuZXh0KSB7XHJcblx0XHR2YXIgY3VycmVudF90cmlhbCA9IDAsIG1heF9yZXRyeSA9IDUwLCBpbnRlcnZhbCA9IDEwLCBpc190aW1lb3V0ID0gZmFsc2U7XHJcblx0XHR2YXIgaWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXHJcblx0XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChpc0RvbmUoKSkge1xyXG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xyXG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRfdHJpYWwrKyA+IG1heF9yZXRyeSkge1xyXG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xyXG5cdFx0XHRcdFx0aXNfdGltZW91dCA9IHRydWU7XHJcblx0XHRcdFx0XHRuZXh0KGlzX3RpbWVvdXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0MTBcclxuXHRcdCk7XHJcblx0fSxcclxuXHRpc0lFMTBPckxhdGVyIDogZnVuY3Rpb24odXNlcl9hZ2VudCkge1xyXG5cdFx0bGV0IHVhID0gdXNlcl9hZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0bGV0IG1hdGNoID0gLyg/Om1zaWV8cnY6KVxccz8oW1xcZFxcLl0rKS8uZXhlYyh1YSk7XHJcblx0XHRcclxuXHRcdGlmICh1YS5pbmRleE9mKCdtc2llJykgPT09IDAgJiYgdWEuaW5kZXhPZigndHJpZGVudCcpID09PSAwKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChtYXRjaCAmJiBwYXJzZUludChtYXRjaFsxXSwgMTApID49IDEwKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0ZGV0ZWN0UHJpdmF0ZU1vZGUgOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0dmFyIGlzX3ByaXZhdGU7XHJcblxyXG5cdFx0aWYgKHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSkge1xyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXHJcblx0XHRcdFx0d2luZG93LlRFTVBPUkFSWSwgMSxcclxuXHRcdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSBpZiAod2luZG93LmluZGV4ZWREQiAmJiAvRmlyZWZveC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdFx0dmFyIGRiO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGRiID0gd2luZG93LmluZGV4ZWREQi5vcGVuKCd0ZXN0Jyk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcclxuXHRcdFx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRiLnJlYWR5U3RhdGUgPT09ICdkb25lJyA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFpc190aW1lb3V0KSB7XHJcblx0XHRcdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGRiLnJlc3VsdCA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoUGlhbm8uamFuZWxhQW5vbmltYS5pc0lFMTBPckxhdGVyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG5cdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKCF3aW5kb3cuaW5kZXhlZERCKSB7XHJcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlICYmIC9TYWZhcmkvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgMSk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcclxuXHRcdFx0ZnVuY3Rpb24gaXNEb25lKCkge1xyXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgaXNfcHJpdmF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uIG5leHQoaXNfdGltZW91dCkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGlzX3ByaXZhdGUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmtydXggPSB7XHJcblx0dGVtOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykgPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHRsaWdhZG86IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPO1xyXG5cdFx0dmFyIHZhbG9yUGFyYW1ldHJvID0gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKHBhcmFtZXRybyk7XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJyAmJiB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyAhPSBcInByZFwiKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnIHx8IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09IFwicHJkXCIpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCBcIlwiLCAtMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPKSA9PSBcImZhbHNlXCIpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHRvYnRlbVNlZ21lbnRhY2FvOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChQaWFuby5rcnV4LnRlbSgpICYmIFBpYW5vLmtydXgubGlnYWRvKCkpIHtcclxuXHRcdFx0dmFyIHNlZ21lbnRhY29lcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKS5zcGxpdCgnLCcpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRhY29lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgc2VnbWVudGFjb2VzW2ldLCBzZWdtZW50YWNvZXNbaV1dKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLm1ldHJpY2FzID0ge1xyXG5cdGVudmlhRXZlbnRvc0dBOiBmdW5jdGlvbihfR0FBY2FvLCBfR0FSb3R1bG8pIHsgLy9UT0RPOiBhcnF1aXZvIHRpbnlwYXNzLmpzLCBpbnNlcmlkbyBwZWxhIFBpYW5vLCB1dGlsaXphIGVzc2EgZnVuw6fDo29cclxuXHRcdGNvbnN0IGlzUHJvZHVjdFZhbG9yID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoaXNQcm9kdWN0VmFsb3IpXHJcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ1BpYW5vJywgX0dBQWNhbywgX0dBUm90dWxvLCAsdHJ1ZV0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8nLCAnZXZlbnRvR0FBY2FvJzogX0dBQWNhbywgJ2V2ZW50b0dBUm90dWxvJzpfR0FSb3R1bG99KTtcclxuXHR9LFxyXG5cclxuXHRtb250YVJvdHVsb0dBOiBmdW5jdGlvbigpIHsgLy9UT0RPOiBhdCBQaWFubyBhcyBzZXRFeHBlcmllbmNlKCkgfCBDaGVjayBvbiBvbGQgdGlueSBiZWZvcmUgcmVtb3ZlXHJcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgc3Vic2VnbWVudGFjYW9QaWFubyA6IHJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xyXG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubm9tZUV4cGVyaWVuY2lhKSB7XHJcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5ub21lRXhwZXJpZW5jaWE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gXCIgXCI7XHJcblx0fSxcclxuXHRzZXRMaW1pdGVDb250YWdlbTogZnVuY3Rpb24obWV0cmljYXMpIHtcclxuXHRcdF9HQUxpbWl0ZSA9IFwiLVwiO1xyXG5cdFx0X0dBQ29udGFnZW0gPSBcIi1cIjtcclxuXHRcdGlmKCFtZXRyaWNhcykgcmV0dXJuO1xyXG5cdFx0X0dBQ29udGFnZW0gPSBcIlwiICsgbWV0cmljYXMudmlld3M7XHJcblx0XHRpZiAoX0dBQ29udGFnZW0ubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0X0dBQ29udGFnZW0gPSBcIjBcIiArIF9HQUNvbnRhZ2VtO1xyXG5cdFx0fVxyXG5cdFx0X0dBTGltaXRlID0gbWV0cmljYXMubm9tZUV4cGVyaWVuY2lhICtcIiA6IFwiKyBtZXRyaWNhcy5tYXhWaWV3cztcclxuXHR9LFxyXG5cdGlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3RlcjogZnVuY3Rpb24ocmVncmFzKSB7XHJcblx0XHR2YXIgcGFzc2FnZW0gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLm1ldHJpY2FzLkVWRU5UT19TRU1fQUNBTztcclxuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkge1xyXG5cdFx0XHRwYXNzYWdlbSA9IHJlZ3Jhcy5mbHV4by5pbmRleE9mKFwiaGFyZHdhbGxcIikgIT0gLTEgPyAncmVnaXN0ZXItaGFyZHdhbGwtcGFzc291JyA6ICdyZWdpc3Rlci1jb250YWdlbS1wYXNzb3UnO1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBhc3NhZ2VtO1xyXG5cdH0sXHJcblx0ZXhlY3V0YUFwb3NQYWdldmlldzogZnVuY3Rpb24oZXhwaXJvdSkge1xyXG5cdFx0aWYgKCFQaWFuby52YXJpYXZlaXMuZXhlY3V0b3VQYWdldmlldygpKSB7XHJcblx0XHRcdHJlZ3Jhc1RpbnkuZmx1eG8gPSB3aW5kb3cudHBDb250ZXh0ID8gdHBDb250ZXh0LnRvTG93ZXJDYXNlKCkgOiAnLSc7XHJcblx0XHRcdHJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgOiAnJztcclxuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0TGltaXRlQ29udGFnZW0ocmVncmFzVGlueSk7XHJcblx0XHRcdGlmIChleHBpcm91ID09IGZhbHNlKSBHQS5zZXRFdmVudHMoUGlhbm8ubWV0cmljYXMuaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyKHJlZ3Jhc1RpbnkpLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0XHRleGVjdXRvdVBhZ2V2aWV3ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNldGFWYXJpYXZlaXM6IGZ1bmN0aW9uKGlkTG9naW4sIHRpcG9Mb2dpbiwgYXNzaW5hdHVyYUxvZ2FkYSl7XHJcblx0XHRQYXl3YWxsQW5hbHl0aWNzLmlkTG9naW5Bc3NpbmFudGUgPSBpZExvZ2luO1xyXG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MudGlwb0xvZ2luQXNzaW5hbnRlID0gdGlwb0xvZ2luO1xyXG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MuYXNzaW5hdHVyYUxvZ2FkYSA9IGFzc2luYXR1cmFMb2dhZGE7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblBpYW5vLmJhbm5lciA9IHtcclxuXHRtb3N0cmFyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92by1iYW5uZXItZm9vdGVyLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby5qc1wiKTtcclxuXHR9LFxyXG5cdG1vc3RyYXJBdmF0YXJIZWFkZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYXZhdGFyLWhlYWRlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2F2YXRhci1oZWFkZXItcGlhbm8uanNcIik7XHJcblx0fSxcclxuXHRib3R0b21GaXhlZDogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcclxuXHRcdHdpbmRvdy5nbGJCYW5uZXJCb3R0b20gPSBwYXJhbXM7XHJcblxyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWJvdHRvbS1maXhlZC9zdHlsZXMvYmFubmVyLWJvdHRvbS1maXhlZC5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3NjcmlwdHMvYmFubmVyLWJvdHRvbS1maXhlZC5qc1wiKTtcclxuXHR9LFxyXG5cdG1vc3RyYXJTV0c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgY3NzID0gYDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc3R5bGVzL3N0eWxlLmNzcyc+YDtcclxuXHRcdGNvbnN0IHNjcmlwdEpzID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc2NyaXB0L2FudW5jaW8tc3dnLmpzYDtcclxuXHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhjc3MpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKHNjcmlwdEpzKTtcclxuXHR9LFxyXG5cdG1vc3RyYXJIaWdobGlnaHRTYWxlOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2hpZ2hsaWdodC1zYWxlLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC92YWxvci1zdWJzY3JpYmUtYnV0dG9uL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3N1YnNjcmliZS1idXR0b24uanNcIik7XHJcblx0fVxyXG5cclxufTtcclxuXHJcblBpYW5vLnJlZ2lzdGVyID0ge1xyXG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZhLXRlbGEtcmVnaXN0ZXIuanNcIik7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uaGVscGVyID0ge1xyXG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24oKSB7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF82NWQxOTMwYTBiZGE0NzZiYThkM2MyNWM1MzcxZWMzZi9waWFuby9oZWxwZXIvcmVnaXN0ZXIuanNcIik7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8ucGF5d2FsbCA9IHtcclxuXHRyZWRpcmVjaW9uYXJCYXJyZWlyYTogZnVuY3Rpb24odXJsKSB7XHJcblx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO30sIDEwMDApO1xyXG5cdH0sXHJcblx0c2hvdzogZnVuY3Rpb24odHlwZVBheXdhbGwgPSBudWxsKSB7XHJcblx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdQaWFuby5wYXl3YWxsLnNob3cnKVxyXG5cclxuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdHlwZVBheXdhbGw7XHJcblx0XHJcblx0XHRpZighUGlhbm8uYWN0aXZlUGF5d2FsbCkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1BheXdhbGwgLSBJcyBub3QgYXZhaWFibGUnKVxyXG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXHJcblx0XHR9IGVsc2UgeyBcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRuZXcgUGF5d2FsbENwdCgpO1xyXG5cdFx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbCAtIEVycm9yIG9uIGxvYWQnKVxyXG5cdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZyA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xlYXJGb3JBZHMnKVxyXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59O1xyXG5cclxuUGlhbm8uY2hlY2tQYXl3YWxsID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGNvdW50ID0gMDtcclxuXHRcclxuXHRjb25zdCBjaGVja0dhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRsZXQgaGFzR2F0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXJyZWlyYS1yZWdpc3Rlci1wYXl3YWxsLCAucGF5d2FsbC1jcHQnKTtcclxuXHRcdGxldCBoYXNQdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHViLXJldGFuZ3Vsby0xIGlmcmFtZSwgI3B1Yi1yZXRhbmd1bG8tMiBpZnJhbWUsICNwdWItZnVsbGJhbm5lci0xIGlmcmFtZScpO1xyXG5cclxuXHRcdGlmKGNvdW50ID4gMikge1xyXG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTtcclxuXHRcdFx0UGlhbm8uYWN0aXZlUGF5d2FsbCA9IGZhbHNlO1xyXG5cdFx0XHRjbGVhckludGVydmFsKGNoZWNrR2F0ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoICggKGhhc0dhdGUgJiYgUGlhbm8uYWN0aXZlUGF5d2FsbCkgfHwgaGFzUHViKSB8fCBjb3VudCA+IDgpIFxyXG5cdFx0XHRjbGVhckludGVydmFsKGNoZWNrR2F0ZSk7XHJcblxyXG5cdFx0Y291bnQrKztcclxuXHR9LCAxMDAwKTtcclxufTtcclxuXHJcblBpYW5vLnJlZ2lzdGVyUGF5d2FsbCA9IHsgXHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8gPSBudWxsLCB0aXBvID0gbnVsbCkge1xyXG5cdFx0UGlhbm8udHlwZVBheXdhbGwgPSB0aXBvO1xyXG5cclxuXHRcdGlmKCFQaWFuby5hY3RpdmVQYXl3YWxsIHx8ICghdmVyc2FvIHx8ICFQaWFuby50eXBlUGF5d2FsbCkgKSB7XHJcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcclxuXHRcdFx0XHRcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8uanNcIiwgXHJcblx0XHRcdFx0ZGF0YSA9PiB7IFxyXG5cdFx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgIT09IDIwMCkgeyBcclxuXHRcdFx0XHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7IFxyXG5cdFx0XHRcdFx0fSBcclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cuaGFzUGF5d2FsbCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoUGlhbm8udHlwZVBheXdhbGwgPT09ICdyZWdpc3RlcicgfHwgUGlhbm8udHlwZVBheXdhbGwgPT09ICdleGNsdXNpdm8nICkge1xyXG5cdFx0XHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1x0XHRcdFxyXG5cdFx0XHRcdEdBLnNldEV2ZW50cyhcIkJhcnJlaXJhXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmNvbXVuaWNhZG8gPSB7XHJcblx0bW9zdHJhckluZm9ybWFjYW86IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvY29tdW5pY2FjYW8tcGlhbm8uanNcIik7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uYWRibG9jayA9IHtcclxuXHRtb3N0cmFyQWRCbG9jazogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcclxuXHJcblx0XHRwYXJhbXMuYXNzZXRzUGF0aCA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9gO1xyXG5cdFx0XHJcblx0XHR3aW5kb3cuZ2xiQWRibG9jayA9IHBhcmFtcztcclxuXHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zY3JpcHRzL2FkYmxvY2stcGlhbm8uanNcIik7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uYmxvcXVlaW9zID0ge1xyXG5cdGxpYmVyYXJFc2M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jsb3F1ZWlvL2xpYmVyYVRlY2xhZG8uanNcIik7XHJcblx0fSxcclxuXHRibG9xdWVpYVZpZXdNb2RlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vYmxvcXVlaWFWaWV3bW9kZS5qc1wiKTtcclxuICAgIH1cclxufTtcclxuXHJcblBpYW5vLnBhcmNlaXJvID0ge1xyXG5cdG1vc3RyYUZvb3RlclBhcmNlaXJvOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9mb290ZXItcGFyY2Vpcm9zLXBpYW5vLmpzXCIpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmluYWRpbXBsZW50ZSA9IHtcclxuXHRnZXRMaW5rQXNzaW5hdHVyYTogZnVuY3Rpb24obGluaykge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChsaW5rW2ldLnJlbCA9PSAnYXNzaW5hdHVyYScpIHJldHVybiBsaW5rW2ldLmhyZWY7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8ueG1sSHR0cFJlcXVlc3QgPSB7XHJcblx0Z2VyYVNjcmlwdE5hUGFnaW5hOiBmdW5jdGlvbih1cmxTY3JpcHQsIGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmxTY3JpcHQpO1xyXG5cdFx0eGhyLnNlbmQoKTtcclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYodGhpcy5yZWFkeVN0YXRlID09PSA0KXtcclxuXHRcdFx0XHRpZih0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdFx0dmFyIGFwcGVuZERlU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0XHRcdFx0XHRhcHBlbmREZVNjcmlwdC5pbm5lckhUTUwgPSByZXNwb3N0YTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwZW5kRGVTY3JpcHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBuYSBmdW7Dp8OjbyBnZXJhciBzY3JpcHQgbmEgcMOhZ2luYS4nLCAndXJsOiAnICsgdXJsU2NyaXB0XHJcblx0XHRcdFx0XHRcdCsgJyBTdGF0dXNFcnJvOiAnICsgdGhpcy5zdGF0dXNcclxuXHRcdFx0XHRcdFx0KyAnIFN0YWNrOiAnICsgdGhpcy5zdGF0dXNUZXh0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGNhbGxiYWNrKVxyXG5cdFx0XHRcdGNhbGxiYWNrKHhocik7IFxyXG5cdFx0fTtcdFxyXG5cdH0sXHJcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IGZ1bmN0aW9uKGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSB7XHJcblx0XHRcclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlLCBmYWxzZSk7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHR4aHIuc2VuZCgpO1xyXG5cdFxyXG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XHJcblx0XHRcdGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcclxuXHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xyXG5cdFx0XHRcdHZhciBzaXR1YWNhb1BhZ2FtZW50byA9IHJlc3BKc29uLnNpdHVhY2FvUGFnYW1lbnRvLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInNpdHVhY2FvUGFnYW1lbnRvXCIsIHNpdHVhY2FvUGFnYW1lbnRvXSk7XHJcblxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyAhPSAwICYmIFBpYW5vLnZhcmlhdmVpcy5zdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlLmluZGV4T2YoeGhyLnN0YXR1cykgPiAtMSkge1xyXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgXCJTdGF0dXMgRGVzY29uaGVjaWRvXCIgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbzogZnVuY3Rpb24oZ2xiaWQpIHtcclxuXHRcdFxyXG5cdFx0dmFyIGNvZGlnb1Byb2R1dG8gPSBQaWFuby52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpO1xyXG5cdFx0aWYoY29kaWdvUHJvZHV0byA9PSAnZXJyb3InKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcInRva2VuLWF1dGVudGljYWNhb1wiOiBnbGJpZCwgXCJpcFVzdWFyaW9cIjogUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLklQLCBcImNvZGlnb1Byb2R1dG9cIjogY29kaWdvUHJvZHV0b30pO1xyXG5cclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vcGVuKFwiUE9TVFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFZlcmlmaWNhTGVpdG9yLCBmYWxzZSk7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdFx0XHJcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XHJcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApe1xyXG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XHJcblx0XHRcdFx0dmFyIHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gZmFsc2UsIHJlc3Bvc3RhRGVNb3Rpdm8gPSAnJywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSAnJztcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLm1vdGl2byAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRyZXNwb3N0YURlTW90aXZvID0gcmVzcEpzb24ubW90aXZvLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24udGVtVGVybW9EZVVzbyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRyZXNwb3N0YURlVGVybW9EZVVzbyA9IHJlc3BKc29uLnRlbVRlcm1vRGVVc287XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubGluayAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9IFBpYW5vLmluYWRpbXBsZW50ZS5nZXRMaW5rQXNzaW5hdHVyYShyZXNwSnNvbi5saW5rKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGlzQXV0b3JpemFkbyA9IFBpYW5vLmF1dGVudGljYWNhby5pc0F1dG9yaXphZG8ocmVzcG9zdGFEZVRlcm1vRGVVc28sIHJlc3Bvc3RhRGVNb3Rpdm8sIHJlc3BKc29uLmF1dG9yaXphZG8sIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcclxuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHJlc3BKc29uLmF1dG9yaXphZG8sIHJlc3Bvc3RhRGVNb3Rpdm8sIGlzQXV0b3JpemFkbywgcmVzcG9zdGFEZVRlcm1vRGVVc28pO1xyXG5cdFx0XHRcdHZhciBfanNvbkxlaXRvciA9IHtcclxuXHRcdFx0XHRcdFx0XCJhdXRvcml6YWRvXCIgOiByZXNwSnNvbi5hdXRvcml6YWRvLFxyXG5cdFx0XHRcdFx0XHRcIm1vdGl2b1wiOiByZXNwb3N0YURlTW90aXZvLFxyXG5cdFx0XHRcdFx0XHRcImxvZ2Fkb1wiOiBpc0F1dG9yaXphZG8sXHJcblx0XHRcdFx0XHRcdFwidGVtVGVybW9EZVVzb1wiOiByZXNwb3N0YURlVGVybW9EZVVzbyxcclxuXHRcdFx0XHRcdFx0XCJnbGJpZFwiOiBnbGJpZCxcclxuXHRcdFx0XHRcdFx0XCJwcm9kdXRvXCI6IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpLFxyXG5cdFx0XHRcdFx0XHRcImNvZFByb2R1dG9cIjogY29kaWdvUHJvZHV0byxcclxuXHRcdFx0XHRcdFx0XCJ1dWlkXCI6IHJlc3BKc29uLnVzdWFyaW9JZFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRfanNvbkxlaXRvciA9IGJ0b2EoZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KF9qc29uTGVpdG9yKSkpO1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgX2pzb25MZWl0b3IsIDEpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0aWYoUGlhbm8uZ29vZ2xlLnNob3dTYXZlU3Vic2NyaXB0aW9uKHJlc3BKc29uKSl7XHJcblx0XHRcdFx0XHRcdHRyeXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc3dnU2VydmljZSA9IG5ldyBTd2dTZXJ2aWNlKCk7XHJcblx0XHRcdFx0XHRcdFx0c3dnU2VydmljZS5zYXZlR2xvYm9TdWJzY3JpcHRpb24oZ2xiaWQpO1xyXG5cdFx0XHRcdFx0XHR9IGNhdGNoKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ0Vycm8gYW8gY2hhbWFyIGEgZnVuw6fDo28gc2hvd1NhdmVTdWJzY3JpcHRpb24gZG8gQWxkZWJhcmFuLicsIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdVUkw6ICcgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCsgJyBHTEJJRDogJyArIGdsYmlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEVycm86ICcgKyBlcnJvcik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYocmVzcEpzb24uYXV0b3JpemFkbyA9PSB0cnVlKXtcclxuXHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMocmVzcEpzb24udXN1YXJpb0lkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFQSSBkZSBhdXRvcml6YWNhbyBkZSBhY2Vzc29cIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBnbGJpZCk7XHJcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uZ29vZ2xlID0ge1xyXG4gIGlzQXV0aG9yaXplZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKSl7XHJcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKS5zdWJzY3JpcHRpb25Ub2tlbiwgXCJDb250YSBHb29nbGVcIiwgXCJPIEdsb2JvXCIpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSl7XHJcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSwgXCJDb250YSBHb29nbGVcIiwgXCJHb29nbGVcIik7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuICB9LFxyXG5cclxuICBpc1NwZWNpZmljR29vZ2xlVXNlcjogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoUGlhbm8uZ29vZ2xlLmlzQXV0aG9yaXplZCgpKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dHJ5e1xyXG5cdFx0XHR2YXIgb0dsb2JvQnVzaW5lc3MgPSBuZXcgT0dsb2JvQnVzaW5lc3MoKTtcclxuXHRcdFx0b0dsb2JvQnVzaW5lc3MudmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZChzd2dFbnRpdGxlbWVudHMpO1xyXG5cdFx0fSBjYXRjaChlcnJvcikge1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkVycm8gYW8gZXhlY3V0YXIgbyBBbGRlYmFyYW5cIiwgXCJFcnJvcjogXCIgKyBlcnJvciArIFwiIC0gRW50aXRsZW1lbnRzOiBcIiArIHN3Z0VudGl0bGVtZW50cy5lbnRpdGxlbWVudHNbMF0uc3Vic2NyaXB0aW9uVG9rZW4pO1xyXG5cdFx0fVx0XHRcdFxyXG5cdH0sXHJcblxyXG5cdHNob3dTYXZlU3Vic2NyaXB0aW9uOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcblx0XHRpZighc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkgJiYgcmVzcG9uc2UubW90aXZvID09PVwiQVVUT1JJWkFET1wiICYmICFIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLlNBVkVfU1VCU0NSSVBUSU9OKSl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5QaWFuby5hdXRlbnRpY2FjYW8gPSB7XHJcblx0aXNMb2dhZG9DYWR1bjogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xyXG5cdFx0aWYgKCFnbGJpZCkge1xyXG5cdFx0XHRpZiAodXRwKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBnbGJpZCAhPSAnJztcclxuXHR9LFxyXG5cdHZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50bzogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xyXG5cdFx0aWYgKFBpYW5vLmF1dGVudGljYWNhby5pc0xvZ2Fkb0NhZHVuKGdsYmlkLCB1dHApKSB7XHJcblx0XHRcdGlmICh1dHApIHtcclxuXHRcdFx0XHR2YXIgX2xlaXRvciA9IEpTT04ucGFyc2UoZGVjb2RlVVJJKGF0b2IodXRwKSkpO1xyXG5cdFx0XHRcdGlmIChnbGJpZCA9PSBfbGVpdG9yLmdsYmlkICYmICh0eXBlb2YgX2xlaXRvci5wcm9kdXRvID09IFwidW5kZWZpbmVkXCIgfHwgX2xlaXRvci5wcm9kdXRvID09IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSkge1xyXG5cdFx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhfbGVpdG9yLmF1dG9yaXphZG8sIF9sZWl0b3IubW90aXZvLCBfbGVpdG9yLmxvZ2FkbywgX2xlaXRvci50ZW1UZXJtb0RlVXNvKTtcclxuXHRcdFx0XHRcdGlmKF9sZWl0b3IuYXV0b3JpemFkbyl7XHJcblx0XHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoX2xlaXRvci51dWlkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbyhnbGJpZCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRpc0F1dG9yaXphZG86IGZ1bmN0aW9uKHRlcm1vRGVVc28sIG1vdGl2bywgYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIHtcclxuXHRcdGlmIChhdXRvcml6YWRvIHx8IG1vdGl2byA9PSBcImluZGlzcG9uaXZlbFwiIHx8IHRlcm1vRGVVc28gIT0gZmFsc2UpIHtcclxuXHRcdFx0aWYgKGF1dG9yaXphZG8gJiYgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlKGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGRlZmluZVVzdWFyaW9QaWFubzpmdW5jdGlvbihhdXRvcml6YWRvLCBtb3Rpdm8sIGxvZ2FkbywgdGVtVGVybW9EZVVzbyl7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYXV0b3JpemFkb1wiLCBhdXRvcml6YWRvXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibW90aXZvXCIsIG1vdGl2b10pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImxvZ2Fkb1wiLCBsb2dhZG9dKTtcclxuXHRcdGlmKHRlbVRlcm1vRGVVc28gIT0gXCIgXCIpXHJcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ0ZW1UZXJtb1wiLCB0ZW1UZXJtb0RlVXNvXSk7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8udXRpbCA9IHtcclxuXHRpc1NlY3Rpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09IFwic2VjdGlvblwiID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0dGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJWYXJpYXZlbCB0aXBvQ29udGV1ZG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlmICh0eXBlb2YgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJWYXJpYXZlbCBub21lUHJvZHV0b1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhXCIsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHRleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xyXG5cdFx0dmFyIGNoYXZlc0NhbXBhbmhhID0gWyd1dG1fbWVkaXVtJywndXRtX3NvdXJjZSddO1xyXG5cdFx0dmFyIHZhbG9yZXNDYW1wYW5oYSA9IFtdO1xyXG5cclxuXHRcdGZvciAodmFyIGlkeFBhcmFtQ2FtcGFuaGEgPSAwOyBpZHhQYXJhbUNhbXBhbmhhIDwgY2hhdmVzQ2FtcGFuaGEubGVuZ3RoOyBpZHhQYXJhbUNhbXBhbmhhKyspIHtcclxuXHRcdFx0dmFyIGNoYXZlQ2FtcGFuaGEgPSBjaGF2ZXNDYW1wYW5oYVtpZHhQYXJhbUNhbXBhbmhhXTtcclxuXHRcdFx0aWYgKHVybC5pbmRleE9mKGNoYXZlQ2FtcGFuaGEgKyAnPScpICE9IC0xKSB7XHJcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBjaGF2ZUNhbXBhbmhhICsgXCI9KFteJiNdKilcIik7XHJcblx0XHRcdFx0dmFyIHZhbG9yQ2FtcGFuaGEgPSB1cmwubWF0Y2gocmVnZXgpWzFdO1xyXG5cdFx0XHRcdGlmKHZhbG9yQ2FtcGFuaGEpe1xyXG5cdFx0XHRcdFx0dmFsb3Jlc0NhbXBhbmhhLnB1c2godmFsb3JDYW1wYW5oYSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodmFsb3Jlc0NhbXBhbmhhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInV0bVwiLCB2YWxvcmVzQ2FtcGFuaGEuam9pbihcIjtcIildKTtcclxuXHRcdH1cclxuXHRcdGlmICh1cmwuaW5kZXhPZigndXRtX2NhbXBhaWduPScpICE9IC0xKSB7XHJcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJ1dG1fY2FtcGFpZ249KFxcXFx3KylcIik7XHJcblx0XHRcdHZhciBjYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XHJcblx0XHRcdGlmKGNhbXBhbmhhKXtcclxuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiY2FtcGFuaGFcIiwgY2FtcGFuaGFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0aXNPcmlnZW1CdXNjYWRvcjogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHRcdHZhciByZWdleFJvYm9zID0gbmV3IFJlZ0V4cChcIihpYV9hcmNoaXZlcil8KEdvb2dsZWJvdCl8KE1lZGlhcGFydG5lcnMtR29vZ2xlKXwoQWRzQm90LUdvb2dsZSl8KG1zbmJvdCl8KFlhaG9vISBTbHVycCl8KFp5Qm9yZyl8KEFzayBKZWV2ZXMvVGVvbWEpfChiaW5nYm90KXwoY1hlbnNlYm90KVwiKTtcclxuXHRcdHZhciBlaFJvYm8gPSByZWdleFJvYm9zLnRlc3QodXNlckFnZW50KTtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJidXNjYWRvclwiLCBlaFJvYm9dKTtcclxuXHRcdHJldHVybiBlaFJvYm87XHJcblx0fSxcclxuXHRtb250YVVybFN0ZzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKSAhPSAncHJkJyA/ICctc3RnJyA6ICcnO1xyXG5cdH0sXHJcblx0dGVtUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xyXG5cdFx0dmFyIHBhcmFtZXRyb3MgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XHJcblx0XHRyZXR1cm4gcGFyYW1ldHJvcy5pbmRleE9mKHBhcmFtTmFtZSkgIT0gLTEgPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHRnZXRWYWxvclBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbWV0cm8pIHtcclxuXHRcdGlmIChQaWFuby51dGlsLnRlbVBhcmFtZXRyb05hVXJsKHBhcmFtZXRybykpIHtcclxuXHRcdFx0dmFyIHBhcmFtZXRyb3MgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XHJcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFw/KCYpXVwiICsgcGFyYW1ldHJvICsgXCI9KFteJiNdKilcIik7XHJcblx0XHRcdHJldHVybiBwYXJhbWV0cm9zLm1hdGNoKHJlZ2V4KVsxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBcInNlbSBwYXJhbWV0cm9cIjtcclxuXHR9LFxyXG5cdGlzRGVidWc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRztcclxuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xyXG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJykge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJykge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRykpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRpc0RvbWluaW9PR2xvYm86IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIjovLyguKj8pL1wiKSwgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKTtcclxuXHRcdGlmICh1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJvZ2xvYm9cIikgPiAtMSB8fCAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwiZ2xvYm9pXCIpID4gLTEgJiYgdXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwiZWRnXCIpID09IC0xKSkge1xyXG5cdFx0XHRyZXR1cm4gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9LFxyXG5cdGNhbGxiYWNrTWV0ZXI6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xyXG5cdFx0cmVncmFzVGlueSA9IG1ldGVyRGF0YTtcclxuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcoZmFsc2UpO1xyXG5cdH0sXHJcblx0Y2FsbGJhY2tNZXRlckV4cGlyZWQ6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xyXG5cdFx0cmVncmFzVGlueSA9IG1ldGVyRGF0YTtcclxuXHRcdFBpYW5vLnZhcmlhdmVpcy5pc0NhbGxiYWNrTWV0dGVyRXhwaXJlZCA9IHRydWU7XHJcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KHRydWUpO1xyXG5cdH0sXHJcblx0Z2V0V2luZG93TG9jYXRpb25TZWFyY2g6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHR9LFxyXG5cdGdldFdpbmRvd0xvY2F0aW9uSHJlZjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9LFxyXG5cdGFkaWNpb25hckNzczogZnVuY3Rpb24oY3NzUGF0aCl7XHJcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZS5pbm5lckhUTUwgPSBjc3NQYXRoO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZSwgZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xyXG5cdH0sXHJcblx0aXNSZXZpc3RhOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHJldmlzdGFzID0gW1wiZXBvY2FcIiwgXCJhdXRvLWVzcG9ydGVcIiwgXCJ2b2d1ZVwiLCBcImdsYW1vdXJcIiwgXCJjYXNhLXZvZ3VlXCIsIFwibWFyaWUtY2xhaXJlXCIsIFwiY2FzYS1lLWphcmRpbVwiLCBcInF1ZW0tYWNvbnRlY2VcIiwgXCJnbG9iby1ydXJhbFwiLCBcImdxXCIsIFwibW9uZXRcIiwgJ2NyZXNjZXInLCdnYWxpbGV1J107XHJcblx0XHRpZihyZXZpc3Rhcy5pbmRleE9mKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSA+IC0xKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0cmVjYXJyZWdhUGlhbm86IGZ1bmN0aW9uICh0aXBvQ29udGV1ZG8sIGlzRXhjbHVzaXZvLCBub21lUHJvZHV0bykge1xyXG5cdFx0d2luZG93LnRpcG9Db250ZXVkb1BpYW5vID0gdGlwb0NvbnRldWRvO1xyXG5cdFx0d2luZG93LmNvbnRldWRvRXhjbHVzaXZvID0gaXNFeGNsdXNpdm87XHJcblx0XHR3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9IG5vbWVQcm9kdXRvO1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cucmVncmFzVGlueSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gXCJcIjtcclxuXHRcdH1cclxuXHRcdFBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XHJcblx0XHR0cC5leHBlcmllbmNlLmV4ZWN1dGUoKTtcclxuXHR9LFxyXG5cdGlzVmFsb3I6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSBcInZhbG9yXCIpXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uY29uZmlndXJhY2FvID0ge1xyXG5cdGpzb25Db25maWd1cmFjYW9UaW55UGFzczoge1xyXG5cdFx0J2ludCc6IHtcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonZFh1N2R2RktSaScsXHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXHJcblx0XHRcdCdzZXRTYW5kQm94JzondHJ1ZScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL3NhbmRib3gudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9ZFh1N2R2RktSaScsXHJcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgd2luZG93LnRpbnlDcHQuUHJvZHVjdC5pZCArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxyXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxyXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXHJcblx0XHR9LFxyXG5cdFx0J3FsdCc6e1xyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6JyxcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcclxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXHJcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgd2luZG93LnRpbnlDcHQuUHJvZHVjdC5pZCArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxyXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxyXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXHJcblx0XHR9LFxyXG5cdFx0J3ByZCc6e1xyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6JyxcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcclxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXHJcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgd2luZG93LnRpbnlDcHQuUHJvZHVjdC5pZCArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxyXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS8nLFxyXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblBpYW5vLmNvbnN0cnV0b3IgPSB7XHJcblx0aW5pdFRwOiBmdW5jdGlvbigpIHtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBQaWFub1wiLCBcIkluaWNpbyBJbml0VHBcIik7XHJcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xyXG5cdFx0dHAucHVzaChbXCJzZXRUYWdzXCIsIFtQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKV1dKTtcclxuXHRcdGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpIHx8IFBpYW5vLnV0aWwuaXNWYWxvcigpKSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcclxuXHRcdH1cclxuXHRcdHRwLnB1c2goW1wic2V0U2FuZGJveFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnNldFNhbmRCb3hdKTtcclxuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcclxuXHRcdHZhciBjbGVhbl91cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpLnNwbGl0KFwiP1wiKVswXTtcclxuXHRcdHRwLnB1c2goW1wic2V0UGFnZVVSTFwiLGNsZWFuX3VybF0pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibm9tZVByb2R1dG9cIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcclxuXHRcdFBpYW5vLmphbmVsYUFub25pbWEuZGV0ZWN0UHJpdmF0ZU1vZGUoZnVuY3Rpb24gKGlzX3ByaXZhdGUpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNvbnRldWRvRXhjbHVzaXZvXCIsIHRydWVdKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnICYmIHN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpKSB7XHJcblx0XHRcdFBpYW5vLmdvb2dsZS5pc1NwZWNpZmljR29vZ2xlVXNlcihzd2dFbnRpdGxlbWVudHMpO1xyXG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsXCJBVVRPUklaQURPXCIsIHRydWUsIFwiXCIpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby52ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8oSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuR0NPTSksIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcclxuXHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYmFubmVyQ29udGFkb3JMaWdhZG9cIiwgdHJ1ZV0pO1xyXG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xyXG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJBY3RpdmVcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyXSk7XHJcblx0XHR0cC5wdXNoKFtcImFkZEhhbmRsZXJcIiwgXCJtZXRlckV4cGlyZWRcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyRXhwaXJlZF0pO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiRmltIEluaXRUcFwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkUGlhbm9FeHBlcmllbmNlcygpe1xyXG5cdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnRpbnkpXHJcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdsb2FkUGlhbm9FeHBlcmllbmNlcycpXHJcblxyXG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRhLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG5cdGEuYXN5bmMgPSB0cnVlO1xyXG5cdGlmKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcclxuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm9SZXZpc3RhcztcdFxyXG5cdH0gZWxzZSB7XHJcblx0XHRhLnNyYyA9IFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsU2FuZGJveFBpYW5vO1xyXG5cdH1cclxuXHR2YXIgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xyXG5cdGIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgYik7XHJcblx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiU2NyaXB0IGFkaWNpb25hZG9cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBpYW5vSW5pdCgpIHsgXHJcblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcclxuXHRcdGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kJywgJ3BpYW5vSW5pdCcpXHJcblxyXG4gICAgaWYgKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpIHsgXHJcblx0XHR3aW5kb3cuU1dHLnB1c2goKHN1YnNjcmlwdGlvbnMpID0+IHtcclxuXHRcdFx0aWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2ctc3Vic2NyaXB0aW9ucycsIHN1YnNjcmlwdGlvbnMpXHJcblxyXG5cdFx0XHRzd2cgPSBzdWJzY3JpcHRpb25zO1xyXG5cclxuXHRcdFx0c3Vic2NyaXB0aW9ucy5zZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlKGVudGl0bGVtZW50c1Byb21pc2UgPT4ge1xyXG5cdFx0XHRcdGVudGl0bGVtZW50c1Byb21pc2UudGhlbihlbnRpdGxlbWVudHMgPT4geyBcclxuXHRcdFx0XHRcdHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSBlbnRpdGxlbWVudHM7XHJcblxyXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFNXR1wiLCBcIkVudGl0bGVtZW50cyByZWNlYmlkb3NcIik7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHdpbmRvdy50aW55Q3B0LlBpYW5vLnV0aWwudGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzKCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKFBpYW5vICE9PSAndW5kZWZpbmVkJyl7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnRpbnlDcHQuUGlhbm8uY29uc3RydXRvci5pbml0VHAoKTtcclxuXHRcdFx0XHRcdFx0XHRsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIlBpYW5vIG5hbyBmb2kgY2FycmVnYWRhIGNvcnJldGFtZW50ZSFcIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgR0Euc2V0RXZlbnRzRXJyb3IoXCJFbnRpdGxlbWVudHMgbsOjbyBjYXJyZWdhZG9cIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xyXG4gICAgICAgICAgICBsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNoZWNrUGF5d2FsbCgpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB0aW55SW5pdCgpIHtcclxuXHRUaW55LnNldFBpYW5vKFBpYW5vKTsgXHJcbiAgICBjb25zdCBTd2cgPSBuZXcgU3dnTW9kdWxlKCk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBTd2cuaW5pdCgpO1xyXG5cdH1cclxuXHRjYXRjaChlKSB7IGNvbnNvbGUuZXJyb3IoZSkgfVxyXG5cclxuXHRwaWFub0luaXQoKTsgXHJcbn07XHJcblxyXG50aW55SW5pdCgpOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==