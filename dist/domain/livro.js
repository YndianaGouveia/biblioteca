"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const categoria_1 = require("./categoria");
class Livro {
    constructor(tituloAux, autor, categoria, disponibilidade, id) {
        this.titulo = tituloAux;
        this.autor = autor;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.id = id;
    }
    exibir() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Categoria: " + categoria_1.Categoria[this.categoria]);
        console.log("Disponibilidade: " + this.disponibilidade);
    }
    cadastrar() {
        console.log("Livro cadastrado com sucesso");
    }
    alterar() {
        console.log("Livro alterado com sucesso:");
    }
    remover() {
        console.log("Livro removido com sucesso.");
    }
    static listar(nome) {
        console.log("Listado com sucesso");
        return [];
    }
    static proucurarPorId(id) {
        console.log("Procurando Livro");
        return null;
    }
}
exports.Livro = Livro;
