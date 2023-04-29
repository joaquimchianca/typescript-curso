import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 15, 30);
console.log(negociacao.quantidade);
