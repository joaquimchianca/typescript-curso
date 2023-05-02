export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(n) {
        this.negociacoes.push(n);
    }
    lista() {
        return this.negociacoes;
    }
}
