import { Categoria } from "./categoria";
export class Livro{
titulo: string;
autor: string;
categoria: Categoria;
disponibilidade: number;
id: number | null ;
constructor(tituloAux:string, autor:string, categoria:Categoria, disponibilidade:number, id: number| null){
    this.titulo = tituloAux;
    this.autor = autor;
    this.categoria = categoria;
    this.disponibilidade = disponibilidade
    this.id = id 
}
exibir(){
        console.log("Titulo: "+this.titulo);
        console.log("Autor: "+this.autor);
        console.log("Categoria: "+Categoria[this.categoria]);
        console.log("Disponibilidade: "+this.disponibilidade);
    }
    cadastrar(){
        console.log("Livro cadastrado com sucesso")
         }
         alterar(){
            console.log("Livro alterado com sucesso:")
     
         }
         remover(){
            console.log("Livro removido com sucesso.")
         }
        static listar(nome:string):Livro[]{
    console.log("Listado com sucesso")
            return [];
     }
        static proucurarPorId(id:number):Livro|null{
            console.log("Procurando Livro")
            return null;
     
         }
     
     }
     


