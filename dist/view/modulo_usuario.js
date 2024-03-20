"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarUsuario = exports.removerUsuario = exports.alterarUsuario = exports.listarUsuario = exports.cadastraUsuario = void 0;
const usuario_1 = require("../domain/usuario");
let leia = require("prompt-sync")();
function cadastraUsuario() {
    let nome = leia("Informe o nome");
    let id = leia("Informe o id do estude");
    let endereco = leia("Informe o endereço do estudante");
    let telefone = leia("Informe o telefone do estudante");
    let usuario = new usuario_1.Usuario(nome, id, endereco, telefone);
}
exports.cadastraUsuario = cadastraUsuario;
function listarUsuario() {
}
exports.listarUsuario = listarUsuario;
function alterarUsuario() {
}
exports.alterarUsuario = alterarUsuario;
function removerUsuario() {
}
exports.removerUsuario = removerUsuario;
function editarUsuario() {
}
exports.editarUsuario = editarUsuario;
