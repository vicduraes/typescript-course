class Negociacoes {
    private _negociacoes: Negociacao[] = []; 

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    getNegociacao(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}