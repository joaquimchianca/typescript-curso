import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController{
    private _inputData: HTMLInputElement
    private _inputQuantidade: HTMLInputElement
    private _inputValor: HTMLInputElement

    constructor() {
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')

    }

    adiciona(): void {
        let negociacao = this.criaNegociacao()
        console.log(negociacao)
        this._inputData.value = ''
        this._inputQuantidade.value = ''
        this._inputValor.value = ''
        this._inputData.focus()
    }

    criaNegociacao(): Negociacao {
        let data = this._inputData.value.replace(/-/g, ",")
        let valor = parseFloat(this._inputValor.value)
        let quantidade = parseInt(this._inputQuantidade.value)

        return new Negociacao(new Date(data), quantidade, valor)

    }   
}