import { Usuario } from "../domain/usuario";
let leia = require("prompt-sync")();
export function cadastraUsuario(){
    let nome: string = leia("Informe o nome");
    let id: number = leia("Informe o id do estude");
    let endereco: string = leia("Informe o endereço do estudante");
    let telefone: number = leia ("Informe o telefone do estudante");    
    let usuario: Usuario = new Usuario(nome,id,endereco,telefone);
}
export function listarUsuario(){
    
}
export function alterarUsuario(){
    
}
export function removerUsuario(){
    
}
export function editarUsuario(){
    
}