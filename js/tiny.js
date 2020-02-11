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
      _this.createTemplate();
    });
    this.activeEvents();
    window.PaywallCptInline = this;
    window.tinyCpt.Paywall = {
      domain: this.domain
    };
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
        imageLink: "https://via.placeholder.com/300x150"
      };
      window.glbPaywallInline = window.glbPaywallInline ? Object.assign({}, templateSettings, window.glbPaywallInline) : templateSettings;
      callback();
    }
  }, {
    key: "activeEvents",
    value: function activeEvents() {
      var _this2 = this;

      this.classname = document.querySelectorAll(".btn-read-more");
      this.classname.forEach(function (element) {
        element.addEventListener('click', function () {
          _this2.createTemplate(element);
        });
      });
    }
  }, {
    key: "createTemplate",
    value: function createTemplate(element) {
      if (element) {
        this.elBody = element;
        this.elBody.insertAdjacentHTML('beforebegin', this.cssMinified);
        this.elBody.insertAdjacentHTML('beforebegin', this.template);
        var removedElement = Array.from(element.parentNode.parentNode.childNodes).find(function (element) {
          return element.className === 'other-content';
        });
        removedElement.parentNode.removeChild(removedElement);
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
      console.error('Paywall - Error on load', err);
      Piano.triggerAdvertising();
    }
  }
};

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
        if (item.eventParams.snippet !== 'undefined' && (item.eventParams.snippet.includes('paywall.show') || item.eventParams.snippet.includes('mostrarBarreira'))) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLWdhLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiRmIiLCJkYXRhIiwiZGVidWciLCJ3aW5kb3ciLCJ0aW55Q3B0IiwiZGlzYWJsZWQiLCJmYiIsImhhc1BpeGVsIiwicGl4ZWwiLCJuYW1lIiwiaXNEZWZpbmVkIiwiZmJxIiwiR0EiLCJnYSIsIlByb2R1Y3RzIiwiUHJvZHVjdHNNb2R1bGUiLCJkYXRhTGF5ZXIiLCJpc1Byb2R1Y3RWYWxvciIsIl9nYXEiLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJIZWxwZXJzIiwicHJvcCIsImNfbmFtZSIsInZhbHVlIiwiZXhwaXJlZGF5cyIsImV4ZGF0ZSIsIkRhdGUiLCJob3N0bmFtZSIsImxvY2F0aW9uIiwic2V0RGF0ZSIsImdldERhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsImVzY2FwZSIsInRvVVRDU3RyaW5nIiwic3BsaXQiLCJyZXZlcnNlIiwibWF0Y2giLCJSZWdFeHAiLCJjb29raWVUaW55IiwidW5lc2NhcGUiLCJ0b1N0cmluZyIsIlBpYW5vIiwiY29udGVudCIsInNldEV4cGVyaWVuY2UiLCJleHBlcmllbmNlTmFtZSIsImV4cGVyaWVuY2UiLCJyZWdyYXNUaW55Iiwibm9tZUV4cGVyaWVuY2lhIiwic3Vic2VnbWVudGFjYW9QaWFubyIsInNldENvb2tpZSIsInZhcmlhdmVpcyIsImNvbnN0YW50ZSIsIlVUUCIsInByb2R1Y3ROYW1lIiwibm9tZVByb2R1dG9QaWFubyIsInByb2R1Y3RzU2V0dGluZ3MiLCJQcm9kdWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdHNJZCIsImlkIiwiU3dnIiwiU1dHIiwic3dnRW50aXRsZW1lbnRzIiwic3dnIiwibG9jYWxQcm9kdWN0UGlhbm8iLCJoYXNQcm9kdWN0SlNPTiIsInByb2R1Y3RKU09OIiwiZWxIZWFkIiwiaGVhZCIsInNldEdsb2JhbFNXRyIsImdsb2JhbCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsInV0bXNQcm9wcyIsImdsYlBheXdhbGwiLCJ1dG1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsInNldCIsInN1YnNjcmliZSIsInVybCIsImlzUHJvZHVjdGlvbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvZHVjdCIsImZpbHRlciIsInBpYW5vUHJvZHVjdE5hbWUiLCJvYmoiLCJwcm9wc1RvUmVtb3ZlIiwibmV3T2JqIiwiZWxlbWVudCIsImdldFByb2R1Y3QiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXJrdXBUZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3JjIiwidXJsUHJvZCIsInVybFN0ZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldE1hcmt1cCIsInNldFN3Z1NjcmlwdCIsInNldEFsZGViYXJhblNjcmlwdCIsInRlc3RTV0ciLCJUaW55IiwiaGFzUGF5d2FsbCIsInRwIiwiUGF5d2FsbEFuYWx5dGljcyIsInNldEdsb2JhbFRpbnkiLCJzZXRHbG9iYWwiLCJpbml0IiwiZGVmYXVsdFNldHRpbmdzIiwidGlueSIsInBheXdhbGwiLCJhbWJpZW50ZVV0aWxpemFkb1BpYW5vIiwiUGF5d2FsbENwdElubGluZSIsIlBpYW5vTW9kdWxlIiwiZG9tYWluIiwicGF5d2FsbElkIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsImNyZWF0ZVRlbXBsYXRlIiwiYWN0aXZlRXZlbnRzIiwiUGF5d2FsbCIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRpdGxlIiwic3VidGl0bGUiLCJidXR0b25UZXh0IiwiYnV0dG9uTGluayIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGV4dCIsImxvZ2luTGluayIsIm9mZmVyTGluayIsImltYWdlTW9iaSIsImltYWdlRGVzayIsImltYWdlTGluayIsImdsYlBheXdhbGxJbmxpbmUiLCJjbGFzc25hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsQm9keSIsImluc2VydEFkamFjZW50SFRNTCIsImNzc01pbmlmaWVkIiwidGVtcGxhdGUiLCJyZW1vdmVkRWxlbWVudCIsIkFycmF5IiwiZnJvbSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZmluZCIsImNsYXNzTmFtZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlIiwidXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8iLCJ1cmkiLCJocmVmIiwic2VydmljZUlkIiwiZ2V0U2Vydmljb0lkIiwic3RyIiwidXJsUmV0dXJuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0Q29kaWdvUHJvZHV0byIsImdldE5vbWVQcm9kdXRvIiwidGVtcGxhdGVWYXJzIiwiZ2V0VXJsTG9naW5SZWdpc3RlciIsIlBheXdhbGxHQU1vZHVsZSIsIkdBTW9kdWxlIiwibWV0cmljcyIsInBheXdhbGxUeXBlIiwiX1BpYW5vIiwic2V0RXZlbnRzIiwidmlld05hbWUiLCJSVElFWCIsInJlc2V0VXRwIiwiZGF0YXNldCIsImdhUmVzZXR1dHAiLCJpbWFnZVRvcCIsImdhSW1hZ2VQb3NpdGlvbiIsImdhTGFiZWwiLCJldmVudCIsImV2ZW50b0dBQ2F0ZWdvcmlhIiwiZXZlbnRvR0FBY2FvIiwiZ2FBY3Rpb24iLCJldmVudG9HQVJvdHVsbyIsImV2ZW50b0dBVmFsb3IiLCJldmVudG9HQUludGVyYWNhbyIsInNldERhdGFsYXllciIsInR5cGVQYXl3YWxsIiwiUGF5d2FsbENwdCIsIlN3Z01vZHVsZSIsIkZCIiwiRmJNb2R1bGUiLCJhc3NldHNQYXRoIiwiZGlzcGxheSIsInByb2R1Y3RDbGFzcyIsInRhcmdldEJsYW5rIiwidG9wTW9iaSIsInRvcERlc2siLCJ0b3BMaW5rIiwibGVmdE1vYmkiLCJsZWZ0RGVzayIsImxlZnRMaW5rIiwicmlnaHRNb2JpIiwicmlnaHREZXNrIiwicmlnaHRMaW5rIiwiaGlkZUxvZ2luQXJlYSIsImxvZ2luVGFnIiwiY2xlYXJMb2dpbkFyZWEiLCJzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZWxDcHQiLCJxdWVyeVNlbGVjdG9yIiwic2V0RWxXcmFwcGVyIiwiZWxUb1JlbW92ZSIsImJvZHkiLCJib2R5QWRqdXN0IiwicmVtb3ZlRWxlbWVudHMiLCJhY3RpdmVUZW1wbGF0ZVNldHRpbmdzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJwYXl3YWxsTG9hZCIsImVsQ3B0V3JhcCIsInNldFRpbWVvdXQiLCJlbEJvZHlIZWlnaHQiLCJpbm5lckhlaWdodCIsImVsQ3B0V3JhcEhlaWdodCIsIm9mZnNldEhlaWdodCIsImN1cnJlbnRUb3AiLCJNYXRoIiwiYWJzIiwidG9wV2l0aEZ1bGxFbGVtZW50IiwidG9wIiwib3BhY2l0eSIsInpJbmRleCIsImV2dFdoZWVsIiwiZXZ0VG91Y2giLCJzZXRQaXhlbFR5cGUiLCJjbGlja1RhcmdldHMiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzTG9naW4iLCJCb29sZWFuIiwiZ2V0QXR0cmlidXRlIiwiaXNVcmxTd2ciLCJpbmNsdWRlcyIsIm5vdEJsYW5rIiwiaHJlZlRhcmdldCIsInRyaWdnZXIiLCJzZXRVdG1zIiwib3BlbiIsImJpbmQiLCJuZXd0b3AiLCJzdGVwIiwibXVsdGlwbGllciIsImRlbHRhWSIsImVsVG9wIiwidG91Y2hzdGFydFkiLCJ0b3VjaGVuZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblkiLCJkaWZmIiwiZGVsYXlUaW1lciIsIlRpbnlNb2R1bGUiLCJzZXRHbG9iYWxWYXJzIiwiYW1iaWVudGVzQWNlaXRvcyIsInN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvIiwic3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkIiwiR0NPTSIsIkFNQklFTlRFIiwiU0FWRV9TVUJTQ1JJUFRJT04iLCJDUkVBVEVEX0dMT0JPSUQiLCJHTE9CT0lEX01FU1NBR0UiLCJtZXRyaWNhcyIsIkVWRU5UT19TRU1fQUNBTyIsIkVSUk8iLCJrcnV4IiwiU0VHTUVOVEFDT0VTIiwiS1JVWExJR0FETyIsInV0aWwiLCJJUCIsIkRFQlVHIiwiaXNDb250ZXVkb0V4Y2x1c2l2byIsImNvbnRldWRvRXhjbHVzaXZvIiwiZ2V0QW1iaWVudGVQaWFubyIsImluZGV4T2YiLCJnZXRWYWxvclBhcmFtZXRyb05hVXJsIiwiZ2V0Q29va2llIiwiZ2V0VGlwb0NvbnRldWRvUGlhbm8iLCJ0aXBvQ29udGV1ZG9QaWFubyIsImV4ZWN1dG91UGFnZXZpZXciLCJzZXRFdmVudHNFcnJvciIsImlzUmV2aXN0YSIsIm5vbWVQcm9kdXRvIiwiYXV0ZW50aWNhY2FvIiwiZGVmaW5lVXN1YXJpb1BpYW5vIiwiamFuZWxhQW5vbmltYSIsInJldHJ5IiwiaXNEb25lIiwibmV4dCIsImN1cnJlbnRfdHJpYWwiLCJtYXhfcmV0cnkiLCJpc190aW1lb3V0IiwiaXNJRTEwT3JMYXRlciIsInVzZXJfYWdlbnQiLCJ1YSIsImV4ZWMiLCJwYXJzZUludCIsImRldGVjdFByaXZhdGVNb2RlIiwiaXNfcHJpdmF0ZSIsIndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtIiwiVEVNUE9SQVJZIiwiZSIsImluZGV4ZWREQiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYiIsInJlYWR5U3RhdGUiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInRlbSIsImdldEl0ZW0iLCJsaWdhZG8iLCJwYXJhbWV0cm8iLCJ2YWxvclBhcmFtZXRybyIsIm9idGVtU2VnbWVudGFjYW8iLCJzZWdtZW50YWNvZXMiLCJpIiwicmVnaW9uYWxpemFjYW8iLCJnZXRSZWdpb24iLCJrcnV4R2VvIiwia2V5IiwiZW52aWFFdmVudG9zR0EiLCJfR0FBY2FvIiwiX0dBUm90dWxvIiwibW9udGFSb3R1bG9HQSIsInNldExpbWl0ZUNvbnRhZ2VtIiwiX0dBTGltaXRlIiwiX0dBQ29udGFnZW0iLCJ2aWV3cyIsIm1heFZpZXdzIiwiaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyIiwicmVncmFzIiwicGFzc2FnZW0iLCJmbHV4byIsImV4ZWN1dGFBcG9zUGFnZXZpZXciLCJleHBpcm91IiwidHBDb250ZXh0Iiwic2V0YVZhcmlhdmVpcyIsImlkTG9naW4iLCJ0aXBvTG9naW4iLCJhc3NpbmF0dXJhTG9nYWRhIiwiaWRMb2dpbkFzc2luYW50ZSIsInRpcG9Mb2dpbkFzc2luYW50ZSIsImJhbm5lciIsIm1vc3RyYXJGb290ZXIiLCJ2ZXJzYW8iLCJhZGljaW9uYXJDc3MiLCJtb250YVVybFN0ZyIsInhtbEh0dHBSZXF1ZXN0IiwiZ2VyYVNjcmlwdE5hUGFnaW5hIiwibW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlciIsIm1vc3RyYXJBdmF0YXJIZWFkZXIiLCJib3R0b21GaXhlZCIsInBhcmFtcyIsImdsYkJhbm5lckJvdHRvbSIsIm1vc3RyYXJTV0ciLCJjc3MiLCJzY3JpcHRKcyIsIm1vc3RyYXJIaWdobGlnaHRTYWxlIiwibW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yIiwicmVnaXN0ZXIiLCJtb3N0cmFyQmFycmVpcmEiLCJoZWxwZXIiLCJyZWRpcmVjaW9uYXJCYXJyZWlyYSIsInNob3ciLCJlcnJvciIsInRyaWdnZXJBZHZlcnRpc2luZyIsImFuYWx5dGljIiwiZXJyIiwiY2hlY2tQaWFub0FjdGl2ZSIsIl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0IiwiZXZlbnRzIiwiY2hlY2tQYXl3YWxsIiwiUGlhbm9SZXN1bHRFdmVudHMiLCJoYXNSdW5Kc1dpdGhQYXl3YWxsIiwiZXZlbnRUeXBlIiwiZXZlbnRQYXJhbXMiLCJzbmlwcGV0IiwidHJpZ2dlclBheXdhbGxPcGVuZWQiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJyZWdpc3RlclBheXdhbGwiLCJ0aXBvIiwic3RhdHVzIiwiY29tdW5pY2FkbyIsIm1vc3RyYXJJbmZvcm1hY2FvIiwiYWRibG9jayIsIm1vc3RyYXJBZEJsb2NrIiwiZ2xiQWRibG9jayIsImJsb3F1ZWlvcyIsImxpYmVyYXJFc2MiLCJibG9xdWVpYVZpZXdNb2RlIiwicGFyY2Vpcm8iLCJtb3N0cmFGb290ZXJQYXJjZWlybyIsImluYWRpbXBsZW50ZSIsImdldExpbmtBc3NpbmF0dXJhIiwibGluayIsInJlbCIsInVybFNjcmlwdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3Bvc3RhIiwicmVzcG9uc2VUZXh0IiwiYXBwZW5kRGVTY3JpcHQiLCJhcHBlbmRDaGlsZCIsInN0YXR1c1RleHQiLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwic2V0UmVxdWVzdEhlYWRlciIsInJlc3BKc29uIiwicGFyc2UiLCJzaXR1YWNhb1BhZ2FtZW50byIsImZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc28iLCJnbGJpZCIsImNvZGlnb1Byb2R1dG8iLCJjb25maWd1cmFjYW8iLCJqc29uQ29uZmlndXJhY2FvVGlueVBhc3MiLCJ1cmxWZXJpZmljYUxlaXRvciIsInJlc3Bvc3RhRGVUZXJtb0RlVXNvIiwicmVzcG9zdGFEZU1vdGl2byIsIm1vdGl2byIsInRlbVRlcm1vRGVVc28iLCJpc0F1dG9yaXphZG8iLCJhdXRvcml6YWRvIiwiX2pzb25MZWl0b3IiLCJ1c3VhcmlvSWQiLCJidG9hIiwiZW5jb2RlVVJJIiwiZ29vZ2xlIiwic2hvd1NhdmVTdWJzY3JpcHRpb24iLCJzd2dTZXJ2aWNlIiwiU3dnU2VydmljZSIsInNhdmVHbG9ib1N1YnNjcmlwdGlvbiIsImlzQXV0aG9yaXplZCIsImdldEVudGl0bGVtZW50Rm9yU291cmNlIiwic3Vic2NyaXB0aW9uVG9rZW4iLCJpc1NwZWNpZmljR29vZ2xlVXNlciIsIm9HbG9ib0J1c2luZXNzIiwiT0dsb2JvQnVzaW5lc3MiLCJ2ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkIiwiZW50aXRsZW1lbnRzIiwicmVzcG9uc2UiLCJlbmFibGVzVGhpcyIsImlzTG9nYWRvQ2FkdW4iLCJ1dHAiLCJ2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8iLCJfbGVpdG9yIiwiZGVjb2RlVVJJIiwiYXRvYiIsInByb2R1dG8iLCJsb2dhZG8iLCJ1dWlkIiwidGVybW9EZVVzbyIsImlzU2VjdGlvbiIsInRlbVZhcmlhdmVpc09icmlnYXRvcmlhcyIsImV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsIiwiZ2V0V2luZG93TG9jYXRpb25TZWFyY2giLCJjaGF2ZXNDYW1wYW5oYSIsInZhbG9yZXNDYW1wYW5oYSIsImlkeFBhcmFtQ2FtcGFuaGEiLCJjaGF2ZUNhbXBhbmhhIiwicmVnZXgiLCJ2YWxvckNhbXBhbmhhIiwiam9pbiIsImNhbXBhbmhhIiwiaXNPcmlnZW1CdXNjYWRvciIsInJlZ2V4Um9ib3MiLCJlaFJvYm8iLCJ0ZW1QYXJhbWV0cm9OYVVybCIsInBhcmFtTmFtZSIsInBhcmFtZXRyb3MiLCJpc0RlYnVnIiwiaXNEb21pbmlvT0dsb2JvIiwiZ2V0V2luZG93TG9jYXRpb25IcmVmIiwiY2FsbGJhY2tNZXRlciIsIm1ldGVyRGF0YSIsImNhbGxiYWNrTWV0ZXJFeHBpcmVkIiwiY3NzUGF0aCIsImluc2VydEJlZm9yZSIsImxhc3RDaGlsZCIsInJldmlzdGFzIiwicmVjYXJyZWdhUGlhbm8iLCJ0aXBvQ29udGV1ZG8iLCJpc0V4Y2x1c2l2byIsImNvbnN0cnV0b3IiLCJpbml0VHAiLCJleGVjdXRlIiwiaXNWYWxvciIsImlkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMiLCJpZFNhbmRib3hUaW55cGFzcyIsInNldFNhbmRCb3giLCJjbGVhbl91cmwiLCJsb2FkUGlhbm9FeHBlcmllbmNlcyIsImEiLCJhc3luYyIsInVybFNhbmRib3hQaWFub1JldmlzdGFzIiwidXJsU2FuZGJveFBpYW5vIiwiYiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGlhbm9Jbml0Iiwic3Vic2NyaXB0aW9ucyIsInNldE9uRW50aXRsZW1lbnRzUmVzcG9uc2UiLCJlbnRpdGxlbWVudHNQcm9taXNlIiwidGlueUluaXQiLCJzZXRQaWFubyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlO0FBQ1gsV0FBUztBQUNULGdCQUFZLE9BREg7QUFFVCxVQUFNO0FBRkcsR0FERTtBQUtYLGtCQUFnQjtBQUNoQixnQkFBWSxjQURJO0FBRWhCLFVBQU07QUFGVSxHQUxMO0FBU1gsV0FBUztBQUNULGdCQUFZLE9BREg7QUFFVCxVQUFNO0FBRkcsR0FURTtBQWFYLGFBQVc7QUFDWCxnQkFBWSxTQUREO0FBRVgsVUFBTTtBQUZLLEdBYkE7QUFpQlgsZ0JBQWM7QUFDZCxnQkFBWSxZQURFO0FBRWQsVUFB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICdlcG9jYSc6IHtcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2F1dG8tZXNwb3J0ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnYXV0by1lc3BvcnRlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICd2b2d1ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAndm9ndWUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2dsYW1vdXInOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dsYW1vdXInLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2Nhc2Etdm9ndWUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2Nhc2Etdm9ndWUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ21hcmllLWNsYWlyZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnbWFyaWUtY2xhaXJlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdjYXNhLWUtamFyZGltJzoge1xuICAgICdjb2RfcHJvZCc6ICdjYXNhLWphcmRpbScsXG4gICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdxdWVtLWFjb250ZWNlJzoge1xuICAgICdjb2RfcHJvZCc6ICdxdWVtJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdlcG9jYS1uZWdvY2lvcyc6IHtcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EtbmVnb2Npb3MnLFxuICAgICdpZCc6ICcwMDAwJ1xuICAgIH0sXG4gICAgJ2dsb2JvLXJ1cmFsJzoge1xuICAgICdjb2RfcHJvZCc6ICdnbG9iby1ydXJhbCcsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAncGVnbic6IHtcbiAgICAnY29kX3Byb2QnOiAncGVxdWVuYXMtZW1wcmVzYXMnLFxuICAgICdpZCc6ICcwMDAwJ1xuICAgIH0sXG4gICAgJ2dhbGlsZXUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dhbGlsZXUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2NyZXNjZXInOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2NyZXNjZXInLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2dxJzoge1xuICAgICdjb2RfcHJvZCc6ICdncScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnbW9uZXQnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ21vbmV0JyxcbiAgICAnaWQnOiAnNjYxOCdcbiAgICB9LFxuICAgICdvZ2xvYm8nOiB7XG4gICAgJ2NvZF9wcm9kJzogJ09HMDMnLFxuICAgICdpZCc6ICczOTgxJ1xuICAgIH0sXG4gICAgJ2Jsb2dzJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdrb2d1dCc6IHtcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXG4gICAgJ2lkJzogJzM5ODEnXG4gICAgfSxcbiAgICAnYWNlcnZvJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzA0JyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdqb3JuYWxkaWdpdGFsJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAxJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICd2YWxvcic6IHtcbiAgICAnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJyxcbiAgICAnaWQnOiAnNjY2OCdcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1ZzsgXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYiA9IGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZmJxICE9PSAndW5kZWZpbmVkJykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0UGl4ZWxUeXBlKCkge1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGhhc1BpeGVsID0gKHR5cGVvZiB0aGlzLmZiLnBpeGVsLm5hbWUgIT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZmIucGl4ZWwubmFtZSA6IG51bGw7IFxuXG4gICAgICAgIGlmKHRoaXMuaXNEZWZpbmVkICYmIGhhc1BpeGVsKXtcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MTAyNzAwMzk1MjA2MzQnKTtcbiAgICAgICAgICAgIGZicSgndHJhY2tTaW5nbGUnLCAnNDEwMjcwMDM5NTIwNjM0JywgdGhpcy5mYi5waXhlbC5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0EgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcuZ2E7XG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcbiAgICB9XG4gICAgXG4gICAgc2V0R2xvYmFsVmFycygpIHtcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgIHx8IFtdOyBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IgJiYgdHlwZW9mIF9nYXEgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgd2luZG93Ll9nYXEgPSB3aW5kb3cuX2dhcSAgfHwgW107ICBcbiAgICB9XG5cbiAgICBzZXRFdmVudHMoYWN0aW9uLCBsYWJlbCwgY2F0ZWdvcnkgPSAnUGlhbm8nKSB7XG5cblx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYSlcblx0XHRcdGNvbnNvbGUubG9nKCdsb2ctZ2EtZXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbClcblxuICAgICAgICBpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XG5cdFx0XG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogY2F0ZWdvcnksICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcbiAgICB9XG4gICAgXG4gICAgc2V0RXZlbnRzRXJyb3IoYWN0aW9uLCBsYWJlbCkge1xuXHRcdGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8gRXJybycsIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XG5cblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8gRXJybycsICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcblx0fVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XG5cbiAgICBzdGF0aWMgaXNEZWZpbmVkKHByb3ApIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcHJvcCAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZTogZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldENvb2tpZShjX25hbWUsIHZhbHVlLCBleHBpcmVkYXlzID0gbnVsbCkge1xuICAgICAgICBsZXQgZXhkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IG51bGw7XG5cbiAgICAgICAgaWYoIWhvc3RuYW1lKSByZXR1cm47XG5cbiAgICAgICAgZXhkYXRlLnNldERhdGUoZXhkYXRlLmdldERhdGUoKSArIGV4cGlyZWRheXMpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArZXNjYXBlKHZhbHVlKSArICgoZXhwaXJlZGF5cykgPyBcIlwiIDogXCI7ZXhwaXJlcz1cIiArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKVxuICAgICAgICArIFwiOyBwYXRoPS87XCIgKyBcImRvbWFpbj0uXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVsxXSArIFwiLlwiICsgaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClbMF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENvb2tpZShuYW1lKSB7XG4gICAgICAgIGxldCBtYXRjaCA9IChkb2N1bWVudC5jb29raWUpID8gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAobmFtZSsnPShbXjtdKyknKSkgOiBmYWxzZTtcbiAgICAgICAgbGV0IGNvb2tpZVRpbnkgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzFdLnRvU3RyaW5nKCkpIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRpbnk7XG4gICAgfVxuICAgICAgICBcblxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpYW5vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXRFeHBlcmllbmNlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy50aW55Q3B0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gd2luZG93LnRpbnlDcHQuUGlhbm87XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0RXhwZXJpZW5jZSgpIHsgIFxuICAgICAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSAnJzsgICBcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UgPSB7fTsgIFxuICAgICAgICAgXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKVxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3JlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhfSAtICR7d2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm99YCA6IHJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIFxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3dpbmRvdy5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcbiAgICAgICBcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSA9IGV4cGVyaWVuY2VOYW1lO1xuXHR9XG5cbiAgICByZXNldFV0cCgpIHtcbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQpXG4gICAgICAgICAgICBIZWxwZXJzLnNldENvb2tpZSh0aGlzLmNvbnRlbnQudmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCAnJywgLTEpO1xuICAgIH1cbn1cbiIsImltcG9ydCBwcm9kdWN0c0lkIGZyb20gJy4uL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xuICAgIH1cblxuICAgIHNldEdsb2JhbCgpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIFByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3ROYW1lLFxuICAgICAgICAgICAgICAgIC8vIGlkOiB0aGlzLnByb2R1Y3RJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24ocHJvZHVjdHNTZXR0aW5ncywgd2luZG93LnRpbnlDcHQpIDogcHJvZHVjdHNTZXR0aW5nczsgXG4gICAgfVxuICAgIFxuICAgIGdldCBpc1Byb2R1Y3RWYWxvcigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb2R1Y3ROYW1lICYmIHRoaXMucHJvZHVjdE5hbWUgPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBwcm9kdWN0SWQoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKCAodHlwZW9mIHByb2R1Y3RzSWRbdGhpcy5wcm9kdWN0TmFtZV0gIT09ICAndW5kZWZpbmVkJykgXG4gICAgICAgICYmICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCAhPT0gICd1bmRlZmluZWQnKSApXG4gICAgICAgID8gcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCA6IG51bGw7XG4gICAgICAgIFxuICAgIH1cblxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB3aW5kb3cuU1dHID0gd2luZG93LlNXRyB8fCBbXTsgLy9UT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGlzIHZhcmlhYmxlIGV4aXN0c1xuICAgICAgICB3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gd2luZG93LnN3Z0VudGl0bGVtZW50cyB8fCBudWxsO1xuICAgICAgICB0aGlzLmRlYnVnID0gKEhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgPyB3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vID0gKHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyBub21lUHJvZHV0b1BpYW5vIDogbnVsbDtcbiAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbEhlYWQgPSBkb2N1bWVudC5oZWFkOyBcblxuICAgICAgICB0aGlzLnNldEdsb2JhbFNXRygpO1xuICAgIH1cblxuICAgIGdldCBpc0RlZmluZWQoKSB7IFxuICAgICAgICByZXR1cm4gKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpID8gdHJ1ZSA6IGZhbHNlOyBcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxTV0coKSB7XG4gICAgICAgIGlmKCFIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpIHJldHVybjtcblxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cgPSB7XG4gICAgICAgICAgICBnbG9iYWw6ICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykgPyBzd2cgOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0VXRtcygpIHsgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgY29uc3QgdXRtc1Byb3BzID0gKHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgOiBudWxsOyBcblxuICAgICAgICB1dG1zUHJvcHMuZm9yRWFjaCgoaXRlbSkgPT4geyBcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgdXJsUGFyYW1zLnNldChgdXRtXyR7bmFtZX1gLCB2YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAnc2V0VXRtcycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgdXRtc1Byb3BzKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIGxvY2F0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmlzRGVmaW5lZCkgfHwgIXV0bXNQcm9wcyApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwuc3Vic2NyaWJlKCdici5jb20uaW5mb2dsb2JvLm9nbG9iby5zd2cuZ29vZ2xlJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiAgXG4gICAgICAgID8gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9wcm9kL3Byb2R1Y3RzLmpzb24nIFxuICAgICAgICA6ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF83YjBhNmRmNDk4OTU0NTlmYmFmZTQ5YTk2ZmNiNWJiZi9zd2cvZGV2L3Byb2R1Y3RzLmpzb24nO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3QoKSB7IFxuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnBpYW5vUHJvZHVjdE5hbWUgPT09IHRoaXMubG9jYWxQcm9kdWN0UGlhbm8gKVswXTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmVQcm9wZXJ0aWVzKG9iaikgeyBcbiAgICAgICAgY29uc3QgcHJvcHNUb1JlbW92ZSA9IFsncHJvZHVjdE5hbWUnLCAncGlhbm9Qcm9kdWN0TmFtZSddO1xuICAgICAgICBjb25zdCBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG4gICAgICAgIHByb3BzVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBuZXdPYmpbZWxlbWVudF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgYXN5bmMgbWFya3VwVGVtcGxhdGUoKSB7IFxuICAgICAgICBjb25zdCBwcm9kdWN0SlNPTiA9ICBhd2FpdCB0aGlzLnJlbW92ZVByb3BlcnRpZXMoYXdhaXQgdGhpcy5nZXRQcm9kdWN0KCkpIHx8IG51bGw7IFxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gT2JqZWN0LmtleXMocHJvZHVjdEpTT04pLmxlbmd0aCA/IEpTT04uc3RyaW5naWZ5KHByb2R1Y3RKU09OKSA6IG51bGw7XG5cbiAgICAgICAgaWYoIXByb2R1Y3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZih0aGlzLmRlYnVnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnbG9nLVNXRy1Qcm9kdWN0JzogcHJvZHVjdH0pO1xuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gYCR7IHByb2R1Y3QgfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZXRNYXJrdXAoKSB7IFxuICAgICAgICBhd2FpdCB0aGlzLm1hcmt1cFRlbXBsYXRlKCk7XG4gICAgICAgIGlmKCF0aGlzLnByb2R1Y3RKU09OKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgXG4gICAgICAgIGVsZW1lbnQudHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnByb2R1Y3RKU09OO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNldFN3Z1NjcmlwdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBlbGVtZW50LnNyYyA9ICdodHRwczovL25ld3MuZ29vZ2xlLmNvbS9zd2cvanMvdjEvc3dnLmpzJztcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzZXRBbGRlYmFyYW5TY3JpcHQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgdXJsUHJvZCA9ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF9jMTBhZTgxOWM1Njg0NjBiYjRlYzE3YzBhOGVjNTI2Ny9hbGRlYmFyYW4vanMvYnVuZGxlLmpzJztcbiAgICAgICAgY29uc3QgdXJsU3RnID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2FkZGM1ZThmMzE2ZjQ4ZWE5MTgxYWYzNzE2MGIyMmI0L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xuXG4gICAgICAgIGVsZW1lbnQuc3JjID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gdXJsUHJvZCA6IHVybFN0ZztcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0ZXN0U1dHKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LnN3Zykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsID0gd2luZG93LnN3ZztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdUaGVyZSBpc25cXCd0IHdpbmRvdy5zd2cnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xuICAgICAgICBhd2FpdCB0aGlzLnNldE1hcmt1cCgpOyAgXG4gICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuaGFzUHJvZHVjdEpTT04pIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3dnU2NyaXB0KCk7IFxuICAgICAgICBhd2FpdCB0aGlzLnNldEFsZGViYXJhblNjcmlwdCgpOyAgIFxuICAgICAgICBhd2FpdCB0aGlzLnRlc3RTV0coKTsgICAgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlueSAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcbiAgICAgICAgd2luZG93Lmhhc1BheXdhbGwgPSB3aW5kb3cuaGFzUGF5d2FsbCB8fCBudWxsO1xuICAgICAgICB3aW5kb3cudHAgPSB3aW5kb3cudHAgfHwgW107XG4gICAgICAgIHdpbmRvdy5QaWFubyA9IHdpbmRvdy5QaWFubyB8fCB7fTtcbiAgICAgICAgd2luZG93LlBheXdhbGxBbmFseXRpY3MgPSB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsVGlueSgpO1xuICAgICAgICB0aGlzLlByb2R1Y3RzLnNldEdsb2JhbCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxUaW55KCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgICAgIHRpbnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBheXdhbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN3ZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ2E6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNQcm9kdWN0aW9uOiAod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnKSA/IHRydWUgOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24oZGVmYXVsdFNldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBkZWZhdWx0U2V0dGluZ3M7IFxuICAgIH1cbiAgICBcbiAgICBzZXRQaWFubyhvYmopIHtcbiAgICAgICAgd2luZG93LnRpbnlDcHQuUGlhbm8gPSBvYmo7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsQ3B0SW5saW5lICB7XG5cdGNvbnN0cnVjdG9yKCkgeyBcblx0XHR0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XG5cblx0XHR0aGlzLmRvbWFpbiA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/ICdodHRwczovL2xvZ2luLmdsb2JvLmNvbS8nIDogJ2h0dHBzOi8vbG9naW4ucWEuZ2xvYm9pLmNvbS8nO1x0XG5cdFx0dGhpcy5wYXl3YWxsSWQgPSAncGF5d2FsbC1pbmxpbmUnXG5cdFx0dGhpcy5zZXRUZW1wbGF0ZVNldHRpbmdzKCgpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVGVtcGxhdGUoKVxuXHRcdH0pO1xuXHRcdHRoaXMuYWN0aXZlRXZlbnRzKClcblx0XHRcblx0XHR3aW5kb3cuUGF5d2FsbENwdElubGluZSA9IHRoaXM7XG5cblx0XHR3aW5kb3cudGlueUNwdC5QYXl3YWxsID0ge1xuXHRcdFx0ZG9tYWluOiB0aGlzLmRvbWFpblxuXHRcdH1cblx0fVxuXG5cdHNldFRlbXBsYXRlU2V0dGluZ3MoY2FsbGJhY2spIHtcblx0XHRsZXQgdGVtcGxhdGVTZXR0aW5ncyA9IHtcblx0XHRcdHRpdGxlOiAnUGFyYSBjb250aW51YXIgc3VhIGxlaXR1cmEsIMOpIHByZWNpc28gc2UgY2FkYXN0cmFyLicsXG5cdFx0XHRzdWJ0aXRsZTogJ8OJIHLDoXBpZG8gZSBncsOhdGlzIScsXG5cdFx0XHRidXR0b25UZXh0OiAnQ2FkYXN0cmUtc2UgZ3JhdHVpdGFtZW50ZSBhZ29yYScsXG5cdFx0XHRidXR0b25MaW5rOiAnaHR0cHM6Ly9nb29nbGUuY29tP2wxJyxcblx0XHRcdGxvZ2luUHJlVGV4dDogJ0rDoSBwb3NzdWkgY2FkYXN0cm8/ICcsXG5cdFx0XHRsb2dpblRleHQ6ICdGYcOnYSBsb2dpbicsXG5cdFx0XHRsb2dpbkxpbms6IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/ICdodHRwczovL2xvZ2luLmdsb2JvLmNvbS8nIDogJ2h0dHBzOi8vbG9naW4ucWEuZ2xvYm9pLmNvbS8nLCBcblx0XHRcdG9mZmVyTGluazogXCJodHRwczovL2dvb2dsZS5jb20/bDFcIixcblx0XHRcdGltYWdlTW9iaTogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDE1MFwiLFxuXHRcdFx0aW1hZ2VEZXNrOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDR4MTI4XCIsXG5cdFx0XHRpbWFnZUxpbms6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTBcIlxuXHRcdH07XG5cblx0XHR3aW5kb3cuZ2xiUGF5d2FsbElubGluZSA9ICh3aW5kb3cuZ2xiUGF5d2FsbElubGluZSkgPyAgT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVTZXR0aW5ncywgd2luZG93LmdsYlBheXdhbGxJbmxpbmUpIDogdGVtcGxhdGVTZXR0aW5nczsgXG5cblx0XHRjYWxsYmFjaygpO1xuXHR9XG5cbiAgICBhY3RpdmVFdmVudHMoKSB7XG5cdFx0dGhpcy5jbGFzc25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1yZWFkLW1vcmVcIik7XG5cdFx0dGhpcy5jbGFzc25hbWUuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNyZWF0ZVRlbXBsYXRlKGVsZW1lbnQpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuICBcdGNyZWF0ZVRlbXBsYXRlKGVsZW1lbnQpIHtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcy5lbEJvZHkgPSBlbGVtZW50O1xuXHRcdFx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMuY3NzTWluaWZpZWQpOyBcblx0XHRcdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTsgXG5cdFx0XHRjb25zdCByZW1vdmVkRWxlbWVudCA9IEFycmF5LmZyb20oZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2RlcykuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc05hbWUgPT09ICdvdGhlci1jb250ZW50Jylcblx0XHRcdHJlbW92ZWRFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpXG5cdFx0XHRlbGVtZW50LnJlbW92ZSgpXG5cdFx0fVxuXHQgIH1cblx0ICBcblx0Z2V0VXJsTG9naW5SZWdpc3Rlcih0eXBlID0gJycpIHtcblx0XHRjb25zdCB1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byA9IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09PSAncHJkJyA/ICdodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJyA6ICdodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJztcblx0XHRjb25zdCB1cmkgPSBsb2NhdGlvbi5ocmVmO1xuXHRcdGNvbnN0IHNlcnZpY2VJZCA9IHdpbmRvdy50aW55Q3B0LlBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSB8fCBudWxsO1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRsZXQgdXJsUmV0dXJuID0gJyc7XG5cdFxuXHRcdGlmKCF0aGlzLmRlYnVnICYmIHRoaXMuUGlhbm8uaXNEZWZpbmVkKSB7XG5cdFx0XHR1cmxSZXR1cm4gPSBlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHRcdHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvICsgJz9jb2RpZ29Qcm9kdXRvPScgKyAgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCkgXG5cdFx0XHRcdCsgJyZzZXJ2aWNlSWQ9JyArIHNlcnZpY2VJZFxuXHRcdFx0XHQrICcmYW1iaWVudGVVdGlsaXphZG89JyArIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vXG5cdFx0XHRcdCsgJyZub21lUHJvZHV0bz0nICsgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXG5cdFx0XHRcdCsgJyZ1cmxSZXRvcm5vPScgKyB1cmlcblx0XHRcdCk7XG5cdFxuXHRcdFx0aWYodHlwZSA9PT0gJ2J1dHRvbicpIHtcblx0XHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59Y2FkYXN0cm8vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59bG9naW4vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xuXHRcdFx0fVxuXHRcdH1cblx0XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXG4gIGdldCB0ZW1wbGF0ZVZhcnMoKSB7XG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbElubGluZTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXG5cdGNvbnN0IHRlbXBsYXRlID0gYFxuXHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zfFJhbGV3YXkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmVcIiBpZD0ke3RoaXMucGF5d2FsbElkfT4gXG5cdFx0XHQ8aDEgY2xhc3MgPVwicGF5d2FsbC1jcHQtaW5saW5lLXRpdGxlXCI+PHNwYW4gY2xhc3M9cGF5d2FsbC1jcHQtaW5saW5lLXRpdGxlLWZpcnN0X2xpbmU+JHt0aGlzLnRlbXBsYXRlVmFycy50aXRsZX08L3NwYW4+PGJyPjxzcGFuIGNsYXNzPXBheXdhbGwtY3B0LWlubGluZS10aXRsZS1zZWNvbmRfbGluZT4ke3RoaXMudGVtcGxhdGVWYXJzLnN1YnRpdGxlfTwvc3Bhbj48L2gxPlxuXHRcdFx0PGEgaHJlZj0ke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcignYnV0dG9uJyl9PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLXNwYW5cIj4ke3RoaXMudGVtcGxhdGVWYXJzLmJ1dHRvblRleHR9PC9zcGFuPlxuXHRcdFx0XHQ8L2J1dHRvbj4gXG5cdFx0XHQ8L2E+XG5cdFx0XHQ8cCBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1wXCI+JHt0aGlzLnRlbXBsYXRlVmFycy5sb2dpblByZVRleHR9PGEgaHJlZj0ke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfSBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1hXCI+JHt0aGlzLnRlbXBsYXRlVmFycy5sb2dpblRleHR9PC9hPjwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtb2ZmZXJcIj5cblx0XHRcdDxhIGhyZWY9JHt0aGlzLnRlbXBsYXRlVmFycy5vZmZlckxpbmt9PlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD0ke3RoaXMudGVtcGxhdGVWYXJzLmltYWdlTW9iaX0gbWVkaWE9XCIobWF4LXdpZHRoOiAzNzVweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD0ke3RoaXMudGVtcGxhdGVWYXJzLmltYWdlRGVza30gbWVkaWE9XCIobWluLXdpZHRoOiAzNzRweClcIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLWltZ1wiIHNyYz0ke3RoaXMudGVtcGxhdGVWYXJzLmltYWdlTGlua30gLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcblx0ICByZXR1cm4gYFxuXHQgIDxzdHlsZT5cblx0ICAucGF5d2FsbC1jcHQtaW5saW5le21hcmdpbjogMCBhdXRvIDQwcHg7cGFkZGluZzoyMHB4O2JvcmRlci1yYWRpdXM6IDRweDtib3JkZXI6IHNvbGlkIDFweCAjZGJkZGUxO2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjU7fS5wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGV7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzsgbWFyZ2luLWJvdHRvbTozMHB4O2Rpc3BsYXk6YmxvY2s7Zm9udC1mYW1pbHk6UmFsZXdheTtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDA7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjI7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiMzMjVlOTR9XG5cdCAgLnBheXdhbGwtY3B0LWlubGluZS1idXR0b257bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tYm90dG9tOjMwcHg7ZGlzcGxheTpibG9jazt3aWR0aDoyNTZweDtoZWlnaHQ6NDhweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNTljMDA7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOnNvbGlkIDNweCAjZjU5YzAwO31cblx0ICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjRweCkge1xuXHRcdC5wYXl3YWxsLWNwdC1pbmxpbmUtYnV0dG9uIHsgd2lkdGg6IDM1NnB4OyB9XG5cdCB9ICBcblx0IC5wYXl3YWxsLWNwdC1pbmxpbmUtaW1nIHttYXJnaW46IGF1dG87d2lkdGg6IDgwZW07fS5wYXl3YWxsLWNwdC1pbmxpbmUtc3BhbiB7Zm9udC1mYW1pbHk6T3BlbiBTYW5zO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuMzg7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmY7fS5wYXl3YWxsLWNwdC1pbmxpbmUtcHttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1ib3R0b246MzBweDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OlJhbGV3YXk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6MS4xNDtsZXR0ZXItc3BhY2luZzpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzcwNzA3MDt9LnBheXdhbGwtY3B0LWlubGluZS1he2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzI1ZTk0O30ucGF5d2FsbC1jcHQtaW5saW5lLW9mZmVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87YmFja2dyb3VuZC1jb2xvcjojZmZmO30gXG5cdCAgPC9zdHlsZT5gXG4gIH1cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuLi9IZWxwZXJzJztcbmltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi4vR0EnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsR0FNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XG4gICAgdGhpcy5HQSA9IG5ldyBHQU1vZHVsZSgpO1xuXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnLnBheXdhbGw7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWV0cmljcyA9IHtcbiAgICAgICAgcGF5d2FsbDoge30sXG4gICAgICAgIGZiOiB7XG4gICAgICAgICAgICBwaXhlbDoge31cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnBheXdhbGxUeXBlKCk7XG4gIH1cblxuICBwYXl3YWxsTG9hZCgpIHtcbiAgICBpZighdGhpcy5QaWFuby5pc0RlZmluZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCBfUGlhbm8gPSB0aGlzLlBpYW5vLmNvbnRlbnQ7XG5cbiAgICB0aGlzLkdBLnNldEV2ZW50cyh0aGlzLm1ldHJpY3MucGF5d2FsbC52aWV3TmFtZSwgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSk7XG4gICAgSGVscGVycy5zZXRDb29raWUoX1BpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcbiAgfVxuXG4gIHRyaWdnZXIoZWxlbWVudCkge1xuICAgIGlmKHRoaXMuZGlzYWJsZWQpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zdCByZXNldFV0cCA9IGVsZW1lbnQuZGF0YXNldC5nYVJlc2V0dXRwIHx8IG51bGw7XG4gICAgY29uc3QgaW1hZ2VUb3AgPSBlbGVtZW50LmRhdGFzZXQuZ2FJbWFnZVBvc2l0aW9uO1xuICAgIGNvbnN0IGxhYmVsID0gKGltYWdlVG9wID09PSAndG9wJykgPyBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbCArIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsIDogZWxlbWVudC5kYXRhc2V0LmdhTGFiZWw7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZXZlbnQ6ICdFdmVudG9HQScsXG4gICAgICBldmVudG9HQUNhdGVnb3JpYTogdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSxcbiAgICAgIGV2ZW50b0dBQWNhbzogZWxlbWVudC5kYXRhc2V0LmdhQWN0aW9uIHx8IGFjdGlvbixcbiAgICAgIGV2ZW50b0dBUm90dWxvOiBsYWJlbCxcbiAgICAgIGV2ZW50b0dBVmFsb3I6IDAsXG4gICAgICBldmVudG9HQUludGVyYWNhbzogZmFsc2UsXG4gICAgfTtcblxuICAgIGlmIChyZXNldFV0cClcbiAgICAgICAgdGhpcy5QaWFuby5yZXNldFV0cCgpO1xuXG4gICAgdGhpcy5zZXREYXRhbGF5ZXIoZGF0YSk7XG4gIH1cblxuICBwYXl3YWxsVHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gKCAodHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwgIT09ICd1bmRlZmluZWQnKSAmJiB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbClcbiAgICAgID8gd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwudG9Mb3dlckNhc2UoKVxuICAgICAgOiAncGF5d2FsbCc7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwudmlld05hbWUgPSAnRXhpYmljYW8gUmVnaXN0ZXInXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgY29tdW0nO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdDYWRhc3RyZS1zZSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4Y2x1c2l2byc6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0V4aWJpY2FvIFJlZ2lzdGVyJ1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ1JlZ2lzdGVyIGV4Y2x1c2l2byc7XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0Fzc2luZSBhZ29yYSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdMb2dpbkV4Y2x1c2l2byc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGF5d2FsbCc6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0JhcnJlaXJhJ1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ0JhcnJlaXJhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1BheXdhbGxFeGNsdXNpdm8nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXREYXRhbGF5ZXIoZGF0YSA9IHt9KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IFBheXdhbGxHQU1vZHVsZSBmcm9tICcuL1BheXdhbGwtZ2EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuLi9Td2cnO1xuaW1wb3J0IEZiTW9kdWxlIGZyb20gJy4uL0ZCJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbENwdCAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG5cdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcblx0dGhpcy5HQSA9IG5ldyBQYXl3YWxsR0FNb2R1bGUoKTtcblx0dGhpcy5TV0cgPSBuZXcgU3dnTW9kdWxlKCk7XG5cdHRoaXMuRkIgPSBuZXcgRmJNb2R1bGUodGhpcy5HQS5tZXRyaWNzLmZiKTtcblxuXHR0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcblx0dGhpcy5kb21haW4gPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJztcdFxuXHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xuXHRcdHRoaXMuaW5pdCgpOyBcblx0fSk7XG5cblx0d2luZG93LlBheXdhbGxDcHQgPSB0aGlzO1xuXG5cdHdpbmRvdy50aW55Q3B0LlBheXdhbGwgPSB7XG5cdFx0ZG9tYWluOiB0aGlzLmRvbWFpbixcblx0XHRHQTogdGhpcy5HQS5tZXRyaWNzLFxuXHR9O1xuICB9XG5cbiAgc2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xuXHRcdFx0dGVtcGxhdGU6ICdkZWZhdWx0Jyxcblx0XHRcdGFzc2V0c1BhdGg6ICcnLFxuXHRcdFx0ZGlzcGxheTogbnVsbCxcblx0XHRcdHByb2R1Y3RDbGFzczogdHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnID8gYHBheXdhbGwtY3B0LSR7bm9tZVByb2R1dG9QaWFub31gIDogJ3BheXdhbGwtY3B0LW9nbG9ibycsXG5cdFx0XHR0aXRsZTogJ0Vzc2UgY29udGXDumRvIMOpIG8gdMOtdHVsby4nLFxuXHRcdFx0dGFyZ2V0Qmxhbms6IHRydWUsXG5cdFx0XHR0b3BNb2JpOiAnJyxcblx0XHRcdHRvcERlc2s6ICcnLFxuXHRcdFx0dG9wTGluazogJycsXG5cdFx0XHRsZWZ0TW9iaTogJycsXG5cdFx0XHRsZWZ0RGVzazogJycsXG5cdFx0XHRsZWZ0TGluazogJycsXG5cdFx0XHRyaWdodE1vYmk6ICcnLFxuXHRcdFx0cmlnaHREZXNrOiAnJyxcblx0XHRcdHJpZ2h0TGluazogJydcblx0XHR9O1xuXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5oaWRlTG9naW5BcmVhID0gZmFsc2U7XG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5sb2dpblRleHQgPSAnRmHDp2EgbG9naW4nO1xuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5QcmVUZXh0ID0gJ0rDoSBwb3NzdWkgY2FkYXN0cm8/Jztcblx0XHRcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9ICh3aW5kb3cuZ2xiUGF5d2FsbCkgPyAgT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVTZXR0aW5ncywgd2luZG93LmdsYlBheXdhbGwpIDogdGVtcGxhdGVTZXR0aW5nczsgXG5cdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSBgJHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblByZVRleHR9IDxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGRhdGEtaXMtbG9naW49XCJ0cnVlXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDIgLSBGYcOnYSBsb2dpblwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJmYWxzZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIgJHt3aW5kb3cuZ2xiUGF5d2FsbC50YXJnZXRCbGFua30gXCI+JHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRleHR9PC9hPmA7XG5cblx0XHRpZih3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhKVxuXHRcdFx0dGhpcy5jbGVhckxvZ2luQXJlYSgpO1xuXG5cdFx0aWYodGhpcy5kZWJ1ZyApIFxuXHRcdFx0dGhpcy5zZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKTtcblx0XHRcblx0XHRjYWxsYmFjaygpO1xuXHR9XG5cblx0Y2xlYXJMb2dpbkFyZWEoKSB7XG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwpIHsgXG5cdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9ICcnO1xuXHRcdH1cblx0fVxuXG5cdHNldERlYnVnVGVtcGxhdGVTZXR0aW5ncygpIHtcblx0XHRsZXQgb2JqID0ge307XG5cdFx0b2JqLnRvcE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTAnO1xuXHRcdG9iai50b3BEZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDR4MTI4Jztcblx0XHRvYmoudG9wTGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDEnO1xuXHRcdG9iai5sZWZ0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XG5cdFx0b2JqLmxlZnREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoubGVmdExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wyJztcblx0XHRvYmoucmlnaHRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcblx0XHRvYmoucmlnaHREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoucmlnaHRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMyc7XG5cblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5nbGJQYXl3YWxsLCBvYmopO1xuXHR9XG4gXG4gIGJvZHlBZGp1c3QoKSB7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nLCAnaW1wb3J0YW50Jyk7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcsICdpbXBvcnRhbnQnKTtcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJzEwMCUnLCAnaW1wb3J0YW50Jyk7XG4gIH1cblxuICBzZXRFbFdyYXBwZXIoKSB7XG5cdHRoaXMuZWxDcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQnKTtcbiAgfVxuXG4gIHJlbW92ZUVsZW1lbnRzKCkge1xuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xuXG5cdGlmKHRoaXMuZWxDcHQpXG5cdFx0dGhpcy5lbENwdC5yZW1vdmUoKTtcblxuXHRjb25zdCBlbFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3RlY3RlZC1jb250ZW50LCAjaW5mb2FydGUtbWFpbi1jb250ZW50Jyk7XG5cblx0ZWxUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHQgIGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xuICB9XG5cbiAgY3JlYXRlVGVtcGxhdGUoKSB7XG5cdHRoaXMuZWxCb2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmJvZHlBZGp1c3QoKTtcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRzKCk7XG5cdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpOyBcblx0dGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHRcbiAgICBcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1xuICAgICAgICB9KTtcblx0fVxuXG5cdHRoaXMuR0EucGF5d2FsbExvYWQoKTtcbiAgfVxuXG4gIGFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKSB7XG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XG5cdHRoaXMuZWxDcHRXcmFwID0gdGhpcy5lbENwdC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQtd3JhcCcpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGNvbnN0IGVsQm9keUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIDQ7XG5cdFx0Y29uc3QgZWxDcHRXcmFwSGVpZ2h0ID0gdGhpcy5lbENwdFdyYXAub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBjdXJyZW50VG9wID0gKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykgXG4gICAgICAgID8gTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yIClcbiAgICAgICAgOiBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKTtcblx0XHRjb25zdCB0b3BXaXRoRnVsbEVsZW1lbnQgPSAoZWxCb2R5SGVpZ2h0IC0gZWxDcHRXcmFwSGVpZ2h0KTtcblxuXHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7Y3VycmVudFRvcH1weGA7XG5cdFx0dGhpcy5lbENwdC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnpJbmRleCA9IDk5OTk5OTk5OTk7XG5cblx0XHR0aGlzLmV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XG5cdFx0dGhpcy5ldnRUb3VjaChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xuXHRcdHRoaXMuYWN0aXZlRXZlbnRzKCk7XG5cblx0XHR0aGlzLkZCLnNldFBpeGVsVHlwZSgpO1xuXHR9LCAxMDAwKTtcbiAgfVxuXG4gIGFjdGl2ZUV2ZW50cygpIHtcblx0Y29uc3QgY2xpY2tUYXJnZXRzID0gdGhpcy5lbENwdFdyYXAucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXG5cdGNsaWNrVGFyZ2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luID0gQm9vbGVhbihlbGVtZW50LmRhdGFzZXQuaXNMb2dpbikgfHwgZmFsc2U7XG5cdFx0XHRjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGZhbHNlIDsgXG5cdFx0XHRjb25zdCBpc1VybFN3ZyA9ICh1cmwpID8gdXJsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ29mZXJ0YXN3ZycpIDogZmFsc2U7XG5cdFx0XHRjb25zdCBub3RCbGFuayA9IGVsZW1lbnQuZGF0YXNldC5ocmVmVGFyZ2V0IHx8IHRydWU7IFxuXHRcdFx0XG5cdFx0XHR0aGlzLkdBLnRyaWdnZXIoZWxlbWVudCk7IFxuXG5cdFx0XHRpZighaXNMb2dpbiAmJiBpc1VybFN3Zylcblx0XHRcdFx0dGhpcy5TV0cuc2V0VXRtcygpOyAgXG5cbiAgICAgICAgICAgIGlmICh1cmwgJiYgIWlzVXJsU3dnKSB7IFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdEJsYW5rID8gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsKSA6IHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cblx0XHR9LmJpbmQodGhpcykpO1xuXHR9KTtcbiAgfVxuXG4gIGV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xuXHRsZXQgbmV3dG9wID0gY3VycmVudFRvcDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnd2hlZWwnLFxuXHRcdGZ1bmN0aW9uKGV2dCkgeyBcblx0XHQgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VG9wIC8gMTAwO1xuXHRcdCAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xuXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA+PSAxKSB7XG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCAtIHN0ZXAgKiBtdWx0aXBsaWVyOyBcblx0XHRcdG5ld3RvcCA9IGVsVG9wIDwgdG9wV2l0aEZ1bGxFbGVtZW50ID8gdG9wV2l0aEZ1bGxFbGVtZW50IDogZWxUb3A7XG4gIFxuXHRcdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuXHRcdCAgfVxuICBcblx0XHQgIGlmIChldnQuZGVsdGFZIDw9IC0xKSB7XG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCArIHN0ZXAgKiBtdWx0aXBsaWVyO1xuXHRcdFx0bmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xuICBcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcblx0XHQgIH1cblx0XHR9LmJpbmQodGhpcylcblx0ICApO1xuICB9XG5cbiAgZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KSB7XG4gICAgbGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XG4gICAgbGV0IHRvdWNoc3RhcnRZID0gMDtcbiAgICBsZXQgdG91Y2hlbmRZID0gMDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgdG91Y2hzdGFydFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xuICAgICAgICB0b3VjaGVuZFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcblxuICAgICAgICBpZiAodG91Y2hlbmRZIDwgdG91Y2hzdGFydFkpIHsgXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnModG91Y2hzdGFydFkpIC0gTWF0aC5hYnModG91Y2hlbmRZKTtcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gZGlmZjsgXG4gICAgICAgICAgICBuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xuXG4gICAgICAgICAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG91Y2hlbmRZID4gdG91Y2hzdGFydFkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaGVuZFkgLSB0b3VjaHN0YXJ0WTtcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wICsgZGlmZjsgXG5cdFx0ICAgIG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcblxuXHRcdCAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG4gICAgICAgIH1cblx0fS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XG5cdGNvbnN0IHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvID0gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnID8gJ2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnIDogJ2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnO1xuXHRjb25zdCB1cmkgPSBsb2NhdGlvbi5ocmVmO1xuXHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcblx0bGV0IHN0ciA9ICcnO1xuXHRsZXQgdXJsUmV0dXJuID0gJyc7XG5cblx0aWYoIXRoaXMuZGVidWcgJiYgdGhpcy5QaWFuby5pc0RlZmluZWQpIHtcblx0XHR1cmxSZXR1cm4gPSBlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxuXHRcdFx0KyAnJnNlcnZpY2VJZD0nICsgc2VydmljZUlkXG5cdFx0XHQrICcmYW1iaWVudGVVdGlsaXphZG89JyArIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vXG5cdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxuXHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxuXHRcdCk7XG5cblx0XHRpZih0eXBlID09PSAncmVnaXN0ZXInKSB7XG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1jYWRhc3Ryby8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4gIGdldCB0ZW1wbGF0ZVZhcnMoKSB7XG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbDtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXG5cdGNvbnN0IHRlbXBsYXRlID0gYFxuXHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdCAke3RoaXMudGVtcGxhdGVWYXJzLnByb2R1Y3RDbGFzc31cIj4gXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkXCI+XG5cdFx0XHQke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfVxuXHRcdDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RvcFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BMaW5rfVwiIGRhdGEtZ2EtaW1hZ2UtcG9zaXRpb249XCJ0b3BcIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgMSAtXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXIgJHt3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhID8gJ2lzLWhpZGUnIDogJyd9XCI+XG5cdFx0ICBcdCR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5UYWd9XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19sZWZ0XCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRMaW5rfVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA0IC0gQmFubmVyIG9mZXJ0YSBlc3F1ZXJkYVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3JpZ2h0XCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TGlua31cIiAgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDUgLSBCYW5uZXIgb2ZlcnRhIGRpcmVpdGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0ICA8L2Rpdj5cblx0ICBgO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcblx0ICByZXR1cm4gYDxzdHlsZT5cblx0ICAucGF5d2FsbC1jcHR7b3BhY2l0eTowO3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDB2dztvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYm94LXNoYWRvdzowIDAgNzBweCAwIHJnYmEoMCwwLDAsLjUpO2JveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZn0ucGF5d2FsbC1jcHQsLnBheXdhbGwtY3B0ICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2V9LnBheXdhbGwtY3B0IGF7Zm9udC13ZWlnaHQ6NzAwO3RleHQtZGVjb3JhdGlvbjpub25lfS5wYXl3YWxsLWNwdCBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnBheXdhbGwtY3B0IC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0IGF7Y29sb3I6IzAwMH0ucGF5d2FsbC1jcHQtb2dsb2JvIC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0LW9nbG9ibyBhe2NvbG9yOiMzMjVlOTR9LnBheXdhbGwtY3B0LXdyYXB7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWJvdHRvbToyMHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsucGF5d2FsbC1jcHQtd3JhcHstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfX0ucGF5d2FsbC1jcHQtd3JhcCBpbWd7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b30ucGF5d2FsbC1jcHQtd3JhcF9fdG9we3BhZGRpbmctdG9wOjIwcHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwIDA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwfS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlcnt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwO2NvbG9yOiM3Njc2NzY7Zm9udC1zaXplOjE2cHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyLmlzLWhpZGV7cGFkZGluZy1ib3R0b206MH1cblx0ICA8L3N0eWxlPmA7XG4gIH1cblxuICBpbml0KCkgeyBcblx0ICBjb25zdCBkZWxheVRpbWVyID0gKHdpbmRvdy5nbGJQYXl3YWxsICYmIHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIpID8gd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lciAqIDEwMDAgOiAwO1xuXG5cdHNldFRpbWVvdXQoKCkgPT57XG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xuXHR9LCBkZWxheVRpbWVyKTtcbiAgfVxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5pbXBvcnQgVGlueU1vZHVsZSBmcm9tICcuL1RpbnknO1xuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4vR0EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuL1N3Zyc7XG5pbXBvcnQgUGF5d2FsbENwdCBmcm9tICcuL2NwbnQtcGF5d2FsbC9QYXl3YWxsJztcbmltcG9ydCBQYXl3YWxsQ3B0SW5saW5lIGZyb20gJy4vY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsJztcblxuY29uc3QgVGlueSA9IG5ldyBUaW55TW9kdWxlKCk7XG5jb25zdCBHQSA9IG5ldyBHQU1vZHVsZSgpO1xuXG5HQS5zZXRHbG9iYWxWYXJzKCk7XG5cblBpYW5vLnR5cGVQYXl3YWxsID0gbnVsbDtcblBpYW5vLnZhcmlhdmVpcyA9IHtcblx0YW1iaWVudGVzQWNlaXRvczogXCJpbnQscWx0LHByZFwiLFxuXHRzdGF0dXNIdHRwT2J0ZXJBdXRvcml6YWNhb0FjZXNzbzogXCI0MDAsNDA0LDQwNiw1MDAsNTAyLDUwMyw1MDRcIixcblx0c3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogXCI0MDAsNDA0LDUwMCw1MDIsNTAzLDUwNFwiLFxuXHRpc0NhbGxiYWNrTWV0dGVyRXhwaXJlZDogZmFsc2UsXG5cdGNvbnN0YW50ZToge1xuXHRcdGNvb2tpZToge1xuXHRcdFx0R0NPTTogJ0dMQklEJyxcblx0XHRcdFVUUDogJ191dHAnLFxuXHRcdFx0UlRJRVg6ICdfcnRpZXgnLFxuXHRcdFx0QU1CSUVOVEU6ICdhbWJpZW50ZVBpYW5vJyxcblx0XHRcdFNBVkVfU1VCU0NSSVBUSU9OOiAnc2F2ZVN1YnNjcmlwdGlvbkNvb2tpZScsXG5cdFx0XHRDUkVBVEVEX0dMT0JPSUQ6ICdjcmVhdGVkR2xvYm9JZCcsXG5cdFx0XHRHTE9CT0lEX01FU1NBR0U6ICdnbG9ib0lkTWVzc2FnZSdcblx0XHR9LFxuXHRcdG1ldHJpY2FzOiB7XG5cdFx0XHRFVkVOVE9fU0VNX0FDQU86ICdzZW0gYWNhbycsXG5cdFx0XHRFUlJPOiAnRXJybydcblx0XHR9LFxuXHRcdGtydXg6IHtcblx0XHRcdFNFR01FTlRBQ09FUzogJ2t4Z2xvYm9fc2VncycsXG5cdFx0XHRLUlVYTElHQURPOiAna3J1eC1saWdhZG8nXG5cdFx0fSxcblx0XHR1dGlsOiB7XG5cdFx0XHRJUDogXCIxMjcuMC4wLjFcIixcblx0XHRcdEFNQklFTlRFOiBcImFtYmllbnRlLWRlc2VqYWRvXCIsXG5cdFx0XHRERUJVRzogXCJkZWJ1Zy1waWFub1wiXG5cdFx0fVxuXHR9LFxuXHRpc0NvbnRldWRvRXhjbHVzaXZvOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LmNvbnRldWRvRXhjbHVzaXZvID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRnZXRBbWJpZW50ZVBpYW5vOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8udmFyaWF2ZWlzLmFtYmllbnRlc0FjZWl0b3MuaW5kZXhPZihQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSkgPiAtMSkge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUsIFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpLCAxKTtcblx0XHRcdHJldHVybiBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKTtcblx0XHR9XG5cdFx0aWYgKFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpID09ICdmYWxzZScpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBcIlwiLCAtMSk7XG5cdFx0fVxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSkpIHtcblx0XHRcdHJldHVybiBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmFtYmllbnRlc0FjZWl0b3MuaW5kZXhPZih3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubykgPiAtMSA/IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vIDogJ3ByZCc7XG5cdH0sXG5cdGdldFRpcG9Db250ZXVkb1BpYW5vOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LnRpcG9Db250ZXVkb1BpYW5vO1xuXHR9LFxuXHRleGVjdXRvdVBhZ2V2aWV3OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LmV4ZWN1dG91UGFnZXZpZXcgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldE5vbWVQcm9kdXRvOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXdpbmRvdy5ub21lUHJvZHV0b1BpYW5vKXtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiTm9tZSBkbyBwcm9kdXRvIG7Do28gZGVmaW5pZG8uXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vO1xuXHR9LFxuXHRnZXRTZXJ2aWNvSWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpZCA9ICcwMDAwJztcblxuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnb2dsb2JvJ1xuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdibG9ncydcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAna29ndXQnXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2FjZXJ2bydcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnam9ybmFsZGlnaXRhbCdcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYmxvZ0FuYWxpdGljbycpe1xuXHRcdFx0cmV0dXJuIGlkID0gJzM5ODEnO1xuXHRcdH1cblx0XHRpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSAmJiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ21vbmV0Jyl7XG5cdFx0XHRyZXR1cm4gaWQgPSAnNjYxOCc7XG5cdFx0fWVsc2UgaWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkpe1xuXHRcdFx0cmV0dXJuIGlkID0gJzY2OTcnO1xuXHRcdH1cblxuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAndmFsb3InKXtcbiAgICAgICAgICAgIHJldHVybiBpZCA9ICc2NjY4Jztcblx0XHR9XG5cblx0XHRpZiAoaWQgPT09ICcwMDAwJylcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdTZXJ2aWNlSUQgbsOjbyBkZWZpbmlkby4nLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmICtcblx0XHRcdFx0JyBub21lUHJvZHV0bzogJyArIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpICk7XG5cblx0XHRyZXR1cm4gaWQ7XG5cdH0sXG5cdGdldENvZGlnb1Byb2R1dG86IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG5vbWVQcm9kdXRvID0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCk7XG5cdFx0c3dpdGNoIChub21lUHJvZHV0byl7XG5cdFx0XHRjYXNlICdvZ2xvYm8nOlxuXHRcdFx0Y2FzZSAnYmxvZ3MnOlxuXHRcdFx0Y2FzZSAna29ndXQnOlxuXHRcdFx0XHRyZXR1cm4gJ09HMDMnO1xuXHRcdFx0Y2FzZSAnYWNlcnZvJzpcblx0XHRcdFx0cmV0dXJuICdPRzA0Jztcblx0XHRcdGNhc2UgJ2pvcm5hbGRpZ2l0YWwnOlxuXHRcdFx0XHRyZXR1cm4gJ09HMDEnO1xuXHRcdFx0Y2FzZSAnYXV0by1lc3BvcnRlJzpcblx0XHRcdGNhc2UgJ2Vwb2NhJzpcblx0XHRcdGNhc2UgJ3ZvZ3VlJzpcblx0XHRcdGNhc2UgJ2dsYW1vdXInOlxuXHRcdFx0Y2FzZSAnY2FzYS12b2d1ZSc6XG5cdFx0XHRjYXNlICdtYXJpZS1jbGFpcmUnOlxuXHRcdFx0Y2FzZSAnZ2xvYm8tcnVyYWwnOlxuXHRcdFx0Y2FzZSAnZ3EnOlxuXHRcdFx0Y2FzZSAnbW9uZXQnOlxuXHRcdFx0Y2FzZSAnY3Jlc2Nlcic6XG5cdFx0XHRjYXNlICdnYWxpbGV1Jzpcblx0XHRcdFx0cmV0dXJuIG5vbWVQcm9kdXRvO1xuXHRcdFx0Y2FzZSAnY2FzYS1lLWphcmRpbSc6XG5cdFx0XHRcdHJldHVybiAnY2FzYS1qYXJkaW0nO1xuXHRcdFx0Y2FzZSAncXVlbS1hY29udGVjZSc6XG5cdFx0XHRcdHJldHVybiAncXVlbSc7XG5cdFx0XHRjYXNlICd2YWxvcic6XG5cdFx0XHRcdHJldHVybiAndmFsb3JkaWdpdGFsJztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQW8gb2J0ZXIgY8OzZGlnbyBkbyBwcm9kdXRvXCIsIG5vbWVQcm9kdXRvICsgXCIgLSBcIiArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0XHRyZXR1cm4gJ2Vycm9yJztcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLmphbmVsYUFub25pbWEgPSB7XG5cdHJldHJ5IDogZnVuY3Rpb24oaXNEb25lLCBuZXh0KSB7XG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xuXHRcdHZhciBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VycmVudF90cmlhbCsrID4gbWF4X3JldHJ5KSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQxMFxuXHRcdCk7XG5cdH0sXG5cdGlzSUUxME9yTGF0ZXIgOiBmdW5jdGlvbih1c2VyX2FnZW50KSB7XG5cdFx0bGV0IHVhID0gdXNlcl9hZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xuXG5cdFx0aWYgKHVhLmluZGV4T2YoJ21zaWUnKSA9PT0gMCAmJiB1YS5pbmRleE9mKCd0cmlkZW50JykgPT09IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKG1hdGNoICYmIHBhcnNlSW50KG1hdGNoWzFdLCAxMCkgPj0gMTApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGRldGVjdFByaXZhdGVNb2RlIDogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgaXNfcHJpdmF0ZTtcblxuXHRcdGlmICh3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0pIHtcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbShcblx0XHRcdFx0d2luZG93LlRFTVBPUkFSWSwgMSxcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cuaW5kZXhlZERCICYmIC9GaXJlZm94Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0dmFyIGRiO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGIgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oJ3Rlc3QnKTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBpc19wcml2YXRlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLnJldHJ5KFxuXHRcdFx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkYi5yZWFkeVN0YXRlID09PSAnZG9uZScgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcblx0XHRcdFx0XHRcdGlmICghaXNfdGltZW91dCkge1xuXHRcdFx0XHRcdFx0XHRpc19wcml2YXRlID0gZGIucmVzdWx0ID8gZmFsc2UgOiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKFBpYW5vLmphbmVsYUFub25pbWEuaXNJRTEwT3JMYXRlcih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghd2luZG93LmluZGV4ZWREQikge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiAvU2FmYXJpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgMSk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3QnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLnJldHJ5KFxuXHRcdFx0ZnVuY3Rpb24gaXNEb25lKCkge1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGlzX3ByaXZhdGUgIT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdGZ1bmN0aW9uIG5leHQoaXNfdGltZW91dCkge1xuXHRcdFx0XHRjYWxsYmFjayhpc19wcml2YXRlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59O1xuXG5QaWFuby5rcnV4ID0ge1xuXHR0ZW06IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGxpZ2FkbzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPO1xuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnICYmIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vICE9IFwicHJkXCIpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnIHx8IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09IFwicHJkXCIpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgXCJcIiwgLTEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETykgPT0gXCJmYWxzZVwiKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRvYnRlbVNlZ21lbnRhY2FvOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8ua3J1eC50ZW0oKSAmJiBQaWFuby5rcnV4LmxpZ2FkbygpKSB7XG5cdFx0XHR2YXIgc2VnbWVudGFjb2VzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpLnNwbGl0KCcsJyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRhY29lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIHNlZ21lbnRhY29lc1tpXSwgc2VnbWVudGFjb2VzW2ldXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5yZWdpb25hbGl6YWNhbyA9IHtcblx0Z2V0UmVnaW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIga3J1eEdlbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdreGdsb2JvX2dlbycpO1xuXHRcdGlmIChrcnV4R2VvKSB7XG5cdFx0XHRrcnV4R2VvLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSBpdGVtLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBkYXRhWzBdO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBkYXRhWzFdO1xuXHRcdFx0XHRpZiAoa2V5ID09PSAncmVnaW9uJykge1xuXHRcdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJyZWdpb25cIiwgdmFsdWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5tZXRyaWNhcyA9IHtcblx0ZW52aWFFdmVudG9zR0E6IGZ1bmN0aW9uKF9HQUFjYW8sIF9HQVJvdHVsbykgeyAvL1RPRE86IGFycXVpdm8gdGlueXBhc3MuanMsIGluc2VyaWRvIHBlbGEgUGlhbm8sIHV0aWxpemEgZXNzYSBmdW7Dp8Ojb1xuXHRcdGNvbnN0IGlzUHJvZHVjdFZhbG9yID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc1Byb2R1Y3RWYWxvcilcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ1BpYW5vJywgX0dBQWNhbywgX0dBUm90dWxvLCAsdHJ1ZV0pO1xuXHRcdGVsc2Vcblx0XHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubycsICdldmVudG9HQUFjYW8nOiBfR0FBY2FvLCAnZXZlbnRvR0FSb3R1bG8nOl9HQVJvdHVsb30pO1xuXHR9LFxuXG5cdG1vbnRhUm90dWxvR0E6IGZ1bmN0aW9uKCkgeyAvL1RPRE86IGF0IFBpYW5vIGFzIHNldEV4cGVyaWVuY2UoKSB8IENoZWNrIG9uIG9sZCB0aW55IGJlZm9yZSByZW1vdmVcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xuXHRcdH1cblx0XHRyZXR1cm4gXCIgXCI7XG5cdH0sXG5cdHNldExpbWl0ZUNvbnRhZ2VtOiBmdW5jdGlvbihtZXRyaWNhcykge1xuXHRcdHdpbmRvdy5fR0FMaW1pdGUgPSBcIi1cIjtcblx0XHR3aW5kb3cuX0dBQ29udGFnZW0gPSBcIi1cIjtcblxuXHRcdGlmKCFtZXRyaWNhcykgcmV0dXJuO1xuXG5cdFx0d2luZG93Ll9HQUNvbnRhZ2VtID0gXCJcIiArIG1ldHJpY2FzLnZpZXdzO1xuXG5cdFx0aWYgKHdpbmRvdy5fR0FDb250YWdlbS5sZW5ndGggPT0gMSkge1xuXHRcdFx0d2luZG93Ll9HQUNvbnRhZ2VtID0gXCIwXCIgKyB3aW5kb3cuX0dBQ29udGFnZW07XG5cdFx0fVxuXHRcdHdpbmRvdy5fR0FMaW1pdGUgPSBtZXRyaWNhcy5ub21lRXhwZXJpZW5jaWEgK1wiIDogXCIrIG1ldHJpY2FzLm1heFZpZXdzO1xuXHR9LFxuXHRpZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXI6IGZ1bmN0aW9uKHJlZ3Jhcykge1xuXHRcdHZhciBwYXNzYWdlbSA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUubWV0cmljYXMuRVZFTlRPX1NFTV9BQ0FPO1xuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkge1xuXHRcdFx0cGFzc2FnZW0gPSByZWdyYXMuZmx1eG8uaW5kZXhPZihcImhhcmR3YWxsXCIpICE9IC0xID8gJ3JlZ2lzdGVyLWhhcmR3YWxsLXBhc3NvdScgOiAncmVnaXN0ZXItY29udGFnZW0tcGFzc291Jztcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0fVxuXHRcdHJldHVybiBwYXNzYWdlbTtcblx0fSxcblx0ZXhlY3V0YUFwb3NQYWdldmlldzogZnVuY3Rpb24oZXhwaXJvdSkge1xuXHRcdGlmICghUGlhbm8udmFyaWF2ZWlzLmV4ZWN1dG91UGFnZXZpZXcoKSkge1xuXHRcdFx0d2luZG93LnJlZ3Jhc1RpbnkuZmx1eG8gPSB3aW5kb3cudHBDb250ZXh0ID8gdHBDb250ZXh0LnRvTG93ZXJDYXNlKCkgOiAnLSc7XG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSB3aW5kb3cubm9tZUV4cGVyaWVuY2lhID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA6ICcnO1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0TGltaXRlQ29udGFnZW0od2luZG93LnJlZ3Jhc1RpbnkpO1xuXHRcdFx0aWYgKGV4cGlyb3UgPT0gZmFsc2UpIEdBLnNldEV2ZW50cyhQaWFuby5tZXRyaWNhcy5pZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXIod2luZG93LnJlZ3Jhc1RpbnkpLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0ZXhlY3V0b3VQYWdldmlldyA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRzZXRhVmFyaWF2ZWlzOiBmdW5jdGlvbihpZExvZ2luLCB0aXBvTG9naW4sIGFzc2luYXR1cmFMb2dhZGEpe1xuXHRcdFBheXdhbGxBbmFseXRpY3MuaWRMb2dpbkFzc2luYW50ZSA9IGlkTG9naW47XG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MudGlwb0xvZ2luQXNzaW5hbnRlID0gdGlwb0xvZ2luO1xuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLmFzc2luYXR1cmFMb2dhZGEgPSBhc3NpbmF0dXJhTG9nYWRhO1xuXHR9XG59O1xuXG5cblBpYW5vLmJhbm5lciA9IHtcblx0bW9zdHJhckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92by1iYW5uZXItZm9vdGVyLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8uanNcIik7XG5cdH0sXG5cdG1vc3RyYXJBdmF0YXJIZWFkZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYXZhdGFyLWhlYWRlci1waWFuby5qc1wiKTtcblx0fSxcblx0Ym90dG9tRml4ZWQ6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XG5cdFx0d2luZG93LmdsYkJhbm5lckJvdHRvbSA9IHBhcmFtcztcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc3R5bGVzL2Jhbm5lci1ib3R0b20tZml4ZWQuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc2NyaXB0cy9iYW5uZXItYm90dG9tLWZpeGVkLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyU1dHOiBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBjc3MgPSBgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zdHlsZXMvc3R5bGUuY3NzJz5gO1xuXHRcdGNvbnN0IHNjcmlwdEpzID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc2NyaXB0L2FudW5jaW8tc3dnLmpzYDtcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKGNzcyk7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKHNjcmlwdEpzKTtcblx0fSxcblx0bW9zdHJhckhpZ2hsaWdodFNhbGU6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc2NyaXB0cy9oaWdobGlnaHQtc2FsZS5qc1wiKTtcblx0fSxcblx0bW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvdmFsb3Itc3Vic2NyaWJlLWJ1dHRvbi9cIit2ZXJzYW8rXCIvc2NyaXB0cy9zdWJzY3JpYmUtYnV0dG9uLmpzXCIpO1xuXHR9XG5cbn07XG5cblBpYW5vLnJlZ2lzdGVyID0ge1xuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZhLXRlbGEtcmVnaXN0ZXIuanNcIik7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdH1cbn07XG5cblBpYW5vLmhlbHBlciA9IHtcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbigpIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF82NWQxOTMwYTBiZGE0NzZiYThkM2MyNWM1MzcxZWMzZi9waWFuby9oZWxwZXIvcmVnaXN0ZXIuanNcIik7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdH1cbn07XG5cblBpYW5vLnBheXdhbGwgPSB7XG5cdHJlZGlyZWNpb25hckJhcnJlaXJhOiBmdW5jdGlvbih1cmwpIHtcblx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7fSwgMTAwMCk7XG5cdH0sXG5cdHNob3c6IGZ1bmN0aW9uKHR5cGVQYXl3YWxsID0gbnVsbCkge1xuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdHlwZVBheXdhbGw7XG5cblx0XHR0cnkge1xuXHRcdFx0bmV3IFBheXdhbGxDcHQoKTtcblx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y2F0Y2goZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbCAtIEVycm9yIG9uIGxvYWQnKVxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XG5cdFx0fVxuXHR9LFxuXHRhbmFseXRpYzogZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRuZXcgUGF5d2FsbENwdElubGluZSgpO1xuXHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdQYXl3YWxsIC0gRXJyb3Igb24gbG9hZCcsIGVycilcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xuXHRcdH1cblx0fVxufTtcblxuUGlhbm8uY2hlY2tQaWFub0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0bGV0IGNvdW50ID0gMFxuXG5cdGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHRpZih3aW5kb3cudHAgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2VcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHRcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHMpXG5cdCAgICAge1xuXHRcdFx0UGlhbm8uY2hlY2tQYXl3YWxsKHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYoY291bnQgPT09IDEwKSB7XG5cdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0XHR9XG5cblx0XHRcdGNvdW50Kytcblx0XHR9XG5cblx0ICB9LCA1MDApO1xuXG59O1xuXG5QaWFuby5jaGVja1BheXdhbGwgPSBmdW5jdGlvbihQaWFub1Jlc3VsdEV2ZW50cyA9IG51bGwpIHtcbiAgIGxldCBoYXNSdW5Kc1dpdGhQYXl3YWxsID0gZmFsc2VcblxuXHRpZihQaWFub1Jlc3VsdEV2ZW50cykge1xuICAgICAgICBQaWFub1Jlc3VsdEV2ZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS5ldmVudFR5cGUgPT09ICdydW5KcycpIHtcblx0XHRcdFx0aWYoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0ICE9PSAndW5kZWZpbmVkJyAmJiAoaXRlbS5ldmVudFBhcmFtcy5zbmlwcGV0LmluY2x1ZGVzKCdwYXl3YWxsLnNob3cnKVxuXHRcdFx0XHR8fCBpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQuaW5jbHVkZXMoJ21vc3RyYXJCYXJyZWlyYScpICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZVxuXHRcdFx0XHRcdGhhc1J1bkpzV2l0aFBheXdhbGwgPSB0cnVlXG5cdFx0XHRcdFx0UGlhbm8udHJpZ2dlclBheXdhbGxPcGVuZWQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZighaGFzUnVuSnNXaXRoUGF5d2FsbClcbiAgICAgICAgICAgUGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKClcbiAgICB9XG5cbn07XG5cblBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZyA9IGZ1bmN0aW9uKCkge1xuXHR3aW5kb3cuaGFzUGF5d2FsbCA9IGZhbHNlO1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsZWFyRm9yQWRzJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5QaWFuby50cmlnZ2VyUGF5d2FsbE9wZW5lZCA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2Jsb2NrRm9yQWRzJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5QaWFuby5yZWdpc3RlclBheXdhbGwgPSB7XG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24odmVyc2FvID0gbnVsbCwgdGlwbyA9IG51bGwpIHtcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHRpcG87XG5cblx0XHRpZighdmVyc2FvIHx8ICFQaWFuby50eXBlUGF5d2FsbCApIHtcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFxuXHRcdFx0XHRcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8uanNcIixcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgIT09IDIwMCkge1xuXHRcdFx0XHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0aWYoUGlhbm8udHlwZVBheXdhbGwgPT09ICdyZWdpc3RlcicgfHwgUGlhbm8udHlwZVBheXdhbGwgPT09ICdleGNsdXNpdm8nICkge1xuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59O1xuXG5QaWFuby5jb211bmljYWRvID0ge1xuXHRtb3N0cmFySW5mb3JtYWNhbzogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2NvbXVuaWNhY2FvLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2NvbXVuaWNhY2FvLXBpYW5vLmpzXCIpO1xuXHR9XG59O1xuXG5QaWFuby5hZGJsb2NrID0ge1xuXHRtb3N0cmFyQWRCbG9jazogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcblxuXHRcdHBhcmFtcy5hc3NldHNQYXRoID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L2A7XG5cblx0XHR3aW5kb3cuZ2xiQWRibG9jayA9IHBhcmFtcztcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zY3JpcHRzL2FkYmxvY2stcGlhbm8uanNcIik7XG5cdH1cbn07XG5cblBpYW5vLmJsb3F1ZWlvcyA9IHtcblx0bGliZXJhckVzYzogZnVuY3Rpb24oKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jsb3F1ZWlvL2xpYmVyYVRlY2xhZG8uanNcIik7XG5cdH0sXG5cdGJsb3F1ZWlhVmlld01vZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vYmxvcXVlaWFWaWV3bW9kZS5qc1wiKTtcbiAgICB9XG59O1xuXG5QaWFuby5wYXJjZWlybyA9IHtcblx0bW9zdHJhRm9vdGVyUGFyY2Vpcm86IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvZm9vdGVyLXBhcmNlaXJvcy1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uaW5hZGltcGxlbnRlID0ge1xuXHRnZXRMaW5rQXNzaW5hdHVyYTogZnVuY3Rpb24obGluaykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluay5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGxpbmtbaV0ucmVsID09ICdhc3NpbmF0dXJhJykgcmV0dXJuIGxpbmtbaV0uaHJlZjtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5QaWFuby54bWxIdHRwUmVxdWVzdCA9IHtcblx0Z2VyYVNjcmlwdE5hUGFnaW5hOiBmdW5jdGlvbih1cmxTY3JpcHQsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybFNjcmlwdCk7XG5cdFx0eGhyLnNlbmQoKTtcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih0aGlzLnJlYWR5U3RhdGUgPT09IDQpe1xuXHRcdFx0XHRpZih0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0XHR2YXIgYXBwZW5kRGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRcdFx0XHRhcHBlbmREZVNjcmlwdC5pbm5lckhUTUwgPSByZXNwb3N0YTtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcGVuZERlU2NyaXB0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBuYSBmdW7Dp8OjbyBnZXJhciBzY3JpcHQgbmEgcMOhZ2luYS4nLCAndXJsOiAnICsgdXJsU2NyaXB0XG5cdFx0XHRcdFx0XHQrICcgU3RhdHVzRXJybzogJyArIHRoaXMuc3RhdHVzXG5cdFx0XHRcdFx0XHQrICcgU3RhY2s6ICcgKyB0aGlzLnN0YXR1c1RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGNhbGxiYWNrKVxuXHRcdFx0XHRjYWxsYmFjayh4aHIpO1xuXHRcdH07XG5cdH0sXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBmdW5jdGlvbihocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlLCBmYWxzZSk7XG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZCgpO1xuXG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XG5cdFx0XHRpZih4aHIuc3RhdHVzID09IDIwMCl7XG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xuXHRcdFx0XHR2YXIgc2l0dWFjYW9QYWdhbWVudG8gPSByZXNwSnNvbi5zaXR1YWNhb1BhZ2FtZW50by50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwic2l0dWFjYW9QYWdhbWVudG9cIiwgc2l0dWFjYW9QYWdhbWVudG9dKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9IDAgJiYgUGlhbm8udmFyaWF2ZWlzLnN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUuaW5kZXhPZih4aHIuc3RhdHVzKSA+IC0xKSB7XG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCBcIlN0YXR1cyBEZXNjb25oZWNpZG9cIiArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc286IGZ1bmN0aW9uKGdsYmlkKSB7XG5cblx0XHR2YXIgY29kaWdvUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCk7XG5cdFx0aWYoY29kaWdvUHJvZHV0byA9PSAnZXJyb3InKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ0b2tlbi1hdXRlbnRpY2FjYW9cIjogZ2xiaWQsIFwiaXBVc3VhcmlvXCI6IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5JUCwgXCJjb2RpZ29Qcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG99KTtcblxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxWZXJpZmljYUxlaXRvciwgZmFsc2UpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZChkYXRhKTtcblxuXHRcdGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApe1xuXHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHR2YXIgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3Bvc3RhKTtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gZmFsc2UsIHJlc3Bvc3RhRGVNb3Rpdm8gPSAnJywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSAnJztcblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5tb3Rpdm8gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdHJlc3Bvc3RhRGVNb3Rpdm8gPSByZXNwSnNvbi5tb3Rpdm8udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLnRlbVRlcm1vRGVVc28gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gcmVzcEpzb24udGVtVGVybW9EZVVzbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLmxpbmsgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gUGlhbm8uaW5hZGltcGxlbnRlLmdldExpbmtBc3NpbmF0dXJhKHJlc3BKc29uLmxpbmspO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBpc0F1dG9yaXphZG8gPSBQaWFuby5hdXRlbnRpY2FjYW8uaXNBdXRvcml6YWRvKHJlc3Bvc3RhRGVUZXJtb0RlVXNvLCByZXNwb3N0YURlTW90aXZvLCByZXNwSnNvbi5hdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8ocmVzcEpzb24uYXV0b3JpemFkbywgcmVzcG9zdGFEZU1vdGl2bywgaXNBdXRvcml6YWRvLCByZXNwb3N0YURlVGVybW9EZVVzbyk7XG5cdFx0XHRcdHZhciBfanNvbkxlaXRvciA9IHtcblx0XHRcdFx0XHRcdFwiYXV0b3JpemFkb1wiIDogcmVzcEpzb24uYXV0b3JpemFkbyxcblx0XHRcdFx0XHRcdFwibW90aXZvXCI6IHJlc3Bvc3RhRGVNb3Rpdm8sXG5cdFx0XHRcdFx0XHRcImxvZ2Fkb1wiOiBpc0F1dG9yaXphZG8sXG5cdFx0XHRcdFx0XHRcInRlbVRlcm1vRGVVc29cIjogcmVzcG9zdGFEZVRlcm1vRGVVc28sXG5cdFx0XHRcdFx0XHRcImdsYmlkXCI6IGdsYmlkLFxuXHRcdFx0XHRcdFx0XCJwcm9kdXRvXCI6IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpLFxuXHRcdFx0XHRcdFx0XCJjb2RQcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG8sXG5cdFx0XHRcdFx0XHRcInV1aWRcIjogcmVzcEpzb24udXN1YXJpb0lkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0X2pzb25MZWl0b3IgPSBidG9hKGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShfanNvbkxlaXRvcikpKTtcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBfanNvbkxlaXRvciwgMSk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aWYoUGlhbm8uZ29vZ2xlLnNob3dTYXZlU3Vic2NyaXB0aW9uKHJlc3BKc29uKSl7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHZhciBzd2dTZXJ2aWNlID0gbmV3IFN3Z1NlcnZpY2UoKTtcblx0XHRcdFx0XHRcdFx0c3dnU2VydmljZS5zYXZlR2xvYm9TdWJzY3JpcHRpb24oZ2xiaWQpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBhbyBjaGFtYXIgYSBmdW7Dp8OjbyBzaG93U2F2ZVN1YnNjcmlwdGlvbiBkbyBBbGRlYmFyYW4uJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1VSTDogJyArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEdMQklEOiAnICsgZ2xiaWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEVycm86ICcgKyBlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocmVzcEpzb24uYXV0b3JpemFkbyA9PSB0cnVlKXtcblx0XHRcdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKHJlc3BKc29uLnVzdWFyaW9JZCwgXCJHbG9ibyBJRFwiLCBcIk8gR2xvYm9cIik7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBUEkgZGUgYXV0b3JpemFjYW8gZGUgYWNlc3NvXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgZ2xiaWQpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8uZ29vZ2xlID0ge1xuICBpc0F1dGhvcml6ZWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZihzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpKXtcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKS5zdWJzY3JpcHRpb25Ub2tlbiwgXCJDb250YSBHb29nbGVcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSl7XG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCksIFwiQ29udGEgR29vZ2xlXCIsIFwiR29vZ2xlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGlzU3BlY2lmaWNHb29nbGVVc2VyOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8uZ29vZ2xlLmlzQXV0aG9yaXplZCgpKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dHJ5e1xuXHRcdFx0dmFyIG9HbG9ib0J1c2luZXNzID0gbmV3IE9HbG9ib0J1c2luZXNzKCk7XG5cdFx0XHRvR2xvYm9CdXNpbmVzcy52ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkKHN3Z0VudGl0bGVtZW50cyk7XG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJFcnJvIGFvIGV4ZWN1dGFyIG8gQWxkZWJhcmFuXCIsIFwiRXJyb3I6IFwiICsgZXJyb3IgKyBcIiAtIEVudGl0bGVtZW50czogXCIgKyBzd2dFbnRpdGxlbWVudHMuZW50aXRsZW1lbnRzWzBdLnN1YnNjcmlwdGlvblRva2VuKTtcblx0XHR9XG5cdH0sXG5cblx0c2hvd1NhdmVTdWJzY3JpcHRpb246IGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRpZighc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkgJiYgcmVzcG9uc2UubW90aXZvID09PVwiQVVUT1JJWkFET1wiICYmICFIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLlNBVkVfU1VCU0NSSVBUSU9OKSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cbn07XG5cblBpYW5vLmF1dGVudGljYWNhbyA9IHtcblx0aXNMb2dhZG9DYWR1bjogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xuXHRcdGlmICghZ2xiaWQpIHtcblx0XHRcdGlmICh1dHApIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0cmV0dXJuIGdsYmlkICE9ICcnO1xuXHR9LFxuXHR2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG86IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcblx0XHRpZiAoUGlhbm8uYXV0ZW50aWNhY2FvLmlzTG9nYWRvQ2FkdW4oZ2xiaWQsIHV0cCkpIHtcblx0XHRcdGlmICh1dHApIHtcblx0XHRcdFx0dmFyIF9sZWl0b3IgPSBKU09OLnBhcnNlKGRlY29kZVVSSShhdG9iKHV0cCkpKTtcblx0XHRcdFx0aWYgKGdsYmlkID09IF9sZWl0b3IuZ2xiaWQgJiYgKHR5cGVvZiBfbGVpdG9yLnByb2R1dG8gPT0gXCJ1bmRlZmluZWRcIiB8fCBfbGVpdG9yLnByb2R1dG8gPT0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpKSB7XG5cdFx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhfbGVpdG9yLmF1dG9yaXphZG8sIF9sZWl0b3IubW90aXZvLCBfbGVpdG9yLmxvZ2FkbywgX2xlaXRvci50ZW1UZXJtb0RlVXNvKTtcblx0XHRcdFx0XHRpZihfbGVpdG9yLmF1dG9yaXphZG8pe1xuXHRcdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhfbGVpdG9yLnV1aWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0XHR9XG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvKGdsYmlkKTtcblx0XHR9XG5cdH0sXG5cdGlzQXV0b3JpemFkbzogZnVuY3Rpb24odGVybW9EZVVzbywgbW90aXZvLCBhdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXHRcdGlmIChhdXRvcml6YWRvIHx8IG1vdGl2byA9PSBcImluZGlzcG9uaXZlbFwiIHx8IHRlcm1vRGVVc28gIT0gZmFsc2UpIHtcblx0XHRcdGlmIChhdXRvcml6YWRvICYmIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSBQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZShocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZWZpbmVVc3VhcmlvUGlhbm86ZnVuY3Rpb24oYXV0b3JpemFkbywgbW90aXZvLCBsb2dhZG8sIHRlbVRlcm1vRGVVc28pe1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhdXRvcml6YWRvXCIsIGF1dG9yaXphZG9dKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibW90aXZvXCIsIG1vdGl2b10pO1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJsb2dhZG9cIiwgbG9nYWRvXSk7XG5cdFx0aWYodGVtVGVybW9EZVVzbyAhPSBcIiBcIilcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ0ZW1UZXJtb1wiLCB0ZW1UZXJtb0RlVXNvXSk7XG5cdH1cbn07XG5cblBpYW5vLnV0aWwgPSB7XG5cdGlzU2VjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09PSAnc2VjdGlvbicgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdHRlbVZhcmlhdmVpc09icmlnYXRvcmlhczogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCB0aXBvQ29udGV1ZG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCBub21lUHJvZHV0b1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0ZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmw6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XG5cdFx0dmFyIGNoYXZlc0NhbXBhbmhhID0gWyd1dG1fbWVkaXVtJywndXRtX3NvdXJjZSddO1xuXHRcdHZhciB2YWxvcmVzQ2FtcGFuaGEgPSBbXTtcblxuXHRcdGZvciAodmFyIGlkeFBhcmFtQ2FtcGFuaGEgPSAwOyBpZHhQYXJhbUNhbXBhbmhhIDwgY2hhdmVzQ2FtcGFuaGEubGVuZ3RoOyBpZHhQYXJhbUNhbXBhbmhhKyspIHtcblx0XHRcdHZhciBjaGF2ZUNhbXBhbmhhID0gY2hhdmVzQ2FtcGFuaGFbaWR4UGFyYW1DYW1wYW5oYV07XG5cdFx0XHRpZiAodXJsLmluZGV4T2YoY2hhdmVDYW1wYW5oYSArICc9JykgIT0gLTEpIHtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBjaGF2ZUNhbXBhbmhhICsgXCI9KFteJiNdKilcIik7XG5cdFx0XHRcdHZhciB2YWxvckNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHRcdFx0aWYodmFsb3JDYW1wYW5oYSl7XG5cdFx0XHRcdFx0dmFsb3Jlc0NhbXBhbmhhLnB1c2godmFsb3JDYW1wYW5oYSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbG9yZXNDYW1wYW5oYS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidXRtXCIsIHZhbG9yZXNDYW1wYW5oYS5qb2luKFwiO1wiKV0pO1xuXHRcdH1cblx0XHRpZiAodXJsLmluZGV4T2YoJ3V0bV9jYW1wYWlnbj0nKSAhPSAtMSkge1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcInV0bV9jYW1wYWlnbj0oXFxcXHcrKVwiKTtcblx0XHRcdHZhciBjYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XG5cdFx0XHRpZihjYW1wYW5oYSl7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjYW1wYW5oYVwiLCBjYW1wYW5oYV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aXNPcmlnZW1CdXNjYWRvcjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIHJlZ2V4Um9ib3MgPSBuZXcgUmVnRXhwKFwiKGlhX2FyY2hpdmVyKXwoR29vZ2xlYm90KXwoTWVkaWFwYXJ0bmVycy1Hb29nbGUpfChBZHNCb3QtR29vZ2xlKXwobXNuYm90KXwoWWFob28hIFNsdXJwKXwoWnlCb3JnKXwoQXNrIEplZXZlcy9UZW9tYSl8KGJpbmdib3QpfChjWGVuc2Vib3QpXCIpO1xuXHRcdHZhciBlaFJvYm8gPSByZWdleFJvYm9zLnRlc3QodXNlckFnZW50KTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYnVzY2Fkb3JcIiwgZWhSb2JvXSk7XG5cdFx0cmV0dXJuIGVoUm9ibztcblx0fSxcblx0bW9udGFVcmxTdGc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpICE9ICdwcmQnID8gJy1zdGcnIDogJyc7XG5cdH0sXG5cdHRlbVBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbU5hbWUpIHtcblx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcblx0XHRyZXR1cm4gcGFyYW1ldHJvcy5pbmRleE9mKHBhcmFtTmFtZSkgIT0gLTEgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldFZhbG9yUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtZXRybykge1xuXHRcdGlmIChQaWFuby51dGlsLnRlbVBhcmFtZXRyb05hVXJsKHBhcmFtZXRybykpIHtcblx0XHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBwYXJhbWV0cm8gKyBcIj0oW14mI10qKVwiKTtcblx0XHRcdHJldHVybiBwYXJhbWV0cm9zLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuIFwic2VtIHBhcmFtZXRyb1wiO1xuXHR9LFxuXHRpc0RlYnVnOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHO1xuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGlzRG9taW5pb09HbG9ibzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIjovLyguKj8pL1wiKSwgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKTtcblx0XHRpZiAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwib2dsb2JvXCIpID4gLTEgfHwgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImdsb2JvaVwiKSA+IC0xICYmIHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImVkZ1wiKSA9PSAtMSkpIHtcblx0XHRcdHJldHVybiB1cmwubWF0Y2gocmVnZXgpWzFdO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH0sXG5cdGNhbGxiYWNrTWV0ZXI6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcoZmFsc2UpO1xuXHR9LFxuXHRjYWxsYmFja01ldGVyRXhwaXJlZDogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XG5cdFx0d2luZG93LnJlZ3Jhc1RpbnkgPSBtZXRlckRhdGE7XG5cdFx0UGlhbm8udmFyaWF2ZWlzLmlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkID0gdHJ1ZTtcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KHRydWUpO1xuXHR9LFxuXHRnZXRXaW5kb3dMb2NhdGlvblNlYXJjaDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0fSxcblx0Z2V0V2luZG93TG9jYXRpb25IcmVmOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0fSxcblx0YWRpY2lvbmFyQ3NzOiBmdW5jdGlvbihjc3NQYXRoKXtcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGUuaW5uZXJIVE1MID0gY3NzUGF0aDtcblx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlLCBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG5cdH0sXG5cdGlzUmV2aXN0YTogZnVuY3Rpb24oKXtcblx0XHR2YXIgcmV2aXN0YXMgPSBbXCJlcG9jYVwiLCBcImF1dG8tZXNwb3J0ZVwiLCBcInZvZ3VlXCIsIFwiZ2xhbW91clwiLCBcImNhc2Etdm9ndWVcIiwgXCJtYXJpZS1jbGFpcmVcIiwgXCJjYXNhLWUtamFyZGltXCIsIFwicXVlbS1hY29udGVjZVwiLCBcImdsb2JvLXJ1cmFsXCIsIFwiZ3FcIiwgXCJtb25ldFwiLCAnY3Jlc2NlcicsJ2dhbGlsZXUnXTtcblx0XHRpZihyZXZpc3Rhcy5pbmRleE9mKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSA+IC0xKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRyZWNhcnJlZ2FQaWFubzogZnVuY3Rpb24gKHRpcG9Db250ZXVkbywgaXNFeGNsdXNpdm8sIG5vbWVQcm9kdXRvKSB7XG5cdFx0d2luZG93LnRpcG9Db250ZXVkb1BpYW5vID0gdGlwb0NvbnRldWRvO1xuXHRcdHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA9IGlzRXhjbHVzaXZvO1xuXHRcdHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID0gbm9tZVByb2R1dG87XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cucmVncmFzVGlueSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSA9IFwiXCI7XG5cdFx0fVxuXHRcdFBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0dHAuZXhwZXJpZW5jZS5leGVjdXRlKCk7XG5cdH0sXG5cdGlzVmFsb3I6IGZ1bmN0aW9uICgpIHtcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gXCJ2YWxvclwiKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5QaWFuby5jb25maWd1cmFjYW8gPSB7XG5cdGpzb25Db25maWd1cmFjYW9UaW55UGFzczoge1xuXHRcdCdpbnQnOiB7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidkWHU3ZHZGS1JpJyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonTWN0RmdSQ0VzdScsXG5cdFx0XHQnc2V0U2FuZEJveCc6J3RydWUnLFxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1kWHU3ZHZGS1JpJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1NY3RGZ1JDRXN1Jyxcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xuXHRcdH0sXG5cdFx0J3FsdCc6e1xuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGlxbHQtaWcuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXG5cdFx0fSxcblx0XHQncHJkJzp7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6Jyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaS5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vJyxcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLmNvbnN0cnV0b3IgPSB7XG5cdGluaXRUcDogZnVuY3Rpb24oKSB7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiSW5pY2lvIEluaXRUcFwiKTtcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xuXHRcdHRwLnB1c2goW1wic2V0VGFnc1wiLCBbUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCldXSk7XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcblx0XHR9XG5cdFx0dHAucHVzaChbXCJzZXRTYW5kYm94XCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uc2V0U2FuZEJveF0pO1xuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcblx0XHR2YXIgY2xlYW5fdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKS5zcGxpdChcIj9cIilbMF07XG5cdFx0dHAucHVzaChbXCJzZXRQYWdlVVJMXCIsY2xlYW5fdXJsXSk7XG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm5vbWVQcm9kdXRvXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5kZXRlY3RQcml2YXRlTW9kZShmdW5jdGlvbiAoaXNfcHJpdmF0ZSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjb250ZXVkb0V4Y2x1c2l2b1wiLCB0cnVlXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnICYmICh0eXBlb2Ygc3dnRW50aXRsZW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiBzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSkgKSB7XG5cdFx0XHRQaWFuby5nb29nbGUuaXNTcGVjaWZpY0dvb2dsZVVzZXIoc3dnRW50aXRsZW1lbnRzKTtcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8odHJ1ZSxcIkFVVE9SSVpBRE9cIiwgdHJ1ZSwgXCJcIik7XG5cdFx0fWVsc2V7XG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8udmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkdDT00pLCBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFApKTtcblx0XHR9XG5cblx0XHRQaWFuby5yZWdpb25hbGl6YWNhby5nZXRSZWdpb24oKTtcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcblxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJiYW5uZXJDb250YWRvckxpZ2Fkb1wiLCB0cnVlXSk7XG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyQWN0aXZlXCIsIFBpYW5vLnV0aWwuY2FsbGJhY2tNZXRlcl0pO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyRXhwaXJlZFwiLCBQaWFuby51dGlsLmNhbGxiYWNrTWV0ZXJFeHBpcmVkXSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiRmltIEluaXRUcFwiKTtcblx0fVxufTtcblxuZnVuY3Rpb24gbG9hZFBpYW5vRXhwZXJpZW5jZXMoKXtcblx0dmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRhLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuXHRhLmFzeW5jID0gdHJ1ZTtcblx0aWYoUGlhbm8udXRpbC5pc1JldmlzdGEoKSB8fCBQaWFuby51dGlsLmlzVmFsb3IoKSkge1xuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm9SZXZpc3Rhcztcblx0fSBlbHNlIHtcblx0XHRhLnNyYyA9IFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsU2FuZGJveFBpYW5vO1xuXHR9XG5cblx0dmFyIGIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcblxuXHRiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuXHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJTY3JpcHQgYWRpY2lvbmFkb1wiKTtcbn1cblxuZnVuY3Rpb24gcGlhbm9Jbml0KCkge1xuXHR3aW5kb3cuUGlhbm8uY2hlY2tQaWFub0FjdGl2ZSgpXG5cblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxuXG4gICAgaWYgKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpIHtcblx0XHR3aW5kb3cuU1dHLnB1c2goKHN1YnNjcmlwdGlvbnMpID0+IHtcblx0XHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3Zylcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZy1zdWJzY3JpcHRpb25zJywgc3Vic2NyaXB0aW9ucylcblxuXHRcdFx0c3dnID0gc3Vic2NyaXB0aW9ucztcblxuXHRcdFx0c3Vic2NyaXB0aW9ucy5zZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlKGVudGl0bGVtZW50c1Byb21pc2UgPT4ge1xuXHRcdFx0XHRlbnRpdGxlbWVudHNQcm9taXNlLnRoZW4oZW50aXRsZW1lbnRzID0+IHtcblx0XHRcdFx0XHR3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gZW50aXRsZW1lbnRzO1xuXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFNXR1wiLCBcIkVudGl0bGVtZW50cyByZWNlYmlkb3NcIik7XG5cblx0XHRcdFx0XHRpZiAod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xuXHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xuXHRcdFx0XHRcdFx0XHRsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIlBpYW5vIG5hbyBmb2kgY2FycmVnYWRhIGNvcnJldGFtZW50ZSFcIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEdBLnNldEV2ZW50c0Vycm9yKFwiRW50aXRsZW1lbnRzIG7Do28gY2FycmVnYWRvXCIsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xuICAgICAgICAgICAgbG9hZFBpYW5vRXhwZXJpZW5jZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdGlueUluaXQoKSB7XG5cdFRpbnkuc2V0UGlhbm8oUGlhbm8pO1xuICAgIGNvbnN0IFN3ZyA9IG5ldyBTd2dNb2R1bGUoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IFN3Zy5pbml0KCk7XG5cdH1cblx0Y2F0Y2goZSkgeyBjb25zb2xlLmVycm9yKGUpIH1cblxuXHRwaWFub0luaXQoKTtcbn07XG5cbnRpbnlJbml0KCk7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9