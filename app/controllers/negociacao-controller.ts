export class NegociacaoController{
    private _inputData: HTMLInputElement
    private _inputQuantidade: HTMLInputElement
    private _inputValor: HTMLInputElement

    constructor(date: string, quantidade: string, valor: string) {
        this._inputData.value = date
        this._inputQuantidade.value = quantidade
        this._inputValor.value = valor

    }

    adiciona(): void {

    }

    criaNegociacao(): Negociacao {

    }
}