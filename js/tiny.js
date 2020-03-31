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
    'id': '6613',
    'cod_prod': 'auto-esporte'
  },
  'epoca': {
    'id': '6612',
    'cod_prod': 'epoca'
  },
  'vogue': {
    'id': '6614',
    'cod_prod': 'vogue'
  },
  'glamour': {
    'id': '6616',
    'cod_prod': 'glamour'
  },
  'casa-vogue': {
    'id': '6610',
    'cod_prod': 'casa-vogue'
  },
  'marie-claire': {
    'id': '6609',
    'cod_prod': 'marie-claire'
  },
  'globo-rural': {
    'id': '6621',
    'cod_prod': 'globo-rural'
  },
  'gq': {
    'id': '6622',
    'cod_prod': 'gq'
  },
  'crescer': {
    'id': '6620',
    'cod_prod': 'crescer'
  },
  'galileu': {
    'id': '6617',
    'cod_prod': 'galileu'
  },
  'epoca-negocios': {
    'id': '6611',
    'cod_prod': 'epoca-negocios'
  },
  'casa-e-jardim': {
    'id': '6619',
    'cod_prod': 'casa-jardim'
  },
  'quem-acontece': {
    'id': '6608',
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
        'id': '6613',
        'cod_prod': 'auto-esporte'
      },
      'epoca': {
        'id': '6612',
        'cod_prod': 'epoca'
      },
      'vogue': {
        'id': '6614',
        'cod_prod': 'vogue'
      },
      'glamour': {
        'id': '6616',
        'cod_prod': 'glamour'
      },
      'casa-vogue': {
        'id': '6610',
        'cod_prod': 'casa-vogue'
      },
      'marie-claire': {
        'id': '6609',
        'cod_prod': 'marie-claire'
      },
      'globo-rural': {
        'id': '6621',
        'cod_prod': 'globo-rural'
      },
      'gq': {
        'id': '6622',
        'cod_prod': 'gq'
      },
      'crescer': {
        'id': '6620',
        'cod_prod': 'crescer'
      },
      'galileu': {
        'id': '6617',
        'cod_prod': 'galileu'
      },
      'epoca-negocios': {
        'id': '6611',
        'cod_prod': 'epoca-negocios'
      },
      'casa-e-jardim': {
        'id': '6619',
        'cod_prod': 'casa-jardim'
      },
      'quem-acontece': {
        'id': '6608',
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
    var revistas = ["epoca", "auto-esporte", "vogue", "glamour", "casa-vogue", "marie-claire", "casa-e-jardim", "quem-acontece", "globo-rural", "gq", "monet", 'crescer', 'galileu'];
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

    if (typeof swg !== 'undefined' && typeof swgEntitlements !== 'undefined' && swgEntitlements.enablesThis()) {
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
    GA.setEvents("Carregamento Piano", "Fim InitTp");
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
  GA.setEvents("Carregamento Piano", "Script adicionado");
}

function pianoInit() {
  window.Piano.checkPianoActive();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLWdhLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiRmIiLCJkYXRhIiwiZGVidWciLCJ3aW5kb3ciLCJ0aW55Q3B0IiwiZGlzYWJsZWQiLCJmYiIsImhhc1BpeGVsIiwicGl4ZWwiLCJuYW1lIiwiaXNEZWZpbmVkIiwiZmJxIiwiR0EiLCJnYSIsIlByb2R1Y3RzIiwiUHJvZHVjdHNNb2R1bGUiLCJkYXRhTGF5ZXIiLCJpc1Byb2R1Y3RWYWxvciIsIl9nYXEiLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJIZWxwZXJzIiwicHJvcCIsImNfbmFtZSIsInZhbHVlIiwiZXhwaXJlZGF5cyIsImV4ZGF0ZSIsIkRhdGUiLCJob3N0bmFtZSIsImxvY2F0aW9uIiwic2V0RGF0ZSIsImdldERhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsImVzY2FwZSIsInRvVVRDU3RyaW5nIiwic3BsaXQiLCJyZXZlcnNlIiwibWF0Y2giLCJSZWdFeHAiLCJjb29raWVUaW55IiwidW5lc2NhcGUiLCJ0b1N0cmluZyIsIlBpYW5vIiwiY29udGVudCIsInNldEV4cGVyaWVuY2UiLCJleHBlcmllbmNlTmFtZSIsImV4cGVyaWVuY2UiLCJyZWdyYXNUaW55Iiwibm9tZUV4cGVyaWVuY2lhIiwic3Vic2VnbWVudGFjYW9QaWFubyIsInNldENvb2tpZSIsInZhcmlhdmVpcyIsImNvbnN0YW50ZSIsIlVUUCIsInByb2R1Y3ROYW1lIiwibm9tZVByb2R1dG9QaWFubyIsInByb2R1Y3RzU2V0dGluZ3MiLCJQcm9kdWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdHNJZCIsImlkIiwiU3dnIiwiU1dHIiwic3dnRW50aXRsZW1lbnRzIiwic3dnIiwibG9jYWxQcm9kdWN0UGlhbm8iLCJoYXNQcm9kdWN0SlNPTiIsInByb2R1Y3RKU09OIiwiZWxIZWFkIiwiaGVhZCIsInNldEdsb2JhbFNXRyIsImdsb2JhbCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsInV0bXNQcm9wcyIsImdsYlBheXdhbGwiLCJ1dG1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsInNldCIsInN1YnNjcmliZSIsInVybCIsImlzUHJvZHVjdGlvbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvZHVjdCIsImZpbHRlciIsInBpYW5vUHJvZHVjdE5hbWUiLCJvYmoiLCJwcm9wc1RvUmVtb3ZlIiwibmV3T2JqIiwiZWxlbWVudCIsImdldFByb2R1Y3QiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXJrdXBUZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3JjIiwidXJsUHJvZCIsInVybFN0ZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldE1hcmt1cCIsInNldFN3Z1NjcmlwdCIsInNldEFsZGViYXJhblNjcmlwdCIsInRlc3RTV0ciLCJUaW55IiwiaGFzUGF5d2FsbCIsInRwIiwiUGF5d2FsbEFuYWx5dGljcyIsInNldEdsb2JhbFRpbnkiLCJzZXRHbG9iYWwiLCJpbml0IiwiZGVmYXVsdFNldHRpbmdzIiwidGlueSIsInBheXdhbGwiLCJhbWJpZW50ZVV0aWxpemFkb1BpYW5vIiwiUGF5d2FsbENwdElubGluZSIsIlBpYW5vTW9kdWxlIiwiZG9tYWluIiwicGF5d2FsbElkIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsImFjdGl2ZUV2ZW50cyIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRpdGxlIiwic3VidGl0bGUiLCJidXR0b25UZXh0IiwiYnV0dG9uTGluayIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGV4dCIsImxvZ2luTGluayIsIm9mZmVyTGluayIsImltYWdlTW9iaSIsImltYWdlRGVzayIsImltYWdlTGluayIsImNzc0xvYWRlZCIsImdsYlBheXdhbGxJbmxpbmUiLCJwb3N0RWxlbWVudCIsImFuYWxpdGljb1Bvc3QiLCJjcmVhdGVUZW1wbGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluRWxlbWVudCIsImZvb3RlckVsZW1lbnQiLCJvcGFjaXR5RWxlbWVudCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjc3NNaW5pZmllZCIsInNldEF0dHJpYnV0ZSIsInRlbXBsYXRlIiwicmVtb3ZlZEVsZW1lbnQiLCJBcnJheSIsImZyb20iLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImZpbmQiLCJjbGFzc05hbWUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsInVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvIiwidXJpIiwiaHJlZiIsInNlcnZpY2VJZCIsImdldFNlcnZpY29JZCIsInN0ciIsInVybFJldHVybiIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldENvZGlnb1Byb2R1dG8iLCJnZXROb21lUHJvZHV0byIsInRlbXBsYXRlVmFycyIsImdldFVybExvZ2luUmVnaXN0ZXIiLCJQYXl3YWxsR0FNb2R1bGUiLCJHQU1vZHVsZSIsIm1ldHJpY3MiLCJwYXl3YWxsVHlwZSIsIl9QaWFubyIsInNldEV2ZW50cyIsInZpZXdOYW1lIiwiUlRJRVgiLCJyZXNldFV0cCIsImRhdGFzZXQiLCJnYVJlc2V0dXRwIiwiaW1hZ2VUb3AiLCJnYUltYWdlUG9zaXRpb24iLCJnYUxhYmVsIiwiZXZlbnQiLCJldmVudG9HQUNhdGVnb3JpYSIsImV2ZW50b0dBQWNhbyIsImdhQWN0aW9uIiwiZXZlbnRvR0FSb3R1bG8iLCJldmVudG9HQVZhbG9yIiwiZXZlbnRvR0FJbnRlcmFjYW8iLCJzZXREYXRhbGF5ZXIiLCJ0eXBlUGF5d2FsbCIsIlBheXdhbGxDcHQiLCJTd2dNb2R1bGUiLCJGQiIsIkZiTW9kdWxlIiwiUGF5d2FsbCIsImFzc2V0c1BhdGgiLCJkaXNwbGF5IiwicHJvZHVjdENsYXNzIiwidGFyZ2V0QmxhbmsiLCJ0b3BNb2JpIiwidG9wRGVzayIsInRvcExpbmsiLCJsZWZ0TW9iaSIsImxlZnREZXNrIiwibGVmdExpbmsiLCJyaWdodE1vYmkiLCJyaWdodERlc2siLCJyaWdodExpbmsiLCJoaWRlTG9naW5BcmVhIiwibG9naW5UYWciLCJjbGVhckxvZ2luQXJlYSIsInNldERlYnVnVGVtcGxhdGVTZXR0aW5ncyIsImVsQm9keSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJlbENwdCIsInNldEVsV3JhcHBlciIsImVsVG9SZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keUFkanVzdCIsInJlbW92ZUVsZW1lbnRzIiwiYWN0aXZlVGVtcGxhdGVTZXR0aW5ncyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBheXdhbGxMb2FkIiwiZWxDcHRXcmFwIiwic2V0VGltZW91dCIsImVsQm9keUhlaWdodCIsImlubmVySGVpZ2h0IiwiZWxDcHRXcmFwSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3VycmVudFRvcCIsIk1hdGgiLCJhYnMiLCJ0b3BXaXRoRnVsbEVsZW1lbnQiLCJ0b3AiLCJvcGFjaXR5IiwiekluZGV4IiwiZXZ0V2hlZWwiLCJldnRUb3VjaCIsInNldFBpeGVsVHlwZSIsImNsaWNrVGFyZ2V0cyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiaXNMb2dpbiIsIkJvb2xlYW4iLCJnZXRBdHRyaWJ1dGUiLCJpc1VybFN3ZyIsImluY2x1ZGVzIiwibm90QmxhbmsiLCJocmVmVGFyZ2V0IiwidHJpZ2dlciIsInNldFV0bXMiLCJvcGVuIiwiYmluZCIsIm5ld3RvcCIsInN0ZXAiLCJtdWx0aXBsaWVyIiwiZGVsdGFZIiwiZWxUb3AiLCJ0b3VjaHN0YXJ0WSIsInRvdWNoZW5kWSIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWSIsImRpZmYiLCJkZWxheVRpbWVyIiwiVGlueU1vZHVsZSIsInNldEdsb2JhbFZhcnMiLCJhbWJpZW50ZXNBY2VpdG9zIiwic3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc28iLCJzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwiaXNDYWxsYmFja01ldHRlckV4cGlyZWQiLCJHQ09NIiwiQU1CSUVOVEUiLCJTQVZFX1NVQlNDUklQVElPTiIsIkNSRUFURURfR0xPQk9JRCIsIkdMT0JPSURfTUVTU0FHRSIsIm1ldHJpY2FzIiwiRVZFTlRPX1NFTV9BQ0FPIiwiRVJSTyIsImtydXgiLCJTRUdNRU5UQUNPRVMiLCJLUlVYTElHQURPIiwidXRpbCIsIklQIiwiREVCVUciLCJpc0NvbnRldWRvRXhjbHVzaXZvIiwiY29udGV1ZG9FeGNsdXNpdm8iLCJnZXRBbWJpZW50ZVBpYW5vIiwiaW5kZXhPZiIsImdldFZhbG9yUGFyYW1ldHJvTmFVcmwiLCJnZXRDb29raWUiLCJnZXRUaXBvQ29udGV1ZG9QaWFubyIsInRpcG9Db250ZXVkb1BpYW5vIiwiZXhlY3V0b3VQYWdldmlldyIsInNldEV2ZW50c0Vycm9yIiwicHJvZHVjdHNPYmplY3QiLCJnZXRQcm9kdWN0c09iamVjdCIsIm5vbWVQcm9kdXRvIiwiY29kUHJvZCIsImF1dGVudGljYWNhbyIsImRlZmluZVVzdWFyaW9QaWFubyIsImphbmVsYUFub25pbWEiLCJyZXRyeSIsImlzRG9uZSIsIm5leHQiLCJjdXJyZW50X3RyaWFsIiwibWF4X3JldHJ5IiwiaXNfdGltZW91dCIsImlzSUUxME9yTGF0ZXIiLCJ1c2VyX2FnZW50IiwidWEiLCJleGVjIiwicGFyc2VJbnQiLCJkZXRlY3RQcml2YXRlTW9kZSIsImlzX3ByaXZhdGUiLCJ3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSIsIlRFTVBPUkFSWSIsImUiLCJpbmRleGVkREIiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGIiLCJyZWFkeVN0YXRlIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ0ZW0iLCJnZXRJdGVtIiwibGlnYWRvIiwicGFyYW1ldHJvIiwidmFsb3JQYXJhbWV0cm8iLCJvYnRlbVNlZ21lbnRhY2FvIiwic2VnbWVudGFjb2VzIiwiaSIsInJlZ2lvbmFsaXphY2FvIiwiZ2V0UmVnaW9uIiwia3J1eEdlbyIsImtleSIsImVudmlhRXZlbnRvc0dBIiwiX0dBQWNhbyIsIl9HQVJvdHVsbyIsIm1vbnRhUm90dWxvR0EiLCJzZXRMaW1pdGVDb250YWdlbSIsIl9HQUxpbWl0ZSIsIl9HQUNvbnRhZ2VtIiwidmlld3MiLCJtYXhWaWV3cyIsImlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3RlciIsInJlZ3JhcyIsInBhc3NhZ2VtIiwiZmx1eG8iLCJleGVjdXRhQXBvc1BhZ2V2aWV3IiwiZXhwaXJvdSIsInRwQ29udGV4dCIsInNldGFWYXJpYXZlaXMiLCJpZExvZ2luIiwidGlwb0xvZ2luIiwiYXNzaW5hdHVyYUxvZ2FkYSIsImlkTG9naW5Bc3NpbmFudGUiLCJ0aXBvTG9naW5Bc3NpbmFudGUiLCJiYW5uZXIiLCJtb3N0cmFyRm9vdGVyIiwidmVyc2FvIiwiYWRpY2lvbmFyQ3NzIiwibW9udGFVcmxTdGciLCJ4bWxIdHRwUmVxdWVzdCIsImdlcmFTY3JpcHROYVBhZ2luYSIsIm1vc3RyYXJCb3Rhb0Fzc2luYXR1cmFIZWFkZXJGb290ZXIiLCJtb3N0cmFyQXZhdGFySGVhZGVyIiwiYm90dG9tRml4ZWQiLCJwYXJhbXMiLCJnbGJCYW5uZXJCb3R0b20iLCJtb3N0cmFyU1dHIiwiY3NzIiwic2NyaXB0SnMiLCJtb3N0cmFySGlnaGxpZ2h0U2FsZSIsIm1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvciIsInJlZ2lzdGVyIiwibW9zdHJhckJhcnJlaXJhIiwiaGVscGVyIiwicmVkaXJlY2lvbmFyQmFycmVpcmEiLCJzaG93IiwiZXJyb3IiLCJ0cmlnZ2VyQWR2ZXJ0aXNpbmciLCJhbmFseXRpYyIsImVyciIsImFuYWx5dGljYWxVbmJsb2NrZWRGb3JQaWFubyIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImFuYWx5dGljYWxCbG9ja2VkRm9yUGlhbm8iLCJhbmFseXRpY2FsUG9zdElzT3BlbmVkIiwiYW5hbHl0aWNhbFBvc3RJc0xvYWRpbmciLCJjaGVja0V4cGVyaWVuY2VzSGFzQ2hhbmdlIiwiX2dldExhc3RFeGVjdXRpb25SZXN1bHQiLCJldmVudHMiLCJleHBlcmllbmNlcyIsImV4cGVyaWVuY2VzQ2xvbmUiLCJleHBlcmllbmNlc0NoYW5nZWQiLCJpcyIsImV2ZW50VHlwZSIsImV2ZW50UGFyYW1zIiwic25pcHBldCIsImNoZWNrUGlhbm9BY3RpdmUiLCJjaGVja1BheXdhbGwiLCJQaWFub1Jlc3VsdEV2ZW50cyIsImhhc1J1bkpzV2l0aFBheXdhbGwiLCJ0cmlnZ2VyUGF5d2FsbE9wZW5lZCIsInJlZ2lzdGVyUGF5d2FsbCIsInRpcG8iLCJzdGF0dXMiLCJjb211bmljYWRvIiwibW9zdHJhckluZm9ybWFjYW8iLCJhZGJsb2NrIiwibW9zdHJhckFkQmxvY2siLCJnbGJBZGJsb2NrIiwiYmxvcXVlaW9zIiwibGliZXJhckVzYyIsImJsb3F1ZWlhVmlld01vZGUiLCJwYXJjZWlybyIsIm1vc3RyYUZvb3RlclBhcmNlaXJvIiwiaW5hZGltcGxlbnRlIiwiZ2V0TGlua0Fzc2luYXR1cmEiLCJsaW5rIiwicmVsIiwidXJsU2NyaXB0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9zdGEiLCJyZXNwb25zZVRleHQiLCJhcHBlbmREZVNjcmlwdCIsImFwcGVuZENoaWxkIiwic3RhdHVzVGV4dCIsImZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwiaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVzcEpzb24iLCJwYXJzZSIsInNpdHVhY2FvUGFnYW1lbnRvIiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbyIsImdsYmlkIiwiY29kaWdvUHJvZHV0byIsImNvbmZpZ3VyYWNhbyIsImpzb25Db25maWd1cmFjYW9UaW55UGFzcyIsInVybFZlcmlmaWNhTGVpdG9yIiwicmVzcG9zdGFEZVRlcm1vRGVVc28iLCJyZXNwb3N0YURlTW90aXZvIiwibW90aXZvIiwidGVtVGVybW9EZVVzbyIsImlzQXV0b3JpemFkbyIsImF1dG9yaXphZG8iLCJfanNvbkxlaXRvciIsInVzdWFyaW9JZCIsImJ0b2EiLCJlbmNvZGVVUkkiLCJnb29nbGUiLCJzaG93U2F2ZVN1YnNjcmlwdGlvbiIsInN3Z1NlcnZpY2UiLCJTd2dTZXJ2aWNlIiwic2F2ZUdsb2JvU3Vic2NyaXB0aW9uIiwiaXNBdXRob3JpemVkIiwiZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UiLCJzdWJzY3JpcHRpb25Ub2tlbiIsImlzU3BlY2lmaWNHb29nbGVVc2VyIiwib0dsb2JvQnVzaW5lc3MiLCJPR2xvYm9CdXNpbmVzcyIsInZlcmlmeUlmVXNlckhhc0FjY2Vzc09yRGVmZXJyZWQiLCJlbnRpdGxlbWVudHMiLCJyZXNwb25zZSIsImVuYWJsZXNUaGlzIiwiaXNMb2dhZG9DYWR1biIsInV0cCIsInZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50byIsIl9sZWl0b3IiLCJkZWNvZGVVUkkiLCJhdG9iIiwicHJvZHV0byIsImxvZ2FkbyIsInV1aWQiLCJ0ZXJtb0RlVXNvIiwiaXNTZWN0aW9uIiwidGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzIiwiZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmwiLCJnZXRXaW5kb3dMb2NhdGlvblNlYXJjaCIsImNoYXZlc0NhbXBhbmhhIiwidmFsb3Jlc0NhbXBhbmhhIiwiaWR4UGFyYW1DYW1wYW5oYSIsImNoYXZlQ2FtcGFuaGEiLCJyZWdleCIsInZhbG9yQ2FtcGFuaGEiLCJqb2luIiwiY2FtcGFuaGEiLCJpc09yaWdlbUJ1c2NhZG9yIiwicmVnZXhSb2JvcyIsImVoUm9ibyIsInRlbVBhcmFtZXRyb05hVXJsIiwicGFyYW1OYW1lIiwicGFyYW1ldHJvcyIsImlzRGVidWciLCJpc0RvbWluaW9PR2xvYm8iLCJnZXRXaW5kb3dMb2NhdGlvbkhyZWYiLCJjYWxsYmFja01ldGVyIiwibWV0ZXJEYXRhIiwiY2FsbGJhY2tNZXRlckV4cGlyZWQiLCJjc3NQYXRoIiwiaW5zZXJ0QmVmb3JlIiwibGFzdENoaWxkIiwiaXNSZXZpc3RhIiwicmV2aXN0YXMiLCJyZWNhcnJlZ2FQaWFubyIsInRpcG9Db250ZXVkbyIsImlzRXhjbHVzaXZvIiwicG9zdE9wZW5lZCIsImNvbnN0cnV0b3IiLCJpbml0VHAiLCJsb2FkUGlhbm9FeHBlcmllbmNlcyIsImNoYW5nZWQiLCJpc1ZhbG9yIiwiaWRTYW5kYm94VGlueXBhc3NSZXZpc3RhcyIsImlkU2FuZGJveFRpbnlwYXNzIiwic2V0U2FuZEJveCIsImNsZWFuX3VybCIsImEiLCJhc3luYyIsInVybFNhbmRib3hQaWFub1JldmlzdGFzIiwidXJsU2FuZGJveFBpYW5vIiwiYiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGlhbm9Jbml0Iiwic3Vic2NyaXB0aW9ucyIsInNldE9uRW50aXRsZW1lbnRzUmVzcG9uc2UiLCJlbnRpdGxlbWVudHNQcm9taXNlIiwidGlueUluaXQiLCJzZXRQaWFubyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwy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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGlueS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3NjcmlwdHMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgJ29nbG9ibyc6IHtcbiAgICAgICAgJ2lkJzogJzM5ODEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnT0cwMydcbiAgICB9LFxuICAgICdibG9ncyc6IHtcbiAgICAgICAgJ2lkJzogJzM5ODEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnT0cwMydcbiAgICB9LFxuICAgICdrb2d1dCc6IHtcbiAgICAgICAgJ2lkJzogJzM5ODEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnT0cwMydcbiAgICB9LFxuICAgICdibG9nQW5hbGl0aWNvJzoge1xuICAgICAgICAnaWQnOiAnMzk4MScsXG4gICAgICAgICdjb2RfcHJvZCc6ICdPRzA0J1xuICAgIH0sXG4gICAgJ2FjZXJ2byc6IHtcbiAgICAgICAgJ2lkJzogJzM5ODEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnT0cwNCdcbiAgICB9LFxuICAgICdqb3JuYWxkaWdpdGFsJzoge1xuICAgICAgICAnaWQnOiAnMzk4MScsXG4gICAgICAgICdjb2RfcHJvZCc6ICdPRzAxJ1xuICAgIH0sXG4gICAgJ21vbmV0Jzoge1xuICAgICAgICAnaWQnOiAnNjYxOCcsXG4gICAgICAgICdjb2RfcHJvZCc6ICdtb25ldCdcbiAgICB9LFxuICAgICdhdXRvLWVzcG9ydGUnOiB7XG4gICAgICAgICdpZCc6ICc2NjEzJyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ2F1dG8tZXNwb3J0ZSdcbiAgICB9LFxuICAgICdlcG9jYSc6IHtcbiAgICAgICAgJ2lkJzogJzY2MTInLFxuICAgICAgICAnY29kX3Byb2QnOiAnZXBvY2EnXG4gICAgfSxcbiAgICAndm9ndWUnOiB7XG4gICAgICAgICdpZCc6ICc2NjE0JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ3ZvZ3VlJ1xuICAgIH0sXG4gICAgJ2dsYW1vdXInOiB7XG4gICAgICAgICdpZCc6ICc2NjE2JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ2dsYW1vdXInXG4gICAgfSxcbiAgICAnY2FzYS12b2d1ZSc6IHtcbiAgICAgICAgJ2lkJzogJzY2MTAnLFxuICAgICAgICAnY29kX3Byb2QnOiAnY2FzYS12b2d1ZSdcbiAgICB9LFxuICAgICdtYXJpZS1jbGFpcmUnOiB7XG4gICAgICAgICdpZCc6ICc2NjA5JyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ21hcmllLWNsYWlyZSdcbiAgICB9LFxuICAgICdnbG9iby1ydXJhbCc6IHtcbiAgICAgICAgJ2lkJzogJzY2MjEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnZ2xvYm8tcnVyYWwnXG4gICAgfSxcbiAgICAnZ3EnOiB7XG4gICAgICAgICdpZCc6ICc2NjIyJyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ2dxJ1xuICAgIH0sXG4gICAgJ2NyZXNjZXInOiB7XG4gICAgICAgICdpZCc6ICc2NjIwJyxcbiAgICAgICAgJ2NvZF9wcm9kJzogJ2NyZXNjZXInXG4gICAgfSxcbiAgICAnZ2FsaWxldSc6IHtcbiAgICAgICAgJ2lkJzogJzY2MTcnLFxuICAgICAgICAnY29kX3Byb2QnOiAnZ2FsaWxldSdcbiAgICB9LFxuICAgICdlcG9jYS1uZWdvY2lvcyc6IHtcbiAgICAgICAgJ2lkJzogJzY2MTEnLFxuICAgICAgICAnY29kX3Byb2QnOiAnZXBvY2EtbmVnb2Npb3MnXG4gICAgfSxcbiAgICAnY2FzYS1lLWphcmRpbSc6IHtcbiAgICAgICAgJ2lkJzogJzY2MTknLFxuICAgICAgICAnY29kX3Byb2QnOiAnY2FzYS1qYXJkaW0nXG4gICAgfSxcbiAgICAncXVlbS1hY29udGVjZSc6IHtcbiAgICAgICAgJ2lkJzogJzY2MDgnLFxuICAgICAgICAnY29kX3Byb2QnOiAncXVlbSdcbiAgICB9LFxuICAgICdwZWduJzoge1xuICAgICAgICAnaWQnOiAnNjYxNScsXG4gICAgICAgICdjb2RfcHJvZCc6ICdwZXF1ZW5hcy1lbXByZXNhcydcbiAgICB9LFxuICAgICd2YWxvcic6IHtcbiAgICAgICAgJ2lkJzogJzY2NjgnLFxuICAgICAgICAnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJ1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGYiB7XG4gICAgY29uc3RydWN0b3IoZGF0YSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZiID0gZGF0YTtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWZpbmVkKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBmYnEgIT09ICd1bmRlZmluZWQnKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRQaXhlbFR5cGUoKSB7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaGFzUGl4ZWwgPSAodHlwZW9mIHRoaXMuZmIucGl4ZWwubmFtZSAhPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5mYi5waXhlbC5uYW1lIDogbnVsbDsgXG5cbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQgJiYgaGFzUGl4ZWwpe1xuICAgICAgICAgICAgZmJxKCdpbml0JywgJzQxMDI3MDAzOTUyMDYzNCcpO1xuICAgICAgICAgICAgZmJxKCd0cmFja1NpbmdsZScsICc0MTAyNzAwMzk1MjA2MzQnLCB0aGlzLmZiLnBpeGVsLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQSAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYTtcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xuICAgIH1cbiAgICBcbiAgICBzZXRHbG9iYWxWYXJzKCkge1xuICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciAgfHwgW107IFxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvciAmJiB0eXBlb2YgX2dhcSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxICB8fCBbXTsgIFxuICAgIH1cblxuICAgIHNldEV2ZW50cyhhY3Rpb24sIGxhYmVsLCBjYXRlZ29yeSA9ICdQaWFubycpIHtcblxuXHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhKVxuXHRcdFx0Y29uc29sZS5sb2coJ2xvZy1nYS1ldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKVxuXG4gICAgICAgIGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgLHRydWVdKTtcblx0XHRcblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiBjYXRlZ29yeSwgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xuICAgIH1cbiAgICBcbiAgICBzZXRFdmVudHNFcnJvcihhY3Rpb24sIGxhYmVsKSB7XG5cdFx0aWYgKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IpXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdQaWFubyBFcnJvJywgYWN0aW9uLCBsYWJlbCwgLHRydWVdKTtcblxuXHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubyBFcnJvJywgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xuXHR9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcblxuICAgIHN0YXRpYyBpc0RlZmluZWQocHJvcCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBwcm9wICE9PSAndW5kZWZpbmVkJykgPyB0cnVlOiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q29va2llKGNfbmFtZSwgdmFsdWUsIGV4cGlyZWRheXMgPSBudWxsKSB7XG4gICAgICAgIGxldCBleGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSA/IGxvY2F0aW9uLmhvc3RuYW1lIDogbnVsbDtcblxuICAgICAgICBpZighaG9zdG5hbWUpIHJldHVybjtcblxuICAgICAgICBleGRhdGUuc2V0RGF0ZShleGRhdGUuZ2V0RGF0ZSgpICsgZXhwaXJlZGF5cyk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNfbmFtZSArIFwiPVwiICtlc2NhcGUodmFsdWUpICsgKChleHBpcmVkYXlzKSA/IFwiXCIgOiBcIjtleHBpcmVzPVwiICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkpXG4gICAgICAgICsgXCI7IHBhdGg9LztcIiArIFwiZG9tYWluPS5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzFdICsgXCIuXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVswXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWUpIHtcbiAgICAgICAgbGV0IG1hdGNoID0gKGRvY3VtZW50LmNvb2tpZSkgPyBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChuYW1lKyc9KFteO10rKScpKSA6IGZhbHNlO1xuICAgICAgICBsZXQgY29va2llVGlueSA9IG1hdGNoID8gdW5lc2NhcGUobWF0Y2hbMV0udG9TdHJpbmcoKSkgOiBcIlwiO1xuICAgICAgICByZXR1cm4gY29va2llVGlueTtcbiAgICB9XG4gICAgICAgIFxuXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNldEV4cGVyaWVuY2UoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWZpbmVkKCkge1xuICAgICAgICBpZih0eXBlb2Ygd2luZG93LnRpbnlDcHQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcpIHsgXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB3aW5kb3cudGlueUNwdC5QaWFubztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRFeHBlcmllbmNlKCkgeyAgXG4gICAgICAgIGxldCBleHBlcmllbmNlTmFtZSA9ICcnOyAgIFxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZSA9IHt9OyAgXG4gICAgICAgICBcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7cmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XG4gICAgICAgIFxuICAgICAgICBpZiAod2luZG93Lm5vbWVFeHBlcmllbmNpYSkgXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7d2luZG93Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xuICAgICAgIFxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZS5uYW1lID0gZXhwZXJpZW5jZU5hbWU7XG5cdH1cblxuICAgIHJlc2V0VXRwKCkge1xuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZClcbiAgICAgICAgICAgIEhlbHBlcnMuc2V0Q29va2llKHRoaXMuY29udGVudC52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsICcnLCAtMSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHByb2R1Y3RzSWQgZnJvbSAnLi4vbW9ja3MvcHJvZHVjdHMvcHJvZHVjdHMtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWUgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA6IG51bGw7XG4gICAgfVxuXG4gICAgc2V0R2xvYmFsKCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0c1NldHRpbmdzID0ge1xuICAgICAgICAgICAgUHJvZHVjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvZHVjdE5hbWUsXG4gICAgICAgICAgICAgICAgLy8gaWQ6IHRoaXMucHJvZHVjdElkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihwcm9kdWN0c1NldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBwcm9kdWN0c1NldHRpbmdzOyBcbiAgICB9XG4gICAgXG4gICAgZ2V0IGlzUHJvZHVjdFZhbG9yKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucHJvZHVjdE5hbWUgJiYgdGhpcy5wcm9kdWN0TmFtZSA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHByb2R1Y3RJZCgpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXSAhPT0gICd1bmRlZmluZWQnKSBcbiAgICAgICAgJiYgKHR5cGVvZiBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkICE9PSAgJ3VuZGVmaW5lZCcpIClcbiAgICAgICAgPyBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkIDogbnVsbDtcbiAgICAgICAgXG4gICAgfVxuXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHdpbmRvdy5TV0cgPSB3aW5kb3cuU1dHIHx8IFtdOyAvL1RPRE86IFVuZGVyc3RhbmQgd2h5IHRoaXMgdmFyaWFibGUgZXhpc3RzXG4gICAgICAgIHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSB3aW5kb3cuc3dnRW50aXRsZW1lbnRzIHx8IG51bGw7XG4gICAgICAgIHRoaXMuZGVidWcgPSAoSGVscGVycy5pc0RlZmluZWQod2luZG93LnRpbnlDcHQpKSA/IHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZyA6IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxQcm9kdWN0UGlhbm8gPSAodHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnKSA/IG5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xuICAgICAgICB0aGlzLmhhc1Byb2R1Y3RKU09OID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBudWxsO1xuICAgICAgICB0aGlzLmVsSGVhZCA9IGRvY3VtZW50LmhlYWQ7IFxuXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsU1dHKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHsgXG4gICAgICAgIHJldHVybiAod2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCkgPyB0cnVlIDogZmFsc2U7IFxuICAgIH1cblxuICAgIHNldEdsb2JhbFNXRygpIHtcbiAgICAgICAgaWYoIUhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgcmV0dXJuO1xuXG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlN3ZyA9IHtcbiAgICAgICAgICAgIGdsb2JhbDogKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSA/IHN3ZyA6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRVdG1zKCkgeyAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBjb25zdCB1dG1zUHJvcHMgPSAodHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3Zy51dG1zICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyA6IG51bGw7IFxuXG4gICAgICAgIHV0bXNQcm9wcy5mb3JFYWNoKChpdGVtKSA9PiB7IFxuICAgICAgICAgICAgbGV0IG5hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICB1cmxQYXJhbXMuc2V0KGB1dG1fJHtuYW1lfWAsIHZhbHVlKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdzZXRVdG1zJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCB1dG1zUHJvcHMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgbG9jYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBpZiggKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMuaXNEZWZpbmVkKSB8fCAhdXRtc1Byb3BzICkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbC5zdWJzY3JpYmUoJ2JyLmNvbS5pbmZvZ2xvYm8ub2dsb2JvLnN3Zy5nb29nbGUnKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uICBcbiAgICAgICAgPyAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfN2IwYTZkZjQ5ODk1NDU5ZmJhZmU0OWE5NmZjYjViYmYvc3dnL3Byb2QvcHJvZHVjdHMuanNvbicgXG4gICAgICAgIDogJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9kZXYvcHJvZHVjdHMuanNvbic7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdCgpIHsgXG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0ucGlhbm9Qcm9kdWN0TmFtZSA9PT0gdGhpcy5sb2NhbFByb2R1Y3RQaWFubyApWzBdO1xuICAgICAgICByZXR1cm4gcHJvZHVjdCB8fCBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZVByb3BlcnRpZXMob2JqKSB7IFxuICAgICAgICBjb25zdCBwcm9wc1RvUmVtb3ZlID0gWydwcm9kdWN0TmFtZScsICdwaWFub1Byb2R1Y3ROYW1lJ107XG4gICAgICAgIGNvbnN0IG5ld09iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XG5cbiAgICAgICAgcHJvcHNUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIG5ld09ialtlbGVtZW50XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG5cbiAgICBhc3luYyBtYXJrdXBUZW1wbGF0ZSgpIHsgXG4gICAgICAgIGNvbnN0IHByb2R1Y3RKU09OID0gIGF3YWl0IHRoaXMucmVtb3ZlUHJvcGVydGllcyhhd2FpdCB0aGlzLmdldFByb2R1Y3QoKSkgfHwgbnVsbDsgXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBPYmplY3Qua2V5cyhwcm9kdWN0SlNPTikubGVuZ3RoID8gSlNPTi5zdHJpbmdpZnkocHJvZHVjdEpTT04pIDogbnVsbDtcblxuICAgICAgICBpZighcHJvZHVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuZGVidWcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeydsb2ctU1dHLVByb2R1Y3QnOiBwcm9kdWN0fSk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBgJHsgcHJvZHVjdCB9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNldE1hcmt1cCgpIHsgXG4gICAgICAgIGF3YWl0IHRoaXMubWFya3VwVGVtcGxhdGUoKTtcbiAgICAgICAgaWYoIXRoaXMucHJvZHVjdEpTT04pIHJldHVybjtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICBcbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2FwcGxpY2F0aW9uL2xkK2pzb24nO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMucHJvZHVjdEpTT047XG4gICAgICAgIHRoaXMuZWxIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgc2V0U3dnU2NyaXB0KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gJ2h0dHBzOi8vbmV3cy5nb29nbGUuY29tL3N3Zy9qcy92MS9zd2cuanMnO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNldEFsZGViYXJhblNjcmlwdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCB1cmxQcm9kID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2MxMGFlODE5YzU2ODQ2MGJiNGVjMTdjMGE4ZWM1MjY3L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xuICAgICAgICBjb25zdCB1cmxTdGcgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYWRkYzVlOGYzMTZmNDhlYTkxODFhZjM3MTYwYjIyYjQvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XG5cbiAgICAgICAgZWxlbWVudC5zcmMgPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyB1cmxQcm9kIDogdXJsU3RnO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRlc3RTV0coKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc3dnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwgPSB3aW5kb3cuc3dnO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ1RoZXJlIGlzblxcJ3Qgd2luZG93LnN3ZycpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0TWFya3VwKCk7ICBcbiAgICAgICAgIFxuICAgICAgICBpZighdGhpcy5oYXNQcm9kdWN0SlNPTikgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTd2dTY3JpcHQoKTsgXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QWxkZWJhcmFuU2NyaXB0KCk7ICAgXG4gICAgICAgIGF3YWl0IHRoaXMudGVzdFNXRygpOyAgICAgICBcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55ICB7XG5cdGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xuICAgICAgICB3aW5kb3cuaGFzUGF5d2FsbCA9IHdpbmRvdy5oYXNQYXl3YWxsIHx8IG51bGw7XG4gICAgICAgIHdpbmRvdy50cCA9IHdpbmRvdy50cCB8fCBbXTtcbiAgICAgICAgd2luZG93LlBpYW5vID0gd2luZG93LlBpYW5vIHx8IHt9O1xuICAgICAgICB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyA9IHdpbmRvdy5QYXl3YWxsQW5hbHl0aWNzIHx8IHt9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRHbG9iYWxUaW55KCk7XG4gICAgICAgIHRoaXMuUHJvZHVjdHMuc2V0R2xvYmFsKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHNldEdsb2JhbFRpbnkoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICAgICAgdGlueTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF5d2FsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3dnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBnYTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1Byb2R1Y3Rpb246ICh3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IGRlZmF1bHRTZXR0aW5nczsgXG4gICAgfVxuICAgIFxuICAgIHNldFBpYW5vKG9iaikge1xuICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFubyA9IG9iajtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgIH1cblxufSIsImltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheXdhbGxDcHRJbmxpbmUgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuXHRcdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcblxuXHRcdHRoaXMuZG9tYWluID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLyc7XHRcblx0XHR0aGlzLnBheXdhbGxJZCA9ICdwYXl3YWxsLWlubGluZSdcblxuXHRcdHRoaXMuc2V0VGVtcGxhdGVTZXR0aW5ncygoKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpXG5cdFx0fSk7XG5cdH1cblxuXHRzZXRUZW1wbGF0ZVNldHRpbmdzKGNhbGxiYWNrKSB7XG5cdFx0bGV0IHRlbXBsYXRlU2V0dGluZ3MgPSB7XG5cdFx0XHR0aXRsZTogJ1BhcmEgY29udGludWFyIHN1YSBsZWl0dXJhLCDDqSBwcmVjaXNvIHNlIGNhZGFzdHJhci4nLFxuXHRcdFx0c3VidGl0bGU6ICfDiSByw6FwaWRvIGUgZ3LDoXRpcyEnLFxuXHRcdFx0YnV0dG9uVGV4dDogJ0NhZGFzdHJlLXNlIGdyYXR1aXRhbWVudGUgYWdvcmEnLFxuXHRcdFx0YnV0dG9uTGluazogJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMScsXG5cdFx0XHRsb2dpblByZVRleHQ6ICdKw6EgcG9zc3VpIGNhZGFzdHJvPyAnLFxuXHRcdFx0bG9naW5UZXh0OiAnRmHDp2EgbG9naW4nLFxuXHRcdFx0bG9naW5MaW5rOiB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJywgXG5cdFx0XHRvZmZlckxpbms6IFwiaHR0cHM6Ly9nb29nbGUuY29tP2wxXCIsXG5cdFx0XHRpbWFnZU1vYmk6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTBcIixcblx0XHRcdGltYWdlRGVzazogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODA0eDEyOFwiLFxuXHRcdFx0aW1hZ2VMaW5rOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTUwXCIsXG5cdFx0XHRjc3NMb2FkZWQ6IGZhbHNlXG5cdFx0fTtcblxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lID0gKHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lKSA/ICBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZVNldHRpbmdzLCB3aW5kb3cuZ2xiUGF5d2FsbElubGluZSkgOiB0ZW1wbGF0ZVNldHRpbmdzOyBcblxuXHRcdGNhbGxiYWNrKCk7XG5cdH1cblxuICAgIGFjdGl2ZUV2ZW50cygpIHtcblx0XHRjb25zdCBwb3N0RWxlbWVudCA9IHdpbmRvdy5hbmFsaXRpY29Qb3N0O1xuXG5cdFx0aWYoIXBvc3RFbGVtZW50KSByZXR1cm4gbnVsbFxuXG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZShwb3N0RWxlbWVudClcblx0fVxuXG4gIFx0Y3JlYXRlVGVtcGxhdGUocG9zdEVsZW1lbnQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gcG9zdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tcmVhZC1tb3JlXCIpO1xuXHRcdGNvbnN0IG1haW5FbGVtZW50ID0gcG9zdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpXG5cdFx0Y29uc3QgZm9vdGVyRWxlbWVudCA9IHBvc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWZvb3RlcicpXG5cdFx0Y29uc3Qgb3BhY2l0eUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1vcGFjaXR5XCI+PC9kaXY+YFxuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmKCF3aW5kb3cuZ2xiUGF5d2FsbElubGluZS5jc3NMb2FkZWQpIHtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHRcdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbElubGluZS5jc3NMb2FkZWQgPSB0cnVlXG5cdFx0XHR9XG5cblx0XHRcdGZvb3RlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcblx0XHRcdHBhZGRpbmctdG9wOiAwcHg7IHBvc2l0aW9uOnJlbGF0aXZlYCk7XG5cblx0XHRcdG1haW5FbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtgKTtcblxuXHRcdFx0bWFpbkVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBvcGFjaXR5RWxlbWVudCk7IFxuXHRcdFx0Ly8gcG9zdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWNvbnRlbnQnKVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMudGVtcGxhdGUpOyBcblx0XHRcdGNvbnN0IHJlbW92ZWRFbGVtZW50ID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ290aGVyLWNvbnRlbnQnKVxuXHRcdFx0XG5cdFx0XHRpZihyZW1vdmVkRWxlbWVudClcblx0XHRcdFx0cmVtb3ZlZEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZW1vdmVkRWxlbWVudClcblxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKVxuXHRcdH1cblx0ICB9XG5cdCAgXG5cdGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XG5cdFx0Y29uc3QgdXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gPSB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcgPyAnaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCcgOiAnaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCc7XG5cdFx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcblx0XHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcblx0XHRsZXQgc3RyID0gJyc7XG5cdFx0bGV0IHVybFJldHVybiA9ICcnO1xuXHRcblx0XHRpZighdGhpcy5kZWJ1ZyAmJiB0aGlzLlBpYW5vLmlzRGVmaW5lZCkge1xuXHRcdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxuXHRcdFx0XHQrICcmc2VydmljZUlkPScgKyBzZXJ2aWNlSWRcblx0XHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xuXHRcdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxuXHRcdFx0XHQrICcmdXJsUmV0b3Jubz0nICsgdXJpXG5cdFx0XHQpO1xuXHRcblx0XHRcdGlmKHR5cGUgPT09ICdidXR0b24nKSB7XG5cdFx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWNhZGFzdHJvLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHRcdHJldHVybiBzdHI7XG5cdH1cblxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xuXHRyZXR1cm4gd2luZG93LmdsYlBheXdhbGxJbmxpbmU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7IFxuXHRjb25zdCB0ZW1wbGF0ZSA9IGBcblx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc3xSYWxld2F5JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lXCIgaWQ9JHt0aGlzLnBheXdhbGxJZH0+IFxuXHRcdFx0PGgxIGNsYXNzID1cInBheXdhbGwtY3B0LWlubGluZS10aXRsZVwiPjxzcGFuIGNsYXNzPXBheXdhbGwtY3B0LWlubGluZS10aXRsZS1maXJzdF9saW5lPiR7dGhpcy50ZW1wbGF0ZVZhcnMudGl0bGV9PC9zcGFuPjxicj48c3BhbiBjbGFzcz1wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGUtc2Vjb25kX2xpbmU+JHt0aGlzLnRlbXBsYXRlVmFycy5zdWJ0aXRsZX08L3NwYW4+PC9oMT5cblxuXHRcdFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMuYnV0dG9uTGlua31cIj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1idXR0b25cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1zcGFuXCI+JHt0aGlzLnRlbXBsYXRlVmFycy5idXR0b25UZXh0fTwvc3Bhbj5cblx0XHRcdFx0PC9idXR0b24+IFxuXHRcdFx0PC9hPlxuXHRcdFx0PHAgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtcFwiPiR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5QcmVUZXh0fTxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLWFcIj4ke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGV4dH08L2E+PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1vZmZlclwiPlxuXHRcdFx0PGEgaHJlZj0ke3RoaXMudGVtcGxhdGVWYXJzLm9mZmVyTGlua30+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5pbWFnZU1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAzNzVweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMuaW1hZ2VEZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMzc0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1pbWdcIiBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLmltYWdlTGlua31cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGA7XG5cblx0cmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0IGNzc01pbmlmaWVkKCkge1xuXHQgIHJldHVybiBgXG5cdCAgPHN0eWxlPlxuXHQgIC5wYXl3YWxsLWNwdC1pbmxpbmV7bWFyZ2luOiAwIGF1dG8gNDBweDtwYWRkaW5nOjIwcHg7Ym9yZGVyLXJhZGl1czogNHB4O2JvcmRlcjogc29saWQgMXB4ICNkYmRkZTE7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmNTt9LnBheXdhbGwtY3B0LWlubGluZS1vcGFjaXR5e2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsaHNsYSgwLDAlLDEwMCUsMCkgMCwjZmZmIDQwJSwjZmZmIDEwMCUpO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDA7d2lkdGg6IDEwMCU7aGVpZ2h0OiA1OHB4O292ZXJmbG93OiBoaWRkZW47fS5wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGV7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzsgbWFyZ2luLWJvdHRvbTozMHB4O2Rpc3BsYXk6YmxvY2s7Zm9udC1mYW1pbHk6UmFsZXdheTtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDA7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjI7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiMzMjVlOTR9XG5cdCAgLnBheXdhbGwtY3B0LWlubGluZS1idXR0b257Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tYm90dG9tOjMwcHg7ZGlzcGxheTpibG9jazt3aWR0aDoyNTZweDtoZWlnaHQ6NDhweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNTljMDA7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOnNvbGlkIDNweCAjZjU5YzAwO31cblx0ICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjRweCkge1xuXHRcdC5wYXl3YWxsLWNwdC1pbmxpbmUtYnV0dG9uIHsgd2lkdGg6IDM1NnB4OyB9XG5cdCB9ICBcblx0IC5wYXl3YWxsLWNwdC1pbmxpbmUtaW1nIHttYXJnaW46IGF1dG87d2lkdGg6IDgwZW07fS5wYXl3YWxsLWNwdC1pbmxpbmUtc3BhbiB7Zm9udC1mYW1pbHk6T3BlbiBTYW5zO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuMzg7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmY7fS5wYXl3YWxsLWNwdC1pbmxpbmUtcHttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1ib3R0b246MzBweDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OlJhbGV3YXk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6MS4xNDtsZXR0ZXItc3BhY2luZzpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzcwNzA3MDt9LnBheXdhbGwtY3B0LWlubGluZS1he2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzI1ZTk0O30ucGF5d2FsbC1jcHQtaW5saW5lLW9mZmVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87YmFja2dyb3VuZC1jb2xvcjojZmZmO30gXG5cdCAgPC9zdHlsZT5gXG4gIH1cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuLi9IZWxwZXJzJztcbmltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi4vR0EnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsR0FNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XG4gICAgdGhpcy5HQSA9IG5ldyBHQU1vZHVsZSgpO1xuXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnLnBheXdhbGw7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWV0cmljcyA9IHtcbiAgICAgICAgcGF5d2FsbDoge30sXG4gICAgICAgIGZiOiB7XG4gICAgICAgICAgICBwaXhlbDoge31cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnBheXdhbGxUeXBlKCk7XG4gIH1cblxuICBwYXl3YWxsTG9hZCgpIHtcbiAgICBpZighdGhpcy5QaWFuby5pc0RlZmluZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCBfUGlhbm8gPSB0aGlzLlBpYW5vLmNvbnRlbnQ7XG5cbiAgICB0aGlzLkdBLnNldEV2ZW50cyh0aGlzLm1ldHJpY3MucGF5d2FsbC52aWV3TmFtZSwgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSk7XG4gICAgSGVscGVycy5zZXRDb29raWUoX1BpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcbiAgfVxuXG4gIHRyaWdnZXIoZWxlbWVudCkge1xuICAgIGlmKHRoaXMuZGlzYWJsZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCByZXNldFV0cCA9IGVsZW1lbnQuZGF0YXNldC5nYVJlc2V0dXRwIHx8IG51bGw7XG4gICAgY29uc3QgaW1hZ2VUb3AgPSBlbGVtZW50LmRhdGFzZXQuZ2FJbWFnZVBvc2l0aW9uO1xuICAgIGNvbnN0IGxhYmVsID0gKGltYWdlVG9wID09PSAndG9wJykgPyBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbCArIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsIDogZWxlbWVudC5kYXRhc2V0LmdhTGFiZWw7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZXZlbnQ6ICdFdmVudG9HQScsXG4gICAgICBldmVudG9HQUNhdGVnb3JpYTogdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSxcbiAgICAgIGV2ZW50b0dBQWNhbzogZWxlbWVudC5kYXRhc2V0LmdhQWN0aW9uIHx8IGFjdGlvbixcbiAgICAgIGV2ZW50b0dBUm90dWxvOiBsYWJlbCxcbiAgICAgIGV2ZW50b0dBVmFsb3I6IDAsXG4gICAgICBldmVudG9HQUludGVyYWNhbzogZmFsc2UsXG4gICAgfTtcblxuICAgIGlmIChyZXNldFV0cClcbiAgICAgICAgdGhpcy5QaWFuby5yZXNldFV0cCgpO1xuXG4gICAgdGhpcy5zZXREYXRhbGF5ZXIoZGF0YSk7XG4gIH1cblxuICBwYXl3YWxsVHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gKCAodHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwgIT09ICd1bmRlZmluZWQnKSAmJiB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbClcbiAgICAgID8gd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwudG9Mb3dlckNhc2UoKVxuICAgICAgOiAncGF5d2FsbCc7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwudmlld05hbWUgPSAnRXhpYmljYW8gUmVnaXN0ZXInXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgY29tdW0nO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdDYWRhc3RyZS1zZSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4Y2x1c2l2byc6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0V4aWJpY2FvIFJlZ2lzdGVyJ1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ1JlZ2lzdGVyIGV4Y2x1c2l2byc7XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0Fzc2luZSBhZ29yYSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdMb2dpbkV4Y2x1c2l2byc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGF5d2FsbCc6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0JhcnJlaXJhJ1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ0JhcnJlaXJhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1BheXdhbGxFeGNsdXNpdm8nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXREYXRhbGF5ZXIoZGF0YSA9IHt9KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IFBheXdhbGxHQU1vZHVsZSBmcm9tICcuL1BheXdhbGwtZ2EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuLi9Td2cnO1xuaW1wb3J0IEZiTW9kdWxlIGZyb20gJy4uL0ZCJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbENwdCAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG5cdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcblx0dGhpcy5HQSA9IG5ldyBQYXl3YWxsR0FNb2R1bGUoKTtcblx0dGhpcy5TV0cgPSBuZXcgU3dnTW9kdWxlKCk7XG5cdHRoaXMuRkIgPSBuZXcgRmJNb2R1bGUodGhpcy5HQS5tZXRyaWNzLmZiKTtcblxuXHR0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcblx0dGhpcy5kb21haW4gPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJztcdFxuXHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xuXHRcdHRoaXMuaW5pdCgpOyBcblx0fSk7XG5cblx0d2luZG93LlBheXdhbGxDcHQgPSB0aGlzO1xuXG5cdHdpbmRvdy50aW55Q3B0LlBheXdhbGwgPSB7XG5cdFx0ZG9tYWluOiB0aGlzLmRvbWFpbixcblx0XHRHQTogdGhpcy5HQS5tZXRyaWNzLFxuXHR9O1xuICB9XG5cbiAgc2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xuXHRcdFx0dGVtcGxhdGU6ICdkZWZhdWx0Jyxcblx0XHRcdGFzc2V0c1BhdGg6ICcnLFxuXHRcdFx0ZGlzcGxheTogbnVsbCxcblx0XHRcdHByb2R1Y3RDbGFzczogdHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnID8gYHBheXdhbGwtY3B0LSR7bm9tZVByb2R1dG9QaWFub31gIDogJ3BheXdhbGwtY3B0LW9nbG9ibycsXG5cdFx0XHR0aXRsZTogJ0Vzc2UgY29udGXDumRvIMOpIG8gdMOtdHVsby4nLFxuXHRcdFx0dGFyZ2V0Qmxhbms6IHRydWUsXG5cdFx0XHR0b3BNb2JpOiAnJyxcblx0XHRcdHRvcERlc2s6ICcnLFxuXHRcdFx0dG9wTGluazogJycsXG5cdFx0XHRsZWZ0TW9iaTogJycsXG5cdFx0XHRsZWZ0RGVzazogJycsXG5cdFx0XHRsZWZ0TGluazogJycsXG5cdFx0XHRyaWdodE1vYmk6ICcnLFxuXHRcdFx0cmlnaHREZXNrOiAnJyxcblx0XHRcdHJpZ2h0TGluazogJydcblx0XHR9O1xuXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5oaWRlTG9naW5BcmVhID0gZmFsc2U7XG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5sb2dpblRleHQgPSAnRmHDp2EgbG9naW4nO1xuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5QcmVUZXh0ID0gJ0rDoSBwb3NzdWkgY2FkYXN0cm8/Jztcblx0XHRcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9ICh3aW5kb3cuZ2xiUGF5d2FsbCkgPyAgT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVTZXR0aW5ncywgd2luZG93LmdsYlBheXdhbGwpIDogdGVtcGxhdGVTZXR0aW5nczsgXG5cdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSBgJHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblByZVRleHR9IDxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGRhdGEtaXMtbG9naW49XCJ0cnVlXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDIgLSBGYcOnYSBsb2dpblwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJmYWxzZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIgJHt3aW5kb3cuZ2xiUGF5d2FsbC50YXJnZXRCbGFua30gXCI+JHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRleHR9PC9hPmA7XG5cblx0XHRpZih3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhKVxuXHRcdFx0dGhpcy5jbGVhckxvZ2luQXJlYSgpO1xuXG5cdFx0aWYodGhpcy5kZWJ1ZyApIFxuXHRcdFx0dGhpcy5zZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKTtcblx0XHRcblx0XHRjYWxsYmFjaygpO1xuXHR9XG5cblx0Y2xlYXJMb2dpbkFyZWEoKSB7XG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwpIHsgXG5cdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9ICcnO1xuXHRcdH1cblx0fVxuXG5cdHNldERlYnVnVGVtcGxhdGVTZXR0aW5ncygpIHtcblx0XHRsZXQgb2JqID0ge307XG5cdFx0b2JqLnRvcE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTAnO1xuXHRcdG9iai50b3BEZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDR4MTI4Jztcblx0XHRvYmoudG9wTGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDEnO1xuXHRcdG9iai5sZWZ0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XG5cdFx0b2JqLmxlZnREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoubGVmdExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wyJztcblx0XHRvYmoucmlnaHRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcblx0XHRvYmoucmlnaHREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoucmlnaHRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMyc7XG5cblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5nbGJQYXl3YWxsLCBvYmopO1xuXHR9XG4gXG4gIGJvZHlBZGp1c3QoKSB7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nLCAnaW1wb3J0YW50Jyk7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcsICdpbXBvcnRhbnQnKTtcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJzEwMCUnLCAnaW1wb3J0YW50Jyk7XG4gIH1cblxuICBzZXRFbFdyYXBwZXIoKSB7XG5cdHRoaXMuZWxDcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQnKTtcbiAgfVxuXG4gIHJlbW92ZUVsZW1lbnRzKCkge1xuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xuXG5cdGlmKHRoaXMuZWxDcHQpXG5cdFx0dGhpcy5lbENwdC5yZW1vdmUoKTtcblxuXHRjb25zdCBlbFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3RlY3RlZC1jb250ZW50LCAjaW5mb2FydGUtbWFpbi1jb250ZW50Jyk7XG5cblx0ZWxUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHQgIGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xuICB9XG5cbiAgY3JlYXRlVGVtcGxhdGUoKSB7XG5cdHRoaXMuZWxCb2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmJvZHlBZGp1c3QoKTtcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRzKCk7XG5cdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpOyBcblx0dGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHRcbiAgICBcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1xuICAgICAgICB9KTtcblx0fVxuXG5cdHRoaXMuR0EucGF5d2FsbExvYWQoKTtcbiAgfVxuXG4gIGFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKSB7XG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XG5cdHRoaXMuZWxDcHRXcmFwID0gdGhpcy5lbENwdC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQtd3JhcCcpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGNvbnN0IGVsQm9keUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIDQ7XG5cdFx0Y29uc3QgZWxDcHRXcmFwSGVpZ2h0ID0gdGhpcy5lbENwdFdyYXAub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBjdXJyZW50VG9wID0gKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykgXG4gICAgICAgID8gTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yIClcbiAgICAgICAgOiBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKTtcblx0XHRjb25zdCB0b3BXaXRoRnVsbEVsZW1lbnQgPSAoZWxCb2R5SGVpZ2h0IC0gZWxDcHRXcmFwSGVpZ2h0KTtcblxuXHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7Y3VycmVudFRvcH1weGA7XG5cdFx0dGhpcy5lbENwdC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnpJbmRleCA9IDk5OTk5OTk5OTk7XG5cblx0XHR0aGlzLmV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XG5cdFx0dGhpcy5ldnRUb3VjaChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xuXHRcdHRoaXMuYWN0aXZlRXZlbnRzKCk7XG5cblx0XHR0aGlzLkZCLnNldFBpeGVsVHlwZSgpO1xuXHR9LCAxMDAwKTtcbiAgfVxuXG4gIGFjdGl2ZUV2ZW50cygpIHtcblx0Y29uc3QgY2xpY2tUYXJnZXRzID0gdGhpcy5lbENwdFdyYXAucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXG5cdGNsaWNrVGFyZ2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luID0gQm9vbGVhbihlbGVtZW50LmRhdGFzZXQuaXNMb2dpbikgfHwgZmFsc2U7XG5cdFx0XHRjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGZhbHNlIDsgXG5cdFx0XHRjb25zdCBpc1VybFN3ZyA9ICh1cmwpID8gdXJsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ29mZXJ0YXN3ZycpIDogZmFsc2U7XG5cdFx0XHRjb25zdCBub3RCbGFuayA9IGVsZW1lbnQuZGF0YXNldC5ocmVmVGFyZ2V0IHx8IHRydWU7IFxuXHRcdFx0XG5cdFx0XHR0aGlzLkdBLnRyaWdnZXIoZWxlbWVudCk7IFxuXG5cdFx0XHRpZighaXNMb2dpbiAmJiBpc1VybFN3Zylcblx0XHRcdFx0dGhpcy5TV0cuc2V0VXRtcygpOyAgXG5cbiAgICAgICAgICAgIGlmICh1cmwgJiYgIWlzVXJsU3dnKSB7IFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdEJsYW5rID8gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsKSA6IHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cblx0XHR9LmJpbmQodGhpcykpO1xuXHR9KTtcbiAgfVxuXG4gIGV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xuXHRsZXQgbmV3dG9wID0gY3VycmVudFRvcDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnd2hlZWwnLFxuXHRcdGZ1bmN0aW9uKGV2dCkgeyBcblx0XHQgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VG9wIC8gMTAwO1xuXHRcdCAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xuXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA+PSAxKSB7XG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCAtIHN0ZXAgKiBtdWx0aXBsaWVyOyBcblx0XHRcdG5ld3RvcCA9IGVsVG9wIDwgdG9wV2l0aEZ1bGxFbGVtZW50ID8gdG9wV2l0aEZ1bGxFbGVtZW50IDogZWxUb3A7XG4gIFxuXHRcdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuXHRcdCAgfVxuICBcblx0XHQgIGlmIChldnQuZGVsdGFZIDw9IC0xKSB7XG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCArIHN0ZXAgKiBtdWx0aXBsaWVyO1xuXHRcdFx0bmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xuICBcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcblx0XHQgIH1cblx0XHR9LmJpbmQodGhpcylcblx0ICApO1xuICB9XG5cbiAgZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KSB7XG4gICAgbGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XG4gICAgbGV0IHRvdWNoc3RhcnRZID0gMDtcbiAgICBsZXQgdG91Y2hlbmRZID0gMDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgdG91Y2hzdGFydFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xuICAgICAgICB0b3VjaGVuZFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcblxuICAgICAgICBpZiAodG91Y2hlbmRZIDwgdG91Y2hzdGFydFkpIHsgXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnModG91Y2hzdGFydFkpIC0gTWF0aC5hYnModG91Y2hlbmRZKTtcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gZGlmZjsgXG4gICAgICAgICAgICBuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xuXG4gICAgICAgICAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG91Y2hlbmRZID4gdG91Y2hzdGFydFkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaGVuZFkgLSB0b3VjaHN0YXJ0WTtcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wICsgZGlmZjsgXG5cdFx0ICAgIG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcblxuXHRcdCAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG4gICAgICAgIH1cblx0fS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XG5cdGNvbnN0IHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvID0gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnID8gJ2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnIDogJ2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnO1xuXHRjb25zdCB1cmkgPSBsb2NhdGlvbi5ocmVmO1xuXHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcblx0bGV0IHN0ciA9ICcnO1xuXHRsZXQgdXJsUmV0dXJuID0gJyc7XG5cblx0aWYoIXRoaXMuZGVidWcgJiYgdGhpcy5QaWFuby5pc0RlZmluZWQpIHtcblx0XHR1cmxSZXR1cm4gPSBlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxuXHRcdFx0KyAnJnNlcnZpY2VJZD0nICsgc2VydmljZUlkXG5cdFx0XHQrICcmYW1iaWVudGVVdGlsaXphZG89JyArIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vXG5cdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxuXHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxuXHRcdCk7XG5cblx0XHRpZih0eXBlID09PSAncmVnaXN0ZXInKSB7XG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1jYWRhc3Ryby8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4gIGdldCB0ZW1wbGF0ZVZhcnMoKSB7XG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbDtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXG5cdGNvbnN0IHRlbXBsYXRlID0gYFxuXHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdCAke3RoaXMudGVtcGxhdGVWYXJzLnByb2R1Y3RDbGFzc31cIj4gXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkXCI+XG5cdFx0XHQke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfVxuXHRcdDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RvcFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BMaW5rfVwiIGRhdGEtZ2EtaW1hZ2UtcG9zaXRpb249XCJ0b3BcIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgMSAtXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXIgJHt3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhID8gJ2lzLWhpZGUnIDogJyd9XCI+XG5cdFx0ICBcdCR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5UYWd9XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19sZWZ0XCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRMaW5rfVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA0IC0gQmFubmVyIG9mZXJ0YSBlc3F1ZXJkYVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3JpZ2h0XCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TGlua31cIiAgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDUgLSBCYW5uZXIgb2ZlcnRhIGRpcmVpdGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0ICA8L2Rpdj5cblx0ICBgO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcblx0ICByZXR1cm4gYDxzdHlsZT5cblx0ICAucGF5d2FsbC1jcHR7b3BhY2l0eTowO3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDB2dztvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYm94LXNoYWRvdzowIDAgNzBweCAwIHJnYmEoMCwwLDAsLjUpO2JveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZn0ucGF5d2FsbC1jcHQsLnBheXdhbGwtY3B0ICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2V9LnBheXdhbGwtY3B0IGF7Zm9udC13ZWlnaHQ6NzAwO3RleHQtZGVjb3JhdGlvbjpub25lfS5wYXl3YWxsLWNwdCBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnBheXdhbGwtY3B0IC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0IGF7Y29sb3I6IzAwMH0ucGF5d2FsbC1jcHQtb2dsb2JvIC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0LW9nbG9ibyBhe2NvbG9yOiMzMjVlOTR9LnBheXdhbGwtY3B0LXdyYXB7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWJvdHRvbToyMHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsucGF5d2FsbC1jcHQtd3JhcHstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfX0ucGF5d2FsbC1jcHQtd3JhcCBpbWd7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b30ucGF5d2FsbC1jcHQtd3JhcF9fdG9we3BhZGRpbmctdG9wOjIwcHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwIDA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwfS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlcnt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwO2NvbG9yOiM3Njc2NzY7Zm9udC1zaXplOjE2cHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyLmlzLWhpZGV7cGFkZGluZy1ib3R0b206MH1cblx0ICA8L3N0eWxlPmA7XG4gIH1cblxuICBpbml0KCkgeyBcblx0ICBjb25zdCBkZWxheVRpbWVyID0gKHdpbmRvdy5nbGJQYXl3YWxsICYmIHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIpID8gd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lciAqIDEwMDAgOiAwO1xuXG5cdHNldFRpbWVvdXQoKCkgPT57XG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xuXHR9LCBkZWxheVRpbWVyKTtcbiAgfVxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5pbXBvcnQgVGlueU1vZHVsZSBmcm9tICcuL1RpbnknO1xuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4vR0EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuL1N3Zyc7XG5pbXBvcnQgUGF5d2FsbENwdCBmcm9tICcuL2NwbnQtcGF5d2FsbC9QYXl3YWxsJztcbmltcG9ydCBQYXl3YWxsQ3B0SW5saW5lIGZyb20gJy4vY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsJztcblxuY29uc3QgVGlueSA9IG5ldyBUaW55TW9kdWxlKCk7XG5jb25zdCBHQSA9IG5ldyBHQU1vZHVsZSgpO1xuXG5HQS5zZXRHbG9iYWxWYXJzKCk7XG5cblBpYW5vLnR5cGVQYXl3YWxsID0gbnVsbDtcblBpYW5vLnZhcmlhdmVpcyA9IHtcblx0YW1iaWVudGVzQWNlaXRvczogXCJpbnQscWx0LHByZFwiLFxuXHRzdGF0dXNIdHRwT2J0ZXJBdXRvcml6YWNhb0FjZXNzbzogXCI0MDAsNDA0LDQwNiw1MDAsNTAyLDUwMyw1MDRcIixcblx0c3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogXCI0MDAsNDA0LDUwMCw1MDIsNTAzLDUwNFwiLFxuXHRpc0NhbGxiYWNrTWV0dGVyRXhwaXJlZDogZmFsc2UsXG5cdGNvbnN0YW50ZToge1xuXHRcdGNvb2tpZToge1xuXHRcdFx0R0NPTTogJ0dMQklEJyxcblx0XHRcdFVUUDogJ191dHAnLFxuXHRcdFx0UlRJRVg6ICdfcnRpZXgnLFxuXHRcdFx0QU1CSUVOVEU6ICdhbWJpZW50ZVBpYW5vJyxcblx0XHRcdFNBVkVfU1VCU0NSSVBUSU9OOiAnc2F2ZVN1YnNjcmlwdGlvbkNvb2tpZScsXG5cdFx0XHRDUkVBVEVEX0dMT0JPSUQ6ICdjcmVhdGVkR2xvYm9JZCcsXG5cdFx0XHRHTE9CT0lEX01FU1NBR0U6ICdnbG9ib0lkTWVzc2FnZSdcblx0XHR9LFxuXHRcdG1ldHJpY2FzOiB7XG5cdFx0XHRFVkVOVE9fU0VNX0FDQU86ICdzZW0gYWNhbycsXG5cdFx0XHRFUlJPOiAnRXJybydcblx0XHR9LFxuXHRcdGtydXg6IHtcblx0XHRcdFNFR01FTlRBQ09FUzogJ2t4Z2xvYm9fc2VncycsXG5cdFx0XHRLUlVYTElHQURPOiAna3J1eC1saWdhZG8nXG5cdFx0fSxcblx0XHR1dGlsOiB7XG5cdFx0XHRJUDogXCIxMjcuMC4wLjFcIixcblx0XHRcdEFNQklFTlRFOiBcImFtYmllbnRlLWRlc2VqYWRvXCIsXG5cdFx0XHRERUJVRzogXCJkZWJ1Zy1waWFub1wiXG5cdFx0fVxuXHR9LFxuXHRpc0NvbnRldWRvRXhjbHVzaXZvOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LmNvbnRldWRvRXhjbHVzaXZvID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRnZXRBbWJpZW50ZVBpYW5vOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8udmFyaWF2ZWlzLmFtYmllbnRlc0FjZWl0b3MuaW5kZXhPZihQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSkgPiAtMSkge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUsIFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpLCAxKTtcblx0XHRcdHJldHVybiBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKTtcblx0XHR9XG5cdFx0aWYgKFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpID09ICdmYWxzZScpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBcIlwiLCAtMSk7XG5cdFx0fVxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSkpIHtcblx0XHRcdHJldHVybiBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmFtYmllbnRlc0FjZWl0b3MuaW5kZXhPZih3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubykgPiAtMSA/IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vIDogJ3ByZCc7XG5cdH0sXG5cdGdldFRpcG9Db250ZXVkb1BpYW5vOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LnRpcG9Db250ZXVkb1BpYW5vO1xuXHR9LFxuXHRleGVjdXRvdVBhZ2V2aWV3OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LmV4ZWN1dG91UGFnZXZpZXcgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldE5vbWVQcm9kdXRvOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXdpbmRvdy5ub21lUHJvZHV0b1BpYW5vKXtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiTm9tZSBkbyBwcm9kdXRvIG7Do28gZGVmaW5pZG8uXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vO1xuXHR9LFxuXHRnZXRTZXJ2aWNvSWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwcm9kdWN0c09iamVjdCA9IFBpYW5vLnZhcmlhdmVpcy5nZXRQcm9kdWN0c09iamVjdCgpO1xuXG5cdFx0dmFyIGlkID0gcHJvZHVjdHNPYmplY3RbUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldWydpZCddO1xuXG5cdFx0aWYgKCFpZCl7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignU2VydmljZUlEIG7Do28gZGVmaW5pZG8uJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZiArXG5cdFx0XHRcdCcgbm9tZVByb2R1dG86ICcgKyBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSApO1xuXG5cdFx0XHRyZXR1cm4gJzAwMDAnO1xuXHRcdH1cblxuXHRcdHJldHVybiBpZDtcblx0fSxcblx0Z2V0Q29kaWdvUHJvZHV0bzogZnVuY3Rpb24oKXtcblx0XHR2YXIgbm9tZVByb2R1dG8gPSBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKTtcblxuXHRcdHZhciBwcm9kdWN0c09iamVjdCA9IFBpYW5vLnZhcmlhdmVpcy5nZXRQcm9kdWN0c09iamVjdCgpO1xuXG5cdFx0dmFyIGNvZFByb2QgPSBwcm9kdWN0c09iamVjdFtQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKV1bJ2NvZF9wcm9kJ107XG5cblx0XHRpZiAoIWNvZFByb2Qpe1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBbyBvYnRlciBjw7NkaWdvIGRvIHByb2R1dG9cIiwgbm9tZVByb2R1dG8gKyBcIiAtIFwiICsgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0cmV0dXJuICdlcnJvcic7XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gY29kUHJvZDtcblx0fSxcblx0Z2V0UHJvZHVjdHNPYmplY3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQnb2dsb2JvJzoge1xuXHRcdFx0XHQnaWQnOiAnMzk4MScsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdPRzAzJ1xuXHRcdFx0fSxcblx0XHRcdCdibG9ncyc6IHtcblx0XHRcdFx0J2lkJzogJzM5ODEnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnT0cwMydcblx0XHRcdH0sXG5cdFx0XHQna29ndXQnOiB7XG5cdFx0XHRcdCdpZCc6ICczOTgxJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ09HMDMnXG5cdFx0XHR9LFxuXHRcdFx0J2Jsb2dBbmFsaXRpY28nOiB7XG5cdFx0XHRcdCdpZCc6ICczOTgxJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ09HMDQnXG5cdFx0XHR9LFxuXHRcdFx0J2FjZXJ2byc6IHtcblx0XHRcdFx0J2lkJzogJzM5ODEnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnT0cwNCdcblx0XHRcdH0sXG5cdFx0XHQnam9ybmFsZGlnaXRhbCc6IHtcblx0XHRcdFx0J2lkJzogJzM5ODEnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnT0cwMSdcblx0XHRcdH0sXG5cdFx0XHQnbW9uZXQnOiB7XG5cdFx0XHRcdCdpZCc6ICc2NjE4Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ21vbmV0J1xuXHRcdFx0fSxcblx0XHRcdCdhdXRvLWVzcG9ydGUnOiB7XG5cdFx0XHRcdCdpZCc6ICc2NjEzJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ2F1dG8tZXNwb3J0ZSdcblx0XHRcdH0sXG5cdFx0XHQnZXBvY2EnOiB7XG5cdFx0XHRcdCdpZCc6ICc2NjEyJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ2Vwb2NhJ1xuXHRcdFx0fSxcblx0XHRcdCd2b2d1ZSc6IHtcblx0XHRcdFx0J2lkJzogJzY2MTQnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAndm9ndWUnXG5cdFx0XHR9LFxuXHRcdFx0J2dsYW1vdXInOiB7XG5cdFx0XHRcdCdpZCc6ICc2NjE2Jyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ2dsYW1vdXInXG5cdFx0XHR9LFxuXHRcdFx0J2Nhc2Etdm9ndWUnOiB7XG5cdFx0XHRcdCdpZCc6ICc2NjEwJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ2Nhc2Etdm9ndWUnXG5cdFx0XHR9LFxuXHRcdFx0J21hcmllLWNsYWlyZSc6IHtcblx0XHRcdFx0J2lkJzogJzY2MDknLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnbWFyaWUtY2xhaXJlJ1xuXHRcdFx0fSxcblx0XHRcdCdnbG9iby1ydXJhbCc6IHtcblx0XHRcdFx0J2lkJzogJzY2MjEnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnZ2xvYm8tcnVyYWwnXG5cdFx0XHR9LFxuXHRcdFx0J2dxJzoge1xuXHRcdFx0XHQnaWQnOiAnNjYyMicsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdncSdcblx0XHRcdH0sXG5cdFx0XHQnY3Jlc2Nlcic6IHtcblx0XHRcdFx0J2lkJzogJzY2MjAnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnY3Jlc2Nlcidcblx0XHRcdH0sXG5cdFx0XHQnZ2FsaWxldSc6IHtcblx0XHRcdFx0J2lkJzogJzY2MTcnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAnZ2FsaWxldSdcblx0XHRcdH0sXG5cdFx0XHQnZXBvY2EtbmVnb2Npb3MnOiB7XG5cdFx0XHRcdCdpZCc6ICc2NjExJyxcblx0XHRcdFx0J2NvZF9wcm9kJzogJ2Vwb2NhLW5lZ29jaW9zJ1xuXHRcdFx0fSxcblx0XHRcdCdjYXNhLWUtamFyZGltJzoge1xuXHRcdFx0XHQnaWQnOiAnNjYxOScsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICdjYXNhLWphcmRpbSdcblx0XHRcdH0sXG5cdFx0XHQncXVlbS1hY29udGVjZSc6IHtcblx0XHRcdFx0J2lkJzogJzY2MDgnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAncXVlbSdcblx0XHRcdH0sXG5cdFx0XHQncGVnbic6IHtcblx0XHRcdFx0J2lkJzogJzY2MTUnLFxuXHRcdFx0XHQnY29kX3Byb2QnOiAncGVxdWVuYXMtZW1wcmVzYXMnXG5cdFx0XHR9LFxuXHRcdFx0J3ZhbG9yJzoge1xuXHRcdFx0XHQnaWQnOiAnNjY2OCcsXG5cdFx0XHRcdCdjb2RfcHJvZCc6ICd2YWxvcmRpZ2l0YWwnXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5qYW5lbGFBbm9uaW1hID0ge1xuXHRyZXRyeSA6IGZ1bmN0aW9uKGlzRG9uZSwgbmV4dCkge1xuXHRcdHZhciBjdXJyZW50X3RyaWFsID0gMCwgbWF4X3JldHJ5ID0gNTAsIGludGVydmFsID0gMTAsIGlzX3RpbWVvdXQgPSBmYWxzZTtcblx0XHR2YXIgaWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKGlzRG9uZSgpKSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGN1cnJlbnRfdHJpYWwrKyA+IG1heF9yZXRyeSkge1xuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcblx0XHRcdFx0XHRpc190aW1lb3V0ID0gdHJ1ZTtcblx0XHRcdFx0XHRuZXh0KGlzX3RpbWVvdXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0MTBcblx0XHQpO1xuXHR9LFxuXHRpc0lFMTBPckxhdGVyIDogZnVuY3Rpb24odXNlcl9hZ2VudCkge1xuXHRcdGxldCB1YSA9IHVzZXJfYWdlbnQudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgbWF0Y2ggPSAvKD86bXNpZXxydjopXFxzPyhbXFxkXFwuXSspLy5leGVjKHVhKTtcblxuXHRcdGlmICh1YS5pbmRleE9mKCdtc2llJykgPT09IDAgJiYgdWEuaW5kZXhPZigndHJpZGVudCcpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChtYXRjaCAmJiBwYXJzZUludChtYXRjaFsxXSwgMTApID49IDEwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZXRlY3RQcml2YXRlTW9kZSA6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGlzX3ByaXZhdGU7XG5cblx0XHRpZiAod2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKSB7XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXG5cdFx0XHRcdHdpbmRvdy5URU1QT1JBUlksIDEsXG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAod2luZG93LmluZGV4ZWREQiAmJiAvRmlyZWZveC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHZhciBkYjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRiID0gd2luZG93LmluZGV4ZWREQi5vcGVuKCd0ZXN0Jyk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcblx0XHRcdFx0XHRmdW5jdGlvbiBpc0RvbmUoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGIucmVhZHlTdGF0ZSA9PT0gJ2RvbmUnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZnVuY3Rpb24gbmV4dChpc190aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWlzX3RpbWVvdXQpIHtcblx0XHRcdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGRiLnJlc3VsdCA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChQaWFuby5qYW5lbGFBbm9uaW1hLmlzSUUxME9yTGF0ZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIXdpbmRvdy5pbmRleGVkREIpIHtcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UgJiYgL1NhZmFyaS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIDEpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZXN0Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcblx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBpc19wcml2YXRlICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcblx0XHRcdFx0Y2FsbGJhY2soaXNfcHJpdmF0ZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufTtcblxuUGlhbm8ua3J1eCA9IHtcblx0dGVtOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRsaWdhZG86IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETztcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJyAmJiB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyAhPSBcInByZFwiKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJyB8fCB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PSBcInByZFwiKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LktSVVhMSUdBRE8pID09IFwiZmFsc2VcIikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0b2J0ZW1TZWdtZW50YWNhbzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLmtydXgudGVtKCkgJiYgUGlhbm8ua3J1eC5saWdhZG8oKSkge1xuXHRcdFx0dmFyIHNlZ21lbnRhY29lcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKS5zcGxpdCgnLCcpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50YWNvZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBzZWdtZW50YWNvZXNbaV0sIHNlZ21lbnRhY29lc1tpXV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8ucmVnaW9uYWxpemFjYW8gPSB7XG5cdGdldFJlZ2lvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGtydXhHZW8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna3hnbG9ib19nZW8nKTtcblx0XHRpZiAoa3J1eEdlbykge1xuXHRcdFx0a3J1eEdlby5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGxldCBkYXRhID0gaXRlbS5zcGxpdCgnPScpO1xuXHRcdFx0XHRsZXQga2V5ID0gZGF0YVswXTtcblx0XHRcdFx0bGV0IHZhbHVlID0gZGF0YVsxXTtcblx0XHRcdFx0aWYgKGtleSA9PT0gJ3JlZ2lvbicpIHtcblx0XHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwicmVnaW9uXCIsIHZhbHVlXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufTtcblxuUGlhbm8ubWV0cmljYXMgPSB7XG5cdGVudmlhRXZlbnRvc0dBOiBmdW5jdGlvbihfR0FBY2FvLCBfR0FSb3R1bG8pIHsgLy9UT0RPOiBhcnF1aXZvIHRpbnlwYXNzLmpzLCBpbnNlcmlkbyBwZWxhIFBpYW5vLCB1dGlsaXphIGVzc2EgZnVuw6fDo29cblx0XHRjb25zdCBpc1Byb2R1Y3RWYWxvciA9ICh0eXBlb2Ygd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID09PSAndmFsb3InKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBpZiAoaXNQcm9kdWN0VmFsb3IpXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdQaWFubycsIF9HQUFjYW8sIF9HQVJvdHVsbywgLHRydWVdKTtcblx0XHRlbHNlXG5cdFx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8nLCAnZXZlbnRvR0FBY2FvJzogX0dBQWNhbywgJ2V2ZW50b0dBUm90dWxvJzpfR0FSb3R1bG99KTtcblx0fSxcblxuXHRtb250YVJvdHVsb0dBOiBmdW5jdGlvbigpIHsgLy9UT0RPOiBhdCBQaWFubyBhcyBzZXRFeHBlcmllbmNlKCkgfCBDaGVjayBvbiBvbGQgdGlueSBiZWZvcmUgcmVtb3ZlXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gOiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubm9tZUV4cGVyaWVuY2lhKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyB3aW5kb3cubm9tZUV4cGVyaWVuY2lhICsgXCIgLSBcIiArIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcblx0XHR9XG5cdFx0cmV0dXJuIFwiIFwiO1xuXHR9LFxuXHRzZXRMaW1pdGVDb250YWdlbTogZnVuY3Rpb24obWV0cmljYXMpIHtcblx0XHR3aW5kb3cuX0dBTGltaXRlID0gXCItXCI7XG5cdFx0d2luZG93Ll9HQUNvbnRhZ2VtID0gXCItXCI7XG5cblx0XHRpZighbWV0cmljYXMpIHJldHVybjtcblxuXHRcdHdpbmRvdy5fR0FDb250YWdlbSA9IFwiXCIgKyBtZXRyaWNhcy52aWV3cztcblxuXHRcdGlmICh3aW5kb3cuX0dBQ29udGFnZW0ubGVuZ3RoID09IDEpIHtcblx0XHRcdHdpbmRvdy5fR0FDb250YWdlbSA9IFwiMFwiICsgd2luZG93Ll9HQUNvbnRhZ2VtO1xuXHRcdH1cblx0XHR3aW5kb3cuX0dBTGltaXRlID0gbWV0cmljYXMubm9tZUV4cGVyaWVuY2lhICtcIiA6IFwiKyBtZXRyaWNhcy5tYXhWaWV3cztcblx0fSxcblx0aWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyOiBmdW5jdGlvbihyZWdyYXMpIHtcblx0XHR2YXIgcGFzc2FnZW0gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLm1ldHJpY2FzLkVWRU5UT19TRU1fQUNBTztcblx0XHRpZihIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIHtcblx0XHRcdHBhc3NhZ2VtID0gcmVncmFzLmZsdXhvLmluZGV4T2YoXCJoYXJkd2FsbFwiKSAhPSAtMSA/ICdyZWdpc3Rlci1oYXJkd2FsbC1wYXNzb3UnIDogJ3JlZ2lzdGVyLWNvbnRhZ2VtLXBhc3NvdSc7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFzc2FnZW07XG5cdH0sXG5cdGV4ZWN1dGFBcG9zUGFnZXZpZXc6IGZ1bmN0aW9uKGV4cGlyb3UpIHtcblx0XHRpZiAoIVBpYW5vLnZhcmlhdmVpcy5leGVjdXRvdVBhZ2V2aWV3KCkpIHtcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55LmZsdXhvID0gd2luZG93LnRwQ29udGV4dCA/IHRwQ29udGV4dC50b0xvd2VyQ2FzZSgpIDogJy0nO1xuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgOiAnJztcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldExpbWl0ZUNvbnRhZ2VtKHdpbmRvdy5yZWdyYXNUaW55KTtcblx0XHRcdGlmIChleHBpcm91ID09IGZhbHNlKSBHQS5zZXRFdmVudHMoUGlhbm8ubWV0cmljYXMuaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyKHdpbmRvdy5yZWdyYXNUaW55KSwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRcdGV4ZWN1dG91UGFnZXZpZXcgPSB0cnVlO1xuXHRcdH1cblx0fSxcblx0c2V0YVZhcmlhdmVpczogZnVuY3Rpb24oaWRMb2dpbiwgdGlwb0xvZ2luLCBhc3NpbmF0dXJhTG9nYWRhKXtcblx0XHRQYXl3YWxsQW5hbHl0aWNzLmlkTG9naW5Bc3NpbmFudGUgPSBpZExvZ2luO1xuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLnRpcG9Mb2dpbkFzc2luYW50ZSA9IHRpcG9Mb2dpbjtcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy5hc3NpbmF0dXJhTG9nYWRhID0gYXNzaW5hdHVyYUxvZ2FkYTtcblx0fVxufTtcblxuXG5QaWFuby5iYW5uZXIgPSB7XG5cdG1vc3RyYXJGb290ZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL25vdm8tYmFubmVyLWZvb3Rlci5qc1wiKTtcblx0fSxcblx0bW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyQXZhdGFySGVhZGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2F2YXRhci1oZWFkZXItcGlhbm8uanNcIik7XG5cdH0sXG5cdGJvdHRvbUZpeGVkOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xuXHRcdHdpbmRvdy5nbGJCYW5uZXJCb3R0b20gPSBwYXJhbXM7XG5cblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3N0eWxlcy9iYW5uZXItYm90dG9tLWZpeGVkLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3NjcmlwdHMvYmFubmVyLWJvdHRvbS1maXhlZC5qc1wiKTtcblx0fSxcblx0bW9zdHJhclNXRzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgY3NzID0gYDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc3R5bGVzL3N0eWxlLmNzcyc+YDtcblx0XHRjb25zdCBzY3JpcHRKcyA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvc3dnL3YxL3NjcmlwdC9hbnVuY2lvLXN3Zy5qc2A7XG5cblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhjc3MpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShzY3JpcHRKcyk7XG5cdH0sXG5cdG1vc3RyYXJIaWdobGlnaHRTYWxlOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3NjcmlwdHMvaGlnaGxpZ2h0LXNhbGUuanNcIik7XG5cdH0sXG5cdG1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3ZhbG9yLXN1YnNjcmliZS1idXR0b24vXCIrdmVyc2FvK1wiL3NjcmlwdHMvc3Vic2NyaWJlLWJ1dHRvbi5qc1wiKTtcblx0fVxuXG59O1xuXG5QaWFuby5yZWdpc3RlciA9IHtcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92YS10ZWxhLXJlZ2lzdGVyLmpzXCIpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xuXHR9XG59O1xuXG5QaWFuby5oZWxwZXIgPSB7XG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24oKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfNjVkMTkzMGEwYmRhNDc2YmE4ZDNjMjVjNTM3MWVjM2YvcGlhbm8vaGVscGVyL3JlZ2lzdGVyLmpzXCIpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xuXHR9XG59O1xuXG5QaWFuby5wYXl3YWxsID0ge1xuXHRyZWRpcmVjaW9uYXJCYXJyZWlyYTogZnVuY3Rpb24odXJsKSB7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQmFycmVpcmFcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO30sIDEwMDApO1xuXHR9LFxuXHRzaG93OiBmdW5jdGlvbih0eXBlUGF5d2FsbCA9IG51bGwpIHtcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHR5cGVQYXl3YWxsO1xuXG5cdFx0dHJ5IHtcblx0XHRcdG5ldyBQYXl3YWxsQ3B0KCk7XG5cdFx0XHR3aW5kb3cuaGFzUGF5d2FsbCA9IHRydWU7XG5cdFx0fVxuXHRcdGNhdGNoKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1BheXdhbGwgLSBFcnJvciBvbiBsb2FkJylcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xuXHRcdH1cblx0fSxcblx0YW5hbHl0aWM6IGZ1bmN0aW9uICgpIHtcblx0XHR0cnkge1xuXHRcdFx0bmV3IFBheXdhbGxDcHRJbmxpbmUoKTtcblx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbEFuYWx5dGljIC0gRXJyb3Igb24gbG9hZCcsIGVycilcblx0XHR9XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGFuYWx5dGljYWxVbmJsb2NrZWRGb3JQaWFubygpIHtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhbmFseXRpY2FsVW5ibG9ja2VkRm9yUGlhbm8nKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gYW5hbHl0aWNhbEJsb2NrZWRGb3JQaWFubygpIHtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhbmFseXRpY2FsQmxvY2tlZEZvclBpYW5vJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGFuYWx5dGljYWxQb3N0SXNPcGVuZWQoKSB7XG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnYW5hbHl0aWNhbFBvc3RJc09wZW5lZCcpXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBhbmFseXRpY2FsUG9zdElzTG9hZGluZygpIHtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhbmFseXRpY2FsUG9zdElzTG9hZGluZycpXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0V4cGVyaWVuY2VzSGFzQ2hhbmdlKCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRsZXQgY291bnQgPSAwOyBcblx0XHRcblx0XHRsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZih3aW5kb3cudHAgIT09ICd1bmRlZmluZWQnXG5cdFx0XHQmJiB3aW5kb3cudHAuZXhwZXJpZW5jZVxuXHRcdFx0JiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKVxuXHRcdFx0JiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHRcblx0XHRcdCYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcblx0XHRcdHtcblx0XHRcdFx0Y29uc3QgZXhwZXJpZW5jZXMgPSB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHNcblx0XHRcdFx0Y29uc3QgZXhwZXJpZW5jZXNDbG9uZSA9IEFycmF5LmZyb20od2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzKVxuXHRcdFx0XHRjb25zdCBleHBlcmllbmNlc0NoYW5nZWQgPSBPYmplY3QuaXMoSlNPTi5zdHJpbmdpZnkoZXhwZXJpZW5jZXMpLCBKU09OLnN0cmluZ2lmeShleHBlcmllbmNlc0Nsb25lKSlcblxuXHRcdFx0XHRpZihleHBlcmllbmNlc0NoYW5nZWQpIHtcblx0XHRcdFx0XHRleHBlcmllbmNlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0aWYoaXRlbS5ldmVudFR5cGUgPT09ICdydW5KcycpIHtcblx0XHRcdFx0XHRcdFx0aWYoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0ICE9PSAndW5kZWZpbmVkJyAmJiAoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0LmluY2x1ZGVzKCdwYXl3YWxsLmFuYWx5dGljJykgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoY291bnQgPT09IDEwKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0fVxuXHRcdH0sIDEwMCk7XG5cdH0pO1xufVxuXG5QaWFuby5jaGVja1BpYW5vQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgY291bnQgPSAwXG5cblx0bGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdGlmKHdpbmRvdy50cCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZVxuICAgICAgICAgICYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KClcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdFxuICAgICAgICAgICYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcblx0ICAgICB7XG5cdFx0XHRQaWFuby5jaGVja1BheXdhbGwod2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzKVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZihjb3VudCA9PT0gMTApIHtcblx0XHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKClcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0XHRcdH1cblxuXHRcdFx0Y291bnQrK1xuXHRcdH1cblxuXHQgIH0sIDUwMCk7XG5cbn07IFxuXG5QaWFuby5jaGVja1BheXdhbGwgPSBmdW5jdGlvbihQaWFub1Jlc3VsdEV2ZW50cyA9IG51bGwpIHtcbiAgIGxldCBoYXNSdW5Kc1dpdGhQYXl3YWxsID0gZmFsc2VcblxuXHRpZihQaWFub1Jlc3VsdEV2ZW50cykge1xuICAgICAgICBQaWFub1Jlc3VsdEV2ZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS5ldmVudFR5cGUgPT09ICdydW5KcycpIHtcblx0XHRcdFx0aWYoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0ICE9PSAndW5kZWZpbmVkJyAmJiAoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0LmluY2x1ZGVzKCdwYXl3YWxsLnNob3cnKVxuXHRcdFx0XHR8fCBpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQuaW5jbHVkZXMoJ3BheXdhbGwuYW5hbHl0aWMnKVxuXHRcdFx0XHR8fCBpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQuaW5jbHVkZXMoJ21vc3RyYXJCYXJyZWlyYScpICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZVxuXHRcdFx0XHRcdGhhc1J1bkpzV2l0aFBheXdhbGwgPSB0cnVlXG5cdFx0XHRcdFx0UGlhbm8udHJpZ2dlclBheXdhbGxPcGVuZWQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZighaGFzUnVuSnNXaXRoUGF5d2FsbClcbiAgICAgICAgICAgUGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKClcbiAgICB9XG5cbn07XG5cblBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZyA9IGZ1bmN0aW9uKCkge1xuXHR3aW5kb3cuaGFzUGF5d2FsbCA9IGZhbHNlO1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsZWFyRm9yQWRzJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5QaWFuby50cmlnZ2VyUGF5d2FsbE9wZW5lZCA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2Jsb2NrRm9yQWRzJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5QaWFuby5yZWdpc3RlclBheXdhbGwgPSB7XG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24odmVyc2FvID0gbnVsbCwgdGlwbyA9IG51bGwpIHtcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHRpcG87XG5cblx0XHRpZighdmVyc2FvIHx8ICFQaWFuby50eXBlUGF5d2FsbCApIHtcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFxuXHRcdFx0XHRcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8uanNcIixcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgIT09IDIwMCkge1xuXHRcdFx0XHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0aWYoUGlhbm8udHlwZVBheXdhbGwgPT09ICdyZWdpc3RlcicgfHwgUGlhbm8udHlwZVBheXdhbGwgPT09ICdleGNsdXNpdm8nICkge1xuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59O1xuXG5QaWFuby5jb211bmljYWRvID0ge1xuXHRtb3N0cmFySW5mb3JtYWNhbzogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2NvbXVuaWNhY2FvLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2NvbXVuaWNhY2FvLXBpYW5vLmpzXCIpO1xuXHR9XG59O1xuXG5QaWFuby5hZGJsb2NrID0ge1xuXHRtb3N0cmFyQWRCbG9jazogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcblxuXHRcdHBhcmFtcy5hc3NldHNQYXRoID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L2A7XG5cblx0XHR3aW5kb3cuZ2xiQWRibG9jayA9IHBhcmFtcztcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zY3JpcHRzL2FkYmxvY2stcGlhbm8uanNcIik7XG5cdH1cbn07XG5cblBpYW5vLmJsb3F1ZWlvcyA9IHtcblx0bGliZXJhckVzYzogZnVuY3Rpb24oKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jsb3F1ZWlvL2xpYmVyYVRlY2xhZG8uanNcIik7XG5cdH0sXG5cdGJsb3F1ZWlhVmlld01vZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vYmxvcXVlaWFWaWV3bW9kZS5qc1wiKTtcbiAgICB9XG59O1xuXG5QaWFuby5wYXJjZWlybyA9IHtcblx0bW9zdHJhRm9vdGVyUGFyY2Vpcm86IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvZm9vdGVyLXBhcmNlaXJvcy1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uaW5hZGltcGxlbnRlID0ge1xuXHRnZXRMaW5rQXNzaW5hdHVyYTogZnVuY3Rpb24obGluaykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluay5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGxpbmtbaV0ucmVsID09ICdhc3NpbmF0dXJhJykgcmV0dXJuIGxpbmtbaV0uaHJlZjtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5QaWFuby54bWxIdHRwUmVxdWVzdCA9IHtcblx0Z2VyYVNjcmlwdE5hUGFnaW5hOiBmdW5jdGlvbih1cmxTY3JpcHQsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybFNjcmlwdCk7XG5cdFx0eGhyLnNlbmQoKTtcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih0aGlzLnJlYWR5U3RhdGUgPT09IDQpe1xuXHRcdFx0XHRpZih0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0XHR2YXIgYXBwZW5kRGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRcdFx0XHRhcHBlbmREZVNjcmlwdC5pbm5lckhUTUwgPSByZXNwb3N0YTtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcGVuZERlU2NyaXB0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBuYSBmdW7Dp8OjbyBnZXJhciBzY3JpcHQgbmEgcMOhZ2luYS4nLCAndXJsOiAnICsgdXJsU2NyaXB0XG5cdFx0XHRcdFx0XHQrICcgU3RhdHVzRXJybzogJyArIHRoaXMuc3RhdHVzXG5cdFx0XHRcdFx0XHQrICcgU3RhY2s6ICcgKyB0aGlzLnN0YXR1c1RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGNhbGxiYWNrKVxuXHRcdFx0XHRjYWxsYmFjayh4aHIpO1xuXHRcdH07XG5cdH0sXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBmdW5jdGlvbihocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlLCBmYWxzZSk7XG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZCgpO1xuXG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XG5cdFx0XHRpZih4aHIuc3RhdHVzID09IDIwMCl7XG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xuXHRcdFx0XHR2YXIgc2l0dWFjYW9QYWdhbWVudG8gPSByZXNwSnNvbi5zaXR1YWNhb1BhZ2FtZW50by50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwic2l0dWFjYW9QYWdhbWVudG9cIiwgc2l0dWFjYW9QYWdhbWVudG9dKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9IDAgJiYgUGlhbm8udmFyaWF2ZWlzLnN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUuaW5kZXhPZih4aHIuc3RhdHVzKSA+IC0xKSB7XG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCBcIlN0YXR1cyBEZXNjb25oZWNpZG9cIiArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc286IGZ1bmN0aW9uKGdsYmlkKSB7XG5cblx0XHR2YXIgY29kaWdvUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCk7XG5cdFx0aWYoY29kaWdvUHJvZHV0byA9PSAnZXJyb3InKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ0b2tlbi1hdXRlbnRpY2FjYW9cIjogZ2xiaWQsIFwiaXBVc3VhcmlvXCI6IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5JUCwgXCJjb2RpZ29Qcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG99KTtcblxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxWZXJpZmljYUxlaXRvciwgZmFsc2UpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZChkYXRhKTtcblxuXHRcdGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApe1xuXHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHR2YXIgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3Bvc3RhKTtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gZmFsc2UsIHJlc3Bvc3RhRGVNb3Rpdm8gPSAnJywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSAnJztcblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5tb3Rpdm8gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdHJlc3Bvc3RhRGVNb3Rpdm8gPSByZXNwSnNvbi5tb3Rpdm8udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLnRlbVRlcm1vRGVVc28gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gcmVzcEpzb24udGVtVGVybW9EZVVzbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLmxpbmsgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gUGlhbm8uaW5hZGltcGxlbnRlLmdldExpbmtBc3NpbmF0dXJhKHJlc3BKc29uLmxpbmspO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBpc0F1dG9yaXphZG8gPSBQaWFuby5hdXRlbnRpY2FjYW8uaXNBdXRvcml6YWRvKHJlc3Bvc3RhRGVUZXJtb0RlVXNvLCByZXNwb3N0YURlTW90aXZvLCByZXNwSnNvbi5hdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8ocmVzcEpzb24uYXV0b3JpemFkbywgcmVzcG9zdGFEZU1vdGl2bywgaXNBdXRvcml6YWRvLCByZXNwb3N0YURlVGVybW9EZVVzbyk7XG5cdFx0XHRcdHZhciBfanNvbkxlaXRvciA9IHtcblx0XHRcdFx0XHRcdFwiYXV0b3JpemFkb1wiIDogcmVzcEpzb24uYXV0b3JpemFkbyxcblx0XHRcdFx0XHRcdFwibW90aXZvXCI6IHJlc3Bvc3RhRGVNb3Rpdm8sXG5cdFx0XHRcdFx0XHRcImxvZ2Fkb1wiOiBpc0F1dG9yaXphZG8sXG5cdFx0XHRcdFx0XHRcInRlbVRlcm1vRGVVc29cIjogcmVzcG9zdGFEZVRlcm1vRGVVc28sXG5cdFx0XHRcdFx0XHRcImdsYmlkXCI6IGdsYmlkLFxuXHRcdFx0XHRcdFx0XCJwcm9kdXRvXCI6IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpLFxuXHRcdFx0XHRcdFx0XCJjb2RQcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG8sXG5cdFx0XHRcdFx0XHRcInV1aWRcIjogcmVzcEpzb24udXN1YXJpb0lkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0X2pzb25MZWl0b3IgPSBidG9hKGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShfanNvbkxlaXRvcikpKTtcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBfanNvbkxlaXRvciwgMSk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aWYoUGlhbm8uZ29vZ2xlLnNob3dTYXZlU3Vic2NyaXB0aW9uKHJlc3BKc29uKSl7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHZhciBzd2dTZXJ2aWNlID0gbmV3IFN3Z1NlcnZpY2UoKTtcblx0XHRcdFx0XHRcdFx0c3dnU2VydmljZS5zYXZlR2xvYm9TdWJzY3JpcHRpb24oZ2xiaWQpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBhbyBjaGFtYXIgYSBmdW7Dp8OjbyBzaG93U2F2ZVN1YnNjcmlwdGlvbiBkbyBBbGRlYmFyYW4uJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1VSTDogJyArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEdMQklEOiAnICsgZ2xiaWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEVycm86ICcgKyBlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocmVzcEpzb24uYXV0b3JpemFkbyA9PSB0cnVlKXtcblx0XHRcdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKHJlc3BKc29uLnVzdWFyaW9JZCwgXCJHbG9ibyBJRFwiLCBcIk8gR2xvYm9cIik7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBUEkgZGUgYXV0b3JpemFjYW8gZGUgYWNlc3NvXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgZ2xiaWQpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8uZ29vZ2xlID0ge1xuICBpc0F1dGhvcml6ZWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZihzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpKXtcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKS5zdWJzY3JpcHRpb25Ub2tlbiwgXCJDb250YSBHb29nbGVcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSl7XG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCksIFwiQ29udGEgR29vZ2xlXCIsIFwiR29vZ2xlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGlzU3BlY2lmaWNHb29nbGVVc2VyOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8uZ29vZ2xlLmlzQXV0aG9yaXplZCgpKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dHJ5e1xuXHRcdFx0dmFyIG9HbG9ib0J1c2luZXNzID0gbmV3IE9HbG9ib0J1c2luZXNzKCk7XG5cdFx0XHRvR2xvYm9CdXNpbmVzcy52ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkKHN3Z0VudGl0bGVtZW50cyk7XG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJFcnJvIGFvIGV4ZWN1dGFyIG8gQWxkZWJhcmFuXCIsIFwiRXJyb3I6IFwiICsgZXJyb3IgKyBcIiAtIEVudGl0bGVtZW50czogXCIgKyBzd2dFbnRpdGxlbWVudHMuZW50aXRsZW1lbnRzWzBdLnN1YnNjcmlwdGlvblRva2VuKTtcblx0XHR9XG5cdH0sXG5cblx0c2hvd1NhdmVTdWJzY3JpcHRpb246IGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRpZighc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkgJiYgcmVzcG9uc2UubW90aXZvID09PVwiQVVUT1JJWkFET1wiICYmICFIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLlNBVkVfU1VCU0NSSVBUSU9OKSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cbn07XG5cblBpYW5vLmF1dGVudGljYWNhbyA9IHtcblx0aXNMb2dhZG9DYWR1bjogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xuXHRcdGlmICghZ2xiaWQpIHtcblx0XHRcdGlmICh1dHApIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0cmV0dXJuIGdsYmlkICE9ICcnO1xuXHR9LFxuXHR2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG86IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcblx0XHRpZiAoUGlhbm8uYXV0ZW50aWNhY2FvLmlzTG9nYWRvQ2FkdW4oZ2xiaWQsIHV0cCkpIHtcblx0XHRcdGlmICh1dHApIHtcblx0XHRcdFx0dmFyIF9sZWl0b3IgPSBKU09OLnBhcnNlKGRlY29kZVVSSShhdG9iKHV0cCkpKTtcblx0XHRcdFx0aWYgKGdsYmlkID09IF9sZWl0b3IuZ2xiaWQgJiYgKHR5cGVvZiBfbGVpdG9yLnByb2R1dG8gPT0gXCJ1bmRlZmluZWRcIiB8fCBfbGVpdG9yLnByb2R1dG8gPT0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpKSB7XG5cdFx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhfbGVpdG9yLmF1dG9yaXphZG8sIF9sZWl0b3IubW90aXZvLCBfbGVpdG9yLmxvZ2FkbywgX2xlaXRvci50ZW1UZXJtb0RlVXNvKTtcblx0XHRcdFx0XHRpZihfbGVpdG9yLmF1dG9yaXphZG8pe1xuXHRcdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhfbGVpdG9yLnV1aWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0XHR9XG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvKGdsYmlkKTtcblx0XHR9XG5cdH0sXG5cdGlzQXV0b3JpemFkbzogZnVuY3Rpb24odGVybW9EZVVzbywgbW90aXZvLCBhdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXHRcdGlmIChhdXRvcml6YWRvIHx8IG1vdGl2byA9PSBcImluZGlzcG9uaXZlbFwiIHx8IHRlcm1vRGVVc28gIT0gZmFsc2UpIHtcblx0XHRcdGlmIChhdXRvcml6YWRvICYmIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSBQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZShocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZWZpbmVVc3VhcmlvUGlhbm86ZnVuY3Rpb24oYXV0b3JpemFkbywgbW90aXZvLCBsb2dhZG8sIHRlbVRlcm1vRGVVc28pe1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhdXRvcml6YWRvXCIsIGF1dG9yaXphZG9dKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibW90aXZvXCIsIG1vdGl2b10pO1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJsb2dhZG9cIiwgbG9nYWRvXSk7XG5cdFx0aWYodGVtVGVybW9EZVVzbyAhPSBcIiBcIilcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ0ZW1UZXJtb1wiLCB0ZW1UZXJtb0RlVXNvXSk7XG5cdH1cbn07XG5cblBpYW5vLnV0aWwgPSB7XG5cdGlzU2VjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09PSAnc2VjdGlvbicgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdHRlbVZhcmlhdmVpc09icmlnYXRvcmlhczogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCB0aXBvQ29udGV1ZG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCBub21lUHJvZHV0b1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0ZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmw6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XG5cdFx0dmFyIGNoYXZlc0NhbXBhbmhhID0gWyd1dG1fbWVkaXVtJywndXRtX3NvdXJjZSddO1xuXHRcdHZhciB2YWxvcmVzQ2FtcGFuaGEgPSBbXTtcblxuXHRcdGZvciAodmFyIGlkeFBhcmFtQ2FtcGFuaGEgPSAwOyBpZHhQYXJhbUNhbXBhbmhhIDwgY2hhdmVzQ2FtcGFuaGEubGVuZ3RoOyBpZHhQYXJhbUNhbXBhbmhhKyspIHtcblx0XHRcdHZhciBjaGF2ZUNhbXBhbmhhID0gY2hhdmVzQ2FtcGFuaGFbaWR4UGFyYW1DYW1wYW5oYV07XG5cdFx0XHRpZiAodXJsLmluZGV4T2YoY2hhdmVDYW1wYW5oYSArICc9JykgIT0gLTEpIHtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBjaGF2ZUNhbXBhbmhhICsgXCI9KFteJiNdKilcIik7XG5cdFx0XHRcdHZhciB2YWxvckNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHRcdFx0aWYodmFsb3JDYW1wYW5oYSl7XG5cdFx0XHRcdFx0dmFsb3Jlc0NhbXBhbmhhLnB1c2godmFsb3JDYW1wYW5oYSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbG9yZXNDYW1wYW5oYS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidXRtXCIsIHZhbG9yZXNDYW1wYW5oYS5qb2luKFwiO1wiKV0pO1xuXHRcdH1cblx0XHRpZiAodXJsLmluZGV4T2YoJ3V0bV9jYW1wYWlnbj0nKSAhPSAtMSkge1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcInV0bV9jYW1wYWlnbj0oXFxcXHcrKVwiKTtcblx0XHRcdHZhciBjYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XG5cdFx0XHRpZihjYW1wYW5oYSl7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjYW1wYW5oYVwiLCBjYW1wYW5oYV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aXNPcmlnZW1CdXNjYWRvcjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIHJlZ2V4Um9ib3MgPSBuZXcgUmVnRXhwKFwiKGlhX2FyY2hpdmVyKXwoR29vZ2xlYm90KXwoTWVkaWFwYXJ0bmVycy1Hb29nbGUpfChBZHNCb3QtR29vZ2xlKXwobXNuYm90KXwoWWFob28hIFNsdXJwKXwoWnlCb3JnKXwoQXNrIEplZXZlcy9UZW9tYSl8KGJpbmdib3QpfChjWGVuc2Vib3QpXCIpO1xuXHRcdHZhciBlaFJvYm8gPSByZWdleFJvYm9zLnRlc3QodXNlckFnZW50KTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYnVzY2Fkb3JcIiwgZWhSb2JvXSk7XG5cdFx0cmV0dXJuIGVoUm9ibztcblx0fSxcblx0bW9udGFVcmxTdGc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpICE9ICdwcmQnID8gJy1zdGcnIDogJyc7XG5cdH0sXG5cdHRlbVBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbU5hbWUpIHtcblx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcblx0XHRyZXR1cm4gcGFyYW1ldHJvcy5pbmRleE9mKHBhcmFtTmFtZSkgIT0gLTEgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldFZhbG9yUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtZXRybykge1xuXHRcdGlmIChQaWFuby51dGlsLnRlbVBhcmFtZXRyb05hVXJsKHBhcmFtZXRybykpIHtcblx0XHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBwYXJhbWV0cm8gKyBcIj0oW14mI10qKVwiKTtcblx0XHRcdHJldHVybiBwYXJhbWV0cm9zLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuIFwic2VtIHBhcmFtZXRyb1wiO1xuXHR9LFxuXHRpc0RlYnVnOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHO1xuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGlzRG9taW5pb09HbG9ibzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIjovLyguKj8pL1wiKSwgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKTtcblx0XHRpZiAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwib2dsb2JvXCIpID4gLTEgfHwgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImdsb2JvaVwiKSA+IC0xICYmIHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImVkZ1wiKSA9PSAtMSkpIHtcblx0XHRcdHJldHVybiB1cmwubWF0Y2gocmVnZXgpWzFdO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH0sXG5cdGNhbGxiYWNrTWV0ZXI6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcoZmFsc2UpO1xuXHR9LFxuXHRjYWxsYmFja01ldGVyRXhwaXJlZDogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XG5cdFx0d2luZG93LnJlZ3Jhc1RpbnkgPSBtZXRlckRhdGE7XG5cdFx0UGlhbm8udmFyaWF2ZWlzLmlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkID0gdHJ1ZTtcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KHRydWUpO1xuXHR9LFxuXHRnZXRXaW5kb3dMb2NhdGlvblNlYXJjaDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0fSxcblx0Z2V0V2luZG93TG9jYXRpb25IcmVmOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0fSxcblx0YWRpY2lvbmFyQ3NzOiBmdW5jdGlvbihjc3NQYXRoKXtcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGUuaW5uZXJIVE1MID0gY3NzUGF0aDtcblx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlLCBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG5cdH0sXG5cdGlzUmV2aXN0YTogZnVuY3Rpb24oKXtcblx0XHR2YXIgcmV2aXN0YXMgPSBbXCJlcG9jYVwiLCBcImF1dG8tZXNwb3J0ZVwiLCBcInZvZ3VlXCIsIFwiZ2xhbW91clwiLCBcImNhc2Etdm9ndWVcIiwgXCJtYXJpZS1jbGFpcmVcIiwgXCJjYXNhLWUtamFyZGltXCIsIFwicXVlbS1hY29udGVjZVwiLCBcImdsb2JvLXJ1cmFsXCIsIFwiZ3FcIiwgXCJtb25ldFwiLCAnY3Jlc2NlcicsJ2dhbGlsZXUnXTtcblx0XHRpZihyZXZpc3Rhcy5pbmRleE9mKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSA+IC0xKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRyZWNhcnJlZ2FQaWFubzogZnVuY3Rpb24gKHRpcG9Db250ZXVkbywgaXNFeGNsdXNpdm8sIG5vbWVQcm9kdXRvLCBwb3N0T3BlbmVkKSB7XG5cdFx0Y29uc3QgcG9zdEVsZW1lbnQgPSB3aW5kb3cuYW5hbGl0aWNvUG9zdDtcblx0XHR3aW5kb3cudGlwb0NvbnRldWRvUGlhbm8gPSB0aXBvQ29udGV1ZG87XG5cdFx0d2luZG93LmNvbnRldWRvRXhjbHVzaXZvID0gaXNFeGNsdXNpdm87XG5cdFx0d2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gPSBub21lUHJvZHV0bztcblx0XHR3aW5kb3dbXCJ0cFwiXSA9IFtdO1xuXHRcdFxuXHRcdGlmICh0eXBlb2Ygd2luZG93LnJlZ3Jhc1RpbnkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSBcIlwiO1xuXHRcdH1cblxuXHRcdGlmKHBvc3RFbGVtZW50KSB7XG5cdFx0XHRpZighcG9zdE9wZW5lZCkge1x0XHRcdFx0XG5cdFx0XHRcdGFuYWx5dGljYWxQb3N0SXNPcGVuZWQoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YW5hbHl0aWNhbFBvc3RJc0xvYWRpbmcoKVxuXG5cdFx0XHRcdFBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0XHRcdGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIGNoZWNrRXhwZXJpZW5jZXNIYXNDaGFuZ2UoKS50aGVuKGZ1bmN0aW9uIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBhbmFseXRpY2FsQmxvY2tlZEZvclBpYW5vKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmFseXRpY2FsVW5ibG9ja2VkRm9yUGlhbm8oKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGlzVmFsb3I6IGZ1bmN0aW9uICgpIHtcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gXCJ2YWxvclwiKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5QaWFuby5jb25maWd1cmFjYW8gPSB7XG5cdGpzb25Db25maWd1cmFjYW9UaW55UGFzczoge1xuXHRcdCdpbnQnOiB7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidkWHU3ZHZGS1JpJyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonTWN0RmdSQ0VzdScsXG5cdFx0XHQnc2V0U2FuZEJveCc6J3RydWUnLFxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1kWHU3ZHZGS1JpJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1NY3RGZ1JDRXN1Jyxcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xuXHRcdH0sXG5cdFx0J3FsdCc6e1xuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGlxbHQtaWcuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXG5cdFx0fSxcblx0XHQncHJkJzp7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6Jyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaS5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vJyxcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLmNvbnN0cnV0b3IgPSB7XG5cdGluaXRUcDogZnVuY3Rpb24oKSB7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiSW5pY2lvIEluaXRUcFwiKTtcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xuXHRcdHRwLnB1c2goW1wic2V0VGFnc1wiLCBbUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCldXSk7XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcblx0XHR9XG5cdFx0dHAucHVzaChbXCJzZXRTYW5kYm94XCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uc2V0U2FuZEJveF0pO1xuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcblx0XHR2YXIgY2xlYW5fdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKS5zcGxpdChcIj9cIilbMF07XG5cdFx0dHAucHVzaChbXCJzZXRQYWdlVVJMXCIsY2xlYW5fdXJsXSk7XG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm5vbWVQcm9kdXRvXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5kZXRlY3RQcml2YXRlTW9kZShmdW5jdGlvbiAoaXNfcHJpdmF0ZSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjb250ZXVkb0V4Y2x1c2l2b1wiLCB0cnVlXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnICYmICh0eXBlb2Ygc3dnRW50aXRsZW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiBzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSkgKSB7XG5cdFx0XHRQaWFuby5nb29nbGUuaXNTcGVjaWZpY0dvb2dsZVVzZXIoc3dnRW50aXRsZW1lbnRzKTtcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSxcIkFVVE9SSVpBRE9cIiwgdHJ1ZSwgXCJcIik7XG5cdFx0fWVsc2V7XG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8udmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkdDT00pLCBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFApKTtcblx0XHR9XG5cblx0XHRQaWFuby5yZWdpb25hbGl6YWNhby5nZXRSZWdpb24oKTtcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcblxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJiYW5uZXJDb250YWRvckxpZ2Fkb1wiLCB0cnVlXSk7XG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyQWN0aXZlXCIsIFBpYW5vLnV0aWwuY2FsbGJhY2tNZXRlcl0pO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyRXhwaXJlZFwiLCBQaWFuby51dGlsLmNhbGxiYWNrTWV0ZXJFeHBpcmVkXSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiRmltIEluaXRUcFwiKTtcblx0fVxufTtcblxuZnVuY3Rpb24gbG9hZFBpYW5vRXhwZXJpZW5jZXMoKXtcblx0dmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRhLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuXHRhLmFzeW5jID0gdHJ1ZTtcblx0aWYoUGlhbm8udXRpbC5pc1JldmlzdGEoKSB8fCBQaWFuby51dGlsLmlzVmFsb3IoKSkge1xuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm9SZXZpc3Rhcztcblx0fSBlbHNlIHtcblx0XHRhLnNyYyA9IFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsU2FuZGJveFBpYW5vO1xuXHR9XG5cblx0dmFyIGIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcblxuXHRiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuXHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJTY3JpcHQgYWRpY2lvbmFkb1wiKTtcbn1cblxuZnVuY3Rpb24gcGlhbm9Jbml0KCkge1xuXHR3aW5kb3cuUGlhbm8uY2hlY2tQaWFub0FjdGl2ZSgpXG5cblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxuXG4gICAgaWYgKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpIHtcblx0XHR3aW5kb3cuU1dHLnB1c2goKHN1YnNjcmlwdGlvbnMpID0+IHtcblx0XHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3Zylcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZy1zdWJzY3JpcHRpb25zJywgc3Vic2NyaXB0aW9ucylcblxuXHRcdFx0c3dnID0gc3Vic2NyaXB0aW9ucztcblxuXHRcdFx0c3Vic2NyaXB0aW9ucy5zZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlKGVudGl0bGVtZW50c1Byb21pc2UgPT4ge1xuXHRcdFx0XHRlbnRpdGxlbWVudHNQcm9taXNlLnRoZW4oZW50aXRsZW1lbnRzID0+IHtcblx0XHRcdFx0XHR3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gZW50aXRsZW1lbnRzO1xuXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFNXR1wiLCBcIkVudGl0bGVtZW50cyByZWNlYmlkb3NcIik7XG5cblx0XHRcdFx0XHRpZiAod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xuXHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xuXHRcdFx0XHRcdFx0XHRsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIlBpYW5vIG5hbyBmb2kgY2FycmVnYWRhIGNvcnJldGFtZW50ZSFcIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEdBLnNldEV2ZW50c0Vycm9yKFwiRW50aXRsZW1lbnRzIG7Do28gY2FycmVnYWRvXCIsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xuICAgICAgICAgICAgbG9hZFBpYW5vRXhwZXJpZW5jZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdGlueUluaXQoKSB7XG5cdFRpbnkuc2V0UGlhbm8oUGlhbm8pO1xuICAgIGNvbnN0IFN3ZyA9IG5ldyBTd2dNb2R1bGUoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IFN3Zy5pbml0KCk7XG5cdH1cblx0Y2F0Y2goZSkgeyBjb25zb2xlLmVycm9yKGUpIH1cblxuXHRwaWFub0luaXQoKTtcbn07XG5cbnRpbnlJbml0KCk7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
