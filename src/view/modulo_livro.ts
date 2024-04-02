import exp from "constants";
import { Categoria } from "../domain/categoria";
import { Livro } from "../domain/livro";
import { strict } from "assert";
let leia = require("prompt-sync")();
export function cadastraLivro(){
let titulo: string = leia("Informe o titulo:");
let autor: string = leia ("Informe o autor do livro:");
let categoria : Categoria = leia("Informe a categoria:")
let disponibilidade: number = leia("Informe a disponibilidade do livro:")
let livrocadastrado: Livro = new Livro(titulo,autor,categoria,disponibilidade,null);

}
export function listarLivros(){

}
export function alterarLivro(){
    let id: number = leia("Informe o id do livro")
   let livroAeditar: Livro | null =  Livro.proucurarPorId(id);
   if(livroAeditar == null){
    console.log("Livro não encontrado.")
   }
}
export function removerLivro(){

}