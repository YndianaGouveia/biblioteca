"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const categoria_1 = require("./categoria");
class Livro {
    constructor(titulo, autor, categoria, disponibilidade) {
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
    }
    exibir() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Categoria: " + categoria_1.Categoria[this.categoria]);
        console.log("Disponibilidade: " + this.disponibilidade);
    }
}
exports.Livro = Livro;
