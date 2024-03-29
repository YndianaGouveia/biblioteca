"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulo_emprestimo_1 = require("./view/modulo_emprestimo");
const modulo_livro_1 = require("./view/modulo_livro");
const modulo_usuario_1 = require("./view/modulo_usuario");
var leia = require("prompt-sync")();
var opcao = "";
while (opcao.toUpperCase() != "S") {
    opcao = leia("Qual modulo você deseja entrar: ? (U)Usario,(E)Emprestimo(L)Livro(S)Sair:");
    if (opcao.toUpperCase() == "U") {
        console.log("Você acabou de entra no modulo usuario");
        moduloUsuario();
    }
    else if (opcao.toUpperCase() == "E") {
        console.log("Você acabou de entra no modulo de emprestimo");
        moduloEmprestimo();
    }
    else if (opcao.toUpperCase() == "L") {
        console.log("Voce entrou no modulo Livro:");
        moduloLivro();
    }
    else if (opcao.toUpperCase() != "S") {
        console.log("Invalido, tente novamente!");
    }
}
function moduloUsuario() {
    var opcaoUsuario = leia("Digite C, para cadastra L, para listar E, para editar R, para remover e S, para sair do modulo:");
    if (opcaoUsuario.toUpperCase() == "C") {
        console.log("Cadastra");
        (0, modulo_usuario_1.cadastraUsuario)();
    }
    else if (opcaoUsuario.toUpperCase() == "L") {
        console.log("Listar");
        (0, modulo_usuario_1.listarUsuario)();
    }
    else if (opcaoUsuario.toUpperCase() == "E") {
        console.log("Editar");
        (0, modulo_usuario_1.editarUsuario)();
    }
    else if (opcaoUsuario.toUpperCase() == "R") {
        console.log("Remover");
        (0, modulo_usuario_1.removerUsuario)();
    }
    else if (opcaoUsuario.toUpperCase() == "S") {
        console.log("Sair!");
        return;
    }
    else {
        console.log("Opção Invalida");
    }
    moduloUsuario();
}
function moduloLivro() {
    var opcaoLivro = leia("Digite C, para cadastra L, para listar E, para editar R, para remover e S, para sair do modulo:");
    if (opcaoLivro.toUpperCase() == "C") {
        console.log("Cadastra");
        (0, modulo_livro_1.cadastraLivro)();
    }
    else if (opcaoLivro.toUpperCase() == "L") {
        console.log("Listar");
        (0, modulo_livro_1.listarLivros)();
    }
    else if (opcaoLivro.toUpperCase() == "E") {
        console.log("Alterar");
        (0, modulo_livro_1.alterarLivro)();
    }
    else if (opcaoLivro.toUpperCase() == "R") {
        console.log("Remover");
        (0, modulo_livro_1.removerLivro)();
    }
    else if (opcaoLivro.toUpperCase() == "S") {
        console.log("Sair!");
        return;
    }
    else {
        console.log("Opção Invalida");
    }
    moduloLivro();
}
function moduloEmprestimo() {
    var opcaoEmprestimo = leia("Digite C, para cadastra L, para listar E, para editar R, para remover e S, para sair do modulo:");
    if (opcaoEmprestimo.toUpperCase() == "C") {
        console.log("Cadastra");
        (0, modulo_emprestimo_1.cadastraEmprestimo)();
    }
    else if (opcaoEmprestimo.toUpperCase() == "L") {
        console.log("Listar");
        (0, modulo_emprestimo_1.listarEmprestimos)();
    }
    else if (opcaoEmprestimo.toUpperCase() == "E") {
        console.log("Editar");
        (0, modulo_emprestimo_1.editarEmprestimo)();
    }
    else if (opcaoEmprestimo.toUpperCase() == "R") {
        console.log("Remover");
        (0, modulo_emprestimo_1.removerEmprestimo)();
    }
    else if (opcaoEmprestimo.toUpperCase() == "S") {
        console.log("Sair!");
        return;
    }
    else {
        console.log("Opção Invalida");
    }
    moduloEmprestimo();
}
