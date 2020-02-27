import { NegociacaoController } from './controllers/NegociacaoController';
let negociacaoController = new NegociacaoController();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#apaga-negociacoes-btn').onclick = negociacaoController.apaga.bind(negociacaoController);
document.querySelector('#importa-negociacoes-btn').onclick = negociacaoController.importaNegociacoes.bind(negociacaoController);