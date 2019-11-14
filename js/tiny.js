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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwtZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJGYiIsImRhdGEiLCJkZWJ1ZyIsIndpbmRvdyIsInRpbnlDcHQiLCJkaXNhYmxlZCIsImZiIiwiaGFzUGl4ZWwiLCJwaXhlbCIsIm5hbWUiLCJpc0RlZmluZWQiLCJmYnEiLCJHQSIsImdhIiwiUHJvZHVjdHMiLCJQcm9kdWN0c01vZHVsZSIsImRhdGFMYXllciIsImlzUHJvZHVjdFZhbG9yIiwiX2dhcSIsImFjdGlvbiIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkhlbHBlcnMiLCJwcm9wIiwiY19uYW1lIiwidmFsdWUiLCJleHBpcmVkYXlzIiwiZXhkYXRlIiwiRGF0ZSIsImhvc3RuYW1lIiwibG9jYXRpb24iLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRvY3VtZW50IiwiY29va2llIiwiZXNjYXBlIiwidG9VVENTdHJpbmciLCJzcGxpdCIsInJldmVyc2UiLCJtYXRjaCIsIlJlZ0V4cCIsImNvb2tpZVRpbnkiLCJ1bmVzY2FwZSIsInRvU3RyaW5nIiwiUGlhbm8iLCJjb250ZW50Iiwic2V0RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VOYW1lIiwiZXhwZXJpZW5jZSIsInJlZ3Jhc1RpbnkiLCJub21lRXhwZXJpZW5jaWEiLCJzdWJzZWdtZW50YWNhb1BpYW5vIiwic2V0Q29va2llIiwidmFyaWF2ZWlzIiwiY29uc3RhbnRlIiwiVVRQIiwicHJvZHVjdE5hbWUiLCJub21lUHJvZHV0b1BpYW5vIiwicHJvZHVjdHNTZXR0aW5ncyIsIlByb2R1Y3QiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9kdWN0c0lkIiwiaWQiLCJTd2ciLCJTV0ciLCJzd2dFbnRpdGxlbWVudHMiLCJzd2ciLCJsb2NhbFByb2R1Y3RQaWFubyIsImhhc1Byb2R1Y3RKU09OIiwicHJvZHVjdEpTT04iLCJlbEhlYWQiLCJoZWFkIiwic2V0R2xvYmFsU1dHIiwiZ2xvYmFsIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyaW5nIiwidXRtc1Byb3BzIiwiZ2xiUGF5d2FsbCIsInV0bXMiLCJmb3JFYWNoIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwic2V0Iiwic3Vic2NyaWJlIiwidXJsIiwiaXNQcm9kdWN0aW9uIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldFByb2R1Y3RzIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZmlsdGVyIiwicGlhbm9Qcm9kdWN0TmFtZSIsIm9iaiIsInByb3BzVG9SZW1vdmUiLCJuZXdPYmoiLCJlbGVtZW50IiwiZ2V0UHJvZHVjdCIsInJlbW92ZVByb3BlcnRpZXMiLCJrZXlzIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcmt1cFRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lckhUTUwiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJzcmMiLCJ1cmxQcm9kIiwidXJsU3RnIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0TWFya3VwIiwic2V0U3dnU2NyaXB0Iiwic2V0QWxkZWJhcmFuU2NyaXB0IiwidGVzdFNXRyIsIlRpbnkiLCJoYXNQYXl3YWxsIiwidHAiLCJQYXl3YWxsQW5hbHl0aWNzIiwic2V0R2xvYmFsVGlueSIsInNldEdsb2JhbCIsImluaXQiLCJkZWZhdWx0U2V0dGluZ3MiLCJ0aW55IiwicGF5d2FsbCIsImFtYmllbnRlVXRpbGl6YWRvUGlhbm8iLCJQYXl3YWxsR0FNb2R1bGUiLCJQaWFub01vZHVsZSIsIkdBTW9kdWxlIiwibWV0cmljcyIsInBheXdhbGxUeXBlIiwiX1BpYW5vIiwic2V0RXZlbnRzIiwiUlRJRVgiLCJyZXNldFV0cCIsImRhdGFzZXQiLCJnYVJlc2V0dXRwIiwiaW1hZ2VUb3AiLCJnYUltYWdlUG9zaXRpb24iLCJnYUxhYmVsIiwiZXZlbnQiLCJldmVudG9HQUNhdGVnb3JpYSIsImV2ZW50b0dBQWNhbyIsImdhQWN0aW9uIiwiZXZlbnRvR0FSb3R1bG8iLCJldmVudG9HQVZhbG9yIiwiZXZlbnRvR0FJbnRlcmFjYW8iLCJzZXREYXRhbGF5ZXIiLCJ0eXBlUGF5d2FsbCIsIlBheXdhbGxDcHQiLCJTd2dNb2R1bGUiLCJGQiIsIkZiTW9kdWxlIiwiZG9tYWluIiwic2V0VGVtcGxhdGVTZXR0aW5ncyIsIlBheXdhbGwiLCJjYWxsYmFjayIsInRlbXBsYXRlU2V0dGluZ3MiLCJ0ZW1wbGF0ZSIsImFzc2V0c1BhdGgiLCJkaXNwbGF5IiwicHJvZHVjdENsYXNzIiwidGl0bGUiLCJ0YXJnZXRCbGFuayIsInRvcE1vYmkiLCJ0b3BEZXNrIiwidG9wTGluayIsImxlZnRNb2JpIiwibGVmdERlc2siLCJsZWZ0TGluayIsInJpZ2h0TW9iaSIsInJpZ2h0RGVzayIsInJpZ2h0TGluayIsImhpZGVMb2dpbkFyZWEiLCJsb2dpblRleHQiLCJsb2dpblByZVRleHQiLCJsb2dpblRhZyIsImdldFVybExvZ2luUmVnaXN0ZXIiLCJjbGVhckxvZ2luQXJlYSIsInNldERlYnVnVGVtcGxhdGVTZXR0aW5ncyIsImVsQm9keSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJlbENwdCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRFbFdyYXBwZXIiLCJyZW1vdmUiLCJlbFRvUmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImJvZHkiLCJib2R5QWRqdXN0IiwicmVtb3ZlRWxlbWVudHMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjc3NNaW5pZmllZCIsImFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXl3YWxsTG9hZCIsImVsQ3B0V3JhcCIsInNldFRpbWVvdXQiLCJlbEJvZHlIZWlnaHQiLCJpbm5lckhlaWdodCIsImVsQ3B0V3JhcEhlaWdodCIsIm9mZnNldEhlaWdodCIsImN1cnJlbnRUb3AiLCJNYXRoIiwiYWJzIiwidG9wV2l0aEZ1bGxFbGVtZW50IiwidG9wIiwib3BhY2l0eSIsInpJbmRleCIsImV2dFdoZWVsIiwiZXZ0VG91Y2giLCJhY3RpdmVFdmVudHMiLCJzZXRQaXhlbFR5cGUiLCJjbGlja1RhcmdldHMiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzTG9naW4iLCJCb29sZWFuIiwiZ2V0QXR0cmlidXRlIiwiaXNVcmxTd2ciLCJpbmNsdWRlcyIsIm5vdEJsYW5rIiwiaHJlZlRhcmdldCIsInRyaWdnZXIiLCJzZXRVdG1zIiwiaHJlZiIsIm9wZW4iLCJiaW5kIiwibmV3dG9wIiwic3RlcCIsIm11bHRpcGxpZXIiLCJkZWx0YVkiLCJlbFRvcCIsInRvdWNoc3RhcnRZIiwidG91Y2hlbmRZIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5ZIiwiZGlmZiIsInVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvIiwidXJpIiwic2VydmljZUlkIiwiZ2V0U2Vydmljb0lkIiwic3RyIiwidXJsUmV0dXJuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0Q29kaWdvUHJvZHV0byIsImdldE5vbWVQcm9kdXRvIiwiZGVsYXlUaW1lciIsImNyZWF0ZVRlbXBsYXRlIiwidGVtcGxhdGVWYXJzIiwiVGlueU1vZHVsZSIsInNldEdsb2JhbFZhcnMiLCJhY3RpdmVQYXl3YWxsIiwiYW1iaWVudGVzQWNlaXRvcyIsInN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvIiwic3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkIiwiR0NPTSIsIkFNQklFTlRFIiwiU0FWRV9TVUJTQ1JJUFRJT04iLCJDUkVBVEVEX0dMT0JPSUQiLCJHTE9CT0lEX01FU1NBR0UiLCJtZXRyaWNhcyIsIkVWRU5UT19TRU1fQUNBTyIsIkVSUk8iLCJrcnV4IiwiU0VHTUVOVEFDT0VTIiwiS1JVWExJR0FETyIsInV0aWwiLCJJUCIsIkRFQlVHIiwiaXNDb250ZXVkb0V4Y2x1c2l2byIsImNvbnRldWRvRXhjbHVzaXZvIiwiZ2V0QW1iaWVudGVQaWFubyIsImluZGV4T2YiLCJnZXRWYWxvclBhcmFtZXRyb05hVXJsIiwiZ2V0Q29va2llIiwiZ2V0VGlwb0NvbnRldWRvUGlhbm8iLCJ0aXBvQ29udGV1ZG9QaWFubyIsImV4ZWN1dG91UGFnZXZpZXciLCJzZXRFdmVudHNFcnJvciIsImlzUmV2aXN0YSIsIm5vbWVQcm9kdXRvIiwiYXV0ZW50aWNhY2FvIiwiZGVmaW5lVXN1YXJpb1BpYW5vIiwiamFuZWxhQW5vbmltYSIsInJldHJ5IiwiaXNEb25lIiwibmV4dCIsImN1cnJlbnRfdHJpYWwiLCJtYXhfcmV0cnkiLCJpc190aW1lb3V0IiwiaXNJRTEwT3JMYXRlciIsInVzZXJfYWdlbnQiLCJ1YSIsImV4ZWMiLCJwYXJzZUludCIsImRldGVjdFByaXZhdGVNb2RlIiwiaXNfcHJpdmF0ZSIsIndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtIiwiVEVNUE9SQVJZIiwiZSIsImluZGV4ZWREQiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYiIsInJlYWR5U3RhdGUiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInRlbSIsImdldEl0ZW0iLCJsaWdhZG8iLCJwYXJhbWV0cm8iLCJ2YWxvclBhcmFtZXRybyIsIm9idGVtU2VnbWVudGFjYW8iLCJzZWdtZW50YWNvZXMiLCJpIiwicmVnaW9uYWxpemFjYW8iLCJnZXRSZWdpb24iLCJrcnV4R2VvIiwia2V5IiwiZW52aWFFdmVudG9zR0EiLCJfR0FBY2FvIiwiX0dBUm90dWxvIiwibW9udGFSb3R1bG9HQSIsInNldExpbWl0ZUNvbnRhZ2VtIiwiX0dBTGltaXRlIiwiX0dBQ29udGFnZW0iLCJ2aWV3cyIsIm1heFZpZXdzIiwiaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyIiwicmVncmFzIiwicGFzc2FnZW0iLCJmbHV4byIsImV4ZWN1dGFBcG9zUGFnZXZpZXciLCJleHBpcm91IiwidHBDb250ZXh0Iiwic2V0YVZhcmlhdmVpcyIsImlkTG9naW4iLCJ0aXBvTG9naW4iLCJhc3NpbmF0dXJhTG9nYWRhIiwiaWRMb2dpbkFzc2luYW50ZSIsInRpcG9Mb2dpbkFzc2luYW50ZSIsImJhbm5lciIsIm1vc3RyYXJGb290ZXIiLCJ2ZXJzYW8iLCJhZGljaW9uYXJDc3MiLCJtb250YVVybFN0ZyIsInhtbEh0dHBSZXF1ZXN0IiwiZ2VyYVNjcmlwdE5hUGFnaW5hIiwibW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlciIsIm1vc3RyYXJBdmF0YXJIZWFkZXIiLCJib3R0b21GaXhlZCIsInBhcmFtcyIsImdsYkJhbm5lckJvdHRvbSIsIm1vc3RyYXJTV0ciLCJjc3MiLCJzY3JpcHRKcyIsIm1vc3RyYXJIaWdobGlnaHRTYWxlIiwibW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yIiwicmVnaXN0ZXIiLCJtb3N0cmFyQmFycmVpcmEiLCJoZWxwZXIiLCJyZWRpcmVjaW9uYXJCYXJyZWlyYSIsInNob3ciLCJ3YXJuIiwidHJpZ2dlckFkdmVydGlzaW5nIiwiZXJyb3IiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjaGVja1BheXdhbGwiLCJjaGVja0dhdGUiLCJoYXNHYXRlIiwiaGFzUHViIiwicmVnaXN0ZXJQYXl3YWxsIiwidGlwbyIsInN0YXR1cyIsImNvbXVuaWNhZG8iLCJtb3N0cmFySW5mb3JtYWNhbyIsImFkYmxvY2siLCJtb3N0cmFyQWRCbG9jayIsImdsYkFkYmxvY2siLCJibG9xdWVpb3MiLCJsaWJlcmFyRXNjIiwiYmxvcXVlaWFWaWV3TW9kZSIsInBhcmNlaXJvIiwibW9zdHJhRm9vdGVyUGFyY2Vpcm8iLCJpbmFkaW1wbGVudGUiLCJnZXRMaW5rQXNzaW5hdHVyYSIsImxpbmsiLCJyZWwiLCJ1cmxTY3JpcHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb3N0YSIsInJlc3BvbnNlVGV4dCIsImFwcGVuZERlU2NyaXB0IiwiYXBwZW5kQ2hpbGQiLCJzdGF0dXNUZXh0IiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXNwSnNvbiIsInBhcnNlIiwic2l0dWFjYW9QYWdhbWVudG8iLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvIiwiZ2xiaWQiLCJjb2RpZ29Qcm9kdXRvIiwiY29uZmlndXJhY2FvIiwianNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzIiwidXJsVmVyaWZpY2FMZWl0b3IiLCJyZXNwb3N0YURlVGVybW9EZVVzbyIsInJlc3Bvc3RhRGVNb3Rpdm8iLCJtb3Rpdm8iLCJ0ZW1UZXJtb0RlVXNvIiwiaXNBdXRvcml6YWRvIiwiYXV0b3JpemFkbyIsIl9qc29uTGVpdG9yIiwidXN1YXJpb0lkIiwiYnRvYSIsImVuY29kZVVSSSIsImdvb2dsZSIsInNob3dTYXZlU3Vic2NyaXB0aW9uIiwic3dnU2VydmljZSIsIlN3Z1NlcnZpY2UiLCJzYXZlR2xvYm9TdWJzY3JpcHRpb24iLCJpc0F1dGhvcml6ZWQiLCJnZXRFbnRpdGxlbWVudEZvclNvdXJjZSIsInN1YnNjcmlwdGlvblRva2VuIiwiaXNTcGVjaWZpY0dvb2dsZVVzZXIiLCJvR2xvYm9CdXNpbmVzcyIsIk9HbG9ib0J1c2luZXNzIiwidmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZCIsImVudGl0bGVtZW50cyIsInJlc3BvbnNlIiwiZW5hYmxlc1RoaXMiLCJpc0xvZ2Fkb0NhZHVuIiwidXRwIiwidmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvIiwiX2xlaXRvciIsImRlY29kZVVSSSIsImF0b2IiLCJwcm9kdXRvIiwibG9nYWRvIiwidXVpZCIsInRlcm1vRGVVc28iLCJpc1NlY3Rpb24iLCJ0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMiLCJleHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCIsImdldFdpbmRvd0xvY2F0aW9uU2VhcmNoIiwiY2hhdmVzQ2FtcGFuaGEiLCJ2YWxvcmVzQ2FtcGFuaGEiLCJpZHhQYXJhbUNhbXBhbmhhIiwiY2hhdmVDYW1wYW5oYSIsInJlZ2V4IiwidmFsb3JDYW1wYW5oYSIsImpvaW4iLCJjYW1wYW5oYSIsImlzT3JpZ2VtQnVzY2Fkb3IiLCJyZWdleFJvYm9zIiwiZWhSb2JvIiwidGVtUGFyYW1ldHJvTmFVcmwiLCJwYXJhbU5hbWUiLCJwYXJhbWV0cm9zIiwiaXNEZWJ1ZyIsImlzRG9taW5pb09HbG9ibyIsImdldFdpbmRvd0xvY2F0aW9uSHJlZiIsImNhbGxiYWNrTWV0ZXIiLCJtZXRlckRhdGEiLCJjYWxsYmFja01ldGVyRXhwaXJlZCIsImNzc1BhdGgiLCJpbnNlcnRCZWZvcmUiLCJsYXN0Q2hpbGQiLCJyZXZpc3RhcyIsInJlY2FycmVnYVBpYW5vIiwidGlwb0NvbnRldWRvIiwiaXNFeGNsdXNpdm8iLCJjb25zdHJ1dG9yIiwiaW5pdFRwIiwiZXhlY3V0ZSIsImlzVmFsb3IiLCJpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzIiwiaWRTYW5kYm94VGlueXBhc3MiLCJzZXRTYW5kQm94IiwiY2xlYW5fdXJsIiwibG9hZFBpYW5vRXhwZXJpZW5jZXMiLCJhIiwiYXN5bmMiLCJ1cmxTYW5kYm94UGlhbm9SZXZpc3RhcyIsInVybFNhbmRib3hQaWFubyIsImIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJwaWFub0luaXQiLCJzdWJzY3JpcHRpb25zIiwic2V0T25FbnRpdGxlbWVudHNSZXNwb25zZSIsImVudGl0bGVtZW50c1Byb21pc2UiLCJ0aW55SW5pdCIsInNldFBpYW5vIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICdlcG9jYSc6IHtcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2F1dG8tZXNwb3J0ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnYXV0by1lc3BvcnRlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICd2b2d1ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAndm9ndWUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2dsYW1vdXInOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dsYW1vdXInLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2Nhc2Etdm9ndWUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2Nhc2Etdm9ndWUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ21hcmllLWNsYWlyZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnbWFyaWUtY2xhaXJlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdjYXNhLWUtamFyZGltJzoge1xuICAgICdjb2RfcHJvZCc6ICdjYXNhLWphcmRpbScsXG4gICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdxdWVtLWFjb250ZWNlJzoge1xuICAgICdjb2RfcHJvZCc6ICdxdWVtJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdlcG9jYS1uZWdvY2lvcyc6IHtcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EtbmVnb2Npb3MnLFxuICAgICdpZCc6ICcwMDAwJ1xuICAgIH0sXG4gICAgJ2dsb2JvLXJ1cmFsJzoge1xuICAgICdjb2RfcHJvZCc6ICdnbG9iby1ydXJhbCcsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAncGVnbic6IHtcbiAgICAnY29kX3Byb2QnOiAncGVxdWVuYXMtZW1wcmVzYXMnLFxuICAgICdpZCc6ICcwMDAwJ1xuICAgIH0sXG4gICAgJ2dhbGlsZXUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dhbGlsZXUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2NyZXNjZXInOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2NyZXNjZXInLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2dxJzoge1xuICAgICdjb2RfcHJvZCc6ICdncScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnbW9uZXQnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ21vbmV0JyxcbiAgICAnaWQnOiAnNjYxOCdcbiAgICB9LFxuICAgICdvZ2xvYm8nOiB7XG4gICAgJ2NvZF9wcm9kJzogJ09HMDMnLFxuICAgICdpZCc6ICczOTgxJ1xuICAgIH0sXG4gICAgJ2Jsb2dzJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdrb2d1dCc6IHtcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXG4gICAgJ2lkJzogJzM5ODEnXG4gICAgfSxcbiAgICAnYWNlcnZvJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzA0JyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdqb3JuYWxkaWdpdGFsJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAxJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICd2YWxvcic6IHtcbiAgICAnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJyxcbiAgICAnaWQnOiAnNjY2OCdcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1ZzsgXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYiA9IGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZmJxICE9PSAndW5kZWZpbmVkJykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0UGl4ZWxUeXBlKCkge1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGhhc1BpeGVsID0gKHR5cGVvZiB0aGlzLmZiLnBpeGVsLm5hbWUgIT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZmIucGl4ZWwubmFtZSA6IG51bGw7IFxuXG4gICAgICAgIGlmKHRoaXMuaXNEZWZpbmVkICYmIGhhc1BpeGVsKXtcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MTAyNzAwMzk1MjA2MzQnKTtcbiAgICAgICAgICAgIGZicSgndHJhY2tTaW5nbGUnLCAnNDEwMjcwMDM5NTIwNjM0JywgdGhpcy5mYi5waXhlbC5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0EgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcuZ2E7XG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcbiAgICB9XG4gICAgXG4gICAgc2V0R2xvYmFsVmFycygpIHtcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgIHx8IFtdOyBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IgJiYgdHlwZW9mIF9nYXEgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgd2luZG93Ll9nYXEgPSB3aW5kb3cuX2dhcSAgfHwgW107ICBcbiAgICB9XG5cbiAgICBzZXRFdmVudHMoYWN0aW9uLCBsYWJlbCwgY2F0ZWdvcnkgPSAnUGlhbm8nKSB7XG5cblx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYSlcblx0XHRcdGNvbnNvbGUubG9nKCdsb2ctZ2EtZXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbClcblxuICAgICAgICBpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XG5cdFx0XG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogY2F0ZWdvcnksICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcbiAgICB9XG4gICAgXG4gICAgc2V0RXZlbnRzRXJyb3IoYWN0aW9uLCBsYWJlbCkge1xuXHRcdGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8gRXJybycsIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XG5cblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8gRXJybycsICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcblx0fVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XG5cbiAgICBzdGF0aWMgaXNEZWZpbmVkKHByb3ApIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcHJvcCAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZTogZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldENvb2tpZShjX25hbWUsIHZhbHVlLCBleHBpcmVkYXlzID0gbnVsbCkge1xuICAgICAgICBsZXQgZXhkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IG51bGw7XG5cbiAgICAgICAgaWYoIWhvc3RuYW1lKSByZXR1cm47XG5cbiAgICAgICAgZXhkYXRlLnNldERhdGUoZXhkYXRlLmdldERhdGUoKSArIGV4cGlyZWRheXMpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArZXNjYXBlKHZhbHVlKSArICgoZXhwaXJlZGF5cykgPyBcIlwiIDogXCI7ZXhwaXJlcz1cIiArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKVxuICAgICAgICArIFwiOyBwYXRoPS87XCIgKyBcImRvbWFpbj0uXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVsxXSArIFwiLlwiICsgaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClbMF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENvb2tpZShuYW1lKSB7XG4gICAgICAgIGxldCBtYXRjaCA9IChkb2N1bWVudC5jb29raWUpID8gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAobmFtZSsnPShbXjtdKyknKSkgOiBmYWxzZTtcbiAgICAgICAgbGV0IGNvb2tpZVRpbnkgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzFdLnRvU3RyaW5nKCkpIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRpbnk7XG4gICAgfVxuICAgICAgICBcblxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpYW5vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXRFeHBlcmllbmNlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy50aW55Q3B0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gd2luZG93LnRpbnlDcHQuUGlhbm87XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0RXhwZXJpZW5jZSgpIHsgIFxuICAgICAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSAnJzsgICBcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UgPSB7fTsgIFxuICAgICAgICAgXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKVxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3JlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhfSAtICR7d2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm99YCA6IHJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIFxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3dpbmRvdy5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcbiAgICAgICBcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSA9IGV4cGVyaWVuY2VOYW1lO1xuXHR9XG5cbiAgICByZXNldFV0cCgpIHtcbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQpXG4gICAgICAgICAgICBIZWxwZXJzLnNldENvb2tpZSh0aGlzLmNvbnRlbnQudmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCAnJywgLTEpO1xuICAgIH1cbn1cbiIsImltcG9ydCBwcm9kdWN0c0lkIGZyb20gJy4uL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xuICAgIH1cblxuICAgIHNldEdsb2JhbCgpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIFByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3ROYW1lLFxuICAgICAgICAgICAgICAgIC8vIGlkOiB0aGlzLnByb2R1Y3RJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24ocHJvZHVjdHNTZXR0aW5ncywgd2luZG93LnRpbnlDcHQpIDogcHJvZHVjdHNTZXR0aW5nczsgXG4gICAgfVxuICAgIFxuICAgIGdldCBpc1Byb2R1Y3RWYWxvcigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb2R1Y3ROYW1lICYmIHRoaXMucHJvZHVjdE5hbWUgPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBwcm9kdWN0SWQoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKCAodHlwZW9mIHByb2R1Y3RzSWRbdGhpcy5wcm9kdWN0TmFtZV0gIT09ICAndW5kZWZpbmVkJykgXG4gICAgICAgICYmICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCAhPT0gICd1bmRlZmluZWQnKSApXG4gICAgICAgID8gcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCA6IG51bGw7XG4gICAgICAgIFxuICAgIH1cblxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB3aW5kb3cuU1dHID0gd2luZG93LlNXRyB8fCBbXTsgLy9UT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGlzIHZhcmlhYmxlIGV4aXN0c1xuICAgICAgICB3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gd2luZG93LnN3Z0VudGl0bGVtZW50cyB8fCBudWxsO1xuICAgICAgICB0aGlzLmRlYnVnID0gKEhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgPyB3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vID0gKHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyBub21lUHJvZHV0b1BpYW5vIDogbnVsbDtcbiAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbEhlYWQgPSBkb2N1bWVudC5oZWFkOyBcblxuICAgICAgICB0aGlzLnNldEdsb2JhbFNXRygpO1xuICAgIH1cblxuICAgIGdldCBpc0RlZmluZWQoKSB7IFxuICAgICAgICByZXR1cm4gKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpID8gdHJ1ZSA6IGZhbHNlOyBcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxTV0coKSB7XG4gICAgICAgIGlmKCFIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpIHJldHVybjtcblxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cgPSB7XG4gICAgICAgICAgICBnbG9iYWw6ICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykgPyBzd2cgOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0VXRtcygpIHsgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgY29uc3QgdXRtc1Byb3BzID0gKHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgOiBudWxsOyBcblxuICAgICAgICB1dG1zUHJvcHMuZm9yRWFjaCgoaXRlbSkgPT4geyBcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgdXJsUGFyYW1zLnNldChgdXRtXyR7bmFtZX1gLCB2YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAnc2V0VXRtcycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgdXRtc1Byb3BzKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIGxvY2F0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmlzRGVmaW5lZCkgfHwgIXV0bXNQcm9wcyApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwuc3Vic2NyaWJlKCdici5jb20uaW5mb2dsb2JvLm9nbG9iby5zd2cuZ29vZ2xlJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiAgXG4gICAgICAgID8gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9wcm9kL3Byb2R1Y3RzLmpzb24nIFxuICAgICAgICA6ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF83YjBhNmRmNDk4OTU0NTlmYmFmZTQ5YTk2ZmNiNWJiZi9zd2cvZGV2L3Byb2R1Y3RzLmpzb24nO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3QoKSB7IFxuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnBpYW5vUHJvZHVjdE5hbWUgPT09IHRoaXMubG9jYWxQcm9kdWN0UGlhbm8gKVswXTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmVQcm9wZXJ0aWVzKG9iaikgeyBcbiAgICAgICAgY29uc3QgcHJvcHNUb1JlbW92ZSA9IFsncHJvZHVjdE5hbWUnLCAncGlhbm9Qcm9kdWN0TmFtZSddO1xuICAgICAgICBjb25zdCBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG4gICAgICAgIHByb3BzVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBuZXdPYmpbZWxlbWVudF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgYXN5bmMgbWFya3VwVGVtcGxhdGUoKSB7IFxuICAgICAgICBjb25zdCBwcm9kdWN0SlNPTiA9ICBhd2FpdCB0aGlzLnJlbW92ZVByb3BlcnRpZXMoYXdhaXQgdGhpcy5nZXRQcm9kdWN0KCkpIHx8IG51bGw7IFxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gT2JqZWN0LmtleXMocHJvZHVjdEpTT04pLmxlbmd0aCA/IEpTT04uc3RyaW5naWZ5KHByb2R1Y3RKU09OKSA6IG51bGw7XG5cbiAgICAgICAgaWYoIXByb2R1Y3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZih0aGlzLmRlYnVnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnbG9nLVNXRy1Qcm9kdWN0JzogcHJvZHVjdH0pO1xuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gYCR7IHByb2R1Y3QgfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZXRNYXJrdXAoKSB7IFxuICAgICAgICBhd2FpdCB0aGlzLm1hcmt1cFRlbXBsYXRlKCk7XG4gICAgICAgIGlmKCF0aGlzLnByb2R1Y3RKU09OKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgXG4gICAgICAgIGVsZW1lbnQudHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnByb2R1Y3RKU09OO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNldFN3Z1NjcmlwdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBlbGVtZW50LnNyYyA9ICdodHRwczovL25ld3MuZ29vZ2xlLmNvbS9zd2cvanMvdjEvc3dnLmpzJztcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzZXRBbGRlYmFyYW5TY3JpcHQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgdXJsUHJvZCA9ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF9jMTBhZTgxOWM1Njg0NjBiYjRlYzE3YzBhOGVjNTI2Ny9hbGRlYmFyYW4vanMvYnVuZGxlLmpzJztcbiAgICAgICAgY29uc3QgdXJsU3RnID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2FkZGM1ZThmMzE2ZjQ4ZWE5MTgxYWYzNzE2MGIyMmI0L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xuXG4gICAgICAgIGVsZW1lbnQuc3JjID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gdXJsUHJvZCA6IHVybFN0ZztcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0ZXN0U1dHKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LnN3Zykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsID0gd2luZG93LnN3ZztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdUaGVyZSBpc25cXCd0IHdpbmRvdy5zd2cnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xuICAgICAgICBhd2FpdCB0aGlzLnNldE1hcmt1cCgpOyAgXG4gICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuaGFzUHJvZHVjdEpTT04pIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3dnU2NyaXB0KCk7IFxuICAgICAgICBhd2FpdCB0aGlzLnNldEFsZGViYXJhblNjcmlwdCgpOyAgIFxuICAgICAgICBhd2FpdCB0aGlzLnRlc3RTV0coKTsgICAgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlueSAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcbiAgICAgICAgd2luZG93Lmhhc1BheXdhbGwgPSB3aW5kb3cuaGFzUGF5d2FsbCB8fCBmYWxzZTtcbiAgICAgICAgd2luZG93LnRwID0gd2luZG93LnRwIHx8IFtdO1xuICAgICAgICB3aW5kb3cuUGlhbm8gPSB3aW5kb3cuUGlhbm8gfHwge307XG4gICAgICAgIHdpbmRvdy5QYXl3YWxsQW5hbHl0aWNzID0gd2luZG93LlBheXdhbGxBbmFseXRpY3MgfHwge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldEdsb2JhbFRpbnkoKTtcbiAgICAgICAgdGhpcy5Qcm9kdWN0cy5zZXRHbG9iYWwoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgc2V0R2xvYmFsVGlueSgpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgICAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgICAgICB0aW55OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXl3YWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzd2c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGdhOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzUHJvZHVjdGlvbjogKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09PSAncHJkJykgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy50aW55Q3B0ID0gKHdpbmRvdy50aW55Q3B0KSA/ICBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgd2luZG93LnRpbnlDcHQpIDogZGVmYXVsdFNldHRpbmdzOyBcbiAgICB9XG4gICAgXG4gICAgc2V0UGlhbm8ob2JqKSB7XG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vID0gb2JqO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgfVxuXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vSGVscGVycyc7XG5pbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4uL0dBJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbEdBTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xuICAgIHRoaXMuR0EgPSBuZXcgR0FNb2R1bGUoKTsgXG5cbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tZXRyaWNzID0ge1xuICAgICAgICBwYXl3YWxsOiB7fSwgXG4gICAgICAgIGZiOiB7XG4gICAgICAgICAgICBwaXhlbDoge31cbiAgICAgICAgfSBcbiAgICB9O1xuXG4gICAgdGhpcy5wYXl3YWxsVHlwZSgpO1xuICB9XG5cbiAgcGF5d2FsbExvYWQoKSB7IFxuICAgIGlmKCF0aGlzLlBpYW5vLmlzRGVmaW5lZClcbiAgICAgIHJldHVybjtcblxuICAgIGNvbnN0IF9QaWFubyA9IHRoaXMuUGlhbm8uY29udGVudDtcblxuICAgIHRoaXMuR0Euc2V0RXZlbnRzKCdFeGliaWNhbyBSZWdpc3RlcicsIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUpO1xuICAgIEhlbHBlcnMuc2V0Q29va2llKF9QaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG4gIH1cblxuICB0cmlnZ2VyKGVsZW1lbnQpIHsgXG4gICAgaWYodGhpcy5kaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBcbiAgICBjb25zdCByZXNldFV0cCA9IGVsZW1lbnQuZGF0YXNldC5nYVJlc2V0dXRwIHx8IG51bGw7XG4gICAgY29uc3QgaW1hZ2VUb3AgPSBlbGVtZW50LmRhdGFzZXQuZ2FJbWFnZVBvc2l0aW9uO1xuICAgIGNvbnN0IGxhYmVsID0gKGltYWdlVG9wID09PSAndG9wJykgPyBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbCArIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsIDogZWxlbWVudC5kYXRhc2V0LmdhTGFiZWw7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZXZlbnQ6ICdFdmVudG9HQScsXG4gICAgICBldmVudG9HQUNhdGVnb3JpYTogdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSxcbiAgICAgIGV2ZW50b0dBQWNhbzogZWxlbWVudC5kYXRhc2V0LmdhQWN0aW9uIHx8IGFjdGlvbixcbiAgICAgIGV2ZW50b0dBUm90dWxvOiBsYWJlbCxcbiAgICAgIGV2ZW50b0dBVmFsb3I6IDAsXG4gICAgICBldmVudG9HQUludGVyYWNhbzogZmFsc2UsXG4gICAgfTsgXG5cbiAgICBpZiAocmVzZXRVdHApXG4gICAgICAgIHRoaXMuUGlhbm8ucmVzZXRVdHAoKTtcbiBcbiAgICB0aGlzLnNldERhdGFsYXllcihkYXRhKTtcbiAgfVxuXG4gIHBheXdhbGxUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSAoICh0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbCAhPT0gJ3VuZGVmaW5lZCcpICYmIHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsKSBcbiAgICAgID8gd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwudG9Mb3dlckNhc2UoKSBcbiAgICAgIDogJ3BheXdhbGwnO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgY29tdW0nO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdDYWRhc3RyZS1zZSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4Y2x1c2l2byc6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgZXhjbHVzaXZvJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld0xvZ2luRXhjbHVzaXZvJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXl3YWxsJzpcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdwYXl3YWxsJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1BheXdhbGxFeGNsdXNpdm8nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXREYXRhbGF5ZXIoZGF0YSA9IHt9KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IFBheXdhbGxHQU1vZHVsZSBmcm9tICcuL1BheXdhbGwtZ2EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuLi9Td2cnO1xuaW1wb3J0IEZiTW9kdWxlIGZyb20gJy4uL0ZCJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbENwdCAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG5cdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcblx0dGhpcy5HQSA9IG5ldyBQYXl3YWxsR0FNb2R1bGUoKTtcblx0dGhpcy5TV0cgPSBuZXcgU3dnTW9kdWxlKCk7XG5cdHRoaXMuRkIgPSBuZXcgRmJNb2R1bGUodGhpcy5HQS5tZXRyaWNzLmZiKTtcblxuXHR0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcblx0dGhpcy5kb21haW4gPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJztcdFxuXHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xuXHRcdHRoaXMuaW5pdCgpOyBcblx0fSk7XG5cblx0d2luZG93LlBheXdhbGxDcHQgPSB0aGlzO1xuXG5cdHdpbmRvdy50aW55Q3B0LlBheXdhbGwgPSB7XG5cdFx0ZG9tYWluOiB0aGlzLmRvbWFpbixcblx0XHRHQTogdGhpcy5HQS5tZXRyaWNzLFxuXHR9O1xuICB9XG5cbiAgc2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xuXHRcdFx0dGVtcGxhdGU6ICdkZWZhdWx0Jyxcblx0XHRcdGFzc2V0c1BhdGg6ICcnLFxuXHRcdFx0ZGlzcGxheTogbnVsbCxcblx0XHRcdHByb2R1Y3RDbGFzczogdHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnID8gYHBheXdhbGwtY3B0LSR7bm9tZVByb2R1dG9QaWFub31gIDogJ3BheXdhbGwtY3B0LW9nbG9ibycsXG5cdFx0XHR0aXRsZTogJ0Vzc2UgY29udGXDumRvIMOpIG8gdMOtdHVsby4nLFxuXHRcdFx0dGFyZ2V0Qmxhbms6IHRydWUsXG5cdFx0XHR0b3BNb2JpOiAnJyxcblx0XHRcdHRvcERlc2s6ICcnLFxuXHRcdFx0dG9wTGluazogJycsXG5cdFx0XHRsZWZ0TW9iaTogJycsXG5cdFx0XHRsZWZ0RGVzazogJycsXG5cdFx0XHRsZWZ0TGluazogJycsXG5cdFx0XHRyaWdodE1vYmk6ICcnLFxuXHRcdFx0cmlnaHREZXNrOiAnJyxcblx0XHRcdHJpZ2h0TGluazogJydcblx0XHR9O1xuXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5oaWRlTG9naW5BcmVhID0gZmFsc2U7XG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5sb2dpblRleHQgPSAnRmHDp2EgbG9naW4nO1xuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5QcmVUZXh0ID0gJ0rDoSBwb3NzdWkgY2FkYXN0cm8/Jztcblx0XHRcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9ICh3aW5kb3cuZ2xiUGF5d2FsbCkgPyAgT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVTZXR0aW5ncywgd2luZG93LmdsYlBheXdhbGwpIDogdGVtcGxhdGVTZXR0aW5nczsgXG5cdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSBgJHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblByZVRleHR9IDxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGRhdGEtaXMtbG9naW49XCJ0cnVlXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDIgLSBGYcOnYSBsb2dpblwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJmYWxzZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIgJHt3aW5kb3cuZ2xiUGF5d2FsbC50YXJnZXRCbGFua30gXCI+JHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRleHR9PC9hPmA7XG5cblx0XHRpZih3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhKVxuXHRcdFx0dGhpcy5jbGVhckxvZ2luQXJlYSgpO1xuXG5cdFx0aWYodGhpcy5kZWJ1ZyApIFxuXHRcdFx0dGhpcy5zZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKTtcblx0XHRcblx0XHRjYWxsYmFjaygpO1xuXHR9XG5cblx0Y2xlYXJMb2dpbkFyZWEoKSB7XG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwpIHsgXG5cdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9ICcnO1xuXHRcdH1cblx0fVxuXG5cdHNldERlYnVnVGVtcGxhdGVTZXR0aW5ncygpIHtcblx0XHRsZXQgb2JqID0ge307XG5cdFx0b2JqLnRvcE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTAnO1xuXHRcdG9iai50b3BEZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDR4MTI4Jztcblx0XHRvYmoudG9wTGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDEnO1xuXHRcdG9iai5sZWZ0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XG5cdFx0b2JqLmxlZnREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoubGVmdExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wyJztcblx0XHRvYmoucmlnaHRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcblx0XHRvYmoucmlnaHREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoucmlnaHRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMyc7XG5cblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5nbGJQYXl3YWxsLCBvYmopO1xuXHR9XG4gXG4gIGJvZHlBZGp1c3QoKSB7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nLCAnaW1wb3J0YW50Jyk7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcsICdpbXBvcnRhbnQnKTtcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJzEwMCUnLCAnaW1wb3J0YW50Jyk7XG4gIH1cblxuICBzZXRFbFdyYXBwZXIoKSB7XG5cdHRoaXMuZWxDcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQnKTtcbiAgfVxuXG4gIHJlbW92ZUVsZW1lbnRzKCkge1xuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xuXG5cdGlmKHRoaXMuZWxDcHQpXG5cdFx0dGhpcy5lbENwdC5yZW1vdmUoKTtcblxuXHRjb25zdCBlbFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3RlY3RlZC1jb250ZW50LCAjaW5mb2FydGUtbWFpbi1jb250ZW50Jyk7XG5cblx0ZWxUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHQgIGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xuICB9XG5cbiAgY3JlYXRlVGVtcGxhdGUoKSB7XG5cdHRoaXMuZWxCb2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmJvZHlBZGp1c3QoKTtcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRzKCk7XG5cdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpOyBcblx0dGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHRcbiAgICBcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1xuICAgICAgICB9KTtcblx0fVxuXG5cdHRoaXMuR0EucGF5d2FsbExvYWQoKTtcbiAgfVxuXG4gIGFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKSB7XG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XG5cdHRoaXMuZWxDcHRXcmFwID0gdGhpcy5lbENwdC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQtd3JhcCcpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGNvbnN0IGVsQm9keUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIDQ7XG5cdFx0Y29uc3QgZWxDcHRXcmFwSGVpZ2h0ID0gdGhpcy5lbENwdFdyYXAub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBjdXJyZW50VG9wID0gKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykgXG4gICAgICAgID8gTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yIClcbiAgICAgICAgOiBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKTtcblx0XHRjb25zdCB0b3BXaXRoRnVsbEVsZW1lbnQgPSAoZWxCb2R5SGVpZ2h0IC0gZWxDcHRXcmFwSGVpZ2h0KTtcblxuXHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7Y3VycmVudFRvcH1weGA7XG5cdFx0dGhpcy5lbENwdC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnpJbmRleCA9IDk5OTk5OTk5OTk7XG5cblx0XHR0aGlzLmV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XG5cdFx0dGhpcy5ldnRUb3VjaChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xuXHRcdHRoaXMuYWN0aXZlRXZlbnRzKCk7XG5cblx0XHR0aGlzLkZCLnNldFBpeGVsVHlwZSgpO1xuXHR9LCAxMDAwKTtcbiAgfVxuXG4gIGFjdGl2ZUV2ZW50cygpIHtcblx0Y29uc3QgY2xpY2tUYXJnZXRzID0gdGhpcy5lbENwdFdyYXAucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXG5cdGNsaWNrVGFyZ2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luID0gQm9vbGVhbihlbGVtZW50LmRhdGFzZXQuaXNMb2dpbikgfHwgZmFsc2U7XG5cdFx0XHRjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGZhbHNlIDsgXG5cdFx0XHRjb25zdCBpc1VybFN3ZyA9ICh1cmwpID8gdXJsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ29mZXJ0YXN3ZycpIDogZmFsc2U7XG5cdFx0XHRjb25zdCBub3RCbGFuayA9IGVsZW1lbnQuZGF0YXNldC5ocmVmVGFyZ2V0IHx8IHRydWU7IFxuXHRcdFx0XG5cdFx0XHR0aGlzLkdBLnRyaWdnZXIoZWxlbWVudCk7IFxuXG5cdFx0XHRpZighaXNMb2dpbiAmJiBpc1VybFN3Zylcblx0XHRcdFx0dGhpcy5TV0cuc2V0VXRtcygpOyAgXG5cbiAgICAgICAgICAgIGlmICh1cmwgJiYgIWlzVXJsU3dnKSB7IFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdEJsYW5rID8gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsKSA6IHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cblx0XHR9LmJpbmQodGhpcykpO1xuXHR9KTtcbiAgfVxuXG4gIGV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xuXHRsZXQgbmV3dG9wID0gY3VycmVudFRvcDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnd2hlZWwnLFxuXHRcdGZ1bmN0aW9uKGV2dCkgeyBcblx0XHQgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VG9wIC8gMTAwO1xuXHRcdCAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xuXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA+PSAxKSB7XG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCAtIHN0ZXAgKiBtdWx0aXBsaWVyOyBcblx0XHRcdG5ld3RvcCA9IGVsVG9wIDwgdG9wV2l0aEZ1bGxFbGVtZW50ID8gdG9wV2l0aEZ1bGxFbGVtZW50IDogZWxUb3A7XG4gIFxuXHRcdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuXHRcdCAgfVxuICBcblx0XHQgIGlmIChldnQuZGVsdGFZIDw9IC0xKSB7XG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCArIHN0ZXAgKiBtdWx0aXBsaWVyO1xuXHRcdFx0bmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xuICBcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcblx0XHQgIH1cblx0XHR9LmJpbmQodGhpcylcblx0ICApO1xuICB9XG5cbiAgZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KSB7XG4gICAgbGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XG4gICAgbGV0IHRvdWNoc3RhcnRZID0gMDtcbiAgICBsZXQgdG91Y2hlbmRZID0gMDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgdG91Y2hzdGFydFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xuICAgICAgICB0b3VjaGVuZFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcblxuICAgICAgICBpZiAodG91Y2hlbmRZIDwgdG91Y2hzdGFydFkpIHsgXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnModG91Y2hzdGFydFkpIC0gTWF0aC5hYnModG91Y2hlbmRZKTtcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gZGlmZjsgXG4gICAgICAgICAgICBuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xuXG4gICAgICAgICAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG91Y2hlbmRZID4gdG91Y2hzdGFydFkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaGVuZFkgLSB0b3VjaHN0YXJ0WTtcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wICsgZGlmZjsgXG5cdFx0ICAgIG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcblxuXHRcdCAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG4gICAgICAgIH1cblx0fS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XG5cdGNvbnN0IHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvID0gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnID8gJ2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnIDogJ2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnO1xuXHRjb25zdCB1cmkgPSBsb2NhdGlvbi5ocmVmO1xuXHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcblx0bGV0IHN0ciA9ICcnO1xuXHRsZXQgdXJsUmV0dXJuID0gJyc7XG5cblx0aWYoIXRoaXMuZGVidWcgJiYgdGhpcy5QaWFuby5pc0RlZmluZWQpIHtcblx0XHR1cmxSZXR1cm4gPSBlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxuXHRcdFx0KyAnJnNlcnZpY2VJZD0nICsgc2VydmljZUlkXG5cdFx0XHQrICcmYW1iaWVudGVVdGlsaXphZG89JyArIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vXG5cdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxuXHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxuXHRcdCk7XG5cblx0XHRpZih0eXBlID09PSAncmVnaXN0ZXInKSB7XG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1jYWRhc3Ryby8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4gIGdldCB0ZW1wbGF0ZVZhcnMoKSB7XG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbDtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXG5cdGNvbnN0IHRlbXBsYXRlID0gYFxuXHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdCAke3RoaXMudGVtcGxhdGVWYXJzLnByb2R1Y3RDbGFzc31cIj4gXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkXCI+XG5cdFx0XHQke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfVxuXHRcdDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RvcFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BMaW5rfVwiIGRhdGEtZ2EtaW1hZ2UtcG9zaXRpb249XCJ0b3BcIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgMSAtXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXIgJHt3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhID8gJ2lzLWhpZGUnIDogJyd9XCI+XG5cdFx0ICBcdCR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5UYWd9XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19sZWZ0XCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRMaW5rfVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA0IC0gQmFubmVyIG9mZXJ0YSBlc3F1ZXJkYVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3JpZ2h0XCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TGlua31cIiAgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDUgLSBCYW5uZXIgb2ZlcnRhIGRpcmVpdGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0ICA8L2Rpdj5cblx0ICBgO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcblx0ICByZXR1cm4gYDxzdHlsZT5cblx0ICAucGF5d2FsbC1jcHR7b3BhY2l0eTowO3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDB2dztvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYm94LXNoYWRvdzowIDAgNzBweCAwIHJnYmEoMCwwLDAsLjUpO2JveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZn0ucGF5d2FsbC1jcHQsLnBheXdhbGwtY3B0ICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2V9LnBheXdhbGwtY3B0IGF7Zm9udC13ZWlnaHQ6NzAwO3RleHQtZGVjb3JhdGlvbjpub25lfS5wYXl3YWxsLWNwdCBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnBheXdhbGwtY3B0IC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0IGF7Y29sb3I6IzAwMH0ucGF5d2FsbC1jcHQtb2dsb2JvIC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0LW9nbG9ibyBhe2NvbG9yOiMzMjVlOTR9LnBheXdhbGwtY3B0LXdyYXB7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWJvdHRvbToyMHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsucGF5d2FsbC1jcHQtd3JhcHstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfX0ucGF5d2FsbC1jcHQtd3JhcCBpbWd7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b30ucGF5d2FsbC1jcHQtd3JhcF9fdG9we3BhZGRpbmctdG9wOjIwcHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwIDA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwfS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlcnt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwO2NvbG9yOiM3Njc2NzY7Zm9udC1zaXplOjE2cHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyLmlzLWhpZGV7cGFkZGluZy1ib3R0b206MH1cblx0ICA8L3N0eWxlPmA7XG4gIH1cblxuICBpbml0KCkgeyBcblx0ICBjb25zdCBkZWxheVRpbWVyID0gKHdpbmRvdy5nbGJQYXl3YWxsICYmIHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIpID8gd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lciAqIDEwMDAgOiAwO1xuXG5cdHNldFRpbWVvdXQoKCkgPT57XG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xuXHR9LCBkZWxheVRpbWVyKTtcbiAgfVxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5pbXBvcnQgVGlueU1vZHVsZSBmcm9tICcuL1RpbnknO1xuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4vR0EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuL1N3Zyc7XG5pbXBvcnQgUGF5d2FsbENwdCBmcm9tICcuL2NwbnQtcGF5d2FsbC9QYXl3YWxsJztcblxuY29uc3QgVGlueSA9IG5ldyBUaW55TW9kdWxlKCk7XG5jb25zdCBHQSA9IG5ldyBHQU1vZHVsZSgpO1xuXG5HQS5zZXRHbG9iYWxWYXJzKCk7XG5cblBpYW5vLmFjdGl2ZVBheXdhbGwgPSB0cnVlO1xuUGlhbm8udHlwZVBheXdhbGwgPSBudWxsO1xuUGlhbm8udmFyaWF2ZWlzID0ge1xuXHRhbWJpZW50ZXNBY2VpdG9zOiBcImludCxxbHQscHJkXCIsXG5cdHN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvOiBcIjQwMCw0MDQsNDA2LDUwMCw1MDIsNTAzLDUwNFwiLFxuXHRzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBcIjQwMCw0MDQsNTAwLDUwMiw1MDMsNTA0XCIsXG5cdGlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkOiBmYWxzZSxcblx0Y29uc3RhbnRlOiB7XG5cdFx0Y29va2llOiB7XG5cdFx0XHRHQ09NOiAnR0xCSUQnLFxuXHRcdFx0VVRQOiAnX3V0cCcsXG5cdFx0XHRSVElFWDogJ19ydGlleCcsXG5cdFx0XHRBTUJJRU5URTogJ2FtYmllbnRlUGlhbm8nLFxuXHRcdFx0U0FWRV9TVUJTQ1JJUFRJT046ICdzYXZlU3Vic2NyaXB0aW9uQ29va2llJyxcblx0XHRcdENSRUFURURfR0xPQk9JRDogJ2NyZWF0ZWRHbG9ib0lkJyxcblx0XHRcdEdMT0JPSURfTUVTU0FHRTogJ2dsb2JvSWRNZXNzYWdlJ1xuXHRcdH0sXG5cdFx0bWV0cmljYXM6IHtcblx0XHRcdEVWRU5UT19TRU1fQUNBTzogJ3NlbSBhY2FvJyxcblx0XHRcdEVSUk86ICdFcnJvJ1xuXHRcdH0sXG5cdFx0a3J1eDoge1xuXHRcdFx0U0VHTUVOVEFDT0VTOiAna3hnbG9ib19zZWdzJyxcblx0XHRcdEtSVVhMSUdBRE86ICdrcnV4LWxpZ2Fkbydcblx0XHR9LFxuXHRcdHV0aWw6IHtcblx0XHRcdElQOiBcIjEyNy4wLjAuMVwiLFxuXHRcdFx0QU1CSUVOVEU6IFwiYW1iaWVudGUtZGVzZWphZG9cIixcblx0XHRcdERFQlVHOiBcImRlYnVnLXBpYW5vXCJcblx0XHR9XG5cdH0sXG5cdGlzQ29udGV1ZG9FeGNsdXNpdm86IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldEFtYmllbnRlUGlhbm86IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpKSA+IC0xKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSksIDEpO1xuXHRcdFx0cmV0dXJuIFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpO1xuXHRcdH1cblx0XHRpZiAoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkgPT0gJ2ZhbHNlJykge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKSkge1xuXHRcdFx0cmV0dXJuIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKTtcblx0XHR9O1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vKSA+IC0xID8gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gOiAncHJkJztcblx0fSxcblx0Z2V0VGlwb0NvbnRldWRvUGlhbm86IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cudGlwb0NvbnRldWRvUGlhbm87XG5cdH0sXG5cdGV4ZWN1dG91UGFnZXZpZXc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cuZXhlY3V0b3VQYWdldmlldyA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0Z2V0Tm9tZVByb2R1dG86IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8pe1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJOb21lIGRvIHByb2R1dG8gbsOjbyBkZWZpbmlkby5cIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm87XG5cdH0sXG5cdGdldFNlcnZpY29JZDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gJzAwMDAnO1xuXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdvZ2xvYm8nIFxuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdibG9ncycgXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2tvZ3V0J1xuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdhY2Vydm8nXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2pvcm5hbGRpZ2l0YWwnKXtcblx0XHRcdHJldHVybiBpZCA9ICczOTgxJztcblx0XHR9XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgJiYgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdtb25ldCcpeyBcblx0XHRcdHJldHVybiBpZCA9ICc2NjE4Jztcblx0XHR9ZWxzZSBpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSl7XG5cdFx0XHRyZXR1cm4gaWQgPSAnNjY5Nyc7XG5cdFx0fVxuXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICd2YWxvcicpe1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gJzY2NjgnO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoaWQgPT09ICcwMDAwJylcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdTZXJ2aWNlSUQgbsOjbyBkZWZpbmlkby4nLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmICsgXG5cdFx0XHRcdCcgbm9tZVByb2R1dG86ICcgKyBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSApO1xuXG5cdFx0cmV0dXJuIGlkO1xuXHR9LFxuXHRnZXRDb2RpZ29Qcm9kdXRvOiBmdW5jdGlvbigpe1xuXHRcdHZhciBub21lUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpO1xuXHRcdHN3aXRjaCAobm9tZVByb2R1dG8pe1xuXHRcdFx0Y2FzZSAnb2dsb2JvJzpcblx0XHRcdGNhc2UgJ2Jsb2dzJzpcblx0XHRcdGNhc2UgJ2tvZ3V0Jzpcblx0XHRcdFx0cmV0dXJuICdPRzAzJztcblx0XHRcdGNhc2UgJ2FjZXJ2byc6XG5cdFx0XHRcdHJldHVybiAnT0cwNCc7XG5cdFx0XHRjYXNlICdqb3JuYWxkaWdpdGFsJzpcblx0XHRcdFx0cmV0dXJuICdPRzAxJztcblx0XHRcdGNhc2UgJ2F1dG8tZXNwb3J0ZSc6XG5cdFx0XHRjYXNlICdlcG9jYSc6XG5cdFx0XHRjYXNlICd2b2d1ZSc6XG5cdFx0XHRjYXNlICdnbGFtb3VyJzpcblx0XHRcdGNhc2UgJ2Nhc2Etdm9ndWUnOlxuXHRcdFx0Y2FzZSAnbWFyaWUtY2xhaXJlJzpcblx0XHRcdGNhc2UgJ2dsb2JvLXJ1cmFsJzpcblx0XHRcdGNhc2UgJ2dxJzpcblx0XHRcdGNhc2UgJ21vbmV0Jzpcblx0XHRcdGNhc2UgJ2NyZXNjZXInOlxuXHRcdFx0Y2FzZSAnZ2FsaWxldSc6XG5cdFx0XHRcdHJldHVybiBub21lUHJvZHV0bztcblx0XHRcdGNhc2UgJ2Nhc2EtZS1qYXJkaW0nOlxuXHRcdFx0XHRyZXR1cm4gJ2Nhc2EtamFyZGltJztcblx0XHRcdGNhc2UgJ3F1ZW0tYWNvbnRlY2UnOlxuXHRcdFx0XHRyZXR1cm4gJ3F1ZW0nO1xuXHRcdFx0Y2FzZSAndmFsb3InOlxuXHRcdFx0XHRyZXR1cm4gJ3ZhbG9yZGlnaXRhbCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFvIG9idGVyIGPDs2RpZ28gZG8gcHJvZHV0b1wiLCBub21lUHJvZHV0byArIFwiIC0gXCIgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcblx0XHRcdFx0cmV0dXJuICdlcnJvcic7XG5cdFx0fVxuXHR9XHRcbn07XG5cblBpYW5vLmphbmVsYUFub25pbWEgPSB7XG5cdHJldHJ5IDogZnVuY3Rpb24oaXNEb25lLCBuZXh0KSB7XG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xuXHRcdHZhciBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VycmVudF90cmlhbCsrID4gbWF4X3JldHJ5KSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQxMFxuXHRcdCk7XG5cdH0sXG5cdGlzSUUxME9yTGF0ZXIgOiBmdW5jdGlvbih1c2VyX2FnZW50KSB7XG5cdFx0bGV0IHVhID0gdXNlcl9hZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xuXHRcdFxuXHRcdGlmICh1YS5pbmRleE9mKCdtc2llJykgPT09IDAgJiYgdWEuaW5kZXhPZigndHJpZGVudCcpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChtYXRjaCAmJiBwYXJzZUludChtYXRjaFsxXSwgMTApID49IDEwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZXRlY3RQcml2YXRlTW9kZSA6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGlzX3ByaXZhdGU7XG5cblx0XHRpZiAod2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKSB7XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXG5cdFx0XHRcdHdpbmRvdy5URU1QT1JBUlksIDEsXG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAod2luZG93LmluZGV4ZWREQiAmJiAvRmlyZWZveC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHZhciBkYjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRiID0gd2luZG93LmluZGV4ZWREQi5vcGVuKCd0ZXN0Jyk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcblx0XHRcdFx0XHRmdW5jdGlvbiBpc0RvbmUoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGIucmVhZHlTdGF0ZSA9PT0gJ2RvbmUnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZnVuY3Rpb24gbmV4dChpc190aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWlzX3RpbWVvdXQpIHtcblx0XHRcdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGRiLnJlc3VsdCA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChQaWFuby5qYW5lbGFBbm9uaW1hLmlzSUUxME9yTGF0ZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIXdpbmRvdy5pbmRleGVkREIpIHtcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UgJiYgL1NhZmFyaS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIDEpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZXN0Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcblx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBpc19wcml2YXRlICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcblx0XHRcdFx0Y2FsbGJhY2soaXNfcHJpdmF0ZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufTtcblxuUGlhbm8ua3J1eCA9IHtcblx0dGVtOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRsaWdhZG86IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETztcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJyAmJiB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyAhPSBcInByZFwiKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJyB8fCB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PSBcInByZFwiKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LktSVVhMSUdBRE8pID09IFwiZmFsc2VcIikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0b2J0ZW1TZWdtZW50YWNhbzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLmtydXgudGVtKCkgJiYgUGlhbm8ua3J1eC5saWdhZG8oKSkge1xuXHRcdFx0dmFyIHNlZ21lbnRhY29lcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKS5zcGxpdCgnLCcpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50YWNvZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBzZWdtZW50YWNvZXNbaV0sIHNlZ21lbnRhY29lc1tpXV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8ucmVnaW9uYWxpemFjYW8gPSB7XHRcblx0Z2V0UmVnaW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIga3J1eEdlbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdreGdsb2JvX2dlbycpO1xuXHRcdGlmIChrcnV4R2VvKSB7XG5cdFx0XHRrcnV4R2VvLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0bGV0IGRhdGEgPSBpdGVtLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBkYXRhWzBdO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBkYXRhWzFdO1xuXHRcdFx0XHRpZiAoa2V5ID09PSAncmVnaW9uJykge1xuXHRcdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJyZWdpb25cIiwgdmFsdWVdKTtcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLm1ldHJpY2FzID0ge1xuXHRlbnZpYUV2ZW50b3NHQTogZnVuY3Rpb24oX0dBQWNhbywgX0dBUm90dWxvKSB7IC8vVE9ETzogYXJxdWl2byB0aW55cGFzcy5qcywgaW5zZXJpZG8gcGVsYSBQaWFubywgdXRpbGl6YSBlc3NhIGZ1bsOnw6NvXG5cdFx0Y29uc3QgaXNQcm9kdWN0VmFsb3IgPSAodHlwZW9mIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9PT0gJ3ZhbG9yJykgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8nLCBfR0FBY2FvLCBfR0FSb3R1bG8sICx0cnVlXSk7XG5cdFx0ZWxzZVxuXHRcdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vJywgJ2V2ZW50b0dBQWNhbyc6IF9HQUFjYW8sICdldmVudG9HQVJvdHVsbyc6X0dBUm90dWxvfSk7XG5cdH0sXG5cblx0bW9udGFSb3R1bG9HQTogZnVuY3Rpb24oKSB7IC8vVE9ETzogYXQgUGlhbm8gYXMgc2V0RXhwZXJpZW5jZSgpIHwgQ2hlY2sgb24gb2xkIHRpbnkgYmVmb3JlIHJlbW92ZVxuXHRcdGlmKHdpbmRvdy5yZWdyYXNUaW55ICYmIHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhICsgXCIgLSBcIiArIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vIDogd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xuXHRcdH0gZWxzZSBpZiAod2luZG93Lm5vbWVFeHBlcmllbmNpYSkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5ub21lRXhwZXJpZW5jaWE7XG5cdFx0fVxuXHRcdHJldHVybiBcIiBcIjtcblx0fSxcblx0c2V0TGltaXRlQ29udGFnZW06IGZ1bmN0aW9uKG1ldHJpY2FzKSB7XG5cdFx0X0dBTGltaXRlID0gXCItXCI7XG5cdFx0X0dBQ29udGFnZW0gPSBcIi1cIjtcblx0XHRpZighbWV0cmljYXMpIHJldHVybjtcblx0XHRfR0FDb250YWdlbSA9IFwiXCIgKyBtZXRyaWNhcy52aWV3cztcblx0XHRpZiAoX0dBQ29udGFnZW0ubGVuZ3RoID09IDEpIHtcblx0XHRcdF9HQUNvbnRhZ2VtID0gXCIwXCIgKyBfR0FDb250YWdlbTtcblx0XHR9XG5cdFx0X0dBTGltaXRlID0gbWV0cmljYXMubm9tZUV4cGVyaWVuY2lhICtcIiA6IFwiKyBtZXRyaWNhcy5tYXhWaWV3cztcblx0fSxcblx0aWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyOiBmdW5jdGlvbihyZWdyYXMpIHtcblx0XHR2YXIgcGFzc2FnZW0gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLm1ldHJpY2FzLkVWRU5UT19TRU1fQUNBTztcblx0XHRpZihIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIHtcblx0XHRcdHBhc3NhZ2VtID0gcmVncmFzLmZsdXhvLmluZGV4T2YoXCJoYXJkd2FsbFwiKSAhPSAtMSA/ICdyZWdpc3Rlci1oYXJkd2FsbC1wYXNzb3UnIDogJ3JlZ2lzdGVyLWNvbnRhZ2VtLXBhc3NvdSc7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFzc2FnZW07XG5cdH0sXG5cdGV4ZWN1dGFBcG9zUGFnZXZpZXc6IGZ1bmN0aW9uKGV4cGlyb3UpIHtcblx0XHRpZiAoIVBpYW5vLnZhcmlhdmVpcy5leGVjdXRvdVBhZ2V2aWV3KCkpIHtcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55LmZsdXhvID0gd2luZG93LnRwQ29udGV4dCA/IHRwQ29udGV4dC50b0xvd2VyQ2FzZSgpIDogJy0nO1xuXHRcdFx0d2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhID0gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA/IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgOiAnJztcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldExpbWl0ZUNvbnRhZ2VtKHdpbmRvdy5yZWdyYXNUaW55KTtcblx0XHRcdGlmIChleHBpcm91ID09IGZhbHNlKSBHQS5zZXRFdmVudHMoUGlhbm8ubWV0cmljYXMuaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyKHdpbmRvdy5yZWdyYXNUaW55KSwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRcdGV4ZWN1dG91UGFnZXZpZXcgPSB0cnVlO1xuXHRcdH1cblx0fSxcblx0c2V0YVZhcmlhdmVpczogZnVuY3Rpb24oaWRMb2dpbiwgdGlwb0xvZ2luLCBhc3NpbmF0dXJhTG9nYWRhKXtcblx0XHRQYXl3YWxsQW5hbHl0aWNzLmlkTG9naW5Bc3NpbmFudGUgPSBpZExvZ2luO1xuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLnRpcG9Mb2dpbkFzc2luYW50ZSA9IHRpcG9Mb2dpbjtcbiAgICAgICAgUGF5d2FsbEFuYWx5dGljcy5hc3NpbmF0dXJhTG9nYWRhID0gYXNzaW5hdHVyYUxvZ2FkYTtcblx0fVxufTtcblxuXG5QaWFuby5iYW5uZXIgPSB7XG5cdG1vc3RyYXJGb290ZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL25vdm8tYmFubmVyLWZvb3Rlci5qc1wiKTtcblx0fSxcblx0bW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Jhbm5lci1oZWFkZXItZm9vdGVyLXBpYW5vLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyQXZhdGFySGVhZGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2F2YXRhci1oZWFkZXItcGlhbm8uanNcIik7XG5cdH0sXG5cdGJvdHRvbUZpeGVkOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xuXHRcdHdpbmRvdy5nbGJCYW5uZXJCb3R0b20gPSBwYXJhbXM7XG5cblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3N0eWxlcy9iYW5uZXItYm90dG9tLWZpeGVkLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3NjcmlwdHMvYmFubmVyLWJvdHRvbS1maXhlZC5qc1wiKTtcblx0fSxcblx0bW9zdHJhclNXRzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgY3NzID0gYDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc3R5bGVzL3N0eWxlLmNzcyc+YDtcblx0XHRjb25zdCBzY3JpcHRKcyA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvc3dnL3YxL3NjcmlwdC9hbnVuY2lvLXN3Zy5qc2A7XG5cblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhjc3MpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShzY3JpcHRKcyk7XG5cdH0sXG5cdG1vc3RyYXJIaWdobGlnaHRTYWxlOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvaGlnaGxpZ2h0LXNhbGUvXCIrdmVyc2FvK1wiL3NjcmlwdHMvaGlnaGxpZ2h0LXNhbGUuanNcIik7XG5cdH0sXG5cdG1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3ZhbG9yLXN1YnNjcmliZS1idXR0b24vXCIrdmVyc2FvK1wiL3NjcmlwdHMvc3Vic2NyaWJlLWJ1dHRvbi5qc1wiKTtcblx0fVxuXG59O1xuXG5QaWFuby5yZWdpc3RlciA9IHtcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92YS10ZWxhLXJlZ2lzdGVyLmpzXCIpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xuXHR9XG59O1xuXG5QaWFuby5oZWxwZXIgPSB7XG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24oKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfNjVkMTkzMGEwYmRhNDc2YmE4ZDNjMjVjNTM3MWVjM2YvcGlhbm8vaGVscGVyL3JlZ2lzdGVyLmpzXCIpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xuXHR9XG59O1xuXG5QaWFuby5wYXl3YWxsID0ge1xuXHRyZWRpcmVjaW9uYXJCYXJyZWlyYTogZnVuY3Rpb24odXJsKSB7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQmFycmVpcmFcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO30sIDEwMDApO1xuXHR9LFxuXHRzaG93OiBmdW5jdGlvbih0eXBlUGF5d2FsbCA9IG51bGwpIHtcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHR5cGVQYXl3YWxsO1xuXHRcblx0XHRpZighUGlhbm8uYWN0aXZlUGF5d2FsbCkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdQYXl3YWxsIC0gSXMgbm90IGF2YWlhYmxlJylcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcblx0XHR9IGVsc2UgeyBcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG5ldyBQYXl3YWxsQ3B0KCk7XG5cdFx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignUGF5d2FsbCAtIEVycm9yIG9uIGxvYWQnKVxuXHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcgPSBmdW5jdGlvbigpIHtcblx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjbGVhckZvckFkcycpXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuUGlhbm8uY2hlY2tQYXl3YWxsID0gZnVuY3Rpb24oKSB7XG5cdGxldCBjb3VudCA9IDA7XG5cdFxuXHRjb25zdCBjaGVja0dhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0bGV0IGhhc0dhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFycmVpcmEtcmVnaXN0ZXItcGF5d2FsbCwgLnBheXdhbGwtY3B0Jyk7XG5cdFx0bGV0IGhhc1B1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdWItcmV0YW5ndWxvLTEgaWZyYW1lLCAjcHViLXJldGFuZ3Vsby0yIGlmcmFtZSwgI3B1Yi1mdWxsYmFubmVyLTEgaWZyYW1lJyk7XG5cblx0XHRpZihjb3VudCA+IDIpIHtcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpO1xuXHRcdFx0UGlhbm8uYWN0aXZlUGF5d2FsbCA9IGZhbHNlO1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChjaGVja0dhdGUpO1xuXHRcdH1cblxuXHRcdGlmKCAoIChoYXNHYXRlICYmIFBpYW5vLmFjdGl2ZVBheXdhbGwpIHx8IGhhc1B1YikgfHwgY291bnQgPiA4KSBcblx0XHRcdGNsZWFySW50ZXJ2YWwoY2hlY2tHYXRlKTtcblxuXHRcdGNvdW50Kys7XG5cdH0sIDEwMDApO1xufTtcblxuUGlhbm8ucmVnaXN0ZXJQYXl3YWxsID0geyBcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbih2ZXJzYW8gPSBudWxsLCB0aXBvID0gbnVsbCkge1xuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdGlwbztcblxuXHRcdGlmKCFQaWFuby5hY3RpdmVQYXl3YWxsIHx8ICghdmVyc2FvIHx8ICFQaWFuby50eXBlUGF5d2FsbCkgKSB7XG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXG5cdFx0fSBlbHNlIHtcblx0XHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXG5cdFx0XHRcdFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvcmVnaXN0ZXItcGF5d2FsbC1waWFuby5qc1wiLCBcblx0XHRcdFx0ZGF0YSA9PiB7IFxuXHRcdFx0XHRcdGlmKGRhdGEuc3RhdHVzICE9PSAyMDApIHsgXG5cdFx0XHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXG5cdFx0XHRcdFx0fSBcblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRcblx0XHRcdGlmKFBpYW5vLnR5cGVQYXl3YWxsID09PSAncmVnaXN0ZXInIHx8IFBpYW5vLnR5cGVQYXl3YWxsID09PSAnZXhjbHVzaXZvJyApIHtcblx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xuXHRcdFx0fSBlbHNlIHtcdFx0XHRcblx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQmFycmVpcmFcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdH1cbn07XG5cblBpYW5vLmNvbXVuaWNhZG8gPSB7XG5cdG1vc3RyYXJJbmZvcm1hY2FvOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvY29tdW5pY2FjYW8tcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvY29tdW5pY2FjYW8tcGlhbm8uanNcIik7XG5cdH1cbn07XG5cblBpYW5vLmFkYmxvY2sgPSB7XG5cdG1vc3RyYXJBZEJsb2NrOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xuXG5cdFx0cGFyYW1zLmFzc2V0c1BhdGggPSBgaHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvYDtcblx0XHRcblx0XHR3aW5kb3cuZ2xiQWRibG9jayA9IHBhcmFtcztcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zY3JpcHRzL2FkYmxvY2stcGlhbm8uanNcIik7XG5cdH1cbn07XG5cblBpYW5vLmJsb3F1ZWlvcyA9IHtcblx0bGliZXJhckVzYzogZnVuY3Rpb24oKSB7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jsb3F1ZWlvL2xpYmVyYVRlY2xhZG8uanNcIik7XG5cdH0sXG5cdGJsb3F1ZWlhVmlld01vZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vYmxvcXVlaWFWaWV3bW9kZS5qc1wiKTtcbiAgICB9XG59O1xuXG5QaWFuby5wYXJjZWlybyA9IHtcblx0bW9zdHJhRm9vdGVyUGFyY2Vpcm86IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvZm9vdGVyLXBhcmNlaXJvcy1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uaW5hZGltcGxlbnRlID0ge1xuXHRnZXRMaW5rQXNzaW5hdHVyYTogZnVuY3Rpb24obGluaykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluay5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGxpbmtbaV0ucmVsID09ICdhc3NpbmF0dXJhJykgcmV0dXJuIGxpbmtbaV0uaHJlZjtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5QaWFuby54bWxIdHRwUmVxdWVzdCA9IHtcblx0Z2VyYVNjcmlwdE5hUGFnaW5hOiBmdW5jdGlvbih1cmxTY3JpcHQsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybFNjcmlwdCk7XG5cdFx0eGhyLnNlbmQoKTtcblx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih0aGlzLnJlYWR5U3RhdGUgPT09IDQpe1xuXHRcdFx0XHRpZih0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0XHR2YXIgYXBwZW5kRGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRcdFx0XHRhcHBlbmREZVNjcmlwdC5pbm5lckhUTUwgPSByZXNwb3N0YTtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcGVuZERlU2NyaXB0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBuYSBmdW7Dp8OjbyBnZXJhciBzY3JpcHQgbmEgcMOhZ2luYS4nLCAndXJsOiAnICsgdXJsU2NyaXB0XG5cdFx0XHRcdFx0XHQrICcgU3RhdHVzRXJybzogJyArIHRoaXMuc3RhdHVzXG5cdFx0XHRcdFx0XHQrICcgU3RhY2s6ICcgKyB0aGlzLnN0YXR1c1RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGNhbGxiYWNrKVxuXHRcdFx0XHRjYWxsYmFjayh4aHIpOyBcblx0XHR9O1x0XG5cdH0sXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBmdW5jdGlvbihocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXHRcdFxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbihcIkdFVFwiLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSwgZmFsc2UpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdFx0eGhyLnNlbmQoKTtcblx0XG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XG5cdFx0XHRpZih4aHIuc3RhdHVzID09IDIwMCl7XG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xuXHRcdFx0XHR2YXIgc2l0dWFjYW9QYWdhbWVudG8gPSByZXNwSnNvbi5zaXR1YWNhb1BhZ2FtZW50by50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwic2l0dWFjYW9QYWdhbWVudG9cIiwgc2l0dWFjYW9QYWdhbWVudG9dKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9IDAgJiYgUGlhbm8udmFyaWF2ZWlzLnN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUuaW5kZXhPZih4aHIuc3RhdHVzKSA+IC0xKSB7XG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCBcIlN0YXR1cyBEZXNjb25oZWNpZG9cIiArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc286IGZ1bmN0aW9uKGdsYmlkKSB7XG5cdFx0XG5cdFx0dmFyIGNvZGlnb1Byb2R1dG8gPSBQaWFuby52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpO1xuXHRcdGlmKGNvZGlnb1Byb2R1dG8gPT0gJ2Vycm9yJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1widG9rZW4tYXV0ZW50aWNhY2FvXCI6IGdsYmlkLCBcImlwVXN1YXJpb1wiOiBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuSVAsIFwiY29kaWdvUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvfSk7XG5cblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsVmVyaWZpY2FMZWl0b3IsIGZhbHNlKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdFx0eGhyLnNlbmQoZGF0YSk7XG5cdFx0XG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xuXHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCl7XG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XG5cdFx0XHRcdHZhciByZXNwSnNvbiA9IEpTT04ucGFyc2UocmVzcG9zdGEpO1xuXHRcdFx0XHR2YXIgcmVzcG9zdGFEZVRlcm1vRGVVc28gPSBmYWxzZSwgcmVzcG9zdGFEZU1vdGl2byA9ICcnLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9ICcnO1xuXHRcdFx0XHRpZiAodHlwZW9mIHJlc3BKc29uLm1vdGl2byAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0cmVzcG9zdGFEZU1vdGl2byA9IHJlc3BKc29uLm1vdGl2by50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24udGVtVGVybW9EZVVzbyAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0cmVzcG9zdGFEZVRlcm1vRGVVc28gPSByZXNwSnNvbi50ZW1UZXJtb0RlVXNvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubGluayAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0aHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUgPSBQaWFuby5pbmFkaW1wbGVudGUuZ2V0TGlua0Fzc2luYXR1cmEocmVzcEpzb24ubGluayk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGlzQXV0b3JpemFkbyA9IFBpYW5vLmF1dGVudGljYWNhby5pc0F1dG9yaXphZG8ocmVzcG9zdGFEZVRlcm1vRGVVc28sIHJlc3Bvc3RhRGVNb3Rpdm8sIHJlc3BKc29uLmF1dG9yaXphZG8sIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhyZXNwSnNvbi5hdXRvcml6YWRvLCByZXNwb3N0YURlTW90aXZvLCBpc0F1dG9yaXphZG8sIHJlc3Bvc3RhRGVUZXJtb0RlVXNvKTtcblx0XHRcdFx0dmFyIF9qc29uTGVpdG9yID0ge1xuXHRcdFx0XHRcdFx0XCJhdXRvcml6YWRvXCIgOiByZXNwSnNvbi5hdXRvcml6YWRvLFxuXHRcdFx0XHRcdFx0XCJtb3Rpdm9cIjogcmVzcG9zdGFEZU1vdGl2byxcblx0XHRcdFx0XHRcdFwibG9nYWRvXCI6IGlzQXV0b3JpemFkbyxcblx0XHRcdFx0XHRcdFwidGVtVGVybW9EZVVzb1wiOiByZXNwb3N0YURlVGVybW9EZVVzbyxcblx0XHRcdFx0XHRcdFwiZ2xiaWRcIjogZ2xiaWQsXG5cdFx0XHRcdFx0XHRcInByb2R1dG9cIjogUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCksXG5cdFx0XHRcdFx0XHRcImNvZFByb2R1dG9cIjogY29kaWdvUHJvZHV0byxcblx0XHRcdFx0XHRcdFwidXVpZFwiOiByZXNwSnNvbi51c3VhcmlvSWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRfanNvbkxlaXRvciA9IGJ0b2EoZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KF9qc29uTGVpdG9yKSkpO1xuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIF9qc29uTGVpdG9yLCAxKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGlmKFBpYW5vLmdvb2dsZS5zaG93U2F2ZVN1YnNjcmlwdGlvbihyZXNwSnNvbikpe1xuXHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHR2YXIgc3dnU2VydmljZSA9IG5ldyBTd2dTZXJ2aWNlKCk7XG5cdFx0XHRcdFx0XHRcdHN3Z1NlcnZpY2Uuc2F2ZUdsb2JvU3Vic2NyaXB0aW9uKGdsYmlkKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ0Vycm8gYW8gY2hhbWFyIGEgZnVuw6fDo28gc2hvd1NhdmVTdWJzY3JpcHRpb24gZG8gQWxkZWJhcmFuLicsIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnVVJMOiAnICsgZG9jdW1lbnQubG9jYXRpb24uaHJlZiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEdMQklEOiAnICsgZ2xiaWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEVycm86ICcgKyBlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihyZXNwSnNvbi5hdXRvcml6YWRvID09IHRydWUpe1xuXHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMocmVzcEpzb24udXN1YXJpb0lkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQVBJIGRlIGF1dG9yaXphY2FvIGRlIGFjZXNzb1wiLCB4aHIuc3RhdHVzICsgXCIgLSBcIiArIGdsYmlkKTtcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcblx0XHRcdH1cdFxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8uZ29vZ2xlID0ge1xuICBpc0F1dGhvcml6ZWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZihzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpKXtcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoc3dnRW50aXRsZW1lbnRzLmdldEVudGl0bGVtZW50Rm9yU291cmNlKFwib2dsb2JvLmdsb2JvLmNvbVwiKS5zdWJzY3JpcHRpb25Ub2tlbiwgXCJDb250YSBHb29nbGVcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCkpe1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5DUkVBVEVEX0dMT0JPSUQpLCBcIkNvbnRhIEdvb2dsZVwiLCBcIkdvb2dsZVwiKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBpc1NwZWNpZmljR29vZ2xlVXNlcjogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLmdvb2dsZS5pc0F1dGhvcml6ZWQoKSlcblx0XHRcdHJldHVybjtcblxuXHRcdHRyeXtcblx0XHRcdHZhciBvR2xvYm9CdXNpbmVzcyA9IG5ldyBPR2xvYm9CdXNpbmVzcygpO1xuXHRcdFx0b0dsb2JvQnVzaW5lc3MudmVyaWZ5SWZVc2VySGFzQWNjZXNzT3JEZWZlcnJlZChzd2dFbnRpdGxlbWVudHMpO1xuXHRcdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiRXJybyBhbyBleGVjdXRhciBvIEFsZGViYXJhblwiLCBcIkVycm9yOiBcIiArIGVycm9yICsgXCIgLSBFbnRpdGxlbWVudHM6IFwiICsgc3dnRW50aXRsZW1lbnRzLmVudGl0bGVtZW50c1swXS5zdWJzY3JpcHRpb25Ub2tlbik7XG5cdFx0fVx0XHRcdFxuXHR9LFxuXG5cdHNob3dTYXZlU3Vic2NyaXB0aW9uOiBmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0aWYoIXN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpICYmIHJlc3BvbnNlLm1vdGl2byA9PT1cIkFVVE9SSVpBRE9cIiAmJiAhSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5TQVZFX1NVQlNDUklQVElPTikpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG59O1xuXG5QaWFuby5hdXRlbnRpY2FjYW8gPSB7XG5cdGlzTG9nYWRvQ2FkdW46IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcblx0XHRpZiAoIWdsYmlkKSB7XG5cdFx0XHRpZiAodXRwKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcblx0XHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0fVxuXHRcdHJldHVybiBnbGJpZCAhPSAnJztcblx0fSxcblx0dmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvOiBmdW5jdGlvbihnbGJpZCwgdXRwKSB7XG5cdFx0aWYgKFBpYW5vLmF1dGVudGljYWNhby5pc0xvZ2Fkb0NhZHVuKGdsYmlkLCB1dHApKSB7XG5cdFx0XHRpZiAodXRwKSB7XG5cdFx0XHRcdHZhciBfbGVpdG9yID0gSlNPTi5wYXJzZShkZWNvZGVVUkkoYXRvYih1dHApKSk7XG5cdFx0XHRcdGlmIChnbGJpZCA9PSBfbGVpdG9yLmdsYmlkICYmICh0eXBlb2YgX2xlaXRvci5wcm9kdXRvID09IFwidW5kZWZpbmVkXCIgfHwgX2xlaXRvci5wcm9kdXRvID09IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSkge1xuXHRcdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8oX2xlaXRvci5hdXRvcml6YWRvLCBfbGVpdG9yLm1vdGl2bywgX2xlaXRvci5sb2dhZG8sIF9sZWl0b3IudGVtVGVybW9EZVVzbyk7XG5cdFx0XHRcdFx0aWYoX2xlaXRvci5hdXRvcml6YWRvKXtcblx0XHRcdFx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldGFWYXJpYXZlaXMoX2xlaXRvci51dWlkLCBcIkdsb2JvIElEXCIsIFwiTyBHbG9ib1wiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdFx0fVxuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbyhnbGJpZCk7XG5cdFx0fVxuXHR9LFxuXHRpc0F1dG9yaXphZG86IGZ1bmN0aW9uKHRlcm1vRGVVc28sIG1vdGl2bywgYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIHtcblx0XHRpZiAoYXV0b3JpemFkbyB8fCBtb3Rpdm8gPT0gXCJpbmRpc3Bvbml2ZWxcIiB8fCB0ZXJtb0RlVXNvICE9IGZhbHNlKSB7XG5cdFx0XHRpZiAoYXV0b3JpemFkbyAmJiBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkgUGlhbm8ueG1sSHR0cFJlcXVlc3QuZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUoaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0ZGVmaW5lVXN1YXJpb1BpYW5vOmZ1bmN0aW9uKGF1dG9yaXphZG8sIG1vdGl2bywgbG9nYWRvLCB0ZW1UZXJtb0RlVXNvKXtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYXV0b3JpemFkb1wiLCBhdXRvcml6YWRvXSk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm1vdGl2b1wiLCBtb3Rpdm9dKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibG9nYWRvXCIsIGxvZ2Fkb10pO1xuXHRcdGlmKHRlbVRlcm1vRGVVc28gIT0gXCIgXCIpXG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidGVtVGVybW9cIiwgdGVtVGVybW9EZVVzb10pO1xuXHR9XG59O1xuXG5QaWFuby51dGlsID0ge1xuXHRpc1NlY3Rpb246IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3NlY3Rpb24nID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHR0ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0eXBlb2YgUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCkgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignVmFyaWF2ZWwgdGlwb0NvbnRldWRvUGlhbm8gbmFvIGVzdGEgZGVmaW5pZGEnLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdGlmICh0eXBlb2YgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignVmFyaWF2ZWwgbm9tZVByb2R1dG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdGV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xuXHRcdHZhciBjaGF2ZXNDYW1wYW5oYSA9IFsndXRtX21lZGl1bScsJ3V0bV9zb3VyY2UnXTtcblx0XHR2YXIgdmFsb3Jlc0NhbXBhbmhhID0gW107XG5cblx0XHRmb3IgKHZhciBpZHhQYXJhbUNhbXBhbmhhID0gMDsgaWR4UGFyYW1DYW1wYW5oYSA8IGNoYXZlc0NhbXBhbmhhLmxlbmd0aDsgaWR4UGFyYW1DYW1wYW5oYSsrKSB7XG5cdFx0XHR2YXIgY2hhdmVDYW1wYW5oYSA9IGNoYXZlc0NhbXBhbmhhW2lkeFBhcmFtQ2FtcGFuaGFdO1xuXHRcdFx0aWYgKHVybC5pbmRleE9mKGNoYXZlQ2FtcGFuaGEgKyAnPScpICE9IC0xKSB7XG5cdFx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFw/KCYpXVwiICsgY2hhdmVDYW1wYW5oYSArIFwiPShbXiYjXSopXCIpO1xuXHRcdFx0XHR2YXIgdmFsb3JDYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XG5cdFx0XHRcdGlmKHZhbG9yQ2FtcGFuaGEpe1xuXHRcdFx0XHRcdHZhbG9yZXNDYW1wYW5oYS5wdXNoKHZhbG9yQ2FtcGFuaGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2YWxvcmVzQ2FtcGFuaGEubGVuZ3RoID4gMCkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInV0bVwiLCB2YWxvcmVzQ2FtcGFuaGEuam9pbihcIjtcIildKTtcblx0XHR9XG5cdFx0aWYgKHVybC5pbmRleE9mKCd1dG1fY2FtcGFpZ249JykgIT0gLTEpIHtcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJ1dG1fY2FtcGFpZ249KFxcXFx3KylcIik7XG5cdFx0XHR2YXIgY2FtcGFuaGEgPSB1cmwubWF0Y2gocmVnZXgpWzFdO1xuXHRcdFx0aWYoY2FtcGFuaGEpe1xuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiY2FtcGFuaGFcIiwgY2FtcGFuaGFdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGlzT3JpZ2VtQnVzY2Fkb3I6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdHZhciByZWdleFJvYm9zID0gbmV3IFJlZ0V4cChcIihpYV9hcmNoaXZlcil8KEdvb2dsZWJvdCl8KE1lZGlhcGFydG5lcnMtR29vZ2xlKXwoQWRzQm90LUdvb2dsZSl8KG1zbmJvdCl8KFlhaG9vISBTbHVycCl8KFp5Qm9yZyl8KEFzayBKZWV2ZXMvVGVvbWEpfChiaW5nYm90KXwoY1hlbnNlYm90KVwiKTtcblx0XHR2YXIgZWhSb2JvID0gcmVnZXhSb2Jvcy50ZXN0KHVzZXJBZ2VudCk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImJ1c2NhZG9yXCIsIGVoUm9ib10pO1xuXHRcdHJldHVybiBlaFJvYm87XG5cdH0sXG5cdG1vbnRhVXJsU3RnOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKSAhPSAncHJkJyA/ICctc3RnJyA6ICcnO1xuXHR9LFxuXHR0ZW1QYXJhbWV0cm9OYVVybDogZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG5cdFx0dmFyIHBhcmFtZXRyb3MgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XG5cdFx0cmV0dXJuIHBhcmFtZXRyb3MuaW5kZXhPZihwYXJhbU5hbWUpICE9IC0xID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRnZXRWYWxvclBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbWV0cm8pIHtcblx0XHRpZiAoUGlhbm8udXRpbC50ZW1QYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pKSB7XG5cdFx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFw/KCYpXVwiICsgcGFyYW1ldHJvICsgXCI9KFteJiNdKilcIik7XG5cdFx0XHRyZXR1cm4gcGFyYW1ldHJvcy5tYXRjaChyZWdleClbMV07XG5cdFx0fVxuXHRcdHJldHVybiBcInNlbSBwYXJhbWV0cm9cIjtcblx0fSxcblx0aXNEZWJ1ZzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBhcmFtZXRybyA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRztcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJykge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUocGFyYW1ldHJvLCBcIlwiLCAtMSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuREVCVUcpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRpc0RvbWluaW9PR2xvYm86IGZ1bmN0aW9uKCkge1xuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCI6Ly8oLio/KS9cIiksIHVybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25IcmVmKCk7XG5cdFx0aWYgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcIm9nbG9ib1wiKSA+IC0xIHx8ICh1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJnbG9ib2lcIikgPiAtMSAmJiB1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJlZGdcIikgPT0gLTEpKSB7XG5cdFx0XHRyZXR1cm4gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9LFxuXHRjYWxsYmFja01ldGVyOiBmdW5jdGlvbihtZXRlckRhdGEpIHtcblx0XHR3aW5kb3cucmVncmFzVGlueSA9IG1ldGVyRGF0YTtcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KGZhbHNlKTtcblx0fSxcblx0Y2FsbGJhY2tNZXRlckV4cGlyZWQ6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xuXHRcdFBpYW5vLnZhcmlhdmVpcy5pc0NhbGxiYWNrTWV0dGVyRXhwaXJlZCA9IHRydWU7XG5cdFx0UGlhbm8ubWV0cmljYXMuZXhlY3V0YUFwb3NQYWdldmlldyh0cnVlKTtcblx0fSxcblx0Z2V0V2luZG93TG9jYXRpb25TZWFyY2g6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5cdH0sXG5cdGdldFdpbmRvd0xvY2F0aW9uSHJlZjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdH0sXG5cdGFkaWNpb25hckNzczogZnVuY3Rpb24oY3NzUGF0aCl7XG5cdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRlLmlubmVySFRNTCA9IGNzc1BhdGg7XG5cdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZSwgZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xuXHR9LFxuXHRpc1JldmlzdGE6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHJldmlzdGFzID0gW1wiZXBvY2FcIiwgXCJhdXRvLWVzcG9ydGVcIiwgXCJ2b2d1ZVwiLCBcImdsYW1vdXJcIiwgXCJjYXNhLXZvZ3VlXCIsIFwibWFyaWUtY2xhaXJlXCIsIFwiY2FzYS1lLWphcmRpbVwiLCBcInF1ZW0tYWNvbnRlY2VcIiwgXCJnbG9iby1ydXJhbFwiLCBcImdxXCIsIFwibW9uZXRcIiwgJ2NyZXNjZXInLCdnYWxpbGV1J107XG5cdFx0aWYocmV2aXN0YXMuaW5kZXhPZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSkgPiAtMSlcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0cmVjYXJyZWdhUGlhbm86IGZ1bmN0aW9uICh0aXBvQ29udGV1ZG8sIGlzRXhjbHVzaXZvLCBub21lUHJvZHV0bykge1xuXHRcdHdpbmRvdy50aXBvQ29udGV1ZG9QaWFubyA9IHRpcG9Db250ZXVkbztcblx0XHR3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPSBpc0V4Y2x1c2l2bztcblx0XHR3aW5kb3cubm9tZVByb2R1dG9QaWFubyA9IG5vbWVQcm9kdXRvO1xuXHRcdGlmICh0eXBlb2Ygd2luZG93LnJlZ3Jhc1RpbnkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSBcIlwiO1xuXHRcdH1cblx0XHRQaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xuXHRcdHRwLmV4cGVyaWVuY2UuZXhlY3V0ZSgpO1xuXHR9LFxuXHRpc1ZhbG9yOiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09IFwidmFsb3JcIilcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuUGlhbm8uY29uZmlndXJhY2FvID0ge1xuXHRqc29uQ29uZmlndXJhY2FvVGlueVBhc3M6IHtcblx0XHQnaW50Jzoge1xuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonZFh1N2R2RktSaScsXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J01jdEZnUkNFc3UnLFxuXHRcdFx0J3NldFNhbmRCb3gnOid0cnVlJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL3NhbmRib3gudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9ZFh1N2R2RktSaScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL3NhbmRib3gudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9TWN0RmdSQ0VzdScsXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vJyxcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcblx0XHR9LFxuXHRcdCdxbHQnOntcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J0dUQ29wSURjNXonLFxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcblx0XHRcdCdzZXRTYW5kQm94JzonZmFsc2UnLFxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1HVENvcElEYzV6Jyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xuXHRcdH0sXG5cdFx0J3ByZCc6e1xuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGkuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tLycsXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5jb25zdHJ1dG9yID0ge1xuXHRpbml0VHA6IGZ1bmN0aW9uKCkge1xuXHRcdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBQaWFub1wiLCBcIkluaWNpbyBJbml0VHBcIik7XG5cdFx0dHAgPSB3aW5kb3dbXCJ0cFwiXSB8fCBbXTtcblx0XHR0cC5wdXNoKFtcInNldFRhZ3NcIiwgW1BpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpXV0pO1xuXHRcdGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpIHx8IFBpYW5vLnV0aWwuaXNWYWxvcigpKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEFpZFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLmlkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXNdKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEFpZFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLmlkU2FuZGJveFRpbnlwYXNzXSk7XG5cdFx0fVxuXHRcdHRwLnB1c2goW1wic2V0U2FuZGJveFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnNldFNhbmRCb3hdKTtcblx0XHR0cC5wdXNoKFtcInNldERlYnVnXCIsIFBpYW5vLnV0aWwuaXNEZWJ1ZygpXSk7XG5cdFx0dmFyIGNsZWFuX3VybCA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25IcmVmKCkuc3BsaXQoXCI/XCIpWzBdO1xuXHRcdHRwLnB1c2goW1wic2V0UGFnZVVSTFwiLGNsZWFuX3VybF0pO1xuXHRcdHRwLnB1c2goW1wic2V0Wm9uZVwiLCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKV0pO1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJub21lUHJvZHV0b1wiLCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKV0pO1xuXHRcdFBpYW5vLmphbmVsYUFub25pbWEuZGV0ZWN0UHJpdmF0ZU1vZGUoZnVuY3Rpb24gKGlzX3ByaXZhdGUpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhbm9uaW1vXCIsIGlzX3ByaXZhdGVdKTtcblx0XHR9KTtcblxuXHRcdGlmIChQaWFuby52YXJpYXZlaXMuaXNDb250ZXVkb0V4Y2x1c2l2bygpKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiY29udGV1ZG9FeGNsdXNpdm9cIiwgdHJ1ZV0pO1xuXHRcdH1cblx0XHRcblx0XHRpZiAodHlwZW9mIHN3ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHR5cGVvZiBzd2dFbnRpdGxlbWVudHMgIT09ICd1bmRlZmluZWQnICYmIHN3Z0VudGl0bGVtZW50cy5lbmFibGVzVGhpcygpKSApIHtcblx0XHRcdFBpYW5vLmdvb2dsZS5pc1NwZWNpZmljR29vZ2xlVXNlcihzd2dFbnRpdGxlbWVudHMpO1xuXHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLFwiQVVUT1JJWkFET1wiLCB0cnVlLCBcIlwiKTtcblx0XHR9ZWxzZXtcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby52ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8oSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuR0NPTSksIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCkpO1xuXHRcdH1cblx0XHRcblx0XHRQaWFuby5yZWdpb25hbGl6YWNhby5nZXRSZWdpb24oKTtcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcblxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJiYW5uZXJDb250YWRvckxpZ2Fkb1wiLCB0cnVlXSk7XG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyQWN0aXZlXCIsIFBpYW5vLnV0aWwuY2FsbGJhY2tNZXRlcl0pO1xuXHRcdHRwLnB1c2goW1wiYWRkSGFuZGxlclwiLCBcIm1ldGVyRXhwaXJlZFwiLCBQaWFuby51dGlsLmNhbGxiYWNrTWV0ZXJFeHBpcmVkXSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiRmltIEluaXRUcFwiKTtcblx0fVxufTtcblxuZnVuY3Rpb24gbG9hZFBpYW5vRXhwZXJpZW5jZXMoKXtcblx0dmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRhLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuXHRhLmFzeW5jID0gdHJ1ZTtcblx0aWYoUGlhbm8udXRpbC5pc1JldmlzdGEoKSB8fCBQaWFuby51dGlsLmlzVmFsb3IoKSkge1xuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm9SZXZpc3RhcztcdFxuXHR9IGVsc2Uge1xuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm87XG5cdH1cblx0XG5cdHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG5cblx0Yi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBiKTtcblx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiU2NyaXB0IGFkaWNpb25hZG9cIik7XG59XG5cbmZ1bmN0aW9uIHBpYW5vSW5pdCgpIHsgXG5cdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnRpbnkpXG5cdFx0Y29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAncGlhbm9Jbml0JylcblxuICAgIGlmICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSB7IFxuXHRcdHdpbmRvdy5TV0cucHVzaCgoc3Vic2NyaXB0aW9ucykgPT4ge1xuXHRcdFx0aWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKVxuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9nLXN1YnNjcmlwdGlvbnMnLCBzdWJzY3JpcHRpb25zKVxuXG5cdFx0XHRzd2cgPSBzdWJzY3JpcHRpb25zO1xuXG5cdFx0XHRzdWJzY3JpcHRpb25zLnNldE9uRW50aXRsZW1lbnRzUmVzcG9uc2UoZW50aXRsZW1lbnRzUHJvbWlzZSA9PiB7XG5cdFx0XHRcdGVudGl0bGVtZW50c1Byb21pc2UudGhlbihlbnRpdGxlbWVudHMgPT4geyBcblx0XHRcdFx0XHR3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gZW50aXRsZW1lbnRzO1xuXG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFNXR1wiLCBcIkVudGl0bGVtZW50cyByZWNlYmlkb3NcIik7XG5cblx0XHRcdFx0XHRpZiAod2luZG93LnRpbnlDcHQuUGlhbm8udXRpbC50ZW1WYXJpYXZlaXNPYnJpZ2F0b3JpYXMoKSkge1xuXHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xuXHRcdFx0XHRcdFx0XHRsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIlBpYW5vIG5hbyBmb2kgY2FycmVnYWRhIGNvcnJldGFtZW50ZSFcIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEdBLnNldEV2ZW50c0Vycm9yKFwiRW50aXRsZW1lbnRzIG7Do28gY2FycmVnYWRvXCIsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xuICAgICAgICAgICAgbG9hZFBpYW5vRXhwZXJpZW5jZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cudGlueUNwdC5QaWFuby5jaGVja1BheXdhbGwoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdGlueUluaXQoKSB7XG5cdFRpbnkuc2V0UGlhbm8oUGlhbm8pOyBcbiAgICBjb25zdCBTd2cgPSBuZXcgU3dnTW9kdWxlKCk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBTd2cuaW5pdCgpO1xuXHR9XG5cdGNhdGNoKGUpIHsgY29uc29sZS5lcnJvcihlKSB9XG5cblx0cGlhbm9Jbml0KCk7IFxufTtcblxudGlueUluaXQoKTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=