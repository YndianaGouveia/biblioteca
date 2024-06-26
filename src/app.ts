import { error } from "console";
import { AppDataSource } from "./data-source";
import { cadastraEmprestimo, editarEmprestimo, listarEmprestimos, removerEmprestimo } from "./view/modulo_emprestimo";
import { cadastraLivro, alterarLivro, listarLivros, removerLivro } from "./view/modulo_livro";
import { cadastraUsuario, editarUsuario, listarUsuario, removerUsuario } from "./view/modulo_usuario";
AppDataSource.initialize().then(
 async() => {executar()}
).catch((error)=> console.log("Erro ao conectar no banco de dados", error))
var leia = require("prompt-sync")();
var opcao = "";
function executar(){
while(opcao.toUpperCase()!= "S"){
    opcao = leia("Qual modulo você deseja entrar: ? (U)Usario,(E)Emprestimo(L)Livro(S)Sair:");
    if(opcao.toUpperCase() == "U"){
        console.log("Você acabou de entra no modulo usuario");
        moduloUsuario();
    }else if(opcao.toUpperCase() == "E"){
        console.log("Você acabou de entra no modulo de emprestimo");
        moduloEmprestimo();
    } else if(opcao.toUpperCase() == "L"){ console.log("Voce entrou no modulo Livro:");
    moduloLivro();
    }else if(opcao.toUpperCase()!="S"){
        console.log("Invalido, tente novamente!")
    }
}
}
function moduloUsuario(){
    var opcaoUsuario  = leia("Digite C, para cadastra L, para listar E, para editar R, para remover e S, para sair do modulo:");
    if(opcaoUsuario.toUpperCase() == "C"){    console.log("Cadastra");

    cadastraUsuario();
    }else if(opcaoUsuario.toUpperCase() == "L"){
        console.log("Listar");
        listarUsuario();
    }else if(opcaoUsuario.toUpperCase() == "E"){
        console.log("Editar");
        editarUsuario();
    }else if(opcaoUsuario.toUpperCase() == "R"){
        console.log("Remover");
        removerUsuario();
    }else if(opcaoUsuario.toUpperCase() == "S"){
        console.log("Sair!");
        return;
    }
    else{
        console.log("Opção Invalida");
    }
    moduloUsuario();

}
function moduloLivro(){
    var opcaoLivro  = leia("Digite C, para cadastra L, para listar E, para editar R, para remover e S, para sair do modulo:");
    if(opcaoLivro.toUpperCase() == "C"){    console.log("Cadastra");

    cadastraLivro();
    }else if(opcaoLivro.toUpperCase() == "L"){
        console.log("Listar");
        listarLivros();
    }else if(opcaoLivro.toUpperCase() == "E"){
        console.log("Alterar");
        alterarLivro();
    }else if(opcaoLivro.toUpperCase() == "R"){
        console.log("Remover");
        removerLivro();
    }else if(opcaoLivro.toUpperCase() == "S"){
        console.log("Sair!");
        return;
    }
    else{
        console.log("Opção Invalida");
    }
    moduloLivro();
}
function moduloEmprestimo(){
    var opcaoEmprestimo  = leia("Digite C, para cadastra L, para listar E, para editar R, para remover e S, para sair do modulo:");
    if(opcaoEmprestimo.toUpperCase() == "C"){    console.log("Cadastra");

    cadastraEmprestimo();
    }else if(opcaoEmprestimo.toUpperCase() == "L"){
        console.log("Listar");
        listarEmprestimos();
    }else if(opcaoEmprestimo.toUpperCase() == "E"){
        console.log("Editar");
        editarEmprestimo();
    }else if(opcaoEmprestimo.toUpperCase() == "R"){
        console.log("Remover");
        removerEmprestimo();
    }else if(opcaoEmprestimo.toUpperCase() == "S"){
        console.log("Sair!");
        return;
    }
    else{
        console.log("Opção Invalida");
    }
    moduloEmprestimo();

}


