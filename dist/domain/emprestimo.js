"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(livro, usuario, dataEmprestimo, dataDevolucao) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
    exibir() {
        console.log("Livro: " + this.livro.titulo + " - " + this.livro.autor + " - " + this.livro.disponibilidade);
        console.log("Usuario: " + this.usuario.nome);
        console.log("Data de Empréstimo: " + this.dataDevolucao);
        console.log("Data de Devolução: " + this.dataDevolucao);
    }
}
exports.Emprestimo = Emprestimo;
