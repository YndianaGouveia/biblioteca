import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Emprestimo } from "./emprestimo";
    @Entity()
 export class Usuario{
    @Column()
    nome: string;
    @PrimaryColumn()
    idEstudante: number;
    @Column()
    endereco: string;
    @Column()
    telefone: number;
    @OneToMany(()=> Emprestimo, (emprestimos)=>emprestimos.usuario)
    emprestimos!: Emprestimo[]
    constructor(nomeAux:string, idEstudante:number,endereco: string,telefone:number){
        this.nome = nomeAux
        this.idEstudante = idEstudante
        this.endereco = endereco
        this.telefone = telefone
    }
    exibir(){
        console.log("Nome:"+this.nome);
        console.log("idEstudamte:" +this.idEstudante);
        console.log("Endereço:" +this.endereco);
        console.log("Telefone:" +this.telefone);
    }
    cadastrar(){
   console.log("Usuario cadastrado com sucesso")
    }
    alterar(){
        console.log("Usuário alterado com sucesso")
    }
    remover(){
        console.log("Usuário removido com sucesso")
    }
   static listar(nome:string):Usuario[]{
        console.log("Emprestimo listadi com sucesso")
        return [];
    }
   static proucurarPorId(id:number):Usuario|null{
        console.log("Proucurando Usuario")
    return null;

    }

}
