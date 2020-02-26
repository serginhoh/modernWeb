'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoController = function () {
    function NegociacaoController() {
        _classCallCheck(this, NegociacaoController);

        var $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    _createClass(NegociacaoController, [{
        key: 'adiciona',
        value: function adiciona(event) {

            event.preventDefault();
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._negociacoesView.update(this._listaNegociacoes);

            this._mensagem.texto = 'Negociação adicionada com sucesso';
            this._mensagemView.update(this._mensagem);

            this._limpaFormulario();
        }
    }, {
        key: '_criaNegociacao',
        value: function _criaNegociacao() {

            return new Negociacao(DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
        }
    }, {
        key: '_limpaFormulario',
        value: function _limpaFormulario() {

            this._inputData.value = '';
            this._inputQuantidade.value = 1;
            this._inputValor.value = 1.0;
            this._inputData.focus();
        }
    }, {
        key: 'apaga',
        value: function apaga() {
            this._listaNegociacoes.esvazia();
            this._negociacoesView.update(this._listaNegociacoes);
            this._mensagem.texto = 'Negociações apagadas com sucesso';
            this._mensagemView.update(this._mensagem);
        }
    }, {
        key: 'importaNegociacoes',
        value: function importaNegociacoes() {
            var _this = this;

            var service = new NegociacaoService();

            service.obterNegociacoes().then(function (negociacoes) {
                negociacoes.forEach(function (negociacao) {
                    return _this._listaNegociacoes.adiciona(negociacao);
                });

                _this._negociacoesView.update(_this._listaNegociacoes);
                _this._mensagem.texto = 'Negociações importadas com  sucesso';
                _this._mensagemView.update(_this._mensagem);
            }).catch(function (erro) {
                _this._mensagem.texto = erro;
                _this._mensagemView.update(_this._mensagem);
                return;
            });
        }
    }]);

    return NegociacaoController;
}();
//# sourceMappingURL=NegociacaoController.js.map