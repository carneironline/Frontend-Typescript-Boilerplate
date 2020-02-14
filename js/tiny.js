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
      var targetPost = window.analiticoPost;
      if (!targetPost) return null;
      var postBox = targetPost.querySelector(".btn-read-more");
      this.createTemplate(postBox);
    }
  }, {
    key: "createTemplate",
    value: function createTemplate(element) {
      if (element) {
        if (!window.glbPaywallInline.cssLoaded) {
          document.body.insertAdjacentHTML('beforebegin', this.cssMinified);
          window.glbPaywallInline.cssLoaded = true;
        }

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
      var template = "\n\t\t<link href=\"https://fonts.googleapis.com/css?family=Open+Sans|Raleway&display=swap\" rel=\"stylesheet\">\n\t\t<div class=\"paywall-cpt-inline\" id=".concat(this.paywallId, "> \n\t\t\t<h1 class =\"paywall-cpt-inline-title\"><span class=paywall-cpt-inline-title-first_line>").concat(this.templateVars.title, "</span><br><span class=paywall-cpt-inline-title-second_line>").concat(this.templateVars.subtitle, "</span></h1>\n\t\t\t<a href=").concat(this.getUrlLoginRegister('button'), ">\n\t\t\t\t<button class=\"paywall-cpt-inline-button\">\n\t\t\t\t\t<span class=\"paywall-cpt-inline-span\">").concat(this.templateVars.buttonText, "</span>\n\t\t\t\t</button> \n\t\t\t</a>\n\t\t\t<p class=\"paywall-cpt-inline-p\">").concat(this.templateVars.loginPreText, "<a href=").concat(this.getUrlLoginRegister(), " class=\"paywall-cpt-inline-a\">").concat(this.templateVars.loginText, "</a></p>\n\t\t\t<div class=\"paywall-cpt-inline-offer\">\n\t\t\t<a href=").concat(this.templateVars.offerLink, ">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=").concat(this.templateVars.imageMobi, " media=\"(max-width: 375px)\">\n\t\t\t\t\t<source srcset=").concat(this.templateVars.imageDesk, " media=\"(min-width: 374px)\">\n\t\t\t\t\t<img class=\"paywall-cpt-inline-img\" src=").concat(this.templateVars.imageLink, " />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t");
      return template;
    }
  }, {
    key: "cssMinified",
    get: function get() {
      return "\n\t  <style>\n\t  .paywall-cpt-inline{margin: 0 auto 40px;padding:20px;border-radius: 4px;border: solid 1px #dbdde1;background-color: #f2f2f5;}.paywall-cpt-inline-title{margin-left:auto;margin-right:auto; margin-bottom:30px;display:block;font-family:Raleway;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.2;letter-spacing:normal;text-align:center;color:#325e94}\n\t  .paywall-cpt-inline-button{margin-left:auto;margin-right:auto;margin-bottom:30px;display:block;width:256px;height:48px;background-color:#f59c00;border-radius:4px;border:solid 3px #f59c00;}\n\t  @media screen and (min-width: 424px) {\n\t\t.paywall-cpt-inline-button { width: 356px; }\n\t }  \n\t .paywall-cpt-inline-img {margin: auto;width: 80em;}.paywall-cpt-inline-span {font-family:Open Sans;font-size:14px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;text-align:center;color:#fff;}.paywall-cpt-inline-p{margin-left:auto;margin-right:auto;margin-botton:30px;display:block;font-family:Raleway;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.14;letter-spacing:normal;text-align:center;color:#707070;}.paywall-cpt-inline-a{font-weight:700;color:#325e94;}.paywall-cpt-inline-offer{margin-left:auto;margin-right:auto;background-color:#fff;} \n\t  </style>";
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
    var id = '0000';

    if (Piano.variaveis.getNomeProduto() === 'oglobo' || Piano.variaveis.getNomeProduto() === 'blogs' || Piano.variaveis.getNomeProduto() === 'kogut' || Piano.variaveis.getNomeProduto() === 'acervo' || Piano.variaveis.getNomeProduto() === 'jornaldigital' || Piano.variaveis.getNomeProduto() === 'blogAnalitico') {
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
      case 'blogAnalitico':
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
  recarregaPiano: function recarregaPiano(tipoConteudo, isExclusivo, nomeProduto) {
    window.tipoConteudoPiano = tipoConteudo;
    window.conteudoExclusivo = isExclusivo;
    window.nomeProdutoPiano = nomeProduto;

    if (typeof window.regrasTiny !== 'undefined') {
      window.regrasTiny.nomeExperiencia = "";
    }

    window["tp"] = [];
    Piano.construtor.initTp();
    loadPianoExperiences();
    checkExperiencesHasChange().then(function (changed) {
      if (changed) {
        analyticalBlockedForPiano();
      } else {
        analyticalUnblockedForPiano();
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLWdhLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiRmIiLCJkYXRhIiwiZGVidWciLCJ3aW5kb3ciLCJ0aW55Q3B0IiwiZGlzYWJsZWQiLCJmYiIsImhhc1BpeGVsIiwicGl4ZWwiLCJuYW1lIiwiaXNEZWZpbmVkIiwiZmJxIiwiR0EiLCJnYSIsIlByb2R1Y3RzIiwiUHJvZHVjdHNNb2R1bGUiLCJkYXRhTGF5ZXIiLCJpc1Byb2R1Y3RWYWxvciIsIl9nYXEiLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJIZWxwZXJzIiwicHJvcCIsImNfbmFtZSIsInZhbHVlIiwiZXhwaXJlZGF5cyIsImV4ZGF0ZSIsIkRhdGUiLCJob3N0bmFtZSIsImxvY2F0aW9uIiwic2V0RGF0ZSIsImdldERhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsImVzY2FwZSIsInRvVVRDU3RyaW5nIiwic3BsaXQiLCJyZXZlcnNlIiwibWF0Y2giLCJSZWdFeHAiLCJjb29raWVUaW55IiwidW5lc2NhcGUiLCJ0b1N0cmluZyIsIlBpYW5vIiwiY29udGVudCIsInNldEV4cGVyaWVuY2UiLCJleHBlcmllbmNlTmFtZSIsImV4cGVyaWVuY2UiLCJyZWdyYXNUaW55Iiwibm9tZUV4cGVyaWVuY2lhIiwic3Vic2VnbWVudGFjYW9QaWFubyIsInNldENvb2tpZSIsInZhcmlhdmVpcyIsImNvbnN0YW50ZSIsIlVUUCIsInByb2R1Y3ROYW1lIiwibm9tZVByb2R1dG9QaWFubyIsInByb2R1Y3RzU2V0dGluZ3MiLCJQcm9kdWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdHNJZCIsImlkIiwiU3dnIiwiU1dHIiwic3dnRW50aXRsZW1lbnRzIiwic3dnIiwibG9jYWxQcm9kdWN0UGlhbm8iLCJoYXNQcm9kdWN0SlNPTiIsInByb2R1Y3RKU09OIiwiZWxIZWFkIiwiaGVhZCIsInNldEdsb2JhbFNXRyIsImdsb2JhbCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsInV0bXNQcm9wcyIsImdsYlBheXdhbGwiLCJ1dG1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsInNldCIsInN1YnNjcmliZSIsInVybCIsImlzUHJvZHVjdGlvbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvZHVjdCIsImZpbHRlciIsInBpYW5vUHJvZHVjdE5hbWUiLCJvYmoiLCJwcm9wc1RvUmVtb3ZlIiwibmV3T2JqIiwiZWxlbWVudCIsImdldFByb2R1Y3QiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXJrdXBUZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3JjIiwidXJsUHJvZCIsInVybFN0ZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldE1hcmt1cCIsInNldFN3Z1NjcmlwdCIsInNldEFsZGViYXJhblNjcmlwdCIsInRlc3RTV0ciLCJUaW55IiwiaGFzUGF5d2FsbCIsInRwIiwiUGF5d2FsbEFuYWx5dGljcyIsInNldEdsb2JhbFRpbnkiLCJzZXRHbG9iYWwiLCJpbml0IiwiZGVmYXVsdFNldHRpbmdzIiwidGlueSIsInBheXdhbGwiLCJhbWJpZW50ZVV0aWxpemFkb1BpYW5vIiwiUGF5d2FsbENwdElubGluZSIsIlBpYW5vTW9kdWxlIiwiZG9tYWluIiwicGF5d2FsbElkIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsImFjdGl2ZUV2ZW50cyIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRpdGxlIiwic3VidGl0bGUiLCJidXR0b25UZXh0IiwiYnV0dG9uTGluayIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGV4dCIsImxvZ2luTGluayIsIm9mZmVyTGluayIsImltYWdlTW9iaSIsImltYWdlRGVzayIsImltYWdlTGluayIsImNzc0xvYWRlZCIsImdsYlBheXdhbGxJbmxpbmUiLCJ0YXJnZXRQb3N0IiwiYW5hbGl0aWNvUG9zdCIsInBvc3RCb3giLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlVGVtcGxhdGUiLCJib2R5IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY3NzTWluaWZpZWQiLCJ0ZW1wbGF0ZSIsInJlbW92ZWRFbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJmaW5kIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmUiLCJ1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byIsInVyaSIsImhyZWYiLCJzZXJ2aWNlSWQiLCJnZXRTZXJ2aWNvSWQiLCJzdHIiLCJ1cmxSZXR1cm4iLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRDb2RpZ29Qcm9kdXRvIiwiZ2V0Tm9tZVByb2R1dG8iLCJ0ZW1wbGF0ZVZhcnMiLCJnZXRVcmxMb2dpblJlZ2lzdGVyIiwiUGF5d2FsbEdBTW9kdWxlIiwiR0FNb2R1bGUiLCJtZXRyaWNzIiwicGF5d2FsbFR5cGUiLCJfUGlhbm8iLCJzZXRFdmVudHMiLCJ2aWV3TmFtZSIsIlJUSUVYIiwicmVzZXRVdHAiLCJkYXRhc2V0IiwiZ2FSZXNldHV0cCIsImltYWdlVG9wIiwiZ2FJbWFnZVBvc2l0aW9uIiwiZ2FMYWJlbCIsImV2ZW50IiwiZXZlbnRvR0FDYXRlZ29yaWEiLCJldmVudG9HQUFjYW8iLCJnYUFjdGlvbiIsImV2ZW50b0dBUm90dWxvIiwiZXZlbnRvR0FWYWxvciIsImV2ZW50b0dBSW50ZXJhY2FvIiwic2V0RGF0YWxheWVyIiwidHlwZVBheXdhbGwiLCJQYXl3YWxsQ3B0IiwiU3dnTW9kdWxlIiwiRkIiLCJGYk1vZHVsZSIsIlBheXdhbGwiLCJhc3NldHNQYXRoIiwiZGlzcGxheSIsInByb2R1Y3RDbGFzcyIsInRhcmdldEJsYW5rIiwidG9wTW9iaSIsInRvcERlc2siLCJ0b3BMaW5rIiwibGVmdE1vYmkiLCJsZWZ0RGVzayIsImxlZnRMaW5rIiwicmlnaHRNb2JpIiwicmlnaHREZXNrIiwicmlnaHRMaW5rIiwiaGlkZUxvZ2luQXJlYSIsImxvZ2luVGFnIiwiY2xlYXJMb2dpbkFyZWEiLCJzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MiLCJlbEJvZHkiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZWxDcHQiLCJzZXRFbFdyYXBwZXIiLCJlbFRvUmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImJvZHlBZGp1c3QiLCJyZW1vdmVFbGVtZW50cyIsImFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXl3YWxsTG9hZCIsImVsQ3B0V3JhcCIsInNldFRpbWVvdXQiLCJlbEJvZHlIZWlnaHQiLCJpbm5lckhlaWdodCIsImVsQ3B0V3JhcEhlaWdodCIsIm9mZnNldEhlaWdodCIsImN1cnJlbnRUb3AiLCJNYXRoIiwiYWJzIiwidG9wV2l0aEZ1bGxFbGVtZW50IiwidG9wIiwib3BhY2l0eSIsInpJbmRleCIsImV2dFdoZWVsIiwiZXZ0VG91Y2giLCJzZXRQaXhlbFR5cGUiLCJjbGlja1RhcmdldHMiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzTG9naW4iLCJCb29sZWFuIiwiZ2V0QXR0cmlidXRlIiwiaXNVcmxTd2ciLCJpbmNsdWRlcyIsIm5vdEJsYW5rIiwiaHJlZlRhcmdldCIsInRyaWdnZXIiLCJzZXRVdG1zIiwib3BlbiIsImJpbmQiLCJuZXd0b3AiLCJzdGVwIiwibXVsdGlwbGllciIsImRlbHRhWSIsImVsVG9wIiwidG91Y2hzdGFydFkiLCJ0b3VjaGVuZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblkiLCJkaWZmIiwiZGVsYXlUaW1lciIsIlRpbnlNb2R1bGUiLCJzZXRHbG9iYWxWYXJzIiwiYW1iaWVudGVzQWNlaXRvcyIsInN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvIiwic3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkIiwiR0NPTSIsIkFNQklFTlRFIiwiU0FWRV9TVUJTQ1JJUFRJT04iLCJDUkVBVEVEX0dMT0JPSUQiLCJHTE9CT0lEX01FU1NBR0UiLCJtZXRyaWNhcyIsIkVWRU5UT19TRU1fQUNBTyIsIkVSUk8iLCJrcnV4IiwiU0VHTUVOVEFDT0VTIiwiS1JVWExJR0FETyIsInV0aWwiLCJJUCIsIkRFQlVHIiwiaXNDb250ZXVkb0V4Y2x1c2l2byIsImNvbnRldWRvRXhjbHVzaXZvIiwiZ2V0QW1iaWVudGVQaWFubyIsImluZGV4T2YiLCJnZXRWYWxvclBhcmFtZXRyb05hVXJsIiwiZ2V0Q29va2llIiwiZ2V0VGlwb0NvbnRldWRvUGlhbm8iLCJ0aXBvQ29udGV1ZG9QaWFubyIsImV4ZWN1dG91UGFnZXZpZXciLCJzZXRFdmVudHNFcnJvciIsImlzUmV2aXN0YSIsIm5vbWVQcm9kdXRvIiwiYXV0ZW50aWNhY2FvIiwiZGVmaW5lVXN1YXJpb1BpYW5vIiwiamFuZWxhQW5vbmltYSIsInJldHJ5IiwiaXNEb25lIiwibmV4dCIsImN1cnJlbnRfdHJpYWwiLCJtYXhfcmV0cnkiLCJpc190aW1lb3V0IiwiaXNJRTEwT3JMYXRlciIsInVzZXJfYWdlbnQiLCJ1YSIsImV4ZWMiLCJwYXJzZUludCIsImRldGVjdFByaXZhdGVNb2RlIiwiaXNfcHJpdmF0ZSIsIndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtIiwiVEVNUE9SQVJZIiwiZSIsImluZGV4ZWREQiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYiIsInJlYWR5U3RhdGUiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInRlbSIsImdldEl0ZW0iLCJsaWdhZG8iLCJwYXJhbWV0cm8iLCJ2YWxvclBhcmFtZXRybyIsIm9idGVtU2VnbWVudGFjYW8iLCJzZWdtZW50YWNvZXMiLCJpIiwicmVnaW9uYWxpemFjYW8iLCJnZXRSZWdpb24iLCJrcnV4R2VvIiwia2V5IiwiZW52aWFFdmVudG9zR0EiLCJfR0FBY2FvIiwiX0dBUm90dWxvIiwibW9udGFSb3R1bG9HQSIsInNldExpbWl0ZUNvbnRhZ2VtIiwiX0dBTGltaXRlIiwiX0dBQ29udGFnZW0iLCJ2aWV3cyIsIm1heFZpZXdzIiwiaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyIiwicmVncmFzIiwicGFzc2FnZW0iLCJmbHV4byIsImV4ZWN1dGFBcG9zUGFnZXZpZXciLCJleHBpcm91IiwidHBDb250ZXh0Iiwic2V0YVZhcmlhdmVpcyIsImlkTG9naW4iLCJ0aXBvTG9naW4iLCJhc3NpbmF0dXJhTG9nYWRhIiwiaWRMb2dpbkFzc2luYW50ZSIsInRpcG9Mb2dpbkFzc2luYW50ZSIsImJhbm5lciIsIm1vc3RyYXJGb290ZXIiLCJ2ZXJzYW8iLCJhZGljaW9uYXJDc3MiLCJtb250YVVybFN0ZyIsInhtbEh0dHBSZXF1ZXN0IiwiZ2VyYVNjcmlwdE5hUGFnaW5hIiwibW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlciIsIm1vc3RyYXJBdmF0YXJIZWFkZXIiLCJib3R0b21GaXhlZCIsInBhcmFtcyIsImdsYkJhbm5lckJvdHRvbSIsIm1vc3RyYXJTV0ciLCJjc3MiLCJzY3JpcHRKcyIsIm1vc3RyYXJIaWdobGlnaHRTYWxlIiwibW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yIiwicmVnaXN0ZXIiLCJtb3N0cmFyQmFycmVpcmEiLCJoZWxwZXIiLCJyZWRpcmVjaW9uYXJCYXJyZWlyYSIsInNob3ciLCJlcnJvciIsInRyaWdnZXJBZHZlcnRpc2luZyIsImFuYWx5dGljIiwiZXJyIiwiYW5hbHl0aWNhbFVuYmxvY2tlZEZvclBpYW5vIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYW5hbHl0aWNhbEJsb2NrZWRGb3JQaWFubyIsImNoZWNrRXhwZXJpZW5jZXNIYXNDaGFuZ2UiLCJfZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCIsImV2ZW50cyIsImV4cGVyaWVuY2VzIiwiZXhwZXJpZW5jZXNDbG9uZSIsImV4cGVyaWVuY2VzQ2hhbmdlZCIsImlzIiwiZXZlbnRUeXBlIiwiZXZlbnRQYXJhbXMiLCJzbmlwcGV0IiwiY2hlY2tQaWFub0FjdGl2ZSIsImNoZWNrUGF5d2FsbCIsIlBpYW5vUmVzdWx0RXZlbnRzIiwiaGFzUnVuSnNXaXRoUGF5d2FsbCIsInRyaWdnZXJQYXl3YWxsT3BlbmVkIiwicmVnaXN0ZXJQYXl3YWxsIiwidGlwbyIsInN0YXR1cyIsImNvbXVuaWNhZG8iLCJtb3N0cmFySW5mb3JtYWNhbyIsImFkYmxvY2siLCJtb3N0cmFyQWRCbG9jayIsImdsYkFkYmxvY2siLCJibG9xdWVpb3MiLCJsaWJlcmFyRXNjIiwiYmxvcXVlaWFWaWV3TW9kZSIsInBhcmNlaXJvIiwibW9zdHJhRm9vdGVyUGFyY2Vpcm8iLCJpbmFkaW1wbGVudGUiLCJnZXRMaW5rQXNzaW5hdHVyYSIsImxpbmsiLCJyZWwiLCJ1cmxTY3JpcHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb3N0YSIsInJlc3BvbnNlVGV4dCIsImFwcGVuZERlU2NyaXB0IiwiYXBwZW5kQ2hpbGQiLCJzdGF0dXNUZXh0IiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXNwSnNvbiIsInBhcnNlIiwic2l0dWFjYW9QYWdhbWVudG8iLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvIiwiZ2xiaWQiLCJjb2RpZ29Qcm9kdXRvIiwiY29uZmlndXJhY2FvIiwianNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzIiwidXJsVmVyaWZpY2FMZWl0b3IiLCJyZXNwb3N0YURlVGVybW9EZVVzbyIsInJlc3Bvc3RhRGVNb3Rpdm8iLCJtb3Rpdm8iLCJ0ZW1UZXJtb0RlVXNvIiwiaXNBdXRvcml6YWRvIiwiYXV0b3JpemFkbyIsIl9qc29uTGVpdG9yIiwidXN1YXJpb0lkIiwiYnRvYSIsImVuY29kZVVSSSIsImdvb2dsZSIsInNob3dTYXZlU3Vic2NyaXB0aW9uIiwic3dnU2VydmljZSIsIlN3Z1NlcnZpY2UiLCJzYXZlR2xvYm9TdWJzY3JpcHRpb24iLCJpc0F1dGhvcml6ZWQiLCJnZXRFbnRpdGxlbWVudEZvclNvdXJjZSIsInN1YnNjcmlwdGlvblRva2VuIiwiaXNTcGVjaWZpY0dvb2dsZVVzZXIiLCJvR2xvYm9CdXNpbmVzcyIsIk9HbG9ib0J1c2luZXNzIiwidmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZCIsImVudGl0bGVtZW50cyIsInJlc3BvbnNlIiwiZW5hYmxlc1RoaXMiLCJpc0xvZ2Fkb0NhZHVuIiwidXRwIiwidmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvIiwiX2xlaXRvciIsImRlY29kZVVSSSIsImF0b2IiLCJwcm9kdXRvIiwibG9nYWRvIiwidXVpZCIsInRlcm1vRGVVc28iLCJpc1NlY3Rpb24iLCJ0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMiLCJleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCIsImdldFdpbmRvd0xvY2F0aW9uU2VhcmNoIiwiY2hhdmVzQ2FtcGFuaGEiLCJ2YWxvcmVzQ2FtcGFuaGEiLCJpZHhQYXJhbUNhbXBhbmhhIiwiY2hhdmVDYW1wYW5oYSIsInJlZ2V4IiwidmFsb3JDYW1wYW5oYSIsImpvaW4iLCJjYW1wYW5oYSIsImlzT3JpZ2VtQnVzY2Fkb3IiLCJyZWdleFJvYm9zIiwiZWhSb2JvIiwidGVtUGFyYW1ldHJvTmFVcmwiLCJwYXJhbU5hbWUiLCJwYXJhbWV0cm9zIiwiaXNEZWJ1ZyIsImlzRG9taW5pb09HbG9ibyIsImdldFdpbmRvd0xvY2F0aW9uSHJlZiIsImNhbGxiYWNrTWV0ZXIiLCJtZXRlckRhdGEiLCJjYWxsYmFja01ldGVyRXhwaXJlZCIsImNzc1BhdGgiLCJpbnNlcnRCZWZvcmUiLCJsYXN0Q2hpbGQiLCJyZXZpc3RhcyIsInJlY2FycmVnYVBpYW5vIiwidGlwb0NvbnRldWRvIiwiaXNFeGNsdXNpdm8iLCJjb25zdHJ1dG9yIiwiaW5pdFRwIiwibG9hZFBpYW5vRXhwZXJpZW5jZXMiLCJjaGFuZ2VkIiwiaXNWYWxvciIsImlkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMiLCJpZFNhbmRib3hUaW55cGFzcyIsInNldFNhbmRCb3giLCJjbGVhbl91cmwiLCJhIiwiYXN5bmMiLCJ1cmxTYW5kYm94UGlhbm9SZXZpc3RhcyIsInVybFNhbmRib3hQaWFubyIsImIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBpYW5vSW5pdCIsInN1YnNjcmlwdGlvbnMiLCJzZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlIiwiZW50aXRsZW1lbnRzUHJvbWlzZSIsInRpbnlJbml0Iiwic2V0UGlhbm8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZTtBQUNYLFdBQVM7QUFDVCxnQkFBWSxPQURIO0FBRVQsVUFBTTtBQUZH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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0aW55LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgICdlcG9jYSc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdlcG9jYScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnYXV0by1lc3BvcnRlJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2F1dG8tZXNwb3J0ZScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAndm9ndWUnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAndm9ndWUnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ2dsYW1vdXInOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnZ2xhbW91cicsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnY2FzYS12b2d1ZSc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdjYXNhLXZvZ3VlJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdtYXJpZS1jbGFpcmUnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnbWFyaWUtY2xhaXJlJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdjYXNhLWUtamFyZGltJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2Nhc2EtamFyZGltJyxcclxuICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ3F1ZW0tYWNvbnRlY2UnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAncXVlbScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnZXBvY2EtbmVnb2Npb3MnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EtbmVnb2Npb3MnLFxyXG4gICAgJ2lkJzogJzAwMDAnXHJcbiAgICB9LFxyXG4gICAgJ2dsb2JvLXJ1cmFsJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2dsb2JvLXJ1cmFsJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdwZWduJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ3BlcXVlbmFzLWVtcHJlc2FzJyxcclxuICAgICdpZCc6ICcwMDAwJ1xyXG4gICAgfSxcclxuICAgICdnYWxpbGV1Jzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2dhbGlsZXUnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ2NyZXNjZXInOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnY3Jlc2NlcicsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnZ3EnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnZ3EnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ21vbmV0Jzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ21vbmV0JyxcclxuICAgICdpZCc6ICc2NjE4J1xyXG4gICAgfSxcclxuICAgICdvZ2xvYm8nOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAnYmxvZ3MnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAna29ndXQnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAnYWNlcnZvJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ09HMDQnLFxyXG4gICAgJ2lkJzogJzM5ODEnXHJcbiAgICB9LFxyXG4gICAgJ2pvcm5hbGRpZ2l0YWwnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwMScsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAndmFsb3InOiB7XHJcbiAgICAnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJyxcclxuICAgICdpZCc6ICc2NjY4J1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmIge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZiID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNEZWZpbmVkKCkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGZicSAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBpeGVsVHlwZSgpIHtcclxuICAgICAgICBpZih0aGlzLmRpc2FibGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1BpeGVsID0gKHR5cGVvZiB0aGlzLmZiLnBpeGVsLm5hbWUgIT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZmIucGl4ZWwubmFtZSA6IG51bGw7IFxyXG5cclxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZCAmJiBoYXNQaXhlbCl7XHJcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MTAyNzAwMzk1MjA2MzQnKTtcclxuICAgICAgICAgICAgZmJxKCd0cmFja1NpbmdsZScsICc0MTAyNzAwMzk1MjA2MzQnLCB0aGlzLmZiLnBpeGVsLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQSAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcuZ2E7XHJcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRHbG9iYWxWYXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyICB8fCBbXTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvciAmJiB0eXBlb2YgX2dhcSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgIHx8IFtdOyAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRzKGFjdGlvbiwgbGFiZWwsIGNhdGVnb3J5ID0gJ1BpYW5vJykge1xyXG5cclxuXHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnbG9nLWdhLWV2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxyXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCAsdHJ1ZV0pO1xyXG5cdFx0XHJcblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiBjYXRlZ29yeSwgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRFdmVudHNFcnJvcihhY3Rpb24sIGxhYmVsKSB7XHJcblx0XHRpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcclxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8gRXJybycsIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XHJcblxyXG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vIEVycm8nLCAnZXZlbnRvR0FBY2FvJzogYWN0aW9uLCAnZXZlbnRvR0FSb3R1bG8nOmxhYmVsfSk7XHJcblx0fVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xyXG5cclxuICAgIHN0YXRpYyBpc0RlZmluZWQocHJvcCkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHByb3AgIT09ICd1bmRlZmluZWQnKSA/IHRydWU6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb29raWUoY19uYW1lLCB2YWx1ZSwgZXhwaXJlZGF5cyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZXhkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSA/IGxvY2F0aW9uLmhvc3RuYW1lIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIWhvc3RuYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV4ZGF0ZS5zZXREYXRlKGV4ZGF0ZS5nZXREYXRlKCkgKyBleHBpcmVkYXlzKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArZXNjYXBlKHZhbHVlKSArICgoZXhwaXJlZGF5cykgPyBcIlwiIDogXCI7ZXhwaXJlcz1cIiArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKVxyXG4gICAgICAgICsgXCI7IHBhdGg9LztcIiArIFwiZG9tYWluPS5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzFdICsgXCIuXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSAoZG9jdW1lbnQuY29va2llKSA/IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKG5hbWUrJz0oW147XSspJykpIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvb2tpZVRpbnkgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzFdLnRvU3RyaW5nKCkpIDogXCJcIjtcclxuICAgICAgICByZXR1cm4gY29va2llVGlueTtcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwZXJpZW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0RlZmluZWQoKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy50aW55Q3B0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnKSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB3aW5kb3cudGlueUNwdC5QaWFubztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV4cGVyaWVuY2UoKSB7ICBcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSAnJzsgICBcclxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZSA9IHt9OyAgXHJcbiAgICAgICAgIFxyXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKVxyXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7cmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIFxyXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7d2luZG93Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xyXG4gICAgICAgXHJcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSA9IGV4cGVyaWVuY2VOYW1lO1xyXG5cdH1cclxuXHJcbiAgICByZXNldFV0cCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZClcclxuICAgICAgICAgICAgSGVscGVycy5zZXRDb29raWUodGhpcy5jb250ZW50LnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgJycsIC0xKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjdHNJZCBmcm9tICcuLi9tb2Nrcy9wcm9kdWN0cy9wcm9kdWN0cy1pZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsb2JhbCgpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBQcm9kdWN0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gaWQ6IHRoaXMucHJvZHVjdElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy50aW55Q3B0ID0gKHdpbmRvdy50aW55Q3B0KSA/ICBPYmplY3QuYXNzaWduKHByb2R1Y3RzU2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IHByb2R1Y3RzU2V0dGluZ3M7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgaXNQcm9kdWN0VmFsb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb2R1Y3ROYW1lICYmIHRoaXMucHJvZHVjdE5hbWUgPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9kdWN0SWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICggKHR5cGVvZiBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdICE9PSAgJ3VuZGVmaW5lZCcpIFxyXG4gICAgICAgICYmICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCAhPT0gICd1bmRlZmluZWQnKSApXHJcbiAgICAgICAgPyBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkIDogbnVsbDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3ZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB3aW5kb3cuU1dHID0gd2luZG93LlNXRyB8fCBbXTsgLy9UT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGlzIHZhcmlhYmxlIGV4aXN0c1xyXG4gICAgICAgIHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSB3aW5kb3cuc3dnRW50aXRsZW1lbnRzIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IChIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpID8gd2luZG93LnRpbnlDcHQuZGVidWcuc3dnIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhbFByb2R1Y3RQaWFubyA9ICh0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gbm9tZVByb2R1dG9QaWFubyA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWxIZWFkID0gZG9jdW1lbnQuaGVhZDsgXHJcblxyXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsU1dHKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHsgXHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSA/IHRydWUgOiBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2xvYmFsU1dHKCkge1xyXG4gICAgICAgIGlmKCFIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnID0ge1xyXG4gICAgICAgICAgICBnbG9iYWw6ICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykgPyBzd2cgOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVdG1zKCkgeyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgY29uc3QgdXRtc1Byb3BzID0gKHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgOiBudWxsOyBcclxuXHJcbiAgICAgICAgdXRtc1Byb3BzLmZvckVhY2goKGl0ZW0pID0+IHsgXHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgIHVybFBhcmFtcy5zZXQoYHV0bV8ke25hbWV9YCwgdmFsdWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZykgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAnc2V0VXRtcycpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCB1dG1zUHJvcHMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCBsb2NhdGlvbilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5pc0RlZmluZWQpIHx8ICF1dG1zUHJvcHMgKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbC5zdWJzY3JpYmUoJ2JyLmNvbS5pbmZvZ2xvYm8ub2dsb2JvLnN3Zy5nb29nbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0cygpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gIFxyXG4gICAgICAgID8gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9wcm9kL3Byb2R1Y3RzLmpzb24nIFxyXG4gICAgICAgIDogJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9kZXYvcHJvZHVjdHMuanNvbic7XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFByb2R1Y3QoKSB7IFxyXG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB0aGlzLmdldFByb2R1Y3RzKCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0ucGlhbm9Qcm9kdWN0TmFtZSA9PT0gdGhpcy5sb2NhbFByb2R1Y3RQaWFubyApWzBdO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0IHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVtb3ZlUHJvcGVydGllcyhvYmopIHsgXHJcbiAgICAgICAgY29uc3QgcHJvcHNUb1JlbW92ZSA9IFsncHJvZHVjdE5hbWUnLCAncGlhbm9Qcm9kdWN0TmFtZSddO1xyXG4gICAgICAgIGNvbnN0IG5ld09iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XHJcblxyXG4gICAgICAgIHByb3BzVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIG5ld09ialtlbGVtZW50XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld09iajtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBtYXJrdXBUZW1wbGF0ZSgpIHsgXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdEpTT04gPSAgYXdhaXQgdGhpcy5yZW1vdmVQcm9wZXJ0aWVzKGF3YWl0IHRoaXMuZ2V0UHJvZHVjdCgpKSB8fCBudWxsOyBcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gT2JqZWN0LmtleXMocHJvZHVjdEpTT04pLmxlbmd0aCA/IEpTT04uc3RyaW5naWZ5KHByb2R1Y3RKU09OKSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmKCFwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhc1Byb2R1Y3RKU09OID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGVidWcpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7J2xvZy1TV0ctUHJvZHVjdCc6IHByb2R1Y3R9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBgJHsgcHJvZHVjdCB9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0TWFya3VwKCkgeyBcclxuICAgICAgICBhd2FpdCB0aGlzLm1hcmt1cFRlbXBsYXRlKCk7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvZHVjdEpTT04pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGVsZW1lbnQudHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMucHJvZHVjdEpTT047XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTd2dTY3JpcHQoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGVsZW1lbnQuc3JjID0gJ2h0dHBzOi8vbmV3cy5nb29nbGUuY29tL3N3Zy9qcy92MS9zd2cuanMnO1xyXG4gICAgICAgIHRoaXMuZWxIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWxkZWJhcmFuU2NyaXB0KCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBjb25zdCB1cmxQcm9kID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2MxMGFlODE5YzU2ODQ2MGJiNGVjMTdjMGE4ZWM1MjY3L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xyXG4gICAgICAgIGNvbnN0IHVybFN0ZyA9ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF9hZGRjNWU4ZjMxNmY0OGVhOTE4MWFmMzcxNjBiMjJiNC9hbGRlYmFyYW4vanMvYnVuZGxlLmpzJztcclxuXHJcbiAgICAgICAgZWxlbWVudC5zcmMgPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyB1cmxQcm9kIDogdXJsU3RnO1xyXG4gICAgICAgIHRoaXMuZWxIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVzdFNXRygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc3dnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCA9IHdpbmRvdy5zd2c7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnVGhlcmUgaXNuXFwndCB3aW5kb3cuc3dnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0TWFya3VwKCk7ICBcclxuICAgICAgICAgXHJcbiAgICAgICAgaWYoIXRoaXMuaGFzUHJvZHVjdEpTT04pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFN3Z1NjcmlwdCgpOyBcclxuICAgICAgICBhd2FpdCB0aGlzLnNldEFsZGViYXJhblNjcmlwdCgpOyAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMudGVzdFNXRygpOyAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlueSAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLlByb2R1Y3RzID0gbmV3IFByb2R1Y3RzTW9kdWxlKCk7XHJcbiAgICAgICAgd2luZG93Lmhhc1BheXdhbGwgPSB3aW5kb3cuaGFzUGF5d2FsbCB8fCBudWxsO1xyXG4gICAgICAgIHdpbmRvdy50cCA9IHdpbmRvdy50cCB8fCBbXTtcclxuICAgICAgICB3aW5kb3cuUGlhbm8gPSB3aW5kb3cuUGlhbm8gfHwge307XHJcbiAgICAgICAgd2luZG93LlBheXdhbGxBbmFseXRpY3MgPSB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyB8fCB7fTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldEdsb2JhbFRpbnkoKTtcclxuICAgICAgICB0aGlzLlByb2R1Y3RzLnNldEdsb2JhbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsb2JhbFRpbnkoKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWJ1Zzoge1xyXG4gICAgICAgICAgICAgICAgdGlueTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXl3YWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN3ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBnYTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNQcm9kdWN0aW9uOiAod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBkZWZhdWx0U2V0dGluZ3M7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQaWFubyhvYmopIHtcclxuICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFubyA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsQ3B0SW5saW5lICB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0dGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xyXG5cclxuXHRcdHRoaXMuZG9tYWluID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLyc7XHRcclxuXHRcdHRoaXMucGF5d2FsbElkID0gJ3BheXdhbGwtaW5saW5lJ1xyXG5cclxuXHRcdHRoaXMuc2V0VGVtcGxhdGVTZXR0aW5ncygoKSA9PiB7XHJcblx0XHRcdHRoaXMuYWN0aXZlRXZlbnRzKClcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xyXG5cdFx0bGV0IHRlbXBsYXRlU2V0dGluZ3MgPSB7XHJcblx0XHRcdHRpdGxlOiAnUGFyYSBjb250aW51YXIgc3VhIGxlaXR1cmEsIMOpIHByZWNpc28gc2UgY2FkYXN0cmFyLicsXHJcblx0XHRcdHN1YnRpdGxlOiAnw4kgcsOhcGlkbyBlIGdyw6F0aXMhJyxcclxuXHRcdFx0YnV0dG9uVGV4dDogJ0NhZGFzdHJlLXNlIGdyYXR1aXRhbWVudGUgYWdvcmEnLFxyXG5cdFx0XHRidXR0b25MaW5rOiAnaHR0cHM6Ly9nb29nbGUuY29tP2wxJyxcclxuXHRcdFx0bG9naW5QcmVUZXh0OiAnSsOhIHBvc3N1aSBjYWRhc3Rybz8gJyxcclxuXHRcdFx0bG9naW5UZXh0OiAnRmHDp2EgbG9naW4nLFxyXG5cdFx0XHRsb2dpbkxpbms6IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/ICdodHRwczovL2xvZ2luLmdsb2JvLmNvbS8nIDogJ2h0dHBzOi8vbG9naW4ucWEuZ2xvYm9pLmNvbS8nLCBcclxuXHRcdFx0b2ZmZXJMaW5rOiBcImh0dHBzOi8vZ29vZ2xlLmNvbT9sMVwiLFxyXG5cdFx0XHRpbWFnZU1vYmk6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTBcIixcclxuXHRcdFx0aW1hZ2VEZXNrOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDR4MTI4XCIsXHJcblx0XHRcdGltYWdlTGluazogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDE1MFwiLFxyXG5cdFx0XHRjc3NMb2FkZWQ6IGZhbHNlXHJcblx0XHR9O1xyXG5cclxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lID0gKHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lKSA/ICBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZVNldHRpbmdzLCB3aW5kb3cuZ2xiUGF5d2FsbElubGluZSkgOiB0ZW1wbGF0ZVNldHRpbmdzOyBcclxuXHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdH1cclxuXHJcbiAgICBhY3RpdmVFdmVudHMoKSB7XHJcblx0XHRjb25zdCB0YXJnZXRQb3N0ID0gd2luZG93LmFuYWxpdGljb1Bvc3Q7XHJcblxyXG5cdFx0aWYoIXRhcmdldFBvc3QpIHJldHVybiBudWxsXHJcblxyXG5cdFx0Y29uc3QgcG9zdEJveCA9IHRhcmdldFBvc3QucXVlcnlTZWxlY3RvcihcIi5idG4tcmVhZC1tb3JlXCIpO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGUocG9zdEJveClcclxuXHR9XHJcblxyXG4gIFx0Y3JlYXRlVGVtcGxhdGUoZWxlbWVudCkge1xyXG5cdFx0aWYgKGVsZW1lbnQpIHtcclxuXHRcdFx0aWYoIXdpbmRvdy5nbGJQYXl3YWxsSW5saW5lLmNzc0xvYWRlZCkge1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMuY3NzTWluaWZpZWQpOyBcclxuXHRcdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbElubGluZS5jc3NMb2FkZWQgPSB0cnVlXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMudGVtcGxhdGUpOyBcclxuXHRcdFx0Y29uc3QgcmVtb3ZlZEVsZW1lbnQgPSBBcnJheS5mcm9tKGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMpLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NOYW1lID09PSAnb3RoZXItY29udGVudCcpXHJcblx0XHRcdFxyXG5cdFx0XHRpZihyZW1vdmVkRWxlbWVudClcclxuXHRcdFx0XHRyZW1vdmVkRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlbW92ZWRFbGVtZW50KVxyXG5cclxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKVxyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdCAgXHJcblx0Z2V0VXJsTG9naW5SZWdpc3Rlcih0eXBlID0gJycpIHtcclxuXHRcdGNvbnN0IHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvID0gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnID8gJ2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnIDogJ2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnO1xyXG5cdFx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcclxuXHRcdGNvbnN0IHNlcnZpY2VJZCA9IHdpbmRvdy50aW55Q3B0LlBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSB8fCBudWxsO1xyXG5cdFx0bGV0IHN0ciA9ICcnO1xyXG5cdFx0bGV0IHVybFJldHVybiA9ICcnO1xyXG5cdFxyXG5cdFx0aWYoIXRoaXMuZGVidWcgJiYgdGhpcy5QaWFuby5pc0RlZmluZWQpIHtcclxuXHRcdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxyXG5cdFx0XHRcdHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvICsgJz9jb2RpZ29Qcm9kdXRvPScgKyAgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCkgXHJcblx0XHRcdFx0KyAnJnNlcnZpY2VJZD0nICsgc2VydmljZUlkXHJcblx0XHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xyXG5cdFx0XHRcdCsgJyZub21lUHJvZHV0bz0nICsgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXHJcblx0XHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxyXG5cdFx0XHQpO1xyXG5cdFxyXG5cdFx0XHRpZih0eXBlID09PSAnYnV0dG9uJykge1xyXG5cdFx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWNhZGFzdHJvLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1sb2dpbi8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdHJldHVybiBzdHI7XHJcblx0fVxyXG5cclxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xyXG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbElubGluZTtcclxuICB9XHJcblxyXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXHJcblx0Y29uc3QgdGVtcGxhdGUgPSBgXHJcblx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc3xSYWxld2F5JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmVcIiBpZD0ke3RoaXMucGF5d2FsbElkfT4gXHJcblx0XHRcdDxoMSBjbGFzcyA9XCJwYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGVcIj48c3BhbiBjbGFzcz1wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGUtZmlyc3RfbGluZT4ke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfTwvc3Bhbj48YnI+PHNwYW4gY2xhc3M9cGF5d2FsbC1jcHQtaW5saW5lLXRpdGxlLXNlY29uZF9saW5lPiR7dGhpcy50ZW1wbGF0ZVZhcnMuc3VidGl0bGV9PC9zcGFuPjwvaDE+XHJcblx0XHRcdDxhIGhyZWY9JHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoJ2J1dHRvbicpfT5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLWJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtc3BhblwiPiR7dGhpcy50ZW1wbGF0ZVZhcnMuYnV0dG9uVGV4dH08L3NwYW4+XHJcblx0XHRcdFx0PC9idXR0b24+IFxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdDxwIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLXBcIj4ke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luUHJlVGV4dH08YSBocmVmPSR7dGhpcy5nZXRVcmxMb2dpblJlZ2lzdGVyKCl9IGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLWFcIj4ke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGV4dH08L2E+PC9wPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLW9mZmVyXCI+XHJcblx0XHRcdDxhIGhyZWY9JHt0aGlzLnRlbXBsYXRlVmFycy5vZmZlckxpbmt9PlxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9JHt0aGlzLnRlbXBsYXRlVmFycy5pbWFnZU1vYml9IG1lZGlhPVwiKG1heC13aWR0aDogMzc1cHgpXCI+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD0ke3RoaXMudGVtcGxhdGVWYXJzLmltYWdlRGVza30gbWVkaWE9XCIobWluLXdpZHRoOiAzNzRweClcIj5cclxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtaW1nXCIgc3JjPSR7dGhpcy50ZW1wbGF0ZVZhcnMuaW1hZ2VMaW5rfSAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRgO1xyXG5cclxuXHRyZXR1cm4gdGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgY3NzTWluaWZpZWQoKSB7XHJcblx0ICByZXR1cm4gYFxyXG5cdCAgPHN0eWxlPlxyXG5cdCAgLnBheXdhbGwtY3B0LWlubGluZXttYXJnaW46IDAgYXV0byA0MHB4O3BhZGRpbmc6MjBweDtib3JkZXItcmFkaXVzOiA0cHg7Ym9yZGVyOiBzb2xpZCAxcHggI2RiZGRlMTtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY1O30ucGF5d2FsbC1jcHQtaW5saW5lLXRpdGxle21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87IG1hcmdpbi1ib3R0b206MzBweDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OlJhbGV3YXk7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6MS4yO2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojMzI1ZTk0fVxyXG5cdCAgLnBheXdhbGwtY3B0LWlubGluZS1idXR0b257bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tYm90dG9tOjMwcHg7ZGlzcGxheTpibG9jazt3aWR0aDoyNTZweDtoZWlnaHQ6NDhweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNTljMDA7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOnNvbGlkIDNweCAjZjU5YzAwO31cclxuXHQgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNHB4KSB7XHJcblx0XHQucGF5d2FsbC1jcHQtaW5saW5lLWJ1dHRvbiB7IHdpZHRoOiAzNTZweDsgfVxyXG5cdCB9ICBcclxuXHQgLnBheXdhbGwtY3B0LWlubGluZS1pbWcge21hcmdpbjogYXV0bzt3aWR0aDogODBlbTt9LnBheXdhbGwtY3B0LWlubGluZS1zcGFuIHtmb250LWZhbWlseTpPcGVuIFNhbnM7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6MS4zODtsZXR0ZXItc3BhY2luZzpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2ZmZjt9LnBheXdhbGwtY3B0LWlubGluZS1we21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWJvdHRvbjozMHB4O2Rpc3BsYXk6YmxvY2s7Zm9udC1mYW1pbHk6UmFsZXdheTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjE0O2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojNzA3MDcwO30ucGF5d2FsbC1jcHQtaW5saW5lLWF7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMzMjVlOTQ7fS5wYXl3YWxsLWNwdC1pbmxpbmUtb2ZmZXJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7fSBcclxuXHQgIDwvc3R5bGU+YFxyXG4gIH1cclxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4uL0hlbHBlcnMnO1xyXG5pbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xyXG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi4vR0EnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbEdBTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcclxuICAgIHRoaXMuR0EgPSBuZXcgR0FNb2R1bGUoKTtcclxuXHJcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXRyaWNzID0ge1xyXG4gICAgICAgIHBheXdhbGw6IHt9LFxyXG4gICAgICAgIGZiOiB7XHJcbiAgICAgICAgICAgIHBpeGVsOiB7fVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYXl3YWxsVHlwZSgpO1xyXG4gIH1cclxuXHJcbiAgcGF5d2FsbExvYWQoKSB7XHJcbiAgICBpZighdGhpcy5QaWFuby5pc0RlZmluZWQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBfUGlhbm8gPSB0aGlzLlBpYW5vLmNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5HQS5zZXRFdmVudHModGhpcy5tZXRyaWNzLnBheXdhbGwudmlld05hbWUsIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUpO1xyXG4gICAgSGVscGVycy5zZXRDb29raWUoX1BpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXIoZWxlbWVudCkge1xyXG4gICAgaWYodGhpcy5kaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJlc2V0VXRwID0gZWxlbWVudC5kYXRhc2V0LmdhUmVzZXR1dHAgfHwgbnVsbDtcclxuICAgIGNvbnN0IGltYWdlVG9wID0gZWxlbWVudC5kYXRhc2V0LmdhSW1hZ2VQb3NpdGlvbjtcclxuICAgIGNvbnN0IGxhYmVsID0gKGltYWdlVG9wID09PSAndG9wJykgPyBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbCArIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsIDogZWxlbWVudC5kYXRhc2V0LmdhTGFiZWw7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZXZlbnQ6ICdFdmVudG9HQScsXHJcbiAgICAgIGV2ZW50b0dBQ2F0ZWdvcmlhOiB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lLFxyXG4gICAgICBldmVudG9HQUFjYW86IGVsZW1lbnQuZGF0YXNldC5nYUFjdGlvbiB8fCBhY3Rpb24sXHJcbiAgICAgIGV2ZW50b0dBUm90dWxvOiBsYWJlbCxcclxuICAgICAgZXZlbnRvR0FWYWxvcjogMCxcclxuICAgICAgZXZlbnRvR0FJbnRlcmFjYW86IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAocmVzZXRVdHApXHJcbiAgICAgICAgdGhpcy5QaWFuby5yZXNldFV0cCgpO1xyXG5cclxuICAgIHRoaXMuc2V0RGF0YWxheWVyKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGF5d2FsbFR5cGUoKSB7XHJcbiAgICBjb25zdCB0eXBlID0gKCAodHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwgIT09ICd1bmRlZmluZWQnKSAmJiB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbClcclxuICAgICAgPyB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIDogJ3BheXdhbGwnO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdyZWdpc3Rlcic6XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwudmlld05hbWUgPSAnRXhpYmljYW8gUmVnaXN0ZXInXHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBjb211bSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQ2FkYXN0cmUtc2UnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdleGNsdXNpdm8nOlxyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0V4aWJpY2FvIFJlZ2lzdGVyJ1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgZXhjbHVzaXZvJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdMb2dpbkV4Y2x1c2l2byc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BheXdhbGwnOlxyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0JhcnJlaXJhJ1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnQmFycmVpcmEnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0Fzc2luZSBhZ29yYSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1BheXdhbGxFeGNsdXNpdm8nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0YWxheWVyKGRhdGEgPSB7fSkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xyXG4gICAgICBkYXRhTGF5ZXIucHVzaChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBpYW5vTW9kdWxlIGZyb20gJy4uL1BpYW5vJztcclxuaW1wb3J0IFBheXdhbGxHQU1vZHVsZSBmcm9tICcuL1BheXdhbGwtZ2EnO1xyXG5pbXBvcnQgU3dnTW9kdWxlIGZyb20gJy4uL1N3Zyc7XHJcbmltcG9ydCBGYk1vZHVsZSBmcm9tICcuLi9GQic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsQ3B0ICB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcclxuXHR0aGlzLkdBID0gbmV3IFBheXdhbGxHQU1vZHVsZSgpO1xyXG5cdHRoaXMuU1dHID0gbmV3IFN3Z01vZHVsZSgpO1xyXG5cdHRoaXMuRkIgPSBuZXcgRmJNb2R1bGUodGhpcy5HQS5tZXRyaWNzLmZiKTtcclxuXHJcblx0dGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnLnBheXdhbGw7XHJcblx0dGhpcy5kb21haW4gPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJztcdFxyXG5cdHRoaXMuc2V0VGVtcGxhdGVTZXR0aW5ncygoKSA9PiB7XHJcblx0XHR0aGlzLmluaXQoKTsgXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5QYXl3YWxsQ3B0ID0gdGhpcztcclxuXHJcblx0d2luZG93LnRpbnlDcHQuUGF5d2FsbCA9IHtcclxuXHRcdGRvbWFpbjogdGhpcy5kb21haW4sXHJcblx0XHRHQTogdGhpcy5HQS5tZXRyaWNzLFxyXG5cdH07XHJcbiAgfVxyXG5cclxuICBzZXRUZW1wbGF0ZVNldHRpbmdzKGNhbGxiYWNrKSB7XHJcblx0XHRsZXQgdGVtcGxhdGVTZXR0aW5ncyA9IHtcclxuXHRcdFx0dGVtcGxhdGU6ICdkZWZhdWx0JyxcclxuXHRcdFx0YXNzZXRzUGF0aDogJycsXHJcblx0XHRcdGRpc3BsYXk6IG51bGwsXHJcblx0XHRcdHByb2R1Y3RDbGFzczogdHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnID8gYHBheXdhbGwtY3B0LSR7bm9tZVByb2R1dG9QaWFub31gIDogJ3BheXdhbGwtY3B0LW9nbG9ibycsXHJcblx0XHRcdHRpdGxlOiAnRXNzZSBjb250ZcO6ZG8gw6kgbyB0w610dWxvLicsXHJcblx0XHRcdHRhcmdldEJsYW5rOiB0cnVlLFxyXG5cdFx0XHR0b3BNb2JpOiAnJyxcclxuXHRcdFx0dG9wRGVzazogJycsXHJcblx0XHRcdHRvcExpbms6ICcnLFxyXG5cdFx0XHRsZWZ0TW9iaTogJycsXHJcblx0XHRcdGxlZnREZXNrOiAnJyxcclxuXHRcdFx0bGVmdExpbms6ICcnLFxyXG5cdFx0XHRyaWdodE1vYmk6ICcnLFxyXG5cdFx0XHRyaWdodERlc2s6ICcnLFxyXG5cdFx0XHRyaWdodExpbms6ICcnXHJcblx0XHR9O1xyXG5cclxuXHRcdHRlbXBsYXRlU2V0dGluZ3MuaGlkZUxvZ2luQXJlYSA9IGZhbHNlO1xyXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5sb2dpblRleHQgPSAnRmHDp2EgbG9naW4nO1xyXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5sb2dpblByZVRleHQgPSAnSsOhIHBvc3N1aSBjYWRhc3Rybz8nO1xyXG5cdFx0XHJcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9ICh3aW5kb3cuZ2xiUGF5d2FsbCkgPyAgT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVTZXR0aW5ncywgd2luZG93LmdsYlBheXdhbGwpIDogdGVtcGxhdGVTZXR0aW5nczsgXHJcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9IGAke3dpbmRvdy5nbGJQYXl3YWxsLmxvZ2luUHJlVGV4dH0gPGEgaHJlZj1cIiR7dGhpcy5nZXRVcmxMb2dpblJlZ2lzdGVyKCl9XCIgZGF0YS1pcy1sb2dpbj1cInRydWVcIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgMiAtIEZhw6dhIGxvZ2luXCIgZGF0YS1nYS1yZXNldFV0cD1cImZhbHNlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiAke3dpbmRvdy5nbGJQYXl3YWxsLnRhcmdldEJsYW5rfSBcIj4ke3dpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGV4dH08L2E+YDtcclxuXHJcblx0XHRpZih3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhKVxyXG5cdFx0XHR0aGlzLmNsZWFyTG9naW5BcmVhKCk7XHJcblxyXG5cdFx0aWYodGhpcy5kZWJ1ZyApIFxyXG5cdFx0XHR0aGlzLnNldERlYnVnVGVtcGxhdGVTZXR0aW5ncygpO1xyXG5cdFx0XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJMb2dpbkFyZWEoKSB7XHJcblx0XHRpZih3aW5kb3cuZ2xiUGF5d2FsbCkgeyBcclxuXHRcdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSAnJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldERlYnVnVGVtcGxhdGVTZXR0aW5ncygpIHtcclxuXHRcdGxldCBvYmogPSB7fTtcclxuXHRcdG9iai50b3BNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTUwJztcclxuXHRcdG9iai50b3BEZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDR4MTI4JztcclxuXHRcdG9iai50b3BMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMSc7XHJcblx0XHRvYmoubGVmdE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHg1MDAnO1xyXG5cdFx0b2JqLmxlZnREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1JztcclxuXHRcdG9iai5sZWZ0TGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDInO1xyXG5cdFx0b2JqLnJpZ2h0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XHJcblx0XHRvYmoucmlnaHREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1JztcclxuXHRcdG9iai5yaWdodExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wzJztcclxuXHJcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5nbGJQYXl3YWxsLCBvYmopO1xyXG5cdH1cclxuIFxyXG4gIGJvZHlBZGp1c3QoKSB7XHJcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicsICdpbXBvcnRhbnQnKTtcclxuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnZml4ZWQnLCAnaW1wb3J0YW50Jyk7XHJcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJzEwMCUnLCAnaW1wb3J0YW50Jyk7XHJcbiAgfVxyXG5cclxuICBzZXRFbFdyYXBwZXIoKSB7XHJcblx0dGhpcy5lbENwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXl3YWxsLWNwdCcpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRWxlbWVudHMoKSB7XHJcblx0dGhpcy5zZXRFbFdyYXBwZXIoKTtcclxuXHJcblx0aWYodGhpcy5lbENwdClcclxuXHRcdHRoaXMuZWxDcHQucmVtb3ZlKCk7XHJcblxyXG5cdGNvbnN0IGVsVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvdGVjdGVkLWNvbnRlbnQsICNpbmZvYXJ0ZS1tYWluLWNvbnRlbnQnKTtcclxuXHJcblx0ZWxUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdCAgZWxlbWVudC5yZW1vdmUoKTtcclxuXHR9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRlbXBsYXRlKCkge1xyXG5cdHRoaXMuZWxCb2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIHRoaXMuYm9keUFkanVzdCgpO1xyXG4gICAgdGhpcy5yZW1vdmVFbGVtZW50cygpO1xyXG5cdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jc3NNaW5pZmllZCk7IFxyXG5cdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy50ZW1wbGF0ZSk7IFxyXG5cdHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1x0XHJcbiAgICBcclxuICAgIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5HQS5wYXl3YWxsTG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpIHtcclxuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xyXG5cdHRoaXMuZWxDcHRXcmFwID0gdGhpcy5lbENwdC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQtd3JhcCcpO1xyXG5cclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGNvbnN0IGVsQm9keUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIDQ7XHJcblx0XHRjb25zdCBlbENwdFdyYXBIZWlnaHQgPSB0aGlzLmVsQ3B0V3JhcC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRvcCA9ICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIFxyXG4gICAgICAgID8gTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yIClcclxuICAgICAgICA6IE1hdGguYWJzKCBlbEJvZHlIZWlnaHQvMiApO1xyXG5cdFx0Y29uc3QgdG9wV2l0aEZ1bGxFbGVtZW50ID0gKGVsQm9keUhlaWdodCAtIGVsQ3B0V3JhcEhlaWdodCk7XHJcblxyXG5cdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtjdXJyZW50VG9wfXB4YDtcclxuXHRcdHRoaXMuZWxDcHQuc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnpJbmRleCA9IDk5OTk5OTk5OTk7XHJcblxyXG5cdFx0dGhpcy5ldnRXaGVlbChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xyXG5cdFx0dGhpcy5ldnRUb3VjaChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xyXG5cdFx0dGhpcy5hY3RpdmVFdmVudHMoKTtcclxuXHJcblx0XHR0aGlzLkZCLnNldFBpeGVsVHlwZSgpO1xyXG5cdH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlRXZlbnRzKCkge1xyXG5cdGNvbnN0IGNsaWNrVGFyZ2V0cyA9IHRoaXMuZWxDcHRXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcclxuXHJcblx0Y2xpY2tUYXJnZXRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7IFxyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW4gPSBCb29sZWFuKGVsZW1lbnQuZGF0YXNldC5pc0xvZ2luKSB8fCBmYWxzZTtcclxuXHRcdFx0Y29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBmYWxzZSA7IFxyXG5cdFx0XHRjb25zdCBpc1VybFN3ZyA9ICh1cmwpID8gdXJsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ29mZXJ0YXN3ZycpIDogZmFsc2U7XHJcblx0XHRcdGNvbnN0IG5vdEJsYW5rID0gZWxlbWVudC5kYXRhc2V0LmhyZWZUYXJnZXQgfHwgdHJ1ZTsgXHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLkdBLnRyaWdnZXIoZWxlbWVudCk7IFxyXG5cclxuXHRcdFx0aWYoIWlzTG9naW4gJiYgaXNVcmxTd2cpXHJcblx0XHRcdFx0dGhpcy5TV0cuc2V0VXRtcygpOyAgXHJcblxyXG4gICAgICAgICAgICBpZiAodXJsICYmICFpc1VybFN3ZykgeyBcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90QmxhbmsgPyAod2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwpIDogd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fSk7XHJcbiAgfVxyXG5cclxuICBldnRXaGVlbChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpIHtcclxuXHRsZXQgbmV3dG9wID0gY3VycmVudFRvcDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQnd2hlZWwnLFxyXG5cdFx0ZnVuY3Rpb24oZXZ0KSB7IFxyXG5cdFx0ICBjb25zdCBzdGVwID0gY3VycmVudFRvcCAvIDEwMDtcclxuXHRcdCAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xyXG5cclxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPj0gMSkge1xyXG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCAtIHN0ZXAgKiBtdWx0aXBsaWVyOyBcclxuXHRcdFx0bmV3dG9wID0gZWxUb3AgPCB0b3BXaXRoRnVsbEVsZW1lbnQgPyB0b3BXaXRoRnVsbEVsZW1lbnQgOiBlbFRvcDtcclxuICBcclxuXHRcdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xyXG5cdFx0ICB9XHJcbiAgXHJcblx0XHQgIGlmIChldnQuZGVsdGFZIDw9IC0xKSB7XHJcblx0XHRcdGNvbnN0IGVsVG9wID0gbmV3dG9wICsgc3RlcCAqIG11bHRpcGxpZXI7XHJcblx0XHRcdG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcclxuICBcclxuXHRcdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xyXG5cdFx0ICB9XHJcblx0XHR9LmJpbmQodGhpcylcclxuXHQgICk7XHJcbiAgfVxyXG5cclxuICBldnRUb3VjaChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpIHtcclxuICAgIGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xyXG4gICAgbGV0IHRvdWNoc3RhcnRZID0gMDtcclxuICAgIGxldCB0b3VjaGVuZFkgPSAwO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2dCkgeyBcclxuICAgICAgICB0b3VjaHN0YXJ0WSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZ0KSB7IFxyXG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAyMDtcclxuICAgICAgICB0b3VjaGVuZFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcclxuXHJcbiAgICAgICAgaWYgKHRvdWNoZW5kWSA8IHRvdWNoc3RhcnRZKSB7IFxyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnModG91Y2hzdGFydFkpIC0gTWF0aC5hYnModG91Y2hlbmRZKTtcclxuICAgICAgICAgICAgY29uc3QgZWxUb3AgPSBuZXd0b3AgLSBkaWZmOyBcclxuICAgICAgICAgICAgbmV3dG9wID0gZWxUb3AgPCB0b3BXaXRoRnVsbEVsZW1lbnQgPyB0b3BXaXRoRnVsbEVsZW1lbnQgOiBlbFRvcDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b3VjaGVuZFkgPiB0b3VjaHN0YXJ0WSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hlbmRZIC0gdG91Y2hzdGFydFk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wICsgZGlmZjsgXHJcblx0XHQgICAgbmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xyXG5cclxuXHRcdCAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcbiAgICAgICAgfVxyXG5cdH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRVcmxMb2dpblJlZ2lzdGVyKHR5cGUgPSAnJykge1xyXG5cdGNvbnN0IHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvID0gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnID8gJ2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnIDogJ2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnO1xyXG5cdGNvbnN0IHVyaSA9IGxvY2F0aW9uLmhyZWY7XHJcblx0Y29uc3Qgc2VydmljZUlkID0gd2luZG93LnRpbnlDcHQuUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpIHx8IG51bGw7XHJcblx0bGV0IHN0ciA9ICcnO1xyXG5cdGxldCB1cmxSZXR1cm4gPSAnJztcclxuXHJcblx0aWYoIXRoaXMuZGVidWcgJiYgdGhpcy5QaWFuby5pc0RlZmluZWQpIHtcclxuXHRcdHVybFJldHVybiA9IGVuY29kZVVSSUNvbXBvbmVudChcclxuXHRcdFx0dXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gKyAnP2NvZGlnb1Byb2R1dG89JyArICB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKSBcclxuXHRcdFx0KyAnJnNlcnZpY2VJZD0nICsgc2VydmljZUlkXHJcblx0XHRcdCsgJyZhbWJpZW50ZVV0aWxpemFkbz0nICsgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm9cclxuXHRcdFx0KyAnJm5vbWVQcm9kdXRvPScgKyB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKClcclxuXHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxyXG5cdFx0KTtcclxuXHJcblx0XHRpZih0eXBlID09PSAncmVnaXN0ZXInKSB7XHJcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWNhZGFzdHJvLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzdHI7XHJcbn1cclxuXHJcbiAgZ2V0IHRlbXBsYXRlVmFycygpIHtcclxuXHRyZXR1cm4gd2luZG93LmdsYlBheXdhbGw7XHJcbiAgfVxyXG5cclxuICBnZXQgdGVtcGxhdGUoKSB7IFxyXG5cdGNvbnN0IHRlbXBsYXRlID0gYFxyXG5cdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0ICR7dGhpcy50ZW1wbGF0ZVZhcnMucHJvZHVjdENsYXNzfVwiPiBcclxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkXCI+XHJcblx0XHRcdCR7dGhpcy50ZW1wbGF0ZVZhcnMudGl0bGV9XHJcblx0XHQ8L2Rpdj5cclxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RvcFwiPlxyXG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcExpbmt9XCIgZGF0YS1nYS1pbWFnZS1wb3NpdGlvbj1cInRvcFwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayAxIC1cIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wRGVza31cIiBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIC8+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXIgJHt3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhID8gJ2lzLWhpZGUnIDogJyd9XCI+XHJcblx0XHQgIFx0JHt0aGlzLnRlbXBsYXRlVmFycy5sb2dpblRhZ31cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19sZWZ0XCI+XHJcblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdExpbmt9XCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDQgLSBCYW5uZXIgb2ZlcnRhIGVzcXVlcmRhXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cclxuXHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0RGVza31cIiBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3JpZ2h0XCI+XHJcblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRMaW5rfVwiICBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgNSAtIEJhbm5lciBvZmVydGEgZGlyZWl0YVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XHJcblx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0RGVza31cIiBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodE1vYml9XCIgLz5cclxuXHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdDwvYT5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQgIDwvZGl2PlxyXG5cdCAgYDtcclxuXHJcblx0cmV0dXJuIHRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNzc01pbmlmaWVkKCkge1xyXG5cdCAgcmV0dXJuIGA8c3R5bGU+XHJcblx0ICAucGF5d2FsbC1jcHR7b3BhY2l0eTowO3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDB2dztvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYm94LXNoYWRvdzowIDAgNzBweCAwIHJnYmEoMCwwLDAsLjUpO2JveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZn0ucGF5d2FsbC1jcHQsLnBheXdhbGwtY3B0ICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2V9LnBheXdhbGwtY3B0IGF7Zm9udC13ZWlnaHQ6NzAwO3RleHQtZGVjb3JhdGlvbjpub25lfS5wYXl3YWxsLWNwdCBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnBheXdhbGwtY3B0IC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0IGF7Y29sb3I6IzAwMH0ucGF5d2FsbC1jcHQtb2dsb2JvIC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0LW9nbG9ibyBhe2NvbG9yOiMzMjVlOTR9LnBheXdhbGwtY3B0LXdyYXB7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWJvdHRvbToyMHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsucGF5d2FsbC1jcHQtd3JhcHstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfX0ucGF5d2FsbC1jcHQtd3JhcCBpbWd7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b30ucGF5d2FsbC1jcHQtd3JhcF9fdG9we3BhZGRpbmctdG9wOjIwcHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwIDA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwfS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlcnt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwO2NvbG9yOiM3Njc2NzY7Zm9udC1zaXplOjE2cHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyLmlzLWhpZGV7cGFkZGluZy1ib3R0b206MH1cclxuXHQgIDwvc3R5bGU+YDtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7IFxyXG5cdCAgY29uc3QgZGVsYXlUaW1lciA9ICh3aW5kb3cuZ2xiUGF5d2FsbCAmJiB3aW5kb3cuZ2xiUGF5d2FsbC5kZWxheVRpbWVyKSA/IHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIgKiAxMDAwIDogMDtcclxuXHJcblx0c2V0VGltZW91dCgoKSA9PntcclxuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGUoKTtcclxuXHR9LCBkZWxheVRpbWVyKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xyXG5pbXBvcnQgVGlueU1vZHVsZSBmcm9tICcuL1RpbnknO1xyXG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi9HQSc7XHJcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi9Td2cnO1xyXG5pbXBvcnQgUGF5d2FsbENwdCBmcm9tICcuL2NwbnQtcGF5d2FsbC9QYXl3YWxsJztcclxuaW1wb3J0IFBheXdhbGxDcHRJbmxpbmUgZnJvbSAnLi9jcG50LXBheXdhbGwtaW5saW5lL1BheXdhbGwnO1xyXG5cclxuY29uc3QgVGlueSA9IG5ldyBUaW55TW9kdWxlKCk7XHJcbmNvbnN0IEdBID0gbmV3IEdBTW9kdWxlKCk7XHJcblxyXG5HQS5zZXRHbG9iYWxWYXJzKCk7XHJcblxyXG5QaWFuby50eXBlUGF5d2FsbCA9IG51bGw7XHJcblBpYW5vLnZhcmlhdmVpcyA9IHtcclxuXHRhbWJpZW50ZXNBY2VpdG9zOiBcImludCxxbHQscHJkXCIsXHJcblx0c3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc286IFwiNDAwLDQwNCw0MDYsNTAwLDUwMiw1MDMsNTA0XCIsXHJcblx0c3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogXCI0MDAsNDA0LDUwMCw1MDIsNTAzLDUwNFwiLFxyXG5cdGlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkOiBmYWxzZSxcclxuXHRjb25zdGFudGU6IHtcclxuXHRcdGNvb2tpZToge1xyXG5cdFx0XHRHQ09NOiAnR0xCSUQnLFxyXG5cdFx0XHRVVFA6ICdfdXRwJyxcclxuXHRcdFx0UlRJRVg6ICdfcnRpZXgnLFxyXG5cdFx0XHRBTUJJRU5URTogJ2FtYmllbnRlUGlhbm8nLFxyXG5cdFx0XHRTQVZFX1NVQlNDUklQVElPTjogJ3NhdmVTdWJzY3JpcHRpb25Db29raWUnLFxyXG5cdFx0XHRDUkVBVEVEX0dMT0JPSUQ6ICdjcmVhdGVkR2xvYm9JZCcsXHJcblx0XHRcdEdMT0JPSURfTUVTU0FHRTogJ2dsb2JvSWRNZXNzYWdlJ1xyXG5cdFx0fSxcclxuXHRcdG1ldHJpY2FzOiB7XHJcblx0XHRcdEVWRU5UT19TRU1fQUNBTzogJ3NlbSBhY2FvJyxcclxuXHRcdFx0RVJSTzogJ0Vycm8nXHJcblx0XHR9LFxyXG5cdFx0a3J1eDoge1xyXG5cdFx0XHRTRUdNRU5UQUNPRVM6ICdreGdsb2JvX3NlZ3MnLFxyXG5cdFx0XHRLUlVYTElHQURPOiAna3J1eC1saWdhZG8nXHJcblx0XHR9LFxyXG5cdFx0dXRpbDoge1xyXG5cdFx0XHRJUDogXCIxMjcuMC4wLjFcIixcclxuXHRcdFx0QU1CSUVOVEU6IFwiYW1iaWVudGUtZGVzZWphZG9cIixcclxuXHRcdFx0REVCVUc6IFwiZGVidWctcGlhbm9cIlxyXG5cdFx0fVxyXG5cdH0sXHJcblx0aXNDb250ZXVkb0V4Y2x1c2l2bzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmNvbnRldWRvRXhjbHVzaXZvID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0Z2V0QW1iaWVudGVQaWFubzogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoUGlhbm8udmFyaWF2ZWlzLmFtYmllbnRlc0FjZWl0b3MuaW5kZXhPZihQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSkgPiAtMSkge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSksIDEpO1xyXG5cdFx0XHRyZXR1cm4gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSk7XHJcblx0XHR9XHJcblx0XHRpZiAoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkgPT0gJ2ZhbHNlJykge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgXCJcIiwgLTEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKSkge1xyXG5cdFx0XHRyZXR1cm4gSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpO1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vKSA+IC0xID8gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gOiAncHJkJztcclxuXHR9LFxyXG5cdGdldFRpcG9Db250ZXVkb1BpYW5vOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cudGlwb0NvbnRldWRvUGlhbm87XHJcblx0fSxcclxuXHRleGVjdXRvdVBhZ2V2aWV3OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuZXhlY3V0b3VQYWdldmlldyA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdGdldE5vbWVQcm9kdXRvOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICghd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8pe1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIk5vbWUgZG8gcHJvZHV0byBuw6NvIGRlZmluaWRvLlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHJldHVybiB3aW5kb3cubm9tZVByb2R1dG9QaWFubztcclxuXHR9LFxyXG5cdGdldFNlcnZpY29JZDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaWQgPSAnMDAwMCc7XHJcblxyXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdvZ2xvYm8nXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYmxvZ3MnXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAna29ndXQnXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYWNlcnZvJ1xyXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2pvcm5hbGRpZ2l0YWwnXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYmxvZ0FuYWxpdGljbycpe1xyXG5cdFx0XHRyZXR1cm4gaWQgPSAnMzk4MSc7XHJcblx0XHR9XHJcblx0XHRpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSAmJiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ21vbmV0Jyl7XHJcblx0XHRcdHJldHVybiBpZCA9ICc2NjE4JztcclxuXHRcdH1lbHNlIGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpKXtcclxuXHRcdFx0cmV0dXJuIGlkID0gJzY2OTcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAndmFsb3InKXtcclxuICAgICAgICAgICAgcmV0dXJuIGlkID0gJzY2NjgnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpZCA9PT0gJzAwMDAnKVxyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignU2VydmljZUlEIG7Do28gZGVmaW5pZG8uJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZiArXHJcblx0XHRcdFx0JyBub21lUHJvZHV0bzogJyArIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpICk7XHJcblxyXG5cdFx0cmV0dXJuIGlkO1xyXG5cdH0sXHJcblx0Z2V0Q29kaWdvUHJvZHV0bzogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBub21lUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpO1xyXG5cdFx0c3dpdGNoIChub21lUHJvZHV0byl7XHJcblx0XHRcdGNhc2UgJ29nbG9ibyc6XHJcblx0XHRcdGNhc2UgJ2Jsb2dzJzpcclxuXHRcdFx0Y2FzZSAna29ndXQnOlxyXG5cdFx0XHRjYXNlICdibG9nQW5hbGl0aWNvJzpcclxuXHRcdFx0XHRyZXR1cm4gJ09HMDMnO1xyXG5cdFx0XHRjYXNlICdhY2Vydm8nOlxyXG5cdFx0XHRcdHJldHVybiAnT0cwNCc7XHJcblx0XHRcdGNhc2UgJ2pvcm5hbGRpZ2l0YWwnOlxyXG5cdFx0XHRcdHJldHVybiAnT0cwMSc7XHJcblx0XHRcdGNhc2UgJ2F1dG8tZXNwb3J0ZSc6XHJcblx0XHRcdGNhc2UgJ2Vwb2NhJzpcclxuXHRcdFx0Y2FzZSAndm9ndWUnOlxyXG5cdFx0XHRjYXNlICdnbGFtb3VyJzpcclxuXHRcdFx0Y2FzZSAnY2FzYS12b2d1ZSc6XHJcblx0XHRcdGNhc2UgJ21hcmllLWNsYWlyZSc6XHJcblx0XHRcdGNhc2UgJ2dsb2JvLXJ1cmFsJzpcclxuXHRcdFx0Y2FzZSAnZ3EnOlxyXG5cdFx0XHRjYXNlICdtb25ldCc6XHJcblx0XHRcdGNhc2UgJ2NyZXNjZXInOlxyXG5cdFx0XHRjYXNlICdnYWxpbGV1JzpcclxuXHRcdFx0XHRyZXR1cm4gbm9tZVByb2R1dG87XHJcblx0XHRcdGNhc2UgJ2Nhc2EtZS1qYXJkaW0nOlxyXG5cdFx0XHRcdHJldHVybiAnY2FzYS1qYXJkaW0nO1xyXG5cdFx0XHRjYXNlICdxdWVtLWFjb250ZWNlJzpcclxuXHRcdFx0XHRyZXR1cm4gJ3F1ZW0nO1xyXG5cdFx0XHRjYXNlICd2YWxvcic6XHJcblx0XHRcdFx0cmV0dXJuICd2YWxvcmRpZ2l0YWwnO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQW8gb2J0ZXIgY8OzZGlnbyBkbyBwcm9kdXRvXCIsIG5vbWVQcm9kdXRvICsgXCIgLSBcIiArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSwgJ2Vycm8nLCB0cnVlLCBcIiBcIik7XHJcblx0XHRcdFx0cmV0dXJuICdlcnJvcic7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uamFuZWxhQW5vbmltYSA9IHtcclxuXHRyZXRyeSA6IGZ1bmN0aW9uKGlzRG9uZSwgbmV4dCkge1xyXG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xyXG5cdFx0dmFyIGlkID0gd2luZG93LnNldEludGVydmFsKFxyXG5cdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcclxuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChjdXJyZW50X3RyaWFsKysgPiBtYXhfcmV0cnkpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcclxuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdDEwXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0aXNJRTEwT3JMYXRlciA6IGZ1bmN0aW9uKHVzZXJfYWdlbnQpIHtcclxuXHRcdGxldCB1YSA9IHVzZXJfYWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xyXG5cclxuXHRcdGlmICh1YS5pbmRleE9mKCdtc2llJykgPT09IDAgJiYgdWEuaW5kZXhPZigndHJpZGVudCcpID09PSAwKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChtYXRjaCAmJiBwYXJzZUludChtYXRjaFsxXSwgMTApID49IDEwKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0ZGV0ZWN0UHJpdmF0ZU1vZGUgOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0dmFyIGlzX3ByaXZhdGU7XHJcblxyXG5cdFx0aWYgKHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSkge1xyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXHJcblx0XHRcdFx0d2luZG93LlRFTVBPUkFSWSwgMSxcclxuXHRcdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSBpZiAod2luZG93LmluZGV4ZWREQiAmJiAvRmlyZWZveC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdFx0dmFyIGRiO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGRiID0gd2luZG93LmluZGV4ZWREQi5vcGVuKCd0ZXN0Jyk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcclxuXHRcdFx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRiLnJlYWR5U3RhdGUgPT09ICdkb25lJyA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFpc190aW1lb3V0KSB7XHJcblx0XHRcdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGRiLnJlc3VsdCA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoUGlhbm8uamFuZWxhQW5vbmltYS5pc0lFMTBPckxhdGVyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG5cdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKCF3aW5kb3cuaW5kZXhlZERCKSB7XHJcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlICYmIC9TYWZhcmkvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgMSk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcclxuXHRcdFx0ZnVuY3Rpb24gaXNEb25lKCkge1xyXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgaXNfcHJpdmF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uIG5leHQoaXNfdGltZW91dCkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGlzX3ByaXZhdGUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmtydXggPSB7XHJcblx0dGVtOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykgPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHRsaWdhZG86IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPO1xyXG5cdFx0dmFyIHZhbG9yUGFyYW1ldHJvID0gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKHBhcmFtZXRybyk7XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJyAmJiB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyAhPSBcInByZFwiKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnIHx8IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09IFwicHJkXCIpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCBcIlwiLCAtMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPKSA9PSBcImZhbHNlXCIpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHRvYnRlbVNlZ21lbnRhY2FvOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChQaWFuby5rcnV4LnRlbSgpICYmIFBpYW5vLmtydXgubGlnYWRvKCkpIHtcclxuXHRcdFx0dmFyIHNlZ21lbnRhY29lcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKS5zcGxpdCgnLCcpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRhY29lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgc2VnbWVudGFjb2VzW2ldLCBzZWdtZW50YWNvZXNbaV1dKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLnJlZ2lvbmFsaXphY2FvID0ge1xyXG5cdGdldFJlZ2lvbjogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIga3J1eEdlbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdreGdsb2JvX2dlbycpO1xyXG5cdFx0aWYgKGtydXhHZW8pIHtcclxuXHRcdFx0a3J1eEdlby5zcGxpdCgnJicpLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0bGV0IGRhdGEgPSBpdGVtLnNwbGl0KCc9Jyk7XHJcblx0XHRcdFx0bGV0IGtleSA9IGRhdGFbMF07XHJcblx0XHRcdFx0bGV0IHZhbHVlID0gZGF0YVsxXTtcclxuXHRcdFx0XHRpZiAoa2V5ID09PSAncmVnaW9uJykge1xyXG5cdFx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInJlZ2lvblwiLCB2YWx1ZV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8ubWV0cmljYXMgPSB7XHJcblx0ZW52aWFFdmVudG9zR0E6IGZ1bmN0aW9uKF9HQUFjYW8sIF9HQVJvdHVsbykgeyAvL1RPRE86IGFycXVpdm8gdGlueXBhc3MuanMsIGluc2VyaWRvIHBlbGEgUGlhbm8sIHV0aWxpemEgZXNzYSBmdW7Dp8Ojb1xyXG5cdFx0Y29uc3QgaXNQcm9kdWN0VmFsb3IgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChpc1Byb2R1Y3RWYWxvcilcclxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8nLCBfR0FBY2FvLCBfR0FSb3R1bG8sICx0cnVlXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubycsICdldmVudG9HQUFjYW8nOiBfR0FBY2FvLCAnZXZlbnRvR0FSb3R1bG8nOl9HQVJvdHVsb30pO1xyXG5cdH0sXHJcblxyXG5cdG1vbnRhUm90dWxvR0E6IGZ1bmN0aW9uKCkgeyAvL1RPRE86IGF0IFBpYW5vIGFzIHNldEV4cGVyaWVuY2UoKSB8IENoZWNrIG9uIG9sZCB0aW55IGJlZm9yZSByZW1vdmVcclxuXHRcdGlmKHdpbmRvdy5yZWdyYXNUaW55ICYmIHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSkge1xyXG5cdFx0XHRyZXR1cm4gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gOiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XHJcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5ub21lRXhwZXJpZW5jaWE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gXCIgXCI7XHJcblx0fSxcclxuXHRzZXRMaW1pdGVDb250YWdlbTogZnVuY3Rpb24obWV0cmljYXMpIHtcclxuXHRcdHdpbmRvdy5fR0FMaW1pdGUgPSBcIi1cIjtcclxuXHRcdHdpbmRvdy5fR0FDb250YWdlbSA9IFwiLVwiO1xyXG5cclxuXHRcdGlmKCFtZXRyaWNhcykgcmV0dXJuO1xyXG5cclxuXHRcdHdpbmRvdy5fR0FDb250YWdlbSA9IFwiXCIgKyBtZXRyaWNhcy52aWV3cztcclxuXHJcblx0XHRpZiAod2luZG93Ll9HQUNvbnRhZ2VtLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdHdpbmRvdy5fR0FDb250YWdlbSA9IFwiMFwiICsgd2luZG93Ll9HQUNvbnRhZ2VtO1xyXG5cdFx0fVxyXG5cdFx0d2luZG93Ll9HQUxpbWl0ZSA9IG1ldHJpY2FzLm5vbWVFeHBlcmllbmNpYSArXCIgOiBcIisgbWV0cmljYXMubWF4Vmlld3M7XHJcblx0fSxcclxuXHRpZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXI6IGZ1bmN0aW9uKHJlZ3Jhcykge1xyXG5cdFx0dmFyIHBhc3NhZ2VtID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5tZXRyaWNhcy5FVkVOVE9fU0VNX0FDQU87XHJcblx0XHRpZihIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIHtcclxuXHRcdFx0cGFzc2FnZW0gPSByZWdyYXMuZmx1eG8uaW5kZXhPZihcImhhcmR3YWxsXCIpICE9IC0xID8gJ3JlZ2lzdGVyLWhhcmR3YWxsLXBhc3NvdScgOiAncmVnaXN0ZXItY29udGFnZW0tcGFzc291JztcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwYXNzYWdlbTtcclxuXHR9LFxyXG5cdGV4ZWN1dGFBcG9zUGFnZXZpZXc6IGZ1bmN0aW9uKGV4cGlyb3UpIHtcclxuXHRcdGlmICghUGlhbm8udmFyaWF2ZWlzLmV4ZWN1dG91UGFnZXZpZXcoKSkge1xyXG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5mbHV4byA9IHdpbmRvdy50cENvbnRleHQgPyB0cENvbnRleHQudG9Mb3dlckNhc2UoKSA6ICctJztcclxuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgOiAnJztcclxuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0TGltaXRlQ29udGFnZW0od2luZG93LnJlZ3Jhc1RpbnkpO1xyXG5cdFx0XHRpZiAoZXhwaXJvdSA9PSBmYWxzZSkgR0Euc2V0RXZlbnRzKFBpYW5vLm1ldHJpY2FzLmlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3Rlcih3aW5kb3cucmVncmFzVGlueSksIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRcdGV4ZWN1dG91UGFnZXZpZXcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2V0YVZhcmlhdmVpczogZnVuY3Rpb24oaWRMb2dpbiwgdGlwb0xvZ2luLCBhc3NpbmF0dXJhTG9nYWRhKXtcclxuXHRcdFBheXdhbGxBbmFseXRpY3MuaWRMb2dpbkFzc2luYW50ZSA9IGlkTG9naW47XHJcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy50aXBvTG9naW5Bc3NpbmFudGUgPSB0aXBvTG9naW47XHJcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy5hc3NpbmF0dXJhTG9nYWRhID0gYXNzaW5hdHVyYUxvZ2FkYTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuUGlhbm8uYmFubmVyID0ge1xyXG5cdG1vc3RyYXJGb290ZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZvLWJhbm5lci1mb290ZXIuanNcIik7XHJcblx0fSxcclxuXHRtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhckF2YXRhckhlYWRlcjogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYXZhdGFyLWhlYWRlci1waWFuby5qc1wiKTtcclxuXHR9LFxyXG5cdGJvdHRvbUZpeGVkOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xyXG5cdFx0d2luZG93LmdsYkJhbm5lckJvdHRvbSA9IHBhcmFtcztcclxuXHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3N0eWxlcy9iYW5uZXItYm90dG9tLWZpeGVkLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc2NyaXB0cy9iYW5uZXItYm90dG9tLWZpeGVkLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhclNXRzogZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBjc3MgPSBgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zdHlsZXMvc3R5bGUuY3NzJz5gO1xyXG5cdFx0Y29uc3Qgc2NyaXB0SnMgPSBgaHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zY3JpcHQvYW51bmNpby1zd2cuanNgO1xyXG5cclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKGNzcyk7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoc2NyaXB0SnMpO1xyXG5cdH0sXHJcblx0bW9zdHJhckhpZ2hsaWdodFNhbGU6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3NjcmlwdHMvaGlnaGxpZ2h0LXNhbGUuanNcIik7XHJcblx0fSxcclxuXHRtb3N0cmFyU3Vic2NyaWJlQnV0dG9uVmFsb3I6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3ZhbG9yLXN1YnNjcmliZS1idXR0b24vXCIrdmVyc2FvK1wiL3NjcmlwdHMvc3Vic2NyaWJlLWJ1dHRvbi5qc1wiKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuUGlhbm8ucmVnaXN0ZXIgPSB7XHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL25vdmEtdGVsYS1yZWdpc3Rlci5qc1wiKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5oZWxwZXIgPSB7XHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbigpIHtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzY1ZDE5MzBhMGJkYTQ3NmJhOGQzYzI1YzUzNzFlYzNmL3BpYW5vL2hlbHBlci9yZWdpc3Rlci5qc1wiKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5wYXl3YWxsID0ge1xyXG5cdHJlZGlyZWNpb25hckJhcnJlaXJhOiBmdW5jdGlvbih1cmwpIHtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkJhcnJlaXJhXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7fSwgMTAwMCk7XHJcblx0fSxcclxuXHRzaG93OiBmdW5jdGlvbih0eXBlUGF5d2FsbCA9IG51bGwpIHtcclxuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdHlwZVBheXdhbGw7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bmV3IFBheXdhbGxDcHQoKTtcclxuXHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdQYXl3YWxsIC0gRXJyb3Igb24gbG9hZCcpXHJcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0YW5hbHl0aWM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdG5ldyBQYXl3YWxsQ3B0SW5saW5lKCk7XHJcblx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZVxyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1BheXdhbGxBbmFseXRpYyAtIEVycm9yIG9uIGxvYWQnLCBlcnIpXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYW5hbHl0aWNhbFVuYmxvY2tlZEZvclBpYW5vKCkge1xyXG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnYW5hbHl0aWNhbFVuYmxvY2tlZEZvclBpYW5vJylcclxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5hbHl0aWNhbEJsb2NrZWRGb3JQaWFubygpIHtcclxuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FuYWx5dGljYWxCbG9ja2VkRm9yUGlhbm8nKVxyXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0V4cGVyaWVuY2VzSGFzQ2hhbmdlKCkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0bGV0IGNvdW50ID0gMDsgXHJcblx0XHRcclxuXHRcdGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0aWYod2luZG93LnRwICE9PSAndW5kZWZpbmVkJ1xyXG5cdFx0XHQmJiB3aW5kb3cudHAuZXhwZXJpZW5jZVxyXG5cdFx0XHQmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpXHJcblx0XHRcdCYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0XHJcblx0XHRcdCYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnN0IGV4cGVyaWVuY2VzID0gd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzXHJcblx0XHRcdFx0Y29uc3QgZXhwZXJpZW5jZXNDbG9uZSA9IEFycmF5LmZyb20od2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzKVxyXG5cdFx0XHRcdGNvbnN0IGV4cGVyaWVuY2VzQ2hhbmdlZCA9IE9iamVjdC5pcyhKU09OLnN0cmluZ2lmeShleHBlcmllbmNlcyksIEpTT04uc3RyaW5naWZ5KGV4cGVyaWVuY2VzQ2xvbmUpKVxyXG5cclxuXHRcdFx0XHRpZihleHBlcmllbmNlc0NoYW5nZWQpIHtcclxuXHRcdFx0XHRcdGV4cGVyaWVuY2VzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGl0ZW0uZXZlbnRUeXBlID09PSAncnVuSnMnKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0ICE9PSAndW5kZWZpbmVkJyAmJiAoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0LmluY2x1ZGVzKCdwYXl3YWxsLmFuYWx5dGljJykgKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGNvdW50ID09PSAxMCkge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvdW50Kys7XHJcblx0XHRcdH1cclxuXHRcdH0sIDEwMCk7XHJcblx0fSk7XHJcbn1cclxuXHJcblBpYW5vLmNoZWNrUGlhbm9BY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0bGV0IGNvdW50ID0gMFxyXG5cclxuXHRsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcblx0XHRpZih3aW5kb3cudHAgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZVxyXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKVxyXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHRcclxuICAgICAgICAgICYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcclxuXHQgICAgIHtcclxuXHRcdFx0UGlhbm8uY2hlY2tQYXl3YWxsKHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZihjb3VudCA9PT0gMTApIHtcclxuXHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKVxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvdW50KytcclxuXHRcdH1cclxuXHJcblx0ICB9LCA1MDApO1xyXG5cclxufTsgXHJcblxyXG5QaWFuby5jaGVja1BheXdhbGwgPSBmdW5jdGlvbihQaWFub1Jlc3VsdEV2ZW50cyA9IG51bGwpIHtcclxuICAgbGV0IGhhc1J1bkpzV2l0aFBheXdhbGwgPSBmYWxzZVxyXG5cclxuXHRpZihQaWFub1Jlc3VsdEV2ZW50cykge1xyXG4gICAgICAgIFBpYW5vUmVzdWx0RXZlbnRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uZXZlbnRUeXBlID09PSAncnVuSnMnKSB7XHJcblx0XHRcdFx0aWYoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0ICE9PSAndW5kZWZpbmVkJyAmJiAoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0LmluY2x1ZGVzKCdwYXl3YWxsLnNob3cnKVxyXG5cdFx0XHRcdHx8IGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldC5pbmNsdWRlcygncGF5d2FsbC5hbmFseXRpYycpXHJcblx0XHRcdFx0fHwgaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0LmluY2x1ZGVzKCdtb3N0cmFyQmFycmVpcmEnKSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZVxyXG5cdFx0XHRcdFx0aGFzUnVuSnNXaXRoUGF5d2FsbCA9IHRydWVcclxuXHRcdFx0XHRcdFBpYW5vLnRyaWdnZXJQYXl3YWxsT3BlbmVkKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKCFoYXNSdW5Kc1dpdGhQYXl3YWxsKVxyXG4gICAgICAgICAgIFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuUGlhbm8udHJpZ2dlckFkdmVydGlzaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0d2luZG93Lmhhc1BheXdhbGwgPSBmYWxzZTtcclxuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsZWFyRm9yQWRzJylcclxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxufTtcclxuXHJcblBpYW5vLnRyaWdnZXJQYXl3YWxsT3BlbmVkID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdibG9ja0ZvckFkcycpXHJcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbn07XHJcblxyXG5QaWFuby5yZWdpc3RlclBheXdhbGwgPSB7XHJcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8gPSBudWxsLCB0aXBvID0gbnVsbCkge1xyXG5cdFx0UGlhbm8udHlwZVBheXdhbGwgPSB0aXBvO1xyXG5cclxuXHRcdGlmKCF2ZXJzYW8gfHwgIVBpYW5vLnR5cGVQYXl3YWxsICkge1xyXG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcclxuXHRcdFx0XHRcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8uanNcIixcclxuXHRcdFx0XHRkYXRhID0+IHtcclxuXHRcdFx0XHRcdGlmKGRhdGEuc3RhdHVzICE9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmKFBpYW5vLnR5cGVQYXl3YWxsID09PSAncmVnaXN0ZXInIHx8IFBpYW5vLnR5cGVQYXl3YWxsID09PSAnZXhjbHVzaXZvJyApIHtcclxuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmNvbXVuaWNhZG8gPSB7XHJcblx0bW9zdHJhckluZm9ybWFjYW86IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvY29tdW5pY2FjYW8tcGlhbm8uanNcIik7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uYWRibG9jayA9IHtcclxuXHRtb3N0cmFyQWRCbG9jazogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcclxuXHJcblx0XHRwYXJhbXMuYXNzZXRzUGF0aCA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9gO1xyXG5cclxuXHRcdHdpbmRvdy5nbGJBZGJsb2NrID0gcGFyYW1zO1xyXG5cclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3NjcmlwdHMvYWRibG9jay1waWFuby5qc1wiKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5ibG9xdWVpb3MgPSB7XHJcblx0bGliZXJhckVzYzogZnVuY3Rpb24oKSB7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vbGliZXJhVGVjbGFkby5qc1wiKTtcclxuXHR9LFxyXG5cdGJsb3F1ZWlhVmlld01vZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9ibG9xdWVpby9ibG9xdWVpYVZpZXdtb2RlLmpzXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuUGlhbm8ucGFyY2Vpcm8gPSB7XHJcblx0bW9zdHJhRm9vdGVyUGFyY2Vpcm86IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGFyY2Vpcm9zLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8uanNcIik7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uaW5hZGltcGxlbnRlID0ge1xyXG5cdGdldExpbmtBc3NpbmF0dXJhOiBmdW5jdGlvbihsaW5rKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpbmsubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGxpbmtbaV0ucmVsID09ICdhc3NpbmF0dXJhJykgcmV0dXJuIGxpbmtbaV0uaHJlZjtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby54bWxIdHRwUmVxdWVzdCA9IHtcclxuXHRnZXJhU2NyaXB0TmFQYWdpbmE6IGZ1bmN0aW9uKHVybFNjcmlwdCwgY2FsbGJhY2spIHtcclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybFNjcmlwdCk7XHJcblx0XHR4aHIuc2VuZCgpO1xyXG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZih0aGlzLnJlYWR5U3RhdGUgPT09IDQpe1xyXG5cdFx0XHRcdGlmKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHR2YXIgYXBwZW5kRGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdFx0XHRcdGFwcGVuZERlU2NyaXB0LmlubmVySFRNTCA9IHJlc3Bvc3RhO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHBlbmREZVNjcmlwdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIG5hIGZ1bsOnw6NvIGdlcmFyIHNjcmlwdCBuYSBww6FnaW5hLicsICd1cmw6ICcgKyB1cmxTY3JpcHRcclxuXHRcdFx0XHRcdFx0KyAnIFN0YXR1c0Vycm86ICcgKyB0aGlzLnN0YXR1c1xyXG5cdFx0XHRcdFx0XHQrICcgU3RhY2s6ICcgKyB0aGlzLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoY2FsbGJhY2spXHJcblx0XHRcdFx0Y2FsbGJhY2soeGhyKTtcclxuXHRcdH07XHJcblx0fSxcclxuXHRmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogZnVuY3Rpb24oaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIHtcclxuXHJcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSwgZmFsc2UpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0eGhyLnNlbmQoKTtcclxuXHJcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcclxuXHRcdFx0aWYoeGhyLnN0YXR1cyA9PSAyMDApe1xyXG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XHJcblx0XHRcdFx0dmFyIHNpdHVhY2FvUGFnYW1lbnRvID0gcmVzcEpzb24uc2l0dWFjYW9QYWdhbWVudG8udG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwic2l0dWFjYW9QYWdhbWVudG9cIiwgc2l0dWFjYW9QYWdhbWVudG9dKTtcclxuXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9IDAgJiYgUGlhbm8udmFyaWF2ZWlzLnN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUuaW5kZXhPZih4aHIuc3RhdHVzKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCBcIlN0YXR1cyBEZXNjb25oZWNpZG9cIiArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvOiBmdW5jdGlvbihnbGJpZCkge1xyXG5cclxuXHRcdHZhciBjb2RpZ29Qcm9kdXRvID0gUGlhbm8udmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKTtcclxuXHRcdGlmKGNvZGlnb1Byb2R1dG8gPT0gJ2Vycm9yJykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ0b2tlbi1hdXRlbnRpY2FjYW9cIjogZ2xiaWQsIFwiaXBVc3VhcmlvXCI6IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5JUCwgXCJjb2RpZ29Qcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG99KTtcclxuXHJcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxWZXJpZmljYUxlaXRvciwgZmFsc2UpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblx0XHR4aHIuc2VuZChkYXRhKTtcclxuXHJcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XHJcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApe1xyXG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XHJcblx0XHRcdFx0dmFyIHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gZmFsc2UsIHJlc3Bvc3RhRGVNb3Rpdm8gPSAnJywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSAnJztcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLm1vdGl2byAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRyZXNwb3N0YURlTW90aXZvID0gcmVzcEpzb24ubW90aXZvLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24udGVtVGVybW9EZVVzbyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRyZXNwb3N0YURlVGVybW9EZVVzbyA9IHJlc3BKc29uLnRlbVRlcm1vRGVVc287XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubGluayAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9IFBpYW5vLmluYWRpbXBsZW50ZS5nZXRMaW5rQXNzaW5hdHVyYShyZXNwSnNvbi5saW5rKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGlzQXV0b3JpemFkbyA9IFBpYW5vLmF1dGVudGljYWNhby5pc0F1dG9yaXphZG8ocmVzcG9zdGFEZVRlcm1vRGVVc28sIHJlc3Bvc3RhRGVNb3Rpdm8sIHJlc3BKc29uLmF1dG9yaXphZG8sIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcclxuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHJlc3BKc29uLmF1dG9yaXphZG8sIHJlc3Bvc3RhRGVNb3Rpdm8sIGlzQXV0b3JpemFkbywgcmVzcG9zdGFEZVRlcm1vRGVVc28pO1xyXG5cdFx0XHRcdHZhciBfanNvbkxlaXRvciA9IHtcclxuXHRcdFx0XHRcdFx0XCJhdXRvcml6YWRvXCIgOiByZXNwSnNvbi5hdXRvcml6YWRvLFxyXG5cdFx0XHRcdFx0XHRcIm1vdGl2b1wiOiByZXNwb3N0YURlTW90aXZvLFxyXG5cdFx0XHRcdFx0XHRcImxvZ2Fkb1wiOiBpc0F1dG9yaXphZG8sXHJcblx0XHRcdFx0XHRcdFwidGVtVGVybW9EZVVzb1wiOiByZXNwb3N0YURlVGVybW9EZVVzbyxcclxuXHRcdFx0XHRcdFx0XCJnbGJpZFwiOiBnbGJpZCxcclxuXHRcdFx0XHRcdFx0XCJwcm9kdXRvXCI6IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpLFxyXG5cdFx0XHRcdFx0XHRcImNvZFByb2R1dG9cIjogY29kaWdvUHJvZHV0byxcclxuXHRcdFx0XHRcdFx0XCJ1dWlkXCI6IHJlc3BKc29uLnVzdWFyaW9JZFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRfanNvbkxlaXRvciA9IGJ0b2EoZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KF9qc29uTGVpdG9yKSkpO1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgX2pzb25MZWl0b3IsIDEpO1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZW9mIHN3ZyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdGlmKFBpYW5vLmdvb2dsZS5zaG93U2F2ZVN1YnNjcmlwdGlvbihyZXNwSnNvbikpe1xyXG5cdFx0XHRcdFx0XHR0cnl7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHN3Z1NlcnZpY2UgPSBuZXcgU3dnU2VydmljZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHN3Z1NlcnZpY2Uuc2F2ZUdsb2JvU3Vic2NyaXB0aW9uKGdsYmlkKTtcclxuXHRcdFx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIGFvIGNoYW1hciBhIGZ1bsOnw6NvIHNob3dTYXZlU3Vic2NyaXB0aW9uIGRvIEFsZGViYXJhbi4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdVUkw6ICcgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEdMQklEOiAnICsgZ2xiaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgRXJybzogJyArIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYocmVzcEpzb24uYXV0b3JpemFkbyA9PSB0cnVlKXtcclxuXHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMocmVzcEpzb24udXN1YXJpb0lkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBUEkgZGUgYXV0b3JpemFjYW8gZGUgYWNlc3NvXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgZ2xiaWQpO1xyXG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSwgJ2Vycm8nLCB0cnVlLCBcIiBcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5nb29nbGUgPSB7XHJcbiAgaXNBdXRob3JpemVkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZihzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpKXtcclxuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpLnN1YnNjcmlwdGlvblRva2VuLCBcIkNvbnRhIEdvb2dsZVwiLCBcIk8gR2xvYm9cIik7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCkpe1xyXG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCksIFwiQ29udGEgR29vZ2xlXCIsIFwiR29vZ2xlXCIpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgaXNTcGVjaWZpY0dvb2dsZVVzZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKFBpYW5vLmdvb2dsZS5pc0F1dGhvcml6ZWQoKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRyeXtcclxuXHRcdFx0dmFyIG9HbG9ib0J1c2luZXNzID0gbmV3IE9HbG9ib0J1c2luZXNzKCk7XHJcblx0XHRcdG9HbG9ib0J1c2luZXNzLnZlcmlmeUlmVXNlckhhc0FjY2Vzc09yRGVmZXJyZWQoc3dnRW50aXRsZW1lbnRzKTtcclxuXHRcdH0gY2F0Y2goZXJyb3IpIHtcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJFcnJvIGFvIGV4ZWN1dGFyIG8gQWxkZWJhcmFuXCIsIFwiRXJyb3I6IFwiICsgZXJyb3IgKyBcIiAtIEVudGl0bGVtZW50czogXCIgKyBzd2dFbnRpdGxlbWVudHMuZW50aXRsZW1lbnRzWzBdLnN1YnNjcmlwdGlvblRva2VuKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRzaG93U2F2ZVN1YnNjcmlwdGlvbjogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0aWYoIXN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpICYmIHJlc3BvbnNlLm1vdGl2byA9PT1cIkFVVE9SSVpBRE9cIiAmJiAhSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5TQVZFX1NVQlNDUklQVElPTikpe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuUGlhbm8uYXV0ZW50aWNhY2FvID0ge1xyXG5cdGlzTG9nYWRvQ2FkdW46IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcclxuXHRcdGlmICghZ2xiaWQpIHtcclxuXHRcdFx0aWYgKHV0cCkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XHJcblx0XHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZ2xiaWQgIT0gJyc7XHJcblx0fSxcclxuXHR2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG86IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcclxuXHRcdGlmIChQaWFuby5hdXRlbnRpY2FjYW8uaXNMb2dhZG9DYWR1bihnbGJpZCwgdXRwKSkge1xyXG5cdFx0XHRpZiAodXRwKSB7XHJcblx0XHRcdFx0dmFyIF9sZWl0b3IgPSBKU09OLnBhcnNlKGRlY29kZVVSSShhdG9iKHV0cCkpKTtcclxuXHRcdFx0XHRpZiAoZ2xiaWQgPT0gX2xlaXRvci5nbGJpZCAmJiAodHlwZW9mIF9sZWl0b3IucHJvZHV0byA9PSBcInVuZGVmaW5lZFwiIHx8IF9sZWl0b3IucHJvZHV0byA9PSBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSkpIHtcclxuXHRcdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8oX2xlaXRvci5hdXRvcml6YWRvLCBfbGVpdG9yLm1vdGl2bywgX2xlaXRvci5sb2dhZG8sIF9sZWl0b3IudGVtVGVybW9EZVVzbyk7XHJcblx0XHRcdFx0XHRpZihfbGVpdG9yLmF1dG9yaXphZG8pe1xyXG5cdFx0XHRcdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKF9sZWl0b3IudXVpZCwgXCJHbG9ibyBJRFwiLCBcIk8gR2xvYm9cIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc28oZ2xiaWQpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aXNBdXRvcml6YWRvOiBmdW5jdGlvbih0ZXJtb0RlVXNvLCBtb3Rpdm8sIGF1dG9yaXphZG8sIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSB7XHJcblx0XHRpZiAoYXV0b3JpemFkbyB8fCBtb3Rpdm8gPT0gXCJpbmRpc3Bvbml2ZWxcIiB8fCB0ZXJtb0RlVXNvICE9IGZhbHNlKSB7XHJcblx0XHRcdGlmIChhdXRvcml6YWRvICYmIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSBQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZShocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fTtcclxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRkZWZpbmVVc3VhcmlvUGlhbm86ZnVuY3Rpb24oYXV0b3JpemFkbywgbW90aXZvLCBsb2dhZG8sIHRlbVRlcm1vRGVVc28pe1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImF1dG9yaXphZG9cIiwgYXV0b3JpemFkb10pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm1vdGl2b1wiLCBtb3Rpdm9dKTtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJsb2dhZG9cIiwgbG9nYWRvXSk7XHJcblx0XHRpZih0ZW1UZXJtb0RlVXNvICE9IFwiIFwiKVxyXG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidGVtVGVybW9cIiwgdGVtVGVybW9EZVVzb10pO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLnV0aWwgPSB7XHJcblx0aXNTZWN0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3NlY3Rpb24nID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0dGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCB0aXBvQ29udGV1ZG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ1ZhcmlhdmVsIG5vbWVQcm9kdXRvUGlhbm8gbmFvIGVzdGEgZGVmaW5pZGEnLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblx0ZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHVybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcclxuXHRcdHZhciBjaGF2ZXNDYW1wYW5oYSA9IFsndXRtX21lZGl1bScsJ3V0bV9zb3VyY2UnXTtcclxuXHRcdHZhciB2YWxvcmVzQ2FtcGFuaGEgPSBbXTtcclxuXHJcblx0XHRmb3IgKHZhciBpZHhQYXJhbUNhbXBhbmhhID0gMDsgaWR4UGFyYW1DYW1wYW5oYSA8IGNoYXZlc0NhbXBhbmhhLmxlbmd0aDsgaWR4UGFyYW1DYW1wYW5oYSsrKSB7XHJcblx0XHRcdHZhciBjaGF2ZUNhbXBhbmhhID0gY2hhdmVzQ2FtcGFuaGFbaWR4UGFyYW1DYW1wYW5oYV07XHJcblx0XHRcdGlmICh1cmwuaW5kZXhPZihjaGF2ZUNhbXBhbmhhICsgJz0nKSAhPSAtMSkge1xyXG5cdFx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFw/KCYpXVwiICsgY2hhdmVDYW1wYW5oYSArIFwiPShbXiYjXSopXCIpO1xyXG5cdFx0XHRcdHZhciB2YWxvckNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcclxuXHRcdFx0XHRpZih2YWxvckNhbXBhbmhhKXtcclxuXHRcdFx0XHRcdHZhbG9yZXNDYW1wYW5oYS5wdXNoKHZhbG9yQ2FtcGFuaGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbG9yZXNDYW1wYW5oYS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ1dG1cIiwgdmFsb3Jlc0NhbXBhbmhhLmpvaW4oXCI7XCIpXSk7XHJcblx0XHR9XHJcblx0XHRpZiAodXJsLmluZGV4T2YoJ3V0bV9jYW1wYWlnbj0nKSAhPSAtMSkge1xyXG5cdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwidXRtX2NhbXBhaWduPShcXFxcdyspXCIpO1xyXG5cdFx0XHR2YXIgY2FtcGFuaGEgPSB1cmwubWF0Y2gocmVnZXgpWzFdO1xyXG5cdFx0XHRpZihjYW1wYW5oYSl7XHJcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNhbXBhbmhhXCIsIGNhbXBhbmhhXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGlzT3JpZ2VtQnVzY2Fkb3I6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0XHR2YXIgcmVnZXhSb2JvcyA9IG5ldyBSZWdFeHAoXCIoaWFfYXJjaGl2ZXIpfChHb29nbGVib3QpfChNZWRpYXBhcnRuZXJzLUdvb2dsZSl8KEFkc0JvdC1Hb29nbGUpfChtc25ib3QpfChZYWhvbyEgU2x1cnApfChaeUJvcmcpfChBc2sgSmVldmVzL1Rlb21hKXwoYmluZ2JvdCl8KGNYZW5zZWJvdClcIik7XHJcblx0XHR2YXIgZWhSb2JvID0gcmVnZXhSb2Jvcy50ZXN0KHVzZXJBZ2VudCk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYnVzY2Fkb3JcIiwgZWhSb2JvXSk7XHJcblx0XHRyZXR1cm4gZWhSb2JvO1xyXG5cdH0sXHJcblx0bW9udGFVcmxTdGc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCkgIT0gJ3ByZCcgPyAnLXN0ZycgOiAnJztcclxuXHR9LFxyXG5cdHRlbVBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbU5hbWUpIHtcclxuXHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xyXG5cdFx0cmV0dXJuIHBhcmFtZXRyb3MuaW5kZXhPZihwYXJhbU5hbWUpICE9IC0xID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0Z2V0VmFsb3JQYXJhbWV0cm9OYVVybDogZnVuY3Rpb24ocGFyYW1ldHJvKSB7XHJcblx0XHRpZiAoUGlhbm8udXRpbC50ZW1QYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pKSB7XHJcblx0XHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xyXG5cdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiW1xcPygmKV1cIiArIHBhcmFtZXRybyArIFwiPShbXiYjXSopXCIpO1xyXG5cdFx0XHRyZXR1cm4gcGFyYW1ldHJvcy5tYXRjaChyZWdleClbMV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gXCJzZW0gcGFyYW1ldHJvXCI7XHJcblx0fSxcclxuXHRpc0RlYnVnOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuREVCVUc7XHJcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcclxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCB2YWxvclBhcmFtZXRybywgMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICdmYWxzZScpIHtcclxuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCBcIlwiLCAtMSk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuREVCVUcpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0aXNEb21pbmlvT0dsb2JvOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCI6Ly8oLio/KS9cIiksIHVybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25IcmVmKCk7XHJcblx0XHRpZiAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwib2dsb2JvXCIpID4gLTEgfHwgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImdsb2JvaVwiKSA+IC0xICYmIHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImVkZ1wiKSA9PSAtMSkpIHtcclxuXHRcdFx0cmV0dXJuIHVybC5tYXRjaChyZWdleClbMV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fSxcclxuXHRjYWxsYmFja01ldGVyOiBmdW5jdGlvbihtZXRlckRhdGEpIHtcclxuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xyXG5cdFx0UGlhbm8ubWV0cmljYXMuZXhlY3V0YUFwb3NQYWdldmlldyhmYWxzZSk7XHJcblx0fSxcclxuXHRjYWxsYmFja01ldGVyRXhwaXJlZDogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XHJcblx0XHR3aW5kb3cucmVncmFzVGlueSA9IG1ldGVyRGF0YTtcclxuXHRcdFBpYW5vLnZhcmlhdmVpcy5pc0NhbGxiYWNrTWV0dGVyRXhwaXJlZCA9IHRydWU7XHJcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KHRydWUpO1xyXG5cdH0sXHJcblx0Z2V0V2luZG93TG9jYXRpb25TZWFyY2g6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHR9LFxyXG5cdGdldFdpbmRvd0xvY2F0aW9uSHJlZjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9LFxyXG5cdGFkaWNpb25hckNzczogZnVuY3Rpb24oY3NzUGF0aCl7XHJcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZS5pbm5lckhUTUwgPSBjc3NQYXRoO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZSwgZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xyXG5cdH0sXHJcblx0aXNSZXZpc3RhOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHJldmlzdGFzID0gW1wiZXBvY2FcIiwgXCJhdXRvLWVzcG9ydGVcIiwgXCJ2b2d1ZVwiLCBcImdsYW1vdXJcIiwgXCJjYXNhLXZvZ3VlXCIsIFwibWFyaWUtY2xhaXJlXCIsIFwiY2FzYS1lLWphcmRpbVwiLCBcInF1ZW0tYWNvbnRlY2VcIiwgXCJnbG9iby1ydXJhbFwiLCBcImdxXCIsIFwibW9uZXRcIiwgJ2NyZXNjZXInLCdnYWxpbGV1J107XHJcblx0XHRpZihyZXZpc3Rhcy5pbmRleE9mKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSA+IC0xKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0cmVjYXJyZWdhUGlhbm86IGZ1bmN0aW9uICh0aXBvQ29udGV1ZG8sIGlzRXhjbHVzaXZvLCBub21lUHJvZHV0bykge1xyXG5cdFx0d2luZG93LnRpcG9Db250ZXVkb1BpYW5vID0gdGlwb0NvbnRldWRvO1xyXG5cdFx0d2luZG93LmNvbnRldWRvRXhjbHVzaXZvID0gaXNFeGNsdXNpdm87XHJcblx0XHR3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9IG5vbWVQcm9kdXRvO1xyXG5cclxuXHRcdGlmICh0eXBlb2Ygd2luZG93LnJlZ3Jhc1RpbnkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSA9IFwiXCI7XHJcblx0XHR9XHJcblx0XHR3aW5kb3dbXCJ0cFwiXSA9IFtdXHJcblx0XHRQaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xyXG5cdFx0bG9hZFBpYW5vRXhwZXJpZW5jZXMoKTtcclxuXHJcblx0XHRjaGVja0V4cGVyaWVuY2VzSGFzQ2hhbmdlKClcclxuXHRcdC50aGVuKGNoYW5nZWQgPT4ge1xyXG5cdFx0XHRpZihjaGFuZ2VkKSB7XHJcblx0XHRcdFx0YW5hbHl0aWNhbEJsb2NrZWRGb3JQaWFubygpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YW5hbHl0aWNhbFVuYmxvY2tlZEZvclBpYW5vKClcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRpc1ZhbG9yOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gXCJ2YWxvclwiKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmNvbmZpZ3VyYWNhbyA9IHtcclxuXHRqc29uQ29uZmlndXJhY2FvVGlueVBhc3M6IHtcclxuXHRcdCdpbnQnOiB7XHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J2RYdTdkdkZLUmknLFxyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J01jdEZnUkNFc3UnLFxyXG5cdFx0XHQnc2V0U2FuZEJveCc6J3RydWUnLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9zYW5kYm94LnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPWRYdTdkdkZLUmknLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL3NhbmRib3gudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9TWN0RmdSQ0VzdScsXHJcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXHJcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXHJcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcclxuXHRcdH0sXHJcblx0XHQncWx0Jzp7XHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J0dUQ29wSURjNXonLFxyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxyXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1HVENvcElEYzV6JyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxyXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxyXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxyXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXHJcblx0XHR9LFxyXG5cdFx0J3ByZCc6e1xyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6JyxcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcclxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcclxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGkuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcclxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vJyxcclxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmNvbnN0cnV0b3IgPSB7XHJcblx0aW5pdFRwOiBmdW5jdGlvbigpIHtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBQaWFub1wiLCBcIkluaWNpbyBJbml0VHBcIik7XHJcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xyXG5cdFx0dHAucHVzaChbXCJzZXRUYWdzXCIsIFtQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKV1dKTtcclxuXHRcdGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpIHx8IFBpYW5vLnV0aWwuaXNWYWxvcigpKSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcclxuXHRcdH1cclxuXHRcdHRwLnB1c2goW1wic2V0U2FuZGJveFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnNldFNhbmRCb3hdKTtcclxuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcclxuXHRcdHZhciBjbGVhbl91cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpLnNwbGl0KFwiP1wiKVswXTtcclxuXHRcdHRwLnB1c2goW1wic2V0UGFnZVVSTFwiLGNsZWFuX3VybF0pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibm9tZVByb2R1dG9cIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcclxuXHRcdFBpYW5vLmphbmVsYUFub25pbWEuZGV0ZWN0UHJpdmF0ZU1vZGUoZnVuY3Rpb24gKGlzX3ByaXZhdGUpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNvbnRldWRvRXhjbHVzaXZvXCIsIHRydWVdKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodHlwZW9mIHN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHR5cGVvZiBzd2dFbnRpdGxlbWVudHMgIT09ICd1bmRlZmluZWQnICYmIHN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpKSApIHtcclxuXHRcdFx0UGlhbm8uZ29vZ2xlLmlzU3BlY2lmaWNHb29nbGVVc2VyKHN3Z0VudGl0bGVtZW50cyk7XHJcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSxcIkFVVE9SSVpBRE9cIiwgdHJ1ZSwgXCJcIik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLnZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50byhIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5HQ09NKSwgSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0UGlhbm8ucmVnaW9uYWxpemFjYW8uZ2V0UmVnaW9uKCk7XHJcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcclxuXHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYmFubmVyQ29udGFkb3JMaWdhZG9cIiwgdHJ1ZV0pO1xyXG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xyXG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJBY3RpdmVcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyXSk7XHJcblx0XHR0cC5wdXNoKFtcImFkZEhhbmRsZXJcIiwgXCJtZXRlckV4cGlyZWRcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyRXhwaXJlZF0pO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiRmltIEluaXRUcFwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkUGlhbm9FeHBlcmllbmNlcygpe1xyXG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRhLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG5cdGEuYXN5bmMgPSB0cnVlO1xyXG5cdGlmKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcclxuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm9SZXZpc3RhcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFubztcclxuXHR9XHJcblxyXG5cdHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XHJcblxyXG5cdGIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgYik7XHJcblx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiU2NyaXB0IGFkaWNpb25hZG9cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBpYW5vSW5pdCgpIHtcclxuXHR3aW5kb3cuUGlhbm8uY2hlY2tQaWFub0FjdGl2ZSgpXHJcblxyXG5cdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnRpbnkpXHJcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxyXG5cclxuICAgIGlmICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSB7XHJcblx0XHR3aW5kb3cuU1dHLnB1c2goKHN1YnNjcmlwdGlvbnMpID0+IHtcclxuXHRcdFx0aWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2ctc3Vic2NyaXB0aW9ucycsIHN1YnNjcmlwdGlvbnMpXHJcblxyXG5cdFx0XHRzd2cgPSBzdWJzY3JpcHRpb25zO1xyXG5cclxuXHRcdFx0c3Vic2NyaXB0aW9ucy5zZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlKGVudGl0bGVtZW50c1Byb21pc2UgPT4ge1xyXG5cdFx0XHRcdGVudGl0bGVtZW50c1Byb21pc2UudGhlbihlbnRpdGxlbWVudHMgPT4ge1xyXG5cdFx0XHRcdFx0d2luZG93LnN3Z0VudGl0bGVtZW50cyA9IGVudGl0bGVtZW50cztcclxuXHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gU1dHXCIsIFwiRW50aXRsZW1lbnRzIHJlY2ViaWRvc1wiKTtcclxuXHJcblx0XHRcdFx0XHRpZiAod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xyXG5cdFx0XHRcdFx0XHR0cnl7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnRpbnlDcHQuUGlhbm8uY29uc3RydXRvci5pbml0VHAoKTtcclxuXHRcdFx0XHRcdFx0XHRsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNhdGNoKGVycm9yKXtcclxuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIlBpYW5vIG5hbyBmb2kgY2FycmVnYWRhIGNvcnJldGFtZW50ZSFcIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgR0Euc2V0RXZlbnRzRXJyb3IoXCJFbnRpdGxlbWVudHMgbsOjbyBjYXJyZWdhZG9cIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xyXG4gICAgICAgICAgICBsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdGlueUluaXQoKSB7XHJcblx0VGlueS5zZXRQaWFubyhQaWFubyk7XHJcbiAgICBjb25zdCBTd2cgPSBuZXcgU3dnTW9kdWxlKCk7XHJcblxyXG5cdHRyeSB7XHJcblx0XHRhd2FpdCBTd2cuaW5pdCgpO1xyXG5cdH1cclxuXHRjYXRjaChlKSB7IGNvbnNvbGUuZXJyb3IoZSkgfVxyXG5cclxuXHRwaWFub0luaXQoKTtcclxufTtcclxuXHJcbnRpbnlJbml0KCk7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9