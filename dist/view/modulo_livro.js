"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removerLivro = exports.alterarLivro = exports.listarLivros = exports.cadastraLivro = void 0;
const livro_1 = require("../domain/livro");
let leia = require("prompt-sync")();
function cadastraLivro() {
    let titulo = leia("Informe o titulo");
    let autor = leia("Informe o autor do livro");
    let categoria = leia("leia");
    let disponibilidade = leia("Informe a disponibilidade do livro");
    let livrocadastrado = new livro_1.Livro(titulo, autor, categoria, disponibilidade);
}
exports.cadastraLivro = cadastraLivro;
function listarLivros() {
}
exports.listarLivros = listarLivros;
function alterarLivro() {
}
exports.alterarLivro = alterarLivro;
function removerLivro() {
}
exports.removerLivro = removerLivro;
