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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const typeorm_1 = require("typeorm");
const categoria_1 = require("./categoria");
const data_source_1 = require("../data-source");
let Livro = class Livro {
    constructor(tituloAux, autor, categoria, disponibilidade, id) {
        this.titulo = tituloAux;
        this.autor = autor;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.id = id;
    }
    exibir() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Categoria: " + categoria_1.Categoria[this.categoria]);
        console.log("Disponibilidade: " + this.disponibilidade);
    }
    cadastrar() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Livro cadastrado com sucesso");
            yield data_source_1.AppDataSource.manager.save(this);
        });
    }
    alterar() {
        console.log("Livro alterado com sucesso:");
    }
    remover() {
        console.log("Livro removido com sucesso.");
    }
    static listar(nome) {
        console.log("Listado com sucesso");
        return [];
    }
    static proucurarPorId(id) {
        console.log("Procurando Livro");
        return null;
    }
};
exports.Livro = Livro;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Livro.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Livro.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Livro.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Livro.prototype, "disponibilidade", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Object)
], Livro.prototype, "id", void 0);
exports.Livro = Livro = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Number, Number, Object])
], Livro);
