"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nomeAux, idEstudante, endereco, telefone) {
        this.nome = nomeAux;
        this.idEstudante = idEstudante;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    exibir() {
        console.log("Nome:" + this.nome);
        console.log("idEstudamte:" + this.idEstudante);
        console.log("Endereço:" + this.endereco);
        console.log("Telefone:" + this.telefone);
    }
}
exports.Usuario = Usuario;
