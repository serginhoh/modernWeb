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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_NegociacaoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var negociacaoController = new _controllers_NegociacaoController__WEBPACK_IMPORTED_MODULE_0__["NegociacaoController"]();
document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#apaga-negociacoes-btn').onclick = negociacaoController.apaga.bind(negociacaoController);
document.querySelector('#importa-negociacoes-btn').onclick = negociacaoController.importaNegociacoes.bind(negociacaoController);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegociacaoController", function() { return NegociacaoController; });
/* harmony import */ var _models_ListaNegociacoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _models_Mensagem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _views_NegociacoesView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _views_MensagemView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _services_NegociacaoService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _helpers_DateHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _models_Negociacao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var NegociacaoController = /*#__PURE__*/function () {
  function NegociacaoController() {
    _classCallCheck(this, NegociacaoController);

    var $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new _models_ListaNegociacoes__WEBPACK_IMPORTED_MODULE_0__["ListaNegociacoes"]();
    this._negociacoesView = new _views_NegociacoesView__WEBPACK_IMPORTED_MODULE_2__["NegociacoesView"]($('#negociacoesView'));

    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new _models_Mensagem__WEBPACK_IMPORTED_MODULE_1__["Mensagem"]();
    this._mensagemView = new _views_MensagemView__WEBPACK_IMPORTED_MODULE_3__["MensagemView"]($('#mensagemView'));

    this._mensagemView.update(this._mensagem);
  }

  _createClass(NegociacaoController, [{
    key: "adiciona",
    value: function adiciona(event) {
      event.preventDefault();

      this._listaNegociacoes.adiciona(this._criaNegociacao());

      this._negociacoesView.update(this._listaNegociacoes);

      this._mensagem.texto = 'Negociação adicionada com sucesso';

      this._mensagemView.update(this._mensagem);

      this._limpaFormulario();
    }
  }, {
    key: "_criaNegociacao",
    value: function _criaNegociacao() {
      return new _models_Negociacao__WEBPACK_IMPORTED_MODULE_6__["Negociacao"](_helpers_DateHelper__WEBPACK_IMPORTED_MODULE_5__["DateHelper"].textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }
  }, {
    key: "_limpaFormulario",
    value: function _limpaFormulario() {
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 1.0;

      this._inputData.focus();
    }
  }, {
    key: "apaga",
    value: function apaga() {
      this._listaNegociacoes.esvazia();

      this._negociacoesView.update(this._listaNegociacoes);

      this._mensagem.texto = 'Negociações apagadas com sucesso';

      this._mensagemView.update(this._mensagem);
    }
  }, {
    key: "importaNegociacoes",
    value: function importaNegociacoes() {
      var _this = this;

      var service = new _services_NegociacaoService__WEBPACK_IMPORTED_MODULE_4__["NegociacaoService"]();
      service.obterNegociacoes().then(function (negociacoes) {
        negociacoes.forEach(function (negociacao) {
          return _this._listaNegociacoes.adiciona(negociacao);
        });

        _this._negociacoesView.update(_this._listaNegociacoes);

        _this._mensagem.texto = 'Negociações importadas com  sucesso';

        _this._mensagemView.update(_this._mensagem);
      })["catch"](function (erro) {
        _this._mensagem.texto = erro;

        _this._mensagemView.update(_this._mensagem);

        return;
      });
    }
  }]);

  return NegociacaoController;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaNegociacoes", function() { return ListaNegociacoes; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListaNegociacoes = /*#__PURE__*/function () {
  function ListaNegociacoes() {
    _classCallCheck(this, ListaNegociacoes);

    this._negociacoes = [];
  }

  _createClass(ListaNegociacoes, [{
    key: "adiciona",
    value: function adiciona(negociacao) {
      this._negociacoes.push(negociacao);
    }
  }, {
    key: "esvazia",
    value: function esvazia() {
      this._negociacoes = [];
    }
  }, {
    key: "negociacoes",
    get: function get() {
      //retorna um novo array para evitar acesso externo
      return [].concat(this._negociacoes);
    }
  }]);

  return ListaNegociacoes;
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mensagem", function() { return Mensagem; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mensagem = /*#__PURE__*/function () {
  function Mensagem() {
    var texto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Mensagem);

    this._texto = texto;
  }

  _createClass(Mensagem, [{
    key: "texto",
    get: function get() {
      return this._texto;
    },
    set: function set(texto) {
      this._texto = texto;
    }
  }]);

  return Mensagem;
}();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegociacoesView", function() { return NegociacoesView; });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _helpers_DateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NegociacoesView = /*#__PURE__*/function (_View) {
  _inherits(NegociacoesView, _View);

  function NegociacoesView(elemento) {
    _classCallCheck(this, NegociacoesView);

    return _possibleConstructorReturn(this, _getPrototypeOf(NegociacoesView).call(this, elemento));
  }

  _createClass(NegociacoesView, [{
    key: "template",
    value: function template(model) {
      return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th>Data</th>\n                    <th>Quantidade</th>\n                    <th>Valor R$</th>\n                    <th>Volume R$</th>\n                </tr>\n            </thead>\n        \n            <tbody>\n                ".concat(model.negociacoes.map(function (n) {
        return "\n                    \n                    <tr>\n                        <td>".concat(_helpers_DateHelper__WEBPACK_IMPORTED_MODULE_1__["DateHelper"].dataParaTexto(n.data), "</td>\n                        <td>").concat(n.quantidade, "</td>\n                        <td>").concat(n.valor, "</td>\n                        <td>").concat(n.volume, "</td>\n                    </tr>\n                    \n                ");
      }).join(''), "                \n            </tbody>\n                  \n            <tfoot>\n                <td colspan=\"3\"></td>\n                <td>\n                    ").concat(model.negociacoes.reduce(function (total, n) {
        return total + n.volume;
      }, 0.0), "\n                </td>\n            </tfoot>\n            \n        </table>\n        ");
    }
  }]);

  return NegociacoesView;
}(_View__WEBPACK_IMPORTED_MODULE_0__["View"]);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View(elemento) {
    _classCallCheck(this, View);

    this._elemento = elemento;
  }

  _createClass(View, [{
    key: "template",
    value: function template() {
      throw new Error('O método template deve ser implementado');
    }
  }, {
    key: "update",
    value: function update(model) {
      this._elemento.innerHTML = this.template(model);
    }
  }]);

  return View;
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateHelper", function() { return DateHelper; });
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DateHelper = /*#__PURE__*/function () {
  function DateHelper() {
    _classCallCheck(this, DateHelper);

    throw new Error('Esta classe não pode ser instânciada');
  }

  _createClass(DateHelper, null, [{
    key: "dataParaTexto",
    value: function dataParaTexto(data) {
      return "".concat(data.getDate(), "/").concat(data.getMonth() + 1, "/").concat(data.getFullYear());
    }
  }, {
    key: "textoParaData",
    value: function textoParaData(texto) {
      if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');
      return _construct(Date, _toConsumableArray(texto.split('-').map(function (item, index) {
        return item - index % 2;
      })));
    }
  }]);

  return DateHelper;
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemView", function() { return MensagemView; });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var MensagemView = /*#__PURE__*/function (_View) {
  _inherits(MensagemView, _View);

  function MensagemView(elemento) {
    _classCallCheck(this, MensagemView);

    return _possibleConstructorReturn(this, _getPrototypeOf(MensagemView).call(this, elemento));
  }

  _createClass(MensagemView, [{
    key: "template",
    value: function template(model) {
      return model.texto ? "<p class=\"alert alert-info\">".concat(model.texto, "</p>") : '<p></p>';
    }
  }]);

  return MensagemView;
}(_View__WEBPACK_IMPORTED_MODULE_0__["View"]);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegociacaoService", function() { return NegociacaoService; });
/* harmony import */ var _HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _models_Negociacao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NegociacaoService = /*#__PURE__*/function () {
  function NegociacaoService() {
    _classCallCheck(this, NegociacaoService);

    this._http = new _HttpService__WEBPACK_IMPORTED_MODULE_0__["HttpService"]();
  }

  _createClass(NegociacaoService, [{
    key: "obterNegociacoesDaSemana",
    value: function obterNegociacoesDaSemana() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._http.get('http://localhost:3000/negociacoes/semana').then(function (negociacoes) {
          resolve(negociacoes.map(function (objeto) {
            return new _models_Negociacao__WEBPACK_IMPORTED_MODULE_1__["Negociacao"](new Date(objeto.data), objeto.quantidade, objeto.valor);
          }));
        })["catch"](function (erro) {
          reject('Não foi possível obter as negociações da semana');
        });
      });
    }
  }, {
    key: "obterNegociacoesAnterior",
    value: function obterNegociacoesAnterior() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._http.get('http://localhost:3000/negociacoes/anterior').then(function (negociacoes) {
          resolve(negociacoes.map(function (objeto) {
            return new _models_Negociacao__WEBPACK_IMPORTED_MODULE_1__["Negociacao"](new Date(objeto.data), objeto.quantidade, objeto.valor);
          }));
        })["catch"](function (erro) {
          reject('Não foi possível obter as negociações da semana anterior');
        });
      });
    }
  }, {
    key: "obterNegociacoesRetrasada",
    value: function obterNegociacoesRetrasada() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3._http.get('http://localhost:3000/negociacoes/retrasada').then(function (negociacoes) {
          resolve(negociacoes.map(function (objeto) {
            return new _models_Negociacao__WEBPACK_IMPORTED_MODULE_1__["Negociacao"](new Date(objeto.data), objeto.quantidade, objeto.valor);
          }));
        })["catch"](function (erro) {
          reject('Não foi possível obter as negociações da semana retrasada');
        });
      });
    }
  }, {
    key: "obterNegociacoes",
    value: function obterNegociacoes() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        Promise.all([_this4.obterNegociacoesDaSemana(), _this4.obterNegociacoesAnterior(), _this4.obterNegociacoesRetrasada()]).then(function (periodo) {
          var negociacoes = periodo.reduce(function (arrayAchatado, array) {
            return arrayAchatado.concat(array);
          }, []).map(function (objeto) {
            return new _models_Negociacao__WEBPACK_IMPORTED_MODULE_1__["Negociacao"](new Date(objeto.data), objeto.quantidade, objeto.valor);
          });
          resolve(negociacoes);
        })["catch"](function (erro) {
          reject(erro);
        });
      });
    }
  }]);

  return NegociacaoService;
}();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HttpService = /*#__PURE__*/function () {
  function HttpService() {
    _classCallCheck(this, HttpService);
  }

  _createClass(HttpService, [{
    key: "get",
    value: function get(url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              resolve(JSON.parse(xhr.responseText));
            } else {
              reject(xhr.responseText);
            }
          }
        };

        xhr.send();
      });
    }
  }]);

  return HttpService;
}();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Negociacao", function() { return Negociacao; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Negociacao = /*#__PURE__*/function () {
  function Negociacao(data, quantidade, valor) {
    _classCallCheck(this, Negociacao);

    this._data = new Date(data);
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  _createClass(Negociacao, [{
    key: "volume",
    get: function get() {
      return this._quantidade * this._valor;
    }
  }, {
    key: "data",
    get: function get() {
      return new Date(this._data);
    }
  }, {
    key: "quantidade",
    get: function get() {
      return this._quantidade;
    }
  }, {
    key: "valor",
    get: function get() {
      return this._valor;
    }
  }]);

  return Negociacao;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=_boot.bundle.js.map