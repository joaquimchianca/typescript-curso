import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []

    adiciona(n: Negociacao): void {
        this.negociacoes.push(n)
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }
}