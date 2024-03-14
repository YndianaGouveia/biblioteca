"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, idEstudante, endereco, telefone) {
        this.nome = nome;
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
