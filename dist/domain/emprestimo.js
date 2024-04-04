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
exports.Emprestimo = void 0;
const typeorm_1 = require("typeorm");
const livro_1 = require("./livro");
const usuario_1 = require("./usuario");
let Emprestimo = class Emprestimo {
    constructor(livro, usuario, dataEmprestimo, dataDevolucao, id) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.id = id;
    }
    exibir() {
        console.log("Livro: " + this.livro.titulo + " - " + this.livro.autor + " - " + this.livro.disponibilidade);
        console.log("Usuario: " + this.usuario.nome);
        console.log("Data de Empréstimo: " + this.dataDevolucao);
        console.log("Data de Devolução: " + this.dataDevolucao);
    }
    cadastrar() {
        console.log("Emprestimo Cadastrado com sucesso.");
    }
    alterar() {
        console.log("Emprestimo alterado com sucesso");
    }
    remover() {
        console.log("Emprestimo removido com sucesso");
    }
    static listar(nome) {
        console.log("Emprestimo listado com sucesso");
        return [];
    }
    static proucurarPorId(id) {
        console.log("Emprestimos encontrado com sucesso");
        return null;
    }
};
exports.Emprestimo = Emprestimo;
__decorate([
    (0, typeorm_1.ManyToOne)(() => livro_1.Livro),
    __metadata("design:type", livro_1.Livro)
], Emprestimo.prototype, "livro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.Usuario),
    __metadata("design:type", usuario_1.Usuario)
], Emprestimo.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Emprestimo.prototype, "dataEmprestimo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Emprestimo.prototype, "dataDevolucao", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Object)
], Emprestimo.prototype, "id", void 0);
exports.Emprestimo = Emprestimo = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [livro_1.Livro, usuario_1.Usuario, Number, Number, Object])
], Emprestimo);
