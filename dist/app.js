"use strict";
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
}
function moduloLivro() {
    var opcaoLivro = leia("Digite C, para cadastra L, para listar E, para editar R, para remover e S, para sair do modulo:");
    if (opcaoLivro.toUpperCase() == "C") {
        console.log("Cadastra");
    }
    else if (opcaoLivro.toUpperCase() == "L") {
        console.log("Listar");
    }
    else if (opcaoLivro.toUpperCase() == "E") {
        console.log("Editar");
    }
    else if (opcaoLivro.toUpperCase() == "R") {
        console.log("Remover");
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
}
