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
    value: function setUtms(element) {
      var urlParams = new URLSearchParams(window.location.search.substring(1));
      var utmsProps = typeof window.glbPaywall.swg !== 'undefined' && typeof window.glbPaywall.swg.utms !== 'undefined' ? window.glbPaywall.swg.utms : null;
      var swgProductId = null;

      switch (element.dataset.area) {
        case 'top':
          swgProductId = window.glbPaywall.topSwgProductid;
          break;

        case 'left':
          swgProductId = window.glbPaywall.leftSwgProductid;
          break;

        case 'right':
          swgProductId = window.glbPaywall.rightSwgProductid;
          break;
      }

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
      if (swgProductId) window.tinyCpt.Swg.global.subscribe(swgProductId);
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
                if (window.tinyCpt.debug.swg) url = 'app/mocks/swg/products.json';
                _context.next = 4;
                return fetch(url).then(function (res) {
                  return res.json();
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
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
                propsToRemove = ['productName', 'pianoProductName', 'offer'];
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
          if (!isLogin && isUrlSwg) this.SWG.setUtms(element);

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
      var template = "\n\t  <div class=\"paywall-cpt ".concat(this.templateVars.productClass, "\"> \n\t\t<div class=\"paywall-cpt-wrap\">\n\t\t<div class=\"paywall-cpt-wrap__text-head\">\n\t\t\t").concat(this.templateVars.title, "\n\t\t</div>\n\t\t  <div class=\"paywall-cpt-wrap__top\">\n\t\t  \t<a href=\"").concat(this.templateVars.topLink, "\" data-area=\"top\" data-ga-image-position=\"top\" data-ga-action=\"Clique em link\" data-ga-label=\"Link 1 -\" data-ga-resetUtp=\"true\" data-href-target=\"").concat(this.templateVars.targetBlank, "\">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.topMobi, "\" media=\"(max-width: 1023px)\">\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.topDesk, "\" media=\"(min-width: 1024px)\">\n\t\t\t\t\t<img src=\"").concat(this.templateVars.topMobi, "\" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t  <div class=\"paywall-cpt-wrap__text-center ").concat(window.glbPaywall.hideLoginArea ? 'is-hide' : '', "\">\n\t\t  \t").concat(this.templateVars.loginTag, "\n\t\t  </div>\n\t\t  <div class=\"paywall-cpt-wrap__left\">\n\t\t  \t<a href=\"").concat(this.templateVars.leftLink, "\" data-area=\"left\" data-ga-action=\"Clique em link\" data-ga-label=\"Link 4 - Banner oferta esquerda\" data-ga-resetUtp=\"true\" data-href-target=\"").concat(this.templateVars.targetBlank, "\">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.leftMobi, "\" media=\"(max-width: 1023px)\">\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.leftDesk, "\" media=\"(min-width: 1024px)\">\n\t\t\t\t\t<img src=\"").concat(this.templateVars.leftMobi, "\" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t  <div class=\"paywall-cpt-wrap__right\">\n\t\t  \t<a href=\"").concat(this.templateVars.rightLink, "\" data-area=\"right\" data-ga-action=\"Clique em link\" data-ga-label=\"Link 5 - Banner oferta direita\" data-ga-resetUtp=\"true\" data-href-target=\"").concat(this.templateVars.targetBlank, "\">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.rightMobi, "\" media=\"(max-width: 1023px)\">\n\t\t\t\t\t<source srcset=\"").concat(this.templateVars.rightDesk, "\" media=\"(min-width: 1024px)\">\n\t\t\t\t\t<img src=\"").concat(this.templateVars.rightMobi, "\" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t  ");
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

    try {
      new _cpnt_paywall_Paywall__WEBPACK_IMPORTED_MODULE_6__["default"]();
      window.hasPaywall = true;
    } catch (e) {
      console.error('Paywall - Error on load');
      Piano.triggerAdvertising();
    }
  }
};

Piano.triggerAdvertising = function () {
  window.hasPaywall = false;
  var event = new CustomEvent('clearForAds');
  document.dispatchEvent(event);
};

Piano.checkPaywall = function () {
  var count = 0;
  var checkGate = setInterval(function () {
    var hasPub = document.querySelector('#pub-retangulo-1 iframe, #pub-retangulo-2 iframe, #pub-fullbanner-1 iframe');
    if (count === 19) Piano.triggerAdvertising();
    if (window.hasPaywall || window.hasPaywall === false || hasPub || count > 19) clearInterval(checkGate);
    count++;
  }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vY2tzL3Byb2R1Y3RzL3Byb2R1Y3RzLWlkLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0ZCLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0dBLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUGlhbm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvU3dnLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL1RpbnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwtZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY3BudC1wYXl3YWxsL1BheXdhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJGYiIsImRhdGEiLCJkZWJ1ZyIsIndpbmRvdyIsInRpbnlDcHQiLCJkaXNhYmxlZCIsImZiIiwiaGFzUGl4ZWwiLCJwaXhlbCIsIm5hbWUiLCJpc0RlZmluZWQiLCJmYnEiLCJHQSIsImdhIiwiUHJvZHVjdHMiLCJQcm9kdWN0c01vZHVsZSIsImRhdGFMYXllciIsImlzUHJvZHVjdFZhbG9yIiwiX2dhcSIsImFjdGlvbiIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkhlbHBlcnMiLCJwcm9wIiwiY19uYW1lIiwidmFsdWUiLCJleHBpcmVkYXlzIiwiZXhkYXRlIiwiRGF0ZSIsImhvc3RuYW1lIiwibG9jYXRpb24iLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRvY3VtZW50IiwiY29va2llIiwiZXNjYXBlIiwidG9VVENTdHJpbmciLCJzcGxpdCIsInJldmVyc2UiLCJtYXRjaCIsIlJlZ0V4cCIsImNvb2tpZVRpbnkiLCJ1bmVzY2FwZSIsInRvU3RyaW5nIiwiUGlhbm8iLCJjb250ZW50Iiwic2V0RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VOYW1lIiwiZXhwZXJpZW5jZSIsInJlZ3Jhc1RpbnkiLCJub21lRXhwZXJpZW5jaWEiLCJzdWJzZWdtZW50YWNhb1BpYW5vIiwic2V0Q29va2llIiwidmFyaWF2ZWlzIiwiY29uc3RhbnRlIiwiVVRQIiwicHJvZHVjdE5hbWUiLCJub21lUHJvZHV0b1BpYW5vIiwicHJvZHVjdHNTZXR0aW5ncyIsIlByb2R1Y3QiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9kdWN0c0lkIiwiaWQiLCJTd2ciLCJTV0ciLCJzd2dFbnRpdGxlbWVudHMiLCJzd2ciLCJsb2NhbFByb2R1Y3RQaWFubyIsImhhc1Byb2R1Y3RKU09OIiwicHJvZHVjdEpTT04iLCJlbEhlYWQiLCJoZWFkIiwic2V0R2xvYmFsU1dHIiwiZ2xvYmFsIiwiZWxlbWVudCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0cmluZyIsInV0bXNQcm9wcyIsImdsYlBheXdhbGwiLCJ1dG1zIiwic3dnUHJvZHVjdElkIiwiZGF0YXNldCIsImFyZWEiLCJ0b3BTd2dQcm9kdWN0aWQiLCJsZWZ0U3dnUHJvZHVjdGlkIiwicmlnaHRTd2dQcm9kdWN0aWQiLCJmb3JFYWNoIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwic2V0Iiwic3Vic2NyaWJlIiwidXJsIiwiaXNQcm9kdWN0aW9uIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldFByb2R1Y3RzIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZmlsdGVyIiwicGlhbm9Qcm9kdWN0TmFtZSIsIm9iaiIsInByb3BzVG9SZW1vdmUiLCJuZXdPYmoiLCJnZXRQcm9kdWN0IiwicmVtb3ZlUHJvcGVydGllcyIsImtleXMiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwibWFya3VwVGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50RWxlbWVudCIsInNyYyIsInVybFByb2QiLCJ1cmxTdGciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRNYXJrdXAiLCJzZXRTd2dTY3JpcHQiLCJzZXRBbGRlYmFyYW5TY3JpcHQiLCJ0ZXN0U1dHIiwiVGlueSIsImhhc1BheXdhbGwiLCJ0cCIsIlBheXdhbGxBbmFseXRpY3MiLCJzZXRHbG9iYWxUaW55Iiwic2V0R2xvYmFsIiwiaW5pdCIsImRlZmF1bHRTZXR0aW5ncyIsInRpbnkiLCJwYXl3YWxsIiwiYW1iaWVudGVVdGlsaXphZG9QaWFubyIsIlBheXdhbGxHQU1vZHVsZSIsIlBpYW5vTW9kdWxlIiwiR0FNb2R1bGUiLCJtZXRyaWNzIiwicGF5d2FsbFR5cGUiLCJfUGlhbm8iLCJzZXRFdmVudHMiLCJSVElFWCIsInJlc2V0VXRwIiwiZ2FSZXNldHV0cCIsImltYWdlVG9wIiwiZ2FJbWFnZVBvc2l0aW9uIiwiZ2FMYWJlbCIsImV2ZW50IiwiZXZlbnRvR0FDYXRlZ29yaWEiLCJldmVudG9HQUFjYW8iLCJnYUFjdGlvbiIsImV2ZW50b0dBUm90dWxvIiwiZXZlbnRvR0FWYWxvciIsImV2ZW50b0dBSW50ZXJhY2FvIiwic2V0RGF0YWxheWVyIiwidHlwZVBheXdhbGwiLCJQYXl3YWxsQ3B0IiwiU3dnTW9kdWxlIiwiRkIiLCJGYk1vZHVsZSIsImRvbWFpbiIsInNldFRlbXBsYXRlU2V0dGluZ3MiLCJQYXl3YWxsIiwiY2FsbGJhY2siLCJ0ZW1wbGF0ZVNldHRpbmdzIiwidGVtcGxhdGUiLCJhc3NldHNQYXRoIiwiZGlzcGxheSIsInByb2R1Y3RDbGFzcyIsInRpdGxlIiwidGFyZ2V0QmxhbmsiLCJ0b3BNb2JpIiwidG9wRGVzayIsInRvcExpbmsiLCJsZWZ0TW9iaSIsImxlZnREZXNrIiwibGVmdExpbmsiLCJyaWdodE1vYmkiLCJyaWdodERlc2siLCJyaWdodExpbmsiLCJoaWRlTG9naW5BcmVhIiwibG9naW5UZXh0IiwibG9naW5QcmVUZXh0IiwibG9naW5UYWciLCJnZXRVcmxMb2dpblJlZ2lzdGVyIiwiY2xlYXJMb2dpbkFyZWEiLCJzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MiLCJlbEJvZHkiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZWxDcHQiLCJxdWVyeVNlbGVjdG9yIiwic2V0RWxXcmFwcGVyIiwicmVtb3ZlIiwiZWxUb1JlbW92ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5IiwiYm9keUFkanVzdCIsInJlbW92ZUVsZW1lbnRzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY3NzTWluaWZpZWQiLCJhY3RpdmVUZW1wbGF0ZVNldHRpbmdzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicGF5d2FsbExvYWQiLCJlbENwdFdyYXAiLCJzZXRUaW1lb3V0IiwiZWxCb2R5SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJlbENwdFdyYXBIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjdXJyZW50VG9wIiwiTWF0aCIsImFicyIsInRvcFdpdGhGdWxsRWxlbWVudCIsInRvcCIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJldnRXaGVlbCIsImV2dFRvdWNoIiwiYWN0aXZlRXZlbnRzIiwic2V0UGl4ZWxUeXBlIiwiY2xpY2tUYXJnZXRzIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJpc0xvZ2luIiwiQm9vbGVhbiIsImdldEF0dHJpYnV0ZSIsImlzVXJsU3dnIiwiaW5jbHVkZXMiLCJub3RCbGFuayIsImhyZWZUYXJnZXQiLCJ0cmlnZ2VyIiwic2V0VXRtcyIsImhyZWYiLCJvcGVuIiwiYmluZCIsIm5ld3RvcCIsInN0ZXAiLCJtdWx0aXBsaWVyIiwiZGVsdGFZIiwiZWxUb3AiLCJ0b3VjaHN0YXJ0WSIsInRvdWNoZW5kWSIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWSIsImRpZmYiLCJ1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byIsInVyaSIsInNlcnZpY2VJZCIsImdldFNlcnZpY29JZCIsInN0ciIsInVybFJldHVybiIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldENvZGlnb1Byb2R1dG8iLCJnZXROb21lUHJvZHV0byIsImRlbGF5VGltZXIiLCJjcmVhdGVUZW1wbGF0ZSIsInRlbXBsYXRlVmFycyIsIlRpbnlNb2R1bGUiLCJzZXRHbG9iYWxWYXJzIiwiYW1iaWVudGVzQWNlaXRvcyIsInN0YXR1c0h0dHBPYnRlckF1dG9yaXphY2FvQWNlc3NvIiwic3RhdHVzSHR0cE9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImlzQ2FsbGJhY2tNZXR0ZXJFeHBpcmVkIiwiR0NPTSIsIkFNQklFTlRFIiwiU0FWRV9TVUJTQ1JJUFRJT04iLCJDUkVBVEVEX0dMT0JPSUQiLCJHTE9CT0lEX01FU1NBR0UiLCJtZXRyaWNhcyIsIkVWRU5UT19TRU1fQUNBTyIsIkVSUk8iLCJrcnV4IiwiU0VHTUVOVEFDT0VTIiwiS1JVWExJR0FETyIsInV0aWwiLCJJUCIsIkRFQlVHIiwiaXNDb250ZXVkb0V4Y2x1c2l2byIsImNvbnRldWRvRXhjbHVzaXZvIiwiZ2V0QW1iaWVudGVQaWFubyIsImluZGV4T2YiLCJnZXRWYWxvclBhcmFtZXRyb05hVXJsIiwiZ2V0Q29va2llIiwiZ2V0VGlwb0NvbnRldWRvUGlhbm8iLCJ0aXBvQ29udGV1ZG9QaWFubyIsImV4ZWN1dG91UGFnZXZpZXciLCJzZXRFdmVudHNFcnJvciIsImlzUmV2aXN0YSIsIm5vbWVQcm9kdXRvIiwiYXV0ZW50aWNhY2FvIiwiZGVmaW5lVXN1YXJpb1BpYW5vIiwiamFuZWxhQW5vbmltYSIsInJldHJ5IiwiaXNEb25lIiwibmV4dCIsImN1cnJlbnRfdHJpYWwiLCJtYXhfcmV0cnkiLCJpc190aW1lb3V0IiwiaXNJRTEwT3JMYXRlciIsInVzZXJfYWdlbnQiLCJ1YSIsImV4ZWMiLCJwYXJzZUludCIsImRldGVjdFByaXZhdGVNb2RlIiwiaXNfcHJpdmF0ZSIsIndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtIiwiVEVNUE9SQVJZIiwiZSIsImluZGV4ZWREQiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkYiIsInJlYWR5U3RhdGUiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInRlbSIsImdldEl0ZW0iLCJsaWdhZG8iLCJwYXJhbWV0cm8iLCJ2YWxvclBhcmFtZXRybyIsIm9idGVtU2VnbWVudGFjYW8iLCJzZWdtZW50YWNvZXMiLCJpIiwiZW52aWFFdmVudG9zR0EiLCJfR0FBY2FvIiwiX0dBUm90dWxvIiwibW9udGFSb3R1bG9HQSIsInNldExpbWl0ZUNvbnRhZ2VtIiwiX0dBTGltaXRlIiwiX0dBQ29udGFnZW0iLCJ2aWV3cyIsIm1heFZpZXdzIiwiaWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyIiwicmVncmFzIiwicGFzc2FnZW0iLCJmbHV4byIsImV4ZWN1dGFBcG9zUGFnZXZpZXciLCJleHBpcm91IiwidHBDb250ZXh0Iiwic2V0YVZhcmlhdmVpcyIsImlkTG9naW4iLCJ0aXBvTG9naW4iLCJhc3NpbmF0dXJhTG9nYWRhIiwiaWRMb2dpbkFzc2luYW50ZSIsInRpcG9Mb2dpbkFzc2luYW50ZSIsImJhbm5lciIsIm1vc3RyYXJGb290ZXIiLCJ2ZXJzYW8iLCJhZGljaW9uYXJDc3MiLCJtb250YVVybFN0ZyIsInhtbEh0dHBSZXF1ZXN0IiwiZ2VyYVNjcmlwdE5hUGFnaW5hIiwibW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlciIsIm1vc3RyYXJBdmF0YXJIZWFkZXIiLCJib3R0b21GaXhlZCIsInBhcmFtcyIsImdsYkJhbm5lckJvdHRvbSIsIm1vc3RyYXJTV0ciLCJjc3MiLCJzY3JpcHRKcyIsIm1vc3RyYXJIaWdobGlnaHRTYWxlIiwibW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yIiwicmVnaXN0ZXIiLCJtb3N0cmFyQmFycmVpcmEiLCJoZWxwZXIiLCJyZWRpcmVjaW9uYXJCYXJyZWlyYSIsInNob3ciLCJlcnJvciIsInRyaWdnZXJBZHZlcnRpc2luZyIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNoZWNrUGF5d2FsbCIsImNoZWNrR2F0ZSIsImhhc1B1YiIsInJlZ2lzdGVyUGF5d2FsbCIsInRpcG8iLCJhY3RpdmVQYXl3YWxsIiwic3RhdHVzIiwiY29tdW5pY2FkbyIsIm1vc3RyYXJJbmZvcm1hY2FvIiwiYWRibG9jayIsIm1vc3RyYXJBZEJsb2NrIiwiZ2xiQWRibG9jayIsImJsb3F1ZWlvcyIsImxpYmVyYXJFc2MiLCJibG9xdWVpYVZpZXdNb2RlIiwicGFyY2Vpcm8iLCJtb3N0cmFGb290ZXJQYXJjZWlybyIsImluYWRpbXBsZW50ZSIsImdldExpbmtBc3NpbmF0dXJhIiwibGluayIsInJlbCIsInVybFNjcmlwdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3Bvc3RhIiwicmVzcG9uc2VUZXh0IiwiYXBwZW5kRGVTY3JpcHQiLCJhcHBlbmRDaGlsZCIsInN0YXR1c1RleHQiLCJmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZSIsImhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlIiwic2V0UmVxdWVzdEhlYWRlciIsInJlc3BKc29uIiwicGFyc2UiLCJzaXR1YWNhb1BhZ2FtZW50byIsImZhelJlcXVpc2ljYW9CYXJyYW1lbnRvQXBpQXV0b3JpemFjYW9BY2Vzc28iLCJnbGJpZCIsImNvZGlnb1Byb2R1dG8iLCJjb25maWd1cmFjYW8iLCJqc29uQ29uZmlndXJhY2FvVGlueVBhc3MiLCJ1cmxWZXJpZmljYUxlaXRvciIsInJlc3Bvc3RhRGVUZXJtb0RlVXNvIiwicmVzcG9zdGFEZU1vdGl2byIsIm1vdGl2byIsInRlbVRlcm1vRGVVc28iLCJpc0F1dG9yaXphZG8iLCJhdXRvcml6YWRvIiwiX2pzb25MZWl0b3IiLCJ1c3VhcmlvSWQiLCJidG9hIiwiZW5jb2RlVVJJIiwiZ29vZ2xlIiwic2hvd1NhdmVTdWJzY3JpcHRpb24iLCJzd2dTZXJ2aWNlIiwiU3dnU2VydmljZSIsInNhdmVHbG9ib1N1YnNjcmlwdGlvbiIsImlzQXV0aG9yaXplZCIsImdldEVudGl0bGVtZW50Rm9yU291cmNlIiwic3Vic2NyaXB0aW9uVG9rZW4iLCJpc1NwZWNpZmljR29vZ2xlVXNlciIsIm9HbG9ib0J1c2luZXNzIiwiT0dsb2JvQnVzaW5lc3MiLCJ2ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkIiwiZW50aXRsZW1lbnRzIiwicmVzcG9uc2UiLCJlbmFibGVzVGhpcyIsImlzTG9nYWRvQ2FkdW4iLCJ1dHAiLCJ2ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8iLCJfbGVpdG9yIiwiZGVjb2RlVVJJIiwiYXRvYiIsInByb2R1dG8iLCJsb2dhZG8iLCJ1dWlkIiwidGVybW9EZVVzbyIsImlzU2VjdGlvbiIsInRlbVZhcmlhdmVpc09icmlnYXRvcmlhcyIsImV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsIiwiZ2V0V2luZG93TG9jYXRpb25TZWFyY2giLCJjaGF2ZXNDYW1wYW5oYSIsInZhbG9yZXNDYW1wYW5oYSIsImlkeFBhcmFtQ2FtcGFuaGEiLCJjaGF2ZUNhbXBhbmhhIiwicmVnZXgiLCJ2YWxvckNhbXBhbmhhIiwiam9pbiIsImNhbXBhbmhhIiwiaXNPcmlnZW1CdXNjYWRvciIsInJlZ2V4Um9ib3MiLCJlaFJvYm8iLCJ0ZW1QYXJhbWV0cm9OYVVybCIsInBhcmFtTmFtZSIsInBhcmFtZXRyb3MiLCJpc0RlYnVnIiwiaXNEb21pbmlvT0dsb2JvIiwiZ2V0V2luZG93TG9jYXRpb25IcmVmIiwiY2FsbGJhY2tNZXRlciIsIm1ldGVyRGF0YSIsImNhbGxiYWNrTWV0ZXJFeHBpcmVkIiwiY3NzUGF0aCIsImluc2VydEJlZm9yZSIsImxhc3RDaGlsZCIsInJldmlzdGFzIiwicmVjYXJyZWdhUGlhbm8iLCJ0aXBvQ29udGV1ZG8iLCJpc0V4Y2x1c2l2byIsImNvbnN0cnV0b3IiLCJpbml0VHAiLCJleGVjdXRlIiwiaXNWYWxvciIsImlkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMiLCJpZFNhbmRib3hUaW55cGFzcyIsInNldFNhbmRCb3giLCJjbGVhbl91cmwiLCJsb2FkUGlhbm9FeHBlcmllbmNlcyIsImEiLCJhc3luYyIsInVybFNhbmRib3hQaWFub1JldmlzdGFzIiwidXJsU2FuZGJveFBpYW5vIiwiYiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsInBpYW5vSW5pdCIsInN1YnNjcmlwdGlvbnMiLCJzZXRPbkVudGl0bGVtZW50c1Jlc3BvbnNlIiwiZW50aXRsZW1lbnRzUHJvbWlzZSIsInRpbnlJbml0Iiwic2V0UGlhbm8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZTtBQUNYLFdBQVM7QUFDVCxnQkFBWSxPQURIO0FBRVQsVUFBTTtBQUZHLEdBREU7QUFLWCxrQkFBZ0I7QUFDaEIsZ0JBQVksY0FESTtBQUVoQixVQUFNO0FBRlUsR0FMTDtBQVNYLFdBQVM7QUFDVCxnQkFBWSxPQURIO0FBRVQsVUFBTTtBQUZHLEdBVEU7QUFhWCxhQUFXO0FBQ1gsZ0JBQVksU0FERDtBQUVYLFVBQU07QUFGSyxHQWJBO0FBaUJYLGdCQUFjO0FBQ2QsZ0JBQVksWUFERTtBQUVkLFVBQU07QUFGUSxHQWpCSDtBQXFCWCxrQkFBZ0I7QUFDaEIsZ0JBQVksY0FESTtBQUVoQixVQUFNO0FBRlUsR0FyQkw7QUF5QlgsbUJBQWlCO0FBQ2pCLGdCQUFZLGFBREs7QUFFbEIsVUFBTTtBQUZZLEdBekJOO0FBNkJYLG1CQUFpQjtBQUNqQixnQkFBWSxNQURLO0FBRWpCLFVBQU07QUFGVyxHQTdCTjtBQWlDWCxvQkFBa0I7QUFDbEIsZ0JBQVksZ0JBRE07QUFFbEIsVUFBTTtBQUZZLEdBakNQO0FBcUNYLGlCQUFlO0FBQ2YsZ0JBQVksYUFERztBQUVmLFVBQU07QUFGUyxHQXJDSjtBQXlDWCxVQUFRO0FBQ1IsZ0JBQVksbUJBREo7QUFFUixVQUFNO0FBRkUsR0F6Q0c7QUE2Q1gsYUFBVztBQUNYLGdCQUFZLFNBREQ7QUFFWCxVQUFNO0FBRkssR0E3Q0E7QUFpRFgsYUFBVztBQUNYLGdCQUFZLFNBREQ7QUFFWCxVQUFNO0FBRkssR0FqREE7QUFxRFgsUUFBTTtBQUNOLGdCQUFZLElBRE47QUFFTixVQUFNO0FBRkEsR0FyREs7QUF5RFgsV0FBUztBQUNULGdCQUFZLE9BREg7QUFFVCxVQUFNO0FBRkcsR0F6REU7QUE2RFgsWUFBVTtBQUNWLGdCQUFZLE1BREY7QUFFVixVQUFNO0FBRkksR0E3REM7QUFpRVgsV0FBUztBQUNULGdCQUFZLE1BREg7QUFFVCxVQUFNO0FBRkcsR0FqRUU7QUFxRVgsV0FBUztBQUNULGdCQUFZLE1BREg7QUFFVCxVQUFNO0FBRkcsR0FyRUU7QUF5RVgsWUFBVTtBQUNWLGdCQUFZLE1BREY7QUFFVixVQUFNO0FBRkksR0F6RUM7QUE2RVgsbUJBQWlCO0FBQ2pCLGdCQUFZLE1BREs7QUFFakIsVUFBTTtBQUZXLEdBN0VOO0FBaUZYLFdBQVM7QUFDVCxnQkFBWSxjQURIO0FBRVQsVUFBTTtBQUZHO0FBakZFLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCQSxFOzs7QUFDakIsZ0JBQXlCO0FBQUEsUUFBYkMsSUFBYSx1RUFBTixJQUFNOztBQUFBOztBQUNyQixTQUFLQyxLQUFMLEdBQWFDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixLQUE1QjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxFQUFMLEdBQVVMLElBQVY7QUFDSDs7OzttQ0FNYztBQUNYLFVBQUcsS0FBS0ksUUFBUixFQUNJO0FBRUosVUFBTUUsUUFBUSxHQUFJLE9BQU8sS0FBS0QsRUFBTCxDQUFRRSxLQUFSLENBQWNDLElBQXJCLEtBQThCLFdBQS9CLEdBQThDLEtBQUtILEVBQUwsQ0FBUUUsS0FBUixDQUFjQyxJQUE1RCxHQUFtRSxJQUFwRjs7QUFFQSxVQUFHLEtBQUtDLFNBQUwsSUFBa0JILFFBQXJCLEVBQThCO0FBQzFCSSxXQUFHLENBQUMsTUFBRCxFQUFTLGlCQUFULENBQUg7QUFDQUEsV0FBRyxDQUFDLGFBQUQsRUFBZ0IsaUJBQWhCLEVBQW1DLEtBQUtMLEVBQUwsQ0FBUUUsS0FBUixDQUFjQyxJQUFqRCxDQUFIO0FBQ0g7QUFDSjs7O3dCQWRlO0FBQ1osYUFBUSxPQUFPRSxHQUFQLEtBQWUsV0FBaEIsR0FBK0IsSUFBL0IsR0FBc0MsS0FBN0M7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEw7O0lBRXFCQyxFOzs7QUFDcEIsZ0JBQWM7QUFBQTs7QUFDUCxTQUFLVixLQUFMLEdBQWFDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixLQUFmLENBQXFCVyxFQUFsQztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsaURBQUosRUFBaEI7QUFDSDs7OztvQ0FFZTtBQUNaWixZQUFNLENBQUNhLFNBQVAsR0FBbUJiLE1BQU0sQ0FBQ2EsU0FBUCxJQUFxQixFQUF4QztBQUVBLFVBQUcsS0FBS0YsUUFBTCxDQUFjRyxjQUFkLElBQWdDLE9BQU9DLElBQVAsS0FBZ0IsV0FBbkQsRUFDSWYsTUFBTSxDQUFDZSxJQUFQLEdBQWNmLE1BQU0sQ0FBQ2UsSUFBUCxJQUFnQixFQUE5QjtBQUNQOzs7OEJBRVNDLE0sRUFBUUMsSyxFQUEyQjtBQUFBLFVBQXBCQyxRQUFvQix1RUFBVCxPQUFTO0FBRS9DLFVBQUdsQixNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBZixDQUFxQlcsRUFBeEIsRUFDQ1MsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkYsUUFBNUIsRUFBc0NGLE1BQXRDLEVBQThDQyxLQUE5QztBQUVLLFVBQUksS0FBS04sUUFBTCxDQUFjRyxjQUFsQixFQUNMQyxJQUFJLENBQUNNLElBQUwsQ0FBVSxDQUFDLGFBQUQsRUFBZ0JILFFBQWhCLEVBQTBCRixNQUExQixFQUFrQ0MsS0FBbEMsR0FBMEMsSUFBMUMsQ0FBVjtBQUVESixlQUFTLENBQUNRLElBQVYsQ0FBZTtBQUFDLGlCQUFTLGVBQVY7QUFBMkIsNkJBQXFCSCxRQUFoRDtBQUEwRCx3QkFBZ0JGLE1BQTFFO0FBQWtGLDBCQUFpQkM7QUFBbkcsT0FBZjtBQUNHOzs7bUNBRWNELE0sRUFBUUMsSyxFQUFPO0FBQ2hDLFVBQUksS0FBS04sUUFBTCxDQUFjRyxjQUFsQixFQUNDQyxJQUFJLENBQUNNLElBQUwsQ0FBVSxDQUFDLGFBQUQsRUFBZ0IsWUFBaEIsRUFBOEJMLE1BQTlCLEVBQXNDQyxLQUF0QyxHQUE4QyxJQUE5QyxDQUFWO0FBRURKLGVBQVMsQ0FBQ1EsSUFBVixDQUFlO0FBQUMsaUJBQVMsZUFBVjtBQUEyQiw2QkFBcUIsWUFBaEQ7QUFBOEQsd0JBQWdCTCxNQUE5RTtBQUFzRiwwQkFBaUJDO0FBQXZHLE9BQWY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDL0JtQkssTzs7Ozs7Ozs7OzhCQUVBQyxJLEVBQU07QUFDbkIsYUFBUSxPQUFPQSxJQUFQLEtBQWdCLFdBQWpCLEdBQWdDLElBQWhDLEdBQXNDLEtBQTdDO0FBQ0g7Ozs4QkFFZ0JDLE0sRUFBUUMsSyxFQUEwQjtBQUFBLFVBQW5CQyxVQUFtQix1RUFBTixJQUFNO0FBQy9DLFVBQUlDLE1BQU0sR0FBRyxJQUFJQyxJQUFKLEVBQWI7QUFDQSxVQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0QsUUFBVCxHQUFvQkMsUUFBUSxDQUFDRCxRQUE3QixHQUF3QyxJQUF2RDtBQUVBLFVBQUcsQ0FBQ0EsUUFBSixFQUFjO0FBRWRGLFlBQU0sQ0FBQ0ksT0FBUCxDQUFlSixNQUFNLENBQUNLLE9BQVAsS0FBbUJOLFVBQWxDO0FBQ0FPLGNBQVEsQ0FBQ0MsTUFBVCxHQUFrQlYsTUFBTSxHQUFHLEdBQVQsR0FBY1csTUFBTSxDQUFDVixLQUFELENBQXBCLElBQWdDQyxVQUFELEdBQWUsRUFBZixHQUFvQixjQUFjQyxNQUFNLENBQUNTLFdBQVAsRUFBakUsSUFDaEIsV0FEZ0IsR0FDRixVQURFLEdBQ1dQLFFBQVEsQ0FBQ1EsS0FBVCxDQUFlLEdBQWYsRUFBb0JDLE9BQXBCLEdBQThCLENBQTlCLENBRFgsR0FDOEMsR0FEOUMsR0FDb0RULFFBQVEsQ0FBQ1EsS0FBVCxDQUFlLEdBQWYsRUFBb0JDLE9BQXBCLEdBQThCLENBQTlCLENBRHRFO0FBRUg7Ozs4QkFFZ0JoQyxJLEVBQU07QUFDbkIsVUFBSWlDLEtBQUssR0FBSU4sUUFBUSxDQUFDQyxNQUFWLEdBQW9CRCxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JLLEtBQWhCLENBQXNCLElBQUlDLE1BQUosQ0FBV2xDLElBQUksR0FBQyxVQUFoQixDQUF0QixDQUFwQixHQUF5RSxLQUFyRjtBQUNBLFVBQUltQyxVQUFVLEdBQUdGLEtBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNJLFFBQVQsRUFBRCxDQUFYLEdBQW1DLEVBQXpEO0FBQ0EsYUFBT0YsVUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkw7O0lBRXFCRyxLOzs7QUFDakIsbUJBQWM7QUFBQTs7QUFDVixTQUFLN0MsS0FBTCxHQUFhQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBNUI7QUFDQSxTQUFLOEMsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLQyxhQUFMO0FBQ0g7Ozs7b0NBV2U7QUFDWixVQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQS9DLFlBQU0sQ0FBQzRDLEtBQVAsQ0FBYUksVUFBYixHQUEwQixFQUExQjtBQUVOLFVBQUdoRCxNQUFNLENBQUNpRCxVQUFQLElBQXFCakQsTUFBTSxDQUFDaUQsVUFBUCxDQUFrQkMsZUFBMUMsRUFDQ0gsY0FBYyxHQUFHL0MsTUFBTSxDQUFDbUQsbUJBQVAsYUFBZ0NGLFVBQVUsQ0FBQ0MsZUFBM0MsZ0JBQWdFbEQsTUFBTSxDQUFDbUQsbUJBQXZFLElBQStGRixVQUFVLENBQUNDLGVBQTNIO0FBRUssVUFBSWxELE1BQU0sQ0FBQ2tELGVBQVgsRUFDTEgsY0FBYyxHQUFHL0MsTUFBTSxDQUFDbUQsbUJBQVAsYUFBZ0NuRCxNQUFNLENBQUNrRCxlQUF2QyxnQkFBNERsRCxNQUFNLENBQUNtRCxtQkFBbkUsSUFBMkZuRCxNQUFNLENBQUNrRCxlQUFuSDtBQUVLbEQsWUFBTSxDQUFDNEMsS0FBUCxDQUFhSSxVQUFiLENBQXdCMUMsSUFBeEIsR0FBK0J5QyxjQUEvQjtBQUNOOzs7K0JBRWE7QUFDUCxVQUFHLEtBQUt4QyxTQUFSLEVBQ0llLGdEQUFPLENBQUM4QixTQUFSLENBQWtCLEtBQUtQLE9BQUwsQ0FBYVEsU0FBYixDQUF1QkMsU0FBdkIsQ0FBaUNwQixNQUFqQyxDQUF3Q3FCLEdBQTFELEVBQStELEVBQS9ELEVBQW1FLENBQUMsQ0FBcEU7QUFDUDs7O3dCQXpCZTtBQUNaLFVBQUcsT0FBT3ZELE1BQU0sQ0FBQ0MsT0FBZCxLQUEwQixXQUExQixJQUF5QyxPQUFPRCxNQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQXRCLEtBQWdDLFdBQTVFLEVBQXlGO0FBQ3JGLGFBQUtDLE9BQUwsR0FBZTdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkMsS0FBOUI7QUFDQSxlQUFPLElBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJMOztJQUVxQmpDLFE7OztBQUNwQixzQkFBYztBQUFBOztBQUNQLFNBQUs2QyxXQUFMLEdBQW9CLE9BQU94RCxNQUFNLENBQUN5RCxnQkFBZCxLQUFtQyxXQUFwQyxHQUFtRHpELE1BQU0sQ0FBQ3lELGdCQUExRCxHQUE2RSxJQUFoRztBQUNIOzs7O2dDQUVXO0FBQ1IsVUFBTUMsZ0JBQWdCLEdBQUc7QUFDckJDLGVBQU8sRUFBRTtBQUNMckQsY0FBSSxFQUFFLEtBQUtrRCxXQUROLENBRUw7O0FBRks7QUFEWSxPQUF6QjtBQU9BeEQsWUFBTSxDQUFDQyxPQUFQLEdBQWtCRCxNQUFNLENBQUNDLE9BQVIsR0FBb0IyRCxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsZ0JBQWQsRUFBZ0MxRCxNQUFNLENBQUNDLE9BQXZDLENBQXBCLEdBQXNFeUQsZ0JBQXZGO0FBQ0g7Ozt3QkFFb0I7QUFDakIsYUFBUSxLQUFLRixXQUFMLElBQW9CLEtBQUtBLFdBQUwsS0FBcUIsT0FBMUMsR0FBcUQsSUFBckQsR0FBNEQsS0FBbkU7QUFDSDs7O3dCQUVlO0FBRVosYUFBVSxPQUFPTSxtRUFBVSxDQUFDLEtBQUtOLFdBQU4sQ0FBakIsS0FBeUMsV0FBMUMsSUFDTCxPQUFPTSxtRUFBVSxDQUFDLEtBQUtOLFdBQU4sQ0FBVixDQUE2Qk8sRUFBcEMsS0FBNEMsV0FEekMsR0FFTEQsbUVBQVUsQ0FBQyxLQUFLTixXQUFOLENBQVYsQ0FBNkJPLEVBRnhCLEdBRTZCLElBRnBDO0FBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTDs7SUFFcUJDLEc7OztBQUNqQixpQkFBYztBQUFBOztBQUNWaEUsVUFBTSxDQUFDaUUsR0FBUCxHQUFhakUsTUFBTSxDQUFDaUUsR0FBUCxJQUFjLEVBQTNCLENBRFUsQ0FDcUI7O0FBQy9CakUsVUFBTSxDQUFDa0UsZUFBUCxHQUF5QmxFLE1BQU0sQ0FBQ2tFLGVBQVAsSUFBMEIsSUFBbkQ7QUFDQSxTQUFLbkUsS0FBTCxHQUFjdUIsZ0RBQU8sQ0FBQ2YsU0FBUixDQUFrQlAsTUFBTSxDQUFDQyxPQUF6QixDQUFELEdBQXNDRCxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBZixDQUFxQm9FLEdBQTNELEdBQWlFLEtBQTlFO0FBQ0EsU0FBS2pFLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLMkMsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLdUIsaUJBQUwsR0FBMEIsT0FBT1gsZ0JBQVAsS0FBNEIsV0FBN0IsR0FBNENBLGdCQUE1QyxHQUErRCxJQUF4RjtBQUNBLFNBQUtZLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0MsTUFBTCxHQUFjdEMsUUFBUSxDQUFDdUMsSUFBdkI7QUFFQSxTQUFLQyxZQUFMO0FBQ0g7Ozs7bUNBTWM7QUFDWCxVQUFHLENBQUNuRCxnREFBTyxDQUFDZixTQUFSLENBQWtCUCxNQUFNLENBQUNDLE9BQXpCLENBQUosRUFBdUM7QUFFdkNELFlBQU0sQ0FBQ0MsT0FBUCxDQUFlK0QsR0FBZixHQUFxQjtBQUNqQlUsY0FBTSxFQUFHLE9BQU9QLEdBQVAsS0FBZSxXQUFoQixHQUErQkEsR0FBL0IsR0FBcUM7QUFENUIsT0FBckI7QUFHSDs7OzRCQUVPUSxPLEVBQVM7QUFDYixVQUFNQyxTQUFTLEdBQUcsSUFBSUMsZUFBSixDQUFvQjdFLE1BQU0sQ0FBQzhCLFFBQVAsQ0FBZ0JnRCxNQUFoQixDQUF1QkMsU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBcEIsQ0FBbEI7QUFDQSxVQUFNQyxTQUFTLEdBQUksT0FBT2hGLE1BQU0sQ0FBQ2lGLFVBQVAsQ0FBa0JkLEdBQXpCLEtBQWlDLFdBQWpDLElBQWdELE9BQU9uRSxNQUFNLENBQUNpRixVQUFQLENBQWtCZCxHQUFsQixDQUFzQmUsSUFBN0IsS0FBc0MsV0FBdkYsR0FBc0dsRixNQUFNLENBQUNpRixVQUFQLENBQWtCZCxHQUFsQixDQUFzQmUsSUFBNUgsR0FBbUksSUFBcko7QUFDQSxVQUFJQyxZQUFZLEdBQUcsSUFBbkI7O0FBRUEsY0FBT1IsT0FBTyxDQUFDUyxPQUFSLENBQWdCQyxJQUF2QjtBQUNJLGFBQUssS0FBTDtBQUFZRixzQkFBWSxHQUFHbkYsTUFBTSxDQUFDaUYsVUFBUCxDQUFrQkssZUFBakM7QUFBa0Q7O0FBQzlELGFBQUssTUFBTDtBQUFhSCxzQkFBWSxHQUFHbkYsTUFBTSxDQUFDaUYsVUFBUCxDQUFrQk0sZ0JBQWpDO0FBQW1EOztBQUNoRSxhQUFLLE9BQUw7QUFBY0osc0JBQVksR0FBR25GLE1BQU0sQ0FBQ2lGLFVBQVAsQ0FBa0JPLGlCQUFqQztBQUFvRDtBQUh0RTs7QUFPQVIsZUFBUyxDQUFDUyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUN4QixZQUFJcEYsSUFBSSxHQUFHb0YsSUFBSSxDQUFDcEYsSUFBTCxDQUFVcUYsV0FBVixFQUFYO0FBQ0EsWUFBSWxFLEtBQUssR0FBR2lFLElBQUksQ0FBQ2pFLEtBQWpCO0FBQ0FtRCxpQkFBUyxDQUFDZ0IsR0FBVixlQUFxQnRGLElBQXJCLEdBQTZCbUIsS0FBN0I7QUFDSCxPQUpEOztBQU1BLFVBQUd6QixNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBZixDQUFxQm9FLEdBQXhCLEVBQTZCO0FBQ3pCaEQsZUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixTQUExQjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQzRELFNBQWxDO0FBQ0E3RCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ1UsUUFBbEM7QUFDSDs7QUFFRCxVQUFLLEtBQUs1QixRQUFMLElBQWlCLENBQUMsS0FBS0ssU0FBeEIsSUFBc0MsQ0FBQ3lFLFNBQTNDLEVBQXVEO0FBRXZELFVBQUdHLFlBQUgsRUFDSW5GLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlK0QsR0FBZixDQUFtQlUsTUFBbkIsQ0FBMEJtQixTQUExQixDQUFvQ1YsWUFBcEM7QUFDUDs7Ozs7Ozs7Ozs7O0FBR09XLG1CLEdBQU05RixNQUFNLENBQUNDLE9BQVAsQ0FBZThGLFlBQWYsR0FDUix1RkFEUSxHQUVSLHNGO0FBRUYsb0JBQUcvRixNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBZixDQUFxQm9FLEdBQXhCLEVBQ0EyQixHQUFHLEdBQUcsNkJBQU47O3VCQUVhRSxLQUFLLENBQUNGLEdBQUQsQ0FBTCxDQUFXRyxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxpQkFBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSVQsS0FBSy9CLGlCOzs7Ozs7Ozs7dUJBRWMsS0FBS2dDLFdBQUwsRTs7O0FBQWpCQyx3QjtBQUNBQyx1QixHQUFVRCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQWIsSUFBSTtBQUFBLHlCQUFJQSxJQUFJLENBQUNjLGdCQUFMLEtBQTBCLEtBQUksQ0FBQ3BDLGlCQUFuQztBQUFBLGlCQUFwQixFQUEyRSxDQUEzRSxDO2tEQUNUa0MsT0FBTyxJQUFJLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrRkFHQ0csRzs7Ozs7O0FBQ2JDLDZCLEdBQWdCLENBQUMsYUFBRCxFQUFnQixrQkFBaEIsRUFBb0MsT0FBcEMsQztBQUNoQkMsc0IsR0FBUy9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0I0QyxHQUFsQixDO0FBRWZDLDZCQUFhLENBQUNqQixPQUFkLENBQXNCLFVBQUFkLE9BQU8sRUFBSTtBQUM3Qix5QkFBT2dDLE1BQU0sQ0FBQ2hDLE9BQUQsQ0FBYjtBQUNILGlCQUZEO2tEQUlPZ0MsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUlvQixJOzt1QkFBNEIsS0FBS0MsVUFBTCxFOzs7OztvQ0FBdkJDLGdCOzs7Ozs7Ozs7OytCQUE2QyxJOzs7QUFBdkV2QywyQjtBQUNBZ0MsdUIsR0FBVTFDLE1BQU0sQ0FBQ2tELElBQVAsQ0FBWXhDLFdBQVosRUFBeUJ5QyxNQUF6QixHQUFrQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWUzQyxXQUFmLENBQWxDLEdBQWdFLEk7O29CQUU1RWdDLE87Ozs7Ozs7O0FBR0EscUJBQUtqQyxjQUFMLEdBQXNCLElBQXRCO0FBRUEsb0JBQUcsS0FBS3RFLEtBQVIsRUFDSW9CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUMscUNBQW1Ca0Y7QUFBcEIsaUJBQVo7QUFFSixxQkFBS2hDLFdBQUwsYUFBdUJnQyxPQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLRSxLQUFLWSxjQUFMLEU7OztvQkFDRixLQUFLNUMsVzs7Ozs7Ozs7QUFFSEssdUIsR0FBVTFDLFFBQVEsQ0FBQ2tGLGFBQVQsQ0FBdUIsUUFBdkIsQztBQUdoQnhDLHVCQUFPLENBQUN5QyxJQUFSLEdBQWUscUJBQWY7QUFDQXpDLHVCQUFPLENBQUMwQyxTQUFSLEdBQW9CLEtBQUsvQyxXQUF6QjtBQUNBLHFCQUFLQyxNQUFMLENBQVkrQyxxQkFBWixDQUFrQyxXQUFsQyxFQUErQzNDLE9BQS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR1c7QUFDWCxVQUFNQSxPQUFPLEdBQUcxQyxRQUFRLENBQUNrRixhQUFULENBQXVCLFFBQXZCLENBQWhCO0FBQ0F4QyxhQUFPLENBQUM0QyxHQUFSLEdBQWMsMENBQWQ7QUFDQSxXQUFLaEQsTUFBTCxDQUFZK0MscUJBQVosQ0FBa0MsV0FBbEMsRUFBK0MzQyxPQUEvQztBQUNIOzs7eUNBRW9CO0FBQ2pCLFVBQU1BLE9BQU8sR0FBRzFDLFFBQVEsQ0FBQ2tGLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBaEI7QUFDQSxVQUFNSyxPQUFPLEdBQUcsdUZBQWhCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLHVGQUFmO0FBRUE5QyxhQUFPLENBQUM0QyxHQUFSLEdBQWN2SCxNQUFNLENBQUNDLE9BQVAsQ0FBZThGLFlBQWYsR0FBOEJ5QixPQUE5QixHQUF3Q0MsTUFBdEQ7QUFDQSxXQUFLbEQsTUFBTCxDQUFZK0MscUJBQVosQ0FBa0MsV0FBbEMsRUFBK0MzQyxPQUEvQztBQUNIOzs7OEJBRVM7QUFDTixhQUFPLElBQUkrQyxPQUFKLENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3JDLFlBQUlDLEtBQUssR0FBRyxDQUFaO0FBRUEsWUFBSUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUM3QixjQUFHL0gsTUFBTSxDQUFDbUUsR0FBVixFQUFlO0FBQ1huRSxrQkFBTSxDQUFDQyxPQUFQLENBQWUrRCxHQUFmLENBQW1CVSxNQUFuQixHQUE0QjFFLE1BQU0sQ0FBQ21FLEdBQW5DO0FBQ0F3RCxtQkFBTyxDQUFDM0gsTUFBTSxDQUFDQyxPQUFQLENBQWUrRCxHQUFmLENBQW1CVSxNQUFwQixDQUFQO0FBQ0FzRCx5QkFBYSxDQUFDRixRQUFELENBQWI7QUFDSDs7QUFFRCxjQUFHRCxLQUFLLEtBQUssRUFBYixFQUFpQjtBQUNiRCxrQkFBTSxDQUFDLHlCQUFELENBQU47QUFDQUkseUJBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0g7O0FBRURELGVBQUs7QUFDUixTQWJ5QixFQWF2QixHQWJ1QixDQUExQjtBQWNILE9BakJNLENBQVA7QUFrQkg7Ozs7Ozs7Ozs7O29CQUdPLEtBQUt6RCxpQjs7Ozs7Ozs7O3VCQUNILEtBQUs2RCxTQUFMLEU7OztvQkFFRixLQUFLNUQsYzs7Ozs7Ozs7O3VCQUVILEtBQUs2RCxZQUFMLEU7Ozs7dUJBQ0EsS0FBS0Msa0JBQUwsRTs7Ozt1QkFDQSxLQUFLQyxPQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFoSk07QUFDWixhQUFRcEksTUFBTSxDQUFDQyxPQUFQLENBQWUrRCxHQUFmLENBQW1CVSxNQUFwQixHQUE4QixJQUE5QixHQUFxQyxLQUE1QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkw7O0lBRXFCMkQsSTs7O0FBQ3BCLGtCQUFjO0FBQUE7O0FBQ1AsU0FBSzFILFFBQUwsR0FBZ0IsSUFBSUMsaURBQUosRUFBaEI7QUFDQVosVUFBTSxDQUFDc0ksVUFBUCxHQUFvQnRJLE1BQU0sQ0FBQ3NJLFVBQVAsSUFBcUIsSUFBekM7QUFDQXRJLFVBQU0sQ0FBQ3VJLEVBQVAsR0FBWXZJLE1BQU0sQ0FBQ3VJLEVBQVAsSUFBYSxFQUF6QjtBQUNBdkksVUFBTSxDQUFDNEMsS0FBUCxHQUFlNUMsTUFBTSxDQUFDNEMsS0FBUCxJQUFnQixFQUEvQjtBQUNBNUMsVUFBTSxDQUFDd0ksZ0JBQVAsR0FBMEJ4SSxNQUFNLENBQUN3SSxnQkFBUCxJQUEyQixFQUFyRDtBQUVBLFNBQUtDLGFBQUw7QUFDQSxTQUFLOUgsUUFBTCxDQUFjK0gsU0FBZDtBQUNBLFNBQUtDLElBQUw7QUFDSDs7OztvQ0FFZTtBQUNaLFVBQU1DLGVBQWUsR0FBRztBQUNwQjdJLGFBQUssRUFBRTtBQUNIOEksY0FBSSxFQUFFLEtBREg7QUFFSEMsaUJBQU8sRUFBRSxLQUZOO0FBR0gzRSxhQUFHLEVBQUUsS0FIRjtBQUlIekQsWUFBRSxFQUFFO0FBSkQsU0FEYTtBQU9wQnFGLG9CQUFZLEVBQUcvRixNQUFNLENBQUMrSSxzQkFBUCxLQUFrQyxLQUFuQyxHQUE0QyxJQUE1QyxHQUFtRDtBQVA3QyxPQUF4QjtBQVVBL0ksWUFBTSxDQUFDQyxPQUFQLEdBQWtCRCxNQUFNLENBQUNDLE9BQVIsR0FBb0IyRCxNQUFNLENBQUNDLE1BQVAsQ0FBYytFLGVBQWQsRUFBK0I1SSxNQUFNLENBQUNDLE9BQXRDLENBQXBCLEdBQXFFMkksZUFBdEY7QUFDSDs7OzZCQUVRbkMsRyxFQUFLO0FBQ1Z6RyxZQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQWYsR0FBdUI2RCxHQUF2QjtBQUNIOzs7MkJBRU0sQ0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0w7QUFDQTtBQUNBOztJQUVxQnVDLGU7OztBQUNuQiw2QkFBYztBQUFBOztBQUNaLFNBQUtwRyxLQUFMLEdBQWEsSUFBSXFHLDhDQUFKLEVBQWI7QUFDQSxTQUFLeEksRUFBTCxHQUFVLElBQUl5SSwyQ0FBSixFQUFWO0FBRUFsSixVQUFNLENBQUNhLFNBQVAsR0FBbUJiLE1BQU0sQ0FBQ2EsU0FBUCxJQUFvQixFQUF2QztBQUNBLFNBQUtkLEtBQUwsR0FBYUMsTUFBTSxDQUFDQyxPQUFQLENBQWVGLEtBQWYsQ0FBcUIrSSxPQUFsQztBQUNBLFNBQUs1SSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS2lKLE9BQUwsR0FBZTtBQUNYTCxhQUFPLEVBQUUsRUFERTtBQUVYM0ksUUFBRSxFQUFFO0FBQ0FFLGFBQUssRUFBRTtBQURQO0FBRk8sS0FBZjtBQU9BLFNBQUsrSSxXQUFMO0FBQ0Q7Ozs7a0NBRWE7QUFDWixVQUFHLENBQUMsS0FBS3hHLEtBQUwsQ0FBV3JDLFNBQWYsRUFDRTtBQUVGLFVBQU04SSxNQUFNLEdBQUcsS0FBS3pHLEtBQUwsQ0FBV0MsT0FBMUI7QUFFQSxXQUFLcEMsRUFBTCxDQUFRNkksU0FBUixDQUFrQixtQkFBbEIsRUFBdUN0SixNQUFNLENBQUM0QyxLQUFQLENBQWFJLFVBQWIsQ0FBd0IxQyxJQUEvRDtBQUNBZ0Isc0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JpRyxNQUFNLENBQUNoRyxTQUFQLENBQWlCQyxTQUFqQixDQUEyQnBCLE1BQTNCLENBQWtDcUgsS0FBcEQsRUFBMkQsSUFBM0QsRUFBaUUsQ0FBakU7QUFDRDs7OzRCQUVPNUUsTyxFQUFTO0FBQ2YsVUFBRyxLQUFLekUsUUFBUixFQUNFO0FBRUYsVUFBTXNKLFFBQVEsR0FBRzdFLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQnFFLFVBQWhCLElBQThCLElBQS9DO0FBQ0EsVUFBTUMsUUFBUSxHQUFHL0UsT0FBTyxDQUFDUyxPQUFSLENBQWdCdUUsZUFBakM7QUFDQSxVQUFNMUksS0FBSyxHQUFJeUksUUFBUSxLQUFLLEtBQWQsR0FBdUIvRSxPQUFPLENBQUNTLE9BQVIsQ0FBZ0J3RSxPQUFoQixHQUEwQixLQUFLVCxPQUFMLENBQWFMLE9BQWIsQ0FBcUI3SCxLQUF0RSxHQUE4RTBELE9BQU8sQ0FBQ1MsT0FBUixDQUFnQndFLE9BQTVHO0FBRUEsVUFBTTlKLElBQUksR0FBRztBQUNYK0osYUFBSyxFQUFFLFVBREk7QUFFWEMseUJBQWlCLEVBQUUsS0FBS1gsT0FBTCxDQUFhTCxPQUFiLENBQXFCeEksSUFGN0I7QUFHWHlKLG9CQUFZLEVBQUVwRixPQUFPLENBQUNTLE9BQVIsQ0FBZ0I0RSxRQUFoQixJQUE0QmhKLE1BSC9CO0FBSVhpSixzQkFBYyxFQUFFaEosS0FKTDtBQUtYaUoscUJBQWEsRUFBRSxDQUxKO0FBTVhDLHlCQUFpQixFQUFFO0FBTlIsT0FBYjtBQVNBLFVBQUlYLFFBQUosRUFDSSxLQUFLNUcsS0FBTCxDQUFXNEcsUUFBWDtBQUVKLFdBQUtZLFlBQUwsQ0FBa0J0SyxJQUFsQjtBQUNEOzs7a0NBRWE7QUFDWixVQUFNc0gsSUFBSSxHQUFNLE9BQU9wSCxNQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQXRCLEtBQWdDLFdBQWhDLElBQStDLE9BQU81QyxNQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQWYsQ0FBcUJ5SCxXQUE1QixLQUE0QyxXQUE1RixJQUE0R3JLLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkMsS0FBZixDQUFxQnlILFdBQW5JLEdBQ1RySyxNQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQWYsQ0FBcUJ5SCxXQUFyQixDQUFpQzFFLFdBQWpDLEVBRFMsR0FFVCxTQUZKOztBQUlBLGNBQVF5QixJQUFSO0FBQ0UsYUFBSyxVQUFMO0FBQ0UsZUFBSytCLE9BQUwsQ0FBYUwsT0FBYixDQUFxQnhJLElBQXJCLEdBQTRCLGdCQUE1QjtBQUNBLGVBQUs2SSxPQUFMLENBQWFMLE9BQWIsQ0FBcUI3SCxLQUFyQixHQUE2QixhQUE3QjtBQUNBLGVBQUtrSSxPQUFMLENBQWFoSixFQUFiLENBQWdCRSxLQUFoQixDQUFzQkMsSUFBdEIsR0FBNkIsa0JBQTdCO0FBQ0E7O0FBQ0YsYUFBSyxXQUFMO0FBQ0UsZUFBSzZJLE9BQUwsQ0FBYUwsT0FBYixDQUFxQnhJLElBQXJCLEdBQTRCLG9CQUE1QjtBQUNBLGVBQUs2SSxPQUFMLENBQWFMLE9BQWIsQ0FBcUI3SCxLQUFyQixHQUE2QixjQUE3QjtBQUNBLGVBQUtrSSxPQUFMLENBQWFoSixFQUFiLENBQWdCRSxLQUFoQixDQUFzQkMsSUFBdEIsR0FBNkIsb0JBQTdCO0FBQ0E7O0FBQ0YsYUFBSyxTQUFMO0FBQ0UsZUFBSzZJLE9BQUwsQ0FBYUwsT0FBYixDQUFxQnhJLElBQXJCLEdBQTRCLFNBQTVCO0FBQ0EsZUFBSzZJLE9BQUwsQ0FBYUwsT0FBYixDQUFxQjdILEtBQXJCLEdBQTZCLGNBQTdCO0FBQ0EsZUFBS2tJLE9BQUwsQ0FBYWhKLEVBQWIsQ0FBZ0JFLEtBQWhCLENBQXNCQyxJQUF0QixHQUE2QixzQkFBN0I7QUFDQTtBQWZKO0FBaUJEOzs7bUNBRXVCO0FBQUEsVUFBWFIsSUFBVyx1RUFBSixFQUFJOztBQUN0QixVQUFJOEQsTUFBTSxDQUFDa0QsSUFBUCxDQUFZaEgsSUFBWixFQUFrQmlILE1BQXRCLEVBQThCO0FBQzVCbEcsaUJBQVMsQ0FBQ1EsSUFBVixDQUFldkIsSUFBZjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GSDtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJ3SyxVOzs7QUFDcEIsd0JBQWM7QUFBQTs7QUFBQTs7QUFDZCxTQUFLMUgsS0FBTCxHQUFhLElBQUlxRyw4Q0FBSixFQUFiO0FBQ0EsU0FBS3hJLEVBQUwsR0FBVSxJQUFJdUksbURBQUosRUFBVjtBQUNBLFNBQUsvRSxHQUFMLEdBQVcsSUFBSXNHLDRDQUFKLEVBQVg7QUFDQSxTQUFLQyxFQUFMLEdBQVUsSUFBSUMsMkNBQUosQ0FBYSxLQUFLaEssRUFBTCxDQUFRMEksT0FBUixDQUFnQmhKLEVBQTdCLENBQVY7QUFFQSxTQUFLSixLQUFMLEdBQWFDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixLQUFmLENBQXFCK0ksT0FBbEM7QUFDQSxTQUFLNEIsTUFBTCxHQUFjMUssTUFBTSxDQUFDQyxPQUFQLENBQWU4RixZQUFmLEdBQThCLDBCQUE5QixHQUEyRCw4QkFBekU7QUFDQSxTQUFLNEUsbUJBQUwsQ0FBeUIsWUFBTTtBQUM5QixXQUFJLENBQUNoQyxJQUFMO0FBQ0EsS0FGRDtBQUlBM0ksVUFBTSxDQUFDc0ssVUFBUCxHQUFvQixJQUFwQjtBQUVBdEssVUFBTSxDQUFDQyxPQUFQLENBQWUySyxPQUFmLEdBQXlCO0FBQ3hCRixZQUFNLEVBQUUsS0FBS0EsTUFEVztBQUV4QmpLLFFBQUUsRUFBRSxLQUFLQSxFQUFMLENBQVEwSTtBQUZZLEtBQXpCO0FBSUU7Ozs7d0NBRW1CMEIsUSxFQUFVO0FBQzlCLFVBQUlDLGdCQUFnQixHQUFHO0FBQ3RCQyxnQkFBUSxFQUFFLFNBRFk7QUFFdEJDLGtCQUFVLEVBQUUsRUFGVTtBQUd0QkMsZUFBTyxFQUFFLElBSGE7QUFJdEJDLG9CQUFZLEVBQUUsT0FBT3pILGdCQUFQLEtBQTRCLFdBQTVCLHlCQUF5REEsZ0JBQXpELElBQThFLG9CQUp0RTtBQUt0QjBILGFBQUssRUFBRSwyQkFMZTtBQU10QkMsbUJBQVcsRUFBRSxJQU5TO0FBT3RCQyxlQUFPLEVBQUUsRUFQYTtBQVF0QkMsZUFBTyxFQUFFLEVBUmE7QUFTdEJDLGVBQU8sRUFBRSxFQVRhO0FBVXRCQyxnQkFBUSxFQUFFLEVBVlk7QUFXdEJDLGdCQUFRLEVBQUUsRUFYWTtBQVl0QkMsZ0JBQVEsRUFBRSxFQVpZO0FBYXRCQyxpQkFBUyxFQUFFLEVBYlc7QUFjdEJDLGlCQUFTLEVBQUUsRUFkVztBQWV0QkMsaUJBQVMsRUFBRTtBQWZXLE9BQXZCO0FBa0JBZixzQkFBZ0IsQ0FBQ2dCLGFBQWpCLEdBQWlDLEtBQWpDO0FBQ0FoQixzQkFBZ0IsQ0FBQ2lCLFNBQWpCLEdBQTZCLFlBQTdCO0FBQ0FqQixzQkFBZ0IsQ0FBQ2tCLFlBQWpCLEdBQWdDLHFCQUFoQztBQUVBaE0sWUFBTSxDQUFDaUYsVUFBUCxHQUFxQmpGLE1BQU0sQ0FBQ2lGLFVBQVIsR0FBdUJyQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCaUgsZ0JBQWxCLEVBQW9DOUssTUFBTSxDQUFDaUYsVUFBM0MsQ0FBdkIsR0FBZ0Y2RixnQkFBcEc7QUFDQTlLLFlBQU0sQ0FBQ2lGLFVBQVAsQ0FBa0JnSCxRQUFsQixhQUFnQ2pNLE1BQU0sQ0FBQ2lGLFVBQVAsQ0FBa0IrRyxZQUFsRCx3QkFBMkUsS0FBS0UsbUJBQUwsRUFBM0UsaUtBQStPbE0sTUFBTSxDQUFDaUYsVUFBUCxDQUFrQm1HLFdBQWpRLGlCQUFrUnBMLE1BQU0sQ0FBQ2lGLFVBQVAsQ0FBa0I4RyxTQUFwUztBQUVBLFVBQUcvTCxNQUFNLENBQUNpRixVQUFQLENBQWtCNkcsYUFBckIsRUFDQyxLQUFLSyxjQUFMO0FBRUQsVUFBRyxLQUFLcE0sS0FBUixFQUNDLEtBQUtxTSx3QkFBTDtBQUVEdkIsY0FBUTtBQUNSOzs7cUNBRWdCO0FBQ2hCLFVBQUc3SyxNQUFNLENBQUNpRixVQUFWLEVBQXNCO0FBQ3JCakYsY0FBTSxDQUFDaUYsVUFBUCxDQUFrQmdILFFBQWxCLEdBQTZCLEVBQTdCO0FBQ0E7QUFDRDs7OytDQUUwQjtBQUMxQixVQUFJeEYsR0FBRyxHQUFHLEVBQVY7QUFDQUEsU0FBRyxDQUFDNEUsT0FBSixHQUFjLHFDQUFkO0FBQ0E1RSxTQUFHLENBQUM2RSxPQUFKLEdBQWMscUNBQWQ7QUFDQTdFLFNBQUcsQ0FBQzhFLE9BQUosR0FBYyx1QkFBZDtBQUNBOUUsU0FBRyxDQUFDK0UsUUFBSixHQUFlLHFDQUFmO0FBQ0EvRSxTQUFHLENBQUNnRixRQUFKLEdBQWUscUNBQWY7QUFDQWhGLFNBQUcsQ0FBQ2lGLFFBQUosR0FBZSx1QkFBZjtBQUNBakYsU0FBRyxDQUFDa0YsU0FBSixHQUFnQixxQ0FBaEI7QUFDQWxGLFNBQUcsQ0FBQ21GLFNBQUosR0FBZ0IscUNBQWhCO0FBQ0FuRixTQUFHLENBQUNvRixTQUFKLEdBQWdCLHVCQUFoQjtBQUVBN0wsWUFBTSxDQUFDaUYsVUFBUCxHQUFvQnJCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0I3RCxNQUFNLENBQUNpRixVQUF6QixFQUFxQ3dCLEdBQXJDLENBQXBCO0FBQ0E7OztpQ0FFYTtBQUNkLFdBQUs0RixNQUFMLENBQVlDLEtBQVosQ0FBa0JDLFdBQWxCLENBQThCLFVBQTlCLEVBQTBDLFFBQTFDLEVBQW9ELFdBQXBEO0FBQ0EsV0FBS0YsTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxXQUFsQixDQUE4QixVQUE5QixFQUEwQyxPQUExQyxFQUFtRCxXQUFuRDtBQUNBLFdBQUtGLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsV0FBbEIsQ0FBOEIsT0FBOUIsRUFBdUMsTUFBdkMsRUFBK0MsV0FBL0M7QUFDRTs7O21DQUVjO0FBQ2hCLFdBQUtDLEtBQUwsR0FBYXZLLFFBQVEsQ0FBQ3dLLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYjtBQUNFOzs7cUNBRWdCO0FBQ2xCLFdBQUtDLFlBQUw7QUFFQSxVQUFHLEtBQUtGLEtBQVIsRUFDQyxLQUFLQSxLQUFMLENBQVdHLE1BQVg7QUFFRCxVQUFNQyxVQUFVLEdBQUczSyxRQUFRLENBQUM0SyxnQkFBVCxDQUEwQiw0Q0FBMUIsQ0FBbkI7QUFFQUQsZ0JBQVUsQ0FBQ25ILE9BQVgsQ0FBbUIsVUFBQWQsT0FBTyxFQUFJO0FBQzVCQSxlQUFPLENBQUNnSSxNQUFSO0FBQ0QsT0FGRDtBQUdFOzs7cUNBRWdCO0FBQUE7O0FBQ2xCLFdBQUtOLE1BQUwsR0FBY3BLLFFBQVEsQ0FBQzZLLElBQXZCO0FBQ0csV0FBS0MsVUFBTDtBQUNBLFdBQUtDLGNBQUw7QUFDSCxXQUFLWCxNQUFMLENBQVlZLGtCQUFaLENBQStCLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpEO0FBQ0EsV0FBS2IsTUFBTCxDQUFZWSxrQkFBWixDQUErQixXQUEvQixFQUE0QyxLQUFLbEMsUUFBakQ7QUFDQSxXQUFLb0Msc0JBQUw7O0FBRUcsVUFBR25OLE1BQU0sQ0FBQ29OLFVBQVAsQ0FBa0IscUJBQWxCLEVBQXlDQyxPQUE1QyxFQUFxRDtBQUNqRHJOLGNBQU0sQ0FBQ3NOLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDcEMsZ0JBQUksQ0FBQ0gsc0JBQUw7QUFDSCxTQUZEO0FBR047O0FBRUQsV0FBSzFNLEVBQUwsQ0FBUThNLFdBQVI7QUFDRTs7OzZDQUV3QjtBQUFBOztBQUMxQixXQUFLYixZQUFMO0FBQ0EsV0FBS2MsU0FBTCxHQUFpQixLQUFLaEIsS0FBTCxDQUFXQyxhQUFYLENBQXlCLG1CQUF6QixDQUFqQjtBQUVBZ0IsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2hCLFlBQU1DLFlBQVksR0FBRzFOLE1BQU0sQ0FBQzJOLFdBQVAsR0FBcUIsQ0FBMUM7QUFDQSxZQUFNQyxlQUFlLEdBQUcsTUFBSSxDQUFDSixTQUFMLENBQWVLLFlBQXZDO0FBQ00sWUFBTUMsVUFBVSxHQUFJOU4sTUFBTSxDQUFDb04sVUFBUCxDQUFrQixxQkFBbEIsRUFBeUNDLE9BQTFDLEdBQ2pCVSxJQUFJLENBQUNDLEdBQUwsQ0FBVU4sWUFBWSxHQUFDLENBQXZCLENBRGlCLEdBRWpCSyxJQUFJLENBQUNDLEdBQUwsQ0FBVU4sWUFBWSxHQUFDLENBQXZCLENBRkY7QUFHTixZQUFNTyxrQkFBa0IsR0FBSVAsWUFBWSxHQUFHRSxlQUEzQztBQUVBLGNBQUksQ0FBQ3BCLEtBQUwsQ0FBV0YsS0FBWCxDQUFpQjRCLEdBQWpCLGFBQTBCSixVQUExQjtBQUNBLGNBQUksQ0FBQ3RCLEtBQUwsQ0FBV0YsS0FBWCxDQUFpQjZCLE9BQWpCLEdBQTJCLENBQTNCO0FBQ0EsY0FBSSxDQUFDM0IsS0FBTCxDQUFXRixLQUFYLENBQWlCOEIsTUFBakIsR0FBMEIsVUFBMUI7O0FBRUEsY0FBSSxDQUFDQyxRQUFMLENBQWNQLFVBQWQsRUFBMEJHLGtCQUExQjs7QUFDQSxjQUFJLENBQUNLLFFBQUwsQ0FBY1IsVUFBZCxFQUEwQkcsa0JBQTFCOztBQUNBLGNBQUksQ0FBQ00sWUFBTDs7QUFFQSxjQUFJLENBQUMvRCxFQUFMLENBQVFnRSxZQUFSO0FBQ0EsT0FqQlMsRUFpQlAsSUFqQk8sQ0FBVjtBQWtCRTs7O21DQUVjO0FBQUE7O0FBQ2hCLFVBQU1DLFlBQVksR0FBRyxLQUFLakIsU0FBTCxDQUFlWCxnQkFBZixDQUFnQyxHQUFoQyxDQUFyQjtBQUVBNEIsa0JBQVksQ0FBQ2hKLE9BQWIsQ0FBcUIsVUFBQWQsT0FBTyxFQUFJO0FBQy9CQSxlQUFPLENBQUMySSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTb0IsR0FBVCxFQUFjO0FBQ3RDQSxhQUFHLENBQUNDLGNBQUo7QUFDQSxjQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ2xLLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQndKLE9BQWpCLENBQVAsSUFBb0MsS0FBcEQ7QUFDVCxjQUFNOUksR0FBRyxHQUFHbkIsT0FBTyxDQUFDbUssWUFBUixDQUFxQixNQUFyQixLQUFnQyxLQUE1QztBQUNBLGNBQU1DLFFBQVEsR0FBSWpKLEdBQUQsR0FBUUEsR0FBRyxDQUFDSCxXQUFKLEdBQWtCcUosUUFBbEIsQ0FBMkIsV0FBM0IsQ0FBUixHQUFrRCxLQUFuRTtBQUNBLGNBQU1DLFFBQVEsR0FBR3RLLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQjhKLFVBQWhCLElBQThCLElBQS9DO0FBRUEsZUFBS3pPLEVBQUwsQ0FBUTBPLE9BQVIsQ0FBZ0J4SyxPQUFoQjtBQUVBLGNBQUcsQ0FBQ2lLLE9BQUQsSUFBWUcsUUFBZixFQUNDLEtBQUs5SyxHQUFMLENBQVNtTCxPQUFULENBQWlCekssT0FBakI7O0FBRVEsY0FBSW1CLEdBQUcsSUFBSSxDQUFDaUosUUFBWixFQUFzQjtBQUNsQnRCLHNCQUFVLENBQUMsWUFBVztBQUNsQndCLHNCQUFRLEdBQUlqUCxNQUFNLENBQUM4QixRQUFQLENBQWdCdU4sSUFBaEIsR0FBdUJ2SixHQUEzQixHQUFrQzlGLE1BQU0sQ0FBQ3NQLElBQVAsQ0FBWXhKLEdBQVosQ0FBMUM7QUFDSCxhQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUFDVixTQWpCaUMsQ0FpQmhDeUosSUFqQmdDLENBaUIzQixNQWpCMkIsQ0FBbEM7QUFrQkEsT0FuQkQ7QUFvQkU7Ozs2QkFFUXpCLFUsRUFBWUcsa0IsRUFBb0I7QUFDMUMsVUFBSXVCLE1BQU0sR0FBRzFCLFVBQWI7QUFFQTlOLFlBQU0sQ0FBQ3NOLGdCQUFQLENBQ0MsT0FERCxFQUVDLFVBQVNvQixHQUFULEVBQWM7QUFDWixZQUFNZSxJQUFJLEdBQUczQixVQUFVLEdBQUcsR0FBMUI7QUFDQSxZQUFNNEIsVUFBVSxHQUFHLEVBQW5COztBQUVBLFlBQUloQixHQUFHLENBQUNpQixNQUFKLElBQWMsQ0FBbEIsRUFBcUI7QUFDdEIsY0FBTUMsS0FBSyxHQUFHSixNQUFNLEdBQUdDLElBQUksR0FBR0MsVUFBOUI7QUFDQUYsZ0JBQU0sR0FBR0ksS0FBSyxHQUFHM0Isa0JBQVIsR0FBNkJBLGtCQUE3QixHQUFrRDJCLEtBQTNEO0FBRUEsZUFBS3BELEtBQUwsQ0FBV0YsS0FBWCxDQUFpQjRCLEdBQWpCLGFBQTBCc0IsTUFBMUI7QUFDRTs7QUFFRCxZQUFJZCxHQUFHLENBQUNpQixNQUFKLElBQWMsQ0FBQyxDQUFuQixFQUFzQjtBQUN2QixjQUFNQyxNQUFLLEdBQUdKLE1BQU0sR0FBR0MsSUFBSSxHQUFHQyxVQUE5Qjs7QUFDQUYsZ0JBQU0sR0FBR0ksTUFBSyxHQUFHOUIsVUFBUixHQUFxQkEsVUFBckIsR0FBa0M4QixNQUEzQztBQUVBLGVBQUtwRCxLQUFMLENBQVdGLEtBQVgsQ0FBaUI0QixHQUFqQixhQUEwQnNCLE1BQTFCO0FBQ0U7QUFDRixPQWpCRCxDQWlCRUQsSUFqQkYsQ0FpQk8sSUFqQlAsQ0FGRDtBQXFCRTs7OzZCQUVRekIsVSxFQUFZRyxrQixFQUFvQjtBQUN2QyxVQUFJdUIsTUFBTSxHQUFHMUIsVUFBYjtBQUNBLFVBQUkrQixXQUFXLEdBQUcsQ0FBbEI7QUFDQSxVQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFFSDlQLFlBQU0sQ0FBQ3NOLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLFVBQVNvQixHQUFULEVBQWM7QUFDN0NtQixtQkFBVyxHQUFHbkIsR0FBRyxDQUFDcUIsY0FBSixDQUFtQixDQUFuQixFQUFzQkMsT0FBcEM7QUFDTixPQUZEO0FBSUFoUSxZQUFNLENBQUNzTixnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFTb0IsR0FBVCxFQUFjO0FBQzVDLFlBQU1nQixVQUFVLEdBQUcsRUFBbkI7QUFDQUksaUJBQVMsR0FBR3BCLEdBQUcsQ0FBQ3FCLGNBQUosQ0FBbUIsQ0FBbkIsRUFBc0JDLE9BQWxDOztBQUVBLFlBQUlGLFNBQVMsR0FBR0QsV0FBaEIsRUFBNkI7QUFDekIsY0FBTUksSUFBSSxHQUFHbEMsSUFBSSxDQUFDQyxHQUFMLENBQVM2QixXQUFULElBQXdCOUIsSUFBSSxDQUFDQyxHQUFMLENBQVM4QixTQUFULENBQXJDO0FBQ0EsY0FBTUYsS0FBSyxHQUFHSixNQUFNLEdBQUdTLElBQXZCO0FBQ0FULGdCQUFNLEdBQUdJLEtBQUssR0FBRzNCLGtCQUFSLEdBQTZCQSxrQkFBN0IsR0FBa0QyQixLQUEzRDtBQUVBLGVBQUtwRCxLQUFMLENBQVdGLEtBQVgsQ0FBaUI0QixHQUFqQixhQUEwQnNCLE1BQTFCO0FBQ0g7O0FBRUQsWUFBSU0sU0FBUyxHQUFHRCxXQUFoQixFQUE2QjtBQUN6QixjQUFNSSxLQUFJLEdBQUdILFNBQVMsR0FBR0QsV0FBekI7O0FBQ0EsY0FBTUQsT0FBSyxHQUFHSixNQUFNLEdBQUdTLEtBQXZCOztBQUNOVCxnQkFBTSxHQUFHSSxPQUFLLEdBQUc5QixVQUFSLEdBQXFCQSxVQUFyQixHQUFrQzhCLE9BQTNDO0FBRUEsZUFBS3BELEtBQUwsQ0FBV0YsS0FBWCxDQUFpQjRCLEdBQWpCLGFBQTBCc0IsTUFBMUI7QUFDRztBQUNQLE9BbkJvQyxDQW1CbkNELElBbkJtQyxDQW1COUIsSUFuQjhCLENBQXJDO0FBb0JFOzs7MENBRThCO0FBQUEsVUFBWG5JLElBQVcsdUVBQUosRUFBSTtBQUNoQyxVQUFNOEksMEJBQTBCLEdBQUdsUSxNQUFNLENBQUMrSSxzQkFBUCxLQUFrQyxLQUFsQyxHQUEwQyxrRUFBMUMsR0FBK0cscUVBQWxKO0FBQ0EsVUFBTW9ILEdBQUcsR0FBR3JPLFFBQVEsQ0FBQ3VOLElBQXJCO0FBQ0EsVUFBTWUsU0FBUyxHQUFHcFEsTUFBTSxDQUFDQyxPQUFQLENBQWUyQyxLQUFmLENBQXFCUyxTQUFyQixDQUErQmdOLFlBQS9CLE1BQWlELElBQW5FO0FBQ0EsVUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxVQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsVUFBRyxDQUFDLEtBQUt4USxLQUFOLElBQWUsS0FBSzZDLEtBQUwsQ0FBV3JDLFNBQTdCLEVBQXdDO0FBQ3ZDZ1EsaUJBQVMsR0FBR0Msa0JBQWtCLENBQzdCTiwwQkFBMEIsR0FBRyxpQkFBN0IsR0FBa0QsS0FBS3ROLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQlEsU0FBbkIsQ0FBNkJvTixnQkFBN0IsRUFBbEQsR0FDRSxhQURGLEdBQ2tCTCxTQURsQixHQUVFLHFCQUZGLEdBRTBCcFEsTUFBTSxDQUFDK0ksc0JBRmpDLEdBR0UsZUFIRixHQUdvQixLQUFLbkcsS0FBTCxDQUFXQyxPQUFYLENBQW1CUSxTQUFuQixDQUE2QnFOLGNBQTdCLEVBSHBCLEdBSUUsY0FKRixHQUltQlAsR0FMVSxDQUE5Qjs7QUFRQSxZQUFHL0ksSUFBSSxLQUFLLFVBQVosRUFBd0I7QUFDdkJrSixhQUFHLGFBQU0sS0FBSzVGLE1BQVgsc0JBQTZCMEYsU0FBN0Isa0JBQThDRyxTQUE5QyxDQUFIO0FBQ0EsU0FGRCxNQUVPO0FBQ05ELGFBQUcsYUFBTSxLQUFLNUYsTUFBWCxtQkFBMEIwRixTQUExQixrQkFBMkNHLFNBQTNDLENBQUg7QUFDQTtBQUNEOztBQUVELGFBQU9ELEdBQVA7QUFDQTs7OzJCQXdEUTtBQUFBOztBQUNOLFVBQU1LLFVBQVUsR0FBSTNRLE1BQU0sQ0FBQ2lGLFVBQVAsSUFBcUJqRixNQUFNLENBQUNpRixVQUFQLENBQWtCMEwsVUFBeEMsR0FBc0QzUSxNQUFNLENBQUNpRixVQUFQLENBQWtCMEwsVUFBbEIsR0FBK0IsSUFBckYsR0FBNEYsQ0FBL0c7QUFFRmxELGdCQUFVLENBQUMsWUFBSztBQUNmLGNBQUksQ0FBQ21ELGNBQUw7QUFDQSxPQUZTLEVBRVBELFVBRk8sQ0FBVjtBQUdFOzs7d0JBNURrQjtBQUNwQixhQUFPM1EsTUFBTSxDQUFDaUYsVUFBZDtBQUNFOzs7d0JBRWM7QUFDaEIsVUFBTThGLFFBQVEsNENBQ2MsS0FBSzhGLFlBQUwsQ0FBa0IzRixZQURoQyxnSEFJVixLQUFLMkYsWUFBTCxDQUFrQjFGLEtBSlIsMEZBT0MsS0FBSzBGLFlBQUwsQ0FBa0J0RixPQVBuQiwyS0FPK0ssS0FBS3NGLFlBQUwsQ0FBa0J6RixXQVBqTSxnRUFTUSxLQUFLeUYsWUFBTCxDQUFrQnhGLE9BVDFCLDJFQVVRLEtBQUt3RixZQUFMLENBQWtCdkYsT0FWMUIscUVBV0UsS0FBS3VGLFlBQUwsQ0FBa0J4RixPQVhwQixtSEFlaUNyTCxNQUFNLENBQUNpRixVQUFQLENBQWtCNkcsYUFBbEIsR0FBa0MsU0FBbEMsR0FBOEMsRUFmL0UsMEJBZ0JSLEtBQUsrRSxZQUFMLENBQWtCNUUsUUFoQlYsNkZBbUJDLEtBQUs0RSxZQUFMLENBQWtCbkYsUUFuQm5CLG9LQW1CMkssS0FBS21GLFlBQUwsQ0FBa0J6RixXQW5CN0wsZ0VBcUJRLEtBQUt5RixZQUFMLENBQWtCckYsUUFyQjFCLDJFQXNCUSxLQUFLcUYsWUFBTCxDQUFrQnBGLFFBdEIxQixxRUF1QkUsS0FBS29GLFlBQUwsQ0FBa0JyRixRQXZCcEIsbUlBNEJDLEtBQUtxRixZQUFMLENBQWtCaEYsU0E1Qm5CLG9LQTRCNEssS0FBS2dGLFlBQUwsQ0FBa0J6RixXQTVCOUwsZ0VBOEJRLEtBQUt5RixZQUFMLENBQWtCbEYsU0E5QjFCLDJFQStCUSxLQUFLa0YsWUFBTCxDQUFrQmpGLFNBL0IxQixxRUFnQ0UsS0FBS2lGLFlBQUwsQ0FBa0JsRixTQWhDcEIsc0ZBQWQ7QUF3Q0EsYUFBT1osUUFBUDtBQUNFOzs7d0JBRWlCO0FBQ2pCO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xUSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTFDLElBQUksR0FBRyxJQUFJeUksNkNBQUosRUFBYjtBQUNBLElBQU1yUSxFQUFFLEdBQUcsSUFBSXlJLDJDQUFKLEVBQVg7QUFFQXpJLEVBQUUsQ0FBQ3NRLGFBQUg7QUFFQW5PLEtBQUssQ0FBQ3lILFdBQU4sR0FBb0IsSUFBcEI7QUFDQXpILEtBQUssQ0FBQ1MsU0FBTixHQUFrQjtBQUNqQjJOLGtCQUFnQixFQUFFLGFBREQ7QUFFakJDLGtDQUFnQyxFQUFFLDZCQUZqQjtBQUdqQkMsdUNBQXFDLEVBQUUseUJBSHRCO0FBSWpCQyx5QkFBdUIsRUFBRSxLQUpSO0FBS2pCN04sV0FBUyxFQUFFO0FBQ1ZwQixVQUFNLEVBQUU7QUFDUGtQLFVBQUksRUFBRSxPQURDO0FBRVA3TixTQUFHLEVBQUUsTUFGRTtBQUdQZ0csV0FBSyxFQUFFLFFBSEE7QUFJUDhILGNBQVEsRUFBRSxlQUpIO0FBS1BDLHVCQUFpQixFQUFFLHdCQUxaO0FBTVBDLHFCQUFlLEVBQUUsZ0JBTlY7QUFPUEMscUJBQWUsRUFBRTtBQVBWLEtBREU7QUFVVkMsWUFBUSxFQUFFO0FBQ1RDLHFCQUFlLEVBQUUsVUFEUjtBQUVUQyxVQUFJLEVBQUU7QUFGRyxLQVZBO0FBY1ZDLFFBQUksRUFBRTtBQUNMQyxrQkFBWSxFQUFFLGNBRFQ7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQLEtBZEk7QUFrQlZDLFFBQUksRUFBRTtBQUNMQyxRQUFFLEVBQUUsV0FEQztBQUVMWCxjQUFRLEVBQUUsbUJBRkw7QUFHTFksV0FBSyxFQUFFO0FBSEY7QUFsQkksR0FMTTtBQTZCakJDLHFCQUFtQixFQUFFLCtCQUFXO0FBQy9CLFdBQU9sUyxNQUFNLENBQUNtUyxpQkFBUCxHQUEyQixJQUEzQixHQUFrQyxLQUF6QztBQUNBLEdBL0JnQjtBQWdDakJDLGtCQUFnQixFQUFFLDRCQUFXO0FBQzVCLFFBQUl4UCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0IyTixnQkFBaEIsQ0FBaUNxQixPQUFqQyxDQUF5Q3pQLEtBQUssQ0FBQ21QLElBQU4sQ0FBV08sc0JBQVgsQ0FBa0MxUCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCeU8sSUFBMUIsQ0FBK0JWLFFBQWpFLENBQXpDLElBQXVILENBQUMsQ0FBNUgsRUFBK0g7QUFDOUgvUCxzREFBTyxDQUFDOEIsU0FBUixDQUFrQlIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDbVAsUUFBbkQsRUFBNkR6TyxLQUFLLENBQUNtUCxJQUFOLENBQVdPLHNCQUFYLENBQWtDMVAsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnlPLElBQTFCLENBQStCVixRQUFqRSxDQUE3RCxFQUF5SSxDQUF6STtBQUNBLGFBQU96TyxLQUFLLENBQUNtUCxJQUFOLENBQVdPLHNCQUFYLENBQWtDMVAsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnlPLElBQTFCLENBQStCVixRQUFqRSxDQUFQO0FBQ0E7O0FBQ0QsUUFBSXpPLEtBQUssQ0FBQ21QLElBQU4sQ0FBV08sc0JBQVgsQ0FBa0MxUCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCeU8sSUFBMUIsQ0FBK0JWLFFBQWpFLEtBQThFLE9BQWxGLEVBQTJGO0FBQzFGL1Asc0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ21QLFFBQW5ELEVBQTZELEVBQTdELEVBQWlFLENBQUMsQ0FBbEU7QUFDQTs7QUFDRCxRQUFJL1AsZ0RBQU8sQ0FBQ2lSLFNBQVIsQ0FBa0IzUCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNtUCxRQUFuRCxDQUFKLEVBQWtFO0FBQ2pFLGFBQU8vUCxnREFBTyxDQUFDaVIsU0FBUixDQUFrQjNQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ21QLFFBQW5ELENBQVA7QUFDQTs7QUFBQTtBQUNELFdBQU96TyxLQUFLLENBQUNTLFNBQU4sQ0FBZ0IyTixnQkFBaEIsQ0FBaUNxQixPQUFqQyxDQUF5Q3JTLE1BQU0sQ0FBQytJLHNCQUFoRCxJQUEwRSxDQUFDLENBQTNFLEdBQStFL0ksTUFBTSxDQUFDK0ksc0JBQXRGLEdBQStHLEtBQXRIO0FBQ0EsR0E1Q2dCO0FBNkNqQnlKLHNCQUFvQixFQUFFLGdDQUFXO0FBQ2hDLFdBQU94UyxNQUFNLENBQUN5UyxpQkFBZDtBQUNBLEdBL0NnQjtBQWdEakJDLGtCQUFnQixFQUFFLDRCQUFXO0FBQzVCLFdBQU8xUyxNQUFNLENBQUMwUyxnQkFBUCxHQUEwQixJQUExQixHQUFpQyxLQUF4QztBQUNBLEdBbERnQjtBQW1EakJoQyxnQkFBYyxFQUFFLDBCQUFXO0FBQzFCLFFBQUksQ0FBQzFRLE1BQU0sQ0FBQ3lELGdCQUFaLEVBQTZCO0FBQzVCaEQsUUFBRSxDQUFDa1MsY0FBSCxDQUFrQiwrQkFBbEIsRUFBbUQzUyxNQUFNLENBQUM4QixRQUFQLENBQWdCdU4sSUFBbkU7QUFDQTtBQUNBOztBQUNELFdBQU9yUCxNQUFNLENBQUN5RCxnQkFBZDtBQUNBLEdBekRnQjtBQTBEakI0TSxjQUFZLEVBQUUsd0JBQVc7QUFDeEIsUUFBSXRNLEVBQUUsR0FBRyxNQUFUOztBQUVBLFFBQUduQixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JxTixjQUFoQixPQUFxQyxRQUFyQyxJQUNDOU4sS0FBSyxDQUFDUyxTQUFOLENBQWdCcU4sY0FBaEIsT0FBcUMsT0FEdEMsSUFFQzlOLEtBQUssQ0FBQ1MsU0FBTixDQUFnQnFOLGNBQWhCLE9BQXFDLE9BRnRDLElBR0M5TixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JxTixjQUFoQixPQUFxQyxRQUh0QyxJQUlDOU4sS0FBSyxDQUFDUyxTQUFOLENBQWdCcU4sY0FBaEIsT0FBcUMsZUFKekMsRUFJeUQ7QUFDeEQsYUFBTzNNLEVBQUUsR0FBRyxNQUFaO0FBQ0E7O0FBQ0QsUUFBSW5CLEtBQUssQ0FBQ21QLElBQU4sQ0FBV2EsU0FBWCxNQUEwQmhRLEtBQUssQ0FBQ1MsU0FBTixDQUFnQnFOLGNBQWhCLE9BQXFDLE9BQW5FLEVBQTJFO0FBQzFFLGFBQU8zTSxFQUFFLEdBQUcsTUFBWjtBQUNBLEtBRkQsTUFFTSxJQUFJbkIsS0FBSyxDQUFDbVAsSUFBTixDQUFXYSxTQUFYLEVBQUosRUFBMkI7QUFDaEMsYUFBTzdPLEVBQUUsR0FBRyxNQUFaO0FBQ0E7O0FBRUQsUUFBR25CLEtBQUssQ0FBQ1MsU0FBTixDQUFnQnFOLGNBQWhCLE9BQXFDLE9BQXhDLEVBQWdEO0FBQ3RDLGFBQU8zTSxFQUFFLEdBQUcsTUFBWjtBQUNUOztBQUVELFFBQUlBLEVBQUUsS0FBSyxNQUFYLEVBQ0N0RCxFQUFFLENBQUNrUyxjQUFILENBQWtCLHlCQUFsQixFQUE2QzFRLFFBQVEsQ0FBQ0gsUUFBVCxDQUFrQnVOLElBQWxCLEdBQzVDLGdCQUQ0QyxHQUN6QnpNLEtBQUssQ0FBQ1MsU0FBTixDQUFnQnFOLGNBQWhCLEVBRHBCO0FBR0QsV0FBTzNNLEVBQVA7QUFDQSxHQW5GZ0I7QUFvRmpCME0sa0JBQWdCLEVBQUUsNEJBQVU7QUFDM0IsUUFBSW9DLFdBQVcsR0FBR2pRLEtBQUssQ0FBQ1MsU0FBTixDQUFnQnFOLGNBQWhCLEVBQWxCOztBQUNBLFlBQVFtQyxXQUFSO0FBQ0MsV0FBSyxRQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0MsZUFBTyxNQUFQOztBQUNELFdBQUssUUFBTDtBQUNDLGVBQU8sTUFBUDs7QUFDRCxXQUFLLGVBQUw7QUFDQyxlQUFPLE1BQVA7O0FBQ0QsV0FBSyxjQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0EsV0FBSyxZQUFMO0FBQ0EsV0FBSyxjQUFMO0FBQ0EsV0FBSyxhQUFMO0FBQ0EsV0FBSyxJQUFMO0FBQ0EsV0FBSyxPQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0MsZUFBT0EsV0FBUDs7QUFDRCxXQUFLLGVBQUw7QUFDQyxlQUFPLGFBQVA7O0FBQ0QsV0FBSyxlQUFMO0FBQ0MsZUFBTyxNQUFQOztBQUNELFdBQUssT0FBTDtBQUNDLGVBQU8sY0FBUDs7QUFDRDtBQUNDcFMsVUFBRSxDQUFDa1MsY0FBSCxDQUFrQiw0QkFBbEIsRUFBZ0RFLFdBQVcsR0FBRyxLQUFkLEdBQXNCNVEsUUFBUSxDQUFDSCxRQUFULENBQWtCdU4sSUFBeEY7QUFDQXpNLGFBQUssQ0FBQ2tRLFlBQU4sQ0FBbUJDLGtCQUFuQixDQUFzQyxJQUF0QyxFQUE0QyxNQUE1QyxFQUFvRCxJQUFwRCxFQUEwRCxHQUExRDtBQUNBLGVBQU8sT0FBUDtBQTlCRjtBQWdDQTtBQXRIZ0IsQ0FBbEI7QUF5SEFuUSxLQUFLLENBQUNvUSxhQUFOLEdBQXNCO0FBQ3JCQyxPQUFLLEVBQUcsZUFBU0MsTUFBVCxFQUFpQkMsSUFBakIsRUFBdUI7QUFDOUIsUUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQUEsUUFBdUJDLFNBQVMsR0FBRyxFQUFuQztBQUFBLFFBQXVDdkwsUUFBUSxHQUFHLEVBQWxEO0FBQUEsUUFBc0R3TCxVQUFVLEdBQUcsS0FBbkU7QUFDQSxRQUFJdlAsRUFBRSxHQUFHL0QsTUFBTSxDQUFDK0gsV0FBUCxDQUNSLFlBQVc7QUFDVixVQUFJbUwsTUFBTSxFQUFWLEVBQWM7QUFDYmxULGNBQU0sQ0FBQ2dJLGFBQVAsQ0FBcUJqRSxFQUFyQjtBQUNBb1AsWUFBSSxDQUFDRyxVQUFELENBQUo7QUFDQTs7QUFDRCxVQUFJRixhQUFhLEtBQUtDLFNBQXRCLEVBQWlDO0FBQ2hDclQsY0FBTSxDQUFDZ0ksYUFBUCxDQUFxQmpFLEVBQXJCO0FBQ0F1UCxrQkFBVSxHQUFHLElBQWI7QUFDQUgsWUFBSSxDQUFDRyxVQUFELENBQUo7QUFDQTtBQUNELEtBWE8sRUFZUixFQVpRLENBQVQ7QUFjQSxHQWpCb0I7QUFrQnJCQyxlQUFhLEVBQUcsdUJBQVNDLFVBQVQsRUFBcUI7QUFDcEMsUUFBSUMsRUFBRSxHQUFHRCxVQUFVLENBQUM3TixXQUFYLEVBQVQ7QUFDQSxRQUFJcEQsS0FBSyxHQUFHLDJCQUEyQm1SLElBQTNCLENBQWdDRCxFQUFoQyxDQUFaOztBQUVBLFFBQUlBLEVBQUUsQ0FBQ3BCLE9BQUgsQ0FBVyxNQUFYLE1BQXVCLENBQXZCLElBQTRCb0IsRUFBRSxDQUFDcEIsT0FBSCxDQUFXLFNBQVgsTUFBMEIsQ0FBMUQsRUFBNkQ7QUFDNUQsYUFBTyxLQUFQO0FBQ0E7O0FBQ0QsUUFBSTlQLEtBQUssSUFBSW9SLFFBQVEsQ0FBQ3BSLEtBQUssQ0FBQyxDQUFELENBQU4sRUFBVyxFQUFYLENBQVIsSUFBMEIsRUFBdkMsRUFBMkM7QUFDMUMsYUFBTyxJQUFQO0FBQ0E7O0FBQ0QsV0FBTyxLQUFQO0FBQ0EsR0E3Qm9CO0FBOEJyQnFSLG1CQUFpQixFQUFHLDJCQUFTL0ksUUFBVCxFQUFtQjtBQUN0QyxRQUFJZ0osVUFBSjs7QUFFQSxRQUFJN1QsTUFBTSxDQUFDOFQsdUJBQVgsRUFBb0M7QUFDbkM5VCxZQUFNLENBQUM4VCx1QkFBUCxDQUNDOVQsTUFBTSxDQUFDK1QsU0FEUixFQUNtQixDQURuQixFQUVDLFlBQVc7QUFDVkYsa0JBQVUsR0FBRyxLQUFiO0FBQ0EsT0FKRixFQUtDLFVBQVNHLENBQVQsRUFBWTtBQUNYSCxrQkFBVSxHQUFHLElBQWI7QUFDQSxPQVBGO0FBU0EsS0FWRCxNQVVPLElBQUk3VCxNQUFNLENBQUNpVSxTQUFQLElBQW9CLFVBQVVDLElBQVYsQ0FBZWxVLE1BQU0sQ0FBQ21VLFNBQVAsQ0FBaUJDLFNBQWhDLENBQXhCLEVBQW9FO0FBQzFFLFVBQUlDLEVBQUo7O0FBQ0EsVUFBSTtBQUNIQSxVQUFFLEdBQUdyVSxNQUFNLENBQUNpVSxTQUFQLENBQWlCM0UsSUFBakIsQ0FBc0IsTUFBdEIsQ0FBTDtBQUNBLE9BRkQsQ0FFRSxPQUFNMEUsQ0FBTixFQUFTO0FBQ1ZILGtCQUFVLEdBQUcsSUFBYjtBQUNBOztBQUVELFVBQUksT0FBT0EsVUFBUCxLQUFzQixXQUExQixFQUF1QztBQUN0Q2pSLGFBQUssQ0FBQ29RLGFBQU4sQ0FBb0JDLEtBQXBCLENBQ0MsU0FBU0MsTUFBVCxHQUFrQjtBQUNqQixpQkFBT21CLEVBQUUsQ0FBQ0MsVUFBSCxLQUFrQixNQUFsQixHQUEyQixJQUEzQixHQUFrQyxLQUF6QztBQUNBLFNBSEYsRUFJQyxTQUFTbkIsSUFBVCxDQUFjRyxVQUFkLEVBQTBCO0FBQ3pCLGNBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNoQk8sc0JBQVUsR0FBR1EsRUFBRSxDQUFDRSxNQUFILEdBQVksS0FBWixHQUFvQixJQUFqQztBQUNBO0FBQ0QsU0FSRjtBQVVBO0FBQ0QsS0FwQk0sTUFvQkEsSUFBSTNSLEtBQUssQ0FBQ29RLGFBQU4sQ0FBb0JPLGFBQXBCLENBQWtDdlQsTUFBTSxDQUFDbVUsU0FBUCxDQUFpQkMsU0FBbkQsQ0FBSixFQUFtRTtBQUN6RVAsZ0JBQVUsR0FBRyxLQUFiOztBQUNBLFVBQUk7QUFDSCxZQUFJLENBQUM3VCxNQUFNLENBQUNpVSxTQUFaLEVBQXVCO0FBQ3RCSixvQkFBVSxHQUFHLElBQWI7QUFDQTtBQUNELE9BSkQsQ0FJRSxPQUFPRyxDQUFQLEVBQVU7QUFDWEgsa0JBQVUsR0FBRyxJQUFiO0FBQ0E7QUFDRCxLQVRNLE1BU0EsSUFBSTdULE1BQU0sQ0FBQ3dVLFlBQVAsSUFBdUIsU0FBU04sSUFBVCxDQUFjbFUsTUFBTSxDQUFDbVUsU0FBUCxDQUFpQkMsU0FBL0IsQ0FBM0IsRUFBc0U7QUFDNUUsVUFBSTtBQUNIcFUsY0FBTSxDQUFDd1UsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsRUFBb0MsQ0FBcEM7QUFDQSxPQUZELENBRUUsT0FBTVQsQ0FBTixFQUFTO0FBQ1ZILGtCQUFVLEdBQUcsSUFBYjtBQUNBOztBQUVELFVBQUksT0FBT0EsVUFBUCxLQUFzQixXQUExQixFQUF1QztBQUN0Q0Esa0JBQVUsR0FBRyxLQUFiO0FBQ0E3VCxjQUFNLENBQUN3VSxZQUFQLENBQW9CRSxVQUFwQixDQUErQixNQUEvQjtBQUNBO0FBQ0Q7O0FBRUQ5UixTQUFLLENBQUNvUSxhQUFOLENBQW9CQyxLQUFwQixDQUNDLFNBQVNDLE1BQVQsR0FBa0I7QUFDakIsYUFBTyxPQUFPVyxVQUFQLEtBQXNCLFdBQXRCLEdBQW9DLElBQXBDLEdBQTJDLEtBQWxEO0FBQ0EsS0FIRixFQUlDLFNBQVNWLElBQVQsQ0FBY0csVUFBZCxFQUEwQjtBQUN6QnpJLGNBQVEsQ0FBQ2dKLFVBQUQsQ0FBUjtBQUNBLEtBTkY7QUFRQTtBQTdGb0IsQ0FBdEI7QUFnR0FqUixLQUFLLENBQUNnUCxJQUFOLEdBQWE7QUFDWitDLEtBQUcsRUFBRSxlQUFXO0FBQ2YsV0FBTzNVLE1BQU0sQ0FBQ3dVLFlBQVAsQ0FBb0JJLE9BQXBCLENBQTRCaFMsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnNPLElBQTFCLENBQStCQyxZQUEzRCxJQUEyRSxJQUEzRSxHQUFrRixLQUF6RjtBQUNBLEdBSFc7QUFJWmdELFFBQU0sRUFBRSxrQkFBVztBQUNsQixRQUFJQyxTQUFTLEdBQUdsUyxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCc08sSUFBMUIsQ0FBK0JFLFVBQS9DO0FBQ0EsUUFBSWlELGNBQWMsR0FBR25TLEtBQUssQ0FBQ21QLElBQU4sQ0FBV08sc0JBQVgsQ0FBa0N3QyxTQUFsQyxDQUFyQjs7QUFDQSxRQUFJQyxjQUFjLElBQUksT0FBbEIsSUFBNkIvVSxNQUFNLENBQUMrSSxzQkFBUCxJQUFpQyxLQUFsRSxFQUF5RTtBQUN4RXpILHNEQUFPLENBQUM4QixTQUFSLENBQWtCMFIsU0FBbEIsRUFBNkJDLGNBQTdCLEVBQTZDLENBQTdDO0FBQ0EsYUFBTyxLQUFQO0FBQ0E7O0FBQ0QsUUFBSUEsY0FBYyxJQUFJLE1BQWxCLElBQTRCL1UsTUFBTSxDQUFDK0ksc0JBQVAsSUFBaUMsS0FBakUsRUFBd0U7QUFDdkV6SCxzREFBTyxDQUFDOEIsU0FBUixDQUFrQjBSLFNBQWxCLEVBQTZCLEVBQTdCLEVBQWlDLENBQUMsQ0FBbEM7QUFDQSxhQUFPLElBQVA7QUFDQTs7QUFDRCxRQUFJeFQsZ0RBQU8sQ0FBQ2lSLFNBQVIsQ0FBa0IzUCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCc08sSUFBMUIsQ0FBK0JFLFVBQWpELEtBQWdFLE9BQXBFLEVBQTZFO0FBQzVFLGFBQU8sS0FBUDtBQUNBOztBQUNELFdBQU8sSUFBUDtBQUNBLEdBbkJXO0FBb0Jaa0Qsa0JBQWdCLEVBQUUsNEJBQVc7QUFDNUIsUUFBSXBTLEtBQUssQ0FBQ2dQLElBQU4sQ0FBVytDLEdBQVgsTUFBb0IvUixLQUFLLENBQUNnUCxJQUFOLENBQVdpRCxNQUFYLEVBQXhCLEVBQTZDO0FBQzVDLFVBQUlJLFlBQVksR0FBR2pWLE1BQU0sQ0FBQ3dVLFlBQVAsQ0FBb0JJLE9BQXBCLENBQTRCaFMsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnNPLElBQTFCLENBQStCQyxZQUEzRCxFQUF5RXhQLEtBQXpFLENBQStFLEdBQS9FLENBQW5COztBQUNBLFdBQUssSUFBSTZTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFlBQVksQ0FBQ2xPLE1BQWpDLEVBQXlDbU8sQ0FBQyxFQUExQyxFQUE4QztBQUM3QzNNLFVBQUUsQ0FBQ2xILElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCNFQsWUFBWSxDQUFDQyxDQUFELENBQWxDLEVBQXVDRCxZQUFZLENBQUNDLENBQUQsQ0FBbkQsQ0FBUjtBQUNBO0FBQ0Q7QUFDRDtBQTNCVyxDQUFiO0FBOEJBdFMsS0FBSyxDQUFDNk8sUUFBTixHQUFpQjtBQUNoQjBELGdCQUFjLEVBQUUsd0JBQVNDLE9BQVQsRUFBa0JDLFNBQWxCLEVBQTZCO0FBQUU7QUFDOUMsUUFBTXZVLGNBQWMsR0FBSSxPQUFPZCxNQUFNLENBQUN5RCxnQkFBZCxLQUFtQyxXQUFuQyxJQUFrRHpELE1BQU0sQ0FBQ3lELGdCQUFQLEtBQTRCLE9BQS9FLEdBQTBGLElBQTFGLEdBQWlHLEtBQXhIO0FBRU0sUUFBSTNDLGNBQUosRUFDTEMsSUFBSSxDQUFDTSxJQUFMLENBQVUsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLEVBQXlCK1QsT0FBekIsRUFBa0NDLFNBQWxDLEdBQThDLElBQTlDLENBQVYsRUFESyxLQUdMeFUsU0FBUyxDQUFDUSxJQUFWLENBQWU7QUFBQyxlQUFTLGVBQVY7QUFBMkIsMkJBQXFCLE9BQWhEO0FBQXlELHNCQUFnQitULE9BQXpFO0FBQWtGLHdCQUFpQkM7QUFBbkcsS0FBZjtBQUNELEdBUmU7QUFVaEJDLGVBQWEsRUFBRSx5QkFBVztBQUFFO0FBQzNCLFFBQUd0VixNQUFNLENBQUNpRCxVQUFQLElBQXFCakQsTUFBTSxDQUFDaUQsVUFBUCxDQUFrQkMsZUFBMUMsRUFBMkQ7QUFDMUQsYUFBT2xELE1BQU0sQ0FBQ21ELG1CQUFQLEdBQTZCbkQsTUFBTSxDQUFDaUQsVUFBUCxDQUFrQkMsZUFBbEIsR0FBb0MsS0FBcEMsR0FBNENsRCxNQUFNLENBQUNtRCxtQkFBaEYsR0FBc0duRCxNQUFNLENBQUNpRCxVQUFQLENBQWtCQyxlQUEvSDtBQUNBLEtBRkQsTUFFTyxJQUFJbEQsTUFBTSxDQUFDa0QsZUFBWCxFQUE0QjtBQUNsQyxhQUFPbEQsTUFBTSxDQUFDbUQsbUJBQVAsR0FBNkJuRCxNQUFNLENBQUNrRCxlQUFQLEdBQXlCLEtBQXpCLEdBQWlDbEQsTUFBTSxDQUFDbUQsbUJBQXJFLEdBQTJGbkQsTUFBTSxDQUFDa0QsZUFBekc7QUFDQTs7QUFDRCxXQUFPLEdBQVA7QUFDQSxHQWpCZTtBQWtCaEJxUyxtQkFBaUIsRUFBRSwyQkFBUzlELFFBQVQsRUFBbUI7QUFDckMrRCxhQUFTLEdBQUcsR0FBWjtBQUNBQyxlQUFXLEdBQUcsR0FBZDtBQUNBLFFBQUcsQ0FBQ2hFLFFBQUosRUFBYztBQUNkZ0UsZUFBVyxHQUFHLEtBQUtoRSxRQUFRLENBQUNpRSxLQUE1Qjs7QUFDQSxRQUFJRCxXQUFXLENBQUMxTyxNQUFaLElBQXNCLENBQTFCLEVBQTZCO0FBQzVCME8saUJBQVcsR0FBRyxNQUFNQSxXQUFwQjtBQUNBOztBQUNERCxhQUFTLEdBQUcvRCxRQUFRLENBQUN2TyxlQUFULEdBQTBCLEtBQTFCLEdBQWlDdU8sUUFBUSxDQUFDa0UsUUFBdEQ7QUFDQSxHQTNCZTtBQTRCaEJDLDZCQUEyQixFQUFFLHFDQUFTQyxNQUFULEVBQWlCO0FBQzdDLFFBQUlDLFFBQVEsR0FBR2xULEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJtTyxRQUExQixDQUFtQ0MsZUFBbEQ7O0FBQ0EsUUFBR3BRLGdEQUFPLENBQUNpUixTQUFSLENBQWtCM1AsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDcUgsS0FBbkQsQ0FBSCxFQUE4RDtBQUM3RHVNLGNBQVEsR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWExRCxPQUFiLENBQXFCLFVBQXJCLEtBQW9DLENBQUMsQ0FBckMsR0FBeUMsMEJBQXpDLEdBQXNFLDBCQUFqRjtBQUNBL1Esc0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ3FILEtBQW5ELEVBQTBELEVBQTFELEVBQThELENBQUMsQ0FBL0Q7QUFDQTs7QUFDRCxXQUFPdU0sUUFBUDtBQUNBLEdBbkNlO0FBb0NoQkUscUJBQW1CLEVBQUUsNkJBQVNDLE9BQVQsRUFBa0I7QUFDdEMsUUFBSSxDQUFDclQsS0FBSyxDQUFDUyxTQUFOLENBQWdCcVAsZ0JBQWhCLEVBQUwsRUFBeUM7QUFDeEMxUyxZQUFNLENBQUNpRCxVQUFQLENBQWtCOFMsS0FBbEIsR0FBMEIvVixNQUFNLENBQUNrVyxTQUFQLEdBQW1CQSxTQUFTLENBQUN2USxXQUFWLEVBQW5CLEdBQTZDLEdBQXZFO0FBQ0EzRixZQUFNLENBQUNpRCxVQUFQLENBQWtCQyxlQUFsQixHQUFvQ2xELE1BQU0sQ0FBQ2tELGVBQVAsR0FBeUJsRCxNQUFNLENBQUNrRCxlQUFoQyxHQUFrRCxFQUF0RjtBQUNBTixXQUFLLENBQUM2TyxRQUFOLENBQWU4RCxpQkFBZixDQUFpQ3ZWLE1BQU0sQ0FBQ2lELFVBQXhDO0FBQ0EsVUFBSWdULE9BQU8sSUFBSSxLQUFmLEVBQXNCeFYsRUFBRSxDQUFDNkksU0FBSCxDQUFhMUcsS0FBSyxDQUFDNk8sUUFBTixDQUFlbUUsMkJBQWYsQ0FBMkM1VixNQUFNLENBQUNpRCxVQUFsRCxDQUFiLEVBQTRFTCxLQUFLLENBQUM2TyxRQUFOLENBQWU2RCxhQUFmLEVBQTVFO0FBQ3RCNUMsc0JBQWdCLEdBQUcsSUFBbkI7QUFDQTtBQUNELEdBNUNlO0FBNkNoQnlELGVBQWEsRUFBRSx1QkFBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkJDLGdCQUE3QixFQUE4QztBQUM1RDlOLG9CQUFnQixDQUFDK04sZ0JBQWpCLEdBQW9DSCxPQUFwQztBQUNNNU4sb0JBQWdCLENBQUNnTyxrQkFBakIsR0FBc0NILFNBQXRDO0FBQ0E3TixvQkFBZ0IsQ0FBQzhOLGdCQUFqQixHQUFvQ0EsZ0JBQXBDO0FBQ047QUFqRGUsQ0FBakI7QUFxREExVCxLQUFLLENBQUM2VCxNQUFOLEdBQWU7QUFDZEMsZUFBYSxFQUFFLHVCQUFTQyxNQUFULEVBQWlCO0FBQy9CL1QsU0FBSyxDQUFDbVAsSUFBTixDQUFXNkUsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUNtUCxJQUFOLENBQVc4RSxXQUFYLEVBQTlELEdBQXVGLHlDQUF2RixHQUFpSUYsTUFBakksR0FBd0ksc0JBQWhLO0FBQ0EvVCxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUFqQixHQUEwQyx5Q0FBMUMsR0FBb0ZGLE1BQXBGLEdBQTJGLGdDQUFuSTtBQUNBLEdBSmE7QUFLZEssb0NBQWtDLEVBQUUsNENBQVNMLE1BQVQsRUFBaUI7QUFDcEQvVCxTQUFLLENBQUNtUCxJQUFOLENBQVc2RSxZQUFYLENBQXdCLGdFQUE4RGhVLEtBQUssQ0FBQ21QLElBQU4sQ0FBVzhFLFdBQVgsRUFBOUQsR0FBdUYsdURBQXZGLEdBQStJRixNQUEvSSxHQUFzSixzQkFBOUs7QUFDQS9ULFNBQUssQ0FBQ2tVLGNBQU4sQ0FBcUJDLGtCQUFyQixDQUF3QyxtQkFBaUJuVSxLQUFLLENBQUNtUCxJQUFOLENBQVc4RSxXQUFYLEVBQWpCLEdBQTBDLHVEQUExQyxHQUFrR0YsTUFBbEcsR0FBeUcsd0NBQWpKO0FBQ0EsR0FSYTtBQVNkTSxxQkFBbUIsRUFBRSw2QkFBU04sTUFBVCxFQUFpQjtBQUNyQy9ULFNBQUssQ0FBQ21QLElBQU4sQ0FBVzZFLFlBQVgsQ0FBd0IsZ0VBQThEaFUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUE5RCxHQUF1RixnREFBdkYsR0FBd0lGLE1BQXhJLEdBQStJLHNCQUF2SztBQUNBL1QsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQ21QLElBQU4sQ0FBVzhFLFdBQVgsRUFBakIsR0FBMEMsZ0RBQTFDLEdBQTJGRixNQUEzRixHQUFrRyxpQ0FBMUk7QUFDQSxHQVphO0FBYWRPLGFBQVcsRUFBRSx1QkFBc0I7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFDbENuWCxVQUFNLENBQUNvWCxlQUFQLEdBQXlCRCxNQUF6QjtBQUVBdlUsU0FBSyxDQUFDbVAsSUFBTixDQUFXNkUsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUNtUCxJQUFOLENBQVc4RSxXQUFYLEVBQTlELEdBQXVGLGdGQUEvRztBQUNBalUsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQ21QLElBQU4sQ0FBVzhFLFdBQVgsRUFBakIsR0FBMEMsOEVBQWxGO0FBQ0EsR0FsQmE7QUFtQmRRLFlBQVUsRUFBRSxzQkFBVztBQUN0QixRQUFNQyxHQUFHLHdFQUFpRTFVLEtBQUssQ0FBQ21QLElBQU4sQ0FBVzhFLFdBQVgsRUFBakUsd0RBQVQ7QUFDQSxRQUFNVSxRQUFRLDJCQUFvQjNVLEtBQUssQ0FBQ21QLElBQU4sQ0FBVzhFLFdBQVgsRUFBcEIsMkRBQWQ7QUFFQWpVLFNBQUssQ0FBQ21QLElBQU4sQ0FBVzZFLFlBQVgsQ0FBd0JVLEdBQXhCO0FBQ0ExVSxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0NRLFFBQXhDO0FBQ0EsR0F6QmE7QUEwQmRDLHNCQUFvQixFQUFFLDhCQUFTYixNQUFULEVBQWlCO0FBQ3RDL1QsU0FBSyxDQUFDbVAsSUFBTixDQUFXNkUsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUNtUCxJQUFOLENBQVc4RSxXQUFYLEVBQTlELEdBQXVGLDJDQUF2RixHQUFtSUYsTUFBbkksR0FBMEksc0JBQWxLO0FBQ0EvVCxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUFqQixHQUEwQywyQ0FBMUMsR0FBc0ZGLE1BQXRGLEdBQTZGLDRCQUFySTtBQUNBLEdBN0JhO0FBOEJkYyw2QkFBMkIsRUFBRSxxQ0FBU2QsTUFBVCxFQUFpQjtBQUM3Qy9ULFNBQUssQ0FBQ2tVLGNBQU4sQ0FBcUJDLGtCQUFyQixDQUF3QyxtQkFBaUJuVSxLQUFLLENBQUNtUCxJQUFOLENBQVc4RSxXQUFYLEVBQWpCLEdBQTBDLG1EQUExQyxHQUE4RkYsTUFBOUYsR0FBcUcsOEJBQTdJO0FBQ0E7QUFoQ2EsQ0FBZjtBQW9DQS9ULEtBQUssQ0FBQzhVLFFBQU4sR0FBaUI7QUFDaEJDLGlCQUFlLEVBQUUseUJBQVNoQixNQUFULEVBQWlCO0FBQ2pDL1QsU0FBSyxDQUFDbVAsSUFBTixDQUFXNkUsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUNtUCxJQUFOLENBQVc4RSxXQUFYLEVBQTlELEdBQXVGLDJDQUF2RixHQUFtSUYsTUFBbkksR0FBMEksc0JBQWxLO0FBQ0EvVCxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUFqQixHQUEwQywyQ0FBMUMsR0FBc0ZGLE1BQXRGLEdBQTZGLGdDQUFySTtBQUNBclYsb0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ3FCLEdBQW5ELEVBQXdELEVBQXhELEVBQTRELENBQUMsQ0FBN0Q7QUFDQTlDLE1BQUUsQ0FBQzZJLFNBQUgsQ0FBYSxtQkFBYixFQUFrQzFHLEtBQUssQ0FBQzZPLFFBQU4sQ0FBZTZELGFBQWYsRUFBbEM7QUFDQWhVLG9EQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxSCxLQUFuRCxFQUEwRCxJQUExRCxFQUFnRSxDQUFoRTtBQUNBO0FBUGUsQ0FBakI7QUFVQTNHLEtBQUssQ0FBQ2dWLE1BQU4sR0FBZTtBQUNkRCxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCL1UsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLHlGQUF4QztBQUNBelYsb0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0JSLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ3FCLEdBQW5ELEVBQXdELEVBQXhELEVBQTRELENBQUMsQ0FBN0Q7QUFDQTlDLE1BQUUsQ0FBQzZJLFNBQUgsQ0FBYSxtQkFBYixFQUFrQzFHLEtBQUssQ0FBQzZPLFFBQU4sQ0FBZTZELGFBQWYsRUFBbEM7QUFDQWhVLG9EQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxSCxLQUFuRCxFQUEwRCxJQUExRCxFQUFnRSxDQUFoRTtBQUNBO0FBTmEsQ0FBZjtBQVNBM0csS0FBSyxDQUFDa0csT0FBTixHQUFnQjtBQUNmK08sc0JBQW9CLEVBQUUsOEJBQVMvUixHQUFULEVBQWM7QUFDbkNyRixNQUFFLENBQUM2SSxTQUFILENBQWEsVUFBYixFQUF5QjFHLEtBQUssQ0FBQzZPLFFBQU4sQ0FBZTZELGFBQWYsRUFBekI7QUFDQWhVLG9EQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxQixHQUFuRCxFQUF3RCxFQUF4RCxFQUE0RCxDQUFDLENBQTdEO0FBQ0FrSyxjQUFVLENBQUMsWUFBVztBQUFDek4sWUFBTSxDQUFDOEIsUUFBUCxDQUFnQnVOLElBQWhCLEdBQXVCdkosR0FBdkI7QUFBNEIsS0FBekMsRUFBMkMsSUFBM0MsQ0FBVjtBQUNBLEdBTGM7QUFNZmdTLE1BQUksRUFBRSxnQkFBNkI7QUFBQSxRQUFwQnpOLFdBQW9CLHVFQUFOLElBQU07QUFDbEN6SCxTQUFLLENBQUN5SCxXQUFOLEdBQW9CQSxXQUFwQjs7QUFFQSxRQUFJO0FBQ0gsVUFBSUMsNkRBQUo7QUFDQXRLLFlBQU0sQ0FBQ3NJLFVBQVAsR0FBb0IsSUFBcEI7QUFDQSxLQUhELENBSUEsT0FBTTBMLENBQU4sRUFBUztBQUNSN1MsYUFBTyxDQUFDNFcsS0FBUixDQUFjLHlCQUFkO0FBQ0FuVixXQUFLLENBQUNvVixrQkFBTjtBQUNBO0FBQ0Q7QUFqQmMsQ0FBaEI7O0FBb0JBcFYsS0FBSyxDQUFDb1Ysa0JBQU4sR0FBMkIsWUFBVztBQUNyQ2hZLFFBQU0sQ0FBQ3NJLFVBQVAsR0FBb0IsS0FBcEI7QUFDQSxNQUFJdUIsS0FBSyxHQUFHLElBQUlvTyxXQUFKLENBQWdCLGFBQWhCLENBQVo7QUFDQWhXLFVBQVEsQ0FBQ2lXLGFBQVQsQ0FBdUJyTyxLQUF2QjtBQUNBLENBSkQ7O0FBTUFqSCxLQUFLLENBQUN1VixZQUFOLEdBQXFCLFlBQVc7QUFDL0IsTUFBSXRRLEtBQUssR0FBRyxDQUFaO0FBRUEsTUFBTXVRLFNBQVMsR0FBR3JRLFdBQVcsQ0FBQyxZQUFNO0FBQ25DLFFBQUlzUSxNQUFNLEdBQUdwVyxRQUFRLENBQUN3SyxhQUFULENBQXVCLDRFQUF2QixDQUFiO0FBRUEsUUFBRzVFLEtBQUssS0FBSyxFQUFiLEVBQ0NqRixLQUFLLENBQUNvVixrQkFBTjtBQUVELFFBQU9oWSxNQUFNLENBQUNzSSxVQUFQLElBQXFCdEksTUFBTSxDQUFDc0ksVUFBUCxLQUFzQixLQUE1QyxJQUFzRCtQLE1BQXhELElBQW1FeFEsS0FBSyxHQUFHLEVBQS9FLEVBQ0NHLGFBQWEsQ0FBQ29RLFNBQUQsQ0FBYjtBQUVEdlEsU0FBSztBQUNMLEdBVjRCLEVBVTFCLEdBVjBCLENBQTdCO0FBV0EsQ0FkRDs7QUFnQkFqRixLQUFLLENBQUMwVixlQUFOLEdBQXdCO0FBQ3ZCWCxpQkFBZSxFQUFFLDJCQUFxQztBQUFBLFFBQTVCaEIsTUFBNEIsdUVBQW5CLElBQW1CO0FBQUEsUUFBYjRCLElBQWEsdUVBQU4sSUFBTTtBQUNyRDNWLFNBQUssQ0FBQ3lILFdBQU4sR0FBb0JrTyxJQUFwQjs7QUFFQSxRQUFHLENBQUMzVixLQUFLLENBQUM0VixhQUFQLElBQXlCLENBQUM3QixNQUFELElBQVcsQ0FBQy9ULEtBQUssQ0FBQ3lILFdBQTlDLEVBQTZEO0FBQzVEekgsV0FBSyxDQUFDb1Ysa0JBQU47QUFDQSxLQUZELE1BRU87QUFDTnBWLFdBQUssQ0FBQ21QLElBQU4sQ0FBVzZFLFlBQVgsQ0FBd0IsZ0VBQThEaFUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUE5RCxHQUF1RixtREFBdkYsR0FBMklGLE1BQTNJLEdBQWtKLHNCQUExSztBQUNBL1QsV0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQ0MsbUJBQWlCblUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUFqQixHQUEwQyxtREFBMUMsR0FBOEZGLE1BQTlGLEdBQXFHLG9DQUR0RyxFQUVDLFVBQUE3VyxJQUFJLEVBQUk7QUFDUCxZQUFHQSxJQUFJLENBQUMyWSxNQUFMLEtBQWdCLEdBQW5CLEVBQXdCO0FBQ3ZCN1YsZUFBSyxDQUFDb1Ysa0JBQU47QUFDQSxTQUZELE1BR0s7QUFDSmhZLGdCQUFNLENBQUNzSSxVQUFQLEdBQW9CLElBQXBCO0FBQ0E7QUFDRCxPQVRGOztBQVlBLFVBQUcxRixLQUFLLENBQUN5SCxXQUFOLEtBQXNCLFVBQXRCLElBQW9DekgsS0FBSyxDQUFDeUgsV0FBTixLQUFzQixXQUE3RCxFQUEyRTtBQUMxRTVKLFVBQUUsQ0FBQzZJLFNBQUgsQ0FBYSxtQkFBYixFQUFrQzFHLEtBQUssQ0FBQzZPLFFBQU4sQ0FBZTZELGFBQWYsRUFBbEM7QUFDQWhVLHdEQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxSCxLQUFuRCxFQUEwRCxJQUExRCxFQUFnRSxDQUFoRTtBQUNBLE9BSEQsTUFHTztBQUNOOUksVUFBRSxDQUFDNkksU0FBSCxDQUFhLFVBQWIsRUFBeUIxRyxLQUFLLENBQUM2TyxRQUFOLENBQWU2RCxhQUFmLEVBQXpCO0FBQ0E7QUFDRDtBQUVEO0FBNUJzQixDQUF4QjtBQStCQTFTLEtBQUssQ0FBQzhWLFVBQU4sR0FBbUI7QUFDbEJDLG1CQUFpQixFQUFFLDJCQUFTaEMsTUFBVCxFQUFpQjtBQUNuQy9ULFNBQUssQ0FBQ21QLElBQU4sQ0FBVzZFLFlBQVgsQ0FBd0IsZ0VBQThEaFUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUE5RCxHQUF1Riw4Q0FBdkYsR0FBc0lGLE1BQXRJLEdBQTZJLHNCQUFySztBQUNBL1QsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQ21QLElBQU4sQ0FBVzhFLFdBQVgsRUFBakIsR0FBMEMsOENBQTFDLEdBQXlGRixNQUF6RixHQUFnRywrQkFBeEk7QUFDQTtBQUppQixDQUFuQjtBQU9BL1QsS0FBSyxDQUFDZ1csT0FBTixHQUFnQjtBQUNmQyxnQkFBYyxFQUFFLDBCQUFzQjtBQUFBLFFBQWIxQixNQUFhLHVFQUFKLEVBQUk7QUFFckNBLFVBQU0sQ0FBQ25NLFVBQVAsMkJBQXFDcEksS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUFyQztBQUVBN1csVUFBTSxDQUFDOFksVUFBUCxHQUFvQjNCLE1BQXBCO0FBRUF2VSxTQUFLLENBQUNtUCxJQUFOLENBQVc2RSxZQUFYLENBQXdCLGdFQUE4RGhVLEtBQUssQ0FBQ21QLElBQU4sQ0FBVzhFLFdBQVgsRUFBOUQsR0FBdUYsZ0VBQS9HO0FBQ0FqVSxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUFqQixHQUEwQyxxRUFBbEY7QUFDQTtBQVRjLENBQWhCO0FBWUFqVSxLQUFLLENBQUNtVyxTQUFOLEdBQWtCO0FBQ2pCQyxZQUFVLEVBQUUsc0JBQVc7QUFDdEJwVyxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUFqQixHQUEwQyxxREFBbEY7QUFDQSxHQUhnQjtBQUlqQm9DLGtCQUFnQixFQUFFLDRCQUFXO0FBQ3RCclcsU0FBSyxDQUFDa1UsY0FBTixDQUFxQkMsa0JBQXJCLENBQXdDLG1CQUFpQm5VLEtBQUssQ0FBQ21QLElBQU4sQ0FBVzhFLFdBQVgsRUFBakIsR0FBMEMsd0RBQWxGO0FBQ0g7QUFOYSxDQUFsQjtBQVNBalUsS0FBSyxDQUFDc1csUUFBTixHQUFpQjtBQUNoQkMsc0JBQW9CLEVBQUUsOEJBQVN4QyxNQUFULEVBQWlCO0FBQ3RDL1QsU0FBSyxDQUFDbVAsSUFBTixDQUFXNkUsWUFBWCxDQUF3QixnRUFBOERoVSxLQUFLLENBQUNtUCxJQUFOLENBQVc4RSxXQUFYLEVBQTlELEdBQXVGLG1EQUF2RixHQUEySUYsTUFBM0ksR0FBa0osc0JBQTFLO0FBQ0EvVCxTQUFLLENBQUNrVSxjQUFOLENBQXFCQyxrQkFBckIsQ0FBd0MsbUJBQWlCblUsS0FBSyxDQUFDbVAsSUFBTixDQUFXOEUsV0FBWCxFQUFqQixHQUEwQyxtREFBMUMsR0FBOEZGLE1BQTlGLEdBQXFHLG9DQUE3STtBQUNBO0FBSmUsQ0FBakI7QUFPQS9ULEtBQUssQ0FBQ3dXLFlBQU4sR0FBcUI7QUFDcEJDLG1CQUFpQixFQUFFLDJCQUFTQyxJQUFULEVBQWU7QUFDakMsU0FBSyxJQUFJcEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR29FLElBQUksQ0FBQ3ZTLE1BQXpCLEVBQWlDbU8sQ0FBQyxFQUFsQyxFQUFzQztBQUNyQyxVQUFJb0UsSUFBSSxDQUFDcEUsQ0FBRCxDQUFKLENBQVFxRSxHQUFSLElBQWUsWUFBbkIsRUFBaUMsT0FBT0QsSUFBSSxDQUFDcEUsQ0FBRCxDQUFKLENBQVE3RixJQUFmO0FBQ2pDOztBQUNELFdBQU8sRUFBUDtBQUNBO0FBTm1CLENBQXJCO0FBU0F6TSxLQUFLLENBQUNrVSxjQUFOLEdBQXVCO0FBQ3RCQyxvQkFBa0IsRUFBRSw0QkFBU3lDLFNBQVQsRUFBb0IzTyxRQUFwQixFQUE4QjtBQUNqRCxRQUFJNE8sR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBRCxPQUFHLENBQUNuSyxJQUFKLENBQVMsS0FBVCxFQUFnQmtLLFNBQWhCO0FBQ0FDLE9BQUcsQ0FBQ0UsSUFBSjs7QUFDQUYsT0FBRyxDQUFDRyxrQkFBSixHQUF5QixZQUFXO0FBQ25DLFVBQUcsS0FBS3RGLFVBQUwsS0FBb0IsQ0FBdkIsRUFBeUI7QUFDeEIsWUFBRyxLQUFLbUUsTUFBTCxLQUFnQixHQUFuQixFQUF3QjtBQUN2QixjQUFJb0IsUUFBUSxHQUFHSixHQUFHLENBQUNLLFlBQW5CO0FBQ0EsY0FBSUMsY0FBYyxHQUFHOVgsUUFBUSxDQUFDa0YsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBNFMsd0JBQWMsQ0FBQzFTLFNBQWYsR0FBMkJ3UyxRQUEzQjtBQUNBNVgsa0JBQVEsQ0FBQzZLLElBQVQsQ0FBY2tOLFdBQWQsQ0FBMEJELGNBQTFCO0FBQ0EsU0FMRCxNQUtPO0FBQ050WixZQUFFLENBQUNrUyxjQUFILENBQWtCLHdDQUFsQixFQUE0RCxVQUFVNkcsU0FBVixHQUN6RCxlQUR5RCxHQUN2QyxLQUFLZixNQURrQyxHQUV6RCxVQUZ5RCxHQUU1QyxLQUFLd0IsVUFGckI7QUFHQTtBQUNEOztBQUVELFVBQUdwUCxRQUFILEVBQ0NBLFFBQVEsQ0FBQzRPLEdBQUQsQ0FBUjtBQUNELEtBaEJEO0FBaUJBLEdBdEJxQjtBQXVCdEJTLHVEQUFxRCxFQUFFLCtEQUFTQywwQkFBVCxFQUFxQztBQUUzRixRQUFJVixHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0FBQ0FELE9BQUcsQ0FBQ25LLElBQUosQ0FBUyxLQUFULEVBQWdCNkssMEJBQWhCLEVBQTRDLEtBQTVDO0FBQ0FWLE9BQUcsQ0FBQ1csZ0JBQUosQ0FBcUIsUUFBckIsRUFBK0Isa0JBQS9CO0FBQ0FYLE9BQUcsQ0FBQ1csZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0FYLE9BQUcsQ0FBQ0UsSUFBSjs7QUFFQSxRQUFHRixHQUFHLENBQUNuRixVQUFKLElBQWtCLENBQXJCLEVBQXVCO0FBQ3RCLFVBQUdtRixHQUFHLENBQUNoQixNQUFKLElBQWMsR0FBakIsRUFBcUI7QUFDcEIsWUFBSW9CLFFBQVEsR0FBR0osR0FBRyxDQUFDSyxZQUFuQjtBQUNBLFlBQUlPLFFBQVEsR0FBR3JULElBQUksQ0FBQ3NULEtBQUwsQ0FBV1QsUUFBWCxDQUFmO0FBQ0EsWUFBSVUsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0UsaUJBQVQsQ0FBMkI1VSxXQUEzQixFQUF4QjtBQUNBNEMsVUFBRSxDQUFDbEgsSUFBSCxDQUFRLENBQUMsbUJBQUQsRUFBc0IsbUJBQXRCLEVBQTJDa1osaUJBQTNDLENBQVI7QUFFQSxPQU5ELE1BTUs7QUFDSixZQUFJZCxHQUFHLENBQUNoQixNQUFKLElBQWMsQ0FBZCxJQUFtQjdWLEtBQUssQ0FBQ1MsU0FBTixDQUFnQjZOLHFDQUFoQixDQUFzRG1CLE9BQXRELENBQThEb0gsR0FBRyxDQUFDaEIsTUFBbEUsSUFBNEUsQ0FBQyxDQUFwRyxFQUF1RztBQUN0R2hZLFlBQUUsQ0FBQ2tTLGNBQUgsQ0FBa0IscUJBQWxCLEVBQXlDOEcsR0FBRyxDQUFDaEIsTUFBSixHQUFhLEtBQWIsR0FBcUIwQiwwQkFBOUQ7QUFDQSxTQUZELE1BRU87QUFDTjFaLFlBQUUsQ0FBQ2tTLGNBQUgsQ0FBa0IscUJBQWxCLEVBQXlDLHdCQUF3QixLQUF4QixHQUFnQ3dILDBCQUF6RTtBQUNBO0FBQ0Q7QUFDRDtBQUNELEdBOUNxQjtBQStDdEJLLDZDQUEyQyxFQUFFLHFEQUFTQyxLQUFULEVBQWdCO0FBRTVELFFBQUlDLGFBQWEsR0FBRzlYLEtBQUssQ0FBQ1MsU0FBTixDQUFnQm9OLGdCQUFoQixFQUFwQjs7QUFDQSxRQUFHaUssYUFBYSxJQUFJLE9BQXBCLEVBQTZCO0FBQzVCO0FBQ0E7O0FBRUQsUUFBSTVhLElBQUksR0FBR2tILElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUMsNEJBQXNCd1QsS0FBdkI7QUFBOEIsbUJBQWE3WCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCeU8sSUFBMUIsQ0FBK0JDLEVBQTFFO0FBQThFLHVCQUFpQjBJO0FBQS9GLEtBQWYsQ0FBWDtBQUVBLFFBQUlqQixHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0FBQ0FELE9BQUcsQ0FBQ25LLElBQUosQ0FBUyxNQUFULEVBQWlCMU0sS0FBSyxDQUFDK1gsWUFBTixDQUFtQkMsd0JBQW5CLENBQTRDaFksS0FBSyxDQUFDUyxTQUFOLENBQWdCK08sZ0JBQWhCLEVBQTVDLEVBQWdGeUksaUJBQWpHLEVBQW9ILEtBQXBIO0FBQ0FwQixPQUFHLENBQUNXLGdCQUFKLENBQXFCLFFBQXJCLEVBQThCLGtCQUE5QjtBQUNBWCxPQUFHLENBQUNXLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQztBQUNBWCxPQUFHLENBQUNFLElBQUosQ0FBUzdaLElBQVQ7O0FBRUEsUUFBRzJaLEdBQUcsQ0FBQ25GLFVBQUosS0FBbUIsQ0FBdEIsRUFBd0I7QUFDdkIsVUFBSW1GLEdBQUcsQ0FBQ2hCLE1BQUosS0FBZSxHQUFuQixFQUF1QjtBQUN0QixZQUFJb0IsUUFBUSxHQUFHSixHQUFHLENBQUNLLFlBQW5CO0FBQ0EsWUFBSU8sUUFBUSxHQUFHclQsSUFBSSxDQUFDc1QsS0FBTCxDQUFXVCxRQUFYLENBQWY7QUFDQSxZQUFJaUIsb0JBQW9CLEdBQUcsS0FBM0I7QUFBQSxZQUFrQ0MsZ0JBQWdCLEdBQUcsRUFBckQ7QUFBQSxZQUF5RFosMEJBQTBCLEdBQUcsRUFBdEY7O0FBQ0EsWUFBSSxPQUFPRSxRQUFRLENBQUNXLE1BQWhCLElBQTBCLFdBQTlCLEVBQTJDO0FBQzFDRCwwQkFBZ0IsR0FBR1YsUUFBUSxDQUFDVyxNQUFULENBQWdCclYsV0FBaEIsRUFBbkI7QUFDQTs7QUFDRCxZQUFJLE9BQU8wVSxRQUFRLENBQUNZLGFBQWhCLElBQWlDLFdBQXJDLEVBQWtEO0FBQ2pESCw4QkFBb0IsR0FBR1QsUUFBUSxDQUFDWSxhQUFoQztBQUNBOztBQUNELFlBQUksT0FBT1osUUFBUSxDQUFDZixJQUFoQixJQUF3QixXQUE1QixFQUF5QztBQUN4Q2Esb0NBQTBCLEdBQUd2WCxLQUFLLENBQUN3VyxZQUFOLENBQW1CQyxpQkFBbkIsQ0FBcUNnQixRQUFRLENBQUNmLElBQTlDLENBQTdCO0FBQ0E7O0FBQ0QsWUFBSTRCLFlBQVksR0FBR3RZLEtBQUssQ0FBQ2tRLFlBQU4sQ0FBbUJvSSxZQUFuQixDQUFnQ0osb0JBQWhDLEVBQXNEQyxnQkFBdEQsRUFBd0VWLFFBQVEsQ0FBQ2MsVUFBakYsRUFBNkZoQiwwQkFBN0YsQ0FBbkI7QUFDQXZYLGFBQUssQ0FBQ2tRLFlBQU4sQ0FBbUJDLGtCQUFuQixDQUFzQ3NILFFBQVEsQ0FBQ2MsVUFBL0MsRUFBMkRKLGdCQUEzRCxFQUE2RUcsWUFBN0UsRUFBMkZKLG9CQUEzRjtBQUNBLFlBQUlNLFdBQVcsR0FBRztBQUNoQix3QkFBZWYsUUFBUSxDQUFDYyxVQURSO0FBRWhCLG9CQUFVSixnQkFGTTtBQUdoQixvQkFBVUcsWUFITTtBQUloQiwyQkFBaUJKLG9CQUpEO0FBS2hCLG1CQUFTTCxLQUxPO0FBTWhCLHFCQUFXN1gsS0FBSyxDQUFDUyxTQUFOLENBQWdCcU4sY0FBaEIsRUFOSztBQU9oQix3QkFBY2dLLGFBUEU7QUFRaEIsa0JBQVFMLFFBQVEsQ0FBQ2dCO0FBUkQsU0FBbEI7QUFVQUQsbUJBQVcsR0FBR0UsSUFBSSxDQUFDQyxTQUFTLENBQUN2VSxJQUFJLENBQUNDLFNBQUwsQ0FBZW1VLFdBQWYsQ0FBRCxDQUFWLENBQWxCO0FBQ0E5Wix3REFBTyxDQUFDOEIsU0FBUixDQUFrQlIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDcUIsR0FBbkQsRUFBd0Q2WCxXQUF4RCxFQUFxRSxDQUFyRTs7QUFFQSxZQUFJLE9BQU9qWCxHQUFQLEtBQWUsV0FBbkIsRUFBZ0M7QUFDL0IsY0FBR3ZCLEtBQUssQ0FBQzRZLE1BQU4sQ0FBYUMsb0JBQWIsQ0FBa0NwQixRQUFsQyxDQUFILEVBQStDO0FBQzlDLGdCQUFHO0FBQ0Ysa0JBQUlxQixVQUFVLEdBQUcsSUFBSUMsVUFBSixFQUFqQjtBQUNBRCx3QkFBVSxDQUFDRSxxQkFBWCxDQUFpQ25CLEtBQWpDO0FBQ0EsYUFIRCxDQUdFLE9BQU0xQyxLQUFOLEVBQWE7QUFDZHRYLGdCQUFFLENBQUNrUyxjQUFILENBQWtCLDREQUFsQixFQUNTLFVBQVUxUSxRQUFRLENBQUNILFFBQVQsQ0FBa0J1TixJQUE1QixHQUNFLFVBREYsR0FDZW9MLEtBRGYsR0FFRSxTQUZGLEdBRWMxQyxLQUh2QjtBQUlBO0FBQ0Q7QUFDRDs7QUFFRCxZQUFHc0MsUUFBUSxDQUFDYyxVQUFULElBQXVCLElBQTFCLEVBQStCO0FBQzlCdlksZUFBSyxDQUFDNk8sUUFBTixDQUFlMEUsYUFBZixDQUE2QmtFLFFBQVEsQ0FBQ2dCLFNBQXRDLEVBQWlELFVBQWpELEVBQTZELFNBQTdEO0FBQ0E7QUFHRCxPQS9DRCxNQStDSztBQUNKNWEsVUFBRSxDQUFDa1MsY0FBSCxDQUFrQiw4QkFBbEIsRUFBa0Q4RyxHQUFHLENBQUNoQixNQUFKLEdBQWEsS0FBYixHQUFxQmdDLEtBQXZFO0FBQ0E3WCxhQUFLLENBQUNrUSxZQUFOLENBQW1CQyxrQkFBbkIsQ0FBc0MsSUFBdEMsRUFBNEMsTUFBNUMsRUFBb0QsSUFBcEQsRUFBMEQsR0FBMUQ7QUFDQTtBQUNEO0FBQ0Q7QUFuSHFCLENBQXZCO0FBc0hBblEsS0FBSyxDQUFDNFksTUFBTixHQUFlO0FBQ2JLLGNBQVksRUFBRSx3QkFBWTtBQUMxQixRQUFHM1gsZUFBZSxDQUFDNFgsdUJBQWhCLENBQXdDLGtCQUF4QyxDQUFILEVBQStEO0FBQzlEbFosV0FBSyxDQUFDNk8sUUFBTixDQUFlMEUsYUFBZixDQUE2QmpTLGVBQWUsQ0FBQzRYLHVCQUFoQixDQUF3QyxrQkFBeEMsRUFBNERDLGlCQUF6RixFQUE0RyxjQUE1RyxFQUE0SCxTQUE1SDtBQUNBLGFBQU8sSUFBUDtBQUNBOztBQUVELFFBQUd6YSxnREFBTyxDQUFDaVIsU0FBUixDQUFrQjNQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ3FQLGVBQW5ELENBQUgsRUFBdUU7QUFDdEUzTyxXQUFLLENBQUM2TyxRQUFOLENBQWUwRSxhQUFmLENBQTZCN1UsZ0RBQU8sQ0FBQ2lSLFNBQVIsQ0FBa0IzUCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxUCxlQUFuRCxDQUE3QixFQUFrRyxjQUFsRyxFQUFrSCxRQUFsSDtBQUNBLGFBQU8sSUFBUDtBQUNBOztBQUVELFdBQU8sS0FBUDtBQUNDLEdBYlk7QUFlYnlLLHNCQUFvQixFQUFFLGdDQUFXO0FBQ2pDLFFBQUlwWixLQUFLLENBQUM0WSxNQUFOLENBQWFLLFlBQWIsRUFBSixFQUNDOztBQUVELFFBQUc7QUFDRixVQUFJSSxjQUFjLEdBQUcsSUFBSUMsY0FBSixFQUFyQjtBQUNBRCxvQkFBYyxDQUFDRSwrQkFBZixDQUErQ2pZLGVBQS9DO0FBQ0EsS0FIRCxDQUdFLE9BQU02VCxLQUFOLEVBQWE7QUFDZHRYLFFBQUUsQ0FBQ2tTLGNBQUgsQ0FBa0IsOEJBQWxCLEVBQWtELFlBQVlvRixLQUFaLEdBQW9CLG1CQUFwQixHQUEwQzdULGVBQWUsQ0FBQ2tZLFlBQWhCLENBQTZCLENBQTdCLEVBQWdDTCxpQkFBNUg7QUFDQTtBQUNELEdBekJhO0FBMkJkTixzQkFBb0IsRUFBRSw4QkFBU1ksUUFBVCxFQUFrQjtBQUN2QyxRQUFHLENBQUNuWSxlQUFlLENBQUNvWSxXQUFoQixFQUFELElBQWtDRCxRQUFRLENBQUNyQixNQUFULEtBQW1CLFlBQXJELElBQXFFLENBQUMxWixnREFBTyxDQUFDaVIsU0FBUixDQUFrQjNQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJnTyxpQkFBNUMsQ0FBekUsRUFBd0k7QUFDdkksYUFBTyxJQUFQO0FBQ0E7O0FBQ0QsV0FBTyxLQUFQO0FBQ0E7QUFoQ2EsQ0FBZjtBQW9DQTFPLEtBQUssQ0FBQ2tRLFlBQU4sR0FBcUI7QUFDcEJ5SixlQUFhLEVBQUUsdUJBQVM5QixLQUFULEVBQWdCK0IsR0FBaEIsRUFBcUI7QUFDbkMsUUFBSSxDQUFDL0IsS0FBTCxFQUFZO0FBQ1gsVUFBSStCLEdBQUosRUFBU2xiLGdEQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxQixHQUFuRCxFQUF3RCxFQUF4RCxFQUE0RCxDQUFDLENBQTdEO0FBQ1QsVUFBSWpDLGdEQUFPLENBQUNpUixTQUFSLENBQWtCM1AsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDcUgsS0FBbkQsQ0FBSixFQUErRGpJLGdEQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxSCxLQUFuRCxFQUEwRCxFQUExRCxFQUE4RCxDQUFDLENBQS9EO0FBQy9EOztBQUNELFdBQU9rUixLQUFLLElBQUksRUFBaEI7QUFDQSxHQVBtQjtBQVFwQmdDLG1DQUFpQyxFQUFFLDJDQUFTaEMsS0FBVCxFQUFnQitCLEdBQWhCLEVBQXFCO0FBQ3ZELFFBQUk1WixLQUFLLENBQUNrUSxZQUFOLENBQW1CeUosYUFBbkIsQ0FBaUM5QixLQUFqQyxFQUF3QytCLEdBQXhDLENBQUosRUFBa0Q7QUFDakQsVUFBSUEsR0FBSixFQUFTO0FBQ1IsWUFBSUUsT0FBTyxHQUFHMVYsSUFBSSxDQUFDc1QsS0FBTCxDQUFXcUMsU0FBUyxDQUFDQyxJQUFJLENBQUNKLEdBQUQsQ0FBTCxDQUFwQixDQUFkOztBQUNBLFlBQUkvQixLQUFLLElBQUlpQyxPQUFPLENBQUNqQyxLQUFqQixLQUEyQixPQUFPaUMsT0FBTyxDQUFDRyxPQUFmLElBQTBCLFdBQTFCLElBQXlDSCxPQUFPLENBQUNHLE9BQVIsSUFBbUJqYSxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JxTixjQUFoQixFQUF2RixDQUFKLEVBQThIO0FBQzdIOU4sZUFBSyxDQUFDa1EsWUFBTixDQUFtQkMsa0JBQW5CLENBQXNDMkosT0FBTyxDQUFDdkIsVUFBOUMsRUFBMER1QixPQUFPLENBQUMxQixNQUFsRSxFQUEwRTBCLE9BQU8sQ0FBQ0ksTUFBbEYsRUFBMEZKLE9BQU8sQ0FBQ3pCLGFBQWxHOztBQUNBLGNBQUd5QixPQUFPLENBQUN2QixVQUFYLEVBQXNCO0FBQ3JCdlksaUJBQUssQ0FBQzZPLFFBQU4sQ0FBZTBFLGFBQWYsQ0FBNkJ1RyxPQUFPLENBQUNLLElBQXJDLEVBQTJDLFVBQTNDLEVBQXVELFNBQXZEO0FBQ0E7O0FBQ0Q7QUFDQTs7QUFDRHpiLHdEQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxQixHQUFuRCxFQUF3RCxFQUF4RCxFQUE0RCxDQUFDLENBQTdEO0FBQ0E7O0FBQ0RYLFdBQUssQ0FBQ2tVLGNBQU4sQ0FBcUIwRCwyQ0FBckIsQ0FBaUVDLEtBQWpFO0FBQ0E7QUFDRCxHQXZCbUI7QUF3QnBCUyxjQUFZLEVBQUUsc0JBQVM4QixVQUFULEVBQXFCaEMsTUFBckIsRUFBNkJHLFVBQTdCLEVBQXlDaEIsMEJBQXpDLEVBQXFFO0FBQ2xGLFFBQUlnQixVQUFVLElBQUlILE1BQU0sSUFBSSxjQUF4QixJQUEwQ2dDLFVBQVUsSUFBSSxLQUE1RCxFQUFtRTtBQUNsRSxVQUFJN0IsVUFBVSxJQUFJaEIsMEJBQWxCLEVBQThDdlgsS0FBSyxDQUFDa1UsY0FBTixDQUFxQm9ELHFEQUFyQixDQUEyRUMsMEJBQTNFO0FBQzlDLGFBQU8sSUFBUDtBQUNBOztBQUFBO0FBQ0QsUUFBSTdZLGdEQUFPLENBQUNpUixTQUFSLENBQWtCM1AsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDcUgsS0FBbkQsQ0FBSixFQUErRGpJLGdEQUFPLENBQUM4QixTQUFSLENBQWtCUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCcEIsTUFBMUIsQ0FBaUNxSCxLQUFuRCxFQUEwRCxFQUExRCxFQUE4RCxDQUFDLENBQS9EO0FBQy9ELFdBQU8sS0FBUDtBQUNBLEdBL0JtQjtBQWdDcEJ3SixvQkFBa0IsRUFBQyw0QkFBU29JLFVBQVQsRUFBcUJILE1BQXJCLEVBQTZCOEIsTUFBN0IsRUFBcUM3QixhQUFyQyxFQUFtRDtBQUNyRTFTLE1BQUUsQ0FBQ2xILElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCLFlBQXRCLEVBQW9DOFosVUFBcEMsQ0FBUjtBQUNBNVMsTUFBRSxDQUFDbEgsSUFBSCxDQUFRLENBQUMsbUJBQUQsRUFBc0IsUUFBdEIsRUFBZ0MyWixNQUFoQyxDQUFSO0FBQ0F6UyxNQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixRQUF0QixFQUFnQ3liLE1BQWhDLENBQVI7QUFDQSxRQUFHN0IsYUFBYSxJQUFJLEdBQXBCLEVBQ0MxUyxFQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixVQUF0QixFQUFrQzRaLGFBQWxDLENBQVI7QUFDRDtBQXRDbUIsQ0FBckI7QUF5Q0FyWSxLQUFLLENBQUNtUCxJQUFOLEdBQWE7QUFDWmtMLFdBQVMsRUFBRSxxQkFBVztBQUNyQixXQUFPcmEsS0FBSyxDQUFDUyxTQUFOLENBQWdCbVAsb0JBQWhCLE9BQTJDLFNBQTNDLEdBQXVELElBQXZELEdBQThELEtBQXJFO0FBQ0EsR0FIVztBQUlaMEssMEJBQXdCLEVBQUUsb0NBQVc7QUFDcEMsUUFBSSxPQUFPdGEsS0FBSyxDQUFDUyxTQUFOLENBQWdCbVAsb0JBQWhCLEVBQVAsS0FBa0QsV0FBdEQsRUFBbUU7QUFDbEUvUixRQUFFLENBQUNrUyxjQUFILENBQWtCLDhDQUFsQixFQUFrRTFRLFFBQVEsQ0FBQ0gsUUFBVCxDQUFrQnVOLElBQXBGO0FBQ0EsYUFBTyxLQUFQO0FBQ0E7O0FBQUE7O0FBQ0QsUUFBSSxPQUFPek0sS0FBSyxDQUFDUyxTQUFOLENBQWdCcU4sY0FBaEIsRUFBUCxLQUE0QyxXQUFoRCxFQUE2RDtBQUM1RGpRLFFBQUUsQ0FBQ2tTLGNBQUgsQ0FBa0IsNkNBQWxCLEVBQWlFMVEsUUFBUSxDQUFDSCxRQUFULENBQWtCdU4sSUFBbkY7QUFDQSxhQUFPLEtBQVA7QUFDQTs7QUFBQTtBQUNELFdBQU8sSUFBUDtBQUNBLEdBZFc7QUFlWjhOLCtCQUE2QixFQUFFLHlDQUFXO0FBQ3pDLFFBQUlyWCxHQUFHLEdBQUdsRCxLQUFLLENBQUNtUCxJQUFOLENBQVdxTCx1QkFBWCxFQUFWO0FBQ0EsUUFBSUMsY0FBYyxHQUFHLENBQUMsWUFBRCxFQUFjLFlBQWQsQ0FBckI7QUFDQSxRQUFJQyxlQUFlLEdBQUcsRUFBdEI7O0FBRUEsU0FBSyxJQUFJQyxnQkFBZ0IsR0FBRyxDQUE1QixFQUErQkEsZ0JBQWdCLEdBQUdGLGNBQWMsQ0FBQ3RXLE1BQWpFLEVBQXlFd1csZ0JBQWdCLEVBQXpGLEVBQTZGO0FBQzVGLFVBQUlDLGFBQWEsR0FBR0gsY0FBYyxDQUFDRSxnQkFBRCxDQUFsQzs7QUFDQSxVQUFJelgsR0FBRyxDQUFDdU0sT0FBSixDQUFZbUwsYUFBYSxHQUFHLEdBQTVCLEtBQW9DLENBQUMsQ0FBekMsRUFBNEM7QUFDM0MsWUFBSUMsS0FBSyxHQUFHLElBQUlqYixNQUFKLENBQVcsWUFBWWdiLGFBQVosR0FBNEIsV0FBdkMsQ0FBWjtBQUNBLFlBQUlFLGFBQWEsR0FBRzVYLEdBQUcsQ0FBQ3ZELEtBQUosQ0FBVWtiLEtBQVYsRUFBaUIsQ0FBakIsQ0FBcEI7O0FBQ0EsWUFBR0MsYUFBSCxFQUFpQjtBQUNoQkoseUJBQWUsQ0FBQ2pjLElBQWhCLENBQXFCcWMsYUFBckI7QUFDQTtBQUNEO0FBQ0Q7O0FBQ0QsUUFBSUosZUFBZSxDQUFDdlcsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDL0J3QixRQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixLQUF0QixFQUE2QmljLGVBQWUsQ0FBQ0ssSUFBaEIsQ0FBcUIsR0FBckIsQ0FBN0IsQ0FBUjtBQUNBOztBQUNELFFBQUk3WCxHQUFHLENBQUN1TSxPQUFKLENBQVksZUFBWixLQUFnQyxDQUFDLENBQXJDLEVBQXdDO0FBQ3ZDLFVBQUlvTCxLQUFLLEdBQUcsSUFBSWpiLE1BQUosQ0FBVyxxQkFBWCxDQUFaO0FBQ0EsVUFBSW9iLFFBQVEsR0FBRzlYLEdBQUcsQ0FBQ3ZELEtBQUosQ0FBVWtiLEtBQVYsRUFBaUIsQ0FBakIsQ0FBZjs7QUFDQSxVQUFHRyxRQUFILEVBQVk7QUFDWHJWLFVBQUUsQ0FBQ2xILElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCLFVBQXRCLEVBQWtDdWMsUUFBbEMsQ0FBUjtBQUNBO0FBQ0Q7QUFDRCxHQXhDVztBQXlDWkMsa0JBQWdCLEVBQUUsNEJBQVc7QUFDNUIsUUFBSXpKLFNBQVMsR0FBR0QsU0FBUyxDQUFDQyxTQUExQjtBQUNBLFFBQUkwSixVQUFVLEdBQUcsSUFBSXRiLE1BQUosQ0FBVyw0SUFBWCxDQUFqQjtBQUNBLFFBQUl1YixNQUFNLEdBQUdELFVBQVUsQ0FBQzVKLElBQVgsQ0FBZ0JFLFNBQWhCLENBQWI7QUFDQTdMLE1BQUUsQ0FBQ2xILElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCLFVBQXRCLEVBQWtDMGMsTUFBbEMsQ0FBUjtBQUNBLFdBQU9BLE1BQVA7QUFDQSxHQS9DVztBQWdEWmxILGFBQVcsRUFBRSx1QkFBVztBQUN2QixXQUFPalUsS0FBSyxDQUFDUyxTQUFOLENBQWdCK08sZ0JBQWhCLE1BQXNDLEtBQXRDLEdBQThDLE1BQTlDLEdBQXVELEVBQTlEO0FBQ0EsR0FsRFc7QUFtRFo0TCxtQkFBaUIsRUFBRSwyQkFBU0MsU0FBVCxFQUFvQjtBQUN0QyxRQUFJQyxVQUFVLEdBQUd0YixLQUFLLENBQUNtUCxJQUFOLENBQVdxTCx1QkFBWCxFQUFqQjtBQUNBLFdBQU9jLFVBQVUsQ0FBQzdMLE9BQVgsQ0FBbUI0TCxTQUFuQixLQUFpQyxDQUFDLENBQWxDLEdBQXNDLElBQXRDLEdBQTZDLEtBQXBEO0FBQ0EsR0F0RFc7QUF1RFozTCx3QkFBc0IsRUFBRSxnQ0FBU3dDLFNBQVQsRUFBb0I7QUFDM0MsUUFBSWxTLEtBQUssQ0FBQ21QLElBQU4sQ0FBV2lNLGlCQUFYLENBQTZCbEosU0FBN0IsQ0FBSixFQUE2QztBQUM1QyxVQUFJb0osVUFBVSxHQUFHdGIsS0FBSyxDQUFDbVAsSUFBTixDQUFXcUwsdUJBQVgsRUFBakI7QUFDQSxVQUFJSyxLQUFLLEdBQUcsSUFBSWpiLE1BQUosQ0FBVyxZQUFZc1MsU0FBWixHQUF3QixXQUFuQyxDQUFaO0FBQ0EsYUFBT29KLFVBQVUsQ0FBQzNiLEtBQVgsQ0FBaUJrYixLQUFqQixFQUF3QixDQUF4QixDQUFQO0FBQ0E7O0FBQ0QsV0FBTyxlQUFQO0FBQ0EsR0E5RFc7QUErRFpVLFNBQU8sRUFBRSxtQkFBVztBQUNuQixRQUFJckosU0FBUyxHQUFHbFMsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnlPLElBQTFCLENBQStCRSxLQUEvQztBQUNBLFFBQUk4QyxjQUFjLEdBQUduUyxLQUFLLENBQUNtUCxJQUFOLENBQVdPLHNCQUFYLENBQWtDd0MsU0FBbEMsQ0FBckI7O0FBQ0EsUUFBSUMsY0FBYyxJQUFJLE1BQXRCLEVBQThCO0FBQzdCelQsc0RBQU8sQ0FBQzhCLFNBQVIsQ0FBa0IwUixTQUFsQixFQUE2QkMsY0FBN0IsRUFBNkMsQ0FBN0M7QUFDQSxhQUFPLElBQVA7QUFDQTs7QUFDRCxRQUFJQSxjQUFjLElBQUksT0FBdEIsRUFBK0I7QUFDOUJ6VCxzREFBTyxDQUFDOEIsU0FBUixDQUFrQjBSLFNBQWxCLEVBQTZCLEVBQTdCLEVBQWlDLENBQUMsQ0FBbEM7QUFDQSxhQUFPLEtBQVA7QUFDQTs7QUFDRCxRQUFJeFQsZ0RBQU8sQ0FBQ2lSLFNBQVIsQ0FBa0IzUCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JDLFNBQWhCLENBQTBCeU8sSUFBMUIsQ0FBK0JFLEtBQWpELENBQUosRUFBNkQ7QUFDNUQsYUFBTyxJQUFQO0FBQ0E7O0FBQ0QsV0FBTyxLQUFQO0FBQ0EsR0E5RVc7QUErRVptTSxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFFBQUlYLEtBQUssR0FBRyxJQUFJamIsTUFBSixDQUFXLFdBQVgsQ0FBWjtBQUFBLFFBQXFDc0QsR0FBRyxHQUFHbEQsS0FBSyxDQUFDbVAsSUFBTixDQUFXc00scUJBQVgsRUFBM0M7O0FBQ0EsUUFBSXZZLEdBQUcsQ0FBQ3ZELEtBQUosQ0FBVWtiLEtBQVYsRUFBaUIsQ0FBakIsRUFBb0JwTCxPQUFwQixDQUE0QixRQUE1QixJQUF3QyxDQUFDLENBQXpDLElBQStDdk0sR0FBRyxDQUFDdkQsS0FBSixDQUFVa2IsS0FBVixFQUFpQixDQUFqQixFQUFvQnBMLE9BQXBCLENBQTRCLFFBQTVCLElBQXdDLENBQUMsQ0FBekMsSUFBOEN2TSxHQUFHLENBQUN2RCxLQUFKLENBQVVrYixLQUFWLEVBQWlCLENBQWpCLEVBQW9CcEwsT0FBcEIsQ0FBNEIsS0FBNUIsS0FBc0MsQ0FBQyxDQUF4SSxFQUE0STtBQUMzSSxhQUFPdk0sR0FBRyxDQUFDdkQsS0FBSixDQUFVa2IsS0FBVixFQUFpQixDQUFqQixDQUFQO0FBQ0E7O0FBQ0QsV0FBTyxFQUFQO0FBQ0EsR0FyRlc7QUFzRlphLGVBQWEsRUFBRSx1QkFBU0MsU0FBVCxFQUFvQjtBQUNsQ3ZlLFVBQU0sQ0FBQ2lELFVBQVAsR0FBb0JzYixTQUFwQjtBQUNBM2IsU0FBSyxDQUFDNk8sUUFBTixDQUFldUUsbUJBQWYsQ0FBbUMsS0FBbkM7QUFDQSxHQXpGVztBQTBGWndJLHNCQUFvQixFQUFFLDhCQUFTRCxTQUFULEVBQW9CO0FBQ3pDdmUsVUFBTSxDQUFDaUQsVUFBUCxHQUFvQnNiLFNBQXBCO0FBQ0EzYixTQUFLLENBQUNTLFNBQU4sQ0FBZ0I4Tix1QkFBaEIsR0FBMEMsSUFBMUM7QUFDQXZPLFNBQUssQ0FBQzZPLFFBQU4sQ0FBZXVFLG1CQUFmLENBQW1DLElBQW5DO0FBQ0EsR0E5Rlc7QUErRlpvSCx5QkFBdUIsRUFBRSxtQ0FBVTtBQUNsQyxXQUFPcGQsTUFBTSxDQUFDOEIsUUFBUCxDQUFnQmdELE1BQXZCO0FBQ0EsR0FqR1c7QUFrR1p1Wix1QkFBcUIsRUFBRSxpQ0FBVTtBQUNoQyxXQUFPcmUsTUFBTSxDQUFDOEIsUUFBUCxDQUFnQnVOLElBQXZCO0FBQ0EsR0FwR1c7QUFxR1p1SCxjQUFZLEVBQUUsc0JBQVM2SCxPQUFULEVBQWlCO0FBQzlCLFFBQUl6SyxDQUFDLEdBQUcvUixRQUFRLENBQUNrRixhQUFULENBQXVCLEtBQXZCLENBQVI7QUFDQTZNLEtBQUMsQ0FBQzNNLFNBQUYsR0FBY29YLE9BQWQ7QUFDQXhjLFlBQVEsQ0FBQzZLLElBQVQsQ0FBYzRSLFlBQWQsQ0FBMkIxSyxDQUEzQixFQUE4Qi9SLFFBQVEsQ0FBQzZLLElBQVQsQ0FBYzZSLFNBQTVDO0FBQ0EsR0F6R1c7QUEwR1ovTCxXQUFTLEVBQUUscUJBQVU7QUFDcEIsUUFBSWdNLFFBQVEsR0FBRyxDQUFDLE9BQUQsRUFBVSxjQUFWLEVBQTBCLE9BQTFCLEVBQW1DLFNBQW5DLEVBQThDLFlBQTlDLEVBQTRELGNBQTVELEVBQTRFLGVBQTVFLEVBQTZGLGVBQTdGLEVBQThHLGFBQTlHLEVBQTZILElBQTdILEVBQW1JLE9BQW5JLEVBQTRJLFNBQTVJLEVBQXNKLFNBQXRKLENBQWY7QUFDQSxRQUFHQSxRQUFRLENBQUN2TSxPQUFULENBQWlCelAsS0FBSyxDQUFDUyxTQUFOLENBQWdCcU4sY0FBaEIsRUFBakIsSUFBcUQsQ0FBQyxDQUF6RCxFQUNDLE9BQU8sSUFBUCxDQURELEtBR0MsT0FBTyxLQUFQO0FBQ0QsR0FoSFc7QUFpSFptTyxnQkFBYyxFQUFFLHdCQUFVQyxZQUFWLEVBQXdCQyxXQUF4QixFQUFxQ2xNLFdBQXJDLEVBQWtEO0FBQ2pFN1MsVUFBTSxDQUFDeVMsaUJBQVAsR0FBMkJxTSxZQUEzQjtBQUNBOWUsVUFBTSxDQUFDbVMsaUJBQVAsR0FBMkI0TSxXQUEzQjtBQUNBL2UsVUFBTSxDQUFDeUQsZ0JBQVAsR0FBMEJvUCxXQUExQjs7QUFDQSxRQUFJLE9BQU83UyxNQUFNLENBQUNpRCxVQUFkLEtBQTZCLFdBQWpDLEVBQThDO0FBQzdDakQsWUFBTSxDQUFDaUQsVUFBUCxDQUFrQkMsZUFBbEIsR0FBb0MsRUFBcEM7QUFDQTs7QUFDRE4sU0FBSyxDQUFDb2MsVUFBTixDQUFpQkMsTUFBakI7QUFDQTFXLE1BQUUsQ0FBQ3ZGLFVBQUgsQ0FBY2tjLE9BQWQ7QUFDQSxHQTFIVztBQTJIWkMsU0FBTyxFQUFFLG1CQUFZO0FBQ3BCLFFBQUd2YyxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JxTixjQUFoQixPQUFxQyxPQUF4QyxFQUNDLE9BQU8sSUFBUCxDQURELEtBR0MsT0FBTyxLQUFQO0FBQ0Q7QUFoSVcsQ0FBYjtBQW1JQTlOLEtBQUssQ0FBQytYLFlBQU4sR0FBcUI7QUFDcEJDLDBCQUF3QixFQUFFO0FBQ3pCLFdBQU87QUFDTiwyQkFBb0IsWUFEZDtBQUVOLG1DQUE0QixZQUZ0QjtBQUdOLG9CQUFhLE1BSFA7QUFJTix5QkFBa0Isc0VBSlo7QUFLTixpQ0FBMEIsc0VBTHBCO0FBTU4sMkJBQW9CLHlFQUF3RWhZLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLFlBQWhCLEVBQXhFLEdBQXdHLHFCQU50SDtBQU9OLDJCQUFvQix5Q0FQZDtBQVFOLDhCQUF1QixLQUFHek4sS0FBSyxDQUFDbVAsSUFBTixDQUFXcU0sZUFBWCxFQUFILEdBQWdDO0FBUmpELEtBRGtCO0FBV3pCLFdBQU07QUFDTCwyQkFBb0IsWUFEZjtBQUVMLG1DQUE0QixZQUZ2QjtBQUdMLG9CQUFhLE9BSFI7QUFJTCx5QkFBa0IseUVBSmI7QUFLTCxpQ0FBMEIseUVBTHJCO0FBTUwsMkJBQW9CLHlFQUF3RXhiLEtBQUssQ0FBQ1MsU0FBTixDQUFnQmdOLFlBQWhCLEVBQXhFLEdBQXdHLHFCQU52SDtBQU9MLDJCQUFvQix5Q0FQZjtBQVFMLDhCQUF1QixLQUFHek4sS0FBSyxDQUFDbVAsSUFBTixDQUFXcU0sZUFBWCxFQUFILEdBQWdDO0FBUmxELEtBWG1CO0FBcUJ6QixXQUFNO0FBQ0wsMkJBQW9CLFlBRGY7QUFFTCxtQ0FBNEIsWUFGdkI7QUFHTCxvQkFBYSxPQUhSO0FBSUwseUJBQWtCLHlFQUpiO0FBS0wsaUNBQTBCLHlFQUxyQjtBQU1MLDJCQUFvQixtRUFBa0V4YixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JnTixZQUFoQixFQUFsRSxHQUFrRyxxQkFOakg7QUFPTCwyQkFBb0Isc0NBUGY7QUFRTCw4QkFBdUIsS0FBR3pOLEtBQUssQ0FBQ21QLElBQU4sQ0FBV3FNLGVBQVgsRUFBSCxHQUFnQztBQVJsRDtBQXJCbUI7QUFETixDQUFyQjtBQW1DQXhiLEtBQUssQ0FBQ29jLFVBQU4sR0FBbUI7QUFDbEJDLFFBQU0sRUFBRSxrQkFBVztBQUNsQnhlLE1BQUUsQ0FBQzZJLFNBQUgsQ0FBYSxvQkFBYixFQUFtQyxlQUFuQztBQUNBZixNQUFFLEdBQUd2SSxNQUFNLENBQUMsSUFBRCxDQUFOLElBQWdCLEVBQXJCO0FBQ0F1SSxNQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxTQUFELEVBQVksQ0FBQ3VCLEtBQUssQ0FBQ1MsU0FBTixDQUFnQm1QLG9CQUFoQixFQUFELENBQVosQ0FBUjs7QUFDQSxRQUFJNVAsS0FBSyxDQUFDbVAsSUFBTixDQUFXYSxTQUFYLE1BQTBCaFEsS0FBSyxDQUFDbVAsSUFBTixDQUFXb04sT0FBWCxFQUE5QixFQUFvRDtBQUNuRDVXLFFBQUUsQ0FBQ2xILElBQUgsQ0FBUSxDQUFDLFFBQUQsRUFBV3VCLEtBQUssQ0FBQytYLFlBQU4sQ0FBbUJDLHdCQUFuQixDQUE0Q2hZLEtBQUssQ0FBQ1MsU0FBTixDQUFnQitPLGdCQUFoQixFQUE1QyxFQUFnRmdOLHlCQUEzRixDQUFSO0FBQ0EsS0FGRCxNQUdLO0FBQ0o3VyxRQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxRQUFELEVBQVd1QixLQUFLLENBQUMrWCxZQUFOLENBQW1CQyx3QkFBbkIsQ0FBNENoWSxLQUFLLENBQUNTLFNBQU4sQ0FBZ0IrTyxnQkFBaEIsRUFBNUMsRUFBZ0ZpTixpQkFBM0YsQ0FBUjtBQUNBOztBQUNEOVcsTUFBRSxDQUFDbEgsSUFBSCxDQUFRLENBQUMsWUFBRCxFQUFldUIsS0FBSyxDQUFDK1gsWUFBTixDQUFtQkMsd0JBQW5CLENBQTRDaFksS0FBSyxDQUFDUyxTQUFOLENBQWdCK08sZ0JBQWhCLEVBQTVDLEVBQWdGa04sVUFBL0YsQ0FBUjtBQUNBL1csTUFBRSxDQUFDbEgsSUFBSCxDQUFRLENBQUMsVUFBRCxFQUFhdUIsS0FBSyxDQUFDbVAsSUFBTixDQUFXb00sT0FBWCxFQUFiLENBQVI7QUFDQSxRQUFJb0IsU0FBUyxHQUFHM2MsS0FBSyxDQUFDbVAsSUFBTixDQUFXc00scUJBQVgsR0FBbUNoYyxLQUFuQyxDQUF5QyxHQUF6QyxFQUE4QyxDQUE5QyxDQUFoQjtBQUNBa0csTUFBRSxDQUFDbEgsSUFBSCxDQUFRLENBQUMsWUFBRCxFQUFja2UsU0FBZCxDQUFSO0FBQ0FoWCxNQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxTQUFELEVBQVl1QixLQUFLLENBQUNTLFNBQU4sQ0FBZ0JxTixjQUFoQixFQUFaLENBQVI7QUFDQW5JLE1BQUUsQ0FBQ2xILElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCLGFBQXRCLEVBQXFDdUIsS0FBSyxDQUFDUyxTQUFOLENBQWdCcU4sY0FBaEIsRUFBckMsQ0FBUjtBQUNBOU4sU0FBSyxDQUFDb1EsYUFBTixDQUFvQlksaUJBQXBCLENBQXNDLFVBQVVDLFVBQVYsRUFBc0I7QUFDM0R0TCxRQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixTQUF0QixFQUFpQ3dTLFVBQWpDLENBQVI7QUFDQSxLQUZEOztBQUlBLFFBQUlqUixLQUFLLENBQUNTLFNBQU4sQ0FBZ0I2TyxtQkFBaEIsRUFBSixFQUEyQztBQUMxQzNKLFFBQUUsQ0FBQ2xILElBQUgsQ0FBUSxDQUFDLG1CQUFELEVBQXNCLG1CQUF0QixFQUEyQyxJQUEzQyxDQUFSO0FBQ0E7O0FBRUQsUUFBSSxPQUFPOEMsR0FBUCxLQUFlLFdBQWYsSUFBK0IsT0FBT0QsZUFBUCxLQUEyQixXQUEzQixJQUEwQ0EsZUFBZSxDQUFDb1ksV0FBaEIsRUFBN0UsRUFBOEc7QUFDN0cxWixXQUFLLENBQUM0WSxNQUFOLENBQWFRLG9CQUFiLENBQWtDOVgsZUFBbEM7QUFDQXRCLFdBQUssQ0FBQ2tRLFlBQU4sQ0FBbUJDLGtCQUFuQixDQUFzQyxJQUF0QyxFQUEyQyxZQUEzQyxFQUF5RCxJQUF6RCxFQUErRCxFQUEvRDtBQUNBLEtBSEQsTUFHSztBQUNKblEsV0FBSyxDQUFDa1EsWUFBTixDQUFtQjJKLGlDQUFuQixDQUFxRG5iLGdEQUFPLENBQUNpUixTQUFSLENBQWtCM1AsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxTQUFoQixDQUEwQnBCLE1BQTFCLENBQWlDa1AsSUFBbkQsQ0FBckQsRUFBK0c5UCxnREFBTyxDQUFDaVIsU0FBUixDQUFrQjNQLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEJwQixNQUExQixDQUFpQ3FCLEdBQW5ELENBQS9HO0FBQ0E7O0FBRURYLFNBQUssQ0FBQ2dQLElBQU4sQ0FBV29ELGdCQUFYO0FBRUF6TSxNQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxtQkFBRCxFQUFzQixzQkFBdEIsRUFBOEMsSUFBOUMsQ0FBUjtBQUNBdUIsU0FBSyxDQUFDbVAsSUFBTixDQUFXOEwsZ0JBQVgsTUFBaUNqYixLQUFLLENBQUNtUCxJQUFOLENBQVdvTCw2QkFBWCxFQUFqQztBQUNBNVUsTUFBRSxDQUFDbEgsSUFBSCxDQUFRLENBQUMsWUFBRCxFQUFlLGFBQWYsRUFBOEJ1QixLQUFLLENBQUNtUCxJQUFOLENBQVd1TSxhQUF6QyxDQUFSO0FBQ0EvVixNQUFFLENBQUNsSCxJQUFILENBQVEsQ0FBQyxZQUFELEVBQWUsY0FBZixFQUErQnVCLEtBQUssQ0FBQ21QLElBQU4sQ0FBV3lNLG9CQUExQyxDQUFSO0FBQ0EvZCxNQUFFLENBQUM2SSxTQUFILENBQWEsb0JBQWIsRUFBbUMsWUFBbkM7QUFDQTtBQXZDaUIsQ0FBbkI7O0FBMENBLFNBQVNrVyxvQkFBVCxHQUErQjtBQUM5QixNQUFJQyxDQUFDLEdBQUd4ZCxRQUFRLENBQUNrRixhQUFULENBQXVCLFFBQXZCLENBQVI7QUFDQXNZLEdBQUMsQ0FBQ3JZLElBQUYsR0FBUyxpQkFBVDtBQUNBcVksR0FBQyxDQUFDQyxLQUFGLEdBQVUsSUFBVjs7QUFDQSxNQUFHOWMsS0FBSyxDQUFDbVAsSUFBTixDQUFXYSxTQUFYLE1BQTBCaFEsS0FBSyxDQUFDbVAsSUFBTixDQUFXb04sT0FBWCxFQUE3QixFQUFtRDtBQUNsRE0sS0FBQyxDQUFDbFksR0FBRixHQUFRM0UsS0FBSyxDQUFDK1gsWUFBTixDQUFtQkMsd0JBQW5CLENBQTRDaFksS0FBSyxDQUFDUyxTQUFOLENBQWdCK08sZ0JBQWhCLEVBQTVDLEVBQWdGdU4sdUJBQXhGO0FBQ0EsR0FGRCxNQUVPO0FBQ05GLEtBQUMsQ0FBQ2xZLEdBQUYsR0FBUTNFLEtBQUssQ0FBQytYLFlBQU4sQ0FBbUJDLHdCQUFuQixDQUE0Q2hZLEtBQUssQ0FBQ1MsU0FBTixDQUFnQitPLGdCQUFoQixFQUE1QyxFQUFnRndOLGVBQXhGO0FBQ0E7O0FBRUQsTUFBSUMsQ0FBQyxHQUFHNWQsUUFBUSxDQUFDNmQsb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBUjtBQUVBRCxHQUFDLENBQUNFLFVBQUYsQ0FBYXJCLFlBQWIsQ0FBMEJlLENBQTFCLEVBQTZCSSxDQUE3QjtBQUNBcGYsSUFBRSxDQUFDNkksU0FBSCxDQUFhLG9CQUFiLEVBQW1DLG1CQUFuQztBQUNBOztBQUVELFNBQVMwVyxTQUFULEdBQXFCO0FBQ3BCLE1BQUdoZ0IsTUFBTSxDQUFDQyxPQUFQLENBQWVGLEtBQWYsQ0FBcUI4SSxJQUF4QixFQUNDMUgsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixXQUExQjs7QUFFRSxNQUFJcEIsTUFBTSxDQUFDQyxPQUFQLENBQWUrRCxHQUFmLENBQW1CVSxNQUF2QixFQUErQjtBQUNqQzFFLFVBQU0sQ0FBQ2lFLEdBQVAsQ0FBVzVDLElBQVgsQ0FBZ0IsVUFBQzRlLGFBQUQsRUFBbUI7QUFDbEMsVUFBR2pnQixNQUFNLENBQUNDLE9BQVAsQ0FBZUYsS0FBZixDQUFxQm9FLEdBQXhCLEVBQ0NoRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQzZlLGFBQWpDO0FBRUQ5YixTQUFHLEdBQUc4YixhQUFOO0FBRUFBLG1CQUFhLENBQUNDLHlCQUFkLENBQXdDLFVBQUFDLG1CQUFtQixFQUFJO0FBQzlEQSwyQkFBbUIsQ0FBQ2xhLElBQXBCLENBQXlCLFVBQUFtVyxZQUFZLEVBQUk7QUFDeENwYyxnQkFBTSxDQUFDa0UsZUFBUCxHQUF5QmtZLFlBQXpCO0FBRUEzYixZQUFFLENBQUM2SSxTQUFILENBQWEsa0JBQWIsRUFBaUMsd0JBQWpDOztBQUVBLGNBQUl0SixNQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQWYsQ0FBcUJtUCxJQUFyQixDQUEwQm1MLHdCQUExQixFQUFKLEVBQTBEO0FBQ3pELGdCQUFHO0FBQ0ZsZCxvQkFBTSxDQUFDQyxPQUFQLENBQWUyQyxLQUFmLENBQXFCb2MsVUFBckIsQ0FBZ0NDLE1BQWhDO0FBQ0FPLGtDQUFvQjtBQUNwQixhQUhELENBSUEsT0FBTXpILEtBQU4sRUFBWTtBQUNYdFgsZ0JBQUUsQ0FBQ2tTLGNBQUgsQ0FBa0IsdUNBQWxCLEVBQTJEMVEsUUFBUSxDQUFDSCxRQUFULENBQWtCdU4sSUFBN0U7QUFDQTtBQUNEO0FBQ0QsU0FkRDtBQWVBLE9BaEJEO0FBaUJBLEtBdkJEO0FBd0JHLEdBekJELE1BeUJPO0FBQ0g1TyxNQUFFLENBQUNrUyxjQUFILENBQWtCLDRCQUFsQixFQUFnRDFRLFFBQVEsQ0FBQ0gsUUFBVCxDQUFrQnVOLElBQWxFOztBQUNBLFFBQUdyUCxNQUFNLENBQUNDLE9BQVAsQ0FBZTJDLEtBQWYsQ0FBcUJtUCxJQUFyQixDQUEwQm1MLHdCQUExQixFQUFILEVBQXlEO0FBQ3JEbGQsWUFBTSxDQUFDQyxPQUFQLENBQWUyQyxLQUFmLENBQXFCb2MsVUFBckIsQ0FBZ0NDLE1BQWhDO0FBQ0FPLDBCQUFvQjtBQUN2QjtBQUNKOztBQUNEeGYsUUFBTSxDQUFDQyxPQUFQLENBQWUyQyxLQUFmLENBQXFCdVYsWUFBckI7QUFDSDs7U0FFY2lJLFE7Ozs7Ozs7eUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MvWCxnQkFBSSxDQUFDZ1ksUUFBTCxDQUFjemQsS0FBZDtBQUNTb0IsZUFGVixHQUVnQixJQUFJdUcsNENBQUosRUFGaEI7QUFBQTtBQUFBO0FBQUEsbUJBS1F2RyxHQUFHLENBQUMyRSxJQUFKLEVBTFI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9ZeEgsbUJBQU8sQ0FBQzRXLEtBQVI7O0FBUFo7QUFTQ2lJLHFCQUFTOztBQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFVQztBQUVESSxRQUFRLEc7Ozs7Ozs7Ozs7O0FDMTdCUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkEsaUJBQWlCLG1CQUFPLENBQUMsMEVBQXFCOzs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0aW55LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgICdlcG9jYSc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdlcG9jYScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnYXV0by1lc3BvcnRlJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2F1dG8tZXNwb3J0ZScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAndm9ndWUnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAndm9ndWUnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ2dsYW1vdXInOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnZ2xhbW91cicsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnY2FzYS12b2d1ZSc6IHtcclxuICAgICdjb2RfcHJvZCc6ICdjYXNhLXZvZ3VlJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdtYXJpZS1jbGFpcmUnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnbWFyaWUtY2xhaXJlJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdjYXNhLWUtamFyZGltJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2Nhc2EtamFyZGltJyxcclxuICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ3F1ZW0tYWNvbnRlY2UnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAncXVlbScsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnZXBvY2EtbmVnb2Npb3MnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnZXBvY2EtbmVnb2Npb3MnLFxyXG4gICAgJ2lkJzogJzAwMDAnXHJcbiAgICB9LFxyXG4gICAgJ2dsb2JvLXJ1cmFsJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2dsb2JvLXJ1cmFsJyxcclxuICAgICdpZCc6ICc2Njk3J1xyXG4gICAgfSxcclxuICAgICdwZWduJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ3BlcXVlbmFzLWVtcHJlc2FzJyxcclxuICAgICdpZCc6ICcwMDAwJ1xyXG4gICAgfSxcclxuICAgICdnYWxpbGV1Jzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ2dhbGlsZXUnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ2NyZXNjZXInOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnY3Jlc2NlcicsXHJcbiAgICAnaWQnOiAnNjY5NydcclxuICAgIH0sXHJcbiAgICAnZ3EnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnZ3EnLFxyXG4gICAgJ2lkJzogJzY2OTcnXHJcbiAgICB9LFxyXG4gICAgJ21vbmV0Jzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ21vbmV0JyxcclxuICAgICdpZCc6ICc2NjE4J1xyXG4gICAgfSxcclxuICAgICdvZ2xvYm8nOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAnYmxvZ3MnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAna29ndXQnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwMycsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAnYWNlcnZvJzoge1xyXG4gICAgJ2NvZF9wcm9kJzogJ09HMDQnLFxyXG4gICAgJ2lkJzogJzM5ODEnXHJcbiAgICB9LFxyXG4gICAgJ2pvcm5hbGRpZ2l0YWwnOiB7XHJcbiAgICAnY29kX3Byb2QnOiAnT0cwMScsXHJcbiAgICAnaWQnOiAnMzk4MSdcclxuICAgIH0sXHJcbiAgICAndmFsb3InOiB7XHJcbiAgICAnY29kX3Byb2QnOiAndmFsb3JkaWdpdGFsJyxcclxuICAgICdpZCc6ICc2NjY4J1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmIge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWc7IFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZiID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNEZWZpbmVkKCkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGZicSAhPT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBpeGVsVHlwZSgpIHtcclxuICAgICAgICBpZih0aGlzLmRpc2FibGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1BpeGVsID0gKHR5cGVvZiB0aGlzLmZiLnBpeGVsLm5hbWUgIT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZmIucGl4ZWwubmFtZSA6IG51bGw7IFxyXG5cclxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZCAmJiBoYXNQaXhlbCl7XHJcbiAgICAgICAgICAgIGZicSgnaW5pdCcsICc0MTAyNzAwMzk1MjA2MzQnKTtcclxuICAgICAgICAgICAgZmJxKCd0cmFja1NpbmdsZScsICc0MTAyNzAwMzk1MjA2MzQnLCB0aGlzLmZiLnBpeGVsLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvZHVjdHNNb2R1bGUgZnJvbSAnLi9Qcm9kdWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQSAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLmRlYnVnID0gd2luZG93LnRpbnlDcHQuZGVidWcuZ2E7XHJcbiAgICAgICAgdGhpcy5Qcm9kdWN0cyA9IG5ldyBQcm9kdWN0c01vZHVsZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRHbG9iYWxWYXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyICB8fCBbXTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvciAmJiB0eXBlb2YgX2dhcSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgIHx8IFtdOyAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRzKGFjdGlvbiwgbGFiZWwsIGNhdGVnb3J5ID0gJ1BpYW5vJykge1xyXG5cclxuXHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLmdhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnbG9nLWdhLWV2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLlByb2R1Y3RzLmlzUHJvZHVjdFZhbG9yKVxyXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCAsdHJ1ZV0pO1xyXG5cdFx0XHJcblx0XHRkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ0V2ZW50b0dBUGlhbm8nLCAnZXZlbnRvR0FDYXRlZ29yaWEnOiBjYXRlZ29yeSwgJ2V2ZW50b0dBQWNhbyc6IGFjdGlvbiwgJ2V2ZW50b0dBUm90dWxvJzpsYWJlbH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRFdmVudHNFcnJvcihhY3Rpb24sIGxhYmVsKSB7XHJcblx0XHRpZiAodGhpcy5Qcm9kdWN0cy5pc1Byb2R1Y3RWYWxvcilcclxuXHRcdFx0X2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnUGlhbm8gRXJybycsIGFjdGlvbiwgbGFiZWwsICx0cnVlXSk7XHJcblxyXG5cdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vIEVycm8nLCAnZXZlbnRvR0FBY2FvJzogYWN0aW9uLCAnZXZlbnRvR0FSb3R1bG8nOmxhYmVsfSk7XHJcblx0fVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xyXG5cclxuICAgIHN0YXRpYyBpc0RlZmluZWQocHJvcCkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHByb3AgIT09ICd1bmRlZmluZWQnKSA/IHRydWU6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb29raWUoY19uYW1lLCB2YWx1ZSwgZXhwaXJlZGF5cyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZXhkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZSA/IGxvY2F0aW9uLmhvc3RuYW1lIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIWhvc3RuYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV4ZGF0ZS5zZXREYXRlKGV4ZGF0ZS5nZXREYXRlKCkgKyBleHBpcmVkYXlzKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArZXNjYXBlKHZhbHVlKSArICgoZXhwaXJlZGF5cykgPyBcIlwiIDogXCI7ZXhwaXJlcz1cIiArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKVxyXG4gICAgICAgICsgXCI7IHBhdGg9LztcIiArIFwiZG9tYWluPS5cIiArIGhvc3RuYW1lLnNwbGl0KCcuJykucmV2ZXJzZSgpWzFdICsgXCIuXCIgKyBob3N0bmFtZS5zcGxpdCgnLicpLnJldmVyc2UoKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSAoZG9jdW1lbnQuY29va2llKSA/IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKG5hbWUrJz0oW147XSspJykpIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvb2tpZVRpbnkgPSBtYXRjaCA/IHVuZXNjYXBlKG1hdGNoWzFdLnRvU3RyaW5nKCkpIDogXCJcIjtcclxuICAgICAgICByZXR1cm4gY29va2llVGlueTtcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlhbm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHdpbmRvdy50aW55Q3B0LmRlYnVnOyBcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwZXJpZW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0RlZmluZWQoKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy50aW55Q3B0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8gIT09ICd1bmRlZmluZWQnKSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB3aW5kb3cudGlueUNwdC5QaWFubztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV4cGVyaWVuY2UoKSB7ICBcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSAnJzsgICBcclxuICAgICAgICB3aW5kb3cuUGlhbm8uZXhwZXJpZW5jZSA9IHt9OyAgXHJcbiAgICAgICAgIFxyXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKVxyXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7cmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWF9IC0gJHt3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFub31gIDogcmVncmFzVGlueS5ub21lRXhwZXJpZW5jaWE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5ub21lRXhwZXJpZW5jaWEpIFxyXG5cdFx0XHRleHBlcmllbmNlTmFtZSA9IHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vID8gYCR7d2luZG93Lm5vbWVFeHBlcmllbmNpYX0gLSAke3dpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vfWAgOiB3aW5kb3cubm9tZUV4cGVyaWVuY2lhO1xyXG4gICAgICAgXHJcbiAgICAgICAgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSA9IGV4cGVyaWVuY2VOYW1lO1xyXG5cdH1cclxuXHJcbiAgICByZXNldFV0cCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzRGVmaW5lZClcclxuICAgICAgICAgICAgSGVscGVycy5zZXRDb29raWUodGhpcy5jb250ZW50LnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgJycsIC0xKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjdHNJZCBmcm9tICcuLi9tb2Nrcy9wcm9kdWN0cy9wcm9kdWN0cy1pZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gKHR5cGVvZiB3aW5kb3cubm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdsb2JhbCgpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBQcm9kdWN0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gaWQ6IHRoaXMucHJvZHVjdElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy50aW55Q3B0ID0gKHdpbmRvdy50aW55Q3B0KSA/ICBPYmplY3QuYXNzaWduKHByb2R1Y3RzU2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IHByb2R1Y3RzU2V0dGluZ3M7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgaXNQcm9kdWN0VmFsb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb2R1Y3ROYW1lICYmIHRoaXMucHJvZHVjdE5hbWUgPT09ICd2YWxvcicpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9kdWN0SWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICggKHR5cGVvZiBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdICE9PSAgJ3VuZGVmaW5lZCcpIFxyXG4gICAgICAgICYmICh0eXBlb2YgcHJvZHVjdHNJZFt0aGlzLnByb2R1Y3ROYW1lXS5pZCAhPT0gICd1bmRlZmluZWQnKSApXHJcbiAgICAgICAgPyBwcm9kdWN0c0lkW3RoaXMucHJvZHVjdE5hbWVdLmlkIDogbnVsbDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL0hlbHBlcnMnOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3ZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB3aW5kb3cuU1dHID0gd2luZG93LlNXRyB8fCBbXTsgLy9UT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGlzIHZhcmlhYmxlIGV4aXN0c1xyXG4gICAgICAgIHdpbmRvdy5zd2dFbnRpdGxlbWVudHMgPSB3aW5kb3cuc3dnRW50aXRsZW1lbnRzIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IChIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpID8gd2luZG93LnRpbnlDcHQuZGVidWcuc3dnIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhbFByb2R1Y3RQaWFubyA9ICh0eXBlb2Ygbm9tZVByb2R1dG9QaWFubyAhPT0gJ3VuZGVmaW5lZCcpID8gbm9tZVByb2R1dG9QaWFubyA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYXNQcm9kdWN0SlNPTiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdEpTT04gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWxIZWFkID0gZG9jdW1lbnQuaGVhZDsgXHJcblxyXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsU1dHKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRGVmaW5lZCgpIHsgXHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSA/IHRydWUgOiBmYWxzZTsgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2xvYmFsU1dHKCkge1xyXG4gICAgICAgIGlmKCFIZWxwZXJzLmlzRGVmaW5lZCh3aW5kb3cudGlueUNwdCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnID0ge1xyXG4gICAgICAgICAgICBnbG9iYWw6ICh0eXBlb2Ygc3dnICE9PSAndW5kZWZpbmVkJykgPyBzd2cgOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVdG1zKGVsZW1lbnQpIHsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xyXG4gICAgICAgIGNvbnN0IHV0bXNQcm9wcyA9ICh0eXBlb2Ygd2luZG93LmdsYlBheXdhbGwuc3dnICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmdsYlBheXdhbGwuc3dnLnV0bXMgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdy5nbGJQYXl3YWxsLnN3Zy51dG1zIDogbnVsbDsgXHJcbiAgICAgICAgbGV0IHN3Z1Byb2R1Y3RJZCA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaChlbGVtZW50LmRhdGFzZXQuYXJlYSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOiBzd2dQcm9kdWN0SWQgPSB3aW5kb3cuZ2xiUGF5d2FsbC50b3BTd2dQcm9kdWN0aWQ7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0Jzogc3dnUHJvZHVjdElkID0gd2luZG93LmdsYlBheXdhbGwubGVmdFN3Z1Byb2R1Y3RpZDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzogc3dnUHJvZHVjdElkID0gd2luZG93LmdsYlBheXdhbGwucmlnaHRTd2dQcm9kdWN0aWQ7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHV0bXNQcm9wcy5mb3JFYWNoKChpdGVtKSA9PiB7IFxyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICB1cmxQYXJhbXMuc2V0KGB1dG1fJHtuYW1lfWAsIHZhbHVlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2ctbWV0aG9kJywgJ3NldFV0bXMnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgdXRtc1Byb3BzKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nLW1ldGhvZC1zZXRVdG1zJywgbG9jYXRpb24pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMuaXNEZWZpbmVkKSB8fCAhdXRtc1Byb3BzICkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHN3Z1Byb2R1Y3RJZClcclxuICAgICAgICAgICAgd2luZG93LnRpbnlDcHQuU3dnLmdsb2JhbC5zdWJzY3JpYmUoc3dnUHJvZHVjdElkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRQcm9kdWN0cygpIHtcclxuICAgICAgICBsZXQgdXJsID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uICBcclxuICAgICAgICA/ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF83YjBhNmRmNDk4OTU0NTlmYmFmZTQ5YTk2ZmNiNWJiZi9zd2cvcHJvZC9wcm9kdWN0cy5qc29uJyBcclxuICAgICAgICA6ICdodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF83YjBhNmRmNDk4OTU0NTlmYmFmZTQ5YTk2ZmNiNWJiZi9zd2cvZGV2L3Byb2R1Y3RzLmpzb24nO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5kZWJ1Zy5zd2cpXHJcbiAgICAgICAgdXJsID0gJ2FwcC9tb2Nrcy9zd2cvcHJvZHVjdHMuanNvbidcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0UHJvZHVjdCgpIHsgXHJcbiAgICAgICAgaWYoIXRoaXMubG9jYWxQcm9kdWN0UGlhbm8pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5waWFub1Byb2R1Y3ROYW1lID09PSB0aGlzLmxvY2FsUHJvZHVjdFBpYW5vIClbMF07XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW1vdmVQcm9wZXJ0aWVzKG9iaikgeyBcclxuICAgICAgICBjb25zdCBwcm9wc1RvUmVtb3ZlID0gWydwcm9kdWN0TmFtZScsICdwaWFub1Byb2R1Y3ROYW1lJywgJ29mZmVyJ107XHJcbiAgICAgICAgY29uc3QgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcclxuXHJcbiAgICAgICAgcHJvcHNUb1JlbW92ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgbmV3T2JqW2VsZW1lbnRdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG1hcmt1cFRlbXBsYXRlKCkgeyBcclxuICAgICAgICBjb25zdCBwcm9kdWN0SlNPTiA9ICBhd2FpdCB0aGlzLnJlbW92ZVByb3BlcnRpZXMoYXdhaXQgdGhpcy5nZXRQcm9kdWN0KCkpIHx8IG51bGw7IFxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBPYmplY3Qua2V5cyhwcm9kdWN0SlNPTikubGVuZ3RoID8gSlNPTi5zdHJpbmdpZnkocHJvZHVjdEpTT04pIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYoIXByb2R1Y3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzUHJvZHVjdEpTT04gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5kZWJ1ZylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnbG9nLVNXRy1Qcm9kdWN0JzogcHJvZHVjdH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SlNPTiA9IGAkeyBwcm9kdWN0IH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRNYXJrdXAoKSB7IFxyXG4gICAgICAgIGF3YWl0IHRoaXMubWFya3VwVGVtcGxhdGUoKTtcclxuICAgICAgICBpZighdGhpcy5wcm9kdWN0SlNPTikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2FwcGxpY2F0aW9uL2xkK2pzb24nO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5wcm9kdWN0SlNPTjtcclxuICAgICAgICB0aGlzLmVsSGVhZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN3Z1NjcmlwdCgpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgZWxlbWVudC5zcmMgPSAnaHR0cHM6Ly9uZXdzLmdvb2dsZS5jb20vc3dnL2pzL3YxL3N3Zy5qcyc7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGRlYmFyYW5TY3JpcHQoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGNvbnN0IHVybFByb2QgPSAnaHR0cHM6Ly9zMy5nbGJpbWcuY29tL3YxL0FVVEhfYzEwYWU4MTljNTY4NDYwYmI0ZWMxN2MwYThlYzUyNjcvYWxkZWJhcmFuL2pzL2J1bmRsZS5qcyc7XHJcbiAgICAgICAgY29uc3QgdXJsU3RnID0gJ2h0dHBzOi8vczMuZ2xiaW1nLmNvbS92MS9BVVRIX2FkZGM1ZThmMzE2ZjQ4ZWE5MTgxYWYzNzE2MGIyMmI0L2FsZGViYXJhbi9qcy9idW5kbGUuanMnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNyYyA9IHdpbmRvdy50aW55Q3B0LmlzUHJvZHVjdGlvbiA/IHVybFByb2QgOiB1cmxTdGc7XHJcbiAgICAgICAgdGhpcy5lbEhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0U1dHKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwOyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zd2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsID0gd2luZG93LnN3ZztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy50aW55Q3B0LlN3Zy5nbG9iYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT09IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdUaGVyZSBpc25cXCd0IHdpbmRvdy5zd2cnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmxvY2FsUHJvZHVjdFBpYW5vKSByZXR1cm47XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRNYXJrdXAoKTsgIFxyXG4gICAgICAgICBcclxuICAgICAgICBpZighdGhpcy5oYXNQcm9kdWN0SlNPTikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3dnU2NyaXB0KCk7IFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0QWxkZWJhcmFuU2NyaXB0KCk7ICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy50ZXN0U1dHKCk7ICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9kdWN0c01vZHVsZSBmcm9tICcuL1Byb2R1Y3RzJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55ICB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMuUHJvZHVjdHMgPSBuZXcgUHJvZHVjdHNNb2R1bGUoKTtcclxuICAgICAgICB3aW5kb3cuaGFzUGF5d2FsbCA9IHdpbmRvdy5oYXNQYXl3YWxsIHx8IG51bGw7XHJcbiAgICAgICAgd2luZG93LnRwID0gd2luZG93LnRwIHx8IFtdO1xyXG4gICAgICAgIHdpbmRvdy5QaWFubyA9IHdpbmRvdy5QaWFubyB8fCB7fTtcclxuICAgICAgICB3aW5kb3cuUGF5d2FsbEFuYWx5dGljcyA9IHdpbmRvdy5QYXl3YWxsQW5hbHl0aWNzIHx8IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0R2xvYmFsVGlueSgpO1xyXG4gICAgICAgIHRoaXMuUHJvZHVjdHMuc2V0R2xvYmFsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2xvYmFsVGlueSgpIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGRlYnVnOiB7XHJcbiAgICAgICAgICAgICAgICB0aW55OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBheXdhbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3dnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGdhOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc1Byb2R1Y3Rpb246ICh3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cudGlueUNwdCA9ICh3aW5kb3cudGlueUNwdCkgPyAgT2JqZWN0LmFzc2lnbihkZWZhdWx0U2V0dGluZ3MsIHdpbmRvdy50aW55Q3B0KSA6IGRlZmF1bHRTZXR0aW5nczsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFBpYW5vKG9iaikge1xyXG4gICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vID0gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vSGVscGVycyc7XHJcbmltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XHJcbmltcG9ydCBHQU1vZHVsZSBmcm9tICcuLi9HQSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXl3YWxsR0FNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5QaWFubyA9IG5ldyBQaWFub01vZHVsZSgpO1xyXG4gICAgdGhpcy5HQSA9IG5ldyBHQU1vZHVsZSgpOyBcclxuXHJcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgIHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXRyaWNzID0ge1xyXG4gICAgICAgIHBheXdhbGw6IHt9LCBcclxuICAgICAgICBmYjoge1xyXG4gICAgICAgICAgICBwaXhlbDoge31cclxuICAgICAgICB9IFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBheXdhbGxUeXBlKCk7XHJcbiAgfVxyXG5cclxuICBwYXl3YWxsTG9hZCgpIHsgXHJcbiAgICBpZighdGhpcy5QaWFuby5pc0RlZmluZWQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBfUGlhbm8gPSB0aGlzLlBpYW5vLmNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5HQS5zZXRFdmVudHMoJ0V4aWJpY2FvIFJlZ2lzdGVyJywgd2luZG93LlBpYW5vLmV4cGVyaWVuY2UubmFtZSk7XHJcbiAgICBIZWxwZXJzLnNldENvb2tpZShfUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgsIHRydWUsIDEpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlcihlbGVtZW50KSB7IFxyXG4gICAgaWYodGhpcy5kaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNldFV0cCA9IGVsZW1lbnQuZGF0YXNldC5nYVJlc2V0dXRwIHx8IG51bGw7XHJcbiAgICBjb25zdCBpbWFnZVRvcCA9IGVsZW1lbnQuZGF0YXNldC5nYUltYWdlUG9zaXRpb247XHJcbiAgICBjb25zdCBsYWJlbCA9IChpbWFnZVRvcCA9PT0gJ3RvcCcpID8gZWxlbWVudC5kYXRhc2V0LmdhTGFiZWwgKyB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA6IGVsZW1lbnQuZGF0YXNldC5nYUxhYmVsO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV2ZW50OiAnRXZlbnRvR0EnLFxyXG4gICAgICBldmVudG9HQUNhdGVnb3JpYTogdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSxcclxuICAgICAgZXZlbnRvR0FBY2FvOiBlbGVtZW50LmRhdGFzZXQuZ2FBY3Rpb24gfHwgYWN0aW9uLFxyXG4gICAgICBldmVudG9HQVJvdHVsbzogbGFiZWwsXHJcbiAgICAgIGV2ZW50b0dBVmFsb3I6IDAsXHJcbiAgICAgIGV2ZW50b0dBSW50ZXJhY2FvOiBmYWxzZSxcclxuICAgIH07IFxyXG5cclxuICAgIGlmIChyZXNldFV0cClcclxuICAgICAgICB0aGlzLlBpYW5vLnJlc2V0VXRwKCk7XHJcbiBcclxuICAgIHRoaXMuc2V0RGF0YWxheWVyKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGF5d2FsbFR5cGUoKSB7XHJcbiAgICBjb25zdCB0eXBlID0gKCAodHlwZW9mIHdpbmRvdy50aW55Q3B0LlBpYW5vICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwgIT09ICd1bmRlZmluZWQnKSAmJiB3aW5kb3cudGlueUNwdC5QaWFuby50eXBlUGF5d2FsbCkgXHJcbiAgICAgID8gd2luZG93LnRpbnlDcHQuUGlhbm8udHlwZVBheXdhbGwudG9Mb3dlckNhc2UoKSBcclxuICAgICAgOiAncGF5d2FsbCc7XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5uYW1lID0gJ1JlZ2lzdGVyIGNvbXVtJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdDYWRhc3RyZS1zZSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld1JlZ2lzdGVyV2FsbCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2V4Y2x1c2l2byc6XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdSZWdpc3RlciBleGNsdXNpdm8nO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5wYXl3YWxsLmxhYmVsID0gJ0Fzc2luZSBhZ29yYSc7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLmZiLnBpeGVsLm5hbWUgPSAnVmlld0xvZ2luRXhjbHVzaXZvJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGF5d2FsbCc6XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzLnBheXdhbGwubmFtZSA9ICdwYXl3YWxsJztcclxuICAgICAgICB0aGlzLm1ldHJpY3MucGF5d2FsbC5sYWJlbCA9ICdBc3NpbmUgYWdvcmEnO1xyXG4gICAgICAgIHRoaXMubWV0cmljcy5mYi5waXhlbC5uYW1lID0gJ1ZpZXdQYXl3YWxsRXhjbHVzaXZvJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERhdGFsYXllcihkYXRhID0ge30pIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgZGF0YUxheWVyLnB1c2goZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQaWFub01vZHVsZSBmcm9tICcuLi9QaWFubyc7XHJcbmltcG9ydCBQYXl3YWxsR0FNb2R1bGUgZnJvbSAnLi9QYXl3YWxsLWdhJztcclxuaW1wb3J0IFN3Z01vZHVsZSBmcm9tICcuLi9Td2cnO1xyXG5pbXBvcnQgRmJNb2R1bGUgZnJvbSAnLi4vRkInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF5d2FsbENwdCAge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHR0aGlzLlBpYW5vID0gbmV3IFBpYW5vTW9kdWxlKCk7XHJcblx0dGhpcy5HQSA9IG5ldyBQYXl3YWxsR0FNb2R1bGUoKTtcclxuXHR0aGlzLlNXRyA9IG5ldyBTd2dNb2R1bGUoKTtcclxuXHR0aGlzLkZCID0gbmV3IEZiTW9kdWxlKHRoaXMuR0EubWV0cmljcy5mYik7XHJcblxyXG5cdHRoaXMuZGVidWcgPSB3aW5kb3cudGlueUNwdC5kZWJ1Zy5wYXl3YWxsO1xyXG5cdHRoaXMuZG9tYWluID0gd2luZG93LnRpbnlDcHQuaXNQcm9kdWN0aW9uID8gJ2h0dHBzOi8vbG9naW4uZ2xvYm8uY29tLycgOiAnaHR0cHM6Ly9sb2dpbi5xYS5nbG9ib2kuY29tLyc7XHRcclxuXHR0aGlzLnNldFRlbXBsYXRlU2V0dGluZ3MoKCkgPT4ge1xyXG5cdFx0dGhpcy5pbml0KCk7IFxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuUGF5d2FsbENwdCA9IHRoaXM7XHJcblxyXG5cdHdpbmRvdy50aW55Q3B0LlBheXdhbGwgPSB7XHJcblx0XHRkb21haW46IHRoaXMuZG9tYWluLFxyXG5cdFx0R0E6IHRoaXMuR0EubWV0cmljcyxcclxuXHR9O1xyXG4gIH1cclxuXHJcbiAgc2V0VGVtcGxhdGVTZXR0aW5ncyhjYWxsYmFjaykge1xyXG5cdFx0bGV0IHRlbXBsYXRlU2V0dGluZ3MgPSB7XHJcblx0XHRcdHRlbXBsYXRlOiAnZGVmYXVsdCcsXHJcblx0XHRcdGFzc2V0c1BhdGg6ICcnLFxyXG5cdFx0XHRkaXNwbGF5OiBudWxsLFxyXG5cdFx0XHRwcm9kdWN0Q2xhc3M6IHR5cGVvZiBub21lUHJvZHV0b1BpYW5vICE9PSAndW5kZWZpbmVkJyA/IGBwYXl3YWxsLWNwdC0ke25vbWVQcm9kdXRvUGlhbm99YCA6ICdwYXl3YWxsLWNwdC1vZ2xvYm8nLFxyXG5cdFx0XHR0aXRsZTogJ0Vzc2UgY29udGXDumRvIMOpIG8gdMOtdHVsby4nLFxyXG5cdFx0XHR0YXJnZXRCbGFuazogdHJ1ZSxcclxuXHRcdFx0dG9wTW9iaTogJycsXHJcblx0XHRcdHRvcERlc2s6ICcnLFxyXG5cdFx0XHR0b3BMaW5rOiAnJyxcclxuXHRcdFx0bGVmdE1vYmk6ICcnLFxyXG5cdFx0XHRsZWZ0RGVzazogJycsXHJcblx0XHRcdGxlZnRMaW5rOiAnJyxcclxuXHRcdFx0cmlnaHRNb2JpOiAnJyxcclxuXHRcdFx0cmlnaHREZXNrOiAnJyxcclxuXHRcdFx0cmlnaHRMaW5rOiAnJ1xyXG5cdFx0fTtcclxuXHJcblx0XHR0ZW1wbGF0ZVNldHRpbmdzLmhpZGVMb2dpbkFyZWEgPSBmYWxzZTtcclxuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5UZXh0ID0gJ0Zhw6dhIGxvZ2luJztcclxuXHRcdHRlbXBsYXRlU2V0dGluZ3MubG9naW5QcmVUZXh0ID0gJ0rDoSBwb3NzdWkgY2FkYXN0cm8/JztcclxuXHRcdFxyXG5cdFx0d2luZG93LmdsYlBheXdhbGwgPSAod2luZG93LmdsYlBheXdhbGwpID8gIE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlU2V0dGluZ3MsIHdpbmRvdy5nbGJQYXl3YWxsKSA6IHRlbXBsYXRlU2V0dGluZ3M7IFxyXG5cdFx0d2luZG93LmdsYlBheXdhbGwubG9naW5UYWcgPSBgJHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblByZVRleHR9IDxhIGhyZWY9XCIke3RoaXMuZ2V0VXJsTG9naW5SZWdpc3RlcigpfVwiIGRhdGEtaXMtbG9naW49XCJ0cnVlXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDIgLSBGYcOnYSBsb2dpblwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJmYWxzZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIgJHt3aW5kb3cuZ2xiUGF5d2FsbC50YXJnZXRCbGFua30gXCI+JHt3aW5kb3cuZ2xiUGF5d2FsbC5sb2dpblRleHR9PC9hPmA7XHJcblxyXG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwuaGlkZUxvZ2luQXJlYSlcclxuXHRcdFx0dGhpcy5jbGVhckxvZ2luQXJlYSgpO1xyXG5cclxuXHRcdGlmKHRoaXMuZGVidWcgKSBcclxuXHRcdFx0dGhpcy5zZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKTtcclxuXHRcdFxyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyTG9naW5BcmVhKCkge1xyXG5cdFx0aWYod2luZG93LmdsYlBheXdhbGwpIHsgXHJcblx0XHRcdHdpbmRvdy5nbGJQYXl3YWxsLmxvZ2luVGFnID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXREZWJ1Z1RlbXBsYXRlU2V0dGluZ3MoKSB7XHJcblx0XHRsZXQgb2JqID0ge307XHJcblx0XHRvYmoudG9wTW9iaSA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDE1MCc7XHJcblx0XHRvYmoudG9wRGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODA0eDEyOCc7XHJcblx0XHRvYmoudG9wTGluayA9ICdodHRwczovL2dvb2dsZS5jb20/bDEnO1xyXG5cdFx0b2JqLmxlZnRNb2JpID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4NTAwJztcclxuXHRcdG9iai5sZWZ0RGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAyeDUxNSc7XHJcblx0XHRvYmoubGVmdExpbmsgPSAnaHR0cHM6Ly9nb29nbGUuY29tP2wyJztcclxuXHRcdG9iai5yaWdodE1vYmkgPSAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHg1MDAnO1xyXG5cdFx0b2JqLnJpZ2h0RGVzayA9ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDAyeDUxNSc7XHJcblx0XHRvYmoucmlnaHRMaW5rID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbT9sMyc7XHJcblxyXG5cdFx0d2luZG93LmdsYlBheXdhbGwgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuZ2xiUGF5d2FsbCwgb2JqKTtcclxuXHR9XHJcbiBcclxuICBib2R5QWRqdXN0KCkge1xyXG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICdoaWRkZW4nLCAnaW1wb3J0YW50Jyk7XHJcblx0dGhpcy5lbEJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2ZpeGVkJywgJ2ltcG9ydGFudCcpO1xyXG5cdHRoaXMuZWxCb2R5LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsICcxMDAlJywgJ2ltcG9ydGFudCcpO1xyXG4gIH1cclxuXHJcbiAgc2V0RWxXcmFwcGVyKCkge1xyXG5cdHRoaXMuZWxDcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5d2FsbC1jcHQnKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUVsZW1lbnRzKCkge1xyXG5cdHRoaXMuc2V0RWxXcmFwcGVyKCk7XHJcblxyXG5cdGlmKHRoaXMuZWxDcHQpXHJcblx0XHR0aGlzLmVsQ3B0LnJlbW92ZSgpO1xyXG5cclxuXHRjb25zdCBlbFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb3RlY3RlZC1jb250ZW50LCAjaW5mb2FydGUtbWFpbi1jb250ZW50Jyk7XHJcblxyXG5cdGVsVG9SZW1vdmUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHQgIGVsZW1lbnQucmVtb3ZlKCk7XHJcblx0fSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUZW1wbGF0ZSgpIHtcclxuXHR0aGlzLmVsQm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICB0aGlzLmJvZHlBZGp1c3QoKTtcclxuICAgIHRoaXMucmVtb3ZlRWxlbWVudHMoKTtcclxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMuY3NzTWluaWZpZWQpOyBcclxuXHR0aGlzLmVsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpOyBcclxuXHR0aGlzLmFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKTtcdFxyXG4gICAgXHJcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuR0EucGF5d2FsbExvYWQoKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZVRlbXBsYXRlU2V0dGluZ3MoKSB7XHJcblx0dGhpcy5zZXRFbFdyYXBwZXIoKTtcclxuXHR0aGlzLmVsQ3B0V3JhcCA9IHRoaXMuZWxDcHQucXVlcnlTZWxlY3RvcignLnBheXdhbGwtY3B0LXdyYXAnKTtcclxuXHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRjb25zdCBlbEJvZHlIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyA0O1xyXG5cdFx0Y29uc3QgZWxDcHRXcmFwSGVpZ2h0ID0gdGhpcy5lbENwdFdyYXAub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3AgPSAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSBcclxuICAgICAgICA/IE1hdGguYWJzKCBlbEJvZHlIZWlnaHQvMiApXHJcbiAgICAgICAgOiBNYXRoLmFicyggZWxCb2R5SGVpZ2h0LzIgKTtcclxuXHRcdGNvbnN0IHRvcFdpdGhGdWxsRWxlbWVudCA9IChlbEJvZHlIZWlnaHQgLSBlbENwdFdyYXBIZWlnaHQpO1xyXG5cclxuXHRcdHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7Y3VycmVudFRvcH1weGA7XHJcblx0XHR0aGlzLmVsQ3B0LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cdFx0dGhpcy5lbENwdC5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTk5O1xyXG5cclxuXHRcdHRoaXMuZXZ0V2hlZWwoY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KTtcclxuXHRcdHRoaXMuZXZ0VG91Y2goY3VycmVudFRvcCwgdG9wV2l0aEZ1bGxFbGVtZW50KTtcclxuXHRcdHRoaXMuYWN0aXZlRXZlbnRzKCk7XHJcblxyXG5cdFx0dGhpcy5GQi5zZXRQaXhlbFR5cGUoKTtcclxuXHR9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUV2ZW50cygpIHtcclxuXHRjb25zdCBjbGlja1RhcmdldHMgPSB0aGlzLmVsQ3B0V3JhcC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XHJcblxyXG5cdGNsaWNrVGFyZ2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkgeyBcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgICAgICBjb25zdCBpc0xvZ2luID0gQm9vbGVhbihlbGVtZW50LmRhdGFzZXQuaXNMb2dpbikgfHwgZmFsc2U7XHJcblx0XHRcdGNvbnN0IHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgZmFsc2UgOyBcclxuXHRcdFx0Y29uc3QgaXNVcmxTd2cgPSAodXJsKSA/IHVybC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdvZmVydGFzd2cnKSA6IGZhbHNlO1xyXG5cdFx0XHRjb25zdCBub3RCbGFuayA9IGVsZW1lbnQuZGF0YXNldC5ocmVmVGFyZ2V0IHx8IHRydWU7IFxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5HQS50cmlnZ2VyKGVsZW1lbnQpOyBcclxuXHJcblx0XHRcdGlmKCFpc0xvZ2luICYmIGlzVXJsU3dnKVxyXG5cdFx0XHRcdHRoaXMuU1dHLnNldFV0bXMoZWxlbWVudCk7ICBcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmwgJiYgIWlzVXJsU3dnKSB7IFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RCbGFuayA/ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybCkgOiB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9KTtcclxuICB9XHJcblxyXG4gIGV2dFdoZWVsKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xyXG5cdGxldCBuZXd0b3AgPSBjdXJyZW50VG9wO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdCd3aGVlbCcsXHJcblx0XHRmdW5jdGlvbihldnQpIHsgXHJcblx0XHQgIGNvbnN0IHN0ZXAgPSBjdXJyZW50VG9wIC8gMTAwO1xyXG5cdFx0ICBjb25zdCBtdWx0aXBsaWVyID0gMjA7XHJcblxyXG5cdFx0ICBpZiAoZXZ0LmRlbHRhWSA+PSAxKSB7XHJcblx0XHRcdGNvbnN0IGVsVG9wID0gbmV3dG9wIC0gc3RlcCAqIG11bHRpcGxpZXI7IFxyXG5cdFx0XHRuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xyXG4gIFxyXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcblx0XHQgIH1cclxuICBcclxuXHRcdCAgaWYgKGV2dC5kZWx0YVkgPD0gLTEpIHtcclxuXHRcdFx0Y29uc3QgZWxUb3AgPSBuZXd0b3AgKyBzdGVwICogbXVsdGlwbGllcjtcclxuXHRcdFx0bmV3dG9wID0gZWxUb3AgPiBjdXJyZW50VG9wID8gY3VycmVudFRvcCA6IGVsVG9wO1xyXG4gIFxyXG5cdFx0XHR0aGlzLmVsQ3B0LnN0eWxlLnRvcCA9IGAke25ld3RvcH1weGA7XHJcblx0XHQgIH1cclxuXHRcdH0uYmluZCh0aGlzKVxyXG5cdCAgKTtcclxuICB9XHJcblxyXG4gIGV2dFRvdWNoKGN1cnJlbnRUb3AsIHRvcFdpdGhGdWxsRWxlbWVudCkge1xyXG4gICAgbGV0IG5ld3RvcCA9IGN1cnJlbnRUb3A7XHJcbiAgICBsZXQgdG91Y2hzdGFydFkgPSAwO1xyXG4gICAgbGV0IHRvdWNoZW5kWSA9IDA7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZ0KSB7IFxyXG4gICAgICAgIHRvdWNoc3RhcnRZID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldnQpIHsgXHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDIwO1xyXG4gICAgICAgIHRvdWNoZW5kWSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZO1xyXG5cclxuICAgICAgICBpZiAodG91Y2hlbmRZIDwgdG91Y2hzdGFydFkpIHsgXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyh0b3VjaHN0YXJ0WSkgLSBNYXRoLmFicyh0b3VjaGVuZFkpO1xyXG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IG5ld3RvcCAtIGRpZmY7IFxyXG4gICAgICAgICAgICBuZXd0b3AgPSBlbFRvcCA8IHRvcFdpdGhGdWxsRWxlbWVudCA/IHRvcFdpdGhGdWxsRWxlbWVudCA6IGVsVG9wO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbENwdC5zdHlsZS50b3AgPSBgJHtuZXd0b3B9cHhgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvdWNoZW5kWSA+IHRvdWNoc3RhcnRZKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaGVuZFkgLSB0b3VjaHN0YXJ0WTtcclxuICAgICAgICAgICAgY29uc3QgZWxUb3AgPSBuZXd0b3AgKyBkaWZmOyBcclxuXHRcdCAgICBuZXd0b3AgPSBlbFRvcCA+IGN1cnJlbnRUb3AgPyBjdXJyZW50VG9wIDogZWxUb3A7XHJcblxyXG5cdFx0ICAgIHRoaXMuZWxDcHQuc3R5bGUudG9wID0gYCR7bmV3dG9wfXB4YDtcclxuICAgICAgICB9XHJcblx0fS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGdldFVybExvZ2luUmVnaXN0ZXIodHlwZSA9ICcnKSB7XHJcblx0Y29uc3QgdXJsVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8gPSB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PT0gJ3ByZCcgPyAnaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCcgOiAnaHR0cHM6Ly9hc3NpbmF0dXJhLmdsb2Jvc3RnLmdsb2JvaS5jb20vVmFsaWRhVXN1YXJpb0JhcnJhbWVudG8uaHRtbCc7XHJcblx0Y29uc3QgdXJpID0gbG9jYXRpb24uaHJlZjtcclxuXHRjb25zdCBzZXJ2aWNlSWQgPSB3aW5kb3cudGlueUNwdC5QaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgfHwgbnVsbDtcclxuXHRsZXQgc3RyID0gJyc7XHJcblx0bGV0IHVybFJldHVybiA9ICcnO1xyXG5cclxuXHRpZighdGhpcy5kZWJ1ZyAmJiB0aGlzLlBpYW5vLmlzRGVmaW5lZCkge1xyXG5cdFx0dXJsUmV0dXJuID0gZW5jb2RlVVJJQ29tcG9uZW50KFxyXG5cdFx0XHR1cmxWYWxpZGFVc3VhcmlvQmFycmFtZW50byArICc/Y29kaWdvUHJvZHV0bz0nICsgIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Q29kaWdvUHJvZHV0bygpIFxyXG5cdFx0XHQrICcmc2VydmljZUlkPScgKyBzZXJ2aWNlSWRcclxuXHRcdFx0KyAnJmFtYmllbnRlVXRpbGl6YWRvPScgKyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFub1xyXG5cdFx0XHQrICcmbm9tZVByb2R1dG89JyArIHRoaXMuUGlhbm8uY29udGVudC52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKVxyXG5cdFx0XHQrICcmdXJsUmV0b3Jubz0nICsgdXJpXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmKHR5cGUgPT09ICdyZWdpc3RlcicpIHtcclxuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59Y2FkYXN0cm8vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyID0gYCR7dGhpcy5kb21haW59bG9naW4vJHtzZXJ2aWNlSWR9P3VybD0ke3VybFJldHVybn1gO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0cjtcclxufVxyXG5cclxuICBnZXQgdGVtcGxhdGVWYXJzKCkge1xyXG5cdHJldHVybiB3aW5kb3cuZ2xiUGF5d2FsbDtcclxuICB9XHJcblxyXG4gIGdldCB0ZW1wbGF0ZSgpIHsgXHJcblx0Y29uc3QgdGVtcGxhdGUgPSBgXHJcblx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQgJHt0aGlzLnRlbXBsYXRlVmFycy5wcm9kdWN0Q2xhc3N9XCI+IFxyXG5cdFx0PGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWRcIj5cclxuXHRcdFx0JHt0aGlzLnRlbXBsYXRlVmFycy50aXRsZX1cclxuXHRcdDwvZGl2PlxyXG5cdFx0ICA8ZGl2IGNsYXNzPVwicGF5d2FsbC1jcHQtd3JhcF9fdG9wXCI+XHJcblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTGlua31cIiBkYXRhLWFyZWE9XCJ0b3BcIiBkYXRhLWdhLWltYWdlLXBvc2l0aW9uPVwidG9wXCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDEgLVwiIGRhdGEtZ2EtcmVzZXRVdHA9XCJ0cnVlXCIgZGF0YS1ocmVmLXRhcmdldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudGFyZ2V0Qmxhbmt9XCI+XHJcblx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHQ8c291cmNlIHNyY3NldD1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMudG9wTW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50b3BEZXNrfVwiIG1lZGlhPVwiKG1pbi13aWR0aDogMTAyNHB4KVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRvcE1vYml9XCIgLz5cclxuXHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdDwvYT5cclxuXHRcdCAgPC9kaXY+XHJcblx0XHQgIDxkaXYgY2xhc3M9XCJwYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlciAke3dpbmRvdy5nbGJQYXl3YWxsLmhpZGVMb2dpbkFyZWEgPyAnaXMtaGlkZScgOiAnJ31cIj5cclxuXHRcdCAgXHQke3RoaXMudGVtcGxhdGVWYXJzLmxvZ2luVGFnfVxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX2xlZnRcIj5cclxuXHRcdCAgXHQ8YSBocmVmPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TGlua31cIiBkYXRhLWFyZWE9XCJsZWZ0XCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDQgLSBCYW5uZXIgb2ZlcnRhIGVzcXVlcmRhXCIgZGF0YS1nYS1yZXNldFV0cD1cInRydWVcIiBkYXRhLWhyZWYtdGFyZ2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy50YXJnZXRCbGFua31cIj5cclxuXHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0RGVza31cIiBtZWRpYT1cIihtaW4td2lkdGg6IDEwMjRweClcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiJHt0aGlzLnRlbXBsYXRlVmFycy5sZWZ0TW9iaX1cIiAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0PC9hPlxyXG5cdFx0ICA8L2Rpdj5cclxuXHRcdCAgPGRpdiBjbGFzcz1cInBheXdhbGwtY3B0LXdyYXBfX3JpZ2h0XCI+XHJcblx0XHQgIFx0PGEgaHJlZj1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRMaW5rfVwiIGRhdGEtYXJlYT1cInJpZ2h0XCIgZGF0YS1nYS1hY3Rpb249XCJDbGlxdWUgZW0gbGlua1wiIGRhdGEtZ2EtbGFiZWw9XCJMaW5rIDUgLSBCYW5uZXIgb2ZlcnRhIGRpcmVpdGFcIiBkYXRhLWdhLXJlc2V0VXRwPVwidHJ1ZVwiIGRhdGEtaHJlZi10YXJnZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnRhcmdldEJsYW5rfVwiPlxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PHNvdXJjZSBzcmNzZXQ9XCIke3RoaXMudGVtcGxhdGVWYXJzLnJpZ2h0TW9iaX1cIiBtZWRpYT1cIihtYXgtd2lkdGg6IDEwMjNweClcIj5cclxuXHRcdFx0XHRcdDxzb3VyY2Ugc3Jjc2V0PVwiJHt0aGlzLnRlbXBsYXRlVmFycy5yaWdodERlc2t9XCIgbWVkaWE9XCIobWluLXdpZHRoOiAxMDI0cHgpXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7dGhpcy50ZW1wbGF0ZVZhcnMucmlnaHRNb2JpfVwiIC8+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQgIDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0ICA8L2Rpdj5cclxuXHQgIGA7XHJcblxyXG5cdHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCBjc3NNaW5pZmllZCgpIHtcclxuXHQgIHJldHVybiBgPHN0eWxlPlxyXG5cdCAgLnBheXdhbGwtY3B0e29wYWNpdHk6MDtwb3NpdGlvbjpmaXhlZDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwdnc7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6MCAwIDcwcHggMCByZ2JhKDAsMCwwLC41KTtib3gtc2hhZG93OjAgMCA3MHB4IDAgcmdiYSgwLDAsMCwuNSk7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWZ9LnBheXdhbGwtY3B0LC5wYXl3YWxsLWNwdCAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfS5wYXl3YWxsLWNwdCBhe2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWRlY29yYXRpb246bm9uZX0ucGF5d2FsbC1jcHQgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wYXl3YWxsLWNwdCAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdCBhe2NvbG9yOiMwMDB9LnBheXdhbGwtY3B0LW9nbG9ibyAucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1oZWFkLC5wYXl3YWxsLWNwdC1vZ2xvYm8gYXtjb2xvcjojMzI1ZTk0fS5wYXl3YWxsLWNwdC13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1ib3R0b206MjBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LnBheXdhbGwtY3B0LXdyYXB7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn19LnBheXdhbGwtY3B0LXdyYXAgaW1ne2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LnBheXdhbGwtY3B0LXdyYXBfX3RvcHtwYWRkaW5nLXRvcDoyMHB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWhlYWR7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMCAwO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMH0ucGF5d2FsbC1jcHQtd3JhcF9fdGV4dC1jZW50ZXJ7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMDtjb2xvcjojNzY3Njc2O2ZvbnQtc2l6ZToxNnB4fS5wYXl3YWxsLWNwdC13cmFwX190ZXh0LWNlbnRlci5pcy1oaWRle3BhZGRpbmctYm90dG9tOjB9XHJcblx0ICA8L3N0eWxlPmA7XHJcbiAgfVxyXG5cclxuICBpbml0KCkgeyBcclxuXHQgIGNvbnN0IGRlbGF5VGltZXIgPSAod2luZG93LmdsYlBheXdhbGwgJiYgd2luZG93LmdsYlBheXdhbGwuZGVsYXlUaW1lcikgPyB3aW5kb3cuZ2xiUGF5d2FsbC5kZWxheVRpbWVyICogMTAwMCA6IDA7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT57XHJcblx0XHR0aGlzLmNyZWF0ZVRlbXBsYXRlKCk7XHJcblx0fSwgZGVsYXlUaW1lcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcclxuaW1wb3J0IFRpbnlNb2R1bGUgZnJvbSAnLi9UaW55JztcclxuaW1wb3J0IEdBTW9kdWxlIGZyb20gJy4vR0EnO1xyXG5pbXBvcnQgU3dnTW9kdWxlIGZyb20gJy4vU3dnJztcclxuaW1wb3J0IFBheXdhbGxDcHQgZnJvbSAnLi9jcG50LXBheXdhbGwvUGF5d2FsbCc7XHJcblxyXG5jb25zdCBUaW55ID0gbmV3IFRpbnlNb2R1bGUoKTtcclxuY29uc3QgR0EgPSBuZXcgR0FNb2R1bGUoKTtcclxuXHJcbkdBLnNldEdsb2JhbFZhcnMoKTtcclxuXHJcblBpYW5vLnR5cGVQYXl3YWxsID0gbnVsbDtcclxuUGlhbm8udmFyaWF2ZWlzID0ge1xyXG5cdGFtYmllbnRlc0FjZWl0b3M6IFwiaW50LHFsdCxwcmRcIixcclxuXHRzdGF0dXNIdHRwT2J0ZXJBdXRvcml6YWNhb0FjZXNzbzogXCI0MDAsNDA0LDQwNiw1MDAsNTAyLDUwMyw1MDRcIixcclxuXHRzdGF0dXNIdHRwT2J0ZXJBc3NpbmF0dXJhSW5hZGltcGxlbnRlOiBcIjQwMCw0MDQsNTAwLDUwMiw1MDMsNTA0XCIsXHJcblx0aXNDYWxsYmFja01ldHRlckV4cGlyZWQ6IGZhbHNlLFxyXG5cdGNvbnN0YW50ZToge1xyXG5cdFx0Y29va2llOiB7XHJcblx0XHRcdEdDT006ICdHTEJJRCcsXHJcblx0XHRcdFVUUDogJ191dHAnLFxyXG5cdFx0XHRSVElFWDogJ19ydGlleCcsXHJcblx0XHRcdEFNQklFTlRFOiAnYW1iaWVudGVQaWFubycsXHJcblx0XHRcdFNBVkVfU1VCU0NSSVBUSU9OOiAnc2F2ZVN1YnNjcmlwdGlvbkNvb2tpZScsXHJcblx0XHRcdENSRUFURURfR0xPQk9JRDogJ2NyZWF0ZWRHbG9ib0lkJyxcclxuXHRcdFx0R0xPQk9JRF9NRVNTQUdFOiAnZ2xvYm9JZE1lc3NhZ2UnXHJcblx0XHR9LFxyXG5cdFx0bWV0cmljYXM6IHtcclxuXHRcdFx0RVZFTlRPX1NFTV9BQ0FPOiAnc2VtIGFjYW8nLFxyXG5cdFx0XHRFUlJPOiAnRXJybydcclxuXHRcdH0sXHJcblx0XHRrcnV4OiB7XHJcblx0XHRcdFNFR01FTlRBQ09FUzogJ2t4Z2xvYm9fc2VncycsXHJcblx0XHRcdEtSVVhMSUdBRE86ICdrcnV4LWxpZ2FkbydcclxuXHRcdH0sXHJcblx0XHR1dGlsOiB7XHJcblx0XHRcdElQOiBcIjEyNy4wLjAuMVwiLFxyXG5cdFx0XHRBTUJJRU5URTogXCJhbWJpZW50ZS1kZXNlamFkb1wiLFxyXG5cdFx0XHRERUJVRzogXCJkZWJ1Zy1waWFub1wiXHJcblx0XHR9XHJcblx0fSxcclxuXHRpc0NvbnRldWRvRXhjbHVzaXZvOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuY29udGV1ZG9FeGNsdXNpdm8gPyB0cnVlIDogZmFsc2U7XHJcblx0fSxcclxuXHRnZXRBbWJpZW50ZVBpYW5vOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChQaWFuby52YXJpYXZlaXMuYW1iaWVudGVzQWNlaXRvcy5pbmRleE9mKFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuQU1CSUVOVEUpKSA+IC0xKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSwgMSk7XHJcblx0XHRcdHJldHVybiBQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKTtcclxuXHRcdH1cclxuXHRcdGlmIChQaWFuby51dGlsLmdldFZhbG9yUGFyYW1ldHJvTmFVcmwoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkFNQklFTlRFKSA9PSAnZmFsc2UnKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLkFNQklFTlRFLCBcIlwiLCAtMSk7XHJcblx0XHR9XHJcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuQU1CSUVOVEUpKSB7XHJcblx0XHRcdHJldHVybiBIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5BTUJJRU5URSk7XHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIFBpYW5vLnZhcmlhdmVpcy5hbWJpZW50ZXNBY2VpdG9zLmluZGV4T2Yod2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8pID4gLTEgPyB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA6ICdwcmQnO1xyXG5cdH0sXHJcblx0Z2V0VGlwb0NvbnRldWRvUGlhbm86IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy50aXBvQ29udGV1ZG9QaWFubztcclxuXHR9LFxyXG5cdGV4ZWN1dG91UGFnZXZpZXc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5leGVjdXRvdVBhZ2V2aWV3ID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0Z2V0Tm9tZVByb2R1dG86IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cubm9tZVByb2R1dG9QaWFubyl7XHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiTm9tZSBkbyBwcm9kdXRvIG7Do28gZGVmaW5pZG8uXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vO1xyXG5cdH0sXHJcblx0Z2V0U2Vydmljb0lkOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBpZCA9ICcwMDAwJztcclxuXHJcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ29nbG9ibycgXHJcblx0XHRcdHx8IFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnYmxvZ3MnIFxyXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2tvZ3V0J1xyXG5cdFx0XHR8fCBQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gJ2FjZXJ2bydcclxuXHRcdFx0fHwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICdqb3JuYWxkaWdpdGFsJyl7XHJcblx0XHRcdHJldHVybiBpZCA9ICczOTgxJztcclxuXHRcdH1cclxuXHRcdGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpICYmIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAnbW9uZXQnKXsgXHJcblx0XHRcdHJldHVybiBpZCA9ICc2NjE4JztcclxuXHRcdH1lbHNlIGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpKXtcclxuXHRcdFx0cmV0dXJuIGlkID0gJzY2OTcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpID09PSAndmFsb3InKXtcclxuICAgICAgICAgICAgcmV0dXJuIGlkID0gJzY2NjgnO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoaWQgPT09ICcwMDAwJylcclxuXHRcdFx0R0Euc2V0RXZlbnRzRXJyb3IoJ1NlcnZpY2VJRCBuw6NvIGRlZmluaWRvLicsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgKyBcclxuXHRcdFx0XHQnIG5vbWVQcm9kdXRvOiAnICsgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgKTtcclxuXHJcblx0XHRyZXR1cm4gaWQ7XHJcblx0fSxcclxuXHRnZXRDb2RpZ29Qcm9kdXRvOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIG5vbWVQcm9kdXRvID0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCk7XHJcblx0XHRzd2l0Y2ggKG5vbWVQcm9kdXRvKXtcclxuXHRcdFx0Y2FzZSAnb2dsb2JvJzpcclxuXHRcdFx0Y2FzZSAnYmxvZ3MnOlxyXG5cdFx0XHRjYXNlICdrb2d1dCc6XHJcblx0XHRcdFx0cmV0dXJuICdPRzAzJztcclxuXHRcdFx0Y2FzZSAnYWNlcnZvJzpcclxuXHRcdFx0XHRyZXR1cm4gJ09HMDQnO1xyXG5cdFx0XHRjYXNlICdqb3JuYWxkaWdpdGFsJzpcclxuXHRcdFx0XHRyZXR1cm4gJ09HMDEnO1xyXG5cdFx0XHRjYXNlICdhdXRvLWVzcG9ydGUnOlxyXG5cdFx0XHRjYXNlICdlcG9jYSc6XHJcblx0XHRcdGNhc2UgJ3ZvZ3VlJzpcclxuXHRcdFx0Y2FzZSAnZ2xhbW91cic6XHJcblx0XHRcdGNhc2UgJ2Nhc2Etdm9ndWUnOlxyXG5cdFx0XHRjYXNlICdtYXJpZS1jbGFpcmUnOlxyXG5cdFx0XHRjYXNlICdnbG9iby1ydXJhbCc6XHJcblx0XHRcdGNhc2UgJ2dxJzpcclxuXHRcdFx0Y2FzZSAnbW9uZXQnOlxyXG5cdFx0XHRjYXNlICdjcmVzY2VyJzpcclxuXHRcdFx0Y2FzZSAnZ2FsaWxldSc6XHJcblx0XHRcdFx0cmV0dXJuIG5vbWVQcm9kdXRvO1xyXG5cdFx0XHRjYXNlICdjYXNhLWUtamFyZGltJzpcclxuXHRcdFx0XHRyZXR1cm4gJ2Nhc2EtamFyZGltJztcclxuXHRcdFx0Y2FzZSAncXVlbS1hY29udGVjZSc6XHJcblx0XHRcdFx0cmV0dXJuICdxdWVtJztcclxuXHRcdFx0Y2FzZSAndmFsb3InOlxyXG5cdFx0XHRcdHJldHVybiAndmFsb3JkaWdpdGFsJztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFvIG9idGVyIGPDs2RpZ28gZG8gcHJvZHV0b1wiLCBub21lUHJvZHV0byArIFwiIC0gXCIgKyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xyXG5cdFx0XHRcdHJldHVybiAnZXJyb3InO1xyXG5cdFx0fVxyXG5cdH1cdFxyXG59O1xyXG5cclxuUGlhbm8uamFuZWxhQW5vbmltYSA9IHtcclxuXHRyZXRyeSA6IGZ1bmN0aW9uKGlzRG9uZSwgbmV4dCkge1xyXG5cdFx0dmFyIGN1cnJlbnRfdHJpYWwgPSAwLCBtYXhfcmV0cnkgPSA1MCwgaW50ZXJ2YWwgPSAxMCwgaXNfdGltZW91dCA9IGZhbHNlO1xyXG5cdFx0dmFyIGlkID0gd2luZG93LnNldEludGVydmFsKFxyXG5cdFx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoaXNEb25lKCkpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcclxuXHRcdFx0XHRcdG5leHQoaXNfdGltZW91dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChjdXJyZW50X3RyaWFsKysgPiBtYXhfcmV0cnkpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKGlkKTtcclxuXHRcdFx0XHRcdGlzX3RpbWVvdXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bmV4dChpc190aW1lb3V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdDEwXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0aXNJRTEwT3JMYXRlciA6IGZ1bmN0aW9uKHVzZXJfYWdlbnQpIHtcclxuXHRcdGxldCB1YSA9IHVzZXJfYWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHRcdGxldCBtYXRjaCA9IC8oPzptc2llfHJ2OilcXHM/KFtcXGRcXC5dKykvLmV4ZWModWEpO1xyXG5cdFx0XHJcblx0XHRpZiAodWEuaW5kZXhPZignbXNpZScpID09PSAwICYmIHVhLmluZGV4T2YoJ3RyaWRlbnQnKSA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAobWF0Y2ggJiYgcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSA+PSAxMCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGRldGVjdFByaXZhdGVNb2RlIDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdHZhciBpc19wcml2YXRlO1xyXG5cclxuXHRcdGlmICh3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0pIHtcclxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKFxyXG5cdFx0XHRcdHdpbmRvdy5URU1QT1JBUlksIDEsXHJcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpc19wcml2YXRlID0gZmFsc2U7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5pbmRleGVkREIgJiYgL0ZpcmVmb3gvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcblx0XHRcdHZhciBkYjtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRkYiA9IHdpbmRvdy5pbmRleGVkREIub3BlbigndGVzdCcpO1xyXG5cdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBpc19wcml2YXRlID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFBpYW5vLmphbmVsYUFub25pbWEucmV0cnkoXHJcblx0XHRcdFx0XHRmdW5jdGlvbiBpc0RvbmUoKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkYi5yZWFkeVN0YXRlID09PSAnZG9uZScgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gbmV4dChpc190aW1lb3V0KSB7XHJcblx0XHRcdFx0XHRcdGlmICghaXNfdGltZW91dCkge1xyXG5cdFx0XHRcdFx0XHRcdGlzX3ByaXZhdGUgPSBkYi5yZXN1bHQgPyBmYWxzZSA6IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKFBpYW5vLmphbmVsYUFub25pbWEuaXNJRTEwT3JMYXRlcih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuXHRcdFx0aXNfcHJpdmF0ZSA9IGZhbHNlO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmICghd2luZG93LmluZGV4ZWREQikge1xyXG5cdFx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0aXNfcHJpdmF0ZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiAvU2FmYXJpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIDEpO1xyXG5cdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRpc19wcml2YXRlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBpc19wcml2YXRlID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdGlzX3ByaXZhdGUgPSBmYWxzZTtcclxuXHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3QnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdFBpYW5vLmphbmVsYUFub25pbWEucmV0cnkoXHJcblx0XHRcdGZ1bmN0aW9uIGlzRG9uZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGlzX3ByaXZhdGUgIT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbiBuZXh0KGlzX3RpbWVvdXQpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhpc19wcml2YXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5rcnV4ID0ge1xyXG5cdHRlbTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUua3J1eC5TRUdNRU5UQUNPRVMpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH0sXHJcblx0bGlnYWRvOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBwYXJhbWV0cm8gPSBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETztcclxuXHRcdHZhciB2YWxvclBhcmFtZXRybyA9IFBpYW5vLnV0aWwuZ2V0VmFsb3JQYXJhbWV0cm9OYVVybChwYXJhbWV0cm8pO1xyXG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICdmYWxzZScgJiYgd2luZG93LmFtYmllbnRlVXRpbGl6YWRvUGlhbm8gIT0gXCJwcmRcIikge1xyXG5cdFx0XHRIZWxwZXJzLnNldENvb2tpZShwYXJhbWV0cm8sIHZhbG9yUGFyYW1ldHJvLCAxKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZhbG9yUGFyYW1ldHJvID09ICd0cnVlJyB8fCB3aW5kb3cuYW1iaWVudGVVdGlsaXphZG9QaWFubyA9PSBcInByZFwiKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgXCJcIiwgLTEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmIChIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmtydXguS1JVWExJR0FETykgPT0gXCJmYWxzZVwiKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblx0b2J0ZW1TZWdtZW50YWNhbzogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoUGlhbm8ua3J1eC50ZW0oKSAmJiBQaWFuby5rcnV4LmxpZ2FkbygpKSB7XHJcblx0XHRcdHZhciBzZWdtZW50YWNvZXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5rcnV4LlNFR01FTlRBQ09FUykuc3BsaXQoJywnKTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50YWNvZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIHNlZ21lbnRhY29lc1tpXSwgc2VnbWVudGFjb2VzW2ldXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5tZXRyaWNhcyA9IHtcclxuXHRlbnZpYUV2ZW50b3NHQTogZnVuY3Rpb24oX0dBQWNhbywgX0dBUm90dWxvKSB7IC8vVE9ETzogYXJxdWl2byB0aW55cGFzcy5qcywgaW5zZXJpZG8gcGVsYSBQaWFubywgdXRpbGl6YSBlc3NhIGZ1bsOnw6NvXHJcblx0XHRjb25zdCBpc1Byb2R1Y3RWYWxvciA9ICh0eXBlb2Ygd2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ub21lUHJvZHV0b1BpYW5vID09PSAndmFsb3InKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGlzUHJvZHVjdFZhbG9yKVxyXG5cdFx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdQaWFubycsIF9HQUFjYW8sIF9HQVJvdHVsbywgLHRydWVdKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0ZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdFdmVudG9HQVBpYW5vJywgJ2V2ZW50b0dBQ2F0ZWdvcmlhJzogJ1BpYW5vJywgJ2V2ZW50b0dBQWNhbyc6IF9HQUFjYW8sICdldmVudG9HQVJvdHVsbyc6X0dBUm90dWxvfSk7XHJcblx0fSxcclxuXHJcblx0bW9udGFSb3R1bG9HQTogZnVuY3Rpb24oKSB7IC8vVE9ETzogYXQgUGlhbm8gYXMgc2V0RXhwZXJpZW5jZSgpIHwgQ2hlY2sgb24gb2xkIHRpbnkgYmVmb3JlIHJlbW92ZVxyXG5cdFx0aWYod2luZG93LnJlZ3Jhc1RpbnkgJiYgd2luZG93LnJlZ3Jhc1Rpbnkubm9tZUV4cGVyaWVuY2lhKSB7XHJcblx0XHRcdHJldHVybiB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA/IHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSArIFwiIC0gXCIgKyB3aW5kb3cuc3Vic2VnbWVudGFjYW9QaWFubyA6IHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYTtcclxuXHRcdH0gZWxzZSBpZiAod2luZG93Lm5vbWVFeHBlcmllbmNpYSkge1xyXG5cdFx0XHRyZXR1cm4gd2luZG93LnN1YnNlZ21lbnRhY2FvUGlhbm8gPyB3aW5kb3cubm9tZUV4cGVyaWVuY2lhICsgXCIgLSBcIiArIHdpbmRvdy5zdWJzZWdtZW50YWNhb1BpYW5vIDogd2luZG93Lm5vbWVFeHBlcmllbmNpYTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBcIiBcIjtcclxuXHR9LFxyXG5cdHNldExpbWl0ZUNvbnRhZ2VtOiBmdW5jdGlvbihtZXRyaWNhcykge1xyXG5cdFx0X0dBTGltaXRlID0gXCItXCI7XHJcblx0XHRfR0FDb250YWdlbSA9IFwiLVwiO1xyXG5cdFx0aWYoIW1ldHJpY2FzKSByZXR1cm47XHJcblx0XHRfR0FDb250YWdlbSA9IFwiXCIgKyBtZXRyaWNhcy52aWV3cztcclxuXHRcdGlmIChfR0FDb250YWdlbS5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRfR0FDb250YWdlbSA9IFwiMFwiICsgX0dBQ29udGFnZW07XHJcblx0XHR9XHJcblx0XHRfR0FMaW1pdGUgPSBtZXRyaWNhcy5ub21lRXhwZXJpZW5jaWEgK1wiIDogXCIrIG1ldHJpY2FzLm1heFZpZXdzO1xyXG5cdH0sXHJcblx0aWRlbnRpZmljYXJQYXNzYWdlbVJlZ2lzdGVyOiBmdW5jdGlvbihyZWdyYXMpIHtcclxuXHRcdHZhciBwYXNzYWdlbSA9IFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUubWV0cmljYXMuRVZFTlRPX1NFTV9BQ0FPO1xyXG5cdFx0aWYoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSB7XHJcblx0XHRcdHBhc3NhZ2VtID0gcmVncmFzLmZsdXhvLmluZGV4T2YoXCJoYXJkd2FsbFwiKSAhPSAtMSA/ICdyZWdpc3Rlci1oYXJkd2FsbC1wYXNzb3UnIDogJ3JlZ2lzdGVyLWNvbnRhZ2VtLXBhc3NvdSc7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlJUSUVYLCBcIlwiLCAtMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcGFzc2FnZW07XHJcblx0fSxcclxuXHRleGVjdXRhQXBvc1BhZ2V2aWV3OiBmdW5jdGlvbihleHBpcm91KSB7XHJcblx0XHRpZiAoIVBpYW5vLnZhcmlhdmVpcy5leGVjdXRvdVBhZ2V2aWV3KCkpIHtcclxuXHRcdFx0d2luZG93LnJlZ3Jhc1RpbnkuZmx1eG8gPSB3aW5kb3cudHBDb250ZXh0ID8gdHBDb250ZXh0LnRvTG93ZXJDYXNlKCkgOiAnLSc7XHJcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSA9IHdpbmRvdy5ub21lRXhwZXJpZW5jaWEgPyB3aW5kb3cubm9tZUV4cGVyaWVuY2lhIDogJyc7XHJcblx0XHRcdFBpYW5vLm1ldHJpY2FzLnNldExpbWl0ZUNvbnRhZ2VtKHdpbmRvdy5yZWdyYXNUaW55KTtcclxuXHRcdFx0aWYgKGV4cGlyb3UgPT0gZmFsc2UpIEdBLnNldEV2ZW50cyhQaWFuby5tZXRyaWNhcy5pZGVudGlmaWNhclBhc3NhZ2VtUmVnaXN0ZXIod2luZG93LnJlZ3Jhc1RpbnkpLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0XHRleGVjdXRvdVBhZ2V2aWV3ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNldGFWYXJpYXZlaXM6IGZ1bmN0aW9uKGlkTG9naW4sIHRpcG9Mb2dpbiwgYXNzaW5hdHVyYUxvZ2FkYSl7XHJcblx0XHRQYXl3YWxsQW5hbHl0aWNzLmlkTG9naW5Bc3NpbmFudGUgPSBpZExvZ2luO1xyXG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MudGlwb0xvZ2luQXNzaW5hbnRlID0gdGlwb0xvZ2luO1xyXG4gICAgICAgIFBheXdhbGxBbmFseXRpY3MuYXNzaW5hdHVyYUxvZ2FkYSA9IGFzc2luYXR1cmFMb2dhZGE7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblBpYW5vLmJhbm5lciA9IHtcclxuXHRtb3N0cmFyRm9vdGVyOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2Zvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvbm92by1iYW5uZXItZm9vdGVyLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhckJvdGFvQXNzaW5hdHVyYUhlYWRlckZvb3RlcjogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9iYW5uZXItaGVhZGVyLWZvb3Rlci1waWFuby5qc1wiKTtcclxuXHR9LFxyXG5cdG1vc3RyYXJBdmF0YXJIZWFkZXI6IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYXZhdGFyLWhlYWRlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hdmF0YXItaGVhZGVyLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2F2YXRhci1oZWFkZXItcGlhbm8uanNcIik7XHJcblx0fSxcclxuXHRib3R0b21GaXhlZDogZnVuY3Rpb24ocGFyYW1zID0ge30pIHtcclxuXHRcdHdpbmRvdy5nbGJCYW5uZXJCb3R0b20gPSBwYXJhbXM7XHJcblxyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmFubmVyLWJvdHRvbS1maXhlZC9zdHlsZXMvYmFubmVyLWJvdHRvbS1maXhlZC5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9iYW5uZXItYm90dG9tLWZpeGVkL3NjcmlwdHMvYmFubmVyLWJvdHRvbS1maXhlZC5qc1wiKTtcclxuXHR9LFxyXG5cdG1vc3RyYXJTV0c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgY3NzID0gYDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc3R5bGVzL3N0eWxlLmNzcyc+YDtcclxuXHRcdGNvbnN0IHNjcmlwdEpzID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9zd2cvdjEvc2NyaXB0L2FudW5jaW8tc3dnLmpzYDtcclxuXHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhjc3MpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKHNjcmlwdEpzKTtcclxuXHR9LFxyXG5cdG1vc3RyYXJIaWdobGlnaHRTYWxlOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zdHlsZXMvc3R5bGVzLmNzcyc+XCIpO1xyXG5cdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2hpZ2hsaWdodC1zYWxlL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2hpZ2hsaWdodC1zYWxlLmpzXCIpO1xyXG5cdH0sXHJcblx0bW9zdHJhclN1YnNjcmliZUJ1dHRvblZhbG9yOiBmdW5jdGlvbih2ZXJzYW8pIHtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC92YWxvci1zdWJzY3JpYmUtYnV0dG9uL1wiK3ZlcnNhbytcIi9zY3JpcHRzL3N1YnNjcmliZS1idXR0b24uanNcIik7XHJcblx0fVxyXG5cclxufTtcclxuXHJcblBpYW5vLnJlZ2lzdGVyID0ge1xyXG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9yZWdpc3Rlci1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9ub3ZhLXRlbGEtcmVnaXN0ZXIuanNcIik7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uaGVscGVyID0ge1xyXG5cdG1vc3RyYXJCYXJyZWlyYTogZnVuY3Rpb24oKSB7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3MzLmdsYmltZy5jb20vdjEvQVVUSF82NWQxOTMwYTBiZGE0NzZiYThkM2MyNWM1MzcxZWMzZi9waWFuby9oZWxwZXIvcmVnaXN0ZXIuanNcIik7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkV4aWJpY2FvIFJlZ2lzdGVyXCIsIFBpYW5vLm1ldHJpY2FzLm1vbnRhUm90dWxvR0EoKSk7XHJcblx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8ucGF5d2FsbCA9IHtcclxuXHRyZWRpcmVjaW9uYXJCYXJyZWlyYTogZnVuY3Rpb24odXJsKSB7XHJcblx0XHRHQS5zZXRFdmVudHMoXCJCYXJyZWlyYVwiLCBQaWFuby5tZXRyaWNhcy5tb250YVJvdHVsb0dBKCkpO1xyXG5cdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBcIlwiLCAtMSk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO30sIDEwMDApO1xyXG5cdH0sXHJcblx0c2hvdzogZnVuY3Rpb24odHlwZVBheXdhbGwgPSBudWxsKSB7XHJcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHR5cGVQYXl3YWxsO1xyXG5cdFxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bmV3IFBheXdhbGxDcHQoKTtcdFx0XHRcclxuXHRcdFx0d2luZG93Lmhhc1BheXdhbGwgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdQYXl3YWxsIC0gRXJyb3Igb24gbG9hZCcpXHJcblx0XHRcdFBpYW5vLnRyaWdnZXJBZHZlcnRpc2luZygpOyBcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcgPSBmdW5jdGlvbigpIHtcclxuXHR3aW5kb3cuaGFzUGF5d2FsbCA9IGZhbHNlO1xyXG5cdGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xlYXJGb3JBZHMnKVxyXG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59O1xyXG5cclxuUGlhbm8uY2hlY2tQYXl3YWxsID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGNvdW50ID0gMDtcclxuXHRcclxuXHRjb25zdCBjaGVja0dhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRsZXQgaGFzUHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B1Yi1yZXRhbmd1bG8tMSBpZnJhbWUsICNwdWItcmV0YW5ndWxvLTIgaWZyYW1lLCAjcHViLWZ1bGxiYW5uZXItMSBpZnJhbWUnKTtcclxuXHJcblx0XHRpZihjb3VudCA9PT0gMTkpIFxyXG5cdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTtcclxuXHJcblx0XHRpZiggKCAod2luZG93Lmhhc1BheXdhbGwgfHwgd2luZG93Lmhhc1BheXdhbGwgPT09IGZhbHNlKSB8fCBoYXNQdWIpIHx8IGNvdW50ID4gMTkpIFxyXG5cdFx0XHRjbGVhckludGVydmFsKGNoZWNrR2F0ZSk7XHJcblxyXG5cdFx0Y291bnQrKztcclxuXHR9LCA1MDApO1xyXG59O1xyXG5cclxuUGlhbm8ucmVnaXN0ZXJQYXl3YWxsID0geyBcclxuXHRtb3N0cmFyQmFycmVpcmE6IGZ1bmN0aW9uKHZlcnNhbyA9IG51bGwsIHRpcG8gPSBudWxsKSB7XHJcblx0XHRQaWFuby50eXBlUGF5d2FsbCA9IHRpcG87XHJcblxyXG5cdFx0aWYoIVBpYW5vLmFjdGl2ZVBheXdhbGwgfHwgKCF2ZXJzYW8gfHwgIVBpYW5vLnR5cGVQYXl3YWxsKSApIHtcclxuXHRcdFx0UGlhbm8udHJpZ2dlckFkdmVydGlzaW5nKCk7IFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvcmVnaXN0ZXItcGF5d2FsbC1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFx0UGlhbm8ueG1sSHR0cFJlcXVlc3QuZ2VyYVNjcmlwdE5hUGFnaW5hKFxyXG5cdFx0XHRcdFwiaHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL3JlZ2lzdGVyLXBheXdhbGwtcGlhbm8vXCIrdmVyc2FvK1wiL3NjcmlwdHMvcmVnaXN0ZXItcGF5d2FsbC1waWFuby5qc1wiLCBcclxuXHRcdFx0XHRkYXRhID0+IHsgXHJcblx0XHRcdFx0XHRpZihkYXRhLnN0YXR1cyAhPT0gMjAwKSB7IFxyXG5cdFx0XHRcdFx0XHRQaWFuby50cmlnZ2VyQWR2ZXJ0aXNpbmcoKTsgXHJcblx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5oYXNQYXl3YWxsID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihQaWFuby50eXBlUGF5d2FsbCA9PT0gJ3JlZ2lzdGVyJyB8fCBQaWFuby50eXBlUGF5d2FsbCA9PT0gJ2V4Y2x1c2l2bycgKSB7XHJcblx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiRXhpYmljYW8gUmVnaXN0ZXJcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgdHJ1ZSwgMSk7XHJcblx0XHRcdH0gZWxzZSB7XHRcdFx0XHJcblx0XHRcdFx0R0Euc2V0RXZlbnRzKFwiQmFycmVpcmFcIiwgUGlhbm8ubWV0cmljYXMubW9udGFSb3R1bG9HQSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uY29tdW5pY2FkbyA9IHtcclxuXHRtb3N0cmFySW5mb3JtYWNhbzogZnVuY3Rpb24odmVyc2FvKSB7XHJcblx0XHRQaWFuby51dGlsLmFkaWNpb25hckNzcyhcIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIGhyZWY9J2h0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9jb211bmljYWNhby1waWFuby9cIit2ZXJzYW8rXCIvc2NyaXB0cy9jb211bmljYWNhby1waWFuby5qc1wiKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5hZGJsb2NrID0ge1xyXG5cdG1vc3RyYXJBZEJsb2NrOiBmdW5jdGlvbihwYXJhbXMgPSB7fSkge1xyXG5cclxuXHRcdHBhcmFtcy5hc3NldHNQYXRoID0gYGh0dHBzOi8vc3RhdGljJHtQaWFuby51dGlsLm1vbnRhVXJsU3RnKCl9LmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L2A7XHJcblx0XHRcclxuXHRcdHdpbmRvdy5nbGJBZGJsb2NrID0gcGFyYW1zO1xyXG5cclxuXHRcdFBpYW5vLnV0aWwuYWRpY2lvbmFyQ3NzKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0naHR0cHM6Ly9zdGF0aWNcIitQaWFuby51dGlsLm1vbnRhVXJsU3RnKCkrXCIuaW5mb2dsb2JvLmNvbS5ici9wYXl3YWxsL2FkYmxvY2stcGlhbm8vdjQvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9hZGJsb2NrLXBpYW5vL3Y0L3NjcmlwdHMvYWRibG9jay1waWFuby5qc1wiKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5ibG9xdWVpb3MgPSB7XHJcblx0bGliZXJhckVzYzogZnVuY3Rpb24oKSB7XHJcblx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5nZXJhU2NyaXB0TmFQYWdpbmEoXCJodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvYmxvcXVlaW8vbGliZXJhVGVjbGFkby5qc1wiKTtcclxuXHR9LFxyXG5cdGJsb3F1ZWlhVmlld01vZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9ibG9xdWVpby9ibG9xdWVpYVZpZXdtb2RlLmpzXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuUGlhbm8ucGFyY2Vpcm8gPSB7XHJcblx0bW9zdHJhRm9vdGVyUGFyY2Vpcm86IGZ1bmN0aW9uKHZlcnNhbykge1xyXG5cdFx0UGlhbm8udXRpbC5hZGljaW9uYXJDc3MoXCI8bGluayByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyBocmVmPSdodHRwczovL3N0YXRpY1wiK1BpYW5vLnV0aWwubW9udGFVcmxTdGcoKStcIi5pbmZvZ2xvYm8uY29tLmJyL3BheXdhbGwvZm9vdGVyLXBhcmNlaXJvcy1waWFuby9cIit2ZXJzYW8rXCIvc3R5bGVzL3N0eWxlcy5jc3MnPlwiKTtcclxuXHRcdFBpYW5vLnhtbEh0dHBSZXF1ZXN0LmdlcmFTY3JpcHROYVBhZ2luYShcImh0dHBzOi8vc3RhdGljXCIrUGlhbm8udXRpbC5tb250YVVybFN0ZygpK1wiLmluZm9nbG9iby5jb20uYnIvcGF5d2FsbC9mb290ZXItcGFyY2Vpcm9zLXBpYW5vL1wiK3ZlcnNhbytcIi9zY3JpcHRzL2Zvb3Rlci1wYXJjZWlyb3MtcGlhbm8uanNcIik7XHJcblx0fVxyXG59O1xyXG5cclxuUGlhbm8uaW5hZGltcGxlbnRlID0ge1xyXG5cdGdldExpbmtBc3NpbmF0dXJhOiBmdW5jdGlvbihsaW5rKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpbmsubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGxpbmtbaV0ucmVsID09ICdhc3NpbmF0dXJhJykgcmV0dXJuIGxpbmtbaV0uaHJlZjtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby54bWxIdHRwUmVxdWVzdCA9IHtcclxuXHRnZXJhU2NyaXB0TmFQYWdpbmE6IGZ1bmN0aW9uKHVybFNjcmlwdCwgY2FsbGJhY2spIHtcclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vcGVuKFwiR0VUXCIsIHVybFNjcmlwdCk7XHJcblx0XHR4aHIuc2VuZCgpO1xyXG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZih0aGlzLnJlYWR5U3RhdGUgPT09IDQpe1xyXG5cdFx0XHRcdGlmKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHR2YXIgYXBwZW5kRGVTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdFx0XHRcdGFwcGVuZERlU2NyaXB0LmlubmVySFRNTCA9IHJlc3Bvc3RhO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHBlbmREZVNjcmlwdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdFcnJvIG5hIGZ1bsOnw6NvIGdlcmFyIHNjcmlwdCBuYSBww6FnaW5hLicsICd1cmw6ICcgKyB1cmxTY3JpcHRcclxuXHRcdFx0XHRcdFx0KyAnIFN0YXR1c0Vycm86ICcgKyB0aGlzLnN0YXR1c1xyXG5cdFx0XHRcdFx0XHQrICcgU3RhY2s6ICcgKyB0aGlzLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoY2FsbGJhY2spXHJcblx0XHRcdFx0Y2FsbGJhY2soeGhyKTsgXHJcblx0XHR9O1x0XHJcblx0fSxcclxuXHRmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaU9idGVyQXNzaW5hdHVyYUluYWRpbXBsZW50ZTogZnVuY3Rpb24oaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpIHtcclxuXHRcdFxyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUsIGZhbHNlKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0XHJcblx0XHRpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcclxuXHRcdFx0aWYoeGhyLnN0YXR1cyA9PSAyMDApe1xyXG5cdFx0XHRcdHZhciByZXNwb3N0YSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0dmFyIHJlc3BKc29uID0gSlNPTi5wYXJzZShyZXNwb3N0YSk7XHJcblx0XHRcdFx0dmFyIHNpdHVhY2FvUGFnYW1lbnRvID0gcmVzcEpzb24uc2l0dWFjYW9QYWdhbWVudG8udG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwic2l0dWFjYW9QYWdhbWVudG9cIiwgc2l0dWFjYW9QYWdhbWVudG9dKTtcclxuXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9IDAgJiYgUGlhbm8udmFyaWF2ZWlzLnN0YXR1c0h0dHBPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUuaW5kZXhPZih4aHIuc3RhdHVzKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcihcIkFwaSBkZSBpbmFkaW1wbGVudGVcIiwgeGhyLnN0YXR1cyArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQXBpIGRlIGluYWRpbXBsZW50ZVwiLCBcIlN0YXR1cyBEZXNjb25oZWNpZG9cIiArIFwiIC0gXCIgKyBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRmYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvOiBmdW5jdGlvbihnbGJpZCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY29kaWdvUHJvZHV0byA9IFBpYW5vLnZhcmlhdmVpcy5nZXRDb2RpZ29Qcm9kdXRvKCk7XHJcblx0XHRpZihjb2RpZ29Qcm9kdXRvID09ICdlcnJvcicpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1widG9rZW4tYXV0ZW50aWNhY2FvXCI6IGdsYmlkLCBcImlwVXN1YXJpb1wiOiBQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLnV0aWwuSVAsIFwiY29kaWdvUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvfSk7XHJcblxyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oXCJQT1NUXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsVmVyaWZpY2FMZWl0b3IsIGZhbHNlKTtcclxuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cdFx0eGhyLnNlbmQoZGF0YSk7XHJcblx0XHRcclxuXHRcdGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcclxuXHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCl7XHJcblx0XHRcdFx0dmFyIHJlc3Bvc3RhID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHR2YXIgcmVzcEpzb24gPSBKU09OLnBhcnNlKHJlc3Bvc3RhKTtcclxuXHRcdFx0XHR2YXIgcmVzcG9zdGFEZVRlcm1vRGVVc28gPSBmYWxzZSwgcmVzcG9zdGFEZU1vdGl2byA9ICcnLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSA9ICcnO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzcEpzb24ubW90aXZvICE9IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdHJlc3Bvc3RhRGVNb3Rpdm8gPSByZXNwSnNvbi5tb3Rpdm8udG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi50ZW1UZXJtb0RlVXNvICE9IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdHJlc3Bvc3RhRGVUZXJtb0RlVXNvID0gcmVzcEpzb24udGVtVGVybW9EZVVzbztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXNwSnNvbi5saW5rICE9IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdGhyZWZBc3NpbmF0dXJhSW5hZGltcGxlbnRlID0gUGlhbm8uaW5hZGltcGxlbnRlLmdldExpbmtBc3NpbmF0dXJhKHJlc3BKc29uLmxpbmspO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgaXNBdXRvcml6YWRvID0gUGlhbm8uYXV0ZW50aWNhY2FvLmlzQXV0b3JpemFkbyhyZXNwb3N0YURlVGVybW9EZVVzbywgcmVzcG9zdGFEZU1vdGl2bywgcmVzcEpzb24uYXV0b3JpemFkbywgaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xyXG5cdFx0XHRcdFBpYW5vLmF1dGVudGljYWNhby5kZWZpbmVVc3VhcmlvUGlhbm8ocmVzcEpzb24uYXV0b3JpemFkbywgcmVzcG9zdGFEZU1vdGl2bywgaXNBdXRvcml6YWRvLCByZXNwb3N0YURlVGVybW9EZVVzbyk7XHJcblx0XHRcdFx0dmFyIF9qc29uTGVpdG9yID0ge1xyXG5cdFx0XHRcdFx0XHRcImF1dG9yaXphZG9cIiA6IHJlc3BKc29uLmF1dG9yaXphZG8sXHJcblx0XHRcdFx0XHRcdFwibW90aXZvXCI6IHJlc3Bvc3RhRGVNb3Rpdm8sXHJcblx0XHRcdFx0XHRcdFwibG9nYWRvXCI6IGlzQXV0b3JpemFkbyxcclxuXHRcdFx0XHRcdFx0XCJ0ZW1UZXJtb0RlVXNvXCI6IHJlc3Bvc3RhRGVUZXJtb0RlVXNvLFxyXG5cdFx0XHRcdFx0XHRcImdsYmlkXCI6IGdsYmlkLFxyXG5cdFx0XHRcdFx0XHRcInByb2R1dG9cIjogUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCksXHJcblx0XHRcdFx0XHRcdFwiY29kUHJvZHV0b1wiOiBjb2RpZ29Qcm9kdXRvLFxyXG5cdFx0XHRcdFx0XHRcInV1aWRcIjogcmVzcEpzb24udXN1YXJpb0lkXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdF9qc29uTGVpdG9yID0gYnRvYShlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkoX2pzb25MZWl0b3IpKSk7XHJcblx0XHRcdFx0SGVscGVycy5zZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuVVRQLCBfanNvbkxlaXRvciwgMSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRpZihQaWFuby5nb29nbGUuc2hvd1NhdmVTdWJzY3JpcHRpb24ocmVzcEpzb24pKXtcclxuXHRcdFx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzd2dTZXJ2aWNlID0gbmV3IFN3Z1NlcnZpY2UoKTtcclxuXHRcdFx0XHRcdFx0XHRzd2dTZXJ2aWNlLnNhdmVHbG9ib1N1YnNjcmlwdGlvbihnbGJpZCk7XHJcblx0XHRcdFx0XHRcdH0gY2F0Y2goZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRHQS5zZXRFdmVudHNFcnJvcignRXJybyBhbyBjaGFtYXIgYSBmdW7Dp8OjbyBzaG93U2F2ZVN1YnNjcmlwdGlvbiBkbyBBbGRlYmFyYW4uJywgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1VSTDogJyArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIEdMQklEOiAnICsgZ2xiaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrICcgRXJybzogJyArIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihyZXNwSnNvbi5hdXRvcml6YWRvID09IHRydWUpe1xyXG5cdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhyZXNwSnNvbi51c3VhcmlvSWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiQVBJIGRlIGF1dG9yaXphY2FvIGRlIGFjZXNzb1wiLCB4aHIuc3RhdHVzICsgXCIgLSBcIiArIGdsYmlkKTtcclxuXHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsICdlcnJvJywgdHJ1ZSwgXCIgXCIpO1xyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby5nb29nbGUgPSB7XHJcbiAgaXNBdXRob3JpemVkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZihzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpKXtcclxuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhzd2dFbnRpdGxlbWVudHMuZ2V0RW50aXRsZW1lbnRGb3JTb3VyY2UoXCJvZ2xvYm8uZ2xvYm8uY29tXCIpLnN1YnNjcmlwdGlvblRva2VuLCBcIkNvbnRhIEdvb2dsZVwiLCBcIk8gR2xvYm9cIik7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZihIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5DUkVBVEVEX0dMT0JPSUQpKXtcclxuXHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhIZWxwZXJzLmdldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5DUkVBVEVEX0dMT0JPSUQpLCBcIkNvbnRhIEdvb2dsZVwiLCBcIkdvb2dsZVwiKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG4gIH0sXHJcblxyXG4gIGlzU3BlY2lmaWNHb29nbGVVc2VyOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChQaWFuby5nb29nbGUuaXNBdXRob3JpemVkKCkpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0cnl7XHJcblx0XHRcdHZhciBvR2xvYm9CdXNpbmVzcyA9IG5ldyBPR2xvYm9CdXNpbmVzcygpO1xyXG5cdFx0XHRvR2xvYm9CdXNpbmVzcy52ZXJpZnlJZlVzZXJIYXNBY2Nlc3NPckRlZmVycmVkKHN3Z0VudGl0bGVtZW50cyk7XHJcblx0XHR9IGNhdGNoKGVycm9yKSB7XHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiRXJybyBhbyBleGVjdXRhciBvIEFsZGViYXJhblwiLCBcIkVycm9yOiBcIiArIGVycm9yICsgXCIgLSBFbnRpdGxlbWVudHM6IFwiICsgc3dnRW50aXRsZW1lbnRzLmVudGl0bGVtZW50c1swXS5zdWJzY3JpcHRpb25Ub2tlbik7XHJcblx0XHR9XHRcdFx0XHJcblx0fSxcclxuXHJcblx0c2hvd1NhdmVTdWJzY3JpcHRpb246IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdGlmKCFzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSAmJiByZXNwb25zZS5tb3Rpdm8gPT09XCJBVVRPUklaQURPXCIgJiYgIUhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuU0FWRV9TVUJTQ1JJUFRJT04pKXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxufTtcclxuXHJcblBpYW5vLmF1dGVudGljYWNhbyA9IHtcclxuXHRpc0xvZ2Fkb0NhZHVuOiBmdW5jdGlvbihnbGJpZCwgdXRwKSB7XHJcblx0XHRpZiAoIWdsYmlkKSB7XHJcblx0XHRcdGlmICh1dHApIEhlbHBlcnMuc2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCwgXCJcIiwgLTEpO1xyXG5cdFx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGdsYmlkICE9ICcnO1xyXG5cdH0sXHJcblx0dmVyaWZpY2FVc3VhcmlvTG9nYWRvTm9CYXJyYW1lbnRvOiBmdW5jdGlvbihnbGJpZCwgdXRwKSB7XHJcblx0XHRpZiAoUGlhbm8uYXV0ZW50aWNhY2FvLmlzTG9nYWRvQ2FkdW4oZ2xiaWQsIHV0cCkpIHtcclxuXHRcdFx0aWYgKHV0cCkge1xyXG5cdFx0XHRcdHZhciBfbGVpdG9yID0gSlNPTi5wYXJzZShkZWNvZGVVUkkoYXRvYih1dHApKSk7XHJcblx0XHRcdFx0aWYgKGdsYmlkID09IF9sZWl0b3IuZ2xiaWQgJiYgKHR5cGVvZiBfbGVpdG9yLnByb2R1dG8gPT0gXCJ1bmRlZmluZWRcIiB8fCBfbGVpdG9yLnByb2R1dG8gPT0gUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkpKSB7XHJcblx0XHRcdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKF9sZWl0b3IuYXV0b3JpemFkbywgX2xlaXRvci5tb3Rpdm8sIF9sZWl0b3IubG9nYWRvLCBfbGVpdG9yLnRlbVRlcm1vRGVVc28pO1xyXG5cdFx0XHRcdFx0aWYoX2xlaXRvci5hdXRvcml6YWRvKXtcclxuXHRcdFx0XHRcdFx0UGlhbm8ubWV0cmljYXMuc2V0YVZhcmlhdmVpcyhfbGVpdG9yLnV1aWQsIFwiR2xvYm8gSURcIiwgXCJPIEdsb2JvXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5VVFAsIFwiXCIsIC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRQaWFuby54bWxIdHRwUmVxdWVzdC5mYXpSZXF1aXNpY2FvQmFycmFtZW50b0FwaUF1dG9yaXphY2FvQWNlc3NvKGdsYmlkKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGlzQXV0b3JpemFkbzogZnVuY3Rpb24odGVybW9EZVVzbywgbW90aXZvLCBhdXRvcml6YWRvLCBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkge1xyXG5cdFx0aWYgKGF1dG9yaXphZG8gfHwgbW90aXZvID09IFwiaW5kaXNwb25pdmVsXCIgfHwgdGVybW9EZVVzbyAhPSBmYWxzZSkge1xyXG5cdFx0XHRpZiAoYXV0b3JpemFkbyAmJiBocmVmQXNzaW5hdHVyYUluYWRpbXBsZW50ZSkgUGlhbm8ueG1sSHR0cFJlcXVlc3QuZmF6UmVxdWlzaWNhb0JhcnJhbWVudG9BcGlPYnRlckFzc2luYXR1cmFJbmFkaW1wbGVudGUoaHJlZkFzc2luYXR1cmFJbmFkaW1wbGVudGUpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuUlRJRVgpKSBIZWxwZXJzLnNldENvb2tpZShQaWFuby52YXJpYXZlaXMuY29uc3RhbnRlLmNvb2tpZS5SVElFWCwgXCJcIiwgLTEpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0ZGVmaW5lVXN1YXJpb1BpYW5vOmZ1bmN0aW9uKGF1dG9yaXphZG8sIG1vdGl2bywgbG9nYWRvLCB0ZW1UZXJtb0RlVXNvKXtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJhdXRvcml6YWRvXCIsIGF1dG9yaXphZG9dKTtcclxuXHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJtb3Rpdm9cIiwgbW90aXZvXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibG9nYWRvXCIsIGxvZ2Fkb10pO1xyXG5cdFx0aWYodGVtVGVybW9EZVVzbyAhPSBcIiBcIilcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcInRlbVRlcm1vXCIsIHRlbVRlcm1vRGVVc29dKTtcclxuXHR9XHJcbn07XHJcblxyXG5QaWFuby51dGlsID0ge1xyXG5cdGlzU2VjdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gUGlhbm8udmFyaWF2ZWlzLmdldFRpcG9Db250ZXVkb1BpYW5vKCkgPT09ICdzZWN0aW9uJyA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdHRlbVZhcmlhdmVpc09icmlnYXRvcmlhczogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIFBpYW5vLnZhcmlhdmVpcy5nZXRUaXBvQ29udGV1ZG9QaWFubygpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRHQS5zZXRFdmVudHNFcnJvcignVmFyaWF2ZWwgdGlwb0NvbnRldWRvUGlhbm8gbmFvIGVzdGEgZGVmaW5pZGEnLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHRcdGlmICh0eXBlb2YgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKCdWYXJpYXZlbCBub21lUHJvZHV0b1BpYW5vIG5hbyBlc3RhIGRlZmluaWRhJywgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cdGV4dHJhaVBhcmFtZXRyb3NDYW1wYW5oYURhVXJsOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uU2VhcmNoKCk7XHJcblx0XHR2YXIgY2hhdmVzQ2FtcGFuaGEgPSBbJ3V0bV9tZWRpdW0nLCd1dG1fc291cmNlJ107XHJcblx0XHR2YXIgdmFsb3Jlc0NhbXBhbmhhID0gW107XHJcblxyXG5cdFx0Zm9yICh2YXIgaWR4UGFyYW1DYW1wYW5oYSA9IDA7IGlkeFBhcmFtQ2FtcGFuaGEgPCBjaGF2ZXNDYW1wYW5oYS5sZW5ndGg7IGlkeFBhcmFtQ2FtcGFuaGErKykge1xyXG5cdFx0XHR2YXIgY2hhdmVDYW1wYW5oYSA9IGNoYXZlc0NhbXBhbmhhW2lkeFBhcmFtQ2FtcGFuaGFdO1xyXG5cdFx0XHRpZiAodXJsLmluZGV4T2YoY2hhdmVDYW1wYW5oYSArICc9JykgIT0gLTEpIHtcclxuXHRcdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiW1xcPygmKV1cIiArIGNoYXZlQ2FtcGFuaGEgKyBcIj0oW14mI10qKVwiKTtcclxuXHRcdFx0XHR2YXIgdmFsb3JDYW1wYW5oYSA9IHVybC5tYXRjaChyZWdleClbMV07XHJcblx0XHRcdFx0aWYodmFsb3JDYW1wYW5oYSl7XHJcblx0XHRcdFx0XHR2YWxvcmVzQ2FtcGFuaGEucHVzaCh2YWxvckNhbXBhbmhhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh2YWxvcmVzQ2FtcGFuaGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwidXRtXCIsIHZhbG9yZXNDYW1wYW5oYS5qb2luKFwiO1wiKV0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHVybC5pbmRleE9mKCd1dG1fY2FtcGFpZ249JykgIT0gLTEpIHtcclxuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcInV0bV9jYW1wYWlnbj0oXFxcXHcrKVwiKTtcclxuXHRcdFx0dmFyIGNhbXBhbmhhID0gdXJsLm1hdGNoKHJlZ2V4KVsxXTtcclxuXHRcdFx0aWYoY2FtcGFuaGEpe1xyXG5cdFx0XHRcdHRwLnB1c2goW1wic2V0Q3VzdG9tVmFyaWFibGVcIiwgXCJjYW1wYW5oYVwiLCBjYW1wYW5oYV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRpc09yaWdlbUJ1c2NhZG9yOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdFx0dmFyIHJlZ2V4Um9ib3MgPSBuZXcgUmVnRXhwKFwiKGlhX2FyY2hpdmVyKXwoR29vZ2xlYm90KXwoTWVkaWFwYXJ0bmVycy1Hb29nbGUpfChBZHNCb3QtR29vZ2xlKXwobXNuYm90KXwoWWFob28hIFNsdXJwKXwoWnlCb3JnKXwoQXNrIEplZXZlcy9UZW9tYSl8KGJpbmdib3QpfChjWGVuc2Vib3QpXCIpO1xyXG5cdFx0dmFyIGVoUm9ibyA9IHJlZ2V4Um9ib3MudGVzdCh1c2VyQWdlbnQpO1xyXG5cdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImJ1c2NhZG9yXCIsIGVoUm9ib10pO1xyXG5cdFx0cmV0dXJuIGVoUm9ibztcclxuXHR9LFxyXG5cdG1vbnRhVXJsU3RnOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpICE9ICdwcmQnID8gJy1zdGcnIDogJyc7XHJcblx0fSxcclxuXHR0ZW1QYXJhbWV0cm9OYVVybDogZnVuY3Rpb24ocGFyYW1OYW1lKSB7XHJcblx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcclxuXHRcdHJldHVybiBwYXJhbWV0cm9zLmluZGV4T2YocGFyYW1OYW1lKSAhPSAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHR9LFxyXG5cdGdldFZhbG9yUGFyYW1ldHJvTmFVcmw6IGZ1bmN0aW9uKHBhcmFtZXRybykge1xyXG5cdFx0aWYgKFBpYW5vLnV0aWwudGVtUGFyYW1ldHJvTmFVcmwocGFyYW1ldHJvKSkge1xyXG5cdFx0XHR2YXIgcGFyYW1ldHJvcyA9IFBpYW5vLnV0aWwuZ2V0V2luZG93TG9jYXRpb25TZWFyY2goKTtcclxuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXD8oJildXCIgKyBwYXJhbWV0cm8gKyBcIj0oW14mI10qKVwiKTtcclxuXHRcdFx0cmV0dXJuIHBhcmFtZXRyb3MubWF0Y2gocmVnZXgpWzFdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFwic2VtIHBhcmFtZXRyb1wiO1xyXG5cdH0sXHJcblx0aXNEZWJ1ZzogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcGFyYW1ldHJvID0gUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHO1xyXG5cdFx0dmFyIHZhbG9yUGFyYW1ldHJvID0gUGlhbm8udXRpbC5nZXRWYWxvclBhcmFtZXRyb05hVXJsKHBhcmFtZXRybyk7XHJcblx0XHRpZiAodmFsb3JQYXJhbWV0cm8gPT0gJ3RydWUnKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgdmFsb3JQYXJhbWV0cm8sIDEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmICh2YWxvclBhcmFtZXRybyA9PSAnZmFsc2UnKSB7XHJcblx0XHRcdEhlbHBlcnMuc2V0Q29va2llKHBhcmFtZXRybywgXCJcIiwgLTEpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAoSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS51dGlsLkRFQlVHKSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGlzRG9taW5pb09HbG9ibzogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiOi8vKC4qPykvXCIpLCB1cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpO1xyXG5cdFx0aWYgKHVybC5tYXRjaChyZWdleClbMV0uaW5kZXhPZihcIm9nbG9ib1wiKSA+IC0xIHx8ICh1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJnbG9ib2lcIikgPiAtMSAmJiB1cmwubWF0Y2gocmVnZXgpWzFdLmluZGV4T2YoXCJlZGdcIikgPT0gLTEpKSB7XHJcblx0XHRcdHJldHVybiB1cmwubWF0Y2gocmVnZXgpWzFdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH0sXHJcblx0Y2FsbGJhY2tNZXRlcjogZnVuY3Rpb24obWV0ZXJEYXRhKSB7XHJcblx0XHR3aW5kb3cucmVncmFzVGlueSA9IG1ldGVyRGF0YTtcclxuXHRcdFBpYW5vLm1ldHJpY2FzLmV4ZWN1dGFBcG9zUGFnZXZpZXcoZmFsc2UpO1xyXG5cdH0sXHJcblx0Y2FsbGJhY2tNZXRlckV4cGlyZWQ6IGZ1bmN0aW9uKG1ldGVyRGF0YSkge1xyXG5cdFx0d2luZG93LnJlZ3Jhc1RpbnkgPSBtZXRlckRhdGE7XHJcblx0XHRQaWFuby52YXJpYXZlaXMuaXNDYWxsYmFja01ldHRlckV4cGlyZWQgPSB0cnVlO1xyXG5cdFx0UGlhbm8ubWV0cmljYXMuZXhlY3V0YUFwb3NQYWdldmlldyh0cnVlKTtcclxuXHR9LFxyXG5cdGdldFdpbmRvd0xvY2F0aW9uU2VhcmNoOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0fSxcclxuXHRnZXRXaW5kb3dMb2NhdGlvbkhyZWY6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0fSxcclxuXHRhZGljaW9uYXJDc3M6IGZ1bmN0aW9uKGNzc1BhdGgpe1xyXG5cdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGUuaW5uZXJIVE1MID0gY3NzUGF0aDtcclxuXHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGUsIGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcclxuXHR9LFxyXG5cdGlzUmV2aXN0YTogZnVuY3Rpb24oKXtcclxuXHRcdHZhciByZXZpc3RhcyA9IFtcImVwb2NhXCIsIFwiYXV0by1lc3BvcnRlXCIsIFwidm9ndWVcIiwgXCJnbGFtb3VyXCIsIFwiY2FzYS12b2d1ZVwiLCBcIm1hcmllLWNsYWlyZVwiLCBcImNhc2EtZS1qYXJkaW1cIiwgXCJxdWVtLWFjb250ZWNlXCIsIFwiZ2xvYm8tcnVyYWxcIiwgXCJncVwiLCBcIm1vbmV0XCIsICdjcmVzY2VyJywnZ2FsaWxldSddO1xyXG5cdFx0aWYocmV2aXN0YXMuaW5kZXhPZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSkgPiAtMSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdHJlY2FycmVnYVBpYW5vOiBmdW5jdGlvbiAodGlwb0NvbnRldWRvLCBpc0V4Y2x1c2l2bywgbm9tZVByb2R1dG8pIHtcclxuXHRcdHdpbmRvdy50aXBvQ29udGV1ZG9QaWFubyA9IHRpcG9Db250ZXVkbztcclxuXHRcdHdpbmRvdy5jb250ZXVkb0V4Y2x1c2l2byA9IGlzRXhjbHVzaXZvO1xyXG5cdFx0d2luZG93Lm5vbWVQcm9kdXRvUGlhbm8gPSBub21lUHJvZHV0bztcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93LnJlZ3Jhc1RpbnkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHdpbmRvdy5yZWdyYXNUaW55Lm5vbWVFeHBlcmllbmNpYSA9IFwiXCI7XHJcblx0XHR9XHJcblx0XHRQaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xyXG5cdFx0dHAuZXhwZXJpZW5jZS5leGVjdXRlKCk7XHJcblx0fSxcclxuXHRpc1ZhbG9yOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZihQaWFuby52YXJpYXZlaXMuZ2V0Tm9tZVByb2R1dG8oKSA9PT0gXCJ2YWxvclwiKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmNvbmZpZ3VyYWNhbyA9IHtcclxuXHRqc29uQ29uZmlndXJhY2FvVGlueVBhc3M6IHtcclxuXHRcdCdpbnQnOiB7XHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J2RYdTdkdkZLUmknLFxyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J01jdEZnUkNFc3UnLFxyXG5cdFx0XHQnc2V0U2FuZEJveCc6J3RydWUnLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vJzonaHR0cHM6Ly9zYW5kYm94LnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPWRYdTdkdkZLUmknLFxyXG5cdFx0XHQndXJsU2FuZGJveFBpYW5vUmV2aXN0YXMnOidodHRwczovL3NhbmRib3gudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9TWN0RmdSQ0VzdScsXHJcblx0XHRcdCd1cmxWZXJpZmljYUxlaXRvcic6J2h0dHBzOi8vYXBpcWx0LWlnLmluZm9nbG9iby5jb20uYnIvcmVsYWNpb25hbWVudG8vdjMvZnVuY2lvbmFsaWRhZGUvJysgUGlhbm8udmFyaWF2ZWlzLmdldFNlcnZpY29JZCgpICsnL2F1dG9yaXphY2FvLWFjZXNzbycsXHJcblx0XHRcdCd1cmxEb21pbmlvUGF5d2FsbCc6J2h0dHBzOi8vYXNzaW5hdHVyYS5nbG9ib3N0Zy5nbG9ib2kuY29tLycsXHJcblx0XHRcdCd1cmxEb21pbmlvU2l0ZU9HbG9ibyc6JycrUGlhbm8udXRpbC5pc0RvbWluaW9PR2xvYm8oKSsnLydcclxuXHRcdH0sXHJcblx0XHQncWx0Jzp7XHJcblx0XHRcdCdpZFNhbmRib3hUaW55cGFzcyc6J0dUQ29wSURjNXonLFxyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhcyc6J1ZuYVAzcllWS2MnLFxyXG5cdFx0XHQnc2V0U2FuZEJveCc6J2ZhbHNlJyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFubyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1HVENvcElEYzV6JyxcclxuXHRcdFx0J3VybFNhbmRib3hQaWFub1JldmlzdGFzJzonaHR0cHM6Ly9leHBlcmllbmNlLnRpbnlwYXNzLmNvbS94YnVpbGRlci9leHBlcmllbmNlL2xvYWQ/YWlkPVZuYVAzcllWS2MnLFxyXG5cdFx0XHQndXJsVmVyaWZpY2FMZWl0b3InOidodHRwczovL2FwaXFsdC1pZy5pbmZvZ2xvYm8uY29tLmJyL3JlbGFjaW9uYW1lbnRvL3YzL2Z1bmNpb25hbGlkYWRlLycrIFBpYW5vLnZhcmlhdmVpcy5nZXRTZXJ2aWNvSWQoKSArJy9hdXRvcml6YWNhby1hY2Vzc28nLFxyXG5cdFx0XHQndXJsRG9taW5pb1BheXdhbGwnOidodHRwczovL2Fzc2luYXR1cmEuZ2xvYm9zdGcuZ2xvYm9pLmNvbS8nLFxyXG5cdFx0XHQndXJsRG9taW5pb1NpdGVPR2xvYm8nOicnK1BpYW5vLnV0aWwuaXNEb21pbmlvT0dsb2JvKCkrJy8nXHJcblx0XHR9LFxyXG5cdFx0J3ByZCc6e1xyXG5cdFx0XHQnaWRTYW5kYm94VGlueXBhc3MnOidHVENvcElEYzV6JyxcclxuXHRcdFx0J2lkU2FuZGJveFRpbnlwYXNzUmV2aXN0YXMnOidWbmFQM3JZVktjJyxcclxuXHRcdFx0J3NldFNhbmRCb3gnOidmYWxzZScsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm8nOidodHRwczovL2V4cGVyaWVuY2UudGlueXBhc3MuY29tL3hidWlsZGVyL2V4cGVyaWVuY2UvbG9hZD9haWQ9R1RDb3BJRGM1eicsXHJcblx0XHRcdCd1cmxTYW5kYm94UGlhbm9SZXZpc3Rhcyc6J2h0dHBzOi8vZXhwZXJpZW5jZS50aW55cGFzcy5jb20veGJ1aWxkZXIvZXhwZXJpZW5jZS9sb2FkP2FpZD1WbmFQM3JZVktjJyxcclxuXHRcdFx0J3VybFZlcmlmaWNhTGVpdG9yJzonaHR0cHM6Ly9hcGkuaW5mb2dsb2JvLmNvbS5ici9yZWxhY2lvbmFtZW50by92My9mdW5jaW9uYWxpZGFkZS8nKyBQaWFuby52YXJpYXZlaXMuZ2V0U2Vydmljb0lkKCkgKycvYXV0b3JpemFjYW8tYWNlc3NvJyxcclxuXHRcdFx0J3VybERvbWluaW9QYXl3YWxsJzonaHR0cHM6Ly9hc3NpbmF0dXJhLm9nbG9iby5nbG9iby5jb20vJyxcclxuXHRcdFx0J3VybERvbWluaW9TaXRlT0dsb2JvJzonJytQaWFuby51dGlsLmlzRG9taW5pb09HbG9ibygpKycvJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBpYW5vLmNvbnN0cnV0b3IgPSB7XHJcblx0aW5pdFRwOiBmdW5jdGlvbigpIHtcclxuXHRcdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBQaWFub1wiLCBcIkluaWNpbyBJbml0VHBcIik7XHJcblx0XHR0cCA9IHdpbmRvd1tcInRwXCJdIHx8IFtdO1xyXG5cdFx0dHAucHVzaChbXCJzZXRUYWdzXCIsIFtQaWFuby52YXJpYXZlaXMuZ2V0VGlwb0NvbnRldWRvUGlhbm8oKV1dKTtcclxuXHRcdGlmIChQaWFuby51dGlsLmlzUmV2aXN0YSgpIHx8IFBpYW5vLnV0aWwuaXNWYWxvcigpKSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NSZXZpc3Rhc10pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRwLnB1c2goW1wic2V0QWlkXCIsIFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0uaWRTYW5kYm94VGlueXBhc3NdKTtcclxuXHRcdH1cclxuXHRcdHRwLnB1c2goW1wic2V0U2FuZGJveFwiLCBQaWFuby5jb25maWd1cmFjYW8uanNvbkNvbmZpZ3VyYWNhb1RpbnlQYXNzW1BpYW5vLnZhcmlhdmVpcy5nZXRBbWJpZW50ZVBpYW5vKCldLnNldFNhbmRCb3hdKTtcclxuXHRcdHRwLnB1c2goW1wic2V0RGVidWdcIiwgUGlhbm8udXRpbC5pc0RlYnVnKCldKTtcclxuXHRcdHZhciBjbGVhbl91cmwgPSBQaWFuby51dGlsLmdldFdpbmRvd0xvY2F0aW9uSHJlZigpLnNwbGl0KFwiP1wiKVswXTtcclxuXHRcdHRwLnB1c2goW1wic2V0UGFnZVVSTFwiLGNsZWFuX3VybF0pO1xyXG5cdFx0dHAucHVzaChbXCJzZXRab25lXCIsIFBpYW5vLnZhcmlhdmVpcy5nZXROb21lUHJvZHV0bygpXSk7XHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwibm9tZVByb2R1dG9cIiwgUGlhbm8udmFyaWF2ZWlzLmdldE5vbWVQcm9kdXRvKCldKTtcclxuXHRcdFBpYW5vLmphbmVsYUFub25pbWEuZGV0ZWN0UHJpdmF0ZU1vZGUoZnVuY3Rpb24gKGlzX3ByaXZhdGUpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImFub25pbW9cIiwgaXNfcHJpdmF0ZV0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKFBpYW5vLnZhcmlhdmVpcy5pc0NvbnRldWRvRXhjbHVzaXZvKCkpIHtcclxuXHRcdFx0dHAucHVzaChbXCJzZXRDdXN0b21WYXJpYWJsZVwiLCBcImNvbnRldWRvRXhjbHVzaXZvXCIsIHRydWVdKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiBzd2cgIT09ICd1bmRlZmluZWQnICYmICh0eXBlb2Ygc3dnRW50aXRsZW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiBzd2dFbnRpdGxlbWVudHMuZW5hYmxlc1RoaXMoKSkgKSB7XHJcblx0XHRcdFBpYW5vLmdvb2dsZS5pc1NwZWNpZmljR29vZ2xlVXNlcihzd2dFbnRpdGxlbWVudHMpO1xyXG5cdFx0XHRQaWFuby5hdXRlbnRpY2FjYW8uZGVmaW5lVXN1YXJpb1BpYW5vKHRydWUsXCJBVVRPUklaQURPXCIsIHRydWUsIFwiXCIpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdFBpYW5vLmF1dGVudGljYWNhby52ZXJpZmljYVVzdWFyaW9Mb2dhZG9Ob0JhcnJhbWVudG8oSGVscGVycy5nZXRDb29raWUoUGlhbm8udmFyaWF2ZWlzLmNvbnN0YW50ZS5jb29raWUuR0NPTSksIEhlbHBlcnMuZ2V0Q29va2llKFBpYW5vLnZhcmlhdmVpcy5jb25zdGFudGUuY29va2llLlVUUCkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRQaWFuby5rcnV4Lm9idGVtU2VnbWVudGFjYW8oKTtcclxuXHJcblx0XHR0cC5wdXNoKFtcInNldEN1c3RvbVZhcmlhYmxlXCIsIFwiYmFubmVyQ29udGFkb3JMaWdhZG9cIiwgdHJ1ZV0pO1xyXG5cdFx0UGlhbm8udXRpbC5pc09yaWdlbUJ1c2NhZG9yKCkgfHwgUGlhbm8udXRpbC5leHRyYWlQYXJhbWV0cm9zQ2FtcGFuaGFEYVVybCgpO1xyXG5cdFx0dHAucHVzaChbXCJhZGRIYW5kbGVyXCIsIFwibWV0ZXJBY3RpdmVcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyXSk7XHJcblx0XHR0cC5wdXNoKFtcImFkZEhhbmRsZXJcIiwgXCJtZXRlckV4cGlyZWRcIiwgUGlhbm8udXRpbC5jYWxsYmFja01ldGVyRXhwaXJlZF0pO1xyXG5cdFx0R0Euc2V0RXZlbnRzKFwiQ2FycmVnYW1lbnRvIFBpYW5vXCIsIFwiRmltIEluaXRUcFwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkUGlhbm9FeHBlcmllbmNlcygpe1xyXG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRhLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG5cdGEuYXN5bmMgPSB0cnVlO1xyXG5cdGlmKFBpYW5vLnV0aWwuaXNSZXZpc3RhKCkgfHwgUGlhbm8udXRpbC5pc1ZhbG9yKCkpIHtcclxuXHRcdGEuc3JjID0gUGlhbm8uY29uZmlndXJhY2FvLmpzb25Db25maWd1cmFjYW9UaW55UGFzc1tQaWFuby52YXJpYXZlaXMuZ2V0QW1iaWVudGVQaWFubygpXS51cmxTYW5kYm94UGlhbm9SZXZpc3RhcztcdFxyXG5cdH0gZWxzZSB7XHJcblx0XHRhLnNyYyA9IFBpYW5vLmNvbmZpZ3VyYWNhby5qc29uQ29uZmlndXJhY2FvVGlueVBhc3NbUGlhbm8udmFyaWF2ZWlzLmdldEFtYmllbnRlUGlhbm8oKV0udXJsU2FuZGJveFBpYW5vO1xyXG5cdH1cclxuXHRcclxuXHR2YXIgYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xyXG5cclxuXHRiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIGIpO1xyXG5cdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBQaWFub1wiLCBcIlNjcmlwdCBhZGljaW9uYWRvXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwaWFub0luaXQoKSB7IFxyXG5cdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnRpbnkpXHJcblx0XHRjb25zb2xlLmxvZygnbG9nLW1ldGhvZCcsICdwaWFub0luaXQnKVxyXG5cclxuICAgIGlmICh3aW5kb3cudGlueUNwdC5Td2cuZ2xvYmFsKSB7IFxyXG5cdFx0d2luZG93LlNXRy5wdXNoKChzdWJzY3JpcHRpb25zKSA9PiB7XHJcblx0XHRcdGlmKHdpbmRvdy50aW55Q3B0LmRlYnVnLnN3ZylcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9nLXN1YnNjcmlwdGlvbnMnLCBzdWJzY3JpcHRpb25zKVxyXG5cclxuXHRcdFx0c3dnID0gc3Vic2NyaXB0aW9ucztcclxuXHJcblx0XHRcdHN1YnNjcmlwdGlvbnMuc2V0T25FbnRpdGxlbWVudHNSZXNwb25zZShlbnRpdGxlbWVudHNQcm9taXNlID0+IHtcclxuXHRcdFx0XHRlbnRpdGxlbWVudHNQcm9taXNlLnRoZW4oZW50aXRsZW1lbnRzID0+IHsgXHJcblx0XHRcdFx0XHR3aW5kb3cuc3dnRW50aXRsZW1lbnRzID0gZW50aXRsZW1lbnRzO1xyXG5cclxuXHRcdFx0XHRcdEdBLnNldEV2ZW50cyhcIkNhcnJlZ2FtZW50byBTV0dcIiwgXCJFbnRpdGxlbWVudHMgcmVjZWJpZG9zXCIpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XHJcblx0XHRcdFx0XHRcdHRyeXtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cudGlueUNwdC5QaWFuby5jb25zdHJ1dG9yLmluaXRUcCgpO1xyXG5cdFx0XHRcdFx0XHRcdGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y2F0Y2goZXJyb3Ipe1xyXG5cdFx0XHRcdFx0XHRcdEdBLnNldEV2ZW50c0Vycm9yKFwiUGlhbm8gbmFvIGZvaSBjYXJyZWdhZGEgY29ycmV0YW1lbnRlIVwiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBHQS5zZXRFdmVudHNFcnJvcihcIkVudGl0bGVtZW50cyBuw6NvIGNhcnJlZ2Fkb1wiLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBpZih3aW5kb3cudGlueUNwdC5QaWFuby51dGlsLnRlbVZhcmlhdmVpc09icmlnYXRvcmlhcygpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy50aW55Q3B0LlBpYW5vLmNvbnN0cnV0b3IuaW5pdFRwKCk7XHJcbiAgICAgICAgICAgIGxvYWRQaWFub0V4cGVyaWVuY2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LnRpbnlDcHQuUGlhbm8uY2hlY2tQYXl3YWxsKCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRpbnlJbml0KCkge1xyXG5cdFRpbnkuc2V0UGlhbm8oUGlhbm8pOyBcclxuICAgIGNvbnN0IFN3ZyA9IG5ldyBTd2dNb2R1bGUoKTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IFN3Zy5pbml0KCk7XHJcblx0fVxyXG5cdGNhdGNoKGUpIHsgY29uc29sZS5lcnJvcihlKSB9XHJcblxyXG5cdHBpYW5vSW5pdCgpOyBcclxufTtcclxuXHJcbnRpbnlJbml0KCk7XHJcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==