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
        console.log("Livro: " + this.livro.titulo);
        console.log("Usuario: " + this.usuario.nome);
        console.log("data de emprestimo:" + this.dataDevolucao);
        console.log("Data de Devolução:" + this.dataDevolucao);
    }
}
exports.Emprestimo = Emprestimo;
