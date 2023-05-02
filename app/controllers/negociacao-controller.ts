import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoController{
    private _inputData: HTMLInputElement
    private _inputQuantidade: HTMLInputElement
    private _inputValor: HTMLInputElement
    private _negociacoes = new Negociacoes

    constructor() {
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')

    }

    adiciona(): void {
        let negociacao = this.criaNegociacao()
        this._negociacoes.adiciona(negociacao)
        let negociacoes = this._negociacoes.lista()
        console.log(negociacoes)
        this.limpaForm()
    }

    limpaForm(): void {
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