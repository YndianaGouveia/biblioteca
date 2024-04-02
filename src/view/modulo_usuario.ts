import { Usuario } from "../domain/usuario";
let leia = require("prompt-sync")();
export function cadastraUsuario(){
    let nome: string = leia("Informe o nome");
    let id: number = leia("Informe o id do estude");
    let endereco: string = leia("Informe o endereço do estudante");
    let telefone: number = leia ("Informe o telefone do estudante");    
    let usuario: Usuario = new Usuario(nome,id,endereco,telefone);
    usuario.cadastrar();
}
export function listarUsuario(){
    
}
export function alterarUsuario(){
    let id: number = leia ("Informe o id de usuário")
    let usuarioAeditar: Usuario | null = Usuario.proucurarPorId(id);
    if(usuarioAeditar == null){
        console.log("Usuário não encontrado")
    }
}
export function removerUsuario(){
    
}
export function editarUsuario(){
    let id: number = leia("Informe o id do livro")
    let usuarioAeditar: Usuario | null =  Usuario.proucurarPorId(id);
    if(usuarioAeditar == null){
     console.log("Usuario não encontrado.")
    }
}