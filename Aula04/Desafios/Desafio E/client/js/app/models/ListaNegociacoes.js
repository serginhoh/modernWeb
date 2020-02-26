class ListaNegociacoes {
    
    constructor() {
        this._negociacoes = [];
    }
    
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes() {
        //retorna um novo array para evitar acesso externo
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
       }
}