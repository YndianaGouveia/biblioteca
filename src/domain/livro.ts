import { Categoria } from "./categoria";
export class Livro{
titulo: string;
autor: string;
categoria: Categoria;
disponibilidade: number;
constructor(tituloAux:string, autor:string, categoria:Categoria, disponibilidade:number){
    this.titulo = tituloAux;
    this.autor = autor;
    this.categoria = categoria;
    this.disponibilidade = disponibilidade
}
exibir(){
        console.log("Titulo: "+this.titulo);
        console.log("Autor: "+this.autor);
        console.log("Categoria: "+Categoria[this.categoria]);
        console.log("Disponibilidade: "+this.disponibilidade);
    }
}

