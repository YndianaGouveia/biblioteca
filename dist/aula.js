"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_1 = require("./domain/categoria");
const emprestimo_1 = require("./domain/emprestimo");
const livro_1 = require("./domain/livro");
const usuario_1 = require("./domain/usuario");
let nomeDaVariavel;
nomeDaVariavel = "Teste";
let nomeDaVariavel2 = "Teste";
let livro1 = new livro_1.Livro("Uma janela em Copacabana", "Luiz Alfredo Roza", categoria_1.Categoria.FICCAO_CIENTIFICA, 5);
var livro2 = new livro_1.Livro("Escravidão", "Laurentino Gomes", categoria_1.Categoria.TERROR, 2);
livro1.exibir();
//livro2.exibir();
// console.log(livro1.titulo);
var usuario1 = new usuario_1.Usuario("Yndiana", 15, "Rua Rosa", 21992136954);
var usuario2 = new usuario_1.Usuario("Ana", 20, "Rua Amarela", 21556425);
usuario1.exibir();
var emprestimo1 = new emprestimo_1.Emprestimo(livro1, usuario2, 10022024, 12022024);
emprestimo1.exibir();
