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
    value: function () {
      var _setUtms = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var urlParams, utmsProps, productJson;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                urlParams = new URLSearchParams(window.location.search.substring(1));
                utmsProps = typeof window.glbPaywall.swg !== 'undefined' && typeof window.glbPaywall.swg.utms !== 'undefined' ? window.glbPaywall.swg.utms : null;
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

                if (!(this.disabled || !this.isDefined || !utmsProps)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                _context.next = 8;
                return this.getProduct();

              case 8:
                productJson = _context.sent;
                window.tinyCpt.Swg.global.subscribe(productJson ? productJson.offer : 'br.com.infoglobo.oglobo.site.google');

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setUtms() {
        return _setUtms.apply(this, arguments);
      }

      return setUtms;
    }()
  }, {
    key: "getProducts",
    value: function () {
      var _getProducts = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = window.tinyCpt.isProduction ? 'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/swg/prod/products.json' : 'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/swg/dev/products.json';
                if (window.tinyCpt.debug.swg) url = 'app/mocks/swg/products.json';
                _context2.next = 4;
                return fetch(url).then(function (res) {
                  return res.json();
                });

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this = this;

        var products, product;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.localProductPiano) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.getProducts();

              case 4:
                products = _context3.sent;
                product = products.filter(function (item) {
                  return item.pianoProductName === _this.localProductPiano;
                })[0];
                return _context3.abrupt("return", product || null);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(obj) {
        var propsToRemove, newObj;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                propsToRemove = ['productName', 'pianoProductName', 'offer'];
                newObj = Object.assign({}, obj);
                propsToRemove.forEach(function (element) {
                  delete newObj[element];
                });
                return _context4.abrupt("return", newObj);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var productJSON, product;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t1 = this;
                _context5.next = 3;
                return this.getProduct();

              case 3:
                _context5.t2 = _context5.sent;
                _context5.next = 6;
                return _context5.t1.removeProperties.call(_context5.t1, _context5.t2);

              case 6:
                _context5.t0 = _context5.sent;

                if (_context5.t0) {
                  _context5.next = 9;
                  break;
                }

                _context5.t0 = null;

              case 9:
                productJSON = _context5.t0;
                product = Object.keys(productJSON).length ? JSON.stringify(productJSON) : null;

                if (product) {
                  _context5.next = 15;
                  break;
                }

                return _context5.abrupt("return");

              case 15:
                this.hasProductJSON = true;
                if (this.debug) console.log({
                  'log-SWG-Product': product
                });
                this.productJSON = "".concat(product);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var element;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.markupTemplate();

              case 2:
                if (this.productJSON) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return");

              case 4:
                element = document.createElement('script');
                element.type = 'application/ld+json';
                element.innerHTML = this.productJSON;
                this.elHead.insertAdjacentElement('beforeend', element);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.localProductPiano) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                _context7.next = 4;
                return this.setMarkup();

              case 4:
                if (this.hasProductJSON) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return");

              case 6:
                _context7.next = 8;
                return this.setSwgScript();

              case 8:
                _context7.next = 10;
                return this.setAldebaranScript();

              case 10:
                _context7.next = 12;
                return this.testSWG();

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
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
      'urlSandboxPianoRevistas': 'https://experience.tinypass.com/xbuilder/experience/load?aid=MctFgRCEsu',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwtZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJGYiIsImRhdGEiLCJkZWJ1ZyIsIndpbmRvdyIsInRpbnlDcHQiLCJkaXNhYmxlZCIsImZiIiwiaGFzUGl4ZWwiLCJwaXhlbCIsIm5hbWUiLCJpc0RlZmluZWQiLCJmYnEiLCJHQSIsImdhIiwiUHJvZHVjdHMiLCJQcm9kdWN0c01vZHVsZSIsImRhdGFMYXllciIsImlzUHJvZHVjdFZhbG9yIiwiX2dhcSIsImFjdGlvbiIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkhlbHBlcnMiLCJwcm9wIiwiY19uYW1lIiwidmFsdWUiLCJleHBpcmVkYXlzIiwiZXhkYXRlIiwiRGF0ZSIsImhvc3RuYW1lIiwibG9jYXRpb24iLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRvY3VtZW50IiwiY29va2llIiwiZXNjYXBlIiwidG9VVENTdHJpbmciLCJzcGxpdCIsInJldmVyc2UiLCJtYXRjaCIsIlJlZ0V4cCIsImNvb2tpZVRpbnkiLCJ1bmVzY2FwZSIsInRvU3RyaW5nIiwiUGlhbm8iLCJjb250ZW50Iiwic2V0RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VOYW1lIiwiZXhwZXJpZW5jZSIsInJlZ3Jhc1RpbnkiLCJub21lRXhwZXJpZW5jaWEiLCJzdWJzZWdtZW50YWNhb1BpYW5vIiwic2V0Q29va2llIiwidmFyaWF2ZWlzIiwiY29uc3RhbnRlIiwiVVRQIiwicHJvZHVjdE5hbWUiLCJub21lUHJvZHV0b1BpYW5vIiwicHJvZHVjdHNTZXR0aW5ncyIsIlByb2R1Y3QiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9kdWN0c0lkIiwiaWQiLCJTd2ciLCJTV0ciLCJzd2dFbnRpdGxlbWVudHMiLCJzd2ciLCJsb2NhbFByb2R1Y3RQaWFubyIsImhhc1Byb2R1Y3RKU09OIiwicHJvZHVjdEpTT04iLCJlbEhlYWQiLCJoZWFkIiwic2V0R2xvYmFsU1dHIiwiZ2xvYmFsIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyaW5nIiwidXRtc1Byb3BzIiwiZ2xiUGF5d2FsbCIsInV0bXMiLCJmb3JFYWNoIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwic2V0IiwiZ2V0UHJvZHVjdCIsInByb2R1Y3RKc29uIiwic3Vic2NyaWJlIiwib2ZmZXIiLCJ1cmwiLCJpc1Byb2R1Y3Rpb24iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0UHJvZHVjdHMiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJmaWx0ZXIiLCJwaWFub1Byb2R1Y3ROYW1lIiwib2JqIiwicHJvcHNUb1JlbW92ZSIsIm5ld09iaiIsImVsZW1lbnQiLCJyZW1vdmVQcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXJrdXBUZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3JjIiwidXJsUHJvZCIsInVybFN0ZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldE1hcmt1cCIsInNldFN3Z1NjcmlwdCIsInNldEFsZGViYXJhblNjcmlwdCIsInRlc3RTV0ciLCJUaW55IiwiaGFzUGF5d2FsbCIsInRwIiwiUGF5d2FsbEFuYWx5dGljcyIsInNldEdsb2JhbFRpbnkiLCJzZXRHbG9iYWwiLCJpbml0IiwiZGVmYXVsdFNldHRpbmdzIiwidGlueSIsInBheXdhbGwiLCJhbWJpZW50ZVV0aWxpemFkb1BpYW5vIiwiUGF5d2FsbEdBTW9kdWxlIiwiUGlhbm9Nb2R1bGUiLCJHQU1vZHVsZSIsIm1ldHJpY3MiLCJwYXl3YWxsVHlwZSIsIl9QaWFubyIsInNldEV2ZW50cyIsIlJUSUVYIiwicmVzZXRVdHAiLCJkYXRhc2V0IiwiZ2FSZXNldHV0cCIsImltYWdlVG9wIiwiZ2FJbWFnZVBvc2l0aW9uIiwiZ2FMYWJlbCIsImV2ZW50IiwiZXZlbnRvR0FDYXRlZ29yaWEiLCJldmVudG9HQUFjYW8iLCJnYUFjdGlvbiIsImV2ZW50b0dBUm90dWxvIiwiZXZlbnRvR0FWYWxvciIsImV2ZW50b0dBSW50ZXJhY2FvIiwic2V0RGF0YWxheWVyIiwidHlwZVBheXdhbGwiLCJQYXl3YWxsQ3B0IiwiU3dnTW9kdWxlIiwiRkIiLCJGYk1vZHVsZSIsImRvbWFpbiIsInNldFRlbXBsYXRlU2V0dGluZ3MiLCJQYXl3YWxsIiwiY2FsbGJhY2siLCJ0ZW1wbGF0ZVNldHRpbmdzIiwidGVtcGxhdGUiLCJhc3NldHNQYXRoIiwiZGlzcGxheSIsInByb2R1Y3RDbGFzcyIsInRpdGxlIiwidGFyZ2V0QmxhbmsiLCJ0b3BNb2JpIiwidG9wRGVzayIsInRvcExpbmsiLCJsZWZ0TW9iaSIsImxlZnREZXNrIiwibGVmdExpbmsiLCJyaWdodE1vYmkiLCJyaWdodERlc2siLCJyaWdodExpbmsiLCJoaWRlTG9naW5BcmVhIiwibG9naW5UZXh0IiwibG9naW5QcmVUZXh0IiwibG9naW5UYWciLCJnZXRVcmxMb2dpblJlZ2lzdGVyIiwiY2xlYXJMb2dpbkFyZWEiLCJzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MiLCJlbEJvZHkiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZWxDcHQiLCJxdWVyeVNlbGVjdG9yIiwic2V0RWxXcmFwcGVyIiwicmVtb3ZlIiwiZWxUb1JlbW92ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5IiwiYm9keUFkanVzdCIsInJlbW92ZUVsZW1lbnRzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY3NzTWluaWZpZWQiLCJhY3RpdmVUZW1wbGF0ZVNldHRpbmdzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicGF5d2FsbExvYWQiLCJlbENwdFdyYXAiLCJzZXRUaW1lb3V0IiwiZWxCb2R5SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJlbENwdFdyYXBIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjdXJyZW50VG9wIiwiTWF0aCIsImFicyIsInRvcFdpdGhGdWxsRWxlbWVudCIsInRvcCIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJldnRXaGVlbCIsImV2dFRvdWNoIiwiYWN0aXZlRXZlbnRzIiwic2V0UGl4ZWxUeXBlIiwiY2xpY2tUYXJnZXRzIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJpc0xvZ2luIiwiQm9vbGVhbiIsImdldEF0dHJpYnV0ZSIsImlzVXJsU3dnIiwiaW5jbHVkZXMiLCJub3RCbGFuayIsImhyZWZUYXJnZXQiLCJ0cmlnZ2VyIiwic2V0VXRtcyIsImhyZWYiLCJvcGVuIiwiYmluZCIsIm5ld3RvcCIsInN0ZXAiLCJtdWx0aXBsaWVyIiwiZGVsdGFZIiwiZWxUb3AiLCJ0b3VjaHN0YXJ0WSIsInRvdWNoZW5kWSIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWSIsImRpZmYiLCJ1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byIsInVyaSIsInNlcnZpY2VJZCIsImdldFNlcnZpY29JZCIsInN0ciIsInVybFJldHVybiIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldENvZGlnb1Byb2R1dG8iLCJnZXROb21lUHJvZHV0byIsImRlbGF5VGltZXIiLCJjcmVhdGVUZW1wbGF0ZSIsInRlbXBsYXRlVmFycyIsIlRpbnlNb2R1bGUiLCJzZXRHbG9iYWxWYXJzIiwiYWN0aXZlUGF5d2FsbCIsImFtYmllbnRlc0FjZWl0b3MiLCJzdGF0dXNIdHRwT2J0ZXJBdXRvcml6YWNhb0FjZXNzbyIsInN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJpc0NhbGxiYWNrTWV0dGVyRXhwaXJlZCIsIkdDT00iLCJBTUJJRU5URSIsIlNBVkVfU1VCU0NSSVBUSU9OIiwiQ1JFQVRFRF9HTE9CT0lEIiwiR0xPQk9JRF9NRVNTQUdFIiwibWV0cmljYXMiLCJFVkVOVE9fU0VNX0FDQU8iLCJFUlJPIiwia3J1eCIsIlNFR01FTlRBQ09FUyIsIktSVVhMSUdBRE8iLCJ1dGlsIiwiSVAiLCJERUJVRyIsImlzQ29udGV1ZG9FeGNsdXNpdm8iLCJjb250ZXVkb0V4Y2x1c2l2byIsImdldEFtYmllbnRlUGlhbm8iLCJpbmRleE9mIiwiZ2V0VmFsb3JQYXJhbWV0cm9OYVVybCIsImdldENvb2tpZSIsImdldFRpcG9Db250ZXVkb1BpYW5vIiwidGlwb0NvbnRldWRvUGlhbm8iLCJleGVjdXRvdVBhZ2V2aWV3Iiwic2V0RXZlbnRzRXJyb3IiLCJpc1JldmlzdGEiLCJub21lUHJvZHV0byIsImF1dGVudGljYWNhbyIsImRlZmluZVVzdWFyaW9QaWFubyIsImphbmVsYUFub25pbWEiLCJyZXRyeSIsImlzRG9uZSIsIm5leHQiLCJjdXJyZW50X3RyaWFsIiwibWF4X3JldHJ5IiwiaXNfdGltZW91dCIsImlzSUUxME9yTGF0ZXIiLCJ1c2VyX2FnZW50IiwidWEiLCJleGVjIiwicGFyc2VJbnQiLCJkZXRlY3RQcml2YXRlTW9kZSIsImlzX3ByaXZhdGUiLCJ3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSIsIlRFTVBPUkFSWSIsImUiLCJpbmRleGVkREIiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZGIiLCJyZWFkeVN0YXRlIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ0ZW0iLCJnZXRJdGVtIiwibGlnYWRvIiwicGFyYW1ldHJvIiwidmFsb3JQYXJhbWV0cm8iLCJvYnRlbVNlZ21lbnRhY2FvIiwic2VnbWVudGFjb2VzIiwiaSIsImVudmlhRXZlbnRvc0dBIiwiX0dBQWNhbyIsIl9HQVJvdHVsbyIsIm1vbnRhUm90dWxvR0EiLCJzZXRMaW1pdGVDb250YWdlbSIsIl9HQUxpbWl0ZSIsIl9HQUNvbnRhZ2VtIiwidmlld3MiLCJtYXhWaWV3cyIsImlkZW50aWZpY2FyUGFzc2FnZW1SZWdpc3RlciIsInJlZ3JhcyIsInBhc3NhZ2VtIiwiZmx1eG8iLCJleGVjdXRhQXBvc1BhZ2V2aWV3IiwiZXhwaXJvdSIsInRwQ29udGV4dCIsInNldGFWYXJpYXZlaXMiLCJpZExvZ2luIiwidGlwb0xvZ2luIiwiYXNzaW5hdHVyYUxvZ2FkYSIsImlkTG9naW5Bc3NpbmFudGUiLCJ0aXBvTG9naW5Bc3NpbmFudGUiLCJiYW5uZXIiLCJtb3N0cmFyRm9vdGVyIiwidmVyc2FvIiwiYWRpY2lvbmFyQ3NzIiwibW9udGFVcmxTdGciLCJ4bWxIdHRwUmVxdWVzdCIsImdlcmFTY3JpcHROYVBhZ2luYSIsIm1vc3RyYXJCb3Rhb0Fzc2luYXR1cmFIZWFkZXJGb290ZXIiLCJtb3N0cmFyQXZhdGFySGVhZGVyIiwiYm90dG9tRml4ZWQiLCJwYXJhbXMiLCJnbGJCYW5uZXJCb3R0b20iLCJtb3N0cmFyU1dHIiwiY3NzIiwic2NyaXB0SnMiLCJtb3N0cmFySGlnaGxpZ2h0U2FsZSIsIm1vc3RyYXJTdWJzY3JpYmVCdXR0b25WYWxvciIsInJlZ2lzdGVyIiwibW9zdHJhckJhcnJlaXJhIiwiaGVscGVyIiwicmVkaXJlY2lvbmFyQmFycmVpcmEiLCJzaG93Iiwid2FybiIsInRyaWdnZXJBZHZlcnRpc2luZyIsImVycm9yIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY2hlY2tQYXl3YWxsIiwiY2hlY2tHYXRlIiwiaGFzR2F0ZSIsImhhc1B1YiIsInJlZ2lzdGVyUGF5d2FsbCIsInRpcG8iLCJzdGF0dXMiLCJjb211bmljYWRvIiwibW9zdHJhckluZm9ybWFjYW8iLCJhZGJsb2NrIiwibW9zdHJhckFkQmxvY2siLCJnbGJBZGJsb2NrIiwiYmxvcXVlaW9zIiwibGliZXJhckVzYyIsImJsb3F1ZWlhVmlld01vZGUiLCJwYXJjZWlybyIsIm1vc3RyYUZvb3RlclBhcmNlaXJvIiwiaW5hZGltcGxlbnRlIiwiZ2V0TGlua0Fzc2luYXR1cmEiLCJsaW5rIiwicmVsIiwidXJsU2NyaXB0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9zdGEiLCJyZXNwb25zZVRleHQiLCJhcHBlbmREZVNjcmlwdCIsImFwcGVuZENoaWxkIiwic3RhdHVzVGV4dCIsImZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwiaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVzcEpzb24iLCJwYXJzZSIsInNpdHVhY2FvUGFnYW1lbnRvIiwiZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbyIsImdsYmlkIiwiY29kaWdvUHJvZHV0byIsImNvbmZpZ3VyYWNhbyIsImpzb25Db25maWd1cmFjYW9UaW55UGFzcyIsInVybFZlcmlmaWNhTGVpdG9yIiwicmVzcG9zdGFEZVRlcm1vRGVVc28iLCJyZXNwb3N0YURlTW90aXZvIiwibW90aXZvIiwidGVtVGVybW9EZVVzbyIsImlzQXV0b3JpemFkbyIsImF1dG9yaXphZG8iLCJfanNvbkxlaXRvciIsInVzdWFyaW9JZCIsImJ0b2EiLCJlbmNvZGVVUkkiLCJnb29nbGUiLCJzaG93U2F2ZVN1YnNjcmlwdGlvbiIsInN3Z1NlcnZpY2UiLCJTd2dTZXJ2aWNlIiwic2F2ZUdsb2JvU3Vic2NyaXB0aW9uIiwiaXNBdXRob3JpemVkIiwiZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UiLCJzdWJzY3JpcHRpb25Ub2tlbiIsImlzU3BlY2lmaWNHb29nbGVVc2VyIiwib0dsb2JvQnVzaW5lc3MiLCJPR2xvYm9CdXNpbmVzcyIsInZlcmlmeUlmVXNlckhhc0FjY2Vzc09yRGVmZXJyZWQiLCJlbnRpdGxlbWVudHMiLCJyZXNwb25zZSIsImVuYWJsZXNUaGlzIiwiaXNMb2dhZG9DYWR1biIsInV0cCIsInZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50byIsIl9sZWl0b3IiLCJkZWNvZGVVUkkiLCJhdG9iIiwicHJvZHV0byIsImxvZ2FkbyIsInV1aWQiLCJ0ZXJtb0RlVXNvIiwiaXNTZWN0aW9uIiwidGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzIiwiZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmwiLCJnZXRXaW5kb3dMb2NhdGlvblNlYXJjaCIsImNoYXZlc0NhbXBhbmhhIiwidmFsb3Jlc0NhbXBhbmhhIiwiaWR4UGFyYW1DYW1wYW5oYSIsImNoYXZlQ2FtcGFuaGEiLCJyZWdleCIsInZhbG9yQ2FtcGFuaGEiLCJqb2luIiwiY2FtcGFuaGEiLCJpc09yaWdlbUJ1c2NhZG9yIiwicmVnZXhSb2JvcyIsImVoUm9ibyIsInRlbVBhcmFtZXRyb05hVXJsIiwicGFyYW1OYW1lIiwicGFyYW1ldHJvcyIsImlzRGVidWciLCJpc0RvbWluaW9PR2xvYm8iLCJnZXRXaW5kb3dMb2NhdGlvbkhyZWYiLCJjYWxsYmFja01ldGVyIiwibWV0ZXJEYXRhIiwiY2FsbGJhY2tNZXRlckV4cGlyZWQiLCJjc3NQYXRoIiwiaW5zZXJ0QmVmb3JlIiwibGFzdENoaWxkIiwicmV2aXN0YXMiLCJyZWNhcnJlZ2FQaWFubyIsInRpcG9Db250ZXVkbyIsImlzRXhjbHVzaXZvIiwiY29uc3RydXRvciIsImluaXRUcCIsImV4ZWN1dGUiLCJpc1ZhbG9yIiwiaWRTYW5kYm94VGlueXBhc3NSZXZpc3RhcyIsImlkU2FuZGJveFRpbnlwYXNzIiwic2V0U2FuZEJveCIsImNsZWFuX3VybCIsImxvYWRQaWFub0V4cGVyaWVuY2VzIiwiYSIsImFzeW5jIiwidXJsU2FuZGJveFBpYW5vUmV2aXN0YXMiLCJ1cmxTYW5kYm94UGlhbm8iLCJiIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwicGlhbm9Jbml0Iiwic3Vic2NyaXB0aW9ucyIsInNldE9uRW50aXRsZW1lbnRzUmVzcG9uc2UiLCJlbnRpdGxlbWVudHNQcm9taXNlIiwidGlueUluaXQiLCJzZXRQaWFubyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICdlcG9jYSc6IHtcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2F1dG8tZXNwb3J0ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnYXV0by1lc3BvcnRlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICd2b2d1ZSc6IHtcbiAgICAnY29kX3Byb2QnOiAndm9ndWUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2dsYW1vdXInOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dsYW1vdXInLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2Nhc2Etdm9ndWUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2Nhc2Etdm9ndWUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ21hcmllLWNsYWlyZSc6IHtcbiAgICAnY29kX3Byb2QnOiAnbWFyaWUtY2xhaXJlJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdjYXNhLWUtamFyZGltJzoge1xuICAgICdjb2RfcHJvZCc6ICdjYXNhLWphcmRpbScsXG4gICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdxdWVtLWFjb250ZWNlJzoge1xuICAgICdjb2RfcHJvZCc6ICdxdWVtJyxcbiAgICAnaWQnOiAnNjY5NydcbiAgICB9LFxuICAgICdlcG9jYS1uZWdvY2lvcyc6IHtcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EtbmVnb2Npb3MnLFxuICAgICdpZCc6ICcwMDAwJ1xuICAgIH0sXG4gICAgJ2dsb2JvLXJ1cmFsJzoge1xuICAgICdjb2RfcHJvZCc6ICdnbG9iby1ydXJhbCcsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAncGVnbic6IHtcbiAgICAnY29kX3Byb2QnOiAncGVxdWVuYXMtZW1wcmVzYXMnLFxuICAgICdpZCc6ICcwMDAwJ1xuICAgIH0sXG4gICAgJ2dhbGlsZXUnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2dhbGlsZXUnLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2NyZXNjZXInOiB7XG4gICAgJ2NvZF9wcm9kJzogJ2NyZXNjZXInLFxuICAgICdpZCc6ICc2Njk3J1xuICAgIH0sXG4gICAgJ2dxJzoge1xuICAgICdjb2RfcHJvZCc6ICdncScsXG4gICAgJ2lkJzogJzY2OTcnXG4gICAgfSxcbiAgICAnbW9uZXQnOiB7XG4gICAgJ2NvZF9wcm9kJzogJ21vbmV0JyxcbiAgICAnaWQnOiAnNjYxOCdcbiAgICB9LFxuICAgICdvZ2xvYm8nOiB7XG4gICAgJ2NvZF9wcm9kJzogJ09HMDMnLFxuICAgICdpZCc6ICczOTgxJ1xuICAgIH0sXG4gICAgJ2Jsb2dzJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAzJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdrb2d1dCc6IHtcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXG4gICAgJ2lkJzogJzM5ODEnXG4gICAgfSxcbiAgICAnYWNlcnZvJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzA0JyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICdqb3JuYWxkaWdpdGFsJzoge1xuICAgICdjb2RfcHJvZCc6ICdPRzAxJyxcbiAgICAnaWQnOiAnMzk4MSdcbiAgICB9LFxuICAgICd2YWxvcic6IHtcbiAgICAnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJyxcbiAgICAnaWQnOiAnNjY2OCdcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1ZzsgXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYiA9IGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZmJxICE9PSAndW5kZWZpbmVkJykgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0UGl4ZWxUeXBlKCkge1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGhhc1BpeGVsID0gKHR5cGVvZiB0aGlzLmZiLnBpeGVsLm5hbWUgIT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZmIucGl4ZWwubmFtZSA6IG51bGw7IFxuXG4gICAgICAgIGlmKHRoaXMuaXNEZWZpbmVkICYmIGhhc1BpeGVsKXtcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MTAyNzAwMzk1MjA2MzQnKTtcbiAgICAgICAgICAgIGZicSgndHJhY2tTaW5nbGUnLCAnNDEwMjcwMDM5NTIwNjM0JywgdGhpcy5mYi5waXhlbC5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0EgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcuZ2E7XG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcbiAgICB9XG4gICAgXG4gICAgc2V0R2xvYmFsVmFycygpIHtcbiAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgIHx8IFtdOyBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuUHJvZHVjdHMuaXNQcm9kdWN0VmFsb3IgJiYgdHlwZW9mIF9nYXEgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgd2luZG93Ll9nYXEgPSB3aW5kb3cuX2dhcSAgfHwgW107ICBcbiAgICB9XG5cbiAgICBzZXRFdmVudHMoYWN0aW9uLCBsYWJlbCwgY2F0ZWdvcnkgPSAnUGlhbm8nKSB7XG5cblx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5nYSlcblx0XHRcdGNvbnNvbGUubG9nKCdsb2ctZ2EtZXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbClcblxuICAgICAgICBpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XG5cdFx0XG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogY2F0ZWdvcnksICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcbiAgICB9XG4gICAgXG4gICAgc2V0RXZlbnRzRXJyb3IoYWN0aW9uLCBsYWJlbCkge1xuXHRcdGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8gRXJybycsIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XG5cblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8gRXJybycsICdldmVudG9HQUFjYW8nOiBhY3Rpb24sICdldmVudG9HQVJvdHVsbyc6bGFiZWx9KTtcblx0fVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XG5cbiAgICBzdGF0aWMgaXNEZWZpbmVkKHByb3ApIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcHJvcCAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZTogZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldENvb2tpZShjX25hbWUsIHZhbHVlLCBleHBpcmVkYXlzID0gbnVsbCkge1xuICAgICAgICBsZXQgZXhkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWUgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IG51bGw7XG5cbiAgICAgICAgaWYoIWhvc3RuYW1lKSByZXR1cm47XG5cbiAgICAgICAgZXhkYXRlLnNldERhdGUoZXhkYXRlLmdldERhdGUoKSArIGV4cGlyZWRheXMpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArZXNjYXBlKHZhbHVlKSArICgoZXhwaXJlZGF5cykgPyBcIlwiIDogXCI7ZXhwaXJlcz1cIiArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKVxuICAgICAgICArIFwiOyBwYXRoPS87XCIgKyBcImRvbWFpbj0uXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVsxXSArIFwiLlwiICsgaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKClbMF07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENvb2tpZShuYW1lKSB7XG4gICAgICAgIGxldCBtYXRjaCA9IChkb2N1bWVudC5jb29raWUpID8gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAobmFtZSsnPShbXjtdKyknKSkgOiBmYWxzZTtcbiAgICAgICAgbGV0IGNvb2tpZVRpbnkgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzFdLnRvU3RyaW5nKCkpIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVRpbnk7XG4gICAgfVxuICAgICAgICBcblxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpYW5vIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXRFeHBlcmllbmNlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHtcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy50aW55Q3B0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gd2luZG93LnRpbnlDcHQuUGlhbm87XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0RXhwZXJpZW5jZSgpIHsgIFxuICAgICAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSAnJzsgICBcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UgPSB7fTsgIFxuICAgICAgICAgXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKVxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3JlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhfSAtICR7d2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm99YCA6IHJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhO1xuICAgICAgICBcbiAgICAgICAgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIFxuXHRcdFx0ZXhwZXJpZW5jZU5hbWUgPSB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IGAke3dpbmRvdy5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcbiAgICAgICBcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSA9IGV4cGVyaWVuY2VOYW1lO1xuXHR9XG5cbiAgICByZXNldFV0cCgpIHtcbiAgICAgICAgaWYodGhpcy5pc0RlZmluZWQpXG4gICAgICAgICAgICBIZWxwZXJzLnNldENvb2tpZSh0aGlzLmNvbnRlbnQudmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCAnJywgLTEpO1xuICAgIH1cbn1cbiIsImltcG9ydCBwcm9kdWN0c0lkIGZyb20gJy4uL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgIHtcblx0Y29uc3RydWN0b3IoKSB7IFxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xuICAgIH1cblxuICAgIHNldEdsb2JhbCgpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIFByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3ROYW1lLFxuICAgICAgICAgICAgICAgIC8vIGlkOiB0aGlzLnByb2R1Y3RJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnRpbnlDcHQgPSAod2luZG93LnRpbnlDcHQpID8gIE9iamVjdC5hc3NpZ24ocHJvZHVjdHNTZXR0aW5ncywgd2luZG93LnRpbnlDcHQpIDogcHJvZHVjdHNTZXR0aW5nczsgXG4gICAgfVxuICAgIFxuICAgIGdldCBpc1Byb2R1Y3RWYWxvcigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb2R1Y3ROYW1lICYmIHRoaXMucHJvZHVjdE5hbWUgPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBwcm9kdWN0SWQoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKCAodHlwZW9mIHByb2R1Y3RzSWRbdGhpcy5wcm9kdWN0TmFtZV0gIT09ICAndW5kZWZpbmVkJykgXG4gICAgICAgICYmICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCAhPT0gICd1bmRlZmluZWQnKSApXG4gICAgICAgID8gcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCA6IG51bGw7XG4gICAgICAgIFxuICAgIH1cblxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB3aW5kb3cuU1dHID0gd2luZG93LlNXRyB8fCBbXTsgLy9UT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGlzIHZhcmlhYmxlIGV4aXN0c1xuICAgICAgICB3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gd2luZG93LnN3Z0VudGl0bGVtZW50cyB8fCBudWxsO1xuICAgICAgICB0aGlzLmRlYnVnID0gKEhlbHBlcnMuaXNEZWZpbmVkKHdpbmRvdy50aW55Q3B0KSkgPyB3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vID0gKHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJykgPyBub21lUHJvZHV0b1BpYW5vIDogbnVsbDtcbiAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbEhlYWQgPSBkb2N1bWVudC5oZWFkOyBcblxuICAgICAgICB0aGlzLnNldEdsb2JhbFNXRygpO1xuICAgIH1cblxuICAgIGdldCBpc0RlZmluZWQoKSB7IFxuICAgICAgICByZXR1cm4gKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpID8gdHJ1ZSA6IGZhbHNlOyBcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxTV0coKSB7XG4gICAgICAgIGlmKCFIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpIHJldHVybjtcblxuICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cgPSB7XG4gICAgICAgICAgICBnbG9iYWw6ICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykgPyBzd2cgOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0VXRtcygpIHsgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgY29uc3QgdXRtc1Byb3BzID0gKHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZ2xiUGF5d2FsbC5zd2cudXRtcyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgOiBudWxsOyBcblxuICAgICAgICB1dG1zUHJvcHMuZm9yRWFjaCgoaXRlbSkgPT4geyBcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgdXJsUGFyYW1zLnNldChgdXRtXyR7bmFtZX1gLCB2YWx1ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKSB7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2QnLCAnc2V0VXRtcycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgdXRtc1Byb3BzKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZy1tZXRob2Qtc2V0VXRtcycsIGxvY2F0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmlzRGVmaW5lZCkgfHwgIXV0bXNQcm9wcyApIHJldHVybjtcblxuICAgICAgICBjb25zdCBwcm9kdWN0SnNvbiA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdCgpO1xuICAgICBcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbC5zdWJzY3JpYmUocHJvZHVjdEpzb24gPyBwcm9kdWN0SnNvbi5vZmZlciA6ICdici5jb20uaW5mb2dsb2JvLm9nbG9iby5zaXRlLmdvb2dsZScpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzKCkge1xuICAgICAgICBsZXQgdXJsID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uICBcbiAgICAgICAgPyAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfN2IwYTZkZjQ5ODk1NDU5ZmJhZmU0OWE5NmZjYjViYmYvc3dnL3Byb2QvcHJvZHVjdHMuanNvbicgXG4gICAgICAgIDogJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIXzdiMGE2ZGY0OTg5NTQ1OWZiYWZlNDlhOTZmY2I1YmJmL3N3Zy9kZXYvcHJvZHVjdHMuanNvbic7XG5cbiAgICAgICAgaWYod2luZG93LnRpbnlDcHQuZGVidWcuc3dnKVxuICAgICAgICB1cmwgPSAnYXBwL21vY2tzL3N3Zy9wcm9kdWN0cy5qc29uJ1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3QoKSB7IFxuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnBpYW5vUHJvZHVjdE5hbWUgPT09IHRoaXMubG9jYWxQcm9kdWN0UGlhbm8gKVswXTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyByZW1vdmVQcm9wZXJ0aWVzKG9iaikgeyBcbiAgICAgICAgY29uc3QgcHJvcHNUb1JlbW92ZSA9IFsncHJvZHVjdE5hbWUnLCAncGlhbm9Qcm9kdWN0TmFtZScsICdvZmZlciddO1xuICAgICAgICBjb25zdCBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG4gICAgICAgIHByb3BzVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBuZXdPYmpbZWxlbWVudF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgYXN5bmMgbWFya3VwVGVtcGxhdGUoKSB7IFxuICAgICAgICBjb25zdCBwcm9kdWN0SlNPTiA9ICBhd2FpdCB0aGlzLnJlbW92ZVByb3BlcnRpZXMoYXdhaXQgdGhpcy5nZXRQcm9kdWN0KCkpIHx8IG51bGw7IFxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gT2JqZWN0LmtleXMocHJvZHVjdEpTT04pLmxlbmd0aCA/IEpTT04uc3RyaW5naWZ5KHByb2R1Y3RKU09OKSA6IG51bGw7XG5cbiAgICAgICAgaWYoIXByb2R1Y3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZih0aGlzLmRlYnVnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnbG9nLVNXRy1Qcm9kdWN0JzogcHJvZHVjdH0pO1xuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RKU09OID0gYCR7IHByb2R1Y3QgfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZXRNYXJrdXAoKSB7IFxuICAgICAgICBhd2FpdCB0aGlzLm1hcmt1cFRlbXBsYXRlKCk7XG4gICAgICAgIGlmKCF0aGlzLnByb2R1Y3RKU09OKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgXG4gICAgICAgIGVsZW1lbnQudHlwZSA9ICdhcHBsaWNhdGlvbi9sZCtqc29uJztcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnByb2R1Y3RKU09OO1xuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNldFN3Z1NjcmlwdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBlbGVtZW50LnNyYyA9ICdodHRwczovL25ld3MuZ29vZ2xlLmNvbS9zd2cvanMvdjEvc3dnLmpzJztcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzZXRBbGRlYmFyYW5TY3JpcHQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgdXJsUHJvZCA9ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF9jMTBhZTgxOWM1Njg0NjBiYjRlYzE3YzBhOGVjNTI2Ny9hbGRlYmFyYW4vanMvYnVuZGxlLmpzJztcbiAgICAgICAgY29uc3QgdXJsU3RnID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2FkZGM1ZThmMzE2ZjQ4ZWE5MTgxYWYzNzE2MGIyMmI0L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xuXG4gICAgICAgIGVsZW1lbnQuc3JjID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gdXJsUHJvZCA6IHVybFN0ZztcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0ZXN0U1dHKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LnN3Zykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsID0gd2luZG93LnN3ZztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdUaGVyZSBpc25cXCd0IHdpbmRvdy5zd2cnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICBpZighdGhpcy5sb2NhbFByb2R1Y3RQaWFubykgcmV0dXJuO1xuICAgICAgICBhd2FpdCB0aGlzLnNldE1hcmt1cCgpOyAgXG4gICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuaGFzUHJvZHVjdEpTT04pIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3dnU2NyaXB0KCk7IFxuICAgICAgICBhd2FpdCB0aGlzLnNldEFsZGViYXJhblNjcmlwdCgpOyAgIFxuICAgICAgICBhd2FpdCB0aGlzLnRlc3RTV0coKTsgICAgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RzTW9kdWxlIGZyb20gJy4vUHJvZHVjdHMnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlueSAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcbiAgICAgICAgd2luZG93Lmhhc1BheXdhbGwgPSB3aW5kb3cuaGFzUGF5d2FsbCB8fCBmYWxzZTtcbiAgICAgICAgd2luZG93LnRwID0gd2luZG93LnRwIHx8IFtdO1xuICAgICAgICB3aW5kb3cuUGlhbm8gPSB3aW5kb3cuUGlhbm8gfHwge307XG4gICAgICAgIHdpbmRvdy5QYXl3YWxsQW5hbHl0aWNzID0gd2luZG93LlBheXdhbGxBbmFseXRpY3MgfHwge307XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldEdsb2JhbFRpbnkoKTtcbiAgICAgICAgdGhpcy5Qcm9kdWN0cy5zZXRHbG9iYWwoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgc2V0R2xvYmFsVGlueSgpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgICAgICAgICAgZGVidWc6IHtcbiAgICAgICAgICAgICAgICB0aW55OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXl3YWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzd2c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGdhOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzUHJvZHVjdGlvbjogKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vID09PSAncHJkJykgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy50aW55Q3B0ID0gKHdpbmRvdy50aW55Q3B0KSA/ICBPYmplY3QuYXNzaWduKGRlZmF1bHRTZXR0aW5ncywgd2luZG93LnRpbnlDcHQpIDogZGVmYXVsdFNldHRpbmdzOyBcbiAgICB9XG4gICAgXG4gICAgc2V0UGlhbm8ob2JqKSB7XG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vID0gb2JqO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgfVxuXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vSGVscGVycyc7XG5pbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4uL0dBJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbEdBTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xuICAgIHRoaXMuR0EgPSBuZXcgR0FNb2R1bGUoKTsgXG5cbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tZXRyaWNzID0ge1xuICAgICAgICBwYXl3YWxsOiB7fSwgXG4gICAgICAgIGZiOiB7XG4gICAgICAgICAgICBwaXhlbDoge31cbiAgICAgICAgfSBcbiAgICB9O1xuXG4gICAgdGhpcy5wYXl3YWxsVHlwZSgpO1xuICB9XG5cbiAgcGF5d2FsbExvYWQoKSB7IFxuICAgIGlmKCF0aGlzLlBpYW5vLmlzRGVmaW5lZClcbiAgICAgIHJldHVybjtcblxuICAgIGNvbnN0IF9QaWFubyA9IHRoaXMuUGlhbm8uY29udGVudDtcblxuICAgIHRoaXMuR0Euc2V0RXZlbnRzKCdFeGliaWNhbyBSZWdpc3RlcicsIHdpbmRvdy5QaWFuby5leHBlcmllbmNlLm5hbWUpO1xuICAgIEhlbHBlcnMuc2V0Q29va2llKF9QaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG4gIH1cblxuICB0cmlnZ2VyKGVsZW1lbnQpIHsgXG4gICAgaWYodGhpcy5kaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBcbiAgICBjb25zdCByZXNldFV0cCA9IGVsZW1lbnQuZGF0YXNldC5nYVJlc2V0dXRwIHx8IG51bGw7XG4gICAgY29uc3QgaW1hZ2VUb3AgPSBlbGVtZW50LmRhdGFzZXQuZ2FJbWFnZVBvc2l0aW9uO1xuICAgIGNvbnN0IGxhYmVsID0gKGltYWdlVG9wID09PSAndG9wJykgPyBlbGVtZW50LmRhdGFzZXQuZ2FMYWJlbCArIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsIDogZWxlbWVudC5kYXRhc2V0LmdhTGFiZWw7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZXZlbnQ6ICdFdmVudG9HQScsXG4gICAgICBldmVudG9HQUNhdGVnb3JpYTogdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSxcbiAgICAgIGV2ZW50b0dBQWNhbzogZWxlbWVudC5kYXRhc2V0LmdhQWN0aW9uIHx8IGFjdGlvbixcbiAgICAgIGV2ZW50b0dBUm90dWxvOiBsYWJlbCxcbiAgICAgIGV2ZW50b0dBVmFsb3I6IDAsXG4gICAgICBldmVudG9HQUludGVyYWNhbzogZmFsc2UsXG4gICAgfTsgXG5cbiAgICBpZiAocmVzZXRVdHApXG4gICAgICAgIHRoaXMuUGlhbm8ucmVzZXRVdHAoKTtcbiBcbiAgICB0aGlzLnNldERhdGFsYXllcihkYXRhKTtcbiAgfVxuXG4gIHBheXdhbGxUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSAoICh0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbCAhPT0gJ3VuZGVmaW5lZCcpICYmIHdpbmRvdy50aW55Q3B0LlBpYW5vLnR5cGVQYXl3YWxsKSBcbiAgICAgID8gd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwudG9Mb3dlckNhc2UoKSBcbiAgICAgIDogJ3BheXdhbGwnO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgY29tdW0nO1xuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdDYWRhc3RyZS1zZSc7XG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdSZWdpc3RlcldhbGwnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4Y2x1c2l2byc6XG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLm5hbWUgPSAnUmVnaXN0ZXIgZXhjbHVzaXZvJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld0xvZ2luRXhjbHVzaXZvJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXl3YWxsJzpcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdwYXl3YWxsJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubGFiZWwgPSAnQXNzaW5lIGFnb3JhJztcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1BheXdhbGxFeGNsdXNpdm8nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXREYXRhbGF5ZXIoZGF0YSA9IHt9KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUGlhbm9Nb2R1bGUgZnJvbSAnLi4vUGlhbm8nO1xuaW1wb3J0IFBheXdhbGxHQU1vZHVsZSBmcm9tICcuL1BheXdhbGwtZ2EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuLi9Td2cnO1xuaW1wb3J0IEZiTW9kdWxlIGZyb20gJy4uL0ZCJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbENwdCAge1xuXHRjb25zdHJ1Y3RvcigpIHsgXG5cdHRoaXMuUGlhbm8gPSBuZXcgUGlhbm9Nb2R1bGUoKTtcblx0dGhpcy5HQSA9IG5ldyBQYXl3YWxsR0FNb2R1bGUoKTtcblx0dGhpcy5TV0cgPSBuZXcgU3dnTW9kdWxlKCk7XG5cdHRoaXMuRkIgPSBuZXcgRmJNb2R1bGUodGhpcy5HQS5tZXRyaWNzLmZiKTtcblxuXHR0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcucGF5d2FsbDtcblx0dGhpcy5kb21haW4gPSB3aW5kb3cudGlueUNwdC5pc1Byb2R1Y3Rpb24gPyAnaHR0cHM6Ly9sb2dpbi5nbG9iby5jb20vJyA6ICdodHRwczovL2xvZ2luLnFhLmdsb2JvaS5jb20vJztcdFxuXHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xuXHRcdHRoaXMuaW5pdCgpOyBcblx0fSk7XG5cblx0d2luZG93LlBheXdhbGxDcHQgPSB0aGlzO1xuXG5cdHdpbmRvdy50aW55Q3B0LlBheXdhbGwgPSB7XG5cdFx0ZG9tYWluOiB0aGlzLmRvbWFpbixcblx0XHRHQTogdGhpcy5HQS5tZXRyaWNzLFxuXHR9O1xuICB9XG5cbiAgc2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xuXHRcdGxldCB0ZW1wbGF0ZVNldHRpbmdzID0ge1xuXHRcdFx0dGVtcGxhdGU6ICdkZWZhdWx0Jyxcblx0XHRcdGFzc2V0c1BhdGg6ICcnLFxuXHRcdFx0ZGlzcGxheTogbnVsbCxcblx0XHRcdHByb2R1Y3RDbGFzczogdHlwZW9mIG5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnID8gYHBheXdhbGwtY3B0LSR7bm9tZVByb2R1dG9QaWFub31gIDogJ3BheXdhbGwtY3B0LW9nbG9ibycsXG5cdFx0XHR0aXRsZTogJ0Vzc2UgY29udGXDumRvIMOpIG8gdMOtdHVsby4nLFxuXHRcdFx0dGFyZ2V0Qmxhbms6IHRydWUsXG5cdFx0XHR0b3BNb2JpOiAnJyxcblx0XHRcdHRvcERlc2s6ICcnLFxuXHRcdFx0dG9wTGluazogJycsXG5cdFx0XHRsZWZ0TW9iaTogJycsXG5cdFx0XHRsZWZ0RGVzazogJycsXG5cdFx0XHRsZWZ0TGluazogJycsXG5cdFx0XHRyaWdodE1vYmk6ICcnLFxuXHRcdFx0cmlnaHREZXNrOiAnJyxcblx0XHRcdHJpZ2h0TGluazogJydcblx0XHR9O1xuXG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5oaWRlTG9naW5BcmVhID0gZmFsc2U7XG5cdFx0dGVtcGxhdGVTZXR0aW5ncy5sb2dpblRleHQgPSAnRmHDp2EgbG9naW4nO1xuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5QcmVUZXh0ID0gJ0rDoSBwb3NzdWkgY2FkYXN0cm8/Jztcblx0XHRcblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9ICh3aW5kb3cuZ2xiUGF5d2FsbCkgPyAgT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVTZXR0aW5ncywgd2luZG93LmdsYlBheXdhbGwpIDogdGVtcGxhdGVTZXR0aW5nczsgXG5cdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSBgJHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblByZVRleHR9IDxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGRhdGEtaXMtbG9naW49XCJ0cnVlXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDIgLSBGYcOnYSBsb2dpblwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJmYWxzZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIgJHt3aW5kb3cuZ2xiUGF5d2FsbC50YXJnZXRCbGFua30gXCI+JHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRleHR9PC9hPmA7XG5cblx0XHRpZih3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhKVxuXHRcdFx0dGhpcy5jbGVhckxvZ2luQXJlYSgpO1xuXG5cdFx0aWYodGhpcy5kZWJ1ZyApIFxuXHRcdFx0dGhpcy5zZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKTtcblx0XHRcblx0XHRjYWxsYmFjaygpO1xuXHR9XG5cblx0Y2xlYXJMb2dpbkFyZWEoKSB7XG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwpIHsgXG5cdFx0XHR3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRhZyA9ICcnO1xuXHRcdH1cblx0fVxuXG5cdHNldERlYnVnVGVtcGxhdGVTZXR0aW5ncygpIHtcblx0XHRsZXQgb2JqID0ge307XG5cdFx0b2JqLnRvcE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxNTAnO1xuXHRcdG9iai50b3BEZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDR4MTI4Jztcblx0XHRvYmoudG9wTGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDEnO1xuXHRcdG9iai5sZWZ0TW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMCc7XG5cdFx0b2JqLmxlZnREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoubGVmdExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wyJztcblx0XHRvYmoucmlnaHRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcblx0XHRvYmoucmlnaHREZXNrID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80MDJ4NTE1Jztcblx0XHRvYmoucmlnaHRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMyc7XG5cblx0XHR3aW5kb3cuZ2xiUGF5d2FsbCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5nbGJQYXl3YWxsLCBvYmopO1xuXHR9XG4gXG4gIGJvZHlBZGp1c3QoKSB7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nLCAnaW1wb3J0YW50Jyk7XG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcsICdpbXBvcnRhbnQnKTtcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJzEwMCUnLCAnaW1wb3J0YW50Jyk7XG4gIH1cblxuICBzZXRFbFdyYXBwZXIoKSB7XG5cdHRoaXMuZWxDcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQnKTtcbiAgfVxuXG4gIHJlbW92ZUVsZW1lbnRzKCkge1xuXHR0aGlzLnNldEVsV3JhcHBlcigpO1xuXG5cdGlmKHRoaXMuZWxDcHQpXG5cdFx0dGhpcy5lbENwdC5yZW1vdmUoKTtcblxuXHRjb25zdCBlbFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3RlY3RlZC1jb250ZW50LCAjaW5mb2FydGUtbWFpbi1jb250ZW50Jyk7XG5cblx0ZWxUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHQgIGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xuICB9XG5cbiAgY3JlYXRlVGVtcGxhdGUoKSB7XG5cdHRoaXMuZWxCb2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmJvZHlBZGp1c3QoKTtcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRzKCk7XG5cdHRoaXMuZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jc3NNaW5pZmllZCk7IFxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpOyBcblx0dGhpcy5hY3RpdmVUZW1wbGF0ZVNldHRpbmdzKCk7XHRcbiAgICBcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGVtcGxhdGVTZXR0aW5ncygpO1xuICAgICAgICB9KTtcblx0fVxuXG5cdHRoaXMuR0EucGF5d2FsbExvYWQoKTtcbiAgfVxuXG4gIGFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKSB7XG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XG5cdHRoaXMuZWxDcHRXcmFwID0gdGhpcy5lbENwdC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQtd3JhcCcpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGNvbnN0IGVsQm9keUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIDQ7XG5cdFx0Y29uc3QgZWxDcHRXcmFwSGVpZ2h0ID0gdGhpcy5lbENwdFdyYXAub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBjdXJyZW50VG9wID0gKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcykgXG4gICAgICAgID8gTWF0aC5hYnMoIGVsQm9keUhlaWdodC8yIClcbiAgICAgICAgOiBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKTtcblx0XHRjb25zdCB0b3BXaXRoRnVsbEVsZW1lbnQgPSAoZWxCb2R5SGVpZ2h0IC0gZWxDcHRXcmFwSGVpZ2h0KTtcblxuXHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7Y3VycmVudFRvcH1weGA7XG5cdFx0dGhpcy5lbENwdC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLnpJbmRleCA9IDk5OTk5OTk5OTk7XG5cblx0XHR0aGlzLmV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCk7XG5cdFx0dGhpcy5ldnRUb3VjaChjdXJyZW50VG9wLCB0b3BXaXRoRnVsbEVsZW1lbnQpO1xuXHRcdHRoaXMuYWN0aXZlRXZlbnRzKCk7XG5cblx0XHR0aGlzLkZCLnNldFBpeGVsVHlwZSgpO1xuXHR9LCAxMDAwKTtcbiAgfVxuXG4gIGFjdGl2ZUV2ZW50cygpIHtcblx0Y29uc3QgY2xpY2tUYXJnZXRzID0gdGhpcy5lbENwdFdyYXAucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXG5cdGNsaWNrVGFyZ2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHsgXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luID0gQm9vbGVhbihlbGVtZW50LmRhdGFzZXQuaXNMb2dpbikgfHwgZmFsc2U7XG5cdFx0XHRjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGZhbHNlIDsgXG5cdFx0XHRjb25zdCBpc1VybFN3ZyA9ICh1cmwpID8gdXJsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ29mZXJ0YXN3ZycpIDogZmFsc2U7XG5cdFx0XHRjb25zdCBub3RCbGFuayA9IGVsZW1lbnQuZGF0YXNldC5ocmVmVGFyZ2V0IHx8IHRydWU7IFxuXHRcdFx0XG5cdFx0XHR0aGlzLkdBLnRyaWdnZXIoZWxlbWVudCk7IFxuXG5cdFx0XHRpZighaXNMb2dpbiAmJiBpc1VybFN3Zylcblx0XHRcdFx0dGhpcy5TV0cuc2V0VXRtcygpOyAgXG5cbiAgICAgICAgICAgIGlmICh1cmwgJiYgIWlzVXJsU3dnKSB7IFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdEJsYW5rID8gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsKSA6IHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cblx0XHR9LmJpbmQodGhpcykpO1xuXHR9KTtcbiAgfVxuXG4gIGV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xuXHRsZXQgbmV3dG9wID0gY3VycmVudFRvcDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnd2hlZWwnLFxuXHRcdGZ1bmN0aW9uKGV2dCkgeyBcblx0XHQgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VG9wIC8gMTAwO1xuXHRcdCAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xuXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA+PSAxKSB7XG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCAtIHN0ZXAgKiBtdWx0aXBsaWVyOyBcblx0XHRcdG5ld3RvcCA9IGVsVG9wIDwgdG9wV2l0aEZ1bGxFbGVtZW50ID8gdG9wV2l0aEZ1bGxFbGVtZW50IDogZWxUb3A7XG4gIFxuXHRcdFx0dGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xuXHRcdCAgfVxuICBcblx0XHQgIGlmIChldnQuZGVsdGFZIDw9IC0xKSB7XG5cdFx0XHRjb25zdCBlbFRvcCA9IG5ld3RvcCArIHN0ZXAgKiBtdWx0aXBsaWVyO1xuXHRcdFx0bmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xuICBcblx0XHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcblx0XHQgIH1cblx0XHR9LmJpbmQodGhpcylcblx0ICApO1xuICB9XG5cbiAgZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KSB7XG4gICAgbGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XG4gICAgbGV0IHRvdWNoc3RhcnRZID0gMDtcbiAgICBsZXQgdG91Y2hlbmRZID0gMDtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgdG91Y2hzdGFydFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2dCkgeyBcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xuICAgICAgICB0b3VjaGVuZFkgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcblxuICAgICAgICBpZiAodG91Y2hlbmRZIDwgdG91Y2hzdGFydFkpIHsgXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnModG91Y2hzdGFydFkpIC0gTWF0aC5hYnModG91Y2hlbmRZKTtcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gZGlmZjsgXG4gICAgICAgICAgICBuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xuXG4gICAgICAgICAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG91Y2hlbmRZID4gdG91Y2hzdGFydFkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaGVuZFkgLSB0b3VjaHN0YXJ0WTtcbiAgICAgICAgICAgIGNvbnN0IGVsVG9wID0gbmV3dG9wICsgZGlmZjsgXG5cdFx0ICAgIG5ld3RvcCA9IGVsVG9wID4gY3VycmVudFRvcCA/IGN1cnJlbnRUb3AgOiBlbFRvcDtcblxuXHRcdCAgICB0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XG4gICAgICAgIH1cblx0fS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XG5cdGNvbnN0IHVybFZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvID0gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gPT09ICdwcmQnID8gJ2h0dHBzOi8vYXNzaW5hdHVyYS5vZ2xvYm8uZ2xvYm8uY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnIDogJ2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tL1ZhbGlkYVVzdWFyaW9CYXJyYW1lbnRvLmh0bWwnO1xuXHRjb25zdCB1cmkgPSBsb2NhdGlvbi5ocmVmO1xuXHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcblx0bGV0IHN0ciA9ICcnO1xuXHRsZXQgdXJsUmV0dXJuID0gJyc7XG5cblx0aWYoIXRoaXMuZGVidWcgJiYgdGhpcy5QaWFuby5pc0RlZmluZWQpIHtcblx0XHR1cmxSZXR1cm4gPSBlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxuXHRcdFx0KyAnJnNlcnZpY2VJZD0nICsgc2VydmljZUlkXG5cdFx0XHQrICcmYW1iaWVudGVVdGlsaXphZG89JyArIHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vXG5cdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxuXHRcdFx0KyAnJnVybFJldG9ybm89JyArIHVyaVxuXHRcdCk7XG5cblx0XHRpZih0eXBlID09PSAncmVnaXN0ZXInKSB7XG5cdFx0XHRzdHIgPSBgJHt0aGlzLmRvbWFpbn1jYWRhc3Ryby8ke3NlcnZpY2VJZH0/dXJsPSR7dXJsUmV0dXJufWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0ciA9IGAke3RoaXMuZG9tYWlufWxvZ2luLyR7c2VydmljZUlkfT91cmw9JHt1cmxSZXR1cm59YDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4gIGdldCB0ZW1wbGF0ZVZhcnMoKSB7XG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbDtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXG5cdGNvbnN0IHRlbXBsYXRlID0gYFxuXHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdCAke3RoaXMudGVtcGxhdGVWYXJzLnByb2R1Y3RDbGFzc31cIj4gXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkXCI+XG5cdFx0XHQke3RoaXMudGVtcGxhdGVWYXJzLnRpdGxlfVxuXHRcdDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3RvcFwiPlxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BMaW5rfVwiIGRhdGEtZ2EtaW1hZ2UtcG9zaXRpb249XCJ0b3BcIiBkYXRhLWdhLWFjdGlvbj1cIkNsaXF1ZSBlbSBsaW5rXCIgZGF0YS1nYS1sYWJlbD1cIkxpbmsgMSAtXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cblx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgbWVkaWE9XCIobWF4LXdpZHRoOiAxMDIzcHgpXCI+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgLz5cblx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0PC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXIgJHt3aW5kb3cuZ2xiUGF5d2FsbC5oaWRlTG9naW5BcmVhID8gJ2lzLWhpZGUnIDogJyd9XCI+XG5cdFx0ICBcdCR7dGhpcy50ZW1wbGF0ZVZhcnMubG9naW5UYWd9XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX19sZWZ0XCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRMaW5rfVwiIGRhdGEtZ2EtYWN0aW9uPVwiQ2xpcXVlIGVtIGxpbmtcIiBkYXRhLWdhLWxhYmVsPVwiTGluayA0IC0gQmFubmVyIG9mZXJ0YSBlc3F1ZXJkYVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XG5cdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMubGVmdERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLmxlZnRNb2JpfVwiIC8+XG5cdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3JpZ2h0XCI+XG5cdFx0ICBcdDxhIGhyZWY9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TGlua31cIiAgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDUgLSBCYW5uZXIgb2ZlcnRhIGRpcmVpdGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxuXHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIG1lZGlhPVwiKG1heC13aWR0aDogMTAyM3B4KVwiPlxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiAvPlxuXHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHQ8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0ICA8L2Rpdj5cblx0ICBgO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcblx0ICByZXR1cm4gYDxzdHlsZT5cblx0ICAucGF5d2FsbC1jcHR7b3BhY2l0eTowO3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDB2dztvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYm94LXNoYWRvdzowIDAgNzBweCAwIHJnYmEoMCwwLDAsLjUpO2JveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZn0ucGF5d2FsbC1jcHQsLnBheXdhbGwtY3B0ICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2V9LnBheXdhbGwtY3B0IGF7Zm9udC13ZWlnaHQ6NzAwO3RleHQtZGVjb3JhdGlvbjpub25lfS5wYXl3YWxsLWNwdCBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnBheXdhbGwtY3B0IC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0IGF7Y29sb3I6IzAwMH0ucGF5d2FsbC1jcHQtb2dsb2JvIC5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWQsLnBheXdhbGwtY3B0LW9nbG9ibyBhe2NvbG9yOiMzMjVlOTR9LnBheXdhbGwtY3B0LXdyYXB7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWJvdHRvbToyMHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsucGF5d2FsbC1jcHQtd3JhcHstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfX0ucGF5d2FsbC1jcHQtd3JhcCBpbWd7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b30ucGF5d2FsbC1jcHQtd3JhcF9fdG9we3BhZGRpbmctdG9wOjIwcHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtaGVhZHt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwIDA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NzAwfS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlcnt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwO2NvbG9yOiM3Njc2NzY7Zm9udC1zaXplOjE2cHh9LnBheXdhbGwtY3B0LXdyYXBfX3RleHQtY2VudGVyLmlzLWhpZGV7cGFkZGluZy1ib3R0b206MH1cblx0ICA8L3N0eWxlPmA7XG4gIH1cblxuICBpbml0KCkgeyBcblx0ICBjb25zdCBkZWxheVRpbWVyID0gKHdpbmRvdy5nbGJQYXl3YWxsICYmIHdpbmRvdy5nbGJQYXl3YWxsLmRlbGF5VGltZXIpID8gd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lciAqIDEwMDAgOiAwO1xuXG5cdHNldFRpbWVvdXQoKCkgPT57XG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZSgpO1xuXHR9LCBkZWxheVRpbWVyKTtcbiAgfVxufSIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5pbXBvcnQgVGlueU1vZHVsZSBmcm9tICcuL1RpbnknO1xuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4vR0EnO1xuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuL1N3Zyc7XG5pbXBvcnQgUGF5d2FsbENwdCBmcm9tICcuL2NwbnQtcGF5d2FsbC9QYXl3YWxsJztcblxuY29uc3QgVGlueSA9IG5ldyBUaW55TW9kdWxlKCk7XG5jb25zdCBHQSA9IG5ldyBHQU1vZHVsZSgpO1xuXG5HQS5zZXRHbG9iYWxWYXJzKCk7XG5cblBpYW5vLmFjdGl2ZVBheXdhbGwgPSB0cnVlO1xuUGlhbm8udHlwZVBheXdhbGwgPSBudWxsO1xuUGlhbm8udmFyaWF2ZWlzID0ge1xuXHRhbWJpZW50ZXNBY2VpdG9zOiBcImludCxxbHQscHJkXCIsXG5cdHN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvOiBcIjQwMCw0MDQsNDA2LDUwMCw1MDIsNTAzLDUwNFwiLFxuXHRzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBcIjQwMCw0MDQsNTAwLDUwMiw1MDMsNTA0XCIsXG5cdGlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkOiBmYWxzZSxcblx0Y29uc3RhbnRlOiB7XG5cdFx0Y29va2llOiB7XG5cdFx0XHRHQ09NOiAnR0xCSUQnLFxuXHRcdFx0VVRQOiAnX3V0cCcsXG5cdFx0XHRSVElFWDogJ19ydGlleCcsXG5cdFx0XHRBTUJJRU5URTogJ2FtYmllbnRlUGlhbm8nLFxuXHRcdFx0U0FWRV9TVUJTQ1JJUFRJT046ICdzYXZlU3Vic2NyaXB0aW9uQ29va2llJyxcblx0XHRcdENSRUFURURfR0xPQk9JRDogJ2NyZWF0ZWRHbG9ib0lkJyxcblx0XHRcdEdMT0JPSURfTUVTU0FHRTogJ2dsb2JvSWRNZXNzYWdlJ1xuXHRcdH0sXG5cdFx0bWV0cmljYXM6IHtcblx0XHRcdEVWRU5UT19TRU1fQUNBTzogJ3NlbSBhY2FvJyxcblx0XHRcdEVSUk86ICdFcnJvJ1xuXHRcdH0sXG5cdFx0a3J1eDoge1xuXHRcdFx0U0VHTUVOVEFDT0VTOiAna3hnbG9ib19zZWdzJyxcblx0XHRcdEtSVVhMSUdBRE86ICdrcnV4LWxpZ2Fkbydcblx0XHR9LFxuXHRcdHV0aWw6IHtcblx0XHRcdElQOiBcIjEyNy4wLjAuMVwiLFxuXHRcdFx0QU1CSUVOVEU6IFwiYW1iaWVudGUtZGVzZWphZG9cIixcblx0XHRcdERFQlVHOiBcImRlYnVnLXBpYW5vXCJcblx0XHR9XG5cdH0sXG5cdGlzQ29udGV1ZG9FeGNsdXNpdm86IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldEFtYmllbnRlUGlhbm86IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpKSA+IC0xKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSwgUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSksIDEpO1xuXHRcdFx0cmV0dXJuIFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpO1xuXHRcdH1cblx0XHRpZiAoUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5BTUJJRU5URSkgPT0gJ2ZhbHNlJykge1xuXHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKSkge1xuXHRcdFx0cmV0dXJuIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFKTtcblx0XHR9O1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKHdpbmRvdy5hbWJpZW50ZVV0aWxpemFkb1BpYW5vKSA+IC0xID8gd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gOiAncHJkJztcblx0fSxcblx0Z2V0VGlwb0NvbnRldWRvUGlhbm86IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cudGlwb0NvbnRldWRvUGlhbm87XG5cdH0sXG5cdGV4ZWN1dG91UGFnZXZpZXc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cuZXhlY3V0b3VQYWdldmlldyA/IHRydWUgOiBmYWxzZTtcblx0fSxcblx0Z2V0Tm9tZVByb2R1dG86IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8pe1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJOb21lIGRvIHByb2R1dG8gbsOjbyBkZWZpbmlkby5cIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm87XG5cdH0sXG5cdGdldFNlcnZpY29JZDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gJzAwMDAnO1xuXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdvZ2xvYm8nIFxuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdibG9ncycgXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2tvZ3V0J1xuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdhY2Vydm8nXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2pvcm5hbGRpZ2l0YWwnKXtcblx0XHRcdHJldHVybiBpZCA9ICczOTgxJztcblx0XHR9XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgJiYgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdtb25ldCcpeyBcblx0XHRcdHJldHVybiBpZCA9ICc2NjE4Jztcblx0XHR9ZWxzZSBpZiAoUGlhbm8udXRpbC5pc1JldmlzdGEoKSl7XG5cdFx0XHRyZXR1cm4gaWQgPSAnNjY5Nyc7XG5cdFx0fVxuXG5cdFx0aWYoUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICd2YWxvcicpe1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gJzY2NjgnO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoaWQgPT09ICcwMDAwJylcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdTZXJ2aWNlSUQgbsOjbyBkZWZpbmlkby4nLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmICsgXG5cdFx0XHRcdCcgbm9tZVByb2R1dG86ICcgKyBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSApO1xuXG5cdFx0cmV0dXJuIGlkO1xuXHR9LFxuXHRnZXRDb2RpZ29Qcm9kdXRvOiBmdW5jdGlvbigpe1xuXHRcdHZhciBub21lUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpO1xuXHRcdHN3aXRjaCAobm9tZVByb2R1dG8pe1xuXHRcdFx0Y2FzZSAnb2dsb2JvJzpcblx0XHRcdGNhc2UgJ2Jsb2dzJzpcblx0XHRcdGNhc2UgJ2tvZ3V0Jzpcblx0XHRcdFx0cmV0dXJuICdPRzAzJztcblx0XHRcdGNhc2UgJ2FjZXJ2byc6XG5cdFx0XHRcdHJldHVybiAnT0cwNCc7XG5cdFx0XHRjYXNlICdqb3JuYWxkaWdpdGFsJzpcblx0XHRcdFx0cmV0dXJuICdPRzAxJztcblx0XHRcdGNhc2UgJ2F1dG8tZXNwb3J0ZSc6XG5cdFx0XHRjYXNlICdlcG9jYSc6XG5cdFx0XHRjYXNlICd2b2d1ZSc6XG5cdFx0XHRjYXNlICdnbGFtb3VyJzpcblx0XHRcdGNhc2UgJ2Nhc2Etdm9ndWUnOlxuXHRcdFx0Y2FzZSAnbWFyaWUtY2xhaXJlJzpcblx0XHRcdGNhc2UgJ2dsb2JvLXJ1cmFsJzpcblx0XHRcdGNhc2UgJ2dxJzpcblx0XHRcdGNhc2UgJ21vbmV0Jzpcblx0XHRcdGNhc2UgJ2NyZXNjZXInOlxuXHRcdFx0Y2FzZSAnZ2FsaWxldSc6XG5cdFx0XHRcdHJldHVybiBub21lUHJvZHV0bztcblx0XHRcdGNhc2UgJ2Nhc2EtZS1qYXJkaW0nOlxuXHRcdFx0XHRyZXR1cm4gJ2Nhc2EtamFyZGltJztcblx0XHRcdGNhc2UgJ3F1ZW0tYWNvbnRlY2UnOlxuXHRcdFx0XHRyZXR1cm4gJ3F1ZW0nO1xuXHRcdFx0Y2FzZSAndmFsb3InOlxuXHRcdFx0XHRyZXR1cm4gJ3ZhbG9yZGlnaXRhbCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFvIG9idGVyIGPDs2RpZ28gZG8gcHJvZHV0b1wiLCBub21lUHJvZHV0byArIFwiIC0gXCIgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyh0cnVlLCAnZXJybycsIHRydWUsIFwiIFwiKTtcblx0XHRcdFx0cmV0dXJuICdlcnJvcic7XG5cdFx0fVxuXHR9XHRcbn07XG5cblBpYW5vLmphbmVsYUFub25pbWEgPSB7XG5cdHJldHJ5IDogZnVuY3Rpb24oaXNEb25lLCBuZXh0KSB7XG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xuXHRcdHZhciBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcblx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3VycmVudF90cmlhbCsrID4gbWF4X3JldHJ5KSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQxMFxuXHRcdCk7XG5cdH0sXG5cdGlzSUUxME9yTGF0ZXIgOiBmdW5jdGlvbih1c2VyX2FnZW50KSB7XG5cdFx0bGV0IHVhID0gdXNlcl9hZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xuXHRcdFxuXHRcdGlmICh1YS5pbmRleE9mKCdtc2llJykgPT09IDAgJiYgdWEuaW5kZXhPZigndHJpZGVudCcpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChtYXRjaCAmJiBwYXJzZUludChtYXRjaFsxXSwgMTApID49IDEwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZXRlY3RQcml2YXRlTW9kZSA6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGlzX3ByaXZhdGU7XG5cblx0XHRpZiAod2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKSB7XG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXG5cdFx0XHRcdHdpbmRvdy5URU1QT1JBUlksIDEsXG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAod2luZG93LmluZGV4ZWREQiAmJiAvRmlyZWZveC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHZhciBkYjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRiID0gd2luZG93LmluZGV4ZWREQi5vcGVuKCd0ZXN0Jyk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgaXNfcHJpdmF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcblx0XHRcdFx0XHRmdW5jdGlvbiBpc0RvbmUoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGIucmVhZHlTdGF0ZSA9PT0gJ2RvbmUnID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZnVuY3Rpb24gbmV4dChpc190aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWlzX3RpbWVvdXQpIHtcblx0XHRcdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IGRiLnJlc3VsdCA/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChQaWFuby5qYW5lbGFBbm9uaW1hLmlzSUUxME9yTGF0ZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIXdpbmRvdy5pbmRleGVkREIpIHtcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UgJiYgL1NhZmFyaS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIDEpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGlzX3ByaXZhdGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcblx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZXN0Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5yZXRyeShcblx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBpc19wcml2YXRlICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcblx0XHRcdFx0Y2FsbGJhY2soaXNfcHJpdmF0ZSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufTtcblxuUGlhbm8ua3J1eCA9IHtcblx0dGVtOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpID8gdHJ1ZSA6IGZhbHNlO1xuXHR9LFxuXHRsaWdhZG86IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETztcblx0XHR2YXIgdmFsb3JQYXJhbWV0cm8gPSBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKTtcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ2ZhbHNlJyAmJiB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyAhPSBcInByZFwiKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJyB8fCB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PSBcInByZFwiKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LktSVVhMSUdBRE8pID09IFwiZmFsc2VcIikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0b2J0ZW1TZWdtZW50YWNhbzogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKFBpYW5vLmtydXgudGVtKCkgJiYgUGlhbm8ua3J1eC5saWdhZG8oKSkge1xuXHRcdFx0dmFyIHNlZ21lbnRhY29lcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguU0VHTUVOVEFDT0VTKS5zcGxpdCgnLCcpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50YWNvZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBzZWdtZW50YWNvZXNbaV0sIHNlZ21lbnRhY29lc1tpXV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUGlhbm8ubWV0cmljYXMgPSB7XG5cdGVudmlhRXZlbnRvc0dBOiBmdW5jdGlvbihfR0FBY2FvLCBfR0FSb3R1bG8pIHsgLy9UT0RPOiBhcnF1aXZvIHRpbnlwYXNzLmpzLCBpbnNlcmlkbyBwZWxhIFBpYW5vLCB1dGlsaXphIGVzc2EgZnVuw6fDo29cblx0XHRjb25zdCBpc1Byb2R1Y3RWYWxvciA9ICh0eXBlb2Ygd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID09PSAndmFsb3InKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBpZiAoaXNQcm9kdWN0VmFsb3IpXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdQaWFubycsIF9HQUFjYW8sIF9HQVJvdHVsbywgLHRydWVdKTtcblx0XHRlbHNlXG5cdFx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiAnUGlhbm8nLCAnZXZlbnRvR0FBY2FvJzogX0dBQWNhbywgJ2V2ZW50b0dBUm90dWxvJzpfR0FSb3R1bG99KTtcblx0fSxcblxuXHRtb250YVJvdHVsb0dBOiBmdW5jdGlvbigpIHsgLy9UT0RPOiBhdCBQaWFubyBhcyBzZXRFeHBlcmllbmNlKCkgfCBDaGVjayBvbiBvbGQgdGlueSBiZWZvcmUgcmVtb3ZlXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgKyBcIiAtIFwiICsgd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gOiB3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cubm9tZUV4cGVyaWVuY2lhKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyB3aW5kb3cubm9tZUV4cGVyaWVuY2lhICsgXCIgLSBcIiArIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcblx0XHR9XG5cdFx0cmV0dXJuIFwiIFwiO1xuXHR9LFxuXHRzZXRMaW1pdGVDb250YWdlbTogZnVuY3Rpb24obWV0cmljYXMpIHtcblx0XHRfR0FMaW1pdGUgPSBcIi1cIjtcblx0XHRfR0FDb250YWdlbSA9IFwiLVwiO1xuXHRcdGlmKCFtZXRyaWNhcykgcmV0dXJuO1xuXHRcdF9HQUNvbnRhZ2VtID0gXCJcIiArIG1ldHJpY2FzLnZpZXdzO1xuXHRcdGlmIChfR0FDb250YWdlbS5sZW5ndGggPT0gMSkge1xuXHRcdFx0X0dBQ29udGFnZW0gPSBcIjBcIiArIF9HQUNvbnRhZ2VtO1xuXHRcdH1cblx0XHRfR0FMaW1pdGUgPSBtZXRyaWNhcy5ub21lRXhwZXJpZW5jaWEgK1wiIDogXCIrIG1ldHJpY2FzLm1heFZpZXdzO1xuXHR9LFxuXHRpZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXI6IGZ1bmN0aW9uKHJlZ3Jhcykge1xuXHRcdHZhciBwYXNzYWdlbSA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUubWV0cmljYXMuRVZFTlRPX1NFTV9BQ0FPO1xuXHRcdGlmKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkge1xuXHRcdFx0cGFzc2FnZW0gPSByZWdyYXMuZmx1eG8uaW5kZXhPZihcImhhcmR3YWxsXCIpICE9IC0xID8gJ3JlZ2lzdGVyLWhhcmR3YWxsLXBhc3NvdScgOiAncmVnaXN0ZXItY29udGFnZW0tcGFzc291Jztcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0fVxuXHRcdHJldHVybiBwYXNzYWdlbTtcblx0fSxcblx0ZXhlY3V0YUFwb3NQYWdldmlldzogZnVuY3Rpb24oZXhwaXJvdSkge1xuXHRcdGlmICghUGlhbm8udmFyaWF2ZWlzLmV4ZWN1dG91UGFnZXZpZXcoKSkge1xuXHRcdFx0d2luZG93LnJlZ3Jhc1RpbnkuZmx1eG8gPSB3aW5kb3cudHBDb250ZXh0ID8gdHBDb250ZXh0LnRvTG93ZXJDYXNlKCkgOiAnLSc7XG5cdFx0XHR3aW5kb3cucmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWEgPSB3aW5kb3cubm9tZUV4cGVyaWVuY2lhID8gd2luZG93Lm5vbWVFeHBlcmllbmNpYSA6ICcnO1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0TGltaXRlQ29udGFnZW0od2luZG93LnJlZ3Jhc1RpbnkpO1xuXHRcdFx0aWYgKGV4cGlyb3UgPT0gZmFsc2UpIEdBLnNldEV2ZW50cyhQaWFuby5tZXRyaWNhcy5pZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXIod2luZG93LnJlZ3Jhc1RpbnkpLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0ZXhlY3V0b3VQYWdldmlldyA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRzZXRhVmFyaWF2ZWlzOiBmdW5jdGlvbihpZExvZ2luLCB0aXBvTG9naW4sIGFzc2luYXR1cmFMb2dhZGEpe1xuXHRcdFBheXdhbGxBbmFseXRpY3MuaWRMb2dpbkFzc2luYW50ZSA9IGlkTG9naW47XG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MudGlwb0xvZ2luQXNzaW5hbnRlID0gdGlwb0xvZ2luO1xuICAgICAgICBQYXl3YWxsQW5hbHl0aWNzLmFzc2luYXR1cmFMb2dhZGEgPSBhc3NpbmF0dXJhTG9nYWRhO1xuXHR9XG59O1xuXG5cblBpYW5vLmJhbm5lciA9IHtcblx0bW9zdHJhckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92by1iYW5uZXItZm9vdGVyLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyQm90YW9Bc3NpbmF0dXJhSGVhZGVyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYmFubmVyLWhlYWRlci1mb290ZXItcGlhbm8uanNcIik7XG5cdH0sXG5cdG1vc3RyYXJBdmF0YXJIZWFkZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3N0eWxlcy9zdHlsZXMuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2F2YXRhci1oZWFkZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvYXZhdGFyLWhlYWRlci1waWFuby5qc1wiKTtcblx0fSxcblx0Ym90dG9tRml4ZWQ6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XG5cdFx0d2luZG93LmdsYkJhbm5lckJvdHRvbSA9IHBhcmFtcztcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc3R5bGVzL2Jhbm5lci1ib3R0b20tZml4ZWQuY3NzJz5cIik7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Jhbm5lci1ib3R0b20tZml4ZWQvc2NyaXB0cy9iYW5uZXItYm90dG9tLWZpeGVkLmpzXCIpO1xuXHR9LFxuXHRtb3N0cmFyU1dHOiBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBjc3MgPSBgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWMke1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKX0uaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3N3Zy92MS9zdHlsZXMvc3R5bGUuY3NzJz5gO1xuXHRcdGNvbnN0IHNjcmlwdEpzID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc2NyaXB0L2FudW5jaW8tc3dnLmpzYDtcblxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKGNzcyk7XG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKHNjcmlwdEpzKTtcblx0fSxcblx0bW9zdHJhckhpZ2hsaWdodFNhbGU6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9oaWdobGlnaHQtc2FsZS9cIit2ZXJzYW8rXCIvc2NyaXB0cy9oaWdobGlnaHQtc2FsZS5qc1wiKTtcblx0fSxcblx0bW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yOiBmdW5jdGlvbih2ZXJzYW8pIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvdmFsb3Itc3Vic2NyaWJlLWJ1dHRvbi9cIit2ZXJzYW8rXCIvc2NyaXB0cy9zdWJzY3JpYmUtYnV0dG9uLmpzXCIpO1xuXHR9XG5cbn07XG5cblBpYW5vLnJlZ2lzdGVyID0ge1xuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZhLXRlbGEtcmVnaXN0ZXIuanNcIik7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdH1cbn07XG5cblBpYW5vLmhlbHBlciA9IHtcblx0bW9zdHJhckJhcnJlaXJhOiBmdW5jdGlvbigpIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF82NWQxOTMwYTBiZGE0NzZiYThkM2MyNWM1MzcxZWMzZi9waWFuby9oZWxwZXIvcmVnaXN0ZXIuanNcIik7XG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdH1cbn07XG5cblBpYW5vLnBheXdhbGwgPSB7XG5cdHJlZGlyZWNpb25hckJhcnJlaXJhOiBmdW5jdGlvbih1cmwpIHtcblx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7fSwgMTAwMCk7XG5cdH0sXG5cdHNob3c6IGZ1bmN0aW9uKHR5cGVQYXl3YWxsID0gbnVsbCkge1xuXHRcdFBpYW5vLnR5cGVQYXl3YWxsID0gdHlwZVBheXdhbGw7XG5cdFxuXHRcdGlmKCFQaWFuby5hY3RpdmVQYXl3YWxsKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1BheXdhbGwgLSBJcyBub3QgYXZhaWFibGUnKVxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7IFxuXHRcdH0gZWxzZSB7IFxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bmV3IFBheXdhbGxDcHQoKTtcblx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2goZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdQYXl3YWxsIC0gRXJyb3Igb24gbG9hZCcpXG5cdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZyA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsZWFyRm9yQWRzJylcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5QaWFuby5jaGVja1BheXdhbGwgPSBmdW5jdGlvbigpIHtcblx0bGV0IGNvdW50ID0gMDtcblx0XG5cdGNvbnN0IGNoZWNrR2F0ZSA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRsZXQgaGFzR2F0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXJyZWlyYS1yZWdpc3Rlci1wYXl3YWxsLCAucGF5d2FsbC1jcHQnKTtcblx0XHRsZXQgaGFzUHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B1Yi1yZXRhbmd1bG8tMSBpZnJhbWUsICNwdWItcmV0YW5ndWxvLTIgaWZyYW1lLCAjcHViLWZ1bGxiYW5uZXItMSBpZnJhbWUnKTtcblxuXHRcdGlmKGNvdW50ID4gMikge1xuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7XG5cdFx0XHRQaWFuby5hY3RpdmVQYXl3YWxsID0gZmFsc2U7XG5cdFx0XHRjbGVhckludGVydmFsKGNoZWNrR2F0ZSk7XG5cdFx0fVxuXG5cdFx0aWYoICggKGhhc0dhdGUgJiYgUGlhbm8uYWN0aXZlUGF5d2FsbCkgfHwgaGFzUHViKSB8fCBjb3VudCA+IDgpIFxuXHRcdFx0Y2xlYXJJbnRlcnZhbChjaGVja0dhdGUpO1xuXG5cdFx0Y291bnQrKztcblx0fSwgMTAwMCk7XG59O1xuXG5QaWFuby5yZWdpc3RlclBheXdhbGwgPSB7IFxuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbyA9IG51bGwsIHRpcG8gPSBudWxsKSB7XG5cdFx0UGlhbm8udHlwZVBheXdhbGwgPSB0aXBvO1xuXG5cdFx0aWYoIVBpYW5vLmFjdGl2ZVBheXdhbGwgfHwgKCF2ZXJzYW8gfHwgIVBpYW5vLnR5cGVQYXl3YWxsKSApIHtcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcblx0XHR9IGVsc2Uge1xuXHRcdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcblx0XHRcdFx0XCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9yZWdpc3Rlci1wYXl3YWxsLXBpYW5vLmpzXCIsIFxuXHRcdFx0XHRkYXRhID0+IHsgXG5cdFx0XHRcdFx0aWYoZGF0YS5zdGF0dXMgIT09IDIwMCkgeyBcblx0XHRcdFx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdFxuXHRcdFx0aWYoUGlhbm8udHlwZVBheXdhbGwgPT09ICdyZWdpc3RlcicgfHwgUGlhbm8udHlwZVBheXdhbGwgPT09ICdleGNsdXNpdm8nICkge1xuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJFeGliaWNhbyBSZWdpc3RlclwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XG5cdFx0XHR9IGVsc2Uge1x0XHRcdFxuXHRcdFx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0fVxufTtcblxuUGlhbm8uY29tdW5pY2FkbyA9IHtcblx0bW9zdHJhckluZm9ybWFjYW86IGZ1bmN0aW9uKHZlcnNhbykge1xuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2NvbXVuaWNhY2FvLXBpYW5vL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9jb211bmljYWNhby1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uYWRibG9jayA9IHtcblx0bW9zdHJhckFkQmxvY2s6IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KSB7XG5cblx0XHRwYXJhbXMuYXNzZXRzUGF0aCA9IGBodHRwczovL3N0YXRpYyR7UGlhbm8udXRpbC5tb250YVVybFN0ZygpfS5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9gO1xuXHRcdFxuXHRcdHdpbmRvdy5nbGJBZGJsb2NrID0gcGFyYW1zO1xuXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYWRibG9jay1waWFuby92NC9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3NjcmlwdHMvYWRibG9jay1waWFuby5qc1wiKTtcblx0fVxufTtcblxuUGlhbm8uYmxvcXVlaW9zID0ge1xuXHRsaWJlcmFyRXNjOiBmdW5jdGlvbigpIHtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vbGliZXJhVGVjbGFkby5qc1wiKTtcblx0fSxcblx0YmxvcXVlaWFWaWV3TW9kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9ibG9xdWVpby9ibG9xdWVpYVZpZXdtb2RlLmpzXCIpO1xuICAgIH1cbn07XG5cblBpYW5vLnBhcmNlaXJvID0ge1xuXHRtb3N0cmFGb290ZXJQYXJjZWlybzogZnVuY3Rpb24odmVyc2FvKSB7XG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9mb290ZXItcGFyY2Vpcm9zLXBpYW5vLmpzXCIpO1xuXHR9XG59O1xuXG5QaWFuby5pbmFkaW1wbGVudGUgPSB7XG5cdGdldExpbmtBc3NpbmF0dXJhOiBmdW5jdGlvbihsaW5rKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAobGlua1tpXS5yZWwgPT0gJ2Fzc2luYXR1cmEnKSByZXR1cm4gbGlua1tpXS5ocmVmO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH1cbn07XG5cblBpYW5vLnhtbEh0dHBSZXF1ZXN0ID0ge1xuXHRnZXJhU2NyaXB0TmFQYWdpbmE6IGZ1bmN0aW9uKHVybFNjcmlwdCwgY2FsbGJhY2spIHtcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsU2NyaXB0KTtcblx0XHR4aHIuc2VuZCgpO1xuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCl7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0XHR2YXIgcmVzcG9zdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHRcdHZhciBhcHBlbmREZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0XHRcdGFwcGVuZERlU2NyaXB0LmlubmVySFRNTCA9IHJlc3Bvc3RhO1xuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwZW5kRGVTY3JpcHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIG5hIGZ1bsOnw6NvIGdlcmFyIHNjcmlwdCBuYSBww6FnaW5hLicsICd1cmw6ICcgKyB1cmxTY3JpcHRcblx0XHRcdFx0XHRcdCsgJyBTdGF0dXNFcnJvOiAnICsgdGhpcy5zdGF0dXNcblx0XHRcdFx0XHRcdCsgJyBTdGFjazogJyArIHRoaXMuc3RhdHVzVGV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoY2FsbGJhY2spXG5cdFx0XHRcdGNhbGxiYWNrKHhocik7IFxuXHRcdH07XHRcblx0fSxcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGU6IGZ1bmN0aW9uKGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSB7XG5cdFx0XG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKFwiR0VUXCIsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlLCBmYWxzZSk7XG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZCgpO1xuXHRcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcblx0XHRcdGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XG5cdFx0XHRcdHZhciBzaXR1YWNhb1BhZ2FtZW50byA9IHJlc3BKc29uLnNpdHVhY2FvUGFnYW1lbnRvLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJzaXR1YWNhb1BhZ2FtZW50b1wiLCBzaXR1YWNhb1BhZ2FtZW50b10pO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgIT0gMCAmJiBQaWFuby52YXJpYXZlaXMuc3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZS5pbmRleE9mKHhoci5zdGF0dXMpID4gLTEpIHtcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBcGkgZGUgaW5hZGltcGxlbnRlXCIsIFwiU3RhdHVzIERlc2NvbmhlY2lkb1wiICsgXCIgLSBcIiArIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0ZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlBdXRvcml6YWNhb0FjZXNzbzogZnVuY3Rpb24oZ2xiaWQpIHtcblx0XHRcblx0XHR2YXIgY29kaWdvUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCk7XG5cdFx0aWYoY29kaWdvUHJvZHV0byA9PSAnZXJyb3InKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XCJ0b2tlbi1hdXRlbnRpY2FjYW9cIjogZ2xiaWQsIFwiaXBVc3VhcmlvXCI6IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5JUCwgXCJjb2RpZ29Qcm9kdXRvXCI6IGNvZGlnb1Byb2R1dG99KTtcblxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbihcIlBPU1RcIiwgUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxWZXJpZmljYUxlaXRvciwgZmFsc2UpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0XHR4aHIuc2VuZChkYXRhKTtcblx0XHRcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKXtcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XG5cdFx0XHRcdHZhciByZXNwb3N0YURlVGVybW9EZVVzbyA9IGZhbHNlLCByZXNwb3N0YURlTW90aXZvID0gJycsIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gJyc7XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubW90aXZvICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRyZXNwb3N0YURlTW90aXZvID0gcmVzcEpzb24ubW90aXZvLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi50ZW1UZXJtb0RlVXNvICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRyZXNwb3N0YURlVGVybW9EZVVzbyA9IHJlc3BKc29uLnRlbVRlcm1vRGVVc287XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5saW5rICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9IFBpYW5vLmluYWRpbXBsZW50ZS5nZXRMaW5rQXNzaW5hdHVyYShyZXNwSnNvbi5saW5rKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgaXNBdXRvcml6YWRvID0gUGlhbm8uYXV0ZW50aWNhY2FvLmlzQXV0b3JpemFkbyhyZXNwb3N0YURlVGVybW9EZVVzbywgcmVzcG9zdGFEZU1vdGl2bywgcmVzcEpzb24uYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHJlc3BKc29uLmF1dG9yaXphZG8sIHJlc3Bvc3RhRGVNb3Rpdm8sIGlzQXV0b3JpemFkbywgcmVzcG9zdGFEZVRlcm1vRGVVc28pO1xuXHRcdFx0XHR2YXIgX2pzb25MZWl0b3IgPSB7XG5cdFx0XHRcdFx0XHRcImF1dG9yaXphZG9cIiA6IHJlc3BKc29uLmF1dG9yaXphZG8sXG5cdFx0XHRcdFx0XHRcIm1vdGl2b1wiOiByZXNwb3N0YURlTW90aXZvLFxuXHRcdFx0XHRcdFx0XCJsb2dhZG9cIjogaXNBdXRvcml6YWRvLFxuXHRcdFx0XHRcdFx0XCJ0ZW1UZXJtb0RlVXNvXCI6IHJlc3Bvc3RhRGVUZXJtb0RlVXNvLFxuXHRcdFx0XHRcdFx0XCJnbGJpZFwiOiBnbGJpZCxcblx0XHRcdFx0XHRcdFwicHJvZHV0b1wiOiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSxcblx0XHRcdFx0XHRcdFwiY29kUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvLFxuXHRcdFx0XHRcdFx0XCJ1dWlkXCI6IHJlc3BKc29uLnVzdWFyaW9JZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdF9qc29uTGVpdG9yID0gYnRvYShlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkoX2pzb25MZWl0b3IpKSk7XG5cdFx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgX2pzb25MZWl0b3IsIDEpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aWYoUGlhbm8uZ29vZ2xlLnNob3dTYXZlU3Vic2NyaXB0aW9uKHJlc3BKc29uKSl7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHZhciBzd2dTZXJ2aWNlID0gbmV3IFN3Z1NlcnZpY2UoKTtcblx0XHRcdFx0XHRcdFx0c3dnU2VydmljZS5zYXZlR2xvYm9TdWJzY3JpcHRpb24oZ2xiaWQpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBhbyBjaGFtYXIgYSBmdW7Dp8OjbyBzaG93U2F2ZVN1YnNjcmlwdGlvbiBkbyBBbGRlYmFyYW4uJywgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdVUkw6ICcgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgR0xCSUQ6ICcgKyBnbGJpZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgRXJybzogJyArIGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmKHJlc3BKc29uLmF1dG9yaXphZG8gPT0gdHJ1ZSl7XG5cdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhyZXNwSnNvbi51c3VhcmlvSWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJBUEkgZGUgYXV0b3JpemFjYW8gZGUgYWNlc3NvXCIsIHhoci5zdGF0dXMgKyBcIiAtIFwiICsgZ2xiaWQpO1xuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xuXHRcdFx0fVx0XG5cdFx0fVxuXHR9XG59O1xuXG5QaWFuby5nb29nbGUgPSB7XG4gIGlzQXV0aG9yaXplZDogZnVuY3Rpb24gKCkge1xuXHRcdGlmKHN3Z0VudGl0bGVtZW50cy5nZXRFbnRpdGxlbWVudEZvclNvdXJjZShcIm9nbG9iby5nbG9iby5jb21cIikpe1xuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpLnN1YnNjcmlwdGlvblRva2VuLCBcIkNvbnRhIEdvb2dsZVwiLCBcIk8gR2xvYm9cIik7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0XG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQ1JFQVRFRF9HTE9CT0lEKSl7XG5cdFx0XHRQaWFuby5tZXRyaWNhcy5zZXRhVmFyaWF2ZWlzKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkNSRUFURURfR0xPQk9JRCksIFwiQ29udGEgR29vZ2xlXCIsIFwiR29vZ2xlXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGlzU3BlY2lmaWNHb29nbGVVc2VyOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoUGlhbm8uZ29vZ2xlLmlzQXV0aG9yaXplZCgpKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dHJ5e1xuXHRcdFx0dmFyIG9HbG9ib0J1c2luZXNzID0gbmV3IE9HbG9ib0J1c2luZXNzKCk7XG5cdFx0XHRvR2xvYm9CdXNpbmVzcy52ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkKHN3Z0VudGl0bGVtZW50cyk7XG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoXCJFcnJvIGFvIGV4ZWN1dGFyIG8gQWxkZWJhcmFuXCIsIFwiRXJyb3I6IFwiICsgZXJyb3IgKyBcIiAtIEVudGl0bGVtZW50czogXCIgKyBzd2dFbnRpdGxlbWVudHMuZW50aXRsZW1lbnRzWzBdLnN1YnNjcmlwdGlvblRva2VuKTtcblx0XHR9XHRcdFx0XG5cdH0sXG5cblx0c2hvd1NhdmVTdWJzY3JpcHRpb246IGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRpZighc3dnRW50aXRsZW1lbnRzLmVuYWJsZXNUaGlzKCkgJiYgcmVzcG9uc2UubW90aXZvID09PVwiQVVUT1JJWkFET1wiICYmICFIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLlNBVkVfU1VCU0NSSVBUSU9OKSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cbn07XG5cblBpYW5vLmF1dGVudGljYWNhbyA9IHtcblx0aXNMb2dhZG9DYWR1bjogZnVuY3Rpb24oZ2xiaWQsIHV0cCkge1xuXHRcdGlmICghZ2xiaWQpIHtcblx0XHRcdGlmICh1dHApIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xuXHRcdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYKSkgSGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIFwiXCIsIC0xKTtcblx0XHR9XG5cdFx0cmV0dXJuIGdsYmlkICE9ICcnO1xuXHR9LFxuXHR2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG86IGZ1bmN0aW9uKGdsYmlkLCB1dHApIHtcblx0XHRpZiAoUGlhbm8uYXV0ZW50aWNhY2FvLmlzTG9nYWRvQ2FkdW4oZ2xiaWQsIHV0cCkpIHtcblx0XHRcdGlmICh1dHApIHtcblx0XHRcdFx0dmFyIF9sZWl0b3IgPSBKU09OLnBhcnNlKGRlY29kZVVSSShhdG9iKHV0cCkpKTtcblx0XHRcdFx0aWYgKGdsYmlkID09IF9sZWl0b3IuZ2xiaWQgJiYgKHR5cGVvZiBfbGVpdG9yLnByb2R1dG8gPT0gXCJ1bmRlZmluZWRcIiB8fCBfbGVpdG9yLnByb2R1dG8gPT0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpKSB7XG5cdFx0XHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLmRlZmluZVVzdWFyaW9QaWFubyhfbGVpdG9yLmF1dG9yaXphZG8sIF9sZWl0b3IubW90aXZvLCBfbGVpdG9yLmxvZ2FkbywgX2xlaXRvci50ZW1UZXJtb0RlVXNvKTtcblx0XHRcdFx0XHRpZihfbGVpdG9yLmF1dG9yaXphZG8pe1xuXHRcdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhfbGVpdG9yLnV1aWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XG5cdFx0XHR9XG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvKGdsYmlkKTtcblx0XHR9XG5cdH0sXG5cdGlzQXV0b3JpemFkbzogZnVuY3Rpb24odGVybW9EZVVzbywgbW90aXZvLCBhdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xuXHRcdGlmIChhdXRvcml6YWRvIHx8IG1vdGl2byA9PSBcImluZGlzcG9uaXZlbFwiIHx8IHRlcm1vRGVVc28gIT0gZmFsc2UpIHtcblx0XHRcdGlmIChhdXRvcml6YWRvICYmIGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlKSBQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZShocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCkpIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRkZWZpbmVVc3VhcmlvUGlhbm86ZnVuY3Rpb24oYXV0b3JpemFkbywgbW90aXZvLCBsb2dhZG8sIHRlbVRlcm1vRGVVc28pe1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhdXRvcml6YWRvXCIsIGF1dG9yaXphZG9dKTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibW90aXZvXCIsIG1vdGl2b10pO1xuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJsb2dhZG9cIiwgbG9nYWRvXSk7XG5cdFx0aWYodGVtVGVybW9EZVVzbyAhPSBcIiBcIilcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJ0ZW1UZXJtb1wiLCB0ZW1UZXJtb0RlVXNvXSk7XG5cdH1cbn07XG5cblBpYW5vLnV0aWwgPSB7XG5cdGlzU2VjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09PSAnc2VjdGlvbicgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdHRlbVZhcmlhdmVpc09icmlnYXRvcmlhczogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCB0aXBvQ29udGV1ZG9QaWFubyBuYW8gZXN0YSBkZWZpbmlkYScsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0aWYgKHR5cGVvZiBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCBub21lUHJvZHV0b1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0ZXh0cmFpUGFyYW1ldHJvc0NhbXBhbmhhRGFVcmw6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XG5cdFx0dmFyIGNoYXZlc0NhbXBhbmhhID0gWyd1dG1fbWVkaXVtJywndXRtX3NvdXJjZSddO1xuXHRcdHZhciB2YWxvcmVzQ2FtcGFuaGEgPSBbXTtcblxuXHRcdGZvciAodmFyIGlkeFBhcmFtQ2FtcGFuaGEgPSAwOyBpZHhQYXJhbUNhbXBhbmhhIDwgY2hhdmVzQ2FtcGFuaGEubGVuZ3RoOyBpZHhQYXJhbUNhbXBhbmhhKyspIHtcblx0XHRcdHZhciBjaGF2ZUNhbXBhbmhhID0gY2hhdmVzQ2FtcGFuaGFbaWR4UGFyYW1DYW1wYW5oYV07XG5cdFx0XHRpZiAodXJsLmluZGV4T2YoY2hhdmVDYW1wYW5oYSArICc9JykgIT0gLTEpIHtcblx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBjaGF2ZUNhbXBhbmhhICsgXCI9KFteJiNdKilcIik7XG5cdFx0XHRcdHZhciB2YWxvckNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHRcdFx0aWYodmFsb3JDYW1wYW5oYSl7XG5cdFx0XHRcdFx0dmFsb3Jlc0NhbXBhbmhhLnB1c2godmFsb3JDYW1wYW5oYSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbG9yZXNDYW1wYW5oYS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidXRtXCIsIHZhbG9yZXNDYW1wYW5oYS5qb2luKFwiO1wiKV0pO1xuXHRcdH1cblx0XHRpZiAodXJsLmluZGV4T2YoJ3V0bV9jYW1wYWlnbj0nKSAhPSAtMSkge1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcInV0bV9jYW1wYWlnbj0oXFxcXHcrKVwiKTtcblx0XHRcdHZhciBjYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XG5cdFx0XHRpZihjYW1wYW5oYSl7XG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjYW1wYW5oYVwiLCBjYW1wYW5oYV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aXNPcmlnZW1CdXNjYWRvcjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIHJlZ2V4Um9ib3MgPSBuZXcgUmVnRXhwKFwiKGlhX2FyY2hpdmVyKXwoR29vZ2xlYm90KXwoTWVkaWFwYXJ0bmVycy1Hb29nbGUpfChBZHNCb3QtR29vZ2xlKXwobXNuYm90KXwoWWFob28hIFNsdXJwKXwoWnlCb3JnKXwoQXNrIEplZXZlcy9UZW9tYSl8KGJpbmdib3QpfChjWGVuc2Vib3QpXCIpO1xuXHRcdHZhciBlaFJvYm8gPSByZWdleFJvYm9zLnRlc3QodXNlckFnZW50KTtcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYnVzY2Fkb3JcIiwgZWhSb2JvXSk7XG5cdFx0cmV0dXJuIGVoUm9ibztcblx0fSxcblx0bW9udGFVcmxTdGc6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpICE9ICdwcmQnID8gJy1zdGcnIDogJyc7XG5cdH0sXG5cdHRlbVBhcmFtZXRyb05hVXJsOiBmdW5jdGlvbihwYXJhbU5hbWUpIHtcblx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcblx0XHRyZXR1cm4gcGFyYW1ldHJvcy5pbmRleE9mKHBhcmFtTmFtZSkgIT0gLTEgPyB0cnVlIDogZmFsc2U7XG5cdH0sXG5cdGdldFZhbG9yUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtZXRybykge1xuXHRcdGlmIChQaWFuby51dGlsLnRlbVBhcmFtZXRyb05hVXJsKHBhcmFtZXRybykpIHtcblx0XHRcdHZhciBwYXJhbWV0cm9zID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvblNlYXJjaCgpO1xuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBwYXJhbWV0cm8gKyBcIj0oW14mI10qKVwiKTtcblx0XHRcdHJldHVybiBwYXJhbWV0cm9zLm1hdGNoKHJlZ2V4KVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuIFwic2VtIHBhcmFtZXRyb1wiO1xuXHR9LFxuXHRpc0RlYnVnOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHO1xuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAndHJ1ZScpIHtcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnKSB7XG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIFwiXCIsIC0xKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUudXRpbC5ERUJVRykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGlzRG9taW5pb09HbG9ibzogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIjovLyguKj8pL1wiKSwgdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKTtcblx0XHRpZiAodXJsLm1hdGNoKHJlZ2V4KVsxXS5pbmRleE9mKFwib2dsb2JvXCIpID4gLTEgfHwgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImdsb2JvaVwiKSA+IC0xICYmIHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcImVkZ1wiKSA9PSAtMSkpIHtcblx0XHRcdHJldHVybiB1cmwubWF0Y2gocmVnZXgpWzFdO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH0sXG5cdGNhbGxiYWNrTWV0ZXI6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xuXHRcdHdpbmRvdy5yZWdyYXNUaW55ID0gbWV0ZXJEYXRhO1xuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcoZmFsc2UpO1xuXHR9LFxuXHRjYWxsYmFja01ldGVyRXhwaXJlZDogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XG5cdFx0d2luZG93LnJlZ3Jhc1RpbnkgPSBtZXRlckRhdGE7XG5cdFx0UGlhbm8udmFyaWF2ZWlzLmlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkID0gdHJ1ZTtcblx0XHRQaWFuby5tZXRyaWNhcy5leGVjdXRhQXBvc1BhZ2V2aWV3KHRydWUpO1xuXHR9LFxuXHRnZXRXaW5kb3dMb2NhdGlvblNlYXJjaDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0fSxcblx0Z2V0V2luZG93TG9jYXRpb25IcmVmOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0fSxcblx0YWRpY2lvbmFyQ3NzOiBmdW5jdGlvbihjc3NQYXRoKXtcblx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGUuaW5uZXJIVE1MID0gY3NzUGF0aDtcblx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlLCBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG5cdH0sXG5cdGlzUmV2aXN0YTogZnVuY3Rpb24oKXtcblx0XHR2YXIgcmV2aXN0YXMgPSBbXCJlcG9jYVwiLCBcImF1dG8tZXNwb3J0ZVwiLCBcInZvZ3VlXCIsIFwiZ2xhbW91clwiLCBcImNhc2Etdm9ndWVcIiwgXCJtYXJpZS1jbGFpcmVcIiwgXCJjYXNhLWUtamFyZGltXCIsIFwicXVlbS1hY29udGVjZVwiLCBcImdsb2JvLXJ1cmFsXCIsIFwiZ3FcIiwgXCJtb25ldFwiLCAnY3Jlc2NlcicsJ2dhbGlsZXUnXTtcblx0XHRpZihyZXZpc3Rhcy5pbmRleE9mKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpKSA+IC0xKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRyZWNhcnJlZ2FQaWFubzogZnVuY3Rpb24gKHRpcG9Db250ZXVkbywgaXNFeGNsdXNpdm8sIG5vbWVQcm9kdXRvKSB7XG5cdFx0d2luZG93LnRpcG9Db250ZXVkb1BpYW5vID0gdGlwb0NvbnRldWRvO1xuXHRcdHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA9IGlzRXhjbHVzaXZvO1xuXHRcdHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID0gbm9tZVByb2R1dG87XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cucmVncmFzVGlueSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSA9IFwiXCI7XG5cdFx0fVxuXHRcdFBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0dHAuZXhwZXJpZW5jZS5leGVjdXRlKCk7XG5cdH0sXG5cdGlzVmFsb3I6IGZ1bmN0aW9uICgpIHtcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gXCJ2YWxvclwiKVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5QaWFuby5jb25maWd1cmFjYW8gPSB7XG5cdGpzb25Db25maWd1cmFjYW9UaW55UGFzczoge1xuXHRcdCdpbnQnOiB7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidkWHU3ZHZGS1JpJyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonTWN0RmdSQ0VzdScsXG5cdFx0XHQnc2V0U2FuZEJveCc6J3RydWUnLFxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vc2FuZGJveC50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1kWHU3ZHZGS1JpJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1NY3RGZ1JDRXN1Jyxcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xuXHRcdH0sXG5cdFx0J3FsdCc6e1xuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzJzonR1RDb3BJRGM1eicsXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPUdUQ29wSURjNXonLFxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGlxbHQtaWcuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXG5cdFx0fSxcblx0XHQncHJkJzp7XG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6Jyxcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzc1JldmlzdGFzJzonVm5hUDNyWVZLYycsXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9Vm5hUDNyWVZLYycsXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaS5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vJyxcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcblx0XHR9XG5cdH1cbn07XG5cblBpYW5vLmNvbnN0cnV0b3IgPSB7XG5cdGluaXRUcDogZnVuY3Rpb24oKSB7XG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiSW5pY2lvIEluaXRUcFwiKTtcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xuXHRcdHRwLnB1c2goW1wic2V0VGFnc1wiLCBbUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCldXSk7XG5cdFx0aWYgKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcblx0XHR9XG5cdFx0dHAucHVzaChbXCJzZXRTYW5kYm94XCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uc2V0U2FuZEJveF0pO1xuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcblx0XHR2YXIgY2xlYW5fdXJsID0gUGlhbm8udXRpbC5nZXRXaW5kb3dMb2NhdGlvbkhyZWYoKS5zcGxpdChcIj9cIilbMF07XG5cdFx0dHAucHVzaChbXCJzZXRQYWdlVVJMXCIsY2xlYW5fdXJsXSk7XG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcIm5vbWVQcm9kdXRvXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XG5cdFx0UGlhbm8uamFuZWxhQW5vbmltYS5kZXRlY3RQcml2YXRlTW9kZShmdW5jdGlvbiAoaXNfcHJpdmF0ZSkge1xuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcblx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjb250ZXVkb0V4Y2x1c2l2b1wiLCB0cnVlXSk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJyAmJiBzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSkge1xuXHRcdFx0UGlhbm8uZ29vZ2xlLmlzU3BlY2lmaWNHb29nbGVVc2VyKHN3Z0VudGl0bGVtZW50cyk7XG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsXCJBVVRPUklaQURPXCIsIHRydWUsIFwiXCIpO1xuXHRcdH1lbHNle1xuXHRcdFx0UGlhbm8uYXV0ZW50aWNhY2FvLnZlcmlmaWNhVXN1YXJpb0xvZ2Fkb05vQmFycmFtZW50byhIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5HQ09NKSwgSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQKSk7XG5cdFx0fVxuXHRcdFxuXHRcdFBpYW5vLmtydXgub2J0ZW1TZWdtZW50YWNhbygpO1xuXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImJhbm5lckNvbnRhZG9yTGlnYWRvXCIsIHRydWVdKTtcblx0XHRQaWFuby51dGlsLmlzT3JpZ2VtQnVzY2Fkb3IoKSB8fCBQaWFuby51dGlsLmV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsKCk7XG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJBY3RpdmVcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyXSk7XG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJFeHBpcmVkXCIsIFBpYW5vLnV0aWwuY2FsbGJhY2tNZXRlckV4cGlyZWRdKTtcblx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJGaW0gSW5pdFRwXCIpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBsb2FkUGlhbm9FeHBlcmllbmNlcygpe1xuXHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdGEudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG5cdGEuYXN5bmMgPSB0cnVlO1xuXHRpZihQaWFuby51dGlsLmlzUmV2aXN0YSgpIHx8IFBpYW5vLnV0aWwuaXNWYWxvcigpKSB7XG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFub1JldmlzdGFzO1x0XG5cdH0gZWxzZSB7XG5cdFx0YS5zcmMgPSBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnVybFNhbmRib3hQaWFubztcblx0fVxuXHRcblx0dmFyIGIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcblxuXHRiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuXHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gUGlhbm9cIiwgXCJTY3JpcHQgYWRpY2lvbmFkb1wiKTtcbn1cblxuZnVuY3Rpb24gcGlhbm9Jbml0KCkgeyBcblx0aWYod2luZG93LnRpbnlDcHQuZGVidWcudGlueSlcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxuXG4gICAgaWYgKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpIHsgXG5cdFx0d2luZG93LlNXRy5wdXNoKChzdWJzY3JpcHRpb25zKSA9PiB7XG5cdFx0XHRpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2ctc3Vic2NyaXB0aW9ucycsIHN1YnNjcmlwdGlvbnMpXG5cblx0XHRcdHN3ZyA9IHN1YnNjcmlwdGlvbnM7XG5cblx0XHRcdHN1YnNjcmlwdGlvbnMuc2V0T25FbnRpdGxlbWVudHNSZXNwb25zZShlbnRpdGxlbWVudHNQcm9taXNlID0+IHtcblx0XHRcdFx0ZW50aXRsZW1lbnRzUHJvbWlzZS50aGVuKGVudGl0bGVtZW50cyA9PiB7IFxuXHRcdFx0XHRcdHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSBlbnRpdGxlbWVudHM7XG5cblx0XHRcdFx0XHRHQS5zZXRFdmVudHMoXCJDYXJyZWdhbWVudG8gU1dHXCIsIFwiRW50aXRsZW1lbnRzIHJlY2ViaWRvc1wiKTtcblxuXHRcdFx0XHRcdGlmICh3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XG5cdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG5cdFx0XHRcdFx0XHRcdGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXRjaChlcnJvcil7XG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiUGlhbm8gbmFvIGZvaSBjYXJyZWdhZGEgY29ycmV0YW1lbnRlIVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgR0Euc2V0RXZlbnRzRXJyb3IoXCJFbnRpdGxlbWVudHMgbsOjbyBjYXJyZWdhZG9cIiwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmKHdpbmRvdy50aW55Q3B0LlBpYW5vLnV0aWwudGVtVmFyaWF2ZWlzT2JyaWdhdG9yaWFzKCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XG4gICAgICAgICAgICBsb2FkUGlhbm9FeHBlcmllbmNlcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNoZWNrUGF5d2FsbCgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB0aW55SW5pdCgpIHtcblx0VGlueS5zZXRQaWFubyhQaWFubyk7IFxuICAgIGNvbnN0IFN3ZyA9IG5ldyBTd2dNb2R1bGUoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IFN3Zy5pbml0KCk7XG5cdH1cblx0Y2F0Y2goZSkgeyBjb25zb2xlLmVycm9yKGUpIH1cblx0cGlhbm9Jbml0KCk7IFxufTtcblxudGlueUluaXQoKTtcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
