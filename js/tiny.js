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
  'epoca': {
    'cod_prod': 'epoca',
    'id': '6697'
  },
  'auto-esporte': {
    'cod_prod': 'auto-esporte',
    'id': '6697'
  },
  'vogue': {
    'cod_prod': 'vogue',
    'id': '6697'
  },
  'glamour': {
    'cod_prod': 'glamour',
    'id': '6697'
  },
  'casa-vogue': {
    'cod_prod': 'casa-vogue',
    'id': '6697'
  },
  'marie-claire': {
    'cod_prod': 'marie-claire',
    'id': '6697'
  },
  'casa-e-jardim': {
    'cod_prod': 'casa-jardim',
    'id': '6697'
  },
  'quem-acontece': {
    'cod_prod': 'quem',
    'id': '6697'
  },
  'epoca-negocios': {
    'cod_prod': 'epoca-negocios',
    'id': '0000'
  },
  'globo-rural': {
    'cod_prod': 'globo-rural',
    'id': '6697'
  },
  'pegn': {
    'cod_prod': 'pequenas-empresas',
    'id': '0000'
  },
  'galileu': {
    'cod_prod': 'galileu',
    'id': '6697'
  },
  'crescer': {
    'cod_prod': 'crescer',
    'id': '6697'
  },
  'gq': {
    'cod_prod': 'gq',
    'id': '6697'
  },
  'monet': {
    'cod_prod': 'monet',
    'id': '6618'
  },
  'oglobo': {
    'cod_prod': 'OG03',
    'id': '3981'
  },
  'blogs': {
    'cod_prod': 'OG03',
    'id': '3981'
  },
  'kogut': {
    'cod_prod': 'OG03',
    'id': '3981'
  },
  'acervo': {
    'cod_prod': 'OG04',
    'id': '3981'
  },
  'jornaldigital': {
    'cod_prod': 'OG01',
    'id': '3981'
  },
  'valor': {
    'cod_prod': 'valordigital',
    'id': '6668'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwtZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJGYiIsImRhdGEiLCJkZWJ1ZyIsIndpbmRvdyIsInRpbnlDcHQiLCJkaXNhYmxlZCIsImZiIiwiaGFzUGl4ZWwiLCJwaXhlbCIsIm5hbWUiLCJpc0RlZmluZWQiLCJmYnEiLCJHQSIsImdhIiwiUHJvZHVjdHMiLCJQcm9kdWN0c01vZHVsZSIsImRhdGFMYXllciIsImlzUHJvZHVjdFZhbG9yIiwiX2dhcSIsImFjdGlvbiIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkhlbHBlcnMiLCJwcm9wIiwiY19uYW1lIiwidmFsdWUiLCJleHBpcmVkYXlzIiwiZXhkYXRlIiwiRGF0ZSIsImhvc3RuYW1lIiwibG9jYXRpb24iLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRvY3VtZW50IiwiY29va2llIiwiZXNjYXBlIiwidG9VVENTdHJpbmciLCJzcGxpdCIsInJldmVyc2UiLCJtYXRjaCIsIlJlZ0V4cCIsImNvb2tpZVRpbnkiLCJ1bmVzY2FwZSIsInRvU3RyaW5nIiwiUGlhbm8iLCJjb250ZW50Iiwic2V0RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VOYW1lIiwiZXhwZXJpZW5jZSIsInJlZ3Jhc1RpbnkiLCJub21lRXhwZXJpZW5jaWEiLCJzdWJzZWdtZW50YWNhb1BpYW5vIiwic2V0Q29va2llIiwidmFyaWF2ZWlzIiwiY29uc3RhbnRlIiwiVVRQIiwicHJvZHVjdE5hbWUiLCJub21lUHJvZHV0b1BpYW5vIiwicHJvZHVjdHNTZXR0aW5ncyIsIlByb2R1Y3QiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9kdWN0c0lkIiwiaWQiLCJTd2ciLCJTV0ciLCJzd2dFbnRpdGxlbWVudHMiLCJzd2ciLCJsb2NhbFByb2R1Y3RQaWFubyIsImhhc1Byb2R1Y3RKU09OIiwicHJvZHVjdEpTT04iLCJlbEhlYWQiLCJoZWFkIiwic2V0R2xvYmFsU1dHIiwiZ2xvYmFsIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyaW5nIiwidXRtc1Byb3BzIiwiZ2xiUGF5d2FsbCIsInV0bXMiLCJmb3JFYWNoIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwic2V0Iiwic3Vic2NyaWJlIiwidXJsIiwiaXNQcm9kdWN0aW9uIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldFByb2R1Y3RzIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZmlsdGVyIiwicGlhbm9Qcm9kdWN0TmFtZSIsIm9iaiIsInByb3BzVG9SZW1vdmUiLCJuZXdPYmoiLCJlbGVtZW50IiwiZ2V0UHJvZHVjdCIsInJlbW92ZVByb3BlcnRpZXMiLCJrZXlzIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcmt1cFRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lckhUTUwiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJzcmMiLCJ1cmxQcm9kIiwidXJsU3RnIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0TWFya3VwIiwic2V0U3dnU2NyaXB0Iiwic2V0QWxkZWJhcmFuU2NyaXB0IiwidGVzdFNXRyIsIlRpbnkiLCJoYXNQYXl3YWxsIiwidHAiLCJQYXl3YWxsQW5hbHl0aWNzIiwic2V0R2xvYmFsVGlueSIsInNldEdsb2JhbCIsImluaXQiLCJkZWZhdWx0U2V0dGluZ3MiLCJ0aW55IiwicGF5d2FsbCIsImFtYmllbnRlVXRpbGl6YWRvUGlhbm8iLCJQYXl3YWxsR0FNb2R1bGUiLCJQaWFub01vZHVsZSIsIkdBTW9kdWxlIiwibWV0cmljcyIsInBheXdhbGxUeXBlIiwiX1BpYW5vIiwic2V0RXZlbnRzIiwiUlRJRVgiLCJyZXNldFV0cCIsImRhdGFzZXQiLCJnYVJlc2V0dXRwIiwiaW1hZ2VUb3AiLCJnYUltYWdlUG9zaXRpb24iLCJnYUxhYmVsIiwiZXZlbnQiLCJldmVudG9HQUNhdGVnb3JpYSIsImV2ZW50b0dBQWNhbyIsImdhQWN0aW9uIiwiZXZlbnRvR0FSb3R1bG8iLCJldmVudG9HQVZhbG9yIiwiZXZlbnRvR0FJbnRlcmFjYW8iLCJzZXREYXRhbGF5ZXIiLCJ0eXBlUGF5d2FsbCIsIlBheXdhbGxDcHQiLCJTd2dNb2R1bGUiLCJGQiIsIkZiTW9kdWxlIiwiZG9tYWluIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsIlBheXdhbGwiLCJjYWxsYmFjayIsInRlbXBsYXRlU2V0dGluZ3MiLCJ0ZW1wbGF0ZSIsImFzc2V0c1BhdGgiLCJkaXNwbGF5IiwicHJvZHVjdENsYXNzIiwidGl0bGUiLCJ0YXJnZXRCbGFuayIsInRvcE1vYmkiLCJ0b3BEZXNrIiwidG9wTGluayIsImxlZnRNb2JpIiwibGVmdERlc2siLCJsZWZ0TGluayIsInJpZ2h0TW9iaSIsInJpZ2h0RGVzayIsInJpZ2h0TGluayIsImhpZGVMb2dpbkFyZWEiLCJsb2dpblRleHQiLCJsb2dpblByZVRleHQiLCJsb2dpblRhZyIsImdldFVybExvZ2luUmVnaXN0ZXIiLCJjbGVhckxvZ2luQXJlYSIsInNldERlYnVnVGVtcGxhdGVTZXR0aW5ncyIsImVsQm9keSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJlbENwdCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRFbFdyYXBwZXIiLCJyZW1vdmUiLCJlbFRvUmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImJvZHkiLCJib2R5QWRqdXN0IiwicmVtb3ZlRWxlbWVudHMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjc3NNaW5pZmllZCIsImFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXl3YWxsTG9hZCIsImVsQ3B0V3JhcCIsInNldFRpbWVvdXQiLCJlbEJvZHlIZWlnaHQiLCJpbm5lckhlaWdodCIsImVsQ3B0V3JhcEhlaWdodCIsIm9mZnNldEhlaWdodCIsImN1cnJlbnRUb3AiLCJNYXRoIiwiYWJzIiwidG9wV2l0aEZ1bGxFbGVtZW50IiwidG9wIiwib3BhY2l0eSIsInpJbmRleCIsImV2dFdoZWVsIiwiZXZ0VG91Y2giLCJhY3RpdmVFdmVudHMiLCJzZXRQaXhlbFR5cGUiLCJjbGlja1RhcmdldHMiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzTG9naW4iLCJCb29sZWFuIiwiZ2V0QXR0cmlidXRlIiwiaXNVcmxTd2ciLCJpbmNsdWRlcyIsIm5vdEJsYW5rIiwiaHJlZlRhcmdldCIsInRyaWdnZXIiLCJzZXRVdG1zIiwiaHJlZiIsIm9wZW4iLCJiaW5kIiwibmV3dG9wIiwic3RlcCIsIm11bHRpcGxpZXIiLCJkZWx0YVkiLCJlbFRvcCIsInRvdWNoc3RhcnRZIiwidG91Y2hlbmRZIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5ZIiwiZGlmZiIsInVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvIiwidXJpIiwic2VydmljZUlkIiwiZ2V0U2Vydmljb0lkIiwic3RyIiwidXJsUmV0dXJuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0Q29kaWdvUHJvZHV0byIsImdldE5vbWVQcm9kdXRvIiwiZGVsYXlUaW1lciIsImNyZWF0ZVRlbXBsYXRlIiwidGVtcGxhdGVWYXJzIiwiVGlueU1vZHVsZSIsInNldEdsb2JhbFZhcnMiLCJhY3RpdmVQYXl3YWxsIiwiYW1iaWVudGVzQWNlaXRvcyIsInN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvIiwic3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkIiwiR0NPTSIsIkFNQklFTlRFIiwiU0FWRV9TVUJTQ1JJUFRJT04iLCJDUkVBVEVEX0dMT0JPSUQiLCJHTE9CT0lEX01FU1NBR0UiLCJtZXRyaWNhcyIsIkVWRU5UT19TRU1fQUNBTyIsIkVSUk8iLCJrcnV4IiwiU0VHTUVOVEFDT0VTIiwiS1JVWExJR0FETyIsInV0aWwiLCJJUCIsIkRFQlVHIiwiaXNDb250ZXVkb0V4Y2x1c2l2byIsImNvbnRldWRvRXhjbHVzaXZvIiwiZ2V0QW1iaWVudGVQaWFubyIsImluZGV4T2YiLCJnZXRWYWxvclBhcmFtZXRyb05hVXJsIiwiZ2V0Q29va2llIiwiZ2V0VGlwb0NvbnRldWRvUGlhbm8iLCJ0aXBvQ29udGV1ZG9QaWFubyIsImV4ZWN1dG91UGFnZXZpZXciLCJzZXRFdmVudHNFcnJvciIsImlzUmV2aXN0YSIsIm5vbWVQcm9kdXRvIiwiYXV0ZW50aWNhY2FvIiwiZGVmaW5lVXN1YXJpb1BpYW5vIiwiamFuZWxhQW5vbmltYSIsInJldHJ5IiwiaXNEb25lIiwibmV4dCIsImN1cnJlbnRfdHJpYWwiLCJtYXhfcmV0cnkiLCJpc190aW1lb3V0IiwiaXNJRTEwT3JMYXRlciIsInVzZXJfYWdlbnQiLCJ1YSIsImV4ZWMiLCJwYXJzZUludCIsImRldGVjdFByaXZhdGVNb2RlIiwiaXNfcHJpdmF0ZSIsIndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtIiwiVEVNUE9SQVJZIiwiZSIsImluZGV4ZWREQiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYiIsInJlYWR5U3RhdGUiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInRlbSIsImdldEl0ZW0iLCJsaWdhZG8iLCJwYXJhbWV0cm8iLCJ2YWxvclBhcmFtZXRybyIsIm9idGVtU2VnbWVudGFjYW8iLCJzZWdtZW50YWNvZXMiLCJpIiwicmVnaW9uYWxpemFjYW8iLCJnZXRSZWdpb24iLCJrcnV4R2VvIiwia2V5IiwiZW52aWFFdmVudG9zR0EiLCJfR0FBY2FvIiwiX0dBUm90dWxvIiwibW9udGFSb3R1bG9HQSIsInNldExpbWl0ZUNvbnRhZ2VtIiwiX0dBTGltaXRlIiwiX0dBQ29udGFnZW0iLCJ2aWV3cyIsIm1heFZpZXdzIiwiaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyIiwicmVncmFzIiwicGFzc2FnZW0iLCJmbHV4byIsImV4ZWN1dGFBcG9zUGFnZXZpZXciLCJleHBpcm91IiwidHBDb250ZXh0Iiwic2V0YVZhcmlhdmVpcyIsImlkTG9naW4iLCJ0aXBvTG9naW4iLCJhc3NpbmF0dXJhTG9nYWRhIiwiaWRMb2dpbkFzc2luYW50ZSIsInRpcG9Mb2dpbkFzc2luYW50ZSIsImJhbm5lciIsIm1vc3RyYXJGb290ZXIiLCJ2ZXJzYW8iLCJhZGljaW9uYXJDc3MiLCJtb250YVVybFN0ZyIsInhtbEh0dHBSZXF1ZXN0IiwiZ2VyYVNjcmlwdE5hUGFnaW5hIiwibW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlciIsIm1vc3RyYXJBdmF0YXJIZWFkZXIiLCJib3R0b21GaXhlZCIsInBhcmFtcyIsImdsYkJhbm5lckJvdHRvbSIsIm1vc3RyYXJTV0ciLCJjc3MiLCJzY3JpcHRKcyIsIm1vc3RyYXJIaWdobGlnaHRTYWxlIiwibW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yIiwicmVnaXN0ZXIiLCJtb3N0cmFyQmFycmVpcmEiLCJoZWxwZXIiLCJyZWRpcmVjaW9uYXJCYXJyZWlyYSIsInNob3ciLCJ3YXJuIiwidHJpZ2dlckFkdmVydGlzaW5nIiwiZXJyb3IiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjaGVja1BheXdhbGwiLCJjaGVja0dhdGUiLCJoYXNHYXRlIiwiaGFzUHViIiwicmVnaXN0ZXJQYXl3YWxsIiwidGlwbyIsInN0YXR1cyIsImNvbXVuaWNhZG8iLCJtb3N0cmFySW5mb3JtYWNhbyIsImFkYmxvY2siLCJtb3N0cmFyQWRCbG9jayIsImdsYkFkYmxvY2siLCJibG9xdWVpb3MiLCJsaWJlcmFyRXNjIiwiYmxvcXVlaWFWaWV3TW9kZSIsInBhcmNlaXJvIiwibW9zdHJhRm9vdGVyUGFyY2Vpcm8iLCJpbmFkaW1wbGVudGUiLCJnZXRMaW5rQXNzaW5hdHVyYSIsImxpbmsiLCJyZWwiLCJ1cmxTY3JpcHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb3N0YSIsInJlc3BvbnNlVGV4dCIsImFwcGVuZERlU2NyaXB0IiwiYXBwZW5kQ2hpbGQiLCJzdGF0dXNUZXh0IiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXNwSnNvbiIsInBhcnNlIiwic2l0dWFjYW9QYWdhbWVudG8iLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvIiwiZ2xiaWQiLCJjb2RpZ29Qcm9kdXRvIiwiY29uZmlndXJhY2FvIiwianNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzIiwidXJsVmVyaWZpY2FMZWl0b3IiLCJyZXNwb3N0YURlVGVybW9EZVVzbyIsInJlc3Bvc3RhRGVNb3Rpdm8iLCJtb3Rpdm8iLCJ0ZW1UZXJtb0RlVXNvIiwiaXNBdXRvcml6YWRvIiwiYXV0b3JpemFkbyIsIl9qc29uTGVpdG9yIiwidXN1YXJpb0lkIiwiYnRvYSIsImVuY29kZVVSSSIsImdvb2dsZSIsInNob3dTYXZlU3Vic2NyaXB0aW9uIiwic3dnU2VydmljZSIsIlN3Z1NlcnZpY2UiLCJzYXZlR2xvYm9TdWJzY3JpcHRpb24iLCJpc0F1dGhvcml6ZWQiLCJnZXRFbnRpdGxlbWVudEZvclNvdXJjZSIsInN1YnNjcmlwdGlvblRva2VuIiwiaXNTcGVjaWZpY0dvb2dsZVVzZXIiLCJvR2xvYm9CdXNpbmVzcyIsIk9HbG9ib0J1c2luZXNzIiwidmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZCIsImVudGl0bGVtZW50cyIsInJlc3BvbnNlIiwiZW5hYmxlc1RoaXMiLCJpc0xvZ2Fkb0NhZHVuIiwidXRwIiwidmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvIiwiX2xlaXRvciIsImRlY29kZVVSSSIsImF0b2IiLCJwcm9kdXRvIiwibG9nYWRvIiwidXVpZCIsInRlcm1vRGVVc28iLCJpc1NlY3Rpb24iLCJ0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMiLCJleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCIsImdldFdpbmRvd0xvY2F0aW9uU2VhcmNoIiwiY2hhdmVzQ2FtcGFuaGEiLCJ2YWxvcmVzQ2FtcGFuaGEiLCJpZHhQYXJhbUNhbXBhbmhhIiwiY2hhdmVDYW1wYW5oYSIsInJlZ2V4IiwidmFsb3JDYW1wYW5oYSIsImpvaW4iLCJjYW1wYW5oYSIsImlzT3JpZ2VtQnVzY2Fkb3IiLCJyZWdleFJvYm9zIiwiZWhSb2JvIiwidGVtUGFyYW1ldHJvTmFVcmwiLCJwYXJhbU5hbWUiLCJwYXJhbWV0cm9zIiwiaXNEZWJ1ZyIsImlzRG9taW5pb09HbG9ibyIsImdldFdpbmRvd0xvY2F0aW9uSHJlZiIsImNhbGxiYWNrTWV0ZXIiLCJtZXRlckRhdGEiLCJjYWxsYmFja01ldGVyRXhwaXJlZCIsImNzc1BhdGgiLCJpbnNlcnRCZWZvcmUiLCJsYXN0Q2hpbGQiLCJyZXZpc3RhcyIsInJlY2FycmVnYVBpYW5vIiwidGlwb0NvbnRldWRvIiwiaXNFeGNsdXNpdm8iLCJjb25zdHJ1dG9yIiwiaW5pdFRwIiwiZXhlY3V0ZSIsImlzVmFsb3IiLCJpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzIiwiaWRTYW5kYm94VGlueXBhc3MiLCJzZXRTYW5kQm94IiwiY2xlYW5fdXJsIiwibG9hZFBpYW5vRXhwZXJpZW5jZXMiLCJhIiwiYXN5bmMiLCJ1cmxTYW5kYm94UGlhbm9SZXZpc3RhcyIsInVybFNhbmRib3hQaWFubyIsImIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJwaWFub0luaXQiLCJzdWJzY3JpcHRpb25zIiwic2V0T25FbnRpdGxlbWVudHNSZXNwb25zZSIsImVudGl0bGVtZW50c1Byb21pc2UiLCJ0aW55SW5pdCIsInNldFBpYW5vIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWU7QUFDWCxXQUFTO0FBQ1QsZ0JBQVksT0FESDtBQUVULFVBQU07QUFGRyxHQURFO0FBS1gsa0JBQWdCO0FBQ2hCLGdCQUFZLGNBREk7QUFFaEIsVUFBTTtBQUZVLEdBTEw7QUFTWCxXQUFTO0FBQ1QsZ0JBQVksT0FESDtBQUVULFVBQU07QUFGRyxHQVRFO0FBYVgsYUFBVztBQUNYLGdCQUFZLFNBREQ7QUFFWCxVQUFNO0FBRkssR0FiQTtBQWlCWCxnQkFBYztBQUNkLGdCQUFZLFlBREU7QUFFZCxVQUFNO0FBRlEsR0FqQkg7QUFxQlgsa0JBQWdCO0FBQ2hCLGdCQUFZLGNBREk7QUFFaEIsVUFBTTtBQUZVLEdBckJMO0FBeUJYLG1CQUFpQjtBQUNqQixnQkFBWSxhQURLO0FBRWxCLFVBQU07QUFGWSxHQXpCTjtBQTZCWCxtQkFBaUI7QUFDakIsZ0JBQVksTUFESztBQUVqQixVQUFNO0FBRlcsR0E3Qk47QUFpQ1gsb0JBQWtCO0FBQ2xCLGdCQUFZLGdCQURNO0FBRWxCLFVBQU07QUFGWSxHQWpDUDtBQXFDWCxpQkFBZTtBQUNmLGdCQUFZLGFBREc7QUFFZixVQUFNO0FBRlMsR0FyQ0o7QUF5Q1gsVUFBUTtBQUNSLGdCQUFZLG1CQURKO0FBRVIsVUFBTTtBQUZFLEdBekNHO0FBNkNYLGFBQVc7QUFDWCxnQkFBWSxTQUREO0FBRVgsVUFBTTtBQUZLLEdBN0NBO0FBaURYLGFBQVc7QUFDWCxnQkFBWSxTQUREO0FBRVgsVUFBTTtBQUZLLEdBakRBO0FBcURYLFFBQU07QUFDTixnQkFBWSxJQUROO0FBRU4sVUFBTTtBQUZBLEdBckRLO0FBeURYLFdBQVM7QUFDVCxnQkFBWSxPQURIO0FBRVQsVUFBTTtBQUZHLEdBekRFO0FBNkRYLFlBQVU7QUFDVixnQkFBWSxNQURGO0FBRVYsVUFBTTtBQUZJLEdBN0RDO0FBaUVYLFdBQVM7QUFDVCxnQkFBWSxNQURIO0FBRVQsVUFBTTtBQUZHLEdBakVFO0FBcUVYLFdBQVM7QUFDVCxnQkFBWSxNQURIO0FBRVQsVUFBTTtBQUZHLEdBckVFO0FBeUVYLFlBQVU7QUFDVixnQkFBWSxNQURGO0FBRVYsVUFBTTtBQUZJLEdBekVDO0FBNkVYLG1CQUFpQjtBQUNqQixnQkFBWSxNQURLO0FBRWpCLFVBQU07QUFGVyxHQTdFTjtBQWlGWCxXQUFTO0FBQ1QsZ0JBQVksY0FESDtBQUVULFVBQU07QUFGRztBQWpGRSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FxQkEsRTs7O0FBQ2pCLGdCQUF5QjtBQUFBLFFBQWJDLElBQWEsdUVBQU4sSUFBTTs7QUFBQTs7QUFDckIsU0FBS0MsS0FBTCxHQUFhQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBNUI7QUFDQSxTQUFLRyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0MsRUFBTCxHQUFVTCxJQUFWO0FBQ0g7Ozs7bUNBTWM7QUFDWCxVQUFHLEtBQUtJLFFBQVIsRUFDSTtBQUVKLFVBQU1FLFFBQVEsR0FBSSxPQUFPLEtBQUtELEVBQUwsQ0FBUUUsS0FBUixDQUFjQyxJQUFyQixLQUE4QixXQUEvQixHQUE4QyxLQUFLSCxFQUFMLENBQVFFLEtBQVIsQ0FBY0MsSUFBNUQsR0FBbUUsSUFBcEY7O0FBRUEsVUFBRyxLQUFLQyxTQUFMLElBQWtCSCxRQUFyQixFQUE4QjtBQUMxQkksV0FBRyxDQUFDLE1BQUQsRUFBUyxpQkFBVCxDQUFIO0FBQ0FBLFdBQUcsQ0FBQyxhQUFELEVBQWdCLGlCQUFoQixFQUFtQyxLQUFLTCxFQUFMLENBQVFFLEtBQVIsQ0FBY0MsSUFBakQsQ0FBSDtBQUNIO0FBQ0o7Ozt3QkFkZTtBQUNaLGFBQVEsT0FBT0UsR0FBUCxLQUFlLFdBQWhCLEdBQStCLElBQS9CLEdBQXNDLEtBQTdDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RMOztJQUVxQkMsRTs7O0FBQ3BCLGdCQUFjO0FBQUE7O0FBQ1AsU0FBS1YsS0FBTCxHQUFhQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBZixDQUFxQlcsRUFBbEM7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLElBQUlDLGlEQUFKLEVBQWhCO0FBQ0g7Ozs7b0NBRWU7QUFDWlosWUFBTSxDQUFDYSxTQUFQLEdBQW1CYixNQUFNLENBQUNhLFNBQVAsSUFBcUIsRUFBeEM7QUFFQSxVQUFHLEtBQUtGLFFBQUwsQ0FBY0csY0FBZCxJQUFnQyxPQUFPQyxJQUFQLEtBQWdCLFdBQW5ELEVBQ0lmLE1BQU0sQ0FBQ2UsSUFBUCxHQUFjZixNQUFNLENBQUNlLElBQVAsSUFBZ0IsRUFBOUI7QUFDUDs7OzhCQUVTQyxNLEVBQVFDLEssRUFBMkI7QUFBQSxVQUFwQkMsUUFBb0IsdUVBQVQsT0FBUztBQUUvQyxVQUFHbEIsTUFBTSxDQUFDQyxPQUFQLENBQWVGLEtBQWYsQ0FBcUJXLEVBQXhCLEVBQ0NTLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJGLFFBQTVCLEVBQXNDRixNQUF0QyxFQUE4Q0MsS0FBOUM7QUFFSyxVQUFJLEtBQUtOLFFBQUwsQ0FBY0csY0FBbEIsRUFDTEMsSUFBSSxDQUFDTSxJQUFMLENBQVUsQ0FBQyxhQUFELEVBQWdCSCxRQUFoQixFQUEwQkYsTUFBMUIsRUFBa0NDLEtBQWxDLEdBQTBDLElBQTFDLENBQVY7QUFFREosZUFBUyxDQUFDUSxJQUFWLENBQWU7QUFBQyxpQkFBUyxlQUFWO0FBQTJCLDZCQUFxQkgsUUFBaEQ7QUFBMEQsd0JBQWdCRixNQUExRTtBQUFrRiwwQkFBaUJDO0FBQW5HLE9BQWY7QUFDRzs7O21DQUVjRCxNLEVBQVFDLEssRUFBTztBQUNoQyxVQUFJLEtBQUtOLFFBQUwsQ0FBY0csY0FBbEIsRUFDQ0MsSUFBSSxDQUFDTSxJQUFMLENBQVUsQ0FBQyxhQUFELEVBQWdCLFlBQWhCLEVBQThCTCxNQUE5QixFQUFzQ0MsS0FBdEMsR0FBOEMsSUFBOUMsQ0FBVjtBQUVESixlQUFTLENBQUNRLElBQVYsQ0FBZTtBQUFDLGlCQUFTLGVBQVY7QUFBMkIsNkJBQXFCLFlBQWhEO0FBQThELHdCQUFnQkwsTUFBOUU7QUFBc0YsMEJBQWlCQztBQUF2RyxPQUFmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQy9CbUJLLE87Ozs7Ozs7Ozs4QkFFQUMsSSxFQUFNO0FBQ25CLGFBQVEsT0FBT0EsSUFBUCxLQUFnQixXQUFqQixHQUFnQyxJQUFoQyxHQUFzQyxLQUE3QztBQUNIOzs7OEJBRWdCQyxNLEVBQVFDLEssRUFBMEI7QUFBQSxVQUFuQkMsVUFBbUIsdUVBQU4sSUFBTTtBQUMvQyxVQUFJQyxNQUFNLEdBQUcsSUFBSUMsSUFBSixFQUFiO0FBQ0EsVUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNELFFBQVQsR0FBb0JDLFFBQVEsQ0FBQ0QsUUFBN0IsR0FBd0MsSUFBdkQ7QUFFQSxVQUFHLENBQUNBLFFBQUosRUFBYztBQUVkRixZQUFNLENBQUNJLE9BQVAsQ0FBZUosTUFBTSxDQUFDSyxPQUFQLEtBQW1CTixVQUFsQztBQUNBTyxjQUFRLENBQUNDLE1BQVQsR0FBa0JWLE1BQU0sR0FBRyxHQUFULEdBQWNXLE1BQU0sQ0FBQ1YsS0FBRCxDQUFwQixJQUFnQ0MsVUFBRCxHQUFlLEVBQWYsR0FBb0IsY0FBY0MsTUFBTSxDQUFDUyxXQUFQLEVBQWpFLElBQ2hCLFdBRGdCLEdBQ0YsVUFERSxHQUNXUCxRQUFRLENBQUNRLEtBQVQsQ0FBZSxHQUFmLEVBQW9CQyxPQUFwQixHQUE4QixDQUE5QixDQURYLEdBQzhDLEdBRDlDLEdBQ29EVCxRQUFRLENBQUNRLEtBQVQsQ0FBZSxHQUFmLEVBQW9CQyxPQUFwQixHQUE4QixDQUE5QixDQUR0RTtBQUVIOzs7OEJBRWdCaEMsSSxFQUFNO0FBQ25CLFVBQUlpQyxLQUFLLEdBQUlOLFFBQVEsQ0FBQ0MsTUFBVixHQUFvQkQsUUFBUSxDQUFDQyxNQUFULENBQWdCSyxLQUFoQixDQUFzQixJQUFJQyxNQUFKLENBQVdsQyxJQUFJLEdBQUMsVUFBaEIsQ0FBdEIsQ0FBcEIsR0FBeUUsS0FBckY7QUFDQSxVQUFJbUMsVUFBVSxHQUFHRixLQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSSxRQUFULEVBQUQsQ0FBWCxHQUFtQyxFQUF6RDtBQUNBLGFBQU9GLFVBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJMOztJQUVxQkcsSzs7O0FBQ2pCLG1CQUFjO0FBQUE7O0FBQ1YsU0FBSzdDLEtBQUwsR0FBYUMsTUFBTSxDQUFDQyxPQUFQLENBQWVGLEtBQTVCO0FBQ0EsU0FBSzhDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsYUFBTDtBQUNIOzs7O29DQVdlO0FBQ1osVUFBSUMsY0FBYyxHQUFHLEVBQXJCO0FBQ0EvQyxZQUFNLENBQUM0QyxLQUFQLENBQWFJLFVBQWIsR0FBMEIsRUFBMUI7QUFFTixVQUFHaEQsTUFBTSxDQUFDaUQsVUFBUCxJQUFxQmpELE1BQU0sQ0FBQ2lELFVBQVAsQ0FBa0JDLGVBQTFDLEVBQ0NILGNBQWMsR0FBRy9DLE1BQU0sQ0FBQ21ELG1CQUFQLGFBQWdDRixVQUFVLENBQUNDLGVBQTNDLGdCQUFnRWxELE1BQU0sQ0FBQ21ELG1CQUF2RSxJQUErRkYsVUFBVSxDQUFDQyxlQUEzSDtBQUVLLFVBQUlsRCxNQUFNLENBQUNrRCxlQUFYLEVBQ0xILGNBQWMsR0FBRy9DLE1BQU0sQ0FBQ21ELG1CQUFQLGFBQWdDbkQsTUFBTSxDQUFDa0QsZUFBdkMsZ0JBQTREbEQsTUFBTSxDQUFDbUQsbUJBQW5FLElBQTJGbkQsTUFBTSxDQUFDa0QsZUFBbkg7QUFFS2xELFlBQU0sQ0FBQzRDLEtBQVAsQ0FBYUksVUFBYixDQUF3QjFDLElBQXhCLEdBQStCeUMsY0FBL0I7QUFDTjs7OytCQUVhO0FBQ1AsVUFBRyxLQUFLeEMsU0FBUixFQUNJZSxnREFBTyxDQUFDOEIsU0FBUixDQUFrQixLQUFLUCxPQUFMLENBQWFRLFNBQWIsQ0FBdUJDLFNBQXZCLENBQWlDcEIsTUFBakMsQ0FBd0NxQixHQUExRCxFQUErRCxFQUEvRCxFQUFtRSxDQUFDLENBQXBFO0FBQ1A7Ozt3QkF6QmU7QUFDWixVQUFHLE9BQU92RCxNQUFNLENBQUNDLE9BQWQsS0FBMEIsV0FBMUIsSUFBeUMsT0FBT0QsTUFBTSxDQUFDQyxPQUFQLENBQWUyQyxLQUF0QixLQUFnQyxXQUE1RSxFQUF5RjtBQUNyRixhQUFLQyxPQUFMLEdBQWU3QyxNQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQTlCO0FBQ0EsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTDs7SUFFcUJqQyxROzs7QUFDcEIsc0JBQWM7QUFBQTs7QUFDUCxTQUFLNkMsV0FBTCxHQUFvQixPQUFPeEQsTUFBTSxDQUFDeUQsZ0JBQWQsS0FBbUMsV0FBcEMsR0FBbUR6RCxNQUFNLENBQUN5RCxnQkFBMUQsR0FBNkUsSUFBaEc7QUFDSDs7OztnQ0FFVztBQUNSLFVBQU1DLGdCQUFnQixHQUFHO0FBQ3JCQyxlQUFPLEVBQUU7QUFDTHJELGNBQUksRUFBRSxLQUFLa0QsV0FETixDQUVMOztBQUZLO0FBRFksT0FBekI7QUFPQXhELFlBQU0sQ0FBQ0MsT0FBUCxHQUFrQkQsTUFBTSxDQUFDQyxPQUFSLEdBQW9CMkQsTUFBTSxDQUFDQyxNQUFQLENBQWNILGdCQUFkLEVBQWdDMUQsTUFBTSxDQUFDQyxPQUF2QyxDQUFwQixHQUFzRXlELGdCQUF2RjtBQUNIOzs7d0JBRW9CO0FBQ2pCLGFBQVEsS0FBS0YsV0FBTCxJQUFvQixLQUFLQSxXQUFMLEtBQXFCLE9BQTFDLEdBQXFELElBQXJELEdBQTRELEtBQW5FO0FBQ0g7Ozt3QkFFZTtBQUVaLGFBQVUsT0FBT00sbUVBQVUsQ0FBQyxLQUFLTixXQUFOLENBQWpCLEtBQXlDLFdBQTFDLElBQ0wsT0FBT00sbUVBQVUsQ0FBQyxLQUFLTixXQUFOLENBQVYsQ0FBNkJPLEVBQXBDLEtBQTRDLFdBRHpDLEdBRUxELG1FQUFVLENBQUMsS0FBS04sV0FBTixDQUFWLENBQTZCTyxFQUZ4QixHQUU2QixJQUZwQztBQUlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qkw7O0lBRXFCQyxHOzs7QUFDakIsaUJBQWM7QUFBQTs7QUFDVmhFLFVBQU0sQ0FBQ2lFLEdBQVAsR0FBYWpFLE1BQU0sQ0FBQ2lFLEdBQVAsSUFBYyxFQUEzQixDQURVLENBQ3FCOztBQUMvQmpFLFVBQU0sQ0FBQ2tFLGVBQVAsR0FBeUJsRSxNQUFNLENBQUNrRSxlQUFQLElBQTBCLElBQW5EO0FBQ0EsU0FBS25FLEtBQUwsR0FBY3VCLGdEQUFPLENBQUNmLFNBQVIsQ0FBa0JQLE1BQU0sQ0FBQ0MsT0FBekIsQ0FBRCxHQUFzQ0QsTUFBTSxDQUFDQyxPQUFQLENBQWVGLEtBQWYsQ0FBcUJvRSxHQUEzRCxHQUFpRSxLQUE5RTtBQUNBLFNBQUtqRSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBSzJDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS3VCLGlCQUFMLEdBQTBCLE9BQU9YLGdCQUFQLEtBQTRCLFdBQTdCLEdBQTRDQSxnQkFBNUMsR0FBK0QsSUFBeEY7QUFDQSxTQUFLWSxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUtDLE1BQUwsR0FBY3RDLFFBQVEsQ0FBQ3VDLElBQXZCO0FBRUEsU0FBS0MsWUFBTDtBQUNIOzs7O21DQU1jO0FBQ1gsVUFBRyxDQUFDbkQsZ0RBQU8sQ0FBQ2YsU0FBUixDQUFrQlAsTUFBTSxDQUFDQyxPQUF6QixDQUFKLEVBQXVDO0FBRXZDRCxZQUFNLENBQUNDLE9BQVAsQ0FBZStELEdBQWYsR0FBcUI7QUFDakJVLGNBQU0sRUFBRyxPQUFPUCxHQUFQLEtBQWUsV0FBaEIsR0FBK0JBLEdBQS9CLEdBQXFDO0FBRDVCLE9BQXJCO0FBR0g7Ozs4QkFFUztBQUNOLFVBQU1RLFNBQVMsR0FBRyxJQUFJQyxlQUFKLENBQW9CNUUsTUFBTSxDQUFDOEIsUUFBUCxDQUFnQitDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxDQUFqQyxDQUFwQixDQUFsQjtBQUNBLFVBQU1DLFNBQVMsR0FBSSxPQUFPL0UsTUFBTSxDQUFDZ0YsVUFBUCxDQUFrQmIsR0FBekIsS0FBaUMsV0FBakMsSUFBZ0QsT0FBT25FLE1BQU0sQ0FBQ2dGLFVBQVAsQ0FBa0JiLEdBQWxCLENBQXNCYyxJQUE3QixLQUFzQyxXQUF2RixHQUFzR2pGLE1BQU0sQ0FBQ2dGLFVBQVAsQ0FBa0JiLEdBQWxCLENBQXNCYyxJQUE1SCxHQUFtSSxJQUFySjtBQUVBRixlQUFTLENBQUNHLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCLFlBQUk3RSxJQUFJLEdBQUc2RSxJQUFJLENBQUM3RSxJQUFMLENBQVU4RSxXQUFWLEVBQVg7QUFDQSxZQUFJM0QsS0FBSyxHQUFHMEQsSUFBSSxDQUFDMUQsS0FBakI7QUFDQWtELGlCQUFTLENBQUNVLEdBQVYsZUFBcUIvRSxJQUFyQixHQUE2Qm1CLEtBQTdCO0FBQ0gsT0FKRDs7QUFNQSxVQUFHekIsTUFBTSxDQUFDQyxPQUFQLENBQWVGLEtBQWYsQ0FBcUJvRSxHQUF4QixFQUE2QjtBQUN6QmhELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsU0FBMUI7QUFDQUQsZUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0MyRCxTQUFsQztBQUNBNUQsZUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NVLFFBQWxDO0FBQ0g7O0FBRUQsVUFBSyxLQUFLNUIsUUFBTCxJQUFpQixDQUFDLEtBQUtLLFNBQXhCLElBQXNDLENBQUN3RSxTQUEzQyxFQUF1RDtBQUV2RC9FLFlBQU0sQ0FBQ0MsT0FBUCxDQUFlK0QsR0FBZixDQUFtQlUsTUFBbkIsQ0FBMEJZLFNBQTFCLENBQW9DLG9DQUFwQztBQUNIOzs7Ozs7Ozs7Ozs7QUFHU0MsbUIsR0FBTXZGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFldUYsWUFBZixHQUNWLHVGQURVLEdBRVYsc0Y7O3VCQUVXQyxLQUFLLENBQUNGLEdBQUQsQ0FBTCxDQUFXRyxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxpQkFBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSVQsS0FBS3hCLGlCOzs7Ozs7Ozs7dUJBRWMsS0FBS3lCLFdBQUwsRTs7O0FBQWpCQyx3QjtBQUNBQyx1QixHQUFVRCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQWIsSUFBSTtBQUFBLHlCQUFJQSxJQUFJLENBQUNjLGdCQUFMLEtBQTBCLEtBQUksQ0FBQzdCLGlCQUFuQztBQUFBLGlCQUFwQixFQUEyRSxDQUEzRSxDO2tEQUNUMkIsT0FBTyxJQUFJLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrRkFHQ0csRzs7Ozs7O0FBQ2JDLDZCLEdBQWdCLENBQUMsYUFBRCxFQUFnQixrQkFBaEIsQztBQUNoQkMsc0IsR0FBU3hDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JxQyxHQUFsQixDO0FBRWZDLDZCQUFhLENBQUNqQixPQUFkLENBQXNCLFVBQUFtQixPQUFPLEVBQUk7QUFDN0IseUJBQU9ELE1BQU0sQ0FBQ0MsT0FBRCxDQUFiO0FBQ0gsaUJBRkQ7a0RBSU9ELE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFJb0IsSTs7dUJBQTRCLEtBQUtFLFVBQUwsRTs7Ozs7b0NBQXZCQyxnQjs7Ozs7Ozs7OzsrQkFBNkMsSTs7O0FBQXZFakMsMkI7QUFDQXlCLHVCLEdBQVVuQyxNQUFNLENBQUM0QyxJQUFQLENBQVlsQyxXQUFaLEVBQXlCbUMsTUFBekIsR0FBa0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlckMsV0FBZixDQUFsQyxHQUFnRSxJOztvQkFFNUV5QixPOzs7Ozs7OztBQUdBLHFCQUFLMUIsY0FBTCxHQUFzQixJQUF0QjtBQUVBLG9CQUFHLEtBQUt0RSxLQUFSLEVBQ0lvQixPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDLHFDQUFtQjJFO0FBQXBCLGlCQUFaO0FBRUoscUJBQUt6QixXQUFMLGFBQXVCeUIsT0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBS0UsS0FBS2EsY0FBTCxFOzs7b0JBQ0YsS0FBS3RDLFc7Ozs7Ozs7O0FBRUgrQix1QixHQUFVcEUsUUFBUSxDQUFDNEUsYUFBVCxDQUF1QixRQUF2QixDO0FBR2hCUix1QkFBTyxDQUFDUyxJQUFSLEdBQWUscUJBQWY7QUFDQVQsdUJBQU8sQ0FBQ1UsU0FBUixHQUFvQixLQUFLekMsV0FBekI7QUFDQSxxQkFBS0MsTUFBTCxDQUFZeUMscUJBQVosQ0FBa0MsV0FBbEMsRUFBK0NYLE9BQS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR1c7QUFDWCxVQUFNQSxPQUFPLEdBQUdwRSxRQUFRLENBQUM0RSxhQUFULENBQXVCLFFBQXZCLENBQWhCO0FBQ0FSLGFBQU8sQ0FBQ1ksR0FBUixHQUFjLDBDQUFkO0FBQ0EsV0FBSzFDLE1BQUwsQ0FBWXlDLHFCQUFaLENBQWtDLFdBQWxDLEVBQStDWCxPQUEvQztBQUNIOzs7eUNBRW9CO0FBQ2pCLFVBQU1BLE9BQU8sR0FBR3BFLFFBQVEsQ0FBQzRFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBaEI7QUFDQSxVQUFNSyxPQUFPLEdBQUcsdUZBQWhCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLHVGQUFmO0FBRUFkLGFBQU8sQ0FBQ1ksR0FBUixHQUFjakgsTUFBTSxDQUFDQyxPQUFQLENBQWV1RixZQUFmLEdBQThCMEIsT0FBOUIsR0FBd0NDLE1BQXREO0FBQ0EsV0FBSzVDLE1BQUwsQ0FBWXlDLHFCQUFaLENBQWtDLFdBQWxDLEVBQStDWCxPQUEvQztBQUNIOzs7OEJBRVM7QUFDTixhQUFPLElBQUllLE9BQUosQ0FBYSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDckMsWUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFQSxZQUFJQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQzdCLGNBQUd6SCxNQUFNLENBQUNtRSxHQUFWLEVBQWU7QUFDWG5FLGtCQUFNLENBQUNDLE9BQVAsQ0FBZStELEdBQWYsQ0FBbUJVLE1BQW5CLEdBQTRCMUUsTUFBTSxDQUFDbUUsR0FBbkM7QUFDQWtELG1CQUFPLENBQUNySCxNQUFNLENBQUNDLE9BQVAsQ0FBZStELEdBQWYsQ0FBbUJVLE1BQXBCLENBQVA7QUFDQWdELHlCQUFhLENBQUNGLFFBQUQsQ0FBYjtBQUNIOztBQUVELGNBQUdELEtBQUssS0FBSyxFQUFiLEVBQWlCO0FBQ2JELGtCQUFNLENBQUMseUJBQUQsQ0FBTjtBQUNBSSx5QkFBYSxDQUFDRixRQUFELENBQWI7QUFDSDs7QUFFREQsZUFBSztBQUNSLFNBYnlCLEVBYXZCLEdBYnVCLENBQTFCO0FBY0gsT0FqQk0sQ0FBUDtBQWtCSDs7Ozs7Ozs7Ozs7b0JBR08sS0FBS25ELGlCOzs7Ozs7Ozs7dUJBQ0gsS0FBS3VELFNBQUwsRTs7O29CQUVGLEtBQUt0RCxjOzs7Ozs7Ozs7dUJBRUgsS0FBS3VELFlBQUwsRTs7Ozt1QkFDQSxLQUFLQyxrQkFBTCxFOzs7O3VCQUNBLEtBQUtDLE9BQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQXBJTTtBQUNaLGFBQVE5SCxNQUFNLENBQUNDLE9BQVAsQ0FBZStELEdBQWYsQ0FBbUJVLE1BQXBCLEdBQThCLElBQTlCLEdBQXFDLEtBQTVDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTDs7SUFFcUJxRCxJOzs7QUFDcEIsa0JBQWM7QUFBQTs7QUFDUCxTQUFLcEgsUUFBTCxHQUFnQixJQUFJQyxpREFBSixFQUFoQjtBQUNBWixVQUFNLENBQUNnSSxVQUFQLEdBQW9CaEksTUFBTSxDQUFDZ0ksVUFBUCxJQUFxQixLQUF6QztBQUNBaEksVUFBTSxDQUFDaUksRUFBUCxHQUFZakksTUFBTSxDQUFDaUksRUFBUCxJQUFhLEVBQXpCO0FBQ0FqSSxVQUFNLENBQUM0QyxLQUFQLEdBQWU1QyxNQUFNLENBQUM0QyxLQUFQLElBQWdCLEVBQS9CO0FBQ0E1QyxVQUFNLENBQUNrSSxnQkFBUCxHQUEwQmxJLE1BQU0sQ0FBQ2tJLGdCQUFQLElBQTJCLEVBQXJEO0FBRUEsU0FBS0MsYUFBTDtBQUNBLFNBQUt4SCxRQUFMLENBQWN5SCxTQUFkO0FBQ0EsU0FBS0MsSUFBTDtBQUNIOzs7O29DQUVlO0FBQ1osVUFBTUMsZUFBZSxHQUFHO0FBQ3BCdkksYUFBSyxFQUFFO0FBQ0h3SSxjQUFJLEVBQUUsS0FESDtBQUVIQyxpQkFBTyxFQUFFLEtBRk47QUFHSHJFLGFBQUcsRUFBRSxLQUhGO0FBSUh6RCxZQUFFLEVBQUU7QUFKRCxTQURhO0FBT3BCOEUsb0JBQVksRUFBR3hGLE1BQU0sQ0FBQ3lJLHNCQUFQLEtBQWtDLEtBQW5DLEdBQTRDLElBQTVDLEdBQW1EO0FBUDdDLE9BQXhCO0FBVUF6SSxZQUFNLENBQUNDLE9BQVAsR0FBa0JELE1BQU0sQ0FBQ0MsT0FBUixHQUFvQjJELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjeUUsZUFBZCxFQUErQnRJLE1BQU0sQ0FBQ0MsT0FBdEMsQ0FBcEIsR0FBcUVxSSxlQUF0RjtBQUNIOzs7NkJBRVFwQyxHLEVBQUs7QUFDVmxHLFlBQU0sQ0FBQ0MsT0FBUCxDQUFlMkMsS0FBZixHQUF1QnNELEdBQXZCO0FBQ0g7OzsyQkFFTSxDQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDTDtBQUNBO0FBQ0E7O0lBRXFCd0MsZTs7O0FBQ25CLDZCQUFjO0FBQUE7O0FBQ1osU0FBSzlGLEtBQUwsR0FBYSxJQUFJK0YsOENBQUosRUFBYjtBQUNBLFNBQUtsSSxFQUFMLEdBQVUsSUFBSW1JLDJDQUFKLEVBQVY7QUFFQTVJLFVBQU0sQ0FBQ2EsU0FBUCxHQUFtQmIsTUFBTSxDQUFDYSxTQUFQLElBQW9CLEVBQXZDO0FBQ0EsU0FBS2QsS0FBTCxHQUFhQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBZixDQUFxQnlJLE9BQWxDO0FBQ0EsU0FBS3RJLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLMkksT0FBTCxHQUFlO0FBQ1hMLGFBQU8sRUFBRSxFQURFO0FBRVhySSxRQUFFLEVBQUU7QUFDQUUsYUFBSyxFQUFFO0FBRFA7QUFGTyxLQUFmO0FBT0EsU0FBS3lJLFdBQUw7QUFDRDs7OztrQ0FFYTtBQUNaLFVBQUcsQ0FBQyxLQUFLbEcsS0FBTCxDQUFXckMsU0FBZixFQUNFO0FBRUYsVUFBTXdJLE1BQU0sR0FBRyxLQUFLbkcsS0FBTCxDQUFXQyxPQUExQjtBQUVBLFdBQUtwQyxFQUFMLENBQVF1SSxTQUFSLENBQWtCLG1CQUFsQixFQUF1Q2hKLE1BQU0sQ0FBQzRDLEtBQVAsQ0FBYUksVUFBYixDQUF3QjFDLElBQS9EO0FBQ0FnQixzREFBTyxDQUFDOEIsU0FBUixDQUFrQjJGLE1BQU0sQ0FBQzFGLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCcEIsTUFBM0IsQ0FBa0MrRyxLQUFwRCxFQUEyRCxJQUEzRCxFQUFpRSxDQUFqRTtBQUNEOzs7NEJBRU81QyxPLEVBQVM7QUFDZixVQUFHLEtBQUtuRyxRQUFSLEVBQ0U7QUFFRixVQUFNZ0osUUFBUSxHQUFHN0MsT0FBTyxDQUFDOEMsT0FBUixDQUFnQkMsVUFBaEIsSUFBOEIsSUFBL0M7QUFDQSxVQUFNQyxRQUFRLEdBQUdoRCxPQUFPLENBQUM4QyxPQUFSLENBQWdCRyxlQUFqQztBQUNBLFVBQU1ySSxLQUFLLEdBQUlvSSxRQUFRLEtBQUssS0FBZCxHQUF1QmhELE9BQU8sQ0FBQzhDLE9BQVIsQ0FBZ0JJLE9BQWhCLEdBQTBCLEtBQUtWLE9BQUwsQ0FBYUwsT0FBYixDQUFxQnZILEtBQXRFLEdBQThFb0YsT0FBTyxDQUFDOEMsT0FBUixDQUFnQkksT0FBNUc7QUFFQSxVQUFNekosSUFBSSxHQUFHO0FBQ1gwSixhQUFLLEVBQUUsVUFESTtBQUVYQyx5QkFBaUIsRUFBRSxLQUFLWixPQUFMLENBQWFMLE9BQWIsQ0FBcUJsSSxJQUY3QjtBQUdYb0osb0JBQVksRUFBRXJELE9BQU8sQ0FBQzhDLE9BQVIsQ0FBZ0JRLFFBQWhCLElBQTRCM0ksTUFIL0I7QUFJWDRJLHNCQUFjLEVBQUUzSSxLQUpMO0FBS1g0SSxxQkFBYSxFQUFFLENBTEo7QUFNWEMseUJBQWlCLEVBQUU7QUFOUixPQUFiO0FBU0EsVUFBSVosUUFBSixFQUNJLEtBQUt0RyxLQUFMLENBQVdzRyxRQUFYO0FBRUosV0FBS2EsWUFBTCxDQUFrQmpLLElBQWxCO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQU1nSCxJQUFJLEdBQU0sT0FBTzlHLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkMsS0FBdEIsS0FBZ0MsV0FBaEMsSUFBK0MsT0FBTzVDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkMsS0FBZixDQUFxQm9ILFdBQTVCLEtBQTRDLFdBQTVGLElBQTRHaEssTUFBTSxDQUFDQyxPQUFQLENBQWUyQyxLQUFmLENBQXFCb0gsV0FBbkksR0FDVGhLLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkMsS0FBZixDQUFxQm9ILFdBQXJCLENBQWlDNUUsV0FBakMsRUFEUyxHQUVULFNBRko7O0FBSUEsY0FBUTBCLElBQVI7QUFDRSxhQUFLLFVBQUw7QUFDRSxlQUFLK0IsT0FBTCxDQUFhTCxPQUFiLENBQXFCbEksSUFBckIsR0FBNEIsZ0JBQTVCO0FBQ0EsZUFBS3VJLE9BQUwsQ0FBYUwsT0FBYixDQUFxQnZILEtBQXJCLEdBQTZCLGFBQTdCO0FBQ0EsZUFBSzRILE9BQUwsQ0FBYTFJLEVBQWIsQ0FBZ0JFLEtBQWhCLENBQXNCQyxJQUF0QixHQUE2QixrQkFBN0I7QUFDQTs7QUFDRixhQUFLLFdBQUw7QUFDRSxlQUFLdUksT0FBTCxDQUFhTCxPQUFiLENBQXFCbEksSUFBckIsR0FBNEIsb0JBQTVCO0FBQ0EsZUFBS3VJLE9BQUwsQ0FBYUwsT0FBYixDQUFxQnZILEtBQXJCLEdBQTZCLGNBQTdCO0FBQ0EsZUFBSzRILE9BQUwsQ0FBYTFJLEVBQWIsQ0FBZ0JFLEtBQWhCLENBQXNCQyxJQUF0QixHQUE2QixvQkFBN0I7QUFDQTs7QUFDRixhQUFLLFNBQUw7QUFDRSxlQUFLdUksT0FBTCxDQUFhTCxPQUFiLENBQXFCbEksSUFBckIsR0FBNEIsU0FBNUI7QUFDQSxlQUFLdUksT0FBTCxDQUFhTCxPQUFiLENBQXFCdkgsS0FBckIsR0FBNkIsY0FBN0I7QUFDQSxlQUFLNEgsT0FBTCxDQUFhMUksRUFBYixDQUFnQkUsS0FBaEIsQ0FBc0JDLElBQXRCLEdBQTZCLHNCQUE3QjtBQUNBO0FBZko7QUFpQkQ7OzttQ0FFdUI7QUFBQSxVQUFYUixJQUFXLHVFQUFKLEVBQUk7O0FBQ3RCLFVBQUk4RCxNQUFNLENBQUM0QyxJQUFQLENBQVkxRyxJQUFaLEVBQWtCMkcsTUFBdEIsRUFBOEI7QUFDNUI1RixpQkFBUyxDQUFDUSxJQUFWLENBQWV2QixJQUFmO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZIO0FBQ0E7QUFDQTtBQUNBOztJQUVxQm1LLFU7OztBQUNwQix3QkFBYztBQUFBOztBQUFBOztBQUNkLFNBQUtySCxLQUFMLEdBQWEsSUFBSStGLDhDQUFKLEVBQWI7QUFDQSxTQUFLbEksRUFBTCxHQUFVLElBQUlpSSxtREFBSixFQUFWO0FBQ0EsU0FBS3pFLEdBQUwsR0FBVyxJQUFJaUcsNENBQUosRUFBWDtBQUNBLFNBQUtDLEVBQUwsR0FBVSxJQUFJQywyQ0FBSixDQUFhLEtBQUszSixFQUFMLENBQVFvSSxPQUFSLENBQWdCMUksRUFBN0IsQ0FBVjtBQUVBLFNBQUtKLEtBQUwsR0FBYUMsTUFBTSxDQUFDQyxPQUFQLENBQWVGLEtBQWYsQ0FBcUJ5SSxPQUFsQztBQUNBLFNBQUs2QixNQUFMLEdBQWNySyxNQUFNLENBQUNDLE9BQVAsQ0FBZXVGLFlBQWYsR0FBOEIsMEJBQTlCLEdBQTJELDhCQUF6RTtBQUNBLFNBQUs4RSxtQkFBTCxDQUF5QixZQUFNO0FBQzlCLFdBQUksQ0FBQ2pDLElBQUw7QUFDQSxLQUZEO0FBSUFySSxVQUFNLENBQUNpSyxVQUFQLEdBQW9CLElBQXBCO0FBRUFqSyxVQUFNLENBQUNDLE9BQVAsQ0FBZXNLLE9BQWYsR0FBeUI7QUFDeEJGLFlBQU0sRUFBRSxLQUFLQSxNQURXO0FBRXhCNUosUUFBRSxFQUFFLEtBQUtBLEVBQUwsQ0FBUW9JO0FBRlksS0FBekI7QUFJRTs7Ozt3Q0FFbUIyQixRLEVBQVU7QUFDOUIsVUFBSUMsZ0JBQWdCLEdBQUc7QUFDdEJDLGdCQUFRLEVBQUUsU0FEWTtBQUV0QkMsa0JBQVUsRUFBRSxFQUZVO0FBR3RCQyxlQUFPLEVBQUUsSUFIYTtBQUl0QkMsb0JBQVksRUFBRSxPQUFPcEgsZ0JBQVAsS0FBNEIsV0FBNUIseUJBQXlEQSxnQkFBekQsSUFBOEUsb0JBSnRFO0FBS3RCcUgsYUFBSyxFQUFFLDJCQUxlO0FBTXRCQyxtQkFBVyxFQUFFLElBTlM7QUFPdEJDLGVBQU8sRUFBRSxFQVBhO0FBUXRCQyxlQUFPLEVBQUUsRUFSYTtBQVN0QkMsZUFBTyxFQUFFLEVBVGE7QUFVdEJDLGdCQUFRLEVBQUUsRUFWWTtBQVd0QkMsZ0JBQVEsRUFBRSxFQVhZO0FBWXRCQyxnQkFBUSxFQUFFLEVBWlk7QUFhdEJDLGlCQUFTLEVBQUUsRUFiVztBQWN0QkMsaUJBQVMsRUFBRSxFQWRXO0FBZXRCQyxpQkFBUyxFQUFFO0FBZlcsT0FBdkI7QUFrQkFmLHNCQUFnQixDQUFDZ0IsYUFBakIsR0FBaUMsS0FBakM7QUFDQWhCLHNCQUFnQixDQUFDaUIsU0FBakIsR0FBNkIsWUFBN0I7QUFDQWpCLHNCQUFnQixDQUFDa0IsWUFBakIsR0FBZ0MscUJBQWhDO0FBRUEzTCxZQUFNLENBQUNnRixVQUFQLEdBQXFCaEYsTUFBTSxDQUFDZ0YsVUFBUixHQUF1QnBCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0I0RyxnQkFBbEIsRUFBb0N6SyxNQUFNLENBQUNnRixVQUEzQyxDQUF2QixHQUFnRnlGLGdCQUFwRztBQUNBekssWUFBTSxDQUFDZ0YsVUFBUCxDQUFrQjRHLFFBQWxCLGFBQWdDNUwsTUFBTSxDQUFDZ0YsVUFBUCxDQUFrQjJHLFlBQWxELHdCQUEyRSxLQUFLRSxtQkFBTCxFQUEzRSxpS0FBK083TCxNQUFNLENBQUNnRixVQUFQLENBQWtCK0YsV0FBalEsaUJBQWtSL0ssTUFBTSxDQUFDZ0YsVUFBUCxDQUFrQjBHLFNBQXBTO0FBRUEsVUFBRzFMLE1BQU0sQ0FBQ2dGLFVBQVAsQ0FBa0J5RyxhQUFyQixFQUNDLEtBQUtLLGNBQUw7QUFFRCxVQUFHLEtBQUsvTCxLQUFSLEVBQ0MsS0FBS2dNLHdCQUFMO0FBRUR2QixjQUFRO0FBQ1I7OztxQ0FFZ0I7QUFDaEIsVUFBR3hLLE1BQU0sQ0FBQ2dGLFVBQVYsRUFBc0I7QUFDckJoRixjQUFNLENBQUNnRixVQUFQLENBQWtCNEcsUUFBbEIsR0FBNkIsRUFBN0I7QUFDQTtBQUNEOzs7K0NBRTBCO0FBQzFCLFVBQUkxRixHQUFHLEdBQUcsRUFBVjtBQUNBQSxTQUFHLENBQUM4RSxPQUFKLEdBQWMscUNBQWQ7QUFDQTlFLFNBQUcsQ0FBQytFLE9BQUosR0FBYyxxQ0FBZDtBQUNBL0UsU0FBRyxDQUFDZ0YsT0FBSixHQUFjLHVCQUFkO0FBQ0FoRixTQUFHLENBQUNpRixRQUFKLEdBQWUscUNBQWY7QUFDQWpGLFNBQUcsQ0FBQ2tGLFFBQUosR0FBZSxxQ0FBZjtBQUNBbEYsU0FBRyxDQUFDbUYsUUFBSixHQUFlLHVCQUFmO0FBQ0FuRixTQUFHLENBQUNvRixTQUFKLEdBQWdCLHFDQUFoQjtBQUNBcEYsU0FBRyxDQUFDcUYsU0FBSixHQUFnQixxQ0FBaEI7QUFDQXJGLFNBQUcsQ0FBQ3NGLFNBQUosR0FBZ0IsdUJBQWhCO0FBRUF4TCxZQUFNLENBQUNnRixVQUFQLEdBQW9CcEIsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQjdELE1BQU0sQ0FBQ2dGLFVBQXpCLEVBQXFDa0IsR0FBckMsQ0FBcEI7QUFDQTs7O2lDQUVhO0FBQ2QsV0FBSzhGLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsV0FBbEIsQ0FBOEIsVUFBOUIsRUFBMEMsUUFBMUMsRUFBb0QsV0FBcEQ7QUFDQSxXQUFLRixNQUFMLENBQVlDLEtBQVosQ0FBa0JDLFdBQWxCLENBQThCLFVBQTlCLEVBQTBDLE9BQTFDLEVBQW1ELFdBQW5EO0FBQ0EsV0FBS0YsTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxXQUFsQixDQUE4QixPQUE5QixFQUF1QyxNQUF2QyxFQUErQyxXQUEvQztBQUNFOzs7bUNBRWM7QUFDaEIsV0FBS0MsS0FBTCxHQUFhbEssUUFBUSxDQUFDbUssYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0U7OztxQ0FFZ0I7QUFDbEIsV0FBS0MsWUFBTDtBQUVBLFVBQUcsS0FBS0YsS0FBUixFQUNDLEtBQUtBLEtBQUwsQ0FBV0csTUFBWDtBQUVELFVBQU1DLFVBQVUsR0FBR3RLLFFBQVEsQ0FBQ3VLLGdCQUFULENBQTBCLDRDQUExQixDQUFuQjtBQUVBRCxnQkFBVSxDQUFDckgsT0FBWCxDQUFtQixVQUFBbUIsT0FBTyxFQUFJO0FBQzVCQSxlQUFPLENBQUNpRyxNQUFSO0FBQ0QsT0FGRDtBQUdFOzs7cUNBRWdCO0FBQUE7O0FBQ2xCLFdBQUtOLE1BQUwsR0FBYy9KLFFBQVEsQ0FBQ3dLLElBQXZCO0FBQ0csV0FBS0MsVUFBTDtBQUNBLFdBQUtDLGNBQUw7QUFDSCxXQUFLWCxNQUFMLENBQVlZLGtCQUFaLENBQStCLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpEO0FBQ0EsV0FBS2IsTUFBTCxDQUFZWSxrQkFBWixDQUErQixXQUEvQixFQUE0QyxLQUFLbEMsUUFBakQ7QUFDQSxXQUFLb0Msc0JBQUw7O0FBRUcsVUFBRzlNLE1BQU0sQ0FBQytNLFVBQVAsQ0FBa0IscUJBQWxCLEVBQXlDQyxPQUE1QyxFQUFxRDtBQUNqRGhOLGNBQU0sQ0FBQ2lOLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDcEMsZ0JBQUksQ0FBQ0gsc0JBQUw7QUFDSCxTQUZEO0FBR047O0FBRUQsV0FBS3JNLEVBQUwsQ0FBUXlNLFdBQVI7QUFDRTs7OzZDQUV3QjtBQUFBOztBQUMxQixXQUFLYixZQUFMO0FBQ0EsV0FBS2MsU0FBTCxHQUFpQixLQUFLaEIsS0FBTCxDQUFXQyxhQUFYLENBQXlCLG1CQUF6QixDQUFqQjtBQUVBZ0IsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2hCLFlBQU1DLFlBQVksR0FBR3JOLE1BQU0sQ0FBQ3NOLFdBQVAsR0FBcUIsQ0FBMUM7QUFDQSxZQUFNQyxlQUFlLEdBQUcsTUFBSSxDQUFDSixTQUFMLENBQWVLLFlBQXZDO0FBQ00sWUFBTUMsVUFBVSxHQUFJek4sTUFBTSxDQUFDK00sVUFBUCxDQUFrQixxQkFBbEIsRUFBeUNDLE9BQTFDLEdBQ2pCVSxJQUFJLENBQUNDLEdBQUwsQ0FBVU4sWUFBWSxHQUFDLENBQXZCLENBRGlCLEdBRWpCSyxJQUFJLENBQUNDLEdBQUwsQ0FBVU4sWUFBWSxHQUFDLENBQXZCLENBRkY7QUFHTixZQUFNTyxrQkFBa0IsR0FBSVAsWUFBWSxHQUFHRSxlQUEzQztBQUVBLGNBQUksQ0FBQ3BCLEtBQUwsQ0FBV0YsS0FBWCxDQUFpQjRCLEdBQWpCLGFBQTBCSixVQUExQjtBQUNBLGNBQUksQ0FBQ3RCLEtBQUwsQ0FBV0YsS0FBWCxDQUFpQjZCLE9BQWpCLEdBQTJCLENBQTNCO0FBQ0EsY0FBSSxDQUFDM0IsS0FBTCxDQUFXRixLQUFYLENBQWlCOEIsTUFBakIsR0FBMEIsVUFBMUI7O0FBRUEsY0FBSSxDQUFDQyxRQUFMLENBQWNQLFVBQWQsRUFBMEJHLGtCQUExQjs7QUFDQSxjQUFJLENBQUNLLFFBQUwsQ0FBY1IsVUFBZCxFQUEwQkcsa0JBQTFCOztBQUNBLGNBQUksQ0FBQ00sWUFBTDs7QUFFQSxjQUFJLENBQUMvRCxFQUFMLENBQVFnRSxZQUFSO0FBQ0EsT0FqQlMsRUFpQlAsSUFqQk8sQ0FBVjtBQWtCRTs7O21DQUVjO0FBQUE7O0FBQ2hCLFVBQU1DLFlBQVksR0FBRyxLQUFLakIsU0FBTCxDQUFlWCxnQkFBZixDQUFnQyxHQUFoQyxDQUFyQjtBQUVBNEIsa0JBQVksQ0FBQ2xKLE9BQWIsQ0FBcUIsVUFBQW1CLE9BQU8sRUFBSTtBQUMvQkEsZUFBTyxDQUFDNEcsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBU29CLEdBQVQsRUFBYztBQUN0Q0EsYUFBRyxDQUFDQyxjQUFKO0FBQ0EsY0FBTUMsT0FBTyxHQUFHQyxPQUFPLENBQUNuSSxPQUFPLENBQUM4QyxPQUFSLENBQWdCb0YsT0FBakIsQ0FBUCxJQUFvQyxLQUFwRDtBQUNULGNBQU1oSixHQUFHLEdBQUdjLE9BQU8sQ0FBQ29JLFlBQVIsQ0FBcUIsTUFBckIsS0FBZ0MsS0FBNUM7QUFDQSxjQUFNQyxRQUFRLEdBQUluSixHQUFELEdBQVFBLEdBQUcsQ0FBQ0gsV0FBSixHQUFrQnVKLFFBQWxCLENBQTJCLFdBQTNCLENBQVIsR0FBa0QsS0FBbkU7QUFDQSxjQUFNQyxRQUFRLEdBQUd2SSxPQUFPLENBQUM4QyxPQUFSLENBQWdCMEYsVUFBaEIsSUFBOEIsSUFBL0M7QUFFQSxlQUFLcE8sRUFBTCxDQUFRcU8sT0FBUixDQUFnQnpJLE9BQWhCO0FBRUEsY0FBRyxDQUFDa0ksT0FBRCxJQUFZRyxRQUFmLEVBQ0MsS0FBS3pLLEdBQUwsQ0FBUzhLLE9BQVQ7O0FBRVEsY0FBSXhKLEdBQUcsSUFBSSxDQUFDbUosUUFBWixFQUFzQjtBQUNsQnRCLHNCQUFVLENBQUMsWUFBVztBQUNsQndCLHNCQUFRLEdBQUk1TyxNQUFNLENBQUM4QixRQUFQLENBQWdCa04sSUFBaEIsR0FBdUJ6SixHQUEzQixHQUFrQ3ZGLE1BQU0sQ0FBQ2lQLElBQVAsQ0FBWTFKLEdBQVosQ0FBMUM7QUFDSCxhQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUFDVixTQWpCaUMsQ0FpQmhDMkosSUFqQmdDLENBaUIzQixNQWpCMkIsQ0FBbEM7QUFrQkEsT0FuQkQ7QUFvQkU7Ozs2QkFFUXpCLFUsRUFBWUcsa0IsRUFBb0I7QUFDMUMsVUFBSXVCLE1BQU0sR0FBRzFCLFVBQWI7QUFFQXpOLFlBQU0sQ0FBQ2lOLGdCQUFQLENBQ0MsT0FERCxFQUVDLFVBQVNvQixHQUFULEVBQWM7QUFDWixZQUFNZSxJQUFJLEdBQUczQixVQUFVLEdBQUcsR0FBMUI7QUFDQSxZQUFNNEIsVUFBVSxHQUFHLEVBQW5COztBQUVBLFlBQUloQixHQUFHLENBQUNpQixNQUFKLElBQWMsQ0FBbEIsRUFBcUI7QUFDdEIsY0FBTUMsS0FBSyxHQUFHSixNQUFNLEdBQUdDLElBQUksR0FBR0MsVUFBOUI7QUFDQUYsZ0JBQU0sR0FBR0ksS0FBSyxHQUFHM0Isa0JBQVIsR0FBNkJBLGtCQUE3QixHQUFrRDJCLEtBQTNEO0FBRUEsZUFBS3BELEtBQUwsQ0FBV0YsS0FBWCxDQUFpQjRCLEdBQWpCLGFBQTBCc0IsTUFBMUI7QUFDRTs7QUFFRCxZQUFJZCxHQUFHLENBQUNpQixNQUFKLElBQWMsQ0FBQyxDQUFuQixFQUFzQjtBQUN2QixjQUFNQyxNQUFLLEdBQUdKLE1BQU0sR0FBR0MsSUFBSSxHQUFHQyxVQUE5Qjs7QUFDQUYsZ0JBQU0sR0FBR0ksTUFBSyxHQUFHOUIsVUFBUixHQUFxQkEsVUFBckIsR0FBa0M4QixNQUEzQztBQUVBLGVBQUtwRCxLQUFMLENBQVdGLEtBQVgsQ0FBaUI0QixHQUFqQixhQUEwQnNCLE1BQTFCO0FBQ0U7QUFDRixPQWpCRCxDQWlCRUQsSUFqQkYsQ0FpQk8sSUFqQlAsQ0FGRDtBQXFCRTs7OzZCQUVRekIsVSxFQUFZRyxrQixFQUFvQjtBQUN2QyxVQUFJdUIsTUFBTSxHQUFHMUIsVUFBYjtBQUNBLFVBQUkrQixXQUFXLEdBQUcsQ0FBbEI7QUFDQSxVQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFFSHpQLFlBQU0sQ0FBQ2lOLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLFVBQVNvQixHQUFULEVBQWM7QUFDN0NtQixtQkFBVyxHQUFHbkIsR0FBRyxDQUFDcUIsY0FBSixDQUFtQixDQUFuQixFQUFzQkMsT0FBcEM7QUFDTixPQUZEO0FBSUEzUCxZQUFNLENBQUNpTixnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFTb0IsR0FBVCxFQUFjO0FBQzVDLFlBQU1nQixVQUFVLEdBQUcsRUFBbkI7QUFDQUksaUJBQVMsR0FBR3BCLEdBQUcsQ0FBQ3FCLGNBQUosQ0FBbUIsQ0FBbkIsRUFBc0JDLE9BQWxDOztBQUVBLFlBQUlGLFNBQVMsR0FBR0QsV0FBaEIsRUFBNkI7QUFDekIsY0FBTUksSUFBSSxHQUFHbEMsSUFBSSxDQUFDQyxHQUFMLENBQVM2QixXQUFULElBQXdCOUIsSUFBSSxDQUFDQyxHQUFMLENBQVM4QixTQUFULENBQXJDO0FBQ0EsY0FBTUYsS0FBSyxHQUFHSixNQUFNLEdBQUdTLElBQXZCO0FBQ0FULGdCQUFNLEdBQUdJLEtBQUssR0FBRzNCLGtCQUFSLEdBQTZCQSxrQkFBN0IsR0FBa0QyQixLQUEzRDtBQUVBLGVBQUtwRCxLQUFMLENBQVdGLEtBQVgsQ0FBaUI0QixHQUFqQixhQUEwQnNCLE1BQTFCO0FBQ0g7O0FBRUQsWUFBSU0sU0FBUyxHQUFHRCxXQUFoQixFQUE2QjtBQUN6QixjQUFNSSxLQUFJLEdBQUdILFNBQVMsR0FBR0QsV0FBekI7O0FBQ0EsY0FBTUQsT0FBSyxHQUFHSixNQUFNLEdBQUdTLEtBQXZCOztBQUNOVCxnQkFBTSxHQUFHSSxPQUFLLEdBQUc5QixVQUFSLEdBQXFCQSxVQUFyQixHQUFrQzhCLE9BQTNDO0FBRUEsZUFBS3BELEtBQUwsQ0FBV0YsS0FBWCxDQUFpQjRCLEdBQWpCLGFBQTBCc0IsTUFBMUI7QUFDRztBQUNQLE9BbkJvQyxDQW1CbkNELElBbkJtQyxDQW1COUIsSUFuQjhCLENBQXJDO0FBb0JFOzs7MENBRThCO0FBQUEsVUFBWHBJLElBQVcsdUVBQUosRUFBSTtBQUNoQyxVQUFNK0ksMEJBQTBCLEdBQUc3UCxNQUFNLENBQUN5SSxzQkFBUCxLQUFrQyxLQUFsQyxHQUEwQyxrRUFBMUMsR0FBK0cscUVBQWxKO0FBQ0EsVUFBTXFILEdBQUcsR0FBR2hPLFFBQVEsQ0FBQ2tOLElBQXJCO0FBQ0EsVUFBTWUsU0FBUyxHQUFHL1AsTUFBTSxDQUFDQyxPQUFQLENBQWUyQyxLQUFmLENBQXFCUyxTQUFyQixDQUErQjJNLFlBQS9CLE1BQWlELElBQW5FO0FBQ0EsVUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxVQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsVUFBRyxDQUFDLEtBQUtuUSxLQUFOLElBQWUsS0FBSzZDLEtBQUwsQ0FBV3JDLFNBQTdCLEVBQXdDO0FBQ3ZDMlAsaUJBQVMsR0FBR0Msa0JBQWtCLENBQzdCTiwwQkFBMEIsR0FBRyxpQkFBN0IsR0FBa0QsS0FBS2pOLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQlEsU0FBbkIsQ0FBNkIrTSxnQkFBN0IsRUFBbEQsR0FDRSxhQURGLEdBQ2tCTCxTQURsQixHQUVFLHFCQUZGLEdBRTBCL1AsTUFBTSxDQUFDeUksc0JBRmpDLEdBR0UsZUFIRixHQUdvQixLQUFLN0YsS0FBTCxDQUFXQyxPQUFYLENBQW1CUSxTQUFuQixDQUE2QmdOLGNBQTdCLEVBSHBCLEdBSUUsY0FKRixHQUltQlAsR0FMVSxDQUE5Qjs7QUFRQSxZQUFHaEosSUFBSSxLQUFLLFVBQVosRUFBd0I7QUFDdkJtSixhQUFHLGFBQU0sS0FBSzVGLE1BQVgsc0JBQTZCMEYsU0FBN0Isa0JBQThDRyxTQUE5QyxDQUFIO0FBQ0EsU0FGRCxNQUVPO0FBQ05ELGFBQUcsYUFBTSxLQUFLNUYsTUFBWCxtQkFBMEIwRixTQUExQixrQkFBMkNHLFNBQTNDLENBQUg7QUFDQTtBQUNEOztBQUVELGFBQU9ELEdBQVA7QUFDQTs7OzJCQXdEUTtBQUFBOztBQUNOLFVBQU1LLFVBQVUsR0FBSXRRLE1BQU0sQ0FBQ2dGLFVBQVAsSUFBcUJoRixNQUFNLENBQUNnRixVQUFQLENBQWtCc0wsVUFBeEMsR0FBc0R0USxNQUFNLENBQUNnRixVQUFQLENBQWtCc0wsVUFBbEIsR0FBK0IsSUFBckYsR0FBNEYsQ0FBL0c7QUFFRmxELGdCQUFVLENBQUMsWUFBSztBQUNmLGNBQUksQ0FBQ21ELGNBQUw7QUFDQSxPQUZTLEVBRVBELFVBRk8sQ0FBVjtBQUdFOzs7d0JBNURrQjtBQUNwQixhQUFPdFEsTUFBTSxDQUFDZ0YsVUFBZDtBQUNFOzs7d0JBRWM7QUFDaEIsVUFBTTBGLFFBQVEsNENBQ2MsS0FBSzhGLFlBQUwsQ0FBa0IzRixZQURoQyxnSEFJVixLQUFLMkYsWUFBTCxDQUFrQjFGLEtBSlIsMEZBT0MsS0FBSzBGLFlBQUwsQ0FBa0J0RixPQVBuQix5SkFPK0osS0FBS3NGLFlBQUwsQ0FBa0J6RixXQVBqTCxnRUFTUSxLQUFLeUYsWUFBTCxDQUFrQnhGLE9BVDFCLDJFQVVRLEtBQUt3RixZQUFMLENBQWtCdkYsT0FWMUIscUVBV0UsS0FBS3VGLFlBQUwsQ0FBa0J4RixPQVhwQixtSEFlaUNoTCxNQUFNLENBQUNnRixVQUFQLENBQWtCeUcsYUFBbEIsR0FBa0MsU0FBbEMsR0FBOEMsRUFmL0UsMEJBZ0JSLEtBQUsrRSxZQUFMLENBQWtCNUUsUUFoQlYsNkZBbUJDLEtBQUs0RSxZQUFMLENBQWtCbkYsUUFuQm5CLGlKQW1CMEosS0FBS21GLFlBQUwsQ0FBa0J6RixXQW5CNUssZ0VBcUJRLEtBQUt5RixZQUFMLENBQWtCckYsUUFyQjFCLDJFQXNCUSxLQUFLcUYsWUFBTCxDQUFrQnBGLFFBdEIxQixxRUF1QkUsS0FBS29GLFlBQUwsQ0FBa0JyRixRQXZCcEIsbUlBNEJDLEtBQUtxRixZQUFMLENBQWtCaEYsU0E1Qm5CLGlKQTRCMkosS0FBS2dGLFlBQUwsQ0FBa0J6RixXQTVCN0ssZ0VBOEJRLEtBQUt5RixZQUFMLENBQWtCbEYsU0E5QjFCLDJFQStCUSxLQUFLa0YsWUFBTCxDQUFrQmpGLFNBL0IxQixxRUFnQ0UsS0FBS2lGLFlBQUwsQ0FBa0JsRixTQWhDcEIsc0ZBQWQ7QUF3Q0EsYUFBT1osUUFBUDtBQUNFOzs7d0JBRWlCO0FBQ2pCO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xUSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTNDLElBQUksR0FBRyxJQUFJMEksNkNBQUosRUFBYjtBQUNBLElBQU1oUSxFQUFFLEdBQUcsSUFBSW1JLDJDQUFKLEVBQVg7QUFFQW5JLEVBQUUsQ0FBQ2lRLGFBQUg7QUFFQTlOLEtBQUssQ0FBQytOLGFBQU4sR0FBc0IsSUFBdEI7QUFDQS9OLEtBQUssQ0FBQ29ILFdBQU4sR0FBb0IsSUFBcEI7QUFDQXBILEtBQUssQ0FBQ1MsU0FBTixHQUFrQjtBQUNqQnVOLGtCQUFnQixFQUFFLGFBREQ7QUFFakJDLGtDQUFnQyxFQUFFLDZCQUZqQjtBQUdqQkMsdUNBQXFDLEVBQUUseUJBSHRCO0FBSWpCQyx5QkFBdUIsRUFBRSxLQUpSO0FBS2pCek4sV0FBUyxFQUFFO0FBQ1ZwQixVQUFNLEVBQUU7QUFDUDhPLFVBQUksRUFBRSxPQURDO0FBRVB6TixTQUFHLEVBQUUsTUFGRTtBQUdQMEYsV0FBSyxFQUFFLFFBSEE7QUFJUGdJLGNBQVEsRUFBRSxlQUpIO0FBS1BDLHVCQUFpQixFQUFFLHdCQUxaO0FBTVBDLHFCQUFlLEVBQUUsZ0JBTlY7QUFPUEMscUJBQWUsRUFBRTtBQVBWLEtBREU7QUFVVkMsWUFBUSxFQUFFO0FBQ1RDLHFCQUFlLEVBQUUsVUFEUjtBQUVUQyxVQUFJLEVBQUU7QUFGRyxLQVZBO0FBY1ZDLFFBQUksRUFBRTtBQUNMQyxrQkFBWSxFQUFFLGNBRFQ7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQLEtBZEk7QUFrQlZDLFFBQUksRUFBRTtBQUNMQyxRQUFFLEVBQUUsV0FEQztBQUVMWCxjQUFRLEVBQUUsbUJBRkw7QUFHTFksV0FBSyxFQUFFO0FBSEY7QUFsQkksR0FMTTtBQTZCakJDLHFCQUFtQixFQUFFLCtCQUFXO0FBQy9CLFdBQU85UixNQUFNLENBQUMrUixpQkFBUCxHQUEyQixJQUEzQixHQUFrQyxLQUF6QztBQUNBLEdBL0JnQjtBQWdDakJDLGtCQUFnQixFQUFFLDRCQUFXO0FBQzVCLFFBQUlwUCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0J1TixnQkFBaEIsQ0FBaUNxQixPQUFqQyxDQUF5Q3JQLEtBQUssQ0FBQytPLElBQU4sQ0FBV08sc0JBQVgsQ0FBa0N0UCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcU8sSUFBMUIsQ0FBK0JWLFFBQWpFLENBQXpDLElBQXVILENBQUMsQ0FBNUgsRUFBK0g7QUFDOUgzUCxzREFBTyxDQUFDOEIsU0FBUixDQUFrQlIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDK08sUUFBbkQsRUFBNkRyTyxLQUFLLENBQUMrTyxJQUFOLENBQVdPLHNCQUFYLENBQWtDdFAsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnFPLElBQTFCLENBQStCVixRQUFqRSxDQUE3RCxFQUF5SSxDQUF6STtBQUNBLGFBQU9yTyxLQUFLLENBQUMrTyxJQUFOLENBQVdPLHNCQUFYLENBQWtDdFAsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnFPLElBQTFCLENBQStCVixRQUFqRSxDQUFQO0FBQ0E7O0FBQ0QsUUFBSXJPLEtBQUssQ0FBQytPLElBQU4sQ0FBV08sc0JBQVgsQ0FBa0N0UCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcU8sSUFBMUIsQ0FBK0JWLFFBQWpFLEtBQThFLE9BQWxGLEVBQTJGO0FBQzFGM1Asc0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQytPLFFBQW5ELEVBQTZELEVBQTdELEVBQWlFLENBQUMsQ0FBbEU7QUFDQTs7QUFDRCxRQUFJM1AsZ0RBQU8sQ0FBQzZRLFNBQVIsQ0FBa0J2UCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUMrTyxRQUFuRCxDQUFKLEVBQWtFO0FBQ2pFLGFBQU8zUCxnREFBTyxDQUFDNlEsU0FBUixDQUFrQnZQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQytPLFFBQW5ELENBQVA7QUFDQTs7QUFBQTtBQUNELFdBQU9yTyxLQUFLLENBQUNTLFNBQU4sQ0FBZ0J1TixnQkFBaEIsQ0FBaUNxQixPQUFqQyxDQUF5Q2pTLE1BQU0sQ0FBQ3lJLHNCQUFoRCxJQUEwRSxDQUFDLENBQTNFLEdBQStFekksTUFBTSxDQUFDeUksc0JBQXRGLEdBQStHLEtBQXRIO0FBQ0EsR0E1Q2dCO0FBNkNqQjJKLHNCQUFvQixFQUFFLGdDQUFXO0FBQ2hDLFdBQU9wUyxNQUFNLENBQUNxUyxpQkFBZDtBQUNBLEdBL0NnQjtBQWdEakJDLGtCQUFnQixFQUFFLDRCQUFXO0FBQzVCLFdBQU90UyxNQUFNLENBQUNzUyxnQkFBUCxHQUEwQixJQUExQixHQUFpQyxLQUF4QztBQUNBLEdBbERnQjtBQW1EakJqQyxnQkFBYyxFQUFFLDBCQUFXO0FBQzFCLFFBQUksQ0FBQ3JRLE1BQU0sQ0FBQ3lELGdCQUFaLEVBQTZCO0FBQzVCaEQsUUFBRSxDQUFDOFIsY0FBSCxDQUFrQiwrQkFBbEIsRUFBbUR2UyxNQUFNLENBQUM4QixRQUFQLENBQWdCa04sSUFBbkU7QUFDQTtBQUNBOztBQUNELFdBQU9oUCxNQUFNLENBQUN5RCxnQkFBZDtBQUNBLEdBekRnQjtBQTBEakJ1TSxjQUFZLEVBQUUsd0JBQVc7QUFDeEIsUUFBSWpNLEVBQUUsR0FBRyxNQUFUOztBQUVBLFFBQUduQixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JnTixjQUFoQixPQUFxQyxRQUFyQyxJQUNDek4sS0FBSyxDQUFDUyxTQUFOLENBQWdCZ04sY0FBaEIsT0FBcUMsT0FEdEMsSUFFQ3pOLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLE9BQXFDLE9BRnRDLElBR0N6TixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JnTixjQUFoQixPQUFxQyxRQUh0QyxJQUlDek4sS0FBSyxDQUFDUyxTQUFOLENBQWdCZ04sY0FBaEIsT0FBcUMsZUFKekMsRUFJeUQ7QUFDeEQsYUFBT3RNLEVBQUUsR0FBRyxNQUFaO0FBQ0E7O0FBQ0QsUUFBSW5CLEtBQUssQ0FBQytPLElBQU4sQ0FBV2EsU0FBWCxNQUEwQjVQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLE9BQXFDLE9BQW5FLEVBQTJFO0FBQzFFLGFBQU90TSxFQUFFLEdBQUcsTUFBWjtBQUNBLEtBRkQsTUFFTSxJQUFJbkIsS0FBSyxDQUFDK08sSUFBTixDQUFXYSxTQUFYLEVBQUosRUFBMkI7QUFDaEMsYUFBT3pPLEVBQUUsR0FBRyxNQUFaO0FBQ0E7O0FBRUQsUUFBR25CLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLE9BQXFDLE9BQXhDLEVBQWdEO0FBQ3RDLGFBQU90TSxFQUFFLEdBQUcsTUFBWjtBQUNUOztBQUVELFFBQUlBLEVBQUUsS0FBSyxNQUFYLEVBQ0N0RCxFQUFFLENBQUM4UixjQUFILENBQWtCLHlCQUFsQixFQUE2Q3RRLFFBQVEsQ0FBQ0gsUUFBVCxDQUFrQmtOLElBQWxCLEdBQzVDLGdCQUQ0QyxHQUN6QnBNLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLEVBRHBCO0FBR0QsV0FBT3RNLEVBQVA7QUFDQSxHQW5GZ0I7QUFvRmpCcU0sa0JBQWdCLEVBQUUsNEJBQVU7QUFDM0IsUUFBSXFDLFdBQVcsR0FBRzdQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLEVBQWxCOztBQUNBLFlBQVFvQyxXQUFSO0FBQ0MsV0FBSyxRQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0MsZUFBTyxNQUFQOztBQUNELFdBQUssUUFBTDtBQUNDLGVBQU8sTUFBUDs7QUFDRCxXQUFLLGVBQUw7QUFDQyxlQUFPLE1BQVA7O0FBQ0QsV0FBSyxjQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0EsV0FBSyxZQUFMO0FBQ0EsV0FBSyxjQUFMO0FBQ0EsV0FBSyxhQUFMO0FBQ0EsV0FBSyxJQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0MsZUFBT0EsV0FBUDs7QUFDRCxXQUFLLGVBQUw7QUFDQyxlQUFPLGFBQVA7O0FBQ0QsV0FBSyxlQUFMO0FBQ0MsZUFBTyxNQUFQOztBQUNELFdBQUssT0FBTDtBQUNDLGVBQU8sY0FBUDs7QUFDRDtBQUNDaFMsVUFBRSxDQUFDOFIsY0FBSCxDQUFrQiw0QkFBbEIsRUFBZ0RFLFdBQVcsR0FBRyxLQUFkLEdBQXNCeFEsUUFBUSxDQUFDSCxRQUFULENBQWtCa04sSUFBeEY7QUFDQXBNLGFBQUssQ0FBQzhQLFlBQU4sQ0FBbUJDLGtCQUFuQixDQUFzQyxJQUF0QyxFQUE0QyxNQUE1QyxFQUFvRCxJQUFwRCxFQUEwRCxHQUExRDtBQUNBLGVBQU8sT0FBUDtBQTlCRjtBQWdDQTtBQXRIZ0IsQ0FBbEI7QUF5SEEvUCxLQUFLLENBQUNnUSxhQUFOLEdBQXNCO0FBQ3JCQyxPQUFLLEVBQUcsZUFBU0MsTUFBVCxFQUFpQkMsSUFBakIsRUFBdUI7QUFDOUIsUUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQUEsUUFBdUJDLFNBQVMsR0FBRyxFQUFuQztBQUFBLFFBQXVDekwsUUFBUSxHQUFHLEVBQWxEO0FBQUEsUUFBc0QwTCxVQUFVLEdBQUcsS0FBbkU7QUFDQSxRQUFJblAsRUFBRSxHQUFHL0QsTUFBTSxDQUFDeUgsV0FBUCxDQUNSLFlBQVc7QUFDVixVQUFJcUwsTUFBTSxFQUFWLEVBQWM7QUFDYjlTLGNBQU0sQ0FBQzBILGFBQVAsQ0FBcUIzRCxFQUFyQjtBQUNBZ1AsWUFBSSxDQUFDRyxVQUFELENBQUo7QUFDQTs7QUFDRCxVQUFJRixhQUFhLEtBQUtDLFNBQXRCLEVBQWlDO0FBQ2hDalQsY0FBTSxDQUFDMEgsYUFBUCxDQUFxQjNELEVBQXJCO0FBQ0FtUCxrQkFBVSxHQUFHLElBQWI7QUFDQUgsWUFBSSxDQUFDRyxVQUFELENBQUo7QUFDQTtBQUNELEtBWE8sRUFZUixFQVpRLENBQVQ7QUFjQSxHQWpCb0I7QUFrQnJCQyxlQUFhLEVBQUcsdUJBQVNDLFVBQVQsRUFBcUI7QUFDcEMsUUFBSUMsRUFBRSxHQUFHRCxVQUFVLENBQUNoTyxXQUFYLEVBQVQ7QUFDQSxRQUFJN0MsS0FBSyxHQUFHLDJCQUEyQitRLElBQTNCLENBQWdDRCxFQUFoQyxDQUFaOztBQUVBLFFBQUlBLEVBQUUsQ0FBQ3BCLE9BQUgsQ0FBVyxNQUFYLE1BQXVCLENBQXZCLElBQTRCb0IsRUFBRSxDQUFDcEIsT0FBSCxDQUFXLFNBQVgsTUFBMEIsQ0FBMUQsRUFBNkQ7QUFDNUQsYUFBTyxLQUFQO0FBQ0E7O0FBQ0QsUUFBSTFQLEtBQUssSUFBSWdSLFFBQVEsQ0FBQ2hSLEtBQUssQ0FBQyxDQUFELENBQU4sRUFBVyxFQUFYLENBQVIsSUFBMEIsRUFBdkMsRUFBMkM7QUFDMUMsYUFBTyxJQUFQO0FBQ0E7O0FBQ0QsV0FBTyxLQUFQO0FBQ0EsR0E3Qm9CO0FBOEJyQmlSLG1CQUFpQixFQUFHLDJCQUFTaEosUUFBVCxFQUFtQjtBQUN0QyxRQUFJaUosVUFBSjs7QUFFQSxRQUFJelQsTUFBTSxDQUFDMFQsdUJBQVgsRUFBb0M7QUFDbkMxVCxZQUFNLENBQUMwVCx1QkFBUCxDQUNDMVQsTUFBTSxDQUFDMlQsU0FEUixFQUNtQixDQURuQixFQUVDLFlBQVc7QUFDVkYsa0JBQVUsR0FBRyxLQUFiO0FBQ0EsT0FKRixFQUtDLFVBQVNHLENBQVQsRUFBWTtBQUNYSCxrQkFBVSxHQUFHLElBQWI7QUFDQSxPQVBGO0FBU0EsS0FWRCxNQVVPLElBQUl6VCxNQUFNLENBQUM2VCxTQUFQLElBQW9CLFVBQVVDLElBQVYsQ0FBZTlULE1BQU0sQ0FBQytULFNBQVAsQ0FBaUJDLFNBQWhDLENBQXhCLEVBQW9FO0FBQzFFLFVBQUlDLEVBQUo7O0FBQ0EsVUFBSTtBQUNIQSxVQUFFLEdBQUdqVSxNQUFNLENBQUM2VCxTQUFQLENBQWlCNUUsSUFBakIsQ0FBc0IsTUFBdEIsQ0FBTDtBQUNBLE9BRkQsQ0FFRSxPQUFNMkUsQ0FBTixFQUFTO0FBQ1ZILGtCQUFVLEdBQUcsSUFBYjtBQUNBOztBQUVELFVBQUksT0FBT0EsVUFBUCxLQUFzQixXQUExQixFQUF1QztBQUN0QzdRLGFBQUssQ0FBQ2dRLGFBQU4sQ0FBb0JDLEtBQXBCLENBQ0MsU0FBU0MsTUFBVCxHQUFrQjtBQUNqQixpQkFBT21CLEVBQUUsQ0FBQ0MsVUFBSCxLQUFrQixNQUFsQixHQUEyQixJQUEzQixHQUFrQyxLQUF6QztBQUNBLFNBSEYsRUFJQyxTQUFTbkIsSUFBVCxDQUFjRyxVQUFkLEVBQTBCO0FBQ3pCLGNBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNoQk8sc0JBQVUsR0FBR1EsRUFBRSxDQUFDRSxNQUFILEdBQVksS0FBWixHQUFvQixJQUFqQztBQUNBO0FBQ0QsU0FSRjtBQVVBO0FBQ0QsS0FwQk0sTUFvQkEsSUFBSXZSLEtBQUssQ0FBQ2dRLGFBQU4sQ0FBb0JPLGFBQXBCLENBQWtDblQsTUFBTSxDQUFDK1QsU0FBUCxDQUFpQkMsU0FBbkQsQ0FBSixFQUFtRTtBQUN6RVAsZ0JBQVUsR0FBRyxLQUFiOztBQUNBLFVBQUk7QUFDSCxZQUFJLENBQUN6VCxNQUFNLENBQUM2VCxTQUFaLEVBQXVCO0FBQ3RCSixvQkFBVSxHQUFHLElBQWI7QUFDQTtBQUNELE9BSkQsQ0FJRSxPQUFPRyxDQUFQLEVBQVU7QUFDWEgsa0JBQVUsR0FBRyxJQUFiO0FBQ0E7QUFDRCxLQVRNLE1BU0EsSUFBSXpULE1BQU0sQ0FBQ29VLFlBQVAsSUFBdUIsU0FBU04sSUFBVCxDQUFjOVQsTUFBTSxDQUFDK1QsU0FBUCxDQUFpQkMsU0FBL0IsQ0FBM0IsRUFBc0U7QUFDNUUsVUFBSTtBQUNIaFUsY0FBTSxDQUFDb1UsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsRUFBb0MsQ0FBcEM7QUFDQSxPQUZELENBRUUsT0FBTVQsQ0FBTixFQUFTO0FBQ1ZILGtCQUFVLEdBQUcsSUFBYjtBQUNBOztBQUVELFVBQUksT0FBT0EsVUFBUCxLQUFzQixXQUExQixFQUF1QztBQUN0Q0Esa0JBQVUsR0FBRyxLQUFiO0FBQ0F6VCxjQUFNLENBQUNvVSxZQUFQLENBQW9CRSxVQUFwQixDQUErQixNQUEvQjtBQUNBO0FBQ0Q7O0FBRUQxUixTQUFLLENBQUNnUSxhQUFOLENBQW9CQyxLQUFwQixDQUNDLFNBQVNDLE1BQVQsR0FBa0I7QUFDakIsYUFBTyxPQUFPVyxVQUFQLEtBQXNCLFdBQXRCLEdBQW9DLElBQXBDLEdBQTJDLEtBQWxEO0FBQ0EsS0FIRixFQUlDLFNBQVNWLElBQVQsQ0FBY0csVUFBZCxFQUEwQjtBQUN6QjFJLGNBQVEsQ0FBQ2lKLFVBQUQsQ0FBUjtBQUNBLEtBTkY7QUFRQTtBQTdGb0IsQ0FBdEI7QUFnR0E3USxLQUFLLENBQUM0TyxJQUFOLEdBQWE7QUFDWitDLEtBQUcsRUFBRSxlQUFXO0FBQ2YsV0FBT3ZVLE1BQU0sQ0FBQ29VLFlBQVAsQ0FBb0JJLE9BQXBCLENBQTRCNVIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQmtPLElBQTFCLENBQStCQyxZQUEzRCxJQUEyRSxJQUEzRSxHQUFrRixLQUF6RjtBQUNBLEdBSFc7QUFJWmdELFFBQU0sRUFBRSxrQkFBVztBQUNsQixRQUFJQyxTQUFTLEdBQUc5UixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCa08sSUFBMUIsQ0FBK0JFLFVBQS9DO0FBQ0EsUUFBSWlELGNBQWMsR0FBRy9SLEtBQUssQ0FBQytPLElBQU4sQ0FBV08sc0JBQVgsQ0FBa0N3QyxTQUFsQyxDQUFyQjs7QUFDQSxRQUFJQyxjQUFjLElBQUksT0FBbEIsSUFBNkIzVSxNQUFNLENBQUN5SSxzQkFBUCxJQUFpQyxLQUFsRSxFQUF5RTtBQUN4RW5ILHNEQUFPLENBQUM4QixTQUFSLENBQWtCc1IsU0FBbEIsRUFBNkJDLGNBQTdCLEVBQTZDLENBQTdDO0FBQ0EsYUFBTyxLQUFQO0FBQ0E7O0FBQ0QsUUFBSUEsY0FBYyxJQUFJLE1BQWxCLElBQTRCM1UsTUFBTSxDQUFDeUksc0JBQVAsSUFBaUMsS0FBakUsRUFBd0U7QUFDdkVuSCxzREFBTyxDQUFDOEIsU0FBUixDQUFrQnNSLFNBQWxCLEVBQTZCLEVBQTdCLEVBQWlDLENBQUMsQ0FBbEM7QUFDQSxhQUFPLElBQVA7QUFDQTs7QUFDRCxRQUFJcFQsZ0RBQU8sQ0FBQzZRLFNBQVIsQ0FBa0J2UCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCa08sSUFBMUIsQ0FBK0JFLFVBQWpELEtBQWdFLE9BQXBFLEVBQTZFO0FBQzVFLGFBQU8sS0FBUDtBQUNBOztBQUNELFdBQU8sSUFBUDtBQUNBLEdBbkJXO0FBb0Jaa0Qsa0JBQWdCLEVBQUUsNEJBQVc7QUFDNUIsUUFBSWhTLEtBQUssQ0FBQzRPLElBQU4sQ0FBVytDLEdBQVgsTUFBb0IzUixLQUFLLENBQUM0TyxJQUFOLENBQVdpRCxNQUFYLEVBQXhCLEVBQTZDO0FBQzVDLFVBQUlJLFlBQVksR0FBRzdVLE1BQU0sQ0FBQ29VLFlBQVAsQ0FBb0JJLE9BQXBCLENBQTRCNVIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQmtPLElBQTFCLENBQStCQyxZQUEzRCxFQUF5RXBQLEtBQXpFLENBQStFLEdBQS9FLENBQW5COztBQUNBLFdBQUssSUFBSXlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFlBQVksQ0FBQ3BPLE1BQWpDLEVBQXlDcU8sQ0FBQyxFQUExQyxFQUE4QztBQUM3QzdNLFVBQUUsQ0FBQzVHLElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCd1QsWUFBWSxDQUFDQyxDQUFELENBQWxDLEVBQXVDRCxZQUFZLENBQUNDLENBQUQsQ0FBbkQsQ0FBUjtBQUNBO0FBQ0Q7QUFDRDtBQTNCVyxDQUFiO0FBOEJBbFMsS0FBSyxDQUFDbVMsY0FBTixHQUF1QjtBQUN0QkMsV0FBUyxFQUFFLHFCQUFXO0FBQ3JCLFFBQUlDLE9BQU8sR0FBR2IsWUFBWSxDQUFDSSxPQUFiLENBQXFCLGFBQXJCLENBQWQ7O0FBQ0EsUUFBSVMsT0FBSixFQUFhO0FBQ1pBLGFBQU8sQ0FBQzVTLEtBQVIsQ0FBYyxHQUFkLEVBQW1CNkMsT0FBbkIsQ0FBMkIsVUFBQUMsSUFBSSxFQUFJO0FBQ2xDLFlBQUlyRixJQUFJLEdBQUdxRixJQUFJLENBQUM5QyxLQUFMLENBQVcsR0FBWCxDQUFYO0FBQ0EsWUFBSTZTLEdBQUcsR0FBR3BWLElBQUksQ0FBQyxDQUFELENBQWQ7QUFDQSxZQUFJMkIsS0FBSyxHQUFHM0IsSUFBSSxDQUFDLENBQUQsQ0FBaEI7O0FBQ0EsWUFBSW9WLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3JCak4sWUFBRSxDQUFDNUcsSUFBSCxDQUFRLENBQUMsbUJBQUQsRUFBc0IsUUFBdEIsRUFBZ0NJLEtBQWhDLENBQVI7QUFDQTtBQUNELE9BUEQ7QUFRQTtBQUNEO0FBYnFCLENBQXZCO0FBZ0JBbUIsS0FBSyxDQUFDeU8sUUFBTixHQUFpQjtBQUNoQjhELGdCQUFjLEVBQUUsd0JBQVNDLE9BQVQsRUFBa0JDLFNBQWxCLEVBQTZCO0FBQUU7QUFDOUMsUUFBTXZVLGNBQWMsR0FBSSxPQUFPZCxNQUFNLENBQUN5RCxnQkFBZCxLQUFtQyxXQUFuQyxJQUFrRHpELE1BQU0sQ0FBQ3lELGdCQUFQLEtBQTRCLE9BQS9FLEdBQTBGLElBQTFGLEdBQWlHLEtBQXhIO0FBRU0sUUFBSTNDLGNBQUosRUFDTEMsSUFBSSxDQUFDTSxJQUFMLENBQVUsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLEVBQXlCK1QsT0FBekIsRUFBa0NDLFNBQWxDLEdBQThDLElBQTlDLENBQVYsRUFESyxLQUdMeFUsU0FBUyxDQUFDUSxJQUFWLENBQWU7QUFBQyxlQUFTLGVBQVY7QUFBMkIsMkJBQXFCLE9BQWhEO0FBQXlELHNCQUFnQitULE9BQXpFO0FBQWtGLHdCQUFpQkM7QUFBbkcsS0FBZjtBQUNELEdBUmU7QUFVaEJDLGVBQWEsRUFBRSx5QkFBVztBQUFFO0FBQzNCLFFBQUd0VixNQUFNLENBQUNpRCxVQUFQLElBQXFCakQsTUFBTSxDQUFDaUQsVUFBUCxDQUFrQkMsZUFBMUMsRUFBMkQ7QUFDMUQsYUFBT2xELE1BQU0sQ0FBQ21ELG1CQUFQLEdBQTZCbkQsTUFBTSxDQUFDaUQsVUFBUCxDQUFrQkMsZUFBbEIsR0FBb0MsS0FBcEMsR0FBNENsRCxNQUFNLENBQUNtRCxtQkFBaEYsR0FBc0duRCxNQUFNLENBQUNpRCxVQUFQLENBQWtCQyxlQUEvSDtBQUNBLEtBRkQsTUFFTyxJQUFJbEQsTUFBTSxDQUFDa0QsZUFBWCxFQUE0QjtBQUNsQyxhQUFPbEQsTUFBTSxDQUFDbUQsbUJBQVAsR0FBNkJuRCxNQUFNLENBQUNrRCxlQUFQLEdBQXlCLEtBQXpCLEdBQWlDbEQsTUFBTSxDQUFDbUQsbUJBQXJFLEdBQTJGbkQsTUFBTSxDQUFDa0QsZUFBekc7QUFDQTs7QUFDRCxXQUFPLEdBQVA7QUFDQSxHQWpCZTtBQWtCaEJxUyxtQkFBaUIsRUFBRSwyQkFBU2xFLFFBQVQsRUFBbUI7QUFDckNtRSxhQUFTLEdBQUcsR0FBWjtBQUNBQyxlQUFXLEdBQUcsR0FBZDtBQUNBLFFBQUcsQ0FBQ3BFLFFBQUosRUFBYztBQUNkb0UsZUFBVyxHQUFHLEtBQUtwRSxRQUFRLENBQUNxRSxLQUE1Qjs7QUFDQSxRQUFJRCxXQUFXLENBQUNoUCxNQUFaLElBQXNCLENBQTFCLEVBQTZCO0FBQzVCZ1AsaUJBQVcsR0FBRyxNQUFNQSxXQUFwQjtBQUNBOztBQUNERCxhQUFTLEdBQUduRSxRQUFRLENBQUNuTyxlQUFULEdBQTBCLEtBQTFCLEdBQWlDbU8sUUFBUSxDQUFDc0UsUUFBdEQ7QUFDQSxHQTNCZTtBQTRCaEJDLDZCQUEyQixFQUFFLHFDQUFTQyxNQUFULEVBQWlCO0FBQzdDLFFBQUlDLFFBQVEsR0FBR2xULEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEIrTixRQUExQixDQUFtQ0MsZUFBbEQ7O0FBQ0EsUUFBR2hRLGdEQUFPLENBQUM2USxTQUFSLENBQWtCdlAsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDK0csS0FBbkQsQ0FBSCxFQUE4RDtBQUM3RDZNLGNBQVEsR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWE5RCxPQUFiLENBQXFCLFVBQXJCLEtBQW9DLENBQUMsQ0FBckMsR0FBeUMsMEJBQXpDLEdBQXNFLDBCQUFqRjtBQUNBM1Esc0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQytHLEtBQW5ELEVBQTBELEVBQTFELEVBQThELENBQUMsQ0FBL0Q7QUFDQTs7QUFDRCxXQUFPNk0sUUFBUDtBQUNBLEdBbkNlO0FBb0NoQkUscUJBQW1CLEVBQUUsNkJBQVNDLE9BQVQsRUFBa0I7QUFDdEMsUUFBSSxDQUFDclQsS0FBSyxDQUFDUyxTQUFOLENBQWdCaVAsZ0JBQWhCLEVBQUwsRUFBeUM7QUFDeEN0UyxZQUFNLENBQUNpRCxVQUFQLENBQWtCOFMsS0FBbEIsR0FBMEIvVixNQUFNLENBQUNrVyxTQUFQLEdBQW1CQSxTQUFTLENBQUM5USxXQUFWLEVBQW5CLEdBQTZDLEdBQXZFO0FBQ0FwRixZQUFNLENBQUNpRCxVQUFQLENBQWtCQyxlQUFsQixHQUFvQ2xELE1BQU0sQ0FBQ2tELGVBQVAsR0FBeUJsRCxNQUFNLENBQUNrRCxlQUFoQyxHQUFrRCxFQUF0RjtBQUNBTixXQUFLLENBQUN5TyxRQUFOLENBQWVrRSxpQkFBZixDQUFpQ3ZWLE1BQU0sQ0FBQ2lELFVBQXhDO0FBQ0EsVUFBSWdULE9BQU8sSUFBSSxLQUFmLEVBQXNCeFYsRUFBRSxDQUFDdUksU0FBSCxDQUFhcEcsS0FBSyxDQUFDeU8sUUFBTixDQUFldUUsMkJBQWYsQ0FBMkM1VixNQUFNLENBQUNpRCxVQUFsRCxDQUFiLEVBQTRFTCxLQUFLLENBQUN5TyxRQUFOLENBQWVpRSxhQUFmLEVBQTVFO0FBQ3RCaEQsc0JBQWdCLEdBQUcsSUFBbkI7QUFDQTtBQUNELEdBNUNlO0FBNkNoQjZELGVBQWEsRUFBRSx1QkFBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkJDLGdCQUE3QixFQUE4QztBQUM1RHBPLG9CQUFnQixDQUFDcU8sZ0JBQWpCLEdBQW9DSCxPQUFwQztBQUNNbE8sb0JBQWdCLENBQUNzTyxrQkFBakIsR0FBc0NILFNBQXRDO0FBQ0FuTyxvQkFBZ0IsQ0FBQ29PLGdCQUFqQixHQUFvQ0EsZ0JBQXBDO0FBQ047QUFqRGUsQ0FBakI7QUFxREExVCxLQUFLLENBQUM2VCxNQUFOLEdBQWU7QUFDZEMsZUFBYSxFQUFFLHVCQUFTQyxNQUFULEVBQWlCO0FBQy9CL1QsU0FBSyxDQUFDK08sSUFBTixDQUFXaUYsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQTlELEdBQXVGLHlDQUF2RixHQUFpSUYsTUFBakksR0FBd0ksc0JBQWhLO0FBQ0EvVCxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDK08sSUFBTixDQUFXa0YsV0FBWCxFQUFqQixHQUEwQyx5Q0FBMUMsR0FBb0ZGLE1BQXBGLEdBQTJGLGdDQUFuSTtBQUNBLEdBSmE7QUFLZEssb0NBQWtDLEVBQUUsNENBQVNMLE1BQVQsRUFBaUI7QUFDcEQvVCxTQUFLLENBQUMrTyxJQUFOLENBQVdpRixZQUFYLENBQXdCLGdFQUE4RGhVLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBOUQsR0FBdUYsdURBQXZGLEdBQStJRixNQUEvSSxHQUFzSixzQkFBOUs7QUFDQS9ULFNBQUssQ0FBQ2tVLGNBQU4sQ0FBcUJDLGtCQUFyQixDQUF3QyxtQkFBaUJuVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQWpCLEdBQTBDLHVEQUExQyxHQUFrR0YsTUFBbEcsR0FBeUcsd0NBQWpKO0FBQ0EsR0FSYTtBQVNkTSxxQkFBbUIsRUFBRSw2QkFBU04sTUFBVCxFQUFpQjtBQUNyQy9ULFNBQUssQ0FBQytPLElBQU4sQ0FBV2lGLFlBQVgsQ0FBd0IsZ0VBQThEaFUsS0FBSyxDQUFDK08sSUFBTixDQUFXa0YsV0FBWCxFQUE5RCxHQUF1RixnREFBdkYsR0FBd0lGLE1BQXhJLEdBQStJLHNCQUF2SztBQUNBL1QsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBakIsR0FBMEMsZ0RBQTFDLEdBQTJGRixNQUEzRixHQUFrRyxpQ0FBMUk7QUFDQSxHQVphO0FBYWRPLGFBQVcsRUFBRSx1QkFBc0I7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFDbENuWCxVQUFNLENBQUNvWCxlQUFQLEdBQXlCRCxNQUF6QjtBQUVBdlUsU0FBSyxDQUFDK08sSUFBTixDQUFXaUYsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQTlELEdBQXVGLGdGQUEvRztBQUNBalUsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBakIsR0FBMEMsOEVBQWxGO0FBQ0EsR0FsQmE7QUFtQmRRLFlBQVUsRUFBRSxzQkFBVztBQUN0QixRQUFNQyxHQUFHLHdFQUFpRTFVLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBakUsd0RBQVQ7QUFDQSxRQUFNVSxRQUFRLDJCQUFvQjNVLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBcEIsMkRBQWQ7QUFFQWpVLFNBQUssQ0FBQytPLElBQU4sQ0FBV2lGLFlBQVgsQ0FBd0JVLEdBQXhCO0FBQ0ExVSxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0NRLFFBQXhDO0FBQ0EsR0F6QmE7QUEwQmRDLHNCQUFvQixFQUFFLDhCQUFTYixNQUFULEVBQWlCO0FBQ3RDL1QsU0FBSyxDQUFDK08sSUFBTixDQUFXaUYsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQTlELEdBQXVGLDJDQUF2RixHQUFtSUYsTUFBbkksR0FBMEksc0JBQWxLO0FBQ0EvVCxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDK08sSUFBTixDQUFXa0YsV0FBWCxFQUFqQixHQUEwQywyQ0FBMUMsR0FBc0ZGLE1BQXRGLEdBQTZGLDRCQUFySTtBQUNBLEdBN0JhO0FBOEJkYyw2QkFBMkIsRUFBRSxxQ0FBU2QsTUFBVCxFQUFpQjtBQUM3Qy9ULFNBQUssQ0FBQ2tVLGNBQU4sQ0FBcUJDLGtCQUFyQixDQUF3QyxtQkFBaUJuVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQWpCLEdBQTBDLG1EQUExQyxHQUE4RkYsTUFBOUYsR0FBcUcsOEJBQTdJO0FBQ0E7QUFoQ2EsQ0FBZjtBQW9DQS9ULEtBQUssQ0FBQzhVLFFBQU4sR0FBaUI7QUFDaEJDLGlCQUFlLEVBQUUseUJBQVNoQixNQUFULEVBQWlCO0FBQ2pDL1QsU0FBSyxDQUFDK08sSUFBTixDQUFXaUYsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQTlELEdBQXVGLDJDQUF2RixHQUFtSUYsTUFBbkksR0FBMEksc0JBQWxLO0FBQ0EvVCxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDK08sSUFBTixDQUFXa0YsV0FBWCxFQUFqQixHQUEwQywyQ0FBMUMsR0FBc0ZGLE1BQXRGLEdBQTZGLGdDQUFySTtBQUNBclYsb0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ3FCLEdBQW5ELEVBQXdELEVBQXhELEVBQTRELENBQUMsQ0FBN0Q7QUFDQTlDLE1BQUUsQ0FBQ3VJLFNBQUgsQ0FBYSxtQkFBYixFQUFrQ3BHLEtBQUssQ0FBQ3lPLFFBQU4sQ0FBZWlFLGFBQWYsRUFBbEM7QUFDQWhVLG9EQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUMrRyxLQUFuRCxFQUEwRCxJQUExRCxFQUFnRSxDQUFoRTtBQUNBO0FBUGUsQ0FBakI7QUFVQXJHLEtBQUssQ0FBQ2dWLE1BQU4sR0FBZTtBQUNkRCxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCL1UsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLHlGQUF4QztBQUNBelYsb0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ3FCLEdBQW5ELEVBQXdELEVBQXhELEVBQTRELENBQUMsQ0FBN0Q7QUFDQTlDLE1BQUUsQ0FBQ3VJLFNBQUgsQ0FBYSxtQkFBYixFQUFrQ3BHLEtBQUssQ0FBQ3lPLFFBQU4sQ0FBZWlFLGFBQWYsRUFBbEM7QUFDQWhVLG9EQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUMrRyxLQUFuRCxFQUEwRCxJQUExRCxFQUFnRSxDQUFoRTtBQUNBO0FBTmEsQ0FBZjtBQVNBckcsS0FBSyxDQUFDNEYsT0FBTixHQUFnQjtBQUNmcVAsc0JBQW9CLEVBQUUsOEJBQVN0UyxHQUFULEVBQWM7QUFDbkM5RSxNQUFFLENBQUN1SSxTQUFILENBQWEsVUFBYixFQUF5QnBHLEtBQUssQ0FBQ3lPLFFBQU4sQ0FBZWlFLGFBQWYsRUFBekI7QUFDQWhVLG9EQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxQixHQUFuRCxFQUF3RCxFQUF4RCxFQUE0RCxDQUFDLENBQTdEO0FBQ0E2SixjQUFVLENBQUMsWUFBVztBQUFDcE4sWUFBTSxDQUFDOEIsUUFBUCxDQUFnQmtOLElBQWhCLEdBQXVCekosR0FBdkI7QUFBNEIsS0FBekMsRUFBMkMsSUFBM0MsQ0FBVjtBQUNBLEdBTGM7QUFNZnVTLE1BQUksRUFBRSxnQkFBNkI7QUFBQSxRQUFwQjlOLFdBQW9CLHVFQUFOLElBQU07QUFDbENwSCxTQUFLLENBQUNvSCxXQUFOLEdBQW9CQSxXQUFwQjs7QUFFQSxRQUFHLENBQUNwSCxLQUFLLENBQUMrTixhQUFWLEVBQXlCO0FBQ3hCeFAsYUFBTyxDQUFDNFcsSUFBUixDQUFhLDJCQUFiO0FBQ0FuVixXQUFLLENBQUNvVixrQkFBTjtBQUNBLEtBSEQsTUFHTztBQUNOLFVBQUk7QUFDSCxZQUFJL04sNkRBQUo7QUFDQWpLLGNBQU0sQ0FBQ2dJLFVBQVAsR0FBb0IsSUFBcEI7QUFDQSxPQUhELENBSUEsT0FBTTRMLENBQU4sRUFBUztBQUNSelMsZUFBTyxDQUFDOFcsS0FBUixDQUFjLHlCQUFkO0FBQ0FyVixhQUFLLENBQUNvVixrQkFBTjtBQUNBO0FBQ0Q7QUFDRDtBQXRCYyxDQUFoQjs7QUF5QkFwVixLQUFLLENBQUNvVixrQkFBTixHQUEyQixZQUFXO0FBQ3JDLE1BQUl4TyxLQUFLLEdBQUcsSUFBSTBPLFdBQUosQ0FBZ0IsYUFBaEIsQ0FBWjtBQUNBalcsVUFBUSxDQUFDa1csYUFBVCxDQUF1QjNPLEtBQXZCO0FBQ0EsQ0FIRDs7QUFLQTVHLEtBQUssQ0FBQ3dWLFlBQU4sR0FBcUIsWUFBVztBQUMvQixNQUFJN1EsS0FBSyxHQUFHLENBQVo7QUFFQSxNQUFNOFEsU0FBUyxHQUFHNVEsV0FBVyxDQUFDLFlBQU07QUFDbkMsUUFBSTZRLE9BQU8sR0FBR3JXLFFBQVEsQ0FBQ21LLGFBQVQsQ0FBdUIsMENBQXZCLENBQWQ7QUFDQSxRQUFJbU0sTUFBTSxHQUFHdFcsUUFBUSxDQUFDbUssYUFBVCxDQUF1Qiw0RUFBdkIsQ0FBYjs7QUFFQSxRQUFHN0UsS0FBSyxHQUFHLENBQVgsRUFBYztBQUNiM0UsV0FBSyxDQUFDb1Ysa0JBQU47QUFDQXBWLFdBQUssQ0FBQytOLGFBQU4sR0FBc0IsS0FBdEI7QUFDQWpKLG1CQUFhLENBQUMyUSxTQUFELENBQWI7QUFDQTs7QUFFRCxRQUFPQyxPQUFPLElBQUkxVixLQUFLLENBQUMrTixhQUFsQixJQUFvQzRILE1BQXRDLElBQWlEaFIsS0FBSyxHQUFHLENBQTdELEVBQ0NHLGFBQWEsQ0FBQzJRLFNBQUQsQ0FBYjtBQUVEOVEsU0FBSztBQUNMLEdBZDRCLEVBYzFCLElBZDBCLENBQTdCO0FBZUEsQ0FsQkQ7O0FBb0JBM0UsS0FBSyxDQUFDNFYsZUFBTixHQUF3QjtBQUN2QmIsaUJBQWUsRUFBRSwyQkFBcUM7QUFBQSxRQUE1QmhCLE1BQTRCLHVFQUFuQixJQUFtQjtBQUFBLFFBQWI4QixJQUFhLHVFQUFOLElBQU07QUFDckQ3VixTQUFLLENBQUNvSCxXQUFOLEdBQW9CeU8sSUFBcEI7O0FBRUEsUUFBRyxDQUFDN1YsS0FBSyxDQUFDK04sYUFBUCxJQUF5QixDQUFDZ0csTUFBRCxJQUFXLENBQUMvVCxLQUFLLENBQUNvSCxXQUE5QyxFQUE2RDtBQUM1RHBILFdBQUssQ0FBQ29WLGtCQUFOO0FBQ0EsS0FGRCxNQUVPO0FBQ05wVixXQUFLLENBQUMrTyxJQUFOLENBQVdpRixZQUFYLENBQXdCLGdFQUE4RGhVLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBOUQsR0FBdUYsbURBQXZGLEdBQTJJRixNQUEzSSxHQUFrSixzQkFBMUs7QUFDQS9ULFdBQUssQ0FBQ2tVLGNBQU4sQ0FBcUJDLGtCQUFyQixDQUNDLG1CQUFpQm5VLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBakIsR0FBMEMsbURBQTFDLEdBQThGRixNQUE5RixHQUFxRyxvQ0FEdEcsRUFFQyxVQUFBN1csSUFBSSxFQUFJO0FBQ1AsWUFBR0EsSUFBSSxDQUFDNFksTUFBTCxLQUFnQixHQUFuQixFQUF3QjtBQUN2QjlWLGVBQUssQ0FBQ29WLGtCQUFOO0FBQ0EsU0FGRCxNQUdLO0FBQ0poWSxnQkFBTSxDQUFDZ0ksVUFBUCxHQUFvQixJQUFwQjtBQUNBO0FBQ0QsT0FURjs7QUFZQSxVQUFHcEYsS0FBSyxDQUFDb0gsV0FBTixLQUFzQixVQUF0QixJQUFvQ3BILEtBQUssQ0FBQ29ILFdBQU4sS0FBc0IsV0FBN0QsRUFBMkU7QUFDMUV2SixVQUFFLENBQUN1SSxTQUFILENBQWEsbUJBQWIsRUFBa0NwRyxLQUFLLENBQUN5TyxRQUFOLENBQWVpRSxhQUFmLEVBQWxDO0FBQ0FoVSx3REFBTyxDQUFDOEIsU0FBUixDQUFrQlIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDK0csS0FBbkQsRUFBMEQsSUFBMUQsRUFBZ0UsQ0FBaEU7QUFDQSxPQUhELE1BR087QUFDTnhJLFVBQUUsQ0FBQ3VJLFNBQUgsQ0FBYSxVQUFiLEVBQXlCcEcsS0FBSyxDQUFDeU8sUUFBTixDQUFlaUUsYUFBZixFQUF6QjtBQUNBO0FBQ0Q7QUFFRDtBQTVCc0IsQ0FBeEI7QUErQkExUyxLQUFLLENBQUMrVixVQUFOLEdBQW1CO0FBQ2xCQyxtQkFBaUIsRUFBRSwyQkFBU2pDLE1BQVQsRUFBaUI7QUFDbkMvVCxTQUFLLENBQUMrTyxJQUFOLENBQVdpRixZQUFYLENBQXdCLGdFQUE4RGhVLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBOUQsR0FBdUYsOENBQXZGLEdBQXNJRixNQUF0SSxHQUE2SSxzQkFBcks7QUFDQS9ULFNBQUssQ0FBQ2tVLGNBQU4sQ0FBcUJDLGtCQUFyQixDQUF3QyxtQkFBaUJuVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQWpCLEdBQTBDLDhDQUExQyxHQUF5RkYsTUFBekYsR0FBZ0csK0JBQXhJO0FBQ0E7QUFKaUIsQ0FBbkI7QUFPQS9ULEtBQUssQ0FBQ2lXLE9BQU4sR0FBZ0I7QUFDZkMsZ0JBQWMsRUFBRSwwQkFBc0I7QUFBQSxRQUFiM0IsTUFBYSx1RUFBSixFQUFJO0FBRXJDQSxVQUFNLENBQUN4TSxVQUFQLDJCQUFxQy9ILEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBckM7QUFFQTdXLFVBQU0sQ0FBQytZLFVBQVAsR0FBb0I1QixNQUFwQjtBQUVBdlUsU0FBSyxDQUFDK08sSUFBTixDQUFXaUYsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQTlELEdBQXVGLGdFQUEvRztBQUNBalUsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBakIsR0FBMEMscUVBQWxGO0FBQ0E7QUFUYyxDQUFoQjtBQVlBalUsS0FBSyxDQUFDb1csU0FBTixHQUFrQjtBQUNqQkMsWUFBVSxFQUFFLHNCQUFXO0FBQ3RCclcsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBakIsR0FBMEMscURBQWxGO0FBQ0EsR0FIZ0I7QUFJakJxQyxrQkFBZ0IsRUFBRSw0QkFBVztBQUN0QnRXLFNBQUssQ0FBQ2tVLGNBQU4sQ0FBcUJDLGtCQUFyQixDQUF3QyxtQkFBaUJuVSxLQUFLLENBQUMrTyxJQUFOLENBQVdrRixXQUFYLEVBQWpCLEdBQTBDLHdEQUFsRjtBQUNIO0FBTmEsQ0FBbEI7QUFTQWpVLEtBQUssQ0FBQ3VXLFFBQU4sR0FBaUI7QUFDaEJDLHNCQUFvQixFQUFFLDhCQUFTekMsTUFBVCxFQUFpQjtBQUN0Qy9ULFNBQUssQ0FBQytPLElBQU4sQ0FBV2lGLFlBQVgsQ0FBd0IsZ0VBQThEaFUsS0FBSyxDQUFDK08sSUFBTixDQUFXa0YsV0FBWCxFQUE5RCxHQUF1RixtREFBdkYsR0FBMklGLE1BQTNJLEdBQWtKLHNCQUExSztBQUNBL1QsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQytPLElBQU4sQ0FBV2tGLFdBQVgsRUFBakIsR0FBMEMsbURBQTFDLEdBQThGRixNQUE5RixHQUFxRyxvQ0FBN0k7QUFDQTtBQUplLENBQWpCO0FBT0EvVCxLQUFLLENBQUN5VyxZQUFOLEdBQXFCO0FBQ3BCQyxtQkFBaUIsRUFBRSwyQkFBU0MsSUFBVCxFQUFlO0FBQ2pDLFNBQUssSUFBSXpFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5RSxJQUFJLENBQUM5UyxNQUF6QixFQUFpQ3FPLENBQUMsRUFBbEMsRUFBc0M7QUFDckMsVUFBSXlFLElBQUksQ0FBQ3pFLENBQUQsQ0FBSixDQUFRMEUsR0FBUixJQUFlLFlBQW5CLEVBQWlDLE9BQU9ELElBQUksQ0FBQ3pFLENBQUQsQ0FBSixDQUFROUYsSUFBZjtBQUNqQzs7QUFDRCxXQUFPLEVBQVA7QUFDQTtBQU5tQixDQUFyQjtBQVNBcE0sS0FBSyxDQUFDa1UsY0FBTixHQUF1QjtBQUN0QkMsb0JBQWtCLEVBQUUsNEJBQVMwQyxTQUFULEVBQW9CalAsUUFBcEIsRUFBOEI7QUFDakQsUUFBSWtQLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsT0FBRyxDQUFDekssSUFBSixDQUFTLEtBQVQsRUFBZ0J3SyxTQUFoQjtBQUNBQyxPQUFHLENBQUNFLElBQUo7O0FBQ0FGLE9BQUcsQ0FBQ0csa0JBQUosR0FBeUIsWUFBVztBQUNuQyxVQUFHLEtBQUszRixVQUFMLEtBQW9CLENBQXZCLEVBQXlCO0FBQ3hCLFlBQUcsS0FBS3dFLE1BQUwsS0FBZ0IsR0FBbkIsRUFBd0I7QUFDdkIsY0FBSW9CLFFBQVEsR0FBR0osR0FBRyxDQUFDSyxZQUFuQjtBQUNBLGNBQUlDLGNBQWMsR0FBRy9YLFFBQVEsQ0FBQzRFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQW1ULHdCQUFjLENBQUNqVCxTQUFmLEdBQTJCK1MsUUFBM0I7QUFDQTdYLGtCQUFRLENBQUN3SyxJQUFULENBQWN3TixXQUFkLENBQTBCRCxjQUExQjtBQUNBLFNBTEQsTUFLTztBQUNOdlosWUFBRSxDQUFDOFIsY0FBSCxDQUFrQix3Q0FBbEIsRUFBNEQsVUFBVWtILFNBQVYsR0FDekQsZUFEeUQsR0FDdkMsS0FBS2YsTUFEa0MsR0FFekQsVUFGeUQsR0FFNUMsS0FBS3dCLFVBRnJCO0FBR0E7QUFDRDs7QUFFRCxVQUFHMVAsUUFBSCxFQUNDQSxRQUFRLENBQUNrUCxHQUFELENBQVI7QUFDRCxLQWhCRDtBQWlCQSxHQXRCcUI7QUF1QnRCUyx1REFBcUQsRUFBRSwrREFBU0MsMEJBQVQsRUFBcUM7QUFFM0YsUUFBSVYsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBRCxPQUFHLENBQUN6SyxJQUFKLENBQVMsS0FBVCxFQUFnQm1MLDBCQUFoQixFQUE0QyxLQUE1QztBQUNBVixPQUFHLENBQUNXLGdCQUFKLENBQXFCLFFBQXJCLEVBQStCLGtCQUEvQjtBQUNBWCxPQUFHLENBQUNXLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQztBQUNBWCxPQUFHLENBQUNFLElBQUo7O0FBRUEsUUFBR0YsR0FBRyxDQUFDeEYsVUFBSixJQUFrQixDQUFyQixFQUF1QjtBQUN0QixVQUFHd0YsR0FBRyxDQUFDaEIsTUFBSixJQUFjLEdBQWpCLEVBQXFCO0FBQ3BCLFlBQUlvQixRQUFRLEdBQUdKLEdBQUcsQ0FBQ0ssWUFBbkI7QUFDQSxZQUFJTyxRQUFRLEdBQUc1VCxJQUFJLENBQUM2VCxLQUFMLENBQVdULFFBQVgsQ0FBZjtBQUNBLFlBQUlVLGlCQUFpQixHQUFHRixRQUFRLENBQUNFLGlCQUFULENBQTJCcFYsV0FBM0IsRUFBeEI7QUFDQTZDLFVBQUUsQ0FBQzVHLElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCLG1CQUF0QixFQUEyQ21aLGlCQUEzQyxDQUFSO0FBRUEsT0FORCxNQU1LO0FBQ0osWUFBSWQsR0FBRyxDQUFDaEIsTUFBSixJQUFjLENBQWQsSUFBbUI5VixLQUFLLENBQUNTLFNBQU4sQ0FBZ0J5TixxQ0FBaEIsQ0FBc0RtQixPQUF0RCxDQUE4RHlILEdBQUcsQ0FBQ2hCLE1BQWxFLElBQTRFLENBQUMsQ0FBcEcsRUFBdUc7QUFDdEdqWSxZQUFFLENBQUM4UixjQUFILENBQWtCLHFCQUFsQixFQUF5Q21ILEdBQUcsQ0FBQ2hCLE1BQUosR0FBYSxLQUFiLEdBQXFCMEIsMEJBQTlEO0FBQ0EsU0FGRCxNQUVPO0FBQ04zWixZQUFFLENBQUM4UixjQUFILENBQWtCLHFCQUFsQixFQUF5Qyx3QkFBd0IsS0FBeEIsR0FBZ0M2SCwwQkFBekU7QUFDQTtBQUNEO0FBQ0Q7QUFDRCxHQTlDcUI7QUErQ3RCSyw2Q0FBMkMsRUFBRSxxREFBU0MsS0FBVCxFQUFnQjtBQUU1RCxRQUFJQyxhQUFhLEdBQUcvWCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0IrTSxnQkFBaEIsRUFBcEI7O0FBQ0EsUUFBR3VLLGFBQWEsSUFBSSxPQUFwQixFQUE2QjtBQUM1QjtBQUNBOztBQUVELFFBQUk3YSxJQUFJLEdBQUc0RyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDLDRCQUFzQitULEtBQXZCO0FBQThCLG1CQUFhOVgsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnFPLElBQTFCLENBQStCQyxFQUExRTtBQUE4RSx1QkFBaUIrSTtBQUEvRixLQUFmLENBQVg7QUFFQSxRQUFJakIsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBRCxPQUFHLENBQUN6SyxJQUFKLENBQVMsTUFBVCxFQUFpQnJNLEtBQUssQ0FBQ2dZLFlBQU4sQ0FBbUJDLHdCQUFuQixDQUE0Q2pZLEtBQUssQ0FBQ1MsU0FBTixDQUFnQjJPLGdCQUFoQixFQUE1QyxFQUFnRjhJLGlCQUFqRyxFQUFvSCxLQUFwSDtBQUNBcEIsT0FBRyxDQUFDVyxnQkFBSixDQUFxQixRQUFyQixFQUE4QixrQkFBOUI7QUFDQVgsT0FBRyxDQUFDVyxnQkFBSixDQUFxQixjQUFyQixFQUFxQyxrQkFBckM7QUFDQVgsT0FBRyxDQUFDRSxJQUFKLENBQVM5WixJQUFUOztBQUVBLFFBQUc0WixHQUFHLENBQUN4RixVQUFKLEtBQW1CLENBQXRCLEVBQXdCO0FBQ3ZCLFVBQUl3RixHQUFHLENBQUNoQixNQUFKLEtBQWUsR0FBbkIsRUFBdUI7QUFDdEIsWUFBSW9CLFFBQVEsR0FBR0osR0FBRyxDQUFDSyxZQUFuQjtBQUNBLFlBQUlPLFFBQVEsR0FBRzVULElBQUksQ0FBQzZULEtBQUwsQ0FBV1QsUUFBWCxDQUFmO0FBQ0EsWUFBSWlCLG9CQUFvQixHQUFHLEtBQTNCO0FBQUEsWUFBa0NDLGdCQUFnQixHQUFHLEVBQXJEO0FBQUEsWUFBeURaLDBCQUEwQixHQUFHLEVBQXRGOztBQUNBLFlBQUksT0FBT0UsUUFBUSxDQUFDVyxNQUFoQixJQUEwQixXQUE5QixFQUEyQztBQUMxQ0QsMEJBQWdCLEdBQUdWLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQjdWLFdBQWhCLEVBQW5CO0FBQ0E7O0FBQ0QsWUFBSSxPQUFPa1YsUUFBUSxDQUFDWSxhQUFoQixJQUFpQyxXQUFyQyxFQUFrRDtBQUNqREgsOEJBQW9CLEdBQUdULFFBQVEsQ0FBQ1ksYUFBaEM7QUFDQTs7QUFDRCxZQUFJLE9BQU9aLFFBQVEsQ0FBQ2YsSUFBaEIsSUFBd0IsV0FBNUIsRUFBeUM7QUFDeENhLG9DQUEwQixHQUFHeFgsS0FBSyxDQUFDeVcsWUFBTixDQUFtQkMsaUJBQW5CLENBQXFDZ0IsUUFBUSxDQUFDZixJQUE5QyxDQUE3QjtBQUNBOztBQUNELFlBQUk0QixZQUFZLEdBQUd2WSxLQUFLLENBQUM4UCxZQUFOLENBQW1CeUksWUFBbkIsQ0FBZ0NKLG9CQUFoQyxFQUFzREMsZ0JBQXRELEVBQXdFVixRQUFRLENBQUNjLFVBQWpGLEVBQTZGaEIsMEJBQTdGLENBQW5CO0FBQ0F4WCxhQUFLLENBQUM4UCxZQUFOLENBQW1CQyxrQkFBbkIsQ0FBc0MySCxRQUFRLENBQUNjLFVBQS9DLEVBQTJESixnQkFBM0QsRUFBNkVHLFlBQTdFLEVBQTJGSixvQkFBM0Y7QUFDQSxZQUFJTSxXQUFXLEdBQUc7QUFDaEIsd0JBQWVmLFFBQVEsQ0FBQ2MsVUFEUjtBQUVoQixvQkFBVUosZ0JBRk07QUFHaEIsb0JBQVVHLFlBSE07QUFJaEIsMkJBQWlCSixvQkFKRDtBQUtoQixtQkFBU0wsS0FMTztBQU1oQixxQkFBVzlYLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLEVBTks7QUFPaEIsd0JBQWNzSyxhQVBFO0FBUWhCLGtCQUFRTCxRQUFRLENBQUNnQjtBQVJELFNBQWxCO0FBVUFELG1CQUFXLEdBQUdFLElBQUksQ0FBQ0MsU0FBUyxDQUFDOVUsSUFBSSxDQUFDQyxTQUFMLENBQWUwVSxXQUFmLENBQUQsQ0FBVixDQUFsQjtBQUNBL1osd0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ3FCLEdBQW5ELEVBQXdEOFgsV0FBeEQsRUFBcUUsQ0FBckU7O0FBRUEsWUFBSSxPQUFPbFgsR0FBUCxLQUFlLFdBQW5CLEVBQWdDO0FBQy9CLGNBQUd2QixLQUFLLENBQUM2WSxNQUFOLENBQWFDLG9CQUFiLENBQWtDcEIsUUFBbEMsQ0FBSCxFQUErQztBQUM5QyxnQkFBRztBQUNGLGtCQUFJcUIsVUFBVSxHQUFHLElBQUlDLFVBQUosRUFBakI7QUFDQUQsd0JBQVUsQ0FBQ0UscUJBQVgsQ0FBaUNuQixLQUFqQztBQUNBLGFBSEQsQ0FHRSxPQUFNekMsS0FBTixFQUFhO0FBQ2R4WCxnQkFBRSxDQUFDOFIsY0FBSCxDQUFrQiw0REFBbEIsRUFDUyxVQUFVdFEsUUFBUSxDQUFDSCxRQUFULENBQWtCa04sSUFBNUIsR0FDRSxVQURGLEdBQ2UwTCxLQURmLEdBRUUsU0FGRixHQUVjekMsS0FIdkI7QUFJQTtBQUNEO0FBQ0Q7O0FBRUQsWUFBR3FDLFFBQVEsQ0FBQ2MsVUFBVCxJQUF1QixJQUExQixFQUErQjtBQUM5QnhZLGVBQUssQ0FBQ3lPLFFBQU4sQ0FBZThFLGFBQWYsQ0FBNkJtRSxRQUFRLENBQUNnQixTQUF0QyxFQUFpRCxVQUFqRCxFQUE2RCxTQUE3RDtBQUNBO0FBR0QsT0EvQ0QsTUErQ0s7QUFDSjdhLFVBQUUsQ0FBQzhSLGNBQUgsQ0FBa0IsOEJBQWxCLEVBQWtEbUgsR0FBRyxDQUFDaEIsTUFBSixHQUFhLEtBQWIsR0FBcUJnQyxLQUF2RTtBQUNBOVgsYUFBSyxDQUFDOFAsWUFBTixDQUFtQkMsa0JBQW5CLENBQXNDLElBQXRDLEVBQTRDLE1BQTVDLEVBQW9ELElBQXBELEVBQTBELEdBQTFEO0FBQ0E7QUFDRDtBQUNEO0FBbkhxQixDQUF2QjtBQXNIQS9QLEtBQUssQ0FBQzZZLE1BQU4sR0FBZTtBQUNiSyxjQUFZLEVBQUUsd0JBQVk7QUFDMUIsUUFBRzVYLGVBQWUsQ0FBQzZYLHVCQUFoQixDQUF3QyxrQkFBeEMsQ0FBSCxFQUErRDtBQUM5RG5aLFdBQUssQ0FBQ3lPLFFBQU4sQ0FBZThFLGFBQWYsQ0FBNkJqUyxlQUFlLENBQUM2WCx1QkFBaEIsQ0FBd0Msa0JBQXhDLEVBQTREQyxpQkFBekYsRUFBNEcsY0FBNUcsRUFBNEgsU0FBNUg7QUFDQSxhQUFPLElBQVA7QUFDQTs7QUFFRCxRQUFHMWEsZ0RBQU8sQ0FBQzZRLFNBQVIsQ0FBa0J2UCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNpUCxlQUFuRCxDQUFILEVBQXVFO0FBQ3RFdk8sV0FBSyxDQUFDeU8sUUFBTixDQUFlOEUsYUFBZixDQUE2QjdVLGdEQUFPLENBQUM2USxTQUFSLENBQWtCdlAsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDaVAsZUFBbkQsQ0FBN0IsRUFBa0csY0FBbEcsRUFBa0gsUUFBbEg7QUFDQSxhQUFPLElBQVA7QUFDQTs7QUFFRCxXQUFPLEtBQVA7QUFDQyxHQWJZO0FBZWI4SyxzQkFBb0IsRUFBRSxnQ0FBVztBQUNqQyxRQUFJclosS0FBSyxDQUFDNlksTUFBTixDQUFhSyxZQUFiLEVBQUosRUFDQzs7QUFFRCxRQUFHO0FBQ0YsVUFBSUksY0FBYyxHQUFHLElBQUlDLGNBQUosRUFBckI7QUFDQUQsb0JBQWMsQ0FBQ0UsK0JBQWYsQ0FBK0NsWSxlQUEvQztBQUNBLEtBSEQsQ0FHRSxPQUFNK1QsS0FBTixFQUFhO0FBQ2R4WCxRQUFFLENBQUM4UixjQUFILENBQWtCLDhCQUFsQixFQUFrRCxZQUFZMEYsS0FBWixHQUFvQixtQkFBcEIsR0FBMEMvVCxlQUFlLENBQUNtWSxZQUFoQixDQUE2QixDQUE3QixFQUFnQ0wsaUJBQTVIO0FBQ0E7QUFDRCxHQXpCYTtBQTJCZE4sc0JBQW9CLEVBQUUsOEJBQVNZLFFBQVQsRUFBa0I7QUFDdkMsUUFBRyxDQUFDcFksZUFBZSxDQUFDcVksV0FBaEIsRUFBRCxJQUFrQ0QsUUFBUSxDQUFDckIsTUFBVCxLQUFtQixZQUFyRCxJQUFxRSxDQUFDM1osZ0RBQU8sQ0FBQzZRLFNBQVIsQ0FBa0J2UCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCNE4saUJBQTVDLENBQXpFLEVBQXdJO0FBQ3ZJLGFBQU8sSUFBUDtBQUNBOztBQUNELFdBQU8sS0FBUDtBQUNBO0FBaENhLENBQWY7QUFvQ0F0TyxLQUFLLENBQUM4UCxZQUFOLEdBQXFCO0FBQ3BCOEosZUFBYSxFQUFFLHVCQUFTOUIsS0FBVCxFQUFnQitCLEdBQWhCLEVBQXFCO0FBQ25DLFFBQUksQ0FBQy9CLEtBQUwsRUFBWTtBQUNYLFVBQUkrQixHQUFKLEVBQVNuYixnREFBTyxDQUFDOEIsU0FBUixDQUFrQlIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDcUIsR0FBbkQsRUFBd0QsRUFBeEQsRUFBNEQsQ0FBQyxDQUE3RDtBQUNULFVBQUlqQyxnREFBTyxDQUFDNlEsU0FBUixDQUFrQnZQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQytHLEtBQW5ELENBQUosRUFBK0QzSCxnREFBTyxDQUFDOEIsU0FBUixDQUFrQlIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDK0csS0FBbkQsRUFBMEQsRUFBMUQsRUFBOEQsQ0FBQyxDQUEvRDtBQUMvRDs7QUFDRCxXQUFPeVIsS0FBSyxJQUFJLEVBQWhCO0FBQ0EsR0FQbUI7QUFRcEJnQyxtQ0FBaUMsRUFBRSwyQ0FBU2hDLEtBQVQsRUFBZ0IrQixHQUFoQixFQUFxQjtBQUN2RCxRQUFJN1osS0FBSyxDQUFDOFAsWUFBTixDQUFtQjhKLGFBQW5CLENBQWlDOUIsS0FBakMsRUFBd0MrQixHQUF4QyxDQUFKLEVBQWtEO0FBQ2pELFVBQUlBLEdBQUosRUFBUztBQUNSLFlBQUlFLE9BQU8sR0FBR2pXLElBQUksQ0FBQzZULEtBQUwsQ0FBV3FDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDSixHQUFELENBQUwsQ0FBcEIsQ0FBZDs7QUFDQSxZQUFJL0IsS0FBSyxJQUFJaUMsT0FBTyxDQUFDakMsS0FBakIsS0FBMkIsT0FBT2lDLE9BQU8sQ0FBQ0csT0FBZixJQUEwQixXQUExQixJQUF5Q0gsT0FBTyxDQUFDRyxPQUFSLElBQW1CbGEsS0FBSyxDQUFDUyxTQUFOLENBQWdCZ04sY0FBaEIsRUFBdkYsQ0FBSixFQUE4SDtBQUM3SHpOLGVBQUssQ0FBQzhQLFlBQU4sQ0FBbUJDLGtCQUFuQixDQUFzQ2dLLE9BQU8sQ0FBQ3ZCLFVBQTlDLEVBQTBEdUIsT0FBTyxDQUFDMUIsTUFBbEUsRUFBMEUwQixPQUFPLENBQUNJLE1BQWxGLEVBQTBGSixPQUFPLENBQUN6QixhQUFsRzs7QUFDQSxjQUFHeUIsT0FBTyxDQUFDdkIsVUFBWCxFQUFzQjtBQUNyQnhZLGlCQUFLLENBQUN5TyxRQUFOLENBQWU4RSxhQUFmLENBQTZCd0csT0FBTyxDQUFDSyxJQUFyQyxFQUEyQyxVQUEzQyxFQUF1RCxTQUF2RDtBQUNBOztBQUNEO0FBQ0E7O0FBQ0QxYix3REFBTyxDQUFDOEIsU0FBUixDQUFrQlIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDcUIsR0FBbkQsRUFBd0QsRUFBeEQsRUFBNEQsQ0FBQyxDQUE3RDtBQUNBOztBQUNEWCxXQUFLLENBQUNrVSxjQUFOLENBQXFCMkQsMkNBQXJCLENBQWlFQyxLQUFqRTtBQUNBO0FBQ0QsR0F2Qm1CO0FBd0JwQlMsY0FBWSxFQUFFLHNCQUFTOEIsVUFBVCxFQUFxQmhDLE1BQXJCLEVBQTZCRyxVQUE3QixFQUF5Q2hCLDBCQUF6QyxFQUFxRTtBQUNsRixRQUFJZ0IsVUFBVSxJQUFJSCxNQUFNLElBQUksY0FBeEIsSUFBMENnQyxVQUFVLElBQUksS0FBNUQsRUFBbUU7QUFDbEUsVUFBSTdCLFVBQVUsSUFBSWhCLDBCQUFsQixFQUE4Q3hYLEtBQUssQ0FBQ2tVLGNBQU4sQ0FBcUJxRCxxREFBckIsQ0FBMkVDLDBCQUEzRTtBQUM5QyxhQUFPLElBQVA7QUFDQTs7QUFBQTtBQUNELFFBQUk5WSxnREFBTyxDQUFDNlEsU0FBUixDQUFrQnZQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQytHLEtBQW5ELENBQUosRUFBK0QzSCxnREFBTyxDQUFDOEIsU0FBUixDQUFrQlIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDK0csS0FBbkQsRUFBMEQsRUFBMUQsRUFBOEQsQ0FBQyxDQUEvRDtBQUMvRCxXQUFPLEtBQVA7QUFDQSxHQS9CbUI7QUFnQ3BCMEosb0JBQWtCLEVBQUMsNEJBQVN5SSxVQUFULEVBQXFCSCxNQUFyQixFQUE2QjhCLE1BQTdCLEVBQXFDN0IsYUFBckMsRUFBbUQ7QUFDckVqVCxNQUFFLENBQUM1RyxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixZQUF0QixFQUFvQytaLFVBQXBDLENBQVI7QUFDQW5ULE1BQUUsQ0FBQzVHLElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCLFFBQXRCLEVBQWdDNFosTUFBaEMsQ0FBUjtBQUNBaFQsTUFBRSxDQUFDNUcsSUFBSCxDQUFRLENBQUMsbUJBQUQsRUFBc0IsUUFBdEIsRUFBZ0MwYixNQUFoQyxDQUFSO0FBQ0EsUUFBRzdCLGFBQWEsSUFBSSxHQUFwQixFQUNDalQsRUFBRSxDQUFDNUcsSUFBSCxDQUFRLENBQUMsbUJBQUQsRUFBc0IsVUFBdEIsRUFBa0M2WixhQUFsQyxDQUFSO0FBQ0Q7QUF0Q21CLENBQXJCO0FBeUNBdFksS0FBSyxDQUFDK08sSUFBTixHQUFhO0FBQ1p1TCxXQUFTLEVBQUUscUJBQVc7QUFDckIsV0FBT3RhLEtBQUssQ0FBQ1MsU0FBTixDQUFnQitPLG9CQUFoQixPQUEyQyxTQUEzQyxHQUF1RCxJQUF2RCxHQUE4RCxLQUFyRTtBQUNBLEdBSFc7QUFJWitLLDBCQUF3QixFQUFFLG9DQUFXO0FBQ3BDLFFBQUksT0FBT3ZhLEtBQUssQ0FBQ1MsU0FBTixDQUFnQitPLG9CQUFoQixFQUFQLEtBQWtELFdBQXRELEVBQW1FO0FBQ2xFM1IsUUFBRSxDQUFDOFIsY0FBSCxDQUFrQiw4Q0FBbEIsRUFBa0V0USxRQUFRLENBQUNILFFBQVQsQ0FBa0JrTixJQUFwRjtBQUNBLGFBQU8sS0FBUDtBQUNBOztBQUFBOztBQUNELFFBQUksT0FBT3BNLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLEVBQVAsS0FBNEMsV0FBaEQsRUFBNkQ7QUFDNUQ1UCxRQUFFLENBQUM4UixjQUFILENBQWtCLDZDQUFsQixFQUFpRXRRLFFBQVEsQ0FBQ0gsUUFBVCxDQUFrQmtOLElBQW5GO0FBQ0EsYUFBTyxLQUFQO0FBQ0E7O0FBQUE7QUFDRCxXQUFPLElBQVA7QUFDQSxHQWRXO0FBZVpvTywrQkFBNkIsRUFBRSx5Q0FBVztBQUN6QyxRQUFJN1gsR0FBRyxHQUFHM0MsS0FBSyxDQUFDK08sSUFBTixDQUFXMEwsdUJBQVgsRUFBVjtBQUNBLFFBQUlDLGNBQWMsR0FBRyxDQUFDLFlBQUQsRUFBYyxZQUFkLENBQXJCO0FBQ0EsUUFBSUMsZUFBZSxHQUFHLEVBQXRCOztBQUVBLFNBQUssSUFBSUMsZ0JBQWdCLEdBQUcsQ0FBNUIsRUFBK0JBLGdCQUFnQixHQUFHRixjQUFjLENBQUM3VyxNQUFqRSxFQUF5RStXLGdCQUFnQixFQUF6RixFQUE2RjtBQUM1RixVQUFJQyxhQUFhLEdBQUdILGNBQWMsQ0FBQ0UsZ0JBQUQsQ0FBbEM7O0FBQ0EsVUFBSWpZLEdBQUcsQ0FBQzBNLE9BQUosQ0FBWXdMLGFBQWEsR0FBRyxHQUE1QixLQUFvQyxDQUFDLENBQXpDLEVBQTRDO0FBQzNDLFlBQUlDLEtBQUssR0FBRyxJQUFJbGIsTUFBSixDQUFXLFlBQVlpYixhQUFaLEdBQTRCLFdBQXZDLENBQVo7QUFDQSxZQUFJRSxhQUFhLEdBQUdwWSxHQUFHLENBQUNoRCxLQUFKLENBQVVtYixLQUFWLEVBQWlCLENBQWpCLENBQXBCOztBQUNBLFlBQUdDLGFBQUgsRUFBaUI7QUFDaEJKLHlCQUFlLENBQUNsYyxJQUFoQixDQUFxQnNjLGFBQXJCO0FBQ0E7QUFDRDtBQUNEOztBQUNELFFBQUlKLGVBQWUsQ0FBQzlXLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQy9Cd0IsUUFBRSxDQUFDNUcsSUFBSCxDQUFRLENBQUMsbUJBQUQsRUFBc0IsS0FBdEIsRUFBNkJrYyxlQUFlLENBQUNLLElBQWhCLENBQXFCLEdBQXJCLENBQTdCLENBQVI7QUFDQTs7QUFDRCxRQUFJclksR0FBRyxDQUFDME0sT0FBSixDQUFZLGVBQVosS0FBZ0MsQ0FBQyxDQUFyQyxFQUF3QztBQUN2QyxVQUFJeUwsS0FBSyxHQUFHLElBQUlsYixNQUFKLENBQVcscUJBQVgsQ0FBWjtBQUNBLFVBQUlxYixRQUFRLEdBQUd0WSxHQUFHLENBQUNoRCxLQUFKLENBQVVtYixLQUFWLEVBQWlCLENBQWpCLENBQWY7O0FBQ0EsVUFBR0csUUFBSCxFQUFZO0FBQ1g1VixVQUFFLENBQUM1RyxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixVQUF0QixFQUFrQ3djLFFBQWxDLENBQVI7QUFDQTtBQUNEO0FBQ0QsR0F4Q1c7QUF5Q1pDLGtCQUFnQixFQUFFLDRCQUFXO0FBQzVCLFFBQUk5SixTQUFTLEdBQUdELFNBQVMsQ0FBQ0MsU0FBMUI7QUFDQSxRQUFJK0osVUFBVSxHQUFHLElBQUl2YixNQUFKLENBQVcsNElBQVgsQ0FBakI7QUFDQSxRQUFJd2IsTUFBTSxHQUFHRCxVQUFVLENBQUNqSyxJQUFYLENBQWdCRSxTQUFoQixDQUFiO0FBQ0EvTCxNQUFFLENBQUM1RyxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixVQUF0QixFQUFrQzJjLE1BQWxDLENBQVI7QUFDQSxXQUFPQSxNQUFQO0FBQ0EsR0EvQ1c7QUFnRFpuSCxhQUFXLEVBQUUsdUJBQVc7QUFDdkIsV0FBT2pVLEtBQUssQ0FBQ1MsU0FBTixDQUFnQjJPLGdCQUFoQixNQUFzQyxLQUF0QyxHQUE4QyxNQUE5QyxHQUF1RCxFQUE5RDtBQUNBLEdBbERXO0FBbURaaU0sbUJBQWlCLEVBQUUsMkJBQVNDLFNBQVQsRUFBb0I7QUFDdEMsUUFBSUMsVUFBVSxHQUFHdmIsS0FBSyxDQUFDK08sSUFBTixDQUFXMEwsdUJBQVgsRUFBakI7QUFDQSxXQUFPYyxVQUFVLENBQUNsTSxPQUFYLENBQW1CaU0sU0FBbkIsS0FBaUMsQ0FBQyxDQUFsQyxHQUFzQyxJQUF0QyxHQUE2QyxLQUFwRDtBQUNBLEdBdERXO0FBdURaaE0sd0JBQXNCLEVBQUUsZ0NBQVN3QyxTQUFULEVBQW9CO0FBQzNDLFFBQUk5UixLQUFLLENBQUMrTyxJQUFOLENBQVdzTSxpQkFBWCxDQUE2QnZKLFNBQTdCLENBQUosRUFBNkM7QUFDNUMsVUFBSXlKLFVBQVUsR0FBR3ZiLEtBQUssQ0FBQytPLElBQU4sQ0FBVzBMLHVCQUFYLEVBQWpCO0FBQ0EsVUFBSUssS0FBSyxHQUFHLElBQUlsYixNQUFKLENBQVcsWUFBWWtTLFNBQVosR0FBd0IsV0FBbkMsQ0FBWjtBQUNBLGFBQU95SixVQUFVLENBQUM1YixLQUFYLENBQWlCbWIsS0FBakIsRUFBd0IsQ0FBeEIsQ0FBUDtBQUNBOztBQUNELFdBQU8sZUFBUDtBQUNBLEdBOURXO0FBK0RaVSxTQUFPLEVBQUUsbUJBQVc7QUFDbkIsUUFBSTFKLFNBQVMsR0FBRzlSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJxTyxJQUExQixDQUErQkUsS0FBL0M7QUFDQSxRQUFJOEMsY0FBYyxHQUFHL1IsS0FBSyxDQUFDK08sSUFBTixDQUFXTyxzQkFBWCxDQUFrQ3dDLFNBQWxDLENBQXJCOztBQUNBLFFBQUlDLGNBQWMsSUFBSSxNQUF0QixFQUE4QjtBQUM3QnJULHNEQUFPLENBQUM4QixTQUFSLENBQWtCc1IsU0FBbEIsRUFBNkJDLGNBQTdCLEVBQTZDLENBQTdDO0FBQ0EsYUFBTyxJQUFQO0FBQ0E7O0FBQ0QsUUFBSUEsY0FBYyxJQUFJLE9BQXRCLEVBQStCO0FBQzlCclQsc0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JzUixTQUFsQixFQUE2QixFQUE3QixFQUFpQyxDQUFDLENBQWxDO0FBQ0EsYUFBTyxLQUFQO0FBQ0E7O0FBQ0QsUUFBSXBULGdEQUFPLENBQUM2USxTQUFSLENBQWtCdlAsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnFPLElBQTFCLENBQStCRSxLQUFqRCxDQUFKLEVBQTZEO0FBQzVELGFBQU8sSUFBUDtBQUNBOztBQUNELFdBQU8sS0FBUDtBQUNBLEdBOUVXO0FBK0Vad00saUJBQWUsRUFBRSwyQkFBVztBQUMzQixRQUFJWCxLQUFLLEdBQUcsSUFBSWxiLE1BQUosQ0FBVyxXQUFYLENBQVo7QUFBQSxRQUFxQytDLEdBQUcsR0FBRzNDLEtBQUssQ0FBQytPLElBQU4sQ0FBVzJNLHFCQUFYLEVBQTNDOztBQUNBLFFBQUkvWSxHQUFHLENBQUNoRCxLQUFKLENBQVVtYixLQUFWLEVBQWlCLENBQWpCLEVBQW9CekwsT0FBcEIsQ0FBNEIsUUFBNUIsSUFBd0MsQ0FBQyxDQUF6QyxJQUErQzFNLEdBQUcsQ0FBQ2hELEtBQUosQ0FBVW1iLEtBQVYsRUFBaUIsQ0FBakIsRUFBb0J6TCxPQUFwQixDQUE0QixRQUE1QixJQUF3QyxDQUFDLENBQXpDLElBQThDMU0sR0FBRyxDQUFDaEQsS0FBSixDQUFVbWIsS0FBVixFQUFpQixDQUFqQixFQUFvQnpMLE9BQXBCLENBQTRCLEtBQTVCLEtBQXNDLENBQUMsQ0FBeEksRUFBNEk7QUFDM0ksYUFBTzFNLEdBQUcsQ0FBQ2hELEtBQUosQ0FBVW1iLEtBQVYsRUFBaUIsQ0FBakIsQ0FBUDtBQUNBOztBQUNELFdBQU8sRUFBUDtBQUNBLEdBckZXO0FBc0ZaYSxlQUFhLEVBQUUsdUJBQVNDLFNBQVQsRUFBb0I7QUFDbEN4ZSxVQUFNLENBQUNpRCxVQUFQLEdBQW9CdWIsU0FBcEI7QUFDQTViLFNBQUssQ0FBQ3lPLFFBQU4sQ0FBZTJFLG1CQUFmLENBQW1DLEtBQW5DO0FBQ0EsR0F6Rlc7QUEwRlp5SSxzQkFBb0IsRUFBRSw4QkFBU0QsU0FBVCxFQUFvQjtBQUN6Q3hlLFVBQU0sQ0FBQ2lELFVBQVAsR0FBb0J1YixTQUFwQjtBQUNBNWIsU0FBSyxDQUFDUyxTQUFOLENBQWdCME4sdUJBQWhCLEdBQTBDLElBQTFDO0FBQ0FuTyxTQUFLLENBQUN5TyxRQUFOLENBQWUyRSxtQkFBZixDQUFtQyxJQUFuQztBQUNBLEdBOUZXO0FBK0ZacUgseUJBQXVCLEVBQUUsbUNBQVU7QUFDbEMsV0FBT3JkLE1BQU0sQ0FBQzhCLFFBQVAsQ0FBZ0IrQyxNQUF2QjtBQUNBLEdBakdXO0FBa0daeVosdUJBQXFCLEVBQUUsaUNBQVU7QUFDaEMsV0FBT3RlLE1BQU0sQ0FBQzhCLFFBQVAsQ0FBZ0JrTixJQUF2QjtBQUNBLEdBcEdXO0FBcUdaNEgsY0FBWSxFQUFFLHNCQUFTOEgsT0FBVCxFQUFpQjtBQUM5QixRQUFJOUssQ0FBQyxHQUFHM1IsUUFBUSxDQUFDNEUsYUFBVCxDQUF1QixLQUF2QixDQUFSO0FBQ0ErTSxLQUFDLENBQUM3TSxTQUFGLEdBQWMyWCxPQUFkO0FBQ0F6YyxZQUFRLENBQUN3SyxJQUFULENBQWNrUyxZQUFkLENBQTJCL0ssQ0FBM0IsRUFBOEIzUixRQUFRLENBQUN3SyxJQUFULENBQWNtUyxTQUE1QztBQUNBLEdBekdXO0FBMEdacE0sV0FBUyxFQUFFLHFCQUFVO0FBQ3BCLFFBQUlxTSxRQUFRLEdBQUcsQ0FBQyxPQUFELEVBQVUsY0FBVixFQUEwQixPQUExQixFQUFtQyxTQUFuQyxFQUE4QyxZQUE5QyxFQUE0RCxjQUE1RCxFQUE0RSxlQUE1RSxFQUE2RixlQUE3RixFQUE4RyxhQUE5RyxFQUE2SCxJQUE3SCxFQUFtSSxPQUFuSSxFQUE0SSxTQUE1SSxFQUFzSixTQUF0SixDQUFmO0FBQ0EsUUFBR0EsUUFBUSxDQUFDNU0sT0FBVCxDQUFpQnJQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLEVBQWpCLElBQXFELENBQUMsQ0FBekQsRUFDQyxPQUFPLElBQVAsQ0FERCxLQUdDLE9BQU8sS0FBUDtBQUNELEdBaEhXO0FBaUhaeU8sZ0JBQWMsRUFBRSx3QkFBVUMsWUFBVixFQUF3QkMsV0FBeEIsRUFBcUN2TSxXQUFyQyxFQUFrRDtBQUNqRXpTLFVBQU0sQ0FBQ3FTLGlCQUFQLEdBQTJCME0sWUFBM0I7QUFDQS9lLFVBQU0sQ0FBQytSLGlCQUFQLEdBQTJCaU4sV0FBM0I7QUFDQWhmLFVBQU0sQ0FBQ3lELGdCQUFQLEdBQTBCZ1AsV0FBMUI7O0FBQ0EsUUFBSSxPQUFPelMsTUFBTSxDQUFDaUQsVUFBZCxLQUE2QixXQUFqQyxFQUE4QztBQUM3Q2pELFlBQU0sQ0FBQ2lELFVBQVAsQ0FBa0JDLGVBQWxCLEdBQW9DLEVBQXBDO0FBQ0E7O0FBQ0ROLFNBQUssQ0FBQ3FjLFVBQU4sQ0FBaUJDLE1BQWpCO0FBQ0FqWCxNQUFFLENBQUNqRixVQUFILENBQWNtYyxPQUFkO0FBQ0EsR0ExSFc7QUEySFpDLFNBQU8sRUFBRSxtQkFBWTtBQUNwQixRQUFHeGMsS0FBSyxDQUFDUyxTQUFOLENBQWdCZ04sY0FBaEIsT0FBcUMsT0FBeEMsRUFDQyxPQUFPLElBQVAsQ0FERCxLQUdDLE9BQU8sS0FBUDtBQUNEO0FBaElXLENBQWI7QUFtSUF6TixLQUFLLENBQUNnWSxZQUFOLEdBQXFCO0FBQ3BCQywwQkFBd0IsRUFBRTtBQUN6QixXQUFPO0FBQ04sMkJBQW9CLFlBRGQ7QUFFTixtQ0FBNEIsWUFGdEI7QUFHTixvQkFBYSxNQUhQO0FBSU4seUJBQWtCLHNFQUpaO0FBS04saUNBQTBCLHNFQUxwQjtBQU1OLDJCQUFvQix5RUFBd0VqWSxLQUFLLENBQUNTLFNBQU4sQ0FBZ0IyTSxZQUFoQixFQUF4RSxHQUF3RyxxQkFOdEg7QUFPTiwyQkFBb0IseUNBUGQ7QUFRTiw4QkFBdUIsS0FBR3BOLEtBQUssQ0FBQytPLElBQU4sQ0FBVzBNLGVBQVgsRUFBSCxHQUFnQztBQVJqRCxLQURrQjtBQVd6QixXQUFNO0FBQ0wsMkJBQW9CLFlBRGY7QUFFTCxtQ0FBNEIsWUFGdkI7QUFHTCxvQkFBYSxPQUhSO0FBSUwseUJBQWtCLHlFQUpiO0FBS0wsaUNBQTBCLHlFQUxyQjtBQU1MLDJCQUFvQix5RUFBd0V6YixLQUFLLENBQUNTLFNBQU4sQ0FBZ0IyTSxZQUFoQixFQUF4RSxHQUF3RyxxQkFOdkg7QUFPTCwyQkFBb0IseUNBUGY7QUFRTCw4QkFBdUIsS0FBR3BOLEtBQUssQ0FBQytPLElBQU4sQ0FBVzBNLGVBQVgsRUFBSCxHQUFnQztBQVJsRCxLQVhtQjtBQXFCekIsV0FBTTtBQUNMLDJCQUFvQixZQURmO0FBRUwsbUNBQTRCLFlBRnZCO0FBR0wsb0JBQWEsT0FIUjtBQUlMLHlCQUFrQix5RUFKYjtBQUtMLGlDQUEwQix5RUFMckI7QUFNTCwyQkFBb0IsbUVBQWtFemIsS0FBSyxDQUFDUyxTQUFOLENBQWdCMk0sWUFBaEIsRUFBbEUsR0FBa0cscUJBTmpIO0FBT0wsMkJBQW9CLHNDQVBmO0FBUUwsOEJBQXVCLEtBQUdwTixLQUFLLENBQUMrTyxJQUFOLENBQVcwTSxlQUFYLEVBQUgsR0FBZ0M7QUFSbEQ7QUFyQm1CO0FBRE4sQ0FBckI7QUFtQ0F6YixLQUFLLENBQUNxYyxVQUFOLEdBQW1CO0FBQ2xCQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEJ6ZSxNQUFFLENBQUN1SSxTQUFILENBQWEsb0JBQWIsRUFBbUMsZUFBbkM7QUFDQWYsTUFBRSxHQUFHakksTUFBTSxDQUFDLElBQUQsQ0FBTixJQUFnQixFQUFyQjtBQUNBaUksTUFBRSxDQUFDNUcsSUFBSCxDQUFRLENBQUMsU0FBRCxFQUFZLENBQUN1QixLQUFLLENBQUNTLFNBQU4sQ0FBZ0IrTyxvQkFBaEIsRUFBRCxDQUFaLENBQVI7O0FBQ0EsUUFBSXhQLEtBQUssQ0FBQytPLElBQU4sQ0FBV2EsU0FBWCxNQUEwQjVQLEtBQUssQ0FBQytPLElBQU4sQ0FBV3lOLE9BQVgsRUFBOUIsRUFBb0Q7QUFDbkRuWCxRQUFFLENBQUM1RyxJQUFILENBQVEsQ0FBQyxRQUFELEVBQVd1QixLQUFLLENBQUNnWSxZQUFOLENBQW1CQyx3QkFBbkIsQ0FBNENqWSxLQUFLLENBQUNTLFNBQU4sQ0FBZ0IyTyxnQkFBaEIsRUFBNUMsRUFBZ0ZxTix5QkFBM0YsQ0FBUjtBQUNBLEtBRkQsTUFHSztBQUNKcFgsUUFBRSxDQUFDNUcsSUFBSCxDQUFRLENBQUMsUUFBRCxFQUFXdUIsS0FBSyxDQUFDZ1ksWUFBTixDQUFtQkMsd0JBQW5CLENBQTRDalksS0FBSyxDQUFDUyxTQUFOLENBQWdCMk8sZ0JBQWhCLEVBQTVDLEVBQWdGc04saUJBQTNGLENBQVI7QUFDQTs7QUFDRHJYLE1BQUUsQ0FBQzVHLElBQUgsQ0FBUSxDQUFDLFlBQUQsRUFBZXVCLEtBQUssQ0FBQ2dZLFlBQU4sQ0FBbUJDLHdCQUFuQixDQUE0Q2pZLEtBQUssQ0FBQ1MsU0FBTixDQUFnQjJPLGdCQUFoQixFQUE1QyxFQUFnRnVOLFVBQS9GLENBQVI7QUFDQXRYLE1BQUUsQ0FBQzVHLElBQUgsQ0FBUSxDQUFDLFVBQUQsRUFBYXVCLEtBQUssQ0FBQytPLElBQU4sQ0FBV3lNLE9BQVgsRUFBYixDQUFSO0FBQ0EsUUFBSW9CLFNBQVMsR0FBRzVjLEtBQUssQ0FBQytPLElBQU4sQ0FBVzJNLHFCQUFYLEdBQW1DamMsS0FBbkMsQ0FBeUMsR0FBekMsRUFBOEMsQ0FBOUMsQ0FBaEI7QUFDQTRGLE1BQUUsQ0FBQzVHLElBQUgsQ0FBUSxDQUFDLFlBQUQsRUFBY21lLFNBQWQsQ0FBUjtBQUNBdlgsTUFBRSxDQUFDNUcsSUFBSCxDQUFRLENBQUMsU0FBRCxFQUFZdUIsS0FBSyxDQUFDUyxTQUFOLENBQWdCZ04sY0FBaEIsRUFBWixDQUFSO0FBQ0FwSSxNQUFFLENBQUM1RyxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixhQUF0QixFQUFxQ3VCLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLGNBQWhCLEVBQXJDLENBQVI7QUFDQXpOLFNBQUssQ0FBQ2dRLGFBQU4sQ0FBb0JZLGlCQUFwQixDQUFzQyxVQUFVQyxVQUFWLEVBQXNCO0FBQzNEeEwsUUFBRSxDQUFDNUcsSUFBSCxDQUFRLENBQUMsbUJBQUQsRUFBc0IsU0FBdEIsRUFBaUNvUyxVQUFqQyxDQUFSO0FBQ0EsS0FGRDs7QUFJQSxRQUFJN1EsS0FBSyxDQUFDUyxTQUFOLENBQWdCeU8sbUJBQWhCLEVBQUosRUFBMkM7QUFDMUM3SixRQUFFLENBQUM1RyxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixtQkFBdEIsRUFBMkMsSUFBM0MsQ0FBUjtBQUNBOztBQUVELFFBQUksT0FBTzhDLEdBQVAsS0FBZSxXQUFmLElBQStCLE9BQU9ELGVBQVAsS0FBMkIsV0FBM0IsSUFBMENBLGVBQWUsQ0FBQ3FZLFdBQWhCLEVBQTdFLEVBQThHO0FBQzdHM1osV0FBSyxDQUFDNlksTUFBTixDQUFhUSxvQkFBYixDQUFrQy9YLGVBQWxDO0FBQ0F0QixXQUFLLENBQUM4UCxZQUFOLENBQW1CQyxrQkFBbkIsQ0FBc0MsSUFBdEMsRUFBMkMsWUFBM0MsRUFBeUQsSUFBekQsRUFBK0QsRUFBL0Q7QUFDQSxLQUhELE1BR0s7QUFDSi9QLFdBQUssQ0FBQzhQLFlBQU4sQ0FBbUJnSyxpQ0FBbkIsQ0FBcURwYixnREFBTyxDQUFDNlEsU0FBUixDQUFrQnZQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQzhPLElBQW5ELENBQXJELEVBQStHMVAsZ0RBQU8sQ0FBQzZRLFNBQVIsQ0FBa0J2UCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxQixHQUFuRCxDQUEvRztBQUNBOztBQUVEWCxTQUFLLENBQUNtUyxjQUFOLENBQXFCQyxTQUFyQjtBQUNBcFMsU0FBSyxDQUFDNE8sSUFBTixDQUFXb0QsZ0JBQVg7QUFFQTNNLE1BQUUsQ0FBQzVHLElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCLHNCQUF0QixFQUE4QyxJQUE5QyxDQUFSO0FBQ0F1QixTQUFLLENBQUMrTyxJQUFOLENBQVdtTSxnQkFBWCxNQUFpQ2xiLEtBQUssQ0FBQytPLElBQU4sQ0FBV3lMLDZCQUFYLEVBQWpDO0FBQ0FuVixNQUFFLENBQUM1RyxJQUFILENBQVEsQ0FBQyxZQUFELEVBQWUsYUFBZixFQUE4QnVCLEtBQUssQ0FBQytPLElBQU4sQ0FBVzRNLGFBQXpDLENBQVI7QUFDQXRXLE1BQUUsQ0FBQzVHLElBQUgsQ0FBUSxDQUFDLFlBQUQsRUFBZSxjQUFmLEVBQStCdUIsS0FBSyxDQUFDK08sSUFBTixDQUFXOE0sb0JBQTFDLENBQVI7QUFDQWhlLE1BQUUsQ0FBQ3VJLFNBQUgsQ0FBYSxvQkFBYixFQUFtQyxZQUFuQztBQUNBO0FBeENpQixDQUFuQjs7QUEyQ0EsU0FBU3lXLG9CQUFULEdBQStCO0FBQzlCLE1BQUlDLENBQUMsR0FBR3pkLFFBQVEsQ0FBQzRFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBUjtBQUNBNlksR0FBQyxDQUFDNVksSUFBRixHQUFTLGlCQUFUO0FBQ0E0WSxHQUFDLENBQUNDLEtBQUYsR0FBVSxJQUFWOztBQUNBLE1BQUcvYyxLQUFLLENBQUMrTyxJQUFOLENBQVdhLFNBQVgsTUFBMEI1UCxLQUFLLENBQUMrTyxJQUFOLENBQVd5TixPQUFYLEVBQTdCLEVBQW1EO0FBQ2xETSxLQUFDLENBQUN6WSxHQUFGLEdBQVFyRSxLQUFLLENBQUNnWSxZQUFOLENBQW1CQyx3QkFBbkIsQ0FBNENqWSxLQUFLLENBQUNTLFNBQU4sQ0FBZ0IyTyxnQkFBaEIsRUFBNUMsRUFBZ0Y0Tix1QkFBeEY7QUFDQSxHQUZELE1BRU87QUFDTkYsS0FBQyxDQUFDelksR0FBRixHQUFRckUsS0FBSyxDQUFDZ1ksWUFBTixDQUFtQkMsd0JBQW5CLENBQTRDalksS0FBSyxDQUFDUyxTQUFOLENBQWdCMk8sZ0JBQWhCLEVBQTVDLEVBQWdGNk4sZUFBeEY7QUFDQTs7QUFFRCxNQUFJQyxDQUFDLEdBQUc3ZCxRQUFRLENBQUM4ZCxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFSO0FBRUFELEdBQUMsQ0FBQ0UsVUFBRixDQUFhckIsWUFBYixDQUEwQmUsQ0FBMUIsRUFBNkJJLENBQTdCO0FBQ0FyZixJQUFFLENBQUN1SSxTQUFILENBQWEsb0JBQWIsRUFBbUMsbUJBQW5DO0FBQ0E7O0FBRUQsU0FBU2lYLFNBQVQsR0FBcUI7QUFDcEIsTUFBR2pnQixNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBZixDQUFxQndJLElBQXhCLEVBQ0NwSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLFdBQTFCOztBQUVFLE1BQUlwQixNQUFNLENBQUNDLE9BQVAsQ0FBZStELEdBQWYsQ0FBbUJVLE1BQXZCLEVBQStCO0FBQ2pDMUUsVUFBTSxDQUFDaUUsR0FBUCxDQUFXNUMsSUFBWCxDQUFnQixVQUFDNmUsYUFBRCxFQUFtQjtBQUNsQyxVQUFHbGdCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixLQUFmLENBQXFCb0UsR0FBeEIsRUFDQ2hELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDOGUsYUFBakM7QUFFRC9iLFNBQUcsR0FBRytiLGFBQU47QUFFQUEsbUJBQWEsQ0FBQ0MseUJBQWQsQ0FBd0MsVUFBQUMsbUJBQW1CLEVBQUk7QUFDOURBLDJCQUFtQixDQUFDMWEsSUFBcEIsQ0FBeUIsVUFBQTJXLFlBQVksRUFBSTtBQUN4Q3JjLGdCQUFNLENBQUNrRSxlQUFQLEdBQXlCbVksWUFBekI7QUFFQTViLFlBQUUsQ0FBQ3VJLFNBQUgsQ0FBYSxrQkFBYixFQUFpQyx3QkFBakM7O0FBRUEsY0FBSWhKLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkMsS0FBZixDQUFxQitPLElBQXJCLENBQTBCd0wsd0JBQTFCLEVBQUosRUFBMEQ7QUFDekQsZ0JBQUc7QUFDRm5kLG9CQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQWYsQ0FBcUJxYyxVQUFyQixDQUFnQ0MsTUFBaEM7QUFDQU8sa0NBQW9CO0FBQ3BCLGFBSEQsQ0FJQSxPQUFNeEgsS0FBTixFQUFZO0FBQ1h4WCxnQkFBRSxDQUFDOFIsY0FBSCxDQUFrQix1Q0FBbEIsRUFBMkR0USxRQUFRLENBQUNILFFBQVQsQ0FBa0JrTixJQUE3RTtBQUNBO0FBQ0Q7QUFDRCxTQWREO0FBZUEsT0FoQkQ7QUFpQkEsS0F2QkQ7QUF3QkcsR0F6QkQsTUF5Qk87QUFDSHZPLE1BQUUsQ0FBQzhSLGNBQUgsQ0FBa0IsNEJBQWxCLEVBQWdEdFEsUUFBUSxDQUFDSCxRQUFULENBQWtCa04sSUFBbEU7O0FBQ0EsUUFBR2hQLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkMsS0FBZixDQUFxQitPLElBQXJCLENBQTBCd0wsd0JBQTFCLEVBQUgsRUFBeUQ7QUFDckRuZCxZQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQWYsQ0FBcUJxYyxVQUFyQixDQUFnQ0MsTUFBaEM7QUFDQU8sMEJBQW9CO0FBQ3ZCO0FBQ0o7O0FBQ0R6ZixRQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQWYsQ0FBcUJ3VixZQUFyQjtBQUNIOztTQUVjaUksUTs7Ozs7Ozt5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ3RZLGdCQUFJLENBQUN1WSxRQUFMLENBQWMxZCxLQUFkO0FBQ1NvQixlQUZWLEdBRWdCLElBQUlrRyw0Q0FBSixFQUZoQjtBQUFBO0FBQUE7QUFBQSxtQkFLUWxHLEdBQUcsQ0FBQ3FFLElBQUosRUFMUjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT1lsSCxtQkFBTyxDQUFDOFcsS0FBUjs7QUFQWjtBQVNDZ0kscUJBQVM7O0FBVFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVVDO0FBRURJLFFBQVEsRzs7Ozs7Ozs7Ozs7QUNwOUJSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7OztBQ2hCQSxpQkFBaUIsbUJBQU8sQ0FBQywwRUFBcUI7Ozs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgJ2Vwb2NhJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2Vwb2NhJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdhdXRvLWVzcG9ydGUnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnYXV0by1lc3BvcnRlJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICd2b2d1ZSc6IHtcclxuICAgICdjb2RfcHJvZCc6ICd2b2d1ZScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnZ2xhbW91cic6IHtcclxuICAgICdjb2RfcHJvZCc6ICdnbGFtb3VyJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdjYXNhLXZvZ3VlJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2Nhc2Etdm9ndWUnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ21hcmllLWNsYWlyZSc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdtYXJpZS1jbGFpcmUnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ2Nhc2EtZS1qYXJkaW0nOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnY2FzYS1qYXJkaW0nLFxyXG4gICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAncXVlbS1hY29udGVjZSc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdxdWVtJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdlcG9jYS1uZWdvY2lvcyc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdlcG9jYS1uZWdvY2lvcycsXHJcbiAgICAnaWQnOiAnMDAwMCdcclxuICAgIH0sXHJcbiAgICAnZ2xvYm8tcnVyYWwnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnZ2xvYm8tcnVyYWwnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ3BlZ24nOiB7XHJcbiAgICAnY29kX3Byb2QnOiAncGVxdWVuYXMtZW1wcmVzYXMnLFxyXG4gICAgJ2lkJzogJzAwMDAnXHJcbiAgICB9LFxyXG4gICAgJ2dhbGlsZXUnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnZ2FsaWxldScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnY3Jlc2Nlcic6IHtcclxuICAgICdjb2RfcHJvZCc6ICdjcmVzY2VyJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdncSc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdncScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnbW9uZXQnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnbW9uZXQnLFxyXG4gICAgJ2lkJzogJzY2MTgnXHJcbiAgICB9LFxyXG4gICAgJ29nbG9ibyc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcclxuICAgICdpZCc6ICczOTgxJ1xyXG4gICAgfSxcclxuICAgICdibG9ncyc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcclxuICAgICdpZCc6ICczOTgxJ1xyXG4gICAgfSxcclxuICAgICdrb2d1dCc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcclxuICAgICdpZCc6ICczOTgxJ1xyXG4gICAgfSxcclxuICAgICdhY2Vydm8nOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwNCcsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAnam9ybmFsZGlnaXRhbCc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdPRzAxJyxcclxuICAgICdpZCc6ICczOTgxJ1xyXG4gICAgfSxcclxuICAgICd2YWxvcic6IHtcclxuICAgICdjb2RfcHJvZCc6ICd2YWxvcmRpZ2l0YWwnLFxyXG4gICAgJ2lkJzogJzY2NjgnXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1ZzsgXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmIgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0RlZmluZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZmJxICE9PSAndW5kZWZpbmVkJykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGl4ZWxUeXBlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzUGl4ZWwgPSAodHlwZW9mIHRoaXMuZmIucGl4ZWwubmFtZSAhPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5mYi5waXhlbC5uYW1lIDogbnVsbDsgXHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNEZWZpbmVkICYmIGhhc1BpeGVsKXtcclxuICAgICAgICAgICAgZmJxKCdpbml0JywgJzQxMDI3MDAzOTUyMDYzNCcpO1xyXG4gICAgICAgICAgICBmYnEoJ3RyYWNrU2luZ2xlJywgJzQxMDI3MDAzOTUyMDYzNCcsIHRoaXMuZmIucGl4ZWwubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdBICB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYTtcclxuICAgICAgICB0aGlzLlByb2R1Y3RzID0gbmV3IFByb2R1Y3RzTW9kdWxlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldEdsb2JhbFZhcnMoKSB7XHJcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgIHx8IFtdOyBcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yICYmIHR5cGVvZiBfZ2FxID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgd2luZG93Ll9nYXEgPSB3aW5kb3cuX2dhcSAgfHwgW107ICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRFdmVudHMoYWN0aW9uLCBsYWJlbCwgY2F0ZWdvcnkgPSAnUGlhbm8nKSB7XHJcblxyXG5cdFx0aWYod2luZG93LnRpbnlDcHQuZGVidWcuZ2EpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdsb2ctZ2EtZXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IpXHJcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XHJcblx0XHRcclxuXHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6IGNhdGVnb3J5LCAnZXZlbnRvR0FBY2FvJzogYWN0aW9uLCAnZXZlbnRvR0FSb3R1bG8nOmxhYmVsfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldEV2ZW50c0Vycm9yKGFjdGlvbiwgbGFiZWwpIHtcclxuXHRcdGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxyXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdQaWFubyBFcnJvJywgYWN0aW9uLCBsYWJlbCwgLHRydWVdKTtcclxuXHJcblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8gRXJybycsICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcclxuXHR9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XHJcblxyXG4gICAgc3RhdGljIGlzRGVmaW5lZChwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcHJvcCAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZTogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldENvb2tpZShjX25hbWUsIHZhbHVlLCBleHBpcmVkYXlzID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBleGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lID8gbG9jYXRpb24uaG9zdG5hbWUgOiBudWxsO1xyXG5cclxuICAgICAgICBpZighaG9zdG5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgZXhkYXRlLnNldERhdGUoZXhkYXRlLmdldERhdGUoKSArIGV4cGlyZWRheXMpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNfbmFtZSArIFwiPVwiICtlc2NhcGUodmFsdWUpICsgKChleHBpcmVkYXlzKSA/IFwiXCIgOiBcIjtleHBpcmVzPVwiICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkpXHJcbiAgICAgICAgKyBcIjsgcGF0aD0vO1wiICsgXCJkb21haW49LlwiICsgaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClbMV0gKyBcIi5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb29raWUobmFtZSkge1xyXG4gICAgICAgIGxldCBtYXRjaCA9IChkb2N1bWVudC5jb29raWUpID8gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAobmFtZSsnPShbXjtdKyknKSkgOiBmYWxzZTtcclxuICAgICAgICBsZXQgY29va2llVGlueSA9IG1hdGNoID8gdW5lc2NhcGUobWF0Y2hbMV0udG9TdHJpbmcoKSkgOiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBjb29raWVUaW55O1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWFubyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXRFeHBlcmllbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcclxuICAgICAgICBpZih0eXBlb2Ygd2luZG93LnRpbnlDcHQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcpIHsgXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHdpbmRvdy50aW55Q3B0LlBpYW5vO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXhwZXJpZW5jZSgpIHsgIFxyXG4gICAgICAgIGxldCBleHBlcmllbmNlTmFtZSA9ICcnOyAgIFxyXG4gICAgICAgIHdpbmRvdy5QaWFuby5leHBlcmllbmNlID0ge307ICBcclxuICAgICAgICAgXHJcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpXHJcblx0XHRcdGV4cGVyaWVuY2VOYW1lID0gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyBgJHtyZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiByZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAod2luZG93Lm5vbWVFeHBlcmllbmNpYSkgXHJcblx0XHRcdGV4cGVyaWVuY2VOYW1lID0gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyBgJHt3aW5kb3cubm9tZUV4cGVyaWVuY2lhfSAtICR7d2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm99YCA6IHdpbmRvdy5ub21lRXhwZXJpZW5jaWE7XHJcbiAgICAgICBcclxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZS5uYW1lID0gZXhwZXJpZW5jZU5hbWU7XHJcblx0fVxyXG5cclxuICAgIHJlc2V0VXRwKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNEZWZpbmVkKVxyXG4gICAgICAgICAgICBIZWxwZXJzLnNldENvb2tpZSh0aGlzLmNvbnRlbnQudmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCAnJywgLTEpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0c0lkIGZyb20gJy4uL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzICB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWUgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2xvYmFsKCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIFByb2R1Y3Q6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvZHVjdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLyBpZDogdGhpcy5wcm9kdWN0SWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24ocHJvZHVjdHNTZXR0aW5ncywgd2luZG93LnRpbnlDcHQpIDogcHJvZHVjdHNTZXR0aW5nczsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBpc1Byb2R1Y3RWYWxvcigpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMucHJvZHVjdE5hbWUgJiYgdGhpcy5wcm9kdWN0TmFtZSA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2R1Y3RJZCgpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKCAodHlwZW9mIHByb2R1Y3RzSWRbdGhpcy5wcm9kdWN0TmFtZV0gIT09ICAndW5kZWZpbmVkJykgXHJcbiAgICAgICAgJiYgKHR5cGVvZiBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkICE9PSAgJ3VuZGVmaW5lZCcpIClcclxuICAgICAgICA/IHByb2R1Y3RzSWRbdGhpcy5wcm9kdWN0TmFtZV0uaWQgOiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dnIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHdpbmRvdy5TV0cgPSB3aW5kb3cuU1dHIHx8IFtdOyAvL1RPRE86IFVuZGVyc3RhbmQgd2h5IHRoaXMgdmFyaWFibGUgZXhpc3RzXHJcbiAgICAgICAgd2luZG93LnN3Z0VudGl0bGVtZW50cyA9IHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLmRlYnVnID0gKEhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgPyB3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vID0gKHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyBub21lUHJvZHV0b1BpYW5vIDogbnVsbDtcclxuICAgICAgICB0aGlzLmhhc1Byb2R1Y3RKU09OID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SlNPTiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQgPSBkb2N1bWVudC5oZWFkOyBcclxuXHJcbiAgICAgICAgdGhpcy5zZXRHbG9iYWxTV0coKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNEZWZpbmVkKCkgeyBcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpID8gdHJ1ZSA6IGZhbHNlOyBcclxuICAgIH1cclxuXHJcbiAgICBzZXRHbG9iYWxTV0coKSB7XHJcbiAgICAgICAgaWYoIUhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cgPSB7XHJcbiAgICAgICAgICAgIGdsb2JhbDogKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSA/IHN3ZyA6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFV0bXMoKSB7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICBjb25zdCB1dG1zUHJvcHMgPSAodHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3Zy51dG1zICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyA6IG51bGw7IFxyXG5cclxuICAgICAgICB1dG1zUHJvcHMuZm9yRWFjaCgoaXRlbSkgPT4geyBcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgdXJsUGFyYW1zLnNldChgdXRtXyR7bmFtZX1gLCB2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKSB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdzZXRVdG1zJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIHV0bXNQcm9wcylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIGxvY2F0aW9uKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmlzRGVmaW5lZCkgfHwgIXV0bXNQcm9wcyApIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsLnN1YnNjcmliZSgnYnIuY29tLmluZm9nbG9iby5vZ2xvYm8uc3dnLmdvb2dsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFByb2R1Y3RzKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiAgXHJcbiAgICAgICAgPyAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfN2IwYTZkZjQ5ODk1NDU5ZmJhZmU0OWE5NmZjYjViYmYvc3dnL3Byb2QvcHJvZHVjdHMuanNvbicgXHJcbiAgICAgICAgOiAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfN2IwYTZkZjQ5ODk1NDU5ZmJhZmU0OWE5NmZjYjViYmYvc3dnL2Rldi9wcm9kdWN0cy5qc29uJztcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0UHJvZHVjdCgpIHsgXHJcbiAgICAgICAgaWYoIXRoaXMubG9jYWxQcm9kdWN0UGlhbm8pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5waWFub1Byb2R1Y3ROYW1lID09PSB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vIClbMF07XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW1vdmVQcm9wZXJ0aWVzKG9iaikgeyBcclxuICAgICAgICBjb25zdCBwcm9wc1RvUmVtb3ZlID0gWydwcm9kdWN0TmFtZScsICdwaWFub1Byb2R1Y3ROYW1lJ107XHJcbiAgICAgICAgY29uc3QgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcclxuXHJcbiAgICAgICAgcHJvcHNUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgbmV3T2JqW2VsZW1lbnRdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG1hcmt1cFRlbXBsYXRlKCkgeyBcclxuICAgICAgICBjb25zdCBwcm9kdWN0SlNPTiA9ICBhd2FpdCB0aGlzLnJlbW92ZVByb3BlcnRpZXMoYXdhaXQgdGhpcy5nZXRQcm9kdWN0KCkpIHx8IG51bGw7IFxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBPYmplY3Qua2V5cyhwcm9kdWN0SlNPTikubGVuZ3RoID8gSlNPTi5zdHJpbmdpZnkocHJvZHVjdEpTT04pIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5kZWJ1ZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnbG9nLVNXRy1Qcm9kdWN0JzogcHJvZHVjdH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SlNPTiA9IGAkeyBwcm9kdWN0IH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRNYXJrdXAoKSB7IFxyXG4gICAgICAgIGF3YWl0IHRoaXMubWFya3VwVGVtcGxhdGUoKTtcclxuICAgICAgICBpZighdGhpcy5wcm9kdWN0SlNPTikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2FwcGxpY2F0aW9uL2xkK2pzb24nO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5wcm9kdWN0SlNPTjtcclxuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN3Z1NjcmlwdCgpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgZWxlbWVudC5zcmMgPSAnaHR0cHM6Ly9uZXdzLmdvb2dsZS5jb20vc3dnL2pzL3YxL3N3Zy5qcyc7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGRlYmFyYW5TY3JpcHQoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGNvbnN0IHVybFByb2QgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYzEwYWU4MTljNTY4NDYwYmI0ZWMxN2MwYThlYzUyNjcvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XHJcbiAgICAgICAgY29uc3QgdXJsU3RnID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2FkZGM1ZThmMzE2ZjQ4ZWE5MTgxYWYzNzE2MGIyMmI0L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNyYyA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/IHVybFByb2QgOiB1cmxTdGc7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0U1dHKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwOyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zd2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsID0gd2luZG93LnN3ZztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT09IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdUaGVyZSBpc25cXCd0IHdpbmRvdy5zd2cnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRNYXJrdXAoKTsgIFxyXG4gICAgICAgICBcclxuICAgICAgICBpZighdGhpcy5oYXNQcm9kdWN0SlNPTikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3dnU2NyaXB0KCk7IFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QWxkZWJhcmFuU2NyaXB0KCk7ICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy50ZXN0U1dHKCk7ICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55ICB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcclxuICAgICAgICB3aW5kb3cuaGFzUGF5d2FsbCA9IHdpbmRvdy5oYXNQYXl3YWxsIHx8IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy50cCA9IHdpbmRvdy50cCB8fCBbXTtcclxuICAgICAgICB3aW5kb3cuUGlhbm8gPSB3aW5kb3cuUGlhbm8gfHwge307XHJcbiAgICAgICAgd2luZG93LlBheXdhbGxBbmFseXRpY3MgPSB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyB8fCB7fTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldEdsb2JhbFRpbnkoKTtcclxuICAgICAgICB0aGlzLlByb2R1Y3RzLnNldEdsb2JhbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsb2JhbFRpbnkoKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWJ1Zzoge1xyXG4gICAgICAgICAgICAgICAgdGlueTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXl3YWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN3ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBnYTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNQcm9kdWN0aW9uOiAod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBkZWZhdWx0U2V0dGluZ3M7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQaWFubyhvYmopIHtcclxuICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFubyA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4uL0hlbHBlcnMnO1xyXG5pbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xyXG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi4vR0EnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbEdBTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcclxuICAgIHRoaXMuR0EgPSBuZXcgR0FNb2R1bGUoKTsgXHJcblxyXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWV0cmljcyA9IHtcclxuICAgICAgICBwYXl3YWxsOiB7fSwgXHJcbiAgICAgICAgZmI6IHtcclxuICAgICAgICAgICAgcGl4ZWw6IHt9XHJcbiAgICAgICAgfSBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYXl3YWxsVHlwZSgpO1xyXG4gIH1cclxuXHJcbiAgcGF5d2FsbExvYWQoKSB7IFxyXG4gICAgaWYoIXRoaXMuUGlhbm8uaXNEZWZpbmVkKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgY29uc3QgX1BpYW5vID0gdGhpcy5QaWFuby5jb250ZW50O1xyXG5cclxuICAgIHRoaXMuR0Euc2V0RXZlbnRzKCdFeGliaWNhbyBSZWdpc3RlcicsIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUpO1xyXG4gICAgSGVscGVycy5zZXRDb29raWUoX1BpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXIoZWxlbWVudCkgeyBcclxuICAgIGlmKHRoaXMuZGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXRVdHAgPSBlbGVtZW50LmRhdGFzZXQuZ2FSZXNldHV0cCB8fCBudWxsO1xyXG4gICAgY29uc3QgaW1hZ2VUb3AgPSBlbGVtZW50LmRhdGFzZXQuZ2FJbWFnZVBvc2l0aW9uO1xyXG4gICAgY29uc3QgbGFiZWwgPSAoaW1hZ2VUb3AgPT09ICd0b3AnKSA/IGVsZW1lbnQuZGF0YXNldC5nYUxhYmVsICsgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgOiBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbDtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBldmVudDogJ0V2ZW50b0dBJyxcclxuICAgICAgZXZlbnRvR0FDYXRlZ29yaWE6IHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUsXHJcbiAgICAgIGV2ZW50b0dBQWNhbzogZWxlbWVudC5kYXRhc2V0LmdhQWN0aW9uIHx8IGFjdGlvbixcclxuICAgICAgZXZlbnRvR0FSb3R1bG86IGxhYmVsLFxyXG4gICAgICBldmVudG9HQVZhbG9yOiAwLFxyXG4gICAgICBldmVudG9HQUludGVyYWNhbzogZmFsc2UsXHJcbiAgICB9OyBcclxuXHJcbiAgICBpZiAocmVzZXRVdHApXHJcbiAgICAgICAgdGhpcy5QaWFuby5yZXNldFV0cCgpO1xyXG4gXHJcbiAgICB0aGlzLnNldERhdGFsYXllcihkYXRhKTtcclxuICB9XHJcblxyXG4gIHBheXdhbGxUeXBlKCkge1xyXG4gICAgY29uc3QgdHlwZSA9ICggKHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsICE9PSAndW5kZWZpbmVkJykgJiYgd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwpIFxyXG4gICAgICA/IHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsLnRvTG93ZXJDYXNlKCkgXHJcbiAgICAgIDogJ3BheXdhbGwnO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdyZWdpc3Rlcic6XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBjb211bSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQ2FkYXN0cmUtc2UnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdleGNsdXNpdm8nOlxyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgZXhjbHVzaXZvJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdMb2dpbkV4Y2x1c2l2byc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BheXdhbGwnOlxyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAncGF5d2FsbCc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3UGF5d2FsbEV4Y2x1c2l2byc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREYXRhbGF5ZXIoZGF0YSA9IHt9KSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgIGRhdGFMYXllci5wdXNoKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xyXG5pbXBvcnQgUGF5d2FsbEdBTW9kdWxlIGZyb20gJy4vUGF5d2FsbC1nYSc7XHJcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi4vU3dnJztcclxuaW1wb3J0IEZiTW9kdWxlIGZyb20gJy4uL0ZCJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheXdhbGxDcHQgIHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0dGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xyXG5cdHRoaXMuR0EgPSBuZXcgUGF5d2FsbEdBTW9kdWxlKCk7XHJcblx0dGhpcy5TV0cgPSBuZXcgU3dnTW9kdWxlKCk7XHJcblx0dGhpcy5GQiA9IG5ldyBGYk1vZHVsZSh0aGlzLkdBLm1ldHJpY3MuZmIpO1xyXG5cclxuXHR0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcclxuXHR0aGlzLmRvbWFpbiA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/ICdodHRwczovL2xvZ2luLmdsb2JvLmNvbS8nIDogJ2h0dHBzOi8vbG9naW4ucWEuZ2xvYm9pLmNvbS8nO1x0XHJcblx0dGhpcy5zZXRUZW1wbGF0ZVNldHRpbmdzKCgpID0+IHtcclxuXHRcdHRoaXMuaW5pdCgpOyBcclxuXHR9KTtcclxuXHJcblx0d2luZG93LlBheXdhbGxDcHQgPSB0aGlzO1xyXG5cclxuXHR3aW5kb3cudGlueUNwdC5QYXl3YWxsID0ge1xyXG5cdFx0ZG9tYWluOiB0aGlzLmRvbWFpbixcclxuXHRcdEdBOiB0aGlzLkdBLm1ldHJpY3MsXHJcblx0fTtcclxuICB9XHJcblxyXG4gIHNldFRlbXBsYXRlU2V0dGluZ3MoY2FsbGJhY2spIHtcclxuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xyXG5cdFx0XHR0ZW1wbGF0ZTogJ2RlZmF1bHQnLFxyXG5cdFx0XHRhc3NldHNQYXRoOiAnJyxcclxuXHRcdFx0ZGlzcGxheTogbnVsbCxcclxuXHRcdFx0cHJvZHVjdENsYXNzOiB0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgPyBgcGF5d2FsbC1jcHQtJHtub21lUHJvZHV0b1BpYW5vfWAgOiAncGF5d2FsbC1jcHQtb2dsb2JvJyxcclxuXHRcdFx0dGl0bGU6ICdFc3NlIGNvbnRlw7pkbyDDqSBvIHTDrXR1bG8uJyxcclxuXHRcdFx0dGFyZ2V0Qmxhbms6IHRydWUsXHJcblx0XHRcdHRvcE1vYmk6ICcnLFxyXG5cdFx0XHR0b3BEZXNrOiAnJyxcclxuXHRcdFx0dG9wTGluazogJycsXHJcblx0XHRcdGxlZnRNb2JpOiAnJyxcclxuXHRcdFx0bGVmdERlc2s6ICcnLFxyXG5cdFx0XHRsZWZ0TGluazogJycsXHJcblx0XHRcdHJpZ2h0TW9iaTogJycsXHJcblx0XHRcdHJpZ2h0RGVzazogJycsXHJcblx0XHRcdHJpZ2h0TGluazogJydcclxuXHRcdH07XHJcblxyXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5oaWRlTG9naW5BcmVhID0gZmFsc2U7XHJcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luVGV4dCA9ICdGYcOnYSBsb2dpbic7XHJcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luUHJlVGV4dCA9ICdKw6EgcG9zc3VpIGNhZGFzdHJvPyc7XHJcblx0XHRcclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsID0gKHdpbmRvdy5nbGJQYXl3YWxsKSA/ICBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZVNldHRpbmdzLCB3aW5kb3cuZ2xiUGF5d2FsbCkgOiB0ZW1wbGF0ZVNldHRpbmdzOyBcclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGFnID0gYCR7d2luZG93LmdsYlBheXdhbGwubG9naW5QcmVUZXh0fSA8YSBocmVmPVwiJHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoKX1cIiBkYXRhLWlzLWxvZ2luPVwidHJ1ZVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayAyIC0gRmHDp2EgbG9naW5cIiBkYXRhLWdhLXJlc2V0VXRwPVwiZmFsc2VcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiICR7d2luZG93LmdsYlBheXdhbGwudGFyZ2V0Qmxhbmt9IFwiPiR7d2luZG93LmdsYlBheXdhbGwubG9naW5UZXh0fTwvYT5gO1xyXG5cclxuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsLmhpZGVMb2dpbkFyZWEpXHJcblx0XHRcdHRoaXMuY2xlYXJMb2dpbkFyZWEoKTtcclxuXHJcblx0XHRpZih0aGlzLmRlYnVnICkgXHJcblx0XHRcdHRoaXMuc2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCk7XHJcblx0XHRcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhckxvZ2luQXJlYSgpIHtcclxuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsKSB7IFxyXG5cdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9ICcnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCkge1xyXG5cdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0b2JqLnRvcE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTAnO1xyXG5cdFx0b2JqLnRvcERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwNHgxMjgnO1xyXG5cdFx0b2JqLnRvcExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wxJztcclxuXHRcdG9iai5sZWZ0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XHJcblx0XHRvYmoubGVmdERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwMng1MTUnO1xyXG5cdFx0b2JqLmxlZnRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMic7XHJcblx0XHRvYmoucmlnaHRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcclxuXHRcdG9iai5yaWdodERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwMng1MTUnO1xyXG5cdFx0b2JqLnJpZ2h0TGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDMnO1xyXG5cclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmdsYlBheXdhbGwsIG9iaik7XHJcblx0fVxyXG4gXHJcbiAgYm9keUFkanVzdCgpIHtcclxuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnaGlkZGVuJywgJ2ltcG9ydGFudCcpO1xyXG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcsICdpbXBvcnRhbnQnKTtcclxuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCAnMTAwJScsICdpbXBvcnRhbnQnKTtcclxuICB9XHJcblxyXG4gIHNldEVsV3JhcHBlcigpIHtcclxuXHR0aGlzLmVsQ3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0Jyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFbGVtZW50cygpIHtcclxuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xyXG5cclxuXHRpZih0aGlzLmVsQ3B0KVxyXG5cdFx0dGhpcy5lbENwdC5yZW1vdmUoKTtcclxuXHJcblx0Y29uc3QgZWxUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm90ZWN0ZWQtY29udGVudCwgI2luZm9hcnRlLW1haW4tY29udGVudCcpO1xyXG5cclxuXHRlbFRvUmVtb3ZlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0ICBlbGVtZW50LnJlbW92ZSgpO1xyXG5cdH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGVtcGxhdGUoKSB7XHJcblx0dGhpcy5lbEJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgdGhpcy5ib2R5QWRqdXN0KCk7XHJcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRzKCk7XHJcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmNzc01pbmlmaWVkKTsgXHJcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnRlbXBsYXRlKTsgXHJcblx0dGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHRcclxuICAgIFxyXG4gICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLkdBLnBheXdhbGxMb2FkKCk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCkge1xyXG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XHJcblx0dGhpcy5lbENwdFdyYXAgPSB0aGlzLmVsQ3B0LnF1ZXJ5U2VsZWN0b3IoJy5wYXl3YWxsLWNwdC13cmFwJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZWxCb2R5SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgNDtcclxuXHRcdGNvbnN0IGVsQ3B0V3JhcEhlaWdodCA9IHRoaXMuZWxDcHRXcmFwLm9mZnNldEhlaWdodDtcclxuICAgICAgICBjb25zdCBjdXJyZW50VG9wID0gKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykgXHJcbiAgICAgICAgPyBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKVxyXG4gICAgICAgIDogTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yICk7XHJcblx0XHRjb25zdCB0b3BXaXRoRnVsbEVsZW1lbnQgPSAoZWxCb2R5SGVpZ2h0IC0gZWxDcHRXcmFwSGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke2N1cnJlbnRUb3B9cHhgO1xyXG5cdFx0dGhpcy5lbENwdC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdHRoaXMuZWxDcHQuc3R5bGUuekluZGV4ID0gOTk5OTk5OTk5OTtcclxuXHJcblx0XHR0aGlzLmV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XHJcblx0XHR0aGlzLmV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XHJcblx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpO1xyXG5cclxuXHRcdHRoaXMuRkIuc2V0UGl4ZWxUeXBlKCk7XHJcblx0fSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVFdmVudHMoKSB7XHJcblx0Y29uc3QgY2xpY2tUYXJnZXRzID0gdGhpcy5lbENwdFdyYXAucXVlcnlTZWxlY3RvckFsbCgnYScpO1xyXG5cclxuXHRjbGlja1RhcmdldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHsgXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbiA9IEJvb2xlYW4oZWxlbWVudC5kYXRhc2V0LmlzTG9naW4pIHx8IGZhbHNlO1xyXG5cdFx0XHRjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGZhbHNlIDsgXHJcblx0XHRcdGNvbnN0IGlzVXJsU3dnID0gKHVybCkgPyB1cmwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnb2ZlcnRhc3dnJykgOiBmYWxzZTtcclxuXHRcdFx0Y29uc3Qgbm90QmxhbmsgPSBlbGVtZW50LmRhdGFzZXQuaHJlZlRhcmdldCB8fCB0cnVlOyBcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuR0EudHJpZ2dlcihlbGVtZW50KTsgXHJcblxyXG5cdFx0XHRpZighaXNMb2dpbiAmJiBpc1VybFN3ZylcclxuXHRcdFx0XHR0aGlzLlNXRy5zZXRVdG1zKCk7ICBcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmwgJiYgIWlzVXJsU3dnKSB7IFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RCbGFuayA/ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybCkgOiB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9KTtcclxuICB9XHJcblxyXG4gIGV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xyXG5cdGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdCd3aGVlbCcsXHJcblx0XHRmdW5jdGlvbihldnQpIHsgXHJcblx0XHQgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VG9wIC8gMTAwO1xyXG5cdFx0ICBjb25zdCBtdWx0aXBsaWVyID0gMjA7XHJcblxyXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA+PSAxKSB7XHJcblx0XHRcdGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gc3RlcCAqIG11bHRpcGxpZXI7IFxyXG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xyXG4gIFxyXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcblx0XHQgIH1cclxuICBcclxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPD0gLTEpIHtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgKyBzdGVwICogbXVsdGlwbGllcjtcclxuXHRcdFx0bmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xyXG4gIFxyXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcblx0XHQgIH1cclxuXHRcdH0uYmluZCh0aGlzKVxyXG5cdCAgKTtcclxuICB9XHJcblxyXG4gIGV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xyXG4gICAgbGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XHJcbiAgICBsZXQgdG91Y2hzdGFydFkgPSAwO1xyXG4gICAgbGV0IHRvdWNoZW5kWSA9IDA7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZ0KSB7IFxyXG4gICAgICAgIHRvdWNoc3RhcnRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldnQpIHsgXHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xyXG4gICAgICAgIHRvdWNoZW5kWSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xyXG5cclxuICAgICAgICBpZiAodG91Y2hlbmRZIDwgdG91Y2hzdGFydFkpIHsgXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyh0b3VjaHN0YXJ0WSkgLSBNYXRoLmFicyh0b3VjaGVuZFkpO1xyXG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCAtIGRpZmY7IFxyXG4gICAgICAgICAgICBuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvdWNoZW5kWSA+IHRvdWNoc3RhcnRZKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaGVuZFkgLSB0b3VjaHN0YXJ0WTtcclxuICAgICAgICAgICAgY29uc3QgZWxUb3AgPSBuZXd0b3AgKyBkaWZmOyBcclxuXHRcdCAgICBuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XHJcblxyXG5cdFx0ICAgIHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcclxuICAgICAgICB9XHJcblx0fS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XHJcblx0Y29uc3QgdXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gPSB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcgPyAnaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCcgOiAnaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCc7XHJcblx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcclxuXHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcclxuXHRsZXQgc3RyID0gJyc7XHJcblx0bGV0IHVybFJldHVybiA9ICcnO1xyXG5cclxuXHRpZighdGhpcy5kZWJ1ZyAmJiB0aGlzLlBpYW5vLmlzRGVmaW5lZCkge1xyXG5cdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxyXG5cdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxyXG5cdFx0XHQrICcmc2VydmljZUlkPScgKyBzZXJ2aWNlSWRcclxuXHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xyXG5cdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxyXG5cdFx0XHQrICcmdXJsUmV0b3Jubz0nICsgdXJpXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmKHR5cGUgPT09ICdyZWdpc3RlcicpIHtcclxuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59Y2FkYXN0cm8vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59bG9naW4vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0cjtcclxufVxyXG5cclxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xyXG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbDtcclxuICB9XHJcblxyXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXHJcblx0Y29uc3QgdGVtcGxhdGUgPSBgXHJcblx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQgJHt0aGlzLnRlbXBsYXRlVmFycy5wcm9kdWN0Q2xhc3N9XCI+IFxyXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWRcIj5cclxuXHRcdFx0JHt0aGlzLnRlbXBsYXRlVmFycy50aXRsZX1cclxuXHRcdDwvZGl2PlxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdG9wXCI+XHJcblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTGlua31cIiBkYXRhLWdhLWltYWdlLXBvc2l0aW9uPVwidG9wXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDEgLVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XHJcblx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BEZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgLz5cclxuXHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdDwvYT5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlciAke3dpbmRvdy5nbGJQYXl3YWxsLmhpZGVMb2dpbkFyZWEgPyAnaXMtaGlkZScgOiAnJ31cIj5cclxuXHRcdCAgXHQke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGFnfVxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX2xlZnRcIj5cclxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TGlua31cIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgNCAtIEJhbm5lciBvZmVydGEgZXNxdWVyZGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIC8+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fcmlnaHRcIj5cclxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodExpbmt9XCIgIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA1IC0gQmFubmVyIG9mZXJ0YSBkaXJlaXRhXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cclxuXHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCAgPC9kaXY+XHJcblx0ICBgO1xyXG5cclxuXHRyZXR1cm4gdGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgY3NzTWluaWZpZWQoKSB7XHJcblx0ICByZXR1cm4gYDxzdHlsZT5cclxuXHQgIC5wYXl3YWxsLWNwdHtvcGFjaXR5OjA7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMHZ3O292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Ym94LXNoYWRvdzowIDAgNzBweCAwIHJnYmEoMCwwLDAsLjUpO2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmfS5wYXl3YWxsLWNwdCwucGF5d2FsbC1jcHQgKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZX0ucGF5d2FsbC1jcHQgYXtmb250LXdlaWdodDo3MDA7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LnBheXdhbGwtY3B0IGE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0ucGF5d2FsbC1jcHQgLnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZCwucGF5d2FsbC1jcHQgYXtjb2xvcjojMDAwfS5wYXl3YWxsLWNwdC1vZ2xvYm8gLnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZCwucGF5d2FsbC1jcHQtb2dsb2JvIGF7Y29sb3I6IzMyNWU5NH0ucGF5d2FsbC1jcHQtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctYm90dG9tOjIwcHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5wYXl3YWxsLWNwdC13cmFwey1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1vcmllbnQ6aG9yaXpvbnRhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9fS5wYXl3YWxsLWNwdC13cmFwIGltZ3tkaXNwbGF5OmJsb2NrO21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvfS5wYXl3YWxsLWNwdC13cmFwX190b3B7cGFkZGluZy10b3A6MjBweH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFke3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMHB4IDAgMDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDB9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVye3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMHB4IDA7Y29sb3I6Izc2NzY3Njtmb250LXNpemU6MTZweH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXIuaXMtaGlkZXtwYWRkaW5nLWJvdHRvbTowfVxyXG5cdCAgPC9zdHlsZT5gO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHsgXHJcblx0ICBjb25zdCBkZWxheVRpbWVyID0gKHdpbmRvdy5nbGJQYXl3YWxsICYmIHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIpID8gd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lciAqIDEwMDAgOiAwO1xyXG5cclxuXHRzZXRUaW1lb3V0KCgpID0+e1xyXG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xyXG5cdH0sIGRlbGF5VGltZXIpO1xyXG4gIH1cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XHJcbmltcG9ydCBUaW55TW9kdWxlIGZyb20gJy4vVGlueSc7XHJcbmltcG9ydCBHQU1vZHVsZSBmcm9tICcuL0dBJztcclxuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuL1N3Zyc7XHJcbmltcG9ydCBQYXl3YWxsQ3B0IGZyb20gJy4vY3BudC1wYXl3YWxsL1BheXdhbGwnO1xyXG5cclxuY29uc3QgVGlueSA9IG5ldyBUaW55TW9kdWxlKCk7XHJcbmNvbnN0IEdBID0gbmV3IEdBTW9kdWxlKCk7XHJcblxyXG5HQS5zZXRHbG9iYWxWYXJzKCk7XHJcblxyXG5QaWFuby5hY3RpdmVQYXl3YWxsID0gdHJ1ZTtcclxuUGlhbm8udHlwZVBheXdhbGwgPSBudWxsO1xyXG5QaWFuby52YXJpYXZlaXMgPSB7XHJcblx0YW1iaWVudGVzQWNlaXRvczogXCJpbnQscWx0LHByZFwiLFxyXG5cdHN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvOiBcIjQwMCw0MDQsNDA2LDUwMCw1MDIsNTAzLDUwNFwiLFxyXG5cdHN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IFwiNDAwLDQwNCw1MDAsNTAyLDUwMyw1MDRcIixcclxuXHRpc0NhbGxiYWNrTWV0dGVyRXhwaXJlZDogZmFsc2UsXHJcblx0Y29uc3RhbnRlOiB7XHJcblx0XHRjb29raWU6IHtcclxuXHRcdFx0R0NPTTogJ0dMQklEJyxcclxuXHRcdFx0VVRQOiAnX3V0cCcsXHJcblx0XHRcdFJUSUVYOiAnX3J0aWV4JyxcclxuXHRcdFx0QU1CSUVOVEU6ICdhbWJpZW50ZVBpYW5vJyxcclxuXHRcdFx0U0FWRV9TVUJTQ1JJUFRJT046ICdzYXZlU3Vic2NyaXB0aW9uQ29va2llJyxcclxuXHRcdFx0Q1JFQVRFRF9HTE9CT0lEOiAnY3JlYXRlZEdsb2JvSWQnLFxyXG5cdFx0XHRHTE9CT0lEX01FU1NBR0U6ICdnbG9ib0lkTWVzc2FnZSdcclxuXHRcdH0sXHJcblx0XHRtZXRyaWNhczoge1xyXG5cdFx0XHRFVkVOVE9fU0VNX0FDQU86ICdzZW0gYWNhbycsXHJcblx0XHRcdEVSUk86ICdFcnJvJ1xyXG5cdFx0fSxcclxuXHRcdGtydXg6IHtcclxuXHRcdFx0U0VHTUVOVEFDT0VTOiAna3hnbG9ib19zZWdzJyxcclxuXHRcdFx0S1JVWExJR0FETzogJ2tydXgtbGlnYWRvJ1xyXG5cdFx0fSxcclxuXHRcdHV0aWw6IHtcclxuXHRcdFx0SVA6IFwiMTI3LjAuMC4xXCIsXHJcblx0XHRcdEFNQklFTlRFOiBcImFtYmllbnRlLWRlc2VqYWRvXCIsXHJcblx0XHRcdERFQlVHOiBcImRlYnVnLXBpYW5vXCJcclxuXHRcdH1cclxuXHR9LFxyXG5cdGlzQ29udGV1ZG9FeGNsdXNpdm86IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdGdldEFtYmllbnRlUGlhbm86IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2YoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkpID4gLTEpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUsIFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpLCAxKTtcclxuXHRcdFx0cmV0dXJuIFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpID09ICdmYWxzZScpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUsIFwiXCIsIC0xKTtcclxuXHRcdH1cclxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSkpIHtcclxuXHRcdFx0cmV0dXJuIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKTtcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmFtYmllbnRlc0FjZWl0b3MuaW5kZXhPZih3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubykgPiAtMSA/IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vIDogJ3ByZCc7XHJcblx0fSxcclxuXHRnZXRUaXBvQ29udGV1ZG9QaWFubzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnRpcG9Db250ZXVkb1BpYW5vO1xyXG5cdH0sXHJcblx0ZXhlY3V0b3VQYWdldmlldzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmV4ZWN1dG91UGFnZXZpZXcgPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHRnZXROb21lUHJvZHV0bzogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoIXdpbmRvdy5ub21lUHJvZHV0b1BpYW5vKXtcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJOb21lIGRvIHByb2R1dG8gbsOjbyBkZWZpbmlkby5cIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm87XHJcblx0fSxcclxuXHRnZXRTZXJ2aWNvSWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGlkID0gJzAwMDAnO1xyXG5cclxuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnb2dsb2JvJyBcclxuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdibG9ncycgXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAna29ndXQnXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYWNlcnZvJ1xyXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2pvcm5hbGRpZ2l0YWwnKXtcclxuXHRcdFx0cmV0dXJuIGlkID0gJzM5ODEnO1xyXG5cdFx0fVxyXG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgJiYgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdtb25ldCcpeyBcclxuXHRcdFx0cmV0dXJuIGlkID0gJzY2MTgnO1xyXG5cdFx0fWVsc2UgaWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkpe1xyXG5cdFx0XHRyZXR1cm4gaWQgPSAnNjY5Nyc7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICd2YWxvcicpe1xyXG4gICAgICAgICAgICByZXR1cm4gaWQgPSAnNjY2OCc7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChpZCA9PT0gJzAwMDAnKVxyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignU2VydmljZUlEIG7Do28gZGVmaW5pZG8uJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZiArIFxyXG5cdFx0XHRcdCcgbm9tZVByb2R1dG86ICcgKyBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSApO1xyXG5cclxuXHRcdHJldHVybiBpZDtcclxuXHR9LFxyXG5cdGdldENvZGlnb1Byb2R1dG86IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgbm9tZVByb2R1dG8gPSBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKTtcclxuXHRcdHN3aXRjaCAobm9tZVByb2R1dG8pe1xyXG5cdFx0XHRjYXNlICdvZ2xvYm8nOlxyXG5cdFx0XHRjYXNlICdibG9ncyc6XHJcblx0XHRcdGNhc2UgJ2tvZ3V0JzpcclxuXHRcdFx0XHRyZXR1cm4gJ09HMDMnO1xyXG5cdFx0XHRjYXNlICdhY2Vydm8nOlxyXG5cdFx0XHRcdHJldHVybiAnT0cwNCc7XHJcblx0XHRcdGNhc2UgJ2pvcm5hbGRpZ2l0YWwnOlxyXG5cdFx0XHRcdHJldHVybiAnT0cwMSc7XHJcblx0XHRcdGNhc2UgJ2F1dG8tZXNwb3J0ZSc6XHJcblx0XHRcdGNhc2UgJ2Vwb2NhJzpcclxuXHRcdFx0Y2FzZSAndm9ndWUnOlxyXG5cdFx0XHRjYXNlICdnbGFtb3VyJzpcclxuXHRcdFx0Y2FzZSAnY2FzYS12b2d1ZSc6XHJcblx0XHRcdGNhc2UgJ21hcmllLWNsYWlyZSc6XHJcblx0XHRcdGNhc2UgJ2dsb2JvLXJ1cmFsJzpcclxuXHRcdFx0Y2FzZSAnZ3EnOlxyXG5cdFx0XHRjYXNlICdtb25ldCc6XHJcblx0XHRcdGNhc2UgJ2NyZXNjZXInOlxyXG5cdFx0XHRjYXNlICdnYWxpbGV1JzpcclxuXHRcdFx0XHRyZXR1cm4gbm9tZVByb2R1dG87XHJcblx0XHRcdGNhc2UgJ2Nhc2EtZS1qYXJkaW0nOlxyXG5cdFx0XHRcdHJldHVybiAnY2FzYS1qYXJkaW0nO1xyXG5cdFx0XHRjYXNlICdxdWVtLWFjb250ZWNlJzpcclxuXHRcdFx0XHRyZXR1cm4gJ3F1ZW0nO1xyXG5cdFx0XHRjYXNlICd2YWxvcic6XHJcblx0XHRcdFx0cmV0dXJuICd2YWxvcmRpZ2l0YWwnO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQW8gb2J0ZXIgY8OzZGlnbyBkbyBwcm9kdXRvXCIsIG5vbWVQcm9kdXRvICsgXCIgLSBcIiArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSwgJ2Vycm8nLCB0cnVlLCBcIiBcIik7XHJcblx0XHRcdFx0cmV0dXJuICdlcnJvcic7XHJcblx0XHR9XHJcblx0fVx0XHJcbn07XHJcblxyXG5QaWFuby5qYW5lbGFBbm9uaW1hID0ge1xyXG5cdHJldHJ5IDogZnVuY3Rpb24oaXNEb25lLCBuZXh0KSB7XHJcblx0XHR2YXIgY3VycmVudF90cmlhbCA9IDAsIG1heF9yZXRyeSA9IDUwLCBpbnRlcnZhbCA9IDEwLCBpc190aW1lb3V0ID0gZmFsc2U7XHJcblx0XHR2YXIgaWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoXHJcblx0XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChpc0RvbmUoKSkge1xyXG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xyXG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRfdHJpYWwrKyA+IG1heF9yZXRyeSkge1xyXG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xyXG5cdFx0XHRcdFx0aXNfdGltZW91dCA9IHRydWU7XHJcblx0XHRcdFx0XHRuZXh0KGlzX3RpbWVvdXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0MTBcclxuXHRcdCk7XHJcblx0fSxcclxuXHRpc0lFMTBPckxhdGVyIDogZnVuY3Rpb24odXNlcl9hZ2VudCkge1xyXG5cdFx0bGV0IHVhID0gdXNlcl9hZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0bGV0IG1hdGNoID0gLyg/Om1zaWV8cnY6KVxccz8oW1xcZFxcLl0rKS8uZXhlYyh1YSk7XHJcblx0XHRcclxuXHRcdGlmICh1YS5pbmRleE9mKCdtc2llJykgPT09IDAgJiYgdWEuaW5kZXhPZigndHJpZGVudCcpID09PSAwKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChtYXRjaCAmJiBwYXJzZUludChtYXRjaFsxXSwgMTApID49IDEwKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0ZGV0ZWN0UHJpdmF0ZU1vZGUgOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0dmFyIGlzX3ByaXZhdGU7XHJcblxyXG5cdFx0aWYgKHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSkge1xyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXHJcblx0XHRcdFx0d2luZG93LlRFTVBPUkFSWSwgMSxcclxuXHRcdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSBpZiAod2luZG93LmluZGV4ZWREQiAmJiAvRmlyZWZveC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdFx0dmFyIGRiO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGRiID0gd2luZG93LmluZGV4ZWREQi5vcGVuKCd0ZXN0Jyk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcclxuXHRcdFx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRiLnJlYWR5U3RhdGUgPT09ICdkb25lJyA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFpc190aW1lb3V0KSB7XHJcblx0XHRcdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGRiLnJlc3VsdCA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoUGlhbm8uamFuZWxhQW5vbmltYS5pc0lFMTBPckxhdGVyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG5cdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKCF3aW5kb3cuaW5kZXhlZERCKSB7XHJcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlICYmIC9TYWZhcmkvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgMSk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcclxuXHRcdFx0ZnVuY3Rpb24gaXNEb25lKCkge1xyXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgaXNfcHJpdmF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uIG5leHQoaXNfdGltZW91dCkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGlzX3ByaXZhdGUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmtydXggPSB7XHJcblx0dGVtOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykgPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHRsaWdhZG86IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPO1xyXG5cdFx0dmFyIHZhbG9yUGFyYW1ldHJvID0gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKHBhcmFtZXRybyk7XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJyAmJiB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyAhPSBcInByZFwiKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnIHx8IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09IFwicHJkXCIpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCBcIlwiLCAtMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPKSA9PSBcImZhbHNlXCIpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHRvYnRlbVNlZ21lbnRhY2FvOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChQaWFuby5rcnV4LnRlbSgpICYmIFBpYW5vLmtydXgubGlnYWRvKCkpIHtcclxuXHRcdFx0dmFyIHNlZ21lbnRhY29lcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKS5zcGxpdCgnLCcpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRhY29lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgc2VnbWVudGFjb2VzW2ldLCBzZWdtZW50YWNvZXNbaV1dKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLnJlZ2lvbmFsaXphY2FvID0ge1x0XHJcblx0Z2V0UmVnaW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBrcnV4R2VvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2t4Z2xvYm9fZ2VvJyk7XHJcblx0XHRpZiAoa3J1eEdlbykge1xyXG5cdFx0XHRrcnV4R2VvLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuXHRcdFx0XHRsZXQga2V5ID0gZGF0YVswXTtcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBkYXRhWzFdO1xyXG5cdFx0XHRcdGlmIChrZXkgPT09ICdyZWdpb24nKSB7XHJcblx0XHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwicmVnaW9uXCIsIHZhbHVlXSk7XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLm1ldHJpY2FzID0ge1xyXG5cdGVudmlhRXZlbnRvc0dBOiBmdW5jdGlvbihfR0FBY2FvLCBfR0FSb3R1bG8pIHsgLy9UT0RPOiBhcnF1aXZvIHRpbnlwYXNzLmpzLCBpbnNlcmlkbyBwZWxhIFBpYW5vLCB1dGlsaXphIGVzc2EgZnVuw6fDo29cclxuXHRcdGNvbnN0IGlzUHJvZHVjdFZhbG9yID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoaXNQcm9kdWN0VmFsb3IpXHJcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ1BpYW5vJywgX0dBQWNhbywgX0dBUm90dWxvLCAsdHJ1ZV0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8nLCAnZXZlbnRvR0FBY2FvJzogX0dBQWNhbywgJ2V2ZW50b0dBUm90dWxvJzpfR0FSb3R1bG99KTtcclxuXHR9LFxyXG5cclxuXHRtb250YVJvdHVsb0dBOiBmdW5jdGlvbigpIHsgLy9UT0RPOiBhdCBQaWFubyBhcyBzZXRFeHBlcmllbmNlKCkgfCBDaGVjayBvbiBvbGQgdGlueSBiZWZvcmUgcmVtb3ZlXHJcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhICsgXCIgLSBcIiArIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vIDogd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xyXG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubm9tZUV4cGVyaWVuY2lhKSB7XHJcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFwiIFwiO1xyXG5cdH0sXHJcblx0c2V0TGltaXRlQ29udGFnZW06IGZ1bmN0aW9uKG1ldHJpY2FzKSB7XHJcblx0XHRfR0FMaW1pdGUgPSBcIi1cIjtcclxuXHRcdF9HQUNvbnRhZ2VtID0gXCItXCI7XHJcblx0XHRpZighbWV0cmljYXMpIHJldHVybjtcclxuXHRcdF9HQUNvbnRhZ2VtID0gXCJcIiArIG1ldHJpY2FzLnZpZXdzO1xyXG5cdFx0aWYgKF9HQUNvbnRhZ2VtLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdF9HQUNvbnRhZ2VtID0gXCIwXCIgKyBfR0FDb250YWdlbTtcclxuXHRcdH1cclxuXHRcdF9HQUxpbWl0ZSA9IG1ldHJpY2FzLm5vbWVFeHBlcmllbmNpYSArXCIgOiBcIisgbWV0cmljYXMubWF4Vmlld3M7XHJcblx0fSxcclxuXHRpZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXI6IGZ1bmN0aW9uKHJlZ3Jhcykge1xyXG5cdFx0dmFyIHBhc3NhZ2VtID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5tZXRyaWNhcy5FVkVOVE9fU0VNX0FDQU87XHJcblx0XHRpZihIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIHtcclxuXHRcdFx0cGFzc2FnZW0gPSByZWdyYXMuZmx1eG8uaW5kZXhPZihcImhhcmR3YWxsXCIpICE9IC0xID8gJ3JlZ2lzdGVyLWhhcmR3YWxsLXBhc3NvdScgOiAncmVnaXN0ZXItY29udGFnZW0tcGFzc291JztcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwYXNzYWdlbTtcclxuXHR9LFxyXG5cdGV4ZWN1dGFBcG9zUGFnZXZpZXc6IGZ1bmN0aW9uKGV4cGlyb3UpIHtcclxuXHRcdGlmICghUGlhbm8udmFyaWF2ZWlzLmV4ZWN1dG91UGFnZXZpZXcoKSkge1xyXG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5mbHV4byA9IHdpbmRvdy50cENvbnRleHQgPyB0cENvbnRleHQudG9Mb3dlckNhc2UoKSA6ICctJztcclxuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgOiAnJztcclxuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0TGltaXRlQ29udGFnZW0od2luZG93LnJlZ3Jhc1RpbnkpO1xyXG5cdFx0XHRpZiAoZXhwaXJvdSA9PSBmYWxzZSkgR0Euc2V0RXZlbnRzKFBpYW5vLm1ldHJpY2FzLmlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3Rlcih3aW5kb3cucmVncmFzVGlueSksIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRcdGV4ZWN1dG91UGFnZXZpZXcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2V0YVZhcmlhdmVpczogZnVuY3Rpb24oaWRMb2dpbiwgdGlwb0xvZ2luLCBhc3NpbmF0dXJhTG9nYWRhKXtcclxuXHRcdFBheXdhbGxBbmFseXRpY3MuaWRMb2dpbkFzc2luYW50ZSA9IGlkTG9naW47XHJcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy50aXBvTG9naW5Bc3NpbmFudGUgPSB0aXBvTG9naW47XHJcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy5hc3NpbmF0dXJhTG9nYWRhID0gYXNzaW5hdHVyYUxvZ2FkYTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuUGlhbm8uYmFubmVyID0ge1xyXG5cdG1vc3RyYXJGb290ZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZvLWJhbm5lci1mb290ZXIuanNcIik7XHJcblx0fSxcclxuXHRtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhckF2YXRhckhlYWRlcjogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYXZhdGFyLWhlYWRlci1waWFuby5qc1wiKTtcclxuXHR9LFxyXG5cdGJvdHRvbUZpeGVkOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xyXG5cdFx0d2luZG93LmdsYkJhbm5lckJvdHRvbSA9IHBhcmFtcztcclxuXHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3N0eWxlcy9iYW5uZXItYm90dG9tLWZpeGVkLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc2NyaXB0cy9iYW5uZXItYm90dG9tLWZpeGVkLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhclNXRzogZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBjc3MgPSBgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zdHlsZXMvc3R5bGUuY3NzJz5gO1xyXG5cdFx0Y29uc3Qgc2NyaXB0SnMgPSBgaHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zY3JpcHQvYW51bmNpby1zd2cuanNgO1xyXG5cclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKGNzcyk7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoc2NyaXB0SnMpO1xyXG5cdH0sXHJcblx0bW9zdHJhckhpZ2hsaWdodFNhbGU6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3NjcmlwdHMvaGlnaGxpZ2h0LXNhbGUuanNcIik7XHJcblx0fSxcclxuXHRtb3N0cmFyU3Vic2NyaWJlQnV0dG9uVmFsb3I6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3ZhbG9yLXN1YnNjcmliZS1idXR0b24vXCIrdmVyc2FvK1wiL3NjcmlwdHMvc3Vic2NyaWJlLWJ1dHRvbi5qc1wiKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuUGlhbm8ucmVnaXN0ZXIgPSB7XHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL25vdmEtdGVsYS1yZWdpc3Rlci5qc1wiKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5oZWxwZXIgPSB7XHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbigpIHtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzY1ZDE5MzBhMGJkYTQ3NmJhOGQzYzI1YzUzNzFlYzNmL3BpYW5vL2hlbHBlci9yZWdpc3Rlci5qc1wiKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5wYXl3YWxsID0ge1xyXG5cdHJlZGlyZWNpb25hckJhcnJlaXJhOiBmdW5jdGlvbih1cmwpIHtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkJhcnJlaXJhXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7fSwgMTAwMCk7XHJcblx0fSxcclxuXHRzaG93OiBmdW5jdGlvbih0eXBlUGF5d2FsbCA9IG51bGwpIHtcclxuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdHlwZVBheXdhbGw7XHJcblx0XHJcblx0XHRpZighUGlhbm8uYWN0aXZlUGF5d2FsbCkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1BheXdhbGwgLSBJcyBub3QgYXZhaWFibGUnKVxyXG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXHJcblx0XHR9IGVsc2UgeyBcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRuZXcgUGF5d2FsbENwdCgpO1xyXG5cdFx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbCAtIEVycm9yIG9uIGxvYWQnKVxyXG5cdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZyA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xlYXJGb3JBZHMnKVxyXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59O1xyXG5cclxuUGlhbm8uY2hlY2tQYXl3YWxsID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGNvdW50ID0gMDtcclxuXHRcclxuXHRjb25zdCBjaGVja0dhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRsZXQgaGFzR2F0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXJyZWlyYS1yZWdpc3Rlci1wYXl3YWxsLCAucGF5d2FsbC1jcHQnKTtcclxuXHRcdGxldCBoYXNQdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHViLXJldGFuZ3Vsby0xIGlmcmFtZSwgI3B1Yi1yZXRhbmd1bG8tMiBpZnJhbWUsICNwdWItZnVsbGJhbm5lci0xIGlmcmFtZScpO1xyXG5cclxuXHRcdGlmKGNvdW50ID4gMikge1xyXG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTtcclxuXHRcdFx0UGlhbm8uYWN0aXZlUGF5d2FsbCA9IGZhbHNlO1xyXG5cdFx0XHRjbGVhckludGVydmFsKGNoZWNrR2F0ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoICggKGhhc0dhdGUgJiYgUGlhbm8uYWN0aXZlUGF5d2FsbCkgfHwgaGFzUHViKSB8fCBjb3VudCA+IDgpIFxyXG5cdFx0XHRjbGVhckludGVydmFsKGNoZWNrR2F0ZSk7XHJcblxyXG5cdFx0Y291bnQrKztcclxuXHR9LCAxMDAwKTtcclxufTtcclxuXHJcblBpYW5vLnJlZ2lzdGVyUGF5d2FsbCA9IHsgXHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8gPSBudWxsLCB0aXBvID0gbnVsbCkge1xyXG5cdFx0UGlhbm8udHlwZVBheXdhbGwgPSB0aXBvO1xyXG5cclxuXHRcdGlmKCFQaWFuby5hY3RpdmVQYXl3YWxsIHx8ICghdmVyc2FvIHx8ICFQaWFuby50eXBlUGF5d2FsbCkgKSB7XHJcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcclxuXHRcdFx0XHRcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8uanNcIiwgXHJcblx0XHRcdFx0ZGF0YSA9PiB7IFxyXG5cdFx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgIT09IDIwMCkgeyBcclxuXHRcdFx0XHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7IFxyXG5cdFx0XHRcdFx0fSBcclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cuaGFzUGF5d2FsbCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoUGlhbm8udHlwZVBheXdhbGwgPT09ICdyZWdpc3RlcicgfHwgUGlhbm8udHlwZVBheXdhbGwgPT09ICdleGNsdXNpdm8nICkge1xyXG5cdFx0XHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1x0XHRcdFxyXG5cdFx0XHRcdEdBLnNldEV2ZW50cyhcIkJhcnJlaXJhXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmNvbXVuaWNhZG8gPSB7XHJcblx0bW9zdHJhckluZm9ybWFjYW86IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvY29tdW5pY2FjYW8tcGlhbm8uanNcIik7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uYWRibG9jayA9IHtcclxuXHRtb3N0cmFyQWRCbG9jazogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcclxuXHJcblx0XHRwYXJhbXMuYXNzZXRzUGF0aCA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9gO1xyXG5cdFx0XHJcblx0XHR3aW5kb3cuZ2xiQWRibG9jayA9IHBhcmFtcztcclxuXHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zY3JpcHRzL2FkYmxvY2stcGlhbm8uanNcIik7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uYmxvcXVlaW9zID0ge1xyXG5cdGxpYmVyYXJFc2M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jsb3F1ZWlvL2xpYmVyYVRlY2xhZG8uanNcIik7XHJcblx0fSxcclxuXHRibG9xdWVpYVZpZXdNb2RlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vYmxvcXVlaWFWaWV3bW9kZS5qc1wiKTtcclxuICAgIH1cclxufTtcclxuXHJcblBpYW5vLnBhcmNlaXJvID0ge1xyXG5cdG1vc3RyYUZvb3RlclBhcmNlaXJvOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9mb290ZXItcGFyY2Vpcm9zLXBpYW5vLmpzXCIpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmluYWRpbXBsZW50ZSA9IHtcclxuXHRnZXRMaW5rQXNzaW5hdHVyYTogZnVuY3Rpb24obGluaykge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChsaW5rW2ldLnJlbCA9PSAnYXNzaW5hdHVyYScpIHJldHVybiBsaW5rW2ldLmhyZWY7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8ueG1sSHR0cFJlcXVlc3QgPSB7XHJcblx0Z2VyYVNjcmlwdE5hUGFnaW5hOiBmdW5jdGlvbih1cmxTY3JpcHQsIGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmxTY3JpcHQpO1xyXG5cdFx0eGhyLnNlbmQoKTtcclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYodGhpcy5yZWFkeVN0YXRlID09PSA0KXtcclxuXHRcdFx0XHRpZih0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdFx0dmFyIGFwcGVuZERlU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0XHRcdFx0XHRhcHBlbmREZVNjcmlwdC5pbm5lckhUTUwgPSByZXNwb3N0YTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwZW5kRGVTY3JpcHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBuYSBmdW7Dp8OjbyBnZXJhciBzY3JpcHQgbmEgcMOhZ2luYS4nLCAndXJsOiAnICsgdXJsU2NyaXB0XHJcblx0XHRcdFx0XHRcdCsgJyBTdGF0dXNFcnJvOiAnICsgdGhpcy5zdGF0dXNcclxuXHRcdFx0XHRcdFx0KyAnIFN0YWNrOiAnICsgdGhpcy5zdGF0dXNUZXh0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGNhbGxiYWNrKVxyXG5cdFx0XHRcdGNhbGxiYWNrKHhocik7IFxyXG5cdFx0fTtcdFxyXG5cdH0sXHJcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IGZ1bmN0aW9uKGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSB7XHJcblx0XHRcclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlLCBmYWxzZSk7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHR4aHIuc2VuZCgpO1xyXG5cdFxyXG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XHJcblx0XHRcdGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcclxuXHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xyXG5cdFx0XHRcdHZhciBzaXR1YWNhb1BhZ2FtZW50byA9IHJlc3BKc29uLnNpdHVhY2FvUGFnYW1lbnRvLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInNpdHVhY2FvUGFnYW1lbnRvXCIsIHNpdHVhY2FvUGFnYW1lbnRvXSk7XHJcblxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyAhPSAwICYmIFBpYW5vLnZhcmlhdmVpcy5zdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlLmluZGV4T2YoeGhyLnN0YXR1cykgPiAtMSkge1xyXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgXCJTdGF0dXMgRGVzY29uaGVjaWRvXCIgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbzogZnVuY3Rpb24oZ2xiaWQpIHtcclxuXHRcdFxyXG5cdFx0dmFyIGNvZGlnb1Byb2R1dG8gPSBQaWFuby52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpO1xyXG5cdFx0aWYoY29kaWdvUHJvZHV0byA9PSAnZXJyb3InKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcInRva2VuLWF1dGVudGljYWNhb1wiOiBnbGJpZCwgXCJpcFVzdWFyaW9cIjogUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLklQLCBcImNvZGlnb1Byb2R1dG9cIjogY29kaWdvUHJvZHV0b30pO1xyXG5cclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vcGVuKFwiUE9TVFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFZlcmlmaWNhTGVpdG9yLCBmYWxzZSk7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdFx0XHJcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XHJcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApe1xyXG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XHJcblx0XHRcdFx0dmFyIHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gZmFsc2UsIHJlc3Bvc3RhRGVNb3Rpdm8gPSAnJywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSAnJztcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLm1vdGl2byAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRyZXNwb3N0YURlTW90aXZvID0gcmVzcEpzb24ubW90aXZvLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24udGVtVGVybW9EZVVzbyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRyZXNwb3N0YURlVGVybW9EZVVzbyA9IHJlc3BKc29uLnRlbVRlcm1vRGVVc287XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubGluayAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9IFBpYW5vLmluYWRpbXBsZW50ZS5nZXRMaW5rQXNzaW5hdHVyYShyZXNwSnNvbi5saW5rKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGlzQXV0b3JpemFkbyA9IFBpYW5vLmF1dGVudGljYWNhby5pc0F1dG9yaXphZG8ocmVzcG9zdGFEZVRlcm1vRGVVc28sIHJlc3Bvc3RhRGVNb3Rpdm8sIHJlc3BKc29uLmF1dG9yaXphZG8sIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcclxuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHJlc3BKc29uLmF1dG9yaXphZG8sIHJlc3Bvc3RhRGVNb3Rpdm8sIGlzQXV0b3JpemFkbywgcmVzcG9zdGFEZVRlcm1vRGVVc28pO1xyXG5cdFx0XHRcdHZhciBfanNvbkxlaXRvciA9IHtcclxuXHRcdFx0XHRcdFx0XCJhdXRvcml6YWRvXCIgOiByZXNwSnNvbi5hdXRvcml6YWRvLFxyXG5cdFx0XHRcdFx0XHRcIm1vdGl2b1wiOiByZXNwb3N0YURlTW90aXZvLFxyXG5cdFx0XHRcdFx0XHRcImxvZ2Fkb1wiOiBpc0F1dG9yaXphZG8sXHJcblx0XHRcdFx0XHRcdFwidGVtVGVybW9EZVVzb1wiOiByZXNwb3N0YURlVGVybW9EZVVzbyxcclxuXHRcdFx0XHRcdFx0XCJnbGJpZFwiOiBnbGJpZCxcclxuXHRcdFx0XHRcdFx0XCJwcm9kdXRvXCI6IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpLFxyXG5cdFx0XHRcdFx0XHRcImNvZFByb2R1dG9cIjogY29kaWdvUHJvZHV0byxcclxuXHRcdFx0XHRcdFx0XCJ1dWlkXCI6IHJlc3BKc29uLnVzdWFyaW9JZFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRfanNvbkxlaXRvciA9IGJ0b2EoZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KF9qc29uTGVpdG9yKSkpO1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgX2pzb25MZWl0b3IsIDEpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0aWYoUGlhbm8uZ29vZ2xlLnNob3dTYXZlU3Vic2NyaXB0aW9uKHJlc3BKc29uKSl7XHJcblx0XHRcdFx0XHRcdHRyeXtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc3dnU2VydmljZSA9IG5ldyBTd2dTZXJ2aWNlKCk7XHJcblx0XHRcdFx0XHRcdFx0c3dnU2VydmljZS5zYXZlR2xvYm9TdWJzY3JpcHRpb24oZ2xiaWQpO1xyXG5cdFx0XHRcdFx0XHR9IGNhdGNoKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ0Vycm8gYW8gY2hhbWFyIGEgZnVuw6fDo28gc2hvd1NhdmVTdWJzY3JpcHRpb24gZG8gQWxkZWJhcmFuLicsIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdVUkw6ICcgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCsgJyBHTEJJRDogJyArIGdsYmlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEVycm86ICcgKyBlcnJvcik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYocmVzcEpzb24uYXV0b3JpemFkbyA9PSB0cnVlKXtcclxuXHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMocmVzcEpzb24udXN1YXJpb0lkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFQSSBkZSBhdXRvcml6YWNhbyBkZSBhY2Vzc29cIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBnbGJpZCk7XHJcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uZ29vZ2xlID0ge1xyXG4gIGlzQXV0aG9yaXplZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKSl7XHJcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKS5zdWJzY3JpcHRpb25Ub2tlbiwgXCJDb250YSBHb29nbGVcIiwgXCJPIEdsb2JvXCIpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSl7XHJcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSwgXCJDb250YSBHb29nbGVcIiwgXCJHb29nbGVcIik7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuICB9LFxyXG5cclxuICBpc1NwZWNpZmljR29vZ2xlVXNlcjogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoUGlhbm8uZ29vZ2xlLmlzQXV0aG9yaXplZCgpKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dHJ5e1xyXG5cdFx0XHR2YXIgb0dsb2JvQnVzaW5lc3MgPSBuZXcgT0dsb2JvQnVzaW5lc3MoKTtcclxuXHRcdFx0b0dsb2JvQnVzaW5lc3MudmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZChzd2dFbnRpdGxlbWVudHMpO1xyXG5cdFx0fSBjYXRjaChlcnJvcikge1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkVycm8gYW8gZXhlY3V0YXIgbyBBbGRlYmFyYW5cIiwgXCJFcnJvcjogXCIgKyBlcnJvciArIFwiIC0gRW50aXRsZW1lbnRzOiBcIiArIHN3Z0VudGl0bGVtZW50cy5lbnRpdGxlbWVudHNbMF0uc3Vic2NyaXB0aW9uVG9rZW4pO1xyXG5cdFx0fVx0XHRcdFxyXG5cdH0sXHJcblxyXG5cdHNob3dTYXZlU3Vic2NyaXB0aW9uOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcblx0XHRpZighc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkgJiYgcmVzcG9uc2UubW90aXZvID09PVwiQVVUT1JJWkFET1wiICYmICFIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLlNBVkVfU1VCU0NSSVBUSU9OKSl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5QaWFuby5hdXRlbnRpY2FjYW8gPSB7XHJcblx0aXNMb2dhZG9DYWR1bjogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xyXG5cdFx0aWYgKCFnbGJpZCkge1xyXG5cdFx0XHRpZiAodXRwKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBnbGJpZCAhPSAnJztcclxuXHR9LFxyXG5cdHZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50bzogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xyXG5cdFx0aWYgKFBpYW5vLmF1dGVudGljYWNhby5pc0xvZ2Fkb0NhZHVuKGdsYmlkLCB1dHApKSB7XHJcblx0XHRcdGlmICh1dHApIHtcclxuXHRcdFx0XHR2YXIgX2xlaXRvciA9IEpTT04ucGFyc2UoZGVjb2RlVVJJKGF0b2IodXRwKSkpO1xyXG5cdFx0XHRcdGlmIChnbGJpZCA9PSBfbGVpdG9yLmdsYmlkICYmICh0eXBlb2YgX2xlaXRvci5wcm9kdXRvID09IFwidW5kZWZpbmVkXCIgfHwgX2xlaXRvci5wcm9kdXRvID09IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSkge1xyXG5cdFx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhfbGVpdG9yLmF1dG9yaXphZG8sIF9sZWl0b3IubW90aXZvLCBfbGVpdG9yLmxvZ2FkbywgX2xlaXRvci50ZW1UZXJtb0RlVXNvKTtcclxuXHRcdFx0XHRcdGlmKF9sZWl0b3IuYXV0b3JpemFkbyl7XHJcblx0XHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoX2xlaXRvci51dWlkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbyhnbGJpZCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRpc0F1dG9yaXphZG86IGZ1bmN0aW9uKHRlcm1vRGVVc28sIG1vdGl2bywgYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIHtcclxuXHRcdGlmIChhdXRvcml6YWRvIHx8IG1vdGl2byA9PSBcImluZGlzcG9uaXZlbFwiIHx8IHRlcm1vRGVVc28gIT0gZmFsc2UpIHtcclxuXHRcdFx0aWYgKGF1dG9yaXphZG8gJiYgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlKGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGRlZmluZVVzdWFyaW9QaWFubzpmdW5jdGlvbihhdXRvcml6YWRvLCBtb3Rpdm8sIGxvZ2FkbywgdGVtVGVybW9EZVVzbyl7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYXV0b3JpemFkb1wiLCBhdXRvcml6YWRvXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibW90aXZvXCIsIG1vdGl2b10pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImxvZ2Fkb1wiLCBsb2dhZG9dKTtcclxuXHRcdGlmKHRlbVRlcm1vRGVVc28gIT0gXCIgXCIpXHJcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ0ZW1UZXJtb1wiLCB0ZW1UZXJtb0RlVXNvXSk7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8udXRpbCA9IHtcclxuXHRpc1NlY3Rpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09PSAnc2VjdGlvbicgPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHR0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ1ZhcmlhdmVsIHRpcG9Db250ZXVkb1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRpZiAodHlwZW9mIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignVmFyaWF2ZWwgbm9tZVByb2R1dG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHRleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xyXG5cdFx0dmFyIGNoYXZlc0NhbXBhbmhhID0gWyd1dG1fbWVkaXVtJywndXRtX3NvdXJjZSddO1xyXG5cdFx0dmFyIHZhbG9yZXNDYW1wYW5oYSA9IFtdO1xyXG5cclxuXHRcdGZvciAodmFyIGlkeFBhcmFtQ2FtcGFuaGEgPSAwOyBpZHhQYXJhbUNhbXBhbmhhIDwgY2hhdmVzQ2FtcGFuaGEubGVuZ3RoOyBpZHhQYXJhbUNhbXBhbmhhKyspIHtcclxuXHRcdFx0dmFyIGNoYXZlQ2FtcGFuaGEgPSBjaGF2ZXNDYW1wYW5oYVtpZHhQYXJhbUNhbXBhbmhhXTtcclxuXHRcdFx0aWYgKHVybC5pbmRleE9mKGNoYXZlQ2FtcGFuaGEgKyAnPScpICE9IC0xKSB7XHJcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBjaGF2ZUNhbXBhbmhhICsgXCI9KFteJiNdKilcIik7XHJcblx0XHRcdFx0dmFyIHZhbG9yQ2FtcGFuaGEgPSB1cmwubWF0Y2gocmVnZXgpWzFdO1xyXG5cdFx0XHRcdGlmKHZhbG9yQ2FtcGFuaGEpe1xyXG5cdFx0XHRcdFx0dmFsb3Jlc0NhbXBhbmhhLnB1c2godmFsb3JDYW1wYW5oYSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodmFsb3Jlc0NhbXBhbmhhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInV0bVwiLCB2YWxvcmVzQ2FtcGFuaGEuam9pbihcIjtcIildKTtcclxuXHRcdH1cclxuXHRcdGlmICh1cmwuaW5kZXhPZigndXRtX2NhbXBhaWduPScpICE9IC0xKSB7XHJcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJ1dG1fY2FtcGFpZ249KFxcXFx3KylcIik7XHJcblx0XHRcdHZhciBjYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XHJcblx0XHRcdGlmKGNhbXBhbmhhKXtcclxuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiY2FtcGFuaGFcIiwgY2FtcGFuaGFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0aXNPcmlnZW1CdXNjYWRvcjogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHRcdHZhciByZWdleFJvYm9zID0gbmV3IFJlZ0V4cChcIihpYV9hcmNoaXZlcil8KEdvb2dsZWJvdCl8KE1lZGlhcGFydG5lcnMtR29vZ2xlKXwoQWRzQm90LUdvb2dsZSl8KG1zbmJvdCl8KFlhaG9vISBTbHVycCl8KFp5Qm9yZyl8KEFzayBKZWV2ZXMvVGVvbWEpfChiaW5nYm90KXwoY1hlbnNlYm90KVwiKTtcclxuXHRcdHZhciBlaFJvYm8gPSByZWdleFJvYm9zLnRlc3QodXNlckFnZW50KTtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJidXNjYWRvclwiLCBlaFJvYm9dKTtcclxuXHRcdHJldHVybiBlaFJvYm87XHJcblx0fSxcclxuXHRtb250YVVybFN0ZzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKSAhPSAncHJkJyA/ICctc3RnJyA6ICcnO1xyXG5cdH0sXHJcblx0dGVtUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xyXG5cdFx0dmFyIHBhcmFtZXRyb3MgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XHJcblx0XHRyZXR1cm4gcGFyYW1ldHJvcy5pbmRleE9mKHBhcmFtTmFtZSkgIT0gLTEgPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHRnZXRWYWxvclBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbWV0cm8pIHtcclxuXHRcdGlmIChQaWFuby51dGlsLnRlbVBhcmFtZXRyb05hVXJsKHBhcmFtZXRybykpIHtcclxuXHRcdFx0dmFyIHBhcmFtZXRyb3MgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XHJcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFw/KCYpXVwiICsgcGFyYW1ldHJvICsgXCI9KFteJiNdKilcIik7XHJcblx0XHRcdHJldHVybiBwYXJhbWV0cm9zLm1hdGNoKHJlZ2V4KVsxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBcInNlbSBwYXJhbWV0cm9cIjtcclxuXHR9LFxyXG5cdGlzRGVidWc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRztcclxuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xyXG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJykge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJykge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRykpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRpc0RvbWluaW9PR2xvYm86IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIjovLyguKj8pL1wiKSwgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKTtcclxuXHRcdGlmICh1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJvZ2xvYm9cIikgPiAtMSB8fCAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwiZ2xvYm9pXCIpID4gLTEgJiYgdXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwiZWRnXCIpID09IC0xKSkge1xyXG5cdFx0XHRyZXR1cm4gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9LFxyXG5cdGNhbGxiYWNrTWV0ZXI6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xyXG5cdFx0d2luZG93LnJlZ3Jhc1RpbnkgPSBtZXRlckRhdGE7XHJcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KGZhbHNlKTtcclxuXHR9LFxyXG5cdGNhbGxiYWNrTWV0ZXJFeHBpcmVkOiBmdW5jdGlvbihtZXRlckRhdGEpIHtcclxuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xyXG5cdFx0UGlhbm8udmFyaWF2ZWlzLmlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkID0gdHJ1ZTtcclxuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcodHJ1ZSk7XHJcblx0fSxcclxuXHRnZXRXaW5kb3dMb2NhdGlvblNlYXJjaDogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdH0sXHJcblx0Z2V0V2luZG93TG9jYXRpb25IcmVmOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH0sXHJcblx0YWRpY2lvbmFyQ3NzOiBmdW5jdGlvbihjc3NQYXRoKXtcclxuXHRcdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRlLmlubmVySFRNTCA9IGNzc1BhdGg7XHJcblx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlLCBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XHJcblx0fSxcclxuXHRpc1JldmlzdGE6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgcmV2aXN0YXMgPSBbXCJlcG9jYVwiLCBcImF1dG8tZXNwb3J0ZVwiLCBcInZvZ3VlXCIsIFwiZ2xhbW91clwiLCBcImNhc2Etdm9ndWVcIiwgXCJtYXJpZS1jbGFpcmVcIiwgXCJjYXNhLWUtamFyZGltXCIsIFwicXVlbS1hY29udGVjZVwiLCBcImdsb2JvLXJ1cmFsXCIsIFwiZ3FcIiwgXCJtb25ldFwiLCAnY3Jlc2NlcicsJ2dhbGlsZXUnXTtcclxuXHRcdGlmKHJldmlzdGFzLmluZGV4T2YoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpID4gLTEpXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRyZWNhcnJlZ2FQaWFubzogZnVuY3Rpb24gKHRpcG9Db250ZXVkbywgaXNFeGNsdXNpdm8sIG5vbWVQcm9kdXRvKSB7XHJcblx0XHR3aW5kb3cudGlwb0NvbnRldWRvUGlhbm8gPSB0aXBvQ29udGV1ZG87XHJcblx0XHR3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPSBpc0V4Y2x1c2l2bztcclxuXHRcdHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID0gbm9tZVByb2R1dG87XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdy5yZWdyYXNUaW55ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSBcIlwiO1xyXG5cdFx0fVxyXG5cdFx0UGlhbm8uY29uc3RydXRvci5pbml0VHAoKTtcclxuXHRcdHRwLmV4cGVyaWVuY2UuZXhlY3V0ZSgpO1xyXG5cdH0sXHJcblx0aXNWYWxvcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09IFwidmFsb3JcIilcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5jb25maWd1cmFjYW8gPSB7XHJcblx0anNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzOiB7XHJcblx0XHQnaW50Jzoge1xyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidkWHU3ZHZGS1JpJyxcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidNY3RGZ1JDRXN1JyxcclxuXHRcdFx0J3NldFNhbmRCb3gnOid0cnVlJyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1kWHU3ZHZGS1JpJyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9zYW5kYm94LnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPU1jdEZnUkNFc3UnLFxyXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxyXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxyXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXHJcblx0XHR9LFxyXG5cdFx0J3FsdCc6e1xyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6JyxcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcclxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcclxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGlxbHQtaWcuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcclxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vJyxcclxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xyXG5cdFx0fSxcclxuXHRcdCdwcmQnOntcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXHJcblx0XHRcdCdzZXRTYW5kQm94JzonZmFsc2UnLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXHJcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXHJcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tLycsXHJcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5jb25zdHJ1dG9yID0ge1xyXG5cdGluaXRUcDogZnVuY3Rpb24oKSB7XHJcblx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJJbmljaW8gSW5pdFRwXCIpO1xyXG5cdFx0dHAgPSB3aW5kb3dbXCJ0cFwiXSB8fCBbXTtcclxuXHRcdHRwLnB1c2goW1wic2V0VGFnc1wiLCBbUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCldXSk7XHJcblx0XHRpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSB8fCBQaWFuby51dGlsLmlzVmFsb3IoKSkge1xyXG5cdFx0XHR0cC5wdXNoKFtcInNldEFpZFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLmlkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXNdKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0cC5wdXNoKFtcInNldEFpZFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLmlkU2FuZGJveFRpbnlwYXNzXSk7XHJcblx0XHR9XHJcblx0XHR0cC5wdXNoKFtcInNldFNhbmRib3hcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5zZXRTYW5kQm94XSk7XHJcblx0XHR0cC5wdXNoKFtcInNldERlYnVnXCIsIFBpYW5vLnV0aWwuaXNEZWJ1ZygpXSk7XHJcblx0XHR2YXIgY2xlYW5fdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKS5zcGxpdChcIj9cIilbMF07XHJcblx0XHR0cC5wdXNoKFtcInNldFBhZ2VVUkxcIixjbGVhbl91cmxdKTtcclxuXHRcdHRwLnB1c2goW1wic2V0Wm9uZVwiLCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKV0pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm5vbWVQcm9kdXRvXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XHJcblx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLmRldGVjdFByaXZhdGVNb2RlKGZ1bmN0aW9uIChpc19wcml2YXRlKSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhbm9uaW1vXCIsIGlzX3ByaXZhdGVdKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChQaWFuby52YXJpYXZlaXMuaXNDb250ZXVkb0V4Y2x1c2l2bygpKSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjb250ZXVkb0V4Y2x1c2l2b1wiLCB0cnVlXSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJyAmJiAodHlwZW9mIHN3Z0VudGl0bGVtZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkpICkge1xyXG5cdFx0XHRQaWFuby5nb29nbGUuaXNTcGVjaWZpY0dvb2dsZVVzZXIoc3dnRW50aXRsZW1lbnRzKTtcclxuXHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLFwiQVVUT1JJWkFET1wiLCB0cnVlLCBcIlwiKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8udmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkdDT00pLCBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFApKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0UGlhbm8ucmVnaW9uYWxpemFjYW8uZ2V0UmVnaW9uKCk7XHJcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcclxuXHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYmFubmVyQ29udGFkb3JMaWdhZG9cIiwgdHJ1ZV0pO1xyXG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xyXG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJBY3RpdmVcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyXSk7XHJcblx0XHR0cC5wdXNoKFtcImFkZEhhbmRsZXJcIiwgXCJtZXRlckV4cGlyZWRcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyRXhwaXJlZF0pO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiRmltIEluaXRUcFwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkUGlhbm9FeHBlcmllbmNlcygpe1xyXG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRhLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG5cdGEuYXN5bmMgPSB0cnVlO1xyXG5cdGlmKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcclxuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm9SZXZpc3RhcztcdFxyXG5cdH0gZWxzZSB7XHJcblx0XHRhLnNyYyA9IFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsU2FuZGJveFBpYW5vO1xyXG5cdH1cclxuXHRcclxuXHR2YXIgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xyXG5cclxuXHRiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIGIpO1xyXG5cdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBQaWFub1wiLCBcIlNjcmlwdCBhZGljaW9uYWRvXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwaWFub0luaXQoKSB7IFxyXG5cdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnRpbnkpXHJcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxyXG5cclxuICAgIGlmICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSB7IFxyXG5cdFx0d2luZG93LlNXRy5wdXNoKChzdWJzY3JpcHRpb25zKSA9PiB7XHJcblx0XHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZylcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9nLXN1YnNjcmlwdGlvbnMnLCBzdWJzY3JpcHRpb25zKVxyXG5cclxuXHRcdFx0c3dnID0gc3Vic2NyaXB0aW9ucztcclxuXHJcblx0XHRcdHN1YnNjcmlwdGlvbnMuc2V0T25FbnRpdGxlbWVudHNSZXNwb25zZShlbnRpdGxlbWVudHNQcm9taXNlID0+IHtcclxuXHRcdFx0XHRlbnRpdGxlbWVudHNQcm9taXNlLnRoZW4oZW50aXRsZW1lbnRzID0+IHsgXHJcblx0XHRcdFx0XHR3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gZW50aXRsZW1lbnRzO1xyXG5cclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBTV0dcIiwgXCJFbnRpdGxlbWVudHMgcmVjZWJpZG9zXCIpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XHJcblx0XHRcdFx0XHRcdHRyeXtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xyXG5cdFx0XHRcdFx0XHRcdGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y2F0Y2goZXJyb3Ipe1xyXG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiUGlhbm8gbmFvIGZvaSBjYXJyZWdhZGEgY29ycmV0YW1lbnRlIVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBHQS5zZXRFdmVudHNFcnJvcihcIkVudGl0bGVtZW50cyBuw6NvIGNhcnJlZ2Fkb1wiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XHJcbiAgICAgICAgICAgIGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LnRpbnlDcHQuUGlhbm8uY2hlY2tQYXl3YWxsKCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRpbnlJbml0KCkge1xyXG5cdFRpbnkuc2V0UGlhbm8oUGlhbm8pOyBcclxuICAgIGNvbnN0IFN3ZyA9IG5ldyBTd2dNb2R1bGUoKTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IFN3Zy5pbml0KCk7XHJcblx0fVxyXG5cdGNhdGNoKGUpIHsgY29uc29sZS5lcnJvcihlKSB9XHJcblxyXG5cdHBpYW5vSW5pdCgpOyBcclxufTtcclxuXHJcbnRpbnlJbml0KCk7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9