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
  'oglobo': {
    'id': '3981',
    'cod_prod': 'OG03'
  },
  'blogs': {
    'id': '3981',
    'cod_prod': 'OG03'
  },
  'kogut': {
    'id': '3981',
    'cod_prod': 'OG03'
  },
  'blogAnalitico': {
    'id': '3981',
    'cod_prod': 'OG04'
  },
  'acervo': {
    'id': '3981',
    'cod_prod': 'OG04'
  },
  'jornaldigital': {
    'id': '3981',
    'cod_prod': 'OG01'
  },
  'monet': {
    'id': '6618',
    'cod_prod': 'monet'
  },
  'auto-esporte': {
    'id': '6697',
    'cod_prod': 'auto-esporte'
  },
  'epoca': {
    'id': '6697',
    'cod_prod': 'epoca'
  },
  'vogue': {
    'id': '6697',
    'cod_prod': 'vogue'
  },
  'glamour': {
    'id': '6697',
    'cod_prod': 'glamour'
  },
  'casa-vogue': {
    'id': '6697',
    'cod_prod': 'casa-vogue'
  },
  'marie-claire': {
    'id': '6697',
    'cod_prod': 'marie-claire'
  },
  'globo-rural': {
    'id': '6697',
    'cod_prod': 'globo-rural'
  },
  'gq': {
    'id': '6697',
    'cod_prod': 'gq'
  },
  'crescer': {
    'id': '6697',
    'cod_prod': 'crescer'
  },
  'galileu': {
    'id': '6697',
    'cod_prod': 'galileu'
  },
  'epoca-negocios': {
    'id': '6611',
    'cod_prod': 'epoca-negocios'
  },
  'casa-e-jardim': {
    'id': '6697',
    'cod_prod': 'casa-jardim'
  },
  'quem-acontece': {
    'id': '6697',
    'cod_prod': 'quem'
  },
  'pegn': {
    'id': '6615',
    'cod_prod': 'pequenas-empresas'
  },
  'valor': {
    'id': '6668',
    'cod_prod': 'valordigital'
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
          name: this.productName // id: this.productId

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
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = window.tinyCpt.isProduction ? 'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/swg/prod/products.json' : 'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/swg/dev/products.json';
                _context.next = 3;
                return fetch(url).then(function (res) {
                  return res.json();
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
    window.hasPaywall = window.hasPaywall || null;
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

/***/ "./app/scripts/cpnt-paywall-inline/Paywall.js":
/*!****************************************************!*\
  !*** ./app/scripts/cpnt-paywall-inline/Paywall.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaywallCptInline; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Piano__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Piano */ "./app/scripts/Piano.js");




var PaywallCptInline =
/*#__PURE__*/
function () {
  function PaywallCptInline() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PaywallCptInline);

    this.Piano = new _Piano__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.domain = window.tinyCpt.isProduction ? 'https://login.globo.com/' : 'https://login.qa.globoi.com/';
    this.paywallId = 'paywall-inline';
    this.setTemplateSettings(function () {
      _this.activeEvents();
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PaywallCptInline, [{
    key: "setTemplateSettings",
    value: function setTemplateSettings(callback) {
      var templateSettings = {
        title: 'Para continuar sua leitura, é preciso se cadastrar.',
        subtitle: 'É rápido e grátis!',
        buttonText: 'Cadastre-se gratuitamente agora',
        buttonLink: 'https://google.com?l1',
        loginPreText: 'Já possui cadastro? ',
        loginText: 'Faça login',
        loginLink: window.tinyCpt.isProduction ? 'https://login.globo.com/' : 'https://login.qa.globoi.com/',
        offerLink: "https://google.com?l1",
        imageMobi: "https://via.placeholder.com/300x150",
        imageDesk: "https://via.placeholder.com/804x128",
        imageLink: "https://via.placeholder.com/300x150",
        cssLoaded: false
      };
      window.glbPaywallInline = window.glbPaywallInline ? Object.assign({}, templateSettings, window.glbPaywallInline) : templateSettings;
      callback();
    }
  }, {
    key: "activeEvents",
    value: function activeEvents() {
      var postElement = window.analiticoPost;
      if (!postElement) return null;
      this.createTemplate(postElement);
    }
  }, {
    key: "createTemplate",
    value: function createTemplate(postElement) {
      var element = postElement.querySelector(".btn-read-more");
      var mainElement = postElement.querySelector('.main-content');
      var footerElement = postElement.querySelector('.post-footer');
      var opacityElement = "<div class=\"paywall-cpt-inline-opacity\"></div>";

      if (element) {
        if (!window.glbPaywallInline.cssLoaded) {
          document.body.insertAdjacentHTML('beforebegin', this.cssMinified);
          window.glbPaywallInline.cssLoaded = true;
        }

        footerElement.setAttribute('style', "\n\t\t\tpadding-top: 0px; position:relative");
        mainElement.setAttribute('style', "\n\t\t\tposition: relative;\n\t\t\theight: 120px;\n\t\t\toverflow: hidden;");
        mainElement.insertAdjacentHTML('beforeend', opacityElement); // postElement.classList.remove('hidden-content')

        element.insertAdjacentHTML('beforebegin', this.template);
        var removedElement = Array.from(element.parentNode.parentNode.childNodes).find(function (element) {
          return element.className === 'other-content';
        });
        if (removedElement) removedElement.parentNode.removeChild(removedElement);
        element.remove();
      }
    }
  }, {
    key: "getUrlLoginRegister",
    value: function getUrlLoginRegister() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var urlValidaUsuarioBarramento = window.ambienteUtilizadoPiano === 'prd' ? 'https://assinatura.oglobo.globo.com/ValidaUsuarioBarramento.html' : 'https://assinatura.globostg.globoi.com/ValidaUsuarioBarramento.html';
      var uri = location.href;
      var serviceId = window.tinyCpt.Piano.variaveis.getServicoId() || null;
      var str = '';
      var urlReturn = '';

      if (!this.debug && this.Piano.isDefined) {
        urlReturn = encodeURIComponent(urlValidaUsuarioBarramento + '?codigoProduto=' + this.Piano.content.variaveis.getCodigoProduto() + '&serviceId=' + serviceId + '&ambienteUtilizado=' + window.ambienteUtilizadoPiano + '&nomeProduto=' + this.Piano.content.variaveis.getNomeProduto() + '&urlRetorno=' + uri);

        if (type === 'button') {
          str = "".concat(this.domain, "cadastro/").concat(serviceId, "?url=").concat(urlReturn);
        } else {
          str = "".concat(this.domain, "login/").concat(serviceId, "?url=").concat(urlReturn);
        }
      }

      return str;
    }
  }, {
    key: "templateVars",
    get: function get() {
      return window.glbPaywallInline;
    }
  }, {
    key: "template",
    get: function get() {
      var template = "\n\t\t<link href=\"https://fonts.googleapis.com/css?family=Open+Sans|Raleway&display=swap\" rel=\"stylesheet\">\n\t\t<div class=\"paywall-cpt-inline\" id=".concat(this.paywallId, "> \n\t\t\t<h1 class =\"paywall-cpt-inline-title\"><span class=paywall-cpt-inline-title-first_line>").concat(this.templateVars.title, "</span><br><span class=paywall-cpt-inline-title-second_line>").concat(this.templateVars.subtitle, "</span></h1>\n\n\t\t\t<a href=\"").concat(this.templateVars.buttonLink, "\">\n\t\t\t\t<button class=\"paywall-cpt-inline-button\">\n\t\t\t\t\t<span class=\"paywall-cpt-inline-span\">").concat(this.templateVars.buttonText, "</span>\n\t\t\t\t</button> \n\t\t\t</a>\n\t\t\t<p class=\"paywall-cpt-inline-p\">").concat(this.templateVars.loginPreText, "<a href=\"").concat(this.getUrlLoginRegister(), "\" class=\"paywall-cpt-inline-a\">").concat(this.templateVars.loginText, "</a></p>\n\t\t\t<div class=\"paywall-cpt-inline-offer\">\n\t\t\t<a href=").concat(this.templateVars.offerLink, ">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.imageMobi, "\" media=\"(max-width: 375px)\">\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.imageDesk, "\" media=\"(min-width: 374px)\">\n\t\t\t\t\t<img class=\"paywall-cpt-inline-img\" src=\"").concat(this.templateVars.imageLink, "\" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t");
      return template;
    }
  }, {
    key: "cssMinified",
    get: function get() {
      return "\n\t  <style>\n\t  .paywall-cpt-inline{margin: 0 auto 40px;padding:20px;border-radius: 4px;border: solid 1px #dbdde1;background-color: #f2f2f5;}.paywall-cpt-inline-opacity{background: linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff 40%,#fff 100%);position: absolute;bottom: 0;width: 100%;height: 58px;overflow: hidden;}.paywall-cpt-inline-title{margin-left:auto;margin-right:auto; margin-bottom:30px;display:block;font-family:Raleway;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.2;letter-spacing:normal;text-align:center;color:#325e94}\n\t  .paywall-cpt-inline-button{cursor:pointer;margin-left:auto;margin-right:auto;margin-bottom:30px;display:block;width:256px;height:48px;background-color:#f59c00;border-radius:4px;border:solid 3px #f59c00;}\n\t  @media screen and (min-width: 424px) {\n\t\t.paywall-cpt-inline-button { width: 356px; }\n\t }  \n\t .paywall-cpt-inline-img {margin: auto;width: 80em;}.paywall-cpt-inline-span {font-family:Open Sans;font-size:14px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;text-align:center;color:#fff;}.paywall-cpt-inline-p{margin-left:auto;margin-right:auto;margin-botton:30px;display:block;font-family:Raleway;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.14;letter-spacing:normal;text-align:center;color:#707070;}.paywall-cpt-inline-a{font-weight:700;color:#325e94;}.paywall-cpt-inline-offer{margin-left:auto;margin-right:auto;background-color:#fff;} \n\t  </style>";
    }
  }]);

  return PaywallCptInline;
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
      this.GA.setEvents(this.metrics.paywall.viewName, window.Piano.experience.name);
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
          this.metrics.paywall.viewName = 'Exibicao Register';
          this.metrics.paywall.name = 'Register comum';
          this.metrics.paywall.label = 'Cadastre-se';
          this.metrics.fb.pixel.name = 'ViewRegisterWall';
          break;

        case 'exclusivo':
          this.metrics.paywall.viewName = 'Exibicao Register';
          this.metrics.paywall.name = 'Register exclusivo';
          this.metrics.paywall.label = 'Assine agora';
          this.metrics.fb.pixel.name = 'ViewLoginExclusivo';
          break;

        case 'paywall':
          this.metrics.paywall.viewName = 'Barreira';
          this.metrics.paywall.name = 'Barreira';
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
        _this3.elCpt.style.zIndex = 20;

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
      var serviceId = window.tinyCpt.Piano.variaveis.getServicoId() || null;
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
/* harmony import */ var _cpnt_paywall_inline_Paywall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cpnt-paywall-inline/Paywall */ "./app/scripts/cpnt-paywall-inline/Paywall.js");








var Tiny = new _Tiny__WEBPACK_IMPORTED_MODULE_3__["default"]();
var GA = new _GA__WEBPACK_IMPORTED_MODULE_4__["default"]();
GA.setGlobalVars();
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
    var productsObject = Piano.variaveis.getProductsObject();
    var id = productsObject[Piano.variaveis.getNomeProduto()]['id'];

    if (!id) {
      GA.setEventsError('ServiceID não definido.', document.location.href + ' nomeProduto: ' + Piano.variaveis.getNomeProduto());
      return '0000';
    }

    return id;
  },
  getCodigoProduto: function getCodigoProduto() {
    var nomeProduto = Piano.variaveis.getNomeProduto();
    var productsObject = Piano.variaveis.getProductsObject();
    var codProd = productsObject[Piano.variaveis.getNomeProduto()]['cod_prod'];

    if (!codProd) {
      GA.setEventsError("Ao obter código do produto", nomeProduto + " - " + document.location.href);
      Piano.autenticacao.defineUsuarioPiano(true, 'erro', true, " ");
      return 'error';
    }

    return codProd;
  },
  getProductsObject: function getProductsObject() {
    return {
      'oglobo': {
        'id': '3981',
        'cod_prod': 'OG03'
      },
      'blogs': {
        'id': '3981',
        'cod_prod': 'OG03'
      },
      'kogut': {
        'id': '3981',
        'cod_prod': 'OG03'
      },
      'blogAnalitico': {
        'id': '3981',
        'cod_prod': 'OG04'
      },
      'acervo': {
        'id': '3981',
        'cod_prod': 'OG04'
      },
      'jornaldigital': {
        'id': '3981',
        'cod_prod': 'OG01'
      },
      'monet': {
        'id': '6618',
        'cod_prod': 'monet'
      },
      'auto-esporte': {
        'id': '6697',
        'cod_prod': 'auto-esporte'
      },
      'epoca': {
        'id': '6697',
        'cod_prod': 'epoca'
      },
      'vogue': {
        'id': '6697',
        'cod_prod': 'vogue'
      },
      'glamour': {
        'id': '6697',
        'cod_prod': 'glamour'
      },
      'casa-vogue': {
        'id': '6697',
        'cod_prod': 'casa-vogue'
      },
      'marie-claire': {
        'id': '6697',
        'cod_prod': 'marie-claire'
      },
      'globo-rural': {
        'id': '6697',
        'cod_prod': 'globo-rural'
      },
      'gq': {
        'id': '6697',
        'cod_prod': 'gq'
      },
      'crescer': {
        'id': '6697',
        'cod_prod': 'crescer'
      },
      'galileu': {
        'id': '6697',
        'cod_prod': 'galileu'
      },
      'epoca-negocios': {
        'id': '6611',
        'cod_prod': 'epoca-negocios'
      },
      'casa-e-jardim': {
        'id': '6697',
        'cod_prod': 'casa-jardim'
      },
      'quem-acontece': {
        'id': '6697',
        'cod_prod': 'quem'
      },
      'pegn': {
        'id': '6615',
        'cod_prod': 'pequenas-empresas'
      },
      'valor': {
        'id': '6668',
        'cod_prod': 'valordigital'
      }
    };
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
Piano.regionalizacao = {
  getRegion: function getRegion() {
    var kruxGeo = localStorage.getItem('kxglobo_geo');

    if (kruxGeo) {
      kruxGeo.split('&').forEach(function (item) {
        var data = item.split('=');
        var key = data[0];
        var value = data[1];

        if (key === 'region') {
          tp.push(["setCustomVariable", "region", value]);
        }
      });
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
    window._GALimite = "-";
    window._GAContagem = "-";
    if (!metricas) return;
    window._GAContagem = "" + metricas.views;

    if (window._GAContagem.length == 1) {
      window._GAContagem = "0" + window._GAContagem;
    }

    window._GALimite = metricas.nomeExperiencia + " : " + metricas.maxViews;
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
    Piano.typePaywall = typePaywall;

    try {
      new _cpnt_paywall_Paywall__WEBPACK_IMPORTED_MODULE_6__["default"]();
      window.hasPaywall = true;
    } catch (e) {
      console.error('Paywall - Error on load');
      Piano.triggerAdvertising();
    }
  },
  analytic: function analytic() {
    try {
      new _cpnt_paywall_inline_Paywall__WEBPACK_IMPORTED_MODULE_7__["default"]();
      window.hasPaywall = true;
    } catch (err) {
      console.error('PaywallAnalytic - Error on load', err);
    }
  }
};

function analyticalUnblockedForPiano() {
  var event = new CustomEvent('analyticalUnblockedForPiano');
  document.dispatchEvent(event);
}

function analyticalBlockedForPiano() {
  var event = new CustomEvent('analyticalBlockedForPiano');
  document.dispatchEvent(event);
}

function analyticalPostIsOpened() {
  var event = new CustomEvent('analyticalPostIsOpened');
  document.dispatchEvent(event);
}

function analyticalPostIsLoading() {
  var event = new CustomEvent('analyticalPostIsLoading');
  document.dispatchEvent(event);
}

function checkExperiencesHasChange() {
  return new Promise(function (resolve, reject) {
    var count = 0;
    var interval = setInterval(function () {
      if (window.tp !== 'undefined' && window.tp.experience && window.tp.experience._getLastExecutionResult() && window.tp.experience._getLastExecutionResult().result && window.tp.experience._getLastExecutionResult().result.events) {
        var experiences = window.tp.experience._getLastExecutionResult().result.events;

        var experiencesClone = Array.from(window.tp.experience._getLastExecutionResult().result.events);
        var experiencesChanged = Object.is(JSON.stringify(experiences), JSON.stringify(experiencesClone));

        if (experiencesChanged) {
          experiences.forEach(function (item) {
            if (item.eventType === 'runJs') {
              if (item.eventParams.snippet !== 'undefined' && item.eventParams.snippet.includes('paywall.analytic')) {
                resolve(true);
                clearInterval(interval);
              }
            }
          });
        }

        if (count === 10) {
          resolve(false);
          clearInterval(interval);
        }

        count++;
      }
    }, 100);
  });
}

Piano.checkPianoActive = function () {
  var count = 0;
  var interval = setInterval(function () {
    if (window.tp !== 'undefined' && window.tp.experience && window.tp.experience._getLastExecutionResult() && window.tp.experience._getLastExecutionResult().result && window.tp.experience._getLastExecutionResult().result.events) {
      Piano.checkPaywall(window.tp.experience._getLastExecutionResult().result.events);
      clearInterval(interval);
    } else {
      if (count === 10) {
        Piano.triggerAdvertising();
        clearInterval(interval);
      }

      count++;
    }
  }, 500);
};

Piano.checkPaywall = function () {
  var PianoResultEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var hasRunJsWithPaywall = false;

  if (PianoResultEvents) {
    PianoResultEvents.forEach(function (item) {
      if (item.eventType === 'runJs') {
        if (item.eventParams.snippet !== 'undefined' && (item.eventParams.snippet.includes('paywall.show') || item.eventParams.snippet.includes('paywall.analytic') || item.eventParams.snippet.includes('mostrarBarreira'))) {
          window.hasPaywall = true;
          hasRunJsWithPaywall = true;
          Piano.triggerPaywallOpened();
        }
      }
    });
    if (!hasRunJsWithPaywall) Piano.triggerAdvertising();
  }
};

Piano.triggerAdvertising = function () {
  window.hasPaywall = false;
  var event = new CustomEvent('clearForAds');
  document.dispatchEvent(event);
};

Piano.triggerPaywallOpened = function () {
  var event = new CustomEvent('blockForAds');
  document.dispatchEvent(event);
};

Piano.registerPaywall = {
  mostrarBarreira: function mostrarBarreira() {
    var versao = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var tipo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    Piano.typePaywall = tipo;

    if (!versao || !Piano.typePaywall) {
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
    return Piano.variaveis.getTipoConteudoPiano() === 'section' ? true : false;
  },
  temVariaveisObrigatorias: function temVariaveisObrigatorias() {
    if (typeof Piano.variaveis.getTipoConteudoPiano() === 'undefined') {
      GA.setEventsError('Variavel tipoConteudoPiano nao esta definida', document.location.href);
      return false;
    }

    ;

    if (typeof Piano.variaveis.getNomeProduto() === 'undefined') {
      GA.setEventsError('Variavel nomeProdutoPiano nao esta definida', document.location.href);
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
    var revistas = ["epoca", "auto-esporte", "vogue", "glamour", "casa-vogue", "marie-claire", "casa-e-jardim", "quem-acontece", "globo-rural", "gq", "monet", 'crescer', 'galileu', 'epoca-negocios', 'pegn'];
    if (revistas.indexOf(Piano.variaveis.getNomeProduto()) > -1) return true;else return false;
  },
  recarregaPiano: function recarregaPiano(tipoConteudo, isExclusivo, nomeProduto, postOpened) {
    var postElement = window.analiticoPost;
    window.tipoConteudoPiano = tipoConteudo;
    window.conteudoExclusivo = isExclusivo;
    window.nomeProdutoPiano = nomeProduto;
    window["tp"] = [];

    if (typeof window.regrasTiny !== 'undefined') {
      window.regrasTiny.nomeExperiencia = "";
    }

    if (postElement) {
      if (!postOpened) {
        analyticalPostIsOpened();
      } else {
        analyticalPostIsLoading();
        Piano.construtor.initTp();
        loadPianoExperiences();
        checkExperiencesHasChange().then(function (changed) {
          if (changed) {
            analyticalBlockedForPiano();
          } else {
            analyticalUnblockedForPiano();
          }
        });
      }
    }
  },
  isValor: function isValor() {
    if (Piano.variaveis.getNomeProduto() === "valor") return true;else return false;
  }
};
Piano.configuracao = {
  jsonConfiguracaoTinyPass: {
    'int': {
      'idSandboxTinypass': 'dXu7dvFKRi',
      'idSandboxTinypassRevistas': 'MctFgRCEsu',
      'setSandBox': 'true',
      'urlSandboxPiano': 'https://sandbox.tinypass.com/xbuilder/experience/load?aid=dXu7dvFKRi',
      'urlSandboxPianoRevistas': 'https://sandbox.tinypass.com/xbuilder/experience/load?aid=MctFgRCEsu',
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

    if (window.tinyCpt.isProduction && typeof swg !== 'undefined' && typeof swgEntitlements !== 'undefined' && swgEntitlements.enablesThis()) {
      Piano.google.isSpecificGoogleUser(swgEntitlements);
      Piano.autenticacao.defineUsuarioPiano(true, "AUTORIZADO", true, "");
    } else {
      Piano.autenticacao.verificaUsuarioLogadoNoBarramento(_Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.GCOM), _Helpers__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie(Piano.variaveis.constante.cookie.UTP));
    }

    Piano.regionalizacao.getRegion();
    Piano.krux.obtemSegmentacao();
    tp.push(["setCustomVariable", "bannerContadorLigado", true]);
    Piano.util.isOrigemBuscador() || Piano.util.extraiParametrosCampanhaDaUrl();
    tp.push(["addHandler", "meterActive", Piano.util.callbackMeter]);
    tp.push(["addHandler", "meterExpired", Piano.util.callbackMeterExpired]);
  }
};

function loadPianoExperiences() {
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
}

function pianoInit() {
  window.Piano.checkPianoActive();
  if (window.tinyCpt.debug.tiny) console.log('log-method', 'pianoInit');

  if (window.tinyCpt.isProduction && window.tinyCpt.Swg.global) {
    window.SWG.push(function (subscriptions) {
      if (window.tinyCpt.debug.swg) console.log('log-subscriptions', subscriptions);
      swg = subscriptions;
      subscriptions.setOnEntitlementsResponse(function (entitlementsPromise) {
        entitlementsPromise.then(function (entitlements) {
          window.swgEntitlements = entitlements;

          if (window.tinyCpt.Piano.util.temVariaveisObrigatorias()) {
            try {
              window.tinyCpt.Piano.construtor.initTp();
              loadPianoExperiences();
            } catch (error) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLWdhLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiRmIiLCJkYXRhIiwiZGVidWciLCJ3aW5kb3ciLCJ0aW55Q3B0IiwiZGlzYWJsZWQiLCJmYiIsImhhc1BpeGVsIiwicGl4ZWwiLCJuYW1lIiwiaXNEZWZpbmVkIiwiZmJxIiwiR0EiLCJnYSIsIlByb2R1Y3RzIiwiUHJvZHVjdHNNb2R1bGUiLCJkYXRhTGF5ZXIiLCJpc1Byb2R1Y3RWYWxvciIsIl9nYXEiLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJIZWxwZXJzIiwicHJvcCIsImNfbmFtZSIsInZhbHVlIiwiZXhwaXJlZGF5cyIsImV4ZGF0ZSIsIkRhdGUiLCJob3N0bmFtZSIsImxvY2F0aW9uIiwic2V0RGF0ZSIsImdldERhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsImVzY2FwZSIsInRvVVRDU3RyaW5nIiwic3BsaXQiLCJyZXZlcnNlIiwibWF0Y2giLCJSZWdFeHAiLCJjb29raWVUaW55IiwidW5lc2NhcGUiLCJ0b1N0cmluZyIsIlBpYW5vIiwiY29udGVudCIsInNldEV4cGVyaWVuY2UiLCJleHBlcmllbmNlTmFtZSIsImV4cGVyaWVuY2UiLCJyZWdyYXNUaW55Iiwibm9tZUV4cGVyaWVuY2lhIiwic3Vic2VnbWVudGFjYW9QaWFubyIsInNldENvb2tpZSIsInZhcmlhdmVpcyIsImNvbnN0YW50ZSIsIlVUUCIsInByb2R1Y3ROYW1lIiwibm9tZVByb2R1dG9QaWFubyIsInByb2R1Y3RzU2V0dGluZ3MiLCJQcm9kdWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdHNJZCIsImlkIiwiU3dnIiwiU1dHIiwic3dnRW50aXRsZW1lbnRzIiwic3dnIiwibG9jYWxQcm9kdWN0UGlhbm8iLCJoYXNQcm9kdWN0SlNPTiIsInByb2R1Y3RKU09OIiwiZWxIZWFkIiwiaGVhZCIsInNldEdsb2JhbFNXRyIsImdsb2JhbCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsInV0bXNQcm9wcyIsImdsYlBheXdhbGwiLCJ1dG1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsInNldCIsInN1YnNjcmliZSIsInVybCIsImlzUHJvZHVjdGlvbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvZHVjdCIsImZpbHRlciIsInBpYW5vUHJvZHVjdE5hbWUiLCJvYmoiLCJwcm9wc1RvUmVtb3ZlIiwibmV3T2JqIiwiZWxlbWVudCIsImdldFByb2R1Y3QiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXJrdXBUZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3JjIiwidXJsUHJvZCIsInVybFN0ZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldE1hcmt1cCIsInNldFN3Z1NjcmlwdCIsInNldEFsZGViYXJhblNjcmlwdCIsInRlc3RTV0ciLCJUaW55IiwiaGFzUGF5d2FsbCIsInRwIiwiUGF5d2FsbEFuYWx5dGljcyIsInNldEdsb2JhbFRpbnkiLCJzZXRHbG9iYWwiLCJpbml0IiwiZGVmYXVsdFNldHRpbmdzIiwidGlueSIsInBheXdhbGwiLCJhbWJpZW50ZVV0aWxpemFkb1BpYW5vIiwiUGF5d2FsbENwdElubGluZSIsIlBpYW5vTW9kdWxlIiwiZG9tYWluIiwicGF5d2FsbElkIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsImFjdGl2ZUV2ZW50cyIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRpdGxlIiwic3VidGl0bGUiLCJidXR0b25UZXh0IiwiYnV0dG9uTGluayIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGV4dCIsImxvZ2luTGluayIsIm9mZmVyTGluayIsImltYWdlTW9iaSIsImltYWdlRGVzayIsImltYWdlTGluayIsImNzc0xvYWRlZCIsImdsYlBheXdhbGxJbmxpbmUiLCJwb3N0RWxlbWVudCIsImFuYWxpdGljb1Bvc3QiLCJjcmVhdGVUZW1wbGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluRWxlbWVudCIsImZvb3RlckVsZW1lbnQiLCJvcGFjaXR5RWxlbWVudCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjc3NNaW5pZmllZCIsInNldEF0dHJpYnV0ZSIsInRlbXBsYXRlIiwicmVtb3ZlZEVsZW1lbnQiLCJBcnJheSIsImZyb20iLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImZpbmQiLCJjbGFzc05hbWUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsInVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvIiwidXJpIiwiaHJlZiIsInNlcnZpY2VJZCIsImdldFNlcnZpY29JZCIsInN0ciIsInVybFJldHVybiIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldENvZGlnb1Byb2R1dG8iLCJnZXROb21lUHJvZHV0byIsInRlbXBsYXRlVmFycyIsImdldFVybExvZ2luUmVnaXN0ZXIiLCJQYXl3YWxsR0FNb2R1bGUiLCJHQU1vZHVsZSIsIm1ldHJpY3MiLCJwYXl3YWxsVHlwZSIsIl9QaWFubyIsInNldEV2ZW50cyIsInZpZXdOYW1lIiwiUlRJRVgiLCJyZXNldFV0cCIsImRhdGFzZXQiLCJnYVJlc2V0dXRwIiwiaW1hZ2VUb3AiLCJnYUltYWdlUG9zaXRpb24iLCJnYUxhYmVsIiwiZXZlbnQiLCJldmVudG9HQUNhdGVnb3JpYSIsImV2ZW50b0dBQWNhbyIsImdhQWN0aW9uIiwiZXZlbnRvR0FSb3R1bG8iLCJldmVudG9HQVZhbG9yIiwiZXZlbnRvR0FJbnRlcmFjYW8iLCJzZXREYXRhbGF5ZXIiLCJ0eXBlUGF5d2FsbCIsIlBheXdhbGxDcHQiLCJTd2dNb2R1bGUiLCJGQiIsIkZiTW9kdWxlIiwiUGF5d2FsbCIsImFzc2V0c1BhdGgiLCJkaXNwbGF5IiwicHJvZHVjdENsYXNzIiwidGFyZ2V0QmxhbmsiLCJ0b3BNb2JpIiwidG9wRGVzayIsInRvcExpbmsiLCJsZWZ0TW9iaSIsImxlZnREZXNrIiwibGVmdExpbmsiLCJyaWdodE1vYmkiLCJyaWdodERlc2siLCJyaWdodExpbmsiLCJoaWRlTG9naW5BcmVhIiwibG9naW5UYWciLCJjbGVhckxvZ2luQXJlYSIsInNldERlYnVnVGVtcGxhdGVTZXR0aW5ncyIsImVsQm9keSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJlbENwdCIsInNldEVsV3JhcHBlciIsImVsVG9SZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keUFkanVzdCIsInJlbW92ZUVsZW1lbnRzIiwiYWN0aXZlVGVtcGxhdGVTZXR0aW5ncyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBheXdhbGxMb2FkIiwiZWxDcHRXcmFwIiwic2V0VGltZW91dCIsImVsQm9keUhlaWdodCIsImlubmVySGVpZ2h0IiwiZWxDcHRXcmFwSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3VycmVudFRvcCIsIk1hdGgiLCJhYnMiLCJ0b3BXaXRoRnVsbEVsZW1lbnQiLCJ0b3AiLCJvcGFjaXR5IiwiekluZGV4IiwiZXZ0V2hlZWwiLCJldnRUb3VjaCIsInNldFBpeGVsVHlwZSIsImNsaWNrVGFyZ2V0cyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiaXNMb2dpbiIsIkJvb2xlYW4iLCJnZXRBdHRyaWJ1dGUiLCJpc1VybFN3ZyIsImluY2x1ZGVzIiwibm90QmxhbmsiLCJocmVmVGFyZ2V0IiwidHJpZ2dlciIsInNldFV0bXMiLCJvcGVuIiwiYmluZCIsIm5ld3RvcCIsInN0ZXAiLCJtdWx0aXBsaWVyIiwiZGVsdGFZIiwiZWxUb3AiLCJ0b3VjaHN0YXJ0WSIsInRvdWNoZW5kWSIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWSIsImRpZmYiLCJkZWxheVRpbWVyIiwiVGlueU1vZHVsZSIsInNldEdsb2JhbFZhcnMiLCJhbWJpZW50ZXNBY2VpdG9zIiwic3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc28iLCJzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwiaXNDYWxsYmFja01ldHRlckV4cGlyZWQiLCJHQ09NIiwiQU1CSUVOVEUiLCJTQVZFX1NVQlNDUklQVElPTiIsIkNSRUFURURfR0xPQk9JRCIsIkdMT0JPSURfTUVTU0FHRSIsIm1ldHJpY2FzIiwiRVZFTlRPX1NFTV9BQ0FPIiwiRVJSTyIsImtydXgiLCJTRUdNRU5UQUNPRVMiLCJLUlVYTElHQURPIiwidXRpbCIsIklQIiwiREVCVUciLCJpc0NvbnRldWRvRXhjbHVzaXZvIiwiY29udGV1ZG9FeGNsdXNpdm8iLCJnZXRBbWJpZW50ZVBpYW5vIiwiaW5kZXhPZiIsImdldFZhbG9yUGFyYW1ldHJvTmFVcmwiLCJnZXRDb29raWUiLCJnZXRUaXBvQ29udGV1ZG9QaWFubyIsInRpcG9Db250ZXVkb1BpYW5vIiwiZXhlY3V0b3VQYWdldmlldyIsInNldEV2ZW50c0Vycm9yIiwicHJvZHVjdHNPYmplY3QiLCJnZXRQcm9kdWN0c09iamVjdCIsIm5vbWVQcm9kdXRvIiwiY29kUHJvZCIsImF1dGVudGljYWNhbyIsImRlZmluZVVzdWFyaW9QaWFubyIsImphbmVsYUFub25pbWEiLCJyZXRyeSIsImlzRG9uZSIsIm5leHQiLCJjdXJyZW50X3RyaWFsIiwibWF4X3JldHJ5IiwiaXNfdGltZW91dCIsImlzSUUxME9yTGF0ZXIiLCJ1c2VyX2FnZW50IiwidWEiLCJleGVjIiwicGFyc2VJbnQiLCJkZXRlY3RQcml2YXRlTW9kZSIsImlzX3ByaXZhdGUiLCJ3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSIsIlRFTVBPUkFSWSIsImUiLCJpbmRleGVkREIiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGIiLCJyZWFkeVN0YXRlIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ0ZW0iLCJnZXRJdGVtIiwibGlnYWRvIiwicGFyYW1ldHJvIiwidmFsb3JQYXJhbWV0cm8iLCJvYnRlbVNlZ21lbnRhY2FvIiwic2VnbWVudGFjb2VzIiwiaSIsInJlZ2lvbmFsaXphY2FvIiwiZ2V0UmVnaW9uIiwia3J1eEdlbyIsImtleSIsImVudmlhRXZlbnRvc0dBIiwiX0dBQWNhbyIsIl9HQVJvdHVsbyIsIm1vbnRhUm90dWxvR0EiLCJzZXRMaW1pdGVDb250YWdlbSIsIl9HQUxpbWl0ZSIsIl9HQUNvbnRhZ2VtIiwidmlld3MiLCJtYXhWaWV3cyIsImlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3RlciIsInJlZ3JhcyIsInBhc3NhZ2VtIiwiZmx1eG8iLCJleGVjdXRhQXBvc1BhZ2V2aWV3IiwiZXhwaXJvdSIsInRwQ29udGV4dCIsInNldGFWYXJpYXZlaXMiLCJpZExvZ2luIiwidGlwb0xvZ2luIiwiYXNzaW5hdHVyYUxvZ2FkYSIsImlkTG9naW5Bc3NpbmFudGUiLCJ0aXBvTG9naW5Bc3NpbmFudGUiLCJiYW5uZXIiLCJtb3N0cmFyRm9vdGVyIiwidmVyc2FvIiwiYWRpY2lvbmFyQ3NzIiwibW9udGFVcmxTdGciLCJ4bWxIdHRwUmVxdWVzdCIsImdlcmFTY3JpcHROYVBhZ2luYSIsIm1vc3RyYXJCb3Rhb0Fzc2luYXR1cmFIZWFkZXJGb290ZXIiLCJtb3N0cmFyQXZhdGFySGVhZGVyIiwiYm90dG9tRml4ZWQiLCJwYXJhbXMiLCJnbGJCYW5uZXJCb3R0b20iLCJtb3N0cmFyU1dHIiwiY3NzIiwic2NyaXB0SnMiLCJtb3N0cmFySGlnaGxpZ2h0U2FsZSIsIm1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvciIsInJlZ2lzdGVyIiwibW9zdHJhckJhcnJlaXJhIiwiaGVscGVyIiwicmVkaXJlY2lvbmFyQmFycmVpcmEiLCJzaG93IiwiZXJyb3IiLCJ0cmlnZ2VyQWR2ZXJ0aXNpbmciLCJhbmFseXRpYyIsImVyciIsImFuYWx5dGljYWxVbmJsb2NrZWRGb3JQaWFubyIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImFuYWx5dGljYWxCbG9ja2VkRm9yUGlhbm8iLCJhbmFseXRpY2FsUG9zdElzT3BlbmVkIiwiYW5hbHl0aWNhbFBvc3RJc0xvYWRpbmciLCJjaGVja0V4cGVyaWVuY2VzSGFzQ2hhbmdlIiwiX2dldExhc3RFeGVjdXRpb25SZXN1bHQiLCJldmVudHMiLCJleHBlcmllbmNlcyIsImV4cGVyaWVuY2VzQ2xvbmUiLCJleHBlcmllbmNlc0NoYW5nZWQiLCJpcyIsImV2ZW50VHlwZSIsImV2ZW50UGFyYW1zIiwic25pcHBldCIsImNoZWNrUGlhbm9BY3RpdmUiLCJjaGVja1BheXdhbGwiLCJQaWFub1Jlc3VsdEV2ZW50cyIsImhhc1J1bkpzV2l0aFBheXdhbGwiLCJ0cmlnZ2VyUGF5d2FsbE9wZW5lZCIsInJlZ2lzdGVyUGF5d2FsbCIsInRpcG8iLCJzdGF0dXMiLCJjb211bmljYWRvIiwibW9zdHJhckluZm9ybWFjYW8iLCJhZGJsb2NrIiwibW9zdHJhckFkQmxvY2siLCJnbGJBZGJsb2NrIiwiYmxvcXVlaW9zIiwibGliZXJhckVzYyIsImJsb3F1ZWlhVmlld01vZGUiLCJwYXJjZWlybyIsIm1vc3RyYUZvb3RlclBhcmNlaXJvIiwiaW5hZGltcGxlbnRlIiwiZ2V0TGlua0Fzc2luYXR1cmEiLCJsaW5rIiwicmVsIiwidXJsU2NyaXB0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9zdGEiLCJyZXNwb25zZVRleHQiLCJhcHBlbmREZVNjcmlwdCIsImFwcGVuZENoaWxkIiwic3RhdHVzVGV4dCIsImZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwiaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVzcEpzb24iLCJwYXJzZSIsInNpdHVhY2FvUGFnYW1lbnRvIiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbyIsImdsYmlkIiwiY29kaWdvUHJvZHV0byIsImNvbmZpZ3VyYWNhbyIsImpzb25Db25maWd1cmFjYW9UaW55UGFzcyIsInVybFZlcmlmaWNhTGVpdG9yIiwicmVzcG9zdGFEZVRlcm1vRGVVc28iLCJyZXNwb3N0YURlTW90aXZvIiwibW90aXZvIiwidGVtVGVybW9EZVVzbyIsImlzQXV0b3JpemFkbyIsImF1dG9yaXphZG8iLCJfanNvbkxlaXRvciIsInVzdWFyaW9JZCIsImJ0b2EiLCJlbmNvZGVVUkkiLCJnb29nbGUiLCJzaG93U2F2ZVN1YnNjcmlwdGlvbiIsInN3Z1NlcnZpY2UiLCJTd2dTZXJ2aWNlIiwic2F2ZUdsb2JvU3Vic2NyaXB0aW9uIiwiaXNBdXRob3JpemVkIiwiZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UiLCJzdWJzY3JpcHRpb25Ub2tlbiIsImlzU3BlY2lmaWNHb29nbGVVc2VyIiwib0dsb2JvQnVzaW5lc3MiLCJPR2xvYm9CdXNpbmVzcyIsInZlcmlmeUlmVXNlckhhc0FjY2Vzc09yRGVmZXJyZWQiLCJlbnRpdGxlbWVudHMiLCJyZXNwb25zZSIsImVuYWJsZXNUaGlzIiwiaXNMb2dhZG9DYWR1biIsInV0cCIsInZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50byIsIl9sZWl0b3IiLCJkZWNvZGVVUkkiLCJhdG9iIiwicHJvZHV0byIsImxvZ2FkbyIsInV1aWQiLCJ0ZXJtb0RlVXNvIiwiaXNTZWN0aW9uIiwidGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzIiwiZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmwiLCJnZXRXaW5kb3dMb2NhdGlvblNlYXJjaCIsImNoYXZlc0NhbXBhbmhhIiwidmFsb3Jlc0NhbXBhbmhhIiwiaWR4UGFyYW1DYW1wYW5oYSIsImNoYXZlQ2FtcGFuaGEiLCJyZWdleCIsInZhbG9yQ2FtcGFuaGEiLCJqb2luIiwiY2FtcGFuaGEiLCJpc09yaWdlbUJ1c2NhZG9yIiwicmVnZXhSb2JvcyIsImVoUm9ibyIsInRlbVBhcmFtZXRyb05hVXJsIiwicGFyYW1OYW1lIiwicGFyYW1ldHJvcyIsImlzRGVidWciLCJpc0RvbWluaW9PR2xvYm8iLCJnZXRXaW5kb3dMb2NhdGlvbkhyZWYiLCJjYWxsYmFja01ldGVyIiwibWV0ZXJEYXRhIiwiY2FsbGJhY2tNZXRlckV4cGlyZWQiLCJjc3NQYXRoIiwiaW5zZXJ0QmVmb3JlIiwibGFzdENoaWxkIiwiaXNSZXZpc3RhIiwicmV2aXN0YXMiLCJyZWNhcnJlZ2FQaWFubyIsInRpcG9Db250ZXVkbyIsImlzRXhjbHVzaXZvIiwicG9zdE9wZW5lZCIsImNvbnN0cnV0b3IiLCJpbml0VHAiLCJsb2FkUGlhbm9FeHBlcmllbmNlcyIsImNoYW5nZWQiLCJpc1ZhbG9yIiwiaWRTYW5kYm94VGlueXBhc3NSZXZpc3RhcyIsImlkU2FuZGJveFRpbnlwYXNzIiwic2V0U2FuZEJveCIsImNsZWFuX3VybCIsImEiLCJhc3luYyIsInVybFNhbmRib3hQaWFub1JldmlzdGFzIiwidXJsU2FuZGJveFBpYW5vIiwiYiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGlhbm9Jbml0Iiwic3Vic2NyaXB0aW9ucyIsInNldE9uRW50aXRsZW1lbnRzUmVzcG9uc2UiLCJlbnRpdGxlbWVudHNQcm9taXNlIiwidGlueUluaXQiLCJzZXRQaWFubyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwy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UztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGlueS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3NjcmlwdHMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgJ29nbG9ibyc6IHtcbiAgICAgICAgJ2lkJzogJzM5ODEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnT0cwMydcbiAgICB9LFxuICAgICdibG9ncyc6IHtcbiAgICAgICAgJ2lkJzogJzM5ODEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnT0cwMydcbiAgICB9LFxuICAgICdrb2d1dCc6IHtcbiAgICAgICAgJ2lkJzogJzM5ODEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnT0cwMydcbiAgICB9LFxuICAgICdibG9nQW5hbGl0aWNvJzoge1xuICAgICAgICAnaWQnOiAnMzk4MScsXG4gICAgICAgICdjb2RfcHJvZCc6ICdPRzA0J1xuICAgIH0sXG4gICAgJ2FjZXJ2byc6IHtcbiAgICAgICAgJ2lkJzogJzM5ODEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnT0cwNCdcbiAgICB9LFxuICAgICdqb3JuYWxkaWdpdGFsJzoge1xuICAgICAgICAnaWQnOiAnMzk4MScsXG4gICAgICAgICdjb2RfcHJvZCc6ICdPRzAxJ1xuICAgIH0sXG4gICAgJ21vbmV0Jzoge1xuICAgICAgICAnaWQnOiAnNjYxOCcsXG4gICAgICAgICdjb2RfcHJvZCc6ICdtb25ldCdcbiAgICB9LFxuICAgICdhdXRvLWVzcG9ydGUnOiB7XG4gICAgICAgICdpZCc6ICc2Njk3JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ2F1dG8tZXNwb3J0ZSdcbiAgICB9LFxuICAgICdlcG9jYSc6IHtcbiAgICAgICAgJ2lkJzogJzY2OTcnLFxuICAgICAgICAnY29kX3Byb2QnOiAnZXBvY2EnXG4gICAgfSxcbiAgICAndm9ndWUnOiB7XG4gICAgICAgICdpZCc6ICc2Njk3JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ3ZvZ3VlJ1xuICAgIH0sXG4gICAgJ2dsYW1vdXInOiB7XG4gICAgICAgICdpZCc6ICc2Njk3JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ2dsYW1vdXInXG4gICAgfSxcbiAgICAnY2FzYS12b2d1ZSc6IHtcbiAgICAgICAgJ2lkJzogJzY2OTcnLFxuICAgICAgICAnY29kX3Byb2QnOiAnY2FzYS12b2d1ZSdcbiAgICB9LFxuICAgICdtYXJpZS1jbGFpcmUnOiB7XG4gICAgICAgICdpZCc6ICc2Njk3JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ21hcmllLWNsYWlyZSdcbiAgICB9LFxuICAgICdnbG9iby1ydXJhbCc6IHtcbiAgICAgICAgJ2lkJzogJzY2OTcnLFxuICAgICAgICAnY29kX3Byb2QnOiAnZ2xvYm8tcnVyYWwnXG4gICAgfSxcbiAgICAnZ3EnOiB7XG4gICAgICAgICdpZCc6ICc2Njk3JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ2dxJ1xuICAgIH0sXG4gICAgJ2NyZXNjZXInOiB7XG4gICAgICAgICdpZCc6ICc2Njk3JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ2NyZXNjZXInXG4gICAgfSxcbiAgICAnZ2FsaWxldSc6IHtcbiAgICAgICAgJ2lkJzogJzY2OTcnLFxuICAgICAgICAnY29kX3Byb2QnOiAnZ2FsaWxldSdcbiAgICB9LFxuICAgICdlcG9jYS1uZWdvY2lvcyc6IHtcbiAgICAgICAgJ2lkJzogJzY2MTEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnZXBvY2EtbmVnb2Npb3MnXG4gICAgfSxcbiAgICAnY2FzYS1lLWphcmRpbSc6IHtcbiAgICAgICAgJ2lkJzogJzY2OTcnLFxuICAgICAgICAnY29kX3Byb2QnOiAnY2FzYS1qYXJkaW0nXG4gICAgfSxcbiAgICAncXVlbS1hY29udGVjZSc6IHtcbiAgICAgICAgJ2lkJzogJzY2OTcnLFxuICAgICAgICAnY29kX3Byb2QnOiAncXVlbSdcbiAgICB9LFxuICAgICdwZWduJzoge1xuICAgICAgICAnaWQnOiAnNjYxNScsXG4gICAgICAgICdjb2RfcHJvZCc6ICdwZXF1ZW5hcy1lbXByZXNhcydcbiAgICB9LFxuICAgICd2YWxvcic6IHtcbiAgICAgICAgJ2lkJzogJzY2NjgnLFxuICAgICAgICAnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJ1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGYiB7XG4gICAgY29uc3RydWN0b3IoZGF0YSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZiID0gZGF0YTtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWZpbmVkKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBmYnEgIT09ICd1bmRlZmluZWQnKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRQaXhlbFR5cGUoKSB7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaGFzUGl4ZWwgPSAodHlwZW9mIHRoaXMuZmIucGl4ZWwubmFtZSAhPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5mYi5waXhlbC5uYW1lIDogbnVsbDsgXG5cbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQgJiYgaGFzUGl4ZWwpe1xuICAgICAgICAgICAgZmJxKCdpbml0JywgJzQxMDI3MDAzOTUyMDYzNCcpO1xuICAgICAgICAgICAgZmJxKCd0cmFja1NpbmdsZScsICc0MTAyNzAwMzk1MjA2MzQnLCB0aGlzLmZiLnBpeGVsLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQSAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYTtcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xuICAgIH1cbiAgICBcbiAgICBzZXRHbG9iYWxWYXJzKCkge1xuICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciAgfHwgW107IFxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvciAmJiB0eXBlb2YgX2dhcSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxICB8fCBbXTsgIFxuICAgIH1cblxuICAgIHNldEV2ZW50cyhhY3Rpb24sIGxhYmVsLCBjYXRlZ29yeSA9ICdQaWFubycpIHtcblxuXHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhKVxuXHRcdFx0Y29uc29sZS5sb2coJ2xvZy1nYS1ldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKVxuXG4gICAgICAgIGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgLHRydWVdKTtcblx0XHRcblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiBjYXRlZ29yeSwgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xuICAgIH1cbiAgICBcbiAgICBzZXRFdmVudHNFcnJvcihhY3Rpb24sIGxhYmVsKSB7XG5cdFx0aWYgKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IpXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdQaWFubyBFcnJvJywgYWN0aW9uLCBsYWJlbCwgLHRydWVdKTtcblxuXHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubyBFcnJvJywgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xuXHR9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcblxuICAgIHN0YXRpYyBpc0RlZmluZWQocHJvcCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBwcm9wICE9PSAndW5kZWZpbmVkJykgPyB0cnVlOiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q29va2llKGNfbmFtZSwgdmFsdWUsIGV4cGlyZWRheXMgPSBudWxsKSB7XG4gICAgICAgIGxldCBleGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSA/IGxvY2F0aW9uLmhvc3RuYW1lIDogbnVsbDtcblxuICAgICAgICBpZighaG9zdG5hbWUpIHJldHVybjtcblxuICAgICAgICBleGRhdGUuc2V0RGF0ZShleGRhdGUuZ2V0RGF0ZSgpICsgZXhwaXJlZGF5cyk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNfbmFtZSArIFwiPVwiICtlc2NhcGUodmFsdWUpICsgKChleHBpcmVkYXlzKSA/IFwiXCIgOiBcIjtleHBpcmVzPVwiICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkpXG4gICAgICAgICsgXCI7IHBhdGg9LztcIiArIFwiZG9tYWluPS5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzFdICsgXCIuXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVswXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWUpIHtcbiAgICAgICAgbGV0IG1hdGNoID0gKGRvY3VtZW50LmNvb2tpZSkgPyBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChuYW1lKyc9KFteO10rKScpKSA6IGZhbHNlO1xuICAgICAgICBsZXQgY29va2llVGlueSA9IG1hdGNoID8gdW5lc2NhcGUobWF0Y2hbMV0udG9TdHJpbmcoKSkgOiBcIlwiO1xuICAgICAgICByZXR1cm4gY29va2llVGlueTtcbiAgICB9XG4gICAgICAgIFxuXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNldEV4cGVyaWVuY2UoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWZpbmVkKCkge1xuICAgICAgICBpZih0eXBlb2Ygd2luZG93LnRpbnlDcHQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcpIHsgXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB3aW5kb3cudGlueUNwdC5QaWFubztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRFeHBlcmllbmNlKCkgeyAgXG4gICAgICAgIGxldCBleHBlcmllbmNlTmFtZSA9ICcnOyAgIFxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZSA9IHt9OyAgXG4gICAgICAgICBcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7cmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XG4gICAgICAgIFxuICAgICAgICBpZiAod2luZG93Lm5vbWVFeHBlcmllbmNpYSkgXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7d2luZG93Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xuICAgICAgIFxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZS5uYW1lID0gZXhwZXJpZW5jZU5hbWU7XG5cdH1cblxuICAgIHJlc2V0VXRwKCkge1xuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZClcbiAgICAgICAgICAgIEhlbHBlcnMuc2V0Q29va2llKHRoaXMuY29udGVudC52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsICcnLCAtMSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHByb2R1Y3RzSWQgZnJvbSAnLi4vbW9ja3MvcHJvZHVjdHMvcHJvZHVjdHMtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWUgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA6IG51bGw7XG4gICAgfVxuXG4gICAgc2V0R2xvYmFsKCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0c1NldHRpbmdzID0ge1xuICAgICAgICAgICAgUHJvZHVjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvZHVjdE5hbWUsXG4gICAgICAgICAgICAgICAgLy8gaWQ6IHRoaXMucHJvZHVjdElkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihwcm9kdWN0c1NldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBwcm9kdWN0c1NldHRpbmdzOyBcbiAgICB9XG4gICAgXG4gICAgZ2V0IGlzUHJvZHVjdFZhbG9yKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucHJvZHVjdE5hbWUgJiYgdGhpcy5wcm9kdWN0TmFtZSA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHByb2R1Y3RJZCgpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXSAhPT0gICd1bmRlZmluZWQnKSBcbiAgICAgICAgJiYgKHR5cGVvZiBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkICE9PSAgJ3VuZGVmaW5lZCcpIClcbiAgICAgICAgPyBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkIDogbnVsbDtcbiAgICAgICAgXG4gICAgfVxuXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHdpbmRvdy5TV0cgPSB3aW5kb3cuU1dHIHx8IFtdOyAvL1RPRE86IFVuZGVyc3RhbmQgd2h5IHRoaXMgdmFyaWFibGUgZXhpc3RzXG4gICAgICAgIHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSB3aW5kb3cuc3dnRW50aXRsZW1lbnRzIHx8IG51bGw7XG4gICAgICAgIHRoaXMuZGVidWcgPSAoSGVscGVycy5pc0RlZmluZWQod2luZG93LnRpbnlDcHQpKSA/IHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZyA6IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxQcm9kdWN0UGlhbm8gPSAodHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnKSA/IG5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xuICAgICAgICB0aGlzLmhhc1Byb2R1Y3RKU09OID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBudWxsO1xuICAgICAgICB0aGlzLmVsSGVhZCA9IGRvY3VtZW50LmhlYWQ7IFxuXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsU1dHKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHsgXG4gICAgICAgIHJldHVybiAod2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCkgPyB0cnVlIDogZmFsc2U7IFxuICAgIH1cblxuICAgIHNldEdsb2JhbFNXRygpIHtcbiAgICAgICAgaWYoIUhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgcmV0dXJuO1xuXG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlN3ZyA9IHtcbiAgICAgICAgICAgIGdsb2JhbDogKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSA/IHN3ZyA6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRVdG1zKCkgeyAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBjb25zdCB1dG1zUHJvcHMgPSAodHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3Zy51dG1zICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyA6IG51bGw7IFxuXG4gICAgICAgIHV0bXNQcm9wcy5mb3JFYWNoKChpdGVtKSA9PiB7IFxuICAgICAgICAgICAgbGV0IG5hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICB1cmxQYXJhbXMuc2V0KGB1dG1fJHtuYW1lfWAsIHZhbHVlKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdzZXRVdG1zJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCB1dG1zUHJvcHMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgbG9jYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBpZiggKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMuaXNEZWZpbmVkKSB8fCAhdXRtc1Byb3BzICkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbC5zdWJzY3JpYmUoJ2JyLmNvbS5pbmZvZ2xvYm8ub2dsb2JvLnN3Zy5nb29nbGUnKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uICBcbiAgICAgICAgPyAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfN2IwYTZkZjQ5ODk1NDU5ZmJhZmU0OWE5NmZjYjViYmYvc3dnL3Byb2QvcHJvZHVjdHMuanNvbicgXG4gICAgICAgIDogJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9kZXYvcHJvZHVjdHMuanNvbic7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdCgpIHsgXG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0ucGlhbm9Qcm9kdWN0TmFtZSA9PT0gdGhpcy5sb2NhbFByb2R1Y3RQaWFubyApWzBdO1xuICAgICAgICByZXR1cm4gcHJvZHVjdCB8fCBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZVByb3BlcnRpZXMob2JqKSB7IFxuICAgICAgICBjb25zdCBwcm9wc1RvUmVtb3ZlID0gWydwcm9kdWN0TmFtZScsICdwaWFub1Byb2R1Y3ROYW1lJ107XG4gICAgICAgIGNvbnN0IG5ld09iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XG5cbiAgICAgICAgcHJvcHNUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIG5ld09ialtlbGVtZW50XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG5cbiAgICBhc3luYyBtYXJrdXBUZW1wbGF0ZSgpIHsgXG4gICAgICAgIGNvbnN0IHByb2R1Y3RKU09OID0gIGF3YWl0IHRoaXMucmVtb3ZlUHJvcGVydGllcyhhd2FpdCB0aGlzLmdldFByb2R1Y3QoKSkgfHwgbnVsbDsgXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBPYmplY3Qua2V5cyhwcm9kdWN0SlNPTikubGVuZ3RoID8gSlNPTi5zdHJpbmdpZnkocHJvZHVjdEpTT04pIDogbnVsbDtcblxuICAgICAgICBpZighcHJvZHVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuZGVidWcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeydsb2ctU1dHLVByb2R1Y3QnOiBwcm9kdWN0fSk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBgJHsgcHJvZHVjdCB9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNldE1hcmt1cCgpIHsgXG4gICAgICAgIGF3YWl0IHRoaXMubWFya3VwVGVtcGxhdGUoKTtcbiAgICAgICAgaWYoIXRoaXMucHJvZHVjdEpTT04pIHJldHVybjtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICBcbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2FwcGxpY2F0aW9uL2xkK2pzb24nO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMucHJvZHVjdEpTT047XG4gICAgICAgIHRoaXMuZWxIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgc2V0U3dnU2NyaXB0KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gJ2h0dHBzOi8vbmV3cy5nb29nbGUuY29tL3N3Zy9qcy92MS9zd2cuanMnO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNldEFsZGViYXJhblNjcmlwdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCB1cmxQcm9kID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2MxMGFlODE5YzU2ODQ2MGJiNGVjMTdjMGE4ZWM1MjY3L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xuICAgICAgICBjb25zdCB1cmxTdGcgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYWRkYzVlOGYzMTZmNDhlYTkxODFhZjM3MTYwYjIyYjQvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XG5cbiAgICAgICAgZWxlbWVudC5zcmMgPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyB1cmxQcm9kIDogdXJsU3RnO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRlc3RTV0coKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc3dnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwgPSB3aW5kb3cuc3dnO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ1RoZXJlIGlzblxcJ3Qgd2luZG93LnN3ZycpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0TWFya3VwKCk7ICBcbiAgICAgICAgIFxuICAgICAgICBpZighdGhpcy5oYXNQcm9kdWN0SlNPTikgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTd2dTY3JpcHQoKTsgXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QWxkZWJhcmFuU2NyaXB0KCk7ICAgXG4gICAgICAgIGF3YWl0IHRoaXMudGVzdFNXRygpOyAgICAgICBcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55ICB7XG5cdGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xuICAgICAgICB3aW5kb3cuaGFzUGF5d2FsbCA9IHdpbmRvdy5oYXNQYXl3YWxsIHx8IG51bGw7XG4gICAgICAgIHdpbmRvdy50cCA9IHdpbmRvdy50cCB8fCBbXTtcbiAgICAgICAgd2luZG93LlBpYW5vID0gd2luZG93LlBpYW5vIHx8IHt9O1xuICAgICAgICB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyA9IHdpbmRvdy5QYXl3YWxsQW5hbHl0aWNzIHx8IHt9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRHbG9iYWxUaW55KCk7XG4gICAgICAgIHRoaXMuUHJvZHVjdHMuc2V0R2xvYmFsKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHNldEdsb2JhbFRpbnkoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICAgICAgdGlueTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF5d2FsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3dnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBnYTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1Byb2R1Y3Rpb246ICh3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IGRlZmF1bHRTZXR0aW5nczsgXG4gICAgfVxuICAgIFxuICAgIHNldFBpYW5vKG9iaikge1xuICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFubyA9IG9iajtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgIH1cblxufSIsImltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheXdhbGxDcHRJbmxpbmUgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuXHRcdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcblxuXHRcdHRoaXMuZG9tYWluID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLyc7XHRcblx0XHR0aGlzLnBheXdhbGxJZCA9ICdwYXl3YWxsLWlubGluZSdcblxuXHRcdHRoaXMuc2V0VGVtcGxhdGVTZXR0aW5ncygoKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpXG5cdFx0fSk7XG5cdH1cblxuXHRzZXRUZW1wbGF0ZVNldHRpbmdzKGNhbGxiYWNrKSB7XG5cdFx0bGV0IHRlbXBsYXRlU2V0dGluZ3MgPSB7XG5cdFx0XHR0aXRsZTogJ1BhcmEgY29udGludWFyIHN1YSBsZWl0dXJhLCDDqSBwcmVjaXNvIHNlIGNhZGFzdHJhci4nLFxuXHRcdFx0c3VidGl0bGU6ICfDiSByw6FwaWRvIGUgZ3LDoXRpcyEnLFxuXHRcdFx0YnV0dG9uVGV4dDogJ0NhZGFzdHJlLXNlIGdyYXR1aXRhbWVudGUgYWdvcmEnLFxuXHRcdFx0YnV0dG9uTGluazogJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMScsXG5cdFx0XHRsb2dpblByZVRleHQ6ICdKw6EgcG9zc3VpIGNhZGFzdHJvPyAnLFxuXHRcdFx0bG9naW5UZXh0OiAnRmHDp2EgbG9naW4nLFxuXHRcdFx0bG9naW5MaW5rOiB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJywgXG5cdFx0XHRvZmZlckxpbms6IFwiaHR0cHM6Ly9nb29nbGUuY29tP2wxXCIsXG5cdFx0XHRpbWFnZU1vYmk6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTBcIixcblx0XHRcdGltYWdlRGVzazogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODA0eDEyOFwiLFxuXHRcdFx0aW1hZ2VMaW5rOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTUwXCIsXG5cdFx0XHRjc3NMb2FkZWQ6IGZhbHNlXG5cdFx0fTtcblxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lID0gKHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lKSA/ICBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZVNldHRpbmdzLCB3aW5kb3cuZ2xiUGF5d2FsbElubGluZSkgOiB0ZW1wbGF0ZVNldHRpbmdzOyBcblxuXHRcdGNhbGxiYWNrKCk7XG5cdH1cblxuICAgIGFjdGl2ZUV2ZW50cygpIHtcblx0XHRjb25zdCBwb3N0RWxlbWVudCA9IHdpbmRvdy5hbmFsaXRpY29Qb3N0O1xuXG5cdFx0aWYoIXBvc3RFbGVtZW50KSByZXR1cm4gbnVsbFxuXG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZShwb3N0RWxlbWVudClcblx0fVxuXG4gIFx0Y3JlYXRlVGVtcGxhdGUocG9zdEVsZW1lbnQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gcG9zdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tcmVhZC1tb3JlXCIpO1xuXHRcdGNvbnN0IG1haW5FbGVtZW50ID0gcG9zdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpXG5cdFx0Y29uc3QgZm9vdGVyRWxlbWVudCA9IHBvc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWZvb3RlcicpXG5cdFx0Y29uc3Qgb3BhY2l0eUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1vcGFjaXR5XCI+PC9kaXY+YFxuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmKCF3aW5kb3cuZ2xiUGF5d2FsbElubGluZS5jc3NMb2FkZWQpIHtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHRcdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbElubGluZS5jc3NMb2FkZWQgPSB0cnVlXG5cdFx0XHR9XG5cblx0XHRcdGZvb3RlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHBhZGRpbmctdG9wOiAwcHg7IHBvc2l0aW9uOnJlbGF0aXZlYCk7XG5cblx0XHRcdG1haW5FbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtgKTtcblxuXHRcdFx0bWFpbkVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBvcGFjaXR5RWxlbWVudCk7IFxuXHRcdFx0Ly8gcG9zdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWNvbnRlbnQnKVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMudGVtcGxhdGUpOyBcblx0XHRcdGNvbnN0IHJlbW92ZWRFbGVtZW50ID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ290aGVyLWNvbnRlbnQnKVxuXHRcdFx0XG5cdFx0XHRpZihyZW1vdmVkRWxlbWVudClcblx0XHRcdFx0cmVtb3ZlZEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZW1vdmVkRWxlbWVudClcblxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKVxuXHRcdH1cblx0ICB9XG5cdCAgXG5cdGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XG5cdFx0Y29uc3QgdXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gPSB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcgPyAnaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCcgOiAnaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCc7XG5cdFx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcblx0XHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcblx0XHRsZXQgc3RyID0gJyc7XG5cdFx0bGV0IHVybFJldHVybiA9ICcnO1xuXHRcblx0XHRpZighdGhpcy5kZWJ1ZyAmJiB0aGlzLlBpYW5vLmlzRGVmaW5lZCkge1xuXHRcdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxuXHRcdFx0XHQrICcmc2VydmljZUlkPScgKyBzZXJ2aWNlSWRcblx0XHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xuXHRcdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxuXHRcdFx0XHQrICcmdXJsUmV0b3Jubz0nICsgdXJpXG5cdFx0XHQpO1xuXHRcblx0XHRcdGlmKHR5cGUgPT09ICdidXR0b24nKSB7XG5cdFx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWNhZGFzdHJvLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHRcdHJldHVybiBzdHI7XG5cdH1cblxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xuXHRyZXR1cm4gd2luZG93LmdsYlBheXdhbGxJbmxpbmU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7IFxuXHRjb25zdCB0ZW1wbGF0ZSA9IGBcblx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc3xSYWxld2F5JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lXCIgaWQ9JHt0aGlzLnBheXdhbGxJZH0+IFxuXHRcdFx0PGgxIGNsYXNzID1cInBheXdhbGwtY3B0LWlubGluZS10aXRsZVwiPjxzcGFuIGNsYXNzPXBheXdhbGwtY3B0LWlubGluZS10aXRsZS1maXJzdF9saW5lPiR7dGhpcy50ZW1wbGF0ZVZhcnMudGl0bGV9PC9zcGFuPjxicj48c3BhbiBjbGFzcz1wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGUtc2Vjb25kX2xpbmU+JHt0aGlzLnRlbXBsYXRlVmFycy5zdWJ0aXRsZX08L3NwYW4+PC9oMT5cblxuXHRcdFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMuYnV0dG9uTGlua31cIj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1idXR0b25cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1zcGFuXCI+JHt0aGlzLnRlbXBsYXRlVmFycy5idXR0b25UZXh0fTwvc3Bhbj5cblx0XHRcdFx0PC9idXR0b24+IFxuXHRcdFx0PC9hPlxuXHRcdFx0PHAgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtcFwiPiR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5QcmVUZXh0fTxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLWFcIj4ke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGV4dH08L2E+PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1vZmZlclwiPlxuXHRcdFx0PGEgaHJlZj0ke3RoaXMudGVtcGxhdGVWYXJzLm9mZmVyTGlua30+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5pbWFnZU1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAzNzVweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMuaW1hZ2VEZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMzc0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1pbWdcIiBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLmltYWdlTGlua31cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGA7XG5cblx0cmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0IGNzc01pbmlmaWVkKCkge1xuXHQgIHJldHVybiBgXG5cdCAgPHN0eWxlPlxuXHQgIC5wYXl3YWxsLWNwdC1pbmxpbmV7bWFyZ2luOiAwIGF1dG8gNDBweDtwYWRkaW5nOjIwcHg7Ym9yZGVyLXJhZGl1czogNHB4O2JvcmRlcjogc29saWQgMXB4ICNkYmRkZTE7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmNTt9LnBheXdhbGwtY3B0LWlubGluZS1vcGFjaXR5e2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsaHNsYSgwLDAlLDEwMCUsMCkgMCwjZmZmIDQwJSwjZmZmIDEwMCUpO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDA7d2lkdGg6IDEwMCU7aGVpZ2h0OiA1OHB4O292ZXJmbG93OiBoaWRkZW47fS5wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGV7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzsgbWFyZ2luLWJvdHRvbTozMHB4O2Rpc3BsYXk6YmxvY2s7Zm9udC1mYW1pbHk6UmFsZXdheTtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDA7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjI7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiMzMjVlOTR9XG5cdCAgLnBheXdhbGwtY3B0LWlubGluZS1idXR0b257Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tYm90dG9tOjMwcHg7ZGlzcGxheTpibG9jazt3aWR0aDoyNTZweDtoZWlnaHQ6NDhweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNTljMDA7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOnNvbGlkIDNweCAjZjU5YzAwO31cblx0ICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjRweCkge1xuXHRcdC5wYXl3YWxsLWNwdC1pbmxpbmUtYnV0dG9uIHsgd2lkdGg6IDM1NnB4OyB9XG5cdCB9ICBcblx0IC5wYXl3YWxsLWNwdC1pbmxpbmUtaW1nIHttYXJnaW46IGF1dG87d2lkdGg6IDgwZW07fS5wYXl3YWxsLWNwdC1pbmxpbmUtc3BhbiB7Zm9udC1mYW1pbHk6T3BlbiBTYW5zO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuMzg7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmY7fS5wYXl3YWxsLWNwdC1pbmxpbmUtcHttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1ib3R0b246MzBweDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OlJhbGV3YXk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6MS4xNDtsZXR0ZXItc3BhY2luZzpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzcwNzA3MDt9LnBheXdhbGwtY3B0LWlubGluZS1he2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzI1ZTk0O30ucGF5d2FsbC1jcHQtaW5saW5lLW9mZmVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87YmFja2dyb3VuZC1jb2xvcjojZmZmO30gXG5cdCAgPC9zdHlsZT5gXG4gIH1cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuLi9IZWxwZXJzJztcbmltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi4vR0EnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsR0FNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XG4gICAgdGhpcy5HQSA9IG5ldyBHQU1vZHVsZSgpO1xuXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnLnBheXdhbGw7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWV0cmljcyA9IHtcbiAgICAgICAgcGF5d2FsbDoge30sXG4gICAgICAgIGZiOiB7XG4gICAgICAgICAgICBwaXhlbDoge31cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnBheXdhbGxUeXBlKCk7XG4gIH1cblxuICBwYXl3YWxsTG9hZCgpIHtcbiAgICBpZighdGhpcy5QaWFuby5pc0RlZmluZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCBfUGlhbm8gPSB0aGlzLlBpYW5vLmNvbnRlbnQ7XG5cbiAgICB0aGlzLkdBLnNldEV2ZW50cyh0aGlzLm1ldHJpY3MucGF5d2FsbC52aWV3TmFtZSwgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSk7XG4gICAgSGVscGVycy5zZXRDb29raWUoX1BpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcbiAgfVxuXG4gIHRyaWdnZXIoZWxlbWVudCkge1xuICAgIGlmKHRoaXMuZGlzYWJsZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCByZXNldFV0cCA9IGVsZW1lbnQuZGF0YXNldC5nYVJlc2V0dXRwIHx8IG51bGw7XG4gICAgY29uc3QgaW1hZ2VUb3AgPSBlbGVtZW50LmRhdGFzZXQuZ2FJbWFnZVBvc2l0aW9uO1xuICAgIGNvbnN0IGxhYmVsID0gKGltYWdlVG9wID09PSAndG9wJykgPyBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbCArIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsIDogZWxlbWVudC5kYXRhc2V0LmdhTGFiZWw7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZXZlbnQ6ICdFdmVudG9HQScsXG4gICAgICBldmVudG9HQUNhdGVnb3JpYTogdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSxcbiAgICAgIGV2ZW50b0dBQWNhbzogZWxlbWVudC5kYXRhc2V0LmdhQWN0aW9uIHx8IGFjdGlvbixcbiAgICAgIGV2ZW50b0dBUm90dWxvOiBsYWJlbCxcbiAgICAgIGV2ZW50b0dBVmFsb3I6IDAsXG4gICAgICBldmVudG9HQUludGVyYWNhbzogZmFsc2UsXG4gICAgfTtcblxuICAgIGlmIChyZXNldFV0cClcbiAgICAgICAgdGhpcy5QaWFuby5yZXNldFV0cCgpO1xuXG4gICAgdGhpcy5zZXREYXRhbGF5ZXIoZGF0YSk7XG4gIH1cblxuICBwYXl3YWxsVHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gKCAodHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwgIT09ICd1bmRlZmluZWQnKSAmJiB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbClcbiAgICAgID8gd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwudG9Mb3dlckNhc2UoKVxuICAgICAgOiAncGF5d2FsbCc7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwudmlld05hbWUgPSAnRXhpYmljYW8gUmVnaXN0ZXInXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgY29tdW0nO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdDYWRhc3RyZS1zZSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4Y2x1c2l2byc6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0V4aWJpY2FvIFJlZ2lzdGVyJ1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ1JlZ2lzdGVyIGV4Y2x1c2l2byc7XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0Fzc2luZSBhZ29yYSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdMb2dpbkV4Y2x1c2l2byc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGF5d2FsbCc6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0JhcnJlaXJhJ1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ0JhcnJlaXJhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1BheXdhbGxFeGNsdXNpdm8nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXREYXRhbGF5ZXIoZGF0YSA9IHt9KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IFBheXdhbGxHQU1vZHVsZSBmcm9tICcuL1BheXdhbGwtZ2EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuLi9Td2cnO1xuaW1wb3J0IEZiTW9kdWxlIGZyb20gJy4uL0ZCJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbENwdCAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG5cdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcblx0dGhpcy5HQSA9IG5ldyBQYXl3YWxsR0FNb2R1bGUoKTtcblx0dGhpcy5TV0cgPSBuZXcgU3dnTW9kdWxlKCk7XG5cdHRoaXMuRkIgPSBuZXcgRmJNb2R1bGUodGhpcy5HQS5tZXRyaWNzLmZiKTtcblxuXHR0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcblx0dGhpcy5kb21haW4gPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJztcdFxuXHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xuXHRcdHRoaXMuaW5pdCgpOyBcblx0fSk7XG5cblx0d2luZG93LlBheXdhbGxDcHQgPSB0aGlzO1xuXG5cdHdpbmRvdy50aW55Q3B0LlBheXdhbGwgPSB7XG5cdFx0ZG9tYWluOiB0aGlzLmRvbWFpbixcblx0XHRHQTogdGhpcy5HQS5tZXRyaWNzLFxuXHR9O1xuICB9XG5cbiAgc2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xuXHRcdFx0dGVtcGxhdGU6ICdkZWZhdWx0Jyxcblx0XHRcdGFzc2V0c1BhdGg6ICcnLFxuXHRcdFx0ZGlzcGxheTogbnVsbCxcblx0XHRcdHByb2R1Y3RDbGFzczogdHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnID8gYHBheXdhbGwtY3B0LSR7bm9tZVByb2R1dG9QaWFub31gIDogJ3BheXdhbGwtY3B0LW9nbG9ibycsXG5cdFx0XHR0aXRsZTogJ0Vzc2UgY29udGXDumRvIMOpIG8gdMOtdHVsby4nLFxuXHRcdFx0dGFyZ2V0Qmxhbms6IHRydWUsXG5cdFx0XHR0b3BNb2JpOiAnJyxcblx0XHRcdHRvcERlc2s6ICcnLFxuXHRcdFx0dG9wTGluazogJycsXG5cdFx0XHRsZWZ0TW9iaTogJycsXG5cdFx0XHRsZWZ0RGVzazogJycsXG5cdFx0XHRsZWZ0TGluazogJycsXG5cdFx0XHRyaWdodE1vYmk6ICcnLFxuXHRcdFx0cmlnaHREZXNrOiAnJyxcblx0XHRcdHJpZ2h0TGluazogJydcblx0XHR9O1xuXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5oaWRlTG9naW5BcmVhID0gZmFsc2U7XG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5sb2dpblRleHQgPSAnRmHDp2EgbG9naW4nO1xuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5QcmVUZXh0ID0gJ0rDoSBwb3NzdWkgY2FkYXN0cm8/Jztcblx0XHRcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9ICh3aW5kb3cuZ2xiUGF5d2FsbCkgPyAgT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVTZXR0aW5ncywgd2luZG93LmdsYlBheXdhbGwpIDogdGVtcGxhdGVTZXR0aW5nczsgXG5cdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSBgJHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblByZVRleHR9IDxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGRhdGEtaXMtbG9naW49XCJ0cnVlXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDIgLSBGYcOnYSBsb2dpblwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJmYWxzZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIgJHt3aW5kb3cuZ2xiUGF5d2FsbC50YXJnZXRCbGFua30gXCI+JHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRleHR9PC9hPmA7XG5cblx0XHRpZih3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhKVxuXHRcdFx0dGhpcy5jbGVhckxvZ2luQXJlYSgpO1xuXG5cdFx0aWYodGhpcy5kZWJ1ZyApIFxuXHRcdFx0dGhpcy5zZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKTtcblx0XHRcblx0XHRjYWxsYmFjaygpO1xuXHR9XG5cblx0Y2xlYXJMb2dpbkFyZWEoKSB7XG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwpIHsgXG5cdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9ICcnO1xuXHRcdH1cblx0fVxuXG5cdHNldERlYnVnVGVtcGxhdGVTZXR0aW5ncygpIHtcblx0XHRsZXQgb2JqID0ge307XG5cdFx0b2JqLnRvcE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTAnO1xuXHRcdG9iai50b3BEZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDR4MTI4Jztcblx0XHRvYmoudG9wTGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDEnO1xuXHRcdG9iai5sZWZ0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XG5cdFx0b2JqLmxlZnREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoubGVmdExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wyJztcblx0XHRvYmoucmlnaHRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcblx0XHRvYmoucmlnaHREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoucmlnaHRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMyc7XG5cblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5nbGJQYXl3YWxsLCBvYmopO1xuXHR9XG4gXG4gIGJvZHlBZGp1c3QoKSB7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nLCAnaW1wb3J0YW50Jyk7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcsICdpbXBvcnRhbnQnKTtcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJzEwMCUnLCAnaW1wb3J0YW50Jyk7XG4gIH1cblxuICBzZXRFbFdyYXBwZXIoKSB7XG5cdHRoaXMuZWxDcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQnKTtcbiAgfVxuXG4gIHJlbW92ZUVsZW1lbnRzKCkge1xuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xuXG5cdGlmKHRoaXMuZWxDcHQpXG5cdFx0dGhpcy5lbENwdC5yZW1vdmUoKTtcblxuXHRjb25zdCBlbFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3RlY3RlZC1jb250ZW50LCAjaW5mb2FydGUtbWFpbi1jb250ZW50Jyk7XG5cblx0ZWxUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHQgIGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xuICB9XG5cbiAgY3JlYXRlVGVtcGxhdGUoKSB7XG5cdHRoaXMuZWxCb2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmJvZHlBZGp1c3QoKTtcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRzKCk7XG5cdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpOyBcblx0dGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHRcbiAgICBcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1xuICAgICAgICB9KTtcblx0fVxuXG5cdHRoaXMuR0EucGF5d2FsbExvYWQoKTtcbiAgfVxuXG4gIGFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKSB7XG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XG5cdHRoaXMuZWxDcHRXcmFwID0gdGhpcy5lbENwdC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQtd3JhcCcpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGNvbnN0IGVsQm9keUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIDQ7XG5cdFx0Y29uc3QgZWxDcHRXcmFwSGVpZ2h0ID0gdGhpcy5lbENwdFdyYXAub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBjdXJyZW50VG9wID0gKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykgXG4gICAgICAgID8gTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yIClcbiAgICAgICAgOiBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKTtcblx0XHRjb25zdCB0b3BXaXRoRnVsbEVsZW1lbnQgPSAoZWxCb2R5SGVpZ2h0IC0gZWxDcHRXcmFwSGVpZ2h0KTtcblxuXHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7Y3VycmVudFRvcH1weGA7XG5cdFx0dGhpcy5lbENwdC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnpJbmRleCA9IDIwO1xuXG5cdFx0dGhpcy5ldnRXaGVlbChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xuXHRcdHRoaXMuZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KTtcblx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpO1xuXG5cdFx0dGhpcy5GQi5zZXRQaXhlbFR5cGUoKTtcblx0fSwgMTAwMCk7XG4gIH1cblxuICBhY3RpdmVFdmVudHMoKSB7XG5cdGNvbnN0IGNsaWNrVGFyZ2V0cyA9IHRoaXMuZWxDcHRXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblxuXHRjbGlja1RhcmdldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7IFxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbiA9IEJvb2xlYW4oZWxlbWVudC5kYXRhc2V0LmlzTG9naW4pIHx8IGZhbHNlO1xuXHRcdFx0Y29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBmYWxzZSA7IFxuXHRcdFx0Y29uc3QgaXNVcmxTd2cgPSAodXJsKSA/IHVybC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdvZmVydGFzd2cnKSA6IGZhbHNlO1xuXHRcdFx0Y29uc3Qgbm90QmxhbmsgPSBlbGVtZW50LmRhdGFzZXQuaHJlZlRhcmdldCB8fCB0cnVlOyBcblx0XHRcdFxuXHRcdFx0dGhpcy5HQS50cmlnZ2VyKGVsZW1lbnQpOyBcblxuXHRcdFx0aWYoIWlzTG9naW4gJiYgaXNVcmxTd2cpXG5cdFx0XHRcdHRoaXMuU1dHLnNldFV0bXMoKTsgIFxuXG4gICAgICAgICAgICBpZiAodXJsICYmICFpc1VybFN3ZykgeyBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBub3RCbGFuayA/ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybCkgOiB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG5cdFx0fS5iaW5kKHRoaXMpKTtcblx0fSk7XG4gIH1cblxuICBldnRXaGVlbChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpIHtcblx0bGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J3doZWVsJyxcblx0XHRmdW5jdGlvbihldnQpIHsgXG5cdFx0ICBjb25zdCBzdGVwID0gY3VycmVudFRvcCAvIDEwMDtcblx0XHQgIGNvbnN0IG11bHRpcGxpZXIgPSAyMDtcblxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPj0gMSkge1xuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgLSBzdGVwICogbXVsdGlwbGllcjsgXG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xuICBcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcblx0XHQgIH1cbiAgXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA8PSAtMSkge1xuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgKyBzdGVwICogbXVsdGlwbGllcjtcblx0XHRcdG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcbiAgXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG5cdFx0ICB9XG5cdFx0fS5iaW5kKHRoaXMpXG5cdCAgKTtcbiAgfVxuXG4gIGV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xuICAgIGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xuICAgIGxldCB0b3VjaHN0YXJ0WSA9IDA7XG4gICAgbGV0IHRvdWNoZW5kWSA9IDA7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgIHRvdWNoc3RhcnRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG5cdH0pO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAyMDtcbiAgICAgICAgdG91Y2hlbmRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG5cbiAgICAgICAgaWYgKHRvdWNoZW5kWSA8IHRvdWNoc3RhcnRZKSB7IFxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRvdWNoc3RhcnRZKSAtIE1hdGguYWJzKHRvdWNoZW5kWSk7XG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCAtIGRpZmY7IFxuICAgICAgICAgICAgbmV3dG9wID0gZWxUb3AgPCB0b3BXaXRoRnVsbEVsZW1lbnQgPyB0b3BXaXRoRnVsbEVsZW1lbnQgOiBlbFRvcDtcblxuICAgICAgICAgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdWNoZW5kWSA+IHRvdWNoc3RhcnRZKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hlbmRZIC0gdG91Y2hzdGFydFk7XG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCArIGRpZmY7IFxuXHRcdCAgICBuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XG5cblx0XHQgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuICAgICAgICB9XG5cdH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRVcmxMb2dpblJlZ2lzdGVyKHR5cGUgPSAnJykge1xuXHRjb25zdCB1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byA9IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09PSAncHJkJyA/ICdodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJyA6ICdodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJztcblx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcblx0Y29uc3Qgc2VydmljZUlkID0gd2luZG93LnRpbnlDcHQuUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpIHx8IG51bGw7XG5cdGxldCBzdHIgPSAnJztcblx0bGV0IHVybFJldHVybiA9ICcnO1xuXG5cdGlmKCF0aGlzLmRlYnVnICYmIHRoaXMuUGlhbm8uaXNEZWZpbmVkKSB7XG5cdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0dXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gKyAnP2NvZGlnb1Byb2R1dG89JyArICB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKSBcblx0XHRcdCsgJyZzZXJ2aWNlSWQ9JyArIHNlcnZpY2VJZFxuXHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xuXHRcdFx0KyAnJm5vbWVQcm9kdXRvPScgKyB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKClcblx0XHRcdCsgJyZ1cmxSZXRvcm5vPScgKyB1cmlcblx0XHQpO1xuXG5cdFx0aWYodHlwZSA9PT0gJ3JlZ2lzdGVyJykge1xuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59Y2FkYXN0cm8vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1sb2dpbi8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xuXHRyZXR1cm4gd2luZG93LmdsYlBheXdhbGw7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7IFxuXHRjb25zdCB0ZW1wbGF0ZSA9IGBcblx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQgJHt0aGlzLnRlbXBsYXRlVmFycy5wcm9kdWN0Q2xhc3N9XCI+IFxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwXCI+XG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZFwiPlxuXHRcdFx0JHt0aGlzLnRlbXBsYXRlVmFycy50aXRsZX1cblx0XHQ8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190b3BcIj5cblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTGlua31cIiBkYXRhLWdhLWltYWdlLXBvc2l0aW9uPVwidG9wXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDEgLVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BEZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyICR7d2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSA/ICdpcy1oaWRlJyA6ICcnfVwiPlxuXHRcdCAgXHQke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGFnfVxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fbGVmdFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TGlua31cIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgNCAtIEJhbm5lciBvZmVydGEgZXNxdWVyZGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19yaWdodFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodExpbmt9XCIgIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA1IC0gQmFubmVyIG9mZXJ0YSBkaXJlaXRhXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodE1vYml9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0PC9kaXY+XG5cdCAgPC9kaXY+XG5cdCAgYDtcblxuXHRyZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBnZXQgY3NzTWluaWZpZWQoKSB7XG5cdCAgcmV0dXJuIGA8c3R5bGU+XG5cdCAgLnBheXdhbGwtY3B0e29wYWNpdHk6MDtwb3NpdGlvbjpmaXhlZDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwdnc7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWZ9LnBheXdhbGwtY3B0LC5wYXl3YWxsLWNwdCAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfS5wYXl3YWxsLWNwdCBhe2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWRlY29yYXRpb246bm9uZX0ucGF5d2FsbC1jcHQgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wYXl3YWxsLWNwdCAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdCBhe2NvbG9yOiMwMDB9LnBheXdhbGwtY3B0LW9nbG9ibyAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdC1vZ2xvYm8gYXtjb2xvcjojMzI1ZTk0fS5wYXl3YWxsLWNwdC13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1ib3R0b206MjBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LnBheXdhbGwtY3B0LXdyYXB7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn19LnBheXdhbGwtY3B0LXdyYXAgaW1ne2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LnBheXdhbGwtY3B0LXdyYXBfX3RvcHtwYWRkaW5nLXRvcDoyMHB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWR7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMCAwO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXJ7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMDtjb2xvcjojNzY3Njc2O2ZvbnQtc2l6ZToxNnB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlci5pcy1oaWRle3BhZGRpbmctYm90dG9tOjB9XG5cdCAgPC9zdHlsZT5gO1xuICB9XG5cbiAgaW5pdCgpIHsgXG5cdCAgY29uc3QgZGVsYXlUaW1lciA9ICh3aW5kb3cuZ2xiUGF5d2FsbCAmJiB3aW5kb3cuZ2xiUGF5d2FsbC5kZWxheVRpbWVyKSA/IHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIgKiAxMDAwIDogMDtcblxuXHRzZXRUaW1lb3V0KCgpID0+e1xuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGUoKTtcblx0fSwgZGVsYXlUaW1lcik7XG4gIH1cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xuaW1wb3J0IFRpbnlNb2R1bGUgZnJvbSAnLi9UaW55JztcbmltcG9ydCBHQU1vZHVsZSBmcm9tICcuL0dBJztcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi9Td2cnO1xuaW1wb3J0IFBheXdhbGxDcHQgZnJvbSAnLi9jcG50LXBheXdhbGwvUGF5d2FsbCc7XG5pbXBvcnQgUGF5d2FsbENwdElubGluZSBmcm9tICcuL2NwbnQtcGF5d2FsbC1pbmxpbmUvUGF5d2FsbCc7XG5cbmNvbnN0IFRpbnkgPSBuZXcgVGlueU1vZHVsZSgpO1xuY29uc3QgR0EgPSBuZXcgR0FNb2R1bGUoKTtcblxuR0Euc2V0R2xvYmFsVmFycygpO1xuXG5QaWFuby50eXBlUGF5d2FsbCA9IG51bGw7XG5QaWFuby52YXJpYXZlaXMgPSB7XG5cdGFtYmllbnRlc0FjZWl0b3M6IFwiaW50LHFsdCxwcmRcIixcblx0c3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc286IFwiNDAwLDQwNCw0MDYsNTAwLDUwMiw1MDMsNTA0XCIsXG5cdHN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IFwiNDAwLDQwNCw1MDAsNTAyLDUwMyw1MDRcIixcblx0aXNDYWxsYmFja01ldHRlckV4cGlyZWQ6IGZhbHNlLFxuXHRjb25zdGFudGU6IHtcblx0XHRjb29raWU6IHtcblx0XHRcdEdDT006ICdHTEJJRCcsXG5cdFx0XHRVVFA6ICdfdXRwJyxcblx0XHRcdFJUSUVYOiAnX3J0aWV4Jyxcblx0XHRcdEFNQklFTlRFOiAnYW1iaWVudGVQaWFubycsXG5cdFx0XHRTQVZFX1NVQlNDUklQVElPTjogJ3NhdmVTdWJzY3JpcHRpb25Db29raWUnLFxuXHRcdFx0Q1JFQVRFRF9HTE9CT0lEOiAnY3JlYXRlZEdsb2JvSWQnLFxuXHRcdFx0R0xPQk9JRF9NRVNTQUdFOiAnZ2xvYm9JZE1lc3NhZ2UnXG5cdFx0fSxcblx0XHRtZXRyaWNhczoge1xuXHRcdFx0RVZFTlRPX1NFTV9BQ0FPOiAnc2VtIGFjYW8nLFxuXHRcdFx0RVJSTzogJ0Vycm8nXG5cdFx0fSxcblx0XHRrcnV4OiB7XG5cdFx0XHRTRUdNRU5UQUNPRVM6ICdreGdsb2JvX3NlZ3MnLFxuXHRcdFx0S1JVWExJR0FETzogJ2tydXgtbGlnYWRvJ1xuXHRcdH0sXG5cdFx0dXRpbDoge1xuXHRcdFx0SVA6IFwiMTI3LjAuMC4xXCIsXG5cdFx0XHRBTUJJRU5URTogXCJhbWJpZW50ZS1kZXNlamFkb1wiLFxuXHRcdFx0REVCVUc6IFwiZGVidWctcGlhbm9cIlxuXHRcdH1cblx0fSxcblx0aXNDb250ZXVkb0V4Y2x1c2l2bzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0Z2V0QW1iaWVudGVQaWFubzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2YoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkpID4gLTEpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSwgMSk7XG5cdFx0XHRyZXR1cm4gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSk7XG5cdFx0fVxuXHRcdGlmIChQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSA9PSAnZmFsc2UnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgXCJcIiwgLTEpO1xuXHRcdH1cblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpKSB7XG5cdFx0XHRyZXR1cm4gSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpO1xuXHRcdH07XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2Yod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8pID4gLTEgPyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA6ICdwcmQnO1xuXHR9LFxuXHRnZXRUaXBvQ29udGV1ZG9QaWFubzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy50aXBvQ29udGV1ZG9QaWFubztcblx0fSxcblx0ZXhlY3V0b3VQYWdldmlldzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5leGVjdXRvdVBhZ2V2aWV3ID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRnZXROb21lUHJvZHV0bzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF3aW5kb3cubm9tZVByb2R1dG9QaWFubyl7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIk5vbWUgZG8gcHJvZHV0byBuw6NvIGRlZmluaWRvLlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3cubm9tZVByb2R1dG9QaWFubztcblx0fSxcblx0Z2V0U2Vydmljb0lkOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcHJvZHVjdHNPYmplY3QgPSBQaWFuby52YXJpYXZlaXMuZ2V0UHJvZHVjdHNPYmplY3QoKTtcblxuXHRcdHZhciBpZCA9IHByb2R1Y3RzT2JqZWN0W1BpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXVsnaWQnXTtcblxuXHRcdGlmICghaWQpe1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ1NlcnZpY2VJRCBuw6NvIGRlZmluaWRvLicsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgK1xuXHRcdFx0XHQnIG5vbWVQcm9kdXRvOiAnICsgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgKTtcblxuXHRcdFx0cmV0dXJuICcwMDAwJztcblx0XHR9XG5cblx0XHRyZXR1cm4gaWQ7XG5cdH0sXG5cdGdldENvZGlnb1Byb2R1dG86IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG5vbWVQcm9kdXRvID0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCk7XG5cblx0XHR2YXIgcHJvZHVjdHNPYmplY3QgPSBQaWFuby52YXJpYXZlaXMuZ2V0UHJvZHVjdHNPYmplY3QoKTtcblxuXHRcdHZhciBjb2RQcm9kID0gcHJvZHVjdHNPYmplY3RbUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldWydjb2RfcHJvZCddO1xuXG5cdFx0aWYgKCFjb2RQcm9kKXtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQW8gb2J0ZXIgY8OzZGlnbyBkbyBwcm9kdXRvXCIsIG5vbWVQcm9kdXRvICsgXCIgLSBcIiArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcblx0XHRcdHJldHVybiAnZXJyb3InO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIGNvZFByb2Q7XG5cdH0sXG5cdGdldFByb2R1Y3RzT2JqZWN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J29nbG9ibyc6IHtcblx0XHRcdFx0J2lkJzogJzM5ODEnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnT0cwMydcblx0XHRcdH0sXG5cdFx0XHQnYmxvZ3MnOiB7XG5cdFx0XHRcdCdpZCc6ICczOTgxJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ09HMDMnXG5cdFx0XHR9LFxuXHRcdFx0J2tvZ3V0Jzoge1xuXHRcdFx0XHQnaWQnOiAnMzk4MScsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdPRzAzJ1xuXHRcdFx0fSxcblx0XHRcdCdibG9nQW5hbGl0aWNvJzoge1xuXHRcdFx0XHQnaWQnOiAnMzk4MScsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdPRzA0J1xuXHRcdFx0fSxcblx0XHRcdCdhY2Vydm8nOiB7XG5cdFx0XHRcdCdpZCc6ICczOTgxJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ09HMDQnXG5cdFx0XHR9LFxuXHRcdFx0J2pvcm5hbGRpZ2l0YWwnOiB7XG5cdFx0XHRcdCdpZCc6ICczOTgxJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ09HMDEnXG5cdFx0XHR9LFxuXHRcdFx0J21vbmV0Jzoge1xuXHRcdFx0XHQnaWQnOiAnNjYxOCcsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdtb25ldCdcblx0XHRcdH0sXG5cdFx0XHQnYXV0by1lc3BvcnRlJzoge1xuXHRcdFx0XHQnaWQnOiAnNjY5NycsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdhdXRvLWVzcG9ydGUnXG5cdFx0XHR9LFxuXHRcdFx0J2Vwb2NhJzoge1xuXHRcdFx0XHQnaWQnOiAnNjY5NycsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdlcG9jYSdcblx0XHRcdH0sXG5cdFx0XHQndm9ndWUnOiB7XG5cdFx0XHRcdCdpZCc6ICc2Njk3Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ3ZvZ3VlJ1xuXHRcdFx0fSxcblx0XHRcdCdnbGFtb3VyJzoge1xuXHRcdFx0XHQnaWQnOiAnNjY5NycsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdnbGFtb3VyJ1xuXHRcdFx0fSxcblx0XHRcdCdjYXNhLXZvZ3VlJzoge1xuXHRcdFx0XHQnaWQnOiAnNjY5NycsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdjYXNhLXZvZ3VlJ1xuXHRcdFx0fSxcblx0XHRcdCdtYXJpZS1jbGFpcmUnOiB7XG5cdFx0XHRcdCdpZCc6ICc2Njk3Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ21hcmllLWNsYWlyZSdcblx0XHRcdH0sXG5cdFx0XHQnZ2xvYm8tcnVyYWwnOiB7XG5cdFx0XHRcdCdpZCc6ICc2Njk3Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ2dsb2JvLXJ1cmFsJ1xuXHRcdFx0fSxcblx0XHRcdCdncSc6IHtcblx0XHRcdFx0J2lkJzogJzY2OTcnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnZ3EnXG5cdFx0XHR9LFxuXHRcdFx0J2NyZXNjZXInOiB7XG5cdFx0XHRcdCdpZCc6ICc2Njk3Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ2NyZXNjZXInXG5cdFx0XHR9LFxuXHRcdFx0J2dhbGlsZXUnOiB7XG5cdFx0XHRcdCdpZCc6ICc2Njk3Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ2dhbGlsZXUnXG5cdFx0XHR9LFxuXHRcdFx0J2Vwb2NhLW5lZ29jaW9zJzoge1xuXHRcdFx0XHQnaWQnOiAnNjYxMScsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdlcG9jYS1uZWdvY2lvcydcblx0XHRcdH0sXG5cdFx0XHQnY2FzYS1lLWphcmRpbSc6IHtcblx0XHRcdFx0J2lkJzogJzY2OTcnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnY2FzYS1qYXJkaW0nXG5cdFx0XHR9LFxuXHRcdFx0J3F1ZW0tYWNvbnRlY2UnOiB7XG5cdFx0XHRcdCdpZCc6ICc2Njk3Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ3F1ZW0nXG5cdFx0XHR9LFxuXHRcdFx0J3BlZ24nOiB7XG5cdFx0XHRcdCdpZCc6ICc2NjE1Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ3BlcXVlbmFzLWVtcHJlc2FzJ1xuXHRcdFx0fSxcblx0XHRcdCd2YWxvcic6IHtcblx0XHRcdFx0J2lkJzogJzY2NjgnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJ1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8uamFuZWxhQW5vbmltYSA9IHtcblx0cmV0cnkgOiBmdW5jdGlvbihpc0RvbmUsIG5leHQpIHtcblx0XHR2YXIgY3VycmVudF90cmlhbCA9IDAsIG1heF9yZXRyeSA9IDUwLCBpbnRlcnZhbCA9IDEwLCBpc190aW1lb3V0ID0gZmFsc2U7XG5cdFx0dmFyIGlkID0gd2luZG93LnNldEludGVydmFsKFxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChpc0RvbmUoKSkge1xuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcblx0XHRcdFx0XHRuZXh0KGlzX3RpbWVvdXQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjdXJyZW50X3RyaWFsKysgPiBtYXhfcmV0cnkpIHtcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdFx0aXNfdGltZW91dCA9IHRydWU7XG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdDEwXG5cdFx0KTtcblx0fSxcblx0aXNJRTEwT3JMYXRlciA6IGZ1bmN0aW9uKHVzZXJfYWdlbnQpIHtcblx0XHRsZXQgdWEgPSB1c2VyX2FnZW50LnRvTG93ZXJDYXNlKCk7XG5cdFx0bGV0IG1hdGNoID0gLyg/Om1zaWV8cnY6KVxccz8oW1xcZFxcLl0rKS8uZXhlYyh1YSk7XG5cblx0XHRpZiAodWEuaW5kZXhPZignbXNpZScpID09PSAwICYmIHVhLmluZGV4T2YoJ3RyaWRlbnQnKSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAobWF0Y2ggJiYgcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSA+PSAxMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0ZGV0ZWN0UHJpdmF0ZU1vZGUgOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHZhciBpc19wcml2YXRlO1xuXG5cdFx0aWYgKHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSkge1xuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKFxuXHRcdFx0XHR3aW5kb3cuVEVNUE9SQVJZLCAxLFxuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5pbmRleGVkREIgJiYgL0ZpcmVmb3gvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHR2YXIgZGI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkYiA9IHdpbmRvdy5pbmRleGVkREIub3BlbigndGVzdCcpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFBpYW5vLmphbmVsYUFub25pbWEucmV0cnkoXG5cdFx0XHRcdFx0ZnVuY3Rpb24gaXNEb25lKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRiLnJlYWR5U3RhdGUgPT09ICdkb25lJyA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZ1bmN0aW9uIG5leHQoaXNfdGltZW91dCkge1xuXHRcdFx0XHRcdFx0aWYgKCFpc190aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBkYi5yZXN1bHQgPyBmYWxzZSA6IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoUGlhbm8uamFuZWxhQW5vbmltYS5pc0lFMTBPckxhdGVyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCF3aW5kb3cuaW5kZXhlZERCKSB7XG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlICYmIC9TYWZhcmkvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3QnLCAxKTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBpc19wcml2YXRlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFBpYW5vLmphbmVsYUFub25pbWEucmV0cnkoXG5cdFx0XHRmdW5jdGlvbiBpc0RvbmUoKSB7XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgaXNfcHJpdmF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0ZnVuY3Rpb24gbmV4dChpc190aW1lb3V0KSB7XG5cdFx0XHRcdGNhbGxiYWNrKGlzX3ByaXZhdGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn07XG5cblBpYW5vLmtydXggPSB7XG5cdHRlbTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKSA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0bGlnYWRvOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LktSVVhMSUdBRE87XG5cdFx0dmFyIHZhbG9yUGFyYW1ldHJvID0gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKHBhcmFtZXRybyk7XG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICdmYWxzZScgJiYgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gIT0gXCJwcmRcIikge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCB2YWxvclBhcmFtZXRybywgMSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScgfHwgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT0gXCJwcmRcIikge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCBcIlwiLCAtMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPKSA9PSBcImZhbHNlXCIpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdG9idGVtU2VnbWVudGFjYW86IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChQaWFuby5rcnV4LnRlbSgpICYmIFBpYW5vLmtydXgubGlnYWRvKCkpIHtcblx0XHRcdHZhciBzZWdtZW50YWNvZXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykuc3BsaXQoJywnKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudGFjb2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgc2VnbWVudGFjb2VzW2ldLCBzZWdtZW50YWNvZXNbaV1dKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLnJlZ2lvbmFsaXphY2FvID0ge1xuXHRnZXRSZWdpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBrcnV4R2VvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2t4Z2xvYm9fZ2VvJyk7XG5cdFx0aWYgKGtydXhHZW8pIHtcblx0XHRcdGtydXhHZW8uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZGF0YSA9IGl0ZW0uc3BsaXQoJz0nKTtcblx0XHRcdFx0bGV0IGtleSA9IGRhdGFbMF07XG5cdFx0XHRcdGxldCB2YWx1ZSA9IGRhdGFbMV07XG5cdFx0XHRcdGlmIChrZXkgPT09ICdyZWdpb24nKSB7XG5cdFx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInJlZ2lvblwiLCB2YWx1ZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLm1ldHJpY2FzID0ge1xuXHRlbnZpYUV2ZW50b3NHQTogZnVuY3Rpb24oX0dBQWNhbywgX0dBUm90dWxvKSB7IC8vVE9ETzogYXJxdWl2byB0aW55cGFzcy5qcywgaW5zZXJpZG8gcGVsYSBQaWFubywgdXRpbGl6YSBlc3NhIGZ1bsOnw6NvXG5cdFx0Y29uc3QgaXNQcm9kdWN0VmFsb3IgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8nLCBfR0FBY2FvLCBfR0FSb3R1bG8sICx0cnVlXSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vJywgJ2V2ZW50b0dBQWNhbyc6IF9HQUFjYW8sICdldmVudG9HQVJvdHVsbyc6X0dBUm90dWxvfSk7XG5cdH0sXG5cblx0bW9udGFSb3R1bG9HQTogZnVuY3Rpb24oKSB7IC8vVE9ETzogYXQgUGlhbm8gYXMgc2V0RXhwZXJpZW5jZSgpIHwgQ2hlY2sgb24gb2xkIHRpbnkgYmVmb3JlIHJlbW92ZVxuXHRcdGlmKHdpbmRvdy5yZWdyYXNUaW55ICYmIHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhICsgXCIgLSBcIiArIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vIDogd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xuXHRcdH0gZWxzZSBpZiAod2luZG93Lm5vbWVFeHBlcmllbmNpYSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5ub21lRXhwZXJpZW5jaWE7XG5cdFx0fVxuXHRcdHJldHVybiBcIiBcIjtcblx0fSxcblx0c2V0TGltaXRlQ29udGFnZW06IGZ1bmN0aW9uKG1ldHJpY2FzKSB7XG5cdFx0d2luZG93Ll9HQUxpbWl0ZSA9IFwiLVwiO1xuXHRcdHdpbmRvdy5fR0FDb250YWdlbSA9IFwiLVwiO1xuXG5cdFx0aWYoIW1ldHJpY2FzKSByZXR1cm47XG5cblx0XHR3aW5kb3cuX0dBQ29udGFnZW0gPSBcIlwiICsgbWV0cmljYXMudmlld3M7XG5cblx0XHRpZiAod2luZG93Ll9HQUNvbnRhZ2VtLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHR3aW5kb3cuX0dBQ29udGFnZW0gPSBcIjBcIiArIHdpbmRvdy5fR0FDb250YWdlbTtcblx0XHR9XG5cdFx0d2luZG93Ll9HQUxpbWl0ZSA9IG1ldHJpY2FzLm5vbWVFeHBlcmllbmNpYSArXCIgOiBcIisgbWV0cmljYXMubWF4Vmlld3M7XG5cdH0sXG5cdGlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3RlcjogZnVuY3Rpb24ocmVncmFzKSB7XG5cdFx0dmFyIHBhc3NhZ2VtID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5tZXRyaWNhcy5FVkVOVE9fU0VNX0FDQU87XG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSB7XG5cdFx0XHRwYXNzYWdlbSA9IHJlZ3Jhcy5mbHV4by5pbmRleE9mKFwiaGFyZHdhbGxcIikgIT0gLTEgPyAncmVnaXN0ZXItaGFyZHdhbGwtcGFzc291JyA6ICdyZWdpc3Rlci1jb250YWdlbS1wYXNzb3UnO1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBhc3NhZ2VtO1xuXHR9LFxuXHRleGVjdXRhQXBvc1BhZ2V2aWV3OiBmdW5jdGlvbihleHBpcm91KSB7XG5cdFx0aWYgKCFQaWFuby52YXJpYXZlaXMuZXhlY3V0b3VQYWdldmlldygpKSB7XG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5mbHV4byA9IHdpbmRvdy50cENvbnRleHQgPyB0cENvbnRleHQudG9Mb3dlckNhc2UoKSA6ICctJztcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSA9IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgPyB3aW5kb3cubm9tZUV4cGVyaWVuY2lhIDogJyc7XG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRMaW1pdGVDb250YWdlbSh3aW5kb3cucmVncmFzVGlueSk7XG5cdFx0XHRpZiAoZXhwaXJvdSA9PSBmYWxzZSkgR0Euc2V0RXZlbnRzKFBpYW5vLm1ldHJpY2FzLmlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3Rlcih3aW5kb3cucmVncmFzVGlueSksIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0XHRleGVjdXRvdVBhZ2V2aWV3ID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cdHNldGFWYXJpYXZlaXM6IGZ1bmN0aW9uKGlkTG9naW4sIHRpcG9Mb2dpbiwgYXNzaW5hdHVyYUxvZ2FkYSl7XG5cdFx0UGF5d2FsbEFuYWx5dGljcy5pZExvZ2luQXNzaW5hbnRlID0gaWRMb2dpbjtcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy50aXBvTG9naW5Bc3NpbmFudGUgPSB0aXBvTG9naW47XG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MuYXNzaW5hdHVyYUxvZ2FkYSA9IGFzc2luYXR1cmFMb2dhZGE7XG5cdH1cbn07XG5cblxuUGlhbm8uYmFubmVyID0ge1xuXHRtb3N0cmFyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZvLWJhbm5lci1mb290ZXIuanNcIik7XG5cdH0sXG5cdG1vc3RyYXJCb3Rhb0Fzc2luYXR1cmFIZWFkZXJGb290ZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby5qc1wiKTtcblx0fSxcblx0bW9zdHJhckF2YXRhckhlYWRlcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYXZhdGFyLWhlYWRlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYXZhdGFyLWhlYWRlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9hdmF0YXItaGVhZGVyLXBpYW5vLmpzXCIpO1xuXHR9LFxuXHRib3R0b21GaXhlZDogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcblx0XHR3aW5kb3cuZ2xiQmFubmVyQm90dG9tID0gcGFyYW1zO1xuXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWJvdHRvbS1maXhlZC9zdHlsZXMvYmFubmVyLWJvdHRvbS1maXhlZC5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWJvdHRvbS1maXhlZC9zY3JpcHRzL2Jhbm5lci1ib3R0b20tZml4ZWQuanNcIik7XG5cdH0sXG5cdG1vc3RyYXJTV0c6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IGNzcyA9IGA8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvc3dnL3YxL3N0eWxlcy9zdHlsZS5jc3MnPmA7XG5cdFx0Y29uc3Qgc2NyaXB0SnMgPSBgaHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zY3JpcHQvYW51bmNpby1zd2cuanNgO1xuXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoY3NzKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoc2NyaXB0SnMpO1xuXHR9LFxuXHRtb3N0cmFySGlnaGxpZ2h0U2FsZTogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2hpZ2hsaWdodC1zYWxlLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyU3Vic2NyaWJlQnV0dG9uVmFsb3I6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC92YWxvci1zdWJzY3JpYmUtYnV0dG9uL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3N1YnNjcmliZS1idXR0b24uanNcIik7XG5cdH1cblxufTtcblxuUGlhbm8ucmVnaXN0ZXIgPSB7XG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL25vdmEtdGVsYS1yZWdpc3Rlci5qc1wiKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcblx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcblx0fVxufTtcblxuUGlhbm8uaGVscGVyID0ge1xuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKCkge1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzY1ZDE5MzBhMGJkYTQ3NmJhOGQzYzI1YzUzNzFlYzNmL3BpYW5vL2hlbHBlci9yZWdpc3Rlci5qc1wiKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcblx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcblx0fVxufTtcblxuUGlhbm8ucGF5d2FsbCA9IHtcblx0cmVkaXJlY2lvbmFyQmFycmVpcmE6IGZ1bmN0aW9uKHVybCkge1xuXHRcdEdBLnNldEV2ZW50cyhcIkJhcnJlaXJhXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDt9LCAxMDAwKTtcblx0fSxcblx0c2hvdzogZnVuY3Rpb24odHlwZVBheXdhbGwgPSBudWxsKSB7XG5cdFx0UGlhbm8udHlwZVBheXdhbGwgPSB0eXBlUGF5d2FsbDtcblxuXHRcdHRyeSB7XG5cdFx0XHRuZXcgUGF5d2FsbENwdCgpO1xuXHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xuXHRcdH1cblx0XHRjYXRjaChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdQYXl3YWxsIC0gRXJyb3Igb24gbG9hZCcpXG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTtcblx0XHR9XG5cdH0sXG5cdGFuYWx5dGljOiBmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdG5ldyBQYXl3YWxsQ3B0SW5saW5lKCk7XG5cdFx0XHR3aW5kb3cuaGFzUGF5d2FsbCA9IHRydWVcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1BheXdhbGxBbmFseXRpYyAtIEVycm9yIG9uIGxvYWQnLCBlcnIpXG5cdFx0fVxuXHR9XG59O1xuXG5mdW5jdGlvbiBhbmFseXRpY2FsVW5ibG9ja2VkRm9yUGlhbm8oKSB7XG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnYW5hbHl0aWNhbFVuYmxvY2tlZEZvclBpYW5vJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGFuYWx5dGljYWxCbG9ja2VkRm9yUGlhbm8oKSB7XG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnYW5hbHl0aWNhbEJsb2NrZWRGb3JQaWFubycpXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBhbmFseXRpY2FsUG9zdElzT3BlbmVkKCkge1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FuYWx5dGljYWxQb3N0SXNPcGVuZWQnKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gYW5hbHl0aWNhbFBvc3RJc0xvYWRpbmcoKSB7XG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnYW5hbHl0aWNhbFBvc3RJc0xvYWRpbmcnKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tFeHBlcmllbmNlc0hhc0NoYW5nZSgpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bGV0IGNvdW50ID0gMDsgXG5cdFx0XG5cdFx0bGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYod2luZG93LnRwICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0JiYgd2luZG93LnRwLmV4cGVyaWVuY2Vcblx0XHRcdCYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KClcblx0XHRcdCYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0XG5cdFx0XHQmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHMpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnN0IGV4cGVyaWVuY2VzID0gd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzXG5cdFx0XHRcdGNvbnN0IGV4cGVyaWVuY2VzQ2xvbmUgPSBBcnJheS5mcm9tKHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcblx0XHRcdFx0Y29uc3QgZXhwZXJpZW5jZXNDaGFuZ2VkID0gT2JqZWN0LmlzKEpTT04uc3RyaW5naWZ5KGV4cGVyaWVuY2VzKSwgSlNPTi5zdHJpbmdpZnkoZXhwZXJpZW5jZXNDbG9uZSkpXG5cblx0XHRcdFx0aWYoZXhwZXJpZW5jZXNDaGFuZ2VkKSB7XG5cdFx0XHRcdFx0ZXhwZXJpZW5jZXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0XHRcdGlmKGl0ZW0uZXZlbnRUeXBlID09PSAncnVuSnMnKSB7XG5cdFx0XHRcdFx0XHRcdGlmKGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldCAhPT0gJ3VuZGVmaW5lZCcgJiYgKGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldC5pbmNsdWRlcygncGF5d2FsbC5hbmFseXRpYycpICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmKGNvdW50ID09PSAxMCkge1xuXHRcdFx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y291bnQrKztcblx0XHRcdH1cblx0XHR9LCAxMDApO1xuXHR9KTtcbn1cblxuUGlhbm8uY2hlY2tQaWFub0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0bGV0IGNvdW50ID0gMFxuXG5cdGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHRpZih3aW5kb3cudHAgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2VcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHRcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHMpXG5cdCAgICAge1xuXHRcdFx0UGlhbm8uY2hlY2tQYXl3YWxsKHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYoY291bnQgPT09IDEwKSB7XG5cdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0XHR9XG5cblx0XHRcdGNvdW50Kytcblx0XHR9XG5cblx0ICB9LCA1MDApO1xuXG59OyBcblxuUGlhbm8uY2hlY2tQYXl3YWxsID0gZnVuY3Rpb24oUGlhbm9SZXN1bHRFdmVudHMgPSBudWxsKSB7XG4gICBsZXQgaGFzUnVuSnNXaXRoUGF5d2FsbCA9IGZhbHNlXG5cblx0aWYoUGlhbm9SZXN1bHRFdmVudHMpIHtcbiAgICAgICAgUGlhbm9SZXN1bHRFdmVudHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0uZXZlbnRUeXBlID09PSAncnVuSnMnKSB7XG5cdFx0XHRcdGlmKGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldCAhPT0gJ3VuZGVmaW5lZCcgJiYgKGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldC5pbmNsdWRlcygncGF5d2FsbC5zaG93Jylcblx0XHRcdFx0fHwgaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0LmluY2x1ZGVzKCdwYXl3YWxsLmFuYWx5dGljJylcblx0XHRcdFx0fHwgaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0LmluY2x1ZGVzKCdtb3N0cmFyQmFycmVpcmEnKSApICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGFzUGF5d2FsbCA9IHRydWVcblx0XHRcdFx0XHRoYXNSdW5Kc1dpdGhQYXl3YWxsID0gdHJ1ZVxuXHRcdFx0XHRcdFBpYW5vLnRyaWdnZXJQYXl3YWxsT3BlbmVkKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIWhhc1J1bkpzV2l0aFBheXdhbGwpXG4gICAgICAgICAgIFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpXG4gICAgfVxuXG59O1xuXG5QaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcgPSBmdW5jdGlvbigpIHtcblx0d2luZG93Lmhhc1BheXdhbGwgPSBmYWxzZTtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjbGVhckZvckFkcycpXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuUGlhbm8udHJpZ2dlclBheXdhbGxPcGVuZWQgPSBmdW5jdGlvbigpIHtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdibG9ja0ZvckFkcycpXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuUGlhbm8ucmVnaXN0ZXJQYXl3YWxsID0ge1xuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbyA9IG51bGwsIHRpcG8gPSBudWxsKSB7XG5cdFx0UGlhbm8udHlwZVBheXdhbGwgPSB0aXBvO1xuXG5cdFx0aWYoIXZlcnNhbyB8fCAhUGlhbm8udHlwZVBheXdhbGwgKSB7XG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcblx0XHRcdFx0XCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vLmpzXCIsXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGlmKGRhdGEuc3RhdHVzICE9PSAyMDApIHtcblx0XHRcdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdGlmKFBpYW5vLnR5cGVQYXl3YWxsID09PSAncmVnaXN0ZXInIHx8IFBpYW5vLnR5cGVQYXl3YWxsID09PSAnZXhjbHVzaXZvJyApIHtcblx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQmFycmVpcmFcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxufTtcblxuUGlhbm8uY29tdW5pY2FkbyA9IHtcblx0bW9zdHJhckluZm9ybWFjYW86IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2NvbXVuaWNhY2FvLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9jb211bmljYWNhby1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uYWRibG9jayA9IHtcblx0bW9zdHJhckFkQmxvY2s6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XG5cblx0XHRwYXJhbXMuYXNzZXRzUGF0aCA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9gO1xuXG5cdFx0d2luZG93LmdsYkFkYmxvY2sgPSBwYXJhbXM7XG5cblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc2NyaXB0cy9hZGJsb2NrLXBpYW5vLmpzXCIpO1xuXHR9XG59O1xuXG5QaWFuby5ibG9xdWVpb3MgPSB7XG5cdGxpYmVyYXJFc2M6IGZ1bmN0aW9uKCkge1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9ibG9xdWVpby9saWJlcmFUZWNsYWRvLmpzXCIpO1xuXHR9LFxuXHRibG9xdWVpYVZpZXdNb2RlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jsb3F1ZWlvL2Jsb3F1ZWlhVmlld21vZGUuanNcIik7XG4gICAgfVxufTtcblxuUGlhbm8ucGFyY2Vpcm8gPSB7XG5cdG1vc3RyYUZvb3RlclBhcmNlaXJvOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGFyY2Vpcm9zLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGFyY2Vpcm9zLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8uanNcIik7XG5cdH1cbn07XG5cblBpYW5vLmluYWRpbXBsZW50ZSA9IHtcblx0Z2V0TGlua0Fzc2luYXR1cmE6IGZ1bmN0aW9uKGxpbmspIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpbmsubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChsaW5rW2ldLnJlbCA9PSAnYXNzaW5hdHVyYScpIHJldHVybiBsaW5rW2ldLmhyZWY7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxufTtcblxuUGlhbm8ueG1sSHR0cFJlcXVlc3QgPSB7XG5cdGdlcmFTY3JpcHROYVBhZ2luYTogZnVuY3Rpb24odXJsU2NyaXB0LCBjYWxsYmFjaykge1xuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmxTY3JpcHQpO1xuXHRcdHhoci5zZW5kKCk7XG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5yZWFkeVN0YXRlID09PSA0KXtcblx0XHRcdFx0aWYodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XG5cdFx0XHRcdFx0dmFyIGFwcGVuZERlU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0XHRcdFx0YXBwZW5kRGVTY3JpcHQuaW5uZXJIVE1MID0gcmVzcG9zdGE7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHBlbmREZVNjcmlwdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ0Vycm8gbmEgZnVuw6fDo28gZ2VyYXIgc2NyaXB0IG5hIHDDoWdpbmEuJywgJ3VybDogJyArIHVybFNjcmlwdFxuXHRcdFx0XHRcdFx0KyAnIFN0YXR1c0Vycm86ICcgKyB0aGlzLnN0YXR1c1xuXHRcdFx0XHRcdFx0KyAnIFN0YWNrOiAnICsgdGhpcy5zdGF0dXNUZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihjYWxsYmFjaylcblx0XHRcdFx0Y2FsbGJhY2soeGhyKTtcblx0XHR9O1xuXHR9LFxuXHRmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogZnVuY3Rpb24oaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIHtcblxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbihcIkdFVFwiLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSwgZmFsc2UpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdFx0eGhyLnNlbmQoKTtcblxuXHRcdGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xuXHRcdFx0aWYoeGhyLnN0YXR1cyA9PSAyMDApe1xuXHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHR2YXIgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3Bvc3RhKTtcblx0XHRcdFx0dmFyIHNpdHVhY2FvUGFnYW1lbnRvID0gcmVzcEpzb24uc2l0dWFjYW9QYWdhbWVudG8udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInNpdHVhY2FvUGFnYW1lbnRvXCIsIHNpdHVhY2FvUGFnYW1lbnRvXSk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyAhPSAwICYmIFBpYW5vLnZhcmlhdmVpcy5zdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlLmluZGV4T2YoeGhyLnN0YXR1cykgPiAtMSkge1xuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCB4aHIuc3RhdHVzICsgXCIgLSBcIiArIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgXCJTdGF0dXMgRGVzY29uaGVjaWRvXCIgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvOiBmdW5jdGlvbihnbGJpZCkge1xuXG5cdFx0dmFyIGNvZGlnb1Byb2R1dG8gPSBQaWFuby52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpO1xuXHRcdGlmKGNvZGlnb1Byb2R1dG8gPT0gJ2Vycm9yJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1widG9rZW4tYXV0ZW50aWNhY2FvXCI6IGdsYmlkLCBcImlwVXN1YXJpb1wiOiBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuSVAsIFwiY29kaWdvUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvfSk7XG5cblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsVmVyaWZpY2FMZWl0b3IsIGZhbHNlKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdFx0eGhyLnNlbmQoZGF0YSk7XG5cblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKXtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XG5cdFx0XHRcdHZhciByZXNwb3N0YURlVGVybW9EZVVzbyA9IGZhbHNlLCByZXNwb3N0YURlTW90aXZvID0gJycsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gJyc7XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubW90aXZvICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRyZXNwb3N0YURlTW90aXZvID0gcmVzcEpzb24ubW90aXZvLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi50ZW1UZXJtb0RlVXNvICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRyZXNwb3N0YURlVGVybW9EZVVzbyA9IHJlc3BKc29uLnRlbVRlcm1vRGVVc287XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5saW5rICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9IFBpYW5vLmluYWRpbXBsZW50ZS5nZXRMaW5rQXNzaW5hdHVyYShyZXNwSnNvbi5saW5rKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgaXNBdXRvcml6YWRvID0gUGlhbm8uYXV0ZW50aWNhY2FvLmlzQXV0b3JpemFkbyhyZXNwb3N0YURlVGVybW9EZVVzbywgcmVzcG9zdGFEZU1vdGl2bywgcmVzcEpzb24uYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHJlc3BKc29uLmF1dG9yaXphZG8sIHJlc3Bvc3RhRGVNb3Rpdm8sIGlzQXV0b3JpemFkbywgcmVzcG9zdGFEZVRlcm1vRGVVc28pO1xuXHRcdFx0XHR2YXIgX2pzb25MZWl0b3IgPSB7XG5cdFx0XHRcdFx0XHRcImF1dG9yaXphZG9cIiA6IHJlc3BKc29uLmF1dG9yaXphZG8sXG5cdFx0XHRcdFx0XHRcIm1vdGl2b1wiOiByZXNwb3N0YURlTW90aXZvLFxuXHRcdFx0XHRcdFx0XCJsb2dhZG9cIjogaXNBdXRvcml6YWRvLFxuXHRcdFx0XHRcdFx0XCJ0ZW1UZXJtb0RlVXNvXCI6IHJlc3Bvc3RhRGVUZXJtb0RlVXNvLFxuXHRcdFx0XHRcdFx0XCJnbGJpZFwiOiBnbGJpZCxcblx0XHRcdFx0XHRcdFwicHJvZHV0b1wiOiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSxcblx0XHRcdFx0XHRcdFwiY29kUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvLFxuXHRcdFx0XHRcdFx0XCJ1dWlkXCI6IHJlc3BKc29uLnVzdWFyaW9JZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdF9qc29uTGVpdG9yID0gYnRvYShlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkoX2pzb25MZWl0b3IpKSk7XG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgX2pzb25MZWl0b3IsIDEpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGlmKFBpYW5vLmdvb2dsZS5zaG93U2F2ZVN1YnNjcmlwdGlvbihyZXNwSnNvbikpe1xuXHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHR2YXIgc3dnU2VydmljZSA9IG5ldyBTd2dTZXJ2aWNlKCk7XG5cdFx0XHRcdFx0XHRcdHN3Z1NlcnZpY2Uuc2F2ZUdsb2JvU3Vic2NyaXB0aW9uKGdsYmlkKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ0Vycm8gYW8gY2hhbWFyIGEgZnVuw6fDo28gc2hvd1NhdmVTdWJzY3JpcHRpb24gZG8gQWxkZWJhcmFuLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdVUkw6ICcgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCsgJyBHTEJJRDogJyArIGdsYmlkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCsgJyBFcnJvOiAnICsgZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHJlc3BKc29uLmF1dG9yaXphZG8gPT0gdHJ1ZSl7XG5cdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhyZXNwSnNvbi51c3VhcmlvSWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0XHR9XG5cblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQVBJIGRlIGF1dG9yaXphY2FvIGRlIGFjZXNzb1wiLCB4aHIuc3RhdHVzICsgXCIgLSBcIiArIGdsYmlkKTtcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLmdvb2dsZSA9IHtcbiAgaXNBdXRob3JpemVkOiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKSl7XG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKHN3Z0VudGl0bGVtZW50cy5nZXRFbnRpdGxlbWVudEZvclNvdXJjZShcIm9nbG9iby5nbG9iby5jb21cIikuc3Vic2NyaXB0aW9uVG9rZW4sIFwiQ29udGEgR29vZ2xlXCIsIFwiTyBHbG9ib1wiKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCkpe1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5DUkVBVEVEX0dMT0JPSUQpLCBcIkNvbnRhIEdvb2dsZVwiLCBcIkdvb2dsZVwiKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBpc1NwZWNpZmljR29vZ2xlVXNlcjogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLmdvb2dsZS5pc0F1dGhvcml6ZWQoKSlcblx0XHRcdHJldHVybjtcblxuXHRcdHRyeXtcblx0XHRcdHZhciBvR2xvYm9CdXNpbmVzcyA9IG5ldyBPR2xvYm9CdXNpbmVzcygpO1xuXHRcdFx0b0dsb2JvQnVzaW5lc3MudmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZChzd2dFbnRpdGxlbWVudHMpO1xuXHRcdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiRXJybyBhbyBleGVjdXRhciBvIEFsZGViYXJhblwiLCBcIkVycm9yOiBcIiArIGVycm9yICsgXCIgLSBFbnRpdGxlbWVudHM6IFwiICsgc3dnRW50aXRsZW1lbnRzLmVudGl0bGVtZW50c1swXS5zdWJzY3JpcHRpb25Ub2tlbik7XG5cdFx0fVxuXHR9LFxuXG5cdHNob3dTYXZlU3Vic2NyaXB0aW9uOiBmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0aWYoIXN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpICYmIHJlc3BvbnNlLm1vdGl2byA9PT1cIkFVVE9SSVpBRE9cIiAmJiAhSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5TQVZFX1NVQlNDUklQVElPTikpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG59O1xuXG5QaWFuby5hdXRlbnRpY2FjYW8gPSB7XG5cdGlzTG9nYWRvQ2FkdW46IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcblx0XHRpZiAoIWdsYmlkKSB7XG5cdFx0XHRpZiAodXRwKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcblx0XHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0fVxuXHRcdHJldHVybiBnbGJpZCAhPSAnJztcblx0fSxcblx0dmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvOiBmdW5jdGlvbihnbGJpZCwgdXRwKSB7XG5cdFx0aWYgKFBpYW5vLmF1dGVudGljYWNhby5pc0xvZ2Fkb0NhZHVuKGdsYmlkLCB1dHApKSB7XG5cdFx0XHRpZiAodXRwKSB7XG5cdFx0XHRcdHZhciBfbGVpdG9yID0gSlNPTi5wYXJzZShkZWNvZGVVUkkoYXRvYih1dHApKSk7XG5cdFx0XHRcdGlmIChnbGJpZCA9PSBfbGVpdG9yLmdsYmlkICYmICh0eXBlb2YgX2xlaXRvci5wcm9kdXRvID09IFwidW5kZWZpbmVkXCIgfHwgX2xlaXRvci5wcm9kdXRvID09IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSkge1xuXHRcdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8oX2xlaXRvci5hdXRvcml6YWRvLCBfbGVpdG9yLm1vdGl2bywgX2xlaXRvci5sb2dhZG8sIF9sZWl0b3IudGVtVGVybW9EZVVzbyk7XG5cdFx0XHRcdFx0aWYoX2xlaXRvci5hdXRvcml6YWRvKXtcblx0XHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoX2xlaXRvci51dWlkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdFx0fVxuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbyhnbGJpZCk7XG5cdFx0fVxuXHR9LFxuXHRpc0F1dG9yaXphZG86IGZ1bmN0aW9uKHRlcm1vRGVVc28sIG1vdGl2bywgYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIHtcblx0XHRpZiAoYXV0b3JpemFkbyB8fCBtb3Rpdm8gPT0gXCJpbmRpc3Bvbml2ZWxcIiB8fCB0ZXJtb0RlVXNvICE9IGZhbHNlKSB7XG5cdFx0XHRpZiAoYXV0b3JpemFkbyAmJiBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkgUGlhbm8ueG1sSHR0cFJlcXVlc3QuZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUoaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0ZGVmaW5lVXN1YXJpb1BpYW5vOmZ1bmN0aW9uKGF1dG9yaXphZG8sIG1vdGl2bywgbG9nYWRvLCB0ZW1UZXJtb0RlVXNvKXtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYXV0b3JpemFkb1wiLCBhdXRvcml6YWRvXSk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm1vdGl2b1wiLCBtb3Rpdm9dKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibG9nYWRvXCIsIGxvZ2Fkb10pO1xuXHRcdGlmKHRlbVRlcm1vRGVVc28gIT0gXCIgXCIpXG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidGVtVGVybW9cIiwgdGVtVGVybW9EZVVzb10pO1xuXHR9XG59O1xuXG5QaWFuby51dGlsID0ge1xuXHRpc1NlY3Rpb246IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3NlY3Rpb24nID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHR0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0eXBlb2YgUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCkgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignVmFyaWF2ZWwgdGlwb0NvbnRldWRvUGlhbm8gbmFvIGVzdGEgZGVmaW5pZGEnLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdGlmICh0eXBlb2YgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignVmFyaWF2ZWwgbm9tZVByb2R1dG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdGV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xuXHRcdHZhciBjaGF2ZXNDYW1wYW5oYSA9IFsndXRtX21lZGl1bScsJ3V0bV9zb3VyY2UnXTtcblx0XHR2YXIgdmFsb3Jlc0NhbXBhbmhhID0gW107XG5cblx0XHRmb3IgKHZhciBpZHhQYXJhbUNhbXBhbmhhID0gMDsgaWR4UGFyYW1DYW1wYW5oYSA8IGNoYXZlc0NhbXBhbmhhLmxlbmd0aDsgaWR4UGFyYW1DYW1wYW5oYSsrKSB7XG5cdFx0XHR2YXIgY2hhdmVDYW1wYW5oYSA9IGNoYXZlc0NhbXBhbmhhW2lkeFBhcmFtQ2FtcGFuaGFdO1xuXHRcdFx0aWYgKHVybC5pbmRleE9mKGNoYXZlQ2FtcGFuaGEgKyAnPScpICE9IC0xKSB7XG5cdFx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFw/KCYpXVwiICsgY2hhdmVDYW1wYW5oYSArIFwiPShbXiYjXSopXCIpO1xuXHRcdFx0XHR2YXIgdmFsb3JDYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XG5cdFx0XHRcdGlmKHZhbG9yQ2FtcGFuaGEpe1xuXHRcdFx0XHRcdHZhbG9yZXNDYW1wYW5oYS5wdXNoKHZhbG9yQ2FtcGFuaGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2YWxvcmVzQ2FtcGFuaGEubGVuZ3RoID4gMCkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInV0bVwiLCB2YWxvcmVzQ2FtcGFuaGEuam9pbihcIjtcIildKTtcblx0XHR9XG5cdFx0aWYgKHVybC5pbmRleE9mKCd1dG1fY2FtcGFpZ249JykgIT0gLTEpIHtcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJ1dG1fY2FtcGFpZ249KFxcXFx3KylcIik7XG5cdFx0XHR2YXIgY2FtcGFuaGEgPSB1cmwubWF0Y2gocmVnZXgpWzFdO1xuXHRcdFx0aWYoY2FtcGFuaGEpe1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiY2FtcGFuaGFcIiwgY2FtcGFuaGFdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGlzT3JpZ2VtQnVzY2Fkb3I6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdHZhciByZWdleFJvYm9zID0gbmV3IFJlZ0V4cChcIihpYV9hcmNoaXZlcil8KEdvb2dsZWJvdCl8KE1lZGlhcGFydG5lcnMtR29vZ2xlKXwoQWRzQm90LUdvb2dsZSl8KG1zbmJvdCl8KFlhaG9vISBTbHVycCl8KFp5Qm9yZyl8KEFzayBKZWV2ZXMvVGVvbWEpfChiaW5nYm90KXwoY1hlbnNlYm90KVwiKTtcblx0XHR2YXIgZWhSb2JvID0gcmVnZXhSb2Jvcy50ZXN0KHVzZXJBZ2VudCk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImJ1c2NhZG9yXCIsIGVoUm9ib10pO1xuXHRcdHJldHVybiBlaFJvYm87XG5cdH0sXG5cdG1vbnRhVXJsU3RnOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKSAhPSAncHJkJyA/ICctc3RnJyA6ICcnO1xuXHR9LFxuXHR0ZW1QYXJhbWV0cm9OYVVybDogZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG5cdFx0dmFyIHBhcmFtZXRyb3MgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XG5cdFx0cmV0dXJuIHBhcmFtZXRyb3MuaW5kZXhPZihwYXJhbU5hbWUpICE9IC0xID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRnZXRWYWxvclBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbWV0cm8pIHtcblx0XHRpZiAoUGlhbm8udXRpbC50ZW1QYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pKSB7XG5cdFx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFw/KCYpXVwiICsgcGFyYW1ldHJvICsgXCI9KFteJiNdKilcIik7XG5cdFx0XHRyZXR1cm4gcGFyYW1ldHJvcy5tYXRjaChyZWdleClbMV07XG5cdFx0fVxuXHRcdHJldHVybiBcInNlbSBwYXJhbWV0cm9cIjtcblx0fSxcblx0aXNEZWJ1ZzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRztcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJykge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCBcIlwiLCAtMSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuREVCVUcpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRpc0RvbWluaW9PR2xvYm86IGZ1bmN0aW9uKCkge1xuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCI6Ly8oLio/KS9cIiksIHVybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25IcmVmKCk7XG5cdFx0aWYgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcIm9nbG9ib1wiKSA+IC0xIHx8ICh1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJnbG9ib2lcIikgPiAtMSAmJiB1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJlZGdcIikgPT0gLTEpKSB7XG5cdFx0XHRyZXR1cm4gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9LFxuXHRjYWxsYmFja01ldGVyOiBmdW5jdGlvbihtZXRlckRhdGEpIHtcblx0XHR3aW5kb3cucmVncmFzVGlueSA9IG1ldGVyRGF0YTtcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KGZhbHNlKTtcblx0fSxcblx0Y2FsbGJhY2tNZXRlckV4cGlyZWQ6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xuXHRcdFBpYW5vLnZhcmlhdmVpcy5pc0NhbGxiYWNrTWV0dGVyRXhwaXJlZCA9IHRydWU7XG5cdFx0UGlhbm8ubWV0cmljYXMuZXhlY3V0YUFwb3NQYWdldmlldyh0cnVlKTtcblx0fSxcblx0Z2V0V2luZG93TG9jYXRpb25TZWFyY2g6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5cdH0sXG5cdGdldFdpbmRvd0xvY2F0aW9uSHJlZjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdH0sXG5cdGFkaWNpb25hckNzczogZnVuY3Rpb24oY3NzUGF0aCl7XG5cdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRlLmlubmVySFRNTCA9IGNzc1BhdGg7XG5cdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZSwgZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xuXHR9LFxuXHRpc1JldmlzdGE6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHJldmlzdGFzID0gW1wiZXBvY2FcIiwgXCJhdXRvLWVzcG9ydGVcIiwgXCJ2b2d1ZVwiLCBcImdsYW1vdXJcIiwgXCJjYXNhLXZvZ3VlXCIsIFwibWFyaWUtY2xhaXJlXCIsIFwiY2FzYS1lLWphcmRpbVwiLCBcInF1ZW0tYWNvbnRlY2VcIiwgXCJnbG9iby1ydXJhbFwiLCBcImdxXCIsIFwibW9uZXRcIiwgJ2NyZXNjZXInLCAnZ2FsaWxldScsICdlcG9jYS1uZWdvY2lvcycsICdwZWduJ107XG5cdFx0aWYocmV2aXN0YXMuaW5kZXhPZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSkgPiAtMSlcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0cmVjYXJyZWdhUGlhbm86IGZ1bmN0aW9uICh0aXBvQ29udGV1ZG8sIGlzRXhjbHVzaXZvLCBub21lUHJvZHV0bywgcG9zdE9wZW5lZCkge1xuXHRcdGNvbnN0IHBvc3RFbGVtZW50ID0gd2luZG93LmFuYWxpdGljb1Bvc3Q7XG5cdFx0d2luZG93LnRpcG9Db250ZXVkb1BpYW5vID0gdGlwb0NvbnRldWRvO1xuXHRcdHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA9IGlzRXhjbHVzaXZvO1xuXHRcdHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID0gbm9tZVByb2R1dG87XG5cdFx0d2luZG93W1widHBcIl0gPSBbXTtcblx0XHRcblx0XHRpZiAodHlwZW9mIHdpbmRvdy5yZWdyYXNUaW55ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gXCJcIjtcblx0XHR9XG5cblx0XHRpZihwb3N0RWxlbWVudCkge1xuXHRcdFx0aWYoIXBvc3RPcGVuZWQpIHtcdFx0XHRcdFxuXHRcdFx0XHRhbmFseXRpY2FsUG9zdElzT3BlbmVkKClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFuYWx5dGljYWxQb3N0SXNMb2FkaW5nKClcblxuXHRcdFx0XHRQaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xuXHRcdFx0XHRsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xuXHRcdFx0XHRcbiAgICAgICAgICAgICAgICBjaGVja0V4cGVyaWVuY2VzSGFzQ2hhbmdlKCkudGhlbihmdW5jdGlvbiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5hbHl0aWNhbEJsb2NrZWRGb3JQaWFubygpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5hbHl0aWNhbFVuYmxvY2tlZEZvclBpYW5vKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRpc1ZhbG9yOiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09IFwidmFsb3JcIilcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuUGlhbm8uY29uZmlndXJhY2FvID0ge1xuXHRqc29uQ29uZmlndXJhY2FvVGlueVBhc3M6IHtcblx0XHQnaW50Jzoge1xuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonZFh1N2R2RktSaScsXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J01jdEZnUkNFc3UnLFxuXHRcdFx0J3NldFNhbmRCb3gnOid0cnVlJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL3NhbmRib3gudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9ZFh1N2R2RktSaScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL3NhbmRib3gudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9TWN0RmdSQ0VzdScsXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vJyxcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcblx0XHR9LFxuXHRcdCdxbHQnOntcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J0dUQ29wSURjNXonLFxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcblx0XHRcdCdzZXRTYW5kQm94JzonZmFsc2UnLFxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1HVENvcElEYzV6Jyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xuXHRcdH0sXG5cdFx0J3ByZCc6e1xuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGkuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tLycsXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5jb25zdHJ1dG9yID0ge1xuXHRpbml0VHA6IGZ1bmN0aW9uKCkge1xuXHRcdHRwID0gd2luZG93W1widHBcIl0gfHwgW107XG5cdFx0dHAucHVzaChbXCJzZXRUYWdzXCIsIFtQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKV1dKTtcblx0XHRpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSB8fCBQaWFuby51dGlsLmlzVmFsb3IoKSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRBaWRcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5pZFNhbmRib3hUaW55cGFzc1JldmlzdGFzXSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dHAucHVzaChbXCJzZXRBaWRcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5pZFNhbmRib3hUaW55cGFzc10pO1xuXHRcdH1cblx0XHR0cC5wdXNoKFtcInNldFNhbmRib3hcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5zZXRTYW5kQm94XSk7XG5cdFx0dHAucHVzaChbXCJzZXREZWJ1Z1wiLCBQaWFuby51dGlsLmlzRGVidWcoKV0pO1xuXHRcdHZhciBjbGVhbl91cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpLnNwbGl0KFwiP1wiKVswXTtcblx0XHR0cC5wdXNoKFtcInNldFBhZ2VVUkxcIixjbGVhbl91cmxdKTtcblx0XHR0cC5wdXNoKFtcInNldFpvbmVcIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibm9tZVByb2R1dG9cIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcblx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLmRldGVjdFByaXZhdGVNb2RlKGZ1bmN0aW9uIChpc19wcml2YXRlKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYW5vbmltb1wiLCBpc19wcml2YXRlXSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoUGlhbm8udmFyaWF2ZWlzLmlzQ29udGV1ZG9FeGNsdXNpdm8oKSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNvbnRldWRvRXhjbHVzaXZvXCIsIHRydWVdKTtcblx0XHR9XG5cblx0XHRpZiAod2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uICYmIHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnICYmICh0eXBlb2Ygc3dnRW50aXRsZW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiBzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSkgKSB7XG5cdFx0XHRQaWFuby5nb29nbGUuaXNTcGVjaWZpY0dvb2dsZVVzZXIoc3dnRW50aXRsZW1lbnRzKTtcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSxcIkFVVE9SSVpBRE9cIiwgdHJ1ZSwgXCJcIik7XG5cdFx0fWVsc2V7XG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8udmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkdDT00pLCBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFApKTtcblx0XHR9XG5cblx0XHRQaWFuby5yZWdpb25hbGl6YWNhby5nZXRSZWdpb24oKTtcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcblxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJiYW5uZXJDb250YWRvckxpZ2Fkb1wiLCB0cnVlXSk7XG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyQWN0aXZlXCIsIFBpYW5vLnV0aWwuY2FsbGJhY2tNZXRlcl0pO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyRXhwaXJlZFwiLCBQaWFuby51dGlsLmNhbGxiYWNrTWV0ZXJFeHBpcmVkXSk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGxvYWRQaWFub0V4cGVyaWVuY2VzKCl7XG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblx0YS50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcblx0YS5hc3luYyA9IHRydWU7XG5cdGlmKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcblx0XHRhLnNyYyA9IFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsU2FuZGJveFBpYW5vUmV2aXN0YXM7XG5cdH0gZWxzZSB7XG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFubztcblx0fVxuXG5cdHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG5cblx0Yi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBiKTtcbn1cblxuZnVuY3Rpb24gcGlhbm9Jbml0KCkge1xuXHR3aW5kb3cuUGlhbm8uY2hlY2tQaWFub0FjdGl2ZSgpXG5cblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxuXG4gICAgaWYgKHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiAmJiB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSB7XG5cdFx0d2luZG93LlNXRy5wdXNoKChzdWJzY3JpcHRpb25zKSA9PiB7XG5cdFx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2ctc3Vic2NyaXB0aW9ucycsIHN1YnNjcmlwdGlvbnMpXG5cblx0XHRcdHN3ZyA9IHN1YnNjcmlwdGlvbnM7XG5cblx0XHRcdHN1YnNjcmlwdGlvbnMuc2V0T25FbnRpdGxlbWVudHNSZXNwb25zZShlbnRpdGxlbWVudHNQcm9taXNlID0+IHtcblx0XHRcdFx0ZW50aXRsZW1lbnRzUHJvbWlzZS50aGVuKGVudGl0bGVtZW50cyA9PiB7XG5cdFx0XHRcdFx0d2luZG93LnN3Z0VudGl0bGVtZW50cyA9IGVudGl0bGVtZW50cztcblxuXHRcdFx0XHRcdGlmICh3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0XHRcdFx0XHRcdGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXRjaChlcnJvcil7XG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiUGlhbm8gbmFvIGZvaSBjYXJyZWdhZGEgY29ycmV0YW1lbnRlIVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgR0Euc2V0RXZlbnRzRXJyb3IoXCJFbnRpdGxlbWVudHMgbsOjbyBjYXJyZWdhZG9cIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmKHdpbmRvdy50aW55Q3B0LlBpYW5vLnV0aWwudGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzKCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG4gICAgICAgICAgICBsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB0aW55SW5pdCgpIHtcblx0VGlueS5zZXRQaWFubyhQaWFubyk7XG4gICAgY29uc3QgU3dnID0gbmV3IFN3Z01vZHVsZSgpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgU3dnLmluaXQoKTtcblx0fVxuXHRjYXRjaChlKSB7IGNvbnNvbGUuZXJyb3IoZSkgfVxuXG5cdHBpYW5vSW5pdCgpO1xufTtcblxudGlueUluaXQoKTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=