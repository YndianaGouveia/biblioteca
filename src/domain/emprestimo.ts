import { Livro } from "./livro";
import { Usuario } from "./usuario";
 export class Emprestimo{
    livro: Livro;
    usuario: Usuario;
    dataEmprestimo: number;
    dataDevolucao: number;
 constructor(livro:Livro,usuario:Usuario,dataEmprestimo:number,dataDevolucao:number){
    this.livro = livro;
    this.usuario = usuario;
    this.dataEmprestimo = dataEmprestimo
    this.dataDevolucao = dataDevolucao
 }
   exibir(){
      console.log("Livro: "+this.livro.titulo);
      console.log("Usuario: "+this.usuario.nome);
      console.log("data de emprestimo:"+this.dataDevolucao);
      console.log("Data de Devolução:" +this.dataDevolucao);
 }
}