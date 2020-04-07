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

  if (window.tinyCpt.Swg.global) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLWdhLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiRmIiLCJkYXRhIiwiZGVidWciLCJ3aW5kb3ciLCJ0aW55Q3B0IiwiZGlzYWJsZWQiLCJmYiIsImhhc1BpeGVsIiwicGl4ZWwiLCJuYW1lIiwiaXNEZWZpbmVkIiwiZmJxIiwiR0EiLCJnYSIsIlByb2R1Y3RzIiwiUHJvZHVjdHNNb2R1bGUiLCJkYXRhTGF5ZXIiLCJpc1Byb2R1Y3RWYWxvciIsIl9nYXEiLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJIZWxwZXJzIiwicHJvcCIsImNfbmFtZSIsInZhbHVlIiwiZXhwaXJlZGF5cyIsImV4ZGF0ZSIsIkRhdGUiLCJob3N0bmFtZSIsImxvY2F0aW9uIiwic2V0RGF0ZSIsImdldERhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsImVzY2FwZSIsInRvVVRDU3RyaW5nIiwic3BsaXQiLCJyZXZlcnNlIiwibWF0Y2giLCJSZWdFeHAiLCJjb29raWVUaW55IiwidW5lc2NhcGUiLCJ0b1N0cmluZyIsIlBpYW5vIiwiY29udGVudCIsInNldEV4cGVyaWVuY2UiLCJleHBlcmllbmNlTmFtZSIsImV4cGVyaWVuY2UiLCJyZWdyYXNUaW55Iiwibm9tZUV4cGVyaWVuY2lhIiwic3Vic2VnbWVudGFjYW9QaWFubyIsInNldENvb2tpZSIsInZhcmlhdmVpcyIsImNvbnN0YW50ZSIsIlVUUCIsInByb2R1Y3ROYW1lIiwibm9tZVByb2R1dG9QaWFubyIsInByb2R1Y3RzU2V0dGluZ3MiLCJQcm9kdWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdHNJZCIsImlkIiwiU3dnIiwiU1dHIiwic3dnRW50aXRsZW1lbnRzIiwic3dnIiwibG9jYWxQcm9kdWN0UGlhbm8iLCJoYXNQcm9kdWN0SlNPTiIsInByb2R1Y3RKU09OIiwiZWxIZWFkIiwiaGVhZCIsInNldEdsb2JhbFNXRyIsImdsb2JhbCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsInV0bXNQcm9wcyIsImdsYlBheXdhbGwiLCJ1dG1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsInNldCIsInN1YnNjcmliZSIsInVybCIsImlzUHJvZHVjdGlvbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvZHVjdCIsImZpbHRlciIsInBpYW5vUHJvZHVjdE5hbWUiLCJvYmoiLCJwcm9wc1RvUmVtb3ZlIiwibmV3T2JqIiwiZWxlbWVudCIsImdldFByb2R1Y3QiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXJrdXBUZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3JjIiwidXJsUHJvZCIsInVybFN0ZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldE1hcmt1cCIsInNldFN3Z1NjcmlwdCIsInNldEFsZGViYXJhblNjcmlwdCIsInRlc3RTV0ciLCJUaW55IiwiaGFzUGF5d2FsbCIsInRwIiwiUGF5d2FsbEFuYWx5dGljcyIsInNldEdsb2JhbFRpbnkiLCJzZXRHbG9iYWwiLCJpbml0IiwiZGVmYXVsdFNldHRpbmdzIiwidGlueSIsInBheXdhbGwiLCJhbWJpZW50ZVV0aWxpemFkb1BpYW5vIiwiUGF5d2FsbENwdElubGluZSIsIlBpYW5vTW9kdWxlIiwiZG9tYWluIiwicGF5d2FsbElkIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsImFjdGl2ZUV2ZW50cyIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRpdGxlIiwic3VidGl0bGUiLCJidXR0b25UZXh0IiwiYnV0dG9uTGluayIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGV4dCIsImxvZ2luTGluayIsIm9mZmVyTGluayIsImltYWdlTW9iaSIsImltYWdlRGVzayIsImltYWdlTGluayIsImNzc0xvYWRlZCIsImdsYlBheXdhbGxJbmxpbmUiLCJwb3N0RWxlbWVudCIsImFuYWxpdGljb1Bvc3QiLCJjcmVhdGVUZW1wbGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluRWxlbWVudCIsImZvb3RlckVsZW1lbnQiLCJvcGFjaXR5RWxlbWVudCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjc3NNaW5pZmllZCIsInNldEF0dHJpYnV0ZSIsInRlbXBsYXRlIiwicmVtb3ZlZEVsZW1lbnQiLCJBcnJheSIsImZyb20iLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImZpbmQiLCJjbGFzc05hbWUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsInVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvIiwidXJpIiwiaHJlZiIsInNlcnZpY2VJZCIsImdldFNlcnZpY29JZCIsInN0ciIsInVybFJldHVybiIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldENvZGlnb1Byb2R1dG8iLCJnZXROb21lUHJvZHV0byIsInRlbXBsYXRlVmFycyIsImdldFVybExvZ2luUmVnaXN0ZXIiLCJQYXl3YWxsR0FNb2R1bGUiLCJHQU1vZHVsZSIsIm1ldHJpY3MiLCJwYXl3YWxsVHlwZSIsIl9QaWFubyIsInNldEV2ZW50cyIsInZpZXdOYW1lIiwiUlRJRVgiLCJyZXNldFV0cCIsImRhdGFzZXQiLCJnYVJlc2V0dXRwIiwiaW1hZ2VUb3AiLCJnYUltYWdlUG9zaXRpb24iLCJnYUxhYmVsIiwiZXZlbnQiLCJldmVudG9HQUNhdGVnb3JpYSIsImV2ZW50b0dBQWNhbyIsImdhQWN0aW9uIiwiZXZlbnRvR0FSb3R1bG8iLCJldmVudG9HQVZhbG9yIiwiZXZlbnRvR0FJbnRlcmFjYW8iLCJzZXREYXRhbGF5ZXIiLCJ0eXBlUGF5d2FsbCIsIlBheXdhbGxDcHQiLCJTd2dNb2R1bGUiLCJGQiIsIkZiTW9kdWxlIiwiUGF5d2FsbCIsImFzc2V0c1BhdGgiLCJkaXNwbGF5IiwicHJvZHVjdENsYXNzIiwidGFyZ2V0QmxhbmsiLCJ0b3BNb2JpIiwidG9wRGVzayIsInRvcExpbmsiLCJsZWZ0TW9iaSIsImxlZnREZXNrIiwibGVmdExpbmsiLCJyaWdodE1vYmkiLCJyaWdodERlc2siLCJyaWdodExpbmsiLCJoaWRlTG9naW5BcmVhIiwibG9naW5UYWciLCJjbGVhckxvZ2luQXJlYSIsInNldERlYnVnVGVtcGxhdGVTZXR0aW5ncyIsImVsQm9keSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJlbENwdCIsInNldEVsV3JhcHBlciIsImVsVG9SZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keUFkanVzdCIsInJlbW92ZUVsZW1lbnRzIiwiYWN0aXZlVGVtcGxhdGVTZXR0aW5ncyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBheXdhbGxMb2FkIiwiZWxDcHRXcmFwIiwic2V0VGltZW91dCIsImVsQm9keUhlaWdodCIsImlubmVySGVpZ2h0IiwiZWxDcHRXcmFwSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3VycmVudFRvcCIsIk1hdGgiLCJhYnMiLCJ0b3BXaXRoRnVsbEVsZW1lbnQiLCJ0b3AiLCJvcGFjaXR5IiwiekluZGV4IiwiZXZ0V2hlZWwiLCJldnRUb3VjaCIsInNldFBpeGVsVHlwZSIsImNsaWNrVGFyZ2V0cyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiaXNMb2dpbiIsIkJvb2xlYW4iLCJnZXRBdHRyaWJ1dGUiLCJpc1VybFN3ZyIsImluY2x1ZGVzIiwibm90QmxhbmsiLCJocmVmVGFyZ2V0IiwidHJpZ2dlciIsInNldFV0bXMiLCJvcGVuIiwiYmluZCIsIm5ld3RvcCIsInN0ZXAiLCJtdWx0aXBsaWVyIiwiZGVsdGFZIiwiZWxUb3AiLCJ0b3VjaHN0YXJ0WSIsInRvdWNoZW5kWSIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWSIsImRpZmYiLCJkZWxheVRpbWVyIiwiVGlueU1vZHVsZSIsInNldEdsb2JhbFZhcnMiLCJhbWJpZW50ZXNBY2VpdG9zIiwic3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc28iLCJzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwiaXNDYWxsYmFja01ldHRlckV4cGlyZWQiLCJHQ09NIiwiQU1CSUVOVEUiLCJTQVZFX1NVQlNDUklQVElPTiIsIkNSRUFURURfR0xPQk9JRCIsIkdMT0JPSURfTUVTU0FHRSIsIm1ldHJpY2FzIiwiRVZFTlRPX1NFTV9BQ0FPIiwiRVJSTyIsImtydXgiLCJTRUdNRU5UQUNPRVMiLCJLUlVYTElHQURPIiwidXRpbCIsIklQIiwiREVCVUciLCJpc0NvbnRldWRvRXhjbHVzaXZvIiwiY29udGV1ZG9FeGNsdXNpdm8iLCJnZXRBbWJpZW50ZVBpYW5vIiwiaW5kZXhPZiIsImdldFZhbG9yUGFyYW1ldHJvTmFVcmwiLCJnZXRDb29raWUiLCJnZXRUaXBvQ29udGV1ZG9QaWFubyIsInRpcG9Db250ZXVkb1BpYW5vIiwiZXhlY3V0b3VQYWdldmlldyIsInNldEV2ZW50c0Vycm9yIiwiaXNSZXZpc3RhIiwibm9tZVByb2R1dG8iLCJhdXRlbnRpY2FjYW8iLCJkZWZpbmVVc3VhcmlvUGlhbm8iLCJqYW5lbGFBbm9uaW1hIiwicmV0cnkiLCJpc0RvbmUiLCJuZXh0IiwiY3VycmVudF90cmlhbCIsIm1heF9yZXRyeSIsImlzX3RpbWVvdXQiLCJpc0lFMTBPckxhdGVyIiwidXNlcl9hZ2VudCIsInVhIiwiZXhlYyIsInBhcnNlSW50IiwiZGV0ZWN0UHJpdmF0ZU1vZGUiLCJpc19wcml2YXRlIiwid2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0iLCJURU1QT1JBUlkiLCJlIiwiaW5kZXhlZERCIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRiIiwicmVhZHlTdGF0ZSIsInJlc3VsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwidGVtIiwiZ2V0SXRlbSIsImxpZ2FkbyIsInBhcmFtZXRybyIsInZhbG9yUGFyYW1ldHJvIiwib2J0ZW1TZWdtZW50YWNhbyIsInNlZ21lbnRhY29lcyIsImkiLCJyZWdpb25hbGl6YWNhbyIsImdldFJlZ2lvbiIsImtydXhHZW8iLCJrZXkiLCJlbnZpYUV2ZW50b3NHQSIsIl9HQUFjYW8iLCJfR0FSb3R1bG8iLCJtb250YVJvdHVsb0dBIiwic2V0TGltaXRlQ29udGFnZW0iLCJfR0FMaW1pdGUiLCJfR0FDb250YWdlbSIsInZpZXdzIiwibWF4Vmlld3MiLCJpZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXIiLCJyZWdyYXMiLCJwYXNzYWdlbSIsImZsdXhvIiwiZXhlY3V0YUFwb3NQYWdldmlldyIsImV4cGlyb3UiLCJ0cENvbnRleHQiLCJzZXRhVmFyaWF2ZWlzIiwiaWRMb2dpbiIsInRpcG9Mb2dpbiIsImFzc2luYXR1cmFMb2dhZGEiLCJpZExvZ2luQXNzaW5hbnRlIiwidGlwb0xvZ2luQXNzaW5hbnRlIiwiYmFubmVyIiwibW9zdHJhckZvb3RlciIsInZlcnNhbyIsImFkaWNpb25hckNzcyIsIm1vbnRhVXJsU3RnIiwieG1sSHR0cFJlcXVlc3QiLCJnZXJhU2NyaXB0TmFQYWdpbmEiLCJtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyIiwibW9zdHJhckF2YXRhckhlYWRlciIsImJvdHRvbUZpeGVkIiwicGFyYW1zIiwiZ2xiQmFubmVyQm90dG9tIiwibW9zdHJhclNXRyIsImNzcyIsInNjcmlwdEpzIiwibW9zdHJhckhpZ2hsaWdodFNhbGUiLCJtb3N0cmFyU3Vic2NyaWJlQnV0dG9uVmFsb3IiLCJyZWdpc3RlciIsIm1vc3RyYXJCYXJyZWlyYSIsImhlbHBlciIsInJlZGlyZWNpb25hckJhcnJlaXJhIiwic2hvdyIsImVycm9yIiwidHJpZ2dlckFkdmVydGlzaW5nIiwiYW5hbHl0aWMiLCJlcnIiLCJhbmFseXRpY2FsVW5ibG9ja2VkRm9yUGlhbm8iLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJhbmFseXRpY2FsQmxvY2tlZEZvclBpYW5vIiwiYW5hbHl0aWNhbFBvc3RJc09wZW5lZCIsImFuYWx5dGljYWxQb3N0SXNMb2FkaW5nIiwiY2hlY2tFeHBlcmllbmNlc0hhc0NoYW5nZSIsIl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0IiwiZXZlbnRzIiwiZXhwZXJpZW5jZXMiLCJleHBlcmllbmNlc0Nsb25lIiwiZXhwZXJpZW5jZXNDaGFuZ2VkIiwiaXMiLCJldmVudFR5cGUiLCJldmVudFBhcmFtcyIsInNuaXBwZXQiLCJjaGVja1BpYW5vQWN0aXZlIiwiY2hlY2tQYXl3YWxsIiwiUGlhbm9SZXN1bHRFdmVudHMiLCJoYXNSdW5Kc1dpdGhQYXl3YWxsIiwidHJpZ2dlclBheXdhbGxPcGVuZWQiLCJyZWdpc3RlclBheXdhbGwiLCJ0aXBvIiwic3RhdHVzIiwiY29tdW5pY2FkbyIsIm1vc3RyYXJJbmZvcm1hY2FvIiwiYWRibG9jayIsIm1vc3RyYXJBZEJsb2NrIiwiZ2xiQWRibG9jayIsImJsb3F1ZWlvcyIsImxpYmVyYXJFc2MiLCJibG9xdWVpYVZpZXdNb2RlIiwicGFyY2Vpcm8iLCJtb3N0cmFGb290ZXJQYXJjZWlybyIsImluYWRpbXBsZW50ZSIsImdldExpbmtBc3NpbmF0dXJhIiwibGluayIsInJlbCIsInVybFNjcmlwdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3Bvc3RhIiwicmVzcG9uc2VUZXh0IiwiYXBwZW5kRGVTY3JpcHQiLCJhcHBlbmRDaGlsZCIsInN0YXR1c1RleHQiLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwic2V0UmVxdWVzdEhlYWRlciIsInJlc3BKc29uIiwicGFyc2UiLCJzaXR1YWNhb1BhZ2FtZW50byIsImZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc28iLCJnbGJpZCIsImNvZGlnb1Byb2R1dG8iLCJjb25maWd1cmFjYW8iLCJqc29uQ29uZmlndXJhY2FvVGlueVBhc3MiLCJ1cmxWZXJpZmljYUxlaXRvciIsInJlc3Bvc3RhRGVUZXJtb0RlVXNvIiwicmVzcG9zdGFEZU1vdGl2byIsIm1vdGl2byIsInRlbVRlcm1vRGVVc28iLCJpc0F1dG9yaXphZG8iLCJhdXRvcml6YWRvIiwiX2pzb25MZWl0b3IiLCJ1c3VhcmlvSWQiLCJidG9hIiwiZW5jb2RlVVJJIiwiZ29vZ2xlIiwic2hvd1NhdmVTdWJzY3JpcHRpb24iLCJzd2dTZXJ2aWNlIiwiU3dnU2VydmljZSIsInNhdmVHbG9ib1N1YnNjcmlwdGlvbiIsImlzQXV0aG9yaXplZCIsImdldEVudGl0bGVtZW50Rm9yU291cmNlIiwic3Vic2NyaXB0aW9uVG9rZW4iLCJpc1NwZWNpZmljR29vZ2xlVXNlciIsIm9HbG9ib0J1c2luZXNzIiwiT0dsb2JvQnVzaW5lc3MiLCJ2ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkIiwiZW50aXRsZW1lbnRzIiwicmVzcG9uc2UiLCJlbmFibGVzVGhpcyIsImlzTG9nYWRvQ2FkdW4iLCJ1dHAiLCJ2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8iLCJfbGVpdG9yIiwiZGVjb2RlVVJJIiwiYXRvYiIsInByb2R1dG8iLCJsb2dhZG8iLCJ1dWlkIiwidGVybW9EZVVzbyIsImlzU2VjdGlvbiIsInRlbVZhcmlhdmVpc09icmlnYXRvcmlhcyIsImV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsIiwiZ2V0V2luZG93TG9jYXRpb25TZWFyY2giLCJjaGF2ZXNDYW1wYW5oYSIsInZhbG9yZXNDYW1wYW5oYSIsImlkeFBhcmFtQ2FtcGFuaGEiLCJjaGF2ZUNhbXBhbmhhIiwicmVnZXgiLCJ2YWxvckNhbXBhbmhhIiwiam9pbiIsImNhbXBhbmhhIiwiaXNPcmlnZW1CdXNjYWRvciIsInJlZ2V4Um9ib3MiLCJlaFJvYm8iLCJ0ZW1QYXJhbWV0cm9OYVVybCIsInBhcmFtTmFtZSIsInBhcmFtZXRyb3MiLCJpc0RlYnVnIiwiaXNEb21pbmlvT0dsb2JvIiwiZ2V0V2luZG93TG9jYXRpb25IcmVmIiwiY2FsbGJhY2tNZXRlciIsIm1ldGVyRGF0YSIsImNhbGxiYWNrTWV0ZXJFeHBpcmVkIiwiY3NzUGF0aCIsImluc2VydEJlZm9yZSIsImxhc3RDaGlsZCIsInJldmlzdGFzIiwicmVjYXJyZWdhUGlhbm8iLCJ0aXBvQ29udGV1ZG8iLCJpc0V4Y2x1c2l2byIsInBvc3RPcGVuZWQiLCJjb25zdHJ1dG9yIiwiaW5pdFRwIiwibG9hZFBpYW5vRXhwZXJpZW5jZXMiLCJjaGFuZ2VkIiwiaXNWYWxvciIsImlkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMiLCJpZFNhbmRib3hUaW55cGFzcyIsInNldFNhbmRCb3giLCJjbGVhbl91cmwiLCJhIiwiYXN5bmMiLCJ1cmxTYW5kYm94UGlhbm9SZXZpc3RhcyIsInVybFNhbmRib3hQaWFubyIsImIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBpYW5vSW5pdCIsInN1YnNjcmlwdGlvbnMiLCJzZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlIiwiZW50aXRsZW1lbnRzUHJvbWlzZSIsInRpbnlJbml0Iiwic2V0UGlhbm8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7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QTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICdlcG9jYSc6IHtcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2F1dG8tZXNwb3J0ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnYXV0by1lc3BvcnRlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICd2b2d1ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAndm9ndWUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2dsYW1vdXInOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dsYW1vdXInLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2Nhc2Etdm9ndWUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2Nhc2Etdm9ndWUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ21hcmllLWNsYWlyZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnbWFyaWUtY2xhaXJlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdjYXNhLWUtamFyZGltJzoge1xuICAgICdjb2RfcHJvZCc6ICdjYXNhLWphcmRpbScsXG4gICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdxdWVtLWFjb250ZWNlJzoge1xuICAgICdjb2RfcHJvZCc6ICdxdWVtJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdlcG9jYS1uZWdvY2lvcyc6IHtcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EtbmVnb2Npb3MnLFxuICAgICdpZCc6ICcwMDAwJ1xuICAgIH0sXG4gICAgJ2dsb2JvLXJ1cmFsJzoge1xuICAgICdjb2RfcHJvZCc6ICdnbG9iby1ydXJhbCcsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAncGVnbic6IHtcbiAgICAnY29kX3Byb2QnOiAncGVxdWVuYXMtZW1wcmVzYXMnLFxuICAgICdpZCc6ICcwMDAwJ1xuICAgIH0sXG4gICAgJ2dhbGlsZXUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dhbGlsZXUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2NyZXNjZXInOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2NyZXNjZXInLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2dxJzoge1xuICAgICdjb2RfcHJvZCc6ICdncScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnbW9uZXQnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ21vbmV0JyxcbiAgICAnaWQnOiAnNjYxOCdcbiAgICB9LFxuICAgICdvZ2xvYm8nOiB7XG4gICAgJ2NvZF9wcm9kJzogJ09HMDMnLFxuICAgICdpZCc6ICczOTgxJ1xuICAgIH0sXG4gICAgJ2Jsb2dzJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdrb2d1dCc6IHtcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXG4gICAgJ2lkJzogJzM5ODEnXG4gICAgfSxcbiAgICAnYWNlcnZvJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzA0JyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdqb3JuYWxkaWdpdGFsJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAxJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICd2YWxvcic6IHtcbiAgICAnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJyxcbiAgICAnaWQnOiAnNjY2OCdcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1ZzsgXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYiA9IGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZmJxICE9PSAndW5kZWZpbmVkJykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0UGl4ZWxUeXBlKCkge1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGhhc1BpeGVsID0gKHR5cGVvZiB0aGlzLmZiLnBpeGVsLm5hbWUgIT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZmIucGl4ZWwubmFtZSA6IG51bGw7IFxuXG4gICAgICAgIGlmKHRoaXMuaXNEZWZpbmVkICYmIGhhc1BpeGVsKXtcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MTAyNzAwMzk1MjA2MzQnKTtcbiAgICAgICAgICAgIGZicSgndHJhY2tTaW5nbGUnLCAnNDEwMjcwMDM5NTIwNjM0JywgdGhpcy5mYi5waXhlbC5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0EgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcuZ2E7XG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcbiAgICB9XG4gICAgXG4gICAgc2V0R2xvYmFsVmFycygpIHtcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgIHx8IFtdOyBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IgJiYgdHlwZW9mIF9nYXEgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgd2luZG93Ll9nYXEgPSB3aW5kb3cuX2dhcSAgfHwgW107ICBcbiAgICB9XG5cbiAgICBzZXRFdmVudHMoYWN0aW9uLCBsYWJlbCwgY2F0ZWdvcnkgPSAnUGlhbm8nKSB7XG5cblx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYSlcblx0XHRcdGNvbnNvbGUubG9nKCdsb2ctZ2EtZXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbClcblxuICAgICAgICBpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XG5cdFx0XG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogY2F0ZWdvcnksICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcbiAgICB9XG4gICAgXG4gICAgc2V0RXZlbnRzRXJyb3IoYWN0aW9uLCBsYWJlbCkge1xuXHRcdGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8gRXJybycsIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XG5cblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8gRXJybycsICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcblx0fVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XG5cbiAgICBzdGF0aWMgaXNEZWZpbmVkKHByb3ApIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcHJvcCAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZTogZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldENvb2tpZShjX25hbWUsIHZhbHVlLCBleHBpcmVkYXlzID0gbnVsbCkge1xuICAgICAgICBsZXQgZXhkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IG51bGw7XG5cbiAgICAgICAgaWYoIWhvc3RuYW1lKSByZXR1cm47XG5cbiAgICAgICAgZXhkYXRlLnNldERhdGUoZXhkYXRlLmdldERhdGUoKSArIGV4cGlyZWRheXMpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArZXNjYXBlKHZhbHVlKSArICgoZXhwaXJlZGF5cykgPyBcIlwiIDogXCI7ZXhwaXJlcz1cIiArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKVxuICAgICAgICArIFwiOyBwYXRoPS87XCIgKyBcImRvbWFpbj0uXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVsxXSArIFwiLlwiICsgaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClbMF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENvb2tpZShuYW1lKSB7XG4gICAgICAgIGxldCBtYXRjaCA9IChkb2N1bWVudC5jb29raWUpID8gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAobmFtZSsnPShbXjtdKyknKSkgOiBmYWxzZTtcbiAgICAgICAgbGV0IGNvb2tpZVRpbnkgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzFdLnRvU3RyaW5nKCkpIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRpbnk7XG4gICAgfVxuICAgICAgICBcblxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpYW5vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXRFeHBlcmllbmNlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy50aW55Q3B0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gd2luZG93LnRpbnlDcHQuUGlhbm87XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0RXhwZXJpZW5jZSgpIHsgIFxuICAgICAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSAnJzsgICBcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UgPSB7fTsgIFxuICAgICAgICAgXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKVxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3JlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhfSAtICR7d2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm99YCA6IHJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIFxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3dpbmRvdy5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcbiAgICAgICBcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSA9IGV4cGVyaWVuY2VOYW1lO1xuXHR9XG5cbiAgICByZXNldFV0cCgpIHtcbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQpXG4gICAgICAgICAgICBIZWxwZXJzLnNldENvb2tpZSh0aGlzLmNvbnRlbnQudmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCAnJywgLTEpO1xuICAgIH1cbn1cbiIsImltcG9ydCBwcm9kdWN0c0lkIGZyb20gJy4uL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xuICAgIH1cblxuICAgIHNldEdsb2JhbCgpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIFByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3ROYW1lLFxuICAgICAgICAgICAgICAgIC8vIGlkOiB0aGlzLnByb2R1Y3RJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24ocHJvZHVjdHNTZXR0aW5ncywgd2luZG93LnRpbnlDcHQpIDogcHJvZHVjdHNTZXR0aW5nczsgXG4gICAgfVxuICAgIFxuICAgIGdldCBpc1Byb2R1Y3RWYWxvcigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb2R1Y3ROYW1lICYmIHRoaXMucHJvZHVjdE5hbWUgPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBwcm9kdWN0SWQoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKCAodHlwZW9mIHByb2R1Y3RzSWRbdGhpcy5wcm9kdWN0TmFtZV0gIT09ICAndW5kZWZpbmVkJykgXG4gICAgICAgICYmICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCAhPT0gICd1bmRlZmluZWQnKSApXG4gICAgICAgID8gcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCA6IG51bGw7XG4gICAgICAgIFxuICAgIH1cblxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB3aW5kb3cuU1dHID0gd2luZG93LlNXRyB8fCBbXTsgLy9UT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGlzIHZhcmlhYmxlIGV4aXN0c1xuICAgICAgICB3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gd2luZG93LnN3Z0VudGl0bGVtZW50cyB8fCBudWxsO1xuICAgICAgICB0aGlzLmRlYnVnID0gKEhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgPyB3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vID0gKHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyBub21lUHJvZHV0b1BpYW5vIDogbnVsbDtcbiAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbEhlYWQgPSBkb2N1bWVudC5oZWFkOyBcblxuICAgICAgICB0aGlzLnNldEdsb2JhbFNXRygpO1xuICAgIH1cblxuICAgIGdldCBpc0RlZmluZWQoKSB7IFxuICAgICAgICByZXR1cm4gKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpID8gdHJ1ZSA6IGZhbHNlOyBcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxTV0coKSB7XG4gICAgICAgIGlmKCFIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpIHJldHVybjtcblxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cgPSB7XG4gICAgICAgICAgICBnbG9iYWw6ICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykgPyBzd2cgOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0VXRtcygpIHsgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgY29uc3QgdXRtc1Byb3BzID0gKHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgOiBudWxsOyBcblxuICAgICAgICB1dG1zUHJvcHMuZm9yRWFjaCgoaXRlbSkgPT4geyBcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgdXJsUGFyYW1zLnNldChgdXRtXyR7bmFtZX1gLCB2YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAnc2V0VXRtcycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgdXRtc1Byb3BzKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIGxvY2F0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmlzRGVmaW5lZCkgfHwgIXV0bXNQcm9wcyApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwuc3Vic2NyaWJlKCdici5jb20uaW5mb2dsb2JvLm9nbG9iby5zd2cuZ29vZ2xlJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiAgXG4gICAgICAgID8gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9wcm9kL3Byb2R1Y3RzLmpzb24nIFxuICAgICAgICA6ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF83YjBhNmRmNDk4OTU0NTlmYmFmZTQ5YTk2ZmNiNWJiZi9zd2cvZGV2L3Byb2R1Y3RzLmpzb24nO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3QoKSB7IFxuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnBpYW5vUHJvZHVjdE5hbWUgPT09IHRoaXMubG9jYWxQcm9kdWN0UGlhbm8gKVswXTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmVQcm9wZXJ0aWVzKG9iaikgeyBcbiAgICAgICAgY29uc3QgcHJvcHNUb1JlbW92ZSA9IFsncHJvZHVjdE5hbWUnLCAncGlhbm9Qcm9kdWN0TmFtZSddO1xuICAgICAgICBjb25zdCBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG4gICAgICAgIHByb3BzVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBuZXdPYmpbZWxlbWVudF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgYXN5bmMgbWFya3VwVGVtcGxhdGUoKSB7IFxuICAgICAgICBjb25zdCBwcm9kdWN0SlNPTiA9ICBhd2FpdCB0aGlzLnJlbW92ZVByb3BlcnRpZXMoYXdhaXQgdGhpcy5nZXRQcm9kdWN0KCkpIHx8IG51bGw7IFxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gT2JqZWN0LmtleXMocHJvZHVjdEpTT04pLmxlbmd0aCA/IEpTT04uc3RyaW5naWZ5KHByb2R1Y3RKU09OKSA6IG51bGw7XG5cbiAgICAgICAgaWYoIXByb2R1Y3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZih0aGlzLmRlYnVnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnbG9nLVNXRy1Qcm9kdWN0JzogcHJvZHVjdH0pO1xuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gYCR7IHByb2R1Y3QgfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZXRNYXJrdXAoKSB7IFxuICAgICAgICBhd2FpdCB0aGlzLm1hcmt1cFRlbXBsYXRlKCk7XG4gICAgICAgIGlmKCF0aGlzLnByb2R1Y3RKU09OKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgXG4gICAgICAgIGVsZW1lbnQudHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnByb2R1Y3RKU09OO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNldFN3Z1NjcmlwdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBlbGVtZW50LnNyYyA9ICdodHRwczovL25ld3MuZ29vZ2xlLmNvbS9zd2cvanMvdjEvc3dnLmpzJztcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzZXRBbGRlYmFyYW5TY3JpcHQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgdXJsUHJvZCA9ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF9jMTBhZTgxOWM1Njg0NjBiYjRlYzE3YzBhOGVjNTI2Ny9hbGRlYmFyYW4vanMvYnVuZGxlLmpzJztcbiAgICAgICAgY29uc3QgdXJsU3RnID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2FkZGM1ZThmMzE2ZjQ4ZWE5MTgxYWYzNzE2MGIyMmI0L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xuXG4gICAgICAgIGVsZW1lbnQuc3JjID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gdXJsUHJvZCA6IHVybFN0ZztcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0ZXN0U1dHKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LnN3Zykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsID0gd2luZG93LnN3ZztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdUaGVyZSBpc25cXCd0IHdpbmRvdy5zd2cnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xuICAgICAgICBhd2FpdCB0aGlzLnNldE1hcmt1cCgpOyAgXG4gICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuaGFzUHJvZHVjdEpTT04pIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3dnU2NyaXB0KCk7IFxuICAgICAgICBhd2FpdCB0aGlzLnNldEFsZGViYXJhblNjcmlwdCgpOyAgIFxuICAgICAgICBhd2FpdCB0aGlzLnRlc3RTV0coKTsgICAgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlueSAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcbiAgICAgICAgd2luZG93Lmhhc1BheXdhbGwgPSB3aW5kb3cuaGFzUGF5d2FsbCB8fCBudWxsO1xuICAgICAgICB3aW5kb3cudHAgPSB3aW5kb3cudHAgfHwgW107XG4gICAgICAgIHdpbmRvdy5QaWFubyA9IHdpbmRvdy5QaWFubyB8fCB7fTtcbiAgICAgICAgd2luZG93LlBheXdhbGxBbmFseXRpY3MgPSB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsVGlueSgpO1xuICAgICAgICB0aGlzLlByb2R1Y3RzLnNldEdsb2JhbCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxUaW55KCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgICAgIHRpbnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBheXdhbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN3ZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ2E6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNQcm9kdWN0aW9uOiAod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnKSA/IHRydWUgOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBkZWZhdWx0U2V0dGluZ3M7IFxuICAgIH1cbiAgICBcbiAgICBzZXRQaWFubyhvYmopIHtcbiAgICAgICAgd2luZG93LnRpbnlDcHQuUGlhbm8gPSBvYmo7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsQ3B0SW5saW5lICB7XG5cdGNvbnN0cnVjdG9yKCkgeyBcblx0XHR0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XG5cblx0XHR0aGlzLmRvbWFpbiA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/ICdodHRwczovL2xvZ2luLmdsb2JvLmNvbS8nIDogJ2h0dHBzOi8vbG9naW4ucWEuZ2xvYm9pLmNvbS8nO1x0XG5cdFx0dGhpcy5wYXl3YWxsSWQgPSAncGF5d2FsbC1pbmxpbmUnXG5cblx0XHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xuXHRcdFx0dGhpcy5hY3RpdmVFdmVudHMoKVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xuXHRcdFx0dGl0bGU6ICdQYXJhIGNvbnRpbnVhciBzdWEgbGVpdHVyYSwgw6kgcHJlY2lzbyBzZSBjYWRhc3RyYXIuJyxcblx0XHRcdHN1YnRpdGxlOiAnw4kgcsOhcGlkbyBlIGdyw6F0aXMhJyxcblx0XHRcdGJ1dHRvblRleHQ6ICdDYWRhc3RyZS1zZSBncmF0dWl0YW1lbnRlIGFnb3JhJyxcblx0XHRcdGJ1dHRvbkxpbms6ICdodHRwczovL2dvb2dsZS5jb20/bDEnLFxuXHRcdFx0bG9naW5QcmVUZXh0OiAnSsOhIHBvc3N1aSBjYWRhc3Rybz8gJyxcblx0XHRcdGxvZ2luVGV4dDogJ0Zhw6dhIGxvZ2luJyxcblx0XHRcdGxvZ2luTGluazogd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLycsIFxuXHRcdFx0b2ZmZXJMaW5rOiBcImh0dHBzOi8vZ29vZ2xlLmNvbT9sMVwiLFxuXHRcdFx0aW1hZ2VNb2JpOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTUwXCIsXG5cdFx0XHRpbWFnZURlc2s6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwNHgxMjhcIixcblx0XHRcdGltYWdlTGluazogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDE1MFwiLFxuXHRcdFx0Y3NzTG9hZGVkOiBmYWxzZVxuXHRcdH07XG5cblx0XHR3aW5kb3cuZ2xiUGF5d2FsbElubGluZSA9ICh3aW5kb3cuZ2xiUGF5d2FsbElubGluZSkgPyAgT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVTZXR0aW5ncywgd2luZG93LmdsYlBheXdhbGxJbmxpbmUpIDogdGVtcGxhdGVTZXR0aW5nczsgXG5cblx0XHRjYWxsYmFjaygpO1xuXHR9XG5cbiAgICBhY3RpdmVFdmVudHMoKSB7XG5cdFx0Y29uc3QgcG9zdEVsZW1lbnQgPSB3aW5kb3cuYW5hbGl0aWNvUG9zdDtcblxuXHRcdGlmKCFwb3N0RWxlbWVudCkgcmV0dXJuIG51bGxcblxuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGUocG9zdEVsZW1lbnQpXG5cdH1cblxuICBcdGNyZWF0ZVRlbXBsYXRlKHBvc3RFbGVtZW50KSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHBvc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXJlYWQtbW9yZVwiKTtcblx0XHRjb25zdCBtYWluRWxlbWVudCA9IHBvc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKVxuXHRcdGNvbnN0IGZvb3RlckVsZW1lbnQgPSBwb3N0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1mb290ZXInKVxuXHRcdGNvbnN0IG9wYWNpdHlFbGVtZW50ID0gYDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtb3BhY2l0eVwiPjwvZGl2PmBcblxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRpZighd2luZG93LmdsYlBheXdhbGxJbmxpbmUuY3NzTG9hZGVkKSB7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMuY3NzTWluaWZpZWQpOyBcblx0XHRcdFx0d2luZG93LmdsYlBheXdhbGxJbmxpbmUuY3NzTG9hZGVkID0gdHJ1ZVxuXHRcdFx0fVxuXG5cdFx0XHRmb290ZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG5cdFx0XHRwYWRkaW5nLXRvcDogMHB4OyBwb3NpdGlvbjpyZWxhdGl2ZWApO1xuXG5cdFx0XHRtYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47YCk7XG5cblx0XHRcdG1haW5FbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgb3BhY2l0eUVsZW1lbnQpOyBcblx0XHRcdC8vIHBvc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1jb250ZW50Jylcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTsgXG5cdFx0XHRjb25zdCByZW1vdmVkRWxlbWVudCA9IEFycmF5LmZyb20oZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2RlcykuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc05hbWUgPT09ICdvdGhlci1jb250ZW50Jylcblx0XHRcdFxuXHRcdFx0aWYocmVtb3ZlZEVsZW1lbnQpXG5cdFx0XHRcdHJlbW92ZWRFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpXG5cblx0XHRcdGVsZW1lbnQucmVtb3ZlKClcblx0XHR9XG5cdCAgfVxuXHQgIFxuXHRnZXRVcmxMb2dpblJlZ2lzdGVyKHR5cGUgPSAnJykge1xuXHRcdGNvbnN0IHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvID0gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnID8gJ2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnIDogJ2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnO1xuXHRcdGNvbnN0IHVyaSA9IGxvY2F0aW9uLmhyZWY7XG5cdFx0Y29uc3Qgc2VydmljZUlkID0gd2luZG93LnRpbnlDcHQuUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpIHx8IG51bGw7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdGxldCB1cmxSZXR1cm4gPSAnJztcblx0XG5cdFx0aWYoIXRoaXMuZGVidWcgJiYgdGhpcy5QaWFuby5pc0RlZmluZWQpIHtcblx0XHRcdHVybFJldHVybiA9IGVuY29kZVVSSUNvbXBvbmVudChcblx0XHRcdFx0dXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gKyAnP2NvZGlnb1Byb2R1dG89JyArICB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKSBcblx0XHRcdFx0KyAnJnNlcnZpY2VJZD0nICsgc2VydmljZUlkXG5cdFx0XHRcdCsgJyZhbWJpZW50ZVV0aWxpemFkbz0nICsgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm9cblx0XHRcdFx0KyAnJm5vbWVQcm9kdXRvPScgKyB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKClcblx0XHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxuXHRcdFx0KTtcblx0XG5cdFx0XHRpZih0eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1jYWRhc3Ryby8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1sb2dpbi8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cbiAgZ2V0IHRlbXBsYXRlVmFycygpIHtcblx0cmV0dXJuIHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkgeyBcblx0Y29uc3QgdGVtcGxhdGUgPSBgXG5cdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnN8UmFsZXdheSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZVwiIGlkPSR7dGhpcy5wYXl3YWxsSWR9PiBcblx0XHRcdDxoMSBjbGFzcyA9XCJwYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGVcIj48c3BhbiBjbGFzcz1wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGUtZmlyc3RfbGluZT4ke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfTwvc3Bhbj48YnI+PHNwYW4gY2xhc3M9cGF5d2FsbC1jcHQtaW5saW5lLXRpdGxlLXNlY29uZF9saW5lPiR7dGhpcy50ZW1wbGF0ZVZhcnMuc3VidGl0bGV9PC9zcGFuPjwvaDE+XG5cblx0XHRcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLmJ1dHRvbkxpbmt9XCI+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtYnV0dG9uXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtc3BhblwiPiR7dGhpcy50ZW1wbGF0ZVZhcnMuYnV0dG9uVGV4dH08L3NwYW4+XG5cdFx0XHRcdDwvYnV0dG9uPiBcblx0XHRcdDwvYT5cblx0XHRcdDxwIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLXBcIj4ke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luUHJlVGV4dH08YSBocmVmPVwiJHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoKX1cIiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1hXCI+JHt0aGlzLnRlbXBsYXRlVmFycy5sb2dpblRleHR9PC9hPjwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtb2ZmZXJcIj5cblx0XHRcdDxhIGhyZWY9JHt0aGlzLnRlbXBsYXRlVmFycy5vZmZlckxpbmt9PlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMuaW1hZ2VNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMzc1cHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmltYWdlRGVza31cIiBtZWRpYT1cIihtaW4td2lkdGg6IDM3NHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtaW1nXCIgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5pbWFnZUxpbmt9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcblx0ICByZXR1cm4gYFxuXHQgIDxzdHlsZT5cblx0ICAucGF5d2FsbC1jcHQtaW5saW5le21hcmdpbjogMCBhdXRvIDQwcHg7cGFkZGluZzoyMHB4O2JvcmRlci1yYWRpdXM6IDRweDtib3JkZXI6IHNvbGlkIDFweCAjZGJkZGUxO2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjU7fS5wYXl3YWxsLWNwdC1pbmxpbmUtb3BhY2l0eXtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLGhzbGEoMCwwJSwxMDAlLDApIDAsI2ZmZiA0MCUsI2ZmZiAxMDAlKTtwb3NpdGlvbjogYWJzb2x1dGU7Ym90dG9tOiAwO3dpZHRoOiAxMDAlO2hlaWdodDogNThweDtvdmVyZmxvdzogaGlkZGVuO30ucGF5d2FsbC1jcHQtaW5saW5lLXRpdGxle21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87IG1hcmdpbi1ib3R0b206MzBweDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OlJhbGV3YXk7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6MS4yO2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojMzI1ZTk0fVxuXHQgIC5wYXl3YWxsLWNwdC1pbmxpbmUtYnV0dG9ue2N1cnNvcjpwb2ludGVyO21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWJvdHRvbTozMHB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MjU2cHg7aGVpZ2h0OjQ4cHg7YmFja2dyb3VuZC1jb2xvcjojZjU5YzAwO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjpzb2xpZCAzcHggI2Y1OWMwMDt9XG5cdCAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI0cHgpIHtcblx0XHQucGF5d2FsbC1jcHQtaW5saW5lLWJ1dHRvbiB7IHdpZHRoOiAzNTZweDsgfVxuXHQgfSAgXG5cdCAucGF5d2FsbC1jcHQtaW5saW5lLWltZyB7bWFyZ2luOiBhdXRvO3dpZHRoOiA4MGVtO30ucGF5d2FsbC1jcHQtaW5saW5lLXNwYW4ge2ZvbnQtZmFtaWx5Ok9wZW4gU2Fucztmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjM4O2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmO30ucGF5d2FsbC1jcHQtaW5saW5lLXB7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tYm90dG9uOjMwcHg7ZGlzcGxheTpibG9jaztmb250LWZhbWlseTpSYWxld2F5O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuMTQ7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM3MDcwNzA7fS5wYXl3YWxsLWNwdC1pbmxpbmUtYXtmb250LXdlaWdodDo3MDA7Y29sb3I6IzMyNWU5NDt9LnBheXdhbGwtY3B0LWlubGluZS1vZmZlcnttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO2JhY2tncm91bmQtY29sb3I6I2ZmZjt9IFxuXHQgIDwvc3R5bGU+YFxuICB9XG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vSGVscGVycyc7XG5pbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4uL0dBJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbEdBTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xuICAgIHRoaXMuR0EgPSBuZXcgR0FNb2R1bGUoKTtcblxuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1ldHJpY3MgPSB7XG4gICAgICAgIHBheXdhbGw6IHt9LFxuICAgICAgICBmYjoge1xuICAgICAgICAgICAgcGl4ZWw6IHt9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5wYXl3YWxsVHlwZSgpO1xuICB9XG5cbiAgcGF5d2FsbExvYWQoKSB7XG4gICAgaWYoIXRoaXMuUGlhbm8uaXNEZWZpbmVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3QgX1BpYW5vID0gdGhpcy5QaWFuby5jb250ZW50O1xuXG4gICAgdGhpcy5HQS5zZXRFdmVudHModGhpcy5tZXRyaWNzLnBheXdhbGwudmlld05hbWUsIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUpO1xuICAgIEhlbHBlcnMuc2V0Q29va2llKF9QaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG4gIH1cblxuICB0cmlnZ2VyKGVsZW1lbnQpIHtcbiAgICBpZih0aGlzLmRpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzZXRVdHAgPSBlbGVtZW50LmRhdGFzZXQuZ2FSZXNldHV0cCB8fCBudWxsO1xuICAgIGNvbnN0IGltYWdlVG9wID0gZWxlbWVudC5kYXRhc2V0LmdhSW1hZ2VQb3NpdGlvbjtcbiAgICBjb25zdCBsYWJlbCA9IChpbWFnZVRvcCA9PT0gJ3RvcCcpID8gZWxlbWVudC5kYXRhc2V0LmdhTGFiZWwgKyB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA6IGVsZW1lbnQuZGF0YXNldC5nYUxhYmVsO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGV2ZW50OiAnRXZlbnRvR0EnLFxuICAgICAgZXZlbnRvR0FDYXRlZ29yaWE6IHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUsXG4gICAgICBldmVudG9HQUFjYW86IGVsZW1lbnQuZGF0YXNldC5nYUFjdGlvbiB8fCBhY3Rpb24sXG4gICAgICBldmVudG9HQVJvdHVsbzogbGFiZWwsXG4gICAgICBldmVudG9HQVZhbG9yOiAwLFxuICAgICAgZXZlbnRvR0FJbnRlcmFjYW86IGZhbHNlLFxuICAgIH07XG5cbiAgICBpZiAocmVzZXRVdHApXG4gICAgICAgIHRoaXMuUGlhbm8ucmVzZXRVdHAoKTtcblxuICAgIHRoaXMuc2V0RGF0YWxheWVyKGRhdGEpO1xuICB9XG5cbiAgcGF5d2FsbFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9ICggKHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsICE9PSAndW5kZWZpbmVkJykgJiYgd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwpXG4gICAgICA/IHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsLnRvTG93ZXJDYXNlKClcbiAgICAgIDogJ3BheXdhbGwnO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0V4aWJpY2FvIFJlZ2lzdGVyJ1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ1JlZ2lzdGVyIGNvbXVtJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQ2FkYXN0cmUtc2UnO1xuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3UmVnaXN0ZXJXYWxsJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdleGNsdXNpdm8nOlxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC52aWV3TmFtZSA9ICdFeGliaWNhbyBSZWdpc3RlcidcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBleGNsdXNpdm8nO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3TG9naW5FeGNsdXNpdm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BheXdhbGwnOlxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC52aWV3TmFtZSA9ICdCYXJyZWlyYSdcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdCYXJyZWlyYSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0Fzc2luZSBhZ29yYSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdQYXl3YWxsRXhjbHVzaXZvJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0RGF0YWxheWVyKGRhdGEgPSB7fSkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgIGRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFBpYW5vTW9kdWxlIGZyb20gJy4uL1BpYW5vJztcbmltcG9ydCBQYXl3YWxsR0FNb2R1bGUgZnJvbSAnLi9QYXl3YWxsLWdhJztcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi4vU3dnJztcbmltcG9ydCBGYk1vZHVsZSBmcm9tICcuLi9GQic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheXdhbGxDcHQgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuXHR0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XG5cdHRoaXMuR0EgPSBuZXcgUGF5d2FsbEdBTW9kdWxlKCk7XG5cdHRoaXMuU1dHID0gbmV3IFN3Z01vZHVsZSgpO1xuXHR0aGlzLkZCID0gbmV3IEZiTW9kdWxlKHRoaXMuR0EubWV0cmljcy5mYik7XG5cblx0dGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnLnBheXdhbGw7XG5cdHRoaXMuZG9tYWluID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLyc7XHRcblx0dGhpcy5zZXRUZW1wbGF0ZVNldHRpbmdzKCgpID0+IHtcblx0XHR0aGlzLmluaXQoKTsgXG5cdH0pO1xuXG5cdHdpbmRvdy5QYXl3YWxsQ3B0ID0gdGhpcztcblxuXHR3aW5kb3cudGlueUNwdC5QYXl3YWxsID0ge1xuXHRcdGRvbWFpbjogdGhpcy5kb21haW4sXG5cdFx0R0E6IHRoaXMuR0EubWV0cmljcyxcblx0fTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlU2V0dGluZ3MoY2FsbGJhY2spIHtcblx0XHRsZXQgdGVtcGxhdGVTZXR0aW5ncyA9IHtcblx0XHRcdHRlbXBsYXRlOiAnZGVmYXVsdCcsXG5cdFx0XHRhc3NldHNQYXRoOiAnJyxcblx0XHRcdGRpc3BsYXk6IG51bGwsXG5cdFx0XHRwcm9kdWN0Q2xhc3M6IHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyA/IGBwYXl3YWxsLWNwdC0ke25vbWVQcm9kdXRvUGlhbm99YCA6ICdwYXl3YWxsLWNwdC1vZ2xvYm8nLFxuXHRcdFx0dGl0bGU6ICdFc3NlIGNvbnRlw7pkbyDDqSBvIHTDrXR1bG8uJyxcblx0XHRcdHRhcmdldEJsYW5rOiB0cnVlLFxuXHRcdFx0dG9wTW9iaTogJycsXG5cdFx0XHR0b3BEZXNrOiAnJyxcblx0XHRcdHRvcExpbms6ICcnLFxuXHRcdFx0bGVmdE1vYmk6ICcnLFxuXHRcdFx0bGVmdERlc2s6ICcnLFxuXHRcdFx0bGVmdExpbms6ICcnLFxuXHRcdFx0cmlnaHRNb2JpOiAnJyxcblx0XHRcdHJpZ2h0RGVzazogJycsXG5cdFx0XHRyaWdodExpbms6ICcnXG5cdFx0fTtcblxuXHRcdHRlbXBsYXRlU2V0dGluZ3MuaGlkZUxvZ2luQXJlYSA9IGZhbHNlO1xuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5UZXh0ID0gJ0Zhw6dhIGxvZ2luJztcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luUHJlVGV4dCA9ICdKw6EgcG9zc3VpIGNhZGFzdHJvPyc7XG5cdFx0XG5cdFx0d2luZG93LmdsYlBheXdhbGwgPSAod2luZG93LmdsYlBheXdhbGwpID8gIE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlU2V0dGluZ3MsIHdpbmRvdy5nbGJQYXl3YWxsKSA6IHRlbXBsYXRlU2V0dGluZ3M7IFxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGFnID0gYCR7d2luZG93LmdsYlBheXdhbGwubG9naW5QcmVUZXh0fSA8YSBocmVmPVwiJHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoKX1cIiBkYXRhLWlzLWxvZ2luPVwidHJ1ZVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayAyIC0gRmHDp2EgbG9naW5cIiBkYXRhLWdhLXJlc2V0VXRwPVwiZmFsc2VcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiICR7d2luZG93LmdsYlBheXdhbGwudGFyZ2V0Qmxhbmt9IFwiPiR7d2luZG93LmdsYlBheXdhbGwubG9naW5UZXh0fTwvYT5gO1xuXG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSlcblx0XHRcdHRoaXMuY2xlYXJMb2dpbkFyZWEoKTtcblxuXHRcdGlmKHRoaXMuZGVidWcgKSBcblx0XHRcdHRoaXMuc2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCk7XG5cdFx0XG5cdFx0Y2FsbGJhY2soKTtcblx0fVxuXG5cdGNsZWFyTG9naW5BcmVhKCkge1xuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsKSB7IFxuXHRcdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSAnJztcblx0XHR9XG5cdH1cblxuXHRzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKSB7XG5cdFx0bGV0IG9iaiA9IHt9O1xuXHRcdG9iai50b3BNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTUwJztcblx0XHRvYmoudG9wRGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODA0eDEyOCc7XG5cdFx0b2JqLnRvcExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wxJztcblx0XHRvYmoubGVmdE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHg1MDAnO1xuXHRcdG9iai5sZWZ0RGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAyeDUxNSc7XG5cdFx0b2JqLmxlZnRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMic7XG5cdFx0b2JqLnJpZ2h0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XG5cdFx0b2JqLnJpZ2h0RGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAyeDUxNSc7XG5cdFx0b2JqLnJpZ2h0TGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDMnO1xuXG5cdFx0d2luZG93LmdsYlBheXdhbGwgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuZ2xiUGF5d2FsbCwgb2JqKTtcblx0fVxuIFxuICBib2R5QWRqdXN0KCkge1xuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnaGlkZGVuJywgJ2ltcG9ydGFudCcpO1xuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnZml4ZWQnLCAnaW1wb3J0YW50Jyk7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsICcxMDAlJywgJ2ltcG9ydGFudCcpO1xuICB9XG5cbiAgc2V0RWxXcmFwcGVyKCkge1xuXHR0aGlzLmVsQ3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0Jyk7XG4gIH1cblxuICByZW1vdmVFbGVtZW50cygpIHtcblx0dGhpcy5zZXRFbFdyYXBwZXIoKTtcblxuXHRpZih0aGlzLmVsQ3B0KVxuXHRcdHRoaXMuZWxDcHQucmVtb3ZlKCk7XG5cblx0Y29uc3QgZWxUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm90ZWN0ZWQtY29udGVudCwgI2luZm9hcnRlLW1haW4tY29udGVudCcpO1xuXG5cdGVsVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0ICBlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcbiAgfVxuXG4gIGNyZWF0ZVRlbXBsYXRlKCkge1xuXHR0aGlzLmVsQm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdGhpcy5ib2R5QWRqdXN0KCk7XG4gICAgdGhpcy5yZW1vdmVFbGVtZW50cygpO1xuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMuY3NzTWluaWZpZWQpOyBcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnRlbXBsYXRlKTsgXG5cdHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1x0XG4gICAgXG4gICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKTtcbiAgICAgICAgfSk7XG5cdH1cblxuXHR0aGlzLkdBLnBheXdhbGxMb2FkKCk7XG4gIH1cblxuICBhY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCkge1xuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xuXHR0aGlzLmVsQ3B0V3JhcCA9IHRoaXMuZWxDcHQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0LXdyYXAnKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRjb25zdCBlbEJvZHlIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyA0O1xuXHRcdGNvbnN0IGVsQ3B0V3JhcEhlaWdodCA9IHRoaXMuZWxDcHRXcmFwLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3QgY3VycmVudFRvcCA9ICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIFxuICAgICAgICA/IE1hdGguYWJzKCBlbEJvZHlIZWlnaHQvMiApXG4gICAgICAgIDogTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yICk7XG5cdFx0Y29uc3QgdG9wV2l0aEZ1bGxFbGVtZW50ID0gKGVsQm9keUhlaWdodCAtIGVsQ3B0V3JhcEhlaWdodCk7XG5cblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke2N1cnJlbnRUb3B9cHhgO1xuXHRcdHRoaXMuZWxDcHQuc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0dGhpcy5lbENwdC5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTk5O1xuXG5cdFx0dGhpcy5ldnRXaGVlbChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xuXHRcdHRoaXMuZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KTtcblx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpO1xuXG5cdFx0dGhpcy5GQi5zZXRQaXhlbFR5cGUoKTtcblx0fSwgMTAwMCk7XG4gIH1cblxuICBhY3RpdmVFdmVudHMoKSB7XG5cdGNvbnN0IGNsaWNrVGFyZ2V0cyA9IHRoaXMuZWxDcHRXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblxuXHRjbGlja1RhcmdldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7IFxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbiA9IEJvb2xlYW4oZWxlbWVudC5kYXRhc2V0LmlzTG9naW4pIHx8IGZhbHNlO1xuXHRcdFx0Y29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBmYWxzZSA7IFxuXHRcdFx0Y29uc3QgaXNVcmxTd2cgPSAodXJsKSA/IHVybC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdvZmVydGFzd2cnKSA6IGZhbHNlO1xuXHRcdFx0Y29uc3Qgbm90QmxhbmsgPSBlbGVtZW50LmRhdGFzZXQuaHJlZlRhcmdldCB8fCB0cnVlOyBcblx0XHRcdFxuXHRcdFx0dGhpcy5HQS50cmlnZ2VyKGVsZW1lbnQpOyBcblxuXHRcdFx0aWYoIWlzTG9naW4gJiYgaXNVcmxTd2cpXG5cdFx0XHRcdHRoaXMuU1dHLnNldFV0bXMoKTsgIFxuXG4gICAgICAgICAgICBpZiAodXJsICYmICFpc1VybFN3ZykgeyBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBub3RCbGFuayA/ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybCkgOiB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG5cdFx0fS5iaW5kKHRoaXMpKTtcblx0fSk7XG4gIH1cblxuICBldnRXaGVlbChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpIHtcblx0bGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J3doZWVsJyxcblx0XHRmdW5jdGlvbihldnQpIHsgXG5cdFx0ICBjb25zdCBzdGVwID0gY3VycmVudFRvcCAvIDEwMDtcblx0XHQgIGNvbnN0IG11bHRpcGxpZXIgPSAyMDtcblxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPj0gMSkge1xuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgLSBzdGVwICogbXVsdGlwbGllcjsgXG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xuICBcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcblx0XHQgIH1cbiAgXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA8PSAtMSkge1xuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgKyBzdGVwICogbXVsdGlwbGllcjtcblx0XHRcdG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcbiAgXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG5cdFx0ICB9XG5cdFx0fS5iaW5kKHRoaXMpXG5cdCAgKTtcbiAgfVxuXG4gIGV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xuICAgIGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xuICAgIGxldCB0b3VjaHN0YXJ0WSA9IDA7XG4gICAgbGV0IHRvdWNoZW5kWSA9IDA7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgIHRvdWNoc3RhcnRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG5cdH0pO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAyMDtcbiAgICAgICAgdG91Y2hlbmRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG5cbiAgICAgICAgaWYgKHRvdWNoZW5kWSA8IHRvdWNoc3RhcnRZKSB7IFxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRvdWNoc3RhcnRZKSAtIE1hdGguYWJzKHRvdWNoZW5kWSk7XG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCAtIGRpZmY7IFxuICAgICAgICAgICAgbmV3dG9wID0gZWxUb3AgPCB0b3BXaXRoRnVsbEVsZW1lbnQgPyB0b3BXaXRoRnVsbEVsZW1lbnQgOiBlbFRvcDtcblxuICAgICAgICAgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdWNoZW5kWSA+IHRvdWNoc3RhcnRZKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hlbmRZIC0gdG91Y2hzdGFydFk7XG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCArIGRpZmY7IFxuXHRcdCAgICBuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XG5cblx0XHQgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuICAgICAgICB9XG5cdH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRVcmxMb2dpblJlZ2lzdGVyKHR5cGUgPSAnJykge1xuXHRjb25zdCB1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byA9IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09PSAncHJkJyA/ICdodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJyA6ICdodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJztcblx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcblx0Y29uc3Qgc2VydmljZUlkID0gd2luZG93LnRpbnlDcHQuUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpIHx8IG51bGw7XG5cdGxldCBzdHIgPSAnJztcblx0bGV0IHVybFJldHVybiA9ICcnO1xuXG5cdGlmKCF0aGlzLmRlYnVnICYmIHRoaXMuUGlhbm8uaXNEZWZpbmVkKSB7XG5cdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0dXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gKyAnP2NvZGlnb1Byb2R1dG89JyArICB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKSBcblx0XHRcdCsgJyZzZXJ2aWNlSWQ9JyArIHNlcnZpY2VJZFxuXHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xuXHRcdFx0KyAnJm5vbWVQcm9kdXRvPScgKyB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKClcblx0XHRcdCsgJyZ1cmxSZXRvcm5vPScgKyB1cmlcblx0XHQpO1xuXG5cdFx0aWYodHlwZSA9PT0gJ3JlZ2lzdGVyJykge1xuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59Y2FkYXN0cm8vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1sb2dpbi8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xuXHRyZXR1cm4gd2luZG93LmdsYlBheXdhbGw7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7IFxuXHRjb25zdCB0ZW1wbGF0ZSA9IGBcblx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQgJHt0aGlzLnRlbXBsYXRlVmFycy5wcm9kdWN0Q2xhc3N9XCI+IFxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwXCI+XG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZFwiPlxuXHRcdFx0JHt0aGlzLnRlbXBsYXRlVmFycy50aXRsZX1cblx0XHQ8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190b3BcIj5cblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTGlua31cIiBkYXRhLWdhLWltYWdlLXBvc2l0aW9uPVwidG9wXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDEgLVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BEZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyICR7d2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSA/ICdpcy1oaWRlJyA6ICcnfVwiPlxuXHRcdCAgXHQke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGFnfVxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fbGVmdFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TGlua31cIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgNCAtIEJhbm5lciBvZmVydGEgZXNxdWVyZGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19yaWdodFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodExpbmt9XCIgIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA1IC0gQmFubmVyIG9mZXJ0YSBkaXJlaXRhXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodE1vYml9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0PC9kaXY+XG5cdCAgPC9kaXY+XG5cdCAgYDtcblxuXHRyZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBnZXQgY3NzTWluaWZpZWQoKSB7XG5cdCAgcmV0dXJuIGA8c3R5bGU+XG5cdCAgLnBheXdhbGwtY3B0e29wYWNpdHk6MDtwb3NpdGlvbjpmaXhlZDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwdnc7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWZ9LnBheXdhbGwtY3B0LC5wYXl3YWxsLWNwdCAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfS5wYXl3YWxsLWNwdCBhe2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWRlY29yYXRpb246bm9uZX0ucGF5d2FsbC1jcHQgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wYXl3YWxsLWNwdCAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdCBhe2NvbG9yOiMwMDB9LnBheXdhbGwtY3B0LW9nbG9ibyAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdC1vZ2xvYm8gYXtjb2xvcjojMzI1ZTk0fS5wYXl3YWxsLWNwdC13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1ib3R0b206MjBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LnBheXdhbGwtY3B0LXdyYXB7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn19LnBheXdhbGwtY3B0LXdyYXAgaW1ne2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LnBheXdhbGwtY3B0LXdyYXBfX3RvcHtwYWRkaW5nLXRvcDoyMHB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWR7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMCAwO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXJ7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMDtjb2xvcjojNzY3Njc2O2ZvbnQtc2l6ZToxNnB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlci5pcy1oaWRle3BhZGRpbmctYm90dG9tOjB9XG5cdCAgPC9zdHlsZT5gO1xuICB9XG5cbiAgaW5pdCgpIHsgXG5cdCAgY29uc3QgZGVsYXlUaW1lciA9ICh3aW5kb3cuZ2xiUGF5d2FsbCAmJiB3aW5kb3cuZ2xiUGF5d2FsbC5kZWxheVRpbWVyKSA/IHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIgKiAxMDAwIDogMDtcblxuXHRzZXRUaW1lb3V0KCgpID0+e1xuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGUoKTtcblx0fSwgZGVsYXlUaW1lcik7XG4gIH1cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xuaW1wb3J0IFRpbnlNb2R1bGUgZnJvbSAnLi9UaW55JztcbmltcG9ydCBHQU1vZHVsZSBmcm9tICcuL0dBJztcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi9Td2cnO1xuaW1wb3J0IFBheXdhbGxDcHQgZnJvbSAnLi9jcG50LXBheXdhbGwvUGF5d2FsbCc7XG5pbXBvcnQgUGF5d2FsbENwdElubGluZSBmcm9tICcuL2NwbnQtcGF5d2FsbC1pbmxpbmUvUGF5d2FsbCc7XG5cbmNvbnN0IFRpbnkgPSBuZXcgVGlueU1vZHVsZSgpO1xuY29uc3QgR0EgPSBuZXcgR0FNb2R1bGUoKTtcblxuR0Euc2V0R2xvYmFsVmFycygpO1xuXG5QaWFuby50eXBlUGF5d2FsbCA9IG51bGw7XG5QaWFuby52YXJpYXZlaXMgPSB7XG5cdGFtYmllbnRlc0FjZWl0b3M6IFwiaW50LHFsdCxwcmRcIixcblx0c3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc286IFwiNDAwLDQwNCw0MDYsNTAwLDUwMiw1MDMsNTA0XCIsXG5cdHN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IFwiNDAwLDQwNCw1MDAsNTAyLDUwMyw1MDRcIixcblx0aXNDYWxsYmFja01ldHRlckV4cGlyZWQ6IGZhbHNlLFxuXHRjb25zdGFudGU6IHtcblx0XHRjb29raWU6IHtcblx0XHRcdEdDT006ICdHTEJJRCcsXG5cdFx0XHRVVFA6ICdfdXRwJyxcblx0XHRcdFJUSUVYOiAnX3J0aWV4Jyxcblx0XHRcdEFNQklFTlRFOiAnYW1iaWVudGVQaWFubycsXG5cdFx0XHRTQVZFX1NVQlNDUklQVElPTjogJ3NhdmVTdWJzY3JpcHRpb25Db29raWUnLFxuXHRcdFx0Q1JFQVRFRF9HTE9CT0lEOiAnY3JlYXRlZEdsb2JvSWQnLFxuXHRcdFx0R0xPQk9JRF9NRVNTQUdFOiAnZ2xvYm9JZE1lc3NhZ2UnXG5cdFx0fSxcblx0XHRtZXRyaWNhczoge1xuXHRcdFx0RVZFTlRPX1NFTV9BQ0FPOiAnc2VtIGFjYW8nLFxuXHRcdFx0RVJSTzogJ0Vycm8nXG5cdFx0fSxcblx0XHRrcnV4OiB7XG5cdFx0XHRTRUdNRU5UQUNPRVM6ICdreGdsb2JvX3NlZ3MnLFxuXHRcdFx0S1JVWExJR0FETzogJ2tydXgtbGlnYWRvJ1xuXHRcdH0sXG5cdFx0dXRpbDoge1xuXHRcdFx0SVA6IFwiMTI3LjAuMC4xXCIsXG5cdFx0XHRBTUJJRU5URTogXCJhbWJpZW50ZS1kZXNlamFkb1wiLFxuXHRcdFx0REVCVUc6IFwiZGVidWctcGlhbm9cIlxuXHRcdH1cblx0fSxcblx0aXNDb250ZXVkb0V4Y2x1c2l2bzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0Z2V0QW1iaWVudGVQaWFubzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2YoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkpID4gLTEpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSwgMSk7XG5cdFx0XHRyZXR1cm4gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSk7XG5cdFx0fVxuXHRcdGlmIChQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSA9PSAnZmFsc2UnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgXCJcIiwgLTEpO1xuXHRcdH1cblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpKSB7XG5cdFx0XHRyZXR1cm4gSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpO1xuXHRcdH07XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2Yod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8pID4gLTEgPyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA6ICdwcmQnO1xuXHR9LFxuXHRnZXRUaXBvQ29udGV1ZG9QaWFubzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy50aXBvQ29udGV1ZG9QaWFubztcblx0fSxcblx0ZXhlY3V0b3VQYWdldmlldzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5leGVjdXRvdVBhZ2V2aWV3ID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRnZXROb21lUHJvZHV0bzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF3aW5kb3cubm9tZVByb2R1dG9QaWFubyl7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIk5vbWUgZG8gcHJvZHV0byBuw6NvIGRlZmluaWRvLlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3cubm9tZVByb2R1dG9QaWFubztcblx0fSxcblx0Z2V0U2Vydmljb0lkOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaWQgPSAnMDAwMCc7XG5cblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ29nbG9ibydcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYmxvZ3MnXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2tvZ3V0J1xuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdhY2Vydm8nXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2pvcm5hbGRpZ2l0YWwnXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2Jsb2dBbmFsaXRpY28nKXtcblx0XHRcdHJldHVybiBpZCA9ICczOTgxJztcblx0XHR9XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgJiYgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdtb25ldCcpe1xuXHRcdFx0cmV0dXJuIGlkID0gJzY2MTgnO1xuXHRcdH1lbHNlIGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpKXtcblx0XHRcdHJldHVybiBpZCA9ICc2Njk3Jztcblx0XHR9XG5cblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3ZhbG9yJyl7XG4gICAgICAgICAgICByZXR1cm4gaWQgPSAnNjY2OCc7XG5cdFx0fVxuXG5cdFx0aWYgKGlkID09PSAnMDAwMCcpXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignU2VydmljZUlEIG7Do28gZGVmaW5pZG8uJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZiArXG5cdFx0XHRcdCcgbm9tZVByb2R1dG86ICcgKyBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSApO1xuXG5cdFx0cmV0dXJuIGlkO1xuXHR9LFxuXHRnZXRDb2RpZ29Qcm9kdXRvOiBmdW5jdGlvbigpe1xuXHRcdHZhciBub21lUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpO1xuXHRcdHN3aXRjaCAobm9tZVByb2R1dG8pe1xuXHRcdFx0Y2FzZSAnb2dsb2JvJzpcblx0XHRcdGNhc2UgJ2Jsb2dzJzpcblx0XHRcdGNhc2UgJ2tvZ3V0Jzpcblx0XHRcdGNhc2UgJ2Jsb2dBbmFsaXRpY28nOlxuXHRcdFx0XHRyZXR1cm4gJ09HMDMnO1xuXHRcdFx0Y2FzZSAnYWNlcnZvJzpcblx0XHRcdFx0cmV0dXJuICdPRzA0Jztcblx0XHRcdGNhc2UgJ2pvcm5hbGRpZ2l0YWwnOlxuXHRcdFx0XHRyZXR1cm4gJ09HMDEnO1xuXHRcdFx0Y2FzZSAnYXV0by1lc3BvcnRlJzpcblx0XHRcdGNhc2UgJ2Vwb2NhJzpcblx0XHRcdGNhc2UgJ3ZvZ3VlJzpcblx0XHRcdGNhc2UgJ2dsYW1vdXInOlxuXHRcdFx0Y2FzZSAnY2FzYS12b2d1ZSc6XG5cdFx0XHRjYXNlICdtYXJpZS1jbGFpcmUnOlxuXHRcdFx0Y2FzZSAnZ2xvYm8tcnVyYWwnOlxuXHRcdFx0Y2FzZSAnZ3EnOlxuXHRcdFx0Y2FzZSAnbW9uZXQnOlxuXHRcdFx0Y2FzZSAnY3Jlc2Nlcic6XG5cdFx0XHRjYXNlICdnYWxpbGV1Jzpcblx0XHRcdFx0cmV0dXJuIG5vbWVQcm9kdXRvO1xuXHRcdFx0Y2FzZSAnY2FzYS1lLWphcmRpbSc6XG5cdFx0XHRcdHJldHVybiAnY2FzYS1qYXJkaW0nO1xuXHRcdFx0Y2FzZSAncXVlbS1hY29udGVjZSc6XG5cdFx0XHRcdHJldHVybiAncXVlbSc7XG5cdFx0XHRjYXNlICd2YWxvcic6XG5cdFx0XHRcdHJldHVybiAndmFsb3JkaWdpdGFsJztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQW8gb2J0ZXIgY8OzZGlnbyBkbyBwcm9kdXRvXCIsIG5vbWVQcm9kdXRvICsgXCIgLSBcIiArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0XHRyZXR1cm4gJ2Vycm9yJztcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLmphbmVsYUFub25pbWEgPSB7XG5cdHJldHJ5IDogZnVuY3Rpb24oaXNEb25lLCBuZXh0KSB7XG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xuXHRcdHZhciBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VycmVudF90cmlhbCsrID4gbWF4X3JldHJ5KSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQxMFxuXHRcdCk7XG5cdH0sXG5cdGlzSUUxME9yTGF0ZXIgOiBmdW5jdGlvbih1c2VyX2FnZW50KSB7XG5cdFx0bGV0IHVhID0gdXNlcl9hZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xuXG5cdFx0aWYgKHVhLmluZGV4T2YoJ21zaWUnKSA9PT0gMCAmJiB1YS5pbmRleE9mKCd0cmlkZW50JykgPT09IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKG1hdGNoICYmIHBhcnNlSW50KG1hdGNoWzFdLCAxMCkgPj0gMTApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGRldGVjdFByaXZhdGVNb2RlIDogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgaXNfcHJpdmF0ZTtcblxuXHRcdGlmICh3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0pIHtcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbShcblx0XHRcdFx0d2luZG93LlRFTVBPUkFSWSwgMSxcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cuaW5kZXhlZERCICYmIC9GaXJlZm94Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0dmFyIGRiO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGIgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oJ3Rlc3QnKTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBpc19wcml2YXRlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLnJldHJ5KFxuXHRcdFx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkYi5yZWFkeVN0YXRlID09PSAnZG9uZScgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcblx0XHRcdFx0XHRcdGlmICghaXNfdGltZW91dCkge1xuXHRcdFx0XHRcdFx0XHRpc19wcml2YXRlID0gZGIucmVzdWx0ID8gZmFsc2UgOiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKFBpYW5vLmphbmVsYUFub25pbWEuaXNJRTEwT3JMYXRlcih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghd2luZG93LmluZGV4ZWREQikge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiAvU2FmYXJpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgMSk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3QnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLnJldHJ5KFxuXHRcdFx0ZnVuY3Rpb24gaXNEb25lKCkge1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGlzX3ByaXZhdGUgIT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdGZ1bmN0aW9uIG5leHQoaXNfdGltZW91dCkge1xuXHRcdFx0XHRjYWxsYmFjayhpc19wcml2YXRlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59O1xuXG5QaWFuby5rcnV4ID0ge1xuXHR0ZW06IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGxpZ2FkbzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPO1xuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnICYmIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vICE9IFwicHJkXCIpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnIHx8IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09IFwicHJkXCIpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgXCJcIiwgLTEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETykgPT0gXCJmYWxzZVwiKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRvYnRlbVNlZ21lbnRhY2FvOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8ua3J1eC50ZW0oKSAmJiBQaWFuby5rcnV4LmxpZ2FkbygpKSB7XG5cdFx0XHR2YXIgc2VnbWVudGFjb2VzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpLnNwbGl0KCcsJyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRhY29lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIHNlZ21lbnRhY29lc1tpXSwgc2VnbWVudGFjb2VzW2ldXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5yZWdpb25hbGl6YWNhbyA9IHtcblx0Z2V0UmVnaW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIga3J1eEdlbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdreGdsb2JvX2dlbycpO1xuXHRcdGlmIChrcnV4R2VvKSB7XG5cdFx0XHRrcnV4R2VvLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSBpdGVtLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBkYXRhWzBdO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBkYXRhWzFdO1xuXHRcdFx0XHRpZiAoa2V5ID09PSAncmVnaW9uJykge1xuXHRcdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJyZWdpb25cIiwgdmFsdWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5tZXRyaWNhcyA9IHtcblx0ZW52aWFFdmVudG9zR0E6IGZ1bmN0aW9uKF9HQUFjYW8sIF9HQVJvdHVsbykgeyAvL1RPRE86IGFycXVpdm8gdGlueXBhc3MuanMsIGluc2VyaWRvIHBlbGEgUGlhbm8sIHV0aWxpemEgZXNzYSBmdW7Dp8Ojb1xuXHRcdGNvbnN0IGlzUHJvZHVjdFZhbG9yID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc1Byb2R1Y3RWYWxvcilcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ1BpYW5vJywgX0dBQWNhbywgX0dBUm90dWxvLCAsdHJ1ZV0pO1xuXHRcdGVsc2Vcblx0XHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubycsICdldmVudG9HQUFjYW8nOiBfR0FBY2FvLCAnZXZlbnRvR0FSb3R1bG8nOl9HQVJvdHVsb30pO1xuXHR9LFxuXG5cdG1vbnRhUm90dWxvR0E6IGZ1bmN0aW9uKCkgeyAvL1RPRE86IGF0IFBpYW5vIGFzIHNldEV4cGVyaWVuY2UoKSB8IENoZWNrIG9uIG9sZCB0aW55IGJlZm9yZSByZW1vdmVcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xuXHRcdH1cblx0XHRyZXR1cm4gXCIgXCI7XG5cdH0sXG5cdHNldExpbWl0ZUNvbnRhZ2VtOiBmdW5jdGlvbihtZXRyaWNhcykge1xuXHRcdHdpbmRvdy5fR0FMaW1pdGUgPSBcIi1cIjtcblx0XHR3aW5kb3cuX0dBQ29udGFnZW0gPSBcIi1cIjtcblxuXHRcdGlmKCFtZXRyaWNhcykgcmV0dXJuO1xuXG5cdFx0d2luZG93Ll9HQUNvbnRhZ2VtID0gXCJcIiArIG1ldHJpY2FzLnZpZXdzO1xuXG5cdFx0aWYgKHdpbmRvdy5fR0FDb250YWdlbS5sZW5ndGggPT0gMSkge1xuXHRcdFx0d2luZG93Ll9HQUNvbnRhZ2VtID0gXCIwXCIgKyB3aW5kb3cuX0dBQ29udGFnZW07XG5cdFx0fVxuXHRcdHdpbmRvdy5fR0FMaW1pdGUgPSBtZXRyaWNhcy5ub21lRXhwZXJpZW5jaWEgK1wiIDogXCIrIG1ldHJpY2FzLm1heFZpZXdzO1xuXHR9LFxuXHRpZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXI6IGZ1bmN0aW9uKHJlZ3Jhcykge1xuXHRcdHZhciBwYXNzYWdlbSA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUubWV0cmljYXMuRVZFTlRPX1NFTV9BQ0FPO1xuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkge1xuXHRcdFx0cGFzc2FnZW0gPSByZWdyYXMuZmx1eG8uaW5kZXhPZihcImhhcmR3YWxsXCIpICE9IC0xID8gJ3JlZ2lzdGVyLWhhcmR3YWxsLXBhc3NvdScgOiAncmVnaXN0ZXItY29udGFnZW0tcGFzc291Jztcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0fVxuXHRcdHJldHVybiBwYXNzYWdlbTtcblx0fSxcblx0ZXhlY3V0YUFwb3NQYWdldmlldzogZnVuY3Rpb24oZXhwaXJvdSkge1xuXHRcdGlmICghUGlhbm8udmFyaWF2ZWlzLmV4ZWN1dG91UGFnZXZpZXcoKSkge1xuXHRcdFx0d2luZG93LnJlZ3Jhc1RpbnkuZmx1eG8gPSB3aW5kb3cudHBDb250ZXh0ID8gdHBDb250ZXh0LnRvTG93ZXJDYXNlKCkgOiAnLSc7XG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSB3aW5kb3cubm9tZUV4cGVyaWVuY2lhID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA6ICcnO1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0TGltaXRlQ29udGFnZW0od2luZG93LnJlZ3Jhc1RpbnkpO1xuXHRcdFx0aWYgKGV4cGlyb3UgPT0gZmFsc2UpIEdBLnNldEV2ZW50cyhQaWFuby5tZXRyaWNhcy5pZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXIod2luZG93LnJlZ3Jhc1RpbnkpLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0ZXhlY3V0b3VQYWdldmlldyA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRzZXRhVmFyaWF2ZWlzOiBmdW5jdGlvbihpZExvZ2luLCB0aXBvTG9naW4sIGFzc2luYXR1cmFMb2dhZGEpe1xuXHRcdFBheXdhbGxBbmFseXRpY3MuaWRMb2dpbkFzc2luYW50ZSA9IGlkTG9naW47XG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MudGlwb0xvZ2luQXNzaW5hbnRlID0gdGlwb0xvZ2luO1xuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLmFzc2luYXR1cmFMb2dhZGEgPSBhc3NpbmF0dXJhTG9nYWRhO1xuXHR9XG59O1xuXG5cblBpYW5vLmJhbm5lciA9IHtcblx0bW9zdHJhckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92by1iYW5uZXItZm9vdGVyLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8uanNcIik7XG5cdH0sXG5cdG1vc3RyYXJBdmF0YXJIZWFkZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYXZhdGFyLWhlYWRlci1waWFuby5qc1wiKTtcblx0fSxcblx0Ym90dG9tRml4ZWQ6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XG5cdFx0d2luZG93LmdsYkJhbm5lckJvdHRvbSA9IHBhcmFtcztcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc3R5bGVzL2Jhbm5lci1ib3R0b20tZml4ZWQuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc2NyaXB0cy9iYW5uZXItYm90dG9tLWZpeGVkLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyU1dHOiBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBjc3MgPSBgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zdHlsZXMvc3R5bGUuY3NzJz5gO1xuXHRcdGNvbnN0IHNjcmlwdEpzID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc2NyaXB0L2FudW5jaW8tc3dnLmpzYDtcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKGNzcyk7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKHNjcmlwdEpzKTtcblx0fSxcblx0bW9zdHJhckhpZ2hsaWdodFNhbGU6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc2NyaXB0cy9oaWdobGlnaHQtc2FsZS5qc1wiKTtcblx0fSxcblx0bW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvdmFsb3Itc3Vic2NyaWJlLWJ1dHRvbi9cIit2ZXJzYW8rXCIvc2NyaXB0cy9zdWJzY3JpYmUtYnV0dG9uLmpzXCIpO1xuXHR9XG5cbn07XG5cblBpYW5vLnJlZ2lzdGVyID0ge1xuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZhLXRlbGEtcmVnaXN0ZXIuanNcIik7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdH1cbn07XG5cblBpYW5vLmhlbHBlciA9IHtcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbigpIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF82NWQxOTMwYTBiZGE0NzZiYThkM2MyNWM1MzcxZWMzZi9waWFuby9oZWxwZXIvcmVnaXN0ZXIuanNcIik7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdH1cbn07XG5cblBpYW5vLnBheXdhbGwgPSB7XG5cdHJlZGlyZWNpb25hckJhcnJlaXJhOiBmdW5jdGlvbih1cmwpIHtcblx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7fSwgMTAwMCk7XG5cdH0sXG5cdHNob3c6IGZ1bmN0aW9uKHR5cGVQYXl3YWxsID0gbnVsbCkge1xuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdHlwZVBheXdhbGw7XG5cblx0XHR0cnkge1xuXHRcdFx0bmV3IFBheXdhbGxDcHQoKTtcblx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y2F0Y2goZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbCAtIEVycm9yIG9uIGxvYWQnKVxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XG5cdFx0fVxuXHR9LFxuXHRhbmFseXRpYzogZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRuZXcgUGF5d2FsbENwdElubGluZSgpO1xuXHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdQYXl3YWxsQW5hbHl0aWMgLSBFcnJvciBvbiBsb2FkJywgZXJyKVxuXHRcdH1cblx0fVxufTtcblxuZnVuY3Rpb24gYW5hbHl0aWNhbFVuYmxvY2tlZEZvclBpYW5vKCkge1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FuYWx5dGljYWxVbmJsb2NrZWRGb3JQaWFubycpXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBhbmFseXRpY2FsQmxvY2tlZEZvclBpYW5vKCkge1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FuYWx5dGljYWxCbG9ja2VkRm9yUGlhbm8nKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gYW5hbHl0aWNhbFBvc3RJc09wZW5lZCgpIHtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhbmFseXRpY2FsUG9zdElzT3BlbmVkJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGFuYWx5dGljYWxQb3N0SXNMb2FkaW5nKCkge1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FuYWx5dGljYWxQb3N0SXNMb2FkaW5nJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRXhwZXJpZW5jZXNIYXNDaGFuZ2UoKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxldCBjb3VudCA9IDA7IFxuXHRcdFxuXHRcdGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKHdpbmRvdy50cCAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdCYmIHdpbmRvdy50cC5leHBlcmllbmNlXG5cdFx0XHQmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpXG5cdFx0XHQmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdFxuXHRcdFx0JiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBleHBlcmllbmNlcyA9IHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50c1xuXHRcdFx0XHRjb25zdCBleHBlcmllbmNlc0Nsb25lID0gQXJyYXkuZnJvbSh3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHMpXG5cdFx0XHRcdGNvbnN0IGV4cGVyaWVuY2VzQ2hhbmdlZCA9IE9iamVjdC5pcyhKU09OLnN0cmluZ2lmeShleHBlcmllbmNlcyksIEpTT04uc3RyaW5naWZ5KGV4cGVyaWVuY2VzQ2xvbmUpKVxuXG5cdFx0XHRcdGlmKGV4cGVyaWVuY2VzQ2hhbmdlZCkge1xuXHRcdFx0XHRcdGV4cGVyaWVuY2VzLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHRpZihpdGVtLmV2ZW50VHlwZSA9PT0gJ3J1bkpzJykge1xuXHRcdFx0XHRcdFx0XHRpZihpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQgIT09ICd1bmRlZmluZWQnICYmIChpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQuaW5jbHVkZXMoJ3BheXdhbGwuYW5hbHl0aWMnKSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihjb3VudCA9PT0gMTApIHtcblx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHR9XG5cdFx0fSwgMTAwKTtcblx0fSk7XG59XG5cblBpYW5vLmNoZWNrUGlhbm9BY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBjb3VudCA9IDBcblxuXHRsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG5cdFx0aWYod2luZG93LnRwICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICYmIHdpbmRvdy50cC5leHBlcmllbmNlXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKVxuICAgICAgICAgICYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0XG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzKVxuXHQgICAgIHtcblx0XHRcdFBpYW5vLmNoZWNrUGF5d2FsbCh3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHMpXG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmKGNvdW50ID09PSAxMCkge1xuXHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKVxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdFx0fVxuXG5cdFx0XHRjb3VudCsrXG5cdFx0fVxuXG5cdCAgfSwgNTAwKTtcblxufTsgXG5cblBpYW5vLmNoZWNrUGF5d2FsbCA9IGZ1bmN0aW9uKFBpYW5vUmVzdWx0RXZlbnRzID0gbnVsbCkge1xuICAgbGV0IGhhc1J1bkpzV2l0aFBheXdhbGwgPSBmYWxzZVxuXG5cdGlmKFBpYW5vUmVzdWx0RXZlbnRzKSB7XG4gICAgICAgIFBpYW5vUmVzdWx0RXZlbnRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLmV2ZW50VHlwZSA9PT0gJ3J1bkpzJykge1xuXHRcdFx0XHRpZihpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQgIT09ICd1bmRlZmluZWQnICYmIChpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQuaW5jbHVkZXMoJ3BheXdhbGwuc2hvdycpXG5cdFx0XHRcdHx8IGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldC5pbmNsdWRlcygncGF5d2FsbC5hbmFseXRpYycpXG5cdFx0XHRcdHx8IGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldC5pbmNsdWRlcygnbW9zdHJhckJhcnJlaXJhJykgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhhc1BheXdhbGwgPSB0cnVlXG5cdFx0XHRcdFx0aGFzUnVuSnNXaXRoUGF5d2FsbCA9IHRydWVcblx0XHRcdFx0XHRQaWFuby50cmlnZ2VyUGF5d2FsbE9wZW5lZCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKCFoYXNSdW5Kc1dpdGhQYXl3YWxsKVxuICAgICAgICAgICBQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKVxuICAgIH1cblxufTtcblxuUGlhbm8udHJpZ2dlckFkdmVydGlzaW5nID0gZnVuY3Rpb24oKSB7XG5cdHdpbmRvdy5oYXNQYXl3YWxsID0gZmFsc2U7XG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xlYXJGb3JBZHMnKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cblBpYW5vLnRyaWdnZXJQYXl3YWxsT3BlbmVkID0gZnVuY3Rpb24oKSB7XG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnYmxvY2tGb3JBZHMnKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cblBpYW5vLnJlZ2lzdGVyUGF5d2FsbCA9IHtcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8gPSBudWxsLCB0aXBvID0gbnVsbCkge1xuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdGlwbztcblxuXHRcdGlmKCF2ZXJzYW8gfHwgIVBpYW5vLnR5cGVQYXl3YWxsICkge1xuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXG5cdFx0XHRcdFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvcmVnaXN0ZXItcGF5d2FsbC1waWFuby5qc1wiLFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRpZihkYXRhLnN0YXR1cyAhPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuaGFzUGF5d2FsbCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRpZihQaWFuby50eXBlUGF5d2FsbCA9PT0gJ3JlZ2lzdGVyJyB8fCBQaWFuby50eXBlUGF5d2FsbCA9PT0gJ2V4Y2x1c2l2bycgKSB7XG5cdFx0XHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdEdBLnNldEV2ZW50cyhcIkJhcnJlaXJhXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cbn07XG5cblBpYW5vLmNvbXVuaWNhZG8gPSB7XG5cdG1vc3RyYXJJbmZvcm1hY2FvOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvY29tdW5pY2FjYW8tcGlhbm8uanNcIik7XG5cdH1cbn07XG5cblBpYW5vLmFkYmxvY2sgPSB7XG5cdG1vc3RyYXJBZEJsb2NrOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xuXG5cdFx0cGFyYW1zLmFzc2V0c1BhdGggPSBgaHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvYDtcblxuXHRcdHdpbmRvdy5nbGJBZGJsb2NrID0gcGFyYW1zO1xuXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3NjcmlwdHMvYWRibG9jay1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uYmxvcXVlaW9zID0ge1xuXHRsaWJlcmFyRXNjOiBmdW5jdGlvbigpIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vbGliZXJhVGVjbGFkby5qc1wiKTtcblx0fSxcblx0YmxvcXVlaWFWaWV3TW9kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9ibG9xdWVpby9ibG9xdWVpYVZpZXdtb2RlLmpzXCIpO1xuICAgIH1cbn07XG5cblBpYW5vLnBhcmNlaXJvID0ge1xuXHRtb3N0cmFGb290ZXJQYXJjZWlybzogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9mb290ZXItcGFyY2Vpcm9zLXBpYW5vLmpzXCIpO1xuXHR9XG59O1xuXG5QaWFuby5pbmFkaW1wbGVudGUgPSB7XG5cdGdldExpbmtBc3NpbmF0dXJhOiBmdW5jdGlvbihsaW5rKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAobGlua1tpXS5yZWwgPT0gJ2Fzc2luYXR1cmEnKSByZXR1cm4gbGlua1tpXS5ocmVmO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH1cbn07XG5cblBpYW5vLnhtbEh0dHBSZXF1ZXN0ID0ge1xuXHRnZXJhU2NyaXB0TmFQYWdpbmE6IGZ1bmN0aW9uKHVybFNjcmlwdCwgY2FsbGJhY2spIHtcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsU2NyaXB0KTtcblx0XHR4aHIuc2VuZCgpO1xuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCl7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHRcdHZhciBhcHBlbmREZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0XHRcdGFwcGVuZERlU2NyaXB0LmlubmVySFRNTCA9IHJlc3Bvc3RhO1xuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwZW5kRGVTY3JpcHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIG5hIGZ1bsOnw6NvIGdlcmFyIHNjcmlwdCBuYSBww6FnaW5hLicsICd1cmw6ICcgKyB1cmxTY3JpcHRcblx0XHRcdFx0XHRcdCsgJyBTdGF0dXNFcnJvOiAnICsgdGhpcy5zdGF0dXNcblx0XHRcdFx0XHRcdCsgJyBTdGFjazogJyArIHRoaXMuc3RhdHVzVGV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoY2FsbGJhY2spXG5cdFx0XHRcdGNhbGxiYWNrKHhocik7XG5cdFx0fTtcblx0fSxcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IGZ1bmN0aW9uKGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSB7XG5cblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUsIGZhbHNlKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZW5kKCk7XG5cblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcblx0XHRcdGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XG5cdFx0XHRcdHZhciBzaXR1YWNhb1BhZ2FtZW50byA9IHJlc3BKc29uLnNpdHVhY2FvUGFnYW1lbnRvLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJzaXR1YWNhb1BhZ2FtZW50b1wiLCBzaXR1YWNhb1BhZ2FtZW50b10pO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgIT0gMCAmJiBQaWFuby52YXJpYXZlaXMuc3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZS5pbmRleE9mKHhoci5zdGF0dXMpID4gLTEpIHtcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIFwiU3RhdHVzIERlc2NvbmhlY2lkb1wiICsgXCIgLSBcIiArIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbzogZnVuY3Rpb24oZ2xiaWQpIHtcblxuXHRcdHZhciBjb2RpZ29Qcm9kdXRvID0gUGlhbm8udmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKTtcblx0XHRpZihjb2RpZ29Qcm9kdXRvID09ICdlcnJvcicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcInRva2VuLWF1dGVudGljYWNhb1wiOiBnbGJpZCwgXCJpcFVzdWFyaW9cIjogUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLklQLCBcImNvZGlnb1Byb2R1dG9cIjogY29kaWdvUHJvZHV0b30pO1xuXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiUE9TVFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFZlcmlmaWNhTGVpdG9yLCBmYWxzZSk7XG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZW5kKGRhdGEpO1xuXG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xuXHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCl7XG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xuXHRcdFx0XHR2YXIgcmVzcG9zdGFEZVRlcm1vRGVVc28gPSBmYWxzZSwgcmVzcG9zdGFEZU1vdGl2byA9ICcnLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9ICcnO1xuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLm1vdGl2byAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0cmVzcG9zdGFEZU1vdGl2byA9IHJlc3BKc29uLm1vdGl2by50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24udGVtVGVybW9EZVVzbyAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0cmVzcG9zdGFEZVRlcm1vRGVVc28gPSByZXNwSnNvbi50ZW1UZXJtb0RlVXNvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubGluayAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0aHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSBQaWFuby5pbmFkaW1wbGVudGUuZ2V0TGlua0Fzc2luYXR1cmEocmVzcEpzb24ubGluayk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGlzQXV0b3JpemFkbyA9IFBpYW5vLmF1dGVudGljYWNhby5pc0F1dG9yaXphZG8ocmVzcG9zdGFEZVRlcm1vRGVVc28sIHJlc3Bvc3RhRGVNb3Rpdm8sIHJlc3BKc29uLmF1dG9yaXphZG8sIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhyZXNwSnNvbi5hdXRvcml6YWRvLCByZXNwb3N0YURlTW90aXZvLCBpc0F1dG9yaXphZG8sIHJlc3Bvc3RhRGVUZXJtb0RlVXNvKTtcblx0XHRcdFx0dmFyIF9qc29uTGVpdG9yID0ge1xuXHRcdFx0XHRcdFx0XCJhdXRvcml6YWRvXCIgOiByZXNwSnNvbi5hdXRvcml6YWRvLFxuXHRcdFx0XHRcdFx0XCJtb3Rpdm9cIjogcmVzcG9zdGFEZU1vdGl2byxcblx0XHRcdFx0XHRcdFwibG9nYWRvXCI6IGlzQXV0b3JpemFkbyxcblx0XHRcdFx0XHRcdFwidGVtVGVybW9EZVVzb1wiOiByZXNwb3N0YURlVGVybW9EZVVzbyxcblx0XHRcdFx0XHRcdFwiZ2xiaWRcIjogZ2xiaWQsXG5cdFx0XHRcdFx0XHRcInByb2R1dG9cIjogUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCksXG5cdFx0XHRcdFx0XHRcImNvZFByb2R1dG9cIjogY29kaWdvUHJvZHV0byxcblx0XHRcdFx0XHRcdFwidXVpZFwiOiByZXNwSnNvbi51c3VhcmlvSWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRfanNvbkxlaXRvciA9IGJ0b2EoZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KF9qc29uTGVpdG9yKSkpO1xuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIF9qc29uTGVpdG9yLCAxKTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIHN3ZyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRpZihQaWFuby5nb29nbGUuc2hvd1NhdmVTdWJzY3JpcHRpb24ocmVzcEpzb24pKXtcblx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0dmFyIHN3Z1NlcnZpY2UgPSBuZXcgU3dnU2VydmljZSgpO1xuXHRcdFx0XHRcdFx0XHRzd2dTZXJ2aWNlLnNhdmVHbG9ib1N1YnNjcmlwdGlvbihnbGJpZCk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIGFvIGNoYW1hciBhIGZ1bsOnw6NvIHNob3dTYXZlU3Vic2NyaXB0aW9uIGRvIEFsZGViYXJhbi4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnVVJMOiAnICsgZG9jdW1lbnQubG9jYXRpb24uaHJlZlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgR0xCSUQ6ICcgKyBnbGJpZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgRXJybzogJyArIGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihyZXNwSnNvbi5hdXRvcml6YWRvID09IHRydWUpe1xuXHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMocmVzcEpzb24udXN1YXJpb0lkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcblx0XHRcdFx0fVxuXG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFQSSBkZSBhdXRvcml6YWNhbyBkZSBhY2Vzc29cIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBnbGJpZCk7XG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSwgJ2Vycm8nLCB0cnVlLCBcIiBcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5nb29nbGUgPSB7XG4gIGlzQXV0aG9yaXplZDogZnVuY3Rpb24gKCkge1xuXHRcdGlmKHN3Z0VudGl0bGVtZW50cy5nZXRFbnRpdGxlbWVudEZvclNvdXJjZShcIm9nbG9iby5nbG9iby5jb21cIikpe1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpLnN1YnNjcmlwdGlvblRva2VuLCBcIkNvbnRhIEdvb2dsZVwiLCBcIk8gR2xvYm9cIik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZihIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5DUkVBVEVEX0dMT0JPSUQpKXtcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSwgXCJDb250YSBHb29nbGVcIiwgXCJHb29nbGVcIik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgaXNTcGVjaWZpY0dvb2dsZVVzZXI6IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChQaWFuby5nb29nbGUuaXNBdXRob3JpemVkKCkpXG5cdFx0XHRyZXR1cm47XG5cblx0XHR0cnl7XG5cdFx0XHR2YXIgb0dsb2JvQnVzaW5lc3MgPSBuZXcgT0dsb2JvQnVzaW5lc3MoKTtcblx0XHRcdG9HbG9ib0J1c2luZXNzLnZlcmlmeUlmVXNlckhhc0FjY2Vzc09yRGVmZXJyZWQoc3dnRW50aXRsZW1lbnRzKTtcblx0XHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkVycm8gYW8gZXhlY3V0YXIgbyBBbGRlYmFyYW5cIiwgXCJFcnJvcjogXCIgKyBlcnJvciArIFwiIC0gRW50aXRsZW1lbnRzOiBcIiArIHN3Z0VudGl0bGVtZW50cy5lbnRpdGxlbWVudHNbMF0uc3Vic2NyaXB0aW9uVG9rZW4pO1xuXHRcdH1cblx0fSxcblxuXHRzaG93U2F2ZVN1YnNjcmlwdGlvbjogZnVuY3Rpb24ocmVzcG9uc2Upe1xuXHRcdGlmKCFzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSAmJiByZXNwb25zZS5tb3Rpdm8gPT09XCJBVVRPUklaQURPXCIgJiYgIUhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuU0FWRV9TVUJTQ1JJUFRJT04pKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxufTtcblxuUGlhbm8uYXV0ZW50aWNhY2FvID0ge1xuXHRpc0xvZ2Fkb0NhZHVuOiBmdW5jdGlvbihnbGJpZCwgdXRwKSB7XG5cdFx0aWYgKCFnbGJpZCkge1xuXHRcdFx0aWYgKHV0cCkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xuXHRcdH1cblx0XHRyZXR1cm4gZ2xiaWQgIT0gJyc7XG5cdH0sXG5cdHZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50bzogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xuXHRcdGlmIChQaWFuby5hdXRlbnRpY2FjYW8uaXNMb2dhZG9DYWR1bihnbGJpZCwgdXRwKSkge1xuXHRcdFx0aWYgKHV0cCkge1xuXHRcdFx0XHR2YXIgX2xlaXRvciA9IEpTT04ucGFyc2UoZGVjb2RlVVJJKGF0b2IodXRwKSkpO1xuXHRcdFx0XHRpZiAoZ2xiaWQgPT0gX2xlaXRvci5nbGJpZCAmJiAodHlwZW9mIF9sZWl0b3IucHJvZHV0byA9PSBcInVuZGVmaW5lZFwiIHx8IF9sZWl0b3IucHJvZHV0byA9PSBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSkpIHtcblx0XHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKF9sZWl0b3IuYXV0b3JpemFkbywgX2xlaXRvci5tb3Rpdm8sIF9sZWl0b3IubG9nYWRvLCBfbGVpdG9yLnRlbVRlcm1vRGVVc28pO1xuXHRcdFx0XHRcdGlmKF9sZWl0b3IuYXV0b3JpemFkbyl7XG5cdFx0XHRcdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKF9sZWl0b3IudXVpZCwgXCJHbG9ibyBJRFwiLCBcIk8gR2xvYm9cIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcblx0XHRcdH1cblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc28oZ2xiaWQpO1xuXHRcdH1cblx0fSxcblx0aXNBdXRvcml6YWRvOiBmdW5jdGlvbih0ZXJtb0RlVXNvLCBtb3Rpdm8sIGF1dG9yaXphZG8sIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSB7XG5cdFx0aWYgKGF1dG9yaXphZG8gfHwgbW90aXZvID09IFwiaW5kaXNwb25pdmVsXCIgfHwgdGVybW9EZVVzbyAhPSBmYWxzZSkge1xuXHRcdFx0aWYgKGF1dG9yaXphZG8gJiYgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlKGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGRlZmluZVVzdWFyaW9QaWFubzpmdW5jdGlvbihhdXRvcml6YWRvLCBtb3Rpdm8sIGxvZ2FkbywgdGVtVGVybW9EZVVzbyl7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImF1dG9yaXphZG9cIiwgYXV0b3JpemFkb10pO1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJtb3Rpdm9cIiwgbW90aXZvXSk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImxvZ2Fkb1wiLCBsb2dhZG9dKTtcblx0XHRpZih0ZW1UZXJtb0RlVXNvICE9IFwiIFwiKVxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInRlbVRlcm1vXCIsIHRlbVRlcm1vRGVVc29dKTtcblx0fVxufTtcblxuUGlhbm8udXRpbCA9IHtcblx0aXNTZWN0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCkgPT09ICdzZWN0aW9uJyA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0dGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzOiBmdW5jdGlvbigpIHtcblx0XHRpZiAodHlwZW9mIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ1ZhcmlhdmVsIHRpcG9Db250ZXVkb1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRpZiAodHlwZW9mIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ1ZhcmlhdmVsIG5vbWVQcm9kdXRvUGlhbm8gbmFvIGVzdGEgZGVmaW5pZGEnLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcblx0XHR2YXIgY2hhdmVzQ2FtcGFuaGEgPSBbJ3V0bV9tZWRpdW0nLCd1dG1fc291cmNlJ107XG5cdFx0dmFyIHZhbG9yZXNDYW1wYW5oYSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaWR4UGFyYW1DYW1wYW5oYSA9IDA7IGlkeFBhcmFtQ2FtcGFuaGEgPCBjaGF2ZXNDYW1wYW5oYS5sZW5ndGg7IGlkeFBhcmFtQ2FtcGFuaGErKykge1xuXHRcdFx0dmFyIGNoYXZlQ2FtcGFuaGEgPSBjaGF2ZXNDYW1wYW5oYVtpZHhQYXJhbUNhbXBhbmhhXTtcblx0XHRcdGlmICh1cmwuaW5kZXhPZihjaGF2ZUNhbXBhbmhhICsgJz0nKSAhPSAtMSkge1xuXHRcdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiW1xcPygmKV1cIiArIGNoYXZlQ2FtcGFuaGEgKyBcIj0oW14mI10qKVwiKTtcblx0XHRcdFx0dmFyIHZhbG9yQ2FtcGFuaGEgPSB1cmwubWF0Y2gocmVnZXgpWzFdO1xuXHRcdFx0XHRpZih2YWxvckNhbXBhbmhhKXtcblx0XHRcdFx0XHR2YWxvcmVzQ2FtcGFuaGEucHVzaCh2YWxvckNhbXBhbmhhKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodmFsb3Jlc0NhbXBhbmhhLmxlbmd0aCA+IDApIHtcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ1dG1cIiwgdmFsb3Jlc0NhbXBhbmhhLmpvaW4oXCI7XCIpXSk7XG5cdFx0fVxuXHRcdGlmICh1cmwuaW5kZXhPZigndXRtX2NhbXBhaWduPScpICE9IC0xKSB7XG5cdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwidXRtX2NhbXBhaWduPShcXFxcdyspXCIpO1xuXHRcdFx0dmFyIGNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHRcdGlmKGNhbXBhbmhhKXtcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNhbXBhbmhhXCIsIGNhbXBhbmhhXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRpc09yaWdlbUJ1c2NhZG9yOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHR2YXIgcmVnZXhSb2JvcyA9IG5ldyBSZWdFeHAoXCIoaWFfYXJjaGl2ZXIpfChHb29nbGVib3QpfChNZWRpYXBhcnRuZXJzLUdvb2dsZSl8KEFkc0JvdC1Hb29nbGUpfChtc25ib3QpfChZYWhvbyEgU2x1cnApfChaeUJvcmcpfChBc2sgSmVldmVzL1Rlb21hKXwoYmluZ2JvdCl8KGNYZW5zZWJvdClcIik7XG5cdFx0dmFyIGVoUm9ibyA9IHJlZ2V4Um9ib3MudGVzdCh1c2VyQWdlbnQpO1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJidXNjYWRvclwiLCBlaFJvYm9dKTtcblx0XHRyZXR1cm4gZWhSb2JvO1xuXHR9LFxuXHRtb250YVVybFN0ZzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCkgIT0gJ3ByZCcgPyAnLXN0ZycgOiAnJztcblx0fSxcblx0dGVtUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuXHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xuXHRcdHJldHVybiBwYXJhbWV0cm9zLmluZGV4T2YocGFyYW1OYW1lKSAhPSAtMSA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0Z2V0VmFsb3JQYXJhbWV0cm9OYVVybDogZnVuY3Rpb24ocGFyYW1ldHJvKSB7XG5cdFx0aWYgKFBpYW5vLnV0aWwudGVtUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKSkge1xuXHRcdFx0dmFyIHBhcmFtZXRyb3MgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XG5cdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiW1xcPygmKV1cIiArIHBhcmFtZXRybyArIFwiPShbXiYjXSopXCIpO1xuXHRcdFx0cmV0dXJuIHBhcmFtZXRyb3MubWF0Y2gocmVnZXgpWzFdO1xuXHRcdH1cblx0XHRyZXR1cm4gXCJzZW0gcGFyYW1ldHJvXCI7XG5cdH0sXG5cdGlzRGVidWc6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuREVCVUc7XG5cdFx0dmFyIHZhbG9yUGFyYW1ldHJvID0gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKHBhcmFtZXRybyk7XG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJykge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCB2YWxvclBhcmFtZXRybywgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICdmYWxzZScpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgXCJcIiwgLTEpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0aXNEb21pbmlvT0dsb2JvOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiOi8vKC4qPykvXCIpLCB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpO1xuXHRcdGlmICh1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJvZ2xvYm9cIikgPiAtMSB8fCAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwiZ2xvYm9pXCIpID4gLTEgJiYgdXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwiZWRnXCIpID09IC0xKSkge1xuXHRcdFx0cmV0dXJuIHVybC5tYXRjaChyZWdleClbMV07XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fSxcblx0Y2FsbGJhY2tNZXRlcjogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XG5cdFx0d2luZG93LnJlZ3Jhc1RpbnkgPSBtZXRlckRhdGE7XG5cdFx0UGlhbm8ubWV0cmljYXMuZXhlY3V0YUFwb3NQYWdldmlldyhmYWxzZSk7XG5cdH0sXG5cdGNhbGxiYWNrTWV0ZXJFeHBpcmVkOiBmdW5jdGlvbihtZXRlckRhdGEpIHtcblx0XHR3aW5kb3cucmVncmFzVGlueSA9IG1ldGVyRGF0YTtcblx0XHRQaWFuby52YXJpYXZlaXMuaXNDYWxsYmFja01ldHRlckV4cGlyZWQgPSB0cnVlO1xuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcodHJ1ZSk7XG5cdH0sXG5cdGdldFdpbmRvd0xvY2F0aW9uU2VhcmNoOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXHR9LFxuXHRnZXRXaW5kb3dMb2NhdGlvbkhyZWY6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHR9LFxuXHRhZGljaW9uYXJDc3M6IGZ1bmN0aW9uKGNzc1BhdGgpe1xuXHRcdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZS5pbm5lckhUTUwgPSBjc3NQYXRoO1xuXHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGUsIGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcblx0fSxcblx0aXNSZXZpc3RhOiBmdW5jdGlvbigpe1xuXHRcdHZhciByZXZpc3RhcyA9IFtcImVwb2NhXCIsIFwiYXV0by1lc3BvcnRlXCIsIFwidm9ndWVcIiwgXCJnbGFtb3VyXCIsIFwiY2FzYS12b2d1ZVwiLCBcIm1hcmllLWNsYWlyZVwiLCBcImNhc2EtZS1qYXJkaW1cIiwgXCJxdWVtLWFjb250ZWNlXCIsIFwiZ2xvYm8tcnVyYWxcIiwgXCJncVwiLCBcIm1vbmV0XCIsICdjcmVzY2VyJywnZ2FsaWxldSddO1xuXHRcdGlmKHJldmlzdGFzLmluZGV4T2YoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpID4gLTEpXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHJlY2FycmVnYVBpYW5vOiBmdW5jdGlvbiAodGlwb0NvbnRldWRvLCBpc0V4Y2x1c2l2bywgbm9tZVByb2R1dG8sIHBvc3RPcGVuZWQpIHtcblx0XHRjb25zdCBwb3N0RWxlbWVudCA9IHdpbmRvdy5hbmFsaXRpY29Qb3N0O1xuXHRcdHdpbmRvdy50aXBvQ29udGV1ZG9QaWFubyA9IHRpcG9Db250ZXVkbztcblx0XHR3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPSBpc0V4Y2x1c2l2bztcblx0XHR3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9IG5vbWVQcm9kdXRvO1xuXHRcdHdpbmRvd1tcInRwXCJdID0gW107XG5cdFx0XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cucmVncmFzVGlueSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSA9IFwiXCI7XG5cdFx0fVxuXG5cdFx0aWYocG9zdEVsZW1lbnQpIHtcblx0XHRcdGlmKCFwb3N0T3BlbmVkKSB7XHRcdFx0XHRcblx0XHRcdFx0YW5hbHl0aWNhbFBvc3RJc09wZW5lZCgpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbmFseXRpY2FsUG9zdElzTG9hZGluZygpXG5cblx0XHRcdFx0UGlhbm8uY29uc3RydXRvci5pbml0VHAoKTtcblx0XHRcdFx0bG9hZFBpYW5vRXhwZXJpZW5jZXMoKTtcblx0XHRcdFx0XG4gICAgICAgICAgICAgICAgY2hlY2tFeHBlcmllbmNlc0hhc0NoYW5nZSgpLnRoZW4oZnVuY3Rpb24gKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5dGljYWxCbG9ja2VkRm9yUGlhbm8oKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5dGljYWxVbmJsb2NrZWRGb3JQaWFubygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aXNWYWxvcjogZnVuY3Rpb24gKCkge1xuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSBcInZhbG9yXCIpXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cblBpYW5vLmNvbmZpZ3VyYWNhbyA9IHtcblx0anNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzOiB7XG5cdFx0J2ludCc6IHtcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J2RYdTdkdkZLUmknLFxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidNY3RGZ1JDRXN1Jyxcblx0XHRcdCdzZXRTYW5kQm94JzondHJ1ZScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9zYW5kYm94LnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPWRYdTdkdkZLUmknLFxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9zYW5kYm94LnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPU1jdEZnUkNFc3UnLFxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGlxbHQtaWcuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXG5cdFx0fSxcblx0XHQncWx0Jzp7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6Jyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vJyxcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcblx0XHR9LFxuXHRcdCdwcmQnOntcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J0dUQ29wSURjNXonLFxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcblx0XHRcdCdzZXRTYW5kQm94JzonZmFsc2UnLFxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1HVENvcElEYzV6Jyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS8nLFxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xuXHRcdH1cblx0fVxufTtcblxuUGlhbm8uY29uc3RydXRvciA9IHtcblx0aW5pdFRwOiBmdW5jdGlvbigpIHtcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xuXHRcdHRwLnB1c2goW1wic2V0VGFnc1wiLCBbUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCldXSk7XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcblx0XHR9XG5cdFx0dHAucHVzaChbXCJzZXRTYW5kYm94XCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uc2V0U2FuZEJveF0pO1xuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcblx0XHR2YXIgY2xlYW5fdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKS5zcGxpdChcIj9cIilbMF07XG5cdFx0dHAucHVzaChbXCJzZXRQYWdlVVJMXCIsY2xlYW5fdXJsXSk7XG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm5vbWVQcm9kdXRvXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5kZXRlY3RQcml2YXRlTW9kZShmdW5jdGlvbiAoaXNfcHJpdmF0ZSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjb250ZXVkb0V4Y2x1c2l2b1wiLCB0cnVlXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnICYmICh0eXBlb2Ygc3dnRW50aXRsZW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiBzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSkgKSB7XG5cdFx0XHRQaWFuby5nb29nbGUuaXNTcGVjaWZpY0dvb2dsZVVzZXIoc3dnRW50aXRsZW1lbnRzKTtcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSxcIkFVVE9SSVpBRE9cIiwgdHJ1ZSwgXCJcIik7XG5cdFx0fWVsc2V7XG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8udmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkdDT00pLCBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFApKTtcblx0XHR9XG5cblx0XHRQaWFuby5yZWdpb25hbGl6YWNhby5nZXRSZWdpb24oKTtcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcblxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJiYW5uZXJDb250YWRvckxpZ2Fkb1wiLCB0cnVlXSk7XG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyQWN0aXZlXCIsIFBpYW5vLnV0aWwuY2FsbGJhY2tNZXRlcl0pO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyRXhwaXJlZFwiLCBQaWFuby51dGlsLmNhbGxiYWNrTWV0ZXJFeHBpcmVkXSk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGxvYWRQaWFub0V4cGVyaWVuY2VzKCl7XG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblx0YS50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcblx0YS5hc3luYyA9IHRydWU7XG5cdGlmKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcblx0XHRhLnNyYyA9IFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsU2FuZGJveFBpYW5vUmV2aXN0YXM7XG5cdH0gZWxzZSB7XG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFubztcblx0fVxuXG5cdHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG5cblx0Yi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBiKTtcbn1cblxuZnVuY3Rpb24gcGlhbm9Jbml0KCkge1xuXHR3aW5kb3cuUGlhbm8uY2hlY2tQaWFub0FjdGl2ZSgpXG5cblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxuXG4gICAgaWYgKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpIHtcblx0XHR3aW5kb3cuU1dHLnB1c2goKHN1YnNjcmlwdGlvbnMpID0+IHtcblx0XHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3Zylcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZy1zdWJzY3JpcHRpb25zJywgc3Vic2NyaXB0aW9ucylcblxuXHRcdFx0c3dnID0gc3Vic2NyaXB0aW9ucztcblxuXHRcdFx0c3Vic2NyaXB0aW9ucy5zZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlKGVudGl0bGVtZW50c1Byb21pc2UgPT4ge1xuXHRcdFx0XHRlbnRpdGxlbWVudHNQcm9taXNlLnRoZW4oZW50aXRsZW1lbnRzID0+IHtcblx0XHRcdFx0XHR3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gZW50aXRsZW1lbnRzO1xuXG5cdFx0XHRcdFx0aWYgKHdpbmRvdy50aW55Q3B0LlBpYW5vLnV0aWwudGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzKCkpIHtcblx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0d2luZG93LnRpbnlDcHQuUGlhbm8uY29uc3RydXRvci5pbml0VHAoKTtcblx0XHRcdFx0XHRcdFx0bG9hZFBpYW5vRXhwZXJpZW5jZXMoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNhdGNoKGVycm9yKXtcblx0XHRcdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJQaWFubyBuYW8gZm9pIGNhcnJlZ2FkYSBjb3JyZXRhbWVudGUhXCIsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBHQS5zZXRFdmVudHNFcnJvcihcIkVudGl0bGVtZW50cyBuw6NvIGNhcnJlZ2Fkb1wiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xuICAgICAgICAgICAgd2luZG93LnRpbnlDcHQuUGlhbm8uY29uc3RydXRvci5pbml0VHAoKTtcbiAgICAgICAgICAgIGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRpbnlJbml0KCkge1xuXHRUaW55LnNldFBpYW5vKFBpYW5vKTtcbiAgICBjb25zdCBTd2cgPSBuZXcgU3dnTW9kdWxlKCk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBTd2cuaW5pdCgpO1xuXHR9XG5cdGNhdGNoKGUpIHsgY29uc29sZS5lcnJvcihlKSB9XG5cblx0cGlhbm9Jbml0KCk7XG59O1xuXG50aW55SW5pdCgpOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==