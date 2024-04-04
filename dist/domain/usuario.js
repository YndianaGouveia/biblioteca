"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
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
    cadastrar() {
        console.log("Usuario cadastrado com sucesso");
    }
    alterar() {
        console.log("Usuário alterado com sucesso");
    }
    remover() {
        console.log("Usuário removido com sucesso");
    }
    static listar(nome) {
        console.log("Emprestimo listadi com sucesso");
        return [];
    }
    static proucurarPorId(id) {
        console.log("Proucurando Usuario");
        return null;
    }
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Usuario.prototype, "idEstudante", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Usuario.prototype, "telefone", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Number, String, Number])
], Usuario);
