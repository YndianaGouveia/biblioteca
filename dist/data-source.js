"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const usuario_1 = require("./domain/usuario");
const livro_1 = require("./domain/livro");
const emprestimo_1 = require("./domain/emprestimo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ibc123",
    database: "Biblioteca",
    synchronize: true,
    logging: true,
    entities: [emprestimo_1.Emprestimo, livro_1.Livro, usuario_1.Usuario],
    subscribers: [],
    migrations: [],
});
