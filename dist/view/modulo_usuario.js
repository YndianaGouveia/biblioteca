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
    usuario.cadastrar();
}
exports.cadastraUsuario = cadastraUsuario;
function listarUsuario() {
}
exports.listarUsuario = listarUsuario;
function alterarUsuario() {
    let id = leia("Informe o id de usuário");
    let usuarioAeditar = usuario_1.Usuario.proucurarPorId(id);
    if (usuarioAeditar == null) {
        console.log("Usuário não encontrado");
    }
}
exports.alterarUsuario = alterarUsuario;
function removerUsuario() {
}
exports.removerUsuario = removerUsuario;
function editarUsuario() {
    let id = leia("Informe o id do livro");
    let usuarioAeditar = usuario_1.Usuario.proucurarPorId(id);
    if (usuarioAeditar == null) {
        console.log("Livro não encontrado.");
    }
}
exports.editarUsuario = editarUsuario;
