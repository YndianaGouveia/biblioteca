import { Livro } from "./livro";
import { Usuario } from "./usuario";
 export class Emprestimo{
   livro: Livro;
   usuario: Usuario;
   dataEmprestimo: number;
   dataDevolucao: number;
   id: number | null ;
   constructor(livro:Livro, usuario:Usuario,dataEmprestimo:number,dataDevolucao:number,id:number | null){
      this.livro = livro;
      this.usuario = usuario;
      this.dataEmprestimo = dataEmprestimo
      this.dataDevolucao = dataDevolucao
      this.id = id 
   }
   exibir(){
      console.log("Livro: "+this.livro.titulo + " - "+ this.livro.autor + " - "+this.livro.disponibilidade);
      console.log("Usuario: "+this.usuario.nome);
      console.log("Data de Empréstimo: "+this.dataDevolucao);
      console.log("Data de Devolução: " +this.dataDevolucao);
   }
   cadastrar(){
      console.log("Emprestimo Cadastrado com sucesso.")
       }
       alterar(){
         console.log("Emprestimo alterado com sucesso")
       }
       remover(){
         console.log("Emprestimo removido com sucesso")
       }
      static listar(nome:string):Emprestimo[]{
        console.log("Emprestimo listado com sucesso")
        return [];
       }
      static proucurarPorId(id:number):Emprestimo|null{
        console.log("Emprestimos encontrado com sucesso")  
        return null;
  
       } 
   }
   
