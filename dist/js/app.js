import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controlador = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener("submit", event => {
    event.preventDefault();
    controlador.adiciona();
});
