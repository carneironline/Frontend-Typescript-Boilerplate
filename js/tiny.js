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
    window.glbPaywallInline = {
      cssLoaded: false
    };
    this.setTemplateSettings(function () {
      _this.createTemplate();
    });
    this.activeEvents();
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
      console.error('Paywall - Error on load', err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsLWlubGluZS9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLWdhLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2NwbnQtcGF5d2FsbC9QYXl3YWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsiRmIiLCJkYXRhIiwiZGVidWciLCJ3aW5kb3ciLCJ0aW55Q3B0IiwiZGlzYWJsZWQiLCJmYiIsImhhc1BpeGVsIiwicGl4ZWwiLCJuYW1lIiwiaXNEZWZpbmVkIiwiZmJxIiwiR0EiLCJnYSIsIlByb2R1Y3RzIiwiUHJvZHVjdHNNb2R1bGUiLCJkYXRhTGF5ZXIiLCJpc1Byb2R1Y3RWYWxvciIsIl9nYXEiLCJhY3Rpb24iLCJsYWJlbCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJIZWxwZXJzIiwicHJvcCIsImNfbmFtZSIsInZhbHVlIiwiZXhwaXJlZGF5cyIsImV4ZGF0ZSIsIkRhdGUiLCJob3N0bmFtZSIsImxvY2F0aW9uIiwic2V0RGF0ZSIsImdldERhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsImVzY2FwZSIsInRvVVRDU3RyaW5nIiwic3BsaXQiLCJyZXZlcnNlIiwibWF0Y2giLCJSZWdFeHAiLCJjb29raWVUaW55IiwidW5lc2NhcGUiLCJ0b1N0cmluZyIsIlBpYW5vIiwiY29udGVudCIsInNldEV4cGVyaWVuY2UiLCJleHBlcmllbmNlTmFtZSIsImV4cGVyaWVuY2UiLCJyZWdyYXNUaW55Iiwibm9tZUV4cGVyaWVuY2lhIiwic3Vic2VnbWVudGFjYW9QaWFubyIsInNldENvb2tpZSIsInZhcmlhdmVpcyIsImNvbnN0YW50ZSIsIlVUUCIsInByb2R1Y3ROYW1lIiwibm9tZVByb2R1dG9QaWFubyIsInByb2R1Y3RzU2V0dGluZ3MiLCJQcm9kdWN0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdHNJZCIsImlkIiwiU3dnIiwiU1dHIiwic3dnRW50aXRsZW1lbnRzIiwic3dnIiwibG9jYWxQcm9kdWN0UGlhbm8iLCJoYXNQcm9kdWN0SlNPTiIsInByb2R1Y3RKU09OIiwiZWxIZWFkIiwiaGVhZCIsInNldEdsb2JhbFNXRyIsImdsb2JhbCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsInV0bXNQcm9wcyIsImdsYlBheXdhbGwiLCJ1dG1zIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsInNldCIsInN1YnNjcmliZSIsInVybCIsImlzUHJvZHVjdGlvbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvZHVjdCIsImZpbHRlciIsInBpYW5vUHJvZHVjdE5hbWUiLCJvYmoiLCJwcm9wc1RvUmVtb3ZlIiwibmV3T2JqIiwiZWxlbWVudCIsImdldFByb2R1Y3QiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXJrdXBUZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3JjIiwidXJsUHJvZCIsInVybFN0ZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldE1hcmt1cCIsInNldFN3Z1NjcmlwdCIsInNldEFsZGViYXJhblNjcmlwdCIsInRlc3RTV0ciLCJUaW55IiwiaGFzUGF5d2FsbCIsInRwIiwiUGF5d2FsbEFuYWx5dGljcyIsInNldEdsb2JhbFRpbnkiLCJzZXRHbG9iYWwiLCJpbml0IiwiZGVmYXVsdFNldHRpbmdzIiwidGlueSIsInBheXdhbGwiLCJhbWJpZW50ZVV0aWxpemFkb1BpYW5vIiwiUGF5d2FsbENwdElubGluZSIsIlBpYW5vTW9kdWxlIiwiZG9tYWluIiwicGF5d2FsbElkIiwiZ2xiUGF5d2FsbElubGluZSIsImNzc0xvYWRlZCIsInNldFRlbXBsYXRlU2V0dGluZ3MiLCJjcmVhdGVUZW1wbGF0ZSIsImFjdGl2ZUV2ZW50cyIsImNhbGxiYWNrIiwidGVtcGxhdGVTZXR0aW5ncyIsInRpdGxlIiwic3VidGl0bGUiLCJidXR0b25UZXh0IiwiYnV0dG9uTGluayIsImxvZ2luUHJlVGV4dCIsImxvZ2luVGV4dCIsImxvZ2luTGluayIsIm9mZmVyTGluayIsImltYWdlTW9iaSIsImltYWdlRGVzayIsImltYWdlTGluayIsInRhcmdldFBvc3QiLCJhbmFsaXRpY29Qb3N0IiwicG9zdEJveCIsInF1ZXJ5U2VsZWN0b3IiLCJib2R5IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY3NzTWluaWZpZWQiLCJ0ZW1wbGF0ZSIsInJlbW92ZWRFbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJmaW5kIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmUiLCJ1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byIsInVyaSIsImhyZWYiLCJzZXJ2aWNlSWQiLCJnZXRTZXJ2aWNvSWQiLCJzdHIiLCJ1cmxSZXR1cm4iLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRDb2RpZ29Qcm9kdXRvIiwiZ2V0Tm9tZVByb2R1dG8iLCJ0ZW1wbGF0ZVZhcnMiLCJnZXRVcmxMb2dpblJlZ2lzdGVyIiwiUGF5d2FsbEdBTW9kdWxlIiwiR0FNb2R1bGUiLCJtZXRyaWNzIiwicGF5d2FsbFR5cGUiLCJfUGlhbm8iLCJzZXRFdmVudHMiLCJ2aWV3TmFtZSIsIlJUSUVYIiwicmVzZXRVdHAiLCJkYXRhc2V0IiwiZ2FSZXNldHV0cCIsImltYWdlVG9wIiwiZ2FJbWFnZVBvc2l0aW9uIiwiZ2FMYWJlbCIsImV2ZW50IiwiZXZlbnRvR0FDYXRlZ29yaWEiLCJldmVudG9HQUFjYW8iLCJnYUFjdGlvbiIsImV2ZW50b0dBUm90dWxvIiwiZXZlbnRvR0FWYWxvciIsImV2ZW50b0dBSW50ZXJhY2FvIiwic2V0RGF0YWxheWVyIiwidHlwZVBheXdhbGwiLCJQYXl3YWxsQ3B0IiwiU3dnTW9kdWxlIiwiRkIiLCJGYk1vZHVsZSIsIlBheXdhbGwiLCJhc3NldHNQYXRoIiwiZGlzcGxheSIsInByb2R1Y3RDbGFzcyIsInRhcmdldEJsYW5rIiwidG9wTW9iaSIsInRvcERlc2siLCJ0b3BMaW5rIiwibGVmdE1vYmkiLCJsZWZ0RGVzayIsImxlZnRMaW5rIiwicmlnaHRNb2JpIiwicmlnaHREZXNrIiwicmlnaHRMaW5rIiwiaGlkZUxvZ2luQXJlYSIsImxvZ2luVGFnIiwiY2xlYXJMb2dpbkFyZWEiLCJzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MiLCJlbEJvZHkiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZWxDcHQiLCJzZXRFbFdyYXBwZXIiLCJlbFRvUmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImJvZHlBZGp1c3QiLCJyZW1vdmVFbGVtZW50cyIsImFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXl3YWxsTG9hZCIsImVsQ3B0V3JhcCIsInNldFRpbWVvdXQiLCJlbEJvZHlIZWlnaHQiLCJpbm5lckhlaWdodCIsImVsQ3B0V3JhcEhlaWdodCIsIm9mZnNldEhlaWdodCIsImN1cnJlbnRUb3AiLCJNYXRoIiwiYWJzIiwidG9wV2l0aEZ1bGxFbGVtZW50IiwidG9wIiwib3BhY2l0eSIsInpJbmRleCIsImV2dFdoZWVsIiwiZXZ0VG91Y2giLCJzZXRQaXhlbFR5cGUiLCJjbGlja1RhcmdldHMiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzTG9naW4iLCJCb29sZWFuIiwiZ2V0QXR0cmlidXRlIiwiaXNVcmxTd2ciLCJpbmNsdWRlcyIsIm5vdEJsYW5rIiwiaHJlZlRhcmdldCIsInRyaWdnZXIiLCJzZXRVdG1zIiwib3BlbiIsImJpbmQiLCJuZXd0b3AiLCJzdGVwIiwibXVsdGlwbGllciIsImRlbHRhWSIsImVsVG9wIiwidG91Y2hzdGFydFkiLCJ0b3VjaGVuZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblkiLCJkaWZmIiwiZGVsYXlUaW1lciIsIlRpbnlNb2R1bGUiLCJzZXRHbG9iYWxWYXJzIiwiYW1iaWVudGVzQWNlaXRvcyIsInN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvIiwic3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkIiwiR0NPTSIsIkFNQklFTlRFIiwiU0FWRV9TVUJTQ1JJUFRJT04iLCJDUkVBVEVEX0dMT0JPSUQiLCJHTE9CT0lEX01FU1NBR0UiLCJtZXRyaWNhcyIsIkVWRU5UT19TRU1fQUNBTyIsIkVSUk8iLCJrcnV4IiwiU0VHTUVOVEFDT0VTIiwiS1JVWExJR0FETyIsInV0aWwiLCJJUCIsIkRFQlVHIiwiaXNDb250ZXVkb0V4Y2x1c2l2byIsImNvbnRldWRvRXhjbHVzaXZvIiwiZ2V0QW1iaWVudGVQaWFubyIsImluZGV4T2YiLCJnZXRWYWxvclBhcmFtZXRyb05hVXJsIiwiZ2V0Q29va2llIiwiZ2V0VGlwb0NvbnRldWRvUGlhbm8iLCJ0aXBvQ29udGV1ZG9QaWFubyIsImV4ZWN1dG91UGFnZXZpZXciLCJzZXRFdmVudHNFcnJvciIsImlzUmV2aXN0YSIsIm5vbWVQcm9kdXRvIiwiYXV0ZW50aWNhY2FvIiwiZGVmaW5lVXN1YXJpb1BpYW5vIiwiamFuZWxhQW5vbmltYSIsInJldHJ5IiwiaXNEb25lIiwibmV4dCIsImN1cnJlbnRfdHJpYWwiLCJtYXhfcmV0cnkiLCJpc190aW1lb3V0IiwiaXNJRTEwT3JMYXRlciIsInVzZXJfYWdlbnQiLCJ1YSIsImV4ZWMiLCJwYXJzZUludCIsImRldGVjdFByaXZhdGVNb2RlIiwiaXNfcHJpdmF0ZSIsIndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtIiwiVEVNUE9SQVJZIiwiZSIsImluZGV4ZWREQiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYiIsInJlYWR5U3RhdGUiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInRlbSIsImdldEl0ZW0iLCJsaWdhZG8iLCJwYXJhbWV0cm8iLCJ2YWxvclBhcmFtZXRybyIsIm9idGVtU2VnbWVudGFjYW8iLCJzZWdtZW50YWNvZXMiLCJpIiwicmVnaW9uYWxpemFjYW8iLCJnZXRSZWdpb24iLCJrcnV4R2VvIiwia2V5IiwiZW52aWFFdmVudG9zR0EiLCJfR0FBY2FvIiwiX0dBUm90dWxvIiwibW9udGFSb3R1bG9HQSIsInNldExpbWl0ZUNvbnRhZ2VtIiwiX0dBTGltaXRlIiwiX0dBQ29udGFnZW0iLCJ2aWV3cyIsIm1heFZpZXdzIiwiaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyIiwicmVncmFzIiwicGFzc2FnZW0iLCJmbHV4byIsImV4ZWN1dGFBcG9zUGFnZXZpZXciLCJleHBpcm91IiwidHBDb250ZXh0Iiwic2V0YVZhcmlhdmVpcyIsImlkTG9naW4iLCJ0aXBvTG9naW4iLCJhc3NpbmF0dXJhTG9nYWRhIiwiaWRMb2dpbkFzc2luYW50ZSIsInRpcG9Mb2dpbkFzc2luYW50ZSIsImJhbm5lciIsIm1vc3RyYXJGb290ZXIiLCJ2ZXJzYW8iLCJhZGljaW9uYXJDc3MiLCJtb250YVVybFN0ZyIsInhtbEh0dHBSZXF1ZXN0IiwiZ2VyYVNjcmlwdE5hUGFnaW5hIiwibW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlciIsIm1vc3RyYXJBdmF0YXJIZWFkZXIiLCJib3R0b21GaXhlZCIsInBhcmFtcyIsImdsYkJhbm5lckJvdHRvbSIsIm1vc3RyYXJTV0ciLCJjc3MiLCJzY3JpcHRKcyIsIm1vc3RyYXJIaWdobGlnaHRTYWxlIiwibW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yIiwicmVnaXN0ZXIiLCJtb3N0cmFyQmFycmVpcmEiLCJoZWxwZXIiLCJyZWRpcmVjaW9uYXJCYXJyZWlyYSIsInNob3ciLCJlcnJvciIsInRyaWdnZXJBZHZlcnRpc2luZyIsImFuYWx5dGljIiwiZXJyIiwiYW5hbHl0aWNhbFVuYmxvY2tlZEZvclBpYW5vIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYW5hbHl0aWNhbEJsb2NrZWRGb3JQaWFubyIsImNoZWNrRXhwZXJpZW5jZXNIYXNDaGFuZ2UiLCJfZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCIsImV2ZW50cyIsImV4cGVyaWVuY2VzIiwiZXhwZXJpZW5jZXNDbG9uZSIsImV4cGVyaWVuY2VzQ2hhbmdlZCIsImlzIiwiZXZlbnRUeXBlIiwiZXZlbnRQYXJhbXMiLCJzbmlwcGV0IiwiY2hlY2tQaWFub0FjdGl2ZSIsImNoZWNrUGF5d2FsbCIsIlBpYW5vUmVzdWx0RXZlbnRzIiwiaGFzUnVuSnNXaXRoUGF5d2FsbCIsInRyaWdnZXJQYXl3YWxsT3BlbmVkIiwicmVnaXN0ZXJQYXl3YWxsIiwidGlwbyIsInN0YXR1cyIsImNvbXVuaWNhZG8iLCJtb3N0cmFySW5mb3JtYWNhbyIsImFkYmxvY2siLCJtb3N0cmFyQWRCbG9jayIsImdsYkFkYmxvY2siLCJibG9xdWVpb3MiLCJsaWJlcmFyRXNjIiwiYmxvcXVlaWFWaWV3TW9kZSIsInBhcmNlaXJvIiwibW9zdHJhRm9vdGVyUGFyY2Vpcm8iLCJpbmFkaW1wbGVudGUiLCJnZXRMaW5rQXNzaW5hdHVyYSIsImxpbmsiLCJyZWwiLCJ1cmxTY3JpcHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb3N0YSIsInJlc3BvbnNlVGV4dCIsImFwcGVuZERlU2NyaXB0IiwiYXBwZW5kQ2hpbGQiLCJzdGF0dXNUZXh0IiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXNwSnNvbiIsInBhcnNlIiwic2l0dWFjYW9QYWdhbWVudG8iLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvIiwiZ2xiaWQiLCJjb2RpZ29Qcm9kdXRvIiwiY29uZmlndXJhY2FvIiwianNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzIiwidXJsVmVyaWZpY2FMZWl0b3IiLCJyZXNwb3N0YURlVGVybW9EZVVzbyIsInJlc3Bvc3RhRGVNb3Rpdm8iLCJtb3Rpdm8iLCJ0ZW1UZXJtb0RlVXNvIiwiaXNBdXRvcml6YWRvIiwiYXV0b3JpemFkbyIsIl9qc29uTGVpdG9yIiwidXN1YXJpb0lkIiwiYnRvYSIsImVuY29kZVVSSSIsImdvb2dsZSIsInNob3dTYXZlU3Vic2NyaXB0aW9uIiwic3dnU2VydmljZSIsIlN3Z1NlcnZpY2UiLCJzYXZlR2xvYm9TdWJzY3JpcHRpb24iLCJpc0F1dGhvcml6ZWQiLCJnZXRFbnRpdGxlbWVudEZvclNvdXJjZSIsInN1YnNjcmlwdGlvblRva2VuIiwiaXNTcGVjaWZpY0dvb2dsZVVzZXIiLCJvR2xvYm9CdXNpbmVzcyIsIk9HbG9ib0J1c2luZXNzIiwidmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZCIsImVudGl0bGVtZW50cyIsInJlc3BvbnNlIiwiZW5hYmxlc1RoaXMiLCJpc0xvZ2Fkb0NhZHVuIiwidXRwIiwidmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvIiwiX2xlaXRvciIsImRlY29kZVVSSSIsImF0b2IiLCJwcm9kdXRvIiwibG9nYWRvIiwidXVpZCIsInRlcm1vRGVVc28iLCJpc1NlY3Rpb24iLCJ0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMiLCJleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCIsImdldFdpbmRvd0xvY2F0aW9uU2VhcmNoIiwiY2hhdmVzQ2FtcGFuaGEiLCJ2YWxvcmVzQ2FtcGFuaGEiLCJpZHhQYXJhbUNhbXBhbmhhIiwiY2hhdmVDYW1wYW5oYSIsInJlZ2V4IiwidmFsb3JDYW1wYW5oYSIsImpvaW4iLCJjYW1wYW5oYSIsImlzT3JpZ2VtQnVzY2Fkb3IiLCJyZWdleFJvYm9zIiwiZWhSb2JvIiwidGVtUGFyYW1ldHJvTmFVcmwiLCJwYXJhbU5hbWUiLCJwYXJhbWV0cm9zIiwiaXNEZWJ1ZyIsImlzRG9taW5pb09HbG9ibyIsImdldFdpbmRvd0xvY2F0aW9uSHJlZiIsImNhbGxiYWNrTWV0ZXIiLCJtZXRlckRhdGEiLCJjYWxsYmFja01ldGVyRXhwaXJlZCIsImNzc1BhdGgiLCJpbnNlcnRCZWZvcmUiLCJsYXN0Q2hpbGQiLCJyZXZpc3RhcyIsInJlY2FycmVnYVBpYW5vIiwidGlwb0NvbnRldWRvIiwiaXNFeGNsdXNpdm8iLCJjb25zdHJ1dG9yIiwiaW5pdFRwIiwibG9hZFBpYW5vRXhwZXJpZW5jZXMiLCJjaGFuZ2VkIiwiaXNWYWxvciIsImlkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMiLCJpZFNhbmRib3hUaW55cGFzcyIsInNldFNhbmRCb3giLCJjbGVhbl91cmwiLCJhIiwiYXN5bmMiLCJ1cmxTYW5kYm94UGlhbm9SZXZpc3RhcyIsInVybFNhbmRib3hQaWFubyIsImIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBpYW5vSW5pdCIsInN1YnNjcmlwdGlvbnMiLCJzZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlIiwiZW50aXRsZW1lbnRzUHJvbWlzZSIsInRpbnlJbml0Iiwic2V0UGlhbm8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZTtBQUNYLFdBQVM7QUFDVCxnQkFBWSxPQURIO0FBRVQsVUFBTTtBQUZH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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0aW55LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAnZXBvY2EnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2Vwb2NhJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdhdXRvLWVzcG9ydGUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2F1dG8tZXNwb3J0ZScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAndm9ndWUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ3ZvZ3VlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdnbGFtb3VyJzoge1xuICAgICdjb2RfcHJvZCc6ICdnbGFtb3VyJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdjYXNhLXZvZ3VlJzoge1xuICAgICdjb2RfcHJvZCc6ICdjYXNhLXZvZ3VlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdtYXJpZS1jbGFpcmUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ21hcmllLWNsYWlyZScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnY2FzYS1lLWphcmRpbSc6IHtcbiAgICAnY29kX3Byb2QnOiAnY2FzYS1qYXJkaW0nLFxuICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAncXVlbS1hY29udGVjZSc6IHtcbiAgICAnY29kX3Byb2QnOiAncXVlbScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnZXBvY2EtbmVnb2Npb3MnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2Vwb2NhLW5lZ29jaW9zJyxcbiAgICAnaWQnOiAnMDAwMCdcbiAgICB9LFxuICAgICdnbG9iby1ydXJhbCc6IHtcbiAgICAnY29kX3Byb2QnOiAnZ2xvYm8tcnVyYWwnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ3BlZ24nOiB7XG4gICAgJ2NvZF9wcm9kJzogJ3BlcXVlbmFzLWVtcHJlc2FzJyxcbiAgICAnaWQnOiAnMDAwMCdcbiAgICB9LFxuICAgICdnYWxpbGV1Jzoge1xuICAgICdjb2RfcHJvZCc6ICdnYWxpbGV1JyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdjcmVzY2VyJzoge1xuICAgICdjb2RfcHJvZCc6ICdjcmVzY2VyJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdncSc6IHtcbiAgICAnY29kX3Byb2QnOiAnZ3EnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ21vbmV0Jzoge1xuICAgICdjb2RfcHJvZCc6ICdtb25ldCcsXG4gICAgJ2lkJzogJzY2MTgnXG4gICAgfSxcbiAgICAnb2dsb2JvJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdibG9ncyc6IHtcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXG4gICAgJ2lkJzogJzM5ODEnXG4gICAgfSxcbiAgICAna29ndXQnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ09HMDMnLFxuICAgICdpZCc6ICczOTgxJ1xuICAgIH0sXG4gICAgJ2FjZXJ2byc6IHtcbiAgICAnY29kX3Byb2QnOiAnT0cwNCcsXG4gICAgJ2lkJzogJzM5ODEnXG4gICAgfSxcbiAgICAnam9ybmFsZGlnaXRhbCc6IHtcbiAgICAnY29kX3Byb2QnOiAnT0cwMScsXG4gICAgJ2lkJzogJzM5ODEnXG4gICAgfSxcbiAgICAndmFsb3InOiB7XG4gICAgJ2NvZF9wcm9kJzogJ3ZhbG9yZGlnaXRhbCcsXG4gICAgJ2lkJzogJzY2NjgnXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZiIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhID0gbnVsbCkge1xuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmIgPSBkYXRhO1xuICAgIH1cblxuICAgIGdldCBpc0RlZmluZWQoKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIGZicSAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHNldFBpeGVsVHlwZSgpIHtcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBoYXNQaXhlbCA9ICh0eXBlb2YgdGhpcy5mYi5waXhlbC5uYW1lICE9PSAndW5kZWZpbmVkJykgPyB0aGlzLmZiLnBpeGVsLm5hbWUgOiBudWxsOyBcblxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZCAmJiBoYXNQaXhlbCl7XG4gICAgICAgICAgICBmYnEoJ2luaXQnLCAnNDEwMjcwMDM5NTIwNjM0Jyk7XG4gICAgICAgICAgICBmYnEoJ3RyYWNrU2luZ2xlJywgJzQxMDI3MDAzOTUyMDYzNCcsIHRoaXMuZmIucGl4ZWwubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdBICB7XG5cdGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhO1xuICAgICAgICB0aGlzLlByb2R1Y3RzID0gbmV3IFByb2R1Y3RzTW9kdWxlKCk7XG4gICAgfVxuICAgIFxuICAgIHNldEdsb2JhbFZhcnMoKSB7XG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyICB8fCBbXTsgXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yICYmIHR5cGVvZiBfZ2FxID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgIHx8IFtdOyAgXG4gICAgfVxuXG4gICAgc2V0RXZlbnRzKGFjdGlvbiwgbGFiZWwsIGNhdGVnb3J5ID0gJ1BpYW5vJykge1xuXG5cdFx0aWYod2luZG93LnRpbnlDcHQuZGVidWcuZ2EpXG5cdFx0XHRjb25zb2xlLmxvZygnbG9nLWdhLWV2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpXG5cbiAgICAgICAgaWYgKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IpXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCAsdHJ1ZV0pO1xuXHRcdFxuXHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6IGNhdGVnb3J5LCAnZXZlbnRvR0FBY2FvJzogYWN0aW9uLCAnZXZlbnRvR0FSb3R1bG8nOmxhYmVsfSk7XG4gICAgfVxuICAgIFxuICAgIHNldEV2ZW50c0Vycm9yKGFjdGlvbiwgbGFiZWwpIHtcblx0XHRpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ1BpYW5vIEVycm8nLCBhY3Rpb24sIGxhYmVsLCAsdHJ1ZV0pO1xuXG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vIEVycm8nLCAnZXZlbnRvR0FBY2FvJzogYWN0aW9uLCAnZXZlbnRvR0FSb3R1bG8nOmxhYmVsfSk7XG5cdH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xuXG4gICAgc3RhdGljIGlzRGVmaW5lZChwcm9wKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHByb3AgIT09ICd1bmRlZmluZWQnKSA/IHRydWU6IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRDb29raWUoY19uYW1lLCB2YWx1ZSwgZXhwaXJlZGF5cyA9IG51bGwpIHtcbiAgICAgICAgbGV0IGV4ZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lID8gbG9jYXRpb24uaG9zdG5hbWUgOiBudWxsO1xuXG4gICAgICAgIGlmKCFob3N0bmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGV4ZGF0ZS5zZXREYXRlKGV4ZGF0ZS5nZXREYXRlKCkgKyBleHBpcmVkYXlzKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY19uYW1lICsgXCI9XCIgK2VzY2FwZSh2YWx1ZSkgKyAoKGV4cGlyZWRheXMpID8gXCJcIiA6IFwiO2V4cGlyZXM9XCIgKyBleGRhdGUudG9VVENTdHJpbmcoKSlcbiAgICAgICAgKyBcIjsgcGF0aD0vO1wiICsgXCJkb21haW49LlwiICsgaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClbMV0gKyBcIi5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzBdO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDb29raWUobmFtZSkge1xuICAgICAgICBsZXQgbWF0Y2ggPSAoZG9jdW1lbnQuY29va2llKSA/IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKG5hbWUrJz0oW147XSspJykpIDogZmFsc2U7XG4gICAgICAgIGxldCBjb29raWVUaW55ID0gbWF0Y2ggPyB1bmVzY2FwZShtYXRjaFsxXS50b1N0cmluZygpKSA6IFwiXCI7XG4gICAgICAgIHJldHVybiBjb29raWVUaW55O1xuICAgIH1cbiAgICAgICAgXG5cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWFubyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1ZzsgXG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0RXhwZXJpZW5jZSgpO1xuICAgIH1cblxuICAgIGdldCBpc0RlZmluZWQoKSB7XG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cudGlueUNwdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vICE9PSAndW5kZWZpbmVkJykgeyBcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHdpbmRvdy50aW55Q3B0LlBpYW5vO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNldEV4cGVyaWVuY2UoKSB7ICBcbiAgICAgICAgbGV0IGV4cGVyaWVuY2VOYW1lID0gJyc7ICAgXG4gICAgICAgIHdpbmRvdy5QaWFuby5leHBlcmllbmNlID0ge307ICBcbiAgICAgICAgIFxuXHRcdGlmKHdpbmRvdy5yZWdyYXNUaW55ICYmIHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSlcblx0XHRcdGV4cGVyaWVuY2VOYW1lID0gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyBgJHtyZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiByZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYTtcbiAgICAgICAgXG4gICAgICAgIGlmICh3aW5kb3cubm9tZUV4cGVyaWVuY2lhKSBcblx0XHRcdGV4cGVyaWVuY2VOYW1lID0gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyBgJHt3aW5kb3cubm9tZUV4cGVyaWVuY2lhfSAtICR7d2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm99YCA6IHdpbmRvdy5ub21lRXhwZXJpZW5jaWE7XG4gICAgICAgXG4gICAgICAgIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUgPSBleHBlcmllbmNlTmFtZTtcblx0fVxuXG4gICAgcmVzZXRVdHAoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNEZWZpbmVkKVxuICAgICAgICAgICAgSGVscGVycy5zZXRDb29raWUodGhpcy5jb250ZW50LnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgJycsIC0xKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgcHJvZHVjdHNJZCBmcm9tICcuLi9tb2Nrcy9wcm9kdWN0cy9wcm9kdWN0cy1pZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzICB7XG5cdGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgdGhpcy5wcm9kdWN0TmFtZSA9ICh0eXBlb2Ygd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vIDogbnVsbDtcbiAgICB9XG5cbiAgICBzZXRHbG9iYWwoKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBQcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9kdWN0TmFtZSxcbiAgICAgICAgICAgICAgICAvLyBpZDogdGhpcy5wcm9kdWN0SWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy50aW55Q3B0ID0gKHdpbmRvdy50aW55Q3B0KSA/ICBPYmplY3QuYXNzaWduKHByb2R1Y3RzU2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IHByb2R1Y3RzU2V0dGluZ3M7IFxuICAgIH1cbiAgICBcbiAgICBnZXQgaXNQcm9kdWN0VmFsb3IoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5wcm9kdWN0TmFtZSAmJiB0aGlzLnByb2R1Y3ROYW1lID09PSAndmFsb3InKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvZHVjdElkKCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICggKHR5cGVvZiBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdICE9PSAgJ3VuZGVmaW5lZCcpIFxuICAgICAgICAmJiAodHlwZW9mIHByb2R1Y3RzSWRbdGhpcy5wcm9kdWN0TmFtZV0uaWQgIT09ICAndW5kZWZpbmVkJykgKVxuICAgICAgICA/IHByb2R1Y3RzSWRbdGhpcy5wcm9kdWN0TmFtZV0uaWQgOiBudWxsO1xuICAgICAgICBcbiAgICB9XG5cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgd2luZG93LlNXRyA9IHdpbmRvdy5TV0cgfHwgW107IC8vVE9ETzogVW5kZXJzdGFuZCB3aHkgdGhpcyB2YXJpYWJsZSBleGlzdHNcbiAgICAgICAgd2luZG93LnN3Z0VudGl0bGVtZW50cyA9IHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IChIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpID8gd2luZG93LnRpbnlDcHQuZGVidWcuc3dnIDogZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2NhbFByb2R1Y3RQaWFubyA9ICh0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gbm9tZVByb2R1dG9QaWFubyA6IG51bGw7XG4gICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0SlNPTiA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxIZWFkID0gZG9jdW1lbnQuaGVhZDsgXG5cbiAgICAgICAgdGhpcy5zZXRHbG9iYWxTV0coKTtcbiAgICB9XG5cbiAgICBnZXQgaXNEZWZpbmVkKCkgeyBcbiAgICAgICAgcmV0dXJuICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSA/IHRydWUgOiBmYWxzZTsgXG4gICAgfVxuXG4gICAgc2V0R2xvYmFsU1dHKCkge1xuICAgICAgICBpZighSGVscGVycy5pc0RlZmluZWQod2luZG93LnRpbnlDcHQpKSByZXR1cm47XG5cbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnID0ge1xuICAgICAgICAgICAgZ2xvYmFsOiAodHlwZW9mIHN3ZyAhPT0gJ3VuZGVmaW5lZCcpID8gc3dnIDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldFV0bXMoKSB7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICAgIGNvbnN0IHV0bXNQcm9wcyA9ICh0eXBlb2Ygd2luZG93LmdsYlBheXdhbGwuc3dnICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdy5nbGJQYXl3YWxsLnN3Zy51dG1zIDogbnVsbDsgXG5cbiAgICAgICAgdXRtc1Byb3BzLmZvckVhY2goKGl0ZW0pID0+IHsgXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIHVybFBhcmFtcy5zZXQoYHV0bV8ke25hbWV9YCwgdmFsdWUpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZykgeyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kJywgJ3NldFV0bXMnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIHV0bXNQcm9wcylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kLXNldFV0bXMnLCBsb2NhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5pc0RlZmluZWQpIHx8ICF1dG1zUHJvcHMgKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsLnN1YnNjcmliZSgnYnIuY29tLmluZm9nbG9iby5vZ2xvYm8uc3dnLmdvb2dsZScpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gIFxuICAgICAgICA/ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF83YjBhNmRmNDk4OTU0NTlmYmFmZTQ5YTk2ZmNiNWJiZi9zd2cvcHJvZC9wcm9kdWN0cy5qc29uJyBcbiAgICAgICAgOiAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfN2IwYTZkZjQ5ODk1NDU5ZmJhZmU0OWE5NmZjYjViYmYvc3dnL2Rldi9wcm9kdWN0cy5qc29uJztcblxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0KCkgeyBcbiAgICAgICAgaWYoIXRoaXMubG9jYWxQcm9kdWN0UGlhbm8pIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgdGhpcy5nZXRQcm9kdWN0cygpO1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5waWFub1Byb2R1Y3ROYW1lID09PSB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vIClbMF07XG4gICAgICAgIHJldHVybiBwcm9kdWN0IHx8IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlUHJvcGVydGllcyhvYmopIHsgXG4gICAgICAgIGNvbnN0IHByb3BzVG9SZW1vdmUgPSBbJ3Byb2R1Y3ROYW1lJywgJ3BpYW5vUHJvZHVjdE5hbWUnXTtcbiAgICAgICAgY29uc3QgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcblxuICAgICAgICBwcm9wc1RvUmVtb3ZlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBkZWxldGUgbmV3T2JqW2VsZW1lbnRdO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIGFzeW5jIG1hcmt1cFRlbXBsYXRlKCkgeyBcbiAgICAgICAgY29uc3QgcHJvZHVjdEpTT04gPSAgYXdhaXQgdGhpcy5yZW1vdmVQcm9wZXJ0aWVzKGF3YWl0IHRoaXMuZ2V0UHJvZHVjdCgpKSB8fCBudWxsOyBcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IE9iamVjdC5rZXlzKHByb2R1Y3RKU09OKS5sZW5ndGggPyBKU09OLnN0cmluZ2lmeShwcm9kdWN0SlNPTikgOiBudWxsO1xuXG4gICAgICAgIGlmKCFwcm9kdWN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhc1Byb2R1Y3RKU09OID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYodGhpcy5kZWJ1ZylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7J2xvZy1TV0ctUHJvZHVjdCc6IHByb2R1Y3R9KTtcblxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SlNPTiA9IGAkeyBwcm9kdWN0IH1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0TWFya3VwKCkgeyBcbiAgICAgICAgYXdhaXQgdGhpcy5tYXJrdXBUZW1wbGF0ZSgpO1xuICAgICAgICBpZighdGhpcy5wcm9kdWN0SlNPTikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgIFxuICAgICAgICBlbGVtZW50LnR5cGUgPSAnYXBwbGljYXRpb24vbGQranNvbic7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5wcm9kdWN0SlNPTjtcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzZXRTd2dTY3JpcHQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgZWxlbWVudC5zcmMgPSAnaHR0cHM6Ly9uZXdzLmdvb2dsZS5jb20vc3dnL2pzL3YxL3N3Zy5qcyc7XG4gICAgICAgIHRoaXMuZWxIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgc2V0QWxkZWJhcmFuU2NyaXB0KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IHVybFByb2QgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYzEwYWU4MTljNTY4NDYwYmI0ZWMxN2MwYThlYzUyNjcvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XG4gICAgICAgIGNvbnN0IHVybFN0ZyA9ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF9hZGRjNWU4ZjMxNmY0OGVhOTE4MWFmMzcxNjBiMjJiNC9hbGRlYmFyYW4vanMvYnVuZGxlLmpzJztcblxuICAgICAgICBlbGVtZW50LnNyYyA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/IHVybFByb2QgOiB1cmxTdGc7XG4gICAgICAgIHRoaXMuZWxIZWFkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGVzdFNXRygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwOyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zd2cpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCA9IHdpbmRvdy5zd2c7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUod2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT09IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnVGhlcmUgaXNuXFwndCB3aW5kb3cuc3dnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgaWYoIXRoaXMubG9jYWxQcm9kdWN0UGlhbm8pIHJldHVybjtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRNYXJrdXAoKTsgIFxuICAgICAgICAgXG4gICAgICAgIGlmKCF0aGlzLmhhc1Byb2R1Y3RKU09OKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB0aGlzLnNldFN3Z1NjcmlwdCgpOyBcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRBbGRlYmFyYW5TY3JpcHQoKTsgICBcbiAgICAgICAgYXdhaXQgdGhpcy50ZXN0U1dHKCk7ICAgICAgIFxuICAgIH1cbn1cbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbnkgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLlByb2R1Y3RzID0gbmV3IFByb2R1Y3RzTW9kdWxlKCk7XG4gICAgICAgIHdpbmRvdy5oYXNQYXl3YWxsID0gd2luZG93Lmhhc1BheXdhbGwgfHwgbnVsbDtcbiAgICAgICAgd2luZG93LnRwID0gd2luZG93LnRwIHx8IFtdO1xuICAgICAgICB3aW5kb3cuUGlhbm8gPSB3aW5kb3cuUGlhbm8gfHwge307XG4gICAgICAgIHdpbmRvdy5QYXl3YWxsQW5hbHl0aWNzID0gd2luZG93LlBheXdhbGxBbmFseXRpY3MgfHwge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldEdsb2JhbFRpbnkoKTtcbiAgICAgICAgdGhpcy5Qcm9kdWN0cy5zZXRHbG9iYWwoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgc2V0R2xvYmFsVGlueSgpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgICAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgICAgICB0aW55OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXl3YWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzd2c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGdhOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzUHJvZHVjdGlvbjogKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09PSAncHJkJykgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy50aW55Q3B0ID0gKHdpbmRvdy50aW55Q3B0KSA/ICBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgd2luZG93LnRpbnlDcHQpIDogZGVmYXVsdFNldHRpbmdzOyBcbiAgICB9XG4gICAgXG4gICAgc2V0UGlhbm8ob2JqKSB7XG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vID0gb2JqO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgfVxuXG59IiwiaW1wb3J0IFBpYW5vTW9kdWxlIGZyb20gJy4uL1BpYW5vJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbENwdElubGluZSAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG5cdFx0dGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xuXG5cdFx0dGhpcy5kb21haW4gPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJztcdFxuXHRcdHRoaXMucGF5d2FsbElkID0gJ3BheXdhbGwtaW5saW5lJ1xuXG5cdFx0d2luZG93LmdsYlBheXdhbGxJbmxpbmUgPSB7XG5cdFx0XHRjc3NMb2FkZWQ6IGZhbHNlXG5cdFx0fTtcblxuXHRcdHRoaXMuc2V0VGVtcGxhdGVTZXR0aW5ncygoKSA9PiB7XG5cdFx0XHR0aGlzLmNyZWF0ZVRlbXBsYXRlKClcblx0XHR9KTtcblx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpXG5cdH1cblxuXHRzZXRUZW1wbGF0ZVNldHRpbmdzKGNhbGxiYWNrKSB7XG5cdFx0bGV0IHRlbXBsYXRlU2V0dGluZ3MgPSB7XG5cdFx0XHR0aXRsZTogJ1BhcmEgY29udGludWFyIHN1YSBsZWl0dXJhLCDDqSBwcmVjaXNvIHNlIGNhZGFzdHJhci4nLFxuXHRcdFx0c3VidGl0bGU6ICfDiSByw6FwaWRvIGUgZ3LDoXRpcyEnLFxuXHRcdFx0YnV0dG9uVGV4dDogJ0NhZGFzdHJlLXNlIGdyYXR1aXRhbWVudGUgYWdvcmEnLFxuXHRcdFx0YnV0dG9uTGluazogJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMScsXG5cdFx0XHRsb2dpblByZVRleHQ6ICdKw6EgcG9zc3VpIGNhZGFzdHJvPyAnLFxuXHRcdFx0bG9naW5UZXh0OiAnRmHDp2EgbG9naW4nLFxuXHRcdFx0bG9naW5MaW5rOiB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJywgXG5cdFx0XHRvZmZlckxpbms6IFwiaHR0cHM6Ly9nb29nbGUuY29tP2wxXCIsXG5cdFx0XHRpbWFnZU1vYmk6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTBcIixcblx0XHRcdGltYWdlRGVzazogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODA0eDEyOFwiLFxuXHRcdFx0aW1hZ2VMaW5rOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTUwXCJcblx0XHR9O1xuXG5cdFx0d2luZG93LmdsYlBheXdhbGxJbmxpbmUgPSAod2luZG93LmdsYlBheXdhbGxJbmxpbmUpID8gIE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlU2V0dGluZ3MsIHdpbmRvdy5nbGJQYXl3YWxsSW5saW5lKSA6IHRlbXBsYXRlU2V0dGluZ3M7IFxuXG5cdFx0Y2FsbGJhY2soKTtcblx0fVxuXG4gICAgYWN0aXZlRXZlbnRzKCkge1xuXHRcdGNvbnN0IHRhcmdldFBvc3QgPSB3aW5kb3cuYW5hbGl0aWNvUG9zdDtcblxuXHRcdGlmKCF0YXJnZXRQb3N0KSByZXR1cm4gbnVsbFxuXG5cdFx0Y29uc3QgcG9zdEJveCA9IHRhcmdldFBvc3QucXVlcnlTZWxlY3RvcihcIi5idG4tcmVhZC1tb3JlXCIpO1xuXG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZShwb3N0Qm94KVxuXHR9XG5cbiAgXHRjcmVhdGVUZW1wbGF0ZShlbGVtZW50KSB7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmKCF3aW5kb3cuZ2xiUGF5d2FsbElubGluZS5jc3NMb2FkZWQpIHtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHRcdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbElubGluZS5jc3NMb2FkZWQgPSB0cnVlXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMudGVtcGxhdGUpOyBcblx0XHRcdGNvbnN0IHJlbW92ZWRFbGVtZW50ID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ290aGVyLWNvbnRlbnQnKVxuXHRcdFx0XG5cdFx0XHRpZihyZW1vdmVkRWxlbWVudClcblx0XHRcdFx0cmVtb3ZlZEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZW1vdmVkRWxlbWVudClcblxuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKVxuXHRcdH1cblx0ICB9XG5cdCAgXG5cdGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XG5cdFx0Y29uc3QgdXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gPSB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcgPyAnaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCcgOiAnaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCc7XG5cdFx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcblx0XHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcblx0XHRsZXQgc3RyID0gJyc7XG5cdFx0bGV0IHVybFJldHVybiA9ICcnO1xuXHRcblx0XHRpZighdGhpcy5kZWJ1ZyAmJiB0aGlzLlBpYW5vLmlzRGVmaW5lZCkge1xuXHRcdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxuXHRcdFx0XHQrICcmc2VydmljZUlkPScgKyBzZXJ2aWNlSWRcblx0XHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xuXHRcdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxuXHRcdFx0XHQrICcmdXJsUmV0b3Jubz0nICsgdXJpXG5cdFx0XHQpO1xuXHRcblx0XHRcdGlmKHR5cGUgPT09ICdidXR0b24nKSB7XG5cdFx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWNhZGFzdHJvLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHRcdHJldHVybiBzdHI7XG5cdH1cblxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xuXHRyZXR1cm4gd2luZG93LmdsYlBheXdhbGxJbmxpbmU7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7IFxuXHRjb25zdCB0ZW1wbGF0ZSA9IGBcblx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc3xSYWxld2F5JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lXCIgaWQ9JHt0aGlzLnBheXdhbGxJZH0+IFxuXHRcdFx0PGgxIGNsYXNzID1cInBheXdhbGwtY3B0LWlubGluZS10aXRsZVwiPjxzcGFuIGNsYXNzPXBheXdhbGwtY3B0LWlubGluZS10aXRsZS1maXJzdF9saW5lPiR7dGhpcy50ZW1wbGF0ZVZhcnMudGl0bGV9PC9zcGFuPjxicj48c3BhbiBjbGFzcz1wYXl3YWxsLWNwdC1pbmxpbmUtdGl0bGUtc2Vjb25kX2xpbmU+JHt0aGlzLnRlbXBsYXRlVmFycy5zdWJ0aXRsZX08L3NwYW4+PC9oMT5cblx0XHRcdDxhIGhyZWY9JHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoJ2J1dHRvbicpfT5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1idXR0b25cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1zcGFuXCI+JHt0aGlzLnRlbXBsYXRlVmFycy5idXR0b25UZXh0fTwvc3Bhbj5cblx0XHRcdFx0PC9idXR0b24+IFxuXHRcdFx0PC9hPlxuXHRcdFx0PHAgY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtcFwiPiR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5QcmVUZXh0fTxhIGhyZWY9JHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoKX0gY2xhc3M9XCJwYXl3YWxsLWNwdC1pbmxpbmUtYVwiPiR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5UZXh0fTwvYT48L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtaW5saW5lLW9mZmVyXCI+XG5cdFx0XHQ8YSBocmVmPSR7dGhpcy50ZW1wbGF0ZVZhcnMub2ZmZXJMaW5rfT5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9JHt0aGlzLnRlbXBsYXRlVmFycy5pbWFnZU1vYml9IG1lZGlhPVwiKG1heC13aWR0aDogMzc1cHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9JHt0aGlzLnRlbXBsYXRlVmFycy5pbWFnZURlc2t9IG1lZGlhPVwiKG1pbi13aWR0aDogMzc0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cInBheXdhbGwtY3B0LWlubGluZS1pbWdcIiBzcmM9JHt0aGlzLnRlbXBsYXRlVmFycy5pbWFnZUxpbmt9IC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YDtcblxuXHRyZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBnZXQgY3NzTWluaWZpZWQoKSB7XG5cdCAgcmV0dXJuIGBcblx0ICA8c3R5bGU+XG5cdCAgLnBheXdhbGwtY3B0LWlubGluZXttYXJnaW46IDAgYXV0byA0MHB4O3BhZGRpbmc6MjBweDtib3JkZXItcmFkaXVzOiA0cHg7Ym9yZGVyOiBzb2xpZCAxcHggI2RiZGRlMTtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY1O30ucGF5d2FsbC1jcHQtaW5saW5lLXRpdGxle21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87IG1hcmdpbi1ib3R0b206MzBweDtkaXNwbGF5OmJsb2NrO2ZvbnQtZmFtaWx5OlJhbGV3YXk7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6MS4yO2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojMzI1ZTk0fVxuXHQgIC5wYXl3YWxsLWNwdC1pbmxpbmUtYnV0dG9ue21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWJvdHRvbTozMHB4O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MjU2cHg7aGVpZ2h0OjQ4cHg7YmFja2dyb3VuZC1jb2xvcjojZjU5YzAwO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjpzb2xpZCAzcHggI2Y1OWMwMDt9XG5cdCAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI0cHgpIHtcblx0XHQucGF5d2FsbC1jcHQtaW5saW5lLWJ1dHRvbiB7IHdpZHRoOiAzNTZweDsgfVxuXHQgfSAgXG5cdCAucGF5d2FsbC1jcHQtaW5saW5lLWltZyB7bWFyZ2luOiBhdXRvO3dpZHRoOiA4MGVtO30ucGF5d2FsbC1jcHQtaW5saW5lLXNwYW4ge2ZvbnQtZmFtaWx5Ok9wZW4gU2Fucztmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjM4O2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmO30ucGF5d2FsbC1jcHQtaW5saW5lLXB7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tYm90dG9uOjMwcHg7ZGlzcGxheTpibG9jaztmb250LWZhbWlseTpSYWxld2F5O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuMTQ7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM3MDcwNzA7fS5wYXl3YWxsLWNwdC1pbmxpbmUtYXtmb250LXdlaWdodDo3MDA7Y29sb3I6IzMyNWU5NDt9LnBheXdhbGwtY3B0LWlubGluZS1vZmZlcnttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO2JhY2tncm91bmQtY29sb3I6I2ZmZjt9IFxuXHQgIDwvc3R5bGU+YFxuICB9XG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vSGVscGVycyc7XG5pbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4uL0dBJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbEdBTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xuICAgIHRoaXMuR0EgPSBuZXcgR0FNb2R1bGUoKTtcblxuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1ldHJpY3MgPSB7XG4gICAgICAgIHBheXdhbGw6IHt9LFxuICAgICAgICBmYjoge1xuICAgICAgICAgICAgcGl4ZWw6IHt9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5wYXl3YWxsVHlwZSgpO1xuICB9XG5cbiAgcGF5d2FsbExvYWQoKSB7XG4gICAgaWYoIXRoaXMuUGlhbm8uaXNEZWZpbmVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3QgX1BpYW5vID0gdGhpcy5QaWFuby5jb250ZW50O1xuXG4gICAgdGhpcy5HQS5zZXRFdmVudHModGhpcy5tZXRyaWNzLnBheXdhbGwudmlld05hbWUsIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUpO1xuICAgIEhlbHBlcnMuc2V0Q29va2llKF9QaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG4gIH1cblxuICB0cmlnZ2VyKGVsZW1lbnQpIHtcbiAgICBpZih0aGlzLmRpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzZXRVdHAgPSBlbGVtZW50LmRhdGFzZXQuZ2FSZXNldHV0cCB8fCBudWxsO1xuICAgIGNvbnN0IGltYWdlVG9wID0gZWxlbWVudC5kYXRhc2V0LmdhSW1hZ2VQb3NpdGlvbjtcbiAgICBjb25zdCBsYWJlbCA9IChpbWFnZVRvcCA9PT0gJ3RvcCcpID8gZWxlbWVudC5kYXRhc2V0LmdhTGFiZWwgKyB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA6IGVsZW1lbnQuZGF0YXNldC5nYUxhYmVsO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGV2ZW50OiAnRXZlbnRvR0EnLFxuICAgICAgZXZlbnRvR0FDYXRlZ29yaWE6IHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUsXG4gICAgICBldmVudG9HQUFjYW86IGVsZW1lbnQuZGF0YXNldC5nYUFjdGlvbiB8fCBhY3Rpb24sXG4gICAgICBldmVudG9HQVJvdHVsbzogbGFiZWwsXG4gICAgICBldmVudG9HQVZhbG9yOiAwLFxuICAgICAgZXZlbnRvR0FJbnRlcmFjYW86IGZhbHNlLFxuICAgIH07XG5cbiAgICBpZiAocmVzZXRVdHApXG4gICAgICAgIHRoaXMuUGlhbm8ucmVzZXRVdHAoKTtcblxuICAgIHRoaXMuc2V0RGF0YWxheWVyKGRhdGEpO1xuICB9XG5cbiAgcGF5d2FsbFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9ICggKHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsICE9PSAndW5kZWZpbmVkJykgJiYgd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwpXG4gICAgICA/IHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsLnRvTG93ZXJDYXNlKClcbiAgICAgIDogJ3BheXdhbGwnO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLnZpZXdOYW1lID0gJ0V4aWJpY2FvIFJlZ2lzdGVyJ1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ1JlZ2lzdGVyIGNvbXVtJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQ2FkYXN0cmUtc2UnO1xuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3UmVnaXN0ZXJXYWxsJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdleGNsdXNpdm8nOlxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC52aWV3TmFtZSA9ICdFeGliaWNhbyBSZWdpc3RlcidcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBleGNsdXNpdm8nO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xuICAgICAgICB0aGlzLm1ldHJpY3MuZmIucGl4ZWwubmFtZSA9ICdWaWV3TG9naW5FeGNsdXNpdm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BheXdhbGwnOlxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC52aWV3TmFtZSA9ICdCYXJyZWlyYSdcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdCYXJyZWlyYSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0Fzc2luZSBhZ29yYSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdQYXl3YWxsRXhjbHVzaXZvJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0RGF0YWxheWVyKGRhdGEgPSB7fSkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgIGRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFBpYW5vTW9kdWxlIGZyb20gJy4uL1BpYW5vJztcbmltcG9ydCBQYXl3YWxsR0FNb2R1bGUgZnJvbSAnLi9QYXl3YWxsLWdhJztcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi4vU3dnJztcbmltcG9ydCBGYk1vZHVsZSBmcm9tICcuLi9GQic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheXdhbGxDcHQgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuXHR0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XG5cdHRoaXMuR0EgPSBuZXcgUGF5d2FsbEdBTW9kdWxlKCk7XG5cdHRoaXMuU1dHID0gbmV3IFN3Z01vZHVsZSgpO1xuXHR0aGlzLkZCID0gbmV3IEZiTW9kdWxlKHRoaXMuR0EubWV0cmljcy5mYik7XG5cblx0dGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnLnBheXdhbGw7XG5cdHRoaXMuZG9tYWluID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLyc7XHRcblx0dGhpcy5zZXRUZW1wbGF0ZVNldHRpbmdzKCgpID0+IHtcblx0XHR0aGlzLmluaXQoKTsgXG5cdH0pO1xuXG5cdHdpbmRvdy5QYXl3YWxsQ3B0ID0gdGhpcztcblxuXHR3aW5kb3cudGlueUNwdC5QYXl3YWxsID0ge1xuXHRcdGRvbWFpbjogdGhpcy5kb21haW4sXG5cdFx0R0E6IHRoaXMuR0EubWV0cmljcyxcblx0fTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlU2V0dGluZ3MoY2FsbGJhY2spIHtcblx0XHRsZXQgdGVtcGxhdGVTZXR0aW5ncyA9IHtcblx0XHRcdHRlbXBsYXRlOiAnZGVmYXVsdCcsXG5cdFx0XHRhc3NldHNQYXRoOiAnJyxcblx0XHRcdGRpc3BsYXk6IG51bGwsXG5cdFx0XHRwcm9kdWN0Q2xhc3M6IHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyA/IGBwYXl3YWxsLWNwdC0ke25vbWVQcm9kdXRvUGlhbm99YCA6ICdwYXl3YWxsLWNwdC1vZ2xvYm8nLFxuXHRcdFx0dGl0bGU6ICdFc3NlIGNvbnRlw7pkbyDDqSBvIHTDrXR1bG8uJyxcblx0XHRcdHRhcmdldEJsYW5rOiB0cnVlLFxuXHRcdFx0dG9wTW9iaTogJycsXG5cdFx0XHR0b3BEZXNrOiAnJyxcblx0XHRcdHRvcExpbms6ICcnLFxuXHRcdFx0bGVmdE1vYmk6ICcnLFxuXHRcdFx0bGVmdERlc2s6ICcnLFxuXHRcdFx0bGVmdExpbms6ICcnLFxuXHRcdFx0cmlnaHRNb2JpOiAnJyxcblx0XHRcdHJpZ2h0RGVzazogJycsXG5cdFx0XHRyaWdodExpbms6ICcnXG5cdFx0fTtcblxuXHRcdHRlbXBsYXRlU2V0dGluZ3MuaGlkZUxvZ2luQXJlYSA9IGZhbHNlO1xuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5UZXh0ID0gJ0Zhw6dhIGxvZ2luJztcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmxvZ2luUHJlVGV4dCA9ICdKw6EgcG9zc3VpIGNhZGFzdHJvPyc7XG5cdFx0XG5cdFx0d2luZG93LmdsYlBheXdhbGwgPSAod2luZG93LmdsYlBheXdhbGwpID8gIE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlU2V0dGluZ3MsIHdpbmRvdy5nbGJQYXl3YWxsKSA6IHRlbXBsYXRlU2V0dGluZ3M7IFxuXHRcdHdpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGFnID0gYCR7d2luZG93LmdsYlBheXdhbGwubG9naW5QcmVUZXh0fSA8YSBocmVmPVwiJHt0aGlzLmdldFVybExvZ2luUmVnaXN0ZXIoKX1cIiBkYXRhLWlzLWxvZ2luPVwidHJ1ZVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayAyIC0gRmHDp2EgbG9naW5cIiBkYXRhLWdhLXJlc2V0VXRwPVwiZmFsc2VcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiICR7d2luZG93LmdsYlBheXdhbGwudGFyZ2V0Qmxhbmt9IFwiPiR7d2luZG93LmdsYlBheXdhbGwubG9naW5UZXh0fTwvYT5gO1xuXG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSlcblx0XHRcdHRoaXMuY2xlYXJMb2dpbkFyZWEoKTtcblxuXHRcdGlmKHRoaXMuZGVidWcgKSBcblx0XHRcdHRoaXMuc2V0RGVidWdUZW1wbGF0ZVNldHRpbmdzKCk7XG5cdFx0XG5cdFx0Y2FsbGJhY2soKTtcblx0fVxuXG5cdGNsZWFyTG9naW5BcmVhKCkge1xuXHRcdGlmKHdpbmRvdy5nbGJQYXl3YWxsKSB7IFxuXHRcdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSAnJztcblx0XHR9XG5cdH1cblxuXHRzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKSB7XG5cdFx0bGV0IG9iaiA9IHt9O1xuXHRcdG9iai50b3BNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTUwJztcblx0XHRvYmoudG9wRGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODA0eDEyOCc7XG5cdFx0b2JqLnRvcExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wxJztcblx0XHRvYmoubGVmdE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHg1MDAnO1xuXHRcdG9iai5sZWZ0RGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAyeDUxNSc7XG5cdFx0b2JqLmxlZnRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMic7XG5cdFx0b2JqLnJpZ2h0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XG5cdFx0b2JqLnJpZ2h0RGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAyeDUxNSc7XG5cdFx0b2JqLnJpZ2h0TGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDMnO1xuXG5cdFx0d2luZG93LmdsYlBheXdhbGwgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuZ2xiUGF5d2FsbCwgb2JqKTtcblx0fVxuIFxuICBib2R5QWRqdXN0KCkge1xuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnaGlkZGVuJywgJ2ltcG9ydGFudCcpO1xuXHR0aGlzLmVsQm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnZml4ZWQnLCAnaW1wb3J0YW50Jyk7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsICcxMDAlJywgJ2ltcG9ydGFudCcpO1xuICB9XG5cbiAgc2V0RWxXcmFwcGVyKCkge1xuXHR0aGlzLmVsQ3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0Jyk7XG4gIH1cblxuICByZW1vdmVFbGVtZW50cygpIHtcblx0dGhpcy5zZXRFbFdyYXBwZXIoKTtcblxuXHRpZih0aGlzLmVsQ3B0KVxuXHRcdHRoaXMuZWxDcHQucmVtb3ZlKCk7XG5cblx0Y29uc3QgZWxUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm90ZWN0ZWQtY29udGVudCwgI2luZm9hcnRlLW1haW4tY29udGVudCcpO1xuXG5cdGVsVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0ICBlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcbiAgfVxuXG4gIGNyZWF0ZVRlbXBsYXRlKCkge1xuXHR0aGlzLmVsQm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdGhpcy5ib2R5QWRqdXN0KCk7XG4gICAgdGhpcy5yZW1vdmVFbGVtZW50cygpO1xuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMuY3NzTWluaWZpZWQpOyBcblx0dGhpcy5lbEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnRlbXBsYXRlKTsgXG5cdHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1x0XG4gICAgXG4gICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKTtcbiAgICAgICAgfSk7XG5cdH1cblxuXHR0aGlzLkdBLnBheXdhbGxMb2FkKCk7XG4gIH1cblxuICBhY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCkge1xuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xuXHR0aGlzLmVsQ3B0V3JhcCA9IHRoaXMuZWxDcHQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0LXdyYXAnKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRjb25zdCBlbEJvZHlIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyA0O1xuXHRcdGNvbnN0IGVsQ3B0V3JhcEhlaWdodCA9IHRoaXMuZWxDcHRXcmFwLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3QgY3VycmVudFRvcCA9ICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIFxuICAgICAgICA/IE1hdGguYWJzKCBlbEJvZHlIZWlnaHQvMiApXG4gICAgICAgIDogTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yICk7XG5cdFx0Y29uc3QgdG9wV2l0aEZ1bGxFbGVtZW50ID0gKGVsQm9keUhlaWdodCAtIGVsQ3B0V3JhcEhlaWdodCk7XG5cblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke2N1cnJlbnRUb3B9cHhgO1xuXHRcdHRoaXMuZWxDcHQuc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0dGhpcy5lbENwdC5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTk5O1xuXG5cdFx0dGhpcy5ldnRXaGVlbChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xuXHRcdHRoaXMuZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KTtcblx0XHR0aGlzLmFjdGl2ZUV2ZW50cygpO1xuXG5cdFx0dGhpcy5GQi5zZXRQaXhlbFR5cGUoKTtcblx0fSwgMTAwMCk7XG4gIH1cblxuICBhY3RpdmVFdmVudHMoKSB7XG5cdGNvbnN0IGNsaWNrVGFyZ2V0cyA9IHRoaXMuZWxDcHRXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblxuXHRjbGlja1RhcmdldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7IFxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgY29uc3QgaXNMb2dpbiA9IEJvb2xlYW4oZWxlbWVudC5kYXRhc2V0LmlzTG9naW4pIHx8IGZhbHNlO1xuXHRcdFx0Y29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBmYWxzZSA7IFxuXHRcdFx0Y29uc3QgaXNVcmxTd2cgPSAodXJsKSA/IHVybC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdvZmVydGFzd2cnKSA6IGZhbHNlO1xuXHRcdFx0Y29uc3Qgbm90QmxhbmsgPSBlbGVtZW50LmRhdGFzZXQuaHJlZlRhcmdldCB8fCB0cnVlOyBcblx0XHRcdFxuXHRcdFx0dGhpcy5HQS50cmlnZ2VyKGVsZW1lbnQpOyBcblxuXHRcdFx0aWYoIWlzTG9naW4gJiYgaXNVcmxTd2cpXG5cdFx0XHRcdHRoaXMuU1dHLnNldFV0bXMoKTsgIFxuXG4gICAgICAgICAgICBpZiAodXJsICYmICFpc1VybFN3ZykgeyBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBub3RCbGFuayA/ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybCkgOiB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG5cdFx0fS5iaW5kKHRoaXMpKTtcblx0fSk7XG4gIH1cblxuICBldnRXaGVlbChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpIHtcblx0bGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J3doZWVsJyxcblx0XHRmdW5jdGlvbihldnQpIHsgXG5cdFx0ICBjb25zdCBzdGVwID0gY3VycmVudFRvcCAvIDEwMDtcblx0XHQgIGNvbnN0IG11bHRpcGxpZXIgPSAyMDtcblxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPj0gMSkge1xuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgLSBzdGVwICogbXVsdGlwbGllcjsgXG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xuICBcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcblx0XHQgIH1cbiAgXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA8PSAtMSkge1xuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgKyBzdGVwICogbXVsdGlwbGllcjtcblx0XHRcdG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcbiAgXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG5cdFx0ICB9XG5cdFx0fS5iaW5kKHRoaXMpXG5cdCAgKTtcbiAgfVxuXG4gIGV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xuICAgIGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xuICAgIGxldCB0b3VjaHN0YXJ0WSA9IDA7XG4gICAgbGV0IHRvdWNoZW5kWSA9IDA7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgIHRvdWNoc3RhcnRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG5cdH0pO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAyMDtcbiAgICAgICAgdG91Y2hlbmRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG5cbiAgICAgICAgaWYgKHRvdWNoZW5kWSA8IHRvdWNoc3RhcnRZKSB7IFxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKHRvdWNoc3RhcnRZKSAtIE1hdGguYWJzKHRvdWNoZW5kWSk7XG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCAtIGRpZmY7IFxuICAgICAgICAgICAgbmV3dG9wID0gZWxUb3AgPCB0b3BXaXRoRnVsbEVsZW1lbnQgPyB0b3BXaXRoRnVsbEVsZW1lbnQgOiBlbFRvcDtcblxuICAgICAgICAgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdWNoZW5kWSA+IHRvdWNoc3RhcnRZKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hlbmRZIC0gdG91Y2hzdGFydFk7XG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCArIGRpZmY7IFxuXHRcdCAgICBuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XG5cblx0XHQgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuICAgICAgICB9XG5cdH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRVcmxMb2dpblJlZ2lzdGVyKHR5cGUgPSAnJykge1xuXHRjb25zdCB1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byA9IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09PSAncHJkJyA/ICdodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJyA6ICdodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS9WYWxpZGFVc3VhcmlvQmFycmFtZW50by5odG1sJztcblx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcblx0Y29uc3Qgc2VydmljZUlkID0gd2luZG93LnRpbnlDcHQuUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpIHx8IG51bGw7XG5cdGxldCBzdHIgPSAnJztcblx0bGV0IHVybFJldHVybiA9ICcnO1xuXG5cdGlmKCF0aGlzLmRlYnVnICYmIHRoaXMuUGlhbm8uaXNEZWZpbmVkKSB7XG5cdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0dXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gKyAnP2NvZGlnb1Byb2R1dG89JyArICB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldENvZGlnb1Byb2R1dG8oKSBcblx0XHRcdCsgJyZzZXJ2aWNlSWQ9JyArIHNlcnZpY2VJZFxuXHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xuXHRcdFx0KyAnJm5vbWVQcm9kdXRvPScgKyB0aGlzLlBpYW5vLmNvbnRlbnQudmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKClcblx0XHRcdCsgJyZ1cmxSZXRvcm5vPScgKyB1cmlcblx0XHQpO1xuXG5cdFx0aWYodHlwZSA9PT0gJ3JlZ2lzdGVyJykge1xuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59Y2FkYXN0cm8vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1sb2dpbi8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xuXHRyZXR1cm4gd2luZG93LmdsYlBheXdhbGw7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7IFxuXHRjb25zdCB0ZW1wbGF0ZSA9IGBcblx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQgJHt0aGlzLnRlbXBsYXRlVmFycy5wcm9kdWN0Q2xhc3N9XCI+IFxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwXCI+XG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZFwiPlxuXHRcdFx0JHt0aGlzLnRlbXBsYXRlVmFycy50aXRsZX1cblx0XHQ8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190b3BcIj5cblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTGlua31cIiBkYXRhLWdhLWltYWdlLXBvc2l0aW9uPVwidG9wXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDEgLVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BEZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BNb2JpfVwiIC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyICR7d2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSA/ICdpcy1oaWRlJyA6ICcnfVwiPlxuXHRcdCAgXHQke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGFnfVxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fbGVmdFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TGlua31cIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgNCAtIEJhbm5lciBvZmVydGEgZXNxdWVyZGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19yaWdodFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodExpbmt9XCIgIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA1IC0gQmFubmVyIG9mZXJ0YSBkaXJlaXRhXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHREZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodE1vYml9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0PC9kaXY+XG5cdCAgPC9kaXY+XG5cdCAgYDtcblxuXHRyZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBnZXQgY3NzTWluaWZpZWQoKSB7XG5cdCAgcmV0dXJuIGA8c3R5bGU+XG5cdCAgLnBheXdhbGwtY3B0e29wYWNpdHk6MDtwb3NpdGlvbjpmaXhlZDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwdnc7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWZ9LnBheXdhbGwtY3B0LC5wYXl3YWxsLWNwdCAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfS5wYXl3YWxsLWNwdCBhe2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWRlY29yYXRpb246bm9uZX0ucGF5d2FsbC1jcHQgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wYXl3YWxsLWNwdCAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdCBhe2NvbG9yOiMwMDB9LnBheXdhbGwtY3B0LW9nbG9ibyAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdC1vZ2xvYm8gYXtjb2xvcjojMzI1ZTk0fS5wYXl3YWxsLWNwdC13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1ib3R0b206MjBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LnBheXdhbGwtY3B0LXdyYXB7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn19LnBheXdhbGwtY3B0LXdyYXAgaW1ne2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LnBheXdhbGwtY3B0LXdyYXBfX3RvcHtwYWRkaW5nLXRvcDoyMHB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWR7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMCAwO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXJ7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMDtjb2xvcjojNzY3Njc2O2ZvbnQtc2l6ZToxNnB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlci5pcy1oaWRle3BhZGRpbmctYm90dG9tOjB9XG5cdCAgPC9zdHlsZT5gO1xuICB9XG5cbiAgaW5pdCgpIHsgXG5cdCAgY29uc3QgZGVsYXlUaW1lciA9ICh3aW5kb3cuZ2xiUGF5d2FsbCAmJiB3aW5kb3cuZ2xiUGF5d2FsbC5kZWxheVRpbWVyKSA/IHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIgKiAxMDAwIDogMDtcblxuXHRzZXRUaW1lb3V0KCgpID0+e1xuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGUoKTtcblx0fSwgZGVsYXlUaW1lcik7XG4gIH1cbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xuaW1wb3J0IFRpbnlNb2R1bGUgZnJvbSAnLi9UaW55JztcbmltcG9ydCBHQU1vZHVsZSBmcm9tICcuL0dBJztcbmltcG9ydCBTd2dNb2R1bGUgZnJvbSAnLi9Td2cnO1xuaW1wb3J0IFBheXdhbGxDcHQgZnJvbSAnLi9jcG50LXBheXdhbGwvUGF5d2FsbCc7XG5pbXBvcnQgUGF5d2FsbENwdElubGluZSBmcm9tICcuL2NwbnQtcGF5d2FsbC1pbmxpbmUvUGF5d2FsbCc7XG5cbmNvbnN0IFRpbnkgPSBuZXcgVGlueU1vZHVsZSgpO1xuY29uc3QgR0EgPSBuZXcgR0FNb2R1bGUoKTtcblxuR0Euc2V0R2xvYmFsVmFycygpO1xuXG5QaWFuby50eXBlUGF5d2FsbCA9IG51bGw7XG5QaWFuby52YXJpYXZlaXMgPSB7XG5cdGFtYmllbnRlc0FjZWl0b3M6IFwiaW50LHFsdCxwcmRcIixcblx0c3RhdHVzSHR0cE9idGVyQXV0b3JpemFjYW9BY2Vzc286IFwiNDAwLDQwNCw0MDYsNTAwLDUwMiw1MDMsNTA0XCIsXG5cdHN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IFwiNDAwLDQwNCw1MDAsNTAyLDUwMyw1MDRcIixcblx0aXNDYWxsYmFja01ldHRlckV4cGlyZWQ6IGZhbHNlLFxuXHRjb25zdGFudGU6IHtcblx0XHRjb29raWU6IHtcblx0XHRcdEdDT006ICdHTEJJRCcsXG5cdFx0XHRVVFA6ICdfdXRwJyxcblx0XHRcdFJUSUVYOiAnX3J0aWV4Jyxcblx0XHRcdEFNQklFTlRFOiAnYW1iaWVudGVQaWFubycsXG5cdFx0XHRTQVZFX1NVQlNDUklQVElPTjogJ3NhdmVTdWJzY3JpcHRpb25Db29raWUnLFxuXHRcdFx0Q1JFQVRFRF9HTE9CT0lEOiAnY3JlYXRlZEdsb2JvSWQnLFxuXHRcdFx0R0xPQk9JRF9NRVNTQUdFOiAnZ2xvYm9JZE1lc3NhZ2UnXG5cdFx0fSxcblx0XHRtZXRyaWNhczoge1xuXHRcdFx0RVZFTlRPX1NFTV9BQ0FPOiAnc2VtIGFjYW8nLFxuXHRcdFx0RVJSTzogJ0Vycm8nXG5cdFx0fSxcblx0XHRrcnV4OiB7XG5cdFx0XHRTRUdNRU5UQUNPRVM6ICdreGdsb2JvX3NlZ3MnLFxuXHRcdFx0S1JVWExJR0FETzogJ2tydXgtbGlnYWRvJ1xuXHRcdH0sXG5cdFx0dXRpbDoge1xuXHRcdFx0SVA6IFwiMTI3LjAuMC4xXCIsXG5cdFx0XHRBTUJJRU5URTogXCJhbWJpZW50ZS1kZXNlamFkb1wiLFxuXHRcdFx0REVCVUc6IFwiZGVidWctcGlhbm9cIlxuXHRcdH1cblx0fSxcblx0aXNDb250ZXVkb0V4Y2x1c2l2bzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0Z2V0QW1iaWVudGVQaWFubzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2YoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkpID4gLTEpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSwgMSk7XG5cdFx0XHRyZXR1cm4gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSk7XG5cdFx0fVxuXHRcdGlmIChQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSA9PSAnZmFsc2UnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgXCJcIiwgLTEpO1xuXHRcdH1cblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpKSB7XG5cdFx0XHRyZXR1cm4gSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpO1xuXHRcdH07XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2Yod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8pID4gLTEgPyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA6ICdwcmQnO1xuXHR9LFxuXHRnZXRUaXBvQ29udGV1ZG9QaWFubzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy50aXBvQ29udGV1ZG9QaWFubztcblx0fSxcblx0ZXhlY3V0b3VQYWdldmlldzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5leGVjdXRvdVBhZ2V2aWV3ID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRnZXROb21lUHJvZHV0bzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF3aW5kb3cubm9tZVByb2R1dG9QaWFubyl7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIk5vbWUgZG8gcHJvZHV0byBuw6NvIGRlZmluaWRvLlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3cubm9tZVByb2R1dG9QaWFubztcblx0fSxcblx0Z2V0U2Vydmljb0lkOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaWQgPSAnMDAwMCc7XG5cblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ29nbG9ibydcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYmxvZ3MnXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2tvZ3V0J1xuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdhY2Vydm8nXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2pvcm5hbGRpZ2l0YWwnXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2Jsb2dBbmFsaXRpY28nKXtcblx0XHRcdHJldHVybiBpZCA9ICczOTgxJztcblx0XHR9XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgJiYgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdtb25ldCcpe1xuXHRcdFx0cmV0dXJuIGlkID0gJzY2MTgnO1xuXHRcdH1lbHNlIGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpKXtcblx0XHRcdHJldHVybiBpZCA9ICc2Njk3Jztcblx0XHR9XG5cblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3ZhbG9yJyl7XG4gICAgICAgICAgICByZXR1cm4gaWQgPSAnNjY2OCc7XG5cdFx0fVxuXG5cdFx0aWYgKGlkID09PSAnMDAwMCcpXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignU2VydmljZUlEIG7Do28gZGVmaW5pZG8uJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZiArXG5cdFx0XHRcdCcgbm9tZVByb2R1dG86ICcgKyBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSApO1xuXG5cdFx0cmV0dXJuIGlkO1xuXHR9LFxuXHRnZXRDb2RpZ29Qcm9kdXRvOiBmdW5jdGlvbigpe1xuXHRcdHZhciBub21lUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpO1xuXHRcdHN3aXRjaCAobm9tZVByb2R1dG8pe1xuXHRcdFx0Y2FzZSAnb2dsb2JvJzpcblx0XHRcdGNhc2UgJ2Jsb2dzJzpcblx0XHRcdGNhc2UgJ2tvZ3V0Jzpcblx0XHRcdGNhc2UgJ2Jsb2dBbmFsaXRpY28nOlxuXHRcdFx0XHRyZXR1cm4gJ09HMDMnO1xuXHRcdFx0Y2FzZSAnYWNlcnZvJzpcblx0XHRcdFx0cmV0dXJuICdPRzA0Jztcblx0XHRcdGNhc2UgJ2pvcm5hbGRpZ2l0YWwnOlxuXHRcdFx0XHRyZXR1cm4gJ09HMDEnO1xuXHRcdFx0Y2FzZSAnYXV0by1lc3BvcnRlJzpcblx0XHRcdGNhc2UgJ2Vwb2NhJzpcblx0XHRcdGNhc2UgJ3ZvZ3VlJzpcblx0XHRcdGNhc2UgJ2dsYW1vdXInOlxuXHRcdFx0Y2FzZSAnY2FzYS12b2d1ZSc6XG5cdFx0XHRjYXNlICdtYXJpZS1jbGFpcmUnOlxuXHRcdFx0Y2FzZSAnZ2xvYm8tcnVyYWwnOlxuXHRcdFx0Y2FzZSAnZ3EnOlxuXHRcdFx0Y2FzZSAnbW9uZXQnOlxuXHRcdFx0Y2FzZSAnY3Jlc2Nlcic6XG5cdFx0XHRjYXNlICdnYWxpbGV1Jzpcblx0XHRcdFx0cmV0dXJuIG5vbWVQcm9kdXRvO1xuXHRcdFx0Y2FzZSAnY2FzYS1lLWphcmRpbSc6XG5cdFx0XHRcdHJldHVybiAnY2FzYS1qYXJkaW0nO1xuXHRcdFx0Y2FzZSAncXVlbS1hY29udGVjZSc6XG5cdFx0XHRcdHJldHVybiAncXVlbSc7XG5cdFx0XHRjYXNlICd2YWxvcic6XG5cdFx0XHRcdHJldHVybiAndmFsb3JkaWdpdGFsJztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQW8gb2J0ZXIgY8OzZGlnbyBkbyBwcm9kdXRvXCIsIG5vbWVQcm9kdXRvICsgXCIgLSBcIiArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0XHRyZXR1cm4gJ2Vycm9yJztcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLmphbmVsYUFub25pbWEgPSB7XG5cdHJldHJ5IDogZnVuY3Rpb24oaXNEb25lLCBuZXh0KSB7XG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xuXHRcdHZhciBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VycmVudF90cmlhbCsrID4gbWF4X3JldHJ5KSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQxMFxuXHRcdCk7XG5cdH0sXG5cdGlzSUUxME9yTGF0ZXIgOiBmdW5jdGlvbih1c2VyX2FnZW50KSB7XG5cdFx0bGV0IHVhID0gdXNlcl9hZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xuXG5cdFx0aWYgKHVhLmluZGV4T2YoJ21zaWUnKSA9PT0gMCAmJiB1YS5pbmRleE9mKCd0cmlkZW50JykgPT09IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKG1hdGNoICYmIHBhcnNlSW50KG1hdGNoWzFdLCAxMCkgPj0gMTApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGRldGVjdFByaXZhdGVNb2RlIDogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgaXNfcHJpdmF0ZTtcblxuXHRcdGlmICh3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0pIHtcblx0XHRcdHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbShcblx0XHRcdFx0d2luZG93LlRFTVBPUkFSWSwgMSxcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cuaW5kZXhlZERCICYmIC9GaXJlZm94Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0dmFyIGRiO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGIgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oJ3Rlc3QnKTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBpc19wcml2YXRlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLnJldHJ5KFxuXHRcdFx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkYi5yZWFkeVN0YXRlID09PSAnZG9uZScgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcblx0XHRcdFx0XHRcdGlmICghaXNfdGltZW91dCkge1xuXHRcdFx0XHRcdFx0XHRpc19wcml2YXRlID0gZGIucmVzdWx0ID8gZmFsc2UgOiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKFBpYW5vLmphbmVsYUFub25pbWEuaXNJRTEwT3JMYXRlcih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghd2luZG93LmluZGV4ZWREQikge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiAvU2FmYXJpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgMSk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3QnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLnJldHJ5KFxuXHRcdFx0ZnVuY3Rpb24gaXNEb25lKCkge1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGlzX3ByaXZhdGUgIT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdGZ1bmN0aW9uIG5leHQoaXNfdGltZW91dCkge1xuXHRcdFx0XHRjYWxsYmFjayhpc19wcml2YXRlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59O1xuXG5QaWFuby5rcnV4ID0ge1xuXHR0ZW06IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGxpZ2FkbzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5LUlVYTElHQURPO1xuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnICYmIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vICE9IFwicHJkXCIpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnIHx8IHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09IFwicHJkXCIpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgXCJcIiwgLTEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETykgPT0gXCJmYWxzZVwiKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRvYnRlbVNlZ21lbnRhY2FvOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8ua3J1eC50ZW0oKSAmJiBQaWFuby5rcnV4LmxpZ2FkbygpKSB7XG5cdFx0XHR2YXIgc2VnbWVudGFjb2VzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpLnNwbGl0KCcsJyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRhY29lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIHNlZ21lbnRhY29lc1tpXSwgc2VnbWVudGFjb2VzW2ldXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5yZWdpb25hbGl6YWNhbyA9IHtcblx0Z2V0UmVnaW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIga3J1eEdlbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdreGdsb2JvX2dlbycpO1xuXHRcdGlmIChrcnV4R2VvKSB7XG5cdFx0XHRrcnV4R2VvLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSBpdGVtLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBkYXRhWzBdO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBkYXRhWzFdO1xuXHRcdFx0XHRpZiAoa2V5ID09PSAncmVnaW9uJykge1xuXHRcdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJyZWdpb25cIiwgdmFsdWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5tZXRyaWNhcyA9IHtcblx0ZW52aWFFdmVudG9zR0E6IGZ1bmN0aW9uKF9HQUFjYW8sIF9HQVJvdHVsbykgeyAvL1RPRE86IGFycXVpdm8gdGlueXBhc3MuanMsIGluc2VyaWRvIHBlbGEgUGlhbm8sIHV0aWxpemEgZXNzYSBmdW7Dp8Ojb1xuXHRcdGNvbnN0IGlzUHJvZHVjdFZhbG9yID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc1Byb2R1Y3RWYWxvcilcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ1BpYW5vJywgX0dBQWNhbywgX0dBUm90dWxvLCAsdHJ1ZV0pO1xuXHRcdGVsc2Vcblx0XHRcdGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiAnRXZlbnRvR0FQaWFubycsICdldmVudG9HQUNhdGVnb3JpYSc6ICdQaWFubycsICdldmVudG9HQUFjYW8nOiBfR0FBY2FvLCAnZXZlbnRvR0FSb3R1bG8nOl9HQVJvdHVsb30pO1xuXHR9LFxuXG5cdG1vbnRhUm90dWxvR0E6IGZ1bmN0aW9uKCkgeyAvL1RPRE86IGF0IFBpYW5vIGFzIHNldEV4cGVyaWVuY2UoKSB8IENoZWNrIG9uIG9sZCB0aW55IGJlZm9yZSByZW1vdmVcblx0XHRpZih3aW5kb3cucmVncmFzVGlueSAmJiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xuXHRcdH1cblx0XHRyZXR1cm4gXCIgXCI7XG5cdH0sXG5cdHNldExpbWl0ZUNvbnRhZ2VtOiBmdW5jdGlvbihtZXRyaWNhcykge1xuXHRcdHdpbmRvdy5fR0FMaW1pdGUgPSBcIi1cIjtcblx0XHR3aW5kb3cuX0dBQ29udGFnZW0gPSBcIi1cIjtcblxuXHRcdGlmKCFtZXRyaWNhcykgcmV0dXJuO1xuXG5cdFx0d2luZG93Ll9HQUNvbnRhZ2VtID0gXCJcIiArIG1ldHJpY2FzLnZpZXdzO1xuXG5cdFx0aWYgKHdpbmRvdy5fR0FDb250YWdlbS5sZW5ndGggPT0gMSkge1xuXHRcdFx0d2luZG93Ll9HQUNvbnRhZ2VtID0gXCIwXCIgKyB3aW5kb3cuX0dBQ29udGFnZW07XG5cdFx0fVxuXHRcdHdpbmRvdy5fR0FMaW1pdGUgPSBtZXRyaWNhcy5ub21lRXhwZXJpZW5jaWEgK1wiIDogXCIrIG1ldHJpY2FzLm1heFZpZXdzO1xuXHR9LFxuXHRpZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXI6IGZ1bmN0aW9uKHJlZ3Jhcykge1xuXHRcdHZhciBwYXNzYWdlbSA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUubWV0cmljYXMuRVZFTlRPX1NFTV9BQ0FPO1xuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkge1xuXHRcdFx0cGFzc2FnZW0gPSByZWdyYXMuZmx1eG8uaW5kZXhPZihcImhhcmR3YWxsXCIpICE9IC0xID8gJ3JlZ2lzdGVyLWhhcmR3YWxsLXBhc3NvdScgOiAncmVnaXN0ZXItY29udGFnZW0tcGFzc291Jztcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0fVxuXHRcdHJldHVybiBwYXNzYWdlbTtcblx0fSxcblx0ZXhlY3V0YUFwb3NQYWdldmlldzogZnVuY3Rpb24oZXhwaXJvdSkge1xuXHRcdGlmICghUGlhbm8udmFyaWF2ZWlzLmV4ZWN1dG91UGFnZXZpZXcoKSkge1xuXHRcdFx0d2luZG93LnJlZ3Jhc1RpbnkuZmx1eG8gPSB3aW5kb3cudHBDb250ZXh0ID8gdHBDb250ZXh0LnRvTG93ZXJDYXNlKCkgOiAnLSc7XG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSB3aW5kb3cubm9tZUV4cGVyaWVuY2lhID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA6ICcnO1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0TGltaXRlQ29udGFnZW0od2luZG93LnJlZ3Jhc1RpbnkpO1xuXHRcdFx0aWYgKGV4cGlyb3UgPT0gZmFsc2UpIEdBLnNldEV2ZW50cyhQaWFuby5tZXRyaWNhcy5pZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXIod2luZG93LnJlZ3Jhc1RpbnkpLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0ZXhlY3V0b3VQYWdldmlldyA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRzZXRhVmFyaWF2ZWlzOiBmdW5jdGlvbihpZExvZ2luLCB0aXBvTG9naW4sIGFzc2luYXR1cmFMb2dhZGEpe1xuXHRcdFBheXdhbGxBbmFseXRpY3MuaWRMb2dpbkFzc2luYW50ZSA9IGlkTG9naW47XG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MudGlwb0xvZ2luQXNzaW5hbnRlID0gdGlwb0xvZ2luO1xuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLmFzc2luYXR1cmFMb2dhZGEgPSBhc3NpbmF0dXJhTG9nYWRhO1xuXHR9XG59O1xuXG5cblBpYW5vLmJhbm5lciA9IHtcblx0bW9zdHJhckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92by1iYW5uZXItZm9vdGVyLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8uanNcIik7XG5cdH0sXG5cdG1vc3RyYXJBdmF0YXJIZWFkZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYXZhdGFyLWhlYWRlci1waWFuby5qc1wiKTtcblx0fSxcblx0Ym90dG9tRml4ZWQ6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XG5cdFx0d2luZG93LmdsYkJhbm5lckJvdHRvbSA9IHBhcmFtcztcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc3R5bGVzL2Jhbm5lci1ib3R0b20tZml4ZWQuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc2NyaXB0cy9iYW5uZXItYm90dG9tLWZpeGVkLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyU1dHOiBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBjc3MgPSBgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zdHlsZXMvc3R5bGUuY3NzJz5gO1xuXHRcdGNvbnN0IHNjcmlwdEpzID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc2NyaXB0L2FudW5jaW8tc3dnLmpzYDtcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKGNzcyk7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKHNjcmlwdEpzKTtcblx0fSxcblx0bW9zdHJhckhpZ2hsaWdodFNhbGU6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc2NyaXB0cy9oaWdobGlnaHQtc2FsZS5qc1wiKTtcblx0fSxcblx0bW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvdmFsb3Itc3Vic2NyaWJlLWJ1dHRvbi9cIit2ZXJzYW8rXCIvc2NyaXB0cy9zdWJzY3JpYmUtYnV0dG9uLmpzXCIpO1xuXHR9XG5cbn07XG5cblBpYW5vLnJlZ2lzdGVyID0ge1xuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZhLXRlbGEtcmVnaXN0ZXIuanNcIik7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdH1cbn07XG5cblBpYW5vLmhlbHBlciA9IHtcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbigpIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF82NWQxOTMwYTBiZGE0NzZiYThkM2MyNWM1MzcxZWMzZi9waWFuby9oZWxwZXIvcmVnaXN0ZXIuanNcIik7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdH1cbn07XG5cblBpYW5vLnBheXdhbGwgPSB7XG5cdHJlZGlyZWNpb25hckJhcnJlaXJhOiBmdW5jdGlvbih1cmwpIHtcblx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7fSwgMTAwMCk7XG5cdH0sXG5cdHNob3c6IGZ1bmN0aW9uKHR5cGVQYXl3YWxsID0gbnVsbCkge1xuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdHlwZVBheXdhbGw7XG5cblx0XHR0cnkge1xuXHRcdFx0bmV3IFBheXdhbGxDcHQoKTtcblx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y2F0Y2goZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbCAtIEVycm9yIG9uIGxvYWQnKVxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XG5cdFx0fVxuXHR9LFxuXHRhbmFseXRpYzogZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRuZXcgUGF5d2FsbENwdElubGluZSgpO1xuXHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdQYXl3YWxsIC0gRXJyb3Igb24gbG9hZCcsIGVycilcblx0XHR9XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGFuYWx5dGljYWxVbmJsb2NrZWRGb3JQaWFubygpIHtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhbmFseXRpY2FsVW5ibG9ja2VkRm9yUGlhbm8nKVxuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gYW5hbHl0aWNhbEJsb2NrZWRGb3JQaWFubygpIHtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhbmFseXRpY2FsQmxvY2tlZEZvclBpYW5vJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRXhwZXJpZW5jZXNIYXNDaGFuZ2UoKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxldCBjb3VudCA9IDA7IFxuXHRcdFxuXHRcdGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKHdpbmRvdy50cCAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdCYmIHdpbmRvdy50cC5leHBlcmllbmNlXG5cdFx0XHQmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpXG5cdFx0XHQmJiB3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdFxuXHRcdFx0JiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBleHBlcmllbmNlcyA9IHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0LmV2ZW50c1xuXHRcdFx0XHRjb25zdCBleHBlcmllbmNlc0Nsb25lID0gQXJyYXkuZnJvbSh3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHMpXG5cdFx0XHRcdGNvbnN0IGV4cGVyaWVuY2VzQ2hhbmdlZCA9IE9iamVjdC5pcyhKU09OLnN0cmluZ2lmeShleHBlcmllbmNlcyksIEpTT04uc3RyaW5naWZ5KGV4cGVyaWVuY2VzQ2xvbmUpKVxuXG5cdFx0XHRcdGlmKGV4cGVyaWVuY2VzQ2hhbmdlZCkge1xuXHRcdFx0XHRcdGV4cGVyaWVuY2VzLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHRpZihpdGVtLmV2ZW50VHlwZSA9PT0gJ3J1bkpzJykge1xuXHRcdFx0XHRcdFx0XHRpZihpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQgIT09ICd1bmRlZmluZWQnICYmIChpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQuaW5jbHVkZXMoJ3BheXdhbGwuYW5hbHl0aWMnKSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihjb3VudCA9PT0gMTApIHtcblx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHR9XG5cdFx0fSwgMTAwKTtcblx0fSk7XG59XG5cblBpYW5vLmNoZWNrUGlhbm9BY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBjb3VudCA9IDBcblxuXHRsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG5cdFx0aWYod2luZG93LnRwICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICYmIHdpbmRvdy50cC5leHBlcmllbmNlXG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKVxuICAgICAgICAgICYmIHdpbmRvdy50cC5leHBlcmllbmNlLl9nZXRMYXN0RXhlY3V0aW9uUmVzdWx0KCkucmVzdWx0XG4gICAgICAgICAgJiYgd2luZG93LnRwLmV4cGVyaWVuY2UuX2dldExhc3RFeGVjdXRpb25SZXN1bHQoKS5yZXN1bHQuZXZlbnRzKVxuXHQgICAgIHtcblx0XHRcdFBpYW5vLmNoZWNrUGF5d2FsbCh3aW5kb3cudHAuZXhwZXJpZW5jZS5fZ2V0TGFzdEV4ZWN1dGlvblJlc3VsdCgpLnJlc3VsdC5ldmVudHMpXG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmKGNvdW50ID09PSAxMCkge1xuXHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKVxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdFx0fVxuXG5cdFx0XHRjb3VudCsrXG5cdFx0fVxuXG5cdCAgfSwgNTAwKTtcblxufTtcblxuUGlhbm8uY2hlY2tQYXl3YWxsID0gZnVuY3Rpb24oUGlhbm9SZXN1bHRFdmVudHMgPSBudWxsKSB7XG4gICBsZXQgaGFzUnVuSnNXaXRoUGF5d2FsbCA9IGZhbHNlXG5cblx0aWYoUGlhbm9SZXN1bHRFdmVudHMpIHtcbiAgICAgICAgUGlhbm9SZXN1bHRFdmVudHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0uZXZlbnRUeXBlID09PSAncnVuSnMnKSB7XG5cdFx0XHRcdGlmKGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldCAhPT0gJ3VuZGVmaW5lZCcgJiYgKGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldC5pbmNsdWRlcygncGF5d2FsbC5zaG93JykgXG5cdFx0XHRcdHx8IGl0ZW0uZXZlbnRQYXJhbXMuc25pcHBldC5pbmNsdWRlcygncGF5d2FsbC5hbmFseXRpYycpIFxuXHRcdFx0XHR8fCBpdGVtLmV2ZW50UGFyYW1zLnNuaXBwZXQuaW5jbHVkZXMoJ21vc3RyYXJCYXJyZWlyYScpICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZVxuXHRcdFx0XHRcdGhhc1J1bkpzV2l0aFBheXdhbGwgPSB0cnVlXG5cdFx0XHRcdFx0UGlhbm8udHJpZ2dlclBheXdhbGxPcGVuZWQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZighaGFzUnVuSnNXaXRoUGF5d2FsbClcbiAgICAgICAgICAgUGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKClcbiAgICB9XG5cbn07XG5cblBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZyA9IGZ1bmN0aW9uKCkge1xuXHR3aW5kb3cuaGFzUGF5d2FsbCA9IGZhbHNlO1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsZWFyRm9yQWRzJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5QaWFuby50cmlnZ2VyUGF5d2FsbE9wZW5lZCA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2Jsb2NrRm9yQWRzJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5QaWFuby5yZWdpc3RlclBheXdhbGwgPSB7XG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24odmVyc2FvID0gbnVsbCwgdGlwbyA9IG51bGwpIHtcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHRpcG87XG5cblx0XHRpZighdmVyc2FvIHx8ICFQaWFuby50eXBlUGF5d2FsbCApIHtcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFxuXHRcdFx0XHRcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8uanNcIixcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgIT09IDIwMCkge1xuXHRcdFx0XHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0aWYoUGlhbm8udHlwZVBheXdhbGwgPT09ICdyZWdpc3RlcicgfHwgUGlhbm8udHlwZVBheXdhbGwgPT09ICdleGNsdXNpdm8nICkge1xuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59O1xuXG5QaWFuby5jb211bmljYWRvID0ge1xuXHRtb3N0cmFySW5mb3JtYWNhbzogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2NvbXVuaWNhY2FvLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2NvbXVuaWNhY2FvLXBpYW5vLmpzXCIpO1xuXHR9XG59O1xuXG5QaWFuby5hZGJsb2NrID0ge1xuXHRtb3N0cmFyQWRCbG9jazogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcblxuXHRcdHBhcmFtcy5hc3NldHNQYXRoID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L2A7XG5cblx0XHR3aW5kb3cuZ2xiQWRibG9jayA9IHBhcmFtcztcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zY3JpcHRzL2FkYmxvY2stcGlhbm8uanNcIik7XG5cdH1cbn07XG5cblBpYW5vLmJsb3F1ZWlvcyA9IHtcblx0bGliZXJhckVzYzogZnVuY3Rpb24oKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jsb3F1ZWlvL2xpYmVyYVRlY2xhZG8uanNcIik7XG5cdH0sXG5cdGJsb3F1ZWlhVmlld01vZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vYmxvcXVlaWFWaWV3bW9kZS5qc1wiKTtcbiAgICB9XG59O1xuXG5QaWFuby5wYXJjZWlybyA9IHtcblx0bW9zdHJhRm9vdGVyUGFyY2Vpcm86IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvZm9vdGVyLXBhcmNlaXJvcy1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uaW5hZGltcGxlbnRlID0ge1xuXHRnZXRMaW5rQXNzaW5hdHVyYTogZnVuY3Rpb24obGluaykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluay5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGxpbmtbaV0ucmVsID09ICdhc3NpbmF0dXJhJykgcmV0dXJuIGxpbmtbaV0uaHJlZjtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5QaWFuby54bWxIdHRwUmVxdWVzdCA9IHtcblx0Z2VyYVNjcmlwdE5hUGFnaW5hOiBmdW5jdGlvbih1cmxTY3JpcHQsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybFNjcmlwdCk7XG5cdFx0eGhyLnNlbmQoKTtcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih0aGlzLnJlYWR5U3RhdGUgPT09IDQpe1xuXHRcdFx0XHRpZih0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0XHR2YXIgYXBwZW5kRGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRcdFx0XHRhcHBlbmREZVNjcmlwdC5pbm5lckhUTUwgPSByZXNwb3N0YTtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcGVuZERlU2NyaXB0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBuYSBmdW7Dp8OjbyBnZXJhciBzY3JpcHQgbmEgcMOhZ2luYS4nLCAndXJsOiAnICsgdXJsU2NyaXB0XG5cdFx0XHRcdFx0XHQrICcgU3RhdHVzRXJybzogJyArIHRoaXMuc3RhdHVzXG5cdFx0XHRcdFx0XHQrICcgU3RhY2s6ICcgKyB0aGlzLnN0YXR1c1RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGNhbGxiYWNrKVxuXHRcdFx0XHRjYWxsYmFjayh4aHIpO1xuXHRcdH07XG5cdH0sXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBmdW5jdGlvbihocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlLCBmYWxzZSk7XG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZCgpO1xuXG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XG5cdFx0XHRpZih4aHIuc3RhdHVzID09IDIwMCl7XG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xuXHRcdFx0XHR2YXIgc2l0dWFjYW9QYWdhbWVudG8gPSByZXNwSnNvbi5zaXR1YWNhb1BhZ2FtZW50by50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwic2l0dWFjYW9QYWdhbWVudG9cIiwgc2l0dWFjYW9QYWdhbWVudG9dKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9IDAgJiYgUGlhbm8udmFyaWF2ZWlzLnN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUuaW5kZXhPZih4aHIuc3RhdHVzKSA+IC0xKSB7XG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCBcIlN0YXR1cyBEZXNjb25oZWNpZG9cIiArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc286IGZ1bmN0aW9uKGdsYmlkKSB7XG5cblx0XHR2YXIgY29kaWdvUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCk7XG5cdFx0aWYoY29kaWdvUHJvZHV0byA9PSAnZXJyb3InKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ0b2tlbi1hdXRlbnRpY2FjYW9cIjogZ2xiaWQsIFwiaXBVc3VhcmlvXCI6IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5JUCwgXCJjb2RpZ29Qcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG99KTtcblxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxWZXJpZmljYUxlaXRvciwgZmFsc2UpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZChkYXRhKTtcblxuXHRcdGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApe1xuXHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHR2YXIgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3Bvc3RhKTtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gZmFsc2UsIHJlc3Bvc3RhRGVNb3Rpdm8gPSAnJywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSAnJztcblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5tb3Rpdm8gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdHJlc3Bvc3RhRGVNb3Rpdm8gPSByZXNwSnNvbi5tb3Rpdm8udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLnRlbVRlcm1vRGVVc28gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gcmVzcEpzb24udGVtVGVybW9EZVVzbztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLmxpbmsgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gUGlhbm8uaW5hZGltcGxlbnRlLmdldExpbmtBc3NpbmF0dXJhKHJlc3BKc29uLmxpbmspO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBpc0F1dG9yaXphZG8gPSBQaWFuby5hdXRlbnRpY2FjYW8uaXNBdXRvcml6YWRvKHJlc3Bvc3RhRGVUZXJtb0RlVXNvLCByZXNwb3N0YURlTW90aXZvLCByZXNwSnNvbi5hdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8ocmVzcEpzb24uYXV0b3JpemFkbywgcmVzcG9zdGFEZU1vdGl2bywgaXNBdXRvcml6YWRvLCByZXNwb3N0YURlVGVybW9EZVVzbyk7XG5cdFx0XHRcdHZhciBfanNvbkxlaXRvciA9IHtcblx0XHRcdFx0XHRcdFwiYXV0b3JpemFkb1wiIDogcmVzcEpzb24uYXV0b3JpemFkbyxcblx0XHRcdFx0XHRcdFwibW90aXZvXCI6IHJlc3Bvc3RhRGVNb3Rpdm8sXG5cdFx0XHRcdFx0XHRcImxvZ2Fkb1wiOiBpc0F1dG9yaXphZG8sXG5cdFx0XHRcdFx0XHRcInRlbVRlcm1vRGVVc29cIjogcmVzcG9zdGFEZVRlcm1vRGVVc28sXG5cdFx0XHRcdFx0XHRcImdsYmlkXCI6IGdsYmlkLFxuXHRcdFx0XHRcdFx0XCJwcm9kdXRvXCI6IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpLFxuXHRcdFx0XHRcdFx0XCJjb2RQcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG8sXG5cdFx0XHRcdFx0XHRcInV1aWRcIjogcmVzcEpzb24udXN1YXJpb0lkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0X2pzb25MZWl0b3IgPSBidG9hKGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShfanNvbkxlaXRvcikpKTtcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBfanNvbkxlaXRvciwgMSk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aWYoUGlhbm8uZ29vZ2xlLnNob3dTYXZlU3Vic2NyaXB0aW9uKHJlc3BKc29uKSl7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHZhciBzd2dTZXJ2aWNlID0gbmV3IFN3Z1NlcnZpY2UoKTtcblx0XHRcdFx0XHRcdFx0c3dnU2VydmljZS5zYXZlR2xvYm9TdWJzY3JpcHRpb24oZ2xiaWQpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBhbyBjaGFtYXIgYSBmdW7Dp8OjbyBzaG93U2F2ZVN1YnNjcmlwdGlvbiBkbyBBbGRlYmFyYW4uJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1VSTDogJyArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEdMQklEOiAnICsgZ2xiaWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEVycm86ICcgKyBlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocmVzcEpzb24uYXV0b3JpemFkbyA9PSB0cnVlKXtcblx0XHRcdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKHJlc3BKc29uLnVzdWFyaW9JZCwgXCJHbG9ibyBJRFwiLCBcIk8gR2xvYm9cIik7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBUEkgZGUgYXV0b3JpemFjYW8gZGUgYWNlc3NvXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgZ2xiaWQpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8uZ29vZ2xlID0ge1xuICBpc0F1dGhvcml6ZWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZihzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpKXtcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKS5zdWJzY3JpcHRpb25Ub2tlbiwgXCJDb250YSBHb29nbGVcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSl7XG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCksIFwiQ29udGEgR29vZ2xlXCIsIFwiR29vZ2xlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGlzU3BlY2lmaWNHb29nbGVVc2VyOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8uZ29vZ2xlLmlzQXV0aG9yaXplZCgpKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dHJ5e1xuXHRcdFx0dmFyIG9HbG9ib0J1c2luZXNzID0gbmV3IE9HbG9ib0J1c2luZXNzKCk7XG5cdFx0XHRvR2xvYm9CdXNpbmVzcy52ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkKHN3Z0VudGl0bGVtZW50cyk7XG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJFcnJvIGFvIGV4ZWN1dGFyIG8gQWxkZWJhcmFuXCIsIFwiRXJyb3I6IFwiICsgZXJyb3IgKyBcIiAtIEVudGl0bGVtZW50czogXCIgKyBzd2dFbnRpdGxlbWVudHMuZW50aXRsZW1lbnRzWzBdLnN1YnNjcmlwdGlvblRva2VuKTtcblx0XHR9XG5cdH0sXG5cblx0c2hvd1NhdmVTdWJzY3JpcHRpb246IGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRpZighc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkgJiYgcmVzcG9uc2UubW90aXZvID09PVwiQVVUT1JJWkFET1wiICYmICFIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLlNBVkVfU1VCU0NSSVBUSU9OKSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cbn07XG5cblBpYW5vLmF1dGVudGljYWNhbyA9IHtcblx0aXNMb2dhZG9DYWR1bjogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xuXHRcdGlmICghZ2xiaWQpIHtcblx0XHRcdGlmICh1dHApIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0cmV0dXJuIGdsYmlkICE9ICcnO1xuXHR9LFxuXHR2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG86IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcblx0XHRpZiAoUGlhbm8uYXV0ZW50aWNhY2FvLmlzTG9nYWRvQ2FkdW4oZ2xiaWQsIHV0cCkpIHtcblx0XHRcdGlmICh1dHApIHtcblx0XHRcdFx0dmFyIF9sZWl0b3IgPSBKU09OLnBhcnNlKGRlY29kZVVSSShhdG9iKHV0cCkpKTtcblx0XHRcdFx0aWYgKGdsYmlkID09IF9sZWl0b3IuZ2xiaWQgJiYgKHR5cGVvZiBfbGVpdG9yLnByb2R1dG8gPT0gXCJ1bmRlZmluZWRcIiB8fCBfbGVpdG9yLnByb2R1dG8gPT0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpKSB7XG5cdFx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhfbGVpdG9yLmF1dG9yaXphZG8sIF9sZWl0b3IubW90aXZvLCBfbGVpdG9yLmxvZ2FkbywgX2xlaXRvci50ZW1UZXJtb0RlVXNvKTtcblx0XHRcdFx0XHRpZihfbGVpdG9yLmF1dG9yaXphZG8pe1xuXHRcdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhfbGVpdG9yLnV1aWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0XHR9XG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvKGdsYmlkKTtcblx0XHR9XG5cdH0sXG5cdGlzQXV0b3JpemFkbzogZnVuY3Rpb24odGVybW9EZVVzbywgbW90aXZvLCBhdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXHRcdGlmIChhdXRvcml6YWRvIHx8IG1vdGl2byA9PSBcImluZGlzcG9uaXZlbFwiIHx8IHRlcm1vRGVVc28gIT0gZmFsc2UpIHtcblx0XHRcdGlmIChhdXRvcml6YWRvICYmIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSBQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZShocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZWZpbmVVc3VhcmlvUGlhbm86ZnVuY3Rpb24oYXV0b3JpemFkbywgbW90aXZvLCBsb2dhZG8sIHRlbVRlcm1vRGVVc28pe1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhdXRvcml6YWRvXCIsIGF1dG9yaXphZG9dKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibW90aXZvXCIsIG1vdGl2b10pO1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJsb2dhZG9cIiwgbG9nYWRvXSk7XG5cdFx0aWYodGVtVGVybW9EZVVzbyAhPSBcIiBcIilcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ0ZW1UZXJtb1wiLCB0ZW1UZXJtb0RlVXNvXSk7XG5cdH1cbn07XG5cblBpYW5vLnV0aWwgPSB7XG5cdGlzU2VjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09PSAnc2VjdGlvbicgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdHRlbVZhcmlhdmVpc09icmlnYXRvcmlhczogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCB0aXBvQ29udGV1ZG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCBub21lUHJvZHV0b1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0ZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmw6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XG5cdFx0dmFyIGNoYXZlc0NhbXBhbmhhID0gWyd1dG1fbWVkaXVtJywndXRtX3NvdXJjZSddO1xuXHRcdHZhciB2YWxvcmVzQ2FtcGFuaGEgPSBbXTtcblxuXHRcdGZvciAodmFyIGlkeFBhcmFtQ2FtcGFuaGEgPSAwOyBpZHhQYXJhbUNhbXBhbmhhIDwgY2hhdmVzQ2FtcGFuaGEubGVuZ3RoOyBpZHhQYXJhbUNhbXBhbmhhKyspIHtcblx0XHRcdHZhciBjaGF2ZUNhbXBhbmhhID0gY2hhdmVzQ2FtcGFuaGFbaWR4UGFyYW1DYW1wYW5oYV07XG5cdFx0XHRpZiAodXJsLmluZGV4T2YoY2hhdmVDYW1wYW5oYSArICc9JykgIT0gLTEpIHtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBjaGF2ZUNhbXBhbmhhICsgXCI9KFteJiNdKilcIik7XG5cdFx0XHRcdHZhciB2YWxvckNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHRcdFx0aWYodmFsb3JDYW1wYW5oYSl7XG5cdFx0XHRcdFx0dmFsb3Jlc0NhbXBhbmhhLnB1c2godmFsb3JDYW1wYW5oYSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbG9yZXNDYW1wYW5oYS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidXRtXCIsIHZhbG9yZXNDYW1wYW5oYS5qb2luKFwiO1wiKV0pO1xuXHRcdH1cblx0XHRpZiAodXJsLmluZGV4T2YoJ3V0bV9jYW1wYWlnbj0nKSAhPSAtMSkge1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcInV0bV9jYW1wYWlnbj0oXFxcXHcrKVwiKTtcblx0XHRcdHZhciBjYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XG5cdFx0XHRpZihjYW1wYW5oYSl7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjYW1wYW5oYVwiLCBjYW1wYW5oYV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aXNPcmlnZW1CdXNjYWRvcjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIHJlZ2V4Um9ib3MgPSBuZXcgUmVnRXhwKFwiKGlhX2FyY2hpdmVyKXwoR29vZ2xlYm90KXwoTWVkaWFwYXJ0bmVycy1Hb29nbGUpfChBZHNCb3QtR29vZ2xlKXwobXNuYm90KXwoWWFob28hIFNsdXJwKXwoWnlCb3JnKXwoQXNrIEplZXZlcy9UZW9tYSl8KGJpbmdib3QpfChjWGVuc2Vib3QpXCIpO1xuXHRcdHZhciBlaFJvYm8gPSByZWdleFJvYm9zLnRlc3QodXNlckFnZW50KTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYnVzY2Fkb3JcIiwgZWhSb2JvXSk7XG5cdFx0cmV0dXJuIGVoUm9ibztcblx0fSxcblx0bW9udGFVcmxTdGc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpICE9ICdwcmQnID8gJy1zdGcnIDogJyc7XG5cdH0sXG5cdHRlbVBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbU5hbWUpIHtcblx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcblx0XHRyZXR1cm4gcGFyYW1ldHJvcy5pbmRleE9mKHBhcmFtTmFtZSkgIT0gLTEgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldFZhbG9yUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtZXRybykge1xuXHRcdGlmIChQaWFuby51dGlsLnRlbVBhcmFtZXRyb05hVXJsKHBhcmFtZXRybykpIHtcblx0XHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBwYXJhbWV0cm8gKyBcIj0oW14mI10qKVwiKTtcblx0XHRcdHJldHVybiBwYXJhbWV0cm9zLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuIFwic2VtIHBhcmFtZXRyb1wiO1xuXHR9LFxuXHRpc0RlYnVnOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHO1xuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGlzRG9taW5pb09HbG9ibzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIjovLyguKj8pL1wiKSwgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKTtcblx0XHRpZiAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwib2dsb2JvXCIpID4gLTEgfHwgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImdsb2JvaVwiKSA+IC0xICYmIHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImVkZ1wiKSA9PSAtMSkpIHtcblx0XHRcdHJldHVybiB1cmwubWF0Y2gocmVnZXgpWzFdO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH0sXG5cdGNhbGxiYWNrTWV0ZXI6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcoZmFsc2UpO1xuXHR9LFxuXHRjYWxsYmFja01ldGVyRXhwaXJlZDogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XG5cdFx0d2luZG93LnJlZ3Jhc1RpbnkgPSBtZXRlckRhdGE7XG5cdFx0UGlhbm8udmFyaWF2ZWlzLmlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkID0gdHJ1ZTtcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KHRydWUpO1xuXHR9LFxuXHRnZXRXaW5kb3dMb2NhdGlvblNlYXJjaDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0fSxcblx0Z2V0V2luZG93TG9jYXRpb25IcmVmOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0fSxcblx0YWRpY2lvbmFyQ3NzOiBmdW5jdGlvbihjc3NQYXRoKXtcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGUuaW5uZXJIVE1MID0gY3NzUGF0aDtcblx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlLCBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG5cdH0sXG5cdGlzUmV2aXN0YTogZnVuY3Rpb24oKXtcblx0XHR2YXIgcmV2aXN0YXMgPSBbXCJlcG9jYVwiLCBcImF1dG8tZXNwb3J0ZVwiLCBcInZvZ3VlXCIsIFwiZ2xhbW91clwiLCBcImNhc2Etdm9ndWVcIiwgXCJtYXJpZS1jbGFpcmVcIiwgXCJjYXNhLWUtamFyZGltXCIsIFwicXVlbS1hY29udGVjZVwiLCBcImdsb2JvLXJ1cmFsXCIsIFwiZ3FcIiwgXCJtb25ldFwiLCAnY3Jlc2NlcicsJ2dhbGlsZXUnXTtcblx0XHRpZihyZXZpc3Rhcy5pbmRleE9mKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSA+IC0xKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRyZWNhcnJlZ2FQaWFubzogZnVuY3Rpb24gKHRpcG9Db250ZXVkbywgaXNFeGNsdXNpdm8sIG5vbWVQcm9kdXRvKSB7XG5cdFx0d2luZG93LnRpcG9Db250ZXVkb1BpYW5vID0gdGlwb0NvbnRldWRvO1xuXHRcdHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA9IGlzRXhjbHVzaXZvO1xuXHRcdHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID0gbm9tZVByb2R1dG87XG5cblx0XHRpZiAodHlwZW9mIHdpbmRvdy5yZWdyYXNUaW55ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gXCJcIjtcblx0XHR9XG5cdFx0d2luZG93W1widHBcIl0gPSBbXVxuXHRcdFBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0bG9hZFBpYW5vRXhwZXJpZW5jZXMoKTtcblxuXHRcdGNoZWNrRXhwZXJpZW5jZXNIYXNDaGFuZ2UoKVxuXHRcdC50aGVuKGNoYW5nZWQgPT4ge1xuXHRcdFx0aWYoY2hhbmdlZCkge1xuXHRcdFx0XHRhbmFseXRpY2FsQmxvY2tlZEZvclBpYW5vKClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFuYWx5dGljYWxVbmJsb2NrZWRGb3JQaWFubygpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblx0aXNWYWxvcjogZnVuY3Rpb24gKCkge1xuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSBcInZhbG9yXCIpXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cblBpYW5vLmNvbmZpZ3VyYWNhbyA9IHtcblx0anNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzOiB7XG5cdFx0J2ludCc6IHtcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J2RYdTdkdkZLUmknLFxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidNY3RGZ1JDRXN1Jyxcblx0XHRcdCdzZXRTYW5kQm94JzondHJ1ZScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9zYW5kYm94LnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPWRYdTdkdkZLUmknLFxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9zYW5kYm94LnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPU1jdEZnUkNFc3UnLFxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGlxbHQtaWcuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXG5cdFx0fSxcblx0XHQncWx0Jzp7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6Jyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vJyxcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcblx0XHR9LFxuXHRcdCdwcmQnOntcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J0dUQ29wSURjNXonLFxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcblx0XHRcdCdzZXRTYW5kQm94JzonZmFsc2UnLFxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1HVENvcElEYzV6Jyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEub2dsb2JvLmdsb2JvLmNvbS8nLFxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xuXHRcdH1cblx0fVxufTtcblxuUGlhbm8uY29uc3RydXRvciA9IHtcblx0aW5pdFRwOiBmdW5jdGlvbigpIHtcblx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJJbmljaW8gSW5pdFRwXCIpO1xuXHRcdHRwID0gd2luZG93W1widHBcIl0gfHwgW107XG5cdFx0dHAucHVzaChbXCJzZXRUYWdzXCIsIFtQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKV1dKTtcblx0XHRpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSB8fCBQaWFuby51dGlsLmlzVmFsb3IoKSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRBaWRcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5pZFNhbmRib3hUaW55cGFzc1JldmlzdGFzXSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dHAucHVzaChbXCJzZXRBaWRcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5pZFNhbmRib3hUaW55cGFzc10pO1xuXHRcdH1cblx0XHR0cC5wdXNoKFtcInNldFNhbmRib3hcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS5zZXRTYW5kQm94XSk7XG5cdFx0dHAucHVzaChbXCJzZXREZWJ1Z1wiLCBQaWFuby51dGlsLmlzRGVidWcoKV0pO1xuXHRcdHZhciBjbGVhbl91cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpLnNwbGl0KFwiP1wiKVswXTtcblx0XHR0cC5wdXNoKFtcInNldFBhZ2VVUkxcIixjbGVhbl91cmxdKTtcblx0XHR0cC5wdXNoKFtcInNldFpvbmVcIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibm9tZVByb2R1dG9cIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcblx0XHRQaWFuby5qYW5lbGFBbm9uaW1hLmRldGVjdFByaXZhdGVNb2RlKGZ1bmN0aW9uIChpc19wcml2YXRlKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYW5vbmltb1wiLCBpc19wcml2YXRlXSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoUGlhbm8udmFyaWF2ZWlzLmlzQ29udGV1ZG9FeGNsdXNpdm8oKSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNvbnRldWRvRXhjbHVzaXZvXCIsIHRydWVdKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHR5cGVvZiBzd2dFbnRpdGxlbWVudHMgIT09ICd1bmRlZmluZWQnICYmIHN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpKSApIHtcblx0XHRcdFBpYW5vLmdvb2dsZS5pc1NwZWNpZmljR29vZ2xlVXNlcihzd2dFbnRpdGxlbWVudHMpO1xuXHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLFwiQVVUT1JJWkFET1wiLCB0cnVlLCBcIlwiKTtcblx0XHR9ZWxzZXtcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby52ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8oSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuR0NPTSksIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCkpO1xuXHRcdH1cblxuXHRcdFBpYW5vLnJlZ2lvbmFsaXphY2FvLmdldFJlZ2lvbigpO1xuXHRcdFBpYW5vLmtydXgub2J0ZW1TZWdtZW50YWNhbygpO1xuXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImJhbm5lckNvbnRhZG9yTGlnYWRvXCIsIHRydWVdKTtcblx0XHRQaWFuby51dGlsLmlzT3JpZ2VtQnVzY2Fkb3IoKSB8fCBQaWFuby51dGlsLmV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsKCk7XG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJBY3RpdmVcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyXSk7XG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJFeHBpcmVkXCIsIFBpYW5vLnV0aWwuY2FsbGJhY2tNZXRlckV4cGlyZWRdKTtcblx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJGaW0gSW5pdFRwXCIpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBsb2FkUGlhbm9FeHBlcmllbmNlcygpe1xuXHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdGEudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG5cdGEuYXN5bmMgPSB0cnVlO1xuXHRpZihQaWFuby51dGlsLmlzUmV2aXN0YSgpIHx8IFBpYW5vLnV0aWwuaXNWYWxvcigpKSB7XG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFub1JldmlzdGFzO1xuXHR9IGVsc2Uge1xuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm87XG5cdH1cblxuXHR2YXIgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuXG5cdGIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgYik7XG5cdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBQaWFub1wiLCBcIlNjcmlwdCBhZGljaW9uYWRvXCIpO1xufVxuXG5mdW5jdGlvbiBwaWFub0luaXQoKSB7XG5cdHdpbmRvdy5QaWFuby5jaGVja1BpYW5vQWN0aXZlKClcblxuXHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy50aW55KVxuXHRcdGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kJywgJ3BpYW5vSW5pdCcpXG5cbiAgICBpZiAod2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbCkge1xuXHRcdHdpbmRvdy5TV0cucHVzaCgoc3Vic2NyaXB0aW9ucykgPT4ge1xuXHRcdFx0aWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKVxuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9nLXN1YnNjcmlwdGlvbnMnLCBzdWJzY3JpcHRpb25zKVxuXG5cdFx0XHRzd2cgPSBzdWJzY3JpcHRpb25zO1xuXG5cdFx0XHRzdWJzY3JpcHRpb25zLnNldE9uRW50aXRsZW1lbnRzUmVzcG9uc2UoZW50aXRsZW1lbnRzUHJvbWlzZSA9PiB7XG5cdFx0XHRcdGVudGl0bGVtZW50c1Byb21pc2UudGhlbihlbnRpdGxlbWVudHMgPT4ge1xuXHRcdFx0XHRcdHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSBlbnRpdGxlbWVudHM7XG5cblx0XHRcdFx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gU1dHXCIsIFwiRW50aXRsZW1lbnRzIHJlY2ViaWRvc1wiKTtcblxuXHRcdFx0XHRcdGlmICh3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0XHRcdFx0XHRcdGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXRjaChlcnJvcil7XG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiUGlhbm8gbmFvIGZvaSBjYXJyZWdhZGEgY29ycmV0YW1lbnRlIVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgR0Euc2V0RXZlbnRzRXJyb3IoXCJFbnRpdGxlbWVudHMgbsOjbyBjYXJyZWdhZG9cIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmKHdpbmRvdy50aW55Q3B0LlBpYW5vLnV0aWwudGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzKCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG4gICAgICAgICAgICBsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB0aW55SW5pdCgpIHtcblx0VGlueS5zZXRQaWFubyhQaWFubyk7XG4gICAgY29uc3QgU3dnID0gbmV3IFN3Z01vZHVsZSgpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgU3dnLmluaXQoKTtcblx0fVxuXHRjYXRjaChlKSB7IGNvbnNvbGUuZXJyb3IoZSkgfVxuXG5cdHBpYW5vSW5pdCgpO1xufTtcblxudGlueUluaXQoKTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=