'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NegociacoesView = function (_View) {
    _inherits(NegociacoesView, _View);

    function NegociacoesView(elemento) {
        _classCallCheck(this, NegociacoesView);

        return _possibleConstructorReturn(this, (NegociacoesView.__proto__ || Object.getPrototypeOf(NegociacoesView)).call(this, elemento));
    }

    _createClass(NegociacoesView, [{
        key: 'template',
        value: function template(model) {

            return '\n        <table class="table table-hover table-bordered">\n            <thead>\n                <tr>\n                    <th>Data</th>\n                    <th>Quantidade</th>\n                    <th>Valor R$</th>\n                    <th>Volume R$</th>\n                </tr>\n            </thead>\n        \n            <tbody>\n                ' + model.negociacoes.map(function (n) {
                return '\n                    \n                    <tr>\n                        <td>' + DateHelper.dataParaTexto(n.data) + '</td>\n                        <td>' + n.quantidade + '</td>\n                        <td>' + n.valor + '</td>\n                        <td>' + n.volume + '</td>\n                    </tr>\n                    \n                ';
            }).join('') + '                \n            </tbody>\n                  \n            <tfoot>\n                <td colspan="3"></td>\n                <td>\n                    ' + model.negociacoes.reduce(function (total, n) {
                return total + n.volume;
            }, 0.0) + '\n                </td>\n            </tfoot>\n            \n        </table>\n        ';
        }
    }]);

    return NegociacoesView;
}(View);
//# sourceMappingURL=NegociacoesView.js.map