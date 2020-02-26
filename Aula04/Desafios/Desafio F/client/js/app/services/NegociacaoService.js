'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoService = function () {
    function NegociacaoService() {
        _classCallCheck(this, NegociacaoService);

        this._http = new HttpService();
    }

    _createClass(NegociacaoService, [{
        key: 'obterNegociacoesDaSemana',
        value: function obterNegociacoesDaSemana() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this._http.get('http://localhost:3000/negociacoes/semana').then(function (negociacoes) {
                    resolve(negociacoes.map(function (objeto) {
                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }));
                }).catch(function (erro) {
                    reject('Não foi possível obter as negociações da semana');
                });
            });
        }
    }, {
        key: 'obterNegociacoesAnterior',
        value: function obterNegociacoesAnterior() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2._http.get('http://localhost:3000/negociacoes/anterior').then(function (negociacoes) {
                    resolve(negociacoes.map(function (objeto) {
                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }));
                }).catch(function (erro) {
                    reject('Não foi possível obter as negociações da semana anterior');
                });
            });
        }
    }, {
        key: 'obterNegociacoesRetrasada',
        value: function obterNegociacoesRetrasada() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3._http.get('http://localhost:3000/negociacoes/retrasada').then(function (negociacoes) {
                    resolve(negociacoes.map(function (objeto) {
                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }));
                }).catch(function (erro) {
                    reject('Não foi possível obter as negociações da semana retrasada');
                });
            });
        }
    }, {
        key: 'obterNegociacoes',
        value: function obterNegociacoes() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                Promise.all([_this4.obterNegociacoesDaSemana(), _this4.obterNegociacoesAnterior(), _this4.obterNegociacoesRetrasada()]).then(function (periodo) {
                    var negociacoes = periodo.reduce(function (arrayAchatado, array) {
                        return arrayAchatado.concat(array);
                    }, []).map(function (objeto) {
                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    });
                    resolve(negociacoes);
                }).catch(function (erro) {
                    reject(erro);
                });
            });
        }
    }]);

    return NegociacaoService;
}();
//# sourceMappingURL=NegociacaoService.js.map