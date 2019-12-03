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
      var template = "\n\t\t<link href=\"https://fonts.googleapis.com/css?family=Open+Sans|Raleway&display=swap\" rel=\"stylesheet\">\n\t\t<div class=\"paywall-cpt-inline\" id=".concat(this.paywallId, "> \n\t\t\t<h1 class =\"paywall-cpt-inline-title\">").concat(this.templateVars.title, "<br>").concat(this.templateVars.subtitle, "</h1>\n\t\t\t<a href=").concat(this.getUrlLoginRegister('button'), ">\n\t\t\t\t<button class=\"paywall-cpt-inline-button\">\n\t\t\t\t\t<span class=\"paywall-cpt-inline-span\">").concat(this.templateVars.buttonText, "</span>\n\t\t\t\t</button> \n\t\t\t</a>\n\t\t\t<p class=\"paywall-cpt-inline-p\">").concat(this.templateVars.loginPreText, "<a href=").concat(this.getUrlLoginRegister(), " class=\"paywall-cpt-inline-a\">").concat(this.templateVars.loginText, "</a></p>\n\t\t\t<div class=\"paywall-cpt-inline-offer\">\n\t\t\t<a href=").concat(this.templateVars.offerLink, ">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=").concat(this.templateVars.imageMobi, " media=\"(max-width: 1023px)\">\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.imageDesk, " media=\"(min-width: 1024px)\">\n\t\t\t\t\t<img src=").concat(this.templateVars.imageLink, " />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t</div>\n\t\t</div>\n\t");
      return template;
    }
  }, {
    key: "cssMinified",
    get: function get() {
      return "<style>.paywall-cpt-inline{margin: 0 auto 40px;padding:20px;border-radius: 4px;border: solid 1px #dbdde1;background-color: #f2f2f5;}.paywall-cpt-inline-title{margin-left:auto;margin-right:auto; margin-bottom:30px;display:block;font-family:Raleway;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.2;letter-spacing:normal;text-align:center;color:#325e94}.paywall-cpt-inline-button{margin-left:auto;margin-right:auto;margin-bottom:30px;display:block;width:356px;height:48px;background-color:#f59c00;border-radius:4px;border:solid 3px #f59c00}.paywall-cpt-inline-span{font-family:Open Sans;font-size:14px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;text-align:center;color:#fff}.paywall-cpt-inline-p{margin-left:auto;margin-right:auto;margin-botton:30px;display:block;font-family:Raleway;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.14;letter-spacing:normal;text-align:center;color:#707070}.paywall-cpt-inline-a{font-weight:700;color:#325e94}.paywall-cpt-inline-offer{margin-left:auto;margin-right:auto;background-color:#fff}\n\t  </style>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLWdhLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiRmIiLCJkYXRhIiwiZGVidWciLCJ3aW5kb3ciLCJ0aW55Q3B0IiwiZGlzYWJsZWQiLCJmYiIsImhhc1BpeGVsIiwicGl4ZWwiLCJuYW1lIiwiaXNEZWZpbmVkIiwiZmJxIiwiR0EiLCJnYSIsIlByb2R1Y3RzIiwiUHJvZHVjdHNNb2R1bGUiLCJkYXRhTGF5ZXIiLCJpc1Byb2R1Y3RWYWxvciIsIl9nYXEiLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJIZWxwZXJzIiwicHJvcCIsImNfbmFtZSIsInZhbHVlIiwiZXhwaXJlZGF5cyIsImV4ZGF0ZSIsIkRhdGUiLCJob3N0bmFtZSIsImxvY2F0aW9uIiwic2V0RGF0ZSIsImdldERhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsImVzY2FwZSIsInRvVVRDU3RyaW5nIiwic3BsaXQiLCJyZXZlcnNlIiwibWF0Y2giLCJSZWdFeHAiLCJjb29raWVUaW55IiwidW5lc2NhcGUiLCJ0b1N0cmluZyIsIlBpYW5vIiwiY29udGVudCIsInNldEV4cGVyaWVuY2UiLCJleHBlcmllbmNlTmFtZSIsImV4cGVyaWVuY2UiLCJyZWdyYXNUaW55Iiwibm9tZUV4cGVyaWVuY2lhIiwic3Vic2VnbWVudGFjYW9QaWFubyIsInNldENvb2tpZSIsInZhcmlhdmVpcyIsImNvbnN0YW50ZSIsIlVUUCIsInByb2R1Y3ROYW1lIiwibm9tZVByb2R1dG9QaWFubyIsInByb2R1Y3RzU2V0dGluZ3MiLCJQcm9kdWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdHNJZCIsImlkIiwiU3dnIiwiU1dHIiwic3dnRW50aXRsZW1lbnRzIiwic3dnIiwibG9jYWxQcm9kdWN0UGlhbm8iLCJoYXNQcm9kdWN0SlNPTiIsInByb2R1Y3RKU09OIiwiZWxIZWFkIiwiaGVhZCIsInNldEdsb2JhbFNXRyIsImdsb2JhbCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsInV0bXNQcm9wcyIsImdsYlBheXdhbGwiLCJ1dG1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsInNldCIsInN1YnNjcmliZSIsInVybCIsImlzUHJvZHVjdGlvbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvZHVjdCIsImZpbHRlciIsInBpYW5vUHJvZHVjdE5hbWUiLCJvYmoiLCJwcm9wc1RvUmVtb3ZlIiwibmV3T2JqIiwiZWxlbWVudCIsImdldFByb2R1Y3QiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXJrdXBUZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3JjIiwidXJsUHJvZCIsInVybFN0ZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldE1hcmt1cCIsInNldFN3Z1NjcmlwdCIsInNldEFsZGViYXJhblNjcmlwdCIsInRlc3RTV0ciLCJUaW55IiwiaGFzUGF5d2FsbCIsInRwIiwiUGF5d2FsbEFuYWx5dGljcyIsInNldEdsb2JhbFRpbnkiLCJzZXRHbG9iYWwiLCJpbml0IiwiZGVmYXVsdFNldHRpbmdzIiwidGlueSIsInBheXdhbGwiLCJhbWJpZW50ZVV0aWxpemFkb1BpYW5vIiwiUGF5d2FsbENwdElubGluZSIsIlBpYW5vTW9kdWxlIiwiZG9tYWluIiwicGF5d2FsbElkIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsImNyZWF0ZVRlbXBsYXRlIiwiYWN0aXZlRXZlbnRzIiwiUGF5d2FsbCIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRpdGxlIiwic3VidGl0bGUiLCJidXR0b25UZXh0IiwiYnV0dG9uTGluayIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGV4dCIsImxvZ2luTGluayIsIm9mZmVyTGluayIsImltYWdlTW9iaSIsImltYWdlRGVzayIsImltYWdlTGluayIsImdsYlBheXdhbGxJbmxpbmUiLCJjbGFzc25hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsQm9keSIsImluc2VydEFkamFjZW50SFRNTCIsImNzc01pbmlmaWVkIiwidGVtcGxhdGUiLCJyZW1vdmVkRWxlbWVudCIsIkFycmF5IiwiZnJvbSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZmluZCIsImNsYXNzTmFtZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlIiwidXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8iLCJ1cmkiLCJocmVmIiwic2VydmljZUlkIiwiZ2V0U2Vydmljb0lkIiwic3RyIiwidXJsUmV0dXJuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0Q29kaWdvUHJvZHV0byIsImdldE5vbWVQcm9kdXRvIiwidGVtcGxhdGVWYXJzIiwiZ2V0VXJsTG9naW5SZWdpc3RlciIsIlBheXdhbGxHQU1vZHVsZSIsIkdBTW9kdWxlIiwibWV0cmljcyIsInBheXdhbGxUeXBlIiwiX1BpYW5vIiwic2V0RXZlbnRzIiwiUlRJRVgiLCJyZXNldFV0cCIsImRhdGFzZXQiLCJnYVJlc2V0dXRwIiwiaW1hZ2VUb3AiLCJnYUltYWdlUG9zaXRpb24iLCJnYUxhYmVsIiwiZXZlbnQiLCJldmVudG9HQUNhdGVnb3JpYSIsImV2ZW50b0dBQWNhbyIsImdhQWN0aW9uIiwiZXZlbnRvR0FSb3R1bG8iLCJldmVudG9HQVZhbG9yIiwiZXZlbnRvR0FJbnRlcmFjYW8iLCJzZXREYXRhbGF5ZXIiLCJ0eXBlUGF5d2FsbCIsIlBheXdhbGxDcHQiLCJTd2dNb2R1bGUiLCJGQiIsIkZiTW9kdWxlIiwiYXNzZXRzUGF0aCIsImRpc3BsYXkiLCJwcm9kdWN0Q2xhc3MiLCJ0YXJnZXRCbGFuayIsInRvcE1vYmkiLCJ0b3BEZXNrIiwidG9wTGluayIsImxlZnRNb2JpIiwibGVmdERlc2siLCJsZWZ0TGluayIsInJpZ2h0TW9iaSIsInJpZ2h0RGVzayIsInJpZ2h0TGluayIsImhpZGVMb2dpbkFyZWEiLCJsb2dpblRhZyIsImNsZWFyTG9naW5BcmVhIiwic2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImVsQ3B0IiwicXVlcnlTZWxlY3RvciIsInNldEVsV3JhcHBlciIsImVsVG9SZW1vdmUiLCJib2R5IiwiYm9keUFkanVzdCIsInJlbW92ZUVsZW1lbnRzIiwiYWN0aXZlVGVtcGxhdGVTZXR0aW5ncyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwicGF5d2FsbExvYWQiLCJlbENwdFdyYXAiLCJzZXRUaW1lb3V0IiwiZWxCb2R5SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJlbENwdFdyYXBIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjdXJyZW50VG9wIiwiTWF0aCIsImFicyIsInRvcFdpdGhGdWxsRWxlbWVudCIsInRvcCIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJldnRXaGVlbCIsImV2dFRvdWNoIiwic2V0UGl4ZWxUeXBlIiwiY2xpY2tUYXJnZXRzIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJpc0xvZ2luIiwiQm9vbGVhbiIsImdldEF0dHJpYnV0ZSIsImlzVXJsU3dnIiwiaW5jbHVkZXMiLCJub3RCbGFuayIsImhyZWZUYXJnZXQiLCJ0cmlnZ2VyIiwic2V0VXRtcyIsIm9wZW4iLCJiaW5kIiwibmV3dG9wIiwic3RlcCIsIm11bHRpcGxpZXIiLCJkZWx0YVkiLCJlbFRvcCIsInRvdWNoc3RhcnRZIiwidG91Y2hlbmRZIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5ZIiwiZGlmZiIsImRlbGF5VGltZXIiLCJUaW55TW9kdWxlIiwic2V0R2xvYmFsVmFycyIsImFtYmllbnRlc0FjZWl0b3MiLCJzdGF0dXNIdHRwT2J0ZXJBdXRvcml6YWNhb0FjZXNzbyIsInN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJpc0NhbGxiYWNrTWV0dGVyRXhwaXJlZCIsIkdDT00iLCJBTUJJRU5URSIsIlNBVkVfU1VCU0NSSVBUSU9OIiwiQ1JFQVRFRF9HTE9CT0lEIiwiR0xPQk9JRF9NRVNTQUdFIiwibWV0cmljYXMiLCJFVkVOVE9fU0VNX0FDQU8iLCJFUlJPIiwia3J1eCIsIlNFR01FTlRBQ09FUyIsIktSVVhMSUdBRE8iLCJ1dGlsIiwiSVAiLCJERUJVRyIsImlzQ29udGV1ZG9FeGNsdXNpdm8iLCJjb250ZXVkb0V4Y2x1c2l2byIsImdldEFtYmllbnRlUGlhbm8iLCJpbmRleE9mIiwiZ2V0VmFsb3JQYXJhbWV0cm9OYVVybCIsImdldENvb2tpZSIsImdldFRpcG9Db250ZXVkb1BpYW5vIiwidGlwb0NvbnRldWRvUGlhbm8iLCJleGVjdXRvdVBhZ2V2aWV3Iiwic2V0RXZlbnRzRXJyb3IiLCJpc1JldmlzdGEiLCJub21lUHJvZHV0byIsImF1dGVudGljYWNhbyIsImRlZmluZVVzdWFyaW9QaWFubyIsImphbmVsYUFub25pbWEiLCJyZXRyeSIsImlzRG9uZSIsIm5leHQiLCJjdXJyZW50X3RyaWFsIiwibWF4X3JldHJ5IiwiaXNfdGltZW91dCIsImlzSUUxME9yTGF0ZXIiLCJ1c2VyX2FnZW50IiwidWEiLCJleGVjIiwicGFyc2VJbnQiLCJkZXRlY3RQcml2YXRlTW9kZSIsImlzX3ByaXZhdGUiLCJ3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSIsIlRFTVBPUkFSWSIsImUiLCJpbmRleGVkREIiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGIiLCJyZWFkeVN0YXRlIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ0ZW0iLCJnZXRJdGVtIiwibGlnYWRvIiwicGFyYW1ldHJvIiwidmFsb3JQYXJhbWV0cm8iLCJvYnRlbVNlZ21lbnRhY2FvIiwic2VnbWVudGFjb2VzIiwiaSIsInJlZ2lvbmFsaXphY2FvIiwiZ2V0UmVnaW9uIiwia3J1eEdlbyIsImtleSIsImVudmlhRXZlbnRvc0dBIiwiX0dBQWNhbyIsIl9HQVJvdHVsbyIsIm1vbnRhUm90dWxvR0EiLCJzZXRMaW1pdGVDb250YWdlbSIsIl9HQUxpbWl0ZSIsIl9HQUNvbnRhZ2VtIiwidmlld3MiLCJtYXhWaWV3cyIsImlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3RlciIsInJlZ3JhcyIsInBhc3NhZ2VtIiwiZmx1eG8iLCJleGVjdXRhQXBvc1BhZ2V2aWV3IiwiZXhwaXJvdSIsInRwQ29udGV4dCIsInNldGFWYXJpYXZlaXMiLCJpZExvZ2luIiwidGlwb0xvZ2luIiwiYXNzaW5hdHVyYUxvZ2FkYSIsImlkTG9naW5Bc3NpbmFudGUiLCJ0aXBvTG9naW5Bc3NpbmFudGUiLCJiYW5uZXIiLCJtb3N0cmFyRm9vdGVyIiwidmVyc2FvIiwiYWRpY2lvbmFyQ3NzIiwibW9udGFVcmxTdGciLCJ4bWxIdHRwUmVxdWVzdCIsImdlcmFTY3JpcHROYVBhZ2luYSIsIm1vc3RyYXJCb3Rhb0Fzc2luYXR1cmFIZWFkZXJGb290ZXIiLCJtb3N0cmFyQXZhdGFySGVhZGVyIiwiYm90dG9tRml4ZWQiLCJwYXJhbXMiLCJnbGJCYW5uZXJCb3R0b20iLCJtb3N0cmFyU1dHIiwiY3NzIiwic2NyaXB0SnMiLCJtb3N0cmFySGlnaGxpZ2h0U2FsZSIsIm1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvciIsInJlZ2lzdGVyIiwibW9zdHJhckJhcnJlaXJhIiwiaGVscGVyIiwicmVkaXJlY2lvbmFyQmFycmVpcmEiLCJzaG93IiwiZXJyb3IiLCJ0cmlnZ2VyQWR2ZXJ0aXNpbmciLCJhbmFseXRpYyIsImVyciIsImNoZWNrUGlhbm9BY3RpdmUiLCJfZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCIsImV2ZW50cyIsImNoZWNrUGF5d2FsbCIsIlBpYW5vUmVzdWx0RXZlbnRzIiwiaGFzUnVuSnNXaXRoUGF5d2FsbCIsImV2ZW50VHlwZSIsImV2ZW50UGFyYW1zIiwic25pcHBldCIsInRyaWdnZXJQYXl3YWxsT3BlbmVkIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwicmVnaXN0ZXJQYXl3YWxsIiwidGlwbyIsInN0YXR1cyIsImNvbXVuaWNhZG8iLCJtb3N0cmFySW5mb3JtYWNhbyIsImFkYmxvY2siLCJtb3N0cmFyQWRCbG9jayIsImdsYkFkYmxvY2siLCJibG9xdWVpb3MiLCJsaWJlcmFyRXNjIiwiYmxvcXVlaWFWaWV3TW9kZSIsInBhcmNlaXJvIiwibW9zdHJhRm9vdGVyUGFyY2Vpcm8iLCJpbmFkaW1wbGVudGUiLCJnZXRMaW5rQXNzaW5hdHVyYSIsImxpbmsiLCJyZWwiLCJ1cmxTY3JpcHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb3N0YSIsInJlc3BvbnNlVGV4dCIsImFwcGVuZERlU2NyaXB0IiwiYXBwZW5kQ2hpbGQiLCJzdGF0dXNUZXh0IiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXNwSnNvbiIsInBhcnNlIiwic2l0dWFjYW9QYWdhbWVudG8iLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvIiwiZ2xiaWQiLCJjb2RpZ29Qcm9kdXRvIiwiY29uZmlndXJhY2FvIiwianNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzIiwidXJsVmVyaWZpY2FMZWl0b3IiLCJyZXNwb3N0YURlVGVybW9EZVVzbyIsInJlc3Bvc3RhRGVNb3Rpdm8iLCJtb3Rpdm8iLCJ0ZW1UZXJtb0RlVXNvIiwiaXNBdXRvcml6YWRvIiwiYXV0b3JpemFkbyIsIl9qc29uTGVpdG9yIiwidXN1YXJpb0lkIiwiYnRvYSIsImVuY29kZVVSSSIsImdvb2dsZSIsInNob3dTYXZlU3Vic2NyaXB0aW9uIiwic3dnU2VydmljZSIsIlN3Z1NlcnZpY2UiLCJzYXZlR2xvYm9TdWJzY3JpcHRpb24iLCJpc0F1dGhvcml6ZWQiLCJnZXRFbnRpdGxlbWVudEZvclNvdXJjZSIsInN1YnNjcmlwdGlvblRva2VuIiwiaXNTcGVjaWZpY0dvb2dsZVVzZXIiLCJvR2xvYm9CdXNpbmVzcyIsIk9HbG9ib0J1c2luZXNzIiwidmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZCIsImVudGl0bGVtZW50cyIsInJlc3BvbnNlIiwiZW5hYmxlc1RoaXMiLCJpc0xvZ2Fkb0NhZHVuIiwidXRwIiwidmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvIiwiX2xlaXRvciIsImRlY29kZVVSSSIsImF0b2IiLCJwcm9kdXRvIiwibG9nYWRvIiwidXVpZCIsInRlcm1vRGVVc28iLCJpc1NlY3Rpb24iLCJ0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMiLCJleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCIsImdldFdpbmRvd0xvY2F0aW9uU2VhcmNoIiwiY2hhdmVzQ2FtcGFuaGEiLCJ2YWxvcmVzQ2FtcGFuaGEiLCJpZHhQYXJhbUNhbXBhbmhhIiwiY2hhdmVDYW1wYW5oYSIsInJlZ2V4IiwidmFsb3JDYW1wYW5oYSIsImpvaW4iLCJjYW1wYW5oYSIsImlzT3JpZ2VtQnVzY2Fkb3IiLCJyZWdleFJvYm9zIiwiZWhSb2JvIiwidGVtUGFyYW1ldHJvTmFVcmwiLCJwYXJhbU5hbWUiLCJwYXJhbWV0cm9zIiwiaXNEZWJ1ZyIsImlzRG9taW5pb09HbG9ibyIsImdldFdpbmRvd0xvY2F0aW9uSHJlZiIsImNhbGxiYWNrTWV0ZXIiLCJtZXRlckRhdGEiLCJjYWxsYmFja01ldGVyRXhwaXJlZCIsImNzc1BhdGgiLCJpbnNlcnRCZWZvcmUiLCJsYXN0Q2hpbGQiLCJyZXZpc3RhcyIsInJlY2FycmVnYVBpYW5vIiwidGlwb0NvbnRldWRvIiwiaXNFeGNsdXNpdm8iLCJjb25zdHJ1dG9yIiwiaW5pdFRwIiwiZXhlY3V0ZSIsImlzVmFsb3IiLCJpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzIiwiaWRTYW5kYm94VGlueXBhc3MiLCJzZXRTYW5kQm94IiwiY2xlYW5fdXJsIiwibG9hZFBpYW5vRXhwZXJpZW5jZXMiLCJhIiwiYXN5bmMiLCJ1cmxTYW5kYm94UGlhbm9SZXZpc3RhcyIsInVybFNhbmRib3hQaWFubyIsImIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBpYW5vSW5pdCIsInN1YnNjcmlwdGlvbnMiLCJzZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlIiwiZW50aXRsZW1lbnRzUHJvbWlzZSIsInRpbnlJbml0Iiwic2V0UGlhbm8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZTtBQUNYLFdBQVM7QUFDVCxnQkFBWSxPQURIO0FBRVQsVUFBTTtBQUZHLEdBREU7QUFLWCxrQkFBZ0I7QUFDaEIsZ0JBQVksY0FESTtBQUVoQixVQUFNO0FBRlUsR0FMTDtBQVNYLFdBQVM7QUFDVCxnQkFBWSxPQURIO0FBRVQsVUFBTTtBQUZHLEdBVEU7QUFhWCxhQUFXO0FBQ1gsZ0JBQVksU0FERDtBQUVYLFVBQU07QUFGSyxHQWJBO0FBaUJYLGdCQUFjO0FBQ2QsZ0JBQVksWUFERTtBQUVkLFVBQU07QUFGUSxHQWpC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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGlueS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3NjcmlwdHMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgJ2Vwb2NhJzoge1xuICAgICdjb2RfcHJvZCc6ICdlcG9jYScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnYXV0by1lc3BvcnRlJzoge1xuICAgICdjb2RfcHJvZCc6ICdhdXRvLWVzcG9ydGUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ3ZvZ3VlJzoge1xuICAgICdjb2RfcHJvZCc6ICd2b2d1ZScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnZ2xhbW91cic6IHtcbiAgICAnY29kX3Byb2QnOiAnZ2xhbW91cicsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnY2FzYS12b2d1ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnY2FzYS12b2d1ZScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnbWFyaWUtY2xhaXJlJzoge1xuICAgICdjb2RfcHJvZCc6ICdtYXJpZS1jbGFpcmUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2Nhc2EtZS1qYXJkaW0nOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2Nhc2EtamFyZGltJyxcbiAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ3F1ZW0tYWNvbnRlY2UnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ3F1ZW0nLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2Vwb2NhLW5lZ29jaW9zJzoge1xuICAgICdjb2RfcHJvZCc6ICdlcG9jYS1uZWdvY2lvcycsXG4gICAgJ2lkJzogJzAwMDAnXG4gICAgfSxcbiAgICAnZ2xvYm8tcnVyYWwnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dsb2JvLXJ1cmFsJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdwZWduJzoge1xuICAgICdjb2RfcHJvZCc6ICdwZXF1ZW5hcy1lbXByZXNhcycsXG4gICAgJ2lkJzogJzAwMDAnXG4gICAgfSxcbiAgICAnZ2FsaWxldSc6IHtcbiAgICAnY29kX3Byb2QnOiAnZ2FsaWxldScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnY3Jlc2Nlcic6IHtcbiAgICAnY29kX3Byb2QnOiAnY3Jlc2NlcicsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnZ3EnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dxJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdtb25ldCc6IHtcbiAgICAnY29kX3Byb2QnOiAnbW9uZXQnLFxuICAgICdpZCc6ICc2NjE4J1xuICAgIH0sXG4gICAgJ29nbG9ibyc6IHtcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXG4gICAgJ2lkJzogJzM5ODEnXG4gICAgfSxcbiAgICAnYmxvZ3MnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ09HMDMnLFxuICAgICdpZCc6ICczOTgxJ1xuICAgIH0sXG4gICAgJ2tvZ3V0Jzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdhY2Vydm8nOiB7XG4gICAgJ2NvZF9wcm9kJzogJ09HMDQnLFxuICAgICdpZCc6ICczOTgxJ1xuICAgIH0sXG4gICAgJ2pvcm5hbGRpZ2l0YWwnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ09HMDEnLFxuICAgICdpZCc6ICczOTgxJ1xuICAgIH0sXG4gICAgJ3ZhbG9yJzoge1xuICAgICdjb2RfcHJvZCc6ICd2YWxvcmRpZ2l0YWwnLFxuICAgICdpZCc6ICc2NjY4J1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGYiB7XG4gICAgY29uc3RydWN0b3IoZGF0YSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZiID0gZGF0YTtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWZpbmVkKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBmYnEgIT09ICd1bmRlZmluZWQnKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRQaXhlbFR5cGUoKSB7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaGFzUGl4ZWwgPSAodHlwZW9mIHRoaXMuZmIucGl4ZWwubmFtZSAhPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5mYi5waXhlbC5uYW1lIDogbnVsbDsgXG5cbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQgJiYgaGFzUGl4ZWwpe1xuICAgICAgICAgICAgZmJxKCdpbml0JywgJzQxMDI3MDAzOTUyMDYzNCcpO1xuICAgICAgICAgICAgZmJxKCd0cmFja1NpbmdsZScsICc0MTAyNzAwMzk1MjA2MzQnLCB0aGlzLmZiLnBpeGVsLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQSAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYTtcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xuICAgIH1cbiAgICBcbiAgICBzZXRHbG9iYWxWYXJzKCkge1xuICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciAgfHwgW107IFxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvciAmJiB0eXBlb2YgX2dhcSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxICB8fCBbXTsgIFxuICAgIH1cblxuICAgIHNldEV2ZW50cyhhY3Rpb24sIGxhYmVsLCBjYXRlZ29yeSA9ICdQaWFubycpIHtcblxuXHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhKVxuXHRcdFx0Y29uc29sZS5sb2coJ2xvZy1nYS1ldmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKVxuXG4gICAgICAgIGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgLHRydWVdKTtcblx0XHRcblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiBjYXRlZ29yeSwgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xuICAgIH1cbiAgICBcbiAgICBzZXRFdmVudHNFcnJvcihhY3Rpb24sIGxhYmVsKSB7XG5cdFx0aWYgKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IpXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdQaWFubyBFcnJvJywgYWN0aW9uLCBsYWJlbCwgLHRydWVdKTtcblxuXHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubyBFcnJvJywgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xuXHR9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcblxuICAgIHN0YXRpYyBpc0RlZmluZWQocHJvcCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBwcm9wICE9PSAndW5kZWZpbmVkJykgPyB0cnVlOiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q29va2llKGNfbmFtZSwgdmFsdWUsIGV4cGlyZWRheXMgPSBudWxsKSB7XG4gICAgICAgIGxldCBleGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSA/IGxvY2F0aW9uLmhvc3RuYW1lIDogbnVsbDtcblxuICAgICAgICBpZighaG9zdG5hbWUpIHJldHVybjtcblxuICAgICAgICBleGRhdGUuc2V0RGF0ZShleGRhdGUuZ2V0RGF0ZSgpICsgZXhwaXJlZGF5cyk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNfbmFtZSArIFwiPVwiICtlc2NhcGUodmFsdWUpICsgKChleHBpcmVkYXlzKSA/IFwiXCIgOiBcIjtleHBpcmVzPVwiICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkpXG4gICAgICAgICsgXCI7IHBhdGg9LztcIiArIFwiZG9tYWluPS5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzFdICsgXCIuXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVswXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWUpIHtcbiAgICAgICAgbGV0IG1hdGNoID0gKGRvY3VtZW50LmNvb2tpZSkgPyBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChuYW1lKyc9KFteO10rKScpKSA6IGZhbHNlO1xuICAgICAgICBsZXQgY29va2llVGlueSA9IG1hdGNoID8gdW5lc2NhcGUobWF0Y2hbMV0udG9TdHJpbmcoKSkgOiBcIlwiO1xuICAgICAgICByZXR1cm4gY29va2llVGlueTtcbiAgICB9XG4gICAgICAgIFxuXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNldEV4cGVyaWVuY2UoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWZpbmVkKCkge1xuICAgICAgICBpZih0eXBlb2Ygd2luZG93LnRpbnlDcHQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcpIHsgXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB3aW5kb3cudGlueUNwdC5QaWFubztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRFeHBlcmllbmNlKCkgeyAgXG4gICAgICAgIGxldCBleHBlcmllbmNlTmFtZSA9ICcnOyAgIFxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZSA9IHt9OyAgXG4gICAgICAgICBcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7cmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XG4gICAgICAgIFxuICAgICAgICBpZiAod2luZG93Lm5vbWVFeHBlcmllbmNpYSkgXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7d2luZG93Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xuICAgICAgIFxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZS5uYW1lID0gZXhwZXJpZW5jZU5hbWU7XG5cdH1cblxuICAgIHJlc2V0VXRwKCkge1xuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZClcbiAgICAgICAgICAgIEhlbHBlcnMuc2V0Q29va2llKHRoaXMuY29udGVudC52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsICcnLCAtMSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHByb2R1Y3RzSWQgZnJvbSAnLi4vbW9ja3MvcHJvZHVjdHMvcHJvZHVjdHMtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWUgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA6IG51bGw7XG4gICAgfVxuXG4gICAgc2V0R2xvYmFsKCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0c1NldHRpbmdzID0ge1xuICAgICAgICAgICAgUHJvZHVjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvZHVjdE5hbWUsXG4gICAgICAgICAgICAgICAgLy8gaWQ6IHRoaXMucHJvZHVjdElkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihwcm9kdWN0c1NldHRpbmdzLCB3aW5kb3cudGlueUNwdCkgOiBwcm9kdWN0c1NldHRpbmdzOyBcbiAgICB9XG4gICAgXG4gICAgZ2V0IGlzUHJvZHVjdFZhbG9yKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucHJvZHVjdE5hbWUgJiYgdGhpcy5wcm9kdWN0TmFtZSA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHByb2R1Y3RJZCgpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXSAhPT0gICd1bmRlZmluZWQnKSBcbiAgICAgICAgJiYgKHR5cGVvZiBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkICE9PSAgJ3VuZGVmaW5lZCcpIClcbiAgICAgICAgPyBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkIDogbnVsbDtcbiAgICAgICAgXG4gICAgfVxuXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHdpbmRvdy5TV0cgPSB3aW5kb3cuU1dHIHx8IFtdOyAvL1RPRE86IFVuZGVyc3RhbmQgd2h5IHRoaXMgdmFyaWFibGUgZXhpc3RzXG4gICAgICAgIHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSB3aW5kb3cuc3dnRW50aXRsZW1lbnRzIHx8IG51bGw7XG4gICAgICAgIHRoaXMuZGVidWcgPSAoSGVscGVycy5pc0RlZmluZWQod2luZG93LnRpbnlDcHQpKSA/IHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZyA6IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxQcm9kdWN0UGlhbm8gPSAodHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnKSA/IG5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xuICAgICAgICB0aGlzLmhhc1Byb2R1Y3RKU09OID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBudWxsO1xuICAgICAgICB0aGlzLmVsSGVhZCA9IGRvY3VtZW50LmhlYWQ7IFxuXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsU1dHKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHsgXG4gICAgICAgIHJldHVybiAod2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCkgPyB0cnVlIDogZmFsc2U7IFxuICAgIH1cblxuICAgIHNldEdsb2JhbFNXRygpIHtcbiAgICAgICAgaWYoIUhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgcmV0dXJuO1xuXG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlN3ZyA9IHtcbiAgICAgICAgICAgIGdsb2JhbDogKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSA/IHN3ZyA6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRVdG1zKCkgeyAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBjb25zdCB1dG1zUHJvcHMgPSAodHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5nbGJQYXl3YWxsLnN3Zy51dG1zICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyA6IG51bGw7IFxuXG4gICAgICAgIHV0bXNQcm9wcy5mb3JFYWNoKChpdGVtKSA9PiB7IFxuICAgICAgICAgICAgbGV0IG5hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICB1cmxQYXJhbXMuc2V0KGB1dG1fJHtuYW1lfWAsIHZhbHVlKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdzZXRVdG1zJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCB1dG1zUHJvcHMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgbG9jYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBpZiggKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMuaXNEZWZpbmVkKSB8fCAhdXRtc1Byb3BzICkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbC5zdWJzY3JpYmUoJ2JyLmNvbS5pbmZvZ2xvYm8ub2dsb2JvLnN3Zy5nb29nbGUnKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uICBcbiAgICAgICAgPyAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfN2IwYTZkZjQ5ODk1NDU5ZmJhZmU0OWE5NmZjYjViYmYvc3dnL3Byb2QvcHJvZHVjdHMuanNvbicgXG4gICAgICAgIDogJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9kZXYvcHJvZHVjdHMuanNvbic7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdCgpIHsgXG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0ucGlhbm9Qcm9kdWN0TmFtZSA9PT0gdGhpcy5sb2NhbFByb2R1Y3RQaWFubyApWzBdO1xuICAgICAgICByZXR1cm4gcHJvZHVjdCB8fCBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZVByb3BlcnRpZXMob2JqKSB7IFxuICAgICAgICBjb25zdCBwcm9wc1RvUmVtb3ZlID0gWydwcm9kdWN0TmFtZScsICdwaWFub1Byb2R1Y3ROYW1lJ107XG4gICAgICAgIGNvbnN0IG5ld09iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XG5cbiAgICAgICAgcHJvcHNUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIG5ld09ialtlbGVtZW50XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG5cbiAgICBhc3luYyBtYXJrdXBUZW1wbGF0ZSgpIHsgXG4gICAgICAgIGNvbnN0IHByb2R1Y3RKU09OID0gIGF3YWl0IHRoaXMucmVtb3ZlUHJvcGVydGllcyhhd2FpdCB0aGlzLmdldFByb2R1Y3QoKSkgfHwgbnVsbDsgXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBPYmplY3Qua2V5cyhwcm9kdWN0SlNPTikubGVuZ3RoID8gSlNPTi5zdHJpbmdpZnkocHJvZHVjdEpTT04pIDogbnVsbDtcblxuICAgICAgICBpZighcHJvZHVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuZGVidWcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeydsb2ctU1dHLVByb2R1Y3QnOiBwcm9kdWN0fSk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBgJHsgcHJvZHVjdCB9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNldE1hcmt1cCgpIHsgXG4gICAgICAgIGF3YWl0IHRoaXMubWFya3VwVGVtcGxhdGUoKTtcbiAgICAgICAgaWYoIXRoaXMucHJvZHVjdEpTT04pIHJldHVybjtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICBcbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2FwcGxpY2F0aW9uL2xkK2pzb24nO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMucHJvZHVjdEpTT047XG4gICAgICAgIHRoaXMuZWxIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgc2V0U3dnU2NyaXB0KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gJ2h0dHBzOi8vbmV3cy5nb29nbGUuY29tL3N3Zy9qcy92MS9zd2cuanMnO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNldEFsZGViYXJhblNjcmlwdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCB1cmxQcm9kID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2MxMGFlODE5YzU2ODQ2MGJiNGVjMTdjMGE4ZWM1MjY3L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xuICAgICAgICBjb25zdCB1cmxTdGcgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYWRkYzVlOGYzMTZmNDhlYTkxODFhZjM3MTYwYjIyYjQvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XG5cbiAgICAgICAgZWxlbWVudC5zcmMgPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyB1cmxQcm9kIDogdXJsU3RnO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRlc3RTV0coKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc3dnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwgPSB3aW5kb3cuc3dnO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ1RoZXJlIGlzblxcJ3Qgd2luZG93LnN3ZycpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0TWFya3VwKCk7ICBcbiAgICAgICAgIFxuICAgICAgICBpZighdGhpcy5oYXNQcm9kdWN0SlNPTikgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTd2dTY3JpcHQoKTsgXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QWxkZWJhcmFuU2NyaXB0KCk7ICAgXG4gICAgICAgIGF3YWl0IHRoaXMudGVzdFNXRygpOyAgICAgICBcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55ICB7XG5cdGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xuICAgICAgICB3aW5kb3cuaGFzUGF5d2FsbCA9IHdpbmRvdy5oYXNQYXl3YWxsIHx8IG51bGw7XG4gICAgICAgIHdpbmRvdy50cCA9IHdpbmRvdy50cCB8fCBbXTtcbiAgICAgICAgd2luZG93LlBpYW5vID0gd2luZG93LlBpYW5vIHx8IHt9O1xuICAgICAgICB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyA9IHdpbmRvdy5QYXl3YWxsQW5hbHl0aWNzIHx8IHt9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRHbG9iYWxUaW55KCk7XG4gICAgICAgIHRoaXMuUHJvZHVjdHMuc2V0R2xvYmFsKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHNldEdsb2JhbFRpbnkoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICAgICAgdGlueTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF5d2FsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3dnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBnYTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1Byb2R1Y3Rpb246ICh3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IGRlZmF1bHRTZXR0aW5nczsgXG4gICAgfVxuICAgIFxuICAgIHNldFBpYW5vKG9iaikge1xuICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFubyA9IG9iajtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgIH1cblxufSIsImltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheXdhbGxDcHRJbmxpbmUgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuXHRcdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcblxuXHRcdHRoaXMuZG9tYWluID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLyc7XHRcblx0XHR0aGlzLnBheXdhbGxJZCA9ICdwYXl3YWxsLWlubGluZSdcblx0XHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xuXHRcdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZSgpXG5cdFx0fSk7XG5cdFx0dGhpcy5hY3RpdmVFdmVudHMoKVxuXHRcdFxuXHRcdHdpbmRvdy5QYXl3YWxsQ3B0SW5saW5lID0gdGhpcztcblxuXHRcdHdpbmRvdy50aW55Q3B0LlBheXdhbGwgPSB7XG5cdFx0XHRkb21haW46IHRoaXMuZG9tYWluXG5cdFx0fVxuXHR9XG5cblx0c2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xuXHRcdFx0dGl0bGU6ICdQYXJhIGNvbnRpbnVhciBzdWEgbGVpdHVyYSwgw6kgcHJlY2lzbyBzZSBjYWRhc3RyYXIuJyxcblx0XHRcdHN1YnRpdGxlOiAnw4kgcsOhcGlkbyBlIGdyw6F0aXMhJyxcblx0XHRcdGJ1dHRvblRleHQ6ICdDYWRhc3RyZS1zZSBncmF0dWl0YW1lbnRlIGFnb3JhJyxcblx0XHRcdGJ1dHRvbkxpbms6ICdodHRwczovL2dvb2dsZS5jb20/bDEnLFxuXHRcdFx0bG9naW5QcmVUZXh0OiAnSsOhIHBvc3N1aSBjYWRhc3Rybz8gJyxcblx0XHRcdGxvZ2luVGV4dDogJ0Zhw6dhIGxvZ2luJyxcblx0XHRcdGxvZ2luTGluazogd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLycsIFxuXHRcdFx0b2ZmZXJMaW5rOiBcImh0dHBzOi8vZ29vZ2xlLmNvbT9sMVwiLFxuXHRcdFx0aW1hZ2VNb2JpOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTUwXCIsXG5cdFx0XHRpbWFnZURlc2s6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwNHgxMjhcIixcblx0XHRcdGltYWdlTGluazogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDE1MFwiXG5cdFx0fTtcblxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lID0gKHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lKSA/ICBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZVNldHRpbmdzLCB3aW5kb3cuZ2xiUGF5d2FsbElubGluZSkgOiB0ZW1wbGF0ZVNldHRpbmdzOyBcblxuXHRcdGNhbGxiYWNrKCk7XG5cdH1cblxuICAgIGFjdGl2ZUV2ZW50cygpIHtcblx0XHR0aGlzLmNsYXNzbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXJlYWQtbW9yZVwiKTtcblx0XHR0aGlzLmNsYXNzbmFtZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVGVtcGxhdGUoZWxlbWVudClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG4gIFx0Y3JlYXRlVGVtcGxhdGUoZWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHR0aGlzLmVsQm9keSA9IGVsZW1lbnQ7XG5cdFx0XHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHRcdFx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMudGVtcGxhdGUpOyBcblx0XHRcdGNvbnN0IHJlbW92ZWRFbGVtZW50ID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ290aGVyLWNvbnRlbnQnKVxuXHRcdFx0cmVtb3ZlZEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZW1vdmVkRWxlbWVudClcblx0XHRcdGVsZW1lbnQucmVtb3ZlKClcblx0XHR9XG5cdCAgfVxuXHQgIFxuXHRnZXRVcmxMb2dpblJlZ2lzdGVyKHR5cGUgPSAnJykge1xuXHRcdGNvbnN0IHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvID0gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnID8gJ2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnIDogJ2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnO1xuXHRcdGNvbnN0IHVyaSA9IGxvY2F0aW9uLmhyZWY7XG5cdFx0Y29uc3Qgc2VydmljZUlkID0gd2luZG93LnRpbnlDcHQuUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpIHx8IG51bGw7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdGxldCB1cmxSZXR1cm4gPSAnJztcblx0XG5cdFx0aWYoIXRoaXMuZGVidWcgJiYgdGhpcy5QaWFuby5pc0RlZmluZWQpIHtcblx0XHRcdHVybFJldHVybiA9IGVuY29kZVVSSUNvbXBvbmVudChcblx0XHRcdFx0dXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gKyAnP2NvZGlnb1Byb2R1dG89JyArICB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKSBcblx0XHRcdFx0KyAnJnNlcnZpY2VJZD0nICsgc2VydmljZUlkXG5cdFx0XHRcdCsgJyZhbWJpZW50ZVV0aWxpemFkbz0nICsgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm9cblx0XHRcdFx0KyAnJm5vbWVQcm9kdXRvPScgKyB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKClcblx0XHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxuXHRcdFx0KTtcblx0XG5cdFx0XHRpZih0eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1jYWRhc3Ryby8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1sb2dpbi8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cbiAgZ2V0IHRlbXBsYXRlVmFycygpIHtcblx0cmV0dXJuIHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkgeyBcblx0Y29uc3QgdGVtcGxhdGUgPSBgXG5cdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnN8UmFsZXdheSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZVwiIGlkPSR7dGhpcy5wYXl3YWxsSWR9PiBcblx0XHRcdDxoMSBjbGFzcyA9XCJwYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGVcIj4ke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfTxicj4ke3RoaXMudGVtcGxhdGVWYXJzLnN1YnRpdGxlfTwvaDE+XG5cdFx0XHQ8YSBocmVmPSR7dGhpcy5nZXRVcmxMb2dpblJlZ2lzdGVyKCdidXR0b24nKX0+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtYnV0dG9uXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtc3BhblwiPiR7dGhpcy50ZW1wbGF0ZVZhcnMuYnV0dG9uVGV4dH08L3NwYW4+XG5cdFx0XHRcdDwvYnV0dG9uPiBcblx0XHRcdDwvYT5cblx0XHRcdDxwIGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLXBcIj4ke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luUHJlVGV4dH08YSBocmVmPSR7dGhpcy5nZXRVcmxMb2dpblJlZ2lzdGVyKCl9IGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLWFcIj4ke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGV4dH08L2E+PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1vZmZlclwiPlxuXHRcdFx0PGEgaHJlZj0ke3RoaXMudGVtcGxhdGVWYXJzLm9mZmVyTGlua30+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PSR7dGhpcy50ZW1wbGF0ZVZhcnMuaW1hZ2VNb2JpfSBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMuaW1hZ2VEZXNrfSBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz0ke3RoaXMudGVtcGxhdGVWYXJzLmltYWdlTGlua30gLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcblx0ICByZXR1cm4gYDxzdHlsZT4ucGF5d2FsbC1jcHQtaW5saW5le21hcmdpbjogMCBhdXRvIDQwcHg7cGFkZGluZzoyMHB4O2JvcmRlci1yYWRpdXM6IDRweDtib3JkZXI6IHNvbGlkIDFweCAjZGJkZGUxO2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjU7fS5wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGV7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzsgbWFyZ2luLWJvdHRvbTozMHB4O2Rpc3BsYXk6YmxvY2s7Zm9udC1mYW1pbHk6UmFsZXdheTtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDA7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjI7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiMzMjVlOTR9LnBheXdhbGwtY3B0LWlubGluZS1idXR0b257bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tYm90dG9tOjMwcHg7ZGlzcGxheTpibG9jazt3aWR0aDozNTZweDtoZWlnaHQ6NDhweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNTljMDA7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOnNvbGlkIDNweCAjZjU5YzAwfS5wYXl3YWxsLWNwdC1pbmxpbmUtc3Bhbntmb250LWZhbWlseTpPcGVuIFNhbnM7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6MS4zODtsZXR0ZXItc3BhY2luZzpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2ZmZn0ucGF5d2FsbC1jcHQtaW5saW5lLXB7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tYm90dG9uOjMwcHg7ZGlzcGxheTpibG9jaztmb250LWZhbWlseTpSYWxld2F5O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuMTQ7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM3MDcwNzB9LnBheXdhbGwtY3B0LWlubGluZS1he2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzI1ZTk0fS5wYXl3YWxsLWNwdC1pbmxpbmUtb2ZmZXJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9XG5cdCAgPC9zdHlsZT5gXG4gIH1cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuLi9IZWxwZXJzJztcbmltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi4vR0EnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsR0FNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XG4gICAgdGhpcy5HQSA9IG5ldyBHQU1vZHVsZSgpOyBcblxuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1ldHJpY3MgPSB7XG4gICAgICAgIHBheXdhbGw6IHt9LCBcbiAgICAgICAgZmI6IHtcbiAgICAgICAgICAgIHBpeGVsOiB7fVxuICAgICAgICB9IFxuICAgIH07XG5cbiAgICB0aGlzLnBheXdhbGxUeXBlKCk7XG4gIH1cblxuICBwYXl3YWxsTG9hZCgpIHsgXG4gICAgaWYoIXRoaXMuUGlhbm8uaXNEZWZpbmVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3QgX1BpYW5vID0gdGhpcy5QaWFuby5jb250ZW50O1xuXG4gICAgdGhpcy5HQS5zZXRFdmVudHMoJ0V4aWJpY2FvIFJlZ2lzdGVyJywgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSk7XG4gICAgSGVscGVycy5zZXRDb29raWUoX1BpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCB0cnVlLCAxKTtcbiAgfVxuXG4gIHRyaWdnZXIoZWxlbWVudCkgeyBcbiAgICBpZih0aGlzLmRpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHJlc2V0VXRwID0gZWxlbWVudC5kYXRhc2V0LmdhUmVzZXR1dHAgfHwgbnVsbDtcbiAgICBjb25zdCBpbWFnZVRvcCA9IGVsZW1lbnQuZGF0YXNldC5nYUltYWdlUG9zaXRpb247XG4gICAgY29uc3QgbGFiZWwgPSAoaW1hZ2VUb3AgPT09ICd0b3AnKSA/IGVsZW1lbnQuZGF0YXNldC5nYUxhYmVsICsgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgOiBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBldmVudDogJ0V2ZW50b0dBJyxcbiAgICAgIGV2ZW50b0dBQ2F0ZWdvcmlhOiB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lLFxuICAgICAgZXZlbnRvR0FBY2FvOiBlbGVtZW50LmRhdGFzZXQuZ2FBY3Rpb24gfHwgYWN0aW9uLFxuICAgICAgZXZlbnRvR0FSb3R1bG86IGxhYmVsLFxuICAgICAgZXZlbnRvR0FWYWxvcjogMCxcbiAgICAgIGV2ZW50b0dBSW50ZXJhY2FvOiBmYWxzZSxcbiAgICB9OyBcblxuICAgIGlmIChyZXNldFV0cClcbiAgICAgICAgdGhpcy5QaWFuby5yZXNldFV0cCgpO1xuIFxuICAgIHRoaXMuc2V0RGF0YWxheWVyKGRhdGEpO1xuICB9XG5cbiAgcGF5d2FsbFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9ICggKHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsICE9PSAndW5kZWZpbmVkJykgJiYgd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwpIFxuICAgICAgPyB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbC50b0xvd2VyQ2FzZSgpIFxuICAgICAgOiAncGF5d2FsbCc7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBjb211bSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0NhZGFzdHJlLXNlJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1JlZ2lzdGVyV2FsbCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXhjbHVzaXZvJzpcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBleGNsdXNpdm8nO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3TG9naW5FeGNsdXNpdm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BheXdhbGwnOlxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ3BheXdhbGwnO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3UGF5d2FsbEV4Y2x1c2l2byc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNldERhdGFsYXllcihkYXRhID0ge30pIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICBkYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XG5pbXBvcnQgUGF5d2FsbEdBTW9kdWxlIGZyb20gJy4vUGF5d2FsbC1nYSc7XG5pbXBvcnQgU3dnTW9kdWxlIGZyb20gJy4uL1N3Zyc7XG5pbXBvcnQgRmJNb2R1bGUgZnJvbSAnLi4vRkInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsQ3B0ICB7XG5cdGNvbnN0cnVjdG9yKCkgeyBcblx0dGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xuXHR0aGlzLkdBID0gbmV3IFBheXdhbGxHQU1vZHVsZSgpO1xuXHR0aGlzLlNXRyA9IG5ldyBTd2dNb2R1bGUoKTtcblx0dGhpcy5GQiA9IG5ldyBGYk1vZHVsZSh0aGlzLkdBLm1ldHJpY3MuZmIpO1xuXG5cdHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xuXHR0aGlzLmRvbWFpbiA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/ICdodHRwczovL2xvZ2luLmdsb2JvLmNvbS8nIDogJ2h0dHBzOi8vbG9naW4ucWEuZ2xvYm9pLmNvbS8nO1x0XG5cdHRoaXMuc2V0VGVtcGxhdGVTZXR0aW5ncygoKSA9PiB7XG5cdFx0dGhpcy5pbml0KCk7IFxuXHR9KTtcblxuXHR3aW5kb3cuUGF5d2FsbENwdCA9IHRoaXM7XG5cblx0d2luZG93LnRpbnlDcHQuUGF5d2FsbCA9IHtcblx0XHRkb21haW46IHRoaXMuZG9tYWluLFxuXHRcdEdBOiB0aGlzLkdBLm1ldHJpY3MsXG5cdH07XG4gIH1cblxuICBzZXRUZW1wbGF0ZVNldHRpbmdzKGNhbGxiYWNrKSB7XG5cdFx0bGV0IHRlbXBsYXRlU2V0dGluZ3MgPSB7XG5cdFx0XHR0ZW1wbGF0ZTogJ2RlZmF1bHQnLFxuXHRcdFx0YXNzZXRzUGF0aDogJycsXG5cdFx0XHRkaXNwbGF5OiBudWxsLFxuXHRcdFx0cHJvZHVjdENsYXNzOiB0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgPyBgcGF5d2FsbC1jcHQtJHtub21lUHJvZHV0b1BpYW5vfWAgOiAncGF5d2FsbC1jcHQtb2dsb2JvJyxcblx0XHRcdHRpdGxlOiAnRXNzZSBjb250ZcO6ZG8gw6kgbyB0w610dWxvLicsXG5cdFx0XHR0YXJnZXRCbGFuazogdHJ1ZSxcblx0XHRcdHRvcE1vYmk6ICcnLFxuXHRcdFx0dG9wRGVzazogJycsXG5cdFx0XHR0b3BMaW5rOiAnJyxcblx0XHRcdGxlZnRNb2JpOiAnJyxcblx0XHRcdGxlZnREZXNrOiAnJyxcblx0XHRcdGxlZnRMaW5rOiAnJyxcblx0XHRcdHJpZ2h0TW9iaTogJycsXG5cdFx0XHRyaWdodERlc2s6ICcnLFxuXHRcdFx0cmlnaHRMaW5rOiAnJ1xuXHRcdH07XG5cblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmhpZGVMb2dpbkFyZWEgPSBmYWxzZTtcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luVGV4dCA9ICdGYcOnYSBsb2dpbic7XG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5sb2dpblByZVRleHQgPSAnSsOhIHBvc3N1aSBjYWRhc3Rybz8nO1xuXHRcdFxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsID0gKHdpbmRvdy5nbGJQYXl3YWxsKSA/ICBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZVNldHRpbmdzLCB3aW5kb3cuZ2xiUGF5d2FsbCkgOiB0ZW1wbGF0ZVNldHRpbmdzOyBcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9IGAke3dpbmRvdy5nbGJQYXl3YWxsLmxvZ2luUHJlVGV4dH0gPGEgaHJlZj1cIiR7dGhpcy5nZXRVcmxMb2dpblJlZ2lzdGVyKCl9XCIgZGF0YS1pcy1sb2dpbj1cInRydWVcIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgMiAtIEZhw6dhIGxvZ2luXCIgZGF0YS1nYS1yZXNldFV0cD1cImZhbHNlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiAke3dpbmRvdy5nbGJQYXl3YWxsLnRhcmdldEJsYW5rfSBcIj4ke3dpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGV4dH08L2E+YDtcblxuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsLmhpZGVMb2dpbkFyZWEpXG5cdFx0XHR0aGlzLmNsZWFyTG9naW5BcmVhKCk7XG5cblx0XHRpZih0aGlzLmRlYnVnICkgXG5cdFx0XHR0aGlzLnNldERlYnVnVGVtcGxhdGVTZXR0aW5ncygpO1xuXHRcdFxuXHRcdGNhbGxiYWNrKCk7XG5cdH1cblxuXHRjbGVhckxvZ2luQXJlYSgpIHtcblx0XHRpZih3aW5kb3cuZ2xiUGF5d2FsbCkgeyBcblx0XHRcdHdpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGFnID0gJyc7XG5cdFx0fVxuXHR9XG5cblx0c2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCkge1xuXHRcdGxldCBvYmogPSB7fTtcblx0XHRvYmoudG9wTW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDE1MCc7XG5cdFx0b2JqLnRvcERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwNHgxMjgnO1xuXHRcdG9iai50b3BMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMSc7XG5cdFx0b2JqLmxlZnRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcblx0XHRvYmoubGVmdERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwMng1MTUnO1xuXHRcdG9iai5sZWZ0TGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDInO1xuXHRcdG9iai5yaWdodE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHg1MDAnO1xuXHRcdG9iai5yaWdodERlc2sgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQwMng1MTUnO1xuXHRcdG9iai5yaWdodExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wzJztcblxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmdsYlBheXdhbGwsIG9iaik7XG5cdH1cbiBcbiAgYm9keUFkanVzdCgpIHtcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicsICdpbXBvcnRhbnQnKTtcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2ZpeGVkJywgJ2ltcG9ydGFudCcpO1xuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCAnMTAwJScsICdpbXBvcnRhbnQnKTtcbiAgfVxuXG4gIHNldEVsV3JhcHBlcigpIHtcblx0dGhpcy5lbENwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXl3YWxsLWNwdCcpO1xuICB9XG5cbiAgcmVtb3ZlRWxlbWVudHMoKSB7XG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XG5cblx0aWYodGhpcy5lbENwdClcblx0XHR0aGlzLmVsQ3B0LnJlbW92ZSgpO1xuXG5cdGNvbnN0IGVsVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvdGVjdGVkLWNvbnRlbnQsICNpbmZvYXJ0ZS1tYWluLWNvbnRlbnQnKTtcblxuXHRlbFRvUmVtb3ZlLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdCAgZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG4gIH1cblxuICBjcmVhdGVUZW1wbGF0ZSgpIHtcblx0dGhpcy5lbEJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHRoaXMuYm9keUFkanVzdCgpO1xuICAgIHRoaXMucmVtb3ZlRWxlbWVudHMoKTtcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmNzc01pbmlmaWVkKTsgXG5cdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy50ZW1wbGF0ZSk7IFxuXHR0aGlzLmFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKTtcdFxuICAgIFxuICAgIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pO1xuXHR9XG5cblx0dGhpcy5HQS5wYXl3YWxsTG9hZCgpO1xuICB9XG5cbiAgYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpIHtcblx0dGhpcy5zZXRFbFdyYXBwZXIoKTtcblx0dGhpcy5lbENwdFdyYXAgPSB0aGlzLmVsQ3B0LnF1ZXJ5U2VsZWN0b3IoJy5wYXl3YWxsLWNwdC13cmFwJyk7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Y29uc3QgZWxCb2R5SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgNDtcblx0XHRjb25zdCBlbENwdFdyYXBIZWlnaHQgPSB0aGlzLmVsQ3B0V3JhcC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3AgPSAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSBcbiAgICAgICAgPyBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKVxuICAgICAgICA6IE1hdGguYWJzKCBlbEJvZHlIZWlnaHQvMiApO1xuXHRcdGNvbnN0IHRvcFdpdGhGdWxsRWxlbWVudCA9IChlbEJvZHlIZWlnaHQgLSBlbENwdFdyYXBIZWlnaHQpO1xuXG5cdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtjdXJyZW50VG9wfXB4YDtcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdHRoaXMuZWxDcHQuc3R5bGUuekluZGV4ID0gOTk5OTk5OTk5OTtcblxuXHRcdHRoaXMuZXZ0V2hlZWwoY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KTtcblx0XHR0aGlzLmV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XG5cdFx0dGhpcy5hY3RpdmVFdmVudHMoKTtcblxuXHRcdHRoaXMuRkIuc2V0UGl4ZWxUeXBlKCk7XG5cdH0sIDEwMDApO1xuICB9XG5cbiAgYWN0aXZlRXZlbnRzKCkge1xuXHRjb25zdCBjbGlja1RhcmdldHMgPSB0aGlzLmVsQ3B0V3JhcC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cblx0Y2xpY2tUYXJnZXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICAgIGNvbnN0IGlzTG9naW4gPSBCb29sZWFuKGVsZW1lbnQuZGF0YXNldC5pc0xvZ2luKSB8fCBmYWxzZTtcblx0XHRcdGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgZmFsc2UgOyBcblx0XHRcdGNvbnN0IGlzVXJsU3dnID0gKHVybCkgPyB1cmwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnb2ZlcnRhc3dnJykgOiBmYWxzZTtcblx0XHRcdGNvbnN0IG5vdEJsYW5rID0gZWxlbWVudC5kYXRhc2V0LmhyZWZUYXJnZXQgfHwgdHJ1ZTsgXG5cdFx0XHRcblx0XHRcdHRoaXMuR0EudHJpZ2dlcihlbGVtZW50KTsgXG5cblx0XHRcdGlmKCFpc0xvZ2luICYmIGlzVXJsU3dnKVxuXHRcdFx0XHR0aGlzLlNXRy5zZXRVdG1zKCk7ICBcblxuICAgICAgICAgICAgaWYgKHVybCAmJiAhaXNVcmxTd2cpIHsgXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90QmxhbmsgPyAod2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwpIDogd2luZG93Lm9wZW4odXJsKTtcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfVxuXHRcdH0uYmluZCh0aGlzKSk7XG5cdH0pO1xuICB9XG5cbiAgZXZ0V2hlZWwoY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KSB7XG5cdGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCd3aGVlbCcsXG5cdFx0ZnVuY3Rpb24oZXZ0KSB7IFxuXHRcdCAgY29uc3Qgc3RlcCA9IGN1cnJlbnRUb3AgLyAxMDA7XG5cdFx0ICBjb25zdCBtdWx0aXBsaWVyID0gMjA7XG5cblx0XHQgIGlmIChldnQuZGVsdGFZID49IDEpIHtcblx0XHRcdGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gc3RlcCAqIG11bHRpcGxpZXI7IFxuXHRcdFx0bmV3dG9wID0gZWxUb3AgPCB0b3BXaXRoRnVsbEVsZW1lbnQgPyB0b3BXaXRoRnVsbEVsZW1lbnQgOiBlbFRvcDtcbiAgXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG5cdFx0ICB9XG4gIFxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPD0gLTEpIHtcblx0XHRcdGNvbnN0IGVsVG9wID0gbmV3dG9wICsgc3RlcCAqIG11bHRpcGxpZXI7XG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XG4gIFxuXHRcdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuXHRcdCAgfVxuXHRcdH0uYmluZCh0aGlzKVxuXHQgICk7XG4gIH1cblxuICBldnRUb3VjaChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpIHtcbiAgICBsZXQgbmV3dG9wID0gY3VycmVudFRvcDtcbiAgICBsZXQgdG91Y2hzdGFydFkgPSAwO1xuICAgIGxldCB0b3VjaGVuZFkgPSAwO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZ0KSB7IFxuICAgICAgICB0b3VjaHN0YXJ0WSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xuXHR9KTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZ0KSB7IFxuICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0gMjA7XG4gICAgICAgIHRvdWNoZW5kWSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xuXG4gICAgICAgIGlmICh0b3VjaGVuZFkgPCB0b3VjaHN0YXJ0WSkgeyBcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyh0b3VjaHN0YXJ0WSkgLSBNYXRoLmFicyh0b3VjaGVuZFkpO1xuICAgICAgICAgICAgY29uc3QgZWxUb3AgPSBuZXd0b3AgLSBkaWZmOyBcbiAgICAgICAgICAgIG5ld3RvcCA9IGVsVG9wIDwgdG9wV2l0aEZ1bGxFbGVtZW50ID8gdG9wV2l0aEZ1bGxFbGVtZW50IDogZWxUb3A7XG5cbiAgICAgICAgICAgIHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3VjaGVuZFkgPiB0b3VjaHN0YXJ0WSkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRvdWNoZW5kWSAtIHRvdWNoc3RhcnRZO1xuICAgICAgICAgICAgY29uc3QgZWxUb3AgPSBuZXd0b3AgKyBkaWZmOyBcblx0XHQgICAgbmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xuXG5cdFx0ICAgIHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcbiAgICAgICAgfVxuXHR9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0VXJsTG9naW5SZWdpc3Rlcih0eXBlID0gJycpIHtcblx0Y29uc3QgdXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gPSB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcgPyAnaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCcgOiAnaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCc7XG5cdGNvbnN0IHVyaSA9IGxvY2F0aW9uLmhyZWY7XG5cdGNvbnN0IHNlcnZpY2VJZCA9IHdpbmRvdy50aW55Q3B0LlBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSB8fCBudWxsO1xuXHRsZXQgc3RyID0gJyc7XG5cdGxldCB1cmxSZXR1cm4gPSAnJztcblxuXHRpZighdGhpcy5kZWJ1ZyAmJiB0aGlzLlBpYW5vLmlzRGVmaW5lZCkge1xuXHRcdHVybFJldHVybiA9IGVuY29kZVVSSUNvbXBvbmVudChcblx0XHRcdHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvICsgJz9jb2RpZ29Qcm9kdXRvPScgKyAgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCkgXG5cdFx0XHQrICcmc2VydmljZUlkPScgKyBzZXJ2aWNlSWRcblx0XHRcdCsgJyZhbWJpZW50ZVV0aWxpemFkbz0nICsgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm9cblx0XHRcdCsgJyZub21lUHJvZHV0bz0nICsgdGhpcy5QaWFuby5jb250ZW50LnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXG5cdFx0XHQrICcmdXJsUmV0b3Jubz0nICsgdXJpXG5cdFx0KTtcblxuXHRcdGlmKHR5cGUgPT09ICdyZWdpc3RlcicpIHtcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWNhZGFzdHJvLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59bG9naW4vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbiAgZ2V0IHRlbXBsYXRlVmFycygpIHtcblx0cmV0dXJuIHdpbmRvdy5nbGJQYXl3YWxsO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkgeyBcblx0Y29uc3QgdGVtcGxhdGUgPSBgXG5cdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0ICR7dGhpcy50ZW1wbGF0ZVZhcnMucHJvZHVjdENsYXNzfVwiPiBcblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWRcIj5cblx0XHRcdCR7dGhpcy50ZW1wbGF0ZVZhcnMudGl0bGV9XG5cdFx0PC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdG9wXCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcExpbmt9XCIgZGF0YS1nYS1pbWFnZS1wb3NpdGlvbj1cInRvcFwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayAxIC1cIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wRGVza31cIiBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTW9iaX1cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlciAke3dpbmRvdy5nbGJQYXl3YWxsLmhpZGVMb2dpbkFyZWEgPyAnaXMtaGlkZScgOiAnJ31cIj5cblx0XHQgIFx0JHt0aGlzLnRlbXBsYXRlVmFycy5sb2dpblRhZ31cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX2xlZnRcIj5cblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdExpbmt9XCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDQgLSBCYW5uZXIgb2ZlcnRhIGVzcXVlcmRhXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0RGVza31cIiBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdE1vYml9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fcmlnaHRcIj5cblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRMaW5rfVwiICBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgNSAtIEJhbm5lciBvZmVydGEgZGlyZWl0YVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0RGVza31cIiBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQgIDwvZGl2PlxuXHQgIGA7XG5cblx0cmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0IGNzc01pbmlmaWVkKCkge1xuXHQgIHJldHVybiBgPHN0eWxlPlxuXHQgIC5wYXl3YWxsLWNwdHtvcGFjaXR5OjA7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMHZ3O292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Ym94LXNoYWRvdzowIDAgNzBweCAwIHJnYmEoMCwwLDAsLjUpO2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmfS5wYXl3YWxsLWNwdCwucGF5d2FsbC1jcHQgKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZX0ucGF5d2FsbC1jcHQgYXtmb250LXdlaWdodDo3MDA7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LnBheXdhbGwtY3B0IGE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0ucGF5d2FsbC1jcHQgLnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZCwucGF5d2FsbC1jcHQgYXtjb2xvcjojMDAwfS5wYXl3YWxsLWNwdC1vZ2xvYm8gLnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZCwucGF5d2FsbC1jcHQtb2dsb2JvIGF7Y29sb3I6IzMyNWU5NH0ucGF5d2FsbC1jcHQtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctYm90dG9tOjIwcHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5wYXl3YWxsLWNwdC13cmFwey1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1vcmllbnQ6aG9yaXpvbnRhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9fS5wYXl3YWxsLWNwdC13cmFwIGltZ3tkaXNwbGF5OmJsb2NrO21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvfS5wYXl3YWxsLWNwdC13cmFwX190b3B7cGFkZGluZy10b3A6MjBweH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFke3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMHB4IDAgMDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo3MDB9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVye3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyMHB4IDA7Y29sb3I6Izc2NzY3Njtmb250LXNpemU6MTZweH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXIuaXMtaGlkZXtwYWRkaW5nLWJvdHRvbTowfVxuXHQgIDwvc3R5bGU+YDtcbiAgfVxuXG4gIGluaXQoKSB7IFxuXHQgIGNvbnN0IGRlbGF5VGltZXIgPSAod2luZG93LmdsYlBheXdhbGwgJiYgd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lcikgPyB3aW5kb3cuZ2xiUGF5d2FsbC5kZWxheVRpbWVyICogMTAwMCA6IDA7XG5cblx0c2V0VGltZW91dCgoKSA9Pntcblx0XHR0aGlzLmNyZWF0ZVRlbXBsYXRlKCk7XG5cdH0sIGRlbGF5VGltZXIpO1xuICB9XG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcbmltcG9ydCBUaW55TW9kdWxlIGZyb20gJy4vVGlueSc7XG5pbXBvcnQgR0FNb2R1bGUgZnJvbSAnLi9HQSc7XG5pbXBvcnQgU3dnTW9kdWxlIGZyb20gJy4vU3dnJztcbmltcG9ydCBQYXl3YWxsQ3B0IGZyb20gJy4vY3BudC1wYXl3YWxsL1BheXdhbGwnO1xuaW1wb3J0IFBheXdhbGxDcHRJbmxpbmUgZnJvbSAnLi9jcG50LXBheXdhbGwtaW5saW5lL1BheXdhbGwnO1xuXG5jb25zdCBUaW55ID0gbmV3IFRpbnlNb2R1bGUoKTtcbmNvbnN0IEdBID0gbmV3IEdBTW9kdWxlKCk7XG5cbkdBLnNldEdsb2JhbFZhcnMoKTtcblxuUGlhbm8udHlwZVBheXdhbGwgPSBudWxsO1xuUGlhbm8udmFyaWF2ZWlzID0ge1xuXHRhbWJpZW50ZXNBY2VpdG9zOiBcImludCxxbHQscHJkXCIsXG5cdHN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvOiBcIjQwMCw0MDQsNDA2LDUwMCw1MDIsNTAzLDUwNFwiLFxuXHRzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBcIjQwMCw0MDQsNTAwLDUwMiw1MDMsNTA0XCIsXG5cdGlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkOiBmYWxzZSxcblx0Y29uc3RhbnRlOiB7XG5cdFx0Y29va2llOiB7XG5cdFx0XHRHQ09NOiAnR0xCSUQnLFxuXHRcdFx0VVRQOiAnX3V0cCcsXG5cdFx0XHRSVElFWDogJ19ydGlleCcsXG5cdFx0XHRBTUJJRU5URTogJ2FtYmllbnRlUGlhbm8nLFxuXHRcdFx0U0FWRV9TVUJTQ1JJUFRJT046ICdzYXZlU3Vic2NyaXB0aW9uQ29va2llJyxcblx0XHRcdENSRUFURURfR0xPQk9JRDogJ2NyZWF0ZWRHbG9ib0lkJyxcblx0XHRcdEdMT0JPSURfTUVTU0FHRTogJ2dsb2JvSWRNZXNzYWdlJ1xuXHRcdH0sXG5cdFx0bWV0cmljYXM6IHtcblx0XHRcdEVWRU5UT19TRU1fQUNBTzogJ3NlbSBhY2FvJyxcblx0XHRcdEVSUk86ICdFcnJvJ1xuXHRcdH0sXG5cdFx0a3J1eDoge1xuXHRcdFx0U0VHTUVOVEFDT0VTOiAna3hnbG9ib19zZWdzJyxcblx0XHRcdEtSVVhMSUdBRE86ICdrcnV4LWxpZ2Fkbydcblx0XHR9LFxuXHRcdHV0aWw6IHtcblx0XHRcdElQOiBcIjEyNy4wLjAuMVwiLFxuXHRcdFx0QU1CSUVOVEU6IFwiYW1iaWVudGUtZGVzZWphZG9cIixcblx0XHRcdERFQlVHOiBcImRlYnVnLXBpYW5vXCJcblx0XHR9XG5cdH0sXG5cdGlzQ29udGV1ZG9FeGNsdXNpdm86IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldEFtYmllbnRlUGlhbm86IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpKSA+IC0xKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSksIDEpO1xuXHRcdFx0cmV0dXJuIFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpO1xuXHRcdH1cblx0XHRpZiAoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkgPT0gJ2ZhbHNlJykge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKSkge1xuXHRcdFx0cmV0dXJuIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKTtcblx0XHR9O1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vKSA+IC0xID8gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gOiAncHJkJztcblx0fSxcblx0Z2V0VGlwb0NvbnRldWRvUGlhbm86IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cudGlwb0NvbnRldWRvUGlhbm87XG5cdH0sXG5cdGV4ZWN1dG91UGFnZXZpZXc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cuZXhlY3V0b3VQYWdldmlldyA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0Z2V0Tm9tZVByb2R1dG86IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8pe1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJOb21lIGRvIHByb2R1dG8gbsOjbyBkZWZpbmlkby5cIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm87XG5cdH0sXG5cdGdldFNlcnZpY29JZDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gJzAwMDAnO1xuXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdvZ2xvYm8nIFxuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdibG9ncycgXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2tvZ3V0J1xuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdhY2Vydm8nXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2pvcm5hbGRpZ2l0YWwnKXtcblx0XHRcdHJldHVybiBpZCA9ICczOTgxJztcblx0XHR9XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgJiYgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdtb25ldCcpeyBcblx0XHRcdHJldHVybiBpZCA9ICc2NjE4Jztcblx0XHR9ZWxzZSBpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSl7XG5cdFx0XHRyZXR1cm4gaWQgPSAnNjY5Nyc7XG5cdFx0fVxuXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICd2YWxvcicpe1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gJzY2NjgnO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoaWQgPT09ICcwMDAwJylcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdTZXJ2aWNlSUQgbsOjbyBkZWZpbmlkby4nLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmICsgXG5cdFx0XHRcdCcgbm9tZVByb2R1dG86ICcgKyBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSApO1xuXG5cdFx0cmV0dXJuIGlkO1xuXHR9LFxuXHRnZXRDb2RpZ29Qcm9kdXRvOiBmdW5jdGlvbigpe1xuXHRcdHZhciBub21lUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpO1xuXHRcdHN3aXRjaCAobm9tZVByb2R1dG8pe1xuXHRcdFx0Y2FzZSAnb2dsb2JvJzpcblx0XHRcdGNhc2UgJ2Jsb2dzJzpcblx0XHRcdGNhc2UgJ2tvZ3V0Jzpcblx0XHRcdFx0cmV0dXJuICdPRzAzJztcblx0XHRcdGNhc2UgJ2FjZXJ2byc6XG5cdFx0XHRcdHJldHVybiAnT0cwNCc7XG5cdFx0XHRjYXNlICdqb3JuYWxkaWdpdGFsJzpcblx0XHRcdFx0cmV0dXJuICdPRzAxJztcblx0XHRcdGNhc2UgJ2F1dG8tZXNwb3J0ZSc6XG5cdFx0XHRjYXNlICdlcG9jYSc6XG5cdFx0XHRjYXNlICd2b2d1ZSc6XG5cdFx0XHRjYXNlICdnbGFtb3VyJzpcblx0XHRcdGNhc2UgJ2Nhc2Etdm9ndWUnOlxuXHRcdFx0Y2FzZSAnbWFyaWUtY2xhaXJlJzpcblx0XHRcdGNhc2UgJ2dsb2JvLXJ1cmFsJzpcblx0XHRcdGNhc2UgJ2dxJzpcblx0XHRcdGNhc2UgJ21vbmV0Jzpcblx0XHRcdGNhc2UgJ2NyZXNjZXInOlxuXHRcdFx0Y2FzZSAnZ2FsaWxldSc6XG5cdFx0XHRcdHJldHVybiBub21lUHJvZHV0bztcblx0XHRcdGNhc2UgJ2Nhc2EtZS1qYXJkaW0nOlxuXHRcdFx0XHRyZXR1cm4gJ2Nhc2EtamFyZGltJztcblx0XHRcdGNhc2UgJ3F1ZW0tYWNvbnRlY2UnOlxuXHRcdFx0XHRyZXR1cm4gJ3F1ZW0nO1xuXHRcdFx0Y2FzZSAndmFsb3InOlxuXHRcdFx0XHRyZXR1cm4gJ3ZhbG9yZGlnaXRhbCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFvIG9idGVyIGPDs2RpZ28gZG8gcHJvZHV0b1wiLCBub21lUHJvZHV0byArIFwiIC0gXCIgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcblx0XHRcdFx0cmV0dXJuICdlcnJvcic7XG5cdFx0fVxuXHR9XHRcbn07XG5cblBpYW5vLmphbmVsYUFub25pbWEgPSB7XG5cdHJldHJ5IDogZnVuY3Rpb24oaXNEb25lLCBuZXh0KSB7XG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xuXHRcdHZhciBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VycmVudF90cmlhbCsrID4gbWF4X3JldHJ5KSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQxMFxuXHRcdCk7XG5cdH0sXG5cdGlzSUUxME9yTGF0ZXIgOiBmdW5jdGlvbih1c2VyX2FnZW50KSB7XG5cdFx0bGV0IHVhID0gdXNlcl9hZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xuXHRcdFxuXHRcdGlmICh1YS5pbmRleE9mKCdtc2llJykgPT09IDAgJiYgdWEuaW5kZXhPZigndHJpZGVudCcpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChtYXRjaCAmJiBwYXJzZUludChtYXRjaFsxXSwgMTApID49IDEwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZXRlY3RQcml2YXRlTW9kZSA6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGlzX3ByaXZhdGU7XG5cblx0XHRpZiAod2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKSB7XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXG5cdFx0XHRcdHdpbmRvdy5URU1QT1JBUlksIDEsXG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAod2luZG93LmluZGV4ZWREQiAmJiAvRmlyZWZveC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHZhciBkYjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRiID0gd2luZG93LmluZGV4ZWREQi5vcGVuKCd0ZXN0Jyk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcblx0XHRcdFx0XHRmdW5jdGlvbiBpc0RvbmUoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGIucmVhZHlTdGF0ZSA9PT0gJ2RvbmUnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZnVuY3Rpb24gbmV4dChpc190aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWlzX3RpbWVvdXQpIHtcblx0XHRcdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGRiLnJlc3VsdCA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChQaWFuby5qYW5lbGFBbm9uaW1hLmlzSUUxME9yTGF0ZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIXdpbmRvdy5pbmRleGVkREIpIHtcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UgJiYgL1NhZmFyaS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIDEpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZXN0Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcblx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBpc19wcml2YXRlICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcblx0XHRcdFx0Y2FsbGJhY2soaXNfcHJpdmF0ZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufTtcblxuUGlhbm8ua3J1eCA9IHtcblx0dGVtOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRsaWdhZG86IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETztcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJyAmJiB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyAhPSBcInByZFwiKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJyB8fCB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PSBcInByZFwiKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LktSVVhMSUdBRE8pID09IFwiZmFsc2VcIikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0b2J0ZW1TZWdtZW50YWNhbzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLmtydXgudGVtKCkgJiYgUGlhbm8ua3J1eC5saWdhZG8oKSkge1xuXHRcdFx0dmFyIHNlZ21lbnRhY29lcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKS5zcGxpdCgnLCcpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50YWNvZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBzZWdtZW50YWNvZXNbaV0sIHNlZ21lbnRhY29lc1tpXV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8ucmVnaW9uYWxpemFjYW8gPSB7XHRcblx0Z2V0UmVnaW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIga3J1eEdlbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdreGdsb2JvX2dlbycpO1xuXHRcdGlmIChrcnV4R2VvKSB7XG5cdFx0XHRrcnV4R2VvLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSBpdGVtLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBkYXRhWzBdO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBkYXRhWzFdO1xuXHRcdFx0XHRpZiAoa2V5ID09PSAncmVnaW9uJykge1xuXHRcdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJyZWdpb25cIiwgdmFsdWVdKTtcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLm1ldHJpY2FzID0ge1xuXHRlbnZpYUV2ZW50b3NHQTogZnVuY3Rpb24oX0dBQWNhbywgX0dBUm90dWxvKSB7IC8vVE9ETzogYXJxdWl2byB0aW55cGFzcy5qcywgaW5zZXJpZG8gcGVsYSBQaWFubywgdXRpbGl6YSBlc3NhIGZ1bsOnw6NvXG5cdFx0Y29uc3QgaXNQcm9kdWN0VmFsb3IgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8nLCBfR0FBY2FvLCBfR0FSb3R1bG8sICx0cnVlXSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vJywgJ2V2ZW50b0dBQWNhbyc6IF9HQUFjYW8sICdldmVudG9HQVJvdHVsbyc6X0dBUm90dWxvfSk7XG5cdH0sXG5cblx0bW9udGFSb3R1bG9HQTogZnVuY3Rpb24oKSB7IC8vVE9ETzogYXQgUGlhbm8gYXMgc2V0RXhwZXJpZW5jZSgpIHwgQ2hlY2sgb24gb2xkIHRpbnkgYmVmb3JlIHJlbW92ZVxuXHRcdGlmKHdpbmRvdy5yZWdyYXNUaW55ICYmIHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhICsgXCIgLSBcIiArIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vIDogd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xuXHRcdH0gZWxzZSBpZiAod2luZG93Lm5vbWVFeHBlcmllbmNpYSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5ub21lRXhwZXJpZW5jaWE7XG5cdFx0fVxuXHRcdHJldHVybiBcIiBcIjtcblx0fSxcblx0c2V0TGltaXRlQ29udGFnZW06IGZ1bmN0aW9uKG1ldHJpY2FzKSB7XG5cdFx0X0dBTGltaXRlID0gXCItXCI7XG5cdFx0X0dBQ29udGFnZW0gPSBcIi1cIjtcblx0XHRpZighbWV0cmljYXMpIHJldHVybjtcblx0XHRfR0FDb250YWdlbSA9IFwiXCIgKyBtZXRyaWNhcy52aWV3cztcblx0XHRpZiAoX0dBQ29udGFnZW0ubGVuZ3RoID09IDEpIHtcblx0XHRcdF9HQUNvbnRhZ2VtID0gXCIwXCIgKyBfR0FDb250YWdlbTtcblx0XHR9XG5cdFx0X0dBTGltaXRlID0gbWV0cmljYXMubm9tZUV4cGVyaWVuY2lhICtcIiA6IFwiKyBtZXRyaWNhcy5tYXhWaWV3cztcblx0fSxcblx0aWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyOiBmdW5jdGlvbihyZWdyYXMpIHtcblx0XHR2YXIgcGFzc2FnZW0gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLm1ldHJpY2FzLkVWRU5UT19TRU1fQUNBTztcblx0XHRpZihIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIHtcblx0XHRcdHBhc3NhZ2VtID0gcmVncmFzLmZsdXhvLmluZGV4T2YoXCJoYXJkd2FsbFwiKSAhPSAtMSA/ICdyZWdpc3Rlci1oYXJkd2FsbC1wYXNzb3UnIDogJ3JlZ2lzdGVyLWNvbnRhZ2VtLXBhc3NvdSc7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFzc2FnZW07XG5cdH0sXG5cdGV4ZWN1dGFBcG9zUGFnZXZpZXc6IGZ1bmN0aW9uKGV4cGlyb3UpIHtcblx0XHRpZiAoIVBpYW5vLnZhcmlhdmVpcy5leGVjdXRvdVBhZ2V2aWV3KCkpIHtcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55LmZsdXhvID0gd2luZG93LnRwQ29udGV4dCA/IHRwQ29udGV4dC50b0xvd2VyQ2FzZSgpIDogJy0nO1xuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgOiAnJztcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldExpbWl0ZUNvbnRhZ2VtKHdpbmRvdy5yZWdyYXNUaW55KTtcblx0XHRcdGlmIChleHBpcm91ID09IGZhbHNlKSBHQS5zZXRFdmVudHMoUGlhbm8ubWV0cmljYXMuaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyKHdpbmRvdy5yZWdyYXNUaW55KSwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRcdGV4ZWN1dG91UGFnZXZpZXcgPSB0cnVlO1xuXHRcdH1cblx0fSxcblx0c2V0YVZhcmlhdmVpczogZnVuY3Rpb24oaWRMb2dpbiwgdGlwb0xvZ2luLCBhc3NpbmF0dXJhTG9nYWRhKXtcblx0XHRQYXl3YWxsQW5hbHl0aWNzLmlkTG9naW5Bc3NpbmFudGUgPSBpZExvZ2luO1xuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLnRpcG9Mb2dpbkFzc2luYW50ZSA9IHRpcG9Mb2dpbjtcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy5hc3NpbmF0dXJhTG9nYWRhID0gYXNzaW5hdHVyYUxvZ2FkYTtcblx0fVxufTtcblxuXG5QaWFuby5iYW5uZXIgPSB7XG5cdG1vc3RyYXJGb290ZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL25vdm8tYmFubmVyLWZvb3Rlci5qc1wiKTtcblx0fSxcblx0bW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyQXZhdGFySGVhZGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2F2YXRhci1oZWFkZXItcGlhbm8uanNcIik7XG5cdH0sXG5cdGJvdHRvbUZpeGVkOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xuXHRcdHdpbmRvdy5nbGJCYW5uZXJCb3R0b20gPSBwYXJhbXM7XG5cblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3N0eWxlcy9iYW5uZXItYm90dG9tLWZpeGVkLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3NjcmlwdHMvYmFubmVyLWJvdHRvbS1maXhlZC5qc1wiKTtcblx0fSxcblx0bW9zdHJhclNXRzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgY3NzID0gYDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc3R5bGVzL3N0eWxlLmNzcyc+YDtcblx0XHRjb25zdCBzY3JpcHRKcyA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvc3dnL3YxL3NjcmlwdC9hbnVuY2lvLXN3Zy5qc2A7XG5cblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhjc3MpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShzY3JpcHRKcyk7XG5cdH0sXG5cdG1vc3RyYXJIaWdobGlnaHRTYWxlOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3NjcmlwdHMvaGlnaGxpZ2h0LXNhbGUuanNcIik7XG5cdH0sXG5cdG1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3ZhbG9yLXN1YnNjcmliZS1idXR0b24vXCIrdmVyc2FvK1wiL3NjcmlwdHMvc3Vic2NyaWJlLWJ1dHRvbi5qc1wiKTtcblx0fVxuXG59O1xuXG5QaWFuby5yZWdpc3RlciA9IHtcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92YS10ZWxhLXJlZ2lzdGVyLmpzXCIpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xuXHR9XG59O1xuXG5QaWFuby5oZWxwZXIgPSB7XG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24oKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfNjVkMTkzMGEwYmRhNDc2YmE4ZDNjMjVjNTM3MWVjM2YvcGlhbm8vaGVscGVyL3JlZ2lzdGVyLmpzXCIpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xuXHR9XG59O1xuXG5QaWFuby5wYXl3YWxsID0ge1xuXHRyZWRpcmVjaW9uYXJCYXJyZWlyYTogZnVuY3Rpb24odXJsKSB7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQmFycmVpcmFcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO30sIDEwMDApO1xuXHR9LFxuXHRzaG93OiBmdW5jdGlvbih0eXBlUGF5d2FsbCA9IG51bGwpIHtcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHR5cGVQYXl3YWxsO1xuXHRcblx0XHR0cnkge1xuXHRcdFx0bmV3IFBheXdhbGxDcHQoKTtcdFx0XHRcblx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y2F0Y2goZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbCAtIEVycm9yIG9uIGxvYWQnKVxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7IFxuXHRcdH1cblx0fSxcblx0YW5hbHl0aWM6IGZ1bmN0aW9uICgpIHtcblx0XHR0cnkge1xuXHRcdFx0bmV3IFBheXdhbGxDcHRJbmxpbmUoKTtcblx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbCAtIEVycm9yIG9uIGxvYWQnLCBlcnIpXG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5jaGVja1BpYW5vQWN0aXZlID0gZnVuY3Rpb24gKCkgeyBcblx0bGV0IGNvdW50ID0gMFxuXHRcblx0bGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuXHRcdGlmKHdpbmRvdy50cCAhPT0gJ3VuZGVmaW5lZCcgXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2VcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHRcbiAgICAgICAgICAmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHMpXG5cdCAgICAge1xuXHRcdFx0UGlhbm8uY2hlY2tQYXl3YWxsKHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50cylcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0fSBcblx0XHRlbHNlIHtcblx0XHRcdGlmKGNvdW50ID09PSAxMCkge1xuXHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKVxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdGNvdW50Kytcblx0XHR9XG5cdFx0XG5cdCAgfSwgNTAwKTtcblxufTtcblxuUGlhbm8uY2hlY2tQYXl3YWxsID0gZnVuY3Rpb24oUGlhbm9SZXN1bHRFdmVudHMgPSBudWxsKSB7IFxuICAgbGV0IGhhc1J1bkpzV2l0aFBheXdhbGwgPSBmYWxzZVxuXG5cdGlmKFBpYW5vUmVzdWx0RXZlbnRzKSB7IFxuICAgICAgICBQaWFub1Jlc3VsdEV2ZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS5ldmVudFR5cGUgPT09ICdydW5KcycpIHtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQgIT09ICd1bmRlZmluZWQnICYmIChpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQuaW5jbHVkZXMoJ3BheXdhbGwuc2hvdycpIHx8IGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldC5pbmNsdWRlcygnbW9zdHJhckJhcnJlaXJhJykgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhhc1BheXdhbGwgPSB0cnVlXG5cdFx0XHRcdFx0aGFzUnVuSnNXaXRoUGF5d2FsbCA9IHRydWVcblx0XHRcdFx0XHRQaWFuby50cmlnZ2VyUGF5d2FsbE9wZW5lZCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKCFoYXNSdW5Kc1dpdGhQYXl3YWxsKVxuICAgICAgICAgICBQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKVxuICAgIH1cblxufTtcblxuUGlhbm8udHJpZ2dlckFkdmVydGlzaW5nID0gZnVuY3Rpb24oKSB7XG5cdHdpbmRvdy5oYXNQYXl3YWxsID0gZmFsc2U7XG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xlYXJGb3JBZHMnKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cblBpYW5vLnRyaWdnZXJQYXl3YWxsT3BlbmVkID0gZnVuY3Rpb24oKSB7XG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnYmxvY2tGb3JBZHMnKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cblBpYW5vLnJlZ2lzdGVyUGF5d2FsbCA9IHsgXG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24odmVyc2FvID0gbnVsbCwgdGlwbyA9IG51bGwpIHtcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHRpcG87XG5cblx0XHRpZighdmVyc2FvIHx8ICFQaWFuby50eXBlUGF5d2FsbCApIHtcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcblx0XHR9IGVsc2Uge1xuXHRcdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcblx0XHRcdFx0XCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vLmpzXCIsIFxuXHRcdFx0XHRkYXRhID0+IHsgXG5cdFx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgIT09IDIwMCkgeyBcblx0XHRcdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdFxuXHRcdFx0aWYoUGlhbm8udHlwZVBheXdhbGwgPT09ICdyZWdpc3RlcicgfHwgUGlhbm8udHlwZVBheXdhbGwgPT09ICdleGNsdXNpdm8nICkge1xuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdFx0XHR9IGVsc2Uge1x0XHRcdFxuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0fVxufTtcblxuUGlhbm8uY29tdW5pY2FkbyA9IHtcblx0bW9zdHJhckluZm9ybWFjYW86IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2NvbXVuaWNhY2FvLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9jb211bmljYWNhby1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uYWRibG9jayA9IHtcblx0bW9zdHJhckFkQmxvY2s6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XG5cblx0XHRwYXJhbXMuYXNzZXRzUGF0aCA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9gO1xuXHRcdFxuXHRcdHdpbmRvdy5nbGJBZGJsb2NrID0gcGFyYW1zO1xuXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3NjcmlwdHMvYWRibG9jay1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uYmxvcXVlaW9zID0ge1xuXHRsaWJlcmFyRXNjOiBmdW5jdGlvbigpIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vbGliZXJhVGVjbGFkby5qc1wiKTtcblx0fSxcblx0YmxvcXVlaWFWaWV3TW9kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9ibG9xdWVpby9ibG9xdWVpYVZpZXdtb2RlLmpzXCIpO1xuICAgIH1cbn07XG5cblBpYW5vLnBhcmNlaXJvID0ge1xuXHRtb3N0cmFGb290ZXJQYXJjZWlybzogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9mb290ZXItcGFyY2Vpcm9zLXBpYW5vLmpzXCIpO1xuXHR9XG59O1xuXG5QaWFuby5pbmFkaW1wbGVudGUgPSB7XG5cdGdldExpbmtBc3NpbmF0dXJhOiBmdW5jdGlvbihsaW5rKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAobGlua1tpXS5yZWwgPT0gJ2Fzc2luYXR1cmEnKSByZXR1cm4gbGlua1tpXS5ocmVmO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH1cbn07XG5cblBpYW5vLnhtbEh0dHBSZXF1ZXN0ID0ge1xuXHRnZXJhU2NyaXB0TmFQYWdpbmE6IGZ1bmN0aW9uKHVybFNjcmlwdCwgY2FsbGJhY2spIHtcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsU2NyaXB0KTtcblx0XHR4aHIuc2VuZCgpO1xuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCl7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHRcdHZhciBhcHBlbmREZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0XHRcdGFwcGVuZERlU2NyaXB0LmlubmVySFRNTCA9IHJlc3Bvc3RhO1xuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwZW5kRGVTY3JpcHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIG5hIGZ1bsOnw6NvIGdlcmFyIHNjcmlwdCBuYSBww6FnaW5hLicsICd1cmw6ICcgKyB1cmxTY3JpcHRcblx0XHRcdFx0XHRcdCsgJyBTdGF0dXNFcnJvOiAnICsgdGhpcy5zdGF0dXNcblx0XHRcdFx0XHRcdCsgJyBTdGFjazogJyArIHRoaXMuc3RhdHVzVGV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoY2FsbGJhY2spXG5cdFx0XHRcdGNhbGxiYWNrKHhocik7IFxuXHRcdH07XHRcblx0fSxcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IGZ1bmN0aW9uKGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSB7XG5cdFx0XG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlLCBmYWxzZSk7XG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZCgpO1xuXHRcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcblx0XHRcdGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XG5cdFx0XHRcdHZhciBzaXR1YWNhb1BhZ2FtZW50byA9IHJlc3BKc29uLnNpdHVhY2FvUGFnYW1lbnRvLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJzaXR1YWNhb1BhZ2FtZW50b1wiLCBzaXR1YWNhb1BhZ2FtZW50b10pO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgIT0gMCAmJiBQaWFuby52YXJpYXZlaXMuc3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZS5pbmRleE9mKHhoci5zdGF0dXMpID4gLTEpIHtcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIFwiU3RhdHVzIERlc2NvbmhlY2lkb1wiICsgXCIgLSBcIiArIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbzogZnVuY3Rpb24oZ2xiaWQpIHtcblx0XHRcblx0XHR2YXIgY29kaWdvUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCk7XG5cdFx0aWYoY29kaWdvUHJvZHV0byA9PSAnZXJyb3InKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ0b2tlbi1hdXRlbnRpY2FjYW9cIjogZ2xiaWQsIFwiaXBVc3VhcmlvXCI6IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5JUCwgXCJjb2RpZ29Qcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG99KTtcblxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxWZXJpZmljYUxlaXRvciwgZmFsc2UpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZChkYXRhKTtcblx0XHRcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKXtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XG5cdFx0XHRcdHZhciByZXNwb3N0YURlVGVybW9EZVVzbyA9IGZhbHNlLCByZXNwb3N0YURlTW90aXZvID0gJycsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gJyc7XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubW90aXZvICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRyZXNwb3N0YURlTW90aXZvID0gcmVzcEpzb24ubW90aXZvLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi50ZW1UZXJtb0RlVXNvICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRyZXNwb3N0YURlVGVybW9EZVVzbyA9IHJlc3BKc29uLnRlbVRlcm1vRGVVc287XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5saW5rICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9IFBpYW5vLmluYWRpbXBsZW50ZS5nZXRMaW5rQXNzaW5hdHVyYShyZXNwSnNvbi5saW5rKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgaXNBdXRvcml6YWRvID0gUGlhbm8uYXV0ZW50aWNhY2FvLmlzQXV0b3JpemFkbyhyZXNwb3N0YURlVGVybW9EZVVzbywgcmVzcG9zdGFEZU1vdGl2bywgcmVzcEpzb24uYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHJlc3BKc29uLmF1dG9yaXphZG8sIHJlc3Bvc3RhRGVNb3Rpdm8sIGlzQXV0b3JpemFkbywgcmVzcG9zdGFEZVRlcm1vRGVVc28pO1xuXHRcdFx0XHR2YXIgX2pzb25MZWl0b3IgPSB7XG5cdFx0XHRcdFx0XHRcImF1dG9yaXphZG9cIiA6IHJlc3BKc29uLmF1dG9yaXphZG8sXG5cdFx0XHRcdFx0XHRcIm1vdGl2b1wiOiByZXNwb3N0YURlTW90aXZvLFxuXHRcdFx0XHRcdFx0XCJsb2dhZG9cIjogaXNBdXRvcml6YWRvLFxuXHRcdFx0XHRcdFx0XCJ0ZW1UZXJtb0RlVXNvXCI6IHJlc3Bvc3RhRGVUZXJtb0RlVXNvLFxuXHRcdFx0XHRcdFx0XCJnbGJpZFwiOiBnbGJpZCxcblx0XHRcdFx0XHRcdFwicHJvZHV0b1wiOiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSxcblx0XHRcdFx0XHRcdFwiY29kUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvLFxuXHRcdFx0XHRcdFx0XCJ1dWlkXCI6IHJlc3BKc29uLnVzdWFyaW9JZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdF9qc29uTGVpdG9yID0gYnRvYShlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkoX2pzb25MZWl0b3IpKSk7XG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgX2pzb25MZWl0b3IsIDEpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aWYoUGlhbm8uZ29vZ2xlLnNob3dTYXZlU3Vic2NyaXB0aW9uKHJlc3BKc29uKSl7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHZhciBzd2dTZXJ2aWNlID0gbmV3IFN3Z1NlcnZpY2UoKTtcblx0XHRcdFx0XHRcdFx0c3dnU2VydmljZS5zYXZlR2xvYm9TdWJzY3JpcHRpb24oZ2xiaWQpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBhbyBjaGFtYXIgYSBmdW7Dp8OjbyBzaG93U2F2ZVN1YnNjcmlwdGlvbiBkbyBBbGRlYmFyYW4uJywgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdVUkw6ICcgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgR0xCSUQ6ICcgKyBnbGJpZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgRXJybzogJyArIGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmKHJlc3BKc29uLmF1dG9yaXphZG8gPT0gdHJ1ZSl7XG5cdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhyZXNwSnNvbi51c3VhcmlvSWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBUEkgZGUgYXV0b3JpemFjYW8gZGUgYWNlc3NvXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgZ2xiaWQpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0fVx0XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5nb29nbGUgPSB7XG4gIGlzQXV0aG9yaXplZDogZnVuY3Rpb24gKCkge1xuXHRcdGlmKHN3Z0VudGl0bGVtZW50cy5nZXRFbnRpdGxlbWVudEZvclNvdXJjZShcIm9nbG9iby5nbG9iby5jb21cIikpe1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpLnN1YnNjcmlwdGlvblRva2VuLCBcIkNvbnRhIEdvb2dsZVwiLCBcIk8gR2xvYm9cIik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSl7XG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCksIFwiQ29udGEgR29vZ2xlXCIsIFwiR29vZ2xlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGlzU3BlY2lmaWNHb29nbGVVc2VyOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8uZ29vZ2xlLmlzQXV0aG9yaXplZCgpKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dHJ5e1xuXHRcdFx0dmFyIG9HbG9ib0J1c2luZXNzID0gbmV3IE9HbG9ib0J1c2luZXNzKCk7XG5cdFx0XHRvR2xvYm9CdXNpbmVzcy52ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkKHN3Z0VudGl0bGVtZW50cyk7XG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJFcnJvIGFvIGV4ZWN1dGFyIG8gQWxkZWJhcmFuXCIsIFwiRXJyb3I6IFwiICsgZXJyb3IgKyBcIiAtIEVudGl0bGVtZW50czogXCIgKyBzd2dFbnRpdGxlbWVudHMuZW50aXRsZW1lbnRzWzBdLnN1YnNjcmlwdGlvblRva2VuKTtcblx0XHR9XHRcdFx0XG5cdH0sXG5cblx0c2hvd1NhdmVTdWJzY3JpcHRpb246IGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRpZighc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkgJiYgcmVzcG9uc2UubW90aXZvID09PVwiQVVUT1JJWkFET1wiICYmICFIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLlNBVkVfU1VCU0NSSVBUSU9OKSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cbn07XG5cblBpYW5vLmF1dGVudGljYWNhbyA9IHtcblx0aXNMb2dhZG9DYWR1bjogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xuXHRcdGlmICghZ2xiaWQpIHtcblx0XHRcdGlmICh1dHApIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0cmV0dXJuIGdsYmlkICE9ICcnO1xuXHR9LFxuXHR2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG86IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcblx0XHRpZiAoUGlhbm8uYXV0ZW50aWNhY2FvLmlzTG9nYWRvQ2FkdW4oZ2xiaWQsIHV0cCkpIHtcblx0XHRcdGlmICh1dHApIHtcblx0XHRcdFx0dmFyIF9sZWl0b3IgPSBKU09OLnBhcnNlKGRlY29kZVVSSShhdG9iKHV0cCkpKTtcblx0XHRcdFx0aWYgKGdsYmlkID09IF9sZWl0b3IuZ2xiaWQgJiYgKHR5cGVvZiBfbGVpdG9yLnByb2R1dG8gPT0gXCJ1bmRlZmluZWRcIiB8fCBfbGVpdG9yLnByb2R1dG8gPT0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpKSB7XG5cdFx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhfbGVpdG9yLmF1dG9yaXphZG8sIF9sZWl0b3IubW90aXZvLCBfbGVpdG9yLmxvZ2FkbywgX2xlaXRvci50ZW1UZXJtb0RlVXNvKTtcblx0XHRcdFx0XHRpZihfbGVpdG9yLmF1dG9yaXphZG8pe1xuXHRcdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhfbGVpdG9yLnV1aWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0XHR9XG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvKGdsYmlkKTtcblx0XHR9XG5cdH0sXG5cdGlzQXV0b3JpemFkbzogZnVuY3Rpb24odGVybW9EZVVzbywgbW90aXZvLCBhdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXHRcdGlmIChhdXRvcml6YWRvIHx8IG1vdGl2byA9PSBcImluZGlzcG9uaXZlbFwiIHx8IHRlcm1vRGVVc28gIT0gZmFsc2UpIHtcblx0XHRcdGlmIChhdXRvcml6YWRvICYmIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSBQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZShocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZWZpbmVVc3VhcmlvUGlhbm86ZnVuY3Rpb24oYXV0b3JpemFkbywgbW90aXZvLCBsb2dhZG8sIHRlbVRlcm1vRGVVc28pe1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhdXRvcml6YWRvXCIsIGF1dG9yaXphZG9dKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibW90aXZvXCIsIG1vdGl2b10pO1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJsb2dhZG9cIiwgbG9nYWRvXSk7XG5cdFx0aWYodGVtVGVybW9EZVVzbyAhPSBcIiBcIilcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ0ZW1UZXJtb1wiLCB0ZW1UZXJtb0RlVXNvXSk7XG5cdH1cbn07XG5cblBpYW5vLnV0aWwgPSB7XG5cdGlzU2VjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09PSAnc2VjdGlvbicgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdHRlbVZhcmlhdmVpc09icmlnYXRvcmlhczogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCB0aXBvQ29udGV1ZG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCBub21lUHJvZHV0b1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0ZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmw6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XG5cdFx0dmFyIGNoYXZlc0NhbXBhbmhhID0gWyd1dG1fbWVkaXVtJywndXRtX3NvdXJjZSddO1xuXHRcdHZhciB2YWxvcmVzQ2FtcGFuaGEgPSBbXTtcblxuXHRcdGZvciAodmFyIGlkeFBhcmFtQ2FtcGFuaGEgPSAwOyBpZHhQYXJhbUNhbXBhbmhhIDwgY2hhdmVzQ2FtcGFuaGEubGVuZ3RoOyBpZHhQYXJhbUNhbXBhbmhhKyspIHtcblx0XHRcdHZhciBjaGF2ZUNhbXBhbmhhID0gY2hhdmVzQ2FtcGFuaGFbaWR4UGFyYW1DYW1wYW5oYV07XG5cdFx0XHRpZiAodXJsLmluZGV4T2YoY2hhdmVDYW1wYW5oYSArICc9JykgIT0gLTEpIHtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBjaGF2ZUNhbXBhbmhhICsgXCI9KFteJiNdKilcIik7XG5cdFx0XHRcdHZhciB2YWxvckNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHRcdFx0aWYodmFsb3JDYW1wYW5oYSl7XG5cdFx0XHRcdFx0dmFsb3Jlc0NhbXBhbmhhLnB1c2godmFsb3JDYW1wYW5oYSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbG9yZXNDYW1wYW5oYS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidXRtXCIsIHZhbG9yZXNDYW1wYW5oYS5qb2luKFwiO1wiKV0pO1xuXHRcdH1cblx0XHRpZiAodXJsLmluZGV4T2YoJ3V0bV9jYW1wYWlnbj0nKSAhPSAtMSkge1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcInV0bV9jYW1wYWlnbj0oXFxcXHcrKVwiKTtcblx0XHRcdHZhciBjYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XG5cdFx0XHRpZihjYW1wYW5oYSl7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjYW1wYW5oYVwiLCBjYW1wYW5oYV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aXNPcmlnZW1CdXNjYWRvcjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIHJlZ2V4Um9ib3MgPSBuZXcgUmVnRXhwKFwiKGlhX2FyY2hpdmVyKXwoR29vZ2xlYm90KXwoTWVkaWFwYXJ0bmVycy1Hb29nbGUpfChBZHNCb3QtR29vZ2xlKXwobXNuYm90KXwoWWFob28hIFNsdXJwKXwoWnlCb3JnKXwoQXNrIEplZXZlcy9UZW9tYSl8KGJpbmdib3QpfChjWGVuc2Vib3QpXCIpO1xuXHRcdHZhciBlaFJvYm8gPSByZWdleFJvYm9zLnRlc3QodXNlckFnZW50KTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYnVzY2Fkb3JcIiwgZWhSb2JvXSk7XG5cdFx0cmV0dXJuIGVoUm9ibztcblx0fSxcblx0bW9udGFVcmxTdGc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpICE9ICdwcmQnID8gJy1zdGcnIDogJyc7XG5cdH0sXG5cdHRlbVBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbU5hbWUpIHtcblx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcblx0XHRyZXR1cm4gcGFyYW1ldHJvcy5pbmRleE9mKHBhcmFtTmFtZSkgIT0gLTEgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldFZhbG9yUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtZXRybykge1xuXHRcdGlmIChQaWFuby51dGlsLnRlbVBhcmFtZXRyb05hVXJsKHBhcmFtZXRybykpIHtcblx0XHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBwYXJhbWV0cm8gKyBcIj0oW14mI10qKVwiKTtcblx0XHRcdHJldHVybiBwYXJhbWV0cm9zLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuIFwic2VtIHBhcmFtZXRyb1wiO1xuXHR9LFxuXHRpc0RlYnVnOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHO1xuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGlzRG9taW5pb09HbG9ibzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIjovLyguKj8pL1wiKSwgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKTtcblx0XHRpZiAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwib2dsb2JvXCIpID4gLTEgfHwgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImdsb2JvaVwiKSA+IC0xICYmIHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImVkZ1wiKSA9PSAtMSkpIHtcblx0XHRcdHJldHVybiB1cmwubWF0Y2gocmVnZXgpWzFdO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH0sXG5cdGNhbGxiYWNrTWV0ZXI6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcoZmFsc2UpO1xuXHR9LFxuXHRjYWxsYmFja01ldGVyRXhwaXJlZDogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XG5cdFx0d2luZG93LnJlZ3Jhc1RpbnkgPSBtZXRlckRhdGE7XG5cdFx0UGlhbm8udmFyaWF2ZWlzLmlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkID0gdHJ1ZTtcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KHRydWUpO1xuXHR9LFxuXHRnZXRXaW5kb3dMb2NhdGlvblNlYXJjaDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0fSxcblx0Z2V0V2luZG93TG9jYXRpb25IcmVmOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0fSxcblx0YWRpY2lvbmFyQ3NzOiBmdW5jdGlvbihjc3NQYXRoKXtcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGUuaW5uZXJIVE1MID0gY3NzUGF0aDtcblx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlLCBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG5cdH0sXG5cdGlzUmV2aXN0YTogZnVuY3Rpb24oKXtcblx0XHR2YXIgcmV2aXN0YXMgPSBbXCJlcG9jYVwiLCBcImF1dG8tZXNwb3J0ZVwiLCBcInZvZ3VlXCIsIFwiZ2xhbW91clwiLCBcImNhc2Etdm9ndWVcIiwgXCJtYXJpZS1jbGFpcmVcIiwgXCJjYXNhLWUtamFyZGltXCIsIFwicXVlbS1hY29udGVjZVwiLCBcImdsb2JvLXJ1cmFsXCIsIFwiZ3FcIiwgXCJtb25ldFwiLCAnY3Jlc2NlcicsJ2dhbGlsZXUnXTtcblx0XHRpZihyZXZpc3Rhcy5pbmRleE9mKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSA+IC0xKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRyZWNhcnJlZ2FQaWFubzogZnVuY3Rpb24gKHRpcG9Db250ZXVkbywgaXNFeGNsdXNpdm8sIG5vbWVQcm9kdXRvKSB7XG5cdFx0d2luZG93LnRpcG9Db250ZXVkb1BpYW5vID0gdGlwb0NvbnRldWRvO1xuXHRcdHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA9IGlzRXhjbHVzaXZvO1xuXHRcdHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID0gbm9tZVByb2R1dG87XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cucmVncmFzVGlueSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSA9IFwiXCI7XG5cdFx0fVxuXHRcdFBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0dHAuZXhwZXJpZW5jZS5leGVjdXRlKCk7XG5cdH0sXG5cdGlzVmFsb3I6IGZ1bmN0aW9uICgpIHtcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gXCJ2YWxvclwiKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5QaWFuby5jb25maWd1cmFjYW8gPSB7XG5cdGpzb25Db25maWd1cmFjYW9UaW55UGFzczoge1xuXHRcdCdpbnQnOiB7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidkWHU3ZHZGS1JpJyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonTWN0RmdSQ0VzdScsXG5cdFx0XHQnc2V0U2FuZEJveCc6J3RydWUnLFxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1kWHU3ZHZGS1JpJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1NY3RGZ1JDRXN1Jyxcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xuXHRcdH0sXG5cdFx0J3FsdCc6e1xuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGlxbHQtaWcuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXG5cdFx0fSxcblx0XHQncHJkJzp7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6Jyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaS5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vJyxcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLmNvbnN0cnV0b3IgPSB7XG5cdGluaXRUcDogZnVuY3Rpb24oKSB7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiSW5pY2lvIEluaXRUcFwiKTtcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xuXHRcdHRwLnB1c2goW1wic2V0VGFnc1wiLCBbUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCldXSk7XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcblx0XHR9XG5cdFx0dHAucHVzaChbXCJzZXRTYW5kYm94XCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uc2V0U2FuZEJveF0pO1xuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcblx0XHR2YXIgY2xlYW5fdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKS5zcGxpdChcIj9cIilbMF07XG5cdFx0dHAucHVzaChbXCJzZXRQYWdlVVJMXCIsY2xlYW5fdXJsXSk7XG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm5vbWVQcm9kdXRvXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5kZXRlY3RQcml2YXRlTW9kZShmdW5jdGlvbiAoaXNfcHJpdmF0ZSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjb250ZXVkb0V4Y2x1c2l2b1wiLCB0cnVlXSk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJyAmJiAodHlwZW9mIHN3Z0VudGl0bGVtZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkpICkge1xuXHRcdFx0UGlhbm8uZ29vZ2xlLmlzU3BlY2lmaWNHb29nbGVVc2VyKHN3Z0VudGl0bGVtZW50cyk7XG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsXCJBVVRPUklaQURPXCIsIHRydWUsIFwiXCIpO1xuXHRcdH1lbHNle1xuXHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLnZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50byhIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5HQ09NKSwgSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQKSk7XG5cdFx0fVxuXHRcdFxuXHRcdFBpYW5vLnJlZ2lvbmFsaXphY2FvLmdldFJlZ2lvbigpO1xuXHRcdFBpYW5vLmtydXgub2J0ZW1TZWdtZW50YWNhbygpO1xuXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImJhbm5lckNvbnRhZG9yTGlnYWRvXCIsIHRydWVdKTtcblx0XHRQaWFuby51dGlsLmlzT3JpZ2VtQnVzY2Fkb3IoKSB8fCBQaWFuby51dGlsLmV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsKCk7XG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJBY3RpdmVcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyXSk7XG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJFeHBpcmVkXCIsIFBpYW5vLnV0aWwuY2FsbGJhY2tNZXRlckV4cGlyZWRdKTtcblx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJGaW0gSW5pdFRwXCIpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBsb2FkUGlhbm9FeHBlcmllbmNlcygpe1xuXHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdGEudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG5cdGEuYXN5bmMgPSB0cnVlO1xuXHRpZihQaWFuby51dGlsLmlzUmV2aXN0YSgpIHx8IFBpYW5vLnV0aWwuaXNWYWxvcigpKSB7XG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFub1JldmlzdGFzO1x0XG5cdH0gZWxzZSB7XG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFubztcblx0fVxuXHRcblx0dmFyIGIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcblxuXHRiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuXHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJTY3JpcHQgYWRpY2lvbmFkb1wiKTtcbn1cblxuZnVuY3Rpb24gcGlhbm9Jbml0KCkgeyBcblx0d2luZG93LlBpYW5vLmNoZWNrUGlhbm9BY3RpdmUoKVxuXHRcblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxuXG4gICAgaWYgKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpIHsgXG5cdFx0d2luZG93LlNXRy5wdXNoKChzdWJzY3JpcHRpb25zKSA9PiB7XG5cdFx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2ctc3Vic2NyaXB0aW9ucycsIHN1YnNjcmlwdGlvbnMpXG5cblx0XHRcdHN3ZyA9IHN1YnNjcmlwdGlvbnM7XG5cblx0XHRcdHN1YnNjcmlwdGlvbnMuc2V0T25FbnRpdGxlbWVudHNSZXNwb25zZShlbnRpdGxlbWVudHNQcm9taXNlID0+IHtcblx0XHRcdFx0ZW50aXRsZW1lbnRzUHJvbWlzZS50aGVuKGVudGl0bGVtZW50cyA9PiB7IFxuXHRcdFx0XHRcdHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSBlbnRpdGxlbWVudHM7XG5cblx0XHRcdFx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gU1dHXCIsIFwiRW50aXRsZW1lbnRzIHJlY2ViaWRvc1wiKTtcblxuXHRcdFx0XHRcdGlmICh3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0XHRcdFx0XHRcdGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXRjaChlcnJvcil7XG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiUGlhbm8gbmFvIGZvaSBjYXJyZWdhZGEgY29ycmV0YW1lbnRlIVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgR0Euc2V0RXZlbnRzRXJyb3IoXCJFbnRpdGxlbWVudHMgbsOjbyBjYXJyZWdhZG9cIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmKHdpbmRvdy50aW55Q3B0LlBpYW5vLnV0aWwudGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzKCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG4gICAgICAgICAgICBsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB0aW55SW5pdCgpIHtcblx0VGlueS5zZXRQaWFubyhQaWFubyk7IFxuICAgIGNvbnN0IFN3ZyA9IG5ldyBTd2dNb2R1bGUoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IFN3Zy5pbml0KCk7XG5cdH1cblx0Y2F0Y2goZSkgeyBjb25zb2xlLmVycm9yKGUpIH1cblxuXHRwaWFub0luaXQoKTsgXG59O1xuXG50aW55SW5pdCgpOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==