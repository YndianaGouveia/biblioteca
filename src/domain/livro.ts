import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria"
import { addEmitHelper } from "typescript";
import { AppDataSource } from "../data-source";
import { Emprestimo } from "./emprestimo";
@Entity()
export class Livro{
    @Column()
    titulo: string;
    @Column()
    autor: string;
    @Column()
    categoria: Categoria;
    @Column()
    disponibilidade: number;
    @PrimaryColumn()
    id!: number ;
    @OneToMany(()=> Emprestimo, (emprestimos)=>emprestimos.livro)
    emprestimos!: Emprestimo[]
    constructor(tituloAux:string, autor:string, categoria:Categoria, disponibilidade:number, id: number| null){
        this.titulo = tituloAux;
        this.autor = autor;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade
        if(id!=null)
            this.id = id 
    }
    exibir(){
        console.log("Titulo: "+this.titulo);
        console.log("Autor: "+this.autor);
        console.log("Categoria: "+Categoria[this.categoria]);
        console.log("Disponibilidade: "+this.disponibilidade);
    }
   async cadastrar(){
        console.log("Livro cadastrado com sucesso")
        await AppDataSource.manager.save(this);     
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
     


