 export class Usuario{
    nome: string;
    idEstudante: number;
    endereco: string;
    telefone: number;
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
}
