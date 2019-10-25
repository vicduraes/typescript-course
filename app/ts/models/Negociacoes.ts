class Negociacoes {
    private _negociacoes: Negociacao[] = []; 

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    getNegociacao() {
        return this._negociacoes;
    }
}